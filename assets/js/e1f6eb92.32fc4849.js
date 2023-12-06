"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1304],{8549:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=i(5250),n=i(2366);const o={sidebar_position:4,title:"\u2705 Verify Response"},r=void 0,d={id:"guides/api/verify-response",title:"\u2705 Verify Response",description:"Once the ApiResponse object is returned from the withRequest method, it can be used to verify that the response is valid.",source:"@site/docs/framework-docs/guides/api/verify-response.md",sourceDirName:"guides/api",slug:"/guides/api/verify-response",permalink:"/boyka-framework/docs/guides/api/verify-response",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/verify-response.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1701871609,formattedLastUpdatedAt:"Dec 6, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u2705 Verify Response"},sidebar:"docs",previous:{title:"\ud83d\udd2b Execute Request",permalink:"/boyka-framework/docs/guides/api/execute-request"},next:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/web/setup-config"}},a={},c=[{value:"Verification methods",id:"verification-methods",level:3},{value:"Methods to get response data",id:"methods-to-get-response-data",level:3}];function l(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Once the ",(0,t.jsx)(s.code,{children:"ApiResponse"})," object is returned from the ",(0,t.jsx)(s.code,{children:"withRequest"})," method, it can be used to verify that the response is valid."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.manager.ParallelSession.clearSession;\n\n// Execute request.\nfinal ApiResponse response = ApiManager.execute (request);\n\n// Verify response body.\nresponse.verifyStatusCode ()\n    .isEqualTo (201);\nresponse.verifyTextField ("id")\n    .isNotNull ();\nresponse.verifyTextField ("name")\n    .isEqualTo (user.getName ());\nresponse.verifyTextField ("job")\n    .isEqualTo (user.getJob ());\nresponse.verifyTextField ("createdAt")\n    .isNotNull ();\nresponse.verifySchema("CreateUserSchema.json");\n\n// Clear session after test is completed.\nclearSession ();\n'})}),"\n",(0,t.jsx)(s.h3,{id:"verification-methods",children:"Verification methods"}),"\n",(0,t.jsxs)(s.p,{children:["Following are the methods exposed in ",(0,t.jsx)(s.code,{children:"ApiResponse"})," class to verify the response body and status code:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"verifyBooleanField"}),": Verifies the boolean field in response body."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"verifyHeader"}),": Verifies the header in response."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"verifyIntField"}),": Verifies the integer field in response body."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"verifySchema"}),": Verifies the response body against the given schema."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"verifyStatusCode"}),": Verifies the status code of response."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"verifyStatusMessage"}),": Verifies the status message of response."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"verifyTextField"}),": Verifies the text field in response body."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"methods-to-get-response-data",children:"Methods to get response data"}),"\n",(0,t.jsxs)(s.p,{children:["Following are the methods exposed in ",(0,t.jsx)(s.code,{children:"ApiResponse"})," class to get response data:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"getResponseData (expression)"}),": Returns the response data as String."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"getResponseData (expression, type)"}),": Returns the response data as per the specified class type."]}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:["All the verification methods in ",(0,t.jsx)(s.code,{children:"ApiResponse"})," class uses ",(0,t.jsx)(s.a,{href:"https://truth.dev/",children:"Google Truth library"})," and exposes it's methods to verify the response."]})})]})}function p(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},2366:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>r});var t=i(79);const n={},o=t.createContext(n);function r(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);