"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2419],{8052:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>n,metadata:()=>a,toc:()=>u});var o=s(6106),i=s(5782);const n={sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},r=void 0,a={id:"guides/api/compose-request",title:"\ud83c\udfd7\ufe0f Compose Request",description:"For API automation, we have created ApiRequest class which you can utilize to build API requests.",source:"@site/docs/framework-docs/guides/api/compose-request.md",sourceDirName:"guides/api",slug:"/guides/api/compose-request",permalink:"/boyka-framework/docs/guides/api/compose-request",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/compose-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1714371888e3,sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\ud83c\udfd7\ufe0f Compose Request"},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup API Configuration",permalink:"/boyka-framework/docs/guides/api/setup-config"},next:{title:"\ud83d\udd2b Execute Request",permalink:"/boyka-framework/docs/guides/api/execute-request"}},c={},u=[{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["For API automation, we have created ",(0,o.jsx)(t.code,{children:"ApiRequest"})," class which you can utilize to build API requests."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Check out complete documentation for ",(0,o.jsx)(t.a,{href:"/api/builders/api-request",children:"ApiRequest"}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"This class has a builder pattern which allows you to build API requests in a fluent way."}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(t.p,{children:["Let's create an instance of ",(0,o.jsx)(t.code,{children:"ApiRequest"})," and build a request for ",(0,o.jsx)(t.code,{children:"POST /api/users"})," with body:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.manager.ParallelSession.createSession;\n\n// Create API session using the config key.\ncreateSession (PlatformType.API, "test_reqres");\n\n// Create request body object.\nfinal User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\n// Build API request.\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n'})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Similarly, you can build a request for other types of requests by modifying ",(0,o.jsx)(t.code,{children:"RequestMethod"})," enum."]})})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},5782:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var o=s(7378);const i={},n=o.createContext(i);function r(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);