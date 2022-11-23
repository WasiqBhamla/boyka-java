"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[194],{167:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(5721);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),b=a,g=d["".concat(l,".").concat(b)]||d[b]||u[b]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5406:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(8533),a=(r(5721),r(167));const o={title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},i=void 0,c={unversionedId:"guides/web/create-page-object",id:"guides/web/create-page-object",title:"\ud83d\udcc4 Create Page Object",description:"In Boyka, we have decoupled the page object from the WebDriver class. This is done by creating a Page Object class and defining locators using Locator builder class.",source:"@site/docs/framework-docs/guides/web/create-page-object.md",sourceDirName:"guides/web",slug:"/guides/web/create-page-object",permalink:"/boyka-framework/docs/guides/web/create-page-object",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/guides/web/create-page-object.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1669214003,formattedLastUpdatedAt:"Nov 23, 2022",sidebarPosition:2,frontMatter:{title:"\ud83d\udcc4 Create Page Object",sidebar_position:2},sidebar:"docs",previous:{title:"\ud83e\ude9b Setup Configuration file",permalink:"/boyka-framework/docs/guides/web/setup-config"},next:{title:"\u2705 Write Test for Web",permalink:"/boyka-framework/docs/guides/web/write-test"}},l={},s=[{value:"Example Page Object class",id:"example-page-object-class",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Boyka, we have decoupled the page object from the ",(0,a.kt)("inlineCode",{parentName:"p"},"WebDriver")," class. This is done by creating a Page Object class and defining locators using ",(0,a.kt)("inlineCode",{parentName:"p"},"Locator")," builder class."),(0,a.kt)("h2",{id:"example-page-object-class"},"Example Page Object class"),(0,a.kt)("p",null,"In the following example, I've used Lombok ",(0,a.kt)("inlineCode",{parentName:"p"},"@Getter")," to auto-generate getters for all the declared locators."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import com.github.wasiqb.boyka.builders.Locator;\nimport lombok.Getter;\n\n@Getter\npublic class LoginPage {\n    public static LoginPage loginPage () {\n        return new LoginPage ();\n    }\n\n    private final Locator loginBox = Locator.buildLocator ()\n        .web (By.id ("login_button_container"))\n        .build ();\n\n    private final Locator loginButton = Locator.buildLocator ()\n        .web (By.id ("login-button"))\n        .parent (this.loginBox)\n        .build ();\n    private final Locator password = Locator.buildLocator ()\n        .web (By.id ("password"))\n        .parent (this.loginBox)\n        .build ();\n    private final Locator username = Locator.buildLocator ()\n        .web (By.id ("user-name"))\n        .parent (this.loginBox)\n        .build ();\n\n    private LoginPage () {\n        // Avoid explicit class initialization.\n    }\n}\n')))}u.isMDXComponent=!0}}]);