"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9409],{8570:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var a=n(79);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=d(n),s=r,u=c["".concat(p,".").concat(s)]||c[s]||k[s]||l;return n?a.createElement(u,i(i({ref:e},m),{},{components:n})):a.createElement(u,i({ref:e},m))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7266:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(3262),r=(n(79),n(8570));const l={title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:4},i=void 0,o={unversionedId:"project-details/action-workflows",id:"project-details/action-workflows",title:"\u267b\ufe0f GitHub Actions workflows",description:"Project workflows",source:"@site/docs/contributing/project-details/action-workflows.md",sourceDirName:"project-details",slug:"/project-details/action-workflows",permalink:"/boyka-framework/contributing/project-details/action-workflows",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/action-workflows.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698595732,formattedLastUpdatedAt:"Oct 29, 2023",sidebarPosition:4,frontMatter:{title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:4},sidebar:"contributing",previous:{title:"\ud83d\udee1\ufe0f Branch Protection",permalink:"/boyka-framework/contributing/project-details/branch-protection"},next:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"}},p={},d=[{value:"Project workflows",id:"project-workflows",level:2}],m={toc:d},c="wrapper";function k(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"project-workflows"},"Project workflows"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Check out all our project workflows ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/BoykaFramework/boyka-framework/actions"},"on GitHub"))),(0,r.kt)("p",null,"Following are the GitHub Actions workflows that we have created for our project along with it's trigger condition:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Workflow"),(0,r.kt)("th",{parentName:"tr",align:null},"Event Trigger"),(0,r.kt)("th",{parentName:"tr",align:null},"Path Trigger"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"check-commit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PR -> main")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:null},"Will check commit message if it complies with ",(0,r.kt)("a",{parentName:"td",href:"https://conventionalcommits.org/"},"conventional commit specifications"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"codeql")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"push (main)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PR -> main"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Every Sat 2 PM")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:null},"Will run CodeQL on the latest commit for both ",(0,r.kt)("inlineCode",{parentName:"td"},"java")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"typescript"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deploy-site")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PR -> main")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"website/"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".github/")),(0,r.kt)("td",{parentName:"tr",align:null},"Will only test the site.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deploy-site")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"push (main)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"website/"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".github/")),(0,r.kt)("td",{parentName:"tr",align:null},"Will only deploy the site to GitHub pages.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pr-labeler")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PR -> (open / close)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:null},"Will label the PR with the appropriate labels.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"manual")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:null},"Will deploy the framework to Maven central, create a tag and release on GitHub based on input params.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"test-core")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"push (main)"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PR -> (main)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"core-java/"),", ",(0,r.kt)("inlineCode",{parentName:"td"},".github/")),(0,r.kt)("td",{parentName:"tr",align:null},"Will run check code styles, run tests and SonarCloud code analysis. Code analysis will only run on ",(0,r.kt)("inlineCode",{parentName:"td"},"push(main)")," event trigger")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tweet-release")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"release -> (published)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"all")),(0,r.kt)("td",{parentName:"tr",align:null},"Will tweet about the release on Twitter handle ",(0,r.kt)("a",{parentName:"td",href:"https://dub.sh/boyka-twitter"},"@BoykaFramework"),".")))))}k.isMDXComponent=!0}}]);