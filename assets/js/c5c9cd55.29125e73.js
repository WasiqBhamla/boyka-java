"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[556],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(79);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(3262),a=(n(79),n(8570));const o={title:"\ud83c\udfd7\ufe0f Create Page Action class",sidebar_position:3},r=void 0,s={unversionedId:"guides/ui/page-action",id:"guides/ui/page-action",title:"\ud83c\udfd7\ufe0f Create Page Action class",description:"Since we have a common page object for all the three platforms (i.e.: Web. Android and iOS), we will create an Action class for the application where we will expose different methods which will take care of each page specific user flow.",source:"@site/docs/framework-docs/guides/ui/page-action.md",sourceDirName:"guides/ui",slug:"/guides/ui/page-action",permalink:"/boyka-framework/docs/guides/ui/page-action",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/page-action.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696145763,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:3,frontMatter:{title:"\ud83c\udfd7\ufe0f Create Page Action class",sidebar_position:3},sidebar:"docs",previous:{title:"\ud83d\udcc4 Create Page Object",permalink:"/boyka-framework/docs/guides/ui/ios/create-page-object"},next:{title:"\u2705 Write Test for Web",permalink:"/boyka-framework/docs/guides/ui/write-test"}},c={},l=[],p={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Since we have a common page object for all the three platforms (i.e.: Web. Android and iOS), we will create an Action class for the application where we will expose different methods which will take care of each page specific user flow."),(0,a.kt)("p",null,"Let's check out the following action class example below for our ",(0,a.kt)("inlineCode",{parentName:"p"},"LoginPage")," class we created:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\nimport static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\nimport static com.github.wasiqb.boyka.actions.elements.ElementActions.onElement;\nimport static com.github.wasiqb.boyka.actions.elements.FingerActions.withFinger;\nimport static com.github.wasiqb.boyka.actions.elements.TextBoxActions.onTextBox;\nimport static com.github.wasiqb.boyka.enums.PlatformType.WEB;\nimport static com.github.wasiqb.boyka.manager.ParallelSession.getSession;\nimport static com.github.wasiqb.boyka.testng.ui.saucedemo.pages.LoginPage.loginPage;\nimport static java.text.MessageFormat.format;\n\nimport com.github.wasiqb.boyka.enums.PlatformType;\n\npublic class SauceDemoActions {\n  private static final String URL = "https://www.saucedemo.com";\n\n  private final PlatformType platformType;\n\n  public SauceDemoActions () {\n    this.platformType = getSession ().getPlatformType ();\n  }\n\n  public void verifyLogin (final String userName, final String password) {\n    verifyNavigateToSite ();\n    onTextBox (loginPage ().getUsername ()).enterText (userName);\n    onTextBox (loginPage ().getPassword ()).enterText (password);\n    withMouse (loginPage ().getLoginButton ()).click ();\n    verifyLoggedIn ();\n  }\n\n  private void verifyNavigateToSite () {\n    if (this.platformType == WEB) {\n      navigate ().to (URL);\n      navigate ().verifyUrl ()\n        .startsWith (URL);\n    }\n  }\n\n  private void verifyLoggedIn () {\n    if (this.platformType == WEB) {\n      navigate ().verifyUrl ()\n        .isEqualTo (format ("{0}/inventory.html", URL));\n      onWindow ().verifyTitle ()\n        .isEqualTo ("Swag Labs");\n    }\n    onElement (homePage ().getMenuButton ()).verifyIsDisplayed ()\n      .isTrue ();\n    onElement (homePage ().getMenuButton ()).verifyIsEnabled ()\n      .isTrue ();\n  }\n}\n')),(0,a.kt)("p",null,"Notice how we are handling ",(0,a.kt)("inlineCode",{parentName:"p"},"Web")," platform by using an ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," condition because the Web application user flow differs with Mobile app flow."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Here we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"getSession ().getPlatformType ()")," to get the platform name of the application running in the current session.")))}u.isMDXComponent=!0}}]);