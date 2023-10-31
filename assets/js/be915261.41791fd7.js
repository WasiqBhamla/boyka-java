"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9620],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(3262),i=(n(79),n(8570));const o={title:"ITextBoxActionsListener",sidebar_position:6},a=void 0,s={unversionedId:"actions/interfaces/listeners/elements/text-box-actions-listeners",id:"actions/interfaces/listeners/elements/text-box-actions-listeners",title:"ITextBoxActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/elements/text-box-actions-listeners.md",sourceDirName:"actions/interfaces/listeners/elements",slug:"/actions/interfaces/listeners/elements/text-box-actions-listeners",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/text-box-actions-listeners",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/elements/text-box-actions-listeners.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1698771901,formattedLastUpdatedAt:"Oct 31, 2023",sidebarPosition:6,frontMatter:{title:"ITextBoxActionsListener",sidebar_position:6},sidebar:"api",previous:{title:"IFingersActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/fingers-actions-listener"},next:{title:"ApiRequest",permalink:"/boyka-framework/api/builders/api-request"}},l={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onEnterText (locator, text)</code>",id:"on-enter-text",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling the textbox related actions, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,i.kt)("h2",{id:"on-enter-text"},(0,i.kt)("inlineCode",{parentName:"h2"},"onEnterText (locator, text)")),(0,i.kt)("p",null,"This method will get executed after entering the provided text in the element located by using the provided element locator."))}u.isMDXComponent=!0}}]);