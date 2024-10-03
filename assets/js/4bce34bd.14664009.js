"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[594],{6341:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(6106),n=r(3309);const i={title:"ApiResponse",sidebar_position:2},d=void 0,o={id:"builders/api-response",title:"ApiResponse",description:"getResponseData",source:"@site/docs/api/builders/api-response.md",sourceDirName:"builders",slug:"/builders/api-response",permalink:"/boyka-framework/api/builders/api-response",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/builders/api-response.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1727938724e3,sidebarPosition:2,frontMatter:{title:"ApiResponse",sidebar_position:2},sidebar:"api",previous:{title:"ApiRequest",permalink:"/boyka-framework/api/builders/api-request"},next:{title:"Locator",permalink:"/boyka-framework/api/builders/locator"}},c={},l=[{value:"<code>getResponseData</code>",id:"get-response-data-1",level:2},{value:"Parameters",id:"parameters",level:3},{value:"<code>expression</code>",id:"expression",level:4},{value:"Return Type: <code>String</code>",id:"return-type-string",level:3},{value:"<code>getResponseData</code>",id:"get-response-data-2",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"<code>expression</code>",id:"expression-1",level:4},{value:"<code>type</code>",id:"type",level:4},{value:"Return Type: <code>&lt;T&gt;</code>",id:"return-type-t",level:3},{value:"<code>verifyBooleanField</code>",id:"verify-boolean-field",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"<code>expression</code>",id:"expression-2",level:4},{value:"Return Type: <code>BooleanSubject</code>",id:"return-type-booleansubject",level:3},{value:"<code>verifyIntField</code>",id:"verify-int-field",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"<code>expression</code>",id:"expression-3",level:4},{value:"Return Type: <code>IntegerSubject</code>",id:"return-type-integersubject",level:3},{value:"<code>verifyStatusCode</code>",id:"verify-status-code",level:2},{value:"Return Type: <code>IntegerSubject</code>",id:"return-type-integersubject-1",level:3},{value:"<code>verifyStatusMessage</code>",id:"verify-status-message",level:2},{value:"Return Type: <code>StringSubject</code>",id:"return-type-stringsubject",level:3},{value:"<code>verifyTextField</code>",id:"verify-text-field",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"<code>expression</code>",id:"expression-4",level:4},{value:"Return Type: <code>StringSubject</code>",id:"return-type-stringsubject-1",level:3},{value:"<code>verifyHeader</code>",id:"verify-response-header",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"<code>key</code>",id:"key",level:4},{value:"Return Type: <code>StringSubject</code>",id:"return-type-stringsubject-2",level:3},{value:"<code>verifySchema</code>",id:"verify-schema",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"<code>schemaName</code>",id:"schemaname",level:4}];function a(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"get-response-data-1",children:(0,t.jsx)(s.code,{children:"getResponseData"})}),"\n",(0,t.jsx)(s.p,{children:"This method will get the response data from the response body."}),"\n",(0,t.jsx)(s.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"expression",children:(0,t.jsx)(s.code,{children:"expression"})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter expects a valid ",(0,t.jsx)(s.code,{children:"JsonPath"})," expression."]}),"\n",(0,t.jsxs)(s.h3,{id:"return-type-string",children:["Return Type: ",(0,t.jsx)(s.code,{children:"String"})]}),"\n",(0,t.jsx)(s.p,{children:"Returns the response data as string."}),"\n",(0,t.jsx)(s.h2,{id:"get-response-data-2",children:(0,t.jsx)(s.code,{children:"getResponseData"})}),"\n",(0,t.jsx)(s.p,{children:"This method will get the response data from the response body."}),"\n",(0,t.jsx)(s.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"expression-1",children:(0,t.jsx)(s.code,{children:"expression"})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter expects a valid ",(0,t.jsx)(s.code,{children:"JsonPath"})," expression."]}),"\n",(0,t.jsx)(s.h4,{id:"type",children:(0,t.jsx)(s.code,{children:"type"})}),"\n",(0,t.jsx)(s.p,{children:"This parameter expects a class type."}),"\n",(0,t.jsxs)(s.h3,{id:"return-type-t",children:["Return Type: ",(0,t.jsx)(s.code,{children:"<T>"})]}),"\n",(0,t.jsx)(s.p,{children:"Returns the response data as Java object."}),"\n",(0,t.jsx)(s.h2,{id:"verify-boolean-field",children:(0,t.jsx)(s.code,{children:"verifyBooleanField"})}),"\n",(0,t.jsx)(s.p,{children:"This method will verify the boolean field in the response body."}),"\n",(0,t.jsx)(s.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"expression-2",children:(0,t.jsx)(s.code,{children:"expression"})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter expects a valid ",(0,t.jsx)(s.code,{children:"JsonPath"})," expression."]}),"\n",(0,t.jsxs)(s.h3,{id:"return-type-booleansubject",children:["Return Type: ",(0,t.jsx)(s.code,{children:"BooleanSubject"})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns the ",(0,t.jsx)(s.a,{href:"https://truth.dev/api/latest/com/google/common/truth/BooleanSubject.html#method.summary",children:(0,t.jsx)(s.code,{children:"BooleanSubject"})})," object."]}),"\n",(0,t.jsx)(s.h2,{id:"verify-int-field",children:(0,t.jsx)(s.code,{children:"verifyIntField"})}),"\n",(0,t.jsx)(s.p,{children:"This method will verify the boolean field in the response body."}),"\n",(0,t.jsx)(s.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"expression-3",children:(0,t.jsx)(s.code,{children:"expression"})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter expects a valid ",(0,t.jsx)(s.code,{children:"JsonPath"})," expression."]}),"\n",(0,t.jsxs)(s.h3,{id:"return-type-integersubject",children:["Return Type: ",(0,t.jsx)(s.code,{children:"IntegerSubject"})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns the ",(0,t.jsx)(s.a,{href:"https://truth.dev/api/latest/com/google/common/truth/IntegerSubject.html#method.summary",children:(0,t.jsx)(s.code,{children:"IntegerSubject"})})," object."]}),"\n",(0,t.jsx)(s.h2,{id:"verify-status-code",children:(0,t.jsx)(s.code,{children:"verifyStatusCode"})}),"\n",(0,t.jsx)(s.p,{children:"This method will verify the status code of the response."}),"\n",(0,t.jsxs)(s.h3,{id:"return-type-integersubject-1",children:["Return Type: ",(0,t.jsx)(s.code,{children:"IntegerSubject"})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns the ",(0,t.jsx)(s.a,{href:"https://truth.dev/api/latest/com/google/common/truth/IntegerSubject.html#method.summary",children:(0,t.jsx)(s.code,{children:"IntegerSubject"})})," object."]}),"\n",(0,t.jsx)(s.h2,{id:"verify-status-message",children:(0,t.jsx)(s.code,{children:"verifyStatusMessage"})}),"\n",(0,t.jsx)(s.p,{children:"This method will verify the status message of the response."}),"\n",(0,t.jsxs)(s.h3,{id:"return-type-stringsubject",children:["Return Type: ",(0,t.jsx)(s.code,{children:"StringSubject"})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns the ",(0,t.jsx)(s.a,{href:"https://truth.dev/api/latest/com/google/common/truth/StringSubject.html#method.summary",children:(0,t.jsx)(s.code,{children:"StringSubject"})})," object."]}),"\n",(0,t.jsx)(s.h2,{id:"verify-text-field",children:(0,t.jsx)(s.code,{children:"verifyTextField"})}),"\n",(0,t.jsx)(s.p,{children:"This method will verify the text field in the response body."}),"\n",(0,t.jsx)(s.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"expression-4",children:(0,t.jsx)(s.code,{children:"expression"})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter expects a valid ",(0,t.jsx)(s.code,{children:"JsonPath"})," expression."]}),"\n",(0,t.jsxs)(s.h3,{id:"return-type-stringsubject-1",children:["Return Type: ",(0,t.jsx)(s.code,{children:"StringSubject"})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns the ",(0,t.jsx)(s.a,{href:"https://truth.dev/api/latest/com/google/common/truth/StringSubject.html#method.summary",children:(0,t.jsx)(s.code,{children:"StringSubject"})})," object."]}),"\n",(0,t.jsx)(s.h2,{id:"verify-response-header",children:(0,t.jsx)(s.code,{children:"verifyHeader"})}),"\n",(0,t.jsx)(s.p,{children:"This method will verify the header keys in the response body."}),"\n",(0,t.jsx)(s.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"key",children:(0,t.jsx)(s.code,{children:"key"})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter expects a valid ",(0,t.jsx)(s.code,{children:"key"})," value."]}),"\n",(0,t.jsxs)(s.h3,{id:"return-type-stringsubject-2",children:["Return Type: ",(0,t.jsx)(s.code,{children:"StringSubject"})]}),"\n",(0,t.jsxs)(s.p,{children:["Returns the ",(0,t.jsx)(s.a,{href:"https://truth.dev/api/latest/com/google/common/truth/StringSubject.html#method.summary",children:(0,t.jsx)(s.code,{children:"StringSubject"})})," object."]}),"\n",(0,t.jsx)(s.h2,{id:"verify-schema",children:(0,t.jsx)(s.code,{children:"verifySchema"})}),"\n",(0,t.jsx)(s.p,{children:"This method will verify the api response body json schema."}),"\n",(0,t.jsx)(s.h3,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsx)(s.h4,{id:"schemaname",children:(0,t.jsx)(s.code,{children:"schemaName"})}),"\n",(0,t.jsxs)(s.p,{children:["This parameter expects a valid ",(0,t.jsx)(s.code,{children:"schemaName"})," value. The schemaName is a json file containing the expected json schema version stored at location ",(0,t.jsx)(s.code,{children:"src/test/resources/schema/<schameName>.json"}),"."]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},3309:(e,s,r)=>{r.d(s,{R:()=>d,x:()=>o});var t=r(7378);const n={},i=t.createContext(n);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);