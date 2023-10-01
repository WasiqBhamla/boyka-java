"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3406],{8570:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(3262),r=(n(79),n(8570));const o={title:"\ud83d\udcda Project Structure",sidebar_position:1},l=void 0,a={unversionedId:"project-details/structure",id:"project-details/structure",title:"\ud83d\udcda Project Structure",description:"Following is the project repository root directory structure:",source:"@site/docs/contributing/project-details/structure.md",sourceDirName:"project-details",slug:"/project-details/structure",permalink:"/boyka-framework/contributing/project-details/structure",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/structure.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1696154866,formattedLastUpdatedAt:"Oct 1, 2023",sidebarPosition:1,frontMatter:{title:"\ud83d\udcda Project Structure",sidebar_position:1},sidebar:"contributing",previous:{title:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 Join our Discord server",permalink:"/boyka-framework/contributing/machine-setup/join-discord"},next:{title:"\ud83d\udd00 Branching Strategy",permalink:"/boyka-framework/contributing/project-details/branch-strategy"}},s={},c=[{value:"Details",id:"details",level:2},{value:"1. <code>.github/</code>",id:"1-github",level:3},{value:"2. <code>.husky/</code>",id:"2-husky",level:3},{value:"3. <code>.vscode/</code>",id:"3-vscode",level:3},{value:"4. <code>assets/</code>",id:"4-assets",level:3},{value:"5. <code>core-java/</code>",id:"5-core-java",level:3},{value:"6. <code>sample-tests/</code>",id:"6-sample-tests",level:3},{value:"7. <code>website/</code>",id:"7-website",level:3},{value:"8. <code>.eslintignore</code>",id:"8-eslintignore",level:3},{value:"9. <code>.eslintrc.json</code>",id:"9-eslintrcjson",level:3},{value:"10. <code>.gitignore</code>",id:"10-gitignore",level:3},{value:"11. <code>.gitpod.yml</code>",id:"11-gitpodyml",level:3},{value:"12. <code>.nvmrc</code>",id:"12-nvmrc",level:3},{value:"13. <code>.prettierignore</code>",id:"13-prettierignore",level:3},{value:"14. <code>.prettierrc.json</code>",id:"14-prettierrcjson",level:3},{value:"15. <code>CHANGELOG.md</code>",id:"15-changelogmd",level:3},{value:"16. <code>commitlint.config.js</code>",id:"16-commitlintconfigjs",level:3},{value:"17. <code>lerna.json</code>",id:"17-lernajson",level:3},{value:"18. <code>LICENSE</code>",id:"18-license",level:3},{value:"19. <code>package.json</code>",id:"19-packagejson",level:3},{value:"20. <code>README.md</code>",id:"20-readmemd",level:3},{value:"21. <code>pnpm-lock.yaml</code>",id:"21-pnpm-lockyaml",level:3},{value:"22. <code>pnpm-workspace.yaml</code>",id:"22-pnpm-workspaceyaml",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Following is the project repository root directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"- .github/\n- .husky/\n- .vscode/\n- assets/\n- core-java/\n- sample-tests/\n- website/\n- .editorconfig\n- .eslintignore\n- .eslintrc.json\n- .gitignore\n- .gitpod.yml\n- .prettieriignore\n- .prettierrc.json\n- commitlint.config.js\n- lerna.json\n- LICENSE\n- package.json\n- pnpm-lock.yaml\n- pnpm-workspace.yaml\n- README.md\n")),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("h3",{id:"1-github"},"1. ",(0,r.kt)("inlineCode",{parentName:"h3"},".github/")),(0,r.kt)("p",null,"This directory contains issue and PR templates, GitHub Action workflows and other community related files."),(0,r.kt)("h3",{id:"2-husky"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},".husky/")),(0,r.kt)("p",null,"This directory contains Husky pre-commit hook configs for linting,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commit messages"),(0,r.kt)("li",{parentName:"ul"},"Prettier styles"),(0,r.kt)("li",{parentName:"ul"},"ESLint rules")),(0,r.kt)("h3",{id:"3-vscode"},"3. ",(0,r.kt)("inlineCode",{parentName:"h3"},".vscode/")),(0,r.kt)("p",null,"This directory contains VS Code settings and extensions."),(0,r.kt)("h3",{id:"4-assets"},"4. ",(0,r.kt)("inlineCode",{parentName:"h3"},"assets/")),(0,r.kt)("p",null,"This directory contains all the assets required by the README file."),(0,r.kt)("h3",{id:"5-core-java"},"5. ",(0,r.kt)("inlineCode",{parentName:"h3"},"core-java/")),(0,r.kt)("p",null,"This directory contains the core framework Java Maven based project."),(0,r.kt)("h3",{id:"6-sample-tests"},"6. ",(0,r.kt)("inlineCode",{parentName:"h3"},"sample-tests/")),(0,r.kt)("p",null,"This directory contains the sample tests for boyka-framework for API and Web."),(0,r.kt)("h3",{id:"7-website"},"7. ",(0,r.kt)("inlineCode",{parentName:"h3"},"website/")),(0,r.kt)("p",null,"This directory contains the website documentation for the project."),(0,r.kt)("h3",{id:"8-eslintignore"},"8. ",(0,r.kt)("inlineCode",{parentName:"h3"},".eslintignore")),(0,r.kt)("p",null,"This file contains the ESLint ignore patterns for the project."),(0,r.kt)("h3",{id:"9-eslintrcjson"},"9. ",(0,r.kt)("inlineCode",{parentName:"h3"},".eslintrc.json")),(0,r.kt)("p",null,"This file contains the ESLint rules for the project."),(0,r.kt)("h3",{id:"10-gitignore"},"10. ",(0,r.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,r.kt)("p",null,"This file contains the Git ignore patterns for the project."),(0,r.kt)("h3",{id:"11-gitpodyml"},"11. ",(0,r.kt)("inlineCode",{parentName:"h3"},".gitpod.yml")),(0,r.kt)("p",null,"This file contains the Gitpod settings for the project."),(0,r.kt)("h3",{id:"12-nvmrc"},"12. ",(0,r.kt)("inlineCode",{parentName:"h3"},".nvmrc")),(0,r.kt)("p",null,"This file contains the Node version for the project."),(0,r.kt)("h3",{id:"13-prettierignore"},"13. ",(0,r.kt)("inlineCode",{parentName:"h3"},".prettierignore")),(0,r.kt)("p",null,"This file contains the Prettier ignore patterns for the project."),(0,r.kt)("h3",{id:"14-prettierrcjson"},"14. ",(0,r.kt)("inlineCode",{parentName:"h3"},".prettierrc.json")),(0,r.kt)("p",null,"This file contains the Prettier rules for the project."),(0,r.kt)("h3",{id:"15-changelogmd"},"15. ",(0,r.kt)("inlineCode",{parentName:"h3"},"CHANGELOG.md")),(0,r.kt)("p",null,"This file contains the project change logs for the last release."),(0,r.kt)("h3",{id:"16-commitlintconfigjs"},"16. ",(0,r.kt)("inlineCode",{parentName:"h3"},"commitlint.config.js")),(0,r.kt)("p",null,"This file contains the commit lint config for the project."),(0,r.kt)("h3",{id:"17-lernajson"},"17. ",(0,r.kt)("inlineCode",{parentName:"h3"},"lerna.json")),(0,r.kt)("p",null,"This file contains the Lerna settings for the project."),(0,r.kt)("h3",{id:"18-license"},"18. ",(0,r.kt)("inlineCode",{parentName:"h3"},"LICENSE")),(0,r.kt)("p",null,"This file contains the license for the project."),(0,r.kt)("h3",{id:"19-packagejson"},"19. ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,r.kt)("p",null,"This file contains the project package.json settings."),(0,r.kt)("h3",{id:"20-readmemd"},"20. ",(0,r.kt)("inlineCode",{parentName:"h3"},"README.md")),(0,r.kt)("p",null,"This file contains the project README.md file."),(0,r.kt)("h3",{id:"21-pnpm-lockyaml"},"21. ",(0,r.kt)("inlineCode",{parentName:"h3"},"pnpm-lock.yaml")),(0,r.kt)("p",null,"This file contains the projects pnpm lock file."),(0,r.kt)("h3",{id:"22-pnpm-workspaceyaml"},"22. ",(0,r.kt)("inlineCode",{parentName:"h3"},"pnpm-workspace.yaml")),(0,r.kt)("p",null,"This file contains the project workspace details."))}u.isMDXComponent=!0}}]);