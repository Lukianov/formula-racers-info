(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function v(){}function F(e){return e()}function V(){return Object.create(null)}function A(e){e.forEach(F)}function H(e){return typeof e=="function"}function z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let L;function B(e,t){return L||(L=document.createElement("a")),L.href=t,e===L.href}function Y(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function D(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function O(){return C(" ")}function Z(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ee(e){return Array.from(e.childNodes)}function te(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let M;function w(e){M=e}const $=[],I=[];let y=[];const K=[],ne=Promise.resolve();let k=!1;function re(){k||(k=!0,ne.then(G))}function q(e){y.push(e)}const j=new Set;let g=0;function G(){if(g!==0)return;const e=M;do{try{for(;g<$.length;){const t=$[g];g++,w(t),oe(t.$$)}}catch(t){throw $.length=0,g=0,t}for(w(null),$.length=0,g=0;I.length;)I.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];j.has(n)||(j.add(n),n())}y.length=0}while($.length);for(;K.length;)K.pop()();k=!1,j.clear(),w(e)}function oe(e){if(e.fragment!==null){e.update(),A(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}function se(e){const t=[],n=[];y.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),y=t}const S=new Set;let ie;function J(e,t){e&&e.i&&(S.delete(e),e.i(t))}function ce(e,t,n,r){if(e&&e.o){if(S.has(e))return;S.add(e),ie.c.push(()=>{S.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function le(e){e&&e.c()}function Q(e,t,n,r){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),r||q(()=>{const c=e.$$.on_mount.map(F).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...c):A(c),e.$$.on_mount=[]}),s.forEach(q)}function R(e,t){const n=e.$$;n.fragment!==null&&(se(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(e,t){e.$$.dirty[0]===-1&&($.push(e),re(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(e,t,n,r,o,s,c,f=[-1]){const d=M;w(e);const i=e.$$={fragment:null,ctx:[],props:s,update:v,not_equal:o,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:V(),dirty:f,skip_bound:!1,root:t.target||d.$$.root};c&&c(i.root);let b=!1;if(i.ctx=n?n(e,t.props||{},(a,x,...m)=>{const p=m.length?m[0]:x;return i.ctx&&o(i.ctx[a],i.ctx[a]=p)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](p),b&&ue(e,a)),x}):[],i.update(),b=!0,A(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const a=ee(t.target);i.fragment&&i.fragment.l(a),a.forEach(P)}else i.fragment&&i.fragment.c();t.intro&&J(e.$$.fragment),Q(e,t.target,t.anchor,t.customElement),G()}w(d)}class W{$destroy(){R(this,1),this.$destroy=v}$on(t,n){if(!H(n))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Y(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const fe="/assets/svelte-a39f39b7.svg",ae="/vite.svg";function de(e){let t,n,r,o,s;return{c(){t=h("button"),n=C("count is "),r=C(e[0])},m(c,f){D(c,t,f),l(t,n),l(t,r),o||(s=Z(t,"click",e[1]),o=!0)},p(c,[f]){f&1&&te(r,c[0])},i:v,o:v,d(c){c&&P(t),o=!1,s()}}}function he(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class pe extends W{constructor(t){super(),U(this,t,he,de,z,{})}}function me(e){let t,n,r,o,s,c,f,d,i,b,a,x,m,p,T,N,E;return p=new pe({}),{c(){t=h("main"),n=h("div"),r=h("a"),o=h("img"),c=O(),f=h("a"),d=h("img"),b=O(),a=h("h1"),a.textContent="Vite + Svelte",x=O(),m=h("div"),le(p.$$.fragment),T=O(),N=h("p"),N.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',B(o.src,s=ae)||u(o,"src",s),u(o,"class","logo svelte-11cv5lq"),u(o,"alt","Vite Logo"),u(r,"href","https://vitejs.dev"),u(r,"target","_blank"),u(r,"rel","noreferrer"),B(d.src,i=fe)||u(d,"src",i),u(d,"class","logo svelte svelte-11cv5lq"),u(d,"alt","Svelte Logo"),u(f,"href","https://svelte.dev"),u(f,"target","_blank"),u(f,"rel","noreferrer"),u(m,"class","card")},m(_,X){D(_,t,X),l(t,n),l(n,r),l(r,o),l(n,c),l(n,f),l(f,d),l(t,b),l(t,a),l(t,x),l(t,m),Q(p,m,null),l(t,T),l(t,N),E=!0},p:v,i(_){E||(J(p.$$.fragment,_),E=!0)},o(_){ce(p.$$.fragment,_),E=!1},d(_){_&&P(t),R(p)}}}class _e extends W{constructor(t){super(),U(this,t,null,me,z,{})}}new _e({target:document.getElementById("app")});