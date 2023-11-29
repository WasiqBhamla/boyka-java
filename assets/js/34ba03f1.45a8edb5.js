"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7243],{6852:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var t=n(5250),o=n(9040);const d={title:"IWindowActionsListener",sidebar_position:7},l=void 0,s={id:"actions/interfaces/listeners/drivers/window-actions-listener",title:"IWindowActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/drivers/window-actions-listener.md",sourceDirName:"actions/interfaces/listeners/drivers",slug:"/actions/interfaces/listeners/drivers/window-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/window-actions-listener",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/drivers/window-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1701256680,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:7,frontMatter:{title:"IWindowActionsListener",sidebar_position:7},sidebar:"api",previous:{title:"INavigateActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/navigate-actions-listener"},next:{title:"IClickableActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/clickable-actions-listener"}},r={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onClose</code>",id:"on-close",level:2},{value:"<code>onCurrentHandle</code>",id:"on-current-handle",level:2},{value:"<code>onFullScreen</code>",id:"on-full-screen",level:2},{value:"<code>onGetTitle</code>",id:"on-get-title",level:2},{value:"<code>onHandles</code>",id:"on-handles",level:2},{value:"<code>onMaximize</code>",id:"on-maximize",level:2},{value:"<code>onMinimize</code>",id:"on-minimize",level:2},{value:"<code>onSwitchTo (nameOfHandle)</code>",id:"on-switch-to",level:2},{value:"<code>onSwitchToDefault</code>",id:"on-switch-to-default",level:2},{value:"<code>onSwitchToNew (windowType)</code>",id:"on-switch-to-new",level:2},{value:"<code>onTakeScreenshot (fileName)</code>",id:"on-switch-to-new",level:2},{value:"<code>onVerifyTitle</code>",id:"on-verify-title",level:2},{value:"<code>onViewportSize</code>",id:"on-viewport-size",level:2}];function a(e){const i={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"implementation",children:"Implementation"}),"\n",(0,t.jsx)(i.p,{children:"In order inject your customized logging for your reports or you want to perform any other action when handling the screen window related actions, you can implement this class and provide your implementations for different methods available in this listener interface."}),"\n",(0,t.jsx)(i.h2,{id:"on-close",children:(0,t.jsx)(i.code,{children:"onClose"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after closing the window."}),"\n",(0,t.jsx)(i.h2,{id:"on-current-handle",children:(0,t.jsx)(i.code,{children:"onCurrentHandle"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after getting the current window handle."}),"\n",(0,t.jsx)(i.h2,{id:"on-full-screen",children:(0,t.jsx)(i.code,{children:"onFullScreen"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after making the window full screen."}),"\n",(0,t.jsx)(i.h2,{id:"on-get-title",children:(0,t.jsx)(i.code,{children:"onGetTitle"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after getting the current window title."}),"\n",(0,t.jsx)(i.h2,{id:"on-handles",children:(0,t.jsx)(i.code,{children:"onHandles"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after getting all the window handles."}),"\n",(0,t.jsx)(i.h2,{id:"on-maximize",children:(0,t.jsx)(i.code,{children:"onMaximize"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after maximizing the window."}),"\n",(0,t.jsx)(i.h2,{id:"on-minimize",children:(0,t.jsx)(i.code,{children:"onMinimize"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after minimizing the window."}),"\n",(0,t.jsx)(i.h2,{id:"on-switch-to",children:(0,t.jsx)(i.code,{children:"onSwitchTo (nameOfHandle)"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after switching to the window by its name or handle."}),"\n",(0,t.jsx)(i.h2,{id:"on-switch-to-default",children:(0,t.jsx)(i.code,{children:"onSwitchToDefault"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after switching to the default main window."}),"\n",(0,t.jsx)(i.h2,{id:"on-switch-to-new",children:(0,t.jsx)(i.code,{children:"onSwitchToNew (windowType)"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after switching to the new window for the given type."}),"\n",(0,t.jsx)(i.h2,{id:"on-switch-to-new",children:(0,t.jsx)(i.code,{children:"onTakeScreenshot (fileName)"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after taking the screenshot with its file name."}),"\n",(0,t.jsx)(i.h2,{id:"on-verify-title",children:(0,t.jsx)(i.code,{children:"onVerifyTitle"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after verifying the window title."}),"\n",(0,t.jsx)(i.h2,{id:"on-viewport-size",children:(0,t.jsx)(i.code,{children:"onViewportSize"})}),"\n",(0,t.jsx)(i.p,{children:"This method will get executed after getting the viewport size."})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},9040:(e,i,n)=>{n.d(i,{Z:()=>s,a:()=>l});var t=n(79);const o={},d=t.createContext(o);function l(e){const i=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(d.Provider,{value:i},e.children)}}}]);