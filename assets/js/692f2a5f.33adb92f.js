"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7306],{8570:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(79);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=m(r),u=a,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(3262),a=(r(79),r(8570));const o={title:"FrameActions",sidebar_position:5},i=void 0,s={unversionedId:"actions/drivers/frame-actions",id:"actions/drivers/frame-actions",title:"FrameActions",description:"Static methods",source:"@site/docs/api/actions/drivers/frame-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/frame-actions",permalink:"/boyka-framework/api/actions/drivers/frame-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/frame-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696090102,formattedLastUpdatedAt:"Sep 30, 2023",sidebarPosition:5,frontMatter:{title:"FrameActions",sidebar_position:5},sidebar:"api",previous:{title:"DriverActions",permalink:"/boyka-framework/api/actions/drivers/driver-actions"},next:{title:"NavigateActions",permalink:"/boyka-framework/api/actions/drivers/navigate-actions"}},c={},m=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onFrame</code>",id:"on-frame",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>switchTo (name)</code>",id:"switch-to",level:3},{value:"<code>switchTo (index)</code>",id:"switch-to-index",level:3},{value:"<code>switchToParent</code>",id:"switch-to-parent",level:3}],l={toc:m},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"static-methods"},"Static methods"),(0,a.kt)("h3",{id:"on-frame"},(0,a.kt)("inlineCode",{parentName:"h3"},"onFrame")),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"IFrameActions")," which will expose different methods to handle IFrames."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"IFrameActions frameActions = FrameActions.onFrame ();\n")),(0,a.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,a.kt)("h3",{id:"switch-to"},(0,a.kt)("inlineCode",{parentName:"h3"},"switchTo (name)")),(0,a.kt)("p",null,"This method will switch to the given frame by it's name / ID."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.FrameActions.onFrame;\n. . .\nonFrame ().switchTo ("frame-name-or-id");\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In order to come out of this frame, use ",(0,a.kt)("a",{parentName:"p",href:"#switch-to-parent"},(0,a.kt)("inlineCode",{parentName:"a"},"switchToParent"))," method.")),(0,a.kt)("h3",{id:"switch-to-index"},(0,a.kt)("inlineCode",{parentName:"h3"},"switchTo (index)")),(0,a.kt)("p",null,"This method will switch to the given frame by it's index."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.FrameActions.onFrame;\n. . .\nonFrame ().switchTo (1);\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In order to come out of this frame, use ",(0,a.kt)("a",{parentName:"p",href:"#switch-to-parent"},(0,a.kt)("inlineCode",{parentName:"a"},"switchToParent"))," method.")),(0,a.kt)("h3",{id:"switch-to-parent"},(0,a.kt)("inlineCode",{parentName:"h3"},"switchToParent")),(0,a.kt)("p",null,"This method will switch to the parent frame of the current frame. This method is used to come out of any iframe."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.FrameActions.onFrame;\n. . .\nonFrame ().switchToParent ();\n")))}p.isMDXComponent=!0}}]);