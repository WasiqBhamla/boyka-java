"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[950],{5621:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>r});var t=o(5250),n=o(6376);const c={title:"DeviceActions",sidebar_position:2},s=void 0,d={id:"actions/device/device-actions",title:"DeviceActions",description:"Static methods",source:"@site/docs/api/actions/device/device-actions.md",sourceDirName:"actions/device",slug:"/actions/device/device-actions",permalink:"/boyka-framework/api/actions/device/device-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/device/device-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1709384144,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:2,frontMatter:{title:"DeviceActions",sidebar_position:2},sidebar:"api",previous:{title:"AndroidDeviceActions",permalink:"/boyka-framework/api/actions/device/android-device-actions"},next:{title:"AlertActions",permalink:"/boyka-framework/api/actions/drivers/alert-actions"}},a={},r=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onDevice</code>",id:"on-device",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>isKeyboardVisible</code>",id:"is-keyboard-visible",level:3},{value:"<code>hideKeyboard</code>",id:"hide-keyboard",level:3},{value:"<code>startRecording</code>",id:"start-recording",level:3},{value:"<code>stopRecording</code>",id:"stop-recording",level:3}];function l(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,t.jsx)(i.h3,{id:"on-device",children:(0,t.jsx)(i.code,{children:"onDevice"})}),"\n",(0,t.jsxs)(i.p,{children:["This will return ",(0,t.jsx)(i.code,{children:"IDeviceActions"})," which will expose different methods to handle different device specific actions."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"IDeviceActions deviceActions = DeviceActions.onDevice ();\n"})}),"\n",(0,t.jsx)(i.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,t.jsx)(i.h3,{id:"is-keyboard-visible",children:(0,t.jsx)(i.code,{children:"isKeyboardVisible"})}),"\n",(0,t.jsx)(i.p,{children:"This method is used to determine if the Mobile keyboard is visible."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.device.DeviceActions.onDevice;\n. . .\nvar isKeyboardDisplayed = onDevice ().isKeyboardVisible ();\n"})}),"\n",(0,t.jsx)(i.h3,{id:"hide-keyboard",children:(0,t.jsx)(i.code,{children:"hideKeyboard"})}),"\n",(0,t.jsx)(i.p,{children:"This method is used to hide the keyboard on the mobile."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.device.DeviceActions.onDevice;\n. . .\nonDevice ().hideKeyboard ();\n"})}),"\n",(0,t.jsx)(i.h3,{id:"start-recording",children:(0,t.jsx)(i.code,{children:"startRecording"})}),"\n",(0,t.jsx)(i.p,{children:"This method is used to start video recording for Mobile tests."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.device.DeviceActions.onDevice;\n. . .\nonDevice ().startRecording ();\n"})}),"\n",(0,t.jsx)(i.h3,{id:"stop-recording",children:(0,t.jsx)(i.code,{children:"stopRecording"})}),"\n",(0,t.jsx)(i.p,{children:"This method is used to stop video recording for Mobile tests."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.device.DeviceActions.onDevice;\n. . .\nonDevice ().stopRecording ();\n"})})]})}function h(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},6376:(e,i,o)=>{o.d(i,{Z:()=>d,a:()=>s});var t=o(79);const n={},c=t.createContext(n);function s(e){const i=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(c.Provider,{value:i},e.children)}}}]);