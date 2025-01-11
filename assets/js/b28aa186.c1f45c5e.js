"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7334],{3340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"actions/interfaces/listeners/drivers/context-actions-listener","title":"IContextActionsListener","description":"Implementation","source":"@site/docs/api/actions/interfaces/listeners/drivers/context-actions-listener.md","sourceDirName":"actions/interfaces/listeners/drivers","slug":"/actions/interfaces/listeners/drivers/context-actions-listener","permalink":"/boyka-framework/api/actions/interfaces/listeners/drivers/context-actions-listener","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/drivers/context-actions-listener.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1736611308000,"sidebarPosition":2,"frontMatter":{"title":"IContextActionsListener","sidebar_position":2},"sidebar":"api","previous":{"title":"IAlertActionsListener","permalink":"/boyka-framework/api/actions/interfaces/listeners/drivers/alert-actions-listener"},"next":{"title":"ICookieActionsListener","permalink":"/boyka-framework/api/actions/interfaces/listeners/drivers/cookie-actions-listener"}}');var o=n(7557),s=n(2557);const r={title:"IContextActionsListener",sidebar_position:2},c=void 0,a={},l=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onContexts</code>",id:"on-contexts",level:2},{value:"<code>onCurrentContext</code>",id:"on-current-context",level:2},{value:"<code>onSwitchToNative</code>",id:"on-switch-to-native",level:2},{value:"<code>onSwitchToWebView (name)</code>",id:"on-switch-to-web-view-name",level:2},{value:"<code>onSwitchToWebView</code>",id:"on-switch-to-web-view",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.p,{children:"In order inject your customized logging for your reports or you want to perform any other action when handling Mobile contexts, you can implement this class and provide your implementations for different methods available in this listener interface."}),"\n",(0,o.jsx)(t.h2,{id:"on-contexts",children:(0,o.jsx)(t.code,{children:"onContexts"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after getting all the available contexts."}),"\n",(0,o.jsx)(t.h2,{id:"on-current-context",children:(0,o.jsx)(t.code,{children:"onCurrentContext"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after getting the current context."}),"\n",(0,o.jsx)(t.h2,{id:"on-switch-to-native",children:(0,o.jsx)(t.code,{children:"onSwitchToNative"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after switching to native context."}),"\n",(0,o.jsx)(t.h2,{id:"on-switch-to-web-view-name",children:(0,o.jsx)(t.code,{children:"onSwitchToWebView (name)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after switching to web view context by its provided name."}),"\n",(0,o.jsx)(t.h2,{id:"on-switch-to-web-view",children:(0,o.jsx)(t.code,{children:"onSwitchToWebView"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after switching to the default web view context."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2557:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(8225);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);