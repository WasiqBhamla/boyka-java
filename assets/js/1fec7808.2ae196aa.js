"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4628],{167:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var i=r(5721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),y=s(r),d=n,p=y["".concat(c,".").concat(d)]||y[d]||m[d]||a;return r?i.createElement(p,o(o({ref:t},f),{},{components:r})):i.createElement(p,o({ref:t},f))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}y.displayName="MDXCreateElement"},3213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(8533),n=(r(5721),r(167));const a={title:"VerifyElementActions",sidebar_position:10},o=void 0,l={unversionedId:"actions/verify-element-actions",id:"actions/verify-element-actions",title:"VerifyElementActions",description:"verifyAttributeOf (locator, attribute)",source:"@site/docs/api/actions/verify-element-actions.md",sourceDirName:"actions",slug:"/actions/verify-element-actions",permalink:"/boyka-framework/api/actions/verify-element-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/verify-element-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1675178668,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:10,frontMatter:{title:"VerifyElementActions",sidebar_position:10},sidebar:"api",previous:{title:"VerifyDropDownActions",permalink:"/boyka-framework/api/actions/verify-drop-down-actions"},next:{title:"Introduction",permalink:"/boyka-framework/api/intro"}},c={},s=[{value:"<code>verifyAttributeOf (locator, attribute)</code>",id:"verify-attribute-of",level:2},{value:"<code>verifyElementDisplayed (locator)</code>",id:"verify-element-displayed",level:2},{value:"<code>verifyElementEnabled (locator)</code>",id:"verify-element-enabled",level:2},{value:"<code>verifyElementSelected (locator)</code>",id:"verify-element-selected",level:2},{value:"<code>verifyStyleOf (locator, attribute)</code>",id:"verify-style-of",level:2},{value:"<code>verifyTextOf (locator)</code>",id:"verify-text-of",level:2}],f={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"verify-attribute-of"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyAttributeOf (locator, attribute)")),(0,n.kt)("p",null,"This method is used to verify the given attribute of the given element."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyAttributeOf;\n. . .\nverifyAttributeOf (locator, "attribute-name").isEqualTo ("Swag Labs");\n')),(0,n.kt)("h2",{id:"verify-element-displayed"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyElementDisplayed (locator)")),(0,n.kt)("p",null,"This method is used to verify the given element is displayed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementDisplayed;\n. . .\nverifyElementDisplayed (locator).isTrue();\n")),(0,n.kt)("h2",{id:"verify-element-enabled"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyElementEnabled (locator)")),(0,n.kt)("p",null,"This method is used to verify the given element is enabled."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementEnabled;\n. . .\nverifyElementEnabled (locator).isTrue();\n")),(0,n.kt)("h2",{id:"verify-element-selected"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyElementSelected (locator)")),(0,n.kt)("p",null,"This method is used to verify the given element is selected."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyElementSelected;\n. . .\nverifyElementSelected (locator).isTrue();\n")),(0,n.kt)("h2",{id:"verify-style-of"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyStyleOf (locator, attribute)")),(0,n.kt)("p",null,"This method is used to verify the style of the given element locator."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyStyleOf;\n. . .\nverifyStyleOf (locator, "color").isEqualTo ("Red");\n')),(0,n.kt)("h2",{id:"verify-text-of"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyTextOf (locator)")),(0,n.kt)("p",null,"This method is used to verify the text of the given element."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.VerifyElementActions.verifyTextOf;\n. . .\nverifyTextOf (locator).isEqualTo ("Swag Labs");\n')))}m.isMDXComponent=!0}}]);