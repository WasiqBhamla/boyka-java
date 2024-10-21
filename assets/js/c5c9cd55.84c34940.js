"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4172],{7509:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=i(6106),n=i(8665);const a={title:"\ud83c\udfd7\ufe0f Create Page Action class",sidebar_position:3},r=void 0,s={id:"guides/ui/page-action",title:"\ud83c\udfd7\ufe0f Create Page Action class",description:"Since we have a common page object for all the three platforms (i.e.: Web. Android and iOS), we will create an Action class for the application where we will expose different methods which will take care of each page specific user flow.",source:"@site/docs/framework-docs/guides/ui/page-action.md",sourceDirName:"guides/ui",slug:"/guides/ui/page-action",permalink:"/boyka-framework/docs/guides/ui/page-action",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/page-action.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:17295291e5,sidebarPosition:3,frontMatter:{title:"\ud83c\udfd7\ufe0f Create Page Action class",sidebar_position:3},sidebar:"docs",previous:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/ios/create-page-object"},next:{title:"\u2705 Write Test class",permalink:"/boyka-framework/docs/guides/ui/write-test"}},c={},l=[];function p(e){const t={admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Since we have a common page object for all the three platforms (i.e.: Web. Android and iOS), we will create an Action class for the application where we will expose different methods which will take care of each page specific user flow."}),"\n",(0,o.jsxs)(t.p,{children:["Let's check out the following action class example below for our ",(0,o.jsx)(t.code,{children:"LoginPage"})," class we created:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.NavigateActions.navigate;\nimport static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\nimport static io.github.boykaframework.actions.elements.ElementActions.onElement;\nimport static io.github.boykaframework.actions.elements.FingerActions.withFinger;\nimport static io.github.boykaframework.actions.elements.TextBoxActions.onTextBox;\nimport static io.github.boykaframework.enums.PlatformType.WEB;\nimport static io.github.boykaframework.manager.ParallelSession.getSession;\nimport static io.github.boykaframework.testng.ui.saucedemo.pages.LoginPage.loginPage;\nimport static java.text.MessageFormat.format;\n\nimport io.github.boykaframework.enums.PlatformType;\n\npublic class SauceDemoActions {\n  private static final String URL = "https://www.saucedemo.com";\n\n  private final PlatformType platformType;\n\n  public SauceDemoActions () {\n    this.platformType = getSession ().getPlatformType ();\n  }\n\n  public void verifyLogin (final String userName, final String password) {\n    verifyNavigateToSite ();\n    onTextBox (loginPage ().getUsername ()).enterText (userName);\n    onTextBox (loginPage ().getPassword ()).enterText (password);\n    withMouse (loginPage ().getLoginButton ()).click ();\n    verifyLoggedIn ();\n  }\n\n  private void verifyNavigateToSite () {\n    if (this.platformType == WEB) {\n      navigate ().to (URL);\n      navigate ().verifyUrl ()\n        .startsWith (URL);\n    }\n  }\n\n  private void verifyLoggedIn () {\n    if (this.platformType == WEB) {\n      navigate ().verifyUrl ()\n        .isEqualTo (format ("{0}/inventory.html", URL));\n      onWindow ().verifyTitle ()\n        .isEqualTo ("Swag Labs");\n    }\n    onElement (homePage ().getMenuButton ()).verifyIsDisplayed ()\n      .isTrue ();\n    onElement (homePage ().getMenuButton ()).verifyIsEnabled ()\n      .isTrue ();\n  }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Notice how we are handling ",(0,o.jsx)(t.code,{children:"Web"})," platform by using an ",(0,o.jsx)(t.code,{children:"if"})," condition because the Web application user flow differs with Mobile app flow."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["Here we are using ",(0,o.jsx)(t.code,{children:"getSession ().getPlatformType ()"})," to get the platform name of the application running in the current session."]})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8665:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var o=i(7378);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);