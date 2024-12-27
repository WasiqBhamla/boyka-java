"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1731],{9039:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"guides/ui/web/create-page-object","title":"\ud83d\udcc4 Create Page Object","description":"In Boyka, we have decoupled the page object from the WebDriver class. This is done by creating a Page Object class and defining locators using Locator builder class.","source":"@site/docs/framework-docs/guides/ui/web/create-page-object.md","sourceDirName":"guides/ui/web","slug":"/guides/ui/web/create-page-object","permalink":"/boyka-framework/docs/guides/ui/web/create-page-object","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/web/create-page-object.md","tags":[],"version":"current","lastUpdatedBy":"Mohammad Faisal Khatri","lastUpdatedAt":1735287198000,"sidebarPosition":2,"frontMatter":{"title":"\ud83d\udcc4 Create Page Object","sidebar_position":2},"sidebar":"docs","previous":{"title":"\ud83e\ude9b Setup Configuration","permalink":"/boyka-framework/docs/guides/ui/web/setup-config"},"next":{"title":"\ud83e\ude9b Setup Configuration","permalink":"/boyka-framework/docs/guides/ui/android/setup-config"}}');var n=o(7557),i=o(2887);const r={title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},s=void 0,c={},d=[{value:"Example Page Object class",id:"example-page-object-class",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In Boyka, we have decoupled the page object from the ",(0,n.jsx)(t.code,{children:"WebDriver"})," class. This is done by creating a Page Object class and defining locators using ",(0,n.jsx)(t.code,{children:"Locator"})," builder class."]}),"\n",(0,n.jsx)(t.h2,{id:"example-page-object-class",children:"Example Page Object class"}),"\n",(0,n.jsxs)(t.p,{children:["In the following example, I've used Lombok ",(0,n.jsx)(t.code,{children:"@Getter"})," to auto-generate getters for all the declared locators."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import io.github.boykaframework.builders.Locator;\nimport lombok.Getter;\n\n@Getter\npublic class LoginPage {\n    public static LoginPage loginPage () {\n        return new LoginPage ();\n    }\n\n    private final Locator loginButton = Locator.buildLocator ()\n        .web (id ("login-button"))\n        .name ("Login Button")\n        .build ();\n    private final Locator password = Locator.buildLocator ()\n        .web (id ("password"))\n        .name ("Password")\n        .build ();\n    private final Locator username = Locator.buildLocator ()\n        .web (id ("user-name"))\n        .name ("User Name")\n        .build ();\n\n    private LoginPage () {\n        // Avoid explicit class initialization.\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2887:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>s});var a=o(8225);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);