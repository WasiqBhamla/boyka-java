"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6771],{5240:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=t(5250),o=t(5725);const s={title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},r=void 0,a={id:"guides/ui/ios/setup-config",title:"\ud83e\ude9b Setup Configuration",description:"You can set multiple configurations in the configuration file with different key name for different iOS devices.",source:"@site/docs/framework-docs/guides/ui/ios/setup-config.md",sourceDirName:"guides/ui/ios",slug:"/guides/ui/ios/setup-config",permalink:"/boyka-framework/docs/guides/ui/ios/setup-config",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/ios/setup-config.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1711940467e3,sidebarPosition:1,frontMatter:{title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},sidebar:"docs",previous:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/android/create-page-object"},next:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/ios/create-page-object"}},c={},u=[{value:"Details of each iOS configurations",id:"ios-config-details",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"You can set multiple configurations in the configuration file with different key name for different iOS devices."}),"\n",(0,i.jsx)(n.p,{children:"Let's see how to set configuration in the configuration file for iOS application to run on different devices."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',children:'{\n  "ui": {\n    "timeout": {\n      "implicit_wait": 10,\n      "explicit_wait": 30,\n      "page_load_timeout": 30,\n      "script_timeout": 10\n    },\n    "logging": {\n      "exclude_logs": [\n        "bugreport"\n      ]\n    },\n    "screenshot": {\n      "enabled": true,\n      "path": "./screenshots",\n      "extension": "jpeg",\n      "prefix": "SCR"\n    },\n    "mobile": {\n      "test_local_sauce_ios": {\n        "server": {\n          "target": "LOCAL",\n          "port": 4724,\n          "base_path": "/wd/hub",\n          "session_override": true,\n          "driver": "XCUI",\n          "allow_insecure": [\n            "get_server_logs"\n          ]\n        },\n        "device": {\n          "os": "IOS",\n          "version": "16.2",\n          "name": "iPhone 14 Pro Max",\n          "type": "VIRTUAL",\n          "server_install_timeout": 60,\n          "server_launch_timeout": 60,\n          "connect_keyboard": false,\n          "typing_speed": 30,\n          "swipe": {\n            "distance": 25,\n            "max_swipe_until_found": 5\n          },\n          "virtual_device": {\n            "headless": true,\n            "launch_timeout": 180\n          },\n          "wda": {\n            "launch_timeout": 120,\n            "connection_timeout": 120\n          },\n          "application": {\n            "path": "/apps/ios/sauce-demo.zip",\n            "install_timeout": 180\n          }\n        }\n      },\n      "test_bs_ios": {\n        "server": {\n          "target": "BROWSER_STACK",\n          "user_name": "${env:BS_USER}",\n          "password": "${env:BS_KEY}",\n          "base_path": "/wd/hub",\n          "driver": "XCUI"\n        },\n        "device": {\n          "os": "IOS",\n          "version": "16",\n          "name": "iPhone 14 Pro",\n          "type": "CLOUD",\n          "application": {\n            "path": "IOSApp",\n            "external": true,\n            "install_timeout": 180\n          },\n          "capabilities": {\n            "projectName": "BrowserStack iOS Project",\n            "buildName": "Test BrowserStack Build",\n            "sessionName": "Test BrowserStack Session",\n            "appiumVersion": "2.0.0",\n            "automationVersion": "latest",\n            "deviceLogs": true,\n            "networkLogs": true,\n            "debug": true,\n            "video": true,\n            "appiumLogs": true\n          }\n        }\n      },\n      "test_lt_ios": {\n        "server": {\n          "target": "LAMBDA_TEST_MOBILE",\n          "user_name": "${env:LT_USER}",\n          "password": "${env:LT_KEY}",\n          "base_path": "/wd/hub",\n          "driver": "XCUI"\n        },\n        "device": {\n          "type": "CLOUD",\n          "application": {\n            "install_timeout": 180\n          },\n          "ignore_unimportant_views": true,\n          "capabilities": {\n            "platformName": "iOS",\n            "deviceName": "iPhone 14 Pro",\n            "platformVersion": "16",\n            "app": "${env:LT_APP_IOS}",\n            "project": "LambdaTest iOS Project",\n            "build": "Test LambdaTest Build",\n            "name": "Test LambdaTest Session",\n            "devicelog": true,\n            "network": true,\n            "visual": true,\n            "video": true,\n            "autoGrantPermissions": true,\n            "autoAcceptAlerts": true,\n            "isRealMobile": true,\n            "w3c": true\n          }\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For more information about API configurations, please refer to ",(0,i.jsx)(n.a,{href:"/docs/guides/configuration#mobile-config",children:"Mobile configuration guide"}),"."]})}),"\n",(0,i.jsx)(n.h2,{id:"ios-config-details",children:"Details of each iOS configurations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test_local_sauce_ios"}),": This is the configuration for running the test on local iOS Simulator."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test_bs_ios"}),": This is the configuration for running the test on the BrowserStack cloud iOS device."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test_lt_ios"}),": This is the configuration for running the test on the LambdaTest cloud iOS device."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},5725:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(79);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);