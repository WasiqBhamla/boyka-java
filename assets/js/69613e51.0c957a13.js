"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6085],{9644:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>r});var n=o(6106),i=o(791);const l={title:"DropDownActions",sidebar_position:2},s=void 0,c={id:"actions/elements/drop-down-actions",title:"DropDownActions",description:"Static methods",source:"@site/docs/api/actions/elements/drop-down-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/drop-down-actions",permalink:"/boyka-framework/api/actions/elements/drop-down-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/drop-down-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1716052176e3,sidebarPosition:2,frontMatter:{title:"DropDownActions",sidebar_position:2},sidebar:"api",previous:{title:"ClickableActions",permalink:"/boyka-framework/api/actions/elements/clickable-actions"},next:{title:"ElementActions",permalink:"/boyka-framework/api/actions/elements/element-actions"}},d={},r=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onDropDown</code>",id:"on-drop-down",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>deselectAll</code>",id:"deselect-all",level:3},{value:"<code>deselectByIndex (index)</code>",id:"deselect-by-index",level:3},{value:"<code>deselectByText (text)</code>",id:"deselect-by-text",level:3},{value:"<code>deselectByValue (value)</code>",id:"deselect-by-value",level:3},{value:"<code>selectByIndex (index)</code>",id:"select-by-index",level:3},{value:"<code>selectByText (text)</code>",id:"select-by-text",level:3},{value:"<code>selectByValue (value)</code>",id:"select-by-value",level:3},{value:"<code>selectedItem</code>",id:"selected-item",level:3},{value:"<code>selectedItems</code>",id:"selected-items",level:3},{value:"<code>verifySelectedItem</code>",id:"verify-selected-item",level:3},{value:"<code>verifySelectedItems</code>",id:"verify-selected-items",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,n.jsx)(t.h3,{id:"on-drop-down",children:(0,n.jsx)(t.code,{children:"onDropDown"})}),"\n",(0,n.jsxs)(t.p,{children:["This will return ",(0,n.jsx)(t.code,{children:"IDropDownActions"})," which will expose different methods to handle drop down actions."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"IDropDownActions dropDownActions = DropDownActions.onDropDown ();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,n.jsx)(t.h3,{id:"deselect-all",children:(0,n.jsx)(t.code,{children:"deselectAll"})}),"\n",(0,n.jsx)(t.p,{children:"This method will deselect all the options of the given multi-select element."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (multiSelectLocator).deselectAll ();\n"})}),"\n",(0,n.jsx)(t.h3,{id:"deselect-by-index",children:(0,n.jsx)(t.code,{children:"deselectByIndex (index)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will deselect the option of the given dropdown / multi-select element by the given index."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).deselectByIndex (1);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"deselect-by-text",children:(0,n.jsx)(t.code,{children:"deselectByText (text)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will deselect the option of the given dropdown / multi-select element by the given text."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).deselectByText ("Option 1");\n'})}),"\n",(0,n.jsx)(t.h3,{id:"deselect-by-value",children:(0,n.jsx)(t.code,{children:"deselectByValue (value)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will deselect the option of the given dropdown / multi-select element by the given value."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).deselectByValue ("val1");\n'})}),"\n",(0,n.jsx)(t.h3,{id:"select-by-index",children:(0,n.jsx)(t.code,{children:"selectByIndex (index)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will select the option of the given dropdown / multi-select element by the given index."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).selectByIndex (2);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"select-by-text",children:(0,n.jsx)(t.code,{children:"selectByText (text)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will select the option of the given dropdown / multi-select element by the given text."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).selectByText ("Option 2");\n'})}),"\n",(0,n.jsx)(t.h3,{id:"select-by-value",children:(0,n.jsx)(t.code,{children:"selectByValue (value)"})}),"\n",(0,n.jsx)(t.p,{children:"This method will select the option of the given dropdown / multi-select element by the given value."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).selectByValue ("value-2");\n'})}),"\n",(0,n.jsx)(t.h3,{id:"selected-item",children:(0,n.jsx)(t.code,{children:"selectedItem"})}),"\n",(0,n.jsx)(t.p,{children:"This method will return the selected item text of the given dropdown / multi-select element."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nString itemText = onDropDown (dropdownLocator).selectedItem ();\n"})}),"\n",(0,n.jsx)(t.h3,{id:"selected-items",children:(0,n.jsx)(t.code,{children:"selectedItems"})}),"\n",(0,n.jsx)(t.p,{children:"This method will return the list of selected item texts of the given multi-select element."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nList<String> itemTexts = onDropDown (dropdownLocator).selectedItems (dropdownLocator);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"verify-selected-item",children:(0,n.jsx)(t.code,{children:"verifySelectedItem"})}),"\n",(0,n.jsx)(t.p,{children:"This method will verify the selected item from the drop down."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).verifySelectedItem ().isEqualTo ("Batman");\n'})}),"\n",(0,n.jsx)(t.h3,{id:"verify-selected-items",children:(0,n.jsx)(t.code,{children:"verifySelectedItems"})}),"\n",(0,n.jsx)(t.p,{children:"This method will verify the list of selected items from the drop down."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.DropDownActions.onDropDown;\n. . .\nonDropDown (dropdownLocator).verifySelectedItems ().containsExactly ("The Avengers", "Batman", "Black Panther");\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},791:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>c});var n=o(7378);const i={},l=n.createContext(i);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);