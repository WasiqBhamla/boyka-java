"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3634],{167:function(e,t,o){o.d(t,{Zo:function(){return m},kt:function(){return d}});var i=o(7612);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(o),d=n,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return o?i.createElement(f,r(r({ref:t},m),{},{components:o})):i.createElement(f,r({ref:t},m))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<a;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6624:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var i=o(5731),n=o(2706),a=(o(7612),o(167)),r=["components"],l={title:"\ud83d\udce9 Commit steps",sidebar_position:5},s=void 0,c={unversionedId:"project-details/commit-steps",id:"project-details/commit-steps",title:"\ud83d\udce9 Commit steps",description:"We are using Conventional Commits to ensure that our code follows a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:",source:"@site/docs/contributing/project-details/commit-steps.md",sourceDirName:"project-details",slug:"/project-details/commit-steps",permalink:"/boyka-framework/contributing/project-details/commit-steps",draft:!1,editUrl:"https://github.com/WasiqBhamla/boyka-framework/edit/main/website/docs/contributing/project-details/commit-steps.md",tags:[],version:"current",lastUpdatedBy:"Ajay Makode",lastUpdatedAt:1655547375,formattedLastUpdatedAt:"6/18/2022",sidebarPosition:5,frontMatter:{title:"\ud83d\udce9 Commit steps",sidebar_position:5},sidebar:"contributing",previous:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"},next:{title:"\ud83e\udd1d Get your PR ready",permalink:"/boyka-framework/contributing/project-details/ready-your-pr"}},m={},p=[{value:"Add Conventional Commits extension",id:"add-conventional-commits-extension",level:2},{value:"Perform commit",id:"perform-commit",level:2},{value:"Add commit type",id:"add-commit-type",level:2},{value:"Add commit scope",id:"add-commit-scope",level:2},{value:"Add relatable Emoji",id:"add-relatable-emoji",level:2},{value:"Add short description",id:"add-short-description",level:2},{value:"Add long description (optional)",id:"add-long-description-optional",level:2},{value:"Add breaking changes details (optional)",id:"add-breaking-changes-details-optional",level:2},{value:"Pre-commit checks",id:"pre-commit-checks",level:2},{value:"Push your commit",id:"push-your-commit",level:2},{value:"Create draft PR",id:"create-draft-pr",level:2}],u={toc:p};function d(e){var t=e.components,l=(0,n.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are using ",(0,a.kt)("a",{parentName:"p",href:"https://conventionalcommits.org/"},"Conventional Commits")," to ensure that our code follows a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:"),(0,a.kt)("h2",{id:"add-conventional-commits-extension"},"Add Conventional Commits extension"),(0,a.kt)("p",null,"Search for ",(0,a.kt)("inlineCode",{parentName:"p"},"Conventional Commits")," in the VSCode Marketplace and install it."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commits Extension",src:o(7833).Z})),(0,a.kt)("h2",{id:"perform-commit"},"Perform commit"),(0,a.kt)("p",null,"When you are ready to commit, press on Conventional commit icon in source control tab to open the commit prompt."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Prompt",src:o(4310).Z})),(0,a.kt)("h2",{id:"add-commit-type"},"Add commit type"),(0,a.kt)("p",null,"When you click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Conventional Commit")," button, you will see a list of available commit types. Select the one that best describes your changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Type",src:o(4066).Z})),(0,a.kt)("h2",{id:"add-commit-scope"},"Add commit scope"),(0,a.kt)("p",null,"After you select the commit type, you will see a list of available scopes. Select the one that best describes your changes. If you don't see any scope, you can let the ",(0,a.kt)("inlineCode",{parentName:"p"},"boyka-core")," team know about it and we will add it for you."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Scope",src:o(8246).Z})),(0,a.kt)("h2",{id:"add-relatable-emoji"},"Add relatable Emoji"),(0,a.kt)("p",null,"After you select the commit scope, you will see a list of available Emoji's. Select the one that best describes your changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Emoji",src:o(6003).Z})),(0,a.kt)("h2",{id:"add-short-description"},"Add short description"),(0,a.kt)("p",null,"After you select the commit emoji, you will see a text field where you can write a short description of your changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Description",src:o(6638).Z})),(0,a.kt)("h2",{id:"add-long-description-optional"},"Add long description (optional)"),(0,a.kt)("p",null,"After you write the short description, you will see a text field where you can write a long description of your changes. This is optional, but it is recommended to write a detailed description of your changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Long Description",src:o(5262).Z})),(0,a.kt)("h2",{id:"add-breaking-changes-details-optional"},"Add breaking changes details (optional)"),(0,a.kt)("p",null,"After you write the long description, you will see a text field where you can write a detailed description of the breaking changes. This is optional, but it is recommended to write a detailed description of the breaking changes."),(0,a.kt)("p",null,"Make sure to append the ",(0,a.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," tag before the description."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Conventional Commit Breaking Changes",src:o(4486).Z})),(0,a.kt)("h2",{id:"pre-commit-checks"},"Pre-commit checks"),(0,a.kt)("p",null,"After you have finished writing the commit message in last step, VSCode will try to automatically commit your changes."),(0,a.kt)("p",null,"In the background, pre-commit checks will be performed. If any of them fail, you will be asked to fix the issue before you can commit."),(0,a.kt)("p",null,"This failure will not be clear in VSCode, instead you will see an Error pop-up."),(0,a.kt)("p",null,"In that case, you can copy the commit message and paste it in Terminal and execute the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'> git commit -m "<copied commit message>"\n')),(0,a.kt)("p",null,"Following checks will happen when you commit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Commit message lint to check if the commit message is in correct format"),(0,a.kt)("li",{parentName:"ul"},"ESLint to check if the website code complies with the ",(0,a.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")," rules. It will only run if there is change to ",(0,a.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".jsx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".ts")," or ",(0,a.kt)("inlineCode",{parentName:"li"},".tsx")," files."),(0,a.kt)("li",{parentName:"ul"},"Prettier to check if the website code complies with the ",(0,a.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")," rules. It will only run if there is change to ",(0,a.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".jsx"),", ",(0,a.kt)("inlineCode",{parentName:"li"},".ts")," or ",(0,a.kt)("inlineCode",{parentName:"li"},".tsx")," files."),(0,a.kt)("li",{parentName:"ul"},"Build the documentation website to check if the website builds successfully."),(0,a.kt)("li",{parentName:"ul"},"Build the Java project to check if the checkstyle and code compilation is successful.")),(0,a.kt)("h2",{id:"push-your-commit"},"Push your commit"),(0,a.kt)("p",null,"You can push your changes from the Terminal by executing the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> git push\n")),(0,a.kt)("p",null,"Or, from VSCode, you can click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Push")," button in the source control tab."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Push Commit",src:o(3034).Z})),(0,a.kt)("p",null,"When you click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Push")," button, you will see a pop-up asking you to confirm your push."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Push Commit",src:o(4529).Z})),(0,a.kt)("h2",{id:"create-draft-pr"},"Create draft PR"),(0,a.kt)("p",null,"As soon as you push your commit, you must create a draft PR on GitHub. Because our workflows will only get triggered on PR's that are raised against ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch."))}d.isMDXComponent=!0},4486:function(e,t,o){t.Z=o.p+"assets/images/commit-breaking-changes-13be928032a05c737ce1b7dc2c6e8826.png"},6638:function(e,t,o){t.Z=o.p+"assets/images/commit-description-86a28b51f291d01b11c285c414c6765f.png"},6003:function(e,t,o){t.Z=o.p+"assets/images/commit-emoji-d346fe1d4451028f12c650e5e1de44bf.png"},7833:function(e,t,o){t.Z=o.p+"assets/images/commit-ext-ffc28705533aba0554282c73096c98f5.png"},5262:function(e,t,o){t.Z=o.p+"assets/images/commit-long-description-0e0d31c1554976026ff7db799b9a1b48.png"},4310:function(e,t,o){t.Z=o.p+"assets/images/commit-prompt-e99c617ecfc57e1445b0629c81f38f5a.png"},3034:function(e,t,o){t.Z=o.p+"assets/images/commit-push-1-f174647c129749791c90f8813c2847e9.png"},4529:function(e,t,o){t.Z=o.p+"assets/images/commit-push-2-71345d8c85bd24c15156b822510da4f9.png"},8246:function(e,t,o){t.Z=o.p+"assets/images/commit-scope-96a1c0a750d2231faa55f624c4b113ce.png"},4066:function(e,t,o){t.Z=o.p+"assets/images/commit-type-d8b7196f11269b9e0231b00213996220.png"}}]);