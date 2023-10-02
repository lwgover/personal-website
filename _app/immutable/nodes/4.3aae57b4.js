import{s as q,n as T,h as R,r as W}from"../chunks/scheduler.ff881941.js";import{S as j,i as P,g as h,h as b,j as L,f as d,k as _,a as v,y as g,p as J,t as E,b as U,d as I,s as x,z as $,c as y,x as N,l as Y,r as A,u as V,v as D,w as M,m as F,n as G,o as X}from"../chunks/index.620f90ac.js";import{S as K}from"../chunks/Footer.svelte_svelte_type_style_lang.0e79c4be.js";import{B as Q}from"../chunks/back.56b8e34c.js";import{V as Z}from"../chunks/view_recommendations.fb4dbbed.js";function ee(p){let l,a="Recommend me a Book!",n,t,c,r=`Book Title
					<input class="text-input svelte-kg8mmx" type="text" id="bookname" placeholder="Title"/>`,s,i,e=`Book Author
					<input class="text-input svelte-kg8mmx" type="text" id="author" placeholder="Author"/>`,m,f,w=`Your Name (Optional)
					<input class="text-input svelte-kg8mmx" type="text" id="recommender-name" placeholder="Your Name"/>`,o,u,S=`Description
					<textarea class="text-input description svelte-kg8mmx" id="description" placeholder="What makes it so good?"></textarea>`,O,B,z,H;return{c(){l=h("div"),l.textContent=a,n=x(),t=h("form"),c=h("label"),c.innerHTML=r,s=x(),i=h("label"),i.innerHTML=e,m=x(),f=h("label"),f.innerHTML=w,o=x(),u=h("label"),u.innerHTML=S,O=x(),B=h("input"),this.h()},l(C){l=b(C,"DIV",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-flthtl"&&(l.textContent=a),n=y(C),t=b(C,"FORM",{});var k=L(t);c=b(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(c)!=="svelte-1s9qhqg"&&(c.innerHTML=r),s=y(k),i=b(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(i)!=="svelte-gy4mo1"&&(i.innerHTML=e),m=y(k),f=b(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(f)!=="svelte-15jimbz"&&(f.innerHTML=w),o=y(k),u=b(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(u)!=="svelte-a4r0w"&&(u.innerHTML=S),O=y(k),B=b(k,"INPUT",{class:!0,type:!0}),k.forEach(d),this.h()},h(){_(l,"class","recommendations-title svelte-kg8mmx"),_(c,"class","text-input-container svelte-kg8mmx"),_(i,"class","text-input-container svelte-kg8mmx"),_(f,"class","text-input-container svelte-kg8mmx"),_(u,"class","text-input-container svelte-kg8mmx"),_(B,"class","submit-button svelte-kg8mmx"),_(B,"type","submit"),B.value="Submit →"},m(C,k){v(C,l,k),v(C,n,k),v(C,t,k),g(t,c),g(t,s),g(t,i),g(t,m),g(t,f),g(t,o),g(t,u),g(t,O),g(t,B),z||(H=N(B,"click",p[4]),z=!0)},p:T,i:T,o:T,d(C){C&&(d(l),d(n),d(t)),z=!1,H()}}}function te(p){let l,a,n="Recommend me a Book!",t,c,r,s,i,e;const m=[ne,se,le],f=[];function w(o,u){return u&2&&(c=null),u&2&&(r=null),c==null&&(c=o[1].status.localeCompare("waiting")==0),c?0:(r==null&&(r=o[1].status.localeCompare("succeeded")==0),r?1:2)}return s=w(p,-1),i=f[s]=m[s](p),{c(){l=h("div"),a=h("div"),a.textContent=n,t=x(),i.c(),this.h()},l(o){l=b(o,"DIV",{class:!0});var u=L(l);a=b(u,"DIV",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-flthtl"&&(a.textContent=n),t=y(u),i.l(u),u.forEach(d),this.h()},h(){_(a,"class","recommendations-title svelte-kg8mmx"),_(l,"class","submission-container")},m(o,u){v(o,l,u),g(l,a),g(l,t),f[s].m(l,null),e=!0},p(o,u){let S=s;s=w(o,u),s===S?f[s].p(o,u):(J(),E(f[S],1,1,()=>{f[S]=null}),U(),i=f[s],i?i.p(o,u):(i=f[s]=m[s](o),i.c()),I(i,1),i.m(l,null))},i(o){e||(I(i),e=!0)},o(o){E(i),e=!1},d(o){o&&d(l),f[s].d()}}}function le(p){let l,a,n,t="Unfortunately, the submission failed.",c,r,s,i;return{c(){l=h("div"),a=x(),n=h("div"),n.textContent=t,c=x(),r=h("input"),this.h()},l(e){l=b(e,"DIV",{style:!0}),L(l).forEach(d),a=y(e),n=b(e,"DIV",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-obczcz"&&(n.textContent=t),c=y(e),r=b(e,"INPUT",{class:!0,type:!0}),this.h()},h(){Y(l,"margin-top","30%"),_(n,"class","submission-mid-title svelte-kg8mmx"),_(r,"class","submit-button svelte-kg8mmx"),_(r,"type","submit"),r.value="Try Again?"},m(e,m){v(e,l,m),v(e,a,m),v(e,n,m),v(e,c,m),v(e,r,m),s||(i=N(r,"click",p[3]),s=!0)},p:T,i:T,o:T,d(e){e&&(d(l),d(a),d(n),d(c),d(r)),s=!1,i()}}}function se(p){let l,a="Thanks for your recommendation!",n,t,c="Check out some of the other reviews below",r,s,i;return s=new Z({}),{c(){l=h("div"),l.textContent=a,n=x(),t=h("div"),t.textContent=c,r=x(),A(s.$$.fragment),this.h()},l(e){l=b(e,"DIV",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-8eni0q"&&(l.textContent=a),n=y(e),t=b(e,"DIV",{class:!0,"data-svelte-h":!0}),$(t)!=="svelte-zqq6ue"&&(t.textContent=c),r=y(e),V(s.$$.fragment,e),this.h()},h(){_(l,"class","submission-mid-title svelte-kg8mmx"),_(t,"class","submission-subtitle svelte-kg8mmx")},m(e,m){v(e,l,m),v(e,n,m),v(e,t,m),v(e,r,m),D(s,e,m),i=!0},p:T,i(e){i||(I(s.$$.fragment,e),i=!0)},o(e){E(s.$$.fragment,e),i=!1},d(e){e&&(d(l),d(n),d(t),d(r)),M(s,e)}}}function ne(p){let l,a=JSON.stringify(p[1].message).slice(1,-1)+"",n,t,c;return{c(){l=h("div"),n=F(a),t=x(),c=h("div"),this.h()},l(r){l=b(r,"DIV",{class:!0});var s=L(l);n=G(s,a),s.forEach(d),t=y(r),c=b(r,"DIV",{class:!0}),L(c).forEach(d),this.h()},h(){_(l,"class","submission-subtitle svelte-kg8mmx"),_(c,"class","lds-dual-ring svelte-kg8mmx")},m(r,s){v(r,l,s),g(l,n),v(r,t,s),v(r,c,s)},p(r,s){s&2&&a!==(a=JSON.stringify(r[1].message).slice(1,-1)+"")&&X(n,a)},i:T,o:T,d(r){r&&(d(l),d(t),d(c))}}}function oe(p){let l,a,n,t,c;const r=[te,ee],s=[];function i(e,m){return e[0]?0:1}return n=i(p),t=s[n]=r[n](p),{c(){l=h("section"),a=h("div"),t.c(),this.h()},l(e){l=b(e,"SECTION",{class:!0});var m=L(l);a=b(m,"DIV",{class:!0});var f=L(a);t.l(f),f.forEach(d),m.forEach(d),this.h()},h(){_(a,"class","book-recommendation-container svelte-kg8mmx"),_(l,"class","book-recommendations")},m(e,m){v(e,l,m),g(l,a),s[n].m(a,null),c=!0},p(e,[m]){let f=n;n=i(e),n===f?s[n].p(e,m):(J(),E(s[f],1,1,()=>{s[f]=null}),U(),t=s[n],t?t.p(e,m):(t=s[n]=r[n](e),t.c()),I(t,1),t.m(a,null))},i(e){c||(I(t),c=!0)},o(e){E(t),c=!1},d(e){e&&d(l),s[n].d()}}}function ie(p,l,a){var n=!1,t={status:"waiting",message:"Submitting ..."};function c(){var i=document.getElementById("bookname"),e=document.getElementById("author"),m=document.getElementById("recommender-name"),f=document.getElementById("description").value;if(i.value===""?(i.parentElement.style.color="red",i.style.borderColor="red"):(i.parentElement.style.color="#555",i.style.borderColor="#777"),e.value===""?(e.parentElement.style.color="red",e.style.borderColor="red"):(e.parentElement.style.color="#555",e.style.borderColor="#777"),i.value!==""&&e.value!==""){const w={book_name:i.value,author:author.value,recommender_name:m.value,recommendation:f};a(0,n=!0),console.log(JSON.stringify(w)),fetch("https://shhboimzz4.execute-api.us-east-1.amazonaws.com/BookAPI",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(w)}).then(o=>o.json()).then(o=>{console.log("Success",o),a(0,n=!0),a(1,t=o)})}}return[n,t,c,function(){a(0,n=!1),a(1,t={status:"waiting",message:"Submitting ..."})},()=>c()]}class re extends j{constructor(l){super(),P(this,l,ie,oe,q,{})}}function ae(p){let l=!1,a=()=>{l=!1},n,t,c,r,s,i,e,m,f,w;return R(p[3]),R(p[4]),t=new K({props:{title:"Recommend Me a Book! | Lucas Gover",description:"Recommend Lucas a book!",keywords:"books, recommend, recommendations, currently reading, read, student, computer science, political theory, political science, science fiction"}}),r=new Q({}),e=new re({}),{c(){A(t.$$.fragment),c=x(),A(r.$$.fragment),s=x(),i=h("main"),A(e.$$.fragment),this.h()},l(o){V(t.$$.fragment,o),c=y(o),V(r.$$.fragment,o),s=y(o),i=b(o,"MAIN",{id:!0,class:!0});var u=L(i);V(e.$$.fragment,u),u.forEach(d),this.h()},h(){_(i,"id","home"),_(i,"class","svelte-1cj40qv")},m(o,u){D(t,o,u),v(o,c,u),D(r,o,u),v(o,s,u),v(o,i,u),D(e,i,null),m=!0,f||(w=[N(window,"resize",p[3]),N(window,"scroll",()=>{l=!0,clearTimeout(n),n=setTimeout(a,100),p[4]()})],f=!0)},p(o,[u]){u&4&&!l&&(l=!0,clearTimeout(n),scrollTo(window.pageXOffset,o[2]),n=setTimeout(a,100))},i(o){m||(I(t.$$.fragment,o),I(r.$$.fragment,o),I(e.$$.fragment,o),m=!0)},o(o){E(t.$$.fragment,o),E(r.$$.fragment,o),E(e.$$.fragment,o),m=!1},d(o){o&&(d(c),d(s),d(i)),M(t,o),M(r,o),M(e),f=!1,W(w)}}}function ce(p,l,a){let n,t,c=0;function r(){a(0,n=window.innerWidth),a(1,t=window.innerHeight)}function s(){a(2,c=window.pageYOffset)}return p.$$.update=()=>{p.$$.dirty&1},[n,t,c,r,s]}class _e extends j{constructor(l){super(),P(this,l,ce,ae,q,{})}}export{_e as component};
