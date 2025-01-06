"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8480],{9264:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"guides/ui/android/setup-config","title":"\ud83e\ude9b Setup Configuration","description":"Create Android configuration","source":"@site/docs/framework-docs/guides/ui/android/setup-config.md","sourceDirName":"guides/ui/android","slug":"/guides/ui/android/setup-config","permalink":"/boyka-framework/docs/guides/ui/android/setup-config","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/android/setup-config.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1736176231000,"sidebarPosition":1,"frontMatter":{"title":"\ud83e\ude9b Setup Configuration","sidebar_position":1},"sidebar":"docs","previous":{"title":"\ud83d\udcc4 Create Page Object","permalink":"/boyka-framework/docs/guides/ui/web/create-page-object"},"next":{"title":"\ud83d\udcc4 Create Page Object","permalink":"/boyka-framework/docs/guides/ui/android/create-page-object"}}');var o=i(7557),r=i(7266);const a={title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},s=void 0,d={},c=[{value:"Create Android configuration",id:"create-android-configuration",level:2},{value:"Update existing configuration",id:"update-existing-configuration",level:2},{value:"Details of each Android configurations",id:"android-config-details",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"create-android-configuration",children:"Create Android configuration"}),"\n",(0,o.jsx)(n.p,{children:"To generate a new configuration, run the following command on your terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"boyka config android [config-name]\n"})}),"\n",(0,o.jsx)(n.p,{children:"A set of questions will be asked, depending on your response, a new config settings will get created with the given config name."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"You can add as many different Android configs as you want using the above command"})}),"\n",(0,o.jsx)(n.h2,{id:"update-existing-configuration",children:"Update existing configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To update any existing Android configuration, you can update the required values in the ",(0,o.jsx)(n.code,{children:"boyka-config.json"})," file."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Check out complete details about Android configurations in ",(0,o.jsx)(n.a,{href:"/docs/guides/config/configuration#mobile-config",children:"Mobile configuration guide"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"Let's see how a sample Android configuration in the config file is:"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Sample Android config"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',children:'{\n  "ui": {\n    "timeout": {\n      "implicit_wait": 10,\n      "explicit_wait": 30,\n      "page_load_timeout": 30,\n      "script_timeout": 10\n    },\n    "logging": {\n      "exclude_logs": ["bugreport"]\n    },\n    "screenshot": {\n      "enabled": true,\n      "path": "./screenshots",\n      "extension": "jpeg",\n      "prefix": "SCR"\n    },\n    "mobile": {\n      "test_local_sauce_android": {\n        "server": {\n          "target": "LOCAL",\n          "port": 4723,\n          "base_path": "/wd/hub",\n          "session_override": true,\n          "driver": "UI_AUTOMATOR",\n          "allow_insecure": ["get_server_logs"]\n        },\n        "device": {\n          "os": "ANDROID",\n          "version": "12",\n          "name": "Pixel_7_Pro",\n          "type": "VIRTUAL",\n          "server_install_timeout": 60,\n          "server_launch_timeout": 60,\n          "ignore_unimportant_views": true,\n          "swipe": {\n            "distance": 25,\n            "max_swipe_until_found": 5\n          },\n          "application": {\n            "path": "/apps/android/sauce-demo.apk",\n            "install_timeout": 180\n          },\n          "virtual_device": {\n            "name": "Pixel_7_Pro",\n            "headless": true\n          }\n        }\n      },\n      "test_bs_android": {\n        "server": {\n          "target": "BROWSER_STACK",\n          "user_name": "${env:BS_USER}",\n          "password": "${env:BS_KEY}",\n          "base_path": "/wd/hub",\n          "driver": "UI_AUTOMATOR"\n        },\n        "device": {\n          "os": "ANDROID",\n          "version": "11.0",\n          "name": "Google Pixel 5",\n          "type": "CLOUD",\n          "ignore_unimportant_views": true,\n          "application": {\n            "path": "AndroidApp",\n            "external": true,\n            "install_timeout": 180\n          },\n          "capabilities": {\n            "projectName": "BrowserStack Android Project",\n            "buildName": "Test BrowserStack Build",\n            "sessionName": "Test BrowserStack Session",\n            "appiumVersion": "2.0.0",\n            "automationVersion": "latest",\n            "deviceLogs": true,\n            "networkLogs": true,\n            "debug": true,\n            "video": true,\n            "appiumLogs": true\n          }\n        }\n      },\n      "test_lt_android": {\n        "server": {\n          "target": "LAMBDA_TEST_MOBILE",\n          "user_name": "${env:LT_USER}",\n          "password": "${env:LT_KEY}",\n          "base_path": "/wd/hub",\n          "driver": "UI_AUTOMATOR"\n        },\n        "device": {\n          "type": "CLOUD",\n          "application": {\n            "install_timeout": 180\n          },\n          "ignore_unimportant_views": true,\n          "capabilities": {\n            "platformName": "Android",\n            "deviceName": "Pixel 5",\n            "platformVersion": "11",\n            "app": "${env:LT_APP_ANDROID}",\n            "project": "LambdaTest Android Project",\n            "build": "Test LambdaTest Build",\n            "name": "Test LambdaTest Session",\n            "devicelog": true,\n            "network": true,\n            "visual": true,\n            "video": true,\n            "autoGrantPermissions": true,\n            "autoAcceptAlerts": true,\n            "isRealMobile": true,\n            "w3c": true\n          }\n        }\n      }\n    }\n  }\n}\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"android-config-details",children:"Details of each Android configurations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_sauce_android"}),": This is the configuration for running the test on local Android Emulator."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_bs_android"}),": This is the configuration for running the test on the BrowserStack cloud Android device."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_lt_android"}),": This is the configuration for running the test on the LambdaTest cloud Android device."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},7266:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(8225);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);