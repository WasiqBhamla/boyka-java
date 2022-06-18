"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9409],{167:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(7612);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=d(n),s=a,k=u["".concat(p,".").concat(s)]||u[s]||m[s]||i;return n?r.createElement(k,o(o({ref:e},c),{},{components:n})):r.createElement(k,o({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7419:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return p},default:function(){return s},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var r=n(5731),a=n(2706),i=(n(7612),n(167)),o=["components"],l={title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:3},p=void 0,d={unversionedId:"project-details/action-workflows",id:"project-details/action-workflows",title:"\u267b\ufe0f GitHub Actions workflows",description:"Project workflows",source:"@site/docs/contributing/project-details/action-workflows.md",sourceDirName:"project-details",slug:"/project-details/action-workflows",permalink:"/boyka-framework/contributing/project-details/action-workflows",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/contributing/project-details/action-workflows.md",tags:[],version:"current",lastUpdatedBy:"Ajay Makode",lastUpdatedAt:1655547375,formattedLastUpdatedAt:"6/18/2022",sidebarPosition:3,frontMatter:{title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:3},sidebar:"contributing",previous:{title:"\ud83d\udee1\ufe0f Branch Protection",permalink:"/boyka-framework/contributing/project-details/branch-protection"},next:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"}},c={},m=[{value:"Project workflows",id:"project-workflows",level:2}],u={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"project-workflows"},"Project workflows"),(0,i.kt)("p",null,"Following are the GitHub Actions workflows that we have created for our project along with it's trigger condition:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Workflow"),(0,i.kt)("th",{parentName:"tr",align:null},"Event Trigger"),(0,i.kt)("th",{parentName:"tr",align:null},"Path Trigger"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"check-commit")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PR -> main")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"all")),(0,i.kt)("td",{parentName:"tr",align:null},"Will check commit message if it complies with ",(0,i.kt)("a",{parentName:"td",href:"https://conventionalcommits.org/"},"conventional commit specifications"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"codeql")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"push (main)"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"PR -> main"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"Every Sat 2 PM")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"all")),(0,i.kt)("td",{parentName:"tr",align:null},"Will run CodeQL on the latest commit.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deploy-site")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PR -> main")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"website/"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".github/")),(0,i.kt)("td",{parentName:"tr",align:null},"Will only test the site.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"deploy-site")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"push (main)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"website/"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".github/")),(0,i.kt)("td",{parentName:"tr",align:null},"Will only deploy the site to GitHub pages.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"test-java")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"push (main)"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"PR -> main")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"core-java/"),", ",(0,i.kt)("inlineCode",{parentName:"td"},".github/")),(0,i.kt)("td",{parentName:"tr",align:null},"Will run check code styles, run tests and SonarCloud code analysis.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"publish")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Manual trigger")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"all")),(0,i.kt)("td",{parentName:"tr",align:null},"Will deploy framework to Maven central, create release and discussion on GitHub and Tweet about the release from ",(0,i.kt)("a",{parentName:"td",href:"https://twitter.com/WasiqBhamla"},"@WasiqBhamla Twitter")," handle.")))))}s.isMDXComponent=!0}}]);