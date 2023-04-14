(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function f(){}function ee(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function D(){return Object.create(null)}function B(t){t.forEach(J)}function Q(t){return typeof t=="function"}function v(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function O(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function te(t){return Object.keys(t).length===0}function U(t,e,n,s){if(t){const r=V(t,e,n,s);return t[0](r)}}function V(t,e,n,s){return t[1]&&s?ee(n.ctx.slice(),t[1](s(e))):n.ctx}function W(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],l=Math.max(e.dirty.length,r.length);for(let o=0;o<l;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function X(t,e,n,s,r,c){if(r){const l=V(e,n,s,c);t.p(l,r)}}function Y(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function q(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function S(){return M(" ")}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ne(t){return Array.from(t.childNodes)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let F;function L(t){F=t}const E=[],G=[];let N=[];const H=[],se=Promise.resolve();let T=!1;function ce(){T||(T=!0,se.then(Z))}function I(t){N.push(t)}const C=new Set;let k=0;function Z(){if(k!==0)return;const t=F;do{try{for(;k<E.length;){const e=E[k];k++,L(e),oe(e.$$)}}catch(e){throw E.length=0,k=0,e}for(L(null),E.length=0,k=0;G.length;)G.pop()();for(let e=0;e<N.length;e+=1){const n=N[e];C.has(n)||(C.add(n),n())}N.length=0}while(E.length);for(;H.length;)H.pop()();T=!1,C.clear(),L(t)}function oe(t){if(t.fragment!==null){t.update(),B(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}function le(t){const e=[],n=[];N.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),N=e}const P=new Set;let ie;function m(t,e){t&&t.i&&(P.delete(t),t.i(e))}function p(t,e,n,s){if(t&&t.o){if(P.has(t))return;P.add(t),ie.c.push(()=>{P.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function R(t){t&&t.c()}function h(t,e,n,s){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),s||I(()=>{const l=t.$$.on_mount.map(J).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...l):B(l),t.$$.on_mount=[]}),c.forEach(I)}function y(t,e){const n=t.$$;n.fragment!==null&&(le(n.after_update),B(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ae(t,e){t.$$.dirty[0]===-1&&(E.push(t),ce(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function w(t,e,n,s,r,c,l,o=[-1]){const u=F;L(t);const i=t.$$={fragment:null,ctx:[],props:c,update:f,not_equal:r,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:D(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};l&&l(i.root);let $=!1;if(i.ctx=n?n(t,e.props||{},(d,A,...K)=>{const z=K.length?K[0]:A;return i.ctx&&r(i.ctx[d],i.ctx[d]=z)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](z),$&&ae(t,d)),A}):[],i.update(),$=!0,B(i.before_update),i.fragment=s?s(i.ctx):!1,e.target){if(e.hydrate){const d=ne(e.target);i.fragment&&i.fragment.l(d),d.forEach(_)}else i.fragment&&i.fragment.c();e.intro&&m(t.$$.fragment),h(t,e.target,e.anchor,e.customElement),Z()}L(u)}class x{$destroy(){y(this,1),this.$destroy=f}$on(e,n){if(!Q(n))return f;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!te(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ue(t){let e,n;return{c(){e=b("img"),O(e.src,n=t[0])||a(e,"src",n),a(e,"alt",t[0]),a(e,"class","racer-background__image svelte-p9loud")},m(s,r){g(s,e,r)},p(s,[r]){r&1&&!O(e.src,n=s[0])&&a(e,"src",n),r&1&&a(e,"alt",s[0])},i:f,o:f,d(s){s&&_(e)}}}function fe(t,e,n){let{background:s}=e;return t.$$set=r=>{"background"in r&&n(0,s=r.background)},[s]}class de extends x{constructor(e){super(),w(this,e,fe,ue,v,{background:0})}}function _e(t){let e,n;return{c(){e=b("img"),a(e,"class","racer-image svelte-1gho74w"),O(e.src,n=t[0])||a(e,"src",n),a(e,"alt",t[0])},m(s,r){g(s,e,r)},p(s,[r]){r&1&&!O(e.src,n=s[0])&&a(e,"src",n),r&1&&a(e,"alt",s[0])},i:f,o:f,d(s){s&&_(e)}}}function me(t,e,n){let{image:s}=e;return t.$$set=r=>{"image"in r&&n(0,s=r.image)},[s]}class ge extends x{constructor(e){super(),w(this,e,me,_e,v,{image:0})}}function $e(t){let e,n;return{c(){e=b("img"),a(e,"class","team-logo svelte-p0w2"),O(e.src,n=t[0])||a(e,"src",n),a(e,"alt",t[0])},m(s,r){g(s,e,r)},p(s,[r]){r&1&&!O(e.src,n=s[0])&&a(e,"src",n),r&1&&a(e,"alt",s[0])},i:f,o:f,d(s){s&&_(e)}}}function pe(t,e,n){let{logo:s}=e;return t.$$set=r=>{"logo"in r&&n(0,s=r.logo)},[s]}class he extends x{constructor(e){super(),w(this,e,pe,$e,v,{logo:0})}}function ye(t){let e,n;return{c(){e=b("p"),n=M(t[0]),a(e,"class","racer-number svelte-1epc3sr")},m(s,r){g(s,e,r),q(e,n)},p(s,[r]){r&1&&re(n,s[0])},i:f,o:f,d(s){s&&_(e)}}}function be(t,e,n){let{number:s}=e;return t.$$set=r=>{"number"in r&&n(0,s=r.number)},[s]}class ve extends x{constructor(e){super(),w(this,e,be,ye,v,{number:0})}}function we(t){let e,n;const s=t[1].default,r=U(s,t,t[0],null);return{c(){e=b("section"),r&&r.c(),a(e,"class","racer-statistics svelte-alpskr")},m(c,l){g(c,e,l),r&&r.m(e,null),n=!0},p(c,[l]){r&&r.p&&(!n||l&1)&&X(r,s,c,c[0],n?W(s,c[0],l,null):Y(c[0]),null)},i(c){n||(m(r,c),n=!0)},o(c){p(r,c),n=!1},d(c){c&&_(e),r&&r.d(c)}}}function xe(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=c=>{"$$scope"in c&&n(0,r=c.$$scope)},[r,s]}class Re extends x{constructor(e){super(),w(this,e,xe,we,v,{})}}function ke(t){let e,n;const s=t[1].default,r=U(s,t,t[0],null);return{c(){e=b("section"),r&&r.c(),a(e,"class","race-aside svelte-1q1p795")},m(c,l){g(c,e,l),r&&r.m(e,null),n=!0},p(c,[l]){r&&r.p&&(!n||l&1)&&X(r,s,c,c[0],n?W(s,c[0],l,null):Y(c[0]),null)},i(c){n||(m(r,c),n=!0)},o(c){p(r,c),n=!1},d(c){c&&_(e),r&&r.d(c)}}}function Ee(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=c=>{"$$scope"in c&&n(0,r=c.$$scope)},[r,s]}class Ne extends x{constructor(e){super(),w(this,e,Ee,ke,v,{})}}const Oe="/formula-racers-info/assets/racer_image_alonso-ba1b8d84.png",Ae="/formula-racers-info/assets/alonso_background-6f30be6b.jpeg",Le="/formula-racers-info/assets/aston_martin_team_logo-c0325580.png";function je(t){let e,n,s,r,c,l;return e=new ve({props:{number:Se}}),s=new he({props:{logo:Le}}),c=new ge({props:{image:Oe}}),{c(){R(e.$$.fragment),n=S(),R(s.$$.fragment),r=S(),R(c.$$.fragment)},m(o,u){h(e,o,u),g(o,n,u),h(s,o,u),g(o,r,u),h(c,o,u),l=!0},p:f,i(o){l||(m(e.$$.fragment,o),m(s.$$.fragment,o),m(c.$$.fragment,o),l=!0)},o(o){p(e.$$.fragment,o),p(s.$$.fragment,o),p(c.$$.fragment,o),l=!1},d(o){y(e,o),o&&_(n),y(s,o),o&&_(r),y(c,o)}}}function qe(t){let e;return{c(){e=M("Статистика: 3235")},m(n,s){g(n,e,s)},d(n){n&&_(e)}}}function Pe(t){let e,n,s,r,c,l,o,u;return n=new de({props:{background:Ae}}),c=new Ne({props:{$$slots:{default:[je]},$$scope:{ctx:t}}}),o=new Re({props:{$$slots:{default:[qe]},$$scope:{ctx:t}}}),{c(){e=b("section"),R(n.$$.fragment),s=S(),r=b("section"),R(c.$$.fragment),l=S(),R(o.$$.fragment),a(r,"class","race-info race-background svelte-1qt2c1v"),a(e,"class","race-section svelte-1qt2c1v")},m(i,$){g(i,e,$),h(n,e,null),q(e,s),q(e,r),h(c,r,null),q(r,l),h(o,r,null),u=!0},p(i,[$]){const d={};$&1&&(d.$$scope={dirty:$,ctx:i}),c.$set(d);const A={};$&1&&(A.$$scope={dirty:$,ctx:i}),o.$set(A)},i(i){u||(m(n.$$.fragment,i),m(c.$$.fragment,i),m(o.$$.fragment,i),u=!0)},o(i){p(n.$$.fragment,i),p(c.$$.fragment,i),p(o.$$.fragment,i),u=!1},d(i){i&&_(e),y(n),y(c),y(o)}}}const Se=14;class Be extends x{constructor(e){super(),w(this,e,null,Pe,v,{})}}function Ce(t){let e,n;return e=new Be({}),{c(){R(e.$$.fragment)},m(s,r){h(e,s,r),n=!0},p:f,i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){p(e.$$.fragment,s),n=!1},d(s){y(e,s)}}}class Te extends x{constructor(e){super(),w(this,e,null,Ce,v,{})}}new Te({target:document.getElementById("app")});
