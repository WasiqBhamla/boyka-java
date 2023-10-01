"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8209],{8570:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(79);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4669:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(3262),a=(r(79),r(8570));const i={title:"\ud83d\udd00 Branching Strategy",sidebar_position:2},l=void 0,o={unversionedId:"project-details/branch-strategy",id:"project-details/branch-strategy",title:"\ud83d\udd00 Branching Strategy",description:"Branching strategy",source:"@site/docs/contributing/project-details/branch-strategy.md",sourceDirName:"project-details",slug:"/project-details/branch-strategy",permalink:"/boyka-framework/contributing/project-details/branch-strategy",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/branch-strategy.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1696154866,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:2,frontMatter:{title:"\ud83d\udd00 Branching Strategy",sidebar_position:2},sidebar:"contributing",previous:{title:"\ud83d\udcda Project Structure",permalink:"/boyka-framework/contributing/project-details/structure"},next:{title:"\ud83d\udee1\ufe0f Branch Protection",permalink:"/boyka-framework/contributing/project-details/branch-protection"}},s={},c=[{value:"\ud83d\udc68\u200d\ud83c\udfed Contributor steps",id:"-contributor-steps",level:2},{value:"\ud83e\uddd1\u200d\ud83d\udcbc Maintainer steps",id:"-maintainer-steps",level:2},{value:"\ud83d\udd22 Versioning process",id:"-versioning-process",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Branching strategy",src:r(9728).Z,width:"961",height:"692"})),(0,a.kt)("h2",{id:"-contributor-steps"},"\ud83d\udc68\u200d\ud83c\udfed Contributor steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All contributors should create a branch named as ",(0,a.kt)("inlineCode",{parentName:"li"},"issue-<issue-number>")),(0,a.kt)("li",{parentName:"ul"},"Once the contributor is done with the work, they should create the PR to merge their branch to ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," branch")),(0,a.kt)("h2",{id:"-maintainer-steps"},"\ud83e\uddd1\u200d\ud83d\udcbc Maintainer steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maintainers will review the PR raised by contributors and approve / suggest changes in it"),(0,a.kt)("li",{parentName:"ul"},"Once everything is fine, maintainers will squash merge the PR to ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," branch"),(0,a.kt)("li",{parentName:"ul"},"Maintainers will decide when to release a new version"),(0,a.kt)("li",{parentName:"ul"},"Whenever a new version is planned to be released, maintainers will trigger the ",(0,a.kt)("inlineCode",{parentName:"li"},"release")," workflow and mark the release as a generally available release or a ",(0,a.kt)("inlineCode",{parentName:"li"},"beta")," release")),(0,a.kt)("h2",{id:"-versioning-process"},"\ud83d\udd22 Versioning process"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We follow ",(0,a.kt)("a",{parentName:"li",href:"https://semver.org/"},"SemVer")," versioning strategy"),(0,a.kt)("li",{parentName:"ul"},"We follow ",(0,a.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Convention Commit")," Commit message formatting"),(0,a.kt)("li",{parentName:"ul"},"Currently, we are still in early stage of the framework where it's still not considered stable, hence our version is in ",(0,a.kt)("inlineCode",{parentName:"li"},"0.x.x")," format"),(0,a.kt)("li",{parentName:"ul"},"Version for a new release is automatically identified based on the commit messages",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If there are bug fixes, ",(0,a.kt)("inlineCode",{parentName:"li"},"patch")," version will be released"),(0,a.kt)("li",{parentName:"ul"},"If there are new features being added, ",(0,a.kt)("inlineCode",{parentName:"li"},"minor")," version will be released"),(0,a.kt)("li",{parentName:"ul"},"If there are any ",(0,a.kt)("inlineCode",{parentName:"li"},"BREAKING CHANGES")," or we come out of MVP stage, then ",(0,a.kt)("inlineCode",{parentName:"li"},"major")," version will be released"))),(0,a.kt)("li",{parentName:"ul"},"If it is a ",(0,a.kt)("inlineCode",{parentName:"li"},"beta")," release,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Framework JAR will get published to Maven central for the new version"),(0,a.kt)("li",{parentName:"ul"},"A new pre-release will be created on GitHub project release page"),(0,a.kt)("li",{parentName:"ul"},"A new discussion will be created for the same release in ",(0,a.kt)("inlineCode",{parentName:"li"},"Discussion")," tab"))),(0,a.kt)("li",{parentName:"ul"},"If it is a final release,",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Framework JAR will get published on Maven central for the new version"),(0,a.kt)("li",{parentName:"ul"},"A new latest release will be created in GitHub project release page"),(0,a.kt)("li",{parentName:"ul"},"A new discussion will be created for the same release in ",(0,a.kt)("inlineCode",{parentName:"li"},"Discussion")," tab"),(0,a.kt)("li",{parentName:"ul"},"Finally a Tweet will be posted on Twitter handle ",(0,a.kt)("a",{parentName:"li",href:"https://dub.sh/boyka-twitter"},"@BoykaFramework"),", informing about the Boyka framework release")))))}m.isMDXComponent=!0},9728:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/branching-strategy-76ecc58ce7041c4d7124bca0468db8d2.png"}}]);