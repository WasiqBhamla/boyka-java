"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2947],{4241:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var o=n(5250),t=n(6376);const s={title:"WindowActions",sidebar_position:7},d=void 0,r={id:"actions/drivers/window-actions",title:"WindowActions",description:"Static methods",source:"@site/docs/api/actions/drivers/window-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/window-actions",permalink:"/boyka-framework/api/actions/drivers/window-actions",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/window-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1709384144,formattedLastUpdatedAt:"Mar 2, 2024",sidebarPosition:7,frontMatter:{title:"WindowActions",sidebar_position:7},sidebar:"api",previous:{title:"NavigateActions",permalink:"/boyka-framework/api/actions/drivers/navigate-actions"},next:{title:"ClickableActions",permalink:"/boyka-framework/api/actions/elements/clickable-actions"}},c={},a=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onWindow</code>",id:"onwindow",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>close</code>",id:"close",level:3},{value:"<code>currentHandle</code>",id:"current-handle",level:3},{value:"<code>fullScreen</code>",id:"full-screen",level:3},{value:"<code>maximize</code>",id:"maximize",level:3},{value:"<code>minimize</code>",id:"minimize",level:3},{value:"<code>switchToDefault</code>",id:"switch-to-default",level:3},{value:"<code>switchToNew</code>",id:"switch-to-new",level:3},{value:"<code>switchTo (handle)</code>",id:"switch-to",level:3},{value:"<code>takeScreenshot</code>",id:"take-screenshot",level:3},{value:"<code>takeScreenshot (path)</code>",id:"take-screenshot-path",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>viewportSize</code>",id:"viewport-size",level:3},{value:"<code>handles</code>",id:"handles",level:3},{value:"<code>verifyBrowserTitle</code>",id:"verify-browser-title",level:3}];function l(e){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h2,{id:"static-methods",children:"Static methods"}),"\n",(0,o.jsx)(i.h3,{id:"onwindow",children:(0,o.jsx)(i.code,{children:"onWindow"})}),"\n",(0,o.jsxs)(i.p,{children:["This will return ",(0,o.jsx)(i.code,{children:"IWindowActions"})," which will expose different methods to handle windows related actions."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"IWindowActions windowActions = WindowActions.onWindow ();\n"})}),"\n",(0,o.jsx)(i.h2,{id:"instance-methods",children:"Instance methods"}),"\n",(0,o.jsx)(i.h3,{id:"close",children:(0,o.jsx)(i.code,{children:"close"})}),"\n",(0,o.jsx)(i.p,{children:"This method will close the open browser window."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().close ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"current-handle",children:(0,o.jsx)(i.code,{children:"currentHandle"})}),"\n",(0,o.jsx)(i.p,{children:"This method returns the current window handle."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nString handle = onWindow ().currentHandle ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"full-screen",children:(0,o.jsx)(i.code,{children:"fullScreen"})}),"\n",(0,o.jsx)(i.p,{children:"This method will on-demand do full screen on the browser window."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().fullScreen ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"maximize",children:(0,o.jsx)(i.code,{children:"maximize"})}),"\n",(0,o.jsx)(i.p,{children:"This method will maximize the browser window."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().maximize ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"minimize",children:(0,o.jsx)(i.code,{children:"minimize"})}),"\n",(0,o.jsx)(i.p,{children:"This method will minimize the browser window."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().minimize ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"switch-to-default",children:(0,o.jsx)(i.code,{children:"switchToDefault"})}),"\n",(0,o.jsx)(i.p,{children:"This method will switch to the first window after you close any of the other opened windows."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().switchToDefault ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"switch-to-new",children:(0,o.jsx)(i.code,{children:"switchToNew"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to switch to new window of given type."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\nimport org.openqa.selenium.WindowType;\n. . .\nonWindow ().switchToNew (WindowType.TAB);\n"})}),"\n",(0,o.jsx)(i.h3,{id:"switch-to",children:(0,o.jsx)(i.code,{children:"switchTo (handle)"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to switch to window of given handle."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().switchTo ("window-handle");\n'})}),"\n",(0,o.jsx)(i.h3,{id:"take-screenshot",children:(0,o.jsx)(i.code,{children:"takeScreenshot"})}),"\n",(0,o.jsxs)(i.p,{children:["This method will take the screenshot of the current page and save it at the path configured in ",(0,o.jsx)(i.code,{children:"boyka-config.json"}),"."]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().takeScreenshot ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"take-screenshot-path",children:(0,o.jsx)(i.code,{children:"takeScreenshot (path)"})}),"\n",(0,o.jsx)(i.p,{children:"This method will take the screenshot of the current page and save it at the path mentioned in the parameter."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().takeScreenshot ("path/to/screenshot.png");\n'})}),"\n",(0,o.jsx)(i.h3,{id:"title",children:(0,o.jsx)(i.code,{children:"title"})}),"\n",(0,o.jsx)(i.p,{children:"This method will get the title of the browser window."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nSystem.out.println (onWindow ().getTitle ());\n"})}),"\n",(0,o.jsx)(i.h3,{id:"viewport-size",children:(0,o.jsx)(i.code,{children:"viewportSize"})}),"\n",(0,o.jsx)(i.p,{children:"This method will the size dimension of the screen viewport for Mobile screen or Browser window."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\nimport org.openqa.selenium.Dimension;\n. . .\nDimension size = onWindow ().viewportSize ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"handles",children:(0,o.jsx)(i.code,{children:"handles"})}),"\n",(0,o.jsx)(i.p,{children:"This method will get the list of all open window handles."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:"import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nList<String> handles = onWindow ().handles ();\n"})}),"\n",(0,o.jsx)(i.h3,{id:"verify-browser-title",children:(0,o.jsx)(i.code,{children:"verifyBrowserTitle"})}),"\n",(0,o.jsx)(i.p,{children:"This method is used to verify the browser title."}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-java",children:'import static io.github.boykaframework.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().verifyTitle (title).isEqualTo ("Swag Labs");\n'})})]})}function h(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},6376:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>d});var o=n(79);const t={},s=o.createContext(t);function d(e){const i=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:i},e.children)}}}]);