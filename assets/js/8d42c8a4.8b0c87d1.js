"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5461],{167:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7612);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5698:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=r(5731),a=r(2706),i=(r(7612),r(167)),o=["components"],s={title:"ApiResponse",sidebar_position:3},l=void 0,p={unversionedId:"api/builders/api-response",id:"api/builders/api-response",title:"ApiResponse",description:"getResponseData",source:"@site/docs/api/api/builders/api-response.md",sourceDirName:"api/builders",slug:"/api/builders/api-response",permalink:"/boyka-framework/api/api/builders/api-response",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/api/api/builders/api-response.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1655268542,formattedLastUpdatedAt:"6/15/2022",sidebarPosition:3,frontMatter:{title:"ApiResponse",sidebar_position:3},sidebar:"api",previous:{title:"ApiRequest",permalink:"/boyka-framework/api/api/builders/api-request"},next:{title:"ApiManager",permalink:"/boyka-framework/api/api/api-manager"}},d={},u=[{value:"<code>getResponseData</code>",id:"get-response-data-1",level:2},{value:"Parameters",id:"parameters",level:3},{value:"<code>expression</code>",id:"expression",level:4},{value:"Return Type: <code>String</code>",id:"return-type-string",level:3},{value:"<code>getResponseData</code>",id:"get-response-data-2",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"<code>expression</code>",id:"expression-1",level:4},{value:"<code>type</code>",id:"type",level:4},{value:"Return Type: <code>&lt;T&gt;</code>",id:"return-type-t",level:3},{value:"<code>verifyBooleanField</code>",id:"verify-boolean-field",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"<code>expression</code>",id:"expression-2",level:4},{value:"Return Type: <code>BooleanSubject</code>",id:"return-type-booleansubject",level:3},{value:"<code>verifyIntField</code>",id:"verify-int-field",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"<code>expression</code>",id:"expression-3",level:4},{value:"Return Type: <code>IntegerSubject</code>",id:"return-type-integersubject",level:3},{value:"<code>verifyStatusCode</code>",id:"verify-status-code",level:2},{value:"Return Type: <code>IntegerSubject</code>",id:"return-type-integersubject-1",level:3},{value:"<code>verifyStatusMessage</code>",id:"verify-status-message",level:2},{value:"Return Type: <code>StringSubject</code>",id:"return-type-stringsubject",level:3},{value:"<code>verifyTextField</code>",id:"verify-text-field",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"<code>expression</code>",id:"expression-4",level:4},{value:"Return Type: <code>StringSubject</code>",id:"return-type-stringsubject-1",level:3}],c={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get-response-data-1"},(0,i.kt)("inlineCode",{parentName:"h2"},"getResponseData")),(0,i.kt)("p",null,"This method will get the response data from the response body."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("h4",{id:"expression"},(0,i.kt)("inlineCode",{parentName:"h4"},"expression")),(0,i.kt)("p",null,"This parameter expects a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,i.kt)("h3",{id:"return-type-string"},"Return Type: ",(0,i.kt)("inlineCode",{parentName:"h3"},"String")),(0,i.kt)("p",null,"Returns the response data as string."),(0,i.kt)("h2",{id:"get-response-data-2"},(0,i.kt)("inlineCode",{parentName:"h2"},"getResponseData")),(0,i.kt)("p",null,"This method will get the response data from the response body."),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("h4",{id:"expression-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"expression")),(0,i.kt)("p",null,"This parameter expects a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,i.kt)("h4",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")),(0,i.kt)("p",null,"This parameter expects a class type."),(0,i.kt)("h3",{id:"return-type-t"},"Return Type: ",(0,i.kt)("inlineCode",{parentName:"h3"},"<T>")),(0,i.kt)("p",null,"Returns the response data as Java object."),(0,i.kt)("h2",{id:"verify-boolean-field"},(0,i.kt)("inlineCode",{parentName:"h2"},"verifyBooleanField")),(0,i.kt)("p",null,"This method will verify the boolean field in the response body."),(0,i.kt)("h3",{id:"parameters-2"},"Parameters"),(0,i.kt)("h4",{id:"expression-2"},(0,i.kt)("inlineCode",{parentName:"h4"},"expression")),(0,i.kt)("p",null,"This parameter expects a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,i.kt)("h3",{id:"return-type-booleansubject"},"Return Type: ",(0,i.kt)("inlineCode",{parentName:"h3"},"BooleanSubject")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/BooleanSubject.html#method.summary"},(0,i.kt)("inlineCode",{parentName:"a"},"BooleanSubject"))," object."),(0,i.kt)("h2",{id:"verify-int-field"},(0,i.kt)("inlineCode",{parentName:"h2"},"verifyIntField")),(0,i.kt)("p",null,"This method will verify the boolean field in the response body."),(0,i.kt)("h3",{id:"parameters-3"},"Parameters"),(0,i.kt)("h4",{id:"expression-3"},(0,i.kt)("inlineCode",{parentName:"h4"},"expression")),(0,i.kt)("p",null,"This parameter expects a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,i.kt)("h3",{id:"return-type-integersubject"},"Return Type: ",(0,i.kt)("inlineCode",{parentName:"h3"},"IntegerSubject")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/IntegerSubject.html#method.summary"},(0,i.kt)("inlineCode",{parentName:"a"},"IntegerSubject"))," object."),(0,i.kt)("h2",{id:"verify-status-code"},(0,i.kt)("inlineCode",{parentName:"h2"},"verifyStatusCode")),(0,i.kt)("p",null,"This method will verify the status code of the response."),(0,i.kt)("h3",{id:"return-type-integersubject-1"},"Return Type: ",(0,i.kt)("inlineCode",{parentName:"h3"},"IntegerSubject")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/IntegerSubject.html#method.summary"},(0,i.kt)("inlineCode",{parentName:"a"},"IntegerSubject"))," object."),(0,i.kt)("h2",{id:"verify-status-message"},(0,i.kt)("inlineCode",{parentName:"h2"},"verifyStatusMessage")),(0,i.kt)("p",null,"This method will verify the status message of the response."),(0,i.kt)("h3",{id:"return-type-stringsubject"},"Return Type: ",(0,i.kt)("inlineCode",{parentName:"h3"},"StringSubject")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/StringSubject.html#method.summary"},(0,i.kt)("inlineCode",{parentName:"a"},"StringSubject"))," object."),(0,i.kt)("h2",{id:"verify-text-field"},(0,i.kt)("inlineCode",{parentName:"h2"},"verifyTextField")),(0,i.kt)("p",null,"This method will verify the text field in the response body."),(0,i.kt)("h3",{id:"parameters-4"},"Parameters"),(0,i.kt)("h4",{id:"expression-4"},(0,i.kt)("inlineCode",{parentName:"h4"},"expression")),(0,i.kt)("p",null,"This parameter expects a valid ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonPath")," expression."),(0,i.kt)("h3",{id:"return-type-stringsubject-1"},"Return Type: ",(0,i.kt)("inlineCode",{parentName:"h3"},"StringSubject")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"https://truth.dev/api/latest/com/google/common/truth/StringSubject.html#method.summary"},(0,i.kt)("inlineCode",{parentName:"a"},"StringSubject"))," object."))}m.isMDXComponent=!0}}]);