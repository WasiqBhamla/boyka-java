"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4340],{7017:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(9214),s=i(9425);const o={title:"\u2705 Write Test class",sidebar_position:4},a=void 0,r={id:"guides/ui/write-test",title:"\u2705 Write Test class",description:"Once the page object class is created with locators for all the platforms and the application action class is also created, we can now use it to interact with the page in our tests by calling the corresponding methods from the action class.",source:"@site/docs/framework-docs/guides/ui/write-test.md",sourceDirName:"guides/ui",slug:"/guides/ui/write-test",permalink:"/boyka-framework/docs/guides/ui/write-test",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/write-test.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1712509315e3,sidebarPosition:4,frontMatter:{title:"\u2705 Write Test class",sidebar_position:4},sidebar:"docs",previous:{title:"\ud83c\udfd7\ufe0f Create Page Action class",permalink:"/boyka-framework/docs/guides/ui/page-action"},next:{title:"\ud83d\udd78\ufe0f Appium with Selenium Grid 4",permalink:"/boyka-framework/docs/tutorials/appium-grid"}},c={},l=[{value:"Driver actions",id:"driver-actions",level:2},{value:"Element Actions",id:"element-actions",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Once the page object class is created with locators for all the platforms and the ",(0,n.jsx)(t.a,{href:"/docs/guides/ui/page-action",children:"application action class"})," is also created, we can now use it to interact with the page in our tests by calling the corresponding methods from the action class."]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"Check out all the available static methods to interact with the page in your tests. Following are the available action classes:"}),(0,n.jsx)(t.h2,{id:"driver-actions",children:"Driver actions"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/drivers/alert-actions",children:(0,n.jsx)(t.code,{children:"AlertActions"})}),": Contains all Alert related actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/drivers/context-actions",children:(0,n.jsx)(t.code,{children:"ContextActions"})}),": Contains all Mobile context actions methods"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/drivers/cookie-actions",children:(0,n.jsx)(t.code,{children:"CookieActions"})}),": Contains all cookies related actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/drivers/driver-actions",children:(0,n.jsx)(t.code,{children:"DriverActions"})}),": Contains all other driver related actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/drivers/frame-actions",children:(0,n.jsx)(t.code,{children:"FrameActions"})}),": Contains all Frames related actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/drivers/navigate-actions",children:(0,n.jsx)(t.code,{children:"NavigateActions"})}),": Contains all navigate related actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/drivers/window-actions",children:(0,n.jsx)(t.code,{children:"WindowActions"})}),": Contains all windows related actions"]}),"\n"]}),(0,n.jsx)(t.h2,{id:"element-actions",children:"Element Actions"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/elements/clickable-actions",children:(0,n.jsx)(t.code,{children:"ClickableActions"})}),": Contains all clickable element related actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/elements/drop-down-actions",children:(0,n.jsx)(t.code,{children:"DropDownActions"})}),": Contains all drop down element related actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/elements/element-actions",children:(0,n.jsx)(t.code,{children:"ElementActions"})}),": Contains all common methods for element related actions"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/elements/finger-actions",children:(0,n.jsx)(t.code,{children:"FingerActions"})}),": Contains all methods for single finger actions on element / screen related"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/elements/fingers-actions",children:(0,n.jsx)(t.code,{children:"FingersAction"})}),": Contains all method for multi finger actions on element / screen"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/api/actions/elements/textbox-actions",children:(0,n.jsx)(t.code,{children:"TextBoxActions"})}),": Contains all text box related actions methods"]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'package io.github.boykaframework.testng.ui.saucedemo;\n\nimport static io.github.boykaframework.actions.drivers.DriverActions.withDriver;\nimport static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\nimport static io.github.boykaframework.manager.ParallelSession.clearSession;\nimport static io.github.boykaframework.manager.ParallelSession.createSession;\nimport static io.github.boykaframework.manager.ParallelSession.getSession;\nimport static com.google.common.truth.Truth.assertThat;\n\nimport io.github.boykaframework.enums.PlatformType;\nimport io.github.boykaframework.testng.ui.saucedemo.actions.SauceDemoActions;\nimport org.testng.annotations.AfterClass;\nimport org.testng.annotations.AfterMethod;\nimport org.testng.annotations.BeforeClass;\nimport org.testng.annotations.Parameters;\nimport org.testng.annotations.Test;\n\npublic class SauceDemoTest {\n  private SauceDemoActions sauceDemo;\n\n  @AfterMethod (alwaysRun = true)\n  public void afterMethod () {\n    onWindow ().takeScreenshot ();\n  }\n\n  @BeforeClass (description = "Setup test class", alwaysRun = true)\n  @Parameters ({ "platformType", "driverKey" })\n  public void setupTestClass (final PlatformType platformType, final String driverKey) {\n    createSession ("SauceDemoTest Persona", platformType, driverKey);\n    this.sauceDemo = new SauceDemoActions ();\n  }\n\n  @AfterClass (description = "Tear down test class", alwaysRun = true)\n  public void tearDownTestClass () {\n    withDriver ().saveLogs ();\n    clearSession ();\n  }\n\n  @Test (description = "Test login functionality")\n  public void testLogin () {\n    this.sauceDemo.verifyLogin ("standard_user", "secret_sauce");\n  }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9425:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(8318);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);