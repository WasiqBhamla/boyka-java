"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9896],{7077:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=t(5250),n=t(9040);const s={title:"NavigateActions",sidebar_position:6},o=void 0,r={id:"actions/drivers/navigate-actions",title:"NavigateActions",description:"Static methods",source:"@site/docs/api/actions/drivers/navigate-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/navigate-actions",permalink:"/boyka-framework/api/actions/drivers/navigate-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/navigate-actions.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1698906182,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:6,frontMatter:{title:"NavigateActions",sidebar_position:6},sidebar:"api",previous:{title:"FrameActions",permalink:"/boyka-framework/api/actions/drivers/frame-actions"},next:{title:"WindowActions",permalink:"/boyka-framework/api/actions/drivers/window-actions"}},c={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>navigate</code>",id:"navigate",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>back</code>",id:"back",level:3},{value:"<code>forward</code>",id:"forward",level:3},{value:"<code>refresh</code>",id:"refresh",level:3},{value:"<code>to</code>",id:"to",level:3},{value:"<code>getUrl</code>",id:"geturl",level:3},{value:"<code>verifyUrl</code>",id:"verifyurl",level:3}];function l(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,a.jsx)(i.h3,{id:"navigate",children:(0,a.jsx)(i.code,{children:"navigate"})}),"\n",(0,a.jsxs)(i.p,{children:["This will return ",(0,a.jsx)(i.code,{children:"INavigateActions"})," which will expose different methods to handle navigate related actions."]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"INavigateActions navigateActions = NavigateActions.navigate ();\n"})}),"\n",(0,a.jsx)(i.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,a.jsx)(i.h3,{id:"back",children:(0,a.jsx)(i.code,{children:"back"})}),"\n",(0,a.jsx)(i.p,{children:"This method will go back to the previous page."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().back ();\n"})}),"\n",(0,a.jsx)(i.h3,{id:"forward",children:(0,a.jsx)(i.code,{children:"forward"})}),"\n",(0,a.jsx)(i.p,{children:"This method will go forward to the next page."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().forward ();\n"})}),"\n",(0,a.jsx)(i.h3,{id:"refresh",children:(0,a.jsx)(i.code,{children:"refresh"})}),"\n",(0,a.jsx)(i.p,{children:"This method will refresh the browser window."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().refresh ();\n"})}),"\n",(0,a.jsx)(i.h3,{id:"to",children:(0,a.jsx)(i.code,{children:"to"})}),"\n",(0,a.jsx)(i.p,{children:"This method will navigate you to the URL mentioned."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().to ("https://google.com");\n'})}),"\n",(0,a.jsx)(i.h3,{id:"geturl",children:(0,a.jsx)(i.code,{children:"getUrl"})}),"\n",(0,a.jsx)(i.p,{children:"This method will get the URL of the browser window."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nSystem.out.println (navigate ().getUrl ());\n"})}),"\n",(0,a.jsx)(i.h3,{id:"verifyurl",children:(0,a.jsx)(i.code,{children:"verifyUrl"})}),"\n",(0,a.jsx)(i.p,{children:"This method is used to verify the browser url."}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().verifyUrl ()\n    .isEqualTo ("https://www.swaglabs.com/");\n'})})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},9040:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>o});var a=t(79);const n={},s=a.createContext(n);function o(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);