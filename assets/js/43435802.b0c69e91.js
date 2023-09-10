"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9778],{8570:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(79);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7155:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(5907),a=(t(79),t(8570));const o={title:"ErrorHandler",sidebar_position:1},i=void 0,l={unversionedId:"utils/error-handler",id:"utils/error-handler",title:"ErrorHandler",description:"handleAndThrow",source:"@site/docs/api/utils/error-handler.md",sourceDirName:"utils",slug:"/utils/error-handler",permalink:"/boyka-framework/api/utils/error-handler",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/utils/error-handler.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1694328958,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:1,frontMatter:{title:"ErrorHandler",sidebar_position:1},sidebar:"api",previous:{title:"ParallelSession",permalink:"/boyka-framework/api/sessions/parallel-session"},next:{title:"JsonUtil",permalink:"/boyka-framework/api/utils/json-util"}},s={},c=[{value:"<code>handleAndThrow</code>",id:"handleandthrow",level:2}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"handleandthrow"},(0,a.kt)("inlineCode",{parentName:"h2"},"handleAndThrow")),(0,a.kt)("p",null,"This method is used to handle errors, logs the framework specific stack traces and throw the wrapped framework error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.utils.ErrorHandler.handleAndThrow;\nimport static com.github.wasiqb.boyka.enums.Message.ERROR_PARSING_RESPONSE_BODY;\n. . .\ntry {\n    . . .\n} catch (IOException e) {\n    handleAndThrow (ERROR_PARSING_RESPONSE_BODY, e);\n}\n. . .\n")))}u.isMDXComponent=!0}}]);