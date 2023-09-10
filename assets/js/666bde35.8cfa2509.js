"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9479],{8570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(79);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(5907),o=(n(79),n(8570));const a={title:"\ud83d\udee1\ufe0f Branch Protection",sidebar_position:3},i=void 0,l={unversionedId:"project-details/branch-protection",id:"project-details/branch-protection",title:"\ud83d\udee1\ufe0f Branch Protection",description:"Branches",source:"@site/docs/contributing/project-details/branch-protection.md",sourceDirName:"project-details",slug:"/project-details/branch-protection",permalink:"/boyka-framework/contributing/project-details/branch-protection",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/branch-protection.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1694328958,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:3,frontMatter:{title:"\ud83d\udee1\ufe0f Branch Protection",sidebar_position:3},sidebar:"contributing",previous:{title:"\ud83d\udd00 Branching Strategy",permalink:"/boyka-framework/contributing/project-details/branch-strategy"},next:{title:"\u267b\ufe0f GitHub Actions workflows",permalink:"/boyka-framework/contributing/project-details/action-workflows"}},c={},p=[{value:"Branches",id:"branches",level:2},{value:"Protecting <code>develop</code> branch",id:"protecting-develop-branch",level:2},{value:"Exceptions to the above",id:"exceptions-to-the-above",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"branches"},"Branches"),(0,o.kt)("p",null,"We have three branches in our repository:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"main")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"staging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"develop"))),(0,o.kt)("p",null,"Whenever any contributor works on the project, we want to ensure that they are working for an open issue item. Hence, the contributor will create a branch named as ",(0,o.kt)("inlineCode",{parentName:"p"},"issue-<issue-number>"),"."),(0,o.kt)("p",null,"E.g: ",(0,o.kt)("inlineCode",{parentName:"p"},"issue-1")," branch will be created if the GitHub issue number the contributor is working on is ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,o.kt)("h2",{id:"protecting-develop-branch"},"Protecting ",(0,o.kt)("inlineCode",{parentName:"h2"},"develop")," branch"),(0,o.kt)("p",null,"We have following steps to protect the ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branch:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any merge required to be made in ",(0,o.kt)("inlineCode",{parentName:"li"},"develop")," branch, will need a PR to be created from ",(0,o.kt)("inlineCode",{parentName:"li"},"issue-<issue-number>")," branch."),(0,o.kt)("li",{parentName:"ul"},"PR will required approval from any one member of ",(0,o.kt)("inlineCode",{parentName:"li"},"boyka-core")," team. So make sure to add the ",(0,o.kt)("inlineCode",{parentName:"li"},"boyka-core")," team as the reviewer of the PR."),(0,o.kt)("li",{parentName:"ul"},"All the commits in the PR should be ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits"},"GPG signed"),"."),(0,o.kt)("li",{parentName:"ul"},"All PR checks should be green."),(0,o.kt)("li",{parentName:"ul"},"All open review conversations should be resolved.")),(0,o.kt)("h2",{id:"exceptions-to-the-above"},"Exceptions to the above"),(0,o.kt)("p",null,"Members of ",(0,o.kt)("inlineCode",{parentName:"p"},"boyka-core")," team can bypass any of the above mentioned branch protection rules."))}d.isMDXComponent=!0}}]);