"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2927],{8570:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(79);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),b=a,g=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},438:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(5907),a=(r(79),r(8570));const o={title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},i=void 0,c={unversionedId:"guides/ui/web/create-page-object",id:"guides/ui/web/create-page-object",title:"\ud83d\udcc4 Create Page Object",description:"In Boyka, we have decoupled the page object from the WebDriver class. This is done by creating a Page Object class and defining locators using Locator builder class.",source:"@site/docs/framework-docs/guides/ui/web/create-page-object.md",sourceDirName:"guides/ui/web",slug:"/guides/ui/web/create-page-object",permalink:"/boyka-framework/docs/guides/ui/web/create-page-object",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/ui/web/create-page-object.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1694328958,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:2,frontMatter:{title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/web/setup-config"},next:{title:"\ud83e\ude9b Setup Configuration",permalink:"/boyka-framework/docs/guides/ui/android/setup-config"}},s={},l=[{value:"Example Page Object class",id:"example-page-object-class",level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Boyka, we have decoupled the page object from the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebDriver")," class. This is done by creating a Page Object class and defining locators using ",(0,a.kt)("inlineCode",{parentName:"p"},"Locator")," builder class."),(0,a.kt)("h2",{id:"example-page-object-class"},"Example Page Object class"),(0,a.kt)("p",null,"In the following example, I've used Lombok ",(0,a.kt)("inlineCode",{parentName:"p"},"@Getter")," to auto-generate getters for all the declared locators."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.github.wasiqb.boyka.builders.Locator;\nimport lombok.Getter;\n\n@Getter\npublic class LoginPage {\n    public static LoginPage loginPage () {\n        return new LoginPage ();\n    }\n\n    private final Locator loginButton = Locator.buildLocator ()\n        .web (id ("login-button"))\n        .name ("Login Button")\n        .build ();\n    private final Locator password = Locator.buildLocator ()\n        .web (id ("password"))\n        .name ("Password")\n        .build ();\n    private final Locator username = Locator.buildLocator ()\n        .web (id ("user-name"))\n        .name ("User Name")\n        .build ();\n\n    private LoginPage () {\n        // Avoid explicit class initialization.\n    }\n}\n')))}d.isMDXComponent=!0}}]);