import{s as O,n as J}from"./scheduler.604080fe.js";import{S as V,i as U,g as T,s as C,h as p,j as M,z as B,c as E,f as k,k as v,a as D,y as f,e as R,B as G,m as L,n as H,o as A}from"./index.c873dd19.js";import{e as w}from"./Footer.74404c92.js";function P(h,e,l){const t=h.slice();return t[5]=e[l],t[7]=l,t}function j(h,e,l){const t=h.slice();return t[2]=e[l],t}function W(h,e,l){const t=h.slice();return t[2]=e[l],t}function z(h){let e,l=w(h[0].items),t=[];for(let i=0;i<l.length;i+=1)t[i]=N(P(h,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=R()},l(i){for(let a=0;a<t.length;a+=1)t[a].l(i);e=R()},m(i,a){for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(i,a);D(i,e,a)},p(i,a){if(a&1){l=w(i[0].items);let r;for(r=0;r<l.length;r+=1){const m=P(i,l,r);t[r]?t[r].p(m,a):(t[r]=N(m),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=l.length}},d(i){i&&k(e),G(t,i)}}}function Y(h){let e,l,t=h[0].items[0].title+"",i,a,r,m=h[0].items[0].description+"",g,_,b,d,u='<a target="_blank" rel="noopener noreferrer" href="./books" class="svelte-1o86jmc">Full Reading List Here</a>',y=w(h[0].items[0].books),n=[];for(let o=0;o<y.length;o+=1)n[o]=I(W(h,y,o));return{c(){e=T("div"),l=T("h3"),i=L(t),a=C(),r=T("h4"),g=L(m),_=C();for(let o=0;o<n.length;o+=1)n[o].c();b=C(),d=T("div"),d.innerHTML=u,this.h()},l(o){e=p(o,"DIV",{class:!0,id:!0});var s=M(e);l=p(s,"H3",{class:!0});var c=M(l);i=H(c,t),c.forEach(k),a=E(s),r=p(s,"H4",{class:!0});var S=M(r);g=H(S,m),S.forEach(k),_=E(s);for(let F=0;F<n.length;F+=1)n[F].l(s);b=E(s),d=p(s,"DIV",{class:!0,"data-svelte-h":!0}),B(d)!=="svelte-1s4bbf8"&&(d.innerHTML=u),s.forEach(k),this.h()},h(){v(l,"class","book-item-title svelte-1o86jmc"),v(r,"class","book-item-description svelte-1o86jmc"),v(d,"class","full-list svelte-1o86jmc"),v(e,"class","book-item-container svelte-1o86jmc"),v(e,"id","even")},m(o,s){D(o,e,s),f(e,l),f(l,i),f(e,a),f(e,r),f(r,g),f(e,_);for(let c=0;c<n.length;c+=1)n[c]&&n[c].m(e,null);f(e,b),f(e,d)},p(o,s){if(s&1&&t!==(t=o[0].items[0].title+"")&&A(i,t),s&1&&m!==(m=o[0].items[0].description+"")&&A(g,m),s&1){y=w(o[0].items[0].books);let c;for(c=0;c<y.length;c+=1){const S=W(o,y,c);n[c]?n[c].p(S,s):(n[c]=I(S),n[c].c(),n[c].m(e,b))}for(;c<n.length;c+=1)n[c].d(1);n.length=y.length}},d(o){o&&k(e),G(n,o)}}}function K(h){let e,l=h[2].title+"",t;return{c(){e=T("p"),t=L(l),this.h()},l(i){e=p(i,"P",{class:!0});var a=M(e);t=H(a,l),a.forEach(k),this.h()},h(){v(e,"class","book-item svelte-1o86jmc")},m(i,a){D(i,e,a),f(e,t)},p(i,a){a&1&&l!==(l=i[2].title+"")&&A(t,l)},d(i){i&&k(e)}}}function N(h){let e,l,t=h[5].title+"",i,a,r,m=h[5].description+"",g,_,b,d,u=w(h[5].books),y=[];for(let n=0;n<u.length;n+=1)y[n]=K(j(h,u,n));return{c(){e=T("div"),l=T("h3"),i=L(t),a=C(),r=T("h4"),g=L(m),_=C();for(let n=0;n<y.length;n+=1)y[n].c();b=C(),this.h()},l(n){e=p(n,"DIV",{class:!0,id:!0});var o=M(e);l=p(o,"H3",{class:!0});var s=M(l);i=H(s,t),s.forEach(k),a=E(o),r=p(o,"H4",{class:!0});var c=M(r);g=H(c,m),c.forEach(k),_=E(o);for(let S=0;S<y.length;S+=1)y[S].l(o);b=E(o),o.forEach(k),this.h()},h(){v(l,"class","book-item-title svelte-1o86jmc"),v(r,"class","book-item-description svelte-1o86jmc"),v(e,"class","book-item-container svelte-1o86jmc"),v(e,"id",d=h[0].items.length-1>h[7]?h[7]%2==0?"even":"odd":h[7]%2==0?"even-end":"odd-end")},m(n,o){D(n,e,o),f(e,l),f(l,i),f(e,a),f(e,r),f(r,g),f(e,_);for(let s=0;s<y.length;s+=1)y[s]&&y[s].m(e,null);f(e,b)},p(n,o){if(o&1&&t!==(t=n[5].title+"")&&A(i,t),o&1&&m!==(m=n[5].description+"")&&A(g,m),o&1){u=w(n[5].books);let s;for(s=0;s<u.length;s+=1){const c=j(n,u,s);y[s]?y[s].p(c,o):(y[s]=K(c),y[s].c(),y[s].m(e,b))}for(;s<y.length;s+=1)y[s].d(1);y.length=u.length}o&1&&d!==(d=n[0].items.length-1>n[7]?n[7]%2==0?"even":"odd":n[7]%2==0?"even-end":"odd-end")&&v(e,"id",d)},d(n){n&&k(e),G(y,n)}}}function I(h){let e,l=h[2].title+"",t;return{c(){e=T("p"),t=L(l),this.h()},l(i){e=p(i,"P",{class:!0});var a=M(e);t=H(a,l),a.forEach(k),this.h()},h(){v(e,"class","book-item svelte-1o86jmc")},m(i,a){D(i,e,a),f(e,t)},p(i,a){a&1&&l!==(l=i[2].title+"")&&A(t,l)},d(i){i&&k(e)}}}function q(h){let e,l,t="Books!",i,a,r='<img class="book-image svelte-1o86jmc" src="./images/Books/reading.jpg" alt="book, while reading"/>',m;function g(d,u){return d[1]?Y:z}let _=g(h),b=_(h);return{c(){e=T("section"),l=T("h2"),l.textContent=t,i=C(),a=T("div"),a.innerHTML=r,m=C(),b.c(),this.h()},l(d){e=p(d,"SECTION",{class:!0});var u=M(e);l=p(u,"H2",{class:!0,"data-svelte-h":!0}),B(l)!=="svelte-e8gvkg"&&(l.textContent=t),i=E(u),a=p(u,"DIV",{class:!0,"data-svelte-h":!0}),B(a)!=="svelte-8kyg08"&&(a.innerHTML=r),m=E(u),b.l(u),u.forEach(k),this.h()},h(){v(l,"class","section-title"),v(a,"class","book-image-container svelte-1o86jmc"),v(e,"class","Books svelte-1o86jmc")},m(d,u){D(d,e,u),f(e,l),f(e,i),f(e,a),f(e,m),b.m(e,null)},p(d,[u]){_===(_=g(d))&&b?b.p(d,u):(b.d(1),b=_(d),b&&(b.c(),b.m(e,null)))},i:J,o:J,d(d){d&&k(e),b.d()}}}function Z(h,e,l){let{data:t}=e,{shorten:i=!1}=e;return h.$$set=a=>{"data"in a&&l(0,t=a.data),"shorten"in a&&l(1,i=a.shorten)},[t,i]}class ee extends V{constructor(e){super(),U(this,e,Z,q,O,{data:0,shorten:1})}}const Q=[{title:"Currently Reading",description:"I have the bad habit of reading too many things at once. Here's what I'm currently reading",books:[{title:"The Myth of Sisyphus by Albert Camus"},{title:"Big Data and Social Science by Ian Foster, Rayid Ghani, Ron S. Jarmin, Frauke Kreuter, and Julia Lane"},{title:"Mobility by Lydia Kiesling"},{title:"The Politics Presidents Make by Stephen Skowronek"},{title:"The Age of Surveilance Capitalism by Soshana Zuboff"},{title:"Justice by Means of Democracy"}]},{title:"2023",description:"",books:[{title:"The Traitor Prince by C. J. Redwine"},{title:"Conversations on Writing by Ursula K. Le Guin"},{title:"True and Only Heaven by Christopher Lasch"},{title:"End of History and the Last Man by Francis Fukuyama"},{title:"Doors of Eden by Adrian Tchaikovsky"},{title:"Democracy matters by Cornell West"},{title:"The Realigners by Timothy Shenk"},{title:"The Bitter End by Chris Tausanovitch, John M. Sides, and Lynn Vavreck"},{title:"Children of Memory by Adrian Tchaikovsky"},{title:"The Shock Doctrine by Naomi Klein"},{title:"The Metaphysical Club by Louis Menand"},{title:"The Lathe of Heaven by Ursula K. Le Guin"},{title:"The Cage of Souls by Adrian Tchaikovsky"},{title:"Babel by R. F. Kuang"},{title:"Slouching Towards Utopia by J. Bradford DeLong"},{title:"Normal People by Sally Rooney"},{title:"Confessions of a Conservative by Garry Wills"},{title:"The Coddling of the American Mind by Greg Lukianoff and Jonathan Haidt"},{title:"There is Nothing For You Here by Fiona Hill"},{title:"Building a Second Brain by Tiago Forte"},{title:"Interactive Data Visualization for the Web by Scott Murphy"},{title:"God Human Animal Machine by Meghan O'Gieblyn"},{title:"Identity: the Demand for Dignity and the Politics of Resentment by Francis Fukuyama"},{title:"City of Last Chances by Adrian Tchaikovsky"},{title:"Man's Search for Meaning by Victor Frankel"},{title:"Psychoanalysis: the Impossible Profession by Janet Malcolm"},{title:"The Price of Peace: Money, Democracy, and the Life of John Maynard Keynes"}]},{title:"2022",description:"",books:[{title:"Children of ruin by Adrian Tchaikovsky"},{title:"Atomic Habits by James Clear"},{title:"A Little Life Hanya Yanagihara"},{title:"Banality of Evil by Hannah Arendt"},{title:"I, Robot by Isaac Asimov"},{title:"The left hand of Darkness by Ursula K. Le Guin"},{title:"The Extended Mind by Annie Murphy Paul"},{title:"Stolen Focus by Johann Hari"},{title:"Why we're polarized by Ezra Klein"},{title:"Gallant by V. E. Schuab"},{title:"Amusing Ourselves to Death by Neil Postman"},{title:"Brave New World Aldous Huxley "},{title:"The Anthropocene Reviewed by John Green"},{title:"Shards of Earth by Adrian Tchaikovsky"},{title:"A Wizard of Earth Sea by Ursula K. Le Guin"},{title:"Weapons of Math Destruction Cathy O'Neil"},{title:"Lost connections by Johann Hari"},{title:"Automation and the Future of Work by Aaron Benanav"},{title:"The Tombs of Atuan by Ursula K. Le Guin"},{title:"Eyes of the Void by Adrian Tchaikovsky"},{title:"The Furthest Shore by Ursula K. Le Guin"},{title:"The Shallows by Nicholas Carr"},{title:"Bewilderment by Richard Powers"},{title:"The Golem and the Jinni by Helene Wecker"},{title:"Twilight of Democracy by Anne Applebaum"},{title:"The Hidden Palace by Helene Wecker"},{title:"The Right: the 100-year war for American Conservatism by Mathew Contenetti"},{title:"A Darker Shade of Magic by V. E. Schuab"},{title:"A Gathering of Shadows by V. E. Schuab"},{title:"Liberalism and its discontents by Francis Fukuyama"},{title:"Politics is for power by Eitan Hirsh"},{title:"A Conjuring of Light by V. E. Schuab"},{title:"Sea of Tranquility by Emily St. John Mandel "},{title:"First, You Write a Sentence"},{title:"The Righteous Mind by Jonathan Haidt"},{title:"Elite Capture by Olúfẹ́mi O. Táíwò"},{title:"Talking to Strangers by Malcolm Gladwell"},{title:"Station Eleven by Emily St. John Mandel "},{title:"The Night Circus by Erin Morgenstern "},{title:"The Soul of an Octopus by Sy Montgomery"},{title:"The Elder Race by Adrian Tchaikovsky"},{title:"The Midnight Library by Matt Haig"},{title:"The Book of Form and Emptiness by Ruth Ozeki"},{title:"How to write a Lot by Paul J. Silvia "},{title:"The Book of Night by Holly Black"},{title:"The Ministry for the Future by Kim Stanley Robinson"},{title:"Deep work by Cal Newport "},{title:"Axiom's end by Lindsay Ellis"},{title:"The Truth of the Divine by Lindsay Ellis"},{title:"The Rise and Fall of the Neoliberal Order Gary Gerstle"},{title:"Why liberalism Failed by Patrick Deneen"},{title:"Liberalism and it's discontents by Francis Fukuyama (again)"},{title:"The Dawn of Everything by David Graeber and David Wengrow"},{title:"Plain Style by Christopher Lasch"},{title:"Looking for Alaska by John Green"},{title:"Dune Messiah by Frank Herbert"},{title:"Children of Dune by Frank Herbert"},{title:"The Common Good by Robert Reich"},{title:"Tomorrow and Tomorrow and Tomorrow by Gabrielle Zevin"},{title:"Lincoln in the Bardo by George Saunders"},{title:"The City We Became by N. K. Jemisin"},{title:"Ordinary Monsters by J. M. Miro"},{title:"The Journalist and the Murderer by Janet Malcolm"},{title:"On Tyranny by Timothy Snyder"},{title:"Exhalation by Ted Chiang"}]}],te={items:Q};export{ee as B,te as a};
