"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7215],{167:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(5721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(8533),r=(n(5721),n(167));const i={title:"ApiRequest",sidebar_position:1},o=void 0,l={unversionedId:"builders/api-request",id:"builders/api-request",title:"ApiRequest",description:"createRequest",source:"@site/docs/api/builders/api-request.md",sourceDirName:"builders",slug:"/builders/api-request",permalink:"/boyka-framework/api/builders/api-request",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/builders/api-request.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1675178668,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:1,frontMatter:{title:"ApiRequest",sidebar_position:1},sidebar:"api",previous:{title:"Introduction",permalink:"/boyka-framework/api/intro"},next:{title:"ApiResponse",permalink:"/boyka-framework/api/builders/api-response"}},s={},u=[{value:"<code>createRequest</code>",id:"createrequest",level:2},{value:"<code>configKey</code>",id:"configkey",level:2},{value:"<code>contentType</code>",id:"contenttype",level:2},{value:"<code>header</code>",id:"header",level:2},{value:"<code>path</code>",id:"path",level:2},{value:"<code>pathParam</code>",id:"pathparam",level:2},{value:"<code>queryParam</code>",id:"queryparam",level:2},{value:"<code>body</code>",id:"body",level:2},{value:"<code>bodyObject</code>",id:"bodyobject",level:2},{value:"<code>method</code>",id:"method",level:2},{value:"<code>userName</code>",id:"username",level:2},{value:"<code>password</code>",id:"password",level:2},{value:"<code>create</code>",id:"create",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"createrequest"},(0,r.kt)("inlineCode",{parentName:"h2"},"createRequest")),(0,r.kt)("p",null,"This is a builder method to build ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiRequest")," instance."),(0,r.kt)("admonition",{title:"Important!",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Always start composing the request with ",(0,r.kt)("inlineCode",{parentName:"p"},"createRequest")," method.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// highlight-next-line\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"configkey"},(0,r.kt)("inlineCode",{parentName:"h2"},"configKey")),(0,r.kt)("p",null,"This method is used to set the configuration key corresponding to API config block in ",(0,r.kt)("inlineCode",{parentName:"p"},"boyka-config.json"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n// highlight-next-line\n    .configKey ("test_reqres")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"contenttype"},(0,r.kt)("inlineCode",{parentName:"h2"},"contentType")),(0,r.kt)("p",null,"This method is used to set the content type of the request. Allowed values are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FORM_URLENCODED")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JSON")," (",(0,r.kt)("strong",{parentName:"li"},"default"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MULTIPART_FORM_DATA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PLAIN_TEXT"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n// highlight-next-line\n    .contentType (ContentType.JSON)\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"header"},(0,r.kt)("inlineCode",{parentName:"h2"},"header")),(0,r.kt)("p",null,"This method is used to set the header of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .contentType (ContentType.JSON)\n// highlight-start\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n// highlight-end\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"path"},(0,r.kt)("inlineCode",{parentName:"h2"},"path")),(0,r.kt)("p",null,"This method is used to set the path of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n// highlight-next-line\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"pathparam"},(0,r.kt)("inlineCode",{parentName:"h2"},"pathParam")),(0,r.kt)("p",null,"This method is used to set the path parameter(s) of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n    .path ("/users/${userId}")\n// highlight-next-line\n    .pathParam ("userId", "2")\n    .create ();\n')),(0,r.kt)("h2",{id:"queryparam"},(0,r.kt)("inlineCode",{parentName:"h2"},"queryParam")),(0,r.kt)("p",null,"This method is used to set the query parameter(s) of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n// highlight-next-line\n    .queryParam ("param1", "value1")\n    .create ();\n')),(0,r.kt)("h2",{id:"body"},(0,r.kt)("inlineCode",{parentName:"h2"},"body")),(0,r.kt)("p",null,"This method is used to set the body of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .body ("{\\"name\\":\\"John\\",\\"job\\":\\"Developer\\"}")\n    .create ();\n')),(0,r.kt)("h2",{id:"bodyobject"},(0,r.kt)("inlineCode",{parentName:"h2"},"bodyObject")),(0,r.kt)("p",null,"This method is used to set the body of the request using Java object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\nfinal ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .bodyObject (user)\n    .create ();\n')),(0,r.kt)("h2",{id:"method"},(0,r.kt)("inlineCode",{parentName:"h2"},"method")),(0,r.kt)("p",null,"This method is used to set the method of the request. Following are the allowed values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DELETE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GET")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEAD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OPTIONS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PATCH")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"POST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PUT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TRACE"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n// highlight-next-line\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n')),(0,r.kt)("h2",{id:"username"},(0,r.kt)("inlineCode",{parentName:"h2"},"userName")),(0,r.kt)("p",null,"This method is used to set the user name of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .userName ("wasiq")\n    .password ("123456")\n    .bodyObject (user)\n    .create ();\n')),(0,r.kt)("h2",{id:"password"},(0,r.kt)("inlineCode",{parentName:"h2"},"password")),(0,r.kt)("p",null,"This method is used to set the password of the request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.configKey (API_CONFIG_KEY)\n    .method (POST)\n    .path ("/users")\n    .userName ("wasiq")\n// highlight-next-line\n    .password ("123456")\n    .bodyObject (user)\n    .create ();\n')),(0,r.kt)("h2",{id:"create"},(0,r.kt)("inlineCode",{parentName:"h2"},"create")),(0,r.kt)("p",null,"This method will create ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiRequest")," instance."),(0,r.kt)("admonition",{title:"Important!",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Always end composing the request with ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," method.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'final ApiRequest request = ApiRequest.createRequest ()\n    .configKey ("test_reqres")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n// highlight-next-line\n    .create ();\n')))}d.isMDXComponent=!0}}]);