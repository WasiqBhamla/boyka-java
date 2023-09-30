"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9980],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(f,a(a({ref:t},d),{},{components:n})):i.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(3262),r=(n(79),n(8570));const o={title:"IContextActionsListener",sidebar_position:2},a=void 0,s={unversionedId:"actions/interfaces/listeners/drivers/context-actions-listener",id:"actions/interfaces/listeners/drivers/context-actions-listener",title:"IContextActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/drivers/context-actions-listener.md",sourceDirName:"actions/interfaces/listeners/drivers",slug:"/actions/interfaces/listeners/drivers/context-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/context-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/drivers/context-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1696064158,formattedLastUpdatedAt:"Sep 30, 2023",sidebarPosition:2,frontMatter:{title:"IContextActionsListener",sidebar_position:2},sidebar:"api",previous:{title:"IAlertActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/alert-actions-listener"},next:{title:"ICookieActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/cookie-actions-listener"}},c={},l=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onContexts</code>",id:"on-contexts",level:2},{value:"<code>onCurrentContext</code>",id:"on-current-context",level:2},{value:"<code>onSwitchToNative</code>",id:"on-switch-to-native",level:2},{value:"<code>onSwitchToWebView (name)</code>",id:"on-switch-to-web-view-name",level:2},{value:"<code>onSwitchToWebView</code>",id:"on-switch-to-web-view",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling Mobile contexts, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,r.kt)("h2",{id:"on-contexts"},(0,r.kt)("inlineCode",{parentName:"h2"},"onContexts")),(0,r.kt)("p",null,"This method will get executed after getting all the available contexts."),(0,r.kt)("h2",{id:"on-current-context"},(0,r.kt)("inlineCode",{parentName:"h2"},"onCurrentContext")),(0,r.kt)("p",null,"This method will get executed after getting the current context."),(0,r.kt)("h2",{id:"on-switch-to-native"},(0,r.kt)("inlineCode",{parentName:"h2"},"onSwitchToNative")),(0,r.kt)("p",null,"This method will get executed after switching to native context."),(0,r.kt)("h2",{id:"on-switch-to-web-view-name"},(0,r.kt)("inlineCode",{parentName:"h2"},"onSwitchToWebView (name)")),(0,r.kt)("p",null,"This method will get executed after switching to web view context by its provided name."),(0,r.kt)("h2",{id:"on-switch-to-web-view"},(0,r.kt)("inlineCode",{parentName:"h2"},"onSwitchToWebView")),(0,r.kt)("p",null,"This method will get executed after switching to the default web view context."))}u.isMDXComponent=!0}}]);