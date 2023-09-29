"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7601],{8570:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>f});var n=o(79);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var d=n.createContext({}),c=function(e){var t=n.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(o),u=l,f=m["".concat(d,".").concat(u)]||m[u]||p[u]||r;return o?n.createElement(f,i(i({ref:t},s),{},{components:o})):n.createElement(f,i({ref:t},s))}));function f(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,i=new Array(r);i[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[m]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<r;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8103:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=o(5664),l=(o(79),o(8570));const r={title:"IDropDownActionsListener",sidebar_position:2},i=void 0,a={unversionedId:"actions/interfaces/listeners/elements/drop-down-actions-listener",id:"actions/interfaces/listeners/elements/drop-down-actions-listener",title:"IDropDownActionsListener",description:"Implementation",source:"@site/docs/api/actions/interfaces/listeners/elements/drop-down-actions-listener.md",sourceDirName:"actions/interfaces/listeners/elements",slug:"/actions/interfaces/listeners/elements/drop-down-actions-listener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/drop-down-actions-listener",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/interfaces/listeners/elements/drop-down-actions-listener.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1695985408,formattedLastUpdatedAt:"Sep 29, 2023",sidebarPosition:2,frontMatter:{title:"IDropDownActionsListener",sidebar_position:2},sidebar:"api",previous:{title:"IClickableActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/clickable-actions-listener"},next:{title:"IElementActionsListener",permalink:"/boyka-framework/api/actions/interfaces/listeners/elements/element-actions-listener"}},d={},c=[{value:"Implementation",id:"implementation",level:2},{value:"<code>onDeselectAll (locator)</code>",id:"on-deselect-all",level:2},{value:"<code>onDeselectByIndex (locator, index)</code>",id:"on-deselect-by-index",level:2},{value:"<code>onDeselectByText (locator, text)</code>",id:"on-deselect-by-text",level:2},{value:"<code>onDeselectByValue (locator, value)</code>",id:"on-deselect-by-value",level:2},{value:"<code>onSelectByIndex (locator, index)</code>",id:"on-select-by-index",level:2},{value:"<code>onSelectByText (locator, text)</code>",id:"on-select-by-text",level:2},{value:"<code>onSelectByValue (locator, value)</code>",id:"on-select-by-value",level:2},{value:"<code>onSelectedItem (locator)</code>",id:"on-selected-item",level:2},{value:"<code>onSelectedItems (locator)</code>",id:"on-selected-items",level:2},{value:"<code>onVerifySelectedItem (locator)</code>",id:"on-verify-selected-item",level:2},{value:"<code>onVerifySelectedItems (locator)</code>",id:"on-verify-selected-items",level:2}],s={toc:c},m="wrapper";function p(e){let{components:t,...o}=e;return(0,l.kt)(m,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"implementation"},"Implementation"),(0,l.kt)("p",null,"In order inject your customized logging for your reports or you want to perform any other action when handling the Drop down related actions, you can implement this class and provide your implementations for different methods available in this listener interface."),(0,l.kt)("h2",{id:"on-deselect-all"},(0,l.kt)("inlineCode",{parentName:"h2"},"onDeselectAll (locator)")),(0,l.kt)("p",null,"This method will get executed after deselecting all the items from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-deselect-by-index"},(0,l.kt)("inlineCode",{parentName:"h2"},"onDeselectByIndex (locator, index)")),(0,l.kt)("p",null,"This method will get executed after deselecting an item at the provided index from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-deselect-by-text"},(0,l.kt)("inlineCode",{parentName:"h2"},"onDeselectByText (locator, text)")),(0,l.kt)("p",null,"This method will get executed after deselecting an item by its provided text from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-deselect-by-value"},(0,l.kt)("inlineCode",{parentName:"h2"},"onDeselectByValue (locator, value)")),(0,l.kt)("p",null,"This method will get executed after deselecting an item by its provided value from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-select-by-index"},(0,l.kt)("inlineCode",{parentName:"h2"},"onSelectByIndex (locator, index)")),(0,l.kt)("p",null,"This method will get executed after selecting an item at the provided index from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-select-by-text"},(0,l.kt)("inlineCode",{parentName:"h2"},"onSelectByText (locator, text)")),(0,l.kt)("p",null,"This method will get executed after selecting an item by its provided text from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-select-by-value"},(0,l.kt)("inlineCode",{parentName:"h2"},"onSelectByValue (locator, value)")),(0,l.kt)("p",null,"This method will get executed after selecting an item by its provided value from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-selected-item"},(0,l.kt)("inlineCode",{parentName:"h2"},"onSelectedItem (locator)")),(0,l.kt)("p",null,"This method will get executed after getting the selected item from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-selected-items"},(0,l.kt)("inlineCode",{parentName:"h2"},"onSelectedItems (locator)")),(0,l.kt)("p",null,"This method will get executed after getting all the selected items from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-verify-selected-item"},(0,l.kt)("inlineCode",{parentName:"h2"},"onVerifySelectedItem (locator)")),(0,l.kt)("p",null,"This method will get executed after verifying the selected item from the dropdown element located by using the provided locator."),(0,l.kt)("h2",{id:"on-verify-selected-items"},(0,l.kt)("inlineCode",{parentName:"h2"},"onVerifySelectedItems (locator)")),(0,l.kt)("p",null,"This method will get executed after verifying all the selected items from the dropdown element located by using the provided locator."))}p.isMDXComponent=!0}}]);