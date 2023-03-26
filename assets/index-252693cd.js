(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();function l(){}function ee(t,e){for(const r in e)t[r]=e[r];return t}function V(t){return t()}function H(){return Object.create(null)}function L(t){t.forEach(V)}function W(t){return typeof t=="function"}function y(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let P;function A(t,e){return P||(P=document.createElement("a")),P.href=e,t===P.href}function te(t){return Object.keys(t).length===0}function M(t,e,r,s){if(t){const n=X(t,e,r,s);return t[0](n)}}function X(t,e,r,s){return t[1]&&s?ee(r.ctx.slice(),t[1](s(e))):r.ctx}function T(t,e,r,s){if(t[2]&&s){const n=t[2](s(r));if(e.dirty===void 0)return n;if(typeof n=="object"){const o=[],u=Math.max(e.dirty.length,n.length);for(let c=0;c<u;c+=1)o[c]=e.dirty[c]|n[c];return o}return e.dirty|n}return e.dirty}function q(t,e,r,s,n,o){if(n){const u=X(e,r,s,o);t.p(u,n)}}function I(t){if(t.ctx.length>32){const e=[],r=t.ctx.length/32;for(let s=0;s<r;s++)e[s]=-1;return e}return-1}function ne(t,e){t.appendChild(e)}function _(t,e,r){t.insertBefore(e,r||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function O(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function B(){return Y(" ")}function d(t,e,r){r==null?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function re(t){return Array.from(t.childNodes)}function se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function J(t,e,r,s){r===null?t.style.removeProperty(e):t.style.setProperty(e,r,s?"important":"")}let F;function N(t){F=t}const v=[],Q=[];let E=[];const U=[],oe=Promise.resolve();let S=!1;function ue(){S||(S=!0,oe.then(Z))}function C(t){E.push(t)}const j=new Set;let k=0;function Z(){if(k!==0)return;const t=F;do{try{for(;k<v.length;){const e=v[k];k++,N(e),ce(e.$$)}}catch(e){throw v.length=0,k=0,e}for(N(null),v.length=0,k=0;Q.length;)Q.pop()();for(let e=0;e<E.length;e+=1){const r=E[e];j.has(r)||(j.add(r),r())}E.length=0}while(v.length);for(;U.length;)U.pop()();S=!1,j.clear(),N(t)}function ce(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}function fe(t){const e=[],r=[];E.forEach(s=>t.indexOf(s)===-1?e.push(s):r.push(s)),r.forEach(s=>s()),E=e}const R=new Set;let ie;function i(t,e){t&&t.i&&(R.delete(t),t.i(e))}function m(t,e,r,s){if(t&&t.o){if(R.has(t))return;R.add(t),ie.c.push(()=>{R.delete(t),s&&(r&&t.d(1),s())}),t.o(e)}else s&&s()}function x(t){t&&t.c()}function p(t,e,r,s){const{fragment:n,after_update:o}=t.$$;n&&n.m(e,r),s||C(()=>{const u=t.$$.on_mount.map(V).filter(W);t.$$.on_destroy?t.$$.on_destroy.push(...u):L(u),t.$$.on_mount=[]}),o.forEach(C)}function h(t,e){const r=t.$$;r.fragment!==null&&(fe(r.after_update),L(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function le(t,e){t.$$.dirty[0]===-1&&(v.push(t),ue(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function b(t,e,r,s,n,o,u,c=[-1]){const a=F;N(t);const f=t.$$={fragment:null,ctx:[],props:o,update:l,not_equal:n,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:H(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};u&&u(f.root);let K=!1;if(f.ctx=r?r(t,e.props||{},($,z,...D)=>{const G=D.length?D[0]:z;return f.ctx&&n(f.ctx[$],f.ctx[$]=G)&&(!f.skip_bound&&f.bound[$]&&f.bound[$](G),K&&le(t,$)),z}):[],f.update(),K=!0,L(f.before_update),f.fragment=s?s(f.ctx):!1,e.target){if(e.hydrate){const $=re(e.target);f.fragment&&f.fragment.l($),$.forEach(g)}else f.fragment&&f.fragment.c();e.intro&&i(t.$$.fragment),p(t,e.target,e.anchor,e.customElement),Z()}N(a)}class w{$destroy(){h(this,1),this.$destroy=l}$on(e,r){if(!W(r))return l;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(r),()=>{const n=s.indexOf(r);n!==-1&&s.splice(n,1)}}$set(e){this.$$set&&!te(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ae(t){let e,r;const s=t[2].default,n=M(s,t,t[1],null);return{c(){e=O("section"),n&&n.c(),J(e,"background-image","url('"+t[0]+"')"),d(e,"class","racer-background svelte-1ln07ou")},m(o,u){_(o,e,u),n&&n.m(e,null),r=!0},p(o,[u]){n&&n.p&&(!r||u&2)&&q(n,s,o,o[1],r?T(s,o[1],u,null):I(o[1]),null),(!r||u&1)&&J(e,"background-image","url('"+o[0]+"')")},i(o){r||(i(n,o),r=!0)},o(o){m(n,o),r=!1},d(o){o&&g(e),n&&n.d(o)}}}function de(t,e,r){let{$$slots:s={},$$scope:n}=e,{background:o}=e;return t.$$set=u=>{"background"in u&&r(0,o=u.background),"$$scope"in u&&r(1,n=u.$$scope)},[o,n,s]}class me extends w{constructor(e){super(),b(this,e,de,ae,y,{background:0})}}function ge(t){let e,r;return{c(){e=O("img"),A(e.src,r=t[0])||d(e,"src",r),d(e,"alt",t[0])},m(s,n){_(s,e,n)},p(s,[n]){n&1&&!A(e.src,r=s[0])&&d(e,"src",r),n&1&&d(e,"alt",s[0])},i:l,o:l,d(s){s&&g(e)}}}function _e(t,e,r){let{image:s}=e;return t.$$set=n=>{"image"in n&&r(0,s=n.image)},[s]}class $e extends w{constructor(e){super(),b(this,e,_e,ge,y,{image:0})}}function pe(t){let e,r;return{c(){e=O("img"),A(e.src,r=t[0])||d(e,"src",r),d(e,"alt",t[0])},m(s,n){_(s,e,n)},p(s,[n]){n&1&&!A(e.src,r=s[0])&&d(e,"src",r),n&1&&d(e,"alt",s[0])},i:l,o:l,d(s){s&&g(e)}}}function he(t,e,r){let{logo:s}=e;return t.$$set=n=>{"logo"in n&&r(0,s=n.logo)},[s]}class ye extends w{constructor(e){super(),b(this,e,he,pe,y,{logo:0})}}function be(t){let e,r;return{c(){e=O("p"),r=Y(t[0])},m(s,n){_(s,e,n),ne(e,r)},p(s,[n]){n&1&&se(r,s[0])},i:l,o:l,d(s){s&&g(e)}}}function we(t,e,r){let{number:s}=e;return t.$$set=n=>{"number"in n&&r(0,s=n.number)},[s]}class xe extends w{constructor(e){super(),b(this,e,we,be,y,{number:0})}}function ke(t){let e,r;const s=t[1].default,n=M(s,t,t[0],null);return{c(){e=O("section"),n&&n.c()},m(o,u){_(o,e,u),n&&n.m(e,null),r=!0},p(o,[u]){n&&n.p&&(!r||u&1)&&q(n,s,o,o[0],r?T(s,o[0],u,null):I(o[0]),null)},i(o){r||(i(n,o),r=!0)},o(o){m(n,o),r=!1},d(o){o&&g(e),n&&n.d(o)}}}function ve(t,e,r){let{$$slots:s={},$$scope:n}=e;return t.$$set=o=>{"$$scope"in o&&r(0,n=o.$$scope)},[n,s]}class Ee extends w{constructor(e){super(),b(this,e,ve,ke,y,{})}}function Oe(t){let e,r;const s=t[1].default,n=M(s,t,t[0],null);return{c(){e=O("section"),n&&n.c(),d(e,"class","race-aside")},m(o,u){_(o,e,u),n&&n.m(e,null),r=!0},p(o,[u]){n&&n.p&&(!r||u&1)&&q(n,s,o,o[0],r?T(s,o[0],u,null):I(o[0]),null)},i(o){r||(i(n,o),r=!0)},o(o){m(n,o),r=!1},d(o){o&&g(e),n&&n.d(o)}}}function Ne(t,e,r){let{$$slots:s={},$$scope:n}=e;return t.$$set=o=>{"$$scope"in o&&r(0,n=o.$$scope)},[n,s]}class Pe extends w{constructor(e){super(),b(this,e,Ne,Oe,y,{})}}const Re="/formula-racers-info/assets/racer_image_alonso-ba1b8d84.png",Ae="/formula-racers-info/assets/alonso_background-6f30be6b.jpeg",Le="/formula-racers-info/assets/aston_martin_team_logo-c0325580.png";function je(t){let e,r,s,n,o,u;return e=new xe({props:{number:Ce}}),s=new ye({props:{logo:Le}}),o=new $e({props:{image:Re}}),{c(){x(e.$$.fragment),r=B(),x(s.$$.fragment),n=B(),x(o.$$.fragment)},m(c,a){p(e,c,a),_(c,r,a),p(s,c,a),_(c,n,a),p(o,c,a),u=!0},p:l,i(c){u||(i(e.$$.fragment,c),i(s.$$.fragment,c),i(o.$$.fragment,c),u=!0)},o(c){m(e.$$.fragment,c),m(s.$$.fragment,c),m(o.$$.fragment,c),u=!1},d(c){h(e,c),c&&g(r),h(s,c),c&&g(n),h(o,c)}}}function Be(t){let e,r,s,n;return e=new Pe({props:{$$slots:{default:[je]},$$scope:{ctx:t}}}),s=new Ee({}),{c(){x(e.$$.fragment),r=B(),x(s.$$.fragment)},m(o,u){p(e,o,u),_(o,r,u),p(s,o,u),n=!0},p(o,u){const c={};u&1&&(c.$$scope={dirty:u,ctx:o}),e.$set(c)},i(o){n||(i(e.$$.fragment,o),i(s.$$.fragment,o),n=!0)},o(o){m(e.$$.fragment,o),m(s.$$.fragment,o),n=!1},d(o){h(e,o),o&&g(r),h(s,o)}}}function Se(t){let e,r;return e=new me({props:{background:Ae,$$slots:{default:[Be]},$$scope:{ctx:t}}}),{c(){x(e.$$.fragment)},m(s,n){p(e,s,n),r=!0},p(s,[n]){const o={};n&1&&(o.$$scope={dirty:n,ctx:s}),e.$set(o)},i(s){r||(i(e.$$.fragment,s),r=!0)},o(s){m(e.$$.fragment,s),r=!1},d(s){h(e,s)}}}const Ce=14;class Me extends w{constructor(e){super(),b(this,e,null,Se,y,{})}}function Te(t){let e,r;return e=new Me({}),{c(){x(e.$$.fragment)},m(s,n){p(e,s,n),r=!0},p:l,i(s){r||(i(e.$$.fragment,s),r=!0)},o(s){m(e.$$.fragment,s),r=!1},d(s){h(e,s)}}}class qe extends w{constructor(e){super(),b(this,e,null,Te,y,{})}}new qe({target:document.getElementById("app")});