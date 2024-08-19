"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1132],{4031:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(6106),n=t(9252);const o={title:"NavigateActions",sidebar_position:6},r=void 0,s={id:"actions/drivers/navigate-actions",title:"NavigateActions",description:"Static methods",source:"@site/docs/api/actions/drivers/navigate-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/navigate-actions",permalink:"/boyka-framework/api/actions/drivers/navigate-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/navigate-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:172405475e4,sidebarPosition:6,frontMatter:{title:"NavigateActions",sidebar_position:6},sidebar:"api",previous:{title:"FrameActions",permalink:"/boyka-framework/api/actions/drivers/frame-actions"},next:{title:"WindowActions",permalink:"/boyka-framework/api/actions/drivers/window-actions"}},c={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>navigate</code>",id:"navigate",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>back</code>",id:"back",level:3},{value:"<code>forward</code>",id:"forward",level:3},{value:"<code>refresh</code>",id:"refresh",level:3},{value:"<code>to</code>",id:"to",level:3},{value:"<code>toBaseUrl</code>",id:"tobaseurl",level:3},{value:"<code>getUrl</code>",id:"geturl",level:3},{value:"<code>verifyUrl</code>",id:"verifyurl",level:3}];function l(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,a.jsx)(i.h3,{id:"navigate",children:(0,a.jsx)(i.code,{children:"navigate"})}),"\n",(0,a.jsxs)(i.p,{children:["This will return ",(0,a.jsx)(i.code,{children:"INavigateActions"})," which will expose different methods to handle navigate related actions."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"INavigateActions navigateActions = NavigateActions.navigate ();\n"})}),"\n",(0,a.jsx)(i.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,a.jsx)(i.h3,{id:"back",children:(0,a.jsx)(i.code,{children:"back"})}),"\n",(0,a.jsx)(i.p,{children:"This method will go back to the previous page."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().back ();\n"})}),"\n",(0,a.jsx)(i.h3,{id:"forward",children:(0,a.jsx)(i.code,{children:"forward"})}),"\n",(0,a.jsx)(i.p,{children:"This method will go forward to the next page."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().forward ();\n"})}),"\n",(0,a.jsx)(i.h3,{id:"refresh",children:(0,a.jsx)(i.code,{children:"refresh"})}),"\n",(0,a.jsx)(i.p,{children:"This method will refresh the browser window."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().refresh ();\n"})}),"\n",(0,a.jsx)(i.h3,{id:"to",children:(0,a.jsx)(i.code,{children:"to"})}),"\n",(0,a.jsx)(i.p,{children:"This method will navigate you to the URL mentioned."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().to ("https://google.com");\n'})}),"\n",(0,a.jsx)(i.h3,{id:"tobaseurl",children:(0,a.jsx)(i.code,{children:"toBaseUrl"})}),"\n",(0,a.jsx)(i.p,{children:"This method will navigate to the base URL mentioned in the config file."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().toBaseUrl ();\n"})}),"\n",(0,a.jsx)(i.h3,{id:"geturl",children:(0,a.jsx)(i.code,{children:"getUrl"})}),"\n",(0,a.jsx)(i.p,{children:"This method will get the URL of the browser window."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.NavigateActions.navigate;\n. . .\nSystem.out.println (navigate ().getUrl ());\n"})}),"\n",(0,a.jsx)(i.h3,{id:"verifyurl",children:(0,a.jsx)(i.code,{children:"verifyUrl"})}),"\n",(0,a.jsx)(i.p,{children:"This method is used to verify the browser url."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().verifyUrl ()\n    .isEqualTo ("https://www.swaglabs.com/");\n'})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},9252:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>s});var a=t(7378);const n={},o=a.createContext(n);function r(e){const i=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:i},e.children)}}}]);