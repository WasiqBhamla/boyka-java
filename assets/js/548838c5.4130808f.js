"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7232],{4564:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=i(5250),s=i(3281);const o={title:"StringUtils",sidebar_position:4},r=void 0,a={id:"utils/string-utils",title:"StringUtils",description:"interpolate",source:"@site/docs/api/utils/string-utils.md",sourceDirName:"utils",slug:"/utils/string-utils",permalink:"/boyka-framework/api/utils/string-utils",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/utils/string-utils.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1704357797,formattedLastUpdatedAt:"Jan 4, 2024",sidebarPosition:4,frontMatter:{title:"StringUtils",sidebar_position:4},sidebar:"api",previous:{title:"SettingUtils",permalink:"/boyka-framework/api/utils/settings-util"}},l={},c=[{value:"<code>interpolate</code>",id:"interpolate",level:2}];function d(t){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"interpolate",children:(0,n.jsx)(e.code,{children:"interpolate"})}),"\n",(0,n.jsx)(e.p,{children:"This method is used to interpolate the given string with the given values or with environment variables / system properties."}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.utils.StringUtils.interpolate;\n. . .\nSystem.out.println (interpolate ("${env:USER_NAME}"));\n\n. . . OR . . .\n\nMap<String, String> values = new HashMap<> ();\nvalues.put ("USER_NAME", "wasiq");\n\nSystem.out.println (interpolate ("${USER_NAME}", values));\n'})}),"\n",(0,n.jsx)(e.admonition,{type:"tip",children:(0,n.jsxs)(e.p,{children:["You can explore all the available formats for interpolation in Web configuration ",(0,n.jsxs)(e.a,{href:"/docs/guides/configuration#web-config",children:[(0,n.jsx)(e.code,{children:"info"})," section"]}),"."]})})]})}function p(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}},3281:(t,e,i)=>{i.d(e,{Z:()=>a,a:()=>r});var n=i(79);const s={},o=n.createContext(s);function r(t){const e=n.useContext(o);return n.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),n.createElement(o.Provider,{value:e},t.children)}}}]);