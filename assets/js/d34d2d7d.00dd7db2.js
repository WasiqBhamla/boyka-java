"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{4836:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"guides/ui/android/create-page-object","title":"\ud83d\udcc4 Create Page Object","description":"Example Page Object class","source":"@site/docs/framework-docs/guides/ui/android/create-page-object.md","sourceDirName":"guides/ui/android","slug":"/guides/ui/android/create-page-object","permalink":"/boyka-framework/docs/guides/ui/android/create-page-object","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/android/create-page-object.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1732513479000,"sidebarPosition":2,"frontMatter":{"title":"\ud83d\udcc4 Create Page Object","sidebar_position":2},"sidebar":"docs","previous":{"title":"\ud83e\ude9b Setup Configuration","permalink":"/boyka-framework/docs/guides/ui/android/setup-config"},"next":{"title":"\ud83e\ude9b Setup Configuration","permalink":"/boyka-framework/docs/guides/ui/ios/setup-config"}}');var n=i(6106),o=i(2036);const s={title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},r=void 0,c={},d=[{value:"Example Page Object class",id:"example-page-object-class",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"example-page-object-class",children:"Example Page Object class"}),"\n",(0,n.jsxs)(t.p,{children:["In the following example, I have used the ",(0,n.jsx)(t.a,{href:"/docs/guides/ui/web/create-page-object",children:"same page object"})," which I had created for Web assuming the application under test has Android and Web version with same UI."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static io.appium.java_client.AppiumBy.accessibilityId;\nimport static org.openqa.selenium.By.id;\n\nimport io.github.boykaframework.builders.Locator;\nimport lombok.Getter;\n\n@Getter\npublic class LoginPage {\n    private static final LoginPage LOGIN_PAGE = new LoginPage ();\n\n    public static LoginPage loginPage () {\n        return LOGIN_PAGE;\n    }\n\n    private final Locator loginButton = Locator.buildLocator ()\n        .web (id ("login-button"))\n        // highlight-next-line\n        .android (accessibilityId ("test-LOGIN"))\n        .name ("Login Button")\n        .build ();\n    private final Locator password = Locator.buildLocator ()\n        .web (id ("password"))\n        // highlight-next-line\n        .android (accessibilityId ("test-Password"))\n        .name ("Password")\n        .build ();\n    private final Locator username = Locator.buildLocator ()\n        .web (id ("user-name"))\n        // highlight-next-line\n        .android (accessibilityId ("test-Username"))\n        .name ("User Name")\n        .build ();\n\n    private LoginPage () {\n        // Avoid explicit class initialization.\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2036:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var a=i(7378);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);