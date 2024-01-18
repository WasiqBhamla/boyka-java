"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9409],{5608:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=i(5250),n=i(2459);const s={title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:4},o=void 0,d={id:"project-details/action-workflows",title:"\u267b\ufe0f GitHub Actions workflows",description:"Project workflows",source:"@site/docs/contributing/project-details/action-workflows.md",sourceDirName:"project-details",slug:"/project-details/action-workflows",permalink:"/boyka-framework/contributing/project-details/action-workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/action-workflows.md",tags:[],version:"current",lastUpdatedBy:"Wasiq Bhamla",lastUpdatedAt:1705592602,formattedLastUpdatedAt:"Jan 18, 2024",sidebarPosition:4,frontMatter:{title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:4},sidebar:"contributing",previous:{title:"\ud83d\udee1\ufe0f Branch Protection",permalink:"/boyka-framework/contributing/project-details/branch-protection"},next:{title:"\ud83d\udc84 Coding style",permalink:"/boyka-framework/contributing/project-details/coding-style"}},c={},l=[{value:"Project workflows",id:"project-workflows",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"project-workflows",children:"Project workflows"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Check out all our project workflows ",(0,r.jsx)(t.a,{href:"https://github.com/BoykaFramework/boyka-framework/actions",children:"on GitHub"})]})}),"\n",(0,r.jsx)(t.p,{children:"Following are the GitHub Actions workflows that we have created for our project along with it's trigger condition:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Workflow"}),(0,r.jsx)(t.th,{children:"Event Trigger"}),(0,r.jsx)(t.th,{children:"Path Trigger"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"check-commit"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PR -> main"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsxs)(t.td,{children:["Will check commit message if it complies with ",(0,r.jsx)(t.a,{href:"https://conventionalcommits.org/",children:"conventional commit specifications"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"codeql"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"push (main)"}),", ",(0,r.jsx)(t.code,{children:"PR -> main"}),", ",(0,r.jsx)(t.code,{children:"Every Sat 2 PM"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsxs)(t.td,{children:["Will run CodeQL on the latest commit for both ",(0,r.jsx)(t.code,{children:"java"})," and ",(0,r.jsx)(t.code,{children:"typescript"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deploy-site"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PR -> main"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"website/"}),", ",(0,r.jsx)(t.code,{children:".github/"})]}),(0,r.jsx)(t.td,{children:"Will only test the site."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deploy-site"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"push (main)"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"website/"}),", ",(0,r.jsx)(t.code,{children:".github/"})]}),(0,r.jsx)(t.td,{children:"Will only deploy the site to GitHub pages."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pr-labeler"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PR -> (open / close)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsx)(t.td,{children:"Will label the PR with the appropriate labels."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"release"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"manual"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsx)(t.td,{children:"Will deploy the framework to Maven central, create a tag and release on GitHub based on input params."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"test-core"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"push (main)"}),", ",(0,r.jsx)(t.code,{children:"PR -> (main)"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"core-java/"}),", ",(0,r.jsx)(t.code,{children:".github/"})]}),(0,r.jsxs)(t.td,{children:["Will run check code styles, run tests and SonarCloud code analysis. Code analysis will only run on ",(0,r.jsx)(t.code,{children:"push(main)"})," event trigger"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"tweet-release"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"release -> (published)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsxs)(t.td,{children:["Will tweet about the release on Twitter handle ",(0,r.jsx)(t.a,{href:"https://dub.sh/boyka-twitter",children:"@BoykaFramework"}),"."]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2459:(e,t,i)=>{i.d(t,{Z:()=>d,a:()=>o});var r=i(79);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);