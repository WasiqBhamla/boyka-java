"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9407],{167:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(5721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(8533),a=(r(5721),r(167));const i={title:"ApiActions",sidebar_position:1},o=void 0,s={unversionedId:"actions/api/api-actions",id:"actions/api/api-actions",title:"ApiActions",description:"Static methods",source:"@site/docs/api/actions/api/api-actions.md",sourceDirName:"actions/api",slug:"/actions/api/api-actions",permalink:"/boyka-framework/api/actions/api/api-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/api/api-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1676881692,formattedLastUpdatedAt:"Feb 20, 2023",sidebarPosition:1,frontMatter:{title:"ApiActions",sidebar_position:1},sidebar:"api",previous:{title:"Introduction",permalink:"/boyka-framework/api/intro"},next:{title:"AlertActions",permalink:"/boyka-framework/api/actions/drivers/alert-actions"}},p={},c=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withRequest</code>",id:"withrequest",level:3}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"static-methods"},"Static methods"),(0,a.kt)("h3",{id:"withrequest"},(0,a.kt)("inlineCode",{parentName:"h3"},"withRequest")),(0,a.kt)("p",null,"This method takes in ",(0,a.kt)("a",{parentName:"p",href:"/api/builders/api-request"},(0,a.kt)("inlineCode",{parentName:"a"},"ApiRequest"))," instance and returns ",(0,a.kt)("a",{parentName:"p",href:"/api/builders/api-response"},(0,a.kt)("inlineCode",{parentName:"a"},"IApiActions"))," instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"final IApiActions response = ApiManager.withRequest (request);\n")))}u.isMDXComponent=!0}}]);