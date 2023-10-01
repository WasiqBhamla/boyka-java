"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5878],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,g=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(3262),r=(n(79),n(8570));const i={title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},o=void 0,s={unversionedId:"guides/ui/ios/create-page-object",id:"guides/ui/ios/create-page-object",title:"\ud83d\udcc4 Create Page Object",description:"Example Page Object class",source:"@site/docs/framework-docs/guides/ui/ios/create-page-object.md",sourceDirName:"guides/ui/ios",slug:"/guides/ui/ios/create-page-object",permalink:"/boyka-framework/docs/guides/ui/ios/create-page-object",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/ios/create-page-object.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1696154866,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:2,frontMatter:{title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/ios/setup-config"},next:{title:"\ud83c\udfd7\ufe0f Create Page Action class",permalink:"/boyka-framework/docs/guides/ui/page-action"}},c={},l=[{value:"Example Page Object class",id:"example-page-object-class",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"example-page-object-class"},"Example Page Object class"),(0,r.kt)("p",null,"In the following example, I have used the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/ui/android/create-page-object"},"same page object")," which I had created for Web assuming the application under test has Android, iOS and Web version with same UI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static io.appium.java_client.AppiumBy.accessibilityId;\nimport static org.openqa.selenium.By.id;\n\nimport com.github.wasiqb.boyka.builders.Locator;\nimport lombok.Getter;\n\n@Getter\npublic class LoginPage {\n    private static final LoginPage LOGIN_PAGE = new LoginPage ();\n\n    public static LoginPage loginPage () {\n        return LOGIN_PAGE;\n    }\n\n    private final Locator loginButton = Locator.buildLocator ()\n        .web (id ("login-button"))\n        .android (accessibilityId ("test-LOGIN"))\n        // highlight-next-line\n        .ios (accessibilityId ("test-LOGIN"))\n        .name ("Login Button")\n        .build ();\n    private final Locator password = Locator.buildLocator ()\n        .web (id ("password"))\n        .android (accessibilityId ("test-Password"))\n        // highlight-next-line\n        .ios (accessibilityId ("test-Password"))\n        .name ("Password")\n        .build ();\n    private final Locator username = Locator.buildLocator ()\n        .web (id ("user-name"))\n        .android (accessibilityId ("test-Username"))\n        // highlight-next-line\n        .ios (accessibilityId ("test-Username"))\n        .name ("User Name")\n        .build ();\n\n    private LoginPage () {\n        // Avoid explicit class initialization.\n    }\n}\n')))}d.isMDXComponent=!0}}]);