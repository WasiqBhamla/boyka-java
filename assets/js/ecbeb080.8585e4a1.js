"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4466],{4160:(e,o,i)=>{i.r(o),i.d(o,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"actions/drivers/cookie-actions","title":"CookieActions","description":"Static methods","source":"@site/docs/api/actions/drivers/cookie-actions.md","sourceDirName":"actions/drivers","slug":"/actions/drivers/cookie-actions","permalink":"/boyka-framework/api/actions/drivers/cookie-actions","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/cookie-actions.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1733991588000,"sidebarPosition":3,"frontMatter":{"title":"CookieActions","sidebar_position":3},"sidebar":"api","previous":{"title":"ContextActions","permalink":"/boyka-framework/api/actions/drivers/context-actions"},"next":{"title":"DriverActions","permalink":"/boyka-framework/api/actions/drivers/driver-actions"}}');var s=i(7557),n=i(2887);const c={title:"CookieActions",sidebar_position:3},a=void 0,r={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withCookies</code>",id:"with-cookies",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>cookie (name)</code>",id:"cookie-name",level:3},{value:"<code>cookies</code>",id:"cookies",level:3},{value:"<code>deleteAll</code>",id:"delete-all",level:3},{value:"<code>delete (name)</code>",id:"delete-name",level:3}];function l(e){const o={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,s.jsx)(o.h3,{id:"with-cookies",children:(0,s.jsx)(o.code,{children:"withCookies"})}),"\n",(0,s.jsxs)(o.p,{children:["This will return ",(0,s.jsx)(o.code,{children:"ICookieActions"})," which will expose different methods to handle Cookies."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-java",children:"ICookieActions cookiesActions = CookieActions.withCookies ();\n"})}),"\n",(0,s.jsx)(o.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,s.jsx)(o.h3,{id:"cookie-name",children:(0,s.jsx)(o.code,{children:"cookie (name)"})}),"\n",(0,s.jsx)(o.p,{children:"This method will get the cookie from the browser based on it's name."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.CookieActions.withCookies;\nimport org.openqa.selenium.Cookie;\n. . .\nCookie c = withCookies ().cookie ("cookie-name");\n'})}),"\n",(0,s.jsx)(o.h3,{id:"cookies",children:(0,s.jsx)(o.code,{children:"cookies"})}),"\n",(0,s.jsx)(o.p,{children:"This method will get all the cookie from the browser and return all the cookie names as list."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.CookieActions.withCookies;\n. . .\nList<String> cookieNames = withCookies ().cookies ();\n"})}),"\n",(0,s.jsx)(o.h3,{id:"delete-all",children:(0,s.jsx)(o.code,{children:"deleteAll"})}),"\n",(0,s.jsx)(o.p,{children:"This method will delete all the cookies from the browser."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.CookieActions.withCookies;\n. . .\nwithCookies ().deleteAll ();\n"})}),"\n",(0,s.jsx)(o.h3,{id:"delete-name",children:(0,s.jsx)(o.code,{children:"delete (name)"})}),"\n",(0,s.jsx)(o.p,{children:"This method will delete the cookie from the browser based on it's name."}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.CookieActions.withCookies;\n. . .\nwithCookies ().delete ("cookie-name");\n'})})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2887:(e,o,i)=>{i.d(o,{R:()=>c,x:()=>a});var t=i(8225);const s={},n=t.createContext(s);function c(e){const o=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);