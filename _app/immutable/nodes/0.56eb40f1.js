import{s as h,n as i,i as M,c as d,o as y,d as f,e as C,u as D,g as W,f as $,t as j}from"../chunks/scheduler.1f863384.js";import{S as k,i as S,x as z,r as P,s as I,u as O,c as V,v as q,a as L,d as m,t as b,f as R,w as A}from"../chunks/index.31ba4fb4.js";import{w as B}from"../chunks/index.c88b4611.js";import{d as w,w as p,a as _}from"../chunks/global.b6e5a9a0.js";import{p as F}from"../chunks/stores.a7ec770f.js";const G=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,J=!0,le=Object.freeze(Object.defineProperty({__proto__:null,prerender:J},Symbol.toStringTag,{value:"Module"})),K="dark",N=window.localStorage.getItem("theme")??K,T=B(N);T.subscribe(o=>{window.localStorage.setItem("theme",o)});const{window:Q}=G;function U(o){let r,n;return{c:i,l:i,m(a,s){r||(n=z(Q,"resize",function(){M(w(o[1],o[0]))&&w(o[1],o[0]).apply(this,arguments)}),r=!0)},p(a,[s]){o=a},i,o:i,d(a){r=!1,n()}}}function X(o,r,n){let a,s;d(o,p,l=>n(2,a=l)),d(o,_,l=>n(3,s=l));let{debounceDur:t=300}=r;const e=()=>{f(_,s=window.innerWidth,s),Math.abs(a-window.innerHeight)>a*.2&&f(p,a=window.innerHeight,a)};return y(()=>{e(),f(p,a=window.innerHeight,a)}),o.$$set=l=>{"debounceDur"in l&&n(0,t=l.debounceDur)},[t,e]}class Y extends k{constructor(r){super(),S(this,r,X,U,h,{debounceDur:0})}}function Z(o){let r,n,a;r=new Y({});const s=o[4].default,t=C(s,o,o[3],null);return{c(){P(r.$$.fragment),n=I(),t&&t.c()},l(e){O(r.$$.fragment,e),n=V(e),t&&t.l(e)},m(e,l){q(r,e,l),L(e,n,l),t&&t.m(e,l),a=!0},p(e,[l]){t&&t.p&&(!a||l&8)&&D(t,s,e,e[3],a?$(s,e[3],l,null):W(e[3]),null)},i(e){a||(m(r.$$.fragment,e),m(t,e),a=!0)},o(e){b(r.$$.fragment,e),b(t,e),a=!1},d(e){e&&R(n),A(r,e),t&&t.d(e)}}}function ee(o,r,n){let a,s,t;d(o,T,u=>n(1,s=u)),d(o,F,u=>n(2,t=u));let{$$slots:e={},$$scope:l}=r,v=!1;y(()=>{v=!0,g(s)});async function x(){v&&(await j(),document.scrollingElement.scrollTop=0,window.scrollTo(0,0))}const E=[{var:"--pure-background-color",value:"#ffffff"},{var:"--pure-background-color-rgb",value:"143,45,86"},{var:"--primary-color",value:"#218380"},{var:"--primary-color-rgb",value:"33, 131, 128"},{var:"--accent-color",value:"rgb(41, 89, 180)"},{var:"--accent-color-rgb",value:"41, 89, 180"},{var:"--heading-color",value:"rgba(0, 0, 0, 0.7)"},{var:"--text-color",value:"#1c1c1c"},{var:"--text-color-rgb",value:"28, 28, 28"},{var:"--off-text-color",value:"#3a3a3a"},{var:"--pure-text-color",value:"#000000"},{var:"--background-without-opacity",value:"rgba(255, 255, 255, 0.7)"},{var:"--box-shadow-color",value:"rgba(0, 0, 0, 0.1)"},{var:"--works-on-accent-bg",value:"var(--pure-background-color)"},{var:"--semitransparent-bg",value:"rgba(255, 255, 255, 0.5)"},{var:"--footer-bg",value:"var(--semitransparent-bg)"},{var:"--noise-opacity",value:".15"}],H=[{var:"--pure-background-color",value:"#8f2d56"},{var:"--primary-color",value:"#218380"},{var:"--primary-color-rgb",value:"33, 131, 128"},{var:"--accent-color",value:"#73d2de"},{var:"--accent-color-rgb",value:"76, 159, 247"},{var:"--heading-color",value:"#73d2de"},{var:"--text-color",value:"#f2f2f2"},{var:"--text-color-rgb",value:"242, 242, 242"},{var:"--off-text-color",value:"#e3e3e3"},{var:"--pure-text-color",value:"#ffffff"},{var:"--background-without-opacity",value:"rgba(0, 0, 0, 0.7)"},{var:"--box-shadow-color",value:"rgba(0, 0, 0, 0.1)"},{var:"--works-on-accent-bg",value:"var(--pure-background-color)"},{var:"--semitransparent-bg",value:"rgba(255, 255, 255, 0.08)"},{var:"--footer-bg",value:"var(--semitransparent-bg)"},{var:"--noise-opacity",value:".15"}];function g(u){v&&(u=="light"?E.forEach(c=>{document.documentElement.style.setProperty(c.var,c.value)}):H.forEach(c=>{document.documentElement.style.setProperty(c.var,c.value)}))}return o.$$set=u=>{"$$scope"in u&&n(3,l=u.$$scope)},o.$$.update=()=>{o.$$.dirty&4&&n(0,a=t.url.pathname),o.$$.dirty&1&&x(),o.$$.dirty&2&&g(s)},[a,s,t,l,e]}class se extends k{constructor(r){super(),S(this,r,ee,Z,h,{})}}export{se as component,le as universal};
