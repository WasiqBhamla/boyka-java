"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5384],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(79);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<r;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4897:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=n(5664),i=(n(79),n(8570));const r={title:"IClickableActionsListener",sidebar_position:1},l=void 0,a={unversionedId:"actions/interfaces/listeners/elements/clickable-actions-listener",id:"actions/interfaces/listeners/elements/clickable-actions-listener",title:"IClickableActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/elements/clickable-actions-listener.md",sourceDirName:"actions/interfaces/listeners/elements",slug:"/actions/interfaces/listeners/elements/clickable-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/clickable-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/elements/clickable-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1695985408,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:1,frontMatter:{title:"IClickableActionsListener",sidebar_position:1},sidebar:"api",previous:{title:"IWindowActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/drivers/window-actions-listener"},next:{title:"IDropDownActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/drop-down-actions-listener"}},c={},s=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onClick (locator)</code>",id:"on-click",level:2},{value:"<code>onClickAndHold (locator)</code>",id:"on-click-and-hold",level:2},{value:"<code>onDoubleClick (locator)</code>",id:"on-double-click",level:2},{value:"<code>onDragTo (source, destination)</code>",id:"on-double-click",level:2},{value:"<code>onHover (locator)</code>",id:"on-hover",level:2},{value:"<code>onRightClick (locator)</code>",id:"on-hover",level:2},{value:"<code>onSubmit (locator)</code>",id:"on-hover",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling the Mouse related actions, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,i.kt)("h2",{id:"on-click"},(0,i.kt)("inlineCode",{parentName:"h2"},"onClick (locator)")),(0,i.kt)("p",null,"This method will get executed after clicking on the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-click-and-hold"},(0,i.kt)("inlineCode",{parentName:"h2"},"onClickAndHold (locator)")),(0,i.kt)("p",null,"This method will get executed after clicking and holding on the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-double-click"},(0,i.kt)("inlineCode",{parentName:"h2"},"onDoubleClick (locator)")),(0,i.kt)("p",null,"This method will get executed after double clicking on the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-double-click"},(0,i.kt)("inlineCode",{parentName:"h2"},"onDragTo (source, destination)")),(0,i.kt)("p",null,"This method will get executed after dragging the source element located by using the provided source locator to the destination element located by using the provided destination locator."),(0,i.kt)("h2",{id:"on-hover"},(0,i.kt)("inlineCode",{parentName:"h2"},"onHover (locator)")),(0,i.kt)("p",null,"This method will get executed after hovering on the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-hover"},(0,i.kt)("inlineCode",{parentName:"h2"},"onRightClick (locator)")),(0,i.kt)("p",null,"This method will get executed after right clicking on the element located by using the provided locator."),(0,i.kt)("h2",{id:"on-hover"},(0,i.kt)("inlineCode",{parentName:"h2"},"onSubmit (locator)")),(0,i.kt)("p",null,"This method will get executed after submitting on the element located by using the provided locator."))}u.isMDXComponent=!0}}]);