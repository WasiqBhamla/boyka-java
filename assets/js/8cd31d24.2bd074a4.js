"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2526],{7293:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=t(6106),o=t(9252);const s={title:"\ud83e\ude9b Setup API Configuration",sidebar_position:1},r=void 0,a={id:"guides/api/setup-config",title:"\ud83e\ude9b Setup API Configuration",description:"We can set multiple configurations in the configuration file with different key name for different end points.",source:"@site/docs/framework-docs/guides/api/setup-config.md",sourceDirName:"guides/api",slug:"/guides/api/setup-config",permalink:"/boyka-framework/docs/guides/api/setup-config",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/setup-config.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1717416871e3,sidebarPosition:1,frontMatter:{title:"\ud83e\ude9b Setup API Configuration",sidebar_position:1},sidebar:"docs",previous:{title:"\ud83d\udd29 Configuration",permalink:"/boyka-framework/docs/guides/configuration"},next:{title:"\ud83c\udfd7\ufe0f Compose Request",permalink:"/boyka-framework/docs/guides/api/compose-request"}},c={},u=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"We can set multiple configurations in the configuration file with different key name for different end points."}),"\n",(0,i.jsx)(n.p,{children:"Let's see how to set configuration in the configuration file for API end-points."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',children:'{\n  "api": {\n    "test_reqres": {\n      "base_uri": "https://reqres.in",\n      "base_path": "/api",\n      "read_timeout": 2,\n      "write_timeout": 2,\n      "connection_timeout": 1,\n      "logging": {\n        "request": true,\n        "response": true\n      },\n      "schema_path":"schema/"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["For more information about API configurations, please refer to ",(0,i.jsx)(n.a,{href:"/docs/guides/configuration#api-config",children:"API configuration guide"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9252:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(7378);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);