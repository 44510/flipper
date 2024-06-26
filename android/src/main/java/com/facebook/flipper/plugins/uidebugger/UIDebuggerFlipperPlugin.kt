/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.flipper.plugins.uidebugger

import android.util.Log
import com.facebook.flipper.core.FlipperConnection
import com.facebook.flipper.core.FlipperObject
import com.facebook.flipper.core.FlipperPlugin
import com.facebook.flipper.plugins.uidebugger.core.*
import com.facebook.flipper.plugins.uidebugger.descriptors.ApplicationRefDescriptor
import com.facebook.flipper.plugins.uidebugger.descriptors.CompoundTypeHint
import com.facebook.flipper.plugins.uidebugger.descriptors.Id
import com.facebook.flipper.plugins.uidebugger.descriptors.MetadataRegister
import com.facebook.flipper.plugins.uidebugger.model.Action
import com.facebook.flipper.plugins.uidebugger.model.ActionIcon
import com.facebook.flipper.plugins.uidebugger.model.InitEvent
import com.facebook.flipper.plugins.uidebugger.model.MetadataId
import com.facebook.flipper.plugins.uidebugger.model.MetadataUpdateEvent
import java.lang.IllegalStateException
import kotlinx.serialization.json.Json
import kotlinx.serialization.modules.SerializersModule

const val LogTag = "ui-debugger"

class UIDebuggerFlipperPlugin(val context: UIDContext) : FlipperPlugin {

  init {
    Log.i(LogTag, "Initializing ui-debugger")
  }

  override fun getId(): String {
    return "ui-debugger"
  }

  @Throws(Exception::class)
  override fun onConnect(connection: FlipperConnection) {
    this.context.connectionRef.connection = connection
    this.context.bitmapPool.makeReady()

    connection.receive("editAttribute") { args, responder ->
      try {
        val nodeId = args.getInt("nodeId")

        val value = args.getDynamic("value")

        val metadataIdsRaw = args.getArray("metadataIdPath")
        val metadataIds = mutableListOf<MetadataId>()
        for (i in 0 until metadataIdsRaw.length()) {
          metadataIds.add(metadataIdsRaw.get(i) as Int)
        }

        val compoundTypeHint =
            args.getString("compoundTypeHint")?.let {
              enumValueOf<CompoundTypeHint>(it.uppercase())
            }

        context.attributeEditor.editValue(nodeId, metadataIds, value, compoundTypeHint)

        responder.success()
      } catch (exception: Exception) {

        val errorResponse =
            FlipperObject.Builder()
                .put("errorType", exception.javaClass)
                .put("errorMessage", exception.message)
                .put("stackTrace", exception.stackTraceToString())
                .build()
        responder.error(errorResponse)
      }
    }

    connection.receive("onCustomAction") { args, responder ->
      try {
        val customActionGroupIndex = args.getInt("customActionGroupIndex")
        val customAction = context.customActionGroups[customActionGroupIndex]

        val customActionIndex = args.getInt("customActionIndex")
        when (val item = customAction.actions[customActionIndex]) {
          is Action.UnitAction -> {
            item.action()
            context.decorViewTracker.requestTraversal()
            responder.success()
          }
          is Action.BooleanAction -> {
            val newBooleanActionValue = args.getBoolean("value")
            val result = item.action(newBooleanActionValue)
            context.decorViewTracker.requestTraversal()
            responder.success(FlipperObject.Builder().put("result", result).build())
          }
        }
      } catch (exception: Exception) {

        val errorResponse =
            FlipperObject.Builder()
                .put("errorType", exception.javaClass)
                .put("errorMessage", exception.message)
                .put("stackTrace", exception.stackTraceToString())
                .build()
        responder.error(errorResponse)
      }
    }

    connection.receive("additionalNodeInspectionChange") { args, responder ->
      try {
        val changeType = args.getString("changeType")
        val nodeId: Id = args.getInt("nodeId")

        when (changeType) {
          "Add" -> context.layoutTraversal.additionalNodeInspectionIds.add(nodeId)
          "Remove" -> context.layoutTraversal.additionalNodeInspectionIds.remove(nodeId)
          else -> throw IllegalStateException("Unknown change type: $changeType")
        }

        context.decorViewTracker.requestTraversal()
        responder.success()
      } catch (exception: Exception) {

        val errorResponse =
            FlipperObject.Builder()
                .put("errorType", exception.javaClass)
                .put("errorMessage", exception.message)
                .put("stackTrace", exception.stackTraceToString())
                .build()
        responder.error(errorResponse)
      }
    }

    connection.send(
        InitEvent.name,
        INIT_EVENT_JSON.encodeToString(
            InitEvent.serializer(),
            InitEvent(
                ApplicationRefDescriptor.getId(context.applicationRef),
                context.frameworkEventMetadata,
                context.customActionGroups)))

    connection.send(
        MetadataUpdateEvent.name,
        Json.encodeToString(
            MetadataUpdateEvent.serializer(),
            MetadataUpdateEvent(MetadataRegister.extractPendingMetadata())))

    context.updateQueue.start()
    context.decorViewTracker.start()

    context.connectionListeners.forEach { it.onConnect() }
  }

  @Throws(Exception::class)
  override fun onDisconnect() {
    this.context.connectionRef.connection = null

    MetadataRegister.reset()

    context.decorViewTracker.stop()
    context.updateQueue.stop()

    context.bitmapPool.recycleAll()
    context.connectionListeners.forEach { it.onDisconnect() }
    context.clearFrameworkEvents()
  }

  override fun runInBackground(): Boolean {
    return false
  }

  companion object {
    private val INIT_EVENT_JSON = Json {
      serializersModule = SerializersModule {
        polymorphic(
            Action::class,
            Action.UnitAction::class,
            Action.UnitAction.serializer(),
        )
        polymorphic(
            Action::class,
            Action.BooleanAction::class,
            Action.BooleanAction.serializer(),
        )
        polymorphic(
            ActionIcon::class,
            ActionIcon.Local::class,
            ActionIcon.Local.serializer(),
        )
        polymorphic(
            ActionIcon::class,
            ActionIcon.Antd::class,
            ActionIcon.Antd.serializer(),
        )
        polymorphic(
            ActionIcon::class,
            ActionIcon.Fb::class,
            ActionIcon.Fb.serializer(),
        )
      }
    }
  }
}
