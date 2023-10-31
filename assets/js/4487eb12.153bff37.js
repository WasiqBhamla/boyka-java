"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7215],{8570:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(79);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,m=d["".concat(o,".").concat(c)]||d[c]||h[c]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(3262),r=(a(79),a(8570));const i={title:"ApiRequest",sidebar_position:1},l=void 0,s={unversionedId:"builders/api-request",id:"builders/api-request",title:"ApiRequest",description:"createRequest",source:"@site/docs/api/builders/api-request.md",sourceDirName:"builders",slug:"/builders/api-request",permalink:"/boyka-framework/api/builders/api-request",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/builders/api-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1698771901,formattedLastUpdatedAt:"Oct 31, 2023",sidebarPosition:1,frontMatter:{title:"ApiRequest",sidebar_position:1},sidebar:"api",previous:{title:"ITextBoxActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/text-box-actions-listeners"},next:{title:"ApiResponse",permalink:"/boyka-framework/api/builders/api-response"}},o={},u=[{value:"<code>createRequest</code>",id:"createrequest",level:2},{value:"<code>contentType</code>",id:"contenttype",level:2},{value:"<code>header</code>",id:"header",level:2},{value:"<code>path</code>",id:"path",level:2},{value:"<code>pathParam</code>",id:"pathparam",level:2},{value:"<code>queryParam</code>",id:"queryparam",level:2},{value:"<code>body</code>",id:"body",level:2},{value:"<code>bodyObject</code>",id:"bodyobject",level:2},{value:"<code>formBody</code>",id:"formbody",level:2},{value:"<code>method</code>",id:"method",level:2},{value:"<code>userName</code>",id:"username",level:2},{value:"<code>password</code>",id:"password",level:2},{value:"<code>create</code>",id:"create",level:2}],p={toc:u},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"createrequest"},(0,r.kt)("inlineCode",{parentName:"h2"},"createRequest")),(0,r.kt)("p",null,"This is a builder method to build ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiRequest")," instance."),(0,r.kt)("admonition",{title:"Important!",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Always start composing the request with ",(0,r.kt)("inlineCode",{parentName:"p"},"createRequest")," method.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// highlight-next-line\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"contenttype"},(0,r.kt)("inlineCode",{parentName:"h2"},"contentType")),(0,r.kt)("p",null,"This method is used to set the content type of the request. Allowed values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FORM_URLENCODED")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," (",(0,r.kt)("strong",{parentName:"li"},"default"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MULTIPART_FORM_DATA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLAIN_TEXT"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n// highlight-next-line\n    .contentType (ContentType.JSON)\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"header"},(0,r.kt)("inlineCode",{parentName:"h2"},"header")),(0,r.kt)("p",null,"This method is used to set the header of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .contentType (ContentType.JSON)\n// highlight-start\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n// highlight-end\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"path"},(0,r.kt)("inlineCode",{parentName:"h2"},"path")),(0,r.kt)("p",null,"This method is used to set the path of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n// highlight-next-line\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"pathparam"},(0,r.kt)("inlineCode",{parentName:"h2"},"pathParam")),(0,r.kt)("p",null,"This method is used to set the path parameter(s) of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n    .path ("/users/${userId}")\n// highlight-next-line\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"queryparam"},(0,r.kt)("inlineCode",{parentName:"h2"},"queryParam")),(0,r.kt)("p",null,"This method is used to set the query parameter(s) of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n// highlight-next-line\n    .queryParam ("param1", "value1")\n    .create ();\n')),(0,r.kt)("h2",{id:"body"},(0,r.kt)("inlineCode",{parentName:"h2"},"body")),(0,r.kt)("p",null,"This method is used to set the body of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .body ("{\\"name\\":\\"John\\",\\"job\\":\\"Developer\\"}")\n    .create ();\n')),(0,r.kt)("h2",{id:"bodyobject"},(0,r.kt)("inlineCode",{parentName:"h2"},"bodyObject")),(0,r.kt)("p",null,"This method is used to set the body of the request using Java object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .bodyObject (user)\n    .create ();\n')),(0,r.kt)("h2",{id:"formbody"},(0,r.kt)("inlineCode",{parentName:"h2"},"formBody")),(0,r.kt)("p",null,"This method is used to set the Form body of the request using key and value pairs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n// highlight-start\n    .formBody ("strange", "boom")\n    .formBody ("test", "abc")\n// highlight-end\n    .create ();\n')),(0,r.kt)("h2",{id:"method"},(0,r.kt)("inlineCode",{parentName:"h2"},"method")),(0,r.kt)("p",null,"This method is used to set the method of the request. Following are the allowed values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEAD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPTIONS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PATCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TRACE"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// highlight-next-line\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n')),(0,r.kt)("h2",{id:"username"},(0,r.kt)("inlineCode",{parentName:"h2"},"userName")),(0,r.kt)("p",null,"This method is used to set the user name of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .userName ("wasiq")\n    .password ("123456")\n    .bodyObject (user)\n    .create ();\n')),(0,r.kt)("h2",{id:"password"},(0,r.kt)("inlineCode",{parentName:"h2"},"password")),(0,r.kt)("p",null,"This method is used to set the password of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n    .userName ("wasiq")\n// highlight-next-line\n    .password ("123456")\n    .bodyObject (user)\n    .create ();\n')),(0,r.kt)("h2",{id:"create"},(0,r.kt)("inlineCode",{parentName:"h2"},"create")),(0,r.kt)("p",null,"This method will create ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiRequest")," instance."),(0,r.kt)("admonition",{title:"Important!",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Always end composing the request with ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n// highlight-next-line\n    .create ();\n')))}h.isMDXComponent=!0}}]);