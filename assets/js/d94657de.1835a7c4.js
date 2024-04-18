"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6769],{638:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=r(9214),t=r(4037);const s={title:"\ud83d\udd00 Branching Strategy",sidebar_position:2},a=void 0,l={id:"project-details/branch-strategy",title:"\ud83d\udd00 Branching Strategy",description:"Branching strategy",source:"@site/docs/contributing/project-details/branch-strategy.md",sourceDirName:"project-details",slug:"/project-details/branch-strategy",permalink:"/boyka-framework/contributing/project-details/branch-strategy",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/branch-strategy.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1713424498e3,sidebarPosition:2,frontMatter:{title:"\ud83d\udd00 Branching Strategy",sidebar_position:2},sidebar:"contributing",previous:{title:"\ud83d\udcda Project Structure",permalink:"/boyka-framework/contributing/project-details/structure"},next:{title:"\ud83d\udee1\ufe0f Branch Protection",permalink:"/boyka-framework/contributing/project-details/branch-protection"}},o={},c=[{value:"\ud83d\udc68\u200d\ud83c\udfed Contributor steps",id:"-contributor-steps",level:2},{value:"\ud83e\uddd1\u200d\ud83d\udcbc Maintainer steps",id:"-maintainer-steps",level:2},{value:"\ud83d\udd22 Versioning process",id:"-versioning-process",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Branching strategy",src:r(280).A+"",width:"961",height:"692"})}),"\n",(0,i.jsx)(n.h2,{id:"-contributor-steps",children:"\ud83d\udc68\u200d\ud83c\udfed Contributor steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["All contributors should create a branch named as ",(0,i.jsx)(n.code,{children:"issue-<issue-number>"})]}),"\n",(0,i.jsxs)(n.li,{children:["Once the contributor is done with the work, they should create the PR to merge their branch to ",(0,i.jsx)(n.code,{children:"main"})," branch"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-maintainer-steps",children:"\ud83e\uddd1\u200d\ud83d\udcbc Maintainer steps"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Maintainers will review the PR raised by contributors and approve / suggest changes in it"}),"\n",(0,i.jsxs)(n.li,{children:["Once everything is fine, maintainers will squash merge the PR to ",(0,i.jsx)(n.code,{children:"main"})," branch"]}),"\n",(0,i.jsx)(n.li,{children:"Maintainers will decide when to release a new version"}),"\n",(0,i.jsxs)(n.li,{children:["Whenever a new version is planned to be released, maintainers will trigger the ",(0,i.jsx)(n.code,{children:"release"})," workflow and mark the release as a generally available release or a ",(0,i.jsx)(n.code,{children:"beta"})," release"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"-versioning-process",children:"\ud83d\udd22 Versioning process"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We follow ",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"SemVer"})," versioning strategy"]}),"\n",(0,i.jsxs)(n.li,{children:["We follow ",(0,i.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"Convention Commit"})," Commit message formatting"]}),"\n",(0,i.jsxs)(n.li,{children:["Currently, we are still in early stage of the framework where it's still not considered stable, hence our version is in ",(0,i.jsx)(n.code,{children:"0.x.x"})," format"]}),"\n",(0,i.jsxs)(n.li,{children:["Version for a new release is automatically identified based on the commit messages","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If there are bug fixes, ",(0,i.jsx)(n.code,{children:"patch"})," version will be released"]}),"\n",(0,i.jsxs)(n.li,{children:["If there are new features being added, ",(0,i.jsx)(n.code,{children:"minor"})," version will be released"]}),"\n",(0,i.jsxs)(n.li,{children:["If there are any ",(0,i.jsx)(n.code,{children:"BREAKING CHANGES"})," or we come out of MVP stage, then ",(0,i.jsx)(n.code,{children:"major"})," version will be released"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If it is a ",(0,i.jsx)(n.code,{children:"beta"})," release,","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Framework JAR will get published to Maven central for the new version"}),"\n",(0,i.jsx)(n.li,{children:"A new pre-release will be created on GitHub project release page"}),"\n",(0,i.jsxs)(n.li,{children:["A new discussion will be created for the same release in ",(0,i.jsx)(n.code,{children:"Discussion"})," tab"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["If it is a final release,","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Framework JAR will get published on Maven central for the new version"}),"\n",(0,i.jsx)(n.li,{children:"A new latest release will be created in GitHub project release page"}),"\n",(0,i.jsxs)(n.li,{children:["A new discussion will be created for the same release in ",(0,i.jsx)(n.code,{children:"Discussion"})," tab"]}),"\n",(0,i.jsxs)(n.li,{children:["Finally a Tweet will be posted on Twitter handle ",(0,i.jsx)(n.a,{href:"https://dub.sh/boyka-twitter",children:"@BoykaFramework"}),", informing about the Boyka framework release"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},280:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/branching-strategy-76ecc58ce7041c4d7124bca0468db8d2.png"},4037:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var i=r(8318);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);