"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8033],{4053:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=t(6106),s=t(8665);const o={title:"\ud83d\udce9 Commit steps",sidebar_position:6},c=void 0,l={id:"project-details/commit-steps",title:"\ud83d\udce9 Commit steps",description:"We are using Conventional Commits to ensure that our code commits follow a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:",source:"@site/docs/contributing/project-details/commit-steps.md",sourceDirName:"project-details",slug:"/project-details/commit-steps",permalink:"/boyka-framework/contributing/project-details/commit-steps",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/commit-steps.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1730133225e3,sidebarPosition:6,frontMatter:{title:"\ud83d\udce9 Commit steps",sidebar_position:6},sidebar:"contributing",previous:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"},next:{title:"\ud83e\udd1d Get your PR ready",permalink:"/boyka-framework/contributing/project-details/ready-your-pr"}},r={},a=[{value:"1\ufe0f\u20e3 Setup Auto GPG commit signing",id:"1\ufe0f\u20e3-setup-auto-gpg-commit-signing",level:2},{value:"1\ufe0f\u20e3 Install GPG command line",id:"1\ufe0f\u20e3-install-gpg-command-line",level:3},{value:"2\ufe0f\u20e3 Generate GPG keys",id:"2\ufe0f\u20e3-generate-gpg-keys",level:3},{value:"3\ufe0f\u20e3 Fetch the GPG key",id:"3\ufe0f\u20e3-fetch-the-gpg-key",level:3},{value:"4\ufe0f\u20e3 Set GPG key in GitHub",id:"4\ufe0f\u20e3-set-gpg-key-in-github",level:3},{value:"5\ufe0f\u20e3 Setup Git to Auto sign commits",id:"5\ufe0f\u20e3-setup-git-to-auto-sign-commits",level:3},{value:"2\ufe0f\u20e3 Add Conventional Commits extension",id:"2\ufe0f\u20e3-add-conventional-commits-extension",level:2},{value:"3\ufe0f\u20e3 Disable auto commit",id:"3\ufe0f\u20e3-disable-auto-commit",level:2},{value:"4\ufe0f\u20e3 Build commit message",id:"4\ufe0f\u20e3-build-commit-message",level:2},{value:"1\ufe0f\u20e3 Add commit type",id:"1\ufe0f\u20e3-add-commit-type",level:3},{value:"2\ufe0f\u20e3 Add commit scope",id:"2\ufe0f\u20e3-add-commit-scope",level:3},{value:"3\ufe0f\u20e3 Add relatable Emoji",id:"3\ufe0f\u20e3-add-relatable-emoji",level:3},{value:"4\ufe0f\u20e3 Add short description",id:"4\ufe0f\u20e3-add-short-description",level:3},{value:"5\ufe0f\u20e3 Add long description (optional)",id:"5\ufe0f\u20e3-add-long-description-optional",level:3},{value:"6\ufe0f\u20e3 Add breaking changes details (optional)",id:"6\ufe0f\u20e3-add-breaking-changes-details-optional",level:3},{value:"5\ufe0f\u20e3 Commit the changes",id:"5\ufe0f\u20e3-commit-the-changes",level:2},{value:"6\ufe0f\u20e3 Pre-commit checks",id:"6\ufe0f\u20e3-pre-commit-checks",level:2},{value:"7\ufe0f\u20e3 Push your commit",id:"7\ufe0f\u20e3-push-your-commit",level:2},{value:"8\ufe0f\u20e3 Create draft PR",id:"8\ufe0f\u20e3-create-draft-pr",level:2},{value:"9\ufe0f\u20e3 Ping on Discord",id:"9\ufe0f\u20e3-ping-on-discord",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(i.p,{children:["We are using ",(0,n.jsx)(i.a,{href:"https://conventionalcommits.org/",children:"Conventional Commits"})," to ensure that our code commits follow a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:"]}),"\n",(0,n.jsx)(i.h2,{id:"1\ufe0f\u20e3-setup-auto-gpg-commit-signing",children:"1\ufe0f\u20e3 Setup Auto GPG commit signing"}),"\n",(0,n.jsx)(i.p,{children:"We have branch protection setup in our project which requires that all commits should be GPG signed. So if you are not having your GPG keys, you can follow below steps to setup GPG for signing your commits."}),"\n",(0,n.jsx)(i.h3,{id:"1\ufe0f\u20e3-install-gpg-command-line",children:"1\ufe0f\u20e3 Install GPG command line"}),"\n",(0,n.jsxs)(i.p,{children:["Install the latest GPG command line from ",(0,n.jsx)(i.a,{href:"https://www.gnupg.org/download/",children:"their site"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["On Mac, you can also install GPG using ",(0,n.jsx)(i.a,{href:"https://brew.sh/",children:"Homebrew"})," by executing ",(0,n.jsx)(i.code,{children:"brew install gnupg"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"2\ufe0f\u20e3-generate-gpg-keys",children:"2\ufe0f\u20e3 Generate GPG keys"}),"\n",(0,n.jsx)(i.p,{children:"To generate a new GPG keys, run the following command:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"> gpg --full-generate-key\n"})}),"\n",(0,n.jsx)(i.p,{children:"Enter the prompts properly and set a good passphrase."}),"\n",(0,n.jsx)(i.h3,{id:"3\ufe0f\u20e3-fetch-the-gpg-key",children:"3\ufe0f\u20e3 Fetch the GPG key"}),"\n",(0,n.jsx)(i.p,{children:"Once the key is created, you need to get the GPG key ID, run the command:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"> gpg --list-secret-keys --keyid-format=long\n"})}),"\n",(0,n.jsx)(i.p,{children:"You will see the output similar to the following:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"/Users/username/.gnupg/pubring.kbx\n-------------------------------------\n// highlight-next-line\nsec   rsa4096/AB510283YYYYYYYY 2018-07-03 [SC]\n      AAAAAAAAAA2010DD804CBB15AB510283YYYYYYYY\nuid                 [ unknown] Your Name (Your role) <your.email@gmail.com>\nssb   rsa4096/AAAAA90AB0B84BE 2018-07-03 [E]\n"})}),"\n",(0,n.jsxs)(i.p,{children:["The key you need is marked with ",(0,n.jsx)(i.code,{children:"Y"})," 8 chars in the lines highlighted above."]}),"\n",(0,n.jsx)(i.h3,{id:"4\ufe0f\u20e3-set-gpg-key-in-github",children:"4\ufe0f\u20e3 Set GPG key in GitHub"}),"\n",(0,n.jsx)(i.p,{children:"Execute the following command to get the GPG public key:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"> gpg --armor --export <your-8-digit-gpg-id>\n"})}),"\n",(0,n.jsx)(i.p,{children:"Copy the output from the above command,"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Open your ",(0,n.jsx)(i.a,{href:"https://github.com/settings/keys",children:"GitHub GPG settings page"})]}),"\n",(0,n.jsxs)(i.li,{children:["Click on ",(0,n.jsx)(i.code,{children:"New GPG Key"})," button"]}),"\n",(0,n.jsxs)(i.li,{children:["Add any suitable ",(0,n.jsx)(i.code,{children:"Title"})]}),"\n",(0,n.jsxs)(i.li,{children:["Paste your GPG public key copied from above in ",(0,n.jsx)(i.code,{children:"Key"})," textarea"]}),"\n",(0,n.jsxs)(i.li,{children:["Click on ",(0,n.jsx)(i.code,{children:"Add GPG key"})," button"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"5\ufe0f\u20e3-setup-git-to-auto-sign-commits",children:"5\ufe0f\u20e3 Setup Git to Auto sign commits"}),"\n",(0,n.jsx)(i.p,{children:"Setup your Git configuration on your machine to tell it to automatically sign your commits by using the following commands:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"> git config --global gpg.program gpg\n> git config --global user.signingkey <your-8-digit-gpg-id>\n> git config --global commit.gpgsign true\n"})}),"\n",(0,n.jsx)(i.h2,{id:"2\ufe0f\u20e3-add-conventional-commits-extension",children:"2\ufe0f\u20e3 Add Conventional Commits extension"}),"\n",(0,n.jsxs)(i.p,{children:["Search for ",(0,n.jsx)(i.code,{children:"Conventional Commits"})," in the VSCode Marketplace and install it."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commits Extension",src:t(6100).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h2,{id:"3\ufe0f\u20e3-disable-auto-commit",children:"3\ufe0f\u20e3 Disable auto commit"}),"\n",(0,n.jsx)(i.p,{children:"After installing the extension, you can disable the auto commit feature in the settings."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commits Extension Setting",src:t(439).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsxs)(i.p,{children:["To access the settings, click on the ",(0,n.jsx)(i.code,{children:"Settings"})," icon as shown in the screenshot above."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commits Extension Setting Page",src:t(7571).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsxs)(i.p,{children:["Once you click on the ",(0,n.jsx)(i.code,{children:"Settings"})," icon, you will see a list of settings for the ",(0,n.jsx)(i.code,{children:"Conventional Commits"})," extension. Here you can uncheck the ",(0,n.jsx)(i.code,{children:"Auto commit"})," option."]}),"\n",(0,n.jsx)(i.h2,{id:"4\ufe0f\u20e3-build-commit-message",children:"4\ufe0f\u20e3 Build commit message"}),"\n",(0,n.jsx)(i.p,{children:"When you are ready to commit, press on Conventional commit icon in source control tab to open the commit prompt."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commit Prompt",src:t(8591).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h3,{id:"1\ufe0f\u20e3-add-commit-type",children:"1\ufe0f\u20e3 Add commit type"}),"\n",(0,n.jsxs)(i.p,{children:["When you click on the ",(0,n.jsx)(i.code,{children:"Conventional Commit"})," button, you will see a list of available commit types. Select the one that best describes your changes."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commit Type",src:t(7609).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h3,{id:"2\ufe0f\u20e3-add-commit-scope",children:"2\ufe0f\u20e3 Add commit scope"}),"\n",(0,n.jsxs)(i.p,{children:["After you select the commit type, you will see a list of available scopes. Select the one that best describes your changes. If you don't see any scope, you can let the ",(0,n.jsx)(i.code,{children:"boyka-core"})," team know about it and we will add it for you."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commit Scope",src:t(5245).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h3,{id:"3\ufe0f\u20e3-add-relatable-emoji",children:"3\ufe0f\u20e3 Add relatable Emoji"}),"\n",(0,n.jsx)(i.p,{children:"After you select the commit scope, you will see a list of available Emoji's. Select the one that best describes your changes."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commit Emoji",src:t(7275).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h3,{id:"4\ufe0f\u20e3-add-short-description",children:"4\ufe0f\u20e3 Add short description"}),"\n",(0,n.jsx)(i.p,{children:"After you select the commit emoji, you will see a text field where you can write a short description of your changes."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commit Description",src:t(6243).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h3,{id:"5\ufe0f\u20e3-add-long-description-optional",children:"5\ufe0f\u20e3 Add long description (optional)"}),"\n",(0,n.jsx)(i.p,{children:"After you write the short description, you will see a text field where you can write a long description of your changes. This is optional, but it is recommended to write a detailed description of your changes."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commit Long Description",src:t(1386).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h3,{id:"6\ufe0f\u20e3-add-breaking-changes-details-optional",children:"6\ufe0f\u20e3 Add breaking changes details (optional)"}),"\n",(0,n.jsx)(i.p,{children:"After you write the long description, you will see a text field where you can write a detailed description of the breaking changes. This is optional, but it is recommended to write a detailed description of the breaking changes."}),"\n",(0,n.jsxs)(i.p,{children:["Make sure to append the ",(0,n.jsx)(i.code,{children:"BREAKING CHANGE:"})," tag before the description."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Conventional Commit Breaking Changes",src:t(6862).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h2,{id:"5\ufe0f\u20e3-commit-the-changes",children:"5\ufe0f\u20e3 Commit the changes"}),"\n",(0,n.jsx)(i.p,{children:"Once the commit message is built, you can copy it and paste it on the terminal and commit using the following command:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:'> git commit -m "<copied-message>"\n'})}),"\n",(0,n.jsx)(i.h2,{id:"6\ufe0f\u20e3-pre-commit-checks",children:"6\ufe0f\u20e3 Pre-commit checks"}),"\n",(0,n.jsx)(i.p,{children:"When you try to commit using the command in previous step, pre-commit checks will get triggered."}),"\n",(0,n.jsx)(i.p,{children:"Following checks will happen when you commit:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Commit message lint to check if the commit message is in correct format"}),"\n",(0,n.jsxs)(i.li,{children:["ESLint to check if the website code complies with the ",(0,n.jsx)(i.a,{href:"https://eslint.org/",children:"ESLint"})," rules. It will only run if there is change to ",(0,n.jsx)(i.code,{children:".js"}),", ",(0,n.jsx)(i.code,{children:".jsx"}),", ",(0,n.jsx)(i.code,{children:".ts"})," or ",(0,n.jsx)(i.code,{children:".tsx"})," files."]}),"\n",(0,n.jsxs)(i.li,{children:["Prettier to check if the website code complies with the ",(0,n.jsx)(i.a,{href:"https://prettier.io/",children:"Prettier"})," rules. It will only run if there is change to ",(0,n.jsx)(i.code,{children:".js"}),", ",(0,n.jsx)(i.code,{children:".jsx"}),", ",(0,n.jsx)(i.code,{children:".ts"})," or ",(0,n.jsx)(i.code,{children:".tsx"})," files."]}),"\n",(0,n.jsx)(i.li,{children:"Build the documentation website to check if the website builds successfully."}),"\n",(0,n.jsx)(i.li,{children:"Build and run check styles from the Java project to check if the check style and code compilation is successful."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"7\ufe0f\u20e3-push-your-commit",children:"7\ufe0f\u20e3 Push your commit"}),"\n",(0,n.jsx)(i.p,{children:"You can push your changes from the Terminal by executing the following command:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-shell",children:"> git push\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Or, from VSCode, you can click on the ",(0,n.jsx)(i.code,{children:"Push"})," button in the source control tab."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Push Commit",src:t(7779).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsxs)(i.p,{children:["When you click on the ",(0,n.jsx)(i.code,{children:"Push"})," button, you will see a pop-up asking you to confirm your push."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Push Commit",src:t(9448).A+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(i.h2,{id:"8\ufe0f\u20e3-create-draft-pr",children:"8\ufe0f\u20e3 Create draft PR"}),"\n",(0,n.jsxs)(i.p,{children:["As soon as you push your commit, you must create a draft PR on GitHub. Because our workflows will only get triggered on PR's that are raised against ",(0,n.jsx)(i.code,{children:"main"})," branch."]}),"\n",(0,n.jsx)(i.h2,{id:"9\ufe0f\u20e3-ping-on-discord",children:"9\ufe0f\u20e3 Ping on Discord"}),"\n",(0,n.jsxs)(i.p,{children:["Once PR is raised, ping in the ",(0,n.jsx)(i.code,{children:"#contributor-discussion"})," channel on our ",(0,n.jsx)(i.a,{href:"https://dub.sh/boyka-discord",children:"Discord server"})," to let all the contributors know and you can schedule a demo with the contributors to showcase your changes."]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},6862:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-breaking-changes-13be928032a05c737ce1b7dc2c6e8826.png"},6243:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-description-86a28b51f291d01b11c285c414c6765f.png"},7275:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-emoji-d346fe1d4451028f12c650e5e1de44bf.png"},7571:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-ext-setting-page-2e83931462de6cb4ad428b07f43db572.png"},439:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-ext-setting-600211599783cbf06cdf21f21f96339c.png"},6100:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-ext-ffc28705533aba0554282c73096c98f5.png"},1386:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-long-description-0e0d31c1554976026ff7db799b9a1b48.png"},8591:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-prompt-e99c617ecfc57e1445b0629c81f38f5a.png"},7779:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-push-1-f174647c129749791c90f8813c2847e9.png"},9448:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-push-2-71345d8c85bd24c15156b822510da4f9.png"},5245:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-scope-96a1c0a750d2231faa55f624c4b113ce.png"},7609:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/commit-type-d8b7196f11269b9e0231b00213996220.png"},8665:(e,i,t)=>{t.d(i,{R:()=>c,x:()=>l});var n=t(7378);const s={},o=n.createContext(s);function c(e){const i=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:i},e.children)}}}]);