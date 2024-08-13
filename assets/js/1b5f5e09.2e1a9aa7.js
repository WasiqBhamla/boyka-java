"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6952],{4441:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var r=t(6106),s=t(9252);const n={title:"DriverActions",sidebar_position:4},o=void 0,a={id:"actions/drivers/driver-actions",title:"DriverActions",description:"Static methods",source:"@site/docs/api/actions/drivers/driver-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/driver-actions",permalink:"/boyka-framework/api/actions/drivers/driver-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/driver-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1723567924e3,sidebarPosition:4,frontMatter:{title:"DriverActions",sidebar_position:4},sidebar:"api",previous:{title:"CookieActions",permalink:"/boyka-framework/api/actions/drivers/cookie-actions"},next:{title:"FrameActions",permalink:"/boyka-framework/api/actions/drivers/frame-actions"}},c={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withDriver</code>",id:"with-driver",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>executeScript (script, args[])</code>",id:"execute-script",level:3},{value:"<code>pause</code>",id:"pause",level:3},{value:"<code>saveLogs</code>",id:"save-logs",level:3},{value:"<code>waitUntil</code>",id:"wait-until",level:3}];function l(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,r.jsx)(i.h3,{id:"with-driver",children:(0,r.jsx)(i.code,{children:"withDriver"})}),"\n",(0,r.jsxs)(i.p,{children:["This will return ",(0,r.jsx)(i.code,{children:"IDriverActions"})," which will expose different methods to handle all other driver actions."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"IDriverActions driverActions = DriverActions.withDriver ();\n"})}),"\n",(0,r.jsx)(i.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,r.jsx)(i.h3,{id:"execute-script",children:(0,r.jsx)(i.code,{children:"executeScript (script, args[])"})}),"\n",(0,r.jsx)(i.p,{children:"This method will execute the JS script and returns the result."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.DriverActions.withDriver;\n. . .\nString output = withDriver ().executeScript (\"alert('Hello World');\");\n"})}),"\n",(0,r.jsx)(i.h3,{id:"pause",children:(0,r.jsx)(i.code,{children:"pause"})}),"\n",(0,r.jsx)(i.p,{children:"This method is used to navigate to the given URL."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.DriverActions.withDriver;\nimport static java.time.Duration.ofMillis;\n. . .\nwithDriver ().pause (ofMillis (100));\n"})}),"\n",(0,r.jsx)(i.h3,{id:"save-logs",children:(0,r.jsx)(i.code,{children:"saveLogs"})}),"\n",(0,r.jsx)(i.p,{children:"This method will save all the logs captured by the Driver."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.DriverActions.withDriver;\n. . .\nwithDriver ().saveLogs ();\n"})}),"\n",(0,r.jsx)(i.h3,{id:"wait-until",children:(0,r.jsx)(i.code,{children:"waitUntil"})}),"\n",(0,r.jsxs)(i.p,{children:["This method will wait for any given condition to be true. It takes in Selenium WebDrivers ",(0,r.jsx)(i.code,{children:"ExpectedCondition<Boolean>"})," object as parameter."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.DriverActions.withDriver;\nimport org.openqa.selenium.support.ui.ExpectedConditions;\n. . .\nwithDriver ().waitUntil (ExpectedConditions.urlMatches (URL));\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},9252:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>a});var r=t(7378);const s={},n=r.createContext(s);function o(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);