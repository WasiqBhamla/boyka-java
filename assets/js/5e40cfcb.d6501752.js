"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1897],{9268:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"utils/json-util","title":"JsonUtil","description":"fromFile","source":"@site/docs/api/utils/json-util.md","sourceDirName":"utils","slug":"/utils/json-util","permalink":"/boyka-framework/api/utils/json-util","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/utils/json-util.md","tags":[],"version":"current","lastUpdatedBy":"Mohammad Faisal Khatri","lastUpdatedAt":1735287198000,"sidebarPosition":2,"frontMatter":{"title":"JsonUtil","sidebar_position":2},"sidebar":"api","previous":{"title":"ErrorHandler","permalink":"/boyka-framework/api/utils/error-handler"},"next":{"title":"SettingUtils","permalink":"/boyka-framework/api/utils/settings-util"}}');var o=i(7557),s=i(2887);const r={title:"JsonUtil",sidebar_position:2},a=void 0,l={},c=[{value:"<code>fromFile</code>",id:"fromfile",level:2},{value:"<code>toFile</code>",id:"tofile",level:2},{value:"<code>toString(object)</code>",id:"tostringobject",level:2},{value:"<code>toString(string)</code>",id:"tostringstring",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"fromfile",children:(0,o.jsx)(t.code,{children:"fromFile"})}),"\n",(0,o.jsx)(t.p,{children:"This method is used to parse the given JSON file to Java object."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.utils.JsonParser.fromFile;\n. . .\nUsers users = fromFile ("/path/to/file.json", Users.class);\n'})}),"\n",(0,o.jsx)(t.h2,{id:"tofile",children:(0,o.jsx)(t.code,{children:"toFile"})}),"\n",(0,o.jsx)(t.p,{children:"This method is used to write the given JSON object to the given file."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.utils.JsonParser.toFile;\n. . .\ntoFile (users, "/path/to/file.json");\n'})}),"\n",(0,o.jsx)(t.h2,{id:"tostringobject",children:(0,o.jsx)(t.code,{children:"toString(object)"})}),"\n",(0,o.jsx)(t.p,{children:"This method is used to convert the given object to JSON string."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.utils.JsonParser.toString;\n. . .\nSystem.out.println (toString (users));\n"})}),"\n",(0,o.jsx)(t.h2,{id:"tostringstring",children:(0,o.jsx)(t.code,{children:"toString(string)"})}),"\n",(0,o.jsx)(t.p,{children:"This method is used to pretty-print the given JSON string."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.utils.JsonParser.toString;\n. . .\nString jsonString = "{\\"name\\":\\"Wasiq\\",\\"age\\":25}";\nSystem.out.println (toString (jsonString));\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2887:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(8225);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);