"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6396],{2751:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"guides/api/execute-request","title":"\ud83d\udd2b Execute Request","description":"Once you have composed your API request, you can execute it using class ApiActions and method withRequest.","source":"@site/docs/framework-docs/guides/api/execute-request.md","sourceDirName":"guides/api","slug":"/guides/api/execute-request","permalink":"/boyka-framework/docs/guides/api/execute-request","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/execute-request.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1736611308000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"\ud83d\udd2b Execute Request"},"sidebar":"docs","previous":{"title":"\ud83c\udfd7\ufe0f Compose Request","permalink":"/boyka-framework/docs/guides/api/compose-request"},"next":{"title":"\u2705 Verify Response","permalink":"/boyka-framework/docs/guides/api/verify-response"}}');var o=t(7557),n=t(2557);const a={sidebar_position:3,title:"\ud83d\udd2b Execute Request"},r=void 0,c={},d=[{value:"Example",id:"example",level:2},{value:"API Response class",id:"api-response-class",level:2}];function p(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["Once you have composed your API request, you can execute it using class ",(0,o.jsx)(s.code,{children:"ApiActions"})," and method ",(0,o.jsx)(s.code,{children:"withRequest"}),"."]}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["Check out complete documentation for ",(0,o.jsx)(s.a,{href:"/api/actions/api/api-actions",children:"ApiActions"}),"."]})}),"\n",(0,o.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-java",children:"import static io.github.boykaframework.actions.api.ApiActions.withRequest;\n. . .\n// Using request created in previous example.\nfinal ApiResponse response = withRequest (request).execute ();\n"})}),"\n",(0,o.jsx)(s.h2,{id:"api-response-class",children:"API Response class"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"withRequest"})," method will return ",(0,o.jsx)(s.code,{children:"ApiResponse"})," class object which contains methods to verify the response body and status code."]}),"\n",(0,o.jsx)(s.admonition,{type:"tip",children:(0,o.jsxs)(s.p,{children:["Check out complete documentation for ",(0,o.jsx)(s.a,{href:"/api/builders/api-response",children:"ApiResponse"}),"."]})})]})}function u(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},2557:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var i=t(8225);const o={},n=i.createContext(o);function a(e){const s=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(n.Provider,{value:s},e.children)}}}]);