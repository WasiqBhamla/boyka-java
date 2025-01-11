"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2526],{4258:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"guides/api/setup-config","title":"\ud83e\ude9b Setup API Configuration","description":"Create API configuration","source":"@site/docs/framework-docs/guides/api/setup-config.md","sourceDirName":"guides/api","slug":"/guides/api/setup-config","permalink":"/boyka-framework/docs/guides/api/setup-config","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/setup-config.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1736611308000,"sidebarPosition":1,"frontMatter":{"title":"\ud83e\ude9b Setup API Configuration","sidebar_position":1},"sidebar":"docs","previous":{"title":"\ud83d\udd0e Check Boyka setup","permalink":"/boyka-framework/docs/guides/config/check-setup"},"next":{"title":"\ud83c\udfd7\ufe0f Compose Request","permalink":"/boyka-framework/docs/guides/api/compose-request"}}');var o=i(7557),s=i(2557);const a={title:"\ud83e\ude9b Setup API Configuration",sidebar_position:1},r=void 0,c={},d=[{value:"Create API configuration",id:"create-api-configuration",level:2},{value:"Update existing configuration",id:"update-existing-configuration",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"create-api-configuration",children:"Create API configuration"}),"\n",(0,o.jsx)(n.p,{children:"To generate a new configuration, run the following command on your terminal:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"boyka config api [config-name]\n"})}),"\n",(0,o.jsx)(n.p,{children:"A set of questions will be asked, depending on your response, a new config settings will get created with the given config name."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsx)(n.p,{children:"You can add as many different API configs as you want using the above command"})}),"\n",(0,o.jsx)(n.h2,{id:"update-existing-configuration",children:"Update existing configuration"}),"\n",(0,o.jsxs)(n.p,{children:["To update any existing API configuration, you can update the required values in the ",(0,o.jsx)(n.code,{children:"boyka-config.json"})," file."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Check out complete details about API configurations in ",(0,o.jsx)(n.a,{href:"/docs/guides/config/configuration#api-config",children:"API configuration guide"}),"."]})}),"\n",(0,o.jsx)(n.p,{children:"Let's see how a sample API configuration in the config file is:"}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Sample API config"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="src/test/resources/boyka-config.json"',children:'{\n  "api": {\n    "test_reqres": {\n      "base_uri": "https://reqres.in",\n      "base_path": "/api",\n      "read_timeout": 2,\n      "write_timeout": 2,\n      "connection_timeout": 1,\n      "logging": {\n        "request": true,\n        "response": true\n      },\n      "schema_path":"schema/"\n    }\n  }\n}\n'})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},2557:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(8225);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);