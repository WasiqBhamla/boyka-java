"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9980],{8704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(5250),o=n(3281);const s={title:"IContextActionsListener",sidebar_position:2},r=void 0,c={id:"actions/interfaces/listeners/drivers/context-actions-listener",title:"IContextActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/drivers/context-actions-listener.md",sourceDirName:"actions/interfaces/listeners/drivers",slug:"/actions/interfaces/listeners/drivers/context-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/context-actions-listener",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/drivers/context-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1704547663,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:2,frontMatter:{title:"IContextActionsListener",sidebar_position:2},sidebar:"api",previous:{title:"IAlertActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/alert-actions-listener"},next:{title:"ICookieActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/cookie-actions-listener"}},a={},l=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onContexts</code>",id:"on-contexts",level:2},{value:"<code>onCurrentContext</code>",id:"on-current-context",level:2},{value:"<code>onSwitchToNative</code>",id:"on-switch-to-native",level:2},{value:"<code>onSwitchToWebView (name)</code>",id:"on-switch-to-web-view-name",level:2},{value:"<code>onSwitchToWebView</code>",id:"on-switch-to-web-view",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.p,{children:"In order inject your customized logging for your reports or you want to perform any other action when handling Mobile contexts, you can implement this class and provide your implementations for different methods available in this listener interface."}),"\n",(0,i.jsx)(t.h2,{id:"on-contexts",children:(0,i.jsx)(t.code,{children:"onContexts"})}),"\n",(0,i.jsx)(t.p,{children:"This method will get executed after getting all the available contexts."}),"\n",(0,i.jsx)(t.h2,{id:"on-current-context",children:(0,i.jsx)(t.code,{children:"onCurrentContext"})}),"\n",(0,i.jsx)(t.p,{children:"This method will get executed after getting the current context."}),"\n",(0,i.jsx)(t.h2,{id:"on-switch-to-native",children:(0,i.jsx)(t.code,{children:"onSwitchToNative"})}),"\n",(0,i.jsx)(t.p,{children:"This method will get executed after switching to native context."}),"\n",(0,i.jsx)(t.h2,{id:"on-switch-to-web-view-name",children:(0,i.jsx)(t.code,{children:"onSwitchToWebView (name)"})}),"\n",(0,i.jsx)(t.p,{children:"This method will get executed after switching to web view context by its provided name."}),"\n",(0,i.jsx)(t.h2,{id:"on-switch-to-web-view",children:(0,i.jsx)(t.code,{children:"onSwitchToWebView"})}),"\n",(0,i.jsx)(t.p,{children:"This method will get executed after switching to the default web view context."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3281:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var i=n(79);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);