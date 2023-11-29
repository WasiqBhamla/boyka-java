"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7306],{2358:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=i(5250),o=i(9040);const s={title:"FrameActions",sidebar_position:5},a=void 0,r={id:"actions/drivers/frame-actions",title:"FrameActions",description:"Static methods",source:"@site/docs/api/actions/drivers/frame-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/frame-actions",permalink:"/boyka-framework/api/actions/drivers/frame-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/frame-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1701256680,formattedLastUpdatedAt:"Nov 29, 2023",sidebarPosition:5,frontMatter:{title:"FrameActions",sidebar_position:5},sidebar:"api",previous:{title:"DriverActions",permalink:"/boyka-framework/api/actions/drivers/driver-actions"},next:{title:"NavigateActions",permalink:"/boyka-framework/api/actions/drivers/navigate-actions"}},c={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onFrame</code>",id:"on-frame",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>switchTo (name)</code>",id:"switch-to",level:3},{value:"<code>switchTo (index)</code>",id:"switch-to-index",level:3},{value:"<code>switchToParent</code>",id:"switch-to-parent",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,n.jsx)(t.h3,{id:"on-frame",children:(0,n.jsx)(t.code,{children:"onFrame"})}),"\n",(0,n.jsxs)(t.p,{children:["This will return ",(0,n.jsx)(t.code,{children:"IFrameActions"})," which will expose different methods to handle IFrames."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"IFrameActions frameActions = FrameActions.onFrame ();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,n.jsx)(t.h3,{id:"switch-to",children:(0,n.jsx)(t.code,{children:"switchTo (name)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will switch to the given frame by it's name / ID."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.FrameActions.onFrame;\n. . .\nonFrame ().switchTo ("frame-name-or-id");\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["In order to come out of this frame, use ",(0,n.jsx)(t.a,{href:"#switch-to-parent",children:(0,n.jsx)(t.code,{children:"switchToParent"})})," method."]})}),"\n",(0,n.jsx)(t.h3,{id:"switch-to-index",children:(0,n.jsx)(t.code,{children:"switchTo (index)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will switch to the given frame by it's index."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.FrameActions.onFrame;\n. . .\nonFrame ().switchTo (1);\n"})}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["In order to come out of this frame, use ",(0,n.jsx)(t.a,{href:"#switch-to-parent",children:(0,n.jsx)(t.code,{children:"switchToParent"})})," method."]})}),"\n",(0,n.jsx)(t.h3,{id:"switch-to-parent",children:(0,n.jsx)(t.code,{children:"switchToParent"})}),"\n",(0,n.jsx)(t.p,{children:"This method will switch to the parent frame of the current frame. This method is used to come out of any iframe."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.FrameActions.onFrame;\n. . .\nonFrame ().switchToParent ();\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9040:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>a});var n=i(79);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);