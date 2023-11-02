"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1161],{3565:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var t=i(5250),s=i(9040);const n={title:"CookieActions",sidebar_position:3},c=void 0,a={id:"actions/drivers/cookie-actions",title:"CookieActions",description:"Static methods",source:"@site/docs/api/actions/drivers/cookie-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/cookie-actions",permalink:"/boyka-framework/api/actions/drivers/cookie-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/cookie-actions.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1698906182,formattedLastUpdatedAt:"Nov 2, 2023",sidebarPosition:3,frontMatter:{title:"CookieActions",sidebar_position:3},sidebar:"api",previous:{title:"ContextActions",permalink:"/boyka-framework/api/actions/drivers/context-actions"},next:{title:"DriverActions",permalink:"/boyka-framework/api/actions/drivers/driver-actions"}},r={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withCookies</code>",id:"with-cookies",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>cookie (name)</code>",id:"cookie-name",level:3},{value:"<code>cookies</code>",id:"cookies",level:3},{value:"<code>deleteAll</code>",id:"delete-all",level:3},{value:"<code>delete (name)</code>",id:"delete-name",level:3}];function l(e){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,t.jsx)(o.h3,{id:"with-cookies",children:(0,t.jsx)(o.code,{children:"withCookies"})}),"\n",(0,t.jsxs)(o.p,{children:["This will return ",(0,t.jsx)(o.code,{children:"ICookieActions"})," which will expose different methods to handle Cookies."]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:"ICookieActions cookiesActions = CookieActions.withCookies ();\n"})}),"\n",(0,t.jsx)(o.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,t.jsx)(o.h3,{id:"cookie-name",children:(0,t.jsx)(o.code,{children:"cookie (name)"})}),"\n",(0,t.jsx)(o.p,{children:"This method will get the cookie from the browser based on it's name."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.CookieActions.withCookies;\nimport org.openqa.selenium.Cookie;\n. . .\nCookie c = withCookies ().cookie ("cookie-name");\n'})}),"\n",(0,t.jsx)(o.h3,{id:"cookies",children:(0,t.jsx)(o.code,{children:"cookies"})}),"\n",(0,t.jsx)(o.p,{children:"This method will get all the cookie from the browser and return all the cookie names as list."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.CookieActions.withCookies;\n. . .\nList<String> cookieNames = withCookies ().cookies ();\n"})}),"\n",(0,t.jsx)(o.h3,{id:"delete-all",children:(0,t.jsx)(o.code,{children:"deleteAll"})}),"\n",(0,t.jsx)(o.p,{children:"This method will delete all the cookies from the browser."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:"import static com.github.wasiqb.boyka.actions.drivers.CookieActions.withCookies;\n. . .\nwithCookies ().deleteAll ();\n"})}),"\n",(0,t.jsx)(o.h3,{id:"delete-name",children:(0,t.jsx)(o.code,{children:"delete (name)"})}),"\n",(0,t.jsx)(o.p,{children:"This method will delete the cookie from the browser based on it's name."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-java",children:'import static com.github.wasiqb.boyka.actions.drivers.CookieActions.withCookies;\n. . .\nwithCookies ().delete ("cookie-name");\n'})})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},9040:(e,o,i)=>{i.d(o,{Z:()=>a,a:()=>c});var t=i(79);const s={},n=t.createContext(s);function c(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);