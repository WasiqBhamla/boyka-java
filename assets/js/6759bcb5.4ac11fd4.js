"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1077],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(3262),a=(n(79),n(8570));const i={title:"Locator",sidebar_position:3},o=void 0,l={unversionedId:"builders/locator",id:"builders/locator",title:"Locator",description:"Properties",source:"@site/docs/api/builders/locator.md",sourceDirName:"builders",slug:"/builders/locator",permalink:"/boyka-framework/api/builders/locator",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/builders/locator.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696145763,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:3,frontMatter:{title:"Locator",sidebar_position:3},sidebar:"api",previous:{title:"ApiResponse",permalink:"/boyka-framework/api/builders/api-response"},next:{title:"DriverSession",permalink:"/boyka-framework/api/sessions/driver-session"}},c={},p=[{value:"Properties",id:"properties",level:2},{value:"<code>android</code>",id:"android",level:3},{value:"<code>filter</code>",id:"filter",level:3},{value:"<code>index</code>",id:"index",level:3},{value:"<code>parent</code>",id:"parent",level:3},{value:"<code>waitStrategy</code>",id:"waitstrategy",level:3},{value:"<code>web</code>",id:"web",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>getLocator</code>",id:"get-locator",level:3}],d={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"android"},(0,a.kt)("inlineCode",{parentName:"h3"},"android")),(0,a.kt)("p",null,"This property will set Android specific locator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nprivate final Locator loginButton = Locator.buildLocator ()\n    .web (By.id ("login-button"))\n    // highlight-next-line\n    .android (AppiumBy.accessibilityId ("test-LOGIN"))\n    .name ("Login Button")\n    .parent (this.loginBox)\n    .build ();\n. . .\n')),(0,a.kt)("h3",{id:"filter"},(0,a.kt)("inlineCode",{parentName:"h3"},"filter")),(0,a.kt)("p",null,"This property will set the filter on the WebElement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nprivate final Locator title = Locator.buildLocator ()\n    .web (By.tagName ("h3"))\n    // highlight-next-line\n    .filter (e -> e.getText ().contains ("Some Text"))\n    .name ("Title")\n    .build ();\n. . .\n')),(0,a.kt)("h3",{id:"index"},(0,a.kt)("inlineCode",{parentName:"h3"},"index")),(0,a.kt)("p",null,"This property will set the index for the WebElement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nprivate final Locator title = Locator.buildLocator ()\n    .web (By.tagName ("h3"))\n    // highlight-next-line\n    .index (1)\n    .name ("Title")\n    .build ();\n. . .\n')),(0,a.kt)("h3",{id:"parent"},(0,a.kt)("inlineCode",{parentName:"h3"},"parent")),(0,a.kt)("p",null,"This property will set the parent locator for the current WebElement."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nprivate final Locator loginBox = Locator.buildLocator ()\n    .web (By.id ("login_button_container"))\n    .android (AppiumBy.accessibilityId ("test-Login"))\n    .name ("Login Box")\n    .build ();\nprivate final Locator username = Locator.buildLocator ()\n    .web (By.id ("user-name"))\n    .android (AppiumBy.accessibilityId ("test-Username"))\n    .name ("User Name")\n    // highlight-next-line\n    .parent (this.loginBox)\n    .build ();\n. . . \n')),(0,a.kt)("h3",{id:"waitstrategy"},(0,a.kt)("inlineCode",{parentName:"h3"},"waitStrategy")),(0,a.kt)("p",null,"This property will set the wait strategy to apply while finding the element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nprivate final Locator username = Locator.buildLocator ()\n    .web (By.id ("user-name"))\n    .android (AppiumBy.accessibilityId ("test-Username"))\n    .name ("User Name")\n    // highlight-next-line\n    .waitStrategy (WaitStrategy.CLICKABLE)\n    .build ();\n. . . \n')),(0,a.kt)("h3",{id:"web"},(0,a.kt)("inlineCode",{parentName:"h3"},"web")),(0,a.kt)("p",null,"This property will set Web specific locator."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nprivate final Locator loginButton = Locator.buildLocator ()\n    // highlight-next-line\n    .web (By.id ("login-button"))\n    .name ("Login Button")\n    .build ();\n. . .\n')),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"get-locator"},(0,a.kt)("inlineCode",{parentName:"h3"},"getLocator")),(0,a.kt)("p",null,"This method will get the locator for the platform the test is running for."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'. . .\nprivate final Locator username = Locator.buildLocator ()\n    .web (By.id ("user-name"))\n    .android (AppiumBy.accessibilityId ("test-Username"))\n    .name ("User Name")\n    .waitStrategy (WaitStrategy.CLICKABLE)\n    .build ();\n. . .\nBy locatorElement = username.getLocator ();\n. . . \n')))}u.isMDXComponent=!0}}]);