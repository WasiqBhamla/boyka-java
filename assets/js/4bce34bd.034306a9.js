"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5233],{8570:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(79);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4847:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(3262),a=(r(79),r(8570));const i={title:"ApiResponse",sidebar_position:2},o=void 0,s={unversionedId:"builders/api-response",id:"builders/api-response",title:"ApiResponse",description:"getResponseData",source:"@site/docs/api/builders/api-response.md",sourceDirName:"builders",slug:"/builders/api-response",permalink:"/boyka-framework/api/builders/api-response",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/builders/api-response.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696145763,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:2,frontMatter:{title:"ApiResponse",sidebar_position:2},sidebar:"api",previous:{title:"ApiRequest",permalink:"/boyka-framework/api/builders/api-request"},next:{title:"Locator",permalink:"/boyka-framework/api/builders/locator"}},l={},p=[{value:"<code>getResponseData</code>",id:"get-response-data-1",level:2},{value:"Parameters",id:"parameters",level:3},{value:"<code>expression</code>",id:"expression",level:4},{value:"Return Type: <code>String</code>",id:"return-type-string",level:3},{value:"<code>getResponseData</code>",id:"get-response-data-2",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"<code>expression</code>",id:"expression-1",level:4},{value:"<code>type</code>",id:"type",level:4},{value:"Return Type: <code>&lt;T&gt;</code>",id:"return-type-t",level:3},{value:"<code>verifyBooleanField</code>",id:"verify-boolean-field",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"<code>expression</code>",id:"expression-2",level:4},{value:"Return Type: <code>BooleanSubject</code>",id:"return-type-booleansubject",level:3},{value:"<code>verifyIntField</code>",id:"verify-int-field",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"<code>expression</code>",id:"expression-3",level:4},{value:"Return Type: <code>IntegerSubject</code>",id:"return-type-integersubject",level:3},{value:"<code>verifyStatusCode</code>",id:"verify-status-code",level:2},{value:"Return Type: <code>IntegerSubject</code>",id:"return-type-integersubject-1",level:3},{value:"<code>verifyStatusMessage</code>",id:"verify-status-message",level:2},{value:"Return Type: <code>StringSubject</code>",id:"return-type-stringsubject",level:3},{value:"<code>verifyTextField</code>",id:"verify-text-field",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"<code>expression</code>",id:"expression-4",level:4},{value:"Return Type: <code>StringSubject</code>",id:"return-type-stringsubject-1",level:3},{value:"<code>verifyHeader</code>",id:"verify-response-header",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"<code>key</code>",id:"key",level:4},{value:"Return Type: <code>StringSubject</code>",id:"return-type-stringsubject-2",level:3},{value:"<code>verifySchema</code>",id:"verify-schema",level:2},{value:"Parameters",id:"parameters-6",level:3},{value:"<code>schemaName</code>",id:"schemaname",level:4}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-response-data-1"},(0,a.kt)("inlineCode",{parentName:"h2"},"getResponseData")),(0,a.kt)("p",null,"This method will get the response data from the response body."),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("h4",{id:"expression"},(0,a.kt)("inlineCode",{parentName:"h4"},"expression")),(0,a.kt)("p",null,"This parameter expects a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,a.kt)("h3",{id:"return-type-string"},"Return Type: ",(0,a.kt)("inlineCode",{parentName:"h3"},"String")),(0,a.kt)("p",null,"Returns the response data as string."),(0,a.kt)("h2",{id:"get-response-data-2"},(0,a.kt)("inlineCode",{parentName:"h2"},"getResponseData")),(0,a.kt)("p",null,"This method will get the response data from the response body."),(0,a.kt)("h3",{id:"parameters-1"},"Parameters"),(0,a.kt)("h4",{id:"expression-1"},(0,a.kt)("inlineCode",{parentName:"h4"},"expression")),(0,a.kt)("p",null,"This parameter expects a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,a.kt)("h4",{id:"type"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")),(0,a.kt)("p",null,"This parameter expects a class type."),(0,a.kt)("h3",{id:"return-type-t"},"Return Type: ",(0,a.kt)("inlineCode",{parentName:"h3"},"<T>")),(0,a.kt)("p",null,"Returns the response data as Java object."),(0,a.kt)("h2",{id:"verify-boolean-field"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyBooleanField")),(0,a.kt)("p",null,"This method will verify the boolean field in the response body."),(0,a.kt)("h3",{id:"parameters-2"},"Parameters"),(0,a.kt)("h4",{id:"expression-2"},(0,a.kt)("inlineCode",{parentName:"h4"},"expression")),(0,a.kt)("p",null,"This parameter expects a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,a.kt)("h3",{id:"return-type-booleansubject"},"Return Type: ",(0,a.kt)("inlineCode",{parentName:"h3"},"BooleanSubject")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/BooleanSubject.html#method.summary"},(0,a.kt)("inlineCode",{parentName:"a"},"BooleanSubject"))," object."),(0,a.kt)("h2",{id:"verify-int-field"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyIntField")),(0,a.kt)("p",null,"This method will verify the boolean field in the response body."),(0,a.kt)("h3",{id:"parameters-3"},"Parameters"),(0,a.kt)("h4",{id:"expression-3"},(0,a.kt)("inlineCode",{parentName:"h4"},"expression")),(0,a.kt)("p",null,"This parameter expects a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,a.kt)("h3",{id:"return-type-integersubject"},"Return Type: ",(0,a.kt)("inlineCode",{parentName:"h3"},"IntegerSubject")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/IntegerSubject.html#method.summary"},(0,a.kt)("inlineCode",{parentName:"a"},"IntegerSubject"))," object."),(0,a.kt)("h2",{id:"verify-status-code"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyStatusCode")),(0,a.kt)("p",null,"This method will verify the status code of the response."),(0,a.kt)("h3",{id:"return-type-integersubject-1"},"Return Type: ",(0,a.kt)("inlineCode",{parentName:"h3"},"IntegerSubject")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/IntegerSubject.html#method.summary"},(0,a.kt)("inlineCode",{parentName:"a"},"IntegerSubject"))," object."),(0,a.kt)("h2",{id:"verify-status-message"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyStatusMessage")),(0,a.kt)("p",null,"This method will verify the status message of the response."),(0,a.kt)("h3",{id:"return-type-stringsubject"},"Return Type: ",(0,a.kt)("inlineCode",{parentName:"h3"},"StringSubject")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/StringSubject.html#method.summary"},(0,a.kt)("inlineCode",{parentName:"a"},"StringSubject"))," object."),(0,a.kt)("h2",{id:"verify-text-field"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyTextField")),(0,a.kt)("p",null,"This method will verify the text field in the response body."),(0,a.kt)("h3",{id:"parameters-4"},"Parameters"),(0,a.kt)("h4",{id:"expression-4"},(0,a.kt)("inlineCode",{parentName:"h4"},"expression")),(0,a.kt)("p",null,"This parameter expects a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,a.kt)("h3",{id:"return-type-stringsubject-1"},"Return Type: ",(0,a.kt)("inlineCode",{parentName:"h3"},"StringSubject")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/StringSubject.html#method.summary"},(0,a.kt)("inlineCode",{parentName:"a"},"StringSubject"))," object."),(0,a.kt)("h2",{id:"verify-response-header"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifyHeader")),(0,a.kt)("p",null,"This method will verify the header keys in the response body."),(0,a.kt)("h3",{id:"parameters-5"},"Parameters"),(0,a.kt)("h4",{id:"key"},(0,a.kt)("inlineCode",{parentName:"h4"},"key")),(0,a.kt)("p",null,"This parameter expects a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," value."),(0,a.kt)("h3",{id:"return-type-stringsubject-2"},"Return Type: ",(0,a.kt)("inlineCode",{parentName:"h3"},"StringSubject")),(0,a.kt)("p",null,"Returns the ",(0,a.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/StringSubject.html#method.summary"},(0,a.kt)("inlineCode",{parentName:"a"},"StringSubject"))," object."),(0,a.kt)("h2",{id:"verify-schema"},(0,a.kt)("inlineCode",{parentName:"h2"},"verifySchema")),(0,a.kt)("p",null,"This method will verify the api response body json schema."),(0,a.kt)("h3",{id:"parameters-6"},"Parameters"),(0,a.kt)("h4",{id:"schemaname"},(0,a.kt)("inlineCode",{parentName:"h4"},"schemaName")),(0,a.kt)("p",null,"This parameter expects a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"schemaName")," value. The schemaName is a json file containing the expected json schema version stored at location ",(0,a.kt)("inlineCode",{parentName:"p"},"src/test/resources/schema/<schameName>.json"),"."))}c.isMDXComponent=!0}}]);