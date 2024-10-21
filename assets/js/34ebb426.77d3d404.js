"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4733],{6120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(6106),o=n(8665);const r={sidebar_position:1,title:"\ud83d\ude80 Quick start"},i=void 0,s={id:"getting-started/quickstart",title:"\ud83d\ude80 Quick start",description:"\ud83e\udd16 Using automated approach (Recommended)",source:"@site/docs/framework-docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/boyka-framework/docs/getting-started/quickstart",draft:!1,unlisted:!1,editUrl:"https://github.com/BoykaFramework/boyka-framework/edit/main/website/docs/framework-docs/getting-started/quickstart.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:17295291e5,sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\ud83d\ude80 Quick start"},sidebar:"docs",previous:{title:"\ud83d\udc4b Introduction",permalink:"/boyka-framework/docs/intro"},next:{title:"\ud83d\udcd0 Framework Architecture",permalink:"/boyka-framework/docs/getting-started/architecture"}},c={},d=[{value:"\ud83e\udd16 Using automated approach (Recommended)",id:"-using-automated-approach-recommended",level:2},{value:"\ud83d\udea9 Pre-requisites",id:"-pre-requisites",level:3},{value:"\u2b07\ufe0f Install Boyka CLI",id:"\ufe0f-install-boyka-cli",level:3},{value:"\u2728 Create the Boyka project",id:"-create-the-boyka-project",level:3},{value:"\ud83d\udcaa Using manual approach",id:"-using-manual-approach",level:2},{value:"\u2728 Create Maven project",id:"-create-maven-project",level:3},{value:"\u2b07\ufe0f Add Dependency",id:"\ufe0f-add-dependency",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"-using-automated-approach-recommended",children:"\ud83e\udd16 Using automated approach (Recommended)"}),"\n",(0,a.jsx)(t.h3,{id:"-pre-requisites",children:"\ud83d\udea9 Pre-requisites"}),"\n",(0,a.jsx)(t.p,{children:"Following are the pre-requisites for getting started via automated approach:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Node JS LTS"}),": Download the latest v18 LTS from ",(0,a.jsx)(t.a,{href:"https://nodejs.org/en/download/package-manager",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Java"}),": Download the latest Java JDK v17 from ",(0,a.jsx)(t.a,{href:"https://adoptium.net/temurin/releases/",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Maven"}),": Download the latest Maven distribution from ",(0,a.jsx)(t.a,{href:"https://maven.apache.org/download.cgi",children:"here"})," and follow the installation guide provided ",(0,a.jsx)(t.a,{href:"https://maven.apache.org/install.html",children:"here"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"\ufe0f-install-boyka-cli",children:"\u2b07\ufe0f Install Boyka CLI"}),"\n",(0,a.jsx)(t.p,{children:"To quickly get started, run the following command on the terminal to install the Boyka command line tool:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"npm i -g @boykaframework/boyka-cli\n"})}),"\n",(0,a.jsx)(t.h3,{id:"-create-the-boyka-project",children:"\u2728 Create the Boyka project"}),"\n",(0,a.jsx)(t.p,{children:"Once you have installed the Boyka command line assistant, run the following command on your terminal to create a minimalist Maven project:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"boyka init [project-name]\n"})}),"\n",(0,a.jsx)(t.p,{children:"Here, you can give any project name of your choosing."}),"\n",(0,a.jsx)(t.p,{children:"When you execute this command, you will be asked a set of questions, based on which, the Boyka project will be setup."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"While answering the questions, make sure you read it carefully and reply accordingly to your requirement."})}),"\n",(0,a.jsx)(t.p,{children:"A new folder of the project name which you provided to the command will be created which you can open in any IDE of your choosing."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"It is recommended to use IntelliJ IDEA for writing your test."})}),"\n",(0,a.jsxs)(t.p,{children:["Open the newly created project in IntelliJ IDE and do a Maven refresh using the ",(0,a.jsx)(t.code,{children:"Maven Tab"}),". Next, build the project using the ",(0,a.jsx)(t.code,{children:"Build menu"}),", when prompted ",(0,a.jsx)(t.code,{children:"Enable Lombok Annotation Processing"}),", click to enable it."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"If the project is set using Boyka CLI assistant and the sample tests have been generated, refer those tests for code walkthrough and write your own tests using it as an example."})}),"\n",(0,a.jsx)(t.h2,{id:"-using-manual-approach",children:"\ud83d\udcaa Using manual approach"}),"\n",(0,a.jsx)(t.h3,{id:"-create-maven-project",children:"\u2728 Create Maven project"}),"\n",(0,a.jsx)(t.p,{children:"Use any IDE of your choosing and create a new Java Maven project using JDK 17."}),"\n",(0,a.jsxs)(t.p,{children:["You can also enforce the Java version in ",(0,a.jsx)(t.code,{children:"pom.xml"})," file as shown below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-xml",metastring:'title="pom.xml"',children:". . .\n<properties>\n  . . .\n  <maven.compiler.source>17</maven.compiler.source>\n  <maven.compiler.target>17</maven.compiler.target>\n  . . .\n</properties>\n"})}),"\n",(0,a.jsx)(t.h3,{id:"\ufe0f-add-dependency",children:"\u2b07\ufe0f Add Dependency"}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Use the latest version from ",(0,a.jsx)(t.a,{href:"https://mvnrepository.com/artifact/io.github.boykaframework/boyka-framework",children:"Maven Central"})," and add it to your ",(0,a.jsx)(t.code,{children:"pom.xml"})]})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8665:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>s});var a=n(7378);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);