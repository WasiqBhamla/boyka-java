"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4054],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var o=n(79);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=s(n),u=l,w=p["".concat(c,".").concat(u)]||p[u]||m[u]||a;return n?o.createElement(w,i(i({ref:t},d),{},{components:n})):o.createElement(w,i({ref:t},d))}));function w(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var o=n(3262),l=(n(79),n(8570));const a={title:"DropDownActions",sidebar_position:2},i=void 0,r={unversionedId:"actions/elements/drop-down-actions",id:"actions/elements/drop-down-actions",title:"DropDownActions",description:"Static methods",source:"@site/docs/api/actions/elements/drop-down-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/drop-down-actions",permalink:"/boyka-framework/api/actions/elements/drop-down-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/drop-down-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1698836510,formattedLastUpdatedAt:"Nov 1, 2023",sidebarPosition:2,frontMatter:{title:"DropDownActions",sidebar_position:2},sidebar:"api",previous:{title:"ClickableActions",permalink:"/boyka-framework/api/actions/elements/clickable-actions"},next:{title:"ElementActions",permalink:"/boyka-framework/api/actions/elements/element-actions"}},c={},s=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onDropDown</code>",id:"on-drop-down",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>deselectAll</code>",id:"deselect-all",level:3},{value:"<code>deselectByIndex (index)</code>",id:"deselect-by-index",level:3},{value:"<code>deselectByText (text)</code>",id:"deselect-by-text",level:3},{value:"<code>deselectByValue (value)</code>",id:"deselect-by-value",level:3},{value:"<code>selectByIndex (index)</code>",id:"select-by-index",level:3},{value:"<code>selectByText (text)</code>",id:"select-by-text",level:3},{value:"<code>selectByValue (value)</code>",id:"select-by-value",level:3},{value:"<code>selectedItem</code>",id:"selected-item",level:3},{value:"<code>selectedItems</code>",id:"selected-items",level:3},{value:"<code>verifySelectedItem</code>",id:"verify-selected-item",level:3},{value:"<code>verifySelectedItems</code>",id:"verify-selected-items",level:3}],d={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"static-methods"},"Static methods"),(0,l.kt)("h3",{id:"on-drop-down"},(0,l.kt)("inlineCode",{parentName:"h3"},"onDropDown")),(0,l.kt)("p",null,"This will return ",(0,l.kt)("inlineCode",{parentName:"p"},"IDropDownActions")," which will expose different methods to handle drop down actions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"IDropDownActions dropDownActions = DropDownActions.onDropDown ();\n")),(0,l.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,l.kt)("h3",{id:"deselect-all"},(0,l.kt)("inlineCode",{parentName:"h3"},"deselectAll")),(0,l.kt)("p",null,"This method will deselect all the options of the given multi-select element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (multiSelectLocator).deselectAll ();\n")),(0,l.kt)("h3",{id:"deselect-by-index"},(0,l.kt)("inlineCode",{parentName:"h3"},"deselectByIndex (index)")),(0,l.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given index."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).deselectByIndex (1);\n")),(0,l.kt)("h3",{id:"deselect-by-text"},(0,l.kt)("inlineCode",{parentName:"h3"},"deselectByText (text)")),(0,l.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).deselectByText ("Option 1");\n')),(0,l.kt)("h3",{id:"deselect-by-value"},(0,l.kt)("inlineCode",{parentName:"h3"},"deselectByValue (value)")),(0,l.kt)("p",null,"This method will deselect the option of the given dropdown / multi-select element by the given value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).deselectByValue ("val1");\n')),(0,l.kt)("h3",{id:"select-by-index"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectByIndex (index)")),(0,l.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given index."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).selectByIndex (2);\n")),(0,l.kt)("h3",{id:"select-by-text"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectByText (text)")),(0,l.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).selectByText ("Option 2");\n')),(0,l.kt)("h3",{id:"select-by-value"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectByValue (value)")),(0,l.kt)("p",null,"This method will select the option of the given dropdown / multi-select element by the given value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).selectByValue ("value-2");\n')),(0,l.kt)("h3",{id:"selected-item"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectedItem")),(0,l.kt)("p",null,"This method will return the selected item text of the given dropdown / multi-select element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nString itemText = onDropDown (dropdownLocator).selectedItem ();\n")),(0,l.kt)("h3",{id:"selected-items"},(0,l.kt)("inlineCode",{parentName:"h3"},"selectedItems")),(0,l.kt)("p",null,"This method will return the list of selected item texts of the given multi-select element."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nList<String> itemTexts = onDropDown (dropdownLocator).selectedItems (dropdownLocator);\n")),(0,l.kt)("h3",{id:"verify-selected-item"},(0,l.kt)("inlineCode",{parentName:"h3"},"verifySelectedItem")),(0,l.kt)("p",null,"This method will verify the selected item from the drop down."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).verifySelectedItem ().isEqualTo ("Batman");\n')),(0,l.kt)("h3",{id:"verify-selected-items"},(0,l.kt)("inlineCode",{parentName:"h3"},"verifySelectedItems")),(0,l.kt)("p",null,"This method will verify the list of selected items from the drop down."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).verifySelectedItems ().containsExactly ("The Avengers", "Batman", "Black Panther");\n')))}m.isMDXComponent=!0}}]);