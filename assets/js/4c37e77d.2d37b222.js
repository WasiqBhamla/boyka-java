"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3799],{7095:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var i=t(6106),r=t(9252);const o={title:"INavigateActionsListener",sidebar_position:6},s=void 0,a={id:"actions/interfaces/listeners/drivers/navigate-actions-listener",title:"INavigateActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/drivers/navigate-actions-listener.md",sourceDirName:"actions/interfaces/listeners/drivers",slug:"/actions/interfaces/listeners/drivers/navigate-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/navigate-actions-listener",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/drivers/navigate-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1724141773e3,sidebarPosition:6,frontMatter:{title:"INavigateActionsListener",sidebar_position:6},sidebar:"api",previous:{title:"IFrameActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/frame-actions-listener"},next:{title:"IWindowActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/window-actions-listener"}},c={},d=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onBack</code>",id:"on-back",level:2},{value:"<code>onForward</code>",id:"on-forward",level:2},{value:"<code>onGetUrl</code>",id:"on-forward",level:2},{value:"<code>onRefresh</code>",id:"on-refresh",level:2},{value:"<code>onTo (url)</code>",id:"on-to",level:2},{value:"<code>onVerifyUrl</code>",id:"on-verify-url",level:2}];function l(e){const n={code:"code",h2:"h2",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(n.p,{children:"In order inject your customized logging for your reports or you want to perform any other action when handling Web navigation actions, you can implement this class and provide your implementations for different methods available in this listener interface."}),"\n",(0,i.jsx)(n.h2,{id:"on-back",children:(0,i.jsx)(n.code,{children:"onBack"})}),"\n",(0,i.jsx)(n.p,{children:"This method will get executed after navigating back on the web page."}),"\n",(0,i.jsx)(n.h2,{id:"on-forward",children:(0,i.jsx)(n.code,{children:"onForward"})}),"\n",(0,i.jsx)(n.p,{children:"This method will get executed after navigating forward on the web page."}),"\n",(0,i.jsx)(n.h2,{id:"on-forward",children:(0,i.jsx)(n.code,{children:"onGetUrl"})}),"\n",(0,i.jsx)(n.p,{children:"This method will get executed after getting the current page URL."}),"\n",(0,i.jsx)(n.h2,{id:"on-refresh",children:(0,i.jsx)(n.code,{children:"onRefresh"})}),"\n",(0,i.jsx)(n.p,{children:"This method will get executed after refreshing the page."}),"\n",(0,i.jsx)(n.h2,{id:"on-to",children:(0,i.jsx)(n.code,{children:"onTo (url)"})}),"\n",(0,i.jsx)(n.p,{children:"This method will get executed after navigating to the provided URL."}),"\n",(0,i.jsx)(n.h2,{id:"on-verify-url",children:(0,i.jsx)(n.code,{children:"onVerifyUrl"})}),"\n",(0,i.jsx)(n.p,{children:"This method will get executed after verifying the current page URL."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},9252:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(7378);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);