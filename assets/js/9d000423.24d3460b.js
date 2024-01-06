"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3634],{9374:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>r});var n=i(5250),s=i(3281);const o={title:"\ud83d\udce9 Commit steps",sidebar_position:6},c=void 0,l={id:"project-details/commit-steps",title:"\ud83d\udce9 Commit steps",description:"We are using Conventional Commits to ensure that our code follows a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:",source:"@site/docs/contributing/project-details/commit-steps.md",sourceDirName:"project-details",slug:"/project-details/commit-steps",permalink:"/boyka-framework/contributing/project-details/commit-steps",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/commit-steps.md",tags:[],version:"current",lastUpdatedBy:"WasiqB",lastUpdatedAt:1704547257,formattedLastUpdatedAt:"Jan 6, 2024",sidebarPosition:6,frontMatter:{title:"\ud83d\udce9 Commit steps",sidebar_position:6},sidebar:"contributing",previous:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"},next:{title:"\ud83e\udd1d Get your PR ready",permalink:"/boyka-framework/contributing/project-details/ready-your-pr"}},a={},r=[{value:"Setup Auto GPG commit signing",id:"setup-auto-gpg-commit-signing",level:2},{value:"Install GPG command line",id:"install-gpg-command-line",level:3},{value:"Generate GPG keys",id:"generate-gpg-keys",level:3},{value:"Fetch the GPG key",id:"fetch-the-gpg-key",level:3},{value:"Set GPG key in GitHub",id:"set-gpg-key-in-github",level:3},{value:"Setup Git to Auto sign commits",id:"setup-git-to-auto-sign-commits",level:3},{value:"Add Conventional Commits extension",id:"add-conventional-commits-extension",level:2},{value:"Disable auto commit",id:"disable-auto-commit",level:2},{value:"Build commit message",id:"build-commit-message",level:2},{value:"Add commit type",id:"add-commit-type",level:3},{value:"Add commit scope",id:"add-commit-scope",level:3},{value:"Add relatable Emoji",id:"add-relatable-emoji",level:3},{value:"Add short description",id:"add-short-description",level:3},{value:"Add long description (optional)",id:"add-long-description-optional",level:3},{value:"Add breaking changes details (optional)",id:"add-breaking-changes-details-optional",level:3},{value:"Commit the changes",id:"commit-the-changes",level:2},{value:"Pre-commit checks",id:"pre-commit-checks",level:2},{value:"Push your commit",id:"push-your-commit",level:2},{value:"Create draft PR",id:"create-draft-pr",level:2},{value:"Ping on Discord",id:"ping-on-discord",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We are using ",(0,n.jsx)(t.a,{href:"https://conventionalcommits.org/",children:"Conventional Commits"})," to ensure that our code follows a consistent commit message format. To make sure that we are following the rules, we normally commit our changes with VSCode using the following steps:"]}),"\n",(0,n.jsx)(t.h2,{id:"setup-auto-gpg-commit-signing",children:"Setup Auto GPG commit signing"}),"\n",(0,n.jsx)(t.p,{children:"We have branch protection setup in our project which requires that all commits should be GPG signed. Let's walk through how you can sign your commits."}),"\n",(0,n.jsx)(t.h3,{id:"install-gpg-command-line",children:"Install GPG command line"}),"\n",(0,n.jsxs)(t.p,{children:["Install the latest GPG command line from ",(0,n.jsx)(t.a,{href:"https://www.gnupg.org/download/",children:"their site"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["On Mac, you can also install GPG using ",(0,n.jsx)(t.a,{href:"https://brew.sh/",children:"Homebrew"})," by executing ",(0,n.jsx)(t.code,{children:"brew install gnupg"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"generate-gpg-keys",children:"Generate GPG keys"}),"\n",(0,n.jsx)(t.p,{children:"To generate a new GPG keys, run the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"> gpg --full-generate-key\n"})}),"\n",(0,n.jsx)(t.p,{children:"Enter the prompts properly and set a good passphrase."}),"\n",(0,n.jsx)(t.h3,{id:"fetch-the-gpg-key",children:"Fetch the GPG key"}),"\n",(0,n.jsx)(t.p,{children:"Once the key is created, you need to get the GPG key ID, run the command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"> gpg --list-secret-keys --keyid-format=long\n"})}),"\n",(0,n.jsx)(t.p,{children:"You will see the output similar to the following:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"/Users/username/.gnupg/pubring.kbx\n-------------------------------------\n// highlight-next-line\nsec   rsa4096/AB510283YYYYYYYY 2018-07-03 [SC]\n      AAAAAAAAAA2010DD804CBB15AB510283YYYYYYYY\nuid                 [ unknown] Your Name (Your role) <your.email@gmail.com>\nssb   rsa4096/AAAAA90AB0B84BE 2018-07-03 [E]\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The key you need is marked with ",(0,n.jsx)(t.code,{children:"Y"})," 8 chars in the lines highlighted above."]}),"\n",(0,n.jsx)(t.h3,{id:"set-gpg-key-in-github",children:"Set GPG key in GitHub"}),"\n",(0,n.jsx)(t.p,{children:"Execute the following command to get the GPG public key:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"> gpg --armor --export <your-8-digit-gpg-id>\n"})}),"\n",(0,n.jsx)(t.p,{children:"Copy the output from the above command,"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Open your ",(0,n.jsx)(t.a,{href:"https://github.com/settings/keys",children:"GitHub GPG settings page"})]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.code,{children:"New GPG Key"})," button"]}),"\n",(0,n.jsxs)(t.li,{children:["Add any suitable ",(0,n.jsx)(t.code,{children:"Title"})]}),"\n",(0,n.jsxs)(t.li,{children:["Paste your GPG public key copied from above in ",(0,n.jsx)(t.code,{children:"Key"})," textarea"]}),"\n",(0,n.jsxs)(t.li,{children:["Click on ",(0,n.jsx)(t.code,{children:"Add GPG key"})," button"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"setup-git-to-auto-sign-commits",children:"Setup Git to Auto sign commits"}),"\n",(0,n.jsx)(t.p,{children:"Setup your Git configuration on your machine to tell it to automatically sign your commits by using the following commands:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"> git config --global gpg.program gpg\n> git config --global user.signingkey <your-8-digit-gpg-id>\n> git config --global commit.gpgsign true\n"})}),"\n",(0,n.jsx)(t.h2,{id:"add-conventional-commits-extension",children:"Add Conventional Commits extension"}),"\n",(0,n.jsxs)(t.p,{children:["Search for ",(0,n.jsx)(t.code,{children:"Conventional Commits"})," in the VSCode Marketplace and install it."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commits Extension",src:i(740).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h2,{id:"disable-auto-commit",children:"Disable auto commit"}),"\n",(0,n.jsx)(t.p,{children:"After installing the extension, you can disable the auto commit feature in the settings."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commits Extension Setting",src:i(6586).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsxs)(t.p,{children:["To access the settings, click on the ",(0,n.jsx)(t.code,{children:"Settings"})," icon as shown in the screenshot above."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commits Extension Setting Page",src:i(7428).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsxs)(t.p,{children:["Once you click on the ",(0,n.jsx)(t.code,{children:"Settings"})," icon, you will see a list of settings for the ",(0,n.jsx)(t.code,{children:"Conventional Commits"})," extension. Here you can uncheck the ",(0,n.jsx)(t.code,{children:"Auto commit"})," option."]}),"\n",(0,n.jsx)(t.h2,{id:"build-commit-message",children:"Build commit message"}),"\n",(0,n.jsx)(t.p,{children:"When you are ready to commit, press on Conventional commit icon in source control tab to open the commit prompt."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commit Prompt",src:i(6570).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h3,{id:"add-commit-type",children:"Add commit type"}),"\n",(0,n.jsxs)(t.p,{children:["When you click on the ",(0,n.jsx)(t.code,{children:"Conventional Commit"})," button, you will see a list of available commit types. Select the one that best describes your changes."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commit Type",src:i(3870).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h3,{id:"add-commit-scope",children:"Add commit scope"}),"\n",(0,n.jsxs)(t.p,{children:["After you select the commit type, you will see a list of available scopes. Select the one that best describes your changes. If you don't see any scope, you can let the ",(0,n.jsx)(t.code,{children:"boyka-core"})," team know about it and we will add it for you."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commit Scope",src:i(834).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h3,{id:"add-relatable-emoji",children:"Add relatable Emoji"}),"\n",(0,n.jsx)(t.p,{children:"After you select the commit scope, you will see a list of available Emoji's. Select the one that best describes your changes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commit Emoji",src:i(2876).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h3,{id:"add-short-description",children:"Add short description"}),"\n",(0,n.jsx)(t.p,{children:"After you select the commit emoji, you will see a text field where you can write a short description of your changes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commit Description",src:i(1954).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h3,{id:"add-long-description-optional",children:"Add long description (optional)"}),"\n",(0,n.jsx)(t.p,{children:"After you write the short description, you will see a text field where you can write a long description of your changes. This is optional, but it is recommended to write a detailed description of your changes."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commit Long Description",src:i(9230).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h3,{id:"add-breaking-changes-details-optional",children:"Add breaking changes details (optional)"}),"\n",(0,n.jsx)(t.p,{children:"After you write the long description, you will see a text field where you can write a detailed description of the breaking changes. This is optional, but it is recommended to write a detailed description of the breaking changes."}),"\n",(0,n.jsxs)(t.p,{children:["Make sure to append the ",(0,n.jsx)(t.code,{children:"BREAKING CHANGE:"})," tag before the description."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Conventional Commit Breaking Changes",src:i(8651).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h2,{id:"commit-the-changes",children:"Commit the changes"}),"\n",(0,n.jsx)(t.p,{children:"Once the commit message is built, you can copy it and paste it on the terminal and commit using the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:'> git commit -m "<copied-message>"\n'})}),"\n",(0,n.jsx)(t.h2,{id:"pre-commit-checks",children:"Pre-commit checks"}),"\n",(0,n.jsx)(t.p,{children:"When you try to commit using the command in previous step, pre-commit checks will get triggered."}),"\n",(0,n.jsx)(t.p,{children:"Following checks will happen when you commit:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Commit message lint to check if the commit message is in correct format"}),"\n",(0,n.jsxs)(t.li,{children:["ESLint to check if the website code complies with the ",(0,n.jsx)(t.a,{href:"https://eslint.org/",children:"ESLint"})," rules. It will only run if there is change to ",(0,n.jsx)(t.code,{children:".js"}),", ",(0,n.jsx)(t.code,{children:".jsx"}),", ",(0,n.jsx)(t.code,{children:".ts"})," or ",(0,n.jsx)(t.code,{children:".tsx"})," files."]}),"\n",(0,n.jsxs)(t.li,{children:["Prettier to check if the website code complies with the ",(0,n.jsx)(t.a,{href:"https://prettier.io/",children:"Prettier"})," rules. It will only run if there is change to ",(0,n.jsx)(t.code,{children:".js"}),", ",(0,n.jsx)(t.code,{children:".jsx"}),", ",(0,n.jsx)(t.code,{children:".ts"})," or ",(0,n.jsx)(t.code,{children:".tsx"})," files."]}),"\n",(0,n.jsx)(t.li,{children:"Build the documentation website to check if the website builds successfully."}),"\n",(0,n.jsx)(t.li,{children:"Build and run check styles from the Java project to check if the check style and code compilation is successful."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"push-your-commit",children:"Push your commit"}),"\n",(0,n.jsx)(t.p,{children:"You can push your changes from the Terminal by executing the following command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"> git push\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Or, from VSCode, you can click on the ",(0,n.jsx)(t.code,{children:"Push"})," button in the source control tab."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Push Commit",src:i(7255).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsxs)(t.p,{children:["When you click on the ",(0,n.jsx)(t.code,{children:"Push"})," button, you will see a pop-up asking you to confirm your push."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Push Commit",src:i(6291).Z+"",width:"3296",height:"1898"})}),"\n",(0,n.jsx)(t.h2,{id:"create-draft-pr",children:"Create draft PR"}),"\n",(0,n.jsxs)(t.p,{children:["As soon as you push your commit, you must create a draft PR on GitHub. Because our workflows will only get triggered on PR's that are raised against ",(0,n.jsx)(t.code,{children:"main"})," branch."]}),"\n",(0,n.jsx)(t.h2,{id:"ping-on-discord",children:"Ping on Discord"}),"\n",(0,n.jsxs)(t.p,{children:["Once PR is raised, ping in the ",(0,n.jsx)(t.code,{children:"#contributor-discussion"})," channel on our ",(0,n.jsx)(t.a,{href:"https://dub.sh/boyka-discord",children:"Discord server"})," to let all the contributors know and you can schedule a demo with the contributors to showcase your changes."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8651:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-breaking-changes-13be928032a05c737ce1b7dc2c6e8826.png"},1954:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-description-86a28b51f291d01b11c285c414c6765f.png"},2876:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-emoji-d346fe1d4451028f12c650e5e1de44bf.png"},7428:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-ext-setting-page-2e83931462de6cb4ad428b07f43db572.png"},6586:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-ext-setting-600211599783cbf06cdf21f21f96339c.png"},740:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-ext-ffc28705533aba0554282c73096c98f5.png"},9230:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-long-description-0e0d31c1554976026ff7db799b9a1b48.png"},6570:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-prompt-e99c617ecfc57e1445b0629c81f38f5a.png"},7255:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-push-1-f174647c129749791c90f8813c2847e9.png"},6291:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-push-2-71345d8c85bd24c15156b822510da4f9.png"},834:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-scope-96a1c0a750d2231faa55f624c4b113ce.png"},3870:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/commit-type-d8b7196f11269b9e0231b00213996220.png"},3281:(e,t,i)=>{i.d(t,{Z:()=>l,a:()=>c});var n=i(79);const s={},o=n.createContext(s);function c(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);