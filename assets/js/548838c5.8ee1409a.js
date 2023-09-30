"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7232],{8570:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(3262),i=(n(79),n(8570));const a={title:"StringUtils",sidebar_position:4},o=void 0,l={unversionedId:"utils/string-utils",id:"utils/string-utils",title:"StringUtils",description:"interpolate",source:"@site/docs/api/utils/string-utils.md",sourceDirName:"utils",slug:"/utils/string-utils",permalink:"/boyka-framework/api/utils/string-utils",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/utils/string-utils.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696090102,formattedLastUpdatedAt:"Sep 30, 2023",sidebarPosition:4,frontMatter:{title:"StringUtils",sidebar_position:4},sidebar:"api",previous:{title:"SettingUtils",permalink:"/boyka-framework/api/utils/settings-util"}},s={},p=[{value:"<code>interpolate</code>",id:"interpolate",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"interpolate"},(0,i.kt)("inlineCode",{parentName:"h2"},"interpolate")),(0,i.kt)("p",null,"This method is used to interpolate the given string with the given values or with environment variables / system properties."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.utils.StringUtils.interpolate;\n. . .\nSystem.out.println (interpolate ("${env:USER_NAME}"));\n\n. . . OR . . .\n\nMap<String, String> values = new HashMap<> ();\nvalues.put ("USER_NAME", "wasiq");\n\nSystem.out.println (interpolate ("${USER_NAME}", values));\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can explore all the available formats for interpolation in Web configuration ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/configuration#web-config"},(0,i.kt)("inlineCode",{parentName:"a"},"info")," section"),".")))}d.isMDXComponent=!0}}]);