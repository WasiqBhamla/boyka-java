"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2071],{6432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=t(5250),i=t(1118);const s={title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},r=void 0,a={id:"guides/ui/web/setup-config",title:"\ud83e\ude9b Setup Configuration",description:"Before starting to automate Web applications, we need to first setup the configuration file for our Application under test.",source:"@site/docs/framework-docs/guides/ui/web/setup-config.md",sourceDirName:"guides/ui/web",slug:"/guides/ui/web/setup-config",permalink:"/boyka-framework/docs/guides/ui/web/setup-config",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/web/setup-config.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1702884701,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:1,frontMatter:{title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},sidebar:"docs",previous:{title:"\u2705 Verify Response",permalink:"/boyka-framework/docs/guides/api/verify-response"},next:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/web/create-page-object"}},c={},l=[{value:"Details of each Web configurations",id:"web-config-details",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Before starting to automate Web applications, we need to first setup the configuration file for our Application under test."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',children:'{\n  "ui": {\n    "timeout": {\n      "implicit_wait": 10,\n      "explicit_wait": 30,\n      "page_load_timeout": 30,\n      "script_timeout": 10\n    },\n    "logging": {\n      "exclude_logs": [\n        "bugreport"\n      ]\n    },\n    "screenshot": {\n      "enabled": true,\n      "path": "./screenshots",\n      "extension": "jpeg",\n      "prefix": "SCR"\n    },\n    "web": {\n      "test_local_chrome": {\n        "browser": "CHROME"\n      },\n      "test_local_firefox": {\n        "browser": "FIREFOX"\n      },\n      "test_local_edge": {\n        "browser": "EDGE"\n      },\n      "test_local_safari": {\n        "browser": "SAFARI"\n      },\n      "test_browserstack_chrome": {\n        "browser": "REMOTE",\n        "target": "BROWSER_STACK",\n        "user_name": "${env:BS_USER}",\n        "password": "${env:BS_KEY}",\n        "capabilities": {\n          "browser": "Chrome",\n          "browser_version": "latest",\n          "os": "Windows",\n          "os_version": "10",\n          "resolution": "1920x1080",\n          "project": "Test Boyka Project",\n          "build": "Test BrowserStack Build",\n          "name": "Test BrowserStack Session"\n        }\n      },\n      "test_selenium_grid": {\n        "browser": "REMOTE",\n        "target": "LOCAL",\n        "port": "4444",\n        "capabilities": {\n          "browserName": "chrome",\n          "platform": "MAC"\n        }\n      },\n      "test_lambda_test_chrome": {\n        "browser": "REMOTE",\n        "target": "LAMBDA_TEST_WEB",\n        "user_name": "${env:LT_USER}",\n        "password": "${env:LT_KEY}",\n        "capabilities": {\n          "browserName": "Chrome",\n          "version": "99.0",\n          "platform": "Windows 10",\n          "resolution": "1920x1080",\n          "build": "Test LambdaTest Build",\n          "name": "Test LambdaTest Session",\n          "network": true,\n          "visual": true,\n          "video": true,\n          "console": true\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["To know more about Web configurations, please refer to the ",(0,o.jsx)(n.a,{href:"/docs/guides/configuration#web-config",children:"Web Configuration guide"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"web-config-details",children:"Details of each Web configurations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_chrome"}),": This is the configuration for running the test on local Chrome browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_firefox"}),": This is the configuration for running the test on local Firefox browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_edge"}),": This is the configuration for running the test on local Edge browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_safari"}),": This is the configuration for running the test on local Safari browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_browserstack_chrome"}),": This is the configuration for running the test on BrowserStack Chrome browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_selenium_grid"}),": This is the configuration for running the test on Selenium Grid."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_lambda_test_chrome"}),": This is the configuration for running the test on LambdaTest Chrome browser."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1118:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var o=t(79);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);