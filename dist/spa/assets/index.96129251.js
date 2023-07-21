const ev=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ad={},tv="/",oi=function(e,n){return!n||n.length===0?e():Promise.all(n.map(i=>{if(i=`${tv}${i}`,i in ad)return;ad[i]=!0;const r=i.endsWith(".css"),s=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":ev,r||(o.as="script",o.crossOrigin=""),o.href=i,document.head.appendChild(o),r)return new Promise((a,l)=>{o.addEventListener("load",a),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function vc(t,e){const n=Object.create(null),i=t.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const ve={},qi=[],Nt=()=>{},nv=()=>!1,iv=/^on[^a-z]/,qo=t=>iv.test(t),yc=t=>t.startsWith("onUpdate:"),Ae=Object.assign,wc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rv=Object.prototype.hasOwnProperty,te=(t,e)=>rv.call(t,e),V=Array.isArray,Ki=t=>ks(t)==="[object Map]",Of=t=>ks(t)==="[object Set]",sv=t=>ks(t)==="[object RegExp]",G=t=>typeof t=="function",Ce=t=>typeof t=="string",bc=t=>typeof t=="symbol",ye=t=>t!==null&&typeof t=="object",xf=t=>ye(t)&&G(t.then)&&G(t.catch),Df=Object.prototype.toString,ks=t=>Df.call(t),ov=t=>ks(t).slice(8,-1),Lf=t=>ks(t)==="[object Object]",Ec=t=>Ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,io=vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ko=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},av=/-(\w)/g,Xt=Ko(t=>t.replace(av,(e,n)=>n?n.toUpperCase():"")),lv=/\B([A-Z])/g,gr=Ko(t=>t.replace(lv,"-$1").toLowerCase()),Go=Ko(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ua=Ko(t=>t?`on${Go(t)}`:""),is=(t,e)=>!Object.is(t,e),jr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ho=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},cv=t=>{const e=parseFloat(t);return isNaN(e)?t:e},uv=t=>{const e=Ce(t)?Number(t):NaN;return isNaN(e)?t:e};let ld;const bl=()=>ld||(ld=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function Ic(t){if(V(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ce(i)?pv(i):Ic(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Ce(t))return t;if(ye(t))return t}}const dv=/;(?![^(]*\))/g,hv=/:([^]+)/,fv=/\/\*[^]*?\*\//g;function pv(t){const e={};return t.replace(fv,"").split(dv).forEach(n=>{if(n){const i=n.split(hv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Cc(t){let e="";if(Ce(t))e=t;else if(V(t))for(let n=0;n<t.length;n++){const i=Cc(t[n]);i&&(e+=i+" ")}else if(ye(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_v=vc(gv);function Mf(t){return!!t||t===""}const CN=t=>Ce(t)?t:t==null?"":V(t)||ye(t)&&(t.toString===Df||!G(t.toString))?JSON.stringify(t,Ff,2):String(t),Ff=(t,e)=>e&&e.__v_isRef?Ff(t,e.value):Ki(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r])=>(n[`${i} =>`]=r,n),{})}:Of(e)?{[`Set(${e.size})`]:[...e.values()]}:ye(e)&&!V(e)&&!Lf(e)?String(e):e;let St;class Uf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=St,!e&&St&&(this.index=(St.scopes||(St.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=St;try{return St=this,e()}finally{St=n}}}on(){St=this}off(){St=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function mv(t){return new Uf(t)}function vv(t,e=St){e&&e.active&&e.effects.push(t)}function yv(){return St}const Tc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wf=t=>(t.w&Bn)>0,Bf=t=>(t.n&Bn)>0,wv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Bn},bv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let i=0;i<e.length;i++){const r=e[i];Wf(r)&&!Bf(r)?r.delete(t):e[n++]=r,r.w&=~Bn,r.n&=~Bn}e.length=n}},El=new WeakMap;let Wr=0,Bn=1;const Il=30;let At;const hi=Symbol(""),Cl=Symbol("");class Sc{constructor(e,n=null,i){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,vv(this,i)}run(){if(!this.active)return this.fn();let e=At,n=Dn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=At,At=this,Dn=!0,Bn=1<<++Wr,Wr<=Il?wv(this):cd(this),this.fn()}finally{Wr<=Il&&bv(this),Bn=1<<--Wr,At=this.parent,Dn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){At===this?this.deferStop=!0:this.active&&(cd(this),this.onStop&&this.onStop(),this.active=!1)}}function cd(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dn=!0;const Hf=[];function _r(){Hf.push(Dn),Dn=!1}function mr(){const t=Hf.pop();Dn=t===void 0?!0:t}function it(t,e,n){if(Dn&&At){let i=El.get(t);i||El.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Tc()),$f(r)}}function $f(t,e){let n=!1;Wr<=Il?Bf(t)||(t.n|=Bn,n=!Wf(t)):n=!t.has(At),n&&(t.add(At),At.deps.push(t))}function gn(t,e,n,i,r,s){const o=El.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&V(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":V(t)?Ec(n)&&a.push(o.get("length")):(a.push(o.get(hi)),Ki(t)&&a.push(o.get(Cl)));break;case"delete":V(t)||(a.push(o.get(hi)),Ki(t)&&a.push(o.get(Cl)));break;case"set":Ki(t)&&a.push(o.get(hi));break}if(a.length===1)a[0]&&Tl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Tl(Tc(l))}}function Tl(t,e){const n=V(t)?t:[...t];for(const i of n)i.computed&&ud(i);for(const i of n)i.computed||ud(i)}function ud(t,e){(t!==At||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ev=vc("__proto__,__v_isRef,__isVue"),Vf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(bc)),Iv=Rc(),Cv=Rc(!1,!0),Tv=Rc(!0),dd=Sv();function Sv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=re(this);for(let s=0,o=this.length;s<o;s++)it(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(re)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){_r();const i=re(this)[e].apply(this,n);return mr(),i}}),t}function Rv(t){const e=re(this);return it(e,"has",t),e.hasOwnProperty(t)}function Rc(t=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(t?e?Vv:Gf:e?Kf:qf).get(i))return i;const o=V(i);if(!t){if(o&&te(dd,r))return Reflect.get(dd,r,s);if(r==="hasOwnProperty")return Rv}const a=Reflect.get(i,r,s);return(bc(r)?Vf.has(r):Ev(r))||(t||it(i,"get",r),e)?a:qe(a)?o&&Ec(r)?a:a.value:ye(a)?t?Qf(a):Ai(a):a}}const Av=jf(),kv=jf(!0);function jf(t=!1){return function(n,i,r,s){let o=n[i];if(ir(o)&&qe(o)&&!qe(r))return!1;if(!t&&(!fo(r)&&!ir(r)&&(o=re(o),r=re(r)),!V(n)&&qe(o)&&!qe(r)))return o.value=r,!0;const a=V(n)&&Ec(i)?Number(i)<n.length:te(n,i),l=Reflect.set(n,i,r,s);return n===re(s)&&(a?is(r,o)&&gn(n,"set",i,r):gn(n,"add",i,r)),l}}function Pv(t,e){const n=te(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&n&&gn(t,"delete",e,void 0),i}function Nv(t,e){const n=Reflect.has(t,e);return(!bc(e)||!Vf.has(e))&&it(t,"has",e),n}function Ov(t){return it(t,"iterate",V(t)?"length":hi),Reflect.ownKeys(t)}const zf={get:Iv,set:Av,deleteProperty:Pv,has:Nv,ownKeys:Ov},xv={get:Tv,set(t,e){return!0},deleteProperty(t,e){return!0}},Dv=Ae({},zf,{get:Cv,set:kv}),Ac=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function Ks(t,e,n=!1,i=!1){t=t.__v_raw;const r=re(t),s=re(e);n||(e!==s&&it(r,"get",e),it(r,"get",s));const{has:o}=Yo(r),a=i?Ac:n?Oc:rs;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function Gs(t,e=!1){const n=this.__v_raw,i=re(n),r=re(t);return e||(t!==r&&it(i,"has",t),it(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Ys(t,e=!1){return t=t.__v_raw,!e&&it(re(t),"iterate",hi),Reflect.get(t,"size",t)}function hd(t){t=re(t);const e=re(this);return Yo(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function fd(t,e){e=re(e);const n=re(this),{has:i,get:r}=Yo(n);let s=i.call(n,t);s||(t=re(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?is(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function pd(t){const e=re(this),{has:n,get:i}=Yo(e);let r=n.call(e,t);r||(t=re(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&gn(e,"delete",t,void 0),s}function gd(){const t=re(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function Qs(t,e){return function(i,r){const s=this,o=s.__v_raw,a=re(o),l=e?Ac:t?Oc:rs;return!t&&it(a,"iterate",hi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Js(t,e,n){return function(...i){const r=this.__v_raw,s=re(r),o=Ki(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Ac:e?Oc:rs;return!e&&it(s,"iterate",l?Cl:hi),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:this}}function Lv(){const t={get(s){return Ks(this,s)},get size(){return Ys(this)},has:Gs,add:hd,set:fd,delete:pd,clear:gd,forEach:Qs(!1,!1)},e={get(s){return Ks(this,s,!1,!0)},get size(){return Ys(this)},has:Gs,add:hd,set:fd,delete:pd,clear:gd,forEach:Qs(!1,!0)},n={get(s){return Ks(this,s,!0)},get size(){return Ys(this,!0)},has(s){return Gs.call(this,s,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Qs(!0,!1)},i={get(s){return Ks(this,s,!0,!0)},get size(){return Ys(this,!0)},has(s){return Gs.call(this,s,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Qs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Js(s,!1,!1),n[s]=Js(s,!0,!1),e[s]=Js(s,!1,!0),i[s]=Js(s,!0,!0)}),[t,n,e,i]}const[Mv,Fv,Uv,Wv]=Lv();function kc(t,e){const n=e?t?Wv:Uv:t?Fv:Mv;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(te(n,r)&&r in i?n:i,r,s)}const Bv={get:kc(!1,!1)},Hv={get:kc(!1,!0)},$v={get:kc(!0,!1)},qf=new WeakMap,Kf=new WeakMap,Gf=new WeakMap,Vv=new WeakMap;function jv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zv(t){return t.__v_skip||!Object.isExtensible(t)?0:jv(ov(t))}function Ai(t){return ir(t)?t:Pc(t,!1,zf,Bv,qf)}function Yf(t){return Pc(t,!1,Dv,Hv,Kf)}function Qf(t){return Pc(t,!0,xv,$v,Gf)}function Pc(t,e,n,i,r){if(!ye(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=zv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Gi(t){return ir(t)?Gi(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function fo(t){return!!(t&&t.__v_isShallow)}function Jf(t){return Gi(t)||ir(t)}function re(t){const e=t&&t.__v_raw;return e?re(e):t}function Nc(t){return ho(t,"__v_skip",!0),t}const rs=t=>ye(t)?Ai(t):t,Oc=t=>ye(t)?Qf(t):t;function Xf(t){Dn&&At&&(t=re(t),$f(t.dep||(t.dep=Tc())))}function Zf(t,e){t=re(t);const n=t.dep;n&&Tl(n)}function qe(t){return!!(t&&t.__v_isRef===!0)}function ep(t){return tp(t,!1)}function qv(t){return tp(t,!0)}function tp(t,e){return qe(t)?t:new Kv(t,e)}class Kv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:re(e),this._value=n?e:rs(e)}get value(){return Xf(this),this._value}set value(e){const n=this.__v_isShallow||fo(e)||ir(e);e=n?e:re(e),is(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:rs(e),Zf(this))}}function Yi(t){return qe(t)?t.value:t}const Gv={get:(t,e,n)=>Yi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return qe(r)&&!qe(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function np(t){return Gi(t)?t:new Proxy(t,Gv)}class Yv{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Sc(e,()=>{this._dirty||(this._dirty=!0,Zf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=re(this);return Xf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qv(t,e,n=!1){let i,r;const s=G(t);return s?(i=t,r=Nt):(i=t.get,r=t.set),new Yv(i,r,s||!r,n)}function Ln(t,e,n,i){let r;try{r=i?t(...i):t()}catch(s){Qo(s,e,n)}return r}function bt(t,e,n,i){if(G(t)){const s=Ln(t,e,n,i);return s&&xf(s)&&s.catch(o=>{Qo(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(bt(t[s],e,n,i));return r}function Qo(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ln(l,null,10,[t,o,a]);return}}Jv(t,n,r,i)}function Jv(t,e,n,i=!0){console.error(t)}let ss=!1,Sl=!1;const ze=[];let zt=0;const Qi=[];let an=null,ai=0;const ip=Promise.resolve();let xc=null;function rp(t){const e=xc||ip;return t?e.then(this?t.bind(this):t):e}function Xv(t){let e=zt+1,n=ze.length;for(;e<n;){const i=e+n>>>1;os(ze[i])<t?e=i+1:n=i}return e}function Dc(t){(!ze.length||!ze.includes(t,ss&&t.allowRecurse?zt+1:zt))&&(t.id==null?ze.push(t):ze.splice(Xv(t.id),0,t),sp())}function sp(){!ss&&!Sl&&(Sl=!0,xc=ip.then(ap))}function Zv(t){const e=ze.indexOf(t);e>zt&&ze.splice(e,1)}function ey(t){V(t)?Qi.push(...t):(!an||!an.includes(t,t.allowRecurse?ai+1:ai))&&Qi.push(t),sp()}function _d(t,e=ss?zt+1:0){for(;e<ze.length;e++){const n=ze[e];n&&n.pre&&(ze.splice(e,1),e--,n())}}function op(t){if(Qi.length){const e=[...new Set(Qi)];if(Qi.length=0,an){an.push(...e);return}for(an=e,an.sort((n,i)=>os(n)-os(i)),ai=0;ai<an.length;ai++)an[ai]();an=null,ai=0}}const os=t=>t.id==null?1/0:t.id,ty=(t,e)=>{const n=os(t)-os(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ap(t){Sl=!1,ss=!0,ze.sort(ty);const e=Nt;try{for(zt=0;zt<ze.length;zt++){const n=ze[zt];n&&n.active!==!1&&Ln(n,null,14)}}finally{zt=0,ze.length=0,op(),ss=!1,xc=null,(ze.length||Qi.length)&&ap()}}function ny(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ve;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=i[u]||ve;h&&(r=n.map(g=>Ce(g)?g.trim():g)),d&&(r=n.map(cv))}let a,l=i[a=Ua(e)]||i[a=Ua(Xt(e))];!l&&s&&(l=i[a=Ua(gr(e))]),l&&bt(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,bt(c,t,6,r)}}function lp(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=lp(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ye(t)&&i.set(t,null),null):(V(s)?s.forEach(l=>o[l]=null):Ae(o,s),ye(t)&&i.set(t,o),o)}function Jo(t,e){return!t||!qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,gr(e))||te(t,e))}let ct=null,Xo=null;function po(t){const e=ct;return ct=t,Xo=t&&t.type.__scopeId||null,e}function TN(t){Xo=t}function SN(){Xo=null}function iy(t,e=ct,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ad(-1);const s=po(e);let o;try{o=t(...r)}finally{po(s),i._d&&Ad(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Wa(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:g,ctx:m,inheritAttrs:b}=t;let P,x;const E=po(t);try{if(n.shapeFlag&4){const C=r||i;P=jt(u.call(C,C,d,s,g,h,m)),x=l}else{const C=e;P=jt(C.length>1?C(s,{attrs:l,slots:a,emit:c}):C(s,null)),x=e.props?l:ry(l)}}catch(C){Kr.length=0,Qo(C,t,1),P=ut(Ot)}let O=P;if(x&&b!==!1){const C=Object.keys(x),{shapeFlag:K}=O;C.length&&K&7&&(o&&C.some(yc)&&(x=sy(x,o)),O=_n(O,x))}return n.dirs&&(O=_n(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),P=O,po(E),P}const ry=t=>{let e;for(const n in t)(n==="class"||n==="style"||qo(n))&&((e||(e={}))[n]=t[n]);return e},sy=(t,e)=>{const n={};for(const i in t)(!yc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function oy(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?md(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==i[h]&&!Jo(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?md(i,o,c):!0:!!o;return!1}function md(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Jo(n,s))return!0}return!1}function ay({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const cp=t=>t.__isSuspense;function ly(t,e){e&&e.pendingBranch?V(t)?e.effects.push(...t):e.effects.push(t):ey(t)}const Xs={};function fi(t,e,n){return up(t,e,n)}function up(t,e,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=ve){var a;const l=yv()===((a=Fe)==null?void 0:a.scope)?Fe:null;let c,u=!1,d=!1;if(qe(t)?(c=()=>t.value,u=fo(t)):Gi(t)?(c=()=>t,i=!0):V(t)?(d=!0,u=t.some(C=>Gi(C)||fo(C)),c=()=>t.map(C=>{if(qe(C))return C.value;if(Gi(C))return ci(C);if(G(C))return Ln(C,l,2)})):G(t)?e?c=()=>Ln(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),bt(t,l,3,[g])}:c=Nt,e&&i){const C=c;c=()=>ci(C())}let h,g=C=>{h=E.onStop=()=>{Ln(C,l,4)}},m;if(ls)if(g=Nt,e?n&&bt(e,l,3,[c(),d?[]:void 0,g]):c(),r==="sync"){const C=iw();m=C.__watcherHandles||(C.__watcherHandles=[])}else return Nt;let b=d?new Array(t.length).fill(Xs):Xs;const P=()=>{if(!!E.active)if(e){const C=E.run();(i||u||(d?C.some((K,ee)=>is(K,b[ee])):is(C,b)))&&(h&&h(),bt(e,l,3,[C,b===Xs?void 0:d&&b[0]===Xs?[]:b,g]),b=C)}else E.run()};P.allowRecurse=!!e;let x;r==="sync"?x=P:r==="post"?x=()=>Be(P,l&&l.suspense):(P.pre=!0,l&&(P.id=l.uid),x=()=>Dc(P));const E=new Sc(c,x);e?n?P():b=E.run():r==="post"?Be(E.run.bind(E),l&&l.suspense):E.run();const O=()=>{E.stop(),l&&l.scope&&wc(l.scope.effects,E)};return m&&m.push(O),O}function cy(t,e,n){const i=this.proxy,r=Ce(t)?t.includes(".")?dp(i,t):()=>i[t]:t.bind(i,i);let s;G(e)?s=e:(s=e.handler,n=e);const o=Fe;rr(this);const a=up(r,s.bind(i),n);return o?rr(o):pi(),a}function dp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function ci(t,e){if(!ye(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),qe(t))ci(t.value,e);else if(V(t))for(let n=0;n<t.length;n++)ci(t[n],e);else if(Of(t)||Ki(t))t.forEach(n=>{ci(n,e)});else if(Lf(t))for(const n in t)ci(t[n],e);return t}function RN(t,e){const n=ct;if(n===null)return t;const i=ia(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,c=ve]=e[s];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&ci(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Zn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(_r(),bt(l,n,8,[t.el,a,t,e]),mr())}}function uy(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lc(()=>{t.isMounted=!0}),Mc(()=>{t.isUnmounting=!0}),t}const pt=[Function,Array],hp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pt,onEnter:pt,onAfterEnter:pt,onEnterCancelled:pt,onBeforeLeave:pt,onLeave:pt,onAfterLeave:pt,onLeaveCancelled:pt,onBeforeAppear:pt,onAppear:pt,onAfterAppear:pt,onAppearCancelled:pt},dy={name:"BaseTransition",props:hp,setup(t,{slots:e}){const n=xp(),i=uy();let r;return()=>{const s=e.default&&pp(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const b of s)if(b.type!==Ot){o=b;break}}const a=re(t),{mode:l}=a;if(i.isLeaving)return Ba(o);const c=vd(o);if(!c)return Ba(o);const u=Rl(c,a,i,n);go(c,u);const d=n.subTree,h=d&&vd(d);let g=!1;const{getTransitionKey:m}=c.type;if(m){const b=m();r===void 0?r=b:b!==r&&(r=b,g=!0)}if(h&&h.type!==Ot&&(!Pn(c,h)||g)){const b=Rl(h,a,i,n);if(go(h,b),l==="out-in")return i.isLeaving=!0,b.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&n.update()},Ba(o);l==="in-out"&&c.type!==Ot&&(b.delayLeave=(P,x,E)=>{const O=fp(i,h);O[String(h.key)]=h,P._leaveCb=()=>{x(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=E})}return o}}},hy=dy;function fp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Rl(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:b,onAppear:P,onAfterAppear:x,onAppearCancelled:E}=e,O=String(t.key),C=fp(n,t),K=(j,ne)=>{j&&bt(j,i,9,ne)},ee=(j,ne)=>{const X=ne[1];K(j,ne),V(j)?j.every(be=>be.length<=1)&&X():j.length<=1&&X()},le={mode:s,persisted:o,beforeEnter(j){let ne=a;if(!n.isMounted)if(r)ne=b||a;else return;j._leaveCb&&j._leaveCb(!0);const X=C[O];X&&Pn(t,X)&&X.el._leaveCb&&X.el._leaveCb(),K(ne,[j])},enter(j){let ne=l,X=c,be=u;if(!n.isMounted)if(r)ne=P||l,X=x||c,be=E||u;else return;let F=!1;const ce=j._enterCb=Ge=>{F||(F=!0,Ge?K(be,[j]):K(X,[j]),le.delayedLeave&&le.delayedLeave(),j._enterCb=void 0)};ne?ee(ne,[j,ce]):ce()},leave(j,ne){const X=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return ne();K(d,[j]);let be=!1;const F=j._leaveCb=ce=>{be||(be=!0,ne(),ce?K(m,[j]):K(g,[j]),j._leaveCb=void 0,C[X]===t&&delete C[X])};C[X]=t,h?ee(h,[j,F]):F()},clone(j){return Rl(j,e,n,i)}};return le}function Ba(t){if(Zo(t))return t=_n(t),t.children=null,t}function vd(t){return Zo(t)?t.children?t.children[0]:void 0:t}function go(t,e){t.shapeFlag&6&&t.component?go(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pp(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Vt?(o.patchFlag&128&&r++,i=i.concat(pp(o.children,e,a))):(e||o.type!==Ot)&&i.push(a!=null?_n(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function gp(t,e){return G(t)?(()=>Ae({name:t.name},e,{setup:t}))():t}const zr=t=>!!t.type.__asyncLoader,Zo=t=>t.type.__isKeepAlive,fy={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=xp(),i=n.ctx;if(!i.renderer)return()=>{const E=e.default&&e.default();return E&&E.length===1?E[0]:E};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:d}}}=i,h=d("div");i.activate=(E,O,C,K,ee)=>{const le=E.component;c(E,O,C,0,a),l(le.vnode,E,O,C,le,a,K,E.slotScopeIds,ee),Be(()=>{le.isDeactivated=!1,le.a&&jr(le.a);const j=E.props&&E.props.onVnodeMounted;j&&gt(j,le.parent,E)},a)},i.deactivate=E=>{const O=E.component;c(E,h,null,1,a),Be(()=>{O.da&&jr(O.da);const C=E.props&&E.props.onVnodeUnmounted;C&&gt(C,O.parent,E),O.isDeactivated=!0},a)};function g(E){Ha(E),u(E,n,a,!0)}function m(E){r.forEach((O,C)=>{const K=xl(O.type);K&&(!E||!E(K))&&b(C)})}function b(E){const O=r.get(E);!o||!Pn(O,o)?g(O):o&&Ha(o),r.delete(E),s.delete(E)}fi(()=>[t.include,t.exclude],([E,O])=>{E&&m(C=>Br(E,C)),O&&m(C=>!Br(O,C))},{flush:"post",deep:!0});let P=null;const x=()=>{P!=null&&r.set(P,$a(n.subTree))};return Lc(x),mp(x),Mc(()=>{r.forEach(E=>{const{subTree:O,suspense:C}=n,K=$a(O);if(E.type===K.type&&E.key===K.key){Ha(K);const ee=K.component.da;ee&&Be(ee,C);return}g(E)})}),()=>{if(P=null,!e.default)return null;const E=e.default(),O=E[0];if(E.length>1)return o=null,E;if(!vo(O)||!(O.shapeFlag&4)&&!(O.shapeFlag&128))return o=null,O;let C=$a(O);const K=C.type,ee=xl(zr(C)?C.type.__asyncResolved||{}:K),{include:le,exclude:j,max:ne}=t;if(le&&(!ee||!Br(le,ee))||j&&ee&&Br(j,ee))return o=C,O;const X=C.key==null?K:C.key,be=r.get(X);return C.el&&(C=_n(C),O.shapeFlag&128&&(O.ssContent=C)),P=X,be?(C.el=be.el,C.component=be.component,C.transition&&go(C,C.transition),C.shapeFlag|=512,s.delete(X),s.add(X)):(s.add(X),ne&&s.size>parseInt(ne,10)&&b(s.values().next().value)),C.shapeFlag|=256,o=C,cp(O.type)?O:C}}},AN=fy;function Br(t,e){return V(t)?t.some(n=>Br(n,e)):Ce(t)?t.split(",").includes(e):sv(t)?t.test(e):!1}function py(t,e){_p(t,"a",e)}function gy(t,e){_p(t,"da",e)}function _p(t,e,n=Fe){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ea(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Zo(r.parent.vnode)&&_y(i,e,n,r),r=r.parent}}function _y(t,e,n,i){const r=ea(e,t,i,!0);vp(()=>{wc(i[e],r)},n)}function Ha(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function $a(t){return t.shapeFlag&128?t.ssContent:t}function ea(t,e,n=Fe,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;_r(),rr(n);const a=bt(e,n,t,o);return pi(),mr(),a});return i?r.unshift(s):r.push(s),s}}const yn=t=>(e,n=Fe)=>(!ls||t==="sp")&&ea(t,(...i)=>e(...i),n),my=yn("bm"),Lc=yn("m"),vy=yn("bu"),mp=yn("u"),Mc=yn("bum"),vp=yn("um"),yy=yn("sp"),wy=yn("rtg"),by=yn("rtc");function Ey(t,e=Fe){ea("ec",t,e)}const yp="components";function Iy(t,e){return Ty(yp,t,!0,e)||t}const Cy=Symbol.for("v-ndc");function Ty(t,e,n=!0,i=!1){const r=ct||Fe;if(r){const s=r.type;if(t===yp){const a=xl(s,!1);if(a&&(a===e||a===Xt(e)||a===Go(Xt(e))))return s}const o=yd(r[t]||s[t],e)||yd(r.appContext[t],e);return!o&&i?s:o}}function yd(t,e){return t&&(t[e]||t[Xt(e)]||t[Go(Xt(e))])}function kN(t,e,n,i){let r;const s=n&&n[i];if(V(t)||Ce(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(ye(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}const Al=t=>t?Dp(t)?ia(t)||t.proxy:Al(t.parent):null,qr=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Al(t.parent),$root:t=>Al(t.root),$emit:t=>t.emit,$options:t=>Fc(t),$forceUpdate:t=>t.f||(t.f=()=>Dc(t.update)),$nextTick:t=>t.n||(t.n=rp.bind(t.proxy)),$watch:t=>cy.bind(t)}),Va=(t,e)=>t!==ve&&!t.__isScriptSetup&&te(t,e),Sy={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Va(i,e))return o[e]=1,i[e];if(r!==ve&&te(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&te(c,e))return o[e]=3,s[e];if(n!==ve&&te(n,e))return o[e]=4,n[e];kl&&(o[e]=0)}}const u=qr[e];let d,h;if(u)return e==="$attrs"&&it(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ve&&te(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,te(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Va(r,e)?(r[e]=n,!0):i!==ve&&te(i,e)?(i[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ve&&te(t,o)||Va(e,o)||(a=s[0])&&te(a,o)||te(i,o)||te(qr,o)||te(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wd(t){return V(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kl=!0;function Ry(t){const e=Fc(t),n=t.proxy,i=t.ctx;kl=!1,e.beforeCreate&&bd(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:m,activated:b,deactivated:P,beforeDestroy:x,beforeUnmount:E,destroyed:O,unmounted:C,render:K,renderTracked:ee,renderTriggered:le,errorCaptured:j,serverPrefetch:ne,expose:X,inheritAttrs:be,components:F,directives:ce,filters:Ge}=e;if(c&&Ay(c,i,null),o)for(const fe in o){const se=o[fe];G(se)&&(i[fe]=se.bind(n))}if(r){const fe=r.call(n,n);ye(fe)&&(t.data=Ai(fe))}if(kl=!0,s)for(const fe in s){const se=s[fe],rn=G(se)?se.bind(n,n):G(se.get)?se.get.bind(n,n):Nt,En=!G(se)&&G(se.set)?se.set.bind(n):Nt,Ht=_t({get:rn,set:En});Object.defineProperty(i,fe,{enumerable:!0,configurable:!0,get:()=>Ht.value,set:Je=>Ht.value=Je})}if(a)for(const fe in a)wp(a[fe],i,n,fe);if(l){const fe=G(l)?l.call(n):l;Reflect.ownKeys(fe).forEach(se=>{ro(se,fe[se])})}u&&bd(u,t,"c");function Ie(fe,se){V(se)?se.forEach(rn=>fe(rn.bind(n))):se&&fe(se.bind(n))}if(Ie(my,d),Ie(Lc,h),Ie(vy,g),Ie(mp,m),Ie(py,b),Ie(gy,P),Ie(Ey,j),Ie(by,ee),Ie(wy,le),Ie(Mc,E),Ie(vp,C),Ie(yy,ne),V(X))if(X.length){const fe=t.exposed||(t.exposed={});X.forEach(se=>{Object.defineProperty(fe,se,{get:()=>n[se],set:rn=>n[se]=rn})})}else t.exposed||(t.exposed={});K&&t.render===Nt&&(t.render=K),be!=null&&(t.inheritAttrs=be),F&&(t.components=F),ce&&(t.directives=ce)}function Ay(t,e,n=Nt){V(t)&&(t=Pl(t));for(const i in t){const r=t[i];let s;ye(r)?"default"in r?s=dn(r.from||i,r.default,!0):s=dn(r.from||i):s=dn(r),qe(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function bd(t,e,n){bt(V(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function wp(t,e,n,i){const r=i.includes(".")?dp(n,i):()=>n[i];if(Ce(t)){const s=e[t];G(s)&&fi(r,s)}else if(G(t))fi(r,t.bind(n));else if(ye(t))if(V(t))t.forEach(s=>wp(s,e,n,i));else{const s=G(t.handler)?t.handler.bind(n):e[t.handler];G(s)&&fi(r,s,t)}}function Fc(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>_o(l,c,o,!0)),_o(l,e,o)),ye(e)&&s.set(e,l),l}function _o(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&_o(t,s,n,!0),r&&r.forEach(o=>_o(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=ky[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const ky={data:Ed,props:Id,emits:Id,methods:Hr,computed:Hr,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Hr,directives:Hr,watch:Ny,provide:Ed,inject:Py};function Ed(t,e){return e?t?function(){return Ae(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function Py(t,e){return Hr(Pl(t),Pl(e))}function Pl(t){if(V(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Hr(t,e){return t?Ae(Object.create(null),t,e):e}function Id(t,e){return t?V(t)&&V(e)?[...new Set([...t,...e])]:Ae(Object.create(null),wd(t),wd(e!=null?e:{})):e}function Ny(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const i in e)n[i]=Ye(t[i],e[i]);return n}function bp(){return{app:null,config:{isNativeTag:nv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oy=0;function xy(t,e){return function(i,r=null){G(i)||(i=Ae({},i)),r!=null&&!ye(r)&&(r=null);const s=bp(),o=new Set;let a=!1;const l=s.app={_uid:Oy++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:rw,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!a){const h=ut(i,r);return h.appContext=s,u&&e?e(h,c):t(h,c,d),a=!0,l._container=c,c.__vue_app__=l,ia(h.component)||h.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){mo=l;try{return c()}finally{mo=null}}};return l}}let mo=null;function ro(t,e){if(Fe){let n=Fe.provides;const i=Fe.parent&&Fe.parent.provides;i===n&&(n=Fe.provides=Object.create(i)),n[t]=e}}function dn(t,e,n=!1){const i=Fe||ct;if(i||mo){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:mo._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&G(e)?e.call(i&&i.proxy):e}}function Dy(t,e,n,i=!1){const r={},s={};ho(s,na,1),t.propsDefaults=Object.create(null),Ep(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Yf(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Ly(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=re(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Jo(t.emitsOptions,h))continue;const g=e[h];if(l)if(te(s,h))g!==s[h]&&(s[h]=g,c=!0);else{const m=Xt(h);r[m]=Nl(l,a,m,g,t,!1)}else g!==s[h]&&(s[h]=g,c=!0)}}}else{Ep(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!te(e,d)&&((u=gr(d))===d||!te(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Nl(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!te(e,d)&&!0)&&(delete s[d],c=!0)}c&&gn(t,"set","$attrs")}function Ep(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(io(l))continue;const c=e[l];let u;r&&te(r,u=Xt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Jo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=re(n),c=a||ve;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Nl(r,l,d,c[d],t,!te(c,d))}}return o}function Nl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=r;n in c?i=c[n]:(rr(r),i=c[n]=l.call(null,e),pi())}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===gr(n))&&(i=!0))}return i}function Ip(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!G(t)){const u=d=>{l=!0;const[h,g]=Ip(d,e,!0);Ae(o,h),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return ye(t)&&i.set(t,qi),qi;if(V(s))for(let u=0;u<s.length;u++){const d=Xt(s[u]);Cd(d)&&(o[d]=ve)}else if(s)for(const u in s){const d=Xt(u);if(Cd(d)){const h=s[u],g=o[d]=V(h)||G(h)?{type:h}:Ae({},h);if(g){const m=Rd(Boolean,g.type),b=Rd(String,g.type);g[0]=m>-1,g[1]=b<0||m<b,(m>-1||te(g,"default"))&&a.push(d)}}}const c=[o,a];return ye(t)&&i.set(t,c),c}function Cd(t){return t[0]!=="$"}function Td(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Sd(t,e){return Td(t)===Td(e)}function Rd(t,e){return V(e)?e.findIndex(n=>Sd(n,t)):G(e)&&Sd(e,t)?0:-1}const Cp=t=>t[0]==="_"||t==="$stable",Uc=t=>V(t)?t.map(jt):[jt(t)],My=(t,e,n)=>{if(e._n)return e;const i=iy((...r)=>Uc(e(...r)),n);return i._c=!1,i},Tp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Cp(r))continue;const s=t[r];if(G(s))e[r]=My(r,s,i);else if(s!=null){const o=Uc(s);e[r]=()=>o}}},Sp=(t,e)=>{const n=Uc(e);t.slots.default=()=>n},Fy=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=re(e),ho(e,"_",n)):Tp(e,t.slots={})}else t.slots={},e&&Sp(t,e);ho(t.slots,na,1)},Uy=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ve;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(Ae(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Tp(e,r)),o=e}else e&&(Sp(t,e),o={default:1});if(s)for(const a in r)!Cp(a)&&!(a in o)&&delete r[a]};function Ol(t,e,n,i,r=!1){if(V(t)){t.forEach((h,g)=>Ol(h,e&&(V(e)?e[g]:e),n,i,r));return}if(zr(i)&&!r)return;const s=i.shapeFlag&4?ia(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(Ce(c)?(u[c]=null,te(d,c)&&(d[c]=null)):qe(c)&&(c.value=null)),G(l))Ln(l,a,12,[o,u]);else{const h=Ce(l),g=qe(l);if(h||g){const m=()=>{if(t.f){const b=h?te(d,l)?d[l]:u[l]:l.value;r?V(b)&&wc(b,s):V(b)?b.includes(s)||b.push(s):h?(u[l]=[s],te(d,l)&&(d[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else h?(u[l]=o,te(d,l)&&(d[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Be(m,n)):m()}}}const Be=ly;function Wy(t){return By(t)}function By(t,e){const n=bl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=Nt,insertStaticContent:m}=t,b=(f,p,_,v=null,w=null,I=null,D=!1,A=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!Pn(f,p)&&(v=y(f),Je(f,w,I,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:T,ref:W,shapeFlag:M}=p;switch(T){case ta:P(f,p,_,v);break;case Ot:x(f,p,_,v);break;case ja:f==null&&E(p,_,v,D);break;case Vt:F(f,p,_,v,w,I,D,A,k);break;default:M&1?K(f,p,_,v,w,I,D,A,k):M&6?ce(f,p,_,v,w,I,D,A,k):(M&64||M&128)&&T.process(f,p,_,v,w,I,D,A,k,N)}W!=null&&w&&Ol(W,f&&f.ref,I,p||f,!p)},P=(f,p,_,v)=>{if(f==null)i(p.el=a(p.children),_,v);else{const w=p.el=f.el;p.children!==f.children&&c(w,p.children)}},x=(f,p,_,v)=>{f==null?i(p.el=l(p.children||""),_,v):p.el=f.el},E=(f,p,_,v)=>{[f.el,f.anchor]=m(f.children,p,_,v,f.el,f.anchor)},O=({el:f,anchor:p},_,v)=>{let w;for(;f&&f!==p;)w=h(f),i(f,_,v),f=w;i(p,_,v)},C=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=h(f),r(f),f=_;r(p)},K=(f,p,_,v,w,I,D,A,k)=>{D=D||p.type==="svg",f==null?ee(p,_,v,w,I,D,A,k):ne(f,p,w,I,D,A,k)},ee=(f,p,_,v,w,I,D,A)=>{let k,T;const{type:W,props:M,shapeFlag:B,transition:q,dirs:Z}=f;if(k=f.el=o(f.type,I,M&&M.is,M),B&8?u(k,f.children):B&16&&j(f.children,k,null,v,w,I&&W!=="foreignObject",D,A),Z&&Zn(f,null,v,"created"),le(k,f,f.scopeId,D,v),M){for(const he in M)he!=="value"&&!io(he)&&s(k,he,null,M[he],I,f.children,v,w,Ve);"value"in M&&s(k,"value",null,M.value),(T=M.onVnodeBeforeMount)&&gt(T,v,f)}Z&&Zn(f,null,v,"beforeMount");const ge=(!w||w&&!w.pendingBranch)&&q&&!q.persisted;ge&&q.beforeEnter(k),i(k,p,_),((T=M&&M.onVnodeMounted)||ge||Z)&&Be(()=>{T&&gt(T,v,f),ge&&q.enter(k),Z&&Zn(f,null,v,"mounted")},w)},le=(f,p,_,v,w)=>{if(_&&g(f,_),v)for(let I=0;I<v.length;I++)g(f,v[I]);if(w){let I=w.subTree;if(p===I){const D=w.vnode;le(f,D,D.scopeId,D.slotScopeIds,w.parent)}}},j=(f,p,_,v,w,I,D,A,k=0)=>{for(let T=k;T<f.length;T++){const W=f[T]=A?An(f[T]):jt(f[T]);b(null,W,p,_,v,w,I,D,A)}},ne=(f,p,_,v,w,I,D)=>{const A=p.el=f.el;let{patchFlag:k,dynamicChildren:T,dirs:W}=p;k|=f.patchFlag&16;const M=f.props||ve,B=p.props||ve;let q;_&&ei(_,!1),(q=B.onVnodeBeforeUpdate)&&gt(q,_,p,f),W&&Zn(p,f,_,"beforeUpdate"),_&&ei(_,!0);const Z=w&&p.type!=="foreignObject";if(T?X(f.dynamicChildren,T,A,_,v,Z,I):D||se(f,p,A,null,_,v,Z,I,!1),k>0){if(k&16)be(A,p,M,B,_,v,w);else if(k&2&&M.class!==B.class&&s(A,"class",null,B.class,w),k&4&&s(A,"style",M.style,B.style,w),k&8){const ge=p.dynamicProps;for(let he=0;he<ge.length;he++){const Se=ge[he],Ct=M[Se],Ui=B[Se];(Ui!==Ct||Se==="value")&&s(A,Se,Ct,Ui,w,f.children,_,v,Ve)}}k&1&&f.children!==p.children&&u(A,p.children)}else!D&&T==null&&be(A,p,M,B,_,v,w);((q=B.onVnodeUpdated)||W)&&Be(()=>{q&&gt(q,_,p,f),W&&Zn(p,f,_,"updated")},v)},X=(f,p,_,v,w,I,D)=>{for(let A=0;A<p.length;A++){const k=f[A],T=p[A],W=k.el&&(k.type===Vt||!Pn(k,T)||k.shapeFlag&70)?d(k.el):_;b(k,T,W,null,v,w,I,D,!0)}},be=(f,p,_,v,w,I,D)=>{if(_!==v){if(_!==ve)for(const A in _)!io(A)&&!(A in v)&&s(f,A,_[A],null,D,p.children,w,I,Ve);for(const A in v){if(io(A))continue;const k=v[A],T=_[A];k!==T&&A!=="value"&&s(f,A,T,k,D,p.children,w,I,Ve)}"value"in v&&s(f,"value",_.value,v.value)}},F=(f,p,_,v,w,I,D,A,k)=>{const T=p.el=f?f.el:a(""),W=p.anchor=f?f.anchor:a("");let{patchFlag:M,dynamicChildren:B,slotScopeIds:q}=p;q&&(A=A?A.concat(q):q),f==null?(i(T,_,v),i(W,_,v),j(p.children,_,W,w,I,D,A,k)):M>0&&M&64&&B&&f.dynamicChildren?(X(f.dynamicChildren,B,_,w,I,D,A),(p.key!=null||w&&p===w.subTree)&&Rp(f,p,!0)):se(f,p,_,W,w,I,D,A,k)},ce=(f,p,_,v,w,I,D,A,k)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?w.ctx.activate(p,_,v,D,k):Ge(p,_,v,w,I,D,k):nn(f,p,k)},Ge=(f,p,_,v,w,I,D)=>{const A=f.component=Qy(f,v,w);if(Zo(f)&&(A.ctx.renderer=N),Jy(A),A.asyncDep){if(w&&w.registerDep(A,Ie),!f.el){const k=A.subTree=ut(Ot);x(null,k,p,_)}return}Ie(A,f,p,_,w,I,D)},nn=(f,p,_)=>{const v=p.component=f.component;if(oy(f,p,_))if(v.asyncDep&&!v.asyncResolved){fe(v,p,_);return}else v.next=p,Zv(v.update),v.update();else p.el=f.el,v.vnode=p},Ie=(f,p,_,v,w,I,D)=>{const A=()=>{if(f.isMounted){let{next:W,bu:M,u:B,parent:q,vnode:Z}=f,ge=W,he;ei(f,!1),W?(W.el=Z.el,fe(f,W,D)):W=Z,M&&jr(M),(he=W.props&&W.props.onVnodeBeforeUpdate)&&gt(he,q,W,Z),ei(f,!0);const Se=Wa(f),Ct=f.subTree;f.subTree=Se,b(Ct,Se,d(Ct.el),y(Ct),f,w,I),W.el=Se.el,ge===null&&ay(f,Se.el),B&&Be(B,w),(he=W.props&&W.props.onVnodeUpdated)&&Be(()=>gt(he,q,W,Z),w)}else{let W;const{el:M,props:B}=p,{bm:q,m:Z,parent:ge}=f,he=zr(p);if(ei(f,!1),q&&jr(q),!he&&(W=B&&B.onVnodeBeforeMount)&&gt(W,ge,p),ei(f,!0),M&&oe){const Se=()=>{f.subTree=Wa(f),oe(M,f.subTree,f,w,null)};he?p.type.__asyncLoader().then(()=>!f.isUnmounted&&Se()):Se()}else{const Se=f.subTree=Wa(f);b(null,Se,_,v,f,w,I),p.el=Se.el}if(Z&&Be(Z,w),!he&&(W=B&&B.onVnodeMounted)){const Se=p;Be(()=>gt(W,ge,Se),w)}(p.shapeFlag&256||ge&&zr(ge.vnode)&&ge.vnode.shapeFlag&256)&&f.a&&Be(f.a,w),f.isMounted=!0,p=_=v=null}},k=f.effect=new Sc(A,()=>Dc(T),f.scope),T=f.update=()=>k.run();T.id=f.uid,ei(f,!0),T()},fe=(f,p,_)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Ly(f,p.props,v,_),Uy(f,p.children,_),_r(),_d(),mr()},se=(f,p,_,v,w,I,D,A,k=!1)=>{const T=f&&f.children,W=f?f.shapeFlag:0,M=p.children,{patchFlag:B,shapeFlag:q}=p;if(B>0){if(B&128){En(T,M,_,v,w,I,D,A,k);return}else if(B&256){rn(T,M,_,v,w,I,D,A,k);return}}q&8?(W&16&&Ve(T,w,I),M!==T&&u(_,M)):W&16?q&16?En(T,M,_,v,w,I,D,A,k):Ve(T,w,I,!0):(W&8&&u(_,""),q&16&&j(M,_,v,w,I,D,A,k))},rn=(f,p,_,v,w,I,D,A,k)=>{f=f||qi,p=p||qi;const T=f.length,W=p.length,M=Math.min(T,W);let B;for(B=0;B<M;B++){const q=p[B]=k?An(p[B]):jt(p[B]);b(f[B],q,_,null,w,I,D,A,k)}T>W?Ve(f,w,I,!0,!1,M):j(p,_,v,w,I,D,A,k,M)},En=(f,p,_,v,w,I,D,A,k)=>{let T=0;const W=p.length;let M=f.length-1,B=W-1;for(;T<=M&&T<=B;){const q=f[T],Z=p[T]=k?An(p[T]):jt(p[T]);if(Pn(q,Z))b(q,Z,_,null,w,I,D,A,k);else break;T++}for(;T<=M&&T<=B;){const q=f[M],Z=p[B]=k?An(p[B]):jt(p[B]);if(Pn(q,Z))b(q,Z,_,null,w,I,D,A,k);else break;M--,B--}if(T>M){if(T<=B){const q=B+1,Z=q<W?p[q].el:v;for(;T<=B;)b(null,p[T]=k?An(p[T]):jt(p[T]),_,Z,w,I,D,A,k),T++}}else if(T>B)for(;T<=M;)Je(f[T],w,I,!0),T++;else{const q=T,Z=T,ge=new Map;for(T=Z;T<=B;T++){const ot=p[T]=k?An(p[T]):jt(p[T]);ot.key!=null&&ge.set(ot.key,T)}let he,Se=0;const Ct=B-Z+1;let Ui=!1,rd=0;const kr=new Array(Ct);for(T=0;T<Ct;T++)kr[T]=0;for(T=q;T<=M;T++){const ot=f[T];if(Se>=Ct){Je(ot,w,I,!0);continue}let $t;if(ot.key!=null)$t=ge.get(ot.key);else for(he=Z;he<=B;he++)if(kr[he-Z]===0&&Pn(ot,p[he])){$t=he;break}$t===void 0?Je(ot,w,I,!0):(kr[$t-Z]=T+1,$t>=rd?rd=$t:Ui=!0,b(ot,p[$t],_,null,w,I,D,A,k),Se++)}const sd=Ui?Hy(kr):qi;for(he=sd.length-1,T=Ct-1;T>=0;T--){const ot=Z+T,$t=p[ot],od=ot+1<W?p[ot+1].el:v;kr[T]===0?b(null,$t,_,od,w,I,D,A,k):Ui&&(he<0||T!==sd[he]?Ht($t,_,od,2):he--)}}},Ht=(f,p,_,v,w=null)=>{const{el:I,type:D,transition:A,children:k,shapeFlag:T}=f;if(T&6){Ht(f.component.subTree,p,_,v);return}if(T&128){f.suspense.move(p,_,v);return}if(T&64){D.move(f,p,_,N);return}if(D===Vt){i(I,p,_);for(let M=0;M<k.length;M++)Ht(k[M],p,_,v);i(f.anchor,p,_);return}if(D===ja){O(f,p,_);return}if(v!==2&&T&1&&A)if(v===0)A.beforeEnter(I),i(I,p,_),Be(()=>A.enter(I),w);else{const{leave:M,delayLeave:B,afterLeave:q}=A,Z=()=>i(I,p,_),ge=()=>{M(I,()=>{Z(),q&&q()})};B?B(I,Z,ge):ge()}else i(I,p,_)},Je=(f,p,_,v=!1,w=!1)=>{const{type:I,props:D,ref:A,children:k,dynamicChildren:T,shapeFlag:W,patchFlag:M,dirs:B}=f;if(A!=null&&Ol(A,null,_,f,!0),W&256){p.ctx.deactivate(f);return}const q=W&1&&B,Z=!zr(f);let ge;if(Z&&(ge=D&&D.onVnodeBeforeUnmount)&&gt(ge,p,f),W&6)qs(f.component,_,v);else{if(W&128){f.suspense.unmount(_,v);return}q&&Zn(f,null,p,"beforeUnmount"),W&64?f.type.remove(f,p,_,w,N,v):T&&(I!==Vt||M>0&&M&64)?Ve(T,p,_,!1,!0):(I===Vt&&M&384||!w&&W&16)&&Ve(k,p,_),v&&Mi(f)}(Z&&(ge=D&&D.onVnodeUnmounted)||q)&&Be(()=>{ge&&gt(ge,p,f),q&&Zn(f,null,p,"unmounted")},_)},Mi=f=>{const{type:p,el:_,anchor:v,transition:w}=f;if(p===Vt){Fi(_,v);return}if(p===ja){C(f);return}const I=()=>{r(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:D,delayLeave:A}=w,k=()=>D(_,I);A?A(f.el,I,k):k()}else I()},Fi=(f,p)=>{let _;for(;f!==p;)_=h(f),r(f),f=_;r(p)},qs=(f,p,_)=>{const{bum:v,scope:w,update:I,subTree:D,um:A}=f;v&&jr(v),w.stop(),I&&(I.active=!1,Je(D,f,p,_)),A&&Be(A,p),Be(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ve=(f,p,_,v=!1,w=!1,I=0)=>{for(let D=I;D<f.length;D++)Je(f[D],p,_,v,w)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el),L=(f,p,_)=>{f==null?p._vnode&&Je(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,_),_d(),op(),p._vnode=f},N={p:b,um:Je,m:Ht,r:Mi,mt:Ge,mc:j,pc:se,pbc:X,n:y,o:t};let U,oe;return e&&([U,oe]=e(N)),{render:L,hydrate:U,createApp:xy(L,U)}}function ei({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rp(t,e,n=!1){const i=t.children,r=e.children;if(V(i)&&V(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=An(r[s]),a.el=o.el),n||Rp(o,a)),a.type===ta&&(a.el=o.el)}}function Hy(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const $y=t=>t.__isTeleport,Vt=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),ja=Symbol.for("v-stc"),Kr=[];let kt=null;function Ap(t=!1){Kr.push(kt=t?null:[])}function Vy(){Kr.pop(),kt=Kr[Kr.length-1]||null}let as=1;function Ad(t){as+=t}function kp(t){return t.dynamicChildren=as>0?kt||qi:null,Vy(),as>0&&kt&&kt.push(t),t}function PN(t,e,n,i,r,s){return kp(Op(t,e,n,i,r,s,!0))}function Pp(t,e,n,i,r){return kp(ut(t,e,n,i,r,!0))}function vo(t){return t?t.__v_isVNode===!0:!1}function Pn(t,e){return t.type===e.type&&t.key===e.key}const na="__vInternal",Np=({key:t})=>t!=null?t:null,so=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ce(t)||qe(t)||G(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function Op(t,e=null,n=null,i=0,r=null,s=t===Vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Np(e),ref:e&&so(e),scopeId:Xo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ct};return a?(Wc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ce(n)?8:16),as>0&&!o&&kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&kt.push(l),l}const ut=jy;function jy(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Cy)&&(t=Ot),vo(t)){const a=_n(t,e,!0);return n&&Wc(a,n),as>0&&!s&&kt&&(a.shapeFlag&6?kt[kt.indexOf(t)]=a:kt.push(a)),a.patchFlag|=-2,a}if(tw(t)&&(t=t.__vccOpts),e){e=zy(e);let{class:a,style:l}=e;a&&!Ce(a)&&(e.class=Cc(a)),ye(l)&&(Jf(l)&&!V(l)&&(l=Ae({},l)),e.style=Ic(l))}const o=Ce(t)?1:cp(t)?128:$y(t)?64:ye(t)?4:G(t)?2:0;return Op(t,e,n,i,r,o,s,!0)}function zy(t){return t?Jf(t)||na in t?Ae({},t):t:null}function _n(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?Ky(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Np(a),ref:e&&e.ref?n&&r?V(r)?r.concat(so(e)):[r,so(e)]:so(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&_n(t.ssContent),ssFallback:t.ssFallback&&_n(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function qy(t=" ",e=0){return ut(ta,null,t,e)}function NN(t="",e=!1){return e?(Ap(),Pp(Ot,null,t)):ut(Ot,null,t)}function jt(t){return t==null||typeof t=="boolean"?ut(Ot):V(t)?ut(Vt,null,t.slice()):typeof t=="object"?An(t):ut(ta,null,String(t))}function An(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:_n(t)}function Wc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(V(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(na in e)?e._ctx=ct:r===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),i&64?(n=16,e=[qy(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ky(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Cc([e.class,i.class]));else if(r==="style")e.style=Ic([e.style,i.style]);else if(qo(r)){const s=e[r],o=i[r];o&&s!==o&&!(V(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function gt(t,e,n,i=null){bt(t,e,7,[n,i])}const Gy=bp();let Yy=0;function Qy(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Gy,s={uid:Yy++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ip(i,r),emitsOptions:lp(i,r),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:i.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ny.bind(null,s),t.ce&&t.ce(s),s}let Fe=null;const xp=()=>Fe||ct;let Bc,Wi,kd="__VUE_INSTANCE_SETTERS__";(Wi=bl()[kd])||(Wi=bl()[kd]=[]),Wi.push(t=>Fe=t),Bc=t=>{Wi.length>1?Wi.forEach(e=>e(t)):Wi[0](t)};const rr=t=>{Bc(t),t.scope.on()},pi=()=>{Fe&&Fe.scope.off(),Bc(null)};function Dp(t){return t.vnode.shapeFlag&4}let ls=!1;function Jy(t,e=!1){ls=e;const{props:n,children:i}=t.vnode,r=Dp(t);Dy(t,n,r,e),Fy(t,i);const s=r?Xy(t,e):void 0;return ls=!1,s}function Xy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Nc(new Proxy(t.ctx,Sy));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?ew(t):null;rr(t),_r();const s=Ln(i,t,0,[t.props,r]);if(mr(),pi(),xf(s)){if(s.then(pi,pi),e)return s.then(o=>{Pd(t,o,e)}).catch(o=>{Qo(o,t,0)});t.asyncDep=s}else Pd(t,s,e)}else Lp(t,e)}function Pd(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ye(e)&&(t.setupState=np(e)),Lp(t,n)}let Nd;function Lp(t,e,n){const i=t.type;if(!t.render){if(!e&&Nd&&!i.render){const r=i.template||Fc(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ae(Ae({isCustomElement:s,delimiters:a},o),l);i.render=Nd(r,c)}}t.render=i.render||Nt}rr(t),_r(),Ry(t),mr(),pi()}function Zy(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return it(t,"get","$attrs"),e[n]}}))}function ew(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Zy(t)},slots:t.slots,emit:t.emit,expose:e}}function ia(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(np(Nc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qr)return qr[n](t)},has(e,n){return n in e||n in qr}}))}function xl(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function tw(t){return G(t)&&"__vccOpts"in t}const _t=(t,e)=>Qv(t,e,ls);function Hc(t,e,n){const i=arguments.length;return i===2?ye(e)&&!V(e)?vo(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&vo(n)&&(n=[n]),ut(t,e,n))}const nw=Symbol.for("v-scx"),iw=()=>dn(nw),rw="3.3.4",sw="http://www.w3.org/2000/svg",li=typeof document!="undefined"?document:null,Od=li&&li.createElement("template"),ow={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e?li.createElementNS(sw,t):li.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>li.createTextNode(t),createComment:t=>li.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>li.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Od.innerHTML=i?`<svg>${t}</svg>`:t;const a=Od.content;if(i){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function aw(t,e,n){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lw(t,e,n){const i=t.style,r=Ce(n);if(n&&!r){if(e&&!Ce(e))for(const s in e)n[s]==null&&Dl(i,s,"");for(const s in n)Dl(i,s,n[s])}else{const s=i.display;r?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=s)}}const xd=/\s*!important$/;function Dl(t,e,n){if(V(n))n.forEach(i=>Dl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=cw(t,e);xd.test(n)?t.setProperty(gr(i),n.replace(xd,""),"important"):t[i]=n}}const Dd=["Webkit","Moz","ms"],za={};function cw(t,e){const n=za[e];if(n)return n;let i=Xt(e);if(i!=="filter"&&i in t)return za[e]=i;i=Go(i);for(let r=0;r<Dd.length;r++){const s=Dd[r]+i;if(s in t)return za[e]=s}return e}const Ld="http://www.w3.org/1999/xlink";function uw(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ld,e.slice(6,e.length)):t.setAttributeNS(Ld,e,n);else{const s=_v(e);n==null||s&&!Mf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function dw(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n==null?"":n;return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n==null?"":n;c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mf(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function hw(t,e,n,i){t.addEventListener(e,n,i)}function fw(t,e,n,i){t.removeEventListener(e,n,i)}function pw(t,e,n,i,r=null){const s=t._vei||(t._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=gw(e);if(i){const c=s[e]=vw(i,r);hw(t,a,c,l)}else o&&(fw(t,a,o,l),s[e]=void 0)}}const Md=/(?:Once|Passive|Capture)$/;function gw(t){let e;if(Md.test(t)){e={};let i;for(;i=t.match(Md);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gr(t.slice(2)),e]}let qa=0;const _w=Promise.resolve(),mw=()=>qa||(_w.then(()=>qa=0),qa=Date.now());function vw(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;bt(yw(i,n.value),e,5,[i])};return n.value=t,n.attached=mw(),n}function yw(t,e){if(V(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Fd=/^on[a-z]/,ww=(t,e,n,i,r=!1,s,o,a,l)=>{e==="class"?aw(t,i,r):e==="style"?lw(t,n,i):qo(e)?yc(e)||pw(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bw(t,e,i,r))?dw(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),uw(t,e,i,r))};function bw(t,e,n,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Fd.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Fd.test(e)&&Ce(n)?!1:e in t}const Cn="transition",Pr="animation",Mp=(t,{slots:e})=>Hc(hy,Ew(t),e);Mp.displayName="Transition";const Fp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Mp.props=Ae({},hp,Fp);const ti=(t,e=[])=>{V(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ud=t=>t?V(t)?t.some(e=>e.length>1):t.length>1:!1;function Ew(t){const e={};for(const F in t)F in Fp||(e[F]=t[F]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,m=Iw(r),b=m&&m[0],P=m&&m[1],{onBeforeEnter:x,onEnter:E,onEnterCancelled:O,onLeave:C,onLeaveCancelled:K,onBeforeAppear:ee=x,onAppear:le=E,onAppearCancelled:j=O}=e,ne=(F,ce,Ge)=>{ni(F,ce?u:a),ni(F,ce?c:o),Ge&&Ge()},X=(F,ce)=>{F._isLeaving=!1,ni(F,d),ni(F,g),ni(F,h),ce&&ce()},be=F=>(ce,Ge)=>{const nn=F?le:E,Ie=()=>ne(ce,F,Ge);ti(nn,[ce,Ie]),Wd(()=>{ni(ce,F?l:s),Tn(ce,F?u:a),Ud(nn)||Bd(ce,i,b,Ie)})};return Ae(e,{onBeforeEnter(F){ti(x,[F]),Tn(F,s),Tn(F,o)},onBeforeAppear(F){ti(ee,[F]),Tn(F,l),Tn(F,c)},onEnter:be(!1),onAppear:be(!0),onLeave(F,ce){F._isLeaving=!0;const Ge=()=>X(F,ce);Tn(F,d),Sw(),Tn(F,h),Wd(()=>{!F._isLeaving||(ni(F,d),Tn(F,g),Ud(C)||Bd(F,i,P,Ge))}),ti(C,[F,Ge])},onEnterCancelled(F){ne(F,!1),ti(O,[F])},onAppearCancelled(F){ne(F,!0),ti(j,[F])},onLeaveCancelled(F){X(F),ti(K,[F])}})}function Iw(t){if(t==null)return null;if(ye(t))return[Ka(t.enter),Ka(t.leave)];{const e=Ka(t);return[e,e]}}function Ka(t){return uv(t)}function Tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function ni(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function Wd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Cw=0;function Bd(t,e,n,i){const r=t._endId=++Cw,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Tw(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),s()},h=g=>{g.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,h)}function Tw(t,e){const n=window.getComputedStyle(t),i=m=>(n[m]||"").split(", "),r=i(`${Cn}Delay`),s=i(`${Cn}Duration`),o=Hd(r,s),a=i(`${Pr}Delay`),l=i(`${Pr}Duration`),c=Hd(a,l);let u=null,d=0,h=0;e===Cn?o>0&&(u=Cn,d=o,h=s.length):e===Pr?c>0&&(u=Pr,d=c,h=l.length):(d=Math.max(o,c),u=d>0?o>c?Cn:Pr:null,h=u?u===Cn?s.length:l.length:0);const g=u===Cn&&/\b(transform|all)(,|$)/.test(i(`${Cn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:g}}function Hd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>$d(n)+$d(t[i])))}function $d(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Sw(){return document.body.offsetHeight}const Rw=Ae({patchProp:ww},ow);let Vd;function Aw(){return Vd||(Vd=Wy(Rw))}const kw=(...t)=>{const e=Aw().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Pw(i);if(!r)return;const s=e._component;!G(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Pw(t){return Ce(t)?document.querySelector(t):t}function $c(t,e,n,i){return Object.defineProperty(t,e,{get:n,set:i,enumerable:!0}),t}const yi=ep(!1);let ra;function Nw(t,e){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(t)||/(opr)[\/]([\w.]+)/.exec(t)||/(vivaldi)[\/]([\w.]+)/.exec(t)||/(chrome|crios)[\/]([\w.]+)/.exec(t)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(t)||/(firefox|fxios)[\/]([\w.]+)/.exec(t)||/(webkit)[\/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(t)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:e[0]||""}}function Ow(t){return/(ipad)/.exec(t)||/(ipod)/.exec(t)||/(windows phone)/.exec(t)||/(iphone)/.exec(t)||/(kindle)/.exec(t)||/(silk)/.exec(t)||/(android)/.exec(t)||/(win)/.exec(t)||/(mac)/.exec(t)||/(linux)/.exec(t)||/(cros)/.exec(t)||/(playbook)/.exec(t)||/(bb)/.exec(t)||/(blackberry)/.exec(t)||[]}const Up="ontouchstart"in window||window.navigator.maxTouchPoints>0;function xw(t){ra={is:{...t}},delete t.mac,delete t.desktop;const e=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(t,{mobile:!0,ios:!0,platform:e,[e]:!0})}function Dw(t){const e=t.toLowerCase(),n=Ow(e),i=Nw(e,n),r={};i.browser&&(r[i.browser]=!0,r.version=i.version,r.versionNumber=parseInt(i.versionNumber,10)),i.platform&&(r[i.platform]=!0);const s=r.android||r.ios||r.bb||r.blackberry||r.ipad||r.iphone||r.ipod||r.kindle||r.playbook||r.silk||r["windows phone"];return s===!0||e.indexOf("mobile")>-1?(r.mobile=!0,r.edga||r.edgios?(r.edge=!0,i.browser="edge"):r.crios?(r.chrome=!0,i.browser="chrome"):r.fxios&&(r.firefox=!0,i.browser="firefox")):r.desktop=!0,(r.ipod||r.ipad||r.iphone)&&(r.ios=!0),r["windows phone"]&&(r.winphone=!0,delete r["windows phone"]),(r.chrome||r.opr||r.safari||r.vivaldi||r.mobile===!0&&r.ios!==!0&&s!==!0)&&(r.webkit=!0),r.edg&&(i.browser="edgechromium",r.edgeChromium=!0),(r.safari&&r.blackberry||r.bb)&&(i.browser="blackberry",r.blackberry=!0),r.safari&&r.playbook&&(i.browser="playbook",r.playbook=!0),r.opr&&(i.browser="opera",r.opera=!0),r.safari&&r.android&&(i.browser="android",r.android=!0),r.safari&&r.kindle&&(i.browser="kindle",r.kindle=!0),r.safari&&r.silk&&(i.browser="silk",r.silk=!0),r.vivaldi&&(i.browser="vivaldi",r.vivaldi=!0),r.name=i.browser,r.platform=i.platform,e.indexOf("electron")>-1?r.electron=!0:document.location.href.indexOf("-extension://")>-1?r.bex=!0:(window.Capacitor!==void 0?(r.capacitor=!0,r.nativeMobile=!0,r.nativeMobileWrapper="capacitor"):(window._cordovaNative!==void 0||window.cordova!==void 0)&&(r.cordova=!0,r.nativeMobile=!0,r.nativeMobileWrapper="cordova"),Up===!0&&r.mac===!0&&(r.desktop===!0&&r.safari===!0||r.nativeMobile===!0&&r.android!==!0&&r.ios!==!0&&r.ipad!==!0)&&xw(r)),r}const jd=navigator.userAgent||navigator.vendor||window.opera,Lw={has:{touch:!1,webStorage:!1},within:{iframe:!1}},vt={userAgent:jd,is:Dw(jd),has:{touch:Up},within:{iframe:window.self!==window.top}},Ll={install(t){const{$q:e}=t;yi.value===!0?(t.onSSRHydrated.push(()=>{Object.assign(e.platform,vt),yi.value=!1,ra=void 0}),e.platform=Ai(this)):e.platform=this}};{let t;$c(vt.has,"webStorage",()=>{if(t!==void 0)return t;try{if(window.localStorage)return t=!0,!0}catch{}return t=!1,!1}),vt.is.ios===!0&&window.navigator.vendor.toLowerCase().indexOf("apple"),yi.value===!0?Object.assign(Ll,vt,ra,Lw):Object.assign(Ll,vt)}var sa=(t,e)=>{const n=Ai(t);for(const i in t)$c(e,i,()=>n[i],r=>{n[i]=r});return e};const sr={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const t=Object.defineProperty({},"passive",{get(){Object.assign(sr,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,t),window.removeEventListener("qtest",null,t)}catch{}function cs(){}function ON(t){return t.button===0}function xN(t){return t.touches&&t.touches[0]?t=t.touches[0]:t.changedTouches&&t.changedTouches[0]?t=t.changedTouches[0]:t.targetTouches&&t.targetTouches[0]&&(t=t.targetTouches[0]),{top:t.clientY,left:t.clientX}}function DN(t){t.stopPropagation()}function zd(t){t.cancelable!==!1&&t.preventDefault()}function LN(t){t.cancelable!==!1&&t.preventDefault(),t.stopPropagation()}function MN(t,e){if(t===void 0||e===!0&&t.__dragPrevented===!0)return;const n=e===!0?i=>{i.__dragPrevented=!0,i.addEventListener("dragstart",zd,sr.notPassiveCapture)}:i=>{delete i.__dragPrevented,i.removeEventListener("dragstart",zd,sr.notPassiveCapture)};t.querySelectorAll("a, img").forEach(n)}function FN(t,e,n){const i=`__q_${e}_evt`;t[i]=t[i]!==void 0?t[i].concat(n):n,n.forEach(r=>{r[0].addEventListener(r[1],t[r[2]],sr[r[3]])})}function UN(t,e){const n=`__q_${e}_evt`;t[n]!==void 0&&(t[n].forEach(i=>{i[0].removeEventListener(i[1],t[i[2]],sr[i[3]])}),t[n]=void 0)}function Mw(t,e=250,n){let i=null;function r(){const s=arguments,o=()=>{i=null,n!==!0&&t.apply(this,s)};i!==null?clearTimeout(i):n===!0&&t.apply(this,s),i=setTimeout(o,e)}return r.cancel=()=>{i!==null&&clearTimeout(i)},r}const Ga=["sm","md","lg","xl"],{passive:qd}=sr;var Fw=sa({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:cs,setDebounce:cs,install({$q:t,onSSRHydrated:e}){if(t.screen=this,this.__installed===!0){t.config.screen!==void 0&&(t.config.screen.bodyClasses===!1?document.body.classList.remove(`screen--${this.name}`):this.__update(!0));return}const{visualViewport:n}=window,i=n||window,r=document.scrollingElement||document.documentElement,s=n===void 0||vt.is.mobile===!0?()=>[Math.max(window.innerWidth,r.clientWidth),Math.max(window.innerHeight,r.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-r.clientWidth,n.height*n.scale+window.innerHeight-r.clientHeight],o=t.config.screen!==void 0&&t.config.screen.bodyClasses===!0;this.__update=d=>{const[h,g]=s();if(g!==this.height&&(this.height=g),h!==this.width)this.width=h;else if(d!==!0)return;let m=this.sizes;this.gt.xs=h>=m.sm,this.gt.sm=h>=m.md,this.gt.md=h>=m.lg,this.gt.lg=h>=m.xl,this.lt.sm=h<m.sm,this.lt.md=h<m.md,this.lt.lg=h<m.lg,this.lt.xl=h<m.xl,this.xs=this.lt.sm,this.sm=this.gt.xs===!0&&this.lt.md===!0,this.md=this.gt.sm===!0&&this.lt.lg===!0,this.lg=this.gt.md===!0&&this.lt.xl===!0,this.xl=this.gt.lg,m=this.xs===!0&&"xs"||this.sm===!0&&"sm"||this.md===!0&&"md"||this.lg===!0&&"lg"||"xl",m!==this.name&&(o===!0&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${m}`)),this.name=m)};let a,l={},c=16;this.setSizes=d=>{Ga.forEach(h=>{d[h]!==void 0&&(l[h]=d[h])})},this.setDebounce=d=>{c=d};const u=()=>{const d=getComputedStyle(document.body);d.getPropertyValue("--q-size-sm")&&Ga.forEach(h=>{this.sizes[h]=parseInt(d.getPropertyValue(`--q-size-${h}`),10)}),this.setSizes=h=>{Ga.forEach(g=>{h[g]&&(this.sizes[g]=h[g])}),this.__update(!0)},this.setDebounce=h=>{a!==void 0&&i.removeEventListener("resize",a,qd),a=h>0?Mw(this.__update,h):this.__update,i.addEventListener("resize",a,qd)},this.setDebounce(c),Object.keys(l).length!==0?(this.setSizes(l),l=void 0):this.__update(),o===!0&&this.name==="xs"&&document.body.classList.add("screen--xs")};yi.value===!0?e.push(u):u()}});const je=sa({isActive:!1,mode:!1},{__media:void 0,set(t){je.mode=t,t==="auto"?(je.__media===void 0&&(je.__media=window.matchMedia("(prefers-color-scheme: dark)"),je.__updateMedia=()=>{je.set("auto")},je.__media.addListener(je.__updateMedia)),t=je.__media.matches):je.__media!==void 0&&(je.__media.removeListener(je.__updateMedia),je.__media=void 0),je.isActive=t===!0,document.body.classList.remove(`body--${t===!0?"light":"dark"}`),document.body.classList.add(`body--${t===!0?"dark":"light"}`)},toggle(){je.set(je.isActive===!1)},install({$q:t,onSSRHydrated:e,ssrContext:n}){const{dark:i}=t.config;if(t.dark=this,this.__installed===!0&&i===void 0)return;this.isActive=i===!0;const r=i!==void 0?i:!1;if(yi.value===!0){const s=a=>{this.__fromSSR=a},o=this.set;this.set=s,s(r),e.push(()=>{this.set=o,this.set(this.__fromSSR)})}else this.set(r)}}),Wp=()=>!0;function Uw(t){return typeof t=="string"&&t!==""&&t!=="/"&&t!=="#/"}function Ww(t){return t.startsWith("#")===!0&&(t=t.substring(1)),t.startsWith("/")===!1&&(t="/"+t),t.endsWith("/")===!0&&(t=t.substring(0,t.length-1)),"#"+t}function Bw(t){if(t.backButtonExit===!1)return()=>!1;if(t.backButtonExit==="*")return Wp;const e=["#/"];return Array.isArray(t.backButtonExit)===!0&&e.push(...t.backButtonExit.filter(Uw).map(Ww)),()=>e.includes(window.location.hash)}var Hw={__history:[],add:cs,remove:cs,install({$q:t}){if(this.__installed===!0)return;const{cordova:e,capacitor:n}=vt.is;if(e!==!0&&n!==!0)return;const i=t.config[e===!0?"cordova":"capacitor"];if(i!==void 0&&i.backButton===!1||n===!0&&(window.Capacitor===void 0||window.Capacitor.Plugins.App===void 0))return;this.add=o=>{o.condition===void 0&&(o.condition=Wp),this.__history.push(o)},this.remove=o=>{const a=this.__history.indexOf(o);a>=0&&this.__history.splice(a,1)};const r=Bw(Object.assign({backButtonExit:!0},i)),s=()=>{if(this.__history.length){const o=this.__history[this.__history.length-1];o.condition()===!0&&(this.__history.pop(),o.handler())}else r()===!0?navigator.app.exitApp():window.history.back()};e===!0?document.addEventListener("deviceready",()=>{document.addEventListener("backbutton",s,!1)}):window.Capacitor.Plugins.App.addListener("backButton",s)}},Kd={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh",expand:t=>t?`Expand "${t}"`:"Expand",collapse:t=>t?`Collapse "${t}"`:"Collapse"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:t=>t===1?"1 record selected.":(t===0?"No":t)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(t,e,n)=>t+"-"+e+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function Gd(){const t=Array.isArray(navigator.languages)===!0&&navigator.languages.length!==0?navigator.languages[0]:navigator.language;if(typeof t=="string")return t.split(/[-_]/).map((e,n)=>n===0?e.toLowerCase():n>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase()).join("-")}const Rt=sa({__langPack:{}},{getLocale:Gd,set(t=Kd,e){const n={...t,rtl:t.rtl===!0,getLocale:Gd};{if(n.set=Rt.set,Rt.__langConfig===void 0||Rt.__langConfig.noHtmlAttrs!==!0){const i=document.documentElement;i.setAttribute("dir",n.rtl===!0?"rtl":"ltr"),i.setAttribute("lang",n.isoName)}Object.assign(Rt.__langPack,n),Rt.props=n,Rt.isoName=n.isoName,Rt.nativeName=n.nativeName}},install({$q:t,lang:e,ssrContext:n}){t.lang=Rt.__langPack,Rt.__langConfig=t.config.lang,this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Kd)}});function $w(t,e,n=document.body){if(typeof t!="string")throw new TypeError("Expected a string as propName");if(typeof e!="string")throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${t}`,e)}let Bp=!1;function Vw(t){Bp=t.isComposing===!0}function jw(t){return Bp===!0||t!==Object(t)||t.isComposing===!0||t.qKeyEvent===!0}function WN(t,e){return jw(t)===!0?!1:[].concat(e).includes(t.keyCode)}function Hp(t){if(t.ios===!0)return"ios";if(t.android===!0)return"android"}function zw({is:t,has:e,within:n},i){const r=[t.desktop===!0?"desktop":"mobile",`${e.touch===!1?"no-":""}touch`];if(t.mobile===!0){const s=Hp(t);s!==void 0&&r.push("platform-"+s)}if(t.nativeMobile===!0){const s=t.nativeMobileWrapper;r.push(s),r.push("native-mobile"),t.ios===!0&&(i[s]===void 0||i[s].iosStatusBarPadding!==!1)&&r.push("q-ios-padding")}else t.electron===!0?r.push("electron"):t.bex===!0&&r.push("bex");return n.iframe===!0&&r.push("within-iframe"),r}function qw(){const{is:t}=vt,e=document.body.className,n=new Set(e.replace(/ {2}/g," ").split(" "));if(ra!==void 0)n.delete("desktop"),n.add("platform-ios"),n.add("mobile");else if(t.nativeMobile!==!0&&t.electron!==!0&&t.bex!==!0){if(t.desktop===!0)n.delete("mobile"),n.delete("platform-ios"),n.delete("platform-android"),n.add("desktop");else if(t.mobile===!0){n.delete("desktop"),n.add("mobile");const r=Hp(t);r!==void 0?(n.add(`platform-${r}`),n.delete(`platform-${r==="ios"?"android":"ios"}`)):(n.delete("platform-ios"),n.delete("platform-android"))}}vt.has.touch===!0&&(n.delete("no-touch"),n.add("touch")),vt.within.iframe===!0&&n.add("within-iframe");const i=Array.from(n).join(" ");e!==i&&(document.body.className=i)}function Kw(t){for(const e in t)$w(e,t[e])}var Gw={install(t){if(this.__installed!==!0){if(yi.value===!0)qw();else{const{$q:e}=t;e.config.brand!==void 0&&Kw(e.config.brand);const n=zw(vt,e.config);document.body.classList.add.apply(document.body.classList,n)}vt.is.ios===!0&&document.body.addEventListener("touchstart",cs),window.addEventListener("keydown",Vw,!0)}}},Yw={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}};const yo=sa({iconMapFn:null,__icons:{}},{set(t,e){const n={...t,rtl:t.rtl===!0};n.set=yo.set,Object.assign(yo.__icons,n)},install({$q:t,iconSet:e,ssrContext:n}){t.config.iconMapFn!==void 0&&(this.iconMapFn=t.config.iconMapFn),t.iconSet=this.__icons,$c(t,"iconMapFn",()=>this.iconMapFn,i=>{this.iconMapFn=i}),this.__installed===!0?e!==void 0&&this.set(e):this.set(e||Yw)}}),Qw="_q_",BN="_q_l_",HN="_q_pc_",$N="_q_fo_",VN="_q_tabs_",jN=()=>{},Yd={};let $p=!1;function Jw(){$p=!0}function Ya(t,e){if(t===e)return!0;if(t!==null&&e!==null&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,i;if(t.constructor===Array){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(Ya(t[i],e[i])!==!0)return!1;return!0}if(t.constructor===Map){if(t.size!==e.size)return!1;let s=t.entries();for(i=s.next();i.done!==!0;){if(e.has(i.value[0])!==!0)return!1;i=s.next()}for(s=t.entries(),i=s.next();i.done!==!0;){if(Ya(i.value[1],e.get(i.value[0]))!==!0)return!1;i=s.next()}return!0}if(t.constructor===Set){if(t.size!==e.size)return!1;const s=t.entries();for(i=s.next();i.done!==!0;){if(e.has(i.value[0])!==!0)return!1;i=s.next()}return!0}if(t.buffer!=null&&t.buffer.constructor===ArrayBuffer){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(t[i]!==e[i])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const r=Object.keys(t).filter(s=>t[s]!==void 0);if(n=r.length,n!==Object.keys(e).filter(s=>e[s]!==void 0).length)return!1;for(i=n;i--!==0;){const s=r[i];if(Ya(t[s],e[s])!==!0)return!1}return!0}return t!==t&&e!==e}function Qd(t){return t!==null&&typeof t=="object"&&Array.isArray(t)!==!0}const Jd=[Ll,Gw,je,Fw,Hw,Rt,yo];function Xd(t,e){e.forEach(n=>{n.install(t),n.__installed=!0})}function Xw(t,e,n){t.config.globalProperties.$q=n.$q,t.provide(Qw,n.$q),Xd(n,Jd),e.components!==void 0&&Object.values(e.components).forEach(i=>{Qd(i)===!0&&i.name!==void 0&&t.component(i.name,i)}),e.directives!==void 0&&Object.values(e.directives).forEach(i=>{Qd(i)===!0&&i.name!==void 0&&t.directive(i.name,i)}),e.plugins!==void 0&&Xd(n,Object.values(e.plugins).filter(i=>typeof i.install=="function"&&Jd.includes(i)===!1)),yi.value===!0&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach(i=>{i()}),n.$q.onSSRHydrated=()=>{}})}var Zw=function(t,e={}){const n={version:"2.12.2"};$p===!1?(e.config!==void 0&&Object.assign(Yd,e.config),n.config={...Yd},Jw()):n.config=e.config||{},Xw(t,e,{parentApp:t,$q:n,lang:e.lang,iconSet:e.iconSet,onSSRHydrated:[]})},eb={version:"2.12.2",install:Zw,lang:Rt,iconSet:yo};function tb(){return Vp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Vp(){return typeof navigator!="undefined"&&typeof window!="undefined"?window:typeof global!="undefined"?global:{}}const nb=typeof Proxy=="function",ib="devtools-plugin:setup",rb="plugin:settings:set";let Bi,Ml;function sb(){var t;return Bi!==void 0||(typeof window!="undefined"&&window.performance?(Bi=!0,Ml=window.performance):typeof global!="undefined"&&((t=global.perf_hooks)===null||t===void 0?void 0:t.performance)?(Bi=!0,Ml=global.perf_hooks.performance):Bi=!1),Bi}function ob(){return sb()?Ml.now():Date.now()}class ab{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const i={};if(e.settings)for(const o in e.settings){const a=e.settings[o];i[o]=a.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},i);try{const o=localStorage.getItem(r),a=JSON.parse(o);Object.assign(s,a)}catch{}this.fallbacks={getSettings(){return s},setSettings(o){try{localStorage.setItem(r,JSON.stringify(o))}catch{}s=o},now(){return ob()}},n&&n.on(rb,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function lb(t,e){const n=t,i=Vp(),r=tb(),s=nb&&n.enableEarlyProxy;if(r&&(i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))r.emit(ib,t,e);else{const o=s?new ab(n,r):null;(i.__VUE_DEVTOOLS_PLUGINS__=i.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var cb="store";function vr(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function jp(t){return t!==null&&typeof t=="object"}function ub(t){return t&&typeof t.then=="function"}function db(t,e){return function(){return t(e)}}function zp(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var i=e.indexOf(t);i>-1&&e.splice(i,1)}}function qp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;oa(t,n,[],t._modules.root,!0),Vc(t,n,e)}function Vc(t,e,n){var i=t._state,r=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var s=t._wrappedGetters,o={},a={},l=mv(!0);l.run(function(){vr(s,function(c,u){o[u]=db(c,t),a[u]=_t(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Ai({data:e}),t._scope=l,t.strict&&_b(t),i&&n&&t._withCommit(function(){i.data=null}),r&&r.stop()}function oa(t,e,n,i,r){var s=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=i),!s&&!r){var a=jc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=i.state})}var c=i.context=hb(t,o,n);i.forEachMutation(function(u,d){var h=o+d;fb(t,h,u,c)}),i.forEachAction(function(u,d){var h=u.root?d:o+d,g=u.handler||u;pb(t,h,g,c)}),i.forEachGetter(function(u,d){var h=o+d;gb(t,h,u,c)}),i.forEachChild(function(u,d){oa(t,e,n.concat(d),u,r)})}function hb(t,e,n){var i=e==="",r={dispatch:i?t.dispatch:function(s,o,a){var l=wo(s,o,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:i?t.commit:function(s,o,a){var l=wo(s,o,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return Kp(t,e)}},state:{get:function(){return jc(t.state,n)}}}),r}function Kp(t,e){if(!t._makeLocalGettersCache[e]){var n={},i=e.length;Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return t.getters[r]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function fb(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(o){n.call(t,i.state,o)})}function pb(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(o){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},o);return ub(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function gb(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(s){return n(i.state,i.getters,s.state,s.getters)})}function _b(t){fi(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function jc(t,e){return e.reduce(function(n,i){return n[i]},t)}function wo(t,e,n){return jp(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var mb="vuex bindings",Zd="vuex:mutations",Qa="vuex:actions",Hi="vuex",vb=0;function yb(t,e){lb({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[mb]},function(n){n.addTimelineLayer({id:Zd,label:"Vuex Mutations",color:eh}),n.addTimelineLayer({id:Qa,label:"Vuex Actions",color:eh}),n.addInspector({id:Hi,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(i){if(i.app===t&&i.inspectorId===Hi)if(i.filter){var r=[];Jp(r,e._modules.root,i.filter,""),i.rootNodes=r}else i.rootNodes=[Qp(e._modules.root,"")]}),n.on.getInspectorState(function(i){if(i.app===t&&i.inspectorId===Hi){var r=i.nodeId;Kp(e,r),i.state=Eb(Cb(e._modules,r),r==="root"?e.getters:e._makeLocalGettersCache,r)}}),n.on.editInspectorState(function(i){if(i.app===t&&i.inspectorId===Hi){var r=i.nodeId,s=i.path;r!=="root"&&(s=r.split("/").filter(Boolean).concat(s)),e._withCommit(function(){i.set(e._state.data,s,i.state.value)})}}),e.subscribe(function(i,r){var s={};i.payload&&(s.payload=i.payload),s.state=r,n.notifyComponentUpdate(),n.sendInspectorTree(Hi),n.sendInspectorState(Hi),n.addTimelineEvent({layerId:Zd,event:{time:Date.now(),title:i.type,data:s}})}),e.subscribeAction({before:function(i,r){var s={};i.payload&&(s.payload=i.payload),i._id=vb++,i._time=Date.now(),s.state=r,n.addTimelineEvent({layerId:Qa,event:{time:i._time,title:i.type,groupId:i._id,subtitle:"start",data:s}})},after:function(i,r){var s={},o=Date.now()-i._time;s.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},i.payload&&(s.payload=i.payload),s.state=r,n.addTimelineEvent({layerId:Qa,event:{time:Date.now(),title:i.type,groupId:i._id,subtitle:"end",data:s}})}})})}var eh=8702998,wb=6710886,bb=16777215,Gp={label:"namespaced",textColor:bb,backgroundColor:wb};function Yp(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Qp(t,e){return{id:e||"root",label:Yp(e),tags:t.namespaced?[Gp]:[],children:Object.keys(t._children).map(function(n){return Qp(t._children[n],e+n+"/")})}}function Jp(t,e,n,i){i.includes(n)&&t.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:e.namespaced?[Gp]:[]}),Object.keys(e._children).forEach(function(r){Jp(t,e._children[r],n,i+r+"/")})}function Eb(t,e,n){e=n==="root"?e:e[n];var i=Object.keys(e),r={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(i.length){var s=Ib(e);r.getters=Object.keys(s).map(function(o){return{key:o.endsWith("/")?Yp(o):o,editable:!1,value:Fl(function(){return s[o]})}})}return r}function Ib(t){var e={};return Object.keys(t).forEach(function(n){var i=n.split("/");if(i.length>1){var r=e,s=i.pop();i.forEach(function(o){r[o]||(r[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),r=r[o]._custom.value}),r[s]=Fl(function(){return t[n]})}else e[n]=Fl(function(){return t[n]})}),e}function Cb(t,e){var n=e.split("/").filter(function(i){return i});return n.reduce(function(i,r,s){var o=i[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+e+'".');return s===n.length-1?o:o._children},e==="root"?t:t.root._children)}function Fl(t){try{return t()}catch(e){return e}}var Wt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var i=e.state;this.state=(typeof i=="function"?i():i)||{}},Xp={namespaced:{configurable:!0}};Xp.namespaced.get=function(){return!!this._rawModule.namespaced};Wt.prototype.addChild=function(e,n){this._children[e]=n};Wt.prototype.removeChild=function(e){delete this._children[e]};Wt.prototype.getChild=function(e){return this._children[e]};Wt.prototype.hasChild=function(e){return e in this._children};Wt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Wt.prototype.forEachChild=function(e){vr(this._children,e)};Wt.prototype.forEachGetter=function(e){this._rawModule.getters&&vr(this._rawModule.getters,e)};Wt.prototype.forEachAction=function(e){this._rawModule.actions&&vr(this._rawModule.actions,e)};Wt.prototype.forEachMutation=function(e){this._rawModule.mutations&&vr(this._rawModule.mutations,e)};Object.defineProperties(Wt.prototype,Xp);var ki=function(e){this.register([],e,!1)};ki.prototype.get=function(e){return e.reduce(function(n,i){return n.getChild(i)},this.root)};ki.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(i,r){return n=n.getChild(r),i+(n.namespaced?r+"/":"")},"")};ki.prototype.update=function(e){Zp([],this.root,e)};ki.prototype.register=function(e,n,i){var r=this;i===void 0&&(i=!0);var s=new Wt(n,i);if(e.length===0)this.root=s;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],s)}n.modules&&vr(n.modules,function(a,l){r.register(e.concat(l),a,i)})};ki.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1],r=n.getChild(i);!r||!r.runtime||n.removeChild(i)};ki.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),i=e[e.length-1];return n?n.hasChild(i):!1};function Zp(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return;Zp(t.concat(i),e.getChild(i),n.modules[i])}}function Tb(t){return new rt(t)}var rt=function(e){var n=this;e===void 0&&(e={});var i=e.plugins;i===void 0&&(i=[]);var r=e.strict;r===void 0&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new ki(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=s;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(h,g){return l.call(o,h,g)},this.commit=function(h,g,m){return c.call(o,h,g,m)},this.strict=r;var u=this._modules.root.state;oa(this,u,[],this._modules.root),Vc(this,u),i.forEach(function(d){return d(n)})},zc={state:{configurable:!0}};rt.prototype.install=function(e,n){e.provide(n||cb,this),e.config.globalProperties.$store=this;var i=this._devtools!==void 0?this._devtools:!1;i&&yb(e,this)};zc.state.get=function(){return this._state.data};zc.state.set=function(t){};rt.prototype.commit=function(e,n,i){var r=this,s=wo(e,n,i),o=s.type,a=s.payload,l={type:o,payload:a},c=this._mutations[o];!c||(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,r.state)}))};rt.prototype.dispatch=function(e,n){var i=this,r=wo(e,n),s=r.type,o=r.payload,a={type:s,payload:o},l=this._actions[s];if(!!l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,i.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,d){c.then(function(h){try{i._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,i.state)})}catch{}u(h)},function(h){try{i._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,i.state,h)})}catch{}d(h)})})}};rt.prototype.subscribe=function(e,n){return zp(e,this._subscribers,n)};rt.prototype.subscribeAction=function(e,n){var i=typeof e=="function"?{before:e}:e;return zp(i,this._actionSubscribers,n)};rt.prototype.watch=function(e,n,i){var r=this;return fi(function(){return e(r.state,r.getters)},n,Object.assign({},i))};rt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};rt.prototype.registerModule=function(e,n,i){i===void 0&&(i={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),oa(this,this.state,e,this._modules.get(e),i.preserveState),Vc(this,this.state)};rt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var i=jc(n.state,e.slice(0,-1));delete i[e[e.length-1]]}),qp(this)};rt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};rt.prototype.hotUpdate=function(e){this._modules.update(e),qp(this,!0)};rt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(rt.prototype,zc);var zN=Kc(function(t,e){var n={};return qc(e).forEach(function(i){var r=i.key,s=i.val;n[r]=function(){var a=this.$store.state,l=this.$store.getters;if(t){var c=Gc(this.$store,"mapState",t);if(!c)return;a=c.context.state,l=c.context.getters}return typeof s=="function"?s.call(this,a,l):a[s]},n[r].vuex=!0}),n}),qN=Kc(function(t,e){var n={};return qc(e).forEach(function(i){var r=i.key,s=i.val;s=t+s,n[r]=function(){if(!(t&&!Gc(this.$store,"mapGetters",t)))return this.$store.getters[s]},n[r].vuex=!0}),n}),Sb=Kc(function(t,e){var n={};return qc(e).forEach(function(i){var r=i.key,s=i.val;n[r]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.dispatch;if(t){var u=Gc(this.$store,"mapActions",t);if(!u)return;c=u.context.dispatch}return typeof s=="function"?s.apply(this,[c].concat(a)):c.apply(this.$store,[s].concat(a))}}),n});function qc(t){return Rb(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function Rb(t){return Array.isArray(t)||jp(t)}function Kc(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function Gc(t,e,n){var i=t._modulesNamespaceMap[n];return i}var Ab=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n};const kb={methods:{...Sb("store1",["handleAuthStateChange"])},mounted(){this.handleAuthStateChange()}};function Pb(t,e,n,i,r,s){const o=Iy("router-view");return Ap(),Pp(o)}var Nb=Ab(kb,[["render",Pb]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R=function(t,e){if(!t)throw yr(e)},yr=function(t){return new Error("Firebase Database ("+eg.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Ob=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(h=64)),i.push(n[u],n[d],n[h],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ob(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new xb;const h=s<<2|a>>4;if(i.push(h),c!==64){const g=a<<4&240|c>>2;if(i.push(g),d!==64){const m=c<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ng=function(t){const e=tg(t);return Yc.encodeByteArray(e,!0)},bo=function(t){return ng(t).replace(/\./g,"")},Eo=function(t){try{return Yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(t){return us(void 0,t)}function us(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Lb(n)||(t[n]=us(t[n],e[n]));return t}function Lb(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mb(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb=()=>Mb().__FIREBASE_DEFAULTS__,Ub=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wb=()=>{if(typeof document=="undefined")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Eo(t[1]);return e&&JSON.parse(e)},Qc=()=>{try{return Fb()||Ub()||Wb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ig=()=>{var t;return(t=Qc())===null||t===void 0?void 0:t.config},Bb=t=>{var e;return(e=Qc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[bo(JSON.stringify(n)),bo(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jc(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function rg(){var t;const e=(t=Qc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $b(){return typeof self=="object"&&self.self===self}function sg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function aa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function og(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ag(){return eg.NODE_ADMIN===!0}function Io(){try{return typeof indexedDB=="object"}catch{return!1}}function Vb(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb="FirebaseError";class tt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=jb,Object.setPrototypeOf(this,tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pi.prototype.create)}}class Pi{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?zb(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new tt(r,a,i)}}function zb(t,e){return t.replace(qb,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const qb=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(t){return JSON.parse(t)}function Ne(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=function(t){let e={},n={},i={},r="";try{const s=t.split(".");e=ds(Eo(s[0])||""),n=ds(Eo(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:r}},Kb=function(t){const e=lg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Gb=function(t){const e=lg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function wi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Co(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function To(t,e,n){const i={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=e.call(n,t[r],r,t));return i}function Ul(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(th(s)&&th(o)){if(!Ul(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function th(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function $r(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)i[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const h=(r<<5|r>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}}function cg(t,e){const n=new Qb(t,e);return n.subscribe.bind(n)}class Qb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Jb(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Ja),r.error===void 0&&(r.error=Ja),r.complete===void 0&&(r.complete=Ja);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console!="undefined"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ja(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $=function(t,e,n,i){let r;if(i<e?r="at least "+e:i>n&&(r=n===0?"none":"no more than "+n),r){const s=t+" failed: Was called with "+i+(i===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(s)}};function nt(t,e){return`${t} failed: ${e} argument `}function De(t,e,n,i){if(!(i&&!n)&&typeof n!="function")throw new Error(nt(t,e)+"must be a valid function.")}function nh(t,e,n,i){if(!(i&&!n)&&(typeof n!="object"||n===null))throw new Error(nt(t,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,R(i<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},la=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){return t&&t._delegate?t._delegate:t}class Mt{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Ze;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eE(e))try{this.getOrInitializeService({instanceIdentifier:ii})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ii){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ii){return this.instances.has(e)}getOptions(e=ii){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(!!i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Zb(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ii){return this.component?this.component.multipleInstances?e:ii:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zb(t){return t===ii?void 0:t}function eE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ug(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=[];var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const hg={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},tE=de.INFO,nE={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},iE=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=nE[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ps{constructor(e){this.name=e,this._logLevel=tE,this._logHandler=iE,this._userLogHandler=null,Xc.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}function rE(t){Xc.forEach(e=>{e.setLogLevel(t)})}function sE(t,e){for(const n of Xc){let i=null;e&&e.level&&(i=hg[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(i!=null?i:r.logLevel)&&t({level:de[s].toLowerCase(),message:a,args:o,type:r.name})}}}const oE=(t,e)=>e.some(n=>t instanceof n);let ih,rh;function aE(){return ih||(ih=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lE(){return rh||(rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fg=new WeakMap,Wl=new WeakMap,pg=new WeakMap,Xa=new WeakMap,Zc=new WeakMap;function cE(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mn(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fg.set(n,t)}).catch(()=>{}),Zc.set(e,t),e}function uE(t){if(Wl.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wl.set(t,e)}let Bl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dE(t){Bl=t(Bl)}function hE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Za(this),e,...n);return pg.set(i,e.sort?e.sort():[e]),Mn(i)}:lE().includes(t)?function(...e){return t.apply(Za(this),e),Mn(fg.get(this))}:function(...e){return Mn(t.apply(Za(this),e))}}function fE(t){return typeof t=="function"?hE(t):(t instanceof IDBTransaction&&uE(t),oE(t,aE())?new Proxy(t,Bl):t)}function Mn(t){if(t instanceof IDBRequest)return cE(t);if(Xa.has(t))return Xa.get(t);const e=fE(t);return e!==t&&(Xa.set(t,e),Zc.set(e,t)),e}const Za=t=>Zc.get(t);function pE(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Mn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const gE=["get","getKey","getAll","getAllKeys","count"],_E=["put","add","delete","clear"],el=new Map;function sh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(el.get(e))return el.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=_E.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||gE.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return el.set(e,s),s}dE(t=>({...t,get:(e,n,i)=>sh(e,n)||t.get(e,n,i),has:(e,n)=>!!sh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vE(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function vE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hl="@firebase/app",oh="0.9.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new Ps("@firebase/app"),yE="@firebase/app-compat",wE="@firebase/analytics-compat",bE="@firebase/analytics",EE="@firebase/app-check-compat",IE="@firebase/app-check",CE="@firebase/auth",TE="@firebase/auth-compat",SE="@firebase/database",RE="@firebase/database-compat",AE="@firebase/functions",kE="@firebase/functions-compat",PE="@firebase/installations",NE="@firebase/installations-compat",OE="@firebase/messaging",xE="@firebase/messaging-compat",DE="@firebase/performance",LE="@firebase/performance-compat",ME="@firebase/remote-config",FE="@firebase/remote-config-compat",UE="@firebase/storage",WE="@firebase/storage-compat",BE="@firebase/firestore",HE="@firebase/firestore-compat",$E="firebase",VE="10.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="[DEFAULT]",jE={[Hl]:"fire-core",[yE]:"fire-core-compat",[bE]:"fire-analytics",[wE]:"fire-analytics-compat",[IE]:"fire-app-check",[EE]:"fire-app-check-compat",[CE]:"fire-auth",[TE]:"fire-auth-compat",[SE]:"fire-rtdb",[RE]:"fire-rtdb-compat",[AE]:"fire-fn",[kE]:"fire-fn-compat",[PE]:"fire-iid",[NE]:"fire-iid-compat",[OE]:"fire-fcm",[xE]:"fire-fcm-compat",[DE]:"fire-perf",[LE]:"fire-perf-compat",[ME]:"fire-rc",[FE]:"fire-rc-compat",[UE]:"fire-gcs",[WE]:"fire-gcs-compat",[BE]:"fire-fst",[HE]:"fire-fst-compat","fire-js":"fire-js",[$E]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Map,hs=new Map;function So(t,e){try{t.container.addComponent(e)}catch(n){bi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gg(t,e){t.container.addOrOverwriteComponent(e)}function Vn(t){const e=t.name;if(hs.has(e))return bi.debug(`There were multiple attempts to register component ${e}.`),!1;hs.set(e,t);for(const n of $n.values())So(n,t);return!0}function _g(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zE(t,e,n=Hn){_g(t,e).clearInstance(n)}function qE(){hs.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},hn=new Pi("app","Firebase",KE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=VE;function eu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Hn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw hn.create("bad-app-name",{appName:String(r)});if(n||(n=ig()),!n)throw hn.create("no-options");const s=$n.get(r);if(s){if(Ul(n,s.options)&&Ul(i,s.config))return s;throw hn.create("duplicate-app",{appName:r})}const o=new dg(r);for(const l of hs.values())o.addComponent(l);const a=new GE(n,i,o);return $n.set(r,a),a}function YE(t=Hn){const e=$n.get(t);if(!e&&t===Hn&&ig())return eu();if(!e)throw hn.create("no-app",{appName:t});return e}function QE(){return Array.from($n.values())}async function mg(t){const e=t.name;$n.has(e)&&($n.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function xt(t,e,n){var i;let r=(i=jE[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bi.warn(a.join(" "));return}Vn(new Mt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function vg(t,e){if(t!==null&&typeof t!="function")throw hn.create("invalid-log-argument");sE(t,e)}function yg(t){rE(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="firebase-heartbeat-database",XE=1,fs="firebase-heartbeat-store";let tl=null;function wg(){return tl||(tl=pE(JE,XE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fs)}}}).catch(t=>{throw hn.create("idb-open",{originalErrorMessage:t.message})})),tl}async function ZE(t){try{return await(await wg()).transaction(fs).objectStore(fs).get(bg(t))}catch(e){if(e instanceof tt)bi.warn(e.message);else{const n=hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bi.warn(n.message)}}}async function ah(t,e){try{const i=(await wg()).transaction(fs,"readwrite");await i.objectStore(fs).put(e,bg(t)),await i.done}catch(n){if(n instanceof tt)bi.warn(n.message);else{const i=hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bi.warn(i.message)}}}function bg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=1024,tI=30*24*60*60*1e3;class nI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rI(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=lh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=tI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=lh(),{heartbeatsToSend:n,unsentEntries:i}=iI(this._heartbeatsCache.heartbeats),r=bo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function lh(){return new Date().toISOString().substring(0,10)}function iI(t,e=eI){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ch(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ch(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class rI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Io()?Vb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ah(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ah(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ch(t){return bo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){Vn(new Mt("platform-logger",e=>new mE(e),"PRIVATE")),Vn(new Mt("heartbeat",e=>new nI(e),"PRIVATE")),xt(Hl,oh,t),xt(Hl,oh,"esm2017"),xt("fire-js","")}sI("");var oI=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Qn,_DEFAULT_ENTRY_NAME:Hn,_addComponent:So,_addOrOverwriteComponent:gg,_apps:$n,_clearComponents:qE,_components:hs,_getProvider:_g,_registerComponent:Vn,_removeServiceInstance:zE,deleteApp:mg,getApp:YE,getApps:QE,initializeApp:eu,onLog:vg,registerVersion:xt,setLogLevel:yg,FirebaseError:tt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n){this._delegate=e,this.firebase=n,So(e,new Mt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),mg(this._delegate)))}_getService(e,n=Hn){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=Hn){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){So(this._delegate,e)}_addOrOverwriteComponent(e){gg(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},uh=new Pi("app-compat","Firebase",lI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(t){const e={},n={__esModule:!0,initializeApp:s,app:r,registerVersion:xt,setLogLevel:yg,onLog:vg,apps:null,SDK_VERSION:Qn,INTERNAL:{registerComponent:a,removeApp:i,useAsService:l,modularAPIs:oI}};n.default=n,Object.defineProperty(n,"apps",{get:o});function i(c){delete e[c]}function r(c){if(c=c||Hn,!ht(e,c))throw uh.create("no-app",{appName:c});return e[c]}r.App=t;function s(c,u={}){const d=eu(c,u);if(ht(e,d.name))return e[d.name];const h=new t(d,n);return e[d.name]=h,h}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const u=c.name,d=u.replace("-compat","");if(Vn(c)&&c.type==="PUBLIC"){const h=(g=r())=>{if(typeof g[d]!="function")throw uh.create("invalid-app-argument",{appName:u});return g[d]()};c.serviceProps!==void 0&&us(h,c.serviceProps),n[d]=h,t.prototype[d]=function(...g){return this._getService.bind(this,u).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[d]:null}function l(c,u){return u==="serverAuth"?null:u}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(){const t=cI(aI);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Eg,extendNamespace:e,createSubscribe:cg,ErrorFactory:Pi,deepExtend:us});function e(n){us(t,n)}return t}const uI=Eg();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=new Ps("@firebase/app-compat"),dI="@firebase/app-compat",hI="0.2.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){xt(dI,hI,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if($b()&&self.firebase!==void 0){dh.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&dh.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const wr=uI;fI();var pI="firebase",gI="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wr.registerVersion(pI,gI,"app-compat");var _I="firebase",mI="10.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(_I,mI,"app");function tu(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}const Nr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},$i={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Ig(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yI=vI,wI=Ig,Cg=new Pi("auth","Firebase",Ig());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Ps("@firebase/auth");function bI(t,...e){Ro.logLevel<=de.WARN&&Ro.warn(`Auth (${Qn}): ${t}`,...e)}function oo(t,...e){Ro.logLevel<=de.ERROR&&Ro.error(`Auth (${Qn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,...e){throw nu(t,...e)}function He(t,...e){return nu(t,...e)}function Tg(t,e,n){const i=Object.assign(Object.assign({},wI()),{[e]:n});return new Pi("auth","Firebase",i).create(e,{appName:t.name})}function br(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&$e(t,"argument-error"),Tg(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nu(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Cg.create(t,...e)}function S(t,e,...n){if(!t)throw nu(e,...n)}function Qt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw oo(e),new Error(e)}function Ft(t,e){t||Qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function iu(){return hh()==="http:"||hh()==="https:"}function hh(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iu()||sg()||"connection"in navigator)?navigator.onLine:!0}function II(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ft(n>e,"Short delay should be less than long delay!"),this.isMobile=Jc()||aa()}get(){return EI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(t,e){Ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new Ns(3e4,6e4);function Pe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oe(t,e,n,i,r={}){return Rg(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Ni(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Sg.fetch()(Ag(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Rg(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},CI),e);try{const r=new SI(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Vr(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Vr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Vr(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Tg(t,u,c);$e(t,u)}}catch(r){if(r instanceof tt)throw r;$e(t,"network-request-failed",{message:String(r)})}}async function wn(t,e,n,i,r={}){const s=await Oe(t,e,n,i,r);return"mfaPendingCredential"in s&&$e(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ag(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?ru(t.config,r):`${t.config.apiScheme}://${r}`}class SI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(He(this.auth,"network-request-failed")),TI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=He(t,e,i);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RI(t,e){return Oe(t,"POST","/v1/accounts:delete",e)}async function AI(t,e){return Oe(t,"POST","/v1/accounts:update",e)}async function kI(t,e){return Oe(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PI(t,e=!1){const n=z(t),i=await n.getIdToken(e),r=ca(i);S(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Gr(nl(r.auth_time)),issuedAtTime:Gr(nl(r.iat)),expirationTime:Gr(nl(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nl(t){return Number(t)*1e3}function ca(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const r=Eo(n);return r?JSON.parse(r):(oo("Failed to decode base64 JWT payload"),null)}catch(r){return oo("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function NI(t){const e=ca(t);return S(e,"internal-error"),S(typeof e.exp!="undefined","internal-error"),S(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mn(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof tt&&OI(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function OI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gr(this.lastLoginAt),this.creationTime=Gr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t){var e;const n=t.auth,i=await t.getIdToken(),r=await mn(t,kI(n,{idToken:i}));S(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MI(s.providerUserInfo):[],a=LI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new kg(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function DI(t){const e=z(t);await gs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LI(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function MI(t){return t.map(e=>{var{providerId:n}=e,i=tu(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e){const n=await Rg(t,{},async()=>{const i=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Ag(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sg.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S(typeof e.idToken!="undefined","internal-error"),S(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):NI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await FI(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new _s;return i&&(S(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(S(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(S(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){S(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class gi{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=tu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mn(this,this.stsTokenManager.getToken(this.auth,e));return S(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PI(this,e)}reload(){return DI(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await gs(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mn(this,RI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:C,isAnonymous:K,providerData:ee,stsTokenManager:le}=n;S(O&&le,e,"internal-error");const j=_s.fromJSON(this.name,le);S(typeof O=="string",e,"internal-error"),Sn(d,e.name),Sn(h,e.name),S(typeof C=="boolean",e,"internal-error"),S(typeof K=="boolean",e,"internal-error"),Sn(g,e.name),Sn(m,e.name),Sn(b,e.name),Sn(P,e.name),Sn(x,e.name),Sn(E,e.name);const ne=new gi({uid:O,auth:e,email:h,emailVerified:C,displayName:d,isAnonymous:K,photoURL:m,phoneNumber:g,tenantId:b,stsTokenManager:j,createdAt:x,lastLoginAt:E});return ee&&Array.isArray(ee)&&(ne.providerData=ee.map(X=>Object.assign({},X))),P&&(ne._redirectEventId=P),ne}static async _fromIdTokenResponse(e,n,i=!1){const r=new _s;r.updateFromServerResponse(n);const s=new gi({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await gs(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=new Map;function dt(t){Ft(t instanceof Function,"Expected a class definition");let e=fh.get(t);return e?(Ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pg.type="NONE";const or=Pg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t,e,n){return`firebase:${t}:${e}:${n}`}class Ji{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=_i(this.userKey,r.apiKey,s),this.fullPersistenceKey=_i("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ji(dt(or),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||dt(or);const o=_i(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=gi._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ji(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ji(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dg(e))return"Blackberry";if(Lg(e))return"Webos";if(su(e))return"Safari";if((e.includes("chrome/")||Og(e))&&!e.includes("edge/"))return"Chrome";if(Os(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Ng(t=ke()){return/firefox\//i.test(t)}function su(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Og(t=ke()){return/crios\//i.test(t)}function xg(t=ke()){return/iemobile/i.test(t)}function Os(t=ke()){return/android/i.test(t)}function Dg(t=ke()){return/blackberry/i.test(t)}function Lg(t=ke()){return/webos/i.test(t)}function Er(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UI(t=ke()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function WI(t=ke()){var e;return Er(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function BI(){return og()&&document.documentMode===10}function Mg(t=ke()){return Er(t)||Os(t)||Lg(t)||Dg(t)||/windows phone/i.test(t)||xg(t)}function HI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t,e=[]){let n;switch(t){case"Browser":n=ph(ke());break;case"Worker":n=`${ph(ke())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${i}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t){return(await Oe(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Ug(t,e){return Oe(t,"GET","/v2/recaptchaConfig",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(t){return t!==void 0&&t.getResponse!==void 0}function _h(t){return t!==void 0&&t.enterprise!==void 0}class Wg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ou(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=He("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",VI().appendChild(i)})}function Bg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const jI="https://www.google.com/recaptcha/enterprise.js?render=",zI="recaptcha-enterprise",qI="NO_RECAPTCHA";class Hg{constructor(e){this.type=zI,this.auth=Te(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ug(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Wg(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;_h(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&_h(window.grecaptcha))r(a,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}ou(jI+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function jn(t,e,n,i=!1){const r=new Hg(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new mh(this),this.idTokenSubscription=new mh(this),this.beforeStateQueue=new KI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ji.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=II()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?z(e):null;return n&&S(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}async initializeRecaptchaConfig(){const e=await Ug(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Wg(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Hg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pi("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;S(n,this,"argument-error"),this.redirectPersistenceManager=await Ji.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return S(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Fg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&bI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Te(t){return z(t)}class mh{constructor(e){this.auth=e,this.observer=null,this.addObserver=cg(n=>this.observer=n)}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function YI(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function QI(t,e,n){const i=Te(t);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=$g(e),{host:o,port:a}=JI(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||XI()}function $g(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function JI(t){const e=$g(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:vh(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:vh(o)}}}function vh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Qt("not implemented")}_getIdTokenResponse(e){return Qt("not implemented")}_linkToIdToken(e,n){return Qt("not implemented")}_getReauthenticationResolver(e){return Qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(t,e){return Oe(t,"POST","/v1/accounts:resetPassword",Pe(t,e))}async function jg(t,e){return Oe(t,"POST","/v1/accounts:update",e)}async function ZI(t,e){return Oe(t,"POST","/v1/accounts:update",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function il(t,e){return wn(t,"POST","/v1/accounts:signInWithPassword",Pe(t,e))}async function ua(t,e){return Oe(t,"POST","/v1/accounts:sendOobCode",Pe(t,e))}async function eC(t,e){return ua(t,e)}async function rl(t,e){return ua(t,e)}async function sl(t,e){return ua(t,e)}async function tC(t,e){return ua(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nC(t,e){return wn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}async function iC(t,e){return wn(t,"POST","/v1/accounts:signInWithEmailLink",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Ir{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ms(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new ms(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await jn(e,i,"signInWithPassword");return il(e,r)}else return il(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await jn(e,i,"signInWithPassword");return il(e,s)}else return Promise.reject(r)});case"emailLink":return nC(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return jg(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iC(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e){return wn(t,"POST","/v1/accounts:signInWithIdp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="http://localhost";class Zt extends Ir{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=tu(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Zt(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,fn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fn(e,n)}buildRequest(){const e={requestUri:rC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(t,e){return Oe(t,"POST","/v1/accounts:sendVerificationCode",Pe(t,e))}async function oC(t,e){return wn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e))}async function aC(t,e){const n=await wn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,e));if(n.temporaryProof)throw Vr(t,"account-exists-with-different-credential",n);return n}const lC={USER_NOT_FOUND:"user-not-found"};async function cC(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return wn(t,"POST","/v1/accounts:signInWithPhoneNumber",Pe(t,n),lC)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Ir{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new mi({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new mi({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return oC(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return aC(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return cC(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new mi({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dC(t){const e=zi($r(t)).link,n=e?zi($r(e)).deep_link_id:null,i=zi($r(t)).deep_link_id;return(i?zi($r(i)).link:null)||i||n||e||t}class da{constructor(e){var n,i,r,s,o,a;const l=zi($r(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=uC((r=l.mode)!==null&&r!==void 0?r:null);S(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dC(e);try{return new da(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.providerId=Jn.PROVIDER_ID}static credential(e,n){return ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=da.parseLink(n);return S(i,"argument-error"),ms._fromEmailAndCode(e,i.code,i.tenantId)}}Jn.PROVIDER_ID="password";Jn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends bn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Xi extends Cr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return S("providerId"in n&&"signInMethod"in n,"argument-error"),Zt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),Zt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Xi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Xi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:o,providerId:a}=e;if(!i&&!r&&!n&&!s||!a)return null;try{return new Xi(a)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends Cr{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qt.credential(e.oauthAccessToken)}catch{return null}}}qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Kt.credential(n,i)}catch{return null}}}Kt.GOOGLE_SIGN_IN_METHOD="google.com";Kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Cr{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.GITHUB_SIGN_IN_METHOD="github.com";Gt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="http://localhost";class ar extends Ir{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return fn(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,fn(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fn(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=n;return!i||!r||!s||i!==r?null:new ar(i,s)}static _create(e,n){return new ar(e,n)}buildRequest(){return{requestUri:hC,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="saml.";class Ao extends bn{constructor(e){S(e.startsWith(fC),"argument-error"),super(e)}static credentialFromResult(e){return Ao.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Ao.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ar.fromJSON(e);return S(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:i}=e;if(!n||!i)return null;try{return ar._create(i,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Cr{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Yt.credential(n,i)}catch{return null}}}Yt.TWITTER_SIGN_IN_METHOD="twitter.com";Yt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(t,e){return wn(t,"POST","/v1/accounts:signUp",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await gi._fromIdTokenResponse(e,i,r),o=yh(i);return new Et({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=yh(i);return new Et({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function yh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pC(t){var e;const n=Te(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Et({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await ao(n,{returnSecureToken:!0}),r=await Et._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends tt{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ko.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new ko(e,n,i,r)}}function zg(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ko._fromErrorAndOperation(t,s,e,i):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gC(t,e){const n=z(t);await ha(!0,n,e);const{providerUserInfo:i}=await AI(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=qg(i||[]);return n.providerData=n.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function au(t,e,n=!1){const i=await mn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Et._forOperation(t,"link",i)}async function ha(t,e,n){await gs(e);const i=qg(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";S(i.has(n)===t,e.auth,r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await mn(t,zg(i,r,e,t),n);S(s.idToken,i,"internal-error");const o=ca(s.idToken);S(o,i,"internal-error");const{sub:a}=o;return S(t.uid===a,i,"user-mismatch"),Et._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&$e(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(t,e,n=!1){const i="signIn",r=await zg(t,i,e),s=await Et._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function fa(t,e){return Gg(Te(t),e)}async function Yg(t,e){const n=z(t);return await ha(!1,n,e.providerId),au(n,e)}async function Qg(t,e){return Kg(z(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _C(t,e){return wn(t,"POST","/v1/accounts:signInWithCustomToken",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e){const n=Te(t),i=await _C(n,{token:e,returnSecureToken:!0}),r=await Et._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?lu._fromServerResponse(e,n):"totpInfo"in n?cu._fromServerResponse(e,n):$e(e,"internal-error")}}class lu extends xs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new lu(n)}}class cu extends xs{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new cu(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e,n){var i;S(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),S(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e,n){var i;const r=Te(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const o=await jn(r,s,"getOobCode",!0);n&&Zi(r,o,n),await rl(r,o)}else n&&Zi(r,s,n),await rl(r,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await jn(r,s,"getOobCode",!0);n&&Zi(r,a,n),await rl(r,a)}else return Promise.reject(o)})}async function yC(t,e,n){await Vg(z(t),{oobCode:e,newPassword:n})}async function wC(t,e){await ZI(z(t),{oobCode:e})}async function Jg(t,e){const n=z(t),i=await Vg(n,{oobCode:e}),r=i.requestType;switch(S(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(i.mfaInfo,n,"internal-error");default:S(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=xs._fromServerResponse(Te(n),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function bC(t,e){const{data:n}=await Jg(z(t),e);return n.email}async function EC(t,e,n){var i;const r=Te(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await jn(r,s,"signUpPassword");o=ao(r,c)}else o=ao(r,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await jn(r,s,"signUpPassword");return ao(r,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Et._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function IC(t,e,n){return fa(z(t),Jn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CC(t,e,n){var i;const r=Te(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){S(l.handleCodeInApp,r,"argument-error"),l&&Zi(r,a,l)}if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const a=await jn(r,s,"getOobCode",!0);o(a,n),await sl(r,a)}else o(s,n),await sl(r,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await jn(r,s,"getOobCode",!0);o(l,n),await sl(r,l)}else return Promise.reject(a)})}function TC(t,e){const n=da.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function SC(t,e,n){const i=z(t),r=Jn.credentialWithLink(e,n||ps());return S(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),fa(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RC(t,e){return Oe(t,"POST","/v1/accounts:createAuthUri",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AC(t,e){const n=iu()?ps():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:r}=await RC(z(t),i);return r||[]}async function kC(t,e){const n=z(t),i=await t.getIdToken(),r={requestType:"VERIFY_EMAIL",idToken:i};e&&Zi(n.auth,r,e);const{email:s}=await eC(n.auth,r);s!==t.email&&await t.reload()}async function PC(t,e,n){const i=z(t),r=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:r,newEmail:e};n&&Zi(i.auth,s,n);const{email:o}=await tC(i.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e){return Oe(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=z(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await mn(i,NC(i.auth,s));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function xC(t,e){return Xg(z(t),e,null)}function DC(t,e){return Xg(z(t),null,e)}async function Xg(t,e,n){const{auth:i}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await mn(t,jg(i,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(t==null?void 0:t.idToken)){const o=(n=(e=ca(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new er(s,a)}}if(!i)return null;switch(i){case"facebook.com":return new MC(s,r);case"github.com":return new FC(s,r);case"google.com":return new UC(s,r);case"twitter.com":return new WC(s,r,t.screenName||null);case"custom":case"anonymous":return new er(s,null);default:return new er(s,i,r)}}class er{constructor(e,n,i={}){this.isNewUser=e,this.providerId=n,this.profile=i}}class Zg extends er{constructor(e,n,i,r){super(e,n,i),this.username=r}}class MC extends er{constructor(e,n){super(e,"facebook.com",n)}}class FC extends Zg{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class UC extends er{constructor(e,n){super(e,"google.com",n)}}class WC extends Zg{constructor(e,n,i){super(e,"twitter.com",n,i)}}function BC(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:LC(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,i){this.type=e,this.credential=n,this.user=i}static _fromIdtoken(e,n){return new ui("enroll",e,n)}static _fromMfaPendingCredential(e){return new ui("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,i;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return ui._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return ui._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,i){this.session=e,this.hints=n,this.signInResolver=i}static _fromError(e,n){const i=Te(e),r=n.customData._serverResponse,s=(r.mfaInfo||[]).map(a=>xs._fromServerResponse(i,a));S(r.mfaPendingCredential,i,"internal-error");const o=ui._fromMfaPendingCredential(r.mfaPendingCredential);return new uu(o,s,async a=>{const l=await a._process(i,o);delete r.mfaInfo,delete r.mfaPendingCredential;const c=Object.assign(Object.assign({},r),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const u=await Et._fromIdTokenResponse(i,n.operationType,c);return await i._updateCurrentUser(u.user),u;case"reauthenticate":return S(n.user,i,"internal-error"),Et._forOperation(n.user,n.operationType,c);default:$e(i,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function HC(t,e){var n;const i=z(t),r=e;return S(e.customData.operationType,i,"argument-error"),S((n=r.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,i,"argument-error"),uu._fromError(i,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $C(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:start",Pe(t,e))}function VC(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(t,e))}function jC(t,e){return Oe(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Pe(t,e))}class du{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(i=>xs._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new du(e)}async getSession(){return ui._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const i=e,r=await this.getSession(),s=await mn(this.user,i._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const r=await mn(this.user,jC(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const ol=new WeakMap;function zC(t){const e=z(t);return ol.has(e)||ol.set(e,du._fromUser(e)),ol.get(e)}const Po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(){const t=ke();return su(t)||Er(t)}const KC=1e3,GC=10;class t_ extends e_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qC()&&HI(),this.fallbackToPolling=Mg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);BI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,GC):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},KC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}t_.type="LOCAL";const hu=t_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends e_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}n_.type="SESSION";const Ei=n_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new pa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await YC(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Ds("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return window}function JC(t){Re().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(){return typeof Re().WorkerGlobalScope!="undefined"&&typeof Re().importScripts=="function"}async function XC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ZC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function eT(){return fu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="firebaseLocalStorageDb",tT=1,No="firebaseLocalStorage",r_="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ga(t,e){return t.transaction([No],e?"readwrite":"readonly").objectStore(No)}function nT(){const t=indexedDB.deleteDatabase(i_);return new Ls(t).toPromise()}function $l(){const t=indexedDB.open(i_,tT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(No,{keyPath:r_})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(No)?e(i):(i.close(),await nT(),e(await $l()))})})}async function wh(t,e,n){const i=ga(t,!0).put({[r_]:e,value:n});return new Ls(i).toPromise()}async function iT(t,e){const n=ga(t,!1).get(e),i=await new Ls(n).toPromise();return i===void 0?null:i.value}function bh(t,e){const n=ga(t,!0).delete(e);return new Ls(n).toPromise()}const rT=800,sT=3;class s_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $l(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>sT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pa._getInstance(eT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XC(),!this.activeServiceWorker)return;this.sender=new QC(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);!i||((e=i[0])===null||e===void 0?void 0:e.fulfilled)&&((n=i[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ZC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $l();return await wh(e,Po,"1"),await bh(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>wh(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>iT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=ga(r,!1).getAll();return new Ls(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s_.type="LOCAL";const vs=s_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oT(t,e){return Oe(t,"POST","/v2/accounts/mfaSignIn:start",Pe(t,e))}function aT(t,e){return Oe(t,"POST","/v2/accounts/mfaSignIn:finalize",Pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT=500,cT=6e4,Zs=1e12;class uT{constructor(e){this.auth=e,this.counter=Zs,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new dT(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||Zs;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||Zs;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||Zs;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class dT{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;S(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=hT(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},cT)},lT))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function hT(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=Bg("rcb"),fT=new Ns(3e4,6e4),pT="https://www.google.com/recaptcha/api.js?";class gT{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Re().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return S(_T(n),e,"argument-error"),this.shouldResolveImmediately(n)&&gh(Re().grecaptcha)?Promise.resolve(Re().grecaptcha):new Promise((i,r)=>{const s=Re().setTimeout(()=>{r(He(e,"network-request-failed"))},fT.get());Re()[al]=()=>{Re().clearTimeout(s),delete Re()[al];const a=Re().grecaptcha;if(!a||!gh(a)){r(He(e,"internal-error"));return}const l=a.render;a.render=(c,u)=>{const d=l(c,u);return this.counter++,d},this.hostLanguage=n,i(a)};const o=`${pT}?${Ni({onload:al,render:"explicit",hl:n})}`;ou(o).catch(()=>{clearTimeout(s),r(He(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Re().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _T(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class mT{async load(e){return new uT(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_="recaptcha",vT={theme:"light",type:"image"};class yT{constructor(e,n,i=Object.assign({},vT)){this.parameters=i,this.type=o_,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Te(e),this.isInvisible=this.parameters.size==="invisible",S(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const r=typeof n=="string"?document.getElementById(n):n;S(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new mT:new gT,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),r(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=Re()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(iu()&&!fu(),this.auth,"internal-error"),await wT(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await $I(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function wT(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=mi._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function bT(t,e,n){const i=Te(t),r=await _a(i,e,z(n));return new pu(r,s=>fa(i,s))}async function ET(t,e,n){const i=z(t);await ha(!1,i,"phone");const r=await _a(i.auth,e,z(n));return new pu(r,s=>Yg(i,s))}async function IT(t,e,n){const i=z(t),r=await _a(i.auth,e,z(n));return new pu(r,s=>Qg(i,s))}async function _a(t,e,n){var i;const r=await n.verify();try{S(typeof r=="string",t,"argument-error"),S(n.type===o_,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return S(o.type==="enroll",t,"internal-error"),(await $C(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{S(o.type==="signin",t,"internal-error");const a=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return S(a,t,"missing-multi-factor-info"),(await oT(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await sC(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return o}}finally{n._reset()}}async function CT(t,e){await au(z(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.providerId=Dt.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,n){return _a(this.auth,e,z(n))}static credential(e,n){return mi._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Dt.credentialFromTaggedObject(n)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:i}=e;return n&&i?mi._fromTokenResponse(n,i):null}}Dt.PROVIDER_ID="phone";Dt.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t,e){return e?dt(e):(S(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends Ir{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TT(t){return Gg(t.auth,new gu(t),t.bypassAuthState)}function ST(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),Kg(n,new gu(t),t.bypassAuthState)}async function RT(t){const{auth:e,user:n}=t;return S(n,e,"internal-error"),au(n,new gu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TT;case"linkViaPopup":case"linkViaRedirect":return RT;case"reauthViaPopup":case"reauthViaRedirect":return ST;default:$e(this.auth,"internal-error")}}resolve(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=new Ns(2e3,1e4);async function kT(t,e,n){const i=Te(t);br(t,e,bn);const r=Oi(i,n);return new ln(i,"signInViaPopup",e,r).executeNotNull()}async function PT(t,e,n){const i=z(t);br(i.auth,e,bn);const r=Oi(i.auth,n);return new ln(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function NT(t,e,n){const i=z(t);br(i.auth,e,bn);const r=Oi(i.auth,n);return new ln(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class ln extends a_{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ln.currentPopupAction&&ln.currentPopupAction.cancel(),ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){Ft(this.filter.length===1,"Popup operations only handle one event");const e=Ds();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AT.get())};e()}}ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT="pendingRedirect",Yr=new Map;class xT extends a_{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Yr.get(this.auth._key());if(!e){try{const i=await DT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Yr.set(this.auth._key(),e)}return this.bypassAuthState||Yr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DT(t,e){const n=c_(e),i=l_(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function _u(t,e){return l_(t)._set(c_(e),"true")}function LT(){Yr.clear()}function mu(t,e){Yr.set(t._key(),e)}function l_(t){return dt(t._redirectPersistence)}function c_(t){return _i(OT,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(t,e,n){return FT(t,e,n)}async function FT(t,e,n){const i=Te(t);br(t,e,bn),await i._initializationPromise;const r=Oi(i,n);return await _u(r,i),r._openRedirect(i,e,"signInViaRedirect")}function UT(t,e,n){return WT(t,e,n)}async function WT(t,e,n){const i=z(t);br(i.auth,e,bn),await i.auth._initializationPromise;const r=Oi(i.auth,n);await _u(r,i.auth);const s=await u_(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function BT(t,e,n){return HT(t,e,n)}async function HT(t,e,n){const i=z(t);br(i.auth,e,bn),await i.auth._initializationPromise;const r=Oi(i.auth,n);await ha(!1,i,e.providerId),await _u(r,i.auth);const s=await u_(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function $T(t,e){return await Te(t)._initializationPromise,ma(t,e,!1)}async function ma(t,e,n=!1){const i=Te(t),r=Oi(i,e),o=await new xT(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}async function u_(t){const e=Ds(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=10*60*1e3;class d_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!h_(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(He(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Eh(e))}saveEventToCache(e){this.cachedEventUids.add(Eh(e)),this.lastProcessedEventTime=Date.now()}}function Eh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function h_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return h_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(t,e={}){return Oe(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qT=/^https?/;async function KT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await f_(t);for(const n of e)try{if(GT(n))return}catch{}$e(t,"unauthorized-domain")}function GT(t){const e=ps(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!qT.test(n))return!1;if(zT.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=new Ns(3e4,6e4);function Ih(){const t=Re().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function QT(t){return new Promise((e,n)=>{var i,r,s;function o(){Ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ih(),n(He(t,"network-request-failed"))},timeout:YT.get()})}if(!((r=(i=Re().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=Re().gapi)===null||s===void 0)&&s.load)o();else{const a=Bg("iframefcb");return Re()[a]=()=>{gapi.load?o():n(He(t,"network-request-failed"))},ou(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw lo=null,e})}let lo=null;function JT(t){return lo=lo||QT(t),lo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=new Ns(5e3,15e3),ZT="__/auth/iframe",eS="emulator/auth/iframe",tS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iS(t){const e=t.config;S(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ru(e,eS):`https://${t.config.authDomain}/${ZT}`,i={apiKey:e.apiKey,appName:t.name,v:Qn},r=nS.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Ni(i).slice(1)}`}async function rS(t){const e=await JT(t),n=Re().gapi;return S(n,t,"internal-error"),e.open({where:document.body,url:iS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tS,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=He(t,"network-request-failed"),a=Re().setTimeout(()=>{s(o)},XT.get());function l(){Re().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oS=500,aS=600,lS="_blank",cS="http://localhost";class Ch{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uS(t,e,n,i=oS,r=aS){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sS),{width:i.toString(),height:r.toString(),top:s,left:o}),c=ke().toLowerCase();n&&(a=Og(c)?lS:n),Ng(c)&&(e=e||cS,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[g,m])=>`${h}${g}=${m},`,"");if(WI(c)&&a!=="_self")return dS(e||"",a),new Ch(null);const d=window.open(e||"",a,u);S(d,t,"popup-blocked");try{d.focus()}catch{}return new Ch(d)}function dS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS="__/auth/handler",fS="emulator/auth/handler",pS=encodeURIComponent("fac");async function Vl(t,e,n,i,r,s){S(t.config.authDomain,t,"auth-domain-config-required"),S(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Qn,eventId:r};if(e instanceof bn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Co(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Cr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${pS}=${encodeURIComponent(l)}`:"";return`${gS(t)}?${Ni(a).slice(1)}${c}`}function gS({config:t}){return t.emulator?ru(t,fS):`https://${t.authDomain}/${hS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll="webStorageSupport";class _S{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ei,this._completeRedirectFn=ma,this._overrideRedirectResult=mu}async _openPopup(e,n,i,r){var s;Ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Vl(e,n,i,ps(),r);return uS(e,o,Ds())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await Vl(e,n,i,ps(),r);return JC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Ft(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await rS(e),i=new d_(e);return n.register("authEvent",r=>(S(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ll,{type:ll},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[ll];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=KT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mg()||su()||Er()}}const mS=_S;class vS{constructor(e){this.factorId=e}_process(e,n,i){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,i);case"signin":return this._finalizeSignIn(e,n.credential);default:return Qt("unexpected MultiFactorSessionType")}}}class vu extends vS{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new vu(e)}_finalizeEnroll(e,n,i){return VC(e,{idToken:n,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return aT(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class p_{constructor(){}static assertion(e){return vu._fromCredential(e)}}p_.FACTOR_ID="phone";var Th="@firebase/auth",Sh="1.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bS(t){Vn(new Mt("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;S(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Fg(t)},c=new GI(i,r,s,l);return YI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Vn(new Mt("auth-internal",e=>{const n=Te(e.getProvider("auth").getImmediate());return(i=>new yS(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(Th,Sh,wS(t)),xt(Th,Sh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=5*60;Bb("authIdTokenMaxAge");bS("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=2e3;async function CS(t,e,n){var i;const{BuildInfo:r}=Ii();Ft(e.sessionId,"AuthEvent did not contain a session ID");const s=await kS(e.sessionId),o={};return Er()?o.ibi=r.packageName:Os()?o.apn=r.packageName:$e(t,"operation-not-supported-in-this-environment"),r.displayName&&(o.appDisplayName=r.displayName),o.sessionId=s,Vl(t,n,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,o)}async function TS(t){const{BuildInfo:e}=Ii(),n={};Er()?n.iosBundleId=e.packageName:Os()?n.androidPackageName=e.packageName:$e(t,"operation-not-supported-in-this-environment"),await f_(t,n)}function SS(t){const{cordova:e}=Ii();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,UI()?"_blank":"_system","location=yes"),n(r)})})}async function RS(t,e,n){const{cordova:i}=Ii();let r=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const h=(d=i.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof h=="function"&&h(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(He(t,"redirect-cancelled-by-user"))},IS))}function u(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Os()&&document.addEventListener("visibilitychange",u,!1),r=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",u,!1),a&&window.clearTimeout(a)}})}finally{r()}}function AS(t){var e,n,i,r,s,o,a,l,c,u;const d=Ii();S(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S(typeof((s=(r=(i=d==null?void 0:d.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S(typeof((u=(c=d==null?void 0:d.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||u===void 0?void 0:u.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function kS(t){const e=PS(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function PS(t){if(Ft(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=20;class OS extends d_{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function xS(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:MS(),postBody:null,tenantId:t.tenantId,error:He(t,"no-auth-event")}}function DS(t,e){return jl()._set(zl(t),e)}async function Rh(t){const e=await jl()._get(zl(t));return e&&await jl()._remove(zl(t)),e}function LS(t,e){var n,i;const r=US(e);if(r.includes("/__/auth/callback")){const s=co(r),o=s.firebaseError?FS(decodeURIComponent(s.firebaseError)):null,a=(i=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||i===void 0?void 0:i[1],l=a?He(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function MS(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<NS;n++){const i=Math.floor(Math.random()*e.length);t.push(e.charAt(i))}return t.join("")}function jl(){return dt(hu)}function zl(t){return _i("authEvent",t.config.apiKey,t.name)}function FS(t){try{return JSON.parse(t)}catch{return null}}function US(t){const e=co(t),n=e.link?decodeURIComponent(e.link):void 0,i=co(n).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return co(r).link||r||i||n||t}function co(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return zi(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=500;class BS{constructor(){this._redirectPersistence=Ei,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ma,this._overrideRedirectResult=mu}async _initialize(e){const n=e._key();let i=this.eventManagers.get(n);return i||(i=new OS(e),this.eventManagers.set(n,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){$e(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,i,r){AS(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),LT(),await this._originValidation(e);const o=xS(e,i,r);await DS(e,o);const a=await CS(e,o,n),l=await SS(a);return RS(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TS(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:i,handleOpenURL:r,BuildInfo:s}=Ii(),o=setTimeout(async()=>{await Rh(e),n.onEvent(Ah())},WS),a=async u=>{clearTimeout(o);const d=await Rh(e);let h=null;d&&(u==null?void 0:u.url)&&(h=LS(d,u.url)),n.onEvent(h||Ah())};typeof i!="undefined"&&typeof i.subscribe=="function"&&i.subscribe(null,a);const l=r,c=`${s.packageName.toLowerCase()}://`;Ii().handleOpenURL=async u=>{if(u.toLowerCase().startsWith(c)&&a({url:u}),typeof l=="function")try{l(u)}catch(d){console.error(d)}}}}const HS=BS;function Ah(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:He("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(t,e){Te(t)._logFramework(e)}var VS="@firebase/auth-compat",jS="0.4.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=1e3;function Qr(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function qS(){return Qr()==="http:"||Qr()==="https:"}function g_(t=ke()){return!!((Qr()==="file:"||Qr()==="ionic:"||Qr()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function KS(){return aa()||rg()}function GS(){return og()&&(document==null?void 0:document.documentMode)===11}function YS(t=ke()){return/Edge\/\d+/.test(t)}function QS(t=ke()){return GS()||YS(t)}function __(){try{const t=self.localStorage,e=Ds();if(t)return t.setItem(e,"1"),t.removeItem(e),QS()?Io():!0}catch{return yu()&&Io()}return!1}function yu(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function cl(){return(qS()||sg()||g_())&&!KS()&&__()&&!yu()}function m_(){return g_()&&typeof document!="undefined"}async function JS(){return m_()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},zS);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function XS(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={LOCAL:"local",NONE:"none",SESSION:"session"},Or=S,v_="persistence";function ZS(t,e){if(Or(Object.values(at).includes(e),t,"invalid-persistence-type"),aa()){Or(e!==at.SESSION,t,"unsupported-persistence-type");return}if(rg()){Or(e===at.NONE,t,"unsupported-persistence-type");return}if(yu()){Or(e===at.NONE||e===at.LOCAL&&Io(),t,"unsupported-persistence-type");return}Or(e===at.NONE||__(),t,"unsupported-persistence-type")}async function ql(t){await t._initializationPromise;const e=y_(),n=_i(v_,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function eR(t,e){const n=y_();if(!n)return[];const i=_i(v_,t,e);switch(n.getItem(i)){case at.NONE:return[or];case at.LOCAL:return[vs,Ei];case at.SESSION:return[Ei];default:return[]}}function y_(){var t;try{return((t=XS())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=S;class Nn{constructor(){this.browserResolver=dt(mS),this.cordovaResolver=dt(HS),this.underlyingResolver=null,this._redirectPersistence=Ei,this._completeRedirectFn=ma,this._overrideRedirectResult=mu}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,i,r)}async _openRedirect(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,i,r)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return m_()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return tR(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await JS();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){return t.unwrap()}function nR(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(t){return b_(t)}function rR(t,e){var n;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new sR(t,HC(t,e))}else if(i){const r=b_(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function b_(t){const{_tokenResponse:e}=t instanceof tt?t.customData:t;if(!e)return null;if(!(t instanceof tt)&&"temporaryProof"in e&&"phoneNumber"in e)return Dt.credentialFromResult(t);const n=e.providerId;if(!n||n===Nr.PASSWORD)return null;let i;switch(n){case Nr.GOOGLE:i=Kt;break;case Nr.FACEBOOK:i=qt;break;case Nr.GITHUB:i=Gt;break;case Nr.TWITTER:i=Yt;break;default:const{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!r&&!a?null:a?n.startsWith("saml.")?ar._create(n,a):Zt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:r,accessToken:s}):new Xi(n).credential({idToken:r,accessToken:s,rawNonce:l})}return t instanceof tt?i.credentialFromError(t):i.credentialFromResult(t)}function Xe(t,e){return e.catch(n=>{throw n instanceof tt&&rR(t,n),n}).then(n=>{const i=n.operationType,r=n.user;return{operationType:i,credential:iR(n),additionalUserInfo:BC(n),user:cn.getOrCreate(r)}})}async function Kl(t,e){const n=await e;return{verificationId:n.verificationId,confirm:i=>Xe(t,n.confirm(i))}}class sR{constructor(e,n){this.resolver=n,this.auth=nR(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Xe(w_(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this._delegate=e,this.multiFactor=zC(e)}static getOrCreate(e){return cn.USER_MAP.has(e)||cn.USER_MAP.set(e,new cn(e)),cn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Xe(this.auth,Yg(this._delegate,e))}async linkWithPhoneNumber(e,n){return Kl(this.auth,ET(this._delegate,e,n))}async linkWithPopup(e){return Xe(this.auth,NT(this._delegate,e,Nn))}async linkWithRedirect(e){return await ql(Te(this.auth)),BT(this._delegate,e,Nn)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Xe(this.auth,Qg(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Kl(this.auth,IT(this._delegate,e,n))}reauthenticateWithPopup(e){return Xe(this.auth,PT(this._delegate,e,Nn))}async reauthenticateWithRedirect(e){return await ql(Te(this.auth)),UT(this._delegate,e,Nn)}sendEmailVerification(e){return kC(this._delegate,e)}async unlink(e){return await gC(this._delegate,e),this}updateEmail(e){return xC(this._delegate,e)}updatePassword(e){return DC(this._delegate,e)}updatePhoneNumber(e){return CT(this._delegate,e)}updateProfile(e){return OC(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return PC(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}cn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=S;class Gl{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;xr(i,"invalid-api-key",{appName:e.name}),xr(i,"invalid-api-key",{appName:e.name});const r=typeof window!="undefined"?Nn:void 0;this._delegate=n.initialize({options:{persistence:oR(i,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(yI),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?cn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){QI(this._delegate,e,n)}applyActionCode(e){return wC(this._delegate,e)}checkActionCode(e){return Jg(this._delegate,e)}confirmPasswordReset(e,n){return yC(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Xe(this._delegate,EC(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return AC(this._delegate,e)}isSignInWithEmailLink(e){return TC(this._delegate,e)}async getRedirectResult(){xr(cl(),this._delegate,"operation-not-supported-in-this-environment");const e=await $T(this._delegate,Nn);return e?Xe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){$S(this._delegate,e)}onAuthStateChanged(e,n,i){const{next:r,error:s,complete:o}=kh(e,n,i);return this._delegate.onAuthStateChanged(r,s,o)}onIdTokenChanged(e,n,i){const{next:r,error:s,complete:o}=kh(e,n,i);return this._delegate.onIdTokenChanged(r,s,o)}sendSignInLinkToEmail(e,n){return CC(this._delegate,e,n)}sendPasswordResetEmail(e,n){return vC(this._delegate,e,n||void 0)}async setPersistence(e){ZS(this._delegate,e);let n;switch(e){case at.SESSION:n=Ei;break;case at.LOCAL:n=await dt(vs)._isAvailable()?vs:hu;break;case at.NONE:n=or;break;default:return $e("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Xe(this._delegate,pC(this._delegate))}signInWithCredential(e){return Xe(this._delegate,fa(this._delegate,e))}signInWithCustomToken(e){return Xe(this._delegate,mC(this._delegate,e))}signInWithEmailAndPassword(e,n){return Xe(this._delegate,IC(this._delegate,e,n))}signInWithEmailLink(e,n){return Xe(this._delegate,SC(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Kl(this._delegate,bT(this._delegate,e,n))}async signInWithPopup(e){return xr(cl(),this._delegate,"operation-not-supported-in-this-environment"),Xe(this._delegate,kT(this._delegate,e,Nn))}async signInWithRedirect(e){return xr(cl(),this._delegate,"operation-not-supported-in-this-environment"),await ql(this._delegate),MT(this._delegate,e,Nn)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return bC(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Gl.Persistence=at;function kh(t,e,n){let i=t;typeof t!="function"&&({next:i,error:e,complete:n}=t);const r=i;return{next:o=>r(o&&cn.getOrCreate(o)),error:e,complete:n}}function oR(t,e){const n=eR(t,e);if(typeof self!="undefined"&&!n.includes(vs)&&n.push(vs),typeof window!="undefined")for(const i of[hu,Ei])n.includes(i)||n.push(i);return n.includes(or)||n.push(or),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.providerId="phone",this._delegate=new Dt(w_(wr.auth()))}static credential(e,n){return Dt.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}wu.PHONE_SIGN_IN_METHOD=Dt.PHONE_SIGN_IN_METHOD;wu.PROVIDER_ID=Dt.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=S;class lR{constructor(e,n,i=wr.app()){var r;aR((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new yT(i.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="auth-compat";function uR(t){t.INTERNAL.registerComponent(new Mt(cR,e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Gl(n,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:$i.EMAIL_SIGNIN,PASSWORD_RESET:$i.PASSWORD_RESET,RECOVER_EMAIL:$i.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:$i.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:$i.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:$i.VERIFY_EMAIL}},EmailAuthProvider:Jn,FacebookAuthProvider:qt,GithubAuthProvider:Gt,GoogleAuthProvider:Kt,OAuthProvider:Xi,SAMLAuthProvider:Ao,PhoneAuthProvider:wu,PhoneMultiFactorGenerator:p_,RecaptchaVerifier:lR,TwitterAuthProvider:Yt,Auth:Gl,AuthCredential:Ir,Error:tt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(VS,jS)}uR(wr);const Ph="@firebase/database",Nh="1.0.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let E_="";function I_(t){E_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ne(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ds(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ht(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=function(t){try{if(typeof window!="undefined"&&typeof window[t]!="undefined"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new dR(e)}}catch{}return new hR},di=C_("localStorage"),Yl=C_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Ps("@firebase/database"),T_=function(){let t=1;return function(){return t++}}(),S_=function(t){const e=Xb(t),n=new Yb;n.update(e);const i=n.digest();return Yc.encodeByteArray(i)},Ms=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ms.apply(null,i):typeof i=="object"?e+=Ne(i):e+=i,e+=" "}return e};let vi=null,Oh=!0;const R_=function(t,e){R(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(tr.logLevel=de.VERBOSE,vi=tr.log.bind(tr),e&&Yl.set("logging_enabled",!0)):typeof t=="function"?vi=t:(vi=null,Yl.remove("logging_enabled"))},Me=function(...t){if(Oh===!0&&(Oh=!1,vi===null&&Yl.get("logging_enabled")===!0&&R_(!0)),vi){const e=Ms.apply(null,t);vi(e)}},Fs=function(t){return function(...e){Me(t,...e)}},Ql=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ms(...t);tr.error(e)},en=function(...t){const e=`FIREBASE FATAL ERROR: ${Ms(...t)}`;throw tr.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+Ms(...t);tr.warn(e)},fR=function(){typeof window!="undefined"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},va=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},zn="[MIN_NAME]",vn="[MAX_NAME]",xi=function(t,e){if(t===e)return 0;if(t===zn||e===vn)return-1;if(e===zn||t===vn)return 1;{const n=xh(t),i=xh(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},gR=function(t,e){return t===e?0:t<e?-1:1},Dr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ne(e))},bu=function(t){if(typeof t!="object"||t===null)return Ne(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ne(e[i]),n+=":",n+=bu(t[e[i]]);return n+="}",n},A_=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let r=0;r<n;r+=e)r+e>n?i.push(t.substring(r,n)):i.push(t.substring(r,r+e));return i};function Ue(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const k_=function(t){R(!va(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let r,s,o,a,l;t===0?(s=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),i),s=a+i,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-i-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(r?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},_R=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},mR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const yR=new RegExp("^-?(0*)\\d{1,10}$"),wR=-2147483648,bR=2147483647,xh=function(t){if(yR.test(t)){const e=Number(t);if(e>=wR&&e<=bR)return e}return null},Tr=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},ER=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno!="undefined"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Me("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class nr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu="5",P_="v",N_="s",O_="r",x_="f",D_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,L_="ls",M_="p",Jl="ac",F_="websocket",U_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=di.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&di.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TR(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function B_(t,e,n){R(typeof e=="string","typeof type must == string"),R(typeof n=="object","typeof params must == object");let i;if(e===F_)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===U_)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TR(t)&&(n.ns=t.namespace);const r=[];return Ue(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(){this.counters_={}}incrementCounter(e,n=1){ht(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Db(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul={},dl={};function Iu(t){const e=t.toString();return ul[e]||(ul[e]=new SR),ul[e]}function RR(t,e){const n=t.toString();return dl[n]||(dl[n]=e()),dl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Tr(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="start",kR="close",PR="pLPCommand",NR="pRTLPCB",H_="id",$_="pw",V_="ser",OR="cb",xR="seg",DR="ts",LR="d",MR="dframe",j_=1870,z_=30,FR=j_-z_,UR=25e3,WR=3e4;class On{constructor(e,n,i,r,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fs(e),this.stats_=Iu(n),this.urlFn=l=>(this.appCheckToken&&(l[Jl]=this.appCheckToken),B_(n,U_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WR)),pR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Cu((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Dh)this.id=a,this.password=l;else if(o===kR)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Dh]="t",i[V_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[OR]=this.scriptTagHolder.uniqueCallbackIdentifier),i[P_]=Eu,this.transportSessionId&&(i[N_]=this.transportSessionId),this.lastSessionId&&(i[L_]=this.lastSessionId),this.applicationId&&(i[M_]=this.applicationId),this.appCheckToken&&(i[Jl]=this.appCheckToken),typeof location!="undefined"&&location.hostname&&D_.test(location.hostname)&&(i[O_]=x_);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){On.forceAllow_=!0}static forceDisallow(){On.forceDisallow_=!0}static isAvailable(){return On.forceAllow_?!0:!On.forceDisallow_&&typeof document!="undefined"&&document.createElement!=null&&!_R()&&!mR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=ng(n),r=A_(i,FR);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[MR]="t",i[H_]=e,i[$_]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ne(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Cu{constructor(e,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=T_(),window[PR+this.uniqueCallbackIdentifier]=e,window[NR+this.uniqueCallbackIdentifier]=n,this.myIFrame=Cu.createIFrame_();let s="";if(this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"){const a=document.domain;s='<script>document.domain="'+a+'";<\/script>'}const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Me("frame writing exception"),a.stack&&Me(a.stack),Me(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Me("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[H_]=this.myID,e[$_]=this.myPW,e[V_]=this.currentSerial;let n=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+z_+i.length<=j_;){const o=this.pendingSegs.shift();i=i+"&"+xR+r+"="+o.seg+"&"+DR+r+"="+o.ts+"&"+LR+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(UR)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{Me("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=16384,HR=45e3;let Oo=null;typeof MozWebSocket!="undefined"?Oo=MozWebSocket:typeof WebSocket!="undefined"&&(Oo=WebSocket);class mt{constructor(e,n,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fs(this.connId),this.stats_=Iu(n),this.connURL=mt.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,r,s){const o={};return o[P_]=Eu,typeof location!="undefined"&&location.hostname&&D_.test(location.hostname)&&(o[O_]=x_),n&&(o[N_]=n),i&&(o[L_]=i),r&&(o[Jl]=r),s&&(o[M_]=s),B_(e,F_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,di.set("previous_websocket_failure",!0);try{let i;ag(),this.mySock=new Oo(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator!="undefined"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Oo!==null&&!mt.forceDisallow_}static previouslyFailed(){return di.isInMemoryStorage||di.get("previous_websocket_failure")===!0}markConnectionHealthy(){di.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=ds(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(R(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ne(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=A_(n,BR);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mt.responsesRequiredToBeHealthy=2;mt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[On,mt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=mt&&mt.isAvailable();let i=n&&!mt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[mt];else{const r=this.transports_=[];for(const s of lr.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);lr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}lr.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=6e4,VR=5e3,jR=10*1024,zR=100*1024,hl="t",Lh="d",qR="s",Mh="r",KR="e",Fh="o",Uh="a",Wh="n",Bh="p",GR="h";class YR{constructor(e,n,i,r,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fs("c:"+this.id+":"),this.transportManager_=new lr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Jr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>jR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hl in e){const n=e[hl];n===Uh?this.upgradeIfSecondaryHealthy_():n===Mh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Dr("t",e),i=Dr("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wh,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Dr("t",e),i=Dr("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Dr(hl,e);if(Lh in e){const i=e[Lh];if(n===GR){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Wh){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===qR?this.onConnectionShutdown_(i):n===Mh?this.onReset_(i):n===KR?Ql("Server Error: "+i):n===Fh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ql("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Eu!==i&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Jr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor($R))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(VR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bh,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(di.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{put(e,n,i,r){}merge(e,n,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.allowedEvents_=e,this.listeners_={},R(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const r=this.getInitialEvent(e);r&&n.apply(i,r)}off(e,n,i){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){R(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends K_{constructor(){super(["online"]),this.online_=!0,typeof window!="undefined"&&typeof window.addEventListener!="undefined"&&!Jc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new xo}getInitialEvent(e){return R(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=32,$h=768;class ae{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ie(){return new ae("")}function Y(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qn(t){return t.pieces_.length-t.pieceNum_}function pe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ae(t.pieces_,e)}function Tu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function QR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ys(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function G_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ae(e,0)}function we(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ae)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new ae(n,0)}function Q(t){return t.pieceNum_>=t.pieces_.length}function Qe(t,e){const n=Y(t),i=Y(e);if(n===null)return e;if(n===i)return Qe(pe(t),pe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function JR(t,e){const n=ys(t,0),i=ys(e,0);for(let r=0;r<n.length&&r<i.length;r++){const s=xi(n[r],i[r]);if(s!==0)return s}return n.length===i.length?0:n.length<i.length?-1:1}function Su(t,e){if(qn(t)!==qn(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function yt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(qn(t)>qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class XR{constructor(e,n){this.errorPrefix_=n,this.parts_=ys(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=la(this.parts_[i]);Y_(this)}}function ZR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=la(e),Y_(t)}function e0(t){const e=t.parts_.pop();t.byteLength_-=la(e),t.parts_.length>0&&(t.byteLength_-=1)}function Y_(t){if(t.byteLength_>$h)throw new Error(t.errorPrefix_+"has a key path longer than "+$h+" bytes ("+t.byteLength_+").");if(t.parts_.length>Hh)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hh+") or object contains a cycle "+ri(t))}function ri(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru extends K_{constructor(){super(["visible"]);let e,n;typeof document!="undefined"&&typeof document.addEventListener!="undefined"&&(typeof document.hidden!="undefined"?(n="visibilitychange",e="hidden"):typeof document.mozHidden!="undefined"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden!="undefined"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden!="undefined"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ru}getInitialEvent(e){return R(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=1e3,t0=60*5*1e3,Vh=30*1e3,n0=1.3,i0=3e4,r0="server_kill",jh=3;class pn extends q_{constructor(e,n,i,r,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=pn.nextPersistentConnectionId_++,this.log_=Fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Lr,this.maxReconnectDelay_=t0,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!ag())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ru.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&xo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(Ne(s)),R(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();const n=new Ze,i={p:e._path.toString(),q:e._queryObject},r={action:"g",request:i,onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,i,r){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),R(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;pn.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ht(e,"w")){const i=wi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gb(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vh)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Kb(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),R(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,n)}sendUnlisten_(e,n,i,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,i,r){this.putInternal("p",e,n,i,r)}merge(e,n,i,r){this.putInternal("m",e,n,i,r)}putInternal(e,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ne(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ql("Unrecognized action received from server: "+Ne(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){R(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Lr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Lr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>i0&&(this.reconnectDelay_=Lr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*n0)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){R(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Me("getToken() completed but was canceled"):(Me("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new YR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,g=>{Ke(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(r0)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ke(d),l())}}}interrupt(e){Me("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Me("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Co(this.interruptReasons_)&&(this.reconnectDelay_=Lr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(s=>bu(s)).join("$"):i="default";const r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const i=new ae(e).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,n){Me("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jh&&(this.reconnectDelay_=Vh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Me("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+E_.replace(/\./g,"-")]=1,Jc()?e["framework.cordova"]=1:aa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xo.getInstance().currentlyOnline();return Co(this.interruptReasons_)&&e}}pn.nextPersistentConnectionId_=0;pn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new J(zn,e),r=new J(zn,n);return this.compare(i,r)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo;class Q_ extends ya{static get __EMPTY_NODE(){return eo}static set __EMPTY_NODE(e){eo=e}compare(e,n){return xi(e.name,n.name)}isDefinedOn(e){throw yr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(vn,eo)}makePost(e,n){return R(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,eo)}toString(){return".key"}}const Jt=new Q_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?i(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Le{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i!=null?i:Le.RED,this.left=r!=null?r:et.EMPTY_NODE,this.right=s!=null?s:et.EMPTY_NODE}copy(e,n,i,r,s){return new Le(e!=null?e:this.key,n!=null?n:this.value,i!=null?i:this.color,r!=null?r:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,r;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return et.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Le.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Le.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Le.RED=!0;Le.BLACK=!1;class s0{copy(e,n,i,r,s){return this}insert(e,n,i){return new Le(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class et{constructor(e,n=et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Le.BLACK,null,null))}remove(e){return new et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Le.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new to(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new to(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new to(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new to(this.root_,null,this.comparator_,!0,e)}}et.EMPTY_NODE=new s0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t,e){return xi(t.name,e.name)}function Au(t,e){return xi(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xl;function a0(t){Xl=t}const J_=function(t){return typeof t=="number"?"number:"+k_(t):"string:"+t},X_=function(t){if(t.isLeafNode()){const e=t.val();R(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ht(e,".sv"),"Priority must be a string or number.")}else R(t===Xl||t.isEmpty(),"priority of unexpected type.");R(t===Xl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zh;class xe{constructor(e,n=xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,R(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),X_(this.priorityNode_)}static set __childrenNodeConstructor(e){zh=e}static get __childrenNodeConstructor(){return zh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Q(e)?this:Y(e)===".priority"?this.priorityNode_:xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=Y(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(R(i!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(pe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+J_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=k_(this.value_):e+=this.value_,this.lazyHash_=S_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xe.__childrenNodeConstructor?-1:(R(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,r=xe.VALUE_TYPE_ORDER.indexOf(n),s=xe.VALUE_TYPE_ORDER.indexOf(i);return R(r>=0,"Unknown leaf type: "+n),R(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Z_,em;function l0(t){Z_=t}function c0(t){em=t}class u0 extends ya{compare(e,n){const i=e.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?xi(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(vn,new xe("[PRIORITY-POST]",em))}makePost(e,n){const i=Z_(e);return new J(n,new xe("[PRIORITY-POST]",i))}toString(){return".priority"}}const me=new u0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=Math.log(2);class h0{constructor(e){const n=s=>parseInt(Math.log(s)/d0,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Do=function(t,e,n,i){t.sort(e);const r=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Le(h,d.node,Le.BLACK,null,null);{const g=parseInt(u/2,10)+l,m=r(l,g),b=r(g+1,c);return d=t[g],h=n?n(d):d,new Le(h,d.node,Le.BLACK,m,b)}},s=function(l){let c=null,u=null,d=t.length;const h=function(m,b){const P=d-m,x=d;d-=m;const E=r(P+1,x),O=t[P],C=n?n(O):O;g(new Le(C,O.node,b,null,E))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const b=l.nextBitIsOne(),P=Math.pow(2,l.count-(m+1));b?h(P,Le.BLACK):(h(P,Le.BLACK),h(P,Le.RED))}return u},o=new h0(t.length),a=s(o);return new et(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;const Vi={};class un{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return R(Vi&&me,"ChildrenNode.ts has not been loaded"),fl=fl||new un({".priority":Vi},{".priority":me}),fl}get(e){const n=wi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof et?n:null}hasIndex(e){return ht(this.indexSet_,e.toString())}addIndex(e,n){R(e!==Jt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(J.Wrap);let o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Do(i,e.getCompare()):a=Vi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new un(u,c)}addToIndexes(e,n){const i=To(this.indexes_,(r,s)=>{const o=wi(this.indexSet_,s);if(R(o,"Missing index implementation for "+s),r===Vi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Do(a,o.getCompare())}else return Vi;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new un(i,this.indexSet_)}removeFromIndexes(e,n){const i=To(this.indexes_,r=>{if(r===Vi)return r;{const s=n.get(e.name);return s?r.remove(new J(e.name,s)):r}});return new un(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mr;class H{constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&X_(this.priorityNode_),this.children_.isEmpty()&&R(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Mr||(Mr=new H(new et(Au),null,un.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Mr}updatePriority(e){return this.children_.isEmpty()?this:new H(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Mr:n}}getChild(e){const n=Y(e);return n===null?this:this.getImmediateChild(n).getChild(pe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(R(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new J(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Mr:this.priorityNode_;return new H(r,o,s)}}updateChild(e,n){const i=Y(e);if(i===null)return n;{R(Y(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(pe(e),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(me,(o,a)=>{n[o]=a.val(e),i++,s&&H.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+J_(this.getPriority().val())+":"),this.forEachChild(me,(n,i)=>{const r=i.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":S_(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new J(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,J.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Us?-1:0}withIndex(e){if(e===Jt||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new H(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Jt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(me),r=n.getIterator(me);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Jt?null:this.indexMap_.get(e.toString())}}H.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class f0 extends H{constructor(){super(new et(Au),H.EMPTY_NODE,un.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return H.EMPTY_NODE}isEmpty(){return!1}}const Us=new f0;Object.defineProperties(J,{MIN:{value:new J(zn,H.EMPTY_NODE)},MAX:{value:new J(vn,Us)}});Q_.__EMPTY_NODE=H.EMPTY_NODE;xe.__childrenNodeConstructor=H;a0(Us);c0(Us);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=!0;function Ee(t,e=null){if(t===null)return H.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),R(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new xe(n,Ee(e))}if(!(t instanceof Array)&&p0){const n=[];let i=!1;if(Ue(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ee(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return H.EMPTY_NODE;const s=Do(n,o0,o=>o.name,Au);if(i){const o=Do(n,me.getCompare());return new H(s,Ee(e),new un({".priority":o},{".priority":me}))}else return new H(s,Ee(e),un.Default)}else{let n=H.EMPTY_NODE;return Ue(t,(i,r)=>{if(ht(t,i)&&i.substring(0,1)!=="."){const s=Ee(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Ee(e))}}l0(Ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku extends ya{constructor(e){super(),this.indexPath_=e,R(!Q(e)&&Y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?xi(e.name,n.name):s}makePost(e,n){const i=Ee(e),r=H.EMPTY_NODE.updateChild(this.indexPath_,i);return new J(n,r)}maxPost(){const e=H.EMPTY_NODE.updateChild(this.indexPath_,Us);return new J(vn,e)}toString(){return ys(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0 extends ya{compare(e,n){const i=e.node.compareTo(n.node);return i===0?xi(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const i=Ee(e);return new J(n,i)}toString(){return".value"}}const Pu=new g0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){return{type:"value",snapshotNode:t}}function cr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ws(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _0(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.index_=e}updateChild(e,n,i,r,s,o){R(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(n)?o.trackChildChange(ws(n,a)):R(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(cr(n,i)):o.trackChildChange(bs(n,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(me,(r,s)=>{n.hasChild(r)||i.trackChildChange(ws(r,s))}),n.isLeafNode()||n.forEachChild(me,(r,s)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(bs(r,s,o))}else i.trackChildChange(cr(r,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?H.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.indexedFilter_=new Nu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Es.getStartPost_(e),this.endPost_=Es.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,r,s,o){return this.matches(new J(n,i))||(i=H.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,r,s,o)}updateFullNode(e,n,i){n.isLeafNode()&&(n=H.EMPTY_NODE);let r=n.withIndex(this.index_);r=r.updatePriority(H.EMPTY_NODE);const s=this;return n.forEachChild(me,(o,a)=>{s.matches(new J(o,a))||(r=r.updateImmediateChild(o,H.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Es(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,r,s,o){return this.rangedFilter_.matches(new J(n,i))||(i=H.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,r,s,o):this.fullLimitUpdateChild_(e,n,i,s,o)}updateFullNode(e,n,i){let r;if(n.isLeafNode()||n.isEmpty())r=H.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){r=H.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=n.withIndex(this.index_),r=r.updatePriority(H.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,H.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,r,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const a=e;R(a.numChildren()===this.limit_,"");const l=new J(n,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=r.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(u&&!i.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(bs(n,i,d)),a.updateImmediateChild(n,i);{s!=null&&s.trackChildChange(ws(n,d));const b=a.updateImmediateChild(n,H.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(cr(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return i.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(ws(c.name,c.node)),s.trackChildChange(cr(n,i))),a.updateImmediateChild(n,i).updateImmediateChild(c.name,H.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=me}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return R(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return R(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:zn}hasEnd(){return this.endSet_}getIndexEndValue(){return R(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return R(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return R(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===me}copy(){const e=new wa;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function v0(t){return t.loadsAllData()?new Nu(t.getIndex()):t.hasLimit()?new m0(t):new Es(t)}function y0(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="l",n}function w0(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function Zl(t,e,n){const i=t.copy();return i.startSet_=!0,e===void 0&&(e=null),i.indexStartValue_=e,n!=null?(i.startNameSet_=!0,i.indexStartName_=n):(i.startNameSet_=!1,i.indexStartName_=""),i}function b0(t,e,n){let i;return t.index_===Jt||!!n?i=Zl(t,e,n):i=Zl(t,e,vn),i.startAfterSet_=!0,i}function ec(t,e,n){const i=t.copy();return i.endSet_=!0,e===void 0&&(e=null),i.indexEndValue_=e,n!==void 0?(i.endNameSet_=!0,i.indexEndName_=n):(i.endNameSet_=!1,i.indexEndName_=""),i}function E0(t,e,n){let i;return t.index_===Jt||!!n?i=ec(t,e,n):i=ec(t,e,zn),i.endBeforeSet_=!0,i}function ba(t,e){const n=t.copy();return n.index_=e,n}function qh(t){const e={};if(t.isDefault())return e;let n;if(t.index_===me?n="$priority":t.index_===Pu?n="$value":t.index_===Jt?n="$key":(R(t.index_ instanceof ku,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ne(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ne(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ne(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ne(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ne(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Kh(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==me&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo extends q_{constructor(e,n,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=Fs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(R(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,i,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Lo.getListenId_(e,i),a={};this.listens_[o]=a;const l=qh(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,i),wi(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",r(h,null)}})}unlisten(e,n){const i=Lo.getListenId_(e,n);delete this.listens_[i]}get(e){const n=qh(e._queryParams),i=e._path.toString(),r=new Ze;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ni(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ds(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.rootNode_=H.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){return{value:null,children:new Map}}function Sr(t,e,n){if(Q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=Y(e);t.children.has(i)||t.children.set(i,Mo());const r=t.children.get(i);e=pe(e),Sr(r,e,n)}}function tc(t,e){if(Q(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(me,(i,r)=>{Sr(t,new ae(i),r)}),tc(t,e)}}else if(t.children.size>0){const n=Y(e);return e=pe(e),t.children.has(n)&&tc(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function nc(t,e,n){t.value!==null?n(e,t.value):C0(t,(i,r)=>{const s=new ae(e.toString()+"/"+i);nc(r,s,n)})}function C0(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ue(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=10*1e3,S0=30*1e3,R0=5*60*1e3;class A0{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new T0(e);const i=Gh+(S0-Gh)*Math.random();Jr(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;Ue(e,(r,s)=>{s>0&&ht(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),Jr(this.reportStats_.bind(this),Math.floor(Math.random()*2*R0))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function Ou(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function xu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Du(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Pt.ACK_USER_WRITE,this.source=Ou()}operationForChild(e){if(Q(this.path)){if(this.affectedTree.value!=null)return R(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ae(e));return new Fo(ie(),n,this.revert)}}else return R(Y(this.path)===e,"operationForChild called for unrelated child."),new Fo(pe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.source=e,this.path=n,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return Q(this.path)?new Is(this.source,ie()):new Is(this.source,pe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Pt.OVERWRITE}operationForChild(e){return Q(this.path)?new Ci(this.source,ie(),this.snap.getImmediateChild(e)):new Ci(this.source,pe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Pt.MERGE}operationForChild(e){if(Q(this.path)){const n=this.children.subtree(new ae(e));return n.isEmpty()?null:n.value?new Ci(this.source,ie(),n.value):new ur(this.source,ie(),n)}else return R(Y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ur(this.source,pe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Y(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function P0(t,e,n,i){const r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(_0(o.childName,o.snapshotNode))}),Fr(t,r,"child_removed",e,i,n),Fr(t,r,"child_added",e,i,n),Fr(t,r,"child_moved",s,i,n),Fr(t,r,"child_changed",e,i,n),Fr(t,r,"value",e,i,n),r}function Fr(t,e,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>O0(t,a,l)),o.forEach(a=>{const l=N0(t,a,s);r.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function N0(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function O0(t,e,n){if(e.childName==null||n.childName==null)throw yr("Should only compare child_ events.");const i=new J(e.childName,e.snapshotNode),r=new J(n.childName,n.snapshotNode);return t.index_.compare(i,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t,e){return{eventCache:t,serverCache:e}}function Xr(t,e,n,i){return Ea(new Kn(e,n,i),t.serverCache)}function nm(t,e,n,i){return Ea(t.eventCache,new Kn(e,n,i))}function Uo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ti(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl;const x0=()=>(pl||(pl=new et(gR)),pl);class _e{constructor(e,n=x0()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Ue(e,(i,r)=>{n=n.set(new ae(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ie(),value:this.value};if(Q(e))return null;{const i=Y(e),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(pe(e),n);return s!=null?{path:we(new ae(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Q(e))return this;{const n=Y(e),i=this.children.get(n);return i!==null?i.subtree(pe(e)):new _e(null)}}set(e,n){if(Q(e))return new _e(n,this.children);{const i=Y(e),s=(this.children.get(i)||new _e(null)).set(pe(e),n),o=this.children.insert(i,s);return new _e(this.value,o)}}remove(e){if(Q(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=Y(e),i=this.children.get(n);if(i){const r=i.remove(pe(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(Q(e))return this.value;{const n=Y(e),i=this.children.get(n);return i?i.get(pe(e)):null}}setTree(e,n){if(Q(e))return n;{const i=Y(e),s=(this.children.get(i)||new _e(null)).setTree(pe(e),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new _e(this.value,o)}}fold(e){return this.fold_(ie(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(we(e,r),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,ie(),n)}findOnPath_(e,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Q(e))return null;{const s=Y(e),o=this.children.get(s);return o?o.findOnPath_(pe(e),we(n,s),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ie(),n)}foreachOnPath_(e,n,i){if(Q(e))return this;{this.value&&i(n,this.value);const r=Y(e),s=this.children.get(r);return s?s.foreachOnPath_(pe(e),we(n,r),i):new _e(null)}}foreach(e){this.foreach_(ie(),e)}foreach_(e,n){this.children.inorderTraversal((i,r)=>{r.foreach_(we(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new _e(null))}}function Zr(t,e,n){if(Q(e))return new Lt(new _e(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const r=i.path;let s=i.value;const o=Qe(r,e);return s=s.updateChild(o,n),new Lt(t.writeTree_.set(r,s))}else{const r=new _e(n),s=t.writeTree_.setTree(e,r);return new Lt(s)}}}function ic(t,e,n){let i=t;return Ue(n,(r,s)=>{i=Zr(i,we(e,r),s)}),i}function Yh(t,e){if(Q(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new Lt(n)}}function rc(t,e){return Di(t,e)!=null}function Di(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Qe(n.path,e)):null}function Qh(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(me,(i,r)=>{e.push(new J(i,r))}):t.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new J(i,r.value))}),e}function Fn(t,e){if(Q(e))return t;{const n=Di(t,e);return n!=null?new Lt(new _e(n)):new Lt(t.writeTree_.subtree(e))}}function sc(t){return t.writeTree_.isEmpty()}function dr(t,e){return im(ie(),t.writeTree_,e)}function im(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(R(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=im(we(t,r),s,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(we(t,".priority"),i)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t,e){return am(e,t)}function D0(t,e,n,i,r){R(i>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:r}),r&&(t.visibleWrites=Zr(t.visibleWrites,e,n)),t.lastWriteId=i}function L0(t,e,n,i){R(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=ic(t.visibleWrites,e,n),t.lastWriteId=i}function M0(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function F0(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);R(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let r=i.visible,s=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&U0(a,i.path)?r=!1:yt(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return W0(t),!0;if(i.snap)t.visibleWrites=Yh(t.visibleWrites,i.path);else{const a=i.children;Ue(a,l=>{t.visibleWrites=Yh(t.visibleWrites,we(i.path,l))})}return!0}else return!1}function U0(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(we(t.path,n),e))return!0;return!1}function W0(t){t.visibleWrites=rm(t.allWrites,B0,ie()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function B0(t){return t.visible}function rm(t,e,n){let i=Lt.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const o=s.path;let a;if(s.snap)yt(n,o)?(a=Qe(n,o),i=Zr(i,a,s.snap)):yt(o,n)&&(a=Qe(o,n),i=Zr(i,ie(),s.snap.getChild(a)));else if(s.children){if(yt(n,o))a=Qe(n,o),i=ic(i,a,s.children);else if(yt(o,n))if(a=Qe(o,n),Q(a))i=ic(i,ie(),s.children);else{const l=wi(s.children,Y(a));if(l){const c=l.getChild(pe(a));i=Zr(i,ie(),c)}}}else throw yr("WriteRecord should have .snap or .children")}}return i}function sm(t,e,n,i,r){if(!i&&!r){const s=Di(t.visibleWrites,e);if(s!=null)return s;{const o=Fn(t.visibleWrites,e);if(sc(o))return n;if(n==null&&!rc(o,ie()))return null;{const a=n||H.EMPTY_NODE;return dr(o,a)}}}else{const s=Fn(t.visibleWrites,e);if(!r&&sc(s))return n;if(!r&&n==null&&!rc(s,ie()))return null;{const o=function(c){return(c.visible||r)&&(!i||!~i.indexOf(c.writeId))&&(yt(c.path,e)||yt(e,c.path))},a=rm(t.allWrites,o,e),l=n||H.EMPTY_NODE;return dr(a,l)}}}function H0(t,e,n){let i=H.EMPTY_NODE;const r=Di(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(me,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Fn(t.visibleWrites,e);return n.forEachChild(me,(o,a)=>{const l=dr(Fn(s,new ae(o)),a);i=i.updateImmediateChild(o,l)}),Qh(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Fn(t.visibleWrites,e);return Qh(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function $0(t,e,n,i,r){R(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=we(e,n);if(rc(t.visibleWrites,s))return null;{const o=Fn(t.visibleWrites,s);return sc(o)?r.getChild(n):dr(o,r.getChild(n))}}function V0(t,e,n,i){const r=we(e,n),s=Di(t.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Fn(t.visibleWrites,r);return dr(o,i.getNode().getImmediateChild(n))}else return null}function j0(t,e){return Di(t.visibleWrites,e)}function z0(t,e,n,i,r,s,o){let a;const l=Fn(t.visibleWrites,e),c=Di(l,ie());if(c!=null)a=c;else if(n!=null)a=dr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let g=h.getNext();for(;g&&u.length<r;)d(g,i)!==0&&u.push(g),g=h.getNext();return u}else return[]}function q0(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function Wo(t,e,n,i){return sm(t.writeTree,t.treePath,e,n,i)}function Lu(t,e){return H0(t.writeTree,t.treePath,e)}function Jh(t,e,n,i){return $0(t.writeTree,t.treePath,e,n,i)}function Bo(t,e){return j0(t.writeTree,we(t.treePath,e))}function K0(t,e,n,i,r,s){return z0(t.writeTree,t.treePath,e,n,i,r,s)}function Mu(t,e,n){return V0(t.writeTree,t.treePath,e,n)}function om(t,e){return am(we(t.treePath,e),t.writeTree)}function am(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;R(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),R(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,bs(i,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,ws(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,cr(i,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,bs(i,e.snapshotNode,r.oldSnap));else throw yr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const lm=new Y0;class Fu{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Mu(this.writes_,e,i)}}getChildAfterChild(e,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ti(this.viewCache_),s=K0(this.writes_,r,n,1,i,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){return{filter:t}}function J0(t,e){R(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),R(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function X0(t,e,n,i,r){const s=new G0;let o,a;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?o=oc(t,e,c.path,c.snap,i,r,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Q(c.path),o=Ho(t,e,c.path,c.snap,i,r,a,s))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?o=eA(t,e,c.path,c.children,i,r,s):(R(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=ac(t,e,c.path,c.children,i,r,a,s))}else if(n.type===Pt.ACK_USER_WRITE){const c=n;c.revert?o=iA(t,e,c.path,i,r,s):o=tA(t,e,c.path,c.affectedTree,i,r,s)}else if(n.type===Pt.LISTEN_COMPLETE)o=nA(t,e,n.path,i,s);else throw yr("Unknown operation type: "+n.type);const l=s.getChanges();return Z0(e,o,l),{viewCache:o,changes:l}}function Z0(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Uo(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(tm(Uo(e)))}}function cm(t,e,n,i,r,s){const o=e.eventCache;if(Bo(i,n)!=null)return e;{let a,l;if(Q(n))if(R(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ti(e),u=c instanceof H?c:H.EMPTY_NODE,d=Lu(i,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Wo(i,Ti(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=Y(n);if(c===".priority"){R(qn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Jh(i,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=pe(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Jh(i,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Mu(i,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,r,s):a=o.getNode()}}return Xr(e,a,o.isFullyInitialized()||Q(n),t.filter.filtersNodes())}}function Ho(t,e,n,i,r,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Q(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),g,null)}else{const g=Y(n);if(!l.isCompleteForPath(n)&&qn(n)>1)return e;const m=pe(n),P=l.getNode().getImmediateChild(g).updateChild(m,i);g===".priority"?c=u.updatePriority(l.getNode(),P):c=u.updateChild(l.getNode(),g,P,m,lm,null)}const d=nm(e,c,l.isFullyInitialized()||Q(n),u.filtersNodes()),h=new Fu(r,d,s);return cm(t,d,n,r,h,a)}function oc(t,e,n,i,r,s,o){const a=e.eventCache;let l,c;const u=new Fu(r,e,s);if(Q(n))c=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Xr(e,c,!0,t.filter.filtersNodes());else{const d=Y(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),i),l=Xr(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=pe(n),g=a.getNode().getImmediateChild(d);let m;if(Q(h))m=i;else{const b=u.getCompleteChild(d);b!=null?Tu(h)===".priority"&&b.getChild(G_(h)).isEmpty()?m=b:m=b.updateChild(h,i):m=H.EMPTY_NODE}if(g.equals(m))l=e;else{const b=t.filter.updateChild(a.getNode(),d,m,h,u,o);l=Xr(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Xh(t,e){return t.eventCache.isCompleteForChild(e)}function eA(t,e,n,i,r,s,o){let a=e;return i.foreach((l,c)=>{const u=we(n,l);Xh(e,Y(u))&&(a=oc(t,a,u,c,r,s,o))}),i.foreach((l,c)=>{const u=we(n,l);Xh(e,Y(u))||(a=oc(t,a,u,c,r,s,o))}),a}function Zh(t,e,n){return n.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function ac(t,e,n,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Q(n)?c=i:c=new _e(null).setTree(n,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),m=Zh(t,g,h);l=Ho(t,l,new ae(d),m,r,s,o,a)}}),c.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!g){const m=e.serverCache.getNode().getImmediateChild(d),b=Zh(t,m,h);l=Ho(t,l,new ae(d),b,r,s,o,a)}}),l}function tA(t,e,n,i,r,s,o){if(Bo(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(Q(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ho(t,e,n,l.getNode().getChild(n),r,s,a,o);if(Q(n)){let c=new _e(null);return l.getNode().forEachChild(Jt,(u,d)=>{c=c.set(new ae(u),d)}),ac(t,e,n,c,r,s,a,o)}else return e}else{let c=new _e(null);return i.foreach((u,d)=>{const h=we(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),ac(t,e,n,c,r,s,a,o)}}function nA(t,e,n,i,r){const s=e.serverCache,o=nm(e,s.getNode(),s.isFullyInitialized()||Q(n),s.isFiltered());return cm(t,o,n,i,lm,r)}function iA(t,e,n,i,r,s){let o;if(Bo(i,n)!=null)return e;{const a=new Fu(i,e,r),l=e.eventCache.getNode();let c;if(Q(n)||Y(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wo(i,Ti(e));else{const d=e.serverCache.getNode();R(d instanceof H,"serverChildren would be complete if leaf node"),u=Lu(i,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=Y(n);let d=Mu(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,pe(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,H.EMPTY_NODE,pe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wo(i,Ti(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Bo(i,ie())!=null,Xr(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,r=new Nu(i.getIndex()),s=v0(i);this.processor_=Q0(s);const o=n.serverCache,a=n.eventCache,l=r.updateFullNode(H.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(H.EMPTY_NODE,a.getNode(),null),u=new Kn(l,o.isFullyInitialized(),r.filtersNodes()),d=new Kn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ea(d,u),this.eventGenerator_=new k0(this.query_)}get query(){return this.query_}}function sA(t){return t.viewCache_.serverCache.getNode()}function oA(t){return Uo(t.viewCache_)}function aA(t,e){const n=Ti(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Q(e)&&!n.getImmediateChild(Y(e)).isEmpty())?n.getChild(e):null}function ef(t){return t.eventRegistrations_.length===0}function lA(t,e){t.eventRegistrations_.push(e)}function tf(t,e,n){const i=[];if(n){R(e==null,"A cancel should cancel all event registrations.");const r=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=r}else t.eventRegistrations_=[];return i}function nf(t,e,n,i){e.type===Pt.MERGE&&e.source.queryId!==null&&(R(Ti(t.viewCache_),"We should always have a full cache before handling merges"),R(Uo(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=X0(t.processor_,r,e,n,i);return J0(t.processor_,s.viewCache),R(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,um(t,s.changes,s.viewCache.eventCache.getNode(),null)}function cA(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(me,(s,o)=>{i.push(cr(s,o))}),n.isFullyInitialized()&&i.push(tm(n.getNode())),um(t,i,n.getNode(),e)}function um(t,e,n,i){const r=i?[i]:t.eventRegistrations_;return P0(t.eventGenerator_,e,n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o;class dm{constructor(){this.views=new Map}}function uA(t){R(!$o,"__referenceConstructor has already been defined"),$o=t}function dA(){return R($o,"Reference.ts has not been loaded"),$o}function hA(t){return t.views.size===0}function Uu(t,e,n,i){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return R(s!=null,"SyncTree gave us an op for an invalid query."),nf(s,e,n,i)}else{let s=[];for(const o of t.views.values())s=s.concat(nf(o,e,n,i));return s}}function hm(t,e,n,i,r){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Wo(n,r?i:null),l=!1;a?l=!0:i instanceof H?(a=Lu(n,i),l=!1):(a=H.EMPTY_NODE,l=!1);const c=Ea(new Kn(a,l,!1),new Kn(i,r,!1));return new rA(e,c)}return o}function fA(t,e,n,i,r,s){const o=hm(t,e,i,r,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),lA(o,n),cA(o,n)}function pA(t,e,n,i){const r=e._queryIdentifier,s=[];let o=[];const a=Gn(t);if(r==="default")for(const[l,c]of t.views.entries())o=o.concat(tf(c,n,i)),ef(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(r);l&&(o=o.concat(tf(l,n,i)),ef(l)&&(t.views.delete(r),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Gn(t)&&s.push(new(dA())(e._repo,e._path)),{removed:s,events:o}}function fm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Un(t,e){let n=null;for(const i of t.views.values())n=n||aA(i,e);return n}function pm(t,e){if(e._queryParams.loadsAllData())return Ca(t);{const i=e._queryIdentifier;return t.views.get(i)}}function gm(t,e){return pm(t,e)!=null}function Gn(t){return Ca(t)!=null}function Ca(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;function gA(t){R(!Vo,"__referenceConstructor has already been defined"),Vo=t}function _A(){return R(Vo,"Reference.ts has not been loaded"),Vo}let mA=1;class rf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=q0(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wu(t,e,n,i,r){return D0(t.pendingWriteTree_,e,n,i,r),r?Rr(t,new Ci(Ou(),e,n)):[]}function vA(t,e,n,i){L0(t.pendingWriteTree_,e,n,i);const r=_e.fromObject(n);return Rr(t,new ur(Ou(),e,r))}function xn(t,e,n=!1){const i=M0(t.pendingWriteTree_,e);if(F0(t.pendingWriteTree_,e)){let s=new _e(null);return i.snap!=null?s=s.set(ie(),!0):Ue(i.children,o=>{s=s.set(new ae(o),!0)}),Rr(t,new Fo(i.path,s,n))}else return[]}function Ws(t,e,n){return Rr(t,new Ci(xu(),e,n))}function yA(t,e,n){const i=_e.fromObject(n);return Rr(t,new ur(xu(),e,i))}function wA(t,e){return Rr(t,new Is(xu(),e))}function bA(t,e,n){const i=Bu(t,n);if(i){const r=Hu(i),s=r.path,o=r.queryId,a=Qe(s,e),l=new Is(Du(o),a);return $u(t,s,l)}else return[]}function jo(t,e,n,i,r=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||gm(o,e))){const l=pA(o,e,n,i);hA(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,g)=>Gn(g));if(u&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=CA(h);for(let m=0;m<g.length;++m){const b=g[m],P=b.query,x=ym(t,b);t.listenProvider_.startListening(es(P),Cs(t,P),x.hashFn,x.onComplete)}}}!d&&c.length>0&&!i&&(u?t.listenProvider_.stopListening(es(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(Sa(h));t.listenProvider_.stopListening(es(h),g)}))}TA(t,c)}return a}function _m(t,e,n,i){const r=Bu(t,i);if(r!=null){const s=Hu(r),o=s.path,a=s.queryId,l=Qe(o,e),c=new Ci(Du(a),l,n);return $u(t,o,c)}else return[]}function EA(t,e,n,i){const r=Bu(t,i);if(r){const s=Hu(r),o=s.path,a=s.queryId,l=Qe(o,e),c=_e.fromObject(n),u=new ur(Du(a),l,c);return $u(t,o,u)}else return[]}function lc(t,e,n,i=!1){const r=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(r,(h,g)=>{const m=Qe(h,r);s=s||Un(g,m),o=o||Gn(g)});let a=t.syncPointTree_.get(r);a?(o=o||Gn(a),s=s||Un(a,ie())):(a=new dm,t.syncPointTree_=t.syncPointTree_.set(r,a));let l;s!=null?l=!0:(l=!1,s=H.EMPTY_NODE,t.syncPointTree_.subtree(r).foreachChild((g,m)=>{const b=Un(m,ie());b&&(s=s.updateImmediateChild(g,b))}));const c=gm(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Sa(e);R(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=SA();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const u=Ia(t.pendingWriteTree_,r);let d=fA(a,e,n,u,s,l);if(!c&&!o&&!i){const h=pm(a,e);d=d.concat(RA(t,e,h))}return d}function Ta(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Qe(o,e),c=Un(a,l);if(c)return c});return sm(r,e,s,n,!0)}function IA(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=Qe(c,n);i=i||Un(u,d)});let r=t.syncPointTree_.get(n);r?i=i||Un(r,ie()):(r=new dm,t.syncPointTree_=t.syncPointTree_.set(n,r));const s=i!=null,o=s?new Kn(i,!0,!1):null,a=Ia(t.pendingWriteTree_,e._path),l=hm(r,e,a,s?o.getNode():H.EMPTY_NODE,s);return oA(l)}function Rr(t,e){return mm(e,t.syncPointTree_,null,Ia(t.pendingWriteTree_,ie()))}function mm(t,e,n,i){if(Q(t.path))return vm(t,e,n,i);{const r=e.get(ie());n==null&&r!=null&&(n=Un(r,ie()));let s=[];const o=Y(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=om(i,o);s=s.concat(mm(a,l,c,u))}return r&&(s=s.concat(Uu(r,t,i,n))),s}}function vm(t,e,n,i){const r=e.get(ie());n==null&&r!=null&&(n=Un(r,ie()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=om(i,o),u=t.operationForChild(o);u&&(s=s.concat(vm(u,a,l,c)))}),r&&(s=s.concat(Uu(r,t,i,n))),s}function ym(t,e){const n=e.query,i=Cs(t,n);return{hashFn:()=>(sA(e)||H.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?bA(t,n._path,i):wA(t,n._path);{const s=vR(r,n);return jo(t,n,null,s)}}}}function Cs(t,e){const n=Sa(e);return t.queryToTagMap.get(n)}function Sa(t){return t._path.toString()+"$"+t._queryIdentifier}function Bu(t,e){return t.tagToQueryMap.get(e)}function Hu(t){const e=t.indexOf("$");return R(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ae(t.substr(0,e))}}function $u(t,e,n){const i=t.syncPointTree_.get(e);R(i,"Missing sync point for query tag that we're tracking");const r=Ia(t.pendingWriteTree_,e);return Uu(i,n,r,null)}function CA(t){return t.fold((e,n,i)=>{if(n&&Gn(n))return[Ca(n)];{let r=[];return n&&(r=fm(n)),Ue(i,(s,o)=>{r=r.concat(o)}),r}})}function es(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(_A())(t._repo,t._path):t}function TA(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const r=Sa(i),s=t.queryToTagMap.get(r);t.queryToTagMap.delete(r),t.tagToQueryMap.delete(s)}}}function SA(){return mA++}function RA(t,e,n){const i=e._path,r=Cs(t,e),s=ym(t,n),o=t.listenProvider_.startListening(es(e),r,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(i);if(r)R(!Gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!Q(c)&&u&&Gn(u))return[Ca(u).query];{let h=[];return u&&(h=h.concat(fm(u).map(g=>g.query))),Ue(d,(g,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(es(u),Cs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vu(n)}node(){return this.node_}}class ju{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=we(this.path_,e);return new ju(this.syncTree_,n)}node(){return Ta(this.syncTree_,this.path_)}}const AA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},sf=function(t,e,n){if(!t||typeof t!="object")return t;if(R(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return kA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return PA(t[".sv"],e);R(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},kA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:R(!1,"Unexpected server value: "+t)}},PA=function(t,e,n){t.hasOwnProperty("increment")||R(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&R(!1,"Unexpected increment value: "+i);const r=e.node();if(R(r!==null&&typeof r!="undefined","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},wm=function(t,e,n,i){return qu(e,new ju(n,t),i)},zu=function(t,e,n){return qu(t,new Vu(e),n)};function qu(t,e,n){const i=t.getPriority().val(),r=sf(i,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=sf(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new xe(a,Ee(r)):t}else{const o=t;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new xe(r))),o.forEachChild(me,(a,l)=>{const c=qu(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Ra(t,e){let n=e instanceof ae?e:new ae(e),i=t,r=Y(n);for(;r!==null;){const s=wi(i.node.children,r)||{children:{},childCount:0};i=new Ku(r,i,s),n=pe(n),r=Y(n)}return i}function Li(t){return t.node.value}function Gu(t,e){t.node.value=e,cc(t)}function bm(t){return t.node.childCount>0}function NA(t){return Li(t)===void 0&&!bm(t)}function Aa(t,e){Ue(t.node.children,(n,i)=>{e(new Ku(n,t,i))})}function Em(t,e,n,i){n&&!i&&e(t),Aa(t,r=>{Em(r,e,!0,i)}),n&&i&&e(t)}function OA(t,e,n){let i=n?t:t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Bs(t){return new ae(t.parent===null?t.name:Bs(t.parent)+"/"+t.name)}function cc(t){t.parent!==null&&xA(t.parent,t.name,t)}function xA(t,e,n){const i=NA(n),r=ht(t.node.children,e);i&&r?(delete t.node.children[e],t.node.childCount--,cc(t)):!i&&!r&&(t.node.children[e]=n.node,t.node.childCount++,cc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=/[\[\].#$\/\u0000-\u001F\u007F]/,LA=/[\[\].#$\u0000-\u001F\u007F]/,gl=10*1024*1024,ka=function(t){return typeof t=="string"&&t.length!==0&&!DA.test(t)},Im=function(t){return typeof t=="string"&&t.length!==0&&!LA.test(t)},MA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Im(t)},Ts=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!va(t)||t&&typeof t=="object"&&ht(t,".sv")},tn=function(t,e,n,i){i&&e===void 0||Hs(nt(t,"value"),e,n)},Hs=function(t,e,n){const i=n instanceof ae?new XR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ri(i));if(typeof e=="function")throw new Error(t+"contains a function "+ri(i)+" with contents = "+e.toString());if(va(e))throw new Error(t+"contains "+e.toString()+" "+ri(i));if(typeof e=="string"&&e.length>gl/3&&la(e)>gl)throw new Error(t+"contains a string greater than "+gl+" utf8 bytes "+ri(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(Ue(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ka(o)))throw new Error(t+" contains an invalid key ("+o+") "+ri(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZR(i,o),Hs(t,a,i),e0(i)}),r&&s)throw new Error(t+' contains ".value" child '+ri(i)+" in addition to actual children.")}},FA=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const s=ys(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!ka(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(JR);let r=null;for(n=0;n<e.length;n++){if(i=e[n],r!==null&&yt(r,i))throw new Error(t+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Cm=function(t,e,n,i){if(i&&e===void 0)return;const r=nt(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];Ue(e,(o,a)=>{const l=new ae(o);if(Hs(r,a,we(n,l)),Tu(l)===".priority"&&!Ts(a))throw new Error(r+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),FA(r,s)},Yu=function(t,e,n){if(!(n&&e===void 0)){if(va(e))throw new Error(nt(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ts(e))throw new Error(nt(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},$s=function(t,e,n,i){if(!(i&&n===void 0)&&!ka(n))throw new Error(nt(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},Ss=function(t,e,n,i){if(!(i&&n===void 0)&&!Im(n))throw new Error(nt(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},UA=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ss(t,e,n,i)},wt=function(t,e){if(Y(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Tm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ka(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!MA(n))throw new Error(nt(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pa(t,e){let n=null;for(let i=0;i<e.length;i++){const r=e[i],s=r.getPath();n!==null&&!Su(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Sm(t,e,n){Pa(t,n),Rm(t,i=>Su(i,e))}function ft(t,e,n){Pa(t,n),Rm(t,i=>yt(i,e)||yt(e,i))}function Rm(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const r=t.eventLists_[i];if(r){const s=r.path;e(s)?(BA(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function BA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();vi&&Me("event: "+n.toString()),Tr(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="repo_interrupt",HA=25;class $A{constructor(e,n,i,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new WA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mo(),this.transactionQueueTree_=new Ku,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VA(t,e,n){if(t.stats_=Iu(t.repoInfo_),t.forceRestClient_||ER())t.server_=new Lo(t.repoInfo_,(i,r,s,o)=>{of(t,i,r,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>af(t,!0),0);else{if(typeof n!="undefined"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ne(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new pn(t.repoInfo_,e,(i,r,s,o)=>{of(t,i,r,s,o)},i=>{af(t,i)},i=>{jA(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=RR(t.repoInfo_,()=>new A0(t.stats_,t.server_)),t.infoData_=new I0,t.infoSyncTree_=new rf({startListening:(i,r,s,o)=>{let a=[];const l=t.infoData_.getNode(i._path);return l.isEmpty()||(a=Ws(t.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qu(t,"connected",!1),t.serverSyncTree_=new rf({startListening:(i,r,s,o)=>(t.server_.listen(i,s,r,(a,l)=>{const c=o(a,l);ft(t.eventQueue_,i._path,c)}),[]),stopListening:(i,r)=>{t.server_.unlisten(i,r)}})}function km(t){const n=t.infoData_.getNode(new ae(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vs(t){return AA({timestamp:km(t)})}function of(t,e,n,i,r){t.dataUpdateCount++;const s=new ae(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(i){const l=To(n,c=>Ee(c));o=EA(t.serverSyncTree_,s,l,r)}else{const l=Ee(n);o=_m(t.serverSyncTree_,s,l,r)}else if(i){const l=To(n,c=>Ee(c));o=yA(t.serverSyncTree_,s,l)}else{const l=Ee(n);o=Ws(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=hr(t,s)),ft(t.eventQueue_,a,o)}function af(t,e){Qu(t,"connected",e),e===!1&&KA(t)}function jA(t,e){Ue(e,(n,i)=>{Qu(t,n,i)})}function Qu(t,e,n){const i=new ae("/.info/"+e),r=Ee(n);t.infoData_.updateSnapshot(i,r);const s=Ws(t.infoSyncTree_,i,r);ft(t.eventQueue_,i,s)}function Na(t){return t.nextWriteId_++}function zA(t,e,n){const i=IA(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(r=>{const s=Ee(r).withIndex(e._queryParams.getIndex());lc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ws(t.serverSyncTree_,e._path,s);else{const a=Cs(t.serverSyncTree_,e);o=_m(t.serverSyncTree_,e._path,s,a)}return ft(t.eventQueue_,e._path,o),jo(t.serverSyncTree_,e,n,null,!0),s},r=>(Ar(t,"get for query "+Ne(e)+" failed: "+r),Promise.reject(new Error(r))))}function Ju(t,e,n,i,r){Ar(t,"set",{path:e.toString(),value:n,priority:i});const s=Vs(t),o=Ee(n,i),a=Ta(t.serverSyncTree_,e),l=zu(o,a,s),c=Na(t),u=Wu(t.serverSyncTree_,e,l,c,!0);Pa(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const m=h==="ok";m||Ke("set at "+e+" failed: "+h);const b=xn(t.serverSyncTree_,c,!m);ft(t.eventQueue_,e,b),Yn(t,r,h,g)});const d=Zu(t,e);hr(t,d),ft(t.eventQueue_,d,[])}function qA(t,e,n,i){Ar(t,"update",{path:e.toString(),value:n});let r=!0;const s=Vs(t),o={};if(Ue(n,(a,l)=>{r=!1,o[a]=wm(we(e,a),Ee(l),t.serverSyncTree_,s)}),r)Me("update() called with empty data.  Don't do anything."),Yn(t,i,"ok",void 0);else{const a=Na(t),l=vA(t.serverSyncTree_,e,o,a);Pa(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Ke("update at "+e+" failed: "+c);const h=xn(t.serverSyncTree_,a,!d),g=h.length>0?hr(t,e):e;ft(t.eventQueue_,g,h),Yn(t,i,c,u)}),Ue(n,c=>{const u=Zu(t,we(e,c));hr(t,u)}),ft(t.eventQueue_,e,[])}}function KA(t){Ar(t,"onDisconnectEvents");const e=Vs(t),n=Mo();nc(t.onDisconnect_,ie(),(r,s)=>{const o=wm(r,s,t.serverSyncTree_,e);Sr(n,r,o)});let i=[];nc(n,ie(),(r,s)=>{i=i.concat(Ws(t.serverSyncTree_,r,s));const o=Zu(t,r);hr(t,o)}),t.onDisconnect_=Mo(),ft(t.eventQueue_,ie(),i)}function GA(t,e,n){t.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&tc(t.onDisconnect_,e),Yn(t,n,i,r)})}function lf(t,e,n,i){const r=Ee(n);t.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&Sr(t.onDisconnect_,e,r),Yn(t,i,s,o)})}function YA(t,e,n,i,r){const s=Ee(n,i);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Sr(t.onDisconnect_,e,s),Yn(t,r,o,a)})}function QA(t,e,n,i){if(Co(n)){Me("onDisconnect().update() called with empty data.  Don't do anything."),Yn(t,i,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(r,s)=>{r==="ok"&&Ue(n,(o,a)=>{const l=Ee(a);Sr(t.onDisconnect_,we(e,o),l)}),Yn(t,i,r,s)})}function JA(t,e,n){let i;Y(e._path)===".info"?i=lc(t.infoSyncTree_,e,n):i=lc(t.serverSyncTree_,e,n),Sm(t.eventQueue_,e._path,i)}function uc(t,e,n){let i;Y(e._path)===".info"?i=jo(t.infoSyncTree_,e,n):i=jo(t.serverSyncTree_,e,n),Sm(t.eventQueue_,e._path,i)}function Pm(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Am)}function XA(t){t.persistentConnection_&&t.persistentConnection_.resume(Am)}function Ar(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Me(n,...e)}function Yn(t,e,n,i){e&&Tr(()=>{if(n==="ok")e(null);else{const r=(n||"error").toUpperCase();let s=r;i&&(s+=": "+i);const o=new Error(s);o.code=r,e(o)}})}function ZA(t,e,n,i,r,s){Ar(t,"transaction on "+e);const o={path:e,update:n,onComplete:i,status:null,order:T_(),applyLocally:s,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Xu(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Hs("transaction failed: Data returned ",l,o.path),o.status=0;const c=Ra(t.transactionQueueTree_,e),u=Li(c)||[];u.push(o),Gu(c,u);let d;typeof l=="object"&&l!==null&&ht(l,".priority")?(d=wi(l,".priority"),R(Ts(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(Ta(t.serverSyncTree_,e)||H.EMPTY_NODE).getPriority().val();const h=Vs(t),g=Ee(l,d),m=zu(g,a,h);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=m,o.currentWriteId=Na(t);const b=Wu(t.serverSyncTree_,e,m,o.currentWriteId,o.applyLocally);ft(t.eventQueue_,e,b),Oa(t,t.transactionQueueTree_)}}function Xu(t,e,n){return Ta(t.serverSyncTree_,e,n)||H.EMPTY_NODE}function Oa(t,e=t.transactionQueueTree_){if(e||xa(t,e),Li(e)){const n=Om(t,e);R(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&ek(t,Bs(e),n)}else bm(e)&&Aa(e,n=>{Oa(t,n)})}function ek(t,e,n){const i=n.map(c=>c.currentWriteId),r=Xu(t,e,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const u=n[c];R(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Qe(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ar(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(xn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();xa(t,Ra(t.transactionQueueTree_,e)),Oa(t,t.transactionQueueTree_),ft(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Tr(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}hr(t,e)}},o)}function hr(t,e){const n=Nm(t,e),i=Bs(n),r=Om(t,n);return tk(t,r,i),i}function tk(t,e,n){if(e.length===0)return;const i=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Qe(n,l.path);let u=!1,d;if(R(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,r=r.concat(xn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HA)u=!0,d="maxretry",r=r.concat(xn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Xu(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){Hs("transaction failed: Data returned ",g,l.path);let m=Ee(g);typeof g=="object"&&g!=null&&ht(g,".priority")||(m=m.updatePriority(h.getPriority()));const P=l.currentWriteId,x=Vs(t),E=zu(m,h,x);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=E,l.currentWriteId=Na(t),o.splice(o.indexOf(P),1),r=r.concat(Wu(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),r=r.concat(xn(t.serverSyncTree_,P,!0))}else u=!0,d="nodata",r=r.concat(xn(t.serverSyncTree_,l.currentWriteId,!0))}ft(t.eventQueue_,n,r),r=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}xa(t,t.transactionQueueTree_);for(let a=0;a<i.length;a++)Tr(i[a]);Oa(t,t.transactionQueueTree_)}function Nm(t,e){let n,i=t.transactionQueueTree_;for(n=Y(e);n!==null&&Li(i)===void 0;)i=Ra(i,n),e=pe(e),n=Y(e);return i}function Om(t,e){const n=[];return xm(t,e,n),n.sort((i,r)=>i.order-r.order),n}function xm(t,e,n){const i=Li(e);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Aa(e,r=>{xm(t,r,n)})}function xa(t,e){const n=Li(e);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,Gu(e,n.length>0?n:void 0)}Aa(e,i=>{xa(t,i)})}function Zu(t,e){const n=Bs(Nm(t,e)),i=Ra(t.transactionQueueTree_,e);return OA(i,r=>{_l(t,r)}),_l(t,i),Em(i,r=>{_l(t,r)}),n}function _l(t,e){const n=Li(e);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(R(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(R(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(xn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Gu(e,void 0):n.length=s+1,ft(t.eventQueue_,Bs(e),r);for(let o=0;o<i.length;o++)Tr(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function ik(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const dc=function(t,e){const n=rk(t),i=n.namespace;n.domain==="firebase.com"&&en(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&en("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fR();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new W_(n.host,n.secure,i,r,e,"",i!==n.subdomain),path:new ae(n.pathString)}},rk=function(t){let e="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(r=nk(t.substring(u,d)));const h=ik(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sk=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=cf.charAt(n%64),n=Math.floor(n/64);R(n===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=cf.charAt(e[r]);return R(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,i,r){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ne(this.snapshot.exportVal())}}class Lm{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return R(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Ze;return GA(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){wt("OnDisconnect.remove",this._path);const e=new Ze;return lf(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){wt("OnDisconnect.set",this._path),tn("OnDisconnect.set",e,this._path,!1);const n=new Ze;return lf(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){wt("OnDisconnect.setWithPriority",this._path),tn("OnDisconnect.setWithPriority",e,this._path,!1),Yu("OnDisconnect.setWithPriority",n,!1);const i=new Ze;return YA(this._repo,this._path,e,n,i.wrapCallback(()=>{})),i.promise}update(e){wt("OnDisconnect.update",this._path),Cm("OnDisconnect.update",e,this._path,!1);const n=new Ze;return QA(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,i,r){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Q(this._path)?null:Tu(this._path)}get ref(){return new It(this._repo,this._path)}get _queryIdentifier(){const e=Kh(this._queryParams),n=bu(e);return n==="{}"?"default":n}get _queryObject(){return Kh(this._queryParams)}isEqual(e){if(e=z(e),!(e instanceof st))return!1;const n=this._repo===e._repo,i=Su(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+QR(this._path)}}function Da(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Xn(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Jt){const i="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==zn)throw new Error(i);if(typeof e!="string")throw new Error(r)}if(t.hasEnd()){if(t.getIndexEndName()!==vn)throw new Error(i);if(typeof n!="string")throw new Error(r)}}else if(t.getIndex()===me){if(e!=null&&!Ts(e)||n!=null&&!Ts(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(R(t.getIndex()instanceof ku||t.getIndex()===Pu,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function La(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class It extends st{constructor(e,n){super(e,n,new wa,!1)}get parent(){const e=G_(this._path);return e===null?null:new It(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Si{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ae(e),i=Ri(this.ref,e);return new Si(this._node.getChild(n),i,me)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new Si(r,Ri(this.ref,i),me)))}hasChild(e){const n=new ae(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Mm(t,e){return t=z(t),t._checkNotDeleted("ref"),e!==void 0?Ri(t._root,e):t._root}function uf(t,e){t=z(t),t._checkNotDeleted("refFromURL");const n=dc(e,t._repo.repoInfo_.nodeAdmin);Tm("refFromURL",n);const i=n.repoInfo;return!t._repo.repoInfo_.isCustomHost()&&i.host!==t._repo.repoInfo_.host&&en("refFromURL: Host name does not match the current database: (found "+i.host+" but expected "+t._repo.repoInfo_.host+")"),Mm(t,n.path.toString())}function Ri(t,e){return t=z(t),Y(t._path)===null?UA("child","path",e,!1):Ss("child","path",e,!1),new It(t._repo,we(t._path,e))}function ak(t,e){t=z(t),wt("push",t._path),tn("push",e,t._path,!0);const n=km(t._repo),i=sk(n),r=Ri(t,i),s=Ri(t,i);let o;return e!=null?o=td(s,e).then(()=>s):o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function lk(t){return wt("remove",t._path),td(t,null)}function td(t,e){t=z(t),wt("set",t._path),tn("set",e,t._path,!1);const n=new Ze;return Ju(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ck(t,e){t=z(t),wt("setPriority",t._path),Yu("setPriority",e,!1);const n=new Ze;return Ju(t._repo,we(t._path,".priority"),e,null,n.wrapCallback(()=>{})),n.promise}function uk(t,e,n){if(wt("setWithPriority",t._path),tn("setWithPriority",e,t._path,!1),Yu("setWithPriority",n,!1),t.key===".length"||t.key===".keys")throw"setWithPriority failed: "+t.key+" is a read-only object.";const i=new Ze;return Ju(t._repo,t._path,e,n,i.wrapCallback(()=>{})),i.promise}function dk(t,e){Cm("update",e,t._path,!1);const n=new Ze;return qA(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function hk(t){t=z(t);const e=new ed(()=>{}),n=new js(e);return zA(t._repo,t,n).then(i=>new Si(i,new It(t._repo,t._path),t._queryParams.getIndex()))}class js{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new Dm("value",this,new Si(e.snapshotNode,new It(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lm(this,e,n):null}matches(e){return e instanceof js?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ma{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Lm(this,e,n):null}createEvent(e,n){R(e.childName!=null,"Child events should have a childName.");const i=Ri(new It(n._repo,n._path),e.childName),r=n._queryParams.getIndex();return new Dm(e.type,this,new Si(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ma?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function zs(t,e,n,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){const l=n,c=(u,d)=>{uc(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new ed(n,s||void 0),a=e==="value"?new js(o):new Ma(e,o);return JA(t._repo,t,a),()=>uc(t._repo,t,a)}function hc(t,e,n,i){return zs(t,"value",e,n,i)}function df(t,e,n,i){return zs(t,"child_added",e,n,i)}function hf(t,e,n,i){return zs(t,"child_changed",e,n,i)}function ff(t,e,n,i){return zs(t,"child_moved",e,n,i)}function pf(t,e,n,i){return zs(t,"child_removed",e,n,i)}function gf(t,e,n){let i=null;const r=n?new ed(n):null;e==="value"?i=new js(r):e&&(i=new Ma(e,r)),uc(t._repo,t,i)}class Bt{}class Fm extends Bt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){tn("endAt",this._value,e._path,!0);const n=ec(e._queryParams,this._value,this._key);if(La(n),Xn(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new st(e._repo,e._path,n,e._orderByCalled)}}function fk(t,e){return $s("endAt","key",e,!0),new Fm(t,e)}class pk extends Bt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){tn("endBefore",this._value,e._path,!1);const n=E0(e._queryParams,this._value,this._key);if(La(n),Xn(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new st(e._repo,e._path,n,e._orderByCalled)}}function gk(t,e){return $s("endBefore","key",e,!0),new pk(t,e)}class Um extends Bt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){tn("startAt",this._value,e._path,!0);const n=Zl(e._queryParams,this._value,this._key);if(La(n),Xn(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new st(e._repo,e._path,n,e._orderByCalled)}}function _k(t=null,e){return $s("startAt","key",e,!0),new Um(t,e)}class mk extends Bt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){tn("startAfter",this._value,e._path,!1);const n=b0(e._queryParams,this._value,this._key);if(La(n),Xn(n),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new st(e._repo,e._path,n,e._orderByCalled)}}function vk(t,e){return $s("startAfter","key",e,!0),new mk(t,e)}class yk extends Bt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new st(e._repo,e._path,y0(e._queryParams,this._limit),e._orderByCalled)}}function wk(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new yk(t)}class bk extends Bt{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new st(e._repo,e._path,w0(e._queryParams,this._limit),e._orderByCalled)}}function Ek(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new bk(t)}class Ik extends Bt{constructor(e){super(),this._path=e}_apply(e){Da(e,"orderByChild");const n=new ae(this._path);if(Q(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const i=new ku(n),r=ba(e._queryParams,i);return Xn(r),new st(e._repo,e._path,r,!0)}}function Ck(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Ss("orderByChild","path",t,!1),new Ik(t)}class Tk extends Bt{_apply(e){Da(e,"orderByKey");const n=ba(e._queryParams,Jt);return Xn(n),new st(e._repo,e._path,n,!0)}}function Sk(){return new Tk}class Rk extends Bt{_apply(e){Da(e,"orderByPriority");const n=ba(e._queryParams,me);return Xn(n),new st(e._repo,e._path,n,!0)}}function Ak(){return new Rk}class kk extends Bt{_apply(e){Da(e,"orderByValue");const n=ba(e._queryParams,Pu);return Xn(n),new st(e._repo,e._path,n,!0)}}function Pk(){return new kk}class Nk extends Bt{constructor(e,n){super(),this._value=e,this._key=n}_apply(e){if(tn("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new Fm(this._value,this._key)._apply(new Um(this._value,this._key)._apply(e))}}function Ok(t,e){return $s("equalTo","key",e,!0),new Nk(t,e)}function Tt(t,...e){let n=z(t);for(const i of e)n=i._apply(n);return n}uA(It);gA(It);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="FIREBASE_DATABASE_EMULATOR_HOST",fc={};let Dk=!1;function Lk(t,e,n,i){t.repoInfo_=new W_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),i&&(t.authTokenProvider_=i)}function Wm(t,e,n,i,r){let s=i||t.options.databaseURL;s===void 0&&(t.options.projectId||en("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Me("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=dc(s,r),a=o.repoInfo,l,c;typeof process!="undefined"&&process.env&&(c=process.env[xk]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=dc(s,r),a=o.repoInfo):l=!o.repoInfo.secure;const u=r&&l?new nr(nr.OWNER):new CR(t.name,t.options,e);Tm("Invalid Firebase Database URL",o),Q(o.path)||en("Database URL must point to the root of a Firebase Database (not including a child path).");const d=Fk(a,t,u,new IR(t.name,n));return new Uk(d,t)}function Mk(t,e){const n=fc[e];(!n||n[t.key]!==t)&&en(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Pm(t),delete n[t.key]}function Fk(t,e,n,i){let r=fc[e.name];r||(r={},fc[e.name]=r);let s=r[t.toURLString()];return s&&en("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new $A(t,Dk,n,i),r[t.toURLString()]=s,s}class Uk{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new It(this._repo,ie())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Mk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&en("Cannot call "+e+" on a deleted database.")}}function Bm(){lr.IS_TRANSPORT_INITIALIZED&&Ke("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function Wk(){Bm(),On.forceDisallow()}function Bk(){Bm(),mt.forceDisallow(),On.forceAllow()}function Hk(t,e,n,i={}){t=z(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&en("Cannot call useEmulator() after instance has already been initialized.");const r=t._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&en('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new nr(nr.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Hb(i.mockUserToken,t.app.options.projectId);s=new nr(o)}Lk(r,e,n,s)}function $k(t){t=z(t),t._checkNotDeleted("goOffline"),Pm(t._repo)}function Vk(t){t=z(t),t._checkNotDeleted("goOnline"),XA(t._repo)}function jk(t,e){R_(t,e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){I_(Qn),Vn(new Mt("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Wm(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),xt(Ph,Nh,t),xt(Ph,Nh,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk={".sv":"timestamp"};function Kk(){return qk}function Gk(t){return{".sv":{increment:t}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Qk(t,e,n){var i;if(t=z(t),wt("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const r=(i=n==null?void 0:n.applyLocally)!==null&&i!==void 0?i:!0,s=new Ze,o=(l,c,u)=>{let d=null;l?s.reject(l):(d=new Si(u,new It(t._repo,t._path),me),s.resolve(new Yk(c,d)))},a=hc(t,()=>{});return ZA(t._repo,t._path,e,o,a,r),s.promise}pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};zk();const Jk="@firebase/database-compat",Xk="1.0.0";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Ps("@firebase/database-compat"),Hm=function(t){const e="FIREBASE WARNING: "+t;Zk.warn(e)};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=function(t,e,n,i){if(!(i&&n===void 0)&&typeof n!="boolean")throw new Error(nt(t,e)+"must be a boolean.")},tP=function(t,e,n){if(!(n&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(nt(t,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e){this._delegate=e}cancel(e){$("OnDisconnect.cancel",0,1,arguments.length),De("OnDisconnect.cancel","onComplete",e,!0);const n=this._delegate.cancel();return e&&n.then(()=>e(null),i=>e(i)),n}remove(e){$("OnDisconnect.remove",0,1,arguments.length),De("OnDisconnect.remove","onComplete",e,!0);const n=this._delegate.remove();return e&&n.then(()=>e(null),i=>e(i)),n}set(e,n){$("OnDisconnect.set",1,2,arguments.length),De("OnDisconnect.set","onComplete",n,!0);const i=this._delegate.set(e);return n&&i.then(()=>n(null),r=>n(r)),i}setWithPriority(e,n,i){$("OnDisconnect.setWithPriority",2,3,arguments.length),De("OnDisconnect.setWithPriority","onComplete",i,!0);const r=this._delegate.setWithPriority(e,n);return i&&r.then(()=>i(null),s=>i(s)),r}update(e,n){if($("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,Hm("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}De("OnDisconnect.update","onComplete",n,!0);const i=this._delegate.update(e);return n&&i.then(()=>n(null),r=>n(r)),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return $("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,n){this._database=e,this._delegate=n}val(){return $("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return $("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return $("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return $("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return $("DataSnapshot.child",0,1,arguments.length),e=String(e),Ss("DataSnapshot.child","path",e,!1),new Wn(this._database,this._delegate.child(e))}hasChild(e){return $("DataSnapshot.hasChild",1,1,arguments.length),Ss("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return $("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return $("DataSnapshot.forEach",1,1,arguments.length),De("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(n=>e(new Wn(this._database,n)))}hasChildren(){return $("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return $("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return $("DataSnapshot.ref",0,0,arguments.length),new lt(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class We{constructor(e,n){this.database=e,this._delegate=n}on(e,n,i,r){var s;$("Query.on",2,4,arguments.length),De("Query.on","callback",n,!1);const o=We.getCancelAndContextArgs_("Query.on",i,r),a=(c,u)=>{n.call(o.context,new Wn(this.database,c),u)};a.userCallback=n,a.context=o.context;const l=(s=o.cancel)===null||s===void 0?void 0:s.bind(o.context);switch(e){case"value":return hc(this._delegate,a,l),n;case"child_added":return df(this._delegate,a,l),n;case"child_removed":return pf(this._delegate,a,l),n;case"child_changed":return hf(this._delegate,a,l),n;case"child_moved":return ff(this._delegate,a,l),n;default:throw new Error(nt("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,n,i){if($("Query.off",0,3,arguments.length),tP("Query.off",e,!0),De("Query.off","callback",n,!0),nh("Query.off","context",i,!0),n){const r=()=>{};r.userCallback=n,r.context=i,gf(this._delegate,e,r)}else gf(this._delegate,e)}get(){return hk(this._delegate).then(e=>new Wn(this.database,e))}once(e,n,i,r){$("Query.once",1,4,arguments.length),De("Query.once","callback",n,!0);const s=We.getCancelAndContextArgs_("Query.once",i,r),o=new Ze,a=(c,u)=>{const d=new Wn(this.database,c);n&&n.call(s.context,d,u),o.resolve(d)};a.userCallback=n,a.context=s.context;const l=c=>{s.cancel&&s.cancel.call(s.context,c),o.reject(c)};switch(e){case"value":hc(this._delegate,a,l,{onlyOnce:!0});break;case"child_added":df(this._delegate,a,l,{onlyOnce:!0});break;case"child_removed":pf(this._delegate,a,l,{onlyOnce:!0});break;case"child_changed":hf(this._delegate,a,l,{onlyOnce:!0});break;case"child_moved":ff(this._delegate,a,l,{onlyOnce:!0});break;default:throw new Error(nt("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return o.promise}limitToFirst(e){return $("Query.limitToFirst",1,1,arguments.length),new We(this.database,Tt(this._delegate,wk(e)))}limitToLast(e){return $("Query.limitToLast",1,1,arguments.length),new We(this.database,Tt(this._delegate,Ek(e)))}orderByChild(e){return $("Query.orderByChild",1,1,arguments.length),new We(this.database,Tt(this._delegate,Ck(e)))}orderByKey(){return $("Query.orderByKey",0,0,arguments.length),new We(this.database,Tt(this._delegate,Sk()))}orderByPriority(){return $("Query.orderByPriority",0,0,arguments.length),new We(this.database,Tt(this._delegate,Ak()))}orderByValue(){return $("Query.orderByValue",0,0,arguments.length),new We(this.database,Tt(this._delegate,Pk()))}startAt(e=null,n){return $("Query.startAt",0,2,arguments.length),new We(this.database,Tt(this._delegate,_k(e,n)))}startAfter(e=null,n){return $("Query.startAfter",0,2,arguments.length),new We(this.database,Tt(this._delegate,vk(e,n)))}endAt(e=null,n){return $("Query.endAt",0,2,arguments.length),new We(this.database,Tt(this._delegate,fk(e,n)))}endBefore(e=null,n){return $("Query.endBefore",0,2,arguments.length),new We(this.database,Tt(this._delegate,gk(e,n)))}equalTo(e,n){return $("Query.equalTo",1,2,arguments.length),new We(this.database,Tt(this._delegate,Ok(e,n)))}toString(){return $("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return $("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if($("Query.isEqual",1,1,arguments.length),!(e instanceof We)){const n="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(n)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,n,i){const r={cancel:void 0,context:void 0};if(n&&i)r.cancel=n,De(e,"cancel",r.cancel,!0),r.context=i,nh(e,"context",r.context,!0);else if(n)if(typeof n=="object"&&n!==null)r.context=n;else if(typeof n=="function")r.cancel=n;else throw new Error(nt(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new lt(this.database,new It(this._delegate._repo,this._delegate._path))}}class lt extends We{constructor(e,n){super(e,new st(n._repo,n._path,new wa,!1)),this.database=e,this._delegate=n}getKey(){return $("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return $("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new lt(this.database,Ri(this._delegate,e))}getParent(){$("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new lt(this.database,e):null}getRoot(){return $("Reference.root",0,0,arguments.length),new lt(this.database,this._delegate.root)}set(e,n){$("Reference.set",1,2,arguments.length),De("Reference.set","onComplete",n,!0);const i=td(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}update(e,n){if($("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,Hm("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}wt("Reference.update",this._delegate._path),De("Reference.update","onComplete",n,!0);const i=dk(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}setWithPriority(e,n,i){$("Reference.setWithPriority",2,3,arguments.length),De("Reference.setWithPriority","onComplete",i,!0);const r=uk(this._delegate,e,n);return i&&r.then(()=>i(null),s=>i(s)),r}remove(e){$("Reference.remove",0,1,arguments.length),De("Reference.remove","onComplete",e,!0);const n=lk(this._delegate);return e&&n.then(()=>e(null),i=>e(i)),n}transaction(e,n,i){$("Reference.transaction",1,3,arguments.length),De("Reference.transaction","transactionUpdate",e,!1),De("Reference.transaction","onComplete",n,!0),eP("Reference.transaction","applyLocally",i,!0);const r=Qk(this._delegate,e,{applyLocally:i}).then(s=>new iP(s.committed,new Wn(this.database,s.snapshot)));return n&&r.then(s=>n(null,s.committed,s.snapshot),s=>n(s,!1,null)),r}setPriority(e,n){$("Reference.setPriority",1,2,arguments.length),De("Reference.setPriority","onComplete",n,!0);const i=ck(this._delegate,e);return n&&i.then(()=>n(null),r=>n(r)),i}push(e,n){$("Reference.push",0,2,arguments.length),De("Reference.push","onComplete",n,!0);const i=ak(this._delegate,e),r=i.then(o=>new lt(this.database,o));n&&r.then(()=>n(null),o=>n(o));const s=new lt(this.database,i);return s.then=r.then.bind(r),s.catch=r.catch.bind(r,void 0),s}onDisconnect(){return wt("Reference.onDisconnect",this._delegate._path),new nP(new ok(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n){this._delegate=e,this.app=n,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:Wk,forceLongPolling:Bk}}useEmulator(e,n,i={}){Hk(this._delegate,e,n,i)}ref(e){if($("database.ref",0,1,arguments.length),e instanceof lt){const n=uf(this._delegate,e.toString());return new lt(this,n)}else{const n=Mm(this._delegate,e);return new lt(this,n)}}refFromURL(e){$("database.refFromURL",1,1,arguments.length);const i=uf(this._delegate,e);return new lt(this,i)}goOffline(){return $("database.goOffline",0,0,arguments.length),$k(this._delegate)}goOnline(){return $("database.goOnline",0,0,arguments.length),Vk(this._delegate)}}Rs.ServerValue={TIMESTAMP:Kk(),increment:t=>Gk(t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP({app:t,url:e,version:n,customAuthImpl:i,namespace:r,nodeAdmin:s=!1}){I_(n);const o=new ug("auth-internal",new dg("database-standalone"));return o.setComponent(new Mt("auth-internal",()=>i,"PRIVATE")),{instance:new Rs(Wm(t,o,void 0,e,s),t),namespace:r}}var sP=Object.freeze({__proto__:null,initStandalone:rP});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oP=Rs.ServerValue;function aP(t){t.INTERNAL.registerComponent(new Mt("database-compat",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:n});return new Rs(r,i)},"PUBLIC").setServiceProps({Reference:lt,Query:We,Database:Rs,DataSnapshot:Wn,enableLogging:jk,INTERNAL:sP,ServerValue:oP}).setMultipleInstances(!0)),t.registerVersion(Jk,Xk)}aP(wr);const lP={apiKey:"AIzaSyAsHRqOFgU-A7SjTK39oNvIcR-Urod8z44",authDomain:"asquare-chat-74a44.firebaseapp.com",projectId:"asquare-chat-74a44",storageBucket:"asquare-chat-74a44.appspot.com",messagingSenderId:"435416239919",appId:"1:435416239919:web:8eda90a49b1b40f1da1bda",measurementId:"G-6QZD8241RF"};let $m=wr.initializeApp(lP),si=$m.auth(),on=$m.database();var cP=Object.freeze(Object.defineProperty({__proto__:null,firebaseAuth:si,firebaseDb:on},Symbol.toStringTag,{value:"Module"}));let no;const pc={userDetails:{},users:{},messages:{}},uP={setUserDetails(t,e){t.userDetails=e},addUser(t,e){t.users[e.userId]=e.userDetails},updateUser(t,e){Object.assign(t.users[e.userId],e.userDetails)},addMessage(t,e){t.messages[e.messageId]=e.messageDetails},clearMessages(t,e){t.messages={}}},dP={registerUser({},t){si.createUserWithEmailAndPassword(t.email,t.password).then(e=>{let n=si.currentUser.uid;on.ref("users/"+n).set({name:t.name,email:t.email,online:!0})}).catch(e=>{console.log("error:",e.message)})},loginUser({},t){si.signInWithEmailAndPassword(t.email,t.password).then(e=>{console.log("response:",e)}).catch(e=>{console.log("error:",e.message)})},logoutUser(){si.signOut(),console.log("logout")},handleAuthStateChange({commit:t,dispatch:e,state:n}){si.onAuthStateChanged(i=>{if(i){let r=si.currentUser.uid;on.ref("users/"+r).once("value",s=>{let o=s.val();t("setUserDetails",{name:o.name,email:o.email,userId:r})}),e("firebaseUpdateUser",{userId:r,updates:{online:!0}}),e("firebaseGetUser",{}),this.$router.push("/")}else e("firebaseUpdateUser",{userId:n.userDetails.userId,updates:{online:!1}}),t("setUserDetails",{}),this.$router.push("/auth")})},firebaseUpdateUser({},t){console.log("Payload: ",t),on.ref("users/"+t.userId).update(t.updates)},firebaseGetUser({commit:t}){on.ref("users").on("child_added",e=>{let n=e.val(),i=e.key;t("addUser",{userId:i,userDetails:n})}),on.ref("users").on("child_changed",e=>{let n=e.val(),i=e.key;t("updateUser",{userId:i,userDetails:n})})},firebaseGetMessages({commit:t,state:e},n){let i=e.userDetails.userId;no=on.ref("chats/"+i+"/"+n),no.on("child_added",r=>{let s=r.val(),o=r.key;t("addMessage",{messageId:o,messageDetails:s})})},firebaseStopGettingMessages({commit:t}){no&&(no.off("child_added"),t("clearMessages"))},firebaseSendMessage({},t){on.ref("chats/"+pc.userDetails.userId+"/"+t.otherUserId).push(t.message),t.message.from="them",on.ref("chats/"+t.otherUserId+"/"+pc.userDetails.userId).push(t.message)}},hP={users:t=>{let e={};return Object.keys(t.users).forEach(n=>{n!==t.userDetails.userId&&(e[n]=t.users[n])}),e}};var fP={namespaced:!0,state:pc,mutations:uP,actions:dP,getters:hP},uo=function(){return Tb({modules:{store1:fP},strict:!1})},pP=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"}));/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const ji=typeof window!="undefined";function gP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ue=Object.assign;function ml(t,e){const n={};for(const i in e){const r=e[i];n[i]=Ut(r)?r.map(t):t(r)}return n}const ts=()=>{},Ut=Array.isArray,_P=/\/$/,mP=t=>t.replace(_P,"");function vl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=bP(i!=null?i:e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function vP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _f(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yP(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&fr(e.matched[i],n.matched[r])&&Vm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Vm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!wP(t[n],e[n]))return!1;return!0}function wP(t,e){return Ut(t)?mf(t,e):Ut(e)?mf(e,t):t===e}function mf(t,e){return Ut(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function bP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}var As;(function(t){t.pop="pop",t.push="push"})(As||(As={}));var ns;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ns||(ns={}));function EP(t){if(!t)if(ji){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mP(t)}const IP=/^[^#]+#/;function CP(t,e){return t.replace(IP,"#")+e}function TP(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function SP(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=TP(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function vf(t,e){return(history.state?history.state.position-e:-1)+t}const gc=new Map;function RP(t,e){gc.set(t,e)}function AP(t){const e=gc.get(t);return gc.delete(t),e}let kP=()=>location.protocol+"//"+location.host;function jm(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),_f(l,"")}return _f(n,t)+i+r}function PP(t,e,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const g=jm(t,location),m=n.value,b=e.value;let P=0;if(h){if(n.value=g,e.value=h,o&&o===m){o=null;return}P=b?h.position-b.position:0}else i(g);r.forEach(x=>{x(n.value,m,{delta:P,type:As.pop,direction:P?P>0?ns.forward:ns.back:ns.unknown})})};function l(){o=n.value}function c(h){r.push(h);const g=()=>{const m=r.indexOf(h);m>-1&&r.splice(m,1)};return s.push(g),g}function u(){const{history:h}=window;!h.state||h.replaceState(ue({},h.state,{scroll:Fa()}),"")}function d(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function yf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Fa():null}}function NP(t){const{history:e,location:n}=window,i={value:jm(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:kP()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(l,c){const u=ue({},e.state,yf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=ue({},r.value,e.state,{forward:l,scroll:Fa()});s(u.current,u,!0);const d=ue({},yf(i.value,l,null),{position:u.position+1},c);s(l,d,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function OP(t){t=EP(t);const e=NP(t),n=PP(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ue({location:"",base:t,go:i,createHref:CP.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function xP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),OP(t)}function DP(t){return typeof t=="string"||t&&typeof t=="object"}function zm(t){return typeof t=="string"||typeof t=="symbol"}const Rn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qm=Symbol("");var wf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(wf||(wf={}));function pr(t,e){return ue(new Error,{type:t,[qm]:!0},e)}function sn(t,e){return t instanceof Error&&qm in t&&(e==null||!!(t.type&e))}const bf="[^/]+?",LP={sensitive:!1,strict:!1,start:!0,end:!0},MP=/[.+*?^${}()[\]/\\]/g;function FP(t,e){const n=ue({},LP,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(r+="/"),r+=h.value.replace(MP,"\\$&"),g+=40;else if(h.type===1){const{value:m,repeatable:b,optional:P,regexp:x}=h;s.push({name:m,repeatable:b,optional:P});const E=x||bf;if(E!==bf){g+=10;try{new RegExp(`(${E})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${m}" (${E}): `+C.message)}}let O=b?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(O=P&&c.length<2?`(?:/${O})`:"/"+O),P&&(O+="?"),r+=O,g+=20,P&&(g+=-8),b&&(g+=-20),E===".*"&&(g+=-50)}u.push(g)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",m=s[h-1];d[m.name]=g&&m.repeatable?g.split("/"):g}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:b,optional:P}=g,x=m in c?c[m]:"";if(Ut(x)&&!b)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const E=Ut(x)?x.join("/"):x;if(!E)if(P)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${m}"`);u+=E}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function UP(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function WP(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=UP(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Ef(i))return 1;if(Ef(r))return-1}return r.length-i.length}function Ef(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const BP={type:0,value:""},HP=/[a-zA-Z0-9_]/;function $P(t){if(!t)return[[]];if(t==="/")return[[BP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){!c||(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:HP.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}function VP(t,e,n){const i=FP($P(t.path),n),r=ue(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function jP(t,e){const n=[],i=new Map;e=Tf({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,d,h){const g=!h,m=zP(u);m.aliasOf=h&&h.record;const b=Tf(e,u),P=[m];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of O)P.push(ue({},m,{components:h?h.record.components:m.components,path:C,aliasOf:h?h.record:m}))}let x,E;for(const O of P){const{path:C}=O;if(d&&C[0]!=="/"){const K=d.record.path,ee=K[K.length-1]==="/"?"":"/";O.path=d.record.path+(C&&ee+C)}if(x=VP(O,d,b),h?h.alias.push(x):(E=E||x,E!==x&&E.alias.push(x),g&&u.name&&!Cf(x)&&o(u.name)),m.children){const K=m.children;for(let ee=0;ee<K.length;ee++)s(K[ee],x,h&&h.children[ee])}h=h||x,(x.record.components&&Object.keys(x.record.components).length||x.record.name||x.record.redirect)&&l(x)}return E?()=>{o(E)}:ts}function o(u){if(zm(u)){const d=i.get(u);d&&(i.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&WP(u,n[d])>=0&&(u.record.path!==n[d].record.path||!Km(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Cf(u)&&i.set(u.record.name,u)}function c(u,d){let h,g={},m,b;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw pr(1,{location:u});b=h.record.name,g=ue(If(d.params,h.keys.filter(E=>!E.optional).map(E=>E.name)),u.params&&If(u.params,h.keys.map(E=>E.name))),m=h.stringify(g)}else if("path"in u)m=u.path,h=n.find(E=>E.re.test(m)),h&&(g=h.parse(m),b=h.record.name);else{if(h=d.name?i.get(d.name):n.find(E=>E.re.test(d.path)),!h)throw pr(1,{location:u,currentLocation:d});b=h.record.name,g=ue({},d.params,u.params),m=h.stringify(g)}const P=[];let x=h;for(;x;)P.unshift(x.record),x=x.parent;return{name:b,path:m,params:g,matched:P,meta:KP(P)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function If(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function zP(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Cf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KP(t){return t.reduce((e,n)=>ue(e,n.meta),{})}function Tf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function Km(t,e){return e.children.some(n=>n===t||Km(t,n))}const Gm=/#/g,GP=/&/g,YP=/\//g,QP=/=/g,JP=/\?/g,Ym=/\+/g,XP=/%5B/g,ZP=/%5D/g,Qm=/%5E/g,eN=/%60/g,Jm=/%7B/g,tN=/%7C/g,Xm=/%7D/g,nN=/%20/g;function nd(t){return encodeURI(""+t).replace(tN,"|").replace(XP,"[").replace(ZP,"]")}function iN(t){return nd(t).replace(Jm,"{").replace(Xm,"}").replace(Qm,"^")}function _c(t){return nd(t).replace(Ym,"%2B").replace(nN,"+").replace(Gm,"%23").replace(GP,"%26").replace(eN,"`").replace(Jm,"{").replace(Xm,"}").replace(Qm,"^")}function rN(t){return _c(t).replace(QP,"%3D")}function sN(t){return nd(t).replace(Gm,"%23").replace(JP,"%3F")}function oN(t){return t==null?"":sN(t).replace(YP,"%2F")}function zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function aN(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Ym," "),o=s.indexOf("="),a=zo(o<0?s:s.slice(0,o)),l=o<0?null:zo(s.slice(o+1));if(a in e){let c=e[a];Ut(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Sf(t){let e="";for(let n in t){const i=t[n];if(n=rN(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(i)?i.map(s=>s&&_c(s)):[i&&_c(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function lN(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Ut(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const cN=Symbol(""),Rf=Symbol(""),id=Symbol(""),Zm=Symbol(""),mc=Symbol("");function Ur(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function kn(t,e,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=d=>{d===!1?a(pr(4,{from:n,to:e})):d instanceof Error?a(d):DP(d)?a(pr(2,{from:e,to:d})):(s&&i.enterCallbacks[r]===s&&typeof d=="function"&&s.push(d),o())},c=t.call(i&&i.instances[r],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(d=>a(d))})}function yl(t,e,n,i){const r=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(uN(a)){const c=(a.__vccOpts||a)[e];c&&r.push(kn(c,n,i,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=gP(c)?c.default:c;s.components[o]=u;const h=(u.__vccOpts||u)[e];return h&&kn(h,n,i,s,o)()}))}}return r}function uN(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Af(t){const e=dn(id),n=dn(Zm),i=_t(()=>e.resolve(Yi(t.to))),r=_t(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(fr.bind(null,u));if(h>-1)return h;const g=kf(l[c-2]);return c>1&&kf(u)===g&&d[d.length-1].path!==g?d.findIndex(fr.bind(null,l[c-2])):h}),s=_t(()=>r.value>-1&&pN(n.params,i.value.params)),o=_t(()=>r.value>-1&&r.value===n.matched.length-1&&Vm(n.params,i.value.params));function a(l={}){return fN(l)?e[Yi(t.replace)?"replace":"push"](Yi(t.to)).catch(ts):Promise.resolve()}return{route:i,href:_t(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const dN=gp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Af,setup(t,{slots:e}){const n=Ai(Af(t)),{options:i}=dn(id),r=_t(()=>({[Pf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Pf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Hc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),hN=dN;function fN(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pN(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Ut(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function kf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pf=(t,e,n)=>t!=null?t:e!=null?e:n,gN=gp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=dn(mc),r=_t(()=>t.route||i.value),s=dn(Rf,0),o=_t(()=>{let c=Yi(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=_t(()=>r.value.matched[o.value]);ro(Rf,_t(()=>o.value+1)),ro(cN,a),ro(mc,r);const l=ep();return fi(()=>[l.value,a.value,t.name],([c,u,d],[h,g,m])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!fr(u,g)||!h)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Nf(n.default,{Component:h,route:c});const g=d.props[u],m=g?g===!0?c.params:typeof g=="function"?g(c):g:null,P=Hc(h,ue({},m,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Nf(n.default,{Component:P,route:c})||P}}});function Nf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _N=gN;function mN(t){const e=jP(t.routes,t),n=t.parseQuery||aN,i=t.stringifyQuery||Sf,r=t.history,s=Ur(),o=Ur(),a=Ur(),l=qv(Rn);let c=Rn;ji&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ml.bind(null,y=>""+y),d=ml.bind(null,oN),h=ml.bind(null,zo);function g(y,L){let N,U;return zm(y)?(N=e.getRecordMatcher(y),U=L):U=y,e.addRoute(U,N)}function m(y){const L=e.getRecordMatcher(y);L&&e.removeRoute(L)}function b(){return e.getRoutes().map(y=>y.record)}function P(y){return!!e.getRecordMatcher(y)}function x(y,L){if(L=ue({},L||l.value),typeof y=="string"){const _=vl(n,y,L.path),v=e.resolve({path:_.path},L),w=r.createHref(_.fullPath);return ue(_,v,{params:h(v.params),hash:zo(_.hash),redirectedFrom:void 0,href:w})}let N;if("path"in y)N=ue({},y,{path:vl(n,y.path,L.path).path});else{const _=ue({},y.params);for(const v in _)_[v]==null&&delete _[v];N=ue({},y,{params:d(_)}),L.params=d(L.params)}const U=e.resolve(N,L),oe=y.hash||"";U.params=u(h(U.params));const f=vP(i,ue({},y,{hash:iN(oe),path:U.path})),p=r.createHref(f);return ue({fullPath:f,hash:oe,query:i===Sf?lN(y.query):y.query||{}},U,{redirectedFrom:void 0,href:p})}function E(y){return typeof y=="string"?vl(n,y,l.value.path):ue({},y)}function O(y,L){if(c!==y)return pr(8,{from:L,to:y})}function C(y){return le(y)}function K(y){return C(ue(E(y),{replace:!0}))}function ee(y){const L=y.matched[y.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let U=typeof N=="function"?N(y):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=E(U):{path:U},U.params={}),ue({query:y.query,hash:y.hash,params:"path"in U?{}:y.params},U)}}function le(y,L){const N=c=x(y),U=l.value,oe=y.state,f=y.force,p=y.replace===!0,_=ee(N);if(_)return le(ue(E(_),{state:typeof _=="object"?ue({},oe,_.state):oe,force:f,replace:p}),L||N);const v=N;v.redirectedFrom=L;let w;return!f&&yP(i,U,N)&&(w=pr(16,{to:v,from:U}),Ht(U,U,!0,!1)),(w?Promise.resolve(w):X(v,U)).catch(I=>sn(I)?sn(I,2)?I:En(I):se(I,v,U)).then(I=>{if(I){if(sn(I,2))return le(ue({replace:p},E(I.to),{state:typeof I.to=="object"?ue({},oe,I.to.state):oe,force:f}),L||v)}else I=F(v,U,!0,p,oe);return be(v,U,I),I})}function j(y,L){const N=O(y,L);return N?Promise.reject(N):Promise.resolve()}function ne(y){const L=Fi.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(y):y()}function X(y,L){let N;const[U,oe,f]=vN(y,L);N=yl(U.reverse(),"beforeRouteLeave",y,L);for(const _ of U)_.leaveGuards.forEach(v=>{N.push(kn(v,y,L))});const p=j.bind(null,y,L);return N.push(p),Ve(N).then(()=>{N=[];for(const _ of s.list())N.push(kn(_,y,L));return N.push(p),Ve(N)}).then(()=>{N=yl(oe,"beforeRouteUpdate",y,L);for(const _ of oe)_.updateGuards.forEach(v=>{N.push(kn(v,y,L))});return N.push(p),Ve(N)}).then(()=>{N=[];for(const _ of f)if(_.beforeEnter)if(Ut(_.beforeEnter))for(const v of _.beforeEnter)N.push(kn(v,y,L));else N.push(kn(_.beforeEnter,y,L));return N.push(p),Ve(N)}).then(()=>(y.matched.forEach(_=>_.enterCallbacks={}),N=yl(f,"beforeRouteEnter",y,L),N.push(p),Ve(N))).then(()=>{N=[];for(const _ of o.list())N.push(kn(_,y,L));return N.push(p),Ve(N)}).catch(_=>sn(_,8)?_:Promise.reject(_))}function be(y,L,N){a.list().forEach(U=>ne(()=>U(y,L,N)))}function F(y,L,N,U,oe){const f=O(y,L);if(f)return f;const p=L===Rn,_=ji?history.state:{};N&&(U||p?r.replace(y.fullPath,ue({scroll:p&&_&&_.scroll},oe)):r.push(y.fullPath,oe)),l.value=y,Ht(y,L,N,p),En()}let ce;function Ge(){ce||(ce=r.listen((y,L,N)=>{if(!qs.listening)return;const U=x(y),oe=ee(U);if(oe){le(ue(oe,{replace:!0}),U).catch(ts);return}c=U;const f=l.value;ji&&RP(vf(f.fullPath,N.delta),Fa()),X(U,f).catch(p=>sn(p,12)?p:sn(p,2)?(le(p.to,U).then(_=>{sn(_,20)&&!N.delta&&N.type===As.pop&&r.go(-1,!1)}).catch(ts),Promise.reject()):(N.delta&&r.go(-N.delta,!1),se(p,U,f))).then(p=>{p=p||F(U,f,!1),p&&(N.delta&&!sn(p,8)?r.go(-N.delta,!1):N.type===As.pop&&sn(p,20)&&r.go(-1,!1)),be(U,f,p)}).catch(ts)}))}let nn=Ur(),Ie=Ur(),fe;function se(y,L,N){En(y);const U=Ie.list();return U.length?U.forEach(oe=>oe(y,L,N)):console.error(y),Promise.reject(y)}function rn(){return fe&&l.value!==Rn?Promise.resolve():new Promise((y,L)=>{nn.add([y,L])})}function En(y){return fe||(fe=!y,Ge(),nn.list().forEach(([L,N])=>y?N(y):L()),nn.reset()),y}function Ht(y,L,N,U){const{scrollBehavior:oe}=t;if(!ji||!oe)return Promise.resolve();const f=!N&&AP(vf(y.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return rp().then(()=>oe(y,L,f)).then(p=>p&&SP(p)).catch(p=>se(p,y,L))}const Je=y=>r.go(y);let Mi;const Fi=new Set,qs={currentRoute:l,listening:!0,addRoute:g,removeRoute:m,hasRoute:P,getRoutes:b,resolve:x,options:t,push:C,replace:K,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:Ie.add,isReady:rn,install(y){const L=this;y.component("RouterLink",hN),y.component("RouterView",_N),y.config.globalProperties.$router=L,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Yi(l)}),ji&&!Mi&&l.value===Rn&&(Mi=!0,C(r.location).catch(oe=>{}));const N={};for(const oe in Rn)Object.defineProperty(N,oe,{get:()=>l.value[oe],enumerable:!0});y.provide(id,L),y.provide(Zm,Yf(N)),y.provide(mc,l);const U=y.unmount;Fi.add(y),y.unmount=function(){Fi.delete(y),Fi.size<1&&(c=Rn,ce&&ce(),ce=null,l.value=Rn,Mi=!1,fe=!1),U()}}};function Ve(y){return y.reduce((L,N)=>L.then(()=>ne(N)),Promise.resolve())}return qs}function vN(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>fr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>fr(c,l))||r.push(l))}return[n,i,r]}const yN=[{path:"/",component:()=>oi(()=>import("./MainLayout.1164d6ca.js"),["assets/MainLayout.1164d6ca.js","assets/MainLayout.8634f021.css","assets/QBtn.6a7f6267.js","assets/use-router-link.01604f00.js","assets/mixin-other-user-details.088620a2.js","assets/QResizeObserver.1310bb85.js","assets/QItem.d7aa22a1.js","assets/use-dark.1116cf1f.js"]),children:[{path:"",component:()=>oi(()=>import("./UsersPage.e3e2e3a9.js"),["assets/UsersPage.e3e2e3a9.js","assets/use-router-link.01604f00.js","assets/QItem.d7aa22a1.js","assets/use-dark.1116cf1f.js","assets/QPage.0ba3aa5d.js"])},{path:"/auth",component:()=>oi(()=>import("./AuthPage.843e5e87.js"),["assets/AuthPage.843e5e87.js","assets/use-router-link.01604f00.js","assets/QForm.aaa24dbb.js","assets/QBtn.6a7f6267.js","assets/use-dark.1116cf1f.js","assets/QResizeObserver.1310bb85.js","assets/QPage.0ba3aa5d.js"])},{path:"/chat/:otherUserId",component:()=>oi(()=>import("./PageChat.b5162c61.js"),["assets/PageChat.b5162c61.js","assets/PageChat.5a535956.css","assets/use-router-link.01604f00.js","assets/use-dark.1116cf1f.js","assets/QBtn.6a7f6267.js","assets/QForm.aaa24dbb.js","assets/mixin-other-user-details.088620a2.js","assets/QResizeObserver.1310bb85.js","assets/QPage.0ba3aa5d.js"])}]},{path:"/:catchAll(.*)*",component:()=>oi(()=>import("./ErrorNotFound.a8faf7cc.js"),["assets/ErrorNotFound.a8faf7cc.js","assets/QBtn.6a7f6267.js","assets/use-router-link.01604f00.js"])}];var wl=function(){return mN({scrollBehavior:()=>({left:0,top:0}),routes:yN,history:xP("/")})};async function wN(t,e){const n=t(Nb);n.use(eb,e);const i=typeof uo=="function"?await uo({}):uo,{storeKey:r}=await oi(()=>Promise.resolve().then(function(){return pP}),void 0),s=Nc(typeof wl=="function"?await wl({store:i}):wl);return i.$router=s,{app:n,store:i,storeKey:r,router:s}}var bN={config:{}};const EN="/";async function IN({app:t,router:e,store:n,storeKey:i},r){let s=!1;const o=c=>{try{return e.resolve(c).href}catch{}return Object(c)===c?null:c},a=c=>{if(s=!0,typeof c=="string"&&/^https?:\/\//.test(c)){window.location.href=c;return}const u=o(c);u!==null&&(window.location.href=u,window.location.reload())},l=window.location.href.replace(window.location.origin,"");for(let c=0;s===!1&&c<r.length;c++)try{await r[c]({app:t,router:e,store:n,ssrContext:null,redirect:a,urlPath:l,publicPath:EN})}catch(u){if(u&&u.url){a(u.url);return}console.error("[Quasar] boot error:",u);return}s!==!0&&(t.use(e),t.use(n,i),t.mount("#q-app"))}wN(kw,bN).then(t=>{const[e,n]=Promise.allSettled!==void 0?["allSettled",i=>i.map(r=>{if(r.status==="rejected"){console.error("[Quasar] boot error:",r.reason);return}return r.value.default})]:["all",i=>i.map(r=>r.default)];return Promise[e]([oi(()=>Promise.resolve().then(function(){return cP}),void 0)]).then(i=>{const r=n(i).filter(s=>typeof s=="function");IN(t,r)})});export{Ll as $,CN as A,TN as B,SN as C,Op as D,RN as E,LN as F,WN as G,zd as H,DN as I,Nc as J,gp as K,Yi as L,FN as M,UN as N,xN as O,rp as P,qN as Q,PN as R,kN as S,Mp as T,Vt as U,VN as V,jw as W,Ya as X,gy as Y,py as Z,Ab as _,HN as a,vt as a0,ON as a1,MN as a2,AN as a3,$N as a4,Mw as a5,$c as a6,vy as a7,Lc as b,_t as c,sr as d,jN as e,yi as f,xp as g,Hc as h,dn as i,Ai as j,vp as k,BN as l,zN as m,cs as n,Mc as o,ro as p,Sb as q,ep as r,Iy as s,Ap as t,Pp as u,iy as v,fi as w,ut as x,NN as y,qy as z};
