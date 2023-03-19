"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6771],{167:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>f});var i=t(5721);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=i.createContext({}),c=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=c(e.components);return i.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return t?i.createElement(m,a(a({ref:n},l),{},{components:t})):i.createElement(m,a({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(8533),r=(t(5721),t(167));const o={title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},a=void 0,s={unversionedId:"guides/ui/ios/setup-config",id:"guides/ui/ios/setup-config",title:"\ud83e\ude9b Setup Configuration",description:"You can set multiple configurations in the configuration file with different key name for different iOS devices.",source:"@site/docs/framework-docs/guides/ui/ios/setup-config.md",sourceDirName:"guides/ui/ios",slug:"/guides/ui/ios/setup-config",permalink:"/boyka-framework/docs/guides/ui/ios/setup-config",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/ios/setup-config.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1679245456,formattedLastUpdatedAt:"Mar 19, 2023",sidebarPosition:1,frontMatter:{title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},sidebar:"docs",previous:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/android/create-page-object"},next:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/ios/create-page-object"}},u={},c=[{value:"Details of each iOS configurations",id:"ios-config-details",level:2}],l={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can set multiple configurations in the configuration file with different key name for different iOS devices."),(0,r.kt)("p",null,"Let's see how to set configuration in the configuration file for iOS application to run on different devices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',title:'"src/test/resources/boyka-config.json"'},'{\n  "ui": {\n    "timeout": {\n      "implicit_wait": 10,\n      "explicit_wait": 30,\n      "page_load_timeout": 30,\n      "script_timeout": 10\n    },\n    "logging": {\n      "exclude_logs": [\n        "bugreport"\n      ]\n    },\n    "screenshot": {\n      "enabled": true,\n      "path": "./screenshots",\n      "extension": "jpeg",\n      "prefix": "SCR"\n    },\n    "mobile": {\n      "test_local_sauce_ios": {\n        "server": {\n          "target": "LOCAL",\n          "port": 4724,\n          "base_path": "/wd/hub",\n          "session_override": true,\n          "driver": "XCUI",\n          "allow_insecure": [\n            "get_server_logs"\n          ]\n        },\n        "device": {\n          "os": "IOS",\n          "version": "16.2",\n          "name": "iPhone 14 Pro Max",\n          "type": "VIRTUAL",\n          "server_install_timeout": 60,\n          "server_launch_timeout": 60,\n          "connect_keyboard": false,\n          "typing_speed": 30,\n          "swipe": {\n            "distance": 25,\n            "max_swipe_until_found": 5\n          },\n          "virtual_device": {\n            "headless": true,\n            "launch_timeout": 180\n          },\n          "wda": {\n            "launch_timeout": 120,\n            "connection_timeout": 120\n          },\n          "application": {\n            "path": "/apps/ios/sauce-demo.zip",\n            "install_timeout": 180\n          }\n        }\n      },\n      "test_bs_ios": {\n        "server": {\n          "target": "BROWSER_STACK",\n          "user_name": "${env:BS_USER}",\n          "password": "${env:BS_KEY}",\n          "base_path": "/wd/hub",\n          "driver": "XCUI"\n        },\n        "device": {\n          "os": "IOS",\n          "version": "16",\n          "name": "iPhone 14 Pro",\n          "type": "CLOUD",\n          "application": {\n            "path": "IOSApp",\n            "external": true,\n            "install_timeout": 180\n          },\n          "capabilities": {\n            "projectName": "BrowserStack iOS Project",\n            "buildName": "Test BrowserStack Build",\n            "sessionName": "Test BrowserStack Session",\n            "appiumVersion": "2.0.0",\n            "automationVersion": "latest",\n            "deviceLogs": true,\n            "networkLogs": true,\n            "debug": true,\n            "video": true,\n            "appiumLogs": true\n          }\n        }\n      },\n      "test_lt_ios": {\n        "server": {\n          "target": "LAMBDA_TEST_MOBILE",\n          "user_name": "${env:LT_USER}",\n          "password": "${env:LT_KEY}",\n          "base_path": "/wd/hub",\n          "driver": "XCUI"\n        },\n        "device": {\n          "type": "CLOUD",\n          "application": {\n            "install_timeout": 180\n          },\n          "ignore_unimportant_views": true,\n          "capabilities": {\n            "platformName": "iOS",\n            "deviceName": "iPhone 14 Pro",\n            "platformVersion": "16",\n            "app": "${env:LT_APP_IOS}",\n            "project": "LambdaTest iOS Project",\n            "build": "Test LambdaTest Build",\n            "name": "Test LambdaTest Session",\n            "devicelog": true,\n            "network": true,\n            "visual": true,\n            "video": true,\n            "autoGrantPermissions": true,\n            "autoAcceptAlerts": true,\n            "isRealMobile": true,\n            "w3c": true\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more information about API configurations, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/configuration#mobile-config"},"Mobile configuration guide"),".")),(0,r.kt)("h2",{id:"ios-config-details"},"Details of each iOS configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test_local_sauce_ios"),": This is the configuration for running the test on local iOS Simulator."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test_bs_ios"),": This is the configuration for running the test on the BrowserStack cloud iOS device."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test_lt_ios"),": This is the configuration for running the test on the LambdaTest cloud iOS device.")))}p.isMDXComponent=!0}}]);