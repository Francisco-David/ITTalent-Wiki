"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[209],{19:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(6540),r=n(53),l=n(467),s=n(4676);const c={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var i=n(4798);function o(e){let{sidebar:t}=e;return 0===t.items.length?null:a.createElement("nav",{className:(0,r.A)(c.sidebar,"thin-scrollbar"),"aria-label":(0,i.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.A)(c.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:c.sidebarItemList},t.items.map((e=>a.createElement("li",{key:e.permalink,className:c.sidebarItem},a.createElement(s.A,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title))))))}var m=n(1461);const d=function(e){const{sidebar:t,toc:n,children:s,...c}=e,i=t&&t.items.length>0;return a.createElement(l.A,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},i&&a.createElement("aside",{className:"col col--3"},a.createElement(o,{sidebar:t})),a.createElement("main",{className:(0,r.A)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),n&&a.createElement("div",{className:"col col--2"},a.createElement(m.A,{toc:n})))))}},5776:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(6540),r=n(19),l=n(8853),s=n(9777);const c=function(e){const{tags:t,sidebar:n}=e,c=(0,s.bi)();return a.createElement(r.A,{title:c,wrapperClassName:s.GN.wrapper.blogPages,pageClassName:s.GN.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,c),a.createElement(l.A,{tags:Object.values(t)}))}},1461:(e,t,n)=>{n.d(t,{m:()=>b,A:()=>f});var a=n(6540),r=n(53),l=n(9777);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e){let{anchorTopOffset:t}=e;const n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:n[n.indexOf(a)-1]??null}return n[n.length-1]}function i(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.pN)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const o=function(e){const t=(0,a.useRef)(void 0),n=i();(0,a.useEffect)((()=>{const{linkClassName:a,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=c({anchorTopOffset:n.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current?.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])},m="tableOfContents_vrFS",d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function b(e){let{toc:t,isChild:n}=e;return t.length?a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(b,{isChild:!0,toc:e.children}))))):null}const f=function(e){let{toc:t}=e;return o(u),a.createElement("div",{className:(0,r.A)(m,"thin-scrollbar")},a.createElement(b,{toc:t}))}},3373:(e,t,n)=>{n.d(t,{A:()=>o});var a=n(6540),r=n(53),l=n(4676);const s="tag_WK-t",c="tagRegular_LXbV",i="tagWithCount_S5Zl";const o=function(e){const{permalink:t,name:n,count:o}=e;return a.createElement(l.A,{href:t,className:(0,r.A)(s,{[c]:!o,[i]:o})},n,o&&a.createElement("span",null,o))}},8853:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(6540),r=n(3373),l=n(9777);const s={tag:"tag_7kA+"};function c(e){let{letterEntry:t}=e;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((e=>a.createElement("li",{key:e.permalink,className:s.tag},a.createElement(r.A,e))))),a.createElement("hr",null))}const i=function(e){let{tags:t}=e;const n=(0,l.QW)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((e=>a.createElement(c,{key:e.letter,letterEntry:e}))))}}}]);