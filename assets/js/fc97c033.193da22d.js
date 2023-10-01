"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9835],{8570:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var o=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?o.createElement(f,r(r({ref:t},s),{},{components:n})):o.createElement(f,r({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:i,r[1]=a;for(var c=2;c<l;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var o=n(3262),i=(n(79),n(8570));const l={title:"IElementActionsListener",sidebar_position:3},r=void 0,a={unversionedId:"actions/interfaces/listeners/elements/element-actions-listener",id:"actions/interfaces/listeners/elements/element-actions-listener",title:"IElementActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/elements/element-actions-listener.md",sourceDirName:"actions/interfaces/listeners/elements",slug:"/actions/interfaces/listeners/elements/element-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/element-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/elements/element-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696145763,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:3,frontMatter:{title:"IElementActionsListener",sidebar_position:3},sidebar:"api",previous:{title:"IDropDownActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/drop-down-actions-listener"},next:{title:"IFingerActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/finger-actions-listener"}},d={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onClear (locator)</code>",id:"on-clear",level:2},{value:"<code>onGetAttribute (locator, attribute)</code>",id:"on-get-attribute",level:2},{value:"<code>onGetStyle (locator, styleName)</code>",id:"on-get-style",level:2},{value:"<code>onGetText (locator)</code>",id:"on-get-text",level:2},{value:"<code>onIsDisplayed (locator)</code>",id:"on-is-displayed",level:2},{value:"<code>onIsEnabled (locator)</code>",id:"on-is-enabled",level:2},{value:"<code>onIsSelected (locator)</code>",id:"on-is-selected",level:2},{value:"<code>onScrollIntoView (locator)</code>",id:"on-scroll-into-view",level:2},{value:"<code>onVerifyAttribute (locator, attribute)</code>",id:"on-verify-attribute",level:2},{value:"<code>onVerifyIsDisplayed (locator)</code>",id:"on-verify-is-displayed",level:2},{value:"<code>onVerifyIsEnabled (locator)</code>",id:"on-verify-is-enabled",level:2},{value:"<code>onVerifyIsSelected (locator)</code>",id:"on-verify-is-selected",level:2},{value:"<code>onVerifyStyle (locator, styleName)</code>",id:"on-verify-style",level:2},{value:"<code>onVerifyText (locator)</code>",id:"on-verify-text",level:2}],s={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling the Element related actions, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,i.kt)("h2",{id:"on-clear"},(0,i.kt)("inlineCode",{parentName:"h2"},"onClear (locator)")),(0,i.kt)("p",null,"This method will get executed after clearing the value in the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-get-attribute"},(0,i.kt)("inlineCode",{parentName:"h2"},"onGetAttribute (locator, attribute)")),(0,i.kt)("p",null,"This method will get executed after getting the given attribute in the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-get-style"},(0,i.kt)("inlineCode",{parentName:"h2"},"onGetStyle (locator, styleName)")),(0,i.kt)("p",null,"This method will get executed after getting the given style in the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-get-text"},(0,i.kt)("inlineCode",{parentName:"h2"},"onGetText (locator)")),(0,i.kt)("p",null,"This method will get executed after getting the text of the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-is-displayed"},(0,i.kt)("inlineCode",{parentName:"h2"},"onIsDisplayed (locator)")),(0,i.kt)("p",null,"This method will get executed after checking if the element located by using the provided locator is displayed."),(0,i.kt)("h2",{id:"on-is-enabled"},(0,i.kt)("inlineCode",{parentName:"h2"},"onIsEnabled (locator)")),(0,i.kt)("p",null,"This method will get executed after checking if the element located by using the provided locator is enabled."),(0,i.kt)("h2",{id:"on-is-selected"},(0,i.kt)("inlineCode",{parentName:"h2"},"onIsSelected (locator)")),(0,i.kt)("p",null,"This method will get executed after checking if the element located by using the provided locator is selected."),(0,i.kt)("h2",{id:"on-scroll-into-view"},(0,i.kt)("inlineCode",{parentName:"h2"},"onScrollIntoView (locator)")),(0,i.kt)("p",null,"This method will get executed after scroll the element located by using the provided locator into view."),(0,i.kt)("h2",{id:"on-verify-attribute"},(0,i.kt)("inlineCode",{parentName:"h2"},"onVerifyAttribute (locator, attribute)")),(0,i.kt)("p",null,"This method will get executed after verifying the provided attribute value of the element located by using the provided locator into view."),(0,i.kt)("h2",{id:"on-verify-is-displayed"},(0,i.kt)("inlineCode",{parentName:"h2"},"onVerifyIsDisplayed (locator)")),(0,i.kt)("p",null,"This method will get executed after verifying the element located by using the provided locator is displayed."),(0,i.kt)("h2",{id:"on-verify-is-enabled"},(0,i.kt)("inlineCode",{parentName:"h2"},"onVerifyIsEnabled (locator)")),(0,i.kt)("p",null,"This method will get executed after verifying the element located by using the provided locator is enabled."),(0,i.kt)("h2",{id:"on-verify-is-selected"},(0,i.kt)("inlineCode",{parentName:"h2"},"onVerifyIsSelected (locator)")),(0,i.kt)("p",null,"This method will get executed after verifying the element located by using the provided locator is selected."),(0,i.kt)("h2",{id:"on-verify-style"},(0,i.kt)("inlineCode",{parentName:"h2"},"onVerifyStyle (locator, styleName)")),(0,i.kt)("p",null,"This method will get executed after verifying the provided style of the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-verify-text"},(0,i.kt)("inlineCode",{parentName:"h2"},"onVerifyText (locator)")),(0,i.kt)("p",null,"This method will get executed after verifying the text of the element located by using the provided locator."))}u.isMDXComponent=!0}}]);