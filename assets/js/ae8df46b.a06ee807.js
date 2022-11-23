"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3617],{167:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(5721);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?r.createElement(g,i(i({ref:t},p),{},{components:a})):r.createElement(g,i({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8122:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(8533),n=(a(5721),a(167));const o={sidebar_position:3,title:"\ud83d\udc68\u200d\ud83e\uddbc Usage"},i=void 0,l={unversionedId:"getting-started/usage",id:"getting-started/usage",title:"\ud83d\udc68\u200d\ud83e\uddbc Usage",description:"Add as Maven dependency",source:"@site/docs/framework-docs/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/boyka-framework/docs/getting-started/usage",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/getting-started/usage.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1669213605,formattedLastUpdatedAt:"Nov 23, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udc68\u200d\ud83e\uddbc Usage"},sidebar:"docs",previous:{title:"\ud83d\udea9 Pre-Requisite",permalink:"/boyka-framework/docs/getting-started/pre-requisite"},next:{title:"\ud83d\udd29 Configuration",permalink:"/boyka-framework/docs/guides/configuration"}},d={},s=[{value:"Add as Maven dependency",id:"add-as-maven-dependency",level:2},{value:"Add as Gradle dependency",id:"add-as-gradle-dependency",level:2},{value:"\u2b07\ufe0f Download the jar",id:"\ufe0f-download-the-jar",level:2},{value:"\u2615 Examples",id:"-examples",level:2}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"add-as-maven-dependency"},"Add as Maven dependency"),(0,n.kt)("p",null,"You can start by adding the following dependency to your ",(0,n.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=pom.xml",title:"pom.xml"},"<dependency>\n  <groupId>com.github.wasiqb.boyka</groupId>\n  <artifactId>boyka-framework</artifactId>\n  <version>0.9.0</version>\n</dependency>\n")),(0,n.kt)("h2",{id:"add-as-gradle-dependency"},"Add as Gradle dependency"),(0,n.kt)("p",null,"You can start by adding the following dependency to your ",(0,n.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy",metastring:"title=build.gradle",title:"build.gradle"},'compile "com.github.wasiqb.boyka:boyka-framework:0.9.0"\n')),(0,n.kt)("h2",{id:"\ufe0f-download-the-jar"},"\u2b07\ufe0f Download the jar"),(0,n.kt)("p",null,"You can also download the JAR files from the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/BoykaFramework/boyka-framework/releases/latest"},"GitHub Releases page"),"."),(0,n.kt)("p",null,"After downloading the jar, you can add it to your class path."),(0,n.kt)("h2",{id:"-examples"},"\u2615 Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/api/setup-config"},"How to configure Boyka for API Automation?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/api/compose-request"},"How to compose a request?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/api/execute-request"},"How to execute a request?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/api/verify-response"},"How to verify the response?")))),(0,n.kt)("li",{parentName:"ul"},"Web:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/web/setup-config"},"How to configure Boyka for Web Automation?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/web/create-page-object"},"How to create page object?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/guides/web/write-test"},"How to write test using the page object?"))))))}c.isMDXComponent=!0}}]);