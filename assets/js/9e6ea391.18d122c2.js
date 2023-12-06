"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[881],{6142:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});var a=n(5250),r=n(2366);const i={title:"ParallelSession",sidebar_position:2,slug:"/sessions/parallel-session"},o=void 0,t={id:"manager/parallel-session",title:"ParallelSession",description:"clearAllSessions",source:"@site/docs/api/manager/parallel-session.md",sourceDirName:"manager",slug:"/sessions/parallel-session",permalink:"/boyka-framework/api/sessions/parallel-session",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/manager/parallel-session.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1701842886,formattedLastUpdatedAt:"Dec 6, 2023",sidebarPosition:2,frontMatter:{title:"ParallelSession",sidebar_position:2,slug:"/sessions/parallel-session"},sidebar:"api",previous:{title:"DriverSession",permalink:"/boyka-framework/api/sessions/driver-session"},next:{title:"ErrorHandler",permalink:"/boyka-framework/api/utils/error-handler"}},l={},c=[{value:"<code>clearAllSessions</code>",id:"clear-all-session",level:2},{value:"<code>clearSession</code>",id:"clear-session",level:2},{value:"<code>createSession (platformType, configKey)</code>",id:"create-session",level:2},{value:"<code>createSession (persona, platformType, configKey)</code>",id:"create-session",level:2},{value:"<code>getCurrentPersona</code>",id:"get-current-persona",level:2},{value:"<code>getSession</code>",id:"get-session",level:2},{value:"<code>switchPersona (persona)</code>",id:"switch-persona",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"clear-all-session",children:(0,a.jsx)(s.code,{children:"clearAllSessions"})}),"\n",(0,a.jsx)(s.p,{children:"This method clears all the started sessions."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.clearAllSessions;\n. . .\nclearAllSessions ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"clear-session",children:(0,a.jsx)(s.code,{children:"clearSession"})}),"\n",(0,a.jsx)(s.p,{children:"This method clears the current session."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.clearSession;\n. . .\nclearSession ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"create-session",children:(0,a.jsx)(s.code,{children:"createSession (platformType, configKey)"})}),"\n",(0,a.jsx)(s.p,{children:"This method will create the session for the mentioned persona."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.manager.ParallelSession.createSession;\n. . .\ncreateSession (PlatformType.WEB, "test_chrome");\n'})}),"\n",(0,a.jsx)(s.h2,{id:"create-session",children:(0,a.jsx)(s.code,{children:"createSession (persona, platformType, configKey)"})}),"\n",(0,a.jsx)(s.p,{children:"This method will create the session for the mentioned persona."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.manager.ParallelSession.createSession;\n. . .\ncreateSession ("User 1", PlatformType.WEB, "test_chrome");\n'})}),"\n",(0,a.jsx)(s.h2,{id:"get-current-persona",children:(0,a.jsx)(s.code,{children:"getCurrentPersona"})}),"\n",(0,a.jsx)(s.p,{children:"This method gets the current session persona name."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.getCurrentPersona;\n. . .\nvar sessionPersona = getCurrentPersona ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"get-session",children:(0,a.jsx)(s.code,{children:"getSession"})}),"\n",(0,a.jsxs)(s.p,{children:["This method gets the current ",(0,a.jsx)(s.a,{href:"/api/sessions/driver-session",children:"Driver session"})]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar session = getSession ();\n"})}),"\n",(0,a.jsx)(s.h2,{id:"switch-persona",children:(0,a.jsx)(s.code,{children:"switchPersona (persona)"})}),"\n",(0,a.jsx)(s.p,{children:"This method will switch the current session context to a different persona. This is best when you are working on multiple user sessions."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.manager.ParallelSession.switchPersona;\n. . .\nswitchPersona ("User 2");\n'})})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2366:(e,s,n)=>{n.d(s,{Z:()=>t,a:()=>o});var a=n(79);const r={},i=a.createContext(r);function o(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);