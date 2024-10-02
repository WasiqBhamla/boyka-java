"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4920],{6164:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=i(6106),t=i(874);const s={title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},r=void 0,a={id:"guides/ui/web/setup-config",title:"\ud83e\ude9b Setup Configuration",description:"Create Web configuration",source:"@site/docs/framework-docs/guides/ui/web/setup-config.md",sourceDirName:"guides/ui/web",slug:"/guides/ui/web/setup-config",permalink:"/boyka-framework/docs/guides/ui/web/setup-config",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/web/setup-config.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1727873339e3,sidebarPosition:1,frontMatter:{title:"\ud83e\ude9b Setup Configuration",sidebar_position:1},sidebar:"docs",previous:{title:"\u2705 Verify Response schema",permalink:"/boyka-framework/docs/guides/api/verify-response-schema"},next:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/web/create-page-object"}},c={},l=[{value:"Create Web configuration",id:"create-web-configuration",level:2},{value:"Update existing configuration",id:"update-existing-configuration",level:2},{value:"Details of each Web configurations",id:"web-config-details",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"create-web-configuration",children:"Create Web configuration"}),"\n",(0,o.jsx)(n.p,{children:"To generate a new configuration, run the following command on your terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"boyka config web [config-name]\n"})}),"\n",(0,o.jsx)(n.p,{children:"A set of questions will be asked, depending on your response, a new config settings will get created with the given config name."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"You can add as many different Web configs as you want using the above command"})}),"\n",(0,o.jsx)(n.h2,{id:"update-existing-configuration",children:"Update existing configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To update any existing Web configuration, you can update the required values in the ",(0,o.jsx)(n.code,{children:"boyka-config.json"})," file."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Check out complete details about Web configurations in ",(0,o.jsx)(n.a,{href:"/docs/guides/config/configuration#web-config",children:"Web configuration guide"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"Let's see how a sample Android configuration in the config file is:"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Sample Web config"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',children:'{\n  "ui": {\n    "timeout": {\n      "implicit_wait": 10,\n      "explicit_wait": 30,\n      "page_load_timeout": 30,\n      "script_timeout": 10\n    },\n    "logging": {\n      "exclude_logs": [\n        "bugreport"\n      ]\n    },\n    "screenshot": {\n      "enabled": true,\n      "path": "./screenshots",\n      "extension": "jpeg",\n      "prefix": "SCR"\n    },\n    "web": {\n      "test_local_chrome": {\n        "browser": "CHROME"\n      },\n      "test_local_firefox": {\n        "browser": "FIREFOX"\n      },\n      "test_local_edge": {\n        "browser": "EDGE"\n      },\n      "test_local_safari": {\n        "browser": "SAFARI"\n      },\n      "test_browserstack_chrome": {\n        "browser": "REMOTE",\n        "target": "BROWSER_STACK",\n        "user_name": "${env:BS_USER}",\n        "password": "${env:BS_KEY}",\n        "capabilities": {\n          "browser": "Chrome",\n          "browser_version": "latest",\n          "os": "Windows",\n          "os_version": "10",\n          "resolution": "1920x1080",\n          "project": "Test Boyka Project",\n          "build": "Test BrowserStack Build",\n          "name": "Test BrowserStack Session"\n        }\n      },\n      "test_selenium_grid": {\n        "browser": "REMOTE",\n        "target": "LOCAL",\n        "port": "4444",\n        "capabilities": {\n          "browserName": "chrome",\n          "platform": "MAC"\n        }\n      },\n      "test_lambda_test_chrome": {\n        "browser": "REMOTE",\n        "target": "LAMBDA_TEST_WEB",\n        "user_name": "${env:LT_USER}",\n        "password": "${env:LT_KEY}",\n        "capabilities": {\n          "browserName": "Chrome",\n          "version": "99.0",\n          "platform": "Windows 10",\n          "resolution": "1920x1080",\n          "build": "Test LambdaTest Build",\n          "name": "Test LambdaTest Session",\n          "network": true,\n          "visual": true,\n          "video": true,\n          "console": true\n        }\n      }\n    }\n  }\n}\n'})})]}),"\n",(0,o.jsx)(n.h2,{id:"web-config-details",children:"Details of each Web configurations"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_chrome"}),": This is the configuration for running the test on local Chrome browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_firefox"}),": This is the configuration for running the test on local Firefox browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_edge"}),": This is the configuration for running the test on local Edge browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_local_safari"}),": This is the configuration for running the test on local Safari browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_browserstack_chrome"}),": This is the configuration for running the test on BrowserStack Chrome browser."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_selenium_grid"}),": This is the configuration for running the test on Selenium Grid."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test_lambda_test_chrome"}),": This is the configuration for running the test on LambdaTest Chrome browser."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},874:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var o=i(7378);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);