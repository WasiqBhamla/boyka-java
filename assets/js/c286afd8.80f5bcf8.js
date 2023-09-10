"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6653],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,g=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(5907),i=(n(79),n(8570));const o={title:"\u2328\ufe0f Suggested IDE",sidebar_position:1},a=void 0,l={unversionedId:"machine-setup/suggested-ide",id:"machine-setup/suggested-ide",title:"\u2328\ufe0f Suggested IDE",description:"To effectively contribute to the Boyka-framework, we suggest using the following IDEs:",source:"@site/docs/contributing/machine-setup/suggested-ide.md",sourceDirName:"machine-setup",slug:"/machine-setup/suggested-ide",permalink:"/boyka-framework/contributing/machine-setup/suggested-ide",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/machine-setup/suggested-ide.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1694328958,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:1,frontMatter:{title:"\u2328\ufe0f Suggested IDE",sidebar_position:1},sidebar:"contributing",previous:{title:"\ud83d\udc4b Welcome!",permalink:"/boyka-framework/contributing/welcome"},next:{title:"\ud83c\udfd7\ufe0f Building the project",permalink:"/boyka-framework/contributing/machine-setup/build-project"}},u={},s=[{value:"IntelliJ IDEA CE",id:"intellij-idea-ce",level:2},{value:"Required plugins",id:"required-intellij-plugins",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:2},{value:"Required plugins",id:"required-vscode-plugins",level:3}],d={toc:s},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To effectively contribute to the Boyka-framework, we suggest using the following IDEs:"),(0,i.kt)("h2",{id:"intellij-idea-ce"},"IntelliJ IDEA CE"),(0,i.kt)("p",null,"You can download this IDE from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/download/#download"},"IntelliJ IDEA CE download page"),"."),(0,i.kt)("h3",{id:"required-intellij-plugins"},"Required plugins"),(0,i.kt)("p",null,"Search and install following plugins from extensions page:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Save Actions"),(0,i.kt)("li",{parentName:"ul"},"SonarLint")),(0,i.kt)("h2",{id:"visual-studio-code"},"Visual Studio Code"),(0,i.kt)("p",null,"You can download this IDE from the ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code download page"),"."),(0,i.kt)("h3",{id:"required-vscode-plugins"},"Required plugins"),(0,i.kt)("p",null,"Search and install following plugins from extensions page:"),(0,i.kt)("p",null,"Following extensions are recommended as must have for contributing to this project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conventional Commits"),(0,i.kt)("li",{parentName:"ul"},"ESLint"),(0,i.kt)("li",{parentName:"ul"},"Node Essentials"),(0,i.kt)("li",{parentName:"ul"},"Prettier"),(0,i.kt)("li",{parentName:"ul"},"SonarLint")),(0,i.kt)("p",null,"Following extensions are optional and good to have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gitpod"),(0,i.kt)("li",{parentName:"ul"},"Gitpod Remote")))}c.isMDXComponent=!0}}]);