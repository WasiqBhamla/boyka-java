"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1493],{167:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>u});var n=o(5721);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=s(o),u=l,y=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return o?n.createElement(y,i(i({ref:t},d),{},{components:o})):n.createElement(y,i({ref:t},d))}));function u(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=o.length,i=new Array(a);i[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var s=2;s<a;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6872:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var n=o(8533),l=(o(5721),o(167));const a={title:"DropDownActions",sidebar_position:2},i=void 0,r={unversionedId:"actions/drop-down-actions",id:"actions/drop-down-actions",title:"DropDownActions",description:"deselectAll (locator)",source:"@site/docs/api/actions/drop-down-actions.md",sourceDirName:"actions",slug:"/actions/drop-down-actions",permalink:"/boyka-framework/api/actions/drop-down-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drop-down-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1669214003,formattedLastUpdatedAt:"Nov 23, 2022",sidebarPosition:2,frontMatter:{title:"DropDownActions",sidebar_position:2},sidebar:"api",previous:{title:"DriverActions",permalink:"/boyka-framework/api/actions/driver-actions"},next:{title:"ElementActions",permalink:"/boyka-framework/api/actions/element-actions"}},c={},s=[{value:"<code>deselectAll (locator)</code>",id:"deselect-all",level:2},{value:"<code>deselectByIndex (locator, index)</code>",id:"deselect-by-index",level:2},{value:"<code>deselectByText (locator, text)</code>",id:"deselect-by-text",level:2},{value:"<code>deselectByValue (locator, value)</code>",id:"deselect-by-value",level:2},{value:"<code>selectByIndex (locator, index)</code>",id:"select-by-index",level:2},{value:"<code>selectByText (locator, text)</code>",id:"select-by-text",level:2},{value:"<code>selectByValue (locator, value)</code>",id:"select-by-value",level:2},{value:"<code>selectedItem (locator)</code>",id:"selected-item",level:2},{value:"<code>selectedItems (locator)</code>",id:"selected-items",level:2}],d={toc:s};function p(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"deselect-all"},(0,l.kt)("inlineCode",{parentName:"h2"},"deselectAll (locator)")),(0,l.kt)("p",null,"This method will deselect all the options of the given multi-select element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.deselectAll;\n. . .\ndeselectAll (multiSelectLocator);\n")),(0,l.kt)("h2",{id:"deselect-by-index"},(0,l.kt)("inlineCode",{parentName:"h2"},"deselectByIndex (locator, index)")),(0,l.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given index."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.deselectByIndex;\n. . .\ndeselectByIndex (dropdownLocator, 1);\n")),(0,l.kt)("h2",{id:"deselect-by-text"},(0,l.kt)("inlineCode",{parentName:"h2"},"deselectByText (locator, text)")),(0,l.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DropDownActions.deselectByText;\n. . .\ndeselectByText (dropdownLocator, "Option 1");\n')),(0,l.kt)("h2",{id:"deselect-by-value"},(0,l.kt)("inlineCode",{parentName:"h2"},"deselectByValue (locator, value)")),(0,l.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DropDownActions.deselectByValue;\n. . .\ndeselectByValue (dropdownLocator, "val1");\n')),(0,l.kt)("h2",{id:"select-by-index"},(0,l.kt)("inlineCode",{parentName:"h2"},"selectByIndex (locator, index)")),(0,l.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given index."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.selectByIndex;\n. . .\nselectByIndex (dropdownLocator, 2);\n")),(0,l.kt)("h2",{id:"select-by-text"},(0,l.kt)("inlineCode",{parentName:"h2"},"selectByText (locator, text)")),(0,l.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DropDownActions.selectByText;\n. . .\nselectByText (dropdownLocator, "Option 2");\n')),(0,l.kt)("h2",{id:"select-by-value"},(0,l.kt)("inlineCode",{parentName:"h2"},"selectByValue (locator, value)")),(0,l.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.DropDownActions.selectByValue;\n. . .\nselectByValue (dropdownLocator, "value-2");\n')),(0,l.kt)("h2",{id:"selected-item"},(0,l.kt)("inlineCode",{parentName:"h2"},"selectedItem (locator)")),(0,l.kt)("p",null,"This method will return the selected item text of the given dropdown / multi-select element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.selectedItem;\n. . .\nString itemText = selectedItem (dropdownLocator);\n")),(0,l.kt)("h2",{id:"selected-items"},(0,l.kt)("inlineCode",{parentName:"h2"},"selectedItems (locator)")),(0,l.kt)("p",null,"This method will return the list of selected item texts of the given multi-select element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.DropDownActions.selectedItems;\n. . .\nList<String> itemTexts = selectedItems (dropdownLocator);\n")))}p.isMDXComponent=!0}}]);