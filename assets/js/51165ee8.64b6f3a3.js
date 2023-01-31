"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9225],{167:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var s=t(5721);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=s.createContext({}),c=function(e){var r=s.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return s.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?s.createElement(f,i(i({ref:r},p),{},{components:t})):s.createElement(f,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<a;c++)i[c]=t[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8641:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(8533),n=(t(5721),t(167));const a={title:"ParallelSession",sidebar_position:2,slug:"/sessions/parallel-session"},i=void 0,o={unversionedId:"sessions/parallel-session",id:"sessions/parallel-session",title:"ParallelSession",description:"clearSession",source:"@site/docs/api/sessions/parallel-session.md",sourceDirName:"sessions",slug:"/sessions/parallel-session",permalink:"/boyka-framework/api/sessions/parallel-session",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/sessions/parallel-session.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1675178668,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:2,frontMatter:{title:"ParallelSession",sidebar_position:2,slug:"/sessions/parallel-session"},sidebar:"api",previous:{title:"DriverSession",permalink:"/boyka-framework/api/sessions/driver-session"},next:{title:"ErrorHandler",permalink:"/boyka-framework/api/utils/error-handler"}},l={},c=[{value:"<code>clearSession</code>",id:"clear-session",level:2},{value:"<code>getSession</code>",id:"get-session",level:2},{value:"<code>setDriver (driver)</code>",id:"set-driver",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"clear-session"},(0,n.kt)("inlineCode",{parentName:"h2"},"clearSession")),(0,n.kt)("p",null,"This method clears the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.sessions.ParallelSession.clearSession;\n. . .\nclearSession ();\n")),(0,n.kt)("h2",{id:"get-session"},(0,n.kt)("inlineCode",{parentName:"h2"},"getSession")),(0,n.kt)("p",null,"This method gets the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.sessions.ParallelSession.getSession;\n. . .\nvar session = getSession ();\n")),(0,n.kt)("h2",{id:"set-driver"},(0,n.kt)("inlineCode",{parentName:"h2"},"setDriver (driver)")),(0,n.kt)("p",null,"This method sets the ",(0,n.kt)("inlineCode",{parentName:"p"},"WebDriver")," instance for the session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.sessions.ParallelSession.setDriver;\n. . .\nsetDriver (new ChromeDriver (url, capabilities));\n")))}u.isMDXComponent=!0}}]);