"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8897],{6550:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"actions/drivers/alert-actions","title":"AlertActions","description":"Static methods","source":"@site/docs/api/actions/drivers/alert-actions.md","sourceDirName":"actions/drivers","slug":"/actions/drivers/alert-actions","permalink":"/boyka-framework/api/actions/drivers/alert-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/alert-actions.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1733991588000,"sidebarPosition":1,"frontMatter":{"title":"AlertActions","sidebar_position":1},"sidebar":"api","previous":{"title":"DeviceActions","permalink":"/boyka-framework/api/actions/device/device-actions"},"next":{"title":"ContextActions","permalink":"/boyka-framework/api/actions/drivers/context-actions"}}');var r=i(7557),n=i(2887);const c={title:"AlertActions",sidebar_position:1},a=void 0,o={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onAlert</code>",id:"on-alert",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>accept (text)</code>",id:"accept-prompt",level:3},{value:"<code>accept</code>",id:"accept",level:3},{value:"<code>dismiss</code>",id:"dismiss",level:3},{value:"<code>verifyAccept</code>",id:"verify-accept",level:2},{value:"<code>verifyAccept (text)</code>",id:"verify-accept-alert",level:2},{value:"<code>verifyDismiss</code>",id:"verify-dismiss",level:2}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,r.jsx)(t.h3,{id:"on-alert",children:(0,r.jsx)(t.code,{children:"onAlert"})}),"\n",(0,r.jsxs)(t.p,{children:["This will return ",(0,r.jsx)(t.code,{children:"IAlertActions"})," which will expose different methods to handle Alerts."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"IAlertActions alertActions = AlertActions.onAlert ();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,r.jsx)(t.h3,{id:"accept-prompt",children:(0,r.jsx)(t.code,{children:"accept (text)"})}),"\n",(0,r.jsx)(t.p,{children:"This method will enter the text in the prompt, accept the Alert and will return the Alert message."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().accept ("some text");\n'})}),"\n",(0,r.jsx)(t.h3,{id:"accept",children:(0,r.jsx)(t.code,{children:"accept"})}),"\n",(0,r.jsx)(t.p,{children:"This method will accept the Alert and return the Alert message."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().accept ();\n"})}),"\n",(0,r.jsx)(t.h3,{id:"dismiss",children:(0,r.jsx)(t.code,{children:"dismiss"})}),"\n",(0,r.jsx)(t.p,{children:"This method will dismiss the Alert and return the Alert message."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().dismiss ();\n"})}),"\n",(0,r.jsx)(t.h2,{id:"verify-accept",children:(0,r.jsx)(t.code,{children:"verifyAccept"})}),"\n",(0,r.jsx)(t.p,{children:"This method is used to verify the alert message after accepting the alert."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyAccept ().isEqualTo ("Swag Labs");\n'})}),"\n",(0,r.jsx)(t.h2,{id:"verify-accept-alert",children:(0,r.jsx)(t.code,{children:"verifyAccept (text)"})}),"\n",(0,r.jsx)(t.p,{children:"This method is used to verify the alert message after entering the text in the prompt and accepting it."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyAccept ("Sample text").isEqualTo ("Swag Labs");\n'})}),"\n",(0,r.jsx)(t.h2,{id:"verify-dismiss",children:(0,r.jsx)(t.code,{children:"verifyDismiss"})}),"\n",(0,r.jsx)(t.p,{children:"This method is used to verify the alert message after dismissing the alert."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyDismiss ().isEqualTo ("Swag Labs");\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2887:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>a});var s=i(8225);const r={},n=s.createContext(r);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);