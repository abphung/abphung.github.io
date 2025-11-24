(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Pg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var id={exports:{}},Uo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ex;function TS(){if(Ex)return Uo;Ex=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return Uo.Fragment=t,Uo.jsx=i,Uo.jsxs=i,Uo}var Tx;function AS(){return Tx||(Tx=1,id.exports=TS()),id.exports}var Wt=AS(),ad={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ax;function RS(){if(Ax)return se;Ax=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,y={};function S(N,nt,yt){this.props=N,this.context=nt,this.refs=y,this.updater=yt||b}S.prototype.isReactComponent={},S.prototype.setState=function(N,nt){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,nt,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function P(){}P.prototype=S.prototype;function U(N,nt,yt){this.props=N,this.context=nt,this.refs=y,this.updater=yt||b}var F=U.prototype=new P;F.constructor=U,A(F,S.prototype),F.isPureReactComponent=!0;var V=Array.isArray;function D(){}var O={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(N,nt,yt){var At=yt.ref;return{$$typeof:o,type:N,key:nt,ref:At!==void 0?At:null,props:yt}}function C(N,nt){return w(N.type,nt,N.props)}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function K(N){var nt={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(yt){return nt[yt]})}var ot=/\/+/g;function dt(N,nt){return typeof N=="object"&&N!==null&&N.key!=null?K(""+N.key):nt.toString(36)}function ut(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(D,D):(N.status="pending",N.then(function(nt){N.status==="pending"&&(N.status="fulfilled",N.value=nt)},function(nt){N.status==="pending"&&(N.status="rejected",N.reason=nt)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,nt,yt,At,Pt){var tt=typeof N;(tt==="undefined"||tt==="boolean")&&(N=null);var lt=!1;if(N===null)lt=!0;else switch(tt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(N.$$typeof){case o:case t:lt=!0;break;case x:return lt=N._init,z(lt(N._payload),nt,yt,At,Pt)}}if(lt)return Pt=Pt(N),lt=At===""?"."+dt(N,0):At,V(Pt)?(yt="",lt!=null&&(yt=lt.replace(ot,"$&/")+"/"),z(Pt,nt,yt,"",function(qt){return qt})):Pt!=null&&(H(Pt)&&(Pt=C(Pt,yt+(Pt.key==null||N&&N.key===Pt.key?"":(""+Pt.key).replace(ot,"$&/")+"/")+lt)),nt.push(Pt)),1;lt=0;var Dt=At===""?".":At+":";if(V(N))for(var It=0;It<N.length;It++)At=N[It],tt=Dt+dt(At,It),lt+=z(At,nt,yt,tt,Pt);else if(It=M(N),typeof It=="function")for(N=It.call(N),It=0;!(At=N.next()).done;)At=At.value,tt=Dt+dt(At,It++),lt+=z(At,nt,yt,tt,Pt);else if(tt==="object"){if(typeof N.then=="function")return z(ut(N),nt,yt,At,Pt);throw nt=String(N),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return lt}function Y(N,nt,yt){if(N==null)return N;var At=[],Pt=0;return z(N,At,"","",function(tt){return nt.call(yt,tt,Pt++)}),At}function k(N){if(N._status===-1){var nt=N._result;nt=nt(),nt.then(function(yt){(N._status===0||N._status===-1)&&(N._status=1,N._result=yt)},function(yt){(N._status===0||N._status===-1)&&(N._status=2,N._result=yt)}),N._status===-1&&(N._status=0,N._result=nt)}if(N._status===1)return N._result.default;throw N._result}var St=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},bt={map:Y,forEach:function(N,nt,yt){Y(N,function(){nt.apply(this,arguments)},yt)},count:function(N){var nt=0;return Y(N,function(){nt++}),nt},toArray:function(N){return Y(N,function(nt){return nt})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return se.Activity=g,se.Children=bt,se.Component=S,se.Fragment=i,se.Profiler=l,se.PureComponent=U,se.StrictMode=r,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,se.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},se.cache=function(N){return function(){return N.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(N,nt,yt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var At=A({},N.props),Pt=N.key;if(nt!=null)for(tt in nt.key!==void 0&&(Pt=""+nt.key),nt)!Z.call(nt,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&nt.ref===void 0||(At[tt]=nt[tt]);var tt=arguments.length-2;if(tt===1)At.children=yt;else if(1<tt){for(var lt=Array(tt),Dt=0;Dt<tt;Dt++)lt[Dt]=arguments[Dt+2];At.children=lt}return w(N.type,Pt,At)},se.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},se.createElement=function(N,nt,yt){var At,Pt={},tt=null;if(nt!=null)for(At in nt.key!==void 0&&(tt=""+nt.key),nt)Z.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Pt[At]=nt[At]);var lt=arguments.length-2;if(lt===1)Pt.children=yt;else if(1<lt){for(var Dt=Array(lt),It=0;It<lt;It++)Dt[It]=arguments[It+2];Pt.children=Dt}if(N&&N.defaultProps)for(At in lt=N.defaultProps,lt)Pt[At]===void 0&&(Pt[At]=lt[At]);return w(N,tt,Pt)},se.createRef=function(){return{current:null}},se.forwardRef=function(N){return{$$typeof:p,render:N}},se.isValidElement=H,se.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:k}},se.memo=function(N,nt){return{$$typeof:h,type:N,compare:nt===void 0?null:nt}},se.startTransition=function(N){var nt=O.T,yt={};O.T=yt;try{var At=N(),Pt=O.S;Pt!==null&&Pt(yt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(D,St)}catch(tt){St(tt)}finally{nt!==null&&yt.types!==null&&(nt.types=yt.types),O.T=nt}},se.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},se.use=function(N){return O.H.use(N)},se.useActionState=function(N,nt,yt){return O.H.useActionState(N,nt,yt)},se.useCallback=function(N,nt){return O.H.useCallback(N,nt)},se.useContext=function(N){return O.H.useContext(N)},se.useDebugValue=function(){},se.useDeferredValue=function(N,nt){return O.H.useDeferredValue(N,nt)},se.useEffect=function(N,nt){return O.H.useEffect(N,nt)},se.useEffectEvent=function(N){return O.H.useEffectEvent(N)},se.useId=function(){return O.H.useId()},se.useImperativeHandle=function(N,nt,yt){return O.H.useImperativeHandle(N,nt,yt)},se.useInsertionEffect=function(N,nt){return O.H.useInsertionEffect(N,nt)},se.useLayoutEffect=function(N,nt){return O.H.useLayoutEffect(N,nt)},se.useMemo=function(N,nt){return O.H.useMemo(N,nt)},se.useOptimistic=function(N,nt){return O.H.useOptimistic(N,nt)},se.useReducer=function(N,nt,yt){return O.H.useReducer(N,nt,yt)},se.useRef=function(N){return O.H.useRef(N)},se.useState=function(N){return O.H.useState(N)},se.useSyncExternalStore=function(N,nt,yt){return O.H.useSyncExternalStore(N,nt,yt)},se.useTransition=function(){return O.H.useTransition()},se.version="19.2.0",se}var Rx;function Dh(){return Rx||(Rx=1,ad.exports=RS()),ad.exports}var $t=Dh();const CS=Pg($t);var rd={exports:{}},Lo={},sd={exports:{}},od={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx;function wS(){return Cx||(Cx=1,(function(o){function t(z,Y){var k=z.length;z.push(Y);t:for(;0<k;){var St=k-1>>>1,bt=z[St];if(0<l(bt,Y))z[St]=Y,z[k]=bt,k=St;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Y=z[0],k=z.pop();if(k!==Y){z[0]=k;t:for(var St=0,bt=z.length,N=bt>>>1;St<N;){var nt=2*(St+1)-1,yt=z[nt],At=nt+1,Pt=z[At];if(0>l(yt,k))At<bt&&0>l(Pt,yt)?(z[St]=Pt,z[At]=k,St=At):(z[St]=yt,z[nt]=k,St=nt);else if(At<bt&&0>l(Pt,k))z[St]=Pt,z[At]=k,St=At;else break t}}return Y}function l(z,Y){var k=z.sortIndex-Y.sortIndex;return k!==0?k:z.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,g=null,v=3,M=!1,b=!1,A=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function F(z){for(var Y=i(h);Y!==null;){if(Y.callback===null)r(h);else if(Y.startTime<=z)r(h),Y.sortIndex=Y.expirationTime,t(m,Y);else break;Y=i(h)}}function V(z){if(A=!1,F(z),!b)if(i(m)!==null)b=!0,D||(D=!0,K());else{var Y=i(h);Y!==null&&ut(V,Y.startTime-z)}}var D=!1,O=-1,Z=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<Z)}function H(){if(y=!1,D){var z=o.unstable_now();w=z;var Y=!0;try{t:{b=!1,A&&(A=!1,P(O),O=-1),M=!0;var k=v;try{e:{for(F(z),g=i(m);g!==null&&!(g.expirationTime>z&&C());){var St=g.callback;if(typeof St=="function"){g.callback=null,v=g.priorityLevel;var bt=St(g.expirationTime<=z);if(z=o.unstable_now(),typeof bt=="function"){g.callback=bt,F(z),Y=!0;break e}g===i(m)&&r(m),F(z)}else r(m);g=i(m)}if(g!==null)Y=!0;else{var N=i(h);N!==null&&ut(V,N.startTime-z),Y=!1}}break t}finally{g=null,v=k,M=!1}Y=void 0}}finally{Y?K():D=!1}}}var K;if(typeof U=="function")K=function(){U(H)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,dt=ot.port2;ot.port1.onmessage=H,K=function(){dt.postMessage(null)}}else K=function(){S(H,0)};function ut(z,Y){O=S(function(){z(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(z){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var k=v;v=Y;try{return z()}finally{v=k}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,Y){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=v;v=z;try{return Y()}finally{v=k}},o.unstable_scheduleCallback=function(z,Y,k){var St=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?St+k:St):k=St,z){case 1:var bt=-1;break;case 2:bt=250;break;case 5:bt=1073741823;break;case 4:bt=1e4;break;default:bt=5e3}return bt=k+bt,z={id:x++,callback:Y,priorityLevel:z,startTime:k,expirationTime:bt,sortIndex:-1},k>St?(z.sortIndex=k,t(h,z),i(m)===null&&z===i(h)&&(A?(P(O),O=-1):A=!0,ut(V,k-St))):(z.sortIndex=bt,t(m,z),b||M||(b=!0,D||(D=!0,K()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var Y=v;return function(){var k=v;v=Y;try{return z.apply(this,arguments)}finally{v=k}}}})(od)),od}var wx;function DS(){return wx||(wx=1,sd.exports=wS()),sd.exports}var ld={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx;function US(){if(Dx)return Un;Dx=1;var o=Dh();function t(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:h,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return c(m,h,null,x)},Un.flushSync=function(m){var h=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=h,r.p=x,r.d.f()}},Un.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,g=p(x,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:M}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Un.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Un.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,g=p(x,h.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Un.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,h){return m(h)},Un.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},Un.useFormStatus=function(){return d.H.useHostTransitionStatus()},Un.version="19.2.0",Un}var Ux;function LS(){if(Ux)return ld.exports;Ux=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),ld.exports=US(),ld.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lx;function NS(){if(Lx)return Lo;Lx=1;var o=DS(),t=Dh(),i=LS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function h(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,T=u.child;T;){if(T===a){_=!0,a=u,s=f;break}if(T===s){_=!0,s=u,a=f;break}T=T.sibling}if(!_){for(T=f.child;T;){if(T===a){_=!0,a=f,s=u;break}if(T===s){_=!0,s=f,a=u;break}T=T.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function dt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case D:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:dt(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return dt(e(n))}catch{}}return null}var ut=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},St=[],bt=-1;function N(e){return{current:e}}function nt(e){0>bt||(e.current=St[bt],St[bt]=null,bt--)}function yt(e,n){bt++,St[bt]=e.current,e.current=n}var At=N(null),Pt=N(null),tt=N(null),lt=N(null);function Dt(e,n){switch(yt(tt,n),yt(Pt,e),yt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Ym(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Ym(n),e=jm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(At),yt(At,e)}function It(){nt(At),nt(Pt),nt(tt)}function qt(e){e.memoizedState!==null&&yt(lt,e);var n=At.current,a=jm(n,e.type);n!==a&&(yt(Pt,e),yt(At,a))}function le(e){Pt.current===e&&(nt(At),nt(Pt)),lt.current===e&&(nt(lt),Ro._currentValue=k)}var Je,ue;function Ae(e){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+ue}var I=!1;function fe(e,n){if(!e||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var at=ct}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ct){at=ct}e.call(_t.prototype)}}else{try{throw Error()}catch(ct){at=ct}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],T=f[1];if(_&&T){var B=_.split(`
`),$=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===$.length)for(s=B.length-1,u=$.length-1;1<=s&&0<=u&&B[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==$[u]){var pt=`
`+B[s].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=s&&0<=u);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ae(a):""}function ce(e,n){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae("Lazy");case 13:return e.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return fe(e.type,!1);case 11:return fe(e.type.render,!1);case 1:return fe(e.type,!0);case 31:return Ae("Activity");default:return""}}function Oe(e){try{var n="",a=null;do n+=ce(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Xt=Object.prototype.hasOwnProperty,Pe=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,L=o.unstable_requestPaint,E=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,gt=o.unstable_ImmediatePriority,Et=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,vt=o.unstable_IdlePriority,Nt=o.log,Ft=o.unstable_setDisableYieldValue,it=null,ht=null;function Ot(e){if(typeof Nt=="function"&&Ft(e),ht&&typeof ht.setStrictMode=="function")try{ht.setStrictMode(it,e)}catch{}}var zt=Math.clz32?Math.clz32:G,Lt=Math.log,Kt=Math.LN2;function G(e){return e>>>=0,e===0?32:31-(Lt(e)/Kt|0)|0}var wt=256,Rt=262144,Ct=4194304;function Tt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Tt(s):(_&=T,_!==0?u=Tt(_):a||(a=T&~e,a!==0&&(u=Tt(a))))):(T=s&~f,T!==0?u=Tt(T):_!==0?u=Tt(_):a||(a=s&~e,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ge(){var e=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),e}function we(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Yn(e,n,a,s,u,f){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,$=e.hiddenUpdates;for(a=_&~a;0<a;){var pt=31-zt(a),_t=1<<pt;T[pt]=0,B[pt]=-1;var at=$[pt];if(at!==null)for($[pt]=null,pt=0;pt<at.length;pt++){var ct=at[pt];ct!==null&&(ct.lane&=-536870913)}a&=~_t}s!==0&&tl(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(_&~n))}function tl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-zt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Bs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-zt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function Is(e,n){var a=n&-n;return a=(a&42)!==0?1:gi(a),(a&(e.suspendedLanes|n))!==0?0:a}function gi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hs(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:gx(e.type))}function Gs(e,n){var a=Y.p;try{return Y.p=e,n()}finally{Y.p=a}}var jn=Math.random().toString(36).slice(2),ln="__reactFiber$"+jn,pn="__reactProps$"+jn,Pi="__reactContainer$"+jn,Dr="__reactEvents$"+jn,Kc="__reactListeners$"+jn,Qc="__reactHandles$"+jn,el="__reactResources$"+jn,er="__reactMarker$"+jn;function Vs(e){delete e[ln],delete e[pn],delete e[Dr],delete e[Kc],delete e[Qc]}function Sa(e){var n=e[ln];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ex(e);e!==null;){if(a=e[ln])return a;e=ex(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[ln]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function W(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function st(e){var n=e[el];return n||(n=e[el]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(e){e[er]=!0}var j=new Set,Ut={};function Bt(e,n){Vt(e,n),Vt(e+"Capture",n)}function Vt(e,n){for(Ut[e]=n,e=0;e<n.length;e++)j.add(n[e])}var kt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},ie={};function Qt(e){return Xt.call(ie,e)?!0:Xt.call(ee,e)?!1:kt.test(e)?ie[e]=!0:(ee[e]=!0,!1)}function he(e,n,a){if(Qt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Re(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function De(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function be(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function te(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qe(e){if(!e._valueTracker){var n=Fe(e)?"checked":"value";e._valueTracker=te(e,n,""+e[n])}}function Ee(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Fe(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ya=/[\n"\\]/g;function je(e){return e.replace(ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(e,n,a,s,u,f,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+be(n)):e.value!==""+be(n)&&(e.value=""+be(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,_,be(n)):a!=null?Sn(e,_,be(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+be(T):e.removeAttribute("name")}function Ze(e,n,a,s,u,f,_,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qe(e);return}a=a!=null?""+be(a):"",n=n!=null?""+be(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),qe(e)}function Sn(e,n,a){n==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+be(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+be(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+be(a):""}function En(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ut(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=be(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),qe(e)}function Ri(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Wh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&kh(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&kh(e,f,n[f])}function Jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var y_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),M_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nl(e){return M_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var $c=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ur=null,Lr=null;function qh(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+je(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[pn]||null;if(!u)throw Error(r(90));Fi(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ee(s)}break t;case"textarea":yn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&mn(e,!!a.multiple,n,!1)}}}var eu=!1;function Yh(e,n,a){if(eu)return e(n,a);eu=!0;try{var s=e(n);return s}finally{if(eu=!1,(Ur!==null||Lr!==null)&&(Xl(),Ur&&(n=Ur,e=Lr,Lr=Ur=null,qh(n),e)))for(n=0;n<e.length;n++)qh(e[n])}}function Xs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[pn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Hi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){nu=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{nu=!1}var Ma=null,iu=null,il=null;function jh(){if(il)return il;var e,n=iu,a=n.length,s,u="value"in Ma?Ma.value:Ma.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var _=a-e;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return il=u.slice(e,1<s?1-s:void 0)}function al(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function Zh(){return!1}function Bn(e){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?rl:Zh,this.isPropagationStopped=Zh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),n}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Bn(nr),Ws=g({},nr,{view:0,detail:0}),b_=Bn(Ws),au,ru,qs,ol=g({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?(au=e.screenX-qs.screenX,ru=e.screenY-qs.screenY):ru=au=0,qs=e),au)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),Kh=Bn(ol),E_=g({},ol,{dataTransfer:0}),T_=Bn(E_),A_=g({},Ws,{relatedTarget:0}),su=Bn(A_),R_=g({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),C_=Bn(R_),w_=g({},nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),D_=Bn(w_),U_=g({},nr,{data:0}),Qh=Bn(U_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function z_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=O_[e])?!!n[e]:!1}function ou(){return z_}var P_=g({},Ws,{key:function(e){if(e.key){var n=L_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=al(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?N_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?al(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?al(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),F_=Bn(P_),B_=g({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=Bn(B_),I_=g({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),H_=Bn(I_),G_=g({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),V_=Bn(G_),X_=g({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k_=Bn(X_),W_=g({},nr,{newState:0,oldState:0}),q_=Bn(W_),Y_=[9,13,27,32],lu=Hi&&"CompositionEvent"in window,Ys=null;Hi&&"documentMode"in document&&(Ys=document.documentMode);var j_=Hi&&"TextEvent"in window&&!Ys,$h=Hi&&(!lu||Ys&&8<Ys&&11>=Ys),tp=" ",ep=!1;function np(e,n){switch(e){case"keyup":return Y_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function Z_(e,n){switch(e){case"compositionend":return ip(n);case"keypress":return n.which!==32?null:(ep=!0,tp);case"textInput":return e=n.data,e===tp&&ep?null:e;default:return null}}function K_(e,n){if(Nr)return e==="compositionend"||!lu&&np(e,n)?(e=jh(),il=iu=Ma=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $h&&n.locale!=="ko"?null:n.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Q_[e.type]:n==="textarea"}function rp(e,n,a,s){Ur?Lr?Lr.push(s):Lr=[s]:Ur=s,n=Kl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var js=null,Zs=null;function J_(e){Gm(e,0)}function ll(e){var n=W(e);if(Ee(n))return e}function sp(e,n){if(e==="change")return n}var op=!1;if(Hi){var cu;if(Hi){var uu="oninput"in document;if(!uu){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),uu=typeof lp.oninput=="function"}cu=uu}else cu=!1;op=cu&&(!document.documentMode||9<document.documentMode)}function cp(){js&&(js.detachEvent("onpropertychange",up),Zs=js=null)}function up(e){if(e.propertyName==="value"&&ll(Zs)){var n=[];rp(n,Zs,e,tu(e)),Yh(J_,n)}}function $_(e,n,a){e==="focusin"?(cp(),js=n,Zs=a,js.attachEvent("onpropertychange",up)):e==="focusout"&&cp()}function tv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Zs)}function ev(e,n){if(e==="click")return ll(n)}function nv(e,n){if(e==="input"||e==="change")return ll(n)}function iv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:iv;function Ks(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Xt.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function fp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function dp(e,n){var a=fp(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=fp(a)}}function hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function pp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vn(e.document)}return n}function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var av=Hi&&"documentMode"in document&&11>=document.documentMode,Or=null,du=null,Qs=null,hu=!1;function mp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;hu||Or==null||Or!==vn(s)||(s=Or,"selectionStart"in s&&fu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Qs&&Ks(Qs,s)||(Qs=s,s=Kl(du,"onSelect"),0<s.length&&(n=new sl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Or)))}function ir(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zr={animationend:ir("Animation","AnimationEnd"),animationiteration:ir("Animation","AnimationIteration"),animationstart:ir("Animation","AnimationStart"),transitionrun:ir("Transition","TransitionRun"),transitionstart:ir("Transition","TransitionStart"),transitioncancel:ir("Transition","TransitionCancel"),transitionend:ir("Transition","TransitionEnd")},pu={},xp={};Hi&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete zr.animationend.animation,delete zr.animationiteration.animation,delete zr.animationstart.animation),"TransitionEvent"in window||delete zr.transitionend.transition);function ar(e){if(pu[e])return pu[e];if(!zr[e])return e;var n=zr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in xp)return pu[e]=n[a];return e}var gp=ar("animationend"),_p=ar("animationiteration"),vp=ar("animationstart"),rv=ar("transitionrun"),sv=ar("transitionstart"),ov=ar("transitioncancel"),Sp=ar("transitionend"),yp=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function _i(e,n){yp.set(e,n),Bt(n,[e])}var cl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],Pr=0,xu=0;function ul(){for(var e=Pr,n=xu=Pr=0;n<e;){var a=ri[n];ri[n++]=null;var s=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var f=ri[n];if(ri[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&Mp(a,u,f)}}function fl(e,n,a,s){ri[Pr++]=e,ri[Pr++]=n,ri[Pr++]=a,ri[Pr++]=s,xu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function gu(e,n,a,s){return fl(e,n,a,s),dl(e)}function rr(e,n){return fl(e,null,null,n),dl(e)}function Mp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-zt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function dl(e){if(50<So)throw So=0,Rf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fr={};function lv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,s){return new lv(e,n,a,s)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hl(e,n,a,s,u,f){var _=0;if(s=e,typeof e=="function")_u(e)&&(_=1);else if(typeof e=="string")_=hS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return sr(a.children,u,f,n);case y:_=8,u|=24;break;case S:return e=Kn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case V:return e=Kn(13,a,n,u),e.elementType=V,e.lanes=f,e;case D:return e=Kn(19,a,n,u),e.elementType=D,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:_=10;break t;case P:_=9;break t;case F:_=11;break t;case O:_=14;break t;case Z:_=16,s=null;break t}_=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Kn(_,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function sr(e,n,a,s){return e=Kn(7,e,s,n),e.lanes=a,e}function vu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function Ep(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function Su(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Tp=new WeakMap;function si(e,n){if(typeof e=="object"&&e!==null){var a=Tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Oe(n)},Tp.set(e,n),n)}return{value:e,source:n,stack:Oe(n)}}var Br=[],Ir=0,pl=null,Js=0,oi=[],li=0,ba=null,Ci=1,wi="";function Vi(e,n){Br[Ir++]=Js,Br[Ir++]=pl,pl=e,Js=n}function Ap(e,n,a){oi[li++]=Ci,oi[li++]=wi,oi[li++]=ba,ba=e;var s=Ci;e=wi;var u=32-zt(s)-1;s&=~(1<<u),a+=1;var f=32-zt(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,Ci=1<<32-zt(n)+u|a<<u|s,wi=f+e}else Ci=1<<f|a<<u|s,wi=e}function yu(e){e.return!==null&&(Vi(e,1),Ap(e,1,0))}function Mu(e){for(;e===pl;)pl=Br[--Ir],Br[Ir]=null,Js=Br[--Ir],Br[Ir]=null;for(;e===ba;)ba=oi[--li],oi[li]=null,wi=oi[--li],oi[li]=null,Ci=oi[--li],oi[li]=null}function Rp(e,n){oi[li++]=Ci,oi[li++]=wi,oi[li++]=ba,Ci=n.id,wi=n.overflow,ba=e}var Tn=null,Ke=null,Te=!1,Ea=null,ci=!1,bu=Error(r(519));function Ta(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $s(si(n,e)),bu}function Cp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[ln]=e,n[pn]=s,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Mo.length;a++)ve(Mo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),Ze(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),En(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Wm(n.textContent,a)?(s.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),s.onScroll!=null&&ve("scroll",n),s.onScrollEnd!=null&&ve("scrollend",n),s.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Ta(e,!0)}function wp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Hr(e){if(e!==Tn)return!1;if(!Te)return wp(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vf(e.type,e.memoizedProps)),a=!a),a&&Ke&&Ta(e),wp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ke=tx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Ke=tx(e)}else n===27?(n=Ke,Ia(e.type)?(e=Yf,Yf=null,Ke=e):Ke=n):Ke=Tn?fi(e.stateNode.nextSibling):null;return!0}function or(){Ke=Tn=null,Te=!1}function Eu(){var e=Ea;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Ea=null),e}function $s(e){Ea===null?Ea=[e]:Ea.push(e)}var Tu=N(null),lr=null,Xi=null;function Aa(e,n,a){yt(Tu,n._currentValue),n._currentValue=a}function ki(e){e._currentValue=Tu.current,nt(Tu)}function Au(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Ru(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Au(f.return,a,e),s||(_=null);break t}f=T.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Au(_,a,e),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===e){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Gr(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var T=u.type;Zn(u.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(u===lt.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Ru(n,e,a,s),n.flags|=262144}function ml(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cr(e){lr=e,Xi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Dp(lr,e)}function xl(e,n){return lr===null&&cr(e),Dp(e,n)}function Dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Xi===null){if(e===null)throw Error(r(308));Xi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Xi=Xi.next=n;return a}var cv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},uv=o.unstable_scheduleCallback,fv=o.unstable_NormalPriority,cn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new cv,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&uv(fv,function(){e.controller.abort()})}var eo=null,wu=0,Vr=0,Xr=null;function dv(e,n){if(eo===null){var a=eo=[];wu=0,Vr=Nf(),Xr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return wu++,n.then(Up,Up),n}function Up(){if(--wu===0&&eo!==null){Xr!==null&&(Xr.status="fulfilled");var e=eo;eo=null,Vr=0,Xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Lp=z.S;z.S=function(e,n){mm=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&dv(e,n),Lp!==null&&Lp(e,n)};var ur=N(null);function Du(){var e=ur.current;return e!==null?e:Ye.pooledCache}function gl(e,n){n===null?yt(ur,ur.current):yt(ur,n.pool)}function Np(){var e=Du();return e===null?null:{parent:cn._currentValue,pool:e}}var kr=Error(r(460)),Uu=Error(r(474)),_l=Error(r(542)),vl={then:function(){}};function Op(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Fp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=Ye,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Fp(e),e}throw dr=n,kr}}function fr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(dr=a,kr):a}}var dr=null;function Pp(){if(dr===null)throw Error(r(459));var e=dr;return dr=null,e}function Fp(e){if(e===kr||e===_l)throw Error(r(483))}var Wr=null,no=0;function Sl(e){var n=no;return no+=1,Wr===null&&(Wr=[]),zp(Wr,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bp(e){function n(q,X){if(e){var J=q.deletions;J===null?(q.deletions=[X],q.flags|=16):J.push(X)}}function a(q,X){if(!e)return null;for(;X!==null;)n(q,X),X=X.sibling;return null}function s(q){for(var X=new Map;q!==null;)q.key!==null?X.set(q.key,q):X.set(q.index,q),q=q.sibling;return X}function u(q,X){return q=Gi(q,X),q.index=0,q.sibling=null,q}function f(q,X,J){return q.index=J,e?(J=q.alternate,J!==null?(J=J.index,J<X?(q.flags|=67108866,X):J):(q.flags|=67108866,X)):(q.flags|=1048576,X)}function _(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function T(q,X,J,xt){return X===null||X.tag!==6?(X=vu(J,q.mode,xt),X.return=q,X):(X=u(X,J),X.return=q,X)}function B(q,X,J,xt){var Jt=J.type;return Jt===A?pt(q,X,J.props.children,xt,J.key):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Z&&fr(Jt)===X.type)?(X=u(X,J.props),io(X,J),X.return=q,X):(X=hl(J.type,J.key,J.props,null,q.mode,xt),io(X,J),X.return=q,X)}function $(q,X,J,xt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Su(J,q.mode,xt),X.return=q,X):(X=u(X,J.children||[]),X.return=q,X)}function pt(q,X,J,xt,Jt){return X===null||X.tag!==7?(X=sr(J,q.mode,xt,Jt),X.return=q,X):(X=u(X,J),X.return=q,X)}function _t(q,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=vu(""+X,q.mode,J),X.return=q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case M:return J=hl(X.type,X.key,X.props,null,q.mode,J),io(J,X),J.return=q,J;case b:return X=Su(X,q.mode,J),X.return=q,X;case Z:return X=fr(X),_t(q,X,J)}if(ut(X)||K(X))return X=sr(X,q.mode,J,null),X.return=q,X;if(typeof X.then=="function")return _t(q,Sl(X),J);if(X.$$typeof===U)return _t(q,xl(q,X),J);yl(q,X)}return null}function at(q,X,J,xt){var Jt=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Jt!==null?null:T(q,X,""+J,xt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return J.key===Jt?B(q,X,J,xt):null;case b:return J.key===Jt?$(q,X,J,xt):null;case Z:return J=fr(J),at(q,X,J,xt)}if(ut(J)||K(J))return Jt!==null?null:pt(q,X,J,xt,null);if(typeof J.then=="function")return at(q,X,Sl(J),xt);if(J.$$typeof===U)return at(q,X,xl(q,J),xt);yl(q,J)}return null}function ct(q,X,J,xt,Jt){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return q=q.get(J)||null,T(X,q,""+xt,Jt);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case M:return q=q.get(xt.key===null?J:xt.key)||null,B(X,q,xt,Jt);case b:return q=q.get(xt.key===null?J:xt.key)||null,$(X,q,xt,Jt);case Z:return xt=fr(xt),ct(q,X,J,xt,Jt)}if(ut(xt)||K(xt))return q=q.get(J)||null,pt(X,q,xt,Jt,null);if(typeof xt.then=="function")return ct(q,X,J,Sl(xt),Jt);if(xt.$$typeof===U)return ct(q,X,J,xl(X,xt),Jt);yl(X,xt)}return null}function Yt(q,X,J,xt){for(var Jt=null,Ue=null,jt=X,pe=X=0,ye=null;jt!==null&&pe<J.length;pe++){jt.index>pe?(ye=jt,jt=null):ye=jt.sibling;var Le=at(q,jt,J[pe],xt);if(Le===null){jt===null&&(jt=ye);break}e&&jt&&Le.alternate===null&&n(q,jt),X=f(Le,X,pe),Ue===null?Jt=Le:Ue.sibling=Le,Ue=Le,jt=ye}if(pe===J.length)return a(q,jt),Te&&Vi(q,pe),Jt;if(jt===null){for(;pe<J.length;pe++)jt=_t(q,J[pe],xt),jt!==null&&(X=f(jt,X,pe),Ue===null?Jt=jt:Ue.sibling=jt,Ue=jt);return Te&&Vi(q,pe),Jt}for(jt=s(jt);pe<J.length;pe++)ye=ct(jt,q,pe,J[pe],xt),ye!==null&&(e&&ye.alternate!==null&&jt.delete(ye.key===null?pe:ye.key),X=f(ye,X,pe),Ue===null?Jt=ye:Ue.sibling=ye,Ue=ye);return e&&jt.forEach(function(ka){return n(q,ka)}),Te&&Vi(q,pe),Jt}function ne(q,X,J,xt){if(J==null)throw Error(r(151));for(var Jt=null,Ue=null,jt=X,pe=X=0,ye=null,Le=J.next();jt!==null&&!Le.done;pe++,Le=J.next()){jt.index>pe?(ye=jt,jt=null):ye=jt.sibling;var ka=at(q,jt,Le.value,xt);if(ka===null){jt===null&&(jt=ye);break}e&&jt&&ka.alternate===null&&n(q,jt),X=f(ka,X,pe),Ue===null?Jt=ka:Ue.sibling=ka,Ue=ka,jt=ye}if(Le.done)return a(q,jt),Te&&Vi(q,pe),Jt;if(jt===null){for(;!Le.done;pe++,Le=J.next())Le=_t(q,Le.value,xt),Le!==null&&(X=f(Le,X,pe),Ue===null?Jt=Le:Ue.sibling=Le,Ue=Le);return Te&&Vi(q,pe),Jt}for(jt=s(jt);!Le.done;pe++,Le=J.next())Le=ct(jt,q,pe,Le.value,xt),Le!==null&&(e&&Le.alternate!==null&&jt.delete(Le.key===null?pe:Le.key),X=f(Le,X,pe),Ue===null?Jt=Le:Ue.sibling=Le,Ue=Le);return e&&jt.forEach(function(ES){return n(q,ES)}),Te&&Vi(q,pe),Jt}function ke(q,X,J,xt){if(typeof J=="object"&&J!==null&&J.type===A&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case M:t:{for(var Jt=J.key;X!==null;){if(X.key===Jt){if(Jt=J.type,Jt===A){if(X.tag===7){a(q,X.sibling),xt=u(X,J.props.children),xt.return=q,q=xt;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Z&&fr(Jt)===X.type){a(q,X.sibling),xt=u(X,J.props),io(xt,J),xt.return=q,q=xt;break t}a(q,X);break}else n(q,X);X=X.sibling}J.type===A?(xt=sr(J.props.children,q.mode,xt,J.key),xt.return=q,q=xt):(xt=hl(J.type,J.key,J.props,null,q.mode,xt),io(xt,J),xt.return=q,q=xt)}return _(q);case b:t:{for(Jt=J.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(q,X.sibling),xt=u(X,J.children||[]),xt.return=q,q=xt;break t}else{a(q,X);break}else n(q,X);X=X.sibling}xt=Su(J,q.mode,xt),xt.return=q,q=xt}return _(q);case Z:return J=fr(J),ke(q,X,J,xt)}if(ut(J))return Yt(q,X,J,xt);if(K(J)){if(Jt=K(J),typeof Jt!="function")throw Error(r(150));return J=Jt.call(J),ne(q,X,J,xt)}if(typeof J.then=="function")return ke(q,X,Sl(J),xt);if(J.$$typeof===U)return ke(q,X,xl(q,J),xt);yl(q,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(q,X.sibling),xt=u(X,J),xt.return=q,q=xt):(a(q,X),xt=vu(J,q.mode,xt),xt.return=q,q=xt),_(q)):a(q,X)}return function(q,X,J,xt){try{no=0;var Jt=ke(q,X,J,xt);return Wr=null,Jt}catch(jt){if(jt===kr||jt===_l)throw jt;var Ue=Kn(29,jt,null,q.mode);return Ue.lanes=xt,Ue.return=q,Ue}finally{}}}var hr=Bp(!0),Ip=Bp(!1),Ra=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function wa(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ze&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=dl(e),Mp(e,null,a),n}return fl(e,s,n,a),dl(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Bs(e,a)}}function Ou(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var zu=!1;function ro(){if(zu){var e=Xr;if(e!==null)throw e}}function so(e,n,a,s){zu=!1;var u=e.updateQueue;Ra=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,$=B.next;B.next=null,_===null?f=$:_.next=$,_=B;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,T=pt.lastBaseUpdate,T!==_&&(T===null?pt.firstBaseUpdate=$:T.next=$,pt.lastBaseUpdate=B))}if(f!==null){var _t=u.baseState;_=0,pt=$=B=null,T=f;do{var at=T.lane&-536870913,ct=at!==T.lane;if(ct?(Se&at)===at:(s&at)===at){at!==0&&at===Vr&&(zu=!0),pt!==null&&(pt=pt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Yt=e,ne=T;at=n;var ke=a;switch(ne.tag){case 1:if(Yt=ne.payload,typeof Yt=="function"){_t=Yt.call(ke,_t,at);break t}_t=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=ne.payload,at=typeof Yt=="function"?Yt.call(ke,_t,at):Yt,at==null)break t;_t=g({},_t,at);break t;case 2:Ra=!0}}at=T.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},pt===null?($=pt=ct,B=_t):pt=pt.next=ct,_|=at;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ct=T,T=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);pt===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Oa|=_,e.lanes=_,e.memoizedState=_t}}function Hp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Hp(a[e],n)}var qr=N(null),Ml=N(0);function Vp(e,n){e=$i,yt(Ml,e),yt(qr,n),$i=e|n.baseLanes}function Pu(){yt(Ml,$i),yt(qr,qr.current)}function Fu(){$i=Ml.current,nt(qr),nt(Ml)}var Qn=N(null),ui=null;function Da(e){var n=e.alternate;yt(sn,sn.current&1),yt(Qn,e),ui===null&&(n===null||qr.current!==null||n.memoizedState!==null)&&(ui=e)}function Bu(e){yt(sn,sn.current),yt(Qn,e),ui===null&&(ui=e)}function Xp(e){e.tag===22?(yt(sn,sn.current),yt(Qn,e),ui===null&&(ui=e)):Ua()}function Ua(){yt(sn,sn.current),yt(Qn,Qn.current)}function Jn(e){nt(Qn),ui===e&&(ui=null),nt(sn)}var sn=N(0);function bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wf(a)||qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Wi=0,de=null,Ve=null,un=null,El=!1,Yr=!1,pr=!1,Tl=0,oo=0,jr=null,pv=0;function nn(){throw Error(r(321))}function Iu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Hu(e,n,a,s,u,f){return Wi=f,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?A0:ef,pr=!1,f=a(s,u),pr=!1,Yr&&(f=Wp(n,a,s,u)),kp(e),f}function kp(e){z.H=uo;var n=Ve!==null&&Ve.next!==null;if(Wi=0,un=Ve=de=null,El=!1,oo=0,jr=null,n)throw Error(r(300));e===null||fn||(e=e.dependencies,e!==null&&ml(e)&&(fn=!0))}function Wp(e,n,a,s){de=e;var u=0;do{if(Yr&&(jr=null),oo=0,Yr=!1,25<=u)throw Error(r(301));if(u+=1,un=Ve=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=R0,f=n(a,s)}while(Yr);return f}function mv(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?lo(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(de.flags|=1024),n}function Gu(){var e=Tl!==0;return Tl=0,e}function Vu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Xu(e){if(El){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}El=!1}Wi=0,un=Ve=de=null,Yr=!1,oo=Tl=0,jr=null}function zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?de.memoizedState=un=e:un=un.next=e,un}function on(){if(Ve===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=un===null?de.memoizedState:un.next;if(n!==null)un=n,Ve=e;else{if(e===null)throw de.alternate===null?Error(r(467)):Error(r(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},un===null?de.memoizedState=un=e:un=un.next=e}return un}function Al(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(e){var n=oo;return oo+=1,jr===null&&(jr=[]),e=zp(jr,e,n),n=de,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?A0:ef),e}function Rl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===U)return An(e)}throw Error(r(438,String(e)))}function ku(e){var n=null,a=de.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=de.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Al(),de.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function Cl(e){var n=on();return Wu(n,Ve,e)}function Wu(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=_=null,B=null,$=n,pt=!1;do{var _t=$.lane&-536870913;if(_t!==$.lane?(Se&_t)===_t:(Wi&_t)===_t){var at=$.revertLane;if(at===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),_t===Vr&&(pt=!0);else if((Wi&at)===at){$=$.next,at===Vr&&(pt=!0);continue}else _t={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=_t,_=f):B=B.next=_t,de.lanes|=at,Oa|=at;_t=$.action,pr&&a(f,_t),f=$.hasEagerState?$.eagerState:a(f,_t)}else at={lane:_t,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=at,_=f):B=B.next=at,de.lanes|=_t,Oa|=_t;$=$.next}while($!==null&&$!==n);if(B===null?_=f:B.next=T,!Zn(f,e.memoizedState)&&(fn=!0,pt&&(a=Xr,a!==null)))throw a;e.memoizedState=f,e.baseState=_,e.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function qu(e){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=e(f,_.action),_=_.next;while(_!==u);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function qp(e,n,a){var s=de,u=on(),f=Te;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Zn((Ve||u).memoizedState,a);if(_&&(u.memoizedState=a,fn=!0),u=u.queue,Zu(Zp.bind(null,s,u,e),[e]),u.getSnapshot!==n||_||un!==null&&un.memoizedState.tag&1){if(s.flags|=2048,Zr(9,{destroy:void 0},jp.bind(null,s,u,a,n),null),Ye===null)throw Error(r(349));f||(Wi&127)!==0||Yp(s,n,a)}return a}function Yp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=de.updateQueue,n===null?(n=Al(),de.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function jp(e,n,a,s){n.value=a,n.getSnapshot=s,Kp(n)&&Qp(e)}function Zp(e,n,a){return a(function(){Kp(n)&&Qp(e)})}function Kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function Qp(e){var n=rr(e,2);n!==null&&Xn(n,e,2)}function Yu(e){var n=zn();if(typeof e=="function"){var a=e;if(e=a(),pr){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function Jp(e,n,a,s){return e.baseState=a,Wu(e,Ve,typeof s=="function"?s:qi)}function xv(e,n,a,s,u){if(Ul(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,$p(n,f)):(f.next=a.next,n.pending=a.next=f)}}function $p(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=z.T,_={};z.T=_;try{var T=a(u,s),B=z.S;B!==null&&B(_,T),t0(e,n,T)}catch($){ju(e,n,$)}finally{f!==null&&_.types!==null&&(f.types=_.types),z.T=f}}else try{f=a(u,s),t0(e,n,f)}catch($){ju(e,n,$)}}function t0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){e0(e,n,s)},function(s){return ju(e,n,s)}):e0(e,n,a)}function e0(e,n,a){n.status="fulfilled",n.value=a,n0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,$p(e,a)))}function ju(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,n0(n),n=n.next;while(n!==s)}e.action=null}function n0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function i0(e,n){return n}function a0(e,n){if(Te){var a=Ye.formState;if(a!==null){t:{var s=de;if(Te){if(Ke){e:{for(var u=Ke,f=ci;u.nodeType!==8;){if(!f){u=null;break e}if(u=fi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=fi(u.nextSibling),s=u.data==="F!";break t}}Ta(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i0,lastRenderedState:n},a.queue=s,a=b0.bind(null,de,s),s.dispatch=a,s=Yu(!1),f=tf.bind(null,de,!1,s.queue),s=zn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=xv.bind(null,de,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function r0(e){var n=on();return s0(n,Ve,e)}function s0(e,n,a){if(n=Wu(e,n,i0)[0],e=Cl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=lo(n)}catch(_){throw _===kr?_l:_}else s=n;n=on();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(de.flags|=2048,Zr(9,{destroy:void 0},gv.bind(null,u,a),null)),[s,f,e]}function gv(e,n){e.action=n}function o0(e){var n=on(),a=Ve;if(a!==null)return s0(n,a,e);on(),n=n.memoizedState,a=on();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Zr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=de.updateQueue,n===null&&(n=Al(),de.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function l0(){return on().memoizedState}function wl(e,n,a,s){var u=zn();de.flags|=e,u.memoizedState=Zr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Dl(e,n,a,s){var u=on();s=s===void 0?null:s;var f=u.memoizedState.inst;Ve!==null&&s!==null&&Iu(s,Ve.memoizedState.deps)?u.memoizedState=Zr(n,f,a,s):(de.flags|=e,u.memoizedState=Zr(1|n,f,a,s))}function c0(e,n){wl(8390656,8,e,n)}function Zu(e,n){Dl(2048,8,e,n)}function _v(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=Al(),de.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function u0(e){var n=on().memoizedState;return _v({ref:n,nextImpl:e}),function(){if((ze&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function f0(e,n){return Dl(4,2,e,n)}function d0(e,n){return Dl(4,4,e,n)}function h0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function p0(e,n,a){a=a!=null?a.concat([e]):null,Dl(4,4,h0.bind(null,n,e),a)}function Ku(){}function m0(e,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Iu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function x0(e,n){var a=on();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Iu(n,s[1]))return s[0];if(s=e(),pr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[s,n],s}function Qu(e,n,a){return a===void 0||(Wi&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=gm(),de.lanes|=e,Oa|=e,a)}function g0(e,n,a,s){return Zn(a,n)?a:qr.current!==null?(e=Qu(e,a,s),Zn(e,n)||(fn=!0),e):(Wi&42)===0||(Wi&1073741824)!==0&&(Se&261930)===0?(fn=!0,e.memoizedState=a):(e=gm(),de.lanes|=e,Oa|=e,n)}function _0(e,n,a,s,u){var f=Y.p;Y.p=f!==0&&8>f?f:8;var _=z.T,T={};z.T=T,tf(e,!1,n,a);try{var B=u(),$=z.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var pt=hv(B,s);co(e,n,pt,ei(e))}else co(e,n,s,ei(e))}catch(_t){co(e,n,{then:function(){},status:"rejected",reason:_t},ei())}finally{Y.p=f,_!==null&&T.types!==null&&(_.types=T.types),z.T=_}}function vv(){}function Ju(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=v0(e).queue;_0(e,u,n,k,a===null?vv:function(){return S0(e),a(s)})}function v0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function S0(e){var n=v0(e);n.next===null&&(n=e.alternate.memoizedState),co(e,n.next.queue,{},ei())}function $u(){return An(Ro)}function y0(){return on().memoizedState}function M0(){return on().memoizedState}function Sv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Ca(a);var s=wa(n,e,a);s!==null&&(Xn(s,n,a),ao(s,n,a)),n={cache:Cu()},e.payload=n;return}n=n.return}}function yv(e,n,a){var s=ei();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)?E0(n,a):(a=gu(e,n,a,s),a!==null&&(Xn(a,e,s),T0(a,n,s)))}function b0(e,n,a){var s=ei();co(e,n,a,s)}function co(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))E0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,T=f(_,a);if(u.hasEagerState=!0,u.eagerState=T,Zn(T,_))return fl(e,n,u,0),Ye===null&&ul(),!1}catch{}finally{}if(a=gu(e,n,u,s),a!==null)return Xn(a,e,s),T0(a,n,s),!0}return!1}function tf(e,n,a,s){if(s={lane:2,revertLane:Nf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(r(479))}else n=gu(e,a,s,2),n!==null&&Xn(n,e,2)}function Ul(e){var n=e.alternate;return e===de||n!==null&&n===de}function E0(e,n){Yr=El=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function T0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Bs(e,a)}}var uo={readContext:An,use:Rl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};uo.useEffectEvent=nn;var A0={readContext:An,use:Rl,useCallback:function(e,n){return zn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:c0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wl(4194308,4,h0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wl(4194308,4,e,n)},useInsertionEffect:function(e,n){wl(4,2,e,n)},useMemo:function(e,n){var a=zn();n=n===void 0?null:n;var s=e();if(pr){Ot(!0);try{e()}finally{Ot(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=zn();if(a!==void 0){var u=a(n);if(pr){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=yv.bind(null,de,e),[s.memoizedState,e]},useRef:function(e){var n=zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Yu(e);var n=e.queue,a=b0.bind(null,de,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ku,useDeferredValue:function(e,n){var a=zn();return Qu(a,e,n)},useTransition:function(){var e=Yu(!1);return e=_0.bind(null,de,e.queue,!0,!1),zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=de,u=zn();if(Te){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ye===null)throw Error(r(349));(Se&127)!==0||Yp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,c0(Zp.bind(null,s,f,e),[e]),s.flags|=2048,Zr(9,{destroy:void 0},jp.bind(null,s,f,a,n),null),a},useId:function(){var e=zn(),n=Ye.identifierPrefix;if(Te){var a=wi,s=Ci;a=(s&~(1<<32-zt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Tl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=pv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$u,useFormState:a0,useActionState:a0,useOptimistic:function(e){var n=zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,de,!0,a),a.dispatch=n,[e,n]},useMemoCache:ku,useCacheRefresh:function(){return zn().memoizedState=Sv.bind(null,de)},useEffectEvent:function(e){var n=zn(),a={impl:e};return n.memoizedState=a,function(){if((ze&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},ef={readContext:An,use:Rl,useCallback:m0,useContext:An,useEffect:Zu,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:x0,useReducer:Cl,useRef:l0,useState:function(){return Cl(qi)},useDebugValue:Ku,useDeferredValue:function(e,n){var a=on();return g0(a,Ve.memoizedState,e,n)},useTransition:function(){var e=Cl(qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:qp,useId:y0,useHostTransitionStatus:$u,useFormState:r0,useActionState:r0,useOptimistic:function(e,n){var a=on();return Jp(a,Ve,e,n)},useMemoCache:ku,useCacheRefresh:M0};ef.useEffectEvent=u0;var R0={readContext:An,use:Rl,useCallback:m0,useContext:An,useEffect:Zu,useImperativeHandle:p0,useInsertionEffect:f0,useLayoutEffect:d0,useMemo:x0,useReducer:qu,useRef:l0,useState:function(){return qu(qi)},useDebugValue:Ku,useDeferredValue:function(e,n){var a=on();return Ve===null?Qu(a,e,n):g0(a,Ve.memoizedState,e,n)},useTransition:function(){var e=qu(qi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:qp,useId:y0,useHostTransitionStatus:$u,useFormState:o0,useActionState:o0,useOptimistic:function(e,n){var a=on();return Ve!==null?Jp(a,Ve,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ku,useCacheRefresh:M0};R0.useEffectEvent=u0;function nf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var af={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ei(),u=Ca(s);u.payload=n,a!=null&&(u.callback=a),n=wa(e,u,s),n!==null&&(Xn(n,e,s),ao(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ei(),u=Ca(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=wa(e,u,s),n!==null&&(Xn(n,e,s),ao(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),s=Ca(a);s.tag=2,n!=null&&(s.callback=n),n=wa(e,s,a),n!==null&&(Xn(n,e,a),ao(n,e,a))}};function C0(e,n,a,s,u,f,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,s)||!Ks(u,f):!0}function w0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&af.enqueueReplaceState(n,n.state,null)}function mr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function D0(e){cl(e)}function U0(e){console.error(e)}function L0(e){cl(e)}function Ll(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function N0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function rf(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Ll(e,n)},a}function O0(e){return e=Ca(e),e.tag=3,e}function z0(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){N0(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){N0(n,a,s),typeof u!="function"&&(za===null?za=new Set([this]):za.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Mv(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Gr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?kl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Df(e,s,u)),!1;case 22:return a.flags|=65536,s===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Df(e,s,u)),!1}throw Error(r(435,a.tag))}return Df(e,s,u),kl(),!1}if(Te)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==bu&&(e=Error(r(422),{cause:s}),$s(si(e,a)))):(s!==bu&&(n=Error(r(423),{cause:s}),$s(si(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=si(s,a),u=rf(e.stateNode,s,u),Ou(e,u),an!==4&&(an=2)),!1;var f=Error(r(520),{cause:s});if(f=si(f,a),vo===null?vo=[f]:vo.push(f),an!==4&&(an=2),n===null)return!0;s=si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=rf(a.stateNode,s,e),Ou(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(za===null||!za.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=O0(u),z0(u,e,a,s),Ou(a,u),!1}a=a.return}while(a!==null);return!1}var sf=Error(r(461)),fn=!1;function Rn(e,n,a,s){n.child=e===null?Ip(n,null,a,s):hr(n,e.child,a,s)}function P0(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var T in s)T!=="ref"&&(_[T]=s[T])}else _=s;return cr(n),s=Hu(e,n,a,_,f,u),T=Gu(),e!==null&&!fn?(Vu(e,n,u),Yi(e,n,u)):(Te&&T&&yu(n),n.flags|=1,Rn(e,n,s,u),n.child)}function F0(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!_u(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,B0(e,n,f,s,u)):(e=hl(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!pf(e,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(_,s)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Gi(f,s),e.ref=n.ref,e.return=n,n.child=e}function B0(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Ks(f,s)&&e.ref===n.ref)if(fn=!1,n.pendingProps=s=f,pf(e,u))(e.flags&131072)!==0&&(fn=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return of(e,n,a,s,u)}function I0(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return H0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&gl(n,f!==null?f.cachePool:null),f!==null?Vp(n,f):Pu(),Xp(n);else return s=n.lanes=536870912,H0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(gl(n,f.cachePool),Vp(n,f),Ua(),n.memoizedState=null):(e!==null&&gl(n,null),Pu(),Ua());return Rn(e,n,u,a),n.child}function fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function H0(e,n,a,s,u){var f=Du();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&gl(n,null),Pu(),Xp(n),e!==null&&Gr(e,n,s,!0),n.childLanes=u,null}function Nl(e,n){return n=zl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function G0(e,n,a){return hr(n,e.child,null,a),e=Nl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function bv(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(s.mode==="hidden")return e=Nl(n,s),n.lanes=536870912,fo(null,e);if(Bu(n),(e=Ke)?(e=$m(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Ep(e),a.return=n,n.child=a,Tn=n,Ke=null)):e=null,e===null)throw Ta(n);return n.lanes=536870912,null}return Nl(n,s)}var f=e.memoizedState;if(f!==null){var _=f.dehydrated;if(Bu(n),u)if(n.flags&256)n.flags&=-257,n=G0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||Gr(e,n,a,!1),u=(a&e.childLanes)!==0,fn||u){if(s=Ye,s!==null&&(_=Is(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,rr(e,_),Xn(s,e,_),sf;kl(),n=G0(e,n,a)}else e=f.treeContext,Ke=fi(_.nextSibling),Tn=n,Te=!0,Ea=null,ci=!1,e!==null&&Rp(n,e),n=Nl(n,s),n.flags|=4096;return n}return e=Gi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ol(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function of(e,n,a,s,u){return cr(n),a=Hu(e,n,a,s,void 0,u),s=Gu(),e!==null&&!fn?(Vu(e,n,u),Yi(e,n,u)):(Te&&s&&yu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function V0(e,n,a,s,u,f){return cr(n),n.updateQueue=null,a=Wp(n,s,a,u),kp(e),s=Gu(),e!==null&&!fn?(Vu(e,n,f),Yi(e,n,f)):(Te&&s&&yu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function X0(e,n,a,s,u){if(cr(n),n.stateNode===null){var f=Fr,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Lu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):Fr,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(nf(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&af.enqueueReplaceState(f,f.state,null),so(n,s,f,u),ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,B=mr(a,T);f.props=B;var $=f.context,pt=a.contextType;_=Fr,typeof pt=="object"&&pt!==null&&(_=An(pt));var _t=a.getDerivedStateFromProps;pt=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==_)&&w0(n,f,s,_),Ra=!1;var at=n.memoizedState;f.state=at,so(n,s,f,u),ro(),$=n.memoizedState,T||at!==$||Ra?(typeof _t=="function"&&(nf(n,a,_t,s),$=n.memoizedState),(B=Ra||C0(n,a,B,s,at,$,_))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=_,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Nu(e,n),_=n.memoizedProps,pt=mr(a,_),f.props=pt,_t=n.pendingProps,at=f.context,$=a.contextType,B=Fr,typeof $=="object"&&$!==null&&(B=An($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_t||at!==B)&&w0(n,f,s,B),Ra=!1,at=n.memoizedState,f.state=at,so(n,s,f,u),ro();var ct=n.memoizedState;_!==_t||at!==ct||Ra||e!==null&&e.dependencies!==null&&ml(e.dependencies)?(typeof T=="function"&&(nf(n,a,T,s),ct=n.memoizedState),(pt=Ra||C0(n,a,pt,s,at,ct,B)||e!==null&&e.dependencies!==null&&ml(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=B,s=pt):(typeof f.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ol(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=hr(n,e.child,null,u),n.child=hr(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Yi(e,n,u),e}function k0(e,n,a,s){return or(),n.flags|=256,Rn(e,n,a,s),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(e){return{baseLanes:e,cachePool:Np()}}function uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function W0(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=e!==null&&e.memoizedState===null?!1:(sn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Da(n):Ua(),(e=Ke)?(e=$m(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Ci,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=Ep(e),a.return=n,n.child=a,Tn=n,Ke=null)):e=null,e===null)throw Ta(n);return qf(e)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Ua(),u=n.mode,T=zl({mode:"hidden",children:T},u),s=sr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=cf(a),s.childLanes=uf(e,_,a),n.memoizedState=lf,fo(null,s)):(Da(n),ff(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Da(n),n.flags&=-257,n=df(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),T=s.fallback,u=n.mode,s=zl({mode:"visible",children:s.children},u),T=sr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,hr(n,e.child,null,a),s=n.child,s.memoizedState=cf(a),s.childLanes=uf(e,_,a),n.memoizedState=lf,n=fo(null,s));else if(Da(n),qf(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var $=_.dgst;_=$,s=Error(r(419)),s.stack="",s.digest=_,$s({value:s,source:null,stack:null}),n=df(e,n,a)}else if(fn||Gr(e,n,a,!1),_=(a&e.childLanes)!==0,fn||_){if(_=Ye,_!==null&&(s=Is(_,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,rr(e,s),Xn(_,e,s),sf;Wf(T)||kl(),n=df(e,n,a)}else Wf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,Ke=fi(T.nextSibling),Tn=n,Te=!0,Ea=null,ci=!1,e!==null&&Rp(n,e),n=ff(n,s.children),n.flags|=4096);return n}return u?(Ua(),T=s.fallback,u=n.mode,B=e.child,$=B.sibling,s=Gi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=Gi($,T):(T=sr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,fo(null,s),s=n.child,T=e.child.memoizedState,T===null?T=cf(a):(u=T.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Np(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=uf(e,_,a),n.memoizedState=lf,fo(e.child,s)):(Da(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function ff(e,n){return n=zl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function zl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function df(e,n,a){return hr(n,e.child,null,a),e=ff(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function q0(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Au(e.return,n,a)}function hf(e,n,a,s,u,f){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function Y0(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=sn.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,yt(sn,_),Rn(e,n,s,a),s=Te?Js:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&q0(e,a,n);else if(e.tag===19)q0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),hf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}hf(n,!0,a,null,f,s);break;case"together":hf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Oa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Gr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ml(e)))}function Ev(e,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),Aa(n,cn,e.memoizedState.cache),or();break;case 27:case 5:qt(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?W0(e,n,a):(Da(n),e=Yi(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Gr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return Y0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(sn,sn.current),s)break;return null;case 22:return n.lanes=0,I0(e,n,a,n.pendingProps);case 24:Aa(n,cn,e.memoizedState.cache)}return Yi(e,n,a)}function j0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)fn=!0;else{if(!pf(e,a)&&(n.flags&128)===0)return fn=!1,Ev(e,n,a);fn=(e.flags&131072)!==0}else fn=!1,Te&&(n.flags&1048576)!==0&&Ap(n,Js,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=fr(n.elementType),n.type=e,typeof e=="function")_u(e)?(s=mr(e,s),n.tag=1,n=X0(null,n,e,s,a)):(n.tag=0,n=of(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===F){n.tag=11,n=P0(null,n,e,s,a);break t}else if(u===O){n.tag=14,n=F0(null,n,e,s,a);break t}}throw n=dt(e)||e,Error(r(306,n,""))}}return n;case 0:return of(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=mr(s,n.pendingProps),X0(e,n,s,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Nu(e,n),so(n,s,null,a);var _=n.memoizedState;if(s=_.cache,Aa(n,cn,s),s!==f.cache&&Ru(n,[cn],a,!0),ro(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=k0(e,n,s,a);break t}else if(s!==u){u=si(Error(r(424)),n),$s(u),n=k0(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ke=fi(e.firstChild),Tn=n,Te=!0,Ea=null,ci=!0,a=Ip(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(or(),s===u){n=Yi(e,n,a);break t}Rn(e,n,s,a)}n=n.child}return n;case 26:return Ol(e,n),e===null?(a=rx(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(a=n.type,e=n.pendingProps,s=Ql(tt.current).createElement(a),s[ln]=n,s[pn]=e,Cn(s,a,e),et(s),n.stateNode=s):n.memoizedState=rx(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return qt(n),e===null&&Te&&(s=n.stateNode=nx(n.type,n.pendingProps,tt.current),Tn=n,ci=!0,u=Ke,Ia(n.type)?(Yf=u,Ke=fi(s.firstChild)):Ke=u),Rn(e,n,n.pendingProps.children,a),Ol(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=s=Ke)&&(s=tS(s,n.type,n.pendingProps,ci),s!==null?(n.stateNode=s,Tn=n,Ke=fi(s.firstChild),ci=!1,u=!0):u=!1),u||Ta(n)),qt(n),u=n.type,f=n.pendingProps,_=e!==null?e.memoizedProps:null,s=f.children,Vf(u,f)?s=null:_!==null&&Vf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Hu(e,n,mv,null,null,a),Ro._currentValue=u),Ol(e,n),Rn(e,n,s,a),n.child;case 6:return e===null&&Te&&((e=a=Ke)&&(a=eS(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,Ke=null,e=!0):e=!1),e||Ta(n)),null;case 13:return W0(e,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=hr(n,null,s,a):Rn(e,n,s,a),n.child;case 11:return P0(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Aa(n,n.type,s.value),Rn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,cr(n),u=An(u),s=s(u),n.flags|=1,Rn(e,n,s,a),n.child;case 14:return F0(e,n,n.type,n.pendingProps,a);case 15:return B0(e,n,n.type,n.pendingProps,a);case 19:return Y0(e,n,a);case 31:return bv(e,n,a);case 22:return I0(e,n,a,n.pendingProps);case 24:return cr(n),s=An(cn),e===null?(u=Du(),u===null&&(u=Ye,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Lu(n),Aa(n,cn,u)):((e.lanes&a)!==0&&(Nu(e,n),so(n,null,null,a),ro()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Aa(n,cn,s)):(s=f.cache,Aa(n,cn,s),s!==u.cache&&Ru(n,[cn],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ji(e){e.flags|=4}function mf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(ym())e.flags|=8192;else throw dr=vl,Uu}else e.flags&=-16777217}function Z0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ux(n))if(ym())e.flags|=8192;else throw dr=vl,Uu}function Pl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ge():536870912,e.lanes|=n,$r|=n)}function ho(e,n){if(!Te)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Tv(e,n,a){var s=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(n),null;case 1:return Qe(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ki(cn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hr(n)?ji(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Eu())),Qe(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(ji(n),f!==null?(Qe(n),Z0(n,f)):(Qe(n),mf(n,u,null,s,a))):f?f!==e.memoizedState?(ji(n),Qe(n),Z0(n,f)):(Qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&ji(n),Qe(n),mf(n,u,e,s,a)),null;case 27:if(le(n),a=tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}e=At.current,Hr(n)?Cp(n):(e=nx(u,s,a),n.stateNode=e,ji(n))}return Qe(n),null;case 5:if(le(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qe(n),null}if(f=At.current,Hr(n))Cp(n);else{var _=Ql(tt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[ln]=n,f[pn]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Cn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ji(n)}}return Qe(n),mf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ji(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=tt.current,Hr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[ln]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Wm(e.nodeValue,a)),e||Ta(n,!0)}else e=Ql(e).createTextNode(s),e[ln]=n,n.stateNode=e}return Qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Hr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ln]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),e=!1}else a=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qe(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Hr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else or(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qe(n),u=!1}else u=Eu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Qe(n),null);case 4:return It(),e===null&&Ff(n.stateNode.containerInfo),Qe(n),null;case 10:return ki(n.type),Qe(n),null;case 19:if(nt(sn),s=n.memoizedState,s===null)return Qe(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)ho(s,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=bl(e),f!==null){for(n.flags|=128,ho(s,!1),e=f.updateQueue,n.updateQueue=e,Pl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)bp(a,e),a=a.sibling;return yt(sn,sn.current&1|2),Te&&Vi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&E()>Gl&&(n.flags|=128,u=!0,ho(s,!1),n.lanes=4194304)}else{if(!u)if(e=bl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Pl(n,e),ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Te)return Qe(n),null}else 2*E()-s.renderingStartTime>Gl&&a!==536870912&&(n.flags|=128,u=!0,ho(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=E(),e.sibling=null,a=sn.current,yt(sn,u?a&1|2:a&1),Te&&Vi(n,s.treeForkCount),e):(Qe(n),null);case 22:case 23:return Jn(n),Fu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qe(n),n.subtreeFlags&6&&(n.flags|=8192)):Qe(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&nt(ur),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ki(cn),Qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Av(e,n){switch(Mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ki(cn),It(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));or()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(sn),null;case 4:return It(),null;case 10:return ki(n.type),null;case 22:case 23:return Jn(n),Fu(),e!==null&&nt(ur),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ki(cn),null;case 25:return null;default:return null}}function K0(e,n){switch(Mu(n),n.tag){case 3:ki(cn),It();break;case 26:case 27:case 5:le(n);break;case 4:It();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:nt(sn);break;case 10:ki(n.type);break;case 22:case 23:Jn(n),Fu(),e!==null&&nt(ur);break;case 24:ki(cn)}}function po(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(T){Ie(n,n.return,T)}}function La(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var _=s.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,u=n;var B=a,$=T;try{$()}catch(pt){Ie(u,B,pt)}}}s=s.next}while(s!==f)}}catch(pt){Ie(n,n.return,pt)}}function Q0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Gp(n,a)}catch(s){Ie(e,e.return,s)}}}function J0(e,n,a){a.props=mr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ie(e,n,s)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Ie(e,n,u)}}function Di(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ie(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(e,n,u)}else a.current=null}function $0(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ie(e,e.return,u)}}function xf(e,n,a){try{var s=e.stateNode;jv(s,e.type,a,n),s[pn]=n}catch(u){Ie(e,e.return,u)}}function tm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function gf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _f(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(s!==4&&(s===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(_f(e,n,a),e=e.sibling;e!==null;)_f(e,n,a),e=e.sibling}function Fl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Fl(e,n,a),e=e.sibling;e!==null;)Fl(e,n,a),e=e.sibling}function em(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,s,a),n[ln]=e,n[pn]=a}catch(f){Ie(e,e.return,f)}}var Zi=!1,dn=!1,vf=!1,nm=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Rv(e,n){if(e=e.containerInfo,Hf=ac,e=pp(e),fu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,T=-1,B=-1,$=0,pt=0,_t=e,at=null;e:for(;;){for(var ct;_t!==a||u!==0&&_t.nodeType!==3||(T=_+u),_t!==f||s!==0&&_t.nodeType!==3||(B=_+s),_t.nodeType===3&&(_+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)at=_t,_t=ct;for(;;){if(_t===e)break e;if(at===a&&++$===u&&(T=_),at===f&&++pt===s&&(B=_),(ct=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=ct}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:e,selectionRange:a},ac=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Yt=mr(a.type,u);e=s.getSnapshotBeforeUpdate(Yt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Ie(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function im(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),s&4&&po(5,a);break;case 1:if(Qi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Ie(a,a.return,_)}else{var u=mr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Ie(a,a.return,_)}}s&64&&Q0(a),s&512&&mo(a,a.return);break;case 3:if(Qi(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gp(e,n)}catch(_){Ie(a,a.return,_)}}break;case 27:n===null&&s&4&&em(a);case 26:case 5:Qi(e,a),n===null&&s&4&&$0(a),s&512&&mo(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),s&4&&sm(e,a);break;case 13:Qi(e,a),s&4&&om(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Pv.bind(null,a),nS(e,a))));break;case 22:if(s=a.memoizedState!==null||Zi,!s){n=n!==null&&n.memoizedState!==null||dn,u=Zi;var f=dn;Zi=s,(dn=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=u,dn=f}break;case 30:break;default:Qi(e,a)}}function am(e){var n=e.alternate;n!==null&&(e.alternate=null,am(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,In=!1;function Ki(e,n,a){for(a=a.child;a!==null;)rm(e,n,a),a=a.sibling}function rm(e,n,a){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(it,a)}catch{}switch(a.tag){case 26:dn||Di(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Di(a,n);var s=$e,u=In;Ia(a.type)&&($e=a.stateNode,In=!1),Ki(e,n,a),Eo(a.stateNode),$e=s,In=u;break;case 5:dn||Di(a,n);case 6:if(s=$e,u=In,$e=null,Ki(e,n,a),$e=s,In=u,$e!==null)if(In)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ie(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ie(a,n,f)}break;case 18:$e!==null&&(In?(e=$e,Qm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),os(e)):Qm($e,a.stateNode));break;case 4:s=$e,u=In,$e=a.stateNode.containerInfo,In=!0,Ki(e,n,a),$e=s,In=u;break;case 0:case 11:case 14:case 15:La(2,a,n),dn||La(4,a,n),Ki(e,n,a);break;case 1:dn||(Di(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&J0(a,n,s)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:dn=(s=dn)||a.memoizedState!==null,Ki(e,n,a),dn=s;break;default:Ki(e,n,a)}}function sm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{os(e)}catch(a){Ie(n,n.return,a)}}}function om(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{os(e)}catch(a){Ie(n,n.return,a)}}function Cv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new nm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new nm),n;default:throw Error(r(435,e.tag))}}function Bl(e,n){var a=Cv(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Fv.bind(null,e,s);s.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,_=n,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Ia(T.type)){$e=T.stateNode,In=!1;break t}break;case 5:$e=T.stateNode,In=!1;break t;case 3:case 4:$e=T.stateNode.containerInfo,In=!0;break t}T=T.return}if($e===null)throw Error(r(160));rm(f,_,u),$e=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)lm(n,e),n=n.sibling}var vi=null;function lm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),s&4&&(La(3,e,e.return),po(3,e),La(5,e,e.return));break;case 1:Hn(n,e),Gn(e),s&512&&(dn||a===null||Di(a,a.return)),s&64&&Zi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=vi;if(Hn(n,e),Gn(e),s&512&&(dn||a===null||Di(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[er]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,s,a),f[ln]=e,et(f),s=f;break t;case"link":var _=lx("link","href",u).get(s+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(f=_[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break e}}f=u.createElement(s),Cn(f,s,a),u.head.appendChild(f);break;case"meta":if(_=lx("meta","content",u).get(s+(a.content||""))){for(T=0;T<_.length;T++)if(f=_[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break e}}f=u.createElement(s),Cn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[ln]=e,et(f),s=f}e.stateNode=s}else cx(u,e.type,e.stateNode);else e.stateNode=ox(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?cx(u,e.type,e.stateNode):ox(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),s&512&&(dn||a===null||Di(a,a.return)),a!==null&&s&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),s&512&&(dn||a===null||Di(a,a.return)),e.flags&32){u=e.stateNode;try{Ri(u,"")}catch(Yt){Ie(e,e.return,Yt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),s&1024&&(vf=!0);break;case 6:if(Hn(n,e),Gn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Yt){Ie(e,e.return,Yt)}}break;case 3:if(tc=null,u=vi,vi=Jl(n.containerInfo),Hn(n,e),vi=u,Gn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{os(n.containerInfo)}catch(Yt){Ie(e,e.return,Yt)}vf&&(vf=!1,cm(e));break;case 4:s=vi,vi=Jl(e.stateNode.containerInfo),Hn(n,e),Gn(e),vi=s;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Bl(e,s)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Hl=E()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Bl(e,s)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=Zi,pt=dn;if(Zi=$||u,dn=pt||B,Hn(n,e),dn=pt,Zi=$,Gn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Zi||dn||xr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=B.stateNode;var _t=B.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(Yt){Ie(B,B.return,Yt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Yt){Ie(B,B.return,Yt)}}}else if(n.tag===18){if(a===null){B=n;try{var ct=B.stateNode;u?Jm(ct,!0):Jm(B.stateNode,!1)}catch(Yt){Ie(B,B.return,Yt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Bl(e,a))));break;case 19:Hn(n,e),Gn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Bl(e,s)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(tm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=gf(e);Fl(e,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Ri(_,""),a.flags&=-33);var T=gf(e);Fl(e,T,_);break;case 3:case 4:var B=a.stateNode.containerInfo,$=gf(e);_f(e,$,B);break;default:throw Error(r(161))}}catch(pt){Ie(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function cm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;cm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)im(e,n.alternate,n),n=n.sibling}function xr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),xr(n);break;case 1:Di(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&J0(n,n.return,a),xr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Di(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(u,f,a),po(4,f);break;case 1:if(Ji(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ie(s,s.return,$)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Hp(B[u],T)}catch($){Ie(s,s.return,$)}}a&&_&64&&Q0(f),mo(f,f.return);break;case 27:em(f);case 26:case 5:Ji(u,f,a),a&&s===null&&_&4&&$0(f),mo(f,f.return);break;case 12:Ji(u,f,a);break;case 31:Ji(u,f,a),a&&_&4&&sm(u,f);break;case 13:Ji(u,f,a),a&&_&4&&om(u,f);break;case 22:f.memoizedState===null&&Ji(u,f,a),mo(f,f.return);break;case 30:break;default:Ji(u,f,a)}n=n.sibling}}function Sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&to(a))}function yf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e))}function Si(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)um(e,n,a,s),n=n.sibling}function um(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Si(e,n,a,s),u&2048&&po(9,n);break;case 1:Si(e,n,a,s);break;case 3:Si(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e)));break;case 12:if(u&2048){Si(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,_=f.id,T=f.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Ie(n,n.return,B)}}else Si(e,n,a,s);break;case 31:Si(e,n,a,s);break;case 13:Si(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Si(e,n,a,s):xo(e,n):f._visibility&2?Si(e,n,a,s):(f._visibility|=2,Kr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Sf(_,n);break;case 24:Si(e,n,a,s),u&2048&&yf(n.alternate,n);break;default:Si(e,n,a,s)}}function Kr(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,_=n,T=a,B=s,$=_.flags;switch(_.tag){case 0:case 11:case 15:Kr(f,_,T,B,u),po(8,_);break;case 23:break;case 22:var pt=_.stateNode;_.memoizedState!==null?pt._visibility&2?Kr(f,_,T,B,u):xo(f,_):(pt._visibility|=2,Kr(f,_,T,B,u)),u&&$&2048&&Sf(_.alternate,_);break;case 24:Kr(f,_,T,B,u),u&&$&2048&&yf(_.alternate,_);break;default:Kr(f,_,T,B,u)}n=n.sibling}}function xo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:xo(a,s),u&2048&&Sf(s.alternate,s);break;case 24:xo(a,s),u&2048&&yf(s.alternate,s);break;default:xo(a,s)}n=n.sibling}}var go=8192;function Qr(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)fm(e,n,a),e=e.sibling}function fm(e,n,a){switch(e.tag){case 26:Qr(e,n,a),e.flags&go&&e.memoizedState!==null&&pS(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Qr(e,n,a);break;case 3:case 4:var s=vi;vi=Jl(e.stateNode.containerInfo),Qr(e,n,a),vi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=go,go=16777216,Qr(e,n,a),go=s):Qr(e,n,a));break;default:Qr(e,n,a)}}function dm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,pm(s,e)}dm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hm(e),e=e.sibling}function hm(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&La(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Il(e)):_o(e);break;default:_o(e)}}function Il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Mn=s,pm(s,e)}dm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),Il(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Il(n));break;default:Il(n)}e=e.sibling}}function pm(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:to(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Mn=s;else t:for(a=e;Mn!==null;){s=Mn;var u=s.sibling,f=s.return;if(am(s),s===a){Mn=null;break t}if(u!==null){u.return=f,Mn=u;break t}Mn=f}}}var wv={getCacheForType:function(e){var n=An(cn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(cn).controller.signal}},Dv=typeof WeakMap=="function"?WeakMap:Map,ze=0,Ye=null,_e=null,Se=0,Be=0,$n=null,Na=!1,Jr=!1,Mf=!1,$i=0,an=0,Oa=0,gr=0,bf=0,ti=0,$r=0,vo=null,Vn=null,Ef=!1,Hl=0,mm=0,Gl=1/0,Vl=null,za=null,xn=0,Pa=null,ts=null,ta=0,Tf=0,Af=null,xm=null,So=0,Rf=null;function ei(){return(ze&2)!==0&&Se!==0?Se&-Se:z.T!==null?Nf():Hs()}function gm(){if(ti===0)if((Se&536870912)===0||Te){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function Xn(e,n,a){(e===Ye&&(Be===2||Be===9)||e.cancelPendingCommit!==null)&&(es(e,0),Fa(e,Se,ti,!1)),Dn(e,a),((ze&2)===0||e!==Ye)&&(e===Ye&&((ze&2)===0&&(gr|=a),an===4&&Fa(e,Se,ti,!1)),Ui(e))}function _m(e,n,a){if((ze&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=s?Nv(e,n):wf(e,n,!0),f=s;do{if(u===0){Jr&&!s&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Uv(a)){u=wf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=e;u=vo;var B=T.current.memoizedState.isDehydrated;if(B&&(es(T,_).flags|=256),_=wf(T,_,!1),_!==2){if(Mf&&!B){T.errorRecoveryDisabledLanes|=f,gr|=f,u=4;break t}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){es(e,0),Fa(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(s,n,ti,!Na);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Hl+300-E(),10<u)){if(Fa(s,n,ti,!Na),mt(s,0,!0)!==0)break t;ta=n,s.timeoutHandle=Zm(vm.bind(null,s,a,Vn,Vl,Ef,n,ti,gr,$r,Na,f,"Throttled",-0,0),u);break t}vm(s,a,Vn,Vl,Ef,n,ti,gr,$r,Na,f,null,-0,0)}}break}while(!0);Ui(e)}function vm(e,n,a,s,u,f,_,T,B,$,pt,_t,at,ct){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},fm(n,f,_t);var Yt=(f&62914560)===f?Hl-E():(f&4194048)===f?mm-E():0;if(Yt=mS(_t,Yt),Yt!==null){ta=f,e.cancelPendingCommit=Yt(Rm.bind(null,e,n,f,a,s,u,_,T,B,pt,_t,null,at,ct)),Fa(e,f,_,!$);return}}Rm(e,n,f,a,s,u,_,T,B)}function Uv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,s){n&=~bf,n&=~gr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-zt(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&tl(e,a,n)}function Xl(){return(ze&6)===0?(yo(0),!1):!0}function Cf(){if(_e!==null){if(Be===0)var e=_e.return;else e=_e,Xi=lr=null,Xu(e),Wr=null,no=0,e=_e;for(;e!==null;)K0(e.alternate,e),e=e.return;_e=null}}function es(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Qv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Cf(),Ye=e,_e=a=Gi(e.current,null),Se=n,Be=0,$n=null,Na=!1,Jr=Gt(e,n),Mf=!1,$r=ti=bf=gr=Oa=an=0,Vn=vo=null,Ef=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-zt(s),f=1<<u;n|=e[u],s&=~f}return $i=n,ul(),a}function Sm(e,n){de=null,z.H=uo,n===kr||n===_l?(n=Pp(),Be=3):n===Uu?(n=Pp(),Be=4):Be=n===sf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,_e===null&&(an=1,Ll(e,si(n,e.current)))}function ym(){var e=Qn.current;return e===null?!0:(Se&4194048)===Se?ui===null:(Se&62914560)===Se||(Se&536870912)!==0?e===ui:!1}function Mm(){var e=z.H;return z.H=uo,e===null?uo:e}function bm(){var e=z.A;return z.A=wv,e}function kl(){an=4,Na||(Se&4194048)!==Se&&Qn.current!==null||(Jr=!0),(Oa&134217727)===0&&(gr&134217727)===0||Ye===null||Fa(Ye,Se,ti,!1)}function wf(e,n,a){var s=ze;ze|=2;var u=Mm(),f=bm();(Ye!==e||Se!==n)&&(Vl=null,es(e,n)),n=!1;var _=an;t:do try{if(Be!==0&&_e!==null){var T=_e,B=$n;switch(Be){case 8:Cf(),_=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var $=Be;if(Be=0,$n=null,ns(e,T,B,$),a&&Jr){_=0;break t}break;default:$=Be,Be=0,$n=null,ns(e,T,B,$)}}Lv(),_=an;break}catch(pt){Sm(e,pt)}while(!0);return n&&e.shellSuspendCounter++,Xi=lr=null,ze=s,z.H=u,z.A=f,_e===null&&(Ye=null,Se=0,ul()),_}function Lv(){for(;_e!==null;)Em(_e)}function Nv(e,n){var a=ze;ze|=2;var s=Mm(),u=bm();Ye!==e||Se!==n?(Vl=null,Gl=E()+500,es(e,n)):Jr=Gt(e,n);t:do try{if(Be!==0&&_e!==null){n=_e;var f=$n;e:switch(Be){case 1:Be=0,$n=null,ns(e,n,f,1);break;case 2:case 9:if(Op(f)){Be=0,$n=null,Tm(n);break}n=function(){Be!==2&&Be!==9||Ye!==e||(Be=7),Ui(e)},f.then(n,n);break t;case 3:Be=7;break t;case 4:Be=5;break t;case 7:Op(f)?(Be=0,$n=null,Tm(n)):(Be=0,$n=null,ns(e,n,f,7));break;case 5:var _=null;switch(_e.tag){case 26:_=_e.memoizedState;case 5:case 27:var T=_e;if(_?ux(_):T.stateNode.complete){Be=0,$n=null;var B=T.sibling;if(B!==null)_e=B;else{var $=T.return;$!==null?(_e=$,Wl($)):_e=null}break e}}Be=0,$n=null,ns(e,n,f,5);break;case 6:Be=0,$n=null,ns(e,n,f,6);break;case 8:Cf(),an=6;break t;default:throw Error(r(462))}}Ov();break}catch(pt){Sm(e,pt)}while(!0);return Xi=lr=null,z.H=s,z.A=u,ze=a,_e!==null?0:(Ye=null,Se=0,ul(),an)}function Ov(){for(;_e!==null&&!ae();)Em(_e)}function Em(e){var n=j0(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Wl(e):_e=n}function Tm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=V0(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=V0(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Xu(n);default:K0(a,n),n=_e=bp(n,$i),n=j0(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Wl(e):_e=n}function ns(e,n,a,s){Xi=lr=null,Xu(n),Wr=null,no=0;var u=n.return;try{if(Mv(e,u,n,a,Se)){an=1,Ll(e,si(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;an=1,Ll(e,si(a,e.current)),_e=null;return}n.flags&32768?(Te||s===1?e=!0:Jr||(Se&536870912)!==0?e=!1:(Na=e=!0,(s===2||s===9||s===3||s===6)&&(s=Qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Am(n,e)):Wl(n)}function Wl(e){var n=e;do{if((n.flags&32768)!==0){Am(n,Na);return}e=n.return;var a=Tv(n.alternate,n,$i);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);an===0&&(an=5)}function Am(e,n){do{var a=Av(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);an=6,_e=null}function Rm(e,n,a,s,u,f,_,T,B){e.cancelPendingCommit=null;do ql();while(xn!==0);if((ze&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=xu,Yn(e,a,f,_,T,B),e===Ye&&(_e=Ye=null,Se=0),ts=n,Pa=e,ta=a,Tf=f,Af=u,xm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Bv(ft,function(){return Lm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,u=Y.p,Y.p=2,_=ze,ze|=4;try{Rv(e,n,a)}finally{ze=_,Y.p=u,z.T=s}}xn=1,Cm(),wm(),Dm()}}function Cm(){if(xn===1){xn=0;var e=Pa,n=ts,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=Y.p;Y.p=2;var u=ze;ze|=4;try{lm(n,e);var f=Gf,_=pp(e.containerInfo),T=f.focusedElem,B=f.selectionRange;if(_!==T&&T&&T.ownerDocument&&hp(T.ownerDocument.documentElement,T)){if(B!==null&&fu(T)){var $=B.start,pt=B.end;if(pt===void 0&&(pt=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(pt,T.value.length);else{var _t=T.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var ct=at.getSelection(),Yt=T.textContent.length,ne=Math.min(B.start,Yt),ke=B.end===void 0?ne:Math.min(B.end,Yt);!ct.extend&&ne>ke&&(_=ke,ke=ne,ne=_);var q=dp(T,ne),X=dp(T,ke);if(q&&X&&(ct.rangeCount!==1||ct.anchorNode!==q.node||ct.anchorOffset!==q.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var J=_t.createRange();J.setStart(q.node,q.offset),ct.removeAllRanges(),ne>ke?(ct.addRange(J),ct.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),ct.addRange(J))}}}}for(_t=[],ct=T;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var xt=_t[T];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}ac=!!Hf,Gf=Hf=null}finally{ze=u,Y.p=s,z.T=a}}e.current=n,xn=2}}function wm(){if(xn===2){xn=0;var e=Pa,n=ts,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=Y.p;Y.p=2;var u=ze;ze|=4;try{im(e,n.alternate,n)}finally{ze=u,Y.p=s,z.T=a}}xn=3}}function Dm(){if(xn===4||xn===3){xn=0,L();var e=Pa,n=ts,a=ta,s=xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,ts=Pa=null,Um(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(za=null),tr(a),n=n.stateNode,ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(it,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,u=Y.p,Y.p=2,z.T=null;try{for(var f=e.onRecoverableError,_=0;_<s.length;_++){var T=s[_];f(T.value,{componentStack:T.stack})}}finally{z.T=n,Y.p=u}}(ta&3)!==0&&ql(),Ui(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Rf?So++:(So=0,Rf=e):So=0,yo(0)}}function Um(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,to(n)))}function ql(){return Cm(),wm(),Dm(),Lm()}function Lm(){if(xn!==5)return!1;var e=Pa,n=Tf;Tf=0;var a=tr(ta),s=z.T,u=Y.p;try{Y.p=32>a?32:a,z.T=null,a=Af,Af=null;var f=Pa,_=ta;if(xn=0,ts=Pa=null,ta=0,(ze&6)!==0)throw Error(r(331));var T=ze;if(ze|=4,hm(f.current),um(f,f.current,_,a),ze=T,yo(0,!1),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(it,f)}catch{}return!0}finally{Y.p=u,z.T=s,Um(e,n)}}function Nm(e,n,a){n=si(a,n),n=rf(e.stateNode,n,2),e=wa(e,n,2),e!==null&&(Dn(e,2),Ui(e))}function Ie(e,n,a){if(e.tag===3)Nm(e,e,a);else for(;n!==null;){if(n.tag===3){Nm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(za===null||!za.has(s))){e=si(a,e),a=O0(2),s=wa(n,a,2),s!==null&&(z0(a,s,n,e),Dn(s,2),Ui(s));break}}n=n.return}}function Df(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Dv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Mf=!0,u.add(a),e=zv.bind(null,e,n,a),n.then(e,e))}function zv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ye===e&&(Se&a)===a&&(an===4||an===3&&(Se&62914560)===Se&&300>E()-Hl?(ze&2)===0&&es(e,0):bf|=a,$r===Se&&($r=0)),Ui(e)}function Om(e,n){n===0&&(n=Ge()),e=rr(e,n),e!==null&&(Dn(e,n),Ui(e))}function Pv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Om(e,a)}function Fv(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Om(e,a)}function Bv(e,n){return Pe(e,n)}var Yl=null,is=null,Uf=!1,jl=!1,Lf=!1,Ba=0;function Ui(e){e!==is&&e.next===null&&(is===null?Yl=is=e:is=is.next=e),jl=!0,Uf||(Uf=!0,Hv())}function yo(e,n){if(!Lf&&jl){Lf=!0;do for(var a=!1,s=Yl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-zt(42|e)+1)-1,f&=u&~(_&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bm(s,f))}else f=Se,f=mt(s,s===Ye?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Gt(s,f)||(a=!0,Bm(s,f));s=s.next}while(a);Lf=!1}}function Iv(){zm()}function zm(){jl=Uf=!1;var e=0;Ba!==0&&Kv()&&(e=Ba);for(var n=E(),a=null,s=Yl;s!==null;){var u=s.next,f=Pm(s,n);f===0?(s.next=null,a===null?Yl=u:a.next=u,u===null&&(is=a)):(a=s,(e!==0||(f&3)!==0)&&(jl=!0)),s=u}xn!==0&&xn!==5||yo(e),Ba!==0&&(Ba=0)}function Pm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var _=31-zt(f),T=1<<_,B=u[_];B===-1?((T&a)===0||(T&s)!==0)&&(u[_]=re(T,n)):B<=n&&(e.expiredLanes|=T),f&=~T}if(n=Ye,a=Se,a=mt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Be===2||Be===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Zt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&Zt(s),tr(a)){case 2:case 8:a=Et;break;case 32:a=ft;break;case 268435456:a=vt;break;default:a=ft}return s=Fm.bind(null,e),a=Pe(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&Zt(s),e.callbackPriority=2,e.callbackNode=null,2}function Fm(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ql()&&e.callbackNode!==a)return null;var s=Se;return s=mt(e,e===Ye?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(_m(e,s,n),Pm(e,E()),e.callbackNode!=null&&e.callbackNode===a?Fm.bind(null,e):null)}function Bm(e,n){if(ql())return null;_m(e,n,!0)}function Hv(){Jv(function(){(ze&6)!==0?Pe(gt,Iv):zm()})}function Nf(){if(Ba===0){var e=Vr;e===0&&(e=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ba=e}return Ba}function Im(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:nl(""+e)}function Hm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Gv(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Im((u[pn]||null).action),_=s.submitter;_&&(n=(n=_[pn]||null)?Im(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var T=new sl("action","action",null,s,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ba!==0){var B=_?Hm(u,_):new FormData(u);Ju(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=_?Hm(u,_):new FormData(u),Ju(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Of=0;Of<mu.length;Of++){var zf=mu[Of],Vv=zf.toLowerCase(),Xv=zf[0].toUpperCase()+zf.slice(1);_i(Vv,"on"+Xv)}_i(gp,"onAnimationEnd"),_i(_p,"onAnimationIteration"),_i(vp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(rv,"onTransitionRun"),_i(sv,"onTransitionStart"),_i(ov,"onTransitionCancel"),_i(Sp,"onTransitionEnd"),Vt("onMouseEnter",["mouseout","mouseover"]),Vt("onMouseLeave",["mouseout","mouseover"]),Vt("onPointerEnter",["pointerout","pointerover"]),Vt("onPointerLeave",["pointerout","pointerover"]),Bt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Bt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Bt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Bt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Bt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mo));function Gm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var T=s[_],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(pt){cl(pt)}u.currentTarget=null,f=B}else for(_=0;_<s.length;_++){if(T=s[_],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(pt){cl(pt)}u.currentTarget=null,f=B}}}}function ve(e,n){var a=n[Dr];a===void 0&&(a=n[Dr]=new Set);var s=e+"__bubble";a.has(s)||(Vm(n,e,2,!1),a.add(s))}function Pf(e,n,a){var s=0;n&&(s|=4),Vm(a,e,s,n)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function Ff(e){if(!e[Zl]){e[Zl]=!0,j.forEach(function(a){a!=="selectionchange"&&(kv.has(a)||Pf(a,!1,e),Pf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zl]||(n[Zl]=!0,Pf("selectionchange",!1,n))}}function Vm(e,n,a,s){switch(gx(n)){case 2:var u=_S;break;case 8:u=vS;break;default:u=Jf}a=u.bind(null,n,a,e),u=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Bf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var T=s.stateNode.containerInfo;if(T===u)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;T!==null;){if(_=Sa(T),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=f=_;continue t}T=T.parentNode}}s=s.return}Yh(function(){var $=f,pt=tu(a),_t=[];t:{var at=yp.get(e);if(at!==void 0){var ct=sl,Yt=e;switch(e){case"keypress":if(al(a)===0)break t;case"keydown":case"keyup":ct=F_;break;case"focusin":Yt="focus",ct=su;break;case"focusout":Yt="blur",ct=su;break;case"beforeblur":case"afterblur":ct=su;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=T_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=H_;break;case gp:case _p:case vp:ct=C_;break;case Sp:ct=V_;break;case"scroll":case"scrollend":ct=b_;break;case"wheel":ct=k_;break;case"copy":case"cut":case"paste":ct=D_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Jh;break;case"toggle":case"beforetoggle":ct=q_}var ne=(n&4)!==0,ke=!ne&&(e==="scroll"||e==="scrollend"),q=ne?at!==null?at+"Capture":null:at;ne=[];for(var X=$,J;X!==null;){var xt=X;if(J=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||J===null||q===null||(xt=Xs(X,q),xt!=null&&ne.push(bo(X,xt,J))),ke)break;X=X.return}0<ne.length&&(at=new ct(at,Yt,null,a,pt),_t.push({event:at,listeners:ne}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&a!==$c&&(Yt=a.relatedTarget||a.fromElement)&&(Sa(Yt)||Yt[Pi]))break t;if((ct||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Yt=a.relatedTarget||a.toElement,ct=$,Yt=Yt?Sa(Yt):null,Yt!==null&&(ke=c(Yt),ne=Yt.tag,Yt!==ke||ne!==5&&ne!==27&&ne!==6)&&(Yt=null)):(ct=null,Yt=$),ct!==Yt)){if(ne=Kh,xt="onMouseLeave",q="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(ne=Jh,xt="onPointerLeave",q="onPointerEnter",X="pointer"),ke=ct==null?at:W(ct),J=Yt==null?at:W(Yt),at=new ne(xt,X+"leave",ct,a,pt),at.target=ke,at.relatedTarget=J,xt=null,Sa(pt)===$&&(ne=new ne(q,X+"enter",Yt,a,pt),ne.target=J,ne.relatedTarget=ke,xt=ne),ke=xt,ct&&Yt)e:{for(ne=Wv,q=ct,X=Yt,J=0,xt=q;xt;xt=ne(xt))J++;xt=0;for(var Jt=X;Jt;Jt=ne(Jt))xt++;for(;0<J-xt;)q=ne(q),J--;for(;0<xt-J;)X=ne(X),xt--;for(;J--;){if(q===X||X!==null&&q===X.alternate){ne=q;break e}q=ne(q),X=ne(X)}ne=null}else ne=null;ct!==null&&Xm(_t,at,ct,ne,!1),Yt!==null&&ke!==null&&Xm(_t,ke,Yt,ne,!0)}}t:{if(at=$?W($):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var Ue=sp;else if(ap(at))if(op)Ue=nv;else{Ue=tv;var jt=$_}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?$&&Jc($.elementType)&&(Ue=sp):Ue=ev;if(Ue&&(Ue=Ue(e,$))){rp(_t,Ue,a,pt);break t}jt&&jt(e,at,$),e==="focusout"&&$&&at.type==="number"&&$.memoizedProps.value!=null&&Sn(at,"number",at.value)}switch(jt=$?W($):window,e){case"focusin":(ap(jt)||jt.contentEditable==="true")&&(Or=jt,du=$,Qs=null);break;case"focusout":Qs=du=Or=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,mp(_t,a,pt);break;case"selectionchange":if(av)break;case"keydown":case"keyup":mp(_t,a,pt)}var pe;if(lu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Nr?np(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&($h&&a.locale!=="ko"&&(Nr||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Nr&&(pe=jh()):(Ma=pt,iu="value"in Ma?Ma.value:Ma.textContent,Nr=!0)),jt=Kl($,ye),0<jt.length&&(ye=new Qh(ye,e,null,a,pt),_t.push({event:ye,listeners:jt}),pe?ye.data=pe:(pe=ip(a),pe!==null&&(ye.data=pe)))),(pe=j_?Z_(e,a):K_(e,a))&&(ye=Kl($,"onBeforeInput"),0<ye.length&&(jt=new Qh("onBeforeInput","beforeinput",null,a,pt),_t.push({event:jt,listeners:ye}),jt.data=pe)),Gv(_t,e,$,a,pt)}Gm(_t,n)})}function bo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Kl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Xs(e,a),u!=null&&s.unshift(bo(e,u,f)),u=Xs(e,n),u!=null&&s.push(bo(e,u,f))),e.tag===3)return s;e=e.return}return[]}function Wv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xm(e,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||$===null||(B=$,u?($=Xs(a,f),$!=null&&_.unshift(bo(a,$,B))):u||($=Xs(a,f),$!=null&&_.push(bo(a,$,B)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var qv=/\r\n?/g,Yv=/\u0000|\uFFFD/g;function km(e){return(typeof e=="string"?e:""+e).replace(qv,`
`).replace(Yv,"")}function Wm(e,n){return n=km(n),km(e)===n}function Xe(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ri(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ri(e,""+s);break;case"className":Re(e,"class",s);break;case"tabIndex":Re(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Re(e,a,s);break;case"style":Wh(e,s,f);break;case"data":if(n!=="object"){Re(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=nl(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=nl(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ii);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=nl(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":ve("beforetoggle",e),ve("toggle",e),he(e,"popover",s);break;case"xlinkActuate":De(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":De(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":De(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":De(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":De(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":De(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":De(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":De(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":De(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":he(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=y_.get(a)||a,he(e,a,s))}}function If(e,n,a,s,u,f){switch(a){case"style":Wh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ri(e,s):(typeof s=="number"||typeof s=="bigint")&&Ri(e,""+s);break;case"onScroll":s!=null&&ve("scroll",e);break;case"onScrollEnd":s!=null&&ve("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ut.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):he(e,a,s)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(e,n,f,_,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),s&&Xe(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=f=_=u=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var pt=a[s];if(pt!=null)switch(s){case"name":u=pt;break;case"type":_=pt;break;case"checked":B=pt;break;case"defaultChecked":$=pt;break;case"value":f=pt;break;case"defaultValue":T=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Xe(e,n,s,pt,a,null)}}Ze(e,f,T,B,$,_,u,!1);return;case"select":ve("invalid",e),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":_=T;break;case"multiple":s=T;default:Xe(e,n,u,T,a,null)}n=f,a=_,e.multiple=!!s,n!=null?mn(e,!!s,n,!1):a!=null&&mn(e,!!s,a,!0);return;case"textarea":ve("invalid",e),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Xe(e,n,_,T,a,null)}En(e,s,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Xe(e,n,B,s,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(s=0;s<Mo.length;s++)ve(Mo[s],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xe(e,n,$,s,a,null)}return;default:if(Jc(n)){for(pt in a)a.hasOwnProperty(pt)&&(s=a[pt],s!==void 0&&If(e,n,pt,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Xe(e,n,T,s,a,null))}function jv(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,T=null,B=null,$=null,pt=null;for(ct in a){var _t=a[ct];if(a.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=_t;default:s.hasOwnProperty(ct)||Xe(e,n,ct,null,s,_t)}}for(var at in s){var ct=s[at];if(_t=a[at],s.hasOwnProperty(at)&&(ct!=null||_t!=null))switch(at){case"type":f=ct;break;case"name":u=ct;break;case"checked":$=ct;break;case"defaultChecked":pt=ct;break;case"value":_=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==_t&&Xe(e,n,at,ct,s,_t)}}Fi(e,_,T,B,$,pt,f,u);return;case"select":ct=_=T=at=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ct=B;default:s.hasOwnProperty(f)||Xe(e,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":at=f;break;case"defaultValue":T=f;break;case"multiple":_=f;default:f!==B&&Xe(e,n,u,f,s,B)}n=T,a=_,s=ct,at!=null?mn(e,!!a,at,!1):!!s!=!!a&&(n!=null?mn(e,!!a,n,!0):mn(e,!!a,a?[]:"",!1));return;case"textarea":ct=at=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(e,n,T,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":at=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xe(e,n,_,u,s,f)}yn(e,at,ct);return;case"option":for(var Yt in a)if(at=a[Yt],a.hasOwnProperty(Yt)&&at!=null&&!s.hasOwnProperty(Yt))switch(Yt){case"selected":e.selected=!1;break;default:Xe(e,n,Yt,null,s,at)}for(B in s)if(at=s[B],ct=a[B],s.hasOwnProperty(B)&&at!==ct&&(at!=null||ct!=null))switch(B){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Xe(e,n,B,at,s,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)at=a[ne],a.hasOwnProperty(ne)&&at!=null&&!s.hasOwnProperty(ne)&&Xe(e,n,ne,null,s,at);for($ in s)if(at=s[$],ct=a[$],s.hasOwnProperty($)&&at!==ct&&(at!=null||ct!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Xe(e,n,$,at,s,ct)}return;default:if(Jc(n)){for(var ke in a)at=a[ke],a.hasOwnProperty(ke)&&at!==void 0&&!s.hasOwnProperty(ke)&&If(e,n,ke,void 0,s,at);for(pt in s)at=s[pt],ct=a[pt],!s.hasOwnProperty(pt)||at===ct||at===void 0&&ct===void 0||If(e,n,pt,at,s,ct);return}}for(var q in a)at=a[q],a.hasOwnProperty(q)&&at!=null&&!s.hasOwnProperty(q)&&Xe(e,n,q,null,s,at);for(_t in s)at=s[_t],ct=a[_t],!s.hasOwnProperty(_t)||at===ct||at==null&&ct==null||Xe(e,n,_t,at,s,ct)}function qm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,T=u.duration;if(f&&T&&qm(_)){for(_=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],$=B.startTime;if($>T)break;var pt=B.transferSize,_t=B.initiatorType;pt&&qm(_t)&&(B=B.responseEnd,_+=pt*(B<T?1:(T-$)/(B-$)))}if(--s,n+=8*(f+_)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hf=null,Gf=null;function Ql(e){return e.nodeType===9?e:e.ownerDocument}function Ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function Kv(){var e=window.event;return e&&e.type==="popstate"?e===Xf?!1:(Xf=e,!0):(Xf=null,!1)}var Zm=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Km=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Km<"u"?function(e){return Km.resolve(null).then(e).catch($v)}:Zm;function $v(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function Qm(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),os(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Eo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Eo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,T=f.nodeName;f[er]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Eo(e.ownerDocument.body);a=u}while(a);os(n)}function Jm(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kf(a),Vs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function tS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[er])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function eS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function $m(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function Wf(e){return e.data==="$?"||e.data==="$~"}function qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function nS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Yf=null;function tx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function ex(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function nx(e,n,a){switch(n=Ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vs(e)}var di=new Map,ix=new Set;function Jl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=Y.d;Y.d={f:iS,r:aS,D:rS,C:sS,L:oS,m:lS,X:uS,S:cS,M:fS};function iS(){var e=ea.f(),n=Xl();return e||n}function aS(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?S0(n):ea.r(e)}var as=typeof document>"u"?null:document;function ax(e,n,a){var s=as;if(s&&typeof n=="string"&&n){var u=je(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ix.has(u)||(ix.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Cn(n,"link",e),et(n),s.head.appendChild(n)))}}function rS(e){ea.D(e),ax("dns-prefetch",e,null)}function sS(e,n){ea.C(e,n),ax("preconnect",e,n)}function oS(e,n,a){ea.L(e,n,a);var s=as;if(s&&e&&n){var u='link[rel="preload"][as="'+je(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+je(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+je(a.imageSizes)+'"]')):u+='[href="'+je(e)+'"]';var f=u;switch(n){case"style":f=rs(e);break;case"script":f=ss(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(To(f))||n==="script"&&s.querySelector(Ao(f))||(n=s.createElement("link"),Cn(n,"link",e),et(n),s.head.appendChild(n)))}}function lS(e,n){ea.m(e,n);var a=as;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+je(s)+'"][href="'+je(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ss(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}s=a.createElement("link"),Cn(s,"link",e),et(s),a.head.appendChild(s)}}}function cS(e,n,a){ea.S(e,n,a);var s=as;if(s&&e){var u=st(s).hoistableStyles,f=rs(e);n=n||"default";var _=u.get(f);if(!_){var T={loading:0,preload:null};if(_=s.querySelector(To(f)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&jf(e,a);var B=_=s.createElement("link");et(B),Cn(B,"link",e),B._p=new Promise(function($,pt){B.onload=$,B.onerror=pt}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,$l(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:T},u.set(f,_)}}}function uS(e,n){ea.X(e,n);var a=as;if(a&&e){var s=st(a).hoistableScripts,u=ss(e),f=s.get(u);f||(f=a.querySelector(Ao(u)),f||(e=g({src:e,async:!0},n),(n=di.get(u))&&Zf(e,n),f=a.createElement("script"),et(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function fS(e,n){ea.M(e,n);var a=as;if(a&&e){var s=st(a).hoistableScripts,u=ss(e),f=s.get(u);f||(f=a.querySelector(Ao(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(u))&&Zf(e,n),f=a.createElement("script"),et(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function rx(e,n,a,s){var u=(u=tt.current)?Jl(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rs(a.href),a=st(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rs(a.href);var f=st(u).hoistableStyles,_=f.get(e);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,_),(f=u.querySelector(To(e)))&&!f._p&&(_.instance=f,_.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||dS(u,e,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ss(a),a=st(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function rs(e){return'href="'+je(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function sx(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function dS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),et(n),e.head.appendChild(n))}function ss(e){return'[src="'+je(e)+'"]'}function Ao(e){return"script[async]"+e}function ox(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+je(a.href)+'"]');if(s)return n.instance=s,et(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),et(s),Cn(s,"style",u),$l(s,a.precedence,e),n.instance=s;case"stylesheet":u=rs(a.href);var f=e.querySelector(To(u));if(f)return n.state.loading|=4,n.instance=f,et(f),f;s=sx(a),(u=di.get(u))&&jf(s,u),f=(e.ownerDocument||e).createElement("link"),et(f);var _=f;return _._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),Cn(f,"link",s),n.state.loading|=4,$l(f,a.precedence,e),n.instance=f;case"script":return f=ss(a.src),(u=e.querySelector(Ao(f)))?(n.instance=u,et(u),u):(s=a,(u=di.get(f))&&(s=g({},a),Zf(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),et(u),Cn(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,$l(s,a.precedence,e));return n.instance}function $l(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var T=s[_];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function jf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var tc=null;function lx(e,n,a){if(tc===null){var s=new Map,u=tc=new Map;u.set(a,s)}else u=tc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[er]||f[ln]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=e+_;var T=s.get(_);T?T.push(f):s.set(_,[f])}}return s}function cx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function hS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ux(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function pS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=rs(s.href),f=n.querySelector(To(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ec.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,et(f);return}f=n.ownerDocument||n,s=sx(s),(u=di.get(u))&&jf(s,u),f=f.createElement("link"),et(f);var _=f;_._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),Cn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ec.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Kf=0;function mS(e,n){return e.stylesheets&&e.count===0&&ic(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Kf===0&&(Kf=62500*Zv());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ic(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ic(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nc=null;function ic(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nc=new Map,n.forEach(xS,e),nc=null,ec.call(e))}function xS(e,n){if(!(n.state.loading&4)){var a=nc.get(e);if(a)var s=a.get(null);else{a=new Map,nc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=ec.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:U,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function gS(e,n,a,s,u,f,_,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=we(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=we(0),this.hiddenUpdates=we(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function fx(e,n,a,s,u,f,_,T,B,$,pt,_t){return e=new gS(e,n,a,_,B,$,pt,_t,T),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Cu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Lu(f),e}function dx(e){return e?(e=Fr,e):Fr}function hx(e,n,a,s,u,f){u=dx(u),s.context===null?s.context=u:s.pendingContext=u,s=Ca(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=wa(e,s,n),a!==null&&(Xn(a,e,n),ao(a,e,n))}function px(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Qf(e,n){px(e,n),(e=e.alternate)&&px(e,n)}function mx(e){if(e.tag===13||e.tag===31){var n=rr(e,67108864);n!==null&&Xn(n,e,67108864),Qf(e,67108864)}}function xx(e){if(e.tag===13||e.tag===31){var n=ei();n=gi(n);var a=rr(e,n);a!==null&&Xn(a,e,n),Qf(e,n)}}var ac=!0;function _S(e,n,a,s){var u=z.T;z.T=null;var f=Y.p;try{Y.p=2,Jf(e,n,a,s)}finally{Y.p=f,z.T=u}}function vS(e,n,a,s){var u=z.T;z.T=null;var f=Y.p;try{Y.p=8,Jf(e,n,a,s)}finally{Y.p=f,z.T=u}}function Jf(e,n,a,s){if(ac){var u=$f(s);if(u===null)Bf(e,n,s,rc,a),_x(e,s);else if(yS(u,e,n,a,s))s.stopPropagation();else if(_x(e,s),n&4&&-1<SS.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Tt(f.pendingLanes);if(_!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var B=1<<31-zt(_);T.entanglements[1]|=B,_&=~B}Ui(f),(ze&6)===0&&(Gl=E()+500,yo(0))}}break;case 31:case 13:T=rr(f,2),T!==null&&Xn(T,f,2),Xl(),Qf(f,2)}if(f=$f(s),f===null&&Bf(e,n,s,rc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Bf(e,n,s,null,a)}}function $f(e){return e=tu(e),td(e)}var rc=null;function td(e){if(rc=null,e=Sa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return rc=e,null}function gx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case gt:return 2;case Et:return 8;case ft:case Mt:return 32;case vt:return 268435456;default:return 32}default:return 32}}var ed=!1,Ha=null,Ga=null,Va=null,Co=new Map,wo=new Map,Xa=[],SS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _x(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&mx(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function yS(e,n,a,s,u){switch(n){case"focusin":return Ha=Do(Ha,e,n,a,s,u),!0;case"dragenter":return Ga=Do(Ga,e,n,a,s,u),!0;case"mouseover":return Va=Do(Va,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,wo.set(f,Do(wo.get(f)||null,e,n,a,s,u)),!0}return!1}function vx(e){var n=Sa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){xx(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Gs(e.priority,function(){xx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=$f(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);$c=s,a.target.dispatchEvent(s),$c=null}else return n=R(a),n!==null&&mx(n),e.blockedOn=a,!1;n.shift()}return!0}function Sx(e,n,a){sc(e)&&a.delete(n)}function MS(){ed=!1,Ha!==null&&sc(Ha)&&(Ha=null),Ga!==null&&sc(Ga)&&(Ga=null),Va!==null&&sc(Va)&&(Va=null),Co.forEach(Sx),wo.forEach(Sx)}function oc(e,n){e.blockedOn===n&&(e.blockedOn=null,ed||(ed=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,MS)))}var lc=null;function yx(e){lc!==e&&(lc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){lc===e&&(lc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(td(s||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,Ju(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function os(e){function n(B){return oc(B,e)}Ha!==null&&oc(Ha,e),Ga!==null&&oc(Ga,e),Va!==null&&oc(Va,e),Co.forEach(n),wo.forEach(n);for(var a=0;a<Xa.length;a++){var s=Xa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)vx(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[pn]||null;if(typeof f=="function")_||yx(a);else if(_){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[pn]||null)T=_.formAction;else if(td(u)!==null)continue}else T=_.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),yx(a)}}}function Mx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function nd(e){this._internalRoot=e}cc.prototype.render=nd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ei();hx(a,s,e,n,null,null)},cc.prototype.unmount=nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;hx(e.current,2,null,e,null,null),Xl(),n[Pi]=null}};function cc(e){this._internalRoot=e}cc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&vx(e)}};var bx=t.version;if(bx!=="19.2.0")throw Error(r(527,bx,"19.2.0"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var bS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uc.isDisabled&&uc.supportsFiber)try{it=uc.inject(bS),ht=uc}catch{}}return Lo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=D0,f=U0,_=L0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=fx(e,1,!1,null,null,a,s,null,u,f,_,Mx),e[Pi]=n.current,Ff(e),new nd(n)},Lo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=D0,_=U0,T=L0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=fx(e,1,!0,n,a??null,s,u,B,f,_,T,Mx),n.context=dx(null),a=n.current,s=ei(),s=gi(s),u=Ca(s),u.callback=null,wa(a,u,s),a=s,n.current.lanes=a,Dn(n,a),Ui(n),e[Pi]=n.current,Ff(e),new cc(n)},Lo.version="19.2.0",Lo}var Nx;function OS(){if(Nx)return rd.exports;Nx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),rd.exports=NS(),rd.exports}var zS=OS();const PS=Pg(zS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="181",FS=0,Ox=1,BS=2,Fg=1,IS=2,ca=3,$a=0,Wn=1,ua=2,ha=0,As=1,Id=2,zx=3,Px=4,HS=5,Tr=100,GS=101,VS=102,XS=103,kS=104,WS=200,qS=201,YS=202,jS=203,Hd=204,Gd=205,ZS=206,KS=207,QS=208,JS=209,$S=210,ty=211,ey=212,ny=213,iy=214,Vd=0,Xd=1,kd=2,Cs=3,Wd=4,qd=5,Yd=6,jd=7,Bg=0,ay=1,ry=2,pa=0,sy=1,oy=2,ly=3,cy=4,uy=5,fy=6,dy=7,Ig=300,ws=301,Ds=302,Zd=303,Kd=304,Wc=306,Qd=1e3,fa=1001,Jd=1002,ai=1003,hy=1004,fc=1005,xi=1006,cd=1007,Rr=1008,Oi=1009,Hg=1010,Gg=1011,Wo=1012,Lh=1013,Cr=1014,da=1015,Ns=1016,Nh=1017,Oh=1018,qo=1020,Vg=35902,Xg=35899,kg=1021,Wg=1022,Ti=1023,Yo=1026,jo=1027,qg=1028,zh=1029,Ph=1030,Fh=1031,Bh=1033,zc=33776,Pc=33777,Fc=33778,Bc=33779,$d=35840,th=35841,eh=35842,nh=35843,ih=36196,ah=37492,rh=37496,sh=37808,oh=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,hh=37815,ph=37816,mh=37817,xh=37818,gh=37819,_h=37820,vh=37821,Sh=36492,yh=36494,Mh=36495,bh=36283,Eh=36284,Th=36285,Ah=36286,py=3200,my=3201,Yg=0,xy=1,Qa="",kn="srgb",Us="srgb-linear",Hc="linear",We="srgb",ls=7680,Fx=519,gy=512,_y=513,vy=514,jg=515,Sy=516,yy=517,My=518,by=519,Rh=35044,Bx="300 es",Ni=2e3,Gc=2001;function Zg(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Vc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ey(){const o=Vc("canvas");return o.style.display="block",o}const Ix={};function Xc(...o){const t="THREE."+o.shift();console.log(t,...o)}function oe(...o){const t="THREE."+o.shift();console.warn(t,...o)}function tn(...o){const t="THREE."+o.shift();console.error(t,...o)}function Zo(...o){const t=o.join(" ");t in Ix||(Ix[t]=!0,oe(...o))}function Ty(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Os{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hx=1234567;const Xo=Math.PI/180,Ko=180/Math.PI;function ma(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Me(o,t,i){return Math.max(t,Math.min(i,o))}function Ih(o,t){return(o%t+t)%t}function Ay(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function Ry(o,t,i){return o!==t?(i-o)/(t-o):0}function ko(o,t,i){return(1-i)*o+i*t}function Cy(o,t,i,r){return ko(o,t,1-Math.exp(-i*r))}function wy(o,t=1){return t-Math.abs(Ih(o,t*2)-t)}function Dy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function Uy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function Ly(o,t){return o+Math.floor(Math.random()*(t-o+1))}function Ny(o,t){return o+Math.random()*(t-o)}function Oy(o){return o*(.5-Math.random())}function zy(o){o!==void 0&&(Hx=o);let t=Hx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Py(o){return o*Xo}function Fy(o){return o*Ko}function By(o){return(o&o-1)===0&&o!==0}function Iy(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Hy(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Gy(o,t,i,r,l){const c=Math.cos,d=Math.sin,p=c(i/2),m=d(i/2),h=c((t+r)/2),x=d((t+r)/2),g=c((t-r)/2),v=d((t-r)/2),M=c((r-t)/2),b=d((r-t)/2);switch(l){case"XYX":o.set(p*x,m*g,m*v,p*h);break;case"YZY":o.set(m*v,p*x,m*g,p*h);break;case"ZXZ":o.set(m*g,m*v,p*x,p*h);break;case"XZX":o.set(p*x,m*b,m*M,p*h);break;case"YXY":o.set(m*M,p*x,m*b,p*h);break;case"ZYZ":o.set(m*b,m*M,p*x,p*h);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ei(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function He(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const No={DEG2RAD:Xo,RAD2DEG:Ko,generateUUID:ma,clamp:Me,euclideanModulo:Ih,mapLinear:Ay,inverseLerp:Ry,lerp:ko,damp:Cy,pingpong:wy,smoothstep:Dy,smootherstep:Uy,randInt:Ly,randFloat:Ny,randFloatSpread:Oy,seededRandom:zy,degToRad:Py,radToDeg:Fy,isPowerOfTwo:By,ceilPowerOfTwo:Iy,floorPowerOfTwo:Hy,setQuaternionFromProperEuler:Gy,normalize:He,denormalize:Ei};class ge{constructor(t=0,i=0){ge.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,p){let m=r[l+0],h=r[l+1],x=r[l+2],g=r[l+3],v=c[d+0],M=c[d+1],b=c[d+2],A=c[d+3];if(p<=0){t[i+0]=m,t[i+1]=h,t[i+2]=x,t[i+3]=g;return}if(p>=1){t[i+0]=v,t[i+1]=M,t[i+2]=b,t[i+3]=A;return}if(g!==A||m!==v||h!==M||x!==b){let y=m*v+h*M+x*b+g*A;y<0&&(v=-v,M=-M,b=-b,A=-A,y=-y);let S=1-p;if(y<.9995){const P=Math.acos(y),U=Math.sin(P);S=Math.sin(S*P)/U,p=Math.sin(p*P)/U,m=m*S+v*p,h=h*S+M*p,x=x*S+b*p,g=g*S+A*p}else{m=m*S+v*p,h=h*S+M*p,x=x*S+b*p,g=g*S+A*p;const P=1/Math.sqrt(m*m+h*h+x*x+g*g);m*=P,h*=P,x*=P,g*=P}}t[i]=m,t[i+1]=h,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,d){const p=r[l],m=r[l+1],h=r[l+2],x=r[l+3],g=c[d],v=c[d+1],M=c[d+2],b=c[d+3];return t[i]=p*b+x*g+m*M-h*v,t[i+1]=m*b+x*v+h*g-p*M,t[i+2]=h*b+x*M+p*v-m*g,t[i+3]=x*b-p*g-m*v-h*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,p=Math.cos,m=Math.sin,h=p(r/2),x=p(l/2),g=p(c/2),v=m(r/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=v*x*g+h*M*b,this._y=h*M*g-v*x*b,this._z=h*x*b+v*M*g,this._w=h*x*g-v*M*b;break;case"YXZ":this._x=v*x*g+h*M*b,this._y=h*M*g-v*x*b,this._z=h*x*b-v*M*g,this._w=h*x*g+v*M*b;break;case"ZXY":this._x=v*x*g-h*M*b,this._y=h*M*g+v*x*b,this._z=h*x*b+v*M*g,this._w=h*x*g-v*M*b;break;case"ZYX":this._x=v*x*g-h*M*b,this._y=h*M*g+v*x*b,this._z=h*x*b-v*M*g,this._w=h*x*g+v*M*b;break;case"YZX":this._x=v*x*g+h*M*b,this._y=h*M*g+v*x*b,this._z=h*x*b-v*M*g,this._w=h*x*g-v*M*b;break;case"XZY":this._x=v*x*g-h*M*b,this._y=h*M*g-v*x*b,this._z=h*x*b+v*M*g,this._w=h*x*g+v*M*b;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],g=i[10],v=r+p+g;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(r>p&&r>g){const M=2*Math.sqrt(1+r-p-g);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>g){const M=2*Math.sqrt(1+p-r-g);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+g-r-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=r*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-r*h,this._z=c*x+d*h+r*m-l*p,this._w=d*x-r*p-l*m-c*h,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,d=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Gx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Gx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,p=t.z,m=t.w,h=2*(d*l-p*r),x=2*(p*i-c*l),g=2*(c*r-d*i);return this.x=i+m*h+d*g-p*x,this.y=r+m*x+p*h-c*g,this.z=l+m*g+c*x-d*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-r*m,this.z=r*p-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ud.copy(this).projectOnVector(t),this.sub(ud)}reflect(t){return this.sub(ud.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Me(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new rt,Gx=new Qo;class me{constructor(t,i,r,l,c,d,p,m,h){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h)}set(t,i,r,l,c,d,p,m,h){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[3],m=r[6],h=r[1],x=r[4],g=r[7],v=r[2],M=r[5],b=r[8],A=l[0],y=l[3],S=l[6],P=l[1],U=l[4],F=l[7],V=l[2],D=l[5],O=l[8];return c[0]=d*A+p*P+m*V,c[3]=d*y+p*U+m*D,c[6]=d*S+p*F+m*O,c[1]=h*A+x*P+g*V,c[4]=h*y+x*U+g*D,c[7]=h*S+x*F+g*O,c[2]=v*A+M*P+b*V,c[5]=v*y+M*U+b*D,c[8]=v*S+M*F+b*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8];return i*d*x-i*p*h-r*c*x+r*p*m+l*c*h-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],g=x*d-p*h,v=p*m-x*c,M=h*c-d*m,b=i*g+r*v+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=g*A,t[1]=(l*h-x*r)*A,t[2]=(p*r-l*d)*A,t[3]=v*A,t[4]=(x*i-l*m)*A,t[5]=(l*c-p*i)*A,t[6]=M*A,t[7]=(r*m-h*i)*A,t[8]=(d*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(r*m,r*h,-r*(m*d+h*p)+d+t,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(fd.makeScale(t,i)),this}rotate(t){return this.premultiply(fd.makeRotation(-t)),this}translate(t,i){return this.premultiply(fd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new me,Vx=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xx=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vy(){const o={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===We&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===We&&(l.r=Rs(l.r),l.g=Rs(l.g),l.b=Rs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?Hc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Zo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Zo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Us]:{primaries:t,whitePoint:r,transfer:Hc,toXYZ:Vx,fromXYZ:Xx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:r,transfer:We,toXYZ:Vx,fromXYZ:Xx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),o}const Ne=Vy();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Rs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cs;class Xy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{cs===void 0&&(cs=Vc("canvas")),cs.width=t.width,cs.height=t.height;const l=cs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=cs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Vc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ky=0;class Hh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=ma(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(dd(l[d].image)):c.push(dd(l[d]))}else c=dd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function dd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Xy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let Wy=0;const hd=new rt;class On extends Os{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=fa,l=fa,c=xi,d=Rr,p=Ti,m=Oi,h=On.DEFAULT_ANISOTROPY,x=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=ma(),this.name="",this.source=new Hh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ig)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qd:t.x=t.x-Math.floor(t.x);break;case fa:t.x=t.x<0?0:1;break;case Jd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qd:t.y=t.y-Math.floor(t.y);break;case fa:t.y=t.y<0?0:1;break;case Jd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Ig;On.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,h=m[0],x=m[4],g=m[8],v=m[1],M=m[5],b=m[9],A=m[2],y=m[6],S=m[10];if(Math.abs(x-v)<.01&&Math.abs(g-A)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(g+A)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(h+1)/2,F=(M+1)/2,V=(S+1)/2,D=(x+v)/4,O=(g+A)/4,Z=(b+y)/4;return U>F&&U>V?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=D/r,c=O/r):F>V?F<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(F),r=D/l,c=Z/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=O/c,l=Z/c),this.set(r,l,c,i),this}let P=Math.sqrt((y-b)*(y-b)+(g-A)*(g-A)+(v-x)*(v-x));return Math.abs(P)<.001&&(P=1),this.x=(y-b)/P,this.y=(g-A)/P,this.z=(v-x)/P,this.w=Math.acos((h+M+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qy extends Os{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new On(l);this.textures=[];const d=r.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:xi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Hh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends qy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Kg extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yy extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jo{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)t.isMesh===!0?t.getVertexPosition(d,yi):yi.fromBufferAttribute(c,d),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dc.copy(r.boundingBox)),dc.applyMatrix4(t.matrixWorld),this.union(dc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oo),hc.subVectors(this.max,Oo),us.subVectors(t.a,Oo),fs.subVectors(t.b,Oo),ds.subVectors(t.c,Oo),Wa.subVectors(fs,us),qa.subVectors(ds,fs),_r.subVectors(us,ds);let i=[0,-Wa.z,Wa.y,0,-qa.z,qa.y,0,-_r.z,_r.y,Wa.z,0,-Wa.x,qa.z,0,-qa.x,_r.z,0,-_r.x,-Wa.y,Wa.x,0,-qa.y,qa.x,0,-_r.y,_r.x,0];return!pd(i,us,fs,ds,hc)||(i=[1,0,0,0,1,0,0,0,1],!pd(i,us,fs,ds,hc))?!1:(pc.crossVectors(Wa,qa),i=[pc.x,pc.y,pc.z],pd(i,us,fs,ds,hc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const na=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],yi=new rt,dc=new Jo,us=new rt,fs=new rt,ds=new rt,Wa=new rt,qa=new rt,_r=new rt,Oo=new rt,hc=new rt,pc=new rt,vr=new rt;function pd(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){vr.fromArray(o,c);const p=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),m=t.dot(vr),h=i.dot(vr),x=r.dot(vr);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const jy=new Jo,zo=new rt,md=new rt;class qc{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):jy.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(zo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(md.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(md)),this.expandByPoint(zo.copy(t.center).sub(md))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ia=new rt,xd=new rt,mc=new rt,Ya=new rt,gd=new rt,xc=new rt,_d=new rt;class Qg{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){xd.copy(t).add(i).multiplyScalar(.5),mc.copy(i).sub(t).normalize(),Ya.copy(this.origin).sub(xd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(mc),p=Ya.dot(this.direction),m=-Ya.dot(mc),h=Ya.lengthSq(),x=Math.abs(1-d*d);let g,v,M,b;if(x>0)if(g=d*m-p,v=d*p-m,b=c*x,g>=0)if(v>=-b)if(v<=b){const A=1/x;g*=A,v*=A,M=g*(g+d*v+2*p)+v*(d*g+v+2*m)+h}else v=c,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*m)+h;else v=-c,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*m)+h;else v<=-b?(g=Math.max(0,-(-d*c+p)),v=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+v*(v+2*m)+h):v<=b?(g=0,v=Math.min(Math.max(-c,-m),c),M=v*(v+2*m)+h):(g=Math.max(0,-(d*c+p)),v=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+v*(v+2*m)+h);else v=d>0?-c:c,g=Math.max(0,-(d*v+p)),M=-g*g+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(xd).addScaledVector(mc,v),M}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=r-d,m=r+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,v=this.origin;return h>=0?(r=(t.min.x-v.x)*h,l=(t.max.x-v.x)*h):(r=(t.max.x-v.x)*h,l=(t.min.x-v.x)*h),x>=0?(c=(t.min.y-v.y)*x,d=(t.max.y-v.y)*x):(c=(t.max.y-v.y)*x,d=(t.min.y-v.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(p=(t.min.z-v.z)*g,m=(t.max.z-v.z)*g):(p=(t.max.z-v.z)*g,m=(t.min.z-v.z)*g),r>m||p>l)||((p>r||r!==r)&&(r=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,r,l,c){gd.subVectors(i,t),xc.subVectors(r,t),_d.crossVectors(gd,xc);let d=this.direction.dot(_d),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;Ya.subVectors(this.origin,t);const m=p*this.direction.dot(xc.crossVectors(Ya,xc));if(m<0)return null;const h=p*this.direction.dot(gd.cross(Ya));if(h<0||m+h>d)return null;const x=-p*Ya.dot(_d);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(t,i,r,l,c,d,p,m,h,x,g,v,M,b,A,y){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,p,m,h,x,g,v,M,b,A,y)}set(t,i,r,l,c,d,p,m,h,x,g,v,M,b,A,y){const S=this.elements;return S[0]=t,S[4]=i,S[8]=r,S[12]=l,S[1]=c,S[5]=d,S[9]=p,S[13]=m,S[2]=h,S[6]=x,S[10]=g,S[14]=v,S[3]=M,S[7]=b,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/hs.setFromMatrixColumn(t,0).length(),c=1/hs.setFromMatrixColumn(t,1).length(),d=1/hs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),p=Math.sin(r),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const v=d*x,M=d*g,b=p*x,A=p*g;i[0]=m*x,i[4]=-m*g,i[8]=h,i[1]=M+b*h,i[5]=v-A*h,i[9]=-p*m,i[2]=A-v*h,i[6]=b+M*h,i[10]=d*m}else if(t.order==="YXZ"){const v=m*x,M=m*g,b=h*x,A=h*g;i[0]=v+A*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*g,i[5]=d*x,i[9]=-p,i[2]=M*p-b,i[6]=A+v*p,i[10]=d*m}else if(t.order==="ZXY"){const v=m*x,M=m*g,b=h*x,A=h*g;i[0]=v-A*p,i[4]=-d*g,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*x,i[9]=A-v*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(t.order==="ZYX"){const v=d*x,M=d*g,b=p*x,A=p*g;i[0]=m*x,i[4]=b*h-M,i[8]=v*h+A,i[1]=m*g,i[5]=A*h+v,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(t.order==="YZX"){const v=d*m,M=d*h,b=p*m,A=p*h;i[0]=m*x,i[4]=A-v*g,i[8]=b*g+M,i[1]=g,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=M*g+b,i[10]=v-A*g}else if(t.order==="XZY"){const v=d*m,M=d*h,b=p*m,A=p*h;i[0]=m*x,i[4]=-g,i[8]=h*x,i[1]=v*g+A,i[5]=d*x,i[9]=M*g-b,i[2]=b*g-M,i[6]=p*x,i[10]=A*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zy,t,Ky)}lookAt(t,i,r){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),ja.crossVectors(r,ni),ja.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),ja.crossVectors(r,ni)),ja.normalize(),gc.crossVectors(ni,ja),l[0]=ja.x,l[4]=gc.x,l[8]=ni.x,l[1]=ja.y,l[5]=gc.y,l[9]=ni.y,l[2]=ja.z,l[6]=gc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],p=r[4],m=r[8],h=r[12],x=r[1],g=r[5],v=r[9],M=r[13],b=r[2],A=r[6],y=r[10],S=r[14],P=r[3],U=r[7],F=r[11],V=r[15],D=l[0],O=l[4],Z=l[8],w=l[12],C=l[1],H=l[5],K=l[9],ot=l[13],dt=l[2],ut=l[6],z=l[10],Y=l[14],k=l[3],St=l[7],bt=l[11],N=l[15];return c[0]=d*D+p*C+m*dt+h*k,c[4]=d*O+p*H+m*ut+h*St,c[8]=d*Z+p*K+m*z+h*bt,c[12]=d*w+p*ot+m*Y+h*N,c[1]=x*D+g*C+v*dt+M*k,c[5]=x*O+g*H+v*ut+M*St,c[9]=x*Z+g*K+v*z+M*bt,c[13]=x*w+g*ot+v*Y+M*N,c[2]=b*D+A*C+y*dt+S*k,c[6]=b*O+A*H+y*ut+S*St,c[10]=b*Z+A*K+y*z+S*bt,c[14]=b*w+A*ot+y*Y+S*N,c[3]=P*D+U*C+F*dt+V*k,c[7]=P*O+U*H+F*ut+V*St,c[11]=P*Z+U*K+F*z+V*bt,c[15]=P*w+U*ot+F*Y+V*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],p=t[5],m=t[9],h=t[13],x=t[2],g=t[6],v=t[10],M=t[14],b=t[3],A=t[7],y=t[11],S=t[15];return b*(+c*m*g-l*h*g-c*p*v+r*h*v+l*p*M-r*m*M)+A*(+i*m*M-i*h*v+c*d*v-l*d*M+l*h*x-c*m*x)+y*(+i*h*g-i*p*M-c*d*g+r*d*M+c*p*x-r*h*x)+S*(-l*p*x-i*m*g+i*p*v+l*d*g-r*d*v+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],p=t[5],m=t[6],h=t[7],x=t[8],g=t[9],v=t[10],M=t[11],b=t[12],A=t[13],y=t[14],S=t[15],P=g*y*h-A*v*h+A*m*M-p*y*M-g*m*S+p*v*S,U=b*v*h-x*y*h-b*m*M+d*y*M+x*m*S-d*v*S,F=x*A*h-b*g*h+b*p*M-d*A*M-x*p*S+d*g*S,V=b*g*m-x*A*m-b*p*v+d*A*v+x*p*y-d*g*y,D=i*P+r*U+l*F+c*V;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return t[0]=P*O,t[1]=(A*v*c-g*y*c-A*l*M+r*y*M+g*l*S-r*v*S)*O,t[2]=(p*y*c-A*m*c+A*l*h-r*y*h-p*l*S+r*m*S)*O,t[3]=(g*m*c-p*v*c-g*l*h+r*v*h+p*l*M-r*m*M)*O,t[4]=U*O,t[5]=(x*y*c-b*v*c+b*l*M-i*y*M-x*l*S+i*v*S)*O,t[6]=(b*m*c-d*y*c-b*l*h+i*y*h+d*l*S-i*m*S)*O,t[7]=(d*v*c-x*m*c+x*l*h-i*v*h-d*l*M+i*m*M)*O,t[8]=F*O,t[9]=(b*g*c-x*A*c-b*r*M+i*A*M+x*r*S-i*g*S)*O,t[10]=(d*A*c-b*p*c+b*r*h-i*A*h-d*r*S+i*p*S)*O,t[11]=(x*p*c-d*g*c-x*r*h+i*g*h+d*r*M-i*p*M)*O,t[12]=V*O,t[13]=(x*A*l-b*g*l+b*r*v-i*A*v-x*r*y+i*g*y)*O,t[14]=(b*p*l-d*A*l-b*r*m+i*A*m+d*r*y-i*p*y)*O,t[15]=(d*g*l-x*p*l+x*r*m-i*g*m-d*r*v+i*p*v)*O,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,p=t.y,m=t.z,h=c*d,x=c*p;return this.set(h*d+r,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+r,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,g=p+p,v=c*h,M=c*x,b=c*g,A=d*x,y=d*g,S=p*g,P=m*h,U=m*x,F=m*g,V=r.x,D=r.y,O=r.z;return l[0]=(1-(A+S))*V,l[1]=(M+F)*V,l[2]=(b-U)*V,l[3]=0,l[4]=(M-F)*D,l[5]=(1-(v+S))*D,l[6]=(y+P)*D,l[7]=0,l[8]=(b+U)*O,l[9]=(y-P)*O,l[10]=(1-(v+A))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=hs.set(l[0],l[1],l[2]).length();const d=hs.set(l[4],l[5],l[6]).length(),p=hs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Mi.copy(this);const h=1/c,x=1/d,g=1/p;return Mi.elements[0]*=h,Mi.elements[1]*=h,Mi.elements[2]*=h,Mi.elements[4]*=x,Mi.elements[5]*=x,Mi.elements[6]*=x,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,i.setFromRotationMatrix(Mi),r.x=c,r.y=d,r.z=p,this}makePerspective(t,i,r,l,c,d,p=Ni,m=!1){const h=this.elements,x=2*c/(i-t),g=2*c/(r-l),v=(i+t)/(i-t),M=(r+l)/(r-l);let b,A;if(m)b=c/(d-c),A=d*c/(d-c);else if(p===Ni)b=-(d+c)/(d-c),A=-2*d*c/(d-c);else if(p===Gc)b=-d/(d-c),A=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,i,r,l,c,d,p=Ni,m=!1){const h=this.elements,x=2/(i-t),g=2/(r-l),v=-(i+t)/(i-t),M=-(r+l)/(r-l);let b,A;if(m)b=1/(d-c),A=d/(d-c);else if(p===Ni)b=-2/(d-c),A=-(d+c)/(d-c);else if(p===Gc)b=-1/(d-c),A=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=g,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const hs=new rt,Mi=new en,Zy=new rt(0,0,0),Ky=new rt(1,1,1),ja=new rt,gc=new rt,ni=new rt,kx=new en,Wx=new Qo;class zi{constructor(t=0,i=0,r=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],g=l[2],v=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return kx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Wx.setFromEuler(this),this.setFromQuaternion(Wx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Gh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qy=0;const qx=new rt,ps=new Qo,aa=new en,_c=new rt,Po=new rt,Jy=new rt,$y=new Qo,Yx=new rt(1,0,0),jx=new rt(0,1,0),Zx=new rt(0,0,1),Kx={type:"added"},tM={type:"removed"},ms={type:"childadded",child:null},vd={type:"childremoved",child:null};class wn extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const t=new rt,i=new zi,r=new Qo,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new me}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,i){return ps.setFromAxisAngle(t,i),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(Yx,t)}rotateY(t){return this.rotateOnAxis(jx,t)}rotateZ(t){return this.rotateOnAxis(Zx,t)}translateOnAxis(t,i){return qx.copy(t).applyQuaternion(this.quaternion),this.position.add(qx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Yx,t)}translateY(t){return this.translateOnAxis(jx,t)}translateZ(t){return this.translateOnAxis(Zx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?_c.copy(t):_c.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Po,_c,this.up):aa.lookAt(_c,Po,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),ps.setFromRotationMatrix(aa),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(tn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kx),ms.child=t,this.dispatchEvent(ms),ms.child=null):tn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(tM),vd.child=t,this.dispatchEvent(vd),vd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kx),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,Jy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,$y,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const g=m[h];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=d(t.geometries),m=d(t.materials),h=d(t.textures),x=d(t.images),g=d(t.shapes),v=d(t.skeletons),M=d(t.animations),b=d(t.nodes);p.length>0&&(r.geometries=p),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),v.length>0&&(r.skeletons=v),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}wn.DEFAULT_UP=new rt(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new rt,ra=new rt,Sd=new rt,sa=new rt,xs=new rt,gs=new rt,Qx=new rt,yd=new rt,Md=new rt,bd=new rt,Ed=new rn,Td=new rn,Ad=new rn;class mi{constructor(t=new rt,i=new rt,r=new rt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),bi.subVectors(t,i),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){bi.subVectors(l,i),ra.subVectors(r,i),Sd.subVectors(t,i);const d=bi.dot(bi),p=bi.dot(ra),m=bi.dot(Sd),h=ra.dot(ra),x=ra.dot(Sd),g=d*h-p*p;if(g===0)return c.set(0,0,0),null;const v=1/g,M=(h*m-p*x)*v,b=(d*x-p*m)*v;return c.set(1-M-b,b,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,r,l,c,d,p,m){return this.getBarycoord(t,i,r,l,sa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,sa.x),m.addScaledVector(d,sa.y),m.addScaledVector(p,sa.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Ed.setScalar(0),Td.setScalar(0),Ad.setScalar(0),Ed.fromBufferAttribute(t,i),Td.fromBufferAttribute(t,r),Ad.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ed,c.x),d.addScaledVector(Td,c.y),d.addScaledVector(Ad,c.z),d}static isFrontFacing(t,i,r,l){return bi.subVectors(r,i),ra.subVectors(t,i),bi.cross(ra).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bi.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),bi.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return mi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,p;xs.subVectors(l,r),gs.subVectors(c,r),yd.subVectors(t,r);const m=xs.dot(yd),h=gs.dot(yd);if(m<=0&&h<=0)return i.copy(r);Md.subVectors(t,l);const x=xs.dot(Md),g=gs.dot(Md);if(x>=0&&g<=x)return i.copy(l);const v=m*g-x*h;if(v<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(xs,d);bd.subVectors(t,c);const M=xs.dot(bd),b=gs.dot(bd);if(b>=0&&M<=b)return i.copy(c);const A=M*h-m*b;if(A<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(r).addScaledVector(gs,p);const y=x*b-M*g;if(y<=0&&g-x>=0&&M-b>=0)return Qx.subVectors(c,l),p=(g-x)/(g-x+(M-b)),i.copy(l).addScaledVector(Qx,p);const S=1/(y+A+v);return d=A*S,p=v*S,i.copy(r).addScaledVector(xs,d).addScaledVector(gs,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},vc={h:0,s:0,l:0};function Rd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Ce{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Ne.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Ne.workingColorSpace){if(t=Ih(t,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=Rd(d,c,t+1/3),this.g=Rd(d,c,t),this.b=Rd(d,c,t-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(t,i=kn){function r(c){c!==void 0&&parseFloat(c)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:oe("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=kn){const r=Jg[t.toLowerCase()];return r!==void 0?this.setHex(r,i):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xa(t.r),this.g=xa(t.g),this.b=xa(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return Ne.workingToColorSpace(Nn.copy(this),t),Math.round(Me(Nn.r*255,0,255))*65536+Math.round(Me(Nn.g*255,0,255))*256+Math.round(Me(Nn.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ne.workingColorSpace){Ne.workingToColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,d=Math.max(r,l,c),p=Math.min(r,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const g=d-p;switch(h=x<=.5?g/(d+p):g/(2-d-p),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=h,t.l=x,t}getRGB(t,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=kn){Ne.workingToColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==kn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Za),this.setHSL(Za.h+t,Za.s+i,Za.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Za),t.getHSL(vc);const r=ko(Za.h,vc.h,i),l=ko(Za.s,vc.s,i),c=ko(Za.l,vc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Ce;Ce.NAMES=Jg;let eM=0;class zs extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=ma(),this.name="",this.type="Material",this.blending=As,this.side=$a,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hd,this.blendDst=Gd,this.blendEquation=Tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==As&&(r.blending=this.blending),this.side!==$a&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Hd&&(r.blendSrc=this.blendSrc),this.blendDst!==Gd&&(r.blendDst=this.blendDst),this.blendEquation!==Tr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Cs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class $g extends zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Bg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new rt,Sc=new ge;let nM=0;class qn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Rh,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Sc.fromBufferAttribute(this,i),Sc.applyMatrix3(t),this.setXY(i,Sc.x,Sc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ei(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=He(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ei(i,this.array)),i}setX(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ei(i,this.array)),i}setY(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ei(i,this.array)),i}setZ(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ei(i,this.array)),i}setW(t,i){return this.normalized&&(i=He(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array),c=He(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rh&&(t.usage=this.usage),t}}class t_ extends qn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class e_ extends qn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ga extends qn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let iM=0;const hi=new en,Cd=new wn,_s=new rt,ii=new Jo,Fo=new Jo,bn=new rt;class Ai extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ma(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zg(t)?e_:t_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new me().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,r){return hi.makeTranslation(t,i,r),this.applyMatrix4(hi),this}scale(t,i,r){return hi.makeScale(t,i,r),this.applyMatrix4(hi),this}lookAt(t){return Cd.lookAt(t),Cd.updateMatrix(),this.applyMatrix4(Cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ga(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Fo.setFromBufferAttribute(p),this.morphTargetsRelative?(bn.addVectors(ii.min,Fo.min),ii.expandByPoint(bn),bn.addVectors(ii.max,Fo.max),ii.expandByPoint(bn)):(ii.expandByPoint(Fo.min),ii.expandByPoint(Fo.max))}ii.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)bn.fromBufferAttribute(p,h),m&&(_s.fromBufferAttribute(t,h),bn.add(_s)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&tn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){tn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let Z=0;Z<r.count;Z++)p[Z]=new rt,m[Z]=new rt;const h=new rt,x=new rt,g=new rt,v=new ge,M=new ge,b=new ge,A=new rt,y=new rt;function S(Z,w,C){h.fromBufferAttribute(r,Z),x.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),v.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),x.sub(h),g.sub(h),M.sub(v),b.sub(v);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(A.copy(x).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(H),y.copy(g).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(H),p[Z].add(A),p[w].add(A),p[C].add(A),m[Z].add(y),m[w].add(y),m[C].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Z=0,w=P.length;Z<w;++Z){const C=P[Z],H=C.start,K=C.count;for(let ot=H,dt=H+K;ot<dt;ot+=3)S(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const U=new rt,F=new rt,V=new rt,D=new rt;function O(Z){V.fromBufferAttribute(l,Z),D.copy(V);const w=p[Z];U.copy(w),U.sub(V.multiplyScalar(V.dot(w))).normalize(),F.crossVectors(D,w);const H=F.dot(m[Z])<0?-1:1;d.setXYZW(Z,U.x,U.y,U.z,H)}for(let Z=0,w=P.length;Z<w;++Z){const C=P[Z],H=C.start,K=C.count;for(let ot=H,dt=H+K;ot<dt;ot+=3)O(t.getX(ot+0)),O(t.getX(ot+1)),O(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,M=r.count;v<M;v++)r.setXYZ(v,0,0,0);const l=new rt,c=new rt,d=new rt,p=new rt,m=new rt,h=new rt,x=new rt,g=new rt;if(t)for(let v=0,M=t.count;v<M;v+=3){const b=t.getX(v+0),A=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,y),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,A),h.fromBufferAttribute(r,y),p.add(x),m.add(x),h.add(x),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,M=i.count;v<M;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),r.setXYZ(v+0,x.x,x.y,x.z),r.setXYZ(v+1,x.x,x.y,x.z),r.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(p,m){const h=p.array,x=p.itemSize,g=p.normalized,v=new h.constructor(m.length*x);let M=0,b=0;for(let A=0,y=m.length;A<y;A++){p.isInterleavedBufferAttribute?M=m[A]*p.data.stride+p.offset:M=m[A]*x;for(let S=0;S<x;S++)v[b++]=h[M++]}return new qn(v,x,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ai,r=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=t(m,r);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,g=h.length;x<g;x++){const v=h[x],M=t(v,r);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(t[h]=m[h]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const h=r[m];t.data.attributes[m]=h.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let g=0,v=h.length;g<v;g++){const M=h[g];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=t.morphAttributes;for(const h in c){const x=[],g=c[h];for(let v=0,M=g.length;v<M;v++)x.push(g[v].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let h=0,x=d.length;h<x;h++){const g=d[h];this.addGroup(g.start,g.count,g.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jx=new en,Sr=new Qg,yc=new qc,$x=new rt,Mc=new rt,bc=new rt,Ec=new rt,wd=new rt,Tc=new rt,tg=new rt,Ac=new rt;class _a extends wn{constructor(t=new Ai,i=new $g){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Tc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],g=c[m];x!==0&&(wd.fromBufferAttribute(g,t),d?Tc.addScaledVector(wd,x):Tc.addScaledVector(wd.sub(i),x))}i.add(Tc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yc.copy(r.boundingSphere),yc.applyMatrix4(c),Sr.copy(t.ray).recast(t.near),!(yc.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(yc,$x)===null||Sr.origin.distanceToSquared($x)>(t.far-t.near)**2))&&(Jx.copy(c).invert(),Sr.copy(t.ray).applyMatrix4(Jx),!(r.boundingBox!==null&&Sr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Sr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,v=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,A=v.length;b<A;b++){const y=v[b],S=d[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let F=P,V=U;F<V;F+=3){const D=p.getX(F),O=p.getX(F+1),Z=p.getX(F+2);l=Rc(this,S,t,r,h,x,g,D,O,Z),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=b,S=A;y<S;y+=3){const P=p.getX(y),U=p.getX(y+1),F=p.getX(y+2);l=Rc(this,d,t,r,h,x,g,P,U,F),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,A=v.length;b<A;b++){const y=v[b],S=d[y.materialIndex],P=Math.max(y.start,M.start),U=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let F=P,V=U;F<V;F+=3){const D=F,O=F+1,Z=F+2;l=Rc(this,S,t,r,h,x,g,D,O,Z),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=b,S=A;y<S;y+=3){const P=y,U=y+1,F=y+2;l=Rc(this,d,t,r,h,x,g,P,U,F),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function aM(o,t,i,r,l,c,d,p){let m;if(t.side===Wn?m=r.intersectTriangle(d,c,l,!0,p):m=r.intersectTriangle(l,c,d,t.side===$a,p),m===null)return null;Ac.copy(p),Ac.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Ac);return h<i.near||h>i.far?null:{distance:h,point:Ac.clone(),object:o}}function Rc(o,t,i,r,l,c,d,p,m,h){o.getVertexPosition(p,Mc),o.getVertexPosition(m,bc),o.getVertexPosition(h,Ec);const x=aM(o,t,i,r,Mc,bc,Ec,tg);if(x){const g=new rt;mi.getBarycoord(tg,Mc,bc,Ec,g),l&&(x.uv=mi.getInterpolatedAttribute(l,p,m,h,g,new ge)),c&&(x.uv1=mi.getInterpolatedAttribute(c,p,m,h,g,new ge)),d&&(x.normal=mi.getInterpolatedAttribute(d,p,m,h,g,new rt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const v={a:p,b:m,c:h,normal:new rt,materialIndex:0};mi.getNormal(Mc,bc,Ec,v.normal),x.face=v,x.barycoord=g}return x}class $o extends Ai{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],g=[];let v=0,M=0;b("z","y","x",-1,-1,r,i,t,d,c,0),b("z","y","x",1,-1,r,i,-t,d,c,1),b("x","z","y",1,1,t,r,i,l,d,2),b("x","z","y",1,-1,t,r,-i,l,d,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ga(h,3)),this.setAttribute("normal",new ga(x,3)),this.setAttribute("uv",new ga(g,2));function b(A,y,S,P,U,F,V,D,O,Z,w){const C=F/O,H=V/Z,K=F/2,ot=V/2,dt=D/2,ut=O+1,z=Z+1;let Y=0,k=0;const St=new rt;for(let bt=0;bt<z;bt++){const N=bt*H-ot;for(let nt=0;nt<ut;nt++){const yt=nt*C-K;St[A]=yt*P,St[y]=N*U,St[S]=dt,h.push(St.x,St.y,St.z),St[A]=0,St[y]=0,St[S]=D>0?1:-1,x.push(St.x,St.y,St.z),g.push(nt/O),g.push(1-bt/Z),Y+=1}}for(let bt=0;bt<Z;bt++)for(let N=0;N<O;N++){const nt=v+N+ut*bt,yt=v+N+ut*(bt+1),At=v+(N+1)+ut*(bt+1),Pt=v+(N+1)+ut*bt;m.push(nt,yt,Pt),m.push(yt,At,Pt),k+=6}p.addGroup(M,k,w),M+=k,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ls(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Ls(o[i]);for(const l in r)t[l]=r[l]}return t}function rM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function n_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const sM={clone:Ls,merge:Fn};var oM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class va extends zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oM,this.fragmentShader=lM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=rM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class i_ extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new rt,eg=new ge,ng=new ge;class pi extends i_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ka.x,Ka.y).multiplyScalar(-t/Ka.z)}getViewSize(t,i){return this.getViewBounds(t,eg,ng),i.subVectors(ng,eg)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Xo*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/h,l*=d.width/m,r*=d.height/h}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vs=-90,Ss=1;class cM extends wn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new pi(vs,Ss,t,i);l.layers=this.layers,this.add(l);const c=new pi(vs,Ss,t,i);c.layers=this.layers,this.add(c);const d=new pi(vs,Ss,t,i);d.layers=this.layers,this.add(d);const p=new pi(vs,Ss,t,i);p.layers=this.layers,this.add(p);const m=new pi(vs,Ss,t,i);m.layers=this.layers,this.add(m);const h=new pi(vs,Ss,t,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(t===Ni)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of i)this.add(h),h.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,p),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,h),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(g,v,M),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class a_ extends On{constructor(t=[],i=ws,r,l,c,d,p,m,h,x){super(t,i,r,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uM extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new a_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new $o(5,5,5),c=new va({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ha});c.uniforms.tEquirect.value=i;const d=new _a(l,c),p=i.minFilter;return i.minFilter===Rr&&(i.minFilter=xi),new cM(1,10,this).update(t,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Cc extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class Dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(h&&t.hand){d=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,r),S=this._getHandJoint(h,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],v=x.position.distanceTo(g.position),M=.02,b=.005;h.inputState.pinching&&v>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&v<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Cc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class dM extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class hM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Rh,this.updateRanges=[],this.version=0,this.uuid=ma()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ma()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ma()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new rt;class kc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyMatrix4(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.applyNormalMatrix(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Pn.fromBufferAttribute(this,i),Pn.transformDirection(t),this.setXYZ(i,Pn.x,Pn.y,Pn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ei(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=He(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=He(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ei(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ei(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ei(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ei(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=He(i,this.array),r=He(r,this.array),l=He(l,this.array),c=He(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Xc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new qn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new kc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Xc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class r_ extends zs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ys;const Bo=new rt,Ms=new rt,bs=new rt,Es=new ge,Io=new ge,s_=new en,wc=new rt,Ho=new rt,Dc=new rt,ig=new ge,Ud=new ge,ag=new ge;class pM extends wn{constructor(t=new r_){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new Ai;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new hM(i,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new kc(r,3,0,!1)),ys.setAttribute("uv",new kc(r,2,3,!1))}this.geometry=ys,this.material=t,this.center=new ge(.5,.5),this.count=1}raycast(t,i){t.camera===null&&tn('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),s_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-bs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Uc(wc.set(-.5,-.5,0),bs,d,Ms,l,c),Uc(Ho.set(.5,-.5,0),bs,d,Ms,l,c),Uc(Dc.set(.5,.5,0),bs,d,Ms,l,c),ig.set(0,0),Ud.set(1,0),ag.set(1,1);let p=t.ray.intersectTriangle(wc,Ho,Dc,!1,Bo);if(p===null&&(Uc(Ho.set(-.5,.5,0),bs,d,Ms,l,c),Ud.set(0,1),p=t.ray.intersectTriangle(wc,Dc,Ho,!1,Bo),p===null))return;const m=t.ray.origin.distanceTo(Bo);m<t.near||m>t.far||i.push({distance:m,point:Bo.clone(),uv:mi.getInterpolation(Bo,wc,Ho,Dc,ig,Ud,ag,new ge),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Uc(o,t,i,r,l,c){Es.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Io.x=c*Es.x-l*Es.y,Io.y=l*Es.x+c*Es.y):Io.copy(Es),o.copy(t),o.x+=Io.x,o.y+=Io.y,o.applyMatrix4(s_)}class mM extends On{constructor(t=null,i=1,r=1,l,c,d,p,m,h=ai,x=ai,g,v){super(null,d,p,m,h,x,l,c,g,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new rt,xM=new rt,gM=new me;class Er{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ld.subVectors(r,i).cross(xM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ld),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||gM.getNormalMatrix(t),l=this.coplanarPoint(Ld).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new qc,_M=new ge(.5,.5),Lc=new rt;class Vh{constructor(t=new Er,i=new Er,r=new Er,l=new Er,c=new Er,d=new Er){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ni,r=!1){const l=this.planes,c=t.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],g=c[5],v=c[6],M=c[7],b=c[8],A=c[9],y=c[10],S=c[11],P=c[12],U=c[13],F=c[14],V=c[15];if(l[0].setComponents(h-d,M-x,S-b,V-P).normalize(),l[1].setComponents(h+d,M+x,S+b,V+P).normalize(),l[2].setComponents(h+p,M+g,S+A,V+U).normalize(),l[3].setComponents(h-p,M-g,S-A,V-U).normalize(),r)l[4].setComponents(m,v,y,F).normalize(),l[5].setComponents(h-m,M-v,S-y,V-F).normalize();else if(l[4].setComponents(h-m,M-v,S-y,V-F).normalize(),i===Ni)l[5].setComponents(h+m,M+v,S+y,V+F).normalize();else if(i===Gc)l[5].setComponents(m,v,y,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){yr.center.set(0,0,0);const i=_M.distanceTo(t.center);return yr.radius=.7071067811865476+i,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vM extends On{constructor(t,i,r,l,c,d,p,m,h){super(t,i,r,l,c,d,p,m,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class o_ extends On{constructor(t,i,r=Cr,l,c,d,p=ai,m=ai,h,x=Yo,g=1){if(x!==Yo&&x!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:g};super(v,l,c,d,p,m,x,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class l_ extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yc extends Ai{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,p=Math.floor(r),m=Math.floor(l),h=p+1,x=m+1,g=t/p,v=i/m,M=[],b=[],A=[],y=[];for(let S=0;S<x;S++){const P=S*v-d;for(let U=0;U<h;U++){const F=U*g-c;b.push(F,-P,0),A.push(0,0,1),y.push(U/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let P=0;P<p;P++){const U=P+h*S,F=P+h*(S+1),V=P+1+h*(S+1),D=P+1+h*S;M.push(U,F,D),M.push(F,V,D)}this.setIndex(M),this.setAttribute("position",new ga(b,3)),this.setAttribute("normal",new ga(A,3)),this.setAttribute("uv",new ga(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}class SM extends zs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yg,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yM extends zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=py,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MM extends zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const rg={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class bM{constructor(t,i,r){const l=this;let c=!1,d=0,p=0,m;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){p++,c===!1&&l.onStart!==void 0&&l.onStart(x,d,p),c=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,p),d===p&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,g){return h.push(x,g),this},this.removeHandler=function(x){const g=h.indexOf(x);return g!==-1&&h.splice(g,2),this},this.getHandler=function(x){for(let g=0,v=h.length;g<v;g+=2){const M=h[g],b=h[g+1];if(M.global&&(M.lastIndex=0),M.test(x))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const EM=new bM;class Xh{constructor(t){this.manager=t!==void 0?t:EM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Xh.DEFAULT_MATERIAL_NAME="__DEFAULT";const oa={};class TM extends Error{constructor(t,i){super(t),this.response=i}}class AM extends Xh{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=rg.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(oa[t]!==void 0){oa[t].push({onLoad:i,onProgress:r,onError:l});return}oa[t]=[],oa[t].push({onLoad:i,onProgress:r,onError:l});const d=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),p=this.mimeType,m=this.responseType;fetch(d).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const x=oa[t],g=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),M=v?parseInt(v):0,b=M!==0;let A=0;const y=new ReadableStream({start(S){P();function P(){g.read().then(({done:U,value:F})=>{if(U)S.close();else{A+=F.byteLength;const V=new ProgressEvent("progress",{lengthComputable:b,loaded:A,total:M});for(let D=0,O=x.length;D<O;D++){const Z=x[D];Z.onProgress&&Z.onProgress(V)}S.enqueue(F),P()}},U=>{S.error(U)})}}});return new Response(y)}else throw new TM(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(m){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(x=>new DOMParser().parseFromString(x,p));case"json":return h.json();default:if(p==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(p),v=g&&g[1]?g[1].toLowerCase():void 0,M=new TextDecoder(v);return h.arrayBuffer().then(b=>M.decode(b))}}}).then(h=>{rg.add(`file:${t}`,h);const x=oa[t];delete oa[t];for(let g=0,v=x.length;g<v;g++){const M=x[g];M.onLoad&&M.onLoad(h)}}).catch(h=>{const x=oa[t];if(x===void 0)throw this.manager.itemError(t),h;delete oa[t];for(let g=0,v=x.length;g<v;g++){const M=x[g];M.onError&&M.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class c_ extends wn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Nd=new en,sg=new rt,og=new rt;class RM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vh,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;sg.setFromMatrixPosition(t.matrixWorld),i.position.copy(sg),og.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(og),i.updateMatrixWorld(),Nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Nd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class u_ extends i_{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class CM extends RM{constructor(){super(new u_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wM extends c_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new CM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class DM extends c_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class UM extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const lg=new en;class LM{constructor(t,i,r=0,l=1/0){this.ray=new Qg(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new Gh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):tn("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return lg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lg),this}intersectObject(t,i=!0,r=[]){return Ch(t,this,r,i),r.sort(cg),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Ch(t[l],this,r,i);return r.sort(cg),r}}function cg(o,t){return o.distance-t.distance}function Ch(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let d=0,p=c.length;d<p;d++)Ch(c[d],t,i,!0)}}function ug(o,t,i,r){const l=NM(r);switch(i){case kg:return o*t;case qg:return o*t/l.components*l.byteLength;case zh:return o*t/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case Fh:return o*t*2/l.components*l.byteLength;case Wg:return o*t*3/l.components*l.byteLength;case Ti:return o*t*4/l.components*l.byteLength;case Bh:return o*t*4/l.components*l.byteLength;case zc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case th:case nh:return Math.max(o,16)*Math.max(t,8)/4;case $d:case eh:return Math.max(o,8)*Math.max(t,8)/2;case ih:case ah:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case rh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case uh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case hh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case mh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case xh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case gh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case _h:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case vh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Sh:case yh:case Mh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case bh:case Eh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Th:case Ah:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function NM(o){switch(o){case Oi:case Hg:return{byteLength:1,components:1};case Wo:case Gg:case Ns:return{byteLength:2,components:1};case Nh:case Oh:return{byteLength:2,components:4};case Cr:case Lh:case da:return{byteLength:4,components:1};case Vg:case Xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f_(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function OM(o){const t=new WeakMap;function i(p,m){const h=p.array,x=p.usage,g=h.byteLength,v=o.createBuffer();o.bindBuffer(m,v),o.bufferData(m,h,x),p.onUploadCallback();let M;if(h instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=o.SHORT;else if(h instanceof Uint32Array)M=o.UNSIGNED_INT;else if(h instanceof Int32Array)M=o.INT;else if(h instanceof Int8Array)M=o.BYTE;else if(h instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:g}}function r(p,m,h){const x=m.array,g=m.updateRanges;if(o.bindBuffer(h,p),g.length===0)o.bufferSubData(h,0,x);else{g.sort((M,b)=>M.start-b.start);let v=0;for(let M=1;M<g.length;M++){const b=g[v],A=g[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++v,g[v]=A)}g.length=v+1;for(let M=0,b=g.length;M<b;M++){const A=g[M];o.bufferSubData(h,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=t.get(p);if(h===void 0)t.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PM=`#ifdef USE_ALPHAHASH
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
#endif`,FM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
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
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XM=`#ifdef USE_BATCHING
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
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ab=`#define PI 3.141592653589793
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
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sb=`vec3 transformedNormal = objectNormal;
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
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hb=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
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
}`,bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ab=`uniform bool receiveShadow;
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
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
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
#endif`,Nb=`uniform sampler2D dfgLUT;
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
}`,Ob=`
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ib=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kb=`#if defined( USE_POINTS_UV )
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
#endif`,Wb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$b=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,t3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i3=`#ifdef USE_NORMALMAP
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
#endif`,a3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,v3=`float getShadowMask() {
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
}`,S3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y3=`#ifdef USE_SKINNING
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
#endif`,M3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b3=`#ifdef USE_SKINNING
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
#endif`,E3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,A3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,C3=`#ifdef USE_TRANSMISSION
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
#endif`,w3=`#ifdef USE_TRANSMISSION
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
#endif`,D3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z3=`uniform sampler2D t2D;
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
}`,P3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H3=`#include <common>
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
}`,G3=`#if DEPTH_PACKING == 3200
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
}`,V3=`#define DISTANCE
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
}`,X3=`#define DISTANCE
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
}`,k3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,W3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q3=`uniform float scale;
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
}`,Y3=`uniform vec3 diffuse;
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
}`,j3=`#include <common>
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
}`,Z3=`uniform vec3 diffuse;
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
}`,K3=`#define LAMBERT
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
}`,Q3=`#define LAMBERT
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
}`,J3=`#define MATCAP
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
}`,$3=`#define MATCAP
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
}`,t1=`#define NORMAL
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
}`,e1=`#define NORMAL
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
}`,n1=`#define PHONG
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
}`,i1=`#define PHONG
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
}`,a1=`#define STANDARD
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
}`,r1=`#define STANDARD
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
}`,s1=`#define TOON
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
}`,o1=`#define TOON
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
}`,l1=`uniform float size;
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#include <common>
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
}`,f1=`uniform vec3 color;
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
}`,d1=`uniform float rotation;
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
}`,h1=`uniform vec3 diffuse;
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
}`,xe={alphahash_fragment:zM,alphahash_pars_fragment:PM,alphamap_fragment:FM,alphamap_pars_fragment:BM,alphatest_fragment:IM,alphatest_pars_fragment:HM,aomap_fragment:GM,aomap_pars_fragment:VM,batching_pars_vertex:XM,batching_vertex:kM,begin_vertex:WM,beginnormal_vertex:qM,bsdfs:YM,iridescence_fragment:jM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:KM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:$M,color_fragment:tb,color_pars_fragment:eb,color_pars_vertex:nb,color_vertex:ib,common:ab,cube_uv_reflection_fragment:rb,defaultnormal_vertex:sb,displacementmap_pars_vertex:ob,displacementmap_vertex:lb,emissivemap_fragment:cb,emissivemap_pars_fragment:ub,colorspace_fragment:fb,colorspace_pars_fragment:db,envmap_fragment:hb,envmap_common_pars_fragment:pb,envmap_pars_fragment:mb,envmap_pars_vertex:xb,envmap_physical_pars_fragment:Rb,envmap_vertex:gb,fog_vertex:_b,fog_pars_vertex:vb,fog_fragment:Sb,fog_pars_fragment:yb,gradientmap_pars_fragment:Mb,lightmap_pars_fragment:bb,lights_lambert_fragment:Eb,lights_lambert_pars_fragment:Tb,lights_pars_begin:Ab,lights_toon_fragment:Cb,lights_toon_pars_fragment:wb,lights_phong_fragment:Db,lights_phong_pars_fragment:Ub,lights_physical_fragment:Lb,lights_physical_pars_fragment:Nb,lights_fragment_begin:Ob,lights_fragment_maps:zb,lights_fragment_end:Pb,logdepthbuf_fragment:Fb,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:Ib,logdepthbuf_vertex:Hb,map_fragment:Gb,map_pars_fragment:Vb,map_particle_fragment:Xb,map_particle_pars_fragment:kb,metalnessmap_fragment:Wb,metalnessmap_pars_fragment:qb,morphinstance_vertex:Yb,morphcolor_vertex:jb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Kb,morphtarget_vertex:Qb,normal_fragment_begin:Jb,normal_fragment_maps:$b,normal_pars_fragment:t3,normal_pars_vertex:e3,normal_vertex:n3,normalmap_pars_fragment:i3,clearcoat_normal_fragment_begin:a3,clearcoat_normal_fragment_maps:r3,clearcoat_pars_fragment:s3,iridescence_pars_fragment:o3,opaque_fragment:l3,packing:c3,premultiplied_alpha_fragment:u3,project_vertex:f3,dithering_fragment:d3,dithering_pars_fragment:h3,roughnessmap_fragment:p3,roughnessmap_pars_fragment:m3,shadowmap_pars_fragment:x3,shadowmap_pars_vertex:g3,shadowmap_vertex:_3,shadowmask_pars_fragment:v3,skinbase_vertex:S3,skinning_pars_vertex:y3,skinning_vertex:M3,skinnormal_vertex:b3,specularmap_fragment:E3,specularmap_pars_fragment:T3,tonemapping_fragment:A3,tonemapping_pars_fragment:R3,transmission_fragment:C3,transmission_pars_fragment:w3,uv_pars_fragment:D3,uv_pars_vertex:U3,uv_vertex:L3,worldpos_vertex:N3,background_vert:O3,background_frag:z3,backgroundCube_vert:P3,backgroundCube_frag:F3,cube_vert:B3,cube_frag:I3,depth_vert:H3,depth_frag:G3,distanceRGBA_vert:V3,distanceRGBA_frag:X3,equirect_vert:k3,equirect_frag:W3,linedashed_vert:q3,linedashed_frag:Y3,meshbasic_vert:j3,meshbasic_frag:Z3,meshlambert_vert:K3,meshlambert_frag:Q3,meshmatcap_vert:J3,meshmatcap_frag:$3,meshnormal_vert:t1,meshnormal_frag:e1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:a1,meshphysical_frag:r1,meshtoon_vert:s1,meshtoon_frag:o1,points_vert:l1,points_frag:c1,shadow_vert:u1,shadow_frag:f1,sprite_vert:d1,sprite_frag:h1},Ht={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},Li={basic:{uniforms:Fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.fog]),vertexShader:xe.meshbasic_vert,fragmentShader:xe.meshbasic_frag},lambert:{uniforms:Fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ce(0)}}]),vertexShader:xe.meshlambert_vert,fragmentShader:xe.meshlambert_frag},phong:{uniforms:Fn([Ht.common,Ht.specularmap,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,Ht.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:xe.meshphong_vert,fragmentShader:xe.meshphong_frag},standard:{uniforms:Fn([Ht.common,Ht.envmap,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.roughnessmap,Ht.metalnessmap,Ht.fog,Ht.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag},toon:{uniforms:Fn([Ht.common,Ht.aomap,Ht.lightmap,Ht.emissivemap,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.gradientmap,Ht.fog,Ht.lights,{emissive:{value:new Ce(0)}}]),vertexShader:xe.meshtoon_vert,fragmentShader:xe.meshtoon_frag},matcap:{uniforms:Fn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,Ht.fog,{matcap:{value:null}}]),vertexShader:xe.meshmatcap_vert,fragmentShader:xe.meshmatcap_frag},points:{uniforms:Fn([Ht.points,Ht.fog]),vertexShader:xe.points_vert,fragmentShader:xe.points_frag},dashed:{uniforms:Fn([Ht.common,Ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xe.linedashed_vert,fragmentShader:xe.linedashed_frag},depth:{uniforms:Fn([Ht.common,Ht.displacementmap]),vertexShader:xe.depth_vert,fragmentShader:xe.depth_frag},normal:{uniforms:Fn([Ht.common,Ht.bumpmap,Ht.normalmap,Ht.displacementmap,{opacity:{value:1}}]),vertexShader:xe.meshnormal_vert,fragmentShader:xe.meshnormal_frag},sprite:{uniforms:Fn([Ht.sprite,Ht.fog]),vertexShader:xe.sprite_vert,fragmentShader:xe.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xe.background_vert,fragmentShader:xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:xe.backgroundCube_vert,fragmentShader:xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xe.cube_vert,fragmentShader:xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xe.equirect_vert,fragmentShader:xe.equirect_frag},distanceRGBA:{uniforms:Fn([Ht.common,Ht.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xe.distanceRGBA_vert,fragmentShader:xe.distanceRGBA_frag},shadow:{uniforms:Fn([Ht.lights,Ht.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:xe.shadow_vert,fragmentShader:xe.shadow_frag}};Li.physical={uniforms:Fn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:xe.meshphysical_vert,fragmentShader:xe.meshphysical_frag};const Nc={r:0,b:0,g:0},Mr=new zi,p1=new en;function m1(o,t,i,r,l,c,d){const p=new Ce(0);let m=c===!0?0:1,h,x,g=null,v=0,M=null;function b(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?i:t).get(F)),F}function A(U){let F=!1;const V=b(U);V===null?S(p,m):V&&V.isColor&&(S(V,1),F=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,F){const V=b(F);V&&(V.isCubeTexture||V.mapping===Wc)?(x===void 0&&(x=new _a(new $o(1,1,1),new va({name:"BackgroundCubeMaterial",uniforms:Ls(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(D,O,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Mr.copy(F.backgroundRotation),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),x.material.uniforms.envMap.value=V,x.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(Mr)),x.material.toneMapped=Ne.getTransfer(V.colorSpace)!==We,(g!==V||v!==V.version||M!==o.toneMapping)&&(x.material.needsUpdate=!0,g=V,v=V.version,M=o.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):V&&V.isTexture&&(h===void 0&&(h=new _a(new Yc(2,2),new va({name:"BackgroundMaterial",uniforms:Ls(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:$a,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(h)),h.material.uniforms.t2D.value=V,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=Ne.getTransfer(V.colorSpace)!==We,V.matrixAutoUpdate===!0&&V.updateMatrix(),h.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||v!==V.version||M!==o.toneMapping)&&(h.material.needsUpdate=!0,g=V,v=V.version,M=o.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null))}function S(U,F){U.getRGB(Nc,n_(o)),r.buffers.color.setClear(Nc.r,Nc.g,Nc.b,F,d)}function P(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return p},setClearColor:function(U,F=1){p.set(U),m=F,S(p,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,S(p,m)},render:A,addToRenderList:y,dispose:P}}function x1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,d=!1;function p(C,H,K,ot,dt){let ut=!1;const z=g(ot,K,H);c!==z&&(c=z,h(c.object)),ut=M(C,ot,K,dt),ut&&b(C,ot,K,dt),dt!==null&&t.update(dt,o.ELEMENT_ARRAY_BUFFER),(ut||d)&&(d=!1,F(C,H,K,ot),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function m(){return o.createVertexArray()}function h(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function g(C,H,K){const ot=K.wireframe===!0;let dt=r[C.id];dt===void 0&&(dt={},r[C.id]=dt);let ut=dt[H.id];ut===void 0&&(ut={},dt[H.id]=ut);let z=ut[ot];return z===void 0&&(z=v(m()),ut[ot]=z),z}function v(C){const H=[],K=[],ot=[];for(let dt=0;dt<i;dt++)H[dt]=0,K[dt]=0,ot[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:K,attributeDivisors:ot,object:C,attributes:{},index:null}}function M(C,H,K,ot){const dt=c.attributes,ut=H.attributes;let z=0;const Y=K.getAttributes();for(const k in Y)if(Y[k].location>=0){const bt=dt[k];let N=ut[k];if(N===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(N=C.instanceColor)),bt===void 0||bt.attribute!==N||N&&bt.data!==N.data)return!0;z++}return c.attributesNum!==z||c.index!==ot}function b(C,H,K,ot){const dt={},ut=H.attributes;let z=0;const Y=K.getAttributes();for(const k in Y)if(Y[k].location>=0){let bt=ut[k];bt===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(bt=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(bt=C.instanceColor));const N={};N.attribute=bt,bt&&bt.data&&(N.data=bt.data),dt[k]=N,z++}c.attributes=dt,c.attributesNum=z,c.index=ot}function A(){const C=c.newAttributes;for(let H=0,K=C.length;H<K;H++)C[H]=0}function y(C){S(C,0)}function S(C,H){const K=c.newAttributes,ot=c.enabledAttributes,dt=c.attributeDivisors;K[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),dt[C]!==H&&(o.vertexAttribDivisor(C,H),dt[C]=H)}function P(){const C=c.newAttributes,H=c.enabledAttributes;for(let K=0,ot=H.length;K<ot;K++)H[K]!==C[K]&&(o.disableVertexAttribArray(K),H[K]=0)}function U(C,H,K,ot,dt,ut,z){z===!0?o.vertexAttribIPointer(C,H,K,dt,ut):o.vertexAttribPointer(C,H,K,ot,dt,ut)}function F(C,H,K,ot){A();const dt=ot.attributes,ut=K.getAttributes(),z=H.defaultAttributeValues;for(const Y in ut){const k=ut[Y];if(k.location>=0){let St=dt[Y];if(St===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(St=C.instanceColor)),St!==void 0){const bt=St.normalized,N=St.itemSize,nt=t.get(St);if(nt===void 0)continue;const yt=nt.buffer,At=nt.type,Pt=nt.bytesPerElement,tt=At===o.INT||At===o.UNSIGNED_INT||St.gpuType===Lh;if(St.isInterleavedBufferAttribute){const lt=St.data,Dt=lt.stride,It=St.offset;if(lt.isInstancedInterleavedBuffer){for(let qt=0;qt<k.locationSize;qt++)S(k.location+qt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let qt=0;qt<k.locationSize;qt++)y(k.location+qt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let qt=0;qt<k.locationSize;qt++)U(k.location+qt,N/k.locationSize,At,bt,Dt*Pt,(It+N/k.locationSize*qt)*Pt,tt)}else{if(St.isInstancedBufferAttribute){for(let lt=0;lt<k.locationSize;lt++)S(k.location+lt,St.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let lt=0;lt<k.locationSize;lt++)y(k.location+lt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let lt=0;lt<k.locationSize;lt++)U(k.location+lt,N/k.locationSize,At,bt,N*Pt,N/k.locationSize*lt*Pt,tt)}}else if(z!==void 0){const bt=z[Y];if(bt!==void 0)switch(bt.length){case 2:o.vertexAttrib2fv(k.location,bt);break;case 3:o.vertexAttrib3fv(k.location,bt);break;case 4:o.vertexAttrib4fv(k.location,bt);break;default:o.vertexAttrib1fv(k.location,bt)}}}}P()}function V(){Z();for(const C in r){const H=r[C];for(const K in H){const ot=H[K];for(const dt in ot)x(ot[dt].object),delete ot[dt];delete H[K]}delete r[C]}}function D(C){if(r[C.id]===void 0)return;const H=r[C.id];for(const K in H){const ot=H[K];for(const dt in ot)x(ot[dt].object),delete ot[dt];delete H[K]}delete r[C.id]}function O(C){for(const H in r){const K=r[H];if(K[C.id]===void 0)continue;const ot=K[C.id];for(const dt in ot)x(ot[dt].object),delete ot[dt];delete K[C.id]}}function Z(){w(),d=!0,c!==l&&(c=l,h(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Z,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:P}}function g1(o,t,i){let r;function l(h){r=h}function c(h,x){o.drawArrays(r,h,x),i.update(x,r,1)}function d(h,x,g){g!==0&&(o.drawArraysInstanced(r,h,x,g),i.update(x,r,g))}function p(h,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,x,0,g);let M=0;for(let b=0;b<g;b++)M+=x[b];i.update(M,r,1)}function m(h,x,g,v){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<h.length;b++)d(h[b],x[b],v[b]);else{M.multiDrawArraysInstancedWEBGL(r,h,0,x,0,v,0,g);let b=0;for(let A=0;A<g;A++)b+=x[A]*v[A];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function _1(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(O){return!(O!==Ti&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const Z=O===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Oi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==da&&!Z)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&(oe("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=b>0,D=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:V,maxSamples:D}}function v1(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Er,p=new me,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const M=g.length!==0||v||r!==0||l;return l=v,r=g.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=x(g,v,0)},this.setState=function(g,v,M){const b=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,S=o.get(g);if(!l||b===null||b.length===0||c&&!y)c?x(null):h();else{const P=c?0:r,U=P*4;let F=S.clippingState||null;m.value=F,F=x(b,v,U,M);for(let V=0;V!==U;++V)F[V]=i[V];S.clippingState=F,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(g,v,M,b){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=m.value,b!==!0||y===null){const S=M+A*4,P=v.matrixWorldInverse;p.getNormalMatrix(P),(y===null||y.length<S)&&(y=new Float32Array(S));for(let U=0,F=M;U!==A;++U,F+=4)d.copy(g[U]).applyMatrix4(P,p),d.normal.toArray(y,F),y[F+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function S1(o){let t=new WeakMap;function i(d,p){return p===Zd?d.mapping=ws:p===Kd&&(d.mapping=Ds),d}function r(d){if(d&&d.isTexture){const p=d.mapping;if(p===Zd||p===Kd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const h=new uM(m.height);return h.fromEquirectangularTexture(o,d),t.set(d,h),d.addEventListener("dispose",l),i(h.texture,d.mapping)}else return null}}return d}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ja=4,fg=[.125,.215,.35,.446,.526,.582],Ar=20,y1=256,Go=new u_,dg=new Ce;let Od=null,zd=0,Pd=0,Fd=!1;const M1=new rt;class hg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:p=M1}=c;Od=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Od,zd,Pd),this._renderer.xr.enabled=Fd,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===ws||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Od=this._renderer.getRenderTarget(),zd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:xi,minFilter:xi,generateMipmaps:!1,type:Ns,format:Ti,colorSpace:Us,depthBuffer:!1},l=pg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pg(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b1(c)),this._blurMaterial=T1(c,t,i),this._ggxMaterial=E1(c,t,i)}return l}_compileMaterial(t){const i=new _a(new Ai,t);this._renderer.compile(i,Go)}_sceneToCubeUV(t,i,r,l,c){const m=new pi(90,1,i,r),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,M=g.toneMapping;g.getClearColor(dg),g.toneMapping=pa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _a(new $o,new $g({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const P=t.background;P?P.isColor&&(y.color.copy(P),t.background=null,S=!0):(y.color.copy(dg),S=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[U],c.y,c.z)):F===1?(m.up.set(0,0,h[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[U],c.z)):(m.up.set(0,h[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[U]));const V=this._cubeSize;Ts(l,F*V,U>2?V:0,V,V),g.setRenderTarget(l),S&&g.render(A,m),g.render(t,m)}g.toneMapping=M,g.autoClear=v,t.background=P}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===ws||t.mapping===Ds;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Ts(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Go)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[r];p.material=d;const m=d.uniforms,h=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(h*h-x*x),v=.05+h*.95,M=g*v,{_lodMax:b}=this,A=this._sizeLods[r],y=3*A*(r>b-Ja?r-b+Ja:0),S=4*(this._cubeSize-A);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Ts(c,y,S,3*A,2*A),l.setRenderTarget(c),l.render(p,Go),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-r,Ts(t,y,S,3*A,2*A),l.setRenderTarget(t),l.render(p,Go)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&tn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=h;const v=h.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ar-1),A=c/b,y=isFinite(c)?1+Math.floor(x*A):Ar;y>Ar&&oe(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ar}`);const S=[];let P=0;for(let O=0;O<Ar;++O){const Z=O/A,w=Math.exp(-Z*Z/2);S.push(w),O===0?P+=w:O<y&&(P+=2*w)}for(let O=0;O<S.length;O++)S[O]=S[O]/P;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=d==="latitudinal",p&&(v.poleAxis.value=p);const{_lodMax:U}=this;v.dTheta.value=b,v.mipInt.value=U-r;const F=this._sizeLods[l],V=3*F*(l>U-Ja?l-U+Ja:0),D=4*(this._cubeSize-F);Ts(i,V,D,3*F,2*F),m.setRenderTarget(i),m.render(g,Go)}}function b1(o){const t=[],i=[],r=[];let l=o;const c=o-Ja+1+fg.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);t.push(p);let m=1/p;d>o-Ja?m=fg[d-o+Ja-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,g=1+h,v=[x,x,g,x,g,g,x,x,g,g,x,g],M=6,b=6,A=3,y=2,S=1,P=new Float32Array(A*b*M),U=new Float32Array(y*b*M),F=new Float32Array(S*b*M);for(let D=0;D<M;D++){const O=D%3*2/3-1,Z=D>2?0:-1,w=[O,Z,0,O+2/3,Z,0,O+2/3,Z+1,0,O,Z,0,O+2/3,Z+1,0,O,Z+1,0];P.set(w,A*b*D),U.set(v,y*b*D);const C=[D,D,D,D,D,D];F.set(C,S*b*D)}const V=new Ai;V.setAttribute("position",new qn(P,A)),V.setAttribute("uv",new qn(U,y)),V.setAttribute("faceIndex",new qn(F,S)),r.push(new _a(V,null)),l>Ja&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function pg(o,t,i){const r=new wr(o,t,i);return r.texture.mapping=Wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ts(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function E1(o,t,i){return new va({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:y1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function T1(o,t,i){const r=new Float32Array(Ar),l=new rt(0,1,0);return new va({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:jc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function mg(){return new va({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function xg(){return new va({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}function A1(o){let t=new WeakMap,i=null;function r(p){if(p&&p.isTexture){const m=p.mapping,h=m===Zd||m===Kd,x=m===ws||m===Ds;if(h||x){let g=t.get(p);const v=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==v)return i===null&&(i=new hg(o)),g=h?i.fromEquirectangular(p,g):i.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{const M=p.image;return h&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new hg(o)),g=h?i.fromEquirectangular(p):i.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",c),g.texture):null}}}return p}function l(p){let m=0;const h=6;for(let x=0;x<h;x++)p[x]!==void 0&&m++;return m===h}function c(p){const m=p.target;m.removeEventListener("dispose",c);const h=t.get(m);h!==void 0&&(t.delete(m),h.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function R1(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Zo("WebGLRenderer: "+r+" extension not supported."),l}}}function C1(o,t,i,r){const l={},c=new WeakMap;function d(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",d),delete l[v.id];const M=c.get(v);M&&(t.remove(M),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function p(g,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const M in v)t.update(v[M],o.ARRAY_BUFFER)}function h(g){const v=[],M=g.index,b=g.attributes.position;let A=0;if(M!==null){const P=M.array;A=M.version;for(let U=0,F=P.length;U<F;U+=3){const V=P[U+0],D=P[U+1],O=P[U+2];v.push(V,D,D,O,O,V)}}else if(b!==void 0){const P=b.array;A=b.version;for(let U=0,F=P.length/3-1;U<F;U+=3){const V=U+0,D=U+1,O=U+2;v.push(V,D,D,O,O,V)}}else return;const y=new(Zg(v)?e_:t_)(v,1);y.version=A;const S=c.get(g);S&&t.remove(S),c.set(g,y)}function x(g){const v=c.get(g);if(v){const M=g.index;M!==null&&v.version<M.version&&h(g)}else h(g);return c.get(g)}return{get:p,update:m,getWireframeAttribute:x}}function w1(o,t,i){let r;function l(v){r=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function m(v,M){o.drawElements(r,M,c,v*d),i.update(M,r,1)}function h(v,M,b){b!==0&&(o.drawElementsInstanced(r,M,c,v*d,b),i.update(M,r,b))}function x(v,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,v,0,b);let y=0;for(let S=0;S<b;S++)y+=M[S];i.update(y,r,1)}function g(v,M,b,A){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)h(v[S]/d,M[S],A[S]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,v,0,A,0,b);let S=0;for(let P=0;P<b;P++)S+=M[P]*A[P];i.update(S,r,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function D1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:tn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function U1(o,t,i){const r=new WeakMap,l=new rn;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,g=x!==void 0?x.length:0;let v=r.get(p);if(v===void 0||v.count!==g){let C=function(){Z.dispose(),r.delete(p),p.removeEventListener("dispose",C)};var M=C;v!==void 0&&v.texture.dispose();const b=p.morphAttributes.position!==void 0,A=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],P=p.morphAttributes.normal||[],U=p.morphAttributes.color||[];let F=0;b===!0&&(F=1),A===!0&&(F=2),y===!0&&(F=3);let V=p.attributes.position.count*F,D=1;V>t.maxTextureSize&&(D=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const O=new Float32Array(V*D*4*g),Z=new Kg(O,V,D,g);Z.type=da,Z.needsUpdate=!0;const w=F*4;for(let H=0;H<g;H++){const K=S[H],ot=P[H],dt=U[H],ut=V*D*4*H;for(let z=0;z<K.count;z++){const Y=z*w;b===!0&&(l.fromBufferAttribute(K,z),O[ut+Y+0]=l.x,O[ut+Y+1]=l.y,O[ut+Y+2]=l.z,O[ut+Y+3]=0),A===!0&&(l.fromBufferAttribute(ot,z),O[ut+Y+4]=l.x,O[ut+Y+5]=l.y,O[ut+Y+6]=l.z,O[ut+Y+7]=0),y===!0&&(l.fromBufferAttribute(dt,z),O[ut+Y+8]=l.x,O[ut+Y+9]=l.y,O[ut+Y+10]=l.z,O[ut+Y+11]=dt.itemSize===4?l.w:1)}}v={count:g,texture:Z,size:new ge(V,D)},r.set(p,v),p.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const A=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:c}}function L1(o,t,i,r){let l=new WeakMap;function c(m){const h=r.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==h&&(t.update(g),l.set(g,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),l.get(m)!==h&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,h))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==h&&(v.update(),l.set(v,h))}return g}function d(){l=new WeakMap}function p(m){const h=m.target;h.removeEventListener("dispose",p),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:c,dispose:d}}const d_=new On,gg=new o_(1,1),h_=new Kg,p_=new Yy,m_=new a_,_g=[],vg=[],Sg=new Float32Array(16),yg=new Float32Array(9),Mg=new Float32Array(4);function Ps(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=_g[l];if(c===void 0&&(c=new Float32Array(l),_g[l]=c),t!==0){r.toArray(c,0);for(let d=1,p=0;d!==t;++d)p+=i,o[d].toArray(c,p)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Zc(o,t){let i=vg[t];i===void 0&&(i=new Int32Array(t),vg[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function N1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function O1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function P1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function F1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;Mg.set(r),o.uniformMatrix2fv(this.addr,!1,Mg),_n(i,r)}}function B1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;yg.set(r),o.uniformMatrix3fv(this.addr,!1,yg),_n(i,r)}}function I1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;Sg.set(r),o.uniformMatrix4fv(this.addr,!1,Sg),_n(i,r)}}function H1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function G1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function V1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function X1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function k1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function W1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function Y1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function j1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(gg.compareFunction=jg,c=gg):c=d_,i.setTexture2D(t||c,l)}function Z1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||p_,l)}function K1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||m_,l)}function Q1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||h_,l)}function J1(o){switch(o){case 5126:return N1;case 35664:return O1;case 35665:return z1;case 35666:return P1;case 35674:return F1;case 35675:return B1;case 35676:return I1;case 5124:case 35670:return H1;case 35667:case 35671:return G1;case 35668:case 35672:return V1;case 35669:case 35673:return X1;case 5125:return k1;case 36294:return W1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Q1}}function $1(o,t){o.uniform1fv(this.addr,t)}function tE(o,t){const i=Ps(t,this.size,2);o.uniform2fv(this.addr,i)}function eE(o,t){const i=Ps(t,this.size,3);o.uniform3fv(this.addr,i)}function nE(o,t){const i=Ps(t,this.size,4);o.uniform4fv(this.addr,i)}function iE(o,t){const i=Ps(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function aE(o,t){const i=Ps(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function rE(o,t){const i=Ps(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function sE(o,t){o.uniform1iv(this.addr,t)}function oE(o,t){o.uniform2iv(this.addr,t)}function lE(o,t){o.uniform3iv(this.addr,t)}function cE(o,t){o.uniform4iv(this.addr,t)}function uE(o,t){o.uniform1uiv(this.addr,t)}function fE(o,t){o.uniform2uiv(this.addr,t)}function dE(o,t){o.uniform3uiv(this.addr,t)}function hE(o,t){o.uniform4uiv(this.addr,t)}function pE(o,t,i){const r=this.cache,l=t.length,c=Zc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||d_,c[d])}function mE(o,t,i){const r=this.cache,l=t.length,c=Zc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||p_,c[d])}function xE(o,t,i){const r=this.cache,l=t.length,c=Zc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||m_,c[d])}function gE(o,t,i){const r=this.cache,l=t.length,c=Zc(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||h_,c[d])}function _E(o){switch(o){case 5126:return $1;case 35664:return tE;case 35665:return eE;case 35666:return nE;case 35674:return iE;case 35675:return aE;case 35676:return rE;case 5124:case 35670:return sE;case 35667:case 35671:return oE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return fE;case 36295:return dE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return gE}}class vE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=J1(i.type)}}class SE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_E(i.type)}}class yE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(t,i[p.id],r)}}}const Bd=/(\w+)(\])?(\[|\.)?/g;function bg(o,t){o.seq.push(t),o.map[t.id]=t}function ME(o,t,i){const r=o.name,l=r.length;for(Bd.lastIndex=0;;){const c=Bd.exec(r),d=Bd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){bg(i,h===void 0?new vE(p,o,t):new SE(p,o,t));break}else{let g=i.map[p];g===void 0&&(g=new yE(p),bg(i,g)),i=g}}}class Ic{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);ME(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=r[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Eg(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const bE=37297;let EE=0;function TE(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const p=d+1;r.push(`${p===t?">":" "} ${p}: ${i[d]}`)}return r.join(`
`)}const Tg=new me;function AE(o){Ne._getMatrix(Tg,Ne.workingColorSpace,o);const t=`mat3( ${Tg.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Hc:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Ag(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+TE(o.getShaderSource(t),p)}else return c}function RE(o,t){const i=AE(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function CE(o,t){let i;switch(t){case sy:i="Linear";break;case oy:i="Reinhard";break;case ly:i="Cineon";break;case cy:i="ACESFilmic";break;case fy:i="AgX";break;case dy:i="Neutral";break;case uy:i="Custom";break;default:oe("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Oc=new rt;function wE(){Ne.getLuminanceCoefficients(Oc);const o=Oc.x.toFixed(4),t=Oc.y.toFixed(4),i=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function UE(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function LE(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:p}}return i}function Vo(o){return o!==""}function Rg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const NE=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(o){return o.replace(NE,zE)}const OE=new Map;function zE(o,t){let i=xe[t];if(i===void 0){const r=OE.get(t);if(r!==void 0)i=xe[r],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return wh(i)}const PE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(o){return o.replace(PE,FE)}function FE(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Dg(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function BE(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Fg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===IS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function IE(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ws:case Ds:t="ENVMAP_TYPE_CUBE";break;case Wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function HE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ds:t="ENVMAP_MODE_REFRACTION";break}return t}function GE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Bg:t="ENVMAP_BLENDING_MULTIPLY";break;case ay:t="ENVMAP_BLENDING_MIX";break;case ry:t="ENVMAP_BLENDING_ADD";break}return t}function VE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function XE(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=BE(i),h=IE(i),x=HE(i),g=GE(i),v=VE(i),M=DE(i),b=UE(c),A=l.createProgram();let y,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Vo).join(`
`),S.length>0&&(S+=`
`)):(y=[Dg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),S=[Dg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pa?"#define TONE_MAPPING":"",i.toneMapping!==pa?xe.tonemapping_pars_fragment:"",i.toneMapping!==pa?CE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xe.colorspace_pars_fragment,RE("linearToOutputTexel",i.outputColorSpace),wE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Vo).join(`
`)),d=wh(d),d=Rg(d,i),d=Cg(d,i),p=wh(p),p=Rg(p,i),p=Cg(p,i),d=wg(d),p=wg(p),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===Bx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Bx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const U=P+y+d,F=P+S+p,V=Eg(l,l.VERTEX_SHADER,U),D=Eg(l,l.FRAGMENT_SHADER,F);l.attachShader(A,V),l.attachShader(A,D),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function O(H){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(V)||"",dt=l.getShaderInfoLog(D)||"",ut=K.trim(),z=ot.trim(),Y=dt.trim();let k=!0,St=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,V,D);else{const bt=Ag(l,V,"vertex"),N=Ag(l,D,"fragment");tn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ut+`
`+bt+`
`+N)}else ut!==""?oe("WebGLProgram: Program Info Log:",ut):(z===""||Y==="")&&(St=!1);St&&(H.diagnostics={runnable:k,programLog:ut,vertexShader:{log:z,prefix:y},fragmentShader:{log:Y,prefix:S}})}l.deleteShader(V),l.deleteShader(D),Z=new Ic(l,A),w=LE(l,A)}let Z;this.getUniforms=function(){return Z===void 0&&O(this),Z};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,bE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=EE++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=D,this}let kE=0;class WE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new qE(t),i.set(t,r)),r}}class qE{constructor(t){this.id=kE++,this.code=t,this.usedTimes=0}}function YE(o,t,i,r,l,c,d){const p=new Gh,m=new WE,h=new Set,x=[],g=l.logarithmicDepthBuffer,v=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return h.add(w),w===0?"uv":`uv${w}`}function y(w,C,H,K,ot){const dt=K.fog,ut=ot.geometry,z=w.isMeshStandardMaterial?K.environment:null,Y=(w.isMeshStandardMaterial?i:t).get(w.envMap||z),k=Y&&Y.mapping===Wc?Y.image.height:null,St=b[w.type];w.precision!==null&&(M=l.getMaxPrecision(w.precision),M!==w.precision&&oe("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const bt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,N=bt!==void 0?bt.length:0;let nt=0;ut.morphAttributes.position!==void 0&&(nt=1),ut.morphAttributes.normal!==void 0&&(nt=2),ut.morphAttributes.color!==void 0&&(nt=3);let yt,At,Pt,tt;if(St){const we=Li[St];yt=we.vertexShader,At=we.fragmentShader}else yt=w.vertexShader,At=w.fragmentShader,m.update(w),Pt=m.getVertexShaderID(w),tt=m.getFragmentShaderID(w);const lt=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),It=ot.isInstancedMesh===!0,qt=ot.isBatchedMesh===!0,le=!!w.map,Je=!!w.matcap,ue=!!Y,Ae=!!w.aoMap,I=!!w.lightMap,fe=!!w.bumpMap,ce=!!w.normalMap,Oe=!!w.displacementMap,Xt=!!w.emissiveMap,Pe=!!w.metalnessMap,Zt=!!w.roughnessMap,ae=w.anisotropy>0,L=w.clearcoat>0,E=w.dispersion>0,Q=w.iridescence>0,gt=w.sheen>0,Et=w.transmission>0,ft=ae&&!!w.anisotropyMap,Mt=L&&!!w.clearcoatMap,vt=L&&!!w.clearcoatNormalMap,Nt=L&&!!w.clearcoatRoughnessMap,Ft=Q&&!!w.iridescenceMap,it=Q&&!!w.iridescenceThicknessMap,ht=gt&&!!w.sheenColorMap,Ot=gt&&!!w.sheenRoughnessMap,zt=!!w.specularMap,Lt=!!w.specularColorMap,Kt=!!w.specularIntensityMap,G=Et&&!!w.transmissionMap,wt=Et&&!!w.thicknessMap,Rt=!!w.gradientMap,Ct=!!w.alphaMap,Tt=w.alphaTest>0,mt=!!w.alphaHash,Gt=!!w.extensions;let re=pa;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(re=o.toneMapping);const Ge={shaderID:St,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:At,defines:w.defines,customVertexShaderID:Pt,customFragmentShaderID:tt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:qt,batchingColor:qt&&ot._colorsTexture!==null,instancing:It,instancingColor:It&&ot.instanceColor!==null,instancingMorph:It&&ot.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Us,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:Je,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:k,aoMap:Ae,lightMap:I,bumpMap:fe,normalMap:ce,displacementMap:v&&Oe,emissiveMap:Xt,normalMapObjectSpace:ce&&w.normalMapType===xy,normalMapTangentSpace:ce&&w.normalMapType===Yg,metalnessMap:Pe,roughnessMap:Zt,anisotropy:ae,anisotropyMap:ft,clearcoat:L,clearcoatMap:Mt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Nt,dispersion:E,iridescence:Q,iridescenceMap:Ft,iridescenceThicknessMap:it,sheen:gt,sheenColorMap:ht,sheenRoughnessMap:Ot,specularMap:zt,specularColorMap:Lt,specularIntensityMap:Kt,transmission:Et,transmissionMap:G,thicknessMap:wt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===As&&w.alphaToCoverage===!1,alphaMap:Ct,alphaTest:Tt,alphaHash:mt,combine:w.combine,mapUv:le&&A(w.map.channel),aoMapUv:Ae&&A(w.aoMap.channel),lightMapUv:I&&A(w.lightMap.channel),bumpMapUv:fe&&A(w.bumpMap.channel),normalMapUv:ce&&A(w.normalMap.channel),displacementMapUv:Oe&&A(w.displacementMap.channel),emissiveMapUv:Xt&&A(w.emissiveMap.channel),metalnessMapUv:Pe&&A(w.metalnessMap.channel),roughnessMapUv:Zt&&A(w.roughnessMap.channel),anisotropyMapUv:ft&&A(w.anisotropyMap.channel),clearcoatMapUv:Mt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:vt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:it&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&A(w.sheenRoughnessMap.channel),specularMapUv:zt&&A(w.specularMap.channel),specularColorMapUv:Lt&&A(w.specularColorMap.channel),specularIntensityMapUv:Kt&&A(w.specularIntensityMap.channel),transmissionMapUv:G&&A(w.transmissionMap.channel),thicknessMapUv:wt&&A(w.thicknessMap.channel),alphaMapUv:Ct&&A(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(ce||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ut.attributes.uv&&(le||Ct),fog:!!dt,useFog:w.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Dt,skinning:ot.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&Ne.getTransfer(w.map.colorSpace)===We,decodeVideoTextureEmissive:Xt&&w.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(w.emissiveMap.colorSpace)===We,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ua,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||qt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ge.vertexUv1s=h.has(1),Ge.vertexUv2s=h.has(2),Ge.vertexUv3s=h.has(3),h.clear(),Ge}function S(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const H in w.defines)C.push(H),C.push(w.defines[H]);return w.isRawShaderMaterial===!1&&(P(C,w),U(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function P(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){p.disableAll(),C.supportsVertexTextures&&p.enable(0),C.instancing&&p.enable(1),C.instancingColor&&p.enable(2),C.instancingMorph&&p.enable(3),C.matcap&&p.enable(4),C.envMap&&p.enable(5),C.normalMapObjectSpace&&p.enable(6),C.normalMapTangentSpace&&p.enable(7),C.clearcoat&&p.enable(8),C.iridescence&&p.enable(9),C.alphaTest&&p.enable(10),C.vertexColors&&p.enable(11),C.vertexAlphas&&p.enable(12),C.vertexUv1s&&p.enable(13),C.vertexUv2s&&p.enable(14),C.vertexUv3s&&p.enable(15),C.vertexTangents&&p.enable(16),C.anisotropy&&p.enable(17),C.alphaHash&&p.enable(18),C.batching&&p.enable(19),C.dispersion&&p.enable(20),C.batchingColor&&p.enable(21),C.gradientMap&&p.enable(22),w.push(p.mask),p.disableAll(),C.fog&&p.enable(0),C.useFog&&p.enable(1),C.flatShading&&p.enable(2),C.logarithmicDepthBuffer&&p.enable(3),C.reversedDepthBuffer&&p.enable(4),C.skinning&&p.enable(5),C.morphTargets&&p.enable(6),C.morphNormals&&p.enable(7),C.morphColors&&p.enable(8),C.premultipliedAlpha&&p.enable(9),C.shadowMapEnabled&&p.enable(10),C.doubleSided&&p.enable(11),C.flipSided&&p.enable(12),C.useDepthPacking&&p.enable(13),C.dithering&&p.enable(14),C.transmission&&p.enable(15),C.sheen&&p.enable(16),C.opaque&&p.enable(17),C.pointsUvs&&p.enable(18),C.decodeVideoTexture&&p.enable(19),C.decodeVideoTextureEmissive&&p.enable(20),C.alphaToCoverage&&p.enable(21),w.push(p.mask)}function F(w){const C=b[w.type];let H;if(C){const K=Li[C];H=sM.clone(K.uniforms)}else H=w.uniforms;return H}function V(w,C){let H;for(let K=0,ot=x.length;K<ot;K++){const dt=x[K];if(dt.cacheKey===C){H=dt,++H.usedTimes;break}}return H===void 0&&(H=new XE(o,C,w,c),x.push(H)),H}function D(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function O(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:F,acquireProgram:V,releaseProgram:D,releaseShaderCache:O,programs:x,dispose:Z}}function jE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function r(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function ZE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ug(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Lg(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g,v,M,b,A,y){let S=o[t];return S===void 0?(S={id:g.id,object:g,geometry:v,material:M,groupOrder:b,renderOrder:g.renderOrder,z:A,group:y},o[t]=S):(S.id=g.id,S.object=g,S.geometry=v,S.material=M,S.groupOrder=b,S.renderOrder=g.renderOrder,S.z=A,S.group=y),t++,S}function p(g,v,M,b,A,y){const S=d(g,v,M,b,A,y);M.transmission>0?r.push(S):M.transparent===!0?l.push(S):i.push(S)}function m(g,v,M,b,A,y){const S=d(g,v,M,b,A,y);M.transmission>0?r.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function h(g,v){i.length>1&&i.sort(g||ZE),r.length>1&&r.sort(v||Ug),l.length>1&&l.sort(v||Ug)}function x(){for(let g=t,v=o.length;g<v;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:x,sort:h}}function KE(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new Lg,o.set(r,[d])):l>=c.length?(d=new Lg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function QE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new Ce};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[t.id]=i,i}}}function JE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let $E=0;function tT(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function eT(o){const t=new QE,i=JE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new rt);const l=new rt,c=new en,d=new en;function p(h){let x=0,g=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,b=0,A=0,y=0,S=0,P=0,U=0,F=0,V=0,D=0,O=0;h.sort(tT);for(let w=0,C=h.length;w<C;w++){const H=h[w],K=H.color,ot=H.intensity,dt=H.distance,ut=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=K.r*ot,g+=K.g*ot,v+=K.b*ot;else if(H.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(H.sh.coefficients[z],ot);O++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,k=i.get(H);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,r.directionalShadow[M]=k,r.directionalShadowMap[M]=ut,r.directionalShadowMatrix[M]=H.shadow.matrix,P++}r.directional[M]=z,M++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(K).multiplyScalar(ot),z.distance=dt,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,r.spot[A]=z;const Y=H.shadow;if(H.map&&(r.spotLightMap[V]=H.map,V++,Y.updateMatrices(H),H.castShadow&&D++),r.spotLightMatrix[A]=Y.matrix,H.castShadow){const k=i.get(H);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,r.spotShadow[A]=k,r.spotShadowMap[A]=ut,F++}A++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy(K).multiplyScalar(ot),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=z,y++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const Y=H.shadow,k=i.get(H);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,r.pointShadow[b]=k,r.pointShadowMap[b]=ut,r.pointShadowMatrix[b]=H.shadow.matrix,U++}r.point[b]=z,b++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(ot),z.groundColor.copy(H.groundColor).multiplyScalar(ot),r.hemi[S]=z,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ht.LTC_FLOAT_1,r.rectAreaLTC2=Ht.LTC_FLOAT_2):(r.rectAreaLTC1=Ht.LTC_HALF_1,r.rectAreaLTC2=Ht.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=v;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==b||Z.spotLength!==A||Z.rectAreaLength!==y||Z.hemiLength!==S||Z.numDirectionalShadows!==P||Z.numPointShadows!==U||Z.numSpotShadows!==F||Z.numSpotMaps!==V||Z.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=b,r.hemi.length=S,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=F+V-D,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,Z.directionalLength=M,Z.pointLength=b,Z.spotLength=A,Z.rectAreaLength=y,Z.hemiLength=S,Z.numDirectionalShadows=P,Z.numPointShadows=U,Z.numSpotShadows=F,Z.numSpotMaps=V,Z.numLightProbes=O,r.version=$E++)}function m(h,x){let g=0,v=0,M=0,b=0,A=0;const y=x.matrixWorldInverse;for(let S=0,P=h.length;S<P;S++){const U=h[S];if(U.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(y),g++}else if(U.isSpotLight){const F=r.spot[M];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(y),M++}else if(U.isRectAreaLight){const F=r.rectArea[b];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(y),d.identity(),c.copy(U.matrixWorld),c.premultiply(y),d.extractRotation(c),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),b++}else if(U.isPointLight){const F=r.point[v];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(y),v++}else if(U.isHemisphereLight){const F=r.hemi[A];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(y),A++}}}return{setup:p,setupView:m,state:r}}function Ng(o){const t=new eT(o),i=[],r=[];function l(x){h.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const h={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:d}}function nT(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let p;return d===void 0?(p=new Ng(o),t.set(l,[p])):c>=d.length?(p=new Ng(o),d.push(p)):p=d[c],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const iT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aT=`uniform sampler2D shadow_pass;
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
}`;function rT(o,t,i){let r=new Vh;const l=new ge,c=new ge,d=new rn,p=new yM({depthPacking:my}),m=new MM,h={},x=i.maxTextureSize,g={[$a]:Wn,[Wn]:$a,[ua]:ua},v=new va({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:iT,fragmentShader:aT}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ai;b.setAttribute("position",new qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new _a(b,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fg;let S=this.type;this.render=function(D,O,Z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),K=o.state;K.setBlending(ha),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ot=S!==ca&&this.type===ca,dt=S===ca&&this.type!==ca;for(let ut=0,z=D.length;ut<z;ut++){const Y=D[ut],k=Y.shadow;if(k===void 0){oe("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const St=k.getFrameExtents();if(l.multiply(St),c.copy(k.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/St.x),l.x=c.x*St.x,k.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/St.y),l.y=c.y*St.y,k.mapSize.y=c.y)),k.map===null||ot===!0||dt===!0){const N=this.type!==ca?{minFilter:ai,magFilter:ai}:{};k.map!==null&&k.map.dispose(),k.map=new wr(l.x,l.y,N),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const bt=k.getViewportCount();for(let N=0;N<bt;N++){const nt=k.getViewport(N);d.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),K.viewport(d),k.updateMatrices(Y,N),r=k.getFrustum(),F(O,Z,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===ca&&P(k,Z),k.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,H)};function P(D,O){const Z=t.update(A);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new wr(l.x,l.y)),v.uniforms.shadow_pass.value=D.map.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(O,null,Z,v,A,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(O,null,Z,M,A,null)}function U(D,O,Z,w){let C=null;const H=Z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(H!==void 0)C=H;else if(C=Z.isPointLight===!0?m:p,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=C.uuid,ot=O.uuid;let dt=h[K];dt===void 0&&(dt={},h[K]=dt);let ut=dt[ot];ut===void 0&&(ut=C.clone(),dt[ot]=ut,O.addEventListener("dispose",V)),C=ut}if(C.visible=O.visible,C.wireframe=O.wireframe,w===ca?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:g[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=o.properties.get(C);K.light=Z}return C}function F(D,O,Z,w,C){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&C===ca)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,D.matrixWorld);const ot=t.update(D),dt=D.material;if(Array.isArray(dt)){const ut=ot.groups;for(let z=0,Y=ut.length;z<Y;z++){const k=ut[z],St=dt[k.materialIndex];if(St&&St.visible){const bt=U(D,St,w,C);D.onBeforeShadow(o,D,O,Z,ot,bt,k),o.renderBufferDirect(Z,null,ot,bt,D,k),D.onAfterShadow(o,D,O,Z,ot,bt,k)}}}else if(dt.visible){const ut=U(D,dt,w,C);D.onBeforeShadow(o,D,O,Z,ot,ut,null),o.renderBufferDirect(Z,null,ot,ut,D,null),D.onAfterShadow(o,D,O,Z,ot,ut,null)}}const K=D.children;for(let ot=0,dt=K.length;ot<dt;ot++)F(K[ot],O,Z,w,C)}function V(D){D.target.removeEventListener("dispose",V);for(const Z in h){const w=h[Z],C=D.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const sT={[Vd]:Xd,[kd]:Yd,[Wd]:jd,[Cs]:qd,[Xd]:Vd,[Yd]:kd,[jd]:Wd,[qd]:Cs};function oT(o,t){function i(){let G=!1;const wt=new rn;let Rt=null;const Ct=new rn(0,0,0,0);return{setMask:function(Tt){Rt!==Tt&&!G&&(o.colorMask(Tt,Tt,Tt,Tt),Rt=Tt)},setLocked:function(Tt){G=Tt},setClear:function(Tt,mt,Gt,re,Ge){Ge===!0&&(Tt*=re,mt*=re,Gt*=re),wt.set(Tt,mt,Gt,re),Ct.equals(wt)===!1&&(o.clearColor(Tt,mt,Gt,re),Ct.copy(wt))},reset:function(){G=!1,Rt=null,Ct.set(-1,0,0,0)}}}function r(){let G=!1,wt=!1,Rt=null,Ct=null,Tt=null;return{setReversed:function(mt){if(wt!==mt){const Gt=t.get("EXT_clip_control");mt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),wt=mt;const re=Tt;Tt=null,this.setClear(re)}},getReversed:function(){return wt},setTest:function(mt){mt?lt(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(mt){Rt!==mt&&!G&&(o.depthMask(mt),Rt=mt)},setFunc:function(mt){if(wt&&(mt=sT[mt]),Ct!==mt){switch(mt){case Vd:o.depthFunc(o.NEVER);break;case Xd:o.depthFunc(o.ALWAYS);break;case kd:o.depthFunc(o.LESS);break;case Cs:o.depthFunc(o.LEQUAL);break;case Wd:o.depthFunc(o.EQUAL);break;case qd:o.depthFunc(o.GEQUAL);break;case Yd:o.depthFunc(o.GREATER);break;case jd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ct=mt}},setLocked:function(mt){G=mt},setClear:function(mt){Tt!==mt&&(wt&&(mt=1-mt),o.clearDepth(mt),Tt=mt)},reset:function(){G=!1,Rt=null,Ct=null,Tt=null,wt=!1}}}function l(){let G=!1,wt=null,Rt=null,Ct=null,Tt=null,mt=null,Gt=null,re=null,Ge=null;return{setTest:function(we){G||(we?lt(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(we){wt!==we&&!G&&(o.stencilMask(we),wt=we)},setFunc:function(we,Dn,Yn){(Rt!==we||Ct!==Dn||Tt!==Yn)&&(o.stencilFunc(we,Dn,Yn),Rt=we,Ct=Dn,Tt=Yn)},setOp:function(we,Dn,Yn){(mt!==we||Gt!==Dn||re!==Yn)&&(o.stencilOp(we,Dn,Yn),mt=we,Gt=Dn,re=Yn)},setLocked:function(we){G=we},setClear:function(we){Ge!==we&&(o.clearStencil(we),Ge=we)},reset:function(){G=!1,wt=null,Rt=null,Ct=null,Tt=null,mt=null,Gt=null,re=null,Ge=null}}}const c=new i,d=new r,p=new l,m=new WeakMap,h=new WeakMap;let x={},g={},v=new WeakMap,M=[],b=null,A=!1,y=null,S=null,P=null,U=null,F=null,V=null,D=null,O=new Ce(0,0,0),Z=0,w=!1,C=null,H=null,K=null,ot=null,dt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,Y=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=Y>=2);let St=null,bt={};const N=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),yt=new rn().fromArray(N),At=new rn().fromArray(nt);function Pt(G,wt,Rt,Ct){const Tt=new Uint8Array(4),mt=o.createTexture();o.bindTexture(G,mt),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Rt;Gt++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(wt+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return mt}const tt={};tt[o.TEXTURE_2D]=Pt(o.TEXTURE_2D,o.TEXTURE_2D,1),tt[o.TEXTURE_CUBE_MAP]=Pt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[o.TEXTURE_2D_ARRAY]=Pt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),tt[o.TEXTURE_3D]=Pt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),lt(o.DEPTH_TEST),d.setFunc(Cs),fe(!1),ce(Ox),lt(o.CULL_FACE),Ae(ha);function lt(G){x[G]!==!0&&(o.enable(G),x[G]=!0)}function Dt(G){x[G]!==!1&&(o.disable(G),x[G]=!1)}function It(G,wt){return g[G]!==wt?(o.bindFramebuffer(G,wt),g[G]=wt,G===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=wt),G===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function qt(G,wt){let Rt=M,Ct=!1;if(G){Rt=v.get(wt),Rt===void 0&&(Rt=[],v.set(wt,Rt));const Tt=G.textures;if(Rt.length!==Tt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let mt=0,Gt=Tt.length;mt<Gt;mt++)Rt[mt]=o.COLOR_ATTACHMENT0+mt;Rt.length=Tt.length,Ct=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Ct=!0);Ct&&o.drawBuffers(Rt)}function le(G){return b!==G?(o.useProgram(G),b=G,!0):!1}const Je={[Tr]:o.FUNC_ADD,[GS]:o.FUNC_SUBTRACT,[VS]:o.FUNC_REVERSE_SUBTRACT};Je[XS]=o.MIN,Je[kS]=o.MAX;const ue={[WS]:o.ZERO,[qS]:o.ONE,[YS]:o.SRC_COLOR,[Hd]:o.SRC_ALPHA,[$S]:o.SRC_ALPHA_SATURATE,[QS]:o.DST_COLOR,[ZS]:o.DST_ALPHA,[jS]:o.ONE_MINUS_SRC_COLOR,[Gd]:o.ONE_MINUS_SRC_ALPHA,[JS]:o.ONE_MINUS_DST_COLOR,[KS]:o.ONE_MINUS_DST_ALPHA,[ty]:o.CONSTANT_COLOR,[ey]:o.ONE_MINUS_CONSTANT_COLOR,[ny]:o.CONSTANT_ALPHA,[iy]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(G,wt,Rt,Ct,Tt,mt,Gt,re,Ge,we){if(G===ha){A===!0&&(Dt(o.BLEND),A=!1);return}if(A===!1&&(lt(o.BLEND),A=!0),G!==HS){if(G!==y||we!==w){if((S!==Tr||F!==Tr)&&(o.blendEquation(o.FUNC_ADD),S=Tr,F=Tr),we)switch(G){case As:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Id:o.blendFunc(o.ONE,o.ONE);break;case zx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Px:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:tn("WebGLState: Invalid blending: ",G);break}else switch(G){case As:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Id:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case zx:tn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Px:tn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tn("WebGLState: Invalid blending: ",G);break}P=null,U=null,V=null,D=null,O.set(0,0,0),Z=0,y=G,w=we}return}Tt=Tt||wt,mt=mt||Rt,Gt=Gt||Ct,(wt!==S||Tt!==F)&&(o.blendEquationSeparate(Je[wt],Je[Tt]),S=wt,F=Tt),(Rt!==P||Ct!==U||mt!==V||Gt!==D)&&(o.blendFuncSeparate(ue[Rt],ue[Ct],ue[mt],ue[Gt]),P=Rt,U=Ct,V=mt,D=Gt),(re.equals(O)===!1||Ge!==Z)&&(o.blendColor(re.r,re.g,re.b,Ge),O.copy(re),Z=Ge),y=G,w=!1}function I(G,wt){G.side===ua?Dt(o.CULL_FACE):lt(o.CULL_FACE);let Rt=G.side===Wn;wt&&(Rt=!Rt),fe(Rt),G.blending===As&&G.transparent===!1?Ae(ha):Ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const Ct=G.stencilWrite;p.setTest(Ct),Ct&&(p.setMask(G.stencilWriteMask),p.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),p.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Xt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function fe(G){C!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),C=G)}function ce(G){G!==FS?(lt(o.CULL_FACE),G!==H&&(G===Ox?o.cullFace(o.BACK):G===BS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),H=G}function Oe(G){G!==K&&(z&&o.lineWidth(G),K=G)}function Xt(G,wt,Rt){G?(lt(o.POLYGON_OFFSET_FILL),(ot!==wt||dt!==Rt)&&(o.polygonOffset(wt,Rt),ot=wt,dt=Rt)):Dt(o.POLYGON_OFFSET_FILL)}function Pe(G){G?lt(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Zt(G){G===void 0&&(G=o.TEXTURE0+ut-1),St!==G&&(o.activeTexture(G),St=G)}function ae(G,wt,Rt){Rt===void 0&&(St===null?Rt=o.TEXTURE0+ut-1:Rt=St);let Ct=bt[Rt];Ct===void 0&&(Ct={type:void 0,texture:void 0},bt[Rt]=Ct),(Ct.type!==G||Ct.texture!==wt)&&(St!==Rt&&(o.activeTexture(Rt),St=Rt),o.bindTexture(G,wt||tt[G]),Ct.type=G,Ct.texture=wt)}function L(){const G=bt[St];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function gt(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Et(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Mt(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function vt(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Nt(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ft(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function it(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ht(G){yt.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),yt.copy(G))}function Ot(G){At.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),At.copy(G))}function zt(G,wt){let Rt=h.get(wt);Rt===void 0&&(Rt=new WeakMap,h.set(wt,Rt));let Ct=Rt.get(G);Ct===void 0&&(Ct=o.getUniformBlockIndex(wt,G.name),Rt.set(G,Ct))}function Lt(G,wt){const Ct=h.get(wt).get(G);m.get(wt)!==Ct&&(o.uniformBlockBinding(wt,Ct,G.__bindingPointIndex),m.set(wt,Ct))}function Kt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},St=null,bt={},g={},v=new WeakMap,M=[],b=null,A=!1,y=null,S=null,P=null,U=null,F=null,V=null,D=null,O=new Ce(0,0,0),Z=0,w=!1,C=null,H=null,K=null,ot=null,dt=null,yt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:lt,disable:Dt,bindFramebuffer:It,drawBuffers:qt,useProgram:le,setBlending:Ae,setMaterial:I,setFlipSided:fe,setCullFace:ce,setLineWidth:Oe,setPolygonOffset:Xt,setScissorTest:Pe,activeTexture:Zt,bindTexture:ae,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:Q,texImage2D:Ft,texImage3D:it,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:vt,texStorage3D:Nt,texSubImage2D:gt,texSubImage3D:Et,compressedTexSubImage2D:ft,compressedTexSubImage3D:Mt,scissor:ht,viewport:Ot,reset:Kt}}function lT(o,t,i,r,l,c,d){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ge,x=new WeakMap;let g;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return M?new OffscreenCanvas(L,E):Vc("canvas")}function A(L,E,Q){let gt=1;const Et=ae(L);if((Et.width>Q||Et.height>Q)&&(gt=Q/Math.max(Et.width,Et.height)),gt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ft=Math.floor(gt*Et.width),Mt=Math.floor(gt*Et.height);g===void 0&&(g=b(ft,Mt));const vt=E?b(ft,Mt):g;return vt.width=ft,vt.height=Mt,vt.getContext("2d").drawImage(L,0,0,ft,Mt),oe("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ft+"x"+Mt+")."),vt}else return"data"in L&&oe("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function y(L){return L.generateMipmaps}function S(L){o.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(L,E,Q,gt,Et=!1){if(L!==null){if(o[L]!==void 0)return o[L];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ft=E;if(E===o.RED&&(Q===o.FLOAT&&(ft=o.R32F),Q===o.HALF_FLOAT&&(ft=o.R16F),Q===o.UNSIGNED_BYTE&&(ft=o.R8)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.R8UI),Q===o.UNSIGNED_SHORT&&(ft=o.R16UI),Q===o.UNSIGNED_INT&&(ft=o.R32UI),Q===o.BYTE&&(ft=o.R8I),Q===o.SHORT&&(ft=o.R16I),Q===o.INT&&(ft=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(ft=o.RG32F),Q===o.HALF_FLOAT&&(ft=o.RG16F),Q===o.UNSIGNED_BYTE&&(ft=o.RG8)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RG16UI),Q===o.UNSIGNED_INT&&(ft=o.RG32UI),Q===o.BYTE&&(ft=o.RG8I),Q===o.SHORT&&(ft=o.RG16I),Q===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),Q===o.UNSIGNED_INT&&(ft=o.RGB32UI),Q===o.BYTE&&(ft=o.RGB8I),Q===o.SHORT&&(ft=o.RGB16I),Q===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ft=o.RGBA32UI),Q===o.BYTE&&(ft=o.RGBA8I),Q===o.SHORT&&(ft=o.RGBA16I),Q===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),E===o.RGBA){const Mt=Et?Hc:Ne.getTransfer(gt);Q===o.FLOAT&&(ft=o.RGBA32F),Q===o.HALF_FLOAT&&(ft=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ft=Mt===We?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function F(L,E){let Q;return L?E===null||E===Cr||E===qo?Q=o.DEPTH24_STENCIL8:E===da?Q=o.DEPTH32F_STENCIL8:E===Wo&&(Q=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Cr||E===qo?Q=o.DEPTH_COMPONENT24:E===da?Q=o.DEPTH_COMPONENT32F:E===Wo&&(Q=o.DEPTH_COMPONENT16),Q}function V(L,E){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==ai&&L.minFilter!==xi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function D(L){const E=L.target;E.removeEventListener("dispose",D),Z(E),E.isVideoTexture&&x.delete(E)}function O(L){const E=L.target;E.removeEventListener("dispose",O),C(E)}function Z(L){const E=r.get(L);if(E.__webglInit===void 0)return;const Q=L.source,gt=v.get(Q);if(gt){const Et=gt[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&w(L),Object.keys(gt).length===0&&v.delete(Q)}r.remove(L)}function w(L){const E=r.get(L);o.deleteTexture(E.__webglTexture);const Q=L.source,gt=v.get(Q);delete gt[E.__cacheKey],d.memory.textures--}function C(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(E.__webglFramebuffer[gt]))for(let Et=0;Et<E.__webglFramebuffer[gt].length;Et++)o.deleteFramebuffer(E.__webglFramebuffer[gt][Et]);else o.deleteFramebuffer(E.__webglFramebuffer[gt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[gt])}else{if(Array.isArray(E.__webglFramebuffer))for(let gt=0;gt<E.__webglFramebuffer.length;gt++)o.deleteFramebuffer(E.__webglFramebuffer[gt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let gt=0;gt<E.__webglColorRenderbuffer.length;gt++)E.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[gt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=L.textures;for(let gt=0,Et=Q.length;gt<Et;gt++){const ft=r.get(Q[gt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),d.memory.textures--),r.remove(Q[gt])}r.remove(L)}let H=0;function K(){H=0}function ot(){const L=H;return L>=l.maxTextures&&oe("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function dt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ut(L,E){const Q=r.get(L);if(L.isVideoTexture&&Pe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Q.__version!==L.version){const gt=L.image;if(gt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(Q,L,E);return}}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function z(L,E){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){tt(Q,L,E);return}else L.isExternalTexture&&(Q.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function Y(L,E){const Q=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Q.__version!==L.version){tt(Q,L,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function k(L,E){const Q=r.get(L);if(L.version>0&&Q.__version!==L.version){lt(Q,L,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const St={[Qd]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[Jd]:o.MIRRORED_REPEAT},bt={[ai]:o.NEAREST,[hy]:o.NEAREST_MIPMAP_NEAREST,[fc]:o.NEAREST_MIPMAP_LINEAR,[xi]:o.LINEAR,[cd]:o.LINEAR_MIPMAP_NEAREST,[Rr]:o.LINEAR_MIPMAP_LINEAR},N={[gy]:o.NEVER,[by]:o.ALWAYS,[_y]:o.LESS,[jg]:o.LEQUAL,[vy]:o.EQUAL,[My]:o.GEQUAL,[Sy]:o.GREATER,[yy]:o.NOTEQUAL};function nt(L,E){if(E.type===da&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===xi||E.magFilter===cd||E.magFilter===fc||E.magFilter===Rr||E.minFilter===xi||E.minFilter===cd||E.minFilter===fc||E.minFilter===Rr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,St[E.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,St[E.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,St[E.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,bt[E.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,bt[E.minFilter]),E.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ai||E.minFilter!==fc&&E.minFilter!==Rr||E.type===da&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function yt(L,E){let Q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",D));const gt=E.source;let Et=v.get(gt);Et===void 0&&(Et={},v.set(gt,Et));const ft=dt(E);if(ft!==L.__cacheKey){Et[ft]===void 0&&(Et[ft]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Et[ft].usedTimes++;const Mt=Et[L.__cacheKey];Mt!==void 0&&(Et[L.__cacheKey].usedTimes--,Mt.usedTimes===0&&w(E)),L.__cacheKey=ft,L.__webglTexture=Et[ft].texture}return Q}function At(L,E,Q){return Math.floor(Math.floor(L/Q)/E)}function Pt(L,E,Q,gt){const ft=L.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,gt,E.data);else{ft.sort((it,ht)=>it.start-ht.start);let Mt=0;for(let it=1;it<ft.length;it++){const ht=ft[Mt],Ot=ft[it],zt=ht.start+ht.count,Lt=At(Ot.start,E.width,4),Kt=At(ht.start,E.width,4);Ot.start<=zt+1&&Lt===Kt&&At(Ot.start+Ot.count-1,E.width,4)===Lt?ht.count=Math.max(ht.count,Ot.start+Ot.count-ht.start):(++Mt,ft[Mt]=Ot)}ft.length=Mt+1;const vt=o.getParameter(o.UNPACK_ROW_LENGTH),Nt=o.getParameter(o.UNPACK_SKIP_PIXELS),Ft=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let it=0,ht=ft.length;it<ht;it++){const Ot=ft[it],zt=Math.floor(Ot.start/4),Lt=Math.ceil(Ot.count/4),Kt=zt%E.width,G=Math.floor(zt/E.width),wt=Lt,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,Kt,G,wt,Rt,Q,gt,E.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,vt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ft)}}function tt(L,E,Q){let gt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=o.TEXTURE_3D);const Et=yt(L,E),ft=E.source;i.bindTexture(gt,L.__webglTexture,o.TEXTURE0+Q);const Mt=r.get(ft);if(ft.version!==Mt.__version||Et===!0){i.activeTexture(o.TEXTURE0+Q);const vt=Ne.getPrimaries(Ne.workingColorSpace),Nt=E.colorSpace===Qa?null:Ne.getPrimaries(E.colorSpace),Ft=E.colorSpace===Qa||vt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);let it=A(E.image,!1,l.maxTextureSize);it=Zt(E,it);const ht=c.convert(E.format,E.colorSpace),Ot=c.convert(E.type);let zt=U(E.internalFormat,ht,Ot,E.colorSpace,E.isVideoTexture);nt(gt,E);let Lt;const Kt=E.mipmaps,G=E.isVideoTexture!==!0,wt=Mt.__version===void 0||Et===!0,Rt=ft.dataReady,Ct=V(E,it);if(E.isDepthTexture)zt=F(E.format===jo,E.type),wt&&(G?i.texStorage2D(o.TEXTURE_2D,1,zt,it.width,it.height):i.texImage2D(o.TEXTURE_2D,0,zt,it.width,it.height,0,ht,Ot,null));else if(E.isDataTexture)if(Kt.length>0){G&&wt&&i.texStorage2D(o.TEXTURE_2D,Ct,zt,Kt[0].width,Kt[0].height);for(let Tt=0,mt=Kt.length;Tt<mt;Tt++)Lt=Kt[Tt],G?Rt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ht,Ot,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,zt,Lt.width,Lt.height,0,ht,Ot,Lt.data);E.generateMipmaps=!1}else G?(wt&&i.texStorage2D(o.TEXTURE_2D,Ct,zt,it.width,it.height),Rt&&Pt(E,it,ht,Ot)):i.texImage2D(o.TEXTURE_2D,0,zt,it.width,it.height,0,ht,Ot,it.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,zt,Kt[0].width,Kt[0].height,it.depth);for(let Tt=0,mt=Kt.length;Tt<mt;Tt++)if(Lt=Kt[Tt],E.format!==Ti)if(ht!==null)if(G){if(Rt)if(E.layerUpdates.size>0){const Gt=ug(Lt.width,Lt.height,E.format,E.type);for(const re of E.layerUpdates){const Ge=Lt.data.subarray(re*Gt/Lt.data.BYTES_PER_ELEMENT,(re+1)*Gt/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,re,Lt.width,Lt.height,1,ht,Ge)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,it.depth,ht,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,zt,Lt.width,Lt.height,it.depth,0,Lt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Lt.width,Lt.height,it.depth,ht,Ot,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,zt,Lt.width,Lt.height,it.depth,0,ht,Ot,Lt.data)}else{G&&wt&&i.texStorage2D(o.TEXTURE_2D,Ct,zt,Kt[0].width,Kt[0].height);for(let Tt=0,mt=Kt.length;Tt<mt;Tt++)Lt=Kt[Tt],E.format!==Ti?ht!==null?G?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ht,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,zt,Lt.width,Lt.height,0,Lt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Rt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Lt.width,Lt.height,ht,Ot,Lt.data):i.texImage2D(o.TEXTURE_2D,Tt,zt,Lt.width,Lt.height,0,ht,Ot,Lt.data)}else if(E.isDataArrayTexture)if(G){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,zt,it.width,it.height,it.depth),Rt)if(E.layerUpdates.size>0){const Tt=ug(it.width,it.height,E.format,E.type);for(const mt of E.layerUpdates){const Gt=it.data.subarray(mt*Tt/it.data.BYTES_PER_ELEMENT,(mt+1)*Tt/it.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,mt,it.width,it.height,1,ht,Ot,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ht,Ot,it.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,zt,it.width,it.height,it.depth,0,ht,Ot,it.data);else if(E.isData3DTexture)G?(wt&&i.texStorage3D(o.TEXTURE_3D,Ct,zt,it.width,it.height,it.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ht,Ot,it.data)):i.texImage3D(o.TEXTURE_3D,0,zt,it.width,it.height,it.depth,0,ht,Ot,it.data);else if(E.isFramebufferTexture){if(wt)if(G)i.texStorage2D(o.TEXTURE_2D,Ct,zt,it.width,it.height);else{let Tt=it.width,mt=it.height;for(let Gt=0;Gt<Ct;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,zt,Tt,mt,0,ht,Ot,null),Tt>>=1,mt>>=1}}else if(Kt.length>0){if(G&&wt){const Tt=ae(Kt[0]);i.texStorage2D(o.TEXTURE_2D,Ct,zt,Tt.width,Tt.height)}for(let Tt=0,mt=Kt.length;Tt<mt;Tt++)Lt=Kt[Tt],G?Rt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,ht,Ot,Lt):i.texImage2D(o.TEXTURE_2D,Tt,zt,ht,Ot,Lt);E.generateMipmaps=!1}else if(G){if(wt){const Tt=ae(it);i.texStorage2D(o.TEXTURE_2D,Ct,zt,Tt.width,Tt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,ht,Ot,it)}else i.texImage2D(o.TEXTURE_2D,0,zt,ht,Ot,it);y(E)&&S(gt),Mt.__version=ft.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function lt(L,E,Q){if(E.image.length!==6)return;const gt=yt(L,E),Et=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+Q);const ft=r.get(Et);if(Et.version!==ft.__version||gt===!0){i.activeTexture(o.TEXTURE0+Q);const Mt=Ne.getPrimaries(Ne.workingColorSpace),vt=E.colorSpace===Qa?null:Ne.getPrimaries(E.colorSpace),Nt=E.colorSpace===Qa||Mt===vt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Ft=E.isCompressedTexture||E.image[0].isCompressedTexture,it=E.image[0]&&E.image[0].isDataTexture,ht=[];for(let mt=0;mt<6;mt++)!Ft&&!it?ht[mt]=A(E.image[mt],!0,l.maxCubemapSize):ht[mt]=it?E.image[mt].image:E.image[mt],ht[mt]=Zt(E,ht[mt]);const Ot=ht[0],zt=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),Kt=U(E.internalFormat,zt,Lt,E.colorSpace),G=E.isVideoTexture!==!0,wt=ft.__version===void 0||gt===!0,Rt=Et.dataReady;let Ct=V(E,Ot);nt(o.TEXTURE_CUBE_MAP,E);let Tt;if(Ft){G&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,Kt,Ot.width,Ot.height);for(let mt=0;mt<6;mt++){Tt=ht[mt].mipmaps;for(let Gt=0;Gt<Tt.length;Gt++){const re=Tt[Gt];E.format!==Ti?zt!==null?G?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt,0,0,re.width,re.height,zt,re.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt,Kt,re.width,re.height,0,re.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt,0,0,re.width,re.height,zt,Lt,re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt,Kt,re.width,re.height,0,zt,Lt,re.data)}}}else{if(Tt=E.mipmaps,G&&wt){Tt.length>0&&Ct++;const mt=ae(ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,Kt,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(it){G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ht[mt].width,ht[mt].height,zt,Lt,ht[mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Kt,ht[mt].width,ht[mt].height,0,zt,Lt,ht[mt].data);for(let Gt=0;Gt<Tt.length;Gt++){const Ge=Tt[Gt].image[mt].image;G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt+1,0,0,Ge.width,Ge.height,zt,Lt,Ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt+1,Kt,Ge.width,Ge.height,0,zt,Lt,Ge.data)}}else{G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,zt,Lt,ht[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Kt,zt,Lt,ht[mt]);for(let Gt=0;Gt<Tt.length;Gt++){const re=Tt[Gt];G?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt+1,0,0,zt,Lt,re.image[mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Gt+1,Kt,zt,Lt,re.image[mt])}}}y(E)&&S(o.TEXTURE_CUBE_MAP),ft.__version=Et.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Dt(L,E,Q,gt,Et,ft){const Mt=c.convert(Q.format,Q.colorSpace),vt=c.convert(Q.type),Nt=U(Q.internalFormat,Mt,vt,Q.colorSpace),Ft=r.get(E),it=r.get(Q);if(it.__renderTarget=E,!Ft.__hasExternalTextures){const ht=Math.max(1,E.width>>ft),Ot=Math.max(1,E.height>>ft);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,ft,Nt,ht,Ot,E.depth,0,Mt,vt,null):i.texImage2D(Et,ft,Nt,ht,Ot,0,Mt,vt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Xt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,Et,it.__webglTexture,0,Oe(E)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,Et,it.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(L,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,L),E.depthBuffer){const gt=E.depthTexture,Et=gt&&gt.isDepthTexture?gt.type:null,ft=F(E.stencilBuffer,Et),Mt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=Oe(E);Xt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,vt,ft,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,vt,ft,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ft,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,L)}else{const gt=E.textures;for(let Et=0;Et<gt.length;Et++){const ft=gt[Et],Mt=c.convert(ft.format,ft.colorSpace),vt=c.convert(ft.type),Nt=U(ft.internalFormat,Mt,vt,ft.colorSpace),Ft=Oe(E);Q&&Xt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ft,Nt,E.width,E.height):Xt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ft,Nt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Nt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function qt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(E.depthTexture);gt.__renderTarget=E,(!gt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ut(E.depthTexture,0);const Et=gt.__webglTexture,ft=Oe(E);if(E.depthTexture.format===Yo)Xt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Et,0);else if(E.depthTexture.format===jo)Xt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function le(L){const E=r.get(L),Q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const gt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),gt){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,gt.removeEventListener("dispose",Et)};gt.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=gt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const gt=L.texture.mipmaps;gt&&gt.length>0?qt(E.__webglFramebuffer[0],L):qt(E.__webglFramebuffer,L)}else if(Q){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]===void 0)E.__webglDepthbuffer[gt]=o.createRenderbuffer(),It(E.__webglDepthbuffer[gt],L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,ft)}}else{const gt=L.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),It(E.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Je(L,E,Q){const gt=r.get(L);E!==void 0&&Dt(gt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&le(L)}function ue(L){const E=L.texture,Q=r.get(L),gt=r.get(E);L.addEventListener("dispose",O);const Et=L.textures,ft=L.isWebGLCubeRenderTarget===!0,Mt=Et.length>1;if(Mt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=E.version,d.memory.textures++),ft){Q.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[vt]=[];for(let Nt=0;Nt<E.mipmaps.length;Nt++)Q.__webglFramebuffer[vt][Nt]=o.createFramebuffer()}else Q.__webglFramebuffer[vt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let vt=0;vt<E.mipmaps.length;vt++)Q.__webglFramebuffer[vt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Mt)for(let vt=0,Nt=Et.length;vt<Nt;vt++){const Ft=r.get(Et[vt]);Ft.__webglTexture===void 0&&(Ft.__webglTexture=o.createTexture(),d.memory.textures++)}if(L.samples>0&&Xt(L)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let vt=0;vt<Et.length;vt++){const Nt=Et[vt];Q.__webglColorRenderbuffer[vt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[vt]);const Ft=c.convert(Nt.format,Nt.colorSpace),it=c.convert(Nt.type),ht=U(Nt.internalFormat,Ft,it,Nt.colorSpace,L.isXRRenderTarget===!0),Ot=Oe(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ot,ht,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+vt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[vt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),It(Q.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let vt=0;vt<6;vt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Nt=0;Nt<E.mipmaps.length;Nt++)Dt(Q.__webglFramebuffer[vt][Nt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt);else Dt(Q.__webglFramebuffer[vt],L,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);y(E)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Mt){for(let vt=0,Nt=Et.length;vt<Nt;vt++){const Ft=Et[vt],it=r.get(Ft);let ht=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ht=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ht,it.__webglTexture),nt(ht,Ft),Dt(Q.__webglFramebuffer,L,Ft,o.COLOR_ATTACHMENT0+vt,ht,0),y(Ft)&&S(ht)}i.unbindTexture()}else{let vt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(vt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(vt,gt.__webglTexture),nt(vt,E),E.mipmaps&&E.mipmaps.length>0)for(let Nt=0;Nt<E.mipmaps.length;Nt++)Dt(Q.__webglFramebuffer[Nt],L,E,o.COLOR_ATTACHMENT0,vt,Nt);else Dt(Q.__webglFramebuffer,L,E,o.COLOR_ATTACHMENT0,vt,0);y(E)&&S(vt),i.unbindTexture()}L.depthBuffer&&le(L)}function Ae(L){const E=L.textures;for(let Q=0,gt=E.length;Q<gt;Q++){const Et=E[Q];if(y(Et)){const ft=P(L),Mt=r.get(Et).__webglTexture;i.bindTexture(ft,Mt),S(ft),i.unbindTexture()}}}const I=[],fe=[];function ce(L){if(L.samples>0){if(Xt(L)===!1){const E=L.textures,Q=L.width,gt=L.height;let Et=o.COLOR_BUFFER_BIT;const ft=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Mt=r.get(L),vt=E.length>1;if(vt)for(let Ft=0;Ft<E.length;Ft++)i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);const Nt=L.texture.mipmaps;Nt&&Nt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Ft=0;Ft<E.length;Ft++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),vt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ft]);const it=r.get(E[Ft]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,it,0)}o.blitFramebuffer(0,0,Q,gt,0,0,Q,gt,Et,o.NEAREST),m===!0&&(I.length=0,fe.length=0,I.push(o.COLOR_ATTACHMENT0+Ft),L.depthBuffer&&L.resolveDepthBuffer===!1&&(I.push(ft),fe.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,fe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),vt)for(let Ft=0;Ft<E.length;Ft++){i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ft]);const it=r.get(E[Ft]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Mt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ft,o.TEXTURE_2D,it,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Oe(L){return Math.min(l.maxSamples,L.samples)}function Xt(L){const E=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pe(L){const E=d.render.frame;x.get(L)!==E&&(x.set(L,E),L.update())}function Zt(L,E){const Q=L.colorSpace,gt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Q!==Us&&Q!==Qa&&(Ne.getTransfer(Q)===We?(gt!==Ti||Et!==Oi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tn("WebGLTextures: Unsupported texture color space:",Q)),E}function ae(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ot,this.resetTextureUnits=K,this.setTexture2D=ut,this.setTexture2DArray=z,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=Je,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Xt}function cT(o,t){function i(r,l=Qa){let c;const d=Ne.getTransfer(l);if(r===Oi)return o.UNSIGNED_BYTE;if(r===Nh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Oh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Vg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Xg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Hg)return o.BYTE;if(r===Gg)return o.SHORT;if(r===Wo)return o.UNSIGNED_SHORT;if(r===Lh)return o.INT;if(r===Cr)return o.UNSIGNED_INT;if(r===da)return o.FLOAT;if(r===Ns)return o.HALF_FLOAT;if(r===kg)return o.ALPHA;if(r===Wg)return o.RGB;if(r===Ti)return o.RGBA;if(r===Yo)return o.DEPTH_COMPONENT;if(r===jo)return o.DEPTH_STENCIL;if(r===qg)return o.RED;if(r===zh)return o.RED_INTEGER;if(r===Ph)return o.RG;if(r===Fh)return o.RG_INTEGER;if(r===Bh)return o.RGBA_INTEGER;if(r===zc||r===Pc||r===Fc||r===Bc)if(d===We)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Bc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$d||r===th||r===eh||r===nh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===$d)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===th)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ih||r===ah||r===rh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ih||r===ah)return d===We?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===rh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sh||r===oh||r===lh||r===ch||r===uh||r===fh||r===dh||r===hh||r===ph||r===mh||r===xh||r===gh||r===_h||r===vh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===sh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===oh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ch)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===uh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===hh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ph)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_h)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vh)return d===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sh||r===yh||r===Mh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Sh)return d===We?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===bh||r===Eh||r===Th||r===Ah)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===bh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Eh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Th)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ah)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===qo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const uT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fT=`
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

}`;class dT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new l_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new va({vertexShader:uT,fragmentShader:fT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new _a(new Yc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hT extends Os{constructor(t,i){super();const r=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,g=null,v=null,M=null,b=null;const A=typeof XRWebGLBinding<"u",y=new dT,S={},P=i.getContextAttributes();let U=null,F=null;const V=[],D=[],O=new ge;let Z=null;const w=new pi;w.viewport=new rn;const C=new pi;C.viewport=new rn;const H=[w,C],K=new UM;let ot=null,dt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=V[tt];return lt===void 0&&(lt=new Dd,V[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=V[tt];return lt===void 0&&(lt=new Dd,V[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=V[tt];return lt===void 0&&(lt=new Dd,V[tt]=lt),lt.getHandSpace()};function ut(tt){const lt=D.indexOf(tt.inputSource);if(lt===-1)return;const Dt=V[lt];Dt!==void 0&&(Dt.update(tt.inputSource,tt.frame,h||d),Dt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",Y);for(let tt=0;tt<V.length;tt++){const lt=D[tt];lt!==null&&(D[tt]=null,V[tt].disconnect(lt))}ot=null,dt=null,y.reset();for(const tt in S)delete S[tt];t.setRenderTarget(U),M=null,v=null,g=null,l=null,F=null,Pt.stop(),r.isPresenting=!1,t.setPixelRatio(Z),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){p=tt,r.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(tt){h=tt},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return g===null&&A&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",z),l.addEventListener("inputsourceschange",Y),P.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,It=null,qt=null;P.depth&&(qt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=P.stencil?jo:Yo,It=P.stencil?qo:Cr);const le={colorFormat:i.RGBA8,depthFormat:qt,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(le),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),F=new wr(v.textureWidth,v.textureHeight,{format:Ti,type:Oi,depthTexture:new o_(v.textureWidth,v.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Dt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),F=new wr(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Pt.setContext(l),Pt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(tt){for(let lt=0;lt<tt.removed.length;lt++){const Dt=tt.removed[lt],It=D.indexOf(Dt);It>=0&&(D[It]=null,V[It].disconnect(Dt))}for(let lt=0;lt<tt.added.length;lt++){const Dt=tt.added[lt];let It=D.indexOf(Dt);if(It===-1){for(let le=0;le<V.length;le++)if(le>=D.length){D.push(Dt),It=le;break}else if(D[le]===null){D[le]=Dt,It=le;break}if(It===-1)break}const qt=V[It];qt&&qt.connect(Dt)}}const k=new rt,St=new rt;function bt(tt,lt,Dt){k.setFromMatrixPosition(lt.matrixWorld),St.setFromMatrixPosition(Dt.matrixWorld);const It=k.distanceTo(St),qt=lt.projectionMatrix.elements,le=Dt.projectionMatrix.elements,Je=qt[14]/(qt[10]-1),ue=qt[14]/(qt[10]+1),Ae=(qt[9]+1)/qt[5],I=(qt[9]-1)/qt[5],fe=(qt[8]-1)/qt[0],ce=(le[8]+1)/le[0],Oe=Je*fe,Xt=Je*ce,Pe=It/(-fe+ce),Zt=Pe*-fe;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Zt),tt.translateZ(Pe),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),qt[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const ae=Je+Pe,L=ue+Pe,E=Oe-Zt,Q=Xt+(It-Zt),gt=Ae*ue/L*ae,Et=I*ue/L*ae;tt.projectionMatrix.makePerspective(E,Q,gt,Et,ae,L),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function N(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let lt=tt.near,Dt=tt.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(Dt=y.depthFar)),K.near=C.near=w.near=lt,K.far=C.far=w.far=Dt,(ot!==K.near||dt!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ot=K.near,dt=K.far),K.layers.mask=tt.layers.mask|6,w.layers.mask=K.layers.mask&3,C.layers.mask=K.layers.mask&5;const It=tt.parent,qt=K.cameras;N(K,It);for(let le=0;le<qt.length;le++)N(qt[le],It);qt.length===2?bt(K,w,C):K.projectionMatrix.copy(w.projectionMatrix),nt(tt,K,It)};function nt(tt,lt,Dt){Dt===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(Dt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Ko*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(v===null&&M===null))return m},this.setFoveation=function(tt){m=tt,v!==null&&(v.fixedFoveation=tt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=tt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(tt){return S[tt]};let yt=null;function At(tt,lt){if(x=lt.getViewerPose(h||d),b=lt,x!==null){const Dt=x.views;M!==null&&(t.setRenderTargetFramebuffer(F,M.framebuffer),t.setRenderTarget(F));let It=!1;Dt.length!==K.cameras.length&&(K.cameras.length=0,It=!0);for(let ue=0;ue<Dt.length;ue++){const Ae=Dt[ue];let I=null;if(M!==null)I=M.getViewport(Ae);else{const ce=g.getViewSubImage(v,Ae);I=ce.viewport,ue===0&&(t.setRenderTargetTextures(F,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(F))}let fe=H[ue];fe===void 0&&(fe=new pi,fe.layers.enable(ue),fe.viewport=new rn,H[ue]=fe),fe.matrix.fromArray(Ae.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Ae.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(I.x,I.y,I.width,I.height),ue===0&&(K.matrix.copy(fe.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),It===!0&&K.cameras.push(fe)}const qt=l.enabledFeatures;if(qt&&qt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){g=r.getBinding();const ue=g.getDepthInformation(Dt[0]);ue&&ue.isValid&&ue.texture&&y.init(ue,l.renderState)}if(qt&&qt.includes("camera-access")&&A){t.state.unbindTexture(),g=r.getBinding();for(let ue=0;ue<Dt.length;ue++){const Ae=Dt[ue].camera;if(Ae){let I=S[Ae];I||(I=new l_,S[Ae]=I);const fe=g.getCameraImage(Ae);I.sourceTexture=fe}}}}for(let Dt=0;Dt<V.length;Dt++){const It=D[Dt],qt=V[Dt];It!==null&&qt!==void 0&&qt.update(It,lt,h||d)}yt&&yt(tt,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),b=null}const Pt=new f_;Pt.setAnimationLoop(At),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const br=new zi,pT=new en;function mT(o,t){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,n_(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,P,U,F){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(y,S):S.isMeshToonMaterial?(c(y,S),g(y,S)):S.isMeshPhongMaterial?(c(y,S),x(y,S)):S.isMeshStandardMaterial?(c(y,S),v(y,S),S.isMeshPhysicalMaterial&&M(y,S,F)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),A(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,P,U):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Wn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Wn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const P=t.get(S),U=P.envMap,F=P.envMapRotation;U&&(y.envMap.value=U,br.copy(F),br.x*=-1,br.y*=-1,br.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),y.envMapRotation.value.setFromMatrix4(pT.makeRotationFromEuler(br)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,P,U){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*P,y.scale.value=U*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function g(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,P){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const P=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function xT(o,t,i,r){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const F=U.program;r.uniformBlockBinding(P,F)}function h(P,U){let F=l[P.id];F===void 0&&(b(P),F=x(P),l[P.id]=F,P.addEventListener("dispose",y));const V=U.program;r.updateUBOMapping(P,V);const D=t.render.frame;c[P.id]!==D&&(v(P),c[P.id]=D)}function x(P){const U=g();P.__bindingPointIndex=U;const F=o.createBuffer(),V=P.__size,D=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,V,D),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,F),F}function g(){for(let P=0;P<p;P++)if(d.indexOf(P)===-1)return d.push(P),P;return tn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const U=l[P.id],F=P.uniforms,V=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let D=0,O=F.length;D<O;D++){const Z=Array.isArray(F[D])?F[D]:[F[D]];for(let w=0,C=Z.length;w<C;w++){const H=Z[w];if(M(H,D,w,V)===!0){const K=H.__offset,ot=Array.isArray(H.value)?H.value:[H.value];let dt=0;for(let ut=0;ut<ot.length;ut++){const z=ot[ut],Y=A(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,K+dt,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,dt),dt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,U,F,V){const D=P.value,O=U+"_"+F;if(V[O]===void 0)return typeof D=="number"||typeof D=="boolean"?V[O]=D:V[O]=D.clone(),!0;{const Z=V[O];if(typeof D=="number"||typeof D=="boolean"){if(Z!==D)return V[O]=D,!0}else if(Z.equals(D)===!1)return Z.copy(D),!0}return!1}function b(P){const U=P.uniforms;let F=0;const V=16;for(let O=0,Z=U.length;O<Z;O++){const w=Array.isArray(U[O])?U[O]:[U[O]];for(let C=0,H=w.length;C<H;C++){const K=w[C],ot=Array.isArray(K.value)?K.value:[K.value];for(let dt=0,ut=ot.length;dt<ut;dt++){const z=ot[dt],Y=A(z),k=F%V,St=k%Y.boundary,bt=k+St;F+=St,bt!==0&&V-bt<Y.storage&&(F+=V-bt),K.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=F,F+=Y.storage}}}const D=F%V;return D>0&&(F+=V-D),P.__size=F,P.__cache={},this}function A(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",P),U}function y(P){const U=P.target;U.removeEventListener("dispose",y);const F=d.indexOf(U.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function S(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},c={}}return{bind:m,update:h,dispose:S}}const gT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function _T(){return la===null&&(la=new mM(gT,32,32,Ph,Ns),la.minFilter=xi,la.magFilter=xi,la.wrapS=fa,la.wrapT=fa,la.generateMipmaps=!1,la.needsUpdate=!0),la}class vT{constructor(t={}){const{canvas:i=Ey(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=d;const b=new Set([Bh,Fh,zh]),A=new Set([Oi,Cr,Wo,qo,Nh,Oh]),y=new Uint32Array(4),S=new Int32Array(4);let P=null,U=null;const F=[],V=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1;this._outputColorSpace=kn;let Z=0,w=0,C=null,H=-1,K=null;const ot=new rn,dt=new rn;let ut=null;const z=new Ce(0);let Y=0,k=i.width,St=i.height,bt=1,N=null,nt=null;const yt=new rn(0,0,k,St),At=new rn(0,0,k,St);let Pt=!1;const tt=new Vh;let lt=!1,Dt=!1;const It=new en,qt=new rt,le=new rn,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ue=!1;function Ae(){return C===null?bt:1}let I=r;function fe(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Uh}`),i.addEventListener("webglcontextlost",Tt,!1),i.addEventListener("webglcontextrestored",mt,!1),i.addEventListener("webglcontextcreationerror",Gt,!1),I===null){const W="webgl2";if(I=fe(W,R),I===null)throw fe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ce,Oe,Xt,Pe,Zt,ae,L,E,Q,gt,Et,ft,Mt,vt,Nt,Ft,it,ht,Ot,zt,Lt,Kt,G,wt;function Rt(){ce=new R1(I),ce.init(),Kt=new cT(I,ce),Oe=new _1(I,ce,t,Kt),Xt=new oT(I,ce),Oe.reversedDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),Pe=new D1(I),Zt=new jE,ae=new lT(I,ce,Xt,Zt,Oe,Kt,Pe),L=new S1(D),E=new A1(D),Q=new OM(I),G=new x1(I,Q),gt=new C1(I,Q,Pe,G),Et=new L1(I,gt,Q,Pe),Ot=new U1(I,Oe,ae),Ft=new v1(Zt),ft=new YE(D,L,E,ce,Oe,G,Ft),Mt=new mT(D,Zt),vt=new KE,Nt=new nT(ce),ht=new m1(D,L,E,Xt,Et,M,m),it=new rT(D,Et,Oe),wt=new xT(I,Pe,Oe,Xt),zt=new g1(I,ce,Pe),Lt=new w1(I,ce,Pe),Pe.programs=ft.programs,D.capabilities=Oe,D.extensions=ce,D.properties=Zt,D.renderLists=vt,D.shadowMap=it,D.state=Xt,D.info=Pe}Rt();const Ct=new hT(D,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ce.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ce.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return bt},this.setPixelRatio=function(R){R!==void 0&&(bt=R,this.setSize(k,St,!1))},this.getSize=function(R){return R.set(k,St)},this.setSize=function(R,W,st=!0){if(Ct.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,St=W,i.width=Math.floor(R*bt),i.height=Math.floor(W*bt),st===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(k*bt,St*bt).floor()},this.setDrawingBufferSize=function(R,W,st){k=R,St=W,bt=st,i.width=Math.floor(R*st),i.height=Math.floor(W*st),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(ot)},this.getViewport=function(R){return R.copy(yt)},this.setViewport=function(R,W,st,et){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,W,st,et),Xt.viewport(ot.copy(yt).multiplyScalar(bt).round())},this.getScissor=function(R){return R.copy(At)},this.setScissor=function(R,W,st,et){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,W,st,et),Xt.scissor(dt.copy(At).multiplyScalar(bt).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(R){Xt.setScissorTest(Pt=R)},this.setOpaqueSort=function(R){N=R},this.setTransparentSort=function(R){nt=R},this.getClearColor=function(R){return R.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,st=!0){let et=0;if(R){let j=!1;if(C!==null){const Ut=C.texture.format;j=b.has(Ut)}if(j){const Ut=C.texture.type,Bt=A.has(Ut),Vt=ht.getClearColor(),kt=ht.getClearAlpha(),ee=Vt.r,ie=Vt.g,Qt=Vt.b;Bt?(y[0]=ee,y[1]=ie,y[2]=Qt,y[3]=kt,I.clearBufferuiv(I.COLOR,0,y)):(S[0]=ee,S[1]=ie,S[2]=Qt,S[3]=kt,I.clearBufferiv(I.COLOR,0,S))}else et|=I.COLOR_BUFFER_BIT}W&&(et|=I.DEPTH_BUFFER_BIT),st&&(et|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Tt,!1),i.removeEventListener("webglcontextrestored",mt,!1),i.removeEventListener("webglcontextcreationerror",Gt,!1),ht.dispose(),vt.dispose(),Nt.dispose(),Zt.dispose(),L.dispose(),E.dispose(),Et.dispose(),G.dispose(),wt.dispose(),ft.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Bs),Ct.removeEventListener("sessionend",Is),gi.stop()};function Tt(R){R.preventDefault(),Xc("WebGLRenderer: Context Lost."),O=!0}function mt(){Xc("WebGLRenderer: Context Restored."),O=!1;const R=Pe.autoReset,W=it.enabled,st=it.autoUpdate,et=it.needsUpdate,j=it.type;Rt(),Pe.autoReset=R,it.enabled=W,it.autoUpdate=st,it.needsUpdate=et,it.type=j}function Gt(R){tn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function re(R){const W=R.target;W.removeEventListener("dispose",re),Ge(W)}function Ge(R){we(R),Zt.remove(R)}function we(R){const W=Zt.get(R).programs;W!==void 0&&(W.forEach(function(st){ft.releaseProgram(st)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,st,et,j,Ut){W===null&&(W=Je);const Bt=j.isMesh&&j.matrixWorld.determinant()<0,Vt=Kc(R,W,st,et,j);Xt.setMaterial(et,Bt);let kt=st.index,ee=1;if(et.wireframe===!0){if(kt=gt.getWireframeAttribute(st),kt===void 0)return;ee=2}const ie=st.drawRange,Qt=st.attributes.position;let he=ie.start*ee,Re=(ie.start+ie.count)*ee;Ut!==null&&(he=Math.max(he,Ut.start*ee),Re=Math.min(Re,(Ut.start+Ut.count)*ee)),kt!==null?(he=Math.max(he,0),Re=Math.min(Re,kt.count)):Qt!=null&&(he=Math.max(he,0),Re=Math.min(Re,Qt.count));const De=Re-he;if(De<0||De===1/0)return;G.setup(j,et,Vt,st,kt);let be,Fe=zt;if(kt!==null&&(be=Q.get(kt),Fe=Lt,Fe.setIndex(be)),j.isMesh)et.wireframe===!0?(Xt.setLineWidth(et.wireframeLinewidth*Ae()),Fe.setMode(I.LINES)):Fe.setMode(I.TRIANGLES);else if(j.isLine){let te=et.linewidth;te===void 0&&(te=1),Xt.setLineWidth(te*Ae()),j.isLineSegments?Fe.setMode(I.LINES):j.isLineLoop?Fe.setMode(I.LINE_LOOP):Fe.setMode(I.LINE_STRIP)}else j.isPoints?Fe.setMode(I.POINTS):j.isSprite&&Fe.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Zo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))Fe.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const te=j._multiDrawStarts,qe=j._multiDrawCounts,Ee=j._multiDrawCount,vn=kt?Q.get(kt).bytesPerElement:1,ya=Zt.get(et).currentProgram.getUniforms();for(let je=0;je<Ee;je++)ya.setValue(I,"_gl_DrawID",je),Fe.render(te[je]/vn,qe[je])}else if(j.isInstancedMesh)Fe.renderInstances(he,De,j.count);else if(st.isInstancedBufferGeometry){const te=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,qe=Math.min(st.instanceCount,te);Fe.renderInstances(he,De,qe)}else Fe.render(he,De)};function Dn(R,W,st){R.transparent===!0&&R.side===ua&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,pn(R,W,st),R.side=$a,R.needsUpdate=!0,pn(R,W,st),R.side=ua):pn(R,W,st)}this.compile=function(R,W,st=null){st===null&&(st=R),U=Nt.get(st),U.init(W),V.push(U),st.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(U.pushLight(j),j.castShadow&&U.pushShadow(j))}),R!==st&&R.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(U.pushLight(j),j.castShadow&&U.pushShadow(j))}),U.setupLights();const et=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ut=j.material;if(Ut)if(Array.isArray(Ut))for(let Bt=0;Bt<Ut.length;Bt++){const Vt=Ut[Bt];Dn(Vt,st,j),et.add(Vt)}else Dn(Ut,st,j),et.add(Ut)}),U=V.pop(),et},this.compileAsync=function(R,W,st=null){const et=this.compile(R,W,st);return new Promise(j=>{function Ut(){if(et.forEach(function(Bt){Zt.get(Bt).currentProgram.isReady()&&et.delete(Bt)}),et.size===0){j(R);return}setTimeout(Ut,10)}ce.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Yn=null;function tl(R){Yn&&Yn(R)}function Bs(){gi.stop()}function Is(){gi.start()}const gi=new f_;gi.setAnimationLoop(tl),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(R){Yn=R,Ct.setAnimationLoop(R),R===null?gi.stop():gi.start()},Ct.addEventListener("sessionstart",Bs),Ct.addEventListener("sessionend",Is),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){tn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(W),W=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,C),U=Nt.get(R,V.length),U.init(W),V.push(U),It.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),tt.setFromProjectionMatrix(It,Ni,W.reversedDepth),Dt=this.localClippingEnabled,lt=Ft.init(this.clippingPlanes,Dt),P=vt.get(R,F.length),P.init(),F.push(P),Ct.enabled===!0&&Ct.isPresenting===!0){const Ut=D.xr.getDepthSensingMesh();Ut!==null&&tr(Ut,W,-1/0,D.sortObjects)}tr(R,W,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(N,nt),ue=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ue&&ht.addToRenderList(P,R),this.info.render.frame++,lt===!0&&Ft.beginShadows();const st=U.state.shadowsArray;it.render(st,R,W),lt===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=P.opaque,j=P.transmissive;if(U.setupLights(),W.isArrayCamera){const Ut=W.cameras;if(j.length>0)for(let Bt=0,Vt=Ut.length;Bt<Vt;Bt++){const kt=Ut[Bt];Gs(et,j,R,kt)}ue&&ht.render(R);for(let Bt=0,Vt=Ut.length;Bt<Vt;Bt++){const kt=Ut[Bt];Hs(P,R,kt,kt.viewport)}}else j.length>0&&Gs(et,j,R,W),ue&&ht.render(R),Hs(P,R,W);C!==null&&w===0&&(ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(D,R,W),G.resetDefaultState(),H=-1,K=null,V.pop(),V.length>0?(U=V[V.length-1],lt===!0&&Ft.setGlobalState(D.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function tr(R,W,st,et){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||tt.intersectsSprite(R)){et&&le.setFromMatrixPosition(R.matrixWorld).applyMatrix4(It);const Bt=Et.update(R),Vt=R.material;Vt.visible&&P.push(R,Bt,Vt,st,le.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||tt.intersectsObject(R))){const Bt=Et.update(R),Vt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),le.copy(R.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),le.copy(Bt.boundingSphere.center)),le.applyMatrix4(R.matrixWorld).applyMatrix4(It)),Array.isArray(Vt)){const kt=Bt.groups;for(let ee=0,ie=kt.length;ee<ie;ee++){const Qt=kt[ee],he=Vt[Qt.materialIndex];he&&he.visible&&P.push(R,Bt,he,st,le.z,Qt)}}else Vt.visible&&P.push(R,Bt,Vt,st,le.z,null)}}const Ut=R.children;for(let Bt=0,Vt=Ut.length;Bt<Vt;Bt++)tr(Ut[Bt],W,st,et)}function Hs(R,W,st,et){const{opaque:j,transmissive:Ut,transparent:Bt}=R;U.setupLightsView(st),lt===!0&&Ft.setGlobalState(D.clippingPlanes,st),et&&Xt.viewport(ot.copy(et)),j.length>0&&jn(j,W,st),Ut.length>0&&jn(Ut,W,st),Bt.length>0&&jn(Bt,W,st),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Gs(R,W,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[et.id]===void 0&&(U.state.transmissionRenderTarget[et.id]=new wr(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Ns:Oi,minFilter:Rr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Ut=U.state.transmissionRenderTarget[et.id],Bt=et.viewport||ot;Ut.setSize(Bt.z*D.transmissionResolutionScale,Bt.w*D.transmissionResolutionScale);const Vt=D.getRenderTarget(),kt=D.getActiveCubeFace(),ee=D.getActiveMipmapLevel();D.setRenderTarget(Ut),D.getClearColor(z),Y=D.getClearAlpha(),Y<1&&D.setClearColor(16777215,.5),D.clear(),ue&&ht.render(st);const ie=D.toneMapping;D.toneMapping=pa;const Qt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),U.setupLightsView(et),lt===!0&&Ft.setGlobalState(D.clippingPlanes,et),jn(R,st,et),ae.updateMultisampleRenderTarget(Ut),ae.updateRenderTargetMipmap(Ut),ce.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Re=0,De=W.length;Re<De;Re++){const be=W[Re],{object:Fe,geometry:te,material:qe,group:Ee}=be;if(qe.side===ua&&Fe.layers.test(et.layers)){const vn=qe.side;qe.side=Wn,qe.needsUpdate=!0,ln(Fe,st,et,te,qe,Ee),qe.side=vn,qe.needsUpdate=!0,he=!0}}he===!0&&(ae.updateMultisampleRenderTarget(Ut),ae.updateRenderTargetMipmap(Ut))}D.setRenderTarget(Vt,kt,ee),D.setClearColor(z,Y),Qt!==void 0&&(et.viewport=Qt),D.toneMapping=ie}function jn(R,W,st){const et=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Ut=R.length;j<Ut;j++){const Bt=R[j],{object:Vt,geometry:kt,group:ee}=Bt;let ie=Bt.material;ie.allowOverride===!0&&et!==null&&(ie=et),Vt.layers.test(st.layers)&&ln(Vt,W,st,kt,ie,ee)}}function ln(R,W,st,et,j,Ut){R.onBeforeRender(D,W,st,et,j,Ut),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(D,W,st,et,R,Ut),j.transparent===!0&&j.side===ua&&j.forceSinglePass===!1?(j.side=Wn,j.needsUpdate=!0,D.renderBufferDirect(st,W,et,j,R,Ut),j.side=$a,j.needsUpdate=!0,D.renderBufferDirect(st,W,et,j,R,Ut),j.side=ua):D.renderBufferDirect(st,W,et,j,R,Ut),R.onAfterRender(D,W,st,et,j,Ut)}function pn(R,W,st){W.isScene!==!0&&(W=Je);const et=Zt.get(R),j=U.state.lights,Ut=U.state.shadowsArray,Bt=j.state.version,Vt=ft.getParameters(R,j.state,Ut,W,st),kt=ft.getProgramCacheKey(Vt);let ee=et.programs;et.environment=R.isMeshStandardMaterial?W.environment:null,et.fog=W.fog,et.envMap=(R.isMeshStandardMaterial?E:L).get(R.envMap||et.environment),et.envMapRotation=et.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",re),ee=new Map,et.programs=ee);let ie=ee.get(kt);if(ie!==void 0){if(et.currentProgram===ie&&et.lightsStateVersion===Bt)return Dr(R,Vt),ie}else Vt.uniforms=ft.getUniforms(R),R.onBeforeCompile(Vt,D),ie=ft.acquireProgram(Vt,kt),ee.set(kt,ie),et.uniforms=Vt.uniforms;const Qt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=Ft.uniform),Dr(R,Vt),et.needsLights=el(R),et.lightsStateVersion=Bt,et.needsLights&&(Qt.ambientLightColor.value=j.state.ambient,Qt.lightProbe.value=j.state.probe,Qt.directionalLights.value=j.state.directional,Qt.directionalLightShadows.value=j.state.directionalShadow,Qt.spotLights.value=j.state.spot,Qt.spotLightShadows.value=j.state.spotShadow,Qt.rectAreaLights.value=j.state.rectArea,Qt.ltc_1.value=j.state.rectAreaLTC1,Qt.ltc_2.value=j.state.rectAreaLTC2,Qt.pointLights.value=j.state.point,Qt.pointLightShadows.value=j.state.pointShadow,Qt.hemisphereLights.value=j.state.hemi,Qt.directionalShadowMap.value=j.state.directionalShadowMap,Qt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Qt.spotShadowMap.value=j.state.spotShadowMap,Qt.spotLightMatrix.value=j.state.spotLightMatrix,Qt.spotLightMap.value=j.state.spotLightMap,Qt.pointShadowMap.value=j.state.pointShadowMap,Qt.pointShadowMatrix.value=j.state.pointShadowMatrix),et.currentProgram=ie,et.uniformsList=null,ie}function Pi(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Ic.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Dr(R,W){const st=Zt.get(R);st.outputColorSpace=W.outputColorSpace,st.batching=W.batching,st.batchingColor=W.batchingColor,st.instancing=W.instancing,st.instancingColor=W.instancingColor,st.instancingMorph=W.instancingMorph,st.skinning=W.skinning,st.morphTargets=W.morphTargets,st.morphNormals=W.morphNormals,st.morphColors=W.morphColors,st.morphTargetsCount=W.morphTargetsCount,st.numClippingPlanes=W.numClippingPlanes,st.numIntersection=W.numClipIntersection,st.vertexAlphas=W.vertexAlphas,st.vertexTangents=W.vertexTangents,st.toneMapping=W.toneMapping}function Kc(R,W,st,et,j){W.isScene!==!0&&(W=Je),ae.resetTextureUnits();const Ut=W.fog,Bt=et.isMeshStandardMaterial?W.environment:null,Vt=C===null?D.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Us,kt=(et.isMeshStandardMaterial?E:L).get(et.envMap||Bt),ee=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ie=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Qt=!!st.morphAttributes.position,he=!!st.morphAttributes.normal,Re=!!st.morphAttributes.color;let De=pa;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(De=D.toneMapping);const be=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Fe=be!==void 0?be.length:0,te=Zt.get(et),qe=U.state.lights;if(lt===!0&&(Dt===!0||R!==K)){const yn=R===K&&et.id===H;Ft.setState(et,R,yn)}let Ee=!1;et.version===te.__version?(te.needsLights&&te.lightsStateVersion!==qe.state.version||te.outputColorSpace!==Vt||j.isBatchedMesh&&te.batching===!1||!j.isBatchedMesh&&te.batching===!0||j.isBatchedMesh&&te.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&te.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&te.instancing===!1||!j.isInstancedMesh&&te.instancing===!0||j.isSkinnedMesh&&te.skinning===!1||!j.isSkinnedMesh&&te.skinning===!0||j.isInstancedMesh&&te.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&te.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&te.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&te.instancingMorph===!1&&j.morphTexture!==null||te.envMap!==kt||et.fog===!0&&te.fog!==Ut||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ft.numPlanes||te.numIntersection!==Ft.numIntersection)||te.vertexAlphas!==ee||te.vertexTangents!==ie||te.morphTargets!==Qt||te.morphNormals!==he||te.morphColors!==Re||te.toneMapping!==De||te.morphTargetsCount!==Fe)&&(Ee=!0):(Ee=!0,te.__version=et.version);let vn=te.currentProgram;Ee===!0&&(vn=pn(et,W,j));let ya=!1,je=!1,Fi=!1;const Ze=vn.getUniforms(),Sn=te.uniforms;if(Xt.useProgram(vn.program)&&(ya=!0,je=!0,Fi=!0),et.id!==H&&(H=et.id,je=!0),ya||K!==R){Xt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ze.setValue(I,"projectionMatrix",R.projectionMatrix),Ze.setValue(I,"viewMatrix",R.matrixWorldInverse);const En=Ze.map.cameraPosition;En!==void 0&&En.setValue(I,qt.setFromMatrixPosition(R.matrixWorld)),Oe.logarithmicDepthBuffer&&Ze.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ze.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,je=!0,Fi=!0)}if(j.isSkinnedMesh){Ze.setOptional(I,j,"bindMatrix"),Ze.setOptional(I,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Ze.setValue(I,"boneTexture",yn.boneTexture,ae))}j.isBatchedMesh&&(Ze.setOptional(I,j,"batchingTexture"),Ze.setValue(I,"batchingTexture",j._matricesTexture,ae),Ze.setOptional(I,j,"batchingIdTexture"),Ze.setValue(I,"batchingIdTexture",j._indirectTexture,ae),Ze.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Ze.setValue(I,"batchingColorTexture",j._colorsTexture,ae));const mn=st.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Ot.update(j,st,vn),(je||te.receiveShadow!==j.receiveShadow)&&(te.receiveShadow=j.receiveShadow,Ze.setValue(I,"receiveShadow",j.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Sn.envMap.value=kt,Sn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&W.environment!==null&&(Sn.envMapIntensity.value=W.environmentIntensity),Sn.dfgLUT!==void 0&&(Sn.dfgLUT.value=_T()),je&&(Ze.setValue(I,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&Qc(Sn,Fi),Ut&&et.fog===!0&&Mt.refreshFogUniforms(Sn,Ut),Mt.refreshMaterialUniforms(Sn,et,bt,St,U.state.transmissionRenderTarget[R.id]),Ic.upload(I,Pi(te),Sn,ae)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Ic.upload(I,Pi(te),Sn,ae),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ze.setValue(I,"center",j.center),Ze.setValue(I,"modelViewMatrix",j.modelViewMatrix),Ze.setValue(I,"normalMatrix",j.normalMatrix),Ze.setValue(I,"modelMatrix",j.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const yn=et.uniformsGroups;for(let En=0,Ri=yn.length;En<Ri;En++){const Bi=yn[En];wt.update(Bi,vn),wt.bind(Bi,vn)}}return vn}function Qc(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function el(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,W,st){const et=Zt.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),Zt.get(R.texture).__webglTexture=W,Zt.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const st=Zt.get(R);st.__webglFramebuffer=W,st.__useDefaultFramebuffer=W===void 0};const er=I.createFramebuffer();this.setRenderTarget=function(R,W=0,st=0){C=R,Z=W,w=st;let et=!0,j=null,Ut=!1,Bt=!1;if(R){const kt=Zt.get(R);if(kt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(I.FRAMEBUFFER,null),et=!1;else if(kt.__webglFramebuffer===void 0)ae.setupRenderTarget(R);else if(kt.__hasExternalTextures)ae.rebindTextures(R,Zt.get(R.texture).__webglTexture,Zt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(kt.__boundDepthTexture!==Qt){if(Qt!==null&&Zt.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(R)}}const ee=R.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Bt=!0);const ie=Zt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[W])?j=ie[W][st]:j=ie[W],Ut=!0):R.samples>0&&ae.useMultisampledRTT(R)===!1?j=Zt.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?j=ie[st]:j=ie,ot.copy(R.viewport),dt.copy(R.scissor),ut=R.scissorTest}else ot.copy(yt).multiplyScalar(bt).floor(),dt.copy(At).multiplyScalar(bt).floor(),ut=Pt;if(st!==0&&(j=er),Xt.bindFramebuffer(I.FRAMEBUFFER,j)&&et&&Xt.drawBuffers(R,j),Xt.viewport(ot),Xt.scissor(dt),Xt.setScissorTest(ut),Ut){const kt=Zt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,kt.__webglTexture,st)}else if(Bt){const kt=W;for(let ee=0;ee<R.textures.length;ee++){const ie=Zt.get(R.textures[ee]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ee,ie.__webglTexture,st,kt)}}else if(R!==null&&st!==0){const kt=Zt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,st)}H=-1},this.readRenderTargetPixels=function(R,W,st,et,j,Ut,Bt,Vt=0){if(!(R&&R.isWebGLRenderTarget)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt){Xt.bindFramebuffer(I.FRAMEBUFFER,kt);try{const ee=R.textures[Vt],ie=ee.format,Qt=ee.type;if(!Oe.textureFormatReadable(ie)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Qt)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-et&&st>=0&&st<=R.height-j&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Vt),I.readPixels(W,st,et,j,Kt.convert(ie),Kt.convert(Qt),Ut))}finally{const ee=C!==null?Zt.get(C).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,W,st,et,j,Ut,Bt,Vt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Zt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt)if(W>=0&&W<=R.width-et&&st>=0&&st<=R.height-j){Xt.bindFramebuffer(I.FRAMEBUFFER,kt);const ee=R.textures[Vt],ie=ee.format,Qt=ee.type;if(!Oe.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const he=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.bufferData(I.PIXEL_PACK_BUFFER,Ut.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Vt),I.readPixels(W,st,et,j,Kt.convert(ie),Kt.convert(Qt),0);const Re=C!==null?Zt.get(C).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,Re);const De=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ty(I,De,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,he),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ut),I.deleteBuffer(he),I.deleteSync(De),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,st=0){const et=Math.pow(2,-st),j=Math.floor(R.image.width*et),Ut=Math.floor(R.image.height*et),Bt=W!==null?W.x:0,Vt=W!==null?W.y:0;ae.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Bt,Vt,j,Ut),Xt.unbindTexture()};const Vs=I.createFramebuffer(),Sa=I.createFramebuffer();this.copyTextureToTexture=function(R,W,st=null,et=null,j=0,Ut=null){Ut===null&&(j!==0?(Zo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=j,j=0):Ut=0);let Bt,Vt,kt,ee,ie,Qt,he,Re,De;const be=R.isCompressedTexture?R.mipmaps[Ut]:R.image;if(st!==null)Bt=st.max.x-st.min.x,Vt=st.max.y-st.min.y,kt=st.isBox3?st.max.z-st.min.z:1,ee=st.min.x,ie=st.min.y,Qt=st.isBox3?st.min.z:0;else{const mn=Math.pow(2,-j);Bt=Math.floor(be.width*mn),Vt=Math.floor(be.height*mn),R.isDataArrayTexture?kt=be.depth:R.isData3DTexture?kt=Math.floor(be.depth*mn):kt=1,ee=0,ie=0,Qt=0}et!==null?(he=et.x,Re=et.y,De=et.z):(he=0,Re=0,De=0);const Fe=Kt.convert(W.format),te=Kt.convert(W.type);let qe;W.isData3DTexture?(ae.setTexture3D(W,0),qe=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ae.setTexture2DArray(W,0),qe=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(W,0),qe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const Ee=I.getParameter(I.UNPACK_ROW_LENGTH),vn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ya=I.getParameter(I.UNPACK_SKIP_PIXELS),je=I.getParameter(I.UNPACK_SKIP_ROWS),Fi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ee),I.pixelStorei(I.UNPACK_SKIP_ROWS,ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const Ze=R.isDataArrayTexture||R.isData3DTexture,Sn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const mn=Zt.get(R),yn=Zt.get(W),En=Zt.get(mn.__renderTarget),Ri=Zt.get(yn.__renderTarget);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,En.__webglFramebuffer),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Bi=0;Bi<kt;Bi++)Ze&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.get(R).__webglTexture,j,Qt+Bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.get(W).__webglTexture,Ut,De+Bi)),I.blitFramebuffer(ee,ie,Bt,Vt,he,Re,Bt,Vt,I.DEPTH_BUFFER_BIT,I.NEAREST);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Zt.has(R)){const mn=Zt.get(R),yn=Zt.get(W);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,Vs),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Sa);for(let En=0;En<kt;En++)Ze?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,j,Qt+En):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,j),Sn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yn.__webglTexture,Ut,De+En):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yn.__webglTexture,Ut),j!==0?I.blitFramebuffer(ee,ie,Bt,Vt,he,Re,Bt,Vt,I.COLOR_BUFFER_BIT,I.NEAREST):Sn?I.copyTexSubImage3D(qe,Ut,he,Re,De+En,ee,ie,Bt,Vt):I.copyTexSubImage2D(qe,Ut,he,Re,ee,ie,Bt,Vt);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Sn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(qe,Ut,he,Re,De,Bt,Vt,kt,Fe,te,be.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(qe,Ut,he,Re,De,Bt,Vt,kt,Fe,be.data):I.texSubImage3D(qe,Ut,he,Re,De,Bt,Vt,kt,Fe,te,be):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ut,he,Re,Bt,Vt,Fe,te,be.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ut,he,Re,be.width,be.height,Fe,be.data):I.texSubImage2D(I.TEXTURE_2D,Ut,he,Re,Bt,Vt,Fe,te,be);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ya),I.pixelStorei(I.UNPACK_SKIP_ROWS,je),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fi),Ut===0&&W.generateMipmaps&&I.generateMipmap(qe),Xt.unbindTexture()},this.initRenderTarget=function(R){Zt.get(R).__webglFramebuffer===void 0&&ae.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ae.setTextureCube(R,0):R.isData3DTexture?ae.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ae.setTexture2DArray(R,0):ae.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){Z=0,w=0,C=null,Xt.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ne._getUnpackColorSpace()}}class ST extends Xh{constructor(t){super(t)}load(t,i,r,l){const c=this,d=new AM(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(p){try{i(c.parse(p))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(h){const x=new DataView(h),g=32/8*3+32/8*3*3+16/8,v=x.getUint32(80,!0);if(80+32/8+v*g===x.byteLength)return!0;const b=[115,111,108,105,100];for(let A=0;A<5;A++)if(r(b,x,A))return!1;return!0}function r(h,x,g){for(let v=0,M=h.length;v<M;v++)if(h[v]!==x.getUint8(g+v))return!1;return!0}function l(h){const x=new DataView(h),g=x.getUint32(80,!0);let v,M,b,A=!1,y,S,P,U,F;for(let H=0;H<70;H++)x.getUint32(H,!1)==1129270351&&x.getUint8(H+4)==82&&x.getUint8(H+5)==61&&(A=!0,y=new Float32Array(g*3*3),S=x.getUint8(H+6)/255,P=x.getUint8(H+7)/255,U=x.getUint8(H+8)/255,F=x.getUint8(H+9)/255);const V=84,D=50,O=new Ai,Z=new Float32Array(g*3*3),w=new Float32Array(g*3*3),C=new Ce;for(let H=0;H<g;H++){const K=V+H*D,ot=x.getFloat32(K,!0),dt=x.getFloat32(K+4,!0),ut=x.getFloat32(K+8,!0);if(A){const z=x.getUint16(K+48,!0);(z&32768)===0?(v=(z&31)/31,M=(z>>5&31)/31,b=(z>>10&31)/31):(v=S,M=P,b=U)}for(let z=1;z<=3;z++){const Y=K+z*12,k=H*3*3+(z-1)*3;Z[k]=x.getFloat32(Y,!0),Z[k+1]=x.getFloat32(Y+4,!0),Z[k+2]=x.getFloat32(Y+8,!0),w[k]=ot,w[k+1]=dt,w[k+2]=ut,A&&(C.setRGB(v,M,b,kn),y[k]=C.r,y[k+1]=C.g,y[k+2]=C.b)}}return O.setAttribute("position",new qn(Z,3)),O.setAttribute("normal",new qn(w,3)),A&&(O.setAttribute("color",new qn(y,3)),O.hasColors=!0,O.alpha=F),O}function c(h){const x=new Ai,g=/solid([\s\S]*?)endsolid/g,v=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let b=0;const A=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+A+A+A,"g"),S=new RegExp("normal"+A+A+A,"g"),P=[],U=[],F=[],V=new rt;let D,O=0,Z=0,w=0;for(;(D=g.exec(h))!==null;){Z=w;const C=D[0],H=(D=M.exec(C))!==null?D[1]:"";for(F.push(H);(D=v.exec(C))!==null;){let dt=0,ut=0;const z=D[0];for(;(D=S.exec(z))!==null;)V.x=parseFloat(D[1]),V.y=parseFloat(D[2]),V.z=parseFloat(D[3]),ut++;for(;(D=y.exec(z))!==null;)P.push(parseFloat(D[1]),parseFloat(D[2]),parseFloat(D[3])),U.push(V.x,V.y,V.z),dt++,w++;ut!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+b),dt!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+b),b++}const K=Z,ot=w-Z;x.userData.groupNames=F,x.addGroup(K,ot,O),O++}return x.setAttribute("position",new ga(P,3)),x.setAttribute("normal",new ga(U,3)),x}function d(h){return typeof h!="string"?new TextDecoder().decode(h):h}function p(h){if(typeof h=="string"){const x=new Uint8Array(h.length);for(let g=0;g<h.length;g++)x[g]=h.charCodeAt(g)&255;return x.buffer||x}else return h}const m=p(t);return i(m)?l(m):c(d(t))}}const yT="#ffe4e9",MT=()=>{const o=document.createElement("canvas");o.width=512,o.height=512;const t=o.getContext("2d"),i=t.createRadialGradient(256,256,0,256,256,256);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.2,"rgba(255, 255, 255, 0.4)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,512,512),new vM(o)},bT=({files:o,onModelSelect:t,onProgress:i,onHover:r,panelSize:l,selectedModel:c})=>{const d=$t.useRef(null),p=$t.useRef(null),m=$t.useRef(null),h=$t.useRef(null),x=$t.useRef(new LM(new rt,new rt)),g=$t.useRef(new ge),v=$t.useRef([]),M=$t.useRef([]),b=$t.useRef(!1),A=$t.useRef(null),y=$t.useRef(null),S=$t.useRef(new rt),P=$t.useRef(),U=$t.useRef(null),F=$t.useRef(0),V=$t.useRef(0),D=$t.useRef({theta:0,phi:Math.PI/2}),O=$t.useRef({x:0,y:0}),Z=$t.useRef(!1),w=$t.useRef({x:0,y:0}),C=$t.useRef(!1),H=$t.useRef(0),K=$t.useRef(()=>{}),ot=350,dt=650,ut=$t.useRef(1200),z=$t.useRef(200),Y=$t.useRef(4),k=$t.useRef(l);$t.useEffect(()=>{k.current=l},[l]);const St=N=>N>1200?6:N>768?4:2,bt=(N,nt)=>{const yt=k.current,At=1200,Pt=No.degToRad(60),tt=2*Math.tan(Pt/2)*At;let lt=0,Dt=0;if(N>768){const qt=tt*(N/nt)/N;lt=yt/2*qt}else{const It=tt/nt;Dt=-(yt*.5)*It}O.current={x:lt,y:Dt}};return $t.useEffect(()=>{if(!d.current||!o.length)return;const N=d.current.clientWidth,nt=d.current.clientHeight,yt=new dM;p.current=yt;const At=new pi(60,N/nt,1,1e4);m.current=At;const Pt=new vT({alpha:!0,antialias:!0,powerPreference:"high-performance"});Pt.setSize(N,nt),Pt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Pt.shadowMap.enabled=!1,Pt.outputColorSpace=kn,Pt.toneMapping=pa,d.current.appendChild(Pt.domElement),h.current=Pt;const tt=At.position.clone(),lt=At.position.clone(),Dt=new rt(0,0,0),It=new rt(0,0,0),qt=(Mt,vt)=>{const Nt=Mt/vt,Ft=St(Mt);Y.current=Ft;const it=(Ft-1)*dt+ot+600,ht=Math.tan(No.degToRad(30)),Ot=it/(2*ht*Nt);ut.current=Math.max(Ot,1200);const zt=ut.current*ht,Lt=Mt<=768?800:700;z.current=zt-Lt,b.current||(At.position.z=ut.current,lt.z=ut.current)};qt(N,nt),tt.z=ut.current;const le=new DM(16777215,.9);yt.add(le);const Je=new wM(16777215,.3);Je.position.set(500,1e3,750),yt.add(Je);const ue=MT(),Ae=new r_({map:ue,color:16770281,transparent:!0,opacity:0,blending:Id,depthWrite:!1}),I=new pM(Ae);I.renderOrder=-1,yt.add(I),U.current=I;const fe=new ST;let ce=0;const Oe=(Mt,vt)=>{fe.load(Mt.url,Nt=>{const Ft=new SM({color:yT,roughness:.5,metalness:0}),it=new _a(Nt,Ft);it.userData.fileName=Mt.name,it.userData.scadContent=Mt.scadContent,it.userData.index=vt,it.castShadow=!1,it.receiveShadow=!1,Nt.center(),Nt.computeBoundingBox();const ht=Nt.boundingBox,Ot=new rt;ht.getSize(Ot);const zt=Math.max(Ot.x,Ot.y,Ot.z),Lt=ot/zt;it.scale.setScalar(Lt);const Kt=Y.current,G=Math.floor(vt/Kt),wt=vt%Kt,Tt=-((Kt-1)*dt)/2+wt*dt,mt=z.current-G*dt,Gt=0;it.position.set(Tt,mt,Gt),it.rotation.set(-Math.PI/2,0,Math.PI/4),it.userData.originalPosition={x:Tt,y:mt,z:Gt};const re=new qc(it.position.clone(),ot*.8);M.current.push({sphere:re,model:it}),yt.add(it),v.current.push(it),ce++,i(ce,o.length)},void 0,Nt=>{console.warn(`Failed to load ${Mt.name}`,Nt),ce++,i(ce,o.length)})};o.forEach((Mt,vt)=>{setTimeout(()=>Oe(Mt,vt),vt*100)});const Xt=Mt=>{C.current=!0,Z.current=!1,w.current={x:Mt.clientX,y:Mt.clientY}},Pe=Mt=>{const vt=d.current.getBoundingClientRect();if(g.current.x=(Mt.clientX-vt.left)/vt.width*2-1,g.current.y=-((Mt.clientY-vt.top)/vt.height)*2+1,C.current&&b.current&&A.current){const Nt=Mt.clientX-w.current.x,Ft=Mt.clientY-w.current.y;!Z.current&&(Math.abs(Nt)>5||Math.abs(Ft)>5)&&(Z.current=!0,w.current={x:Mt.clientX,y:Mt.clientY}),Z.current&&(D.current.theta-=(Mt.clientX-w.current.x)*.005,D.current.phi-=(Mt.clientY-w.current.y)*.005,D.current.phi=Math.max(.1,Math.min(Math.PI-.1,D.current.phi)),w.current={x:Mt.clientX,y:Mt.clientY})}},Zt=Mt=>{const vt=C.current;if(C.current=!1,d.current){const Nt=d.current.getBoundingClientRect();g.current.x=(Mt.clientX-Nt.left)/Nt.width*2-1,g.current.y=-((Mt.clientY-Nt.top)/Nt.height)*2+1}!Z.current&&vt&&L(),Z.current=!1},ae=Mt=>{if(Mt.preventDefault(),b.current)return;const vt=Mt.deltaY*.8,Nt=Y.current,it=Math.ceil(o.length/Nt)*dt,ht=Math.max(0,it-z.current);H.current+=vt,H.current=Math.max(0,Math.min(H.current,ht))},L=()=>{x.current.setFromCamera(g.current,m.current);const Mt=M.current.find(vt=>x.current.ray.intersectsSphere(vt.sphere));b.current?Q():Mt&&E(Mt.model)};d.current.addEventListener("mousedown",Xt),d.current.addEventListener("mousemove",Pe),window.addEventListener("mouseup",Zt),d.current.addEventListener("wheel",ae,{passive:!1});const E=Mt=>{var Ft,it;b.current=!0,A.current=Mt,y.current=null,r(null),F.current=0,V.current=0,U.current&&(U.current.visible=!1),m.current&&S.current.copy(m.current.position),D.current={theta:Math.PI/4,phi:Math.PI/3},v.current.forEach(ht=>{if(ht!==Mt){ht.visible=!1;const Ot=ht.material;Ot.opacity=0,Ot.transparent=!0}else{ht.visible=!0;const Ot=ht.material;Ot.opacity=1,Ot.transparent=!1}}),t(Mt);const vt=((Ft=d.current)==null?void 0:Ft.clientWidth)||window.innerWidth,Nt=((it=d.current)==null?void 0:it.clientHeight)||window.innerHeight;bt(vt,Nt)},Q=()=>{b.current=!1,A.current=null,t(null),lt.set(0,0,ut.current),It.set(0,-H.current,0)};K.current=Q;const gt=()=>{const Mt=Y.current,Nt=-((Mt-1)*dt)/2,Ft=z.current;v.current.forEach(it=>{const ht=it.userData.index,Ot=Math.floor(ht/Mt),zt=ht%Mt,Lt=Nt+zt*dt,Kt=Ft-Ot*dt,G=0;it.userData.originalPosition={x:Lt,y:Kt,z:G},it.position.set(Lt,Kt,G);const wt=M.current.find(Rt=>Rt.model===it);wt&&wt.sphere.center.copy(it.position)})},Et=()=>{if(P.current=requestAnimationFrame(Et),!p.current||!m.current||!h.current)return;if(!b.current&&!Z.current){x.current.setFromCamera(g.current,m.current);const it=M.current.find(ht=>x.current.ray.intersectsSphere(ht.sphere));if(it?y.current=it.model:y.current=null,it&&d.current){const ht=it.model.position.clone();ht.y-=ot*.55,ht.project(m.current);const Ot=d.current.clientWidth,zt=d.current.clientHeight,Lt=(ht.x*.5+.5)*Ot,Kt=(-(ht.y*.5)+.5)*zt;r({name:it.model.userData.fileName,x:Lt,y:Kt})}else r(null)}else y.current=null,r(null);let Mt=0,vt=ot*1.5,Nt=.005,Ft=.005;if(y.current&&!b.current&&!Z.current){Mt=.5,vt=ot*3;const it=m.current.position,ht=y.current.position,zt=ht.clone().sub(it).normalize().multiplyScalar(ot);U.current.position.copy(ht).add(zt),Nt=.02,Ft=.02}else vt=ot*1.5;if(F.current=No.lerp(F.current,Mt,Nt),V.current=No.lerp(V.current,vt,Ft),U.current&&(U.current.material.opacity=F.current,U.current.scale.setScalar(V.current),U.current.visible=F.current>.01),b.current){if(A.current){const{theta:ht,phi:Ot}=D.current,zt=1200*Math.sin(Ot)*Math.sin(ht),Lt=1200*Math.cos(Ot),Kt=1200*Math.sin(Ot)*Math.cos(ht),G=new rt(zt,Lt,Kt),wt=G.clone().normalize().negate(),Rt=new rt(0,1,0),Ct=new rt().crossVectors(wt,Rt).normalize(),Tt=new rt().crossVectors(Ct,wt).normalize(),mt=Ct.multiplyScalar(O.current.x).add(Tt.multiplyScalar(O.current.y)),Gt=A.current.position.clone();It.copy(Gt).add(mt),lt.copy(Gt).add(G).add(mt),tt.lerp(lt,.1),Dt.lerp(It,.1)}}else{const it=-H.current;lt.y=it,It.y=it,lt.x=0,lt.z=ut.current,It.x=0,It.z=0,tt.lerp(lt,.05),Dt.lerp(It,.05)}m.current.position.copy(tt),m.current.lookAt(Dt),v.current.forEach(it=>{if(it===A.current)it.material.transparent=!1,it.material.opacity=1,it.visible=!0;else{it.rotation.z-=.001;const ht=b.current?0:1,Ot=it.material.opacity,zt=No.lerp(Ot,ht,.05),Lt=zt<.99;it.material.transparent=Lt,it.material.opacity=zt,it.visible=zt>.01}}),h.current.render(p.current,m.current)};Et();const ft=()=>{if(!d.current||!m.current||!h.current)return;const Mt=d.current.clientWidth,vt=d.current.clientHeight;m.current.aspect=Mt/vt,m.current.updateProjectionMatrix(),h.current.setSize(Mt,vt),qt(Mt,vt),gt(),b.current&&A.current&&bt(Mt,vt)};return window.addEventListener("resize",ft),()=>{var Mt,vt,Nt,Ft;window.removeEventListener("resize",ft),(Mt=d.current)==null||Mt.removeEventListener("mousedown",Xt),(vt=d.current)==null||vt.removeEventListener("mousemove",Pe),window.removeEventListener("mouseup",Zt),(Nt=d.current)==null||Nt.removeEventListener("wheel",ae),cancelAnimationFrame(P.current),(Ft=h.current)==null||Ft.dispose(),d.current&&h.current&&d.current.removeChild(h.current.domElement)}},[o]),$t.useEffect(()=>{b.current&&d.current&&bt(d.current.clientWidth,d.current.clientHeight)},[l]),$t.useEffect(()=>{!c&&b.current&&K.current()},[c]),$t.useEffect(()=>{t||(b.current=!1,A.current=null)},[t]),Wt.jsx("div",{ref:d,className:"w-full h-full relative"})};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ET=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),TT=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Og=o=>{const t=TT(o);return t.charAt(0).toUpperCase()+t.slice(1)},x_=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),AT=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var RT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CT=$t.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...p},m)=>$t.createElement("svg",{ref:m,...RT,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:x_("lucide",l),...!c&&!AT(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,x])=>$t.createElement(h,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=(o,t)=>{const i=$t.forwardRef(({className:r,...l},c)=>$t.createElement(CT,{ref:c,iconNode:t,className:x_(`lucide-${ET(Og(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Og(o),i};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wT=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],DT=Fs("box",wT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UT=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],LT=Fs("code",UT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NT=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],OT=Fs("github",NT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],g_=Fs("key",zT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],FT=Fs("loader-circle",PT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],IT=Fs("x",BT),HT=({model:o,visible:t,onClose:i,width:r,onResize:l})=>{const c=$t.useRef(!1),[d,p]=$t.useState(!1);$t.useEffect(()=>{const v=()=>p(window.innerWidth<=768);return v(),window.addEventListener("resize",v),()=>window.removeEventListener("resize",v)},[]),$t.useEffect(()=>{const v=b=>{if(c.current)if(b.preventDefault(),window.innerWidth>768){const A=window.innerWidth-b.clientX,y=Math.max(300,Math.min(A,window.innerWidth*.6));l(y)}else{const A=window.innerHeight-b.clientY,y=Math.max(200,Math.min(A,window.innerHeight*.9));l(y)}},M=()=>{c.current=!1,document.body.style.cursor="",document.body.style.userSelect=""};return document.addEventListener("mousemove",v),document.addEventListener("mouseup",M),()=>{document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",M)}},[l]);const m=v=>{c.current=!0,document.body.style.userSelect="none",document.body.style.cursor=window.innerWidth>768?"ew-resize":"ns-resize"};if(!o)return null;const h=o.userData.fileName,x=o.userData.scadContent,g=!!x;return Wt.jsxs("div",{style:{width:d?"100%":`${r}px`,height:d?`${r}px`:"100%"},className:`fixed bg-gray-900 text-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50 flex flex-col
        /* Base positioning */
        bottom-0 right-0 
        /* Mobile overrides */
        ${d?"left-0 rounded-t-2xl border-t border-white/10":"top-0 left-auto rounded-none border-l border-white/10"}
        ${t?"translate-y-0 translate-x-0":d?"translate-y-full":"translate-x-full"}
      `,children:[Wt.jsx("div",{onMouseDown:m,className:`absolute z-50 flex items-center justify-center
          ${d?"top-0 left-0 w-full h-6 cursor-ns-resize -mt-3":"top-0 left-0 w-1 h-full cursor-ew-resize -ml-0.5"}
        `,children:d&&Wt.jsx("div",{className:"w-12 h-1 bg-white/20 rounded-full mt-8 pointer-events-none"})}),Wt.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-900/20 to-transparent shrink-0",children:[Wt.jsx("h2",{className:"text-xl font-bold font-mono text-cyan-400 truncate pr-4",children:h}),Wt.jsx("button",{onClick:i,className:"p-2 rounded-full hover:bg-white/10 transition-colors",children:Wt.jsx(IT,{size:20})})]}),Wt.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[Wt.jsxs("div",{className:"bg-white/5 rounded-xl p-4 border border-white/5",children:[Wt.jsxs("div",{className:"flex items-center gap-3 mb-3 text-sm text-gray-400",children:[Wt.jsx(DT,{size:16,className:"text-pink-500"}),Wt.jsx("span",{children:"Model Details"})]}),Wt.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:"This 3D model was procedurally loaded from the repository. Rendered with standard physical materials in a Three.js environment."})]}),g?Wt.jsxs("div",{className:"space-y-2",children:[Wt.jsxs("div",{className:"flex items-center gap-2 text-sm text-green-400 font-mono",children:[Wt.jsx(LT,{size:16}),Wt.jsx("span",{children:"Source Code (.scad)"})]}),Wt.jsx("div",{className:"bg-black/50 rounded-lg p-4 border border-white/5 overflow-x-auto",children:Wt.jsx("pre",{className:"text-xs font-mono text-gray-300 whitespace-pre-wrap break-all",children:x})})]}):Wt.jsx("div",{className:"p-8 text-center text-gray-500 border border-dashed border-white/10 rounded-xl",children:Wt.jsx("span",{className:"block text-sm",children:"No source code available for this binary STL."})})]})]})},GT=({isOpen:o,onSubmit:t,message:i})=>{const[r,l]=$t.useState("");return o?Wt.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",children:Wt.jsxs("div",{className:"w-full max-w-md bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-8",children:[Wt.jsxs("div",{className:"flex flex-col items-center gap-4 mb-6",children:[Wt.jsx("div",{className:"p-4 bg-purple-500/10 rounded-full text-purple-400",children:Wt.jsx(g_,{size:32})}),Wt.jsx("h2",{className:"text-2xl font-bold text-white text-center",children:"GitHub Access Required"}),Wt.jsx("p",{className:"text-center text-gray-400 text-sm",children:i||"The GitHub API rate limit has been reached. Please provide a Personal Access Token (PAT) to continue exploring the repository."})]}),Wt.jsxs("form",{onSubmit:c=>{c.preventDefault(),r.trim()&&t(r)},className:"space-y-4",children:[Wt.jsx("input",{type:"password",value:r,onChange:c=>l(c.target.value),placeholder:"ghp_xxxxxxxxxxxx",className:"w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-mono text-sm",autoFocus:!0}),Wt.jsx("button",{type:"submit",className:"w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg transition-colors",children:"Authenticate"})]}),Wt.jsx("p",{className:"mt-4 text-xs text-center text-gray-600",children:"Token is stored locally and sent only to GitHub API."})]})}):null},VT="https://api.github.com";class XT{constructor(t,i){this.owner=t,this.repo=i,this.token=localStorage.getItem("github_pat")}setToken(t){this.token=t,localStorage.setItem("github_pat",t)}async fetchAllFiles(t=""){const i=`stlverse-${this.owner}-${this.repo}-${t}`,r=localStorage.getItem(i);if(r){const{timestamp:d,data:p}=JSON.parse(r);if(Date.now()-d<36e5)return p}const l=this.token?{Authorization:`token ${this.token}`}:{},c=`${VT}/repos/${this.owner}/${this.repo}/contents/${t}`;try{const d=await fetch(c,{headers:l});if(d.status===403)throw new Error("RATE_LIMITED");if(!d.ok)throw new Error(`GitHub API Error: ${d.statusText}`);const p=await d.json();let m=[],h=[],x=[];const g=[];for(const b of p)if(b.type==="file"){const A=b.name.toLowerCase();A.endsWith(".stl")?h.push({name:b.name,url:b.download_url,path:b.path}):A.endsWith(".scad")&&x.push({name:b.name,url:b.download_url,path:b.path})}else b.type==="dir"&&g.push(this.fetchAllFiles(b.path));(await Promise.all(g)).forEach(b=>{m=m.concat(b)});for(const b of h){const A=b.name.replace(/\.[^/.]+$/,"");let y=x.find(S=>S.name===`${A}.scad`);if(!y&&x.length>0&&(y=x[0]),y)try{const S=await this.fetchFileContent(y.url);b.scadContent=S}catch(S){console.warn("Failed to fetch SCAD content",S)}m.push(b)}const M=m;try{localStorage.setItem(i,JSON.stringify({timestamp:Date.now(),data:M}))}catch{console.warn("LocalStorage full, skipping cache")}return M}catch(d){throw d}}async fetchFileContent(t){const i=this.token?{Authorization:`token ${this.token}`}:{},r=await fetch(t,{headers:i});return r.ok?await r.text():""}}const __="abphung",v_="OpenSCADProjects",zg=new XT(__,v_);function kT(){const[o,t]=$t.useState([]),[i,r]=$t.useState(!0),[l,c]=$t.useState(null),[d,p]=$t.useState(!1),[m,h]=$t.useState(),[x,g]=$t.useState({current:0,total:0}),[v,M]=$t.useState(null),[b,A]=$t.useState(450),y=$t.useRef(null),S=$t.useCallback(async()=>{r(!0),c(null);try{const D=await zg.fetchAllFiles();t(D)}catch(D){const O=D.message||"";O==="RATE_LIMITED"?(h("The GitHub API rate limit has been reached. Please provide a Personal Access Token (PAT) to continue."),p(!0)):O.startsWith("GitHub API Error")?(h(`GitHub API Error: ${O.replace("GitHub API Error: ","")}. Please update your Access Token.`),p(!0)):c(O||"Failed to fetch repository contents.")}finally{r(!1)}},[]);$t.useEffect(()=>{S()},[S]);const P=D=>{zg.setToken(D),p(!1),S()},U=(D,O)=>{g({current:D,total:O})},F=()=>{h("Please enter your GitHub Personal Access Token."),p(!0)},V=$t.useCallback(D=>{y.current&&(D&&!v?(y.current.style.display="block",y.current.textContent=D.name,y.current.style.left=`${D.x}px`,y.current.style.top=`${D.y}px`):y.current.style.display="none")},[v]);return Wt.jsxs("div",{className:"w-full h-screen bg-gray-50 relative overflow-hidden font-sans select-none",children:[Wt.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-sky-400 via-indigo-400 to-orange-500 pointer-events-none"}),!i&&!l&&o.length>0&&Wt.jsx("div",{className:"absolute inset-0 z-0",children:Wt.jsx(bT,{files:o,onModelSelect:M,onProgress:U,onHover:V,panelSize:b,selectedModel:v})}),Wt.jsx("div",{ref:y,className:"absolute pointer-events-none z-[1] px-4 py-2 text-gray-900 text-sm rounded-lg shadow-xl font-mono tracking-wide whitespace-nowrap hidden mt-4 border",style:{transform:"translateX(-50%)",backgroundColor:"#ffe4e9",borderColor:"#ffe4e9"}}),Wt.jsx("div",{className:"absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900 from-10% via-gray-900/40 to-transparent pointer-events-none z-20"}),Wt.jsx("div",{className:"absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-900 from-10% via-gray-900/40 to-transparent pointer-events-none z-20"}),Wt.jsxs("div",{className:`absolute top-0 left-0 p-8 z-30 transition-opacity duration-500 ${v?"opacity-0 pointer-events-none":"opacity-100"}`,children:[Wt.jsxs("h1",{className:"text-4xl font-black text-white tracking-tighter mb-2 drop-shadow-md",children:["STL",Wt.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-orange-100",children:"VERSE"})]}),Wt.jsxs("div",{className:"flex items-center gap-2 text-white/80 text-sm font-mono drop-shadow",children:[Wt.jsx(OT,{size:16}),Wt.jsxs("span",{children:[__," / ",v_]})]})]}),(i||o.length>0&&x.current<o.length)&&Wt.jsxs("div",{className:"absolute bottom-8 left-8 z-40 bg-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700",children:[Wt.jsx(FT,{className:"animate-spin text-purple-600",size:24}),Wt.jsxs("div",{children:[Wt.jsx("div",{className:"text-gray-900 text-sm font-semibold",children:i?"Fetching Repository...":"Rendering Models"}),Wt.jsx("div",{className:"text-xs text-gray-600 font-mono mt-1",children:x.total>0?`${x.current} / ${x.total} loaded`:"Connecting to GitHub API..."})]})]}),l&&!d&&Wt.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-50",children:Wt.jsxs("div",{className:"text-center max-w-lg p-8 bg-gray-900/90 backdrop-blur rounded-2xl border border-white/20 shadow-2xl",children:[Wt.jsx("h2",{className:"text-red-500 text-xl font-bold mb-2",children:"Connection Error"}),Wt.jsx("p",{className:"text-white mb-6",children:l}),Wt.jsxs("div",{className:"flex gap-4 justify-center",children:[Wt.jsx("button",{onClick:S,className:"px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-semibold",children:"Retry"}),Wt.jsxs("button",{onClick:F,className:"px-6 py-2 bg-purple-500/50 hover:bg-purple-500/60 text-white border border-white/20 rounded-lg transition-colors flex items-center gap-2",children:[Wt.jsx(g_,{size:16}),"Update API Key"]})]})]})}),Wt.jsx(HT,{model:v,visible:!!v,onClose:()=>M(null),width:b,onResize:A}),Wt.jsx(GT,{isOpen:d,onSubmit:P,message:m}),!v&&!i&&Wt.jsxs("div",{className:"absolute bottom-8 right-8 text-right text-white/90 text-xs font-mono pointer-events-none drop-shadow-sm z-30",children:[Wt.jsx("p",{children:"SCROLL to navigate"}),Wt.jsx("p",{children:"CLICK to inspect / DRAG to rotate"})]})]})}const S_=document.getElementById("root");if(!S_)throw new Error("Could not find root element to mount to");const WT=PS.createRoot(S_);WT.render(Wt.jsx(CS.StrictMode,{children:Wt.jsx(kT,{})}));
