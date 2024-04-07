"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4583],{1235:(e,t,i)=>{i.r(t),i.d(t,{default:()=>P});i(8318);var r=i(6552),s=i(6601);const o="features_ez_S",a="featureSvg_bdXF";var n=i(1853),l=i(9214);const d=e=>{let{title:t,image:i}=e;return(0,l.jsx)("div",{className:"text--center",children:(0,l.jsx)("img",{className:a,alt:t,src:(0,n.A)(i)})})},m=e=>{let{title:t,description:i}=e;return(0,l.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,l.jsx)("h2",{children:t}),(0,l.jsx)("p",{children:i})]})},c=e=>{let{title:t,image:i,description:r}=e;return(0,l.jsxs)("div",{className:(0,s.A)("col col--4"),children:[(0,l.jsx)(d,{title:t,image:i}),(0,l.jsx)(m,{title:t,description:r})]})},g=e=>{let{features:t}=e;return(0,l.jsx)("section",{className:o,children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:t.map(((e,t)=>(0,l.jsx)(c,{...e},t)))})})})},u=JSON.parse('{"Sl":"/img/boyka-banner.png","DD":"","h_":"Ultimate Test Automation framework for Web, API, Android and iOS automation testing","Uo":[{"id":1,"text":"Get Started","type":"button--primary","href":"/docs/intro","target":"_self"},{"id":2,"text":"View on GitHub","type":"button--info","href":"https://github.com/BoykaFramework/boyka-framework","target":"_self"},{"id":3,"text":"Join us on Discord","type":"button--info","href":"https://dub.sh/boyka-discord","target":"_blank"}],"MV":[{"id":1,"userId":"BoykaFramework","repoName":"boyka-framework","type":"Star"},{"id":2,"userId":"BoykaFramework","repoName":"boyka-framework","type":"Watch"},{"id":3,"userId":"BoykaFramework","repoName":"boyka-framework","type":"Fork"},{"id":4,"userId":"BoykaFramework"}],"qT":[{"title":"Zero boilerplate code","image":"img/home/no-code.svg","description":"Exposes ready to use static methods to perform various actions on web, mobile and API platforms, thus reducing the need to write any boilerplate codes"},{"title":"Configurable","image":"img/home/configurable.svg","description":"Highly configurable via JSON files and environment variables. It is easy to extend and customize the framework"},{"title":"API Testing","image":"img/home/api-testing.svg","description":"Supports API testing with simple and easy to write test cases"},{"title":"Web Testing","image":"img/home/web-testing.svg","description":"Supports Web testing with Chrome, Firefox, Edge and Safari browsers"},{"title":"Mobile Testing","image":"img/home/mobile_devices.svg","description":"Supports Mobile testing with Android and iOS platforms for Native, Hybrid and Web applications"},{"title":"Video Recording","image":"img/home/video-recording.svg","description":"Allows video recording of Mobile automation tests"},{"title":"Cloud Support","image":"img/home/cloud-support.svg","description":"Provides facility to run tests on Cloud platforms like BrowserStack"},{"title":"Parallel execution","image":"img/home/parallel.svg","description":"Allows parallel and sequential execution of tests using any testing framework"},{"title":"Multi-Platform Testing","image":"img/home/real_time.svg","description":"Test multi-user multi-platform applications"},{"title":"Logging events","image":"img/home/logging.svg","description":"Provides logging support using Log4J2 to log all events occurred during test execution"},{"title":"In-built verification","image":"img/home/inline-check.svg","description":"Provides inbuilt verification for inline assertion of element properties and API responses"},{"title":"Response schema verification","image":"img/home/schema-validation.svg","description":"Provides API response schema verification for Rest APIs"}]}'),p="HeroContainer_v2Am",h="HeroContent_wUuq",b="HeroTitle_d7d0",f="HeroDescription_Bq3r",v="CallToActions_tDGG",x="ctaButtons_Nl6G",k="SocialButtons_sdl9";var w=i(6964);const y=e=>{let{userId:t,repoName:i,type:r="Follow"}=e,s=`${t}`,o=`${r}`,a=`${r}`;return"Follow"!==r&&i&&(s+=`/${i}`,o+=` ${s}`),"Watch"===r?s+="/subscription":"Fork"===r?s+="/fork":"Follow"===r&&(a+=` @${t}`),(0,l.jsx)(w.A,{href:`https://github.com/${s}`,"data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-size":"large","data-show-count":"true","aria-label":`${o} on GitHub`,children:a})};var j=i(4482);const _=e=>{let{href:t,type:i,target:r,text:o}=e;return(0,l.jsx)(j.A,{className:(0,s.A)("button",i),to:(0,n.A)(t),target:r,children:o})};var N=i(6693),A=i.n(N);const I=e=>{let{title:t,tagLine:i}=e;return(0,l.jsxs)("div",{className:h,children:[(0,l.jsx)("h1",{className:b,children:t}),(0,l.jsx)(A(),{avgTypingDelay:40,cursor:{hideWhenDone:!0,show:!1},children:(0,l.jsx)("p",{className:f,children:i})}),(0,l.jsx)("a",{href:"https://www.producthunt.com/posts/boyka-framework?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-boyka-framework",target:"_blank",rel:"noreferrer",children:(0,l.jsx)("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=352770&theme=light",alt:"Boyka Framework",width:"245",height:"45"})})]})},S=e=>{let{buttons:t}=e;return(0,l.jsx)("div",{className:x,children:t?.map((e=>(0,l.jsx)(_,{href:e.href,text:e.text,type:e.type,target:e.target},e.id)))})},B=e=>{let{gitButtons:t}=e;return(0,l.jsx)("div",{className:k,children:t?.map((e=>(0,l.jsx)(y,{id:e.id,userId:e.userId,repoName:e.repoName,type:e.type},e.id)))})},F=e=>{let{title:t,tagLine:i,image:r,buttons:s=[],gitButtons:o=[]}=e;return(0,l.jsxs)("section",{className:p,style:{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${(0,n.A)(r)})`},children:[(0,l.jsx)(I,{title:t,tagLine:i}),(0,l.jsxs)("div",{className:v,children:[(0,l.jsx)(S,{buttons:s}),(0,l.jsx)(B,{gitButtons:o})]})]})},P=()=>(0,l.jsx)(r.A,{title:u.DD,description:u.h_,children:(0,l.jsxs)("main",{children:[(0,l.jsx)(F,{title:u.DD,tagLine:u.h_,image:u.Sl,buttons:u.Uo,gitButtons:u.MV}),(0,l.jsx)(g,{features:u.qT})]})})}}]);