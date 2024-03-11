"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[419],{4676:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(6540),o=n(4625),a=n(4586),s=n(6654),i=n(8193);const c=(0,r.createContext)({collectLink:()=>{}});var l=n(6025),u=n(440);const f=function(e){let{isNavLink:t,to:n,href:f,activeClassName:d,isActive:p,"data-noBrokenLinkCheck":g,autoAddBaseUrl:h=!0,...v}=e;var m;const{siteConfig:{trailingSlash:y,baseUrl:b}}=(0,a.A)(),{withBaseUrl:w}=(0,l.h)(),_=(0,r.useContext)(c),P=n||f,E=(0,s.A)(P),D=null==P?void 0:P.replace("pathname://","");let A=void 0!==D?(S=D,h&&(e=>e.startsWith("/"))(S)?w(S):S):void 0;var S;A&&E&&(A=(0,u.applyTrailingSlash)(A,{trailingSlash:y,baseUrl:b}));const O=(0,r.useRef)(!1),j=t?o.k2:o.N_,x=i.A.canUseIntersectionObserver;let k;(0,r.useEffect)((()=>(!x&&E&&null!=A&&window.docusaurus.prefetch(A),()=>{x&&k&&k.disconnect()})),[A,x,E]);const C=null!==(m=null==A?void 0:A.startsWith("#"))&&void 0!==m&&m,V=!A||!E||C;return A&&E&&!C&&!g&&_.collectLink(A),V?r.createElement("a",{href:A,...P&&!E&&{target:"_blank",rel:"noopener noreferrer"},...v}):r.createElement(j,{...v,onMouseEnter:()=>{O.current||null==A||(window.docusaurus.preload(A),O.current=!0)},innerRef:e=>{var t,n;x&&e&&E&&(t=e,n=()=>{null!=A&&window.docusaurus.prefetch(A)},k=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t),k.disconnect(),n())}))})),k.observe(t))},to:A||"",...t&&{isActive:p,activeClassName:d}})}},4798:(e,t,n)=>{n.d(t,{A:()=>f,T:()=>u});var r=n(6540);const o=/{\w+}/g,a="{}";function s(e,t){const n=[],s=e.replace(o,(e=>{const o=e.substr(1,e.length-2),s=null==t?void 0:t[o];if(void 0!==s){const e=r.isValidElement(s)?s:String(s);return n.push(e),a}return e}));return 0===n.length?e:n.every((e=>"string"==typeof e))?s.split(a).reduce(((e,t,r)=>{var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):s.split(a).reduce(((e,t,o)=>[...e,r.createElement(r.Fragment,{key:o},t,n[o])]),[])}function i(e){let{children:t,values:n}=e;if("string"!=typeof t)throw console.warn("Illegal <Interpolate> children",t),new Error("The Docusaurus <Interpolate> component only accept simple string values");return s(t,n)}var c=n(2654);function l(e){let{id:t,message:n}=e;var r;return null!==(r=c[null!=t?t:n])&&void 0!==r?r:n}function u(e,t){let{message:n,id:r}=e;var o;return s(null!==(o=l({message:n,id:r}))&&void 0!==o?o:n,t)}function f(e){let{children:t,id:n,values:o}=e;var a;if("string"!=typeof t)throw console.warn("Illegal <Translate> children",t),new Error("The Docusaurus <Translate> component only accept simple string values");const s=null!==(a=l({message:t,id:n}))&&void 0!==a?a:t;return r.createElement(i,{values:o},s)}},6654:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{A:()=>o,z:()=>r})},5567:(e,t,n)=>{n.r(t),n.d(t,{BrowserRouter:()=>r.Kd,HashRouter:()=>r.I9,Link:()=>r.N_,MemoryRouter:()=>r.fS,NavLink:()=>r.k2,Prompt:()=>r.XG,Redirect:()=>r.rd,Route:()=>r.qh,Router:()=>r.Ix,StaticRouter:()=>r.kO,Switch:()=>r.dO,generatePath:()=>r.tW,matchPath:()=>r.B6,useHistory:()=>r.W6,useLocation:()=>r.zy,useParams:()=>r.g,useRouteMatch:()=>r.W5,withRouter:()=>r.y});var r=n(4625)},6025:(e,t,n)=>{n.d(t,{A:()=>s,h:()=>a});var r=n(4586),o=n(6654);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.A)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:a=!1,absolute:s=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.z)(n))return n;if(a)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+i:i}(t,e,n,r)}}function s(e,t){void 0===t&&(t={});const{withBaseUrl:n}=a();return n(e,t)}},6588:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a,useAllPluginInstancesData:()=>s,usePluginData:()=>i});var r=n(4586);const o="default";function a(){const{globalData:e}=(0,r.A)();if(!e)throw new Error("Docusaurus global data not found.");return e}function s(e){const t=a()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin.`);return t}function i(e,t){void 0===t&&(t=o);const n=s(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`);return n}},2303:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(6540),o=n(3509);function a(){return(0,r.useContext)(o.o)}},4733:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(5567);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});const o=Object.entries(e).find((e=>{let[n,o]=e;return!!r.matchPath(t,{path:o.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error(`Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return a};t.getLatestVersion=e=>e.versions.find((e=>e.isLast));t.getActiveVersion=(e,n)=>{const o=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==o)),o].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))};t.getActiveDocContext=(e,n)=>{const o=t.getActiveVersion(e,n),a=null==o?void 0:o.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:o,activeDoc:a,alternateDocVersions:a?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(a.id):{}}};t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},727:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(1635),o=n(5567),a=r.__importStar(n(6588)),s=n(4733),i={};t.useAllDocsData=()=>{var e;return null!==(e=a.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:i};t.useDocsData=e=>a.usePluginData("docusaurus-plugin-content-docs",e);t.useActivePlugin=function(e){void 0===e&&(e={});const n=t.useAllDocsData(),{pathname:r}=o.useLocation();return s.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});const n=t.useActivePlugin(e),{pathname:r}=o.useLocation();if(n){return{activePlugin:n,activeVersion:s.getActiveVersion(n.pluginData,r)}}};t.useVersions=e=>t.useDocsData(e).versions;t.useLatestVersion=e=>{const n=t.useDocsData(e);return s.getLatestVersion(n)};t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return s.getActiveVersion(n,r)};t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return s.getActiveDocContext(n,r)};t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:r}=o.useLocation();return s.getDocVersionSuggestions(n,r)}},8139:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(6540),o=n(2602),a=n(9777),s=n(6025);function i(e){let{title:t,description:n,keywords:i,image:c,children:l}=e;const u=(0,a.s$)(t),{withBaseUrl:f}=(0,s.h)(),d=c?f(c,{absolute:!0}):void 0;return r.createElement(o.A,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),i&&r.createElement("meta",{name:"keywords",content:Array.isArray(i)?i.join(","):i}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),l)}},4098:(e,t,n)=>{n.d(t,{Gy:()=>r.useAllDocsData,HW:()=>r.useDocVersionSuggestions,ht:()=>r.useDocsData,ir:()=>r.useActiveVersion,jh:()=>r.useVersions,r7:()=>r.useLatestVersion,vT:()=>r.useActivePlugin,zK:()=>r.useActiveDocContext});var r=n(727)},9312:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(6540),o=n(8193);const a={desktop:"desktop",mobile:"mobile",ssr:"ssr"},s=996;function i(){return o.A.canUseDOM?window.innerWidth>s?a.desktop:a.mobile:a.ssr}const c=function(){const[e,t]=(0,r.useState)((()=>i()));return(0,r.useEffect)((()=>{function e(){t(i())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},9777:(e,t,n)=>{n.d(t,{oq:()=>ge,Nt:()=>F,Cy:()=>h,B_:()=>H,VQ:()=>oe,Gh:()=>Y,pM:()=>Q,GN:()=>ce,Wf:()=>l,tU:()=>v,ys:()=>b,Eo:()=>u,QW:()=>be,wt:()=>g,bi:()=>ye,oK:()=>d,Mj:()=>he,uW:()=>C,g1:()=>ie,$Z:()=>we,BH:()=>ve,$G:()=>j,Ko:()=>Z,Ww:()=>S,ZC:()=>O,pN:()=>o,s$:()=>w});var r=n(4586);function o(){return(0,r.A)().siteConfig.themeConfig}const a="localStorage";function s(e){if(void 0===e&&(e=a),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,i||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),i=!0),null}var t}let i=!1;const c={get:()=>null,set:()=>{},del:()=>{}};const l=(e,t)=>{if("undefined"==typeof window)return function(e){function t(){throw new Error(`Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`)}return{get:t,set:t,del:t}}(e);const n=s(null==t?void 0:t.persistence);return null===n?c:{get:()=>n.getItem(e),set:t=>n.setItem(e,t),del:()=>n.removeItem(e)}};function u(e){void 0===e&&(e=a);const t=s(e);if(!t)return[];const n=[];for(let r=0;r<t.length;r+=1){const e=t.key(r);null!==e&&n.push(e)}return n}var f=n(6347);function d(){const{siteConfig:{baseUrl:e,url:t},i18n:{defaultLocale:n,currentLocale:o}}=(0,r.A)(),{pathname:a}=(0,f.zy)(),s=o===n?e:e.replace(`/${o}/`,"/"),i=a.replace(e,"");return{createUrl:function(e){let{locale:r,fullyQualified:o}=e;return`${o?t:""}${function(e){return e===n?`${s}`:`${s}${e}/`}(r)}${i}`}}}const p=/title=(["'])(.*?)\1/;function g(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(p))||void 0===t?void 0:t[2])&&void 0!==n?n:""}const h="default";function v(e,t){return`docs-${e}-${t}`}var m=n(4098);const y=!!m.Gy,b=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)},w=e=>{const{siteConfig:t}=(0,r.A)(),{title:n,titleDelimiter:o}=t;return e&&e.trim().length?`${e.trim()} ${o} ${n}`:n};var _=n(6540);const P=["zero","one","two","few","many","other"];function E(e){return P.filter((t=>e.includes(t)))}const D={locale:"en",pluralForms:E(["one","other"]),select:e=>1===e?"one":"other"};function A(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,_.useMemo)((()=>{if(!Intl.PluralRules)return console.error("Intl.PluralRules not available!\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n        "),D;try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:E(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to a default/fallback (English) Intl.PluralRules implementation.\n`),D}}),[e])}function S(){const e=A();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];{r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms}), but the message contains ${r.length} plural forms: ${e} `);const o=n.select(t),a=n.pluralForms.indexOf(o);return r[Math.min(a,r.length-1)]}}(n,t,e)}}function O(e){const t=(0,_.useRef)();return(0,_.useEffect)((()=>{t.current=e})),t.current}function j(e){const t=(0,f.zy)(),n=O(t),r=(0,_.useRef)(!0);(0,_.useEffect)((()=>{r.current?r.current=!1:e({location:t,previousLocation:n})}),[t])}var x=n(8193);const k="ease-in-out";function C(e){let{initialState:t}=e;const[n,r]=(0,_.useState)(null!=t&&t),o=(0,_.useCallback)((()=>{r((e=>!e))}),[]);return{collapsed:n,setCollapsed:r,toggleCollapsed:o}}const V={display:"none",overflow:"hidden",height:"0px"},T={display:"block",overflow:"visible",height:"auto"};function R(e,t){const n=t?V:T;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function I(e){let{collapsibleRef:t,collapsed:n,animation:r}=e;const o=(0,_.useRef)(!1);(0,_.useEffect)((()=>{const e=t.current;function a(){var t,n;const o=e.scrollHeight,a=null!==(t=null==r?void 0:r.duration)&&void 0!==t?t:function(e){const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(o);return{transition:`height ${a}ms ${null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:k}`,height:`${o}px`}}function s(){const t=a();e.style.transition=t.transition,e.style.height=t.height}if(!o.current)return R(e,n),void(o.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(s(),requestAnimationFrame((()=>{e.style.height=V.height,e.style.overflow=V.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{s()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,r])}function L(e){if(!x.A.canUseDOM)return e?V:T}function M(e){let{as:t="div",collapsed:n,children:r,animation:o,onCollapseTransitionEnd:a,className:s,disableSSRStyle:i}=e;const c=(0,_.useRef)(null);return I({collapsibleRef:c,collapsed:n,animation:o}),_.createElement(t,{ref:c,style:i?void 0:L(n),onTransitionEnd:e=>{if("height"!==e.propertyName)return;const t=c.current,r=t.style.height;n||parseInt(r,10)!==t.scrollHeight||(R(t,!1),null==a||a(!1)),r===V.height&&(R(t,!0),null==a||a(!0))},className:s},r)}function $(e){let{collapsed:t,...n}=e;const[r,o]=(0,_.useState)(!t);(0,_.useLayoutEffect)((()=>{t||o(!0)}),[t]);const[a,s]=(0,_.useState)(t);return(0,_.useLayoutEffect)((()=>{r&&s(t)}),[r,t]),r?_.createElement(M,{...n,collapsed:a}):null}function F(e){let{lazy:t,...n}=e;const r=t?$:M;return _.createElement(r,{...n})}var N=n(2303),B=n(53);const U="details_Q743",W="isBrowser_rWTL",z="collapsibleContent_K5uX";function G(e){return!!e&&("SUMMARY"===e.tagName||G(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}const H=e=>{let{summary:t,children:n,...r}=e;const o=(0,N.A)(),a=(0,_.useRef)(null),{collapsed:s,setCollapsed:i}=C({initialState:!r.open}),[c,l]=(0,_.useState)(r.open);return _.createElement("details",{...r,ref:a,open:c,"data-collapsed":s,className:(0,B.A)(U,{[W]:o},r.className),onMouseDown:e=>{G(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;G(t)&&q(t,a.current)&&(e.preventDefault(),s?(i(!1),l(!0)):i(!0))}},t,_.createElement(F,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{i(e),l(!e)}},_.createElement("div",{className:z},n)))};const K=(0,_.createContext)(null);function Q(e){let{children:t}=e;return _.createElement(K.Provider,{value:(0,_.useState)(null)},t)}function X(){const e=(0,_.useContext)(K);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function Z(){const[e]=X();if(e){const t=e.component;return function(n){return _.createElement(t,{...e.props,...n})}}return()=>{}}function Y(e){let{component:t,props:n}=e;const[,r]=X(),o=(a=n,(0,_.useMemo)((()=>a),[...Object.keys(a),...Object.values(a)]));var a;return(0,_.useEffect)((()=>{r({component:t,props:o})}),[r,t,o]),(0,_.useEffect)((()=>()=>r(null)),[r]),null}const J=e=>`docs-preferred-version-${e}`,ee={save:(e,t,n)=>{l(J(e),{persistence:t}).set(n)},read:(e,t)=>l(J(e),{persistence:t}).get(),clear:(e,t)=>{l(J(e),{persistence:t}).del()}};function te(e){let{pluginIds:t,versionPersistence:n,allDocsData:r}=e;const o={};return t.forEach((e=>{o[e]=function(e){const t=ee.read(e,n);return r[e].versions.some((e=>e.name===t))?{preferredVersionName:t}:(ee.clear(e,n),{preferredVersionName:null})}(e)})),o}function ne(){const e=(0,m.Gy)(),t=o().docs.versionPersistence,n=(0,_.useMemo)((()=>Object.keys(e)),[e]),[r,a]=(0,_.useState)((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));(0,_.useEffect)((()=>{a(te({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,(0,_.useMemo)((()=>({savePreferredVersion:function(e,n){ee.save(e,t,n),a((t=>({...t,[e]:{preferredVersionName:n}})))}})),[a])]}const re=(0,_.createContext)(null);function oe(e){let{children:t}=e;return y?_.createElement(ae,null,t):_.createElement(_.Fragment,null,t)}function ae(e){let{children:t}=e;const n=ne();return _.createElement(re.Provider,{value:n},t)}const se="default";function ie(e){void 0===e&&(e=se);const t=(0,m.ht)(e),[n,r]=function(){const e=(0,_.useContext)(re);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),{preferredVersionName:o}=n[e];return{preferredVersion:o?t.versions.find((e=>e.name===o)):null,savePreferredVersionName:(0,_.useCallback)((t=>{r.savePreferredVersion(e,t)}),[r])}}const ce={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link"},blog:{}},le=l("docusaurus.announcement.dismiss"),ue=l("docusaurus.announcement.id"),fe=()=>"true"===le.get(),de=e=>le.set(String(e)),pe=(0,_.createContext)(null),ge=e=>{let{children:t}=e;const n=(()=>{const{announcementBar:e}=o(),t=(0,N.A)(),[n,r]=(0,_.useState)((()=>!!t&&fe()));(0,_.useEffect)((()=>{r(fe())}),[]);const a=(0,_.useCallback)((()=>{de(!0),r(!0)}),[]);return(0,_.useEffect)((()=>{if(!e)return;const{id:t}=e;let n=ue.get();"annoucement-bar"===n&&(n="announcement-bar");const o=t!==n;ue.set(t),o&&de(!1),!o&&fe()||r(!1)}),[]),(0,_.useMemo)((()=>({isClosed:n,close:a})),[n])})();return _.createElement(pe.Provider,{value:n},t)},he=()=>{const e=(0,_.useContext)(pe);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function ve(){const{siteConfig:{baseUrl:e}}=(0,r.A)(),{pathname:t}=(0,f.zy)();return t.replace(e,"/")}var me=n(4798);const ye=()=>(0,me.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function be(e){const t={};return Object.values(e).forEach((e=>{var n;const r=function(e){return e[0].toUpperCase()}(e.name);t[r]=null!==(n=t[r])&&void 0!==n?n:[],t[r].push(e)})),Object.entries(t).sort(((e,t)=>{let[n]=e,[r]=t;return n.localeCompare(r)})).map((e=>{let[t,n]=e;return{letter:t,tags:n.sort(((e,t)=>e.name.localeCompare(t.name)))}}))}function we(e){!function(e){const{block:t}=(0,f.W6)(),n=(0,_.useRef)(e);(0,_.useEffect)((()=>{n.current=e}),[e]),(0,_.useEffect)((()=>t(((e,t)=>n.current(e,t)))),[t,n])}(((t,n)=>{if("POP"===n)return e(t,n)}))}},2983:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[o]=e.split(/[#?]/),a="/"===o||o===r?o:(s=o,n?function(e){return e.endsWith("/")?e:`${e}/`}(s):function(e){return e.endsWith("/")?e.slice(0,-1):e}(s));var s;return e.replace(o,a)}},440:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(2983);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var a=n(5183);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},5183:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},53:(e,t,n)=>{function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}n.d(t,{A:()=>o});const o=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},1635:(e,t,n)=>{n.r(t),n.d(t,{__addDisposableResource:()=>R,__assign:()=>a,__asyncDelegator:()=>A,__asyncGenerator:()=>D,__asyncValues:()=>S,__await:()=>E,__awaiter:()=>g,__classPrivateFieldGet:()=>C,__classPrivateFieldIn:()=>T,__classPrivateFieldSet:()=>V,__createBinding:()=>v,__decorate:()=>i,__disposeResources:()=>L,__esDecorate:()=>l,__exportStar:()=>m,__extends:()=>o,__generator:()=>h,__importDefault:()=>k,__importStar:()=>x,__makeTemplateObject:()=>O,__metadata:()=>p,__param:()=>c,__propKey:()=>f,__read:()=>b,__rest:()=>s,__runInitializers:()=>u,__setFunctionName:()=>d,__spread:()=>w,__spreadArray:()=>P,__spreadArrays:()=>_,__values:()=>y,default:()=>M});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function i(e,t,n,r){var o,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(s=(a<3?o(s):a>3?o(t,n,s):o(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t,n,r,o,a){function s(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var i,c=r.kind,l="getter"===c?"get":"setter"===c?"set":"value",u=!t&&e?r.static?e:e.prototype:null,f=t||(u?Object.getOwnPropertyDescriptor(u,r.name):{}),d=!1,p=n.length-1;p>=0;p--){var g={};for(var h in r)g[h]="access"===h?{}:r[h];for(var h in r.access)g.access[h]=r.access[h];g.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(e||null))};var v=(0,n[p])("accessor"===c?{get:f.get,set:f.set}:f[l],g);if("accessor"===c){if(void 0===v)continue;if(null===v||"object"!=typeof v)throw new TypeError("Object expected");(i=s(v.get))&&(f.get=i),(i=s(v.set))&&(f.set=i),(i=s(v.init))&&o.unshift(i)}else(i=s(v))&&("field"===c?o.unshift(i):f[l]=i)}u&&Object.defineProperty(u,r.name,f),d=!0}function u(e,t,n){for(var r=arguments.length>2,o=0;o<t.length;o++)n=r?t[o].call(e,n):t[o].call(e);return r?n:void 0}function f(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function p(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function g(e,t,n,r){return new(n||(n=Promise))((function(o,a){function s(e){try{c(r.next(e))}catch(t){a(t)}}function i(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,i)}c((r=r.apply(e,t||[])).next())}))}function h(e,t){var n,r,o,a,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,i[0]&&(s=0)),s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var v=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function m(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||v(t,e,n)}function y(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(i){o={error:i}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return s}function w(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function _(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],s=0,i=a.length;s<i;s++,o++)r[o]=a[s];return r}function P(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function D(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},s("next"),s("throw"),s("return"),r[Symbol.asyncIterator]=function(){return this},r;function s(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||i(e,t)}))})}function i(e,t){try{(n=o[e](t)).value instanceof E?Promise.resolve(n.value.v).then(c,l):u(a[0][2],n)}catch(r){u(a[0][3],r)}var n}function c(e){i("next",e)}function l(e){i("throw",e)}function u(e,t){e(t),a.shift(),a.length&&i(a[0][0],a[0][1])}}function A(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:E(e[r](t)),done:!1}:o?o(t):t}:o}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=y(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&v(t,e,n);return j(t,e),t}function k(e){return e&&e.__esModule?e:{default:e}}function C(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function V(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function T(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function R(e,t,n){if(null!=t){if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose]}if("function"!=typeof r)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var I="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function L(e){function t(t){e.error=e.hasError?new I(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function n(){for(;e.stack.length;){var r=e.stack.pop();try{var o=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(o).then(n,(function(e){return t(e),n()}))}catch(a){t(a)}}if(e.hasError)throw e.error}()}const M={__extends:o,__assign:a,__rest:s,__decorate:i,__param:c,__metadata:p,__awaiter:g,__generator:h,__createBinding:v,__exportStar:m,__values:y,__read:b,__spread:w,__spreadArrays:_,__spreadArray:P,__await:E,__asyncGenerator:D,__asyncDelegator:A,__asyncValues:S,__makeTemplateObject:O,__importStar:x,__importDefault:k,__classPrivateFieldGet:C,__classPrivateFieldSet:V,__classPrivateFieldIn:T,__addDisposableResource:R,__disposeResources:L}}}]);