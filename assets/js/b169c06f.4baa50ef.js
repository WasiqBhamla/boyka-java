"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9094],{4583:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var o=t(6106),n=t(5782);const c={title:"ClickableActions",sidebar_position:1},s=void 0,l={id:"actions/elements/clickable-actions",title:"ClickableActions",description:"Static methods",source:"@site/docs/api/actions/elements/clickable-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/clickable-actions",permalink:"/boyka-framework/api/actions/elements/clickable-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/clickable-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1714371888e3,sidebarPosition:1,frontMatter:{title:"ClickableActions",sidebar_position:1},sidebar:"api",previous:{title:"WindowActions",permalink:"/boyka-framework/api/actions/drivers/window-actions"},next:{title:"DropDownActions",permalink:"/boyka-framework/api/actions/elements/drop-down-actions"}},a={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withMouse</code>",id:"with-mouse",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>click</code>",id:"click",level:3},{value:"<code>doubleClick</code>",id:"double-click",level:3},{value:"<code>rightClick</code>",id:"right-click",level:3},{value:"<code>clickAndHold</code>",id:"click-and-hold",level:3},{value:"<code>dragTo (locator)</code>",id:"drag-to",level:3},{value:"<code>hover</code>",id:"hover",level:3},{value:"<code>submit</code>",id:"submit",level:3}];function r(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,o.jsx)(i.h3,{id:"with-mouse",children:(0,o.jsx)(i.code,{children:"withMouse"})}),"\n",(0,o.jsxs)(i.p,{children:["This will return ",(0,o.jsx)(i.code,{children:"IClickableActions"})," which will expose different methods to handle mouse actions."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"IClickableActions mouseActions = ClickableActions.withMouse ();\n"})}),"\n",(0,o.jsx)(i.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,o.jsx)(i.h3,{id:"click",children:(0,o.jsx)(i.code,{children:"click"})}),"\n",(0,o.jsxs)(i.p,{children:["This method is used to click on the given element if it's a Web application or will perform ",(0,o.jsx)(i.code,{children:"tap"})," action if the element is on Mobile. It will also scroll the element into view before clicking on it (in Web application)"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).click ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"double-click",children:(0,o.jsx)(i.code,{children:"doubleClick"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to double click on the given element."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).doubleClick ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"right-click",children:(0,o.jsx)(i.code,{children:"rightClick"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to right click on the given element."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).rightClick ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"click-and-hold",children:(0,o.jsx)(i.code,{children:"clickAndHold"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to click and hold on the given element."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).clickAndHold ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"drag-to",children:(0,o.jsx)(i.code,{children:"dragTo (locator)"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to drag source element and drop it on the target element."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ClickableActions.withMouse;\n. . .\nLocator source = // source element to drag\nLocator target = // target element to drag the source to\nwithMouse (source).dragTo (target);\n"})}),"\n",(0,o.jsx)(i.h3,{id:"hover",children:(0,o.jsx)(i.code,{children:"hover"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to hover on the given element."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).hover ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"submit",children:(0,o.jsx)(i.code,{children:"submit"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to submit the given element."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).submit ();\n"})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},5782:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>l});var o=t(7378);const n={},c=o.createContext(n);function s(e){const i=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(c.Provider,{value:i},e.children)}}}]);