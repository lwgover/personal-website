import{r as W,w as E}from"./index.c88b4611.js";var g=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $="Expected a function",S=0/0,F="[object Symbol]",N=/^\s+|\s+$/g,A=/^[-+]0x[0-9a-f]+$/i,B=/^0b[01]+$/i,P=/^0o[0-7]+$/i,R=parseInt,D=typeof g=="object"&&g&&g.Object===Object&&g,G=typeof self=="object"&&self&&self.Object===Object&&self,H=D||G||Function("return this")(),U=Object.prototype,X=U.toString,q=Math.max,z=Math.min,T=function(){return H.Date.now()};function J(e,t,i){var a,c,b,s,r,f,u=0,v=!1,d=!1,y=!0;if(typeof e!="function")throw new TypeError($);t=x(t)||0,h(i)&&(v=!!i.leading,d="maxWait"in i,b=d?q(x(i.maxWait)||0,t):b,y="trailing"in i?!!i.trailing:y);function p(n){var o=a,l=c;return a=c=void 0,u=n,s=e.apply(l,o),s}function k(n){return u=n,r=setTimeout(m,t),v?p(n):s}function C(n){var o=n-f,l=n-u,w=t-o;return d?z(w,b-l):w}function O(n){var o=n-f,l=n-u;return f===void 0||o>=t||o<0||d&&l>=b}function m(){var n=T();if(O(n))return I(n);r=setTimeout(m,C(n))}function I(n){return r=void 0,y&&a?p(n):(a=c=void 0,s)}function L(){r!==void 0&&clearTimeout(r),u=0,a=f=c=r=void 0}function M(){return r===void 0?s:I(T())}function j(){var n=T(),o=O(n);if(a=arguments,c=this,f=n,o){if(r===void 0)return k(f);if(d)return r=setTimeout(m,t),p(f)}return r===void 0&&(r=setTimeout(m,t)),s}return j.cancel=L,j.flush=M,j}function h(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function K(e){return!!e&&typeof e=="object"}function Q(e){return typeof e=="symbol"||K(e)&&X.call(e)==F}function x(e){if(typeof e=="number")return e;if(Q(e))return S;if(h(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=h(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(N,"");var i=B.test(e);return i||P.test(e)?R(e.slice(2),i?2:8):A.test(e)?S:+e}var V=J;const Z=_(V);W(900);const ee=E(0),ne=E(0);export{ee as a,g as c,Z as d,ne as w};
