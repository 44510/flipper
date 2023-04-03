"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4257],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>u,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>d,withMDXComponents:()=>p});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,f=p["".concat(l,".").concat(c)]||p[c]||m[c]||i;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.r(n),t.d(n,{default:()=>l});var r=t(67294),a=t(86010);const i="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.default)(i,l),hidden:t},n)}},74866:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var r=t(83117),a=t(67294),i=t(86010),l=t(12466),o=t(76775),s=t(91980),u=t(67392),p=t(50012);function d(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function c(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:d(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function g(e){var n,t,r,i,l=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,d=c(e),g=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),v=g[0],h=g[1],y=f({queryString:s,groupId:u}),b=y[0],x=y[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,p.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),T=k[0],w=k[1],N=function(){var e=null!=b?b:T;return m({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){N&&h(N)}),[N]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);h(e),x(e),w(e)}),[x,w,d]),tabValues:d}}var v=t(72389);const h="tabList__CuJ",y="tabItem_LNqP";function b(e){var n=e.className,t=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=p.indexOf(n),r=u[t].value;r!==o&&(d(n),s(r))},m=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;t=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var i,l=p.indexOf(e.currentTarget)-1;t=null!=(i=p[l])?i:p[p.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.default)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},l,{className:(0,i.default)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":o===n})}),null!=t?t:n)})))}function x(e){var n=e.lazy,t=e.children,r=e.selectedValue;if(t=Array.isArray(t)?t:[t],n){var i=t.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},t.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function k(e){var n=g(e);return a.createElement("div",{className:(0,i.default)("tabs-container",h)},a.createElement(b,(0,r.Z)({},e,n)),a.createElement(x,(0,r.Z)({},e,n)))}function T(e){var n=(0,v.default)();return a.createElement(k,(0,r.Z)({key:String(n)},e))}},60370:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>x,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),l=t(74866),o=t(85162),s=["components"],u={id:"testing",title:"Testing"},p=void 0,d={unversionedId:"extending/testing",id:"extending/testing",title:"Testing",description:"Developer tools are only used if they work. Testing is important as it discovers defects/bugs and improves the quality, reliability and functionality of software.",source:"@site/../docs/extending/testing.mdx",sourceDirName:"extending",slug:"/extending/testing",permalink:"/docs/extending/testing",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/extending/testing.mdx",tags:[],version:"current",frontMatter:{id:"testing",title:"Testing"},sidebar:"main",previous:{title:"Plugin structure",permalink:"/docs/extending/desktop-plugin-structure"},next:{title:"Debugging",permalink:"/docs/extending/debugging"}},c={},m=[{value:"Writing tests",id:"writing-tests",level:2},{value:"Desktop plugins",id:"desktop-plugins",level:3},{value:"Client plugins",id:"client-plugins",level:2},{value:"Running (Flipper) tests",id:"running-flipper-tests",level:2},{value:"Flipper Desktop",id:"flipper-desktop",level:3},{value:"Flipper SDK",id:"flipper-sdk",level:3},{value:"Android (Java)",id:"android-java",level:4},{value:"Gradle",id:"gradle",level:5},{value:"Gradle",id:"gradle-1",level:5},{value:"Buck",id:"buck",level:5},{value:"iOS",id:"ios",level:3},{value:"React Native",id:"react-native",level:3}],f=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",n)}},g=f("OssOnly"),v=f("FbAndroidTesting"),h=f("FbIosTesting"),y=f("FbInternalOnly"),b={toc:m};function x(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.mdx)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Developer tools are only used if they work. Testing is important as it discovers defects/bugs and improves the quality, reliability and functionality of software.\nThis page details the Flipper APIs that can be used to effectively test plugins."),(0,i.mdx)("h2",{id:"writing-tests"},"Writing tests"),(0,i.mdx)("p",null,"This section covers ",(0,i.mdx)("a",{parentName:"p",href:"#desktop-plugins"},"desktop plugins")," and ",(0,i.mdx)("a",{parentName:"p",href:"#client-plugins"},"client plugins"),"."),(0,i.mdx)("h3",{id:"desktop-plugins"},"Desktop plugins"),(0,i.mdx)("p",null,"Flipper uses ",(0,i.mdx)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," as a unit testing framework."),(0,i.mdx)("p",null,"Writing unit tests for Flipper Desktop plugins is covered in detail in the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/tutorial/js-custom#testing-plugin-logic"},"Building a Desktop Plugin")," tutorial."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"flipper-plugin")," package provide several ",(0,i.mdx)("a",{parentName:"p",href:"/docs/extending/flipper-plugin#testutils"},"test utilities")," to make testing more convenient."),(0,i.mdx)("h2",{id:"client-plugins"},"Client plugins"),(0,i.mdx)(l.default,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,i.mdx)(o.default,{value:"android",mdxType:"TabItem"},(0,i.mdx)(g,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Start by creating your first test file in this directory ",(0,i.mdx)("inlineCode",{parentName:"p"},"MyFlipperPluginTest.java"),". In the test method body, is the plugin to be tested as well as a ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperConnectionMock"),"."),(0,i.mdx)("p",null,"The following example asserts that the plugin's connected status is what is expected:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"@RunWith(RobolectricTestRunner.class)\npublic class MyFlipperPluginTest {\n\n  @Test\n  public void myTest() {\n    final MyFlipperPlugin plugin = new MyFlipperPlugin();\n    final FlipperConnectionMock connection = new FlipperConnectionMock();\n\n    plugin.onConnect(connection);\n    assertThat(plugin.connected(), equalTo(true));\n  }\n}\n")),(0,i.mdx)("p",null,"There are two mock classes that are used to construct tests: ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperConnectionMock")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"FlipperResponderMock"),". Together these can be used to write very powerful tests to verify the end-to-end functionality of your plugin."),(0,i.mdx)("p",null,"For example, you can test if, for a given incoming message, your plugin responds as expected:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void myTest() {\n  final MyFlipperPlugin plugin = new MyFlipperPlugin();\n  final FlipperConnectionMock connection = new FlipperConnectionMock();\n  final FlipperResponderMock responder = new FlipperResponderMock();\n\n  plugin.onConnect(connection);\n\n  final FlipperObject params = new FlipperObject.Builder()\n      .put("phrase", "flipper")\n      .build();\n  connection.receivers.get("myMethod").onReceive(params, responder);\n\n  assertThat(responder.successes, hasItem(\n      new FlipperObject.Builder()\n          .put("phrase", "ranos")\n          .build()));\n}\n'))),(0,i.mdx)(v,{mdxType:"FbAndroidTesting"})),(0,i.mdx)(o.default,{value:"ios",mdxType:"TabItem"},(0,i.mdx)(g,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Start by creating your first test file ",(0,i.mdx)("inlineCode",{parentName:"p"},"MyFlipperPluginTests.cpp")," and import the testing utilities from ",(0,i.mdx)("inlineCode",{parentName:"p"},"fbsource//xplat/sonar/xplat:FlipperTestLib"),". These utilities mock out core pieces of the communication channel so that you can test your plugin in isolation."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objc"},"#include <MyFlipperPlugin/MyFlipperPlugin.h>\n#include <FlipperTestLib/FlipperConnectionMock.h>\n#include <FlipperTestLib/FlipperResponderMock.h>\n\n#include <folly/json.h>\n#include <gtest/gtest.h>\n\nnamespace facebook {\nnamespace flipper {\nnamespace test {\n\nTEST(MyFlipperPluginTests, testDummy) {\n  EXPECT_EQ(1 + 1, 2);\n}\n\n} // namespace test\n} // namespace flipper\n} // namespace facebook\n")),(0,i.mdx)("p",null,"Following is a simple test using these mock utilities to create a plugin, send some data, and assert that the result is as expected:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objc"},'TEST(MyFlipperPluginTests, testDummy) {\n  std::vector<folly::dynamic> successfulResponses;\n  auto responder = std::make_unique<FlipperResponderMock>(&successfulResponses);\n  auto conn = std::make_shared<FlipperConnectionMock>();\n\n  MyFlipperPlugin plugin;\n  plugin.didConnect(conn);\n\n  folly::dynamic message = folly::dynamic::object("param1", "hello");\n  folly::dynamic expectedResponse = folly::dynamic::object("response", "Hi there");\n\n  auto receiver = conn->receivers_["someMethod"];\n  receiver(message, std::move(responder));\n\n  EXPECT_EQ(successfulResponses.size(), 1);\n  EXPECT_EQ(successfulResponses.back(), expectedResponse);\n}\n'))),(0,i.mdx)(h,{mdxType:"FbIosTesting"}))),(0,i.mdx)("h2",{id:"running-flipper-tests"},"Running (Flipper) tests"),(0,i.mdx)("p",null,"This section covers running tests on the ",(0,i.mdx)("a",{parentName:"p",href:"#flipper-desktop"},"Flipper Desktop")," and with the ",(0,i.mdx)("a",{parentName:"p",href:"#flipper-sdk"},"Flipper SDK"),"."),(0,i.mdx)("h3",{id:"flipper-desktop"},"Flipper Desktop"),(0,i.mdx)(g,{mdxType:"OssOnly"},(0,i.mdx)("p",null,"Run ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn jest")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn jest --watch")," in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"desktop")," directory of your Flipper checkout.")),(0,i.mdx)(y,{mdxType:"FbInternalOnly"},(0,i.mdx)("p",null,"Run ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn jest")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"yarn jest --watch")," in ",(0,i.mdx)("inlineCode",{parentName:"p"},"~/fbsource/xplat/sonar/desktop"))),(0,i.mdx)("h3",{id:"flipper-sdk"},"Flipper SDK"),(0,i.mdx)("h4",{id:"android-java"},"Android (Java)"),(0,i.mdx)(g,{mdxType:"OssOnly"},(0,i.mdx)("h5",{id:"gradle"},"Gradle"),(0,i.mdx)("p",null,"In the root directory of the checkout:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"./gradlew android:test\n"))),(0,i.mdx)(y,{mdxType:"FbInternalOnly"},(0,i.mdx)("h5",{id:"gradle-1"},"Gradle"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"cd fbsource/xplat/sonar\n./gradlew android:test\n")),(0,i.mdx)("h5",{id:"buck"},"Buck"),(0,i.mdx)("p",null,"Make the required changes then submit a diff. With regarding to testing, ",(0,i.mdx)("inlineCode",{parentName:"p"},"buck test ...")," should work, but doesn't seem to function when run in xplat on a Mac; it does function  on Mobile On Demand if you use @mode/server."),(0,i.mdx)("admonition",{title:"Debugging note",type:"note"},(0,i.mdx)("p",{parentName:"admonition"},"Things do functtion if you copy the files and BUCK file to ",(0,i.mdx)("inlineCode",{parentName:"p"},"fbandroid/javatests")," and change the rule from ",(0,i.mdx)("inlineCode",{parentName:"p"},"sonar_android_test")," to ",(0,i.mdx)("inlineCode",{parentName:"p"},"robolectric3_test"),"."))),(0,i.mdx)(y,{mdxType:"FbInternalOnly"},(0,i.mdx)("h3",{id:"ios"},"iOS"),(0,i.mdx)("p",null,"Focus on the plugins, or Flipper code you want but with the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--with-tests")," param:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"arc focus ... --with-tests`\n")),(0,i.mdx)("p",null,"Then, click the '<->' icon in xcode and you run from there.")),(0,i.mdx)("h3",{id:"react-native"},"React Native"),(0,i.mdx)("p",null,"For details, see the ",(0,i.mdx)("a",{parentName:"p",href:"/docs/extending/testing-rn"},"Testing React Native Changes")," page."))}x.isMDXComponent=!0}}]);