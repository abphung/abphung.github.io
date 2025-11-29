(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Jg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var fd={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px;function IS(){if(Px)return No;Px=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var Bx;function HS(){return Bx||(Bx=1,fd.exports=IS()),fd.exports}var Ht=HS(),dd={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fx;function GS(){if(Fx)return fe;Fx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=S&&z[S]||z["@@iterator"],typeof z=="function"?z:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function _(z,at,Rt){this.props=z,this.context=at,this.refs=M,this.updater=Rt||b}_.prototype.isReactComponent={},_.prototype.setState=function(z,at){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,at,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function N(){}N.prototype=_.prototype;function D(z,at,Rt){this.props=z,this.context=at,this.refs=M,this.updater=Rt||b}var B=D.prototype=new N;B.constructor=D,T(B,_.prototype),B.isPureReactComponent=!0;var V=Array.isArray;function U(){}var O={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function w(z,at,Rt){var wt=Rt.ref;return{$$typeof:o,type:z,key:at,ref:wt!==void 0?wt:null,props:Rt}}function C(z,at){return w(z.type,at,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function Q(z){var at={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Rt){return at[Rt]})}var st=/\/+/g;function mt(z,at){return typeof z=="object"&&z!==null&&z.key!=null?Q(""+z.key):at.toString(36)}function ut(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(U,U):(z.status="pending",z.then(function(at){z.status==="pending"&&(z.status="fulfilled",z.value=at)},function(at){z.status==="pending"&&(z.status="rejected",z.reason=at)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function P(z,at,Rt,wt,Ft){var K=typeof z;(K==="undefined"||K==="boolean")&&(z=null);var ot=!1;if(z===null)ot=!0;else switch(K){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(z.$$typeof){case o:case t:ot=!0;break;case x:return ot=z._init,P(ot(z._payload),at,Rt,wt,Ft)}}if(ot)return Ft=Ft(z),ot=wt===""?"."+mt(z,0):wt,V(Ft)?(Rt="",ot!=null&&(Rt=ot.replace(st,"$&/")+"/"),P(Ft,at,Rt,"",function(Lt){return Lt})):Ft!=null&&(G(Ft)&&(Ft=C(Ft,Rt+(Ft.key==null||z&&z.key===Ft.key?"":(""+Ft.key).replace(st,"$&/")+"/")+ot)),at.push(Ft)),1;ot=0;var Dt=wt===""?".":wt+":";if(V(z))for(var Pt=0;Pt<z.length;Pt++)wt=z[Pt],K=Dt+mt(wt,Pt),ot+=P(wt,at,Rt,K,Ft);else if(Pt=y(z),typeof Pt=="function")for(z=Pt.call(z),Pt=0;!(wt=z.next()).done;)wt=wt.value,K=Dt+mt(wt,Pt++),ot+=P(wt,at,Rt,K,Ft);else if(K==="object"){if(typeof z.then=="function")return P(ut(z),at,Rt,wt,Ft);throw at=String(z),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ot}function Y(z,at,Rt){if(z==null)return z;var wt=[],Ft=0;return P(z,wt,"","",function(K){return at.call(Rt,K,Ft++)}),wt}function k(z){if(z._status===-1){var at=z._result;at=at(),at.then(function(Rt){(z._status===0||z._status===-1)&&(z._status=1,z._result=Rt)},function(Rt){(z._status===0||z._status===-1)&&(z._status=2,z._result=Rt)}),z._status===-1&&(z._status=0,z._result=at)}if(z._status===1)return z._result.default;throw z._result}var yt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},Et={map:Y,forEach:function(z,at,Rt){Y(z,function(){at.apply(this,arguments)},Rt)},count:function(z){var at=0;return Y(z,function(){at++}),at},toArray:function(z){return Y(z,function(at){return at})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return fe.Activity=g,fe.Children=Et,fe.Component=_,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=D,fe.StrictMode=r,fe.Suspense=m,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,fe.__COMPILER_RUNTIME={__proto__:null,c:function(z){return O.H.useMemoCache(z)}},fe.cache=function(z){return function(){return z.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(z,at,Rt){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var wt=T({},z.props),Ft=z.key;if(at!=null)for(K in at.key!==void 0&&(Ft=""+at.key),at)!W.call(at,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&at.ref===void 0||(wt[K]=at[K]);var K=arguments.length-2;if(K===1)wt.children=Rt;else if(1<K){for(var ot=Array(K),Dt=0;Dt<K;Dt++)ot[Dt]=arguments[Dt+2];wt.children=ot}return w(z.type,Ft,wt)},fe.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},fe.createElement=function(z,at,Rt){var wt,Ft={},K=null;if(at!=null)for(wt in at.key!==void 0&&(K=""+at.key),at)W.call(at,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Ft[wt]=at[wt]);var ot=arguments.length-2;if(ot===1)Ft.children=Rt;else if(1<ot){for(var Dt=Array(ot),Pt=0;Pt<ot;Pt++)Dt[Pt]=arguments[Pt+2];Ft.children=Dt}if(z&&z.defaultProps)for(wt in ot=z.defaultProps,ot)Ft[wt]===void 0&&(Ft[wt]=ot[wt]);return w(z,K,Ft)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(z){return{$$typeof:h,render:z}},fe.isValidElement=G,fe.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:k}},fe.memo=function(z,at){return{$$typeof:p,type:z,compare:at===void 0?null:at}},fe.startTransition=function(z){var at=O.T,Rt={};O.T=Rt;try{var wt=z(),Ft=O.S;Ft!==null&&Ft(Rt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(U,yt)}catch(K){yt(K)}finally{at!==null&&Rt.types!==null&&(at.types=Rt.types),O.T=at}},fe.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},fe.use=function(z){return O.H.use(z)},fe.useActionState=function(z,at,Rt){return O.H.useActionState(z,at,Rt)},fe.useCallback=function(z,at){return O.H.useCallback(z,at)},fe.useContext=function(z){return O.H.useContext(z)},fe.useDebugValue=function(){},fe.useDeferredValue=function(z,at){return O.H.useDeferredValue(z,at)},fe.useEffect=function(z,at){return O.H.useEffect(z,at)},fe.useEffectEvent=function(z){return O.H.useEffectEvent(z)},fe.useId=function(){return O.H.useId()},fe.useImperativeHandle=function(z,at,Rt){return O.H.useImperativeHandle(z,at,Rt)},fe.useInsertionEffect=function(z,at){return O.H.useInsertionEffect(z,at)},fe.useLayoutEffect=function(z,at){return O.H.useLayoutEffect(z,at)},fe.useMemo=function(z,at){return O.H.useMemo(z,at)},fe.useOptimistic=function(z,at){return O.H.useOptimistic(z,at)},fe.useReducer=function(z,at,Rt){return O.H.useReducer(z,at,Rt)},fe.useRef=function(z){return O.H.useRef(z)},fe.useState=function(z){return O.H.useState(z)},fe.useSyncExternalStore=function(z,at,Rt){return O.H.useSyncExternalStore(z,at,Rt)},fe.useTransition=function(){return O.H.useTransition()},fe.version="19.2.0",fe}var Ix;function Gh(){return Ix||(Ix=1,dd.exports=GS()),dd.exports}var Yt=Gh();const VS=Jg(Yt);var hd={exports:{}},Oo={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hx;function XS(){return Hx||(Hx=1,(function(o){function t(P,Y){var k=P.length;P.push(Y);t:for(;0<k;){var yt=k-1>>>1,Et=P[yt];if(0<l(Et,Y))P[yt]=Y,P[k]=Et,k=yt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var Y=P[0],k=P.pop();if(k!==Y){P[0]=k;t:for(var yt=0,Et=P.length,z=Et>>>1;yt<z;){var at=2*(yt+1)-1,Rt=P[at],wt=at+1,Ft=P[wt];if(0>l(Rt,k))wt<Et&&0>l(Ft,Rt)?(P[yt]=Ft,P[wt]=k,yt=wt):(P[yt]=Rt,P[at]=k,yt=at);else if(wt<Et&&0>l(Ft,k))P[yt]=Ft,P[wt]=k,yt=wt;else break t}}return Y}function l(P,Y){var k=P.sortIndex-Y.sortIndex;return k!==0?k:P.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,S=3,y=!1,b=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function B(P){for(var Y=i(p);Y!==null;){if(Y.callback===null)r(p);else if(Y.startTime<=P)r(p),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(p)}}function V(P){if(T=!1,B(P),!b)if(i(m)!==null)b=!0,U||(U=!0,Q());else{var Y=i(p);Y!==null&&ut(V,Y.startTime-P)}}var U=!1,O=-1,W=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<W)}function G(){if(M=!1,U){var P=o.unstable_now();w=P;var Y=!0;try{t:{b=!1,T&&(T=!1,N(O),O=-1),y=!0;var k=S;try{e:{for(B(P),g=i(m);g!==null&&!(g.expirationTime>P&&C());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,S=g.priorityLevel;var Et=yt(g.expirationTime<=P);if(P=o.unstable_now(),typeof Et=="function"){g.callback=Et,B(P),Y=!0;break e}g===i(m)&&r(m),B(P)}else r(m);g=i(m)}if(g!==null)Y=!0;else{var z=i(p);z!==null&&ut(V,z.startTime-P),Y=!1}}break t}finally{g=null,S=k,y=!1}Y=void 0}}finally{Y?Q():U=!1}}}var Q;if(typeof D=="function")Q=function(){D(G)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,mt=st.port2;st.port1.onmessage=G,Q=function(){mt.postMessage(null)}}else Q=function(){_(G,0)};function ut(P,Y){O=_(function(){P(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var Y=3;break;default:Y=S}var k=S;S=Y;try{return P()}finally{S=k}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(P,Y){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var k=S;S=P;try{return Y()}finally{S=k}},o.unstable_scheduleCallback=function(P,Y,k){var yt=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?yt+k:yt):k=yt,P){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=k+Et,P={id:x++,callback:Y,priorityLevel:P,startTime:k,expirationTime:Et,sortIndex:-1},k>yt?(P.sortIndex=k,t(p,P),i(m)===null&&P===i(p)&&(T?(N(O),O=-1):T=!0,ut(V,k-yt))):(P.sortIndex=Et,t(m,P),b||y||(b=!0,U||(U=!0,Q()))),P},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(P){var Y=S;return function(){var k=S;S=Y;try{return P.apply(this,arguments)}finally{S=k}}}})(md)),md}var Gx;function kS(){return Gx||(Gx=1,pd.exports=XS()),pd.exports}var xd={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx;function WS(){if(Vx)return Un;Vx=1;var o=Gh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Un.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.0",Un}var Xx;function qS(){if(Xx)return xd.exports;Xx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),xd.exports=WS(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx;function YS(){if(kx)return Oo;kx=1;var o=kS(),t=Gh(),i=qS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,s=f;break}if(A===s){v=!0,s=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,s=u;break}if(A===s){v=!0,s=f,a=u;break}A=A.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case U:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case D:return e.displayName||"Context";case N:return(e._context.displayName||"Context")+".Consumer";case B:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:mt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return mt(e(n))}catch{}}return null}var ut=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},yt=[],Et=-1;function z(e){return{current:e}}function at(e){0>Et||(e.current=yt[Et],yt[Et]=null,Et--)}function Rt(e,n){Et++,yt[Et]=e.current,e.current=n}var wt=z(null),Ft=z(null),K=z(null),ot=z(null);function Dt(e,n){switch(Rt(K,n),Rt(Ft,e),Rt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?rx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=rx(n),e=sx(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(wt),Rt(wt,e)}function Pt(){at(wt),at(Ft),at(K)}function Lt(e){e.memoizedState!==null&&Rt(ot,e);var n=wt.current,a=sx(n,e.type);n!==a&&(Rt(Ft,e),Rt(wt,a))}function te(e){Ft.current===e&&(at(wt),at(Ft)),ot.current===e&&(at(ot),wo._currentValue=k)}var ye,oe;function ce(e){if(ye===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ye=n&&n[1]||"",oe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ye+e+oe}var H=!1;function de(e,n){if(!e||H)return"";H=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(lt){var it=lt}Reflect.construct(e,[],St)}else{try{St.call()}catch(lt){it=lt}e.call(St.prototype)}}else{try{throw Error()}catch(lt){it=lt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var I=v.split(`
`),tt=A.split(`
`);for(u=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(s===I.length||u===tt.length)for(s=I.length-1,u=tt.length-1;1<=s&&0<=u&&I[s]!==tt[u];)u--;for(;1<=s&&0<=u;s--,u--)if(I[s]!==tt[u]){if(s!==1||u!==1)do if(s--,u--,0>u||I[s]!==tt[u]){var ht=`
`+I[s].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=s&&0<=u);break}}}finally{H=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ce(a):""}function ue(e,n){switch(e.tag){case 26:case 27:case 5:return ce(e.type);case 16:return ce("Lazy");case 13:return e.child!==n&&n!==null?ce("Suspense Fallback"):ce("Suspense");case 19:return ce("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return ce("Activity");default:return""}}function Ce(e){try{var n="",a=null;do n+=ue(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Gt=Object.prototype.hasOwnProperty,we=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,re=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,J=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,Tt=o.unstable_UserBlockingPriority,ct=o.unstable_NormalPriority,Zt=o.unstable_LowPriority,Nt=o.unstable_IdlePriority,Qt=o.log,Wt=o.unstable_setDisableYieldValue,At=null,Ct=null;function Kt(e){if(typeof Qt=="function"&&Wt(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(At,e)}catch{}}var dt=Math.clz32?Math.clz32:F,Mt=Math.log,Ot=Math.LN2;function F(e){return e>>>=0,e===0?32:31-(Mt(e)/Ot|0)|0}var ft=256,_t=262144,bt=4194304;function vt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?u=vt(s):(v&=A,v!==0?u=vt(v):a||(a=A&~e,a!==0&&(u=vt(a))))):(A=s&~f,A!==0?u=vt(A):v!==0?u=vt(v):a||(a=s&~e,a!==0&&(u=vt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function It(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var e=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),e}function De(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function pn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function zn(e,n,a,s,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-dt(a),St=1<<ht;A[ht]=0,I[ht]=-1;var it=tt[ht];if(it!==null)for(tt[ht]=null,ht=0;ht<it.length;ht++){var lt=it[ht];lt!==null&&(lt.lane&=-536870913)}a&=~St}s!==0&&er(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function er(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-dt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Sa(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-dt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Gs(e,n){var a=n&-n;return a=(a&42)!==0?1:vi(a),(a&(e.suspendedLanes|n))!==0?0:a}function vi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function nr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vs(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:wx(e.type))}function Xs(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var jn=Math.random().toString(36).slice(2),ln="__reactFiber$"+jn,mn="__reactProps$"+jn,Bi="__reactContainer$"+jn,Or="__reactEvents$"+jn,au="__reactListeners$"+jn,ru="__reactHandles$"+jn,il="__reactResources$"+jn,ir="__reactMarker$"+jn;function ks(e){delete e[ln],delete e[mn],delete e[Or],delete e[au],delete e[ru]}function ya(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Bi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=hx(e);e!==null;){if(a=e[ln])return a;e=hx(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[ln]||e[Bi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function rt(e){var n=e[il];return n||(n=e[il]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nt(e){e[ir]=!0}var Z=new Set,Ut={};function zt(e,n){Vt(e,n),Vt(e+"Capture",n)}function Vt(e,n){for(Ut[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Xt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ne={},se={};function Jt(e){return Gt.call(se,e)?!0:Gt.call(ne,e)?!1:Xt.test(e)?se[e]=!0:(ne[e]=!0,!1)}function pe(e,n,a){if(Jt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Oe(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function Te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ie(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ee(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=Ie(e)?"checked":"value";e._valueTracker=ee(e,n,""+e[n])}}function Ae(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ie(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ma=/[\n"\\]/g;function Ze(e){return e.replace(Ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(e,n,a,s,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Te(n)):e.value!==""+Te(n)&&(e.value=""+Te(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?yn(e,v,Te(n)):a!=null?yn(e,v,Te(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Te(A):e.removeAttribute("name")}function Ke(e,n,a,s,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+Te(a):"",n=n!=null?""+Te(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ye(e)}function yn(e,n,a){n==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Te(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Mn(e,n,a){if(n!=null&&(n=""+Te(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Te(a):""}function An(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Te(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Ye(e)}function Ci(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Ii=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function np(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Ii.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ip(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&np(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&np(e,f,n[f])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var z_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),P_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return P_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hi(){}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zr=null,Pr=null;function ap(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ze(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[mn]||null;if(!u)throw Error(r(90));Fi(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ae(s)}break t;case"textarea":Mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(e,!!a.multiple,n,!1)}}}var cu=!1;function rp(e,n,a){if(cu)return e(n,a);cu=!0;try{var s=e(n);return s}finally{if(cu=!1,(zr!==null||Pr!==null)&&(Wl(),zr&&(n=zr,e=Pr,Pr=zr=null,ap(n),e)))for(n=0;n<e.length;n++)ap(e[n])}}function Ws(e,n){var a=e.stateNode;if(a===null)return null;var s=a[mn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Gi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){uu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{uu=!1}var ba=null,fu=null,rl=null;function sp(){if(rl)return rl;var e,n=fu,a=n.length,s,u="value"in ba?ba.value:ba.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return rl=u.slice(e,1<s?1-s:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function op(){return!1}function In(e){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:op,this.isPropagationStopped=op,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=In(ar),Ys=g({},ar,{view:0,detail:0}),B_=In(Ys),du,hu,js,cl=g({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(du=e.screenX-js.screenX,hu=e.screenY-js.screenY):hu=du=0,js=e),du)},movementY:function(e){return"movementY"in e?e.movementY:hu}}),lp=In(cl),F_=g({},cl,{dataTransfer:0}),I_=In(F_),H_=g({},Ys,{relatedTarget:0}),pu=In(H_),G_=g({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),V_=In(G_),X_=g({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),k_=In(X_),W_=g({},ar,{data:0}),cp=In(W_),q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Y_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Z_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=j_[e])?!!n[e]:!1}function mu(){return Z_}var K_=g({},Ys,{key:function(e){if(e.key){var n=q_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Y_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Q_=In(K_),J_=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=In(J_),$_=g({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),tv=In($_),ev=g({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),nv=In(ev),iv=g({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),av=In(iv),rv=g({},ar,{newState:0,oldState:0}),sv=In(rv),ov=[9,13,27,32],xu=Gi&&"CompositionEvent"in window,Zs=null;Gi&&"documentMode"in document&&(Zs=document.documentMode);var lv=Gi&&"TextEvent"in window&&!Zs,fp=Gi&&(!xu||Zs&&8<Zs&&11>=Zs),dp=" ",hp=!1;function pp(e,n){switch(e){case"keyup":return ov.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function cv(e,n){switch(e){case"compositionend":return mp(n);case"keypress":return n.which!==32?null:(hp=!0,dp);case"textInput":return e=n.data,e===dp&&hp?null:e;default:return null}}function uv(e,n){if(Br)return e==="compositionend"||!xu&&pp(e,n)?(e=sp(),rl=fu=ba=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fp&&n.locale!=="ko"?null:n.data;default:return null}}var fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!fv[e.type]:n==="textarea"}function gp(e,n,a,s){zr?Pr?Pr.push(s):Pr=[s]:zr=s,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ks=null,Qs=null;function dv(e){$m(e,0)}function ul(e){var n=q(e);if(Ae(n))return e}function _p(e,n){if(e==="change")return n}var vp=!1;if(Gi){var gu;if(Gi){var _u="oninput"in document;if(!_u){var Sp=document.createElement("div");Sp.setAttribute("oninput","return;"),_u=typeof Sp.oninput=="function"}gu=_u}else gu=!1;vp=gu&&(!document.documentMode||9<document.documentMode)}function yp(){Ks&&(Ks.detachEvent("onpropertychange",Mp),Qs=Ks=null)}function Mp(e){if(e.propertyName==="value"&&ul(Qs)){var n=[];gp(n,Qs,e,lu(e)),rp(dv,n)}}function hv(e,n,a){e==="focusin"?(yp(),Ks=n,Qs=a,Ks.attachEvent("onpropertychange",Mp)):e==="focusout"&&yp()}function pv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Qs)}function mv(e,n){if(e==="click")return ul(n)}function xv(e,n){if(e==="input"||e==="change")return ul(n)}function gv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:gv;function Js(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Gt.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function bp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ep(e,n){var a=bp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=bp(a)}}function Tp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Tp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Sn(e.document)}return n}function vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var _v=Gi&&"documentMode"in document&&11>=document.documentMode,Fr=null,Su=null,$s=null,yu=!1;function Rp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Fr==null||Fr!==Sn(s)||(s=Fr,"selectionStart"in s&&vu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),$s&&Js($s,s)||($s=s,s=Jl(Su,"onSelect"),0<s.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Fr)))}function rr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ir={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},Mu={},Cp={};Gi&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function sr(e){if(Mu[e])return Mu[e];if(!Ir[e])return e;var n=Ir[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cp)return Mu[e]=n[a];return e}var wp=sr("animationend"),Dp=sr("animationiteration"),Up=sr("animationstart"),vv=sr("transitionrun"),Sv=sr("transitionstart"),yv=sr("transitioncancel"),Lp=sr("transitionend"),Np=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Si(e,n){Np.set(e,n),zt(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Hr=0,Eu=0;function dl(){for(var e=Hr,n=Eu=Hr=0;n<e;){var a=oi[n];oi[n++]=null;var s=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Op(a,u,f)}}function hl(e,n,a,s){oi[Hr++]=e,oi[Hr++]=n,oi[Hr++]=a,oi[Hr++]=s,Eu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Tu(e,n,a,s){return hl(e,n,a,s),pl(e)}function or(e,n){return hl(e,null,null,n),pl(e)}function Op(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-dt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function pl(e){if(50<Mo)throw Mo=0,zf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Gr={};function Mv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,s){return new Mv(e,n,a,s)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function zp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,s,u,f){var v=0;if(s=e,typeof e=="function")Au(e)&&(v=1);else if(typeof e=="string")v=RS(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case T:return lr(a.children,u,f,n);case M:v=8,u|=24;break;case _:return e=Kn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case V:return e=Kn(13,a,n,u),e.elementType=V,e.lanes=f,e;case U:return e=Kn(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:v=10;break t;case N:v=9;break t;case B:v=11;break t;case O:v=14;break t;case W:v=16,s=null;break t}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Kn(v,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function lr(e,n,a,s){return e=Kn(7,e,s,n),e.lanes=a,e}function Ru(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Pp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function Cu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Bp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Bp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ce(n)},Bp.set(e,n),n)}return{value:e,source:n,stack:Ce(n)}}var Vr=[],Xr=0,xl=null,to=0,ci=[],ui=0,Ea=null,wi=1,Di="";function Xi(e,n){Vr[Xr++]=to,Vr[Xr++]=xl,xl=e,to=n}function Fp(e,n,a){ci[ui++]=wi,ci[ui++]=Di,ci[ui++]=Ea,Ea=e;var s=wi;e=Di;var u=32-dt(s)-1;s&=~(1<<u),a+=1;var f=32-dt(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,wi=1<<32-dt(n)+u|a<<u|s,Di=f+e}else wi=1<<f|a<<u|s,Di=e}function wu(e){e.return!==null&&(Xi(e,1),Fp(e,1,0))}function Du(e){for(;e===xl;)xl=Vr[--Xr],Vr[Xr]=null,to=Vr[--Xr],Vr[Xr]=null;for(;e===Ea;)Ea=ci[--ui],ci[ui]=null,Di=ci[--ui],ci[ui]=null,wi=ci[--ui],ci[ui]=null}function Ip(e,n){ci[ui++]=wi,ci[ui++]=Di,ci[ui++]=Ea,wi=n.id,Di=n.overflow,Ea=e}var Rn=null,Qe=null,Re=!1,Ta=null,fi=!1,Uu=Error(r(519));function Aa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(li(n,e)),Uu}function Hp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[ln]=e,n[mn]=s,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)Se(Eo[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Ke(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),An(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ix(n.textContent,a)?(s.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),s.onScroll!=null&&Se("scroll",n),s.onScrollEnd!=null&&Se("scrollend",n),s.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||Aa(e,!0)}function Gp(e){for(Rn=e.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Rn=Rn.return}}function kr(e){if(e!==Rn)return!1;if(!Re)return Gp(e),Re=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kf(e.type,e.memoizedProps)),a=!a),a&&Qe&&Aa(e),Gp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=dx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=dx(e)}else n===27?(n=Qe,Ha(e.type)?(e=ed,ed=null,Qe=e):Qe=n):Qe=Rn?hi(e.stateNode.nextSibling):null;return!0}function cr(){Qe=Rn=null,Re=!1}function Lu(){var e=Ta;return e!==null&&(Xn===null?Xn=e:Xn.push.apply(Xn,e),Ta=null),e}function eo(e){Ta===null?Ta=[e]:Ta.push(e)}var Nu=z(null),ur=null,ki=null;function Ra(e,n,a){Rt(Nu,n._currentValue),n._currentValue=a}function Wi(e){e._currentValue=Nu.current,at(Nu)}function Ou(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function zu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ou(f.return,a,e),s||(v=null);break t}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Ou(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Wr(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var A=u.type;Zn(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===ot.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&zu(n,e,a,s),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){ur=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return Vp(ur,e)}function _l(e,n){return ur===null&&fr(e),Vp(e,n)}function Vp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(r(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var bv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ev=o.unstable_scheduleCallback,Tv=o.unstable_NormalPriority,cn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new bv,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&Ev(Tv,function(){e.controller.abort()})}var io=null,Bu=0,qr=0,Yr=null;function Av(e,n){if(io===null){var a=io=[];Bu=0,qr=Gf(),Yr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Bu++,n.then(Xp,Xp),n}function Xp(){if(--Bu===0&&io!==null){Yr!==null&&(Yr.status="fulfilled");var e=io;io=null,qr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Rv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var kp=P.S;P.S=function(e,n){Rm=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Av(e,n),kp!==null&&kp(e,n)};var dr=z(null);function Fu(){var e=dr.current;return e!==null?e:je.pooledCache}function vl(e,n){n===null?Rt(dr,dr.current):Rt(dr,n.pool)}function Wp(){var e=Fu();return e===null?null:{parent:cn._currentValue,pool:e}}var jr=Error(r(460)),Iu=Error(r(474)),Sl=Error(r(542)),yl={then:function(){}};function qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Yp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Zp(e),e}throw pr=n,jr}}function hr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pr=a,jr):a}}var pr=null;function jp(){if(pr===null)throw Error(r(459));var e=pr;return pr=null,e}function Zp(e){if(e===jr||e===Sl)throw Error(r(483))}var Zr=null,ao=0;function Ml(e){var n=ao;return ao+=1,Zr===null&&(Zr=[]),Yp(Zr,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Kp(e){function n(j,X){if(e){var $=j.deletions;$===null?(j.deletions=[X],j.flags|=16):$.push(X)}}function a(j,X){if(!e)return null;for(;X!==null;)n(j,X),X=X.sibling;return null}function s(j){for(var X=new Map;j!==null;)j.key!==null?X.set(j.key,j):X.set(j.index,j),j=j.sibling;return X}function u(j,X){return j=Vi(j,X),j.index=0,j.sibling=null,j}function f(j,X,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<X?(j.flags|=67108866,X):$):(j.flags|=67108866,X)):(j.flags|=1048576,X)}function v(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,X,$,xt){return X===null||X.tag!==6?(X=Ru($,j.mode,xt),X.return=j,X):(X=u(X,$),X.return=j,X)}function I(j,X,$,xt){var $t=$.type;return $t===T?ht(j,X,$.props.children,xt,$.key):X!==null&&(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&hr($t)===X.type)?(X=u(X,$.props),ro(X,$),X.return=j,X):(X=ml($.type,$.key,$.props,null,j.mode,xt),ro(X,$),X.return=j,X)}function tt(j,X,$,xt){return X===null||X.tag!==4||X.stateNode.containerInfo!==$.containerInfo||X.stateNode.implementation!==$.implementation?(X=Cu($,j.mode,xt),X.return=j,X):(X=u(X,$.children||[]),X.return=j,X)}function ht(j,X,$,xt,$t){return X===null||X.tag!==7?(X=lr($,j.mode,xt,$t),X.return=j,X):(X=u(X,$),X.return=j,X)}function St(j,X,$){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ru(""+X,j.mode,$),X.return=j,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return $=ml(X.type,X.key,X.props,null,j.mode,$),ro($,X),$.return=j,$;case b:return X=Cu(X,j.mode,$),X.return=j,X;case W:return X=hr(X),St(j,X,$)}if(ut(X)||Q(X))return X=lr(X,j.mode,$,null),X.return=j,X;if(typeof X.then=="function")return St(j,Ml(X),$);if(X.$$typeof===D)return St(j,_l(j,X),$);bl(j,X)}return null}function it(j,X,$,xt){var $t=X!==null?X.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $t!==null?null:A(j,X,""+$,xt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===$t?I(j,X,$,xt):null;case b:return $.key===$t?tt(j,X,$,xt):null;case W:return $=hr($),it(j,X,$,xt)}if(ut($)||Q($))return $t!==null?null:ht(j,X,$,xt,null);if(typeof $.then=="function")return it(j,X,Ml($),xt);if($.$$typeof===D)return it(j,X,_l(j,$),xt);bl(j,$)}return null}function lt(j,X,$,xt,$t){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return j=j.get($)||null,A(X,j,""+xt,$t);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return j=j.get(xt.key===null?$:xt.key)||null,I(X,j,xt,$t);case b:return j=j.get(xt.key===null?$:xt.key)||null,tt(X,j,xt,$t);case W:return xt=hr(xt),lt(j,X,$,xt,$t)}if(ut(xt)||Q(xt))return j=j.get($)||null,ht(X,j,xt,$t,null);if(typeof xt.then=="function")return lt(j,X,$,Ml(xt),$t);if(xt.$$typeof===D)return lt(j,X,$,_l(X,xt),$t);bl(X,xt)}return null}function kt(j,X,$,xt){for(var $t=null,ze=null,qt=X,me=X=0,be=null;qt!==null&&me<$.length;me++){qt.index>me?(be=qt,qt=null):be=qt.sibling;var Pe=it(j,qt,$[me],xt);if(Pe===null){qt===null&&(qt=be);break}e&&qt&&Pe.alternate===null&&n(j,qt),X=f(Pe,X,me),ze===null?$t=Pe:ze.sibling=Pe,ze=Pe,qt=be}if(me===$.length)return a(j,qt),Re&&Xi(j,me),$t;if(qt===null){for(;me<$.length;me++)qt=St(j,$[me],xt),qt!==null&&(X=f(qt,X,me),ze===null?$t=qt:ze.sibling=qt,ze=qt);return Re&&Xi(j,me),$t}for(qt=s(qt);me<$.length;me++)be=lt(qt,j,me,$[me],xt),be!==null&&(e&&be.alternate!==null&&qt.delete(be.key===null?me:be.key),X=f(be,X,me),ze===null?$t=be:ze.sibling=be,ze=be);return e&&qt.forEach(function(Wa){return n(j,Wa)}),Re&&Xi(j,me),$t}function ae(j,X,$,xt){if($==null)throw Error(r(151));for(var $t=null,ze=null,qt=X,me=X=0,be=null,Pe=$.next();qt!==null&&!Pe.done;me++,Pe=$.next()){qt.index>me?(be=qt,qt=null):be=qt.sibling;var Wa=it(j,qt,Pe.value,xt);if(Wa===null){qt===null&&(qt=be);break}e&&qt&&Wa.alternate===null&&n(j,qt),X=f(Wa,X,me),ze===null?$t=Wa:ze.sibling=Wa,ze=Wa,qt=be}if(Pe.done)return a(j,qt),Re&&Xi(j,me),$t;if(qt===null){for(;!Pe.done;me++,Pe=$.next())Pe=St(j,Pe.value,xt),Pe!==null&&(X=f(Pe,X,me),ze===null?$t=Pe:ze.sibling=Pe,ze=Pe);return Re&&Xi(j,me),$t}for(qt=s(qt);!Pe.done;me++,Pe=$.next())Pe=lt(qt,j,me,Pe.value,xt),Pe!==null&&(e&&Pe.alternate!==null&&qt.delete(Pe.key===null?me:Pe.key),X=f(Pe,X,me),ze===null?$t=Pe:ze.sibling=Pe,ze=Pe);return e&&qt.forEach(function(FS){return n(j,FS)}),Re&&Xi(j,me),$t}function We(j,X,$,xt){if(typeof $=="object"&&$!==null&&$.type===T&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:t:{for(var $t=$.key;X!==null;){if(X.key===$t){if($t=$.type,$t===T){if(X.tag===7){a(j,X.sibling),xt=u(X,$.props.children),xt.return=j,j=xt;break t}}else if(X.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===W&&hr($t)===X.type){a(j,X.sibling),xt=u(X,$.props),ro(xt,$),xt.return=j,j=xt;break t}a(j,X);break}else n(j,X);X=X.sibling}$.type===T?(xt=lr($.props.children,j.mode,xt,$.key),xt.return=j,j=xt):(xt=ml($.type,$.key,$.props,null,j.mode,xt),ro(xt,$),xt.return=j,j=xt)}return v(j);case b:t:{for($t=$.key;X!==null;){if(X.key===$t)if(X.tag===4&&X.stateNode.containerInfo===$.containerInfo&&X.stateNode.implementation===$.implementation){a(j,X.sibling),xt=u(X,$.children||[]),xt.return=j,j=xt;break t}else{a(j,X);break}else n(j,X);X=X.sibling}xt=Cu($,j.mode,xt),xt.return=j,j=xt}return v(j);case W:return $=hr($),We(j,X,$,xt)}if(ut($))return kt(j,X,$,xt);if(Q($)){if($t=Q($),typeof $t!="function")throw Error(r(150));return $=$t.call($),ae(j,X,$,xt)}if(typeof $.then=="function")return We(j,X,Ml($),xt);if($.$$typeof===D)return We(j,X,_l(j,$),xt);bl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,X!==null&&X.tag===6?(a(j,X.sibling),xt=u(X,$),xt.return=j,j=xt):(a(j,X),xt=Ru($,j.mode,xt),xt.return=j,j=xt),v(j)):a(j,X)}return function(j,X,$,xt){try{ao=0;var $t=We(j,X,$,xt);return Zr=null,$t}catch(qt){if(qt===jr||qt===Sl)throw qt;var ze=Kn(29,qt,null,j.mode);return ze.lanes=xt,ze.return=j,ze}finally{}}}var mr=Kp(!0),Qp=Kp(!1),Ca=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Fe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=pl(e),Op(e,null,a),n}return hl(e,s,n,a),pl(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Sa(e,a)}}function Vu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Xu=!1;function oo(){if(Xu){var e=Yr;if(e!==null)throw e}}function lo(e,n,a,s){Xu=!1;var u=e.updateQueue;Ca=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,tt=I.next;I.next=null,v===null?f=tt:v.next=tt,v=I;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==v&&(A===null?ht.firstBaseUpdate=tt:A.next=tt,ht.lastBaseUpdate=I))}if(f!==null){var St=u.baseState;v=0,ht=tt=I=null,A=f;do{var it=A.lane&-536870913,lt=it!==A.lane;if(lt?(Me&it)===it:(s&it)===it){it!==0&&it===qr&&(Xu=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var kt=e,ae=A;it=n;var We=a;switch(ae.tag){case 1:if(kt=ae.payload,typeof kt=="function"){St=kt.call(We,St,it);break t}St=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ae.payload,it=typeof kt=="function"?kt.call(We,St,it):kt,it==null)break t;St=g({},St,it);break t;case 2:Ca=!0}}it=A.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(tt=ht=lt,I=St):ht=ht.next=lt,v|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ht===null&&(I=St),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),za|=v,e.lanes=v,e.memoizedState=St}}function Jp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function $p(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Jp(a[e],n)}var Kr=z(null),El=z(0);function t0(e,n){e=ta,Rt(El,e),Rt(Kr,n),ta=e|n.baseLanes}function ku(){Rt(El,ta),Rt(Kr,Kr.current)}function Wu(){ta=El.current,at(Kr),at(El)}var Qn=z(null),di=null;function Ua(e){var n=e.alternate;Rt(sn,sn.current&1),Rt(Qn,e),di===null&&(n===null||Kr.current!==null||n.memoizedState!==null)&&(di=e)}function qu(e){Rt(sn,sn.current),Rt(Qn,e),di===null&&(di=e)}function e0(e){e.tag===22?(Rt(sn,sn.current),Rt(Qn,e),di===null&&(di=e)):La()}function La(){Rt(sn,sn.current),Rt(Qn,Qn.current)}function Jn(e){at(Qn),di===e&&(di=null),at(sn)}var sn=z(0);function Tl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$f(a)||td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,he=null,Xe=null,un=null,Al=!1,Qr=!1,xr=!1,Rl=0,co=0,Jr=null,Cv=0;function nn(){throw Error(r(321))}function Yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function ju(e,n,a,s,u,f){return qi=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?F0:uf,xr=!1,f=a(s,u),xr=!1,Qr&&(f=i0(n,a,s,u)),n0(e),f}function n0(e){P.H=ho;var n=Xe!==null&&Xe.next!==null;if(qi=0,un=Xe=he=null,Al=!1,co=0,Jr=null,n)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&gl(e)&&(fn=!0))}function i0(e,n,a,s){he=e;var u=0;do{if(Qr&&(Jr=null),co=0,Qr=!1,25<=u)throw Error(r(301));if(u+=1,un=Xe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=I0,f=n(a,s)}while(Qr);return f}function wv(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(he.flags|=1024),n}function Zu(){var e=Rl!==0;return Rl=0,e}function Ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Qu(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}qi=0,un=Xe=he=null,Qr=!1,co=Rl=0,Jr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?he.memoizedState=un=e:un=un.next=e,un}function on(){if(Xe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=un===null?he.memoizedState:un.next;if(n!==null)un=n,Xe=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},un===null?he.memoizedState=un=e:un=un.next=e}return un}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=co;return co+=1,Jr===null&&(Jr=[]),e=Yp(Jr,e,n),n=he,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?F0:uf),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===D)return Cn(e)}throw Error(r(438,String(e)))}function Ju(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=on();return $u(n,Xe,e)}function $u(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,I=null,tt=n,ht=!1;do{var St=tt.lane&-536870913;if(St!==tt.lane?(Me&St)===St:(qi&St)===St){var it=tt.revertLane;if(it===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),St===qr&&(ht=!0);else if((qi&it)===it){tt=tt.next,it===qr&&(ht=!0);continue}else St={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=St,v=f):I=I.next=St,he.lanes|=it,za|=it;St=tt.action,xr&&a(f,St),f=tt.hasEagerState?tt.eagerState:a(f,St)}else it={lane:St,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=it,v=f):I=I.next=it,he.lanes|=St,za|=St;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?v=f:I.next=A,!Zn(f,e.memoizedState)&&(fn=!0,ht&&(a=Yr,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=I,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function tf(e){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function a0(e,n,a){var s=he,u=on(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!Zn((Xe||u).memoizedState,a);if(v&&(u.memoizedState=a,fn=!0),u=u.queue,af(o0.bind(null,s,u,e),[e]),u.getSnapshot!==n||v||un!==null&&un.memoizedState.tag&1){if(s.flags|=2048,$r(9,{destroy:void 0},s0.bind(null,s,u,a,n),null),je===null)throw Error(r(349));f||(qi&127)!==0||r0(s,n,a)}return a}function r0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Cl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function s0(e,n,a,s){n.value=a,n.getSnapshot=s,l0(n)&&c0(e)}function o0(e,n,a){return a(function(){l0(n)&&c0(e)})}function l0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function c0(e){var n=or(e,2);n!==null&&kn(n,e,2)}function ef(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),xr){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function u0(e,n,a,s){return e.baseState=a,$u(e,Xe,typeof s=="function"?s:Yi)}function Dv(e,n,a,s,u){if(Nl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,f0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function f0(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=P.T,v={};P.T=v;try{var A=a(u,s),I=P.S;I!==null&&I(v,A),d0(e,n,A)}catch(tt){nf(e,n,tt)}finally{f!==null&&v.types!==null&&(f.types=v.types),P.T=f}}else try{f=a(u,s),d0(e,n,f)}catch(tt){nf(e,n,tt)}}function d0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){h0(e,n,s)},function(s){return nf(e,n,s)}):h0(e,n,a)}function h0(e,n,a){n.status="fulfilled",n.value=a,p0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,f0(e,a)))}function nf(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,p0(n),n=n.next;while(n!==s)}e.action=null}function p0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function m0(e,n){return n}function x0(e,n){if(Re){var a=je.formState;if(a!==null){t:{var s=he;if(Re){if(Qe){e:{for(var u=Qe,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=hi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=hi(u.nextSibling),s=u.data==="F!";break t}}Aa(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:m0,lastRenderedState:n},a.queue=s,a=z0.bind(null,he,s),s.dispatch=a,s=ef(!1),f=cf.bind(null,he,!1,s.queue),s=Pn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=Dv.bind(null,he,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function g0(e){var n=on();return _0(n,Xe,e)}function _0(e,n,a){if(n=$u(e,n,m0)[0],e=Dl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=uo(n)}catch(v){throw v===jr?Sl:v}else s=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,$r(9,{destroy:void 0},Uv.bind(null,u,a),null)),[s,f,e]}function Uv(e,n){e.action=n}function v0(e){var n=on(),a=Xe;if(a!==null)return _0(n,a,e);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function $r(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Cl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function S0(){return on().memoizedState}function Ul(e,n,a,s){var u=Pn();he.flags|=e,u.memoizedState=$r(1|n,{destroy:void 0},a,s===void 0?null:s)}function Ll(e,n,a,s){var u=on();s=s===void 0?null:s;var f=u.memoizedState.inst;Xe!==null&&s!==null&&Yu(s,Xe.memoizedState.deps)?u.memoizedState=$r(n,f,a,s):(he.flags|=e,u.memoizedState=$r(1|n,f,a,s))}function y0(e,n){Ul(8390656,8,e,n)}function af(e,n){Ll(2048,8,e,n)}function Lv(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=Cl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function M0(e){var n=on().memoizedState;return Lv({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function b0(e,n){return Ll(4,2,e,n)}function E0(e,n){return Ll(4,4,e,n)}function T0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function A0(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,T0.bind(null,n,e),a)}function rf(){}function R0(e,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Yu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function C0(e,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Yu(n,s[1]))return s[0];if(s=e(),xr){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[s,n],s}function sf(e,n,a){return a===void 0||(qi&1073741824)!==0&&(Me&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=wm(),he.lanes|=e,za|=e,a)}function w0(e,n,a,s){return Zn(a,n)?a:Kr.current!==null?(e=sf(e,a,s),Zn(e,n)||(fn=!0),e):(qi&42)===0||(qi&1073741824)!==0&&(Me&261930)===0?(fn=!0,e.memoizedState=a):(e=wm(),he.lanes|=e,za|=e,n)}function D0(e,n,a,s,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var v=P.T,A={};P.T=A,cf(e,!1,n,a);try{var I=u(),tt=P.S;if(tt!==null&&tt(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ht=Rv(I,s);fo(e,n,ht,ei(e))}else fo(e,n,s,ei(e))}catch(St){fo(e,n,{then:function(){},status:"rejected",reason:St},ei())}finally{Y.p=f,v!==null&&A.types!==null&&(v.types=A.types),P.T=v}}function Nv(){}function of(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=U0(e).queue;D0(e,u,n,k,a===null?Nv:function(){return L0(e),a(s)})}function U0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function L0(e){var n=U0(e);n.next===null&&(n=e.alternate.memoizedState),fo(e,n.next.queue,{},ei())}function lf(){return Cn(wo)}function N0(){return on().memoizedState}function O0(){return on().memoizedState}function Ov(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=wa(a);var s=Da(n,e,a);s!==null&&(kn(s,n,a),so(s,n,a)),n={cache:Pu()},e.payload=n;return}n=n.return}}function zv(e,n,a){var s=ei();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?P0(n,a):(a=Tu(e,n,a,s),a!==null&&(kn(a,e,s),B0(a,n,s)))}function z0(e,n,a){var s=ei();fo(e,n,a,s)}function fo(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))P0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,v))return hl(e,n,u,0),je===null&&dl(),!1}catch{}finally{}if(a=Tu(e,n,u,s),a!==null)return kn(a,e,s),B0(a,n,s),!0}return!1}function cf(e,n,a,s){if(s={lane:2,revertLane:Gf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(r(479))}else n=Tu(e,a,s,2),n!==null&&kn(n,e,2)}function Nl(e){var n=e.alternate;return e===he||n!==null&&n===he}function P0(e,n){Qr=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function B0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Sa(e,a)}}var ho={readContext:Cn,use:wl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};ho.useEffectEvent=nn;var F0={readContext:Cn,use:wl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:Cn,useEffect:y0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,T0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var s=e();if(xr){Kt(!0);try{e()}finally{Kt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Pn();if(a!==void 0){var u=a(n);if(xr){Kt(!0);try{a(n)}finally{Kt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=zv.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=ef(e);var n=e.queue,a=z0.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(e,n){var a=Pn();return sf(a,e,n)},useTransition:function(){var e=ef(!1);return e=D0.bind(null,he,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=he,u=Pn();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(Me&127)!==0||r0(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,y0(o0.bind(null,s,f,e),[e]),s.flags|=2048,$r(9,{destroy:void 0},s0.bind(null,s,f,a,n),null),a},useId:function(){var e=Pn(),n=je.identifierPrefix;if(Re){var a=Di,s=wi;a=(s&~(1<<32-dt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Cv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lf,useFormState:x0,useActionState:x0,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ju,useCacheRefresh:function(){return Pn().memoizedState=Ov.bind(null,he)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},uf={readContext:Cn,use:wl,useCallback:R0,useContext:Cn,useEffect:af,useImperativeHandle:A0,useInsertionEffect:b0,useLayoutEffect:E0,useMemo:C0,useReducer:Dl,useRef:S0,useState:function(){return Dl(Yi)},useDebugValue:rf,useDeferredValue:function(e,n){var a=on();return w0(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Dl(Yi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:a0,useId:N0,useHostTransitionStatus:lf,useFormState:g0,useActionState:g0,useOptimistic:function(e,n){var a=on();return u0(a,Xe,e,n)},useMemoCache:Ju,useCacheRefresh:O0};uf.useEffectEvent=M0;var I0={readContext:Cn,use:wl,useCallback:R0,useContext:Cn,useEffect:af,useImperativeHandle:A0,useInsertionEffect:b0,useLayoutEffect:E0,useMemo:C0,useReducer:tf,useRef:S0,useState:function(){return tf(Yi)},useDebugValue:rf,useDeferredValue:function(e,n){var a=on();return Xe===null?sf(a,e,n):w0(a,Xe.memoizedState,e,n)},useTransition:function(){var e=tf(Yi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:a0,useId:N0,useHostTransitionStatus:lf,useFormState:v0,useActionState:v0,useOptimistic:function(e,n){var a=on();return Xe!==null?u0(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:O0};I0.useEffectEvent=M0;function ff(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ei(),u=wa(s);u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,s),n!==null&&(kn(n,e,s),so(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ei(),u=wa(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Da(e,u,s),n!==null&&(kn(n,e,s),so(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),s=wa(a);s.tag=2,n!=null&&(s.callback=n),n=Da(e,s,a),n!==null&&(kn(n,e,a),so(n,e,a))}};function H0(e,n,a,s,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!Js(a,s)||!Js(u,f):!0}function G0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&df.enqueueReplaceState(n,n.state,null)}function gr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function V0(e){fl(e)}function X0(e){console.error(e)}function k0(e){fl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function W0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(e,n,a){return a=wa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function q0(e){return e=wa(e),e.tag=3,e}function Y0(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){W0(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){W0(n,a,s),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Pv(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Wr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return di===null?ql():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ff(e,s,u)),!1;case 22:return a.flags|=65536,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ff(e,s,u)),!1}throw Error(r(435,a.tag))}return Ff(e,s,u),ql(),!1}if(Re)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Uu&&(e=Error(r(422),{cause:s}),eo(li(e,a)))):(s!==Uu&&(n=Error(r(423),{cause:s}),eo(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=li(s,a),u=hf(e.stateNode,s,u),Vu(e,u),an!==4&&(an=2)),!1;var f=Error(r(520),{cause:s});if(f=li(f,a),yo===null?yo=[f]:yo.push(f),an!==4&&(an=2),n===null)return!0;s=li(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=hf(a.stateNode,s,e),Vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Pa===null||!Pa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=q0(u),Y0(u,e,a,s),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var pf=Error(r(461)),fn=!1;function wn(e,n,a,s){n.child=e===null?Qp(n,null,a,s):mr(n,e.child,a,s)}function j0(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var A in s)A!=="ref"&&(v[A]=s[A])}else v=s;return fr(n),s=ju(e,n,a,v,f,u),A=Zu(),e!==null&&!fn?(Ku(e,n,u),ji(e,n,u)):(Re&&A&&wu(n),n.flags|=1,wn(e,n,s,u),n.child)}function Z0(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,K0(e,n,f,s,u)):(e=ml(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Mf(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Js,a(v,s)&&e.ref===n.ref)return ji(e,n,u)}return n.flags|=1,e=Vi(f,s),e.ref=n.ref,e.return=n,n.child=e}function K0(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Js(f,s)&&e.ref===n.ref)if(fn=!1,n.pendingProps=s=f,Mf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,ji(e,n,u)}return mf(e,n,a,s,u)}function Q0(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return J0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?t0(n,f):ku(),e0(n);else return s=n.lanes=536870912,J0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(vl(n,f.cachePool),t0(n,f),La(),n.memoizedState=null):(e!==null&&vl(n,null),ku(),La());return wn(e,n,u,a),n.child}function po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function J0(e,n,a,s,u){var f=Fu();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&vl(n,null),ku(),e0(n),e!==null&&Wr(e,n,s,!0),n.childLanes=u,null}function zl(e,n){return n=Bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function $0(e,n,a){return mr(n,e.child,null,a),e=zl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function Bv(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Re){if(s.mode==="hidden")return e=zl(n,s),n.lanes=536870912,po(null,e);if(qu(n),(e=Qe)?(e=fx(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Pp(e),a.return=n,n.child=a,Rn=n,Qe=null)):e=null,e===null)throw Aa(n);return n.lanes=536870912,null}return zl(n,s)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=$0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Wr(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(s=je,s!==null&&(v=Gs(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,or(e,v),kn(s,e,v),pf;ql(),n=$0(e,n,a)}else e=f.treeContext,Qe=hi(v.nextSibling),Rn=n,Re=!0,Ta=null,fi=!1,e!==null&&Ip(n,e),n=zl(n,s),n.flags|=4096;return n}return e=Vi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mf(e,n,a,s,u){return fr(n),a=ju(e,n,a,s,void 0,u),s=Zu(),e!==null&&!fn?(Ku(e,n,u),ji(e,n,u)):(Re&&s&&wu(n),n.flags|=1,wn(e,n,a,u),n.child)}function tm(e,n,a,s,u,f){return fr(n),n.updateQueue=null,a=i0(n,s,a,u),n0(e),s=Zu(),e!==null&&!fn?(Ku(e,n,f),ji(e,n,f)):(Re&&s&&wu(n),n.flags|=1,wn(e,n,a,f),n.child)}function em(e,n,a,s,u){if(fr(n),n.stateNode===null){var f=Gr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Cn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Hu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Cn(v):Gr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(ff(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&df.enqueueReplaceState(f,f.state,null),lo(n,s,f,u),oo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,I=gr(a,A);f.props=I;var tt=f.context,ht=a.contextType;v=Gr,typeof ht=="object"&&ht!==null&&(v=Cn(ht));var St=a.getDerivedStateFromProps;ht=typeof St=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||tt!==v)&&G0(n,f,s,v),Ca=!1;var it=n.memoizedState;f.state=it,lo(n,s,f,u),oo(),tt=n.memoizedState,A||it!==tt||Ca?(typeof St=="function"&&(ff(n,a,St,s),tt=n.memoizedState),(I=Ca||H0(n,a,I,s,it,tt,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=tt),f.props=s,f.state=tt,f.context=v,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Gu(e,n),v=n.memoizedProps,ht=gr(a,v),f.props=ht,St=n.pendingProps,it=f.context,tt=a.contextType,I=Gr,typeof tt=="object"&&tt!==null&&(I=Cn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==St||it!==I)&&G0(n,f,s,I),Ca=!1,it=n.memoizedState,f.state=it,lo(n,s,f,u),oo();var lt=n.memoizedState;v!==St||it!==lt||Ca||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof A=="function"&&(ff(n,a,A,s),lt=n.memoizedState),(ht=Ca||H0(n,a,ht,s,it,lt,I)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,lt,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,lt,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=lt),f.props=s,f.state=lt,f.context=I,s=ht):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Pl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=mr(n,e.child,null,u),n.child=mr(n,null,a,u)):wn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ji(e,n,u),e}function nm(e,n,a,s){return cr(),n.flags|=256,wn(e,n,a,s),n.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(e){return{baseLanes:e,cachePool:Wp()}}function _f(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function im(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Re){if(u?Ua(n):La(),(e=Qe)?(e=fx(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ea!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Pp(e),a.return=n,n.child=a,Rn=n,Qe=null)):e=null,e===null)throw Aa(n);return td(e)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,u?(La(),u=n.mode,A=Bl({mode:"hidden",children:A},u),s=lr(s,u,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=gf(a),s.childLanes=_f(e,v,a),n.memoizedState=xf,po(null,s)):(Ua(n),vf(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(f)n.flags&256?(Ua(n),n.flags&=-257,n=Sf(e,n,a)):n.memoizedState!==null?(La(),n.child=e.child,n.flags|=128,n=null):(La(),A=s.fallback,u=n.mode,s=Bl({mode:"visible",children:s.children},u),A=lr(A,u,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,mr(n,e.child,null,a),s=n.child,s.memoizedState=gf(a),s.childLanes=_f(e,v,a),n.memoizedState=xf,n=po(null,s));else if(Ua(n),td(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var tt=v.dgst;v=tt,s=Error(r(419)),s.stack="",s.digest=v,eo({value:s,source:null,stack:null}),n=Sf(e,n,a)}else if(fn||Wr(e,n,a,!1),v=(a&e.childLanes)!==0,fn||v){if(v=je,v!==null&&(s=Gs(v,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,or(e,s),kn(v,e,s),pf;$f(A)||ql(),n=Sf(e,n,a)}else $f(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Qe=hi(A.nextSibling),Rn=n,Re=!0,Ta=null,fi=!1,e!==null&&Ip(n,e),n=vf(n,s.children),n.flags|=4096);return n}return u?(La(),A=s.fallback,u=n.mode,I=e.child,tt=I.sibling,s=Vi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,tt!==null?A=Vi(tt,A):(A=lr(A,u,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,po(null,s),s=n.child,A=e.child.memoizedState,A===null?A=gf(a):(u=A.cachePool,u!==null?(I=cn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Wp(),A={baseLanes:A.baseLanes|a,cachePool:u}),s.memoizedState=A,s.childLanes=_f(e,v,a),n.memoizedState=xf,po(e.child,s)):(Ua(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function vf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function Sf(e,n,a){return mr(n,e.child,null,a),e=vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function am(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ou(e.return,n,a)}function yf(e,n,a,s,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function rm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=sn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,Rt(sn,v),wn(e,n,s,a),s=Re?to:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&am(e,a,n);else if(e.tag===19)am(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Tl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Tl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}yf(n,!0,a,null,f,s);break;case"together":yf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ji(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Wr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function Fv(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Ra(n,cn,e.memoizedState.cache),cr();break;case 27:case 5:Lt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Ra(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ua(n),n.flags|=128,null):(a&n.child.childLanes)!==0?im(e,n,a):(Ua(n),e=ji(e,n,a),e!==null?e.sibling:null);Ua(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Wr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return rm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Rt(sn,sn.current),s)break;return null;case 22:return n.lanes=0,Q0(e,n,a,n.pendingProps);case 24:Ra(n,cn,e.memoizedState.cache)}return ji(e,n,a)}function sm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!Mf(e,a)&&(n.flags&128)===0)return fn=!1,Fv(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Re&&(n.flags&1048576)!==0&&Fp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=hr(n.elementType),n.type=e,typeof e=="function")Au(e)?(s=gr(e,s),n.tag=1,n=em(null,n,e,s,a)):(n.tag=0,n=mf(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===B){n.tag=11,n=j0(null,n,e,s,a);break t}else if(u===O){n.tag=14,n=Z0(null,n,e,s,a);break t}}throw n=mt(e)||e,Error(r(306,n,""))}}return n;case 0:return mf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=gr(s,n.pendingProps),em(e,n,s,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Gu(e,n),lo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ra(n,cn,s),s!==f.cache&&zu(n,[cn],a,!0),oo(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=nm(e,n,s,a);break t}else if(s!==u){u=li(Error(r(424)),n),eo(u),n=nm(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=hi(e.firstChild),Rn=n,Re=!0,Ta=null,fi=!0,a=Qp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cr(),s===u){n=ji(e,n,a);break t}wn(e,n,s,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=gx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,e=n.pendingProps,s=$l(K.current).createElement(a),s[ln]=n,s[mn]=e,Dn(s,a,e),nt(s),n.stateNode=s):n.memoizedState=gx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Lt(n),e===null&&Re&&(s=n.stateNode=px(n.type,n.pendingProps,K.current),Rn=n,fi=!0,u=Qe,Ha(n.type)?(ed=u,Qe=hi(s.firstChild)):Qe=u),wn(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Re&&((u=s=Qe)&&(s=pS(s,n.type,n.pendingProps,fi),s!==null?(n.stateNode=s,Rn=n,Qe=hi(s.firstChild),fi=!1,u=!0):u=!1),u||Aa(n)),Lt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,Kf(u,f)?s=null:v!==null&&Kf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(e,n,wv,null,null,a),wo._currentValue=u),Pl(e,n),wn(e,n,s,a),n.child;case 6:return e===null&&Re&&((e=a=Qe)&&(a=mS(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Rn=n,Qe=null,e=!0):e=!1),e||Aa(n)),null;case 13:return im(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=mr(n,null,s,a):wn(e,n,s,a),n.child;case 11:return j0(e,n,n.type,n.pendingProps,a);case 7:return wn(e,n,n.pendingProps,a),n.child;case 8:return wn(e,n,n.pendingProps.children,a),n.child;case 12:return wn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ra(n,n.type,s.value),wn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,fr(n),u=Cn(u),s=s(u),n.flags|=1,wn(e,n,s,a),n.child;case 14:return Z0(e,n,n.type,n.pendingProps,a);case 15:return K0(e,n,n.type,n.pendingProps,a);case 19:return rm(e,n,a);case 31:return Bv(e,n,a);case 22:return Q0(e,n,a,n.pendingProps);case 24:return fr(n),s=Cn(cn),e===null?(u=Fu(),u===null&&(u=je,f=Pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Hu(n),Ra(n,cn,u)):((e.lanes&a)!==0&&(Gu(e,n),lo(n,null,null,a),oo()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ra(n,cn,s)):(s=f.cache,Ra(n,cn,s),s!==u.cache&&zu(n,[cn],a,!0))),wn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Zi(e){e.flags|=4}function bf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Nm())e.flags|=8192;else throw pr=yl,Iu}else e.flags&=-16777217}function om(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mx(n))if(Nm())e.flags|=8192;else throw pr=yl,Iu}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Le():536870912,e.lanes|=n,is|=n)}function mo(e,n){if(!Re)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Iv(e,n,a){var s=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Wi(cn),Pt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(kr(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Zi(n),f!==null?(Je(n),om(n,f)):(Je(n),bf(n,u,null,s,a))):f?f!==e.memoizedState?(Zi(n),Je(n),om(n,f)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Zi(n),Je(n),bf(n,u,e,s,a)),null;case 27:if(te(n),a=K.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}e=wt.current,kr(n)?Hp(n):(e=px(u,s,a),n.stateNode=e,Zi(n))}return Je(n),null;case 5:if(te(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(f=wt.current,kr(n))Hp(n);else{var v=$l(K.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[ln]=n,f[mn]=s;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(Dn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Zi(n)}}return Je(n),bf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Zi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=K.current,kr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ix(e.nodeValue,a)),e||Aa(n,!0)}else e=$l(e).createTextNode(s),e[ln]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=kr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ln]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=kr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Je(n),null);case 4:return Pt(),e===null&&Wf(n.stateNode.containerInfo),Je(n),null;case 10:return Wi(n.type),Je(n),null;case 19:if(at(sn),s=n.memoizedState,s===null)return Je(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)mo(s,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Tl(e),f!==null){for(n.flags|=128,mo(s,!1),e=f.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)zp(a,e),a=a.sibling;return Rt(sn,sn.current&1|2),Re&&Xi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>Xl&&(n.flags|=128,u=!0,mo(s,!1),n.lanes=4194304)}else{if(!u)if(e=Tl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Re)return Je(n),null}else 2*E()-s.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,mo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=sn.current,Rt(sn,u?a&1|2:a&1),Re&&Xi(n,s.treeForkCount),e):(Je(n),null);case 22:case 23:return Jn(n),Wu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&at(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Wi(cn),Je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Hv(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Wi(cn),Pt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return te(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(sn),null;case 4:return Pt(),null;case 10:return Wi(n.type),null;case 22:case 23:return Jn(n),Wu(),e!==null&&at(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Wi(cn),null;case 25:return null;default:return null}}function lm(e,n){switch(Du(n),n.tag){case 3:Wi(cn),Pt();break;case 26:case 27:case 5:te(n);break;case 4:Pt();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:at(sn);break;case 10:Wi(n.type);break;case 22:case 23:Jn(n),Wu(),e!==null&&at(dr);break;case 24:Wi(cn)}}function xo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Na(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var v=s.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var I=a,tt=A;try{tt()}catch(ht){Ge(u,I,ht)}}}s=s.next}while(s!==f)}}catch(ht){Ge(n,n.return,ht)}}function cm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{$p(n,a)}catch(s){Ge(e,e.return,s)}}}function um(e,n,a){a.props=gr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(e,n,s)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Ge(e,n,u)}}function Ui(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function fm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Ef(e,n,a){try{var s=e.stateNode;lS(s,e.type,a,n),s[mn]=n}catch(u){Ge(e,e.return,u)}}function dm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||dm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(s!==4&&(s===27&&Ha(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,a),e=e.sibling;e!==null;)Af(e,n,a),e=e.sibling}function Il(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Il(e,n,a),e=e.sibling;e!==null;)Il(e,n,a),e=e.sibling}function hm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,s,a),n[ln]=e,n[mn]=a}catch(f){Ge(e,e.return,f)}}var Ki=!1,dn=!1,Rf=!1,pm=typeof WeakSet=="function"?WeakSet:Set,bn=null;function Gv(e,n){if(e=e.containerInfo,jf=sc,e=Ap(e),vu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,A=-1,I=-1,tt=0,ht=0,St=e,it=null;e:for(;;){for(var lt;St!==a||u!==0&&St.nodeType!==3||(A=v+u),St!==f||s!==0&&St.nodeType!==3||(I=v+s),St.nodeType===3&&(v+=St.nodeValue.length),(lt=St.firstChild)!==null;)it=St,St=lt;for(;;){if(St===e)break e;if(it===a&&++tt===u&&(A=v),it===f&&++ht===s&&(I=v),(lt=St.nextSibling)!==null)break;St=it,it=St.parentNode}St=lt}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:e,selectionRange:a},sc=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var kt=gr(a.type,u);e=s.getSnapshotBeforeUpdate(kt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ge(a,a.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function mm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),s&4&&xo(5,a);break;case 1:if(Ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ge(a,a.return,v)}else{var u=gr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ge(a,a.return,v)}}s&64&&cm(a),s&512&&go(a,a.return);break;case 3:if(Ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{$p(e,n)}catch(v){Ge(a,a.return,v)}}break;case 27:n===null&&s&4&&hm(a);case 26:case 5:Ji(e,a),n===null&&s&4&&fm(a),s&512&&go(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),s&4&&_m(e,a);break;case 13:Ji(e,a),s&4&&vm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Kv.bind(null,a),xS(e,a))));break;case 22:if(s=a.memoizedState!==null||Ki,!s){n=n!==null&&n.memoizedState!==null||dn,u=Ki;var f=dn;Ki=s,(dn=n)&&!f?$i(e,a,(a.subtreeFlags&8772)!==0):Ji(e,a),Ki=u,dn=f}break;case 30:break;default:Ji(e,a)}}function xm(e){var n=e.alternate;n!==null&&(e.alternate=null,xm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ks(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Hn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)gm(e,n,a),a=a.sibling}function gm(e,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(At,a)}catch{}switch(a.tag){case 26:dn||Ui(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Ui(a,n);var s=$e,u=Hn;Ha(a.type)&&($e=a.stateNode,Hn=!1),Qi(e,n,a),Ao(a.stateNode),$e=s,Hn=u;break;case 5:dn||Ui(a,n);case 6:if(s=$e,u=Hn,$e=null,Qi(e,n,a),$e=s,Hn=u,$e!==null)if(Hn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(Hn?(e=$e,cx(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),fs(e)):cx($e,a.stateNode));break;case 4:s=$e,u=Hn,$e=a.stateNode.containerInfo,Hn=!0,Qi(e,n,a),$e=s,Hn=u;break;case 0:case 11:case 14:case 15:Na(2,a,n),dn||Na(4,a,n),Qi(e,n,a);break;case 1:dn||(Ui(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&um(a,n,s)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:dn=(s=dn)||a.memoizedState!==null,Qi(e,n,a),dn=s;break;default:Qi(e,n,a)}}function _m(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{fs(e)}catch(a){Ge(n,n.return,a)}}}function vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{fs(e)}catch(a){Ge(n,n.return,a)}}function Vv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pm),n;default:throw Error(r(435,e.tag))}}function Hl(e,n){var a=Vv(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Qv.bind(null,e,s);s.then(u,u)}})}function Gn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,v=n,A=v;t:for(;A!==null;){switch(A.tag){case 27:if(Ha(A.type)){$e=A.stateNode,Hn=!1;break t}break;case 5:$e=A.stateNode,Hn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Hn=!0;break t}A=A.return}if($e===null)throw Error(r(160));gm(f,v,u),$e=null,Hn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sm(n,e),n=n.sibling}var yi=null;function Sm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Gn(n,e),Vn(e),s&4&&(Na(3,e,e.return),xo(3,e),Na(5,e,e.return));break;case 1:Gn(n,e),Vn(e),s&512&&(dn||a===null||Ui(a,a.return)),s&64&&Ki&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=yi;if(Gn(n,e),Vn(e),s&512&&(dn||a===null||Ui(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,s,a),f[ln]=e,nt(f),s=f;break t;case"link":var v=Sx("link","href",u).get(s+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break e}}f=u.createElement(s),Dn(f,s,a),u.head.appendChild(f);break;case"meta":if(v=Sx("meta","content",u).get(s+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break e}}f=u.createElement(s),Dn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=e,nt(f),s=f}e.stateNode=s}else yx(u,e.type,e.stateNode);else e.stateNode=vx(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?yx(u,e.type,e.stateNode):vx(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,e),Vn(e),s&512&&(dn||a===null||Ui(a,a.return)),a!==null&&s&4&&Ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,e),Vn(e),s&512&&(dn||a===null||Ui(a,a.return)),e.flags&32){u=e.stateNode;try{Ci(u,"")}catch(kt){Ge(e,e.return,kt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Ef(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Rf=!0);break;case 6:if(Gn(n,e),Vn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(kt){Ge(e,e.return,kt)}}break;case 3:if(nc=null,u=yi,yi=tc(n.containerInfo),Gn(n,e),yi=u,Vn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{fs(n.containerInfo)}catch(kt){Ge(e,e.return,kt)}Rf&&(Rf=!1,ym(e));break;case 4:s=yi,yi=tc(e.stateNode.containerInfo),Gn(n,e),Vn(e),yi=s;break;case 12:Gn(n,e),Vn(e);break;case 31:Gn(n,e),Vn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 13:Gn(n,e),Vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=Ki,ht=dn;if(Ki=tt||u,dn=ht||I,Gn(n,e),dn=ht,Ki=tt,Vn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ki||dn||_r(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=I.stateNode;var St=I.memoizedProps.style,it=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(kt){Ge(I,I.return,kt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(kt){Ge(I,I.return,kt)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;u?ux(lt,!0):ux(I.stateNode,!1)}catch(kt){Ge(I,I.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Hl(e,a))));break;case 19:Gn(n,e),Vn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 30:break;case 21:break;default:Gn(n,e),Vn(e)}}function Vn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(dm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Tf(e);Il(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ci(v,""),a.flags&=-33);var A=Tf(e);Il(e,A,v);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=Tf(e);Af(e,tt,I);break;default:throw Error(r(161))}}catch(ht){Ge(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ym(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;ym(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mm(e,n.alternate,n),n=n.sibling}function _r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Na(4,n,n.return),_r(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&um(n,n.return,a),_r(n);break;case 27:Ao(n.stateNode);case 26:case 5:Ui(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}e=e.sibling}}function $i(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:$i(u,f,a),xo(4,f);break;case 1:if($i(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Ge(s,s.return,tt)}if(s=f,u=s.updateQueue,u!==null){var A=s.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Jp(I[u],A)}catch(tt){Ge(s,s.return,tt)}}a&&v&64&&cm(f),go(f,f.return);break;case 27:hm(f);case 26:case 5:$i(u,f,a),a&&s===null&&v&4&&fm(f),go(f,f.return);break;case 12:$i(u,f,a);break;case 31:$i(u,f,a),a&&v&4&&_m(u,f);break;case 13:$i(u,f,a),a&&v&4&&vm(u,f);break;case 22:f.memoizedState===null&&$i(u,f,a),go(f,f.return);break;case 30:break;default:$i(u,f,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&no(a))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function Mi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mm(e,n,a,s),n=n.sibling}function Mm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,s),u&2048&&xo(9,n);break;case 1:Mi(e,n,a,s);break;case 3:Mi(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(u&2048){Mi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ge(n,n.return,I)}}else Mi(e,n,a,s);break;case 31:Mi(e,n,a,s);break;case 13:Mi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,s):_o(e,n):f._visibility&2?Mi(e,n,a,s):(f._visibility|=2,ts(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Cf(v,n);break;case 24:Mi(e,n,a,s),u&2048&&wf(n.alternate,n);break;default:Mi(e,n,a,s)}}function ts(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,I=s,tt=v.flags;switch(v.tag){case 0:case 11:case 15:ts(f,v,A,I,u),xo(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?ts(f,v,A,I,u):_o(f,v):(ht._visibility|=2,ts(f,v,A,I,u)),u&&tt&2048&&Cf(v.alternate,v);break;case 24:ts(f,v,A,I,u),u&&tt&2048&&wf(v.alternate,v);break;default:ts(f,v,A,I,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:_o(a,s),u&2048&&Cf(s.alternate,s);break;case 24:_o(a,s),u&2048&&wf(s.alternate,s);break;default:_o(a,s)}n=n.sibling}}var vo=8192;function es(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)bm(e,n,a),e=e.sibling}function bm(e,n,a){switch(e.tag){case 26:es(e,n,a),e.flags&vo&&e.memoizedState!==null&&CS(a,yi,e.memoizedState,e.memoizedProps);break;case 5:es(e,n,a);break;case 3:case 4:var s=yi;yi=tc(e.stateNode.containerInfo),es(e,n,a),yi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=vo,vo=16777216,es(e,n,a),vo=s):es(e,n,a));break;default:es(e,n,a)}}function Em(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,Am(s,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tm(e),e=e.sibling}function Tm(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Na(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):So(e);break;default:So(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,Am(s,e)}Em(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Na(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function Am(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Na(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:no(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,bn=s;else t:for(a=e;bn!==null;){s=bn;var u=s.sibling,f=s.return;if(xm(s),s===a){bn=null;break t}if(u!==null){u.return=f,bn=u;break t}bn=f}}}var Xv={getCacheForType:function(e){var n=Cn(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},kv=typeof WeakMap=="function"?WeakMap:Map,Fe=0,je=null,ve=null,Me=0,He=0,$n=null,Oa=!1,ns=!1,Df=!1,ta=0,an=0,za=0,vr=0,Uf=0,ti=0,is=0,yo=null,Xn=null,Lf=!1,Vl=0,Rm=0,Xl=1/0,kl=null,Pa=null,gn=0,Ba=null,as=null,ea=0,Nf=0,Of=null,Cm=null,Mo=0,zf=null;function ei(){return(Fe&2)!==0&&Me!==0?Me&-Me:P.T!==null?Gf():Vs()}function wm(){if(ti===0)if((Me&536870912)===0||Re){var e=_t;_t<<=1,(_t&3932160)===0&&(_t=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function kn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Fa(e,Me,ti,!1)),pn(e,a),((Fe&2)===0||e!==je)&&(e===je&&((Fe&2)===0&&(vr|=a),an===4&&Fa(e,Me,ti,!1)),Li(e))}function Dm(e,n,a){if((Fe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||It(e,n),u=s?Yv(e,n):Bf(e,n,!0),f=s;do{if(u===0){ns&&!s&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Wv(a)){u=Bf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var A=e;u=yo;var I=A.current.memoizedState.isDehydrated;if(I&&(rs(A,v).flags|=256),v=Bf(A,v,!1),v!==2){if(Df&&!I){A.errorRecoveryDisabledLanes|=f,vr|=f,u=4;break t}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){rs(e,0),Fa(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,ti,!Oa);break t;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vl+300-E(),10<u)){if(Fa(s,n,ti,!Oa),pt(s,0,!0)!==0)break t;ea=n,s.timeoutHandle=ox(Um.bind(null,s,a,Xn,kl,Lf,n,ti,vr,is,Oa,f,"Throttled",-0,0),u);break t}Um(s,a,Xn,kl,Lf,n,ti,vr,is,Oa,f,null,-0,0)}}break}while(!0);Li(e)}function Um(e,n,a,s,u,f,v,A,I,tt,ht,St,it,lt){if(e.timeoutHandle=-1,St=n.subtreeFlags,St&8192||(St&16785408)===16785408){St={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},bm(n,f,St);var kt=(f&62914560)===f?Vl-E():(f&4194048)===f?Rm-E():0;if(kt=wS(St,kt),kt!==null){ea=f,e.cancelPendingCommit=kt(Im.bind(null,e,n,f,a,s,u,v,A,I,ht,St,null,it,lt)),Fa(e,f,v,!tt);return}}Im(e,n,f,a,s,u,v,A,I)}function Wv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,s){n&=~Uf,n&=~vr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-dt(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&er(e,a,n)}function Wl(){return(Fe&6)===0?(bo(0),!1):!0}function Pf(){if(ve!==null){if(He===0)var e=ve.return;else e=ve,ki=ur=null,Qu(e),Zr=null,ao=0,e=ve;for(;e!==null;)lm(e.alternate,e),e=e.return;ve=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,fS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,Pf(),je=e,ve=a=Vi(e.current,null),Me=n,He=0,$n=null,Oa=!1,ns=It(e,n),Df=!1,is=ti=Uf=vr=za=an=0,Xn=yo=null,Lf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-dt(s),f=1<<u;n|=e[u],s&=~f}return ta=n,dl(),a}function Lm(e,n){he=null,P.H=ho,n===jr||n===Sl?(n=jp(),He=3):n===Iu?(n=jp(),He=4):He=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ve===null&&(an=1,Ol(e,li(n,e.current)))}function Nm(){var e=Qn.current;return e===null?!0:(Me&4194048)===Me?di===null:(Me&62914560)===Me||(Me&536870912)!==0?e===di:!1}function Om(){var e=P.H;return P.H=ho,e===null?ho:e}function zm(){var e=P.A;return P.A=Xv,e}function ql(){an=4,Oa||(Me&4194048)!==Me&&Qn.current!==null||(ns=!0),(za&134217727)===0&&(vr&134217727)===0||je===null||Fa(je,Me,ti,!1)}function Bf(e,n,a){var s=Fe;Fe|=2;var u=Om(),f=zm();(je!==e||Me!==n)&&(kl=null,rs(e,n)),n=!1;var v=an;t:do try{if(He!==0&&ve!==null){var A=ve,I=$n;switch(He){case 8:Pf(),v=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var tt=He;if(He=0,$n=null,ss(e,A,I,tt),a&&ns){v=0;break t}break;default:tt=He,He=0,$n=null,ss(e,A,I,tt)}}qv(),v=an;break}catch(ht){Lm(e,ht)}while(!0);return n&&e.shellSuspendCounter++,ki=ur=null,Fe=s,P.H=u,P.A=f,ve===null&&(je=null,Me=0,dl()),v}function qv(){for(;ve!==null;)Pm(ve)}function Yv(e,n){var a=Fe;Fe|=2;var s=Om(),u=zm();je!==e||Me!==n?(kl=null,Xl=E()+500,rs(e,n)):ns=It(e,n);t:do try{if(He!==0&&ve!==null){n=ve;var f=$n;e:switch(He){case 1:He=0,$n=null,ss(e,n,f,1);break;case 2:case 9:if(qp(f)){He=0,$n=null,Bm(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Li(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:qp(f)?(He=0,$n=null,Bm(n)):(He=0,$n=null,ss(e,n,f,7));break;case 5:var v=null;switch(ve.tag){case 26:v=ve.memoizedState;case 5:case 27:var A=ve;if(v?Mx(v):A.stateNode.complete){He=0,$n=null;var I=A.sibling;if(I!==null)ve=I;else{var tt=A.return;tt!==null?(ve=tt,Yl(tt)):ve=null}break e}}He=0,$n=null,ss(e,n,f,5);break;case 6:He=0,$n=null,ss(e,n,f,6);break;case 8:Pf(),an=6;break t;default:throw Error(r(462))}}jv();break}catch(ht){Lm(e,ht)}while(!0);return ki=ur=null,P.H=s,P.A=u,Fe=a,ve!==null?0:(je=null,Me=0,dl(),an)}function jv(){for(;ve!==null&&!re();)Pm(ve)}function Pm(e){var n=sm(e.alternate,e,ta);e.memoizedProps=e.pendingProps,n===null?Yl(e):ve=n}function Bm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tm(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=tm(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:Qu(n);default:lm(a,n),n=ve=zp(n,ta),n=sm(a,n,ta)}e.memoizedProps=e.pendingProps,n===null?Yl(e):ve=n}function ss(e,n,a,s){ki=ur=null,Qu(n),Zr=null,ao=0;var u=n.return;try{if(Pv(e,u,n,a,Me)){an=1,Ol(e,li(a,e.current)),ve=null;return}}catch(f){if(u!==null)throw ve=u,f;an=1,Ol(e,li(a,e.current)),ve=null;return}n.flags&32768?(Re||s===1?e=!0:ns||(Me&536870912)!==0?e=!1:(Oa=e=!0,(s===2||s===9||s===3||s===6)&&(s=Qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Fm(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){Fm(n,Oa);return}e=n.return;var a=Iv(n.alternate,n,ta);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);an===0&&(an=5)}function Fm(e,n){do{var a=Hv(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);an=6,ve=null}function Im(e,n,a,s,u,f,v,A,I){e.cancelPendingCommit=null;do jl();while(gn!==0);if((Fe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Eu,zn(e,a,f,v,A,I),e===je&&(ve=je=null,Me=0),as=n,Ba=e,ea=a,Nf=f,Of=u,Cm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jv(ct,function(){return km(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,u=Y.p,Y.p=2,v=Fe,Fe|=4;try{Gv(e,n,a)}finally{Fe=v,Y.p=u,P.T=s}}gn=1,Hm(),Gm(),Vm()}}function Hm(){if(gn===1){gn=0;var e=Ba,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=Y.p;Y.p=2;var u=Fe;Fe|=4;try{Sm(n,e);var f=Zf,v=Ap(e.containerInfo),A=f.focusedElem,I=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Tp(A.ownerDocument.documentElement,A)){if(I!==null&&vu(A)){var tt=I.start,ht=I.end;if(ht===void 0&&(ht=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ht,A.value.length);else{var St=A.ownerDocument||document,it=St&&St.defaultView||window;if(it.getSelection){var lt=it.getSelection(),kt=A.textContent.length,ae=Math.min(I.start,kt),We=I.end===void 0?ae:Math.min(I.end,kt);!lt.extend&&ae>We&&(v=We,We=ae,ae=v);var j=Ep(A,ae),X=Ep(A,We);if(j&&X&&(lt.rangeCount!==1||lt.anchorNode!==j.node||lt.anchorOffset!==j.offset||lt.focusNode!==X.node||lt.focusOffset!==X.offset)){var $=St.createRange();$.setStart(j.node,j.offset),lt.removeAllRanges(),ae>We?(lt.addRange($),lt.extend(X.node,X.offset)):($.setEnd(X.node,X.offset),lt.addRange($))}}}}for(St=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&St.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var xt=St[A];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}sc=!!jf,Zf=jf=null}finally{Fe=u,Y.p=s,P.T=a}}e.current=n,gn=2}}function Gm(){if(gn===2){gn=0;var e=Ba,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=Y.p;Y.p=2;var u=Fe;Fe|=4;try{mm(e,n.alternate,n)}finally{Fe=u,Y.p=s,P.T=a}}gn=3}}function Vm(){if(gn===4||gn===3){gn=0,L();var e=Ba,n=as,a=ea,s=Cm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,as=Ba=null,Xm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Pa=null),nr(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(At,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,u=Y.p,Y.p=2,P.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var A=s[v];f(A.value,{componentStack:A.stack})}}finally{P.T=n,Y.p=u}}(ea&3)!==0&&jl(),Li(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===zf?Mo++:(Mo=0,zf=e):Mo=0,bo(0)}}function Xm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function jl(){return Hm(),Gm(),Vm(),km()}function km(){if(gn!==5)return!1;var e=Ba,n=Nf;Nf=0;var a=nr(ea),s=P.T,u=Y.p;try{Y.p=32>a?32:a,P.T=null,a=Of,Of=null;var f=Ba,v=ea;if(gn=0,as=Ba=null,ea=0,(Fe&6)!==0)throw Error(r(331));var A=Fe;if(Fe|=4,Tm(f.current),Mm(f,f.current,v,a),Fe=A,bo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(At,f)}catch{}return!0}finally{Y.p=u,P.T=s,Xm(e,n)}}function Wm(e,n,a){n=li(a,n),n=hf(e.stateNode,n,2),e=Da(e,n,2),e!==null&&(pn(e,2),Li(e))}function Ge(e,n,a){if(e.tag===3)Wm(e,e,a);else for(;n!==null;){if(n.tag===3){Wm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Pa===null||!Pa.has(s))){e=li(a,e),a=q0(2),s=Da(n,a,2),s!==null&&(Y0(a,s,n,e),pn(s,2),Li(s));break}}n=n.return}}function Ff(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new kv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Df=!0,u.add(a),e=Zv.bind(null,e,n,a),n.then(e,e))}function Zv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Me&a)===a&&(an===4||an===3&&(Me&62914560)===Me&&300>E()-Vl?(Fe&2)===0&&rs(e,0):Uf|=a,is===Me&&(is=0)),Li(e)}function qm(e,n){n===0&&(n=Le()),e=or(e,n),e!==null&&(pn(e,n),Li(e))}function Kv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),qm(e,a)}function Qv(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),qm(e,a)}function Jv(e,n){return we(e,n)}var Zl=null,os=null,If=!1,Kl=!1,Hf=!1,Ia=0;function Li(e){e!==os&&e.next===null&&(os===null?Zl=os=e:os=os.next=e),Kl=!0,If||(If=!0,tS())}function bo(e,n){if(!Hf&&Kl){Hf=!0;do for(var a=!1,s=Zl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-dt(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Km(s,f))}else f=Me,f=pt(s,s===je?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||It(s,f)||(a=!0,Km(s,f));s=s.next}while(a);Hf=!1}}function $v(){Ym()}function Ym(){Kl=If=!1;var e=0;Ia!==0&&uS()&&(e=Ia);for(var n=E(),a=null,s=Zl;s!==null;){var u=s.next,f=jm(s,n);f===0?(s.next=null,a===null?Zl=u:a.next=u,u===null&&(os=a)):(a=s,(e!==0||(f&3)!==0)&&(Kl=!0)),s=u}gn!==0&&gn!==5||bo(e),Ia!==0&&(Ia=0)}function jm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-dt(f),A=1<<v,I=u[v];I===-1?((A&a)===0||(A&s)!==0)&&(u[v]=ie(A,n)):I<=n&&(e.expiredLanes|=A),f&=~A}if(n=je,a=Me,a=pt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||It(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&jt(s),nr(a)){case 2:case 8:a=Tt;break;case 32:a=ct;break;case 268435456:a=Nt;break;default:a=ct}return s=Zm.bind(null,e),a=we(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&jt(s),e.callbackPriority=2,e.callbackNode=null,2}function Zm(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var s=Me;return s=pt(e,e===je?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Dm(e,s,n),jm(e,E()),e.callbackNode!=null&&e.callbackNode===a?Zm.bind(null,e):null)}function Km(e,n){if(jl())return null;Dm(e,n,!0)}function tS(){dS(function(){(Fe&6)!==0?we(gt,$v):Ym()})}function Gf(){if(Ia===0){var e=qr;e===0&&(e=ft,ft<<=1,(ft&261888)===0&&(ft=256)),Ia=e}return Ia}function Qm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function Jm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function eS(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Qm((u[mn]||null).action),v=s.submitter;v&&(n=(n=v[mn]||null)?Qm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new ll("action","action",null,s,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ia!==0){var I=v?Jm(u,v):new FormData(u);of(a,{pending:!0,data:I,method:u.method,action:f},null,I)}}else typeof f=="function"&&(A.preventDefault(),I=v?Jm(u,v):new FormData(u),of(a,{pending:!0,data:I,method:u.method,action:f},f,I))},currentTarget:u}]})}}for(var Vf=0;Vf<bu.length;Vf++){var Xf=bu[Vf],nS=Xf.toLowerCase(),iS=Xf[0].toUpperCase()+Xf.slice(1);Si(nS,"on"+iS)}Si(wp,"onAnimationEnd"),Si(Dp,"onAnimationIteration"),Si(Up,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(vv,"onTransitionRun"),Si(Sv,"onTransitionStart"),Si(yv,"onTransitionCancel"),Si(Lp,"onTransitionEnd"),Vt("onMouseEnter",["mouseout","mouseover"]),Vt("onMouseLeave",["mouseout","mouseover"]),Vt("onPointerEnter",["pointerout","pointerover"]),Vt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function $m(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var A=s[v],I=A.instance,tt=A.currentTarget;if(A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ht){fl(ht)}u.currentTarget=null,f=I}else for(v=0;v<s.length;v++){if(A=s[v],I=A.instance,tt=A.currentTarget,A=A.listener,I!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ht){fl(ht)}u.currentTarget=null,f=I}}}}function Se(e,n){var a=n[Or];a===void 0&&(a=n[Or]=new Set);var s=e+"__bubble";a.has(s)||(tx(n,e,2,!1),a.add(s))}function kf(e,n,a){var s=0;n&&(s|=4),tx(a,e,s,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[Ql]){e[Ql]=!0,Z.forEach(function(a){a!=="selectionchange"&&(aS.has(a)||kf(a,!1,e),kf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,kf("selectionchange",!1,n))}}function tx(e,n,a,s){switch(wx(n)){case 2:var u=LS;break;case 8:u=NS;break;default:u=sd}a=u.bind(null,n,a,e),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function qf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var A=s.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=s.return;v!==null;){var I=v.tag;if((I===3||I===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=ya(A),v===null)return;if(I=v.tag,I===5||I===6||I===26||I===27){s=f=v;continue t}A=A.parentNode}}s=s.return}rp(function(){var tt=f,ht=lu(a),St=[];t:{var it=Np.get(e);if(it!==void 0){var lt=ll,kt=e;switch(e){case"keypress":if(sl(a)===0)break t;case"keydown":case"keyup":lt=Q_;break;case"focusin":kt="focus",lt=pu;break;case"focusout":kt="blur",lt=pu;break;case"beforeblur":case"afterblur":lt=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=tv;break;case wp:case Dp:case Up:lt=V_;break;case Lp:lt=nv;break;case"scroll":case"scrollend":lt=B_;break;case"wheel":lt=av;break;case"copy":case"cut":case"paste":lt=k_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=up;break;case"toggle":case"beforetoggle":lt=sv}var ae=(n&4)!==0,We=!ae&&(e==="scroll"||e==="scrollend"),j=ae?it!==null?it+"Capture":null:it;ae=[];for(var X=tt,$;X!==null;){var xt=X;if($=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||$===null||j===null||(xt=Ws(X,j),xt!=null&&ae.push(To(X,xt,$))),We)break;X=X.return}0<ae.length&&(it=new lt(it,kt,null,a,ht),St.push({event:it,listeners:ae}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==ou&&(kt=a.relatedTarget||a.fromElement)&&(ya(kt)||kt[Bi]))break t;if((lt||it)&&(it=ht.window===ht?ht:(it=ht.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=tt,kt=kt?ya(kt):null,kt!==null&&(We=c(kt),ae=kt.tag,kt!==We||ae!==5&&ae!==27&&ae!==6)&&(kt=null)):(lt=null,kt=tt),lt!==kt)){if(ae=lp,xt="onMouseLeave",j="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ae=up,xt="onPointerLeave",j="onPointerEnter",X="pointer"),We=lt==null?it:q(lt),$=kt==null?it:q(kt),it=new ae(xt,X+"leave",lt,a,ht),it.target=We,it.relatedTarget=$,xt=null,ya(ht)===tt&&(ae=new ae(j,X+"enter",kt,a,ht),ae.target=$,ae.relatedTarget=We,xt=ae),We=xt,lt&&kt)e:{for(ae=rS,j=lt,X=kt,$=0,xt=j;xt;xt=ae(xt))$++;xt=0;for(var $t=X;$t;$t=ae($t))xt++;for(;0<$-xt;)j=ae(j),$--;for(;0<xt-$;)X=ae(X),xt--;for(;$--;){if(j===X||X!==null&&j===X.alternate){ae=j;break e}j=ae(j),X=ae(X)}ae=null}else ae=null;lt!==null&&ex(St,it,lt,ae,!1),kt!==null&&We!==null&&ex(St,We,kt,ae,!0)}}t:{if(it=tt?q(tt):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var ze=_p;else if(xp(it))if(vp)ze=xv;else{ze=pv;var qt=hv}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&su(tt.elementType)&&(ze=_p):ze=mv;if(ze&&(ze=ze(e,tt))){gp(St,ze,a,ht);break t}qt&&qt(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&yn(it,"number",it.value)}switch(qt=tt?q(tt):window,e){case"focusin":(xp(qt)||qt.contentEditable==="true")&&(Fr=qt,Su=tt,$s=null);break;case"focusout":$s=Su=Fr=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Rp(St,a,ht);break;case"selectionchange":if(_v)break;case"keydown":case"keyup":Rp(St,a,ht)}var me;if(xu)t:{switch(e){case"compositionstart":var be="onCompositionStart";break t;case"compositionend":be="onCompositionEnd";break t;case"compositionupdate":be="onCompositionUpdate";break t}be=void 0}else Br?pp(e,a)&&(be="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(be="onCompositionStart");be&&(fp&&a.locale!=="ko"&&(Br||be!=="onCompositionStart"?be==="onCompositionEnd"&&Br&&(me=sp()):(ba=ht,fu="value"in ba?ba.value:ba.textContent,Br=!0)),qt=Jl(tt,be),0<qt.length&&(be=new cp(be,e,null,a,ht),St.push({event:be,listeners:qt}),me?be.data=me:(me=mp(a),me!==null&&(be.data=me)))),(me=lv?cv(e,a):uv(e,a))&&(be=Jl(tt,"onBeforeInput"),0<be.length&&(qt=new cp("onBeforeInput","beforeinput",null,a,ht),St.push({event:qt,listeners:be}),qt.data=me)),eS(St,e,tt,a,ht)}$m(St,n)})}function To(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ws(e,a),u!=null&&s.unshift(To(e,u,f)),u=Ws(e,n),u!=null&&s.push(To(e,u,f))),e.tag===3)return s;e=e.return}return[]}function rS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ex(e,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var A=a,I=A.alternate,tt=A.stateNode;if(A=A.tag,I!==null&&I===s)break;A!==5&&A!==26&&A!==27||tt===null||(I=tt,u?(tt=Ws(a,f),tt!=null&&v.unshift(To(a,tt,I))):u||(tt=Ws(a,f),tt!=null&&v.push(To(a,tt,I)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var sS=/\r\n?/g,oS=/\u0000|\uFFFD/g;function nx(e){return(typeof e=="string"?e:""+e).replace(sS,`
`).replace(oS,"")}function ix(e,n){return n=nx(n),nx(e)===n}function ke(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ci(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ci(e,""+s);break;case"className":Ne(e,"class",s);break;case"tabIndex":Ne(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,a,s);break;case"style":ip(e,s,f);break;case"data":if(n!=="object"){Ne(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ke(e,n,"name",u.name,u,null),ke(e,n,"formEncType",u.formEncType,u,null),ke(e,n,"formMethod",u.formMethod,u,null),ke(e,n,"formTarget",u.formTarget,u,null)):(ke(e,n,"encType",u.encType,u,null),ke(e,n,"method",u.method,u,null),ke(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Hi);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Se("beforetoggle",e),Se("toggle",e),pe(e,"popover",s);break;case"xlinkActuate":Oe(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Oe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Oe(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Oe(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Oe(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Oe(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":pe(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=z_.get(a)||a,pe(e,a,s))}}function Yf(e,n,a,s,u,f){switch(a){case"style":ip(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ci(e,s):(typeof s=="number"||typeof s=="bigint")&&Ci(e,""+s);break;case"onScroll":s!=null&&Se("scroll",e);break;case"onScrollEnd":s!=null&&Se("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):pe(e,a,s)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(e,n,f,v,a,null)}}u&&ke(e,n,"srcSet",a.srcSet,a,null),s&&ke(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var A=f=v=u=null,I=null,tt=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":u=ht;break;case"type":v=ht;break;case"checked":I=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:ke(e,n,s,ht,a,null)}}Ke(e,f,A,I,tt,v,u,!1);return;case"select":Se("invalid",e),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":s=A;default:ke(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!s,n!=null?xn(e,!!s,n,!1):a!=null&&xn(e,!!s,a,!0);return;case"textarea":Se("invalid",e),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:ke(e,n,v,A,a,null)}An(e,s,u,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ke(e,n,I,s,a,null)}return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(s=0;s<Eo.length;s++)Se(Eo[s],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(s=a[tt],s!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(e,n,tt,s,a,null)}return;default:if(su(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&Yf(e,n,ht,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&ke(e,n,A,s,a,null))}function lS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,I=null,tt=null,ht=null;for(lt in a){var St=a[lt];if(a.hasOwnProperty(lt)&&St!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=St;default:s.hasOwnProperty(lt)||ke(e,n,lt,null,s,St)}}for(var it in s){var lt=s[it];if(St=a[it],s.hasOwnProperty(it)&&(lt!=null||St!=null))switch(it){case"type":f=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":ht=lt;break;case"value":v=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==St&&ke(e,n,it,lt,s,St)}}Fi(e,v,A,I,tt,ht,f,u);return;case"select":lt=v=A=it=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":lt=I;default:s.hasOwnProperty(f)||ke(e,n,f,null,s,I)}for(u in s)if(f=s[u],I=a[u],s.hasOwnProperty(u)&&(f!=null||I!=null))switch(u){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==I&&ke(e,n,u,f,s,I)}n=A,a=v,s=lt,it!=null?xn(e,!!a,it,!1):!!s!=!!a&&(n!=null?xn(e,!!a,n,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ke(e,n,A,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&ke(e,n,v,u,s,f)}Mn(e,it,lt);return;case"option":for(var kt in a)if(it=a[kt],a.hasOwnProperty(kt)&&it!=null&&!s.hasOwnProperty(kt))switch(kt){case"selected":e.selected=!1;break;default:ke(e,n,kt,null,s,it)}for(I in s)if(it=s[I],lt=a[I],s.hasOwnProperty(I)&&it!==lt&&(it!=null||lt!=null))switch(I){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:ke(e,n,I,it,s,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)it=a[ae],a.hasOwnProperty(ae)&&it!=null&&!s.hasOwnProperty(ae)&&ke(e,n,ae,null,s,it);for(tt in s)if(it=s[tt],lt=a[tt],s.hasOwnProperty(tt)&&it!==lt&&(it!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:ke(e,n,tt,it,s,lt)}return;default:if(su(n)){for(var We in a)it=a[We],a.hasOwnProperty(We)&&it!==void 0&&!s.hasOwnProperty(We)&&Yf(e,n,We,void 0,s,it);for(ht in s)it=s[ht],lt=a[ht],!s.hasOwnProperty(ht)||it===lt||it===void 0&&lt===void 0||Yf(e,n,ht,it,s,lt);return}}for(var j in a)it=a[j],a.hasOwnProperty(j)&&it!=null&&!s.hasOwnProperty(j)&&ke(e,n,j,null,s,it);for(St in s)it=s[St],lt=a[St],!s.hasOwnProperty(St)||it===lt||it==null&&lt==null||ke(e,n,St,it,s,lt)}function ax(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&ax(v)){for(v=0,A=u.responseEnd,s+=1;s<a.length;s++){var I=a[s],tt=I.startTime;if(tt>A)break;var ht=I.transferSize,St=I.initiatorType;ht&&ax(St)&&(I=I.responseEnd,v+=ht*(I<A?1:(A-tt)/(I-tt)))}if(--s,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jf=null,Zf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function rx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sx(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function uS(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var ox=typeof setTimeout=="function"?setTimeout:void 0,fS=typeof clearTimeout=="function"?clearTimeout:void 0,lx=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof lx<"u"?function(e){return lx.resolve(null).then(e).catch(hS)}:ox;function hS(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function cx(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),fs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Ao(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ao(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[ir]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Ao(e.ownerDocument.body);a=u}while(a);fs(n)}function ux(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function pS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function mS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function fx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$?"||e.data==="$~"}function td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ed=null;function dx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function hx(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function px(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ao(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ks(e)}var pi=new Map,mx=new Set;function tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=Y.d;Y.d={f:gS,r:_S,D:vS,C:SS,L:yS,m:MS,X:ES,S:bS,M:TS};function gS(){var e=na.f(),n=Wl();return e||n}function _S(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?L0(n):na.r(e)}var ls=typeof document>"u"?null:document;function xx(e,n,a){var s=ls;if(s&&typeof n=="string"&&n){var u=Ze(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),mx.has(u)||(mx.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Dn(n,"link",e),nt(n),s.head.appendChild(n)))}}function vS(e){na.D(e),xx("dns-prefetch",e,null)}function SS(e,n){na.C(e,n),xx("preconnect",e,n)}function yS(e,n,a){na.L(e,n,a);var s=ls;if(s&&e&&n){var u='link[rel="preload"][as="'+Ze(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ze(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ze(a.imageSizes)+'"]')):u+='[href="'+Ze(e)+'"]';var f=u;switch(n){case"style":f=cs(e);break;case"script":f=us(e)}pi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Ro(f))||n==="script"&&s.querySelector(Co(f))||(n=s.createElement("link"),Dn(n,"link",e),nt(n),s.head.appendChild(n)))}}function MS(e,n){na.m(e,n);var a=ls;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ze(s)+'"][href="'+Ze(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=us(e)}if(!pi.has(f)&&(e=g({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}s=a.createElement("link"),Dn(s,"link",e),nt(s),a.head.appendChild(s)}}}function bS(e,n,a){na.S(e,n,a);var s=ls;if(s&&e){var u=rt(s).hoistableStyles,f=cs(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=s.querySelector(Ro(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&nd(e,a);var I=v=s.createElement("link");nt(I),Dn(I,"link",e),I._p=new Promise(function(tt,ht){I.onload=tt,I.onerror=ht}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ec(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function ES(e,n){na.X(e,n);var a=ls;if(a&&e){var s=rt(a).hoistableScripts,u=us(e),f=s.get(u);f||(f=a.querySelector(Co(u)),f||(e=g({src:e,async:!0},n),(n=pi.get(u))&&id(e,n),f=a.createElement("script"),nt(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function TS(e,n){na.M(e,n);var a=ls;if(a&&e){var s=rt(a).hoistableScripts,u=us(e),f=s.get(u);f||(f=a.querySelector(Co(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&id(e,n),f=a.createElement("script"),nt(f),Dn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function gx(e,n,a,s){var u=(u=K.current)?tc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=cs(a.href),a=rt(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=cs(a.href);var f=rt(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(Ro(e)))&&!f._p&&(v.instance=f,v.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||AS(u,e,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=us(a),a=rt(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function cs(e){return'href="'+Ze(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function _x(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function AS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Dn(n,"link",a),nt(n),e.head.appendChild(n))}function us(e){return'[src="'+Ze(e)+'"]'}function Co(e){return"script[async]"+e}function vx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Ze(a.href)+'"]');if(s)return n.instance=s,nt(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),nt(s),Dn(s,"style",u),ec(s,a.precedence,e),n.instance=s;case"stylesheet":u=cs(a.href);var f=e.querySelector(Ro(u));if(f)return n.state.loading|=4,n.instance=f,nt(f),f;s=_x(a),(u=pi.get(u))&&nd(s,u),f=(e.ownerDocument||e).createElement("link"),nt(f);var v=f;return v._p=new Promise(function(A,I){v.onload=A,v.onerror=I}),Dn(f,"link",s),n.state.loading|=4,ec(f,a.precedence,e),n.instance=f;case"script":return f=us(a.src),(u=e.querySelector(Co(f)))?(n.instance=u,nt(u),u):(s=a,(u=pi.get(f))&&(s=g({},a),id(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),nt(u),Dn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ec(s,a.precedence,e));return n.instance}function ec(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var A=s[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nc=null;function Sx(e,n,a){if(nc===null){var s=new Map,u=nc=new Map;u.set(a,s)}else u=nc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=s.get(v);A?A.push(f):s.set(v,[f])}}return s}function yx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function RS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function CS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=cs(s.href),f=n.querySelector(Ro(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ic.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,nt(f);return}f=n.ownerDocument||n,s=_x(s),(u=pi.get(u))&&nd(s,u),f=f.createElement("link"),nt(f);var v=f;v._p=new Promise(function(A,I){v.onload=A,v.onerror=I}),Dn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ic.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ad=0;function wS(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ad===0&&(ad=62500*cS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ad?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,n.forEach(DS,e),ac=null,ic.call(e))}function DS(e,n){if(!(n.state.loading&4)){var a=ac.get(e);if(a)var s=a.get(null);else{a=new Map,ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=ic.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:D,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function US(e,n,a,s,u,f,v,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function bx(e,n,a,s,u,f,v,A,I,tt,ht,St){return e=new US(e,n,a,v,I,tt,ht,St,A),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Hu(f),e}function Ex(e){return e?(e=Gr,e):Gr}function Tx(e,n,a,s,u,f){u=Ex(u),s.context===null?s.context=u:s.pendingContext=u,s=wa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Da(e,s,n),a!==null&&(kn(a,e,n),so(a,e,n))}function Ax(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rd(e,n){Ax(e,n),(e=e.alternate)&&Ax(e,n)}function Rx(e){if(e.tag===13||e.tag===31){var n=or(e,67108864);n!==null&&kn(n,e,67108864),rd(e,67108864)}}function Cx(e){if(e.tag===13||e.tag===31){var n=ei();n=vi(n);var a=or(e,n);a!==null&&kn(a,e,n),rd(e,n)}}var sc=!0;function LS(e,n,a,s){var u=P.T;P.T=null;var f=Y.p;try{Y.p=2,sd(e,n,a,s)}finally{Y.p=f,P.T=u}}function NS(e,n,a,s){var u=P.T;P.T=null;var f=Y.p;try{Y.p=8,sd(e,n,a,s)}finally{Y.p=f,P.T=u}}function sd(e,n,a,s){if(sc){var u=od(s);if(u===null)qf(e,n,s,oc,a),Dx(e,s);else if(zS(u,e,n,a,s))s.stopPropagation();else if(Dx(e,s),n&4&&-1<OS.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=vt(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var I=1<<31-dt(v);A.entanglements[1]|=I,v&=~I}Li(f),(Fe&6)===0&&(Xl=E()+500,bo(0))}}break;case 31:case 13:A=or(f,2),A!==null&&kn(A,f,2),Wl(),rd(f,2)}if(f=od(s),f===null&&qf(e,n,s,oc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else qf(e,n,s,null,a)}}function od(e){return e=lu(e),ld(e)}var oc=null;function ld(e){if(oc=null,e=ya(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return oc=e,null}function wx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case gt:return 2;case Tt:return 8;case ct:case Zt:return 32;case Nt:return 268435456;default:return 32}default:return 32}}var cd=!1,Ga=null,Va=null,Xa=null,Do=new Map,Uo=new Map,ka=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Dx(e,n){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Rx(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function zS(e,n,a,s,u){switch(n){case"focusin":return Ga=Lo(Ga,e,n,a,s,u),!0;case"dragenter":return Va=Lo(Va,e,n,a,s,u),!0;case"mouseover":return Xa=Lo(Xa,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Do.set(f,Lo(Do.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Uo.set(f,Lo(Uo.get(f)||null,e,n,a,s,u)),!0}return!1}function Ux(e){var n=ya(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){Cx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){Cx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=od(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);ou=s,a.target.dispatchEvent(s),ou=null}else return n=R(a),n!==null&&Rx(n),e.blockedOn=a,!1;n.shift()}return!0}function Lx(e,n,a){lc(e)&&a.delete(n)}function PS(){cd=!1,Ga!==null&&lc(Ga)&&(Ga=null),Va!==null&&lc(Va)&&(Va=null),Xa!==null&&lc(Xa)&&(Xa=null),Do.forEach(Lx),Uo.forEach(Lx)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,cd||(cd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,PS)))}var uc=null;function Nx(e){uc!==e&&(uc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(ld(s||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,of(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function fs(e){function n(I){return cc(I,e)}Ga!==null&&cc(Ga,e),Va!==null&&cc(Va,e),Xa!==null&&cc(Xa,e),Do.forEach(n),Uo.forEach(n);for(var a=0;a<ka.length;a++){var s=ka[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ka.length&&(a=ka[0],a.blockedOn===null);)Ux(a),a.blockedOn===null&&ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[mn]||null;if(typeof f=="function")v||Nx(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[mn]||null)A=v.formAction;else if(ld(u)!==null)continue}else A=v.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Nx(a)}}}function Ox(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ud(e){this._internalRoot=e}fc.prototype.render=ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ei();Tx(a,s,e,n,null,null)},fc.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tx(e.current,2,null,e,null,null),Wl(),n[Bi]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ka.length&&n!==0&&n<ka[a].priority;a++);ka.splice(a,0,e),a===0&&Ux(e)}};var zx=t.version;if(zx!=="19.2.0")throw Error(r(527,zx,"19.2.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var BS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{At=dc.inject(BS),Ct=dc}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=V0,f=X0,v=k0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=bx(e,1,!1,null,null,a,s,null,u,f,v,Ox),e[Bi]=n.current,Wf(e),new ud(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=V0,v=X0,A=k0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=bx(e,1,!0,n,a??null,s,u,I,f,v,A,Ox),n.context=Ex(null),a=n.current,s=ei(),s=vi(s),u=wa(s),u.callback=null,Da(a,u,s),a=s,n.current.lanes=a,pn(n,a),Li(n),e[Bi]=n.current,Wf(e),new fc(n)},Oo.version="19.2.0",Oo}var Wx;function jS(){if(Wx)return hd.exports;Wx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),hd.exports=YS(),hd.exports}var ZS=jS();const KS=Jg(ZS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="181",QS=0,qx=1,JS=2,$g=1,$S=2,ua=3,tr=0,qn=1,fa=2,pa=0,Ds=1,Zd=2,Yx=3,jx=4,ty=5,Rr=100,ey=101,ny=102,iy=103,ay=104,ry=200,sy=201,oy=202,ly=203,Kd=204,Qd=205,cy=206,uy=207,fy=208,dy=209,hy=210,py=211,my=212,xy=213,gy=214,Jd=0,$d=1,th=2,Ns=3,eh=4,nh=5,ih=6,ah=7,t_=0,_y=1,vy=2,ma=0,Sy=1,yy=2,My=3,by=4,Ey=5,Ty=6,Ay=7,e_=300,Os=301,zs=302,rh=303,sh=304,tu=306,oh=1e3,da=1001,lh=1002,ri=1003,Ry=1004,hc=1005,gi=1006,gd=1007,wr=1008,zi=1009,n_=1010,i_=1011,Yo=1012,Xh=1013,Dr=1014,ha=1015,Fs=1016,kh=1017,Wh=1018,jo=1020,a_=35902,r_=35899,s_=1021,o_=1022,Ri=1023,Zo=1026,Ko=1027,l_=1028,qh=1029,Yh=1030,jh=1031,Zh=1033,Vc=33776,Xc=33777,kc=33778,Wc=33779,ch=35840,uh=35841,fh=35842,dh=35843,hh=36196,ph=37492,mh=37496,xh=37808,gh=37809,_h=37810,vh=37811,Sh=37812,yh=37813,Mh=37814,bh=37815,Eh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,wh=37821,Dh=36492,Uh=36494,Lh=36495,Nh=36283,Oh=36284,zh=36285,Ph=36286,Cy=3200,wy=3201,c_=0,Dy=1,Ja="",Wn="srgb",Ps="srgb-linear",Yc="linear",qe="srgb",ds=7680,Zx=519,Uy=512,Ly=513,Ny=514,u_=515,Oy=516,zy=517,Py=518,By=519,Bh=35044,Kx="300 es",Oi=2e3,jc=2001;function f_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Fy(){const o=Zc("canvas");return o.style.display="block",o}const Qx={};function Kc(...o){const t="THREE."+o.shift();console.log(t,...o)}function le(...o){const t="THREE."+o.shift();console.warn(t,...o)}function en(...o){const t="THREE."+o.shift();console.error(t,...o)}function Qo(...o){const t=o.join(" ");t in Qx||(Qx[t]=!0,le(...o))}function Iy(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Is{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jx=1234567;const Us=Math.PI/180,Jo=180/Math.PI;function xa(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Ee(o,t,i){return Math.max(t,Math.min(i,o))}function Kh(o,t){return(o%t+t)%t}function Hy(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function Gy(o,t,i){return o!==t?(i-o)/(t-o):0}function qo(o,t,i){return(1-i)*o+i*t}function Vy(o,t,i,r){return qo(o,t,1-Math.exp(-i*r))}function Xy(o,t=1){return t-Math.abs(Kh(o,t*2)-t)}function ky(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Wy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function qy(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Yy(o,t){return o+Math.random()*(t-o)}function jy(o){return o*(.5-Math.random())}function Zy(o){o!==void 0&&(Jx=o);let t=Jx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ky(o){return o*Us}function Qy(o){return o*Jo}function Jy(o){return(o&o-1)===0&&o!==0}function $y(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function tM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function eM(o,t,i,r,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((t+r)/2),x=d((t+r)/2),g=c((t-r)/2),S=d((t-r)/2),y=c((r-t)/2),b=d((r-t)/2);switch(l){case"XYX":o.set(h*x,m*g,m*S,h*p);break;case"YZY":o.set(m*S,h*x,m*g,h*p);break;case"ZXZ":o.set(m*g,m*S,h*x,h*p);break;case"XZX":o.set(h*x,m*b,m*y,h*p);break;case"YXY":o.set(m*y,h*x,m*b,h*p);break;case"ZYZ":o.set(m*b,m*y,h*x,h*p);break;default:le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ai(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const zo={DEG2RAD:Us,RAD2DEG:Jo,generateUUID:xa,clamp:Ee,euclideanModulo:Kh,mapLinear:Hy,inverseLerp:Gy,lerp:qo,damp:Vy,pingpong:Xy,smoothstep:ky,smootherstep:Wy,randInt:qy,randFloat:Yy,randFloatSpread:jy,seededRandom:Zy,degToRad:Ky,radToDeg:Qy,isPowerOfTwo:Jy,ceilPowerOfTwo:$y,floorPowerOfTwo:tM,setQuaternionFromProperEuler:eM,normalize:Ve,denormalize:Ai};class _e{constructor(t=0,i=0){_e.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],S=c[d+0],y=c[d+1],b=c[d+2],T=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g;return}if(h>=1){t[i+0]=S,t[i+1]=y,t[i+2]=b,t[i+3]=T;return}if(g!==T||m!==S||p!==y||x!==b){let M=m*S+p*y+x*b+g*T;M<0&&(S=-S,y=-y,b=-b,T=-T,M=-M);let _=1-h;if(M<.9995){const N=Math.acos(M),D=Math.sin(N);_=Math.sin(_*N)/D,h=Math.sin(h*N)/D,m=m*_+S*h,p=p*_+y*h,x=x*_+b*h,g=g*_+T*h}else{m=m*_+S*h,p=p*_+y*h,x=x*_+b*h,g=g*_+T*h;const N=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=N,p*=N,x*=N,g*=N}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=c[d],S=c[d+1],y=c[d+2],b=c[d+3];return t[i]=h*b+x*g+m*y-p*S,t[i+1]=m*b+x*S+p*g-h*y,t[i+2]=p*b+x*y+h*S-m*g,t[i+3]=x*b-h*g-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(c/2),S=m(r/2),y=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=S*x*g+p*y*b,this._y=p*y*g-S*x*b,this._z=p*x*b+S*y*g,this._w=p*x*g-S*y*b;break;case"YXZ":this._x=S*x*g+p*y*b,this._y=p*y*g-S*x*b,this._z=p*x*b-S*y*g,this._w=p*x*g+S*y*b;break;case"ZXY":this._x=S*x*g-p*y*b,this._y=p*y*g+S*x*b,this._z=p*x*b+S*y*g,this._w=p*x*g-S*y*b;break;case"ZYX":this._x=S*x*g-p*y*b,this._y=p*y*g+S*x*b,this._z=p*x*b-S*y*g,this._w=p*x*g+S*y*b;break;case"YZX":this._x=S*x*g+p*y*b,this._y=p*y*g+S*x*b,this._z=p*x*b-S*y*g,this._w=p*x*g-S*y*b;break;case"XZY":this._x=S*x*g-p*y*b,this._y=p*y*g-S*x*b,this._z=p*x*b+S*y*g,this._w=p*x*g+S*y*b;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],S=r+h+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(x-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-r*p,this._z=c*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion($x.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion($x.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+m*p+d*g-h*x,this.y=r+m*x+h*p-c*g,this.z=l+m*g+c*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return _d.copy(this).projectOnVector(t),this.sub(_d)}reflect(t){return this.sub(_d.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _d=new et,$x=new $o;class xe{constructor(t,i,r,l,c,d,h,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],S=r[2],y=r[5],b=r[8],T=l[0],M=l[3],_=l[6],N=l[1],D=l[4],B=l[7],V=l[2],U=l[5],O=l[8];return c[0]=d*T+h*N+m*V,c[3]=d*M+h*D+m*U,c[6]=d*_+h*B+m*O,c[1]=p*T+x*N+g*V,c[4]=p*M+x*D+g*U,c[7]=p*_+x*B+g*O,c[2]=S*T+y*N+b*V,c[5]=S*M+y*D+b*U,c[8]=S*_+y*B+b*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*c*x+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=x*d-h*p,S=h*m-x*c,y=p*c-d*m,b=i*g+r*S+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=g*T,t[1]=(l*p-x*r)*T,t[2]=(h*r-l*d)*T,t[3]=S*T,t[4]=(x*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(r*m-p*i)*T,t[8]=(d*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(vd.makeScale(t,i)),this}rotate(t){return this.premultiply(vd.makeRotation(-t)),this}translate(t,i){return this.premultiply(vd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new xe,tg=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eg=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nM(){const o={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qe&&(l.r=ga(l.r),l.g=ga(l.g),l.b=ga(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(l.r=Ls(l.r),l.g=Ls(l.g),l.b=Ls(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ps]:{primaries:t,whitePoint:r,transfer:Yc,toXYZ:tg,fromXYZ:eg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:t,whitePoint:r,transfer:qe,toXYZ:tg,fromXYZ:eg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),o}const Be=nM();function ga(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ls(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let hs;class iM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{hs===void 0&&(hs=Zc("canvas")),hs.width=t.width,hs.height=t.height;const l=hs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=hs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ga(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ga(i[r]/255)*255):i[r]=ga(i[r]);return{data:i,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aM=0;class Qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=xa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Sd(l[d].image)):c.push(Sd(l[d]))}else c=Sd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}let rM=0;const yd=new et;class On extends Is{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=da,l=da,c=gi,d=wr,h=Ri,m=zi,p=On.DEFAULT_ANISOTROPY,x=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=xa(),this.name="",this.source=new Qh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){le(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==e_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oh:t.x=t.x-Math.floor(t.x);break;case da:t.x=t.x<0?0:1;break;case lh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oh:t.y=t.y-Math.floor(t.y);break;case da:t.y=t.y<0?0:1;break;case lh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=e_;On.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],x=m[4],g=m[8],S=m[1],y=m[5],b=m[9],T=m[2],M=m[6],_=m[10];if(Math.abs(x-S)<.01&&Math.abs(g-T)<.01&&Math.abs(b-M)<.01){if(Math.abs(x+S)<.1&&Math.abs(g+T)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,B=(y+1)/2,V=(_+1)/2,U=(x+S)/4,O=(g+T)/4,W=(b+M)/4;return D>B&&D>V?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=U/r,c=O/r):B>V?B<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(B),r=U/l,c=W/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=O/c,l=W/c),this.set(r,l,c,i),this}let N=Math.sqrt((M-b)*(M-b)+(g-T)*(g-T)+(S-x)*(S-x));return Math.abs(N)<.001&&(N=1),this.x=(M-b)/N,this.y=(g-T)/N,this.z=(S-x)/N,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends Is{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new On(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:gi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends sM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class d_ extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=da,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,bi):bi.fromBufferAttribute(c,d),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pc.copy(r.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),mc.subVectors(this.max,Po),ps.subVectors(t.a,Po),ms.subVectors(t.b,Po),xs.subVectors(t.c,Po),qa.subVectors(ms,ps),Ya.subVectors(xs,ms),Sr.subVectors(ps,xs);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-Sr.z,Sr.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,Sr.z,0,-Sr.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-Sr.y,Sr.x,0];return!Md(i,ps,ms,xs,mc)||(i=[1,0,0,0,1,0,0,0,1],!Md(i,ps,ms,xs,mc))?!1:(xc.crossVectors(qa,Ya),i=[xc.x,xc.y,xc.z],Md(i,ps,ms,xs,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ia=[new et,new et,new et,new et,new et,new et,new et,new et],bi=new et,pc=new tl,ps=new et,ms=new et,xs=new et,qa=new et,Ya=new et,Sr=new et,Po=new et,mc=new et,xc=new et,yr=new et;function Md(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){yr.fromArray(o,c);const h=l.x*Math.abs(yr.x)+l.y*Math.abs(yr.y)+l.z*Math.abs(yr.z),m=t.dot(yr),p=i.dot(yr),x=r.dot(yr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const lM=new tl,Bo=new et,bd=new et;class el{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):lM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(bd)),this.expandByPoint(Bo.copy(t.center).sub(bd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const aa=new et,Ed=new et,gc=new et,ja=new et,Td=new et,_c=new et,Ad=new et;class Jh{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ed.copy(t).add(i).multiplyScalar(.5),gc.copy(i).sub(t).normalize(),ja.copy(this.origin).sub(Ed);const c=t.distanceTo(i)*.5,d=-this.direction.dot(gc),h=ja.dot(this.direction),m=-ja.dot(gc),p=ja.lengthSq(),x=Math.abs(1-d*d);let g,S,y,b;if(x>0)if(g=d*m-h,S=d*h-m,b=c*x,g>=0)if(S>=-b)if(S<=b){const T=1/x;g*=T,S*=T,y=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=c,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S=-c,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S<=-b?(g=Math.max(0,-(-d*c+h)),S=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p):S<=b?(g=0,S=Math.min(Math.max(-c,-m),c),y=S*(S+2*m)+p):(g=Math.max(0,-(d*c+h)),S=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+S*(S+2*m)+p);else S=d>0?-c:c,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Ed).addScaledVector(gc,S),y}intersectSphere(t,i){aa.subVectors(t.center,this.origin);const r=aa.dot(this.direction),l=aa.dot(aa)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(c=(t.min.y-S.y)*x,d=(t.max.y-S.y)*x):(c=(t.max.y-S.y)*x,d=(t.min.y-S.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(h=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,i,r,l,c){Td.subVectors(i,t),_c.subVectors(r,t),Ad.crossVectors(Td,_c);let d=this.direction.dot(Ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ja.subVectors(this.origin,t);const m=h*this.direction.dot(_c.crossVectors(ja,_c));if(m<0)return null;const p=h*this.direction.dot(Td.cross(ja));if(p<0||m+p>d)return null;const x=-h*ja.dot(Ad);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,r,l,c,d,h,m,p,x,g,S,y,b,T,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,x,g,S,y,b,T,M)}set(t,i,r,l,c,d,h,m,p,x,g,S,y,b,T,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=S,_[3]=y,_[7]=b,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/gs.setFromMatrixColumn(t,0).length(),c=1/gs.setFromMatrixColumn(t,1).length(),d=1/gs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const S=d*x,y=d*g,b=h*x,T=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=S-T*p,i[9]=-h*m,i[2]=T-S*p,i[6]=b+y*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*x,y=m*g,b=p*x,T=p*g;i[0]=S+T*h,i[4]=b*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=y*h-b,i[6]=T+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*x,y=m*g,b=p*x,T=p*g;i[0]=S-T*h,i[4]=-d*g,i[8]=b+y*h,i[1]=y+b*h,i[5]=d*x,i[9]=T-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*x,y=d*g,b=h*x,T=h*g;i[0]=m*x,i[4]=b*p-y,i[8]=S*p+T,i[1]=m*g,i[5]=T*p+S,i[9]=y*p-b,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*x,i[4]=T-S*g,i[8]=b*g+y,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*g+b,i[10]=S-T*g}else if(t.order==="XZY"){const S=d*m,y=d*p,b=h*m,T=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=S*g+T,i[5]=d*x,i[9]=y*g-b,i[2]=b*g-y,i[6]=h*x,i[10]=T*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cM,t,uM)}lookAt(t,i,r){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Za.crossVectors(r,ni),Za.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Za.crossVectors(r,ni)),Za.normalize(),vc.crossVectors(ni,Za),l[0]=Za.x,l[4]=vc.x,l[8]=ni.x,l[1]=Za.y,l[5]=vc.y,l[9]=ni.y,l[2]=Za.z,l[6]=vc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],S=r[9],y=r[13],b=r[2],T=r[6],M=r[10],_=r[14],N=r[3],D=r[7],B=r[11],V=r[15],U=l[0],O=l[4],W=l[8],w=l[12],C=l[1],G=l[5],Q=l[9],st=l[13],mt=l[2],ut=l[6],P=l[10],Y=l[14],k=l[3],yt=l[7],Et=l[11],z=l[15];return c[0]=d*U+h*C+m*mt+p*k,c[4]=d*O+h*G+m*ut+p*yt,c[8]=d*W+h*Q+m*P+p*Et,c[12]=d*w+h*st+m*Y+p*z,c[1]=x*U+g*C+S*mt+y*k,c[5]=x*O+g*G+S*ut+y*yt,c[9]=x*W+g*Q+S*P+y*Et,c[13]=x*w+g*st+S*Y+y*z,c[2]=b*U+T*C+M*mt+_*k,c[6]=b*O+T*G+M*ut+_*yt,c[10]=b*W+T*Q+M*P+_*Et,c[14]=b*w+T*st+M*Y+_*z,c[3]=N*U+D*C+B*mt+V*k,c[7]=N*O+D*G+B*ut+V*yt,c[11]=N*W+D*Q+B*P+V*Et,c[15]=N*w+D*st+B*Y+V*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],g=t[6],S=t[10],y=t[14],b=t[3],T=t[7],M=t[11],_=t[15];return b*(+c*m*g-l*p*g-c*h*S+r*p*S+l*h*y-r*m*y)+T*(+i*m*y-i*p*S+c*d*S-l*d*y+l*p*x-c*m*x)+M*(+i*p*g-i*h*y-c*d*g+r*d*y+c*h*x-r*p*x)+_*(-l*h*x-i*m*g+i*h*S+l*d*g-r*d*S+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=t[9],S=t[10],y=t[11],b=t[12],T=t[13],M=t[14],_=t[15],N=g*M*p-T*S*p+T*m*y-h*M*y-g*m*_+h*S*_,D=b*S*p-x*M*p-b*m*y+d*M*y+x*m*_-d*S*_,B=x*T*p-b*g*p+b*h*y-d*T*y-x*h*_+d*g*_,V=b*g*m-x*T*m-b*h*S+d*T*S+x*h*M-d*g*M,U=i*N+r*D+l*B+c*V;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return t[0]=N*O,t[1]=(T*S*c-g*M*c-T*l*y+r*M*y+g*l*_-r*S*_)*O,t[2]=(h*M*c-T*m*c+T*l*p-r*M*p-h*l*_+r*m*_)*O,t[3]=(g*m*c-h*S*c-g*l*p+r*S*p+h*l*y-r*m*y)*O,t[4]=D*O,t[5]=(x*M*c-b*S*c+b*l*y-i*M*y-x*l*_+i*S*_)*O,t[6]=(b*m*c-d*M*c-b*l*p+i*M*p+d*l*_-i*m*_)*O,t[7]=(d*S*c-x*m*c+x*l*p-i*S*p-d*l*y+i*m*y)*O,t[8]=B*O,t[9]=(b*g*c-x*T*c-b*r*y+i*T*y+x*r*_-i*g*_)*O,t[10]=(d*T*c-b*h*c+b*r*p-i*T*p-d*r*_+i*h*_)*O,t[11]=(x*h*c-d*g*c-x*r*p+i*g*p+d*r*y-i*h*y)*O,t[12]=V*O,t[13]=(x*T*l-b*g*l+b*r*S-i*T*S-x*r*M+i*g*M)*O,t[14]=(b*h*l-d*T*l-b*r*m+i*T*m+d*r*M-i*h*M)*O,t[15]=(d*g*l-x*h*l+x*r*m-i*g*m-d*r*S+i*h*S)*O,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,x=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,g=h+h,S=c*p,y=c*x,b=c*g,T=d*x,M=d*g,_=h*g,N=m*p,D=m*x,B=m*g,V=r.x,U=r.y,O=r.z;return l[0]=(1-(T+_))*V,l[1]=(y+B)*V,l[2]=(b-D)*V,l[3]=0,l[4]=(y-B)*U,l[5]=(1-(S+_))*U,l[6]=(M+N)*U,l[7]=0,l[8]=(b+D)*O,l[9]=(M-N)*O,l[10]=(1-(S+T))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=gs.set(l[0],l[1],l[2]).length();const d=gs.set(l[4],l[5],l[6]).length(),h=gs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,x=1/d,g=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=x,Ei.elements[5]*=x,Ei.elements[6]*=x,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,i.setFromRotationMatrix(Ei),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=Oi,m=!1){const p=this.elements,x=2*c/(i-t),g=2*c/(r-l),S=(i+t)/(i-t),y=(r+l)/(r-l);let b,T;if(m)b=c/(d-c),T=d*c/(d-c);else if(h===Oi)b=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===jc)b=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=Oi,m=!1){const p=this.elements,x=2/(i-t),g=2/(r-l),S=-(i+t)/(i-t),y=-(r+l)/(r-l);let b,T;if(m)b=1/(d-c),T=d/(d-c);else if(h===Oi)b=-2/(d-c),T=-(d+c)/(d-c);else if(h===jc)b=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const gs=new et,Ei=new tn,cM=new et(0,0,0),uM=new et(1,1,1),Za=new et,vc=new et,ni=new et,ng=new tn,ig=new $o;class Pi{constructor(t=0,i=0,r=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ng.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ng,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ig.setFromEuler(this),this.setFromQuaternion(ig,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fM=0;const ag=new et,_s=new $o,ra=new tn,Sc=new et,Fo=new et,dM=new et,hM=new $o,rg=new et(1,0,0),sg=new et(0,1,0),og=new et(0,0,1),lg={type:"added"},pM={type:"removed"},vs={type:"childadded",child:null},Rd={type:"childremoved",child:null};class Tn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new et,i=new Pi,r=new $o,l=new et(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new xe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,i){return _s.setFromAxisAngle(t,i),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(rg,t)}rotateY(t){return this.rotateOnAxis(sg,t)}rotateZ(t){return this.rotateOnAxis(og,t)}translateOnAxis(t,i){return ag.copy(t).applyQuaternion(this.quaternion),this.position.add(ag.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(rg,t)}translateY(t){return this.translateOnAxis(sg,t)}translateZ(t){return this.translateOnAxis(og,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ra.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Sc.copy(t):Sc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ra.lookAt(Fo,Sc,this.up):ra.lookAt(Sc,Fo,this.up),this.quaternion.setFromRotationMatrix(ra),l&&(ra.extractRotation(l.matrixWorld),_s.setFromRotationMatrix(ra),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(en("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lg),vs.child=t,this.dispatchEvent(vs),vs.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pM),Rd.child=t,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lg),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,dM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,hM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),g=d(t.shapes),S=d(t.skeletons),y=d(t.animations),b=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new et(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new et,sa=new et,Cd=new et,oa=new et,Ss=new et,ys=new et,cg=new et,wd=new et,Dd=new et,Ud=new et,Ld=new rn,Nd=new rn,Od=new rn;class ai{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ti.subVectors(l,i),sa.subVectors(r,i),Cd.subVectors(t,i);const d=Ti.dot(Ti),h=Ti.dot(sa),m=Ti.dot(Cd),p=sa.dot(sa),x=sa.dot(Cd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const S=1/g,y=(p*m-h*x)*S,b=(d*x-h*m)*S;return c.set(1-y-b,b,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(d,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Ld.setScalar(0),Nd.setScalar(0),Od.setScalar(0),Ld.fromBufferAttribute(t,i),Nd.fromBufferAttribute(t,r),Od.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ld,c.x),d.addScaledVector(Nd,c.y),d.addScaledVector(Od,c.z),d}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),sa.subVectors(t,i),Ti.cross(sa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Ti.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return ai.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;Ss.subVectors(l,r),ys.subVectors(c,r),wd.subVectors(t,r);const m=Ss.dot(wd),p=ys.dot(wd);if(m<=0&&p<=0)return i.copy(r);Dd.subVectors(t,l);const x=Ss.dot(Dd),g=ys.dot(Dd);if(x>=0&&g<=x)return i.copy(l);const S=m*g-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(Ss,d);Ud.subVectors(t,c);const y=Ss.dot(Ud),b=ys.dot(Ud);if(b>=0&&y<=b)return i.copy(c);const T=y*p-m*b;if(T<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(ys,h);const M=x*b-y*g;if(M<=0&&g-x>=0&&y-b>=0)return cg.subVectors(c,l),h=(g-x)/(g-x+(y-b)),i.copy(l).addScaledVector(cg,h);const _=1/(M+T+S);return d=T*_,h=S*_,i.copy(r).addScaledVector(Ss,d).addScaledVector(ys,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},yc={h:0,s:0,l:0};function zd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ue{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Be.workingColorSpace){return this.r=t,this.g=i,this.b=r,Be.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Be.workingColorSpace){if(t=Kh(t,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=zd(d,c,t+1/3),this.g=zd(d,c,t),this.b=zd(d,c,t-1/3)}return Be.colorSpaceToWorking(this,l),this}setStyle(t,i=Wn){function r(c){c!==void 0&&parseFloat(c)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:le("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Wn){const r=h_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Wn){return Be.workingToColorSpace(Nn.copy(this),t),Math.round(Ee(Nn.r*255,0,255))*65536+Math.round(Ee(Nn.g*255,0,255))*256+Math.round(Ee(Nn.b*255,0,255))}getHexString(t=Wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Be.workingColorSpace){Be.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Be.workingColorSpace){return Be.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=Wn){Be.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==Wn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(yc);const r=qo(Ka.h,yc.h,i),l=qo(Ka.s,yc.s,i),c=qo(Ka.l,yc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ue;Ue.NAMES=h_;let mM=0;class Lr extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=Ds,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kd,this.blendDst=Qd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){le(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){le(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Qd&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class p_ extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=t_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new et,Mc=new _e;let xM=0;class Yn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Bh,this.updateRanges=[],this.gpuType=ha,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ai(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ai(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ai(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ai(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bh&&(t.usage=this.usage),t}}class m_ extends Yn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class x_ extends Yn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class _i extends Yn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let gM=0;const mi=new tn,Pd=new Tn,Ms=new et,ii=new tl,Io=new tl,En=new et;class si extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(f_(t)?x_:m_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,r){return mi.makeTranslation(t,i,r),this.applyMatrix4(mi),this}scale(t,i,r){return mi.makeScale(t,i,r),this.applyMatrix4(mi),this}lookAt(t){return Pd.lookAt(t),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new _i(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Io.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ii.min,Io.min),ii.expandByPoint(En),En.addVectors(ii.max,Io.max),ii.expandByPoint(En)):(ii.expandByPoint(Io.min),ii.expandByPoint(Io.max))}ii.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)En.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)En.fromBufferAttribute(h,p),m&&(Ms.fromBufferAttribute(t,p),En.add(Ms)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let W=0;W<r.count;W++)h[W]=new et,m[W]=new et;const p=new et,x=new et,g=new et,S=new _e,y=new _e,b=new _e,T=new et,M=new et;function _(W,w,C){p.fromBufferAttribute(r,W),x.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),S.fromBufferAttribute(c,W),y.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),x.sub(p),g.sub(p),y.sub(S),b.sub(S);const G=1/(y.x*b.y-b.x*y.y);isFinite(G)&&(T.copy(x).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(G),M.copy(g).multiplyScalar(y.x).addScaledVector(x,-b.x).multiplyScalar(G),h[W].add(T),h[w].add(T),h[C].add(T),m[W].add(M),m[w].add(M),m[C].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:t.count}]);for(let W=0,w=N.length;W<w;++W){const C=N[W],G=C.start,Q=C.count;for(let st=G,mt=G+Q;st<mt;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const D=new et,B=new et,V=new et,U=new et;function O(W){V.fromBufferAttribute(l,W),U.copy(V);const w=h[W];D.copy(w),D.sub(V.multiplyScalar(V.dot(w))).normalize(),B.crossVectors(U,w);const G=B.dot(m[W])<0?-1:1;d.setXYZW(W,D.x,D.y,D.z,G)}for(let W=0,w=N.length;W<w;++W){const C=N[W],G=C.start,Q=C.count;for(let st=G,mt=G+Q;st<mt;st+=3)O(t.getX(st+0)),O(t.getX(st+1)),O(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new et,c=new et,d=new et,h=new et,m=new et,p=new et,x=new et,g=new et;if(t)for(let S=0,y=t.count;S<y;S+=3){const b=t.getX(S+0),T=t.getX(S+1),M=t.getX(S+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),h.add(x),m.add(x),p.add(x),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)En.fromBufferAttribute(t,i),En.normalize(),t.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,g=h.normalized,S=new p.constructor(m.length*x);let y=0,b=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*x;for(let _=0;_<x;_++)S[b++]=p[y++]}return new Yn(S,x,g)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const S=p[x],y=t(S,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],g=c[p];for(let S=0,y=g.length;S<y;S++)x.push(g[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ug=new tn,Mr=new Jh,bc=new el,fg=new et,Ec=new et,Tc=new et,Ac=new et,Bd=new et,Rc=new et,dg=new et,Cc=new et;class _a extends Tn{constructor(t=new si,i=new p_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Rc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Bd.fromBufferAttribute(g,t),d?Rc.addScaledVector(Bd,x):Rc.addScaledVector(Bd.sub(i),x))}i.add(Rc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(c),Mr.copy(t.ray).recast(t.near),!(bc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(bc,fg)===null||Mr.origin.distanceToSquared(fg)>(t.far-t.near)**2))&&(ug.copy(c).invert(),Mr.copy(t.ray).applyMatrix4(ug),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,S=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let b=0,T=S.length;b<T;b++){const M=S[b],_=d[M.materialIndex],N=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let B=N,V=D;B<V;B+=3){const U=h.getX(B),O=h.getX(B+1),W=h.getX(B+2);l=wc(this,_,t,r,p,x,g,U,O,W),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=b,_=T;M<_;M+=3){const N=h.getX(M),D=h.getX(M+1),B=h.getX(M+2);l=wc(this,d,t,r,p,x,g,N,D,B),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,T=S.length;b<T;b++){const M=S[b],_=d[M.materialIndex],N=Math.max(M.start,y.start),D=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let B=N,V=D;B<V;B+=3){const U=B,O=B+1,W=B+2;l=wc(this,_,t,r,p,x,g,U,O,W),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=b,_=T;M<_;M+=3){const N=M,D=M+1,B=M+2;l=wc(this,d,t,r,p,x,g,N,D,B),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function _M(o,t,i,r,l,c,d,h){let m;if(t.side===qn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===tr,h),m===null)return null;Cc.copy(h),Cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Cc);return p<i.near||p>i.far?null:{distance:p,point:Cc.clone(),object:o}}function wc(o,t,i,r,l,c,d,h,m,p){o.getVertexPosition(h,Ec),o.getVertexPosition(m,Tc),o.getVertexPosition(p,Ac);const x=_M(o,t,i,r,Ec,Tc,Ac,dg);if(x){const g=new et;ai.getBarycoord(dg,Ec,Tc,Ac,g),l&&(x.uv=ai.getInterpolatedAttribute(l,h,m,p,g,new _e)),c&&(x.uv1=ai.getInterpolatedAttribute(c,h,m,p,g,new _e)),d&&(x.normal=ai.getInterpolatedAttribute(d,h,m,p,g,new et),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new et,materialIndex:0};ai.getNormal(Ec,Tc,Ac,S.normal),x.face=S,x.barycoord=g}return x}class nl extends si{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],g=[];let S=0,y=0;b("z","y","x",-1,-1,r,i,t,d,c,0),b("z","y","x",1,-1,r,i,-t,d,c,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new _i(p,3)),this.setAttribute("normal",new _i(x,3)),this.setAttribute("uv",new _i(g,2));function b(T,M,_,N,D,B,V,U,O,W,w){const C=B/O,G=V/W,Q=B/2,st=V/2,mt=U/2,ut=O+1,P=W+1;let Y=0,k=0;const yt=new et;for(let Et=0;Et<P;Et++){const z=Et*G-st;for(let at=0;at<ut;at++){const Rt=at*C-Q;yt[T]=Rt*N,yt[M]=z*D,yt[_]=mt,p.push(yt.x,yt.y,yt.z),yt[T]=0,yt[M]=0,yt[_]=U>0?1:-1,x.push(yt.x,yt.y,yt.z),g.push(at/O),g.push(1-Et/W),Y+=1}}for(let Et=0;Et<W;Et++)for(let z=0;z<O;z++){const at=S+z+ut*Et,Rt=S+z+ut*(Et+1),wt=S+(z+1)+ut*(Et+1),Ft=S+(z+1)+ut*Et;m.push(at,Rt,Ft),m.push(Rt,wt,Ft),k+=6}h.addGroup(y,k,w),y+=k,S+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Bs(o[i]);for(const l in r)t[l]=r[l]}return t}function vM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function g_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}const SM={clone:Bs,merge:Fn};var yM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class va extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yM,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=vM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class __ extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new et,hg=new _e,pg=new _e;class xi extends __{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,i){return this.getViewBounds(t,hg,pg),i.subVectors(pg,hg)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Us*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Es=1;class bM extends Tn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new xi(bs,Es,t,i);l.layers=this.layers,this.add(l);const c=new xi(bs,Es,t,i);c.layers=this.layers,this.add(c);const d=new xi(bs,Es,t,i);d.layers=this.layers,this.add(d);const h=new xi(bs,Es,t,i);h.layers=this.layers,this.add(h);const m=new xi(bs,Es,t,i);m.layers=this.layers,this.add(m);const p=new xi(bs,Es,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(g,S,y),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class v_ extends On{constructor(t=[],i=Os,r,l,c,d,h,m,p,x){super(t,i,r,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class EM extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new v_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),c=new va({name:"CubemapFromEquirect",uniforms:Bs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:pa});c.uniforms.tEquirect.value=i;const d=new _a(l,c),h=i.minFilter;return i.minFilter===wr&&(i.minFilter=gi),new bM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Dc extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,r),_=this._getHandJoint(p,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=x.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&S>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Dc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class AM extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class RM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Bh,this.updateRanges=[],this.version=0,this.uuid=xa()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xa()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new et;class Qc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ai(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ai(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ai(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ai(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Yn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class S_ extends Lr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ts;const Ho=new et,As=new et,Rs=new et,Cs=new _e,Go=new _e,y_=new tn,Uc=new et,Vo=new et,Lc=new et,mg=new _e,Id=new _e,xg=new _e;class CM extends Tn{constructor(t=new S_){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new si;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new RM(i,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Qc(r,3,0,!1)),Ts.setAttribute("uv",new Qc(r,2,3,!1))}this.geometry=Ts,this.material=t,this.center=new _e(.5,.5),this.count=1}raycast(t,i){t.camera===null&&en('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),y_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Nc(Uc.set(-.5,-.5,0),Rs,d,As,l,c),Nc(Vo.set(.5,-.5,0),Rs,d,As,l,c),Nc(Lc.set(.5,.5,0),Rs,d,As,l,c),mg.set(0,0),Id.set(1,0),xg.set(1,1);let h=t.ray.intersectTriangle(Uc,Vo,Lc,!1,Ho);if(h===null&&(Nc(Vo.set(-.5,.5,0),Rs,d,As,l,c),Id.set(0,1),h=t.ray.intersectTriangle(Uc,Lc,Vo,!1,Ho),h===null))return;const m=t.ray.origin.distanceTo(Ho);m<t.near||m>t.far||i.push({distance:m,point:Ho.clone(),uv:ai.getInterpolation(Ho,Uc,Vo,Lc,mg,Id,xg,new _e),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nc(o,t,i,r,l,c){Cs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Go.x=c*Cs.x-l*Cs.y,Go.y=l*Cs.x+c*Cs.y):Go.copy(Cs),o.copy(t),o.x+=Go.x,o.y+=Go.y,o.applyMatrix4(y_)}class wM extends On{constructor(t=null,i=1,r=1,l,c,d,h,m,p=ri,x=ri,g,S){super(null,d,h,m,p,x,l,c,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hd=new et,DM=new et,UM=new xe;class Ar{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Hd.subVectors(r,i).cross(DM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||UM.getNormalMatrix(t),l=this.coplanarPoint(Hd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new el,LM=new _e(.5,.5),Oc=new et;class tp{constructor(t=new Ar,i=new Ar,r=new Ar,l=new Ar,c=new Ar,d=new Ar){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Oi,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],S=c[6],y=c[7],b=c[8],T=c[9],M=c[10],_=c[11],N=c[12],D=c[13],B=c[14],V=c[15];if(l[0].setComponents(p-d,y-x,_-b,V-N).normalize(),l[1].setComponents(p+d,y+x,_+b,V+N).normalize(),l[2].setComponents(p+h,y+g,_+T,V+D).normalize(),l[3].setComponents(p-h,y-g,_-T,V-D).normalize(),r)l[4].setComponents(m,S,M,B).normalize(),l[5].setComponents(p-m,y-S,_-M,V-B).normalize();else if(l[4].setComponents(p-m,y-S,_-M,V-B).normalize(),i===Oi)l[5].setComponents(p+m,y+S,_+M,V+B).normalize();else if(i===jc)l[5].setComponents(m,S,M,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);const i=LM.distanceTo(t.center);return br.radius=.7071067811865476+i,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M_ extends Lr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jc=new et,$c=new et,gg=new tn,Xo=new Jh,zc=new el,Gd=new et,_g=new et;class NM extends Tn{constructor(t=new si,i=new M_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Jc.distanceTo($c);t.setAttribute("lineDistance",new _i(r,1))}else le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;gg.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(gg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,S=r.attributes.position;if(x!==null){const y=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let T=y,M=b-1;T<M;T+=p){const _=x.getX(T),N=x.getX(T+1),D=Pc(this,t,Xo,m,_,N,T);D&&i.push(D)}if(this.isLineLoop){const T=x.getX(b-1),M=x.getX(y),_=Pc(this,t,Xo,m,T,M,b-1);_&&i.push(_)}}else{const y=Math.max(0,d.start),b=Math.min(S.count,d.start+d.count);for(let T=y,M=b-1;T<M;T+=p){const _=Pc(this,t,Xo,m,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Pc(this,t,Xo,m,b-1,y,b-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Pc(o,t,i,r,l,c,d){const h=o.geometry.attributes.position;if(Jc.fromBufferAttribute(h,l),$c.fromBufferAttribute(h,c),i.distanceSqToSegment(Jc,$c,Gd,_g)>r)return;Gd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Gd);if(!(p<t.near||p>t.far))return{distance:p,point:_g.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const vg=new et,Sg=new et;class OM extends NM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)vg.fromBufferAttribute(i,l),Sg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+vg.distanceTo(Sg);t.setAttribute("lineDistance",new _i(r,1))}else le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zM extends On{constructor(t,i,r,l,c,d,h,m,p){super(t,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class b_ extends On{constructor(t,i,r=Dr,l,c,d,h=ri,m=ri,p,x=Zo,g=1){if(x!==Zo&&x!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,c,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class E_ extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const Bc=new et,Fc=new et,Vd=new et,Ic=new ai;class PM extends si{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Us*i),d=t.getIndex(),h=t.getAttribute("position"),m=d?d.count:h.count,p=[0,0,0],x=["a","b","c"],g=new Array(3),S={},y=[];for(let b=0;b<m;b+=3){d?(p[0]=d.getX(b),p[1]=d.getX(b+1),p[2]=d.getX(b+2)):(p[0]=b,p[1]=b+1,p[2]=b+2);const{a:T,b:M,c:_}=Ic;if(T.fromBufferAttribute(h,p[0]),M.fromBufferAttribute(h,p[1]),_.fromBufferAttribute(h,p[2]),Ic.getNormal(Vd),g[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,g[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,g[2]=`${Math.round(_.x*l)},${Math.round(_.y*l)},${Math.round(_.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let N=0;N<3;N++){const D=(N+1)%3,B=g[N],V=g[D],U=Ic[x[N]],O=Ic[x[D]],W=`${B}_${V}`,w=`${V}_${B}`;w in S&&S[w]?(Vd.dot(S[w].normal)<=c&&(y.push(U.x,U.y,U.z),y.push(O.x,O.y,O.z)),S[w]=null):W in S||(S[W]={index0:p[N],index1:p[D],normal:Vd.clone()})}}for(const b in S)if(S[b]){const{index0:T,index1:M}=S[b];Bc.fromBufferAttribute(h,T),Fc.fromBufferAttribute(h,M),y.push(Bc.x,Bc.y,Bc.z),y.push(Fc.x,Fc.y,Fc.z)}this.setAttribute("position",new _i(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class eu extends si{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=t/h,S=i/m,y=[],b=[],T=[],M=[];for(let _=0;_<x;_++){const N=_*S-d;for(let D=0;D<p;D++){const B=D*g-c;b.push(B,-N,0),T.push(0,0,1),M.push(D/h),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let N=0;N<h;N++){const D=N+p*_,B=N+p*(_+1),V=N+1+p*(_+1),U=N+1+p*_;y.push(D,B,U),y.push(B,V,U)}this.setIndex(y),this.setAttribute("position",new _i(b,3)),this.setAttribute("normal",new _i(T,3)),this.setAttribute("uv",new _i(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.width,t.height,t.widthSegments,t.heightSegments)}}class BM extends Lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=c_,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class FM extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class IM extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yg={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class HM{constructor(t,i,r){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){h++,c===!1&&l.onStart!==void 0&&l.onStart(x,d,h),c=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,g){return p.push(x,g),this},this.removeHandler=function(x){const g=p.indexOf(x);return g!==-1&&p.splice(g,2),this},this.getHandler=function(x){for(let g=0,S=p.length;g<S;g+=2){const y=p[g],b=p[g+1];if(y.global&&(y.lastIndex=0),y.test(x))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const GM=new HM;class ep{constructor(t){this.manager=t!==void 0?t:GM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}ep.DEFAULT_MATERIAL_NAME="__DEFAULT";const la={};class VM extends Error{constructor(t,i){super(t),this.response=i}}class XM extends ep{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=yg.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(la[t]!==void 0){la[t].push({onLoad:i,onProgress:r,onError:l});return}la[t]=[],la[t].push({onLoad:i,onProgress:r,onError:l});const d=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,m=this.responseType;fetch(d).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const x=la[t],g=p.body.getReader(),S=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=S?parseInt(S):0,b=y!==0;let T=0;const M=new ReadableStream({start(_){N();function N(){g.read().then(({done:D,value:B})=>{if(D)_.close();else{T+=B.byteLength;const V=new ProgressEvent("progress",{lengthComputable:b,loaded:T,total:y});for(let U=0,O=x.length;U<O;U++){const W=x[U];W.onProgress&&W.onProgress(V)}_.enqueue(B),N()}},D=>{_.error(D)})}}});return new Response(M)}else throw new VM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(x=>new DOMParser().parseFromString(x,h));case"json":return p.json();default:if(h==="")return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(h),S=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(S);return p.arrayBuffer().then(b=>y.decode(b))}}}).then(p=>{yg.add(`file:${t}`,p);const x=la[t];delete la[t];for(let g=0,S=x.length;g<S;g++){const y=x[g];y.onLoad&&y.onLoad(p)}}).catch(p=>{const x=la[t];if(x===void 0)throw this.manager.itemError(t),p;delete la[t];for(let g=0,S=x.length;g<S;g++){const y=x[g];y.onError&&y.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class T_ extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Xd=new tn,Mg=new et,bg=new et;class kM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tp,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;Mg.setFromMatrixPosition(t.matrixWorld),i.position.copy(Mg),bg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(bg),i.updateMatrixWorld(),Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class A_ extends __{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class WM extends kM{constructor(){super(new A_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qM extends T_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new WM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class YM extends T_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class jM extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Eg=new tn;class ZM{constructor(t,i,r=0,l=1/0){this.ray=new Jh(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new $h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):en("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Eg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eg),this}intersectObject(t,i=!0,r=[]){return Fh(t,this,r,i),r.sort(Tg),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Fh(t[l],this,r,i);return r.sort(Tg),r}}function Tg(o,t){return o.distance-t.distance}function Fh(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let d=0,h=c.length;d<h;d++)Fh(c[d],t,i,!0)}}function Ag(o,t,i,r){const l=KM(r);switch(i){case s_:return o*t;case l_:return o*t/l.components*l.byteLength;case qh:return o*t/l.components*l.byteLength;case Yh:return o*t*2/l.components*l.byteLength;case jh:return o*t*2/l.components*l.byteLength;case o_:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case Zh:return o*t*4/l.components*l.byteLength;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case kc:case Wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case uh:case dh:return Math.max(o,16)*Math.max(t,8)/4;case ch:case fh:return Math.max(o,8)*Math.max(t,8)/2;case hh:case ph:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case mh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case _h:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case yh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Mh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case bh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Eh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Th:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Ch:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case wh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Dh:case Uh:case Lh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Nh:case Oh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case zh:case Ph:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function KM(o){switch(o){case zi:case n_:return{byteLength:1,components:1};case Yo:case i_:case Fs:return{byteLength:2,components:1};case kh:case Wh:return{byteLength:2,components:4};case Dr:case Xh:case ha:return{byteLength:4,components:1};case a_:case r_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function R_(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function QM(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,x);else{g.sort((y,b)=>y.start-b.start);let S=0;for(let y=1;y<g.length;y++){const b=g[S],T=g[y];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++S,g[S]=T)}g.length=S+1;for(let y=0,b=g.length;y<b;y++){const T=g[y];o.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
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
#endif`,tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ib=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ab=`#ifdef USE_AOMAP
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
#endif`,rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sb=`#ifdef USE_BATCHING
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
#endif`,ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ub=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fb=`#ifdef USE_IRIDESCENCE
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
#endif`,db=`#ifdef USE_BUMPMAP
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
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yb=`#define PI 3.141592653589793
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
} // validated`,Mb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bb=`vec3 transformedNormal = objectNormal;
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
#endif`,Eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ob=`#ifdef USE_ENVMAP
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
#endif`,zb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ib=`#ifdef USE_GRADIENTMAP
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
}`,Hb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xb=`uniform bool receiveShadow;
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
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zb=`PhysicalMaterial material;
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
#endif`,Kb=`uniform sampler2D dfgLUT;
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
}`,Qb=`
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
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,s3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o3=`#if defined( USE_POINTS_UV )
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
#endif`,l3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h3=`#ifdef USE_MORPHTARGETS
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
#endif`,p3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S3=`#ifdef USE_NORMALMAP
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
#endif`,y3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,R3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,P3=`float getShadowMask() {
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
}`,B3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F3=`#ifdef USE_SKINNING
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
#endif`,I3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H3=`#ifdef USE_SKINNING
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
#endif`,G3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W3=`#ifdef USE_TRANSMISSION
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
#endif`,q3=`#ifdef USE_TRANSMISSION
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
#endif`,Y3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,J3=`uniform sampler2D t2D;
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
}`,$3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
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
}`,a1=`#if DEPTH_PACKING == 3200
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
}`,r1=`#define DISTANCE
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
}`,s1=`#define DISTANCE
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
}`,o1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,l1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`uniform float scale;
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#include <common>
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
}`,d1=`uniform vec3 diffuse;
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
}`,h1=`#define LAMBERT
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define MATCAP
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
}`,x1=`#define MATCAP
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
}`,g1=`#define NORMAL
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
}`,_1=`#define NORMAL
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
}`,v1=`#define PHONG
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
}`,S1=`#define PHONG
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
}`,y1=`#define STANDARD
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
}`,M1=`#define STANDARD
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
}`,b1=`#define TOON
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
}`,E1=`#define TOON
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
}`,T1=`uniform float size;
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
}`,A1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,C1=`uniform vec3 color;
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
}`,w1=`uniform float rotation;
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
}`,D1=`uniform vec3 diffuse;
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
}`,ge={alphahash_fragment:JM,alphahash_pars_fragment:$M,alphamap_fragment:tb,alphamap_pars_fragment:eb,alphatest_fragment:nb,alphatest_pars_fragment:ib,aomap_fragment:ab,aomap_pars_fragment:rb,batching_pars_vertex:sb,batching_vertex:ob,begin_vertex:lb,beginnormal_vertex:cb,bsdfs:ub,iridescence_fragment:fb,bumpmap_pars_fragment:db,clipping_planes_fragment:hb,clipping_planes_pars_fragment:pb,clipping_planes_pars_vertex:mb,clipping_planes_vertex:xb,color_fragment:gb,color_pars_fragment:_b,color_pars_vertex:vb,color_vertex:Sb,common:yb,cube_uv_reflection_fragment:Mb,defaultnormal_vertex:bb,displacementmap_pars_vertex:Eb,displacementmap_vertex:Tb,emissivemap_fragment:Ab,emissivemap_pars_fragment:Rb,colorspace_fragment:Cb,colorspace_pars_fragment:wb,envmap_fragment:Db,envmap_common_pars_fragment:Ub,envmap_pars_fragment:Lb,envmap_pars_vertex:Nb,envmap_physical_pars_fragment:kb,envmap_vertex:Ob,fog_vertex:zb,fog_pars_vertex:Pb,fog_fragment:Bb,fog_pars_fragment:Fb,gradientmap_pars_fragment:Ib,lightmap_pars_fragment:Hb,lights_lambert_fragment:Gb,lights_lambert_pars_fragment:Vb,lights_pars_begin:Xb,lights_toon_fragment:Wb,lights_toon_pars_fragment:qb,lights_phong_fragment:Yb,lights_phong_pars_fragment:jb,lights_physical_fragment:Zb,lights_physical_pars_fragment:Kb,lights_fragment_begin:Qb,lights_fragment_maps:Jb,lights_fragment_end:$b,logdepthbuf_fragment:t3,logdepthbuf_pars_fragment:e3,logdepthbuf_pars_vertex:n3,logdepthbuf_vertex:i3,map_fragment:a3,map_pars_fragment:r3,map_particle_fragment:s3,map_particle_pars_fragment:o3,metalnessmap_fragment:l3,metalnessmap_pars_fragment:c3,morphinstance_vertex:u3,morphcolor_vertex:f3,morphnormal_vertex:d3,morphtarget_pars_vertex:h3,morphtarget_vertex:p3,normal_fragment_begin:m3,normal_fragment_maps:x3,normal_pars_fragment:g3,normal_pars_vertex:_3,normal_vertex:v3,normalmap_pars_fragment:S3,clearcoat_normal_fragment_begin:y3,clearcoat_normal_fragment_maps:M3,clearcoat_pars_fragment:b3,iridescence_pars_fragment:E3,opaque_fragment:T3,packing:A3,premultiplied_alpha_fragment:R3,project_vertex:C3,dithering_fragment:w3,dithering_pars_fragment:D3,roughnessmap_fragment:U3,roughnessmap_pars_fragment:L3,shadowmap_pars_fragment:N3,shadowmap_pars_vertex:O3,shadowmap_vertex:z3,shadowmask_pars_fragment:P3,skinbase_vertex:B3,skinning_pars_vertex:F3,skinning_vertex:I3,skinnormal_vertex:H3,specularmap_fragment:G3,specularmap_pars_fragment:V3,tonemapping_fragment:X3,tonemapping_pars_fragment:k3,transmission_fragment:W3,transmission_pars_fragment:q3,uv_pars_fragment:Y3,uv_pars_vertex:j3,uv_vertex:Z3,worldpos_vertex:K3,background_vert:Q3,background_frag:J3,backgroundCube_vert:$3,backgroundCube_frag:t1,cube_vert:e1,cube_frag:n1,depth_vert:i1,depth_frag:a1,distanceRGBA_vert:r1,distanceRGBA_frag:s1,equirect_vert:o1,equirect_frag:l1,linedashed_vert:c1,linedashed_frag:u1,meshbasic_vert:f1,meshbasic_frag:d1,meshlambert_vert:h1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:x1,meshnormal_vert:g1,meshnormal_frag:_1,meshphong_vert:v1,meshphong_frag:S1,meshphysical_vert:y1,meshphysical_frag:M1,meshtoon_vert:b1,meshtoon_frag:E1,points_vert:T1,points_frag:A1,shadow_vert:R1,shadow_frag:C1,sprite_vert:w1,sprite_frag:D1},Bt={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Ni={basic:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Fn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Fn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Fn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Fn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Fn([Bt.points,Bt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Fn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Fn([Bt.common,Bt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Fn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Fn([Bt.sprite,Bt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Fn([Bt.common,Bt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Fn([Bt.lights,Bt.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Ni.physical={uniforms:Fn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const Hc={r:0,b:0,g:0},Er=new Pi,U1=new tn;function L1(o,t,i,r,l,c,d){const h=new Ue(0);let m=c===!0?0:1,p,x,g=null,S=0,y=null;function b(D){let B=D.isScene===!0?D.background:null;return B&&B.isTexture&&(B=(D.backgroundBlurriness>0?i:t).get(B)),B}function T(D){let B=!1;const V=b(D);V===null?_(h,m):V&&V.isColor&&(_(V,1),B=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,d):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||B)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(D,B){const V=b(B);V&&(V.isCubeTexture||V.mapping===tu)?(x===void 0&&(x=new _a(new nl(1,1,1),new va({name:"BackgroundCubeMaterial",uniforms:Bs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(U,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Er.copy(B.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),x.material.uniforms.envMap.value=V,x.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(U1.makeRotationFromEuler(Er)),x.material.toneMapped=Be.getTransfer(V.colorSpace)!==qe,(g!==V||S!==V.version||y!==o.toneMapping)&&(x.material.needsUpdate=!0,g=V,S=V.version,y=o.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new _a(new eu(2,2),new va({name:"BackgroundMaterial",uniforms:Bs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Be.getTransfer(V.colorSpace)!==qe,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||S!==V.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=V,S=V.version,y=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function _(D,B){D.getRGB(Hc,g_(o)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,B,d)}function N(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,B=1){h.set(D),m=B,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,_(h,m)},render:T,addToRenderList:M,dispose:N}}function N1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,d=!1;function h(C,G,Q,st,mt){let ut=!1;const P=g(st,Q,G);c!==P&&(c=P,p(c.object)),ut=y(C,st,Q,mt),ut&&b(C,st,Q,mt),mt!==null&&t.update(mt,o.ELEMENT_ARRAY_BUFFER),(ut||d)&&(d=!1,B(C,G,Q,st),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function g(C,G,Q){const st=Q.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let ut=mt[G.id];ut===void 0&&(ut={},mt[G.id]=ut);let P=ut[st];return P===void 0&&(P=S(m()),ut[st]=P),P}function S(C){const G=[],Q=[],st=[];for(let mt=0;mt<i;mt++)G[mt]=0,Q[mt]=0,st[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Q,attributeDivisors:st,object:C,attributes:{},index:null}}function y(C,G,Q,st){const mt=c.attributes,ut=G.attributes;let P=0;const Y=Q.getAttributes();for(const k in Y)if(Y[k].location>=0){const Et=mt[k];let z=ut[k];if(z===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),Et===void 0||Et.attribute!==z||z&&Et.data!==z.data)return!0;P++}return c.attributesNum!==P||c.index!==st}function b(C,G,Q,st){const mt={},ut=G.attributes;let P=0;const Y=Q.getAttributes();for(const k in Y)if(Y[k].location>=0){let Et=ut[k];Et===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const z={};z.attribute=Et,Et&&Et.data&&(z.data=Et.data),mt[k]=z,P++}c.attributes=mt,c.attributesNum=P,c.index=st}function T(){const C=c.newAttributes;for(let G=0,Q=C.length;G<Q;G++)C[G]=0}function M(C){_(C,0)}function _(C,G){const Q=c.newAttributes,st=c.enabledAttributes,mt=c.attributeDivisors;Q[C]=1,st[C]===0&&(o.enableVertexAttribArray(C),st[C]=1),mt[C]!==G&&(o.vertexAttribDivisor(C,G),mt[C]=G)}function N(){const C=c.newAttributes,G=c.enabledAttributes;for(let Q=0,st=G.length;Q<st;Q++)G[Q]!==C[Q]&&(o.disableVertexAttribArray(Q),G[Q]=0)}function D(C,G,Q,st,mt,ut,P){P===!0?o.vertexAttribIPointer(C,G,Q,mt,ut):o.vertexAttribPointer(C,G,Q,st,mt,ut)}function B(C,G,Q,st){T();const mt=st.attributes,ut=Q.getAttributes(),P=G.defaultAttributeValues;for(const Y in ut){const k=ut[Y];if(k.location>=0){let yt=mt[Y];if(yt===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor)),yt!==void 0){const Et=yt.normalized,z=yt.itemSize,at=t.get(yt);if(at===void 0)continue;const Rt=at.buffer,wt=at.type,Ft=at.bytesPerElement,K=wt===o.INT||wt===o.UNSIGNED_INT||yt.gpuType===Xh;if(yt.isInterleavedBufferAttribute){const ot=yt.data,Dt=ot.stride,Pt=yt.offset;if(ot.isInstancedInterleavedBuffer){for(let Lt=0;Lt<k.locationSize;Lt++)_(k.location+Lt,ot.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Lt=0;Lt<k.locationSize;Lt++)M(k.location+Lt);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let Lt=0;Lt<k.locationSize;Lt++)D(k.location+Lt,z/k.locationSize,wt,Et,Dt*Ft,(Pt+z/k.locationSize*Lt)*Ft,K)}else{if(yt.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)_(k.location+ot,yt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ot=0;ot<k.locationSize;ot++)M(k.location+ot);o.bindBuffer(o.ARRAY_BUFFER,Rt);for(let ot=0;ot<k.locationSize;ot++)D(k.location+ot,z/k.locationSize,wt,Et,z*Ft,z/k.locationSize*ot*Ft,K)}}else if(P!==void 0){const Et=P[Y];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(k.location,Et);break;case 3:o.vertexAttrib3fv(k.location,Et);break;case 4:o.vertexAttrib4fv(k.location,Et);break;default:o.vertexAttrib1fv(k.location,Et)}}}}N()}function V(){W();for(const C in r){const G=r[C];for(const Q in G){const st=G[Q];for(const mt in st)x(st[mt].object),delete st[mt];delete G[Q]}delete r[C]}}function U(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const Q in G){const st=G[Q];for(const mt in st)x(st[mt].object),delete st[mt];delete G[Q]}delete r[C.id]}function O(C){for(const G in r){const Q=r[G];if(Q[C.id]===void 0)continue;const st=Q[C.id];for(const mt in st)x(st[mt].object),delete st[mt];delete Q[C.id]}}function W(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:M,disableUnusedAttributes:N}}function O1(o,t,i){let r;function l(p){r=p}function c(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,g){g!==0&&(o.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let y=0;for(let b=0;b<g;b++)y+=x[b];i.update(y,r,1)}function m(p,x,g,S){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)d(p[b],x[b],S[b]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,g);let b=0;for(let T=0;T<g;T++)b+=x[T]*S[T];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function z1(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Ri&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const W=O===Fs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==zi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ha&&!W)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(le("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),N=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),B=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=b>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:B,vertexTextures:V,maxSamples:U}}function P1(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Ar,h=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||l;return l=S,r=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,S){i=x(g,S,0)},this.setState=function(g,S,y){const b=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||b===null||b.length===0||c&&!M)c?x(null):p();else{const N=c?0:r,D=N*4;let B=_.clippingState||null;m.value=B,B=x(b,S,D,y);for(let V=0;V!==D;++V)B[V]=i[V];_.clippingState=B,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(g,S,y,b){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,b!==!0||M===null){const _=y+T*4,N=S.matrixWorldInverse;h.getNormalMatrix(N),(M===null||M.length<_)&&(M=new Float32Array(_));for(let D=0,B=y;D!==T;++D,B+=4)d.copy(g[D]).applyMatrix4(N,h),d.normal.toArray(M,B),M[B+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function B1(o){let t=new WeakMap;function i(d,h){return h===rh?d.mapping=Os:h===sh&&(d.mapping=zs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===rh||h===sh)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new EM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const $a=4,Rg=[.125,.215,.35,.446,.526,.582],Cr=20,F1=256,ko=new A_,Cg=new Ue;let kd=null,Wd=0,qd=0,Yd=!1;const I1=new et;class wg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=I1}=c;kd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kd,Wd,qd),this._renderer.xr.enabled=Yd,t.scissorTest=!1,ws(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Os||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Fs,format:Ri,colorSpace:Ps,depthBuffer:!1},l=Dg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dg(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H1(c)),this._blurMaterial=V1(c,t,i),this._ggxMaterial=G1(c,t,i)}return l}_compileMaterial(t){const i=new _a(new si,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,r,l,c){const m=new xi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(Cg),g.toneMapping=ma,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _a(new nl,new p_({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let _=!1;const N=t.background;N?N.isColor&&(M.color.copy(N),t.background=null,_=!0):(M.color.copy(Cg),_=!0);for(let D=0;D<6;D++){const B=D%3;B===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[D],c.y,c.z)):B===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[D]));const V=this._cubeSize;ws(l,B*V,D>2?V:0,V,V),g.setRenderTarget(l),_&&g.render(T,m),g.render(t,m)}g.toneMapping=y,g.autoClear=S,t.background=N}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Os||t.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ug());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;ws(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,ko)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),S=.05+p*.95,y=g*S,{_lodMax:b}=this,T=this._sizeLods[r],M=3*T*(r>b-$a?r-b+$a:0),_=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,ws(c,M,_,3*T,2*T),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,ws(t,M,_,3*T,2*T),l.setRenderTarget(t),l.render(h,ko)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Cr-1),T=c/b,M=isFinite(c)?1+Math.floor(x*T):Cr;M>Cr&&le(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const _=[];let N=0;for(let O=0;O<Cr;++O){const W=O/T,w=Math.exp(-W*W/2);_.push(w),O===0?N+=w:O<M&&(N+=2*w)}for(let O=0;O<_.length;O++)_[O]=_[O]/N;S.envMap.value=t.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:D}=this;S.dTheta.value=b,S.mipInt.value=D-r;const B=this._sizeLods[l],V=3*B*(l>D-$a?l-D+$a:0),U=4*(this._cubeSize-B);ws(i,V,U,3*B,2*B),m.setRenderTarget(i),m.render(g,ko)}}function H1(o){const t=[],i=[],r=[];let l=o;const c=o-$a+1+Rg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-$a?m=Rg[d-o+$a-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,S=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,b=6,T=3,M=2,_=1,N=new Float32Array(T*b*y),D=new Float32Array(M*b*y),B=new Float32Array(_*b*y);for(let U=0;U<y;U++){const O=U%3*2/3-1,W=U>2?0:-1,w=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];N.set(w,T*b*U),D.set(S,M*b*U);const C=[U,U,U,U,U,U];B.set(C,_*b*U)}const V=new si;V.setAttribute("position",new Yn(N,T)),V.setAttribute("uv",new Yn(D,M)),V.setAttribute("faceIndex",new Yn(B,_)),r.push(new _a(V,null)),l>$a&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Dg(o,t,i){const r=new Ur(o,t,i);return r.texture.mapping=tu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ws(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function G1(o,t,i){return new va({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:F1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function V1(o,t,i){const r=new Float32Array(Cr),l=new et(0,1,0);return new va({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nu(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Ug(){return new va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:pa,depthTest:!1,depthWrite:!1})}function Lg(){return new va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pa,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}function X1(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===rh||m===sh,x=m===Os||m===zs;if(p||x){let g=t.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new wg(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new wg(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function k1(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Qo("WebGLRenderer: "+r+" extension not supported."),l}}}function W1(o,t,i,r){const l={},c=new WeakMap;function d(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const b in S.attributes)t.remove(S.attributes[b]);S.removeEventListener("dispose",d),delete l[S.id];const y=c.get(S);y&&(t.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,b=g.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let D=0,B=N.length;D<B;D+=3){const V=N[D+0],U=N[D+1],O=N[D+2];S.push(V,U,U,O,O,V)}}else if(b!==void 0){const N=b.array;T=b.version;for(let D=0,B=N.length/3-1;D<B;D+=3){const V=D+0,U=D+1,O=D+2;S.push(V,U,U,O,O,V)}}else return;const M=new(f_(S)?x_:m_)(S,1);M.version=T;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function x(g){const S=c.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function q1(o,t,i){let r;function l(S){r=S}let c,d;function h(S){c=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(r,y,c,S*d),i.update(y,r,1)}function p(S,y,b){b!==0&&(o.drawElementsInstanced(r,y,c,S*d,b),i.update(y,r,b))}function x(S,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,b);let M=0;for(let _=0;_<b;_++)M+=y[_];i.update(M,r,1)}function g(S,y,b,T){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)p(S[_]/d,y[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,T,0,b);let _=0;for(let N=0;N<b;N++)_+=y[N]*T[N];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function Y1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:en("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function j1(o,t,i){const r=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let C=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let B=0;b===!0&&(B=1),T===!0&&(B=2),M===!0&&(B=3);let V=h.attributes.position.count*B,U=1;V>t.maxTextureSize&&(U=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const O=new Float32Array(V*U*4*g),W=new d_(O,V,U,g);W.type=ha,W.needsUpdate=!0;const w=B*4;for(let G=0;G<g;G++){const Q=_[G],st=N[G],mt=D[G],ut=V*U*4*G;for(let P=0;P<Q.count;P++){const Y=P*w;b===!0&&(l.fromBufferAttribute(Q,P),O[ut+Y+0]=l.x,O[ut+Y+1]=l.y,O[ut+Y+2]=l.z,O[ut+Y+3]=0),T===!0&&(l.fromBufferAttribute(st,P),O[ut+Y+4]=l.x,O[ut+Y+5]=l.y,O[ut+Y+6]=l.z,O[ut+Y+7]=0),M===!0&&(l.fromBufferAttribute(mt,P),O[ut+Y+8]=l.x,O[ut+Y+9]=l.y,O[ut+Y+10]=l.z,O[ut+Y+11]=mt.itemSize===4?l.w:1)}}S={count:g,texture:W,size:new _e(V,U)},r.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const T=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:c}}function Z1(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const C_=new On,Ng=new b_(1,1),w_=new d_,D_=new oM,U_=new v_,Og=[],zg=[],Pg=new Float32Array(16),Bg=new Float32Array(9),Fg=new Float32Array(4);function Hs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=Og[l];if(c===void 0&&(c=new Float32Array(l),Og[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function iu(o,t){let i=zg[t];i===void 0&&(i=new Int32Array(t),zg[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function K1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function J1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function $1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function tE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Fg.set(r),o.uniformMatrix2fv(this.addr,!1,Fg),vn(i,r)}}function eE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Bg.set(r),o.uniformMatrix3fv(this.addr,!1,Bg),vn(i,r)}}function nE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Pg.set(r),o.uniformMatrix4fv(this.addr,!1,Pg),vn(i,r)}}function iE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function aE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function rE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function sE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function oE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function lE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function cE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function uE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function fE(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Ng.compareFunction=u_,c=Ng):c=C_,i.setTexture2D(t||c,l)}function dE(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||D_,l)}function hE(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||U_,l)}function pE(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||w_,l)}function mE(o){switch(o){case 5126:return K1;case 35664:return Q1;case 35665:return J1;case 35666:return $1;case 35674:return tE;case 35675:return eE;case 35676:return nE;case 5124:case 35670:return iE;case 35667:case 35671:return aE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return oE;case 36294:return lE;case 36295:return cE;case 36296:return uE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return pE}}function xE(o,t){o.uniform1fv(this.addr,t)}function gE(o,t){const i=Hs(t,this.size,2);o.uniform2fv(this.addr,i)}function _E(o,t){const i=Hs(t,this.size,3);o.uniform3fv(this.addr,i)}function vE(o,t){const i=Hs(t,this.size,4);o.uniform4fv(this.addr,i)}function SE(o,t){const i=Hs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function yE(o,t){const i=Hs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function ME(o,t){const i=Hs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function bE(o,t){o.uniform1iv(this.addr,t)}function EE(o,t){o.uniform2iv(this.addr,t)}function TE(o,t){o.uniform3iv(this.addr,t)}function AE(o,t){o.uniform4iv(this.addr,t)}function RE(o,t){o.uniform1uiv(this.addr,t)}function CE(o,t){o.uniform2uiv(this.addr,t)}function wE(o,t){o.uniform3uiv(this.addr,t)}function DE(o,t){o.uniform4uiv(this.addr,t)}function UE(o,t,i){const r=this.cache,l=t.length,c=iu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||C_,c[d])}function LE(o,t,i){const r=this.cache,l=t.length,c=iu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||D_,c[d])}function NE(o,t,i){const r=this.cache,l=t.length,c=iu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||U_,c[d])}function OE(o,t,i){const r=this.cache,l=t.length,c=iu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||w_,c[d])}function zE(o){switch(o){case 5126:return xE;case 35664:return gE;case 35665:return _E;case 35666:return vE;case 35674:return SE;case 35675:return yE;case 35676:return ME;case 5124:case 35670:return bE;case 35667:case 35671:return EE;case 35668:case 35672:return TE;case 35669:case 35673:return AE;case 5125:return RE;case 36294:return CE;case 36295:return wE;case 36296:return DE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return LE;case 35680:case 36300:case 36308:case 36293:return NE;case 36289:case 36303:case 36311:case 36292:return OE}}class PE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=mE(i.type)}}class BE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=zE(i.type)}}class FE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function Ig(o,t){o.seq.push(t),o.map[t.id]=t}function IE(o,t,i){const r=o.name,l=r.length;for(jd.lastIndex=0;;){const c=jd.exec(r),d=jd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Ig(i,p===void 0?new PE(h,o,t):new BE(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new FE(h),Ig(i,g)),i=g}}}class qc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);IE(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Hg(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const HE=37297;let GE=0;function VE(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Gg=new xe;function XE(o){Be._getMatrix(Gg,Be.workingColorSpace,o);const t=`mat3( ${Gg.elements.map(i=>i.toFixed(4))} )`;switch(Be.getTransfer(o)){case Yc:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Vg(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+VE(o.getShaderSource(t),h)}else return c}function kE(o,t){const i=XE(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function WE(o,t){let i;switch(t){case Sy:i="Linear";break;case yy:i="Reinhard";break;case My:i="Cineon";break;case by:i="ACESFilmic";break;case Ty:i="AgX";break;case Ay:i="Neutral";break;case Ey:i="Custom";break;default:le("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new et;function qE(){Be.getLuminanceCoefficients(Gc);const o=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function jE(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function ZE(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Wo(o){return o!==""}function Xg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const KE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(o){return o.replace(KE,JE)}const QE=new Map;function JE(o,t){let i=ge[t];if(i===void 0){const r=QE.get(t);if(r!==void 0)i=ge[r],le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Ih(i)}const $E=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(o){return o.replace($E,tT)}function tT(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function qg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function eT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===$g?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===$S?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ua&&(t="SHADOWMAP_TYPE_VSM"),t}function nT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Os:case zs:t="ENVMAP_TYPE_CUBE";break;case tu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function iT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function aT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case t_:t="ENVMAP_BLENDING_MULTIPLY";break;case _y:t="ENVMAP_BLENDING_MIX";break;case vy:t="ENVMAP_BLENDING_ADD";break}return t}function rT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function sT(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=eT(i),p=nT(i),x=iT(i),g=aT(i),S=rT(i),y=YE(i),b=jE(c),T=l.createProgram();let M,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),_.length>0&&(_+=`
`)):(M=[qg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),_=[qg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ma?"#define TONE_MAPPING":"",i.toneMapping!==ma?ge.tonemapping_pars_fragment:"",i.toneMapping!==ma?WE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,kE("linearToOutputTexel",i.outputColorSpace),qE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),d=Ih(d),d=Xg(d,i),d=kg(d,i),h=Ih(h),h=Xg(h,i),h=kg(h,i),d=Wg(d),h=Wg(h),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Kx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Kx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=N+M+d,B=N+_+h,V=Hg(l,l.VERTEX_SHADER,D),U=Hg(l,l.FRAGMENT_SHADER,B);l.attachShader(T,V),l.attachShader(T,U),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function O(G){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(T)||"",st=l.getShaderInfoLog(V)||"",mt=l.getShaderInfoLog(U)||"",ut=Q.trim(),P=st.trim(),Y=mt.trim();let k=!0,yt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,V,U);else{const Et=Vg(l,V,"vertex"),z=Vg(l,U,"fragment");en("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ut+`
`+Et+`
`+z)}else ut!==""?le("WebGLProgram: Program Info Log:",ut):(P===""||Y==="")&&(yt=!1);yt&&(G.diagnostics={runnable:k,programLog:ut,vertexShader:{log:P,prefix:M},fragmentShader:{log:Y,prefix:_}})}l.deleteShader(V),l.deleteShader(U),W=new qc(l,T),w=ZE(l,T)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,HE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=GE++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=U,this}let oT=0;class lT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new cT(t),i.set(t,r)),r}}class cT{constructor(t){this.id=oT++,this.code=t,this.usedTimes=0}}function uT(o,t,i,r,l,c,d){const h=new $h,m=new lT,p=new Set,x=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,G,Q,st){const mt=Q.fog,ut=st.geometry,P=w.isMeshStandardMaterial?Q.environment:null,Y=(w.isMeshStandardMaterial?i:t).get(w.envMap||P),k=Y&&Y.mapping===tu?Y.image.height:null,yt=b[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&le("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const Et=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,z=Et!==void 0?Et.length:0;let at=0;ut.morphAttributes.position!==void 0&&(at=1),ut.morphAttributes.normal!==void 0&&(at=2),ut.morphAttributes.color!==void 0&&(at=3);let Rt,wt,Ft,K;if(yt){const De=Ni[yt];Rt=De.vertexShader,wt=De.fragmentShader}else Rt=w.vertexShader,wt=w.fragmentShader,m.update(w),Ft=m.getVertexShaderID(w),K=m.getFragmentShaderID(w);const ot=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),Pt=st.isInstancedMesh===!0,Lt=st.isBatchedMesh===!0,te=!!w.map,ye=!!w.matcap,oe=!!Y,ce=!!w.aoMap,H=!!w.lightMap,de=!!w.bumpMap,ue=!!w.normalMap,Ce=!!w.displacementMap,Gt=!!w.emissiveMap,we=!!w.metalnessMap,jt=!!w.roughnessMap,re=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,J=w.iridescence>0,gt=w.sheen>0,Tt=w.transmission>0,ct=re&&!!w.anisotropyMap,Zt=L&&!!w.clearcoatMap,Nt=L&&!!w.clearcoatNormalMap,Qt=L&&!!w.clearcoatRoughnessMap,Wt=J&&!!w.iridescenceMap,At=J&&!!w.iridescenceThicknessMap,Ct=gt&&!!w.sheenColorMap,Kt=gt&&!!w.sheenRoughnessMap,dt=!!w.specularMap,Mt=!!w.specularColorMap,Ot=!!w.specularIntensityMap,F=Tt&&!!w.transmissionMap,ft=Tt&&!!w.thicknessMap,_t=!!w.gradientMap,bt=!!w.alphaMap,vt=w.alphaTest>0,pt=!!w.alphaHash,It=!!w.extensions;let ie=ma;w.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Le={shaderID:yt,shaderType:w.type,shaderName:w.name,vertexShader:Rt,fragmentShader:wt,defines:w.defines,customVertexShaderID:Ft,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Lt,batchingColor:Lt&&st._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&st.instanceColor!==null,instancingMorph:Pt&&st.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Ps,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:ye,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:k,aoMap:ce,lightMap:H,bumpMap:de,normalMap:ue,displacementMap:S&&Ce,emissiveMap:Gt,normalMapObjectSpace:ue&&w.normalMapType===Dy,normalMapTangentSpace:ue&&w.normalMapType===c_,metalnessMap:we,roughnessMap:jt,anisotropy:re,anisotropyMap:ct,clearcoat:L,clearcoatMap:Zt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Qt,dispersion:E,iridescence:J,iridescenceMap:Wt,iridescenceThicknessMap:At,sheen:gt,sheenColorMap:Ct,sheenRoughnessMap:Kt,specularMap:dt,specularColorMap:Mt,specularIntensityMap:Ot,transmission:Tt,transmissionMap:F,thicknessMap:ft,gradientMap:_t,opaque:w.transparent===!1&&w.blending===Ds&&w.alphaToCoverage===!1,alphaMap:bt,alphaTest:vt,alphaHash:pt,combine:w.combine,mapUv:te&&T(w.map.channel),aoMapUv:ce&&T(w.aoMap.channel),lightMapUv:H&&T(w.lightMap.channel),bumpMapUv:de&&T(w.bumpMap.channel),normalMapUv:ue&&T(w.normalMap.channel),displacementMapUv:Ce&&T(w.displacementMap.channel),emissiveMapUv:Gt&&T(w.emissiveMap.channel),metalnessMapUv:we&&T(w.metalnessMap.channel),roughnessMapUv:jt&&T(w.roughnessMap.channel),anisotropyMapUv:ct&&T(w.anisotropyMap.channel),clearcoatMapUv:Zt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&T(w.sheenRoughnessMap.channel),specularMapUv:dt&&T(w.specularMap.channel),specularColorMapUv:Mt&&T(w.specularColorMap.channel),specularIntensityMapUv:Ot&&T(w.specularIntensityMap.channel),transmissionMapUv:F&&T(w.transmissionMap.channel),thicknessMapUv:ft&&T(w.thicknessMap.channel),alphaMapUv:bt&&T(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ue||re),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ut.attributes.uv&&(te||bt),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Dt,skinning:st.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&Be.getTransfer(w.map.colorSpace)===qe,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Be.getTransfer(w.emissiveMap.colorSpace)===qe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fa,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||Lt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(N(C,w),D(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function N(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function B(w){const C=b[w.type];let G;if(C){const Q=Ni[C];G=SM.clone(Q.uniforms)}else G=w.uniforms;return G}function V(w,C){let G;for(let Q=0,st=x.length;Q<st;Q++){const mt=x[Q];if(mt.cacheKey===C){G=mt,++G.usedTimes;break}}return G===void 0&&(G=new sT(o,C,w,c),x.push(G)),G}function U(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function O(w){m.remove(w)}function W(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:B,acquireProgram:V,releaseProgram:U,releaseShaderCache:O,programs:x,dispose:W}}function fT(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function dT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Yg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function jg(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g,S,y,b,T,M){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:S,material:y,groupOrder:b,renderOrder:g.renderOrder,z:T,group:M},o[t]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=y,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=T,_.group=M),t++,_}function h(g,S,y,b,T,M){const _=d(g,S,y,b,T,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(g,S,y,b,T,M){const _=d(g,S,y,b,T,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||dT),r.length>1&&r.sort(S||Yg),l.length>1&&l.sort(S||Yg)}function x(){for(let g=t,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function hT(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new jg,o.set(r,[d])):l>=c.length?(d=new jg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function pT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new Ue};break;case"SpotLight":i={position:new et,direction:new et,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new et,halfWidth:new et,halfHeight:new et};break}return o[t.id]=i,i}}}function mT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let xT=0;function gT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function _T(o){const t=new pT,i=mT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,c=new tn,d=new tn;function h(p){let x=0,g=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,b=0,T=0,M=0,_=0,N=0,D=0,B=0,V=0,U=0,O=0;p.sort(gT);for(let w=0,C=p.length;w<C;w++){const G=p[w],Q=G.color,st=G.intensity,mt=G.distance,ut=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=Q.r*st,g+=Q.g*st,S+=Q.b*st;else if(G.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(G.sh.coefficients[P],st);O++}else if(G.isDirectionalLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Y=G.shadow,k=i.get(G);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=ut,r.directionalShadowMatrix[y]=G.shadow.matrix,N++}r.directional[y]=P,y++}else if(G.isSpotLight){const P=t.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(Q).multiplyScalar(st),P.distance=mt,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,r.spot[T]=P;const Y=G.shadow;if(G.map&&(r.spotLightMap[V]=G.map,V++,Y.updateMatrices(G),G.castShadow&&U++),r.spotLightMatrix[T]=Y.matrix,G.castShadow){const k=i.get(G);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,r.spotShadow[T]=k,r.spotShadowMap[T]=ut,B++}T++}else if(G.isRectAreaLight){const P=t.get(G);P.color.copy(Q).multiplyScalar(st),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=P,M++}else if(G.isPointLight){const P=t.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const Y=G.shadow,k=i.get(G);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,r.pointShadow[b]=k,r.pointShadowMap[b]=ut,r.pointShadowMatrix[b]=G.shadow.matrix,D++}r.point[b]=P,b++}else if(G.isHemisphereLight){const P=t.get(G);P.skyColor.copy(G.color).multiplyScalar(st),P.groundColor.copy(G.groundColor).multiplyScalar(st),r.hemi[_]=P,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Bt.LTC_FLOAT_1,r.rectAreaLTC2=Bt.LTC_FLOAT_2):(r.rectAreaLTC1=Bt.LTC_HALF_1,r.rectAreaLTC2=Bt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=S;const W=r.hash;(W.directionalLength!==y||W.pointLength!==b||W.spotLength!==T||W.rectAreaLength!==M||W.hemiLength!==_||W.numDirectionalShadows!==N||W.numPointShadows!==D||W.numSpotShadows!==B||W.numSpotMaps!==V||W.numLightProbes!==O)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=M,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=B+V-U,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,W.directionalLength=y,W.pointLength=b,W.spotLength=T,W.rectAreaLength=M,W.hemiLength=_,W.numDirectionalShadows=N,W.numPointShadows=D,W.numSpotShadows=B,W.numSpotMaps=V,W.numLightProbes=O,r.version=xT++)}function m(p,x){let g=0,S=0,y=0,b=0,T=0;const M=x.matrixWorldInverse;for(let _=0,N=p.length;_<N;_++){const D=p[_];if(D.isDirectionalLight){const B=r.directional[g];B.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(M),g++}else if(D.isSpotLight){const B=r.spot[y];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(M),B.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const B=r.rectArea[b];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(M),d.identity(),c.copy(D.matrixWorld),c.premultiply(M),d.extractRotation(c),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),B.halfWidth.applyMatrix4(d),B.halfHeight.applyMatrix4(d),b++}else if(D.isPointLight){const B=r.point[S];B.position.setFromMatrixPosition(D.matrixWorld),B.position.applyMatrix4(M),S++}else if(D.isHemisphereLight){const B=r.hemi[T];B.direction.setFromMatrixPosition(D.matrixWorld),B.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:r}}function Zg(o){const t=new _T(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function vT(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Zg(o),t.set(l,[h])):c>=d.length?(h=new Zg(o),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const ST=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
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
}`;function MT(o,t,i){let r=new tp;const l=new _e,c=new _e,d=new rn,h=new FM({depthPacking:wy}),m=new IM,p={},x=i.maxTextureSize,g={[tr]:qn,[qn]:tr,[fa]:fa},S=new va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:ST,fragmentShader:yT}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const b=new si;b.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new _a(b,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$g;let _=this.type;this.render=function(U,O,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending(pa),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const st=_!==ua&&this.type===ua,mt=_===ua&&this.type!==ua;for(let ut=0,P=U.length;ut<P;ut++){const Y=U[ut],k=Y.shadow;if(k===void 0){le("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const yt=k.getFrameExtents();if(l.multiply(yt),c.copy(k.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/yt.x),l.x=c.x*yt.x,k.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/yt.y),l.y=c.y*yt.y,k.mapSize.y=c.y)),k.map===null||st===!0||mt===!0){const z=this.type!==ua?{minFilter:ri,magFilter:ri}:{};k.map!==null&&k.map.dispose(),k.map=new Ur(l.x,l.y,z),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const Et=k.getViewportCount();for(let z=0;z<Et;z++){const at=k.getViewport(z);d.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),Q.viewport(d),k.updateMatrices(Y,z),r=k.getFrustum(),B(O,W,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===ua&&N(k,W),k.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,G)};function N(U,O){const W=t.update(T);S.defines.VSM_SAMPLES!==U.blurSamples&&(S.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ur(l.x,l.y)),S.uniforms.shadow_pass.value=U.map.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(O,null,W,S,T,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(O,null,W,y,T,null)}function D(U,O,W,w){let C=null;const G=W.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)C=G;else if(C=W.isPointLight===!0?m:h,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Q=C.uuid,st=O.uuid;let mt=p[Q];mt===void 0&&(mt={},p[Q]=mt);let ut=mt[st];ut===void 0&&(ut=C.clone(),mt[st]=ut,O.addEventListener("dispose",V)),C=ut}if(C.visible=O.visible,C.wireframe=O.wireframe,w===ua?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:g[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Q=o.properties.get(C);Q.light=W}return C}function B(U,O,W,w,C){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===ua)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,U.matrixWorld);const st=t.update(U),mt=U.material;if(Array.isArray(mt)){const ut=st.groups;for(let P=0,Y=ut.length;P<Y;P++){const k=ut[P],yt=mt[k.materialIndex];if(yt&&yt.visible){const Et=D(U,yt,w,C);U.onBeforeShadow(o,U,O,W,st,Et,k),o.renderBufferDirect(W,null,st,Et,U,k),U.onAfterShadow(o,U,O,W,st,Et,k)}}}else if(mt.visible){const ut=D(U,mt,w,C);U.onBeforeShadow(o,U,O,W,st,ut,null),o.renderBufferDirect(W,null,st,ut,U,null),U.onAfterShadow(o,U,O,W,st,ut,null)}}const Q=U.children;for(let st=0,mt=Q.length;st<mt;st++)B(Q[st],O,W,w,C)}function V(U){U.target.removeEventListener("dispose",V);for(const W in p){const w=p[W],C=U.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const bT={[Jd]:$d,[th]:ih,[eh]:ah,[Ns]:nh,[$d]:Jd,[ih]:th,[ah]:eh,[nh]:Ns};function ET(o,t){function i(){let F=!1;const ft=new rn;let _t=null;const bt=new rn(0,0,0,0);return{setMask:function(vt){_t!==vt&&!F&&(o.colorMask(vt,vt,vt,vt),_t=vt)},setLocked:function(vt){F=vt},setClear:function(vt,pt,It,ie,Le){Le===!0&&(vt*=ie,pt*=ie,It*=ie),ft.set(vt,pt,It,ie),bt.equals(ft)===!1&&(o.clearColor(vt,pt,It,ie),bt.copy(ft))},reset:function(){F=!1,_t=null,bt.set(-1,0,0,0)}}}function r(){let F=!1,ft=!1,_t=null,bt=null,vt=null;return{setReversed:function(pt){if(ft!==pt){const It=t.get("EXT_clip_control");pt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ft=pt;const ie=vt;vt=null,this.setClear(ie)}},getReversed:function(){return ft},setTest:function(pt){pt?ot(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(pt){_t!==pt&&!F&&(o.depthMask(pt),_t=pt)},setFunc:function(pt){if(ft&&(pt=bT[pt]),bt!==pt){switch(pt){case Jd:o.depthFunc(o.NEVER);break;case $d:o.depthFunc(o.ALWAYS);break;case th:o.depthFunc(o.LESS);break;case Ns:o.depthFunc(o.LEQUAL);break;case eh:o.depthFunc(o.EQUAL);break;case nh:o.depthFunc(o.GEQUAL);break;case ih:o.depthFunc(o.GREATER);break;case ah:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}bt=pt}},setLocked:function(pt){F=pt},setClear:function(pt){vt!==pt&&(ft&&(pt=1-pt),o.clearDepth(pt),vt=pt)},reset:function(){F=!1,_t=null,bt=null,vt=null,ft=!1}}}function l(){let F=!1,ft=null,_t=null,bt=null,vt=null,pt=null,It=null,ie=null,Le=null;return{setTest:function(De){F||(De?ot(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(De){ft!==De&&!F&&(o.stencilMask(De),ft=De)},setFunc:function(De,pn,zn){(_t!==De||bt!==pn||vt!==zn)&&(o.stencilFunc(De,pn,zn),_t=De,bt=pn,vt=zn)},setOp:function(De,pn,zn){(pt!==De||It!==pn||ie!==zn)&&(o.stencilOp(De,pn,zn),pt=De,It=pn,ie=zn)},setLocked:function(De){F=De},setClear:function(De){Le!==De&&(o.clearStencil(De),Le=De)},reset:function(){F=!1,ft=null,_t=null,bt=null,vt=null,pt=null,It=null,ie=null,Le=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},S=new WeakMap,y=[],b=null,T=!1,M=null,_=null,N=null,D=null,B=null,V=null,U=null,O=new Ue(0,0,0),W=0,w=!1,C=null,G=null,Q=null,st=null,mt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,Y=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),P=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),P=Y>=2);let yt=null,Et={};const z=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),Rt=new rn().fromArray(z),wt=new rn().fromArray(at);function Ft(F,ft,_t,bt){const vt=new Uint8Array(4),pt=o.createTexture();o.bindTexture(F,pt),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let It=0;It<_t;It++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(ft,0,o.RGBA,1,1,bt,0,o.RGBA,o.UNSIGNED_BYTE,vt):o.texImage2D(ft+It,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,vt);return pt}const K={};K[o.TEXTURE_2D]=Ft(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=Ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=Ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=Ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ot(o.DEPTH_TEST),d.setFunc(Ns),de(!1),ue(qx),ot(o.CULL_FACE),ce(pa);function ot(F){x[F]!==!0&&(o.enable(F),x[F]=!0)}function Dt(F){x[F]!==!1&&(o.disable(F),x[F]=!1)}function Pt(F,ft){return g[F]!==ft?(o.bindFramebuffer(F,ft),g[F]=ft,F===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=ft),F===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=ft),!0):!1}function Lt(F,ft){let _t=y,bt=!1;if(F){_t=S.get(ft),_t===void 0&&(_t=[],S.set(ft,_t));const vt=F.textures;if(_t.length!==vt.length||_t[0]!==o.COLOR_ATTACHMENT0){for(let pt=0,It=vt.length;pt<It;pt++)_t[pt]=o.COLOR_ATTACHMENT0+pt;_t.length=vt.length,bt=!0}}else _t[0]!==o.BACK&&(_t[0]=o.BACK,bt=!0);bt&&o.drawBuffers(_t)}function te(F){return b!==F?(o.useProgram(F),b=F,!0):!1}const ye={[Rr]:o.FUNC_ADD,[ey]:o.FUNC_SUBTRACT,[ny]:o.FUNC_REVERSE_SUBTRACT};ye[iy]=o.MIN,ye[ay]=o.MAX;const oe={[ry]:o.ZERO,[sy]:o.ONE,[oy]:o.SRC_COLOR,[Kd]:o.SRC_ALPHA,[hy]:o.SRC_ALPHA_SATURATE,[fy]:o.DST_COLOR,[cy]:o.DST_ALPHA,[ly]:o.ONE_MINUS_SRC_COLOR,[Qd]:o.ONE_MINUS_SRC_ALPHA,[dy]:o.ONE_MINUS_DST_COLOR,[uy]:o.ONE_MINUS_DST_ALPHA,[py]:o.CONSTANT_COLOR,[my]:o.ONE_MINUS_CONSTANT_COLOR,[xy]:o.CONSTANT_ALPHA,[gy]:o.ONE_MINUS_CONSTANT_ALPHA};function ce(F,ft,_t,bt,vt,pt,It,ie,Le,De){if(F===pa){T===!0&&(Dt(o.BLEND),T=!1);return}if(T===!1&&(ot(o.BLEND),T=!0),F!==ty){if(F!==M||De!==w){if((_!==Rr||B!==Rr)&&(o.blendEquation(o.FUNC_ADD),_=Rr,B=Rr),De)switch(F){case Ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zd:o.blendFunc(o.ONE,o.ONE);break;case Yx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case jx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:en("WebGLState: Invalid blending: ",F);break}else switch(F){case Ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Yx:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jx:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",F);break}N=null,D=null,V=null,U=null,O.set(0,0,0),W=0,M=F,w=De}return}vt=vt||ft,pt=pt||_t,It=It||bt,(ft!==_||vt!==B)&&(o.blendEquationSeparate(ye[ft],ye[vt]),_=ft,B=vt),(_t!==N||bt!==D||pt!==V||It!==U)&&(o.blendFuncSeparate(oe[_t],oe[bt],oe[pt],oe[It]),N=_t,D=bt,V=pt,U=It),(ie.equals(O)===!1||Le!==W)&&(o.blendColor(ie.r,ie.g,ie.b,Le),O.copy(ie),W=Le),M=F,w=!1}function H(F,ft){F.side===fa?Dt(o.CULL_FACE):ot(o.CULL_FACE);let _t=F.side===qn;ft&&(_t=!_t),de(_t),F.blending===Ds&&F.transparent===!1?ce(pa):ce(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),d.setFunc(F.depthFunc),d.setTest(F.depthTest),d.setMask(F.depthWrite),c.setMask(F.colorWrite);const bt=F.stencilWrite;h.setTest(bt),bt&&(h.setMask(F.stencilWriteMask),h.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),h.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function de(F){C!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),C=F)}function ue(F){F!==QS?(ot(o.CULL_FACE),F!==G&&(F===qx?o.cullFace(o.BACK):F===JS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),G=F}function Ce(F){F!==Q&&(P&&o.lineWidth(F),Q=F)}function Gt(F,ft,_t){F?(ot(o.POLYGON_OFFSET_FILL),(st!==ft||mt!==_t)&&(o.polygonOffset(ft,_t),st=ft,mt=_t)):Dt(o.POLYGON_OFFSET_FILL)}function we(F){F?ot(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function jt(F){F===void 0&&(F=o.TEXTURE0+ut-1),yt!==F&&(o.activeTexture(F),yt=F)}function re(F,ft,_t){_t===void 0&&(yt===null?_t=o.TEXTURE0+ut-1:_t=yt);let bt=Et[_t];bt===void 0&&(bt={type:void 0,texture:void 0},Et[_t]=bt),(bt.type!==F||bt.texture!==ft)&&(yt!==_t&&(o.activeTexture(_t),yt=_t),o.bindTexture(F,ft||K[F]),bt.type=F,bt.texture=ft)}function L(){const F=Et[yt];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function gt(){try{o.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Tt(){try{o.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ct(){try{o.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Nt(){try{o.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Qt(){try{o.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Wt(){try{o.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function At(){try{o.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Ct(F){Rt.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),Rt.copy(F))}function Kt(F){wt.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),wt.copy(F))}function dt(F,ft){let _t=p.get(ft);_t===void 0&&(_t=new WeakMap,p.set(ft,_t));let bt=_t.get(F);bt===void 0&&(bt=o.getUniformBlockIndex(ft,F.name),_t.set(F,bt))}function Mt(F,ft){const bt=p.get(ft).get(F);m.get(ft)!==bt&&(o.uniformBlockBinding(ft,bt,F.__bindingPointIndex),m.set(ft,bt))}function Ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},yt=null,Et={},g={},S=new WeakMap,y=[],b=null,T=!1,M=null,_=null,N=null,D=null,B=null,V=null,U=null,O=new Ue(0,0,0),W=0,w=!1,C=null,G=null,Q=null,st=null,mt=null,Rt.set(0,0,o.canvas.width,o.canvas.height),wt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ot,disable:Dt,bindFramebuffer:Pt,drawBuffers:Lt,useProgram:te,setBlending:ce,setMaterial:H,setFlipSided:de,setCullFace:ue,setLineWidth:Ce,setPolygonOffset:Gt,setScissorTest:we,activeTexture:jt,bindTexture:re,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Wt,texImage3D:At,updateUBOMapping:dt,uniformBlockBinding:Mt,texStorage2D:Nt,texStorage3D:Qt,texSubImage2D:gt,texSubImage3D:Tt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Zt,scissor:Ct,viewport:Kt,reset:Ot}}function TT(o,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new _e,x=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):Zc("canvas")}function T(L,E,J){let gt=1;const Tt=re(L);if((Tt.width>J||Tt.height>J)&&(gt=J/Math.max(Tt.width,Tt.height)),gt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(gt*Tt.width),Zt=Math.floor(gt*Tt.height);g===void 0&&(g=b(ct,Zt));const Nt=E?b(ct,Zt):g;return Nt.width=ct,Nt.height=Zt,Nt.getContext("2d").drawImage(L,0,0,ct,Zt),le("WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ct+"x"+Zt+")."),Nt}else return"data"in L&&le("WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),L;return L}function M(L){return L.generateMipmaps}function _(L){o.generateMipmap(L)}function N(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(L,E,J,gt,Tt=!1){if(L!==null){if(o[L]!==void 0)return o[L];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=E;if(E===o.RED&&(J===o.FLOAT&&(ct=o.R32F),J===o.HALF_FLOAT&&(ct=o.R16F),J===o.UNSIGNED_BYTE&&(ct=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.R8UI),J===o.UNSIGNED_SHORT&&(ct=o.R16UI),J===o.UNSIGNED_INT&&(ct=o.R32UI),J===o.BYTE&&(ct=o.R8I),J===o.SHORT&&(ct=o.R16I),J===o.INT&&(ct=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ct=o.RG32F),J===o.HALF_FLOAT&&(ct=o.RG16F),J===o.UNSIGNED_BYTE&&(ct=o.RG8)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RG8UI),J===o.UNSIGNED_SHORT&&(ct=o.RG16UI),J===o.UNSIGNED_INT&&(ct=o.RG32UI),J===o.BYTE&&(ct=o.RG8I),J===o.SHORT&&(ct=o.RG16I),J===o.INT&&(ct=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ct=o.RGB16UI),J===o.UNSIGNED_INT&&(ct=o.RGB32UI),J===o.BYTE&&(ct=o.RGB8I),J===o.SHORT&&(ct=o.RGB16I),J===o.INT&&(ct=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ct=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ct=o.RGBA16UI),J===o.UNSIGNED_INT&&(ct=o.RGBA32UI),J===o.BYTE&&(ct=o.RGBA8I),J===o.SHORT&&(ct=o.RGBA16I),J===o.INT&&(ct=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(ct=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ct=o.R11F_G11F_B10F)),E===o.RGBA){const Zt=Tt?Yc:Be.getTransfer(gt);J===o.FLOAT&&(ct=o.RGBA32F),J===o.HALF_FLOAT&&(ct=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ct=Zt===qe?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ct=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ct=o.RGB5_A1)}return(ct===o.R16F||ct===o.R32F||ct===o.RG16F||ct===o.RG32F||ct===o.RGBA16F||ct===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function B(L,E){let J;return L?E===null||E===Dr||E===jo?J=o.DEPTH24_STENCIL8:E===ha?J=o.DEPTH32F_STENCIL8:E===Yo&&(J=o.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Dr||E===jo?J=o.DEPTH_COMPONENT24:E===ha?J=o.DEPTH_COMPONENT32F:E===Yo&&(J=o.DEPTH_COMPONENT16),J}function V(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==ri&&L.minFilter!==gi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function U(L){const E=L.target;E.removeEventListener("dispose",U),W(E),E.isVideoTexture&&x.delete(E)}function O(L){const E=L.target;E.removeEventListener("dispose",O),C(E)}function W(L){const E=r.get(L);if(E.__webglInit===void 0)return;const J=L.source,gt=S.get(J);if(gt){const Tt=gt[E.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&w(L),Object.keys(gt).length===0&&S.delete(J)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const J=L.source,gt=S.get(J);delete gt[E.__cacheKey],d.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(E.__webglFramebuffer[gt]))for(let Tt=0;Tt<E.__webglFramebuffer[gt].length;Tt++)o.deleteFramebuffer(E.__webglFramebuffer[gt][Tt]);else o.deleteFramebuffer(E.__webglFramebuffer[gt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[gt])}else{if(Array.isArray(E.__webglFramebuffer))for(let gt=0;gt<E.__webglFramebuffer.length;gt++)o.deleteFramebuffer(E.__webglFramebuffer[gt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let gt=0;gt<E.__webglColorRenderbuffer.length;gt++)E.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[gt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=L.textures;for(let gt=0,Tt=J.length;gt<Tt;gt++){const ct=r.get(J[gt]);ct.__webglTexture&&(o.deleteTexture(ct.__webglTexture),d.memory.textures--),r.remove(J[gt])}r.remove(L)}let G=0;function Q(){G=0}function st(){const L=G;return L>=l.maxTextures&&le("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),G+=1,L}function mt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ut(L,E){const J=r.get(L);if(L.isVideoTexture&&we(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&J.__version!==L.version){const gt=L.image;if(gt===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{K(J,L,E);return}}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function P(L,E){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){K(J,L,E);return}else L.isExternalTexture&&(J.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function Y(L,E){const J=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){K(J,L,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function k(L,E){const J=r.get(L);if(L.version>0&&J.__version!==L.version){ot(J,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const yt={[oh]:o.REPEAT,[da]:o.CLAMP_TO_EDGE,[lh]:o.MIRRORED_REPEAT},Et={[ri]:o.NEAREST,[Ry]:o.NEAREST_MIPMAP_NEAREST,[hc]:o.NEAREST_MIPMAP_LINEAR,[gi]:o.LINEAR,[gd]:o.LINEAR_MIPMAP_NEAREST,[wr]:o.LINEAR_MIPMAP_LINEAR},z={[Uy]:o.NEVER,[By]:o.ALWAYS,[Ly]:o.LESS,[u_]:o.LEQUAL,[Ny]:o.EQUAL,[Py]:o.GEQUAL,[Oy]:o.GREATER,[zy]:o.NOTEQUAL};function at(L,E){if(E.type===ha&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===gi||E.magFilter===gd||E.magFilter===hc||E.magFilter===wr||E.minFilter===gi||E.minFilter===gd||E.minFilter===hc||E.minFilter===wr)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,yt[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,yt[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,yt[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,z[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ri||E.minFilter!==hc&&E.minFilter!==wr||E.type===ha&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Rt(L,E){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",U));const gt=E.source;let Tt=S.get(gt);Tt===void 0&&(Tt={},S.set(gt,Tt));const ct=mt(E);if(ct!==L.__cacheKey){Tt[ct]===void 0&&(Tt[ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),Tt[ct].usedTimes++;const Zt=Tt[L.__cacheKey];Zt!==void 0&&(Tt[L.__cacheKey].usedTimes--,Zt.usedTimes===0&&w(E)),L.__cacheKey=ct,L.__webglTexture=Tt[ct].texture}return J}function wt(L,E,J){return Math.floor(Math.floor(L/J)/E)}function Ft(L,E,J,gt){const ct=L.updateRanges;if(ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,gt,E.data);else{ct.sort((At,Ct)=>At.start-Ct.start);let Zt=0;for(let At=1;At<ct.length;At++){const Ct=ct[Zt],Kt=ct[At],dt=Ct.start+Ct.count,Mt=wt(Kt.start,E.width,4),Ot=wt(Ct.start,E.width,4);Kt.start<=dt+1&&Mt===Ot&&wt(Kt.start+Kt.count-1,E.width,4)===Mt?Ct.count=Math.max(Ct.count,Kt.start+Kt.count-Ct.start):(++Zt,ct[Zt]=Kt)}ct.length=Zt+1;const Nt=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let At=0,Ct=ct.length;At<Ct;At++){const Kt=ct[At],dt=Math.floor(Kt.start/4),Mt=Math.ceil(Kt.count/4),Ot=dt%E.width,F=Math.floor(dt/E.width),ft=Mt,_t=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ot),o.pixelStorei(o.UNPACK_SKIP_ROWS,F),i.texSubImage2D(o.TEXTURE_2D,0,Ot,F,ft,_t,J,gt,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Nt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function K(L,E,J){let gt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=o.TEXTURE_3D);const Tt=Rt(L,E),ct=E.source;i.bindTexture(gt,L.__webglTexture,o.TEXTURE0+J);const Zt=r.get(ct);if(ct.version!==Zt.__version||Tt===!0){i.activeTexture(o.TEXTURE0+J);const Nt=Be.getPrimaries(Be.workingColorSpace),Qt=E.colorSpace===Ja?null:Be.getPrimaries(E.colorSpace),Wt=E.colorSpace===Ja||Nt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let At=T(E.image,!1,l.maxTextureSize);At=jt(E,At);const Ct=c.convert(E.format,E.colorSpace),Kt=c.convert(E.type);let dt=D(E.internalFormat,Ct,Kt,E.colorSpace,E.isVideoTexture);at(gt,E);let Mt;const Ot=E.mipmaps,F=E.isVideoTexture!==!0,ft=Zt.__version===void 0||Tt===!0,_t=ct.dataReady,bt=V(E,At);if(E.isDepthTexture)dt=B(E.format===Ko,E.type),ft&&(F?i.texStorage2D(o.TEXTURE_2D,1,dt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,dt,At.width,At.height,0,Ct,Kt,null));else if(E.isDataTexture)if(Ot.length>0){F&&ft&&i.texStorage2D(o.TEXTURE_2D,bt,dt,Ot[0].width,Ot[0].height);for(let vt=0,pt=Ot.length;vt<pt;vt++)Mt=Ot[vt],F?_t&&i.texSubImage2D(o.TEXTURE_2D,vt,0,0,Mt.width,Mt.height,Ct,Kt,Mt.data):i.texImage2D(o.TEXTURE_2D,vt,dt,Mt.width,Mt.height,0,Ct,Kt,Mt.data);E.generateMipmaps=!1}else F?(ft&&i.texStorage2D(o.TEXTURE_2D,bt,dt,At.width,At.height),_t&&Ft(E,At,Ct,Kt)):i.texImage2D(o.TEXTURE_2D,0,dt,At.width,At.height,0,Ct,Kt,At.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,bt,dt,Ot[0].width,Ot[0].height,At.depth);for(let vt=0,pt=Ot.length;vt<pt;vt++)if(Mt=Ot[vt],E.format!==Ri)if(Ct!==null)if(F){if(_t)if(E.layerUpdates.size>0){const It=Ag(Mt.width,Mt.height,E.format,E.type);for(const ie of E.layerUpdates){const Le=Mt.data.subarray(ie*It/Mt.data.BYTES_PER_ELEMENT,(ie+1)*It/Mt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,vt,0,0,ie,Mt.width,Mt.height,1,Ct,Le)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,vt,0,0,0,Mt.width,Mt.height,At.depth,Ct,Mt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,vt,dt,Mt.width,Mt.height,At.depth,0,Mt.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?_t&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,vt,0,0,0,Mt.width,Mt.height,At.depth,Ct,Kt,Mt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,vt,dt,Mt.width,Mt.height,At.depth,0,Ct,Kt,Mt.data)}else{F&&ft&&i.texStorage2D(o.TEXTURE_2D,bt,dt,Ot[0].width,Ot[0].height);for(let vt=0,pt=Ot.length;vt<pt;vt++)Mt=Ot[vt],E.format!==Ri?Ct!==null?F?_t&&i.compressedTexSubImage2D(o.TEXTURE_2D,vt,0,0,Mt.width,Mt.height,Ct,Mt.data):i.compressedTexImage2D(o.TEXTURE_2D,vt,dt,Mt.width,Mt.height,0,Mt.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?_t&&i.texSubImage2D(o.TEXTURE_2D,vt,0,0,Mt.width,Mt.height,Ct,Kt,Mt.data):i.texImage2D(o.TEXTURE_2D,vt,dt,Mt.width,Mt.height,0,Ct,Kt,Mt.data)}else if(E.isDataArrayTexture)if(F){if(ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,bt,dt,At.width,At.height,At.depth),_t)if(E.layerUpdates.size>0){const vt=Ag(At.width,At.height,E.format,E.type);for(const pt of E.layerUpdates){const It=At.data.subarray(pt*vt/At.data.BYTES_PER_ELEMENT,(pt+1)*vt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,pt,At.width,At.height,1,Ct,Kt,It)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ct,Kt,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,dt,At.width,At.height,At.depth,0,Ct,Kt,At.data);else if(E.isData3DTexture)F?(ft&&i.texStorage3D(o.TEXTURE_3D,bt,dt,At.width,At.height,At.depth),_t&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ct,Kt,At.data)):i.texImage3D(o.TEXTURE_3D,0,dt,At.width,At.height,At.depth,0,Ct,Kt,At.data);else if(E.isFramebufferTexture){if(ft)if(F)i.texStorage2D(o.TEXTURE_2D,bt,dt,At.width,At.height);else{let vt=At.width,pt=At.height;for(let It=0;It<bt;It++)i.texImage2D(o.TEXTURE_2D,It,dt,vt,pt,0,Ct,Kt,null),vt>>=1,pt>>=1}}else if(Ot.length>0){if(F&&ft){const vt=re(Ot[0]);i.texStorage2D(o.TEXTURE_2D,bt,dt,vt.width,vt.height)}for(let vt=0,pt=Ot.length;vt<pt;vt++)Mt=Ot[vt],F?_t&&i.texSubImage2D(o.TEXTURE_2D,vt,0,0,Ct,Kt,Mt):i.texImage2D(o.TEXTURE_2D,vt,dt,Ct,Kt,Mt);E.generateMipmaps=!1}else if(F){if(ft){const vt=re(At);i.texStorage2D(o.TEXTURE_2D,bt,dt,vt.width,vt.height)}_t&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Kt,At)}else i.texImage2D(o.TEXTURE_2D,0,dt,Ct,Kt,At);M(E)&&_(gt),Zt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function ot(L,E,J){if(E.image.length!==6)return;const gt=Rt(L,E),Tt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+J);const ct=r.get(Tt);if(Tt.version!==ct.__version||gt===!0){i.activeTexture(o.TEXTURE0+J);const Zt=Be.getPrimaries(Be.workingColorSpace),Nt=E.colorSpace===Ja?null:Be.getPrimaries(E.colorSpace),Qt=E.colorSpace===Ja||Zt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Wt=E.isCompressedTexture||E.image[0].isCompressedTexture,At=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let pt=0;pt<6;pt++)!Wt&&!At?Ct[pt]=T(E.image[pt],!0,l.maxCubemapSize):Ct[pt]=At?E.image[pt].image:E.image[pt],Ct[pt]=jt(E,Ct[pt]);const Kt=Ct[0],dt=c.convert(E.format,E.colorSpace),Mt=c.convert(E.type),Ot=D(E.internalFormat,dt,Mt,E.colorSpace),F=E.isVideoTexture!==!0,ft=ct.__version===void 0||gt===!0,_t=Tt.dataReady;let bt=V(E,Kt);at(o.TEXTURE_CUBE_MAP,E);let vt;if(Wt){F&&ft&&i.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Ot,Kt.width,Kt.height);for(let pt=0;pt<6;pt++){vt=Ct[pt].mipmaps;for(let It=0;It<vt.length;It++){const ie=vt[It];E.format!==Ri?dt!==null?F?_t&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,0,0,ie.width,ie.height,dt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,Ot,ie.width,ie.height,0,ie.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?_t&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,0,0,ie.width,ie.height,dt,Mt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It,Ot,ie.width,ie.height,0,dt,Mt,ie.data)}}}else{if(vt=E.mipmaps,F&&ft){vt.length>0&&bt++;const pt=re(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,bt,Ot,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(At){F?_t&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ct[pt].width,Ct[pt].height,dt,Mt,Ct[pt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Ot,Ct[pt].width,Ct[pt].height,0,dt,Mt,Ct[pt].data);for(let It=0;It<vt.length;It++){const Le=vt[It].image[pt].image;F?_t&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,0,0,Le.width,Le.height,dt,Mt,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,Ot,Le.width,Le.height,0,dt,Mt,Le.data)}}else{F?_t&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,dt,Mt,Ct[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Ot,dt,Mt,Ct[pt]);for(let It=0;It<vt.length;It++){const ie=vt[It];F?_t&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,0,0,dt,Mt,ie.image[pt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+pt,It+1,Ot,dt,Mt,ie.image[pt])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ct.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Dt(L,E,J,gt,Tt,ct){const Zt=c.convert(J.format,J.colorSpace),Nt=c.convert(J.type),Qt=D(J.internalFormat,Zt,Nt,J.colorSpace),Wt=r.get(E),At=r.get(J);if(At.__renderTarget=E,!Wt.__hasExternalTextures){const Ct=Math.max(1,E.width>>ct),Kt=Math.max(1,E.height>>ct);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?i.texImage3D(Tt,ct,Qt,Ct,Kt,E.depth,0,Zt,Nt,null):i.texImage2D(Tt,ct,Qt,Ct,Kt,0,Zt,Nt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Gt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,Tt,At.__webglTexture,0,Ce(E)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,Tt,At.__webglTexture,ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(L,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const gt=E.depthTexture,Tt=gt&&gt.isDepthTexture?gt.type:null,ct=B(E.stencilBuffer,Tt),Zt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=Ce(E);Gt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,ct,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,L)}else{const gt=E.textures;for(let Tt=0;Tt<gt.length;Tt++){const ct=gt[Tt],Zt=c.convert(ct.format,ct.colorSpace),Nt=c.convert(ct.type),Qt=D(ct.internalFormat,Zt,Nt,ct.colorSpace),Wt=Ce(E);J&&Gt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Qt,E.width,E.height):Gt(E)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Lt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(E.depthTexture);gt.__renderTarget=E,(!gt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const Tt=gt.__webglTexture,ct=Ce(E);if(E.depthTexture.format===Zo)Gt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0);else if(E.depthTexture.format===Ko)Gt(E)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0,ct):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function te(L){const E=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const gt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){const Tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",Tt)};gt.addEventListener("dispose",Tt),E.__depthDisposeCallback=Tt}E.__boundDepthTexture=gt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const gt=L.texture.mipmaps;gt&&gt.length>0?Lt(E.__webglFramebuffer[0],L):Lt(E.__webglFramebuffer,L)}else if(J){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=o.createRenderbuffer(),Pt(E.__webglDepthbuffer[gt],L,!1);else{const Tt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,ct)}}else{const gt=L.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Pt(E.__webglDepthbuffer,L,!1);else{const Tt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(L,E,J){const gt=r.get(L);E!==void 0&&Dt(gt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&te(L)}function oe(L){const E=L.texture,J=r.get(L),gt=r.get(E);L.addEventListener("dispose",O);const Tt=L.textures,ct=L.isWebGLCubeRenderTarget===!0,Zt=Tt.length>1;if(Zt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=E.version,d.memory.textures++),ct){J.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Nt]=[];for(let Qt=0;Qt<E.mipmaps.length;Qt++)J.__webglFramebuffer[Nt][Qt]=o.createFramebuffer()}else J.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Nt=0;Nt<E.mipmaps.length;Nt++)J.__webglFramebuffer[Nt]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Nt=0,Qt=Tt.length;Nt<Qt;Nt++){const Wt=r.get(Tt[Nt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Gt(L)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Nt=0;Nt<Tt.length;Nt++){const Qt=Tt[Nt];J.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Nt]);const Wt=c.convert(Qt.format,Qt.colorSpace),At=c.convert(Qt.type),Ct=D(Qt.internalFormat,Wt,At,Qt.colorSpace,L.isXRRenderTarget===!0),Kt=Ce(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Ct,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,J.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Pt(J.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ct){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),at(o.TEXTURE_CUBE_MAP,E);for(let Nt=0;Nt<6;Nt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Dt(J.__webglFramebuffer[Nt][Qt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Qt);else Dt(J.__webglFramebuffer[Nt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Nt=0,Qt=Tt.length;Nt<Qt;Nt++){const Wt=Tt[Nt],At=r.get(Wt);let Ct=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ct=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,At.__webglTexture),at(Ct,Wt),Dt(J.__webglFramebuffer,L,Wt,o.COLOR_ATTACHMENT0+Nt,Ct,0),M(Wt)&&_(Ct)}i.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Nt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,gt.__webglTexture),at(Nt,E),E.mipmaps&&E.mipmaps.length>0)for(let Qt=0;Qt<E.mipmaps.length;Qt++)Dt(J.__webglFramebuffer[Qt],L,E,o.COLOR_ATTACHMENT0,Nt,Qt);else Dt(J.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,Nt,0);M(E)&&_(Nt),i.unbindTexture()}L.depthBuffer&&te(L)}function ce(L){const E=L.textures;for(let J=0,gt=E.length;J<gt;J++){const Tt=E[J];if(M(Tt)){const ct=N(L),Zt=r.get(Tt).__webglTexture;i.bindTexture(ct,Zt),_(ct),i.unbindTexture()}}}const H=[],de=[];function ue(L){if(L.samples>0){if(Gt(L)===!1){const E=L.textures,J=L.width,gt=L.height;let Tt=o.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=r.get(L),Nt=E.length>1;if(Nt)for(let Wt=0;Wt<E.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Qt=L.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let Wt=0;Wt<E.length;Wt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Wt]);const At=r.get(E[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,J,gt,0,0,J,gt,Tt,o.NEAREST),m===!0&&(H.length=0,de.length=0,H.push(o.COLOR_ATTACHMENT0+Wt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(H.push(ct),de.push(ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,de)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,H))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let Wt=0;Wt<E.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[Wt]);const At=r.get(E[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ce(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function we(L){const E=d.render.frame;x.get(L)!==E&&(x.set(L,E),L.update())}function jt(L,E){const J=L.colorSpace,gt=L.format,Tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Ps&&J!==Ja&&(Be.getTransfer(J)===qe?(gt!==Ri||Tt!==zi)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",J)),E}function re(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=Q,this.setTexture2D=ut,this.setTexture2DArray=P,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=ye,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Gt}function AT(o,t){function i(r,l=Ja){let c;const d=Be.getTransfer(l);if(r===zi)return o.UNSIGNED_BYTE;if(r===kh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Wh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===a_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===r_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===n_)return o.BYTE;if(r===i_)return o.SHORT;if(r===Yo)return o.UNSIGNED_SHORT;if(r===Xh)return o.INT;if(r===Dr)return o.UNSIGNED_INT;if(r===ha)return o.FLOAT;if(r===Fs)return o.HALF_FLOAT;if(r===s_)return o.ALPHA;if(r===o_)return o.RGB;if(r===Ri)return o.RGBA;if(r===Zo)return o.DEPTH_COMPONENT;if(r===Ko)return o.DEPTH_STENCIL;if(r===l_)return o.RED;if(r===qh)return o.RED_INTEGER;if(r===Yh)return o.RG;if(r===jh)return o.RG_INTEGER;if(r===Zh)return o.RGBA_INTEGER;if(r===Vc||r===Xc||r===kc||r===Wc)if(d===qe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ch||r===uh||r===fh||r===dh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ch)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===uh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===hh||r===ph||r===mh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===hh||r===ph)return d===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===mh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===xh||r===gh||r===_h||r===vh||r===Sh||r===yh||r===Mh||r===bh||r===Eh||r===Th||r===Ah||r===Rh||r===Ch||r===wh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===xh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_h)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===yh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Mh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===bh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Eh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Th)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ah)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ch)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dh||r===Uh||r===Lh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Dh)return d===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Uh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Lh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nh||r===Oh||r===zh||r===Ph)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Nh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Oh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ph)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const RT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CT=`
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

}`;class wT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new E_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new va({vertexShader:RT,fragmentShader:CT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _a(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DT extends Is{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,S=null,y=null,b=null;const T=typeof XRWebGLBinding<"u",M=new wT,_={},N=i.getContextAttributes();let D=null,B=null;const V=[],U=[],O=new _e;let W=null;const w=new xi;w.viewport=new rn;const C=new xi;C.viewport=new rn;const G=[w,C],Q=new jM;let st=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ot=V[K];return ot===void 0&&(ot=new Fd,V[K]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(K){let ot=V[K];return ot===void 0&&(ot=new Fd,V[K]=ot),ot.getGripSpace()},this.getHand=function(K){let ot=V[K];return ot===void 0&&(ot=new Fd,V[K]=ot),ot.getHandSpace()};function ut(K){const ot=U.indexOf(K.inputSource);if(ot===-1)return;const Dt=V[ot];Dt!==void 0&&(Dt.update(K.inputSource,K.frame,p||d),Dt.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",Y);for(let K=0;K<V.length;K++){const ot=U[K];ot!==null&&(U[K]=null,V[K].disconnect(ot))}st=null,mt=null,M.reset();for(const K in _)delete _[K];t.setRenderTarget(D),y=null,S=null,g=null,l=null,B=null,Ft.stop(),r.isPresenting=!1,t.setPixelRatio(W),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,r.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",P),l.addEventListener("inputsourceschange",Y),N.xrCompatible!==!0&&await i.makeXRCompatible(),W=t.getPixelRatio(),t.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Pt=null,Lt=null;N.depth&&(Lt=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=N.stencil?Ko:Zo,Pt=N.stencil?jo:Dr);const te={colorFormat:i.RGBA8,depthFormat:Lt,scaleFactor:c};g=this.getBinding(),S=g.createProjectionLayer(te),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new Ur(S.textureWidth,S.textureHeight,{format:Ri,type:zi,depthTexture:new b_(S.textureWidth,S.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:N.stencil,colorSpace:t.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Dt={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new Ur(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ft.setContext(l),Ft.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Y(K){for(let ot=0;ot<K.removed.length;ot++){const Dt=K.removed[ot],Pt=U.indexOf(Dt);Pt>=0&&(U[Pt]=null,V[Pt].disconnect(Dt))}for(let ot=0;ot<K.added.length;ot++){const Dt=K.added[ot];let Pt=U.indexOf(Dt);if(Pt===-1){for(let te=0;te<V.length;te++)if(te>=U.length){U.push(Dt),Pt=te;break}else if(U[te]===null){U[te]=Dt,Pt=te;break}if(Pt===-1)break}const Lt=V[Pt];Lt&&Lt.connect(Dt)}}const k=new et,yt=new et;function Et(K,ot,Dt){k.setFromMatrixPosition(ot.matrixWorld),yt.setFromMatrixPosition(Dt.matrixWorld);const Pt=k.distanceTo(yt),Lt=ot.projectionMatrix.elements,te=Dt.projectionMatrix.elements,ye=Lt[14]/(Lt[10]-1),oe=Lt[14]/(Lt[10]+1),ce=(Lt[9]+1)/Lt[5],H=(Lt[9]-1)/Lt[5],de=(Lt[8]-1)/Lt[0],ue=(te[8]+1)/te[0],Ce=ye*de,Gt=ye*ue,we=Pt/(-de+ue),jt=we*-de;if(ot.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(jt),K.translateZ(we),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Lt[10]===-1)K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const re=ye+we,L=oe+we,E=Ce-jt,J=Gt+(Pt-jt),gt=ce*oe/L*re,Tt=H*oe/L*re;K.projectionMatrix.makePerspective(E,J,gt,Tt,re,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function z(K,ot){ot===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ot.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ot=K.near,Dt=K.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),Q.near=C.near=w.near=ot,Q.far=C.far=w.far=Dt,(st!==Q.near||mt!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),st=Q.near,mt=Q.far),Q.layers.mask=K.layers.mask|6,w.layers.mask=Q.layers.mask&3,C.layers.mask=Q.layers.mask&5;const Pt=K.parent,Lt=Q.cameras;z(Q,Pt);for(let te=0;te<Lt.length;te++)z(Lt[te],Pt);Lt.length===2?Et(Q,w,C):Q.projectionMatrix.copy(w.projectionMatrix),at(K,Q,Pt)};function at(K,ot,Dt){Dt===null?K.matrix.copy(ot.matrixWorld):(K.matrix.copy(Dt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ot.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ot.projectionMatrix),K.projectionMatrixInverse.copy(ot.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(K){m=K,S!==null&&(S.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(K){return _[K]};let Rt=null;function wt(K,ot){if(x=ot.getViewerPose(p||d),b=ot,x!==null){const Dt=x.views;y!==null&&(t.setRenderTargetFramebuffer(B,y.framebuffer),t.setRenderTarget(B));let Pt=!1;Dt.length!==Q.cameras.length&&(Q.cameras.length=0,Pt=!0);for(let oe=0;oe<Dt.length;oe++){const ce=Dt[oe];let H=null;if(y!==null)H=y.getViewport(ce);else{const ue=g.getViewSubImage(S,ce);H=ue.viewport,oe===0&&(t.setRenderTargetTextures(B,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(B))}let de=G[oe];de===void 0&&(de=new xi,de.layers.enable(oe),de.viewport=new rn,G[oe]=de),de.matrix.fromArray(ce.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(ce.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(H.x,H.y,H.width,H.height),oe===0&&(Q.matrix.copy(de.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Pt===!0&&Q.cameras.push(de)}const Lt=l.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const oe=g.getDepthInformation(Dt[0]);oe&&oe.isValid&&oe.texture&&M.init(oe,l.renderState)}if(Lt&&Lt.includes("camera-access")&&T){t.state.unbindTexture(),g=r.getBinding();for(let oe=0;oe<Dt.length;oe++){const ce=Dt[oe].camera;if(ce){let H=_[ce];H||(H=new E_,_[ce]=H);const de=g.getCameraImage(ce);H.sourceTexture=de}}}}for(let Dt=0;Dt<V.length;Dt++){const Pt=U[Dt],Lt=V[Dt];Pt!==null&&Lt!==void 0&&Lt.update(Pt,ot,p||d)}Rt&&Rt(K,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),b=null}const Ft=new R_;Ft.setAnimationLoop(wt),this.setAnimationLoop=function(K){Rt=K},this.dispose=function(){}}}const Tr=new Pi,UT=new tn;function LT(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,g_(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,N,D,B){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),x(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,B)):_.isMeshMatcapMaterial?(c(M,_),b(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),T(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(d(M,_),_.isLineDashedMaterial&&h(M,_)):_.isPointsMaterial?m(M,_,N,D):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===qn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===qn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const N=t.get(_),D=N.envMap,B=N.envMapRotation;D&&(M.envMap.value=D,Tr.copy(B),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),M.envMapRotation.value.setFromMatrix4(UT.makeRotationFromEuler(Tr)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function d(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function h(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,N,D){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*N,M.scale.value=D*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,N){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const N=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function NT(o,t,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,D){const B=D.program;r.uniformBlockBinding(N,B)}function p(N,D){let B=l[N.id];B===void 0&&(b(N),B=x(N),l[N.id]=B,N.addEventListener("dispose",M));const V=D.program;r.updateUBOMapping(N,V);const U=t.render.frame;c[N.id]!==U&&(S(N),c[N.id]=U)}function x(N){const D=g();N.__bindingPointIndex=D;const B=o.createBuffer(),V=N.__size,U=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,V,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,B),B}function g(){for(let N=0;N<h;N++)if(d.indexOf(N)===-1)return d.push(N),N;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const D=l[N.id],B=N.uniforms,V=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let U=0,O=B.length;U<O;U++){const W=Array.isArray(B[U])?B[U]:[B[U]];for(let w=0,C=W.length;w<C;w++){const G=W[w];if(y(G,U,w,V)===!0){const Q=G.__offset,st=Array.isArray(G.value)?G.value:[G.value];let mt=0;for(let ut=0;ut<st.length;ut++){const P=st[ut],Y=T(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,Q+mt,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,mt),mt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Q,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,D,B,V){const U=N.value,O=D+"_"+B;if(V[O]===void 0)return typeof U=="number"||typeof U=="boolean"?V[O]=U:V[O]=U.clone(),!0;{const W=V[O];if(typeof U=="number"||typeof U=="boolean"){if(W!==U)return V[O]=U,!0}else if(W.equals(U)===!1)return W.copy(U),!0}return!1}function b(N){const D=N.uniforms;let B=0;const V=16;for(let O=0,W=D.length;O<W;O++){const w=Array.isArray(D[O])?D[O]:[D[O]];for(let C=0,G=w.length;C<G;C++){const Q=w[C],st=Array.isArray(Q.value)?Q.value:[Q.value];for(let mt=0,ut=st.length;mt<ut;mt++){const P=st[mt],Y=T(P),k=B%V,yt=k%Y.boundary,Et=k+yt;B+=yt,Et!==0&&V-Et<Y.storage&&(B+=V-Et),Q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=B,B+=Y.storage}}}const U=B%V;return U>0&&(B+=V-U),N.__size=B,N.__cache={},this}function T(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):le("WebGLRenderer: Unsupported uniform value type.",N),D}function M(N){const D=N.target;D.removeEventListener("dispose",M);const B=d.indexOf(D.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function _(){for(const N in l)o.deleteBuffer(l[N]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}const OT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ca=null;function zT(){return ca===null&&(ca=new wM(OT,32,32,Yh,Fs),ca.minFilter=gi,ca.magFilter=gi,ca.wrapS=da,ca.wrapT=da,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class PT{constructor(t={}){const{canvas:i=Fy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const b=new Set([Zh,jh,qh]),T=new Set([zi,Dr,Yo,jo,kh,Wh]),M=new Uint32Array(4),_=new Int32Array(4);let N=null,D=null;const B=[],V=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ma,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let O=!1;this._outputColorSpace=Wn;let W=0,w=0,C=null,G=-1,Q=null;const st=new rn,mt=new rn;let ut=null;const P=new Ue(0);let Y=0,k=i.width,yt=i.height,Et=1,z=null,at=null;const Rt=new rn(0,0,k,yt),wt=new rn(0,0,k,yt);let Ft=!1;const K=new tp;let ot=!1,Dt=!1;const Pt=new tn,Lt=new et,te=new rn,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function ce(){return C===null?Et:1}let H=r;function de(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Vh}`),i.addEventListener("webglcontextlost",vt,!1),i.addEventListener("webglcontextrestored",pt,!1),i.addEventListener("webglcontextcreationerror",It,!1),H===null){const q="webgl2";if(H=de(q,R),H===null)throw de(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ue,Ce,Gt,we,jt,re,L,E,J,gt,Tt,ct,Zt,Nt,Qt,Wt,At,Ct,Kt,dt,Mt,Ot,F,ft;function _t(){ue=new k1(H),ue.init(),Ot=new AT(H,ue),Ce=new z1(H,ue,t,Ot),Gt=new ET(H,ue),Ce.reversedDepthBuffer&&S&&Gt.buffers.depth.setReversed(!0),we=new Y1(H),jt=new fT,re=new TT(H,ue,Gt,jt,Ce,Ot,we),L=new B1(U),E=new X1(U),J=new QM(H),F=new N1(H,J),gt=new W1(H,J,we,F),Tt=new Z1(H,gt,J,we),Kt=new j1(H,Ce,re),Wt=new P1(jt),ct=new uT(U,L,E,ue,Ce,F,Wt),Zt=new LT(U,jt),Nt=new hT,Qt=new vT(ue),Ct=new L1(U,L,E,Gt,Tt,y,m),At=new MT(U,Tt,Ce),ft=new NT(H,we,Ce,Gt),dt=new O1(H,ue,we),Mt=new q1(H,ue,we),we.programs=ct.programs,U.capabilities=Ce,U.extensions=ue,U.properties=jt,U.renderLists=Nt,U.shadowMap=At,U.state=Gt,U.info=we}_t();const bt=new DT(U,H);this.xr=bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(R){R!==void 0&&(Et=R,this.setSize(k,yt,!1))},this.getSize=function(R){return R.set(k,yt)},this.setSize=function(R,q,rt=!0){if(bt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,yt=q,i.width=Math.floor(R*Et),i.height=Math.floor(q*Et),rt===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(k*Et,yt*Et).floor()},this.setDrawingBufferSize=function(R,q,rt){k=R,yt=q,Et=rt,i.width=Math.floor(R*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(st)},this.getViewport=function(R){return R.copy(Rt)},this.setViewport=function(R,q,rt,nt){R.isVector4?Rt.set(R.x,R.y,R.z,R.w):Rt.set(R,q,rt,nt),Gt.viewport(st.copy(Rt).multiplyScalar(Et).round())},this.getScissor=function(R){return R.copy(wt)},this.setScissor=function(R,q,rt,nt){R.isVector4?wt.set(R.x,R.y,R.z,R.w):wt.set(R,q,rt,nt),Gt.scissor(mt.copy(wt).multiplyScalar(Et).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(R){Gt.setScissorTest(Ft=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,rt=!0){let nt=0;if(R){let Z=!1;if(C!==null){const Ut=C.texture.format;Z=b.has(Ut)}if(Z){const Ut=C.texture.type,zt=T.has(Ut),Vt=Ct.getClearColor(),Xt=Ct.getClearAlpha(),ne=Vt.r,se=Vt.g,Jt=Vt.b;zt?(M[0]=ne,M[1]=se,M[2]=Jt,M[3]=Xt,H.clearBufferuiv(H.COLOR,0,M)):(_[0]=ne,_[1]=se,_[2]=Jt,_[3]=Xt,H.clearBufferiv(H.COLOR,0,_))}else nt|=H.COLOR_BUFFER_BIT}q&&(nt|=H.DEPTH_BUFFER_BIT),rt&&(nt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",vt,!1),i.removeEventListener("webglcontextrestored",pt,!1),i.removeEventListener("webglcontextcreationerror",It,!1),Ct.dispose(),Nt.dispose(),Qt.dispose(),jt.dispose(),L.dispose(),E.dispose(),Tt.dispose(),F.dispose(),ft.dispose(),ct.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Sa),bt.removeEventListener("sessionend",Gs),vi.stop()};function vt(R){R.preventDefault(),Kc("WebGLRenderer: Context Lost."),O=!0}function pt(){Kc("WebGLRenderer: Context Restored."),O=!1;const R=we.autoReset,q=At.enabled,rt=At.autoUpdate,nt=At.needsUpdate,Z=At.type;_t(),we.autoReset=R,At.enabled=q,At.autoUpdate=rt,At.needsUpdate=nt,At.type=Z}function It(R){en("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ie(R){const q=R.target;q.removeEventListener("dispose",ie),Le(q)}function Le(R){De(R),jt.remove(R)}function De(R){const q=jt.get(R).programs;q!==void 0&&(q.forEach(function(rt){ct.releaseProgram(rt)}),R.isShaderMaterial&&ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,rt,nt,Z,Ut){q===null&&(q=ye);const zt=Z.isMesh&&Z.matrixWorld.determinant()<0,Vt=au(R,q,rt,nt,Z);Gt.setMaterial(nt,zt);let Xt=rt.index,ne=1;if(nt.wireframe===!0){if(Xt=gt.getWireframeAttribute(rt),Xt===void 0)return;ne=2}const se=rt.drawRange,Jt=rt.attributes.position;let pe=se.start*ne,Ne=(se.start+se.count)*ne;Ut!==null&&(pe=Math.max(pe,Ut.start*ne),Ne=Math.min(Ne,(Ut.start+Ut.count)*ne)),Xt!==null?(pe=Math.max(pe,0),Ne=Math.min(Ne,Xt.count)):Jt!=null&&(pe=Math.max(pe,0),Ne=Math.min(Ne,Jt.count));const Oe=Ne-pe;if(Oe<0||Oe===1/0)return;F.setup(Z,nt,Vt,rt,Xt);let Te,Ie=dt;if(Xt!==null&&(Te=J.get(Xt),Ie=Mt,Ie.setIndex(Te)),Z.isMesh)nt.wireframe===!0?(Gt.setLineWidth(nt.wireframeLinewidth*ce()),Ie.setMode(H.LINES)):Ie.setMode(H.TRIANGLES);else if(Z.isLine){let ee=nt.linewidth;ee===void 0&&(ee=1),Gt.setLineWidth(ee*ce()),Z.isLineSegments?Ie.setMode(H.LINES):Z.isLineLoop?Ie.setMode(H.LINE_LOOP):Ie.setMode(H.LINE_STRIP)}else Z.isPoints?Ie.setMode(H.POINTS):Z.isSprite&&Ie.setMode(H.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Ie.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ee=Z._multiDrawStarts,Ye=Z._multiDrawCounts,Ae=Z._multiDrawCount,Sn=Xt?J.get(Xt).bytesPerElement:1,Ma=jt.get(nt).currentProgram.getUniforms();for(let Ze=0;Ze<Ae;Ze++)Ma.setValue(H,"_gl_DrawID",Ze),Ie.render(ee[Ze]/Sn,Ye[Ze])}else if(Z.isInstancedMesh)Ie.renderInstances(pe,Oe,Z.count);else if(rt.isInstancedBufferGeometry){const ee=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ye=Math.min(rt.instanceCount,ee);Ie.renderInstances(pe,Oe,Ye)}else Ie.render(pe,Oe)};function pn(R,q,rt){R.transparent===!0&&R.side===fa&&R.forceSinglePass===!1?(R.side=qn,R.needsUpdate=!0,mn(R,q,rt),R.side=tr,R.needsUpdate=!0,mn(R,q,rt),R.side=fa):mn(R,q,rt)}this.compile=function(R,q,rt=null){rt===null&&(rt=R),D=Qt.get(rt),D.init(q),V.push(D),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),R!==rt&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights();const nt=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ut=Z.material;if(Ut)if(Array.isArray(Ut))for(let zt=0;zt<Ut.length;zt++){const Vt=Ut[zt];pn(Vt,rt,Z),nt.add(Vt)}else pn(Ut,rt,Z),nt.add(Ut)}),D=V.pop(),nt},this.compileAsync=function(R,q,rt=null){const nt=this.compile(R,q,rt);return new Promise(Z=>{function Ut(){if(nt.forEach(function(zt){jt.get(zt).currentProgram.isReady()&&nt.delete(zt)}),nt.size===0){Z(R);return}setTimeout(Ut,10)}ue.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let zn=null;function er(R){zn&&zn(R)}function Sa(){vi.stop()}function Gs(){vi.start()}const vi=new R_;vi.setAnimationLoop(er),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(R){zn=R,bt.setAnimationLoop(R),R===null?vi.stop():vi.start()},bt.addEventListener("sessionstart",Sa),bt.addEventListener("sessionend",Gs),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,C),D=Qt.get(R,V.length),D.init(q),V.push(D),Pt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(Pt,Oi,q.reversedDepth),Dt=this.localClippingEnabled,ot=Wt.init(this.clippingPlanes,Dt),N=Nt.get(R,B.length),N.init(),B.push(N),bt.enabled===!0&&bt.isPresenting===!0){const Ut=U.xr.getDepthSensingMesh();Ut!==null&&nr(Ut,q,-1/0,U.sortObjects)}nr(R,q,0,U.sortObjects),N.finish(),U.sortObjects===!0&&N.sort(z,at),oe=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,oe&&Ct.addToRenderList(N,R),this.info.render.frame++,ot===!0&&Wt.beginShadows();const rt=D.state.shadowsArray;At.render(rt,R,q),ot===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=N.opaque,Z=N.transmissive;if(D.setupLights(),q.isArrayCamera){const Ut=q.cameras;if(Z.length>0)for(let zt=0,Vt=Ut.length;zt<Vt;zt++){const Xt=Ut[zt];Xs(nt,Z,R,Xt)}oe&&Ct.render(R);for(let zt=0,Vt=Ut.length;zt<Vt;zt++){const Xt=Ut[zt];Vs(N,R,Xt,Xt.viewport)}}else Z.length>0&&Xs(nt,Z,R,q),oe&&Ct.render(R),Vs(N,R,q);C!==null&&w===0&&(re.updateMultisampleRenderTarget(C),re.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(U,R,q),F.resetDefaultState(),G=-1,Q=null,V.pop(),V.length>0?(D=V[V.length-1],ot===!0&&Wt.setGlobalState(U.clippingPlanes,D.state.camera)):D=null,B.pop(),B.length>0?N=B[B.length-1]:N=null};function nr(R,q,rt,nt){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){nt&&te.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Pt);const zt=Tt.update(R),Vt=R.material;Vt.visible&&N.push(R,zt,Vt,rt,te.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const zt=Tt.update(R),Vt=R.material;if(nt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),te.copy(R.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),te.copy(zt.boundingSphere.center)),te.applyMatrix4(R.matrixWorld).applyMatrix4(Pt)),Array.isArray(Vt)){const Xt=zt.groups;for(let ne=0,se=Xt.length;ne<se;ne++){const Jt=Xt[ne],pe=Vt[Jt.materialIndex];pe&&pe.visible&&N.push(R,zt,pe,rt,te.z,Jt)}}else Vt.visible&&N.push(R,zt,Vt,rt,te.z,null)}}const Ut=R.children;for(let zt=0,Vt=Ut.length;zt<Vt;zt++)nr(Ut[zt],q,rt,nt)}function Vs(R,q,rt,nt){const{opaque:Z,transmissive:Ut,transparent:zt}=R;D.setupLightsView(rt),ot===!0&&Wt.setGlobalState(U.clippingPlanes,rt),nt&&Gt.viewport(st.copy(nt)),Z.length>0&&jn(Z,q,rt),Ut.length>0&&jn(Ut,q,rt),zt.length>0&&jn(zt,q,rt),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Xs(R,q,rt,nt){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[nt.id]===void 0&&(D.state.transmissionRenderTarget[nt.id]=new Ur(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Fs:zi,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const Ut=D.state.transmissionRenderTarget[nt.id],zt=nt.viewport||st;Ut.setSize(zt.z*U.transmissionResolutionScale,zt.w*U.transmissionResolutionScale);const Vt=U.getRenderTarget(),Xt=U.getActiveCubeFace(),ne=U.getActiveMipmapLevel();U.setRenderTarget(Ut),U.getClearColor(P),Y=U.getClearAlpha(),Y<1&&U.setClearColor(16777215,.5),U.clear(),oe&&Ct.render(rt);const se=U.toneMapping;U.toneMapping=ma;const Jt=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),D.setupLightsView(nt),ot===!0&&Wt.setGlobalState(U.clippingPlanes,nt),jn(R,rt,nt),re.updateMultisampleRenderTarget(Ut),re.updateRenderTargetMipmap(Ut),ue.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ne=0,Oe=q.length;Ne<Oe;Ne++){const Te=q[Ne],{object:Ie,geometry:ee,material:Ye,group:Ae}=Te;if(Ye.side===fa&&Ie.layers.test(nt.layers)){const Sn=Ye.side;Ye.side=qn,Ye.needsUpdate=!0,ln(Ie,rt,nt,ee,Ye,Ae),Ye.side=Sn,Ye.needsUpdate=!0,pe=!0}}pe===!0&&(re.updateMultisampleRenderTarget(Ut),re.updateRenderTargetMipmap(Ut))}U.setRenderTarget(Vt,Xt,ne),U.setClearColor(P,Y),Jt!==void 0&&(nt.viewport=Jt),U.toneMapping=se}function jn(R,q,rt){const nt=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Ut=R.length;Z<Ut;Z++){const zt=R[Z],{object:Vt,geometry:Xt,group:ne}=zt;let se=zt.material;se.allowOverride===!0&&nt!==null&&(se=nt),Vt.layers.test(rt.layers)&&ln(Vt,q,rt,Xt,se,ne)}}function ln(R,q,rt,nt,Z,Ut){R.onBeforeRender(U,q,rt,nt,Z,Ut),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,q,rt,nt,R,Ut),Z.transparent===!0&&Z.side===fa&&Z.forceSinglePass===!1?(Z.side=qn,Z.needsUpdate=!0,U.renderBufferDirect(rt,q,nt,Z,R,Ut),Z.side=tr,Z.needsUpdate=!0,U.renderBufferDirect(rt,q,nt,Z,R,Ut),Z.side=fa):U.renderBufferDirect(rt,q,nt,Z,R,Ut),R.onAfterRender(U,q,rt,nt,Z,Ut)}function mn(R,q,rt){q.isScene!==!0&&(q=ye);const nt=jt.get(R),Z=D.state.lights,Ut=D.state.shadowsArray,zt=Z.state.version,Vt=ct.getParameters(R,Z.state,Ut,q,rt),Xt=ct.getProgramCacheKey(Vt);let ne=nt.programs;nt.environment=R.isMeshStandardMaterial?q.environment:null,nt.fog=q.fog,nt.envMap=(R.isMeshStandardMaterial?E:L).get(R.envMap||nt.environment),nt.envMapRotation=nt.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ne===void 0&&(R.addEventListener("dispose",ie),ne=new Map,nt.programs=ne);let se=ne.get(Xt);if(se!==void 0){if(nt.currentProgram===se&&nt.lightsStateVersion===zt)return Or(R,Vt),se}else Vt.uniforms=ct.getUniforms(R),R.onBeforeCompile(Vt,U),se=ct.acquireProgram(Vt,Xt),ne.set(Xt,se),nt.uniforms=Vt.uniforms;const Jt=nt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Jt.clippingPlanes=Wt.uniform),Or(R,Vt),nt.needsLights=il(R),nt.lightsStateVersion=zt,nt.needsLights&&(Jt.ambientLightColor.value=Z.state.ambient,Jt.lightProbe.value=Z.state.probe,Jt.directionalLights.value=Z.state.directional,Jt.directionalLightShadows.value=Z.state.directionalShadow,Jt.spotLights.value=Z.state.spot,Jt.spotLightShadows.value=Z.state.spotShadow,Jt.rectAreaLights.value=Z.state.rectArea,Jt.ltc_1.value=Z.state.rectAreaLTC1,Jt.ltc_2.value=Z.state.rectAreaLTC2,Jt.pointLights.value=Z.state.point,Jt.pointLightShadows.value=Z.state.pointShadow,Jt.hemisphereLights.value=Z.state.hemi,Jt.directionalShadowMap.value=Z.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Jt.spotShadowMap.value=Z.state.spotShadowMap,Jt.spotLightMatrix.value=Z.state.spotLightMatrix,Jt.spotLightMap.value=Z.state.spotLightMap,Jt.pointShadowMap.value=Z.state.pointShadowMap,Jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),nt.currentProgram=se,nt.uniformsList=null,se}function Bi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Or(R,q){const rt=jt.get(R);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function au(R,q,rt,nt,Z){q.isScene!==!0&&(q=ye),re.resetTextureUnits();const Ut=q.fog,zt=nt.isMeshStandardMaterial?q.environment:null,Vt=C===null?U.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ps,Xt=(nt.isMeshStandardMaterial?E:L).get(nt.envMap||zt),ne=nt.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,se=!!rt.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Jt=!!rt.morphAttributes.position,pe=!!rt.morphAttributes.normal,Ne=!!rt.morphAttributes.color;let Oe=ma;nt.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Oe=U.toneMapping);const Te=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Ie=Te!==void 0?Te.length:0,ee=jt.get(nt),Ye=D.state.lights;if(ot===!0&&(Dt===!0||R!==Q)){const Mn=R===Q&&nt.id===G;Wt.setState(nt,R,Mn)}let Ae=!1;nt.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Ye.state.version||ee.outputColorSpace!==Vt||Z.isBatchedMesh&&ee.batching===!1||!Z.isBatchedMesh&&ee.batching===!0||Z.isBatchedMesh&&ee.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ee.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ee.instancing===!1||!Z.isInstancedMesh&&ee.instancing===!0||Z.isSkinnedMesh&&ee.skinning===!1||!Z.isSkinnedMesh&&ee.skinning===!0||Z.isInstancedMesh&&ee.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ee.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ee.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ee.instancingMorph===!1&&Z.morphTexture!==null||ee.envMap!==Xt||nt.fog===!0&&ee.fog!==Ut||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Wt.numPlanes||ee.numIntersection!==Wt.numIntersection)||ee.vertexAlphas!==ne||ee.vertexTangents!==se||ee.morphTargets!==Jt||ee.morphNormals!==pe||ee.morphColors!==Ne||ee.toneMapping!==Oe||ee.morphTargetsCount!==Ie)&&(Ae=!0):(Ae=!0,ee.__version=nt.version);let Sn=ee.currentProgram;Ae===!0&&(Sn=mn(nt,q,Z));let Ma=!1,Ze=!1,Fi=!1;const Ke=Sn.getUniforms(),yn=ee.uniforms;if(Gt.useProgram(Sn.program)&&(Ma=!0,Ze=!0,Fi=!0),nt.id!==G&&(G=nt.id,Ze=!0),Ma||Q!==R){Gt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(H,"projectionMatrix",R.projectionMatrix),Ke.setValue(H,"viewMatrix",R.matrixWorldInverse);const An=Ke.map.cameraPosition;An!==void 0&&An.setValue(H,Lt.setFromMatrixPosition(R.matrixWorld)),Ce.logarithmicDepthBuffer&&Ke.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ke.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),Q!==R&&(Q=R,Ze=!0,Fi=!0)}if(Z.isSkinnedMesh){Ke.setOptional(H,Z,"bindMatrix"),Ke.setOptional(H,Z,"bindMatrixInverse");const Mn=Z.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Ke.setValue(H,"boneTexture",Mn.boneTexture,re))}Z.isBatchedMesh&&(Ke.setOptional(H,Z,"batchingTexture"),Ke.setValue(H,"batchingTexture",Z._matricesTexture,re),Ke.setOptional(H,Z,"batchingIdTexture"),Ke.setValue(H,"batchingIdTexture",Z._indirectTexture,re),Ke.setOptional(H,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ke.setValue(H,"batchingColorTexture",Z._colorsTexture,re));const xn=rt.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Kt.update(Z,rt,Sn),(Ze||ee.receiveShadow!==Z.receiveShadow)&&(ee.receiveShadow=Z.receiveShadow,Ke.setValue(H,"receiveShadow",Z.receiveShadow)),nt.isMeshGouraudMaterial&&nt.envMap!==null&&(yn.envMap.value=Xt,yn.flipEnvMap.value=Xt.isCubeTexture&&Xt.isRenderTargetTexture===!1?-1:1),nt.isMeshStandardMaterial&&nt.envMap===null&&q.environment!==null&&(yn.envMapIntensity.value=q.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=zT()),Ze&&(Ke.setValue(H,"toneMappingExposure",U.toneMappingExposure),ee.needsLights&&ru(yn,Fi),Ut&&nt.fog===!0&&Zt.refreshFogUniforms(yn,Ut),Zt.refreshMaterialUniforms(yn,nt,Et,yt,D.state.transmissionRenderTarget[R.id]),qc.upload(H,Bi(ee),yn,re)),nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(qc.upload(H,Bi(ee),yn,re),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ke.setValue(H,"center",Z.center),Ke.setValue(H,"modelViewMatrix",Z.modelViewMatrix),Ke.setValue(H,"normalMatrix",Z.normalMatrix),Ke.setValue(H,"modelMatrix",Z.matrixWorld),nt.isShaderMaterial||nt.isRawShaderMaterial){const Mn=nt.uniformsGroups;for(let An=0,Ci=Mn.length;An<Ci;An++){const Ii=Mn[An];ft.update(Ii,Sn),ft.bind(Ii,Sn)}}return Sn}function ru(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function il(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,rt){const nt=jt.get(R);nt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=q,jt.get(R.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:rt,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const rt=jt.get(R);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const ir=H.createFramebuffer();this.setRenderTarget=function(R,q=0,rt=0){C=R,W=q,w=rt;let nt=!0,Z=null,Ut=!1,zt=!1;if(R){const Xt=jt.get(R);if(Xt.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(H.FRAMEBUFFER,null),nt=!1;else if(Xt.__webglFramebuffer===void 0)re.setupRenderTarget(R);else if(Xt.__hasExternalTextures)re.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Jt=R.depthTexture;if(Xt.__boundDepthTexture!==Jt){if(Jt!==null&&jt.has(Jt)&&(R.width!==Jt.image.width||R.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(R)}}const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(zt=!0);const se=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(se[q])?Z=se[q][rt]:Z=se[q],Ut=!0):R.samples>0&&re.useMultisampledRTT(R)===!1?Z=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(se)?Z=se[rt]:Z=se,st.copy(R.viewport),mt.copy(R.scissor),ut=R.scissorTest}else st.copy(Rt).multiplyScalar(Et).floor(),mt.copy(wt).multiplyScalar(Et).floor(),ut=Ft;if(rt!==0&&(Z=ir),Gt.bindFramebuffer(H.FRAMEBUFFER,Z)&&nt&&Gt.drawBuffers(R,Z),Gt.viewport(st),Gt.scissor(mt),Gt.setScissorTest(ut),Ut){const Xt=jt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Xt.__webglTexture,rt)}else if(zt){const Xt=q;for(let ne=0;ne<R.textures.length;ne++){const se=jt.get(R.textures[ne]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ne,se.__webglTexture,rt,Xt)}}else if(R!==null&&rt!==0){const Xt=jt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Xt.__webglTexture,rt)}G=-1},this.readRenderTargetPixels=function(R,q,rt,nt,Z,Ut,zt,Vt=0){if(!(R&&R.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Xt=Xt[zt]),Xt){Gt.bindFramebuffer(H.FRAMEBUFFER,Xt);try{const ne=R.textures[Vt],se=ne.format,Jt=ne.type;if(!Ce.textureFormatReadable(se)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Jt)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-nt&&rt>=0&&rt<=R.height-Z&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(q,rt,nt,Z,Ot.convert(se),Ot.convert(Jt),Ut))}finally{const ne=C!==null?jt.get(C).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(R,q,rt,nt,Z,Ut,zt,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&zt!==void 0&&(Xt=Xt[zt]),Xt)if(q>=0&&q<=R.width-nt&&rt>=0&&rt<=R.height-Z){Gt.bindFramebuffer(H.FRAMEBUFFER,Xt);const ne=R.textures[Vt],se=ne.format,Jt=ne.type;if(!Ce.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.bufferData(H.PIXEL_PACK_BUFFER,Ut.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Vt),H.readPixels(q,rt,nt,Z,Ot.convert(se),Ot.convert(Jt),0);const Ne=C!==null?jt.get(C).__webglFramebuffer:null;Gt.bindFramebuffer(H.FRAMEBUFFER,Ne);const Oe=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Iy(H,Oe,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,pe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ut),H.deleteBuffer(pe),H.deleteSync(Oe),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,rt=0){const nt=Math.pow(2,-rt),Z=Math.floor(R.image.width*nt),Ut=Math.floor(R.image.height*nt),zt=q!==null?q.x:0,Vt=q!==null?q.y:0;re.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,rt,0,0,zt,Vt,Z,Ut),Gt.unbindTexture()};const ks=H.createFramebuffer(),ya=H.createFramebuffer();this.copyTextureToTexture=function(R,q,rt=null,nt=null,Z=0,Ut=null){Ut===null&&(Z!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=Z,Z=0):Ut=0);let zt,Vt,Xt,ne,se,Jt,pe,Ne,Oe;const Te=R.isCompressedTexture?R.mipmaps[Ut]:R.image;if(rt!==null)zt=rt.max.x-rt.min.x,Vt=rt.max.y-rt.min.y,Xt=rt.isBox3?rt.max.z-rt.min.z:1,ne=rt.min.x,se=rt.min.y,Jt=rt.isBox3?rt.min.z:0;else{const xn=Math.pow(2,-Z);zt=Math.floor(Te.width*xn),Vt=Math.floor(Te.height*xn),R.isDataArrayTexture?Xt=Te.depth:R.isData3DTexture?Xt=Math.floor(Te.depth*xn):Xt=1,ne=0,se=0,Jt=0}nt!==null?(pe=nt.x,Ne=nt.y,Oe=nt.z):(pe=0,Ne=0,Oe=0);const Ie=Ot.convert(q.format),ee=Ot.convert(q.type);let Ye;q.isData3DTexture?(re.setTexture3D(q,0),Ye=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(re.setTexture2DArray(q,0),Ye=H.TEXTURE_2D_ARRAY):(re.setTexture2D(q,0),Ye=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);const Ae=H.getParameter(H.UNPACK_ROW_LENGTH),Sn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ma=H.getParameter(H.UNPACK_SKIP_PIXELS),Ze=H.getParameter(H.UNPACK_SKIP_ROWS),Fi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Te.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Te.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ne),H.pixelStorei(H.UNPACK_SKIP_ROWS,se),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Jt);const Ke=R.isDataArrayTexture||R.isData3DTexture,yn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const xn=jt.get(R),Mn=jt.get(q),An=jt.get(xn.__renderTarget),Ci=jt.get(Mn.__renderTarget);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,An.__webglFramebuffer),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ii=0;Ii<Xt;Ii++)Ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,Z,Jt+Ii),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.get(q).__webglTexture,Ut,Oe+Ii)),H.blitFramebuffer(ne,se,zt,Vt,pe,Ne,zt,Vt,H.DEPTH_BUFFER_BIT,H.NEAREST);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||jt.has(R)){const xn=jt.get(R),Mn=jt.get(q);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,ks),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,ya);for(let An=0;An<Xt;An++)Ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,xn.__webglTexture,Z,Jt+An):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,xn.__webglTexture,Z),yn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Mn.__webglTexture,Ut,Oe+An):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Mn.__webglTexture,Ut),Z!==0?H.blitFramebuffer(ne,se,zt,Vt,pe,Ne,zt,Vt,H.COLOR_BUFFER_BIT,H.NEAREST):yn?H.copyTexSubImage3D(Ye,Ut,pe,Ne,Oe+An,ne,se,zt,Vt):H.copyTexSubImage2D(Ye,Ut,pe,Ne,ne,se,zt,Vt);Gt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Ye,Ut,pe,Ne,Oe,zt,Vt,Xt,Ie,ee,Te.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ye,Ut,pe,Ne,Oe,zt,Vt,Xt,Ie,Te.data):H.texSubImage3D(Ye,Ut,pe,Ne,Oe,zt,Vt,Xt,Ie,ee,Te):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ut,pe,Ne,zt,Vt,Ie,ee,Te.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ut,pe,Ne,Te.width,Te.height,Ie,Te.data):H.texSubImage2D(H.TEXTURE_2D,Ut,pe,Ne,zt,Vt,Ie,ee,Te);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Sn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ma),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ze),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fi),Ut===0&&q.generateMipmaps&&H.generateMipmap(Ye),Gt.unbindTexture()},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&re.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?re.setTextureCube(R,0):R.isData3DTexture?re.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?re.setTexture2DArray(R,0):re.setTexture2D(R,0),Gt.unbindTexture()},this.resetState=function(){W=0,w=0,C=null,Gt.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),i.unpackColorSpace=Be._getUnpackColorSpace()}}class BT extends ep{constructor(t){super(t)}load(t,i,r,l){const c=this,d=new XM(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(h){try{i(c.parse(h))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(p){const x=new DataView(p),g=32/8*3+32/8*3*3+16/8,S=x.getUint32(80,!0);if(80+32/8+S*g===x.byteLength)return!0;const b=[115,111,108,105,100];for(let T=0;T<5;T++)if(r(b,x,T))return!1;return!0}function r(p,x,g){for(let S=0,y=p.length;S<y;S++)if(p[S]!==x.getUint8(g+S))return!1;return!0}function l(p){const x=new DataView(p),g=x.getUint32(80,!0);let S,y,b,T=!1,M,_,N,D,B;for(let G=0;G<70;G++)x.getUint32(G,!1)==1129270351&&x.getUint8(G+4)==82&&x.getUint8(G+5)==61&&(T=!0,M=new Float32Array(g*3*3),_=x.getUint8(G+6)/255,N=x.getUint8(G+7)/255,D=x.getUint8(G+8)/255,B=x.getUint8(G+9)/255);const V=84,U=50,O=new si,W=new Float32Array(g*3*3),w=new Float32Array(g*3*3),C=new Ue;for(let G=0;G<g;G++){const Q=V+G*U,st=x.getFloat32(Q,!0),mt=x.getFloat32(Q+4,!0),ut=x.getFloat32(Q+8,!0);if(T){const P=x.getUint16(Q+48,!0);(P&32768)===0?(S=(P&31)/31,y=(P>>5&31)/31,b=(P>>10&31)/31):(S=_,y=N,b=D)}for(let P=1;P<=3;P++){const Y=Q+P*12,k=G*3*3+(P-1)*3;W[k]=x.getFloat32(Y,!0),W[k+1]=x.getFloat32(Y+4,!0),W[k+2]=x.getFloat32(Y+8,!0),w[k]=st,w[k+1]=mt,w[k+2]=ut,T&&(C.setRGB(S,y,b,Wn),M[k]=C.r,M[k+1]=C.g,M[k+2]=C.b)}}return O.setAttribute("position",new Yn(W,3)),O.setAttribute("normal",new Yn(w,3)),T&&(O.setAttribute("color",new Yn(M,3)),O.hasColors=!0,O.alpha=B),O}function c(p){const x=new si,g=/solid([\s\S]*?)endsolid/g,S=/facet([\s\S]*?)endfacet/g,y=/solid\s(.+)/;let b=0;const T=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,M=new RegExp("vertex"+T+T+T,"g"),_=new RegExp("normal"+T+T+T,"g"),N=[],D=[],B=[],V=new et;let U,O=0,W=0,w=0;for(;(U=g.exec(p))!==null;){W=w;const C=U[0],G=(U=y.exec(C))!==null?U[1]:"";for(B.push(G);(U=S.exec(C))!==null;){let mt=0,ut=0;const P=U[0];for(;(U=_.exec(P))!==null;)V.x=parseFloat(U[1]),V.y=parseFloat(U[2]),V.z=parseFloat(U[3]),ut++;for(;(U=M.exec(P))!==null;)N.push(parseFloat(U[1]),parseFloat(U[2]),parseFloat(U[3])),D.push(V.x,V.y,V.z),mt++,w++;ut!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+b),mt!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+b),b++}const Q=W,st=w-W;x.userData.groupNames=B,x.addGroup(Q,st,O),O++}return x.setAttribute("position",new _i(N,3)),x.setAttribute("normal",new _i(D,3)),x}function d(p){return typeof p!="string"?new TextDecoder().decode(p):p}function h(p){if(typeof p=="string"){const x=new Uint8Array(p.length);for(let g=0;g<p.length;g++)x[g]=p.charCodeAt(g)&255;return x.buffer||x}else return p}const m=h(t);return i(m)?l(m):c(d(t))}}const FT="#ffe4e9",IT=()=>{const o=document.createElement("canvas");o.width=512,o.height=512;const t=o.getContext("2d"),i=t.createRadialGradient(256,256,0,256,256,256);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.2,"rgba(255, 255, 255, 0.4)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,512,512),new zM(o)},HT=o=>{if(!o)return null;const i=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").split("").join(".*");return new RegExp(i,"i")},GT=({files:o,onModelSelect:t,onProgress:i,onHover:r,panelSize:l,selectedModel:c,searchTerm:d})=>{const h=Yt.useRef(null),m=Yt.useRef(null),p=Yt.useRef(null),x=Yt.useRef(null),g=Yt.useRef(new ZM(new et,new et)),S=Yt.useRef(new _e),y=Yt.useRef([]),b=Yt.useRef([]),T=Yt.useRef(!1),M=Yt.useRef(null),_=Yt.useRef(null),N=Yt.useRef(new et),D=Yt.useRef(0),B=Yt.useRef(null),V=Yt.useRef(0),U=Yt.useRef(0),O=Yt.useRef({theta:0,phi:Math.PI/2}),W=Yt.useRef({x:0,y:0}),w=Yt.useRef(!1),C=Yt.useRef({x:0,y:0}),G=Yt.useRef(!1),Q=Yt.useRef({x:0,y:0}),st=Yt.useRef(0),mt=Yt.useRef(0),ut=Yt.useRef(()=>{}),P=350,Y=650,k=Yt.useRef(1200),yt=Yt.useRef(200),Et=Yt.useRef(4),z=Yt.useRef(l);Yt.useEffect(()=>{z.current=l},[l]);const at=Yt.useRef(d);Yt.useEffect(()=>{at.current=d},[d]);const Rt=K=>K>1200?6:K>768?4:2,wt=(K,ot)=>{const Dt=z.current,Pt=1200,Lt=zo.degToRad(60),te=2*Math.tan(Lt/2)*Pt;let ye=0,oe=0;if(K>768){const H=te*(K/ot)/K;ye=Dt/2*H}else{const ce=te/ot;oe=-(Dt*.5)*ce}W.current={x:ye,y:oe}},Ft=()=>{const K=Et.current,ot=yt.current;y.current.sort((Lt,te)=>Lt.userData.index-te.userData.index);const Dt=HT(at.current);let Pt=0;y.current.forEach(Lt=>{const te=Lt.userData.fileName,ye=!at.current||(Dt?Dt.test(te):!0);if(Lt.userData.matchesSearch=ye,ye){const oe=Math.floor(Pt/K),ce=Pt%K,ue=-((K-1)*Y)/2+ce*Y,Ce=ot-oe*Y,Gt=0;Lt.userData.originalPosition={x:ue,y:Ce,z:Gt},Lt.position.set(ue,Ce,Gt);const we=b.current.find(jt=>jt.model===Lt);we&&we.sphere.center.copy(Lt.position),Lt.visible=!0,Pt++}else Lt.visible=!1}),mt.current=Math.ceil(Pt/K)};return Yt.useEffect(()=>{h.current&&Ft()},[d]),Yt.useEffect(()=>{if(!h.current||!o.length)return;const K=h.current.clientWidth,ot=h.current.clientHeight,Dt=new AM;m.current=Dt;const Pt=new xi(60,K/ot,1,1e4);p.current=Pt;const Lt=new PT({alpha:!0,antialias:!0,powerPreference:"high-performance"});Lt.setSize(K,ot),Lt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Lt.shadowMap.enabled=!1,Lt.outputColorSpace=Wn,Lt.toneMapping=ma,h.current.appendChild(Lt.domElement),x.current=Lt;const te=Pt.position.clone(),ye=Pt.position.clone(),oe=new et(0,0,0),ce=new et(0,0,0),H=(dt,Mt)=>{const Ot=dt/Mt,F=Rt(dt);Et.current=F;const ft=(F-1)*Y+P+600,_t=Math.tan(zo.degToRad(30)),bt=ft/(2*_t*Ot);k.current=Math.max(bt,1200);const vt=k.current*_t,pt=dt<=768?800:700;yt.current=vt-pt,T.current||(Pt.position.z=k.current,ye.z=k.current)};H(K,ot),te.z=k.current;const de=new YM(16777215,.9);Dt.add(de);const ue=new qM(16777215,.3);ue.position.set(500,1e3,750),Dt.add(ue);const Ce=IT(),Gt=new S_({map:Ce,color:16770281,transparent:!0,opacity:0,blending:Zd,depthWrite:!1}),we=new CM(Gt);we.renderOrder=-1,Dt.add(we),B.current=we;const jt=new BT;let re=0;const L=(dt,Mt)=>{jt.load(dt.url,Ot=>{const F=new BM({color:FT,roughness:.5,metalness:0}),ft=new _a(Ot,F);ft.userData.fileName=dt.name,ft.userData.scadContent=dt.scadContent,ft.userData.index=Mt,ft.castShadow=!1,ft.receiveShadow=!1,ft.userData.matchesSearch=!0,Ot.center(),Ot.computeBoundingBox();const _t=Ot.boundingBox,bt=new et;_t.getSize(bt);const vt=Math.max(bt.x,bt.y,bt.z),pt=P/vt;ft.scale.setScalar(pt),ft.rotation.set(-Math.PI/2,0,Math.PI/4);const It=new PM(Ot),ie=new OM(It,new M_({color:13938872,transparent:!0,opacity:.3}));ft.add(ie);const Le=new el(ft.position.clone(),P*.8);b.current.push({sphere:Le,model:ft}),Dt.add(ft),y.current.push(ft),Ft(),re++,i(re,o.length)},void 0,Ot=>{console.warn(`Failed to load ${dt.name}`,Ot),re++,i(re,o.length)})};o.forEach((dt,Mt)=>{setTimeout(()=>L(dt,Mt),Mt*100)});const E=dt=>{G.current=!0,w.current=!1,C.current={x:dt.clientX,y:dt.clientY}},J=dt=>{const Mt=h.current.getBoundingClientRect();if(S.current.x=(dt.clientX-Mt.left)/Mt.width*2-1,S.current.y=-((dt.clientY-Mt.top)/Mt.height)*2+1,G.current&&T.current&&M.current){const Ot=dt.clientX-C.current.x,F=dt.clientY-C.current.y;!w.current&&(Math.abs(Ot)>5||Math.abs(F)>5)&&(w.current=!0,C.current={x:dt.clientX,y:dt.clientY}),w.current&&(O.current.theta-=(dt.clientX-C.current.x)*.005,O.current.phi-=(dt.clientY-C.current.y)*.005,O.current.phi=Math.max(.1,Math.min(Math.PI-.1,O.current.phi)),C.current={x:dt.clientX,y:dt.clientY})}},gt=dt=>{const Mt=G.current;if(G.current=!1,h.current){const Ot=h.current.getBoundingClientRect();S.current.x=(dt.clientX-Ot.left)/Ot.width*2-1,S.current.y=-((dt.clientY-Ot.top)/Ot.height)*2+1}!w.current&&Mt&&Qt(),w.current=!1},Tt=dt=>{if(dt.touches.length===1&&(G.current=!0,w.current=!1,Q.current={x:dt.touches[0].clientX,y:dt.touches[0].clientY},h.current)){const Mt=h.current.getBoundingClientRect();S.current.x=(dt.touches[0].clientX-Mt.left)/Mt.width*2-1,S.current.y=-((dt.touches[0].clientY-Mt.top)/Mt.height)*2+1}},ct=dt=>{if(dt.touches.length!==1)return;dt.cancelable&&dt.preventDefault();const Mt=dt.touches[0].clientX,Ot=dt.touches[0].clientY,F=Mt-Q.current.x,ft=Ot-Q.current.y;if(!w.current&&(Math.abs(F)>5||Math.abs(ft)>5)&&(w.current=!0),T.current&&M.current)O.current.theta-=F*.005,O.current.phi-=ft*.005,O.current.phi=Math.max(.1,Math.min(Math.PI-.1,O.current.phi));else{const bt=-ft*4,vt=mt.current*Y,pt=Math.max(0,vt-yt.current);st.current+=bt,st.current=Math.max(0,Math.min(st.current,pt))}Q.current={x:Mt,y:Ot}},Zt=dt=>{G.current=!1,w.current||Qt(),w.current=!1},Nt=dt=>{if(dt.preventDefault(),T.current)return;const Mt=dt.deltaY*.8,Ot=mt.current*Y,F=Math.max(0,Ot-yt.current);st.current+=Mt,st.current=Math.max(0,Math.min(st.current,F))},Qt=()=>{g.current.setFromCamera(S.current,p.current);const dt=b.current.find(Mt=>Mt.model.userData.matchesSearch&&g.current.ray.intersectsSphere(Mt.sphere));T.current?At():dt&&Wt(dt.model)};h.current.addEventListener("mousedown",E),h.current.addEventListener("mousemove",J),window.addEventListener("mouseup",gt),h.current.addEventListener("wheel",Nt,{passive:!1}),h.current.addEventListener("touchstart",Tt,{passive:!1}),h.current.addEventListener("touchmove",ct,{passive:!1}),h.current.addEventListener("touchend",Zt);const Wt=dt=>{var F,ft;T.current=!0,M.current=dt,_.current=null,r(null),V.current=0,U.current=0,B.current&&(B.current.visible=!1),p.current&&N.current.copy(p.current.position),O.current={theta:Math.PI/4,phi:Math.PI/3},y.current.forEach(_t=>{if(_t!==dt){_t.visible=!1;const bt=_t.material;bt.opacity=0,bt.transparent=!0}else{_t.visible=!0;const bt=_t.material;bt.opacity=1,bt.transparent=!1}}),t(dt);const Mt=((F=h.current)==null?void 0:F.clientWidth)||window.innerWidth,Ot=((ft=h.current)==null?void 0:ft.clientHeight)||window.innerHeight;wt(Mt,Ot)},At=()=>{T.current=!1,M.current=null,t(null),ye.set(0,0,k.current),ce.set(0,-st.current,0),Ft()};ut.current=At;const Ct=()=>{if(D.current=requestAnimationFrame(Ct),!m.current||!p.current||!x.current)return;if(!T.current&&!w.current){g.current.setFromCamera(S.current,p.current);const ft=b.current.find(_t=>_t.model.userData.matchesSearch&&g.current.ray.intersectsSphere(_t.sphere));if(ft?_.current=ft.model:_.current=null,ft&&h.current){const _t=ft.model.position.clone();_t.y-=P*.55,_t.project(p.current);const bt=h.current.clientWidth,vt=h.current.clientHeight,pt=(_t.x*.5+.5)*bt,It=(-(_t.y*.5)+.5)*vt;r({name:ft.model.userData.fileName,x:pt,y:It})}else r(null)}else _.current=null,r(null);let dt=0,Mt=P*1.5,Ot=.005,F=.005;if(_.current&&!T.current&&!w.current){dt=.5,Mt=P*3;const ft=p.current.position,_t=_.current.position,vt=_t.clone().sub(ft).normalize().multiplyScalar(P);B.current.position.copy(_t).add(vt),Ot=.02,F=.02}else Mt=P*1.5;if(V.current=zo.lerp(V.current,dt,Ot),U.current=zo.lerp(U.current,Mt,F),B.current&&(B.current.material.opacity=V.current,B.current.scale.setScalar(U.current),B.current.visible=V.current>.01),T.current){if(M.current){const{theta:_t,phi:bt}=O.current,vt=1200*Math.sin(bt)*Math.sin(_t),pt=1200*Math.cos(bt),It=1200*Math.sin(bt)*Math.cos(_t),ie=new et(vt,pt,It),Le=ie.clone().normalize().negate(),De=new et(0,1,0),pn=new et().crossVectors(Le,De).normalize(),zn=new et().crossVectors(pn,Le).normalize(),er=pn.multiplyScalar(W.current.x).add(zn.multiplyScalar(W.current.y)),Sa=M.current.position.clone();ce.copy(Sa).add(er),ye.copy(Sa).add(ie).add(er),te.lerp(ye,.1),oe.lerp(ce,.1)}}else{const ft=-st.current;ye.y=ft,ce.y=ft,ye.x=0,ye.z=k.current,ce.x=0,ce.z=0,te.lerp(ye,.05),oe.lerp(ce,.05)}p.current.position.copy(te),p.current.lookAt(oe),y.current.forEach(ft=>{if(ft===M.current)ft.material.transparent=!1,ft.material.opacity=1,ft.visible=!0;else{if(!ft.userData.matchesSearch){ft.visible=!1;return}ft.rotation.z-=.001;const _t=T.current?0:1,bt=ft.material.opacity,vt=zo.lerp(bt,_t,.05),pt=vt<.99;ft.material.transparent=pt,ft.material.opacity=vt,ft.visible=vt>.01}}),x.current.render(m.current,p.current)};Ct();const Kt=()=>{if(!h.current||!p.current||!x.current)return;const dt=h.current.clientWidth,Mt=h.current.clientHeight;p.current.aspect=dt/Mt,p.current.updateProjectionMatrix(),x.current.setSize(dt,Mt),H(dt,Mt),Ft(),T.current&&M.current&&wt(dt,Mt)};return window.addEventListener("resize",Kt),()=>{var dt,Mt,Ot,F,ft,_t,bt;window.removeEventListener("resize",Kt),(dt=h.current)==null||dt.removeEventListener("mousedown",E),(Mt=h.current)==null||Mt.removeEventListener("mousemove",J),window.removeEventListener("mouseup",gt),(Ot=h.current)==null||Ot.removeEventListener("wheel",Nt),(F=h.current)==null||F.removeEventListener("touchstart",Tt),(ft=h.current)==null||ft.removeEventListener("touchmove",ct),(_t=h.current)==null||_t.removeEventListener("touchend",Zt),cancelAnimationFrame(D.current),(bt=x.current)==null||bt.dispose(),h.current&&x.current&&h.current.removeChild(x.current.domElement)}},[o]),Yt.useEffect(()=>{T.current&&h.current&&wt(h.current.clientWidth,h.current.clientHeight)},[l]),Yt.useEffect(()=>{!c&&T.current&&ut.current()},[c]),Yt.useEffect(()=>{t||(T.current=!1,M.current=null)},[t]),Ht.jsx("div",{ref:h,className:"w-full h-full relative"})};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VT=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),XT=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Kg=o=>{const t=XT(o);return t.charAt(0).toUpperCase()+t.slice(1)},L_=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),kT=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=Yt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>Yt.createElement("svg",{ref:m,...WT,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:L_("lucide",l),...!c&&!kT(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,x])=>Yt.createElement(p,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=(o,t)=>{const i=Yt.forwardRef(({className:r,...l},c)=>Yt.createElement(qT,{ref:c,iconNode:t,className:L_(`lucide-${VT(Kg(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Kg(o),i};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],jT=Nr("box",YT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],KT=Nr("code",ZT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],JT=Nr("github",QT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],N_=Nr("key",$T);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],e2=Nr("loader-circle",t2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],i2=Nr("search",n2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],r2=Nr("x",a2),s2=({model:o,visible:t,onClose:i,width:r,onResize:l})=>{const c=Yt.useRef(!1),[d,h]=Yt.useState(!1);Yt.useEffect(()=>{const y=()=>h(window.innerWidth<=768);return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),Yt.useEffect(()=>{const y=_=>{if(c.current)if(_.preventDefault(),window.innerWidth>768){const N=window.innerWidth-_.clientX,D=Math.max(300,Math.min(N,window.innerWidth*.6));l(D)}else{const N=window.innerHeight-_.clientY,D=Math.max(200,Math.min(N,window.innerHeight*.9));l(D)}},b=()=>{c.current=!1,document.body.style.cursor="",document.body.style.userSelect=""},T=_=>{if(c.current)if(_.cancelable&&_.preventDefault(),window.innerWidth>768){const N=window.innerWidth-_.touches[0].clientX,D=Math.max(300,Math.min(N,window.innerWidth*.6));l(D)}else{const N=window.innerHeight-_.touches[0].clientY,D=Math.max(200,Math.min(N,window.innerHeight*.9));l(D)}},M=()=>{c.current=!1,document.body.style.userSelect=""};return document.addEventListener("mousemove",y),document.addEventListener("mouseup",b),document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",M),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",b),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",M)}},[l]);const m=y=>{c.current=!0,document.body.style.userSelect="none",document.body.style.cursor=window.innerWidth>768?"ew-resize":"ns-resize"},p=y=>{c.current=!0,document.body.style.userSelect="none"};if(!o)return null;const x=o.userData.fileName,g=o.userData.scadContent,S=!!g;return Ht.jsxs("div",{style:{width:d?"100%":`${r}px`,height:d?`${r}px`:"100%"},className:`fixed bg-gray-900 text-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50 flex flex-col
        /* Base positioning */
        bottom-0 right-0 
        /* Mobile overrides */
        ${d?"left-0 rounded-t-2xl border-t border-white/10":"top-0 left-auto rounded-none border-l border-white/10"}
        ${t?"translate-y-0 translate-x-0":d?"translate-y-full":"translate-x-full"}
      `,children:[Ht.jsx("div",{onMouseDown:m,onTouchStart:p,className:`absolute z-50 flex items-center justify-center
          ${d?"top-0 left-0 w-full h-8 cursor-ns-resize -mt-4":"top-0 left-0 w-4 h-full cursor-ew-resize -ml-2"}
        `,children:d&&Ht.jsx("div",{className:"w-12 h-1 bg-white/20 rounded-full mt-4 pointer-events-none"})}),Ht.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-900/20 to-transparent shrink-0",children:[Ht.jsx("h2",{className:"text-xl font-bold font-mono text-cyan-400 truncate pr-4",children:x}),Ht.jsx("button",{onClick:i,className:"p-2 rounded-full hover:bg-white/10 transition-colors",children:Ht.jsx(r2,{size:20})})]}),Ht.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[Ht.jsxs("div",{className:"bg-white/5 rounded-xl p-4 border border-white/5",children:[Ht.jsxs("div",{className:"flex items-center gap-3 mb-3 text-sm text-gray-400",children:[Ht.jsx(jT,{size:16,className:"text-pink-500"}),Ht.jsx("span",{children:"Model Details"})]}),Ht.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:"This 3D model was procedurally loaded from the repository. Rendered with standard physical materials in a Three.js environment."})]}),S?Ht.jsxs("div",{className:"space-y-2",children:[Ht.jsxs("div",{className:"flex items-center gap-2 text-sm text-green-400 font-mono",children:[Ht.jsx(KT,{size:16}),Ht.jsx("span",{children:"Source Code (.scad)"})]}),Ht.jsx("div",{className:"bg-black/50 rounded-lg p-4 border border-white/5 overflow-x-auto",children:Ht.jsx("pre",{className:"text-xs font-mono text-gray-300 whitespace-pre-wrap break-all",children:g})})]}):Ht.jsx("div",{className:"p-8 text-center text-gray-500 border border-dashed border-white/10 rounded-xl",children:Ht.jsx("span",{className:"block text-sm",children:"No source code available for this binary STL."})})]})]})},o2=({isOpen:o,onSubmit:t,message:i})=>{const[r,l]=Yt.useState("");return o?Ht.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",children:Ht.jsxs("div",{className:"w-full max-w-md bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-8",children:[Ht.jsxs("div",{className:"flex flex-col items-center gap-4 mb-6",children:[Ht.jsx("div",{className:"p-4 bg-purple-500/10 rounded-full text-purple-400",children:Ht.jsx(N_,{size:32})}),Ht.jsx("h2",{className:"text-2xl font-bold text-white text-center",children:"GitHub Access Required"}),Ht.jsx("p",{className:"text-center text-gray-400 text-sm",children:i||"The GitHub API rate limit has been reached. Please provide a Personal Access Token (PAT) to continue exploring the repository."})]}),Ht.jsxs("form",{onSubmit:c=>{c.preventDefault(),r.trim()&&t(r)},className:"space-y-4",children:[Ht.jsx("input",{type:"password",value:r,onChange:c=>l(c.target.value),placeholder:"ghp_xxxxxxxxxxxx",className:"w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-mono text-sm",autoFocus:!0}),Ht.jsx("button",{type:"submit",className:"w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg transition-colors",children:"Authenticate"})]}),Ht.jsx("p",{className:"mt-4 text-xs text-center text-gray-600",children:"Token is stored locally and sent only to GitHub API."})]})}):null},l2="https://api.github.com";class c2{constructor(t,i){this.owner=t,this.repo=i,this.token=localStorage.getItem("github_pat")}setToken(t){this.token=t,localStorage.setItem("github_pat",t)}async fetchAllFiles(t=""){const i=`andrewphung-${this.owner}-${this.repo}-${t}`,r=localStorage.getItem(i);if(r){const{timestamp:d,data:h}=JSON.parse(r);if(Date.now()-d<36e5)return h}const l=this.token?{Authorization:`token ${this.token}`}:{},c=`${l2}/repos/${this.owner}/${this.repo}/contents/${t}`;try{const d=await fetch(c,{headers:l});if(d.status===403)throw new Error("RATE_LIMITED");if(!d.ok)throw new Error(`GitHub API Error: ${d.statusText}`);const h=await d.json();let m=[],p=[],x=[];const g=[];for(const b of h)if(b.type==="file"){const T=b.name.toLowerCase();T.endsWith(".stl")?p.push({name:b.name,url:b.download_url,path:b.path}):T.endsWith(".scad")&&x.push({name:b.name,url:b.download_url,path:b.path})}else b.type==="dir"&&g.push(this.fetchAllFiles(b.path));(await Promise.all(g)).forEach(b=>{m=m.concat(b)});for(const b of p){const T=b.name.replace(/\.[^/.]+$/,"");let M=x.find(_=>_.name===`${T}.scad`);if(!M&&x.length>0&&(M=x[0]),M)try{const _=await this.fetchFileContent(M.url);b.scadContent=_}catch(_){console.warn("Failed to fetch SCAD content",_)}m.push(b)}const y=m;try{localStorage.setItem(i,JSON.stringify({timestamp:Date.now(),data:y}))}catch{console.warn("LocalStorage full, skipping cache")}return y}catch(d){throw d}}async fetchFileContent(t){const i=this.token?{Authorization:`token ${this.token}`}:{},r=await fetch(t,{headers:i});return r.ok?await r.text():""}}const Hh="abphung",u2="OpenSCADProjects",Qg=new c2(Hh,u2);function f2(){const[o,t]=Yt.useState([]),[i,r]=Yt.useState(!0),[l,c]=Yt.useState(null),[d,h]=Yt.useState(!1),[m,p]=Yt.useState(),[x,g]=Yt.useState({current:0,total:0}),[S,y]=Yt.useState(null),[b,T]=Yt.useState(450),[M,_]=Yt.useState(""),N=Yt.useRef(null),D=Yt.useCallback(async()=>{r(!0),c(null);try{const W=await Qg.fetchAllFiles();t(W)}catch(W){const w=W.message||"";w==="RATE_LIMITED"?(p("The GitHub API rate limit has been reached. Please provide a Personal Access Token (PAT) to continue."),h(!0)):w.startsWith("GitHub API Error")?(p(`GitHub API Error: ${w.replace("GitHub API Error: ","")}. Please update your Access Token.`),h(!0)):c(w||"Failed to fetch repository contents.")}finally{r(!1)}},[]);Yt.useEffect(()=>{D()},[D]);const B=W=>{Qg.setToken(W),h(!1),D()},V=(W,w)=>{g({current:W,total:w})},U=()=>{p("Please enter your GitHub Personal Access Token."),h(!0)},O=Yt.useCallback(W=>{N.current&&(W&&!S?(N.current.style.display="block",N.current.textContent=W.name,N.current.style.left=`${W.x}px`,N.current.style.top=`${W.y}px`):N.current.style.display="none")},[S]);return Ht.jsxs("div",{className:"w-full h-screen bg-gray-50 relative overflow-hidden font-sans select-none",children:[Ht.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-sky-400 via-indigo-400 to-orange-500 pointer-events-none"}),!i&&!l&&o.length>0&&Ht.jsx("div",{className:"absolute inset-0 z-0",children:Ht.jsx(GT,{files:o,onModelSelect:y,onProgress:V,onHover:O,panelSize:b,selectedModel:S,searchTerm:M})}),Ht.jsx("div",{ref:N,className:"absolute pointer-events-none z-[1] px-4 py-2 text-gray-900 text-sm rounded-lg shadow-xl font-mono tracking-wide whitespace-nowrap hidden mt-4 border",style:{transform:"translateX(-50%)",backgroundColor:"#ffe4e9",borderColor:"#ffe4e9"}}),Ht.jsx("div",{className:"absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900 from-10% via-gray-900/40 to-transparent pointer-events-none z-20"}),Ht.jsx("div",{className:"absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-900 from-10% via-gray-900/40 to-transparent pointer-events-none z-20"}),Ht.jsxs("div",{className:`absolute top-0 left-0 p-8 z-30 transition-opacity duration-500 ${S?"opacity-0 pointer-events-none":"opacity-100"}`,children:[Ht.jsxs("h1",{className:"text-4xl font-black text-white tracking-tighter mb-2 drop-shadow-md",children:["ANDREW",Ht.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-orange-100",children:"PHUNG"})]}),Ht.jsxs("a",{href:`https://github.com/${Hh}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white/80 text-sm font-mono drop-shadow hover:text-white transition-colors w-fit pointer-events-auto",children:[Ht.jsx(JT,{size:16}),Ht.jsx("span",{children:Hh})]})]}),Ht.jsx("div",{className:`absolute top-8 right-8 z-30 transition-all duration-500 ${S?"opacity-0 translate-x-10 pointer-events-none":"opacity-100"}`,children:Ht.jsxs("div",{className:"relative group",children:[Ht.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:Ht.jsx(i2,{size:16,className:"text-white/60 group-focus-within:text-white transition-colors"})}),Ht.jsx("input",{type:"text",value:M,onChange:W=>_(W.target.value),placeholder:"Search",className:"bg-gray-900/30 backdrop-blur-md border border-white/10 text-white text-sm rounded-full pl-10 pr-4 py-2 w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:bg-gray-900/50 focus:border-white/30 placeholder-white/40 font-mono shadow-lg"})]})}),(i||o.length>0&&x.current<o.length)&&Ht.jsxs("div",{className:"absolute bottom-8 left-8 z-40 bg-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700",children:[Ht.jsx(e2,{className:"animate-spin text-purple-600",size:24}),Ht.jsxs("div",{children:[Ht.jsx("div",{className:"text-gray-900 text-sm font-semibold",children:i?"Fetching Repository...":"Rendering Models"}),Ht.jsx("div",{className:"text-xs text-gray-600 font-mono mt-1",children:x.total>0?`${x.current} / ${x.total} loaded`:"Connecting to GitHub API..."})]})]}),l&&!d&&Ht.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-50",children:Ht.jsxs("div",{className:"text-center max-w-lg p-8 bg-gray-900/90 backdrop-blur rounded-2xl border border-white/20 shadow-2xl",children:[Ht.jsx("h2",{className:"text-red-500 text-xl font-bold mb-2",children:"Connection Error"}),Ht.jsx("p",{className:"text-white mb-6",children:l}),Ht.jsxs("div",{className:"flex gap-4 justify-center",children:[Ht.jsx("button",{onClick:D,className:"px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-semibold",children:"Retry"}),Ht.jsxs("button",{onClick:U,className:"px-6 py-2 bg-purple-500/50 hover:bg-purple-500/60 text-white border border-white/20 rounded-lg transition-colors flex items-center gap-2",children:[Ht.jsx(N_,{size:16}),"Update API Key"]})]})]})}),Ht.jsx(s2,{model:S,visible:!!S,onClose:()=>y(null),width:b,onResize:T}),Ht.jsx(o2,{isOpen:d,onSubmit:B,message:m}),!S&&!i&&Ht.jsxs("div",{className:"absolute bottom-8 right-8 text-right text-white/90 text-xs font-mono pointer-events-none drop-shadow-sm z-30 hidden sm:block",children:[Ht.jsx("p",{children:"SCROLL to navigate"}),Ht.jsx("p",{children:"CLICK to inspect / DRAG to rotate"})]})]})}const O_=document.getElementById("root");if(!O_)throw new Error("Could not find root element to mount to");const d2=KS.createRoot(O_);d2.render(Ht.jsx(VS.StrictMode,{children:Ht.jsx(f2,{})}));
