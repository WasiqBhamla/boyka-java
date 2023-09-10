"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1580],{8570:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>u});var i=n(79);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=i.createContext({}),l=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=l(t.components);return i.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},h=i.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(n),h=o,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||a;return n?i.createElement(u,r(r({ref:e},p),{},{components:n})):i.createElement(u,r({ref:e},p))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,r=new Array(a);r[0]=h;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[d]="string"==typeof t?t:o,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},279:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(5907),o=(n(79),n(8570));const a={title:"ContextActions",sidebar_position:2},r=void 0,c={unversionedId:"actions/drivers/context-actions",id:"actions/drivers/context-actions",title:"ContextActions",description:"Static methods",source:"@site/docs/api/actions/drivers/context-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/context-actions",permalink:"/boyka-framework/api/actions/drivers/context-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/context-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1694328958,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:2,frontMatter:{title:"ContextActions",sidebar_position:2},sidebar:"api",previous:{title:"AlertActions",permalink:"/boyka-framework/api/actions/drivers/alert-actions"},next:{title:"CookieActions",permalink:"/boyka-framework/api/actions/drivers/cookie-actions"}},s={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withContext</code>",id:"with-context",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>contexts</code>",id:"contexts",level:3},{value:"<code>currentContext</code>",id:"current-context",level:3},{value:"<code>switchToNative</code>",id:"switch-to-native",level:3},{value:"<code>switchToWebView (name)</code>",id:"switch-to-web-view-name",level:3},{value:"<code>switchToWebView</code>",id:"switch-to-web-view",level:3}],p={toc:l},d="wrapper";function m(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"static-methods"},"Static methods"),(0,o.kt)("h3",{id:"with-context"},(0,o.kt)("inlineCode",{parentName:"h3"},"withContext")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"IContextActions")," which will expose different methods to handle different contexts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"IContextActions contextActions = ContextActions.withContext ();\n")),(0,o.kt)("admonition",{title:"Important!!",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"In order to use these contexts related methods, your app must be set as ",(0,o.kt)("inlineCode",{parentName:"p"},"HYBRID")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"boyka-config.json")," file."),(0,o.kt)("h2",{parentName:"admonition",id:"example"},"Example"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ui": {\n    "timeout": {\n      // ...\n    },\n    "logging": {\n      // ...\n    },\n    "screenshot": {\n      // ...\n    },\n    "web": {\n      // ...\n    },\n    "mobile": {\n      "device_config": {\n        "server": {\n          // ...\n        },\n        "device": {\n          // ...\n          "swipe": {\n            // ...\n          },\n          "application": {\n            // ...\n            // highlight-next-line\n            "type": "HYBRID"\n          },\n          "virtual_device": {\n            // ...\n          }\n        }\n      }\n    }\n  },\n  "api": {\n    // ...\n  }\n}\n'))),(0,o.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,o.kt)("h3",{id:"contexts"},(0,o.kt)("inlineCode",{parentName:"h3"},"contexts")),(0,o.kt)("p",null,"This method will get the list of all the available contexts on the screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.ContextActions.withContext;\n. . .\nvar contextList = withContext ().contexts ();\n")),(0,o.kt)("h3",{id:"current-context"},(0,o.kt)("inlineCode",{parentName:"h3"},"currentContext")),(0,o.kt)("p",null,"This method will get the current context name on the screen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.ContextActions.withContext;\n. . .\nvar contextName = withContext ().currentContext ();\n")),(0,o.kt)("h3",{id:"switch-to-native"},(0,o.kt)("inlineCode",{parentName:"h3"},"switchToNative")),(0,o.kt)("p",null,"This method will switch current context to native context. This will work only for Hybrid application type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.ContextActions.withContext;\n. . .\nwithContext ().switchToNative ();\n")),(0,o.kt)("h3",{id:"switch-to-web-view-name"},(0,o.kt)("inlineCode",{parentName:"h3"},"switchToWebView (name)")),(0,o.kt)("p",null,"This method will switch the context to mentioned context name. This will work only for Hybrid application type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.ContextActions.withContext;\n. . .\nwithContext ().switchToWebView ("WEBVIEW_xxxx");\n')),(0,o.kt)("h3",{id:"switch-to-web-view"},(0,o.kt)("inlineCode",{parentName:"h3"},"switchToWebView")),(0,o.kt)("p",null,"This method will switch the context to first available Web view context. This will work only for Hybrid application type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.ContextActions.withContext;\n. . .\nwithContext ().switchToWebView ();\n")))}m.isMDXComponent=!0}}]);