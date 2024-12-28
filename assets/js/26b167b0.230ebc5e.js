"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2319],{1014:(e,t,d)=>{d.r(t),d.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"project-details/action-workflows","title":"\u267b\ufe0f GitHub Actions workflows","description":"Project workflows","source":"@site/docs/contributing/project-details/action-workflows.md","sourceDirName":"project-details","slug":"/project-details/action-workflows","permalink":"/boyka-framework/contributing/project-details/action-workflows","draft":false,"unlisted":false,"editUrl":"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/contributing/project-details/action-workflows.md","tags":[],"version":"current","lastUpdatedBy":"Wasiq Bhamla","lastUpdatedAt":1735403054000,"sidebarPosition":4,"frontMatter":{"title":"\u267b\ufe0f GitHub Actions workflows","sidebar_position":4},"sidebar":"contributing","previous":{"title":"\ud83d\udee1\ufe0f Branch Protection","permalink":"/boyka-framework/contributing/project-details/branch-protection"},"next":{"title":"\ud83d\udc84 Coding style","permalink":"/boyka-framework/contributing/project-details/coding-style"}}');var r=d(7557),s=d(2887);const n={title:"\u267b\ufe0f GitHub Actions workflows",sidebar_position:4},o=void 0,c={},l=[{value:"Project workflows",id:"project-workflows",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"project-workflows",children:"Project workflows"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Check out all our project workflows ",(0,r.jsx)(t.a,{href:"https://github.com/BoykaFramework/boyka-framework/actions",children:"on GitHub"})]})}),"\n",(0,r.jsx)(t.p,{children:"Following are the GitHub Actions workflows that we have created for our project along with it's trigger condition:"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Workflow"}),(0,r.jsx)(t.th,{children:"Event Trigger"}),(0,r.jsx)(t.th,{children:"Path Trigger"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"bs-app-upload"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"Every month on 25th day"}),", ",(0,r.jsx)(t.code,{children:"manual"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsx)(t.td,{children:"Will upload the Android and iOS apps on the BrowserStack cloud"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"check-commit"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PR -> main"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsxs)(t.td,{children:["Will check commit message if it complies with ",(0,r.jsx)(t.a,{href:"https://conventionalcommits.org/",children:"conventional commit specifications"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"codeql"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"push (main)"}),", ",(0,r.jsx)(t.code,{children:"PR -> main"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsxs)(t.td,{children:["Will run CodeQL on the latest commit for both ",(0,r.jsx)(t.code,{children:"java"})," and ",(0,r.jsx)(t.code,{children:"typescript"}),"."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deploy-site"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PR -> main"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"website/"}),", ",(0,r.jsx)(t.code,{children:".github/"})]}),(0,r.jsx)(t.td,{children:"Will only test the site."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"deploy-site"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"push (main)"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"website/"}),", ",(0,r.jsx)(t.code,{children:".github/"})]}),(0,r.jsx)(t.td,{children:"Will only deploy the site to GitHub pages."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"lt-app-upload"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"Every 3 months"}),", ",(0,r.jsx)(t.code,{children:"manual"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsx)(t.td,{children:"Will upload the Android and iOS apps on the LambdaTest cloud"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"pr-labeler"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"PR -> (open / close)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsx)(t.td,{children:"Will label the PR with the appropriate labels."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"release"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"manual"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsx)(t.td,{children:"Will deploy the framework to Maven central, create a tag and release on GitHub based on input params."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"test-core"})}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"push (main)"}),", ",(0,r.jsx)(t.code,{children:"PR -> (main)"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.code,{children:"core-java/"}),", ",(0,r.jsx)(t.code,{children:".github/"})]}),(0,r.jsxs)(t.td,{children:["Will run check code styles, run tests and SonarCloud code analysis. Code analysis will only run on ",(0,r.jsx)(t.code,{children:"push(main)"})," event trigger"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"tweet-release"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"release -> (published)"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"all"})}),(0,r.jsxs)(t.td,{children:["Will tweet about the release on Twitter handle ",(0,r.jsx)(t.a,{href:"https://dub.sh/boyka-twitter",children:"@BoykaFramework"}),"."]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2887:(e,t,d)=>{d.d(t,{R:()=>n,x:()=>o});var i=d(8225);const r={},s=i.createContext(r);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);