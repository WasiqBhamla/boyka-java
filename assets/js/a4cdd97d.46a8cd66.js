"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1214],{167:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(5721);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,v=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return r?a.createElement(v,o(o({ref:t},p),{},{components:r})):a.createElement(v,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(8533),n=(r(5721),r(167));const i={title:"AlertActions",sidebar_position:1},o=void 0,s={unversionedId:"actions/drivers/alert-actions",id:"actions/drivers/alert-actions",title:"AlertActions",description:"Static methods",source:"@site/docs/api/actions/drivers/alert-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/alert-actions",permalink:"/boyka-framework/api/actions/drivers/alert-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/alert-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1679245456,formattedLastUpdatedAt:"Mar 19, 2023",sidebarPosition:1,frontMatter:{title:"AlertActions",sidebar_position:1},sidebar:"api",previous:{title:"ApiActions",permalink:"/boyka-framework/api/actions/api/api-actions"},next:{title:"ContextActions",permalink:"/boyka-framework/api/actions/drivers/context-actions"}},c={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onAlert</code>",id:"on-alert",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>accept (text)</code>",id:"accept-prompt",level:3},{value:"<code>accept</code>",id:"accept",level:3},{value:"<code>dismiss</code>",id:"dismiss",level:3},{value:"<code>verifyAccept</code>",id:"verify-accept",level:2},{value:"<code>verifyAccept (text)</code>",id:"verify-accept-alert",level:2},{value:"<code>verifyDismiss</code>",id:"verify-dismiss",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"static-methods"},"Static methods"),(0,n.kt)("h3",{id:"on-alert"},(0,n.kt)("inlineCode",{parentName:"h3"},"onAlert")),(0,n.kt)("p",null,"This will return ",(0,n.kt)("inlineCode",{parentName:"p"},"IAlertActions")," which will expose different methods to handle Alerts."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"IAlertActions alertActions = AlertActions.onAlert ();\n")),(0,n.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,n.kt)("h3",{id:"accept-prompt"},(0,n.kt)("inlineCode",{parentName:"h3"},"accept (text)")),(0,n.kt)("p",null,"This method will enter the text in the prompt, accept the Alert and will return the Alert message."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().accept ("some text");\n')),(0,n.kt)("h3",{id:"accept"},(0,n.kt)("inlineCode",{parentName:"h3"},"accept")),(0,n.kt)("p",null,"This method will accept the Alert and return the Alert message."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().accept ();\n")),(0,n.kt)("h3",{id:"dismiss"},(0,n.kt)("inlineCode",{parentName:"h3"},"dismiss")),(0,n.kt)("p",null,"This method will dismiss the Alert and return the Alert message."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nString message = onAlert ().dismiss ();\n")),(0,n.kt)("h2",{id:"verify-accept"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyAccept")),(0,n.kt)("p",null,"This method is used to verify the alert message after accepting the alert."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyAccept ().isEqualTo ("Swag Labs");\n')),(0,n.kt)("h2",{id:"verify-accept-alert"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyAccept (text)")),(0,n.kt)("p",null,"This method is used to verify the alert message after entering the text in the prompt and accepting it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyAccept ("Sample text").isEqualTo ("Swag Labs");\n')),(0,n.kt)("h2",{id:"verify-dismiss"},(0,n.kt)("inlineCode",{parentName:"h2"},"verifyDismiss")),(0,n.kt)("p",null,"This method is used to verify the alert message after dismissing the alert."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.AlertActions.onAlert;\n. . .\nonAlert ().verifyDismiss ().isEqualTo ("Swag Labs");\n')))}d.isMDXComponent=!0}}]);