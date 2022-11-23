"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3406],{167:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(5721);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=n(8533),r=(n(5721),n(167));const o={title:"\ud83d\udcda Project Structure",sidebar_position:1},l=void 0,a={unversionedId:"project-details/structure",id:"project-details/structure",title:"\ud83d\udcda Project Structure",description:"Following is the project repository root directory structure:",source:"@site/docs/contributing/project-details/structure.md",sourceDirName:"project-details",slug:"/project-details/structure",permalink:"/boyka-framework/contributing/project-details/structure",draft:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/structure.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1669213605,formattedLastUpdatedAt:"Nov 23, 2022",sidebarPosition:1,frontMatter:{title:"\ud83d\udcda Project Structure",sidebar_position:1},sidebar:"contributing",previous:{title:"\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1 Join our Discord server",permalink:"/boyka-framework/contributing/machine-setup/join-discord"},next:{title:"\ud83d\udd00 Branching Strategy",permalink:"/boyka-framework/contributing/project-details/branch-strategy"}},c={},s=[{value:"Details",id:"details",level:2},{value:"1. <code>.github/</code>",id:"1-github",level:3},{value:"2. <code>.husky/</code>",id:"2-husky",level:3},{value:"3. <code>.vscode/</code>",id:"3-vscode",level:3},{value:"4. <code>.yarn/</code>",id:"4-yarn",level:3},{value:"5. <code>assets/</code>",id:"5-assets",level:3},{value:"6. <code>core-java/</code>",id:"6-core-java",level:3},{value:"7. <code>sample-tests/</code>",id:"7-sample-tests",level:3},{value:"8. <code>website/</code>",id:"8-website",level:3},{value:"9. <code>.editorconfig</code>",id:"9-editorconfig",level:3},{value:"10. <code>.eslintignore</code>",id:"10-eslintignore",level:3},{value:"11. <code>.eslintrc.json</code>",id:"11-eslintrcjson",level:3},{value:"12. <code>.gitignore</code>",id:"12-gitignore",level:3},{value:"13. <code>.gitpod.yml</code>",id:"13-gitpodyml",level:3},{value:"14. <code>.nvmrc</code>",id:"14-nvmrc",level:3},{value:"15. <code>.prettierignore</code>",id:"15-prettierignore",level:3},{value:"16. <code>.prettierrc.json</code>",id:"16-prettierrcjson",level:3},{value:"17. <code>.yarnrc.yml</code>",id:"17-yarnrcyml",level:3},{value:"18. <code>commitlint.config.js</code>",id:"18-commitlintconfigjs",level:3},{value:"19. <code>lerna.json</code>",id:"19-lernajson",level:3},{value:"20. <code>LICENSE</code>",id:"20-license",level:3},{value:"21. <code>package.json</code>",id:"21-packagejson",level:3},{value:"22. <code>README.md</code>",id:"22-readmemd",level:3},{value:"23. <code>yarn.lock</code>",id:"23-yarnlock",level:3}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Following is the project repository root directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"- .github/\n- .husky/\n- .vscode/\n- .yarn/\n- assets/\n- core-java/\n- sample-tests/\n- website/\n- .editorconfig\n- .eslintignore\n- .eslintrc.json\n- .gitignore\n- .gitpod.yml\n- .prettieriignore\n- .prettierrc.json\n- .yarnrc.yml\n- commitlint.config.js\n- lerna.json\n- LICENSE\n- package.json\n- README.md\n- yarn.lock\n")),(0,r.kt)("h2",{id:"details"},"Details"),(0,r.kt)("h3",{id:"1-github"},"1. ",(0,r.kt)("inlineCode",{parentName:"h3"},".github/")),(0,r.kt)("p",null,"This directory contains issue and PR templates, GitHub Action workflows and other community related files."),(0,r.kt)("h3",{id:"2-husky"},"2. ",(0,r.kt)("inlineCode",{parentName:"h3"},".husky/")),(0,r.kt)("p",null,"This directory contains Husky pre-commit hook configs for linting,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Commit messages"),(0,r.kt)("li",{parentName:"ul"},"Prettier styles"),(0,r.kt)("li",{parentName:"ul"},"ESLint rules")),(0,r.kt)("h3",{id:"3-vscode"},"3. ",(0,r.kt)("inlineCode",{parentName:"h3"},".vscode/")),(0,r.kt)("p",null,"This directory contains VS Code settings and extensions."),(0,r.kt)("h3",{id:"4-yarn"},"4. ",(0,r.kt)("inlineCode",{parentName:"h3"},".yarn/")),(0,r.kt)("p",null,"This directory contains Yarn specific setting files."),(0,r.kt)("h3",{id:"5-assets"},"5. ",(0,r.kt)("inlineCode",{parentName:"h3"},"assets/")),(0,r.kt)("p",null,"This directory contains all the assets required by the README file."),(0,r.kt)("h3",{id:"6-core-java"},"6. ",(0,r.kt)("inlineCode",{parentName:"h3"},"core-java/")),(0,r.kt)("p",null,"This directory contains the core framework Java Maven based project."),(0,r.kt)("h3",{id:"7-sample-tests"},"7. ",(0,r.kt)("inlineCode",{parentName:"h3"},"sample-tests/")),(0,r.kt)("p",null,"This directory contains the sample tests for boyka-framework for API and Web."),(0,r.kt)("h3",{id:"8-website"},"8. ",(0,r.kt)("inlineCode",{parentName:"h3"},"website/")),(0,r.kt)("p",null,"This directory contains the website documentation for the project."),(0,r.kt)("h3",{id:"9-editorconfig"},"9. ",(0,r.kt)("inlineCode",{parentName:"h3"},".editorconfig")),(0,r.kt)("p",null,"This file contains the EditorConfig settings for the project."),(0,r.kt)("h3",{id:"10-eslintignore"},"10. ",(0,r.kt)("inlineCode",{parentName:"h3"},".eslintignore")),(0,r.kt)("p",null,"This file contains the ESLint ignore patterns for the project."),(0,r.kt)("h3",{id:"11-eslintrcjson"},"11. ",(0,r.kt)("inlineCode",{parentName:"h3"},".eslintrc.json")),(0,r.kt)("p",null,"This file contains the ESLint rules for the project."),(0,r.kt)("h3",{id:"12-gitignore"},"12. ",(0,r.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,r.kt)("p",null,"This file contains the Git ignore patterns for the project."),(0,r.kt)("h3",{id:"13-gitpodyml"},"13. ",(0,r.kt)("inlineCode",{parentName:"h3"},".gitpod.yml")),(0,r.kt)("p",null,"This file contains the Gitpod settings for the project."),(0,r.kt)("h3",{id:"14-nvmrc"},"14. ",(0,r.kt)("inlineCode",{parentName:"h3"},".nvmrc")),(0,r.kt)("p",null,"This file contains the Node version for the project."),(0,r.kt)("h3",{id:"15-prettierignore"},"15. ",(0,r.kt)("inlineCode",{parentName:"h3"},".prettierignore")),(0,r.kt)("p",null,"This file contains the Prettier ignore patterns for the project."),(0,r.kt)("h3",{id:"16-prettierrcjson"},"16. ",(0,r.kt)("inlineCode",{parentName:"h3"},".prettierrc.json")),(0,r.kt)("p",null,"This file contains the Prettier rules for the project."),(0,r.kt)("h3",{id:"17-yarnrcyml"},"17. ",(0,r.kt)("inlineCode",{parentName:"h3"},".yarnrc.yml")),(0,r.kt)("p",null,"This file contains the Yarn settings for the project."),(0,r.kt)("h3",{id:"18-commitlintconfigjs"},"18. ",(0,r.kt)("inlineCode",{parentName:"h3"},"commitlint.config.js")),(0,r.kt)("p",null,"This file contains the Commitlint config for the project."),(0,r.kt)("h3",{id:"19-lernajson"},"19. ",(0,r.kt)("inlineCode",{parentName:"h3"},"lerna.json")),(0,r.kt)("p",null,"This file contains the Lerna settings for the project."),(0,r.kt)("h3",{id:"20-license"},"20. ",(0,r.kt)("inlineCode",{parentName:"h3"},"LICENSE")),(0,r.kt)("p",null,"This file contains the license for the project."),(0,r.kt)("h3",{id:"21-packagejson"},"21. ",(0,r.kt)("inlineCode",{parentName:"h3"},"package.json")),(0,r.kt)("p",null,"This file contains the project package.json settings."),(0,r.kt)("h3",{id:"22-readmemd"},"22. ",(0,r.kt)("inlineCode",{parentName:"h3"},"README.md")),(0,r.kt)("p",null,"This file contains the project README.md file."),(0,r.kt)("h3",{id:"23-yarnlock"},"23. ",(0,r.kt)("inlineCode",{parentName:"h3"},"yarn.lock")),(0,r.kt)("p",null,"This file contains the project yarn.lock file."))}p.isMDXComponent=!0}}]);