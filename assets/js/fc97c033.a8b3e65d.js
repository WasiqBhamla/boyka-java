"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9835],{4636:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var o=i(5250),n=i(1656);const l={title:"IElementActionsListener",sidebar_position:3},r=void 0,d={id:"actions/interfaces/listeners/elements/element-actions-listener",title:"IElementActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/elements/element-actions-listener.md",sourceDirName:"actions/interfaces/listeners/elements",slug:"/actions/interfaces/listeners/elements/element-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/element-actions-listener",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/elements/element-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707728850,formattedLastUpdatedAt:"Feb 12, 2024",sidebarPosition:3,frontMatter:{title:"IElementActionsListener",sidebar_position:3},sidebar:"api",previous:{title:"IDropDownActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/drop-down-actions-listener"},next:{title:"IFingerActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/finger-actions-listener"}},s={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onClear (locator)</code>",id:"on-clear",level:2},{value:"<code>onGetAttribute (locator, attribute)</code>",id:"on-get-attribute",level:2},{value:"<code>onGetStyle (locator, styleName)</code>",id:"on-get-style",level:2},{value:"<code>onGetText (locator)</code>",id:"on-get-text",level:2},{value:"<code>onIsDisplayed (locator)</code>",id:"on-is-displayed",level:2},{value:"<code>onIsEnabled (locator)</code>",id:"on-is-enabled",level:2},{value:"<code>onIsSelected (locator)</code>",id:"on-is-selected",level:2},{value:"<code>onScrollIntoView (locator)</code>",id:"on-scroll-into-view",level:2},{value:"<code>onVerifyAttribute (locator, attribute)</code>",id:"on-verify-attribute",level:2},{value:"<code>onVerifyIsDisplayed (locator)</code>",id:"on-verify-is-displayed",level:2},{value:"<code>onVerifyIsEnabled (locator)</code>",id:"on-verify-is-enabled",level:2},{value:"<code>onVerifyIsSelected (locator)</code>",id:"on-verify-is-selected",level:2},{value:"<code>onVerifyStyle (locator, styleName)</code>",id:"on-verify-style",level:2},{value:"<code>onVerifyText (locator)</code>",id:"on-verify-text",level:2}];function a(e){const t={code:"code",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,o.jsx)(t.p,{children:"In order inject your customized logging for your reports or you want to perform any other action when handling the Element related actions, you can implement this class and provide your implementations for different methods available in this listener interface."}),"\n",(0,o.jsx)(t.h2,{id:"on-clear",children:(0,o.jsx)(t.code,{children:"onClear (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after clearing the value in the element located by using the provided locator."}),"\n",(0,o.jsx)(t.h2,{id:"on-get-attribute",children:(0,o.jsx)(t.code,{children:"onGetAttribute (locator, attribute)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after getting the given attribute in the element located by using the provided locator."}),"\n",(0,o.jsx)(t.h2,{id:"on-get-style",children:(0,o.jsx)(t.code,{children:"onGetStyle (locator, styleName)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after getting the given style in the element located by using the provided locator."}),"\n",(0,o.jsx)(t.h2,{id:"on-get-text",children:(0,o.jsx)(t.code,{children:"onGetText (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after getting the text of the element located by using the provided locator."}),"\n",(0,o.jsx)(t.h2,{id:"on-is-displayed",children:(0,o.jsx)(t.code,{children:"onIsDisplayed (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after checking if the element located by using the provided locator is displayed."}),"\n",(0,o.jsx)(t.h2,{id:"on-is-enabled",children:(0,o.jsx)(t.code,{children:"onIsEnabled (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after checking if the element located by using the provided locator is enabled."}),"\n",(0,o.jsx)(t.h2,{id:"on-is-selected",children:(0,o.jsx)(t.code,{children:"onIsSelected (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after checking if the element located by using the provided locator is selected."}),"\n",(0,o.jsx)(t.h2,{id:"on-scroll-into-view",children:(0,o.jsx)(t.code,{children:"onScrollIntoView (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after scroll the element located by using the provided locator into view."}),"\n",(0,o.jsx)(t.h2,{id:"on-verify-attribute",children:(0,o.jsx)(t.code,{children:"onVerifyAttribute (locator, attribute)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after verifying the provided attribute value of the element located by using the provided locator into view."}),"\n",(0,o.jsx)(t.h2,{id:"on-verify-is-displayed",children:(0,o.jsx)(t.code,{children:"onVerifyIsDisplayed (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after verifying the element located by using the provided locator is displayed."}),"\n",(0,o.jsx)(t.h2,{id:"on-verify-is-enabled",children:(0,o.jsx)(t.code,{children:"onVerifyIsEnabled (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after verifying the element located by using the provided locator is enabled."}),"\n",(0,o.jsx)(t.h2,{id:"on-verify-is-selected",children:(0,o.jsx)(t.code,{children:"onVerifyIsSelected (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after verifying the element located by using the provided locator is selected."}),"\n",(0,o.jsx)(t.h2,{id:"on-verify-style",children:(0,o.jsx)(t.code,{children:"onVerifyStyle (locator, styleName)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after verifying the provided style of the element located by using the provided locator."}),"\n",(0,o.jsx)(t.h2,{id:"on-verify-text",children:(0,o.jsx)(t.code,{children:"onVerifyText (locator)"})}),"\n",(0,o.jsx)(t.p,{children:"This method will get executed after verifying the text of the element located by using the provided locator."})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1656:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>r});var o=i(79);const n={},l=o.createContext(n);function r(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);