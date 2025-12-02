(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ae={},jr=[],qt=()=>{},qf=()=>!1,zo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hc=t=>t.startsWith("onUpdate:"),ct=Object.assign,zc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gm=Object.prototype.hasOwnProperty,Te=(t,e)=>Gm.call(t,e),re=Array.isArray,$r=t=>Ti(t)==="[object Map]",Hf=t=>Ti(t)==="[object Set]",Fu=t=>Ti(t)==="[object Date]",oe=t=>typeof t=="function",Be=t=>typeof t=="string",xt=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",zf=t=>(Re(t)||oe(t))&&oe(t.then)&&oe(t.catch),Wf=Object.prototype.toString,Ti=t=>Wf.call(t),Qm=t=>Ti(t).slice(8,-1),Kf=t=>Ti(t)==="[object Object]",Wc=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Jm=/-\w/g,Hn=Wo(t=>t.replace(Jm,e=>e.slice(1).toUpperCase())),Xm=/\B([A-Z])/g,Ir=Wo(t=>t.replace(Xm,"-$1").toLowerCase()),Gf=Wo(t=>t.charAt(0).toUpperCase()+t.slice(1)),xa=Wo(t=>t?`on${Gf(t)}`:""),Mn=(t,e)=>!Object.is(t,e),eo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ic=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Uu;const Ko=()=>Uu||(Uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function cs(t){if(re(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?t_(r):cs(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Re(t))return t}const Ym=/;(?![^(]*\))/g,Zm=/:([^]+)/,e_=/\/\*[^]*?\*\//g;function t_(t){const e={};return t.replace(e_,"").split(Ym).forEach(n=>{if(n){const r=n.split(Zm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kc(t){let e="";if(Be(t))e=t;else if(re(t))for(let n=0;n<t.length;n++){const r=Kc(t[n]);r&&(e+=r+" ")}else if(Re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const n_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",r_=qc(n_);function Jf(t){return!!t||t===""}function s_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=go(t[r],e[r]);return n}function go(t,e){if(t===e)return!0;let n=Fu(t),r=Fu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=xt(t),r=xt(e),n||r)return t===e;if(n=re(t),r=re(e),n||r)return n&&r?s_(t,e):!1;if(n=Re(t),r=Re(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!go(t[a],e[a]))return!1}}return String(t)===String(e)}const Xf=t=>!!(t&&t.__v_isRef===!0),Pn=t=>Be(t)?t:t==null?"":re(t)||Re(t)&&(t.toString===Wf||!oe(t.toString))?Xf(t)?Pn(t.value):JSON.stringify(t,Yf,2):String(t),Yf=(t,e)=>Xf(e)?Yf(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ma(r,i)+" =>"]=s,n),{})}:Hf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ma(n))}:xt(e)?Ma(e):Re(e)&&!re(e)&&!Kf(e)?String(e):e,Ma=(t,e="")=>{var n;return xt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rt;class Zf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=rt,!e&&rt&&(this.index=(rt.scopes||(rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=rt;try{return rt=this,e()}finally{rt=n}}}on(){++this._on===1&&(this.prevScope=rt,rt=this)}off(){this._on>0&&--this._on===0&&(rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ed(t){return new Zf(t)}function td(){return rt}function i_(t,e=!1){rt&&rt.cleanups.push(t)}let be;const La=new WeakSet;class nd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,rt&&rt.active&&rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,La.has(this)&&(La.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||sd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Bu(this),id(this);const e=be,n=Nt;be=this,Nt=!0;try{return this.fn()}finally{od(this),be=e,Nt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jc(e);this.deps=this.depsTail=void 0,Bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?La.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let rd=0,zs,Ws;function sd(t,e=!1){if(t.flags|=8,e){t.next=Ws,Ws=t;return}t.next=zs,zs=t}function Gc(){rd++}function Qc(){if(--rd>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function id(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function od(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Jc(r),o_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function oc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ad(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ad(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ii)||(t.globalVersion=ii,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!oc(t))))return;t.flags|=2;const e=t.dep,n=be,r=Nt;be=t,Nt=!0;try{id(t);const s=t.fn(t._value);(e.version===0||Mn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{be=n,Nt=r,od(t),t.flags&=-3}}function Jc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Jc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function o_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Nt=!0;const cd=[];function ln(){cd.push(Nt),Nt=!1}function un(){const t=cd.pop();Nt=t===void 0?!0:t}function Bu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=be;be=void 0;try{e()}finally{be=n}}}let ii=0;class a_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!be||!Nt||be===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==be)n=this.activeLink=new a_(be,this),be.deps?(n.prevDep=be.depsTail,be.depsTail.nextDep=n,be.depsTail=n):be.deps=be.depsTail=n,ld(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=be.depsTail,n.nextDep=void 0,be.depsTail.nextDep=n,be.depsTail=n,be.deps===n&&(be.deps=r)}return n}trigger(e){this.version++,ii++,this.notify(e)}notify(e){Gc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qc()}}}function ld(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ld(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const mo=new WeakMap,dr=Symbol(""),ac=Symbol(""),oi=Symbol("");function it(t,e,n){if(Nt&&be){let r=mo.get(t);r||mo.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Xc),s.map=r,s.key=n),s.track()}}function nn(t,e,n,r,s,i){const a=mo.get(t);if(!a){ii++;return}const c=l=>{l&&l.trigger()};if(Gc(),e==="clear")a.forEach(c);else{const l=re(t),h=l&&Wc(n);if(l&&n==="length"){const d=Number(r);a.forEach((g,E)=>{(E==="length"||E===oi||!xt(E)&&E>=d)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get(oi)),e){case"add":l?h&&c(a.get("length")):(c(a.get(dr)),$r(t)&&c(a.get(ac)));break;case"delete":l||(c(a.get(dr)),$r(t)&&c(a.get(ac)));break;case"set":$r(t)&&c(a.get(dr));break}}Qc()}function c_(t,e){const n=mo.get(t);return n&&n.get(e)}function Nr(t){const e=_e(t);return e===t?e:(it(e,"iterate",oi),Ct(t)?e:e.map(Xe))}function Go(t){return it(t=_e(t),"iterate",oi),t}const l_={__proto__:null,[Symbol.iterator](){return Fa(this,Symbol.iterator,Xe)},concat(...t){return Nr(this).concat(...t.map(e=>re(e)?Nr(e):e))},entries(){return Fa(this,"entries",t=>(t[1]=Xe(t[1]),t))},every(t,e){return en(this,"every",t,e,void 0,arguments)},filter(t,e){return en(this,"filter",t,e,n=>n.map(Xe),arguments)},find(t,e){return en(this,"find",t,e,Xe,arguments)},findIndex(t,e){return en(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return en(this,"findLast",t,e,Xe,arguments)},findLastIndex(t,e){return en(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return en(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ua(this,"includes",t)},indexOf(...t){return Ua(this,"indexOf",t)},join(t){return Nr(this).join(t)},lastIndexOf(...t){return Ua(this,"lastIndexOf",t)},map(t,e){return en(this,"map",t,e,void 0,arguments)},pop(){return Ms(this,"pop")},push(...t){return Ms(this,"push",t)},reduce(t,...e){return ju(this,"reduce",t,e)},reduceRight(t,...e){return ju(this,"reduceRight",t,e)},shift(){return Ms(this,"shift")},some(t,e){return en(this,"some",t,e,void 0,arguments)},splice(...t){return Ms(this,"splice",t)},toReversed(){return Nr(this).toReversed()},toSorted(t){return Nr(this).toSorted(t)},toSpliced(...t){return Nr(this).toSpliced(...t)},unshift(...t){return Ms(this,"unshift",t)},values(){return Fa(this,"values",Xe)}};function Fa(t,e,n){const r=Go(t),s=r[e]();return r!==t&&!Ct(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const u_=Array.prototype;function en(t,e,n,r,s,i){const a=Go(t),c=a!==t&&!Ct(t),l=a[e];if(l!==u_[e]){const g=l.apply(t,i);return c?Xe(g):g}let h=n;a!==t&&(c?h=function(g,E){return n.call(this,Xe(g),E,t)}:n.length>2&&(h=function(g,E){return n.call(this,g,E,t)}));const d=l.call(a,h,r);return c&&s?s(d):d}function ju(t,e,n,r){const s=Go(t);let i=n;return s!==t&&(Ct(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,Xe(c),l,t)}),s[e](i,...r)}function Ua(t,e,n){const r=_e(t);it(r,"iterate",oi);const s=r[e](...n);return(s===-1||s===!1)&&el(n[0])?(n[0]=_e(n[0]),r[e](...n)):s}function Ms(t,e,n=[]){ln(),Gc();const r=_e(t)[e].apply(t,n);return Qc(),un(),r}const h_=qc("__proto__,__v_isRef,__isVue"),ud=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xt));function f_(t){xt(t)||(t=String(t));const e=_e(this);return it(e,"has",t),e.hasOwnProperty(t)}class hd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?I_:gd:i?pd:dd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=l_[n]))return l;if(n==="hasOwnProperty")return f_}const c=Reflect.get(e,n,Me(e)?e:r);if((xt(n)?ud.has(n):h_(n))||(s||it(e,"get",n),i))return c;if(Me(c)){const l=a&&Wc(n)?c:c.value;return s&&Re(l)?lc(l):l}return Re(c)?s?lc(c):Qo(c):c}}class fd extends hd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=zn(i);if(!Ct(r)&&!zn(r)&&(i=_e(i),r=_e(r)),!re(e)&&Me(i)&&!Me(r))return l||(i.value=r),!0}const a=re(e)&&Wc(n)?Number(n)<e.length:Te(e,n),c=Reflect.set(e,n,r,Me(e)?e:s);return e===_e(s)&&(a?Mn(r,i)&&nn(e,"set",n,r):nn(e,"add",n,r)),c}deleteProperty(e,n){const r=Te(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&nn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!xt(n)||!ud.has(n))&&it(e,"has",n),r}ownKeys(e){return it(e,"iterate",re(e)?"length":dr),Reflect.ownKeys(e)}}class d_ extends hd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const p_=new fd,g_=new d_,m_=new fd(!0);const cc=t=>t,qi=t=>Reflect.getPrototypeOf(t);function __(t,e,n){return function(...r){const s=this.__v_raw,i=_e(s),a=$r(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),d=n?cc:e?_o:Xe;return!e&&it(i,"iterate",l?ac:dr),{next(){const{value:g,done:E}=h.next();return E?{value:g,done:E}:{value:c?[d(g[0]),d(g[1])]:d(g),done:E}},[Symbol.iterator](){return this}}}}function Hi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function y_(t,e){const n={get(s){const i=this.__v_raw,a=_e(i),c=_e(s);t||(Mn(s,c)&&it(a,"get",s),it(a,"get",c));const{has:l}=qi(a),h=e?cc:t?_o:Xe;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&it(_e(s),"iterate",dr),s.size},has(s){const i=this.__v_raw,a=_e(i),c=_e(s);return t||(Mn(s,c)&&it(a,"has",s),it(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=_e(c),h=e?cc:t?_o:Xe;return!t&&it(l,"iterate",dr),c.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return ct(n,t?{add:Hi("add"),set:Hi("set"),delete:Hi("delete"),clear:Hi("clear")}:{add(s){!e&&!Ct(s)&&!zn(s)&&(s=_e(s));const i=_e(this);return qi(i).has.call(i,s)||(i.add(s),nn(i,"add",s,s)),this},set(s,i){!e&&!Ct(i)&&!zn(i)&&(i=_e(i));const a=_e(this),{has:c,get:l}=qi(a);let h=c.call(a,s);h||(s=_e(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?Mn(i,d)&&nn(a,"set",s,i):nn(a,"add",s,i),this},delete(s){const i=_e(this),{has:a,get:c}=qi(i);let l=a.call(i,s);l||(s=_e(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&nn(i,"delete",s,void 0),h},clear(){const s=_e(this),i=s.size!==0,a=s.clear();return i&&nn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=__(s,t,e)}),n}function Yc(t,e){const n=y_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const E_={get:Yc(!1,!1)},T_={get:Yc(!1,!0)},v_={get:Yc(!0,!1)};const dd=new WeakMap,pd=new WeakMap,gd=new WeakMap,I_=new WeakMap;function w_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function A_(t){return t.__v_skip||!Object.isExtensible(t)?0:w_(Qm(t))}function Qo(t){return zn(t)?t:Zc(t,!1,p_,E_,dd)}function b_(t){return Zc(t,!1,m_,T_,pd)}function lc(t){return Zc(t,!0,g_,v_,gd)}function Zc(t,e,n,r,s){if(!Re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=A_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Ln(t){return zn(t)?Ln(t.__v_raw):!!(t&&t.__v_isReactive)}function zn(t){return!!(t&&t.__v_isReadonly)}function Ct(t){return!!(t&&t.__v_isShallow)}function el(t){return t?!!t.__v_raw:!1}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function tl(t){return!Te(t,"__v_skip")&&Object.isExtensible(t)&&Qf(t,"__v_skip",!0),t}const Xe=t=>Re(t)?Qo(t):t,_o=t=>Re(t)?lc(t):t;function Me(t){return t?t.__v_isRef===!0:!1}function qr(t){return S_(t,!1)}function S_(t,e){return Me(t)?t:new R_(t,e)}class R_{constructor(e,n){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:_e(e),this._value=n?e:Xe(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ct(e)||zn(e);e=r?e:_e(e),Mn(e,n)&&(this._rawValue=e,this._value=r?e:Xe(e),this.dep.trigger())}}function $e(t){return Me(t)?t.value:t}const C_={get:(t,e,n)=>e==="__v_raw"?t:$e(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Me(s)&&!Me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function md(t){return Ln(t)?t:new Proxy(t,C_)}function P_(t){const e=re(t)?new Array(t.length):{};for(const n in t)e[n]=D_(t,n);return e}class V_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return c_(_e(this._object),this._key)}}function D_(t,e,n){const r=t[e];return Me(r)?r:new V_(t,e,n)}class k_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return sd(this,!0),!0}get value(){const e=this.dep.track();return ad(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function N_(t,e,n=!1){let r,s;return oe(t)?r=t:(r=t.get,s=t.set),new k_(r,s,n)}const zi={},yo=new WeakMap;let cr;function O_(t,e=!1,n=cr){if(n){let r=yo.get(n);r||yo.set(n,r=[]),r.push(t)}}function x_(t,e,n=Ae){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=z=>s?z:Ct(z)||s===!1||s===0?rn(z,1):rn(z);let d,g,E,b,D=!1,L=!1;if(Me(t)?(g=()=>t.value,D=Ct(t)):Ln(t)?(g=()=>h(t),D=!0):re(t)?(L=!0,D=t.some(z=>Ln(z)||Ct(z)),g=()=>t.map(z=>{if(Me(z))return z.value;if(Ln(z))return h(z);if(oe(z))return l?l(z,2):z()})):oe(t)?e?g=l?()=>l(t,2):t:g=()=>{if(E){ln();try{E()}finally{un()}}const z=cr;cr=d;try{return l?l(t,3,[b]):t(b)}finally{cr=z}}:g=qt,e&&s){const z=g,te=s===!0?1/0:s;g=()=>rn(z(),te)}const B=td(),$=()=>{d.stop(),B&&B.active&&zc(B.effects,d)};if(i&&e){const z=e;e=(...te)=>{z(...te),$()}}let H=L?new Array(t.length).fill(zi):zi;const j=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const te=d.run();if(s||D||(L?te.some((me,v)=>Mn(me,H[v])):Mn(te,H))){E&&E();const me=cr;cr=d;try{const v=[te,H===zi?void 0:L&&H[0]===zi?[]:H,b];H=te,l?l(e,3,v):e(...v)}finally{cr=me}}}else d.run()};return c&&c(j),d=new nd(g),d.scheduler=a?()=>a(j,!1):j,b=z=>O_(z,!1,d),E=d.onStop=()=>{const z=yo.get(d);if(z){if(l)l(z,4);else for(const te of z)te();yo.delete(d)}},e?r?j(!0):H=d.run():a?a(j.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function rn(t,e=1/0,n){if(e<=0||!Re(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Me(t))rn(t.value,e,n);else if(re(t))for(let r=0;r<t.length;r++)rn(t[r],e,n);else if(Hf(t)||$r(t))t.forEach(r=>{rn(r,e,n)});else if(Kf(t)){for(const r in t)rn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&rn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vi(t,e,n,r){try{return r?t(...r):t()}catch(s){Jo(s,e,n)}}function Qt(t,e,n,r){if(oe(t)){const s=vi(t,e,n,r);return s&&zf(s)&&s.catch(i=>{Jo(i,e,n)}),s}if(re(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function Jo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ae;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](t,l,h)===!1)return}c=c.parent}if(i){ln(),vi(i,null,10,[t,l,h]),un();return}}M_(t,n,s,r,a)}function M_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const ft=[];let Bt=-1;const Hr=[];let Rn=null,xr=0;const _d=Promise.resolve();let Eo=null;function yd(t){const e=Eo||_d;return t?e.then(this?t.bind(this):t):e}function L_(t){let e=Bt+1,n=ft.length;for(;e<n;){const r=e+n>>>1,s=ft[r],i=ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function nl(t){if(!(t.flags&1)){const e=ai(t),n=ft[ft.length-1];!n||!(t.flags&2)&&e>=ai(n)?ft.push(t):ft.splice(L_(e),0,t),t.flags|=1,Ed()}}function Ed(){Eo||(Eo=_d.then(vd))}function F_(t){re(t)?Hr.push(...t):Rn&&t.id===-1?Rn.splice(xr+1,0,t):t.flags&1||(Hr.push(t),t.flags|=1),Ed()}function $u(t,e,n=Bt+1){for(;n<ft.length;n++){const r=ft[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;ft.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Td(t){if(Hr.length){const e=[...new Set(Hr)].sort((n,r)=>ai(n)-ai(r));if(Hr.length=0,Rn){Rn.push(...e);return}for(Rn=e,xr=0;xr<Rn.length;xr++){const n=Rn[xr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Rn=null,xr=0}}const ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vd(t){try{for(Bt=0;Bt<ft.length;Bt++){const e=ft[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),vi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<ft.length;Bt++){const e=ft[Bt];e&&(e.flags&=-2)}Bt=-1,ft.length=0,Td(),Eo=null,(ft.length||Hr.length)&&vd()}}let at=null,Id=null;function To(t){const e=at;return at=t,Id=t&&t.type.__scopeId||null,e}function Us(t,e=at,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Yu(-1);const i=To(e);let a;try{a=t(...s)}finally{To(i),r._d&&Yu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ls(t,e){if(at===null)return t;const n=ea(at),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=Ae]=e[s];i&&(oe(i)&&(i={mounted:i,updated:i}),i.deep&&rn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function or(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(ln(),Qt(l,n,8,[t.el,c,t,e]),un())}}const U_=Symbol("_vte"),B_=t=>t.__isTeleport,j_=Symbol("_leaveCb");function rl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,rl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ls(t,e){return oe(t)?ct({name:t.name},e,{setup:t}):t}function wd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const vo=new WeakMap;function Ks(t,e,n,r,s=!1){if(re(t)){t.forEach((D,L)=>Ks(D,e&&(re(e)?e[L]:e),n,r,s));return}if(zr(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ks(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ea(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,d=c.refs===Ae?c.refs={}:c.refs,g=c.setupState,E=_e(g),b=g===Ae?qf:D=>Te(E,D);if(h!=null&&h!==l){if(qu(e),Be(h))d[h]=null,b(h)&&(g[h]=null);else if(Me(h)){h.value=null;const D=e;D.k&&(d[D.k]=null)}}if(oe(l))vi(l,c,12,[a,d]);else{const D=Be(l),L=Me(l);if(D||L){const B=()=>{if(t.f){const $=D?b(l)?g[l]:d[l]:l.value;if(s)re($)&&zc($,i);else if(re($))$.includes(i)||$.push(i);else if(D)d[l]=[i],b(l)&&(g[l]=d[l]);else{const H=[i];l.value=H,t.k&&(d[t.k]=H)}}else D?(d[l]=a,b(l)&&(g[l]=a)):L&&(l.value=a,t.k&&(d[t.k]=a))};if(a){const $=()=>{B(),vo.delete(t)};$.id=-1,vo.set(t,$),vt($,n)}else qu(t),B()}}}function qu(t){const e=vo.get(t);e&&(e.flags|=8,vo.delete(t))}Ko().requestIdleCallback;Ko().cancelIdleCallback;const zr=t=>!!t.type.__asyncLoader,Ad=t=>t.type.__isKeepAlive;function $_(t,e){bd(t,"a",e)}function q_(t,e){bd(t,"da",e)}function bd(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ad(s.parent.vnode)&&H_(r,e,n,s),s=s.parent}}function H_(t,e,n,r){const s=Xo(e,t,r,!0);Rd(()=>{zc(r[e],s)},n)}function Xo(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{ln();const c=Ii(n),l=Qt(e,n,t,a);return c(),un(),l});return r?s.unshift(i):s.push(i),i}}const mn=t=>(e,n=dt)=>{(!li||t==="sp")&&Xo(t,(...r)=>e(...r),n)},z_=mn("bm"),Sd=mn("m"),W_=mn("bu"),K_=mn("u"),G_=mn("bum"),Rd=mn("um"),Q_=mn("sp"),J_=mn("rtg"),X_=mn("rtc");function Y_(t,e=dt){Xo("ec",t,e)}const Z_=Symbol.for("v-ndc");function Vn(t,e,n,r){let s;const i=n,a=re(t);if(a||Be(t)){const c=a&&Ln(t);let l=!1,h=!1;c&&(l=!Ct(t),h=zn(t),t=Go(t)),s=new Array(t.length);for(let d=0,g=t.length;d<g;d++)s[d]=e(l?h?_o(Xe(t[d])):Xe(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Re(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}function to(t,e,n={},r,s){if(at.ce||at.parent&&zr(at.parent)&&at.parent.ce){const h=Object.keys(n).length>0;return e!=="default"&&(n.name=e),pe(),Dn(xe,null,[mt("slot",n,r)],h?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),pe();const a=i&&Cd(i(n)),c=n.key||a&&a.key,l=Dn(xe,{key:(c&&!xt(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&t._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Cd(t){return t.some(e=>ol(e)?!(e.type===hn||e.type===xe&&!Cd(e.children)):!0)?t:null}const uc=t=>t?Qd(t)?ea(t):uc(t.parent):null,Gs=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>uc(t.parent),$root:t=>uc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vd(t),$forceUpdate:t=>t.f||(t.f=()=>{nl(t.update)}),$nextTick:t=>t.n||(t.n=yd.bind(t.proxy)),$watch:t=>Iy.bind(t)}),Ba=(t,e)=>t!==Ae&&!t.__isScriptSetup&&Te(t,e),ey={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const b=a[e];if(b!==void 0)switch(b){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ba(r,e))return a[e]=1,r[e];if(s!==Ae&&Te(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Te(h,e))return a[e]=3,i[e];if(n!==Ae&&Te(n,e))return a[e]=4,n[e];hc&&(a[e]=0)}}const d=Gs[e];let g,E;if(d)return e==="$attrs"&&it(t.attrs,"get",""),d(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==Ae&&Te(n,e))return a[e]=4,n[e];if(E=l.config.globalProperties,Te(E,e))return E[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ba(s,e)?(s[e]=n,!0):r!==Ae&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:a}},c){let l,h;return!!(n[c]||t!==Ae&&c[0]!=="$"&&Te(t,c)||Ba(e,c)||(l=i[0])&&Te(l,c)||Te(r,c)||Te(Gs,c)||Te(s.config.globalProperties,c)||(h=a.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Hu(t){return re(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hc=!0;function ty(t){const e=Vd(t),n=t.proxy,r=t.ctx;hc=!1,e.beforeCreate&&zu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:g,mounted:E,beforeUpdate:b,updated:D,activated:L,deactivated:B,beforeDestroy:$,beforeUnmount:H,destroyed:j,unmounted:z,render:te,renderTracked:me,renderTriggered:v,errorCaptured:m,serverPrefetch:_,expose:w,inheritAttrs:I,components:S,directives:y,filters:Le}=e;if(h&&ny(h,r,null),a)for(const ce in a){const ye=a[ce];oe(ye)&&(r[ce]=ye.bind(n))}if(s){const ce=s.call(n,n);Re(ce)&&(t.data=Qo(ce))}if(hc=!0,i)for(const ce in i){const ye=i[ce],bt=oe(ye)?ye.bind(n,n):oe(ye.get)?ye.get.bind(n,n):qt,Rr=!oe(ye)&&oe(ye.set)?ye.set.bind(n):qt,Mt=gt({get:bt,set:Rr});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:_t=>Mt.value=_t})}if(c)for(const ce in c)Pd(c[ce],r,n,ce);if(l){const ce=oe(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(ye=>{cy(ye,ce[ye])})}d&&zu(d,t,"c");function De(ce,ye){re(ye)?ye.forEach(bt=>ce(bt.bind(n))):ye&&ce(ye.bind(n))}if(De(z_,g),De(Sd,E),De(W_,b),De(K_,D),De($_,L),De(q_,B),De(Y_,m),De(X_,me),De(J_,v),De(G_,H),De(Rd,z),De(Q_,_),re(w))if(w.length){const ce=t.exposed||(t.exposed={});w.forEach(ye=>{Object.defineProperty(ce,ye,{get:()=>n[ye],set:bt=>n[ye]=bt,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===qt&&(t.render=te),I!=null&&(t.inheritAttrs=I),S&&(t.components=S),y&&(t.directives=y),_&&wd(t)}function ny(t,e,n=qt){re(t)&&(t=fc(t));for(const r in t){const s=t[r];let i;Re(s)?"default"in s?i=Qs(s.from||r,s.default,!0):i=Qs(s.from||r):i=Qs(s),Me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function zu(t,e,n){Qt(re(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pd(t,e,n,r){let s=r.includes(".")?qd(n,r):()=>n[r];if(Be(t)){const i=e[t];oe(i)&&Js(s,i)}else if(oe(t))Js(s,t.bind(n));else if(Re(t))if(re(t))t.forEach(i=>Pd(i,e,n,r));else{const i=oe(t.handler)?t.handler.bind(n):e[t.handler];oe(i)&&Js(s,i,t)}}function Vd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Io(l,h,a,!0)),Io(l,e,a)),Re(e)&&i.set(e,l),l}function Io(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Io(t,i,n,!0),s&&s.forEach(a=>Io(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=ry[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const ry={data:Wu,props:Ku,emits:Ku,methods:Bs,computed:Bs,beforeCreate:ht,created:ht,beforeMount:ht,mounted:ht,beforeUpdate:ht,updated:ht,beforeDestroy:ht,beforeUnmount:ht,destroyed:ht,unmounted:ht,activated:ht,deactivated:ht,errorCaptured:ht,serverPrefetch:ht,components:Bs,directives:Bs,watch:iy,provide:Wu,inject:sy};function Wu(t,e){return e?t?function(){return ct(oe(t)?t.call(this,this):t,oe(e)?e.call(this,this):e)}:e:t}function sy(t,e){return Bs(fc(t),fc(e))}function fc(t){if(re(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ht(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?ct(Object.create(null),t,e):e}function Ku(t,e){return t?re(t)&&re(e)?[...new Set([...t,...e])]:ct(Object.create(null),Hu(t),Hu(e??{})):e}function iy(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=ht(t[r],e[r]);return n}function Dd(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oy=0;function ay(t,e){return function(r,s=null){oe(r)||(r=ct({},r)),s!=null&&!Re(s)&&(s=null);const i=Dd(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:oy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qy,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&oe(d.install)?(a.add(d),d.install(h,...g)):oe(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,E){if(!l){const b=h._ceVNode||mt(r,s);return b.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),t(b,d,E),l=!0,h._container=d,d.__vue_app__=h,ea(b.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Qt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=pr;pr=h;try{return d()}finally{pr=g}}};return h}}let pr=null;function cy(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function Qs(t,e,n=!1){const r=Gd();if(r||pr){let s=pr?pr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&oe(e)?e.call(r&&r.proxy):e}}function ly(){return!!(Gd()||pr)}const kd={},Nd=()=>Object.create(kd),Od=t=>Object.getPrototypeOf(t)===kd;function uy(t,e,n,r=!1){const s={},i=Nd();t.propsDefaults=Object.create(null),xd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:b_(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=_e(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let g=0;g<d.length;g++){let E=d[g];if(Yo(t.emitsOptions,E))continue;const b=e[E];if(l)if(Te(i,E))b!==i[E]&&(i[E]=b,h=!0);else{const D=Hn(E);s[D]=dc(l,c,D,b,t,!1)}else b!==i[E]&&(i[E]=b,h=!0)}}}else{xd(t,e,s,i)&&(h=!0);let d;for(const g in c)(!e||!Te(e,g)&&((d=Ir(g))===g||!Te(e,d)))&&(l?n&&(n[g]!==void 0||n[d]!==void 0)&&(s[g]=dc(l,c,g,void 0,t,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!Te(e,g))&&(delete i[g],h=!0)}h&&nn(t.attrs,"set","")}function xd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Hs(l))continue;const h=e[l];let d;s&&Te(s,d=Hn(l))?!i||!i.includes(d)?n[d]=h:(c||(c={}))[d]=h:Yo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=_e(n),h=c||Ae;for(let d=0;d<i.length;d++){const g=i[d];n[g]=dc(s,l,g,h[g],t,!Te(h,g))}}return a}function dc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&oe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ii(s);r=h[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Ir(n))&&(r=!0))}return r}const fy=new WeakMap;function Md(t,e,n=!1){const r=n?fy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!oe(t)){const d=g=>{l=!0;const[E,b]=Md(g,e,!0);ct(a,E),b&&c.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return Re(t)&&r.set(t,jr),jr;if(re(i))for(let d=0;d<i.length;d++){const g=Hn(i[d]);Gu(g)&&(a[g]=Ae)}else if(i)for(const d in i){const g=Hn(d);if(Gu(g)){const E=i[d],b=a[g]=re(E)||oe(E)?{type:E}:ct({},E),D=b.type;let L=!1,B=!0;if(re(D))for(let $=0;$<D.length;++$){const H=D[$],j=oe(H)&&H.name;if(j==="Boolean"){L=!0;break}else j==="String"&&(B=!1)}else L=oe(D)&&D.name==="Boolean";b[0]=L,b[1]=B,(L||Te(b,"default"))&&c.push(g)}}const h=[a,c];return Re(t)&&r.set(t,h),h}function Gu(t){return t[0]!=="$"&&!Hs(t)}const sl=t=>t==="_"||t==="_ctx"||t==="$stable",il=t=>re(t)?t.map($t):[$t(t)],dy=(t,e,n)=>{if(e._n)return e;const r=Us((...s)=>il(e(...s)),n);return r._c=!1,r},Ld=(t,e,n)=>{const r=t._ctx;for(const s in t){if(sl(s))continue;const i=t[s];if(oe(i))e[s]=dy(s,i,r);else if(i!=null){const a=il(i);e[s]=()=>a}}},Fd=(t,e)=>{const n=il(e);t.slots.default=()=>n},Ud=(t,e,n)=>{for(const r in e)(n||!sl(r))&&(t[r]=e[r])},py=(t,e,n)=>{const r=t.slots=Nd();if(t.vnode.shapeFlag&32){const s=e._;s?(Ud(r,e,n),n&&Qf(r,"_",s,!0)):Ld(e,r)}else e&&Fd(t,e)},gy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ae;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ud(s,e,n):(i=!e.$stable,Ld(e,s)),a=e}else e&&(Fd(t,e),a={default:1});if(i)for(const c in s)!sl(c)&&a[c]==null&&delete s[c]},vt=Vy;function my(t){return _y(t)}function _y(t,e){const n=Ko();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:g,nextSibling:E,setScopeId:b=qt,insertStaticContent:D}=t,L=(T,A,P,U=null,k=null,O=null,W=void 0,F=null,x=!!A.dynamicChildren)=>{if(T===A)return;T&&!Fs(T,A)&&(U=yn(T),_t(T,k,O,!0),T=null),A.patchFlag===-2&&(x=!1,A.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:K}=A;switch(M){case Zo:B(T,A,P,U);break;case hn:$(T,A,P,U);break;case $a:T==null&&H(A,P,U,W);break;case xe:S(T,A,P,U,k,O,W,F,x);break;default:K&1?te(T,A,P,U,k,O,W,F,x):K&6?y(T,A,P,U,k,O,W,F,x):(K&64||K&128)&&M.process(T,A,P,U,k,O,W,F,x,er)}Y!=null&&k?Ks(Y,T&&T.ref,O,A||T,!A):Y==null&&T&&T.ref!=null&&Ks(T.ref,null,O,T,!0)},B=(T,A,P,U)=>{if(T==null)r(A.el=c(A.children),P,U);else{const k=A.el=T.el;A.children!==T.children&&h(k,A.children)}},$=(T,A,P,U)=>{T==null?r(A.el=l(A.children||""),P,U):A.el=T.el},H=(T,A,P,U)=>{[T.el,T.anchor]=D(T.children,A,P,U,T.el,T.anchor)},j=({el:T,anchor:A},P,U)=>{let k;for(;T&&T!==A;)k=E(T),r(T,P,U),T=k;r(A,P,U)},z=({el:T,anchor:A})=>{let P;for(;T&&T!==A;)P=E(T),s(T),T=P;s(A)},te=(T,A,P,U,k,O,W,F,x)=>{A.type==="svg"?W="svg":A.type==="math"&&(W="mathml"),T==null?me(A,P,U,k,O,W,F,x):_(T,A,k,O,W,F,x)},me=(T,A,P,U,k,O,W,F)=>{let x,M;const{props:Y,shapeFlag:K,transition:J,dirs:Z}=T;if(x=T.el=a(T.type,O,Y&&Y.is,Y),K&8?d(x,T.children):K&16&&m(T.children,x,null,U,k,ja(T,O),W,F),Z&&or(T,null,U,"created"),v(x,T,T.scopeId,W,U),Y){for(const Ie in Y)Ie!=="value"&&!Hs(Ie)&&i(x,Ie,null,Y[Ie],O,U);"value"in Y&&i(x,"value",null,Y.value,O),(M=Y.onVnodeBeforeMount)&&Ut(M,U,T)}Z&&or(T,null,U,"beforeMount");const le=yy(k,J);le&&J.beforeEnter(x),r(x,A,P),((M=Y&&Y.onVnodeMounted)||le||Z)&&vt(()=>{M&&Ut(M,U,T),le&&J.enter(x),Z&&or(T,null,U,"mounted")},k)},v=(T,A,P,U,k)=>{if(P&&b(T,P),U)for(let O=0;O<U.length;O++)b(T,U[O]);if(k){let O=k.subTree;if(A===O||zd(O.type)&&(O.ssContent===A||O.ssFallback===A)){const W=k.vnode;v(T,W,W.scopeId,W.slotScopeIds,k.parent)}}},m=(T,A,P,U,k,O,W,F,x=0)=>{for(let M=x;M<T.length;M++){const Y=T[M]=F?Cn(T[M]):$t(T[M]);L(null,Y,A,P,U,k,O,W,F)}},_=(T,A,P,U,k,O,W)=>{const F=A.el=T.el;let{patchFlag:x,dynamicChildren:M,dirs:Y}=A;x|=T.patchFlag&16;const K=T.props||Ae,J=A.props||Ae;let Z;if(P&&ar(P,!1),(Z=J.onVnodeBeforeUpdate)&&Ut(Z,P,A,T),Y&&or(A,T,P,"beforeUpdate"),P&&ar(P,!0),(K.innerHTML&&J.innerHTML==null||K.textContent&&J.textContent==null)&&d(F,""),M?w(T.dynamicChildren,M,F,P,U,ja(A,k),O):W||ye(T,A,F,null,P,U,ja(A,k),O,!1),x>0){if(x&16)I(F,K,J,P,k);else if(x&2&&K.class!==J.class&&i(F,"class",null,J.class,k),x&4&&i(F,"style",K.style,J.style,k),x&8){const le=A.dynamicProps;for(let Ie=0;Ie<le.length;Ie++){const ge=le[Ie],et=K[ge],tt=J[ge];(tt!==et||ge==="value")&&i(F,ge,et,tt,k,P)}}x&1&&T.children!==A.children&&d(F,A.children)}else!W&&M==null&&I(F,K,J,P,k);((Z=J.onVnodeUpdated)||Y)&&vt(()=>{Z&&Ut(Z,P,A,T),Y&&or(A,T,P,"updated")},U)},w=(T,A,P,U,k,O,W)=>{for(let F=0;F<A.length;F++){const x=T[F],M=A[F],Y=x.el&&(x.type===xe||!Fs(x,M)||x.shapeFlag&198)?g(x.el):P;L(x,M,Y,null,U,k,O,W,!0)}},I=(T,A,P,U,k)=>{if(A!==P){if(A!==Ae)for(const O in A)!Hs(O)&&!(O in P)&&i(T,O,A[O],null,k,U);for(const O in P){if(Hs(O))continue;const W=P[O],F=A[O];W!==F&&O!=="value"&&i(T,O,F,W,k,U)}"value"in P&&i(T,"value",A.value,P.value,k)}},S=(T,A,P,U,k,O,W,F,x)=>{const M=A.el=T?T.el:c(""),Y=A.anchor=T?T.anchor:c("");let{patchFlag:K,dynamicChildren:J,slotScopeIds:Z}=A;Z&&(F=F?F.concat(Z):Z),T==null?(r(M,P,U),r(Y,P,U),m(A.children||[],P,Y,k,O,W,F,x)):K>0&&K&64&&J&&T.dynamicChildren?(w(T.dynamicChildren,J,P,k,O,W,F),(A.key!=null||k&&A===k.subTree)&&Bd(T,A,!0)):ye(T,A,P,Y,k,O,W,F,x)},y=(T,A,P,U,k,O,W,F,x)=>{A.slotScopeIds=F,T==null?A.shapeFlag&512?k.ctx.activate(A,P,U,W,x):Le(A,P,U,k,O,W,x):At(T,A,x)},Le=(T,A,P,U,k,O,W)=>{const F=T.component=Ly(T,U,k);if(Ad(T)&&(F.ctx.renderer=er),Fy(F,!1,W),F.asyncDep){if(k&&k.registerDep(F,De,W),!T.el){const x=F.subTree=mt(hn);$(null,x,A,P),T.placeholder=x.el}}else De(F,T,A,P,k,O,W)},At=(T,A,P)=>{const U=A.component=T.component;if(Cy(T,A,P))if(U.asyncDep&&!U.asyncResolved){ce(U,A,P);return}else U.next=A,U.update();else A.el=T.el,U.vnode=A},De=(T,A,P,U,k,O,W)=>{const F=()=>{if(T.isMounted){let{next:K,bu:J,u:Z,parent:le,vnode:Ie}=T;{const Et=jd(T);if(Et){K&&(K.el=Ie.el,ce(T,K,W)),Et.asyncDep.then(()=>{T.isUnmounted||F()});return}}let ge=K,et;ar(T,!1),K?(K.el=Ie.el,ce(T,K,W)):K=Ie,J&&eo(J),(et=K.props&&K.props.onVnodeBeforeUpdate)&&Ut(et,le,K,Ie),ar(T,!0);const tt=Ju(T),yt=T.subTree;T.subTree=tt,L(yt,tt,g(yt.el),yn(yt),T,k,O),K.el=tt.el,ge===null&&Py(T,tt.el),Z&&vt(Z,k),(et=K.props&&K.props.onVnodeUpdated)&&vt(()=>Ut(et,le,K,Ie),k)}else{let K;const{el:J,props:Z}=A,{bm:le,m:Ie,parent:ge,root:et,type:tt}=T,yt=zr(A);ar(T,!1),le&&eo(le),!yt&&(K=Z&&Z.onVnodeBeforeMount)&&Ut(K,ge,A),ar(T,!0);{et.ce&&et.ce._def.shadowRoot!==!1&&et.ce._injectChildStyle(tt);const Et=T.subTree=Ju(T);L(null,Et,P,U,T,k,O),A.el=Et.el}if(Ie&&vt(Ie,k),!yt&&(K=Z&&Z.onVnodeMounted)){const Et=A;vt(()=>Ut(K,ge,Et),k)}(A.shapeFlag&256||ge&&zr(ge.vnode)&&ge.vnode.shapeFlag&256)&&T.a&&vt(T.a,k),T.isMounted=!0,A=P=U=null}};T.scope.on();const x=T.effect=new nd(F);T.scope.off();const M=T.update=x.run.bind(x),Y=T.job=x.runIfDirty.bind(x);Y.i=T,Y.id=T.uid,x.scheduler=()=>nl(Y),ar(T,!0),M()},ce=(T,A,P)=>{A.component=T;const U=T.vnode.props;T.vnode=A,T.next=null,hy(T,A.props,U,P),gy(T,A.children,P),ln(),$u(T),un()},ye=(T,A,P,U,k,O,W,F,x=!1)=>{const M=T&&T.children,Y=T?T.shapeFlag:0,K=A.children,{patchFlag:J,shapeFlag:Z}=A;if(J>0){if(J&128){Rr(M,K,P,U,k,O,W,F,x);return}else if(J&256){bt(M,K,P,U,k,O,W,F,x);return}}Z&8?(Y&16&&Zt(M,k,O),K!==M&&d(P,K)):Y&16?Z&16?Rr(M,K,P,U,k,O,W,F,x):Zt(M,k,O,!0):(Y&8&&d(P,""),Z&16&&m(K,P,U,k,O,W,F,x))},bt=(T,A,P,U,k,O,W,F,x)=>{T=T||jr,A=A||jr;const M=T.length,Y=A.length,K=Math.min(M,Y);let J;for(J=0;J<K;J++){const Z=A[J]=x?Cn(A[J]):$t(A[J]);L(T[J],Z,P,null,k,O,W,F,x)}M>Y?Zt(T,k,O,!0,!1,K):m(A,P,U,k,O,W,F,x,K)},Rr=(T,A,P,U,k,O,W,F,x)=>{let M=0;const Y=A.length;let K=T.length-1,J=Y-1;for(;M<=K&&M<=J;){const Z=T[M],le=A[M]=x?Cn(A[M]):$t(A[M]);if(Fs(Z,le))L(Z,le,P,null,k,O,W,F,x);else break;M++}for(;M<=K&&M<=J;){const Z=T[K],le=A[J]=x?Cn(A[J]):$t(A[J]);if(Fs(Z,le))L(Z,le,P,null,k,O,W,F,x);else break;K--,J--}if(M>K){if(M<=J){const Z=J+1,le=Z<Y?A[Z].el:U;for(;M<=J;)L(null,A[M]=x?Cn(A[M]):$t(A[M]),P,le,k,O,W,F,x),M++}}else if(M>J)for(;M<=K;)_t(T[M],k,O,!0),M++;else{const Z=M,le=M,Ie=new Map;for(M=le;M<=J;M++){const Qe=A[M]=x?Cn(A[M]):$t(A[M]);Qe.key!=null&&Ie.set(Qe.key,M)}let ge,et=0;const tt=J-le+1;let yt=!1,Et=0;const Pt=new Array(tt);for(M=0;M<tt;M++)Pt[M]=0;for(M=Z;M<=K;M++){const Qe=T[M];if(et>=tt){_t(Qe,k,O,!0);continue}let ze;if(Qe.key!=null)ze=Ie.get(Qe.key);else for(ge=le;ge<=J;ge++)if(Pt[ge-le]===0&&Fs(Qe,A[ge])){ze=ge;break}ze===void 0?_t(Qe,k,O,!0):(Pt[ze-le]=M+1,ze>=Et?Et=ze:yt=!0,L(Qe,A[ze],P,null,k,O,W,F,x),et++)}const Pr=yt?Ey(Pt):jr;for(ge=Pr.length-1,M=tt-1;M>=0;M--){const Qe=le+M,ze=A[Qe],vs=A[Qe+1],tr=Qe+1<Y?vs.el||vs.placeholder:U;Pt[M]===0?L(null,ze,P,tr,k,O,W,F,x):yt&&(ge<0||M!==Pr[ge]?Mt(ze,P,tr,2):ge--)}}},Mt=(T,A,P,U,k=null)=>{const{el:O,type:W,transition:F,children:x,shapeFlag:M}=T;if(M&6){Mt(T.component.subTree,A,P,U);return}if(M&128){T.suspense.move(A,P,U);return}if(M&64){W.move(T,A,P,er);return}if(W===xe){r(O,A,P);for(let K=0;K<x.length;K++)Mt(x[K],A,P,U);r(T.anchor,A,P);return}if(W===$a){j(T,A,P);return}if(U!==2&&M&1&&F)if(U===0)F.beforeEnter(O),r(O,A,P),vt(()=>F.enter(O),k);else{const{leave:K,delayLeave:J,afterLeave:Z}=F,le=()=>{T.ctx.isUnmounted?s(O):r(O,A,P)},Ie=()=>{O._isLeaving&&O[j_](!0),K(O,()=>{le(),Z&&Z()})};J?J(O,le,Ie):Ie()}else r(O,A,P)},_t=(T,A,P,U=!1,k=!1)=>{const{type:O,props:W,ref:F,children:x,dynamicChildren:M,shapeFlag:Y,patchFlag:K,dirs:J,cacheIndex:Z}=T;if(K===-2&&(k=!1),F!=null&&(ln(),Ks(F,null,P,T,!0),un()),Z!=null&&(A.renderCache[Z]=void 0),Y&256){A.ctx.deactivate(T);return}const le=Y&1&&J,Ie=!zr(T);let ge;if(Ie&&(ge=W&&W.onVnodeBeforeUnmount)&&Ut(ge,A,T),Y&6)Es(T.component,P,U);else{if(Y&128){T.suspense.unmount(P,U);return}le&&or(T,null,A,"beforeUnmount"),Y&64?T.type.remove(T,A,P,er,U):M&&!M.hasOnce&&(O!==xe||K>0&&K&64)?Zt(M,A,P,!1,!0):(O===xe&&K&384||!k&&Y&16)&&Zt(x,A,P),U&&ys(T)}(Ie&&(ge=W&&W.onVnodeUnmounted)||le)&&vt(()=>{ge&&Ut(ge,A,T),le&&or(T,null,A,"unmounted")},P)},ys=T=>{const{type:A,el:P,anchor:U,transition:k}=T;if(A===xe){Cr(P,U);return}if(A===$a){z(T);return}const O=()=>{s(P),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(T.shapeFlag&1&&k&&!k.persisted){const{leave:W,delayLeave:F}=k,x=()=>W(P,O);F?F(T.el,O,x):x()}else O()},Cr=(T,A)=>{let P;for(;T!==A;)P=E(T),s(T),T=P;s(A)},Es=(T,A,P)=>{const{bum:U,scope:k,job:O,subTree:W,um:F,m:x,a:M}=T;Qu(x),Qu(M),U&&eo(U),k.stop(),O&&(O.flags|=8,_t(W,T,A,P)),F&&vt(F,A),vt(()=>{T.isUnmounted=!0},A)},Zt=(T,A,P,U=!1,k=!1,O=0)=>{for(let W=O;W<T.length;W++)_t(T[W],A,P,U,k)},yn=T=>{if(T.shapeFlag&6)return yn(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const A=E(T.anchor||T.el),P=A&&A[U_];return P?E(P):A};let Zn=!1;const Ts=(T,A,P)=>{T==null?A._vnode&&_t(A._vnode,null,null,!0):L(A._vnode||null,T,A,null,null,null,P),A._vnode=T,Zn||(Zn=!0,$u(),Td(),Zn=!1)},er={p:L,um:_t,m:Mt,r:ys,mt:Le,mc:m,pc:ye,pbc:w,n:yn,o:t};return{render:Ts,hydrate:void 0,createApp:ay(Ts)}}function ja({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function yy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bd(t,e,n=!1){const r=t.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Cn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Bd(a,c)),c.type===Zo&&c.patchFlag!==-1&&(c.el=a.el),c.type===hn&&!c.el&&(c.el=a.el)}}function Ey(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function jd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jd(e)}function Qu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ty=Symbol.for("v-scx"),vy=()=>Qs(Ty);function Js(t,e,n){return $d(t,e,n)}function $d(t,e,n=Ae){const{immediate:r,deep:s,flush:i,once:a}=n,c=ct({},n),l=e&&r||!e&&i!=="post";let h;if(li){if(i==="sync"){const b=vy();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=qt,b.resume=qt,b.pause=qt,b}}const d=dt;c.call=(b,D,L)=>Qt(b,d,D,L);let g=!1;i==="post"?c.scheduler=b=>{vt(b,d&&d.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(b,D)=>{D?b():nl(b)}),c.augmentJob=b=>{e&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const E=x_(t,e,c);return li&&(h?h.push(E):l&&E()),E}function Iy(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?qd(r,t):()=>r[t]:t.bind(r,r);let i;oe(e)?i=e:(i=e.handler,n=e);const a=Ii(this),c=$d(s,i.bind(r),n);return a(),c}function qd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const wy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Hn(e)}Modifiers`]||t[`${Ir(e)}Modifiers`];function Ay(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),a=i&&wy(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>Be(d)?d.trim():d)),a.number&&(s=n.map(ic)));let c,l=r[c=xa(e)]||r[c=xa(Hn(e))];!l&&i&&(l=r[c=xa(Ir(e))]),l&&Qt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Qt(h,t,6,s)}}const by=new WeakMap;function Hd(t,e,n=!1){const r=n?by:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!oe(t)){const l=h=>{const d=Hd(h,e,!0);d&&(c=!0,ct(a,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Re(t)&&r.set(t,null),null):(re(i)?i.forEach(l=>a[l]=null):ct(a,i),Re(t)&&r.set(t,a),a)}function Yo(t,e){return!t||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,Ir(e))||Te(t,e))}function Ju(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:g,data:E,setupState:b,ctx:D,inheritAttrs:L}=t,B=To(t);let $,H;try{if(n.shapeFlag&4){const z=s||r,te=z;$=$t(h.call(te,z,d,g,b,E,D)),H=c}else{const z=e;$=$t(z.length>1?z(g,{attrs:c,slots:a,emit:l}):z(g,null)),H=e.props?c:Sy(c)}}catch(z){Xs.length=0,Jo(z,t,1),$=mt(hn)}let j=$;if(H&&L!==!1){const z=Object.keys(H),{shapeFlag:te}=j;z.length&&te&7&&(i&&z.some(Hc)&&(H=Ry(H,i)),j=Zr(j,H,!1,!0))}return n.dirs&&(j=Zr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&rl(j,n.transition),$=j,To(B),$}const Sy=t=>{let e;for(const n in t)(n==="class"||n==="style"||zo(n))&&((e||(e={}))[n]=t[n]);return e},Ry=(t,e)=>{const n={};for(const r in t)(!Hc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Cy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Xu(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const E=d[g];if(a[E]!==r[E]&&!Yo(h,E))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Xu(r,a,h):!0:!!a;return!1}function Xu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yo(n,i))return!0}return!1}function Py({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const zd=t=>t.__isSuspense;function Vy(t,e){e&&e.pendingBranch?re(t)?e.effects.push(...t):e.effects.push(t):F_(t)}const xe=Symbol.for("v-fgt"),Zo=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),$a=Symbol.for("v-stc"),Xs=[];let It=null;function pe(t=!1){Xs.push(It=t?null:[])}function Dy(){Xs.pop(),It=Xs[Xs.length-1]||null}let ci=1;function Yu(t,e=!1){ci+=t,t<0&&It&&e&&(It.hasOnce=!0)}function Wd(t){return t.dynamicChildren=ci>0?It||jr:null,Dy(),ci>0&&It&&It.push(t),t}function Se(t,e,n,r,s,i){return Wd(Ee(t,e,n,r,s,i,!0))}function Dn(t,e,n,r,s){return Wd(mt(t,e,n,r,s,!0))}function ol(t){return t?t.__v_isVNode===!0:!1}function Fs(t,e){return t.type===e.type&&t.key===e.key}const Kd=({key:t})=>t??null,no=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||Me(t)||oe(t)?{i:at,r:t,k:e,f:!!n}:t:null);function Ee(t,e=null,n=null,r=0,s=null,i=t===xe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Kd(e),ref:e&&no(e),scopeId:Id,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return c?(al(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),ci>0&&!a&&It&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&It.push(l),l}const mt=ky;function ky(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Z_)&&(t=hn),ol(t)){const c=Zr(t,e,!0);return n&&al(c,n),ci>0&&!i&&It&&(c.shapeFlag&6?It[It.indexOf(t)]=c:It.push(c)),c.patchFlag=-2,c}if($y(t)&&(t=t.__vccOpts),e){e=Ny(e);let{class:c,style:l}=e;c&&!Be(c)&&(e.class=Kc(c)),Re(l)&&(el(l)&&!re(l)&&(l=ct({},l)),e.style=cs(l))}const a=Be(t)?1:zd(t)?128:B_(t)?64:Re(t)?4:oe(t)?2:0;return Ee(t,e,n,r,s,a,i,!0)}function Ny(t){return t?el(t)||Od(t)?ct({},t):t:null}function Zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?Oy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Kd(h),ref:e&&e.ref?n&&i?re(i)?i.concat(no(e)):[i,no(e)]:no(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xe?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zr(t.ssContent),ssFallback:t.ssFallback&&Zr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&rl(d,l.clone(d)),d}function Mr(t=" ",e=0){return mt(Zo,null,t,e)}function pc(t="",e=!1){return e?(pe(),Dn(hn,null,t)):mt(hn,null,t)}function $t(t){return t==null||typeof t=="boolean"?mt(hn):re(t)?mt(xe,null,t.slice()):ol(t)?Cn(t):mt(Zo,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zr(t)}function al(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(re(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),al(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Od(e)?e._ctx=at:s===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:at},n=32):(e=String(e),r&64?(n=16,e=[Mr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Oy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kc([e.class,r.class]));else if(s==="style")e.style=cs([e.style,r.style]);else if(zo(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Ut(t,e,n,r=null){Qt(t,e,7,[n,r])}const xy=Dd();let My=0;function Ly(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||xy,i={uid:My++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Md(r,s),emitsOptions:Hd(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ay.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const Gd=()=>dt||at;let wo,gc;{const t=Ko(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};wo=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),gc=e("__VUE_SSR_SETTERS__",n=>li=n)}const Ii=t=>{const e=dt;return wo(t),t.scope.on(),()=>{t.scope.off(),wo(e)}},Zu=()=>{dt&&dt.scope.off(),wo(null)};function Qd(t){return t.vnode.shapeFlag&4}let li=!1;function Fy(t,e=!1,n=!1){e&&gc(e);const{props:r,children:s}=t.vnode,i=Qd(t);uy(t,r,i,e),py(t,s,n||e);const a=i?Uy(t,e):void 0;return e&&gc(!1),a}function Uy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ey);const{setup:r}=n;if(r){ln();const s=t.setupContext=r.length>1?jy(t):null,i=Ii(t),a=vi(r,t,0,[t.props,s]),c=zf(a);if(un(),i(),(c||t.sp)&&!zr(t)&&wd(t),c){if(a.then(Zu,Zu),e)return a.then(l=>{eh(t,l)}).catch(l=>{Jo(l,t,0)});t.asyncDep=a}else eh(t,a)}else Jd(t)}function eh(t,e,n){oe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Re(e)&&(t.setupState=md(e)),Jd(t)}function Jd(t,e,n){const r=t.type;t.render||(t.render=r.render||qt);{const s=Ii(t);ln();try{ty(t)}finally{un(),s()}}}const By={get(t,e){return it(t,"get",""),t[e]}};function jy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,By),slots:t.slots,emit:t.emit,expose:e}}function ea(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(md(tl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function $y(t){return oe(t)&&"__vccOpts"in t}const gt=(t,e)=>N_(t,e,li),qy="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let mc;const th=typeof window<"u"&&window.trustedTypes;if(th)try{mc=th.createPolicy("vue",{createHTML:t=>t})}catch{}const Xd=mc?t=>mc.createHTML(t):t=>t,Hy="http://www.w3.org/2000/svg",zy="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,nh=tn&&tn.createElement("template"),Wy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?tn.createElementNS(Hy,t):e==="mathml"?tn.createElementNS(zy,t):n?tn.createElement(t,{is:n}):tn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>tn.createTextNode(t),createComment:t=>tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{nh.innerHTML=Xd(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=nh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ky=Symbol("_vtc");function Gy(t,e,n){const r=t[Ky];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rh=Symbol("_vod"),Qy=Symbol("_vsh"),Jy=Symbol(""),Xy=/(?:^|;)\s*display\s*:/;function Yy(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&ro(r,c,"")}else for(const a in e)n[a]==null&&ro(r,a,"");for(const a in n)a==="display"&&(i=!0),ro(r,a,n[a])}else if(s){if(e!==n){const a=r[Jy];a&&(n+=";"+a),r.cssText=n,i=Xy.test(n)}}else e&&t.removeAttribute("style");rh in t&&(t[rh]=i?r.display:"",t[Qy]&&(r.display="none"))}const sh=/\s*!important$/;function ro(t,e,n){if(re(n))n.forEach(r=>ro(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Zy(t,e);sh.test(n)?t.setProperty(Ir(r),n.replace(sh,""),"important"):t[r]=n}}const ih=["Webkit","Moz","ms"],qa={};function Zy(t,e){const n=qa[e];if(n)return n;let r=Hn(e);if(r!=="filter"&&r in t)return qa[e]=r;r=Gf(r);for(let s=0;s<ih.length;s++){const i=ih[s]+r;if(i in t)return qa[e]=i}return e}const oh="http://www.w3.org/1999/xlink";function ah(t,e,n,r,s,i=r_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(oh,e.slice(6,e.length)):t.setAttributeNS(oh,e,n):n==null||i&&!Jf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":xt(n)?String(n):n)}function ch(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xd(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Jf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function ur(t,e,n,r){t.addEventListener(e,n,r)}function eE(t,e,n,r){t.removeEventListener(e,n,r)}const lh=Symbol("_vei");function tE(t,e,n,r,s=null){const i=t[lh]||(t[lh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=nE(e);if(r){const h=i[e]=iE(r,s);ur(t,c,h,l)}else a&&(eE(t,c,a,l),i[e]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function nE(t){let e;if(uh.test(t)){e={};let r;for(;r=t.match(uh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ir(t.slice(2)),e]}let Ha=0;const rE=Promise.resolve(),sE=()=>Ha||(rE.then(()=>Ha=0),Ha=Date.now());function iE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt(oE(r,n.value),e,5,[r])};return n.value=t,n.attached=sE(),n}function oE(t,e){if(re(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const hh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,aE=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Gy(t,r,a):e==="style"?Yy(t,n,r):zo(e)?Hc(e)||tE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cE(t,e,r,a))?(ch(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ah(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Be(r))?ch(t,Hn(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ah(t,e,r,a))};function cE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&hh(e)&&oe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hh(e)&&Be(n)?!1:e in t}const Ao=t=>{const e=t.props["onUpdate:modelValue"]||!1;return re(e)?n=>eo(e,n):e};function lE(t){t.target.composing=!0}function fh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wr=Symbol("_assign"),uE={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Wr]=Ao(s);const i=r||s.props&&s.props.type==="number";ur(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ic(c)),t[Wr](c)}),n&&ur(t,"change",()=>{t.value=t.value.trim()}),e||(ur(t,"compositionstart",lE),ur(t,"compositionend",fh),ur(t,"change",fh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Wr]=Ao(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ic(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Wi={created(t,{value:e},n){t.checked=go(e,n.props.value),t[Wr]=Ao(n),ur(t,"change",()=>{t[Wr](hE(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Wr]=Ao(r),e!==n&&(t.checked=go(e,r.props.value))}};function hE(t){return"_value"in t?t._value:t.value}const fE=ct({patchProp:aE},Wy);let dh;function dE(){return dh||(dh=my(fE))}const pE=((...t)=>{const e=dE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mE(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,gE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function gE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function mE(t){return Be(t)?document.querySelector(t):t}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Yd;const ta=t=>Yd=t,Zd=Symbol();function _c(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ys;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ys||(Ys={}));function _E(){const t=ed(!0),e=t.run(()=>qr({}));let n=[],r=[];const s=tl({install(i){ta(s),s._a=i,i.provide(Zd,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const ep=()=>{};function ph(t,e,n,r=ep){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&td()&&i_(s),s}function Or(t,...e){t.slice().forEach(n=>{n(...e)})}const yE=t=>t(),gh=Symbol(),za=Symbol();function yc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,r)=>t.set(r,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];_c(s)&&_c(r)&&t.hasOwnProperty(n)&&!Me(r)&&!Ln(r)?t[n]=yc(s,r):t[n]=r}return t}const EE=Symbol();function TE(t){return!_c(t)||!Object.prototype.hasOwnProperty.call(t,EE)}const{assign:Sn}=Object;function vE(t){return!!(Me(t)&&t.effect)}function IE(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const d=P_(n.state.value[t]);return Sn(d,i,Object.keys(a||{}).reduce((g,E)=>(g[E]=tl(gt(()=>{ta(n);const b=n._s.get(t);return a[E].call(b,b)})),g),{}))}return l=tp(t,h,e,n,r,!0),l}function tp(t,e,n={},r,s,i){let a;const c=Sn({actions:{}},n),l={deep:!0};let h,d,g=[],E=[],b;const D=r.state.value[t];!i&&!D&&(r.state.value[t]={}),qr({});let L;function B(m){let _;h=d=!1,typeof m=="function"?(m(r.state.value[t]),_={type:Ys.patchFunction,storeId:t,events:b}):(yc(r.state.value[t],m),_={type:Ys.patchObject,payload:m,storeId:t,events:b});const w=L=Symbol();yd().then(()=>{L===w&&(h=!0)}),d=!0,Or(g,_,r.state.value[t])}const $=i?function(){const{state:_}=n,w=_?_():{};this.$patch(I=>{Sn(I,w)})}:ep;function H(){a.stop(),g=[],E=[],r._s.delete(t)}const j=(m,_="")=>{if(gh in m)return m[za]=_,m;const w=function(){ta(r);const I=Array.from(arguments),S=[],y=[];function Le(ce){S.push(ce)}function At(ce){y.push(ce)}Or(E,{args:I,name:w[za],store:te,after:Le,onError:At});let De;try{De=m.apply(this&&this.$id===t?this:te,I)}catch(ce){throw Or(y,ce),ce}return De instanceof Promise?De.then(ce=>(Or(S,ce),ce)).catch(ce=>(Or(y,ce),Promise.reject(ce))):(Or(S,De),De)};return w[gh]=!0,w[za]=_,w},z={_p:r,$id:t,$onAction:ph.bind(null,E),$patch:B,$reset:$,$subscribe(m,_={}){const w=ph(g,m,_.detached,()=>I()),I=a.run(()=>Js(()=>r.state.value[t],S=>{(_.flush==="sync"?d:h)&&m({storeId:t,type:Ys.direct,events:b},S)},Sn({},l,_)));return w},$dispose:H},te=Qo(z);r._s.set(t,te);const v=(r._a&&r._a.runWithContext||yE)(()=>r._e.run(()=>(a=ed()).run(()=>e({action:j}))));for(const m in v){const _=v[m];if(Me(_)&&!vE(_)||Ln(_))i||(D&&TE(_)&&(Me(_)?_.value=D[m]:yc(_,D[m])),r.state.value[t][m]=_);else if(typeof _=="function"){const w=j(_,m);v[m]=w,c.actions[m]=_}}return Sn(te,v),Sn(_e(te),v),Object.defineProperty(te,"$state",{get:()=>r.state.value[t],set:m=>{B(_=>{Sn(_,m)})}}),r._p.forEach(m=>{Sn(te,a.run(()=>m({store:te,app:r._a,pinia:r,options:c})))}),D&&i&&n.hydrate&&n.hydrate(te.$state,D),h=!0,d=!0,te}/*! #__NO_SIDE_EFFECTS__ */function us(t,e,n){let r;const s=typeof e=="function";r=s?n:e;function i(a,c){const l=ly();return a=a||(l?Qs(Zd,null):null),a&&ta(a),a=Yd,a._s.has(t)||(s?tp(t,e,r,a):IE(t,r,a)),a._s.get(t)}return i.$id=t,i}const wE=()=>{};var mh={};/**
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
 */const np=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},AE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,b=h&63;l||(b=64,a||(E=64)),r.push(n[d],n[g],n[E],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(np(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):AE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new bE;const E=i<<2|c>>4;if(r.push(E),h!==64){const b=c<<4&240|h>>2;if(r.push(b),g!==64){const D=h<<6&192|g;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SE=function(t){const e=np(t);return rp.encodeByteArray(e,!0)},bo=function(t){return SE(t).replace(/\./g,"")},sp=function(t){try{return rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const CE=()=>RE().__FIREBASE_DEFAULTS__,PE=()=>{if(typeof process>"u"||typeof mh>"u")return;const t=mh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sp(t[1]);return e&&JSON.parse(e)},na=()=>{try{return wE()||CE()||PE()||VE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ip=t=>{var e,n;return(n=(e=na())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},DE=t=>{const e=ip(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},op=()=>{var t;return(t=na())==null?void 0:t.config},ap=t=>{var e;return(e=na())==null?void 0:e[`_${t}`]};/**
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
 */class kE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function hs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function NE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[bo(JSON.stringify(n)),bo(JSON.stringify(a)),""].join(".")}const Zs={};function OE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Zs))Zs[e]?t.emulator.push(e):t.prod.push(e);return t}function xE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let _h=!1;function lp(t,e){if(typeof window>"u"||typeof document>"u"||!hs(window.location.host)||Zs[t]===e||Zs[t]||_h)return;Zs[t]=e;function n(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=OE().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function l(E,b){E.setAttribute("width","24"),E.setAttribute("id",b),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function h(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{_h=!0,a()},E}function d(E,b){E.setAttribute("id",b),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=xE(r),b=n("text"),D=document.getElementById(b)||document.createElement("span"),L=n("learnmore"),B=document.getElementById(L)||document.createElement("a"),$=n("preprendIcon"),H=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const j=E.element;c(j),d(B,L);const z=h();l(H,$),j.append(H,D,B,z),document.body.appendChild(j)}i?(D.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ME(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function LE(){var e;const t=(e=na())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jE(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $E(){return!LE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qE(){try{return typeof indexedDB=="object"}catch{return!1}}function HE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const zE="FirebaseError";class _n extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zE,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wi.prototype.create)}}class wi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?WE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new _n(s,c,r)}}function WE(t,e){return t.replace(KE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const KE=/\{\$([^}]+)}/g;function GE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(yh(i)&&yh(a)){if(!mr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yh(t){return t!==null&&typeof t=="object"}/**
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
 */function Ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function QE(t,e){const n=new JE(t,e);return n.subscribe.bind(n)}class JE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wa),s.error===void 0&&(s.error=Wa),s.complete===void 0&&(s.complete=Wa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wa(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class YE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eT(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZE(t){return t===lr?void 0:t}function eT(t){return t.instantiationMode==="EAGER"}/**
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
 */class tT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const nT={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},rT=ue.INFO,sT={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},iT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=rT,this._logHandler=iT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const oT=(t,e)=>e.some(n=>t instanceof n);let Eh,Th;function aT(){return Eh||(Eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cT(){return Th||(Th=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,Ec=new WeakMap,hp=new WeakMap,Ka=new WeakMap,ll=new WeakMap;function lT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Fn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&up.set(n,t)}).catch(()=>{}),ll.set(e,t),e}function uT(t){if(Ec.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Ec.set(t,e)}let Tc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ec.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hT(t){Tc=t(Tc)}function fT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ga(this),e,...n);return hp.set(r,e.sort?e.sort():[e]),Fn(r)}:cT().includes(t)?function(...e){return t.apply(Ga(this),e),Fn(up.get(this))}:function(...e){return Fn(t.apply(Ga(this),e))}}function dT(t){return typeof t=="function"?fT(t):(t instanceof IDBTransaction&&uT(t),oT(t,aT())?new Proxy(t,Tc):t)}function Fn(t){if(t instanceof IDBRequest)return lT(t);if(Ka.has(t))return Ka.get(t);const e=dT(t);return e!==t&&(Ka.set(t,e),ll.set(e,t)),e}const Ga=t=>ll.get(t);function pT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Fn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Fn(a.result),l.oldVersion,l.newVersion,Fn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const gT=["get","getKey","getAll","getAllKeys","count"],mT=["put","add","delete","clear"],Qa=new Map;function vh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qa.get(e))return Qa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gT.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Qa.set(e,i),i}hT(t=>({...t,get:(e,n,r)=>vh(e,n)||t.get(e,n,r),has:(e,n)=>!!vh(e,n)||t.has(e,n)}));/**
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
 */class _T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",Ih="0.14.6";/**
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
 */const fn=new cl("@firebase/app"),ET="@firebase/app-compat",TT="@firebase/analytics-compat",vT="@firebase/analytics",IT="@firebase/app-check-compat",wT="@firebase/app-check",AT="@firebase/auth",bT="@firebase/auth-compat",ST="@firebase/database",RT="@firebase/data-connect",CT="@firebase/database-compat",PT="@firebase/functions",VT="@firebase/functions-compat",DT="@firebase/installations",kT="@firebase/installations-compat",NT="@firebase/messaging",OT="@firebase/messaging-compat",xT="@firebase/performance",MT="@firebase/performance-compat",LT="@firebase/remote-config",FT="@firebase/remote-config-compat",UT="@firebase/storage",BT="@firebase/storage-compat",jT="@firebase/firestore",$T="@firebase/ai",qT="@firebase/firestore-compat",HT="firebase",zT="12.6.0";/**
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
 */const Ic="[DEFAULT]",WT={[vc]:"fire-core",[ET]:"fire-core-compat",[vT]:"fire-analytics",[TT]:"fire-analytics-compat",[wT]:"fire-app-check",[IT]:"fire-app-check-compat",[AT]:"fire-auth",[bT]:"fire-auth-compat",[ST]:"fire-rtdb",[RT]:"fire-data-connect",[CT]:"fire-rtdb-compat",[PT]:"fire-fn",[VT]:"fire-fn-compat",[DT]:"fire-iid",[kT]:"fire-iid-compat",[NT]:"fire-fcm",[OT]:"fire-fcm-compat",[xT]:"fire-perf",[MT]:"fire-perf-compat",[LT]:"fire-rc",[FT]:"fire-rc-compat",[UT]:"fire-gcs",[BT]:"fire-gcs-compat",[jT]:"fire-fst",[qT]:"fire-fst-compat",[$T]:"fire-vertex","fire-js":"fire-js",[HT]:"fire-js-all"};/**
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
 */const So=new Map,KT=new Map,wc=new Map;function wh(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(wc.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;wc.set(e,t);for(const n of So.values())wh(n,t);for(const n of KT.values())wh(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Vt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const GT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new wi("app","Firebase",GT);/**
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
 */class QT{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const fs=zT;function fp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ic,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=op()),!n)throw Un.create("no-options");const i=So.get(s);if(i){if(mr(n,i.options)&&mr(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const a=new tT(s);for(const l of wc.values())a.addComponent(l);const c=new QT(n,r,a);return So.set(s,c),c}function dp(t=Ic){const e=So.get(t);if(!e&&t===Ic&&op())return fp();if(!e)throw Un.create("no-app",{appName:t});return e}function Bn(t,e,n){let r=WT[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(a.join(" "));return}es(new _r(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const JT="firebase-heartbeat-database",XT=1,ui="firebase-heartbeat-store";let Ja=null;function pp(){return Ja||(Ja=pT(JT,XT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ui)}catch(n){console.warn(n)}}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),Ja}async function YT(t){try{const n=(await pp()).transaction(ui),r=await n.objectStore(ui).get(gp(t));return await n.done,r}catch(e){if(e instanceof _n)fn.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function Ah(t,e){try{const r=(await pp()).transaction(ui,"readwrite");await r.objectStore(ui).put(e,gp(t)),await r.done}catch(n){if(n instanceof _n)fn.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(r.message)}}}function gp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZT=1024,ev=30;class tv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>ev){const a=sv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bh(),{heartbeatsToSend:r,unsentEntries:s}=nv(this._heartbeatsCache.heartbeats),i=bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return fn.warn(n),""}}}function bh(){return new Date().toISOString().substring(0,10)}function nv(t,e=ZT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Sh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qE()?HE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await YT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ah(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ah(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sh(t){return bo(JSON.stringify({version:2,heartbeats:t})).length}function sv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function iv(t){es(new _r("platform-logger",e=>new _T(e),"PRIVATE")),es(new _r("heartbeat",e=>new tv(e),"PRIVATE")),Bn(vc,Ih,t),Bn(vc,Ih,"esm2020"),Bn("fire-js","")}iv("");var ov="firebase",av="12.6.0";/**
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
 */Bn(ov,av,"app");var Rh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn,mp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function _(){}_.prototype=m.prototype,v.F=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.D=function(w,I,S){for(var y=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)y[Le-2]=arguments[Le];return m.prototype[I].apply(w,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,_){_||(_=0);const w=Array(16);if(typeof m=="string")for(var I=0;I<16;++I)w[I]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(I=0;I<16;++I)w[I]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],I=v.g[2];let S=v.g[3],y;y=m+(S^_&(I^S))+w[0]+3614090360&4294967295,m=_+(y<<7&4294967295|y>>>25),y=S+(I^m&(_^I))+w[1]+3905402710&4294967295,S=m+(y<<12&4294967295|y>>>20),y=I+(_^S&(m^_))+w[2]+606105819&4294967295,I=S+(y<<17&4294967295|y>>>15),y=_+(m^I&(S^m))+w[3]+3250441966&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(S^_&(I^S))+w[4]+4118548399&4294967295,m=_+(y<<7&4294967295|y>>>25),y=S+(I^m&(_^I))+w[5]+1200080426&4294967295,S=m+(y<<12&4294967295|y>>>20),y=I+(_^S&(m^_))+w[6]+2821735955&4294967295,I=S+(y<<17&4294967295|y>>>15),y=_+(m^I&(S^m))+w[7]+4249261313&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(S^_&(I^S))+w[8]+1770035416&4294967295,m=_+(y<<7&4294967295|y>>>25),y=S+(I^m&(_^I))+w[9]+2336552879&4294967295,S=m+(y<<12&4294967295|y>>>20),y=I+(_^S&(m^_))+w[10]+4294925233&4294967295,I=S+(y<<17&4294967295|y>>>15),y=_+(m^I&(S^m))+w[11]+2304563134&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(S^_&(I^S))+w[12]+1804603682&4294967295,m=_+(y<<7&4294967295|y>>>25),y=S+(I^m&(_^I))+w[13]+4254626195&4294967295,S=m+(y<<12&4294967295|y>>>20),y=I+(_^S&(m^_))+w[14]+2792965006&4294967295,I=S+(y<<17&4294967295|y>>>15),y=_+(m^I&(S^m))+w[15]+1236535329&4294967295,_=I+(y<<22&4294967295|y>>>10),y=m+(I^S&(_^I))+w[1]+4129170786&4294967295,m=_+(y<<5&4294967295|y>>>27),y=S+(_^I&(m^_))+w[6]+3225465664&4294967295,S=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(S^m))+w[11]+643717713&4294967295,I=S+(y<<14&4294967295|y>>>18),y=_+(S^m&(I^S))+w[0]+3921069994&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^S&(_^I))+w[5]+3593408605&4294967295,m=_+(y<<5&4294967295|y>>>27),y=S+(_^I&(m^_))+w[10]+38016083&4294967295,S=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(S^m))+w[15]+3634488961&4294967295,I=S+(y<<14&4294967295|y>>>18),y=_+(S^m&(I^S))+w[4]+3889429448&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^S&(_^I))+w[9]+568446438&4294967295,m=_+(y<<5&4294967295|y>>>27),y=S+(_^I&(m^_))+w[14]+3275163606&4294967295,S=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(S^m))+w[3]+4107603335&4294967295,I=S+(y<<14&4294967295|y>>>18),y=_+(S^m&(I^S))+w[8]+1163531501&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(I^S&(_^I))+w[13]+2850285829&4294967295,m=_+(y<<5&4294967295|y>>>27),y=S+(_^I&(m^_))+w[2]+4243563512&4294967295,S=m+(y<<9&4294967295|y>>>23),y=I+(m^_&(S^m))+w[7]+1735328473&4294967295,I=S+(y<<14&4294967295|y>>>18),y=_+(S^m&(I^S))+w[12]+2368359562&4294967295,_=I+(y<<20&4294967295|y>>>12),y=m+(_^I^S)+w[5]+4294588738&4294967295,m=_+(y<<4&4294967295|y>>>28),y=S+(m^_^I)+w[8]+2272392833&4294967295,S=m+(y<<11&4294967295|y>>>21),y=I+(S^m^_)+w[11]+1839030562&4294967295,I=S+(y<<16&4294967295|y>>>16),y=_+(I^S^m)+w[14]+4259657740&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^S)+w[1]+2763975236&4294967295,m=_+(y<<4&4294967295|y>>>28),y=S+(m^_^I)+w[4]+1272893353&4294967295,S=m+(y<<11&4294967295|y>>>21),y=I+(S^m^_)+w[7]+4139469664&4294967295,I=S+(y<<16&4294967295|y>>>16),y=_+(I^S^m)+w[10]+3200236656&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^S)+w[13]+681279174&4294967295,m=_+(y<<4&4294967295|y>>>28),y=S+(m^_^I)+w[0]+3936430074&4294967295,S=m+(y<<11&4294967295|y>>>21),y=I+(S^m^_)+w[3]+3572445317&4294967295,I=S+(y<<16&4294967295|y>>>16),y=_+(I^S^m)+w[6]+76029189&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(_^I^S)+w[9]+3654602809&4294967295,m=_+(y<<4&4294967295|y>>>28),y=S+(m^_^I)+w[12]+3873151461&4294967295,S=m+(y<<11&4294967295|y>>>21),y=I+(S^m^_)+w[15]+530742520&4294967295,I=S+(y<<16&4294967295|y>>>16),y=_+(I^S^m)+w[2]+3299628645&4294967295,_=I+(y<<23&4294967295|y>>>9),y=m+(I^(_|~S))+w[0]+4096336452&4294967295,m=_+(y<<6&4294967295|y>>>26),y=S+(_^(m|~I))+w[7]+1126891415&4294967295,S=m+(y<<10&4294967295|y>>>22),y=I+(m^(S|~_))+w[14]+2878612391&4294967295,I=S+(y<<15&4294967295|y>>>17),y=_+(S^(I|~m))+w[5]+4237533241&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~S))+w[12]+1700485571&4294967295,m=_+(y<<6&4294967295|y>>>26),y=S+(_^(m|~I))+w[3]+2399980690&4294967295,S=m+(y<<10&4294967295|y>>>22),y=I+(m^(S|~_))+w[10]+4293915773&4294967295,I=S+(y<<15&4294967295|y>>>17),y=_+(S^(I|~m))+w[1]+2240044497&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~S))+w[8]+1873313359&4294967295,m=_+(y<<6&4294967295|y>>>26),y=S+(_^(m|~I))+w[15]+4264355552&4294967295,S=m+(y<<10&4294967295|y>>>22),y=I+(m^(S|~_))+w[6]+2734768916&4294967295,I=S+(y<<15&4294967295|y>>>17),y=_+(S^(I|~m))+w[13]+1309151649&4294967295,_=I+(y<<21&4294967295|y>>>11),y=m+(I^(_|~S))+w[4]+4149444226&4294967295,m=_+(y<<6&4294967295|y>>>26),y=S+(_^(m|~I))+w[11]+3174756917&4294967295,S=m+(y<<10&4294967295|y>>>22),y=I+(m^(S|~_))+w[2]+718787259&4294967295,I=S+(y<<15&4294967295|y>>>17),y=_+(S^(I|~m))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+S&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const _=m-this.blockSize,w=this.C;let I=this.h,S=0;for(;S<m;){if(I==0)for(;S<=_;)s(this,v,S),S+=this.blockSize;if(typeof v=="string"){for(;S<m;)if(w[I++]=v.charCodeAt(S++),I==this.blockSize){s(this,w),I=0;break}}else for(;S<m;)if(w[I++]=v[S++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var _=v.length-8;_<v.length;++_)v[_]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)v[m++]=this.g[_]>>>w&255;return v};function i(v,m){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function a(v,m){this.h=m;const _=[];let w=!0;for(let I=v.length-1;I>=0;I--){const S=v[I]|0;w&&S==m||(_[I]=S,w=!1)}this.g=_}var c={};function l(v){return-128<=v&&v<128?i(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function h(v){if(isNaN(v)||!isFinite(v))return g;if(v<0)return B(h(-v));const m=[];let _=1;for(let w=0;v>=_;w++)m[w]=v/_|0,_*=4294967296;return new a(m,0)}function d(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return B(d(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(m,8));let w=g;for(let S=0;S<v.length;S+=8){var I=Math.min(8,v.length-S);const y=parseInt(v.substring(S,S+I),m);I<8?(I=h(Math.pow(m,I)),w=w.j(I).add(h(y))):(w=w.j(_),w=w.add(h(y)))}return w}var g=l(0),E=l(1),b=l(16777216);t=a.prototype,t.m=function(){if(L(this))return-B(this).m();let v=0,m=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);v+=(w>=0?w:4294967296+w)*m,m*=4294967296}return v},t.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(D(this))return"0";if(L(this))return"-"+B(this).toString(v);const m=h(Math.pow(v,6));var _=this;let w="";for(;;){const I=z(_,m).g;_=$(_,I.j(m));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(v);if(_=I,D(_))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},t.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function D(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function L(v){return v.h==-1}t.l=function(v){return v=$(this,v),L(v)?-1:D(v)?0:1};function B(v){const m=v.g.length,_=[];for(let w=0;w<m;w++)_[w]=~v.g[w];return new a(_,~v.h).add(E)}t.abs=function(){return L(this)?B(this):this},t.add=function(v){const m=Math.max(this.g.length,v.g.length),_=[];let w=0;for(let I=0;I<=m;I++){let S=w+(this.i(I)&65535)+(v.i(I)&65535),y=(S>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);w=y>>>16,S&=65535,y&=65535,_[I]=y<<16|S}return new a(_,_[_.length-1]&-2147483648?-1:0)};function $(v,m){return v.add(B(m))}t.j=function(v){if(D(this)||D(v))return g;if(L(this))return L(v)?B(this).j(B(v)):B(B(this).j(v));if(L(v))return B(this.j(B(v)));if(this.l(b)<0&&v.l(b)<0)return h(this.m()*v.m());const m=this.g.length+v.g.length,_=[];for(var w=0;w<2*m;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<v.g.length;I++){const S=this.i(w)>>>16,y=this.i(w)&65535,Le=v.i(I)>>>16,At=v.i(I)&65535;_[2*w+2*I]+=y*At,H(_,2*w+2*I),_[2*w+2*I+1]+=S*At,H(_,2*w+2*I+1),_[2*w+2*I+1]+=y*Le,H(_,2*w+2*I+1),_[2*w+2*I+2]+=S*Le,H(_,2*w+2*I+2)}for(v=0;v<m;v++)_[v]=_[2*v+1]<<16|_[2*v];for(v=m;v<2*m;v++)_[v]=0;return new a(_,0)};function H(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function j(v,m){this.g=v,this.h=m}function z(v,m){if(D(m))throw Error("division by zero");if(D(v))return new j(g,g);if(L(v))return m=z(B(v),m),new j(B(m.g),B(m.h));if(L(m))return m=z(v,B(m)),new j(B(m.g),m.h);if(v.g.length>30){if(L(v)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var _=E,w=m;w.l(v)<=0;)_=te(_),w=te(w);var I=me(_,1),S=me(w,1);for(w=me(w,2),_=me(_,2);!D(w);){var y=S.add(w);y.l(v)<=0&&(I=I.add(_),S=y),w=me(w,1),_=me(_,1)}return m=$(v,I.j(m)),new j(I,m)}for(I=g;v.l(m)>=0;){for(_=Math.max(1,Math.floor(v.m()/m.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=h(_),y=S.j(m);L(y)||y.l(v)>0;)_-=w,S=h(_),y=S.j(m);D(S)&&(S=E),I=I.add(S),v=$(v,y)}return new j(I,v)}t.B=function(v){return z(this,v).h},t.and=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let w=0;w<m;w++)_[w]=this.i(w)&v.i(w);return new a(_,this.h&v.h)},t.or=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let w=0;w<m;w++)_[w]=this.i(w)|v.i(w);return new a(_,this.h|v.h)},t.xor=function(v){const m=Math.max(this.g.length,v.g.length),_=[];for(let w=0;w<m;w++)_[w]=this.i(w)^v.i(w);return new a(_,this.h^v.h)};function te(v){const m=v.g.length+1,_=[];for(let w=0;w<m;w++)_[w]=v.i(w)<<1|v.i(w-1)>>>31;return new a(_,v.h)}function me(v,m){const _=m>>5;m%=32;const w=v.g.length-_,I=[];for(let S=0;S<w;S++)I[S]=m>0?v.i(S+_)>>>m|v.i(S+_+1)<<32-m:v.i(S+_);return new a(I,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,mp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,jn=a}).apply(typeof Rh<"u"?Rh:typeof self<"u"?self:typeof window<"u"?window:{});var Ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _p,js,yp,so,Ac,Ep,Tp,vp;(function(){var t,e=Object.defineProperty;function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ki=="object"&&Ki];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(u){var f=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&f.push([p,u[p]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function l(o,u,f){return o.call.apply(o.bind,arguments)}function h(o,u,f){return h=l,h.apply(null,arguments)}function d(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,u){function f(){}f.prototype=u.prototype,o.Z=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Ob=function(p,R,C){for(var q=Array(arguments.length-2),ae=2;ae<arguments.length;ae++)q[ae-2]=arguments[ae];return u.prototype[R].apply(p,q)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function b(o){const u=o.length;if(u>0){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function D(o,u){for(let p=1;p<arguments.length;p++){const R=arguments[p];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=o.length||0;const C=R.length||0;o.length=f+C;for(let q=0;q<C;q++)o[f+q]=R[q]}else o.push(R)}}class L{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){a.setTimeout(()=>{throw o},0)}function $(){var o=v;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class H{constructor(){this.h=this.g=null}add(u,f){const p=j.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var j=new L(()=>new z,o=>o.reset());class z{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let te,me=!1,v=new H,m=()=>{const o=Promise.resolve(void 0);te=()=>{o.then(_)}};function _(){for(var o;o=$();){try{o.h.call(o.g)}catch(f){B(f)}var u=j;u.j(o),u.h<100&&(u.h++,o.next=u.g,u.g=o)}me=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};a.addEventListener("test",f,u),a.removeEventListener("test",f,u)}catch{}return o})();function y(o){return/^[\s\xa0]*$/.test(o)}function Le(o,u){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,u)}g(Le,I),Le.prototype.init=function(o,u){const f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget,u||(f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Le.Z.h.call(this)},Le.prototype.h=function(){Le.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var At="closure_listenable_"+(Math.random()*1e6|0),De=0;function ce(o,u,f,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++De,this.da=this.fa=!1}function ye(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function bt(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function Rr(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function Mt(o){const u={};for(const f in o)u[f]=o[f];return u}const _t="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ys(o,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let C=0;C<_t.length;C++)f=_t[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function Cr(o){this.src=o,this.g={},this.h=0}Cr.prototype.add=function(o,u,f,p,R){const C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);const q=Zt(o,u,p,R);return q>-1?(u=o[q],f||(u.fa=!1)):(u=new ce(u,this.src,C,!!p,R),u.fa=f,o.push(u)),u};function Es(o,u){const f=u.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,u,void 0),C;(C=R>=0)&&Array.prototype.splice.call(p,R,1),C&&(ye(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function Zt(o,u,f,p){for(let R=0;R<o.length;++R){const C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==p)return R}return-1}var yn="closure_lm_"+(Math.random()*1e6|0),Zn={};function Ts(o,u,f,p,R){if(Array.isArray(u)){for(let C=0;C<u.length;C++)Ts(o,u[C],f,p,R);return null}return f=W(f),o&&o[At]?o.J(u,f,c(p)?!!p.capture:!1,R):er(o,u,f,!1,p,R)}function er(o,u,f,p,R,C){if(!u)throw Error("Invalid event type");const q=c(R)?!!R.capture:!!R;let ae=k(o);if(ae||(o[yn]=ae=new Cr(o)),f=ae.add(u,f,p,q,C),f.proxy)return f;if(p=Ql(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)S||(R=q),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(P(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Ql(){function o(f){return u.call(o.src,o.listener,f)}const u=U;return o}function T(o,u,f,p,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)T(o,u[C],f,p,R);else p=c(p)?!!p.capture:!!p,f=W(f),o&&o[At]?(o=o.i,C=String(u).toString(),C in o.g&&(u=o.g[C],f=Zt(u,f,p,R),f>-1&&(ye(u[f]),Array.prototype.splice.call(u,f,1),u.length==0&&(delete o.g[C],o.h--)))):o&&(o=k(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Zt(u,f,p,R)),(f=o>-1?u[o]:null)&&A(f))}function A(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[At])Es(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(P(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=k(u))?(Es(f,o),f.h==0&&(f.src=null,u[yn]=null)):ye(o)}}}function P(o){return o in Zn?Zn[o]:Zn[o]="on"+o}function U(o,u){if(o.da)o=!0;else{u=new Le(u,this);const f=o.listener,p=o.ha||o.src;o.fa&&A(o),o=f.call(p,u)}return o}function k(o){return o=o[yn],o instanceof Cr?o:null}var O="__closure_events_fn_"+(Math.random()*1e9>>>0);function W(o){return typeof o=="function"?o:(o[O]||(o[O]=function(u){return o.handleEvent(u)}),o[O])}function F(){w.call(this),this.i=new Cr(this),this.M=this,this.G=null}g(F,w),F.prototype[At]=!0,F.prototype.removeEventListener=function(o,u,f,p){T(this,o,u,f,p)};function x(o,u){var f,p=o.G;if(p)for(f=[];p;p=p.G)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new I(u,o);else if(u instanceof I)u.target=u.target||o;else{var R=u;u=new I(p,o),ys(u,R)}R=!0;let C,q;if(f)for(q=f.length-1;q>=0;q--)C=u.g=f[q],R=M(C,p,!0,u)&&R;if(C=u.g=o,R=M(C,p,!0,u)&&R,R=M(C,p,!1,u)&&R,f)for(q=0;q<f.length;q++)C=u.g=f[q],R=M(C,p,!1,u)&&R}F.prototype.N=function(){if(F.Z.N.call(this),this.i){var o=this.i;for(const u in o.g){const f=o.g[u];for(let p=0;p<f.length;p++)ye(f[p]);delete o.g[u],o.h--}}this.G=null},F.prototype.J=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},F.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function M(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();let R=!0;for(let C=0;C<u.length;++C){const q=u[C];if(q&&!q.da&&q.capture==f){const ae=q.listener,je=q.ha||q.src;q.fa&&Es(o.i,q),R=ae.call(je,p)!==!1&&R}}return R&&!p.defaultPrevented}function Y(o,u){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=h(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:a.setTimeout(o,u||0)}function K(o){o.g=Y(()=>{o.g=null,o.i&&(o.i=!1,K(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class J extends w{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:K(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){w.call(this),this.h=o,this.g={}}g(Z,w);var le=[];function Ie(o){bt(o.g,function(u,f){this.g.hasOwnProperty(f)&&A(u)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),Ie(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ge=a.JSON.stringify,et=a.JSON.parse,tt=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function yt(){}function Et(){}var Pt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pr(){I.call(this,"d")}g(Pr,I);function Qe(){I.call(this,"c")}g(Qe,I);var ze={},vs=null;function tr(){return vs=vs||new F}ze.Ia="serverreachability";function Jl(o){I.call(this,ze.Ia,o)}g(Jl,I);function Is(o){const u=tr();x(u,new Jl(u))}ze.STAT_EVENT="statevent";function Xl(o,u){I.call(this,ze.STAT_EVENT,o),this.stat=u}g(Xl,I);function ut(o){const u=tr();x(u,new Xl(u,o))}ze.Ja="timingevent";function Yl(o,u){I.call(this,ze.Ja,o),this.size=u}g(Yl,I);function ws(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.ua=function(){this.g=!1};function Sm(o,u,f,p,R,C){o.info(function(){if(o.g)if(C){var q="",ae=C.split("&");for(let we=0;we<ae.length;we++){var je=ae[we].split("=");if(je.length>1){const We=je[0];je=je[1];const Ft=We.split("_");q=Ft.length>=2&&Ft[1]=="type"?q+(We+"="+je+"&"):q+(We+"=redacted&")}}}else q=null;else q=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+q})}function Rm(o,u,f,p,R,C,q){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+q})}function Vr(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Pm(o,f)+(p?" "+p:"")})}function Cm(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function Pm(o,u){if(!o.g)return u;if(!u)return null;try{const C=JSON.parse(u);if(C){for(o=0;o<C.length;o++)if(Array.isArray(C[o])){var f=C[o];if(!(f.length<2)){var p=f[1];if(Array.isArray(p)&&!(p.length<1)){var R=p[0];if(R!="noop"&&R!="stop"&&R!="close")for(let q=1;q<p.length;q++)p[q]=""}}}}return ge(C)}catch{return u}}var Ni={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Zl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},eu;function va(){}g(va,yt),va.prototype.g=function(){return new XMLHttpRequest},eu=new va;function bs(o){return encodeURIComponent(String(o))}function Vm(o){var u=1;o=o.split(":");const f=[];for(;u>0&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function En(o,u,f,p){this.j=o,this.i=u,this.l=f,this.S=p||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var nu={},Ia={};function wa(o,u,f){o.M=1,o.A=xi(Lt(u)),o.u=f,o.R=!0,ru(o,null)}function ru(o,u){o.F=Date.now(),Oi(o),o.B=Lt(o.A);var f=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),mu(f.i,"t",p),o.C=0,f=o.j.L,o.h=new tu,o.g=Ou(o.j,f?u:null,!o.u),o.P>0&&(o.O=new J(h(o.Y,o,o.g),o.P)),u=o.V,f=o.g,p=o.ba;var R="readystatechange";Array.isArray(R)||(R&&(le[0]=R.toString()),R=le);for(let C=0;C<R.length;C++){const q=Ts(f,R[C],p||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.J?Mt(o.J):{},o.u?(o.v||(o.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,u)):(o.v="GET",o.g.ea(o.B,o.v,null,u)),Is(),Sm(o.i,o.v,o.B,o.l,o.S,o.u)}En.prototype.ba=function(o){o=o.target;const u=this.O;u&&In(o)==3?u.j():this.Y(o)},En.prototype.Y=function(o){try{if(o==this.g)e:{const ae=In(this.g),je=this.g.ya(),we=this.g.ca();if(!(ae<3)&&(ae!=3||this.g&&(this.h.h||this.g.la()||wu(this.g)))){this.K||ae!=4||je==7||(je==8||we<=0?Is(3):Is(2)),Aa(this);var u=this.g.ca();this.X=u;var f=Dm(this);if(this.o=u==200,Rm(this.i,this.v,this.B,this.l,this.S,ae,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,R=this.g;if((p=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var C=p;break t}}C=null}if(o=C)Vr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ba(this,o);else{this.o=!1,this.m=3,ut(12),nr(this),Ss(this);break e}}if(this.R){o=!0;let We;for(;!this.K&&this.C<f.length;)if(We=km(this,f),We==Ia){ae==4&&(this.m=4,ut(14),o=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(We==nu){this.m=4,ut(15),Vr(this.i,this.l,f,"[Invalid Chunk]"),o=!1;break}else Vr(this.i,this.l,We,null),ba(this,We);if(su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ae!=4||f.length!=0||this.h.h||(this.m=1,ut(16),o=!1),this.o=this.o&&o,!o)Vr(this.i,this.l,f,"[Invalid Chunked Response]"),nr(this),Ss(this);else if(f.length>0&&!this.W){this.W=!0;var q=this.j;q.g==this&&q.aa&&!q.P&&(q.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Na(q),q.P=!0,ut(11))}}else Vr(this.i,this.l,f,null),ba(this,f);ae==4&&nr(this),this.o&&!this.K&&(ae==4?Vu(this.j,this):(this.o=!1,Oi(this)))}else Wm(this.g),u==400&&f.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),nr(this),Ss(this)}}}catch{}finally{}};function Dm(o){if(!su(o))return o.g.la();const u=wu(o.g);if(u==="")return"";let f="";const p=u.length,R=In(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return nr(o),Ss(o),"";o.h.i=new a.TextDecoder}for(let C=0;C<p;C++)o.h.h=!0,f+=o.h.i.decode(u[C],{stream:!(R&&C==p-1)});return u.length=0,o.h.g+=f,o.C=0,o.h.g}function su(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function km(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?Ia:(f=Number(u.substring(f,p)),isNaN(f)?nu:(p+=1,p+f>u.length?Ia:(u=u.slice(p,p+f),o.C=p+f,u)))}En.prototype.cancel=function(){this.K=!0,nr(this)};function Oi(o){o.T=Date.now()+o.H,iu(o,o.H)}function iu(o,u){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ws(h(o.aa,o),u)}function Aa(o){o.D&&(a.clearTimeout(o.D),o.D=null)}En.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Cm(this.i,this.B),this.M!=2&&(Is(),ut(17)),nr(this),this.m=2,Ss(this)):iu(this,this.T-o)};function Ss(o){o.j.I==0||o.K||Vu(o.j,o)}function nr(o){Aa(o);var u=o.O;u&&typeof u.dispose=="function"&&u.dispose(),o.O=null,Ie(o.V),o.g&&(u=o.g,o.g=null,u.abort(),u.dispose())}function ba(o,u){try{var f=o.j;if(f.I!=0&&(f.g==o||Sa(f.h,o))){if(!o.L&&Sa(f.h,o)&&f.I==3){try{var p=f.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<o.F)Bi(f),Fi(f);else break e;ka(f),ut(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=ws(h(f.Va,f),6e3));cu(f.h)<=1&&f.ta&&(f.ta=void 0)}else sr(f,11)}else if((o.L||f.g==o)&&Bi(f),!y(u))for(R=f.Ba.g.parse(u),u=0;u<R.length;u++){let we=R[u];const We=we[0];if(!(We<=f.K))if(f.K=We,we=we[1],f.I==2)if(we[0]=="c"){f.M=we[1],f.ba=we[2];const Ft=we[3];Ft!=null&&(f.ka=Ft,f.j.info("VER="+f.ka));const ir=we[4];ir!=null&&(f.za=ir,f.j.info("SVER="+f.za));const wn=we[5];wn!=null&&typeof wn=="number"&&wn>0&&(p=1.5*wn,f.O=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const An=o.g;if(An){const $i=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var C=p.h;C.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Ra(C,C.h),C.h=null))}if(p.G){const Oa=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Oa&&(p.wa=Oa,Ce(p.J,p.G,Oa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-o.F,f.j.info("Handshake RTT: "+f.T+"ms")),p=f;var q=o;if(p.na=Nu(p,p.L?p.ba:null,p.W),q.L){lu(p.h,q);var ae=q,je=p.O;je&&(ae.H=je),ae.D&&(Aa(ae),Oi(ae)),p.g=q}else Cu(p);f.i.length>0&&Ui(f)}else we[0]!="stop"&&we[0]!="close"||sr(f,7);else f.I==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?sr(f,7):Da(f):we[0]!="noop"&&f.l&&f.l.qa(we),f.A=0)}}Is(4)}catch{}}var Nm=class{constructor(o,u){this.g=o,this.map=u}};function ou(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function au(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function cu(o){return o.h?1:o.g?o.g.size:0}function Sa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ra(o,u){o.g?o.g.add(u):o.h=u}function lu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ou.prototype.cancel=function(){if(this.i=uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function uu(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.G);return u}return b(o.i)}var hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Om(o,u){if(o){o=o.split("&");for(let f=0;f<o.length;f++){const p=o[f].indexOf("=");let R,C=null;p>=0?(R=o[f].substring(0,p),C=o[f].substring(p+1)):R=o[f],u(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Tn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;o instanceof Tn?(this.l=o.l,Rs(this,o.j),this.o=o.o,this.g=o.g,Cs(this,o.u),this.h=o.h,Ca(this,_u(o.i)),this.m=o.m):o&&(u=String(o).match(hu))?(this.l=!1,Rs(this,u[1]||"",!0),this.o=Ps(u[2]||""),this.g=Ps(u[3]||"",!0),Cs(this,u[4]),this.h=Ps(u[5]||"",!0),Ca(this,u[6]||"",!0),this.m=Ps(u[7]||"")):(this.l=!1,this.i=new Ds(null,this.l))}Tn.prototype.toString=function(){const o=[];var u=this.j;u&&o.push(Vs(u,fu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Vs(u,fu,!0),"@"),o.push(bs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&o.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Vs(f,f.charAt(0)=="/"?Lm:Mm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Vs(f,Um)),o.join("")},Tn.prototype.resolve=function(o){const u=Lt(this);let f=!!o.j;f?Rs(u,o.j):f=!!o.o,f?u.o=o.o:f=!!o.g,f?u.g=o.g:f=o.u!=null;var p=o.h;if(f)Cs(u,o.u);else if(f=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var R=u.h.lastIndexOf("/");R!=-1&&(p=u.h.slice(0,R+1)+p)}if(R=p,R==".."||R==".")p="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){p=R.lastIndexOf("/",0)==0,R=R.split("/");const C=[];for(let q=0;q<R.length;){const ae=R[q++];ae=="."?p&&q==R.length&&C.push(""):ae==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),p&&q==R.length&&C.push("")):(C.push(ae),p=!0)}p=C.join("/")}else p=R}return f?u.h=p:f=o.i.toString()!=="",f?Ca(u,_u(o.i)):f=!!o.m,f&&(u.m=o.m),u};function Lt(o){return new Tn(o)}function Rs(o,u,f){o.j=f?Ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Cs(o,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);o.u=u}else o.u=null}function Ca(o,u,f){u instanceof Ds?(o.i=u,Bm(o.i,o.l)):(f||(u=Vs(u,Fm)),o.i=new Ds(u,o.l))}function Ce(o,u,f){o.i.set(u,f)}function xi(o){return Ce(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Vs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,xm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var fu=/[#\/\?@]/g,Mm=/[#\?:]/g,Lm=/[#\?]/g,Fm=/[#\?@]/g,Um=/#/g;function Ds(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function rr(o){o.g||(o.g=new Map,o.h=0,o.i&&Om(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ds.prototype,t.add=function(o,u){rr(this),this.i=null,o=Dr(this,o);let f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function du(o,u){rr(o),u=Dr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function pu(o,u){return rr(o),u=Dr(o,u),o.g.has(u)}t.forEach=function(o,u){rr(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(u,R,p,this)},this)},this)};function gu(o,u){rr(o);let f=[];if(typeof u=="string")pu(o,u)&&(f=f.concat(o.g.get(Dr(o,u))));else for(o=Array.from(o.g.values()),u=0;u<o.length;u++)f=f.concat(o[u]);return f}t.set=function(o,u){return rr(this),this.i=null,o=Dr(this,o),pu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=gu(this,o),o.length>0?String(o[0]):u):u};function mu(o,u,f){du(o,u),f.length>0&&(o.i=null,o.g.set(Dr(o,u),b(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var f=u[p];const R=bs(f);f=gu(this,f);for(let C=0;C<f.length;C++){let q=R;f[C]!==""&&(q+="="+bs(f[C])),o.push(q)}}return this.i=o.join("&")};function _u(o){const u=new Ds;return u.i=o.i,o.g&&(u.g=new Map(o.g),u.h=o.h),u}function Dr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Bm(o,u){u&&!o.j&&(rr(o),o.i=null,o.g.forEach(function(f,p){const R=p.toLowerCase();p!=R&&(du(this,p),mu(this,R,f))},o)),o.j=u}function jm(o,u){const f=new As;if(a.Image){const p=new Image;p.onload=d(vn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=d(vn,f,"TestLoadImage: error",!1,u,p),p.onabort=d(vn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=d(vn,f,"TestLoadImage: timeout",!1,u,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function $m(o,u){const f=new As,p=new AbortController,R=setTimeout(()=>{p.abort(),vn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?vn(f,"TestPingServer: ok",!0,u):vn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),vn(f,"TestPingServer: error",!1,u)})}function vn(o,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function qm(){this.g=new tt}function Pa(o){this.i=o.Sb||null,this.h=o.ab||!1}g(Pa,yt),Pa.prototype.g=function(){return new Mi(this.i,this.h)};function Mi(o,u){F.call(this),this.H=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Mi,F),t=Mi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=u,this.readyState=1,Ns(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(u.body=o),(this.H||a).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yu(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function yu(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}t.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ks(this):Ns(this),this.readyState==3&&yu(this)}},t.Oa=function(o){this.g&&(this.response=this.responseText=o,ks(this))},t.Na=function(o){this.g&&(this.response=o,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ns(o)}t.setRequestHeader=function(o,u){this.A.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ns(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Eu(o){let u="";return bt(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Va(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Eu(f),typeof o=="string"?f!=null&&bs(f):Ce(o,u,f))}function Ne(o){F.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ne,F);var Hm=/^https?$/i,zm=["POST","PUT"];t=Ne.prototype,t.Fa=function(o){this.H=o},t.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():eu.g(),this.g.onreadystatechange=E(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Tu(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(zm,u,void 0)>=0)||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of f)this.g.setRequestHeader(C,q);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(C){Tu(this,C)}};function Tu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.o=5,vu(o),Li(o)}function vu(o){o.A||(o.A=!0,x(o,"complete"),x(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,x(this,"complete"),x(this,"abort"),Li(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),Ne.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Iu(this):this.Xa())},t.Xa=function(){Iu(this)};function Iu(o){if(o.h&&typeof i<"u"){if(o.v&&In(o)==4)setTimeout(o.Ca.bind(o),0);else if(x(o,"readystatechange"),In(o)==4){o.h=!1;try{const C=o.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=C===0){let q=String(o.D).match(hu)[1]||null;!q&&a.self&&a.self.location&&(q=a.self.location.protocol.slice(0,-1)),p=!Hm.test(q?q.toLowerCase():"")}f=p}if(f)x(o,"complete"),x(o,"success");else{o.o=6;try{var R=In(o)>2?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.ca()+"]",vu(o)}}finally{Li(o)}}}}function Li(o,u){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const f=o.g;o.g=null,u||x(o,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function In(o){return o.g?o.g.readyState:0}t.ca=function(){try{return In(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),et(u)}};function wu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Wm(o){const u={};o=(o.g&&In(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var f=Vm(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}Rr(u,function(p){return p.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Au(o){this.za=0,this.i=[],this.j=new As,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Os("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Os("baseRetryDelayMs",5e3,o),this.Za=Os("retryDelaySeedMs",1e4,o),this.Ta=Os("forwardChannelMaxRetries",2,o),this.va=Os("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new ou(o&&o.concurrentRequestLimit),this.Ba=new qm,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Au.prototype,t.ka=8,t.I=1,t.connect=function(o,u,f,p){ut(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.J=Nu(this,null,this.W),Ui(this)};function Da(o){if(bu(o),o.I==3){var u=o.V++,f=Lt(o.J);if(Ce(f,"SID",o.M),Ce(f,"RID",u),Ce(f,"TYPE","terminate"),xs(o,f),u=new En(o,o.j,u),u.M=2,u.A=xi(Lt(f)),f=!1,a.navigator&&a.navigator.sendBeacon)try{f=a.navigator.sendBeacon(u.A.toString(),"")}catch{}!f&&a.Image&&(new Image().src=u.A,f=!0),f||(u.g=Ou(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Oi(u)}ku(o)}function Fi(o){o.g&&(Na(o),o.g.cancel(),o.g=null)}function bu(o){Fi(o),o.v&&(a.clearTimeout(o.v),o.v=null),Bi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function Ui(o){if(!au(o.h)&&!o.m){o.m=!0;var u=o.Ea;te||m(),me||(te(),me=!0),v.add(u,o),o.D=0}}function Km(o,u){return cu(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=u.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ws(h(o.Ea,o,u),Du(o,o.D)),o.D++,!0)}t.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const R=new En(this,this.j,o);let C=this.o;if(this.U&&(C?(C=Mt(C),ys(C,this.U)):C=this.U),this.u!==null||this.R||(R.J=C,C=null),this.S)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Ru(this,R,u),f=Lt(this.J),Ce(f,"RID",o),Ce(f,"CVER",22),this.G&&Ce(f,"X-HTTP-Session-Id",this.G),xs(this,f),C&&(this.R?u="headers="+bs(Eu(C))+"&"+u:this.u&&Va(f,this.u,C)),Ra(this.h,R),this.Ra&&Ce(f,"TYPE","init"),this.S?(Ce(f,"$req",u),Ce(f,"SID","null"),R.U=!0,wa(R,f,null)):wa(R,f,u),this.I=2}}else this.I==3&&(o?Su(this,o):this.i.length==0||au(this.h)||Su(this))};function Su(o,u){var f;u?f=u.l:f=o.V++;const p=Lt(o.J);Ce(p,"SID",o.M),Ce(p,"RID",f),Ce(p,"AID",o.K),xs(o,p),o.u&&o.o&&Va(p,o.u,o.o),f=new En(o,o.j,f,o.D+1),o.u===null&&(f.J=o.o),u&&(o.i=u.G.concat(o.i)),u=Ru(o,f,1e3),f.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Ra(o.h,f),wa(f,p,u)}function xs(o,u){o.H&&bt(o.H,function(f,p){Ce(u,p,f)}),o.l&&bt({},function(f,p){Ce(u,p,f)})}function Ru(o,u,f){f=Math.min(o.i.length,f);const p=o.l?h(o.l.Ka,o.l,o):null;e:{var R=o.i;let ae=-1;for(;;){const je=["count="+f];ae==-1?f>0?(ae=R[0].g,je.push("ofs="+ae)):ae=0:je.push("ofs="+ae);let we=!0;for(let We=0;We<f;We++){var C=R[We].g;const Ft=R[We].map;if(C-=ae,C<0)ae=Math.max(0,R[We].g-100),we=!1;else try{C="req"+C+"_"||"";try{var q=Ft instanceof Map?Ft:Object.entries(Ft);for(const[ir,wn]of q){let An=wn;c(wn)&&(An=ge(wn)),je.push(C+ir+"="+encodeURIComponent(An))}}catch(ir){throw je.push(C+"type="+encodeURIComponent("_badmap")),ir}}catch{p&&p(Ft)}}if(we){q=je.join("&");break e}}q=void 0}return o=o.i.splice(0,f),u.G=o,q}function Cu(o){if(!o.g&&!o.v){o.Y=1;var u=o.Da;te||m(),me||(te(),me=!0),v.add(u,o),o.A=0}}function ka(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ws(h(o.Da,o),Du(o,o.A)),o.A++,!0)}t.Da=function(){if(this.v=null,Pu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ws(h(this.Wa,this),o)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),Fi(this),Pu(this))};function Na(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function Pu(o){o.g=new En(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var u=Lt(o.na);Ce(u,"RID","rpc"),Ce(u,"SID",o.M),Ce(u,"AID",o.K),Ce(u,"CI",o.F?"0":"1"),!o.F&&o.ia&&Ce(u,"TO",o.ia),Ce(u,"TYPE","xmlhttp"),xs(o,u),o.u&&o.o&&Va(u,o.u,o.o),o.O&&(o.g.H=o.O);var f=o.g;o=o.ba,f.M=1,f.A=xi(Lt(u)),f.u=null,f.R=!0,ru(f,o)}t.Va=function(){this.C!=null&&(this.C=null,Fi(this),ka(this),ut(19))};function Bi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function Vu(o,u){var f=null;if(o.g==u){Bi(o),Na(o),o.g=null;var p=2}else if(Sa(o.h,u))f=u.G,lu(o.h,u),p=1;else return;if(o.I!=0){if(u.o)if(p==1){f=u.u?u.u.length:0,u=Date.now()-u.F;var R=o.D;p=tr(),x(p,new Yl(p,f)),Ui(o)}else Cu(o);else if(R=u.m,R==3||R==0&&u.X>0||!(p==1&&Km(o,u)||p==2&&ka(o)))switch(f&&f.length>0&&(u=o.h,u.i=u.i.concat(f)),R){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function Du(o,u){let f=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(f*=2),f*u}function sr(o,u){if(o.j.info("Error code "+u),u==2){var f=h(o.bb,o),p=o.Ua;const R=!p;p=new Tn(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Rs(p,"https"),xi(p),R?jm(p.toString(),f):$m(p.toString(),f)}else ut(2);o.I=0,o.l&&o.l.pa(u),ku(o),bu(o)}t.bb=function(o){o?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function ku(o){if(o.I=0,o.ja=[],o.l){const u=uu(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ja,u),D(o.ja,o.i),o.h.i.length=0,b(o.i),o.i.length=0),o.l.oa()}}function Nu(o,u,f){var p=f instanceof Tn?Lt(f):new Tn(f);if(p.g!="")u&&(p.g=u+"."+p.g),Cs(p,p.u);else{var R=a.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;const C=new Tn(null);p&&Rs(C,p),u&&(C.g=u),R&&Cs(C,R),f&&(C.h=f),p=C}return f=o.G,u=o.wa,f&&u&&Ce(p,f,u),Ce(p,"VER",o.ka),xs(o,p),p}function Ou(o,u,f){if(u&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Aa&&!o.ma?new Ne(new Pa({ab:f})):new Ne(o.ma),u.Fa(o.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xu(){}t=xu.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function ji(){}ji.prototype.g=function(o,u){return new Tt(o,u)};function Tt(o,u){F.call(this),this.g=new Au(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(o?o["X-WebChannel-Client-Profile"]=u.sa:o={"X-WebChannel-Client-Profile":u.sa}),this.g.U=o,(o=u&&u.Qb)&&!y(o)&&(this.g.u=o),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!y(u)&&(this.g.G=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}g(Tt,F),Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Da(this.g)},Tt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.v&&(f={},f.__data__=ge(o),o=f);u.i.push(new Nm(u.Ya++,o)),u.I==3&&Ui(u)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,Tt.Z.N.call(this)};function Mu(o){Pr.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}g(Mu,Pr);function Lu(){Qe.call(this),this.status=1}g(Lu,Qe);function kr(o){this.g=o}g(kr,xu),kr.prototype.ra=function(){x(this.g,"a")},kr.prototype.qa=function(o){x(this.g,new Mu(o))},kr.prototype.pa=function(o){x(this.g,new Lu)},kr.prototype.oa=function(){x(this.g,"b")},ji.prototype.createWebChannel=ji.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,vp=function(){return new ji},Tp=function(){return tr()},Ep=ze,Ac={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ni.NO_ERROR=0,Ni.TIMEOUT=8,Ni.HTTP_ERROR=6,so=Ni,Zl.COMPLETE="complete",yp=Zl,Et.EventType=Pt,Pt.OPEN="a",Pt.CLOSE="b",Pt.ERROR="c",Pt.MESSAGE="d",F.prototype.listen=F.prototype.J,js=Et,Ne.prototype.listenOnce=Ne.prototype.K,Ne.prototype.getLastError=Ne.prototype.Ha,Ne.prototype.getLastErrorCode=Ne.prototype.ya,Ne.prototype.getStatus=Ne.prototype.ca,Ne.prototype.getResponseJson=Ne.prototype.La,Ne.prototype.getResponseText=Ne.prototype.la,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Fa,_p=Ne}).apply(typeof Ki<"u"?Ki:typeof self<"u"?self:typeof window<"u"?window:{});const Ch="@firebase/firestore",Ph="4.9.2";/**
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
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
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
 */let ds="12.3.0";/**
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
 */const yr=new cl("@firebase/firestore");function Lr(){return yr.logLevel}function G(t,...e){if(yr.logLevel<=ue.DEBUG){const n=e.map(hl);yr.debug(`Firestore (${ds}): ${t}`,...n)}}function dn(t,...e){if(yr.logLevel<=ue.ERROR){const n=e.map(hl);yr.error(`Firestore (${ds}): ${t}`,...n)}}function ts(t,...e){if(yr.logLevel<=ue.WARN){const n=e.map(hl);yr.warn(`Firestore (${ds}): ${t}`,...n)}}function hl(t){if(typeof t=="string")return t;try{/**
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
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function ee(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Ip(t,r,n)}function Ip(t,e,n){let r=`FIRESTORE (${ds}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw dn(r),new Error(r)}function ve(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Ip(e,s,r)}function ie(t,e){return t}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends _n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class wp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(st.UNAUTHENTICATED)))}shutdown(){}}class lv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class uv{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}}),0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string",31837,{l:r}),new wp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string",2055,{h:e}),new st(e)}}class hv{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class fv{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new hv(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(st.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Vh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dv{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ve(this.o===void 0,3512);const r=i=>{i.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Vh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ve(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vh(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function pv(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class fl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=pv(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function bc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Xa(s)===Xa(i)?he(s,i):Xa(s)?1:-1}return he(t.length,e.length)}const gv=55296,mv=57343;function Xa(t){const e=t.charCodeAt(0);return e>=gv&&e<=mv}function ns(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Dh="__name__";class jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ee(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=jt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return he(e.length,n.length)}static compareSegments(e,n){const r=jt.isNumericId(e),s=jt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?jt.extractNumericId(e).compare(jt.extractNumericId(n)):bc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jn.fromString(e.substring(4,e.length-2))}}class Pe extends jt{construct(e,n,r){return new Pe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Pe(n)}static emptyPath(){return new Pe([])}}const _v=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends jt{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return _v.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dh}static keyField(){return new Ye([Dh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Pe.fromString(e))}static fromName(e){return new X(Pe.fromString(e).popFirst(5))}static empty(){return new X(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Pe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Pe(e.slice()))}}/**
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
 */function Ap(t,e,n){if(!n)throw new Q(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yv(t,e,n,r){if(e===!0&&r===!0)throw new Q(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kh(t){if(!X.isDocumentKey(t))throw new Q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nh(t){if(X.isDocumentKey(t))throw new Q(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bp(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function dl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee(12329,{type:typeof t})}function hi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dl(t);throw new Q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Ue(t,e){const n={typeString:t};return e&&(n.value=e),n}function bi(t,e){if(!bp(t))throw new Q(N.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(N.INVALID_ARGUMENT,n);return!0}/**
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
 */const Oh=-62135596800,xh=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*xh);return new Ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Oh)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xh}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bi(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Oh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Ue("string",Ve._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ve(0,0))}static max(){return new se(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fi=-1;function Ev(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ve(n+1,0):new Ve(n,r));return new Wn(s,X.empty(),e)}function Tv(t){return new Wn(t.readTime,t.key,fi)}class Wn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Wn(se.min(),X.empty(),fi)}static max(){return new Wn(se.max(),X.empty(),fi)}}function vv(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const Iv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function ps(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==Iv)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):V.reject(n)}static resolve(e){return new V(((n,r)=>{n(e)}))}static reject(e){return new V(((n,r)=>{r(e)}))}static waitFor(e){return new V(((n,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&n()}),(l=>r(l)))})),a=!0,i===s&&n()}))}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next((s=>s?V.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new V(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,n){return new V(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function Av(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ra{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ra.ce=-1;/**
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
 */const pl=-1;function sa(t){return t==null}function Ro(t){return t===0&&1/t==-1/0}function bv(t){return typeof t=="number"&&Number.isInteger(t)&&!Ro(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Sp="";function Sv(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mh(e)),e=Rv(t.get(n),e);return Mh(e)}function Rv(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Sp:n+="";break;default:n+=i}}return n}function Mh(t){return t+Sp+""}/**
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
 */function Lh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gi(this.root,e,this.comparator,!0)}}class Gi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class He{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fh(this.data.getIterator())}getIteratorFrom(e){return new Fh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Fh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new He(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Cp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cp("Invalid base64 string: "+i):i}})(e);return new Ze(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const Cv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(ve(!!t,39018),typeof t=="string"){let e=0;const n=Cv.exec(t);if(ve(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gn(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */const Pp="server_timestamp",Vp="__type__",Dp="__previous_value__",kp="__local_write_time__";function gl(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Vp])==null?void 0:r.stringValue)===Pp}function ia(t){const e=t.mapValue.fields[Dp];return gl(e)?ia(e):e}function di(t){const e=Kn(t.mapValue.fields[kp].timestampValue);return new Ve(e.seconds,e.nanos)}/**
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
 */class Pv{constructor(e,n,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Co="(default)";class pi{constructor(e,n){this.projectId=e,this.database=n||Co}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database===Co}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Np="__type__",Vv="__max__",Qi={mapValue:{}},Op="__vector__",Po="value";function Qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gl(t)?4:kv(t)?9007199254740991:Dv(t)?10:11:ee(28295,{value:t})}function Jt(t,e){if(t===e)return!0;const n=Qn(t);if(n!==Qn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Kn(s.timestampValue),c=Kn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Gn(s.bytesValue).isEqual(Gn(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Oe(s.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Oe(s.integerValue)===Oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Oe(s.doubleValue),c=Oe(i.doubleValue);return a===c?Ro(a)===Ro(c):isNaN(a)&&isNaN(c)}return!1})(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],Jt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Lh(a)!==Lh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Jt(a[l],c[l])))return!1;return!0})(t,e);default:return ee(52216,{left:t})}}function gi(t,e){return(t.values||[]).find((n=>Jt(n,e)))!==void 0}function rs(t,e){if(t===e)return 0;const n=Qn(t),r=Qn(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Oe(i.integerValue||i.doubleValue),l=Oe(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return Uh(t.timestampValue,e.timestampValue);case 4:return Uh(di(t),di(e));case 5:return bc(t.stringValue,e.stringValue);case 6:return(function(i,a){const c=Gn(i),l=Gn(a);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=he(c[h],l[h]);if(d!==0)return d}return he(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=he(Oe(i.latitude),Oe(a.latitude));return c!==0?c:he(Oe(i.longitude),Oe(a.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Bh(t.arrayValue,e.arrayValue);case 10:return(function(i,a){var E,b,D,L;const c=i.fields||{},l=a.fields||{},h=(E=c[Po])==null?void 0:E.arrayValue,d=(b=l[Po])==null?void 0:b.arrayValue,g=he(((D=h==null?void 0:h.values)==null?void 0:D.length)||0,((L=d==null?void 0:d.values)==null?void 0:L.length)||0);return g!==0?g:Bh(h,d)})(t.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Qi.mapValue&&a===Qi.mapValue)return 0;if(i===Qi.mapValue)return 1;if(a===Qi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let g=0;g<l.length&&g<d.length;++g){const E=bc(l[g],d[g]);if(E!==0)return E;const b=rs(c[l[g]],h[d[g]]);if(b!==0)return b}return he(l.length,d.length)})(t.mapValue,e.mapValue);default:throw ee(23264,{he:n})}}function Uh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Kn(t),r=Kn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Bh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=rs(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function ss(t){return Sc(t)}function Sc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Gn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return X.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Sc(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Sc(n.fields[a])}`;return s+"}"})(t.mapValue):ee(61005,{value:t})}function io(t){switch(Qn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ia(t);return e?16+io(e):16;case 5:return 2*t.stringValue.length;case 6:return Gn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+io(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return wr(r.fields,((i,a)=>{s+=i.length+io(a)})),s})(t.mapValue);default:throw ee(13486,{value:t})}}function Rc(t){return!!t&&"integerValue"in t}function ml(t){return!!t&&"arrayValue"in t}function jh(t){return!!t&&"nullValue"in t}function $h(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oo(t){return!!t&&"mapValue"in t}function Dv(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Np])==null?void 0:r.stringValue)===Op}function ei(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return wr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=ei(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return{...t}}function kv(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Vv}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=ei(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){wr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new St(ei(this.value))}}function xp(t){const e=[];return wr(t.fields,((n,r)=>{const s=new Ye([n]);if(oo(r)){const i=xp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Dt(e)}/**
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
 */class ot{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ot(e,0,se.min(),se.min(),se.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new ot(e,1,n,se.min(),r,s,0)}static newNoDocument(e,n){return new ot(e,2,n,se.min(),se.min(),St.empty(),0)}static newUnknownDocument(e,n){return new ot(e,3,n,se.min(),se.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vo{constructor(e,n){this.position=e,this.inclusive=n}}function qh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=rs(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Do{constructor(e,n="asc"){this.field=e,this.dir=n}}function Nv(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Mp{}class qe extends Mp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xv(e,n,r):n==="array-contains"?new Fv(e,r):n==="in"?new Uv(e,r):n==="not-in"?new Bv(e,r):n==="array-contains-any"?new jv(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Mv(e,r):new Lv(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(rs(n,this.value)):n!==null&&Qn(this.value)===Qn(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Mp{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Xt(e,n)}matches(e){return Lp(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Lp(t){return t.op==="and"}function Fp(t){return Ov(t)&&Lp(t)}function Ov(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Cc(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+ss(t.value);if(Fp(t))return t.filters.map((e=>Cc(e))).join(",");{const e=t.filters.map((n=>Cc(n))).join(",");return`${t.op}(${e})`}}function Up(t,e){return t instanceof qe?(function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&Jt(r.value,s.value)})(t,e):t instanceof Xt?(function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Up(a,s.filters[c])),!0):!1})(t,e):void ee(19439)}function Bp(t){return t instanceof qe?(function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`})(t):t instanceof Xt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Bp).join(" ,")+"}"})(t):"Filter"}class xv extends qe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class Mv extends qe{constructor(e,n){super(e,"in",n),this.keys=jp("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Lv extends qe{constructor(e,n){super(e,"not-in",n),this.keys=jp("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function jp(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>X.fromName(r.referenceValue)))}class Fv extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ml(n)&&gi(n.arrayValue,this.value)}}class Uv extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class Bv extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!gi(this.value.arrayValue,n)}}class jv extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ml(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>gi(this.value.arrayValue,r)))}}/**
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
 */class $v{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function zh(t,e=null,n=[],r=[],s=null,i=null,a=null){return new $v(t,e,n,r,s,i,a)}function _l(t){const e=ie(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Cc(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),sa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>ss(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>ss(r))).join(",")),e.Te=n}return e.Te}function yl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Nv(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Up(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hh(t.startAt,e.startAt)&&Hh(t.endAt,e.endAt)}function Pc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class oa{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function qv(t,e,n,r,s,i,a,c){return new oa(t,e,n,r,s,i,a,c)}function $p(t){return new oa(t)}function Wh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hv(t){return t.collectionGroup!==null}function ti(t){const e=ie(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new He(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Do(i,r))})),n.has(Ye.keyField().canonicalString())||e.Ie.push(new Do(Ye.keyField(),r))}return e.Ie}function Ht(t){const e=ie(t);return e.Ee||(e.Ee=zv(e,ti(t))),e.Ee}function zv(t,e){if(t.limitType==="F")return zh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Do(s.field,i)}));const n=t.endAt?new Vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vo(t.startAt.position,t.startAt.inclusive):null;return zh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vc(t,e,n){return new oa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function aa(t,e){return yl(Ht(t),Ht(e))&&t.limitType===e.limitType}function qp(t){return`${_l(Ht(t))}|lt:${t.limitType}`}function Fr(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>Bp(s))).join(", ")}]`),sa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>ss(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>ss(s))).join(",")),`Target(${r})`})(Ht(t))}; limitType=${t.limitType})`}function ca(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=qh(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,ti(r),s)||r.endAt&&!(function(a,c,l){const h=qh(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,ti(r),s))})(t,e)}function Wv(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hp(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=Kv(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Kv(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?rs(l,h):ee(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:t.dir})}}/**
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
 */class Ar{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Rp(this.inner)}size(){return this.innerSize}}/**
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
 */const Gv=new ke(X.comparator);function pn(){return Gv}const zp=new ke(X.comparator);function $s(...t){let e=zp;for(const n of t)e=e.insert(n.key,n);return e}function Wp(t){let e=zp;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function hr(){return ni()}function Kp(){return ni()}function ni(){return new Ar((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Qv=new ke(X.comparator),Jv=new He(X.comparator);function fe(...t){let e=Jv;for(const n of t)e=e.add(n);return e}const Xv=new He(he);function Yv(){return Xv}/**
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
 */function El(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ro(e)?"-0":e}}function Gp(t){return{integerValue:""+t}}function Zv(t,e){return bv(e)?Gp(e):El(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class la{constructor(){this._=void 0}}function eI(t,e,n){return t instanceof ko?(function(s,i){const a={fields:{[Vp]:{stringValue:Pp},[kp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gl(i)&&(i=ia(i)),i&&(a.fields[Dp]=i),{mapValue:a}})(n,e):t instanceof mi?Jp(t,e):t instanceof _i?Xp(t,e):(function(s,i){const a=Qp(s,i),c=Kh(a)+Kh(s.Ae);return Rc(a)&&Rc(s.Ae)?Gp(c):El(s.serializer,c)})(t,e)}function tI(t,e,n){return t instanceof mi?Jp(t,e):t instanceof _i?Xp(t,e):n}function Qp(t,e){return t instanceof No?(function(r){return Rc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ko extends la{}class mi extends la{constructor(e){super(),this.elements=e}}function Jp(t,e){const n=Yp(e);for(const r of t.elements)n.some((s=>Jt(s,r)))||n.push(r);return{arrayValue:{values:n}}}class _i extends la{constructor(e){super(),this.elements=e}}function Xp(t,e){let n=Yp(e);for(const r of t.elements)n=n.filter((s=>!Jt(s,r)));return{arrayValue:{values:n}}}class No extends la{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Kh(t){return Oe(t.integerValue||t.doubleValue)}function Yp(t){return ml(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function nI(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof mi&&s instanceof mi||r instanceof _i&&s instanceof _i?ns(r.elements,s.elements,Jt):r instanceof No&&s instanceof No?Jt(r.Ae,s.Ae):r instanceof ko&&s instanceof ko})(t.transform,e.transform)}class rI{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ua{}function Zp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new tg(t.key,cn.none()):new Si(t.key,t.data,cn.none());{const n=t.data,r=St.empty();let s=new He(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new br(t.key,r,new Dt(s.toArray()),cn.none())}}function sI(t,e,n){t instanceof Si?(function(s,i,a){const c=s.value.clone(),l=Qh(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(t,e,n):t instanceof br?(function(s,i,a){if(!ao(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Qh(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(eg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,n)}function ri(t,e,n,r){return t instanceof Si?(function(i,a,c,l){if(!ao(i.precondition,a))return c;const h=i.value.clone(),d=Jh(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof br?(function(i,a,c,l){if(!ao(i.precondition,a))return c;const h=Jh(i.fieldTransforms,l,a),d=a.data;return d.setAll(eg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(t,e,n,r):(function(i,a,c){return ao(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(t,e,n)}function iI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Qp(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function Gh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,((i,a)=>nI(i,a)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Si extends ua{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class br extends ua{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function eg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Qh(t,e,n){const r=new Map;ve(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,tI(a,c,n[s]))}return r}function Jh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,eI(i,a,e))}return r}class tg extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class oI extends ua{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class aI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&sI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Kp();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=Zp(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),fe())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,((n,r)=>Gh(n,r)))&&ns(this.baseMutations,e.baseMutations,((n,r)=>Gh(n,r)))}}class Tl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return Qv})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Tl(e,n,r,s)}}/**
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
 */class cI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class lI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Fe,de;function uI(t){switch(t){case N.OK:return ee(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return ee(15467,{code:t})}}function ng(t){if(t===void 0)return dn("GRPC error has no .code"),N.UNKNOWN;switch(t){case Fe.OK:return N.OK;case Fe.CANCELLED:return N.CANCELLED;case Fe.UNKNOWN:return N.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return N.INTERNAL;case Fe.UNAVAILABLE:return N.UNAVAILABLE;case Fe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Fe.NOT_FOUND:return N.NOT_FOUND;case Fe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Fe.ABORTED:return N.ABORTED;case Fe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Fe.DATA_LOSS:return N.DATA_LOSS;default:return ee(39323,{code:t})}}(de=Fe||(Fe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function hI(){return new TextEncoder}/**
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
 */const fI=new jn([4294967295,4294967295],0);function Xh(t){const e=hI().encode(t),n=new mp;return n.update(e),new Uint8Array(n.digest())}function Yh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jn([n,r],0),new jn([s,i],0)]}class vl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qs(`Invalid padding: ${n}`);if(r<0)throw new qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=jn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(jn.fromNumber(r)));return s.compare(fI)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Xh(e),[r,s]=Yh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new vl(i,s,n);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.ge===0)return;const n=Xh(e),[r,s]=Yh(n);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ha{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ri.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ha(se.min(),s,new ke(he),pn(),fe())}}class Ri{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ri(r,n,fe(),fe(),fe())}}/**
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
 */class co{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class rg{constructor(e,n){this.targetId=e,this.Ce=n}}class sg{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zh{constructor(){this.ve=0,this.Fe=ef(),this.Me=Ze.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=fe(),n=fe(),r=fe();return this.Fe.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}})),new Ri(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=ef()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,ve(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class dI{constructor(e){this.Ge=e,this.ze=new Map,this.je=pn(),this.Je=Ji(),this.He=Ji(),this.Ye=new ke(he)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((r,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(Pc(i))if(r===0){const a=new X(i.path);this.et(n,a,ot.newNoDocument(a,se.min()))}else ve(r===1,20013,{expectedCount:r});else{const a=this._t(n);if(a!==r){const c=this.ut(e),l=c?this.ct(c,e,a):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Gn(r).toUint8Array()}catch(l){if(l instanceof Cp)return ts("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new vl(a,s,i)}catch(l){return ts(l instanceof qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((i,a)=>{const c=this.ot(a);if(c){if(i.current&&Pc(c.target)){const l=new X(c.target.path);this.It(l).has(a)||this.Et(a,l)||this.et(a,l,ot.newNoDocument(l,e))}i.Be&&(n.set(a,i.ke()),i.qe())}}));let r=fe();this.He.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.je.forEach(((i,a)=>a.setReadTime(e)));const s=new ha(e,n,this.Ye,this.je,r);return this.je=pn(),this.Je=Ji(),this.He=Ji(),this.Ye=new ke(he),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Zh,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new He(he),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new He(he),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Zh),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Ji(){return new ke(X.comparator)}function ef(){return new ke(X.comparator)}const pI={asc:"ASCENDING",desc:"DESCENDING"},gI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mI={and:"AND",or:"OR"};class _I{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dc(t,e){return t.useProto3Json||sa(e)?e:{value:e}}function Oo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ig(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yI(t,e){return Oo(t,e.toTimestamp())}function zt(t){return ve(!!t,49232),se.fromTimestamp((function(n){const r=Kn(n);return new Ve(r.seconds,r.nanos)})(t))}function Il(t,e){return kc(t,e).canonicalString()}function kc(t,e){const n=(function(s){return new Pe(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function og(t){const e=Pe.fromString(t);return ve(hg(e),10190,{key:e.toString()}),e}function Nc(t,e){return Il(t.databaseId,e.path)}function Ya(t,e){const n=og(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(cg(n))}function ag(t,e){return Il(t.databaseId,e)}function EI(t){const e=og(t);return e.length===4?Pe.emptyPath():cg(e)}function Oc(t){return new Pe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cg(t){return ve(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function tf(t,e,n){return{name:Nc(t,e),fields:n.value.mapValue.fields}}function TI(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(ve(d===void 0||typeof d=="string",58123),Ze.fromBase64String(d||"")):(ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ze.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?N.UNKNOWN:ng(h.code);return new Q(d,h.message||"")})(a);n=new sg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ya(t,r.document.name),i=zt(r.document.updateTime),a=r.document.createTime?zt(r.document.createTime):se.min(),c=new St({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];n=new co(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ya(t,r.document),i=r.readTime?zt(r.readTime):se.min(),a=ot.newNoDocument(s,i),c=r.removedTargetIds||[];n=new co([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ya(t,r.document),i=r.removedTargetIds||[];n=new co([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new lI(s,i),c=r.targetId;n=new rg(c,a)}}return n}function vI(t,e){let n;if(e instanceof Si)n={update:tf(t,e.key,e.value)};else if(e instanceof tg)n={delete:Nc(t,e.key)};else if(e instanceof br)n={update:tf(t,e.key,e.data),updateMask:VI(e.fieldMask)};else{if(!(e instanceof oI))return ee(16599,{Vt:e.type});n={verify:Nc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof ko)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof _i)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof No)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ee(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:yI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)})(t,e.precondition)),n}function II(t,e){return t&&t.length>0?(ve(e!==void 0,14353),t.map((n=>(function(s,i){let a=s.updateTime?zt(s.updateTime):zt(i);return a.isEqual(se.min())&&(a=zt(i)),new rI(a,s.transformResults||[])})(n,e)))):[]}function wI(t,e){return{documents:[ag(t,e.path)]}}function AI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ag(t,s);const i=(function(h){if(h.length!==0)return ug(Xt.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(E){return{field:Ur(E.field),direction:RI(E.dir)}})(d)))})(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Dc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function bI(t){let e=EI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(g){const E=lg(g);return E instanceof Xt&&Fp(E)?E.getFilters():[E]})(n.where));let a=[];n.orderBy&&(a=(function(g){return g.map((E=>(function(D){return new Do(Br(D.field),(function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(E)))})(n.orderBy));let c=null;n.limit&&(c=(function(g){let E;return E=typeof g=="object"?g.value:g,sa(E)?null:E})(n.limit));let l=null;n.startAt&&(l=(function(g){const E=!!g.before,b=g.values||[];return new Vo(b,E)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const E=!g.before,b=g.values||[];return new Vo(b,E)})(n.endAt)),qv(e,s,a,i,c,"F",l,h)}function SI(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Br(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Br(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Br(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Br(n.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}})(t):t.fieldFilter!==void 0?(function(n){return qe.create(Br(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Xt.create(n.compositeFilter.filters.map((r=>lg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}})(n.compositeFilter.op))})(t):ee(30097,{filter:t})}function RI(t){return pI[t]}function CI(t){return gI[t]}function PI(t){return mI[t]}function Ur(t){return{fieldPath:t.canonicalString()}}function Br(t){return Ye.fromServerFormat(t.fieldPath)}function ug(t){return t instanceof qe?(function(n){if(n.op==="=="){if($h(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NAN"}};if(jh(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($h(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NAN"}};if(jh(n.value))return{unaryFilter:{field:Ur(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ur(n.field),op:CI(n.op),value:n.value}}})(t):t instanceof Xt?(function(n){const r=n.getFilters().map((s=>ug(s)));return r.length===1?r[0]:{compositeFilter:{op:PI(n.op),filters:r}}})(t):ee(54877,{filter:t})}function VI(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function hg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class xn{constructor(e,n,r,s,i=se.min(),a=se.min(),c=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DI{constructor(e){this.yt=e}}function kI(t){const e=bI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
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
 */class NI{constructor(){this.Cn=new OI}addToCollectionParentIndex(e,n){return this.Cn.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Wn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class OI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(Pe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(Pe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const nf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fg=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(fg,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
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
 */class is{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new is(0)}static cr(){return new is(-1)}}/**
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
 */const rf="LruGarbageCollector",xI=1048576;function sf([t,e],[n,r]){const s=he(t,n);return s===0?he(e,r):s}class MI{constructor(e){this.Ir=e,this.buffer=new He(sf),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class LI{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){G(rf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gs(n)?G(rf,"Ignoring IndexedDB error during garbage collection: ",n):await ps(n)}await this.Vr(3e5)}))}}class FI{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return V.resolve(ra.ce);const r=new MI(n);return this.mr.forEachTarget(e,(s=>r.Ar(s.sequenceNumber))).next((()=>this.mr.pr(e,(s=>r.Ar(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(nf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),nf):this.yr(e,n)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(e,r,n)))).next((g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),Lr()<=ue.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function UI(t,e){return new FI(t,e)}/**
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
 */class BI{constructor(){this.changes=new Ar((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class jI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $I{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&ri(r.mutation,s,Dt.empty(),Ve.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=fe()){const s=hr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let a=$s();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,n){const r=hr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,fe())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{n.set(a,c)}))}))}computeViews(e,n,r,s){let i=pn();const a=ni(),c=(function(){return ni()})();return n.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof br)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),ri(d.mutation,h,d.mutation.getFieldMask(),Ve.now())):a.set(h.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),n.forEach(((h,d)=>c.set(h,new jI(d,a.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,n){const r=ni();let s=new ke(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Dt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const g=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,g=Kp();d.forEach((E=>{if(!i.has(E)){const b=Zp(n.get(E),r.get(E));b!==null&&g.set(E,b),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return V.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(hr());let c=fi,l=i;return a.next((h=>V.forEach(h,((d,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next((E=>{l=l.insert(d,E)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:Wp(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next((r=>{let s=$s();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=$s();return this.indexManager.getCollectionParents(e,i).next((c=>V.forEach(c,(l=>{const h=(function(g,E){return new oa(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((g,E)=>{a=a.insert(g,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ot.newInvalidDocument(d)))}));let c=$s();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&ri(d.mutation,h,Dt.empty(),Ve.now()),ca(n,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class qI{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return V.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}})(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,(function(s){return{name:s.name,query:kI(s.bundledQuery),readTime:zt(s.readTime)}})(n)),V.resolve()}}/**
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
 */class HI{constructor(){this.overlays=new ke(X.comparator),this.qr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hr();return V.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.St(e,n,i)})),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=hr(),i=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=hr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=hr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return V.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new cI(n,r));let i=this.qr.get(n);i===void 0&&(i=fe(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class zI{constructor(){this.sessionToken=Ze.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
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
 */class wl{constructor(){this.Qr=new He(Ke.$r),this.Ur=new He(Ke.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Gr(new Ke(e,n))}zr(e,n){e.forEach((r=>this.removeReference(r,n)))}jr(e){const n=new X(new Pe([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.Ur.forEachInRange([r,s],(a=>{this.Gr(a),i.push(a.key)})),i}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new X(new Pe([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=fe();return this.Ur.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const n=new Ke(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return X.comparator(e.key,n.key)||he(e.Yr,n.Yr)}static Kr(e,n){return he(e.Yr,n.Yr)||X.comparator(e.key,n.key)}}/**
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
 */class WI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new He(Ke.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new aI(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new Ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?pl:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],(a=>{const c=this.Xr(a.Yr);i.push(c)})),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(he);return n.forEach((s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],(c=>{r=r.add(c.Yr)}))})),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new X(i),0);let c=new He(he);return this.Zr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)}),a),V.resolve(this.ti(c))}ti(e){const n=[];return e.forEach((r=>{const s=this.Xr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ve(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(n.mutations,(s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,n){const r=new Ke(n,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KI{constructor(e){this.ri=e,this.docs=(function(){return new ke(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(n))}getEntries(e,n){let r=pn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ot.newInvalidDocument(s))})),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=pn();const a=n.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vv(Tv(d),r)<=0||(s.has(d.key)||ca(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee(9500)}ii(e,n){return V.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new GI(this)}getSize(e){return V.resolve(this.size)}}class GI extends BI{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)})),V.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class QI{constructor(e){this.persistence=e,this.si=new Ar((n=>_l(n)),yl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.oi=0,this._i=new wl,this.targetCount=0,this.ai=is.ur()}forEachTarget(e,n){return this.si.forEach(((r,s)=>n(s))),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),V.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new is(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Pr(n),V.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach(((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),V.waitFor(i).next((()=>s))}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this._i.containsKey(n))}}/**
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
 */class dg{constructor(e,n){this.ui={},this.overlays={},this.ci=new ra(0),this.li=!1,this.li=!0,this.hi=new zI,this.referenceDelegate=e(this),this.Pi=new QI(this),this.indexManager=new NI,this.remoteDocumentCache=(function(s){return new KI(s)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new DI(n),this.Ii=new qI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new WI(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const s=new JI(this.ci.next());return this.referenceDelegate.Ei(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ai(e,n){return V.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,n))))}}class JI extends wv{constructor(e){super(),this.currentSequenceNumber=e}}class Al{constructor(e){this.persistence=e,this.Ri=new wl,this.Vi=null}static mi(e){return new Al(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),V.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach((s=>this.fi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.fi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,(r=>{const s=X.fromPath(r);return this.gi(e,s).next((i=>{i||n.removeEntry(s,se.min())}))})).next((()=>(this.Vi=null,n.apply(e))))}updateLimboDocument(e,n){return this.gi(e,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(e){return 0}gi(e,n){return V.or([()=>V.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class xo{constructor(e,n){this.persistence=e,this.pi=new Ar((r=>Sv(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=UI(this,n)}static mi(e,n){return new xo(e,n)}Ei(){}di(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}wr(e){let n=0;return this.pr(e,(r=>{n++})).next((()=>n))}pr(e,n){return V.forEach(this.pi,((r,s)=>this.br(e,r,s).next((i=>i?V.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,(a=>this.br(e,a,n).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),V.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=io(e.data.value)),n}br(e,n,r){return V.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class bl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=fe(),s=fe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class XI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class YI{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return $E()?8:Av(lt())>0?6:4})()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ws(e,n,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new XI;return this.Ss(e,n,a).next((c=>{if(i.result=c,this.Vs)return this.bs(e,n,a,c.size)}))})).next((()=>i.result))}bs(e,n,r,s){return r.documentReadCount<this.fs?(Lr()<=ue.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Fr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(Lr()<=ue.DEBUG&&G("QueryEngine","Query:",Fr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Lr()<=ue.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Fr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ht(n))):V.resolve())}ys(e,n){if(Wh(n))return V.resolve(null);let r=Ht(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Vc(n,null,"F"),r=Ht(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.ps.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.Ds(n,c);return this.Cs(n,h,a,l.readTime)?this.ys(e,Vc(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ws(e,n,r,s){return Wh(n)||s.isEqual(se.min())?V.resolve(null):this.ps.getDocuments(e,r).next((i=>{const a=this.Ds(n,i);return this.Cs(n,a,r,s)?V.resolve(null):(Lr()<=ue.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fr(n)),this.vs(e,a,n,Ev(s,fi)).next((c=>c)))}))}Ds(e,n){let r=new He(Hp(e));return n.forEach(((s,i)=>{ca(e,i)&&(r=r.add(i))})),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Lr()<=ue.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Fr(n)),this.ps.getDocumentsMatchingQuery(e,n,Wn.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Sl="LocalStore",ZI=3e8;class ew{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new ke(he),this.xs=new Ar((i=>_l(i)),yl),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $I(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Ms)))}}function tw(t,e,n,r){return new ew(t,e,n,r)}async function pg(t,e){const n=ie(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Ls:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function nw(t,e){const n=ie(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const g=h.batch,E=g.keys();let b=V.resolve();return E.forEach((D=>{b=b.next((()=>d.getEntry(l,D))).next((L=>{const B=h.docVersions.get(D);ve(B!==null,48541),L.version.compareTo(B)<0&&(g.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),d.addEntry(L)))}))})),b.next((()=>c.mutationQueue.removeMutationBatch(l,g)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function gg(t){const e=ie(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.Pi.getLastRemoteSnapshotVersion(n)))}function rw(t,e){const n=ie(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach(((d,g)=>{const E=s.get(g);if(!E)return;c.push(n.Pi.removeMatchingKeys(i,d.removedDocuments,g).next((()=>n.Pi.addMatchingKeys(i,d.addedDocuments,g))));let b=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(Ze.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),(function(L,B,$){return L.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=ZI?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(E,b,d)&&c.push(n.Pi.updateTargetData(i,b))}));let l=pn(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(sw(i,a,e.documentUpdates).next((d=>{l=d.ks,h=d.qs}))),!r.isEqual(se.min())){const d=n.Pi.getLastRemoteSnapshotVersion(i).next((g=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return V.waitFor(c).next((()=>a.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Ms=s,i)))}function sw(t,e,n){let r=fe(),s=fe();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let a=pn();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):G(Sl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{ks:a,qs:s}}))}function iw(t,e){const n=ie(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=pl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function ow(t,e){const n=ie(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.Pi.getTargetData(r,e).next((i=>i?(s=i,V.resolve(s)):n.Pi.allocateTargetId(r).next((a=>(s=new xn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r}))}async function xc(t,e,n){const r=ie(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!gs(a))throw a;G(Sl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function of(t,e,n){const r=ie(t);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const g=ie(l),E=g.xs.get(d);return E!==void 0?V.resolve(g.Ms.get(E)):g.Pi.getTargetData(h,d)})(r,a,Ht(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Fs.getDocumentsMatchingQuery(a,e,n?s:se.min(),n?i:fe()))).next((c=>(aw(r,Wv(e),c),{documents:c,Qs:i})))))}function aw(t,e,n){let r=t.Os.get(e)||se.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.Os.set(e,r)}class af{constructor(){this.activeTargetIds=Yv()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cw{constructor(){this.Mo=new af,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new af,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class lw{Oo(e){}shutdown(){}}/**
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
 */const cf="ConnectivityMonitor";class lf{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){G(cf,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){G(cf,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Xi=null;function Mc(){return Xi===null?Xi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xi++,"0x"+Xi.toString(16)}/**
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
 */const Za="RestConnection",uw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hw{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Co?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const a=Mc(),c=this.zo(e,n.toUriEncodedString());G(Za,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),d=hs(h);return this.Jo(e,c,l,r,d).then((g=>(G(Za,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw ts(Za,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Ho(e,n,r,s,i,a){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ds})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}zo(e,n){const r=uw[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class fw{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const nt="WebChannelConnection";class dw extends hw{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=Mc();return new Promise(((c,l)=>{const h=new _p;h.setWithCredentials(!0),h.listenOnce(yp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case so.NO_ERROR:const g=h.getResponseJson();G(nt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case so.TIMEOUT:G(nt,`RPC '${e}' ${a} timed out`),l(new Q(N.DEADLINE_EXCEEDED,"Request time out"));break;case so.HTTP_ERROR:const E=h.getStatus();if(G(nt,`RPC '${e}' ${a} failed with status:`,E,"response text:",h.getResponseText()),E>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const D=b==null?void 0:b.error;if(D&&D.status&&D.message){const L=(function($){const H=$.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(H)>=0?H:N.UNKNOWN})(D.status);l(new Q(L,D.message))}else l(new Q(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Q(N.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{G(nt,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);G(nt,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)}))}T_(e,n,r){const s=Mc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=vp(),c=Tp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");G(nt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const g=a.createWebChannel(d,l);this.I_(g);let E=!1,b=!1;const D=new fw({Yo:B=>{b?G(nt,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(E||(G(nt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),G(nt,`RPC '${e}' stream ${s} sending:`,B),g.send(B))},Zo:()=>g.close()}),L=(B,$,H)=>{B.listen($,(j=>{try{H(j)}catch(z){setTimeout((()=>{throw z}),0)}}))};return L(g,js.EventType.OPEN,(()=>{b||(G(nt,`RPC '${e}' stream ${s} transport opened.`),D.o_())})),L(g,js.EventType.CLOSE,(()=>{b||(b=!0,G(nt,`RPC '${e}' stream ${s} transport closed`),D.a_(),this.E_(g))})),L(g,js.EventType.ERROR,(B=>{b||(b=!0,ts(nt,`RPC '${e}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),D.a_(new Q(N.UNAVAILABLE,"The operation could not be completed")))})),L(g,js.EventType.MESSAGE,(B=>{var $;if(!b){const H=B.data[0];ve(!!H,16349);const j=H,z=(j==null?void 0:j.error)||(($=j[0])==null?void 0:$.error);if(z){G(nt,`RPC '${e}' stream ${s} received error:`,z);const te=z.status;let me=(function(_){const w=Fe[_];if(w!==void 0)return ng(w)})(te),v=z.message;me===void 0&&(me=N.INTERNAL,v="Unknown error status: "+te+" with message "+z.message),b=!0,D.a_(new Q(me,v)),g.close()}else G(nt,`RPC '${e}' stream ${s} received:`,H),D.u_(H)}})),L(c,Ep.STAT_EVENT,(B=>{B.stat===Ac.PROXY?G(nt,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===Ac.NOPROXY&&G(nt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{D.__()}),0),D}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((n=>n===e))}}function ec(){return typeof document<"u"?document:null}/**
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
 */function fa(t){return new _I(t,!0)}/**
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
 */class mg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&G("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const uf="PersistentStream";class _g{constructor(e,n,r,s,i,a,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new mg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(dn(n.toString()),dn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===n&&this.G_(r,s)}),(r=>{e((()=>{const s=new Q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return G(uf,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget((()=>this.D_===e?n():(G(uf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pw extends _g{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=TI(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?zt(a.readTime):se.min()})(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Oc(this.serializer),n.addTarget=(function(i,a){let c;const l=a.target;if(c=Pc(l)?{documents:wI(i,l)}:{query:AI(i,l).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=ig(i,a.resumeToken);const h=Dc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Oo(i,a.snapshotVersion.toTimestamp());const h=Dc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=SI(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Oc(this.serializer),n.removeTarget=e,this.q_(n)}}class gw extends _g{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return ve(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){ve(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=II(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Oc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>vI(this.serializer,r)))};this.q_(n)}}/**
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
 */class mw{}class _w extends mw{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Go(e,kc(n,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(N.UNKNOWN,i.toString())}))}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Ho(e,kc(n,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(N.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class yw{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(dn(n),this.aa=!1):G("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Er="RemoteStore";class Ew{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo((a=>{r.enqueueAndForget((async()=>{Sr(this)&&(G(Er,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ea.add(4),await Ci(h),h.Ra.set("Unknown"),h.Ea.delete(4),await da(h)})(this))}))})),this.Ra=new yw(r,s)}}async function da(t){if(Sr(t))for(const e of t.da)await e(!0)}async function Ci(t){for(const e of t.da)await e(!1)}function yg(t,e){const n=ie(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Vl(n)?Pl(n):ms(n).O_()&&Cl(n,e))}function Rl(t,e){const n=ie(t),r=ms(n);n.Ia.delete(e),r.O_()&&Eg(n,e),n.Ia.size===0&&(r.O_()?r.L_():Sr(n)&&n.Ra.set("Unknown"))}function Cl(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ms(t).Y_(e)}function Eg(t,e){t.Va.Ue(e),ms(t).Z_(e)}function Pl(t){t.Va=new dI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ms(t).start(),t.Ra.ua()}function Vl(t){return Sr(t)&&!ms(t).x_()&&t.Ia.size>0}function Sr(t){return ie(t).Ea.size===0}function Tg(t){t.Va=void 0}async function Tw(t){t.Ra.set("Online")}async function vw(t){t.Ia.forEach(((e,n)=>{Cl(t,e)}))}async function Iw(t,e){Tg(t),Vl(t)?(t.Ra.ha(e),Pl(t)):t.Ra.set("Unknown")}async function ww(t,e,n){if(t.Ra.set("Online"),e instanceof sg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))})(t,e)}catch(r){G(Er,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Mo(t,r)}else if(e instanceof co?t.Va.Ze(e):e instanceof rg?t.Va.st(e):t.Va.tt(e),!n.isEqual(se.min()))try{const r=await gg(t.localStore);n.compareTo(r)>=0&&await(function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ia.get(h);d&&i.Ia.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ia.get(l);if(!d)return;i.Ia.set(l,d.withResumeToken(Ze.EMPTY_BYTE_STRING,d.snapshotVersion)),Eg(i,l);const g=new xn(d.target,l,h,d.sequenceNumber);Cl(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){G(Er,"Failed to raise snapshot:",r),await Mo(t,r)}}async function Mo(t,e,n){if(!gs(e))throw e;t.Ea.add(1),await Ci(t),t.Ra.set("Offline"),n||(n=()=>gg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{G(Er,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await da(t)}))}function vg(t,e){return e().catch((n=>Mo(t,n,e)))}async function pa(t){const e=ie(t),n=Jn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:pl;for(;Aw(e);)try{const s=await iw(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,bw(e,s)}catch(s){await Mo(e,s)}Ig(e)&&wg(e)}function Aw(t){return Sr(t)&&t.Ta.length<10}function bw(t,e){t.Ta.push(e);const n=Jn(t);n.O_()&&n.X_&&n.ea(e.mutations)}function Ig(t){return Sr(t)&&!Jn(t).x_()&&t.Ta.length>0}function wg(t){Jn(t).start()}async function Sw(t){Jn(t).ra()}async function Rw(t){const e=Jn(t);for(const n of t.Ta)e.ea(n.mutations)}async function Cw(t,e,n){const r=t.Ta.shift(),s=Tl.from(r,e,n);await vg(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await pa(t)}async function Pw(t,e){e&&Jn(t).X_&&await(async function(r,s){if((function(a){return uI(a)&&a!==N.ABORTED})(s.code)){const i=r.Ta.shift();Jn(r).B_(),await vg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await pa(r)}})(t,e),Ig(t)&&wg(t)}async function hf(t,e){const n=ie(t);n.asyncQueue.verifyOperationInProgress(),G(Er,"RemoteStore received new credentials");const r=Sr(n);n.Ea.add(3),await Ci(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await da(n)}async function Vw(t,e){const n=ie(t);e?(n.Ea.delete(2),await da(n)):e||(n.Ea.add(2),await Ci(n),n.Ra.set("Unknown"))}function ms(t){return t.ma||(t.ma=(function(n,r,s){const i=ie(n);return i.sa(),new pw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:Tw.bind(null,t),t_:vw.bind(null,t),r_:Iw.bind(null,t),H_:ww.bind(null,t)}),t.da.push((async e=>{e?(t.ma.B_(),Vl(t)?Pl(t):t.Ra.set("Unknown")):(await t.ma.stop(),Tg(t))}))),t.ma}function Jn(t){return t.fa||(t.fa=(function(n,r,s){const i=ie(n);return i.sa(),new gw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:Sw.bind(null,t),r_:Pw.bind(null,t),ta:Rw.bind(null,t),na:Cw.bind(null,t)}),t.da.push((async e=>{e?(t.fa.B_(),await pa(t)):(await t.fa.stop(),t.Ta.length>0&&(G(Er,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))}))),t.fa}/**
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
 */class Dl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new Dl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kl(t,e){if(dn("AsyncQueue",`${e}: ${t}`),gs(t))return new Q(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Kr{static emptySet(e){return new Kr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=$s(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ff{constructor(){this.ga=new ke(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,r)=>{e.push(r)})),e}}class os{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach((c=>{a.push({type:0,doc:c})})),new os(e,n,Kr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Dw{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class kw{constructor(){this.queries=df(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=ie(n),i=s.queries;s.queries=df(),i.forEach(((a,c)=>{for(const l of c.Sa)l.onError(r)}))})(this,new Q(N.ABORTED,"Firestore shutting down"))}}function df(){return new Ar((t=>qp(t)),aa)}async function Nw(t,e){const n=ie(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new Dw,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=kl(a,`Initialization of query '${Fr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Nl(n)}async function Ow(t,e){const n=ie(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function xw(t,e){const n=ie(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&Nl(n)}function Mw(t,e,n){const r=ie(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Nl(t){t.Ca.forEach((e=>{e.next()}))}var Lc,pf;(pf=Lc||(Lc={})).Ma="default",pf.Cache="cache";class Lw{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Lc.Cache}}/**
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
 */class Ag{constructor(e){this.key=e}}class bg{constructor(e){this.key=e}}class Fw{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=fe(),this.mutatedKeys=fe(),this.eu=Hp(e),this.tu=new Kr(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new ff,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,g)=>{const E=s.get(d),b=ca(this.query,g)?g:null,D=!!E&&this.mutatedKeys.has(E.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let B=!1;E&&b?E.data.isEqual(b.data)?D!==L&&(r.track({type:3,doc:b}),B=!0):this.su(E,b)||(r.track({type:2,doc:b}),B=!0,(l&&this.eu(b,l)>0||h&&this.eu(b,h)<0)&&(c=!0)):!E&&b?(r.track({type:0,doc:b}),B=!0):E&&!b&&(r.track({type:1,doc:E}),B=!0,(l||h)&&(c=!0)),B&&(b?(a=a.add(b),i=L?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((d,g)=>(function(b,D){const L=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:B})}};return L(b)-L(D)})(d.type,g.type)||this.eu(d.doc,g.doc))),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,a.length!==0||h?{snapshot:new os(this.query,e.tu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ff,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=fe(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return e.forEach((r=>{this.Xa.has(r)||n.push(new bg(r))})),this.Xa.forEach((r=>{e.has(r)||n.push(new Ag(r))})),n}cu(e){this.Ya=e.Qs,this.Xa=fe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return os.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Ol="SyncEngine";class Uw{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Bw{constructor(e){this.key=e,this.hu=!1}}class jw{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Ar((c=>qp(c)),aa),this.Iu=new Map,this.Eu=new Set,this.du=new ke(X.comparator),this.Au=new Map,this.Ru=new wl,this.Vu={},this.mu=new Map,this.fu=is.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function $w(t,e,n=!0){const r=Dg(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await Sg(r,e,n,!0),s}async function qw(t,e){const n=Dg(t);await Sg(n,e,!0,!1)}async function Sg(t,e,n,r){const s=await ow(t.localStore,Ht(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await Hw(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&yg(t.remoteStore,s),c}async function Hw(t,e,n,r,s){t.pu=(g,E,b)=>(async function(L,B,$,H){let j=B.view.ru($);j.Cs&&(j=await of(L.localStore,B.query,!1).then((({documents:v})=>B.view.ru(v,j))));const z=H&&H.targetChanges.get(B.targetId),te=H&&H.targetMismatches.get(B.targetId)!=null,me=B.view.applyChanges(j,L.isPrimaryClient,z,te);return mf(L,B.targetId,me.au),me.snapshot})(t,g,E,b);const i=await of(t.localStore,e,!0),a=new Fw(e,i.Qs),c=a.ru(i.documents),l=Ri.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);mf(t,n,h.au);const d=new Uw(e,n,a);return t.Tu.set(e,d),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function zw(t,e,n){const r=ie(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter((a=>!aa(a,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Rl(r.remoteStore,s.targetId),Fc(r,s.targetId)})).catch(ps)):(Fc(r,s.targetId),await xc(r.localStore,s.targetId,!0))}async function Ww(t,e){const n=ie(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rl(n.remoteStore,r.targetId))}async function Kw(t,e,n){const r=eA(t);try{const s=await(function(a,c){const l=ie(a),h=Ve.now(),d=c.reduce(((b,D)=>b.add(D.key)),fe());let g,E;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let D=pn(),L=fe();return l.Ns.getEntries(b,d).next((B=>{D=B,D.forEach((($,H)=>{H.isValidDocument()||(L=L.add($))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,D))).next((B=>{g=B;const $=[];for(const H of c){const j=iI(H,g.get(H.key).overlayedDocument);j!=null&&$.push(new br(H.key,j,xp(j.value.mapValue),cn.exists(!0)))}return l.mutationQueue.addMutationBatch(b,h,$,c)})).next((B=>{E=B;const $=B.applyToLocalDocumentSet(g,L);return l.documentOverlayCache.saveOverlays(b,B.batchId,$)}))})).then((()=>({batchId:E.batchId,changes:Wp(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Vu[a.currentUser.toKey()];h||(h=new ke(he)),h=h.insert(c,l),a.Vu[a.currentUser.toKey()]=h})(r,s.batchId,n),await Pi(r,s.changes),await pa(r.remoteStore)}catch(s){const i=kl(s,"Failed to persist write");n.reject(i)}}async function Rg(t,e){const n=ie(t);try{const r=await rw(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=n.Au.get(i);a&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ve(a.hu,14607):s.removedDocuments.size>0&&(ve(a.hu,42227),a.hu=!1))})),await Pi(n,r,e)}catch(r){await ps(r)}}function gf(t,e,n){const r=ie(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,g)=>{for(const E of g.Sa)E.va(c)&&(h=!0)})),h&&Nl(l)})(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gw(t,e,n){const r=ie(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new ke(X.comparator);a=a.insert(i,ot.newNoDocument(i,se.min()));const c=fe().add(i),l=new ha(se.min(),new Map,new ke(he),a,c);await Rg(r,l),r.du=r.du.remove(i),r.Au.delete(e),xl(r)}else await xc(r.localStore,e,!1).then((()=>Fc(r,e,n))).catch(ps)}async function Qw(t,e){const n=ie(t),r=e.batch.batchId;try{const s=await nw(n.localStore,e);Pg(n,r,null),Cg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pi(n,s)}catch(s){await ps(s)}}async function Jw(t,e,n){const r=ie(t);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((g=>(ve(g!==null,37113),d=g.keys(),l.mutationQueue.removeMutationBatch(h,g)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);Pg(r,e,n),Cg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pi(r,s)}catch(s){await ps(s)}}function Cg(t,e){(t.mu.get(e)||[]).forEach((n=>{n.resolve()})),t.mu.delete(e)}function Pg(t,e,n){const r=ie(t);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach((r=>{t.Ru.containsKey(r)||Vg(t,r)}))}function Vg(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Rl(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),xl(t))}function mf(t,e,n){for(const r of n)r instanceof Ag?(t.Ru.addReference(r.key,e),Xw(t,r)):r instanceof bg?(G(Ol,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||Vg(t,r.key)):ee(19791,{wu:r})}function Xw(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(G(Ol,"New document in limbo: "+n),t.Eu.add(r),xl(t))}function xl(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new X(Pe.fromString(e)),r=t.fu.next();t.Au.set(r,new Bw(n)),t.du=t.du.insert(n,r),yg(t.remoteStore,new xn(Ht($p(n.path)),r,"TargetPurposeLimboResolution",ra.ce))}}async function Pi(t,e,n){const r=ie(t),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach(((c,l)=>{a.push(r.pu(l,e,n).then((h=>{var d;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=bl.As(l.targetId,h);i.push(g)}})))})),await Promise.all(a),r.Pu.H_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>V.forEach(h,(E=>V.forEach(E.Es,(b=>d.persistence.referenceDelegate.addReference(g,E.targetId,b))).next((()=>V.forEach(E.ds,(b=>d.persistence.referenceDelegate.removeReference(g,E.targetId,b)))))))))}catch(g){if(!gs(g))throw g;G(Sl,"Failed to update sequence numbers: "+g)}for(const g of h){const E=g.targetId;if(!g.fromCache){const b=d.Ms.get(E),D=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(D);d.Ms=d.Ms.insert(E,L)}}})(r.localStore,i))}async function Yw(t,e){const n=ie(t);if(!n.currentUser.isEqual(e)){G(Ol,"User change. New user:",e.toKey());const r=await pg(n.localStore,e);n.currentUser=e,(function(i,a){i.mu.forEach((c=>{c.forEach((l=>{l.reject(new Q(N.CANCELLED,a))}))})),i.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pi(n,r.Ls)}}function Zw(t,e){const n=ie(t),r=n.Au.get(e);if(r&&r.hu)return fe().add(r.key);{let s=fe();const i=n.Iu.get(e);if(!i)return s;for(const a of i){const c=n.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function Dg(t){const e=ie(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Zw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gw.bind(null,e),e.Pu.H_=xw.bind(null,e.eventManager),e.Pu.yu=Mw.bind(null,e.eventManager),e}function eA(t){const e=ie(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Qw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jw.bind(null,e),e}class Lo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return tw(this.persistence,new YI,e.initialUser,this.serializer)}Cu(e){return new dg(Al.mi,this.serializer)}Du(e){return new cw}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Lo.provider={build:()=>new Lo};class tA extends Lo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ve(this.persistence.referenceDelegate instanceof xo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new LI(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new dg((r=>xo.mi(r,n)),this.serializer)}}class Uc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yw.bind(null,this.syncEngine),await Vw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new kw})()}createDatastore(e){const n=fa(e.databaseInfo.databaseId),r=(function(i){return new dw(i)})(e.databaseInfo);return(function(i,a,c,l){return new _w(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,a,c){return new Ew(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>gf(this.syncEngine,n,0)),(function(){return lf.v()?new lf:new lw})())}createSyncEngine(e,n){return(function(s,i,a,c,l,h,d){const g=new jw(s,i,a,c,l,h);return d&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=ie(s);G(Er,"RemoteStore shutting down."),i.Ea.add(5),await Ci(i),i.Aa.shutdown(),i.Ra.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Uc.provider={build:()=>new Uc};/**
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
 *//**
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
 */class nA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):dn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const Xn="FirestoreClient";class rA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=fl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{G(Xn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(G(Xn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kl(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function tc(t,e){t.asyncQueue.verifyOperationInProgress(),G(Xn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await pg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function _f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sA(t);G(Xn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>hf(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>hf(e.remoteStore,s))),t._onlineComponents=e}async function sA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G(Xn,"Using user provided OfflineComponentProvider");try{await tc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await tc(t,new Lo)}}else G(Xn,"Using default OfflineComponentProvider"),await tc(t,new tA(void 0));return t._offlineComponents}async function kg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G(Xn,"Using user provided OnlineComponentProvider"),await _f(t,t._uninitializedComponentsProvider._online)):(G(Xn,"Using default OnlineComponentProvider"),await _f(t,new Uc))),t._onlineComponents}function iA(t){return kg(t).then((e=>e.syncEngine))}async function oA(t){const e=await kg(t),n=e.eventManager;return n.onListen=$w.bind(null,e.syncEngine),n.onUnlisten=zw.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qw.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ww.bind(null,e.syncEngine),n}function aA(t,e,n={}){const r=new $n;return t.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new nA({next:E=>{d.Nu(),a.enqueueAndForget((()=>Ow(i,g))),E.fromCache&&l.source==="server"?h.reject(new Q(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),g=new Lw(c,d,{includeMetadataChanges:!0,qa:!0});return Nw(i,g)})(await oA(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function Ng(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const yf=new Map;/**
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
 */const Og="firestore.googleapis.com",Ef=!0;class Tf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Og,this.ssl=Ef}else this.host=e.host,this.ssl=e.ssl??Ef;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xI)throw new Q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ng(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ga{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new cv;switch(r.type){case"firstParty":return new fv(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=yf.get(n);r&&(G("ComponentProvider","Removing Datastore"),yf.delete(n),r.terminate())})(this),Promise.resolve()}}function cA(t,e,n,r={}){var h;t=hi(t,ga);const s=hs(e),i=t._getSettings(),a={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(cp(`https://${c}`),lp("Firestore",!0)),i.host!==Og&&i.host!==c&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!mr(l,a)&&(t._setSettings(l),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=st.MOCK_USER;else{d=NE(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new Q(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new st(E)}t._authCredentials=new lv(new wp(d,g))}}/**
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
 */class ma{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ma(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(bi(n,Ge._jsonSchema))return new Ge(e,r||null,new X(Pe.fromString(n.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:Ue("string",Ge._jsonSchemaVersion),referencePath:Ue("string")};class qn extends ma{constructor(e,n,r){super(e,n,$p(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new X(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function yi(t,e,...n){if(t=wt(t),Ap("collection","path",e),t instanceof ga){const r=Pe.fromString(e,...n);return Nh(r),new qn(t,null,r)}{if(!(t instanceof Ge||t instanceof qn))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return Nh(r),new qn(t.firestore,null,r)}}function vf(t,e,...n){if(t=wt(t),arguments.length===1&&(e=fl.newId()),Ap("doc","path",e),t instanceof ga){const r=Pe.fromString(e,...n);return kh(r),new Ge(t,null,new X(r))}{if(!(t instanceof Ge||t instanceof qn))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Pe.fromString(e,...n));return kh(r),new Ge(t.firestore,t instanceof qn?t.converter:null,new X(r))}}/**
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
 */const If="AsyncQueue";class wf{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new mg(this,"async_queue_retry"),this._c=()=>{const r=ec();r&&G(If,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=ec();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ec();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new $n;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gs(e))throw e;G(If,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,dn("INTERNAL UNHANDLED ERROR: ",Af(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Dl.createAndSchedule(this,e,n,r,(i=>this.hc(i)));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:Af(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Af(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ml extends ga{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new wf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wf(e),this._firestoreClient=void 0,await e}}}function lA(t,e){const n=typeof t=="object"?t:dp(),r=typeof t=="string"?t:Co,s=ul(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=DE("firestore");i&&cA(s,...i)}return s}function xg(t){if(t._terminated)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||uA(t),t._firestoreClient}function uA(t){var r,s,i;const e=t._freezeSettings(),n=(function(c,l,h,d){return new Pv(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Ng(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new rA(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
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
 */class Rt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rt(Ze.fromBase64String(e))}catch(n){throw new Q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rt(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Rt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bi(e,Rt._jsonSchema))return Rt.fromBase64String(e.bytes)}}Rt._jsonSchemaVersion="firestore/bytes/1.0",Rt._jsonSchema={type:Ue("string",Rt._jsonSchemaVersion),bytes:Ue("string")};/**
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
 */class Ll{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Mg{constructor(e){this._methodName=e}}/**
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
 */class Wt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wt._jsonSchemaVersion}}static fromJSON(e){if(bi(e,Wt._jsonSchema))return new Wt(e.latitude,e.longitude)}}Wt._jsonSchemaVersion="firestore/geoPoint/1.0",Wt._jsonSchema={type:Ue("string",Wt._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Kt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Kt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bi(e,Kt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Kt(e.vectorValues);throw new Q(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Kt._jsonSchemaVersion="firestore/vectorValue/1.0",Kt._jsonSchema={type:Ue("string",Kt._jsonSchemaVersion),vectorValues:Ue("object")};/**
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
 */const hA=/^__.*__$/;class fA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Si(e,this.data,n,this.fieldTransforms)}}function Lg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:t})}}class Fl{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Fl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Fo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Lg(this.Ac)&&hA.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class dA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||fa(e)}Cc(e,n,r,s=!1){return new Fl({Ac:e,methodName:n,Dc:r,path:Ye.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pA(t){const e=t._freezeSettings(),n=fa(t._databaseId);return new dA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function gA(t,e,n,r,s,i={}){const a=t.Cc(i.merge||i.mergeFields?2:0,e,n,s);jg("Data must be an object, but it was:",a,r);const c=Ug(r,a);let l,h;if(i.merge)l=new Dt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const E=mA(e,g,n);if(!a.contains(E))throw new Q(N.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);yA(d,E)||d.push(E)}l=new Dt(d),h=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,h=a.fieldTransforms;return new fA(new St(c),l,h)}function Fg(t,e){if(Bg(t=wt(t)))return jg("Unsupported field value:",e,t),Ug(t,e);if(t instanceof Mg)return(function(r,s){if(!Lg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Fg(c,s.wc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ve.fromDate(r);return{timestampValue:Oo(s.serializer,i)}}if(r instanceof Ve){const i=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oo(s.serializer,i)}}if(r instanceof Wt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Rt)return{bytesValue:ig(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Il(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Kt)return(function(a,c){return{mapValue:{fields:{[Np]:{stringValue:Op},[Po]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return El(c.serializer,h)}))}}}}}})(r,s);throw s.Sc(`Unsupported field value: ${dl(r)}`)})(t,e)}function Ug(t,e){const n={};return Rp(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(t,((r,s)=>{const i=Fg(s,e.mc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Bg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ve||t instanceof Wt||t instanceof Rt||t instanceof Ge||t instanceof Mg||t instanceof Kt)}function jg(t,e,n){if(!Bg(n)||!bp(n)){const r=dl(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}function mA(t,e,n){if((e=wt(e))instanceof Ll)return e._internalPath;if(typeof e=="string")return $g(t,e);throw Fo("Field path arguments must be of type string or ",t,!1,void 0,n)}const _A=new RegExp("[~\\*/\\[\\]]");function $g(t,e,n){if(e.search(_A)>=0)throw Fo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ll(...e.split("."))._internalPath}catch{throw Fo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Q(N.INVALID_ARGUMENT,c+t+l)}function yA(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class qg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Hg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EA extends qg{data(){return super.data()}}function Hg(t,e){return typeof e=="string"?$g(t,e):e instanceof Ll?e._internalPath:e._delegate._internalPath}/**
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
 */function TA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vA{convertValue(e,n="none"){switch(Qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Po].arrayValue)==null?void 0:s.values)==null?void 0:i.map((a=>Oe(a.doubleValue)));return new Kt(n)}convertGeoPoint(e){return new Wt(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ia(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Pe.fromString(e);ve(hg(r),9688,{name:e});const s=new pi(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function IA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Yi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gr extends qg{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Hg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Gr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gr._jsonSchema={type:Ue("string",Gr._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class lo extends Gr{data(e={}){return super.data(e)}}class Qr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Yi(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new lo(this._firestore,this._userDataWriter,r.key,r,new Yi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new lo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Yi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new lo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Yi(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:wA(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function wA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:t})}}Qr._jsonSchemaVersion="firestore/querySnapshot/1.0",Qr._jsonSchema={type:Ue("string",Qr._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class AA extends vA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function _a(t){t=hi(t,ma);const e=hi(t.firestore,Ml),n=xg(e),r=new AA(e);return TA(t._query),aA(n,t._query).then((s=>new Qr(e,r,t,s)))}function bf(t,e,n){t=hi(t,Ge);const r=hi(t.firestore,Ml),s=IA(t.converter,e);return bA(r,[gA(pA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,cn.none())])}function bA(t,e){return(function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget((async()=>Kw(await iA(r),s,i))),i.promise})(xg(t),e)}(function(e,n=!0){(function(s){ds=s})(fs),es(new _r("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ml(new uv(r.getProvider("auth-internal")),new dv(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(h.options.projectId,d)})(a,s),a);return i={useFetchStreams:n,...i},c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Bn(Ch,Ph,e),Bn(Ch,Ph,"esm2020")})();function zg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SA=zg,Wg=new wi("auth","Firebase",zg());/**
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
 */const Uo=new cl("@firebase/auth");function RA(t,...e){Uo.logLevel<=ue.WARN&&Uo.warn(`Auth (${fs}): ${t}`,...e)}function uo(t,...e){Uo.logLevel<=ue.ERROR&&Uo.error(`Auth (${fs}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw Bl(t,...e)}function Ot(t,...e){return Bl(t,...e)}function Ul(t,e,n){const r={...SA(),[e]:n};return new wi("auth","Firebase",r).create(e,{appName:t.name})}function gr(t){return Ul(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function CA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Yt(t,"argument-error"),Ul(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wg.create(t,...e)}function ne(t,e,...n){if(!t)throw Bl(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw uo(e),new Error(e)}function gn(t,e){t||on(e)}/**
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
 */function Bc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function PA(){return Sf()==="http:"||Sf()==="https:"}function Sf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function VA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PA()||UE()||"connection"in navigator)?navigator.onLine:!0}function DA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=ME()||BE()}get(){return VA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jl(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Kg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],OA=new Vi(3e4,6e4);function $l(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function _s(t,e,n,r,s={}){return Gg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ai({key:t.config.apiKey,...a}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return FE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&hs(t.emulatorConfig.host)&&(h.credentials="include"),Kg.fetch()(await Qg(t,t.config.apiHost,n,c),h)})}async function Gg(t,e,n){t._canInitEmulator=!1;const r={...kA,...e};try{const s=new MA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ul(t,d,h);Yt(t,d)}}catch(s){if(s instanceof _n)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function xA(t,e,n,r,s={}){const i=await _s(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?jl(t.config,s):`${t.config.apiScheme}://${s}`;return NA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class MA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),OA.get())})}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ot(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function LA(t,e){return _s(t,"POST","/v1/accounts:delete",e)}async function Bo(t,e){return _s(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function FA(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=ql(r);ne(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:si(nc(s.auth_time)),issuedAtTime:si(nc(s.iat)),expirationTime:si(nc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function nc(t){return Number(t)*1e3}function ql(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return uo("JWT malformed, contained fewer than 3 sections"),null;try{const s=sp(n);return s?JSON.parse(s):(uo("Failed to decode base64 JWT payload"),null)}catch(s){return uo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rf(t){const e=ql(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ei(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof _n&&UA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class BA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=si(this.lastLoginAt),this.creationTime=si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jo(t){var g;const e=t.auth,n=await t.getIdToken(),r=await Ei(t,Bo(e,{idToken:n}));ne(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?Jg(s.providerUserInfo):[],a=$A(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function jA(t){const e=wt(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $A(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Jg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function qA(t,e){const n=await Gg(t,{},async()=>{const r=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Qg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&hs(t.emulatorConfig.host)&&(l.credentials="include"),Kg.fetch()(a,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function HA(t,e){return _s(t,"POST","/v2/accounts:revokeToken",$l(t,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Rf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Jr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
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
 */function bn(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new BA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ei(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return FA(this,e)}reload(){return jA(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await Ei(this,LA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,a=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:b,providerData:D,stsTokenManager:L}=n;ne(g&&L,e,"internal-error");const B=Jr.fromJSON(this.name,L);ne(typeof g=="string",e,"internal-error"),bn(r,e.name),bn(s,e.name),ne(typeof E=="boolean",e,"internal-error"),ne(typeof b=="boolean",e,"internal-error"),bn(i,e.name),bn(a,e.name),bn(c,e.name),bn(l,e.name),bn(h,e.name),bn(d,e.name);const $=new kt({uid:g,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:b,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:B,createdAt:h,lastLoginAt:d});return D&&Array.isArray(D)&&($.providerData=D.map(H=>({...H}))),l&&($._redirectEventId=l),$}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jr;s.updateFromServerResponse(n);const i=new kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Jg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jr;c.updateFromIdToken(r);const l=new kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Cf=new Map;function an(t){gn(t instanceof Function,"Expected a class definition");let e=Cf.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cf.set(t,e),e)}/**
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
 */class Xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Xg.type="NONE";const Pf=Xg;/**
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
 */function ho(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ho(this.userKey,s.apiKey,i),this.fullPersistenceKey=ho("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bo(this.auth,{idToken:e}).catch(()=>{});return n?kt._fromGetAccountInfoResponse(this.auth,n,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(an(Pf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||an(Pf);const a=ho(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const d=await h._get(a);if(d){let g;if(typeof d=="string"){const E=await Bo(e,{idToken:d}).catch(()=>{});if(!E)break;g=await kt._fromGetAccountInfoResponse(e,E,d)}else g=kt._fromJSON(e,d);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Xr(i,e,r))}}/**
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
 */function Vf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rm(e))return"Blackberry";if(sm(e))return"Webos";if(Zg(e))return"Safari";if((e.includes("chrome/")||em(e))&&!e.includes("edge/"))return"Chrome";if(nm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yg(t=lt()){return/firefox\//i.test(t)}function Zg(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function em(t=lt()){return/crios\//i.test(t)}function tm(t=lt()){return/iemobile/i.test(t)}function nm(t=lt()){return/android/i.test(t)}function rm(t=lt()){return/blackberry/i.test(t)}function sm(t=lt()){return/webos/i.test(t)}function Hl(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zA(t=lt()){var e;return Hl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function WA(){return jE()&&document.documentMode===10}function im(t=lt()){return Hl(t)||nm(t)||sm(t)||rm(t)||/windows phone/i.test(t)||tm(t)}/**
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
 */function om(t,e=[]){let n;switch(t){case"Browser":n=Vf(lt());break;case"Worker":n=`${Vf(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
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
 */class KA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function GA(t,e={}){return _s(t,"GET","/v2/passwordPolicy",$l(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const QA=6;class JA{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??QA,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class XA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Df(this),this.idTokenSubscription=new Df(this),this.beforeStateQueue=new KA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=an(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bo(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(gr(this));const n=e?wt(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(an(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GA(this),n=new JA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new wi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await HA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&an(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[an(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=om(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&RA(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ya(t){return wt(t)}class Df{constructor(e){this.auth=e,this.observer=null,this.addObserver=QE(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YA(t){zl=t}function ZA(t){return zl.loadJS(t)}function eb(){return zl.gapiScript}function tb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function nb(t,e){const n=ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(mr(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function rb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(an);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sb(t,e,n){const r=ya(t);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=am(e),{host:a,port:c}=ib(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(mr(h,r.config.emulator)&&mr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,hs(a)?(cp(`${i}//${a}${l}`),lp("Auth",!0)):ob()}function am(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ib(t){const e=am(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:kf(a)}}}function kf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ob(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
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
 */async function Yr(t,e){return xA(t,"POST","/v1/accounts:signInWithIdp",$l(t,e))}/**
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
 */const ab="http://localhost";class Tr extends cm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const a=new Tr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:ab,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ai(n)}return e}}/**
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
 */class Wl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Di extends Wl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kn extends Di{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class sn extends Di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
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
 */class Nn extends Di{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */class On extends Di{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
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
 */class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=Nf(r);return new as({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Nf(r);return new as({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Nf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $o extends _n{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$o.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $o(e,n,r,s)}}function lm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$o._fromErrorAndOperation(t,i,e,r):i})}async function cb(t,e,n=!1){const r=await Ei(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return as._forOperation(t,"link",r)}/**
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
 */async function lb(t,e,n=!1){const{auth:r}=t;if(Vt(r.app))return Promise.reject(gr(r));const s="reauthenticate";try{const i=await Ei(t,lm(r,s,e,t),n);ne(i.idToken,r,"internal-error");const a=ql(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(t.uid===c,r,"user-mismatch"),as._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
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
 */async function ub(t,e,n=!1){if(Vt(t.app))return Promise.reject(gr(t));const r="signIn",s=await lm(t,r,e),i=await as._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function hb(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function fb(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function db(t,e,n,r){return wt(t).onAuthStateChanged(e,n,r)}function pb(t){return wt(t).signOut()}const qo="__sak";/**
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
 */class um{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const gb=1e3,mb=10;class hm extends um{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=im(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);WA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,mb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hm.type="LOCAL";const _b=hm;/**
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
 */class fm extends um{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fm.type="SESSION";const dm=fm;/**
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
 */function yb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ea(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await yb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ea.receivers=[];/**
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
 */function Kl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Eb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Kl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Gt(){return window}function Tb(t){Gt().location.href=t}/**
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
 */function pm(){return typeof Gt().WorkerGlobalScope<"u"&&typeof Gt().importScripts=="function"}async function vb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ib(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function wb(){return pm()?self:null}/**
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
 */const gm="firebaseLocalStorageDb",Ab=1,Ho="firebaseLocalStorage",mm="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ta(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function bb(){const t=indexedDB.deleteDatabase(gm);return new ki(t).toPromise()}function $c(){const t=indexedDB.open(gm,Ab);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ho,{keyPath:mm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ho)?e(r):(r.close(),await bb(),e(await $c()))})})}async function Of(t,e,n){const r=Ta(t,!0).put({[mm]:e,value:n});return new ki(r).toPromise()}async function Sb(t,e){const n=Ta(t,!1).get(e),r=await new ki(n).toPromise();return r===void 0?null:r.value}function xf(t,e){const n=Ta(t,!0).delete(e);return new ki(n).toPromise()}const Rb=800,Cb=3;class _m{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $c(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ea._getInstance(wb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await vb(),!this.activeServiceWorker)return;this.sender=new Eb(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $c();return await Of(e,qo,"1"),await xf(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Of(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Sb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ta(s,!1).getAll();return new ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_m.type="LOCAL";const Pb=_m;new Vi(3e4,6e4);/**
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
 */function ym(t,e){return e?an(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gl extends cm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vb(t){return ub(t.auth,new Gl(t),t.bypassAuthState)}function Db(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),lb(n,new Gl(t),t.bypassAuthState)}async function kb(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),cb(n,new Gl(t),t.bypassAuthState)}/**
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
 */class Em{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vb;case"linkViaPopup":case"linkViaRedirect":return kb;case"reauthViaPopup":case"reauthViaRedirect":return Db;default:Yt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Nb=new Vi(2e3,1e4);async function Ob(t,e,n){if(Vt(t.app))return Promise.reject(Ot(t,"operation-not-supported-in-this-environment"));const r=ya(t);CA(t,e,Wl);const s=ym(r,n);return new fr(r,"signInViaPopup",e,s).executeNotNull()}class fr extends Em{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,fr.currentPopupAction&&fr.currentPopupAction.cancel(),fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Kl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Nb.get())};e()}}fr.currentPopupAction=null;/**
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
 */const xb="pendingRedirect",fo=new Map;class Mb extends Em{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=fo.get(this.auth._key());if(!e){try{const r=await Lb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}fo.set(this.auth._key(),e)}return this.bypassAuthState||fo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Lb(t,e){const n=Bb(e),r=Ub(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Fb(t,e){fo.set(t._key(),e)}function Ub(t){return an(t._redirectPersistence)}function Bb(t){return ho(xb,t.config.apiKey,t.name)}async function jb(t,e,n=!1){if(Vt(t.app))return Promise.reject(gr(t));const r=ya(t),s=ym(r,e),a=await new Mb(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const $b=600*1e3;class qb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tm(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$b&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mf(e))}saveEventToCache(e){this.cachedEventUids.add(Mf(e)),this.lastProcessedEventTime=Date.now()}}function Mf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tm(t);default:return!1}}/**
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
 */async function zb(t,e={}){return _s(t,"GET","/v1/projects",e)}/**
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
 */const Wb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kb=/^https?/;async function Gb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zb(t);for(const n of e)try{if(Qb(n))return}catch{}Yt(t,"unauthorized-domain")}function Qb(t){const e=Bc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Kb.test(n))return!1;if(Wb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Jb=new Vi(3e4,6e4);function Lf(){const t=Gt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Xb(t){return new Promise((e,n)=>{var s,i,a;function r(){Lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lf(),n(Ot(t,"network-request-failed"))},timeout:Jb.get()})}if((i=(s=Gt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Gt().gapi)!=null&&a.load)r();else{const c=tb("iframefcb");return Gt()[c]=()=>{gapi.load?r():n(Ot(t,"network-request-failed"))},ZA(`${eb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw po=null,e})}let po=null;function Yb(t){return po=po||Xb(t),po}/**
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
 */const Zb=new Vi(5e3,15e3),eS="__/auth/iframe",tS="emulator/auth/iframe",nS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sS(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jl(e,tS):`https://${t.config.authDomain}/${eS}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=rS.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ai(r).slice(1)}`}async function iS(t){const e=await Yb(t),n=Gt().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:sS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nS,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ot(t,"network-request-failed"),c=Gt().setTimeout(()=>{i(a)},Zb.get());function l(){Gt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const oS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aS=500,cS=600,lS="_blank",uS="http://localhost";class Ff{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hS(t,e,n,r=aS,s=cS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...oS,width:r.toString(),height:s.toString(),top:i,left:a},h=lt().toLowerCase();n&&(c=em(h)?lS:n),Yg(h)&&(e=e||uS,l.scrollbars="yes");const d=Object.entries(l).reduce((E,[b,D])=>`${E}${b}=${D},`,"");if(zA(h)&&c!=="_self")return fS(e||"",c),new Ff(null);const g=window.open(e||"",c,d);ne(g,t,"popup-blocked");try{g.focus()}catch{}return new Ff(g)}function fS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const dS="__/auth/handler",pS="emulator/auth/handler",gS=encodeURIComponent("fac");async function Uf(t,e,n,r,s,i){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof Wl){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",GE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof Di){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),h=l?`#${gS}=${encodeURIComponent(l)}`:"";return`${mS(t)}?${Ai(c).slice(1)}${h}`}function mS({config:t}){return t.emulator?jl(t,pS):`https://${t.authDomain}/${dS}`}/**
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
 */const rc="webStorageSupport";class _S{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=dm,this._completeRedirectFn=jb,this._overrideRedirectResult=Fb}async _openPopup(e,n,r,s){var a;gn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Uf(e,n,r,Bc(),s);return hS(e,i,Kl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Uf(e,n,r,Bc(),s);return Tb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iS(e),r=new qb(e);return n.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[rc];i!==void 0&&n(!!i),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Gb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return im()||Zg()||Hl()}}const yS=_S;var Bf="@firebase/auth",jf="1.11.1";/**
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
 */class ES{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vS(t){es(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:om(t)},h=new XA(r,s,i,l);return rb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new _r("auth-internal",e=>{const n=ya(e.getProvider("auth").getImmediate());return(r=>new ES(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Bf,jf,TS(t)),Bn(Bf,jf,"esm2020")}/**
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
 */const IS=300,wS=ap("authIdTokenMaxAge")||IS;let $f=null;const AS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wS)return;const s=n==null?void 0:n.token;$f!==s&&($f=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bS(t=dp()){const e=ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nb(t,{popupRedirectResolver:yS,persistence:[Pb,_b,dm]}),r=ap("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=AS(i.toString());fb(n,a,()=>a(n.currentUser)),hb(n,c=>a(c))}}const s=ip("auth");return s&&sb(n,`http://${s}`),n}function SS(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}YA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",SS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vS("Browser");const Yn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},RS={},CS={class:"carafe"};function PS(t,e){return pe(),Se("div",CS,[to(t.$slots,"top",{},void 0,!0),to(t.$slots,"mid",{},void 0,!0),to(t.$slots,"bottom",{},void 0,!0)])}const VS=Yn(RS,[["render",PS],["__scopeId","data-v-8709b092"]]),DS={},kS={class:"mug"};function NS(t,e){return pe(),Se("div",kS,[to(t.$slots,"default")])}const OS=Yn(DS,[["render",NS]]);async function xS(t,e,n,r,s){const i=(r||"").trim().replace(/\s+/g,"_");if(s){const a=vf(vr,"users",s,"beverages",i);await bf(a,{base:t,creamer:e,syrup:n,name:r})}else{const a=vf(vr,"beverages",i);await bf(a,{base:t,creamer:e,syrup:n,name:r})}return i}async function MS(t){const e=[],n=t?yi(vr,"users",t,"beverages"):yi(vr,"beverages");return(await _a(n)).forEach(s=>{const i=s.data();e.push({id:s.id,name:i.name,base:i.base,creamer:i.creamer,syrup:i.syrup})}),console.log(e),e}async function LS(){const t=[],e=yi(vr,"bases");return(await _a(e)).forEach(r=>{const s=r.data();t.push({id:r.id,name:s.name,color:s.color})}),console.log(t),t}async function FS(){const t=[],e=yi(vr,"creamers");return(await _a(e)).forEach(r=>{const s=r.data();t.push({id:r.id,name:s.name,color:s.color})}),console.log(t),t}async function US(){const t=[],e=yi(vr,"syrups");return(await _a(e)).forEach(r=>{const s=r.data();t.push({id:r.id,name:s.name,color:s.color})}),console.log(t),t}const BS=us("tempStore",{state:()=>({temps:["Hot","Cold"],selectedTemp:"Cold"}),getters:{currentTemp:t=>t.selectedTemp},actions:{setCurrentTemp(t){this.selectedTemp=t}}}),vm=us("baseType",{state:()=>({bases:[],selectedBaseId:"b1"}),getters:{getBaseById:t=>e=>t.bases.find(n=>n.id===e),currentBase:t=>t.bases.find(e=>e.id===t.selectedBaseId),returnBaseIds:t=>{const e=[];for(let n=0;n<t.bases.length;n++){const r=t.bases[n];e.push(r.id)}return e}},actions:{async loadBases(){const t=await LS();this.bases=t},setCurrentBase(t){this.selectedBaseId=t}}}),Im=us("creamerType",{state:()=>({creamers:[],selectedCreamerId:"c1"}),getters:{getCreamerById:t=>e=>t.creamers.find(n=>n.id===e),currentCreamer:t=>t.creamers.find(e=>e.id===t.selectedCreamerId)},actions:{async loadCreamers(){const t=await FS();this.creamers=t},setCurrentCreamer(t){this.selectedCreamerId=t}}}),wm=us("syrupType",{state:()=>({syrups:[],selectedSyrupId:"s1"}),getters:{getSyrupById:t=>e=>t.syrups.find(n=>n.id===e),currentSyrup:t=>t.syrups.find(e=>e.id===t.selectedSyrupId)},actions:{async loadSyrups(){const t=await US();this.syrups=t},setCurrentSyrup(t){this.selectedSyrupId=t}}}),jS=us("savedBeverages",{state:()=>({beverages:[]}),getters:{getBeverages:t=>t.beverages,getBeverageByName:t=>e=>t.beverages.find(n=>n.name===e)},actions:{addBeverage(t){this.beverages.push(t)}}}),$S=ls({__name:"Syrup",setup(t){const e=wm(),n=e.syrups,r=gt(()=>e.currentSyrup),s=gt(()=>r.value&&r.value.color?r.value.color:n&&n.length>0?n[0].color:"#c6c6c6");return(i,a)=>(pe(),Se("div",{class:"syrup",style:cs({backgroundColor:s.value})},null,4))}}),qS=Yn($S,[["__scopeId","data-v-cb3f08eb"]]),HS=ls({__name:"Base",setup(t){const e=vm(),n=e.bases,r=gt(()=>e.currentBase),s=gt(()=>r.value&&r.value.color?r.value.color:n&&n.length>0?n[0].color:"#c6c6c6");return(i,a)=>(pe(),Se("div",{class:"baseBeverage",style:cs({backgroundColor:s.value})},null,4))}}),zS=Yn(HS,[["__scopeId","data-v-8f8c1719"]]),WS={class:"foam"},KS=ls({__name:"Creamer",setup(t){const e=Im(),n=e.creamers,r=gt(()=>e.currentCreamer),s=gt(()=>r.value&&r.value.color?r.value.color:n&&n.length>0?n[0].color:"#c6c6c6");return(i,a)=>(pe(),Se("div",{class:"froth",style:cs({backgroundColor:s.value})},[(pe(),Se(xe,null,Vn(5,()=>Ee("div",WS)),64))],4))}}),GS=Yn(KS,[["__scopeId","data-v-bb0beaa6"]]),QS={},JS={id:"steam"},XS={class:"stream"};function YS(t,e){return pe(),Se("div",JS,[(pe(),Se(xe,null,Vn(3,()=>Ee("div",XS)),64))])}const ZS=Yn(QS,[["render",YS]]),eR={},tR={id:"condensation"},nR={class:"flake"};function rR(t,e){return pe(),Se("div",tR,[(pe(),Se(xe,null,Vn(3,()=>Ee("div",nR)),64))])}const sR=Yn(eR,[["render",rR]]),iR=ls({__name:"Beverage",props:{isIced:{type:Boolean},creamer:{type:Boolean},syrup:{type:Boolean}},setup(t){return(e,n)=>(pe(),Dn(OS,null,{default:Us(()=>[t.isIced?(pe(),Dn(sR,{key:0})):(pe(),Dn(ZS,{key:1})),mt(VS,null,{top:Us(()=>[t.creamer?(pe(),Dn(GS,{key:0})):pc("",!0)]),mid:Us(()=>[t.syrup?(pe(),Dn(qS,{key:0})):pc("",!0)]),bottom:Us(()=>[mt(zS)]),_:1})]),_:1}))}}),Am=us("auth",()=>{const t=qr(null),e=qr(!0),n=qr(null),r=()=>{db(sc,c=>{t.value=c,e.value=!1})},s=async()=>{try{n.value=null;const c=new sn;c.setCustomParameters({prompt:"select_account"});const l=await Ob(sc,c);return t.value=l.user,l.user}catch(c){throw n.value=c.message,console.error("Error signing in with Google:",c),c}},i=async()=>{try{n.value=null,await pb(sc),t.value=null}catch(c){throw n.value=c.message,console.error("Error signing out:",c),c}};return{user:t,loading:e,error:n,initAuth:r,signInWithGoogle:s,signOutUser:i,switchAccount:async()=>{try{await i(),await s()}catch(c){console.error("Error switching account:",c)}}}}),oR={class:"auth-container"},aR={key:0,class:"auth-loading"},cR={key:1,class:"auth-signed-out"},lR={key:0,class:"error-message"},uR={key:2,class:"auth-signed-in"},hR={class:"user-info"},fR={class:"user-details"},dR={class:"user-name"},pR=ls({__name:"Auth",setup(t){const e=Am(),n=async()=>{try{await e.signInWithGoogle()}catch(i){console.error("Sign in failed:",i)}},r=async()=>{try{await e.signOutUser()}catch(i){console.error("Sign out failed:",i)}},s=async()=>{try{await e.switchAccount()}catch(i){console.error("Switch account failed:",i)}};return(i,a)=>(pe(),Se("div",oR,[$e(e).loading?(pe(),Se("div",aR," Loading authentication... ")):$e(e).user?(pe(),Se("div",uR,[Ee("div",hR,[Ee("div",fR,[Ee("p",dR,Pn($e(e).user.displayName),1)])]),Ee("div",{class:"auth-actions"},[Ee("button",{onClick:s,class:"switch-account-btn"}," Switch Account "),Ee("button",{onClick:r,class:"sign-out-btn"}," Sign Out ")])])):(pe(),Se("div",cR,[a[0]||(a[0]=Ee("h2",null,"Welcome to Custom Drink Maker",-1)),a[1]||(a[1]=Ee("p",null,"Please sign in to save and manage your beverages",-1)),Ee("button",{onClick:n,class:"sign-in-btn"}," Sign in with Google "),$e(e).error?(pe(),Se("p",lR,Pn($e(e).error),1)):pc("",!0)]))]))}}),gR=Yn(pR,[["__scopeId","data-v-0a55e624"]]),mR=["id","value"],_R=["id","value"],yR=["id","value"],ER=["id","value"],TR=["value","onChange"],vR=ls({__name:"App",setup(t){const e=Am(),n=BS(),r=vm(),s=Im(),i=wm(),a=jS();e.initAuth(),Js(()=>e.user,async $=>{$?await c($.uid):a.beverages=[]});const c=async $=>{try{const H=await MS($);a.beverages=H.map(j=>{var z,te,me,v;return{name:j.name,temp:((z=j.base)==null?void 0:z.temp)||j.temp||"Cold",baseId:((te=j.base)==null?void 0:te.id)||j.baseId||"b1",creamerId:((me=j.creamer)==null?void 0:me.id)||j.creamerId||"c1",syrupId:((v=j.syrup)==null?void 0:v.id)||j.syrupId||"s1"}})}catch(H){console.error("Failed to load user beverages",H)}};Sd(async()=>{try{await Promise.all([r.loadBases(),s.loadCreamers(),i.loadSyrups()]),e.user&&await c(e.user.uid)}catch($){console.error("Failed to initialize app data",$)}});const l=qr(""),h=gt(()=>n.selectedTemp==="Cold"),d=gt(()=>s.selectedCreamerId!=="c1"),g=gt(()=>i.selectedSyrupId!=="s1"),E=gt(()=>r.currentBase),b=gt(()=>s.currentCreamer),D=gt(()=>i.currentSyrup),L=async()=>{if(l.value){if(!e.user){alert("Please sign in to save beverages");return}try{if(!E.value||!b.value||!D.value){console.error("Cannot save beverage -- one of base/creamer/syrup is not selected");return}await xS(E.value,b.value,D.value,l.value,e.user.uid),await c(e.user.uid)}catch($){console.error("Failed to save beverage to Firestore",$)}l.value=""}},B=$=>{n.setCurrentTemp($.temp),r.setCurrentBase($.baseId),s.setCurrentCreamer($.creamerId),i.setCurrentSyrup($.syrupId)};return($,H)=>(pe(),Se(xe,null,[Ee("div",null,[mt(iR,{isIced:h.value,creamer:d.value,syrup:g.value},null,8,["isIced","creamer","syrup"]),Ee("ul",null,[Ee("li",null,[(pe(!0),Se(xe,null,Vn($e(n).temps,j=>(pe(),Se("label",{key:j},[Ls(Ee("input",{type:"radio",name:"temperature",id:`r${j}`,value:j,"onUpdate:modelValue":H[0]||(H[0]=z=>$e(n).selectedTemp=z)},null,8,mR),[[Wi,$e(n).selectedTemp]]),Mr(" "+Pn(j),1)]))),128))]),Ee("li",null,[(pe(!0),Se(xe,null,Vn($e(r).bases,j=>(pe(),Se("label",{key:j.id},[Ls(Ee("input",{type:"radio",name:"base.name",id:j.id,value:j.id,"onUpdate:modelValue":H[1]||(H[1]=z=>$e(r).selectedBaseId=z)},null,8,_R),[[Wi,$e(r).selectedBaseId]]),Mr(" "+Pn(j.name),1)]))),128))]),Ee("li",null,[(pe(!0),Se(xe,null,Vn($e(s).creamers,j=>(pe(),Se("label",{key:j.id},[Ls(Ee("input",{type:"radio",name:"cream.name",id:j.id,value:j.id,"onUpdate:modelValue":H[2]||(H[2]=z=>$e(s).selectedCreamerId=z)},null,8,yR),[[Wi,$e(s).selectedCreamerId]]),Mr(" "+Pn(j.name),1)]))),128))]),Ee("li",null,[(pe(!0),Se(xe,null,Vn($e(i).syrups,j=>(pe(),Se("label",{key:j.id},[Ls(Ee("input",{type:"radio",name:"syrup.name",id:j.id,value:j.id,"onUpdate:modelValue":H[3]||(H[3]=z=>$e(i).selectedSyrupId=z)},null,8,ER),[[Wi,$e(i).selectedSyrupId]]),Mr(" "+Pn(j.name),1)]))),128))])])]),Ee("div",null,[Ls(Ee("input",{"onUpdate:modelValue":H[4]||(H[4]=j=>l.value=j),type:"text",placeholder:"Enter Beverage Name"},null,512),[[uE,l.value]]),Ee("button",{onClick:L},"Save Beverage"),Ee("div",null,[H[5]||(H[5]=Ee("h3",null,"Saved Beverages:",-1)),(pe(!0),Se(xe,null,Vn($e(a).beverages,j=>(pe(),Se("label",{key:j.name},[Ee("input",{type:"radio",name:"savedBeverage",value:j.name,onChange:z=>B(j)},null,40,TR),Mr(" "+Pn(j.name),1)]))),128))]),mt(gR)])],64))}}),IR=_E(),wR={apiKey:"AIzaSyDVjWk9JSeRIvQyJh-w9_YjFmP98w5NdKc",authDomain:"cis371-78119.firebaseapp.com",projectId:"cis371-78119",storageBucket:"cis371-78119.firebasestorage.app",messagingSenderId:"106361976588",appId:"1:106361976588:web:9eb1d501e3a88c07a43b29"},bm=fp(wR),vr=lA(bm),sc=bS(bm);pE(vR).use(IR).mount("#app");
