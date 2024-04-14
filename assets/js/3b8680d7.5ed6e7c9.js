"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5197],{3239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(9214),o=n(9425);const s={title:"ContextActions",sidebar_position:2},c=void 0,a={id:"actions/drivers/context-actions",title:"ContextActions",description:"Static methods",source:"@site/docs/api/actions/drivers/context-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/context-actions",permalink:"/boyka-framework/api/actions/drivers/context-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/context-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1713092249e3,sidebarPosition:2,frontMatter:{title:"ContextActions",sidebar_position:2},sidebar:"api",previous:{title:"AlertActions",permalink:"/boyka-framework/api/actions/drivers/alert-actions"},next:{title:"CookieActions",permalink:"/boyka-framework/api/actions/drivers/cookie-actions"}},r={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withContext</code>",id:"with-context",level:3},{value:"Example",id:"example",level:2},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>contexts</code>",id:"contexts",level:3},{value:"<code>currentContext</code>",id:"current-context",level:3},{value:"<code>switchToNative</code>",id:"switch-to-native",level:3},{value:"<code>switchToWebView (name)</code>",id:"switch-to-web-view-name",level:3},{value:"<code>switchToWebView</code>",id:"switch-to-web-view",level:3}];function l(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,i.jsx)(t.h3,{id:"with-context",children:(0,i.jsx)(t.code,{children:"withContext"})}),"\n",(0,i.jsxs)(t.p,{children:["This will return ",(0,i.jsx)(t.code,{children:"IContextActions"})," which will expose different methods to handle different contexts."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"IContextActions contextActions = ContextActions.withContext ();\n"})}),"\n",(0,i.jsxs)(t.admonition,{title:"Important!!",type:"danger",children:[(0,i.jsxs)(t.p,{children:["In order to use these contexts related methods, your app must be set as ",(0,i.jsx)(t.code,{children:"HYBRID"})," in your ",(0,i.jsx)(t.code,{children:"boyka-config.json"})," file."]}),(0,i.jsx)(t.h2,{id:"example",children:"Example"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "ui": {\n    "timeout": {\n      // ...\n    },\n    "logging": {\n      // ...\n    },\n    "screenshot": {\n      // ...\n    },\n    "web": {\n      // ...\n    },\n    "mobile": {\n      "device_config": {\n        "server": {\n          // ...\n        },\n        "device": {\n          // ...\n          "swipe": {\n            // ...\n          },\n          "application": {\n            // ...\n            // highlight-next-line\n            "type": "HYBRID"\n          },\n          "virtual_device": {\n            // ...\n          }\n        }\n      }\n    }\n  },\n  "api": {\n    // ...\n  }\n}\n'})})]}),"\n",(0,i.jsx)(t.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,i.jsx)(t.h3,{id:"contexts",children:(0,i.jsx)(t.code,{children:"contexts"})}),"\n",(0,i.jsx)(t.p,{children:"This method will get the list of all the available contexts on the screen."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.ContextActions.withContext;\n. . .\nvar contextList = withContext ().contexts ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"current-context",children:(0,i.jsx)(t.code,{children:"currentContext"})}),"\n",(0,i.jsx)(t.p,{children:"This method will get the current context name on the screen."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.ContextActions.withContext;\n. . .\nvar contextName = withContext ().currentContext ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"switch-to-native",children:(0,i.jsx)(t.code,{children:"switchToNative"})}),"\n",(0,i.jsx)(t.p,{children:"This method will switch current context to native context. This will work only for Hybrid application type."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.ContextActions.withContext;\n. . .\nwithContext ().switchToNative ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"switch-to-web-view-name",children:(0,i.jsx)(t.code,{children:"switchToWebView (name)"})}),"\n",(0,i.jsx)(t.p,{children:"This method will switch the context to mentioned context name. This will work only for Hybrid application type."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.ContextActions.withContext;\n. . .\nwithContext ().switchToWebView ("WEBVIEW_xxxx");\n'})}),"\n",(0,i.jsx)(t.h3,{id:"switch-to-web-view",children:(0,i.jsx)(t.code,{children:"switchToWebView"})}),"\n",(0,i.jsx)(t.p,{children:"This method will switch the context to first available Web view context. This will work only for Hybrid application type."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.ContextActions.withContext;\n. . .\nwithContext ().switchToWebView ();\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9425:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var i=n(8318);const o={},s=i.createContext(o);function c(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);