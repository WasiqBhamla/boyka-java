"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6485],{167:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(5721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(g,a(a({ref:t},p),{},{components:n})):i.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(4715),r=(n(5721),n(167));const o={title:"FingerActions",sidebar_position:4},a=void 0,l={unversionedId:"actions/elements/finger-actions",id:"actions/elements/finger-actions",title:"FingerActions",description:"Static methods",source:"@site/docs/api/actions/elements/finger-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/finger-actions",permalink:"/boyka-framework/api/actions/elements/finger-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/finger-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1683011295,formattedLastUpdatedAt:"May 2, 2023",sidebarPosition:4,frontMatter:{title:"FingerActions",sidebar_position:4},sidebar:"api",previous:{title:"ElementActions",permalink:"/boyka-framework/api/actions/elements/element-actions"},next:{title:"TextBoxActions",permalink:"/boyka-framework/api/actions/elements/textbox-actions"}},s={},c=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withFinger (locator)</code>",id:"with-finger-locator",level:3},{value:"<code>withFinger</code>",id:"with-finger",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>swipe</code>",id:"swipe",level:3},{value:"<code>dragTo (target)</code>",id:"drag-to",level:3},{value:"<code>swipeTill</code>",id:"swipetill",level:3}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"static-methods"},"Static methods"),(0,r.kt)("h3",{id:"with-finger-locator"},(0,r.kt)("inlineCode",{parentName:"h3"},"withFinger (locator)")),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"IFingerActions")," which will expose different methods to handle all finger related actions on an element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"IFingerActions fingerActions = FingerActions.withFinger (locator);\n")),(0,r.kt)("h3",{id:"with-finger"},(0,r.kt)("inlineCode",{parentName:"h3"},"withFinger")),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"IFingerActions")," which will expose different methods to handle all finger related actions on the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"IFingerActions fingerActions = FingerActions.withFinger ();\n")),(0,r.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,r.kt)("h3",{id:"swipe"},(0,r.kt)("inlineCode",{parentName:"h3"},"swipe")),(0,r.kt)("p",null,"This method will swipe on the screen / element, i.e: finger will move from center of the screen to mentioned direction of the screen / element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.FingerActions.withFinger;\n. . .\nwithFinger (sourceElement).swipe (SwipeDirection.UP);\n")),(0,r.kt)("h3",{id:"drag-to"},(0,r.kt)("inlineCode",{parentName:"h3"},"dragTo (target)")),(0,r.kt)("p",null,"This method will drag the source element to the target element."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.FingerActions.withFinger;\n. . .\nLocator source = // source element to drag\nLocator target = // target element to drag the source to\nwithFinger (source).dragTo (target);\n")),(0,r.kt)("h3",{id:"swipetill"},(0,r.kt)("inlineCode",{parentName:"h3"},"swipeTill")),(0,r.kt)("p",null,"This method will swipe left on the screen, i.e: finger will move from center of the screen to left of the screen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.FingerActions.withFinger;\n. . .\nwithFinger (sourceElement).swipeTill (SwipeDirection.UP);\n")))}d.isMDXComponent=!0}}]);