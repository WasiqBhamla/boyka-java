"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[480],{9191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(6106),o=t(9252);const s={title:"FingerActions",sidebar_position:4},r=void 0,c={id:"actions/elements/finger-actions",title:"FingerActions",description:"Static methods",source:"@site/docs/api/actions/elements/finger-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/finger-actions",permalink:"/boyka-framework/api/actions/elements/finger-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/finger-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1717416871e3,sidebarPosition:4,frontMatter:{title:"FingerActions",sidebar_position:4},sidebar:"api",previous:{title:"ElementActions",permalink:"/boyka-framework/api/actions/elements/element-actions"},next:{title:"FingersActions",permalink:"/boyka-framework/api/actions/elements/fingers-actions"}},a={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withFinger (locator)</code>",id:"with-finger-locator",level:3},{value:"<code>withFinger</code>",id:"with-finger",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>swipe</code>",id:"swipe",level:3},{value:"<code>dragTo (target)</code>",id:"drag-to",level:3},{value:"<code>swipeTill</code>",id:"swipetill",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,i.jsx)(n.h3,{id:"with-finger-locator",children:(0,i.jsx)(n.code,{children:"withFinger (locator)"})}),"\n",(0,i.jsxs)(n.p,{children:["This will return ",(0,i.jsx)(n.code,{children:"IFingerActions"})," which will expose different methods to handle all finger related actions on an element."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"IFingerActions fingerActions = FingerActions.withFinger (locator);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"with-finger",children:(0,i.jsx)(n.code,{children:"withFinger"})}),"\n",(0,i.jsxs)(n.p,{children:["This will return ",(0,i.jsx)(n.code,{children:"IFingerActions"})," which will expose different methods to handle all finger related actions on the screen."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"IFingerActions fingerActions = FingerActions.withFinger ();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,i.jsx)(n.h3,{id:"swipe",children:(0,i.jsx)(n.code,{children:"swipe"})}),"\n",(0,i.jsx)(n.p,{children:"This method will swipe on the screen / element, i.e: finger will move from center of the screen to mentioned direction of the screen / element."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n. . .\nwithFinger (sourceElement).swipe (SwipeDirection.UP);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"drag-to",children:(0,i.jsx)(n.code,{children:"dragTo (target)"})}),"\n",(0,i.jsx)(n.p,{children:"This method will drag the source element to the target element."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n. . .\nLocator source = // source element to drag\nLocator target = // target element to drag the source to\nwithFinger (source).dragTo (target);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"swipetill",children:(0,i.jsx)(n.code,{children:"swipeTill"})}),"\n",(0,i.jsx)(n.p,{children:"This method will swipe left on the screen, i.e: finger will move from center of the screen to left of the screen."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.FingerActions.withFinger;\n. . .\nwithFinger (sourceElement).swipeTill (SwipeDirection.UP);\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9252:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var i=t(7378);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);