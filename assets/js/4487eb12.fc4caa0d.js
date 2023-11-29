"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7215],{92:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>o,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var s=t(5250),r=t(9040);const d={title:"ApiRequest",sidebar_position:1},a=void 0,i={id:"builders/api-request",title:"ApiRequest",description:"createRequest",source:"@site/docs/api/builders/api-request.md",sourceDirName:"builders",slug:"/builders/api-request",permalink:"/boyka-framework/api/builders/api-request",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/builders/api-request.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1701256680,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:1,frontMatter:{title:"ApiRequest",sidebar_position:1},sidebar:"api",previous:{title:"ITextBoxActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/text-box-actions-listeners"},next:{title:"ApiResponse",permalink:"/boyka-framework/api/builders/api-response"}},c={},h=[{value:"<code>createRequest</code>",id:"createrequest",level:2},{value:"<code>contentType</code>",id:"contenttype",level:2},{value:"<code>header</code>",id:"header",level:2},{value:"<code>path</code>",id:"path",level:2},{value:"<code>pathParam</code>",id:"pathparam",level:2},{value:"<code>queryParam</code>",id:"queryparam",level:2},{value:"<code>body</code>",id:"body",level:2},{value:"<code>bodyObject</code>",id:"bodyobject",level:2},{value:"<code>formBody</code>",id:"formbody",level:2},{value:"<code>method</code>",id:"method",level:2},{value:"<code>userName</code>",id:"username",level:2},{value:"<code>password</code>",id:"password",level:2},{value:"<code>create</code>",id:"create",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"createrequest",children:(0,s.jsx)(n.code,{children:"createRequest"})}),"\n",(0,s.jsxs)(n.p,{children:["This is a builder method to build ",(0,s.jsx)(n.code,{children:"ApiRequest"})," instance."]}),"\n",(0,s.jsx)(n.admonition,{title:"Important!",type:"caution",children:(0,s.jsxs)(n.p,{children:["Always start composing the request with ",(0,s.jsx)(n.code,{children:"createRequest"})," method."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// highlight-next-line\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"contenttype",children:(0,s.jsx)(n.code,{children:"contentType"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the content type of the request. Allowed values are:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"FORM_URLENCODED"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JSON"})," (",(0,s.jsx)(n.strong,{children:"default"}),")"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"MULTIPART_FORM_DATA"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PLAIN_TEXT"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n// highlight-next-line\n    .contentType (ContentType.JSON)\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"header",children:(0,s.jsx)(n.code,{children:"header"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the header of the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .contentType (ContentType.JSON)\n// highlight-start\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n// highlight-end\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"path",children:(0,s.jsx)(n.code,{children:"path"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the path of the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n// highlight-next-line\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"pathparam",children:(0,s.jsx)(n.code,{children:"pathParam"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the path parameter(s) of the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n    .path ("/users/${userId}")\n// highlight-next-line\n    .pathParam ("userId", "2")\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"queryparam",children:(0,s.jsx)(n.code,{children:"queryParam"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the query parameter(s) of the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .contentType (ContentType.JSON)\n    .header ("Header-Key-1", "Header value 1")\n    .header ("Header-Key-2", "Header value 2")\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n// highlight-next-line\n    .queryParam ("param1", "value1")\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"body",children:(0,s.jsx)(n.code,{children:"body"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the body of the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .body ("{\\"name\\":\\"John\\",\\"job\\":\\"Developer\\"}")\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"bodyobject",children:(0,s.jsx)(n.code,{children:"bodyObject"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the body of the request using Java object."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final User user = User.createUser ()\n    .name ("Wasiq")\n    .job ("Software Engineer")\n    .create ();\n\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .bodyObject (user)\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"formbody",children:(0,s.jsx)(n.code,{children:"formBody"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the Form body of the request using key and value pairs."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n// highlight-start\n    .formBody ("strange", "boom")\n    .formBody ("test", "abc")\n// highlight-end\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"method",children:(0,s.jsx)(n.code,{children:"method"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the method of the request. Following are the allowed values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"DELETE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"GET"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"HEAD"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"OPTIONS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PATCH"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"POST"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PUT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TRACE"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'// highlight-next-line\nfinal ApiRequest request = ApiRequest.createRequest ()\n    .method (RequestMethod.POST)\n    .path ("/users")\n    .bodyObject (user)\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"username",children:(0,s.jsx)(n.code,{children:"userName"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the user name of the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n// highlight-next-line\n    .userName ("wasiq")\n    .password ("123456")\n    .bodyObject (user)\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"password",children:(0,s.jsx)(n.code,{children:"password"})}),"\n",(0,s.jsx)(n.p,{children:"This method is used to set the password of the request."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .method (POST)\n    .path ("/users")\n    .userName ("wasiq")\n// highlight-next-line\n    .password ("123456")\n    .bodyObject (user)\n    .create ();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"create",children:(0,s.jsx)(n.code,{children:"create"})}),"\n",(0,s.jsxs)(n.p,{children:["This method will create ",(0,s.jsx)(n.code,{children:"ApiRequest"})," instance."]}),"\n",(0,s.jsx)(n.admonition,{title:"Important!",type:"caution",children:(0,s.jsxs)(n.p,{children:["Always end composing the request with ",(0,s.jsx)(n.code,{children:"create"})," method."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'final ApiRequest request = ApiRequest.createRequest ()\n    .method (GET)\n    .path ("/users/${userId}")\n    .pathParam ("userId", "2")\n// highlight-next-line\n    .create ();\n'})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9040:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var s=t(79);const r={},d=s.createContext(r);function a(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);