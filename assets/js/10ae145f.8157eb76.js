"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9131],{8279:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var i=n(5250),o=n(8805);const l={title:"ElementActions",sidebar_position:3},s=void 0,a={id:"actions/elements/element-actions",title:"ElementActions",description:"Static methods",source:"@site/docs/api/actions/elements/element-actions.md",sourceDirName:"actions/elements",slug:"/actions/elements/element-actions",permalink:"/boyka-framework/api/actions/elements/element-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/elements/element-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1710160040,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:3,frontMatter:{title:"ElementActions",sidebar_position:3},sidebar:"api",previous:{title:"DropDownActions",permalink:"/boyka-framework/api/actions/elements/drop-down-actions"},next:{title:"FingerActions",permalink:"/boyka-framework/api/actions/elements/finger-actions"}},c={},r=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onElement</code>",id:"on-element",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>getAttribute (attribute)</code>",id:"get-attribute",level:3},{value:"<code>clear</code>",id:"clear",level:3},{value:"<code>isDisplayed</code>",id:"is-displayed",level:3},{value:"<code>isEnabled</code>",id:"is-enabled",level:3},{value:"<code>isSelected</code>",id:"is-selected",level:3},{value:"<code>scrollIntoView</code>",id:"scroll-into-view",level:3},{value:"<code>getStyle (attribute)</code>",id:"get-style",level:3},{value:"<code>tap</code>",id:"tap",level:3},{value:"<code>getText</code>",id:"get-text",level:3},{value:"<code>verifyAttribute (attribute)</code>",id:"verify-attribute",level:3},{value:"<code>verifyIsDisplayed</code>",id:"verify-is-displayed",level:3},{value:"<code>verifyIsEnabled</code>",id:"verify-is-enabled",level:3},{value:"<code>verifyIsSelected</code>",id:"verify-is-selected",level:3},{value:"<code>verifyStyle (attribute)</code>",id:"verify-style",level:3},{value:"<code>verifyText</code>",id:"verify-text",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,i.jsx)(t.h3,{id:"on-element",children:(0,i.jsx)(t.code,{children:"onElement"})}),"\n",(0,i.jsxs)(t.p,{children:["This will return ",(0,i.jsx)(t.code,{children:"IElementActions"})," which will expose different methods to handle all other element actions."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"IElementActions elementActions = ElementActions.onElement ();\n"})}),"\n",(0,i.jsx)(t.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,i.jsx)(t.h3,{id:"get-attribute",children:(0,i.jsx)(t.code,{children:"getAttribute (attribute)"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to get the attribute of the given element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nString attribute = onElement (locator).getAttribute ("href");\n'})}),"\n",(0,i.jsx)(t.h3,{id:"clear",children:(0,i.jsx)(t.code,{children:"clear"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to clear the given element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).clear ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"is-displayed",children:(0,i.jsx)(t.code,{children:"isDisplayed"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to check whether the given element is displayed or not."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nboolean displayed = onElement (locator).isDisplayed ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"is-enabled",children:(0,i.jsx)(t.code,{children:"isEnabled"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to check whether the given element is enabled or not."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nboolean enabled = onElement (locator).isEnabled ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"is-selected",children:(0,i.jsx)(t.code,{children:"isSelected"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to check whether the given element is selected or not."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nboolean selected = onElement (locator).isSelected ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"scroll-into-view",children:(0,i.jsx)(t.code,{children:"scrollIntoView"})}),"\n",(0,i.jsx)(t.p,{children:"This method will scroll the element into the viewport."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).scrollIntoView ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"get-style",children:(0,i.jsx)(t.code,{children:"getStyle (attribute)"})}),"\n",(0,i.jsx)(t.p,{children:"This method will return the style of the given element for the given attribute."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nString backgroundColor = onElement (locator).getStyle ("background-color");\n'})}),"\n",(0,i.jsx)(t.h3,{id:"tap",children:(0,i.jsx)(t.code,{children:"tap"})}),"\n",(0,i.jsx)(t.p,{children:"This method will tap on element on the Mobile screen using W3C actions."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).tap ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"get-text",children:(0,i.jsx)(t.code,{children:"getText"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to get the text of the given element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nString text = onElement (locator).getText ();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"verify-attribute",children:(0,i.jsx)(t.code,{children:"verifyAttribute (attribute)"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to verify the given attribute of the given element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyAttribute ("attribute-name").isEqualTo ("Swag Labs");\n'})}),"\n",(0,i.jsx)(t.h3,{id:"verify-is-displayed",children:(0,i.jsx)(t.code,{children:"verifyIsDisplayed"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to verify the given element is displayed."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyIsDisplayed ().isTrue();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"verify-is-enabled",children:(0,i.jsx)(t.code,{children:"verifyIsEnabled"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to verify the given element is enabled."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyIsEnabled ().isTrue();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"verify-is-selected",children:(0,i.jsx)(t.code,{children:"verifyIsSelected"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to verify the given element is selected."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:"import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyIsSelected ().isTrue();\n"})}),"\n",(0,i.jsx)(t.h3,{id:"verify-style",children:(0,i.jsx)(t.code,{children:"verifyStyle (attribute)"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to verify the style of the given element locator."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyStyleOf ("color").isEqualTo ("Red");\n'})}),"\n",(0,i.jsx)(t.h3,{id:"verify-text",children:(0,i.jsx)(t.code,{children:"verifyText"})}),"\n",(0,i.jsx)(t.p,{children:"This method is used to verify the text of the given element."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'import static io.github.boykaframework.actions.elements.ElementActions.onElement;\n. . .\nonElement (locator).verifyText ().isEqualTo ("Swag Labs");\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8805:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(79);const o={},l=i.createContext(o);function s(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);