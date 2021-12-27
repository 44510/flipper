/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {parseXcodeFromCoreSimPath} from '../iOSDeviceManager';
import {getLogger} from 'flipper-common';
import {IOSBridge} from '../IOSBridge';
import {FlipperServerImpl} from '../../../FlipperServerImpl';
// eslint-disable-next-line node/no-extraneous-import
import {getRenderHostInstance} from 'flipper-ui-core';
import {
  getFlipperServerConfig,
  setFlipperServerConfig,
} from '../../../FlipperServerConfig';

beforeEach(() => {
  setFlipperServerConfig(getRenderHostInstance().serverConfig);
});

afterEach(() => {
  setFlipperServerConfig(undefined);
});

const standardCoresimulatorLog =
  'username            1264   0.0  0.1  5989740  41648   ??  Ss    2:23PM   0:12.92 /Applications/Xcode_12.4.0_fb.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/usr/libexec/mobileassetd';

const nonStandardCoresimulatorLog =
  'username            1264   0.0  0.1  5989740  41648   ??  Ss    2:23PM   0:12.92 /Some/Random/Path/Xcode_12.4.0_fb.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/usr/libexec/mobileassetd';

const nonStandardSpecialCharacterAphanumericCoresimulatorLog =
  'username            1264   0.0  0.1  5989740  41648   ??  Ss    2:23PM   0:12.92 /Some_R@d0m/Path-3455355/path(2)+connection/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Library/Developer/CoreSimulator/Profiles/Runtimes/iOS.simruntime/Contents/Resources/RuntimeRoot/usr/libexec/mobileassetd';

test('test parseXcodeFromCoreSimPath from non standard locations', () => {
  const match = parseXcodeFromCoreSimPath(nonStandardCoresimulatorLog);
  expect(match && match.length > 0).toBeTruthy();
  expect(
    // @ts-ignore the null and non zero lenght check for match is already done above
    match[0],
  ).toEqual('/Some/Random/Path/Xcode_12.4.0_fb.app/Contents/Developer');
});

test('test parseXcodeFromCoreSimPath from non standard alphanumeric special character locations', () => {
  const match = parseXcodeFromCoreSimPath(
    nonStandardSpecialCharacterAphanumericCoresimulatorLog,
  );
  expect(match && match.length > 0).toBeTruthy();
  expect(
    // @ts-ignore the null and non zero lenght check for match is already done above
    match[0],
  ).toEqual(
    '/Some_R@d0m/Path-3455355/path(2)+connection/Xcode.app/Contents/Developer',
  );
});

test('test parseXcodeFromCoreSimPath from standard locations', () => {
  const match = parseXcodeFromCoreSimPath(standardCoresimulatorLog);
  expect(match && match.length > 0).toBeTruthy();
  expect(
    // @ts-ignore the null and non zero lenght check for match is already done above
    match[0],
  ).toEqual('/Applications/Xcode_12.4.0_fb.app/Contents/Developer');
});

test('test getAllPromisesForQueryingDevices when xcode detected', () => {
  const flipperServer = new FlipperServerImpl(
    getFlipperServerConfig(),
    getLogger(),
  );
  flipperServer.ios.iosBridge = {} as IOSBridge;
  const promises = flipperServer.ios.getAllPromisesForQueryingDevices(
    true,
    false,
  );
  expect(promises.length).toEqual(2);
});

test('test getAllPromisesForQueryingDevices when xcode is not detected', () => {
  const flipperServer = new FlipperServerImpl(
    getFlipperServerConfig(),
    getLogger(),
  );
  flipperServer.ios.iosBridge = {} as IOSBridge;
  const promises = flipperServer.ios.getAllPromisesForQueryingDevices(
    false,
    true,
  );
  expect(promises.length).toEqual(1);
});

test('test getAllPromisesForQueryingDevices when xcode and idb are both unavailable', () => {
  const flipperServer = new FlipperServerImpl(
    getFlipperServerConfig(),
    getLogger(),
  );
  flipperServer.ios.iosBridge = {} as IOSBridge;
  const promises = flipperServer.ios.getAllPromisesForQueryingDevices(
    false,
    false,
  );
  expect(promises.length).toEqual(0);
});

test('test getAllPromisesForQueryingDevices when both idb and xcode are available', () => {
  const flipperServer = new FlipperServerImpl(
    getFlipperServerConfig(),
    getLogger(),
  );
  flipperServer.ios.iosBridge = {} as IOSBridge;
  const promises = flipperServer.ios.getAllPromisesForQueryingDevices(
    true,
    true,
  );
  expect(promises.length).toEqual(2);
});
