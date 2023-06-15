"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[881],{167:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(5721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return a?r.createElement(g,o(o({ref:t},p),{},{components:a})):r.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2755:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(4715),n=(a(5721),a(167));const s={title:"ParallelSession",sidebar_position:2,slug:"/sessions/parallel-session"},o=void 0,i={unversionedId:"manager/parallel-session",id:"manager/parallel-session",title:"ParallelSession",description:"clearAllSessions",source:"@site/docs/api/manager/parallel-session.md",sourceDirName:"manager",slug:"/sessions/parallel-session",permalink:"/boyka-framework/api/sessions/parallel-session",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/manager/parallel-session.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1686820601,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:2,frontMatter:{title:"ParallelSession",sidebar_position:2,slug:"/sessions/parallel-session"},sidebar:"api",previous:{title:"DriverSession",permalink:"/boyka-framework/api/sessions/driver-session"},next:{title:"ErrorHandler",permalink:"/boyka-framework/api/utils/error-handler"}},l={},c=[{value:"<code>clearAllSessions</code>",id:"clear-all-session",level:2},{value:"<code>clearSession</code>",id:"clear-session",level:2},{value:"<code>createSession (platformType, configKey)</code>",id:"create-session",level:2},{value:"<code>createSession (persona, platformType, configKey)</code>",id:"create-session",level:2},{value:"<code>getCurrentPersona</code>",id:"get-current-persona",level:2},{value:"<code>getSession</code>",id:"get-session",level:2},{value:"<code>switchPersona (persona)</code>",id:"switch-persona",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"clear-all-session"},(0,n.kt)("inlineCode",{parentName:"h2"},"clearAllSessions")),(0,n.kt)("p",null,"This method clears all the started sessions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.clearAllSessions;\n. . .\nclearAllSessions ();\n")),(0,n.kt)("h2",{id:"clear-session"},(0,n.kt)("inlineCode",{parentName:"h2"},"clearSession")),(0,n.kt)("p",null,"This method clears the current session."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.clearSession;\n. . .\nclearSession ();\n")),(0,n.kt)("h2",{id:"create-session"},(0,n.kt)("inlineCode",{parentName:"h2"},"createSession (platformType, configKey)")),(0,n.kt)("p",null,"This method will create the session for the mentioned persona."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.ParallelSession.createSession;\n. . .\ncreateSession (PlatformType.WEB, "test_chrome");\n')),(0,n.kt)("h2",{id:"create-session"},(0,n.kt)("inlineCode",{parentName:"h2"},"createSession (persona, platformType, configKey)")),(0,n.kt)("p",null,"This method will create the session for the mentioned persona."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.ParallelSession.createSession;\n. . .\ncreateSession ("User 1", PlatformType.WEB, "test_chrome");\n')),(0,n.kt)("h2",{id:"get-current-persona"},(0,n.kt)("inlineCode",{parentName:"h2"},"getCurrentPersona")),(0,n.kt)("p",null,"This method gets the current session persona name."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.getCurrentPersona;\n. . .\nvar sessionPersona = getCurrentPersona ();\n")),(0,n.kt)("h2",{id:"get-session"},(0,n.kt)("inlineCode",{parentName:"h2"},"getSession")),(0,n.kt)("p",null,"This method gets the current ",(0,n.kt)("a",{parentName:"p",href:"/api/sessions/driver-session"},"Driver session")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\n. . .\nvar session = getSession ();\n")),(0,n.kt)("h2",{id:"switch-persona"},(0,n.kt)("inlineCode",{parentName:"h2"},"switchPersona (persona)")),(0,n.kt)("p",null,"This method will switch the current session context to a different persona. This is best when you are working on multiple user sessions."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.manager.ParallelSession.switchPersona;\n. . .\nswitchPersona ("User 2");\n')))}u.isMDXComponent=!0}}]);