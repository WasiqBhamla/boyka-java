"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1616],{167:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(5721);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=i,b=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(8533),i=(a(5721),a(167));const r={title:"\u2705 Write Test for Web",sidebar_position:3},o=void 0,s={unversionedId:"guides/web/write-test",id:"guides/web/write-test",title:"\u2705 Write Test for Web",description:"Once the page object class is created, we can use it to interact with the page in our tests by passing the locators to static action methods exposed by Boyka framework.",source:"@site/docs/framework-docs/guides/web/write-test.md",sourceDirName:"guides/web",slug:"/guides/web/write-test",permalink:"/boyka-framework/docs/guides/web/write-test",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/web/write-test.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1669213605,formattedLastUpdatedAt:"Nov 23, 2022",sidebarPosition:3,frontMatter:{title:"\u2705 Write Test for Web",sidebar_position:3},sidebar:"docs",previous:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/web/create-page-object"},next:{title:"\ud83e\ude9b Setup Mobile Configuration",permalink:"/boyka-framework/docs/guides/mobile/setup-config"}},c={},l=[{value:"Example",id:"example",level:2}],p={toc:l};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once the page object class is created, we can use it to interact with the page in our tests by passing the locators to static action methods exposed by Boyka framework."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Check out all the available static methods to interact with the page in your tests. Following are the available action classes:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/driver-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"DriverActions")),": Contains all driver related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/drop-down-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"DropDownActions")),": Contains all drop down related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/element-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"ElementActions")),": Contains all element related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/keyboard-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"KeyboardActions")),": Contains all keyboard related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/mouse-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"MouseActions")),": Contains all mouse related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/verify-driver-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"VerifyDriverActions")),": Contains all verification methods for driver related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/verify-drop-down-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"VerifyDropDownActions")),": Contains all verification methods for drop down related actions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/actions/verify-element-actions"},(0,i.kt)("inlineCode",{parentName:"a"},"VerifyElementActions")),": Contains all verification methods for element related actions"))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DriverActions.navigateTo;\nimport static com.github.wasiqb.boyka.actions.KeyboardActions.enterText;\nimport static com.github.wasiqb.boyka.actions.MouseActions.clickOn;\nimport static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserTitle;\nimport static com.github.wasiqb.boyka.actions.VerifyDriverActions.verifyBrowserUrl;\nimport static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementDisplayed;\nimport static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementEnabled;\nimport static com.github.wasiqb.boyka.manager.DriverManager.closeDriver;\nimport static com.github.wasiqb.boyka.manager.DriverManager.createDriver;\nimport static com.github.wasiqb.boyka.testng.web.pages.LoginPage.loginPage;\n\nimport com.github.wasiqb.boyka.enums.ApplicationType;\nimport org.testng.annotations.AfterClass;\nimport org.testng.annotations.BeforeClass;\nimport org.testng.annotations.Test;\n\npublic class TestWeb {\n    private static final String URL = "https://www.saucedemo.com";\n\n    @BeforeClass (description = "Setup test class")\n    public void setupTestClass () {\n        createDriver (ApplicationType.WEB, "test_local_chrome");\n    }\n\n    @AfterClass (description = "Tear down test class")\n    public void tearDownTestClass () {\n        closeDriver ();\n    }\n\n    @Test (description = "Test login functionality")\n    public void testLogin () {\n        navigateTo (URL);\n        verifyBrowserUrl ().startsWith (URL);\n        enterText (loginPage ().getUsername (), "standard_user");\n        enterText (loginPage ().getPassword (), "secret_sauce");\n        clickOn (loginPage ().getLoginButton ());\n        verifyBrowserTitle ().isEqualTo ("Swag Labs");\n        verifyElementDisplayed (homePage ().getMenuButton ()).isTrue ();\n        verifyElementEnabled (homePage ().getMenuButton ()).isTrue ();\n    }\n}\n')))}m.isMDXComponent=!0}}]);