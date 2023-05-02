"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1916],{167:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>k});var r=o(5721);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(o),d=a,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||n;return o?r.createElement(k,i(i({ref:t},m),{},{components:o})):r.createElement(k,i({ref:t},m))}));function k(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},5711:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(4715),a=(o(5721),o(167));const n={title:"\ud83d\udc4b Introduction",sidebar_position:1},i=void 0,l={unversionedId:"intro",id:"intro",title:"\ud83d\udc4b Introduction",description:"\ud83d\udc4b Welcome to Boyka Framework!",source:"@site/docs/framework-docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/boyka-framework/docs/intro",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/intro.mdx",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1683011295,formattedLastUpdatedAt:"May 2, 2023",sidebarPosition:1,frontMatter:{title:"\ud83d\udc4b Introduction",sidebar_position:1},sidebar:"docs",next:{title:"\ud83d\udcd0 Framework Architecture",permalink:"/boyka-framework/docs/getting-started/architecture"}},s={},p=[{value:"\ud83d\udc4b Welcome to Boyka Framework!",id:"-welcome-to-boyka-framework",level:2},{value:"\u23f1\ufe0f Coming soon...",id:"\ufe0f-coming-soon",level:2},{value:"\ud83e\udded Project Road-map",id:"-project-road-map",level:2},{value:"\ud83e\udd41 Releases",id:"-releases",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"https://www.producthunt.com/posts/boyka-framework?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-boyka-framework",target:"_blank"},(0,a.kt)("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=352770&theme=light",alt:"Boyka-Framework - \ud83c\udf89 Ultimate test automation for testing any application type | Product Hunt",width:"250",height:"54"})),(0,a.kt)("h2",{id:"-welcome-to-boyka-framework"},"\ud83d\udc4b Welcome to Boyka Framework!"),(0,a.kt)("p",null,"I am Wasiq Bhamla, having 15+ years of experience. In my career having vast experience in automating API, Web browsers and Mobile apps, I have seen that people had to use different frameworks for automating API, Web and Mobile applications which created a lot of chaos with respect to maintenance of dependencies and their respective code for test automation."),(0,a.kt)("p",null,"Also, I never came across a test automation framework which allowed us to write automation test script without any project specific boilerplate code or a mini framework."),(0,a.kt)("p",null,"In addition to this, there was learning curve involved for learning those individual frameworks which slowed down the team to write automation and thus increased overall automation debt."),(0,a.kt)("p",null,"This all gave me an idea of having a single framework which could solve all the above mentioned problems and help the QA's to keep the pace up with writing test scripts and reduce the automation debt."),(0,a.kt)("p",null,"Following are some of the features of Boyka Framework:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u2705 Zero boilerplate code"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Support Rest API automation with schema validations and response body verification"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports Web browser automation with support for Chrome, Edge, Firefox and Safari."),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports Android native apps automation"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports iOS native apps automation"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports execution of Web tests on cloud platforms like BrowserStack and LambdaTest."),(0,a.kt)("li",{parentName:"ul"},"\u2705 Highly configurable via ",(0,a.kt)("inlineCode",{parentName:"li"},"boyka-config.json")),(0,a.kt)("li",{parentName:"ul"},"\u2705 Micro logging to log events of the test execution"),(0,a.kt)("li",{parentName:"ul"},"\u2705 Supports taking screenshots")),(0,a.kt)("h2",{id:"\ufe0f-coming-soon"},"\u23f1\ufe0f Coming soon..."),(0,a.kt)("p",null,"Following are the awesome features which will be implemented soon to the frameworks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support for GraphQL and SOAP API automation"),(0,a.kt)("li",{parentName:"ul"},"Support video recording of the tests for Web and Mobile platforms"),(0,a.kt)("li",{parentName:"ul"},"Support for more cloud platforms."),(0,a.kt)("li",{parentName:"ul"},"Many many more...")),(0,a.kt)("h2",{id:"-project-road-map"},"\ud83e\udded Project Road-map"),(0,a.kt)("p",null,"Check out our road map to know which features we are cooking,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/BoykaFramework/projects/4/views/1"},"Project Road-map")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/BoykaFramework/projects/4/views/2"},"Current Milestone")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/BoykaFramework/projects/4/views/3"},"Next Milestone")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/BoykaFramework/projects/4/views/4"},"Future planned features"))),(0,a.kt)("h2",{id:"-releases"},"\ud83e\udd41 Releases"),(0,a.kt)("p",null,"Boyka framework is in it's early stages of development. You can check out our ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/BoykaFramework/boyka-framework/releases"},"release page on GitHub"))," for more information."))}c.isMDXComponent=!0}}]);