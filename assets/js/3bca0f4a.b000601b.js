"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2419],{6030:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"guides/api/compose-request","title":"\ud83c\udfd7\ufe0f Compose Request","description":"For API automation, we have created ApiRequest class which you can utilize to build API requests.","source":"@site/docs/framework-docs/guides/api/compose-request.md","sourceDirName":"guides/api","slug":"/guides/api/compose-request","permalink":"/boyka-framework/docs/guides/api/compose-request","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/compose-request.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1736611308000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"\ud83c\udfd7\ufe0f Compose Request"},"sidebar":"docs","previous":{"title":"\ud83e\ude9b Setup API Configuration","permalink":"/boyka-framework/docs/guides/api/setup-config"},"next":{"title":"\ud83d\udd2b Execute Request","permalink":"/boyka-framework/docs/guides/api/execute-request"}}');var i=s(7557),n=s(2557);const r={sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},a=void 0,c={},u=[{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["For API automation, we have created ",(0,i.jsx)(t.code,{children:"ApiRequest"})," class which you can utilize to build API requests."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Check out complete documentation for ",(0,i.jsx)(t.a,{href:"/api/builders/api-request",children:"ApiRequest"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"This class has a builder pattern which allows you to build API requests in a fluent way."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["Let's create an instance of ",(0,i.jsx)(t.code,{children:"ApiRequest"})," and build a request for ",(0,i.jsx)(t.code,{children:"POST /api/users"})," with body:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.manager.ParallelSession.createSession;\n\n// Create API session using the config key.\ncreateSession (PlatformType.API, "test_reqres");\n\n// Create request body object.\nfinal User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\n// Build API request.\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Similarly, you can build a request for other types of requests by modifying ",(0,i.jsx)(t.code,{children:"RequestMethod"})," enum."]})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2557:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var o=s(8225);const i={},n=o.createContext(i);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);