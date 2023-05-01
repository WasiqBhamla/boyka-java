"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3634],{167:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>u});var n=i(5721);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},m=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(i),u=o,g=d["".concat(r,".").concat(u)]||d[u]||p[u]||a;return i?n.createElement(g,l(l({ref:t},m),{},{components:i})):n.createElement(g,l({ref:t},m))}));function u(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,l=new Array(a);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},153:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=i(8533),o=(i(5721),i(167));const a={title:"\ud83d\udce9 Commit steps",sidebar_position:6},l=void 0,s={unversionedId:"project-details/commit-steps",id:"project-details/commit-steps",title:"\ud83d\udce9 Commit steps",description:"We are using Conventional Commits to ensure that our code follows a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:",source:"@site/docs/contributing/project-details/commit-steps.md",sourceDirName:"project-details",slug:"/project-details/commit-steps",permalink:"/boyka-framework/contributing/project-details/commit-steps",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/commit-steps.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1682924560,formattedLastUpdatedAt:"May 1, 2023",sidebarPosition:6,frontMatter:{title:"\ud83d\udce9 Commit steps",sidebar_position:6},sidebar:"contributing",previous:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"},next:{title:"\ud83e\udd1d Get your PR ready",permalink:"/boyka-framework/contributing/project-details/ready-your-pr"}},r={},c=[{value:"Setup Auto GPG commit signing",id:"setup-auto-gpg-commit-signing",level:2},{value:"Install GPG command line",id:"install-gpg-command-line",level:3},{value:"Generate GPG keys",id:"generate-gpg-keys",level:3},{value:"Fetch the GPG key",id:"fetch-the-gpg-key",level:3},{value:"Set GPG key in GitHub",id:"set-gpg-key-in-github",level:3},{value:"Setup Git to Auto sign commits",id:"setup-git-to-auto-sign-commits",level:3},{value:"Add Conventional Commits extension",id:"add-conventional-commits-extension",level:2},{value:"Disable auto commit",id:"disable-auto-commit",level:2},{value:"Build commit message",id:"build-commit-message",level:2},{value:"Add commit type",id:"add-commit-type",level:3},{value:"Add commit scope",id:"add-commit-scope",level:3},{value:"Add relatable Emoji",id:"add-relatable-emoji",level:3},{value:"Add short description",id:"add-short-description",level:3},{value:"Add long description (optional)",id:"add-long-description-optional",level:3},{value:"Add breaking changes details (optional)",id:"add-breaking-changes-details-optional",level:3},{value:"Commit the changes",id:"commit-the-changes",level:2},{value:"Pre-commit checks",id:"pre-commit-checks",level:2},{value:"Push your commit",id:"push-your-commit",level:2},{value:"Create draft PR",id:"create-draft-pr",level:2},{value:"Ping on Discord",id:"ping-on-discord",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://conventionalcommits.org/"},"Conventional Commits")," to ensure that our code follows a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:"),(0,o.kt)("h2",{id:"setup-auto-gpg-commit-signing"},"Setup Auto GPG commit signing"),(0,o.kt)("p",null,"We have branch protection setup in our project which requires that all commits should be GPG signed. Let's walk through how you can sign your commits."),(0,o.kt)("h3",{id:"install-gpg-command-line"},"Install GPG command line"),(0,o.kt)("p",null,"Install the latest GPG command line from ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/"},"their site"),"."),(0,o.kt)("p",null,"On Mac, you can also install GPG using ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," by executing ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install gnupg"),"."),(0,o.kt)("h3",{id:"generate-gpg-keys"},"Generate GPG keys"),(0,o.kt)("p",null,"To generate a new GPG keys, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> gpg --full-generate-key\n")),(0,o.kt)("p",null,"Enter the prompts properly and set a good passphrase."),(0,o.kt)("h3",{id:"fetch-the-gpg-key"},"Fetch the GPG key"),(0,o.kt)("p",null,"Once the key is created, you need to get the GPG key ID, run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> gpg --list-secret-keys --keyid-format=long\n")),(0,o.kt)("p",null,"You will see the output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"/Users/username/.gnupg/pubring.kbx\n-------------------------------------\n// highlight-next-line\nsec   rsa4096/AB510283YYYYYYYY 2018-07-03 [SC]\n      AAAAAAAAAA2010DD804CBB15AB510283YYYYYYYY\nuid                 [ unknown] Your Name (Your role) <your.email@gmail.com>\nssb   rsa4096/AAAAA90AB0B84BE 2018-07-03 [E]\n")),(0,o.kt)("p",null,"The key you need is marked with ",(0,o.kt)("inlineCode",{parentName:"p"},"Y")," 8 chars in the lines highlighted above."),(0,o.kt)("h3",{id:"set-gpg-key-in-github"},"Set GPG key in GitHub"),(0,o.kt)("p",null,"Execute the following command to get the GPG public key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> gpg --armor --export <your-8-digit-gpg-id>\n")),(0,o.kt)("p",null,"Copy the output from the above command,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open your ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/settings/keys"},"GitHub GPG settings page")),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"New GPG Key")," button"),(0,o.kt)("li",{parentName:"ul"},"Add any suitable ",(0,o.kt)("inlineCode",{parentName:"li"},"Title")),(0,o.kt)("li",{parentName:"ul"},"Paste your GPG public key copied from above in ",(0,o.kt)("inlineCode",{parentName:"li"},"Key")," textarea"),(0,o.kt)("li",{parentName:"ul"},"Click on ",(0,o.kt)("inlineCode",{parentName:"li"},"Add GPG key")," button")),(0,o.kt)("h3",{id:"setup-git-to-auto-sign-commits"},"Setup Git to Auto sign commits"),(0,o.kt)("p",null,"Setup your Git configuration on your machine to tell it to automatically sign your commits by using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> git config --global gpg.program gpg\n> git config --global user.signingkey <your-8-digit-gpg-id>\n> git config --global commit.gpgsign true\n")),(0,o.kt)("h2",{id:"add-conventional-commits-extension"},"Add Conventional Commits extension"),(0,o.kt)("p",null,"Search for ",(0,o.kt)("inlineCode",{parentName:"p"},"Conventional Commits")," in the VSCode Marketplace and install it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commits Extension",src:i(6987).Z,width:"3296",height:"1898"})),(0,o.kt)("h2",{id:"disable-auto-commit"},"Disable auto commit"),(0,o.kt)("p",null,"After installing the extension, you can disable the auto commit feature in the settings."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commits Extension Setting",src:i(7882).Z,width:"3296",height:"1898"})),(0,o.kt)("p",null,"To access the settings, click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," icon as shown in the screenshot above."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commits Extension Setting Page",src:i(9754).Z,width:"3296",height:"1898"})),(0,o.kt)("p",null,"Once you click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," icon, you will see a list of settings for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Conventional Commits")," extension. Here you can uncheck the ",(0,o.kt)("inlineCode",{parentName:"p"},"Auto commit")," option."),(0,o.kt)("h2",{id:"build-commit-message"},"Build commit message"),(0,o.kt)("p",null,"When you are ready to commit, press on Conventional commit icon in source control tab to open the commit prompt."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commit Prompt",src:i(5219).Z,width:"3296",height:"1898"})),(0,o.kt)("h3",{id:"add-commit-type"},"Add commit type"),(0,o.kt)("p",null,"When you click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Conventional Commit")," button, you will see a list of available commit types. Select the one that best describes your changes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commit Type",src:i(1138).Z,width:"3296",height:"1898"})),(0,o.kt)("h3",{id:"add-commit-scope"},"Add commit scope"),(0,o.kt)("p",null,"After you select the commit type, you will see a list of available scopes. Select the one that best describes your changes. If you don't see any scope, you can let the ",(0,o.kt)("inlineCode",{parentName:"p"},"boyka-core")," team know about it and we will add it for you."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commit Scope",src:i(5667).Z,width:"3296",height:"1898"})),(0,o.kt)("h3",{id:"add-relatable-emoji"},"Add relatable Emoji"),(0,o.kt)("p",null,"After you select the commit scope, you will see a list of available Emoji's. Select the one that best describes your changes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commit Emoji",src:i(6409).Z,width:"3296",height:"1898"})),(0,o.kt)("h3",{id:"add-short-description"},"Add short description"),(0,o.kt)("p",null,"After you select the commit emoji, you will see a text field where you can write a short description of your changes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commit Description",src:i(5504).Z,width:"3296",height:"1898"})),(0,o.kt)("h3",{id:"add-long-description-optional"},"Add long description (optional)"),(0,o.kt)("p",null,"After you write the short description, you will see a text field where you can write a long description of your changes. This is optional, but it is recommended to write a detailed description of your changes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commit Long Description",src:i(3567).Z,width:"3296",height:"1898"})),(0,o.kt)("h3",{id:"add-breaking-changes-details-optional"},"Add breaking changes details (optional)"),(0,o.kt)("p",null,"After you write the long description, you will see a text field where you can write a detailed description of the breaking changes. This is optional, but it is recommended to write a detailed description of the breaking changes."),(0,o.kt)("p",null,"Make sure to append the ",(0,o.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," tag before the description."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Conventional Commit Breaking Changes",src:i(8800).Z,width:"3296",height:"1898"})),(0,o.kt)("h2",{id:"commit-the-changes"},"Commit the changes"),(0,o.kt)("p",null,"Once the commit message is built, you can copy it and paste it on the terminal and commit using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'> git commit -m "<copied-message>"\n')),(0,o.kt)("h2",{id:"pre-commit-checks"},"Pre-commit checks"),(0,o.kt)("p",null,"When you try to commit using the command in previous step, pre-commit checks will get triggered."),(0,o.kt)("p",null,"Following checks will happen when you commit:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Commit message lint to check if the commit message is in correct format"),(0,o.kt)("li",{parentName:"ul"},"ESLint to check if the website code complies with the ",(0,o.kt)("a",{parentName:"li",href:"https://eslint.org/"},"ESLint")," rules. It will only run if there is change to ",(0,o.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".jsx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".ts")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".tsx")," files."),(0,o.kt)("li",{parentName:"ul"},"Prettier to check if the website code complies with the ",(0,o.kt)("a",{parentName:"li",href:"https://prettier.io/"},"Prettier")," rules. It will only run if there is change to ",(0,o.kt)("inlineCode",{parentName:"li"},".js"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".jsx"),", ",(0,o.kt)("inlineCode",{parentName:"li"},".ts")," or ",(0,o.kt)("inlineCode",{parentName:"li"},".tsx")," files."),(0,o.kt)("li",{parentName:"ul"},"Build the documentation website to check if the website builds successfully."),(0,o.kt)("li",{parentName:"ul"},"Build and run check styles from the Java project to check if the check style and code compilation is successful.")),(0,o.kt)("h2",{id:"push-your-commit"},"Push your commit"),(0,o.kt)("p",null,"You can push your changes from the Terminal by executing the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> git push\n")),(0,o.kt)("p",null,"Or, from VSCode, you can click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Push")," button in the source control tab."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Push Commit",src:i(3296).Z,width:"3296",height:"1898"})),(0,o.kt)("p",null,"When you click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Push")," button, you will see a pop-up asking you to confirm your push."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Push Commit",src:i(8129).Z,width:"3296",height:"1898"})),(0,o.kt)("h2",{id:"create-draft-pr"},"Create draft PR"),(0,o.kt)("p",null,"As soon as you push your commit, you must create a draft PR on GitHub. Because our workflows will only get triggered on PR's that are raised against ",(0,o.kt)("inlineCode",{parentName:"p"},"develop")," branch."),(0,o.kt)("h2",{id:"ping-on-discord"},"Ping on Discord"),(0,o.kt)("p",null,"Once PR is raised, ping in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#contributor-discussion")," channel on our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/dUg8K9DAsR"},"Discord server")," to let all the contributors know and you can schedule a demo with the contributors to showcase your changes."))}p.isMDXComponent=!0},8800:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-breaking-changes-13be928032a05c737ce1b7dc2c6e8826.png"},5504:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-description-86a28b51f291d01b11c285c414c6765f.png"},6409:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-emoji-d346fe1d4451028f12c650e5e1de44bf.png"},9754:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-ext-setting-page-2e83931462de6cb4ad428b07f43db572.png"},7882:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-ext-setting-600211599783cbf06cdf21f21f96339c.png"},6987:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-ext-ffc28705533aba0554282c73096c98f5.png"},3567:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-long-description-0e0d31c1554976026ff7db799b9a1b48.png"},5219:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-prompt-e99c617ecfc57e1445b0629c81f38f5a.png"},3296:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-push-1-f174647c129749791c90f8813c2847e9.png"},8129:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-push-2-71345d8c85bd24c15156b822510da4f9.png"},5667:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-scope-96a1c0a750d2231faa55f624c4b113ce.png"},1138:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-type-d8b7196f11269b9e0231b00213996220.png"}}]);