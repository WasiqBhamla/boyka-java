"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9980],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8240:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(3262),i=(n(79),n(8570));const o={title:"IContextActionsListener",sidebar_position:2},a=void 0,c={unversionedId:"actions/interfaces/listeners/drivers/context-actions-listener",id:"actions/interfaces/listeners/drivers/context-actions-listener",title:"IContextActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/drivers/context-actions-listener.md",sourceDirName:"actions/interfaces/listeners/drivers",slug:"/actions/interfaces/listeners/drivers/context-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/context-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/drivers/context-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698595732,formattedLastUpdatedAt:"Oct 29, 2023",sidebarPosition:2,frontMatter:{title:"IContextActionsListener",sidebar_position:2},sidebar:"api",previous:{title:"IAlertActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/alert-actions-listener"},next:{title:"ICookieActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/cookie-actions-listener"}},s={},l=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onContexts</code>",id:"on-contexts",level:2},{value:"<code>onCurrentContext</code>",id:"on-current-context",level:2},{value:"<code>onSwitchToNative</code>",id:"on-switch-to-native",level:2},{value:"<code>onSwitchToWebView (name)</code>",id:"on-switch-to-web-view-name",level:2},{value:"<code>onSwitchToWebView</code>",id:"on-switch-to-web-view",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling Mobile contexts, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,i.kt)("h2",{id:"on-contexts"},(0,i.kt)("inlineCode",{parentName:"h2"},"onContexts")),(0,i.kt)("p",null,"This method will get executed after getting all the available contexts."),(0,i.kt)("h2",{id:"on-current-context"},(0,i.kt)("inlineCode",{parentName:"h2"},"onCurrentContext")),(0,i.kt)("p",null,"This method will get executed after getting the current context."),(0,i.kt)("h2",{id:"on-switch-to-native"},(0,i.kt)("inlineCode",{parentName:"h2"},"onSwitchToNative")),(0,i.kt)("p",null,"This method will get executed after switching to native context."),(0,i.kt)("h2",{id:"on-switch-to-web-view-name"},(0,i.kt)("inlineCode",{parentName:"h2"},"onSwitchToWebView (name)")),(0,i.kt)("p",null,"This method will get executed after switching to web view context by its provided name."),(0,i.kt)("h2",{id:"on-switch-to-web-view"},(0,i.kt)("inlineCode",{parentName:"h2"},"onSwitchToWebView")),(0,i.kt)("p",null,"This method will get executed after switching to the default web view context."))}u.isMDXComponent=!0}}]);