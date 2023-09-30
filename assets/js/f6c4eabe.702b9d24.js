"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8307],{8570:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(79);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,u=p["".concat(l,".").concat(m)]||p[m]||g[m]||s;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(3262),n=(a(79),a(8570));const s={title:"DriverSession",sidebar_position:1,slug:"/sessions/driver-session"},i=void 0,o={unversionedId:"manager/driver-session",id:"manager/driver-session",title:"DriverSession",description:"clearListeners",source:"@site/docs/api/manager/driver-session.md",sourceDirName:"manager",slug:"/sessions/driver-session",permalink:"/boyka-framework/api/sessions/driver-session",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/manager/driver-session.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696090102,formattedLastUpdatedAt:"Sep 30, 2023",sidebarPosition:1,frontMatter:{title:"DriverSession",sidebar_position:1,slug:"/sessions/driver-session"},sidebar:"api",previous:{title:"Locator",permalink:"/boyka-framework/api/builders/locator"},next:{title:"ParallelSession",permalink:"/boyka-framework/api/sessions/parallel-session"}},l={},d=[{value:"<code>clearListeners</code>",id:"clear-listeners",level:2},{value:"<code>clearSharedData</code>",id:"clear-shared-data",level:2},{value:"<code>getApiSetting</code>",id:"get-api-setting",level:2},{value:"<code>getListener (listenerType)</code>",id:"get-listener",level:2},{value:"<code>getMobileSetting</code>",id:"get-mobile-setting",level:2},{value:"<code>getSharedData (key)</code>",id:"get-shared-data",level:2},{value:"<code>getWebSetting</code>",id:"get-web-setting",level:2},{value:"<code>removeSharedData (key)</code>",id:"remove-shared-data",level:2},{value:"<code>setSharedData (key, value)</code>",id:"set-shared-data",level:2}],c={toc:d},p="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"clear-listeners"},(0,n.kt)("inlineCode",{parentName:"h2"},"clearListeners")),(0,n.kt)("p",null,"This method will clear all the listeners for the session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\ngetSession ().clearListeners ();\n")),(0,n.kt)("h2",{id:"clear-shared-data"},(0,n.kt)("inlineCode",{parentName:"h2"},"clearSharedData")),(0,n.kt)("p",null,"This method will clear all the shared data for the session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\ngetSession ().clearSharedData ();\n")),(0,n.kt)("h2",{id:"get-api-setting"},(0,n.kt)("inlineCode",{parentName:"h2"},"getApiSetting")),(0,n.kt)("p",null,"This method gets the API settings for the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar apiSetting = getSession ().getApiSetting ();\n")),(0,n.kt)("h2",{id:"get-listener"},(0,n.kt)("inlineCode",{parentName:"h2"},"getListener (listenerType)")),(0,n.kt)("p",null,"This method gets the Boyka listener for the given listener type."),(0,n.kt)("admonition",{title:"Important!!",type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"This method is for internal use only.")),(0,n.kt)("h2",{id:"get-mobile-setting"},(0,n.kt)("inlineCode",{parentName:"h2"},"getMobileSetting")),(0,n.kt)("p",null,"This method gets the Mobile settings for the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar mobileSetting = getSession ().getMobileSetting ();\n")),(0,n.kt)("h2",{id:"get-shared-data"},(0,n.kt)("inlineCode",{parentName:"h2"},"getSharedData (key)")),(0,n.kt)("p",null,"This method gets the shared data for the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar mobileSetting = getSession ().getSharedData ("sample.key");\n')),(0,n.kt)("h2",{id:"get-web-setting"},(0,n.kt)("inlineCode",{parentName:"h2"},"getWebSetting")),(0,n.kt)("p",null,"This method gets the Web settings for the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar webSetting = getSession ().getWebSetting ();\n")),(0,n.kt)("h2",{id:"remove-shared-data"},(0,n.kt)("inlineCode",{parentName:"h2"},"removeSharedData (key)")),(0,n.kt)("p",null,"This method removes the shared data for a particular key for the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar value = getSession ().removeSharedData ("some.key");\n')),(0,n.kt)("h2",{id:"set-shared-data"},(0,n.kt)("inlineCode",{parentName:"h2"},"setSharedData (key, value)")),(0,n.kt)("p",null,"This method sets the shared data for a particular key for the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\ngetSession ().setSharedData ("some.key", "some value");\n')))}g.isMDXComponent=!0}}]);