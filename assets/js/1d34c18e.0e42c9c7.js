"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[480],{9235:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"actions/elements/finger-actions","title":"FingerActions","description":"Static methods","source":"@site/docs/api/actions/elements/finger-actions.md","sourceDirName":"actions/elements","slug":"/actions/elements/finger-actions","permalink":"/boyka-framework/api/actions/elements/finger-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/finger-actions.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1736611308000,"sidebarPosition":4,"frontMatter":{"title":"FingerActions","sidebar_position":4},"sidebar":"api","previous":{"title":"ElementActions","permalink":"/boyka-framework/api/actions/elements/element-actions"},"next":{"title":"FingersActions","permalink":"/boyka-framework/api/actions/elements/fingers-actions"}}');var s=i(7557),o=i(2557);const r={title:"FingerActions",sidebar_position:4},c=void 0,l={},a=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withFinger (locator)</code>",id:"with-finger-locator",level:3},{value:"<code>withFinger</code>",id:"with-finger",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>doubleTap</code>",id:"doubletap",level:3},{value:"<code>longPress</code>",id:"longpress",level:3},{value:"<code>tap</code>",id:"tap",level:3},{value:"<code>swipe</code>",id:"swipe",level:3},{value:"<code>dragTo (target)</code>",id:"drag-to",level:3},{value:"<code>swipeTill</code>",id:"swipetill",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,s.jsx)(n.h3,{id:"with-finger-locator",children:(0,s.jsx)(n.code,{children:"withFinger (locator)"})}),"\n",(0,s.jsxs)(n.p,{children:["This will return ",(0,s.jsx)(n.code,{children:"IFingerActions"})," which will expose different methods to handle all finger related actions on an element."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"IFingerActions fingerActions = FingerActions.withFinger (locator);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"with-finger",children:(0,s.jsx)(n.code,{children:"withFinger"})}),"\n",(0,s.jsxs)(n.p,{children:["This will return ",(0,s.jsx)(n.code,{children:"IFingerActions"})," which will expose different methods to handle all finger related actions on the screen."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"IFingerActions fingerActions = FingerActions.withFinger ();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,s.jsx)(n.h3,{id:"doubletap",children:(0,s.jsx)(n.code,{children:"doubleTap"})}),"\n",(0,s.jsx)(n.p,{children:"This method will double tap on the screen / element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n\nwithFinger (sourceElement).doubleTap ();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"longpress",children:(0,s.jsx)(n.code,{children:"longPress"})}),"\n",(0,s.jsx)(n.p,{children:"This method will long press on the screen / element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n\nwithFinger (sourceElement).longPress ();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"tap",children:(0,s.jsx)(n.code,{children:"tap"})}),"\n",(0,s.jsx)(n.p,{children:"This method will tap on the screen / element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n\nwithFinger (sourceElement).tap ();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"swipe",children:(0,s.jsx)(n.code,{children:"swipe"})}),"\n",(0,s.jsx)(n.p,{children:"This method will swipe on the screen / element, i.e: finger will move from center of the screen to mentioned direction of the screen / element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n. . .\nwithFinger (sourceElement).swipe (SwipeDirection.UP);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"drag-to",children:(0,s.jsx)(n.code,{children:"dragTo (target)"})}),"\n",(0,s.jsx)(n.p,{children:"This method will drag the source element to the target element."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n. . .\nLocator source = // source element to drag\nLocator target = // target element to drag the source to\nwithFinger (source).dragTo (target);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"swipetill",children:(0,s.jsx)(n.code,{children:"swipeTill"})}),"\n",(0,s.jsx)(n.p,{children:"This method will swipe left on the screen, i.e: finger will move from center of the screen to left of the screen."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n. . .\nwithFinger (sourceElement).swipeTill (SwipeDirection.UP);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},2557:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(8225);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);