"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[599],{8570:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var n=i(79);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var r=n.createContext({}),s=function(e){var t=n.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=s(e.components);return n.createElement(r.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(i),p=o,k=u["".concat(r,".").concat(p)]||u[p]||m[p]||a;return i?n.createElement(k,l(l({ref:t},d),{},{components:i})):n.createElement(k,l({ref:t},d))}));function k(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=p;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c[u]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},9880:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=i(5907),o=(i(79),i(8570));const a={title:"ClickableActions",sidebar_position:1},l=void 0,c={unversionedId:"actions/elements/clickable-actions",id:"actions/elements/clickable-actions",title:"ClickableActions",description:"Static methods",source:"@site/docs/api/actions/elements/clickable-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/clickable-actions",permalink:"/boyka-framework/api/actions/elements/clickable-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/clickable-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1694328958,formattedLastUpdatedAt:"Sep 10, 2023",sidebarPosition:1,frontMatter:{title:"ClickableActions",sidebar_position:1},sidebar:"api",previous:{title:"WindowActions",permalink:"/boyka-framework/api/actions/drivers/window-actions"},next:{title:"DropDownActions",permalink:"/boyka-framework/api/actions/elements/drop-down-actions"}},r={},s=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>withMouse</code>",id:"with-mouse",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>click</code>",id:"click",level:3},{value:"<code>doubleClick</code>",id:"double-click",level:3},{value:"<code>rightClick</code>",id:"right-click",level:3},{value:"<code>clickAndHold</code>",id:"click-and-hold",level:3},{value:"<code>dragTo (locator)</code>",id:"drag-to",level:3},{value:"<code>hover</code>",id:"hover",level:3},{value:"<code>submit</code>",id:"submit",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"static-methods"},"Static methods"),(0,o.kt)("h3",{id:"with-mouse"},(0,o.kt)("inlineCode",{parentName:"h3"},"withMouse")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"IClickableActions")," which will expose different methods to handle mouse actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"IClickableActions mouseActions = ClickableActions.withMouse ();\n")),(0,o.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,o.kt)("h3",{id:"click"},(0,o.kt)("inlineCode",{parentName:"h3"},"click")),(0,o.kt)("p",null,"This method is used to click on the given element if it's a Web application or will perform ",(0,o.kt)("inlineCode",{parentName:"p"},"tap")," action if the element is on Mobile. It will also scroll the element into view before clicking on it (in Web application)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).click ();\n")),(0,o.kt)("h3",{id:"double-click"},(0,o.kt)("inlineCode",{parentName:"h3"},"doubleClick")),(0,o.kt)("p",null,"This method is used to double click on the given element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).doubleClick ();\n")),(0,o.kt)("h3",{id:"right-click"},(0,o.kt)("inlineCode",{parentName:"h3"},"rightClick")),(0,o.kt)("p",null,"This method is used to right click on the given element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).rightClick ();\n")),(0,o.kt)("h3",{id:"click-and-hold"},(0,o.kt)("inlineCode",{parentName:"h3"},"clickAndHold")),(0,o.kt)("p",null,"This method is used to click and hold on the given element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).clickAndHold ();\n")),(0,o.kt)("h3",{id:"drag-to"},(0,o.kt)("inlineCode",{parentName:"h3"},"dragTo (locator)")),(0,o.kt)("p",null,"This method is used to drag source element and drop it on the target element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ClickableActions.withMouse;\n. . .\nLocator source = // source element to drag\nLocator target = // target element to drag the source to\nwithMouse (source).dragTo (target);\n")),(0,o.kt)("h3",{id:"hover"},(0,o.kt)("inlineCode",{parentName:"h3"},"hover")),(0,o.kt)("p",null,"This method is used to hover on the given element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).hover ();\n")),(0,o.kt)("h3",{id:"submit"},(0,o.kt)("inlineCode",{parentName:"h3"},"submit")),(0,o.kt)("p",null,"This method is used to submit the given element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.ClickableActions.withMouse;\n. . .\nwithMouse (locator).submit ();\n")))}m.isMDXComponent=!0}}]);