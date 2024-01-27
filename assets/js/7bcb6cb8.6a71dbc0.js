"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[502],{5853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=n(5250),o=n(1456);const s={title:"FingersActions",sidebar_position:5},r=void 0,a={id:"actions/elements/fingers-actions",title:"FingersActions",description:"Static methods",source:"@site/docs/api/actions/elements/fingers-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/fingers-actions",permalink:"/boyka-framework/api/actions/elements/fingers-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/fingers-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1706355812,formattedLastUpdatedAt:"Jan 27, 2024",sidebarPosition:5,frontMatter:{title:"FingersActions",sidebar_position:5},sidebar:"api",previous:{title:"FingerActions",permalink:"/boyka-framework/api/actions/elements/finger-actions"},next:{title:"TextBoxActions",permalink:"/boyka-framework/api/actions/elements/textbox-actions"}},c={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withFingers (locator)</code>",id:"with-fingers",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>zoomIn</code>",id:"zoom-in",level:3},{value:"<code>zoomOut</code>",id:"zoom-out",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,i.jsx)(t.h3,{id:"with-fingers",children:(0,i.jsx)(t.code,{children:"withFingers (locator)"})}),"\n",(0,i.jsxs)(t.p,{children:["This will return ",(0,i.jsx)(t.code,{children:"IFingersActions"})," which will expose different methods to handle all multi fingers related actions on an element."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"IFingersActions fingersActions = FingersActions.withFingers (locator);\n"})}),"\n",(0,i.jsx)(t.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,i.jsx)(t.h3,{id:"zoom-in",children:(0,i.jsx)(t.code,{children:"zoomIn"})}),"\n",(0,i.jsx)(t.p,{children:"This method will zoom in on an element, i.e: one finger will move from the center of the element to the left direction and other finger will move from the center of the element to th right direction."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.elements.FingersActions.withFingers;\n. . .\nwithFingers (imageElement).zoomIn ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"zoom-out",children:(0,i.jsx)(t.code,{children:"zoomOut"})}),"\n",(0,i.jsx)(t.p,{children:"This method will zoom out from an element, i.e: one finger will move from the left edge of the element to the center and other finger will move from the right edge of the element to th center."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.elements.FingersActions.withFingers;\n. . .\nwithFingers (imageElement).zoomOut ();\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1456:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(79);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);