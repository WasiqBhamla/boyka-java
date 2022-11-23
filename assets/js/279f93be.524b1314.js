"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[243],{167:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(5721);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(8533),a=(n(5721),n(167));const i={sidebar_position:3,title:"\ud83d\udd2b Execute Request"},o=void 0,s={unversionedId:"guides/api/execute-request",id:"guides/api/execute-request",title:"\ud83d\udd2b Execute Request",description:"Once you have composed your API request, you can execute it using class ApiManager and method execute.",source:"@site/docs/framework-docs/guides/api/execute-request.md",sourceDirName:"guides/api",slug:"/guides/api/execute-request",permalink:"/boyka-framework/docs/guides/api/execute-request",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/api/execute-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1669214003,formattedLastUpdatedAt:"Nov 23, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udd2b Execute Request"},sidebar:"docs",previous:{title:"\ud83c\udfd7\ufe0f Compose Request",permalink:"/boyka-framework/docs/guides/api/compose-request"},next:{title:"\u2705 Verify Response",permalink:"/boyka-framework/docs/guides/api/verify-response"}},p={},l=[{value:"Example",id:"example",level:2},{value:"API Response class",id:"api-response-class",level:2},{value:"Verification methods",id:"verification-methods",level:3},{value:"Methods to get response data",id:"methods-to-get-response-data",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Once you have composed your API request, you can execute it using class ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiManager")," and method ",(0,a.kt)("inlineCode",{parentName:"p"},"execute"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check out complete documentation for ",(0,a.kt)("a",{parentName:"p",href:"/api/api/api-manager"},"ApiManager"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Using request created in previous example.\nfinal ApiResponse response = ApiManager.execute (request);\n")),(0,a.kt)("h2",{id:"api-response-class"},"API Response class"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"execute")," method will return ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class object which contains methods to verify the response body and status code."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Check out complete documentation for ",(0,a.kt)("a",{parentName:"p",href:"/api/builders/api-response"},"ApiResponse"),".")),(0,a.kt)("h3",{id:"verification-methods"},"Verification methods"),(0,a.kt)("p",null,"Following are the methods exposed in ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class to verify the response body and status code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verifyBooleanField"),": Verifies the boolean field in response body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verifyHeader"),": Verifies the header in response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verifyIntField"),": Verifies the integer field in response body."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verifySchema"),": Verifies the response body against the given schema."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verifyStatusCode"),": Verifies the status code of response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verifyStatusMessage"),": Verifies the status message of response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"verifyTextField"),": Verifies the text field in response body.")),(0,a.kt)("h3",{id:"methods-to-get-response-data"},"Methods to get response data"),(0,a.kt)("p",null,"Following are the methods exposed in ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiResponse")," class to get response data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getResponseData (expression)"),": Returns the response data as String."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getResponseData (expression, type)"),": Returns the response data as per the specified class type.")))}d.isMDXComponent=!0}}]);