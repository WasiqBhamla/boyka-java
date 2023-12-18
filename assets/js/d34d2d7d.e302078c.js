"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7187],{5760:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=a(5250),n=a(1118);const o={title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},s=void 0,r={id:"guides/ui/android/create-page-object",title:"\ud83d\udcc4 Create Page Object",description:"Example Page Object class",source:"@site/docs/framework-docs/guides/ui/android/create-page-object.md",sourceDirName:"guides/ui/android",slug:"/guides/ui/android/create-page-object",permalink:"/boyka-framework/docs/guides/ui/android/create-page-object",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/android/create-page-object.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1702884701,formattedLastUpdatedAt:"Dec 18, 2023",sidebarPosition:2,frontMatter:{title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/android/setup-config"},next:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/ios/setup-config"}},c={},d=[{value:"Example Page Object class",id:"example-page-object-class",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"example-page-object-class",children:"Example Page Object class"}),"\n",(0,i.jsxs)(t.p,{children:["In the following example, I have used the ",(0,i.jsx)(t.a,{href:"/docs/guides/ui/web/create-page-object",children:"same page object"})," which I had created for Web assuming the application under test has Android and Web version with same UI."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import static io.appium.java_client.AppiumBy.accessibilityId;\nimport static org.openqa.selenium.By.id;\n\nimport com.github.wasiqb.boyka.builders.Locator;\nimport lombok.Getter;\n\n@Getter\npublic class LoginPage {\n    private static final LoginPage LOGIN_PAGE = new LoginPage ();\n\n    public static LoginPage loginPage () {\n        return LOGIN_PAGE;\n    }\n\n    private final Locator loginButton = Locator.buildLocator ()\n        .web (id ("login-button"))\n        // highlight-next-line\n        .android (accessibilityId ("test-LOGIN"))\n        .name ("Login Button")\n        .build ();\n    private final Locator password = Locator.buildLocator ()\n        .web (id ("password"))\n        // highlight-next-line\n        .android (accessibilityId ("test-Password"))\n        .name ("Password")\n        .build ();\n    private final Locator username = Locator.buildLocator ()\n        .web (id ("user-name"))\n        // highlight-next-line\n        .android (accessibilityId ("test-Username"))\n        .name ("User Name")\n        .build ();\n\n    private LoginPage () {\n        // Avoid explicit class initialization.\n    }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1118:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>s});var i=a(79);const n={},o=i.createContext(n);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);