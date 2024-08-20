"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6396],{1266:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=t(6106),o=t(9252);const n={sidebar_position:3,title:"\ud83d\udd2b Execute Request"},r=void 0,a={id:"guides/api/execute-request",title:"\ud83d\udd2b Execute Request",description:"Once you have composed your API request, you can execute it using class ApiActions and method withRequest.",source:"@site/docs/framework-docs/guides/api/execute-request.md",sourceDirName:"guides/api",slug:"/guides/api/execute-request",permalink:"/boyka-framework/docs/guides/api/execute-request",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/execute-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1724141773e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udd2b Execute Request"},sidebar:"docs",previous:{title:"\ud83c\udfd7\ufe0f Compose Request",permalink:"/boyka-framework/docs/guides/api/compose-request"},next:{title:"\u2705 Verify Response",permalink:"/boyka-framework/docs/guides/api/verify-response"}},c={},d=[{value:"Example",id:"example",level:2},{value:"API Response class",id:"api-response-class",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Once you have composed your API request, you can execute it using class ",(0,i.jsx)(s.code,{children:"ApiActions"})," and method ",(0,i.jsx)(s.code,{children:"withRequest"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Check out complete documentation for ",(0,i.jsx)(s.a,{href:"/api/actions/api/api-actions",children:"ApiActions"}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-java",children:"import static io.github.boykaframework.actions.api.ApiActions.withRequest;\n. . .\n// Using request created in previous example.\nfinal ApiResponse response = withRequest (request).execute ();\n"})}),"\n",(0,i.jsx)(s.h2,{id:"api-response-class",children:"API Response class"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"withRequest"})," method will return ",(0,i.jsx)(s.code,{children:"ApiResponse"})," class object which contains methods to verify the response body and status code."]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Check out complete documentation for ",(0,i.jsx)(s.a,{href:"/api/builders/api-response",children:"ApiResponse"}),"."]})})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9252:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>a});var i=t(7378);const o={},n=i.createContext(o);function r(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);