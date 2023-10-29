"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5820],{8570:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var i=r(79);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),v=n,m=p["".concat(c,".").concat(v)]||p[v]||u[v]||a;return r?i.createElement(m,o(o({ref:t},d),{},{components:r})):i.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=v;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(3262),n=(r(79),r(8570));const a={title:"DriverActions",sidebar_position:4},o=void 0,s={unversionedId:"actions/drivers/driver-actions",id:"actions/drivers/driver-actions",title:"DriverActions",description:"Static methods",source:"@site/docs/api/actions/drivers/driver-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/driver-actions",permalink:"/boyka-framework/api/actions/drivers/driver-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/driver-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1698595732,formattedLastUpdatedAt:"Oct 29, 2023",sidebarPosition:4,frontMatter:{title:"DriverActions",sidebar_position:4},sidebar:"api",previous:{title:"CookieActions",permalink:"/boyka-framework/api/actions/drivers/cookie-actions"},next:{title:"FrameActions",permalink:"/boyka-framework/api/actions/drivers/frame-actions"}},c={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withDriver</code>",id:"with-driver",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>executeScript (script, args[])</code>",id:"execute-script",level:3},{value:"<code>pause</code>",id:"pause",level:3},{value:"<code>saveLogs</code>",id:"save-logs",level:3},{value:"<code>waitUntil</code>",id:"wait-until",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"static-methods"},"Static methods"),(0,n.kt)("h3",{id:"with-driver"},(0,n.kt)("inlineCode",{parentName:"h3"},"withDriver")),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"IDriverActions")," which will expose different methods to handle all other driver actions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IDriverActions driverActions = DriverActions.withDriver ();\n")),(0,n.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,n.kt)("h3",{id:"execute-script"},(0,n.kt)("inlineCode",{parentName:"h3"},"executeScript (script, args[])")),(0,n.kt)("p",null,"This method will execute the JS script and returns the result."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.DriverActions.withDriver;\n. . .\nString output = withDriver ().executeScript (\"alert('Hello World');\");\n")),(0,n.kt)("h3",{id:"pause"},(0,n.kt)("inlineCode",{parentName:"h3"},"pause")),(0,n.kt)("p",null,"This method is used to navigate to the given URL."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.DriverActions.withDriver;\nimport static java.time.Duration.ofMillis;\n. . .\nwithDriver ().pause (ofMillis (100));\n")),(0,n.kt)("h3",{id:"save-logs"},(0,n.kt)("inlineCode",{parentName:"h3"},"saveLogs")),(0,n.kt)("p",null,"This method will save all the logs captured by the Driver."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.DriverActions.withDriver;\n. . .\nwithDriver ().saveLogs ();\n")),(0,n.kt)("h3",{id:"wait-until"},(0,n.kt)("inlineCode",{parentName:"h3"},"waitUntil")),(0,n.kt)("p",null,"This method will wait for any given condition to be true. It takes in Selenium WebDrivers ",(0,n.kt)("inlineCode",{parentName:"p"},"ExpectedCondition<Boolean>")," object as parameter."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.DriverActions.withDriver;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\n. . .\nwithDriver ().waitUntil (ExpectedConditions.urlMatches (URL));\n")))}u.isMDXComponent=!0}}]);