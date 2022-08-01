"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{3002:function(e,t,r){r.r(t),r.d(t,{default:function(){return Z}});var i=r(5721),a=r(8142),n=r(744),o=r(8795),s="features_ez_S",l="featureSvg_bdXF",m=r(1288),c=function(e){var t=e.title,r=e.image;return i.createElement("div",{className:"text--center"},i.createElement("img",{className:l,alt:t,src:(0,m.Z)(r)}))},d=function(e){var t=e.title,r=e.description;return i.createElement("div",{className:"text--center padding-horiz--md"},i.createElement("h2",null,t),i.createElement("p",null,r))},u=function(e){var t=e.title,r=e.image,a=e.description;return i.createElement("div",{className:(0,o.Z)("col col--4")},i.createElement(c,{title:t,image:r}),i.createElement(d,{title:t,description:a}))},g=function(e){var t=e.features;return i.createElement("section",{className:s},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},t.map((function(e,t){return i.createElement(u,(0,n.Z)({key:t},e))})))))},p=JSON.parse('{"BH":"/img/boyka-banner.png","TN":"","WL":"Ultimate Test Automation framework for Web, API, Android and iOS automation testing","ZY":[{"id":1,"text":"Get Started","type":"button--primary","href":"/docs/intro","target":"_self"},{"id":2,"text":"View on GitHub","type":"button--info","href":"https://github.com/WasiqBhamla/boyka-framework","target":"_self"},{"id":3,"text":"Join us on Discord","type":"button--info","href":"https://discord.gg/dUg8K9DAsR","target":"_blank"}],"tr":[{"id":1,"userId":"WasiqBhamla","repoName":"boyka-framework","type":"Star"},{"id":2,"userId":"WasiqBhamla","repoName":"boyka-framework","type":"Watch"},{"id":3,"userId":"WasiqBhamla","repoName":"boyka-framework","type":"Fork"},{"id":4,"userId":"WasiqB"}],"R2":[{"title":"Zero boilerplate code","image":"img/home/no-code.svg","description":"Exposes ready to use static methods to perform various actions on web, mobile and API platforms, thus reducing the need to write any boilerplate codes."},{"title":"Configurable","image":"img/home/configurable.svg","description":"Highly configurable via JSON files and environment variables. It is easy to extend and customize the framework."},{"title":"API Testing","image":"img/home/api-testing.svg","description":"Supports API testing with simple and easy to write test cases."},{"title":"Web Testing","image":"img/home/web-testing.svg","description":"Supports Web testing with Chrome, Firefox, Edge and Safari browsers."},{"title":"Cloud Support","image":"img/home/cloud-support.svg","description":"Provides facility to run tests on Cloud platforms like BrowserStack."},{"title":"Parallel execution","image":"img/home/parallel.svg","description":"Allows parallel and sequential execution of tests using any testing framework."},{"title":"Logging events","image":"img/home/logging.svg","description":"Provides logging support using Log4J2 to log all events occurred during test execution."},{"title":"Inbuilt verification","image":"img/home/inline-check.svg","description":"Provides inbuilt verification for inline assertion of element properties and API responses."},{"title":"Response schema verification","image":"img/home/schema-validation.svg","description":"Provides API response schema verification for Rest APIs."}]}'),f="HeroContainer_v2Am",h="HeroContent_wUuq",v="HeroTitle_d7d0",b="HeroDescription_Bq3r",k="CallToActions_tDGG",w="ctaButtons_Nl6G",E="SocialButtons_sdl9",y=r(3669),N=function(e){var t=e.userId,r=e.repoName,a=void 0===r?void 0:r,n=e.type,o=void 0===n?"Follow":n,s=""+t,l=""+o,m=""+o;return"Follow"!==o&&a&&(l+=" "+(s+="/"+a)),"Watch"===o?s+="/subscription":"Fork"===o?s+="/fork":"Follow"===o&&(m+=" @"+t),i.createElement(y.Z,{href:"https://github.com/"+s,"data-color-scheme":"no-preference: dark_dimmed; light: dark_dimmed; dark: dark_dimmed;","data-size":"large","data-show-count":"true","aria-label":l+" on GitHub"},m)},_=r(6138),I=function(e){var t=e.href,r=e.type,a=e.target,n=e.text;return i.createElement(_.Z,{className:(0,o.Z)("button",r),to:t,target:a},n)},B=r(8157),x=r.n(B),W=function(e){var t=e.title,r=e.tagLine;return i.createElement("div",{className:h},i.createElement("h1",{className:v},t),i.createElement(x(),{avgTypingDelay:40,cursor:{hideWhenDone:!0,show:!1}},i.createElement("p",{className:b},r)),i.createElement("a",{href:"https://www.producthunt.com/posts/boyka-framework?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-boyka-framework",target:"_blank",rel:"noreferrer"},i.createElement("img",{src:"https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=352770&theme=light",alt:"Boyka Framework",width:"245",height:"45"})))},A=function(e){var t=e.buttons;return i.createElement("div",{className:w},t&&t.map((function(e){return i.createElement(I,{key:e.id,href:(0,m.Z)(e.href),text:e.text,type:e.type,target:e.target})})))},S=function(e){var t=e.gitButtons;return i.createElement("div",{className:E},t&&t.map((function(e){return i.createElement(N,{key:e.id,id:e.id,userId:e.userId,repoName:e.repoName,type:e.type})})))},P=function(e){var t=e.title,r=e.tagLine,a=e.image,n=e.buttons,o=void 0===n?[]:n,s=e.gitButtons,l=void 0===s?[]:s;return i.createElement("section",{className:f,style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+(0,m.Z)(a)+")"}},i.createElement(W,{title:t,tagLine:r}),i.createElement("div",{className:k},i.createElement(A,{buttons:o}),i.createElement(S,{gitButtons:l})))},Z=function(){return i.createElement(a.Z,{title:p.TN,description:p.WL},i.createElement("main",null,i.createElement(P,{title:p.TN,tagLine:p.WL,image:p.BH,buttons:p.ZY,gitButtons:p.tr}),i.createElement(g,{features:p.R2})))}}}]);