"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4616],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39960:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(80102),i=n(67294),o=n(73727),a=n(52263),l=n(13919),p=n(10412),s=(0,i.createContext)({collectLink:function(){}}),u=n(44996),c=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var t,n,f=e.isNavLink,m=e.to,v=e.href,h=e.activeClassName,g=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,x=(0,r.Z)(e,d),N=(0,a.default)().siteConfig,O=N.trailingSlash,C=N.baseUrl,k=(0,u.useBaseUrlUtils)().withBaseUrl,F=(0,i.useContext)(s),D=m||v,S=(0,l.Z)(D),P=null==D?void 0:D.replace("pathname://",""),_=void 0!==P?(n=P,w&&function(e){return e.startsWith("/")}(n)?k(n):n):void 0;_&&S&&(_=(0,c.applyTrailingSlash)(_,{trailingSlash:O,baseUrl:C}));var T=(0,i.useRef)(!1),A=f?o.OL:o.rU,j=p.default.canUseIntersectionObserver,E=(0,i.useRef)();(0,i.useEffect)((function(){return!j&&S&&null!=_&&window.docusaurus.prefetch(_),function(){j&&E.current&&E.current.disconnect()}}),[E,_,j,S]);var K=null!==(t=null==_?void 0:_.startsWith("#"))&&void 0!==t&&t,I=!_||!S||K;return _&&S&&!K&&!b&&F.collectLink(_),I?i.createElement("a",Object.assign({href:_},D&&!S&&{target:"_blank",rel:"noopener noreferrer"},x)):i.createElement(A,Object.assign({},x,{onMouseEnter:function(){T.current||null==_||(window.docusaurus.preload(_),T.current=!0)},innerRef:function(e){var t,n;j&&e&&S&&(t=e,n=function(){null!=_&&window.docusaurus.prefetch(_)},E.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.current.unobserve(t),E.current.disconnect(),n())}))})),E.current.observe(t))},to:_||""},f&&{isActive:g,activeClassName:h}))}},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var r=n(52263),i=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,l=void 0!==a&&a,p=o.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},58215:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(67294);const i=function(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},26396:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(83117),i=n(67294),o=n(72389),a=n(79443);const l=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var p=n(89521),s=n(86010);const u="tabItem_1uMI";function c(e){var t,n,r,o=e.lazy,a=e.block,c=e.defaultValue,d=e.values,f=e.groupId,m=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,p.duplicates)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=v[0])?void 0:r.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=l(),w=y.tabGroupChoices,x=y.setTabGroupChoices,N=(0,i.useState)(b),O=N[0],C=N[1],k=[],F=(0,p.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=f){var D=w[f];null!=D&&D!==O&&h.some((function(e){return e.value===D}))&&C(D)}var S=function(e){var t=e.currentTarget,n=k.indexOf(t),r=h[n].value;r!==O&&(F(t),C(r),null!=f&&x(f,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=k.indexOf(e.currentTarget)+1;n=k[r]||k[0];break;case"ArrowLeft":var i=k.indexOf(e.currentTarget)-1;n=k[i]||k[k.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.default)("tabs",{"tabs--block":a},m)},h.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:(0,s.default)("tabs__item",u,{"tabs__item--active":O===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:P,onFocus:S,onClick:S},null!=n?n:t)}))),o?(0,i.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,o.default)();return i.createElement(c,(0,r.Z)({key:String(t)},e))}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},76591:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>d,metadata:()=>f,toc:()=>m,default:()=>h});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(44996),l=n(39960),p=n(26396),s=n(58215),u=["components"],c={id:"ios-native",title:"Adding Flipper to Generic iOS Apps",sidebar_label:"Generic iOS apps"},d=void 0,f={unversionedId:"getting-started/ios-native",id:"getting-started/ios-native",isDocsHomePage:!1,title:"Adding Flipper to Generic iOS Apps",description:"Swift and Objective-C are supported for Flipper with CocoaPods as build and distribution mechanism.",source:"@site/../docs/getting-started/ios-native.mdx",sourceDirName:"getting-started",slug:"/getting-started/ios-native",permalink:"/docs/getting-started/ios-native",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/ios-native.mdx",tags:[],version:"current",frontMatter:{id:"ios-native",title:"Adding Flipper to Generic iOS Apps",sidebar_label:"Generic iOS apps"},sidebar:"setup",previous:{title:"Android with Gradle",permalink:"/docs/getting-started/android-native"},next:{title:"Automatic Setup",permalink:"/docs/getting-started/react-native"}},m=[{value:"CocoaPods",id:"cocoapods",children:[],level:2},{value:"For pure Objective-C projects",id:"for-pure-objective-c-projects",children:[],level:2},{value:"Enabling plugins",id:"enabling-plugins",children:[],level:2},{value:"Questions or issues",id:"questions-or-issues",children:[],level:2}],v={toc:m};function h(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.mdx)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Swift and Objective-C are supported for Flipper with CocoaPods as build and distribution mechanism."))),(0,o.mdx)("h2",{id:"cocoapods"},"CocoaPods"),(0,o.mdx)("p",null,"The following configuration assumes CocoaPods 1.9+:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ruby"},"project 'MyApp.xcodeproj'\nflipperkit_version = '0.144.0'\n\ntarget 'MyApp' do\n  platform :ios, '10.0'\n\n  # It is likely that you'll only want to include Flipper in debug builds,\n  # in which case you add the `:configuration` directive:\n  pod 'FlipperKit', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  # ...unfortunately at this time that means you'll need to explicitly mark\n  # transitive dependencies as being for debug build only as well:\n  pod 'Flipper-DoubleConversion', :configuration => 'Debug'\n  pod 'Flipper-Folly', :configuration => 'Debug'\n  pod 'Flipper-Glog', :configuration => 'Debug'\n  pod 'Flipper-PeerTalk', :configuration => 'Debug'\n  pod 'CocoaLibEvent', :configuration => 'Debug'\n  pod 'boost-for-react-native', :configuration => 'Debug'\n  pod 'OpenSSL-Universal', :configuration => 'Debug'\n  pod 'CocoaAsyncSocket', :configuration => 'Debug'\n  # ...except, of course, those transitive dependencies that your\n  # application itself depends, e.g.:\n  pod 'ComponentKit', '~> 0.31'\n\n  # If you use `use_frameworks!` in your Podfile,\n  # uncomment the below $static_framework array and also\n  # the pre_install section.  This will cause Flipper and\n  # it's dependencies to be built as a static library and all other pods to\n  # be dynamic.\n  #\n  # NOTE Doing this may lead to a broken build if any of these are also\n  #      transitive dependencies of other dependencies and are expected\n  #      to be built as frameworks.\n  #\n  # $static_framework = ['FlipperKit', 'Flipper', 'Flipper-Folly',\n  #   'CocoaAsyncSocket', 'ComponentKit', 'Flipper-DoubleConversion',\n  #   'Flipper-Glog', 'Flipper-PeerTalk', 'Flipper-RSocket', 'Yoga', 'YogaKit',\n  #   'CocoaLibEvent', 'OpenSSL-Universal', 'boost-for-react-native', 'Flipper-Fmt']\n  #\n  # pre_install do |installer|\n  #   Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}\n  #   installer.pod_targets.each do |pod|\n  #       if $static_framework.include?(pod.name)\n  #         def pod.build_type;\n  #           Pod::BuildType.static_library\n  #         end\n  #       end\n  #     end\n  # end\nend\n")),(0,o.mdx)("h2",{id:"for-pure-objective-c-projects"},"For pure Objective-C projects"),(0,o.mdx)("p",null,"For pure Objective-C projects, add the following to your settings:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},(0,o.mdx)("inlineCode",{parentName:"p"},"/usr/lib/swift")," as the first entry of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"LD_RUNPATH_SEARCH_PATHS"))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"Add the following in ",(0,o.mdx)("inlineCode",{parentName:"p"},"LIBRARY_SEARCH_PATHS")),(0,o.mdx)("pre",{parentName:"li"},(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'"\\"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)\\"",\n"\\"$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)\\"",\n'))),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("p",{parentName:"li"},"If, after following the above two steps, there are still errors such as ",(0,o.mdx)("inlineCode",{parentName:"p"},"Undefined symbol _swift_getFunctionReplacement"),", then set ",(0,o.mdx)("inlineCode",{parentName:"p"},"DEAD_CODE_STRIPPING")," to ",(0,o.mdx)("inlineCode",{parentName:"p"},"YES"),". The reference for this fix is in the ",(0,o.mdx)("a",{parentName:"p",href:"https://forums.swift.org/t/undefined-symbol-swift-getfunctionreplacement/30495/4"},"Swift forum")))),(0,o.mdx)("p",null,"This is done to overcome a bug with Xcode 11 which fails to compile Swift code when bitcode is enabled. Flipper transitively depends on YogaKit, which is written in Swift.\nFor more information about this issue, refer to the Swift code ",(0,o.mdx)("a",{parentName:"p",href:"https://twitter.com/krzyzanowskim/status/1151549874653081601?s=21"},"tweet")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/Carthage/Carthage/issues/2825"},"Github issue"),"."),(0,o.mdx)("p",null,"Install the dependencies by running ",(0,o.mdx)("inlineCode",{parentName:"p"},"pod install"),". You can now import and initialize Flipper in yourAppDelegate."),(0,o.mdx)(p.default,{defaultValue:"objC",values:[{label:"ObjC",value:"objC"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,o.mdx)(s.default,{value:"objC",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-objc"},"#import <FlipperKit/FlipperClient.h>\n#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutComponentKitSupport/FlipperKitLayoutComponentKitSupport.h>\n#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  FlipperClient *client = [FlipperClient sharedClient];\n  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n  [FlipperKitLayoutComponentKitSupport setUpWithDescriptorMapper: layoutDescriptorMapper];\n  [client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application\n                                                 withDescriptorMapper: layoutDescriptorMapper]];\n\n  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];\n  [client addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n  [client start];\n  ...\n}\n@end\n"))),(0,o.mdx)(s.default,{value:"swift",mdxType:"TabItem"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-swift"},"import UIKit\nimport FlipperKit\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  var window: UIWindow?\n\n\n  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    // Override point for customization after application launch.\n    let client = FlipperClient.shared()\n    let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\n    FlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n    client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n    client?.start()\n    return true\n  }\n}\n")))),(0,o.mdx)("h2",{id:"enabling-plugins"},"Enabling plugins"),(0,o.mdx)("p",null,"Finally, you need to add plugins to your Flipper client. The Layout Inspector plugin is shown above to get you started.\nSee ",(0,o.mdx)(l.default,{to:(0,a.default)("/docs/setup/plugins/network"),mdxType:"Link"},"Network Plugin")," and ",(0,o.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/staticdocs/flipper/docs/features/plugins/inspector/"},"Layoutj Inspector Plugin")," for information on how to add them and enable Litho or ComponentKit support. You can check the sample apps in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/flipper"},"GitHub repo")," for examples of integrating other plugins."),(0,o.mdx)("h2",{id:"questions-or-issues"},"Questions or issues"),(0,o.mdx)("p",null,"If you have any questions or issues, refer to the ",(0,o.mdx)(l.default,{to:(0,a.default)("/docs/troubleshooting"),mdxType:"Link"},"troubleshooting")," page, or post the details on the ",(0,o.mdx)("a",{parentName:"p",href:"https://fb.workplace.com/groups/flippersupport"},"Flipper Support")," Workplace group."))}h.isMDXComponent=!0}}]);