"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7232],{167:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(5721);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=i,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(8533),i=(r(5721),r(167));const a={title:"StringUtils",sidebar_position:4},o=void 0,l={unversionedId:"utils/string-utils",id:"utils/string-utils",title:"StringUtils",description:"interpolate",source:"@site/docs/api/utils/string-utils.md",sourceDirName:"utils",slug:"/utils/string-utils",permalink:"/boyka-framework/api/utils/string-utils",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/utils/string-utils.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1669213605,formattedLastUpdatedAt:"Nov 23, 2022",sidebarPosition:4,frontMatter:{title:"StringUtils",sidebar_position:4},sidebar:"api",previous:{title:"SettingUtils",permalink:"/boyka-framework/api/utils/settings-util"}},s={},p=[{value:"<code>interpolate</code>",id:"interpolate",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interpolate"},(0,i.kt)("inlineCode",{parentName:"h2"},"interpolate")),(0,i.kt)("p",null,"This method is used to interpolate the given string with the given values or with environment variables / system properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.utils.StringUtils.interpolate;\n. . .\nSystem.out.println (interpolate ("${env:USER_NAME}"));\n\n. . . OR . . .\n\nMap<String, String> values = new HashMap<> ();\nvalues.put ("USER_NAME", "wasiq");\n\nSystem.out.println (interpolate ("${USER_NAME}", values));\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can explore all the available formats for interpolation in Web configuration ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/configuration#web-config"},(0,i.kt)("inlineCode",{parentName:"a"},"info")," section"),".")))}c.isMDXComponent=!0}}]);