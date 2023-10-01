"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9896],{8570:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(79);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=r,m=p["".concat(c,".").concat(u)]||p[u]||v[u]||i;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},910:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>v,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(3262),r=(a(79),a(8570));const i={title:"NavigateActions",sidebar_position:6},o=void 0,s={unversionedId:"actions/drivers/navigate-actions",id:"actions/drivers/navigate-actions",title:"NavigateActions",description:"Static methods",source:"@site/docs/api/actions/drivers/navigate-actions.md",sourceDirName:"actions/drivers",slug:"/actions/drivers/navigate-actions",permalink:"/boyka-framework/api/actions/drivers/navigate-actions",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/api/actions/drivers/navigate-actions.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1696145763,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:6,frontMatter:{title:"NavigateActions",sidebar_position:6},sidebar:"api",previous:{title:"FrameActions",permalink:"/boyka-framework/api/actions/drivers/frame-actions"},next:{title:"WindowActions",permalink:"/boyka-framework/api/actions/drivers/window-actions"}},c={},l=[{value:"Static methods",id:"static-methods",level:2},{value:"<code>navigate</code>",id:"navigate",level:3},{value:"Instance methods",id:"instance-methods",level:2},{value:"<code>back</code>",id:"back",level:3},{value:"<code>forward</code>",id:"forward",level:3},{value:"<code>refresh</code>",id:"refresh",level:3},{value:"<code>to</code>",id:"to",level:3},{value:"<code>getUrl</code>",id:"geturl",level:3},{value:"<code>verifyUrl</code>",id:"verifyurl",level:3}],d={toc:l},p="wrapper";function v(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"static-methods"},"Static methods"),(0,r.kt)("h3",{id:"navigate"},(0,r.kt)("inlineCode",{parentName:"h3"},"navigate")),(0,r.kt)("p",null,"This will return ",(0,r.kt)("inlineCode",{parentName:"p"},"INavigateActions")," which will expose different methods to handle navigate related actions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"INavigateActions navigateActions = NavigateActions.navigate ();\n")),(0,r.kt)("h2",{id:"instance-methods"},"Instance methods"),(0,r.kt)("h3",{id:"back"},(0,r.kt)("inlineCode",{parentName:"h3"},"back")),(0,r.kt)("p",null,"This method will go back to the previous page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().back ();\n")),(0,r.kt)("h3",{id:"forward"},(0,r.kt)("inlineCode",{parentName:"h3"},"forward")),(0,r.kt)("p",null,"This method will go forward to the next page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().forward ();\n")),(0,r.kt)("h3",{id:"refresh"},(0,r.kt)("inlineCode",{parentName:"h3"},"refresh")),(0,r.kt)("p",null,"This method will refresh the browser window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().refresh ();\n")),(0,r.kt)("h3",{id:"to"},(0,r.kt)("inlineCode",{parentName:"h3"},"to")),(0,r.kt)("p",null,"This method will navigate you to the URL mentioned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().to ("https://google.com");\n')),(0,r.kt)("h3",{id:"geturl"},(0,r.kt)("inlineCode",{parentName:"h3"},"getUrl")),(0,r.kt)("p",null,"This method will get the URL of the browser window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nSystem.out.println (navigate ().getUrl ());\n")),(0,r.kt)("h3",{id:"verifyurl"},(0,r.kt)("inlineCode",{parentName:"h3"},"verifyUrl")),(0,r.kt)("p",null,"This method is used to verify the browser url."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import static com.github.wasiqb.boyka.actions.drivers.NavigateActions.navigate;\n. . .\nnavigate ().verifyUrl ()\n    .isEqualTo ("https://www.swaglabs.com/");\n')))}v.isMDXComponent=!0}}]);