"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9075],{9318:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"actions/elements/textbox-actions","title":"TextBoxActions","description":"Static methods","source":"@site/docs/api/actions/elements/textbox-actions.md","sourceDirName":"actions/elements","slug":"/actions/elements/textbox-actions","permalink":"/boyka-framework/api/actions/elements/textbox-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/textbox-actions.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1736611308000,"sidebarPosition":6,"frontMatter":{"title":"TextBoxActions","sidebar_position":6},"sidebar":"api","previous":{"title":"FingersActions","permalink":"/boyka-framework/api/actions/elements/fingers-actions"},"next":{"title":"IApiActionsListener","permalink":"/boyka-framework/api/actions/interfaces/listeners/api/api-actions-listener"}}');var i=o(7557),s=o(2557);const a={title:"TextBoxActions",sidebar_position:6},c=void 0,r={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onTextBox (locator)</code>",id:"on-textbox-locator",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>enterText (text)</code>",id:"enter-text",level:3},{value:"<code>focus</code>",id:"focus",level:3},{value:"<code>inputValue</code>",id:"input-value",level:3},{value:"<code>verifyInputValue</code>",id:"verify-input-value",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,i.jsx)(t.h3,{id:"on-textbox-locator",children:(0,i.jsx)(t.code,{children:"onTextBox (locator)"})}),"\n",(0,i.jsxs)(t.p,{children:["This will return ",(0,i.jsx)(t.code,{children:"ITextBoxActions"})," which will expose different methods to handle all text box related actions."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"ITextBoxActions textBoxActions = TextBoxActions.onTextBox (locator);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,i.jsx)(t.h3,{id:"enter-text",children:(0,i.jsx)(t.code,{children:"enterText (text)"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to enter the given text to the given element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.TextBoxActions.onTextBox;\n. . .\nonTextBox (locator).enterText (text);\n"})}),"\n",(0,i.jsx)(t.h3,{id:"focus",children:(0,i.jsx)(t.code,{children:"focus"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to focus the cursor on the input element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.TextBoxActions.onTextBox;\n. . .\nonTextBox (locator).focus ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"input-value",children:(0,i.jsx)(t.code,{children:"inputValue"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to get the value from the Textbox element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.TextBoxActions.onTextBox;\n. . .\nString value = onTextBox (locator).inputValue ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"verify-input-value",children:(0,i.jsx)(t.code,{children:"verifyInputValue"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to verify the value from the Textbox element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.TextBoxActions.onTextBox;\n. . .\nonTextBox (locator).verifyInputValue ()\n    .isEqualTo (userName);\n"})})]})}function x(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2557:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>c});var n=o(8225);const i={},s=n.createContext(i);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);