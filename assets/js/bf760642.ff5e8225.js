"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8405],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(79);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=o,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(3262),o=(n(79),n(8570));const i={title:"ICookieActionsListener",sidebar_position:3},a=void 0,s={unversionedId:"actions/interfaces/listeners/drivers/cookie-actions-listener",id:"actions/interfaces/listeners/drivers/cookie-actions-listener",title:"ICookieActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/drivers/cookie-actions-listener.md",sourceDirName:"actions/interfaces/listeners/drivers",slug:"/actions/interfaces/listeners/drivers/cookie-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/cookie-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/drivers/cookie-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696145763,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:3,frontMatter:{title:"ICookieActionsListener",sidebar_position:3},sidebar:"api",previous:{title:"IContextActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/context-actions-listener"},next:{title:"IDriverActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/driver-actions-listener"}},l={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onCookie (name)</code>",id:"on-cookie",level:2},{value:"<code>onCookies</code>",id:"on-cookies",level:2},{value:"<code>onDelete (name)</code>",id:"on-delete",level:2},{value:"<code>onDeleteAll</code>",id:"on-delete-all",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling Web cookies, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,o.kt)("h2",{id:"on-cookie"},(0,o.kt)("inlineCode",{parentName:"h2"},"onCookie (name)")),(0,o.kt)("p",null,"This method will get executed after getting the cookie by its name."),(0,o.kt)("h2",{id:"on-cookies"},(0,o.kt)("inlineCode",{parentName:"h2"},"onCookies")),(0,o.kt)("p",null,"This method will get executed after getting all the cookies."),(0,o.kt)("h2",{id:"on-delete"},(0,o.kt)("inlineCode",{parentName:"h2"},"onDelete (name)")),(0,o.kt)("p",null,"This method will get executed after deleting the cookie by its name."),(0,o.kt)("h2",{id:"on-delete-all"},(0,o.kt)("inlineCode",{parentName:"h2"},"onDeleteAll")),(0,o.kt)("p",null,"This method will get executed after deleting all the cookies."))}m.isMDXComponent=!0}}]);