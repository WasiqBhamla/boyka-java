"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7643],{9024:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});n(7378);var r=n(3372),s=n(627),a=n(8749),l=n(8914),o=n(9414),i=n(3076),c=n(783),d=n(6106);function u(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,d.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,d.jsx)(c.A,{permalink:n,title:(0,d.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,d.jsx)(c.A,{permalink:r,title:(0,d.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}var m=n(5606),g=n(3595),h=n(8423);function p(e){let{items:t,component:n=h.A}=e;return(0,d.jsx)(d.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,d.jsx)(g.in,{content:t,children:(0,d.jsx)(n,{children:(0,d.jsx)(t,{})})},t.metadata.permalink)}))})}var x=n(7521);function j(e){const t=(0,g.kJ)(e);return(0,d.jsx)(x.A,{children:(0,d.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function f(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,s.A)(),{blogDescription:r,blogTitle:l,permalink:o}=t,i="/"===o?n:l;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.be,{title:i,description:r}),(0,d.jsx)(m.A,{tag:"blog_posts_list"})]})}function b(e){const{metadata:t,items:n,sidebar:r}=e;return(0,d.jsxs)(o.A,{sidebar:r,children:[(0,d.jsx)(p,{items:n}),(0,d.jsx)(u,{metadata:t})]})}function A(e){return(0,d.jsxs)(a.e3,{className:(0,r.A)(l.G.wrapper.blogPages,l.G.page.blogListPage),children:[(0,d.jsx)(f,{...e}),(0,d.jsx)(j,{...e}),(0,d.jsx)(b,{...e})]})}},8423:(e,t,n)=>{n.d(t,{A:()=>C});n(7378);var r=n(3372),s=n(3595),a=n(6106);function l(e){let{children:t,className:n}=e;return(0,a.jsx)("article",{className:n,children:t})}var o=n(4539);const i={title:"title_oLNT"};function c(e){let{className:t}=e;const{metadata:n,isBlogPostPage:l}=(0,s.e7)(),{permalink:c,title:d}=n,u=l?"h1":"h2";return(0,a.jsx)(u,{className:(0,r.A)(i.title,t),children:l?d:(0,a.jsx)(o.A,{to:c,children:d})})}var d=n(3076),u=n(972),m=n(8755);const g={container:"container_VdNG"};function h(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.W)();return t=>{const n=Math.ceil(t);return e(n,(0,d.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return(0,a.jsx)(a.Fragment,{children:n(t)})}function p(e){let{date:t,formattedDate:n}=e;return(0,a.jsx)("time",{dateTime:t,children:n})}function x(){return(0,a.jsx)(a.Fragment,{children:" \xb7 "})}function j(e){let{className:t}=e;const{metadata:n}=(0,s.e7)(),{date:l,readingTime:o}=n,i=(0,m.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,a.jsxs)("div",{className:(0,r.A)(g.container,"margin-vert--md",t),children:[(0,a.jsx)(p,{date:l,formattedDate:(c=l,i.format(new Date(c)))}),void 0!==o&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(x,{}),(0,a.jsx)(h,{readingTime:o})]})]});var c}var f=n(8610);const b={authorCol:"authorCol_VVgV",imageOnlyAuthorRow:"imageOnlyAuthorRow_s_Rf",imageOnlyAuthorCol:"imageOnlyAuthorCol_BLzW"};function A(e){let{className:t}=e;const{metadata:{authors:n},assets:l}=(0,s.e7)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t})),i=1===n.length;return(0,a.jsx)("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",o?b.imageOnlyAuthorRow:"row",t),children:n.map(((e,t)=>(0,a.jsx)("div",{className:(0,r.A)(!o&&(i?"col col--12":"col col--6"),o?b.imageOnlyAuthorCol:b.authorCol),children:(0,a.jsx)(f.A,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,a.jsxs)("header",{children:[(0,a.jsx)(c,{}),(0,a.jsx)(j,{}),(0,a.jsx)(A,{})]})}var N=n(4203),w=n(5693);function T(e){let{children:t,className:n}=e;const{isBlogPostPage:l}=(0,s.e7)();return(0,a.jsx)("div",{id:l?N.LU:void 0,className:(0,r.A)("markdown",n),children:(0,a.jsx)(w.A,{children:t})})}var y=n(8914),P=n(3402),k=n(2917);function F(){return(0,a.jsx)("b",{children:(0,a.jsx)(d.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function R(e){const{blogPostTitle:t,...n}=e;return(0,a.jsx)(o.A,{"aria-label":(0,d.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...n,children:(0,a.jsx)(F,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:n,title:l,editUrl:o,hasTruncateMarker:i,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&i,m=n.length>0;if(!(m||u||o))return null;if(t){const e=!!(o||d||c);return(0,a.jsxs)("footer",{className:"docusaurus-mt-lg",children:[m&&(0,a.jsx)("div",{className:(0,r.A)("row","margin-top--sm",y.G.blog.blogFooterEditMetaRow),children:(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(k.A,{tags:n})})}),e&&(0,a.jsx)(P.A,{className:(0,r.A)("margin-top--sm",y.G.blog.blogFooterEditMetaRow),editUrl:o,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,a.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[m&&(0,a.jsx)("div",{className:(0,r.A)("col",{"col--9":u}),children:(0,a.jsx)(k.A,{tags:n})}),u&&(0,a.jsx)("div",{className:(0,r.A)("col text--right",{"col--3":m}),children:(0,a.jsx)(R,{blogPostTitle:l,to:e.permalink})})]})}function C(e){let{children:t,className:n}=e;const o=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,a.jsxs)(l,{className:(0,r.A)(o,n),children:[(0,a.jsx)(v,{}),(0,a.jsx)(T,{children:t}),(0,a.jsx)(U,{})]})}},972:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(7378),s=n(627);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=i();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}}}]);