"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9778],{1698:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(5250),a=t(2459);const o={title:"ErrorHandler",sidebar_position:1},s=void 0,i={id:"utils/error-handler",title:"ErrorHandler",description:"handleAndThrow",source:"@site/docs/api/utils/error-handler.md",sourceDirName:"utils",slug:"/utils/error-handler",permalink:"/boyka-framework/api/utils/error-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/utils/error-handler.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1705300823,formattedLastUpdatedAt:"Jan 15, 2024",sidebarPosition:1,frontMatter:{title:"ErrorHandler",sidebar_position:1},sidebar:"api",previous:{title:"ParallelSession",permalink:"/boyka-framework/api/sessions/parallel-session"},next:{title:"JsonUtil",permalink:"/boyka-framework/api/utils/json-util"}},d={},l=[{value:"<code>handleAndThrow</code>",id:"handleandthrow",level:2}];function c(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h2,{id:"handleandthrow",children:(0,n.jsx)(r.code,{children:"handleAndThrow"})}),"\n",(0,n.jsx)(r.p,{children:"This method is used to handle errors, logs the framework specific stack traces and throw the wrapped framework error."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.utils.ErrorHandler.handleAndThrow;\nimport static com.github.wasiqb.boyka.enums.Message.ERROR_PARSING_RESPONSE_BODY;\n. . .\ntry {\n    . . .\n} catch (IOException e) {\n    handleAndThrow (ERROR_PARSING_RESPONSE_BODY, e);\n}\n. . .\n"})})]})}function h(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},2459:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>s});var n=t(79);const a={},o=n.createContext(a);function s(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);