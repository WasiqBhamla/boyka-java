"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1077],{1704:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(5250),r=t(9040);const o={title:"Locator",sidebar_position:3},a=void 0,l={id:"builders/locator",title:"Locator",description:"Properties",source:"@site/docs/api/builders/locator.md",sourceDirName:"builders",slug:"/builders/locator",permalink:"/boyka-framework/api/builders/locator",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/builders/locator.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1698910609,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:3,frontMatter:{title:"Locator",sidebar_position:3},sidebar:"api",previous:{title:"ApiResponse",permalink:"/boyka-framework/api/builders/api-response"},next:{title:"DriverSession",permalink:"/boyka-framework/api/sessions/driver-session"}},d={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>android</code>",id:"android",level:3},{value:"<code>filter</code>",id:"filter",level:3},{value:"<code>index</code>",id:"index",level:3},{value:"<code>parent</code>",id:"parent",level:3},{value:"<code>waitStrategy</code>",id:"waitstrategy",level:3},{value:"<code>web</code>",id:"web",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>getLocator</code>",id:"get-locator",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"android",children:(0,i.jsx)(n.code,{children:"android"})}),"\n",(0,i.jsx)(n.p,{children:"This property will set Android specific locator."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'. . .\nprivate final Locator loginButton = Locator.buildLocator ()\n    .web (By.id ("login-button"))\n    // highlight-next-line\n    .android (AppiumBy.accessibilityId ("test-LOGIN"))\n    .name ("Login Button")\n    .parent (this.loginBox)\n    .build ();\n. . .\n'})}),"\n",(0,i.jsx)(n.h3,{id:"filter",children:(0,i.jsx)(n.code,{children:"filter"})}),"\n",(0,i.jsx)(n.p,{children:"This property will set the filter on the WebElement."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'. . .\nprivate final Locator title = Locator.buildLocator ()\n    .web (By.tagName ("h3"))\n    // highlight-next-line\n    .filter (e -> e.getText ().contains ("Some Text"))\n    .name ("Title")\n    .build ();\n. . .\n'})}),"\n",(0,i.jsx)(n.h3,{id:"index",children:(0,i.jsx)(n.code,{children:"index"})}),"\n",(0,i.jsx)(n.p,{children:"This property will set the index for the WebElement."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'. . .\nprivate final Locator title = Locator.buildLocator ()\n    .web (By.tagName ("h3"))\n    // highlight-next-line\n    .index (1)\n    .name ("Title")\n    .build ();\n. . .\n'})}),"\n",(0,i.jsx)(n.h3,{id:"parent",children:(0,i.jsx)(n.code,{children:"parent"})}),"\n",(0,i.jsx)(n.p,{children:"This property will set the parent locator for the current WebElement."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'. . .\nprivate final Locator loginBox = Locator.buildLocator ()\n    .web (By.id ("login_button_container"))\n    .android (AppiumBy.accessibilityId ("test-Login"))\n    .name ("Login Box")\n    .build ();\nprivate final Locator username = Locator.buildLocator ()\n    .web (By.id ("user-name"))\n    .android (AppiumBy.accessibilityId ("test-Username"))\n    .name ("User Name")\n    // highlight-next-line\n    .parent (this.loginBox)\n    .build ();\n. . . \n'})}),"\n",(0,i.jsx)(n.h3,{id:"waitstrategy",children:(0,i.jsx)(n.code,{children:"waitStrategy"})}),"\n",(0,i.jsx)(n.p,{children:"This property will set the wait strategy to apply while finding the element."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'. . .\nprivate final Locator username = Locator.buildLocator ()\n    .web (By.id ("user-name"))\n    .android (AppiumBy.accessibilityId ("test-Username"))\n    .name ("User Name")\n    // highlight-next-line\n    .waitStrategy (WaitStrategy.CLICKABLE)\n    .build ();\n. . . \n'})}),"\n",(0,i.jsx)(n.h3,{id:"web",children:(0,i.jsx)(n.code,{children:"web"})}),"\n",(0,i.jsx)(n.p,{children:"This property will set Web specific locator."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'. . .\nprivate final Locator loginButton = Locator.buildLocator ()\n    // highlight-next-line\n    .web (By.id ("login-button"))\n    .name ("Login Button")\n    .build ();\n. . .\n'})}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"get-locator",children:(0,i.jsx)(n.code,{children:"getLocator"})}),"\n",(0,i.jsx)(n.p,{children:"This method will get the locator for the platform the test is running for."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'. . .\nprivate final Locator username = Locator.buildLocator ()\n    .web (By.id ("user-name"))\n    .android (AppiumBy.accessibilityId ("test-Username"))\n    .name ("User Name")\n    .waitStrategy (WaitStrategy.CLICKABLE)\n    .build ();\n. . .\nBy locatorElement = username.getLocator ();\n. . . \n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},9040:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(79);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);