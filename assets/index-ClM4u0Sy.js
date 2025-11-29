(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function b_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Rh={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function mS(){if(rg)return jo;rg=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return jo.Fragment=t,jo.jsx=i,jo.jsxs=i,jo}var sg;function xS(){return sg||(sg=1,Rh.exports=mS()),Rh.exports}var Jt=xS(),wh={exports:{}},ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function gS(){if(og)return ge;og=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),_=Symbol.iterator;function S(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function v(B,rt,Ct){this.props=B,this.context=rt,this.refs=b,this.updater=Ct||E}v.prototype.isReactComponent={},v.prototype.setState=function(B,rt){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,rt,"setState")},v.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function P(){}P.prototype=v.prototype;function L(B,rt,Ct){this.props=B,this.context=rt,this.refs=b,this.updater=Ct||E}var H=L.prototype=new P;H.constructor=L,T(H,v.prototype),H.isPureReactComponent=!0;var k=Array.isArray;function z(){}var I={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function D(B,rt,Ct){var Lt=Ct.ref;return{$$typeof:s,type:B,key:rt,ref:Lt!==void 0?Lt:null,props:Ct}}function C(B,rt){return D(B.type,rt,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function et(B){var rt={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(Ct){return rt[Ct]})}var ht=/\/+/g;function gt(B,rt){return typeof B=="object"&&B!==null&&B.key!=null?et(""+B.key):rt.toString(36)}function xt(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(z,z):(B.status="pending",B.then(function(rt){B.status==="pending"&&(B.status="fulfilled",B.value=rt)},function(rt){B.status==="pending"&&(B.status="rejected",B.reason=rt)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function F(B,rt,Ct,Lt,Xt){var N=typeof B;(N==="undefined"||N==="boolean")&&(B=null);var U=!1;if(B===null)U=!0;else switch(N){case"bigint":case"string":case"number":U=!0;break;case"object":switch(B.$$typeof){case s:case t:U=!0;break;case g:return U=B._init,F(U(B._payload),rt,Ct,Lt,Xt)}}if(U)return Xt=Xt(B),U=Lt===""?"."+gt(B,0):Lt,k(Xt)?(Ct="",U!=null&&(Ct=U.replace(ht,"$&/")+"/"),F(Xt,rt,Ct,"",function(nt){return nt})):Xt!=null&&(G(Xt)&&(Xt=C(Xt,Ct+(Xt.key==null||B&&B.key===Xt.key?"":(""+Xt.key).replace(ht,"$&/")+"/")+U)),rt.push(Xt)),1;U=0;var Y=Lt===""?".":Lt+":";if(k(B))for(var $=0;$<B.length;$++)Lt=B[$],N=Y+gt(Lt,$),U+=F(Lt,rt,Ct,N,Xt);else if($=S(B),typeof $=="function")for(B=$.call(B),$=0;!(Lt=B.next()).done;)Lt=Lt.value,N=Y+gt(Lt,$++),U+=F(Lt,rt,Ct,N,Xt);else if(N==="object"){if(typeof B.then=="function")return F(xt(B),rt,Ct,Lt,Xt);throw rt=String(B),Error("Objects are not valid as a React child (found: "+(rt==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":rt)+"). If you meant to render a collection of children, use an array instead.")}return U}function Z(B,rt,Ct){if(B==null)return B;var Lt=[],Xt=0;return F(B,Lt,"","",function(N){return rt.call(Ct,N,Xt++)}),Lt}function j(B){if(B._status===-1){var rt=B._result;rt=rt(),rt.then(function(Ct){(B._status===0||B._status===-1)&&(B._status=1,B._result=Ct)},function(Ct){(B._status===0||B._status===-1)&&(B._status=2,B._result=Ct)}),B._status===-1&&(B._status=0,B._result=rt)}if(B._status===1)return B._result.default;throw B._result}var yt=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var rt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(rt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},St={map:Z,forEach:function(B,rt,Ct){Z(B,function(){rt.apply(this,arguments)},Ct)},count:function(B){var rt=0;return Z(B,function(){rt++}),rt},toArray:function(B){return Z(B,function(rt){return rt})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ge.Activity=x,ge.Children=St,ge.Component=v,ge.Fragment=i,ge.Profiler=l,ge.PureComponent=L,ge.StrictMode=r,ge.Suspense=m,ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ge.__COMPILER_RUNTIME={__proto__:null,c:function(B){return I.H.useMemoCache(B)}},ge.cache=function(B){return function(){return B.apply(null,arguments)}},ge.cacheSignal=function(){return null},ge.cloneElement=function(B,rt,Ct){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Lt=T({},B.props),Xt=B.key;if(rt!=null)for(N in rt.key!==void 0&&(Xt=""+rt.key),rt)!K.call(rt,N)||N==="key"||N==="__self"||N==="__source"||N==="ref"&&rt.ref===void 0||(Lt[N]=rt[N]);var N=arguments.length-2;if(N===1)Lt.children=Ct;else if(1<N){for(var U=Array(N),Y=0;Y<N;Y++)U[Y]=arguments[Y+2];Lt.children=U}return D(B.type,Xt,Lt)},ge.createContext=function(B){return B={$$typeof:h,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},ge.createElement=function(B,rt,Ct){var Lt,Xt={},N=null;if(rt!=null)for(Lt in rt.key!==void 0&&(N=""+rt.key),rt)K.call(rt,Lt)&&Lt!=="key"&&Lt!=="__self"&&Lt!=="__source"&&(Xt[Lt]=rt[Lt]);var U=arguments.length-2;if(U===1)Xt.children=Ct;else if(1<U){for(var Y=Array(U),$=0;$<U;$++)Y[$]=arguments[$+2];Xt.children=Y}if(B&&B.defaultProps)for(Lt in U=B.defaultProps,U)Xt[Lt]===void 0&&(Xt[Lt]=U[Lt]);return D(B,N,Xt)},ge.createRef=function(){return{current:null}},ge.forwardRef=function(B){return{$$typeof:d,render:B}},ge.isValidElement=G,ge.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:j}},ge.memo=function(B,rt){return{$$typeof:p,type:B,compare:rt===void 0?null:rt}},ge.startTransition=function(B){var rt=I.T,Ct={};I.T=Ct;try{var Lt=B(),Xt=I.S;Xt!==null&&Xt(Ct,Lt),typeof Lt=="object"&&Lt!==null&&typeof Lt.then=="function"&&Lt.then(z,yt)}catch(N){yt(N)}finally{rt!==null&&Ct.types!==null&&(rt.types=Ct.types),I.T=rt}},ge.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ge.use=function(B){return I.H.use(B)},ge.useActionState=function(B,rt,Ct){return I.H.useActionState(B,rt,Ct)},ge.useCallback=function(B,rt){return I.H.useCallback(B,rt)},ge.useContext=function(B){return I.H.useContext(B)},ge.useDebugValue=function(){},ge.useDeferredValue=function(B,rt){return I.H.useDeferredValue(B,rt)},ge.useEffect=function(B,rt){return I.H.useEffect(B,rt)},ge.useEffectEvent=function(B){return I.H.useEffectEvent(B)},ge.useId=function(){return I.H.useId()},ge.useImperativeHandle=function(B,rt,Ct){return I.H.useImperativeHandle(B,rt,Ct)},ge.useInsertionEffect=function(B,rt){return I.H.useInsertionEffect(B,rt)},ge.useLayoutEffect=function(B,rt){return I.H.useLayoutEffect(B,rt)},ge.useMemo=function(B,rt){return I.H.useMemo(B,rt)},ge.useOptimistic=function(B,rt){return I.H.useOptimistic(B,rt)},ge.useReducer=function(B,rt,Ct){return I.H.useReducer(B,rt,Ct)},ge.useRef=function(B){return I.H.useRef(B)},ge.useState=function(B){return I.H.useState(B)},ge.useSyncExternalStore=function(B,rt,Ct){return I.H.useSyncExternalStore(B,rt,Ct)},ge.useTransition=function(){return I.H.useTransition()},ge.version="19.2.0",ge}var lg;function lp(){return lg||(lg=1,wh.exports=gS()),wh.exports}var Qt=lp();const _S=b_(Qt);var Ch={exports:{}},Zo={},Dh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function vS(){return cg||(cg=1,(function(s){function t(F,Z){var j=F.length;F.push(Z);t:for(;0<j;){var yt=j-1>>>1,St=F[yt];if(0<l(St,Z))F[yt]=Z,F[j]=St,j=yt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var Z=F[0],j=F.pop();if(j!==Z){F[0]=j;t:for(var yt=0,St=F.length,B=St>>>1;yt<B;){var rt=2*(yt+1)-1,Ct=F[rt],Lt=rt+1,Xt=F[Lt];if(0>l(Ct,j))Lt<St&&0>l(Xt,Ct)?(F[yt]=Xt,F[Lt]=j,yt=Lt):(F[yt]=Ct,F[rt]=j,yt=rt);else if(Lt<St&&0>l(Xt,j))F[yt]=Xt,F[Lt]=j,yt=Lt;else break t}}return Z}function l(F,Z){var j=F.sortIndex-Z.sortIndex;return j!==0?j:F.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,x=null,_=3,S=!1,E=!1,T=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function H(F){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=F)r(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function k(F){if(T=!1,H(F),!E)if(i(m)!==null)E=!0,z||(z=!0,et());else{var Z=i(p);Z!==null&&xt(k,Z.startTime-F)}}var z=!1,I=-1,K=5,D=-1;function C(){return b?!0:!(s.unstable_now()-D<K)}function G(){if(b=!1,z){var F=s.unstable_now();D=F;var Z=!0;try{t:{E=!1,T&&(T=!1,P(I),I=-1),S=!0;var j=_;try{e:{for(H(F),x=i(m);x!==null&&!(x.expirationTime>F&&C());){var yt=x.callback;if(typeof yt=="function"){x.callback=null,_=x.priorityLevel;var St=yt(x.expirationTime<=F);if(F=s.unstable_now(),typeof St=="function"){x.callback=St,H(F),Z=!0;break e}x===i(m)&&r(m),H(F)}else r(m);x=i(m)}if(x!==null)Z=!0;else{var B=i(p);B!==null&&xt(k,B.startTime-F),Z=!1}}break t}finally{x=null,_=j,S=!1}Z=void 0}}finally{Z?et():z=!1}}}var et;if(typeof L=="function")et=function(){L(G)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,gt=ht.port2;ht.port1.onmessage=G,et=function(){gt.postMessage(null)}}else et=function(){v(G,0)};function xt(F,Z){I=v(function(){F(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(F){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var j=_;_=Z;try{return F()}finally{_=j}},s.unstable_requestPaint=function(){b=!0},s.unstable_runWithPriority=function(F,Z){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=_;_=F;try{return Z()}finally{_=j}},s.unstable_scheduleCallback=function(F,Z,j){var yt=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?yt+j:yt):j=yt,F){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=j+St,F={id:g++,callback:Z,priorityLevel:F,startTime:j,expirationTime:St,sortIndex:-1},j>yt?(F.sortIndex=j,t(p,F),i(m)===null&&F===i(p)&&(T?(P(I),I=-1):T=!0,xt(k,j-yt))):(F.sortIndex=St,t(m,F),E||S||(E=!0,z||(z=!0,et()))),F},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(F){var Z=_;return function(){var j=_;_=Z;try{return F.apply(this,arguments)}finally{_=j}}}})(Uh)),Uh}var ug;function yS(){return ug||(ug=1,Dh.exports=vS()),Dh.exports}var Lh={exports:{}},Wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function SS(){if(fg)return Wn;fg=1;var s=lp();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Wn.flushSync=function(m){var p=h.T,g=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=g,r.d.f()}},Wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:_,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Wn.requestFormReset=function(m){r.d.r(m)},Wn.unstable_batchedUpdates=function(m,p){return m(p)},Wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Wn.version="19.2.0",Wn}var hg;function bS(){if(hg)return Lh.exports;hg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Lh.exports=SS(),Lh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function MS(){if(dg)return Zo;dg=1;var s=yS(),t=lp(),i=bS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,o=f;break}if(A===o){y=!0,o=u,a=f;break}A=A.sibling}if(!y){for(A=f.child;A;){if(A===a){y=!0,a=f,o=u;break}if(A===o){y=!0,o=f,a=u;break}A=A.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),L=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function gt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case z:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case L:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case H:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:gt(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return gt(e(n))}catch{}}return null}var xt=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},yt=[],St=-1;function B(e){return{current:e}}function rt(e){0>St||(e.current=yt[St],yt[St]=null,St--)}function Ct(e,n){St++,yt[St]=e.current,e.current=n}var Lt=B(null),Xt=B(null),N=B(null),U=B(null);function Y(e,n){switch(Ct(N,n),Ct(Xt,e),Ct(Lt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?wx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=wx(n),e=Cx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}rt(Lt),Ct(Lt,e)}function $(){rt(Lt),rt(Xt),rt(N)}function nt(e){e.memoizedState!==null&&Ct(U,e);var n=Lt.current,a=Cx(n,e.type);n!==a&&(Ct(Xt,e),Ct(Lt,a))}function ut(e){Xt.current===e&&(rt(Lt),rt(Xt)),U.current===e&&(rt(U),Xo._currentValue=j)}var Rt,bt;function _t(e){if(Rt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Rt=n&&n[1]||"",bt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+e+bt}var O=!1;function Ot(e,n){if(!e||O)return"";O=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var wt=function(){throw Error()};if(Object.defineProperty(wt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(wt,[])}catch(mt){var ft=mt}Reflect.construct(e,[],wt)}else{try{wt.call()}catch(mt){ft=mt}e.call(wt.prototype)}}else{try{throw Error()}catch(mt){ft=mt}(wt=e())&&typeof wt.catch=="function"&&wt.catch(function(){})}}catch(mt){if(mt&&ft&&typeof mt.stack=="string")return[mt.stack,ft.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),y=f[0],A=f[1];if(y&&A){var V=y.split(`
`),ot=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ot.length&&!ot[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ot.length)for(o=V.length-1,u=ot.length-1;1<=o&&0<=u&&V[o]!==ot[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ot[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ot[u]){var vt=`
`+V[o].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=o&&0<=u);break}}}finally{O=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?_t(a):""}function Et(e,n){switch(e.tag){case 26:case 27:case 5:return _t(e.type);case 16:return _t("Lazy");case 13:return e.child!==n&&n!==null?_t("Suspense Fallback"):_t("Suspense");case 19:return _t("SuspenseList");case 0:case 15:return Ot(e.type,!1);case 11:return Ot(e.type.render,!1);case 1:return Ot(e.type,!0);case 31:return _t("Activity");default:return""}}function me(e){try{var n="",a=null;do n+=Et(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var zt=Object.prototype.hasOwnProperty,ue=s.unstable_scheduleCallback,Zt=s.unstable_cancelCallback,kt=s.unstable_shouldYield,R=s.unstable_requestPaint,M=s.unstable_now,q=s.unstable_getCurrentPriorityLevel,it=s.unstable_ImmediatePriority,pt=s.unstable_UserBlockingPriority,at=s.unstable_NormalPriority,Pt=s.unstable_LowPriority,Nt=s.unstable_IdlePriority,Wt=s.log,Gt=s.unstable_setDisableYieldValue,Mt=null,Dt=null;function qt(e){if(typeof Wt=="function"&&Gt(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(Mt,e)}catch{}}var Yt=Math.clz32?Math.clz32:X,Vt=Math.log,re=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Vt(e)/re|0)|0}var It=256,Ft=262144,Bt=4194304;function Ut(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function At(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=Ut(o):(y&=A,y!==0?u=Ut(y):a||(a=A&~e,a!==0&&(u=Ut(a))))):(A=o&~f,A!==0?u=Ut(A):y!==0?u=Ut(y):a||(a=o&~e,a!==0&&(u=Ut(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function pe(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ge(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Le(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Tn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function te(e,n,a,o,u,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,V=e.expirationTimes,ot=e.hiddenUpdates;for(a=y&~a;0<a;){var vt=31-Yt(a),wt=1<<vt;A[vt]=0,V[vt]=-1;var ft=ot[vt];if(ft!==null)for(ot[vt]=null,vt=0;vt<ft.length;vt++){var mt=ft[vt];mt!==null&&(mt.lane&=-536870913)}a&=~wt}o!==0&&be(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function be(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Yt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Qe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Yt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function un(e,n){var a=n&-n;return a=(a&42)!==0?1:le(a),(a&(e.suspendedLanes|n))!==0?0:a}function le(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Te(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Je(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:Jx(e.type))}function fn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var rn=Math.random().toString(36).slice(2),$e="__reactFiber$"+rn,pn="__reactProps$"+rn,vi="__reactContainer$"+rn,Oa="__reactEvents$"+rn,Zr="__reactListeners$"+rn,ao="__reactHandles$"+rn,gr="__reactResources$"+rn,ki="__reactMarker$"+rn;function ro(e){delete e[$e],delete e[pn],delete e[Oa],delete e[Zr],delete e[ao]}function za(e){var n=e[$e];if(n)return n;for(var a=e.parentNode;a;){if(n=a[vi]||a[$e]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Px(e);e!==null;){if(a=e[$e])return a;e=Px(e)}return n}e=a,a=e.parentNode}return null}function w(e){if(e=e[$e]||e[vi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function dt(e){var n=e[gr];return n||(n=e[gr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ct(e){e[ki]=!0}var tt=new Set,Ht={};function jt(e,n){ee(e,n),ee(e+"Capture",n)}function ee(e,n){for(Ht[e]=n,e=0;e<n.length;e++)tt.add(n[e])}var ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fe={},de={};function se(e){return zt.call(de,e)?!0:zt.call(fe,e)?!1:ne.test(e)?de[e]=!0:(fe[e]=!0,!1)}function ve(e,n,a){if(se(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Pe(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Fe(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ke(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ce(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function tn(e){if(!e._valueTracker){var n=ke(e)?"checked":"value";e._valueTracker=ce(e,n,""+e[n])}}function Oe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ke(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pa=/[\n"\\]/g;function nn(e){return e.replace(Pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function $i(e,n,a,o,u,f,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ne(n)):e.value!==""+Ne(n)&&(e.value=""+Ne(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?Un(e,y,Ne(n)):a!=null?Un(e,y,Ne(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Ne(A):e.removeAttribute("name")}function an(e,n,a,o,u,f,y,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){tn(e);return}a=a!=null?""+Ne(a):"",n=n!=null?""+Ne(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),tn(e)}function Un(e,n,a){n==="number"&&Dn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function An(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ne(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ln(e,n,a){if(n!=null&&(n=""+Ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ne(a):""}function Fn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(xt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ne(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),tn(e)}function Xi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ta=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tp(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ta.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ap(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Tp(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Tp(e,f,n[f])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(e){return hv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ea(){}var Mu=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Kr=null,Qr=null;function Rp(e){var n=w(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if($i(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+nn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[pn]||null;if(!u)throw Error(r(90));$i(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Oe(o)}break t;case"textarea":Ln(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&An(e,!!a.multiple,n,!1)}}}var Tu=!1;function wp(e,n,a){if(Tu)return e(n,a);Tu=!0;try{var o=e(n);return o}finally{if(Tu=!1,(Kr!==null||Qr!==null)&&(uc(),Kr&&(n=Kr,e=Qr,Qr=Kr=null,Rp(n),e)))for(n=0;n<e.length;n++)Rp(e[n])}}function so(e,n){var a=e.stateNode;if(a===null)return null;var o=a[pn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var na=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(na)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Au=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Au=!1}var Fa=null,Ru=null,El=null;function Cp(){if(El)return El;var e,n=Ru,a=n.length,o,u="value"in Fa?Fa.value:Fa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var y=a-e;for(o=1;o<=y&&n[a-o]===u[f-o];o++);return El=u.slice(e,1<o?1-o:void 0)}function Tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Al(){return!0}function Dp(){return!1}function ti(e){function n(a,o,u,f,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Al:Dp,this.isPropagationStopped=Dp,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),n}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rl=ti(_r),lo=x({},_r,{view:0,detail:0}),dv=ti(lo),wu,Cu,co,wl=x({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(wu=e.screenX-co.screenX,Cu=e.screenY-co.screenY):Cu=wu=0,co=e),wu)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),Up=ti(wl),pv=x({},wl,{dataTransfer:0}),mv=ti(pv),xv=x({},lo,{relatedTarget:0}),Du=ti(xv),gv=x({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=ti(gv),vv=x({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yv=ti(vv),Sv=x({},_r,{data:0}),Lp=ti(Sv),bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Ev[e])?!!n[e]:!1}function Uu(){return Tv}var Av=x({},lo,{key:function(e){if(e.key){var n=bv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uu,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rv=ti(Av),wv=x({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=ti(wv),Cv=x({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uu}),Dv=ti(Cv),Uv=x({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=ti(Uv),Nv=x({},wl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=ti(Nv),zv=x({},_r,{newState:0,oldState:0}),Pv=ti(zv),Fv=[9,13,27,32],Lu=na&&"CompositionEvent"in window,uo=null;na&&"documentMode"in document&&(uo=document.documentMode);var Bv=na&&"TextEvent"in window&&!uo,Op=na&&(!Lu||uo&&8<uo&&11>=uo),zp=" ",Pp=!1;function Fp(e,n){switch(e){case"keyup":return Fv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jr=!1;function Iv(e,n){switch(e){case"compositionend":return Bp(n);case"keypress":return n.which!==32?null:(Pp=!0,zp);case"textInput":return e=n.data,e===zp&&Pp?null:e;default:return null}}function Hv(e,n){if(Jr)return e==="compositionend"||!Lu&&Fp(e,n)?(e=Cp(),El=Ru=Fa=null,Jr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Op&&n.locale!=="ko"?null:n.data;default:return null}}var Gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ip(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Gv[e.type]:n==="textarea"}function Hp(e,n,a,o){Kr?Qr?Qr.push(o):Qr=[o]:Kr=o,n=gc(n,"onChange"),0<n.length&&(a=new Rl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var fo=null,ho=null;function Vv(e){bx(e,0)}function Cl(e){var n=Q(e);if(Oe(n))return e}function Gp(e,n){if(e==="change")return n}var Vp=!1;if(na){var Nu;if(na){var Ou="oninput"in document;if(!Ou){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),Ou=typeof kp.oninput=="function"}Nu=Ou}else Nu=!1;Vp=Nu&&(!document.documentMode||9<document.documentMode)}function Xp(){fo&&(fo.detachEvent("onpropertychange",Wp),ho=fo=null)}function Wp(e){if(e.propertyName==="value"&&Cl(ho)){var n=[];Hp(n,ho,e,Eu(e)),wp(Vv,n)}}function kv(e,n,a){e==="focusin"?(Xp(),fo=n,ho=a,fo.attachEvent("onpropertychange",Wp)):e==="focusout"&&Xp()}function Xv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(ho)}function Wv(e,n){if(e==="click")return Cl(n)}function qv(e,n){if(e==="input"||e==="change")return Cl(n)}function Yv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var oi=typeof Object.is=="function"?Object.is:Yv;function po(e,n){if(oi(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!zt.call(n,u)||!oi(e[u],n[u]))return!1}return!0}function qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yp(e,n){var a=qp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=qp(a)}}function jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Dn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Dn(e.document)}return n}function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var jv=na&&"documentMode"in document&&11>=document.documentMode,$r=null,Pu=null,mo=null,Fu=!1;function Kp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fu||$r==null||$r!==Dn(o)||(o=$r,"selectionStart"in o&&zu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),mo&&po(mo,o)||(mo=o,o=gc(Pu,"onSelect"),0<o.length&&(n=new Rl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=$r)))}function vr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ts={animationend:vr("Animation","AnimationEnd"),animationiteration:vr("Animation","AnimationIteration"),animationstart:vr("Animation","AnimationStart"),transitionrun:vr("Transition","TransitionRun"),transitionstart:vr("Transition","TransitionStart"),transitioncancel:vr("Transition","TransitionCancel"),transitionend:vr("Transition","TransitionEnd")},Bu={},Qp={};na&&(Qp=document.createElement("div").style,"AnimationEvent"in window||(delete ts.animationend.animation,delete ts.animationiteration.animation,delete ts.animationstart.animation),"TransitionEvent"in window||delete ts.transitionend.transition);function yr(e){if(Bu[e])return Bu[e];if(!ts[e])return e;var n=ts[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Qp)return Bu[e]=n[a];return e}var Jp=yr("animationend"),$p=yr("animationiteration"),t0=yr("animationstart"),Zv=yr("transitionrun"),Kv=yr("transitionstart"),Qv=yr("transitioncancel"),e0=yr("transitionend"),n0=new Map,Iu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Iu.push("scrollEnd");function Ui(e,n){n0.set(e,n),jt(n,[e])}var Dl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},yi=[],es=0,Hu=0;function Ul(){for(var e=es,n=Hu=es=0;n<e;){var a=yi[n];yi[n++]=null;var o=yi[n];yi[n++]=null;var u=yi[n];yi[n++]=null;var f=yi[n];if(yi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}f!==0&&i0(a,u,f)}}function Ll(e,n,a,o){yi[es++]=e,yi[es++]=n,yi[es++]=a,yi[es++]=o,Hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Gu(e,n,a,o){return Ll(e,n,a,o),Nl(e)}function Sr(e,n){return Ll(e,null,null,n),Nl(e)}function i0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Yt(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Nl(e){if(50<Fo)throw Fo=0,Qf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ns={};function Jv(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,n,a,o){return new Jv(e,n,a,o)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,n){var a=e.alternate;return a===null?(a=li(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function a0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ol(e,n,a,o,u,f){var y=0;if(o=e,typeof e=="function")Vu(e)&&(y=1);else if(typeof e=="string")y=iS(e,a,Lt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=li(31,a,n,u),e.elementType=D,e.lanes=f,e;case T:return br(a.children,u,f,n);case b:y=8,u|=24;break;case v:return e=li(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case k:return e=li(13,a,n,u),e.elementType=k,e.lanes=f,e;case z:return e=li(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:y=10;break t;case P:y=9;break t;case H:y=11;break t;case I:y=14;break t;case K:y=16,o=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=li(y,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function br(e,n,a,o){return e=li(7,e,o,n),e.lanes=a,e}function ku(e,n,a){return e=li(6,e,null,n),e.lanes=a,e}function r0(e){var n=li(18,null,null,0);return n.stateNode=e,n}function Xu(e,n,a){return n=li(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var s0=new WeakMap;function Si(e,n){if(typeof e=="object"&&e!==null){var a=s0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:me(n)},s0.set(e,n),n)}return{value:e,source:n,stack:me(n)}}var is=[],as=0,zl=null,xo=0,bi=[],Mi=0,Ba=null,Wi=1,qi="";function aa(e,n){is[as++]=xo,is[as++]=zl,zl=e,xo=n}function o0(e,n,a){bi[Mi++]=Wi,bi[Mi++]=qi,bi[Mi++]=Ba,Ba=e;var o=Wi;e=qi;var u=32-Yt(o)-1;o&=~(1<<u),a+=1;var f=32-Yt(n)+u;if(30<f){var y=u-u%5;f=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Wi=1<<32-Yt(n)+u|a<<u|o,qi=f+e}else Wi=1<<f|a<<u|o,qi=e}function Wu(e){e.return!==null&&(aa(e,1),o0(e,1,0))}function qu(e){for(;e===zl;)zl=is[--as],is[as]=null,xo=is[--as],is[as]=null;for(;e===Ba;)Ba=bi[--Mi],bi[Mi]=null,qi=bi[--Mi],bi[Mi]=null,Wi=bi[--Mi],bi[Mi]=null}function l0(e,n){bi[Mi++]=Wi,bi[Mi++]=qi,bi[Mi++]=Ba,Wi=n.id,qi=n.overflow,Ba=e}var Bn=null,sn=null,ze=!1,Ia=null,Ei=!1,Yu=Error(r(519));function Ha(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(Si(n,e)),Yu}function c0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[$e]=e,n[pn]=o,a){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<Io.length;a++)we(Io[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":we("invalid",n),an(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":we("invalid",n);break;case"textarea":we("invalid",n),Fn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Ax(n.textContent,a)?(o.popover!=null&&(we("beforetoggle",n),we("toggle",n)),o.onScroll!=null&&we("scroll",n),o.onScrollEnd!=null&&we("scrollend",n),o.onClick!=null&&(n.onclick=ea),n=!0):n=!1,n||Ha(e,!0)}function u0(e){for(Bn=e.return;Bn;)switch(Bn.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Bn=Bn.return}}function rs(e){if(e!==Bn)return!1;if(!ze)return u0(e),ze=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||hh(e.type,e.memoizedProps)),a=!a),a&&sn&&Ha(e),u0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));sn=zx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));sn=zx(e)}else n===27?(n=sn,tr(e.type)?(e=gh,gh=null,sn=e):sn=n):sn=Bn?Ai(e.stateNode.nextSibling):null;return!0}function Mr(){sn=Bn=null,ze=!1}function ju(){var e=Ia;return e!==null&&(ai===null?ai=e:ai.push.apply(ai,e),Ia=null),e}function go(e){Ia===null?Ia=[e]:Ia.push(e)}var Zu=B(null),Er=null,ra=null;function Ga(e,n,a){Ct(Zu,n._currentValue),n._currentValue=a}function sa(e){e._currentValue=Zu.current,rt(Zu)}function Ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Qu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ku(f.return,a,e),o||(y=null);break t}f=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),Ku(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function ss(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var A=u.type;oi(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===U.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}u=u.return}e!==null&&Qu(n,e,a,o),n.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!oi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Tr(e){Er=e,ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function In(e){return f0(Er,e)}function Fl(e,n){return Er===null&&Tr(e),f0(e,n)}function f0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ra===null){if(e===null)throw Error(r(308));ra=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ra=ra.next=n;return a}var $v=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},ty=s.unstable_scheduleCallback,ey=s.unstable_NormalPriority,yn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new $v,data:new Map,refCount:0}}function _o(e){e.refCount--,e.refCount===0&&ty(ey,function(){e.controller.abort()})}var vo=null,$u=0,os=0,ls=null;function ny(e,n){if(vo===null){var a=vo=[];$u=0,os=ih(),ls={status:"pending",value:void 0,then:function(o){a.push(o)}}}return $u++,n.then(h0,h0),n}function h0(){if(--$u===0&&vo!==null){ls!==null&&(ls.status="fulfilled");var e=vo;vo=null,os=0,ls=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function iy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var d0=F.S;F.S=function(e,n){Km=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ny(e,n),d0!==null&&d0(e,n)};var Ar=B(null);function tf(){var e=Ar.current;return e!==null?e:en.pooledCache}function Bl(e,n){n===null?Ct(Ar,Ar.current):Ct(Ar,n.pool)}function p0(){var e=tf();return e===null?null:{parent:yn._currentValue,pool:e}}var cs=Error(r(460)),ef=Error(r(474)),Il=Error(r(542)),Hl={then:function(){}};function m0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function x0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ea,ea),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_0(e),e;default:if(typeof n.status=="string")n.then(ea,ea);else{if(e=en,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,_0(e),e}throw wr=n,cs}}function Rr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(wr=a,cs):a}}var wr=null;function g0(){if(wr===null)throw Error(r(459));var e=wr;return wr=null,e}function _0(e){if(e===cs||e===Il)throw Error(r(483))}var us=null,yo=0;function Gl(e){var n=yo;return yo+=1,us===null&&(us=[]),x0(us,e,n)}function So(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Vl(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function v0(e){function n(J,W){if(e){var st=J.deletions;st===null?(J.deletions=[W],J.flags|=16):st.push(W)}}function a(J,W){if(!e)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function o(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=ia(J,W),J.index=0,J.sibling=null,J}function f(J,W,st){return J.index=st,e?(st=J.alternate,st!==null?(st=st.index,st<W?(J.flags|=67108866,W):st):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function y(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function A(J,W,st,Tt){return W===null||W.tag!==6?(W=ku(st,J.mode,Tt),W.return=J,W):(W=u(W,st),W.return=J,W)}function V(J,W,st,Tt){var oe=st.type;return oe===T?vt(J,W,st.props.children,Tt,st.key):W!==null&&(W.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===K&&Rr(oe)===W.type)?(W=u(W,st.props),So(W,st),W.return=J,W):(W=Ol(st.type,st.key,st.props,null,J.mode,Tt),So(W,st),W.return=J,W)}function ot(J,W,st,Tt){return W===null||W.tag!==4||W.stateNode.containerInfo!==st.containerInfo||W.stateNode.implementation!==st.implementation?(W=Xu(st,J.mode,Tt),W.return=J,W):(W=u(W,st.children||[]),W.return=J,W)}function vt(J,W,st,Tt,oe){return W===null||W.tag!==7?(W=br(st,J.mode,Tt,oe),W.return=J,W):(W=u(W,st),W.return=J,W)}function wt(J,W,st){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=ku(""+W,J.mode,st),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return st=Ol(W.type,W.key,W.props,null,J.mode,st),So(st,W),st.return=J,st;case E:return W=Xu(W,J.mode,st),W.return=J,W;case K:return W=Rr(W),wt(J,W,st)}if(xt(W)||et(W))return W=br(W,J.mode,st,null),W.return=J,W;if(typeof W.then=="function")return wt(J,Gl(W),st);if(W.$$typeof===L)return wt(J,Fl(J,W),st);Vl(J,W)}return null}function ft(J,W,st,Tt){var oe=W!==null?W.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return oe!==null?null:A(J,W,""+st,Tt);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case S:return st.key===oe?V(J,W,st,Tt):null;case E:return st.key===oe?ot(J,W,st,Tt):null;case K:return st=Rr(st),ft(J,W,st,Tt)}if(xt(st)||et(st))return oe!==null?null:vt(J,W,st,Tt,null);if(typeof st.then=="function")return ft(J,W,Gl(st),Tt);if(st.$$typeof===L)return ft(J,W,Fl(J,st),Tt);Vl(J,st)}return null}function mt(J,W,st,Tt,oe){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return J=J.get(st)||null,A(W,J,""+Tt,oe);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case S:return J=J.get(Tt.key===null?st:Tt.key)||null,V(W,J,Tt,oe);case E:return J=J.get(Tt.key===null?st:Tt.key)||null,ot(W,J,Tt,oe);case K:return Tt=Rr(Tt),mt(J,W,st,Tt,oe)}if(xt(Tt)||et(Tt))return J=J.get(st)||null,vt(W,J,Tt,oe,null);if(typeof Tt.then=="function")return mt(J,W,st,Gl(Tt),oe);if(Tt.$$typeof===L)return mt(J,W,st,Fl(W,Tt),oe);Vl(W,Tt)}return null}function ie(J,W,st,Tt){for(var oe=null,Be=null,ae=W,ye=W=0,De=null;ae!==null&&ye<st.length;ye++){ae.index>ye?(De=ae,ae=null):De=ae.sibling;var Ie=ft(J,ae,st[ye],Tt);if(Ie===null){ae===null&&(ae=De);break}e&&ae&&Ie.alternate===null&&n(J,ae),W=f(Ie,W,ye),Be===null?oe=Ie:Be.sibling=Ie,Be=Ie,ae=De}if(ye===st.length)return a(J,ae),ze&&aa(J,ye),oe;if(ae===null){for(;ye<st.length;ye++)ae=wt(J,st[ye],Tt),ae!==null&&(W=f(ae,W,ye),Be===null?oe=ae:Be.sibling=ae,Be=ae);return ze&&aa(J,ye),oe}for(ae=o(ae);ye<st.length;ye++)De=mt(ae,J,ye,st[ye],Tt),De!==null&&(e&&De.alternate!==null&&ae.delete(De.key===null?ye:De.key),W=f(De,W,ye),Be===null?oe=De:Be.sibling=De,Be=De);return e&&ae.forEach(function(rr){return n(J,rr)}),ze&&aa(J,ye),oe}function he(J,W,st,Tt){if(st==null)throw Error(r(151));for(var oe=null,Be=null,ae=W,ye=W=0,De=null,Ie=st.next();ae!==null&&!Ie.done;ye++,Ie=st.next()){ae.index>ye?(De=ae,ae=null):De=ae.sibling;var rr=ft(J,ae,Ie.value,Tt);if(rr===null){ae===null&&(ae=De);break}e&&ae&&rr.alternate===null&&n(J,ae),W=f(rr,W,ye),Be===null?oe=rr:Be.sibling=rr,Be=rr,ae=De}if(Ie.done)return a(J,ae),ze&&aa(J,ye),oe;if(ae===null){for(;!Ie.done;ye++,Ie=st.next())Ie=wt(J,Ie.value,Tt),Ie!==null&&(W=f(Ie,W,ye),Be===null?oe=Ie:Be.sibling=Ie,Be=Ie);return ze&&aa(J,ye),oe}for(ae=o(ae);!Ie.done;ye++,Ie=st.next())Ie=mt(ae,J,ye,Ie.value,Tt),Ie!==null&&(e&&Ie.alternate!==null&&ae.delete(Ie.key===null?ye:Ie.key),W=f(Ie,W,ye),Be===null?oe=Ie:Be.sibling=Ie,Be=Ie);return e&&ae.forEach(function(pS){return n(J,pS)}),ze&&aa(J,ye),oe}function Ze(J,W,st,Tt){if(typeof st=="object"&&st!==null&&st.type===T&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case S:t:{for(var oe=st.key;W!==null;){if(W.key===oe){if(oe=st.type,oe===T){if(W.tag===7){a(J,W.sibling),Tt=u(W,st.props.children),Tt.return=J,J=Tt;break t}}else if(W.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===K&&Rr(oe)===W.type){a(J,W.sibling),Tt=u(W,st.props),So(Tt,st),Tt.return=J,J=Tt;break t}a(J,W);break}else n(J,W);W=W.sibling}st.type===T?(Tt=br(st.props.children,J.mode,Tt,st.key),Tt.return=J,J=Tt):(Tt=Ol(st.type,st.key,st.props,null,J.mode,Tt),So(Tt,st),Tt.return=J,J=Tt)}return y(J);case E:t:{for(oe=st.key;W!==null;){if(W.key===oe)if(W.tag===4&&W.stateNode.containerInfo===st.containerInfo&&W.stateNode.implementation===st.implementation){a(J,W.sibling),Tt=u(W,st.children||[]),Tt.return=J,J=Tt;break t}else{a(J,W);break}else n(J,W);W=W.sibling}Tt=Xu(st,J.mode,Tt),Tt.return=J,J=Tt}return y(J);case K:return st=Rr(st),Ze(J,W,st,Tt)}if(xt(st))return ie(J,W,st,Tt);if(et(st)){if(oe=et(st),typeof oe!="function")throw Error(r(150));return st=oe.call(st),he(J,W,st,Tt)}if(typeof st.then=="function")return Ze(J,W,Gl(st),Tt);if(st.$$typeof===L)return Ze(J,W,Fl(J,st),Tt);Vl(J,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,W!==null&&W.tag===6?(a(J,W.sibling),Tt=u(W,st),Tt.return=J,J=Tt):(a(J,W),Tt=ku(st,J.mode,Tt),Tt.return=J,J=Tt),y(J)):a(J,W)}return function(J,W,st,Tt){try{yo=0;var oe=Ze(J,W,st,Tt);return us=null,oe}catch(ae){if(ae===cs||ae===Il)throw ae;var Be=li(29,ae,null,J.mode);return Be.lanes=Tt,Be.return=J,Be}finally{}}}var Cr=v0(!0),y0=v0(!1),Va=!1;function nf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function af(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ve&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Nl(e),i0(e,null,a),n}return Ll(e,o,n,a),Nl(e)}function bo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Qe(e,a)}}function rf(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var sf=!1;function Mo(){if(sf){var e=ls;if(e!==null)throw e}}function Eo(e,n,a,o){sf=!1;var u=e.updateQueue;Va=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,ot=V.next;V.next=null,y===null?f=ot:y.next=ot,y=V;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==y&&(A===null?vt.firstBaseUpdate=ot:A.next=ot,vt.lastBaseUpdate=V))}if(f!==null){var wt=u.baseState;y=0,vt=ot=V=null,A=f;do{var ft=A.lane&-536870913,mt=ft!==A.lane;if(mt?(Ce&ft)===ft:(o&ft)===ft){ft!==0&&ft===os&&(sf=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ie=e,he=A;ft=n;var Ze=a;switch(he.tag){case 1:if(ie=he.payload,typeof ie=="function"){wt=ie.call(Ze,wt,ft);break t}wt=ie;break t;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=he.payload,ft=typeof ie=="function"?ie.call(Ze,wt,ft):ie,ft==null)break t;wt=x({},wt,ft);break t;case 2:Va=!0}}ft=A.callback,ft!==null&&(e.flags|=64,mt&&(e.flags|=8192),mt=u.callbacks,mt===null?u.callbacks=[ft]:mt.push(ft))}else mt={lane:ft,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(ot=vt=mt,V=wt):vt=vt.next=mt,y|=ft;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;mt=A,A=mt.next,mt.next=null,u.lastBaseUpdate=mt,u.shared.pending=null}}while(!0);vt===null&&(V=wt),u.baseState=V,u.firstBaseUpdate=ot,u.lastBaseUpdate=vt,f===null&&(u.shared.lanes=0),Za|=y,e.lanes=y,e.memoizedState=wt}}function S0(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function b0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)S0(a[e],n)}var fs=B(null),kl=B(0);function M0(e,n){e=ma,Ct(kl,e),Ct(fs,n),ma=e|n.baseLanes}function of(){Ct(kl,ma),Ct(fs,fs.current)}function lf(){ma=kl.current,rt(fs),rt(kl)}var ci=B(null),Ti=null;function Wa(e){var n=e.alternate;Ct(_n,_n.current&1),Ct(ci,e),Ti===null&&(n===null||fs.current!==null||n.memoizedState!==null)&&(Ti=e)}function cf(e){Ct(_n,_n.current),Ct(ci,e),Ti===null&&(Ti=e)}function E0(e){e.tag===22?(Ct(_n,_n.current),Ct(ci,e),Ti===null&&(Ti=e)):qa()}function qa(){Ct(_n,_n.current),Ct(ci,ci.current)}function ui(e){rt(ci),Ti===e&&(Ti=null),rt(_n)}var _n=B(0);function Xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||mh(a)||xh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var oa=0,_e=null,Ye=null,Sn=null,Wl=!1,hs=!1,Dr=!1,ql=0,To=0,ds=null,ay=0;function mn(){throw Error(r(321))}function uf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!oi(e[a],n[a]))return!1;return!0}function ff(e,n,a,o,u,f){return oa=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=e===null||e.memoizedState===null?om:Af,Dr=!1,f=a(o,u),Dr=!1,hs&&(f=A0(n,a,o,u)),T0(e),f}function T0(e){F.H=wo;var n=Ye!==null&&Ye.next!==null;if(oa=0,Sn=Ye=_e=null,Wl=!1,To=0,ds=null,n)throw Error(r(300));e===null||bn||(e=e.dependencies,e!==null&&Pl(e)&&(bn=!0))}function A0(e,n,a,o){_e=e;var u=0;do{if(hs&&(ds=null),To=0,hs=!1,25<=u)throw Error(r(301));if(u+=1,Sn=Ye=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=lm,f=n(a,o)}while(hs);return f}function ry(){var e=F.H,n=e.useState()[0];return n=typeof n.then=="function"?Ao(n):n,e=e.useState()[0],(Ye!==null?Ye.memoizedState:null)!==e&&(_e.flags|=1024),n}function hf(){var e=ql!==0;return ql=0,e}function df(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function pf(e){if(Wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Wl=!1}oa=0,Sn=Ye=_e=null,hs=!1,To=ql=0,ds=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?_e.memoizedState=Sn=e:Sn=Sn.next=e,Sn}function vn(){if(Ye===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var n=Sn===null?_e.memoizedState:Sn.next;if(n!==null)Sn=n,Ye=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Sn===null?_e.memoizedState=Sn=e:Sn=Sn.next=e}return Sn}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var n=To;return To+=1,ds===null&&(ds=[]),e=x0(ds,e,n),n=_e,(Sn===null?n.memoizedState:Sn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?om:Af),e}function jl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===L)return In(e)}throw Error(r(438,String(e)))}function mf(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yl(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function la(e,n){return typeof n=="function"?n(e):n}function Zl(e){var n=vn();return xf(n,Ye,e)}function xf(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=y=null,V=null,ot=n,vt=!1;do{var wt=ot.lane&-536870913;if(wt!==ot.lane?(Ce&wt)===wt:(oa&wt)===wt){var ft=ot.revertLane;if(ft===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null}),wt===os&&(vt=!0);else if((oa&ft)===ft){ot=ot.next,ft===os&&(vt=!0);continue}else wt={lane:0,revertLane:ot.revertLane,gesture:null,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(A=V=wt,y=f):V=V.next=wt,_e.lanes|=ft,Za|=ft;wt=ot.action,Dr&&a(f,wt),f=ot.hasEagerState?ot.eagerState:a(f,wt)}else ft={lane:wt,revertLane:ot.revertLane,gesture:ot.gesture,action:ot.action,hasEagerState:ot.hasEagerState,eagerState:ot.eagerState,next:null},V===null?(A=V=ft,y=f):V=V.next=ft,_e.lanes|=wt,Za|=wt;ot=ot.next}while(ot!==null&&ot!==n);if(V===null?y=f:V.next=A,!oi(f,e.memoizedState)&&(bn=!0,vt&&(a=ls,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=V,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function gf(e){var n=vn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=e(f,y.action),y=y.next;while(y!==u);oi(f,n.memoizedState)||(bn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function R0(e,n,a){var o=_e,u=vn(),f=ze;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!oi((Ye||u).memoizedState,a);if(y&&(u.memoizedState=a,bn=!0),u=u.queue,yf(D0.bind(null,o,u,e),[e]),u.getSnapshot!==n||y||Sn!==null&&Sn.memoizedState.tag&1){if(o.flags|=2048,ps(9,{destroy:void 0},C0.bind(null,o,u,a,n),null),en===null)throw Error(r(349));f||(oa&127)!==0||w0(o,n,a)}return a}function w0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Yl(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function C0(e,n,a,o){n.value=a,n.getSnapshot=o,U0(n)&&L0(e)}function D0(e,n,a){return a(function(){U0(n)&&L0(e)})}function U0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!oi(e,a)}catch{return!0}}function L0(e){var n=Sr(e,2);n!==null&&ri(n,e,2)}function _f(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),Dr){qt(!0);try{a()}finally{qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:e},n}function N0(e,n,a,o){return e.baseState=a,xf(e,Ye,typeof o=="function"?o:la)}function sy(e,n,a,o,u){if(Jl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};F.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,O0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function O0(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=F.T,y={};F.T=y;try{var A=a(u,o),V=F.S;V!==null&&V(y,A),z0(e,n,A)}catch(ot){vf(e,n,ot)}finally{f!==null&&y.types!==null&&(f.types=y.types),F.T=f}}else try{f=a(u,o),z0(e,n,f)}catch(ot){vf(e,n,ot)}}function z0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){P0(e,n,o)},function(o){return vf(e,n,o)}):P0(e,n,a)}function P0(e,n,a){n.status="fulfilled",n.value=a,F0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,O0(e,a)))}function vf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,F0(n),n=n.next;while(n!==o)}e.action=null}function F0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function B0(e,n){return n}function I0(e,n){if(ze){var a=en.formState;if(a!==null){t:{var o=_e;if(ze){if(sn){e:{for(var u=sn,f=Ei;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){sn=Ai(u.nextSibling),o=u.data==="F!";break t}}Ha(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:B0,lastRenderedState:n},a.queue=o,a=am.bind(null,_e,o),o.dispatch=a,o=_f(!1),f=Tf.bind(null,_e,!1,o.queue),o=Zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=sy.bind(null,_e,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function H0(e){var n=vn();return G0(n,Ye,e)}function G0(e,n,a){if(n=xf(e,n,B0)[0],e=Zl(la)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ao(n)}catch(y){throw y===cs?Il:y}else o=n;n=vn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,ps(9,{destroy:void 0},oy.bind(null,u,a),null)),[o,f,e]}function oy(e,n){e.action=n}function V0(e){var n=vn(),a=Ye;if(a!==null)return G0(n,a,e);vn(),n=n.memoizedState,a=vn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ps(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Yl(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function k0(){return vn().memoizedState}function Kl(e,n,a,o){var u=Zn();_e.flags|=e,u.memoizedState=ps(1|n,{destroy:void 0},a,o===void 0?null:o)}function Ql(e,n,a,o){var u=vn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ye!==null&&o!==null&&uf(o,Ye.memoizedState.deps)?u.memoizedState=ps(n,f,a,o):(_e.flags|=e,u.memoizedState=ps(1|n,f,a,o))}function X0(e,n){Kl(8390656,8,e,n)}function yf(e,n){Ql(2048,8,e,n)}function ly(e){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=Yl(),_e.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function W0(e){var n=vn().memoizedState;return ly({ref:n,nextImpl:e}),function(){if((Ve&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function q0(e,n){return Ql(4,2,e,n)}function Y0(e,n){return Ql(4,4,e,n)}function j0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Z0(e,n,a){a=a!=null?a.concat([e]):null,Ql(4,4,j0.bind(null,n,e),a)}function Sf(){}function K0(e,n){var a=vn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&uf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Q0(e,n){var a=vn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&uf(n,o[1]))return o[0];if(o=e(),Dr){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[o,n],o}function bf(e,n,a){return a===void 0||(oa&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Jm(),_e.lanes|=e,Za|=e,a)}function J0(e,n,a,o){return oi(a,n)?a:fs.current!==null?(e=bf(e,a,o),oi(e,n)||(bn=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(Ce&261930)===0?(bn=!0,e.memoizedState=a):(e=Jm(),_e.lanes|=e,Za|=e,n)}function $0(e,n,a,o,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var y=F.T,A={};F.T=A,Tf(e,!1,n,a);try{var V=u(),ot=F.S;if(ot!==null&&ot(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var vt=iy(V,o);Ro(e,n,vt,di(e))}else Ro(e,n,o,di(e))}catch(wt){Ro(e,n,{then:function(){},status:"rejected",reason:wt},di())}finally{Z.p=f,y!==null&&A.types!==null&&(y.types=A.types),F.T=y}}function cy(){}function Mf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=tm(e).queue;$0(e,u,n,j,a===null?cy:function(){return em(e),a(o)})}function tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function em(e){var n=tm(e);n.next===null&&(n=e.alternate.memoizedState),Ro(e,n.next.queue,{},di())}function Ef(){return In(Xo)}function nm(){return vn().memoizedState}function im(){return vn().memoizedState}function uy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();e=ka(a);var o=Xa(n,e,a);o!==null&&(ri(o,n,a),bo(o,n,a)),n={cache:Ju()},e.payload=n;return}n=n.return}}function fy(e,n,a){var o=di();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Jl(e)?rm(n,a):(a=Gu(e,n,a,o),a!==null&&(ri(a,e,o),sm(a,n,o)))}function am(e,n,a){var o=di();Ro(e,n,a,o)}function Ro(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jl(e))rm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,A=f(y,a);if(u.hasEagerState=!0,u.eagerState=A,oi(A,y))return Ll(e,n,u,0),en===null&&Ul(),!1}catch{}finally{}if(a=Gu(e,n,u,o),a!==null)return ri(a,e,o),sm(a,n,o),!0}return!1}function Tf(e,n,a,o){if(o={lane:2,revertLane:ih(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Jl(e)){if(n)throw Error(r(479))}else n=Gu(e,a,o,2),n!==null&&ri(n,e,2)}function Jl(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function rm(e,n){hs=Wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function sm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Qe(e,a)}}var wo={readContext:In,use:jl,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};wo.useEffectEvent=mn;var om={readContext:In,use:jl,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:In,useEffect:X0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Kl(4194308,4,j0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Kl(4194308,4,e,n)},useInsertionEffect:function(e,n){Kl(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(Dr){qt(!0);try{e()}finally{qt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var u=a(n);if(Dr){qt(!0);try{a(n)}finally{qt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=fy.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=_f(e);var n=e.queue,a=am.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Sf,useDeferredValue:function(e,n){var a=Zn();return bf(a,e,n)},useTransition:function(){var e=_f(!1);return e=$0.bind(null,_e,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Zn();if(ze){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),en===null)throw Error(r(349));(Ce&127)!==0||w0(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,X0(D0.bind(null,o,f,e),[e]),o.flags|=2048,ps(9,{destroy:void 0},C0.bind(null,o,f,a,n),null),a},useId:function(){var e=Zn(),n=en.identifierPrefix;if(ze){var a=qi,o=Wi;a=(o&~(1<<32-Yt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ql++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ay++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ef,useFormState:I0,useActionState:I0,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Tf.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:mf,useCacheRefresh:function(){return Zn().memoizedState=uy.bind(null,_e)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((Ve&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Af={readContext:In,use:jl,useCallback:K0,useContext:In,useEffect:yf,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:Y0,useMemo:Q0,useReducer:Zl,useRef:k0,useState:function(){return Zl(la)},useDebugValue:Sf,useDeferredValue:function(e,n){var a=vn();return J0(a,Ye.memoizedState,e,n)},useTransition:function(){var e=Zl(la)[0],n=vn().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:R0,useId:nm,useHostTransitionStatus:Ef,useFormState:H0,useActionState:H0,useOptimistic:function(e,n){var a=vn();return N0(a,Ye,e,n)},useMemoCache:mf,useCacheRefresh:im};Af.useEffectEvent=W0;var lm={readContext:In,use:jl,useCallback:K0,useContext:In,useEffect:yf,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:Y0,useMemo:Q0,useReducer:gf,useRef:k0,useState:function(){return gf(la)},useDebugValue:Sf,useDeferredValue:function(e,n){var a=vn();return Ye===null?bf(a,e,n):J0(a,Ye.memoizedState,e,n)},useTransition:function(){var e=gf(la)[0],n=vn().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:R0,useId:nm,useHostTransitionStatus:Ef,useFormState:V0,useActionState:V0,useOptimistic:function(e,n){var a=vn();return Ye!==null?N0(a,Ye,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:mf,useCacheRefresh:im};lm.useEffectEvent=W0;function Rf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var wf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=di(),u=ka(o);u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,o),n!==null&&(ri(n,e,o),bo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=di(),u=ka(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,o),n!==null&&(ri(n,e,o),bo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=di(),o=ka(a);o.tag=2,n!=null&&(o.callback=n),n=Xa(e,o,a),n!==null&&(ri(n,e,a),bo(n,e,a))}};function cm(e,n,a,o,u,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,y):n.prototype&&n.prototype.isPureReactComponent?!po(a,o)||!po(u,f):!0}function um(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&wf.enqueueReplaceState(n,n.state,null)}function Ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function fm(e){Dl(e)}function hm(e){console.error(e)}function dm(e){Dl(e)}function $l(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function pm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Cf(e,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){$l(e,n)},a}function mm(e){return e=ka(e),e.tag=3,e}function xm(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){pm(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){pm(n,a,o),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function hy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ss(n,a,u,!0),a=ci.current,a!==null){switch(a.tag){case 31:case 13:return Ti===null?fc():a.alternate===null&&xn===0&&(xn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),th(e,o,u)),!1;case 22:return a.flags|=65536,o===Hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),th(e,o,u)),!1}throw Error(r(435,a.tag))}return th(e,o,u),fc(),!1}if(ze)return n=ci.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Yu&&(e=Error(r(422),{cause:o}),go(Si(e,a)))):(o!==Yu&&(n=Error(r(423),{cause:o}),go(Si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Si(o,a),u=Cf(e.stateNode,o,u),rf(e,u),xn!==4&&(xn=2)),!1;var f=Error(r(520),{cause:o});if(f=Si(f,a),Po===null?Po=[f]:Po.push(f),xn!==4&&(xn=2),n===null)return!0;o=Si(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Cf(a.stateNode,o,e),rf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ka===null||!Ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=mm(u),xm(u,e,a,o),rf(a,u),!1}a=a.return}while(a!==null);return!1}var Df=Error(r(461)),bn=!1;function Hn(e,n,a,o){n.child=e===null?y0(n,null,a,o):Cr(n,e.child,a,o)}function gm(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var y={};for(var A in o)A!=="ref"&&(y[A]=o[A])}else y=o;return Tr(n),o=ff(e,n,a,y,f,u),A=hf(),e!==null&&!bn?(df(e,n,u),ca(e,n,u)):(ze&&A&&Wu(n),n.flags|=1,Hn(e,n,o,u),n.child)}function _m(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,vm(e,n,f,o,u)):(e=Ol(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Bf(e,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(y,o)&&e.ref===n.ref)return ca(e,n,u)}return n.flags|=1,e=ia(f,o),e.ref=n.ref,e.return=n,n.child=e}function vm(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(po(f,o)&&e.ref===n.ref)if(bn=!1,n.pendingProps=o=f,Bf(e,u))(e.flags&131072)!==0&&(bn=!0);else return n.lanes=e.lanes,ca(e,n,u)}return Uf(e,n,a,o,u)}function ym(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Sm(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(n,f!==null?f.cachePool:null),f!==null?M0(n,f):of(),E0(n);else return o=n.lanes=536870912,Sm(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Bl(n,f.cachePool),M0(n,f),qa(),n.memoizedState=null):(e!==null&&Bl(n,null),of(),qa());return Hn(e,n,u,a),n.child}function Co(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Sm(e,n,a,o,u){var f=tf();return f=f===null?null:{parent:yn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Bl(n,null),of(),E0(n),e!==null&&ss(e,n,o,!0),n.childLanes=u,null}function tc(e,n){return n=nc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function bm(e,n,a){return Cr(n,e.child,null,a),e=tc(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function dy(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ze){if(o.mode==="hidden")return e=tc(n,o),n.lanes=536870912,Co(null,e);if(cf(n),(e=sn)?(e=Ox(e,Ei),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=r0(e),a.return=n,n.child=a,Bn=n,sn=null)):e=null,e===null)throw Ha(n);return n.lanes=536870912,null}return tc(n,o)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if(cf(n),u)if(n.flags&256)n.flags&=-257,n=bm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(bn||ss(e,n,a,!1),u=(a&e.childLanes)!==0,bn||u){if(o=en,o!==null&&(y=un(o,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Sr(e,y),ri(o,e,y),Df;fc(),n=bm(e,n,a)}else e=f.treeContext,sn=Ai(y.nextSibling),Bn=n,ze=!0,Ia=null,Ei=!1,e!==null&&l0(n,e),n=tc(n,o),n.flags|=4096;return n}return e=ia(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ec(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uf(e,n,a,o,u){return Tr(n),a=ff(e,n,a,o,void 0,u),o=hf(),e!==null&&!bn?(df(e,n,u),ca(e,n,u)):(ze&&o&&Wu(n),n.flags|=1,Hn(e,n,a,u),n.child)}function Mm(e,n,a,o,u,f){return Tr(n),n.updateQueue=null,a=A0(n,o,a,u),T0(e),o=hf(),e!==null&&!bn?(df(e,n,f),ca(e,n,f)):(ze&&o&&Wu(n),n.flags|=1,Hn(e,n,a,f),n.child)}function Em(e,n,a,o,u){if(Tr(n),n.stateNode===null){var f=ns,y=a.contextType;typeof y=="object"&&y!==null&&(f=In(y)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=wf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},nf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?In(y):ns,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Rf(n,a,y,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&wf.enqueueReplaceState(f,f.state,null),Eo(n,o,f,u),Mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,V=Ur(a,A);f.props=V;var ot=f.context,vt=a.contextType;y=ns,typeof vt=="object"&&vt!==null&&(y=In(vt));var wt=a.getDerivedStateFromProps;vt=typeof wt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,vt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||ot!==y)&&um(n,f,o,y),Va=!1;var ft=n.memoizedState;f.state=ft,Eo(n,o,f,u),Mo(),ot=n.memoizedState,A||ft!==ot||Va?(typeof wt=="function"&&(Rf(n,a,wt,o),ot=n.memoizedState),(V=Va||cm(n,a,V,o,ft,ot,y))?(vt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=y,o=V):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,af(e,n),y=n.memoizedProps,vt=Ur(a,y),f.props=vt,wt=n.pendingProps,ft=f.context,ot=a.contextType,V=ns,typeof ot=="object"&&ot!==null&&(V=In(ot)),A=a.getDerivedStateFromProps,(ot=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==wt||ft!==V)&&um(n,f,o,V),Va=!1,ft=n.memoizedState,f.state=ft,Eo(n,o,f,u),Mo();var mt=n.memoizedState;y!==wt||ft!==mt||Va||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof A=="function"&&(Rf(n,a,A,o),mt=n.memoizedState),(vt=Va||cm(n,a,vt,o,ft,mt,V)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(ot||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,mt,V),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,mt,V)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=mt),f.props=o,f.state=mt,f.context=V,o=vt):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&ft===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ec(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Cr(n,e.child,null,u),n.child=Cr(n,null,a,u)):Hn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ca(e,n,u),e}function Tm(e,n,a,o){return Mr(),n.flags|=256,Hn(e,n,a,o),n.child}var Lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nf(e){return{baseLanes:e,cachePool:p0()}}function Of(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function Am(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(_n.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(ze){if(u?Wa(n):qa(),(e=sn)?(e=Ox(e,Ei),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ba!==null?{id:Wi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},a=r0(e),a.return=n,n.child=a,Bn=n,sn=null)):e=null,e===null)throw Ha(n);return xh(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(qa(),u=n.mode,A=nc({mode:"hidden",children:A},u),o=br(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,y,a),n.memoizedState=Lf,Co(null,o)):(Wa(n),zf(n,A))}var V=e.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(f)n.flags&256?(Wa(n),n.flags&=-257,n=Pf(e,n,a)):n.memoizedState!==null?(qa(),n.child=e.child,n.flags|=128,n=null):(qa(),A=o.fallback,u=n.mode,o=nc({mode:"visible",children:o.children},u),A=br(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Cr(n,e.child,null,a),o=n.child,o.memoizedState=Nf(a),o.childLanes=Of(e,y,a),n.memoizedState=Lf,n=Co(null,o));else if(Wa(n),xh(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var ot=y.dgst;y=ot,o=Error(r(419)),o.stack="",o.digest=y,go({value:o,source:null,stack:null}),n=Pf(e,n,a)}else if(bn||ss(e,n,a,!1),y=(a&e.childLanes)!==0,bn||y){if(y=en,y!==null&&(o=un(y,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,Sr(e,o),ri(y,e,o),Df;mh(A)||fc(),n=Pf(e,n,a)}else mh(A)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,sn=Ai(A.nextSibling),Bn=n,ze=!0,Ia=null,Ei=!1,e!==null&&l0(n,e),n=zf(n,o.children),n.flags|=4096);return n}return u?(qa(),A=o.fallback,u=n.mode,V=e.child,ot=V.sibling,o=ia(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ot!==null?A=ia(ot,A):(A=br(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,Co(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Nf(a):(u=A.cachePool,u!==null?(V=yn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=p0(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Of(e,y,a),n.memoizedState=Lf,Co(e.child,o)):(Wa(n),a=e.child,e=a.sibling,a=ia(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function zf(e,n){return n=nc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function nc(e,n){return e=li(22,e,null,n),e.lanes=0,e}function Pf(e,n,a){return Cr(n,e.child,null,a),e=zf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Rm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Ku(e.return,n,a)}function Ff(e,n,a,o,u,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function wm(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var y=_n.current,A=(y&2)!==0;if(A?(y=y&1|2,n.flags|=128):y&=1,Ct(_n,y),Hn(e,n,o,a),o=ze?xo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Rm(e,a,n);else if(e.tag===19)Rm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Ff(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Ff(n,!0,a,null,f,o);break;case"together":Ff(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ca(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ss(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ia(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ia(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Bf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function py(e,n,a){switch(n.tag){case 3:Y(n,n.stateNode.containerInfo),Ga(n,yn,e.memoizedState.cache),Mr();break;case 27:case 5:nt(n);break;case 4:Y(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,cf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Am(e,n,a):(Wa(n),e=ca(e,n,a),e!==null?e.sibling:null);Wa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ss(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return wm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ct(_n,_n.current),o)break;return null;case 22:return n.lanes=0,ym(e,n,a,n.pendingProps);case 24:Ga(n,yn,e.memoizedState.cache)}return ca(e,n,a)}function Cm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)bn=!0;else{if(!Bf(e,a)&&(n.flags&128)===0)return bn=!1,py(e,n,a);bn=(e.flags&131072)!==0}else bn=!1,ze&&(n.flags&1048576)!==0&&o0(n,xo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Rr(n.elementType),n.type=e,typeof e=="function")Vu(e)?(o=Ur(e,o),n.tag=1,n=Em(null,n,e,o,a)):(n.tag=0,n=Uf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===H){n.tag=11,n=gm(null,n,e,o,a);break t}else if(u===I){n.tag=14,n=_m(null,n,e,o,a);break t}}throw n=gt(e)||e,Error(r(306,n,""))}}return n;case 0:return Uf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ur(o,n.pendingProps),Em(e,n,o,u,a);case 3:t:{if(Y(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,af(e,n),Eo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Ga(n,yn,o),o!==f.cache&&Qu(n,[yn],a,!0),Mo(),o=y.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Tm(e,n,o,a);break t}else if(o!==u){u=Si(Error(r(424)),n),go(u),n=Tm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(sn=Ai(e.firstChild),Bn=n,ze=!0,Ia=null,Ei=!0,a=y0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Mr(),o===u){n=ca(e,n,a);break t}Hn(e,n,o,a)}n=n.child}return n;case 26:return ec(e,n),e===null?(a=Hx(n.type,null,n.pendingProps,null))?n.memoizedState=a:ze||(a=n.type,e=n.pendingProps,o=_c(N.current).createElement(a),o[$e]=n,o[pn]=e,Gn(o,a,e),ct(o),n.stateNode=o):n.memoizedState=Hx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return nt(n),e===null&&ze&&(o=n.stateNode=Fx(n.type,n.pendingProps,N.current),Bn=n,Ei=!0,u=sn,tr(n.type)?(gh=u,sn=Ai(o.firstChild)):sn=u),Hn(e,n,n.pendingProps.children,a),ec(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ze&&((u=o=sn)&&(o=Xy(o,n.type,n.pendingProps,Ei),o!==null?(n.stateNode=o,Bn=n,sn=Ai(o.firstChild),Ei=!1,u=!0):u=!1),u||Ha(n)),nt(n),u=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,o=f.children,hh(u,f)?o=null:y!==null&&hh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=ff(e,n,ry,null,null,a),Xo._currentValue=u),ec(e,n),Hn(e,n,o,a),n.child;case 6:return e===null&&ze&&((e=a=sn)&&(a=Wy(a,n.pendingProps,Ei),a!==null?(n.stateNode=a,Bn=n,sn=null,e=!0):e=!1),e||Ha(n)),null;case 13:return Am(e,n,a);case 4:return Y(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Cr(n,null,o,a):Hn(e,n,o,a),n.child;case 11:return gm(e,n,n.type,n.pendingProps,a);case 7:return Hn(e,n,n.pendingProps,a),n.child;case 8:return Hn(e,n,n.pendingProps.children,a),n.child;case 12:return Hn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ga(n,n.type,o.value),Hn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Tr(n),u=In(u),o=o(u),n.flags|=1,Hn(e,n,o,a),n.child;case 14:return _m(e,n,n.type,n.pendingProps,a);case 15:return vm(e,n,n.type,n.pendingProps,a);case 19:return wm(e,n,a);case 31:return dy(e,n,a);case 22:return ym(e,n,a,n.pendingProps);case 24:return Tr(n),o=In(yn),e===null?(u=tf(),u===null&&(u=en,f=Ju(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},nf(n),Ga(n,yn,u)):((e.lanes&a)!==0&&(af(e,n),Eo(n,null,null,a),Mo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,yn,o)):(o=f.cache,Ga(n,yn,o),o!==u.cache&&Qu(n,[yn],a,!0))),Hn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ua(e){e.flags|=4}function If(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(nx())e.flags|=8192;else throw wr=Hl,ef}else e.flags&=-16777217}function Dm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wx(n))if(nx())e.flags|=8192;else throw wr=Hl,ef}function ic(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ge():536870912,e.lanes|=n,_s|=n)}function Do(e,n){if(!ze)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function on(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function my(e,n,a){var o=n.pendingProps;switch(qu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(n),null;case 1:return on(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),sa(yn),$(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(rs(n)?ua(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ju())),on(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ua(n),f!==null?(on(n),Dm(n,f)):(on(n),If(n,u,null,o,a))):f?f!==e.memoizedState?(ua(n),on(n),Dm(n,f)):(on(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ua(n),on(n),If(n,u,e,o,a)),null;case 27:if(ut(n),a=N.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return on(n),null}e=Lt.current,rs(n)?c0(n):(e=Fx(u,o,a),n.stateNode=e,ua(n))}return on(n),null;case 5:if(ut(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return on(n),null}if(f=Lt.current,rs(n))c0(n);else{var y=_c(N.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}f[$e]=n,f[pn]=o;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(Gn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ua(n)}}return on(n),If(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ua(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=N.current,rs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Bn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[$e]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Ax(e.nodeValue,a)),e||Ha(n,!0)}else e=_c(e).createTextNode(o),e[$e]=n,n.stateNode=e}return on(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=rs(n),a!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[$e]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),e=!1}else a=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(r(558))}return on(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=rs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[$e]=n}else Mr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;on(n),u=!1}else u=ju(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ic(n,n.updateQueue),on(n),null);case 4:return $(),e===null&&oh(n.stateNode.containerInfo),on(n),null;case 10:return sa(n.type),on(n),null;case 19:if(rt(_n),o=n.memoizedState,o===null)return on(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Do(o,!1);else{if(xn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Xl(e),f!==null){for(n.flags|=128,Do(o,!1),e=f.updateQueue,n.updateQueue=e,ic(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)a0(a,e),a=a.sibling;return Ct(_n,_n.current&1|2),ze&&aa(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&M()>lc&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304)}else{if(!u)if(e=Xl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,ic(n,e),Do(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!ze)return on(n),null}else 2*M()-o.renderingStartTime>lc&&a!==536870912&&(n.flags|=128,u=!0,Do(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=M(),e.sibling=null,a=_n.current,Ct(_n,u?a&1|2:a&1),ze&&aa(n,o.treeForkCount),e):(on(n),null);case 22:case 23:return ui(n),lf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(on(n),n.subtreeFlags&6&&(n.flags|=8192)):on(n),a=n.updateQueue,a!==null&&ic(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&rt(Ar),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),sa(yn),on(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function xy(e,n){switch(qu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return sa(yn),$(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ut(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(r(340));Mr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Mr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return rt(_n),null;case 4:return $(),null;case 10:return sa(n.type),null;case 22:case 23:return ui(n),lf(),e!==null&&rt(Ar),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return sa(yn),null;case 25:return null;default:return null}}function Um(e,n){switch(qu(n),n.tag){case 3:sa(yn),$();break;case 26:case 27:case 5:ut(n);break;case 4:$();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:rt(_n);break;case 10:sa(n.type);break;case 22:case 23:ui(n),lf(),e!==null&&rt(Ar);break;case 24:sa(yn)}}function Uo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,y=a.inst;o=f(),y.destroy=o}a=a.next}while(a!==u)}}catch(A){We(n,n.return,A)}}function Ya(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var y=o.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=n;var V=a,ot=A;try{ot()}catch(vt){We(u,V,vt)}}}o=o.next}while(o!==f)}}catch(vt){We(n,n.return,vt)}}function Lm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{b0(n,a)}catch(o){We(e,e.return,o)}}}function Nm(e,n,a){a.props=Ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){We(e,n,o)}}function Lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){We(e,n,u)}}function Yi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){We(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){We(e,n,u)}else a.current=null}function Om(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){We(e,e.return,u)}}function Hf(e,n,a){try{var o=e.stateNode;By(o,e.type,a,n),o[pn]=n}catch(u){We(e,e.return,u)}}function zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&tr(e.type)||e.tag===4}function Gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&tr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ea));else if(o!==4&&(o===27&&tr(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Vf(e,n,a),e=e.sibling;e!==null;)Vf(e,n,a),e=e.sibling}function ac(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&tr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ac(e,n,a),e=e.sibling;e!==null;)ac(e,n,a),e=e.sibling}function Pm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Gn(n,o,a),n[$e]=e,n[pn]=a}catch(f){We(e,e.return,f)}}var fa=!1,Mn=!1,kf=!1,Fm=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function gy(e,n){if(e=e.containerInfo,uh=Tc,e=Zp(e),zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var y=0,A=-1,V=-1,ot=0,vt=0,wt=e,ft=null;e:for(;;){for(var mt;wt!==a||u!==0&&wt.nodeType!==3||(A=y+u),wt!==f||o!==0&&wt.nodeType!==3||(V=y+o),wt.nodeType===3&&(y+=wt.nodeValue.length),(mt=wt.firstChild)!==null;)ft=wt,wt=mt;for(;;){if(wt===e)break e;if(ft===a&&++ot===u&&(A=y),ft===f&&++vt===o&&(V=y),(mt=wt.nextSibling)!==null)break;wt=ft,ft=wt.parentNode}wt=mt}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(fh={focusedElem:e,selectionRange:a},Tc=!1,Nn=n;Nn!==null;)if(n=Nn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Nn=e;else for(;Nn!==null;){switch(n=Nn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ie=Ur(a.type,u);e=o.getSnapshotBeforeUpdate(ie,f),o.__reactInternalSnapshotBeforeUpdate=e}catch(he){We(a,a.return,he)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)ph(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ph(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Nn=e;break}Nn=n.return}}function Bm(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:da(e,a),o&4&&Uo(5,a);break;case 1:if(da(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){We(a,a.return,y)}else{var u=Ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){We(a,a.return,y)}}o&64&&Lm(a),o&512&&Lo(a,a.return);break;case 3:if(da(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{b0(e,n)}catch(y){We(a,a.return,y)}}break;case 27:n===null&&o&4&&Pm(a);case 26:case 5:da(e,a),n===null&&o&4&&Om(a),o&512&&Lo(a,a.return);break;case 12:da(e,a);break;case 31:da(e,a),o&4&&Gm(e,a);break;case 13:da(e,a),o&4&&Vm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ay.bind(null,a),qy(e,a))));break;case 22:if(o=a.memoizedState!==null||fa,!o){n=n!==null&&n.memoizedState!==null||Mn,u=fa;var f=Mn;fa=o,(Mn=n)&&!f?pa(e,a,(a.subtreeFlags&8772)!==0):da(e,a),fa=u,Mn=f}break;case 30:break;default:da(e,a)}}function Im(e){var n=e.alternate;n!==null&&(e.alternate=null,Im(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ro(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var hn=null,ei=!1;function ha(e,n,a){for(a=a.child;a!==null;)Hm(e,n,a),a=a.sibling}function Hm(e,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:Mn||Yi(a,n),ha(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||Yi(a,n);var o=hn,u=ei;tr(a.type)&&(hn=a.stateNode,ei=!1),ha(e,n,a),Go(a.stateNode),hn=o,ei=u;break;case 5:Mn||Yi(a,n);case 6:if(o=hn,u=ei,hn=null,ha(e,n,a),hn=o,ei=u,hn!==null)if(ei)try{(hn.nodeType===9?hn.body:hn.nodeName==="HTML"?hn.ownerDocument.body:hn).removeChild(a.stateNode)}catch(f){We(a,n,f)}else try{hn.removeChild(a.stateNode)}catch(f){We(a,n,f)}break;case 18:hn!==null&&(ei?(e=hn,Lx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),As(e)):Lx(hn,a.stateNode));break;case 4:o=hn,u=ei,hn=a.stateNode.containerInfo,ei=!0,ha(e,n,a),hn=o,ei=u;break;case 0:case 11:case 14:case 15:Ya(2,a,n),Mn||Ya(4,a,n),ha(e,n,a);break;case 1:Mn||(Yi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Nm(a,n,o)),ha(e,n,a);break;case 21:ha(e,n,a);break;case 22:Mn=(o=Mn)||a.memoizedState!==null,ha(e,n,a),Mn=o;break;default:ha(e,n,a)}}function Gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{As(e)}catch(a){We(n,n.return,a)}}}function Vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{As(e)}catch(a){We(n,n.return,a)}}function _y(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Fm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Fm),n;default:throw Error(r(435,e.tag))}}function rc(e,n){var a=_y(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ry.bind(null,e,o);o.then(u,u)}})}function ni(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,y=n,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(tr(A.type)){hn=A.stateNode,ei=!1;break t}break;case 5:hn=A.stateNode,ei=!1;break t;case 3:case 4:hn=A.stateNode.containerInfo,ei=!0;break t}A=A.return}if(hn===null)throw Error(r(160));Hm(f,y,u),hn=null,ei=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)km(n,e),n=n.sibling}var Li=null;function km(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ni(n,e),ii(e),o&4&&(Ya(3,e,e.return),Uo(3,e),Ya(5,e,e.return));break;case 1:ni(n,e),ii(e),o&512&&(Mn||a===null||Yi(a,a.return)),o&64&&fa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Li;if(ni(n,e),ii(e),o&512&&(Mn||a===null||Yi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ki]||f[$e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Gn(f,o,a),f[$e]=e,ct(f),o=f;break t;case"link":var y=kx("link","href",u).get(o+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(f=y[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}f=u.createElement(o),Gn(f,o,a),u.head.appendChild(f);break;case"meta":if(y=kx("meta","content",u).get(o+(a.content||""))){for(A=0;A<y.length;A++)if(f=y[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}f=u.createElement(o),Gn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[$e]=e,ct(f),o=f}e.stateNode=o}else Xx(u,e.type,e.stateNode);else e.stateNode=Vx(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?Xx(u,e.type,e.stateNode):Vx(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:ni(n,e),ii(e),o&512&&(Mn||a===null||Yi(a,a.return)),a!==null&&o&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ni(n,e),ii(e),o&512&&(Mn||a===null||Yi(a,a.return)),e.flags&32){u=e.stateNode;try{Xi(u,"")}catch(ie){We(e,e.return,ie)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(kf=!0);break;case 6:if(ni(n,e),ii(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ie){We(e,e.return,ie)}}break;case 3:if(Sc=null,u=Li,Li=vc(n.containerInfo),ni(n,e),Li=u,ii(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{As(n.containerInfo)}catch(ie){We(e,e.return,ie)}kf&&(kf=!1,Xm(e));break;case 4:o=Li,Li=vc(e.stateNode.containerInfo),ni(n,e),ii(e),Li=o;break;case 12:ni(n,e),ii(e);break;case 31:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 13:ni(n,e),ii(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oc=M()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ot=fa,vt=Mn;if(fa=ot||u,Mn=vt||V,ni(n,e),Mn=vt,fa=ot,ii(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||fa||Mn||Lr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(f=V.stateNode,u)y=f.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=V.stateNode;var wt=V.memoizedProps.style,ft=wt!=null&&wt.hasOwnProperty("display")?wt.display:null;A.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch(ie){We(V,V.return,ie)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(ie){We(V,V.return,ie)}}}else if(n.tag===18){if(a===null){V=n;try{var mt=V.stateNode;u?Nx(mt,!0):Nx(V.stateNode,!1)}catch(ie){We(V,V.return,ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,rc(e,a))));break;case 19:ni(n,e),ii(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,rc(e,o)));break;case 30:break;case 21:break;default:ni(n,e),ii(e)}}function ii(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(zm(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Gf(e);ac(e,f,u);break;case 5:var y=a.stateNode;a.flags&32&&(Xi(y,""),a.flags&=-33);var A=Gf(e);ac(e,A,y);break;case 3:case 4:var V=a.stateNode.containerInfo,ot=Gf(e);Vf(e,ot,V);break;default:throw Error(r(161))}}catch(vt){We(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Xm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Xm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function da(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Bm(e,n.alternate,n),n=n.sibling}function Lr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ya(4,n,n.return),Lr(n);break;case 1:Yi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Nm(n,n.return,a),Lr(n);break;case 27:Go(n.stateNode);case 26:case 5:Yi(n,n.return),Lr(n);break;case 22:n.memoizedState===null&&Lr(n);break;case 30:Lr(n);break;default:Lr(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,y=f.flags;switch(f.tag){case 0:case 11:case 15:pa(u,f,a),Uo(4,f);break;case 1:if(pa(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){We(o,o.return,ot)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)S0(V[u],A)}catch(ot){We(o,o.return,ot)}}a&&y&64&&Lm(f),Lo(f,f.return);break;case 27:Pm(f);case 26:case 5:pa(u,f,a),a&&o===null&&y&4&&Om(f),Lo(f,f.return);break;case 12:pa(u,f,a);break;case 31:pa(u,f,a),a&&y&4&&Gm(u,f);break;case 13:pa(u,f,a),a&&y&4&&Vm(u,f);break;case 22:f.memoizedState===null&&pa(u,f,a),Lo(f,f.return);break;case 30:break;default:pa(u,f,a)}n=n.sibling}}function Xf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_o(a))}function Wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e))}function Ni(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Wm(e,n,a,o),n=n.sibling}function Wm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,o),u&2048&&Uo(9,n);break;case 1:Ni(e,n,a,o);break;case 3:Ni(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_o(e)));break;case 12:if(u&2048){Ni(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,y=f.id,A=f.onPostCommit;typeof A=="function"&&A(y,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){We(n,n.return,V)}}else Ni(e,n,a,o);break;case 31:Ni(e,n,a,o);break;case 13:Ni(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,y=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(e,n,a,o):No(e,n):f._visibility&2?Ni(e,n,a,o):(f._visibility|=2,ms(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Xf(y,n);break;case 24:Ni(e,n,a,o),u&2048&&Wf(n.alternate,n);break;default:Ni(e,n,a,o)}}function ms(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,A=a,V=o,ot=y.flags;switch(y.tag){case 0:case 11:case 15:ms(f,y,A,V,u),Uo(8,y);break;case 23:break;case 22:var vt=y.stateNode;y.memoizedState!==null?vt._visibility&2?ms(f,y,A,V,u):No(f,y):(vt._visibility|=2,ms(f,y,A,V,u)),u&&ot&2048&&Xf(y.alternate,y);break;case 24:ms(f,y,A,V,u),u&&ot&2048&&Wf(y.alternate,y);break;default:ms(f,y,A,V,u)}n=n.sibling}}function No(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:No(a,o),u&2048&&Xf(o.alternate,o);break;case 24:No(a,o),u&2048&&Wf(o.alternate,o);break;default:No(a,o)}n=n.sibling}}var Oo=8192;function xs(e,n,a){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)qm(e,n,a),e=e.sibling}function qm(e,n,a){switch(e.tag){case 26:xs(e,n,a),e.flags&Oo&&e.memoizedState!==null&&aS(a,Li,e.memoizedState,e.memoizedProps);break;case 5:xs(e,n,a);break;case 3:case 4:var o=Li;Li=vc(e.stateNode.containerInfo),xs(e,n,a),Li=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Oo,Oo=16777216,xs(e,n,a),Oo=o):xs(e,n,a));break;default:xs(e,n,a)}}function Ym(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function zo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,Zm(o,e)}Ym(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)jm(e),e=e.sibling}function jm(e){switch(e.tag){case 0:case 11:case 15:zo(e),e.flags&2048&&Ya(9,e,e.return);break;case 3:zo(e);break;case 12:zo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,sc(e)):zo(e);break;default:zo(e)}}function sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Nn=o,Zm(o,e)}Ym(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ya(8,n,n.return),sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,sc(n));break;default:sc(n)}e=e.sibling}}function Zm(e,n){for(;Nn!==null;){var a=Nn;switch(a.tag){case 0:case 11:case 15:Ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:_o(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Nn=o;else t:for(a=e;Nn!==null;){o=Nn;var u=o.sibling,f=o.return;if(Im(o),o===a){Nn=null;break t}if(u!==null){u.return=f,Nn=u;break t}Nn=f}}}var vy={getCacheForType:function(e){var n=In(yn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return In(yn).controller.signal}},yy=typeof WeakMap=="function"?WeakMap:Map,Ve=0,en=null,Re=null,Ce=0,Xe=0,fi=null,ja=!1,gs=!1,qf=!1,ma=0,xn=0,Za=0,Nr=0,Yf=0,hi=0,_s=0,Po=null,ai=null,jf=!1,oc=0,Km=0,lc=1/0,cc=null,Ka=null,Rn=0,Qa=null,vs=null,xa=0,Zf=0,Kf=null,Qm=null,Fo=0,Qf=null;function di(){return(Ve&2)!==0&&Ce!==0?Ce&-Ce:F.T!==null?ih():Je()}function Jm(){if(hi===0)if((Ce&536870912)===0||ze){var e=Ft;Ft<<=1,(Ft&3932160)===0&&(Ft=262144),hi=e}else hi=536870912;return e=ci.current,e!==null&&(e.flags|=32),hi}function ri(e,n,a){(e===en&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(ys(e,0),Ja(e,Ce,hi,!1)),Tn(e,a),((Ve&2)===0||e!==en)&&(e===en&&((Ve&2)===0&&(Nr|=a),xn===4&&Ja(e,Ce,hi,!1)),ji(e))}function $m(e,n,a){if((Ve&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||$t(e,n),u=o?My(e,n):$f(e,n,!0),f=o;do{if(u===0){gs&&!o&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Sy(a)){u=$f(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var A=e;u=Po;var V=A.current.memoizedState.isDehydrated;if(V&&(ys(A,y).flags|=256),y=$f(A,y,!1),y!==2){if(qf&&!V){A.errorRecoveryDisabledLanes|=f,Nr|=f,u=4;break t}f=ai,ai=u,f!==null&&(ai===null?ai=f:ai.push.apply(ai,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){ys(e,0),Ja(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ja(o,n,hi,!ja);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=oc+300-M(),10<u)){if(Ja(o,n,hi,!ja),At(o,0,!0)!==0)break t;xa=n,o.timeoutHandle=Dx(tx.bind(null,o,a,ai,cc,jf,n,hi,Nr,_s,ja,f,"Throttled",-0,0),u);break t}tx(o,a,ai,cc,jf,n,hi,Nr,_s,ja,f,null,-0,0)}}break}while(!0);ji(e)}function tx(e,n,a,o,u,f,y,A,V,ot,vt,wt,ft,mt){if(e.timeoutHandle=-1,wt=n.subtreeFlags,wt&8192||(wt&16785408)===16785408){wt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ea},qm(n,f,wt);var ie=(f&62914560)===f?oc-M():(f&4194048)===f?Km-M():0;if(ie=rS(wt,ie),ie!==null){xa=f,e.cancelPendingCommit=ie(lx.bind(null,e,n,f,a,o,u,y,A,V,vt,wt,null,ft,mt)),Ja(e,f,y,!ot);return}}lx(e,n,f,a,o,u,y,A,V)}function Sy(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!oi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,o){n&=~Yf,n&=~Nr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Yt(u),y=1<<f;o[f]=-1,u&=~y}a!==0&&be(e,a,n)}function uc(){return(Ve&6)===0?(Bo(0),!1):!0}function Jf(){if(Re!==null){if(Xe===0)var e=Re.return;else e=Re,ra=Er=null,pf(e),us=null,yo=0,e=Re;for(;e!==null;)Um(e.alternate,e),e=e.return;Re=null}}function ys(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Gy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),xa=0,Jf(),en=e,Re=a=ia(e.current,null),Ce=n,Xe=0,fi=null,ja=!1,gs=$t(e,n),qf=!1,_s=hi=Yf=Nr=Za=xn=0,ai=Po=null,jf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Yt(o),f=1<<u;n|=e[u],o&=~f}return ma=n,Ul(),a}function ex(e,n){_e=null,F.H=wo,n===cs||n===Il?(n=g0(),Xe=3):n===ef?(n=g0(),Xe=4):Xe=n===Df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Re===null&&(xn=1,$l(e,Si(n,e.current)))}function nx(){var e=ci.current;return e===null?!0:(Ce&4194048)===Ce?Ti===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===Ti:!1}function ix(){var e=F.H;return F.H=wo,e===null?wo:e}function ax(){var e=F.A;return F.A=vy,e}function fc(){xn=4,ja||(Ce&4194048)!==Ce&&ci.current!==null||(gs=!0),(Za&134217727)===0&&(Nr&134217727)===0||en===null||Ja(en,Ce,hi,!1)}function $f(e,n,a){var o=Ve;Ve|=2;var u=ix(),f=ax();(en!==e||Ce!==n)&&(cc=null,ys(e,n)),n=!1;var y=xn;t:do try{if(Xe!==0&&Re!==null){var A=Re,V=fi;switch(Xe){case 8:Jf(),y=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(n=!0);var ot=Xe;if(Xe=0,fi=null,Ss(e,A,V,ot),a&&gs){y=0;break t}break;default:ot=Xe,Xe=0,fi=null,Ss(e,A,V,ot)}}by(),y=xn;break}catch(vt){ex(e,vt)}while(!0);return n&&e.shellSuspendCounter++,ra=Er=null,Ve=o,F.H=u,F.A=f,Re===null&&(en=null,Ce=0,Ul()),y}function by(){for(;Re!==null;)rx(Re)}function My(e,n){var a=Ve;Ve|=2;var o=ix(),u=ax();en!==e||Ce!==n?(cc=null,lc=M()+500,ys(e,n)):gs=$t(e,n);t:do try{if(Xe!==0&&Re!==null){n=Re;var f=fi;e:switch(Xe){case 1:Xe=0,fi=null,Ss(e,n,f,1);break;case 2:case 9:if(m0(f)){Xe=0,fi=null,sx(n);break}n=function(){Xe!==2&&Xe!==9||en!==e||(Xe=7),ji(e)},f.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:m0(f)?(Xe=0,fi=null,sx(n)):(Xe=0,fi=null,Ss(e,n,f,7));break;case 5:var y=null;switch(Re.tag){case 26:y=Re.memoizedState;case 5:case 27:var A=Re;if(y?Wx(y):A.stateNode.complete){Xe=0,fi=null;var V=A.sibling;if(V!==null)Re=V;else{var ot=A.return;ot!==null?(Re=ot,hc(ot)):Re=null}break e}}Xe=0,fi=null,Ss(e,n,f,5);break;case 6:Xe=0,fi=null,Ss(e,n,f,6);break;case 8:Jf(),xn=6;break t;default:throw Error(r(462))}}Ey();break}catch(vt){ex(e,vt)}while(!0);return ra=Er=null,F.H=o,F.A=u,Ve=a,Re!==null?0:(en=null,Ce=0,Ul(),xn)}function Ey(){for(;Re!==null&&!kt();)rx(Re)}function rx(e){var n=Cm(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?hc(e):Re=n}function sx(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Mm(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=Mm(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:pf(n);default:Um(a,n),n=Re=a0(n,ma),n=Cm(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?hc(e):Re=n}function Ss(e,n,a,o){ra=Er=null,pf(n),us=null,yo=0;var u=n.return;try{if(hy(e,u,n,a,Ce)){xn=1,$l(e,Si(a,e.current)),Re=null;return}}catch(f){if(u!==null)throw Re=u,f;xn=1,$l(e,Si(a,e.current)),Re=null;return}n.flags&32768?(ze||o===1?e=!0:gs||(Ce&536870912)!==0?e=!1:(ja=e=!0,(o===2||o===9||o===3||o===6)&&(o=ci.current,o!==null&&o.tag===13&&(o.flags|=16384))),ox(n,e)):hc(n)}function hc(e){var n=e;do{if((n.flags&32768)!==0){ox(n,ja);return}e=n.return;var a=my(n.alternate,n,ma);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);xn===0&&(xn=5)}function ox(e,n){do{var a=xy(e.alternate,e);if(a!==null){a.flags&=32767,Re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=a}while(e!==null);xn=6,Re=null}function lx(e,n,a,o,u,f,y,A,V){e.cancelPendingCommit=null;do dc();while(Rn!==0);if((Ve&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Hu,te(e,a,f,y,A,V),e===en&&(Re=en=null,Ce=0),vs=n,Qa=e,xa=a,Zf=f,Kf=u,Qm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wy(at,function(){return dx(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=Z.p,Z.p=2,y=Ve,Ve|=4;try{gy(e,n,a)}finally{Ve=y,Z.p=u,F.T=o}}Rn=1,cx(),ux(),fx()}}function cx(){if(Rn===1){Rn=0;var e=Qa,n=vs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var o=Z.p;Z.p=2;var u=Ve;Ve|=4;try{km(n,e);var f=fh,y=Zp(e.containerInfo),A=f.focusedElem,V=f.selectionRange;if(y!==A&&A&&A.ownerDocument&&jp(A.ownerDocument.documentElement,A)){if(V!==null&&zu(A)){var ot=V.start,vt=V.end;if(vt===void 0&&(vt=ot),"selectionStart"in A)A.selectionStart=ot,A.selectionEnd=Math.min(vt,A.value.length);else{var wt=A.ownerDocument||document,ft=wt&&wt.defaultView||window;if(ft.getSelection){var mt=ft.getSelection(),ie=A.textContent.length,he=Math.min(V.start,ie),Ze=V.end===void 0?he:Math.min(V.end,ie);!mt.extend&&he>Ze&&(y=Ze,Ze=he,he=y);var J=Yp(A,he),W=Yp(A,Ze);if(J&&W&&(mt.rangeCount!==1||mt.anchorNode!==J.node||mt.anchorOffset!==J.offset||mt.focusNode!==W.node||mt.focusOffset!==W.offset)){var st=wt.createRange();st.setStart(J.node,J.offset),mt.removeAllRanges(),he>Ze?(mt.addRange(st),mt.extend(W.node,W.offset)):(st.setEnd(W.node,W.offset),mt.addRange(st))}}}}for(wt=[],mt=A;mt=mt.parentNode;)mt.nodeType===1&&wt.push({element:mt,left:mt.scrollLeft,top:mt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<wt.length;A++){var Tt=wt[A];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}Tc=!!uh,fh=uh=null}finally{Ve=u,Z.p=o,F.T=a}}e.current=n,Rn=2}}function ux(){if(Rn===2){Rn=0;var e=Qa,n=vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var o=Z.p;Z.p=2;var u=Ve;Ve|=4;try{Bm(e,n.alternate,n)}finally{Ve=u,Z.p=o,F.T=a}}Rn=3}}function fx(){if(Rn===4||Rn===3){Rn=0,R();var e=Qa,n=vs,a=xa,o=Qm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,vs=Qa=null,hx(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ka=null),Te(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=Z.p,Z.p=2,F.T=null;try{for(var f=e.onRecoverableError,y=0;y<o.length;y++){var A=o[y];f(A.value,{componentStack:A.stack})}}finally{F.T=n,Z.p=u}}(xa&3)!==0&&dc(),ji(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Qf?Fo++:(Fo=0,Qf=e):Fo=0,Bo(0)}}function hx(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,_o(n)))}function dc(){return cx(),ux(),fx(),dx()}function dx(){if(Rn!==5)return!1;var e=Qa,n=Zf;Zf=0;var a=Te(xa),o=F.T,u=Z.p;try{Z.p=32>a?32:a,F.T=null,a=Kf,Kf=null;var f=Qa,y=xa;if(Rn=0,vs=Qa=null,xa=0,(Ve&6)!==0)throw Error(r(331));var A=Ve;if(Ve|=4,jm(f.current),Wm(f,f.current,y,a),Ve=A,Bo(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{Z.p=u,F.T=o,hx(e,n)}}function px(e,n,a){n=Si(a,n),n=Cf(e.stateNode,n,2),e=Xa(e,n,2),e!==null&&(Tn(e,2),ji(e))}function We(e,n,a){if(e.tag===3)px(e,e,a);else for(;n!==null;){if(n.tag===3){px(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ka===null||!Ka.has(o))){e=Si(a,e),a=mm(2),o=Xa(n,a,2),o!==null&&(xm(a,o,n,e),Tn(o,2),ji(o));break}}n=n.return}}function th(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new yy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(qf=!0,u.add(a),e=Ty.bind(null,e,n,a),n.then(e,e))}function Ty(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,en===e&&(Ce&a)===a&&(xn===4||xn===3&&(Ce&62914560)===Ce&&300>M()-oc?(Ve&2)===0&&ys(e,0):Yf|=a,_s===Ce&&(_s=0)),ji(e)}function mx(e,n){n===0&&(n=Ge()),e=Sr(e,n),e!==null&&(Tn(e,n),ji(e))}function Ay(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),mx(e,a)}function Ry(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),mx(e,a)}function wy(e,n){return ue(e,n)}var pc=null,bs=null,eh=!1,mc=!1,nh=!1,$a=0;function ji(e){e!==bs&&e.next===null&&(bs===null?pc=bs=e:bs=bs.next=e),mc=!0,eh||(eh=!0,Dy())}function Bo(e,n){if(!nh&&mc){nh=!0;do for(var a=!1,o=pc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var y=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Yt(42|e)+1)-1,f&=u&~(y&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,vx(o,f))}else f=Ce,f=At(o,o===en?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||$t(o,f)||(a=!0,vx(o,f));o=o.next}while(a);nh=!1}}function Cy(){xx()}function xx(){mc=eh=!1;var e=0;$a!==0&&Hy()&&(e=$a);for(var n=M(),a=null,o=pc;o!==null;){var u=o.next,f=gx(o,n);f===0?(o.next=null,a===null?pc=u:a.next=u,u===null&&(bs=a)):(a=o,(e!==0||(f&3)!==0)&&(mc=!0)),o=u}Rn!==0&&Rn!==5||Bo(e),$a!==0&&($a=0)}function gx(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Yt(f),A=1<<y,V=u[y];V===-1?((A&a)===0||(A&o)!==0)&&(u[y]=pe(A,n)):V<=n&&(e.expiredLanes|=A),f&=~A}if(n=en,a=Ce,a=At(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Zt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Zt(o),Te(a)){case 2:case 8:a=pt;break;case 32:a=at;break;case 268435456:a=Nt;break;default:a=at}return o=_x.bind(null,e),a=ue(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Zt(o),e.callbackPriority=2,e.callbackNode=null,2}function _x(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dc()&&e.callbackNode!==a)return null;var o=Ce;return o=At(e,e===en?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:($m(e,o,n),gx(e,M()),e.callbackNode!=null&&e.callbackNode===a?_x.bind(null,e):null)}function vx(e,n){if(dc())return null;$m(e,n,!0)}function Dy(){Vy(function(){(Ve&6)!==0?ue(it,Cy):xx()})}function ih(){if($a===0){var e=os;e===0&&(e=It,It<<=1,(It&261888)===0&&(It=256)),$a=e}return $a}function yx(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ml(""+e)}function Sx(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Uy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=yx((u[pn]||null).action),y=o.submitter;y&&(n=(n=y[pn]||null)?yx(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var A=new Rl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if($a!==0){var V=y?Sx(u,y):new FormData(u);Mf(a,{pending:!0,data:V,method:u.method,action:f},null,V)}}else typeof f=="function"&&(A.preventDefault(),V=y?Sx(u,y):new FormData(u),Mf(a,{pending:!0,data:V,method:u.method,action:f},f,V))},currentTarget:u}]})}}for(var ah=0;ah<Iu.length;ah++){var rh=Iu[ah],Ly=rh.toLowerCase(),Ny=rh[0].toUpperCase()+rh.slice(1);Ui(Ly,"on"+Ny)}Ui(Jp,"onAnimationEnd"),Ui($p,"onAnimationIteration"),Ui(t0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(Zv,"onTransitionRun"),Ui(Kv,"onTransitionStart"),Ui(Qv,"onTransitionCancel"),Ui(e0,"onTransitionEnd"),ee("onMouseEnter",["mouseout","mouseover"]),ee("onMouseLeave",["mouseout","mouseover"]),ee("onPointerEnter",["pointerout","pointerover"]),ee("onPointerLeave",["pointerout","pointerover"]),jt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jt("onBeforeInput",["compositionend","keypress","textInput","paste"]),jt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function bx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var y=o.length-1;0<=y;y--){var A=o[y],V=A.instance,ot=A.currentTarget;if(A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=ot;try{f(u)}catch(vt){Dl(vt)}u.currentTarget=null,f=V}else for(y=0;y<o.length;y++){if(A=o[y],V=A.instance,ot=A.currentTarget,A=A.listener,V!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=ot;try{f(u)}catch(vt){Dl(vt)}u.currentTarget=null,f=V}}}}function we(e,n){var a=n[Oa];a===void 0&&(a=n[Oa]=new Set);var o=e+"__bubble";a.has(o)||(Mx(n,e,2,!1),a.add(o))}function sh(e,n,a){var o=0;n&&(o|=4),Mx(a,e,o,n)}var xc="_reactListening"+Math.random().toString(36).slice(2);function oh(e){if(!e[xc]){e[xc]=!0,tt.forEach(function(a){a!=="selectionchange"&&(Oy.has(a)||sh(a,!1,e),sh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xc]||(n[xc]=!0,sh("selectionchange",!1,n))}}function Mx(e,n,a,o){switch(Jx(n)){case 2:var u=lS;break;case 8:u=cS;break;default:u=bh}a=u.bind(null,n,a,e),u=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function lh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var A=o.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=o.return;y!==null;){var V=y.tag;if((V===3||V===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=za(A),y===null)return;if(V=y.tag,V===5||V===6||V===26||V===27){o=f=y;continue t}A=A.parentNode}}o=o.return}wp(function(){var ot=f,vt=Eu(a),wt=[];t:{var ft=n0.get(e);if(ft!==void 0){var mt=Rl,ie=e;switch(e){case"keypress":if(Tl(a)===0)break t;case"keydown":case"keyup":mt=Rv;break;case"focusin":ie="focus",mt=Du;break;case"focusout":ie="blur",mt=Du;break;case"beforeblur":case"afterblur":mt=Du;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":mt=Up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":mt=mv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":mt=Dv;break;case Jp:case $p:case t0:mt=_v;break;case e0:mt=Lv;break;case"scroll":case"scrollend":mt=dv;break;case"wheel":mt=Ov;break;case"copy":case"cut":case"paste":mt=yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":mt=Np;break;case"toggle":case"beforetoggle":mt=Pv}var he=(n&4)!==0,Ze=!he&&(e==="scroll"||e==="scrollend"),J=he?ft!==null?ft+"Capture":null:ft;he=[];for(var W=ot,st;W!==null;){var Tt=W;if(st=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||st===null||J===null||(Tt=so(W,J),Tt!=null&&he.push(Ho(W,Tt,st))),Ze)break;W=W.return}0<he.length&&(ft=new mt(ft,ie,null,a,vt),wt.push({event:ft,listeners:he}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",mt=e==="mouseout"||e==="pointerout",ft&&a!==Mu&&(ie=a.relatedTarget||a.fromElement)&&(za(ie)||ie[vi]))break t;if((mt||ft)&&(ft=vt.window===vt?vt:(ft=vt.ownerDocument)?ft.defaultView||ft.parentWindow:window,mt?(ie=a.relatedTarget||a.toElement,mt=ot,ie=ie?za(ie):null,ie!==null&&(Ze=c(ie),he=ie.tag,ie!==Ze||he!==5&&he!==27&&he!==6)&&(ie=null)):(mt=null,ie=ot),mt!==ie)){if(he=Up,Tt="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(he=Np,Tt="onPointerLeave",J="onPointerEnter",W="pointer"),Ze=mt==null?ft:Q(mt),st=ie==null?ft:Q(ie),ft=new he(Tt,W+"leave",mt,a,vt),ft.target=Ze,ft.relatedTarget=st,Tt=null,za(vt)===ot&&(he=new he(J,W+"enter",ie,a,vt),he.target=st,he.relatedTarget=Ze,Tt=he),Ze=Tt,mt&&ie)e:{for(he=zy,J=mt,W=ie,st=0,Tt=J;Tt;Tt=he(Tt))st++;Tt=0;for(var oe=W;oe;oe=he(oe))Tt++;for(;0<st-Tt;)J=he(J),st--;for(;0<Tt-st;)W=he(W),Tt--;for(;st--;){if(J===W||W!==null&&J===W.alternate){he=J;break e}J=he(J),W=he(W)}he=null}else he=null;mt!==null&&Ex(wt,ft,mt,he,!1),ie!==null&&Ze!==null&&Ex(wt,Ze,ie,he,!0)}}t:{if(ft=ot?Q(ot):window,mt=ft.nodeName&&ft.nodeName.toLowerCase(),mt==="select"||mt==="input"&&ft.type==="file")var Be=Gp;else if(Ip(ft))if(Vp)Be=qv;else{Be=Xv;var ae=kv}else mt=ft.nodeName,!mt||mt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?ot&&bu(ot.elementType)&&(Be=Gp):Be=Wv;if(Be&&(Be=Be(e,ot))){Hp(wt,Be,a,vt);break t}ae&&ae(e,ft,ot),e==="focusout"&&ot&&ft.type==="number"&&ot.memoizedProps.value!=null&&Un(ft,"number",ft.value)}switch(ae=ot?Q(ot):window,e){case"focusin":(Ip(ae)||ae.contentEditable==="true")&&($r=ae,Pu=ot,mo=null);break;case"focusout":mo=Pu=$r=null;break;case"mousedown":Fu=!0;break;case"contextmenu":case"mouseup":case"dragend":Fu=!1,Kp(wt,a,vt);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":Kp(wt,a,vt)}var ye;if(Lu)t:{switch(e){case"compositionstart":var De="onCompositionStart";break t;case"compositionend":De="onCompositionEnd";break t;case"compositionupdate":De="onCompositionUpdate";break t}De=void 0}else Jr?Fp(e,a)&&(De="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(De="onCompositionStart");De&&(Op&&a.locale!=="ko"&&(Jr||De!=="onCompositionStart"?De==="onCompositionEnd"&&Jr&&(ye=Cp()):(Fa=vt,Ru="value"in Fa?Fa.value:Fa.textContent,Jr=!0)),ae=gc(ot,De),0<ae.length&&(De=new Lp(De,e,null,a,vt),wt.push({event:De,listeners:ae}),ye?De.data=ye:(ye=Bp(a),ye!==null&&(De.data=ye)))),(ye=Bv?Iv(e,a):Hv(e,a))&&(De=gc(ot,"onBeforeInput"),0<De.length&&(ae=new Lp("onBeforeInput","beforeinput",null,a,vt),wt.push({event:ae,listeners:De}),ae.data=ye)),Uy(wt,e,ot,a,vt)}bx(wt,n)})}function Ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function gc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=so(e,a),u!=null&&o.unshift(Ho(e,u,f)),u=so(e,n),u!=null&&o.push(Ho(e,u,f))),e.tag===3)return o;e=e.return}return[]}function zy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ex(e,n,a,o,u){for(var f=n._reactName,y=[];a!==null&&a!==o;){var A=a,V=A.alternate,ot=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||ot===null||(V=ot,u?(ot=so(a,f),ot!=null&&y.unshift(Ho(a,ot,V))):u||(ot=so(a,f),ot!=null&&y.push(Ho(a,ot,V)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var Py=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function Tx(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(Fy,"")}function Ax(e,n){return n=Tx(n),Tx(e)===n}function je(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Xi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Xi(e,""+o);break;case"className":Pe(e,"class",o);break;case"tabIndex":Pe(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Pe(e,a,o);break;case"style":Ap(e,o,f);break;case"data":if(n!=="object"){Pe(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&je(e,n,"name",u.name,u,null),je(e,n,"formEncType",u.formEncType,u,null),je(e,n,"formMethod",u.formMethod,u,null),je(e,n,"formTarget",u.formTarget,u,null)):(je(e,n,"encType",u.encType,u,null),je(e,n,"method",u.method,u,null),je(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ea);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":we("beforetoggle",e),we("toggle",e),ve(e,"popover",o);break;case"xlinkActuate":Fe(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Fe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Fe(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Fe(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Fe(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Fe(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Fe(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Fe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Fe(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ve(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=fv.get(a)||a,ve(e,a,o))}}function ch(e,n,a,o,u,f){switch(a){case"style":Ap(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Xi(e,o):(typeof o=="number"||typeof o=="bigint")&&Xi(e,""+o);break;case"onScroll":o!=null&&we("scroll",e);break;case"onScrollEnd":o!=null&&we("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ve(e,a,o)}}}function Gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":we("error",e),we("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:je(e,n,f,y,a,null)}}u&&je(e,n,"srcSet",a.srcSet,a,null),o&&je(e,n,"src",a.src,a,null);return;case"input":we("invalid",e);var A=f=y=u=null,V=null,ot=null;for(o in a)if(a.hasOwnProperty(o)){var vt=a[o];if(vt!=null)switch(o){case"name":u=vt;break;case"type":y=vt;break;case"checked":V=vt;break;case"defaultChecked":ot=vt;break;case"value":f=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:je(e,n,o,vt,a,null)}}an(e,f,A,V,ot,y,u,!1);return;case"select":we("invalid",e),o=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":y=A;break;case"multiple":o=A;default:je(e,n,u,A,a,null)}n=f,a=y,e.multiple=!!o,n!=null?An(e,!!o,n,!1):a!=null&&An(e,!!o,a,!0);return;case"textarea":we("invalid",e),f=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:je(e,n,y,A,a,null)}Fn(e,o,u,f);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:je(e,n,V,o,a,null)}return;case"dialog":we("beforetoggle",e),we("toggle",e),we("cancel",e),we("close",e);break;case"iframe":case"object":we("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)we(Io[o],e);break;case"image":we("error",e),we("load",e);break;case"details":we("toggle",e);break;case"embed":case"source":case"link":we("error",e),we("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ot in a)if(a.hasOwnProperty(ot)&&(o=a[ot],o!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:je(e,n,ot,o,a,null)}return;default:if(bu(n)){for(vt in a)a.hasOwnProperty(vt)&&(o=a[vt],o!==void 0&&ch(e,n,vt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&je(e,n,A,o,a,null))}function By(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,A=null,V=null,ot=null,vt=null;for(mt in a){var wt=a[mt];if(a.hasOwnProperty(mt)&&wt!=null)switch(mt){case"checked":break;case"value":break;case"defaultValue":V=wt;default:o.hasOwnProperty(mt)||je(e,n,mt,null,o,wt)}}for(var ft in o){var mt=o[ft];if(wt=a[ft],o.hasOwnProperty(ft)&&(mt!=null||wt!=null))switch(ft){case"type":f=mt;break;case"name":u=mt;break;case"checked":ot=mt;break;case"defaultChecked":vt=mt;break;case"value":y=mt;break;case"defaultValue":A=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:mt!==wt&&je(e,n,ft,mt,o,wt)}}$i(e,y,A,V,ot,vt,f,u);return;case"select":mt=y=A=ft=null;for(f in a)if(V=a[f],a.hasOwnProperty(f)&&V!=null)switch(f){case"value":break;case"multiple":mt=V;default:o.hasOwnProperty(f)||je(e,n,f,null,o,V)}for(u in o)if(f=o[u],V=a[u],o.hasOwnProperty(u)&&(f!=null||V!=null))switch(u){case"value":ft=f;break;case"defaultValue":A=f;break;case"multiple":y=f;default:f!==V&&je(e,n,u,f,o,V)}n=A,a=y,o=mt,ft!=null?An(e,!!a,ft,!1):!!o!=!!a&&(n!=null?An(e,!!a,n,!0):An(e,!!a,a?[]:"",!1));return;case"textarea":mt=ft=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:je(e,n,A,null,o,u)}for(y in o)if(u=o[y],f=a[y],o.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":ft=u;break;case"defaultValue":mt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&je(e,n,y,u,o,f)}Ln(e,ft,mt);return;case"option":for(var ie in a)if(ft=a[ie],a.hasOwnProperty(ie)&&ft!=null&&!o.hasOwnProperty(ie))switch(ie){case"selected":e.selected=!1;break;default:je(e,n,ie,null,o,ft)}for(V in o)if(ft=o[V],mt=a[V],o.hasOwnProperty(V)&&ft!==mt&&(ft!=null||mt!=null))switch(V){case"selected":e.selected=ft&&typeof ft!="function"&&typeof ft!="symbol";break;default:je(e,n,V,ft,o,mt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var he in a)ft=a[he],a.hasOwnProperty(he)&&ft!=null&&!o.hasOwnProperty(he)&&je(e,n,he,null,o,ft);for(ot in o)if(ft=o[ot],mt=a[ot],o.hasOwnProperty(ot)&&ft!==mt&&(ft!=null||mt!=null))switch(ot){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:je(e,n,ot,ft,o,mt)}return;default:if(bu(n)){for(var Ze in a)ft=a[Ze],a.hasOwnProperty(Ze)&&ft!==void 0&&!o.hasOwnProperty(Ze)&&ch(e,n,Ze,void 0,o,ft);for(vt in o)ft=o[vt],mt=a[vt],!o.hasOwnProperty(vt)||ft===mt||ft===void 0&&mt===void 0||ch(e,n,vt,ft,o,mt);return}}for(var J in a)ft=a[J],a.hasOwnProperty(J)&&ft!=null&&!o.hasOwnProperty(J)&&je(e,n,J,null,o,ft);for(wt in o)ft=o[wt],mt=a[wt],!o.hasOwnProperty(wt)||ft===mt||ft==null&&mt==null||je(e,n,wt,ft,o,mt)}function Rx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,y=u.initiatorType,A=u.duration;if(f&&A&&Rx(y)){for(y=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ot=V.startTime;if(ot>A)break;var vt=V.transferSize,wt=V.initiatorType;vt&&Rx(wt)&&(V=V.responseEnd,y+=vt*(V<A?1:(A-ot)/(V-ot)))}if(--o,n+=8*(f+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var uh=null,fh=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function wx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function hh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var dh=null;function Hy(){var e=window.event;return e&&e.type==="popstate"?e===dh?!1:(dh=e,!0):(dh=null,!1)}var Dx=typeof setTimeout=="function"?setTimeout:void 0,Gy=typeof clearTimeout=="function"?clearTimeout:void 0,Ux=typeof Promise=="function"?Promise:void 0,Vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ux<"u"?function(e){return Ux.resolve(null).then(e).catch(ky)}:Dx;function ky(e){setTimeout(function(){throw e})}function tr(e){return e==="head"}function Lx(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),As(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Go(a);for(var f=a.firstChild;f;){var y=f.nextSibling,A=f.nodeName;f[ki]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&Go(e.ownerDocument.body);a=u}while(a);As(n)}function Nx(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function ph(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ph(a),ro(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Xy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ki])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ai(e.nextSibling),e===null)break}return null}function Wy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ai(e.nextSibling),e===null))return null;return e}function Ox(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ai(e.nextSibling),e===null))return null;return e}function mh(e){return e.data==="$?"||e.data==="$~"}function xh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function qy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ai(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var gh=null;function zx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Px(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Fx(e,n,a){switch(n=_c(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ro(e)}var Ri=new Map,Bx=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ga=Z.d;Z.d={f:Yy,r:jy,D:Zy,C:Ky,L:Qy,m:Jy,X:tS,S:$y,M:eS};function Yy(){var e=ga.f(),n=uc();return e||n}function jy(e){var n=w(e);n!==null&&n.tag===5&&n.type==="form"?em(n):ga.r(e)}var Ms=typeof document>"u"?null:document;function Ix(e,n,a){var o=Ms;if(o&&typeof n=="string"&&n){var u=nn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Bx.has(u)||(Bx.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Gn(n,"link",e),ct(n),o.head.appendChild(n)))}}function Zy(e){ga.D(e),Ix("dns-prefetch",e,null)}function Ky(e,n){ga.C(e,n),Ix("preconnect",e,n)}function Qy(e,n,a){ga.L(e,n,a);var o=Ms;if(o&&e&&n){var u='link[rel="preload"][as="'+nn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+nn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+nn(a.imageSizes)+'"]')):u+='[href="'+nn(e)+'"]';var f=u;switch(n){case"style":f=Es(e);break;case"script":f=Ts(e)}Ri.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ri.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Vo(f))||n==="script"&&o.querySelector(ko(f))||(n=o.createElement("link"),Gn(n,"link",e),ct(n),o.head.appendChild(n)))}}function Jy(e,n){ga.m(e,n);var a=Ms;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+nn(o)+'"][href="'+nn(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ts(e)}if(!Ri.has(f)&&(e=x({rel:"modulepreload",href:e},n),Ri.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(f)))return}o=a.createElement("link"),Gn(o,"link",e),ct(o),a.head.appendChild(o)}}}function $y(e,n,a){ga.S(e,n,a);var o=Ms;if(o&&e){var u=dt(o).hoistableStyles,f=Es(e);n=n||"default";var y=u.get(f);if(!y){var A={loading:0,preload:null};if(y=o.querySelector(Vo(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ri.get(f))&&_h(e,a);var V=y=o.createElement("link");ct(V),Gn(V,"link",e),V._p=new Promise(function(ot,vt){V.onload=ot,V.onerror=vt}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,yc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(f,y)}}}function tS(e,n){ga.X(e,n);var a=Ms;if(a&&e){var o=dt(a).hoistableScripts,u=Ts(e),f=o.get(u);f||(f=a.querySelector(ko(u)),f||(e=x({src:e,async:!0},n),(n=Ri.get(u))&&vh(e,n),f=a.createElement("script"),ct(f),Gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function eS(e,n){ga.M(e,n);var a=Ms;if(a&&e){var o=dt(a).hoistableScripts,u=Ts(e),f=o.get(u);f||(f=a.querySelector(ko(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=Ri.get(u))&&vh(e,n),f=a.createElement("script"),ct(f),Gn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Hx(e,n,a,o){var u=(u=N.current)?vc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Es(a.href),a=dt(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Es(a.href);var f=dt(u).hoistableStyles,y=f.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=u.querySelector(Vo(e)))&&!f._p&&(y.instance=f,y.state.loading=5),Ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(e,a),f||nS(u,e,a,y.state))),n&&o===null)throw Error(r(528,""));return y}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ts(a),a=dt(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Es(e){return'href="'+nn(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function Gx(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function nS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Gn(n,"link",a),ct(n),e.head.appendChild(n))}function Ts(e){return'[src="'+nn(e)+'"]'}function ko(e){return"script[async]"+e}function Vx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+nn(a.href)+'"]');if(o)return n.instance=o,ct(o),o;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ct(o),Gn(o,"style",u),yc(o,a.precedence,e),n.instance=o;case"stylesheet":u=Es(a.href);var f=e.querySelector(Vo(u));if(f)return n.state.loading|=4,n.instance=f,ct(f),f;o=Gx(a),(u=Ri.get(u))&&_h(o,u),f=(e.ownerDocument||e).createElement("link"),ct(f);var y=f;return y._p=new Promise(function(A,V){y.onload=A,y.onerror=V}),Gn(f,"link",o),n.state.loading|=4,yc(f,a.precedence,e),n.instance=f;case"script":return f=Ts(a.src),(u=e.querySelector(ko(f)))?(n.instance=u,ct(u),u):(o=a,(u=Ri.get(f))&&(o=x({},a),vh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ct(u),Gn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,yc(o,a.precedence,e));return n.instance}function yc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,y=0;y<o.length;y++){var A=o[y];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function _h(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function vh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Sc=null;function kx(e,n,a){if(Sc===null){var o=new Map,u=Sc=new Map;u.set(a,o)}else u=Sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ki]||f[$e]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var A=o.get(y);A?A.push(f):o.set(y,[f])}}return o}function Xx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function iS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function aS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Es(o.href),f=n.querySelector(Vo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ct(f);return}f=n.ownerDocument||n,o=Gx(o),(u=Ri.get(u))&&_h(o,u),f=f.createElement("link"),ct(f);var y=f;y._p=new Promise(function(A,V){y.onload=A,y.onerror=V}),Gn(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=bc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var yh=0;function rS(e,n){return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&yh===0&&(yh=62500*Iy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>yh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function bc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function Ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,n.forEach(sS,e),Mc=null,bc.call(e))}function sS(e,n){if(!(n.state.loading&4)){var a=Mc.get(e);if(a)var o=a.get(null);else{a=new Map,Mc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||o,f===o&&a.set(null,u),a.set(y,u),this.count++,o=bc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Xo={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function oS(e,n,a,o,u,f,y,A,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Le(0),this.hiddenUpdates=Le(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function qx(e,n,a,o,u,f,y,A,V,ot,vt,wt){return e=new oS(e,n,a,y,V,ot,vt,wt,A),n=1,f===!0&&(n|=24),f=li(3,null,null,n),e.current=f,f.stateNode=e,n=Ju(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},nf(f),e}function Yx(e){return e?(e=ns,e):ns}function jx(e,n,a,o,u,f){u=Yx(u),o.context===null?o.context=u:o.pendingContext=u,o=ka(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Xa(e,o,n),a!==null&&(ri(a,e,n),bo(a,e,n))}function Zx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Sh(e,n){Zx(e,n),(e=e.alternate)&&Zx(e,n)}function Kx(e){if(e.tag===13||e.tag===31){var n=Sr(e,67108864);n!==null&&ri(n,e,67108864),Sh(e,67108864)}}function Qx(e){if(e.tag===13||e.tag===31){var n=di();n=le(n);var a=Sr(e,n);a!==null&&ri(a,e,n),Sh(e,n)}}var Tc=!0;function lS(e,n,a,o){var u=F.T;F.T=null;var f=Z.p;try{Z.p=2,bh(e,n,a,o)}finally{Z.p=f,F.T=u}}function cS(e,n,a,o){var u=F.T;F.T=null;var f=Z.p;try{Z.p=8,bh(e,n,a,o)}finally{Z.p=f,F.T=u}}function bh(e,n,a,o){if(Tc){var u=Mh(o);if(u===null)lh(e,n,o,Ac,a),$x(e,o);else if(fS(u,e,n,a,o))o.stopPropagation();else if($x(e,o),n&4&&-1<uS.indexOf(e)){for(;u!==null;){var f=w(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=Ut(f.pendingLanes);if(y!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var V=1<<31-Yt(y);A.entanglements[1]|=V,y&=~V}ji(f),(Ve&6)===0&&(lc=M()+500,Bo(0))}}break;case 31:case 13:A=Sr(f,2),A!==null&&ri(A,f,2),uc(),Sh(f,2)}if(f=Mh(o),f===null&&lh(e,n,o,Ac,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else lh(e,n,o,null,a)}}function Mh(e){return e=Eu(e),Eh(e)}var Ac=null;function Eh(e){if(Ac=null,e=za(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ac=e,null}function Jx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case it:return 2;case pt:return 8;case at:case Pt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var Th=!1,er=null,nr=null,ir=null,Wo=new Map,qo=new Map,ar=[],uS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $x(e,n){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(n.pointerId)}}function Yo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=w(n),n!==null&&Kx(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function fS(e,n,a,o,u){switch(n){case"focusin":return er=Yo(er,e,n,a,o,u),!0;case"dragenter":return nr=Yo(nr,e,n,a,o,u),!0;case"mouseover":return ir=Yo(ir,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Wo.set(f,Yo(Wo.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,qo.set(f,Yo(qo.get(f)||null,e,n,a,o,u)),!0}return!1}function tg(e){var n=za(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,fn(e.priority,function(){Qx(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,fn(e.priority,function(){Qx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Mh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Mu=o,a.target.dispatchEvent(o),Mu=null}else return n=w(a),n!==null&&Kx(n),e.blockedOn=a,!1;n.shift()}return!0}function eg(e,n,a){Rc(e)&&a.delete(n)}function hS(){Th=!1,er!==null&&Rc(er)&&(er=null),nr!==null&&Rc(nr)&&(nr=null),ir!==null&&Rc(ir)&&(ir=null),Wo.forEach(eg),qo.forEach(eg)}function wc(e,n){e.blockedOn===n&&(e.blockedOn=null,Th||(Th=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,hS)))}var Cc=null;function ng(e){Cc!==e&&(Cc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Eh(o||a)===null)continue;break}var f=w(a);f!==null&&(e.splice(n,3),n-=3,Mf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function As(e){function n(V){return wc(V,e)}er!==null&&wc(er,e),nr!==null&&wc(nr,e),ir!==null&&wc(ir,e),Wo.forEach(n),qo.forEach(n);for(var a=0;a<ar.length;a++){var o=ar[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)tg(a),a.blockedOn===null&&ar.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],y=u[pn]||null;if(typeof f=="function")y||ng(a);else if(y){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[pn]||null)A=y.formAction;else if(Eh(u)!==null)continue}else A=y.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),ng(a)}}}function ig(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ah(e){this._internalRoot=e}Dc.prototype.render=Ah.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=di();jx(a,o,e,n,null,null)},Dc.prototype.unmount=Ah.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;jx(e.current,2,null,e,null,null),uc(),n[vi]=null}};function Dc(e){this._internalRoot=e}Dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Je();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ar.length&&n!==0&&n<ar[a].priority;a++);ar.splice(a,0,e),a===0&&tg(e)}};var ag=t.version;if(ag!=="19.2.0")throw Error(r(527,ag,"19.2.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var dS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Uc.isDisabled&&Uc.supportsFiber)try{Mt=Uc.inject(dS),Dt=Uc}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=fm,f=hm,y=dm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=qx(e,1,!1,null,null,a,o,null,u,f,y,ig),e[vi]=n.current,oh(e),new Ah(n)},Zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",f=fm,y=hm,A=dm,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=qx(e,1,!0,n,a??null,o,u,V,f,y,A,ig),n.context=Yx(null),a=n.current,o=di(),o=le(o),u=ka(o),u.callback=null,Xa(a,u,o),a=o,n.current.lanes=a,Tn(n,a),ji(n),e[vi]=n.current,oh(e),new Dc(n)},Zo.version="19.2.0",Zo}var pg;function ES(){if(pg)return Ch.exports;pg=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ch.exports=MS(),Ch.exports}var TS=ES();const AS=b_(TS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="181",RS=0,mg=1,wS=2,M_=1,CS=2,Ta=3,mr=0,si=1,Aa=2,Ca=0,Ys=1,xd=2,xg=3,gg=4,DS=5,Gr=100,US=101,LS=102,NS=103,OS=104,zS=200,PS=201,FS=202,BS=203,gd=204,_d=205,IS=206,HS=207,GS=208,VS=209,kS=210,XS=211,WS=212,qS=213,YS=214,vd=0,yd=1,Sd=2,Ks=3,bd=4,Md=5,Ed=6,Td=7,up=0,jS=1,ZS=2,Da=0,KS=1,QS=2,JS=3,$S=4,tb=5,eb=6,nb=7,E_=300,Qs=301,Js=302,Ad=303,Rd=304,_u=306,kr=1e3,Hi=1001,ul=1002,$n=1003,ib=1004,Lc=1005,jn=1006,Nh=1007,Ra=1008,Ji=1009,T_=1010,A_=1011,fl=1012,fp=1013,Wr=1014,wa=1015,eo=1016,hp=1017,dp=1018,hl=1020,R_=35902,w_=35899,C_=1021,D_=1022,Gi=1023,dl=1026,pl=1027,U_=1028,pp=1029,mp=1030,xp=1031,gp=1033,ou=33776,lu=33777,cu=33778,uu=33779,wd=35840,Cd=35841,Dd=35842,Ud=35843,Ld=36196,Nd=37492,Od=37496,zd=37808,Pd=37809,Fd=37810,Bd=37811,Id=37812,Hd=37813,Gd=37814,Vd=37815,kd=37816,Xd=37817,Wd=37818,qd=37819,Yd=37820,jd=37821,Zd=36492,Kd=36494,Qd=36495,Jd=36283,$d=36284,tp=36285,ep=36286,ab=3200,rb=3201,_p=0,sb=1,dr="",Jn="srgb",$s="srgb-linear",hu="linear",Ke="srgb",Rs=7680,_g=519,ob=512,lb=513,cb=514,L_=515,ub=516,fb=517,hb=518,db=519,np=35044,vg="300 es",Qi=2e3,du=2001;function N_(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ml(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pb(){const s=ml("canvas");return s.style.display="block",s}const yg={};function pu(...s){const t="THREE."+s.shift();console.log(t,...s)}function xe(...s){const t="THREE."+s.shift();console.warn(t,...s)}function dn(...s){const t="THREE."+s.shift();console.error(t,...s)}function xl(...s){const t=s.join(" ");t in yg||(yg[t]=!0,xe(...s))}function mb(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class no{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sg=1234567;const js=Math.PI/180,gl=180/Math.PI;function Ua(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(qn[s&255]+qn[s>>8&255]+qn[s>>16&255]+qn[s>>24&255]+"-"+qn[t&255]+qn[t>>8&255]+"-"+qn[t>>16&15|64]+qn[t>>24&255]+"-"+qn[i&63|128]+qn[i>>8&255]+"-"+qn[i>>16&255]+qn[i>>24&255]+qn[r&255]+qn[r>>8&255]+qn[r>>16&255]+qn[r>>24&255]).toLowerCase()}function Ue(s,t,i){return Math.max(t,Math.min(i,s))}function vp(s,t){return(s%t+t)%t}function xb(s,t,i,r,l){return r+(s-t)*(l-r)/(i-t)}function gb(s,t,i){return s!==t?(i-s)/(t-s):0}function ol(s,t,i){return(1-i)*s+i*t}function _b(s,t,i,r){return ol(s,t,1-Math.exp(-i*r))}function vb(s,t=1){return t-Math.abs(vp(s,t*2)-t)}function yb(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*(3-2*s))}function Sb(s,t,i){return s<=t?0:s>=i?1:(s=(s-t)/(i-t),s*s*s*(s*(s*6-15)+10))}function bb(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Mb(s,t){return s+Math.random()*(t-s)}function Eb(s){return s*(.5-Math.random())}function Tb(s){s!==void 0&&(Sg=s);let t=Sg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ab(s){return s*js}function Rb(s){return s*gl}function wb(s){return(s&s-1)===0&&s!==0}function Cb(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Db(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ub(s,t,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+r)/2),g=h((t+r)/2),x=c((t-r)/2),_=h((t-r)/2),S=c((r-t)/2),E=h((r-t)/2);switch(l){case"XYX":s.set(d*g,m*x,m*_,d*p);break;case"YZY":s.set(m*_,d*g,m*x,d*p);break;case"ZXZ":s.set(m*x,m*_,d*g,d*p);break;case"XZX":s.set(d*g,m*E,m*S,d*p);break;case"YXY":s.set(m*S,d*g,m*E,d*p);break;case"ZYZ":s.set(m*E,m*S,d*g,d*p);break;default:xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ii(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function qe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ko={DEG2RAD:js,RAD2DEG:gl,generateUUID:Ua,clamp:Ue,euclideanModulo:vp,mapLinear:xb,inverseLerp:gb,lerp:ol,damp:_b,pingpong:vb,smoothstep:yb,smootherstep:Sb,randInt:bb,randFloat:Mb,randFloatSpread:Eb,seededRandom:Tb,degToRad:Ab,radToDeg:Rb,isPowerOfTwo:wb,ceilPowerOfTwo:Cb,floorPowerOfTwo:Db,setQuaternionFromProperEuler:Ub,normalize:qe,denormalize:Ii};class Ee{constructor(t=0,i=0){Ee.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ue(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*r-h*l+t.x,this.y=c*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _l{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3],_=c[h+0],S=c[h+1],E=c[h+2],T=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(d>=1){t[i+0]=_,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(x!==T||m!==_||p!==S||g!==E){let b=m*_+p*S+g*E+x*T;b<0&&(_=-_,S=-S,E=-E,T=-T,b=-b);let v=1-d;if(b<.9995){const P=Math.acos(b),L=Math.sin(P);v=Math.sin(v*P)/L,d=Math.sin(d*P)/L,m=m*v+_*d,p=p*v+S*d,g=g*v+E*d,x=x*v+T*d}else{m=m*v+_*d,p=p*v+S*d,g=g*v+E*d,x=x*v+T*d;const P=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=P,p*=P,g*=P,x*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=c[h],_=c[h+1],S=c[h+2],E=c[h+3];return t[i]=d*E+g*x+m*S-p*_,t[i+1]=m*E+g*_+p*x-d*S,t[i+2]=p*E+g*S+d*_-m*x,t[i+3]=g*E-d*x-m*_-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),x=d(c/2),_=m(r/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=_*g*x+p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x-_*S*E;break;case"YXZ":this._x=_*g*x+p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x+_*S*E;break;case"ZXY":this._x=_*g*x-p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x-_*S*E;break;case"ZYX":this._x=_*g*x-p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x+_*S*E;break;case"YZX":this._x=_*g*x+p*S*E,this._y=p*S*x+_*g*E,this._z=p*g*E-_*S*x,this._w=p*g*x-_*S*E;break;case"XZY":this._x=_*g*x-p*S*E,this._y=p*S*x-_*g*E,this._z=p*g*E+_*S*x,this._w=p*g*x+_*S*E;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],x=i[10],_=r+d+x;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-r*p,this._z=c*g+h*p+r*m-l*d,this._w=h*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,i=0,r=0){lt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(bg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(bg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),g=2*(d*i-c*l),x=2*(c*r-h*i);return this.x=i+m*p+h*x-d*g,this.y=r+m*g+d*p-c*x,this.z=l+m*x+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Oh.copy(this).projectOnVector(t),this.sub(Oh)}reflect(t){return this.sub(Oh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ue(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oh=new lt,bg=new _l;class Se{constructor(t,i,r,l,c,h,d,m,p){Se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p)}set(t,i,r,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],g=r[4],x=r[7],_=r[2],S=r[5],E=r[8],T=l[0],b=l[3],v=l[6],P=l[1],L=l[4],H=l[7],k=l[2],z=l[5],I=l[8];return c[0]=h*T+d*P+m*k,c[3]=h*b+d*L+m*z,c[6]=h*v+d*H+m*I,c[1]=p*T+g*P+x*k,c[4]=p*b+g*L+x*z,c[7]=p*v+g*H+x*I,c[2]=_*T+S*P+E*k,c[5]=_*b+S*L+E*z,c[8]=_*v+S*H+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-r*c*g+r*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=g*h-d*p,_=d*m-g*c,S=p*c-h*m,E=i*x+r*_+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=x*T,t[1]=(l*p-g*r)*T,t[2]=(d*r-l*h)*T,t[3]=_*T,t[4]=(g*i-l*m)*T,t[5]=(l*c-d*i)*T,t[6]=S*T,t[7]=(r*m-p*i)*T,t[8]=(h*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(zh.makeScale(t,i)),this}rotate(t){return this.premultiply(zh.makeRotation(-t)),this}translate(t,i){return this.premultiply(zh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const zh=new Se,Mg=new Se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eg=new Se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const s={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ke&&(l.r=La(l.r),l.g=La(l.g),l.b=La(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ke&&(l.r=Zs(l.r),l.g=Zs(l.g),l.b=Zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===dr?hu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$s]:{primaries:t,whitePoint:r,transfer:hu,toXYZ:Mg,fromXYZ:Eg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:t,whitePoint:r,transfer:Ke,toXYZ:Mg,fromXYZ:Eg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const He=Lb();function La(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class Nb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ws===void 0&&(ws=ml("canvas")),ws.width=t.width,ws.height=t.height;const l=ws.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ws}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ml("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=La(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(La(i[r]/255)*255):i[r]=La(i[r]);return{data:i,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ob=0;class yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Ua(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Ph(l[h].image)):c.push(Ph(l[h]))}else c=Ph(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Ph(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Nb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let zb=0;const Fh=new lt;class kn extends no{constructor(t=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,r=Hi,l=Hi,c=jn,h=Ra,d=Gi,m=Ji,p=kn.DEFAULT_ANISOTROPY,g=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=Ua(),this.name="",this.source=new yp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fh).x}get height(){return this.source.getSize(Fh).y}get depth(){return this.source.getSize(Fh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){xe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){xe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==E_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case Hi:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case Hi:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=E_;kn.DEFAULT_ANISOTROPY=1;class gn{constructor(t=0,i=0,r=0,l=1){gn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],_=m[1],S=m[5],E=m[9],T=m[2],b=m[6],v=m[10];if(Math.abs(g-_)<.01&&Math.abs(x-T)<.01&&Math.abs(E-b)<.01){if(Math.abs(g+_)<.1&&Math.abs(x+T)<.1&&Math.abs(E+b)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,H=(S+1)/2,k=(v+1)/2,z=(g+_)/4,I=(x+T)/4,K=(E+b)/4;return L>H&&L>k?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=z/r,c=I/r):H>k?H<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(H),r=z/l,c=K/l):k<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(k),r=I/c,l=K/c),this.set(r,l,c,i),this}let P=Math.sqrt((b-E)*(b-E)+(x-T)*(x-T)+(_-g)*(_-g));return Math.abs(P)<.001&&(P=1),this.x=(b-E)/P,this.y=(x-T)/P,this.z=(_-g)/P,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ue(this.x,t.x,i.x),this.y=Ue(this.y,t.y,i.y),this.z=Ue(this.z,t.z,i.z),this.w=Ue(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ue(this.x,t,i),this.y=Ue(this.y,t,i),this.z=Ue(this.z,t,i),this.w=Ue(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ue(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pb extends no{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new gn(0,0,t,i),this.scissorTest=!1,this.viewport=new gn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new kn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new yp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends Pb{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class O_ extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fb extends kn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=$n,this.minFilter=$n,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(t=new lt(1/0,1/0,1/0),i=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Oi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Oi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Oi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Oi):Oi.fromBufferAttribute(c,h),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Nc.copy(r.boundingBox)),Nc.applyMatrix4(t.matrixWorld),this.union(Nc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),Oc.subVectors(this.max,Qo),Cs.subVectors(t.a,Qo),Ds.subVectors(t.b,Qo),Us.subVectors(t.c,Qo),sr.subVectors(Ds,Cs),or.subVectors(Us,Ds),Or.subVectors(Cs,Us);let i=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Or.z,Or.y,sr.z,0,-sr.x,or.z,0,-or.x,Or.z,0,-Or.x,-sr.y,sr.x,0,-or.y,or.x,0,-Or.y,Or.x,0];return!Bh(i,Cs,Ds,Us,Oc)||(i=[1,0,0,0,1,0,0,0,1],!Bh(i,Cs,Ds,Us,Oc))?!1:(zc.crossVectors(sr,or),i=[zc.x,zc.y,zc.z],Bh(i,Cs,Ds,Us,Oc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_a),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _a=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],Oi=new lt,Nc=new vl,Cs=new lt,Ds=new lt,Us=new lt,sr=new lt,or=new lt,Or=new lt,Qo=new lt,Oc=new lt,zc=new lt,zr=new lt;function Bh(s,t,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){zr.fromArray(s,c);const d=l.x*Math.abs(zr.x)+l.y*Math.abs(zr.y)+l.z*Math.abs(zr.z),m=t.dot(zr),p=i.dot(zr),g=r.dot(zr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Bb=new vl,Jo=new lt,Ih=new lt;class yl{constructor(t=new lt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):Bb.setFromPoints(t).getCenter(r);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Jo.subVectors(t,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Jo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Jo.copy(t.center).add(Ih)),this.expandByPoint(Jo.copy(t.center).sub(Ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const va=new lt,Hh=new lt,Pc=new lt,lr=new lt,Gh=new lt,Fc=new lt,Vh=new lt;class Sp{constructor(t=new lt,i=new lt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,va)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=va.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(va.copy(this.origin).addScaledVector(this.direction,i),va.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Hh.copy(t).add(i).multiplyScalar(.5),Pc.copy(i).sub(t).normalize(),lr.copy(this.origin).sub(Hh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Pc),d=lr.dot(this.direction),m=-lr.dot(Pc),p=lr.lengthSq(),g=Math.abs(1-h*h);let x,_,S,E;if(g>0)if(x=h*m-d,_=h*d-m,E=c*g,x>=0)if(_>=-E)if(_<=E){const T=1/g;x*=T,_*=T,S=x*(x+h*_+2*d)+_*(h*x+_+2*m)+p}else _=c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;else _=-c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;else _<=-E?(x=Math.max(0,-(-h*c+d)),_=x>0?-c:Math.min(Math.max(-c,-m),c),S=-x*x+_*(_+2*m)+p):_<=E?(x=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(x=Math.max(0,-(h*c+d)),_=x>0?c:Math.min(Math.max(-c,-m),c),S=-x*x+_*(_+2*m)+p);else _=h>0?-c:c,x=Math.max(0,-(h*_+d)),S=-x*x+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Hh).addScaledVector(Pc,_),S}intersectSphere(t,i){va.subVectors(t.center,this.origin);const r=va.dot(this.direction),l=va.dot(va)-r*r,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),g>=0?(c=(t.min.y-_.y)*g,h=(t.max.y-_.y)*g):(c=(t.max.y-_.y)*g,h=(t.min.y-_.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),x>=0?(d=(t.min.z-_.z)*x,m=(t.max.z-_.z)*x):(d=(t.max.z-_.z)*x,m=(t.min.z-_.z)*x),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,va)!==null}intersectTriangle(t,i,r,l,c){Gh.subVectors(i,t),Fc.subVectors(r,t),Vh.crossVectors(Gh,Fc);let h=this.direction.dot(Vh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;lr.subVectors(this.origin,t);const m=d*this.direction.dot(Fc.crossVectors(lr,Fc));if(m<0)return null;const p=d*this.direction.dot(Gh.cross(lr));if(p<0||m+p>h)return null;const g=-d*lr.dot(Vh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(t,i,r,l,c,h,d,m,p,g,x,_,S,E,T,b){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,h,d,m,p,g,x,_,S,E,T,b)}set(t,i,r,l,c,h,d,m,p,g,x,_,S,E,T,b){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=x,v[14]=_,v[3]=S,v[7]=E,v[11]=T,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Ls.setFromMatrixColumn(t,0).length(),c=1/Ls.setFromMatrixColumn(t,1).length(),h=1/Ls.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const _=h*g,S=h*x,E=d*g,T=d*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=S+E*p,i[5]=_-T*p,i[9]=-d*m,i[2]=T-_*p,i[6]=E+S*p,i[10]=h*m}else if(t.order==="YXZ"){const _=m*g,S=m*x,E=p*g,T=p*x;i[0]=_+T*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*x,i[5]=h*g,i[9]=-d,i[2]=S*d-E,i[6]=T+_*d,i[10]=h*m}else if(t.order==="ZXY"){const _=m*g,S=m*x,E=p*g,T=p*x;i[0]=_-T*d,i[4]=-h*x,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*g,i[9]=T-_*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const _=h*g,S=h*x,E=d*g,T=d*x;i[0]=m*g,i[4]=E*p-S,i[8]=_*p+T,i[1]=m*x,i[5]=T*p+_,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const _=h*m,S=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=T-_*x,i[8]=E*x+S,i[1]=x,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*x+E,i[10]=_-T*x}else if(t.order==="XZY"){const _=h*m,S=h*p,E=d*m,T=d*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=_*x+T,i[5]=h*g,i[9]=S*x-E,i[2]=E*x-S,i[6]=d*g,i[10]=T*x+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ib,t,Hb)}lookAt(t,i,r){const l=this.elements;return pi.subVectors(t,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),cr.crossVectors(r,pi),cr.lengthSq()===0&&(Math.abs(r.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),cr.crossVectors(r,pi)),cr.normalize(),Bc.crossVectors(pi,cr),l[0]=cr.x,l[4]=Bc.x,l[8]=pi.x,l[1]=cr.y,l[5]=Bc.y,l[9]=pi.y,l[2]=cr.z,l[6]=Bc.z,l[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],g=r[1],x=r[5],_=r[9],S=r[13],E=r[2],T=r[6],b=r[10],v=r[14],P=r[3],L=r[7],H=r[11],k=r[15],z=l[0],I=l[4],K=l[8],D=l[12],C=l[1],G=l[5],et=l[9],ht=l[13],gt=l[2],xt=l[6],F=l[10],Z=l[14],j=l[3],yt=l[7],St=l[11],B=l[15];return c[0]=h*z+d*C+m*gt+p*j,c[4]=h*I+d*G+m*xt+p*yt,c[8]=h*K+d*et+m*F+p*St,c[12]=h*D+d*ht+m*Z+p*B,c[1]=g*z+x*C+_*gt+S*j,c[5]=g*I+x*G+_*xt+S*yt,c[9]=g*K+x*et+_*F+S*St,c[13]=g*D+x*ht+_*Z+S*B,c[2]=E*z+T*C+b*gt+v*j,c[6]=E*I+T*G+b*xt+v*yt,c[10]=E*K+T*et+b*F+v*St,c[14]=E*D+T*ht+b*Z+v*B,c[3]=P*z+L*C+H*gt+k*j,c[7]=P*I+L*G+H*xt+k*yt,c[11]=P*K+L*et+H*F+k*St,c[15]=P*D+L*ht+H*Z+k*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],x=t[6],_=t[10],S=t[14],E=t[3],T=t[7],b=t[11],v=t[15];return E*(+c*m*x-l*p*x-c*d*_+r*p*_+l*d*S-r*m*S)+T*(+i*m*S-i*p*_+c*h*_-l*h*S+l*p*g-c*m*g)+b*(+i*p*x-i*d*S-c*h*x+r*h*S+c*d*g-r*p*g)+v*(-l*d*g-i*m*x+i*d*_+l*h*x-r*h*_+r*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],x=t[9],_=t[10],S=t[11],E=t[12],T=t[13],b=t[14],v=t[15],P=x*b*p-T*_*p+T*m*S-d*b*S-x*m*v+d*_*v,L=E*_*p-g*b*p-E*m*S+h*b*S+g*m*v-h*_*v,H=g*T*p-E*x*p+E*d*S-h*T*S-g*d*v+h*x*v,k=E*x*m-g*T*m-E*d*_+h*T*_+g*d*b-h*x*b,z=i*P+r*L+l*H+c*k;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return t[0]=P*I,t[1]=(T*_*c-x*b*c-T*l*S+r*b*S+x*l*v-r*_*v)*I,t[2]=(d*b*c-T*m*c+T*l*p-r*b*p-d*l*v+r*m*v)*I,t[3]=(x*m*c-d*_*c-x*l*p+r*_*p+d*l*S-r*m*S)*I,t[4]=L*I,t[5]=(g*b*c-E*_*c+E*l*S-i*b*S-g*l*v+i*_*v)*I,t[6]=(E*m*c-h*b*c-E*l*p+i*b*p+h*l*v-i*m*v)*I,t[7]=(h*_*c-g*m*c+g*l*p-i*_*p-h*l*S+i*m*S)*I,t[8]=H*I,t[9]=(E*x*c-g*T*c-E*r*S+i*T*S+g*r*v-i*x*v)*I,t[10]=(h*T*c-E*d*c+E*r*p-i*T*p-h*r*v+i*d*v)*I,t[11]=(g*d*c-h*x*c-g*r*p+i*x*p+h*r*S-i*d*S)*I,t[12]=k*I,t[13]=(g*T*l-E*x*l+E*r*_-i*T*_-g*r*b+i*x*b)*I,t[14]=(E*d*l-h*T*l-E*r*m+i*T*m+h*r*b-i*d*b)*I,t[15]=(h*x*l-g*d*l+g*r*m-i*x*m-h*r*_+i*d*_)*I,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,h){return this.set(1,r,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,x=d+d,_=c*p,S=c*g,E=c*x,T=h*g,b=h*x,v=d*x,P=m*p,L=m*g,H=m*x,k=r.x,z=r.y,I=r.z;return l[0]=(1-(T+v))*k,l[1]=(S+H)*k,l[2]=(E-L)*k,l[3]=0,l[4]=(S-H)*z,l[5]=(1-(_+v))*z,l[6]=(b+P)*z,l[7]=0,l[8]=(E+L)*I,l[9]=(b-P)*I,l[10]=(1-(_+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Ls.set(l[0],l[1],l[2]).length();const h=Ls.set(l[4],l[5],l[6]).length(),d=Ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],zi.copy(this);const p=1/c,g=1/h,x=1/d;return zi.elements[0]*=p,zi.elements[1]*=p,zi.elements[2]*=p,zi.elements[4]*=g,zi.elements[5]*=g,zi.elements[6]*=g,zi.elements[8]*=x,zi.elements[9]*=x,zi.elements[10]*=x,i.setFromRotationMatrix(zi),r.x=c,r.y=h,r.z=d,this}makePerspective(t,i,r,l,c,h,d=Qi,m=!1){const p=this.elements,g=2*c/(i-t),x=2*c/(r-l),_=(i+t)/(i-t),S=(r+l)/(r-l);let E,T;if(m)E=c/(h-c),T=h*c/(h-c);else if(d===Qi)E=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===du)E=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,h,d=Qi,m=!1){const p=this.elements,g=2/(i-t),x=2/(r-l),_=-(i+t)/(i-t),S=-(r+l)/(r-l);let E,T;if(m)E=1/(h-c),T=h/(h-c);else if(d===Qi)E=-2/(h-c),T=-(h+c)/(h-c);else if(d===du)E=-1/(h-c),T=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ls=new lt,zi=new cn,Ib=new lt(0,0,0),Hb=new lt(1,1,1),cr=new lt,Bc=new lt,pi=new lt,Tg=new cn,Ag=new _l;class Vi{constructor(t=0,i=0,r=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],x=l[2],_=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ue(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ue(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Tg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gb=0;const Rg=new lt,Ns=new _l,ya=new cn,Ic=new lt,$o=new lt,Vb=new lt,kb=new _l,wg=new lt(1,0,0),Cg=new lt(0,1,0),Dg=new lt(0,0,1),Ug={type:"added"},Xb={type:"removed"},Os={type:"childadded",child:null},kh={type:"childremoved",child:null};class Pn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gb++}),this.uuid=Ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const t=new lt,i=new Vi,r=new _l,l=new lt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new Se}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Ns.setFromAxisAngle(t,i),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,i){return Ns.setFromAxisAngle(t,i),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(wg,t)}rotateY(t){return this.rotateOnAxis(Cg,t)}rotateZ(t){return this.rotateOnAxis(Dg,t)}translateOnAxis(t,i){return Rg.copy(t).applyQuaternion(this.quaternion),this.position.add(Rg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(wg,t)}translateY(t){return this.translateOnAxis(Cg,t)}translateZ(t){return this.translateOnAxis(Dg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ic.copy(t):Ic.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt($o,Ic,this.up):ya.lookAt(Ic,$o,this.up),this.quaternion.setFromRotationMatrix(ya),l&&(ya.extractRotation(l.matrixWorld),Ns.setFromRotationMatrix(ya),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(dn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ug),Os.child=t,this.dispatchEvent(Os),Os.child=null):dn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Xb),kh.child=t,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ya.multiply(t.parent.matrixWorld)),t.applyMatrix4(ya),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ug),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,t,Vb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,kb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),x=h(t.shapes),_=h(t.skeletons),S=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Pn.DEFAULT_UP=new lt(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pi=new lt,Sa=new lt,Xh=new lt,ba=new lt,zs=new lt,Ps=new lt,Lg=new lt,Wh=new lt,qh=new lt,Yh=new lt,jh=new gn,Zh=new gn,Kh=new gn;class xi{constructor(t=new lt,i=new lt,r=new lt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Pi.subVectors(t,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Pi.subVectors(l,i),Sa.subVectors(r,i),Xh.subVectors(t,i);const h=Pi.dot(Pi),d=Pi.dot(Sa),m=Pi.dot(Xh),p=Sa.dot(Sa),g=Sa.dot(Xh),x=h*p-d*d;if(x===0)return c.set(0,0,0),null;const _=1/x,S=(p*m-d*g)*_,E=(h*g-d*m)*_;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(t,i,r,l,c,h,d,m){return this.getBarycoord(t,i,r,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(h,ba.y),m.addScaledVector(d,ba.z),m)}static getInterpolatedAttribute(t,i,r,l,c,h){return jh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),jh.fromBufferAttribute(t,i),Zh.fromBufferAttribute(t,r),Kh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(jh,c.x),h.addScaledVector(Zh,c.y),h.addScaledVector(Kh,c.z),h}static isFrontFacing(t,i,r,l){return Pi.subVectors(r,i),Sa.subVectors(t,i),Pi.cross(Sa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Pi.cross(Sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let h,d;zs.subVectors(l,r),Ps.subVectors(c,r),Wh.subVectors(t,r);const m=zs.dot(Wh),p=Ps.dot(Wh);if(m<=0&&p<=0)return i.copy(r);qh.subVectors(t,l);const g=zs.dot(qh),x=Ps.dot(qh);if(g>=0&&x<=g)return i.copy(l);const _=m*x-g*p;if(_<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(r).addScaledVector(zs,h);Yh.subVectors(t,c);const S=zs.dot(Yh),E=Ps.dot(Yh);if(E>=0&&S<=E)return i.copy(c);const T=S*p-m*E;if(T<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Ps,d);const b=g*E-S*x;if(b<=0&&x-g>=0&&S-E>=0)return Lg.subVectors(c,l),d=(x-g)/(x-g+(S-E)),i.copy(l).addScaledVector(Lg,d);const v=1/(b+T+_);return h=T*v,d=_*v,i.copy(r).addScaledVector(zs,h).addScaledVector(Ps,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function Qh(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Ae{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=He.workingColorSpace){return this.r=t,this.g=i,this.b=r,He.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=He.workingColorSpace){if(t=vp(t,1),i=Ue(i,0,1),r=Ue(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Qh(h,c,t+1/3),this.g=Qh(h,c,t),this.b=Qh(h,c,t-1/3)}return He.colorSpaceToWorking(this,l),this}setStyle(t,i=Jn){function r(c){c!==void 0&&parseFloat(c)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:xe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Jn){const r=z_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=La(t.r),this.g=La(t.g),this.b=La(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Jn){return He.workingToColorSpace(Yn.copy(this),t),Math.round(Ue(Yn.r*255,0,255))*65536+Math.round(Ue(Yn.g*255,0,255))*256+Math.round(Ue(Yn.b*255,0,255))}getHexString(t=Jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=He.workingColorSpace){He.workingToColorSpace(Yn.copy(this),i);const r=Yn.r,l=Yn.g,c=Yn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const x=h-d;switch(p=g<=.5?x/(h+d):x/(2-h-d),h){case r:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-r)/x+2;break;case c:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=He.workingColorSpace){return He.workingToColorSpace(Yn.copy(this),i),t.r=Yn.r,t.g=Yn.g,t.b=Yn.b,t}getStyle(t=Jn){He.workingToColorSpace(Yn.copy(this),t);const i=Yn.r,r=Yn.g,l=Yn.b;return t!==Jn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ur),this.setHSL(ur.h+t,ur.s+i,ur.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ur),t.getHSL(Hc);const r=ol(ur.h,Hc.h,i),l=ol(ur.s,Hc.s,i),c=ol(ur.l,Hc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yn=new Ae;Ae.NAMES=z_;let Wb=0;class xr extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Ua(),this.name="",this.type="Material",this.blending=Ys,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gd,this.blendDst=_d,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_g,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){xe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){xe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==mr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_g&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class P_ extends xr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const En=new lt,Gc=new Ee;let qb=0;class Xn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=np,this.updateRanges=[],this.gpuType=wa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Gc.fromBufferAttribute(this,i),Gc.applyMatrix3(t),this.setXY(i,Gc.x,Gc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)En.fromBufferAttribute(this,i),En.applyMatrix3(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)En.fromBufferAttribute(this,i),En.applyMatrix4(t),this.setXYZ(i,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)En.fromBufferAttribute(this,i),En.applyNormalMatrix(t),this.setXYZ(i,En.x,En.y,En.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)En.fromBufferAttribute(this,i),En.transformDirection(t),this.setXYZ(i,En.x,En.y,En.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=qe(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ii(i,this.array)),i}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ii(i,this.array)),i}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ii(i,this.array)),i}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ii(i,this.array)),i}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==np&&(t.usage=this.usage),t}}class F_ extends Xn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class B_ extends Xn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Vn extends Xn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let Yb=0;const wi=new cn,Jh=new Pn,Fs=new lt,mi=new vl,tl=new vl,On=new lt;class zn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(N_(t)?B_:F_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Se().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,r){return wi.makeTranslation(t,i,r),this.applyMatrix4(wi),this}scale(t,i,r){return wi.makeScale(t,i,r),this.applyMatrix4(wi),this}lookAt(t){return Jh.lookAt(t),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Vn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){dn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){dn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const r=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];tl.setFromBufferAttribute(d),this.morphTargetsRelative?(On.addVectors(mi.min,tl.min),mi.expandByPoint(On),On.addVectors(mi.max,tl.max),mi.expandByPoint(On)):(mi.expandByPoint(tl.min),mi.expandByPoint(tl.max))}mi.getCenter(r);let l=0;for(let c=0,h=t.count;c<h;c++)On.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(On));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)On.fromBufferAttribute(d,p),m&&(Fs.fromBufferAttribute(t,p),On.add(Fs)),l=Math.max(l,r.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&dn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){dn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<r.count;K++)d[K]=new lt,m[K]=new lt;const p=new lt,g=new lt,x=new lt,_=new Ee,S=new Ee,E=new Ee,T=new lt,b=new lt;function v(K,D,C){p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,D),x.fromBufferAttribute(r,C),_.fromBufferAttribute(c,K),S.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(p),x.sub(p),S.sub(_),E.sub(_);const G=1/(S.x*E.y-E.x*S.y);isFinite(G)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(G),b.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(G),d[K].add(T),d[D].add(T),d[C].add(T),m[K].add(b),m[D].add(b),m[C].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let K=0,D=P.length;K<D;++K){const C=P[K],G=C.start,et=C.count;for(let ht=G,gt=G+et;ht<gt;ht+=3)v(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}const L=new lt,H=new lt,k=new lt,z=new lt;function I(K){k.fromBufferAttribute(l,K),z.copy(k);const D=d[K];L.copy(D),L.sub(k.multiplyScalar(k.dot(D))).normalize(),H.crossVectors(z,D);const G=H.dot(m[K])<0?-1:1;h.setXYZW(K,L.x,L.y,L.z,G)}for(let K=0,D=P.length;K<D;++K){const C=P[K],G=C.start,et=C.count;for(let ht=G,gt=G+et;ht<gt;ht+=3)I(t.getX(ht+0)),I(t.getX(ht+1)),I(t.getX(ht+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new lt,c=new lt,h=new lt,d=new lt,m=new lt,p=new lt,g=new lt,x=new lt;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),T=t.getX(_+1),b=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,b),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,b),d.add(g),m.add(g),p.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let _=0,S=i.count;_<S;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),h.fromBufferAttribute(i,_+2),g.subVectors(h,c),x.subVectors(l,c),g.cross(x),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)On.fromBufferAttribute(t,i),On.normalize(),t.setXYZ(i,On.x,On.y,On.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,x=d.normalized,_=new p.constructor(m.length*g);let S=0,E=0;for(let T=0,b=m.length;T<b;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let v=0;v<g;v++)_[E++]=p[S++]}return new Xn(_,g,x)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zn,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,x=p.length;g<x;g++){const _=p[g],S=t(_,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,_=p.length;x<_;x++){const S=p[x];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let _=0,S=x.length;_<S;_++)g.push(x[_].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const x=h[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ng=new cn,Pr=new Sp,Vc=new yl,Og=new lt,kc=new lt,Xc=new lt,Wc=new lt,$h=new lt,qc=new lt,zg=new lt,Yc=new lt;class _i extends Pn{constructor(t=new zn,i=new P_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){qc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],x=c[m];g!==0&&($h.fromBufferAttribute(x,t),h?qc.addScaledVector($h,g):qc.addScaledVector($h.sub(i),g))}i.add(qc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vc.copy(r.boundingSphere),Vc.applyMatrix4(c),Pr.copy(t.ray).recast(t.near),!(Vc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(Vc,Og)===null||Pr.origin.distanceToSquared(Og)>(t.far-t.near)**2))&&(Ng.copy(c).invert(),Pr.copy(t.ray).applyMatrix4(Ng),!(r.boundingBox!==null&&Pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Pr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,_=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const b=_[E],v=h[b.materialIndex],P=Math.max(b.start,S.start),L=Math.min(d.count,Math.min(b.start+b.count,S.start+S.count));for(let H=P,k=L;H<k;H+=3){const z=d.getX(H),I=d.getX(H+1),K=d.getX(H+2);l=jc(this,v,t,r,p,g,x,z,I,K),l&&(l.faceIndex=Math.floor(H/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let b=E,v=T;b<v;b+=3){const P=d.getX(b),L=d.getX(b+1),H=d.getX(b+2);l=jc(this,h,t,r,p,g,x,P,L,H),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,T=_.length;E<T;E++){const b=_[E],v=h[b.materialIndex],P=Math.max(b.start,S.start),L=Math.min(m.count,Math.min(b.start+b.count,S.start+S.count));for(let H=P,k=L;H<k;H+=3){const z=H,I=H+1,K=H+2;l=jc(this,v,t,r,p,g,x,z,I,K),l&&(l.faceIndex=Math.floor(H/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let b=E,v=T;b<v;b+=3){const P=b,L=b+1,H=b+2;l=jc(this,h,t,r,p,g,x,P,L,H),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function jb(s,t,i,r,l,c,h,d){let m;if(t.side===si?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,t.side===mr,d),m===null)return null;Yc.copy(d),Yc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Yc);return p<i.near||p>i.far?null:{distance:p,point:Yc.clone(),object:s}}function jc(s,t,i,r,l,c,h,d,m,p){s.getVertexPosition(d,kc),s.getVertexPosition(m,Xc),s.getVertexPosition(p,Wc);const g=jb(s,t,i,r,kc,Xc,Wc,zg);if(g){const x=new lt;xi.getBarycoord(zg,kc,Xc,Wc,x),l&&(g.uv=xi.getInterpolatedAttribute(l,d,m,p,x,new Ee)),c&&(g.uv1=xi.getInterpolatedAttribute(c,d,m,p,x,new Ee)),h&&(g.normal=xi.getInterpolatedAttribute(h,d,m,p,x,new lt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new lt,materialIndex:0};xi.getNormal(kc,Xc,Wc,_.normal),g.face=_,g.barycoord=x}return g}class Sl extends zn{constructor(t=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],x=[];let _=0,S=0;E("z","y","x",-1,-1,r,i,t,h,c,0),E("z","y","x",1,-1,r,i,-t,h,c,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(g,3)),this.setAttribute("uv",new Vn(x,2));function E(T,b,v,P,L,H,k,z,I,K,D){const C=H/I,G=k/K,et=H/2,ht=k/2,gt=z/2,xt=I+1,F=K+1;let Z=0,j=0;const yt=new lt;for(let St=0;St<F;St++){const B=St*G-ht;for(let rt=0;rt<xt;rt++){const Ct=rt*C-et;yt[T]=Ct*P,yt[b]=B*L,yt[v]=gt,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[b]=0,yt[v]=z>0?1:-1,g.push(yt.x,yt.y,yt.z),x.push(rt/I),x.push(1-St/K),Z+=1}}for(let St=0;St<K;St++)for(let B=0;B<I;B++){const rt=_+B+xt*St,Ct=_+B+xt*(St+1),Lt=_+(B+1)+xt*(St+1),Xt=_+(B+1)+xt*St;m.push(rt,Ct,Xt),m.push(Ct,Lt,Xt),j+=6}d.addGroup(S,j,D),S+=j,_+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Qn(s){const t={};for(let i=0;i<s.length;i++){const r=to(s[i]);for(const l in r)t[l]=r[l]}return t}function Zb(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function I_(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:He.workingColorSpace}const Kb={clone:to,merge:Qn};var Qb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Na extends xr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qb,this.fragmentShader=Jb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=Zb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class H_ extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new lt,Pg=new Ee,Fg=new Ee;class Di extends H_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=gl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-t/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-t/fr.z)}getViewSize(t,i){return this.getViewBounds(t,Pg,Fg),i.subVectors(Fg,Pg)}setViewOffset(t,i,r,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(js*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Bs=-90,Is=1;class $b extends Pn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Di(Bs,Is,t,i);l.layers=this.layers,this.add(l);const c=new Di(Bs,Is,t,i);c.layers=this.layers,this.add(c);const h=new Di(Bs,Is,t,i);h.layers=this.layers,this.add(h);const d=new Di(Bs,Is,t,i);d.layers=this.layers,this.add(d);const m=new Di(Bs,Is,t,i);m.layers=this.layers,this.add(m);const p=new Di(Bs,Is,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===du)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,x=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,_,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class G_ extends kn{constructor(t=[],i=Qs,r,l,c,h,d,m,p,g){super(t,i,r,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tM extends qr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new G_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Sl(5,5,5),c=new Na({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:Ca});c.uniforms.tEquirect.value=i;const h=new _i(l,c),d=i.minFilter;return i.minFilter===Ra&&(i.minFilter=jn),new $b(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(c)}}class Xr extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eM={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const T of t.hand.values()){const b=i.getJointPose(T,r),v=this._getHandJoint(p,T);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=g.position.distanceTo(x.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(eM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Xr;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class nM extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class iM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=np,this.updateRanges=[],this.version=0,this.uuid=Ua()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ua()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ua()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kn=new lt;class mu{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Kn.fromBufferAttribute(this,i),Kn.applyMatrix4(t),this.setXYZ(i,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Kn.fromBufferAttribute(this,i),Kn.applyNormalMatrix(t),this.setXYZ(i,Kn.x,Kn.y,Kn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Kn.fromBufferAttribute(this,i),Kn.transformDirection(t),this.setXYZ(i,Kn.x,Kn.y,Kn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ii(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=qe(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ii(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ii(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ii(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ii(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=qe(i,this.array),r=qe(r,this.array),l=qe(l,this.array),c=qe(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){pu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Xn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new mu(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class V_ extends xr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hs;const el=new lt,Gs=new lt,Vs=new lt,ks=new Ee,nl=new Ee,k_=new cn,Zc=new lt,il=new lt,Kc=new lt,Bg=new Ee,ed=new Ee,Ig=new Ee;class aM extends Pn{constructor(t=new V_){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new zn;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new iM(i,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new mu(r,3,0,!1)),Hs.setAttribute("uv",new mu(r,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Ee(.5,.5),this.count=1}raycast(t,i){t.camera===null&&dn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),k_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Vs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Qc(Zc.set(-.5,-.5,0),Vs,h,Gs,l,c),Qc(il.set(.5,-.5,0),Vs,h,Gs,l,c),Qc(Kc.set(.5,.5,0),Vs,h,Gs,l,c),Bg.set(0,0),ed.set(1,0),Ig.set(1,1);let d=t.ray.intersectTriangle(Zc,il,Kc,!1,el);if(d===null&&(Qc(il.set(-.5,.5,0),Vs,h,Gs,l,c),ed.set(0,1),d=t.ray.intersectTriangle(Zc,Kc,il,!1,el),d===null))return;const m=t.ray.origin.distanceTo(el);m<t.near||m>t.far||i.push({distance:m,point:el.clone(),uv:xi.getInterpolation(el,Zc,il,Kc,Bg,ed,Ig,new Ee),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Qc(s,t,i,r,l,c){ks.subVectors(s,i).addScalar(.5).multiply(r),l!==void 0?(nl.x=c*ks.x-l*ks.y,nl.y=l*ks.x+c*ks.y):nl.copy(ks),s.copy(t),s.x+=nl.x,s.y+=nl.y,s.applyMatrix4(k_)}class rM extends kn{constructor(t=null,i=1,r=1,l,c,h,d,m,p=$n,g=$n,x,_){super(null,h,d,m,p,g,l,c,x,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nd=new lt,sM=new lt,oM=new Se;class Hr{constructor(t=new lt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=nd.subVectors(r,i).cross(sM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(nd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||oM.getNormalMatrix(t),l=this.coplanarPoint(nd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new yl,lM=new Ee(.5,.5),Jc=new lt;class Mp{constructor(t=new Hr,i=new Hr,r=new Hr,l=new Hr,c=new Hr,h=new Hr){this.planes=[t,i,r,l,c,h]}set(t,i,r,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Qi,r=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],x=c[5],_=c[6],S=c[7],E=c[8],T=c[9],b=c[10],v=c[11],P=c[12],L=c[13],H=c[14],k=c[15];if(l[0].setComponents(p-h,S-g,v-E,k-P).normalize(),l[1].setComponents(p+h,S+g,v+E,k+P).normalize(),l[2].setComponents(p+d,S+x,v+T,k+L).normalize(),l[3].setComponents(p-d,S-x,v-T,k-L).normalize(),r)l[4].setComponents(m,_,b,H).normalize(),l[5].setComponents(p-m,S-_,v-b,k-H).normalize();else if(l[4].setComponents(p-m,S-_,v-b,k-H).normalize(),i===Qi)l[5].setComponents(p+m,S+_,v+b,k+H).normalize();else if(i===du)l[5].setComponents(m,_,b,H).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(t){Fr.center.set(0,0,0);const i=lM.distanceTo(t.center);return Fr.radius=.7071067811865476+i,Fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Jc.x=l.normal.x>0?t.max.x:t.min.x,Jc.y=l.normal.y>0?t.max.y:t.min.y,Jc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X_ extends xr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xu=new lt,gu=new lt,Hg=new cn,al=new Sp,$c=new yl,id=new lt,Gg=new lt;class cM extends Pn{constructor(t=new zn,i=new X_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)xu.fromBufferAttribute(i,l-1),gu.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=xu.distanceTo(gu);t.setAttribute("lineDistance",new Vn(r,1))}else xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$c.copy(r.boundingSphere),$c.applyMatrix4(l),$c.radius+=c,t.ray.intersectsSphere($c)===!1)return;Hg.copy(l).invert(),al.copy(t.ray).applyMatrix4(Hg);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=r.index,_=r.attributes.position;if(g!==null){const S=Math.max(0,h.start),E=Math.min(g.count,h.start+h.count);for(let T=S,b=E-1;T<b;T+=p){const v=g.getX(T),P=g.getX(T+1),L=tu(this,t,al,m,v,P,T);L&&i.push(L)}if(this.isLineLoop){const T=g.getX(E-1),b=g.getX(S),v=tu(this,t,al,m,T,b,E-1);v&&i.push(v)}}else{const S=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let T=S,b=E-1;T<b;T+=p){const v=tu(this,t,al,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=tu(this,t,al,m,E-1,S,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function tu(s,t,i,r,l,c,h){const d=s.geometry.attributes.position;if(xu.fromBufferAttribute(d,l),gu.fromBufferAttribute(d,c),i.distanceSqToSegment(xu,gu,id,Gg)>r)return;id.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(id);if(!(p<t.near||p>t.far))return{distance:p,point:Gg.clone().applyMatrix4(s.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:s}}const Vg=new lt,kg=new lt;class uM extends cM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Vg.fromBufferAttribute(i,l),kg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Vg.distanceTo(kg);t.setAttribute("lineDistance",new Vn(r,1))}else xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fM extends kn{constructor(t,i,r,l,c,h,d,m,p){super(t,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class W_ extends kn{constructor(t,i,r=Wr,l,c,h,d=$n,m=$n,p,g=dl,x=1){if(g!==dl&&g!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:x};super(_,l,c,h,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class q_ extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const eu=new lt,nu=new lt,ad=new lt,iu=new xi;class hM extends zn{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(js*i),h=t.getIndex(),d=t.getAttribute("position"),m=h?h.count:d.count,p=[0,0,0],g=["a","b","c"],x=new Array(3),_={},S=[];for(let E=0;E<m;E+=3){h?(p[0]=h.getX(E),p[1]=h.getX(E+1),p[2]=h.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b,c:v}=iu;if(T.fromBufferAttribute(d,p[0]),b.fromBufferAttribute(d,p[1]),v.fromBufferAttribute(d,p[2]),iu.getNormal(ad),x[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,x[1]=`${Math.round(b.x*l)},${Math.round(b.y*l)},${Math.round(b.z*l)}`,x[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(x[0]===x[1]||x[1]===x[2]||x[2]===x[0]))for(let P=0;P<3;P++){const L=(P+1)%3,H=x[P],k=x[L],z=iu[g[P]],I=iu[g[L]],K=`${H}_${k}`,D=`${k}_${H}`;D in _&&_[D]?(ad.dot(_[D].normal)<=c&&(S.push(z.x,z.y,z.z),S.push(I.x,I.y,I.z)),_[D]=null):K in _||(_[K]={index0:p[P],index1:p[L],normal:ad.clone()})}}for(const E in _)if(_[E]){const{index0:T,index1:b}=_[E];eu.fromBufferAttribute(d,T),nu.fromBufferAttribute(d,b),S.push(eu.x,eu.y,eu.z),S.push(nu.x,nu.y,nu.z)}this.setAttribute("position",new Vn(S,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class vu extends zn{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,x=t/d,_=i/m,S=[],E=[],T=[],b=[];for(let v=0;v<g;v++){const P=v*_-h;for(let L=0;L<p;L++){const H=L*x-c;E.push(H,-P,0),T.push(0,0,1),b.push(L/d),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<d;P++){const L=P+p*v,H=P+p*(v+1),k=P+1+p*(v+1),z=P+1+p*v;S.push(L,H,z),S.push(H,k,z)}this.setIndex(S),this.setAttribute("position",new Vn(E,3)),this.setAttribute("normal",new Vn(T,3)),this.setAttribute("uv",new Vn(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Y_ extends xr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_p,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class au extends xr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ae(16777215),this.specular=new Ae(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_p,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dM extends xr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ab,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class pM extends xr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ll={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mM{constructor(t,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(g){d++,c===!1&&l.onStart!==void 0&&l.onStart(g,h,d),c=!0},this.itemEnd=function(g){h++,l.onProgress!==void 0&&l.onProgress(g,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(g){l.onError!==void 0&&l.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,x){return p.push(g,x),this},this.removeHandler=function(g){const x=p.indexOf(g);return x!==-1&&p.splice(x,2),this},this.getHandler=function(g){for(let x=0,_=p.length;x<_;x+=2){const S=p[x],E=p[x+1];if(S.global&&(S.lastIndex=0),S.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const xM=new mM;class Yr{constructor(t){this.manager=t!==void 0?t:xM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Yr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ma={};class gM extends Error{constructor(t,i){super(t),this.response=i}}class j_ extends Yr{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=ll.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(Ma[t]!==void 0){Ma[t].push({onLoad:i,onProgress:r,onError:l});return}Ma[t]=[],Ma[t].push({onLoad:i,onProgress:r,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const g=Ma[t],x=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),S=_?parseInt(_):0,E=S!==0;let T=0;const b=new ReadableStream({start(v){P();function P(){x.read().then(({done:L,value:H})=>{if(L)v.close();else{T+=H.byteLength;const k=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:S});for(let z=0,I=g.length;z<I;z++){const K=g[z];K.onProgress&&K.onProgress(k)}v.enqueue(H),P()}},L=>{v.error(L)})}}});return new Response(b)}else throw new gM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(g=>new DOMParser().parseFromString(g,d));case"json":return p.json();default:if(d==="")return p.text();{const x=/charset="?([^;"\s]*)"?/i.exec(d),_=x&&x[1]?x[1].toLowerCase():void 0,S=new TextDecoder(_);return p.arrayBuffer().then(E=>S.decode(E))}}}).then(p=>{ll.add(`file:${t}`,p);const g=Ma[t];delete Ma[t];for(let x=0,_=g.length;x<_;x++){const S=g[x];S.onLoad&&S.onLoad(p)}}).catch(p=>{const g=Ma[t];if(g===void 0)throw this.manager.itemError(t),p;delete Ma[t];for(let x=0,_=g.length;x<_;x++){const S=g[x];S.onError&&S.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Xs=new WeakMap;class _M extends Yr{constructor(t){super(t)}load(t,i,r,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=ll.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let x=Xs.get(h);x===void 0&&(x=[],Xs.set(h,x)),x.push({onLoad:i,onError:l})}return h}const d=ml("img");function m(){g(),i&&i(this);const x=Xs.get(this)||[];for(let _=0;_<x.length;_++){const S=x[_];S.onLoad&&S.onLoad(this)}Xs.delete(this),c.manager.itemEnd(t)}function p(x){g(),l&&l(x),ll.remove(`image:${t}`);const _=Xs.get(this)||[];for(let S=0;S<_.length;S++){const E=_[S];E.onError&&E.onError(x)}Xs.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),ll.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class vM extends Yr{constructor(t){super(t)}load(t,i,r,l){const c=new kn,h=new _M(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class Z_ extends Pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const rd=new cn,Xg=new lt,Wg=new lt;class yM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Ji,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mp,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Xg.setFromMatrixPosition(t.matrixWorld),i.position.copy(Xg),Wg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Wg),i.updateMatrixWorld(),rd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class K_ extends H_{constructor(t=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class SM extends yM{constructor(){super(new K_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bM extends Z_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new SM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class MM extends Z_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class EM extends Di{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const qg=new cn;class TM{constructor(t,i,r=0,l=1/0){this.ray=new Sp(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new bp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):dn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return qg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qg),this}intersectObject(t,i=!0,r=[]){return ip(t,this,r,i),r.sort(Yg),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)ip(t[l],this,r,i);return r.sort(Yg),r}}function Yg(s,t){return s.distance-t.distance}function ip(s,t,i,r){let l=!0;if(s.layers.test(t.layers)&&s.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)ip(c[h],t,i,!0)}}function jg(s,t,i,r){const l=AM(r);switch(i){case C_:return s*t;case U_:return s*t/l.components*l.byteLength;case pp:return s*t/l.components*l.byteLength;case mp:return s*t*2/l.components*l.byteLength;case xp:return s*t*2/l.components*l.byteLength;case D_:return s*t*3/l.components*l.byteLength;case Gi:return s*t*4/l.components*l.byteLength;case gp:return s*t*4/l.components*l.byteLength;case ou:case lu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cu:case uu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cd:case Ud:return Math.max(s,16)*Math.max(t,8)/4;case wd:case Dd:return Math.max(s,8)*Math.max(t,8)/2;case Ld:case Nd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Od:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Pd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Gd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case qd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Yd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case jd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zd:case Kd:case Qd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jd:case $d:return Math.ceil(s/4)*Math.ceil(t/4)*8;case tp:case ep:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function AM(s){switch(s){case Ji:case T_:return{byteLength:1,components:1};case fl:case A_:case eo:return{byteLength:2,components:1};case hp:case dp:return{byteLength:2,components:4};case Wr:case fp:case wa:return{byteLength:4,components:1};case R_:case w_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q_(){let s=null,t=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function RM(s){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,x=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,m,p){const g=m.array,x=m.updateRanges;if(s.bindBuffer(p,d),x.length===0)s.bufferSubData(p,0,g);else{x.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<x.length;S++){const E=x[_],T=x[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,x[_]=T)}x.length=_+1;for(let S=0,E=x.length;S<E;S++){const T=x[S];s.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(s.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var wM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,FM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,JM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$M=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,e1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,n1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",r1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,s1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,f1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,p1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,m1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,v1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,y1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,S1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,b1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,w1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,X1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,K1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,J1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,u3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,f3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,S3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,M3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,O3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,V3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,j3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:wM,alphahash_pars_fragment:CM,alphamap_fragment:DM,alphamap_pars_fragment:UM,alphatest_fragment:LM,alphatest_pars_fragment:NM,aomap_fragment:OM,aomap_pars_fragment:zM,batching_pars_vertex:PM,batching_vertex:FM,begin_vertex:BM,beginnormal_vertex:IM,bsdfs:HM,iridescence_fragment:GM,bumpmap_pars_fragment:VM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:WM,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:jM,color_pars_vertex:ZM,color_vertex:KM,common:QM,cube_uv_reflection_fragment:JM,defaultnormal_vertex:$M,displacementmap_pars_vertex:t1,displacementmap_vertex:e1,emissivemap_fragment:n1,emissivemap_pars_fragment:i1,colorspace_fragment:a1,colorspace_pars_fragment:r1,envmap_fragment:s1,envmap_common_pars_fragment:o1,envmap_pars_fragment:l1,envmap_pars_vertex:c1,envmap_physical_pars_fragment:y1,envmap_vertex:u1,fog_vertex:f1,fog_pars_vertex:h1,fog_fragment:d1,fog_pars_fragment:p1,gradientmap_pars_fragment:m1,lightmap_pars_fragment:x1,lights_lambert_fragment:g1,lights_lambert_pars_fragment:_1,lights_pars_begin:v1,lights_toon_fragment:S1,lights_toon_pars_fragment:b1,lights_phong_fragment:M1,lights_phong_pars_fragment:E1,lights_physical_fragment:T1,lights_physical_pars_fragment:A1,lights_fragment_begin:R1,lights_fragment_maps:w1,lights_fragment_end:C1,logdepthbuf_fragment:D1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:N1,map_fragment:O1,map_pars_fragment:z1,map_particle_fragment:P1,map_particle_pars_fragment:F1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:I1,morphinstance_vertex:H1,morphcolor_vertex:G1,morphnormal_vertex:V1,morphtarget_pars_vertex:k1,morphtarget_vertex:X1,normal_fragment_begin:W1,normal_fragment_maps:q1,normal_pars_fragment:Y1,normal_pars_vertex:j1,normal_vertex:Z1,normalmap_pars_fragment:K1,clearcoat_normal_fragment_begin:Q1,clearcoat_normal_fragment_maps:J1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:t3,opaque_fragment:e3,packing:n3,premultiplied_alpha_fragment:i3,project_vertex:a3,dithering_fragment:r3,dithering_pars_fragment:s3,roughnessmap_fragment:o3,roughnessmap_pars_fragment:l3,shadowmap_pars_fragment:c3,shadowmap_pars_vertex:u3,shadowmap_vertex:f3,shadowmask_pars_fragment:h3,skinbase_vertex:d3,skinning_pars_vertex:p3,skinning_vertex:m3,skinnormal_vertex:x3,specularmap_fragment:g3,specularmap_pars_fragment:_3,tonemapping_fragment:v3,tonemapping_pars_fragment:y3,transmission_fragment:S3,transmission_pars_fragment:b3,uv_pars_fragment:M3,uv_pars_vertex:E3,uv_vertex:T3,worldpos_vertex:A3,background_vert:R3,background_frag:w3,backgroundCube_vert:C3,backgroundCube_frag:D3,cube_vert:U3,cube_frag:L3,depth_vert:N3,depth_frag:O3,distanceRGBA_vert:z3,distanceRGBA_frag:P3,equirect_vert:F3,equirect_frag:B3,linedashed_vert:I3,linedashed_frag:H3,meshbasic_vert:G3,meshbasic_frag:V3,meshlambert_vert:k3,meshlambert_frag:X3,meshmatcap_vert:W3,meshmatcap_frag:q3,meshnormal_vert:Y3,meshnormal_frag:j3,meshphong_vert:Z3,meshphong_frag:K3,meshphysical_vert:Q3,meshphysical_frag:J3,meshtoon_vert:$3,meshtoon_frag:tE,points_vert:eE,points_frag:nE,shadow_vert:iE,shadow_frag:aE,sprite_vert:rE,sprite_frag:sE},Kt={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},envMapRotation:{value:new Se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},Zi={basic:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Qn([Kt.common,Kt.specularmap,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,Kt.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Qn([Kt.common,Kt.envmap,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.roughnessmap,Kt.metalnessmap,Kt.fog,Kt.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Qn([Kt.common,Kt.aomap,Kt.lightmap,Kt.emissivemap,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.gradientmap,Kt.fog,Kt.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Qn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,Kt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Qn([Kt.points,Kt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Qn([Kt.common,Kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Qn([Kt.common,Kt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Qn([Kt.common,Kt.bumpmap,Kt.normalmap,Kt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Qn([Kt.sprite,Kt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Se}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Qn([Kt.common,Kt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Qn([Kt.lights,Kt.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};Zi.physical={uniforms:Qn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const ru={r:0,b:0,g:0},Br=new Vi,oE=new cn;function lE(s,t,i,r,l,c,h){const d=new Ae(0);let m=c===!0?0:1,p,g,x=null,_=0,S=null;function E(L){let H=L.isScene===!0?L.background:null;return H&&H.isTexture&&(H=(L.backgroundBlurriness>0?i:t).get(H)),H}function T(L){let H=!1;const k=E(L);k===null?v(d,m):k&&k.isColor&&(v(k,1),H=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||H)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(L,H){const k=E(H);k&&(k.isCubeTexture||k.mapping===_u)?(g===void 0&&(g=new _i(new Sl(1,1,1),new Na({name:"BackgroundCubeMaterial",uniforms:to(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,I,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Br.copy(H.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.material.uniforms.envMap.value=k,g.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(Br)),g.material.toneMapped=He.getTransfer(k.colorSpace)!==Ke,(x!==k||_!==k.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=k,_=k.version,S=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new _i(new vu(2,2),new Na({name:"BackgroundMaterial",uniforms:to(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,p.material.toneMapped=He.getTransfer(k.colorSpace)!==Ke,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(x!==k||_!==k.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,x=k,_=k.version,S=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,H){L.getRGB(ru,I_(s)),r.buffers.color.setClear(ru.r,ru.g,ru.b,H,h)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,H=1){d.set(L),m=H,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(d,m)},render:T,addToRenderList:b,dispose:P}}function cE(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,h=!1;function d(C,G,et,ht,gt){let xt=!1;const F=x(ht,et,G);c!==F&&(c=F,p(c.object)),xt=S(C,ht,et,gt),xt&&E(C,ht,et,gt),gt!==null&&t.update(gt,s.ELEMENT_ARRAY_BUFFER),(xt||h)&&(h=!1,H(C,G,et,ht),gt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(gt).buffer))}function m(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function x(C,G,et){const ht=et.wireframe===!0;let gt=r[C.id];gt===void 0&&(gt={},r[C.id]=gt);let xt=gt[G.id];xt===void 0&&(xt={},gt[G.id]=xt);let F=xt[ht];return F===void 0&&(F=_(m()),xt[ht]=F),F}function _(C){const G=[],et=[],ht=[];for(let gt=0;gt<i;gt++)G[gt]=0,et[gt]=0,ht[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:et,attributeDivisors:ht,object:C,attributes:{},index:null}}function S(C,G,et,ht){const gt=c.attributes,xt=G.attributes;let F=0;const Z=et.getAttributes();for(const j in Z)if(Z[j].location>=0){const St=gt[j];let B=xt[j];if(B===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),St===void 0||St.attribute!==B||B&&St.data!==B.data)return!0;F++}return c.attributesNum!==F||c.index!==ht}function E(C,G,et,ht){const gt={},xt=G.attributes;let F=0;const Z=et.getAttributes();for(const j in Z)if(Z[j].location>=0){let St=xt[j];St===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const B={};B.attribute=St,St&&St.data&&(B.data=St.data),gt[j]=B,F++}c.attributes=gt,c.attributesNum=F,c.index=ht}function T(){const C=c.newAttributes;for(let G=0,et=C.length;G<et;G++)C[G]=0}function b(C){v(C,0)}function v(C,G){const et=c.newAttributes,ht=c.enabledAttributes,gt=c.attributeDivisors;et[C]=1,ht[C]===0&&(s.enableVertexAttribArray(C),ht[C]=1),gt[C]!==G&&(s.vertexAttribDivisor(C,G),gt[C]=G)}function P(){const C=c.newAttributes,G=c.enabledAttributes;for(let et=0,ht=G.length;et<ht;et++)G[et]!==C[et]&&(s.disableVertexAttribArray(et),G[et]=0)}function L(C,G,et,ht,gt,xt,F){F===!0?s.vertexAttribIPointer(C,G,et,gt,xt):s.vertexAttribPointer(C,G,et,ht,gt,xt)}function H(C,G,et,ht){T();const gt=ht.attributes,xt=et.getAttributes(),F=G.defaultAttributeValues;for(const Z in xt){const j=xt[Z];if(j.location>=0){let yt=gt[Z];if(yt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const St=yt.normalized,B=yt.itemSize,rt=t.get(yt);if(rt===void 0)continue;const Ct=rt.buffer,Lt=rt.type,Xt=rt.bytesPerElement,N=Lt===s.INT||Lt===s.UNSIGNED_INT||yt.gpuType===fp;if(yt.isInterleavedBufferAttribute){const U=yt.data,Y=U.stride,$=yt.offset;if(U.isInstancedInterleavedBuffer){for(let nt=0;nt<j.locationSize;nt++)v(j.location+nt,U.meshPerAttribute);C.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let nt=0;nt<j.locationSize;nt++)b(j.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let nt=0;nt<j.locationSize;nt++)L(j.location+nt,B/j.locationSize,Lt,St,Y*Xt,($+B/j.locationSize*nt)*Xt,N)}else{if(yt.isInstancedBufferAttribute){for(let U=0;U<j.locationSize;U++)v(j.location+U,yt.meshPerAttribute);C.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let U=0;U<j.locationSize;U++)b(j.location+U);s.bindBuffer(s.ARRAY_BUFFER,Ct);for(let U=0;U<j.locationSize;U++)L(j.location+U,B/j.locationSize,Lt,St,B*Xt,B/j.locationSize*U*Xt,N)}}else if(F!==void 0){const St=F[Z];if(St!==void 0)switch(St.length){case 2:s.vertexAttrib2fv(j.location,St);break;case 3:s.vertexAttrib3fv(j.location,St);break;case 4:s.vertexAttrib4fv(j.location,St);break;default:s.vertexAttrib1fv(j.location,St)}}}}P()}function k(){K();for(const C in r){const G=r[C];for(const et in G){const ht=G[et];for(const gt in ht)g(ht[gt].object),delete ht[gt];delete G[et]}delete r[C]}}function z(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const et in G){const ht=G[et];for(const gt in ht)g(ht[gt].object),delete ht[gt];delete G[et]}delete r[C.id]}function I(C){for(const G in r){const et=r[G];if(et[C.id]===void 0)continue;const ht=et[C.id];for(const gt in ht)g(ht[gt].object),delete ht[gt];delete et[C.id]}}function K(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:D,dispose:k,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:b,disableUnusedAttributes:P}}function uE(s,t,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function h(p,g,x){x!==0&&(s.drawArraysInstanced(r,p,g,x),i.update(g,r,x))}function d(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];i.update(S,r,1)}function m(p,g,x,_){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],g[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,_,0,x);let E=0;for(let T=0;T<x;T++)E+=g[T]*_[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function fE(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Gi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const K=I===eo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Ji&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==wa&&!K)}function m(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(xe("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),b=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),H=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=E>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:P,maxVaryings:L,maxFragmentUniforms:H,vertexTextures:k,maxSamples:z}}function hE(s){const t=this;let i=null,r=0,l=!1,c=!1;const h=new Hr,d=new Se,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const S=x.length!==0||_||r!==0||l;return l=_,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,_){i=g(x,_,0)},this.setState=function(x,_,S){const E=x.clippingPlanes,T=x.clipIntersection,b=x.clipShadows,v=s.get(x);if(!l||E===null||E.length===0||c&&!b)c?g(null):p();else{const P=c?0:r,L=P*4;let H=v.clippingState||null;m.value=H,H=g(E,_,L,S);for(let k=0;k!==L;++k)H[k]=i[k];v.clippingState=H,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,_,S,E){const T=x!==null?x.length:0;let b=null;if(T!==0){if(b=m.value,E!==!0||b===null){const v=S+T*4,P=_.matrixWorldInverse;d.getNormalMatrix(P),(b===null||b.length<v)&&(b=new Float32Array(v));for(let L=0,H=S;L!==T;++L,H+=4)h.copy(x[L]).applyMatrix4(P,d),h.normal.toArray(b,H),b[H+3]=h.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,b}}function dE(s){let t=new WeakMap;function i(h,d){return d===Ad?h.mapping=Qs:d===Rd&&(h.mapping=Js),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ad||d===Rd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new tM(m.height);return p.fromEquirectangularTexture(s,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const pr=4,Zg=[.125,.215,.35,.446,.526,.582],Vr=20,pE=256,rl=new K_,Kg=new Ae;let sd=null,od=0,ld=0,cd=!1;const mE=new lt;class Qg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=mE}=c;sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(sd,od,ld),this._renderer.xr.enabled=cd,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Qs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),sd=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:eo,format:Gi,colorSpace:$s,depthBuffer:!1},l=Jg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=xE(c)),this._blurMaterial=_E(c,t,i),this._ggxMaterial=gE(c,t,i)}return l}_compileMaterial(t){const i=new _i(new zn,t);this._renderer.compile(i,rl)}_sceneToCubeUV(t,i,r,l,c){const m=new Di(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(Kg),x.toneMapping=Da,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new Sl,new P_({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,b=T.material;let v=!1;const P=t.background;P?P.isColor&&(b.color.copy(P),t.background=null,v=!0):(b.color.copy(Kg),v=!0);for(let L=0;L<6;L++){const H=L%3;H===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[L],c.y,c.z)):H===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[L]));const k=this._cubeSize;Ws(l,H*k,L>2?k:0,k,k),x.setRenderTarget(l),v&&x.render(T,m),x.render(t,m)}x.toneMapping=S,x.autoClear=_,t.background=P}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Qs||t.mapping===Js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=t_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Ws(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,rl)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),_=.05+p*.95,S=x*_,{_lodMax:E}=this,T=this._sizeLods[r],b=3*T*(r>E-pr?r-E+pr:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-i,Ws(c,b,v,3*T,2*T),l.setRenderTarget(c),l.render(d,rl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ws(t,b,v,3*T,2*T),l.setRenderTarget(t),l.render(d,rl)}_blur(t,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",c),this._halfBlur(h,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&dn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const _=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),T=c/E,b=isFinite(c)?1+Math.floor(g*T):Vr;b>Vr&&xe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Vr}`);const v=[];let P=0;for(let I=0;I<Vr;++I){const K=I/T,D=Math.exp(-K*K/2);v.push(D),I===0?P+=D:I<b&&(P+=2*D)}for(let I=0;I<v.length;I++)v[I]=v[I]/P;_.envMap.value=t.texture,_.samples.value=b,_.weights.value=v,_.latitudinal.value=h==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:L}=this;_.dTheta.value=E,_.mipInt.value=L-r;const H=this._sizeLods[l],k=3*H*(l>L-pr?l-L+pr:0),z=4*(this._cubeSize-H);Ws(i,k,z,3*H,2*H),m.setRenderTarget(i),m.render(x,rl)}}function xE(s){const t=[],i=[],r=[];let l=s;const c=s-pr+1+Zg.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>s-pr?m=Zg[h-s+pr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,x=1+p,_=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,T=3,b=2,v=1,P=new Float32Array(T*E*S),L=new Float32Array(b*E*S),H=new Float32Array(v*E*S);for(let z=0;z<S;z++){const I=z%3*2/3-1,K=z>2?0:-1,D=[I,K,0,I+2/3,K,0,I+2/3,K+1,0,I,K,0,I+2/3,K+1,0,I,K+1,0];P.set(D,T*E*z),L.set(_,b*E*z);const C=[z,z,z,z,z,z];H.set(C,v*E*z)}const k=new zn;k.setAttribute("position",new Xn(P,T)),k.setAttribute("uv",new Xn(L,b)),k.setAttribute("faceIndex",new Xn(H,v)),r.push(new _i(k,null)),l>pr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Jg(s,t,i){const r=new qr(s,t,i);return r.texture.mapping=_u,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ws(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function gE(s,t,i){return new Na({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pE,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function _E(s,t,i){const r=new Float32Array(Vr),l=new lt(0,1,0);return new Na({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function $g(){return new Na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function t_(){return new Na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ca,depthTest:!1,depthWrite:!1})}function yu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vE(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ad||m===Rd,g=m===Qs||m===Js;if(p||g){let x=t.get(d);const _=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new Qg(s)),x=p?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new Qg(s)),x=p?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function yE(s){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=s.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&xl("WebGLRenderer: "+r+" extension not supported."),l}}}function SE(s,t,i,r){const l={},c=new WeakMap;function h(x){const _=x.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",h),delete l[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function d(x,_){return l[_.id]===!0||(_.addEventListener("dispose",h),l[_.id]=!0,i.memory.geometries++),_}function m(x){const _=x.attributes;for(const S in _)t.update(_[S],s.ARRAY_BUFFER)}function p(x){const _=[],S=x.index,E=x.attributes.position;let T=0;if(S!==null){const P=S.array;T=S.version;for(let L=0,H=P.length;L<H;L+=3){const k=P[L+0],z=P[L+1],I=P[L+2];_.push(k,z,z,I,I,k)}}else if(E!==void 0){const P=E.array;T=E.version;for(let L=0,H=P.length/3-1;L<H;L+=3){const k=L+0,z=L+1,I=L+2;_.push(k,z,z,I,I,k)}}else return;const b=new(N_(_)?B_:F_)(_,1);b.version=T;const v=c.get(x);v&&t.remove(v),c.set(x,b)}function g(x){const _=c.get(x);if(_){const S=x.index;S!==null&&_.version<S.version&&p(x)}else p(x);return c.get(x)}return{get:d,update:m,getWireframeAttribute:g}}function bE(s,t,i){let r;function l(_){r=_}let c,h;function d(_){c=_.type,h=_.bytesPerElement}function m(_,S){s.drawElements(r,S,c,_*h),i.update(S,r,1)}function p(_,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,_*h,E),i.update(S,r,E))}function g(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,_,0,E);let b=0;for(let v=0;v<E;v++)b+=S[v];i.update(b,r,1)}function x(_,S,E,T){if(E===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<_.length;v++)p(_[v]/h,S[v],T[v]);else{b.multiDrawElementsInstancedWEBGL(r,S,0,c,_,0,T,0,E);let v=0;for(let P=0;P<E;P++)v+=S[P]*T[P];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function ME(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:dn("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function EE(s,t,i){const r=new WeakMap,l=new gn;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==x){let C=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let H=0;E===!0&&(H=1),T===!0&&(H=2),b===!0&&(H=3);let k=d.attributes.position.count*H,z=1;k>t.maxTextureSize&&(z=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const I=new Float32Array(k*z*4*x),K=new O_(I,k,z,x);K.type=wa,K.needsUpdate=!0;const D=H*4;for(let G=0;G<x;G++){const et=v[G],ht=P[G],gt=L[G],xt=k*z*4*G;for(let F=0;F<et.count;F++){const Z=F*D;E===!0&&(l.fromBufferAttribute(et,F),I[xt+Z+0]=l.x,I[xt+Z+1]=l.y,I[xt+Z+2]=l.z,I[xt+Z+3]=0),T===!0&&(l.fromBufferAttribute(ht,F),I[xt+Z+4]=l.x,I[xt+Z+5]=l.y,I[xt+Z+6]=l.z,I[xt+Z+7]=0),b===!0&&(l.fromBufferAttribute(gt,F),I[xt+Z+8]=l.x,I[xt+Z+9]=l.y,I[xt+Z+10]=l.z,I[xt+Z+11]=gt.itemSize===4?l.w:1)}}_={count:x,texture:K,size:new Ee(k,z)},r.set(d,_),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let b=0;b<p.length;b++)E+=p[b];const T=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function TE(s,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return x}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const J_=new kn,e_=new W_(1,1),$_=new O_,tv=new Fb,ev=new G_,n_=[],i_=[],a_=new Float32Array(16),r_=new Float32Array(9),s_=new Float32Array(4);function io(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=n_[l];if(c===void 0&&(c=new Float32Array(l),n_[l]=c),t!==0){r.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,s[h].toArray(c,d)}return c}function wn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function Cn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function Su(s,t){let i=i_[t];i===void 0&&(i=new Int32Array(t),i_[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function AE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function RE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;s.uniform2fv(this.addr,t),Cn(i,t)}}function wE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(wn(i,t))return;s.uniform3fv(this.addr,t),Cn(i,t)}}function CE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;s.uniform4fv(this.addr,t),Cn(i,t)}}function DE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(wn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),Cn(i,t)}else{if(wn(i,r))return;s_.set(r),s.uniformMatrix2fv(this.addr,!1,s_),Cn(i,r)}}function UE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(wn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),Cn(i,t)}else{if(wn(i,r))return;r_.set(r),s.uniformMatrix3fv(this.addr,!1,r_),Cn(i,r)}}function LE(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(wn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),Cn(i,t)}else{if(wn(i,r))return;a_.set(r),s.uniformMatrix4fv(this.addr,!1,a_),Cn(i,r)}}function NE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function OE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;s.uniform2iv(this.addr,t),Cn(i,t)}}function zE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;s.uniform3iv(this.addr,t),Cn(i,t)}}function PE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;s.uniform4iv(this.addr,t),Cn(i,t)}}function FE(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function BE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(wn(i,t))return;s.uniform2uiv(this.addr,t),Cn(i,t)}}function IE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(wn(i,t))return;s.uniform3uiv(this.addr,t),Cn(i,t)}}function HE(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(wn(i,t))return;s.uniform4uiv(this.addr,t),Cn(i,t)}}function GE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(e_.compareFunction=L_,c=e_):c=J_,i.setTexture2D(t||c,l)}function VE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||tv,l)}function kE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||ev,l)}function XE(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||$_,l)}function WE(s){switch(s){case 5126:return AE;case 35664:return RE;case 35665:return wE;case 35666:return CE;case 35674:return DE;case 35675:return UE;case 35676:return LE;case 5124:case 35670:return NE;case 35667:case 35671:return OE;case 35668:case 35672:return zE;case 35669:case 35673:return PE;case 5125:return FE;case 36294:return BE;case 36295:return IE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return XE}}function qE(s,t){s.uniform1fv(this.addr,t)}function YE(s,t){const i=io(t,this.size,2);s.uniform2fv(this.addr,i)}function jE(s,t){const i=io(t,this.size,3);s.uniform3fv(this.addr,i)}function ZE(s,t){const i=io(t,this.size,4);s.uniform4fv(this.addr,i)}function KE(s,t){const i=io(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function QE(s,t){const i=io(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function JE(s,t){const i=io(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function $E(s,t){s.uniform1iv(this.addr,t)}function tT(s,t){s.uniform2iv(this.addr,t)}function eT(s,t){s.uniform3iv(this.addr,t)}function nT(s,t){s.uniform4iv(this.addr,t)}function iT(s,t){s.uniform1uiv(this.addr,t)}function aT(s,t){s.uniform2uiv(this.addr,t)}function rT(s,t){s.uniform3uiv(this.addr,t)}function sT(s,t){s.uniform4uiv(this.addr,t)}function oT(s,t,i){const r=this.cache,l=t.length,c=Su(i,l);wn(r,c)||(s.uniform1iv(this.addr,c),Cn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||J_,c[h])}function lT(s,t,i){const r=this.cache,l=t.length,c=Su(i,l);wn(r,c)||(s.uniform1iv(this.addr,c),Cn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||tv,c[h])}function cT(s,t,i){const r=this.cache,l=t.length,c=Su(i,l);wn(r,c)||(s.uniform1iv(this.addr,c),Cn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ev,c[h])}function uT(s,t,i){const r=this.cache,l=t.length,c=Su(i,l);wn(r,c)||(s.uniform1iv(this.addr,c),Cn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||$_,c[h])}function fT(s){switch(s){case 5126:return qE;case 35664:return YE;case 35665:return jE;case 35666:return ZE;case 35674:return KE;case 35675:return QE;case 35676:return JE;case 5124:case 35670:return $E;case 35667:case 35671:return tT;case 35668:case 35672:return eT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return aT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}class hT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=WE(i.type)}}class dT{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fT(i.type)}}class pT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const ud=/(\w+)(\])?(\[|\.)?/g;function o_(s,t){s.seq.push(t),s.map[t.id]=t}function mT(s,t,i){const r=s.name,l=r.length;for(ud.lastIndex=0;;){const c=ud.exec(r),h=ud.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){o_(i,p===void 0?new hT(d,s,t):new dT(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new pT(d),o_(i,x)),i=x}}}class fu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);mT(c,h,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function l_(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const xT=37297;let gT=0;function _T(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const c_=new Se;function vT(s){He._getMatrix(c_,He.workingColorSpace,s);const t=`mat3( ${c_.elements.map(i=>i.toFixed(4))} )`;switch(He.getTransfer(s)){case hu:return[t,"LinearTransferOETF"];case Ke:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function u_(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),c=(s.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+_T(s.getShaderSource(t),d)}else return c}function yT(s,t){const i=vT(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ST(s,t){let i;switch(t){case KS:i="Linear";break;case QS:i="Reinhard";break;case JS:i="Cineon";break;case $S:i="ACESFilmic";break;case eb:i="AgX";break;case nb:i="Neutral";break;case tb:i="Custom";break;default:xe("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const su=new lt;function bT(){He.getLuminanceCoefficients(su);const s=su.x.toFixed(4),t=su.y.toFixed(4),i=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function MT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function ET(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function TT(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(t,h),locationSize:d}}return i}function sl(s){return s!==""}function f_(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const AT=/^[ \t]*#include +<([\w\d./]+)>/gm;function ap(s){return s.replace(AT,wT)}const RT=new Map;function wT(s,t){let i=Me[t];if(i===void 0){const r=RT.get(t);if(r!==void 0)i=Me[r],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return ap(i)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d_(s){return s.replace(CT,DT)}function DT(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function p_(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function UT(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===M_?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===CS?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ta&&(t="SHADOWMAP_TYPE_VSM"),t}function LT(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qs:case Js:t="ENVMAP_TYPE_CUBE";break;case _u:t="ENVMAP_TYPE_CUBE_UV";break}return t}function NT(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:t="ENVMAP_MODE_REFRACTION";break}return t}function OT(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case up:t="ENVMAP_BLENDING_MULTIPLY";break;case jS:t="ENVMAP_BLENDING_MIX";break;case ZS:t="ENVMAP_BLENDING_ADD";break}return t}function zT(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function PT(s,t,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=UT(i),p=LT(i),g=NT(i),x=OT(i),_=zT(i),S=MT(i),E=ET(c),T=l.createProgram();let b,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(sl).join(`
`),v.length>0&&(v+=`
`)):(b=[p_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),v=[p_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Da?"#define TONE_MAPPING":"",i.toneMapping!==Da?Me.tonemapping_pars_fragment:"",i.toneMapping!==Da?ST("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,yT("linearToOutputTexel",i.outputColorSpace),bT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),h=ap(h),h=f_(h,i),h=h_(h,i),d=ap(d),d=f_(d,i),d=h_(d,i),h=d_(h),d=d_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=P+b+h,H=P+v+d,k=l_(l,l.VERTEX_SHADER,L),z=l_(l,l.FRAGMENT_SHADER,H);l.attachShader(T,k),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(G){if(s.debug.checkShaderErrors){const et=l.getProgramInfoLog(T)||"",ht=l.getShaderInfoLog(k)||"",gt=l.getShaderInfoLog(z)||"",xt=et.trim(),F=ht.trim(),Z=gt.trim();let j=!0,yt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,k,z);else{const St=u_(l,k,"vertex"),B=u_(l,z,"fragment");dn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+xt+`
`+St+`
`+B)}else xt!==""?xe("WebGLProgram: Program Info Log:",xt):(F===""||Z==="")&&(yt=!1);yt&&(G.diagnostics={runnable:j,programLog:xt,vertexShader:{log:F,prefix:b},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(k),l.deleteShader(z),K=new fu(l,T),D=TT(l,T)}let K;this.getUniforms=function(){return K===void 0&&I(this),K};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,xT)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=gT++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=k,this.fragmentShader=z,this}let FT=0;class BT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new IT(t),i.set(t,r)),r}}class IT{constructor(t){this.id=FT++,this.code=t,this.usedTimes=0}}function HT(s,t,i,r,l,c,h){const d=new bp,m=new BT,p=new Set,g=[],x=l.logarithmicDepthBuffer,_=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return p.add(D),D===0?"uv":`uv${D}`}function b(D,C,G,et,ht){const gt=et.fog,xt=ht.geometry,F=D.isMeshStandardMaterial?et.environment:null,Z=(D.isMeshStandardMaterial?i:t).get(D.envMap||F),j=Z&&Z.mapping===_u?Z.image.height:null,yt=E[D.type];D.precision!==null&&(S=l.getMaxPrecision(D.precision),S!==D.precision&&xe("WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const St=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,B=St!==void 0?St.length:0;let rt=0;xt.morphAttributes.position!==void 0&&(rt=1),xt.morphAttributes.normal!==void 0&&(rt=2),xt.morphAttributes.color!==void 0&&(rt=3);let Ct,Lt,Xt,N;if(yt){const Le=Zi[yt];Ct=Le.vertexShader,Lt=Le.fragmentShader}else Ct=D.vertexShader,Lt=D.fragmentShader,m.update(D),Xt=m.getVertexShaderID(D),N=m.getFragmentShaderID(D);const U=s.getRenderTarget(),Y=s.state.buffers.depth.getReversed(),$=ht.isInstancedMesh===!0,nt=ht.isBatchedMesh===!0,ut=!!D.map,Rt=!!D.matcap,bt=!!Z,_t=!!D.aoMap,O=!!D.lightMap,Ot=!!D.bumpMap,Et=!!D.normalMap,me=!!D.displacementMap,zt=!!D.emissiveMap,ue=!!D.metalnessMap,Zt=!!D.roughnessMap,kt=D.anisotropy>0,R=D.clearcoat>0,M=D.dispersion>0,q=D.iridescence>0,it=D.sheen>0,pt=D.transmission>0,at=kt&&!!D.anisotropyMap,Pt=R&&!!D.clearcoatMap,Nt=R&&!!D.clearcoatNormalMap,Wt=R&&!!D.clearcoatRoughnessMap,Gt=q&&!!D.iridescenceMap,Mt=q&&!!D.iridescenceThicknessMap,Dt=it&&!!D.sheenColorMap,qt=it&&!!D.sheenRoughnessMap,Yt=!!D.specularMap,Vt=!!D.specularColorMap,re=!!D.specularIntensityMap,X=pt&&!!D.transmissionMap,It=pt&&!!D.thicknessMap,Ft=!!D.gradientMap,Bt=!!D.alphaMap,Ut=D.alphaTest>0,At=!!D.alphaHash,$t=!!D.extensions;let pe=Da;D.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(pe=s.toneMapping);const Ge={shaderID:yt,shaderType:D.type,shaderName:D.name,vertexShader:Ct,fragmentShader:Lt,defines:D.defines,customVertexShaderID:Xt,customFragmentShaderID:N,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:nt,batchingColor:nt&&ht._colorsTexture!==null,instancing:$,instancingColor:$&&ht.instanceColor!==null,instancingMorph:$&&ht.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:$s,alphaToCoverage:!!D.alphaToCoverage,map:ut,matcap:Rt,envMap:bt,envMapMode:bt&&Z.mapping,envMapCubeUVHeight:j,aoMap:_t,lightMap:O,bumpMap:Ot,normalMap:Et,displacementMap:_&&me,emissiveMap:zt,normalMapObjectSpace:Et&&D.normalMapType===sb,normalMapTangentSpace:Et&&D.normalMapType===_p,metalnessMap:ue,roughnessMap:Zt,anisotropy:kt,anisotropyMap:at,clearcoat:R,clearcoatMap:Pt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Wt,dispersion:M,iridescence:q,iridescenceMap:Gt,iridescenceThicknessMap:Mt,sheen:it,sheenColorMap:Dt,sheenRoughnessMap:qt,specularMap:Yt,specularColorMap:Vt,specularIntensityMap:re,transmission:pt,transmissionMap:X,thicknessMap:It,gradientMap:Ft,opaque:D.transparent===!1&&D.blending===Ys&&D.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Ut,alphaHash:At,combine:D.combine,mapUv:ut&&T(D.map.channel),aoMapUv:_t&&T(D.aoMap.channel),lightMapUv:O&&T(D.lightMap.channel),bumpMapUv:Ot&&T(D.bumpMap.channel),normalMapUv:Et&&T(D.normalMap.channel),displacementMapUv:me&&T(D.displacementMap.channel),emissiveMapUv:zt&&T(D.emissiveMap.channel),metalnessMapUv:ue&&T(D.metalnessMap.channel),roughnessMapUv:Zt&&T(D.roughnessMap.channel),anisotropyMapUv:at&&T(D.anisotropyMap.channel),clearcoatMapUv:Pt&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:qt&&T(D.sheenRoughnessMap.channel),specularMapUv:Yt&&T(D.specularMap.channel),specularColorMapUv:Vt&&T(D.specularColorMap.channel),specularIntensityMapUv:re&&T(D.specularIntensityMap.channel),transmissionMapUv:X&&T(D.transmissionMap.channel),thicknessMapUv:It&&T(D.thicknessMap.channel),alphaMapUv:Bt&&T(D.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(Et||kt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:ht.isPoints===!0&&!!xt.attributes.uv&&(ut||Bt),fog:!!gt,useFog:D.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Y,skinning:ht.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:rt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:ut&&D.map.isVideoTexture===!0&&He.getTransfer(D.map.colorSpace)===Ke,decodeVideoTextureEmissive:zt&&D.emissiveMap.isVideoTexture===!0&&He.getTransfer(D.emissiveMap.colorSpace)===Ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Aa,flipSided:D.side===si,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:$t&&D.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&D.extensions.multiDraw===!0||nt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ge.vertexUv1s=p.has(1),Ge.vertexUv2s=p.has(2),Ge.vertexUv3s=p.has(3),p.clear(),Ge}function v(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const G in D.defines)C.push(G),C.push(D.defines[G]);return D.isRawShaderMaterial===!1&&(P(C,D),L(C,D),C.push(s.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function L(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function H(D){const C=E[D.type];let G;if(C){const et=Zi[C];G=Kb.clone(et.uniforms)}else G=D.uniforms;return G}function k(D,C){let G;for(let et=0,ht=g.length;et<ht;et++){const gt=g[et];if(gt.cacheKey===C){G=gt,++G.usedTimes;break}}return G===void 0&&(G=new PT(s,C,D,c),g.push(G)),G}function z(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function I(D){m.remove(D)}function K(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:H,acquireProgram:k,releaseProgram:z,releaseShaderCache:I,programs:g,dispose:K}}function GT(){let s=new WeakMap;function t(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,m){s.get(h)[d]=m}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function VT(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function m_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function x_(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function h(x,_,S,E,T,b){let v=s[t];return v===void 0?(v={id:x.id,object:x,geometry:_,material:S,groupOrder:E,renderOrder:x.renderOrder,z:T,group:b},s[t]=v):(v.id=x.id,v.object=x,v.geometry=_,v.material=S,v.groupOrder=E,v.renderOrder=x.renderOrder,v.z=T,v.group=b),t++,v}function d(x,_,S,E,T,b){const v=h(x,_,S,E,T,b);S.transmission>0?r.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(x,_,S,E,T,b){const v=h(x,_,S,E,T,b);S.transmission>0?r.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(x,_){i.length>1&&i.sort(x||VT),r.length>1&&r.sort(_||m_),l.length>1&&l.sort(_||m_)}function g(){for(let x=t,_=s.length;x<_;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function kT(){let s=new WeakMap;function t(r,l){const c=s.get(r);let h;return c===void 0?(h=new x_,s.set(r,[h])):l>=c.length?(h=new x_,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:t,dispose:i}}function XT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new lt,color:new Ae};break;case"SpotLight":i={position:new lt,direction:new lt,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new lt,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new lt,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return s[t.id]=i,i}}}function WT(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let qT=0;function YT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function jT(s){const t=new XT,i=WT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new lt);const l=new lt,c=new cn,h=new cn;function d(p){let g=0,x=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let S=0,E=0,T=0,b=0,v=0,P=0,L=0,H=0,k=0,z=0,I=0;p.sort(YT);for(let D=0,C=p.length;D<C;D++){const G=p[D],et=G.color,ht=G.intensity,gt=G.distance,xt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=et.r*ht,x+=et.g*ht,_+=et.b*ht;else if(G.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(G.sh.coefficients[F],ht);I++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=xt,r.directionalShadowMatrix[S]=G.shadow.matrix,P++}r.directional[S]=F,S++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(et).multiplyScalar(ht),F.distance=gt,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,r.spot[T]=F;const Z=G.shadow;if(G.map&&(r.spotLightMap[k]=G.map,k++,Z.updateMatrices(G),G.castShadow&&z++),r.spotLightMatrix[T]=Z.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,r.spotShadow[T]=j,r.spotShadowMap[T]=xt,H++}T++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(et).multiplyScalar(ht),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),r.rectArea[b]=F,b++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const Z=G.shadow,j=i.get(G);j.shadowIntensity=Z.intensity,j.shadowBias=Z.bias,j.shadowNormalBias=Z.normalBias,j.shadowRadius=Z.radius,j.shadowMapSize=Z.mapSize,j.shadowCameraNear=Z.camera.near,j.shadowCameraFar=Z.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=xt,r.pointShadowMatrix[E]=G.shadow.matrix,L++}r.point[E]=F,E++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(ht),F.groundColor.copy(G.groundColor).multiplyScalar(ht),r.hemi[v]=F,v++}}b>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Kt.LTC_FLOAT_1,r.rectAreaLTC2=Kt.LTC_FLOAT_2):(r.rectAreaLTC1=Kt.LTC_HALF_1,r.rectAreaLTC2=Kt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=_;const K=r.hash;(K.directionalLength!==S||K.pointLength!==E||K.spotLength!==T||K.rectAreaLength!==b||K.hemiLength!==v||K.numDirectionalShadows!==P||K.numPointShadows!==L||K.numSpotShadows!==H||K.numSpotMaps!==k||K.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=b,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=H,r.spotShadowMap.length=H,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=H+k-z,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=I,K.directionalLength=S,K.pointLength=E,K.spotLength=T,K.rectAreaLength=b,K.hemiLength=v,K.numDirectionalShadows=P,K.numPointShadows=L,K.numSpotShadows=H,K.numSpotMaps=k,K.numLightProbes=I,r.version=qT++)}function m(p,g){let x=0,_=0,S=0,E=0,T=0;const b=g.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const L=p[v];if(L.isDirectionalLight){const H=r.directional[x];H.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(b),x++}else if(L.isSpotLight){const H=r.spot[S];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(b),H.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),H.direction.sub(l),H.direction.transformDirection(b),S++}else if(L.isRectAreaLight){const H=r.rectArea[E];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(b),h.identity(),c.copy(L.matrixWorld),c.premultiply(b),h.extractRotation(c),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),H.halfWidth.applyMatrix4(h),H.halfHeight.applyMatrix4(h),E++}else if(L.isPointLight){const H=r.point[_];H.position.setFromMatrixPosition(L.matrixWorld),H.position.applyMatrix4(b),_++}else if(L.isHemisphereLight){const H=r.hemi[T];H.direction.setFromMatrixPosition(L.matrixWorld),H.direction.transformDirection(b),T++}}}return{setup:d,setupView:m,state:r}}function g_(s){const t=new jT(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function ZT(s){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new g_(s),t.set(l,[d])):c>=h.length?(d=new g_(s),h.push(d)):d=h[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const KT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JT(s,t,i){let r=new Mp;const l=new Ee,c=new Ee,h=new gn,d=new dM({depthPacking:rb}),m=new pM,p={},g=i.maxTextureSize,x={[mr]:si,[si]:mr,[Aa]:Aa},_=new Na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:KT,fragmentShader:QT}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new zn;E.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new _i(E,_),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M_;let v=this.type;this.render=function(z,I,K){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||z.length===0)return;const D=s.getRenderTarget(),C=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),et=s.state;et.setBlending(Ca),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const ht=v!==Ta&&this.type===Ta,gt=v===Ta&&this.type!==Ta;for(let xt=0,F=z.length;xt<F;xt++){const Z=z[xt],j=Z.shadow;if(j===void 0){xe("WebGLShadowMap:",Z,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const yt=j.getFrameExtents();if(l.multiply(yt),c.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/yt.x),l.x=c.x*yt.x,j.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/yt.y),l.y=c.y*yt.y,j.mapSize.y=c.y)),j.map===null||ht===!0||gt===!0){const B=this.type!==Ta?{minFilter:$n,magFilter:$n}:{};j.map!==null&&j.map.dispose(),j.map=new qr(l.x,l.y,B),j.map.texture.name=Z.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const St=j.getViewportCount();for(let B=0;B<St;B++){const rt=j.getViewport(B);h.set(c.x*rt.x,c.y*rt.y,c.x*rt.z,c.y*rt.w),et.viewport(h),j.updateMatrices(Z,B),r=j.getFrustum(),H(I,K,j.camera,Z,this.type)}j.isPointLightShadow!==!0&&this.type===Ta&&P(j,K),j.needsUpdate=!1}v=this.type,b.needsUpdate=!1,s.setRenderTarget(D,C,G)};function P(z,I){const K=t.update(T);_.defines.VSM_SAMPLES!==z.blurSamples&&(_.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new qr(l.x,l.y)),_.uniforms.shadow_pass.value=z.map.texture,_.uniforms.resolution.value=z.mapSize,_.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(I,null,K,_,T,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(I,null,K,S,T,null)}function L(z,I,K,D){let C=null;const G=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(G!==void 0)C=G;else if(C=K.isPointLight===!0?m:d,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const et=C.uuid,ht=I.uuid;let gt=p[et];gt===void 0&&(gt={},p[et]=gt);let xt=gt[ht];xt===void 0&&(xt=C.clone(),gt[ht]=xt,I.addEventListener("dispose",k)),C=xt}if(C.visible=I.visible,C.wireframe=I.wireframe,D===Ta?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:x[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,K.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const et=s.properties.get(C);et.light=K}return C}function H(z,I,K,D,C){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===Ta)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const ht=t.update(z),gt=z.material;if(Array.isArray(gt)){const xt=ht.groups;for(let F=0,Z=xt.length;F<Z;F++){const j=xt[F],yt=gt[j.materialIndex];if(yt&&yt.visible){const St=L(z,yt,D,C);z.onBeforeShadow(s,z,I,K,ht,St,j),s.renderBufferDirect(K,null,ht,St,z,j),z.onAfterShadow(s,z,I,K,ht,St,j)}}}else if(gt.visible){const xt=L(z,gt,D,C);z.onBeforeShadow(s,z,I,K,ht,xt,null),s.renderBufferDirect(K,null,ht,xt,z,null),z.onAfterShadow(s,z,I,K,ht,xt,null)}}const et=z.children;for(let ht=0,gt=et.length;ht<gt;ht++)H(et[ht],I,K,D,C)}function k(z){z.target.removeEventListener("dispose",k);for(const K in p){const D=p[K],C=z.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const $T={[vd]:yd,[Sd]:Ed,[bd]:Td,[Ks]:Md,[yd]:vd,[Ed]:Sd,[Td]:bd,[Md]:Ks};function t2(s,t){function i(){let X=!1;const It=new gn;let Ft=null;const Bt=new gn(0,0,0,0);return{setMask:function(Ut){Ft!==Ut&&!X&&(s.colorMask(Ut,Ut,Ut,Ut),Ft=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,At,$t,pe,Ge){Ge===!0&&(Ut*=pe,At*=pe,$t*=pe),It.set(Ut,At,$t,pe),Bt.equals(It)===!1&&(s.clearColor(Ut,At,$t,pe),Bt.copy(It))},reset:function(){X=!1,Ft=null,Bt.set(-1,0,0,0)}}}function r(){let X=!1,It=!1,Ft=null,Bt=null,Ut=null;return{setReversed:function(At){if(It!==At){const $t=t.get("EXT_clip_control");At?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),It=At;const pe=Ut;Ut=null,this.setClear(pe)}},getReversed:function(){return It},setTest:function(At){At?U(s.DEPTH_TEST):Y(s.DEPTH_TEST)},setMask:function(At){Ft!==At&&!X&&(s.depthMask(At),Ft=At)},setFunc:function(At){if(It&&(At=$T[At]),Bt!==At){switch(At){case vd:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case bd:s.depthFunc(s.EQUAL);break;case Md:s.depthFunc(s.GEQUAL);break;case Ed:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Bt=At}},setLocked:function(At){X=At},setClear:function(At){Ut!==At&&(It&&(At=1-At),s.clearDepth(At),Ut=At)},reset:function(){X=!1,Ft=null,Bt=null,Ut=null,It=!1}}}function l(){let X=!1,It=null,Ft=null,Bt=null,Ut=null,At=null,$t=null,pe=null,Ge=null;return{setTest:function(Le){X||(Le?U(s.STENCIL_TEST):Y(s.STENCIL_TEST))},setMask:function(Le){It!==Le&&!X&&(s.stencilMask(Le),It=Le)},setFunc:function(Le,Tn,te){(Ft!==Le||Bt!==Tn||Ut!==te)&&(s.stencilFunc(Le,Tn,te),Ft=Le,Bt=Tn,Ut=te)},setOp:function(Le,Tn,te){(At!==Le||$t!==Tn||pe!==te)&&(s.stencilOp(Le,Tn,te),At=Le,$t=Tn,pe=te)},setLocked:function(Le){X=Le},setClear:function(Le){Ge!==Le&&(s.clearStencil(Le),Ge=Le)},reset:function(){X=!1,It=null,Ft=null,Bt=null,Ut=null,At=null,$t=null,pe=null,Ge=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},x={},_=new WeakMap,S=[],E=null,T=!1,b=null,v=null,P=null,L=null,H=null,k=null,z=null,I=new Ae(0,0,0),K=0,D=!1,C=null,G=null,et=null,ht=null,gt=null;const xt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Z=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=Z>=1):j.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=Z>=2);let yt=null,St={};const B=s.getParameter(s.SCISSOR_BOX),rt=s.getParameter(s.VIEWPORT),Ct=new gn().fromArray(B),Lt=new gn().fromArray(rt);function Xt(X,It,Ft,Bt){const Ut=new Uint8Array(4),At=s.createTexture();s.bindTexture(X,At),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $t=0;$t<Ft;$t++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(It,0,s.RGBA,1,1,Bt,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(It+$t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return At}const N={};N[s.TEXTURE_2D]=Xt(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=Xt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[s.TEXTURE_2D_ARRAY]=Xt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=Xt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),U(s.DEPTH_TEST),h.setFunc(Ks),Ot(!1),Et(mg),U(s.CULL_FACE),_t(Ca);function U(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Y(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function $(X,It){return x[X]!==It?(s.bindFramebuffer(X,It),x[X]=It,X===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=It),X===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=It),!0):!1}function nt(X,It){let Ft=S,Bt=!1;if(X){Ft=_.get(It),Ft===void 0&&(Ft=[],_.set(It,Ft));const Ut=X.textures;if(Ft.length!==Ut.length||Ft[0]!==s.COLOR_ATTACHMENT0){for(let At=0,$t=Ut.length;At<$t;At++)Ft[At]=s.COLOR_ATTACHMENT0+At;Ft.length=Ut.length,Bt=!0}}else Ft[0]!==s.BACK&&(Ft[0]=s.BACK,Bt=!0);Bt&&s.drawBuffers(Ft)}function ut(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const Rt={[Gr]:s.FUNC_ADD,[US]:s.FUNC_SUBTRACT,[LS]:s.FUNC_REVERSE_SUBTRACT};Rt[NS]=s.MIN,Rt[OS]=s.MAX;const bt={[zS]:s.ZERO,[PS]:s.ONE,[FS]:s.SRC_COLOR,[gd]:s.SRC_ALPHA,[kS]:s.SRC_ALPHA_SATURATE,[GS]:s.DST_COLOR,[IS]:s.DST_ALPHA,[BS]:s.ONE_MINUS_SRC_COLOR,[_d]:s.ONE_MINUS_SRC_ALPHA,[VS]:s.ONE_MINUS_DST_COLOR,[HS]:s.ONE_MINUS_DST_ALPHA,[XS]:s.CONSTANT_COLOR,[WS]:s.ONE_MINUS_CONSTANT_COLOR,[qS]:s.CONSTANT_ALPHA,[YS]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(X,It,Ft,Bt,Ut,At,$t,pe,Ge,Le){if(X===Ca){T===!0&&(Y(s.BLEND),T=!1);return}if(T===!1&&(U(s.BLEND),T=!0),X!==DS){if(X!==b||Le!==D){if((v!==Gr||H!==Gr)&&(s.blendEquation(s.FUNC_ADD),v=Gr,H=Gr),Le)switch(X){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xd:s.blendFunc(s.ONE,s.ONE);break;case xg:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gg:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:dn("WebGLState: Invalid blending: ",X);break}else switch(X){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case xg:dn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gg:dn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dn("WebGLState: Invalid blending: ",X);break}P=null,L=null,k=null,z=null,I.set(0,0,0),K=0,b=X,D=Le}return}Ut=Ut||It,At=At||Ft,$t=$t||Bt,(It!==v||Ut!==H)&&(s.blendEquationSeparate(Rt[It],Rt[Ut]),v=It,H=Ut),(Ft!==P||Bt!==L||At!==k||$t!==z)&&(s.blendFuncSeparate(bt[Ft],bt[Bt],bt[At],bt[$t]),P=Ft,L=Bt,k=At,z=$t),(pe.equals(I)===!1||Ge!==K)&&(s.blendColor(pe.r,pe.g,pe.b,Ge),I.copy(pe),K=Ge),b=X,D=!1}function O(X,It){X.side===Aa?Y(s.CULL_FACE):U(s.CULL_FACE);let Ft=X.side===si;It&&(Ft=!Ft),Ot(Ft),X.blending===Ys&&X.transparent===!1?_t(Ca):_t(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Bt=X.stencilWrite;d.setTest(Bt),Bt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):Y(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(X){C!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),C=X)}function Et(X){X!==RS?(U(s.CULL_FACE),X!==G&&(X===mg?s.cullFace(s.BACK):X===wS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Y(s.CULL_FACE),G=X}function me(X){X!==et&&(F&&s.lineWidth(X),et=X)}function zt(X,It,Ft){X?(U(s.POLYGON_OFFSET_FILL),(ht!==It||gt!==Ft)&&(s.polygonOffset(It,Ft),ht=It,gt=Ft)):Y(s.POLYGON_OFFSET_FILL)}function ue(X){X?U(s.SCISSOR_TEST):Y(s.SCISSOR_TEST)}function Zt(X){X===void 0&&(X=s.TEXTURE0+xt-1),yt!==X&&(s.activeTexture(X),yt=X)}function kt(X,It,Ft){Ft===void 0&&(yt===null?Ft=s.TEXTURE0+xt-1:Ft=yt);let Bt=St[Ft];Bt===void 0&&(Bt={type:void 0,texture:void 0},St[Ft]=Bt),(Bt.type!==X||Bt.texture!==It)&&(yt!==Ft&&(s.activeTexture(Ft),yt=Ft),s.bindTexture(X,It||N[X]),Bt.type=X,Bt.texture=It)}function R(){const X=St[yt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function it(){try{s.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function pt(){try{s.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function at(){try{s.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Pt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Nt(){try{s.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Wt(){try{s.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Gt(){try{s.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Mt(){try{s.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Dt(X){Ct.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ct.copy(X))}function qt(X){Lt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Lt.copy(X))}function Yt(X,It){let Ft=p.get(It);Ft===void 0&&(Ft=new WeakMap,p.set(It,Ft));let Bt=Ft.get(X);Bt===void 0&&(Bt=s.getUniformBlockIndex(It,X.name),Ft.set(X,Bt))}function Vt(X,It){const Bt=p.get(It).get(X);m.get(It)!==Bt&&(s.uniformBlockBinding(It,Bt,X.__bindingPointIndex),m.set(It,Bt))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},yt=null,St={},x={},_=new WeakMap,S=[],E=null,T=!1,b=null,v=null,P=null,L=null,H=null,k=null,z=null,I=new Ae(0,0,0),K=0,D=!1,C=null,G=null,et=null,ht=null,gt=null,Ct.set(0,0,s.canvas.width,s.canvas.height),Lt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:U,disable:Y,bindFramebuffer:$,drawBuffers:nt,useProgram:ut,setBlending:_t,setMaterial:O,setFlipSided:Ot,setCullFace:Et,setLineWidth:me,setPolygonOffset:zt,setScissorTest:ue,activeTexture:Zt,bindTexture:kt,unbindTexture:R,compressedTexImage2D:M,compressedTexImage3D:q,texImage2D:Gt,texImage3D:Mt,updateUBOMapping:Yt,uniformBlockBinding:Vt,texStorage2D:Nt,texStorage3D:Wt,texSubImage2D:it,texSubImage3D:pt,compressedTexSubImage2D:at,compressedTexSubImage3D:Pt,scissor:Dt,viewport:qt,reset:re}}function e2(s,t,i,r,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ee,g=new WeakMap;let x;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,M){return S?new OffscreenCanvas(R,M):ml("canvas")}function T(R,M,q){let it=1;const pt=kt(R);if((pt.width>q||pt.height>q)&&(it=q/Math.max(pt.width,pt.height)),it<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const at=Math.floor(it*pt.width),Pt=Math.floor(it*pt.height);x===void 0&&(x=E(at,Pt));const Nt=M?E(at,Pt):x;return Nt.width=at,Nt.height=Pt,Nt.getContext("2d").drawImage(R,0,0,at,Pt),xe("WebGLRenderer: Texture has been resized from ("+pt.width+"x"+pt.height+") to ("+at+"x"+Pt+")."),Nt}else return"data"in R&&xe("WebGLRenderer: Image in DataTexture is too big ("+pt.width+"x"+pt.height+")."),R;return R}function b(R){return R.generateMipmaps}function v(R){s.generateMipmap(R)}function P(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(R,M,q,it,pt=!1){if(R!==null){if(s[R]!==void 0)return s[R];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let at=M;if(M===s.RED&&(q===s.FLOAT&&(at=s.R32F),q===s.HALF_FLOAT&&(at=s.R16F),q===s.UNSIGNED_BYTE&&(at=s.R8)),M===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(at=s.R8UI),q===s.UNSIGNED_SHORT&&(at=s.R16UI),q===s.UNSIGNED_INT&&(at=s.R32UI),q===s.BYTE&&(at=s.R8I),q===s.SHORT&&(at=s.R16I),q===s.INT&&(at=s.R32I)),M===s.RG&&(q===s.FLOAT&&(at=s.RG32F),q===s.HALF_FLOAT&&(at=s.RG16F),q===s.UNSIGNED_BYTE&&(at=s.RG8)),M===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(at=s.RG8UI),q===s.UNSIGNED_SHORT&&(at=s.RG16UI),q===s.UNSIGNED_INT&&(at=s.RG32UI),q===s.BYTE&&(at=s.RG8I),q===s.SHORT&&(at=s.RG16I),q===s.INT&&(at=s.RG32I)),M===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(at=s.RGB8UI),q===s.UNSIGNED_SHORT&&(at=s.RGB16UI),q===s.UNSIGNED_INT&&(at=s.RGB32UI),q===s.BYTE&&(at=s.RGB8I),q===s.SHORT&&(at=s.RGB16I),q===s.INT&&(at=s.RGB32I)),M===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(at=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(at=s.RGBA16UI),q===s.UNSIGNED_INT&&(at=s.RGBA32UI),q===s.BYTE&&(at=s.RGBA8I),q===s.SHORT&&(at=s.RGBA16I),q===s.INT&&(at=s.RGBA32I)),M===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(at=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(at=s.R11F_G11F_B10F)),M===s.RGBA){const Pt=pt?hu:He.getTransfer(it);q===s.FLOAT&&(at=s.RGBA32F),q===s.HALF_FLOAT&&(at=s.RGBA16F),q===s.UNSIGNED_BYTE&&(at=Pt===Ke?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function H(R,M){let q;return R?M===null||M===Wr||M===hl?q=s.DEPTH24_STENCIL8:M===wa?q=s.DEPTH32F_STENCIL8:M===fl&&(q=s.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Wr||M===hl?q=s.DEPTH_COMPONENT24:M===wa?q=s.DEPTH_COMPONENT32F:M===fl&&(q=s.DEPTH_COMPONENT16),q}function k(R,M){return b(R)===!0||R.isFramebufferTexture&&R.minFilter!==$n&&R.minFilter!==jn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function z(R){const M=R.target;M.removeEventListener("dispose",z),K(M),M.isVideoTexture&&g.delete(M)}function I(R){const M=R.target;M.removeEventListener("dispose",I),C(M)}function K(R){const M=r.get(R);if(M.__webglInit===void 0)return;const q=R.source,it=_.get(q);if(it){const pt=it[M.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&D(R),Object.keys(it).length===0&&_.delete(q)}r.remove(R)}function D(R){const M=r.get(R);s.deleteTexture(M.__webglTexture);const q=R.source,it=_.get(q);delete it[M.__cacheKey],h.memory.textures--}function C(R){const M=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(M.__webglFramebuffer[it]))for(let pt=0;pt<M.__webglFramebuffer[it].length;pt++)s.deleteFramebuffer(M.__webglFramebuffer[it][pt]);else s.deleteFramebuffer(M.__webglFramebuffer[it]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[it])}else{if(Array.isArray(M.__webglFramebuffer))for(let it=0;it<M.__webglFramebuffer.length;it++)s.deleteFramebuffer(M.__webglFramebuffer[it]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let it=0;it<M.__webglColorRenderbuffer.length;it++)M.__webglColorRenderbuffer[it]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[it]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=R.textures;for(let it=0,pt=q.length;it<pt;it++){const at=r.get(q[it]);at.__webglTexture&&(s.deleteTexture(at.__webglTexture),h.memory.textures--),r.remove(q[it])}r.remove(R)}let G=0;function et(){G=0}function ht(){const R=G;return R>=l.maxTextures&&xe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l.maxTextures),G+=1,R}function gt(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function xt(R,M){const q=r.get(R);if(R.isVideoTexture&&ue(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){const it=R.image;if(it===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{N(q,R,M);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+M)}function F(R,M){const q=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){N(q,R,M);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+M)}function Z(R,M){const q=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){N(q,R,M);return}i.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+M)}function j(R,M){const q=r.get(R);if(R.version>0&&q.__version!==R.version){U(q,R,M);return}i.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+M)}const yt={[kr]:s.REPEAT,[Hi]:s.CLAMP_TO_EDGE,[ul]:s.MIRRORED_REPEAT},St={[$n]:s.NEAREST,[ib]:s.NEAREST_MIPMAP_NEAREST,[Lc]:s.NEAREST_MIPMAP_LINEAR,[jn]:s.LINEAR,[Nh]:s.LINEAR_MIPMAP_NEAREST,[Ra]:s.LINEAR_MIPMAP_LINEAR},B={[ob]:s.NEVER,[db]:s.ALWAYS,[lb]:s.LESS,[L_]:s.LEQUAL,[cb]:s.EQUAL,[hb]:s.GEQUAL,[ub]:s.GREATER,[fb]:s.NOTEQUAL};function rt(R,M){if(M.type===wa&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===jn||M.magFilter===Nh||M.magFilter===Lc||M.magFilter===Ra||M.minFilter===jn||M.minFilter===Nh||M.minFilter===Lc||M.minFilter===Ra)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,yt[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,yt[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,yt[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,St[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,St[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,B[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$n||M.minFilter!==Lc&&M.minFilter!==Ra||M.type===wa&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function Ct(R,M){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",z));const it=M.source;let pt=_.get(it);pt===void 0&&(pt={},_.set(it,pt));const at=gt(M);if(at!==R.__cacheKey){pt[at]===void 0&&(pt[at]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,q=!0),pt[at].usedTimes++;const Pt=pt[R.__cacheKey];Pt!==void 0&&(pt[R.__cacheKey].usedTimes--,Pt.usedTimes===0&&D(M)),R.__cacheKey=at,R.__webglTexture=pt[at].texture}return q}function Lt(R,M,q){return Math.floor(Math.floor(R/q)/M)}function Xt(R,M,q,it){const at=R.updateRanges;if(at.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,q,it,M.data);else{at.sort((Mt,Dt)=>Mt.start-Dt.start);let Pt=0;for(let Mt=1;Mt<at.length;Mt++){const Dt=at[Pt],qt=at[Mt],Yt=Dt.start+Dt.count,Vt=Lt(qt.start,M.width,4),re=Lt(Dt.start,M.width,4);qt.start<=Yt+1&&Vt===re&&Lt(qt.start+qt.count-1,M.width,4)===Vt?Dt.count=Math.max(Dt.count,qt.start+qt.count-Dt.start):(++Pt,at[Pt]=qt)}at.length=Pt+1;const Nt=s.getParameter(s.UNPACK_ROW_LENGTH),Wt=s.getParameter(s.UNPACK_SKIP_PIXELS),Gt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let Mt=0,Dt=at.length;Mt<Dt;Mt++){const qt=at[Mt],Yt=Math.floor(qt.start/4),Vt=Math.ceil(qt.count/4),re=Yt%M.width,X=Math.floor(Yt/M.width),It=Vt,Ft=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,re),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,re,X,It,Ft,q,it,M.data)}R.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Nt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Wt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Gt)}}function N(R,M,q){let it=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(it=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(it=s.TEXTURE_3D);const pt=Ct(R,M),at=M.source;i.bindTexture(it,R.__webglTexture,s.TEXTURE0+q);const Pt=r.get(at);if(at.version!==Pt.__version||pt===!0){i.activeTexture(s.TEXTURE0+q);const Nt=He.getPrimaries(He.workingColorSpace),Wt=M.colorSpace===dr?null:He.getPrimaries(M.colorSpace),Gt=M.colorSpace===dr||Nt===Wt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Mt=T(M.image,!1,l.maxTextureSize);Mt=Zt(M,Mt);const Dt=c.convert(M.format,M.colorSpace),qt=c.convert(M.type);let Yt=L(M.internalFormat,Dt,qt,M.colorSpace,M.isVideoTexture);rt(it,M);let Vt;const re=M.mipmaps,X=M.isVideoTexture!==!0,It=Pt.__version===void 0||pt===!0,Ft=at.dataReady,Bt=k(M,Mt);if(M.isDepthTexture)Yt=H(M.format===pl,M.type),It&&(X?i.texStorage2D(s.TEXTURE_2D,1,Yt,Mt.width,Mt.height):i.texImage2D(s.TEXTURE_2D,0,Yt,Mt.width,Mt.height,0,Dt,qt,null));else if(M.isDataTexture)if(re.length>0){X&&It&&i.texStorage2D(s.TEXTURE_2D,Bt,Yt,re[0].width,re[0].height);for(let Ut=0,At=re.length;Ut<At;Ut++)Vt=re[Ut],X?Ft&&i.texSubImage2D(s.TEXTURE_2D,Ut,0,0,Vt.width,Vt.height,Dt,qt,Vt.data):i.texImage2D(s.TEXTURE_2D,Ut,Yt,Vt.width,Vt.height,0,Dt,qt,Vt.data);M.generateMipmaps=!1}else X?(It&&i.texStorage2D(s.TEXTURE_2D,Bt,Yt,Mt.width,Mt.height),Ft&&Xt(M,Mt,Dt,qt)):i.texImage2D(s.TEXTURE_2D,0,Yt,Mt.width,Mt.height,0,Dt,qt,Mt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){X&&It&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Yt,re[0].width,re[0].height,Mt.depth);for(let Ut=0,At=re.length;Ut<At;Ut++)if(Vt=re[Ut],M.format!==Gi)if(Dt!==null)if(X){if(Ft)if(M.layerUpdates.size>0){const $t=jg(Vt.width,Vt.height,M.format,M.type);for(const pe of M.layerUpdates){const Ge=Vt.data.subarray(pe*$t/Vt.data.BYTES_PER_ELEMENT,(pe+1)*$t/Vt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ut,0,0,pe,Vt.width,Vt.height,1,Dt,Ge)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ut,0,0,0,Vt.width,Vt.height,Mt.depth,Dt,Vt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ut,Yt,Vt.width,Vt.height,Mt.depth,0,Vt.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ft&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Ut,0,0,0,Vt.width,Vt.height,Mt.depth,Dt,qt,Vt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Ut,Yt,Vt.width,Vt.height,Mt.depth,0,Dt,qt,Vt.data)}else{X&&It&&i.texStorage2D(s.TEXTURE_2D,Bt,Yt,re[0].width,re[0].height);for(let Ut=0,At=re.length;Ut<At;Ut++)Vt=re[Ut],M.format!==Gi?Dt!==null?X?Ft&&i.compressedTexSubImage2D(s.TEXTURE_2D,Ut,0,0,Vt.width,Vt.height,Dt,Vt.data):i.compressedTexImage2D(s.TEXTURE_2D,Ut,Yt,Vt.width,Vt.height,0,Vt.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ft&&i.texSubImage2D(s.TEXTURE_2D,Ut,0,0,Vt.width,Vt.height,Dt,qt,Vt.data):i.texImage2D(s.TEXTURE_2D,Ut,Yt,Vt.width,Vt.height,0,Dt,qt,Vt.data)}else if(M.isDataArrayTexture)if(X){if(It&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Yt,Mt.width,Mt.height,Mt.depth),Ft)if(M.layerUpdates.size>0){const Ut=jg(Mt.width,Mt.height,M.format,M.type);for(const At of M.layerUpdates){const $t=Mt.data.subarray(At*Ut/Mt.data.BYTES_PER_ELEMENT,(At+1)*Ut/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,At,Mt.width,Mt.height,1,Dt,qt,$t)}M.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Dt,qt,Mt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Yt,Mt.width,Mt.height,Mt.depth,0,Dt,qt,Mt.data);else if(M.isData3DTexture)X?(It&&i.texStorage3D(s.TEXTURE_3D,Bt,Yt,Mt.width,Mt.height,Mt.depth),Ft&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Dt,qt,Mt.data)):i.texImage3D(s.TEXTURE_3D,0,Yt,Mt.width,Mt.height,Mt.depth,0,Dt,qt,Mt.data);else if(M.isFramebufferTexture){if(It)if(X)i.texStorage2D(s.TEXTURE_2D,Bt,Yt,Mt.width,Mt.height);else{let Ut=Mt.width,At=Mt.height;for(let $t=0;$t<Bt;$t++)i.texImage2D(s.TEXTURE_2D,$t,Yt,Ut,At,0,Dt,qt,null),Ut>>=1,At>>=1}}else if(re.length>0){if(X&&It){const Ut=kt(re[0]);i.texStorage2D(s.TEXTURE_2D,Bt,Yt,Ut.width,Ut.height)}for(let Ut=0,At=re.length;Ut<At;Ut++)Vt=re[Ut],X?Ft&&i.texSubImage2D(s.TEXTURE_2D,Ut,0,0,Dt,qt,Vt):i.texImage2D(s.TEXTURE_2D,Ut,Yt,Dt,qt,Vt);M.generateMipmaps=!1}else if(X){if(It){const Ut=kt(Mt);i.texStorage2D(s.TEXTURE_2D,Bt,Yt,Ut.width,Ut.height)}Ft&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Dt,qt,Mt)}else i.texImage2D(s.TEXTURE_2D,0,Yt,Dt,qt,Mt);b(M)&&v(it),Pt.__version=at.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function U(R,M,q){if(M.image.length!==6)return;const it=Ct(R,M),pt=M.source;i.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+q);const at=r.get(pt);if(pt.version!==at.__version||it===!0){i.activeTexture(s.TEXTURE0+q);const Pt=He.getPrimaries(He.workingColorSpace),Nt=M.colorSpace===dr?null:He.getPrimaries(M.colorSpace),Wt=M.colorSpace===dr||Pt===Nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);const Gt=M.isCompressedTexture||M.image[0].isCompressedTexture,Mt=M.image[0]&&M.image[0].isDataTexture,Dt=[];for(let At=0;At<6;At++)!Gt&&!Mt?Dt[At]=T(M.image[At],!0,l.maxCubemapSize):Dt[At]=Mt?M.image[At].image:M.image[At],Dt[At]=Zt(M,Dt[At]);const qt=Dt[0],Yt=c.convert(M.format,M.colorSpace),Vt=c.convert(M.type),re=L(M.internalFormat,Yt,Vt,M.colorSpace),X=M.isVideoTexture!==!0,It=at.__version===void 0||it===!0,Ft=pt.dataReady;let Bt=k(M,qt);rt(s.TEXTURE_CUBE_MAP,M);let Ut;if(Gt){X&&It&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,re,qt.width,qt.height);for(let At=0;At<6;At++){Ut=Dt[At].mipmaps;for(let $t=0;$t<Ut.length;$t++){const pe=Ut[$t];M.format!==Gi?Yt!==null?X?Ft&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t,0,0,pe.width,pe.height,Yt,pe.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t,re,pe.width,pe.height,0,pe.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t,0,0,pe.width,pe.height,Yt,Vt,pe.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t,re,pe.width,pe.height,0,Yt,Vt,pe.data)}}}else{if(Ut=M.mipmaps,X&&It){Ut.length>0&&Bt++;const At=kt(Dt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,re,At.width,At.height)}for(let At=0;At<6;At++)if(Mt){X?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Dt[At].width,Dt[At].height,Yt,Vt,Dt[At].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,re,Dt[At].width,Dt[At].height,0,Yt,Vt,Dt[At].data);for(let $t=0;$t<Ut.length;$t++){const Ge=Ut[$t].image[At].image;X?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t+1,0,0,Ge.width,Ge.height,Yt,Vt,Ge.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t+1,re,Ge.width,Ge.height,0,Yt,Vt,Ge.data)}}else{X?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,Yt,Vt,Dt[At]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,re,Yt,Vt,Dt[At]);for(let $t=0;$t<Ut.length;$t++){const pe=Ut[$t];X?Ft&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t+1,0,0,Yt,Vt,pe.image[At]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+At,$t+1,re,Yt,Vt,pe.image[At])}}}b(M)&&v(s.TEXTURE_CUBE_MAP),at.__version=pt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Y(R,M,q,it,pt,at){const Pt=c.convert(q.format,q.colorSpace),Nt=c.convert(q.type),Wt=L(q.internalFormat,Pt,Nt,q.colorSpace),Gt=r.get(M),Mt=r.get(q);if(Mt.__renderTarget=M,!Gt.__hasExternalTextures){const Dt=Math.max(1,M.width>>at),qt=Math.max(1,M.height>>at);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?i.texImage3D(pt,at,Wt,Dt,qt,M.depth,0,Pt,Nt,null):i.texImage2D(pt,at,Wt,Dt,qt,0,Pt,Nt,null)}i.bindFramebuffer(s.FRAMEBUFFER,R),zt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,pt,Mt.__webglTexture,0,me(M)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,it,pt,Mt.__webglTexture,at),i.bindFramebuffer(s.FRAMEBUFFER,null)}function $(R,M,q){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){const it=M.depthTexture,pt=it&&it.isDepthTexture?it.type:null,at=H(M.stencilBuffer,pt),Pt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Nt=me(M);zt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt,at,M.width,M.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,at,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,at,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pt,s.RENDERBUFFER,R)}else{const it=M.textures;for(let pt=0;pt<it.length;pt++){const at=it[pt],Pt=c.convert(at.format,at.colorSpace),Nt=c.convert(at.type),Wt=L(at.internalFormat,Pt,Nt,at.colorSpace),Gt=me(M);q&&zt(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,Wt,M.width,M.height):zt(M)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,Wt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Wt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=r.get(M.depthTexture);it.__renderTarget=M,(!it.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),xt(M.depthTexture,0);const pt=it.__webglTexture,at=me(M);if(M.depthTexture.format===dl)zt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(M.depthTexture.format===pl)zt(M)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function ut(R){const M=r.get(R),q=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const it=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),it){const pt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,it.removeEventListener("dispose",pt)};it.addEventListener("dispose",pt),M.__depthDisposeCallback=pt}M.__boundDepthTexture=it}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const it=R.texture.mipmaps;it&&it.length>0?nt(M.__webglFramebuffer[0],R):nt(M.__webglFramebuffer,R)}else if(q){M.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[it]),M.__webglDepthbuffer[it]===void 0)M.__webglDepthbuffer[it]=s.createRenderbuffer(),$(M.__webglDepthbuffer[it],R,!1);else{const pt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer[it];s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,at)}}else{const it=R.texture.mipmaps;if(it&&it.length>0?i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),$(M.__webglDepthbuffer,R,!1);else{const pt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,pt,s.RENDERBUFFER,at)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(R,M,q){const it=r.get(R);M!==void 0&&Y(it.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&ut(R)}function bt(R){const M=R.texture,q=r.get(R),it=r.get(M);R.addEventListener("dispose",I);const pt=R.textures,at=R.isWebGLCubeRenderTarget===!0,Pt=pt.length>1;if(Pt||(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=M.version,h.memory.textures++),at){q.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Nt]=[];for(let Wt=0;Wt<M.mipmaps.length;Wt++)q.__webglFramebuffer[Nt][Wt]=s.createFramebuffer()}else q.__webglFramebuffer[Nt]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Nt=0;Nt<M.mipmaps.length;Nt++)q.__webglFramebuffer[Nt]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Pt)for(let Nt=0,Wt=pt.length;Nt<Wt;Nt++){const Gt=r.get(pt[Nt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),h.memory.textures++)}if(R.samples>0&&zt(R)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Nt=0;Nt<pt.length;Nt++){const Wt=pt[Nt];q.__webglColorRenderbuffer[Nt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Nt]);const Gt=c.convert(Wt.format,Wt.colorSpace),Mt=c.convert(Wt.type),Dt=L(Wt.internalFormat,Gt,Mt,Wt.colorSpace,R.isXRRenderTarget===!0),qt=me(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Dt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,q.__webglColorRenderbuffer[Nt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),$(q.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){i.bindTexture(s.TEXTURE_CUBE_MAP,it.__webglTexture),rt(s.TEXTURE_CUBE_MAP,M);for(let Nt=0;Nt<6;Nt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)Y(q.__webglFramebuffer[Nt][Wt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Wt);else Y(q.__webglFramebuffer[Nt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);b(M)&&v(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pt){for(let Nt=0,Wt=pt.length;Nt<Wt;Nt++){const Gt=pt[Nt],Mt=r.get(Gt);let Dt=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Dt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Mt.__webglTexture),rt(Dt,Gt),Y(q.__webglFramebuffer,R,Gt,s.COLOR_ATTACHMENT0+Nt,Dt,0),b(Gt)&&v(Dt)}i.unbindTexture()}else{let Nt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Nt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Nt,it.__webglTexture),rt(Nt,M),M.mipmaps&&M.mipmaps.length>0)for(let Wt=0;Wt<M.mipmaps.length;Wt++)Y(q.__webglFramebuffer[Wt],R,M,s.COLOR_ATTACHMENT0,Nt,Wt);else Y(q.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,Nt,0);b(M)&&v(Nt),i.unbindTexture()}R.depthBuffer&&ut(R)}function _t(R){const M=R.textures;for(let q=0,it=M.length;q<it;q++){const pt=M[q];if(b(pt)){const at=P(R),Pt=r.get(pt).__webglTexture;i.bindTexture(at,Pt),v(at),i.unbindTexture()}}}const O=[],Ot=[];function Et(R){if(R.samples>0){if(zt(R)===!1){const M=R.textures,q=R.width,it=R.height;let pt=s.COLOR_BUFFER_BIT;const at=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pt=r.get(R),Nt=M.length>1;if(Nt)for(let Gt=0;Gt<M.length;Gt++)i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer);const Wt=R.texture.mipmaps;Wt&&Wt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Gt=0;Gt<M.length;Gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),Nt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Gt]);const Mt=r.get(M[Gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Mt,0)}s.blitFramebuffer(0,0,q,it,0,0,q,it,pt,s.NEAREST),m===!0&&(O.length=0,Ot.length=0,O.push(s.COLOR_ATTACHMENT0+Gt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(O.push(at),Ot.push(at),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,O))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Nt)for(let Gt=0;Gt<M.length;Gt++){i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,Pt.__webglColorRenderbuffer[Gt]);const Mt=r.get(M[Gt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,Mt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&m){const M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function me(R){return Math.min(l.maxSamples,R.samples)}function zt(R){const M=r.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ue(R){const M=h.render.frame;g.get(R)!==M&&(g.set(R,M),R.update())}function Zt(R,M){const q=R.colorSpace,it=R.format,pt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==$s&&q!==dr&&(He.getTransfer(q)===Ke?(it!==Gi||pt!==Ji)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dn("WebGLTextures: Unsupported texture color space:",q)),M}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=ht,this.resetTextureUnits=et,this.setTexture2D=xt,this.setTexture2DArray=F,this.setTexture3D=Z,this.setTextureCube=j,this.rebindTextures=Rt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=zt}function n2(s,t){function i(r,l=dr){let c;const h=He.getTransfer(l);if(r===Ji)return s.UNSIGNED_BYTE;if(r===hp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===dp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===R_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===w_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===T_)return s.BYTE;if(r===A_)return s.SHORT;if(r===fl)return s.UNSIGNED_SHORT;if(r===fp)return s.INT;if(r===Wr)return s.UNSIGNED_INT;if(r===wa)return s.FLOAT;if(r===eo)return s.HALF_FLOAT;if(r===C_)return s.ALPHA;if(r===D_)return s.RGB;if(r===Gi)return s.RGBA;if(r===dl)return s.DEPTH_COMPONENT;if(r===pl)return s.DEPTH_STENCIL;if(r===U_)return s.RED;if(r===pp)return s.RED_INTEGER;if(r===mp)return s.RG;if(r===xp)return s.RG_INTEGER;if(r===gp)return s.RGBA_INTEGER;if(r===ou||r===lu||r===cu||r===uu)if(h===Ke)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wd||r===Cd||r===Dd||r===Ud)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ld||r===Nd||r===Od)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Ld||r===Nd)return h===Ke?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Od)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zd||r===Pd||r===Fd||r===Bd||r===Id||r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===zd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Pd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Id)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Hd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Xd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===qd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Yd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jd)return h===Ke?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zd||r===Kd||r===Qd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Zd)return h===Ke?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jd||r===$d||r===tp||r===ep)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Jd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===$d)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===hl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const i2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,a2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class r2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new q_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Na({vertexShader:i2,fragmentShader:a2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _i(new vu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class s2 extends no{constructor(t,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,x=null,_=null,S=null,E=null;const T=typeof XRWebGLBinding<"u",b=new r2,v={},P=i.getContextAttributes();let L=null,H=null;const k=[],z=[],I=new Ee;let K=null;const D=new Di;D.viewport=new gn;const C=new Di;C.viewport=new gn;const G=[D,C],et=new EM;let ht=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let U=k[N];return U===void 0&&(U=new td,k[N]=U),U.getTargetRaySpace()},this.getControllerGrip=function(N){let U=k[N];return U===void 0&&(U=new td,k[N]=U),U.getGripSpace()},this.getHand=function(N){let U=k[N];return U===void 0&&(U=new td,k[N]=U),U.getHandSpace()};function xt(N){const U=z.indexOf(N.inputSource);if(U===-1)return;const Y=k[U];Y!==void 0&&(Y.update(N.inputSource,N.frame,p||h),Y.dispatchEvent({type:N.type,data:N.inputSource}))}function F(){l.removeEventListener("select",xt),l.removeEventListener("selectstart",xt),l.removeEventListener("selectend",xt),l.removeEventListener("squeeze",xt),l.removeEventListener("squeezestart",xt),l.removeEventListener("squeezeend",xt),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",Z);for(let N=0;N<k.length;N++){const U=z[N];U!==null&&(z[N]=null,k[N].disconnect(U))}ht=null,gt=null,b.reset();for(const N in v)delete v[N];t.setRenderTarget(L),S=null,_=null,x=null,l=null,H=null,Xt.stop(),r.isPresenting=!1,t.setPixelRatio(K),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){c=N,r.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){d=N,r.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(N){p=N},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(N){if(l=N,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",xt),l.addEventListener("selectstart",xt),l.addEventListener("selectend",xt),l.addEventListener("squeeze",xt),l.addEventListener("squeezestart",xt),l.addEventListener("squeezeend",xt),l.addEventListener("end",F),l.addEventListener("inputsourceschange",Z),P.xrCompatible!==!0&&await i.makeXRCompatible(),K=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,$=null,nt=null;P.depth&&(nt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Y=P.stencil?pl:dl,$=P.stencil?hl:Wr);const ut={colorFormat:i.RGBA8,depthFormat:nt,scaleFactor:c};x=this.getBinding(),_=x.createProjectionLayer(ut),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),H=new qr(_.textureWidth,_.textureHeight,{format:Gi,type:Ji,depthTexture:new W_(_.textureWidth,_.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Y={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Y),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),H=new qr(S.framebufferWidth,S.framebufferHeight,{format:Gi,type:Ji,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}H.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Xt.setContext(l),Xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Z(N){for(let U=0;U<N.removed.length;U++){const Y=N.removed[U],$=z.indexOf(Y);$>=0&&(z[$]=null,k[$].disconnect(Y))}for(let U=0;U<N.added.length;U++){const Y=N.added[U];let $=z.indexOf(Y);if($===-1){for(let ut=0;ut<k.length;ut++)if(ut>=z.length){z.push(Y),$=ut;break}else if(z[ut]===null){z[ut]=Y,$=ut;break}if($===-1)break}const nt=k[$];nt&&nt.connect(Y)}}const j=new lt,yt=new lt;function St(N,U,Y){j.setFromMatrixPosition(U.matrixWorld),yt.setFromMatrixPosition(Y.matrixWorld);const $=j.distanceTo(yt),nt=U.projectionMatrix.elements,ut=Y.projectionMatrix.elements,Rt=nt[14]/(nt[10]-1),bt=nt[14]/(nt[10]+1),_t=(nt[9]+1)/nt[5],O=(nt[9]-1)/nt[5],Ot=(nt[8]-1)/nt[0],Et=(ut[8]+1)/ut[0],me=Rt*Ot,zt=Rt*Et,ue=$/(-Ot+Et),Zt=ue*-Ot;if(U.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Zt),N.translateZ(ue),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),nt[10]===-1)N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const kt=Rt+ue,R=bt+ue,M=me-Zt,q=zt+($-Zt),it=_t*bt/R*kt,pt=O*bt/R*kt;N.projectionMatrix.makePerspective(M,q,it,pt,kt,R),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function B(N,U){U===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(U.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(l===null)return;let U=N.near,Y=N.far;b.texture!==null&&(b.depthNear>0&&(U=b.depthNear),b.depthFar>0&&(Y=b.depthFar)),et.near=C.near=D.near=U,et.far=C.far=D.far=Y,(ht!==et.near||gt!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),ht=et.near,gt=et.far),et.layers.mask=N.layers.mask|6,D.layers.mask=et.layers.mask&3,C.layers.mask=et.layers.mask&5;const $=N.parent,nt=et.cameras;B(et,$);for(let ut=0;ut<nt.length;ut++)B(nt[ut],$);nt.length===2?St(et,D,C):et.projectionMatrix.copy(D.projectionMatrix),rt(N,et,$)};function rt(N,U,Y){Y===null?N.matrix.copy(U.matrixWorld):(N.matrix.copy(Y.matrixWorld),N.matrix.invert(),N.matrix.multiply(U.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(U.projectionMatrix),N.projectionMatrixInverse.copy(U.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=gl*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(N){m=N,_!==null&&(_.fixedFoveation=N),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=N)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(et)},this.getCameraTexture=function(N){return v[N]};let Ct=null;function Lt(N,U){if(g=U.getViewerPose(p||h),E=U,g!==null){const Y=g.views;S!==null&&(t.setRenderTargetFramebuffer(H,S.framebuffer),t.setRenderTarget(H));let $=!1;Y.length!==et.cameras.length&&(et.cameras.length=0,$=!0);for(let bt=0;bt<Y.length;bt++){const _t=Y[bt];let O=null;if(S!==null)O=S.getViewport(_t);else{const Et=x.getViewSubImage(_,_t);O=Et.viewport,bt===0&&(t.setRenderTargetTextures(H,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(H))}let Ot=G[bt];Ot===void 0&&(Ot=new Di,Ot.layers.enable(bt),Ot.viewport=new gn,G[bt]=Ot),Ot.matrix.fromArray(_t.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(_t.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(O.x,O.y,O.width,O.height),bt===0&&(et.matrix.copy(Ot.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),$===!0&&et.cameras.push(Ot)}const nt=l.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){x=r.getBinding();const bt=x.getDepthInformation(Y[0]);bt&&bt.isValid&&bt.texture&&b.init(bt,l.renderState)}if(nt&&nt.includes("camera-access")&&T){t.state.unbindTexture(),x=r.getBinding();for(let bt=0;bt<Y.length;bt++){const _t=Y[bt].camera;if(_t){let O=v[_t];O||(O=new q_,v[_t]=O);const Ot=x.getCameraImage(_t);O.sourceTexture=Ot}}}}for(let Y=0;Y<k.length;Y++){const $=z[Y],nt=k[Y];$!==null&&nt!==void 0&&nt.update($,U,p||h)}Ct&&Ct(N,U),U.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:U}),E=null}const Xt=new Q_;Xt.setAnimationLoop(Lt),this.setAnimationLoop=function(N){Ct=N},this.dispose=function(){}}}const Ir=new Vi,o2=new cn;function l2(s,t){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function r(b,v){v.color.getRGB(b.fogColor.value,I_(s)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,P,L,H){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(b,v):v.isMeshToonMaterial?(c(b,v),x(b,v)):v.isMeshPhongMaterial?(c(b,v),g(b,v)):v.isMeshStandardMaterial?(c(b,v),_(b,v),v.isMeshPhysicalMaterial&&S(b,v,H)):v.isMeshMatcapMaterial?(c(b,v),E(b,v)):v.isMeshDepthMaterial?c(b,v):v.isMeshDistanceMaterial?(c(b,v),T(b,v)):v.isMeshNormalMaterial?c(b,v):v.isLineBasicMaterial?(h(b,v),v.isLineDashedMaterial&&d(b,v)):v.isPointsMaterial?m(b,v,P,L):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===si&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===si&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const P=t.get(v),L=P.envMap,H=P.envMapRotation;L&&(b.envMap.value=L,Ir.copy(H),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),b.envMapRotation.value.setFromMatrix4(o2.makeRotationFromEuler(Ir)),b.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function h(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function d(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,P,L){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*P,b.scale.value=L*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function g(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function x(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function _(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function S(b,v,P){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===si&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function E(b,v){v.matcap&&(b.matcap.value=v.matcap)}function T(b,v){const P=t.get(v).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function c2(s,t,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,L){const H=L.program;r.uniformBlockBinding(P,H)}function p(P,L){let H=l[P.id];H===void 0&&(E(P),H=g(P),l[P.id]=H,P.addEventListener("dispose",b));const k=L.program;r.updateUBOMapping(P,k);const z=t.render.frame;c[P.id]!==z&&(_(P),c[P.id]=z)}function g(P){const L=x();P.__bindingPointIndex=L;const H=s.createBuffer(),k=P.__size,z=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,H),s.bufferData(s.UNIFORM_BUFFER,k,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,H),H}function x(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return dn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const L=l[P.id],H=P.uniforms,k=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let z=0,I=H.length;z<I;z++){const K=Array.isArray(H[z])?H[z]:[H[z]];for(let D=0,C=K.length;D<C;D++){const G=K[D];if(S(G,z,D,k)===!0){const et=G.__offset,ht=Array.isArray(G.value)?G.value:[G.value];let gt=0;for(let xt=0;xt<ht.length;xt++){const F=ht[xt],Z=T(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,et+gt,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,gt),gt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,et,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,L,H,k){const z=P.value,I=L+"_"+H;if(k[I]===void 0)return typeof z=="number"||typeof z=="boolean"?k[I]=z:k[I]=z.clone(),!0;{const K=k[I];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return k[I]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function E(P){const L=P.uniforms;let H=0;const k=16;for(let I=0,K=L.length;I<K;I++){const D=Array.isArray(L[I])?L[I]:[L[I]];for(let C=0,G=D.length;C<G;C++){const et=D[C],ht=Array.isArray(et.value)?et.value:[et.value];for(let gt=0,xt=ht.length;gt<xt;gt++){const F=ht[gt],Z=T(F),j=H%k,yt=j%Z.boundary,St=j+yt;H+=yt,St!==0&&k-St<Z.storage&&(H+=k-St),et.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=H,H+=Z.storage}}}const z=H%k;return z>0&&(H+=k-z),P.__size=H,P.__cache={},this}function T(P){const L={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(L.boundary=4,L.storage=4):P.isVector2?(L.boundary=8,L.storage=8):P.isVector3||P.isColor?(L.boundary=16,L.storage=12):P.isVector4?(L.boundary=16,L.storage=16):P.isMatrix3?(L.boundary=48,L.storage=48):P.isMatrix4?(L.boundary=64,L.storage=64):P.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xe("WebGLRenderer: Unsupported uniform value type.",P),L}function b(P){const L=P.target;L.removeEventListener("dispose",b);const H=h.indexOf(L.__bindingPointIndex);h.splice(H,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const P in l)s.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}const u2=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ea=null;function f2(){return Ea===null&&(Ea=new rM(u2,32,32,mp,eo),Ea.minFilter=jn,Ea.magFilter=jn,Ea.wrapS=Hi,Ea.wrapT=Hi,Ea.generateMipmaps=!1,Ea.needsUpdate=!0),Ea}class h2{constructor(t={}){const{canvas:i=pb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Set([gp,xp,pp]),T=new Set([Ji,Wr,fl,hl,hp,dp]),b=new Uint32Array(4),v=new Int32Array(4);let P=null,L=null;const H=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Da,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let I=!1;this._outputColorSpace=Jn;let K=0,D=0,C=null,G=-1,et=null;const ht=new gn,gt=new gn;let xt=null;const F=new Ae(0);let Z=0,j=i.width,yt=i.height,St=1,B=null,rt=null;const Ct=new gn(0,0,j,yt),Lt=new gn(0,0,j,yt);let Xt=!1;const N=new Mp;let U=!1,Y=!1;const $=new cn,nt=new lt,ut=new gn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function _t(){return C===null?St:1}let O=r;function Ot(w,Q){return i.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",Ut,!1),i.addEventListener("webglcontextrestored",At,!1),i.addEventListener("webglcontextcreationerror",$t,!1),O===null){const Q="webgl2";if(O=Ot(Q,w),O===null)throw Ot(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let Et,me,zt,ue,Zt,kt,R,M,q,it,pt,at,Pt,Nt,Wt,Gt,Mt,Dt,qt,Yt,Vt,re,X,It;function Ft(){Et=new yE(O),Et.init(),re=new n2(O,Et),me=new fE(O,Et,t,re),zt=new t2(O,Et),me.reversedDepthBuffer&&_&&zt.buffers.depth.setReversed(!0),ue=new ME(O),Zt=new GT,kt=new e2(O,Et,zt,Zt,me,re,ue),R=new dE(z),M=new vE(z),q=new RM(O),X=new cE(O,q),it=new SE(O,q,ue,X),pt=new TE(O,it,q,ue),qt=new EE(O,me,kt),Gt=new hE(Zt),at=new HT(z,R,M,Et,me,X,Gt),Pt=new l2(z,Zt),Nt=new kT,Wt=new ZT(Et),Dt=new lE(z,R,M,zt,pt,S,m),Mt=new JT(z,pt,me),It=new c2(O,ue,me,zt),Yt=new uE(O,Et,ue),Vt=new bE(O,Et,ue),ue.programs=at.programs,z.capabilities=me,z.extensions=Et,z.properties=Zt,z.renderLists=Nt,z.shadowMap=Mt,z.state=zt,z.info=ue}Ft();const Bt=new s2(z,O);this.xr=Bt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(w){w!==void 0&&(St=w,this.setSize(j,yt,!1))},this.getSize=function(w){return w.set(j,yt)},this.setSize=function(w,Q,dt=!0){if(Bt.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,yt=Q,i.width=Math.floor(w*St),i.height=Math.floor(Q*St),dt===!0&&(i.style.width=w+"px",i.style.height=Q+"px"),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(j*St,yt*St).floor()},this.setDrawingBufferSize=function(w,Q,dt){j=w,yt=Q,St=dt,i.width=Math.floor(w*dt),i.height=Math.floor(Q*dt),this.setViewport(0,0,w,Q)},this.getCurrentViewport=function(w){return w.copy(ht)},this.getViewport=function(w){return w.copy(Ct)},this.setViewport=function(w,Q,dt,ct){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,Q,dt,ct),zt.viewport(ht.copy(Ct).multiplyScalar(St).round())},this.getScissor=function(w){return w.copy(Lt)},this.setScissor=function(w,Q,dt,ct){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,Q,dt,ct),zt.scissor(gt.copy(Lt).multiplyScalar(St).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(w){zt.setScissorTest(Xt=w)},this.setOpaqueSort=function(w){B=w},this.setTransparentSort=function(w){rt=w},this.getClearColor=function(w){return w.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,dt=!0){let ct=0;if(w){let tt=!1;if(C!==null){const Ht=C.texture.format;tt=E.has(Ht)}if(tt){const Ht=C.texture.type,jt=T.has(Ht),ee=Dt.getClearColor(),ne=Dt.getClearAlpha(),fe=ee.r,de=ee.g,se=ee.b;jt?(b[0]=fe,b[1]=de,b[2]=se,b[3]=ne,O.clearBufferuiv(O.COLOR,0,b)):(v[0]=fe,v[1]=de,v[2]=se,v[3]=ne,O.clearBufferiv(O.COLOR,0,v))}else ct|=O.COLOR_BUFFER_BIT}Q&&(ct|=O.DEPTH_BUFFER_BIT),dt&&(ct|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ut,!1),i.removeEventListener("webglcontextrestored",At,!1),i.removeEventListener("webglcontextcreationerror",$t,!1),Dt.dispose(),Nt.dispose(),Wt.dispose(),Zt.dispose(),R.dispose(),M.dispose(),pt.dispose(),X.dispose(),It.dispose(),at.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Qe),Bt.removeEventListener("sessionend",un),le.stop()};function Ut(w){w.preventDefault(),pu("WebGLRenderer: Context Lost."),I=!0}function At(){pu("WebGLRenderer: Context Restored."),I=!1;const w=ue.autoReset,Q=Mt.enabled,dt=Mt.autoUpdate,ct=Mt.needsUpdate,tt=Mt.type;Ft(),ue.autoReset=w,Mt.enabled=Q,Mt.autoUpdate=dt,Mt.needsUpdate=ct,Mt.type=tt}function $t(w){dn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function pe(w){const Q=w.target;Q.removeEventListener("dispose",pe),Ge(Q)}function Ge(w){Le(w),Zt.remove(w)}function Le(w){const Q=Zt.get(w).programs;Q!==void 0&&(Q.forEach(function(dt){at.releaseProgram(dt)}),w.isShaderMaterial&&at.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,dt,ct,tt,Ht){Q===null&&(Q=Rt);const jt=tt.isMesh&&tt.matrixWorld.determinant()<0,ee=Zr(w,Q,dt,ct,tt);zt.setMaterial(ct,jt);let ne=dt.index,fe=1;if(ct.wireframe===!0){if(ne=it.getWireframeAttribute(dt),ne===void 0)return;fe=2}const de=dt.drawRange,se=dt.attributes.position;let ve=de.start*fe,Pe=(de.start+de.count)*fe;Ht!==null&&(ve=Math.max(ve,Ht.start*fe),Pe=Math.min(Pe,(Ht.start+Ht.count)*fe)),ne!==null?(ve=Math.max(ve,0),Pe=Math.min(Pe,ne.count)):se!=null&&(ve=Math.max(ve,0),Pe=Math.min(Pe,se.count));const Fe=Pe-ve;if(Fe<0||Fe===1/0)return;X.setup(tt,ct,ee,dt,ne);let Ne,ke=Yt;if(ne!==null&&(Ne=q.get(ne),ke=Vt,ke.setIndex(Ne)),tt.isMesh)ct.wireframe===!0?(zt.setLineWidth(ct.wireframeLinewidth*_t()),ke.setMode(O.LINES)):ke.setMode(O.TRIANGLES);else if(tt.isLine){let ce=ct.linewidth;ce===void 0&&(ce=1),zt.setLineWidth(ce*_t()),tt.isLineSegments?ke.setMode(O.LINES):tt.isLineLoop?ke.setMode(O.LINE_LOOP):ke.setMode(O.LINE_STRIP)}else tt.isPoints?ke.setMode(O.POINTS):tt.isSprite&&ke.setMode(O.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)xl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ke.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))ke.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const ce=tt._multiDrawStarts,tn=tt._multiDrawCounts,Oe=tt._multiDrawCount,Dn=ne?q.get(ne).bytesPerElement:1,Pa=Zt.get(ct).currentProgram.getUniforms();for(let nn=0;nn<Oe;nn++)Pa.setValue(O,"_gl_DrawID",nn),ke.render(ce[nn]/Dn,tn[nn])}else if(tt.isInstancedMesh)ke.renderInstances(ve,Fe,tt.count);else if(dt.isInstancedBufferGeometry){const ce=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,tn=Math.min(dt.instanceCount,ce);ke.renderInstances(ve,Fe,tn)}else ke.render(ve,Fe)};function Tn(w,Q,dt){w.transparent===!0&&w.side===Aa&&w.forceSinglePass===!1?(w.side=si,w.needsUpdate=!0,pn(w,Q,dt),w.side=mr,w.needsUpdate=!0,pn(w,Q,dt),w.side=Aa):pn(w,Q,dt)}this.compile=function(w,Q,dt=null){dt===null&&(dt=w),L=Wt.get(dt),L.init(Q),k.push(L),dt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(L.pushLight(tt),tt.castShadow&&L.pushShadow(tt))}),w!==dt&&w.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Q.layers)&&(L.pushLight(tt),tt.castShadow&&L.pushShadow(tt))}),L.setupLights();const ct=new Set;return w.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Ht=tt.material;if(Ht)if(Array.isArray(Ht))for(let jt=0;jt<Ht.length;jt++){const ee=Ht[jt];Tn(ee,dt,tt),ct.add(ee)}else Tn(Ht,dt,tt),ct.add(Ht)}),L=k.pop(),ct},this.compileAsync=function(w,Q,dt=null){const ct=this.compile(w,Q,dt);return new Promise(tt=>{function Ht(){if(ct.forEach(function(jt){Zt.get(jt).currentProgram.isReady()&&ct.delete(jt)}),ct.size===0){tt(w);return}setTimeout(Ht,10)}Et.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let te=null;function be(w){te&&te(w)}function Qe(){le.stop()}function un(){le.start()}const le=new Q_;le.setAnimationLoop(be),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(w){te=w,Bt.setAnimationLoop(w),w===null?le.stop():le.start()},Bt.addEventListener("sessionstart",Qe),Bt.addEventListener("sessionend",un),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){dn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(Q),Q=Bt.getCamera()),w.isScene===!0&&w.onBeforeRender(z,w,Q,C),L=Wt.get(w,k.length),L.init(Q),k.push(L),$.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),N.setFromProjectionMatrix($,Qi,Q.reversedDepth),Y=this.localClippingEnabled,U=Gt.init(this.clippingPlanes,Y),P=Nt.get(w,H.length),P.init(),H.push(P),Bt.enabled===!0&&Bt.isPresenting===!0){const Ht=z.xr.getDepthSensingMesh();Ht!==null&&Te(Ht,Q,-1/0,z.sortObjects)}Te(w,Q,0,z.sortObjects),P.finish(),z.sortObjects===!0&&P.sort(B,rt),bt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,bt&&Dt.addToRenderList(P,w),this.info.render.frame++,U===!0&&Gt.beginShadows();const dt=L.state.shadowsArray;Mt.render(dt,w,Q),U===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=P.opaque,tt=P.transmissive;if(L.setupLights(),Q.isArrayCamera){const Ht=Q.cameras;if(tt.length>0)for(let jt=0,ee=Ht.length;jt<ee;jt++){const ne=Ht[jt];fn(ct,tt,w,ne)}bt&&Dt.render(w);for(let jt=0,ee=Ht.length;jt<ee;jt++){const ne=Ht[jt];Je(P,w,ne,ne.viewport)}}else tt.length>0&&fn(ct,tt,w,Q),bt&&Dt.render(w),Je(P,w,Q);C!==null&&D===0&&(kt.updateMultisampleRenderTarget(C),kt.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(z,w,Q),X.resetDefaultState(),G=-1,et=null,k.pop(),k.length>0?(L=k[k.length-1],U===!0&&Gt.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,H.pop(),H.length>0?P=H[H.length-1]:P=null};function Te(w,Q,dt,ct){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)dt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||N.intersectsSprite(w)){ct&&ut.setFromMatrixPosition(w.matrixWorld).applyMatrix4($);const jt=pt.update(w),ee=w.material;ee.visible&&P.push(w,jt,ee,dt,ut.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||N.intersectsObject(w))){const jt=pt.update(w),ee=w.material;if(ct&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ut.copy(w.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),ut.copy(jt.boundingSphere.center)),ut.applyMatrix4(w.matrixWorld).applyMatrix4($)),Array.isArray(ee)){const ne=jt.groups;for(let fe=0,de=ne.length;fe<de;fe++){const se=ne[fe],ve=ee[se.materialIndex];ve&&ve.visible&&P.push(w,jt,ve,dt,ut.z,se)}}else ee.visible&&P.push(w,jt,ee,dt,ut.z,null)}}const Ht=w.children;for(let jt=0,ee=Ht.length;jt<ee;jt++)Te(Ht[jt],Q,dt,ct)}function Je(w,Q,dt,ct){const{opaque:tt,transmissive:Ht,transparent:jt}=w;L.setupLightsView(dt),U===!0&&Gt.setGlobalState(z.clippingPlanes,dt),ct&&zt.viewport(ht.copy(ct)),tt.length>0&&rn(tt,Q,dt),Ht.length>0&&rn(Ht,Q,dt),jt.length>0&&rn(jt,Q,dt),zt.buffers.depth.setTest(!0),zt.buffers.depth.setMask(!0),zt.buffers.color.setMask(!0),zt.setPolygonOffset(!1)}function fn(w,Q,dt,ct){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[ct.id]===void 0&&(L.state.transmissionRenderTarget[ct.id]=new qr(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?eo:Ji,minFilter:Ra,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const Ht=L.state.transmissionRenderTarget[ct.id],jt=ct.viewport||ht;Ht.setSize(jt.z*z.transmissionResolutionScale,jt.w*z.transmissionResolutionScale);const ee=z.getRenderTarget(),ne=z.getActiveCubeFace(),fe=z.getActiveMipmapLevel();z.setRenderTarget(Ht),z.getClearColor(F),Z=z.getClearAlpha(),Z<1&&z.setClearColor(16777215,.5),z.clear(),bt&&Dt.render(dt);const de=z.toneMapping;z.toneMapping=Da;const se=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),L.setupLightsView(ct),U===!0&&Gt.setGlobalState(z.clippingPlanes,ct),rn(w,dt,ct),kt.updateMultisampleRenderTarget(Ht),kt.updateRenderTargetMipmap(Ht),Et.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Pe=0,Fe=Q.length;Pe<Fe;Pe++){const Ne=Q[Pe],{object:ke,geometry:ce,material:tn,group:Oe}=Ne;if(tn.side===Aa&&ke.layers.test(ct.layers)){const Dn=tn.side;tn.side=si,tn.needsUpdate=!0,$e(ke,dt,ct,ce,tn,Oe),tn.side=Dn,tn.needsUpdate=!0,ve=!0}}ve===!0&&(kt.updateMultisampleRenderTarget(Ht),kt.updateRenderTargetMipmap(Ht))}z.setRenderTarget(ee,ne,fe),z.setClearColor(F,Z),se!==void 0&&(ct.viewport=se),z.toneMapping=de}function rn(w,Q,dt){const ct=Q.isScene===!0?Q.overrideMaterial:null;for(let tt=0,Ht=w.length;tt<Ht;tt++){const jt=w[tt],{object:ee,geometry:ne,group:fe}=jt;let de=jt.material;de.allowOverride===!0&&ct!==null&&(de=ct),ee.layers.test(dt.layers)&&$e(ee,Q,dt,ne,de,fe)}}function $e(w,Q,dt,ct,tt,Ht){w.onBeforeRender(z,Q,dt,ct,tt,Ht),w.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),tt.onBeforeRender(z,Q,dt,ct,w,Ht),tt.transparent===!0&&tt.side===Aa&&tt.forceSinglePass===!1?(tt.side=si,tt.needsUpdate=!0,z.renderBufferDirect(dt,Q,ct,tt,w,Ht),tt.side=mr,tt.needsUpdate=!0,z.renderBufferDirect(dt,Q,ct,tt,w,Ht),tt.side=Aa):z.renderBufferDirect(dt,Q,ct,tt,w,Ht),w.onAfterRender(z,Q,dt,ct,tt,Ht)}function pn(w,Q,dt){Q.isScene!==!0&&(Q=Rt);const ct=Zt.get(w),tt=L.state.lights,Ht=L.state.shadowsArray,jt=tt.state.version,ee=at.getParameters(w,tt.state,Ht,Q,dt),ne=at.getProgramCacheKey(ee);let fe=ct.programs;ct.environment=w.isMeshStandardMaterial?Q.environment:null,ct.fog=Q.fog,ct.envMap=(w.isMeshStandardMaterial?M:R).get(w.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,fe===void 0&&(w.addEventListener("dispose",pe),fe=new Map,ct.programs=fe);let de=fe.get(ne);if(de!==void 0){if(ct.currentProgram===de&&ct.lightsStateVersion===jt)return Oa(w,ee),de}else ee.uniforms=at.getUniforms(w),w.onBeforeCompile(ee,z),de=at.acquireProgram(ee,ne),fe.set(ne,de),ct.uniforms=ee.uniforms;const se=ct.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(se.clippingPlanes=Gt.uniform),Oa(w,ee),ct.needsLights=gr(w),ct.lightsStateVersion=jt,ct.needsLights&&(se.ambientLightColor.value=tt.state.ambient,se.lightProbe.value=tt.state.probe,se.directionalLights.value=tt.state.directional,se.directionalLightShadows.value=tt.state.directionalShadow,se.spotLights.value=tt.state.spot,se.spotLightShadows.value=tt.state.spotShadow,se.rectAreaLights.value=tt.state.rectArea,se.ltc_1.value=tt.state.rectAreaLTC1,se.ltc_2.value=tt.state.rectAreaLTC2,se.pointLights.value=tt.state.point,se.pointLightShadows.value=tt.state.pointShadow,se.hemisphereLights.value=tt.state.hemi,se.directionalShadowMap.value=tt.state.directionalShadowMap,se.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,se.spotShadowMap.value=tt.state.spotShadowMap,se.spotLightMatrix.value=tt.state.spotLightMatrix,se.spotLightMap.value=tt.state.spotLightMap,se.pointShadowMap.value=tt.state.pointShadowMap,se.pointShadowMatrix.value=tt.state.pointShadowMatrix),ct.currentProgram=de,ct.uniformsList=null,de}function vi(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=fu.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Oa(w,Q){const dt=Zt.get(w);dt.outputColorSpace=Q.outputColorSpace,dt.batching=Q.batching,dt.batchingColor=Q.batchingColor,dt.instancing=Q.instancing,dt.instancingColor=Q.instancingColor,dt.instancingMorph=Q.instancingMorph,dt.skinning=Q.skinning,dt.morphTargets=Q.morphTargets,dt.morphNormals=Q.morphNormals,dt.morphColors=Q.morphColors,dt.morphTargetsCount=Q.morphTargetsCount,dt.numClippingPlanes=Q.numClippingPlanes,dt.numIntersection=Q.numClipIntersection,dt.vertexAlphas=Q.vertexAlphas,dt.vertexTangents=Q.vertexTangents,dt.toneMapping=Q.toneMapping}function Zr(w,Q,dt,ct,tt){Q.isScene!==!0&&(Q=Rt),kt.resetTextureUnits();const Ht=Q.fog,jt=ct.isMeshStandardMaterial?Q.environment:null,ee=C===null?z.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$s,ne=(ct.isMeshStandardMaterial?M:R).get(ct.envMap||jt),fe=ct.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,de=!!dt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),se=!!dt.morphAttributes.position,ve=!!dt.morphAttributes.normal,Pe=!!dt.morphAttributes.color;let Fe=Da;ct.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Fe=z.toneMapping);const Ne=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,ke=Ne!==void 0?Ne.length:0,ce=Zt.get(ct),tn=L.state.lights;if(U===!0&&(Y===!0||w!==et)){const Ln=w===et&&ct.id===G;Gt.setState(ct,w,Ln)}let Oe=!1;ct.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==tn.state.version||ce.outputColorSpace!==ee||tt.isBatchedMesh&&ce.batching===!1||!tt.isBatchedMesh&&ce.batching===!0||tt.isBatchedMesh&&ce.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&ce.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&ce.instancing===!1||!tt.isInstancedMesh&&ce.instancing===!0||tt.isSkinnedMesh&&ce.skinning===!1||!tt.isSkinnedMesh&&ce.skinning===!0||tt.isInstancedMesh&&ce.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ce.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&ce.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&ce.instancingMorph===!1&&tt.morphTexture!==null||ce.envMap!==ne||ct.fog===!0&&ce.fog!==Ht||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Gt.numPlanes||ce.numIntersection!==Gt.numIntersection)||ce.vertexAlphas!==fe||ce.vertexTangents!==de||ce.morphTargets!==se||ce.morphNormals!==ve||ce.morphColors!==Pe||ce.toneMapping!==Fe||ce.morphTargetsCount!==ke)&&(Oe=!0):(Oe=!0,ce.__version=ct.version);let Dn=ce.currentProgram;Oe===!0&&(Dn=pn(ct,Q,tt));let Pa=!1,nn=!1,$i=!1;const an=Dn.getUniforms(),Un=ce.uniforms;if(zt.useProgram(Dn.program)&&(Pa=!0,nn=!0,$i=!0),ct.id!==G&&(G=ct.id,nn=!0),Pa||et!==w){zt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),an.setValue(O,"projectionMatrix",w.projectionMatrix),an.setValue(O,"viewMatrix",w.matrixWorldInverse);const Fn=an.map.cameraPosition;Fn!==void 0&&Fn.setValue(O,nt.setFromMatrixPosition(w.matrixWorld)),me.logarithmicDepthBuffer&&an.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&an.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),et!==w&&(et=w,nn=!0,$i=!0)}if(tt.isSkinnedMesh){an.setOptional(O,tt,"bindMatrix"),an.setOptional(O,tt,"bindMatrixInverse");const Ln=tt.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),an.setValue(O,"boneTexture",Ln.boneTexture,kt))}tt.isBatchedMesh&&(an.setOptional(O,tt,"batchingTexture"),an.setValue(O,"batchingTexture",tt._matricesTexture,kt),an.setOptional(O,tt,"batchingIdTexture"),an.setValue(O,"batchingIdTexture",tt._indirectTexture,kt),an.setOptional(O,tt,"batchingColorTexture"),tt._colorsTexture!==null&&an.setValue(O,"batchingColorTexture",tt._colorsTexture,kt));const An=dt.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&qt.update(tt,dt,Dn),(nn||ce.receiveShadow!==tt.receiveShadow)&&(ce.receiveShadow=tt.receiveShadow,an.setValue(O,"receiveShadow",tt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Un.envMap.value=ne,Un.flipEnvMap.value=ne.isCubeTexture&&ne.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&Q.environment!==null&&(Un.envMapIntensity.value=Q.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=f2()),nn&&(an.setValue(O,"toneMappingExposure",z.toneMappingExposure),ce.needsLights&&ao(Un,$i),Ht&&ct.fog===!0&&Pt.refreshFogUniforms(Un,Ht),Pt.refreshMaterialUniforms(Un,ct,St,yt,L.state.transmissionRenderTarget[w.id]),fu.upload(O,vi(ce),Un,kt)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(fu.upload(O,vi(ce),Un,kt),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&an.setValue(O,"center",tt.center),an.setValue(O,"modelViewMatrix",tt.modelViewMatrix),an.setValue(O,"normalMatrix",tt.normalMatrix),an.setValue(O,"modelMatrix",tt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Ln=ct.uniformsGroups;for(let Fn=0,Xi=Ln.length;Fn<Xi;Fn++){const ta=Ln[Fn];It.update(ta,Dn),It.bind(ta,Dn)}}return Dn}function ao(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function gr(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,Q,dt){const ct=Zt.get(w);ct.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),Zt.get(w.texture).__webglTexture=Q,Zt.get(w.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:dt,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const dt=Zt.get(w);dt.__webglFramebuffer=Q,dt.__useDefaultFramebuffer=Q===void 0};const ki=O.createFramebuffer();this.setRenderTarget=function(w,Q=0,dt=0){C=w,K=Q,D=dt;let ct=!0,tt=null,Ht=!1,jt=!1;if(w){const ne=Zt.get(w);if(ne.__useDefaultFramebuffer!==void 0)zt.bindFramebuffer(O.FRAMEBUFFER,null),ct=!1;else if(ne.__webglFramebuffer===void 0)kt.setupRenderTarget(w);else if(ne.__hasExternalTextures)kt.rebindTextures(w,Zt.get(w.texture).__webglTexture,Zt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const se=w.depthTexture;if(ne.__boundDepthTexture!==se){if(se!==null&&Zt.has(se)&&(w.width!==se.image.width||w.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");kt.setupDepthRenderbuffer(w)}}const fe=w.texture;(fe.isData3DTexture||fe.isDataArrayTexture||fe.isCompressedArrayTexture)&&(jt=!0);const de=Zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(de[Q])?tt=de[Q][dt]:tt=de[Q],Ht=!0):w.samples>0&&kt.useMultisampledRTT(w)===!1?tt=Zt.get(w).__webglMultisampledFramebuffer:Array.isArray(de)?tt=de[dt]:tt=de,ht.copy(w.viewport),gt.copy(w.scissor),xt=w.scissorTest}else ht.copy(Ct).multiplyScalar(St).floor(),gt.copy(Lt).multiplyScalar(St).floor(),xt=Xt;if(dt!==0&&(tt=ki),zt.bindFramebuffer(O.FRAMEBUFFER,tt)&&ct&&zt.drawBuffers(w,tt),zt.viewport(ht),zt.scissor(gt),zt.setScissorTest(xt),Ht){const ne=Zt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ne.__webglTexture,dt)}else if(jt){const ne=Q;for(let fe=0;fe<w.textures.length;fe++){const de=Zt.get(w.textures[fe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+fe,de.__webglTexture,dt,ne)}}else if(w!==null&&dt!==0){const ne=Zt.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ne.__webglTexture,dt)}G=-1},this.readRenderTargetPixels=function(w,Q,dt,ct,tt,Ht,jt,ee=0){if(!(w&&w.isWebGLRenderTarget)){dn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ne=Zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(ne=ne[jt]),ne){zt.bindFramebuffer(O.FRAMEBUFFER,ne);try{const fe=w.textures[ee],de=fe.format,se=fe.type;if(!me.textureFormatReadable(de)){dn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(se)){dn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-ct&&dt>=0&&dt<=w.height-tt&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ee),O.readPixels(Q,dt,ct,tt,re.convert(de),re.convert(se),Ht))}finally{const fe=C!==null?Zt.get(C).__webglFramebuffer:null;zt.bindFramebuffer(O.FRAMEBUFFER,fe)}}},this.readRenderTargetPixelsAsync=async function(w,Q,dt,ct,tt,Ht,jt,ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ne=Zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(ne=ne[jt]),ne)if(Q>=0&&Q<=w.width-ct&&dt>=0&&dt<=w.height-tt){zt.bindFramebuffer(O.FRAMEBUFFER,ne);const fe=w.textures[ee],de=fe.format,se=fe.type;if(!me.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ve),O.bufferData(O.PIXEL_PACK_BUFFER,Ht.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ee),O.readPixels(Q,dt,ct,tt,re.convert(de),re.convert(se),0);const Pe=C!==null?Zt.get(C).__webglFramebuffer:null;zt.bindFramebuffer(O.FRAMEBUFFER,Pe);const Fe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mb(O,Fe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ve),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ht),O.deleteBuffer(ve),O.deleteSync(Fe),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,dt=0){const ct=Math.pow(2,-dt),tt=Math.floor(w.image.width*ct),Ht=Math.floor(w.image.height*ct),jt=Q!==null?Q.x:0,ee=Q!==null?Q.y:0;kt.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,dt,0,0,jt,ee,tt,Ht),zt.unbindTexture()};const ro=O.createFramebuffer(),za=O.createFramebuffer();this.copyTextureToTexture=function(w,Q,dt=null,ct=null,tt=0,Ht=null){Ht===null&&(tt!==0?(xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ht=tt,tt=0):Ht=0);let jt,ee,ne,fe,de,se,ve,Pe,Fe;const Ne=w.isCompressedTexture?w.mipmaps[Ht]:w.image;if(dt!==null)jt=dt.max.x-dt.min.x,ee=dt.max.y-dt.min.y,ne=dt.isBox3?dt.max.z-dt.min.z:1,fe=dt.min.x,de=dt.min.y,se=dt.isBox3?dt.min.z:0;else{const An=Math.pow(2,-tt);jt=Math.floor(Ne.width*An),ee=Math.floor(Ne.height*An),w.isDataArrayTexture?ne=Ne.depth:w.isData3DTexture?ne=Math.floor(Ne.depth*An):ne=1,fe=0,de=0,se=0}ct!==null?(ve=ct.x,Pe=ct.y,Fe=ct.z):(ve=0,Pe=0,Fe=0);const ke=re.convert(Q.format),ce=re.convert(Q.type);let tn;Q.isData3DTexture?(kt.setTexture3D(Q,0),tn=O.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(kt.setTexture2DArray(Q,0),tn=O.TEXTURE_2D_ARRAY):(kt.setTexture2D(Q,0),tn=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Q.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Q.unpackAlignment);const Oe=O.getParameter(O.UNPACK_ROW_LENGTH),Dn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Pa=O.getParameter(O.UNPACK_SKIP_PIXELS),nn=O.getParameter(O.UNPACK_SKIP_ROWS),$i=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ne.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ne.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,fe),O.pixelStorei(O.UNPACK_SKIP_ROWS,de),O.pixelStorei(O.UNPACK_SKIP_IMAGES,se);const an=w.isDataArrayTexture||w.isData3DTexture,Un=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const An=Zt.get(w),Ln=Zt.get(Q),Fn=Zt.get(An.__renderTarget),Xi=Zt.get(Ln.__renderTarget);zt.bindFramebuffer(O.READ_FRAMEBUFFER,Fn.__webglFramebuffer),zt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xi.__webglFramebuffer);for(let ta=0;ta<ne;ta++)an&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.get(w).__webglTexture,tt,se+ta),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Zt.get(Q).__webglTexture,Ht,Fe+ta)),O.blitFramebuffer(fe,de,jt,ee,ve,Pe,jt,ee,O.DEPTH_BUFFER_BIT,O.NEAREST);zt.bindFramebuffer(O.READ_FRAMEBUFFER,null),zt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(tt!==0||w.isRenderTargetTexture||Zt.has(w)){const An=Zt.get(w),Ln=Zt.get(Q);zt.bindFramebuffer(O.READ_FRAMEBUFFER,ro),zt.bindFramebuffer(O.DRAW_FRAMEBUFFER,za);for(let Fn=0;Fn<ne;Fn++)an?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,An.__webglTexture,tt,se+Fn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,An.__webglTexture,tt),Un?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ln.__webglTexture,Ht,Fe+Fn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ln.__webglTexture,Ht),tt!==0?O.blitFramebuffer(fe,de,jt,ee,ve,Pe,jt,ee,O.COLOR_BUFFER_BIT,O.NEAREST):Un?O.copyTexSubImage3D(tn,Ht,ve,Pe,Fe+Fn,fe,de,jt,ee):O.copyTexSubImage2D(tn,Ht,ve,Pe,fe,de,jt,ee);zt.bindFramebuffer(O.READ_FRAMEBUFFER,null),zt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Un?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(tn,Ht,ve,Pe,Fe,jt,ee,ne,ke,ce,Ne.data):Q.isCompressedArrayTexture?O.compressedTexSubImage3D(tn,Ht,ve,Pe,Fe,jt,ee,ne,ke,Ne.data):O.texSubImage3D(tn,Ht,ve,Pe,Fe,jt,ee,ne,ke,ce,Ne):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ht,ve,Pe,jt,ee,ke,ce,Ne.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ht,ve,Pe,Ne.width,Ne.height,ke,Ne.data):O.texSubImage2D(O.TEXTURE_2D,Ht,ve,Pe,jt,ee,ke,ce,Ne);O.pixelStorei(O.UNPACK_ROW_LENGTH,Oe),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pa),O.pixelStorei(O.UNPACK_SKIP_ROWS,nn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$i),Ht===0&&Q.generateMipmaps&&O.generateMipmap(tn),zt.unbindTexture()},this.initRenderTarget=function(w){Zt.get(w).__webglFramebuffer===void 0&&kt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?kt.setTextureCube(w,0):w.isData3DTexture?kt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?kt.setTexture2DArray(w,0):kt.setTexture2D(w,0),zt.unbindTexture()},this.resetState=function(){K=0,D=0,C=null,zt.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=He._getDrawingBufferColorSpace(t),i.unpackColorSpace=He._getUnpackColorSpace()}}class d2 extends Yr{constructor(t){super(t)}load(t,i,r,l){const c=this,h=new j_(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(p){const g=new DataView(p),x=32/8*3+32/8*3*3+16/8,_=g.getUint32(80,!0);if(80+32/8+_*x===g.byteLength)return!0;const E=[115,111,108,105,100];for(let T=0;T<5;T++)if(r(E,g,T))return!1;return!0}function r(p,g,x){for(let _=0,S=p.length;_<S;_++)if(p[_]!==g.getUint8(x+_))return!1;return!0}function l(p){const g=new DataView(p),x=g.getUint32(80,!0);let _,S,E,T=!1,b,v,P,L,H;for(let G=0;G<70;G++)g.getUint32(G,!1)==1129270351&&g.getUint8(G+4)==82&&g.getUint8(G+5)==61&&(T=!0,b=new Float32Array(x*3*3),v=g.getUint8(G+6)/255,P=g.getUint8(G+7)/255,L=g.getUint8(G+8)/255,H=g.getUint8(G+9)/255);const k=84,z=50,I=new zn,K=new Float32Array(x*3*3),D=new Float32Array(x*3*3),C=new Ae;for(let G=0;G<x;G++){const et=k+G*z,ht=g.getFloat32(et,!0),gt=g.getFloat32(et+4,!0),xt=g.getFloat32(et+8,!0);if(T){const F=g.getUint16(et+48,!0);(F&32768)===0?(_=(F&31)/31,S=(F>>5&31)/31,E=(F>>10&31)/31):(_=v,S=P,E=L)}for(let F=1;F<=3;F++){const Z=et+F*12,j=G*3*3+(F-1)*3;K[j]=g.getFloat32(Z,!0),K[j+1]=g.getFloat32(Z+4,!0),K[j+2]=g.getFloat32(Z+8,!0),D[j]=ht,D[j+1]=gt,D[j+2]=xt,T&&(C.setRGB(_,S,E,Jn),b[j]=C.r,b[j+1]=C.g,b[j+2]=C.b)}}return I.setAttribute("position",new Xn(K,3)),I.setAttribute("normal",new Xn(D,3)),T&&(I.setAttribute("color",new Xn(b,3)),I.hasColors=!0,I.alpha=H),I}function c(p){const g=new zn,x=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,S=/solid\s(.+)/;let E=0;const T=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,b=new RegExp("vertex"+T+T+T,"g"),v=new RegExp("normal"+T+T+T,"g"),P=[],L=[],H=[],k=new lt;let z,I=0,K=0,D=0;for(;(z=x.exec(p))!==null;){K=D;const C=z[0],G=(z=S.exec(C))!==null?z[1]:"";for(H.push(G);(z=_.exec(C))!==null;){let gt=0,xt=0;const F=z[0];for(;(z=v.exec(F))!==null;)k.x=parseFloat(z[1]),k.y=parseFloat(z[2]),k.z=parseFloat(z[3]),xt++;for(;(z=b.exec(F))!==null;)P.push(parseFloat(z[1]),parseFloat(z[2]),parseFloat(z[3])),L.push(k.x,k.y,k.z),gt++,D++;xt!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),gt!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const et=K,ht=D-K;g.userData.groupNames=H,g.addGroup(et,ht,I),I++}return g.setAttribute("position",new Vn(P,3)),g.setAttribute("normal",new Vn(L,3)),g}function h(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const g=new Uint8Array(p.length);for(let x=0;x<p.length;x++)g[x]=p.charCodeAt(x)&255;return g.buffer||g}else return p}const m=d(t);return i(m)?l(m):c(h(t))}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var gi=Uint8Array,qs=Uint16Array,p2=Int32Array,nv=new gi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),iv=new gi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),m2=new gi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),av=function(s,t){for(var i=new qs(31),r=0;r<31;++r)i[r]=t+=1<<s[r-1];for(var l=new p2(i[30]),r=1;r<30;++r)for(var c=i[r];c<i[r+1];++c)l[c]=c-i[r]<<5|r;return{b:i,r:l}},rv=av(nv,2),sv=rv.b,x2=rv.r;sv[28]=258,x2[258]=28;var g2=av(iv,0),_2=g2.b,rp=new qs(32768);for(var ln=0;ln<32768;++ln){var hr=(ln&43690)>>1|(ln&21845)<<1;hr=(hr&52428)>>2|(hr&13107)<<2,hr=(hr&61680)>>4|(hr&3855)<<4,rp[ln]=((hr&65280)>>8|(hr&255)<<8)>>1}var cl=(function(s,t,i){for(var r=s.length,l=0,c=new qs(t);l<r;++l)s[l]&&++c[s[l]-1];var h=new qs(t);for(l=1;l<t;++l)h[l]=h[l-1]+c[l-1]<<1;var d;if(i){d=new qs(1<<t);var m=15-t;for(l=0;l<r;++l)if(s[l])for(var p=l<<4|s[l],g=t-s[l],x=h[s[l]-1]++<<g,_=x|(1<<g)-1;x<=_;++x)d[rp[x]>>m]=p}else for(d=new qs(r),l=0;l<r;++l)s[l]&&(d[l]=rp[h[s[l]-1]++]>>15-s[l]);return d}),bl=new gi(288);for(var ln=0;ln<144;++ln)bl[ln]=8;for(var ln=144;ln<256;++ln)bl[ln]=9;for(var ln=256;ln<280;++ln)bl[ln]=7;for(var ln=280;ln<288;++ln)bl[ln]=8;var ov=new gi(32);for(var ln=0;ln<32;++ln)ov[ln]=5;var v2=cl(bl,9,1),y2=cl(ov,5,1),fd=function(s){for(var t=s[0],i=1;i<s.length;++i)s[i]>t&&(t=s[i]);return t},Fi=function(s,t,i){var r=t/8|0;return(s[r]|s[r+1]<<8)>>(t&7)&i},hd=function(s,t){var i=t/8|0;return(s[i]|s[i+1]<<8|s[i+2]<<16)>>(t&7)},S2=function(s){return(s+7)/8|0},Ep=function(s,t,i){return(t==null||t<0)&&(t=0),(i==null||i>s.length)&&(i=s.length),new gi(s.subarray(t,i))},b2=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ci=function(s,t,i){var r=new Error(t||b2[s]);if(r.code=s,Error.captureStackTrace&&Error.captureStackTrace(r,Ci),!i)throw r;return r},M2=function(s,t,i,r){var l=s.length,c=r?r.length:0;if(!l||t.f&&!t.l)return i||new gi(0);var h=!i,d=h||t.i!=2,m=t.i;h&&(i=new gi(l*3));var p=function(ut){var Rt=i.length;if(ut>Rt){var bt=new gi(Math.max(Rt*2,ut));bt.set(i),i=bt}},g=t.f||0,x=t.p||0,_=t.b||0,S=t.l,E=t.d,T=t.m,b=t.n,v=l*8;do{if(!S){g=Fi(s,x,1);var P=Fi(s,x+1,3);if(x+=3,P)if(P==1)S=v2,E=y2,T=9,b=5;else if(P==2){var z=Fi(s,x,31)+257,I=Fi(s,x+10,15)+4,K=z+Fi(s,x+5,31)+1;x+=14;for(var D=new gi(K),C=new gi(19),G=0;G<I;++G)C[m2[G]]=Fi(s,x+G*3,7);x+=I*3;for(var et=fd(C),ht=(1<<et)-1,gt=cl(C,et,1),G=0;G<K;){var xt=gt[Fi(s,x,ht)];x+=xt&15;var L=xt>>4;if(L<16)D[G++]=L;else{var F=0,Z=0;for(L==16?(Z=3+Fi(s,x,3),x+=2,F=D[G-1]):L==17?(Z=3+Fi(s,x,7),x+=3):L==18&&(Z=11+Fi(s,x,127),x+=7);Z--;)D[G++]=F}}var j=D.subarray(0,z),yt=D.subarray(z);T=fd(j),b=fd(yt),S=cl(j,T,1),E=cl(yt,b,1)}else Ci(1);else{var L=S2(x)+4,H=s[L-4]|s[L-3]<<8,k=L+H;if(k>l){m&&Ci(0);break}d&&p(_+H),i.set(s.subarray(L,k),_),t.b=_+=H,t.p=x=k*8,t.f=g;continue}if(x>v){m&&Ci(0);break}}d&&p(_+131072);for(var St=(1<<T)-1,B=(1<<b)-1,rt=x;;rt=x){var F=S[hd(s,x)&St],Ct=F>>4;if(x+=F&15,x>v){m&&Ci(0);break}if(F||Ci(2),Ct<256)i[_++]=Ct;else if(Ct==256){rt=x,S=null;break}else{var Lt=Ct-254;if(Ct>264){var G=Ct-257,Xt=nv[G];Lt=Fi(s,x,(1<<Xt)-1)+sv[G],x+=Xt}var N=E[hd(s,x)&B],U=N>>4;N||Ci(3),x+=N&15;var yt=_2[U];if(U>3){var Xt=iv[U];yt+=hd(s,x)&(1<<Xt)-1,x+=Xt}if(x>v){m&&Ci(0);break}d&&p(_+131072);var Y=_+Lt;if(_<yt){var $=c-yt,nt=Math.min(yt,Y);for($+_<0&&Ci(3);_<nt;++_)i[_]=r[$+_]}for(;_<Y;++_)i[_]=i[_-yt]}}t.l=S,t.p=rt,t.b=_,t.f=g,S&&(g=1,t.m=T,t.d=E,t.n=b)}while(!g);return _!=i.length&&h?Ep(i,0,_):i.subarray(0,_)},E2=new gi(0),Ki=function(s,t){return s[t]|s[t+1]<<8},Bi=function(s,t){return(s[t]|s[t+1]<<8|s[t+2]<<16|s[t+3]<<24)>>>0},dd=function(s,t){return Bi(s,t)+Bi(s,t+4)*4294967296};function T2(s,t){return M2(s,{i:2},t&&t.out,t&&t.dictionary)}var sp=typeof TextDecoder<"u"&&new TextDecoder,A2=0;try{sp.decode(E2,{stream:!0}),A2=1}catch{}var R2=function(s){for(var t="",i=0;;){var r=s[i++],l=(r>127)+(r>223)+(r>239);if(i+l>s.length)return{s:t,r:Ep(s,i-1)};l?l==3?(r=((r&15)<<18|(s[i++]&63)<<12|(s[i++]&63)<<6|s[i++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):l&1?t+=String.fromCharCode((r&31)<<6|s[i++]&63):t+=String.fromCharCode((r&15)<<12|(s[i++]&63)<<6|s[i++]&63):t+=String.fromCharCode(r)}};function w2(s,t){if(t){for(var i="",r=0;r<s.length;r+=16384)i+=String.fromCharCode.apply(null,s.subarray(r,r+16384));return i}else{if(sp)return sp.decode(s);var l=R2(s),c=l.s,i=l.r;return i.length&&Ci(8),c}}var C2=function(s,t){return t+30+Ki(s,t+26)+Ki(s,t+28)},D2=function(s,t,i){var r=Ki(s,t+28),l=w2(s.subarray(t+46,t+46+r),!(Ki(s,t+8)&2048)),c=t+46+r,h=Bi(s,t+20),d=i&&h==4294967295?U2(s,c):[h,Bi(s,t+24),Bi(s,t+42)],m=d[0],p=d[1],g=d[2];return[Ki(s,t+10),m,p,l,c+Ki(s,t+30)+Ki(s,t+32),g]},U2=function(s,t){for(;Ki(s,t)!=1;t+=4+Ki(s,t+2));return[dd(s,t+12),dd(s,t+4),dd(s,t+20)]};function L2(s,t){for(var i={},r=s.length-22;Bi(s,r)!=101010256;--r)(!r||s.length-r>65558)&&Ci(13);var l=Ki(s,r+8);if(!l)return{};var c=Bi(s,r+16),h=c==4294967295||l==65535;if(h){var d=Bi(s,r-12);h=Bi(s,d)==101075792,h&&(l=Bi(s,d+32),c=Bi(s,d+48))}for(var m=0;m<l;++m){var p=D2(s,c,h),g=p[0],x=p[1],_=p[2],S=p[3],E=p[4],T=p[5],b=C2(s,T);c=E,g?g==8?i[S]=T2(s.subarray(b,b+x),{out:new gi(_)}):Ci(14,"unknown compression type "+g):i[S]=Ep(s,b,b+x)}return i}const pd=Jn;class N2 extends Yr{constructor(t){super(t),this.availableExtensions=[]}load(t,i,r,l){const c=this,h=new j_(c.manager);h.setPath(c.path),h.setResponseType("arraybuffer"),h.setRequestHeader(c.requestHeader),h.setWithCredentials(c.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){const i=this,r=new vM(this.manager);function l(N){let U=null,Y=null,$,nt;const ut=[],Rt=[];let bt;const _t={},O={},Ot={},Et=new TextDecoder;try{U=L2(new Uint8Array(N))}catch(kt){if(kt instanceof ReferenceError)return console.error("THREE.3MFLoader: fflate missing and file is compressed."),null}let me=null;for(Y in U)Y.match(/\_rels\/.rels$/)?$=Y:Y.match(/3D\/_rels\/.*\.model\.rels$/)?nt=Y:Y.match(/^3D\/[^\/]*\.model$/)?me=Y:Y.match(/^3D\/.*\/.*\.model$/)?ut.push(Y):Y.match(/^3D\/Textures?\/.*/)&&Rt.push(Y);if(ut.push(me),$===void 0)throw new Error("THREE.ThreeMFLoader: Cannot find relationship file `rels` in 3MF archive.");const zt=U[$],ue=Et.decode(zt),Zt=c(ue);if(nt){const kt=U[nt],R=Et.decode(kt);bt=c(R)}for(let kt=0;kt<ut.length;kt++){const R=ut[kt],M=U[R],q=Et.decode(M),it=new DOMParser().parseFromString(q,"application/xml");it.documentElement.nodeName.toLowerCase()!=="model"&&console.error("THREE.3MFLoader: Error loading 3MF - no 3MF document found: ",R);const pt=it.querySelector("model"),at={};for(let Nt=0;Nt<pt.attributes.length;Nt++){const Wt=pt.attributes[Nt];Wt.name.match(/^xmlns:(.+)$/)&&(at[Wt.value]=RegExp.$1)}const Pt=z(pt);Pt.xml=pt,0<Object.keys(at).length&&(Pt.extensions=at),_t[R]=Pt}for(let kt=0;kt<Rt.length;kt++){const R=Rt[kt];Ot[R]=U[R].buffer}return{rels:Zt,modelRels:bt,model:_t,printTicket:O,texture:Ot}}function c(N){const U=[],$=new DOMParser().parseFromString(N,"application/xml").querySelectorAll("Relationship");for(let nt=0;nt<$.length;nt++){const ut=$[nt],Rt={target:ut.getAttribute("Target"),id:ut.getAttribute("Id"),type:ut.getAttribute("Type")};U.push(Rt)}return U}function h(N){const U={};for(let Y=0;Y<N.length;Y++){const $=N[Y],nt=$.getAttribute("name");0<=["Title","Designer","Description","Copyright","LicenseTerms","Rating","CreationDate","ModificationDate"].indexOf(nt)&&(U[nt]=$.textContent)}return U}function d(N){const U={id:N.getAttribute("id"),basematerials:[]},Y=N.querySelectorAll("base");for(let $=0;$<Y.length;$++){const nt=Y[$],ut=E(nt);ut.index=$,U.basematerials.push(ut)}return U}function m(N){return{id:N.getAttribute("id"),path:N.getAttribute("path"),contenttype:N.getAttribute("contenttype"),tilestyleu:N.getAttribute("tilestyleu"),tilestylev:N.getAttribute("tilestylev"),filter:N.getAttribute("filter")}}function p(N){const U={id:N.getAttribute("id"),texid:N.getAttribute("texid"),displaypropertiesid:N.getAttribute("displaypropertiesid")},Y=N.querySelectorAll("tex2coord"),$=[];for(let nt=0;nt<Y.length;nt++){const ut=Y[nt],Rt=ut.getAttribute("u"),bt=ut.getAttribute("v");$.push(parseFloat(Rt),parseFloat(bt))}return U.uvs=new Float32Array($),U}function g(N){const U={id:N.getAttribute("id"),displaypropertiesid:N.getAttribute("displaypropertiesid")},Y=N.querySelectorAll("color"),$=[],nt=new Ae;for(let ut=0;ut<Y.length;ut++){const bt=Y[ut].getAttribute("color");nt.setStyle(bt.substring(0,7),pd),$.push(nt.r,nt.g,nt.b)}return U.colors=new Float32Array($),U}function x(N){const U=N.children,Y={};for(let $=0;$<U.length;$++){const nt={type:U[$].nodeName.substring(2)};for(let ut=0;ut<U[$].attributes.length;ut++){const Rt=U[$].attributes[ut];Rt.specified&&(nt[Rt.name]=Rt.value)}Y[U[$].getAttribute("identifier")]=nt}return Y}function _(N){const U={id:N.getAttribute("id"),displayname:N.getAttribute("displayname")},Y=N.children,$={};for(let nt=0;nt<Y.length;nt++){const ut=Y[nt];if(ut.nodeName==="i:in"||ut.nodeName==="i:out")$[ut.nodeName==="i:in"?"inputs":"outputs"]=x(ut);else{const Rt=ut.children,bt={op:ut.nodeName.substring(2),identifier:ut.getAttribute("identifier")};for(let _t=0;_t<Rt.length;_t++)bt[Rt[_t].nodeName.substring(2)]=x(Rt[_t]);$[bt.identifier]=bt}}return U.operations=$,U}function S(N){const U={id:N.getAttribute("id")},Y=N.querySelectorAll("pbmetallic"),$=[];for(let nt=0;nt<Y.length;nt++){const ut=Y[nt];$.push({name:ut.getAttribute("name"),metallicness:parseFloat(ut.getAttribute("metallicness")),roughness:parseFloat(ut.getAttribute("roughness"))})}return U.data=$,U}function E(N){const U={};return U.name=N.getAttribute("name"),U.displaycolor=N.getAttribute("displaycolor"),U.displaypropertiesid=N.getAttribute("displaypropertiesid"),U}function T(N){const U={},Y=[],$=N.querySelectorAll("vertices vertex");for(let bt=0;bt<$.length;bt++){const _t=$[bt],O=_t.getAttribute("x"),Ot=_t.getAttribute("y"),Et=_t.getAttribute("z");Y.push(parseFloat(O),parseFloat(Ot),parseFloat(Et))}U.vertices=new Float32Array(Y);const nt=[],ut=[],Rt=N.querySelectorAll("triangles triangle");for(let bt=0;bt<Rt.length;bt++){const _t=Rt[bt],O=_t.getAttribute("v1"),Ot=_t.getAttribute("v2"),Et=_t.getAttribute("v3"),me=_t.getAttribute("p1"),zt=_t.getAttribute("p2"),ue=_t.getAttribute("p3"),Zt=_t.getAttribute("pid"),kt={};kt.v1=parseInt(O,10),kt.v2=parseInt(Ot,10),kt.v3=parseInt(Et,10),ut.push(kt.v1,kt.v2,kt.v3),me&&(kt.p1=parseInt(me,10)),zt&&(kt.p2=parseInt(zt,10)),ue&&(kt.p3=parseInt(ue,10)),Zt&&(kt.pid=Zt),0<Object.keys(kt).length&&nt.push(kt)}return U.triangleProperties=nt,U.triangles=new Uint32Array(ut),U}function b(N){const U=[],Y=N.querySelectorAll("component");for(let $=0;$<Y.length;$++){const nt=Y[$],ut=v(nt);U.push(ut)}return U}function v(N){const U={};U.objectId=N.getAttribute("objectid");const Y=N.getAttribute("transform");return Y&&(U.transform=P(Y)),U}function P(N){const U=[];N.split(" ").forEach(function($){U.push(parseFloat($))});const Y=new cn;return Y.set(U[0],U[3],U[6],U[9],U[1],U[4],U[7],U[10],U[2],U[5],U[8],U[11],0,0,0,1),Y}function L(N){const U={type:N.getAttribute("type")},Y=N.getAttribute("id");Y&&(U.id=Y);const $=N.getAttribute("pid");$&&(U.pid=$);const nt=N.getAttribute("pindex");nt&&(U.pindex=nt);const ut=N.getAttribute("thumbnail");ut&&(U.thumbnail=ut);const Rt=N.getAttribute("partnumber");Rt&&(U.partnumber=Rt);const bt=N.getAttribute("name");bt&&(U.name=bt);const _t=N.querySelector("mesh");_t&&(U.mesh=T(_t));const O=N.querySelector("components");return O&&(U.components=b(O)),U}function H(N){const U={};U.basematerials={};const Y=N.querySelectorAll("basematerials");for(let O=0;O<Y.length;O++){const Ot=Y[O],Et=d(Ot);U.basematerials[Et.id]=Et}U.texture2d={};const $=N.querySelectorAll("texture2d");for(let O=0;O<$.length;O++){const Ot=$[O],Et=m(Ot);U.texture2d[Et.id]=Et}U.colorgroup={};const nt=N.querySelectorAll("colorgroup");for(let O=0;O<nt.length;O++){const Ot=nt[O],Et=g(Ot);U.colorgroup[Et.id]=Et}const ut=N.querySelectorAll("implicitfunction");ut.length>0&&(U.implicitfunction={});for(let O=0;O<ut.length;O++){const Ot=ut[O],Et=_(Ot);U.implicitfunction[Et.id]=Et}U.pbmetallicdisplayproperties={};const Rt=N.querySelectorAll("pbmetallicdisplayproperties");for(let O=0;O<Rt.length;O++){const Ot=Rt[O],Et=S(Ot);U.pbmetallicdisplayproperties[Et.id]=Et}U.texture2dgroup={};const bt=N.querySelectorAll("texture2dgroup");for(let O=0;O<bt.length;O++){const Ot=bt[O],Et=p(Ot);U.texture2dgroup[Et.id]=Et}U.object={};const _t=N.querySelectorAll("object");for(let O=0;O<_t.length;O++){const Ot=_t[O],Et=L(Ot);U.object[Et.id]=Et}return U}function k(N){const U=[],Y=N.querySelectorAll("item");for(let $=0;$<Y.length;$++){const nt=Y[$],ut={objectId:nt.getAttribute("objectid")},Rt=nt.getAttribute("transform");Rt&&(ut.transform=P(Rt)),U.push(ut)}return U}function z(N){const U={unit:N.getAttribute("unit")||"millimeter"},Y=N.querySelectorAll("metadata");Y&&(U.metadata=h(Y));const $=N.querySelector("resources");$&&(U.resources=H($));const nt=N.querySelector("build");return nt&&(U.build=k(nt)),U}function I(N,U,Y,$){const nt=N.texid,Rt=Y.resources.texture2d[nt];if(Rt){const bt=$[Rt.path],_t=Rt.contenttype,O=new Blob([bt],{type:_t}),Ot=URL.createObjectURL(O),Et=r.load(Ot,function(){URL.revokeObjectURL(Ot)});switch(Et.colorSpace=pd,Rt.tilestyleu){case"wrap":Et.wrapS=kr;break;case"mirror":Et.wrapS=ul;break;case"none":case"clamp":Et.wrapS=Hi;break;default:Et.wrapS=kr}switch(Rt.tilestylev){case"wrap":Et.wrapT=kr;break;case"mirror":Et.wrapT=ul;break;case"none":case"clamp":Et.wrapT=Hi;break;default:Et.wrapT=kr}switch(Rt.filter){case"auto":Et.magFilter=jn,Et.minFilter=Ra;break;case"linear":Et.magFilter=jn,Et.minFilter=jn,Et.generateMipmaps=!1;break;case"nearest":Et.magFilter=$n,Et.minFilter=$n,Et.generateMipmaps=!1;break;default:Et.magFilter=jn,Et.minFilter=Ra}return Et}else return null}function K(N,U,Y,$,nt,ut,Rt){const bt=Rt.pindex,_t={};for(let Et=0,me=U.length;Et<me;Et++){const zt=U[Et],ue=zt.p1!==void 0?zt.p1:bt;_t[ue]===void 0&&(_t[ue]=[]),_t[ue].push(zt)}const O=Object.keys(_t),Ot=[];for(let Et=0,me=O.length;Et<me;Et++){const zt=O[Et],ue=_t[zt],Zt=N.basematerials[zt],kt=Z(Zt,$,nt,ut,Rt,j),R=new zn,M=[],q=Y.vertices;for(let pt=0,at=ue.length;pt<at;pt++){const Pt=ue[pt];M.push(q[Pt.v1*3+0]),M.push(q[Pt.v1*3+1]),M.push(q[Pt.v1*3+2]),M.push(q[Pt.v2*3+0]),M.push(q[Pt.v2*3+1]),M.push(q[Pt.v2*3+2]),M.push(q[Pt.v3*3+0]),M.push(q[Pt.v3*3+1]),M.push(q[Pt.v3*3+2])}R.setAttribute("position",new Vn(M,3));const it=new _i(R,kt);Ot.push(it)}return Ot}function D(N,U,Y,$,nt,ut,Rt){const bt=new zn,_t=[],O=[],Ot=Y.vertices,Et=N.uvs;for(let Zt=0,kt=U.length;Zt<kt;Zt++){const R=U[Zt];_t.push(Ot[R.v1*3+0]),_t.push(Ot[R.v1*3+1]),_t.push(Ot[R.v1*3+2]),_t.push(Ot[R.v2*3+0]),_t.push(Ot[R.v2*3+1]),_t.push(Ot[R.v2*3+2]),_t.push(Ot[R.v3*3+0]),_t.push(Ot[R.v3*3+1]),_t.push(Ot[R.v3*3+2]),O.push(Et[R.p1*2+0]),O.push(Et[R.p1*2+1]),O.push(Et[R.p2*2+0]),O.push(Et[R.p2*2+1]),O.push(Et[R.p3*2+0]),O.push(Et[R.p3*2+1])}bt.setAttribute("position",new Vn(_t,3)),bt.setAttribute("uv",new Vn(O,2));const me=Z(N,$,nt,ut,Rt,I),zt=new au({map:me,flatShading:!0});return new _i(bt,zt)}function C(N,U,Y,$){const nt=new zn,ut=[],Rt=[],bt=Y.vertices,_t=N.colors;for(let Et=0,me=U.length;Et<me;Et++){const zt=U[Et],ue=zt.v1,Zt=zt.v2,kt=zt.v3;ut.push(bt[ue*3+0]),ut.push(bt[ue*3+1]),ut.push(bt[ue*3+2]),ut.push(bt[Zt*3+0]),ut.push(bt[Zt*3+1]),ut.push(bt[Zt*3+2]),ut.push(bt[kt*3+0]),ut.push(bt[kt*3+1]),ut.push(bt[kt*3+2]);const R=zt.p1!==void 0?zt.p1:$.pindex,M=zt.p2!==void 0?zt.p2:R,q=zt.p3!==void 0?zt.p3:R;Rt.push(_t[R*3+0]),Rt.push(_t[R*3+1]),Rt.push(_t[R*3+2]),Rt.push(_t[M*3+0]),Rt.push(_t[M*3+1]),Rt.push(_t[M*3+2]),Rt.push(_t[q*3+0]),Rt.push(_t[q*3+1]),Rt.push(_t[q*3+2])}nt.setAttribute("position",new Vn(ut,3)),nt.setAttribute("color",new Vn(Rt,3));const O=new au({vertexColors:!0,flatShading:!0});return new _i(nt,O)}function G(N){const U=new zn;U.setIndex(new Xn(N.triangles,1)),U.setAttribute("position",new Xn(N.vertices,3));const Y=new au({name:Yr.DEFAULT_MATERIAL_NAME,color:16777215,flatShading:!0});return new _i(U,Y)}function et(N,U,Y,$,nt,ut){const Rt=Object.keys(N),bt=[];for(let _t=0,O=Rt.length;_t<O;_t++){const Ot=Rt[_t],Et=N[Ot];switch(ht(Ot,$)){case"material":const zt=$.resources.basematerials[Ot],ue=K(zt,Et,U,Y,$,nt,ut);for(let R=0,M=ue.length;R<M;R++)bt.push(ue[R]);break;case"texture":const Zt=$.resources.texture2dgroup[Ot];bt.push(D(Zt,Et,U,Y,$,nt,ut));break;case"vertexColors":const kt=$.resources.colorgroup[Ot];bt.push(C(kt,Et,U,ut));break;case"default":bt.push(G(U));break;default:console.error("THREE.3MFLoader: Unsupported resource type.")}}if(ut.name)for(let _t=0;_t<bt.length;_t++)bt[_t].name=ut.name;return bt}function ht(N,U){return U.resources.texture2dgroup[N]!==void 0?"texture":U.resources.basematerials[N]!==void 0?"material":U.resources.colorgroup[N]!==void 0?"vertexColors":N==="default"?"default":void 0}function gt(N,U){const Y={},$=N.triangleProperties,nt=U.pid;for(let ut=0,Rt=$.length;ut<Rt;ut++){const bt=$[ut];let _t=bt.pid!==void 0?bt.pid:nt;_t===void 0&&(_t="default"),Y[_t]===void 0&&(Y[_t]=[]),Y[_t].push(bt)}return Y}function xt(N,U,Y,$,nt){const ut=new Xr,Rt=gt(N,nt),bt=et(Rt,N,U,Y,$,nt);for(let _t=0,O=bt.length;_t<O;_t++)ut.add(bt[_t]);return ut}function F(N,U,Y){if(!N)return;const $=[],nt=Object.keys(N);for(let ut=0;ut<nt.length;ut++){const Rt=nt[ut];for(let bt=0;bt<i.availableExtensions.length;bt++){const _t=i.availableExtensions[bt];_t.ns===Rt&&$.push(_t)}}for(let ut=0;ut<$.length;ut++){const Rt=$[ut];Rt.apply(Y,N[Rt.ns],U)}}function Z(N,U,Y,$,nt,ut){return N.build!==void 0||(N.build=ut(N,U,Y,$,nt)),N.build}function j(N,U,Y){let $;const nt=N.displaypropertiesid,ut=Y.resources.pbmetallicdisplayproperties;if(nt!==null&&ut[nt]!==void 0){const O=ut[nt].data[N.index];$=new Y_({flatShading:!0,roughness:O.roughness,metalness:O.metallicness})}else $=new au({flatShading:!0});$.name=N.name;const Rt=N.displaycolor,bt=Rt.substring(0,7);return $.color.setStyle(bt,pd),Rt.length===9&&($.opacity=parseInt(Rt.charAt(7)+Rt.charAt(8),16)/255),$}function yt(N,U,Y,$){const nt=new Xr;for(let ut=0;ut<N.length;ut++){const Rt=N[ut];let bt=U[Rt.objectId];bt===void 0&&(St(Rt.objectId,U,Y,$),bt=U[Rt.objectId]);const _t=bt.clone(),O=Rt.transform;O&&_t.applyMatrix4(O),nt.add(_t)}return nt}function St(N,U,Y,$){const nt=Y.resources.object[N];if(nt.mesh){const ut=nt.mesh,Rt=Y.extensions,bt=Y.xml;F(Rt,ut,bt),U[nt.id]=Z(ut,U,Y,$,nt,xt)}else{const ut=nt.components;U[nt.id]=Z(ut,U,Y,$,nt,yt)}nt.name&&(U[nt.id].name=nt.name),Y.resources.implicitfunction&&console.warn("THREE.ThreeMFLoader: Implicit Functions are implemented in data-only.",Y.resources.implicitfunction)}function B(N){const U=N.model,Y=N.modelRels,$={},nt=Object.keys(U),ut={};if(Y)for(let Rt=0,bt=Y.length;Rt<bt;Rt++){const _t=Y[Rt],O=_t.target.substring(1);N.texture[O]&&(ut[_t.target]=N.texture[O])}for(let Rt=0;Rt<nt.length;Rt++){const bt=nt[Rt],_t=U[bt],O=Object.keys(_t.resources.object);for(let Ot=0;Ot<O.length;Ot++){const Et=O[Ot];St(Et,$,_t,ut)}}return $}function rt(N){for(let U=0;U<N.length;U++){const Y=N[U];if(Y.target.split(".").pop().toLowerCase()==="model")return Y}}function Ct(N,U){const Y=new Xr,$=rt(U.rels),nt=U.model[$.target.substring(1)].build;for(let ut=0;ut<nt.length;ut++){const Rt=nt[ut],bt=N[Rt.objectId].clone(),_t=Rt.transform;_t&&bt.applyMatrix4(_t),Y.add(bt)}return Y}const Lt=l(t),Xt=B(Lt);return Ct(Xt,Lt)}addExtension(t){this.availableExtensions.push(t)}}function O2(s,t=!1){const i=s[0].index!==null,r=new Set(Object.keys(s[0].attributes)),l=new Set(Object.keys(s[0].morphAttributes)),c={},h={},d=s[0].morphTargetsRelative,m=new zn;let p=0;for(let g=0;g<s.length;++g){const x=s[g];let _=0;if(i!==(x.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in x.attributes){if(!r.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;c[S]===void 0&&(c[S]=[]),c[S].push(x.attributes[S]),_++}if(_!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". Make sure all geometries have the same number of attributes."),null;if(d!==x.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in x.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+".  .morphAttributes must be consistent throughout all geometries."),null;h[S]===void 0&&(h[S]=[]),h[S].push(x.morphAttributes[S])}if(t){let S;if(i)S=x.index.count;else if(x.attributes.position!==void 0)S=x.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+g+". The geometry must have either an index or a position attribute"),null;m.addGroup(p,S,g),p+=S}}if(i){let g=0;const x=[];for(let _=0;_<s.length;++_){const S=s[_].index;for(let E=0;E<S.count;++E)x.push(S.getX(E)+g);g+=s[_].attributes.position.count}m.setIndex(x)}for(const g in c){const x=__(c[g]);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" attribute."),null;m.setAttribute(g,x)}for(const g in h){const x=h[g][0].length;if(x===0)break;m.morphAttributes=m.morphAttributes||{},m.morphAttributes[g]=[];for(let _=0;_<x;++_){const S=[];for(let T=0;T<h[g].length;++T)S.push(h[g][T][_]);const E=__(S);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+g+" morphAttribute."),null;m.morphAttributes[g].push(E)}}return m}function __(s){let t,i,r,l=-1,c=0;for(let p=0;p<s.length;++p){const g=s[p];if(t===void 0&&(t=g.array.constructor),t!==g.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=g.itemSize),i!==g.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=g.normalized),r!==g.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=g.gpuType),l!==g.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=g.count*i}const h=new t(c),d=new Xn(h,i,r);let m=0;for(let p=0;p<s.length;++p){const g=s[p];if(g.isInterleavedBufferAttribute){const x=m/i;for(let _=0,S=g.count;_<S;_++)for(let E=0;E<i;E++){const T=g.getComponent(_,E);d.setComponent(_+x,E,T)}}else h.set(g.array,m);m+=g.count*i}return l!==void 0&&(d.gpuType=l),d}/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P2=s=>s.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),v_=s=>{const t=P2(s);return t.charAt(0).toUpperCase()+t.slice(1)},lv=(...s)=>s.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),F2=s=>{for(const t in s)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var B2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=Qt.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:h,...d},m)=>Qt.createElement("svg",{ref:m,...B2,width:t,height:t,stroke:s,strokeWidth:r?Number(i)*24/Number(t):i,className:lv("lucide",l),...!c&&!F2(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,g])=>Qt.createElement(p,g)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=(s,t)=>{const i=Qt.forwardRef(({className:r,...l},c)=>Qt.createElement(I2,{ref:c,iconNode:t,className:lv(`lucide-${z2(v_(s))}`,`lucide-${s}`,r),...l}));return i.displayName=v_(s),i};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],G2=jr("box",H2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],k2=jr("code",V2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],W2=jr("github",X2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],cv=jr("key",q2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],j2=jr("loader-circle",Y2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],K2=jr("search",Z2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],J2=jr("x",Q2),$2="#ffe4e9",tA=()=>{const s=document.createElement("canvas");s.width=128,s.height=128;const t=s.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.2,"rgba(255, 255, 255, 0.4)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new fM(s)},eA=s=>{if(!s)return null;const i=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").split("").join(".*");return new RegExp(i,"i")},nA=({files:s,onModelSelect:t,onProgress:i,onHover:r,panelSize:l,selectedModel:c,searchTerm:h})=>{const d=Qt.useRef(null),m=Qt.useRef(null),p=Qt.useRef(null),g=Qt.useRef(null),x=Qt.useRef(new TM(new lt,new lt)),_=Qt.useRef(new Ee),S=Qt.useRef([]),E=Qt.useRef([]),T=Qt.useRef([]),b=Qt.useRef(new Set),v=Qt.useRef(new Set),P=Qt.useRef(0),[L,H]=Qt.useState(!1),k=Qt.useRef(!1),z=Qt.useRef(null),I=Qt.useRef(null),K=Qt.useRef(new lt),D=Qt.useRef(0),C=Qt.useRef(null),G=Qt.useRef(0),et=Qt.useRef(0),ht=Qt.useRef({theta:0,phi:Math.PI/2}),gt=Qt.useRef(1200),xt=Qt.useRef({x:0,y:0}),F=Qt.useRef(!1),Z=Qt.useRef({x:0,y:0}),j=Qt.useRef(!1),yt=Qt.useRef({x:0,y:0}),St=Qt.useRef(0),B=Qt.useRef(0),rt=Qt.useRef(0),Ct=Qt.useRef(0),Lt=Qt.useRef(!1),Xt=Qt.useRef(()=>{}),N=350,U=650,Y=Qt.useRef(1200),$=Qt.useRef(200),nt=Qt.useRef(4),ut=Qt.useRef(l);Qt.useEffect(()=>{ut.current=l},[l]);const Rt=Qt.useRef(h),bt=R=>R>1200?6:R>768?4:2,_t=(R,M)=>{const q=ut.current,it=gt.current,pt=Ko.degToRad(60),at=2*Math.tan(pt/2)*it;let Pt=0,Nt=0;if(R>768){const Gt=at*(R/M)/R;Pt=q/2*Gt}else{const Wt=at/M;Nt=-(q*.5)*Wt}xt.current={x:Pt,y:Nt}},O=()=>{const R=eA(Rt.current);T.current=s.filter(M=>{const q=v.current.has(M.url);return(!Rt.current||(R?R.test(M.name):!0))&&!q}),B.current=Math.ceil(T.current.length/nt.current)},Ot=()=>{if(!d.current)return;const R=St.current,M=d.current.clientHeight,q=U,it=4,pt=Math.floor(R/q),at=Math.ceil(M*1.5/q),Pt=Math.max(0,pt-it),Nt=pt+at+it,Wt=nt.current,Gt=Pt*Wt,Mt=(Nt+1)*Wt,Dt=[];for(let qt=Gt;qt<Mt;qt++)qt<T.current.length&&Dt.push(qt);Dt.sort((qt,Yt)=>{const Vt=Math.floor(qt/Wt),re=Math.floor(Yt/Wt),X=Vt>=pt&&Vt<pt+at,It=re>=pt&&re<pt+at;if(X&&!It)return-1;if(!X&&It)return 1;if(X&&It)return qt-Yt;const Ft=Math.abs(Vt-pt),Bt=Math.abs(re-pt);return Ft-Bt}),Dt.forEach(qt=>{const Yt=T.current[qt];b.current.has(Yt.url)||kt(Yt)})},Et=()=>{const R=nt.current,M=$.current,q=new Map;T.current.forEach((it,pt)=>{q.set(it.url,pt)}),S.current.forEach(it=>{const pt=it.userData.fileUrl,at=q.get(pt);if(at!==void 0){it.userData.matchesSearch=!0;const Pt=Math.floor(at/R),Nt=at%R,Mt=-((R-1)*U)/2+Nt*U,Dt=M-Pt*U,qt=0;it.userData.originalPosition={x:Mt,y:Dt,z:qt},it.position.set(Mt,Dt,qt);const Yt=E.current.find(Vt=>Vt.model===it);Yt&&Yt.sphere.center.copy(it.position),it.visible=!0}else it.userData.matchesSearch=!1,it.visible=!1})};Qt.useEffect(()=>{if(Rt.current=h,!d.current)return;const R=h.length>0;R&&!Lt.current?(Ct.current=St.current,St.current=0):R&&Lt.current?St.current=0:!R&&Lt.current&&(St.current=Ct.current),Lt.current=R,O(),Ot(),Et()},[h,s]);const me=new d2,zt=new N2,ue=Qt.useRef(0),Zt=(R,M)=>{var Dt;const q=new Y_({color:$2,roughness:.5,metalness:0}),it=new _i(R,q);it.userData.fileName=M.name,it.userData.fileUrl=M.url,it.userData.scadContent=M.scadContent,it.userData.scadUrl=M.scadUrl,it.castShadow=!1,it.receiveShadow=!1,it.userData.matchesSearch=!0,R.center(),R.computeBoundingBox();const pt=R.boundingBox,at=new lt;pt.getSize(at);const Pt=Math.max(at.x,at.y,at.z),Nt=N/Pt;it.scale.setScalar(Nt),it.rotation.set(-Math.PI/2,0,Math.PI/4);const Wt=new hM(R),Gt=new uM(Wt,new X_({color:13938872,transparent:!0,opacity:.3}));it.add(Gt);const Mt=new yl(it.position.clone(),N*.8);E.current.push({sphere:Mt,model:it}),(Dt=m.current)==null||Dt.add(it),S.current.push(it),ue.current++,i(ue.current,s.length),Et()},kt=R=>{var Wt;if(b.current.has(R.url))return;b.current.add(R.url),P.current++,L||H(!0);const M=()=>{P.current--,P.current<=0&&(P.current=0,H(!1))},q=Gt=>{Zt(Gt,R),M()},it=Gt=>{console.warn(`Failed to load ${R.name} (Error/404), removing from view.`,Gt),v.current.add(R.url),O(),Et();const Mt=Date.now();Mt-rt.current>500&&(Ot(),rt.current=Mt),ue.current++,i(ue.current,s.length),M()},pt=(Wt=R.name.split(".").pop())==null?void 0:Wt.toLowerCase(),at=async()=>{try{const Gt=await fetch(R.path);if(Gt.ok){const Mt=await Gt.arrayBuffer();if(pt==="3mf")Pt(Mt);else{const Dt=me.parse(Mt);q(Dt)}}else throw new Error("Not found locally")}catch{Nt()}},Pt=Gt=>{zt.load(typeof Gt=="string"?Gt:URL.createObjectURL(new Blob([Gt])),Mt=>{const Dt=[];if(Mt.updateMatrixWorld(!0),Mt.traverse(qt=>{if(qt.isMesh){const Yt=qt,Vt=Yt.geometry.clone();Vt.applyMatrix4(Yt.matrixWorld),Dt.push(Vt)}}),Dt.length>0){const qt=O2(Dt);qt?q(qt):it(new Error("Failed to merge 3MF geometries"))}else it(new Error("No mesh found in 3MF file"))},void 0,it)},Nt=()=>{pt==="3mf"?Pt(R.url):me.load(R.url,Gt=>q(Gt),void 0,it)};at()};return Qt.useEffect(()=>{if(!d.current||!s.length)return;const R=d.current.clientWidth,M=d.current.clientHeight,q=new nM;m.current=q;const it=new Di(60,R/M,1,1e4);p.current=it;const pt=new h2({alpha:!0,antialias:!0,powerPreference:"default"});pt.setSize(R,M),pt.setPixelRatio(Math.min(window.devicePixelRatio,2)),pt.shadowMap.enabled=!1,pt.outputColorSpace=Jn,pt.toneMapping=Da,d.current.appendChild(pt.domElement),g.current=pt;const at=it.position.clone(),Pt=it.position.clone(),Nt=new lt(0,0,0),Wt=new lt(0,0,0),Gt=(te,be)=>{const Qe=te/be,un=bt(te);nt.current=un;const le=(un-1)*U+N+600,Te=Math.tan(Ko.degToRad(30)),Je=le/(2*Te*Qe);Y.current=Math.max(Je,1200);const fn=Y.current*Te,rn=te<=768?800:700;$.current=fn-rn,k.current||(it.position.z=Y.current,Pt.z=Y.current)};Gt(R,M),at.z=Y.current;const Mt=new MM(16777215,.9);q.add(Mt);const Dt=new bM(16777215,.3);Dt.position.set(500,1e3,750),q.add(Dt);const qt=tA(),Yt=new V_({map:qt,color:16770281,transparent:!0,opacity:0,blending:xd,depthWrite:!1}),Vt=new aM(Yt);Vt.renderOrder=-1,q.add(Vt),C.current=Vt,O(),Ot();const re=te=>{j.current=!0,F.current=!1,Z.current={x:te.clientX,y:te.clientY}},X=te=>{const be=d.current.getBoundingClientRect();if(_.current.x=(te.clientX-be.left)/be.width*2-1,_.current.y=-((te.clientY-be.top)/be.height)*2+1,j.current&&k.current&&z.current){const Qe=te.clientX-Z.current.x,un=te.clientY-Z.current.y;!F.current&&(Math.abs(Qe)>5||Math.abs(un)>5)&&(F.current=!0,Z.current={x:te.clientX,y:te.clientY}),F.current&&(ht.current.theta-=(te.clientX-Z.current.x)*.005,ht.current.phi-=(te.clientY-Z.current.y)*.005,ht.current.phi=Math.max(.1,Math.min(Math.PI-.1,ht.current.phi)),Z.current={x:te.clientX,y:te.clientY})}},It=te=>{const be=j.current;if(j.current=!1,d.current){const Qe=d.current.getBoundingClientRect();_.current.x=(te.clientX-Qe.left)/Qe.width*2-1,_.current.y=-((te.clientY-Qe.top)/Qe.height)*2+1}!F.current&&be&&$t(),F.current=!1},Ft=te=>{if(te.touches.length===1&&(j.current=!0,F.current=!1,yt.current={x:te.touches[0].clientX,y:te.touches[0].clientY},d.current)){const be=d.current.getBoundingClientRect();_.current.x=(te.touches[0].clientX-be.left)/be.width*2-1,_.current.y=-((te.touches[0].clientY-be.top)/be.height)*2+1}},Bt=te=>{if(te.touches.length!==1)return;te.cancelable&&te.preventDefault();const be=te.touches[0].clientX,Qe=te.touches[0].clientY,un=be-yt.current.x,le=Qe-yt.current.y;if(!F.current&&(Math.abs(un)>5||Math.abs(le)>5)&&(F.current=!0),k.current&&z.current)ht.current.theta-=un*.005,ht.current.phi-=le*.005,ht.current.phi=Math.max(.1,Math.min(Math.PI-.1,ht.current.phi));else{const Je=-le*8,fn=B.current*U,rn=Math.max(0,fn-$.current);St.current+=Je,St.current=Math.max(0,Math.min(St.current,rn));const $e=Date.now();$e-rt.current>100&&(Ot(),rt.current=$e)}yt.current={x:be,y:Qe}},Ut=te=>{j.current=!1,F.current||$t(),F.current=!1},At=te=>{if(te.preventDefault(),k.current){gt.current+=te.deltaY*1,gt.current=Math.max(500,Math.min(gt.current,2500)),d.current&&_t(d.current.clientWidth,d.current.clientHeight);return}const be=te.deltaY*.8,Qe=B.current*U,un=Math.max(0,Qe-$.current);St.current+=be,St.current=Math.max(0,Math.min(St.current,un));const le=Date.now();le-rt.current>50&&(Ot(),rt.current=le)},$t=()=>{x.current.setFromCamera(_.current,p.current);const te=E.current.find(be=>be.model.userData.matchesSearch&&x.current.ray.intersectsSphere(be.sphere));k.current?Ge():te&&pe(te.model)};d.current.addEventListener("mousedown",re),d.current.addEventListener("mousemove",X),window.addEventListener("mouseup",It),d.current.addEventListener("wheel",At,{passive:!1}),d.current.addEventListener("touchstart",Ft,{passive:!1}),d.current.addEventListener("touchmove",Bt,{passive:!1}),d.current.addEventListener("touchend",Ut);const pe=te=>{var un,le;k.current=!0,z.current=te,I.current=null,r(null),G.current=0,et.current=0,C.current&&(C.current.visible=!1),p.current&&K.current.copy(p.current.position),ht.current={theta:Math.PI/4,phi:Math.PI/3},gt.current=1200,S.current.forEach(Te=>{if(Te!==te){Te.visible=!1;const Je=Te.material;Je.opacity=0,Je.transparent=!0}else{Te.visible=!0;const Je=Te.material;Je.opacity=1,Je.transparent=!1}}),t(te);const be=((un=d.current)==null?void 0:un.clientWidth)||window.innerWidth,Qe=((le=d.current)==null?void 0:le.clientHeight)||window.innerHeight;_t(be,Qe)},Ge=()=>{k.current=!1,z.current=null,t(null),Pt.set(0,0,Y.current),Wt.set(0,-St.current,0),Et()};Xt.current=Ge;const Le=()=>{if(D.current=requestAnimationFrame(Le),!m.current||!p.current||!g.current)return;if(!k.current&&!F.current){x.current.setFromCamera(_.current,p.current);const le=E.current.find(Te=>Te.model.userData.matchesSearch&&x.current.ray.intersectsSphere(Te.sphere));if(le?I.current=le.model:I.current=null,le&&d.current){const Te=le.model.position.clone();Te.y-=N*.55,Te.project(p.current);const Je=d.current.clientWidth,fn=d.current.clientHeight,rn=(Te.x*.5+.5)*Je,$e=(-(Te.y*.5)+.5)*fn;r({name:le.model.userData.fileName,x:rn,y:$e})}else r(null)}else I.current=null,r(null);let te=0,be=N*1.5,Qe=.005,un=.005;if(I.current&&!k.current&&!F.current){te=.5,be=N*3;const le=p.current.position,Te=I.current.position,fn=Te.clone().sub(le).normalize().multiplyScalar(N);C.current.position.copy(Te).add(fn),Qe=.02,un=.02}else be=N*1.5;if(G.current=Ko.lerp(G.current,te,Qe),et.current=Ko.lerp(et.current,be,un),C.current&&(C.current.material.opacity=G.current,C.current.scale.setScalar(et.current),C.current.visible=G.current>.01),k.current){if(z.current){const le=gt.current,{theta:Te,phi:Je}=ht.current,fn=le*Math.sin(Je)*Math.sin(Te),rn=le*Math.cos(Je),$e=le*Math.sin(Je)*Math.cos(Te),pn=new lt(fn,rn,$e),vi=pn.clone().normalize().negate(),Oa=new lt(0,1,0),Zr=new lt().crossVectors(vi,Oa).normalize(),ao=new lt().crossVectors(Zr,vi).normalize(),gr=Zr.multiplyScalar(xt.current.x).add(ao.multiplyScalar(xt.current.y)),ki=z.current.position.clone();Wt.copy(ki).add(gr),Pt.copy(ki).add(pn).add(gr),at.lerp(Pt,.1),Nt.lerp(Wt,.1)}}else{const le=-St.current;Pt.y=le,Wt.y=le,Pt.x=0,Pt.z=Y.current,Wt.x=0,Wt.z=0,at.lerp(Pt,.05),Nt.lerp(Wt,.05)}p.current.position.copy(at),p.current.lookAt(Nt),S.current.forEach(le=>{if(le===z.current)le.material.transparent=!1,le.material.opacity=1,le.visible=!0;else{if(!le.userData.matchesSearch){le.visible=!1;return}le.rotation.z-=.001;const Te=k.current?0:1,Je=le.material.opacity,fn=Ko.lerp(Je,Te,.05),rn=fn<.99;le.material.transparent=rn,le.material.opacity=fn,le.visible=fn>.01}}),g.current.render(m.current,p.current)};Le();const Tn=()=>{if(!d.current||!p.current||!g.current)return;const te=d.current.clientWidth,be=d.current.clientHeight;p.current.aspect=te/be,p.current.updateProjectionMatrix(),g.current.setSize(te,be),Gt(te,be),O(),Ot(),Et(),k.current&&z.current&&_t(te,be)};return window.addEventListener("resize",Tn),()=>{var te,be,Qe,un,le,Te,Je;window.removeEventListener("resize",Tn),(te=d.current)==null||te.removeEventListener("mousedown",re),(be=d.current)==null||be.removeEventListener("mousemove",X),window.removeEventListener("mouseup",It),(Qe=d.current)==null||Qe.removeEventListener("wheel",At),(un=d.current)==null||un.removeEventListener("touchstart",Ft),(le=d.current)==null||le.removeEventListener("touchmove",Bt),(Te=d.current)==null||Te.removeEventListener("touchend",Ut),cancelAnimationFrame(D.current),m.current&&(S.current.forEach(fn=>{fn.geometry.dispose(),Array.isArray(fn.material)?fn.material.forEach(rn=>rn.dispose()):fn.material.dispose()}),m.current.clear()),(Je=g.current)==null||Je.dispose(),d.current&&g.current&&d.current.removeChild(g.current.domElement)}},[s]),Qt.useEffect(()=>{k.current&&d.current&&_t(d.current.clientWidth,d.current.clientHeight)},[l]),Qt.useEffect(()=>{!c&&k.current&&Xt.current()},[c]),Qt.useEffect(()=>{t||(k.current=!1,z.current=null)},[t]),Jt.jsxs(Jt.Fragment,{children:[Jt.jsx("div",{ref:d,className:"w-full h-full relative",style:{touchAction:"none"}}),L&&Jt.jsxs("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 z-40 bg-gray-900/40 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20 flex items-center gap-3 text-pink-50 text-sm shadow-2xl animate-pulse ring-1 ring-white/10",children:[Jt.jsx(j2,{className:"animate-spin text-pink-300",size:18}),Jt.jsx("span",{className:"font-mono text-xs tracking-wide uppercase",children:"Buffering Models..."})]})]})},iA=({model:s,visible:t,onClose:i,width:r,onResize:l})=>{const c=Qt.useRef(!1),[h,d]=Qt.useState(!1);Qt.useEffect(()=>{const S=()=>d(window.innerWidth<=768);return S(),window.addEventListener("resize",S),()=>window.removeEventListener("resize",S)},[]),Qt.useEffect(()=>{const S=v=>{if(c.current)if(v.preventDefault(),window.innerWidth>768){const P=window.innerWidth-v.clientX,L=Math.max(300,Math.min(P,window.innerWidth*.6));l(L)}else{const P=window.innerHeight-v.clientY,L=Math.max(200,Math.min(P,window.innerHeight*.9));l(L)}},E=()=>{c.current=!1,document.body.style.cursor="",document.body.style.userSelect=""},T=v=>{if(c.current)if(v.cancelable&&v.preventDefault(),window.innerWidth>768){const P=window.innerWidth-v.touches[0].clientX,L=Math.max(300,Math.min(P,window.innerWidth*.6));l(L)}else{const P=window.innerHeight-v.touches[0].clientY,L=Math.max(200,Math.min(P,window.innerHeight*.9));l(L)}},b=()=>{c.current=!1,document.body.style.userSelect=""};return document.addEventListener("mousemove",S),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",b),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",b)}},[l]);const m=S=>{c.current=!0,document.body.style.userSelect="none",document.body.style.cursor=window.innerWidth>768?"ew-resize":"ns-resize"},p=S=>{c.current=!0,document.body.style.userSelect="none"};if(!s)return null;const g=s.userData.fileName,x=s.userData.scadContent,_=!!x;return Jt.jsxs("div",{style:{width:h?"100%":`${r}px`,height:h?`${r}px`:"100%"},className:`fixed bg-gray-900 text-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50 flex flex-col
        /* Base positioning */
        bottom-0 right-0 
        /* Mobile overrides */
        ${h?"left-0 rounded-t-2xl border-t border-white/10":"top-0 left-auto rounded-none border-l border-white/10"}
        ${t?"translate-y-0 translate-x-0":h?"translate-y-full":"translate-x-full"}
      `,children:[Jt.jsx("div",{onMouseDown:m,onTouchStart:p,className:`absolute z-50 flex items-center justify-center
          ${h?"top-0 left-0 w-full h-8 cursor-ns-resize -mt-4":"top-0 left-0 w-4 h-full cursor-ew-resize -ml-2"}
        `,children:h&&Jt.jsx("div",{className:"w-12 h-1 bg-white/20 rounded-full mt-4 pointer-events-none"})}),Jt.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-900/20 to-transparent shrink-0",children:[Jt.jsx("h2",{className:"text-xl font-bold font-mono text-cyan-400 truncate pr-4",children:g}),Jt.jsx("button",{onClick:i,className:"p-2 rounded-full hover:bg-white/10 transition-colors",children:Jt.jsx(J2,{size:20})})]}),Jt.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[Jt.jsxs("div",{className:"bg-white/5 rounded-xl p-4 border border-white/5",children:[Jt.jsxs("div",{className:"flex items-center gap-3 mb-3 text-sm text-gray-400",children:[Jt.jsx(G2,{size:16,className:"text-pink-500"}),Jt.jsx("span",{children:"Model Details"})]}),Jt.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:"This 3D model was procedurally loaded from the repository. Rendered with standard physical materials in a Three.js environment."})]}),_?Jt.jsxs("div",{className:"space-y-2",children:[Jt.jsxs("div",{className:"flex items-center gap-2 text-sm text-green-400 font-mono",children:[Jt.jsx(k2,{size:16}),Jt.jsx("span",{children:"Source Code (.scad)"})]}),Jt.jsx("div",{className:"bg-black/50 rounded-lg p-4 border border-white/5 overflow-x-auto",children:Jt.jsx("pre",{className:"text-xs font-mono text-gray-300 whitespace-pre-wrap break-all",children:x})})]}):Jt.jsx("div",{className:"p-8 text-center text-gray-500 border border-dashed border-white/10 rounded-xl",children:Jt.jsx("span",{className:"block text-sm",children:"No source code available for this binary STL."})})]})]})},aA=({isOpen:s,onSubmit:t,message:i})=>{const[r,l]=Qt.useState("");return s?Jt.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",children:Jt.jsxs("div",{className:"w-full max-w-md bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-8",children:[Jt.jsxs("div",{className:"flex flex-col items-center gap-4 mb-6",children:[Jt.jsx("div",{className:"p-4 bg-purple-500/10 rounded-full text-purple-400",children:Jt.jsx(cv,{size:32})}),Jt.jsx("h2",{className:"text-2xl font-bold text-white text-center",children:"GitHub Access Required"}),Jt.jsx("p",{className:"text-center text-gray-400 text-sm",children:i||"The GitHub API rate limit has been reached. Please provide a Personal Access Token (PAT) to continue exploring the repository."})]}),Jt.jsxs("form",{onSubmit:c=>{c.preventDefault(),r.trim()&&t(r)},className:"space-y-4",children:[Jt.jsx("input",{type:"password",value:r,onChange:c=>l(c.target.value),placeholder:"ghp_xxxxxxxxxxxx",className:"w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-mono text-sm",autoFocus:!0}),Jt.jsx("button",{type:"submit",className:"w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg transition-colors",children:"Authenticate"})]}),Jt.jsx("p",{className:"mt-4 text-xs text-center text-gray-600",children:"Token is stored locally and sent only to GitHub API."})]})}):null},y_="https://api.github.com";class rA{constructor(t,i){this.defaultBranch="main",this.owner=t,this.repo=i,this.token=localStorage.getItem("github_pat")}setToken(t){this.token=t,localStorage.setItem("github_pat",t)}async fetchDefaultBranch(){const t=this.token?{Authorization:`token ${this.token}`}:{},i=await fetch(`${y_}/repos/${this.owner}/${this.repo}`,{headers:t});if(i.status===403)throw new Error("RATE_LIMITED");if(!i.ok)throw new Error(`GitHub API Error: ${i.statusText}`);return(await i.json()).default_branch||"main"}async fetchAllFiles(t=""){const i=`andrewphung-${this.owner}-${this.repo}-tree`,r=localStorage.getItem(i);if(r){const{timestamp:l,data:c}=JSON.parse(r);if(Date.now()-l<36e5)return c}try{this.defaultBranch=await this.fetchDefaultBranch();const l=this.token?{Authorization:`token ${this.token}`}:{},c=`${y_}/repos/${this.owner}/${this.repo}/git/trees/${this.defaultBranch}?recursive=1`,h=await fetch(c,{headers:l});if(h.status===403)throw new Error("RATE_LIMITED");if(!h.ok)throw new Error(`GitHub API Error: ${h.statusText}`);const m=(await h.json()).tree,p=[],g=new Map;for(const x of m)if(x.path.toLowerCase().endsWith(".scad")){const _=`https://raw.githubusercontent.com/${this.owner}/${this.repo}/${this.defaultBranch}/${x.path}`;g.set(x.path,_)}for(const x of m){const _=x.path.toLowerCase();if(_.endsWith(".stl")||_.endsWith(".3mf")){const S=`https://raw.githubusercontent.com/${this.owner}/${this.repo}/${this.defaultBranch}/${x.path}`,T=`${x.path.substring(0,x.path.lastIndexOf("."))}.scad`,b=g.get(T);p.push({name:x.path.split("/").pop()||x.path,url:S,path:x.path,scadUrl:b})}}try{localStorage.setItem(i,JSON.stringify({timestamp:Date.now(),data:p}))}catch{console.warn("LocalStorage full, skipping cache")}return p}catch(l){throw l}}async fetchFileContent(t){const i=this.token?{Authorization:`token ${this.token}`}:{},r=await fetch(t,{headers:i});return r.ok?await r.text():""}}const op="abphung",sA="abphung.github.io",md=new rA(op,sA);function S_(s){const t=[...s];for(let i=t.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[t[i],t[r]]=[t[r],t[i]]}return t}function oA(s){const t={};s.forEach(c=>{const h=c.path.includes("/")?c.path.substring(0,c.path.lastIndexOf("/")):"root";t[h]||(t[h]=[]),t[h].push(c)}),Object.keys(t).forEach(c=>{t[c]=S_(t[c])});const i=S_(Object.keys(t)),r=[];let l=0;Object.values(t).forEach(c=>{c.length>l&&(l=c.length)});for(let c=0;c<l;c++)i.forEach(h=>{const d=t[h][c];d&&r.push(d)});return r}function lA(){const[s,t]=Qt.useState([]),[i,r]=Qt.useState(!0),[l,c]=Qt.useState(null),[h,d]=Qt.useState(!1),[m,p]=Qt.useState(),[g,x]=Qt.useState({current:0,total:0}),[_,S]=Qt.useState(null),[E,T]=Qt.useState(450),[b,v]=Qt.useState(""),P=Qt.useRef(null),L=Qt.useCallback(async()=>{r(!0),c(null);try{const K=await md.fetchAllFiles(),D=oA(K);t(D)}catch(K){const D=K.message||"";D==="RATE_LIMITED"?(p("The GitHub API rate limit has been reached. Please provide a Personal Access Token (PAT) to continue."),d(!0)):D.startsWith("GitHub API Error")?(p(`GitHub API Error: ${D.replace("GitHub API Error: ","")}. Please update your Access Token.`),d(!0)):c(D||"Failed to fetch repository contents.")}finally{r(!1)}},[]);Qt.useEffect(()=>{L()},[L]),Qt.useEffect(()=>{_&&_.userData.scadUrl&&!_.userData.scadContent&&(async()=>{try{const D=await md.fetchFileContent(_.userData.scadUrl);_.userData.scadContent=D,S({..._})}catch(D){console.warn("Failed to load lazy SCAD content",D)}})()},[_]);const H=K=>{md.setToken(K),d(!1),L()},k=(K,D)=>{x({current:K,total:D})},z=()=>{p("Please enter your GitHub Personal Access Token."),d(!0)},I=Qt.useCallback(K=>{P.current&&(K&&!_?(P.current.style.display="block",P.current.textContent=K.name,P.current.style.left=`${K.x}px`,P.current.style.top=`${K.y}px`):P.current.style.display="none")},[_]);return Jt.jsxs("div",{className:"w-full h-screen bg-gray-50 relative overflow-hidden font-sans select-none",children:[Jt.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-sky-400 via-indigo-400 to-orange-500 pointer-events-none"}),!i&&!l&&s.length>0&&Jt.jsx("div",{className:"absolute inset-0 z-0",children:Jt.jsx(nA,{files:s,onModelSelect:S,onProgress:k,onHover:I,panelSize:E,selectedModel:_,searchTerm:b})}),Jt.jsx("div",{ref:P,className:"absolute pointer-events-none z-[1] px-4 py-2 text-gray-900 text-sm rounded-lg shadow-xl font-mono tracking-wide whitespace-nowrap hidden mt-4 border",style:{transform:"translateX(-50%)",backgroundColor:"#ffe4e9",borderColor:"#ffe4e9"}}),Jt.jsx("div",{className:"absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900 from-10% via-gray-900/40 to-transparent pointer-events-none z-20"}),Jt.jsx("div",{className:"absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-900 from-10% via-gray-900/40 to-transparent pointer-events-none z-20"}),Jt.jsxs("div",{className:`absolute top-0 left-0 p-8 z-30 transition-opacity duration-500 ${_?"opacity-0 pointer-events-none":"opacity-100"}`,children:[Jt.jsxs("h1",{className:"text-4xl font-black text-white tracking-tighter mb-2 drop-shadow-md",children:["ANDREW",Jt.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-orange-100",children:"PHUNG"})]}),Jt.jsxs("a",{href:`https://github.com/${op}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white/80 text-sm font-mono drop-shadow hover:text-white transition-colors w-fit pointer-events-auto",children:[Jt.jsx(W2,{size:16}),Jt.jsx("span",{children:op})]})]}),Jt.jsx("div",{className:`absolute z-30 transition-all duration-500
        w-full px-4 bottom-8 left-0
        sm:w-auto sm:px-0 sm:bottom-auto sm:left-auto sm:top-8 sm:right-8
        ${_?"opacity-0 scale-95 pointer-events-none":"opacity-100 scale-100"}`,children:Jt.jsxs("div",{className:"relative group w-full sm:w-auto",children:[Jt.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:Jt.jsx(K2,{size:16,className:"text-white/60 group-focus-within:text-white transition-colors"})}),Jt.jsx("input",{type:"text",value:b,onChange:K=>v(K.target.value),placeholder:"Search",className:"bg-gray-900/30 backdrop-blur-md border border-white/10 text-white text-sm rounded-full pl-10 pr-4 py-2 w-full sm:w-48 sm:focus:w-64 transition-all duration-300 focus:outline-none focus:bg-gray-900/50 focus:border-white/30 placeholder-white/40 font-mono shadow-lg"})]})}),l&&!h&&Jt.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-50",children:Jt.jsxs("div",{className:"text-center max-w-lg p-8 bg-gray-900/90 backdrop-blur rounded-2xl border border-white/20 shadow-2xl",children:[Jt.jsx("h2",{className:"text-red-500 text-xl font-bold mb-2",children:"Connection Error"}),Jt.jsx("p",{className:"text-white mb-6",children:l}),Jt.jsxs("div",{className:"flex gap-4 justify-center",children:[Jt.jsx("button",{onClick:L,className:"px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-semibold",children:"Retry"}),Jt.jsxs("button",{onClick:z,className:"px-6 py-2 bg-purple-500/50 hover:bg-purple-500/60 text-white border border-white/20 rounded-lg transition-colors flex items-center gap-2",children:[Jt.jsx(cv,{size:16}),"Update API Key"]})]})]})}),Jt.jsx(iA,{model:_,visible:!!_,onClose:()=>S(null),width:E,onResize:T}),Jt.jsx(aA,{isOpen:h,onSubmit:H,message:m}),!_&&!i&&Jt.jsxs("div",{className:"absolute bottom-8 right-8 text-right text-white/90 text-xs font-mono pointer-events-none drop-shadow-sm z-30 hidden sm:block",children:[Jt.jsx("p",{children:"SCROLL to navigate"}),Jt.jsx("p",{children:"CLICK to inspect / DRAG to rotate"})]})]})}const uv=document.getElementById("root");if(!uv)throw new Error("Could not find root element to mount to");const cA=AS.createRoot(uv);cA.render(Jt.jsx(_S.StrictMode,{children:Jt.jsx(lA,{})}));
