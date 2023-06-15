"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2947],{167:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(5721);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",w={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||w[m]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>w,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(4715),o=(n(5721),n(167));const a={title:"WindowActions",sidebar_position:7},r=void 0,s={unversionedId:"actions/drivers/window-actions",id:"actions/drivers/window-actions",title:"WindowActions",description:"Static methods",source:"@site/docs/api/actions/drivers/window-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/window-actions",permalink:"/boyka-framework/api/actions/drivers/window-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/window-actions.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1686820601,formattedLastUpdatedAt:"Jun 15, 2023",sidebarPosition:7,frontMatter:{title:"WindowActions",sidebar_position:7},sidebar:"api",previous:{title:"NavigateActions",permalink:"/boyka-framework/api/actions/drivers/navigate-actions"},next:{title:"ClickableActions",permalink:"/boyka-framework/api/actions/elements/clickable-actions"}},l={},d=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>onWindow</code>",id:"onwindow",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>close</code>",id:"close",level:3},{value:"<code>currentHandle</code>",id:"current-handle",level:3},{value:"<code>fullScreen</code>",id:"full-screen",level:3},{value:"<code>maximize</code>",id:"maximize",level:3},{value:"<code>minimize</code>",id:"minimize",level:3},{value:"<code>switchToDefault</code>",id:"switch-to-default",level:3},{value:"<code>switchToNew</code>",id:"switch-to-new",level:3},{value:"<code>switchTo (handle)</code>",id:"switch-to",level:3},{value:"<code>takeScreenshot</code>",id:"take-screenshot",level:3},{value:"<code>takeScreenshot (path)</code>",id:"take-screenshot-path",level:3},{value:"<code>title</code>",id:"title",level:3},{value:"<code>viewportSize</code>",id:"viewport-size",level:3},{value:"<code>handles</code>",id:"handles",level:3},{value:"<code>verifyBrowserTitle</code>",id:"verify-browser-title",level:3}],c={toc:d},p="wrapper";function w(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"static-methods"},"Static methods"),(0,o.kt)("h3",{id:"onwindow"},(0,o.kt)("inlineCode",{parentName:"h3"},"onWindow")),(0,o.kt)("p",null,"This will return ",(0,o.kt)("inlineCode",{parentName:"p"},"IWindowActions")," which will expose different methods to handle windows related actions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"IWindowActions windowActions = WindowActions.onWindow ();\n")),(0,o.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,o.kt)("h3",{id:"close"},(0,o.kt)("inlineCode",{parentName:"h3"},"close")),(0,o.kt)("p",null,"This method will close the open browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().close ();\n")),(0,o.kt)("h3",{id:"current-handle"},(0,o.kt)("inlineCode",{parentName:"h3"},"currentHandle")),(0,o.kt)("p",null,"This method returns the current window handle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nString handle = onWindow ().currentHandle ();\n")),(0,o.kt)("h3",{id:"full-screen"},(0,o.kt)("inlineCode",{parentName:"h3"},"fullScreen")),(0,o.kt)("p",null,"This method will on-demand do full screen on the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().fullScreen ();\n")),(0,o.kt)("h3",{id:"maximize"},(0,o.kt)("inlineCode",{parentName:"h3"},"maximize")),(0,o.kt)("p",null,"This method will maximize the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().maximize ();\n")),(0,o.kt)("h3",{id:"minimize"},(0,o.kt)("inlineCode",{parentName:"h3"},"minimize")),(0,o.kt)("p",null,"This method will minimize the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().minimize ();\n")),(0,o.kt)("h3",{id:"switch-to-default"},(0,o.kt)("inlineCode",{parentName:"h3"},"switchToDefault")),(0,o.kt)("p",null,"This method will switch to the first window after you close any of the other opened windows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().switchToDefault ();\n")),(0,o.kt)("h3",{id:"switch-to-new"},(0,o.kt)("inlineCode",{parentName:"h3"},"switchToNew")),(0,o.kt)("p",null,"This method is used to switch to new window of given type."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\nimport org.openqa.selenium.WindowType;\n. . .\nonWindow ().switchToNew (WindowType.TAB);\n")),(0,o.kt)("h3",{id:"switch-to"},(0,o.kt)("inlineCode",{parentName:"h3"},"switchTo (handle)")),(0,o.kt)("p",null,"This method is used to switch to window of given handle."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().switchTo ("window-handle");\n')),(0,o.kt)("h3",{id:"take-screenshot"},(0,o.kt)("inlineCode",{parentName:"h3"},"takeScreenshot")),(0,o.kt)("p",null,"This method will take the screenshot of the current page and save it at the path configured in ",(0,o.kt)("inlineCode",{parentName:"p"},"boyka-config.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().takeScreenshot ();\n")),(0,o.kt)("h3",{id:"take-screenshot-path"},(0,o.kt)("inlineCode",{parentName:"h3"},"takeScreenshot (path)")),(0,o.kt)("p",null,"This method will take the screenshot of the current page and save it at the path mentioned in the parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().takeScreenshot ("path/to/screenshot.png");\n')),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("p",null,"This method will get the title of the browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nSystem.out.println (onWindow ().getTitle ());\n")),(0,o.kt)("h3",{id:"viewport-size"},(0,o.kt)("inlineCode",{parentName:"h3"},"viewportSize")),(0,o.kt)("p",null,"This method will the size dimension of the screen viewport for Mobile screen or Browser window."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\nimport org.openqa.selenium.Dimension;\n. . .\nDimension size = onWindow ().viewportSize ();\n")),(0,o.kt)("h3",{id:"handles"},(0,o.kt)("inlineCode",{parentName:"h3"},"handles")),(0,o.kt)("p",null,"This method will get the list of all open window handles."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nList<String> handles = onWindow ().handles ();\n")),(0,o.kt)("h3",{id:"verify-browser-title"},(0,o.kt)("inlineCode",{parentName:"h3"},"verifyBrowserTitle")),(0,o.kt)("p",null,"This method is used to verify the browser title."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.WindowActions.onWindow;\n. . .\nonWindow ().verifyTitle (title).isEqualTo ("Swag Labs");\n')))}w.isMDXComponent=!0}}]);