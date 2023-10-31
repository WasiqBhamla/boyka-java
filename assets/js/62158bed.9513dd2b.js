"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1511],{8570:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(79);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9521:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(3262),i=(a(79),a(8570));const r={title:"\u2705 Write Test class",sidebar_position:4},o=void 0,s={unversionedId:"guides/ui/write-test",id:"guides/ui/write-test",title:"\u2705 Write Test class",description:"Once the page object class is created with locators for all the platforms and the application action class is also created, we can now use it to interact with the page in our tests by calling the corresponding methods from the action class.",source:"@site/docs/framework-docs/guides/ui/write-test.md",sourceDirName:"guides/ui",slug:"/guides/ui/write-test",permalink:"/boyka-framework/docs/guides/ui/write-test",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/write-test.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1698771901,formattedLastUpdatedAt:"Oct 31, 2023",sidebarPosition:4,frontMatter:{title:"\u2705 Write Test class",sidebar_position:4},sidebar:"docs",previous:{title:"\ud83c\udfd7\ufe0f Create Page Action class",permalink:"/boyka-framework/docs/guides/ui/page-action"},next:{title:"\ud83d\udd78\ufe0f Appium with Selenium Grid 4",permalink:"/boyka-framework/docs/tutorials/appium-grid"}},l={},c=[{value:"Example",id:"example",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once the page object class is created with locators for all the platforms and the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/ui/page-action"},"application action class")," is also created, we can now use it to interact with the page in our tests by calling the corresponding methods from the action class."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Check out all the available static methods to interact with the page in your tests. Following are the available action classes:"),(0,i.kt)("h2",{parentName:"admonition",id:"driver-actions"},"Driver actions"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/drivers/alert-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"AlertActions")),": Contains all Alert related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/drivers/context-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"ContextActions")),": Contains all Mobile context actions methods"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/drivers/cookie-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"CookieActions")),": Contains all cookies related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/drivers/driver-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"DriverActions")),": Contains all other driver related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/drivers/frame-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"FrameActions")),": Contains all Frames related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/drivers/navigate-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"NavigateActions")),": Contains all navigate related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/drivers/window-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"WindowActions")),": Contains all windows related actions")),(0,i.kt)("h2",{parentName:"admonition",id:"element-actions"},"Element Actions"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/elements/clickable-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"ClickableActions")),": Contains all clickable element related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/elements/drop-down-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"DropDownActions")),": Contains all drop down element related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/elements/element-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"ElementActions")),": Contains all common methods for element related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/elements/finger-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"FingerActions")),": Contains all methods for single finger actions on element / screen related"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/elements/fingers-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"FingersAction")),": Contains all method for multi finger actions on element / screen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/elements/textbox-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"TextBoxActions")),": Contains all text box related actions methods"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package com.github.wasiqb.boyka.testng.ui.saucedemo;\n\nimport static com.github.wasiqb.boyka.actions.drivers.DriverActions.withDriver;\nimport static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\nimport static com.github.wasiqb.boyka.manager.ParallelSession.clearSession;\nimport static com.github.wasiqb.boyka.manager.ParallelSession.createSession;\nimport static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\nimport static com.google.common.truth.Truth.assertThat;\n\nimport com.github.wasiqb.boyka.enums.PlatformType;\nimport com.github.wasiqb.boyka.testng.ui.saucedemo.actions.SauceDemoActions;\nimport org.testng.annotations.AfterClass;\nimport org.testng.annotations.AfterMethod;\nimport org.testng.annotations.BeforeClass;\nimport org.testng.annotations.Parameters;\nimport org.testng.annotations.Test;\n\npublic class SauceDemoTest {\n  private SauceDemoActions sauceDemo;\n\n  @AfterMethod (alwaysRun = true)\n  public void afterMethod () {\n    onWindow ().takeScreenshot ();\n  }\n\n  @BeforeClass (description = "Setup test class", alwaysRun = true)\n  @Parameters ({ "platformType", "driverKey" })\n  public void setupTestClass (final PlatformType platformType, final String driverKey) {\n    createSession ("SauceDemoTest Persona", platformType, driverKey);\n    this.sauceDemo = new SauceDemoActions ();\n  }\n\n  @AfterClass (description = "Tear down test class", alwaysRun = true)\n  public void tearDownTestClass () {\n    withDriver ().saveLogs ();\n    clearSession ();\n  }\n\n  @Test (description = "Test login functionality")\n  public void testLogin () {\n    this.sauceDemo.verifyLogin ("standard_user", "secret_sauce");\n  }\n}\n')))}d.isMDXComponent=!0}}]);