import{s as U,n as T,h as J,r as X}from"../chunks/scheduler.ff881941.js";import{S as W,i as Y,g as v,h as b,j as L,f,k as h,a as _,y as x,p as F,t as E,b as G,d as I,s as y,z as $,c as g,l as V,x as O,r as D,u as H,v as M,w as N,m as K,n as Q,o as Z}from"../chunks/index.620f90ac.js";import{S as ee}from"../chunks/Footer.svelte_svelte_type_style_lang.0e79c4be.js";import{B as te}from"../chunks/back.56b8e34c.js";import{V as le}from"../chunks/view_recommendations.c666a352.js";function se(p){let l,a="Recommend me a Book!",n,s,c="Unfortunately, I had to take down the backend database for this, so currently it's not functional. If you want to recommend me a book, email me!",i,t,r,e=`Book Title
					<input class="text-input svelte-1rcb9e2" type="text" id="bookname" placeholder="Title"/>`,u,d,C=`Book Author
					<input class="text-input svelte-1rcb9e2" type="text" id="author" placeholder="Author"/>`,o,m,A=`Your Name (Optional)
					<input class="text-input svelte-1rcb9e2" type="text" id="recommender-name" placeholder="Your Name"/>`,z,B,j=`Description
					<textarea class="text-input description svelte-1rcb9e2" id="description" placeholder="What makes it so good?"></textarea>`,R,S,q,P;return{c(){l=v("div"),l.textContent=a,n=y(),s=v("h4"),s.textContent=c,i=y(),t=v("form"),r=v("label"),r.innerHTML=e,u=y(),d=v("label"),d.innerHTML=C,o=y(),m=v("label"),m.innerHTML=A,z=y(),B=v("label"),B.innerHTML=j,R=y(),S=v("input"),this.h()},l(w){l=b(w,"DIV",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-flthtl"&&(l.textContent=a),n=g(w),s=b(w,"H4",{style:!0,"data-svelte-h":!0}),$(s)!=="svelte-1c25y5w"&&(s.textContent=c),i=g(w),t=b(w,"FORM",{});var k=L(t);r=b(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(r)!=="svelte-1s9qhqg"&&(r.innerHTML=e),u=g(k),d=b(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(d)!=="svelte-gy4mo1"&&(d.innerHTML=C),o=g(k),m=b(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(m)!=="svelte-15jimbz"&&(m.innerHTML=A),z=g(k),B=b(k,"LABEL",{class:!0,"data-svelte-h":!0}),$(B)!=="svelte-a4r0w"&&(B.innerHTML=j),R=g(k),S=b(k,"INPUT",{class:!0,type:!0}),k.forEach(f),this.h()},h(){h(l,"class","recommendations-title svelte-1rcb9e2"),V(s,"text-align","center"),V(s,"font-family","lato"),V(s,"color","white"),V(s,"background-color","red"),h(r,"class","text-input-container svelte-1rcb9e2"),h(d,"class","text-input-container svelte-1rcb9e2"),h(m,"class","text-input-container svelte-1rcb9e2"),h(B,"class","text-input-container svelte-1rcb9e2"),h(S,"class","submit-button svelte-1rcb9e2"),h(S,"type","submit"),S.value="Submit →"},m(w,k){_(w,l,k),_(w,n,k),_(w,s,k),_(w,i,k),_(w,t,k),x(t,r),x(t,u),x(t,d),x(t,o),x(t,m),x(t,z),x(t,B),x(t,R),x(t,S),q||(P=O(S,"click",p[4]),q=!0)},p:T,i:T,o:T,d(w){w&&(f(l),f(n),f(s),f(i),f(t)),q=!1,P()}}}function ne(p){let l,a,n="Recommend me a Book!",s,c,i,t,r,e;const u=[re,ie,oe],d=[];function C(o,m){return m&2&&(c=null),m&2&&(i=null),c==null&&(c=o[1].status.localeCompare("waiting")==0),c?0:(i==null&&(i=o[1].status.localeCompare("succeeded")==0),i?1:2)}return t=C(p,-1),r=d[t]=u[t](p),{c(){l=v("div"),a=v("div"),a.textContent=n,s=y(),r.c(),this.h()},l(o){l=b(o,"DIV",{class:!0});var m=L(l);a=b(m,"DIV",{class:!0,"data-svelte-h":!0}),$(a)!=="svelte-flthtl"&&(a.textContent=n),s=g(m),r.l(m),m.forEach(f),this.h()},h(){h(a,"class","recommendations-title svelte-1rcb9e2"),h(l,"class","submission-container")},m(o,m){_(o,l,m),x(l,a),x(l,s),d[t].m(l,null),e=!0},p(o,m){let A=t;t=C(o,m),t===A?d[t].p(o,m):(F(),E(d[A],1,1,()=>{d[A]=null}),G(),r=d[t],r?r.p(o,m):(r=d[t]=u[t](o),r.c()),I(r,1),r.m(l,null))},i(o){e||(I(r),e=!0)},o(o){E(r),e=!1},d(o){o&&f(l),d[t].d()}}}function oe(p){let l,a,n,s="Unfortunately, the submission failed.",c,i,t,r;return{c(){l=v("div"),a=y(),n=v("div"),n.textContent=s,c=y(),i=v("input"),this.h()},l(e){l=b(e,"DIV",{style:!0}),L(l).forEach(f),a=g(e),n=b(e,"DIV",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-obczcz"&&(n.textContent=s),c=g(e),i=b(e,"INPUT",{class:!0,type:!0}),this.h()},h(){V(l,"margin-top","30%"),h(n,"class","submission-mid-title svelte-1rcb9e2"),h(i,"class","submit-button svelte-1rcb9e2"),h(i,"type","submit"),i.value="Try Again?"},m(e,u){_(e,l,u),_(e,a,u),_(e,n,u),_(e,c,u),_(e,i,u),t||(r=O(i,"click",p[3]),t=!0)},p:T,i:T,o:T,d(e){e&&(f(l),f(a),f(n),f(c),f(i)),t=!1,r()}}}function ie(p){let l,a="Thanks for your recommendation!",n,s,c="Check out some of the other reviews below",i,t,r;return t=new le({}),{c(){l=v("div"),l.textContent=a,n=y(),s=v("div"),s.textContent=c,i=y(),D(t.$$.fragment),this.h()},l(e){l=b(e,"DIV",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-8eni0q"&&(l.textContent=a),n=g(e),s=b(e,"DIV",{class:!0,"data-svelte-h":!0}),$(s)!=="svelte-zqq6ue"&&(s.textContent=c),i=g(e),H(t.$$.fragment,e),this.h()},h(){h(l,"class","submission-mid-title svelte-1rcb9e2"),h(s,"class","submission-subtitle svelte-1rcb9e2")},m(e,u){_(e,l,u),_(e,n,u),_(e,s,u),_(e,i,u),M(t,e,u),r=!0},p:T,i(e){r||(I(t.$$.fragment,e),r=!0)},o(e){E(t.$$.fragment,e),r=!1},d(e){e&&(f(l),f(n),f(s),f(i)),N(t,e)}}}function re(p){let l,a=JSON.stringify(p[1].message).slice(1,-1)+"",n,s,c;return{c(){l=v("div"),n=K(a),s=y(),c=v("div"),this.h()},l(i){l=b(i,"DIV",{class:!0});var t=L(l);n=Q(t,a),t.forEach(f),s=g(i),c=b(i,"DIV",{class:!0}),L(c).forEach(f),this.h()},h(){h(l,"class","submission-subtitle svelte-1rcb9e2"),h(c,"class","lds-dual-ring svelte-1rcb9e2")},m(i,t){_(i,l,t),x(l,n),_(i,s,t),_(i,c,t)},p(i,t){t&2&&a!==(a=JSON.stringify(i[1].message).slice(1,-1)+"")&&Z(n,a)},i:T,o:T,d(i){i&&(f(l),f(s),f(c))}}}function ae(p){let l,a,n,s,c;const i=[ne,se],t=[];function r(e,u){return e[0]?0:1}return n=r(p),s=t[n]=i[n](p),{c(){l=v("section"),a=v("div"),s.c(),this.h()},l(e){l=b(e,"SECTION",{class:!0});var u=L(l);a=b(u,"DIV",{class:!0});var d=L(a);s.l(d),d.forEach(f),u.forEach(f),this.h()},h(){h(a,"class","book-recommendation-container svelte-1rcb9e2"),h(l,"class","book-recommendations")},m(e,u){_(e,l,u),x(l,a),t[n].m(a,null),c=!0},p(e,[u]){let d=n;n=r(e),n===d?t[n].p(e,u):(F(),E(t[d],1,1,()=>{t[d]=null}),G(),s=t[n],s?s.p(e,u):(s=t[n]=i[n](e),s.c()),I(s,1),s.m(a,null))},i(e){c||(I(s),c=!0)},o(e){E(s),c=!1},d(e){e&&f(l),t[n].d()}}}function ce(p,l,a){var n=!1,s={status:"waiting",message:"Submitting ..."};function c(){var r=document.getElementById("bookname"),e=document.getElementById("author"),u=document.getElementById("recommender-name"),d=document.getElementById("description").value;if(r.value===""?(r.parentElement.style.color="red",r.style.borderColor="red"):(r.parentElement.style.color="#555",r.style.borderColor="#777"),e.value===""?(e.parentElement.style.color="red",e.style.borderColor="red"):(e.parentElement.style.color="#555",e.style.borderColor="#777"),r.value!==""&&e.value!==""){const C={book_name:r.value,author:author.value,recommender_name:u.value,recommendation:d};a(0,n=!0),console.log(JSON.stringify(C)),fetch("https://shhboimzz4.execute-api.us-east-1.amazonaws.com/BookAPI",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(C)}).then(o=>o.json()).then(o=>{console.log("Success",o),a(0,n=!0),a(1,s=o)})}}return[n,s,c,function(){a(0,n=!1),a(1,s={status:"waiting",message:"Submitting ..."})},()=>c()]}class ue extends W{constructor(l){super(),Y(this,l,ce,ae,U,{})}}function me(p){let l=!1,a=()=>{l=!1},n,s,c,i,t,r,e,u,d,C;return J(p[3]),J(p[4]),s=new ee({props:{title:"Recommend Me a Book! | Lucas Gover",description:"Recommend Lucas a book!",keywords:"books, recommend, recommendations, currently reading, read, student, computer science, political theory, political science, science fiction"}}),i=new te({}),e=new ue({}),{c(){D(s.$$.fragment),c=y(),D(i.$$.fragment),t=y(),r=v("main"),D(e.$$.fragment),this.h()},l(o){H(s.$$.fragment,o),c=g(o),H(i.$$.fragment,o),t=g(o),r=b(o,"MAIN",{id:!0,class:!0});var m=L(r);H(e.$$.fragment,m),m.forEach(f),this.h()},h(){h(r,"id","home"),h(r,"class","svelte-1cj40qv")},m(o,m){M(s,o,m),_(o,c,m),M(i,o,m),_(o,t,m),_(o,r,m),M(e,r,null),u=!0,d||(C=[O(window,"resize",p[3]),O(window,"scroll",()=>{l=!0,clearTimeout(n),n=setTimeout(a,100),p[4]()})],d=!0)},p(o,[m]){m&4&&!l&&(l=!0,clearTimeout(n),scrollTo(window.pageXOffset,o[2]),n=setTimeout(a,100))},i(o){u||(I(s.$$.fragment,o),I(i.$$.fragment,o),I(e.$$.fragment,o),u=!0)},o(o){E(s.$$.fragment,o),E(i.$$.fragment,o),E(e.$$.fragment,o),u=!1},d(o){o&&(f(c),f(t),f(r)),N(s,o),N(i,o),N(e),d=!1,X(C)}}}function fe(p,l,a){let n,s,c=0;function i(){a(0,n=window.innerWidth),a(1,s=window.innerHeight)}function t(){a(2,c=window.pageYOffset)}return p.$$.update=()=>{p.$$.dirty&1},[n,s,c,i,t]}class he extends W{constructor(l){super(),Y(this,l,fe,me,U,{})}}export{he as component};
