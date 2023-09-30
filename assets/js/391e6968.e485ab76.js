"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5437],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(79);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(3262),o=(n(79),n(8570));const r={title:"\ud83d\udc84 Coding style",sidebar_position:5},a=void 0,l={unversionedId:"project-details/coding-style",id:"project-details/coding-style",title:"\ud83d\udc84 Coding style",description:"Java coding style",source:"@site/docs/contributing/project-details/coding-style.md",sourceDirName:"project-details",slug:"/project-details/coding-style",permalink:"/boyka-framework/contributing/project-details/coding-style",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/coding-style.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696090102,formattedLastUpdatedAt:"Sep 30, 2023",sidebarPosition:5,frontMatter:{title:"\ud83d\udc84 Coding style",sidebar_position:5},sidebar:"contributing",previous:{title:"\u267b\ufe0f GitHub Actions workflows",permalink:"/boyka-framework/contributing/project-details/action-workflows"},next:{title:"\ud83d\udce9 Commit steps",permalink:"/boyka-framework/contributing/project-details/commit-steps"}},s={},c=[{value:"Java coding style",id:"java-coding-style",level:2},{value:"IntelliJ IDEA Code style setup",id:"intellij-idea-code-style-setup",level:3},{value:"Save Action plugin settings",id:"save-action-plugin-settings",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"java-coding-style"},"Java coding style"),(0,o.kt)("h3",{id:"intellij-idea-code-style-setup"},"IntelliJ IDEA Code style setup"),(0,o.kt)("p",null,"We have defined a common coding style which we follow while writing Java code. The defined code formatter can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"core-java/code-formatter")," directory. You need to import the formatter from the mentioned directory in your IntelliJ IDEA properties."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IntelliJ IDEA",src:n(1430).Z,width:"1962",height:"1428"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open IntelliJ IDEA preferences window, go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Editor")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"Code Style")," and click on 3 dots."),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("inlineCode",{parentName:"li"},"Import Schema")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"IntelliJ IDEA code style XML")," from the options and select the ",(0,o.kt)("inlineCode",{parentName:"li"},"boyka-formatter.xml")," file from the path mentioned above."),(0,o.kt)("li",{parentName:"ol"},"Now click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Apply")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"OK")," buttons.")),(0,o.kt)("h3",{id:"save-action-plugin-settings"},"Save Action plugin settings"),(0,o.kt)("p",null,"In your IntelliJ IDEA, add ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Actions")," plugin to your project. This plugin is used to format code files on save when working on the Java project."),(0,o.kt)("p",null,"To configure the plugin, open IntelliJ IDEA preferences window and expand ",(0,o.kt)("inlineCode",{parentName:"p"},"Other Settings")," and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Save Actions"),"."),(0,o.kt)("p",null,"A window similar to the following will be displayed, select all the options demonstrated here in the following screenshots."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save Actions First page",src:n(4790).Z,width:"2176",height:"1648"})),(0,o.kt)("p",null,"Now after scrolling, select the following options shown in this screenshot."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save Actions First page",src:n(9105).Z,width:"2176",height:"1648"})),(0,o.kt)("p",null,"Now click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Apply")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OK")," buttons."))}u.isMDXComponent=!0},1430:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/intellij-preferences-ff31ca8329657c7d56fbd0b0c6411dfc.png"},4790:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/save-action-1-c8f9b1ef075a05bd71dfbaf018f3efbe.png"},9105:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/save-action-2-52ada9a72565e2ada9791b964b7c48d7.png"}}]);