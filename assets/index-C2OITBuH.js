(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();var Qu={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function mx(){if(gp)return yl;gp=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(s,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:i,type:s,key:h,ref:c!==void 0?c:null,props:f}}return yl.Fragment=l,yl.jsx=o,yl.jsxs=o,yl}var yp;function px(){return yp||(yp=1,Qu.exports=mx()),Qu.exports}var v=px(),Zu={exports:{}},he={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bp;function vx(){if(bp)return he;bp=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function w(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,k={};function C(T,H,$){this.props=T,this.context=H,this.refs=k,this.updater=$||j}C.prototype.isReactComponent={},C.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},C.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function L(){}L.prototype=C.prototype;function O(T,H,$){this.props=T,this.context=H,this.refs=k,this.updater=$||j}var _=O.prototype=new L;_.constructor=O,N(_,C.prototype),_.isPureReactComponent=!0;var Q=Array.isArray;function ne(){}var K={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function ie(T,H,$){var Z=$.ref;return{$$typeof:i,type:T,key:H,ref:Z!==void 0?Z:null,props:$}}function ee(T,H){return ie(T.type,H,T.props)}function se(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function W(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function($){return H[$]})}var pe=/\/+/g;function ge(T,H){return typeof T=="object"&&T!==null&&T.key!=null?W(""+T.key):H.toString(36)}function ve(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(ne,ne):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function V(T,H,$,Z,le){var ce=typeof T;(ce==="undefined"||ce==="boolean")&&(T=null);var je=!1;if(T===null)je=!0;else switch(ce){case"bigint":case"string":case"number":je=!0;break;case"object":switch(T.$$typeof){case i:case l:je=!0;break;case b:return je=T._init,V(je(T._payload),H,$,Z,le)}}if(je)return le=le(T),je=Z===""?"."+ge(T,0):Z,Q(le)?($="",je!=null&&($=je.replace(pe,"$&/")+"/"),V(le,H,$,"",function(ii){return ii})):le!=null&&(se(le)&&(le=ee(le,$+(le.key==null||T&&T.key===le.key?"":(""+le.key).replace(pe,"$&/")+"/")+je)),H.push(le)),1;je=0;var et=Z===""?".":Z+":";if(Q(T))for(var Ue=0;Ue<T.length;Ue++)Z=T[Ue],ce=et+ge(Z,Ue),je+=V(Z,H,$,ce,le);else if(Ue=w(T),typeof Ue=="function")for(T=Ue.call(T),Ue=0;!(Z=T.next()).done;)Z=Z.value,ce=et+ge(Z,Ue++),je+=V(Z,H,$,ce,le);else if(ce==="object"){if(typeof T.then=="function")return V(ve(T),H,$,Z,le);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return je}function X(T,H,$){if(T==null)return T;var Z=[],le=0;return V(T,Z,"","",function(ce){return H.call($,ce,le++)}),Z}function J(T){if(T._status===-1){var H=T._result;H=H(),H.then(function($){(T._status===0||T._status===-1)&&(T._status=1,T._result=$)},function($){(T._status===0||T._status===-1)&&(T._status=2,T._result=$)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var ue=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},me={map:X,forEach:function(T,H,$){X(T,function(){H.apply(this,arguments)},$)},count:function(T){var H=0;return X(T,function(){H++}),H},toArray:function(T){return X(T,function(H){return H})||[]},only:function(T){if(!se(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return he.Activity=x,he.Children=me,he.Component=C,he.Fragment=o,he.Profiler=c,he.PureComponent=O,he.StrictMode=s,he.Suspense=g,he.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,he.__COMPILER_RUNTIME={__proto__:null,c:function(T){return K.H.useMemoCache(T)}},he.cache=function(T){return function(){return T.apply(null,arguments)}},he.cacheSignal=function(){return null},he.cloneElement=function(T,H,$){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Z=N({},T.props),le=T.key;if(H!=null)for(ce in H.key!==void 0&&(le=""+H.key),H)!F.call(H,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&H.ref===void 0||(Z[ce]=H[ce]);var ce=arguments.length-2;if(ce===1)Z.children=$;else if(1<ce){for(var je=Array(ce),et=0;et<ce;et++)je[et]=arguments[et+2];Z.children=je}return ie(T.type,le,Z)},he.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},he.createElement=function(T,H,$){var Z,le={},ce=null;if(H!=null)for(Z in H.key!==void 0&&(ce=""+H.key),H)F.call(H,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(le[Z]=H[Z]);var je=arguments.length-2;if(je===1)le.children=$;else if(1<je){for(var et=Array(je),Ue=0;Ue<je;Ue++)et[Ue]=arguments[Ue+2];le.children=et}if(T&&T.defaultProps)for(Z in je=T.defaultProps,je)le[Z]===void 0&&(le[Z]=je[Z]);return ie(T,ce,le)},he.createRef=function(){return{current:null}},he.forwardRef=function(T){return{$$typeof:m,render:T}},he.isValidElement=se,he.lazy=function(T){return{$$typeof:b,_payload:{_status:-1,_result:T},_init:J}},he.memo=function(T,H){return{$$typeof:p,type:T,compare:H===void 0?null:H}},he.startTransition=function(T){var H=K.T,$={};K.T=$;try{var Z=T(),le=K.S;le!==null&&le($,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(ne,ue)}catch(ce){ue(ce)}finally{H!==null&&$.types!==null&&(H.types=$.types),K.T=H}},he.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},he.use=function(T){return K.H.use(T)},he.useActionState=function(T,H,$){return K.H.useActionState(T,H,$)},he.useCallback=function(T,H){return K.H.useCallback(T,H)},he.useContext=function(T){return K.H.useContext(T)},he.useDebugValue=function(){},he.useDeferredValue=function(T,H){return K.H.useDeferredValue(T,H)},he.useEffect=function(T,H){return K.H.useEffect(T,H)},he.useEffectEvent=function(T){return K.H.useEffectEvent(T)},he.useId=function(){return K.H.useId()},he.useImperativeHandle=function(T,H,$){return K.H.useImperativeHandle(T,H,$)},he.useInsertionEffect=function(T,H){return K.H.useInsertionEffect(T,H)},he.useLayoutEffect=function(T,H){return K.H.useLayoutEffect(T,H)},he.useMemo=function(T,H){return K.H.useMemo(T,H)},he.useOptimistic=function(T,H){return K.H.useOptimistic(T,H)},he.useReducer=function(T,H,$){return K.H.useReducer(T,H,$)},he.useRef=function(T){return K.H.useRef(T)},he.useState=function(T){return K.H.useState(T)},he.useSyncExternalStore=function(T,H,$){return K.H.useSyncExternalStore(T,H,$)},he.useTransition=function(){return K.H.useTransition()},he.version="19.2.6",he}var xp;function Hc(){return xp||(xp=1,Zu.exports=vx()),Zu.exports}var G=Hc(),Ku={exports:{}},bl={},Fu={exports:{}},Ju={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function gx(){return Sp||(Sp=1,(function(i){function l(V,X){var J=V.length;V.push(X);e:for(;0<J;){var ue=J-1>>>1,me=V[ue];if(0<c(me,X))V[ue]=X,V[J]=me,J=ue;else break e}}function o(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var X=V[0],J=V.pop();if(J!==X){V[0]=J;e:for(var ue=0,me=V.length,T=me>>>1;ue<T;){var H=2*(ue+1)-1,$=V[H],Z=H+1,le=V[Z];if(0>c($,J))Z<me&&0>c(le,$)?(V[ue]=le,V[Z]=J,ue=Z):(V[ue]=$,V[H]=J,ue=H);else if(Z<me&&0>c(le,J))V[ue]=le,V[Z]=J,ue=Z;else break e}}return X}function c(V,X){var J=V.sortIndex-X.sortIndex;return J!==0?J:V.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var g=[],p=[],b=1,x=null,S=3,w=!1,j=!1,N=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function _(V){for(var X=o(p);X!==null;){if(X.callback===null)s(p);else if(X.startTime<=V)s(p),X.sortIndex=X.expirationTime,l(g,X);else break;X=o(p)}}function Q(V){if(N=!1,_(V),!j)if(o(g)!==null)j=!0,ne||(ne=!0,W());else{var X=o(p);X!==null&&ve(Q,X.startTime-V)}}var ne=!1,K=-1,F=5,ie=-1;function ee(){return k?!0:!(i.unstable_now()-ie<F)}function se(){if(k=!1,ne){var V=i.unstable_now();ie=V;var X=!0;try{e:{j=!1,N&&(N=!1,L(K),K=-1),w=!0;var J=S;try{t:{for(_(V),x=o(g);x!==null&&!(x.expirationTime>V&&ee());){var ue=x.callback;if(typeof ue=="function"){x.callback=null,S=x.priorityLevel;var me=ue(x.expirationTime<=V);if(V=i.unstable_now(),typeof me=="function"){x.callback=me,_(V),X=!0;break t}x===o(g)&&s(g),_(V)}else s(g);x=o(g)}if(x!==null)X=!0;else{var T=o(p);T!==null&&ve(Q,T.startTime-V),X=!1}}break e}finally{x=null,S=J,w=!1}X=void 0}}finally{X?W():ne=!1}}}var W;if(typeof O=="function")W=function(){O(se)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ge=pe.port2;pe.port1.onmessage=se,W=function(){ge.postMessage(null)}}else W=function(){C(se,0)};function ve(V,X){K=C(function(){V(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(V){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var J=S;S=X;try{return V()}finally{S=J}},i.unstable_requestPaint=function(){k=!0},i.unstable_runWithPriority=function(V,X){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var J=S;S=V;try{return X()}finally{S=J}},i.unstable_scheduleCallback=function(V,X,J){var ue=i.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ue+J:ue):J=ue,V){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=J+me,V={id:b++,callback:X,priorityLevel:V,startTime:J,expirationTime:me,sortIndex:-1},J>ue?(V.sortIndex=J,l(p,V),o(g)===null&&V===o(p)&&(N?(L(K),K=-1):N=!0,ve(Q,J-ue))):(V.sortIndex=me,l(g,V),j||w||(j=!0,ne||(ne=!0,W()))),V},i.unstable_shouldYield=ee,i.unstable_wrapCallback=function(V){var X=S;return function(){var J=S;S=X;try{return V.apply(this,arguments)}finally{S=J}}}})(Ju)),Ju}var jp;function yx(){return jp||(jp=1,Fu.exports=gx()),Fu.exports}var $u={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function bx(){if(Ap)return rt;Ap=1;var i=Hc();function l(g){var p="https://react.dev/errors/"+g;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+g+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(g,p,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:g,containerInfo:p,implementation:b}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(g,p){if(g==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,rt.createPortal=function(g,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(l(299));return f(g,p,null,b)},rt.flushSync=function(g){var p=h.T,b=s.p;try{if(h.T=null,s.p=2,g)return g()}finally{h.T=p,s.p=b,s.d.f()}},rt.preconnect=function(g,p){typeof g=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(g,p))},rt.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},rt.preinit=function(g,p){if(typeof g=="string"&&p&&typeof p.as=="string"){var b=p.as,x=m(b,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,w=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?s.d.S(g,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:w}):b==="script"&&s.d.X(g,{crossOrigin:x,integrity:S,fetchPriority:w,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},rt.preinitModule=function(g,p){if(typeof g=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=m(p.as,p.crossOrigin);s.d.M(g,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(g)},rt.preload=function(g,p){if(typeof g=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,x=m(b,p.crossOrigin);s.d.L(g,b,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},rt.preloadModule=function(g,p){if(typeof g=="string")if(p){var b=m(p.as,p.crossOrigin);s.d.m(g,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(g)},rt.requestFormReset=function(g){s.d.r(g)},rt.unstable_batchedUpdates=function(g,p){return g(p)},rt.useFormState=function(g,p,b){return h.H.useFormState(g,p,b)},rt.useFormStatus=function(){return h.H.useHostTransitionStatus()},rt.version="19.2.6",rt}var wp;function xx(){if(wp)return $u.exports;wp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),$u.exports=bx(),$u.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Sx(){if(Tp)return bl;Tp=1;var i=yx(),l=Hc(),o=xx();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(f(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(s(188));return t!==e?null:e}for(var n=e,a=t;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return g(r),e;if(u===a)return g(r),t;u=u.sibling}throw Error(s(188))}if(n.return!==a.return)n=r,a=u;else{for(var d=!1,y=r.child;y;){if(y===n){d=!0,n=r,a=u;break}if(y===a){d=!0,a=r,n=u;break}y=y.sibling}if(!d){for(y=u.child;y;){if(y===n){d=!0,n=u,a=r;break}if(y===a){d=!0,a=u,n=r;break}y=y.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),O=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),se=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=se&&e[se]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case C:return"Profiler";case k:return"StrictMode";case Q:return"Suspense";case ne:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case O:return e.displayName||"Context";case L:return(e._context.displayName||"Context")+".Consumer";case _:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:ge(e.type)||"Memo";case F:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}var ve=Array.isArray,V=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ue=[],me=-1;function T(e){return{current:e}}function H(e){0>me||(e.current=ue[me],ue[me]=null,me--)}function $(e,t){me++,ue[me]=e.current,e.current=t}var Z=T(null),le=T(null),ce=T(null),je=T(null);function et(e,t){switch($(ce,t),$(le,e),$(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qm(t),e=Hm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}H(Z),$(Z,e)}function Ue(){H(Z),H(le),H(ce)}function ii(e){e.memoizedState!==null&&$(je,e);var t=Z.current,n=Hm(t,e.type);t!==n&&($(le,e),$(Z,n))}function Mi(e){le.current===e&&(H(Z),H(le)),je.current===e&&(H(je),ml._currentValue=J)}var wa,ft;function zt(e){if(wa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wa=t&&t[1]||"",ft=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wa+e+ft}var Ta=!1;function ai(e,t){if(!e||Ta)return"";Ta=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(B){var R=B}Reflect.construct(e,[],Y)}else{try{Y.call()}catch(B){R=B}e.call(Y.prototype)}}else{try{throw Error()}catch(B){R=B}(Y=e())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(B){if(B&&R&&typeof B.stack=="string")return[B.stack,R.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),d=u[0],y=u[1];if(d&&y){var A=d.split(`
`),z=y.split(`
`);for(r=a=0;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;for(;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;if(a===A.length||r===z.length)for(a=A.length-1,r=z.length-1;1<=a&&0<=r&&A[a]!==z[r];)r--;for(;1<=a&&0<=r;a--,r--)if(A[a]!==z[r]){if(a!==1||r!==1)do if(a--,r--,0>r||A[a]!==z[r]){var U=`
`+A[a].replace(" at new "," at ");return e.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",e.displayName)),U}while(1<=a&&0<=r);break}}}finally{Ta=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?zt(n):""}function Qy(e,t){switch(e.tag){case 26:case 27:case 5:return zt(e.type);case 16:return zt("Lazy");case 13:return e.child!==t&&t!==null?zt("Suspense Fallback"):zt("Suspense");case 19:return zt("SuspenseList");case 0:case 15:return ai(e.type,!1);case 11:return ai(e.type.render,!1);case 1:return ai(e.type,!0);case 31:return zt("Activity");default:return""}}function vh(e){try{var t="",n=null;do t+=Qy(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var No=Object.prototype.hasOwnProperty,zo=i.unstable_scheduleCallback,Vo=i.unstable_cancelCallback,Zy=i.unstable_shouldYield,Ky=i.unstable_requestPaint,xt=i.unstable_now,Fy=i.unstable_getCurrentPriorityLevel,gh=i.unstable_ImmediatePriority,yh=i.unstable_UserBlockingPriority,Bl=i.unstable_NormalPriority,Jy=i.unstable_LowPriority,bh=i.unstable_IdlePriority,$y=i.log,Wy=i.unstable_setDisableYieldValue,Ea=null,St=null;function Tn(e){if(typeof $y=="function"&&Wy(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(Ea,e)}catch{}}var jt=Math.clz32?Math.clz32:eb,Py=Math.log,Iy=Math.LN2;function eb(e){return e>>>=0,e===0?32:31-(Py(e)/Iy|0)|0}var Ol=256,_l=262144,Ul=4194304;function li(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ll(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var r=0,u=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var y=a&134217727;return y!==0?(a=y&~u,a!==0?r=li(a):(d&=y,d!==0?r=li(d):n||(n=y&~e,n!==0&&(r=li(n))))):(y=a&~u,y!==0?r=li(y):d!==0?r=li(d):n||(n=a&~e,n!==0&&(r=li(n)))),r===0?0:t!==0&&t!==r&&(t&u)===0&&(u=r&-r,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:r}function Da(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tb(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xh(){var e=Ul;return Ul<<=1,(Ul&62914560)===0&&(Ul=4194304),e}function Ro(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ca(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nb(e,t,n,a,r,u){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var y=e.entanglements,A=e.expirationTimes,z=e.hiddenUpdates;for(n=d&~n;0<n;){var U=31-jt(n),Y=1<<U;y[U]=0,A[U]=-1;var R=z[U];if(R!==null)for(z[U]=null,U=0;U<R.length;U++){var B=R[U];B!==null&&(B.lane&=-536870913)}n&=~Y}a!==0&&Sh(e,a,0),u!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=u&~(d&~t))}function Sh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-jt(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function jh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-jt(n),r=1<<a;r&t|e[a]&t&&(e[a]|=t),n&=~r}}function Ah(e,t){var n=t&-t;return n=(n&42)!==0?1:ko(n),(n&(e.suspendedLanes|t))!==0?0:n}function ko(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wh(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:cp(e.type))}function Th(e,t){var n=X.p;try{return X.p=e,t()}finally{X.p=n}}var En=Math.random().toString(36).slice(2),tt="__reactFiber$"+En,dt="__reactProps$"+En,Ni="__reactContainer$"+En,Oo="__reactEvents$"+En,ib="__reactListeners$"+En,ab="__reactHandles$"+En,Eh="__reactResources$"+En,Ma="__reactMarker$"+En;function _o(e){delete e[tt],delete e[dt],delete e[Oo],delete e[ib],delete e[ab]}function zi(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ni]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fm(e);e!==null;){if(n=e[tt])return n;e=Fm(e)}return t}e=n,n=e.parentNode}return null}function Vi(e){if(e=e[tt]||e[Ni]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Na(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Ri(e){var t=e[Eh];return t||(t=e[Eh]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[Ma]=!0}var Dh=new Set,Ch={};function si(e,t){ki(e,t),ki(e+"Capture",t)}function ki(e,t){for(Ch[e]=t,e=0;e<t.length;e++)Dh.add(t[e])}var lb=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mh={},Nh={};function sb(e){return No.call(Nh,e)?!0:No.call(Mh,e)?!1:lb.test(e)?Nh[e]=!0:(Mh[e]=!0,!1)}function ql(e,t,n){if(sb(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Hl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function sn(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function Vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ob(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,u=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,u.call(this,d)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){if(!e._valueTracker){var t=zh(e)?"checked":"value";e._valueTracker=ob(e,t,""+e[t])}}function Vh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=zh(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Yl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rb=/[\n"\\]/g;function Rt(e){return e.replace(rb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Lo(e,t,n,a,r,u,d,y){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vt(t)):e.value!==""+Vt(t)&&(e.value=""+Vt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?qo(e,d,Vt(t)):n!=null?qo(e,d,Vt(n)):a!=null&&e.removeAttribute("value"),r==null&&u!=null&&(e.defaultChecked=!!u),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+Vt(y):e.removeAttribute("name")}function Rh(e,t,n,a,r,u,d,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){Uo(e);return}n=n!=null?""+Vt(n):"",t=t!=null?""+Vt(t):n,y||t===e.value||(e.value=t),e.defaultValue=t}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=y?e.checked:!!a,e.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Uo(e)}function qo(e,t,n){t==="number"&&Yl(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Bi(e,t,n,a){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&a&&(e[n].defaultSelected=!0)}else{for(n=""+Vt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,a&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function kh(e,t,n){if(t!=null&&(t=""+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Vt(n):""}function Bh(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(s(92));if(ve(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=Vt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),Uo(e)}function Oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ub=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Oh(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||ub.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function _h(e,t,n){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var r in t)a=t[r],t.hasOwnProperty(r)&&n[r]!==a&&Oh(e,r,a)}else for(var u in t)t.hasOwnProperty(u)&&Oh(e,u,t[u])}function Ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),hb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(e){return hb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function on(){}var Yo=null;function Go(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _i=null,Ui=null;function Uh(e){var t=Vi(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Lo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var r=a[dt]||null;if(!r)throw Error(s(90));Lo(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Vh(a)}break e;case"textarea":kh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Bi(e,!!n.multiple,t,!1)}}}var Xo=!1;function Lh(e,t,n){if(Xo)return e(t,n);Xo=!0;try{var a=e(t);return a}finally{if(Xo=!1,(_i!==null||Ui!==null)&&(Ns(),_i&&(t=_i,e=Ui,Ui=_i=null,Uh(t),e)))for(t=0;t<e.length;t++)Uh(e[t])}}function za(e,t){var n=e.stateNode;if(n===null)return null;var a=n[dt]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(s(231,t,typeof n));return n}var rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qo=!1;if(rn)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{Qo=!1}var Dn=null,Zo=null,Xl=null;function qh(){if(Xl)return Xl;var e,t=Zo,n=t.length,a,r="value"in Dn?Dn.value:Dn.textContent,u=r.length;for(e=0;e<n&&t[e]===r[e];e++);var d=n-e;for(a=1;a<=d&&t[n-a]===r[u-a];a++);return Xl=r.slice(e,1<a?1-a:void 0)}function Ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function Hh(){return!1}function mt(e){function t(n,a,r,u,d){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(n=e[y],this[y]=n?n(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zl:Hh,this.isPropagationStopped=Hh,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),t}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=mt(oi),Ra=x({},oi,{view:0,detail:0}),fb=mt(Ra),Ko,Fo,ka,Fl=x({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ka&&(ka&&e.type==="mousemove"?(Ko=e.screenX-ka.screenX,Fo=e.screenY-ka.screenY):Fo=Ko=0,ka=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:Fo}}),Yh=mt(Fl),db=x({},Fl,{dataTransfer:0}),mb=mt(db),pb=x({},Ra,{relatedTarget:0}),Jo=mt(pb),vb=x({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),gb=mt(vb),yb=x({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bb=mt(yb),xb=x({},oi,{data:0}),Gh=mt(xb),Sb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ab={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ab[e])?!!t[e]:!1}function $o(){return wb}var Tb=x({},Ra,{key:function(e){if(e.key){var t=Sb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$o,charCode:function(e){return e.type==="keypress"?Ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eb=mt(Tb),Db=x({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=mt(Db),Cb=x({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$o}),Mb=mt(Cb),Nb=x({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),zb=mt(Nb),Vb=x({},Fl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rb=mt(Vb),kb=x({},oi,{newState:0,oldState:0}),Bb=mt(kb),Ob=[9,13,27,32],Wo=rn&&"CompositionEvent"in window,Ba=null;rn&&"documentMode"in document&&(Ba=document.documentMode);var _b=rn&&"TextEvent"in window&&!Ba,Qh=rn&&(!Wo||Ba&&8<Ba&&11>=Ba),Zh=" ",Kh=!1;function Fh(e,t){switch(e){case"keyup":return Ob.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Li=!1;function Ub(e,t){switch(e){case"compositionend":return Jh(t);case"keypress":return t.which!==32?null:(Kh=!0,Zh);case"textInput":return e=t.data,e===Zh&&Kh?null:e;default:return null}}function Lb(e,t){if(Li)return e==="compositionend"||!Wo&&Fh(e,t)?(e=qh(),Xl=Zo=Dn=null,Li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qh&&t.locale!=="ko"?null:t.data;default:return null}}var qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qb[e.type]:t==="textarea"}function Wh(e,t,n,a){_i?Ui?Ui.push(a):Ui=[a]:_i=a,t=_s(t,"onChange"),0<t.length&&(n=new Kl("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Oa=null,_a=null;function Hb(e){km(e,0)}function Jl(e){var t=Na(e);if(Vh(t))return e}function Ph(e,t){if(e==="change")return t}var Ih=!1;if(rn){var Po;if(rn){var Io="oninput"in document;if(!Io){var ef=document.createElement("div");ef.setAttribute("oninput","return;"),Io=typeof ef.oninput=="function"}Po=Io}else Po=!1;Ih=Po&&(!document.documentMode||9<document.documentMode)}function tf(){Oa&&(Oa.detachEvent("onpropertychange",nf),_a=Oa=null)}function nf(e){if(e.propertyName==="value"&&Jl(_a)){var t=[];Wh(t,_a,e,Go(e)),Lh(Hb,t)}}function Yb(e,t,n){e==="focusin"?(tf(),Oa=t,_a=n,Oa.attachEvent("onpropertychange",nf)):e==="focusout"&&tf()}function Gb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jl(_a)}function Xb(e,t){if(e==="click")return Jl(t)}function Qb(e,t){if(e==="input"||e==="change")return Jl(t)}function Zb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var At=typeof Object.is=="function"?Object.is:Zb;function Ua(e,t){if(At(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!No.call(t,r)||!At(e[r],t[r]))return!1}return!0}function af(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lf(e,t){var n=af(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=af(n)}}function sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function of(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Yl(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Yl(e.document)}return t}function er(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Kb=rn&&"documentMode"in document&&11>=document.documentMode,qi=null,tr=null,La=null,nr=!1;function rf(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;nr||qi==null||qi!==Yl(a)||(a=qi,"selectionStart"in a&&er(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Ua(La,a)||(La=a,a=_s(tr,"onSelect"),0<a.length&&(t=new Kl("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=qi)))}function ri(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hi={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionrun:ri("Transition","TransitionRun"),transitionstart:ri("Transition","TransitionStart"),transitioncancel:ri("Transition","TransitionCancel"),transitionend:ri("Transition","TransitionEnd")},ir={},uf={};rn&&(uf=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function ui(e){if(ir[e])return ir[e];if(!Hi[e])return e;var t=Hi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in uf)return ir[e]=t[n];return e}var cf=ui("animationend"),hf=ui("animationiteration"),ff=ui("animationstart"),Fb=ui("transitionrun"),Jb=ui("transitionstart"),$b=ui("transitioncancel"),df=ui("transitionend"),mf=new Map,ar="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ar.push("scrollEnd");function Qt(e,t){mf.set(e,t),si(t,[e])}var $l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kt=[],Yi=0,lr=0;function Wl(){for(var e=Yi,t=lr=Yi=0;t<e;){var n=kt[t];kt[t++]=null;var a=kt[t];kt[t++]=null;var r=kt[t];kt[t++]=null;var u=kt[t];if(kt[t++]=null,a!==null&&r!==null){var d=a.pending;d===null?r.next=r:(r.next=d.next,d.next=r),a.pending=r}u!==0&&pf(n,r,u)}}function Pl(e,t,n,a){kt[Yi++]=e,kt[Yi++]=t,kt[Yi++]=n,kt[Yi++]=a,lr|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function sr(e,t,n,a){return Pl(e,t,n,a),Il(e)}function ci(e,t){return Pl(e,null,null,t),Il(e)}function pf(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var r=!1,u=e.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(r=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,r&&t!==null&&(r=31-jt(n),e=u.hiddenUpdates,a=e[r],a===null?e[r]=[t]:a.push(t),t.lane=n|536870912),u):null}function Il(e){if(50<ol)throw ol=0,pu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Gi={};function Wb(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,a){return new Wb(e,t,n,a)}function or(e){return e=e.prototype,!(!e||!e.isReactComponent)}function un(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function es(e,t,n,a,r,u){var d=0;if(a=e,typeof e=="function")or(e)&&(d=1);else if(typeof e=="string")d=nx(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=wt(31,n,t,r),e.elementType=ie,e.lanes=u,e;case N:return hi(n.children,r,u,t);case k:d=8,r|=24;break;case C:return e=wt(12,n,t,r|2),e.elementType=C,e.lanes=u,e;case Q:return e=wt(13,n,t,r),e.elementType=Q,e.lanes=u,e;case ne:return e=wt(19,n,t,r),e.elementType=ne,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:d=10;break e;case L:d=9;break e;case _:d=11;break e;case K:d=14;break e;case F:d=16,a=null;break e}d=29,n=Error(s(130,e===null?"null":typeof e,"")),a=null}return t=wt(d,n,t,r),t.elementType=e,t.type=a,t.lanes=u,t}function hi(e,t,n,a){return e=wt(7,e,a,t),e.lanes=n,e}function rr(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function gf(e){var t=wt(18,null,null,0);return t.stateNode=e,t}function ur(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var yf=new WeakMap;function Bt(e,t){if(typeof e=="object"&&e!==null){var n=yf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:vh(t)},yf.set(e,t),t)}return{value:e,source:t,stack:vh(t)}}var Xi=[],Qi=0,ts=null,qa=0,Ot=[],_t=0,Cn=null,Wt=1,Pt="";function cn(e,t){Xi[Qi++]=qa,Xi[Qi++]=ts,ts=e,qa=t}function bf(e,t,n){Ot[_t++]=Wt,Ot[_t++]=Pt,Ot[_t++]=Cn,Cn=e;var a=Wt;e=Pt;var r=32-jt(a)-1;a&=~(1<<r),n+=1;var u=32-jt(t)+r;if(30<u){var d=r-r%5;u=(a&(1<<d)-1).toString(32),a>>=d,r-=d,Wt=1<<32-jt(t)+r|n<<r|a,Pt=u+e}else Wt=1<<u|n<<r|a,Pt=e}function cr(e){e.return!==null&&(cn(e,1),bf(e,1,0))}function hr(e){for(;e===ts;)ts=Xi[--Qi],Xi[Qi]=null,qa=Xi[--Qi],Xi[Qi]=null;for(;e===Cn;)Cn=Ot[--_t],Ot[_t]=null,Pt=Ot[--_t],Ot[_t]=null,Wt=Ot[--_t],Ot[_t]=null}function xf(e,t){Ot[_t++]=Wt,Ot[_t++]=Pt,Ot[_t++]=Cn,Wt=t.id,Pt=t.overflow,Cn=e}var nt=null,Be=null,Ae=!1,Mn=null,Ut=!1,fr=Error(s(519));function Nn(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ha(Bt(t,e)),fr}function Sf(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[tt]=e,t[dt]=a,n){case"dialog":be("cancel",t),be("close",t);break;case"iframe":case"object":case"embed":be("load",t);break;case"video":case"audio":for(n=0;n<ul.length;n++)be(ul[n],t);break;case"source":be("error",t);break;case"img":case"image":case"link":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"input":be("invalid",t),Rh(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":be("invalid",t);break;case"textarea":be("invalid",t),Bh(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Um(t.textContent,n)?(a.popover!=null&&(be("beforetoggle",t),be("toggle",t)),a.onScroll!=null&&be("scroll",t),a.onScrollEnd!=null&&be("scrollend",t),a.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Nn(e,!0)}function jf(e){for(nt=e.return;nt;)switch(nt.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:nt=nt.return}}function Zi(e){if(e!==nt)return!1;if(!Ae)return jf(e),Ae=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Nu(e.type,e.memoizedProps)),n=!n),n&&Be&&Nn(e),jf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Be=Km(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Be=Km(e)}else t===27?(t=Be,Xn(e.type)?(e=Bu,Bu=null,Be=e):Be=t):Be=nt?qt(e.stateNode.nextSibling):null;return!0}function fi(){Be=nt=null,Ae=!1}function dr(){var e=Mn;return e!==null&&(yt===null?yt=e:yt.push.apply(yt,e),Mn=null),e}function Ha(e){Mn===null?Mn=[e]:Mn.push(e)}var mr=T(null),di=null,hn=null;function zn(e,t,n){$(mr,t._currentValue),t._currentValue=n}function fn(e){e._currentValue=mr.current,H(mr)}function pr(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function vr(e,t,n,a){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var u=r.dependencies;if(u!==null){var d=r.child;u=u.firstContext;e:for(;u!==null;){var y=u;u=r;for(var A=0;A<t.length;A++)if(y.context===t[A]){u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),pr(u.return,n,e),a||(d=null);break e}u=y.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(s(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),pr(d,n,e),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===e){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function Ki(e,t,n,a){e=null;for(var r=t,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var y=r.type;At(r.pendingProps.value,d.value)||(e!==null?e.push(y):e=[y])}}else if(r===je.current){if(d=r.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ml):e=[ml])}r=r.return}e!==null&&vr(t,e,n,a),t.flags|=262144}function ns(e){for(e=e.firstContext;e!==null;){if(!At(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function mi(e){di=e,hn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function it(e){return Af(di,e)}function is(e,t){return di===null&&mi(e),Af(e,t)}function Af(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},hn===null){if(e===null)throw Error(s(308));hn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else hn=hn.next=t;return n}var Pb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ib=i.unstable_scheduleCallback,e0=i.unstable_NormalPriority,Xe={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gr(){return{controller:new Pb,data:new Map,refCount:0}}function Ya(e){e.refCount--,e.refCount===0&&Ib(e0,function(){e.controller.abort()})}var Ga=null,yr=0,Fi=0,Ji=null;function t0(e,t){if(Ga===null){var n=Ga=[];yr=0,Fi=Su(),Ji={status:"pending",value:void 0,then:function(a){n.push(a)}}}return yr++,t.then(wf,wf),t}function wf(){if(--yr===0&&Ga!==null){Ji!==null&&(Ji.status="fulfilled");var e=Ga;Ga=null,Fi=0,Ji=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function n0(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var r=0;r<n.length;r++)(0,n[r])(t)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Tf=V.S;V.S=function(e,t){rm=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&t0(e,t),Tf!==null&&Tf(e,t)};var pi=T(null);function br(){var e=pi.current;return e!==null?e:Ve.pooledCache}function as(e,t){t===null?$(pi,pi.current):$(pi,t.pool)}function Ef(){var e=br();return e===null?null:{parent:Xe._currentValue,pool:e}}var $i=Error(s(460)),xr=Error(s(474)),ls=Error(s(542)),ss={then:function(){}};function Df(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e;default:if(typeof t.status=="string")t.then(on,on);else{if(e=Ve,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=a}},function(a){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Nf(e),e}throw gi=t,$i}}function vi(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(gi=n,$i):n}}var gi=null;function Mf(){if(gi===null)throw Error(s(459));var e=gi;return gi=null,e}function Nf(e){if(e===$i||e===ls)throw Error(s(483))}var Wi=null,Xa=0;function os(e){var t=Xa;return Xa+=1,Wi===null&&(Wi=[]),Cf(Wi,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function rs(e,t){throw t.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function zf(e){function t(D,E){if(e){var M=D.deletions;M===null?(D.deletions=[E],D.flags|=16):M.push(E)}}function n(D,E){if(!e)return null;for(;E!==null;)t(D,E),E=E.sibling;return null}function a(D){for(var E=new Map;D!==null;)D.key!==null?E.set(D.key,D):E.set(D.index,D),D=D.sibling;return E}function r(D,E){return D=un(D,E),D.index=0,D.sibling=null,D}function u(D,E,M){return D.index=M,e?(M=D.alternate,M!==null?(M=M.index,M<E?(D.flags|=67108866,E):M):(D.flags|=67108866,E)):(D.flags|=1048576,E)}function d(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function y(D,E,M,q){return E===null||E.tag!==6?(E=rr(M,D.mode,q),E.return=D,E):(E=r(E,M),E.return=D,E)}function A(D,E,M,q){var ae=M.type;return ae===N?U(D,E,M.props.children,q,M.key):E!==null&&(E.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===F&&vi(ae)===E.type)?(E=r(E,M.props),Qa(E,M),E.return=D,E):(E=es(M.type,M.key,M.props,null,D.mode,q),Qa(E,M),E.return=D,E)}function z(D,E,M,q){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=ur(M,D.mode,q),E.return=D,E):(E=r(E,M.children||[]),E.return=D,E)}function U(D,E,M,q,ae){return E===null||E.tag!==7?(E=hi(M,D.mode,q,ae),E.return=D,E):(E=r(E,M),E.return=D,E)}function Y(D,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=rr(""+E,D.mode,M),E.return=D,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case w:return M=es(E.type,E.key,E.props,null,D.mode,M),Qa(M,E),M.return=D,M;case j:return E=ur(E,D.mode,M),E.return=D,E;case F:return E=vi(E),Y(D,E,M)}if(ve(E)||W(E))return E=hi(E,D.mode,M,null),E.return=D,E;if(typeof E.then=="function")return Y(D,os(E),M);if(E.$$typeof===O)return Y(D,is(D,E),M);rs(D,E)}return null}function R(D,E,M,q){var ae=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ae!==null?null:y(D,E,""+M,q);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return M.key===ae?A(D,E,M,q):null;case j:return M.key===ae?z(D,E,M,q):null;case F:return M=vi(M),R(D,E,M,q)}if(ve(M)||W(M))return ae!==null?null:U(D,E,M,q,null);if(typeof M.then=="function")return R(D,E,os(M),q);if(M.$$typeof===O)return R(D,E,is(D,M),q);rs(D,M)}return null}function B(D,E,M,q,ae){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return D=D.get(M)||null,y(E,D,""+q,ae);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return D=D.get(q.key===null?M:q.key)||null,A(E,D,q,ae);case j:return D=D.get(q.key===null?M:q.key)||null,z(E,D,q,ae);case F:return q=vi(q),B(D,E,M,q,ae)}if(ve(q)||W(q))return D=D.get(M)||null,U(E,D,q,ae,null);if(typeof q.then=="function")return B(D,E,M,os(q),ae);if(q.$$typeof===O)return B(D,E,M,is(E,q),ae);rs(E,q)}return null}function P(D,E,M,q){for(var ae=null,we=null,te=E,de=E=0,Se=null;te!==null&&de<M.length;de++){te.index>de?(Se=te,te=null):Se=te.sibling;var Te=R(D,te,M[de],q);if(Te===null){te===null&&(te=Se);break}e&&te&&Te.alternate===null&&t(D,te),E=u(Te,E,de),we===null?ae=Te:we.sibling=Te,we=Te,te=Se}if(de===M.length)return n(D,te),Ae&&cn(D,de),ae;if(te===null){for(;de<M.length;de++)te=Y(D,M[de],q),te!==null&&(E=u(te,E,de),we===null?ae=te:we.sibling=te,we=te);return Ae&&cn(D,de),ae}for(te=a(te);de<M.length;de++)Se=B(te,D,de,M[de],q),Se!==null&&(e&&Se.alternate!==null&&te.delete(Se.key===null?de:Se.key),E=u(Se,E,de),we===null?ae=Se:we.sibling=Se,we=Se);return e&&te.forEach(function(Jn){return t(D,Jn)}),Ae&&cn(D,de),ae}function oe(D,E,M,q){if(M==null)throw Error(s(151));for(var ae=null,we=null,te=E,de=E=0,Se=null,Te=M.next();te!==null&&!Te.done;de++,Te=M.next()){te.index>de?(Se=te,te=null):Se=te.sibling;var Jn=R(D,te,Te.value,q);if(Jn===null){te===null&&(te=Se);break}e&&te&&Jn.alternate===null&&t(D,te),E=u(Jn,E,de),we===null?ae=Jn:we.sibling=Jn,we=Jn,te=Se}if(Te.done)return n(D,te),Ae&&cn(D,de),ae;if(te===null){for(;!Te.done;de++,Te=M.next())Te=Y(D,Te.value,q),Te!==null&&(E=u(Te,E,de),we===null?ae=Te:we.sibling=Te,we=Te);return Ae&&cn(D,de),ae}for(te=a(te);!Te.done;de++,Te=M.next())Te=B(te,D,de,Te.value,q),Te!==null&&(e&&Te.alternate!==null&&te.delete(Te.key===null?de:Te.key),E=u(Te,E,de),we===null?ae=Te:we.sibling=Te,we=Te);return e&&te.forEach(function(dx){return t(D,dx)}),Ae&&cn(D,de),ae}function ze(D,E,M,q){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case w:e:{for(var ae=M.key;E!==null;){if(E.key===ae){if(ae=M.type,ae===N){if(E.tag===7){n(D,E.sibling),q=r(E,M.props.children),q.return=D,D=q;break e}}else if(E.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===F&&vi(ae)===E.type){n(D,E.sibling),q=r(E,M.props),Qa(q,M),q.return=D,D=q;break e}n(D,E);break}else t(D,E);E=E.sibling}M.type===N?(q=hi(M.props.children,D.mode,q,M.key),q.return=D,D=q):(q=es(M.type,M.key,M.props,null,D.mode,q),Qa(q,M),q.return=D,D=q)}return d(D);case j:e:{for(ae=M.key;E!==null;){if(E.key===ae)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){n(D,E.sibling),q=r(E,M.children||[]),q.return=D,D=q;break e}else{n(D,E);break}else t(D,E);E=E.sibling}q=ur(M,D.mode,q),q.return=D,D=q}return d(D);case F:return M=vi(M),ze(D,E,M,q)}if(ve(M))return P(D,E,M,q);if(W(M)){if(ae=W(M),typeof ae!="function")throw Error(s(150));return M=ae.call(M),oe(D,E,M,q)}if(typeof M.then=="function")return ze(D,E,os(M),q);if(M.$$typeof===O)return ze(D,E,is(D,M),q);rs(D,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(n(D,E.sibling),q=r(E,M),q.return=D,D=q):(n(D,E),q=rr(M,D.mode,q),q.return=D,D=q),d(D)):n(D,E)}return function(D,E,M,q){try{Xa=0;var ae=ze(D,E,M,q);return Wi=null,ae}catch(te){if(te===$i||te===ls)throw te;var we=wt(29,te,null,D.mode);return we.lanes=q,we.return=D,we}finally{}}}var yi=zf(!0),Vf=zf(!1),Vn=!1;function Sr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Rn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function kn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Ee&2)!==0){var r=a.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),a.pending=t,t=Il(e),pf(e,null,n),t}return Pl(e,a,t,n),Il(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,jh(e,n)}}function Ar(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?r=u=t:u=u.next=t}else r=u=t;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var wr=!1;function Ka(){if(wr){var e=Ji;if(e!==null)throw e}}function Fa(e,t,n,a){wr=!1;var r=e.updateQueue;Vn=!1;var u=r.firstBaseUpdate,d=r.lastBaseUpdate,y=r.shared.pending;if(y!==null){r.shared.pending=null;var A=y,z=A.next;A.next=null,d===null?u=z:d.next=z,d=A;var U=e.alternate;U!==null&&(U=U.updateQueue,y=U.lastBaseUpdate,y!==d&&(y===null?U.firstBaseUpdate=z:y.next=z,U.lastBaseUpdate=A))}if(u!==null){var Y=r.baseState;d=0,U=z=A=null,y=u;do{var R=y.lane&-536870913,B=R!==y.lane;if(B?(xe&R)===R:(a&R)===R){R!==0&&R===Fi&&(wr=!0),U!==null&&(U=U.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var P=e,oe=y;R=t;var ze=n;switch(oe.tag){case 1:if(P=oe.payload,typeof P=="function"){Y=P.call(ze,Y,R);break e}Y=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=oe.payload,R=typeof P=="function"?P.call(ze,Y,R):P,R==null)break e;Y=x({},Y,R);break e;case 2:Vn=!0}}R=y.callback,R!==null&&(e.flags|=64,B&&(e.flags|=8192),B=r.callbacks,B===null?r.callbacks=[R]:B.push(R))}else B={lane:R,tag:y.tag,payload:y.payload,callback:y.callback,next:null},U===null?(z=U=B,A=Y):U=U.next=B,d|=R;if(y=y.next,y===null){if(y=r.shared.pending,y===null)break;B=y,y=B.next,B.next=null,r.lastBaseUpdate=B,r.shared.pending=null}}while(!0);U===null&&(A=Y),r.baseState=A,r.firstBaseUpdate=z,r.lastBaseUpdate=U,u===null&&(r.shared.lanes=0),Ln|=d,e.lanes=d,e.memoizedState=Y}}function Rf(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function kf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Rf(n[e],t)}var Pi=T(null),us=T(0);function Bf(e,t){e=Sn,$(us,e),$(Pi,t),Sn=e|t.baseLanes}function Tr(){$(us,Sn),$(Pi,Pi.current)}function Er(){Sn=us.current,H(Pi),H(us)}var Tt=T(null),Lt=null;function Bn(e){var t=e.alternate;$(Ye,Ye.current&1),$(Tt,e),Lt===null&&(t===null||Pi.current!==null||t.memoizedState!==null)&&(Lt=e)}function Dr(e){$(Ye,Ye.current),$(Tt,e),Lt===null&&(Lt=e)}function Of(e){e.tag===22?($(Ye,Ye.current),$(Tt,e),Lt===null&&(Lt=e)):On()}function On(){$(Ye,Ye.current),$(Tt,Tt.current)}function Et(e){H(Tt),Lt===e&&(Lt=null),H(Ye)}var Ye=T(0);function cs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ru(n)||ku(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var dn=0,fe=null,Me=null,Qe=null,hs=!1,Ii=!1,bi=!1,fs=0,Ja=0,ea=null,i0=0;function Le(){throw Error(s(321))}function Cr(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!At(e[n],t[n]))return!1;return!0}function Mr(e,t,n,a,r,u){return dn=u,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?bd:Xr,bi=!1,u=n(a,r),bi=!1,Ii&&(u=Uf(t,n,a,r)),_f(e),u}function _f(e){V.H=Pa;var t=Me!==null&&Me.next!==null;if(dn=0,Qe=Me=fe=null,hs=!1,Ja=0,ea=null,t)throw Error(s(300));e===null||Ze||(e=e.dependencies,e!==null&&ns(e)&&(Ze=!0))}function Uf(e,t,n,a){fe=e;var r=0;do{if(Ii&&(ea=null),Ja=0,Ii=!1,25<=r)throw Error(s(301));if(r+=1,Qe=Me=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}V.H=xd,u=t(n,a)}while(Ii);return u}function a0(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?$a(t):t,e=e.useState()[0],(Me!==null?Me.memoizedState:null)!==e&&(fe.flags|=1024),t}function Nr(){var e=fs!==0;return fs=0,e}function zr(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Vr(e){if(hs){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}hs=!1}dn=0,Qe=Me=fe=null,Ii=!1,Ja=fs=0,ea=null}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?fe.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ge(){if(Me===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Qe===null?fe.memoizedState:Qe.next;if(t!==null)Qe=t,Me=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Qe===null?fe.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $a(e){var t=Ja;return Ja+=1,ea===null&&(ea=[]),e=Cf(ea,e,t),t=fe,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?bd:Xr),e}function ms(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return $a(e);if(e.$$typeof===O)return it(e)}throw Error(s(438,String(e)))}function Rr(e){var t=null,n=fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=fe.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ds(),fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=ee;return t.index++,n}function mn(e,t){return typeof t=="function"?t(e):t}function ps(e){var t=Ge();return kr(t,Me,e)}function kr(e,t,n){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var r=e.baseQueue,u=a.pending;if(u!==null){if(r!==null){var d=r.next;r.next=u.next,u.next=d}t.baseQueue=r=u,a.pending=null}if(u=e.baseState,r===null)e.memoizedState=u;else{t=r.next;var y=d=null,A=null,z=t,U=!1;do{var Y=z.lane&-536870913;if(Y!==z.lane?(xe&Y)===Y:(dn&Y)===Y){var R=z.revertLane;if(R===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Y===Fi&&(U=!0);else if((dn&R)===R){z=z.next,R===Fi&&(U=!0);continue}else Y={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(y=A=Y,d=u):A=A.next=Y,fe.lanes|=R,Ln|=R;Y=z.action,bi&&n(u,Y),u=z.hasEagerState?z.eagerState:n(u,Y)}else R={lane:Y,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},A===null?(y=A=R,d=u):A=A.next=R,fe.lanes|=Y,Ln|=Y;z=z.next}while(z!==null&&z!==t);if(A===null?d=u:A.next=y,!At(u,e.memoizedState)&&(Ze=!0,U&&(n=Ji,n!==null)))throw n;e.memoizedState=u,e.baseState=d,e.baseQueue=A,a.lastRenderedState=u}return r===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Br(e){var t=Ge(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var a=n.dispatch,r=n.pending,u=t.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do u=e(u,d.action),d=d.next;while(d!==r);At(u,t.memoizedState)||(Ze=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,a]}function Lf(e,t,n){var a=fe,r=Ge(),u=Ae;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=t();var d=!At((Me||r).memoizedState,n);if(d&&(r.memoizedState=n,Ze=!0),r=r.queue,Ur(Yf.bind(null,a,r,e),[e]),r.getSnapshot!==t||d||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,ta(9,{destroy:void 0},Hf.bind(null,a,r,n,t),null),Ve===null)throw Error(s(349));u||(dn&127)!==0||qf(a,t,n)}return n}function qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t=ds(),fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Hf(e,t,n,a){t.value=n,t.getSnapshot=a,Gf(t)&&Xf(e)}function Yf(e,t,n){return n(function(){Gf(t)&&Xf(e)})}function Gf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!At(e,n)}catch{return!0}}function Xf(e){var t=ci(e,2);t!==null&&bt(t,e,2)}function Or(e){var t=ut();if(typeof e=="function"){var n=e;if(e=n(),bi){Tn(!0);try{n()}finally{Tn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:e},t}function Qf(e,t,n,a){return e.baseState=n,kr(e,Me,typeof a=="function"?a:mn)}function l0(e,t,n,a,r){if(ys(e))throw Error(s(485));if(e=t.action,e!==null){var u={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};V.T!==null?n(!0):u.isTransition=!1,a(u),n=t.pending,n===null?(u.next=t.pending=u,Zf(t,u)):(u.next=n.next,t.pending=n.next=u)}}function Zf(e,t){var n=t.action,a=t.payload,r=e.state;if(t.isTransition){var u=V.T,d={};V.T=d;try{var y=n(r,a),A=V.S;A!==null&&A(d,y),Kf(e,t,y)}catch(z){_r(e,t,z)}finally{u!==null&&d.types!==null&&(u.types=d.types),V.T=u}}else try{u=n(r,a),Kf(e,t,u)}catch(z){_r(e,t,z)}}function Kf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Ff(e,t,a)},function(a){return _r(e,t,a)}):Ff(e,t,n)}function Ff(e,t,n){t.status="fulfilled",t.value=n,Jf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zf(e,n)))}function _r(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Jf(t),t=t.next;while(t!==a)}e.action=null}function Jf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function $f(e,t){return t}function Wf(e,t){if(Ae){var n=Ve.formState;if(n!==null){e:{var a=fe;if(Ae){if(Be){t:{for(var r=Be,u=Ut;r.nodeType!==8;){if(!u){r=null;break t}if(r=qt(r.nextSibling),r===null){r=null;break t}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){Be=qt(r.nextSibling),a=r.data==="F!";break e}}Nn(a)}a=!1}a&&(t=n[0])}}return n=ut(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$f,lastRenderedState:t},n.queue=a,n=vd.bind(null,fe,a),a.dispatch=n,a=Or(!1),u=Gr.bind(null,fe,!1,a.queue),a=ut(),r={state:t,dispatch:null,action:e,pending:null},a.queue=r,n=l0.bind(null,fe,r,u,n),r.dispatch=n,a.memoizedState=e,[t,n,!1]}function Pf(e){var t=Ge();return If(t,Me,e)}function If(e,t,n){if(t=kr(e,t,$f)[0],e=ps(mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=$a(t)}catch(d){throw d===$i?ls:d}else a=t;t=Ge();var r=t.queue,u=r.dispatch;return n!==t.memoizedState&&(fe.flags|=2048,ta(9,{destroy:void 0},s0.bind(null,r,n),null)),[a,u,e]}function s0(e,t){e.action=t}function ed(e){var t=Ge(),n=Me;if(n!==null)return If(t,n,e);Ge(),t=t.memoizedState,n=Ge();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function ta(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=fe.updateQueue,t===null&&(t=ds(),fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function td(){return Ge().memoizedState}function vs(e,t,n,a){var r=ut();fe.flags|=e,r.memoizedState=ta(1|t,{destroy:void 0},n,a===void 0?null:a)}function gs(e,t,n,a){var r=Ge();a=a===void 0?null:a;var u=r.memoizedState.inst;Me!==null&&a!==null&&Cr(a,Me.memoizedState.deps)?r.memoizedState=ta(t,u,n,a):(fe.flags|=e,r.memoizedState=ta(1|t,u,n,a))}function nd(e,t){vs(8390656,8,e,t)}function Ur(e,t){gs(2048,8,e,t)}function o0(e){fe.flags|=4;var t=fe.updateQueue;if(t===null)t=ds(),fe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function id(e){var t=Ge().memoizedState;return o0({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function ad(e,t){return gs(4,2,e,t)}function ld(e,t){return gs(4,4,e,t)}function sd(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function od(e,t,n){n=n!=null?n.concat([e]):null,gs(4,4,sd.bind(null,t,e),n)}function Lr(){}function rd(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Cr(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function ud(e,t){var n=Ge();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Cr(t,a[1]))return a[0];if(a=e(),bi){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[a,t],a}function qr(e,t,n){return n===void 0||(dn&1073741824)!==0&&(xe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=cm(),fe.lanes|=e,Ln|=e,n)}function cd(e,t,n,a){return At(n,t)?n:Pi.current!==null?(e=qr(e,n,a),At(e,t)||(Ze=!0),e):(dn&42)===0||(dn&1073741824)!==0&&(xe&261930)===0?(Ze=!0,e.memoizedState=n):(e=cm(),fe.lanes|=e,Ln|=e,t)}function hd(e,t,n,a,r){var u=X.p;X.p=u!==0&&8>u?u:8;var d=V.T,y={};V.T=y,Gr(e,!1,t,n);try{var A=r(),z=V.S;if(z!==null&&z(y,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var U=n0(A,a);Wa(e,t,U,Mt(e))}else Wa(e,t,a,Mt(e))}catch(Y){Wa(e,t,{then:function(){},status:"rejected",reason:Y},Mt())}finally{X.p=u,d!==null&&y.types!==null&&(d.types=y.types),V.T=d}}function r0(){}function Hr(e,t,n,a){if(e.tag!==5)throw Error(s(476));var r=fd(e).queue;hd(e,r,t,J,n===null?r0:function(){return dd(e),n(a)})}function fd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:J},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function dd(e){var t=fd(e);t.next===null&&(t=e.alternate.memoizedState),Wa(e,t.next.queue,{},Mt())}function Yr(){return it(ml)}function md(){return Ge().memoizedState}function pd(){return Ge().memoizedState}function u0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Mt();e=Rn(n);var a=kn(t,e,n);a!==null&&(bt(a,t,n),Za(a,t,n)),t={cache:gr()},e.payload=t;return}t=t.return}}function c0(e,t,n){var a=Mt();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ys(e)?gd(t,n):(n=sr(e,t,n,a),n!==null&&(bt(n,e,a),yd(n,t,a)))}function vd(e,t,n){var a=Mt();Wa(e,t,n,a)}function Wa(e,t,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ys(e))gd(t,r);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var d=t.lastRenderedState,y=u(d,n);if(r.hasEagerState=!0,r.eagerState=y,At(y,d))return Pl(e,t,r,0),Ve===null&&Wl(),!1}catch{}finally{}if(n=sr(e,t,r,a),n!==null)return bt(n,e,a),yd(n,t,a),!0}return!1}function Gr(e,t,n,a){if(a={lane:2,revertLane:Su(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ys(e)){if(t)throw Error(s(479))}else t=sr(e,n,a,2),t!==null&&bt(t,e,2)}function ys(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function gd(e,t){Ii=hs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yd(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,jh(e,n)}}var Pa={readContext:it,use:ms,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useLayoutEffect:Le,useInsertionEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useSyncExternalStore:Le,useId:Le,useHostTransitionStatus:Le,useFormState:Le,useActionState:Le,useOptimistic:Le,useMemoCache:Le,useCacheRefresh:Le};Pa.useEffectEvent=Le;var bd={readContext:it,use:ms,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:nd,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,vs(4194308,4,sd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vs(4194308,4,e,t)},useInsertionEffect:function(e,t){vs(4,2,e,t)},useMemo:function(e,t){var n=ut();t=t===void 0?null:t;var a=e();if(bi){Tn(!0);try{e()}finally{Tn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=ut();if(n!==void 0){var r=n(t);if(bi){Tn(!0);try{n(t)}finally{Tn(!1)}}}else r=t;return a.memoizedState=a.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},a.queue=e,e=e.dispatch=c0.bind(null,fe,e),[a.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:function(e){e=Or(e);var t=e.queue,n=vd.bind(null,fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Lr,useDeferredValue:function(e,t){var n=ut();return qr(n,e,t)},useTransition:function(){var e=Or(!1);return e=hd.bind(null,fe,e.queue,!0,!1),ut().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=fe,r=ut();if(Ae){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Ve===null)throw Error(s(349));(xe&127)!==0||qf(a,t,n)}r.memoizedState=n;var u={value:n,getSnapshot:t};return r.queue=u,nd(Yf.bind(null,a,u,e),[e]),a.flags|=2048,ta(9,{destroy:void 0},Hf.bind(null,a,u,n,t),null),n},useId:function(){var e=ut(),t=Ve.identifierPrefix;if(Ae){var n=Pt,a=Wt;n=(a&~(1<<32-jt(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=fs++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=i0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Yr,useFormState:Wf,useActionState:Wf,useOptimistic:function(e){var t=ut();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Gr.bind(null,fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Rr,useCacheRefresh:function(){return ut().memoizedState=u0.bind(null,fe)},useEffectEvent:function(e){var t=ut(),n={impl:e};return t.memoizedState=n,function(){if((Ee&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Xr={readContext:it,use:ms,useCallback:rd,useContext:it,useEffect:Ur,useImperativeHandle:od,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:ud,useReducer:ps,useRef:td,useState:function(){return ps(mn)},useDebugValue:Lr,useDeferredValue:function(e,t){var n=Ge();return cd(n,Me.memoizedState,e,t)},useTransition:function(){var e=ps(mn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:$a(e),t]},useSyncExternalStore:Lf,useId:md,useHostTransitionStatus:Yr,useFormState:Pf,useActionState:Pf,useOptimistic:function(e,t){var n=Ge();return Qf(n,Me,e,t)},useMemoCache:Rr,useCacheRefresh:pd};Xr.useEffectEvent=id;var xd={readContext:it,use:ms,useCallback:rd,useContext:it,useEffect:Ur,useImperativeHandle:od,useInsertionEffect:ad,useLayoutEffect:ld,useMemo:ud,useReducer:Br,useRef:td,useState:function(){return Br(mn)},useDebugValue:Lr,useDeferredValue:function(e,t){var n=Ge();return Me===null?qr(n,e,t):cd(n,Me.memoizedState,e,t)},useTransition:function(){var e=Br(mn)[0],t=Ge().memoizedState;return[typeof e=="boolean"?e:$a(e),t]},useSyncExternalStore:Lf,useId:md,useHostTransitionStatus:Yr,useFormState:ed,useActionState:ed,useOptimistic:function(e,t){var n=Ge();return Me!==null?Qf(n,Me,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Rr,useCacheRefresh:pd};xd.useEffectEvent=id;function Qr(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:x({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zr={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Mt(),r=Rn(a);r.payload=t,n!=null&&(r.callback=n),t=kn(e,r,a),t!==null&&(bt(t,e,a),Za(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Mt(),r=Rn(a);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=kn(e,r,a),t!==null&&(bt(t,e,a),Za(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Mt(),a=Rn(n);a.tag=2,t!=null&&(a.callback=t),t=kn(e,a,n),t!==null&&(bt(t,e,n),Za(t,e,n))}};function Sd(e,t,n,a,r,u,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,u,d):t.prototype&&t.prototype.isPureReactComponent?!Ua(n,a)||!Ua(r,u):!0}function jd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Zr.enqueueReplaceState(t,t.state,null)}function xi(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=x({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function Ad(e){$l(e)}function wd(e){console.error(e)}function Td(e){$l(e)}function bs(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Ed(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Kr(e,t,n){return n=Rn(n),n.tag=3,n.payload={element:null},n.callback=function(){bs(e,t)},n}function Dd(e){return e=Rn(e),e.tag=3,e}function Cd(e,t,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=a.value;e.payload=function(){return r(u)},e.callback=function(){Ed(t,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Ed(t,n,a),typeof r!="function"&&(qn===null?qn=new Set([this]):qn.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function h0(e,t,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ki(t,n,r,!0),n=Tt.current,n!==null){switch(n.tag){case 31:case 13:return Lt===null?zs():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ss?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),yu(e,a,r)),!1;case 22:return n.flags|=65536,a===ss?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),yu(e,a,r)),!1}throw Error(s(435,n.tag))}return yu(e,a,r),zs(),!1}if(Ae)return t=Tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,a!==fr&&(e=Error(s(422),{cause:a}),Ha(Bt(e,n)))):(a!==fr&&(t=Error(s(423),{cause:a}),Ha(Bt(t,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,a=Bt(a,n),r=Kr(e.stateNode,a,r),Ar(e,r),qe!==4&&(qe=2)),!1;var u=Error(s(520),{cause:a});if(u=Bt(u,n),sl===null?sl=[u]:sl.push(u),qe!==4&&(qe=2),t===null)return!0;a=Bt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=Kr(n.stateNode,a,e),Ar(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(qn===null||!qn.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Dd(r),Cd(r,e,n,a),Ar(n,r),!1}n=n.return}while(n!==null);return!1}var Fr=Error(s(461)),Ze=!1;function at(e,t,n,a){t.child=e===null?Vf(t,null,n,a):yi(t,e.child,n,a)}function Md(e,t,n,a,r){n=n.render;var u=t.ref;if("ref"in a){var d={};for(var y in a)y!=="ref"&&(d[y]=a[y])}else d=a;return mi(t),a=Mr(e,t,n,d,u,r),y=Nr(),e!==null&&!Ze?(zr(e,t,r),pn(e,t,r)):(Ae&&y&&cr(t),t.flags|=1,at(e,t,a,r),t.child)}function Nd(e,t,n,a,r){if(e===null){var u=n.type;return typeof u=="function"&&!or(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,zd(e,t,u,a,r)):(e=es(n.type,null,a,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!nu(e,r)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(d,a)&&e.ref===t.ref)return pn(e,t,r)}return t.flags|=1,e=un(u,a),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,n,a,r){if(e!==null){var u=e.memoizedProps;if(Ua(u,a)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=a=u,nu(e,r))(e.flags&131072)!==0&&(Ze=!0);else return t.lanes=e.lanes,pn(e,t,r)}return Jr(e,t,n,a,r)}function Vd(e,t,n,a){var r=a.children,u=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,e!==null){for(a=t.child=e.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~u}else a=0,t.child=null;return Rd(e,t,u,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&as(t,u!==null?u.cachePool:null),u!==null?Bf(t,u):Tr(),Of(t);else return a=t.lanes=536870912,Rd(e,t,u!==null?u.baseLanes|n:n,n,a)}else u!==null?(as(t,u.cachePool),Bf(t,u),On(),t.memoizedState=null):(e!==null&&as(t,null),Tr(),On());return at(e,t,r,n),t.child}function Ia(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rd(e,t,n,a,r){var u=br();return u=u===null?null:{parent:Xe._currentValue,pool:u},t.memoizedState={baseLanes:n,cachePool:u},e!==null&&as(t,null),Tr(),Of(t),e!==null&&Ki(e,t,a,!0),t.childLanes=r,null}function xs(e,t){return t=js({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function kd(e,t,n){return yi(t,e.child,null,n),e=xs(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function f0(e,t,n){var a=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(a.mode==="hidden")return e=xs(t,a),t.lanes=536870912,Ia(null,e);if(Dr(t),(e=Be)?(e=Zm(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:Wt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=gf(e),n.return=t,t.child=n,nt=t,Be=null)):e=null,e===null)throw Nn(t);return t.lanes=536870912,null}return xs(t,a)}var u=e.memoizedState;if(u!==null){var d=u.dehydrated;if(Dr(t),r)if(t.flags&256)t.flags&=-257,t=kd(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Ze||Ki(e,t,n,!1),r=(n&e.childLanes)!==0,Ze||r){if(a=Ve,a!==null&&(d=Ah(a,n),d!==0&&d!==u.retryLane))throw u.retryLane=d,ci(e,d),bt(a,e,d),Fr;zs(),t=kd(e,t,n)}else e=u.treeContext,Be=qt(d.nextSibling),nt=t,Ae=!0,Mn=null,Ut=!1,e!==null&&xf(t,e),t=xs(t,a),t.flags|=4096;return t}return e=un(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ss(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Jr(e,t,n,a,r){return mi(t),n=Mr(e,t,n,a,void 0,r),a=Nr(),e!==null&&!Ze?(zr(e,t,r),pn(e,t,r)):(Ae&&a&&cr(t),t.flags|=1,at(e,t,n,r),t.child)}function Bd(e,t,n,a,r,u){return mi(t),t.updateQueue=null,n=Uf(t,a,n,r),_f(e),a=Nr(),e!==null&&!Ze?(zr(e,t,u),pn(e,t,u)):(Ae&&a&&cr(t),t.flags|=1,at(e,t,n,u),t.child)}function Od(e,t,n,a,r){if(mi(t),t.stateNode===null){var u=Gi,d=n.contextType;typeof d=="object"&&d!==null&&(u=it(d)),u=new n(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Zr,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},Sr(t),d=n.contextType,u.context=typeof d=="object"&&d!==null?it(d):Gi,u.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Qr(t,n,d,a),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&Zr.enqueueReplaceState(u,u.state,null),Fa(t,a,u,r),Ka(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){u=t.stateNode;var y=t.memoizedProps,A=xi(n,y);u.props=A;var z=u.context,U=n.contextType;d=Gi,typeof U=="object"&&U!==null&&(d=it(U));var Y=n.getDerivedStateFromProps;U=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,U||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||z!==d)&&jd(t,u,a,d),Vn=!1;var R=t.memoizedState;u.state=R,Fa(t,a,u,r),Ka(),z=t.memoizedState,y||R!==z||Vn?(typeof Y=="function"&&(Qr(t,n,Y,a),z=t.memoizedState),(A=Vn||Sd(t,n,A,a,R,z,d))?(U||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=z),u.props=a,u.state=z,u.context=d,a=A):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,jr(e,t),d=t.memoizedProps,U=xi(n,d),u.props=U,Y=t.pendingProps,R=u.context,z=n.contextType,A=Gi,typeof z=="object"&&z!==null&&(A=it(z)),y=n.getDerivedStateFromProps,(z=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==Y||R!==A)&&jd(t,u,a,A),Vn=!1,R=t.memoizedState,u.state=R,Fa(t,a,u,r),Ka();var B=t.memoizedState;d!==Y||R!==B||Vn||e!==null&&e.dependencies!==null&&ns(e.dependencies)?(typeof y=="function"&&(Qr(t,n,y,a),B=t.memoizedState),(U=Vn||Sd(t,n,U,a,R,B,A)||e!==null&&e.dependencies!==null&&ns(e.dependencies))?(z||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,B,A),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,B,A)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=B),u.props=a,u.state=B,u.context=A,a=U):(typeof u.componentDidUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),a=!1)}return u=a,Ss(e,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&a?(t.child=yi(t,e.child,null,r),t.child=yi(t,null,n,r)):at(e,t,n,r),t.memoizedState=u.state,e=t.child):e=pn(e,t,r),e}function _d(e,t,n,a){return fi(),t.flags|=256,at(e,t,n,a),t.child}var $r={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wr(e){return{baseLanes:e,cachePool:Ef()}}function Pr(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ct),e}function Ud(e,t,n){var a=t.pendingProps,r=!1,u=(t.flags&128)!==0,d;if((d=u)||(d=e!==null&&e.memoizedState===null?!1:(Ye.current&2)!==0),d&&(r=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(r?Bn(t):On(),(e=Be)?(e=Zm(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:Wt,overflow:Pt}:null,retryLane:536870912,hydrationErrors:null},n=gf(e),n.return=t,t.child=n,nt=t,Be=null)):e=null,e===null)throw Nn(t);return ku(e)?t.lanes=32:t.lanes=536870912,null}var y=a.children;return a=a.fallback,r?(On(),r=t.mode,y=js({mode:"hidden",children:y},r),a=hi(a,r,n,null),y.return=t,a.return=t,y.sibling=a,t.child=y,a=t.child,a.memoizedState=Wr(n),a.childLanes=Pr(e,d,n),t.memoizedState=$r,Ia(null,a)):(Bn(t),Ir(t,y))}var A=e.memoizedState;if(A!==null&&(y=A.dehydrated,y!==null)){if(u)t.flags&256?(Bn(t),t.flags&=-257,t=eu(e,t,n)):t.memoizedState!==null?(On(),t.child=e.child,t.flags|=128,t=null):(On(),y=a.fallback,r=t.mode,a=js({mode:"visible",children:a.children},r),y=hi(y,r,n,null),y.flags|=2,a.return=t,y.return=t,a.sibling=y,t.child=a,yi(t,e.child,null,n),a=t.child,a.memoizedState=Wr(n),a.childLanes=Pr(e,d,n),t.memoizedState=$r,t=Ia(null,a));else if(Bn(t),ku(y)){if(d=y.nextSibling&&y.nextSibling.dataset,d)var z=d.dgst;d=z,a=Error(s(419)),a.stack="",a.digest=d,Ha({value:a,source:null,stack:null}),t=eu(e,t,n)}else if(Ze||Ki(e,t,n,!1),d=(n&e.childLanes)!==0,Ze||d){if(d=Ve,d!==null&&(a=Ah(d,n),a!==0&&a!==A.retryLane))throw A.retryLane=a,ci(e,a),bt(d,e,a),Fr;Ru(y)||zs(),t=eu(e,t,n)}else Ru(y)?(t.flags|=192,t.child=e.child,t=null):(e=A.treeContext,Be=qt(y.nextSibling),nt=t,Ae=!0,Mn=null,Ut=!1,e!==null&&xf(t,e),t=Ir(t,a.children),t.flags|=4096);return t}return r?(On(),y=a.fallback,r=t.mode,A=e.child,z=A.sibling,a=un(A,{mode:"hidden",children:a.children}),a.subtreeFlags=A.subtreeFlags&65011712,z!==null?y=un(z,y):(y=hi(y,r,n,null),y.flags|=2),y.return=t,a.return=t,a.sibling=y,t.child=a,Ia(null,a),a=t.child,y=e.child.memoizedState,y===null?y=Wr(n):(r=y.cachePool,r!==null?(A=Xe._currentValue,r=r.parent!==A?{parent:A,pool:A}:r):r=Ef(),y={baseLanes:y.baseLanes|n,cachePool:r}),a.memoizedState=y,a.childLanes=Pr(e,d,n),t.memoizedState=$r,Ia(e.child,a)):(Bn(t),n=e.child,e=n.sibling,n=un(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function Ir(e,t){return t=js({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function js(e,t){return e=wt(22,e,null,t),e.lanes=0,e}function eu(e,t,n){return yi(t,e.child,null,n),e=Ir(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ld(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),pr(e.return,t,n)}function tu(e,t,n,a,r,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:u}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=r,d.treeForkCount=u)}function qd(e,t,n){var a=t.pendingProps,r=a.revealOrder,u=a.tail;a=a.children;var d=Ye.current,y=(d&2)!==0;if(y?(d=d&1|2,t.flags|=128):d&=1,$(Ye,d),at(e,t,a,n),a=Ae?qa:0,!y&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ld(e,n,t);else if(e.tag===19)Ld(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&cs(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),tu(t,!1,r,n,u,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&cs(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}tu(t,!0,n,null,u,a);break;case"together":tu(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ki(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=un(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=un(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ns(e)))}function d0(e,t,n){switch(t.tag){case 3:et(t,t.stateNode.containerInfo),zn(t,Xe,e.memoizedState.cache),fi();break;case 27:case 5:ii(t);break;case 4:et(t,t.stateNode.containerInfo);break;case 10:zn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Dr(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Bn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Ud(e,t,n):(Bn(t),e=pn(e,t,n),e!==null?e.sibling:null);Bn(t);break;case 19:var r=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ki(e,t,n,!1),a=(n&t.childLanes)!==0),r){if(a)return qd(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),$(Ye,Ye.current),a)break;return null;case 22:return t.lanes=0,Vd(e,t,n,t.pendingProps);case 24:zn(t,Xe,e.memoizedState.cache)}return pn(e,t,n)}function Hd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ze=!0;else{if(!nu(e,n)&&(t.flags&128)===0)return Ze=!1,d0(e,t,n);Ze=(e.flags&131072)!==0}else Ze=!1,Ae&&(t.flags&1048576)!==0&&bf(t,qa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=vi(t.elementType),t.type=e,typeof e=="function")or(e)?(a=xi(e,a),t.tag=1,t=Od(null,t,e,a,n)):(t.tag=0,t=Jr(null,t,e,a,n));else{if(e!=null){var r=e.$$typeof;if(r===_){t.tag=11,t=Md(null,t,e,a,n);break e}else if(r===K){t.tag=14,t=Nd(null,t,e,a,n);break e}}throw t=ge(e)||e,Error(s(306,t,""))}}return t;case 0:return Jr(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,r=xi(a,t.pendingProps),Od(e,t,a,r,n);case 3:e:{if(et(t,t.stateNode.containerInfo),e===null)throw Error(s(387));a=t.pendingProps;var u=t.memoizedState;r=u.element,jr(e,t),Fa(t,a,null,n);var d=t.memoizedState;if(a=d.cache,zn(t,Xe,a),a!==u.cache&&vr(t,[Xe],n,!0),Ka(),a=d.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=_d(e,t,a,n);break e}else if(a!==r){r=Bt(Error(s(424)),t),Ha(r),t=_d(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=qt(e.firstChild),nt=t,Ae=!0,Mn=null,Ut=!0,n=Vf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(fi(),a===r){t=pn(e,t,n);break e}at(e,t,a,n)}t=t.child}return t;case 26:return Ss(e,t),e===null?(n=Pm(t.type,null,t.pendingProps,null))?t.memoizedState=n:Ae||(n=t.type,e=t.pendingProps,a=Us(ce.current).createElement(n),a[tt]=t,a[dt]=e,lt(a,n,e),Pe(a),t.stateNode=a):t.memoizedState=Pm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ii(t),e===null&&Ae&&(a=t.stateNode=Jm(t.type,t.pendingProps,ce.current),nt=t,Ut=!0,r=Be,Xn(t.type)?(Bu=r,Be=qt(a.firstChild)):Be=r),at(e,t,t.pendingProps.children,n),Ss(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((r=a=Be)&&(a=G0(a,t.type,t.pendingProps,Ut),a!==null?(t.stateNode=a,nt=t,Be=qt(a.firstChild),Ut=!1,r=!0):r=!1),r||Nn(t)),ii(t),r=t.type,u=t.pendingProps,d=e!==null?e.memoizedProps:null,a=u.children,Nu(r,u)?a=null:d!==null&&Nu(r,d)&&(t.flags|=32),t.memoizedState!==null&&(r=Mr(e,t,a0,null,null,n),ml._currentValue=r),Ss(e,t),at(e,t,a,n),t.child;case 6:return e===null&&Ae&&((e=n=Be)&&(n=X0(n,t.pendingProps,Ut),n!==null?(t.stateNode=n,nt=t,Be=null,e=!0):e=!1),e||Nn(t)),null;case 13:return Ud(e,t,n);case 4:return et(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=yi(t,null,a,n):at(e,t,a,n),t.child;case 11:return Md(e,t,t.type,t.pendingProps,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,zn(t,t.type,a.value),at(e,t,a.children,n),t.child;case 9:return r=t.type._context,a=t.pendingProps.children,mi(t),r=it(r),a=a(r),t.flags|=1,at(e,t,a,n),t.child;case 14:return Nd(e,t,t.type,t.pendingProps,n);case 15:return zd(e,t,t.type,t.pendingProps,n);case 19:return qd(e,t,n);case 31:return f0(e,t,n);case 22:return Vd(e,t,n,t.pendingProps);case 24:return mi(t),a=it(Xe),e===null?(r=br(),r===null&&(r=Ve,u=gr(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),t.memoizedState={parent:a,cache:r},Sr(t),zn(t,Xe,r)):((e.lanes&n)!==0&&(jr(e,t),Fa(t,null,null,n),Ka()),r=e.memoizedState,u=t.memoizedState,r.parent!==a?(r={parent:a,cache:a},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),zn(t,Xe,a)):(a=u.cache,zn(t,Xe,a),a!==r.cache&&vr(t,[Xe],n,!0))),at(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function vn(e){e.flags|=4}function iu(e,t,n,a,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(mm())e.flags|=8192;else throw gi=ss,xr}else e.flags&=-16777217}function Yd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ip(t))if(mm())e.flags|=8192;else throw gi=ss,xr}function As(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?xh():536870912,e.lanes|=t,la|=t)}function el(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function m0(e,t,n){var a=t.pendingProps;switch(hr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Oe(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),fn(Xe),Ue(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zi(t)?vn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dr())),Oe(t),null;case 26:var r=t.type,u=t.memoizedState;return e===null?(vn(t),u!==null?(Oe(t),Yd(t,u)):(Oe(t),iu(t,r,null,a,n))):u?u!==e.memoizedState?(vn(t),Oe(t),Yd(t,u)):(Oe(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&vn(t),Oe(t),iu(t,r,e,a,n)),null;case 27:if(Mi(t),n=ce.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Oe(t),null}e=Z.current,Zi(t)?Sf(t):(e=Jm(r,a,n),t.stateNode=e,vn(t))}return Oe(t),null;case 5:if(Mi(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(!a){if(t.stateNode===null)throw Error(s(166));return Oe(t),null}if(u=Z.current,Zi(t))Sf(t);else{var d=Us(ce.current);switch(u){case 1:u=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:u=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":u=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":u=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":u=d.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?d.createElement(r,{is:a.is}):d.createElement(r)}}u[tt]=t,u[dt]=a;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)u.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=u;e:switch(lt(u,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&vn(t)}}return Oe(t),iu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&vn(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(e=ce.current,Zi(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,r=nt,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}e[tt]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Um(e.nodeValue,n)),e||Nn(t,!0)}else e=Us(e).createTextNode(a),e[tt]=t,t.stateNode=e}return Oe(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=Zi(t),n!==null){if(e===null){if(!a)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[tt]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),e=!1}else n=dr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(s(558))}return Oe(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Zi(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(s(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[tt]=t}else fi(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),r=!1}else r=dr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==r&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),As(t,t.updateQueue),Oe(t),null);case 4:return Ue(),e===null&&Tu(t.stateNode.containerInfo),Oe(t),null;case 10:return fn(t.type),Oe(t),null;case 19:if(H(Ye),a=t.memoizedState,a===null)return Oe(t),null;if(r=(t.flags&128)!==0,u=a.rendering,u===null)if(r)el(a,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=cs(e),u!==null){for(t.flags|=128,el(a,!1),e=u.updateQueue,t.updateQueue=e,As(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vf(n,e),n=n.sibling;return $(Ye,Ye.current&1|2),Ae&&cn(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&xt()>Cs&&(t.flags|=128,r=!0,el(a,!1),t.lanes=4194304)}else{if(!r)if(e=cs(u),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,As(t,e),el(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!Ae)return Oe(t),null}else 2*xt()-a.renderingStartTime>Cs&&n!==536870912&&(t.flags|=128,r=!0,el(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(e=a.last,e!==null?e.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=xt(),e.sibling=null,n=Ye.current,$(Ye,r?n&1|2:n&1),Ae&&cn(t,a.treeForkCount),e):(Oe(t),null);case 22:case 23:return Et(t),Er(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),n=t.updateQueue,n!==null&&As(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&H(pi),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fn(Xe),Oe(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function p0(e,t){switch(hr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fn(Xe),Ue(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mi(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(s(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));fi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Ye),null;case 4:return Ue(),null;case 10:return fn(t.type),null;case 22:case 23:return Et(t),Er(),e!==null&&H(pi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fn(Xe),null;case 25:return null;default:return null}}function Gd(e,t){switch(hr(t),t.tag){case 3:fn(Xe),Ue();break;case 26:case 27:case 5:Mi(t);break;case 4:Ue();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:H(Ye);break;case 10:fn(t.type);break;case 22:case 23:Et(t),Er(),e!==null&&H(pi);break;case 24:fn(Xe)}}function tl(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&e)===e){a=void 0;var u=n.create,d=n.inst;a=u(),d.destroy=a}n=n.next}while(n!==r)}}catch(y){Ce(t,t.return,y)}}function _n(e,t,n){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){var d=a.inst,y=d.destroy;if(y!==void 0){d.destroy=void 0,r=t;var A=n,z=y;try{z()}catch(U){Ce(r,A,U)}}}a=a.next}while(a!==u)}}catch(U){Ce(t,t.return,U)}}function Xd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{kf(t,n)}catch(a){Ce(e,e.return,a)}}}function Qd(e,t,n){n.props=xi(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){Ce(e,t,a)}}function nl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(r){Ce(e,t,r)}}function It(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Ce(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Ce(e,t,r)}else n.current=null}function Zd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Ce(e,e.return,r)}}function au(e,t,n){try{var a=e.stateNode;_0(a,e.type,n,t),a[dt]=t}catch(r){Ce(e,e.return,r)}}function Kd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Xn(e.type)||e.tag===4}function lu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Xn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function su(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(a!==4&&(a===27&&Xn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(su(e,t,n),e=e.sibling;e!==null;)su(e,t,n),e=e.sibling}function ws(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Xn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ws(e,t,n),e=e.sibling;e!==null;)ws(e,t,n),e=e.sibling}function Fd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);lt(t,a,n),t[tt]=e,t[dt]=n}catch(u){Ce(e,e.return,u)}}var gn=!1,Ke=!1,ou=!1,Jd=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function v0(e,t){if(e=e.containerInfo,Cu=Qs,e=of(e),er(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var d=0,y=-1,A=-1,z=0,U=0,Y=e,R=null;t:for(;;){for(var B;Y!==n||r!==0&&Y.nodeType!==3||(y=d+r),Y!==u||a!==0&&Y.nodeType!==3||(A=d+a),Y.nodeType===3&&(d+=Y.nodeValue.length),(B=Y.firstChild)!==null;)R=Y,Y=B;for(;;){if(Y===e)break t;if(R===n&&++z===r&&(y=d),R===u&&++U===a&&(A=d),(B=Y.nextSibling)!==null)break;Y=R,R=Y.parentNode}Y=B}n=y===-1||A===-1?null:{start:y,end:A}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mu={focusedElem:e,selectionRange:n},Qs=!1,Ie=t;Ie!==null;)if(t=Ie,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ie=e;else for(;Ie!==null;){switch(t=Ie,u=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,r=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var P=xi(n.type,r);e=a.getSnapshotBeforeUpdate(P,u),a.__reactInternalSnapshotBeforeUpdate=e}catch(oe){Ce(n,n.return,oe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Vu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Vu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ie=e;break}Ie=t.return}}function $d(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:bn(e,n),a&4&&tl(5,n);break;case 1:if(bn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){Ce(n,n.return,d)}else{var r=xi(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){Ce(n,n.return,d)}}a&64&&Xd(n),a&512&&nl(n,n.return);break;case 3:if(bn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{kf(e,t)}catch(d){Ce(n,n.return,d)}}break;case 27:t===null&&a&4&&Fd(n);case 26:case 5:bn(e,n),t===null&&a&4&&Zd(n),a&512&&nl(n,n.return);break;case 12:bn(e,n);break;case 31:bn(e,n),a&4&&Id(e,n);break;case 13:bn(e,n),a&4&&em(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=T0.bind(null,n),Q0(e,n))));break;case 22:if(a=n.memoizedState!==null||gn,!a){t=t!==null&&t.memoizedState!==null||Ke,r=gn;var u=Ke;gn=a,(Ke=t)&&!u?xn(e,n,(n.subtreeFlags&8772)!==0):bn(e,n),gn=r,Ke=u}break;case 30:break;default:bn(e,n)}}function Wd(e){var t=e.alternate;t!==null&&(e.alternate=null,Wd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_o(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,pt=!1;function yn(e,t,n){for(n=n.child;n!==null;)Pd(e,t,n),n=n.sibling}function Pd(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 26:Ke||It(n,t),yn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||It(n,t);var a=_e,r=pt;Xn(n.type)&&(_e=n.stateNode,pt=!1),yn(e,t,n),hl(n.stateNode),_e=a,pt=r;break;case 5:Ke||It(n,t);case 6:if(a=_e,r=pt,_e=null,yn(e,t,n),_e=a,pt=r,_e!==null)if(pt)try{(_e.nodeType===9?_e.body:_e.nodeName==="HTML"?_e.ownerDocument.body:_e).removeChild(n.stateNode)}catch(u){Ce(n,t,u)}else try{_e.removeChild(n.stateNode)}catch(u){Ce(n,t,u)}break;case 18:_e!==null&&(pt?(e=_e,Xm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),da(e)):Xm(_e,n.stateNode));break;case 4:a=_e,r=pt,_e=n.stateNode.containerInfo,pt=!0,yn(e,t,n),_e=a,pt=r;break;case 0:case 11:case 14:case 15:_n(2,n,t),Ke||_n(4,n,t),yn(e,t,n);break;case 1:Ke||(It(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Qd(n,t,a)),yn(e,t,n);break;case 21:yn(e,t,n);break;case 22:Ke=(a=Ke)||n.memoizedState!==null,yn(e,t,n),Ke=a;break;default:yn(e,t,n)}}function Id(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{da(e)}catch(n){Ce(t,t.return,n)}}}function em(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{da(e)}catch(n){Ce(t,t.return,n)}}function g0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Jd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Jd),t;default:throw Error(s(435,e.tag))}}function Ts(e,t){var n=g0(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var r=E0.bind(null,e,a);a.then(r,r)}})}function vt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],u=e,d=t,y=d;e:for(;y!==null;){switch(y.tag){case 27:if(Xn(y.type)){_e=y.stateNode,pt=!1;break e}break;case 5:_e=y.stateNode,pt=!1;break e;case 3:case 4:_e=y.stateNode.containerInfo,pt=!0;break e}y=y.return}if(_e===null)throw Error(s(160));Pd(u,d,r),_e=null,pt=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)tm(t,e),t=t.sibling}var Zt=null;function tm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vt(t,e),gt(e),a&4&&(_n(3,e,e.return),tl(3,e),_n(5,e,e.return));break;case 1:vt(t,e),gt(e),a&512&&(Ke||n===null||It(n,n.return)),a&64&&gn&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=Zt;if(vt(t,e),gt(e),a&512&&(Ke||n===null||It(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(a){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Ma]||u[tt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(a),r.head.insertBefore(u,r.querySelector("head > title"))),lt(u,a,n),u[tt]=e,Pe(u),a=u;break e;case"link":var d=tp("link","href",r).get(a+(n.href||""));if(d){for(var y=0;y<d.length;y++)if(u=d[y],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(y,1);break t}}u=r.createElement(a),lt(u,a,n),r.head.appendChild(u);break;case"meta":if(d=tp("meta","content",r).get(a+(n.content||""))){for(y=0;y<d.length;y++)if(u=d[y],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(y,1);break t}}u=r.createElement(a),lt(u,a,n),r.head.appendChild(u);break;default:throw Error(s(468,a))}u[tt]=e,Pe(u),a=u}e.stateNode=a}else np(r,e.type,e.stateNode);else e.stateNode=ep(r,a,e.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?np(r,e.type,e.stateNode):ep(r,a,e.memoizedProps)):a===null&&e.stateNode!==null&&au(e,e.memoizedProps,n.memoizedProps)}break;case 27:vt(t,e),gt(e),a&512&&(Ke||n===null||It(n,n.return)),n!==null&&a&4&&au(e,e.memoizedProps,n.memoizedProps);break;case 5:if(vt(t,e),gt(e),a&512&&(Ke||n===null||It(n,n.return)),e.flags&32){r=e.stateNode;try{Oi(r,"")}catch(P){Ce(e,e.return,P)}}a&4&&e.stateNode!=null&&(r=e.memoizedProps,au(e,r,n!==null?n.memoizedProps:r)),a&1024&&(ou=!0);break;case 6:if(vt(t,e),gt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(P){Ce(e,e.return,P)}}break;case 3:if(Hs=null,r=Zt,Zt=Ls(t.containerInfo),vt(t,e),Zt=r,gt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{da(t.containerInfo)}catch(P){Ce(e,e.return,P)}ou&&(ou=!1,nm(e));break;case 4:a=Zt,Zt=Ls(e.stateNode.containerInfo),vt(t,e),gt(e),Zt=a;break;case 12:vt(t,e),gt(e);break;case 31:vt(t,e),gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ts(e,a)));break;case 13:vt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ds=xt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ts(e,a)));break;case 22:r=e.memoizedState!==null;var A=n!==null&&n.memoizedState!==null,z=gn,U=Ke;if(gn=z||r,Ke=U||A,vt(t,e),Ke=U,gn=z,gt(e),a&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(n===null||A||gn||Ke||Si(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){A=n=t;try{if(u=A.stateNode,r)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{y=A.stateNode;var Y=A.memoizedProps.style,R=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;y.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(P){Ce(A,A.return,P)}}}else if(t.tag===6){if(n===null){A=t;try{A.stateNode.nodeValue=r?"":A.memoizedProps}catch(P){Ce(A,A.return,P)}}}else if(t.tag===18){if(n===null){A=t;try{var B=A.stateNode;r?Qm(B,!0):Qm(A.stateNode,!1)}catch(P){Ce(A,A.return,P)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ts(e,n))));break;case 19:vt(t,e),gt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ts(e,a)));break;case 30:break;case 21:break;default:vt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Kd(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,u=lu(e);ws(e,u,r);break;case 5:var d=n.stateNode;n.flags&32&&(Oi(d,""),n.flags&=-33);var y=lu(e);ws(e,y,d);break;case 3:case 4:var A=n.stateNode.containerInfo,z=lu(e);su(e,z,A);break;default:throw Error(s(161))}}catch(U){Ce(e,e.return,U)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function bn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$d(e,t.alternate,t),t=t.sibling}function Si(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_n(4,t,t.return),Si(t);break;case 1:It(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Qd(t,t.return,n),Si(t);break;case 27:hl(t.stateNode);case 26:case 5:It(t,t.return),Si(t);break;case 22:t.memoizedState===null&&Si(t);break;case 30:Si(t);break;default:Si(t)}e=e.sibling}}function xn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,r=e,u=t,d=u.flags;switch(u.tag){case 0:case 11:case 15:xn(r,u,n),tl(4,u);break;case 1:if(xn(r,u,n),a=u,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(z){Ce(a,a.return,z)}if(a=u,r=a.updateQueue,r!==null){var y=a.stateNode;try{var A=r.shared.hiddenCallbacks;if(A!==null)for(r.shared.hiddenCallbacks=null,r=0;r<A.length;r++)Rf(A[r],y)}catch(z){Ce(a,a.return,z)}}n&&d&64&&Xd(u),nl(u,u.return);break;case 27:Fd(u);case 26:case 5:xn(r,u,n),n&&a===null&&d&4&&Zd(u),nl(u,u.return);break;case 12:xn(r,u,n);break;case 31:xn(r,u,n),n&&d&4&&Id(r,u);break;case 13:xn(r,u,n),n&&d&4&&em(r,u);break;case 22:u.memoizedState===null&&xn(r,u,n),nl(u,u.return);break;case 30:break;default:xn(r,u,n)}t=t.sibling}}function ru(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ya(n))}function uu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ya(e))}function Kt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)im(e,t,n,a),t=t.sibling}function im(e,t,n,a){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Kt(e,t,n,a),r&2048&&tl(9,t);break;case 1:Kt(e,t,n,a);break;case 3:Kt(e,t,n,a),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ya(e)));break;case 12:if(r&2048){Kt(e,t,n,a),e=t.stateNode;try{var u=t.memoizedProps,d=u.id,y=u.onPostCommit;typeof y=="function"&&y(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){Ce(t,t.return,A)}}else Kt(e,t,n,a);break;case 31:Kt(e,t,n,a);break;case 13:Kt(e,t,n,a);break;case 23:break;case 22:u=t.stateNode,d=t.alternate,t.memoizedState!==null?u._visibility&2?Kt(e,t,n,a):il(e,t):u._visibility&2?Kt(e,t,n,a):(u._visibility|=2,na(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),r&2048&&ru(d,t);break;case 24:Kt(e,t,n,a),r&2048&&uu(t.alternate,t);break;default:Kt(e,t,n,a)}}function na(e,t,n,a,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=e,d=t,y=n,A=a,z=d.flags;switch(d.tag){case 0:case 11:case 15:na(u,d,y,A,r),tl(8,d);break;case 23:break;case 22:var U=d.stateNode;d.memoizedState!==null?U._visibility&2?na(u,d,y,A,r):il(u,d):(U._visibility|=2,na(u,d,y,A,r)),r&&z&2048&&ru(d.alternate,d);break;case 24:na(u,d,y,A,r),r&&z&2048&&uu(d.alternate,d);break;default:na(u,d,y,A,r)}t=t.sibling}}function il(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,r=a.flags;switch(a.tag){case 22:il(n,a),r&2048&&ru(a.alternate,a);break;case 24:il(n,a),r&2048&&uu(a.alternate,a);break;default:il(n,a)}t=t.sibling}}var al=8192;function ia(e,t,n){if(e.subtreeFlags&al)for(e=e.child;e!==null;)am(e,t,n),e=e.sibling}function am(e,t,n){switch(e.tag){case 26:ia(e,t,n),e.flags&al&&e.memoizedState!==null&&ix(n,Zt,e.memoizedState,e.memoizedProps);break;case 5:ia(e,t,n);break;case 3:case 4:var a=Zt;Zt=Ls(e.stateNode.containerInfo),ia(e,t,n),Zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=al,al=16777216,ia(e,t,n),al=a):ia(e,t,n));break;default:ia(e,t,n)}}function lm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function ll(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ie=a,om(a,e)}lm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)sm(e),e=e.sibling}function sm(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&_n(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Es(e)):ll(e);break;default:ll(e)}}function Es(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];Ie=a,om(a,e)}lm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_n(8,t,t.return),Es(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Es(t));break;default:Es(t)}e=e.sibling}}function om(e,t){for(;Ie!==null;){var n=Ie;switch(n.tag){case 0:case 11:case 15:_n(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ya(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Ie=a;else e:for(n=e;Ie!==null;){a=Ie;var r=a.sibling,u=a.return;if(Wd(a),a===n){Ie=null;break e}if(r!==null){r.return=u,Ie=r;break e}Ie=u}}}var y0={getCacheForType:function(e){var t=it(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return it(Xe).controller.signal}},b0=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ve=null,ye=null,xe=0,De=0,Dt=null,Un=!1,aa=!1,cu=!1,Sn=0,qe=0,Ln=0,ji=0,hu=0,Ct=0,la=0,sl=null,yt=null,fu=!1,Ds=0,rm=0,Cs=1/0,Ms=null,qn=null,$e=0,Hn=null,sa=null,jn=0,du=0,mu=null,um=null,ol=0,pu=null;function Mt(){return(Ee&2)!==0&&xe!==0?xe&-xe:V.T!==null?Su():wh()}function cm(){if(Ct===0)if((xe&536870912)===0||Ae){var e=_l;_l<<=1,(_l&3932160)===0&&(_l=262144),Ct=e}else Ct=536870912;return e=Tt.current,e!==null&&(e.flags|=32),Ct}function bt(e,t,n){(e===Ve&&(De===2||De===9)||e.cancelPendingCommit!==null)&&(oa(e,0),Yn(e,xe,Ct,!1)),Ca(e,n),((Ee&2)===0||e!==Ve)&&(e===Ve&&((Ee&2)===0&&(ji|=n),qe===4&&Yn(e,xe,Ct,!1)),en(e))}function hm(e,t,n){if((Ee&6)!==0)throw Error(s(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Da(e,t),r=a?j0(e,t):gu(e,t,!0),u=a;do{if(r===0){aa&&!a&&Yn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!x0(n)){r=gu(e,t,!1),u=!1;continue}if(r===2){if(u=t,e.errorRecoveryDisabledLanes&u)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var y=e;r=sl;var A=y.current.memoizedState.isDehydrated;if(A&&(oa(y,d).flags|=256),d=gu(y,d,!1),d!==2){if(cu&&!A){y.errorRecoveryDisabledLanes|=u,ji|=u,r=4;break e}u=yt,yt=r,u!==null&&(yt===null?yt=u:yt.push.apply(yt,u))}r=d}if(u=!1,r!==2)continue}}if(r===1){oa(e,0),Yn(e,t,0,!0);break}e:{switch(a=e,u=r,u){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:Yn(a,t,Ct,!Un);break e;case 2:yt=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(r=Ds+300-xt(),10<r)){if(Yn(a,t,Ct,!Un),Ll(a,0,!0)!==0)break e;jn=t,a.timeoutHandle=Ym(fm.bind(null,a,n,yt,Ms,fu,t,Ct,ji,la,Un,u,"Throttled",-0,0),r);break e}fm(a,n,yt,Ms,fu,t,Ct,ji,la,Un,u,null,-0,0)}}break}while(!0);en(e)}function fm(e,t,n,a,r,u,d,y,A,z,U,Y,R,B){if(e.timeoutHandle=-1,Y=t.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},am(t,u,Y);var P=(u&62914560)===u?Ds-xt():(u&4194048)===u?rm-xt():0;if(P=ax(Y,P),P!==null){jn=u,e.cancelPendingCommit=P(xm.bind(null,e,t,u,n,a,r,d,y,A,U,Y,null,R,B)),Yn(e,u,d,!z);return}}xm(e,t,u,n,a,r,d,y,A)}function x0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],u=r.getSnapshot;r=r.value;try{if(!At(u(),r))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yn(e,t,n,a){t&=~hu,t&=~ji,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var r=t;0<r;){var u=31-jt(r),d=1<<u;a[u]=-1,r&=~d}n!==0&&Sh(e,n,t)}function Ns(){return(Ee&6)===0?(rl(0),!1):!0}function vu(){if(ye!==null){if(De===0)var e=ye.return;else e=ye,hn=di=null,Vr(e),Wi=null,Xa=0,e=ye;for(;e!==null;)Gd(e.alternate,e),e=e.return;ye=null}}function oa(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,q0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),jn=0,vu(),Ve=e,ye=n=un(e.current,null),xe=t,De=0,Dt=null,Un=!1,aa=Da(e,t),cu=!1,la=Ct=hu=ji=Ln=qe=0,yt=sl=null,fu=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var r=31-jt(a),u=1<<r;t|=e[r],a&=~u}return Sn=t,Wl(),n}function dm(e,t){fe=null,V.H=Pa,t===$i||t===ls?(t=Mf(),De=3):t===xr?(t=Mf(),De=4):De=t===Fr?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Dt=t,ye===null&&(qe=1,bs(e,Bt(t,e.current)))}function mm(){var e=Tt.current;return e===null?!0:(xe&4194048)===xe?Lt===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Lt:!1}function pm(){var e=V.H;return V.H=Pa,e===null?Pa:e}function vm(){var e=V.A;return V.A=y0,e}function zs(){qe=4,Un||(xe&4194048)!==xe&&Tt.current!==null||(aa=!0),(Ln&134217727)===0&&(ji&134217727)===0||Ve===null||Yn(Ve,xe,Ct,!1)}function gu(e,t,n){var a=Ee;Ee|=2;var r=pm(),u=vm();(Ve!==e||xe!==t)&&(Ms=null,oa(e,t)),t=!1;var d=qe;e:do try{if(De!==0&&ye!==null){var y=ye,A=Dt;switch(De){case 8:vu(),d=6;break e;case 3:case 2:case 9:case 6:Tt.current===null&&(t=!0);var z=De;if(De=0,Dt=null,ra(e,y,A,z),n&&aa){d=0;break e}break;default:z=De,De=0,Dt=null,ra(e,y,A,z)}}S0(),d=qe;break}catch(U){dm(e,U)}while(!0);return t&&e.shellSuspendCounter++,hn=di=null,Ee=a,V.H=r,V.A=u,ye===null&&(Ve=null,xe=0,Wl()),d}function S0(){for(;ye!==null;)gm(ye)}function j0(e,t){var n=Ee;Ee|=2;var a=pm(),r=vm();Ve!==e||xe!==t?(Ms=null,Cs=xt()+500,oa(e,t)):aa=Da(e,t);e:do try{if(De!==0&&ye!==null){t=ye;var u=Dt;t:switch(De){case 1:De=0,Dt=null,ra(e,t,u,1);break;case 2:case 9:if(Df(u)){De=0,Dt=null,ym(t);break}t=function(){De!==2&&De!==9||Ve!==e||(De=7),en(e)},u.then(t,t);break e;case 3:De=7;break e;case 4:De=5;break e;case 7:Df(u)?(De=0,Dt=null,ym(t)):(De=0,Dt=null,ra(e,t,u,7));break;case 5:var d=null;switch(ye.tag){case 26:d=ye.memoizedState;case 5:case 27:var y=ye;if(d?ip(d):y.stateNode.complete){De=0,Dt=null;var A=y.sibling;if(A!==null)ye=A;else{var z=y.return;z!==null?(ye=z,Vs(z)):ye=null}break t}}De=0,Dt=null,ra(e,t,u,5);break;case 6:De=0,Dt=null,ra(e,t,u,6);break;case 8:vu(),qe=6;break e;default:throw Error(s(462))}}A0();break}catch(U){dm(e,U)}while(!0);return hn=di=null,V.H=a,V.A=r,Ee=n,ye!==null?0:(Ve=null,xe=0,Wl(),qe)}function A0(){for(;ye!==null&&!Zy();)gm(ye)}function gm(e){var t=Hd(e.alternate,e,Sn);e.memoizedProps=e.pendingProps,t===null?Vs(e):ye=t}function ym(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Bd(n,t,t.pendingProps,t.type,void 0,xe);break;case 11:t=Bd(n,t,t.pendingProps,t.type.render,t.ref,xe);break;case 5:Vr(t);default:Gd(n,t),t=ye=vf(t,Sn),t=Hd(n,t,Sn)}e.memoizedProps=e.pendingProps,t===null?Vs(e):ye=t}function ra(e,t,n,a){hn=di=null,Vr(t),Wi=null,Xa=0;var r=t.return;try{if(h0(e,r,t,n,xe)){qe=1,bs(e,Bt(n,e.current)),ye=null;return}}catch(u){if(r!==null)throw ye=r,u;qe=1,bs(e,Bt(n,e.current)),ye=null;return}t.flags&32768?(Ae||a===1?e=!0:aa||(xe&536870912)!==0?e=!1:(Un=e=!0,(a===2||a===9||a===3||a===6)&&(a=Tt.current,a!==null&&a.tag===13&&(a.flags|=16384))),bm(t,e)):Vs(t)}function Vs(e){var t=e;do{if((t.flags&32768)!==0){bm(t,Un);return}e=t.return;var n=m0(t.alternate,t,Sn);if(n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);qe===0&&(qe=5)}function bm(e,t){do{var n=p0(e.alternate,e);if(n!==null){n.flags&=32767,ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ye=e;return}ye=e=n}while(e!==null);qe=6,ye=null}function xm(e,t,n,a,r,u,d,y,A){e.cancelPendingCommit=null;do Rs();while($e!==0);if((Ee&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(u=t.lanes|t.childLanes,u|=lr,nb(e,n,u,d,y,A),e===Ve&&(ye=Ve=null,xe=0),sa=t,Hn=e,jn=n,du=u,mu=r,um=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,D0(Bl,function(){return Tm(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=V.T,V.T=null,r=X.p,X.p=2,d=Ee,Ee|=4;try{v0(e,t,n)}finally{Ee=d,X.p=r,V.T=a}}$e=1,Sm(),jm(),Am()}}function Sm(){if($e===1){$e=0;var e=Hn,t=sa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var a=X.p;X.p=2;var r=Ee;Ee|=4;try{tm(t,e);var u=Mu,d=of(e.containerInfo),y=u.focusedElem,A=u.selectionRange;if(d!==y&&y&&y.ownerDocument&&sf(y.ownerDocument.documentElement,y)){if(A!==null&&er(y)){var z=A.start,U=A.end;if(U===void 0&&(U=z),"selectionStart"in y)y.selectionStart=z,y.selectionEnd=Math.min(U,y.value.length);else{var Y=y.ownerDocument||document,R=Y&&Y.defaultView||window;if(R.getSelection){var B=R.getSelection(),P=y.textContent.length,oe=Math.min(A.start,P),ze=A.end===void 0?oe:Math.min(A.end,P);!B.extend&&oe>ze&&(d=ze,ze=oe,oe=d);var D=lf(y,oe),E=lf(y,ze);if(D&&E&&(B.rangeCount!==1||B.anchorNode!==D.node||B.anchorOffset!==D.offset||B.focusNode!==E.node||B.focusOffset!==E.offset)){var M=Y.createRange();M.setStart(D.node,D.offset),B.removeAllRanges(),oe>ze?(B.addRange(M),B.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),B.addRange(M))}}}}for(Y=[],B=y;B=B.parentNode;)B.nodeType===1&&Y.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Y.length;y++){var q=Y[y];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}Qs=!!Cu,Mu=Cu=null}finally{Ee=r,X.p=a,V.T=n}}e.current=t,$e=2}}function jm(){if($e===2){$e=0;var e=Hn,t=sa,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var a=X.p;X.p=2;var r=Ee;Ee|=4;try{$d(e,t.alternate,t)}finally{Ee=r,X.p=a,V.T=n}}$e=3}}function Am(){if($e===4||$e===3){$e=0,Ky();var e=Hn,t=sa,n=jn,a=um;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?$e=5:($e=0,sa=Hn=null,wm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(qn=null),Bo(n),t=t.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Ea,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=V.T,r=X.p,X.p=2,V.T=null;try{for(var u=e.onRecoverableError,d=0;d<a.length;d++){var y=a[d];u(y.value,{componentStack:y.stack})}}finally{V.T=t,X.p=r}}(jn&3)!==0&&Rs(),en(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===pu?ol++:(ol=0,pu=e):ol=0,rl(0)}}function wm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ya(t)))}function Rs(){return Sm(),jm(),Am(),Tm()}function Tm(){if($e!==5)return!1;var e=Hn,t=du;du=0;var n=Bo(jn),a=V.T,r=X.p;try{X.p=32>n?32:n,V.T=null,n=mu,mu=null;var u=Hn,d=jn;if($e=0,sa=Hn=null,jn=0,(Ee&6)!==0)throw Error(s(331));var y=Ee;if(Ee|=4,sm(u.current),im(u,u.current,d,n),Ee=y,rl(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Ea,u)}catch{}return!0}finally{X.p=r,V.T=a,wm(e,t)}}function Em(e,t,n){t=Bt(n,t),t=Kr(e.stateNode,t,2),e=kn(e,t,2),e!==null&&(Ca(e,2),en(e))}function Ce(e,t,n){if(e.tag===3)Em(e,e,n);else for(;t!==null;){if(t.tag===3){Em(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(qn===null||!qn.has(a))){e=Bt(n,e),n=Dd(2),a=kn(t,n,2),a!==null&&(Cd(n,a,t,e),Ca(a,2),en(a));break}}t=t.return}}function yu(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new b0;var r=new Set;a.set(t,r)}else r=a.get(t),r===void 0&&(r=new Set,a.set(t,r));r.has(n)||(cu=!0,r.add(n),e=w0.bind(null,e,t,n),t.then(e,e))}function w0(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ve===e&&(xe&n)===n&&(qe===4||qe===3&&(xe&62914560)===xe&&300>xt()-Ds?(Ee&2)===0&&oa(e,0):hu|=n,la===xe&&(la=0)),en(e)}function Dm(e,t){t===0&&(t=xh()),e=ci(e,t),e!==null&&(Ca(e,t),en(e))}function T0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dm(e,n)}function E0(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(t),Dm(e,n)}function D0(e,t){return zo(e,t)}var ks=null,ua=null,bu=!1,Bs=!1,xu=!1,Gn=0;function en(e){e!==ua&&e.next===null&&(ua===null?ks=ua=e:ua=ua.next=e),Bs=!0,bu||(bu=!0,M0())}function rl(e,t){if(!xu&&Bs){xu=!0;do for(var n=!1,a=ks;a!==null;){if(e!==0){var r=a.pendingLanes;if(r===0)var u=0;else{var d=a.suspendedLanes,y=a.pingedLanes;u=(1<<31-jt(42|e)+1)-1,u&=r&~(d&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,zm(a,u))}else u=xe,u=Ll(a,a===Ve?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Da(a,u)||(n=!0,zm(a,u));a=a.next}while(n);xu=!1}}function C0(){Cm()}function Cm(){Bs=bu=!1;var e=0;Gn!==0&&L0()&&(e=Gn);for(var t=xt(),n=null,a=ks;a!==null;){var r=a.next,u=Mm(a,t);u===0?(a.next=null,n===null?ks=r:n.next=r,r===null&&(ua=n)):(n=a,(e!==0||(u&3)!==0)&&(Bs=!0)),a=r}$e!==0&&$e!==5||rl(e),Gn!==0&&(Gn=0)}function Mm(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,r=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var d=31-jt(u),y=1<<d,A=r[d];A===-1?((y&n)===0||(y&a)!==0)&&(r[d]=tb(y,t)):A<=t&&(e.expiredLanes|=y),u&=~y}if(t=Ve,n=xe,n=Ll(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(De===2||De===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Vo(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Da(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&Vo(a),Bo(n)){case 2:case 8:n=yh;break;case 32:n=Bl;break;case 268435456:n=bh;break;default:n=Bl}return a=Nm.bind(null,e),n=zo(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&Vo(a),e.callbackPriority=2,e.callbackNode=null,2}function Nm(e,t){if($e!==0&&$e!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Rs()&&e.callbackNode!==n)return null;var a=xe;return a=Ll(e,e===Ve?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(hm(e,a,t),Mm(e,xt()),e.callbackNode!=null&&e.callbackNode===n?Nm.bind(null,e):null)}function zm(e,t){if(Rs())return null;hm(e,t,!0)}function M0(){H0(function(){(Ee&6)!==0?zo(gh,C0):Cm()})}function Su(){if(Gn===0){var e=Fi;e===0&&(e=Ol,Ol<<=1,(Ol&261888)===0&&(Ol=256)),Gn=e}return Gn}function Vm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gl(""+e)}function Rm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function N0(e,t,n,a,r){if(t==="submit"&&n&&n.stateNode===r){var u=Vm((r[dt]||null).action),d=a.submitter;d&&(t=(t=d[dt]||null)?Vm(t.formAction):d.getAttribute("formAction"),t!==null&&(u=t,d=null));var y=new Kl("action","action",null,a,r);e.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Gn!==0){var A=d?Rm(r,d):new FormData(r);Hr(n,{pending:!0,data:A,method:r.method,action:u},null,A)}}else typeof u=="function"&&(y.preventDefault(),A=d?Rm(r,d):new FormData(r),Hr(n,{pending:!0,data:A,method:r.method,action:u},u,A))},currentTarget:r}]})}}for(var ju=0;ju<ar.length;ju++){var Au=ar[ju],z0=Au.toLowerCase(),V0=Au[0].toUpperCase()+Au.slice(1);Qt(z0,"on"+V0)}Qt(cf,"onAnimationEnd"),Qt(hf,"onAnimationIteration"),Qt(ff,"onAnimationStart"),Qt("dblclick","onDoubleClick"),Qt("focusin","onFocus"),Qt("focusout","onBlur"),Qt(Fb,"onTransitionRun"),Qt(Jb,"onTransitionStart"),Qt($b,"onTransitionCancel"),Qt(df,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),si("onBeforeInput",["compositionend","keypress","textInput","paste"]),si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function km(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],r=a.event;a=a.listeners;e:{var u=void 0;if(t)for(var d=a.length-1;0<=d;d--){var y=a[d],A=y.instance,z=y.currentTarget;if(y=y.listener,A!==u&&r.isPropagationStopped())break e;u=y,r.currentTarget=z;try{u(r)}catch(U){$l(U)}r.currentTarget=null,u=A}else for(d=0;d<a.length;d++){if(y=a[d],A=y.instance,z=y.currentTarget,y=y.listener,A!==u&&r.isPropagationStopped())break e;u=y,r.currentTarget=z;try{u(r)}catch(U){$l(U)}r.currentTarget=null,u=A}}}}function be(e,t){var n=t[Oo];n===void 0&&(n=t[Oo]=new Set);var a=e+"__bubble";n.has(a)||(Bm(t,e,2,!1),n.add(a))}function wu(e,t,n){var a=0;t&&(a|=4),Bm(n,e,a,t)}var Os="_reactListening"+Math.random().toString(36).slice(2);function Tu(e){if(!e[Os]){e[Os]=!0,Dh.forEach(function(n){n!=="selectionchange"&&(R0.has(n)||wu(n,!1,e),wu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Os]||(t[Os]=!0,wu("selectionchange",!1,t))}}function Bm(e,t,n,a){switch(cp(t)){case 2:var r=ox;break;case 8:r=rx;break;default:r=qu}n=r.bind(null,t,n,e),r=void 0,!Qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),a?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function Eu(e,t,n,a,r){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var y=a.stateNode.containerInfo;if(y===r)break;if(d===4)for(d=a.return;d!==null;){var A=d.tag;if((A===3||A===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;y!==null;){if(d=zi(y),d===null)return;if(A=d.tag,A===5||A===6||A===26||A===27){a=u=d;continue e}y=y.parentNode}}a=a.return}Lh(function(){var z=u,U=Go(n),Y=[];e:{var R=mf.get(e);if(R!==void 0){var B=Kl,P=e;switch(e){case"keypress":if(Ql(n)===0)break e;case"keydown":case"keyup":B=Eb;break;case"focusin":P="focus",B=Jo;break;case"focusout":P="blur",B=Jo;break;case"beforeblur":case"afterblur":B=Jo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=mb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=Mb;break;case cf:case hf:case ff:B=gb;break;case df:B=zb;break;case"scroll":case"scrollend":B=fb;break;case"wheel":B=Rb;break;case"copy":case"cut":case"paste":B=bb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=Xh;break;case"toggle":case"beforetoggle":B=Bb}var oe=(t&4)!==0,ze=!oe&&(e==="scroll"||e==="scrollend"),D=oe?R!==null?R+"Capture":null:R;oe=[];for(var E=z,M;E!==null;){var q=E;if(M=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||M===null||D===null||(q=za(E,D),q!=null&&oe.push(cl(E,q,M))),ze)break;E=E.return}0<oe.length&&(R=new B(R,P,null,n,U),Y.push({event:R,listeners:oe}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",R&&n!==Yo&&(P=n.relatedTarget||n.fromElement)&&(zi(P)||P[Ni]))break e;if((B||R)&&(R=U.window===U?U:(R=U.ownerDocument)?R.defaultView||R.parentWindow:window,B?(P=n.relatedTarget||n.toElement,B=z,P=P?zi(P):null,P!==null&&(ze=f(P),oe=P.tag,P!==ze||oe!==5&&oe!==27&&oe!==6)&&(P=null)):(B=null,P=z),B!==P)){if(oe=Yh,q="onMouseLeave",D="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(oe=Xh,q="onPointerLeave",D="onPointerEnter",E="pointer"),ze=B==null?R:Na(B),M=P==null?R:Na(P),R=new oe(q,E+"leave",B,n,U),R.target=ze,R.relatedTarget=M,q=null,zi(U)===z&&(oe=new oe(D,E+"enter",P,n,U),oe.target=M,oe.relatedTarget=ze,q=oe),ze=q,B&&P)t:{for(oe=k0,D=B,E=P,M=0,q=D;q;q=oe(q))M++;q=0;for(var ae=E;ae;ae=oe(ae))q++;for(;0<M-q;)D=oe(D),M--;for(;0<q-M;)E=oe(E),q--;for(;M--;){if(D===E||E!==null&&D===E.alternate){oe=D;break t}D=oe(D),E=oe(E)}oe=null}else oe=null;B!==null&&Om(Y,R,B,oe,!1),P!==null&&ze!==null&&Om(Y,ze,P,oe,!0)}}e:{if(R=z?Na(z):window,B=R.nodeName&&R.nodeName.toLowerCase(),B==="select"||B==="input"&&R.type==="file")var we=Ph;else if($h(R))if(Ih)we=Qb;else{we=Gb;var te=Yb}else B=R.nodeName,!B||B.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?z&&Ho(z.elementType)&&(we=Ph):we=Xb;if(we&&(we=we(e,z))){Wh(Y,we,n,U);break e}te&&te(e,R,z),e==="focusout"&&z&&R.type==="number"&&z.memoizedProps.value!=null&&qo(R,"number",R.value)}switch(te=z?Na(z):window,e){case"focusin":($h(te)||te.contentEditable==="true")&&(qi=te,tr=z,La=null);break;case"focusout":La=tr=qi=null;break;case"mousedown":nr=!0;break;case"contextmenu":case"mouseup":case"dragend":nr=!1,rf(Y,n,U);break;case"selectionchange":if(Kb)break;case"keydown":case"keyup":rf(Y,n,U)}var de;if(Wo)e:{switch(e){case"compositionstart":var Se="onCompositionStart";break e;case"compositionend":Se="onCompositionEnd";break e;case"compositionupdate":Se="onCompositionUpdate";break e}Se=void 0}else Li?Fh(e,n)&&(Se="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Se="onCompositionStart");Se&&(Qh&&n.locale!=="ko"&&(Li||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Li&&(de=qh()):(Dn=U,Zo="value"in Dn?Dn.value:Dn.textContent,Li=!0)),te=_s(z,Se),0<te.length&&(Se=new Gh(Se,e,null,n,U),Y.push({event:Se,listeners:te}),de?Se.data=de:(de=Jh(n),de!==null&&(Se.data=de)))),(de=_b?Ub(e,n):Lb(e,n))&&(Se=_s(z,"onBeforeInput"),0<Se.length&&(te=new Gh("onBeforeInput","beforeinput",null,n,U),Y.push({event:te,listeners:Se}),te.data=de)),N0(Y,e,z,n,U)}km(Y,t)})}function cl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _s(e,t){for(var n=t+"Capture",a=[];e!==null;){var r=e,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=za(e,n),r!=null&&a.unshift(cl(e,r,u)),r=za(e,t),r!=null&&a.push(cl(e,r,u))),e.tag===3)return a;e=e.return}return[]}function k0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Om(e,t,n,a,r){for(var u=t._reactName,d=[];n!==null&&n!==a;){var y=n,A=y.alternate,z=y.stateNode;if(y=y.tag,A!==null&&A===a)break;y!==5&&y!==26&&y!==27||z===null||(A=z,r?(z=za(n,u),z!=null&&d.unshift(cl(n,z,A))):r||(z=za(n,u),z!=null&&d.push(cl(n,z,A)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var B0=/\r\n?/g,O0=/\u0000|\uFFFD/g;function _m(e){return(typeof e=="string"?e:""+e).replace(B0,`
`).replace(O0,"")}function Um(e,t){return t=_m(t),_m(e)===t}function Ne(e,t,n,a,r,u){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||Oi(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&Oi(e,""+a);break;case"className":Hl(e,"class",a);break;case"tabIndex":Hl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(e,n,a);break;case"style":_h(e,a,u);break;case"data":if(t!=="object"){Hl(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Gl(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&Ne(e,t,"name",r.name,r,null),Ne(e,t,"formEncType",r.formEncType,r,null),Ne(e,t,"formMethod",r.formMethod,r,null),Ne(e,t,"formTarget",r.formTarget,r,null)):(Ne(e,t,"encType",r.encType,r,null),Ne(e,t,"method",r.method,r,null),Ne(e,t,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=Gl(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=on);break;case"onScroll":a!=null&&be("scroll",e);break;case"onScrollEnd":a!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=Gl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":be("beforetoggle",e),be("toggle",e),ql(e,"popover",a);break;case"xlinkActuate":sn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":sn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":sn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":sn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":sn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":sn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":sn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":sn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":sn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ql(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=cb.get(n)||n,ql(e,n,a))}}function Du(e,t,n,a,r,u){switch(n){case"style":_h(e,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));e.innerHTML=n}}break;case"children":typeof a=="string"?Oi(e,a):(typeof a=="number"||typeof a=="bigint")&&Oi(e,""+a);break;case"onScroll":a!=null&&be("scroll",e);break;case"onScrollEnd":a!=null&&be("scrollend",e);break;case"onClick":a!=null&&(e.onclick=on);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ch.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),t=n.slice(2,r?n.length-7:void 0),u=e[dt]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,r),typeof a=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,r);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):ql(e,n,a)}}}function lt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var a=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,u,d,n,null)}}r&&Ne(e,t,"srcSet",n.srcSet,n,null),a&&Ne(e,t,"src",n.src,n,null);return;case"input":be("invalid",e);var y=u=d=r=null,A=null,z=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":r=U;break;case"type":d=U;break;case"checked":A=U;break;case"defaultChecked":z=U;break;case"value":u=U;break;case"defaultValue":y=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,t));break;default:Ne(e,t,a,U,n,null)}}Rh(e,u,y,A,z,d,r,!1);return;case"select":be("invalid",e),a=d=u=null;for(r in n)if(n.hasOwnProperty(r)&&(y=n[r],y!=null))switch(r){case"value":u=y;break;case"defaultValue":d=y;break;case"multiple":a=y;default:Ne(e,t,r,y,n,null)}t=u,n=d,e.multiple=!!a,t!=null?Bi(e,!!a,t,!1):n!=null&&Bi(e,!!a,n,!0);return;case"textarea":be("invalid",e),u=r=a=null;for(d in n)if(n.hasOwnProperty(d)&&(y=n[d],y!=null))switch(d){case"value":a=y;break;case"defaultValue":r=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:Ne(e,t,d,y,n,null)}Bh(e,a,r,u);return;case"option":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ne(e,t,A,a,n,null)}return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(a=0;a<ul.length;a++)be(ul[a],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in n)if(n.hasOwnProperty(z)&&(a=n[z],a!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:Ne(e,t,z,a,n,null)}return;default:if(Ho(t)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&Du(e,t,U,a,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null&&Ne(e,t,y,a,n,null))}function _0(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,d=null,y=null,A=null,z=null,U=null;for(B in n){var Y=n[B];if(n.hasOwnProperty(B)&&Y!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":A=Y;default:a.hasOwnProperty(B)||Ne(e,t,B,null,a,Y)}}for(var R in a){var B=a[R];if(Y=n[R],a.hasOwnProperty(R)&&(B!=null||Y!=null))switch(R){case"type":u=B;break;case"name":r=B;break;case"checked":z=B;break;case"defaultChecked":U=B;break;case"value":d=B;break;case"defaultValue":y=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,t));break;default:B!==Y&&Ne(e,t,R,B,a,Y)}}Lo(e,d,y,A,z,U,u,r);return;case"select":B=d=y=R=null;for(u in n)if(A=n[u],n.hasOwnProperty(u)&&A!=null)switch(u){case"value":break;case"multiple":B=A;default:a.hasOwnProperty(u)||Ne(e,t,u,null,a,A)}for(r in a)if(u=a[r],A=n[r],a.hasOwnProperty(r)&&(u!=null||A!=null))switch(r){case"value":R=u;break;case"defaultValue":y=u;break;case"multiple":d=u;default:u!==A&&Ne(e,t,r,u,a,A)}t=y,n=d,a=B,R!=null?Bi(e,!!n,R,!1):!!a!=!!n&&(t!=null?Bi(e,!!n,t,!0):Bi(e,!!n,n?[]:"",!1));return;case"textarea":B=R=null;for(y in n)if(r=n[y],n.hasOwnProperty(y)&&r!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Ne(e,t,y,null,a,r)}for(d in a)if(r=a[d],u=n[d],a.hasOwnProperty(d)&&(r!=null||u!=null))switch(d){case"value":R=r;break;case"defaultValue":B=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==u&&Ne(e,t,d,r,a,u)}kh(e,R,B);return;case"option":for(var P in n)if(R=n[P],n.hasOwnProperty(P)&&R!=null&&!a.hasOwnProperty(P))switch(P){case"selected":e.selected=!1;break;default:Ne(e,t,P,null,a,R)}for(A in a)if(R=a[A],B=n[A],a.hasOwnProperty(A)&&R!==B&&(R!=null||B!=null))switch(A){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:Ne(e,t,A,R,a,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in n)R=n[oe],n.hasOwnProperty(oe)&&R!=null&&!a.hasOwnProperty(oe)&&Ne(e,t,oe,null,a,R);for(z in a)if(R=a[z],B=n[z],a.hasOwnProperty(z)&&R!==B&&(R!=null||B!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:Ne(e,t,z,R,a,B)}return;default:if(Ho(t)){for(var ze in n)R=n[ze],n.hasOwnProperty(ze)&&R!==void 0&&!a.hasOwnProperty(ze)&&Du(e,t,ze,void 0,a,R);for(U in a)R=a[U],B=n[U],!a.hasOwnProperty(U)||R===B||R===void 0&&B===void 0||Du(e,t,U,R,a,B);return}}for(var D in n)R=n[D],n.hasOwnProperty(D)&&R!=null&&!a.hasOwnProperty(D)&&Ne(e,t,D,null,a,R);for(Y in a)R=a[Y],B=n[Y],!a.hasOwnProperty(Y)||R===B||R==null&&B==null||Ne(e,t,Y,R,a,B)}function Lm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function U0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],u=r.transferSize,d=r.initiatorType,y=r.duration;if(u&&y&&Lm(d)){for(d=0,y=r.responseEnd,a+=1;a<n.length;a++){var A=n[a],z=A.startTime;if(z>y)break;var U=A.transferSize,Y=A.initiatorType;U&&Lm(Y)&&(A=A.responseEnd,d+=U*(A<y?1:(y-z)/(A-z)))}if(--a,t+=8*(u+d)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Cu=null,Mu=null;function Us(e){return e.nodeType===9?e:e.ownerDocument}function qm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Nu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zu=null;function L0(){var e=window.event;return e&&e.type==="popstate"?e===zu?!1:(zu=e,!0):(zu=null,!1)}var Ym=typeof setTimeout=="function"?setTimeout:void 0,q0=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(e){return Gm.resolve(null).then(e).catch(Y0)}:Ym;function Y0(e){setTimeout(function(){throw e})}function Xn(e){return e==="head"}function Xm(e,t){var n=t,a=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(r),da(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")hl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,hl(n);for(var u=n.firstChild;u;){var d=u.nextSibling,y=u.nodeName;u[Ma]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=d}}else n==="body"&&hl(e.ownerDocument.body);n=r}while(n);da(t)}function Qm(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Vu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vu(n),_o(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function G0(e,t,n,a){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Ma])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=qt(e.nextSibling),e===null)break}return null}function X0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=qt(e.nextSibling),e===null))return null;return e}function Zm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=qt(e.nextSibling),e===null))return null;return e}function Ru(e){return e.data==="$?"||e.data==="$~"}function ku(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Bu=null;function Km(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return qt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Fm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Jm(e,t,n){switch(t=Us(n),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function hl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_o(e)}var Ht=new Map,$m=new Set;function Ls(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var An=X.d;X.d={f:Z0,r:K0,D:F0,C:J0,L:$0,m:W0,X:I0,S:P0,M:ex};function Z0(){var e=An.f(),t=Ns();return e||t}function K0(e){var t=Vi(e);t!==null&&t.tag===5&&t.type==="form"?dd(t):An.r(e)}var ca=typeof document>"u"?null:document;function Wm(e,t,n){var a=ca;if(a&&typeof t=="string"&&t){var r=Rt(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),$m.has(r)||($m.add(r),e={rel:e,crossOrigin:n,href:t},a.querySelector(r)===null&&(t=a.createElement("link"),lt(t,"link",e),Pe(t),a.head.appendChild(t)))}}function F0(e){An.D(e),Wm("dns-prefetch",e,null)}function J0(e,t){An.C(e,t),Wm("preconnect",e,t)}function $0(e,t,n){An.L(e,t,n);var a=ca;if(a&&e&&t){var r='link[rel="preload"][as="'+Rt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Rt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Rt(n.imageSizes)+'"]')):r+='[href="'+Rt(e)+'"]';var u=r;switch(t){case"style":u=ha(e);break;case"script":u=fa(e)}Ht.has(u)||(e=x({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ht.set(u,e),a.querySelector(r)!==null||t==="style"&&a.querySelector(fl(u))||t==="script"&&a.querySelector(dl(u))||(t=a.createElement("link"),lt(t,"link",e),Pe(t),a.head.appendChild(t)))}}function W0(e,t){An.m(e,t);var n=ca;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+Rt(a)+'"][href="'+Rt(e)+'"]',u=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=fa(e)}if(!Ht.has(u)&&(e=x({rel:"modulepreload",href:e},t),Ht.set(u,e),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(dl(u)))return}a=n.createElement("link"),lt(a,"link",e),Pe(a),n.head.appendChild(a)}}}function P0(e,t,n){An.S(e,t,n);var a=ca;if(a&&e){var r=Ri(a).hoistableStyles,u=ha(e);t=t||"default";var d=r.get(u);if(!d){var y={loading:0,preload:null};if(d=a.querySelector(fl(u)))y.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ht.get(u))&&Ou(e,n);var A=d=a.createElement("link");Pe(A),lt(A,"link",e),A._p=new Promise(function(z,U){A.onload=z,A.onerror=U}),A.addEventListener("load",function(){y.loading|=1}),A.addEventListener("error",function(){y.loading|=2}),y.loading|=4,qs(d,t,a)}d={type:"stylesheet",instance:d,count:1,state:y},r.set(u,d)}}}function I0(e,t){An.X(e,t);var n=ca;if(n&&e){var a=Ri(n).hoistableScripts,r=fa(e),u=a.get(r);u||(u=n.querySelector(dl(r)),u||(e=x({src:e,async:!0},t),(t=Ht.get(r))&&_u(e,t),u=n.createElement("script"),Pe(u),lt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function ex(e,t){An.M(e,t);var n=ca;if(n&&e){var a=Ri(n).hoistableScripts,r=fa(e),u=a.get(r);u||(u=n.querySelector(dl(r)),u||(e=x({src:e,async:!0,type:"module"},t),(t=Ht.get(r))&&_u(e,t),u=n.createElement("script"),Pe(u),lt(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function Pm(e,t,n,a){var r=(r=ce.current)?Ls(r):null;if(!r)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ha(n.href),n=Ri(r).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ha(n.href);var u=Ri(r).hoistableStyles,d=u.get(e);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=r.querySelector(fl(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Ht.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ht.set(e,n),u||tx(r,e,n,d.state))),t&&a===null)throw Error(s(528,""));return d}if(t&&a!==null)throw Error(s(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=fa(n),n=Ri(r).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ha(e){return'href="'+Rt(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function Im(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function tx(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),lt(t,"link",n),Pe(t),e.head.appendChild(t))}function fa(e){return'[src="'+Rt(e)+'"]'}function dl(e){return"script[async]"+e}function ep(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+Rt(n.href)+'"]');if(a)return t.instance=a,Pe(a),a;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Pe(a),lt(a,"style",r),qs(a,n.precedence,e),t.instance=a;case"stylesheet":r=ha(n.href);var u=e.querySelector(fl(r));if(u)return t.state.loading|=4,t.instance=u,Pe(u),u;a=Im(n),(r=Ht.get(r))&&Ou(a,r),u=(e.ownerDocument||e).createElement("link"),Pe(u);var d=u;return d._p=new Promise(function(y,A){d.onload=y,d.onerror=A}),lt(u,"link",a),t.state.loading|=4,qs(u,n.precedence,e),t.instance=u;case"script":return u=fa(n.src),(r=e.querySelector(dl(u)))?(t.instance=r,Pe(r),r):(a=n,(r=Ht.get(u))&&(a=x({},n),_u(a,r)),e=e.ownerDocument||e,r=e.createElement("script"),Pe(r),lt(r,"link",a),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,qs(a,n.precedence,e));return t.instance}function qs(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,u=r,d=0;d<a.length;d++){var y=a[d];if(y.dataset.precedence===t)u=y;else if(u!==r)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ou(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function _u(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Hs=null;function tp(e,t,n){if(Hs===null){var a=new Map,r=Hs=new Map;r.set(n,a)}else r=Hs,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var u=n[r];if(!(u[Ma]||u[tt]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(t)||"";d=e+d;var y=a.get(d);y?y.push(u):a.set(d,[u])}}return a}function np(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function nx(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ip(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ix(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=ha(a.href),u=t.querySelector(fl(r));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ys.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=u,Pe(u);return}u=t.ownerDocument||t,a=Im(a),(r=Ht.get(r))&&Ou(a,r),u=u.createElement("link"),Pe(u);var d=u;d._p=new Promise(function(y,A){d.onload=y,d.onerror=A}),lt(u,"link",a),n.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Ys.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Uu=0;function ax(e,t){return e.stylesheets&&e.count===0&&Xs(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xs(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+t);0<e.imgBytes&&Uu===0&&(Uu=62500*U0());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xs(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>Uu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Ys(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xs(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Gs=null;function Xs(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Gs=new Map,t.forEach(lx,e),Gs=null,Ys.call(e))}function lx(e,t){if(!(t.state.loading&4)){var n=Gs.get(e);if(n)var a=n.get(null);else{n=new Map,Gs.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var d=r[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}r=t.instance,d=r.getAttribute("data-precedence"),u=n.get(d)||a,u===a&&n.set(null,r),n.set(d,r),this.count++,a=Ys.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),u?u.parentNode.insertBefore(r,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var ml={$$typeof:O,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function sx(e,t,n,a,r,u,d,y,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ro(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.hiddenUpdates=Ro(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function ap(e,t,n,a,r,u,d,y,A,z,U,Y){return e=new sx(e,t,n,d,A,z,U,Y,y),t=1,u===!0&&(t|=24),u=wt(3,null,null,t),e.current=u,u.stateNode=e,t=gr(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:t},Sr(u),e}function lp(e){return e?(e=Gi,e):Gi}function sp(e,t,n,a,r,u){r=lp(r),a.context===null?a.context=r:a.pendingContext=r,a=Rn(t),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=kn(e,a,t),n!==null&&(bt(n,e,t),Za(n,e,t))}function op(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lu(e,t){op(e,t),(e=e.alternate)&&op(e,t)}function rp(e){if(e.tag===13||e.tag===31){var t=ci(e,67108864);t!==null&&bt(t,e,67108864),Lu(e,67108864)}}function up(e){if(e.tag===13||e.tag===31){var t=Mt();t=ko(t);var n=ci(e,t);n!==null&&bt(n,e,t),Lu(e,t)}}var Qs=!0;function ox(e,t,n,a){var r=V.T;V.T=null;var u=X.p;try{X.p=2,qu(e,t,n,a)}finally{X.p=u,V.T=r}}function rx(e,t,n,a){var r=V.T;V.T=null;var u=X.p;try{X.p=8,qu(e,t,n,a)}finally{X.p=u,V.T=r}}function qu(e,t,n,a){if(Qs){var r=Hu(a);if(r===null)Eu(e,t,a,Zs,n),hp(e,a);else if(cx(r,e,t,n,a))a.stopPropagation();else if(hp(e,a),t&4&&-1<ux.indexOf(e)){for(;r!==null;){var u=Vi(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=li(u.pendingLanes);if(d!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;d;){var A=1<<31-jt(d);y.entanglements[1]|=A,d&=~A}en(u),(Ee&6)===0&&(Cs=xt()+500,rl(0))}}break;case 31:case 13:y=ci(u,2),y!==null&&bt(y,u,2),Ns(),Lu(u,2)}if(u=Hu(a),u===null&&Eu(e,t,a,Zs,n),u===r)break;r=u}r!==null&&a.stopPropagation()}else Eu(e,t,a,null,n)}}function Hu(e){return e=Go(e),Yu(e)}var Zs=null;function Yu(e){if(Zs=null,e=zi(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zs=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Fy()){case gh:return 2;case yh:return 8;case Bl:case Jy:return 32;case bh:return 268435456;default:return 32}default:return 32}}var Gu=!1,Qn=null,Zn=null,Kn=null,pl=new Map,vl=new Map,Fn=[],ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hp(e,t){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":pl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(t.pointerId)}}function gl(e,t,n,a,r,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[r]},t!==null&&(t=Vi(t),t!==null&&rp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function cx(e,t,n,a,r){switch(t){case"focusin":return Qn=gl(Qn,e,t,n,a,r),!0;case"dragenter":return Zn=gl(Zn,e,t,n,a,r),!0;case"mouseover":return Kn=gl(Kn,e,t,n,a,r),!0;case"pointerover":var u=r.pointerId;return pl.set(u,gl(pl.get(u)||null,e,t,n,a,r)),!0;case"gotpointercapture":return u=r.pointerId,vl.set(u,gl(vl.get(u)||null,e,t,n,a,r)),!0}return!1}function fp(e){var t=zi(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Th(e.priority,function(){up(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,Th(e.priority,function(){up(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ks(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Hu(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Yo=a,n.target.dispatchEvent(a),Yo=null}else return t=Vi(n),t!==null&&rp(t),e.blockedOn=n,!1;t.shift()}return!0}function dp(e,t,n){Ks(e)&&n.delete(t)}function hx(){Gu=!1,Qn!==null&&Ks(Qn)&&(Qn=null),Zn!==null&&Ks(Zn)&&(Zn=null),Kn!==null&&Ks(Kn)&&(Kn=null),pl.forEach(dp),vl.forEach(dp)}function Fs(e,t){e.blockedOn===t&&(e.blockedOn=null,Gu||(Gu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,hx)))}var Js=null;function mp(e){Js!==e&&(Js=e,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Js===e&&(Js=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],r=e[t+2];if(typeof a!="function"){if(Yu(a||n)===null)continue;break}var u=Vi(n);u!==null&&(e.splice(t,3),t-=3,Hr(u,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function da(e){function t(A){return Fs(A,e)}Qn!==null&&Fs(Qn,e),Zn!==null&&Fs(Zn,e),Kn!==null&&Fs(Kn,e),pl.forEach(t),vl.forEach(t);for(var n=0;n<Fn.length;n++){var a=Fn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Fn.length&&(n=Fn[0],n.blockedOn===null);)fp(n),n.blockedOn===null&&Fn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],u=n[a+1],d=r[dt]||null;if(typeof u=="function")d||mp(n);else if(d){var y=null;if(u&&u.hasAttribute("formAction")){if(r=u,d=u[dt]||null)y=d.formAction;else if(Yu(r)!==null)continue}else y=d.action;typeof y=="function"?n[a+1]=y:(n.splice(a,3),a-=3),mp(n)}}}function pp(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function Xu(e){this._internalRoot=e}$s.prototype.render=Xu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current,a=Mt();sp(n,a,e,t,null,null)},$s.prototype.unmount=Xu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sp(e.current,2,null,e,null,null),Ns(),t[Ni]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=wh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Fn.length&&t!==0&&t<Fn[n].priority;n++);Fn.splice(n,0,e),n===0&&fp(e)}};var vp=l.version;if(vp!=="19.2.6")throw Error(s(527,vp,"19.2.6"));X.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var fx={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ws=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ws.isDisabled&&Ws.supportsFiber)try{Ea=Ws.inject(fx),St=Ws}catch{}}return bl.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,a="",r=Ad,u=wd,d=Td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=ap(e,1,!1,null,null,n,a,null,r,u,d,pp),e[Ni]=t.current,Tu(e),new Xu(t)},bl.hydrateRoot=function(e,t,n){if(!c(e))throw Error(s(299));var a=!1,r="",u=Ad,d=wd,y=Td,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(A=n.formState)),t=ap(e,1,!0,t,n??null,a,r,A,u,d,y,pp),t.context=lp(null),n=t.current,a=Mt(),a=ko(a),r=Rn(a),r.callback=null,kn(n,r,a),n=a,t.current.lanes=n,Ca(t,n),en(t),e[Ni]=t.current,Tu(e),new $s(t)},bl.version="19.2.6",bl}var Ep;function jx(){if(Ep)return Ku.exports;Ep=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Ku.exports=Sx(),Ku.exports}var Ax=jx();const Yc=G.createContext({});function Gc(i){const l=G.useRef(null);return l.current===null&&(l.current=i()),l.current}const wx=typeof window<"u",Iv=wx?G.useLayoutEffect:G.useEffect,wo=G.createContext(null);function Xc(i,l){i.indexOf(l)===-1&&i.push(l)}function mo(i,l){const o=i.indexOf(l);o>-1&&i.splice(o,1)}const ln=(i,l,o)=>o>l?l:o<i?i:o;let Qc=()=>{};const ei={},eg=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),tg=i=>typeof i=="object"&&i!==null,ng=i=>/^0[^.\s]+$/u.test(i);function ig(i){let l;return()=>(l===void 0&&(l=i()),l)}const Xt=i=>i,zl=(...i)=>i.reduce((l,o)=>s=>o(l(s))),Dl=(i,l,o)=>{const s=l-i;return s?(o-i)/s:1};class Zc{constructor(){this.subscriptions=[]}add(l){return Xc(this.subscriptions,l),()=>mo(this.subscriptions,l)}notify(l,o,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](l,o,s);else for(let f=0;f<c;f++){const h=this.subscriptions[f];h&&h(l,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Nt=i=>i*1e3,Gt=i=>i/1e3,ag=(i,l)=>l?i*(1e3/l):0,lg=(i,l,o)=>(((1-3*o+3*l)*i+(3*o-6*l))*i+3*l)*i,Tx=1e-7,Ex=12;function Dx(i,l,o,s,c){let f,h,m=0;do h=l+(o-l)/2,f=lg(h,s,c)-i,f>0?o=h:l=h;while(Math.abs(f)>Tx&&++m<Ex);return h}function Vl(i,l,o,s){if(i===l&&o===s)return Xt;const c=f=>Dx(f,0,1,i,o);return f=>f===0||f===1?f:lg(c(f),l,s)}const sg=i=>l=>l<=.5?i(2*l)/2:(2-i(2*(1-l)))/2,og=i=>l=>1-i(1-l),rg=Vl(.33,1.53,.69,.99),Kc=og(rg),ug=sg(Kc),cg=i=>i>=1?1:(i*=2)<1?.5*Kc(i):.5*(2-Math.pow(2,-10*(i-1))),Fc=i=>1-Math.sin(Math.acos(i)),hg=og(Fc),fg=sg(Fc),Cx=Vl(.42,0,1,1),Mx=Vl(0,0,.58,1),dg=Vl(.42,0,.58,1),Nx=i=>Array.isArray(i)&&typeof i[0]!="number",mg=i=>Array.isArray(i)&&typeof i[0]=="number",zx={linear:Xt,easeIn:Cx,easeInOut:dg,easeOut:Mx,circIn:Fc,circInOut:fg,circOut:hg,backIn:Kc,backInOut:ug,backOut:rg,anticipate:cg},Vx=i=>typeof i=="string",Dp=i=>{if(mg(i)){Qc(i.length===4);const[l,o,s,c]=i;return Vl(l,o,s,c)}else if(Vx(i))return zx[i];return i},Ps=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Rx(i,l){let o=new Set,s=new Set,c=!1,f=!1;const h=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function g(b){h.has(b)&&(p.schedule(b),i()),b(m)}const p={schedule:(b,x=!1,S=!1)=>{const j=S&&c?o:s;return x&&h.add(b),j.add(b),b},cancel:b=>{s.delete(b),h.delete(b)},process:b=>{if(m=b,c){f=!0;return}c=!0;const x=o;o=s,s=x,o.forEach(g),o.clear(),c=!1,f&&(f=!1,p.process(b))}};return p}const kx=40;function pg(i,l){let o=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,h=Ps.reduce((O,_)=>(O[_]=Rx(f),O),{}),{setup:m,read:g,resolveKeyframes:p,preUpdate:b,update:x,preRender:S,render:w,postRender:j}=h,N=()=>{const O=ei.useManualTiming,_=O?c.timestamp:performance.now();o=!1,O||(c.delta=s?1e3/60:Math.max(Math.min(_-c.timestamp,kx),1)),c.timestamp=_,c.isProcessing=!0,m.process(c),g.process(c),p.process(c),b.process(c),x.process(c),S.process(c),w.process(c),j.process(c),c.isProcessing=!1,o&&l&&(s=!1,i(N))},k=()=>{o=!0,s=!0,c.isProcessing||i(N)};return{schedule:Ps.reduce((O,_)=>{const Q=h[_];return O[_]=(ne,K=!1,F=!1)=>(o||k(),Q.schedule(ne,K,F)),O},{}),cancel:O=>{for(let _=0;_<Ps.length;_++)h[Ps[_]].cancel(O)},state:c,steps:h}}const{schedule:ke,cancel:ti,state:st,steps:Wu}=pg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xt,!0);let lo;function Bx(){lo=void 0}const ct={now:()=>(lo===void 0&&ct.set(st.isProcessing||ei.useManualTiming?st.timestamp:performance.now()),lo),set:i=>{lo=i,queueMicrotask(Bx)}},vg=i=>l=>typeof l=="string"&&l.startsWith(i),gg=vg("--"),Ox=vg("var(--"),Jc=i=>Ox(i)?_x.test(i.split("/*")[0].trim()):!1,_x=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Cp(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const Sa={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Cl={...Sa,transform:i=>ln(0,1,i)},Is={...Sa,default:1},Al=i=>Math.round(i*1e5)/1e5,$c=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Ux(i){return i==null}const Lx=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wc=(i,l)=>o=>!!(typeof o=="string"&&Lx.test(o)&&o.startsWith(i)||l&&!Ux(o)&&Object.prototype.hasOwnProperty.call(o,l)),yg=(i,l,o)=>s=>{if(typeof s!="string")return s;const[c,f,h,m]=s.match($c);return{[i]:parseFloat(c),[l]:parseFloat(f),[o]:parseFloat(h),alpha:m!==void 0?parseFloat(m):1}},qx=i=>ln(0,255,i),Pu={...Sa,transform:i=>Math.round(qx(i))},Ti={test:Wc("rgb","red"),parse:yg("red","green","blue"),transform:({red:i,green:l,blue:o,alpha:s=1})=>"rgba("+Pu.transform(i)+", "+Pu.transform(l)+", "+Pu.transform(o)+", "+Al(Cl.transform(s))+")"};function Hx(i){let l="",o="",s="",c="";return i.length>5?(l=i.substring(1,3),o=i.substring(3,5),s=i.substring(5,7),c=i.substring(7,9)):(l=i.substring(1,2),o=i.substring(2,3),s=i.substring(3,4),c=i.substring(4,5),l+=l,o+=o,s+=s,c+=c),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const mc={test:Wc("#"),parse:Hx,transform:Ti.transform},Rl=i=>({test:l=>typeof l=="string"&&l.endsWith(i)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${i}`}),wn=Rl("deg"),an=Rl("%"),I=Rl("px"),Yx=Rl("vh"),Gx=Rl("vw"),Mp={...an,parse:i=>an.parse(i)/100,transform:i=>an.transform(i*100)},pa={test:Wc("hsl","hue"),parse:yg("hue","saturation","lightness"),transform:({hue:i,saturation:l,lightness:o,alpha:s=1})=>"hsla("+Math.round(i)+", "+an.transform(Al(l))+", "+an.transform(Al(o))+", "+Al(Cl.transform(s))+")"},Fe={test:i=>Ti.test(i)||mc.test(i)||pa.test(i),parse:i=>Ti.test(i)?Ti.parse(i):pa.test(i)?pa.parse(i):mc.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?Ti.transform(i):pa.transform(i),getAnimatableNone:i=>{const l=Fe.parse(i);return l.alpha=0,Fe.transform(l)}},Xx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Qx(i){var l,o;return isNaN(i)&&typeof i=="string"&&(((l=i.match($c))==null?void 0:l.length)||0)+(((o=i.match(Xx))==null?void 0:o.length)||0)>0}const bg="number",xg="color",Zx="var",Kx="var(",Np="${}",Fx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ya(i){const l=i.toString(),o=[],s={color:[],number:[],var:[]},c=[];let f=0;const m=l.replace(Fx,g=>(Fe.test(g)?(s.color.push(f),c.push(xg),o.push(Fe.parse(g))):g.startsWith(Kx)?(s.var.push(f),c.push(Zx),o.push(g)):(s.number.push(f),c.push(bg),o.push(parseFloat(g))),++f,Np)).split(Np);return{values:o,split:m,indexes:s,types:c}}function Jx(i){return ya(i).values}function Sg({split:i,types:l}){const o=i.length;return s=>{let c="";for(let f=0;f<o;f++)if(c+=i[f],s[f]!==void 0){const h=l[f];h===bg?c+=Al(s[f]):h===xg?c+=Fe.transform(s[f]):c+=s[f]}return c}}function $x(i){return Sg(ya(i))}const Wx=i=>typeof i=="number"?0:Fe.test(i)?Fe.getAnimatableNone(i):i,Px=(i,l)=>typeof i=="number"?l!=null&&l.trim().endsWith("/")?i:0:Wx(i);function Ix(i){const l=ya(i);return Sg(l)(l.values.map((s,c)=>Px(s,l.split[c])))}const $t={test:Qx,parse:Jx,createTransformer:$x,getAnimatableNone:Ix};function Iu(i,l,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?i+(l-i)*6*o:o<1/2?l:o<2/3?i+(l-i)*(2/3-o)*6:i}function e1({hue:i,saturation:l,lightness:o,alpha:s}){i/=360,l/=100,o/=100;let c=0,f=0,h=0;if(!l)c=f=h=o;else{const m=o<.5?o*(1+l):o+l-o*l,g=2*o-m;c=Iu(g,m,i+1/3),f=Iu(g,m,i),h=Iu(g,m,i-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(h*255),alpha:s}}function po(i,l){return o=>o>0?l:i}const Re=(i,l,o)=>i+(l-i)*o,ec=(i,l,o)=>{const s=i*i,c=o*(l*l-s)+s;return c<0?0:Math.sqrt(c)},t1=[mc,Ti,pa],n1=i=>t1.find(l=>l.test(i));function zp(i){const l=n1(i);if(!l)return!1;let o=l.parse(i);return l===pa&&(o=e1(o)),o}const Vp=(i,l)=>{const o=zp(i),s=zp(l);if(!o||!s)return po(i,l);const c={...o};return f=>(c.red=ec(o.red,s.red,f),c.green=ec(o.green,s.green,f),c.blue=ec(o.blue,s.blue,f),c.alpha=Re(o.alpha,s.alpha,f),Ti.transform(c))},pc=new Set(["none","hidden"]);function i1(i,l){return pc.has(i)?o=>o<=0?i:l:o=>o>=1?l:i}function a1(i,l){return o=>Re(i,l,o)}function Pc(i){return typeof i=="number"?a1:typeof i=="string"?Jc(i)?po:Fe.test(i)?Vp:o1:Array.isArray(i)?jg:typeof i=="object"?Fe.test(i)?Vp:l1:po}function jg(i,l){const o=[...i],s=o.length,c=i.map((f,h)=>Pc(f)(f,l[h]));return f=>{for(let h=0;h<s;h++)o[h]=c[h](f);return o}}function l1(i,l){const o={...i,...l},s={};for(const c in o)i[c]!==void 0&&l[c]!==void 0&&(s[c]=Pc(i[c])(i[c],l[c]));return c=>{for(const f in s)o[f]=s[f](c);return o}}function s1(i,l){const o=[],s={color:0,var:0,number:0};for(let c=0;c<l.values.length;c++){const f=l.types[c],h=i.indexes[f][s[f]],m=i.values[h]??0;o[c]=m,s[f]++}return o}const o1=(i,l)=>{const o=$t.createTransformer(l),s=ya(i),c=ya(l);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?pc.has(i)&&!c.values.length||pc.has(l)&&!s.values.length?i1(i,l):zl(jg(s1(s,c),c.values),o):po(i,l)};function Ag(i,l,o){return typeof i=="number"&&typeof l=="number"&&typeof o=="number"?Re(i,l,o):Pc(i)(i,l)}const r1=i=>{const l=({timestamp:o})=>i(o);return{start:(o=!0)=>ke.update(l,o),stop:()=>ti(l),now:()=>st.isProcessing?st.timestamp:ct.now()}},wg=(i,l,o=10)=>{let s="";const c=Math.max(Math.round(l/o),2);for(let f=0;f<c;f++)s+=Math.round(i(f/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},vo=2e4;function Ic(i){let l=0;const o=50;let s=i.next(l);for(;!s.done&&l<vo;)l+=o,s=i.next(l);return l>=vo?1/0:l}function u1(i,l=100,o){const s=o({...i,keyframes:[0,l]}),c=Math.min(Ic(s),vo);return{type:"keyframes",ease:f=>s.next(c*f).value/l,duration:Gt(c)}}const He={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function vc(i,l){return i*Math.sqrt(1-l*l)}const c1=12;function h1(i,l,o){let s=o;for(let c=1;c<c1;c++)s=s-i(s)/l(s);return s}const tc=.001;function f1({duration:i=He.duration,bounce:l=He.bounce,velocity:o=He.velocity,mass:s=He.mass}){let c,f,h=1-l;h=ln(He.minDamping,He.maxDamping,h),i=ln(He.minDuration,He.maxDuration,Gt(i)),h<1?(c=p=>{const b=p*h,x=b*i,S=b-o,w=vc(p,h),j=Math.exp(-x);return tc-S/w*j},f=p=>{const x=p*h*i,S=x*o+o,w=Math.pow(h,2)*Math.pow(p,2)*i,j=Math.exp(-x),N=vc(Math.pow(p,2),h);return(-c(p)+tc>0?-1:1)*((S-w)*j)/N}):(c=p=>{const b=Math.exp(-p*i),x=(p-o)*i+1;return-tc+b*x},f=p=>{const b=Math.exp(-p*i),x=(o-p)*(i*i);return b*x});const m=5/i,g=h1(c,f,m);if(i=Nt(i),isNaN(g))return{stiffness:He.stiffness,damping:He.damping,duration:i};{const p=Math.pow(g,2)*s;return{stiffness:p,damping:h*2*Math.sqrt(s*p),duration:i}}}const d1=["duration","bounce"],m1=["stiffness","damping","mass"];function Rp(i,l){return l.some(o=>i[o]!==void 0)}function p1(i){let l={velocity:He.velocity,stiffness:He.stiffness,damping:He.damping,mass:He.mass,isResolvedFromDuration:!1,...i};if(!Rp(i,m1)&&Rp(i,d1))if(l.velocity=0,i.visualDuration){const o=i.visualDuration,s=2*Math.PI/(o*1.2),c=s*s,f=2*ln(.05,1,1-(i.bounce||0))*Math.sqrt(c);l={...l,mass:He.mass,stiffness:c,damping:f}}else{const o=f1({...i,velocity:0});l={...l,...o,mass:He.mass},l.isResolvedFromDuration=!0}return l}function go(i=He.visualDuration,l=He.bounce){const o=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:l}:i;let{restSpeed:s,restDelta:c}=o;const f=o.keyframes[0],h=o.keyframes[o.keyframes.length-1],m={done:!1,value:f},{stiffness:g,damping:p,mass:b,duration:x,velocity:S,isResolvedFromDuration:w}=p1({...o,velocity:-Gt(o.velocity||0)}),j=S||0,N=p/(2*Math.sqrt(g*b)),k=h-f,C=Gt(Math.sqrt(g/b)),L=Math.abs(k)<5;s||(s=L?He.restSpeed.granular:He.restSpeed.default),c||(c=L?He.restDelta.granular:He.restDelta.default);let O,_,Q,ne,K,F;if(N<1)Q=vc(C,N),ne=(j+N*C*k)/Q,O=ee=>{const se=Math.exp(-N*C*ee);return h-se*(ne*Math.sin(Q*ee)+k*Math.cos(Q*ee))},K=N*C*ne+k*Q,F=N*C*k-ne*Q,_=ee=>Math.exp(-N*C*ee)*(K*Math.sin(Q*ee)+F*Math.cos(Q*ee));else if(N===1){O=se=>h-Math.exp(-C*se)*(k+(j+C*k)*se);const ee=j+C*k;_=se=>Math.exp(-C*se)*(C*ee*se-j)}else{const ee=C*Math.sqrt(N*N-1);O=ge=>{const ve=Math.exp(-N*C*ge),V=Math.min(ee*ge,300);return h-ve*((j+N*C*k)*Math.sinh(V)+ee*k*Math.cosh(V))/ee};const se=(j+N*C*k)/ee,W=N*C*se-k*ee,pe=N*C*k-se*ee;_=ge=>{const ve=Math.exp(-N*C*ge),V=Math.min(ee*ge,300);return ve*(W*Math.sinh(V)+pe*Math.cosh(V))}}const ie={calculatedDuration:w&&x||null,velocity:ee=>Nt(_(ee)),next:ee=>{if(!w&&N<1){const W=Math.exp(-N*C*ee),pe=Math.sin(Q*ee),ge=Math.cos(Q*ee),ve=h-W*(ne*pe+k*ge),V=Nt(W*(K*pe+F*ge));return m.done=Math.abs(V)<=s&&Math.abs(h-ve)<=c,m.value=m.done?h:ve,m}const se=O(ee);if(w)m.done=ee>=x;else{const W=Nt(_(ee));m.done=Math.abs(W)<=s&&Math.abs(h-se)<=c}return m.value=m.done?h:se,m},toString:()=>{const ee=Math.min(Ic(ie),vo),se=wg(W=>ie.next(ee*W).value,ee,30);return ee+"ms "+se},toTransition:()=>{}};return ie}go.applyToOptions=i=>{const l=u1(i,100,go);return i.ease=l.ease,i.duration=Nt(l.duration),i.type="keyframes",i};const v1=5;function Tg(i,l,o){const s=Math.max(l-v1,0);return ag(o-i(s),l-s)}function gc({keyframes:i,velocity:l=0,power:o=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:h,min:m,max:g,restDelta:p=.5,restSpeed:b}){const x=i[0],S={done:!1,value:x},w=F=>m!==void 0&&F<m||g!==void 0&&F>g,j=F=>m===void 0?g:g===void 0||Math.abs(m-F)<Math.abs(g-F)?m:g;let N=o*l;const k=x+N,C=h===void 0?k:h(k);C!==k&&(N=C-x);const L=F=>-N*Math.exp(-F/s),O=F=>C+L(F),_=F=>{const ie=L(F),ee=O(F);S.done=Math.abs(ie)<=p,S.value=S.done?C:ee};let Q,ne;const K=F=>{w(S.value)&&(Q=F,ne=go({keyframes:[S.value,j(S.value)],velocity:Tg(O,F,S.value),damping:c,stiffness:f,restDelta:p,restSpeed:b}))};return K(0),{calculatedDuration:null,next:F=>{let ie=!1;return!ne&&Q===void 0&&(ie=!0,_(F),K(F)),Q!==void 0&&F>=Q?ne.next(F-Q):(!ie&&_(F),S)}}}function g1(i,l,o){const s=[],c=o||ei.mix||Ag,f=i.length-1;for(let h=0;h<f;h++){let m=c(i[h],i[h+1]);if(l){const g=Array.isArray(l)?l[h]||Xt:l;m=zl(g,m)}s.push(m)}return s}function y1(i,l,{clamp:o=!0,ease:s,mixer:c}={}){const f=i.length;if(Qc(f===l.length),f===1)return()=>l[0];if(f===2&&l[0]===l[1])return()=>l[1];const h=i[0]===i[1];i[0]>i[f-1]&&(i=[...i].reverse(),l=[...l].reverse());const m=g1(l,s,c),g=m.length,p=b=>{if(h&&b<i[0])return l[0];let x=0;if(g>1)for(;x<i.length-2&&!(b<i[x+1]);x++);const S=Dl(i[x],i[x+1],b);return m[x](S)};return o?b=>p(ln(i[0],i[f-1],b)):p}function b1(i,l){const o=i[i.length-1];for(let s=1;s<=l;s++){const c=Dl(0,l,s);i.push(Re(o,1,c))}}function x1(i){const l=[0];return b1(l,i.length-1),l}function S1(i,l){return i.map(o=>o*l)}function j1(i,l){return i.map(()=>l||dg).splice(0,i.length-1)}function wl({duration:i=300,keyframes:l,times:o,ease:s="easeInOut"}){const c=Nx(s)?s.map(Dp):Dp(s),f={done:!1,value:l[0]},h=S1(o&&o.length===l.length?o:x1(l),i),m=y1(h,l,{ease:Array.isArray(c)?c:j1(l,c)});return{calculatedDuration:i,next:g=>(f.value=m(g),f.done=g>=i,f)}}const A1=i=>i!==null;function To(i,{repeat:l,repeatType:o="loop"},s,c=1){const f=i.filter(A1),m=c<0||l&&o!=="loop"&&l%2===1?0:f.length-1;return!m||s===void 0?f[m]:s}const w1={decay:gc,inertia:gc,tween:wl,keyframes:wl,spring:go};function Eg(i){typeof i.type=="string"&&(i.type=w1[i.type])}class eh{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(l=>{this.resolve=l})}notifyFinished(){this.resolve()}then(l,o){return this.finished.then(l,o)}}const T1=i=>i/100;class yo extends eh{constructor(l){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,c;const{motionValue:o}=this.options;o&&o.updatedAt!==ct.now()&&this.tick(ct.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(s=this.options).onStop)==null||c.call(s))},this.options=l,this.initAnimation(),this.play(),l.autoplay===!1&&this.pause()}initAnimation(){const{options:l}=this;Eg(l);const{type:o=wl,repeat:s=0,repeatDelay:c=0,repeatType:f,velocity:h=0}=l;let{keyframes:m}=l;const g=o||wl;g!==wl&&typeof m[0]!="number"&&(this.mixKeyframes=zl(T1,Ag(m[0],m[1])),m=[0,100]);const p=g({...l,keyframes:m});f==="mirror"&&(this.mirroredGenerator=g({...l,keyframes:[...m].reverse(),velocity:-h})),p.calculatedDuration===null&&(p.calculatedDuration=Ic(p));const{calculatedDuration:b}=p;this.calculatedDuration=b,this.resolvedDuration=b+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=p}updateTime(l){const o=Math.round(l-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(l,o=!1){const{generator:s,totalDuration:c,mixKeyframes:f,mirroredGenerator:h,resolvedDuration:m,calculatedDuration:g}=this;if(this.startTime===null)return s.next(0);const{delay:p=0,keyframes:b,repeat:x,repeatType:S,repeatDelay:w,type:j,onUpdate:N,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,l):this.speed<0&&(this.startTime=Math.min(l-c/this.speed,this.startTime)),o?this.currentTime=l:this.updateTime(l);const C=this.currentTime-p*(this.playbackSpeed>=0?1:-1),L=this.playbackSpeed>=0?C<0:C>c;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let O=this.currentTime,_=s;if(x){const F=Math.min(this.currentTime,c)/m;let ie=Math.floor(F),ee=F%1;!ee&&F>=1&&(ee=1),ee===1&&ie--,ie=Math.min(ie,x+1),!!(ie%2)&&(S==="reverse"?(ee=1-ee,w&&(ee-=w/m)):S==="mirror"&&(_=h)),O=ln(0,1,ee)*m}let Q;L?(this.delayState.value=b[0],Q=this.delayState):Q=_.next(O),f&&!L&&(Q.value=f(Q.value));let{done:ne}=Q;!L&&g!==null&&(ne=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&ne);return K&&j!==gc&&(Q.value=To(b,this.options,k,this.speed)),N&&N(Q.value),K&&this.finish(),Q}then(l,o){return this.finished.then(l,o)}get duration(){return Gt(this.calculatedDuration)}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+Gt(l)}get time(){return Gt(this.currentTime)}set time(l){l=Nt(l),this.currentTime=l,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=l:this.driver&&(this.startTime=this.driver.now()-l/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=l,this.tick(l))}getGeneratorVelocity(){const l=this.currentTime;if(l<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(l);const o=this.generator.next(l).value;return Tg(s=>this.generator.next(s).value,l,o)}get speed(){return this.playbackSpeed}set speed(l){const o=this.playbackSpeed!==l;o&&this.driver&&this.updateTime(ct.now()),this.playbackSpeed=l,o&&this.driver&&(this.time=Gt(this.currentTime))}play(){var c,f;if(this.isStopped)return;const{driver:l=r1,startTime:o}=this.options;this.driver||(this.driver=l(h=>this.tick(h))),(f=(c=this.options).onPlay)==null||f.call(c);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=o??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ct.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var l,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(l=this.options).onComplete)==null||o.call(l)}cancel(){var l,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(l=this.options).onCancel)==null||o.call(l)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(l){return this.startTime=0,this.tick(l,!0)}attachTimeline(l){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),l.observe(this)}}function E1(i){for(let l=1;l<i.length;l++)i[l]??(i[l]=i[l-1])}const Ei=i=>i*180/Math.PI,yc=i=>{const l=Ei(Math.atan2(i[1],i[0]));return bc(l)},D1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:yc,rotateZ:yc,skewX:i=>Ei(Math.atan(i[1])),skewY:i=>Ei(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},bc=i=>(i=i%360,i<0&&(i+=360),i),kp=yc,Bp=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),Op=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),C1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Bp,scaleY:Op,scale:i=>(Bp(i)+Op(i))/2,rotateX:i=>bc(Ei(Math.atan2(i[6],i[5]))),rotateY:i=>bc(Ei(Math.atan2(-i[2],i[0]))),rotateZ:kp,rotate:kp,skewX:i=>Ei(Math.atan(i[4])),skewY:i=>Ei(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function xc(i){return i.includes("scale")?1:0}function Sc(i,l){if(!i||i==="none")return xc(l);const o=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(o)s=C1,c=o;else{const m=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=D1,c=m}if(!c)return xc(l);const f=s[l],h=c[1].split(",").map(N1);return typeof f=="function"?f(h):h[f]}const M1=(i,l)=>{const{transform:o="none"}=getComputedStyle(i);return Sc(o,l)};function N1(i){return parseFloat(i.trim())}const ja=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Aa=new Set([...ja,"pathRotation"]),_p=i=>i===Sa||i===I,z1=new Set(["x","y","z"]),V1=ja.filter(i=>!z1.has(i));function R1(i){const l=[];return V1.forEach(o=>{const s=i.getValue(o);s!==void 0&&(l.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),l}const In={width:({x:i},{paddingLeft:l="0",paddingRight:o="0",boxSizing:s})=>{const c=i.max-i.min;return s==="border-box"?c:c-parseFloat(l)-parseFloat(o)},height:({y:i},{paddingTop:l="0",paddingBottom:o="0",boxSizing:s})=>{const c=i.max-i.min;return s==="border-box"?c:c-parseFloat(l)-parseFloat(o)},top:(i,{top:l})=>parseFloat(l),left:(i,{left:l})=>parseFloat(l),bottom:({y:i},{top:l})=>parseFloat(l)+(i.max-i.min),right:({x:i},{left:l})=>parseFloat(l)+(i.max-i.min),x:(i,{transform:l})=>Sc(l,"x"),y:(i,{transform:l})=>Sc(l,"y")};In.translateX=In.x;In.translateY=In.y;const Di=new Set;let jc=!1,Ac=!1,wc=!1;function Dg(){if(Ac){const i=Array.from(Di).filter(s=>s.needsMeasurement),l=new Set(i.map(s=>s.element)),o=new Map;l.forEach(s=>{const c=R1(s);c.length&&(o.set(s,c),s.render())}),i.forEach(s=>s.measureInitialState()),l.forEach(s=>{s.render();const c=o.get(s);c&&c.forEach(([f,h])=>{var m;(m=s.getValue(f))==null||m.set(h)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Ac=!1,jc=!1,Di.forEach(i=>i.complete(wc)),Di.clear()}function Cg(){Di.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Ac=!0)})}function k1(){wc=!0,Cg(),Dg(),wc=!1}class th{constructor(l,o,s,c,f,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...l],this.onComplete=o,this.name=s,this.motionValue=c,this.element=f,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(Di.add(this),jc||(jc=!0,ke.read(Cg),ke.resolveKeyframes(Dg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:l,name:o,element:s,motionValue:c}=this;if(l[0]===null){const f=c==null?void 0:c.get(),h=l[l.length-1];if(f!==void 0)l[0]=f;else if(s&&o){const m=s.readValue(o,h);m!=null&&(l[0]=m)}l[0]===void 0&&(l[0]=h),c&&f===void 0&&c.set(l[0])}E1(l)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(l=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,l),Di.delete(this)}cancel(){this.state==="scheduled"&&(Di.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const B1=i=>i.startsWith("--");function Mg(i,l,o){B1(l)?i.style.setProperty(l,o):i.style[l]=o}const O1={};function Ng(i,l){const o=ig(i);return()=>O1[l]??o()}const _1=Ng(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),zg=Ng(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Sl=([i,l,o,s])=>`cubic-bezier(${i}, ${l}, ${o}, ${s})`,Up={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Sl([0,.65,.55,1]),circOut:Sl([.55,0,1,.45]),backIn:Sl([.31,.01,.66,-.59]),backOut:Sl([.33,1.53,.69,.99])};function Vg(i,l){if(i)return typeof i=="function"?zg()?wg(i,l):"ease-out":mg(i)?Sl(i):Array.isArray(i)?i.map(o=>Vg(o,l)||Up.easeOut):Up[i]}function U1(i,l,o,{delay:s=0,duration:c=300,repeat:f=0,repeatType:h="loop",ease:m="easeOut",times:g}={},p=void 0){const b={[l]:o};g&&(b.offset=g);const x=Vg(m,c);Array.isArray(x)&&(b.easing=x);const S={delay:s,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:f+1,direction:h==="reverse"?"alternate":"normal"};return p&&(S.pseudoElement=p),i.animate(b,S)}function Rg(i){return typeof i=="function"&&"applyToOptions"in i}function L1({type:i,...l}){return Rg(i)&&zg()?i.applyToOptions(l):(l.duration??(l.duration=300),l.ease??(l.ease="easeOut"),l)}class kg extends eh{constructor(l){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!l)return;const{element:o,name:s,keyframes:c,pseudoElement:f,allowFlatten:h=!1,finalKeyframe:m,onComplete:g}=l;this.isPseudoElement=!!f,this.allowFlatten=h,this.options=l,Qc(typeof l.type!="string");const p=L1(l);this.animation=U1(o,s,c,p,f),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const b=To(c,this.options,m,this.speed);this.updateMotionValue&&this.updateMotionValue(b),Mg(o,s,b),this.animation.cancel()}g==null||g(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var l,o;(o=(l=this.animation).finish)==null||o.call(l)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:l}=this;l==="idle"||l==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,s,c;const l=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(l!=null&&l.isConnected)&&((c=(s=this.animation).commitStyles)==null||c.call(s))}get duration(){var o,s;const l=((s=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:s.call(o).duration)||0;return Gt(Number(l))}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+Gt(l)}get time(){return Gt(Number(this.animation.currentTime)||0)}set time(l){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Nt(l),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(l){l<0&&(this.finishedTime=null),this.animation.playbackRate=l}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(l){this.manualStartTime=this.animation.startTime=l}attachTimeline({timeline:l,rangeStart:o,rangeEnd:s,observe:c}){var f;return this.allowFlatten&&((f=this.animation.effect)==null||f.updateTiming({easing:"linear"})),this.animation.onfinish=null,l&&_1()?(this.animation.timeline=l,o&&(this.animation.rangeStart=o),s&&(this.animation.rangeEnd=s),Xt):c(this)}}const Bg={anticipate:cg,backInOut:ug,circInOut:fg};function q1(i){return i in Bg}function H1(i){typeof i.ease=="string"&&q1(i.ease)&&(i.ease=Bg[i.ease])}const nc=10;class Y1 extends kg{constructor(l){H1(l),Eg(l),super(l),l.startTime!==void 0&&l.autoplay!==!1&&(this.startTime=l.startTime),this.options=l}updateMotionValue(l){const{motionValue:o,onUpdate:s,onComplete:c,element:f,...h}=this.options;if(!o)return;if(l!==void 0){o.set(l);return}const m=new yo({...h,autoplay:!1}),g=Math.max(nc,ct.now()-this.startTime),p=ln(0,nc,g-nc),b=m.sample(g).value,{name:x}=this.options;f&&x&&Mg(f,x,b),o.setWithVelocity(m.sample(Math.max(0,g-p)).value,b,p),m.stop()}}const Lp=(i,l)=>l==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&($t.test(i)||i==="0")&&!i.startsWith("url("));function G1(i){const l=i[0];if(i.length===1)return!0;for(let o=0;o<i.length;o++)if(i[o]!==l)return!0}function X1(i,l,o,s){const c=i[0];if(c===null)return!1;if(l==="display"||l==="visibility")return!0;const f=i[i.length-1],h=Lp(c,l),m=Lp(f,l);return!h||!m?!1:G1(i)||(o==="spring"||Rg(o))&&s}function Tc(i){i.duration=0,i.type="keyframes"}const Og=new Set(["opacity","clipPath","filter","transform"]),Q1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Z1(i){for(let l=0;l<i.length;l++)if(typeof i[l]=="string"&&Q1.test(i[l]))return!0;return!1}const K1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),F1=ig(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function J1(i){var x;const{motionValue:l,name:o,repeatDelay:s,repeatType:c,damping:f,type:h,keyframes:m}=i;if(!(((x=l==null?void 0:l.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:b}=l.owner.getProps();return F1()&&o&&(Og.has(o)||K1.has(o)&&Z1(m))&&(o!=="transform"||!b)&&!p&&!s&&c!=="mirror"&&f!==0&&h!=="inertia"}const $1=40;class W1 extends eh{constructor({autoplay:l=!0,delay:o=0,type:s="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:h="loop",keyframes:m,name:g,motionValue:p,element:b,...x}){var j;super(),this.stop=()=>{var N,k;this._animation&&(this._animation.stop(),(N=this.stopTimeline)==null||N.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=ct.now();const S={autoplay:l,delay:o,type:s,repeat:c,repeatDelay:f,repeatType:h,name:g,motionValue:p,element:b,...x},w=(b==null?void 0:b.KeyframeResolver)||th;this.keyframeResolver=new w(m,(N,k,C)=>this.onKeyframesResolved(N,k,S,!C),g,p,b),(j=this.keyframeResolver)==null||j.scheduleResolve()}onKeyframesResolved(l,o,s,c){var C,L;this.keyframeResolver=void 0;const{name:f,type:h,velocity:m,delay:g,isHandoff:p,onUpdate:b}=s;this.resolvedAt=ct.now();let x=!0;X1(l,f,h,m)||(x=!1,(ei.instantAnimations||!g)&&(b==null||b(To(l,s,o))),l[0]=l[l.length-1],Tc(s),s.repeat=0);const w={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>$1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...s,keyframes:l},j=x&&!p&&J1(w),N=(L=(C=w.motionValue)==null?void 0:C.owner)==null?void 0:L.current;let k;if(j)try{k=new Y1({...w,element:N})}catch{k=new yo(w)}else k=new yo(w);k.finished.then(()=>{this.notifyFinished()}).catch(Xt),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(l,o){return this.finished.finally(l).then(()=>{})}get animation(){var l;return this._animation||((l=this.keyframeResolver)==null||l.resume(),k1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(l){this.animation.time=l}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(l){this.animation.speed=l}get startTime(){return this.animation.startTime}attachTimeline(l){return this._animation?this.stopTimeline=this.animation.attachTimeline(l):this.pendingTimeline=l,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var l;this._animation&&this.animation.cancel(),(l=this.keyframeResolver)==null||l.cancel()}}function _g(i,l,o,s=0,c=1){const f=Array.from(i).sort((p,b)=>p.sortNodePosition(b)).indexOf(l),h=i.size,m=(h-1)*s;return typeof o=="function"?o(f,h):c===1?f*s:m-f*s}const qp=30,P1=i=>!isNaN(parseFloat(i));class I1{constructor(l,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var f;const c=ct.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(l),this.owner=o.owner}setCurrent(l){this.current=l,this.updatedAt=ct.now(),this.canTrackVelocity===null&&l!==void 0&&(this.canTrackVelocity=P1(this.current))}setPrevFrameValue(l=this.current){this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt}onChange(l){return this.on("change",l)}on(l,o){this.events[l]||(this.events[l]=new Zc);const s=this.events[l].add(o);return l==="change"?()=>{s(),ke.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const l in this.events)this.events[l].clear()}attach(l,o){this.passiveEffect=l,this.stopPassiveEffect=o}set(l){this.passiveEffect?this.passiveEffect(l,this.updateAndNotify):this.updateAndNotify(l)}setWithVelocity(l,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt-s}jump(l,o=!0){this.updateAndNotify(l),this.prev=l,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var l;(l=this.events.change)==null||l.notify(this.current)}addDependent(l){this.dependents||(this.dependents=new Set),this.dependents.add(l)}removeDependent(l){this.dependents&&this.dependents.delete(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const l=ct.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||l-this.updatedAt>qp)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,qp);return ag(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(l){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=l(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var l,o;(l=this.dependents)==null||l.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ba(i,l){return new I1(i,l)}function Ug(i,l){if(i!=null&&i.inherit&&l){const{inherit:o,...s}=i;return{...l,...s}}return i}function nh(i,l){const o=(i==null?void 0:i[l])??(i==null?void 0:i.default)??i;return o!==i?Ug(o,i):o}const eS={type:"spring",stiffness:500,damping:25,restSpeed:10},tS=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),nS={type:"keyframes",duration:.8},iS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},aS=(i,{keyframes:l})=>l.length>2?nS:Aa.has(i)?i.startsWith("scale")?tS(l[1]):eS:iS,lS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function sS(i){for(const l in i)if(!lS.has(l))return!0;return!1}const ih=(i,l,o,s={},c,f)=>h=>{const m=nh(s,i)||{},g=m.delay||s.delay||0;let{elapsed:p=0}=s;p=p-Nt(g);const b={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:l.getVelocity(),...m,delay:-p,onUpdate:S=>{l.set(S),m.onUpdate&&m.onUpdate(S)},onComplete:()=>{h(),m.onComplete&&m.onComplete()},name:i,motionValue:l,element:f?void 0:c};sS(m)||Object.assign(b,aS(i,b)),b.duration&&(b.duration=Nt(b.duration)),b.repeatDelay&&(b.repeatDelay=Nt(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let x=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(Tc(b),b.delay===0&&(x=!0)),(ei.instantAnimations||ei.skipAnimations||c!=null&&c.shouldSkipAnimations||m.skipAnimations)&&(x=!0,Tc(b),b.delay=0),b.allowFlatten=!m.type&&!m.ease,x&&!f&&l.get()!==void 0){const S=To(b.keyframes,m);if(S!==void 0){ke.update(()=>{b.onUpdate(S),b.onComplete()});return}}return m.isSync?new yo(b):new W1(b)},oS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rS(i){const l=oS.exec(i);if(!l)return[,];const[,o,s,c]=l;return[`--${o??s}`,c]}function Lg(i,l,o=1){const[s,c]=rS(i);if(!s)return;const f=window.getComputedStyle(l).getPropertyValue(s);if(f){const h=f.trim();return eg(h)?parseFloat(h):h}return Jc(c)?Lg(c,l,o+1):c}function Hp(i){const l=[{},{}];return i==null||i.values.forEach((o,s)=>{l[0][s]=o.get(),l[1][s]=o.getVelocity()}),l}function ah(i,l,o,s){if(typeof l=="function"){const[c,f]=Hp(s);l=l(o!==void 0?o:i.custom,c,f)}if(typeof l=="string"&&(l=i.variants&&i.variants[l]),typeof l=="function"){const[c,f]=Hp(s);l=l(o!==void 0?o:i.custom,c,f)}return l}function Ci(i,l,o){const s=i.getProps();return ah(s,l,o!==void 0?o:s.custom,i)}const qg=new Set(["width","height","top","left","right","bottom",...ja]),Ec=i=>Array.isArray(i);function uS(i,l,o){i.hasValue(l)?i.getValue(l).set(o):i.addValue(l,ba(o))}function cS(i){return Ec(i)?i[i.length-1]||0:i}function hS(i,l){const o=Ci(i,l);let{transitionEnd:s={},transition:c={},...f}=o||{};f={...f,...s};for(const h in f){const m=cS(f[h]);uS(i,h,m)}}const ot=i=>!!(i&&i.getVelocity);function fS(i){return!!(ot(i)&&i.add)}function Dc(i,l){const o=i.getValue("willChange");if(fS(o))return o.add(l);if(!o&&ei.WillChange){const s=new ei.WillChange("auto");i.addValue("willChange",s),s.add(l)}}function lh(i){return i.replace(/([A-Z])/g,l=>`-${l.toLowerCase()}`)}const dS="framerAppearId",Hg="data-"+lh(dS);function Yg(i){return i.props[Hg]}function mS({protectedKeys:i,needsAnimating:l},o){const s=i.hasOwnProperty(o)&&l[o]!==!0;return l[o]=!1,s}function Gg(i,l,{delay:o=0,transitionOverride:s,type:c}={}){let{transition:f,transitionEnd:h,...m}=l;const g=i.getDefaultTransition();f=f?Ug(f,g):g;const p=f==null?void 0:f.reduceMotion,b=f==null?void 0:f.skipAnimations;s&&(f=s);const x=[],S=c&&i.animationState&&i.animationState.getState()[c],w=f==null?void 0:f.path;w&&w.animateVisualElement(i,m,f,o,x);for(const j in m){const N=i.getValue(j,i.latestValues[j]??null),k=m[j];if(k===void 0||S&&mS(S,j))continue;const C={delay:o,...nh(f||{},j)};b&&(C.skipAnimations=!0);const L=N.get();if(L!==void 0&&!N.isAnimating()&&!Array.isArray(k)&&k===L&&!C.velocity){ke.update(()=>N.set(k));continue}let O=!1;if(window.MotionHandoffAnimation){const ne=Yg(i);if(ne){const K=window.MotionHandoffAnimation(ne,j,ke);K!==null&&(C.startTime=K,O=!0)}}Dc(i,j);const _=p??i.shouldReduceMotion;N.start(ih(j,N,k,_&&qg.has(j)?{type:!1}:C,i,O));const Q=N.animation;Q&&x.push(Q)}if(h){const j=()=>ke.update(()=>{h&&hS(i,h)});x.length?Promise.all(x).then(j):j()}return x}function Cc(i,l,o={}){var g;const s=Ci(i,l,o.type==="exit"?(g=i.presenceContext)==null?void 0:g.custom:void 0);let{transition:c=i.getDefaultTransition()||{}}=s||{};o.transitionOverride&&(c=o.transitionOverride);const f=s?()=>Promise.all(Gg(i,s,o)):()=>Promise.resolve(),h=i.variantChildren&&i.variantChildren.size?(p=0)=>{const{delayChildren:b=0,staggerChildren:x,staggerDirection:S}=c;return pS(i,l,p,b,x,S,o)}:()=>Promise.resolve(),{when:m}=c;if(m){const[p,b]=m==="beforeChildren"?[f,h]:[h,f];return p().then(()=>b())}else return Promise.all([f(),h(o.delay)])}function pS(i,l,o=0,s=0,c=0,f=1,h){const m=[];for(const g of i.variantChildren)g.notify("AnimationStart",l),m.push(Cc(g,l,{...h,delay:o+(typeof s=="function"?0:s)+_g(i.variantChildren,g,s,c,f)}).then(()=>g.notify("AnimationComplete",l)));return Promise.all(m)}function vS(i,l,o={}){i.notify("AnimationStart",l);let s;if(Array.isArray(l)){const c=l.map(f=>Cc(i,f,o));s=Promise.all(c)}else if(typeof l=="string")s=Cc(i,l,o);else{const c=typeof l=="function"?Ci(i,l,o.custom):l;s=Promise.all(Gg(i,c,o))}return s.then(()=>{i.notify("AnimationComplete",l)})}const gS={test:i=>i==="auto",parse:i=>i},Xg=i=>l=>l.test(i),Qg=[Sa,I,an,wn,Gx,Yx,gS],Yp=i=>Qg.find(Xg(i));function yS(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||ng(i):!0}const bS=new Set(["brightness","contrast","saturate","opacity"]);function xS(i){const[l,o]=i.slice(0,-1).split("(");if(l==="drop-shadow")return i;const[s]=o.match($c)||[];if(!s)return i;const c=o.replace(s,"");let f=bS.has(l)?1:0;return s!==o&&(f*=100),l+"("+f+c+")"}const SS=/\b([a-z-]*)\(.*?\)/gu,Mc={...$t,getAnimatableNone:i=>{const l=i.match(SS);return l?l.map(xS).join(" "):i}},Nc={...$t,getAnimatableNone:i=>{const l=$t.parse(i);return $t.createTransformer(i)(l.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Gp={...Sa,transform:Math.round},jS={rotate:wn,pathRotation:wn,rotateX:wn,rotateY:wn,rotateZ:wn,scale:Is,scaleX:Is,scaleY:Is,scaleZ:Is,skew:wn,skewX:wn,skewY:wn,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:Cl,originX:Mp,originY:Mp,originZ:I},bo={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,top:I,right:I,bottom:I,left:I,inset:I,insetBlock:I,insetBlockStart:I,insetBlockEnd:I,insetInline:I,insetInlineStart:I,insetInlineEnd:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,paddingBlock:I,paddingBlockStart:I,paddingBlockEnd:I,paddingInline:I,paddingInlineStart:I,paddingInlineEnd:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,marginBlock:I,marginBlockStart:I,marginBlockEnd:I,marginInline:I,marginInlineStart:I,marginInlineEnd:I,fontSize:I,backgroundPositionX:I,backgroundPositionY:I,...jS,zIndex:Gp,fillOpacity:Cl,strokeOpacity:Cl,numOctaves:Gp},AS={...bo,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Mc,WebkitFilter:Mc,mask:Nc,WebkitMask:Nc},Zg=i=>AS[i],wS=new Set([Mc,Nc]);function Kg(i,l){let o=Zg(i);return wS.has(o)||(o=$t),o.getAnimatableNone?o.getAnimatableNone(l):void 0}const TS=new Set(["auto","none","0"]);function ES(i,l,o){let s=0,c;for(;s<i.length&&!c;){const f=i[s];typeof f=="string"&&!TS.has(f)&&ya(f).values.length&&(c=i[s]),s++}if(c&&o)for(const f of l)i[f]=Kg(o,c)}class DS extends th{constructor(l,o,s,c,f){super(l,o,s,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:l,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let b=0;b<l.length;b++){let x=l[b];if(typeof x=="string"&&(x=x.trim(),Jc(x))){const S=Lg(x,o.current);S!==void 0&&(l[b]=S),b===l.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!qg.has(s)||l.length!==2)return;const[c,f]=l,h=Yp(c),m=Yp(f),g=Cp(c),p=Cp(f);if(g!==p&&In[s]){this.needsMeasurement=!0;return}if(h!==m)if(_p(h)&&_p(m))for(let b=0;b<l.length;b++){const x=l[b];typeof x=="string"&&(l[b]=parseFloat(x))}else In[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:l,name:o}=this,s=[];for(let c=0;c<l.length;c++)(l[c]===null||yS(l[c]))&&s.push(c);s.length&&ES(l,s,o)}measureInitialState(){const{element:l,unresolvedKeyframes:o,name:s}=this;if(!l||!l.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=In[s](l.measureViewportBox(),window.getComputedStyle(l.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&l.getValue(s,c).jump(c,!1)}measureEndState(){var m;const{element:l,name:o,unresolvedKeyframes:s}=this;if(!l||!l.current)return;const c=l.getValue(o);c&&c.jump(this.measuredOrigin,!1);const f=s.length-1,h=s[f];s[f]=In[o](l.measureViewportBox(),window.getComputedStyle(l.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),(m=this.removedTransforms)!=null&&m.length&&this.removedTransforms.forEach(([g,p])=>{l.getValue(g).set(p)}),this.resolveNoneKeyframes()}}function Fg(i,l,o){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const c=(o==null?void 0:o[i])??s.querySelectorAll(i);return c?Array.from(c):[]}return Array.from(i).filter(s=>s!=null)}const zc=(i,l)=>l&&typeof i=="number"?l.transform(i):i;function so(i){return tg(i)&&"offsetHeight"in i&&!("ownerSVGElement"in i)}const{schedule:sh}=pg(queueMicrotask,!1),Jt={x:!1,y:!1};function Jg(){return Jt.x||Jt.y}function CS(i){return i==="x"||i==="y"?Jt[i]?null:(Jt[i]=!0,()=>{Jt[i]=!1}):Jt.x||Jt.y?null:(Jt.x=Jt.y=!0,()=>{Jt.x=Jt.y=!1})}function $g(i,l){const o=Fg(i),s=new AbortController,c={passive:!0,...l,signal:s.signal};return[o,c,()=>s.abort()]}function MS(i){return!(i.pointerType==="touch"||Jg())}function NS(i,l,o={}){const[s,c,f]=$g(i,o);return s.forEach(h=>{let m=!1,g=!1,p;const b=()=>{h.removeEventListener("pointerleave",j)},x=k=>{p&&(p(k),p=void 0),b()},S=k=>{m=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),g&&(g=!1,x(k))},w=()=>{m=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},j=k=>{if(k.pointerType!=="touch"){if(m){g=!0;return}x(k)}},N=k=>{if(!MS(k))return;g=!1;const C=l(h,k);typeof C=="function"&&(p=C,h.addEventListener("pointerleave",j,c))};h.addEventListener("pointerenter",N,c),h.addEventListener("pointerdown",w,c)}),f}const Wg=(i,l)=>l?i===l?!0:Wg(i,l.parentElement):!1,oh=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,zS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function VS(i){return zS.has(i.tagName)||i.isContentEditable===!0}const RS=new Set(["INPUT","SELECT","TEXTAREA"]);function kS(i){return RS.has(i.tagName)||i.isContentEditable===!0}const oo=new WeakSet;function Xp(i){return l=>{l.key==="Enter"&&i(l)}}function ic(i,l){i.dispatchEvent(new PointerEvent("pointer"+l,{isPrimary:!0,bubbles:!0}))}const BS=(i,l)=>{const o=i.currentTarget;if(!o)return;const s=Xp(()=>{if(oo.has(o))return;ic(o,"down");const c=Xp(()=>{ic(o,"up")}),f=()=>ic(o,"cancel");o.addEventListener("keyup",c,l),o.addEventListener("blur",f,l)});o.addEventListener("keydown",s,l),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),l)};function Qp(i){return oh(i)&&!Jg()}const Zp=new WeakSet;function OS(i,l,o={}){const[s,c,f]=$g(i,o),h=m=>{const g=m.currentTarget;if(!Qp(m)||Zp.has(m))return;oo.add(g),o.stopPropagation&&Zp.add(m);const p=l(g,m),b=(w,j)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),oo.has(g)&&oo.delete(g),Qp(w)&&typeof p=="function"&&p(w,{success:j})},x=w=>{b(w,g===window||g===document||o.useGlobalTarget||Wg(g,w.target))},S=w=>{b(w,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",S,c)};return s.forEach(m=>{(o.useGlobalTarget?window:m).addEventListener("pointerdown",h,c),so(m)&&(m.addEventListener("focus",p=>BS(p,c)),!VS(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),f}function rh(i){return tg(i)&&"ownerSVGElement"in i}const ro=new WeakMap;let Pn;const Pg=(i,l,o)=>(s,c)=>c&&c[0]?c[0][i+"Size"]:rh(s)&&"getBBox"in s?s.getBBox()[l]:s[o],_S=Pg("inline","width","offsetWidth"),US=Pg("block","height","offsetHeight");function LS({target:i,borderBoxSize:l}){var o;(o=ro.get(i))==null||o.forEach(s=>{s(i,{get width(){return _S(i,l)},get height(){return US(i,l)}})})}function qS(i){i.forEach(LS)}function HS(){typeof ResizeObserver>"u"||(Pn=new ResizeObserver(qS))}function YS(i,l){Pn||HS();const o=Fg(i);return o.forEach(s=>{let c=ro.get(s);c||(c=new Set,ro.set(s,c)),c.add(l),Pn==null||Pn.observe(s)}),()=>{o.forEach(s=>{const c=ro.get(s);c==null||c.delete(l),c!=null&&c.size||Pn==null||Pn.unobserve(s)})}}const uo=new Set;let va;function GS(){va=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};uo.forEach(l=>l(i))},window.addEventListener("resize",va)}function XS(i){return uo.add(i),va||GS(),()=>{uo.delete(i),!uo.size&&typeof va=="function"&&(window.removeEventListener("resize",va),va=void 0)}}function Kp(i,l){return typeof i=="function"?XS(i):YS(i,l)}function QS(i){return rh(i)&&i.tagName==="svg"}const ZS=[...Qg,Fe,$t],KS=i=>ZS.find(Xg(i)),Fp=()=>({translate:0,scale:1,origin:0,originPoint:0}),ga=()=>({x:Fp(),y:Fp()}),Jp=()=>({min:0,max:0}),We=()=>({x:Jp(),y:Jp()}),FS=new WeakMap;function Eo(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Ml(i){return typeof i=="string"||Array.isArray(i)}const uh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ch=["initial",...uh];function Do(i){return Eo(i.animate)||ch.some(l=>Ml(i[l]))}function Ig(i){return!!(Do(i)||i.variants)}function JS(i,l,o){for(const s in l){const c=l[s],f=o[s];if(ot(c))i.addValue(s,c);else if(ot(f))i.addValue(s,ba(c,{owner:i}));else if(f!==c)if(i.hasValue(s)){const h=i.getValue(s);h.liveStyle===!0?h.jump(c):h.hasAnimated||h.set(c)}else{const h=i.getStaticValue(s);i.addValue(s,ba(h!==void 0?h:c,{owner:i}))}}for(const s in o)l[s]===void 0&&i.removeValue(s);return l}const Vc={current:null},ey={current:!1},$S=typeof window<"u";function WS(){if(ey.current=!0,!!$S)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),l=()=>Vc.current=i.matches;i.addEventListener("change",l),l()}else Vc.current=!1}const $p=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let xo={};function ty(i){xo=i}function PS(){return xo}class IS{scrapeMotionValuesFromProps(l,o,s){return{}}constructor({parent:l,props:o,presenceContext:s,reducedMotionConfig:c,skipAnimations:f,blockInitialAnimation:h,visualState:m},g={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=th,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=ct.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,ke.render(this.render,!1,!0))};const{latestValues:p,renderState:b}=m;this.latestValues=p,this.baseTarget={...p},this.initialValues=o.initial?{...p}:{},this.renderState=b,this.parent=l,this.props=o,this.presenceContext=s,this.depth=l?l.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=f,this.options=g,this.blockInitialAnimation=!!h,this.isControllingVariants=Do(o),this.isVariantNode=Ig(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(l&&l.current);const{willChange:x,...S}=this.scrapeMotionValuesFromProps(o,{},this);for(const w in S){const j=S[w];p[w]!==void 0&&ot(j)&&j.set(p[w])}}mount(l){var o,s;if(this.hasBeenMounted)for(const c in this.initialValues)(o=this.values.get(c))==null||o.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=l,FS.set(l,this),this.projection&&!this.projection.instance&&this.projection.mount(l),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,f)=>this.bindToMotionValue(f,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(ey.current||WS(),this.shouldReduceMotion=Vc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var l;this.projection&&this.projection.unmount(),ti(this.notifyUpdate),ti(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(l=this.parent)==null||l.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const s=this.features[o];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(l){this.children.add(l),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(l)}removeChild(l){this.children.delete(l),this.enteringChildren&&this.enteringChildren.delete(l)}bindToMotionValue(l,o){if(this.valueSubscriptions.has(l)&&this.valueSubscriptions.get(l)(),o.accelerate&&Og.has(l)&&this.current instanceof HTMLElement){const{factory:h,keyframes:m,times:g,ease:p,duration:b}=o.accelerate,x=new kg({element:this.current,name:l,keyframes:m,times:g,ease:p,duration:Nt(b)}),S=h(x);this.valueSubscriptions.set(l,()=>{S(),x.cancel()});return}const s=Aa.has(l);s&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",h=>{this.latestValues[l]=h,this.props.onUpdate&&ke.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,l,o)),this.valueSubscriptions.set(l,()=>{c(),f&&f()})}sortNodePosition(l){return!this.current||!this.sortInstanceNodePosition||this.type!==l.type?0:this.sortInstanceNodePosition(this.current,l.current)}updateFeatures(){let l="animation";for(l in xo){const o=xo[l];if(!o)continue;const{isEnabled:s,Feature:c}=o;if(!this.features[l]&&c&&s(this.props)&&(this.features[l]=new c(this)),this.features[l]){const f=this.features[l];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):We()}getStaticValue(l){return this.latestValues[l]}setStaticValue(l,o){this.latestValues[l]=o}update(l,o){(l.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=l,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<$p.length;s++){const c=$p[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,h=l[f];h&&(this.propEventSubscriptions[c]=this.on(c,h))}this.prevMotionValues=JS(this,this.scrapeMotionValuesFromProps(l,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(l){return this.props.variants?this.props.variants[l]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(l){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(l),()=>o.variantChildren.delete(l)}addValue(l,o){const s=this.values.get(l);o!==s&&(s&&this.removeValue(l),this.bindToMotionValue(l,o),this.values.set(l,o),this.latestValues[l]=o.get())}removeValue(l){this.values.delete(l);const o=this.valueSubscriptions.get(l);o&&(o(),this.valueSubscriptions.delete(l)),delete this.latestValues[l],this.removeValueFromRenderState(l,this.renderState)}hasValue(l){return this.values.has(l)}getValue(l,o){if(this.props.values&&this.props.values[l])return this.props.values[l];let s=this.values.get(l);return s===void 0&&o!==void 0&&(s=ba(o===null?void 0:o,{owner:this}),this.addValue(l,s)),s}readValue(l,o){let s=this.latestValues[l]!==void 0||!this.current?this.latestValues[l]:this.getBaseTargetFromProps(this.props,l)??this.readValueFromInstance(this.current,l,this.options);return s!=null&&(typeof s=="string"&&(eg(s)||ng(s))?s=parseFloat(s):!KS(s)&&$t.test(o)&&(s=Kg(l,o)),this.setBaseTarget(l,ot(s)?s.get():s)),ot(s)?s.get():s}setBaseTarget(l,o){this.baseTarget[l]=o}getBaseTarget(l){var f;const{initial:o}=this.props;let s;if(typeof o=="string"||typeof o=="object"){const h=ah(this.props,o,(f=this.presenceContext)==null?void 0:f.custom);h&&(s=h[l])}if(o&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,l);return c!==void 0&&!ot(c)?c:this.initialValues[l]!==void 0&&s===void 0?void 0:this.baseTarget[l]}on(l,o){return this.events[l]||(this.events[l]=new Zc),this.events[l].add(o)}notify(l,...o){this.events[l]&&this.events[l].notify(...o)}scheduleRenderMicrotask(){sh.render(this.render)}}class ny extends IS{constructor(){super(...arguments),this.KeyframeResolver=DS}sortInstanceNodePosition(l,o){return l.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(l,o){const s=l.style;return s?s[o]:void 0}removeValueFromRenderState(l,{vars:o,style:s}){delete o[l],delete s[l]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:l}=this.props;ot(l)&&(this.childSubscription=l.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class ni{constructor(l){this.isMounted=!1,this.node=l}update(){}}function iy({top:i,left:l,right:o,bottom:s}){return{x:{min:l,max:o},y:{min:i,max:s}}}function ej({x:i,y:l}){return{top:l.min,right:i.max,bottom:l.max,left:i.min}}function tj(i,l){if(!l)return i;const o=l({x:i.left,y:i.top}),s=l({x:i.right,y:i.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}function ac(i){return i===void 0||i===1}function Rc({scale:i,scaleX:l,scaleY:o}){return!ac(i)||!ac(l)||!ac(o)}function wi(i){return Rc(i)||ay(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function ay(i){return Wp(i.x)||Wp(i.y)}function Wp(i){return i&&i!=="0%"}function So(i,l,o){const s=i-o,c=l*s;return o+c}function Pp(i,l,o,s,c){return c!==void 0&&(i=So(i,c,s)),So(i,o,s)+l}function kc(i,l=0,o=1,s,c){i.min=Pp(i.min,l,o,s,c),i.max=Pp(i.max,l,o,s,c)}function ly(i,{x:l,y:o}){kc(i.x,l.translate,l.scale,l.originPoint),kc(i.y,o.translate,o.scale,o.originPoint)}const Ip=.999999999999,ev=1.0000000000001;function nj(i,l,o,s=!1){var m;const c=o.length;if(!c)return;l.x=l.y=1;let f,h;for(let g=0;g<c;g++){f=o[g],h=f.projectionDelta;const{visualElement:p}=f.options;p&&p.props.style&&p.props.style.display==="contents"||(s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(nn(i.x,-f.scroll.offset.x),nn(i.y,-f.scroll.offset.y)),h&&(l.x*=h.x.scale,l.y*=h.y.scale,ly(i,h)),s&&wi(f.latestValues)&&co(i,f.latestValues,(m=f.layout)==null?void 0:m.layoutBox))}l.x<ev&&l.x>Ip&&(l.x=1),l.y<ev&&l.y>Ip&&(l.y=1)}function nn(i,l){i.min+=l,i.max+=l}function tv(i,l,o,s,c=.5){const f=Re(i.min,i.max,c);kc(i,l,o,f,s)}function nv(i,l){return typeof i=="string"?parseFloat(i)/100*(l.max-l.min):i}function co(i,l,o){const s=o??i;tv(i.x,nv(l.x,s.x),l.scaleX,l.scale,l.originX),tv(i.y,nv(l.y,s.y),l.scaleY,l.scale,l.originY)}function sy(i,l){return iy(tj(i.getBoundingClientRect(),l))}function ij(i,l,o){const s=sy(i,o),{scroll:c}=l;return c&&(nn(s.x,c.offset.x),nn(s.y,c.offset.y)),s}const aj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lj=ja.length;function sj(i,l,o){let s="",c=!0;for(let h=0;h<lj;h++){const m=ja[h],g=i[m];if(g===void 0)continue;let p=!0;if(typeof g=="number")p=g===(m.startsWith("scale")?1:0);else{const b=parseFloat(g);p=m.startsWith("scale")?b===1:b===0}if(!p||o){const b=zc(g,bo[m]);if(!p){c=!1;const x=aj[m]||m;s+=`${x}(${b}) `}o&&(l[m]=b)}}const f=i.pathRotation;return f&&(c=!1,s+=`rotate(${zc(f,bo.pathRotation)}) `),s=s.trim(),o?s=o(l,c?"":s):c&&(s="none"),s}function hh(i,l,o){const{style:s,vars:c,transformOrigin:f}=i;let h=!1,m=!1;for(const g in l){const p=l[g];if(Aa.has(g)){h=!0;continue}else if(gg(g)){c[g]=p;continue}else{const b=zc(p,bo[g]);g.startsWith("origin")?(m=!0,f[g]=b):s[g]=b}}if(l.transform||(h||o?s.transform=sj(l,i.transform,o):s.transform&&(s.transform="none")),m){const{originX:g="50%",originY:p="50%",originZ:b=0}=f;s.transformOrigin=`${g} ${p} ${b}`}}function oy(i,{style:l,vars:o},s,c){const f=i.style;let h;for(h in l)f[h]=l[h];c==null||c.applyProjectionStyles(f,s);for(h in o)f.setProperty(h,o[h])}function iv(i,l){return l.max===l.min?0:i/(l.max-l.min)*100}const xl={correct:(i,l)=>{if(!l.target)return i;if(typeof i=="string")if(I.test(i))i=parseFloat(i);else return i;const o=iv(i,l.target.x),s=iv(i,l.target.y);return`${o}% ${s}%`}},oj={correct:(i,{treeScale:l,projectionDelta:o})=>{const s=i,c=$t.parse(i);if(c.length>5)return s;const f=$t.createTransformer(i),h=typeof c[0]!="number"?1:0,m=o.x.scale*l.x,g=o.y.scale*l.y;c[0+h]/=m,c[1+h]/=g;const p=Re(m,g,.5);return typeof c[2+h]=="number"&&(c[2+h]/=p),typeof c[3+h]=="number"&&(c[3+h]/=p),f(c)}},Bc={borderRadius:{...xl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xl,borderTopRightRadius:xl,borderBottomLeftRadius:xl,borderBottomRightRadius:xl,boxShadow:oj};function ry(i,{layout:l,layoutId:o}){return Aa.has(i)||i.startsWith("origin")||(l||o!==void 0)&&(!!Bc[i]||i==="opacity")}function fh(i,l,o){var h;const s=i.style,c=l==null?void 0:l.style,f={};if(!s)return f;for(const m in s)(ot(s[m])||c&&ot(c[m])||ry(m,i)||((h=o==null?void 0:o.getValue(m))==null?void 0:h.liveStyle)!==void 0)&&(f[m]=s[m]);return f}function rj(i){return window.getComputedStyle(i)}class uj extends ny{constructor(){super(...arguments),this.type="html",this.renderInstance=oy}readValueFromInstance(l,o){var s;if(Aa.has(o))return(s=this.projection)!=null&&s.isProjecting?xc(o):M1(l,o);{const c=rj(l),f=(gg(o)?c.getPropertyValue(o):c[o])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(l,{transformPagePoint:o}){return sy(l,o)}build(l,o,s){hh(l,o,s.transformTemplate)}scrapeMotionValuesFromProps(l,o,s){return fh(l,o,s)}}const cj={offset:"stroke-dashoffset",array:"stroke-dasharray"},hj={offset:"strokeDashoffset",array:"strokeDasharray"};function fj(i,l,o=1,s=0,c=!0){i.pathLength=1;const f=c?cj:hj;i[f.offset]=`${-s}`,i[f.array]=`${l} ${o}`}const dj=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function uy(i,{attrX:l,attrY:o,attrScale:s,pathLength:c,pathSpacing:f=1,pathOffset:h=0,...m},g,p,b){if(hh(i,m,p),g){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:x,style:S}=i;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=(b==null?void 0:b.transformBox)??"fill-box",delete x.transformBox);for(const w of dj)x[w]!==void 0&&(S[w]=x[w],delete x[w]);l!==void 0&&(x.x=l),o!==void 0&&(x.y=o),s!==void 0&&(x.scale=s),c!==void 0&&fj(x,c,f,h,!1)}const cy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),hy=i=>typeof i=="string"&&i.toLowerCase()==="svg";function mj(i,l,o,s){oy(i,l,void 0,s);for(const c in l.attrs)i.setAttribute(cy.has(c)?c:lh(c),l.attrs[c])}function fy(i,l,o){const s=fh(i,l,o);for(const c in i)if(ot(i[c])||ot(l[c])){const f=ja.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[f]=i[c]}return s}class pj extends ny{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=We}getBaseTargetFromProps(l,o){return l[o]}readValueFromInstance(l,o){if(Aa.has(o)){const s=Zg(o);return s&&s.default||0}return o=cy.has(o)?o:lh(o),l.getAttribute(o)}scrapeMotionValuesFromProps(l,o,s){return fy(l,o,s)}build(l,o,s){uy(l,o,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(l,o,s,c){mj(l,o,s,c)}mount(l){this.isSVGTag=hy(l.tagName),super.mount(l)}}const vj=ch.length;function dy(i){if(!i)return;if(!i.isControllingVariants){const o=i.parent?dy(i.parent)||{}:{};return i.props.initial!==void 0&&(o.initial=i.props.initial),o}const l={};for(let o=0;o<vj;o++){const s=ch[o],c=i.props[s];(Ml(c)||c===!1)&&(l[s]=c)}return l}function my(i,l){if(!Array.isArray(l))return!1;const o=l.length;if(o!==i.length)return!1;for(let s=0;s<o;s++)if(l[s]!==i[s])return!1;return!0}const gj=[...uh].reverse(),yj=uh.length;function bj(i){return l=>Promise.all(l.map(({animation:o,options:s})=>vS(i,o,s)))}function xj(i){let l=bj(i),o=av(),s=!0,c=!1;const f=p=>(b,x)=>{var w;const S=Ci(i,x,p==="exit"?(w=i.presenceContext)==null?void 0:w.custom:void 0);if(S){const{transition:j,transitionEnd:N,...k}=S;b={...b,...k,...N}}return b};function h(p){l=p(i)}function m(p){const{props:b}=i,x=dy(i.parent)||{},S=[],w=new Set;let j={},N=1/0;for(let C=0;C<yj;C++){const L=gj[C],O=o[L],_=b[L]!==void 0?b[L]:x[L],Q=Ml(_),ne=L===p?O.isActive:null;ne===!1&&(N=C);let K=_===x[L]&&_!==b[L]&&Q;if(K&&(s||c)&&i.manuallyAnimateOnMount&&(K=!1),O.protectedKeys={...j},!O.isActive&&ne===null||!_&&!O.prevProp||Eo(_)||typeof _=="boolean")continue;if(L==="exit"&&O.isActive&&ne!==!0){O.prevResolvedValues&&(j={...j,...O.prevResolvedValues});continue}const F=Sj(O.prevProp,_);let ie=F||L===p&&O.isActive&&!K&&Q||C>N&&Q,ee=!1;const se=Array.isArray(_)?_:[_];let W=se.reduce(f(L),{});ne===!1&&(W={});const{prevResolvedValues:pe={}}=O,ge={...pe,...W},ve=J=>{ie=!0,w.has(J)&&(ee=!0,w.delete(J)),O.needsAnimating[J]=!0;const ue=i.getValue(J);ue&&(ue.liveStyle=!1)};for(const J in ge){const ue=W[J],me=pe[J];if(j.hasOwnProperty(J))continue;let T=!1;Ec(ue)&&Ec(me)?T=!my(ue,me)||F:T=ue!==me,T?ue!=null?ve(J):w.add(J):ue!==void 0&&w.has(J)?ve(J):O.protectedKeys[J]=!0}O.prevProp=_,O.prevResolvedValues=W,O.isActive&&(j={...j,...W}),(s||c)&&i.blockInitialAnimation&&(ie=!1);const V=K&&F;ie&&(!V||ee)&&S.push(...se.map(J=>{const ue={type:L};if(typeof J=="string"&&(s||c)&&!V&&i.manuallyAnimateOnMount&&i.parent){const{parent:me}=i,T=Ci(me,J);if(me.enteringChildren&&T){const{delayChildren:H}=T.transition||{};ue.delay=_g(me.enteringChildren,i,H)}}return{animation:J,options:ue}}))}if(w.size){const C={};if(typeof b.initial!="boolean"){const L=Ci(i,Array.isArray(b.initial)?b.initial[0]:b.initial);L&&L.transition&&(C.transition=L.transition)}w.forEach(L=>{const O=i.getBaseTarget(L),_=i.getValue(L);_&&(_.liveStyle=!0),C[L]=O??null}),S.push({animation:C})}let k=!!S.length;return s&&(b.initial===!1||b.initial===b.animate)&&!i.manuallyAnimateOnMount&&(k=!1),s=!1,c=!1,k?l(S):Promise.resolve()}function g(p,b){var S;if(o[p].isActive===b)return Promise.resolve();(S=i.variantChildren)==null||S.forEach(w=>{var j;return(j=w.animationState)==null?void 0:j.setActive(p,b)}),o[p].isActive=b;const x=m(p);for(const w in o)o[w].protectedKeys={};return x}return{animateChanges:m,setActive:g,setAnimateFunction:h,getState:()=>o,reset:()=>{o=av(),c=!0}}}function Sj(i,l){return typeof l=="string"?l!==i:Array.isArray(l)?!my(l,i):!1}function Ai(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function av(){return{animate:Ai(!0),whileInView:Ai(),whileHover:Ai(),whileTap:Ai(),whileDrag:Ai(),whileFocus:Ai(),exit:Ai()}}function Oc(i,l){i.min=l.min,i.max=l.max}function Ft(i,l){Oc(i.x,l.x),Oc(i.y,l.y)}function lv(i,l){i.translate=l.translate,i.scale=l.scale,i.originPoint=l.originPoint,i.origin=l.origin}const py=1e-4,jj=1-py,Aj=1+py,vy=.01,wj=0-vy,Tj=0+vy;function ht(i){return i.max-i.min}function Ej(i,l,o){return Math.abs(i-l)<=o}function sv(i,l,o,s=.5){i.origin=s,i.originPoint=Re(l.min,l.max,i.origin),i.scale=ht(o)/ht(l),i.translate=Re(o.min,o.max,i.origin)-i.originPoint,(i.scale>=jj&&i.scale<=Aj||isNaN(i.scale))&&(i.scale=1),(i.translate>=wj&&i.translate<=Tj||isNaN(i.translate))&&(i.translate=0)}function Tl(i,l,o,s){sv(i.x,l.x,o.x,s?s.originX:void 0),sv(i.y,l.y,o.y,s?s.originY:void 0)}function ov(i,l,o,s=0){const c=s?Re(o.min,o.max,s):o.min;i.min=c+l.min,i.max=i.min+ht(l)}function Dj(i,l,o,s){ov(i.x,l.x,o.x,s==null?void 0:s.x),ov(i.y,l.y,o.y,s==null?void 0:s.y)}function rv(i,l,o,s=0){const c=s?Re(o.min,o.max,s):o.min;i.min=l.min-c,i.max=i.min+ht(l)}function jo(i,l,o,s){rv(i.x,l.x,o.x,s==null?void 0:s.x),rv(i.y,l.y,o.y,s==null?void 0:s.y)}function uv(i,l,o,s,c){return i-=l,i=So(i,1/o,s),c!==void 0&&(i=So(i,1/c,s)),i}function Cj(i,l=0,o=1,s=.5,c,f=i,h=i){if(an.test(l)&&(l=parseFloat(l),l=Re(h.min,h.max,l/100)-h.min),typeof l!="number")return;let m=Re(f.min,f.max,s);i===f&&(m-=l),i.min=uv(i.min,l,o,m,c),i.max=uv(i.max,l,o,m,c)}function cv(i,l,[o,s,c],f,h){Cj(i,l[o],l[s],l[c],l.scale,f,h)}const Mj=["x","scaleX","originX"],Nj=["y","scaleY","originY"];function hv(i,l,o,s){cv(i.x,l,Mj,o?o.x:void 0,s?s.x:void 0),cv(i.y,l,Nj,o?o.y:void 0,s?s.y:void 0)}function fv(i){return i.translate===0&&i.scale===1}function gy(i){return fv(i.x)&&fv(i.y)}function dv(i,l){return i.min===l.min&&i.max===l.max}function zj(i,l){return dv(i.x,l.x)&&dv(i.y,l.y)}function mv(i,l){return Math.round(i.min)===Math.round(l.min)&&Math.round(i.max)===Math.round(l.max)}function yy(i,l){return mv(i.x,l.x)&&mv(i.y,l.y)}function pv(i){return ht(i.x)/ht(i.y)}function vv(i,l){return i.translate===l.translate&&i.scale===l.scale&&i.originPoint===l.originPoint}function tn(i){return[i("x"),i("y")]}function Vj(i,l,o){let s="";const c=i.x.translate/l.x,f=i.y.translate/l.y,h=(o==null?void 0:o.z)||0;if((c||f||h)&&(s=`translate3d(${c}px, ${f}px, ${h}px) `),(l.x!==1||l.y!==1)&&(s+=`scale(${1/l.x}, ${1/l.y}) `),o){const{transformPerspective:p,rotate:b,pathRotation:x,rotateX:S,rotateY:w,skewX:j,skewY:N}=o;p&&(s=`perspective(${p}px) ${s}`),b&&(s+=`rotate(${b}deg) `),x&&(s+=`rotate(${x}deg) `),S&&(s+=`rotateX(${S}deg) `),w&&(s+=`rotateY(${w}deg) `),j&&(s+=`skewX(${j}deg) `),N&&(s+=`skewY(${N}deg) `)}const m=i.x.scale*l.x,g=i.y.scale*l.y;return(m!==1||g!==1)&&(s+=`scale(${m}, ${g})`),s||"none"}const by=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Rj=by.length,gv=i=>typeof i=="string"?parseFloat(i):i,yv=i=>typeof i=="number"||I.test(i);function kj(i,l,o,s,c,f){c?(i.opacity=Re(0,o.opacity??1,Bj(s)),i.opacityExit=Re(l.opacity??1,0,Oj(s))):f&&(i.opacity=Re(l.opacity??1,o.opacity??1,s));for(let h=0;h<Rj;h++){const m=by[h];let g=bv(l,m),p=bv(o,m);if(g===void 0&&p===void 0)continue;g||(g=0),p||(p=0),g===0||p===0||yv(g)===yv(p)?(i[m]=Math.max(Re(gv(g),gv(p),s),0),(an.test(p)||an.test(g))&&(i[m]+="%")):i[m]=p}(l.rotate||o.rotate)&&(i.rotate=Re(l.rotate||0,o.rotate||0,s))}function bv(i,l){return i[l]!==void 0?i[l]:i.borderRadius}const Bj=xy(0,.5,hg),Oj=xy(.5,.95,Xt);function xy(i,l,o){return s=>s<i?0:s>l?1:o(Dl(i,l,s))}function _j(i,l,o){const s=ot(i)?i:ba(i);return s.start(ih("",s,l,o)),s.animation}function Nl(i,l,o,s={passive:!0}){return i.addEventListener(l,o,s),()=>i.removeEventListener(l,o)}const Uj=(i,l)=>i.depth-l.depth;class Lj{constructor(){this.children=[],this.isDirty=!1}add(l){Xc(this.children,l),this.isDirty=!0}remove(l){mo(this.children,l),this.isDirty=!0}forEach(l){this.isDirty&&this.children.sort(Uj),this.isDirty=!1,this.children.forEach(l)}}function qj(i,l){const o=ct.now(),s=({timestamp:c})=>{const f=c-o;f>=l&&(ti(s),i(f-l))};return ke.setup(s,!0),()=>ti(s)}function ho(i){return ot(i)?i.get():i}class Hj{constructor(){this.members=[]}add(l){Xc(this.members,l);for(let o=this.members.length-1;o>=0;o--){const s=this.members[o];if(s===l||s===this.lead||s===this.prevLead)continue;const c=s.instance;(!c||c.isConnected===!1)&&!s.snapshot&&(mo(this.members,s),s.unmount())}l.scheduleRender()}remove(l){if(mo(this.members,l),l===this.prevLead&&(this.prevLead=void 0),l===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(l){var o;for(let s=this.members.indexOf(l)-1;s>=0;s--){const c=this.members[s];if(c.isPresent!==!1&&((o=c.instance)==null?void 0:o.isConnected)!==!1)return this.promote(c),!0}return!1}promote(l,o){var c;const s=this.lead;if(l!==s&&(this.prevLead=s,this.lead=l,l.show(),s)){s.updateSnapshot(),l.scheduleRender();const{layoutDependency:f}=s.options,{layoutDependency:h}=l.options;(f===void 0||f!==h)&&(l.resumeFrom=s,o&&(s.preserveOpacity=!0),s.snapshot&&(l.snapshot=s.snapshot,l.snapshot.latestValues=s.animationValues||s.latestValues),(c=l.root)!=null&&c.isUpdating&&(l.isLayoutDirty=!0)),l.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(l=>{var o,s,c,f,h;(s=(o=l.options).onExitComplete)==null||s.call(o),(h=(c=l.resumingFrom)==null?void 0:(f=c.options).onExitComplete)==null||h.call(f)})}scheduleRender(){this.members.forEach(l=>l.instance&&l.scheduleRender(!1))}removeLeadSnapshot(){var l;(l=this.lead)!=null&&l.snapshot&&(this.lead.snapshot=void 0)}}const fo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},lc=["","X","Y","Z"],Yj=1e3;let Gj=0;function sc(i,l,o,s){const{latestValues:c}=l;c[i]&&(o[i]=c[i],l.setStaticValue(i,0),s&&(s[i]=0))}function Sy(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:l}=i.options;if(!l)return;const o=Yg(l);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:f}=i.options;window.MotionCancelOptimisedAnimation(o,"transform",ke,!(c||f))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&Sy(s)}function jy({attachResizeListener:i,defaultParent:l,measureScroll:o,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(h={},m=l==null?void 0:l()){this.id=Gj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Zj),this.nodes.forEach(Pj),this.nodes.forEach(Ij),this.nodes.forEach(Kj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let g=0;g<this.path.length;g++)this.path[g].shouldResetTransform=!0;this.root===this&&(this.nodes=new Lj)}addEventListener(h,m){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new Zc),this.eventHandlers.get(h).add(m)}notifyListeners(h,...m){const g=this.eventHandlers.get(h);g&&g.notify(...m)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=rh(h)&&!QS(h),this.instance=h;const{layoutId:m,layout:g,visualElement:p}=this.options;if(p&&!p.current&&p.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(g||m)&&(this.isLayoutDirty=!0),i){let b,x=0;const S=()=>this.root.updateBlockedByResize=!1;ke.read(()=>{x=window.innerWidth}),i(h,()=>{const w=window.innerWidth;w!==x&&(x=w,this.root.updateBlockedByResize=!0,b&&b(),b=qj(S,250),fo.hasAnimatedSinceResize&&(fo.hasAnimatedSinceResize=!1,this.nodes.forEach(jv)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&p&&(m||g)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||p.getDefaultTransition()||aA,{onLayoutAnimationStart:N,onLayoutAnimationComplete:k}=p.getProps(),C=!this.targetLayout||!yy(this.targetLayout,w),L=!x&&S;if(this.options.layoutRoot||this.resumeFrom||L||x&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...nh(j,"layout"),onPlay:N,onComplete:k};(p.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(b,L,O.path)}else x||jv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ti(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(eA),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Sy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const x=this.path[b];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:m,layout:g}=this.options;if(m===void 0&&!g)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const g=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),g&&this.nodes.forEach(Jj),this.nodes.forEach(xv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Sv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach($j),this.nodes.forEach(Wj),this.nodes.forEach(Xj),this.nodes.forEach(Qj)):this.nodes.forEach(Sv),this.clearAllSnapshots();const m=ct.now();st.delta=ln(0,1e3/60,m-st.timestamp),st.timestamp=m,st.isProcessing=!0,Wu.update.process(st),Wu.preRender.process(st),Wu.render.process(st),st.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,sh.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Fj),this.sharedNodes.forEach(tA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ht(this.snapshot.measuredBox.x)&&!ht(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let g=0;g<this.path.length;g++)this.path[g].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=We()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(m=!1),m&&this.instance){const g=s(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:g,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:g}}}resetTransform(){if(!c)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!gy(this.projectionDelta),g=this.getTransformTemplate(),p=g?g(this.latestValues,""):void 0,b=p!==this.prevTransformTemplateValue;h&&this.instance&&(m||wi(this.latestValues)||b)&&(c(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const m=this.measurePageBox();let g=this.removeElementScroll(m);return h&&(g=this.removeTransform(g)),lA(g),{animationId:this.root.animationId,measuredBox:m,layoutBox:g,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:h}=this.options;if(!h)return We();const m=h.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(sA))){const{scroll:b}=this.root;b&&(nn(m.x,b.offset.x),nn(m.y,b.offset.y))}return m}removeElementScroll(h){var g;const m=We();if(Ft(m,h),(g=this.scroll)!=null&&g.wasRoot)return m;for(let p=0;p<this.path.length;p++){const b=this.path[p],{scroll:x,options:S}=b;b!==this.root&&x&&S.layoutScroll&&(x.wasRoot&&Ft(m,h),nn(m.x,x.offset.x),nn(m.y,x.offset.y))}return m}applyTransform(h,m=!1,g){var b,x;const p=g||We();Ft(p,h);for(let S=0;S<this.path.length;S++){const w=this.path[S];!m&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(nn(p.x,-w.scroll.offset.x),nn(p.y,-w.scroll.offset.y)),wi(w.latestValues)&&co(p,w.latestValues,(b=w.layout)==null?void 0:b.layoutBox)}return wi(this.latestValues)&&co(p,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),p}removeTransform(h){var g;const m=We();Ft(m,h);for(let p=0;p<this.path.length;p++){const b=this.path[p];if(!wi(b.latestValues))continue;let x;b.instance&&(Rc(b.latestValues)&&b.updateSnapshot(),x=We(),Ft(x,b.measurePageBox())),hv(m,b.latestValues,(g=b.snapshot)==null?void 0:g.layoutBox,x)}return wi(this.latestValues)&&hv(m,this.latestValues),m}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==st.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){var w;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const g=!!this.resumingFrom||this!==m;if(!(h||g&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!this.layout||!(b||x))return;this.resolvedRelativeTargetAt=st.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=We(),this.targetWithTransforms=We()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Dj(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ft(this.target,this.layout.layoutBox),ly(this.target,this.targetDelta)):Ft(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Rc(this.parent.latestValues)||ay(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,m,g){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=We(),this.relativeTargetOrigin=We(),jo(this.relativeTargetOrigin,m,g,this.options.layoutAnchor||void 0),Ft(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var j;const h=this.getLead(),m=!!this.resumingFrom||this!==h;let g=!0;if((this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty)&&(g=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(g=!1),this.resolvedRelativeTargetAt===st.timestamp&&(g=!1),g)return;const{layout:p,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||b))return;Ft(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;nj(this.layoutCorrected,this.treeScale,this.path,m),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=We());const{target:w}=h;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(lv(this.prevProjectionDelta.x,this.projectionDelta.x),lv(this.prevProjectionDelta.y,this.projectionDelta.y)),Tl(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!vv(this.projectionDelta.x,this.prevProjectionDelta.x)||!vv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){var m;if((m=this.options.visualElement)==null||m.scheduleRender(),h){const g=this.getStack();g&&g.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ga(),this.projectionDelta=ga(),this.projectionDeltaWithTransform=ga()}setAnimationOrigin(h,m=!1,g){const p=this.snapshot,b=p?p.latestValues:{},x={...this.latestValues},S=ga();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const w=We(),j=p?p.source:void 0,N=this.layout?this.layout.source:void 0,k=j!==N,C=this.getStack(),L=!C||C.members.length<=1,O=!!(k&&!L&&this.options.crossfade===!0&&!this.path.some(iA));this.animationProgress=0;let _;const Q=g==null?void 0:g.interpolateProjection(h);this.mixTargetDelta=ne=>{const K=ne/1e3,F=Q==null?void 0:Q(K);F?(S.x.translate=F.x,S.x.scale=Re(h.x.scale,1,K),S.x.origin=h.x.origin,S.x.originPoint=h.x.originPoint,S.y.translate=F.y,S.y.scale=Re(h.y.scale,1,K),S.y.origin=h.y.origin,S.y.originPoint=h.y.originPoint):(Av(S.x,h.x,K),Av(S.y,h.y,K)),this.setTargetDelta(S),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(jo(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),nA(this.relativeTarget,this.relativeTargetOrigin,w,K),_&&zj(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=We()),Ft(_,this.relativeTarget)),k&&(this.animationValues=x,kj(x,b,this.latestValues,K,O,L)),F&&F.rotate!==void 0&&(this.animationValues||(this.animationValues=x),this.animationValues.pathRotation=F.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=K},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){var m,g,p;this.notifyListeners("animationStart"),(m=this.currentAnimation)==null||m.stop(),(p=(g=this.resumingFrom)==null?void 0:g.currentAnimation)==null||p.stop(),this.pendingAnimation&&(ti(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ke.update(()=>{fo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ba(0)),this.motionValue.jump(0,!1),this.currentAnimation=_j(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:b=>{this.mixTargetDelta(b),h.onUpdate&&h.onUpdate(b)},onStop:()=>{},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Yj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:m,target:g,layout:p,latestValues:b}=h;if(!(!m||!g||!p)){if(this!==h&&this.layout&&p&&Ay(this.options.animationType,this.layout.layoutBox,p.layoutBox)){g=this.target||We();const x=ht(this.layout.layoutBox.x);g.x.min=h.target.x.min,g.x.max=g.x.min+x;const S=ht(this.layout.layoutBox.y);g.y.min=h.target.y.min,g.y.max=g.y.min+S}Ft(m,g),co(m,b),Tl(this.projectionDeltaWithTransform,this.layoutCorrected,m,b)}}registerSharedNode(h,m){this.sharedNodes.has(h)||this.sharedNodes.set(h,new Hj),this.sharedNodes.get(h).add(m);const p=m.options.initialPromotionConfig;m.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(m):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){var m;const{layoutId:h}=this.options;return h?((m=this.getStack())==null?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:h}=this.options;return h?(m=this.getStack())==null?void 0:m.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:m,preserveFollowOpacity:g}={}){const p=this.getStack();p&&p.promote(this,g),h&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let m=!1;const{latestValues:g}=h;if((g.z||g.rotate||g.rotateX||g.rotateY||g.rotateZ||g.skewX||g.skewY)&&(m=!0),!m)return;const p={};g.z&&sc("z",h,p,this.animationValues);for(let b=0;b<lc.length;b++)sc(`rotate${lc[b]}`,h,p,this.animationValues),sc(`skew${lc[b]}`,h,p,this.animationValues);h.render();for(const b in p)h.setStaticValue(b,p[b]),this.animationValues&&(this.animationValues[b]=p[b]);h.scheduleRender()}applyProjectionStyles(h,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const g=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=ho(m==null?void 0:m.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=ho(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!wi(this.latestValues)&&(h.transform=g?g({},""):"none",this.hasProjected=!1);return}h.visibility="";const b=p.animationValues||p.latestValues;this.applyTransformsToTarget();let x=Vj(this.projectionDeltaWithTransform,this.treeScale,b);g&&(x=g(b,x)),h.transform=x;const{x:S,y:w}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${w.origin*100}% 0`,p.animationValues?h.opacity=p===this?b.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:h.opacity=p===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const j in Bc){if(b[j]===void 0)continue;const{correct:N,applyTo:k,isCSSVariable:C}=Bc[j],L=x==="none"?b[j]:N(b[j],p);if(k){const O=k.length;for(let _=0;_<O;_++)h[k[_]]=L}else C?this.options.visualElement.renderState.vars[j]=L:h[j]=L}this.options.layoutId&&(h.pointerEvents=p===this?ho(m==null?void 0:m.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>{var m;return(m=h.currentAnimation)==null?void 0:m.stop()}),this.root.nodes.forEach(xv),this.root.sharedNodes.clear()}}}function Xj(i){i.updateLayout()}function Qj(i){var o;const l=((o=i.resumeFrom)==null?void 0:o.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&l&&i.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=i.layout,{animationType:f}=i.options,h=l.source!==i.layout.source;if(f==="size")tn(x=>{const S=h?l.measuredBox[x]:l.layoutBox[x],w=ht(S);S.min=s[x].min,S.max=S.min+w});else if(f==="x"||f==="y"){const x=f==="x"?"y":"x";Oc(h?l.measuredBox[x]:l.layoutBox[x],s[x])}else Ay(f,l.layoutBox,s)&&tn(x=>{const S=h?l.measuredBox[x]:l.layoutBox[x],w=ht(s[x]);S.max=S.min+w,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[x].max=i.relativeTarget[x].min+w)});const m=ga();Tl(m,s,l.layoutBox);const g=ga();h?Tl(g,i.applyTransform(c,!0),l.measuredBox):Tl(g,s,l.layoutBox);const p=!gy(m);let b=!1;if(!i.resumeFrom){const x=i.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:S,layout:w}=x;if(S&&w){const j=i.options.layoutAnchor||void 0,N=We();jo(N,l.layoutBox,S.layoutBox,j);const k=We();jo(k,s,w.layoutBox,j),yy(N,k)||(b=!0),x.options.layoutRoot&&(i.relativeTarget=k,i.relativeTargetOrigin=N,i.relativeParent=x)}}}i.notifyListeners("didUpdate",{layout:s,snapshot:l,delta:g,layoutDelta:m,hasLayoutChanged:p,hasRelativeLayoutChanged:b})}else if(i.isLead()){const{onExitComplete:s}=i.options;s&&s()}i.options.transition=void 0}function Zj(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function Kj(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function Fj(i){i.clearSnapshot()}function xv(i){i.clearMeasurements()}function Jj(i){i.isLayoutDirty=!0,i.updateLayout()}function Sv(i){i.isLayoutDirty=!1}function $j(i){i.isAnimationBlocked&&i.layout&&!i.isLayoutDirty&&(i.snapshot=i.layout,i.isLayoutDirty=!0)}function Wj(i){const{visualElement:l}=i.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),i.resetTransform()}function jv(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function Pj(i){i.resolveTargetDelta()}function Ij(i){i.calcProjection()}function eA(i){i.resetSkewAndRotation()}function tA(i){i.removeLeadSnapshot()}function Av(i,l,o){i.translate=Re(l.translate,0,o),i.scale=Re(l.scale,1,o),i.origin=l.origin,i.originPoint=l.originPoint}function wv(i,l,o,s){i.min=Re(l.min,o.min,s),i.max=Re(l.max,o.max,s)}function nA(i,l,o,s){wv(i.x,l.x,o.x,s),wv(i.y,l.y,o.y,s)}function iA(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const aA={duration:.45,ease:[.4,0,.1,1]},Tv=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Ev=Tv("applewebkit/")&&!Tv("chrome/")?Math.round:Xt;function Dv(i){i.min=Ev(i.min),i.max=Ev(i.max)}function lA(i){Dv(i.x),Dv(i.y)}function Ay(i,l,o){return i==="position"||i==="preserve-aspect"&&!Ej(pv(l),pv(o),.2)}function sA(i){var l;return i!==i.root&&((l=i.scroll)==null?void 0:l.wasRoot)}const oA=jy({attachResizeListener:(i,l)=>Nl(i,"resize",l),measureScroll:()=>{var i,l;return{x:document.documentElement.scrollLeft||((i=document.body)==null?void 0:i.scrollLeft)||0,y:document.documentElement.scrollTop||((l=document.body)==null?void 0:l.scrollTop)||0}},checkIsScrollRoot:()=>!0}),oc={current:void 0},wy=jy({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!oc.current){const i=new oA({});i.mount(window),i.setOptions({layoutScroll:!0}),oc.current=i}return oc.current},resetTransform:(i,l)=>{i.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),dh=G.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function Cv(i,l){if(typeof i=="function")return i(l);i!=null&&(i.current=l)}function rA(...i){return l=>{let o=!1;const s=i.map(c=>{const f=Cv(c,l);return!o&&typeof f=="function"&&(o=!0),f});if(o)return()=>{for(let c=0;c<s.length;c++){const f=s[c];typeof f=="function"?f():Cv(i[c],null)}}}}function uA(...i){return G.useCallback(rA(...i),i)}class cA extends G.Component{getSnapshotBeforeUpdate(l){const o=this.props.childRef.current;if(so(o)&&l.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=o.offsetParent,c=so(s)&&s.offsetWidth||0,f=so(s)&&s.offsetHeight||0,h=getComputedStyle(o),m=this.props.sizeRef.current;m.height=parseFloat(h.height),m.width=parseFloat(h.width),m.top=o.offsetTop,m.left=o.offsetLeft,m.right=c-m.width-m.left,m.bottom=f-m.height-m.top,m.direction=h.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function hA({children:i,isPresent:l,anchorX:o,anchorY:s,root:c,pop:f}){var S;const h=G.useId(),m=G.useRef(null),g=G.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:p}=G.useContext(dh),b=((S=i.props)==null?void 0:S.ref)??(i==null?void 0:i.ref),x=uA(m,b);return G.useInsertionEffect(()=>{const{width:w,height:j,top:N,left:k,right:C,bottom:L,direction:O}=g.current;if(l||f===!1||!m.current||!w||!j)return;const _=O==="rtl",Q=o==="left"?_?`right: ${C}`:`left: ${k}`:_?`left: ${k}`:`right: ${C}`,ne=s==="bottom"?`bottom: ${L}`:`top: ${N}`;m.current.dataset.motionPopId=h;const K=document.createElement("style");p&&(K.nonce=p);const F=c??document.head;return F.appendChild(K),K.sheet&&K.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${j}px !important;
            ${Q}px !important;
            ${ne}px !important;
          }
        `),()=>{var ie;(ie=m.current)==null||ie.removeAttribute("data-motion-pop-id"),F.contains(K)&&F.removeChild(K)}},[l]),v.jsx(cA,{isPresent:l,childRef:m,sizeRef:g,pop:f,children:f===!1?i:G.cloneElement(i,{ref:x})})}const fA=({children:i,initial:l,isPresent:o,onExitComplete:s,custom:c,presenceAffectsLayout:f,mode:h,anchorX:m,anchorY:g,root:p})=>{const b=Gc(dA),x=G.useId();let S=!0,w=G.useMemo(()=>(S=!1,{id:x,initial:l,isPresent:o,custom:c,onExitComplete:j=>{b.set(j,!0);for(const N of b.values())if(!N)return;s&&s()},register:j=>(b.set(j,!1),()=>b.delete(j))}),[o,b,s]);return f&&S&&(w={...w}),G.useMemo(()=>{b.forEach((j,N)=>b.set(N,!1))},[o]),G.useEffect(()=>{!o&&!b.size&&s&&s()},[o]),i=v.jsx(hA,{pop:h==="popLayout",isPresent:o,anchorX:m,anchorY:g,root:p,children:i}),v.jsx(wo.Provider,{value:w,children:i})};function dA(){return new Map}function Ty(i=!0){const l=G.useContext(wo);if(l===null)return[!0,null];const{isPresent:o,onExitComplete:s,register:c}=l,f=G.useId();G.useEffect(()=>{if(i)return c(f)},[i]);const h=G.useCallback(()=>i&&s&&s(f),[f,s,i]);return!o&&s?[!1,h]:[!0]}const eo=i=>i.key||"";function Mv(i){const l=[];return G.Children.forEach(i,o=>{G.isValidElement(o)&&l.push(o)}),l}const _c=({children:i,custom:l,initial:o=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:f="sync",propagate:h=!1,anchorX:m="left",anchorY:g="top",root:p})=>{const[b,x]=Ty(h),S=G.useMemo(()=>Mv(i),[i]),w=h&&!b?[]:S.map(eo),j=G.useRef(!0),N=G.useRef(S),k=Gc(()=>new Map),C=G.useRef(new Set),[L,O]=G.useState(S),[_,Q]=G.useState(S);Iv(()=>{j.current=!1,N.current=S;for(let F=0;F<_.length;F++){const ie=eo(_[F]);w.includes(ie)?(k.delete(ie),C.current.delete(ie)):k.get(ie)!==!0&&k.set(ie,!1)}},[_,w.length,w.join("-")]);const ne=[];if(S!==L){let F=[...S];for(let ie=0;ie<_.length;ie++){const ee=_[ie],se=eo(ee);w.includes(se)||(F.splice(ie,0,ee),ne.push(ee))}return f==="wait"&&ne.length&&(F=ne),Q(Mv(F)),O(S),null}const{forceRender:K}=G.useContext(Yc);return v.jsx(v.Fragment,{children:_.map(F=>{const ie=eo(F),ee=h&&!b?!1:S===_||w.includes(ie),se=()=>{if(C.current.has(ie))return;if(k.has(ie))C.current.add(ie),k.set(ie,!0);else return;let W=!0;k.forEach(pe=>{pe||(W=!1)}),W&&(K==null||K(),Q(N.current),h&&(x==null||x()),s&&s())};return v.jsx(fA,{isPresent:ee,initial:!j.current||o?void 0:!1,custom:l,presenceAffectsLayout:c,mode:f,root:p,onExitComplete:ee?void 0:se,anchorX:m,anchorY:g,children:F},ie)})})},Ey=G.createContext({strict:!1}),Nv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let zv=!1;function mA(){if(zv)return;const i={};for(const l in Nv)i[l]={isEnabled:o=>Nv[l].some(s=>!!o[s])};ty(i),zv=!0}function Dy(){return mA(),PS()}function pA(i){const l=Dy();for(const o in i)l[o]={...l[o],...i[o]};ty(l)}const vA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Ao(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||vA.has(i)}let Cy=i=>!Ao(i);function gA(i){typeof i=="function"&&(Cy=l=>l.startsWith("on")?!Ao(l):i(l))}try{gA(require("@emotion/is-prop-valid").default)}catch{}function yA(i,l,o){const s={};for(const c in i)c==="values"&&typeof i.values=="object"||ot(i[c])||(Cy(c)||o===!0&&Ao(c)||!l&&!Ao(c)||i.draggable&&c.startsWith("onDrag"))&&(s[c]=i[c]);return s}const Co=G.createContext({});function bA(i,l){if(Do(i)){const{initial:o,animate:s}=i;return{initial:o===!1||Ml(o)?o:void 0,animate:Ml(s)?s:void 0}}return i.inherit!==!1?l:{}}function xA(i){const{initial:l,animate:o}=bA(i,G.useContext(Co));return G.useMemo(()=>({initial:l,animate:o}),[Vv(l),Vv(o)])}function Vv(i){return Array.isArray(i)?i.join(" "):i}const mh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function My(i,l,o){for(const s in l)!ot(l[s])&&!ry(s,o)&&(i[s]=l[s])}function SA({transformTemplate:i},l){return G.useMemo(()=>{const o=mh();return hh(o,l,i),Object.assign({},o.vars,o.style)},[l])}function jA(i,l){const o=i.style||{},s={};return My(s,o,i),Object.assign(s,SA(i,l)),s}function AA(i,l){const o={},s=jA(i,l);return i.drag&&i.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(o.tabIndex=0),o.style=s,o}const Ny=()=>({...mh(),attrs:{}});function wA(i,l,o,s){const c=G.useMemo(()=>{const f=Ny();return uy(f,l,hy(s),i.transformTemplate,i.style),{...f.attrs,style:{...f.style}}},[l]);if(i.style){const f={};My(f,i.style,i),c.style={...f,...c.style}}return c}const TA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ph(i){return typeof i!="string"||i.includes("-")?!1:!!(TA.indexOf(i)>-1||/[A-Z]/u.test(i))}function EA(i,l,o,{latestValues:s},c,f=!1,h){const g=(h??ph(i)?wA:AA)(l,s,c,i),p=yA(l,typeof i=="string",f),b=i!==G.Fragment?{...p,...g,ref:o}:{},{children:x}=l,S=G.useMemo(()=>ot(x)?x.get():x,[x]);return G.createElement(i,{...b,children:S})}function DA({scrapeMotionValuesFromProps:i,createRenderState:l},o,s,c){return{latestValues:CA(o,s,c,i),renderState:l()}}function CA(i,l,o,s){const c={},f=s(i,{});for(const S in f)c[S]=ho(f[S]);let{initial:h,animate:m}=i;const g=Do(i),p=Ig(i);l&&p&&!g&&i.inherit!==!1&&(h===void 0&&(h=l.initial),m===void 0&&(m=l.animate));let b=o?o.initial===!1:!1;b=b||h===!1;const x=b?m:h;if(x&&typeof x!="boolean"&&!Eo(x)){const S=Array.isArray(x)?x:[x];for(let w=0;w<S.length;w++){const j=ah(i,S[w]);if(j){const{transitionEnd:N,transition:k,...C}=j;for(const L in C){let O=C[L];if(Array.isArray(O)){const _=b?O.length-1:0;O=O[_]}O!==null&&(c[L]=O)}for(const L in N)c[L]=N[L]}}}return c}const zy=i=>(l,o)=>{const s=G.useContext(Co),c=G.useContext(wo),f=()=>DA(i,l,s,c);return o?f():Gc(f)},MA=zy({scrapeMotionValuesFromProps:fh,createRenderState:mh}),NA=zy({scrapeMotionValuesFromProps:fy,createRenderState:Ny}),zA=Symbol.for("motionComponentSymbol");function VA(i,l,o){const s=G.useRef(o);G.useInsertionEffect(()=>{s.current=o});const c=G.useRef(null);return G.useCallback(f=>{var m;f&&((m=i.onMount)==null||m.call(i,f)),l&&(f?l.mount(f):l.unmount());const h=s.current;if(typeof h=="function")if(f){const g=h(f);typeof g=="function"&&(c.current=g)}else c.current?(c.current(),c.current=null):h(f);else h&&(h.current=f)},[l])}const Vy=G.createContext({});function ma(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function RA(i,l,o,s,c,f){var O,_;const{visualElement:h}=G.useContext(Co),m=G.useContext(Ey),g=G.useContext(wo),p=G.useContext(dh),b=p.reducedMotion,x=p.skipAnimations,S=G.useRef(null),w=G.useRef(!1);s=s||m.renderer,!S.current&&s&&(S.current=s(i,{visualState:l,parent:h,props:o,presenceContext:g,blockInitialAnimation:g?g.initial===!1:!1,reducedMotionConfig:b,skipAnimations:x,isSVG:f}),w.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const j=S.current,N=G.useContext(Vy);j&&!j.projection&&c&&(j.type==="html"||j.type==="svg")&&kA(S.current,o,c,N);const k=G.useRef(!1);G.useInsertionEffect(()=>{j&&k.current&&j.update(o,g)});const C=o[Hg],L=G.useRef(!!C&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,C))&&((_=window.MotionHasOptimisedAnimation)==null?void 0:_.call(window,C)));return Iv(()=>{w.current=!0,j&&(k.current=!0,window.MotionIsMounted=!0,j.updateFeatures(),j.scheduleRenderMicrotask(),L.current&&j.animationState&&j.animationState.animateChanges())}),G.useEffect(()=>{j&&(!L.current&&j.animationState&&j.animationState.animateChanges(),L.current&&(queueMicrotask(()=>{var Q;(Q=window.MotionHandoffMarkAsComplete)==null||Q.call(window,C)}),L.current=!1),j.enteringChildren=void 0)}),j}function kA(i,l,o,s){const{layoutId:c,layout:f,drag:h,dragConstraints:m,layoutScroll:g,layoutRoot:p,layoutAnchor:b,layoutCrossfade:x}=l;i.projection=new o(i.latestValues,l["data-framer-portal-id"]?void 0:Ry(i.parent)),i.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!h||m&&ma(m),visualElement:i,animationType:typeof f=="string"?f:"both",initialPromotionConfig:s,crossfade:x,layoutScroll:g,layoutRoot:p,layoutAnchor:b})}function Ry(i){if(i)return i.options.allowProjection!==!1?i.projection:Ry(i.parent)}function rc(i,{forwardMotionProps:l=!1,type:o}={},s,c){s&&pA(s);const f=o?o==="svg":ph(i),h=f?NA:MA;function m(p,b){let x;const S={...G.useContext(dh),...p,layoutId:BA(p)},{isStatic:w}=S,j=xA(p),N=h(p,w);if(!w&&typeof window<"u"){OA();const k=_A(S);x=k.MeasureLayout,j.visualElement=RA(i,N,S,c,k.ProjectionNode,f)}return v.jsxs(Co.Provider,{value:j,children:[x&&j.visualElement?v.jsx(x,{visualElement:j.visualElement,...S}):null,EA(i,p,VA(N,j.visualElement,b),N,w,l,f)]})}m.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const g=G.forwardRef(m);return g[zA]=i,g}function BA({layoutId:i}){const l=G.useContext(Yc).id;return l&&i!==void 0?l+"-"+i:i}function OA(i,l){G.useContext(Ey).strict}function _A(i){const l=Dy(),{drag:o,layout:s}=l;if(!o&&!s)return{};const c={...o,...s};return{MeasureLayout:o!=null&&o.isEnabled(i)||s!=null&&s.isEnabled(i)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function UA(i,l){if(typeof Proxy>"u")return rc;const o=new Map,s=(f,h)=>rc(f,h,i,l),c=(f,h)=>s(f,h);return new Proxy(c,{get:(f,h)=>h==="create"?s:(o.has(h)||o.set(h,rc(h,void 0,i,l)),o.get(h))})}const LA=(i,l)=>l.isSVG??ph(i)?new pj(l):new uj(l,{allowProjection:i!==G.Fragment});class qA extends ni{constructor(l){super(l),l.animationState||(l.animationState=xj(l))}updateAnimationControlsSubscription(){const{animate:l}=this.node.getProps();Eo(l)&&(this.unmountControls=l.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:l}=this.node.getProps(),{animate:o}=this.node.prevProps||{};l!==o&&this.updateAnimationControlsSubscription()}unmount(){var l;this.node.animationState.reset(),(l=this.unmountControls)==null||l.call(this)}}let HA=0;class YA extends ni{constructor(){super(...arguments),this.id=HA++,this.isExitComplete=!1}update(){var f;if(!this.node.presenceContext)return;const{isPresent:l,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||l===s)return;if(l&&s===!1){if(this.isExitComplete){const{initial:h,custom:m}=this.node.getProps();if(typeof h=="string"||typeof h=="object"&&h!==null&&!Array.isArray(h)){const g=Ci(this.node,h,m);if(g){const{transition:p,transitionEnd:b,...x}=g;for(const S in x)(f=this.node.getValue(S))==null||f.jump(x[S])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!l);o&&!l&&c.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:l,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),l&&(this.unmount=l(this.id))}unmount(){}}const GA={animation:{Feature:qA},exit:{Feature:YA}};function kl(i){return{point:{x:i.pageX,y:i.pageY}}}const XA=i=>l=>oh(l)&&i(l,kl(l));function El(i,l,o,s){return Nl(i,l,XA(o),s)}const ky=({current:i})=>i?i.ownerDocument.defaultView:null,Rv=(i,l)=>Math.abs(i-l);function QA(i,l){const o=Rv(i.x,l.x),s=Rv(i.y,l.y);return Math.sqrt(o**2+s**2)}const kv=new Set(["auto","scroll"]);class By{constructor(l,o,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:h=3,element:m}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=to(this.lastRawMoveEventInfo,this.transformPagePoint));const w=uc(this.lastMoveEventInfo,this.history),j=this.startEvent!==null,N=QA(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!j&&!N)return;const{point:k}=w,{timestamp:C}=st;this.history.push({...k,timestamp:C});const{onStart:L,onMove:O}=this.handlers;j||(L&&L(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,w)},this.handlePointerMove=(w,j)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=j,this.lastMoveEventInfo=to(j,this.transformPagePoint),ke.update(this.updatePoint,!0)},this.handlePointerUp=(w,j)=>{this.end();const{onEnd:N,onSessionEnd:k,resumeAnimation:C}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&C&&C(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const L=uc(w.type==="pointercancel"?this.lastMoveEventInfo:to(j,this.transformPagePoint),this.history);this.startEvent&&N&&N(w,L),k&&k(w,L)},!oh(l))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=s,this.distanceThreshold=h,this.contextWindow=c||window;const g=kl(l),p=to(g,this.transformPagePoint),{point:b}=p,{timestamp:x}=st;this.history=[{...b,timestamp:x}];const{onSessionStart:S}=o;S&&S(l,uc(p,this.history)),this.removeListeners=zl(El(this.contextWindow,"pointermove",this.handlePointerMove),El(this.contextWindow,"pointerup",this.handlePointerUp),El(this.contextWindow,"pointercancel",this.handlePointerUp)),m&&this.startScrollTracking(m)}startScrollTracking(l){let o=l.parentElement;for(;o;){const s=getComputedStyle(o);(kv.has(s.overflowX)||kv.has(s.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(l){const o=this.scrollPositions.get(l);if(!o)return;const s=l===window,c=s?{x:window.scrollX,y:window.scrollY}:{x:l.scrollLeft,y:l.scrollTop},f={x:c.x-o.x,y:c.y-o.y};f.x===0&&f.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(l,c),ke.update(this.updatePoint,!0))}updateHandlers(l){this.handlers=l}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ti(this.updatePoint)}}function to(i,l){return l?{point:l(i.point)}:i}function Bv(i,l){return{x:i.x-l.x,y:i.y-l.y}}function uc({point:i},l){return{point:i,delta:Bv(i,Oy(l)),offset:Bv(i,ZA(l)),velocity:KA(l,.1)}}function ZA(i){return i[0]}function Oy(i){return i[i.length-1]}function KA(i,l){if(i.length<2)return{x:0,y:0};let o=i.length-1,s=null;const c=Oy(i);for(;o>=0&&(s=i[o],!(c.timestamp-s.timestamp>Nt(l)));)o--;if(!s)return{x:0,y:0};s===i[0]&&i.length>2&&c.timestamp-s.timestamp>Nt(l)*2&&(s=i[1]);const f=Gt(c.timestamp-s.timestamp);if(f===0)return{x:0,y:0};const h={x:(c.x-s.x)/f,y:(c.y-s.y)/f};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function FA(i,{min:l,max:o},s){return l!==void 0&&i<l?i=s?Re(l,i,s.min):Math.max(i,l):o!==void 0&&i>o&&(i=s?Re(o,i,s.max):Math.min(i,o)),i}function Ov(i,l,o){return{min:l!==void 0?i.min+l:void 0,max:o!==void 0?i.max+o-(i.max-i.min):void 0}}function JA(i,{top:l,left:o,bottom:s,right:c}){return{x:Ov(i.x,o,c),y:Ov(i.y,l,s)}}function _v(i,l){let o=l.min-i.min,s=l.max-i.max;return l.max-l.min<i.max-i.min&&([o,s]=[s,o]),{min:o,max:s}}function $A(i,l){return{x:_v(i.x,l.x),y:_v(i.y,l.y)}}function WA(i,l){let o=.5;const s=ht(i),c=ht(l);return c>s?o=Dl(l.min,l.max-s,i.min):s>c&&(o=Dl(i.min,i.max-c,l.min)),ln(0,1,o)}function PA(i,l){const o={};return l.min!==void 0&&(o.min=l.min-i.min),l.max!==void 0&&(o.max=l.max-i.min),o}const Uc=.35;function IA(i=Uc){return i===!1?i=0:i===!0&&(i=Uc),{x:Uv(i,"left","right"),y:Uv(i,"top","bottom")}}function Uv(i,l,o){return{min:Lv(i,l),max:Lv(i,o)}}function Lv(i,l){return typeof i=="number"?i:i[l]||0}const e5=new WeakMap;class t5{constructor(l){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=We(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=l}start(l,{snapToCursor:o=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=x=>{o&&this.snapToCursor(kl(x).point),this.stopAnimation()},h=(x,S)=>{const{drag:w,dragPropagation:j,onDragStart:N}=this.getProps();if(w&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=CS(w),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tn(C=>{let L=this.getAxisMotionValue(C).get()||0;if(an.test(L)){const{projection:O}=this.visualElement;if(O&&O.layout){const _=O.layout.layoutBox[C];_&&(L=ht(_)*(parseFloat(L)/100))}}this.originPoint[C]=L}),N&&ke.update(()=>N(x,S),!1,!0),Dc(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},m=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S;const{dragPropagation:w,dragDirectionLock:j,onDirectionLock:N,onDrag:k}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:C}=S;if(j&&this.currentDirection===null){this.currentDirection=i5(C),this.currentDirection!==null&&N&&N(this.currentDirection);return}this.updateAxis("x",S.point,C),this.updateAxis("y",S.point,C),this.visualElement.render(),k&&ke.update(()=>k(x,S),!1,!0)},g=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S,this.stop(x,S),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:b}=this.getProps();this.panSession=new By(l,{onSessionStart:f,onStart:h,onMove:m,onSessionEnd:g,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:b,distanceThreshold:s,contextWindow:ky(this.visualElement),element:this.visualElement.current})}stop(l,o){const s=l||this.latestPointerEvent,c=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!s)return;const{velocity:h}=c;this.startAnimation(h);const{onDragEnd:m}=this.getProps();m&&ke.postRender(()=>m(s,c))}cancel(){this.isDragging=!1;const{projection:l,animationState:o}=this.visualElement;l&&(l.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(l,o,s){const{drag:c}=this.getProps();if(!s||!no(l,c,this.currentDirection))return;const f=this.getAxisMotionValue(l);let h=this.originPoint[l]+s[l];this.constraints&&this.constraints[l]&&(h=FA(h,this.constraints[l],this.elastic[l])),f.set(h)}resolveConstraints(){var f;const{dragConstraints:l,dragElastic:o}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,c=this.constraints;l&&ma(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&s?this.constraints=JA(s.layoutBox,l):this.constraints=!1,this.elastic=IA(o),c!==this.constraints&&!ma(l)&&s&&this.constraints&&!this.hasMutatedConstraints&&tn(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=PA(s.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:l,onMeasureDragConstraints:o}=this.getProps();if(!l||!ma(l))return!1;const s=l.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;c.root&&(c.root.scroll=void 0,c.root.updateScroll());const f=ij(s,c.root,this.visualElement.getTransformPagePoint());let h=$A(c.layout.layoutBox,f);if(o){const m=o(ej(h));this.hasMutatedConstraints=!!m,m&&(h=iy(m))}return h}startAnimation(l){const{drag:o,dragMomentum:s,dragElastic:c,dragTransition:f,dragSnapToOrigin:h,onDragTransitionEnd:m}=this.getProps(),g=this.constraints||{},p=tn(b=>{if(!no(b,o,this.currentDirection))return;let x=g&&g[b]||{};(h===!0||h===b)&&(x={min:0,max:0});const S=c?200:1e6,w=c?40:1e7,j={type:"inertia",velocity:s?l[b]:0,bounceStiffness:S,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...f,...x};return this.startAxisValueAnimation(b,j)});return Promise.all(p).then(m)}startAxisValueAnimation(l,o){const s=this.getAxisMotionValue(l);return Dc(this.visualElement,l),s.start(ih(l,s,0,o,this.visualElement,!1))}stopAnimation(){tn(l=>this.getAxisMotionValue(l).stop())}getAxisMotionValue(l){const o=`_drag${l.toUpperCase()}`,c=this.visualElement.getProps()[o];return c||this.visualElement.getValue(l,this.visualElement.latestValues[l]??0)}snapToCursor(l){tn(o=>{const{drag:s}=this.getProps();if(!no(o,s,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(o);if(c&&c.layout){const{min:h,max:m}=c.layout.layoutBox[o],g=f.get()||0;f.set(l[o]-Re(h,m,.5)+g)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:l,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!ma(o)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};tn(h=>{const m=this.getAxisMotionValue(h);if(m&&this.constraints!==!1){const g=m.get();c[h]=WA({min:g,max:g},this.constraints[h])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),tn(h=>{if(!no(h,l,null))return;const m=this.getAxisMotionValue(h),{min:g,max:p}=this.constraints[h];m.set(Re(g,p,c[h]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;e5.set(this.visualElement,this);const l=this.visualElement.current,o=El(l,"pointerdown",p=>{const{drag:b,dragListener:x=!0}=this.getProps(),S=p.target,w=S!==l&&kS(S);b&&x&&!w&&this.start(p)});let s;const c=()=>{const{dragConstraints:p}=this.getProps();ma(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),s||(s=n5(l,p.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,h=f.addEventListener("measure",c);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),ke.read(c);const m=Nl(window,"resize",()=>this.scalePositionWithinConstraints()),g=f.addEventListener("didUpdate",(({delta:p,hasLayoutChanged:b})=>{this.isDragging&&b&&(tn(x=>{const S=this.getAxisMotionValue(x);S&&(this.originPoint[x]+=p[x].translate,S.set(S.get()+p[x].translate))}),this.visualElement.render())}));return()=>{m(),o(),h(),g&&g(),s&&s()}}getProps(){const l=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:h=Uc,dragMomentum:m=!0}=l;return{...l,drag:o,dragDirectionLock:s,dragPropagation:c,dragConstraints:f,dragElastic:h,dragMomentum:m}}}function qv(i){let l=!0;return()=>{if(l){l=!1;return}i()}}function n5(i,l,o){const s=Kp(i,qv(o)),c=Kp(l,qv(o));return()=>{s(),c()}}function no(i,l,o){return(l===!0||l===i)&&(o===null||o===i)}function i5(i,l=10){let o=null;return Math.abs(i.y)>l?o="y":Math.abs(i.x)>l&&(o="x"),o}class a5 extends ni{constructor(l){super(l),this.removeGroupControls=Xt,this.removeListeners=Xt,this.controls=new t5(l)}mount(){const{dragControls:l}=this.node.getProps();l&&(this.removeGroupControls=l.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xt}update(){const{dragControls:l}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};l!==o&&(this.removeGroupControls(),l&&(this.removeGroupControls=l.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const cc=i=>(l,o)=>{i&&ke.update(()=>i(l,o),!1,!0)};class l5 extends ni{constructor(){super(...arguments),this.removePointerDownListener=Xt}onPointerDown(l){this.session=new By(l,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ky(this.node)})}createPanHandlers(){const{onPanSessionStart:l,onPanStart:o,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:cc(l),onStart:cc(o),onMove:cc(s),onEnd:(f,h)=>{delete this.session,c&&ke.postRender(()=>c(f,h))}}}mount(){this.removePointerDownListener=El(this.node.current,"pointerdown",l=>this.onPointerDown(l))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let hc=!1;class s5 extends G.Component{componentDidMount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:s,layoutId:c}=this.props,{projection:f}=l;f&&(o.group&&o.group.add(f),s&&s.register&&c&&s.register(f),hc&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),fo.hasEverUpdated=!0}getSnapshotBeforeUpdate(l){const{layoutDependency:o,visualElement:s,drag:c,isPresent:f}=this.props,{projection:h}=s;return h&&(h.isPresent=f,l.layoutDependency!==o&&h.setOptions({...h.options,layoutDependency:o}),hc=!0,c||l.layoutDependency!==o||o===void 0||l.isPresent!==f?h.willUpdate():this.safeToRemove(),l.isPresent!==f&&(f?h.promote():h.relegate()||ke.postRender(()=>{const m=h.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:l,layoutAnchor:o}=this.props,{projection:s}=l;s&&(s.options.layoutAnchor=o,s.root.didUpdate(),sh.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:c}=l;hc=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:l}=this.props;l&&l()}render(){return null}}function _y(i){const[l,o]=Ty(),s=G.useContext(Yc);return v.jsx(s5,{...i,layoutGroup:s,switchLayoutGroup:G.useContext(Vy),isPresent:l,safeToRemove:o})}const o5={pan:{Feature:l5},drag:{Feature:a5,ProjectionNode:wy,MeasureLayout:_y}};function Hv(i,l,o){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,f=s[c];f&&ke.postRender(()=>f(l,kl(l)))}class r5 extends ni{mount(){const{current:l}=this.node;l&&(this.unmount=NS(l,(o,s)=>(Hv(this.node,s,"Start"),c=>Hv(this.node,c,"End"))))}unmount(){}}class u5 extends ni{constructor(){super(...arguments),this.isActive=!1}onFocus(){let l=!1;try{l=this.node.current.matches(":focus-visible")}catch{l=!0}!l||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zl(Nl(this.node.current,"focus",()=>this.onFocus()),Nl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Yv(i,l,o){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),f=s[c];f&&ke.postRender(()=>f(l,kl(l)))}class c5 extends ni{mount(){const{current:l}=this.node;if(!l)return;const{globalTapTarget:o,propagate:s}=this.node.props;this.unmount=OS(l,(c,f)=>(Yv(this.node,f,"Start"),(h,{success:m})=>Yv(this.node,h,m?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Lc=new WeakMap,fc=new WeakMap,h5=i=>{const l=Lc.get(i.target);l&&l(i)},f5=i=>{i.forEach(h5)};function d5({root:i,...l}){const o=i||document;fc.has(o)||fc.set(o,{});const s=fc.get(o),c=JSON.stringify(l);return s[c]||(s[c]=new IntersectionObserver(f5,{root:i,...l})),s[c]}function m5(i,l,o){const s=d5(l);return Lc.set(i,o),s.observe(i),()=>{Lc.delete(i),s.unobserve(i)}}const p5={some:0,all:1};class v5 extends ni{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var g;(g=this.stopObserver)==null||g.call(this);const{viewport:l={}}=this.node.getProps(),{root:o,margin:s,amount:c="some",once:f}=l,h={root:o?o.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:p5[c]},m=p=>{const{isIntersecting:b}=p;if(this.isInView===b||(this.isInView=b,f&&!b&&this.hasEnteredView))return;b&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",b);const{onViewportEnter:x,onViewportLeave:S}=this.node.getProps(),w=b?x:S;w&&w(p)};this.stopObserver=m5(this.node.current,h,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:l,prevProps:o}=this.node;["amount","margin","root"].some(g5(l,o))&&this.startObserver()}unmount(){var l;(l=this.stopObserver)==null||l.call(this),this.hasEnteredView=!1,this.isInView=!1}}function g5({viewport:i={}},{viewport:l={}}={}){return o=>i[o]!==l[o]}const y5={inView:{Feature:v5},tap:{Feature:c5},focus:{Feature:u5},hover:{Feature:r5}},b5={layout:{ProjectionNode:wy,MeasureLayout:_y}},x5={...GA,...y5,...o5,...b5},jl=UA(x5,LA),dc=["a","ă","â","e","ê","i","o","ô","ơ","u","ư","y"],S5=`word,type,vietnamese
time,noun,thời gian
year,noun,năm
people,noun,người
way,noun,cách
day,noun,ngày
man,noun,người đàn ông
woman,noun,người phụ nữ
child,noun,đứa trẻ
world,noun,thế giới
life,noun,cuộc sống
hand,noun,bàn tay
part,noun,phần
place,noun,nơi chốn
case,noun,trường hợp
week,noun,tuần
company,noun,công ty
system,noun,hệ thống
program,noun,chương trình
question,noun,câu hỏi
government,noun,chính phủ
number,noun,số
night,noun,đêm
point,noun,điểm
home,noun,nhà
water,noun,nước
room,noun,phòng
mother,noun,mẹ
area,noun,khu vực
money,noun,tiền
story,noun,câu chuyện
fact,noun,sự thật
month,noun,tháng
lot,noun,nhiều
right,noun,quyền
study,noun,nghiên cứu
book,noun,sách
eye,noun,mắt
job,noun,công việc
word,noun,từ
business,noun,kinh doanh
issue,noun,vấn đề
side,noun,phía
kind,noun,loại
head,noun,đầu
house,noun,ngôi nhà
service,noun,dịch vụ
friend,noun,bạn bè
father,noun,cha
power,noun,sức mạnh
hour,noun,giờ
game,noun,trò chơi
line,noun,đường
end,noun,kết thúc
among,noun,trong số
student,noun,học sinh
group,noun,nhóm
country,noun,đất nước
problem,noun,vấn đề
hand,noun,tay
idea,noun,ý tưởng
body,noun,cơ thể
information,noun,thông tin
back,noun,lưng
family,noun,gia đình
level,noun,mức độ
office,noun,văn phòng
door,noun,cửa
health,noun,sức khỏe
person,noun,người
art,noun,nghệ thuật
war,noun,chiến tranh
history,noun,lịch sử
party,noun,bữa tiệc
result,noun,kết quả
change,noun,thay đổi
morning,noun,buổi sáng
reason,noun,lý do
research,noun,nghiên cứu
girl,noun,cô gái
guy,noun,anh chàng
moment,noun,khoảnh khắc
air,noun,không khí
teacher,noun,giáo viên
force,noun,lực lượng
education,noun,giáo dục
never,noun,không bao giờ
river,noun,sòng
city,noun,thành phố
community,noun,cộng đồng
name,noun,tên
president,noun,tổng thống
team,noun,đội
minute,noun,phút
idea,noun,ý kiến
body,noun,thân thể
information,noun,tin tức
road,noun,đường
model,noun,mô hình
class,noun,lớp học
paper,noun,giấy
space,noun,không gian
ground,noun,mặt đất
form,noun,hình thức
event,noun,sự kiện
action,noun,hành động
age,noun,tuổi
policy,noun,chính sách
price,noun,giá cả
type,noun,loại
language,noun,ngôn ngữ
role,noun,vai trò
strategy,noun,chiến lược
technology,noun,công nghệ
value,noun,giá trị
view,noun,quan điểm
animal,noun,động vật
answer,noun,câu trả lời
area,noun,diện tích
army,noun,quân đội
bank,noun,ngân hàng
battle,noun,trận chiến
bed,noun,giường
belief,noun,niềm tin
blood,noun,máu
board,noun,bảng
boat,noun,thuyền
brother,noun,anh trai
building,noun,tòa nhà
car,noun,xe hơi
care,noun,sự quan tâm
center,noun,trung tâm
century,noun,thế kỷ
character,noun,nhân vật
choice,noun,lựa chọn
church,noun,nhà thờ
color,noun,màu sắc
condition,noun,điều kiện
control,noun,kiểm soát
cost,noun,chi phí
culture,noun,văn hóa
data,noun,dữ liệu
death,noun,cái chết
decision,noun,quyết định
degree,noun,mức độ
design,noun,thiết kế
development,noun,sự phát triển
difference,noun,sự khác biệt
direction,noun,hướng
dream,noun,giấc mơ
drive,noun,chuyến đi
economy,noun,nền kinh tế
effort,noun,nỗ lực
energy,noun,năng lượng
environment,noun,môi trường
experience,noun,kinh nghiệm
face,noun,khuôn mặt
failure,noun,thất bại
field,noun,cánh đồng
fire,noun,lửa
floor,noun,sàn nhà
flower,noun,bông hoa
food,noun,thức ăn
future,noun,tương lai
garden,noun,vườn
glass,noun,kính
goal,noun,mục tiêu
hair,noun,tóc
heart,noun,trái tim
heat,noun,nhiệt độ
help,noun,sự giúp đỡ
hospital,noun,bệnh viện
hotel,noun,khách sạn
image,noun,hình ảnh
impact,noun,tác động
income,noun,thu nhập
industry,noun,công nghiệp
interest,noun,lợi ích
island,noun,hòn đảo
king,noun,vua
knowledge,noun,kiến thức
land,noun,đất
law,noun,luật pháp
leader,noun,lãnh đạo
letter,noun,thư
light,noun,ánh sáng
list,noun,danh sách
loss,noun,mất mát
love,noun,tình yêu
machine,noun,máy móc
market,noun,thị trường
meaning,noun,ý nghĩa
media,noun,phương tiện truyền thông
meeting,noun,cuộc họp
memory,noun,ký ức
message,noun,tin nhắn
method,noun,phương pháp
mind,noun,tâm trí
minute,noun,phút
movement,noun,phong trào
music,noun,âm nhạc
nature,noun,thiên nhiên
network,noun,mạng lưới
news,noun,tin tức
note,noun,ghi chú
object,noun,vật thể
opportunity,noun,cơ hội
order,noun,đơn hàng
organization,noun,tổ chức
pain,noun,đau đớn
peace,noun,hòa bình
phone,noun,điện thoại
picture,noun,bức tranh
plan,noun,kế hoạch
plant,noun,cây
position,noun,vị trí
practice,noun,thực hành
process,noun,quá trình
product,noun,sản phẩm
property,noun,tài sản
purpose,noun,mục đích
quality,noun,chất lượng
question,noun,câu hỏi
race,noun,cuộc đua
rate,noun,tỷ lệ
reality,noun,thực tế
record,noun,hồ sơ
relationship,noun,mối quan hệ
report,noun,báo cáo
resource,noun,tài nguyên
respect,noun,sự tôn trọng
response,noun,phản hồi
risk,noun,rủi ro
rule,noun,quy tắc
safety,noun,an toàn
scene,noun,cảnh
school,noun,trường học
science,noun,khoa học
season,noun,mùa
situation,noun,tình huống
size,noun,kích thước
skill,noun,kỹ năng
sky,noun,bầu trời
society,noun,xã hội
solution,noun,giải pháp
sound,noun,âm thanh
source,noun,nguồn
spirit,noun,tinh thần
sport,noun,thể thao
star,noun,ngôi sao
state,noun,trạng thái
step,noun,bước
street,noun,con phố
strength,noun,sức mạnh
structure,noun,cấu trúc
subject,noun,chủ đề
success,noun,thành công
support,noun,hỗ trợ
surface,noun,bề mặt
table,noun,cái bàn
task,noun,nhiệm vụ
test,noun,bài kiểm tra
thought,noun,suy nghĩ
time,noun,lần
title,noun,tiêu đề
tool,noun,công cụ
trade,noun,thương mại
training,noun,đào tạo
tree,noun,cái cây
trial,noun,thử nghiệm
trouble,noun,rắc rối
truth,noun,sự thật
understanding,noun,sự hiểu biết
university,noun,trường đại học
village,noun,làng quê
voice,noun,giọng nói
weight,noun,trọng lượng
window,noun,cửa sổ
work,noun,công việc
worker,noun,công nhân
writing,noun,viết lách
account,noun,tài khoản
achievement,noun,thành tích
activity,noun,hoạt động
addition,noun,phép cộng
address,noun,địa chỉ
advantage,noun,lợi thế
advice,noun,lời khuyên
agency,noun,cơ quan
agreement,noun,thỏa thuận
aid,noun,viện trợ
analysis,noun,phân tích
application,noun,ứng dụng
approach,noun,cách tiếp cận
argument,noun,tranh luận
aspect,noun,khía cạnh
assistance,noun,sự hỗ trợ
association,noun,hiệp hội
assumption,noun,giả định
atmosphere,noun,bầu không khí
attention,noun,sự chú ý
attitude,noun,thái độ
audience,noun,khán giả
authority,noun,quyền lực
awareness,noun,nhận thức
balance,noun,sự cân bằng
barrier,noun,rào cản
base,noun,cơ sở
basis,noun,căn cứ
behavior,noun,hành vi
benefit,noun,lợi ích
bond,noun,trái phiếu
boundary,noun,ranh giới
branch,noun,chi nhánh
breath,noun,hơi thở
budget,noun,ngân sách
burden,noun,gánh nặng
career,noun,sự nghiệp
cause,noun,nguyên nhân
challenge,noun,thử thách
characteristic,noun,đặc điểm
citizen,noun,công dung -> wait, công dân is actually at other lines, but lets parse whatever user has
claim,noun,khiếu nại
climate,noun,khí hậu
code,noun,mã
collection,noun,bộ sưu tập
combination,noun,sự kết hợp
comment,noun,nhận xét
commitment,noun,cam kết
committee,noun,ủy ban
communication,noun,giao tiếp
competition,noun,cạnh tranh
complaint,noun,khiếu nại
concept,noun,khái niệm
concern,noun,mối lo ngại
conclusion,noun,kết luận
conflict,noun,xung đột
consequence,noun,hậu quả
consideration,noun,sự cân nhắc
construction,noun,xây dựng
context,noun,bối cảnh
contribution,noun,đóng góp
conversation,noun,cuộc trò chuyện
cooperation,noun,hợp tác
corporation,noun,tập đoàn
creation,noun,sự sáng tạo
crisis,noun,khủng hoảng
criticism,noun,chỉ trích
crowd,noun,đám đông
currency,noun,tiền tệ
customer,noun,khách hàng
damage,noun,thiệt hại
debate,noun,cuộc tranh luận
decade,noun,thập kỷ
declaration,noun,tuyên bố
definition,noun,định nghĩa
demand,noun,nhu cầu
democracy,noun,dân chủ
department,noun,bộ phận
description,noun,mô tả
detail,noun,chi tiết
determination,noun,quyết tâm
diet,noun,chế độ ăn
disappointment,noun,thất vọng
discipline,noun,kỷ luật
discovery,noun,khám phá
discussion,noun,thảo luận
distance,noun,khoảng cách
distribution,noun,phân phối
diversity,noun,sự đa dạng
document,noun,tài liệu
doubt,noun,nghi ngờ
effect,noun,hiệu quả
election,noun,cuộc bầu cử
element,noun,yếu tố
emergency,noun,trường hợp khẩn cấp
emotion,noun,cảm xúc
employee,noun,nhân viên
employer,noun,người sử dụng lao động
employment,noun,việc làm
engagement,noun,sự tham gia
equality,noun,bình đẳng
error,noun,lỗi
establishment,noun,cơ sở
evaluation,noun,đánh giá
evidence,noun,bằng chứng
evolution,noun,tiến hóa
examination,noun,kỳ thi
example,noun,ví dụ
exception,noun,ngoại lệ
existence,noun,sự tồn tại
expansion,noun,mở rộng
expectation,noun,kỳ vọng
explanation,noun,giải thích
expression,noun,biểu hiện
extent,noun,mức độ
facility,noun,cơ sở vật chất
factor,noun,yếu tố
fashion,noun,thời trang
feature,noun,đặc điểm
figure,noun,con số
finding,noun,phát hiện
focus,noun,sự tập trung
foundation,noun,nền tảng
freedom,noun,tự do
function,noun,chức năng
gain,noun,lợi nhuận
gap,noun,khoảng cách
generation,noun,thế hệ
growth,noun,tăng trưởng
guide,noun,hướng dẫn
habit,noun,thói quen
half,noun,nửa
harm,noun,tác hại
highlight,noun,điểm nổi bật
honor,noun,danh dự
hope,noun,hy vọng
humor,noun,hài hước
identity,noun,danh tính
improvement,noun,cải tiến
independence,noun,độc lập
individual,noun,cá nhân
influence,noun,ảnh hưởng
initiative,noun,sáng kiến
innovation,noun,đổi mới
institution,noun,tổ chức
instrument,noun,nhạc cụ
insurance,noun,bảo hiểm
integration,noun,tích hợp
intention,noun,ý định
investment,noun,đầu tư
involvement,noun,sự tham gia
journey,noun,cuộc hành trình
justice,noun,công lý
lack,noun,thiếu hụt
leadership,noun,lãnh đạo
learning,noun,học tập
legislation,noun,luật pháp
liberty,noun,tự do
limitation,noun,hạn chế
location,noun,địa điểm
management,noun,quản lý
manufacturer,noun,nhà sản xuất
margin,noun,biên độ
measure,noun,biện pháp
mechanism,noun,cơ chế
member,noun,thành viên
mission,noun,sứ mệnh
motivation,noun,động lực
mystery,noun,bí ẩn
necessity,noun,sự cần thiết
negotiation,noun,đàm phán
objective,noun,mục tiêu
observation,noun,quan sát
option,noun,lựa chọn
outcome,noun,kết quả
overview,noun,tổng quan
ownership,noun,quyền sở hữu
participant,noun,người tham gia
participation,noun,sự tham gia
partner,noun,đối tác
partnership,noun,quan hệ đối tác
patient,noun,bệnh nhân
pattern,noun,mẫu
payment,noun,thanh toán
performance,noun,hiệu suất
permission,noun,sự cho phép
phase,noun,giai đoạn
phenomenon,noun,hiện tượng
philosophy,noun,triết học
platform,noun,nền tảng
player,noun,người chơi
politics,noun,chính trị
population,noun,dân số
potential,noun,tiềm năng
preference,noun,sở thích
presence,noun,sự hiện diện
pressure,noun,áp lực
pride,noun,niềm tự hào
principle,noun,nguyên tắc
priority,noun,ưu tiên
procedure,noun,thủ tục
profession,noun,nghề nghiệp
profit,noun,lợi nhuận
progress,noun,tiến bộ
project,noun,dự án
promise,noun,lời hứa
protection,noun,bảo vệ
provision,noun,quy định
psychology,noun,tâm lý học
range,noun,phạm vi
recognition,noun,sự công nhận
recommendation,noun,khuyến nghị
reform,noun,cải cách
regulation,noun,quy định
release,noun,phát hành
relief,noun,sự giải thoát
religion,noun,tôn giáo
representation,noun,đại diện
requirement,noun,yêu cầu
resolution,noun,nghị quyết
responsibility,noun,trách nhiệm
revolution,noun,cách mạng
reward,noun,phần thưởng
right,noun,quyền lợi
satisfaction,noun,sự hài lòng
security,noun,an ninh
selection,noun,lựa chọn
sense,noun,ý nghĩa
series,noun,loạt
shift,noun,sự thay đổi
significance,noun,tầm quan trọng
silence,noun,sự im lặng
simulation,noun,mô phỏng
sister,noun,chị gái
software,noun,phần mềm
speech,noun,bài phát biểu
standard,noun,tiêu chuẩn
statement,noun,tuyên bố
status,noun,trạng thái
struggle,noun,cuộc đấu tranh
substance,noun,chất
survey,noun,khảo sát
symbol,noun,biểu tượng
talent,noun,tài năng
target,noun,mục tiêu
technique,noun,kỹ thuật
theme,noun,chủ đề
threat,noun,mối đe dọa
tradition,noun,truyền thống
transition,noun,sự chuyển đổi
trust,noun,niềm tin
unemployment,noun,thất nghiệp
union,noun,liên minh
variety,noun,sự đa dạng
victory,noun,chiến thắng
vision,noun,tầm nhìn
volunteer,noun,tình nguyện viên
wealth,noun,sự giàu có
welfare,noun,phúc lợi
wisdom,noun,sự khôn ngoan
youth,noun,thanh niên
be,verb,là
have,verb,có
do,verb,làm
say,verb,nói
go,verb,đi
get,verb,lấy
make,verb,tạo
know,verb,biết
think,verb,nghĩ
take,verb,lấy
see,verb,nhìn
come,verb,đến
want,verb,muốn
look,verb,nhìn
use,verb,sử dụng
find,verb,tìm
give,verb,cho
tell,verb,kể
work,verb,làm việc
call,verb,gọi
try,verb,cố gắng
ask,verb,hỏi
need,verb,cần
feel,verb,cảm thấy
become,verb,trở thành
leave,verb,rời đi
put,verb,đặt
mean,verb,có nghĩa là
keep,verb,giữ
let,verb,cho phép
begin,verb,bắt đầu
seem,verb,có vẻ
help,verb,giúp đỡ
show,verb,cho thấy
hear,verb,nghe
play,verb,chơi
run,verb,chạy
move,verb,di chuyển
live,verb,sống
believe,verb,tin
hold,verb,giữ
bring,verb,mang
happen,verb,xảy ra
write,verb,viết
provide,verb,cung cấp
sit,verb,ngồi
stand,verb,đứng
lose,verb,mất
pay,verb,trả
meet,verb,gặp
include,verb,bao gồm
continue,verb,tiếp tục
set,verb,đặt
learn,verb,học
change,verb,thay đổi
lead,verb,dẫn dắt
understand,verb,hiểu
watch,verb,xem
follow,verb,theo dõi
stop,verb,dừng lại
create,verb,tạo ra
speak,verb,nói chuyện
read,verb,đọc
spend,verb,chi tiêu
grow,verb,lớn lên
open,verb,mở
walk,verb,đi bộ
win,verb,chiến thắng
offer,verb,đề nghị
remember,verb,nhớ
love,verb,yêu
consider,verb,xem xét
appear,verb,xuất hiện
buy,verb,mua
wait,verb,chờ
serve,verb,phục vụ
die,verb,chết
send,verb,gửi
expect,verb,mong đợi
build,verb,xây dựng
stay,verb,ở lại
fall,verb,ngã
cut,verb,cắt
reach,verb,đạt được
kill,verb,giết
remain,verb,ở lại
suggest,verb,đề xuất
raise,verb,nâng
pass,verb,vượt qua
sell,verb,bán
require,verb,yêu cầu
report,verb,báo cáo
decide,verb,quyết định
pull,verb,kéo
carry,verb,mang
develop,verb,phát triển
achieve,verb,đạt được
add,verb,thêm
admit,verb,thừa nhận
agree,verb,đồng ý
allow,verb,cho phép
apply,verb,ứng dụng
argue,verb,tranh luận
avoid,verb,tránh
break,verb,phá vỡ
catch,verb,bắt
check,verb,kiểm tra
choose,verb,chọn
clean,verb,làm sạch
close,verb,đóng
collect,verb,thu thập
communicate,verb,giao tiếp
compare,verb,so sánh
complete,verb,hoàn thành
connect,verb,kết nối
control,verb,kiểm soát
cook,verb,nấu ăn
cover,verb,che phủ
deal,verb,đối phó
define,verb,định nghĩa
deliver,verb,giao hàng
describe,verb,mô tả
design,verb,thiết kế
destroy,verb,phá hủy
determine,verb,xác định
discover,verb,khám phá
discuss,verb,thảo luận
drive,verb,lái xe
enable,verb,cho phép
enjoy,verb,thưởng thức
enter,verb,vào
establish,verb,thành lập
evaluate,verb,đánh giá
examine,verb,kiểm tra
exist,verb,tồn tại
explain,verb,giải thích
express,verb,bày tỏ
face,verb,đối mặt
fail,verb,thất bại
fight,verb,chiến đấu
fill,verb,lấp đầy
finish,verb,hoàn thành
fix,verb,sửa chữa
force,verb,ép buộc
forget,verb,quên
form,verb,hình thành
gain,verb,đạt được
handle,verb,xử lý
identify,verb,xác định
improve,verb,cải thiện
increase,verb,tăng
indicate,verb,chỉ ra
inform,verb,thông báo
introduce,verb,giới thiệu
involve,verb,liên quan
join,verb,tham gia
judge,verb,phán xét
jump,verb,nhảy
lack,verb,thiếu
laugh,verb,cười
listen,verb,lắng nghe
maintain,verb,duy trì
manage,verb,quản lý
measure,verb,đo lường
mention,verb,đề cập
miss,verb,nhớ
offer,verb,đề nghị
perform,verb,thực hiện
plan,verb,lên kế hoạch
prepare,verb,chuẩn bị
prevent,verb,ngăn chặn
produce,verb,sản xuất
protect,verb,bảo vệ
prove,verb,chứng minh
push,verb,đẩy
realize,verb,nhận ra
receive,verb,nhận
recognize,verb,nhận ra
reduce,verb,giảm
reflect,verb,phản ánh
refuse,verb,từ chối
relate,verb,liên quan
release,verb,phát hành
replace,verb,thay thế
represent,verb,đại diện
return,verb,trở về
reveal,verb,tiết lộ
save,verb,lưu
share,verb,chia sẻ
show,verb,hiển thị
solve,verb,giải quyết
start,verb,bắt đầu
study,verb,học
support,verb,hỗ trợ
teach,verb,dạy
test,verb,kiểm tra
throw,verb,ném
touch,verb,chạm
travel,verb,du lịch
treat,verb,đối xử
turn,verb,quay
value,verb,đánh giá cao
visit,verb,thăm
vote,verb,bỏ phiếu
wake,verb,thức dậy
want,verb,muốn
wear,verb,mặc
wish,verb,ước
wonder,verb,tự hỏi
accept,verb,chấp nhận
accomplish,verb,hoàn thành
acquire,verb,có được
act,verb,hành động
adapt,verb,thích nghi
analyze,verb,phân tích
announce,verb,thông báo
apologize,verb,xin lỗi
appreciate,verb,đánh giá cao
attack,verb,tấn công
attempt,verb,cố gắng
attend,verb,tham dự
attract,verb,thu hút
celebrate,verb,kỷ niệm
challenge,verb,thách thức
claim,verb,tuyên bố
collaborate,verb,hợp tác
combine,verb,kết hợp
commit,verb,cam kết
concentrate,verb,tập trung
concern,verb,liên quan
confirm,verb,xác nhận
contribute,verb,đóng góp
convince,verb,thuyết phục
count,verb,đếm
demonstrate,verb,chứng minh
depend,verb,phụ thuộc
develop,verb,phát triển
disagree,verb,không đồng ý
earn,verb,kiếm tiền
encourage,verb,khuyến khích
engage,verb,tham gia
ensure,verb,đảm bảo
exclude,verb,loại trừ
expand,verb,mở rộng
explore,verb,khám phá
extend,verb,mở rộng
focus,verb,tập trung
generate,verb,tạo ra
hire,verb,thuê
imagine,verb,tưởng tượng
implement,verb,thực hiện
inspire,verb,truyền cảm hứng
integrate,verb,tích hợp
interpret,verb,giải thích
invest,verb,đầu tư
launch,verb,phóng
limit,verb,giới hạn
lose,verb,thua
motivate,verb,thúc đẩy
negotiate,verb,đàm phán
observe,verb,quan sát
obtain,verb,có được
organize,verb,tổ chức
overcome,verb,vượt qua
participate,verb,tham gia
permit,verb,cho phép
predict,verb,dự đoán
promote,verb,quảng bá
propose,verb,đề xuất
provide,verb,cung cấp
publish,verb,xuất bản
pursue,verb,theo đuổi
react,verb,phản ứng
recommend,verb,khuyến nghị
reform,verb,cải cách
resolve,verb,giải quyết
respond,verb,phản hồi
risk,verb,chấp nhận rủi ro
schedule,verb,lên lịch
select,verb,chọn
separate,verb,tách rời
strengthen,verb,tăng cường
submit,verb,nộp
succeed,verb,thành công
transform,verb,chuyển đổi
trust,verb,tin tưởng
update,verb,cập nhật
upgrade,verb,nâng cấp
utilize,verb,sử dụng
validate,verb,xác nhận
verify,verb,xác minh
good,adjective,tốt
new,adjective,mới
first,adjective,đầu tiên
last,adjective,cuối cùng
long,adjective,dài
great,adjective,tuyệt vời
little,adjective,nhỏ
own,adjective,riêng
other,adjective,khác
old,adjective,cũ
right,adjective,đúng
big,adjective,lớn
high,adjective,cao
different,adjective,khác nhau
small,adjective,nhỏ
large,adjective,lớn
next,adjective,tiếp theo
early,adjective,sớm
young,adjective,trẻ
important,adjective,quan trọng
public,adjective,công cộng
private,adjective,riêng tư
real,adjective,thực
best,adjective,tốt nhất
free,adjective,tự do
strong,adjective,mạnh
bad,adjective,xấu
true,adjective,đúng
beautiful,adjective,đẹp
sure,adjective,chắc chắn
whole,adjective,toàn bộ
hard,adjective,khó
clear,adjective,rõ ràng
open,adjective,mở
easy,adjective,dễ
full,adjective,đầy
ready,adjective,sẵn sàng
wide,adjective,rộng
simple,adjective,đơn giản
alone,adjective,một mình
dark,adjective,tối
cold,adjective,lạnh
hot,adjective,nóng
deep,adjective,sâu
happy,adjective,hạnh phúc
sad,adjective,buồn
angry,adjective,tức giận
afraid,adjective,sợ hãi
serious,adjective,nghiêm túc
possible,adjective,có thể
major,adjective,chính
common,adjective,phổ biến
likely,adjective,có khả năng
able,adjective,có khả năng
certain,adjective,chắc chắn
several,adjective,một vài
special,adjective,đặc biệt
national,adjective,quốc gia
local,adjective,địa phương
economic,adjective,kinh tế
social,adjective,xã hội
political,adjective,chính trị
human,adjective,con người
current,adjective,hiện tại
available,adjective,có sẵn
necessary,adjective,cần thiết
main,adjective,chính
natural,adjective,tự nhiên
physical,adjective,thể chất
modern,adjective,hiện đại
general,adjective,chung
specific,adjective,cụ thể
basic,adjective,cơ bản
actual,adjective,thực tế
entire,adjective,toàn bộ
personal,adjective,cá nhân
recent,adjective,gần đây
similar,adjective,tương tự
final,adjective,cuối cùng
late,adjective,muộn
direct,adjective,trực tiếp
normal,adjective,bình thường
effective,adjective,hiệu quả
significant,adjective,đáng kể
traditional,adjective,truyền thống
active,adjective,năng động
popular,adjective,phổ biến
successful,adjective,thành công
independent,adjective,độc lập
complete,adjective,hoàn chỉnh
perfect,adjective,hoàn hảo
central,adjective,trung tâm
positive,adjective,tích cực
negative,adjective,tiêu cực
powerful,adjective,mạnh mẽ
original,adjective,ban đầu
digital,adjective,số
global,adjective,toàn cầu
cultural,adjective,văn hóa
professional,adjective,chuyên nghiệp
medical,adjective,y tế
international,adjective,quốc tế
financial,adjective,tài chính
interesting,adjective,thú vị
boring,adjective,nhàm chán
dangerous,adjective,nguy hiểm
safe,adjective,an toàn
comfortable,adjective,thoải mái
clean,adjective,sạch sẽ
dirty,adjective,bẩn
warm,adjective,ấm áp
cool,adjective,mát mẻ
fresh,adjective,tươi mới
quiet,adjective,yên tĩnh
loud,adjective,ồn ào
bright,adjective,sáng
soft,adjective,mềm
rough,adjective,thô ráp
smooth,adjective,mượt mà
sharp,adjective,sắc bén
weak,adjective,yếu
rich,adjective,giàu có
poor,adjective,nghèo
healthy,adjective,khỏe mạnh
sick,adjective,ốm
clever,adjective,thông minh
stupid,adjective,ngu ngốc
kind,adjective,tử tế
cruel,adjective,tàn nhẫn
brave,adjective,dũng cảm
coward,adjective,hèn nhát
honest,adjective,thành thật
lazy,adjective,lười biếng
busy,adjective,bận rộn
empty,adjective,trống rỗng
useful,adjective,hữu ích
useless,adjective,vô dụng
heavy,adjective,nặng
light,adjective,nhẹ
fast,adjective,nhanh
slow,adjective,chậm
fat,adjective,béo
thin,adjective,gầy
tall,adjective,cao
short,adjective,thấp
near,adjective,gần
far,adjective,xa
familiar,adjective,quen thuộc
strange,adjective,kỳ lạ
formal,adjective,chính thức
informal,adjective,không chính thức
obvious,adjective,rõ ràng
hidden,adjective,ẩn
complex,adjective,phức tạp
abstract,adjective,trừu tượng
concrete,adjective,cụ thể
academic,adjective,học thuật
administrative,adjective,hành chính
advanced,adjective,nâng cao
aggressive,adjective,hung hăng
ambitious,adjective,tham vọng
ancient,adjective,cổ đại
annual,adjective,hàng năm
apparent,adjective,rõ ràng
appropriate,adjective,phù hợp
approximate,adjective,gần đúng
artificial,adjective,nhân tạo
automatic,adjective,tự động
average,adjective,trung bình
aware,adjective,nhận thức
brief,adjective,ngắn gọn
broad,adjective,rộng
capable,adjective,có khả năng
careful,adjective,cẩn thận
casual,adjective,bình thường
cheap,adjective,rẻ
creative,adjective,sáng tạo
critical,adjective,quan trọng
curious,adjective,tò mò
cute,adjective,dễ thương
daily,adjective,hàng ngày
decent,adjective,tử tế
democratic,adjective,dân chủ
dependent,adjective,phụ thuộc
desperate,adjective,tuyệt vọng
detailed,adjective,chi tiết
different,adjective,khác
difficult,adjective,khó khăn
dynamic,adjective,năng động
educational,adjective,giáo dục
emotional,adjective,cảm xúc
environmental,adjective,môi trường
equal,adjective,bình đẳng
essential,adjective,thiết yếu
excellent,adjective,xuất sắc
excited,adjective,phấn khích
exclusive,adjective,độc quyền
expensive,adjective,đắt tiền
experienced,adjective,có kinh nghiệm
expert,adjective,chuyên gia
extreme,adjective,cực đoan
familiar,adjective,quen thuộc
famous,adjective,nổi tiếng
fantastic,adjective,tuyệt vời
flexible,adjective,linh hoạt
foreign,adjective,ngoại quốc
formal,adjective,trang trọng
friendly,adjective,thân thiện
fundamental,adjective,cơ bản
generous,adjective,hào phóng
genuine,adjective,chân thành
gorgeous,adjective,lộng lẫy
gradual,adjective,dần dần
grateful,adjective,biết ơn
historical,adjective,lịch sử
honest,adjective,trung thực
huge,adjective,khổng lồ
ideal,adjective,lý tưởng
immediate,adjective,ngay lập tức
impressive,adjective,ấn tượng
incredible,adjective,không thể tin được
individual,adjective,cá nhân
industrial,adjective,công nghiệp
inevitable,adjective,không thể tránh khỏi
infinite,adjective,vô hạn
innocent,adjective,vô tội
intelligent,adjective,thông minh
intense,adjective,mãnh liệt
internal,adjective,nội bộ
logical,adjective,hợp lý
massive,adjective,khổng lồ
meaningful,adjective,có ý nghĩa
mental,adjective,tinh thần
military,adjective,quân sự
minimal,adjective,tối thiểu
mutual,adjective,lẫn nhau
narrow,adjective,hẹp
neutral,adjective,trung lập
obvious,adjective,hiển nhiên
official,adjective,chính thức
ordinary,adjective,bình thường
organized,adjective,có tổ chức
outstanding,adjective,xuất sắc
overall,adjective,tổng thể
particular,adjective,đặc biệt
peaceful,adjective,hòa bình
permanent,adjective,vĩnh viễn
pleasant,adjective,dễ chịu
practical,adjective,thực tế
precise,adjective,chính xác
previous,adjective,trước đây
primary,adjective,chính yếu
productive,adjective,năng suất
profound,adjective,sâu sắc
progressive,adjective,tiến bộ
proper,adjective,đúng đắn
proud,adjective,tự hào
pure,adjective,thuần túy
rational,adjective,hợp lý
reasonable,adjective,hợp lý
relative,adjective,tương đối
relevant,adjective,phù hợp
reliable,adjective,đáng tin cậy
remarkable,adjective,đáng chú ý
responsible,adjective,có trách nhiệm
rural,adjective,nông thôn
secondary,adjective,thứ yếu
sensitive,adjective,nhạy cảm
separate,adjective,riêng biệt
severe,adjective,nghiêm trọng
sharp,adjective,sắc nét
short,adjective,ngắn
skilled,adjective,có kỹ năng
slight,adjective,nhỏ
spiritual,adjective,tâm linh
stable,adjective,ổn định
standard,adjective,tiêu chuẩn
strict,adjective,nghiêm khắc
substantial,adjective,đáng kể
subtle,adjective,tinh tế
suitable,adjective,phù hợp
superior,adjective,vượt trội
sustainable,adjective,bền vững
technical,adjective,kỹ thuật
temporary,adjective,tạm thời
terrible,adjective,khủng khiếp
theoretical,adjective,lý thuyết
typical,adjective,điển hình
uncertain,adjective,không chắc chắn
unexpected,adjective,bất ngờ
unique,adjective,độc đáo
universal,adjective,phổ quát
unlikely,adjective,không có khả năng
urban,adjective,đô thị
useful,adjective,có ích
various,adjective,khác nhau
violent,adjective,bạo lực
vital,adjective,quan trọng
voluntary,adjective,tự nguyện
vulnerable,adjective,dễ bị tổn thương
willing,adjective,sẵn lòng
wise,adjective,khôn ngoan
wonderful,adjective,tuyệt vời
worldwide,adjective,toàn thế giới
worthy,adjective,xứng đáng
now,adverb,bây giờ
also,adverb,cũng
just,adverb,vừa
very,adverb,rất
even,adverb,thậm chí
well,adverb,tốt
back,adverb,trở lại
here,adverb,ở đây
still,adverb,vẫn
up,adverb,lên
only,adverb,chỉ
then,adverb,sau đó
out,adverb,ra ngoài
more,adverb,thêm
so,adverb,vì vậy
yet,adverb,chưa
always,adverb,luôn luôn
never,adverb,không bao giờ
often,adverb,thường xuyên
sometimes,adverb,đôi khi
usually,adverb,thường
already,adverb,đã rồi
again,adverb,lại
away,adverb,đi xa
too,adverb,cũng vậy
really,adverb,thực sự
actually,adverb,thực ra
almost,adverb,gần như
together,adverb,cùng nhau
simply,adverb,đơn giản
quite,adverb,khá
there,adverb,ở đó
around,adverb,xung quanh
once,adverb,một lần
down,adverb,xuống
maybe,adverb,có lẽ
perhaps,adverb,có lẽ
certainly,adverb,chắc chắn
definitely,adverb,dứt khoát
especially,adverb,đặc biệt
finally,adverb,cuối cùng
recently,adverb,gần đây
quickly,adverb,nhanh chóng
slowly,adverb,chậm chạp
carefully,adverb,cẩn thận
suddenly,adverb,đột ngột
clearly,adverb,rõ ràng
directly,adverb,trực tiếp
easily,adverb,dễ dàng
hardly,adverb,hầu như không
highly,adverb,rất
largely,adverb,phần lớn
likely,adverb,có khả năng
mainly,adverb,chủ yếu
nearly,adverb,gần như
partly,adverb,một phần
perfectly,adverb,hoàn toàn
possibly,adverb,có thể
previously,adverb,trước đây
properly,adverb,đúng cách
publicly,adverb,công khai
regularly,adverb,thường xuyên
relatively,adverb,tương đối
repeatedly,adverb,nhiều lần
roughly,adverb,ước chừng
seriously,adverb,nghiêm túc
significantly,adverb,đáng kể
slightly,adverb,hơi
specifically,adverb,cụ thể
strongly,adverb,mạnh mẽ
successfully,adverb,thành công
typically,adverb,thường
unfortunately,adverb,thật không may
widely,adverb,rộng rãi
absolutely,adverb,hoàn toàn
accordingly,adverb,theo đó
accurately,adverb,chính xác
additionally,adverb,thêm vào đó
adequately,adverb,đầy đủ
aggressively,adverb,hung hăng
alternatively,adverb,thay thế
amazingly,adverb,đáng kinh ngạc
annually,adverb,hàng năm
apparently,adverb,rõ ràng là
appropriately,adverb,phù hợp
approximately,adverb,khoảng
arguably,adverb,có thể nói là
automatically,adverb,tự động
basically,adverb,về cơ bản
briefly,adverb,ngắn gọn
broadly,adverb,rộng rãi
carefully,adverb,cẩn thận
centrally,adverb,trung tâm
collectively,adverb,tập thể
commonly,adverb,phổ biến
completely,adverb,hoàn toàn
consistently,adverb,nhất quán
constantly,adverb,liên tục
continuously,adverb,liên tục
correctly,adverb,chính xác
currently,adverb,hiện tại
deeply,adverb,sâu sắc
deliberately,adverb,cố tình
differently,adverb,khác nhau
dramatically,adverb,đáng kể
effectively,adverb,hiệu quả
efficiently,adverb,hiệu quả
equally,adverb,bình đẳng
essentially,adverb,về cơ bản
eventually,adverb,cuối cùng
evidently,adverb,rõ ràng
exactly,adverb,chính xác
exclusively,adverb,độc quyền
explicitly,adverb,rõ ràng
extensively,adverb,rộng rãi
extremely,adverb,cực kỳ
fairly,adverb,khá
frequently,adverb,thường xuyên
fully,adverb,đầy đủ
fundamentally,adverb,về cơ bản
generally,adverb,nói chung
gradually,adverb,dần dần
greatly,adverb,rất
historically,adverb,về mặt lịch sử
honestly,adverb,thành thật
hugely,adverb,rất lớn
immediately,adverb,ngay lập tức
importantly,adverb,quan trọng hơn
increasingly,adverb,ngày càng
independently,adverb,độc lập
inevitable,adverb,không thể tránh khỏi
initially,adverb,ban đầu
internationally,adverb,quốc tế
jointly,adverb,cùng nhau
literally,adverb,theo nghĩa đen
locally,adverb,địa phương
logically,adverb,hợp lý
mentally,adverb,về mặt tinh thần
minimally,adverb,tối thiểu
moderately,adverb,vừa phải
mutually,adverb,lẫn nhau
naturally,adverb,tự nhiên
normally,adverb,bình thường
notably,adverb,đáng chú ý
obviously,adverb,rõ ràng
occasionally,adverb,thỉnh thoảng
officially,adverb,chính thức
openly,adverb,cởi mở
originally,adverb,ban đầu
overall,adverb,nhìn chung
particularly,adverb,đặc biệt
permanently,adverb,vĩnh viễn
physically,adverb,về mặt thể chất
politically,adverb,về mặt chính trị
precisely,adverb,chính xác
primarily,adverb,chủ yếu
probably,adverb,có lẽ
progressively,adverb,ngày càng
promptly,adverb,nhanh chóng
purely,adverb,thuần túy
rapidly,adverb,nhanh chóng
rationally,adverb,hợp lý
reasonably,adverb,hợp lý
simultaneously,adverb,đồng thời
socially,adverb,về mặt xã hội
solely,adverb,duy nhất
somehow,adverb,bằng cách nào đó
somewhere,adverb,ở đâu đó
strictly,adverb,nghiêm ngặt
substantially,adverb,đáng kể
technically,adverb,về mặt kỹ thuật
thoroughly,adverb,kỹ lưỡng
traditionally,adverb,theo truyền thống
ultimately,adverb,cuối cùng
uniformly,adverb,đồng đều
uniquely,adverb,độc đáo
universally,adverb,phổ quát
urgently,adverb,cấp bách
virtually,adverb,hầu như
voluntarily,adverb,tự nguyện
boyfriend,noun,bạn trai
girlfriend,noun,bạn gái
husband,noun,chồng
wife,noun,vợ
son,noun,con trai
daughter,noun,con gái
baby,noun,em bé
grandfather,noun,ông nội
grandmother,noun,bà nội
cousin,noun,anh chị em họ
neighbor,noun,hàng xóm
colleague,noun,đồng nghiệp
boss,noun,sếp
manager,noun,quản lý
director,noun,giám đốc
engineer,noun,kỹ sư
doctor,noun,bác sĩ
nurse,noun,y tá
lawyer,noun,luật sư
scientist,noun,nhà khoa học
artist,noun,nghệ sĩ
musician,noun,nhạc sĩ
journalist,noun,nhà báo
soldier,noun,người lính
pilot,noun,phi công
chef,noun,đầu bếp
farmer,noun,nông dân
driver,noun,tài xế
athlete,noun,vận động viên
actor,noun,diễn viên
singer,noun,ca sĩ
dancer,noun,vũ công
programmer,noun,lập trình viên
apartment,noun,căn hộ
kitchen,noun,nhà bếp
bathroom,noun,phòng tắm
bedroom,noun,phòng ngủ
garage,noun,nhà để xe
roof,noun,mái nhà
wall,noun,bức tường
ceiling,noun,trần nhà
elevator,noun,thang máy
basement,noun,tầng hầm
balcony,noun,ban công
keyboard,noun,bàn phím
screen,noun,màn hình
printer,noun,máy in
camera,noun,máy ảnh
television,noun,truyền hình
radio,noun,đài phát thanh
speaker,noun,loa
battery,noun,pin
charger,noun,bộ sạc
internet,noun,internet
website,noun,trang web
password,noun,mật khẩu
deadline,noun,thời hạn
salary,noun,lương
bonus,noun,tiền thưởng
contract,noun,hợp đồng
invoice,noun,hóa đơn
tax,noun,thuế
loan,noun,khoản vay
debt,noun,nợ
expense,noun,chi phí
revenue,noun,doanh thu
savings,noun,tiền tiết kiệm
shop,noun,cửa hàng
mall,noun,trung tâm thương mại
restaurant,noun,nhà hàng
cafe,noun,quán cà phê
gym,noun,phòng tập thể dục
park,noun,công viên
library,noun,thư viện
museum,noun,bảo tàng
theater,noun,nhà hát
cinema,noun,rạp chiếu phim
airport,noun,sân bay
station,noun,ga tàu
bridge,noun,cây cầu
highway,noun,đường cao tốc
bus,noun,xe buýt
train,noun,tàu hỏa
bicycle,noun,xe đạp
motorcycle,noun,xe máy
truck,noun,xe tải
airplane,noun,máy bay
rice,noun,cơm
bread,noun,bánh mì
meat,noun,thịt
fish,noun,cá
vegetable,noun,rau
fruit,noun,trái cây
milk,noun,sữa
egg,noun,trứng
sugar,noun,đường
salt,noun,muối
juice,noun,nước trái cây
tea,noun,trà
coffee,noun,cà phê
breakfast,noun,bữa sáng
lunch,noun,bữa trưa
dinner,noun,bữa tối
recipe,noun,công thức
shirt,noun,áo sơ mi
pants,noun,quần
dress,noun,váy
coat,noun,áo khoác
shoes,noun,giày
hat,noun,mũ
bag,noun,túi xách
wallet,noun,ví tiền
forest,noun,rừng
mountain,noun,núi
beach,noun,bãi biển
ocean,noun,đại dương
desert,noun,sa mạc
lake,noun,hồ
waterfall,noun,thác nước
soil,noun,đất
rain,noun,mưa
snow,noun,tuyết
wind,noun,gió
storm,noun,bão
rainbow,noun,cầu vồng
earthquake,noun,động đất
pollution,noun,ô nhiễm
dog,noun,chó
cat,noun,mèo
horse,noun,ngựa
cow,noun,bò
sheep,noun,cừu
chicken,noun,gà
rabbit,noun,thỏ
lion,noun,sư tử
tiger,noun,hổ
elephant,noun,voi
wolf,noun,sói
eagle,noun,đại bàng
snake,noun,rắn
butterfly,noun,bướm
bee,noun,ong
medicine,noun,thuốc
vaccine,noun,vaccine
surgery,noun,phẫu thuật
symptom,noun,triệu chứng
disease,noun,bệnh
infection,noun,nhiễm trùng
therapy,noun,liệu pháp
treatment,noun,điều trị
prevention,noun,phòng ngừa
parliament,noun,quốc hội
court,noun,tòa án
constitution,noun,hiến pháp
election,noun,bầu cử
candidate,noun,ứng viên
flag,noun,cờ
border,noun,biên giới
gravity,noun,trọng lực
pressure,noun,áp suất
electricity,noun,điện
atom,noun,nguyên tử
molecule,noun,phân tử
experiment,noun,thí nghiệm
hypothesis,noun,giả thuyết
formula,noun,công thức
graph,noun,đồ thị
average,noun,trung bình
percentage,noun,tỷ lệ phần trăm
square,noun,hình vuông
circle,noun,hình tròn
triangle,noun,hình tam giác
database,noun,cơ sở dữ liệu
server,noun,máy chủ
algorithm,noun,thuật toán
bug,noun,lỗi
interface,noun,giao diện
file,noun,tập tin
download,noun,tải xuống
upload,noun,tải lên
video,noun,video
photo,noun,ảnh
startup,noun,khởi nghiệp
entrepreneur,noun,doanh nhân
inflation,noun,lạm phát
recession,noun,suy thái
trend,noun,xu hướng
forecast,noun,dự báo
accelerate,verb,tăng tốc
adjust,verb,điều chỉnh
allocate,verb,phân bổ
arrange,verb,sắp xếp
assess,verb,đánh giá
attach,verb,đính kèm
calculate,verb,tính toán
cancel,verb,hủy bỏ
classify,verb,phân loại
compile,verb,biên soạn
construct,verb,xây dựng
contact,verb,liên lạc
convert,verb,chuyển đổi
criticize,verb,chỉ trích
decrease,verb,giảm
deposit,verb,gửi tiền
detect,verb,phát hiện
diagnose,verb,chẩn đoán
distribute,verb,phân phối
enhance,verb,nâng cao
estimate,verb,ước tính
exchange,verb,trao đổi
execute,verb,thực thi
experiment,verb,thử nghiệm
export,verb,xuất khẩu
filter,verb,lọc
fund,verb,tài trợ
import,verb,nhập khẩu
install,verb,cài đặt
locate,verb,xác định vị trí
maximize,verb,tối đa hóa
minimize,verb,giảm thiểu
monitor,verb,theo dõi
navigate,verb,điều hướng
notify,verb,thông báo
operate,verb,vận hành
optimize,verb,tối ưu hóa
plant,verb,trồng
process,verb,xử lý
program,verb,lập trình
purchase,verb,mua
qualify,verb,đủ điều kiện
recover,verb,hồi phục
register,verb,đăng ký
regulate,verb,điều tiết
repair,verb,sửa chữa
reserve,verb,đặt trước
restore,verb,khôi phục
review,verb,xem xét
secure,verb,bảo mật
store,verb,lưu trữ
summarize,verb,tóm tắt
switch,verb,chuyển
track,verb,theo dõi
transfer,verb,chuyển khoản
trigger,verb,kích hoạt
access,verb,truy cập
archive,verb,lưu trữ
authenticate,verb,xác thực
automate,verb,tự động hóa
configure,verb,cấu hình
debug,verb,gỡ lỗi
deploy,verb,triển khai
encrypt,verb,mã hóa
simulate,verb,mô phỏng
innovative,adjective,sáng tạo
sustainable,adjective,bền vững
efficient,adjective,hiệu quả
organic,adjective,hữu cơ
radioactive,adjective,phóng xạ
electric,adjective,điện
biological,adjective,sinh học
chronic,adjective,mãn tính
infectious,adjective,lây nhiễm
terminal,adjective,giai đoạn cuối
mandatory,adjective,bắt buộc
confidential,adjective,bí mật
transparent,adjective,minh bạch
authoritarian,adjective,độc đoán
conservative,adjective,bảo thủ
secular,adjective,thế tục
ethical,adjective,đạo đức
legal,adjective,hợp pháp
illegal,adjective,bất hợp pháp
affordable,adjective,giá cả phải chăng
competitive,adjective,cạnh tranh
profitable,adjective,có lời
commercial,adjective,thương mại
agricultural,adjective,nông nghiệp
intellectual,adjective,trí thức
analytical,adjective,phân tích
controversial,adjective,gây tranh cãi
dominant,adjective,chiếm ưu thế
explicit,adjective,rõ ràng
implicit,adjective,ngầm định
inadequate,adjective,không đủ
inferior,adjective,kém hơn
intermediate,adjective,trung gian
multiple,adjective,nhiều
partial,adjective,một phần
passive,adjective,thụ động
preliminary,adjective,sơ bộ
sequential,adjective,tuần tự
sufficient,adjective,đủ
uniform,adjective,đồng đều
valid,adjective,hợp lệ
vertical,adjective,thẳng đứng
horizontal,adjective,nằm ngang
parallel,adjective,song song
rapidly,adverb,nhanh chóng
boldly,adverb,dũng cảm
wisely,adverb,khôn ngoan
patiently,adverb,kiên nhẫn
quietly,adverb,yên lặng
loudly,adverb,ồn ào
gently,adverb,nhẹ nhàng
firmly,adverb,vững chắc
freely,adverb,tự do
vaguely,adverb,mơ hồ
thoroughly,adverb,triệt để
partially,adverb,một phần
mostly,adverb,chủ yếu
barely,adverb,vừa đủ
seldom,adverb,hiếm khi
rarely,adverb,hiếm khi
continuously,adverb,liên tục
intermittently,adverb,từng đợt
periodically,adverb,định kỳ
temporarily,adverb,tạm thời
instantly,adverb,ngay lập tức
steadily,adverb,đều đặn
abruptly,adverb,đột ngột
accidentally,adverb,vô tình
intentionally,adverb,cố ý
voluntarily,adverb,tự nguyện
forcefully,adverb,mạnh mẽ
softly,adverb,nhẹ nhàng
harshly,adverb,gay gắt
kindly,adverb,tử tế
rudely,adverb,thô lỗ
politely,adverb,lịch sự
formally,adverb,chính thức
informally,adverb,không chính thức
secretly,adverb,bí mật
collectively,adverb,tập thể
individually,adverb,cá nhân
separately,adverb,riêng biệt
randomly,adverb,ngẫu nhiên
systematically,adverb,có hệ thống
manually,adverb,thủ công
digitally,adverb,kỹ thuật số
nationally,adverb,quốc gia
regionally,adverb,khu vực
financially,adverb,tài chính
economically,adverb,kinh tế
culturally,adverb,văn hóa
environmentally,adverb,môi trường
professionally,adverb,chuyên nghiệp
ethically,adverb,đạo đức
morally,adverb,về mặt đạo đức
legally,adverb,hợp pháp
illegally,adverb,bất hợp pháp
strategically,adverb,chiến lược
practically,adverb,thực tế
scientifically,adverb,khoa học
statistically,adverb,thống kê
critically,adverb,phê phán
analytically,adverb,phân tích
proactively,adverb,chủ động
aggressively,adverb,hung hăng
defensively,adverb,phòng thủ
competitively,adverb,cạnh tranh
cooperatively,adverb,hợp tác
actively,adverb,tích cực
passively,adverb,thụ động
directly,adverb,trực tiếp
indirectly,adverb,gián tiếp
explicitly,adverb,rõ ràng
implicitly,adverb,ngầm
objectively,adverb,khách quan
subjectively,adverb,chủ quan
optimistically,adverb,lạc quan
pessimistically,adverb,bi quan
confidently,adverb,tự tin
hesitantly,adverb,do dự
enthusiastically,adverb,nhiệt tình
reluctantly,adverb,miễn cưỡng
eagerly,adverb,háo hức
cautiously,adverb,thận trọng
efficiently,adverb,hiệu quả
productively,adverb,năng suất
tooth,noun,răng
tongue,noun,lưỡi
shoulder,noun,vai
elbow,noun,khuỷu tay
knee,noun,đầu gối
ankle,noun,mắt cá chân
finger,noun,ngón tay
thumb,noun,ngón tay cái
palm,noun,lòng bàn tay
heel,noun,gót chân
toe,noun,ngón chân
chin,noun,cằm
cheek,noun,má
forehead,noun,trán
eyebrow,noun,lông mày
eyelash,noun,lông mi
nostril,noun,lỗ mũi
lip,noun,môi
neck,noun,cổ
chest,noun,ngực
hip,noun,hông
spine,noun,cột sống
rib,noun,xương sườn
heel,noun,gót
shadow,noun,cái bóng
reflection,noun,sự phản chiếu
imagination,noun,trí tưởng tượng
inspiration,noun,nguồn cảm hứng
ambition,noun,tham vọng
passion,noun,niềm đam mê
courage,noun,lòng dũng cảm
patience,noun,sự kiên nhẫn
confidence,noun,sự tự tin
friendship,noun,tình bạn
loyalty,noun,lòng trung thành
jealousy,noun,sự ghen tuông
anger,noun,sự tức giận
happiness,noun,hạnh phúc
sadness,noun,nỗi buồn
anxiety,noun,sự lo lắng
curiosity,noun,sự tò mò
gratitude,noun,lòng biết ơn
regret,noun,sự hối tiếc
shame,noun,sự xấu hổ
guilt,noun,cảm giác có tội
envy,noun,sự ghen tị
fear,noun,nỗi sợ hãi
joy,noun,niềm vui
excitement,noun,sự phấn khích
surprise,noun,sự ngạc nhiên
disgust,noun,sự ghê tởm
pride,noun,tự hào
relief,noun,sự nhẹ nhôm -> wait, "nhẹ nhõm" above is spelled as "nhẹ nhõm", let's make sure we accept both but use what user pasted
satisfaction,noun,sự thỏa mãn
frustration,noun,sự thất vọng
confusion,noun,sự bối rối
loneliness,noun,sự cô đơn
comfort,noun,sự thoải mái
worry,noun,sự lo lắng
stress,noun,căng thẳng
relaxation,noun,sự thư giãn
laughter,noun,tiếng cười
tear,noun,giọt nước mắt
smile,noun,nụ cười
gesture,noun,cử chỉ
hug,noun,cái ôm
kiss,noun,nụ hôn
handshake,noun,cái bắt tay
wave,noun,vẫy tay
nod,noun,cái gật đầu
wink,noun,cái nháy mắt
shrug,noun,cái nhún vai
frown,noun,cái cau mày
scream,noun,tiếng la hét
whisper,noun,tiếng thì thầm
lullaby,noun,bài hát ru
melody,noun,giai điệu
rhythm,noun,nhịp điệu
harmony,noun,sự hòa hợp
chorus,noun,điệp khúc
verse,noun,câu thơ
lyric,noun,lời bài hát
instrument,noun,nhạc cụ
guitar,noun,đàn guitar
piano,noun,đàn piano
violin,noun,đàn violin
drum,noun,trống
flute,noun,sáo
concert,noun,buổi hòa nhạc
opera,noun,opera
ballet,noun,ba lê
sculpture,noun,điêu khắc
painting,noun,bức tranh sơn dầu
portrait,noun,bức chân dung
landscape,noun,phong cảnh
photograph,noun,bức ảnh
exhibition,noun,triển lãm
gallery,noun,phòng trưng bày
collection,noun,bộ sưu tập
monument,noun,đài tưởng niệm
architecture,noun,kiến trúc
cathedral,noun,nhà thờ lớn
temple,noun,ngôi đền
mosque,noun,nhà thờ Hồi giáo
shrine,noun,đền thờ
cemetery,noun,nghĩa trang
funeral,noun,đám tang
burial,noun,lễ chôn cất
ceremony,noun,buổi lễ
ritual,noun,nghi lễ
festival,noun,lễ hội
celebration,noun,buổi kỷ niệm
parade,noun,cuộc diễu hành
carnival,noun,lễ hội hóa trang
firework,noun,pháo hoa
cake,noun,bánh kem
candle,noun,ngọn nến
gift,noun,món quà
decoration,noun,trang trí
costume,noun,trang phục
mask,noun,mặt nạ
ticket,noun,vé
invitation,noun,lời mời
guest,noun,khách mời
host,noun,chủ nhà
toast,noun,lời chúc
anniversary,noun,ngày kỷ niệm
wedding,noun,đám cưới
engagement,noun,lễ đính hôn
honeymoon,noun,tuần trăng mật
divorce,noun,ly hôn
birthday,noun,sinh nhật
childhood,noun,thời thơ ấu
adolescence,noun,tuổi thiếu niên
adulthood,noun,tuổi trưởng thành
retirement,noun,sự nghỉ hưu
obituary,noun,cáo phó
heritage,noun,di sản
ancestor,noun,tổ tiên
descendant,noun,con cháu
generation,noun,thế hệ
lineage,noun,dòng dõi
tribe,noun,bộ lạc
clan,noun,tộc
dialect,noun,phương ngữ
accent,noun,giọng nói
pronunciation,noun,phát âm
vocabulary,noun,từ vựng
grammar,noun,ngữ pháp
syntax,noun,cú pháp
idiom,noun,thành ngữ
proverb,noun,tục ngữ
metaphor,noun,ẩn dụ
translation,noun,bản dịch
interpretation,noun,sự giải thích
abbreviation,noun,chữ viết tắt
prefix,noun,tiền tố
suffix,noun,hậu tố
syllable,noun,âm tiết
alphabet,noun,bảng chữ cái
consonant,noun,phụ âm
vowel,noun,nguyên âm
sentence,noun,câu
paragraph,noun,đoạn văn
chapter,noun,chương
bibliography,noun,danh mục tài liệu
footnote,noun,chú thích
headline,noun,tiêu đề
summary,noun,tóm tắt
conclusion,noun,kết luận
introduction,noun,giới thiệu
argument,noun,lý luận
evidence,noun,bằng chứng
quote,noun,trích dẫn
citation,noun,trích dẫn
reference,noun,tài liệu tham khảo
hypothesis,noun,giả thuyết
thesis,noun,luận văn
dissertation,noun,luận án
journal,noun,tạp chí khoa học
conference,noun,hội nghị
seminar,noun,hội thảo
workshop,noun,hội thảo thực hành
debate,noun,cuộc tranh luận
lecture,noun,bài giảng
tutorial,noun,hướng dẫn
brochure,noun,tờ rơi
catalog,noun,danh mục
manual,noun,sách hướng dẫn
report,noun,báo cáo
survey,noun,cuộc khảo sát
questionnaire,noun,bảng câu hỏi
feedback,noun,phản hồi
review,noun,đánh giá
rating,noun,xếp hạng
rank,noun,thứ hạng
prize,noun,giải thưởng
award,noun,giải thưởng
competition,noun,cuộc thi
tournament,noun,giải đấu
championship,noun,giải vô địch
league,noun,giải đấu
semifinal,noun,bán kết
final,noun,trận chung kết
score,noun,điểm số
goal,noun,bàn thắng
penalty,noun,hình phạt
referee,noun,trọng tài
audience,noun,khán giả
fan,noun,người hâm mộ
coach,noun,huấn luyện viên
captain,noun,đội trưởng
champion,noun,nhà vô địch
record,noun,kỷ lục
sprint,noun,chạy nước rút
marathon,noun,cuộc đua marathon
swimming,noun,bơi lội
cycling,noun,đạp xe
hiking,noun,leo núi
climbing,noun,leo trèo
sailing,noun,chèo thuyền
surfing,noun,lướt sóng
skiing,noun,trượt tuyết
boxing,noun,quyền anh
wrestling,noun,đấu vật
archery,noun,bắn cung
fencing,noun,đấu kiếm
gymnastics,noun,thể dục dụng cụ
yoga,noun,yoga
meditation,noun,thiền định
philosophy,noun,triết học
logic,noun,logic
ethics,noun,đạo đức học
aesthetics,noun,mỹ học
metaphysics,noun,siêu hình học
consciousness,noun,ý thức
perception,noun,nhận thức
intuition,noun,trực giác
reasoning,noun,lý luận
judgment,noun,phán đoán
criticism,noun,phê bình
analysis,noun,phân tích
synthesis,noun,tổng hợp
evaluation,noun,đánh giá
creativity,noun,tính sáng tạo
intelligence,noun,trí tuệ
literacy,noun,khả năng đọc viết
numeracy,noun,khả năng tính toán
fluency,noun,sự lưu loát
proficiency,noun,sự thành thạo
expertise,noun,chuyên môn
mastery,noun,sự tinh thông
certification,noun,chứng nhận
accreditation,noun,kiểm định
qualification,noun,bằng cấp
competition,noun,sự cạnh tranh
innovation,noun,sự đổi mới
disruption,noun,sự gián đoạn
transformation,noun,sự biến đổi
revolution,noun,cuộc cách mạng
evolution,noun,sự tiến hóa
adaptation,noun,sự thích nghi
progress,noun,sự tiến bộ
modernization,noun,hiện đại hóa
globalization,noun,toàn cầu hóa
digitalization,noun,số hóa
automation,noun,tự động hóa
urbanization,noun,đô thị hóa
industrialization,noun,công nghiệp hóa
colonization,noun,thuộc địa hóa
civilization,noun,nền văn minh
heritage,noun,di sản
archive,noun,kho lưu trữ
record,noun,tài liệu
chronicle,noun,biên niên sử
legend,noun,truyền thuyết
myth,noun,thần thoại
folklore,noun,văn hóa dân gian
fable,noun,ngụ ngôn
parable,noun,dụ ngôn
allegory,noun,ẩn dụ
satire,noun,châm biếm
comedy,noun,hài kịch
tragedy,noun,bi kịch
drama,noun,kịch
fantasy,noun,kỳ ảo
horror,noun,kinh dị
mystery,noun,trinh thám
adventure,noun,phiêu lưu
romance,noun,lãng mạn
thriller,noun,giật gân
biography,noun,tiểu sử
autobiography,noun,tự truyện
anthology,noun,tuyển tập
encyclopedia,noun,bách khoa toàn thư
almanac,noun,niên giám
atlas,noun,tập bản đồ
glossary,noun,bảng thuật ngữ
index,noun,chỉ mục
appendix,noun,phụ lục
foreword,noun,lời nói đầu
epilogue,noun,lời bạt
prologue,noun,lời mở đầu
decorate,verb,trang trí
celebrate,verb,ăn mừng
organize,verb,tổ chức
plan,verb,lên kế hoạch
supervise,verb,giám sát
coordinate,verb,điều phối
communicate,verb,giao tiếp
collaborate,verb,cộng tác
negotiate,verb,đàm phán
mediate,verb,hòa giải
facilitate,verb,tạo điều kiện
motivate,verb,tạo động lực
inspire,verb,truyền cảm hứng
educate,verb,giáo dục
train,verb,huấn luyện
mentor,verb,hướng dẫn
coach,verb,huấn luyện
advise,verb,tư vấn
recommend,verb,giới thiệu
refer,verb,giới thiệu
delegate,verb,giao phó
empower,verb,trao quyền
enable,verb,tạo khả năng
simplify,verb,đơn giản hóa
clarify,verb,làm rõ
illustrate,verb,minh họa
demonstrate,verb,trình bày
present,verb,trình bày
announce,verb,thông báo
broadcast,verb,phát sóng
publish,verb,xuất bản
distribute,verb,phân phối
share,verb,chia sẻ
contribute,verb,đóng góp
support,verb,ủng hộ
endorse,verb,chứng thực
sponsor,verb,tài trợ
fund,verb,cấp vốn
invest,verb,đầu tư
allocate,verb,phân bổ
prioritize,verb,ưu tiên
schedule,verb,lên lịch
delegate,verb,ủy quyền
automate,verb,tự động hóa
digitize,verb,số hóa
modernize,verb,hiện đại hóa
streamline,verb,tối giản hóa
standardize,verb,tiêu chuẩn hóa
customize,verb,tùy chỉnh
personalize,verb,cá nhân hóa
adapt,verb,điều chỉnh
modify,verb,sửa đổi
amend,verb,sửa đổi
revise,verb,xem lại
refine,verb,tinh chỉnh
polish,verb,đánh bóng
perfect,verb,hoàn thiện
master,verb,thành thạo
excel,verb,xuất sắc
achieve,verb,hoàn thành
accomplish,verb,thực hiện
fulfill,verb,thực hiện
realize,verb,thực hiện
attain,verb,đạt được
reach,verb,đạt tới
surpass,verb,vượt qua
exceed,verb,vượt quá
outperform,verb,vượt trội
compete,verb,cạnh tranh
challenge,verb,thách thức
struggle,verb,đấu tranh
persist,verb,kiên trì
persevere,verb,bền bỉ
endure,verb,chịu đựng
tolerate,verb,chịu đựng
accept,verb,chấp nhận
embrace,verb,đón nhận
adopt,verb,áp dụng
incorporate,verb,kết hợp
merge,verb,sáp nhập
blend,verb,pha trộn
mix,verb,trộn
integrate,verb,tích hợp
unify,verb,thống nhất
consolidate,verb,hợp nhất
strengthen,verb,tăng cường
reinforce,verb,củng cố
boost,verb,thúc đẩy
enhance,verb,nâng cao
upgrade,verb,nâng cấp
expand,verb,mở rộng
grow,verb,phát triển
scale,verb,mở rộng quy mô
multiply,verb,nhân lên
magnify,verb,phóng đại
amplify,verb,khuếch đại
accelerate,verb,đẩy nhanh
hasten,verb,thúc đẩy
rush,verb,vội vàng
hurry,verb,vội vàng
delay,verb,trì hoãn
postpone,verb,hoãn lại
abandon,verb,từ bỏ
discard,verb,loại bỏ
eliminate,verb,loại bỏ
remove,verb,xóa bỏ
delete,verb,xóa
erase,verb,xóa bỏ
clear,verb,làm sạch
clean,verb,làm sạch
maintain,verb,bảo trì
preserve,verb,bảo tồn
protect,verb,bảo vệ
defend,verb,bảo vệ
guard,verb,canh gác
secure,verb,bảo đảm
lock,verb,khóa
unlock,verb,mở khóa
activate,verb,kích hoạt
deactivate,verb,vô hiệu hóa
block,verb,chặn
unblock,verb,bỏ chặn
enable,verb,kích hoạt
disable,verb,vô hiệu hóa
connect,verb,kết nối
disconnect,verb,ngắt kết nối
synchronize,verb,đồng bộ hóa
backup,verb,sao lưu
restore,verb,khôi phục
refresh,verb,làm mới
reload,verb,tải lại
restart,verb,khởi động lại
shutdown,verb,tắt máy
boot,verb,khởi động
crash,verb,bị treo
freeze,verb,đóng băng
lag,verb,chậm trễ
buffer,verb,đệm
stream,verb,truyền phát
record,verb,ghi lại
encode,verb,mã hóa
decode,verb,giải mã
compress,verb,nén
decompress,verb,giải nén
zip,verb,nén tệp
unzip,verb,giải nén tệp
scan,verb,quét
print,verb,in
copy,verb,sao chép
paste,verb,dán
drag,verb,kéo
drop,verb,thả
click,verb,nhấp
double-click,verb,nhấp đúp
scroll,verb,cuộn
zoom,verb,phóng to
resize,verb,thay đổi kích thước
rotate,verb,xoay
flip,verb,lật
crop,verb,cắt xén
align,verb,căn chỉnh
indent,verb,thụt đầu dòng
highlight,verb,tô sáng
underline,verb,gạch chân
bold,verb,in đậm
italicize,verb,in nghiêng
format,verb,định dạng
export,verb,xuất
import,verb,nhập
split,verb,chia tách
sort,verb,sắp xếp
filter,verb,lọc
search,verb,tìm kiếm
replace,verb,thay thế
undo,verb,hoàn tác
redo,verb,làm lại
save,verb,lưu
autosave,verb,tự động lưu
publish,verb,xuất bản
preview,verb,xem trước
render,verb,kết xuất
compile,verb,biên dịch
run,verb,chạy
debug,verb,gỡ lỗi
test,verb,kiểm thử
deploy,verb,triển khai
monitor,verb,giám sát
alert,verb,cảnh báo
notify,verb,thông báo
log,verb,ghi nhật ký
report,verb,báo cáo
analyze,verb,phân tích
visualize,verb,trực quan hóa
forecast,verb,dự báo
predict,verb,dự đoán
recommend,verb,đề xuất
personalize,verb,cá nhân hóa
automate,verb,tự động
integrate,verb,tích hợp
ambiguous,adjective,mơ hồ
autonomous,adjective,tự trị
bilateral,adjective,song phương
catastrophic,adjective,thảm khốc
coherent,adjective,mạch lạc
collaborative,adjective,cộng tác
compatible,adjective,tương thích
complementary,adjective,bổ sung
concurrent,adjective,đồng thời
consequential,adjective,quan trọng
constructive,adjective,xây dựng
cumulative,adjective,tích lũy
decisive,adjective,quyết đoán
dedicated,adjective,tận tụy
deliberate,adjective,cố ý
distinctive,adjective,đặc trưng
diverse,adjective,đa dạng
durable,adjective,bền lâu
elaborate,adjective,công phu
emerging,adjective,mới nổi
empirical,adjective,thực nghiệm
enormous,adjective,khổng lồ
equitable,adjective,công bằng
exceptional,adjective,đặc biệt
exhaustive,adjective,toàn diện
feasible,adjective,khả thi
fragile,adjective,mong manh
genuine,adjective,chân thật
hierarchical,adjective,có thứ bậc
imminent,adjective,sắp xảy ra
inclusive,adjective,toàn diện
inherent,adjective,vốn có
integral,adjective,thiết yếu
interactive,adjective,tương tác
legitimate,adjective,hợp pháp
marginal,adjective,biên
measurable,adjective,có thể đo được
obsolete,adjective,lỗi thời
parallel,adjective,song song
persistent,adjective,kiên trì
plausible,adjective,hợp lý
predominant,adjective,chiếm ưu thế
preliminary,adjective,sơ bộ
prevalent,adjective,phổ biến
proactive,adjective,chủ động
proportional,adjective,tỷ lệ
qualitative,adjective,định tính
quantitative,adjective,định lượng
reactive,adjective,phản ứng
realistic,adjective,thực tế
redundant,adjective,dư thừa
renewable,adjective,có thể tái tạo
resilient,adjective,kiên cường
rigorous,adjective,nghiêm ngặt
scalable,adjective,có thể mở rộng
skeptical,adjective,hoài nghi
sophisticated,adjective,tinh vi
spontaneous,adjective,tự phát
straightforward,adjective,thẳng thắn
supportive,adjective,hỗ trợ
symmetric,adjective,đối xứng
transparent,adjective,minh bạch
ultimate,adjective,tối thượng
unified,adjective,thống nhất
unprecedented,adjective,chưa từng có
urgent,adjective,khẩn cấp
viable,adjective,khả thi
visionary,adjective,có tầm nhìn
volatile,adjective,biến động
straightforwardly,adverb,thẳng thắn
diligently,adverb,siêng năng
persistently,adverb,kiên trì
consistently,adverb,nhất quán
efficiently,adverb,hiệu quả
effectively,adverb,có hiệu lực
genuinely,adverb,thực sự
sincerely,adverb,thành thật
honestly,adverb,thành thật
transparently,adverb,minh bạch
responsibly,adverb,có trách nhiệm
ethically,adverb,có đạo đức
logically,adverb,hợp lý
systematically,adverb,có hệ thống
strategically,adverb,có chiến lược
creatively,adverb,sáng tạo
innovatively,adverb,đổi mới
collaboratively,adverb,cộng tác
independently,adverb,độc lập
proactively,adverb,chủ động
deliberately,adverb,thận trọng
urgently,adverb,khẩn cấp
cautiously,adverb,thận trọng
assertively,adverb,quyết đoán
emphatically,adverb,mạnh mẽ
comprehensively,adverb,toàn diện
meticulously,adverb,tỉ mỉ
precisely,adverb,chính xác
accurately,adverb,chính xác
adequately,adverb,thích đáng
appropriately,adverb,phù hợp
sufficiently,adverb,đầy đủ
excessively,adverb,quá mức
moderately,adverb,vừa phải
substantially,adverb,đáng kể
considerably,adverb,đáng kể
dramatically,adverb,một cách đáng kể
fundamentally,adverb,về cơ bản
inherently,adverb,vốn có
intrinsically,adverb,về bản chất
simultaneously,adverb,đồng thời
consequently,adverb,do đó
accordingly,adverb,theo đó
subsequently,adverb,sau đó
conversely,adverb,ngược lại
alternatively,adverb,ngoài ra
furthermore,adverb,hơn nữa
nevertheless,adverb,tuy nhiên
nonetheless,adverb,dù sao
moreover,adverb,hơn nữa
however,adverb,tuy nhiên
therefore,adverb,do đó
thus,adverb,do đó
hence,adverb,do đó
otherwise,adverb,nếu không
meanwhile,adverb,trong khi đó
afterwards,adverb,sau đó
beforehand,adverb,trước đó
indeed,adverb,thực vậy
certainly,adverb,chắc chắn
undoubtedly,adverb,không còn nghi ngờ
presumably,adverb,có lẽ
apparently,adverb,rõ ràng
evidently,adverb,hiển nhiên
arguably,adverb,có thể nói
supposedly,adverb,được cho là
allegedly,adverb,bị cáo buộc
reportedly,adverb,theo báo cáo
ideally,adverb,lý tưởng
realistically,adverb,thực tế
theoretically,adverb,lý thuyết
practically,adverb,thực dụng
literally,adverb,theo nghĩa đen
figuratively,adverb,theo nghĩa bóng
comparatively,adverb,tương đối
relatively,adverb,tương đối`;function Uy(){const i=S5.trim().split(`
`),l=[];for(let o=1;o<i.length;o++){const s=i[o].trim();if(!s)continue;const c=s.indexOf(",");if(c===-1)continue;const f=s.indexOf(",",c+1);if(f===-1)continue;const h=s.substring(0,c).trim(),m=s.substring(c+1,f).trim(),g=s.substring(f+1).trim();if(h&&g){if(h.toLowerCase()===g.toLowerCase())continue;l.push({word:h,type:m,vietnamese:g})}}return l}const xa={a:"a",à:"a",á:"a",ả:"a",ã:"a",ạ:"a",ă:"ă",ằ:"ă",ắ:"ă",ẳ:"ă",ẵ:"ă",ặ:"ă",â:"â",ầ:"â",ấ:"â",ẩ:"â",ẫ:"â",ậ:"â",e:"e",è:"e",é:"e",ẻ:"e",ẽ:"e",ẹ:"e",ê:"ê",ề:"ê",ế:"ê",ể:"ê",ễ:"ê",ệ:"ê",i:"i",ì:"i",í:"i",ỉ:"i",ĩ:"i",ị:"i",o:"o",ò:"o",ó:"o",ỏ:"o",õ:"o",ọ:"o",ô:"ô",ồ:"ô",ố:"ô",ổ:"ô",ỗ:"ô",ộ:"ô",ơ:"ơ",ờ:"ơ",ớ:"ơ",ở:"ơ",ỡ:"ơ",ợ:"ơ",u:"u",ù:"u",ú:"u",ủ:"u",ũ:"u",ụ:"u",ư:"ư",ừ:"ư",ứ:"ư",ử:"ư",ữ:"ư",ự:"ư",y:"y",ỳ:"y",ý:"y",ỷ:"y",ỹ:"y",ỵ:"y"};function j5(i){const l=i.normalize("NFC").toLowerCase(),o=new Set;for(const s of l)xa[s]&&o.add(xa[s]);return Array.from(o)}function A5(i){const l=i.normalize("NFC");let o="";for(const s of l)xa[s.toLowerCase()]?o+="_":o+=s;return o}function Gv(i,l=new Set,o=0){if(i.length<2)throw new Error("Not enough vocabulary items.");const s=i.map(x=>{let S=x.word.length;return(x.word.includes(" ")||x.word.includes("-"))&&(S+=6),{item:x,score:S,vowels:j5(x.vietnamese)}}).filter(x=>x.vowels.length>0);s.sort((x,S)=>x.score-S.score);const c=s.length,f=Math.max(80,Math.floor(c*.15)),h=Math.min(Math.floor(o/2)*15,c-f),m=Math.max(0,h),g=Math.min(m+f+Math.min(o*5,400),c),p=s.slice(m,g);for(let x=0;x<150;x++){const S=Math.floor(Math.random()*p.length),w=p[S];if(l.has(w.item.word))continue;const j=[...p].sort(()=>Math.random()-.5);for(const N of j){if(w.item.word===N.item.word)continue;const k=w.vowels.filter(C=>N.vowels.includes(C));if(k.length===1){const C=k[0],O=dc.filter(Q=>Q!==C&&!w.vowels.includes(Q)&&!N.vowels.includes(Q)).sort(()=>Math.random()-.5).slice(0,3),_=[C,...O].sort(()=>Math.random()-.5);return{word1:w.item,word2:N.item,word1Vowels:w.vowels,word2Vowels:N.vowels,commonVowels:k,correctAnswer:C,options:_}}}}const b=s.slice(0,g);for(let x=0;x<100;x++){const S=Math.floor(Math.random()*b.length),w=b[S];if(l.has(w.item.word))continue;const j=[...b].sort(()=>Math.random()-.5);for(const N of j){if(w.item.word===N.item.word)continue;const k=w.vowels.filter(C=>N.vowels.includes(C));if(k.length===1){const C=k[0],O=dc.filter(Q=>Q!==C&&!w.vowels.includes(Q)&&!N.vowels.includes(Q)).sort(()=>Math.random()-.5).slice(0,3),_=[C,...O].sort(()=>Math.random()-.5);return{word1:w.item,word2:N.item,word1Vowels:w.vowels,word2Vowels:N.vowels,commonVowels:k,correctAnswer:C,options:_}}}}for(let x=0;x<100;x++){const S=s[Math.floor(Math.random()*c)],w=s[Math.floor(Math.random()*c)];if(S.item.word===w.item.word)continue;const j=S.vowels.filter(N=>w.vowels.includes(N));if(j.length>0){const N=j[0],C=dc.filter(O=>O!==N&&!S.vowels.includes(O)&&!w.vowels.includes(O)).sort(()=>Math.random()-.5).slice(0,3),L=[N,...C].sort(()=>Math.random()-.5);return{word1:S.item,word2:w.item,word1Vowels:S.vowels,word2Vowels:w.vowels,commonVowels:j,correctAnswer:N,options:L}}}throw new Error("Unable to generate a progressive question.")}function Xv(i,l,o){if(!i||!l||!o)return[];const s=i.normalize("NFC").toLowerCase(),c=[];for(const f of o){if(!f||!f.vietnamese)continue;const h=f.vietnamese.normalize("NFC").toLowerCase();if(h===s||h.length!==s.length)continue;let m=!0,g=!1,p="";for(let b=0;b<s.length;b++){const x=s[b],S=h[b];if(xa[x]===l){const j=xa[S];if(j&&j!==l)if(p||(p=j),j===p)g=!0;else{m=!1;break}else{m=!1;break}}else if(x!==S){m=!1;break}}m&&g&&(c.some(b=>b.vietnamese.normalize("NFC").toLowerCase()===h)||c.push(f))}return c}const io=[{vowel:"a",name:"A",ipa:"aː",description:'A long oral front vowel, similar to the "a" in English "father" or "car". Pronounced clearly and with open mouth.',examples:[{vietnamese:"bàn tay",english:"hand"},{vietnamese:"cha",english:"father"}]},{vowel:"ă",name:"Ă",ipa:"a",description:'A short equivalent of "a". Sounds similar to the "u" in "cut" or "a" in "hat", but short and clipped. Typically followed by a consonant.',examples:[{vietnamese:"năm",english:"year"},{vietnamese:"mắt",english:"eye"}]},{vowel:"â",name:"Â",ipa:"ə",description:'A short central unrounded vowel, similar to the central "a" in "ago" or the short "u" in "but". Fast and centralized.',examples:[{vietnamese:"đầu",english:"head"},{vietnamese:"sự thật",english:"fact"}]},{vowel:"e",name:"E",ipa:"ɛ",description:'An open-mid front unrounded vowel, sounding like the "e" in "best", "get", or "bed".',examples:[{vietnamese:"mẹ",english:"mother"},{vietnamese:"he",english:"system (hệ thống)"}]},{vowel:"ê",name:"Ê",ipa:"e",description:'A close-mid front unrounded vowel. Sounds like the "e" in "cafe" or French "e", or the "ay" in "say", but without the glide.',examples:[{vietnamese:"bạn bè",english:"friend (bè has e, bạn has a)"},{vietnamese:"thế giới",english:"world"}]},{vowel:"i",name:"I",ipa:"i",description:'Close front unrounded vowel, sounding exactly like the "ee" in "feet", "see" or "meet". High pitch.',examples:[{vietnamese:"tiền",english:"money"},{vietnamese:"chỉ",english:"only"}]},{vowel:"o",name:"O",ipa:"ɔ",description:'An open-mid back rounded vowel. Sounds like the "aw" in "saw" or "o" in "bought" in some accents.',examples:[{vietnamese:"bông hoa",english:"flower (hoa has o, a)"},{vietnamese:"văn phòng",english:"office (phòng has o)"}]},{vowel:"ô",name:"Ô",ipa:"o",description:'Close-mid back rounded vowel. Similar to the "o" in "sole" or "go", but clean and without the "w" glide at the end.',examples:[{vietnamese:"bông hoa",english:"flower (bông has ô)"},{vietnamese:"công ty",english:"company (công has ô)"}]},{vowel:"ơ",name:"Ơ",ipa:"əː",description:'Long central unrounded vowel. Similar to the "er" in British "her" or the "u" in "burn", pronounced with relaxed unrounded lips.',examples:[{vietnamese:"nước",english:"water (nước has ư, ơ)"},{vietnamese:"thời gian",english:"time (thời has ơ)"}]},{vowel:"u",name:"U",ipa:"u",description:'Close back rounded vowel. Sounds identical to the "oo" in "boot" or "tool". Deeply rounded lips.',examples:[{vietnamese:"tuần",english:"week"},{vietnamese:"đất nước",english:"country"}]},{vowel:"ư",name:"Ư",ipa:"ɯ",description:'Close back unrounded vowel. Try pronouncing the "oo" in "boot" but with smile-shaped unrounded lips. Very iconic Vietnamese sound.',examples:[{vietnamese:"người",english:"people"},{vietnamese:"nước",english:"water"}]},{vowel:"y",name:"Y",ipa:"i",description:'Pronounced similarly to "i" (often called "heavy/long i" in Vietnamese). Sounds like the "ee" in "feet" or "y" in "happily".',examples:[{vietnamese:"công ty",english:"company (ty has y)"},{vietnamese:"ngày",english:"day"}]}],Qv={a:"ngang",ă:"ngang",â:"ngang",e:"ngang",ê:"ngang",i:"ngang",o:"ngang",ô:"ngang",ơ:"ngang",u:"ngang",ư:"ngang",y:"ngang",á:"sắc",ắ:"sắc",ấ:"sắc",é:"sắc",ế:"sắc",í:"sắc",ó:"sắc",ố:"sắc",ớ:"sắc",ú:"sắc",ứ:"sắc",ý:"sắc",à:"huyền",ằ:"huyền",ầ:"huyền",è:"huyền",ề:"huyền",ì:"huyền",ò:"huyền",ồ:"huyền",ờ:"huyền",ù:"huyền",ừ:"huyền",ỳ:"huyền",ả:"hỏi",ẳ:"hỏi",ẩ:"hỏi",ẻ:"hỏi",ể:"hỏi",ỉ:"hỏi",ỏ:"hỏi",ổ:"hỏi",ở:"hỏi",ủ:"hỏi",ử:"hỏi",ỷ:"hỏi",ã:"ngã",ẵ:"ngã",ẫ:"ngã",ẽ:"ngã",ễ:"ngã",ĩ:"ngã",õ:"ngã",ỗ:"ngã",ỡ:"ngã",ũ:"ngã",ữ:"ngã",ỹ:"ngã",ạ:"nặng",ặ:"nặng",ậ:"nặng",ẹ:"nặng",ệ:"nặng",ị:"nặng",ọ:"nặng",ộ:"nặng",ợ:"nặng",ụ:"nặng",ự:"nặng",ỵ:"nặng"};function qc(i){const l=i.normalize("NFC").toLowerCase();for(const o of l)if(Qv[o])return Qv[o];return"ngang"}function Zv(i,l=new Set){const o=h=>!!xa[h.toLowerCase()],s=i.filter(h=>{if(h.vietnamese.includes(" "))return!1;const m=h.vietnamese.normalize("NFC").toLowerCase();let g=0;for(const p of m)o(p)&&g++;return g===1});if(s.length<2)throw new Error("Not enough single-vowel vocabulary items.");const f=[...s.map(h=>{const m=h.vietnamese.normalize("NFC").toLowerCase();let g="",p="",b=!1,x="";for(const w of m)o(w)?(b=!0,x=w):/[a-zđ]/i.test(w)&&(b?p+=w:g+=w);const S=qc(h.vietnamese);return{item:h,initialCons:g,endingCons:p,tone:S,vowelChar:x}})].sort(()=>Math.random()-.5);for(let h=0;h<f.length;h++){const m=f[h];if(!l.has(m.item.word))for(let g=0;g<f.length;g++){if(h===g)continue;const p=f[g];if(m.tone===p.tone&&m.item.word!==p.item.word){const b=m.initialCons&&m.initialCons===p.initialCons,x=m.endingCons&&m.endingCons===p.endingCons;if(b||x){const S=m.tone,w=["ngang","sắc","huyền","hỏi","ngã","nặng"];return{word1:m.item,word2:p.item,word1Vowels:[m.vowelChar],word2Vowels:[p.vowelChar],commonVowels:[m.vowelChar],correctAnswer:S,options:w,isAccentMode:!0,accentMark:S}}}}}for(let h=0;h<f.length;h++){const m=f[h];if(!l.has(m.item.word))for(let g=0;g<f.length;g++){if(h===g)continue;const p=f[g];if(m.tone===p.tone&&m.item.word!==p.item.word&&(m.initialCons&&p.initialCons&&(m.initialCons.startsWith(p.initialCons[0])||p.initialCons.startsWith(m.initialCons[0]))||m.endingCons===p.endingCons)){const b=m.tone,x=["ngang","sắc","huyền","hỏi","ngã","nặng"];return{word1:m.item,word2:p.item,word1Vowels:[m.vowelChar],word2Vowels:[p.vowelChar],commonVowels:[m.vowelChar],correctAnswer:b,options:x,isAccentMode:!0,accentMark:b}}}}for(let h=0;h<f.length;h++){const m=f[h];if(!l.has(m.item.word))for(let g=0;g<f.length;g++){if(h===g)continue;const p=f[g];if(m.tone===p.tone&&m.item.word!==p.item.word){const b=m.tone,x=["ngang","sắc","huyền","hỏi","ngã","nặng"];return{word1:m.item,word2:p.item,word1Vowels:[m.vowelChar],word2Vowels:[p.vowelChar],commonVowels:[m.vowelChar],correctAnswer:b,options:x,isAccentMode:!0,accentMark:b}}}}throw new Error("Unable to generate similar consonant and tone pair.")}const w5={á:"a",à:"a",ả:"a",ã:"a",ạ:"a",ắ:"ă",ằ:"ă",ẳ:"ă",ẵ:"ă",ặ:"ă",ấ:"â",ầ:"â",ẩ:"â",ẫ:"â",ậ:"â",é:"e",è:"e",ẻ:"e",ẽ:"e",ẹ:"e",ế:"ê",ề:"ê",ể:"ê",ễ:"ê",ệ:"ê",í:"i",ì:"i",ỉ:"i",ĩ:"i",ị:"i",ó:"o",ò:"o",ỏ:"o",õ:"o",ọ:"o",ố:"ô",ồ:"ô",ổ:"ô",ỗ:"ô",ộ:"ô",ớ:"ơ",ờ:"ơ",ở:"ơ",ỡ:"ơ",ợ:"ơ",ú:"u",ù:"u",ủ:"u",ũ:"u",ụ:"u",ứ:"ư",ừ:"ư",ử:"ư",ữ:"ư",ự:"ư",ý:"y",ỳ:"y",ỷ:"y",ỹ:"y",ỵ:"y",Á:"A",À:"A",Ả:"A",Ã:"A",Ạ:"A",Ắ:"Ă",Ằ:"Ă",Ẳ:"Ă",Ẵ:"Ă",Ặ:"Ă",Ấ:"Â",Ầ:"Â",Ẩ:"Â",Ẫ:"Â",Ậ:"Â",É:"E",È:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ế:"Ê",Ề:"Ê",Ể:"Ê",Ễ:"Ê",Ệ:"Ê",Í:"I",Ì:"I",Ỉ:"I",Ĩ:"I",Ị:"I",Ó:"O",Ò:"O",Ỏ:"O",Õ:"O",Ọ:"O",Ố:"Ô",Ồ:"Ô",Ổ:"Ô",Ỗ:"Ô",Ộ:"Ô",Ớ:"Ơ",Ờ:"Ơ",Ở:"Ơ",Ỡ:"Ơ",Ợ:"Ơ",Ú:"U",Ù:"U",Ủ:"U",Ũ:"U",Ụ:"U",Ứ:"Ư",Ừ:"Ư",Ử:"Ư",Ữ:"Ư",Ự:"Ư",Ý:"Y",Ỳ:"Y",Ỷ:"Y",Ỹ:"Y",Ỵ:"Y"};function T5(i){const l=i.normalize("NFC");let o="";for(const s of l)o+=w5[s]||s;return o}let re=null;function Mo(){re||(re=new(window.AudioContext||window.webkitAudioContext))}function E5(){try{if(Mo(),!re)return;const i=re.createOscillator(),l=re.createOscillator(),o=re.createGain();i.connect(o),l.connect(o),o.connect(re.destination),i.frequency.setValueAtTime(523.25,re.currentTime),l.frequency.setValueAtTime(659.25,re.currentTime),i.type="triangle",l.type="sine",o.gain.setValueAtTime(0,re.currentTime),o.gain.linearRampToValueAtTime(.15,re.currentTime+.05),o.gain.exponentialRampToValueAtTime(.001,re.currentTime+.35),i.start(re.currentTime),l.start(re.currentTime),i.stop(re.currentTime+.4),l.stop(re.currentTime+.4)}catch(i){console.warn("Audio Context blocked or not supported",i)}}function Kv(){try{if(Mo(),!re)return;const i=re.createOscillator(),l=re.createGain();i.connect(l),l.connect(re.destination),i.frequency.setValueAtTime(220,re.currentTime),i.frequency.linearRampToValueAtTime(140,re.currentTime+.25),i.type="sawtooth",l.gain.setValueAtTime(0,re.currentTime),l.gain.linearRampToValueAtTime(.1,re.currentTime+.05),l.gain.exponentialRampToValueAtTime(.001,re.currentTime+.35),i.start(re.currentTime),i.stop(re.currentTime+.4)}catch(i){console.warn("Audio Context blocked or not supported",i)}}function Yt(){try{if(Mo(),!re)return;const i=re.createOscillator(),l=re.createGain();i.connect(l),l.connect(re.destination),i.frequency.setValueAtTime(800,re.currentTime),i.frequency.exponentialRampToValueAtTime(200,re.currentTime+.08),i.type="sine",l.gain.setValueAtTime(0,re.currentTime),l.gain.linearRampToValueAtTime(.05,re.currentTime+.01),l.gain.exponentialRampToValueAtTime(.001,re.currentTime+.1),i.start(re.currentTime),i.stop(re.currentTime+.12)}catch(i){console.warn("Audio Context blocked or not supported",i)}}function Ly(){try{if(Mo(),!re)return;const i=re.createOscillator(),l=re.createGain();i.connect(l),l.connect(re.destination),i.frequency.setValueAtTime(330,re.currentTime),i.frequency.exponentialRampToValueAtTime(1200,re.currentTime+.4),i.type="sine",l.gain.setValueAtTime(0,re.currentTime),l.gain.linearRampToValueAtTime(.12,re.currentTime+.1),l.gain.exponentialRampToValueAtTime(.001,re.currentTime+.45),i.start(re.currentTime),i.stop(re.currentTime+.5)}catch(i){console.warn("Audio context blocked",i)}}function $n(i){if(typeof window>"u")return;const l=window.speechSynthesis;if(!l){console.warn("Speech synthesis is not supported on this device/browser.");return}if(typeof SpeechSynthesisUtterance>"u"){console.warn("SpeechSynthesisUtterance is not defined in this browser session.");return}try{if(typeof l.cancel=="function")try{l.cancel()}catch(s){console.warn("SpeechSynthesis cancel failed:",s)}const o=new SpeechSynthesisUtterance(i);if(o.lang="vi-VN",o.onerror=s=>{console.warn("SpeechSynthesisUtterance encountered asynchronous event error:",s)},typeof l.getVoices=="function")try{const s=l.getVoices()||[];let c=s.find(f=>f.lang==="vi-VN"||f.lang==="vi_VN");c||(c=s.find(f=>f.lang.toLowerCase().startsWith("vi"))),c&&(o.voice=c)}catch(s){console.warn("Could not retrieve system speech synthesis voices:",s)}if(o.rate=.82,o.pitch=1.02,typeof l.speak=="function")try{l.speak(o)}catch(s){console.error("SpeechSynthesis speak invocation failed:",s)}else console.warn("SpeechSynthesis speak is not a valid callable function.")}catch(o){console.error("Failed to perform Vietnamese Text to Speech safely",o)}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C5=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,s)=>s?s.toUpperCase():o.toLowerCase()),Fv=i=>{const l=C5(i);return l.charAt(0).toUpperCase()+l.slice(1)},qy=(...i)=>i.filter((l,o,s)=>!!l&&l.trim()!==""&&s.indexOf(l)===o).join(" ").trim(),M5=i=>{for(const l in i)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=G.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:f,iconNode:h,...m},g)=>G.createElement("svg",{ref:g,...N5,width:l,height:l,stroke:i,strokeWidth:s?Number(o)*24/Number(l):o,className:qy("lucide",c),...!f&&!M5(m)&&{"aria-hidden":"true"},...m},[...h.map(([p,b])=>G.createElement(p,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(i,l)=>{const o=G.forwardRef(({className:s,...c},f)=>G.createElement(z5,{ref:f,iconNode:l,className:qy(`lucide-${D5(Fv(i))}`,`lucide-${i}`,s),...c}));return o.displayName=Fv(i),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Hy=Je("activity",V5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],k5=Je("arrow-right",R5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Yy=Je("book-open",B5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],_5=Je("calendar",O5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],L5=Je("check",U5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],H5=Je("chevron-left",q5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],G5=Je("chevron-right",Y5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Q5=Je("circle-check",X5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],K5=Je("circle-x",Z5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],J5=Je("download",F5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Jv=Je("eye-off",$5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$v=Je("eye",W5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],I5=Je("flame",P5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],tw=Je("log-out",ew);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Wv=Je("play",nw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aw=Je("sparkles",iw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],sw=Je("upload",lw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Wn=Je("volume-2",ow);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Gy=Je("x",rw);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Xy=Je("zap",uw),Pv=Uy(),cw={ngang:{label:"Ngang",symbol:"◌"},sắc:{label:"Sắc",symbol:"◌́"},huyền:{label:"Huyền",symbol:"◌̀"},hỏi:{label:"Hỏi",symbol:"◌̉"},ngã:{label:"Ngã",symbol:"◌̃"},nặng:{label:"Nặng",symbol:"◌̣"}};function hw({question:i,difficulty:l,onAnswer:o,selectedAnswer:s,showCorrect:c,scoreMultiplier:f,onNext:h,streak:m,bestStreak:g,onExit:p}){const[b,x]=G.useState(!1),[S,w]=G.useState(!1),[j,N]=G.useState(!1);G.useEffect(()=>{x(!1),w(!1),N(!1)},[i]);const{word1:k,word2:C,word1Vowels:L,word2Vowels:O,correctAnswer:_,options:Q}=i,ne=s!==null?Xv(k.vietnamese,_,Pv):[],K=s!==null?Xv(C.vietnamese,_,Pv):[],F=(W,pe)=>s!==null||l==="beginner"?ie(W.vietnamese,_):l==="intermediate"||(pe?S:b)?i.isAccentMode?se(W.vietnamese):A5(W.vietnamese):"???",ie=(W,pe)=>{if(i.isAccentMode)return ee(W);const ge=W.normalize("NFC"),ve=[],V={a:"a",á:"a",à:"a",ả:"a",ã:"a",ạ:"a",ă:"ă",ắ:"ă",ằ:"ă",ẳ:"ă",ẵ:"ă",ặ:"ă",â:"â",ấ:"â",ầ:"â",ẩ:"â",ẫ:"â",ậ:"â",e:"e",é:"e",è:"e",ẻ:"e",ẽ:"e",ẹ:"e",ê:"ê",ế:"ê",ề:"ê",ể:"ê",ễ:"ê",ệ:"ê",i:"i",í:"i",ì:"i",ỉ:"i",ĩ:"i",ị:"i",o:"o",ò:"o",ó:"o",ỏ:"o",õ:"o",ọ:"o",ô:"ô",ố:"ô",ồ:"ô",ổ:"ô",ỗ:"ô",ộ:"ô",ơ:"ơ",ớ:"ơ",ờ:"ơ",ở:"ơ",ỡ:"ơ",ợ:"ơ",u:"u",ú:"u",ù:"u",ủ:"u",ũ:"u",ụ:"u",ư:"ư",ứ:"ư",ừ:"ư",ử:"ư",ữ:"ư",ự:"ư",y:"y",ý:"y",ỳ:"y",ỷ:"y",ỹ:"y",ỵ:"y"};for(let X=0;X<ge.length;X++){const J=ge[X],ue=J.toLowerCase();V[ue]===pe?ve.push(v.jsx("span",{className:"text-[#9E6B40] bg-[#FAF0E6] border border-[#E9DCC9] rounded-md px-1 mx-[1px] inline-block font-sans font-bold scale-105 transform align-baseline shadow-3xs transition-all duration-150 hover:scale-110",children:J},X)):ve.push(v.jsx("span",{className:"font-serif font-medium text-[#3D3D33]",children:J},X))}return ve},ee=W=>{const pe=W.normalize("NFC"),ge=[],ve=V=>!!{a:"a",á:"a",à:"a",ả:"a",ã:"a",ạ:"a",ă:"ă",ắ:"ă",ằ:"ă",ẳ:"ă",ẵ:"ă",ặ:"ă",â:"â",ấ:"â",ầ:"â",ẩ:"â",ẫ:"â",ậ:"â",e:"e",é:"e",è:"e",ẻ:"e",ẽ:"e",ẹ:"e",ê:"ê",ế:"ê",ề:"ê",ể:"ê",ễ:"ê",ệ:"ê",i:"i",í:"i",ì:"i",ỉ:"i",ĩ:"i",ị:"i",o:"o",ò:"o",ó:"o",ỏ:"o",õ:"o",ọ:"o",ô:"ô",ố:"ô",ồ:"ô",ổ:"ô",ỗ:"ô",ộ:"ô",ơ:"ơ",ớ:"ơ",ờ:"ơ",ở:"ơ",ỡ:"ơ",ợ:"ơ",u:"u",ú:"u",ù:"u",ủ:"u",ũ:"u",ụ:"u",ư:"ư",ứ:"ư",ừ:"ư",ử:"ư",ữ:"ư",ự:"ư",y:"y",ý:"y",ỳ:"y",ỷ:"y",ỹ:"y",ỵ:"y"}[V.toLowerCase()];for(let V=0;V<pe.length;V++){const X=pe[V];ve(X)?ge.push(v.jsx("span",{className:"text-[#9E6B40] bg-[#FAF0E6] border border-[#E9DCC9] rounded-md px-1 mx-[1px] inline-block font-sans font-bold scale-105 transform align-baseline shadow-3xs transition-all duration-150 hover:scale-110",children:X},V)):ge.push(v.jsx("span",{className:"font-serif font-medium text-[#3D3D33]",children:X},V))}return ge},se=W=>{const ge=T5(W).normalize("NFC"),ve=[],V=X=>!!{a:"a",ă:"ă",â:"â",e:"e",ê:"ê",i:"i",o:"o",ô:"ô",ơ:"ơ",u:"u",ư:"ư",y:"y"}[X.toLowerCase()];for(let X=0;X<ge.length;X++){const J=ge[X];V(J)?ve.push(v.jsx("span",{className:"text-[#9E6B40] bg-[#FAF0E6] border border-[#E9DCC9] rounded-md px-1 mx-[1px] inline-block font-sans font-bold scale-105 transform align-baseline shadow-3xs transition-all duration-150 hover:scale-110",children:J},X)):ve.push(v.jsx("span",{className:"font-serif font-medium text-[#3D3D33]",children:J},X))}return ve};return v.jsxs("div",{id:"quiz-card-container",className:"w-full max-w-xl bg-white border border-[#EBE7E0] rounded-[24px] shadow-sm relative overflow-hidden",children:[v.jsx("div",{className:"absolute top-0 left-0 w-full h-[4.5px] bg-gradient-to-r from-[#6B705C] via-[#D4A373] to-[#E6C280] shadow-3xs z-10 animate-fade-in"}),v.jsxs("div",{id:"word-pair-header",className:"p-4 md:p-5 bg-[#F5F2ED]/60 border-b border-b-[#EBE7E0] flex flex-col items-center justify-center text-center",children:[v.jsxs("div",{id:"quiz-streak-header",className:"flex items-center justify-between w-full border-b border-[#EBE7E0]/60 pb-2 mb-2 select-none",children:[v.jsxs("div",{className:"flex items-center gap-3",children:[v.jsxs("div",{className:"flex items-center gap-1.5 text-[#6B705C]",children:[v.jsx(I5,{className:`w-4 h-4 text-orange-500 fill-orange-500/10 ${m>0?"animate-bounce":""}`}),v.jsxs("span",{className:"text-xs font-serif font-bold italic",children:["Streak: ",m,"x"]})]}),v.jsxs("div",{className:"hidden sm:block text-[10px] font-mono text-[#A5A58D] uppercase tracking-wider border-l border-[#EBE7E0] pl-3",children:["Best: ",g,"x"]})]}),p&&v.jsxs("button",{type:"button",id:"quit-current-game-button",onClick:p,className:"text-[10px] uppercase font-mono tracking-wider font-bold flex items-center gap-1 bg-white hover:bg-[#FAF8F5] text-[#5A5A40] hover:text-[#3D3D33] px-2.5 py-1 rounded-lg border border-[#EBE7E0] hover:border-[#D4A373]/50 shadow-3xs transition duration-150 cursor-pointer",children:[v.jsx(tw,{className:"w-3 h-3 text-[#D4A373]"}),v.jsx("span",{children:"Exit Mode"})]})]}),v.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full mt-1.5",children:[v.jsxs("div",{className:"flex-1 flex flex-col items-center p-3 bg-white/70 rounded-xl border border-[#EBE7E0] shadow-2xs w-full",children:[v.jsx("span",{className:"text-[9px] font-mono tracking-wider font-semibold rounded-md px-1.5 py-0.5 bg-[#E9E4DB]/80 text-[#6B705C] mb-1 capitalize border border-[#DCD7CC]/40",children:k.type}),v.jsx("span",{className:"text-lg md:text-xl font-serif italic text-[#3D3D33] tracking-tight",children:k.word}),v.jsxs("div",{className:"mt-1.5 flex items-center justify-center gap-1.5 w-full h-7",children:[v.jsx("div",{className:"text-center font-serif text-base tracking-[0.14em] text-[#5A5A40] leading-7 select-text",children:F(k,!1)}),(s!==null||l==="beginner"||l==="intermediate"&&b)&&v.jsx("button",{type:"button",title:"Listen to pronunciation",onClick:()=>$n(k.vietnamese),className:"p-1 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#E9E4DB]/60 rounded-full transition cursor-pointer flex items-center justify-center",children:v.jsx(Wn,{className:"w-3.5 h-3.5"})})]}),l!=="beginner"&&!s&&v.jsx("button",{type:"button",id:"hint-toggle-word-1",onClick:()=>x(!b),className:"mt-1.5 text-[10px] flex items-center gap-1 py-0.5 px-2 text-[#6B705C] hover:text-[#5A5A40] font-semibold hover:bg-[#E9E4DB] rounded-md transition duration-155 border border-dashed border-[#A5A58D] cursor-pointer",children:b?v.jsxs(v.Fragment,{children:[v.jsx(Jv,{className:"w-2.5 h-2.5"}),"Hide Hint"]}):v.jsxs(v.Fragment,{children:[v.jsx($v,{className:"w-2.5 h-2.5"}),"Hint Word 1"]})})]}),v.jsx("div",{className:"text-[#A5A58D] font-serif italic text-xs",children:"and"}),v.jsxs("div",{className:"flex-1 flex flex-col items-center p-3 bg-white/70 rounded-xl border border-[#EBE7E0] shadow-2xs w-full",children:[v.jsx("span",{className:"text-[9px] font-mono tracking-wider font-semibold rounded-md px-1.5 py-0.5 bg-[#E9E4DB]/80 text-[#6B705C] mb-1 capitalize border border-[#DCD7CC]/40",children:C.type}),v.jsx("span",{className:"text-lg md:text-xl font-serif italic text-[#3D3D33] tracking-tight",children:C.word}),v.jsxs("div",{className:"mt-1.5 flex items-center justify-center gap-1.5 w-full h-7",children:[v.jsx("div",{className:"text-center font-serif text-base tracking-[0.14em] text-[#5A5A40] leading-7 select-text",children:F(C,!0)}),(s!==null||l==="beginner"||l==="intermediate"&&S)&&v.jsx("button",{type:"button",title:"Listen to pronunciation",onClick:()=>$n(C.vietnamese),className:"p-1 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#E9E4DB]/60 rounded-full transition cursor-pointer flex items-center justify-center",children:v.jsx(Wn,{className:"w-3.5 h-3.5"})})]}),l!=="beginner"&&!s&&v.jsx("button",{type:"button",id:"hint-toggle-word-2",onClick:()=>w(!S),className:"mt-1.5 text-[10px] flex items-center gap-1 py-0.5 px-2 text-[#6B705C] hover:text-[#5A5A40] font-semibold hover:bg-[#E9E4DB] rounded-md transition duration-155 border border-dashed border-[#A5A58D] cursor-pointer",children:S?v.jsxs(v.Fragment,{children:[v.jsx(Jv,{className:"w-2.5 h-2.5"}),"Hide Hint"]}):v.jsxs(v.Fragment,{children:[v.jsx($v,{className:"w-2.5 h-2.5"}),"Hint Word 2"]})})]})]})]}),v.jsxs("div",{id:"options-panel",className:"p-4 md:p-5 flex flex-col items-center bg-[#FDFDFD]",children:[v.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-[#6B705C] mb-2.5 font-semibold",children:i.isAccentMode?"Select the shared accent mark (tone)":"Select the shared vowel"}),v.jsx("div",{className:`grid ${i.isAccentMode?"grid-cols-2 md:grid-cols-3 gap-3 max-w-md md:max-w-xl":"grid-cols-2 gap-2.5 max-w-xs"} w-full`,children:Q.map(W=>{const pe=s===W,ge=W===_,ve=s!==null;let V="flex flex-col items-center justify-center p-2 py-2.5 rounded-xl border-2 text-center transition-all duration-155 select-none ";if(ve?ge?V+="bg-[#6B705C] border-[#6B705C] text-white shadow-md ring-2 ring-[#6B705C]/10":pe?V+="bg-[#D4A373]/15 border-[#D4A373] text-[#A76F40] shadow-3xs":V+="bg-[#E9E4DB]/20 border-[#E9E4DB] text-[#A5A58D] opacity-50":V+="bg-white/50 border-[#DCD7CC] text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white hover:border-[#5A5A40] cursor-pointer",i.isAccentMode){const X=cw[W]||{label:W,symbol:""};return v.jsxs("button",{id:`tone-option-${W}`,disabled:ve,onClick:()=>o(W),className:`${V} p-2 h-18 select-none cursor-pointer flex flex-col items-center justify-center`,children:[v.jsx("span",{className:"text-sm font-serif font-bold tracking-wide capitalize select-none leading-tight",children:X.label}),v.jsx("span",{className:"text-xl font-sans font-bold text-[#6B705C] group-hover:text-white mt-1 select-none font-mono",children:X.symbol})]},W)}return v.jsx("button",{id:`vowel-option-${W}`,disabled:ve,onClick:()=>o(W),className:`${V} h-14 py-0 flex items-center justify-center`,children:v.jsx("span",{className:"text-2xl font-serif tracking-wide uppercase select-none font-mono",children:W})},W)})}),v.jsx(_c,{mode:"wait",children:s&&v.jsxs(jl.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},className:"mt-3.5 w-full max-w-xs flex flex-col items-center text-center font-sans",children:[s===_?v.jsxs("div",{className:"flex items-center gap-1.5 text-white font-serif italic text-xs mb-2 bg-[#6B705C] px-4 py-1.5 rounded-full shadow-sm border border-[#5A5A40]/30 animate-pulse",children:[v.jsx(Q5,{className:"w-3.5 h-3.5 text-white"}),"Correct Match!"]}):v.jsxs("div",{className:"flex items-center gap-1.5 text-[#3D3D33] font-serif italic text-xs mb-2 bg-[#E9E4DB] px-4 py-1.5 rounded-full shadow-xs border border-[#DCD7CC]",children:[v.jsx(K5,{className:"w-3.5 h-3.5 text-[#6B705C]"}),"Incorrect choice. Shared: ",i.isAccentMode?_:_.toUpperCase()]}),h&&v.jsxs("button",{type:"button",id:"next-question-trigger-button",onClick:h,className:"w-full mt-1 flex items-center justify-center gap-1.5 py-3/4 outline-none bg-[#6B705C] hover:bg-[#5A5A40] text-white rounded-full font-serif font-bold transition duration-150 shadow-xs hover:shadow-md cursor-pointer tracking-wider text-xs px-6 py-2.5 h-10 mb-2.5",children:[v.jsx("span",{children:"Load Next Challenge"}),v.jsx(k5,{className:"w-3.5 h-3.5"})]}),v.jsxs("div",{className:"p-3 bg-[#F5F2ED] border border-[#EBE7E0] rounded-[16px] text-left w-full text-[11px] text-[#3D3D33] leading-relaxed font-sans",children:[v.jsx("span",{className:"font-bold text-[#6B705C] block text-[9px] uppercase tracking-wider mb-0.5 font-mono",children:"Analysis Details:"}),i.isAccentMode?v.jsxs("div",{className:"space-y-1",children:[v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("strong",{children:k.word})," → ",v.jsx("strong",{className:"font-serif text-[#3D3D33]",children:k.vietnamese})," (Tone: ",v.jsx("code",{className:"text-[#6B705C] font-semibold capitalize font-sans",children:qc(k.vietnamese)}),")",v.jsx("button",{type:"button",title:"Listen",onClick:()=>$n(k.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:v.jsx(Wn,{className:"w-3 h-3"})})]}),v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("strong",{children:C.word})," → ",v.jsx("strong",{className:"font-serif text-[#3D3D33]",children:C.vietnamese})," (Tone: ",v.jsx("code",{className:"text-[#6B705C] font-semibold capitalize font-sans",children:qc(C.vietnamese)}),")",v.jsx("button",{type:"button",title:"Listen",onClick:()=>$n(C.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:v.jsx(Wn,{className:"w-3 h-3"})})]}),v.jsxs("div",{className:"text-[10px] text-[#6B705C] pt-1 leading-normal",children:["Both words carry the accent mark of the ",v.jsx("span",{className:"font-serif font-bold text-[#A76F40] bg-[#FAF0E6] border border-[#E9DCC9] uppercase px-2 py-0.5 rounded-md shadow-3xs capitalize",children:_})," tone."]})]}):v.jsxs("div",{className:"space-y-1 font-sans",children:[v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("strong",{children:k.word})," → ",v.jsx("strong",{className:"font-serif text-[#3D3D33]",children:k.vietnamese})," ",v.jsxs("code",{children:["[",L.join(", ").toUpperCase(),"]"]}),v.jsx("button",{type:"button",title:"Listen",onClick:()=>$n(k.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:v.jsx(Wn,{className:"w-3 h-3"})})]}),v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx("strong",{children:C.word})," → ",v.jsx("strong",{className:"font-serif text-[#3D3D33]",children:C.vietnamese})," ",v.jsxs("code",{children:["[",O.join(", ").toUpperCase(),"]"]}),v.jsx("button",{type:"button",title:"Listen",onClick:()=>$n(C.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:v.jsx(Wn,{className:"w-3 h-3"})})]}),v.jsxs("div",{className:"text-[10px] text-[#6B705C] pt-0.5",children:["Shared vowel is ",v.jsx("span",{className:"font-serif font-bold text-[#A76F40] bg-[#FAF0E6] border border-[#E9DCC9] uppercase px-2 py-0.5 rounded-md shadow-3xs",children:_}),"."]})]}),!i.isAccentMode&&(ne.length>0||K.length>0?v.jsxs("div",{className:"mt-2.5 border-t border-[#EBE7E0] pt-2 text-[10.5px]",children:[v.jsx("span",{className:"font-bold text-[#6B705C] block text-[8px] uppercase tracking-wider mb-1.5 font-mono",children:"Spelling matches with other vowels:"}),v.jsxs("div",{className:"space-y-2",children:[ne.length>0&&v.jsxs("div",{children:[v.jsxs("span",{className:"text-[#8C867A] block font-medium mb-0.5",children:["For “",k.vietnamese,"”:"]}),v.jsx("div",{className:"space-y-1 pl-1.5 border-l-2 border-[#DCD7CC]",children:ne.map((W,pe)=>v.jsxs("div",{className:"flex items-center gap-1.5",children:["• ",v.jsx("strong",{className:"font-serif text-[#3D3D33]",children:W.vietnamese})," (",W.word,")",v.jsx("button",{type:"button",title:"Listen",onClick:()=>$n(W.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:v.jsx(Wn,{className:"w-2.5 h-2.5"})})]},pe))})]}),K.length>0&&v.jsxs("div",{children:[v.jsxs("span",{className:"text-[#8C867A] block font-medium mb-0.5",children:["For “",C.vietnamese,"”:"]}),v.jsx("div",{className:"space-y-1 pl-1.5 border-l-2 border-[#DCD7CC]",children:K.map((W,pe)=>v.jsxs("div",{className:"flex items-center gap-1.5",children:["• ",v.jsx("strong",{className:"font-serif text-[#3D3D33]",children:W.vietnamese})," (",W.word,")",v.jsx("button",{type:"button",title:"Listen",onClick:()=>$n(W.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:v.jsx(Wn,{className:"w-2.5 h-2.5"})})]},pe))})]})]})]}):v.jsx("div",{className:"mt-2.5 border-t border-[#EBE7E0] pt-2 text-[10.5px] text-[#8C867A] italic font-sans animate-fade-in",children:"No other spelling matches with different central vowels found in our dictionary."}))]})]},"feedback-container")})]})]})}const ao=[{tone:"Ngang",symbolName:"Flat / Level Tone",mark:"a (No Mark)",ipaDesc:"Mid-level [33]",description:"A flat, mid-pitch level tone produced without any accent mark. Your voice should remain steady, even, and natural, like speaking in a mono-pitch.",examples:[{vietnamese:"ba",english:"three"},{vietnamese:"anh",english:"brother / you"},{vietnamese:"hoa",english:"flower"}]},{tone:"Sắc",symbolName:"Sharp / Rising Tone",mark:"á (Acute Accent)",ipaDesc:"High-rising [35]",description:"Marked by an acute accent mark pointing upwards (´). Start at a normal mid-level speaker pitch and quickly raise the pitch of your voice high.",examples:[{vietnamese:"cá",english:"fish"},{vietnamese:"lá",english:"leaf"},{vietnamese:"bánh",english:"bread / pastry"}]},{tone:"Huyền",symbolName:"Faint / Falling Tone",mark:"à (Grave Accent)",ipaDesc:"Low-falling [21]",description:"Marked by a grave accent mark pointing downwards (`). Start slightly lower than your normal speaker pitch, letting the sound slide softly further down with a relaxed throat.",examples:[{vietnamese:"bà",english:"grandmother"},{vietnamese:"nhà",english:"house / home"},{vietnamese:"trà",english:"tea"}]},{tone:"Hỏi",symbolName:"Questioning / Dipping-Rising Tone",mark:"ả (Hook Above)",ipaDesc:"Low dipping-rising [312]",description:"Marked by a tiny question mark-like hook above the vowel. Start mid-low, dip down deeply, then lift the voice back up in a contour similar to asking a curious question.",examples:[{vietnamese:"cả",english:"all / whole"},{vietnamese:"hỏi",english:"to ask"},{vietnamese:"đỏ",english:"red color"}]},{tone:"Ngã",symbolName:"Tumbling / Glottalized Tone",mark:"ã (Tilde Accent)",ipaDesc:"High glottalized-rising [325]",description:"Marked by a tilde sign (~). Start mid-high, instantly tensing or breaking the voice using your glottal stream (vocal cord catch), then rise rapidly.",examples:[{vietnamese:"ngã",english:"to fall / tumble"},{vietnamese:"vẽ",english:"to draw / paint"},{vietnamese:"sữa",english:"milk"}]},{tone:"Nặng",symbolName:"Heavy / Constricted Tone",mark:"ạ (Dot Below)",ipaDesc:"Low-falling constricted [21.]",description:"Marked by a tiny subscript dot beneath the vowel character (.). Start low in pitch and abruptly slice the sound short by tightening your back-throat muscles.",examples:[{vietnamese:"mẹ",english:"mother"},{vietnamese:"lạ",english:"strange / unfamiliar"},{vietnamese:"bạn",english:"friend"}]}];function fw({onSelectVowel:i,onClose:l}){const[o,s]=G.useState(""),[c,f]=G.useState("vowels"),[h,m]=G.useState(io[0]),[g,p]=G.useState(ao[1]);G.useEffect(()=>{s(""),c==="vowels"?m(io[0]):p(ao[0])},[c]);const b=io.filter(j=>j.vowel.toLowerCase().includes(o.toLowerCase())||j.name.toLowerCase().includes(o.toLowerCase())||j.description.toLowerCase().includes(o.toLowerCase())),x=ao.filter(j=>j.tone.toLowerCase().includes(o.toLowerCase())||j.symbolName.toLowerCase().includes(o.toLowerCase())||j.description.toLowerCase().includes(o.toLowerCase())),S=j=>{m(j),Yt(),i&&i(j.vowel)},w=j=>{p(j),Yt()};return v.jsxs("div",{id:"vowel-reference-guide",className:"w-full bg-white border border-[#EBE7E0] rounded-[24px] shadow-sm overflow-hidden flex flex-col h-full min-h-[500px]",children:[v.jsxs("div",{id:"reference-header",className:"p-4 bg-[#F5F2ED] border-b border-[#EBE7E0] flex items-center justify-between flex-none select-none",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(Yy,{className:"w-4 h-4 text-[#6B705C]"}),v.jsx("span",{className:"font-serif italic text-[#3D3D33] text-sm font-bold",children:"Vietnamese Study Reference"})]}),l&&v.jsx("button",{type:"button",onClick:l,className:"p-1.5 rounded-full hover:bg-[#EBE7E0] text-[#A5A58D] hover:text-[#3D3D33] border border-[#DCD7CC]/70 bg-white shadow-3xs transition duration-150 cursor-pointer flex items-center justify-center",title:"Close Dictionary",children:v.jsx(Gy,{className:"w-3.5 h-3.5 text-[#6B705C]"})})]}),v.jsxs("div",{className:"flex border-b border-[#EBE7E0]/70 bg-[#FAF8F5]/80 px-2 flex-none select-none",children:[v.jsxs("button",{type:"button",onClick:()=>{Yt(),f("vowels")},className:`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-wider text-center border-b-3 transition duration-150 cursor-pointer ${c==="vowels"?"border-[#6B705C] text-[#5A5A40]":"border-transparent text-[#A5A58D] hover:text-[#3D3D33]"}`,children:["Vowel Letters (",io.length,")"]}),v.jsxs("button",{type:"button",onClick:()=>{Yt(),f("tones")},className:`flex-1 py-2 text-xs font-mono font-bold uppercase tracking-wider text-center border-b-3 transition duration-150 cursor-pointer ${c==="tones"?"border-[#D4A373] text-[#A76F40]":"border-transparent text-[#A5A58D] hover:text-[#3D3D33]"}`,children:["Tone Accents (",ao.length,")"]})]}),v.jsxs("div",{id:"reference-split-view",className:"flex-1 flex overflow-hidden min-h-0",children:[v.jsxs("div",{id:"vowel-grid-sidebar",className:"w-5/12 sm:w-1/3 border-r border-[#EBE7E0] overflow-y-auto p-3 space-y-2 bg-[#F5F2ED]/45",children:[v.jsxs("div",{className:"grid grid-cols-1 gap-2",children:[c==="vowels"&&b.map(j=>{const N=(h==null?void 0:h.vowel)===j.vowel;return v.jsxs("button",{id:`ref-vowel-btn-${j.vowel}`,onClick:()=>S(j),className:`flex flex-col items-center justify-center py-2.5 px-1.5 rounded-xl border text-center transition duration-150 cursor-pointer ${N?"bg-gradient-to-br from-[#6B705C]/12 via-white to-[#6B705C]/3 border-[#6B705C] text-[#5A5A40] shadow-xs font-bold ring-1 ring-[#6B705C]/25":"bg-white border-[#DCD7CC]/65 text-[#3D3D33] hover:bg-[#EBE7E0]/50 hover:border-[#A5A58D]"}`,children:[v.jsx("span",{className:`text-2xl font-serif font-black uppercase leading-none ${N?"text-[#5A5A40]":"text-[#3D3D33]"}`,children:j.vowel}),v.jsxs("span",{className:"text-[9px] font-mono tracking-wide text-[#A5A58D] mt-0.5 uppercase",children:["/",j.ipa,"/"]})]},j.vowel)}),c==="tones"&&x.map(j=>{const N=(g==null?void 0:g.tone)===j.tone;return v.jsxs("button",{id:`ref-tone-btn-${j.tone}`,onClick:()=>w(j),className:`flex flex-col items-center justify-center py-2.5 px-1.5 rounded-xl border text-center transition duration-150 cursor-pointer ${N?"bg-gradient-to-br from-[#D4A373]/12 via-white to-[#D4A373]/3 border-[#D4A373] text-[#A76F40] shadow-xs font-bold ring-1 ring-[#D4A373]/25":"bg-white border-[#DCD7CC]/65 text-[#3D3D33] hover:bg-[#EBE7E0]/50 hover:border-[#A5A58D]"}`,children:[v.jsx("span",{className:`text-lg font-serif font-black leading-none ${N?"text-[#A76F40]":"text-[#3D3D33]"}`,children:j.tone}),v.jsx("span",{className:"text-[9px] font-mono tracking-wider text-[#A5A58D] mt-1 font-semibold uppercase",children:j.tone==="Ngang"?"flat":j.mark.split(" ")[0]})]},j.tone)})]}),c==="vowels"&&b.length===0&&v.jsx("div",{className:"text-center py-8 text-xs text-[#A5A58D] font-sans",children:"No vowels match."}),c==="tones"&&x.length===0&&v.jsx("div",{className:"text-center py-8 text-xs text-[#A5A58D] font-sans",children:"No tones match."})]}),v.jsxs("div",{id:"vowel-details-sidebar",className:"w-7/12 sm:w-2/3 p-4 md:p-6 overflow-y-auto bg-white flex flex-col justify-between",children:[c==="vowels"&&h?v.jsxs("div",{className:"space-y-5",children:[v.jsxs("div",{className:"flex items-start gap-4",children:[v.jsx("div",{className:"h-16 w-16 md:h-18 md:w-18 bg-gradient-to-br from-[#E6C280]/20 via-[#FAF6EE] to-[#D4A373]/20 border border-[#D4A373]/45 rounded-2xl flex flex-col items-center justify-center text-[#C58B58] shadow-3xs flex-none",children:v.jsx("span",{className:"text-4xl md:text-5xl font-serif font-black uppercase leading-none select-none",children:h.vowel})}),v.jsxs("div",{children:[v.jsxs("h4",{className:"text-base md:text-lg font-serif font-bold text-[#3D3D33] tracking-tight",children:["Letter ",h.name]}),v.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 mt-1 bg-[#D4A373]/10 rounded-md border border-[#D4A373]/20 text-xs font-mono text-[#A76F40]",children:["Phoneme: ",v.jsxs("strong",{className:"text-[#3D3D33]",children:["/",h.ipa,"/"]})]})]})]}),v.jsxs("div",{className:"space-y-1.5 font-sans",children:[v.jsx("span",{className:"text-[10px] font-mono text-[#6B705C] uppercase tracking-widest block font-bold",children:"Pronunciation Guide"}),v.jsx("p",{className:"text-xs md:text-sm text-[#3D3D33] leading-relaxed bg-[#F5F2ED] p-3 rounded-xl border border-[#EBE7E0]",children:h.description})]}),v.jsxs("div",{className:"space-y-2 font-sans",children:[v.jsx("span",{className:"text-[10px] font-mono text-[#6B705C] uppercase tracking-widest block font-bold",children:"Example Words"}),v.jsx("div",{className:"grid grid-cols-1 gap-2",children:h.examples.slice(0,3).map((j,N)=>v.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-white border border-[#EBE7E0] hover:border-[#6B705C] transition duration-150 shadow-3xs",children:[v.jsxs("div",{className:"flex flex-col",children:[v.jsx("strong",{className:"text-sm font-semibold text-[#5A5A40] tracking-wide font-serif",children:j.vietnamese}),v.jsx("span",{className:"text-xs text-[#A5A58D] capitalize",children:j.english})]}),v.jsxs("span",{className:"text-[10px] font-mono text-[#A5A58D] font-semibold px-2 py-0.5 border border-[#EBE7E0] rounded bg-[#F5F2ED]",children:["Matches ",h.vowel.toUpperCase()]})]},N))})]})]}):null,c==="tones"&&g?v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"flex items-start gap-4",children:[v.jsx("div",{className:"h-16 w-16 md:h-18 md:w-18 bg-gradient-to-br from-[#D4A373]/20 via-[#FAF6EE] to-[#E6C280]/20 border border-[#D4A373]/40 rounded-2xl flex flex-col items-center justify-center text-[#C58B58] shadow-3xs flex-none select-none",children:v.jsx("span",{className:"text-2xl font-serif font-black uppercase text-[#C58B58]",children:g.mark.split(" ")[0]})}),v.jsxs("div",{children:[v.jsxs("h4",{className:"text-base md:text-lg font-serif font-bold text-[#3D3D33] tracking-tight",children:["Tone: ",g.tone]}),v.jsxs("div",{className:"mt-1 flex flex-wrap gap-1.5",children:[v.jsx("span",{className:"inline-block px-2 py-0.5 bg-[#6B705C]/10 text-[#6B705C] text-[10px] font-mono rounded",children:g.symbolName}),v.jsx("span",{className:"inline-block px-2 py-0.5 bg-[#FAF0E6] text-[#A76F40] text-[10px] font-mono rounded border border-[#E9DCC9]",children:g.ipaDesc})]})]})]}),v.jsxs("div",{className:"space-y-1.5 font-sans",children:[v.jsx("span",{className:"text-[10px] font-mono text-[#D4A373] uppercase tracking-widest block font-bold",children:"Tone Characteristics"}),v.jsx("p",{className:"text-xs md:text-sm text-[#3D3D33] leading-relaxed bg-[#FAF0E6]/50 p-3 rounded-xl border border-[#D4A373]/15",children:g.description})]}),v.jsxs("div",{className:"space-y-2 font-sans",children:[v.jsx("span",{className:"text-[10px] font-mono text-[#D4A373] uppercase tracking-widest block font-bold",children:"Harmonized Accent Examples"}),v.jsx("div",{className:"grid grid-cols-1 gap-2",children:g.examples.map((j,N)=>v.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-white border border-[#EBE7E0] hover:border-[#D4A373] transition duration-150 shadow-3xs",children:[v.jsxs("div",{className:"flex flex-col",children:[v.jsx("strong",{className:"text-sm font-semibold text-[#A76F40] tracking-wide font-serif",children:j.vietnamese}),v.jsx("span",{className:"text-xs text-[#A5A58D] capitalize",children:j.english})]}),v.jsx("span",{className:"text-[10px] font-mono text-[#D4A373] font-semibold px-2.5 py-0.5 border border-[#D4A373]/20 rounded-md bg-[#FAF0E6]",children:g.tone.toUpperCase()})]},N))})]})]}):null]})]})]})}function dw({history:i}){const[l,o]=G.useState(()=>new Date),[s,c]=G.useState(()=>{const C=new Date,L=C.getFullYear(),O=String(C.getMonth()+1).padStart(2,"0"),_=String(C.getDate()).padStart(2,"0");return`${L}-${O}-${_}`}),f=l.getFullYear(),h=l.getMonth(),m=["January","February","March","April","May","June","July","August","September","October","November","December"],g=G.useMemo(()=>new Date(f,h+1,0).getDate(),[f,h]),p=G.useMemo(()=>new Date(f,h,1).getDay(),[f,h]),b=G.useMemo(()=>{const C={};return i.forEach(L=>{const O=L.date||(L.timestamp?L.timestamp.split("T")[0]:"");if(!O)return;C[O]||(C[O]={dateStr:O,total:0,correct:0,accuracy:0,vowelQuiz:{total:0,correct:0},toneQuiz:{total:0,correct:0}});const _=C[O];_.total+=1,L.isCorrect&&(_.correct+=1),L.mode==="toneHarmony"?(_.toneQuiz.total+=1,L.isCorrect&&(_.toneQuiz.correct+=1)):(_.vowelQuiz.total+=1,L.isCorrect&&(_.vowelQuiz.correct+=1))}),Object.keys(C).forEach(L=>{const O=C[L];O.accuracy=O.total>0?Math.round(O.correct/O.total*100):0}),C},[i]),x=()=>{o(new Date(f,h-1,1))},S=()=>{o(new Date(f,h+1,1))},w=G.useMemo(()=>{const C=[];for(let L=0;L<p;L++)C.push(null);for(let L=1;L<=g;L++){const O=String(h+1).padStart(2,"0"),_=String(L).padStart(2,"0"),Q=`${f}-${O}-${_}`,ne=b[Q]||{dateStr:Q,total:0,correct:0,accuracy:0,vowelQuiz:{total:0,correct:0},toneQuiz:{total:0,correct:0}};C.push({dayNum:L,dateStr:Q,stats:ne})}return C},[f,h,g,p,b]),j=s?b[s]:null,N=(C,L,O)=>{let _="h-9 w-9 md:h-10 md:w-10 rounded-lg flex flex-col items-center justify-center text-xs font-semibold relative transition cursor-pointer select-none ";return O?_+=" ring-2 ring-[#5A5A40] ring-offset-1 ":_+=" hover:ring-1 hover:ring-[#A5A58D]/60 ",C===0?_+" bg-[#FAF8F5] text-[#8C867A]/55 border border-[#EBE7E0]/60 ":L>=80?_+" bg-[#6B705C] text-white border border-[#5A5A40] shadow-2xs hover:scale-105 ":L>=50?_+" bg-[#D4A373] text-white border border-[#C58B58] shadow-2xs hover:scale-105 ":_+" bg-[#E6C280]/30 text-[#8C6B30] border border-[#E6C280]/50 hover:scale-105 "},k=C=>{try{const[L,O,_]=C.split("-").map(Number);return new Date(L,O-1,_).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"})}catch{return C}};return v.jsxs("div",{id:"activity-calendar-subpanel",className:"w-full bg-[#FAF8F5]/85 border border-[#EBE7E0] rounded-2xl p-4 md:p-5 font-sans space-y-4",children:[v.jsxs("div",{className:"flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-1.5",children:[v.jsx(_5,{className:"w-4 h-4 text-[#6B705C]"}),v.jsx("h4",{className:"font-serif italic font-bold text-[#3D3D33] text-sm md:text-base",children:"Daily Practice Activity"})]}),v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("button",{type:"button",onClick:x,title:"Previous Month",className:"p-1 hover:bg-[#E9E4DB] text-[#5A5A40] rounded transition cursor-pointer",children:v.jsx(H5,{className:"w-4 h-4"})}),v.jsxs("span",{className:"text-xs font-bold text-[#3D3D33] font-mono min-w-[100px] text-center",children:[m[h]," ",f]}),v.jsx("button",{type:"button",onClick:S,title:"Next Month",className:"p-1 hover:bg-[#E9E4DB] text-[#5A5A40] rounded transition cursor-pointer",children:v.jsx(G5,{className:"w-4 h-4"})})]})]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-5 items-start",children:[v.jsxs("div",{className:"md:col-span-7 flex flex-col items-center bg-white border border-[#EBE7E0] p-4 rounded-xl shadow-3xs w-full",children:[v.jsxs("div",{className:"grid grid-cols-7 gap-1 w-full text-center text-[10px] font-bold text-[#A5A58D] font-mono uppercase pb-2 border-b border-[#EBE7E0]/70 mb-2",children:[v.jsx("div",{children:"Su"}),v.jsx("div",{children:"Mo"}),v.jsx("div",{children:"Tu"}),v.jsx("div",{children:"We"}),v.jsx("div",{children:"Th"}),v.jsx("div",{children:"Fr"}),v.jsx("div",{children:"Sa"})]}),v.jsx("div",{className:"grid grid-cols-7 gap-1.5 w-full justify-items-center",children:w.map((C,L)=>{if(C===null)return v.jsx("div",{className:"h-9 w-9 md:h-10 md:w-10"},`empty-${L}`);const{dayNum:O,dateStr:_,stats:Q}=C,ne=s===_;return v.jsxs("button",{type:"button",onClick:()=>c(_),className:N(Q.total,Q.accuracy,ne),children:[v.jsx("span",{className:"text-[10px] md:text-xs",children:O}),Q.total>0&&v.jsx("span",{className:`absolute bottom-0.5 h-1 w-1 rounded-full ${Q.accuracy>=80||Q.accuracy>=50?"bg-white":"bg-[#8C6B30]"}`})]},_)})}),v.jsxs("div",{className:"flex items-center gap-3 text-[9px] font-mono font-semibold text-[#8C867A] mt-4 pt-3 border-t border-[#EBE7E0]/50 w-full justify-center",children:[v.jsx("span",{children:"No session"}),v.jsxs("div",{className:"flex gap-1.5 items-center",children:[v.jsx("span",{className:"h-3 w-3 rounded bg-[#FAF8F5] border border-[#EBE7E0]/60"}),v.jsx("span",{className:"h-3 w-3 rounded bg-[#E6C280]/40 border border-[#E6C280]/60"}),v.jsx("span",{className:"h-3 w-3 rounded bg-[#D4A373]"}),v.jsx("span",{className:"h-3 w-3 rounded bg-[#6B705C]"})]}),v.jsx("span",{children:"80%+ Accuracy"})]})]}),v.jsx("div",{className:"md:col-span-5 w-full h-full flex flex-col",children:s&&v.jsxs("div",{className:"bg-white border border-[#EBE7E0] rounded-xl p-4 shadow-3xs flex-1 flex flex-col justify-between",children:[v.jsxs("div",{className:"space-y-3.5",children:[v.jsxs("div",{className:"border-b border-[#EBE7E0] pb-2.5",children:[v.jsx("span",{className:"text-[9px] font-mono text-[#A5A58D] uppercase tracking-wider block font-bold",children:"Activity Report"}),v.jsx("h5",{className:"font-serif italic font-bold text-sm text-[#3D3D33] mt-0.5",children:k(s)})]}),j&&j.total>0?v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"grid grid-cols-3 gap-1 px-1.5 py-2.5 bg-[#FAF8F5] border border-[#EBE7E0] rounded-lg text-center",children:[v.jsxs("div",{children:[v.jsx("span",{className:"text-[8px] font-mono text-[#A5A58D] uppercase block",children:"Total"}),v.jsx("span",{className:"text-sm font-bold text-[#3D3D33] font-serif",children:j.total})]}),v.jsxs("div",{className:"border-x border-[#EBE7E0]",children:[v.jsx("span",{className:"text-[8px] font-mono text-[#A5A58D] uppercase block",children:"Correct"}),v.jsx("span",{className:"text-sm font-bold text-[#6B705C] font-serif",children:j.correct})]}),v.jsxs("div",{children:[v.jsx("span",{className:"text-[8px] font-mono text-[#A5A58D] uppercase block",children:"Accuracy"}),v.jsxs("span",{className:"text-sm font-bold text-[#5A5A40] font-serif",children:[j.accuracy,"%"]})]})]}),v.jsxs("div",{className:"space-y-2",children:[v.jsx("span",{className:"text-[8px] font-mono text-[#A5A58D] uppercase tracking-wider block font-bold",children:"Game Modes Breakdown"}),v.jsxs("div",{className:"p-2 border border-[#EBE7E0]/80 rounded-lg flex items-center justify-between bg-white text-xs hover:bg-[#FAF8F5]/50 transition",children:[v.jsxs("div",{className:"space-y-0.5",children:[v.jsx("span",{className:"font-medium text-[#3D3D33] font-serif block",children:"Vowel Recognition"}),v.jsxs("span",{className:"text-[9px] text-[#A5A58D] font-mono",children:[j.vowelQuiz.total," Questions Answered"]})]}),v.jsx("div",{className:"text-right",children:v.jsx("span",{className:"font-bold text-[#5A5A40] font-mono",children:j.vowelQuiz.total>0?`${Math.round(j.vowelQuiz.correct/j.vowelQuiz.total*100)}%`:"—"})})]}),v.jsxs("div",{className:"p-2 border border-[#EBE7E0]/80 rounded-lg flex items-center justify-between bg-white text-xs hover:bg-[#FAF8F5]/50 transition",children:[v.jsxs("div",{className:"space-y-0.5",children:[v.jsx("span",{className:"font-medium text-[#3D3D33] font-serif block",children:"Accent Harmony"}),v.jsxs("span",{className:"text-[9px] text-[#A5A58D] font-mono",children:[j.toneQuiz.total," Tones Classifications"]})]}),v.jsx("div",{className:"text-right",children:v.jsx("span",{className:"font-bold text-[#5A5A40] font-mono",children:j.toneQuiz.total>0?`${Math.round(j.toneQuiz.correct/j.toneQuiz.total*100)}%`:"—"})})]})]})]}):v.jsxs("div",{className:"py-8 text-center text-xs text-[#A5A58D] italic font-sans flex flex-col items-center justify-center gap-1 opacity-80",children:[v.jsx(Hy,{className:"w-5 h-5 text-[#E9E4DB]"}),v.jsx("span",{children:"No quiz sessions completed on this day."}),v.jsx("span",{className:"text-[9px] font-mono not-italic mt-1 text-[#A5A58D]/70 bg-[#FAF8F5] border border-[#EBE7E0] px-2 py-0.5 rounded-full",children:"Play arcade, practice or tone modes!"})]})]}),j&&j.total>0&&v.jsx("div",{className:"text-[9px] text-[#A5A58D] text-left leading-normal font-mono uppercase tracking-wider pt-3 border-t border-[#EBE7E0]/50",children:"⚡ Cumulative Progress Record"})]})})]})]})}function mw({history:i,highScores:l,bestStreak:o,onClearHistory:s,onImportLogs:c}){const[f,h]=G.useState(null),m=()=>{const j=i.length,N=i.filter(C=>C.isCorrect).length,k=j>0?Math.round(N/j*100):0;return{total:j,correct:N,accuracy:k}},{total:g,correct:p,accuracy:b}=m(),x=j=>{const N=j||new Date,k=N.getFullYear(),C=String(N.getMonth()+1).padStart(2,"0"),L=String(N.getDate()).padStart(2,"0");return`${k}-${C}-${L}`},S=()=>{try{const j={app:"vietnamese-vowel-recognition-quiz",exportDate:new Date().toISOString(),history:i,highScores:l||{arcade:0,timeAttack:0,practice:0},bestStreak:o||0},N=new Blob([JSON.stringify(j,null,2)],{type:"application/json"}),k=URL.createObjectURL(N),C=document.createElement("a");C.href=k,C.download=`vietnamese_vowel_quiz_logs_${x()}.json`,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(k)}catch(j){console.error("Export failed",j)}},w=j=>{var C;const N=(C=j.target.files)==null?void 0:C[0];if(!N)return;const k=new FileReader;k.onload=L=>{var O;try{const _=(O=L.target)==null?void 0:O.result,Q=JSON.parse(_);let ne=[],K,F;Array.isArray(Q)?ne=Q:Q&&typeof Q=="object"&&(Array.isArray(Q.history)&&(ne=Q.history),Q.highScores&&typeof Q.highScores=="object"&&(K=Q.highScores),typeof Q.bestStreak=="number"&&(F=Q.bestStreak));const ie=ne.every(se=>se&&typeof se=="object"&&"correctAnswer"in se&&"isCorrect"in se);if(ne.length===0||!ie){h({type:"error",message:"No valid Vietnamese quiz logs found in this backup file."});return}const ee=ne.map(se=>{if(!se.date||!/^\d{4}-\d{2}-\d{2}$/.test(se.date)){let W=new Date;if(se.timestamp){const pe=new Date(se.timestamp);isNaN(pe.getTime())||(W=pe)}se.date=x(W)}return se});c&&c(ee,K,F),Ly(),h({type:"success",message:`Successfully imported ${ee.length} quiz records!`}),setTimeout(()=>h(null),5e3)}catch{h({type:"error",message:"Error: This file does not appear to be a valid JSON file."})}},k.readAsText(N),j.target.value=""};return v.jsxs("div",{id:"history-stats-panel",className:"w-full bg-white border border-[#EBE7E0] rounded-[24px] shadow-sm p-4 md:p-6 overflow-hidden space-y-6",children:[v.jsx("div",{id:"activity-calendar-wrapper",children:v.jsx(dw,{history:i})}),v.jsxs("div",{id:"session-logs-details",className:"border-t border-[#EBE7E0]/80 pt-5 space-y-4",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#EBE7E0]/60 select-none",children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(Hy,{className:"w-4 h-4 text-[#6B705C]"}),v.jsx("h3",{className:"font-serif italic font-bold text-[#3D3D33] text-sm md:text-base",children:"Your Quiz History"})]}),v.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[v.jsx("input",{type:"file",id:"import-logs-input",accept:".json",onChange:w,className:"hidden"}),v.jsxs("button",{type:"button",id:"import-logs-button",onClick:()=>{var j;Yt(),(j=document.getElementById("import-logs-input"))==null||j.click()},className:"text-[10px] uppercase font-mono tracking-wider font-bold flex items-center gap-1.5 bg-[#FAF8F5] hover:bg-[#E9E4DB]/50 text-[#5A5A40] hover:text-[#3D3D33] px-3 py-1.5 rounded-lg border border-[#DCD7CC] hover:border-[#A5A58D] transition duration-150 cursor-pointer shadow-3xs",title:"Import your local backup JSON file to restore progress",children:[v.jsx(sw,{className:"w-3.5 h-3.5 text-[#6B705C]"}),v.jsx("span",{children:"Import Progress"})]}),i.length>0&&v.jsxs("button",{type:"button",id:"export-logs-button",onClick:S,className:"text-[10px] uppercase font-mono tracking-wider font-bold flex items-center gap-1.5 bg-[#FAF8F5] hover:bg-[#FAF0E6] text-[#A76F40] hover:text-[#9E6B40] px-3 py-1.5 rounded-lg border border-[#E9DCC9] hover:border-[#D4A373]/50 transition duration-150 cursor-pointer shadow-3xs",title:"Export your progress, high scores, and logs to a JSON backup file",children:[v.jsx(J5,{className:"w-3.5 h-3.5 text-[#D4A373]"}),v.jsx("span",{children:"Export Progress"})]})]})]}),f&&v.jsxs("div",{id:"import-logs-status-banner",className:`p-3 rounded-xl border text-xs flex items-center justify-between font-sans ${f.type==="success"?"bg-[#6B705C]/10 text-[#5A5A40] border-[#6B705C]/30":"bg-red-50 text-red-800 border-red-200"}`,children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("span",{className:"font-bold",children:f.type==="success"?"✓":"✗"}),v.jsx("span",{children:f.message})]}),v.jsx("button",{type:"button",onClick:()=>h(null),className:"text-[#A5A58D] hover:text-[#3D3D33] font-bold text-sm cursor-pointer px-1",children:"×"})]}),i.length===0?v.jsxs("div",{className:"text-center py-10 flex flex-col items-center justify-center text-[#A5A58D] font-sans space-y-2 bg-[#FAF8F5]/55 border border-dashed border-[#EBE7E0] rounded-xl",children:[v.jsx(Xy,{className:"w-8 h-8 text-[#E9E4DB] animate-pulse"}),v.jsx("p",{className:"text-xs font-semibold",children:"No questions answered yet in your workspace."}),v.jsx("span",{className:"text-[10px] text-[#A5A58D]/80",children:"Complete some challenges to register progress!"})]}):v.jsxs("div",{className:"space-y-4 font-sans",children:[v.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-center",children:[v.jsxs("div",{className:"bg-[#FAF8F5] p-3 rounded-xl border border-[#6B705C]/15 flex flex-col items-center justify-center shadow-3xs hover:scale-[1.02] transition duration-150",children:[v.jsx("span",{className:"text-[9px] font-mono uppercase text-[#6B705C] font-bold block",children:"Answered"}),v.jsx("strong",{className:"text-xl font-serif text-[#3D3D33] mt-0.5 block",children:g})]}),v.jsxs("div",{className:"bg-[#D4A373]/10 p-3 rounded-xl border border-[#D4A373]/20 flex flex-col items-center justify-center shadow-3xs hover:scale-[1.02] transition duration-150",children:[v.jsx("span",{className:"text-[9px] font-mono uppercase text-[#C58B58] font-bold block",children:"Avg. Accuracy"}),v.jsxs("strong",{className:"text-xl font-serif text-[#C58B58] mt-0.5 block",children:[b,"%"]})]}),v.jsxs("div",{className:"bg-[#FAF0E6] p-3 rounded-xl border border-[#E9DCC9] flex flex-col items-center justify-center shadow-3xs hover:scale-[1.02] transition duration-150",children:[v.jsx("span",{className:"text-[9px] font-mono uppercase text-[#A76F40] font-bold block",children:"Correct"}),v.jsx("strong",{className:"text-xl font-serif text-[#9E6B40] mt-0.5 block",children:p})]})]}),v.jsx("div",{className:"space-y-2 max-h-[300px] overflow-y-auto pr-1",children:i.map((j,N)=>v.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between text-xs transition duration-150 shadow-3xs ${j.isCorrect?"bg-[#6B705C]/5 border-[#EBE7E0] hover:bg-[#6B705C]/8":"bg-[#A5A58D]/5 border-[#EBE7E0] hover:bg-[#A5A58D]/8"}`,children:[v.jsxs("div",{className:"flex flex-col space-y-1",children:[v.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[v.jsx("span",{className:"font-semibold text-[#3D3D33] font-serif",children:j.word1.vietnamese}),v.jsx("span",{className:"text-[#A5A58D] italic",children:"&"}),v.jsx("span",{className:"font-semibold text-[#3D3D33] font-serif",children:j.word2.vietnamese})]}),v.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-[#6B705C] font-mono flex-wrap",children:[v.jsx("span",{className:"bg-[#FAF8F5] border border-[#EBE7E0] px-1.5 py-0.5 rounded text-[9px] font-sans font-semibold text-[#6B705C] capitalize",children:j.mode==="toneHarmony"?"Accent mark Match":"Vowel challenge"}),v.jsx("span",{children:"•"}),v.jsxs("span",{children:["Shared: ",v.jsx("strong",{className:"uppercase text-[#5A5A40] font-serif",children:j.correctAnswer})]}),v.jsx("span",{children:"•"}),v.jsxs("span",{children:["Your choice: ",v.jsx("strong",{className:`uppercase font-serif ${j.isCorrect?"text-[#6B705C]":"text-red-500 font-bold"}`,children:j.userAnswer})]})]})]}),v.jsx("div",{className:"flex items-center justify-center",children:j.isCorrect?v.jsx("div",{className:"h-6 w-6 rounded-full bg-[#6B705C]/15 text-[#6B705C] flex items-center justify-center shadow-3xs border border-[#6B705C]/10",children:v.jsx(L5,{className:"w-3.5 h-3.5"})}):v.jsx("div",{className:"h-6 w-6 rounded-full bg-[#A5A58D]/15 text-[#3D3D33] flex items-center justify-center shadow-3xs border border-[#A5A58D]/10",children:v.jsx(Gy,{className:"w-3.5 h-3.5"})})})]},N))})]})]})]})}function pw(){const[i,l]=G.useState([]),[o,s]=G.useState(null),[c,f]=G.useState(null),[h,m]=G.useState("expert"),[g,p]=G.useState(!1),[b,x]=G.useState(0),[S,w]=G.useState(0),[j,N]=G.useState(()=>{const Z=localStorage.getItem("vietnamese_vowel_best_streak");return Z?Number(Z):0}),[k,C]=G.useState(3),[L,O]=G.useState(60),[_,Q]=G.useState(0),[ne,K]=G.useState(0),[F,ie]=G.useState(null),[ee,se]=G.useState(!1),[W,pe]=G.useState(!1),[ge,ve]=G.useState(()=>{const Z=localStorage.getItem("vietnamese_vowel_highscores");return Z?JSON.parse(Z):{arcade:0,timeAttack:0,practice:0}}),[V,X]=G.useState(()=>{const Z=localStorage.getItem("vietnamese_vowel_history");return Z?JSON.parse(Z):[]});G.useEffect(()=>{localStorage.setItem("vietnamese_vowel_history",JSON.stringify(V))},[V]),G.useEffect(()=>{localStorage.setItem("vietnamese_vowel_best_streak",String(j))},[j]);const J=G.useRef(null);G.useEffect(()=>{const Z=Uy();l(Z)},[]),G.useEffect(()=>(g&&c==="timeAttack"&&(J.current=setInterval(()=>{O(Z=>Z<=1?(ue(),0):Z-1)},1e3)),()=>{J.current&&clearInterval(J.current)}),[g,c]);const ue=Z=>{p(!1),Kv(),J.current&&clearInterval(J.current);const le=c||"arcade";if(b>(ge[le]||0)){const ce={...ge,[le]:b};ve(ce),localStorage.setItem("vietnamese_vowel_highscores",JSON.stringify(ce)),Ly()}},me=(Z="practice")=>{if(Yt(),window.scrollTo(0,0),f(Z),m("expert"),x(0),w(0),C(3),O(60),Q(0),K(0),ie(null),se(!1),p(!0),i.length>0){const le=Z==="toneHarmony"?Zv(i,new Set):Gv(i,new Set,0);s(le)}},T=()=>{Yt(),p(!1),f(null),s(null),ie(null)},H=Z=>{if(!o||F)return;ie(Z);const le=Z===o.correctAnswer;Q(ft=>ft+1);const ce=h==="beginner"?10:h==="intermediate"?20:35;if(le){E5(),K(ai=>ai+1);const ft=S+1;w(ft),ft>j&&N(ft);const zt=ft>=3?Math.floor(ft/3)+1:1,Ta=ce*zt;x(ai=>ai+Ta)}else Kv(),w(0),c==="arcade"&&C(ft=>{const zt=ft-1;return zt<=0&&setTimeout(()=>{ue()},600),zt});const je=new Date,et=je.getFullYear(),Ue=String(je.getMonth()+1).padStart(2,"0"),ii=String(je.getDate()).padStart(2,"0"),Mi=`${et}-${Ue}-${ii}`,wa={word1:o.word1,word2:o.word2,correctAnswer:o.correctAnswer,userAnswer:Z,isCorrect:le,timestamp:je.toLocaleTimeString(),date:Mi,mode:c||"practice"};X(ft=>[wa,...ft])},$=()=>{if(Yt(),ie(null),se(!1),i.length>0){const Z=c==="toneHarmony"?Zv(i,new Set):Gv(i,new Set,_);s(Z)}};return v.jsxs("div",{id:"main-app-shell",className:"min-h-screen bg-[#FAF8F5] text-[#3D3D33] font-sans flex flex-col justify-between selection:bg-[#E9E4DB] selection:text-[#5A5A40]",children:[v.jsx("div",{className:"h-[3px] w-full bg-gradient-to-r from-[#6B705C] via-[#D4A373] to-[#E6C280] flex-none z-50 shadow-3xs"}),v.jsx("header",{id:"primary-navbar",className:"bg-white/95 border-b border-[#EBE7E0] sticky top-0 z-45 shadow-3xs backdrop-blur-md",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[v.jsxs("div",{className:"flex items-center gap-2.5",children:[v.jsx("div",{className:"h-9 w-9 rounded-xl bg-gradient-to-tr from-[#6B705C] to-[#5A5A40] border border-[#D4A373]/30 flex items-center justify-center text-white shadow-xs",children:v.jsx("span",{className:"font-serif font-black text-lg select-none",children:"V"})}),v.jsxs("div",{className:"flex flex-col",children:[v.jsx("h1",{className:"font-serif italic font-bold text-[#3D3D33] tracking-tight leading-tight text-sm sm:text-base",children:"Vietnamese Vowel Recognition Quiz"}),v.jsx("span",{className:"text-[10px] text-[#A5A58D] font-mono tracking-wider",children:"Nguyên Âm Tiếng Việt Study Center"})]})]}),v.jsx("div",{className:"flex items-center gap-2.5",children:v.jsx("button",{type:"button",id:"toggle-dictionary-button",onClick:()=>{Yt(),pe(!W)},title:"Vietnamese Study Reference","aria-label":"Vietnamese Study Reference",className:`p-2.5 rounded-xl transition duration-150 cursor-pointer border flex items-center justify-center ${W?"bg-[#6B705C] text-white border-[#6B705C] hover:bg-[#5A5A40]":"bg-[#F2EFE9] hover:bg-[#E9E4DB] text-[#5A5A40] border-[#DCD7CC] shadow-3xs"}`,children:v.jsx(Yy,{className:"w-4 h-4"})})})]})}),v.jsxs("main",{id:"main-application-panel",className:`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full flex flex-col items-center transition-all ${g?"py-3.5":"py-8"} space-y-12`,children:[v.jsx("div",{className:"w-full flex flex-col items-center",children:v.jsx(_c,{mode:"wait",children:g?v.jsx(jl.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},className:"w-full flex flex-col items-center space-y-4",children:o&&v.jsx(hw,{question:o,difficulty:h,onAnswer:H,selectedAnswer:F,showCorrect:F!==null,scoreMultiplier:h==="beginner"?10:h==="intermediate"?20:35,onNext:$,streak:S,bestStreak:j,onExit:T})},"playing-panel"):v.jsxs(jl.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},id:"gamemode-lobby",className:"w-full bg-white border border-[#EBE7E0] rounded-[32px] shadow-sm p-6 md:p-10 space-y-8",children:[v.jsxs("div",{className:"text-center max-w-xl mx-auto space-y-2",children:[v.jsx("h2",{className:"text-2xl md:text-3xl font-serif italic text-[#3D3D33] tracking-tight font-bold",children:"Vietnamese Vowel & Tone Trainer"}),v.jsx("p",{className:"text-xs md:text-sm text-[#6B705C] leading-relaxed font-sans",children:"Master standard Vietnamese spelling and pitch contours! Practice identifying shared vowel letters or hearing how identical tone marks shape words."})]}),v.jsxs("div",{className:"space-y-4 font-sans bg-[#FAF8F5]/80 p-6 rounded-2xl border border-[#EBE7E0]",children:[v.jsx("span",{className:"text-[11px] font-mono font-bold text-[#A5A58D] uppercase tracking-widest block",children:"Instructions & Rules"}),v.jsxs("ul",{className:"space-y-3.5 text-xs md:text-sm text-[#5A5A40] leading-relaxed",children:[v.jsxs("li",{className:"flex items-start gap-3",children:[v.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"1"}),v.jsxs("div",{children:[v.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Mental Translation Setup"}),"You will be shown dual English words side-by-side. Their Vietnamese equivalents are completely hidden on screen."]})]}),v.jsxs("li",{className:"flex items-start gap-3",children:[v.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"2"}),v.jsxs("div",{children:[v.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Spot Vowels or Accent Marks"}),"Identify the shared base vowel symbol in Vowel Recognition, or find the identical tone accent mark (Ngang, Sắc, Huyền, Hỏi, Ngã, Nặng) shared across the terms in Accent Harmony."]})]}),v.jsxs("li",{className:"flex items-start gap-3",children:[v.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"3"}),v.jsxs("div",{children:[v.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Climbing Word Complexity"}),"You will start with simple, short English words. As your correct answer streak goes up and you progress through the session, the length and cognitive complexity of the English prompt terms will grow."]})]}),v.jsxs("li",{className:"flex items-start gap-3",children:[v.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"4"}),v.jsxs("div",{children:[v.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Study Reference Guides"}),"Toggle the Study Reference anytime using the book button in the top right to study the distinct Vietnamese vowels, pronunciation phonemes, IPA charts, and pitch contours."]})]}),v.jsxs("li",{className:"flex items-start gap-3",children:[v.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"5"}),v.jsxs("div",{children:[v.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Transfer Progress Anywhere"}),"Transfer your statistics, high scores, and daily activity calendar between devices! Download your progress as a backup JSON file, and import it anytime in the logs section below."]})]})]})]}),v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-4 font-sans",children:[v.jsxs("div",{className:"bg-[#FAF8F5]/80 border-t-4 border-t-[#6B705C] border-x border-b border-[#EBE7E0] p-6 rounded-[24px] space-y-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition duration-150",children:[v.jsxs("div",{className:"space-y-2",children:[v.jsx("div",{className:"h-10 w-10 bg-gradient-to-br from-[#6B705C]/20 to-[#6B705C]/5 rounded-xl flex items-center justify-center text-[#6B705C] border border-[#6B705C]/20 shadow-3xs",children:v.jsx(aw,{className:"w-5 h-5 text-[#6B705C]"})}),v.jsx("h3",{className:"font-serif italic font-bold text-lg text-[#3D3D33] tracking-tight",children:"Vowel Recognition Challenge"}),v.jsx("p",{className:"text-xs text-[#6B705C] leading-relaxed",children:"Translate hidden English terms mentally to identify isomorphs and spot their shared central Vietnamese vowel symbol."})]}),v.jsx("div",{children:v.jsxs("button",{type:"button",id:"start-vowel-quiz-button",onClick:()=>me("practice"),className:"w-full py-3 bg-[#6B705C] hover:bg-[#5A5A40] text-white font-serif italic text-sm rounded-full flex items-center justify-center gap-1.5 transition duration-155 cursor-pointer font-bold shadow-2xs hover:shadow-xs mt-2",children:[v.jsx(Wv,{className:"w-3.5 h-3.5 fill-white"}),v.jsx("span",{children:"Start Vowel Quest"})]})})]}),v.jsxs("div",{className:"bg-[#FAF8F5]/80 border-t-4 border-t-[#D4A373] border-x border-b border-[#EBE7E0] p-6 rounded-[24px] space-y-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition duration-150",children:[v.jsxs("div",{className:"space-y-2",children:[v.jsx("div",{className:"h-10 w-10 bg-gradient-to-br from-[#D4A373]/20 to-[#D4A373]/5 rounded-xl flex items-center justify-center text-[#C58B58] border border-[#D4A373]/30 shadow-3xs",children:v.jsx(Xy,{className:"w-5 h-5 text-[#C58B58]"})}),v.jsx("h3",{className:"font-serif italic font-bold text-lg text-[#3D3D33] tracking-tight",children:"Accent Mark Harmony Challenge"}),v.jsx("p",{className:"text-xs text-[#6B705C] leading-relaxed",children:"Identify identical accent marks across matching consonant structures and classify standard Vietnamese tone diacritic keys."})]}),v.jsx("div",{children:v.jsxs("button",{type:"button",id:"start-tone-harmony-button",onClick:()=>me("toneHarmony"),className:"w-full py-3 bg-[#D4A373] hover:bg-[#C58B58] border border-[#C58B58]/25 text-white font-serif italic text-sm rounded-full flex items-center justify-center gap-1.5 transition duration-155 cursor-pointer font-bold shadow-2xs hover:shadow-xs mt-2",children:[v.jsx(Wv,{className:"w-3.5 h-3.5 fill-white"}),v.jsx("span",{children:"Start Tone Match"})]})})]})]})]},"lobby-panel")})}),v.jsx("div",{id:"session-history-container",className:"w-full pt-6 border-t border-[#EBE7E0]",children:v.jsx(mw,{history:V,highScores:ge,bestStreak:j,onClearHistory:()=>{Yt(),X([])},onImportLogs:(Z,le,ce)=>{X(Z),le&&(ve(le),localStorage.setItem("vietnamese_vowel_highscores",JSON.stringify(le))),typeof ce=="number"&&(N(ce),localStorage.setItem("vietnamese_vowel_best_streak",String(ce)))}})})]}),v.jsx("footer",{id:"primary-footer",className:"bg-white border-t border-[#EBE7E0] mt-16 py-8",children:v.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A58D] font-sans",children:[v.jsx("p",{children:"© 2026 Vietnamese Vowel Recognition Study Center. Built using standard orthographic guidelines."}),v.jsxs("div",{className:"flex items-center gap-4",children:[v.jsx("span",{children:"Learn Vietnamese Phonetics"}),v.jsx("span",{children:"•"}),v.jsx("span",{children:"Accent Vowel Recognition Code"})]})]})}),v.jsx(_c,{children:W&&v.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",id:"vowel-dictionary-drawer-shell",children:[v.jsx(jl.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>{Yt(),pe(!1)},className:"absolute inset-0 bg-black/35 backdrop-blur-xs transition-opacity cursor-pointer animate-fade-in"}),v.jsx("div",{className:"absolute inset-y-0 right-0 max-w-full flex pl-10",children:v.jsx(jl.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:26,stiffness:220},className:"w-screen max-w-md md:max-w-2xl bg-white shadow-2xl flex flex-col h-full relative",children:v.jsx("div",{className:"h-full p-3 md:p-4 flex flex-col overflow-hidden",children:v.jsx(fw,{onClose:()=>{Yt(),pe(!1)}})})})})]})})]})}Ax.createRoot(document.getElementById("root")).render(v.jsx(G.StrictMode,{children:v.jsx(pw,{})}));
