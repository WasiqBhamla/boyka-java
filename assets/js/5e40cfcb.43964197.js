"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2e3],{5394:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(5250),s=i(3281);const o={title:"JsonUtil",sidebar_position:2},r=void 0,a={id:"utils/json-util",title:"JsonUtil",description:"fromFile",source:"@site/docs/api/utils/json-util.md",sourceDirName:"utils",slug:"/utils/json-util",permalink:"/boyka-framework/api/utils/json-util",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/utils/json-util.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1704357797,formattedLastUpdatedAt:"Jan 4, 2024",sidebarPosition:2,frontMatter:{title:"JsonUtil",sidebar_position:2},sidebar:"api",previous:{title:"ErrorHandler",permalink:"/boyka-framework/api/utils/error-handler"},next:{title:"SettingUtils",permalink:"/boyka-framework/api/utils/settings-util"}},l={},c=[{value:"<code>fromFile</code>",id:"fromfile",level:2},{value:"<code>toFile</code>",id:"tofile",level:2},{value:"<code>toString(object)</code>",id:"tostringobject",level:2},{value:"<code>toString(string)</code>",id:"tostringstring",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"fromfile",children:(0,n.jsx)(t.code,{children:"fromFile"})}),"\n",(0,n.jsx)(t.p,{children:"This method is used to parse the given JSON file to Java object."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.utils.JsonParser.fromFile;\n. . .\nUsers users = fromFile ("/path/to/file.json", Users.class);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"tofile",children:(0,n.jsx)(t.code,{children:"toFile"})}),"\n",(0,n.jsx)(t.p,{children:"This method is used to write the given JSON object to the given file."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.utils.JsonParser.toFile;\n. . .\ntoFile (users, "/path/to/file.json");\n'})}),"\n",(0,n.jsx)(t.h2,{id:"tostringobject",children:(0,n.jsx)(t.code,{children:"toString(object)"})}),"\n",(0,n.jsx)(t.p,{children:"This method is used to convert the given object to JSON string."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.utils.JsonParser.toString;\n. . .\nSystem.out.println (toString (users));\n"})}),"\n",(0,n.jsx)(t.h2,{id:"tostringstring",children:(0,n.jsx)(t.code,{children:"toString(string)"})}),"\n",(0,n.jsx)(t.p,{children:"This method is used to pretty-print the given JSON string."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.utils.JsonParser.toString;\n. . .\nString jsonString = "{\\"name\\":\\"Wasiq\\",\\"age\\":25}";\nSystem.out.println (toString (jsonString));\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},3281:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(79);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);