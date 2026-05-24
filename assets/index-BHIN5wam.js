(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function o(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(c){if(c.ep)return;c.ep=!0;const f=o(c);fetch(c.href,f)}})();var Gu={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function fx(){if(vv)return yl;vv=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(s,c,f){var h=null;if(f!==void 0&&(h=""+f),c.key!==void 0&&(h=""+c.key),"key"in c){f={};for(var m in c)m!=="key"&&(f[m]=c[m])}else f=c;return c=f.ref,{$$typeof:i,type:s,key:h,ref:c!==void 0?c:null,props:f}}return yl.Fragment=l,yl.jsx=o,yl.jsxs=o,yl}var pv;function dx(){return pv||(pv=1,Gu.exports=fx()),Gu.exports}var g=dx(),Xu={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function mx(){if(gv)return ut;gv=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),S=Symbol.iterator;function A(T){return T===null||typeof T!="object"?null:(T=S&&T[S]||T["@@iterator"],typeof T=="function"?T:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,O={};function z(T,H,W){this.props=T,this.context=H,this.refs=O,this.updater=W||C}z.prototype.isReactComponent={},z.prototype.setState=function(T,H){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,H,"setState")},z.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function q(){}q.prototype=z.prototype;function _(T,H,W){this.props=T,this.context=H,this.refs=O,this.updater=W||C}var U=_.prototype=new q;U.constructor=_,B(U,z.prototype),U.isPureReactComponent=!0;var Q=Array.isArray;function at(){}var K={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function nt(T,H,W){var Z=W.ref;return{$$typeof:i,type:T,key:H,ref:Z!==void 0?Z:null,props:W}}function et(T,H){return nt(T.type,H,T.props)}function dt(T){return typeof T=="object"&&T!==null&&T.$$typeof===i}function $(T){var H={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(W){return H[W]})}var St=/\/+/g;function yt(T,H){return typeof T=="object"&&T!==null&&T.key!=null?$(""+T.key):H.toString(36)}function vt(T){switch(T.status){case"fulfilled":return T.value;case"rejected":throw T.reason;default:switch(typeof T.status=="string"?T.then(at,at):(T.status="pending",T.then(function(H){T.status==="pending"&&(T.status="fulfilled",T.value=H)},function(H){T.status==="pending"&&(T.status="rejected",T.reason=H)})),T.status){case"fulfilled":return T.value;case"rejected":throw T.reason}}throw T}function N(T,H,W,Z,st){var ct=typeof T;(ct==="undefined"||ct==="boolean")&&(T=null);var jt=!1;if(T===null)jt=!0;else switch(ct){case"bigint":case"string":case"number":jt=!0;break;case"object":switch(T.$$typeof){case i:case l:jt=!0;break;case b:return jt=T._init,N(jt(T._payload),H,W,Z,st)}}if(jt)return st=st(T),jt=Z===""?"."+yt(T,0):Z,Q(st)?(W="",jt!=null&&(W=jt.replace(St,"$&/")+"/"),N(st,H,W,"",function(ii){return ii})):st!=null&&(dt(st)&&(st=et(st,W+(st.key==null||T&&T.key===st.key?"":(""+st.key).replace(St,"$&/")+"/")+jt)),H.push(st)),1;jt=0;var te=Z===""?".":Z+":";if(Q(T))for(var Ut=0;Ut<T.length;Ut++)Z=T[Ut],ct=te+yt(Z,Ut),jt+=N(Z,H,W,ct,st);else if(Ut=A(T),typeof Ut=="function")for(T=Ut.call(T),Ut=0;!(Z=T.next()).done;)Z=Z.value,ct=te+yt(Z,Ut++),jt+=N(Z,H,W,ct,st);else if(ct==="object"){if(typeof T.then=="function")return N(vt(T),H,W,Z,st);throw H=String(T),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return jt}function X(T,H,W){if(T==null)return T;var Z=[],st=0;return N(T,Z,"","",function(ct){return H.call(W,ct,st++)}),Z}function F(T){if(T._status===-1){var H=T._result;H=H(),H.then(function(W){(T._status===0||T._status===-1)&&(T._status=1,T._result=W)},function(W){(T._status===0||T._status===-1)&&(T._status=2,T._result=W)}),T._status===-1&&(T._status=0,T._result=H)}if(T._status===1)return T._result.default;throw T._result}var rt=typeof reportError=="function"?reportError:function(T){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof T=="object"&&T!==null&&typeof T.message=="string"?String(T.message):String(T),error:T});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",T);return}console.error(T)},mt={map:X,forEach:function(T,H,W){X(T,function(){H.apply(this,arguments)},W)},count:function(T){var H=0;return X(T,function(){H++}),H},toArray:function(T){return X(T,function(H){return H})||[]},only:function(T){if(!dt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}};return ut.Activity=x,ut.Children=mt,ut.Component=z,ut.Fragment=o,ut.Profiler=c,ut.PureComponent=_,ut.StrictMode=s,ut.Suspense=p,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ut.__COMPILER_RUNTIME={__proto__:null,c:function(T){return K.H.useMemoCache(T)}},ut.cache=function(T){return function(){return T.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(T,H,W){if(T==null)throw Error("The argument must be a React element, but you passed "+T+".");var Z=B({},T.props),st=T.key;if(H!=null)for(ct in H.key!==void 0&&(st=""+H.key),H)!J.call(H,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&H.ref===void 0||(Z[ct]=H[ct]);var ct=arguments.length-2;if(ct===1)Z.children=W;else if(1<ct){for(var jt=Array(ct),te=0;te<ct;te++)jt[te]=arguments[te+2];Z.children=jt}return nt(T.type,st,Z)},ut.createContext=function(T){return T={$$typeof:h,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null},T.Provider=T,T.Consumer={$$typeof:f,_context:T},T},ut.createElement=function(T,H,W){var Z,st={},ct=null;if(H!=null)for(Z in H.key!==void 0&&(ct=""+H.key),H)J.call(H,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(st[Z]=H[Z]);var jt=arguments.length-2;if(jt===1)st.children=W;else if(1<jt){for(var te=Array(jt),Ut=0;Ut<jt;Ut++)te[Ut]=arguments[Ut+2];st.children=te}if(T&&T.defaultProps)for(Z in jt=T.defaultProps,jt)st[Z]===void 0&&(st[Z]=jt[Z]);return nt(T,ct,st)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(T){return{$$typeof:m,render:T}},ut.isValidElement=dt,ut.lazy=function(T){return{$$typeof:b,_payload:{_status:-1,_result:T},_init:F}},ut.memo=function(T,H){return{$$typeof:v,type:T,compare:H===void 0?null:H}},ut.startTransition=function(T){var H=K.T,W={};K.T=W;try{var Z=T(),st=K.S;st!==null&&st(W,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(at,rt)}catch(ct){rt(ct)}finally{H!==null&&W.types!==null&&(H.types=W.types),K.T=H}},ut.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ut.use=function(T){return K.H.use(T)},ut.useActionState=function(T,H,W){return K.H.useActionState(T,H,W)},ut.useCallback=function(T,H){return K.H.useCallback(T,H)},ut.useContext=function(T){return K.H.useContext(T)},ut.useDebugValue=function(){},ut.useDeferredValue=function(T,H){return K.H.useDeferredValue(T,H)},ut.useEffect=function(T,H){return K.H.useEffect(T,H)},ut.useEffectEvent=function(T){return K.H.useEffectEvent(T)},ut.useId=function(){return K.H.useId()},ut.useImperativeHandle=function(T,H,W){return K.H.useImperativeHandle(T,H,W)},ut.useInsertionEffect=function(T,H){return K.H.useInsertionEffect(T,H)},ut.useLayoutEffect=function(T,H){return K.H.useLayoutEffect(T,H)},ut.useMemo=function(T,H){return K.H.useMemo(T,H)},ut.useOptimistic=function(T,H){return K.H.useOptimistic(T,H)},ut.useReducer=function(T,H,W){return K.H.useReducer(T,H,W)},ut.useRef=function(T){return K.H.useRef(T)},ut.useState=function(T){return K.H.useState(T)},ut.useSyncExternalStore=function(T,H,W){return K.H.useSyncExternalStore(T,H,W)},ut.useTransition=function(){return K.H.useTransition()},ut.version="19.2.6",ut}var yv;function Lc(){return yv||(yv=1,Xu.exports=mx()),Xu.exports}var G=Lc(),Qu={exports:{}},bl={},Zu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bv;function vx(){return bv||(bv=1,(function(i){function l(N,X){var F=N.length;N.push(X);t:for(;0<F;){var rt=F-1>>>1,mt=N[rt];if(0<c(mt,X))N[rt]=X,N[F]=mt,F=rt;else break t}}function o(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var X=N[0],F=N.pop();if(F!==X){N[0]=F;t:for(var rt=0,mt=N.length,T=mt>>>1;rt<T;){var H=2*(rt+1)-1,W=N[H],Z=H+1,st=N[Z];if(0>c(W,F))Z<mt&&0>c(st,W)?(N[rt]=st,N[Z]=F,rt=Z):(N[rt]=W,N[H]=F,rt=H);else if(Z<mt&&0>c(st,F))N[rt]=st,N[Z]=F,rt=Z;else break t}}return X}function c(N,X){var F=N.sortIndex-X.sortIndex;return F!==0?F:N.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var h=Date,m=h.now();i.unstable_now=function(){return h.now()-m}}var p=[],v=[],b=1,x=null,S=3,A=!1,C=!1,B=!1,O=!1,z=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function U(N){for(var X=o(v);X!==null;){if(X.callback===null)s(v);else if(X.startTime<=N)s(v),X.sortIndex=X.expirationTime,l(p,X);else break;X=o(v)}}function Q(N){if(B=!1,U(N),!C)if(o(p)!==null)C=!0,at||(at=!0,$());else{var X=o(v);X!==null&&vt(Q,X.startTime-N)}}var at=!1,K=-1,J=5,nt=-1;function et(){return O?!0:!(i.unstable_now()-nt<J)}function dt(){if(O=!1,at){var N=i.unstable_now();nt=N;var X=!0;try{t:{C=!1,B&&(B=!1,q(K),K=-1),A=!0;var F=S;try{e:{for(U(N),x=o(p);x!==null&&!(x.expirationTime>N&&et());){var rt=x.callback;if(typeof rt=="function"){x.callback=null,S=x.priorityLevel;var mt=rt(x.expirationTime<=N);if(N=i.unstable_now(),typeof mt=="function"){x.callback=mt,U(N),X=!0;break e}x===o(p)&&s(p),U(N)}else s(p);x=o(p)}if(x!==null)X=!0;else{var T=o(v);T!==null&&vt(Q,T.startTime-N),X=!1}}break t}finally{x=null,S=F,A=!1}X=void 0}}finally{X?$():at=!1}}}var $;if(typeof _=="function")$=function(){_(dt)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,yt=St.port2;St.port1.onmessage=dt,$=function(){yt.postMessage(null)}}else $=function(){z(dt,0)};function vt(N,X){K=z(function(){N(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(N){N.callback=null},i.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<N?Math.floor(1e3/N):5},i.unstable_getCurrentPriorityLevel=function(){return S},i.unstable_next=function(N){switch(S){case 1:case 2:case 3:var X=3;break;default:X=S}var F=S;S=X;try{return N()}finally{S=F}},i.unstable_requestPaint=function(){O=!0},i.unstable_runWithPriority=function(N,X){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=S;S=N;try{return X()}finally{S=F}},i.unstable_scheduleCallback=function(N,X,F){var rt=i.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?rt+F:rt):F=rt,N){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=F+mt,N={id:b++,callback:X,priorityLevel:N,startTime:F,expirationTime:mt,sortIndex:-1},F>rt?(N.sortIndex=F,l(v,N),o(p)===null&&N===o(v)&&(B?(q(K),K=-1):B=!0,vt(Q,F-rt))):(N.sortIndex=mt,l(p,N),C||A||(C=!0,at||(at=!0,$()))),N},i.unstable_shouldYield=et,i.unstable_wrapCallback=function(N){var X=S;return function(){var F=S;S=X;try{return N.apply(this,arguments)}finally{S=F}}}})(Ku)),Ku}var xv;function px(){return xv||(xv=1,Zu.exports=vx()),Zu.exports}var Fu={exports:{}},re={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function gx(){if(Sv)return re;Sv=1;var i=Lc();function l(p){var v="https://react.dev/errors/"+p;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)v+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+p+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var s={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},c=Symbol.for("react.portal");function f(p,v,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:c,key:x==null?null:""+x,children:p,containerInfo:v,implementation:b}}var h=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,v){if(p==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,re.createPortal=function(p,v){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(l(299));return f(p,v,null,b)},re.flushSync=function(p){var v=h.T,b=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=v,s.p=b,s.d.f()}},re.preconnect=function(p,v){typeof p=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(p,v))},re.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},re.preinit=function(p,v){if(typeof p=="string"&&v&&typeof v.as=="string"){var b=v.as,x=m(b,v.crossOrigin),S=typeof v.integrity=="string"?v.integrity:void 0,A=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;b==="style"?s.d.S(p,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:x,integrity:S,fetchPriority:A}):b==="script"&&s.d.X(p,{crossOrigin:x,integrity:S,fetchPriority:A,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},re.preinitModule=function(p,v){if(typeof p=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var b=m(v.as,v.crossOrigin);s.d.M(p,{crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(p)},re.preload=function(p,v){if(typeof p=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var b=v.as,x=m(b,v.crossOrigin);s.d.L(p,b,{crossOrigin:x,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},re.preloadModule=function(p,v){if(typeof p=="string")if(v){var b=m(v.as,v.crossOrigin);s.d.m(p,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:b,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(p)},re.requestFormReset=function(p){s.d.r(p)},re.unstable_batchedUpdates=function(p,v){return p(v)},re.useFormState=function(p,v,b){return h.H.useFormState(p,v,b)},re.useFormStatus=function(){return h.H.useHostTransitionStatus()},re.version="19.2.6",re}var jv;function yx(){if(jv)return Fu.exports;jv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Fu.exports=gx(),Fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av;function bx(){if(Av)return bl;Av=1;var i=px(),l=Lc(),o=yx();function s(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function h(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function m(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function v(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(s(188));return e!==t?null:t}for(var n=t,a=e;;){var r=n.return;if(r===null)break;var u=r.alternate;if(u===null){if(a=r.return,a!==null){n=a;continue}break}if(r.child===u.child){for(u=r.child;u;){if(u===n)return p(r),t;if(u===a)return p(r),e;u=u.sibling}throw Error(s(188))}if(n.return!==a.return)n=r,a=u;else{for(var d=!1,y=r.child;y;){if(y===n){d=!0,n=r,a=u;break}if(y===a){d=!0,a=r,n=u;break}y=y.sibling}if(!d){for(y=u.child;y;){if(y===n){d=!0,n=u,a=r;break}if(y===a){d=!0,a=u,n=r;break}y=y.sibling}if(!d)throw Error(s(189))}}if(n.alternate!==a)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?t:e}function b(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=b(t),e!==null)return e;t=t.sibling}return null}var x=Object.assign,S=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),O=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),_=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),at=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),nt=Symbol.for("react.activity"),et=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=dt&&t[dt]||t["@@iterator"],typeof t=="function"?t:null)}var St=Symbol.for("react.client.reference");function yt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===St?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case B:return"Fragment";case z:return"Profiler";case O:return"StrictMode";case Q:return"Suspense";case at:return"SuspenseList";case nt:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case _:return t.displayName||"Context";case q:return(t._context.displayName||"Context")+".Consumer";case U:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case K:return e=t.displayName||null,e!==null?e:yt(t.type)||"Memo";case J:e=t._payload,t=t._init;try{return yt(t(e))}catch{}}return null}var vt=Array.isArray,N=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},rt=[],mt=-1;function T(t){return{current:t}}function H(t){0>mt||(t.current=rt[mt],rt[mt]=null,mt--)}function W(t,e){mt++,rt[mt]=t.current,t.current=e}var Z=T(null),st=T(null),ct=T(null),jt=T(null);function te(t,e){switch(W(ct,e),W(st,t),W(Z,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Um(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Um(e),t=Lm(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}H(Z),W(Z,t)}function Ut(){H(Z),H(st),H(ct)}function ii(t){t.memoizedState!==null&&W(jt,t);var e=Z.current,n=Lm(e,t.type);e!==n&&(W(st,t),W(Z,n))}function Mi(t){st.current===t&&(H(Z),H(st)),jt.current===t&&(H(jt),ml._currentValue=F)}var Ta,fe;function ze(t){if(Ta===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ta=e&&e[1]||"",fe=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ta+t+fe}var wa=!1;function ai(t,e){if(!t||wa)return"";wa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(R){var V=R}Reflect.construct(t,[],Y)}else{try{Y.call()}catch(R){V=R}t.call(Y.prototype)}}else{try{throw Error()}catch(R){V=R}(Y=t())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(R){if(R&&V&&typeof R.stack=="string")return[R.stack,V.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),d=u[0],y=u[1];if(d&&y){var j=d.split(`
`),M=y.split(`
`);for(r=a=0;a<j.length&&!j[a].includes("DetermineComponentFrameRoot");)a++;for(;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;if(a===j.length||r===M.length)for(a=j.length-1,r=M.length-1;1<=a&&0<=r&&j[a]!==M[r];)r--;for(;1<=a&&0<=r;a--,r--)if(j[a]!==M[r]){if(a!==1||r!==1)do if(a--,r--,0>r||j[a]!==M[r]){var k=`
`+j[a].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=a&&0<=r);break}}}finally{wa=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?ze(n):""}function Gy(t,e){switch(t.tag){case 26:case 27:case 5:return ze(t.type);case 16:return ze("Lazy");case 13:return t.child!==e&&e!==null?ze("Suspense Fallback"):ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return ai(t.type,!1);case 11:return ai(t.type.render,!1);case 1:return ai(t.type,!0);case 31:return ze("Activity");default:return""}}function mh(t){try{var e="",n=null;do e+=Gy(t,n),n=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Do=Object.prototype.hasOwnProperty,Mo=i.unstable_scheduleCallback,No=i.unstable_cancelCallback,Xy=i.unstable_shouldYield,Qy=i.unstable_requestPaint,xe=i.unstable_now,Zy=i.unstable_getCurrentPriorityLevel,vh=i.unstable_ImmediatePriority,ph=i.unstable_UserBlockingPriority,Ol=i.unstable_NormalPriority,Ky=i.unstable_LowPriority,gh=i.unstable_IdlePriority,Fy=i.log,Jy=i.unstable_setDisableYieldValue,Ea=null,Se=null;function Tn(t){if(typeof Fy=="function"&&Jy(t),Se&&typeof Se.setStrictMode=="function")try{Se.setStrictMode(Ea,t)}catch{}}var je=Math.clz32?Math.clz32:Py,Wy=Math.log,$y=Math.LN2;function Py(t){return t>>>=0,t===0?32:31-(Wy(t)/$y|0)|0}var kl=256,_l=262144,Ul=4194304;function li(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ll(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var r=0,u=t.suspendedLanes,d=t.pingedLanes;t=t.warmLanes;var y=a&134217727;return y!==0?(a=y&~u,a!==0?r=li(a):(d&=y,d!==0?r=li(d):n||(n=y&~t,n!==0&&(r=li(n))))):(y=a&~u,y!==0?r=li(y):d!==0?r=li(d):n||(n=a&~t,n!==0&&(r=li(n)))),r===0?0:e!==0&&e!==r&&(e&u)===0&&(u=r&-r,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:r}function Ca(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Iy(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yh(){var t=Ul;return Ul<<=1,(Ul&62914560)===0&&(Ul=4194304),t}function zo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function tb(t,e,n,a,r,u){var d=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var y=t.entanglements,j=t.expirationTimes,M=t.hiddenUpdates;for(n=d&~n;0<n;){var k=31-je(n),Y=1<<k;y[k]=0,j[k]=-1;var V=M[k];if(V!==null)for(M[k]=null,k=0;k<V.length;k++){var R=V[k];R!==null&&(R.lane&=-536870913)}n&=~Y}a!==0&&bh(t,a,0),u!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=u&~(d&~e))}function bh(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-je(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&261930}function xh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-je(n),r=1<<a;r&e|t[a]&e&&(t[a]|=e),n&=~r}}function Sh(t,e){var n=e&-e;return n=(n&42)!==0?1:Vo(n),(n&(t.suspendedLanes|e))!==0?0:n}function Vo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ro(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function jh(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:rv(t.type))}function Ah(t,e){var n=X.p;try{return X.p=t,e()}finally{X.p=n}}var wn=Math.random().toString(36).slice(2),ee="__reactFiber$"+wn,de="__reactProps$"+wn,Ni="__reactContainer$"+wn,Bo="__reactEvents$"+wn,eb="__reactListeners$"+wn,nb="__reactHandles$"+wn,Th="__reactResources$"+wn,Ma="__reactMarker$"+wn;function Oo(t){delete t[ee],delete t[de],delete t[Bo],delete t[eb],delete t[nb]}function zi(t){var e=t[ee];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[ee]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zm(t);t!==null;){if(n=t[ee])return n;t=Zm(t)}return e}t=n,n=t.parentNode}return null}function Vi(t){if(t=t[ee]||t[Ni]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Na(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(s(33))}function Ri(t){var e=t[Th];return e||(e=t[Th]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Pt(t){t[Ma]=!0}var wh=new Set,Eh={};function si(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(Eh[t]=e,t=0;t<e.length;t++)wh.add(e[t])}var ib=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ch={},Dh={};function ab(t){return Do.call(Dh,t)?!0:Do.call(Ch,t)?!1:ib.test(t)?Dh[t]=!0:(Ch[t]=!0,!1)}function ql(t,e,n){if(ab(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function Hl(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function ln(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function Ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mh(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lb(t,e,n){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var r=a.get,u=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(d){n=""+d,u.call(this,d)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ko(t){if(!t._valueTracker){var e=Mh(t)?"checked":"value";t._valueTracker=lb(t,e,""+t[e])}}function Nh(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Mh(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var sb=/[\n"\\]/g;function Re(t){return t.replace(sb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function _o(t,e,n,a,r,u,d,y){t.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.type=d:t.removeAttribute("type"),e!=null?d==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ve(e)):t.value!==""+Ve(e)&&(t.value=""+Ve(e)):d!=="submit"&&d!=="reset"||t.removeAttribute("value"),e!=null?Uo(t,d,Ve(e)):n!=null?Uo(t,d,Ve(n)):a!=null&&t.removeAttribute("value"),r==null&&u!=null&&(t.defaultChecked=!!u),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.name=""+Ve(y):t.removeAttribute("name")}function zh(t,e,n,a,r,u,d,y){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){ko(t);return}n=n!=null?""+Ve(n):"",e=e!=null?""+Ve(e):n,y||e===t.value||(t.value=e),t.defaultValue=e}a=a??r,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=y?t.checked:!!a,t.defaultChecked=!!a,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.name=d),ko(t)}function Uo(t,e,n){e==="number"&&Yl(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Oi(t,e,n,a){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&a&&(t[n].defaultSelected=!0)}else{for(n=""+Ve(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,a&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Vh(t,e,n){if(e!=null&&(e=""+Ve(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ve(n):""}function Rh(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(s(92));if(vt(a)){if(1<a.length)throw Error(s(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=Ve(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a),ko(t)}function ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ob=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bh(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||ob.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Oh(t,e,n){if(e!=null&&typeof e!="object")throw Error(s(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var r in e)a=e[r],e.hasOwnProperty(r)&&n[r]!==a&&Bh(t,r,a)}else for(var u in e)e.hasOwnProperty(u)&&Bh(t,u,e[u])}function Lo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ub=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(t){return ub.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function sn(){}var qo=null;function Ho(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _i=null,Ui=null;function kh(t){var e=Vi(t);if(e&&(t=e.stateNode)){var n=t[de]||null;t:switch(t=e.stateNode,e.type){case"input":if(_o(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Re(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var r=a[de]||null;if(!r)throw Error(s(90));_o(a,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&Nh(a)}break t;case"textarea":Vh(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&Oi(t,!!n.multiple,e,!1)}}}var Yo=!1;function _h(t,e,n){if(Yo)return t(e,n);Yo=!0;try{var a=t(e);return a}finally{if(Yo=!1,(_i!==null||Ui!==null)&&(Ns(),_i&&(e=_i,t=Ui,Ui=_i=null,kh(e),t)))for(e=0;e<t.length;e++)kh(t[e])}}function za(t,e){var n=t.stateNode;if(n===null)return null;var a=n[de]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(s(231,e,typeof n));return n}var on=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=!1;if(on)try{var Va={};Object.defineProperty(Va,"passive",{get:function(){Go=!0}}),window.addEventListener("test",Va,Va),window.removeEventListener("test",Va,Va)}catch{Go=!1}var En=null,Xo=null,Xl=null;function Uh(){if(Xl)return Xl;var t,e=Xo,n=e.length,a,r="value"in En?En.value:En.textContent,u=r.length;for(t=0;t<n&&e[t]===r[t];t++);var d=n-t;for(a=1;a<=d&&e[n-a]===r[u-a];a++);return Xl=r.slice(t,1<a?1-a:void 0)}function Ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zl(){return!0}function Lh(){return!1}function me(t){function e(n,a,r,u,d){this._reactName=n,this._targetInst=r,this.type=a,this.nativeEvent=u,this.target=d,this.currentTarget=null;for(var y in t)t.hasOwnProperty(y)&&(n=t[y],this[y]=n?n(u):u[y]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Zl:Lh,this.isPropagationStopped=Lh,this}return x(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),e}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=me(oi),Ra=x({},oi,{view:0,detail:0}),cb=me(Ra),Qo,Zo,Ba,Fl=x({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ba&&(Ba&&t.type==="mousemove"?(Qo=t.screenX-Ba.screenX,Zo=t.screenY-Ba.screenY):Zo=Qo=0,Ba=t),Qo)},movementY:function(t){return"movementY"in t?t.movementY:Zo}}),qh=me(Fl),hb=x({},Fl,{dataTransfer:0}),fb=me(hb),db=x({},Ra,{relatedTarget:0}),Ko=me(db),mb=x({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),vb=me(mb),pb=x({},oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gb=me(pb),yb=x({},oi,{data:0}),Hh=me(yb),bb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Sb[t])?!!e[t]:!1}function Fo(){return jb}var Ab=x({},Ra,{key:function(t){if(t.key){var e=bb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fo,charCode:function(t){return t.type==="keypress"?Ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Tb=me(Ab),wb=x({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=me(wb),Eb=x({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fo}),Cb=me(Eb),Db=x({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mb=me(Db),Nb=x({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),zb=me(Nb),Vb=x({},oi,{newState:0,oldState:0}),Rb=me(Vb),Bb=[9,13,27,32],Jo=on&&"CompositionEvent"in window,Oa=null;on&&"documentMode"in document&&(Oa=document.documentMode);var Ob=on&&"TextEvent"in window&&!Oa,Gh=on&&(!Jo||Oa&&8<Oa&&11>=Oa),Xh=" ",Qh=!1;function Zh(t,e){switch(t){case"keyup":return Bb.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function kb(t,e){switch(t){case"compositionend":return Kh(e);case"keypress":return e.which!==32?null:(Qh=!0,Xh);case"textInput":return t=e.data,t===Xh&&Qh?null:t;default:return null}}function _b(t,e){if(Li)return t==="compositionend"||!Jo&&Zh(t,e)?(t=Uh(),Xl=Xo=En=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gh&&e.locale!=="ko"?null:e.data;default:return null}}var Ub={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ub[t.type]:e==="textarea"}function Jh(t,e,n,a){_i?Ui?Ui.push(a):Ui=[a]:_i=a,e=_s(e,"onChange"),0<e.length&&(n=new Kl("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var ka=null,_a=null;function Lb(t){Vm(t,0)}function Jl(t){var e=Na(t);if(Nh(e))return t}function Wh(t,e){if(t==="change")return e}var $h=!1;if(on){var Wo;if(on){var $o="oninput"in document;if(!$o){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),$o=typeof Ph.oninput=="function"}Wo=$o}else Wo=!1;$h=Wo&&(!document.documentMode||9<document.documentMode)}function Ih(){ka&&(ka.detachEvent("onpropertychange",tf),_a=ka=null)}function tf(t){if(t.propertyName==="value"&&Jl(_a)){var e=[];Jh(e,_a,t,Ho(t)),_h(Lb,e)}}function qb(t,e,n){t==="focusin"?(Ih(),ka=e,_a=n,ka.attachEvent("onpropertychange",tf)):t==="focusout"&&Ih()}function Hb(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(_a)}function Yb(t,e){if(t==="click")return Jl(e)}function Gb(t,e){if(t==="input"||t==="change")return Jl(e)}function Xb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ae=typeof Object.is=="function"?Object.is:Xb;function Ua(t,e){if(Ae(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var r=n[a];if(!Do.call(e,r)||!Ae(t[r],e[r]))return!1}return!0}function ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nf(t,e){var n=ef(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ef(n)}}function af(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?af(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Yl(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function Po(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Qb=on&&"documentMode"in document&&11>=document.documentMode,qi=null,Io=null,La=null,tr=!1;function sf(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tr||qi==null||qi!==Yl(a)||(a=qi,"selectionStart"in a&&Po(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),La&&Ua(La,a)||(La=a,a=_s(Io,"onSelect"),0<a.length&&(e=new Kl("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=qi)))}function ri(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Hi={animationend:ri("Animation","AnimationEnd"),animationiteration:ri("Animation","AnimationIteration"),animationstart:ri("Animation","AnimationStart"),transitionrun:ri("Transition","TransitionRun"),transitionstart:ri("Transition","TransitionStart"),transitioncancel:ri("Transition","TransitionCancel"),transitionend:ri("Transition","TransitionEnd")},er={},of={};on&&(of=document.createElement("div").style,"AnimationEvent"in window||(delete Hi.animationend.animation,delete Hi.animationiteration.animation,delete Hi.animationstart.animation),"TransitionEvent"in window||delete Hi.transitionend.transition);function ui(t){if(er[t])return er[t];if(!Hi[t])return t;var e=Hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in of)return er[t]=e[n];return t}var rf=ui("animationend"),uf=ui("animationiteration"),cf=ui("animationstart"),Zb=ui("transitionrun"),Kb=ui("transitionstart"),Fb=ui("transitioncancel"),hf=ui("transitionend"),ff=new Map,nr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nr.push("scrollEnd");function Xe(t,e){ff.set(t,e),si(e,[t])}var Wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Be=[],Yi=0,ir=0;function $l(){for(var t=Yi,e=ir=Yi=0;e<t;){var n=Be[e];Be[e++]=null;var a=Be[e];Be[e++]=null;var r=Be[e];Be[e++]=null;var u=Be[e];if(Be[e++]=null,a!==null&&r!==null){var d=a.pending;d===null?r.next=r:(r.next=d.next,d.next=r),a.pending=r}u!==0&&df(n,r,u)}}function Pl(t,e,n,a){Be[Yi++]=t,Be[Yi++]=e,Be[Yi++]=n,Be[Yi++]=a,ir|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function ar(t,e,n,a){return Pl(t,e,n,a),Il(t)}function ci(t,e){return Pl(t,null,null,e),Il(t)}function df(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var r=!1,u=t.return;u!==null;)u.childLanes|=n,a=u.alternate,a!==null&&(a.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(r=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,r&&e!==null&&(r=31-je(n),t=u.hiddenUpdates,a=t[r],a===null?t[r]=[e]:a.push(e),e.lane=n|536870912),u):null}function Il(t){if(50<ol)throw ol=0,du=null,Error(s(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Gi={};function Jb(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Te(t,e,n,a){return new Jb(t,e,n,a)}function lr(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rn(t,e){var n=t.alternate;return n===null?(n=Te(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function mf(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ts(t,e,n,a,r,u){var d=0;if(a=t,typeof t=="function")lr(t)&&(d=1);else if(typeof t=="string")d=tx(t,n,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case nt:return t=Te(31,n,e,r),t.elementType=nt,t.lanes=u,t;case B:return hi(n.children,r,u,e);case O:d=8,r|=24;break;case z:return t=Te(12,n,e,r|2),t.elementType=z,t.lanes=u,t;case Q:return t=Te(13,n,e,r),t.elementType=Q,t.lanes=u,t;case at:return t=Te(19,n,e,r),t.elementType=at,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:d=10;break t;case q:d=9;break t;case U:d=11;break t;case K:d=14;break t;case J:d=16,a=null;break t}d=29,n=Error(s(130,t===null?"null":typeof t,"")),a=null}return e=Te(d,n,e,r),e.elementType=t,e.type=a,e.lanes=u,e}function hi(t,e,n,a){return t=Te(7,t,a,e),t.lanes=n,t}function sr(t,e,n){return t=Te(6,t,null,e),t.lanes=n,t}function vf(t){var e=Te(18,null,null,0);return e.stateNode=t,e}function or(t,e,n){return e=Te(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var pf=new WeakMap;function Oe(t,e){if(typeof t=="object"&&t!==null){var n=pf.get(t);return n!==void 0?n:(e={value:t,source:e,stack:mh(e)},pf.set(t,e),e)}return{value:t,source:e,stack:mh(e)}}var Xi=[],Qi=0,es=null,qa=0,ke=[],_e=0,Cn=null,We=1,$e="";function un(t,e){Xi[Qi++]=qa,Xi[Qi++]=es,es=t,qa=e}function gf(t,e,n){ke[_e++]=We,ke[_e++]=$e,ke[_e++]=Cn,Cn=t;var a=We;t=$e;var r=32-je(a)-1;a&=~(1<<r),n+=1;var u=32-je(e)+r;if(30<u){var d=r-r%5;u=(a&(1<<d)-1).toString(32),a>>=d,r-=d,We=1<<32-je(e)+r|n<<r|a,$e=u+t}else We=1<<u|n<<r|a,$e=t}function rr(t){t.return!==null&&(un(t,1),gf(t,1,0))}function ur(t){for(;t===es;)es=Xi[--Qi],Xi[Qi]=null,qa=Xi[--Qi],Xi[Qi]=null;for(;t===Cn;)Cn=ke[--_e],ke[_e]=null,$e=ke[--_e],ke[_e]=null,We=ke[--_e],ke[_e]=null}function yf(t,e){ke[_e++]=We,ke[_e++]=$e,ke[_e++]=Cn,We=e.id,$e=e.overflow,Cn=t}var ne=null,Ot=null,At=!1,Dn=null,Ue=!1,cr=Error(s(519));function Mn(t){var e=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ha(Oe(e,t)),cr}function bf(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[ee]=t,e[de]=a,n){case"dialog":gt("cancel",e),gt("close",e);break;case"iframe":case"object":case"embed":gt("load",e);break;case"video":case"audio":for(n=0;n<ul.length;n++)gt(ul[n],e);break;case"source":gt("error",e);break;case"img":case"image":case"link":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"input":gt("invalid",e),zh(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":gt("invalid",e);break;case"textarea":gt("invalid",e),Rh(e,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||km(e.textContent,n)?(a.popover!=null&&(gt("beforetoggle",e),gt("toggle",e)),a.onScroll!=null&&gt("scroll",e),a.onScrollEnd!=null&&gt("scrollend",e),a.onClick!=null&&(e.onclick=sn),e=!0):e=!1,e||Mn(t,!0)}function xf(t){for(ne=t.return;ne;)switch(ne.tag){case 5:case 31:case 13:Ue=!1;return;case 27:case 3:Ue=!0;return;default:ne=ne.return}}function Zi(t){if(t!==ne)return!1;if(!At)return xf(t),At=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Du(t.type,t.memoizedProps)),n=!n),n&&Ot&&Mn(t),xf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ot=Qm(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ot=Qm(t)}else e===27?(e=Ot,Gn(t.type)?(t=Ru,Ru=null,Ot=t):Ot=e):Ot=ne?qe(t.stateNode.nextSibling):null;return!0}function fi(){Ot=ne=null,At=!1}function hr(){var t=Dn;return t!==null&&(ye===null?ye=t:ye.push.apply(ye,t),Dn=null),t}function Ha(t){Dn===null?Dn=[t]:Dn.push(t)}var fr=T(null),di=null,cn=null;function Nn(t,e,n){W(fr,e._currentValue),e._currentValue=n}function hn(t){t._currentValue=fr.current,H(fr)}function dr(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function mr(t,e,n,a){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var u=r.dependencies;if(u!==null){var d=r.child;u=u.firstContext;t:for(;u!==null;){var y=u;u=r;for(var j=0;j<e.length;j++)if(y.context===e[j]){u.lanes|=n,y=u.alternate,y!==null&&(y.lanes|=n),dr(u.return,n,t),a||(d=null);break t}u=y.next}}else if(r.tag===18){if(d=r.return,d===null)throw Error(s(341));d.lanes|=n,u=d.alternate,u!==null&&(u.lanes|=n),dr(d,n,t),d=null}else d=r.child;if(d!==null)d.return=r;else for(d=r;d!==null;){if(d===t){d=null;break}if(r=d.sibling,r!==null){r.return=d.return,d=r;break}d=d.return}r=d}}function Ki(t,e,n,a){t=null;for(var r=e,u=!1;r!==null;){if(!u){if((r.flags&524288)!==0)u=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var d=r.alternate;if(d===null)throw Error(s(387));if(d=d.memoizedProps,d!==null){var y=r.type;Ae(r.pendingProps.value,d.value)||(t!==null?t.push(y):t=[y])}}else if(r===jt.current){if(d=r.alternate,d===null)throw Error(s(387));d.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(ml):t=[ml])}r=r.return}t!==null&&mr(e,t,n,a),e.flags|=262144}function ns(t){for(t=t.firstContext;t!==null;){if(!Ae(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function mi(t){di=t,cn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function ie(t){return Sf(di,t)}function is(t,e){return di===null&&mi(t),Sf(t,e)}function Sf(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},cn===null){if(t===null)throw Error(s(308));cn=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else cn=cn.next=e;return n}var Wb=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},$b=i.unstable_scheduleCallback,Pb=i.unstable_NormalPriority,Qt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vr(){return{controller:new Wb,data:new Map,refCount:0}}function Ya(t){t.refCount--,t.refCount===0&&$b(Pb,function(){t.controller.abort()})}var Ga=null,pr=0,Fi=0,Ji=null;function Ib(t,e){if(Ga===null){var n=Ga=[];pr=0,Fi=bu(),Ji={status:"pending",value:void 0,then:function(a){n.push(a)}}}return pr++,e.then(jf,jf),e}function jf(){if(--pr===0&&Ga!==null){Ji!==null&&(Ji.status="fulfilled");var t=Ga;Ga=null,Fi=0,Ji=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function t0(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(a.status="rejected",a.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),a}var Af=N.S;N.S=function(t,e){sm=xe(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ib(t,e),Af!==null&&Af(t,e)};var vi=T(null);function gr(){var t=vi.current;return t!==null?t:Vt.pooledCache}function as(t,e){e===null?W(vi,vi.current):W(vi,e.pool)}function Tf(){var t=gr();return t===null?null:{parent:Qt._currentValue,pool:t}}var Wi=Error(s(460)),yr=Error(s(474)),ls=Error(s(542)),ss={then:function(){}};function wf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ef(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(sn,sn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Df(t),t;default:if(typeof e.status=="string")e.then(sn,sn);else{if(t=Vt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=a}},function(a){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Df(t),t}throw gi=e,Wi}}function pi(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(gi=n,Wi):n}}var gi=null;function Cf(){if(gi===null)throw Error(s(459));var t=gi;return gi=null,t}function Df(t){if(t===Wi||t===ls)throw Error(s(483))}var $i=null,Xa=0;function os(t){var e=Xa;return Xa+=1,$i===null&&($i=[]),Ef($i,t,e)}function Qa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function rs(t,e){throw e.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(e),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Mf(t){function e(E,w){if(t){var D=E.deletions;D===null?(E.deletions=[w],E.flags|=16):D.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function a(E){for(var w=new Map;E!==null;)E.key!==null?w.set(E.key,E):w.set(E.index,E),E=E.sibling;return w}function r(E,w){return E=rn(E,w),E.index=0,E.sibling=null,E}function u(E,w,D){return E.index=D,t?(D=E.alternate,D!==null?(D=D.index,D<w?(E.flags|=67108866,w):D):(E.flags|=67108866,w)):(E.flags|=1048576,w)}function d(E){return t&&E.alternate===null&&(E.flags|=67108866),E}function y(E,w,D,L){return w===null||w.tag!==6?(w=sr(D,E.mode,L),w.return=E,w):(w=r(w,D),w.return=E,w)}function j(E,w,D,L){var it=D.type;return it===B?k(E,w,D.props.children,L,D.key):w!==null&&(w.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===J&&pi(it)===w.type)?(w=r(w,D.props),Qa(w,D),w.return=E,w):(w=ts(D.type,D.key,D.props,null,E.mode,L),Qa(w,D),w.return=E,w)}function M(E,w,D,L){return w===null||w.tag!==4||w.stateNode.containerInfo!==D.containerInfo||w.stateNode.implementation!==D.implementation?(w=or(D,E.mode,L),w.return=E,w):(w=r(w,D.children||[]),w.return=E,w)}function k(E,w,D,L,it){return w===null||w.tag!==7?(w=hi(D,E.mode,L,it),w.return=E,w):(w=r(w,D),w.return=E,w)}function Y(E,w,D){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=sr(""+w,E.mode,D),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case A:return D=ts(w.type,w.key,w.props,null,E.mode,D),Qa(D,w),D.return=E,D;case C:return w=or(w,E.mode,D),w.return=E,w;case J:return w=pi(w),Y(E,w,D)}if(vt(w)||$(w))return w=hi(w,E.mode,D,null),w.return=E,w;if(typeof w.then=="function")return Y(E,os(w),D);if(w.$$typeof===_)return Y(E,is(E,w),D);rs(E,w)}return null}function V(E,w,D,L){var it=w!==null?w.key:null;if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return it!==null?null:y(E,w,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case A:return D.key===it?j(E,w,D,L):null;case C:return D.key===it?M(E,w,D,L):null;case J:return D=pi(D),V(E,w,D,L)}if(vt(D)||$(D))return it!==null?null:k(E,w,D,L,null);if(typeof D.then=="function")return V(E,w,os(D),L);if(D.$$typeof===_)return V(E,w,is(E,D),L);rs(E,D)}return null}function R(E,w,D,L,it){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return E=E.get(D)||null,y(w,E,""+L,it);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case A:return E=E.get(L.key===null?D:L.key)||null,j(w,E,L,it);case C:return E=E.get(L.key===null?D:L.key)||null,M(w,E,L,it);case J:return L=pi(L),R(E,w,D,L,it)}if(vt(L)||$(L))return E=E.get(D)||null,k(w,E,L,it,null);if(typeof L.then=="function")return R(E,w,D,os(L),it);if(L.$$typeof===_)return R(E,w,D,is(w,L),it);rs(w,L)}return null}function P(E,w,D,L){for(var it=null,Tt=null,tt=w,ft=w=0,xt=null;tt!==null&&ft<D.length;ft++){tt.index>ft?(xt=tt,tt=null):xt=tt.sibling;var wt=V(E,tt,D[ft],L);if(wt===null){tt===null&&(tt=xt);break}t&&tt&&wt.alternate===null&&e(E,tt),w=u(wt,w,ft),Tt===null?it=wt:Tt.sibling=wt,Tt=wt,tt=xt}if(ft===D.length)return n(E,tt),At&&un(E,ft),it;if(tt===null){for(;ft<D.length;ft++)tt=Y(E,D[ft],L),tt!==null&&(w=u(tt,w,ft),Tt===null?it=tt:Tt.sibling=tt,Tt=tt);return At&&un(E,ft),it}for(tt=a(tt);ft<D.length;ft++)xt=R(tt,E,ft,D[ft],L),xt!==null&&(t&&xt.alternate!==null&&tt.delete(xt.key===null?ft:xt.key),w=u(xt,w,ft),Tt===null?it=xt:Tt.sibling=xt,Tt=xt);return t&&tt.forEach(function(Fn){return e(E,Fn)}),At&&un(E,ft),it}function lt(E,w,D,L){if(D==null)throw Error(s(151));for(var it=null,Tt=null,tt=w,ft=w=0,xt=null,wt=D.next();tt!==null&&!wt.done;ft++,wt=D.next()){tt.index>ft?(xt=tt,tt=null):xt=tt.sibling;var Fn=V(E,tt,wt.value,L);if(Fn===null){tt===null&&(tt=xt);break}t&&tt&&Fn.alternate===null&&e(E,tt),w=u(Fn,w,ft),Tt===null?it=Fn:Tt.sibling=Fn,Tt=Fn,tt=xt}if(wt.done)return n(E,tt),At&&un(E,ft),it;if(tt===null){for(;!wt.done;ft++,wt=D.next())wt=Y(E,wt.value,L),wt!==null&&(w=u(wt,w,ft),Tt===null?it=wt:Tt.sibling=wt,Tt=wt);return At&&un(E,ft),it}for(tt=a(tt);!wt.done;ft++,wt=D.next())wt=R(tt,E,ft,wt.value,L),wt!==null&&(t&&wt.alternate!==null&&tt.delete(wt.key===null?ft:wt.key),w=u(wt,w,ft),Tt===null?it=wt:Tt.sibling=wt,Tt=wt);return t&&tt.forEach(function(hx){return e(E,hx)}),At&&un(E,ft),it}function zt(E,w,D,L){if(typeof D=="object"&&D!==null&&D.type===B&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case A:t:{for(var it=D.key;w!==null;){if(w.key===it){if(it=D.type,it===B){if(w.tag===7){n(E,w.sibling),L=r(w,D.props.children),L.return=E,E=L;break t}}else if(w.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===J&&pi(it)===w.type){n(E,w.sibling),L=r(w,D.props),Qa(L,D),L.return=E,E=L;break t}n(E,w);break}else e(E,w);w=w.sibling}D.type===B?(L=hi(D.props.children,E.mode,L,D.key),L.return=E,E=L):(L=ts(D.type,D.key,D.props,null,E.mode,L),Qa(L,D),L.return=E,E=L)}return d(E);case C:t:{for(it=D.key;w!==null;){if(w.key===it)if(w.tag===4&&w.stateNode.containerInfo===D.containerInfo&&w.stateNode.implementation===D.implementation){n(E,w.sibling),L=r(w,D.children||[]),L.return=E,E=L;break t}else{n(E,w);break}else e(E,w);w=w.sibling}L=or(D,E.mode,L),L.return=E,E=L}return d(E);case J:return D=pi(D),zt(E,w,D,L)}if(vt(D))return P(E,w,D,L);if($(D)){if(it=$(D),typeof it!="function")throw Error(s(150));return D=it.call(D),lt(E,w,D,L)}if(typeof D.then=="function")return zt(E,w,os(D),L);if(D.$$typeof===_)return zt(E,w,is(E,D),L);rs(E,D)}return typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint"?(D=""+D,w!==null&&w.tag===6?(n(E,w.sibling),L=r(w,D),L.return=E,E=L):(n(E,w),L=sr(D,E.mode,L),L.return=E,E=L),d(E)):n(E,w)}return function(E,w,D,L){try{Xa=0;var it=zt(E,w,D,L);return $i=null,it}catch(tt){if(tt===Wi||tt===ls)throw tt;var Tt=Te(29,tt,null,E.mode);return Tt.lanes=L,Tt.return=E,Tt}finally{}}}var yi=Mf(!0),Nf=Mf(!1),zn=!1;function br(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xr(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Vn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Et&2)!==0){var r=a.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),a.pending=e,e=Il(t),df(t,null,n),e}return Pl(t,a,e,n),Il(t)}function Za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,xh(t,n)}}function Sr(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var r=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?r=u=d:u=u.next=d,n=n.next}while(n!==null);u===null?r=u=e:u=u.next=e}else r=u=e;n={baseState:a.baseState,firstBaseUpdate:r,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var jr=!1;function Ka(){if(jr){var t=Ji;if(t!==null)throw t}}function Fa(t,e,n,a){jr=!1;var r=t.updateQueue;zn=!1;var u=r.firstBaseUpdate,d=r.lastBaseUpdate,y=r.shared.pending;if(y!==null){r.shared.pending=null;var j=y,M=j.next;j.next=null,d===null?u=M:d.next=M,d=j;var k=t.alternate;k!==null&&(k=k.updateQueue,y=k.lastBaseUpdate,y!==d&&(y===null?k.firstBaseUpdate=M:y.next=M,k.lastBaseUpdate=j))}if(u!==null){var Y=r.baseState;d=0,k=M=j=null,y=u;do{var V=y.lane&-536870913,R=V!==y.lane;if(R?(bt&V)===V:(a&V)===V){V!==0&&V===Fi&&(jr=!0),k!==null&&(k=k.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});t:{var P=t,lt=y;V=e;var zt=n;switch(lt.tag){case 1:if(P=lt.payload,typeof P=="function"){Y=P.call(zt,Y,V);break t}Y=P;break t;case 3:P.flags=P.flags&-65537|128;case 0:if(P=lt.payload,V=typeof P=="function"?P.call(zt,Y,V):P,V==null)break t;Y=x({},Y,V);break t;case 2:zn=!0}}V=y.callback,V!==null&&(t.flags|=64,R&&(t.flags|=8192),R=r.callbacks,R===null?r.callbacks=[V]:R.push(V))}else R={lane:V,tag:y.tag,payload:y.payload,callback:y.callback,next:null},k===null?(M=k=R,j=Y):k=k.next=R,d|=V;if(y=y.next,y===null){if(y=r.shared.pending,y===null)break;R=y,y=R.next,R.next=null,r.lastBaseUpdate=R,r.shared.pending=null}}while(!0);k===null&&(j=Y),r.baseState=j,r.firstBaseUpdate=M,r.lastBaseUpdate=k,u===null&&(r.shared.lanes=0),Un|=d,t.lanes=d,t.memoizedState=Y}}function zf(t,e){if(typeof t!="function")throw Error(s(191,t));t.call(e)}function Vf(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)zf(n[t],e)}var Pi=T(null),us=T(0);function Rf(t,e){t=xn,W(us,t),W(Pi,e),xn=t|e.baseLanes}function Ar(){W(us,xn),W(Pi,Pi.current)}function Tr(){xn=us.current,H(Pi),H(us)}var we=T(null),Le=null;function Bn(t){var e=t.alternate;W(Yt,Yt.current&1),W(we,t),Le===null&&(e===null||Pi.current!==null||e.memoizedState!==null)&&(Le=t)}function wr(t){W(Yt,Yt.current),W(we,t),Le===null&&(Le=t)}function Bf(t){t.tag===22?(W(Yt,Yt.current),W(we,t),Le===null&&(Le=t)):On()}function On(){W(Yt,Yt.current),W(we,we.current)}function Ee(t){H(we),Le===t&&(Le=null),H(Yt)}var Yt=T(0);function cs(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||zu(n)||Vu(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fn=0,ht=null,Mt=null,Zt=null,hs=!1,Ii=!1,bi=!1,fs=0,Ja=0,ta=null,e0=0;function Lt(){throw Error(s(321))}function Er(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ae(t[n],e[n]))return!1;return!0}function Cr(t,e,n,a,r,u){return fn=u,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,N.H=t===null||t.memoizedState===null?gd:Yr,bi=!1,u=n(a,r),bi=!1,Ii&&(u=kf(e,n,a,r)),Of(t),u}function Of(t){N.H=Pa;var e=Mt!==null&&Mt.next!==null;if(fn=0,Zt=Mt=ht=null,hs=!1,Ja=0,ta=null,e)throw Error(s(300));t===null||Kt||(t=t.dependencies,t!==null&&ns(t)&&(Kt=!0))}function kf(t,e,n,a){ht=t;var r=0;do{if(Ii&&(ta=null),Ja=0,Ii=!1,25<=r)throw Error(s(301));if(r+=1,Zt=Mt=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}N.H=yd,u=e(n,a)}while(Ii);return u}function n0(){var t=N.H,e=t.useState()[0];return e=typeof e.then=="function"?Wa(e):e,t=t.useState()[0],(Mt!==null?Mt.memoizedState:null)!==t&&(ht.flags|=1024),e}function Dr(){var t=fs!==0;return fs=0,t}function Mr(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Nr(t){if(hs){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}hs=!1}fn=0,Zt=Mt=ht=null,Ii=!1,Ja=fs=0,ta=null}function ue(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?ht.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Gt(){if(Mt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=Mt.next;var e=Zt===null?ht.memoizedState:Zt.next;if(e!==null)Zt=e,Mt=t;else{if(t===null)throw ht.alternate===null?Error(s(467)):Error(s(310));Mt=t,t={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},Zt===null?ht.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function ds(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wa(t){var e=Ja;return Ja+=1,ta===null&&(ta=[]),t=Ef(ta,t,e),e=ht,(Zt===null?e.memoizedState:Zt.next)===null&&(e=e.alternate,N.H=e===null||e.memoizedState===null?gd:Yr),t}function ms(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Wa(t);if(t.$$typeof===_)return ie(t)}throw Error(s(438,String(t)))}function zr(t){var e=null,n=ht.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ht.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=ds(),ht.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=et;return e.index++,n}function dn(t,e){return typeof e=="function"?e(t):e}function vs(t){var e=Gt();return Vr(e,Mt,t)}function Vr(t,e,n){var a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=n;var r=t.baseQueue,u=a.pending;if(u!==null){if(r!==null){var d=r.next;r.next=u.next,u.next=d}e.baseQueue=r=u,a.pending=null}if(u=t.baseState,r===null)t.memoizedState=u;else{e=r.next;var y=d=null,j=null,M=e,k=!1;do{var Y=M.lane&-536870913;if(Y!==M.lane?(bt&Y)===Y:(fn&Y)===Y){var V=M.revertLane;if(V===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null}),Y===Fi&&(k=!0);else if((fn&V)===V){M=M.next,V===Fi&&(k=!0);continue}else Y={lane:0,revertLane:M.revertLane,gesture:null,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},j===null?(y=j=Y,d=u):j=j.next=Y,ht.lanes|=V,Un|=V;Y=M.action,bi&&n(u,Y),u=M.hasEagerState?M.eagerState:n(u,Y)}else V={lane:Y,revertLane:M.revertLane,gesture:M.gesture,action:M.action,hasEagerState:M.hasEagerState,eagerState:M.eagerState,next:null},j===null?(y=j=V,d=u):j=j.next=V,ht.lanes|=Y,Un|=Y;M=M.next}while(M!==null&&M!==e);if(j===null?d=u:j.next=y,!Ae(u,t.memoizedState)&&(Kt=!0,k&&(n=Ji,n!==null)))throw n;t.memoizedState=u,t.baseState=d,t.baseQueue=j,a.lastRenderedState=u}return r===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Rr(t){var e=Gt(),n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=t;var a=n.dispatch,r=n.pending,u=e.memoizedState;if(r!==null){n.pending=null;var d=r=r.next;do u=t(u,d.action),d=d.next;while(d!==r);Ae(u,e.memoizedState)||(Kt=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,a]}function _f(t,e,n){var a=ht,r=Gt(),u=At;if(u){if(n===void 0)throw Error(s(407));n=n()}else n=e();var d=!Ae((Mt||r).memoizedState,n);if(d&&(r.memoizedState=n,Kt=!0),r=r.queue,kr(qf.bind(null,a,r,t),[t]),r.getSnapshot!==e||d||Zt!==null&&Zt.memoizedState.tag&1){if(a.flags|=2048,ea(9,{destroy:void 0},Lf.bind(null,a,r,n,e),null),Vt===null)throw Error(s(349));u||(fn&127)!==0||Uf(a,e,n)}return n}function Uf(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e=ds(),ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lf(t,e,n,a){e.value=n,e.getSnapshot=a,Hf(e)&&Yf(t)}function qf(t,e,n){return n(function(){Hf(e)&&Yf(t)})}function Hf(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ae(t,n)}catch{return!0}}function Yf(t){var e=ci(t,2);e!==null&&be(e,t,2)}function Br(t){var e=ue();if(typeof t=="function"){var n=t;if(t=n(),bi){Tn(!0);try{n()}finally{Tn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:t},e}function Gf(t,e,n,a){return t.baseState=n,Vr(t,Mt,typeof a=="function"?a:dn)}function i0(t,e,n,a,r){if(ys(t))throw Error(s(485));if(t=e.action,t!==null){var u={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){u.listeners.push(d)}};N.T!==null?n(!0):u.isTransition=!1,a(u),n=e.pending,n===null?(u.next=e.pending=u,Xf(e,u)):(u.next=n.next,e.pending=n.next=u)}}function Xf(t,e){var n=e.action,a=e.payload,r=t.state;if(e.isTransition){var u=N.T,d={};N.T=d;try{var y=n(r,a),j=N.S;j!==null&&j(d,y),Qf(t,e,y)}catch(M){Or(t,e,M)}finally{u!==null&&d.types!==null&&(u.types=d.types),N.T=u}}else try{u=n(r,a),Qf(t,e,u)}catch(M){Or(t,e,M)}}function Qf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Zf(t,e,a)},function(a){return Or(t,e,a)}):Zf(t,e,n)}function Zf(t,e,n){e.status="fulfilled",e.value=n,Kf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Xf(t,n)))}function Or(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Kf(e),e=e.next;while(e!==a)}t.action=null}function Kf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ff(t,e){return e}function Jf(t,e){if(At){var n=Vt.formState;if(n!==null){t:{var a=ht;if(At){if(Ot){e:{for(var r=Ot,u=Ue;r.nodeType!==8;){if(!u){r=null;break e}if(r=qe(r.nextSibling),r===null){r=null;break e}}u=r.data,r=u==="F!"||u==="F"?r:null}if(r){Ot=qe(r.nextSibling),a=r.data==="F!";break t}}Mn(a)}a=!1}a&&(e=n[0])}}return n=ue(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ff,lastRenderedState:e},n.queue=a,n=md.bind(null,ht,a),a.dispatch=n,a=Br(!1),u=Hr.bind(null,ht,!1,a.queue),a=ue(),r={state:e,dispatch:null,action:t,pending:null},a.queue=r,n=i0.bind(null,ht,r,u,n),r.dispatch=n,a.memoizedState=t,[e,n,!1]}function Wf(t){var e=Gt();return $f(e,Mt,t)}function $f(t,e,n){if(e=Vr(t,e,Ff)[0],t=vs(dn)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Wa(e)}catch(d){throw d===Wi?ls:d}else a=e;e=Gt();var r=e.queue,u=r.dispatch;return n!==e.memoizedState&&(ht.flags|=2048,ea(9,{destroy:void 0},a0.bind(null,r,n),null)),[a,u,t]}function a0(t,e){t.action=e}function Pf(t){var e=Gt(),n=Mt;if(n!==null)return $f(e,n,t);Gt(),e=e.memoizedState,n=Gt();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function ea(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=ht.updateQueue,e===null&&(e=ds(),ht.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function If(){return Gt().memoizedState}function ps(t,e,n,a){var r=ue();ht.flags|=t,r.memoizedState=ea(1|e,{destroy:void 0},n,a===void 0?null:a)}function gs(t,e,n,a){var r=Gt();a=a===void 0?null:a;var u=r.memoizedState.inst;Mt!==null&&a!==null&&Er(a,Mt.memoizedState.deps)?r.memoizedState=ea(e,u,n,a):(ht.flags|=t,r.memoizedState=ea(1|e,u,n,a))}function td(t,e){ps(8390656,8,t,e)}function kr(t,e){gs(2048,8,t,e)}function l0(t){ht.flags|=4;var e=ht.updateQueue;if(e===null)e=ds(),ht.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function ed(t){var e=Gt().memoizedState;return l0({ref:e,nextImpl:t}),function(){if((Et&2)!==0)throw Error(s(440));return e.impl.apply(void 0,arguments)}}function nd(t,e){return gs(4,2,t,e)}function id(t,e){return gs(4,4,t,e)}function ad(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ld(t,e,n){n=n!=null?n.concat([t]):null,gs(4,4,ad.bind(null,e,t),n)}function _r(){}function sd(t,e){var n=Gt();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Er(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function od(t,e){var n=Gt();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Er(e,a[1]))return a[0];if(a=t(),bi){Tn(!0);try{t()}finally{Tn(!1)}}return n.memoizedState=[a,e],a}function Ur(t,e,n){return n===void 0||(fn&1073741824)!==0&&(bt&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=rm(),ht.lanes|=t,Un|=t,n)}function rd(t,e,n,a){return Ae(n,e)?n:Pi.current!==null?(t=Ur(t,n,a),Ae(t,e)||(Kt=!0),t):(fn&42)===0||(fn&1073741824)!==0&&(bt&261930)===0?(Kt=!0,t.memoizedState=n):(t=rm(),ht.lanes|=t,Un|=t,e)}function ud(t,e,n,a,r){var u=X.p;X.p=u!==0&&8>u?u:8;var d=N.T,y={};N.T=y,Hr(t,!1,e,n);try{var j=r(),M=N.S;if(M!==null&&M(y,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var k=t0(j,a);$a(t,e,k,Me(t))}else $a(t,e,a,Me(t))}catch(Y){$a(t,e,{then:function(){},status:"rejected",reason:Y},Me())}finally{X.p=u,d!==null&&y.types!==null&&(d.types=y.types),N.T=d}}function s0(){}function Lr(t,e,n,a){if(t.tag!==5)throw Error(s(476));var r=cd(t).queue;ud(t,r,e,F,n===null?s0:function(){return hd(t),n(a)})}function cd(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:F},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function hd(t){var e=cd(t);e.next===null&&(e=t.alternate.memoizedState),$a(t,e.next.queue,{},Me())}function qr(){return ie(ml)}function fd(){return Gt().memoizedState}function dd(){return Gt().memoizedState}function o0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Me();t=Vn(n);var a=Rn(e,t,n);a!==null&&(be(a,e,n),Za(a,e,n)),e={cache:vr()},t.payload=e;return}e=e.return}}function r0(t,e,n){var a=Me();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ys(t)?vd(e,n):(n=ar(t,e,n,a),n!==null&&(be(n,t,a),pd(n,e,a)))}function md(t,e,n){var a=Me();$a(t,e,n,a)}function $a(t,e,n,a){var r={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(ys(t))vd(e,r);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var d=e.lastRenderedState,y=u(d,n);if(r.hasEagerState=!0,r.eagerState=y,Ae(y,d))return Pl(t,e,r,0),Vt===null&&$l(),!1}catch{}finally{}if(n=ar(t,e,r,a),n!==null)return be(n,t,a),pd(n,e,a),!0}return!1}function Hr(t,e,n,a){if(a={lane:2,revertLane:bu(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ys(t)){if(e)throw Error(s(479))}else e=ar(t,n,a,2),e!==null&&be(e,t,2)}function ys(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function vd(t,e){Ii=hs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pd(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,xh(t,n)}}var Pa={readContext:ie,use:ms,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt};Pa.useEffectEvent=Lt;var gd={readContext:ie,use:ms,useCallback:function(t,e){return ue().memoizedState=[t,e===void 0?null:e],t},useContext:ie,useEffect:td,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,ps(4194308,4,ad.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ps(4194308,4,t,e)},useInsertionEffect:function(t,e){ps(4,2,t,e)},useMemo:function(t,e){var n=ue();e=e===void 0?null:e;var a=t();if(bi){Tn(!0);try{t()}finally{Tn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=ue();if(n!==void 0){var r=n(e);if(bi){Tn(!0);try{n(e)}finally{Tn(!1)}}}else r=e;return a.memoizedState=a.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},a.queue=t,t=t.dispatch=r0.bind(null,ht,t),[a.memoizedState,t]},useRef:function(t){var e=ue();return t={current:t},e.memoizedState=t},useState:function(t){t=Br(t);var e=t.queue,n=md.bind(null,ht,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:_r,useDeferredValue:function(t,e){var n=ue();return Ur(n,t,e)},useTransition:function(){var t=Br(!1);return t=ud.bind(null,ht,t.queue,!0,!1),ue().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ht,r=ue();if(At){if(n===void 0)throw Error(s(407));n=n()}else{if(n=e(),Vt===null)throw Error(s(349));(bt&127)!==0||Uf(a,e,n)}r.memoizedState=n;var u={value:n,getSnapshot:e};return r.queue=u,td(qf.bind(null,a,u,t),[t]),a.flags|=2048,ea(9,{destroy:void 0},Lf.bind(null,a,u,n,e),null),n},useId:function(){var t=ue(),e=Vt.identifierPrefix;if(At){var n=$e,a=We;n=(a&~(1<<32-je(a)-1)).toString(32)+n,e="_"+e+"R_"+n,n=fs++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=e0++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:qr,useFormState:Jf,useActionState:Jf,useOptimistic:function(t){var e=ue();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Hr.bind(null,ht,!0,n),n.dispatch=e,[t,e]},useMemoCache:zr,useCacheRefresh:function(){return ue().memoizedState=o0.bind(null,ht)},useEffectEvent:function(t){var e=ue(),n={impl:t};return e.memoizedState=n,function(){if((Et&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Yr={readContext:ie,use:ms,useCallback:sd,useContext:ie,useEffect:kr,useImperativeHandle:ld,useInsertionEffect:nd,useLayoutEffect:id,useMemo:od,useReducer:vs,useRef:If,useState:function(){return vs(dn)},useDebugValue:_r,useDeferredValue:function(t,e){var n=Gt();return rd(n,Mt.memoizedState,t,e)},useTransition:function(){var t=vs(dn)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:Wa(t),e]},useSyncExternalStore:_f,useId:fd,useHostTransitionStatus:qr,useFormState:Wf,useActionState:Wf,useOptimistic:function(t,e){var n=Gt();return Gf(n,Mt,t,e)},useMemoCache:zr,useCacheRefresh:dd};Yr.useEffectEvent=ed;var yd={readContext:ie,use:ms,useCallback:sd,useContext:ie,useEffect:kr,useImperativeHandle:ld,useInsertionEffect:nd,useLayoutEffect:id,useMemo:od,useReducer:Rr,useRef:If,useState:function(){return Rr(dn)},useDebugValue:_r,useDeferredValue:function(t,e){var n=Gt();return Mt===null?Ur(n,t,e):rd(n,Mt.memoizedState,t,e)},useTransition:function(){var t=Rr(dn)[0],e=Gt().memoizedState;return[typeof t=="boolean"?t:Wa(t),e]},useSyncExternalStore:_f,useId:fd,useHostTransitionStatus:qr,useFormState:Pf,useActionState:Pf,useOptimistic:function(t,e){var n=Gt();return Mt!==null?Gf(n,Mt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:zr,useCacheRefresh:dd};yd.useEffectEvent=ed;function Gr(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:x({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xr={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=Me(),r=Vn(a);r.payload=e,n!=null&&(r.callback=n),e=Rn(t,r,a),e!==null&&(be(e,t,a),Za(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=Me(),r=Vn(a);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Rn(t,r,a),e!==null&&(be(e,t,a),Za(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Me(),a=Vn(n);a.tag=2,e!=null&&(a.callback=e),e=Rn(t,a,n),e!==null&&(be(e,t,n),Za(e,t,n))}};function bd(t,e,n,a,r,u,d){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,d):e.prototype&&e.prototype.isPureReactComponent?!Ua(n,a)||!Ua(r,u):!0}function xd(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&Xr.enqueueReplaceState(e,e.state,null)}function xi(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=x({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}function Sd(t){Wl(t)}function jd(t){console.error(t)}function Ad(t){Wl(t)}function bs(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Td(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Qr(t,e,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){bs(t,e)},n}function wd(t){return t=Vn(t),t.tag=3,t}function Ed(t,e,n,a){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var u=a.value;t.payload=function(){return r(u)},t.callback=function(){Td(e,n,a)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(t.callback=function(){Td(e,n,a),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var y=a.stack;this.componentDidCatch(a.value,{componentStack:y!==null?y:""})})}function u0(t,e,n,a,r){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&Ki(e,n,r,!0),n=we.current,n!==null){switch(n.tag){case 31:case 13:return Le===null?zs():n.alternate===null&&qt===0&&(qt=3),n.flags&=-257,n.flags|=65536,n.lanes=r,a===ss?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),pu(t,a,r)),!1;case 22:return n.flags|=65536,a===ss?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),pu(t,a,r)),!1}throw Error(s(435,n.tag))}return pu(t,a,r),zs(),!1}if(At)return e=we.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,a!==cr&&(t=Error(s(422),{cause:a}),Ha(Oe(t,n)))):(a!==cr&&(e=Error(s(423),{cause:a}),Ha(Oe(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,a=Oe(a,n),r=Qr(t.stateNode,a,r),Sr(t,r),qt!==4&&(qt=2)),!1;var u=Error(s(520),{cause:a});if(u=Oe(u,n),sl===null?sl=[u]:sl.push(u),qt!==4&&(qt=2),e===null)return!0;a=Oe(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=Qr(n.stateNode,a,t),Sr(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Ln===null||!Ln.has(u))))return n.flags|=65536,r&=-r,n.lanes|=r,r=wd(r),Ed(r,t,n,a),Sr(n,r),!1}n=n.return}while(n!==null);return!1}var Zr=Error(s(461)),Kt=!1;function ae(t,e,n,a){e.child=t===null?Nf(e,null,n,a):yi(e,t.child,n,a)}function Cd(t,e,n,a,r){n=n.render;var u=e.ref;if("ref"in a){var d={};for(var y in a)y!=="ref"&&(d[y]=a[y])}else d=a;return mi(e),a=Cr(t,e,n,d,u,r),y=Dr(),t!==null&&!Kt?(Mr(t,e,r),mn(t,e,r)):(At&&y&&rr(e),e.flags|=1,ae(t,e,a,r),e.child)}function Dd(t,e,n,a,r){if(t===null){var u=n.type;return typeof u=="function"&&!lr(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,Md(t,e,u,a,r)):(t=ts(n.type,null,a,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!tu(t,r)){var d=u.memoizedProps;if(n=n.compare,n=n!==null?n:Ua,n(d,a)&&t.ref===e.ref)return mn(t,e,r)}return e.flags|=1,t=rn(u,a),t.ref=e.ref,t.return=e,e.child=t}function Md(t,e,n,a,r){if(t!==null){var u=t.memoizedProps;if(Ua(u,a)&&t.ref===e.ref)if(Kt=!1,e.pendingProps=a=u,tu(t,r))(t.flags&131072)!==0&&(Kt=!0);else return e.lanes=t.lanes,mn(t,e,r)}return Kr(t,e,n,a,r)}function Nd(t,e,n,a){var r=a.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(a=e.child=t.child,r=0;a!==null;)r=r|a.lanes|a.childLanes,a=a.sibling;a=r&~u}else a=0,e.child=null;return zd(t,e,u,n,a)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&as(e,u!==null?u.cachePool:null),u!==null?Rf(e,u):Ar(),Bf(e);else return a=e.lanes=536870912,zd(t,e,u!==null?u.baseLanes|n:n,n,a)}else u!==null?(as(e,u.cachePool),Rf(e,u),On(),e.memoizedState=null):(t!==null&&as(e,null),Ar(),On());return ae(t,e,r,n),e.child}function Ia(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function zd(t,e,n,a,r){var u=gr();return u=u===null?null:{parent:Qt._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&as(e,null),Ar(),Bf(e),t!==null&&Ki(t,e,a,!0),e.childLanes=r,null}function xs(t,e){return e=js({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Vd(t,e,n){return yi(e,t.child,null,n),t=xs(e,e.pendingProps),t.flags|=2,Ee(e),e.memoizedState=null,t}function c0(t,e,n){var a=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(At){if(a.mode==="hidden")return t=xs(e,a),e.lanes=536870912,Ia(null,t);if(wr(e),(t=Ot)?(t=Xm(t,Ue),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Cn!==null?{id:We,overflow:$e}:null,retryLane:536870912,hydrationErrors:null},n=vf(t),n.return=e,e.child=n,ne=e,Ot=null)):t=null,t===null)throw Mn(e);return e.lanes=536870912,null}return xs(e,a)}var u=t.memoizedState;if(u!==null){var d=u.dehydrated;if(wr(e),r)if(e.flags&256)e.flags&=-257,e=Vd(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(s(558));else if(Kt||Ki(t,e,n,!1),r=(n&t.childLanes)!==0,Kt||r){if(a=Vt,a!==null&&(d=Sh(a,n),d!==0&&d!==u.retryLane))throw u.retryLane=d,ci(t,d),be(a,t,d),Zr;zs(),e=Vd(t,e,n)}else t=u.treeContext,Ot=qe(d.nextSibling),ne=e,At=!0,Dn=null,Ue=!1,t!==null&&yf(e,t),e=xs(e,a),e.flags|=4096;return e}return t=rn(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ss(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(s(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Kr(t,e,n,a,r){return mi(e),n=Cr(t,e,n,a,void 0,r),a=Dr(),t!==null&&!Kt?(Mr(t,e,r),mn(t,e,r)):(At&&a&&rr(e),e.flags|=1,ae(t,e,n,r),e.child)}function Rd(t,e,n,a,r,u){return mi(e),e.updateQueue=null,n=kf(e,a,n,r),Of(t),a=Dr(),t!==null&&!Kt?(Mr(t,e,u),mn(t,e,u)):(At&&a&&rr(e),e.flags|=1,ae(t,e,n,u),e.child)}function Bd(t,e,n,a,r){if(mi(e),e.stateNode===null){var u=Gi,d=n.contextType;typeof d=="object"&&d!==null&&(u=ie(d)),u=new n(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Xr,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},br(e),d=n.contextType,u.context=typeof d=="object"&&d!==null?ie(d):Gi,u.state=e.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(Gr(e,n,d,a),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(d=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),d!==u.state&&Xr.enqueueReplaceState(u,u.state,null),Fa(e,a,u,r),Ka(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var y=e.memoizedProps,j=xi(n,y);u.props=j;var M=u.context,k=n.contextType;d=Gi,typeof k=="object"&&k!==null&&(d=ie(k));var Y=n.getDerivedStateFromProps;k=typeof Y=="function"||typeof u.getSnapshotBeforeUpdate=="function",y=e.pendingProps!==y,k||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(y||M!==d)&&xd(e,u,a,d),zn=!1;var V=e.memoizedState;u.state=V,Fa(e,a,u,r),Ka(),M=e.memoizedState,y||V!==M||zn?(typeof Y=="function"&&(Gr(e,n,Y,a),M=e.memoizedState),(j=zn||bd(e,n,j,a,V,M,d))?(k||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=M),u.props=a,u.state=M,u.context=d,a=j):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,xr(t,e),d=e.memoizedProps,k=xi(n,d),u.props=k,Y=e.pendingProps,V=u.context,M=n.contextType,j=Gi,typeof M=="object"&&M!==null&&(j=ie(M)),y=n.getDerivedStateFromProps,(M=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(d!==Y||V!==j)&&xd(e,u,a,j),zn=!1,V=e.memoizedState,u.state=V,Fa(e,a,u,r),Ka();var R=e.memoizedState;d!==Y||V!==R||zn||t!==null&&t.dependencies!==null&&ns(t.dependencies)?(typeof y=="function"&&(Gr(e,n,y,a),R=e.memoizedState),(k=zn||bd(e,n,k,a,V,R,j)||t!==null&&t.dependencies!==null&&ns(t.dependencies))?(M||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,R,j),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,R,j)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||d===t.memoizedProps&&V===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&V===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=R),u.props=a,u.state=R,u.context=j,a=k):(typeof u.componentDidUpdate!="function"||d===t.memoizedProps&&V===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||d===t.memoizedProps&&V===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,Ss(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=yi(e,t.child,null,r),e.child=yi(e,null,n,r)):ae(t,e,n,r),e.memoizedState=u.state,t=e.child):t=mn(t,e,r),t}function Od(t,e,n,a){return fi(),e.flags|=256,ae(t,e,n,a),e.child}var Fr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Jr(t){return{baseLanes:t,cachePool:Tf()}}function Wr(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=De),t}function kd(t,e,n){var a=e.pendingProps,r=!1,u=(e.flags&128)!==0,d;if((d=u)||(d=t!==null&&t.memoizedState===null?!1:(Yt.current&2)!==0),d&&(r=!0,e.flags&=-129),d=(e.flags&32)!==0,e.flags&=-33,t===null){if(At){if(r?Bn(e):On(),(t=Ot)?(t=Xm(t,Ue),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Cn!==null?{id:We,overflow:$e}:null,retryLane:536870912,hydrationErrors:null},n=vf(t),n.return=e,e.child=n,ne=e,Ot=null)):t=null,t===null)throw Mn(e);return Vu(t)?e.lanes=32:e.lanes=536870912,null}var y=a.children;return a=a.fallback,r?(On(),r=e.mode,y=js({mode:"hidden",children:y},r),a=hi(a,r,n,null),y.return=e,a.return=e,y.sibling=a,e.child=y,a=e.child,a.memoizedState=Jr(n),a.childLanes=Wr(t,d,n),e.memoizedState=Fr,Ia(null,a)):(Bn(e),$r(e,y))}var j=t.memoizedState;if(j!==null&&(y=j.dehydrated,y!==null)){if(u)e.flags&256?(Bn(e),e.flags&=-257,e=Pr(t,e,n)):e.memoizedState!==null?(On(),e.child=t.child,e.flags|=128,e=null):(On(),y=a.fallback,r=e.mode,a=js({mode:"visible",children:a.children},r),y=hi(y,r,n,null),y.flags|=2,a.return=e,y.return=e,a.sibling=y,e.child=a,yi(e,t.child,null,n),a=e.child,a.memoizedState=Jr(n),a.childLanes=Wr(t,d,n),e.memoizedState=Fr,e=Ia(null,a));else if(Bn(e),Vu(y)){if(d=y.nextSibling&&y.nextSibling.dataset,d)var M=d.dgst;d=M,a=Error(s(419)),a.stack="",a.digest=d,Ha({value:a,source:null,stack:null}),e=Pr(t,e,n)}else if(Kt||Ki(t,e,n,!1),d=(n&t.childLanes)!==0,Kt||d){if(d=Vt,d!==null&&(a=Sh(d,n),a!==0&&a!==j.retryLane))throw j.retryLane=a,ci(t,a),be(d,t,a),Zr;zu(y)||zs(),e=Pr(t,e,n)}else zu(y)?(e.flags|=192,e.child=t.child,e=null):(t=j.treeContext,Ot=qe(y.nextSibling),ne=e,At=!0,Dn=null,Ue=!1,t!==null&&yf(e,t),e=$r(e,a.children),e.flags|=4096);return e}return r?(On(),y=a.fallback,r=e.mode,j=t.child,M=j.sibling,a=rn(j,{mode:"hidden",children:a.children}),a.subtreeFlags=j.subtreeFlags&65011712,M!==null?y=rn(M,y):(y=hi(y,r,n,null),y.flags|=2),y.return=e,a.return=e,a.sibling=y,e.child=a,Ia(null,a),a=e.child,y=t.child.memoizedState,y===null?y=Jr(n):(r=y.cachePool,r!==null?(j=Qt._currentValue,r=r.parent!==j?{parent:j,pool:j}:r):r=Tf(),y={baseLanes:y.baseLanes|n,cachePool:r}),a.memoizedState=y,a.childLanes=Wr(t,d,n),e.memoizedState=Fr,Ia(t.child,a)):(Bn(e),n=t.child,t=n.sibling,n=rn(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(d=e.deletions,d===null?(e.deletions=[t],e.flags|=16):d.push(t)),e.child=n,e.memoizedState=null,n)}function $r(t,e){return e=js({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function js(t,e){return t=Te(22,t,null,e),t.lanes=0,t}function Pr(t,e,n){return yi(e,t.child,null,n),t=$r(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _d(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),dr(t.return,e,n)}function Ir(t,e,n,a,r,u){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:r,treeForkCount:u}:(d.isBackwards=e,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=n,d.tailMode=r,d.treeForkCount=u)}function Ud(t,e,n){var a=e.pendingProps,r=a.revealOrder,u=a.tail;a=a.children;var d=Yt.current,y=(d&2)!==0;if(y?(d=d&1|2,e.flags|=128):d&=1,W(Yt,d),ae(t,e,a,n),a=At?qa:0,!y&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_d(t,n,e);else if(t.tag===19)_d(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cs(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ir(e,!1,r,n,u,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cs(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ir(e,!0,n,null,u,a);break;case"together":Ir(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Un|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Ki(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(s(153));if(e.child!==null){for(t=e.child,n=rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function tu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ns(t)))}function h0(t,e,n){switch(e.tag){case 3:te(e,e.stateNode.containerInfo),Nn(e,Qt,t.memoizedState.cache),fi();break;case 27:case 5:ii(e);break;case 4:te(e,e.stateNode.containerInfo);break;case 10:Nn(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,wr(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Bn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?kd(t,e,n):(Bn(e),t=mn(t,e,n),t!==null?t.sibling:null);Bn(e);break;case 19:var r=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(Ki(t,e,n,!1),a=(n&e.childLanes)!==0),r){if(a)return Ud(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),W(Yt,Yt.current),a)break;return null;case 22:return e.lanes=0,Nd(t,e,n,e.pendingProps);case 24:Nn(e,Qt,t.memoizedState.cache)}return mn(t,e,n)}function Ld(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Kt=!0;else{if(!tu(t,n)&&(e.flags&128)===0)return Kt=!1,h0(t,e,n);Kt=(t.flags&131072)!==0}else Kt=!1,At&&(e.flags&1048576)!==0&&gf(e,qa,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=pi(e.elementType),e.type=t,typeof t=="function")lr(t)?(a=xi(t,a),e.tag=1,e=Bd(null,e,t,a,n)):(e.tag=0,e=Kr(null,e,t,a,n));else{if(t!=null){var r=t.$$typeof;if(r===U){e.tag=11,e=Cd(null,e,t,a,n);break t}else if(r===K){e.tag=14,e=Dd(null,e,t,a,n);break t}}throw e=yt(t)||t,Error(s(306,e,""))}}return e;case 0:return Kr(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,r=xi(a,e.pendingProps),Bd(t,e,a,r,n);case 3:t:{if(te(e,e.stateNode.containerInfo),t===null)throw Error(s(387));a=e.pendingProps;var u=e.memoizedState;r=u.element,xr(t,e),Fa(e,a,null,n);var d=e.memoizedState;if(a=d.cache,Nn(e,Qt,a),a!==u.cache&&mr(e,[Qt],n,!0),Ka(),a=d.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:d.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Od(t,e,a,n);break t}else if(a!==r){r=Oe(Error(s(424)),e),Ha(r),e=Od(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ot=qe(t.firstChild),ne=e,At=!0,Dn=null,Ue=!0,n=Nf(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(fi(),a===r){e=mn(t,e,n);break t}ae(t,e,a,n)}e=e.child}return e;case 26:return Ss(t,e),t===null?(n=Wm(e.type,null,e.pendingProps,null))?e.memoizedState=n:At||(n=e.type,t=e.pendingProps,a=Us(ct.current).createElement(n),a[ee]=e,a[de]=t,le(a,n,t),Pt(a),e.stateNode=a):e.memoizedState=Wm(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ii(e),t===null&&At&&(a=e.stateNode=Km(e.type,e.pendingProps,ct.current),ne=e,Ue=!0,r=Ot,Gn(e.type)?(Ru=r,Ot=qe(a.firstChild)):Ot=r),ae(t,e,e.pendingProps.children,n),Ss(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&At&&((r=a=Ot)&&(a=H0(a,e.type,e.pendingProps,Ue),a!==null?(e.stateNode=a,ne=e,Ot=qe(a.firstChild),Ue=!1,r=!0):r=!1),r||Mn(e)),ii(e),r=e.type,u=e.pendingProps,d=t!==null?t.memoizedProps:null,a=u.children,Du(r,u)?a=null:d!==null&&Du(r,d)&&(e.flags|=32),e.memoizedState!==null&&(r=Cr(t,e,n0,null,null,n),ml._currentValue=r),Ss(t,e),ae(t,e,a,n),e.child;case 6:return t===null&&At&&((t=n=Ot)&&(n=Y0(n,e.pendingProps,Ue),n!==null?(e.stateNode=n,ne=e,Ot=null,t=!0):t=!1),t||Mn(e)),null;case 13:return kd(t,e,n);case 4:return te(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=yi(e,null,a,n):ae(t,e,a,n),e.child;case 11:return Cd(t,e,e.type,e.pendingProps,n);case 7:return ae(t,e,e.pendingProps,n),e.child;case 8:return ae(t,e,e.pendingProps.children,n),e.child;case 12:return ae(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,Nn(e,e.type,a.value),ae(t,e,a.children,n),e.child;case 9:return r=e.type._context,a=e.pendingProps.children,mi(e),r=ie(r),a=a(r),e.flags|=1,ae(t,e,a,n),e.child;case 14:return Dd(t,e,e.type,e.pendingProps,n);case 15:return Md(t,e,e.type,e.pendingProps,n);case 19:return Ud(t,e,n);case 31:return c0(t,e,n);case 22:return Nd(t,e,n,e.pendingProps);case 24:return mi(e),a=ie(Qt),t===null?(r=gr(),r===null&&(r=Vt,u=vr(),r.pooledCache=u,u.refCount++,u!==null&&(r.pooledCacheLanes|=n),r=u),e.memoizedState={parent:a,cache:r},br(e),Nn(e,Qt,r)):((t.lanes&n)!==0&&(xr(t,e),Fa(e,null,null,n),Ka()),r=t.memoizedState,u=e.memoizedState,r.parent!==a?(r={parent:a,cache:a},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Nn(e,Qt,a)):(a=u.cache,Nn(e,Qt,a),a!==r.cache&&mr(e,[Qt],n,!0))),ae(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function vn(t){t.flags|=4}function eu(t,e,n,a,r){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if(fm())t.flags|=8192;else throw gi=ss,yr}else t.flags&=-16777217}function qd(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ev(e))if(fm())t.flags|=8192;else throw gi=ss,yr}function As(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?yh():536870912,t.lanes|=e,la|=e)}function tl(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags&65011712,a|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,a|=r.subtreeFlags,a|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function f0(t,e,n){var a=e.pendingProps;switch(ur(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return kt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),hn(Qt),Ut(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Zi(e)?vn(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,hr())),kt(e),null;case 26:var r=e.type,u=e.memoizedState;return t===null?(vn(e),u!==null?(kt(e),qd(e,u)):(kt(e),eu(e,r,null,a,n))):u?u!==t.memoizedState?(vn(e),kt(e),qd(e,u)):(kt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&vn(e),kt(e),eu(e,r,t,a,n)),null;case 27:if(Mi(e),n=ct.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&vn(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return kt(e),null}t=Z.current,Zi(e)?bf(e):(t=Km(r,a,n),e.stateNode=t,vn(e))}return kt(e),null;case 5:if(Mi(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&vn(e);else{if(!a){if(e.stateNode===null)throw Error(s(166));return kt(e),null}if(u=Z.current,Zi(e))bf(e);else{var d=Us(ct.current);switch(u){case 1:u=d.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:u=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":u=d.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":u=d.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":u=d.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?d.createElement("select",{is:a.is}):d.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?d.createElement(r,{is:a.is}):d.createElement(r)}}u[ee]=e,u[de]=a;t:for(d=e.child;d!==null;){if(d.tag===5||d.tag===6)u.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break t;for(;d.sibling===null;){if(d.return===null||d.return===e)break t;d=d.return}d.sibling.return=d.return,d=d.sibling}e.stateNode=u;t:switch(le(u,r,a),r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&vn(e)}}return kt(e),eu(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&vn(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(s(166));if(t=ct.current,Zi(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,r=ne,r!==null)switch(r.tag){case 27:case 5:a=r.memoizedProps}t[ee]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||km(t.nodeValue,n)),t||Mn(e,!0)}else t=Us(t).createTextNode(a),t[ee]=e,e.stateNode=t}return kt(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(a=Zi(e),n!==null){if(t===null){if(!a)throw Error(s(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ee]=e}else fi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),t=!1}else n=hr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(Ee(e),e):(Ee(e),null);if((e.flags&128)!==0)throw Error(s(558))}return kt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=Zi(e),a!==null&&a.dehydrated!==null){if(t===null){if(!r)throw Error(s(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(s(317));r[ee]=e}else fi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;kt(e),r=!1}else r=hr(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(Ee(e),e):(Ee(e),null)}return Ee(e),(e.flags&128)!==0?(e.lanes=n,e):(n=a!==null,t=t!==null&&t.memoizedState!==null,n&&(a=e.child,r=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(r=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==r&&(a.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),As(e,e.updateQueue),kt(e),null);case 4:return Ut(),t===null&&Au(e.stateNode.containerInfo),kt(e),null;case 10:return hn(e.type),kt(e),null;case 19:if(H(Yt),a=e.memoizedState,a===null)return kt(e),null;if(r=(e.flags&128)!==0,u=a.rendering,u===null)if(r)tl(a,!1);else{if(qt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=cs(t),u!==null){for(e.flags|=128,tl(a,!1),t=u.updateQueue,e.updateQueue=t,As(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)mf(n,t),n=n.sibling;return W(Yt,Yt.current&1|2),At&&un(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&xe()>Ds&&(e.flags|=128,r=!0,tl(a,!1),e.lanes=4194304)}else{if(!r)if(t=cs(u),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,As(e,t),tl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!At)return kt(e),null}else 2*xe()-a.renderingStartTime>Ds&&n!==536870912&&(e.flags|=128,r=!0,tl(a,!1),e.lanes=4194304);a.isBackwards?(u.sibling=e.child,e.child=u):(t=a.last,t!==null?t.sibling=u:e.child=u,a.last=u)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xe(),t.sibling=null,n=Yt.current,W(Yt,r?n&1|2:n&1),At&&un(e,a.treeForkCount),t):(kt(e),null);case 22:case 23:return Ee(e),Tr(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),n=e.updateQueue,n!==null&&As(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&H(vi),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),hn(Qt),kt(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function d0(t,e){switch(ur(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return hn(Qt),Ut(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Mi(e),null;case 31:if(e.memoizedState!==null){if(Ee(e),e.alternate===null)throw Error(s(340));fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ee(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(s(340));fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return H(Yt),null;case 4:return Ut(),null;case 10:return hn(e.type),null;case 22:case 23:return Ee(e),Tr(),t!==null&&H(vi),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return hn(Qt),null;case 25:return null;default:return null}}function Hd(t,e){switch(ur(e),e.tag){case 3:hn(Qt),Ut();break;case 26:case 27:case 5:Mi(e);break;case 4:Ut();break;case 31:e.memoizedState!==null&&Ee(e);break;case 13:Ee(e);break;case 19:H(Yt);break;case 10:hn(e.type);break;case 22:case 23:Ee(e),Tr(),t!==null&&H(vi);break;case 24:hn(Qt)}}function el(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var r=a.next;n=r;do{if((n.tag&t)===t){a=void 0;var u=n.create,d=n.inst;a=u(),d.destroy=a}n=n.next}while(n!==r)}}catch(y){Dt(e,e.return,y)}}function kn(t,e,n){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){var d=a.inst,y=d.destroy;if(y!==void 0){d.destroy=void 0,r=e;var j=n,M=y;try{M()}catch(k){Dt(r,j,k)}}}a=a.next}while(a!==u)}}catch(k){Dt(e,e.return,k)}}function Yd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Vf(e,n)}catch(a){Dt(t,t.return,a)}}}function Gd(t,e,n){n.props=xi(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Dt(t,e,a)}}function nl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(r){Dt(t,e,r)}}function Pe(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(r){Dt(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Dt(t,e,r)}else n.current=null}function Xd(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(r){Dt(t,t.return,r)}}function nu(t,e,n){try{var a=t.stateNode;O0(a,t.type,n,e),a[de]=e}catch(r){Dt(t,t.return,r)}}function Qd(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gn(t.type)||t.tag===4}function iu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Qd(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function au(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sn));else if(a!==4&&(a===27&&Gn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(au(t,e,n),t=t.sibling;t!==null;)au(t,e,n),t=t.sibling}function Ts(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Gn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ts(t,e,n),t=t.sibling;t!==null;)Ts(t,e,n),t=t.sibling}function Zd(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);le(e,a,n),e[ee]=t,e[de]=n}catch(u){Dt(t,t.return,u)}}var pn=!1,Ft=!1,lu=!1,Kd=typeof WeakSet=="function"?WeakSet:Set,It=null;function m0(t,e){if(t=t.containerInfo,Eu=Qs,t=lf(t),Po(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var r=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break t}var d=0,y=-1,j=-1,M=0,k=0,Y=t,V=null;e:for(;;){for(var R;Y!==n||r!==0&&Y.nodeType!==3||(y=d+r),Y!==u||a!==0&&Y.nodeType!==3||(j=d+a),Y.nodeType===3&&(d+=Y.nodeValue.length),(R=Y.firstChild)!==null;)V=Y,Y=R;for(;;){if(Y===t)break e;if(V===n&&++M===r&&(y=d),V===u&&++k===a&&(j=d),(R=Y.nextSibling)!==null)break;Y=V,V=Y.parentNode}Y=R}n=y===-1||j===-1?null:{start:y,end:j}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cu={focusedElem:t,selectionRange:n},Qs=!1,It=e;It!==null;)if(e=It,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,It=t;else for(;It!==null;){switch(e=It,u=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)r=t[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,n=e,r=u.memoizedProps,u=u.memoizedState,a=n.stateNode;try{var P=xi(n.type,r);t=a.getSnapshotBeforeUpdate(P,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Dt(n,n.return,lt)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Nu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Nu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=e.sibling,t!==null){t.return=e.return,It=t;break}It=e.return}}function Fd(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:yn(t,n),a&4&&el(5,n);break;case 1:if(yn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(d){Dt(n,n.return,d)}else{var r=xi(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(d){Dt(n,n.return,d)}}a&64&&Yd(n),a&512&&nl(n,n.return);break;case 3:if(yn(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Vf(t,e)}catch(d){Dt(n,n.return,d)}}break;case 27:e===null&&a&4&&Zd(n);case 26:case 5:yn(t,n),e===null&&a&4&&Xd(n),a&512&&nl(n,n.return);break;case 12:yn(t,n);break;case 31:yn(t,n),a&4&&$d(t,n);break;case 13:yn(t,n),a&4&&Pd(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=A0.bind(null,n),G0(t,n))));break;case 22:if(a=n.memoizedState!==null||pn,!a){e=e!==null&&e.memoizedState!==null||Ft,r=pn;var u=Ft;pn=a,(Ft=e)&&!u?bn(t,n,(n.subtreeFlags&8772)!==0):yn(t,n),pn=r,Ft=u}break;case 30:break;default:yn(t,n)}}function Jd(t){var e=t.alternate;e!==null&&(t.alternate=null,Jd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Oo(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var _t=null,ve=!1;function gn(t,e,n){for(n=n.child;n!==null;)Wd(t,e,n),n=n.sibling}function Wd(t,e,n){if(Se&&typeof Se.onCommitFiberUnmount=="function")try{Se.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 26:Ft||Pe(n,e),gn(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ft||Pe(n,e);var a=_t,r=ve;Gn(n.type)&&(_t=n.stateNode,ve=!1),gn(t,e,n),hl(n.stateNode),_t=a,ve=r;break;case 5:Ft||Pe(n,e);case 6:if(a=_t,r=ve,_t=null,gn(t,e,n),_t=a,ve=r,_t!==null)if(ve)try{(_t.nodeType===9?_t.body:_t.nodeName==="HTML"?_t.ownerDocument.body:_t).removeChild(n.stateNode)}catch(u){Dt(n,e,u)}else try{_t.removeChild(n.stateNode)}catch(u){Dt(n,e,u)}break;case 18:_t!==null&&(ve?(t=_t,Ym(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),da(t)):Ym(_t,n.stateNode));break;case 4:a=_t,r=ve,_t=n.stateNode.containerInfo,ve=!0,gn(t,e,n),_t=a,ve=r;break;case 0:case 11:case 14:case 15:kn(2,n,e),Ft||kn(4,n,e),gn(t,e,n);break;case 1:Ft||(Pe(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Gd(n,e,a)),gn(t,e,n);break;case 21:gn(t,e,n);break;case 22:Ft=(a=Ft)||n.memoizedState!==null,gn(t,e,n),Ft=a;break;default:gn(t,e,n)}}function $d(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{da(t)}catch(n){Dt(e,e.return,n)}}}function Pd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{da(t)}catch(n){Dt(e,e.return,n)}}function v0(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Kd),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Kd),e;default:throw Error(s(435,t.tag))}}function ws(t,e){var n=v0(t);e.forEach(function(a){if(!n.has(a)){n.add(a);var r=T0.bind(null,t,a);a.then(r,r)}})}function pe(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var r=n[a],u=t,d=e,y=d;t:for(;y!==null;){switch(y.tag){case 27:if(Gn(y.type)){_t=y.stateNode,ve=!1;break t}break;case 5:_t=y.stateNode,ve=!1;break t;case 3:case 4:_t=y.stateNode.containerInfo,ve=!0;break t}y=y.return}if(_t===null)throw Error(s(160));Wd(u,d,r),_t=null,ve=!1,u=r.alternate,u!==null&&(u.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Id(e,t),e=e.sibling}var Qe=null;function Id(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:pe(e,t),ge(t),a&4&&(kn(3,t,t.return),el(3,t),kn(5,t,t.return));break;case 1:pe(e,t),ge(t),a&512&&(Ft||n===null||Pe(n,n.return)),a&64&&pn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var r=Qe;if(pe(e,t),ge(t),a&512&&(Ft||n===null||Pe(n,n.return)),a&4){var u=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,r=r.ownerDocument||r;e:switch(a){case"title":u=r.getElementsByTagName("title")[0],(!u||u[Ma]||u[ee]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=r.createElement(a),r.head.insertBefore(u,r.querySelector("head > title"))),le(u,a,n),u[ee]=t,Pt(u),a=u;break t;case"link":var d=Im("link","href",r).get(a+(n.href||""));if(d){for(var y=0;y<d.length;y++)if(u=d[y],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(y,1);break e}}u=r.createElement(a),le(u,a,n),r.head.appendChild(u);break;case"meta":if(d=Im("meta","content",r).get(a+(n.content||""))){for(y=0;y<d.length;y++)if(u=d[y],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(y,1);break e}}u=r.createElement(a),le(u,a,n),r.head.appendChild(u);break;default:throw Error(s(468,a))}u[ee]=t,Pt(u),a=u}t.stateNode=a}else tv(r,t.type,t.stateNode);else t.stateNode=Pm(r,a,t.memoizedProps);else u!==a?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,a===null?tv(r,t.type,t.stateNode):Pm(r,a,t.memoizedProps)):a===null&&t.stateNode!==null&&nu(t,t.memoizedProps,n.memoizedProps)}break;case 27:pe(e,t),ge(t),a&512&&(Ft||n===null||Pe(n,n.return)),n!==null&&a&4&&nu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(pe(e,t),ge(t),a&512&&(Ft||n===null||Pe(n,n.return)),t.flags&32){r=t.stateNode;try{ki(r,"")}catch(P){Dt(t,t.return,P)}}a&4&&t.stateNode!=null&&(r=t.memoizedProps,nu(t,r,n!==null?n.memoizedProps:r)),a&1024&&(lu=!0);break;case 6:if(pe(e,t),ge(t),a&4){if(t.stateNode===null)throw Error(s(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(P){Dt(t,t.return,P)}}break;case 3:if(Hs=null,r=Qe,Qe=Ls(e.containerInfo),pe(e,t),Qe=r,ge(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{da(e.containerInfo)}catch(P){Dt(t,t.return,P)}lu&&(lu=!1,tm(t));break;case 4:a=Qe,Qe=Ls(t.stateNode.containerInfo),pe(e,t),ge(t),Qe=a;break;case 12:pe(e,t),ge(t);break;case 31:pe(e,t),ge(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ws(t,a)));break;case 13:pe(e,t),ge(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Cs=xe()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ws(t,a)));break;case 22:r=t.memoizedState!==null;var j=n!==null&&n.memoizedState!==null,M=pn,k=Ft;if(pn=M||r,Ft=k||j,pe(e,t),Ft=k,pn=M,ge(t),a&8192)t:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||j||pn||Ft||Si(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){j=n=e;try{if(u=j.stateNode,r)d=u.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{y=j.stateNode;var Y=j.memoizedProps.style,V=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;y.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(P){Dt(j,j.return,P)}}}else if(e.tag===6){if(n===null){j=e;try{j.stateNode.nodeValue=r?"":j.memoizedProps}catch(P){Dt(j,j.return,P)}}}else if(e.tag===18){if(n===null){j=e;try{var R=j.stateNode;r?Gm(R,!0):Gm(j.stateNode,!1)}catch(P){Dt(j,j.return,P)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,ws(t,n))));break;case 19:pe(e,t),ge(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,ws(t,a)));break;case 30:break;case 21:break;default:pe(e,t),ge(t)}}function ge(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(Qd(a)){n=a;break}a=a.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var r=n.stateNode,u=iu(t);Ts(t,u,r);break;case 5:var d=n.stateNode;n.flags&32&&(ki(d,""),n.flags&=-33);var y=iu(t);Ts(t,y,d);break;case 3:case 4:var j=n.stateNode.containerInfo,M=iu(t);au(t,M,j);break;default:throw Error(s(161))}}catch(k){Dt(t,t.return,k)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;tm(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function yn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Fd(t,e.alternate,e),e=e.sibling}function Si(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:kn(4,e,e.return),Si(e);break;case 1:Pe(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Gd(e,e.return,n),Si(e);break;case 27:hl(e.stateNode);case 26:case 5:Pe(e,e.return),Si(e);break;case 22:e.memoizedState===null&&Si(e);break;case 30:Si(e);break;default:Si(e)}t=t.sibling}}function bn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,r=t,u=e,d=u.flags;switch(u.tag){case 0:case 11:case 15:bn(r,u,n),el(4,u);break;case 1:if(bn(r,u,n),a=u,r=a.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(M){Dt(a,a.return,M)}if(a=u,r=a.updateQueue,r!==null){var y=a.stateNode;try{var j=r.shared.hiddenCallbacks;if(j!==null)for(r.shared.hiddenCallbacks=null,r=0;r<j.length;r++)zf(j[r],y)}catch(M){Dt(a,a.return,M)}}n&&d&64&&Yd(u),nl(u,u.return);break;case 27:Zd(u);case 26:case 5:bn(r,u,n),n&&a===null&&d&4&&Xd(u),nl(u,u.return);break;case 12:bn(r,u,n);break;case 31:bn(r,u,n),n&&d&4&&$d(r,u);break;case 13:bn(r,u,n),n&&d&4&&Pd(r,u);break;case 22:u.memoizedState===null&&bn(r,u,n),nl(u,u.return);break;case 30:break;default:bn(r,u,n)}e=e.sibling}}function su(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Ya(n))}function ou(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ya(t))}function Ze(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)em(t,e,n,a),e=e.sibling}function em(t,e,n,a){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Ze(t,e,n,a),r&2048&&el(9,e);break;case 1:Ze(t,e,n,a);break;case 3:Ze(t,e,n,a),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Ya(t)));break;case 12:if(r&2048){Ze(t,e,n,a),t=e.stateNode;try{var u=e.memoizedProps,d=u.id,y=u.onPostCommit;typeof y=="function"&&y(d,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Dt(e,e.return,j)}}else Ze(t,e,n,a);break;case 31:Ze(t,e,n,a);break;case 13:Ze(t,e,n,a);break;case 23:break;case 22:u=e.stateNode,d=e.alternate,e.memoizedState!==null?u._visibility&2?Ze(t,e,n,a):il(t,e):u._visibility&2?Ze(t,e,n,a):(u._visibility|=2,na(t,e,n,a,(e.subtreeFlags&10256)!==0||!1)),r&2048&&su(d,e);break;case 24:Ze(t,e,n,a),r&2048&&ou(e.alternate,e);break;default:Ze(t,e,n,a)}}function na(t,e,n,a,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,d=e,y=n,j=a,M=d.flags;switch(d.tag){case 0:case 11:case 15:na(u,d,y,j,r),el(8,d);break;case 23:break;case 22:var k=d.stateNode;d.memoizedState!==null?k._visibility&2?na(u,d,y,j,r):il(u,d):(k._visibility|=2,na(u,d,y,j,r)),r&&M&2048&&su(d.alternate,d);break;case 24:na(u,d,y,j,r),r&&M&2048&&ou(d.alternate,d);break;default:na(u,d,y,j,r)}e=e.sibling}}function il(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,r=a.flags;switch(a.tag){case 22:il(n,a),r&2048&&su(a.alternate,a);break;case 24:il(n,a),r&2048&&ou(a.alternate,a);break;default:il(n,a)}e=e.sibling}}var al=8192;function ia(t,e,n){if(t.subtreeFlags&al)for(t=t.child;t!==null;)nm(t,e,n),t=t.sibling}function nm(t,e,n){switch(t.tag){case 26:ia(t,e,n),t.flags&al&&t.memoizedState!==null&&ex(n,Qe,t.memoizedState,t.memoizedProps);break;case 5:ia(t,e,n);break;case 3:case 4:var a=Qe;Qe=Ls(t.stateNode.containerInfo),ia(t,e,n),Qe=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=al,al=16777216,ia(t,e,n),al=a):ia(t,e,n));break;default:ia(t,e,n)}}function im(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ll(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];It=a,lm(a,t)}im(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)am(t),t=t.sibling}function am(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&kn(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Es(t)):ll(t);break;default:ll(t)}}function Es(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];It=a,lm(a,t)}im(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:kn(8,e,e.return),Es(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,Es(e));break;default:Es(e)}t=t.sibling}}function lm(t,e){for(;It!==null;){var n=It;switch(n.tag){case 0:case 11:case 15:kn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ya(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,It=a;else t:for(n=t;It!==null;){a=It;var r=a.sibling,u=a.return;if(Jd(a),a===n){It=null;break t}if(r!==null){r.return=u,It=r;break t}It=u}}}var p0={getCacheForType:function(t){var e=ie(Qt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return ie(Qt).controller.signal}},g0=typeof WeakMap=="function"?WeakMap:Map,Et=0,Vt=null,pt=null,bt=0,Ct=0,Ce=null,_n=!1,aa=!1,ru=!1,xn=0,qt=0,Un=0,ji=0,uu=0,De=0,la=0,sl=null,ye=null,cu=!1,Cs=0,sm=0,Ds=1/0,Ms=null,Ln=null,Wt=0,qn=null,sa=null,Sn=0,hu=0,fu=null,om=null,ol=0,du=null;function Me(){return(Et&2)!==0&&bt!==0?bt&-bt:N.T!==null?bu():jh()}function rm(){if(De===0)if((bt&536870912)===0||At){var t=_l;_l<<=1,(_l&3932160)===0&&(_l=262144),De=t}else De=536870912;return t=we.current,t!==null&&(t.flags|=32),De}function be(t,e,n){(t===Vt&&(Ct===2||Ct===9)||t.cancelPendingCommit!==null)&&(oa(t,0),Hn(t,bt,De,!1)),Da(t,n),((Et&2)===0||t!==Vt)&&(t===Vt&&((Et&2)===0&&(ji|=n),qt===4&&Hn(t,bt,De,!1)),Ie(t))}function um(t,e,n){if((Et&6)!==0)throw Error(s(327));var a=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Ca(t,e),r=a?x0(t,e):vu(t,e,!0),u=a;do{if(r===0){aa&&!a&&Hn(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!y0(n)){r=vu(t,e,!1),u=!1;continue}if(r===2){if(u=e,t.errorRecoveryDisabledLanes&u)var d=0;else d=t.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){e=d;t:{var y=t;r=sl;var j=y.current.memoizedState.isDehydrated;if(j&&(oa(y,d).flags|=256),d=vu(y,d,!1),d!==2){if(ru&&!j){y.errorRecoveryDisabledLanes|=u,ji|=u,r=4;break t}u=ye,ye=r,u!==null&&(ye===null?ye=u:ye.push.apply(ye,u))}r=d}if(u=!1,r!==2)continue}}if(r===1){oa(t,0),Hn(t,e,0,!0);break}t:{switch(a=t,u=r,u){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Hn(a,e,De,!_n);break t;case 2:ye=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(r=Cs+300-xe(),10<r)){if(Hn(a,e,De,!_n),Ll(a,0,!0)!==0)break t;Sn=e,a.timeoutHandle=qm(cm.bind(null,a,n,ye,Ms,cu,e,De,ji,la,_n,u,"Throttled",-0,0),r);break t}cm(a,n,ye,Ms,cu,e,De,ji,la,_n,u,null,-0,0)}}break}while(!0);Ie(t)}function cm(t,e,n,a,r,u,d,y,j,M,k,Y,V,R){if(t.timeoutHandle=-1,Y=e.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},nm(e,u,Y);var P=(u&62914560)===u?Cs-xe():(u&4194048)===u?sm-xe():0;if(P=nx(Y,P),P!==null){Sn=u,t.cancelPendingCommit=P(ym.bind(null,t,e,u,n,a,r,d,y,j,k,Y,null,V,R)),Hn(t,u,d,!M);return}}ym(t,e,u,n,a,r,d,y,j)}function y0(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var r=n[a],u=r.getSnapshot;r=r.value;try{if(!Ae(u(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e,n,a){e&=~uu,e&=~ji,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var r=e;0<r;){var u=31-je(r),d=1<<u;a[u]=-1,r&=~d}n!==0&&bh(t,n,e)}function Ns(){return(Et&6)===0?(rl(0),!1):!0}function mu(){if(pt!==null){if(Ct===0)var t=pt.return;else t=pt,cn=di=null,Nr(t),$i=null,Xa=0,t=pt;for(;t!==null;)Hd(t.alternate,t),t=t.return;pt=null}}function oa(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,U0(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Sn=0,mu(),Vt=t,pt=n=rn(t.current,null),bt=e,Ct=0,Ce=null,_n=!1,aa=Ca(t,e),ru=!1,la=De=uu=ji=Un=qt=0,ye=sl=null,cu=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var r=31-je(a),u=1<<r;e|=t[r],a&=~u}return xn=e,$l(),n}function hm(t,e){ht=null,N.H=Pa,e===Wi||e===ls?(e=Cf(),Ct=3):e===yr?(e=Cf(),Ct=4):Ct=e===Zr?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ce=e,pt===null&&(qt=1,bs(t,Oe(e,t.current)))}function fm(){var t=we.current;return t===null?!0:(bt&4194048)===bt?Le===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Le:!1}function dm(){var t=N.H;return N.H=Pa,t===null?Pa:t}function mm(){var t=N.A;return N.A=p0,t}function zs(){qt=4,_n||(bt&4194048)!==bt&&we.current!==null||(aa=!0),(Un&134217727)===0&&(ji&134217727)===0||Vt===null||Hn(Vt,bt,De,!1)}function vu(t,e,n){var a=Et;Et|=2;var r=dm(),u=mm();(Vt!==t||bt!==e)&&(Ms=null,oa(t,e)),e=!1;var d=qt;t:do try{if(Ct!==0&&pt!==null){var y=pt,j=Ce;switch(Ct){case 8:mu(),d=6;break t;case 3:case 2:case 9:case 6:we.current===null&&(e=!0);var M=Ct;if(Ct=0,Ce=null,ra(t,y,j,M),n&&aa){d=0;break t}break;default:M=Ct,Ct=0,Ce=null,ra(t,y,j,M)}}b0(),d=qt;break}catch(k){hm(t,k)}while(!0);return e&&t.shellSuspendCounter++,cn=di=null,Et=a,N.H=r,N.A=u,pt===null&&(Vt=null,bt=0,$l()),d}function b0(){for(;pt!==null;)vm(pt)}function x0(t,e){var n=Et;Et|=2;var a=dm(),r=mm();Vt!==t||bt!==e?(Ms=null,Ds=xe()+500,oa(t,e)):aa=Ca(t,e);t:do try{if(Ct!==0&&pt!==null){e=pt;var u=Ce;e:switch(Ct){case 1:Ct=0,Ce=null,ra(t,e,u,1);break;case 2:case 9:if(wf(u)){Ct=0,Ce=null,pm(e);break}e=function(){Ct!==2&&Ct!==9||Vt!==t||(Ct=7),Ie(t)},u.then(e,e);break t;case 3:Ct=7;break t;case 4:Ct=5;break t;case 7:wf(u)?(Ct=0,Ce=null,pm(e)):(Ct=0,Ce=null,ra(t,e,u,7));break;case 5:var d=null;switch(pt.tag){case 26:d=pt.memoizedState;case 5:case 27:var y=pt;if(d?ev(d):y.stateNode.complete){Ct=0,Ce=null;var j=y.sibling;if(j!==null)pt=j;else{var M=y.return;M!==null?(pt=M,Vs(M)):pt=null}break e}}Ct=0,Ce=null,ra(t,e,u,5);break;case 6:Ct=0,Ce=null,ra(t,e,u,6);break;case 8:mu(),qt=6;break t;default:throw Error(s(462))}}S0();break}catch(k){hm(t,k)}while(!0);return cn=di=null,N.H=a,N.A=r,Et=n,pt!==null?0:(Vt=null,bt=0,$l(),qt)}function S0(){for(;pt!==null&&!Xy();)vm(pt)}function vm(t){var e=Ld(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?Vs(t):pt=e}function pm(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Rd(n,e,e.pendingProps,e.type,void 0,bt);break;case 11:e=Rd(n,e,e.pendingProps,e.type.render,e.ref,bt);break;case 5:Nr(e);default:Hd(n,e),e=pt=mf(e,xn),e=Ld(n,e,xn)}t.memoizedProps=t.pendingProps,e===null?Vs(t):pt=e}function ra(t,e,n,a){cn=di=null,Nr(e),$i=null,Xa=0;var r=e.return;try{if(u0(t,r,e,n,bt)){qt=1,bs(t,Oe(n,t.current)),pt=null;return}}catch(u){if(r!==null)throw pt=r,u;qt=1,bs(t,Oe(n,t.current)),pt=null;return}e.flags&32768?(At||a===1?t=!0:aa||(bt&536870912)!==0?t=!1:(_n=t=!0,(a===2||a===9||a===3||a===6)&&(a=we.current,a!==null&&a.tag===13&&(a.flags|=16384))),gm(e,t)):Vs(e)}function Vs(t){var e=t;do{if((e.flags&32768)!==0){gm(e,_n);return}t=e.return;var n=f0(e.alternate,e,xn);if(n!==null){pt=n;return}if(e=e.sibling,e!==null){pt=e;return}pt=e=t}while(e!==null);qt===0&&(qt=5)}function gm(t,e){do{var n=d0(t.alternate,t);if(n!==null){n.flags&=32767,pt=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){pt=t;return}pt=t=n}while(t!==null);qt=6,pt=null}function ym(t,e,n,a,r,u,d,y,j){t.cancelPendingCommit=null;do Rs();while(Wt!==0);if((Et&6)!==0)throw Error(s(327));if(e!==null){if(e===t.current)throw Error(s(177));if(u=e.lanes|e.childLanes,u|=ir,tb(t,n,u,d,y,j),t===Vt&&(pt=Vt=null,bt=0),sa=e,qn=t,Sn=n,hu=u,fu=r,om=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,w0(Ol,function(){return Am(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,r=X.p,X.p=2,d=Et,Et|=4;try{m0(t,e,n)}finally{Et=d,X.p=r,N.T=a}}Wt=1,bm(),xm(),Sm()}}function bm(){if(Wt===1){Wt=0;var t=qn,e=sa,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=N.T,N.T=null;var a=X.p;X.p=2;var r=Et;Et|=4;try{Id(e,t);var u=Cu,d=lf(t.containerInfo),y=u.focusedElem,j=u.selectionRange;if(d!==y&&y&&y.ownerDocument&&af(y.ownerDocument.documentElement,y)){if(j!==null&&Po(y)){var M=j.start,k=j.end;if(k===void 0&&(k=M),"selectionStart"in y)y.selectionStart=M,y.selectionEnd=Math.min(k,y.value.length);else{var Y=y.ownerDocument||document,V=Y&&Y.defaultView||window;if(V.getSelection){var R=V.getSelection(),P=y.textContent.length,lt=Math.min(j.start,P),zt=j.end===void 0?lt:Math.min(j.end,P);!R.extend&&lt>zt&&(d=zt,zt=lt,lt=d);var E=nf(y,lt),w=nf(y,zt);if(E&&w&&(R.rangeCount!==1||R.anchorNode!==E.node||R.anchorOffset!==E.offset||R.focusNode!==w.node||R.focusOffset!==w.offset)){var D=Y.createRange();D.setStart(E.node,E.offset),R.removeAllRanges(),lt>zt?(R.addRange(D),R.extend(w.node,w.offset)):(D.setEnd(w.node,w.offset),R.addRange(D))}}}}for(Y=[],R=y;R=R.parentNode;)R.nodeType===1&&Y.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<Y.length;y++){var L=Y[y];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Qs=!!Eu,Cu=Eu=null}finally{Et=r,X.p=a,N.T=n}}t.current=e,Wt=2}}function xm(){if(Wt===2){Wt=0;var t=qn,e=sa,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=N.T,N.T=null;var a=X.p;X.p=2;var r=Et;Et|=4;try{Fd(t,e.alternate,e)}finally{Et=r,X.p=a,N.T=n}}Wt=3}}function Sm(){if(Wt===4||Wt===3){Wt=0,Qy();var t=qn,e=sa,n=Sn,a=om;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Wt=5:(Wt=0,sa=qn=null,jm(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(Ln=null),Ro(n),e=e.stateNode,Se&&typeof Se.onCommitFiberRoot=="function")try{Se.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=N.T,r=X.p,X.p=2,N.T=null;try{for(var u=t.onRecoverableError,d=0;d<a.length;d++){var y=a[d];u(y.value,{componentStack:y.stack})}}finally{N.T=e,X.p=r}}(Sn&3)!==0&&Rs(),Ie(t),r=t.pendingLanes,(n&261930)!==0&&(r&42)!==0?t===du?ol++:(ol=0,du=t):ol=0,rl(0)}}function jm(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Ya(e)))}function Rs(){return bm(),xm(),Sm(),Am()}function Am(){if(Wt!==5)return!1;var t=qn,e=hu;hu=0;var n=Ro(Sn),a=N.T,r=X.p;try{X.p=32>n?32:n,N.T=null,n=fu,fu=null;var u=qn,d=Sn;if(Wt=0,sa=qn=null,Sn=0,(Et&6)!==0)throw Error(s(331));var y=Et;if(Et|=4,am(u.current),em(u,u.current,d,n),Et=y,rl(0,!1),Se&&typeof Se.onPostCommitFiberRoot=="function")try{Se.onPostCommitFiberRoot(Ea,u)}catch{}return!0}finally{X.p=r,N.T=a,jm(t,e)}}function Tm(t,e,n){e=Oe(n,e),e=Qr(t.stateNode,e,2),t=Rn(t,e,2),t!==null&&(Da(t,2),Ie(t))}function Dt(t,e,n){if(t.tag===3)Tm(t,t,n);else for(;e!==null;){if(e.tag===3){Tm(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ln===null||!Ln.has(a))){t=Oe(n,t),n=wd(2),a=Rn(e,n,2),a!==null&&(Ed(n,a,e,t),Da(a,2),Ie(a));break}}e=e.return}}function pu(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new g0;var r=new Set;a.set(e,r)}else r=a.get(e),r===void 0&&(r=new Set,a.set(e,r));r.has(n)||(ru=!0,r.add(n),t=j0.bind(null,t,e,n),e.then(t,t))}function j0(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Vt===t&&(bt&n)===n&&(qt===4||qt===3&&(bt&62914560)===bt&&300>xe()-Cs?(Et&2)===0&&oa(t,0):uu|=n,la===bt&&(la=0)),Ie(t)}function wm(t,e){e===0&&(e=yh()),t=ci(t,e),t!==null&&(Da(t,e),Ie(t))}function A0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wm(t,n)}function T0(t,e){var n=0;switch(t.tag){case 31:case 13:var a=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(e),wm(t,n)}function w0(t,e){return Mo(t,e)}var Bs=null,ua=null,gu=!1,Os=!1,yu=!1,Yn=0;function Ie(t){t!==ua&&t.next===null&&(ua===null?Bs=ua=t:ua=ua.next=t),Os=!0,gu||(gu=!0,C0())}function rl(t,e){if(!yu&&Os){yu=!0;do for(var n=!1,a=Bs;a!==null;){if(t!==0){var r=a.pendingLanes;if(r===0)var u=0;else{var d=a.suspendedLanes,y=a.pingedLanes;u=(1<<31-je(42|t)+1)-1,u&=r&~(d&~y),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,Mm(a,u))}else u=bt,u=Ll(a,a===Vt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Ca(a,u)||(n=!0,Mm(a,u));a=a.next}while(n);yu=!1}}function E0(){Em()}function Em(){Os=gu=!1;var t=0;Yn!==0&&_0()&&(t=Yn);for(var e=xe(),n=null,a=Bs;a!==null;){var r=a.next,u=Cm(a,e);u===0?(a.next=null,n===null?Bs=r:n.next=r,r===null&&(ua=n)):(n=a,(t!==0||(u&3)!==0)&&(Os=!0)),a=r}Wt!==0&&Wt!==5||rl(t),Yn!==0&&(Yn=0)}function Cm(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,r=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var d=31-je(u),y=1<<d,j=r[d];j===-1?((y&n)===0||(y&a)!==0)&&(r[d]=Iy(y,e)):j<=e&&(t.expiredLanes|=y),u&=~y}if(e=Vt,n=bt,n=Ll(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(Ct===2||Ct===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&No(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Ca(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&No(a),Ro(n)){case 2:case 8:n=ph;break;case 32:n=Ol;break;case 268435456:n=gh;break;default:n=Ol}return a=Dm.bind(null,t),n=Mo(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&No(a),t.callbackPriority=2,t.callbackNode=null,2}function Dm(t,e){if(Wt!==0&&Wt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Rs()&&t.callbackNode!==n)return null;var a=bt;return a=Ll(t,t===Vt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(um(t,a,e),Cm(t,xe()),t.callbackNode!=null&&t.callbackNode===n?Dm.bind(null,t):null)}function Mm(t,e){if(Rs())return null;um(t,e,!0)}function C0(){L0(function(){(Et&6)!==0?Mo(vh,E0):Em()})}function bu(){if(Yn===0){var t=Fi;t===0&&(t=kl,kl<<=1,(kl&261888)===0&&(kl=256)),Yn=t}return Yn}function Nm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Gl(""+t)}function zm(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function D0(t,e,n,a,r){if(e==="submit"&&n&&n.stateNode===r){var u=Nm((r[de]||null).action),d=a.submitter;d&&(e=(e=d[de]||null)?Nm(e.formAction):d.getAttribute("formAction"),e!==null&&(u=e,d=null));var y=new Kl("action","action",null,a,r);t.push({event:y,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Yn!==0){var j=d?zm(r,d):new FormData(r);Lr(n,{pending:!0,data:j,method:r.method,action:u},null,j)}}else typeof u=="function"&&(y.preventDefault(),j=d?zm(r,d):new FormData(r),Lr(n,{pending:!0,data:j,method:r.method,action:u},u,j))},currentTarget:r}]})}}for(var xu=0;xu<nr.length;xu++){var Su=nr[xu],M0=Su.toLowerCase(),N0=Su[0].toUpperCase()+Su.slice(1);Xe(M0,"on"+N0)}Xe(rf,"onAnimationEnd"),Xe(uf,"onAnimationIteration"),Xe(cf,"onAnimationStart"),Xe("dblclick","onDoubleClick"),Xe("focusin","onFocus"),Xe("focusout","onBlur"),Xe(Zb,"onTransitionRun"),Xe(Kb,"onTransitionStart"),Xe(Fb,"onTransitionCancel"),Xe(hf,"onTransitionEnd"),Bi("onMouseEnter",["mouseout","mouseover"]),Bi("onMouseLeave",["mouseout","mouseover"]),Bi("onPointerEnter",["pointerout","pointerover"]),Bi("onPointerLeave",["pointerout","pointerover"]),si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),si("onBeforeInput",["compositionend","keypress","textInput","paste"]),si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function Vm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],r=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var d=a.length-1;0<=d;d--){var y=a[d],j=y.instance,M=y.currentTarget;if(y=y.listener,j!==u&&r.isPropagationStopped())break t;u=y,r.currentTarget=M;try{u(r)}catch(k){Wl(k)}r.currentTarget=null,u=j}else for(d=0;d<a.length;d++){if(y=a[d],j=y.instance,M=y.currentTarget,y=y.listener,j!==u&&r.isPropagationStopped())break t;u=y,r.currentTarget=M;try{u(r)}catch(k){Wl(k)}r.currentTarget=null,u=j}}}}function gt(t,e){var n=e[Bo];n===void 0&&(n=e[Bo]=new Set);var a=t+"__bubble";n.has(a)||(Rm(e,t,2,!1),n.add(a))}function ju(t,e,n){var a=0;e&&(a|=4),Rm(n,t,a,e)}var ks="_reactListening"+Math.random().toString(36).slice(2);function Au(t){if(!t[ks]){t[ks]=!0,wh.forEach(function(n){n!=="selectionchange"&&(z0.has(n)||ju(n,!1,t),ju(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ks]||(e[ks]=!0,ju("selectionchange",!1,e))}}function Rm(t,e,n,a){switch(rv(e)){case 2:var r=lx;break;case 8:r=sx;break;default:r=Uu}n=r.bind(null,e,n,t),r=void 0,!Go||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),a?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tu(t,e,n,a,r){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var d=a.tag;if(d===3||d===4){var y=a.stateNode.containerInfo;if(y===r)break;if(d===4)for(d=a.return;d!==null;){var j=d.tag;if((j===3||j===4)&&d.stateNode.containerInfo===r)return;d=d.return}for(;y!==null;){if(d=zi(y),d===null)return;if(j=d.tag,j===5||j===6||j===26||j===27){a=u=d;continue t}y=y.parentNode}}a=a.return}_h(function(){var M=u,k=Ho(n),Y=[];t:{var V=ff.get(t);if(V!==void 0){var R=Kl,P=t;switch(t){case"keypress":if(Ql(n)===0)break t;case"keydown":case"keyup":R=Tb;break;case"focusin":P="focus",R=Ko;break;case"focusout":P="blur",R=Ko;break;case"beforeblur":case"afterblur":R=Ko;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=fb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=Cb;break;case rf:case uf:case cf:R=vb;break;case hf:R=Mb;break;case"scroll":case"scrollend":R=cb;break;case"wheel":R=zb;break;case"copy":case"cut":case"paste":R=gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Yh;break;case"toggle":case"beforetoggle":R=Rb}var lt=(e&4)!==0,zt=!lt&&(t==="scroll"||t==="scrollend"),E=lt?V!==null?V+"Capture":null:V;lt=[];for(var w=M,D;w!==null;){var L=w;if(D=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||D===null||E===null||(L=za(w,E),L!=null&&lt.push(cl(w,L,D))),zt)break;w=w.return}0<lt.length&&(V=new R(V,P,null,n,k),Y.push({event:V,listeners:lt}))}}if((e&7)===0){t:{if(V=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",V&&n!==qo&&(P=n.relatedTarget||n.fromElement)&&(zi(P)||P[Ni]))break t;if((R||V)&&(V=k.window===k?k:(V=k.ownerDocument)?V.defaultView||V.parentWindow:window,R?(P=n.relatedTarget||n.toElement,R=M,P=P?zi(P):null,P!==null&&(zt=f(P),lt=P.tag,P!==zt||lt!==5&&lt!==27&&lt!==6)&&(P=null)):(R=null,P=M),R!==P)){if(lt=qh,L="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(lt=Yh,L="onPointerLeave",E="onPointerEnter",w="pointer"),zt=R==null?V:Na(R),D=P==null?V:Na(P),V=new lt(L,w+"leave",R,n,k),V.target=zt,V.relatedTarget=D,L=null,zi(k)===M&&(lt=new lt(E,w+"enter",P,n,k),lt.target=D,lt.relatedTarget=zt,L=lt),zt=L,R&&P)e:{for(lt=V0,E=R,w=P,D=0,L=E;L;L=lt(L))D++;L=0;for(var it=w;it;it=lt(it))L++;for(;0<D-L;)E=lt(E),D--;for(;0<L-D;)w=lt(w),L--;for(;D--;){if(E===w||w!==null&&E===w.alternate){lt=E;break e}E=lt(E),w=lt(w)}lt=null}else lt=null;R!==null&&Bm(Y,V,R,lt,!1),P!==null&&zt!==null&&Bm(Y,zt,P,lt,!0)}}t:{if(V=M?Na(M):window,R=V.nodeName&&V.nodeName.toLowerCase(),R==="select"||R==="input"&&V.type==="file")var Tt=Wh;else if(Fh(V))if($h)Tt=Gb;else{Tt=Hb;var tt=qb}else R=V.nodeName,!R||R.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?M&&Lo(M.elementType)&&(Tt=Wh):Tt=Yb;if(Tt&&(Tt=Tt(t,M))){Jh(Y,Tt,n,k);break t}tt&&tt(t,V,M),t==="focusout"&&M&&V.type==="number"&&M.memoizedProps.value!=null&&Uo(V,"number",V.value)}switch(tt=M?Na(M):window,t){case"focusin":(Fh(tt)||tt.contentEditable==="true")&&(qi=tt,Io=M,La=null);break;case"focusout":La=Io=qi=null;break;case"mousedown":tr=!0;break;case"contextmenu":case"mouseup":case"dragend":tr=!1,sf(Y,n,k);break;case"selectionchange":if(Qb)break;case"keydown":case"keyup":sf(Y,n,k)}var ft;if(Jo)t:{switch(t){case"compositionstart":var xt="onCompositionStart";break t;case"compositionend":xt="onCompositionEnd";break t;case"compositionupdate":xt="onCompositionUpdate";break t}xt=void 0}else Li?Zh(t,n)&&(xt="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(xt="onCompositionStart");xt&&(Gh&&n.locale!=="ko"&&(Li||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Li&&(ft=Uh()):(En=k,Xo="value"in En?En.value:En.textContent,Li=!0)),tt=_s(M,xt),0<tt.length&&(xt=new Hh(xt,t,null,n,k),Y.push({event:xt,listeners:tt}),ft?xt.data=ft:(ft=Kh(n),ft!==null&&(xt.data=ft)))),(ft=Ob?kb(t,n):_b(t,n))&&(xt=_s(M,"onBeforeInput"),0<xt.length&&(tt=new Hh("onBeforeInput","beforeinput",null,n,k),Y.push({event:tt,listeners:xt}),tt.data=ft)),D0(Y,t,M,n,k)}Vm(Y,e)})}function cl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _s(t,e){for(var n=e+"Capture",a=[];t!==null;){var r=t,u=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||u===null||(r=za(t,n),r!=null&&a.unshift(cl(t,r,u)),r=za(t,e),r!=null&&a.push(cl(t,r,u))),t.tag===3)return a;t=t.return}return[]}function V0(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Bm(t,e,n,a,r){for(var u=e._reactName,d=[];n!==null&&n!==a;){var y=n,j=y.alternate,M=y.stateNode;if(y=y.tag,j!==null&&j===a)break;y!==5&&y!==26&&y!==27||M===null||(j=M,r?(M=za(n,u),M!=null&&d.unshift(cl(n,M,j))):r||(M=za(n,u),M!=null&&d.push(cl(n,M,j)))),n=n.return}d.length!==0&&t.push({event:e,listeners:d})}var R0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function Om(t){return(typeof t=="string"?t:""+t).replace(R0,`
`).replace(B0,"")}function km(t,e){return e=Om(e),Om(t)===e}function Nt(t,e,n,a,r,u){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ki(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ki(t,""+a);break;case"className":Hl(t,"class",a);break;case"tabIndex":Hl(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Hl(t,n,a);break;case"style":Oh(t,a,u);break;case"data":if(e!=="object"){Hl(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Gl(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&Nt(t,e,"name",r.name,r,null),Nt(t,e,"formEncType",r.formEncType,r,null),Nt(t,e,"formMethod",r.formMethod,r,null),Nt(t,e,"formTarget",r.formTarget,r,null)):(Nt(t,e,"encType",r.encType,r,null),Nt(t,e,"method",r.method,r,null),Nt(t,e,"target",r.target,r,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=Gl(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=sn);break;case"onScroll":a!=null&&gt("scroll",t);break;case"onScrollEnd":a!=null&&gt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=Gl(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":gt("beforetoggle",t),gt("toggle",t),ql(t,"popover",a);break;case"xlinkActuate":ln(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ln(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ln(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ln(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ln(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ln(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ln(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ln(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ln(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ql(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=rb.get(n)||n,ql(t,n,a))}}function wu(t,e,n,a,r,u){switch(n){case"style":Oh(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(n=a.__html,n!=null){if(r.children!=null)throw Error(s(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ki(t,a):(typeof a=="number"||typeof a=="bigint")&&ki(t,""+a);break;case"onScroll":a!=null&&gt("scroll",t);break;case"onScrollEnd":a!=null&&gt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=sn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eh.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),u=t[de]||null,u=u!=null?u[n]:null,typeof u=="function"&&t.removeEventListener(e,u,r),typeof a=="function")){typeof u!="function"&&u!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,r);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):ql(t,n,a)}}}function le(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",t),gt("load",t);var a=!1,r=!1,u;for(u in n)if(n.hasOwnProperty(u)){var d=n[u];if(d!=null)switch(u){case"src":a=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Nt(t,e,u,d,n,null)}}r&&Nt(t,e,"srcSet",n.srcSet,n,null),a&&Nt(t,e,"src",n.src,n,null);return;case"input":gt("invalid",t);var y=u=d=r=null,j=null,M=null;for(a in n)if(n.hasOwnProperty(a)){var k=n[a];if(k!=null)switch(a){case"name":r=k;break;case"type":d=k;break;case"checked":j=k;break;case"defaultChecked":M=k;break;case"value":u=k;break;case"defaultValue":y=k;break;case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,e));break;default:Nt(t,e,a,k,n,null)}}zh(t,u,y,j,M,d,r,!1);return;case"select":gt("invalid",t),a=d=u=null;for(r in n)if(n.hasOwnProperty(r)&&(y=n[r],y!=null))switch(r){case"value":u=y;break;case"defaultValue":d=y;break;case"multiple":a=y;default:Nt(t,e,r,y,n,null)}e=u,n=d,t.multiple=!!a,e!=null?Oi(t,!!a,e,!1):n!=null&&Oi(t,!!a,n,!0);return;case"textarea":gt("invalid",t),u=r=a=null;for(d in n)if(n.hasOwnProperty(d)&&(y=n[d],y!=null))switch(d){case"value":a=y;break;case"defaultValue":r=y;break;case"children":u=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:Nt(t,e,d,y,n,null)}Rh(t,a,r,u);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(a=n[j],a!=null))switch(j){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Nt(t,e,j,a,n,null)}return;case"dialog":gt("beforetoggle",t),gt("toggle",t),gt("cancel",t),gt("close",t);break;case"iframe":case"object":gt("load",t);break;case"video":case"audio":for(a=0;a<ul.length;a++)gt(ul[a],t);break;case"image":gt("error",t),gt("load",t);break;case"details":gt("toggle",t);break;case"embed":case"source":case"link":gt("error",t),gt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(M in n)if(n.hasOwnProperty(M)&&(a=n[M],a!=null))switch(M){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:Nt(t,e,M,a,n,null)}return;default:if(Lo(e)){for(k in n)n.hasOwnProperty(k)&&(a=n[k],a!==void 0&&wu(t,e,k,a,n,void 0));return}}for(y in n)n.hasOwnProperty(y)&&(a=n[y],a!=null&&Nt(t,e,y,a,n,null))}function O0(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,u=null,d=null,y=null,j=null,M=null,k=null;for(R in n){var Y=n[R];if(n.hasOwnProperty(R)&&Y!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":j=Y;default:a.hasOwnProperty(R)||Nt(t,e,R,null,a,Y)}}for(var V in a){var R=a[V];if(Y=n[V],a.hasOwnProperty(V)&&(R!=null||Y!=null))switch(V){case"type":u=R;break;case"name":r=R;break;case"checked":M=R;break;case"defaultChecked":k=R;break;case"value":d=R;break;case"defaultValue":y=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,e));break;default:R!==Y&&Nt(t,e,V,R,a,Y)}}_o(t,d,y,j,M,k,u,r);return;case"select":R=d=y=V=null;for(u in n)if(j=n[u],n.hasOwnProperty(u)&&j!=null)switch(u){case"value":break;case"multiple":R=j;default:a.hasOwnProperty(u)||Nt(t,e,u,null,a,j)}for(r in a)if(u=a[r],j=n[r],a.hasOwnProperty(r)&&(u!=null||j!=null))switch(r){case"value":V=u;break;case"defaultValue":y=u;break;case"multiple":d=u;default:u!==j&&Nt(t,e,r,u,a,j)}e=y,n=d,a=R,V!=null?Oi(t,!!n,V,!1):!!a!=!!n&&(e!=null?Oi(t,!!n,e,!0):Oi(t,!!n,n?[]:"",!1));return;case"textarea":R=V=null;for(y in n)if(r=n[y],n.hasOwnProperty(y)&&r!=null&&!a.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:Nt(t,e,y,null,a,r)}for(d in a)if(r=a[d],u=n[d],a.hasOwnProperty(d)&&(r!=null||u!=null))switch(d){case"value":V=r;break;case"defaultValue":R=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:r!==u&&Nt(t,e,d,r,a,u)}Vh(t,V,R);return;case"option":for(var P in n)if(V=n[P],n.hasOwnProperty(P)&&V!=null&&!a.hasOwnProperty(P))switch(P){case"selected":t.selected=!1;break;default:Nt(t,e,P,null,a,V)}for(j in a)if(V=a[j],R=n[j],a.hasOwnProperty(j)&&V!==R&&(V!=null||R!=null))switch(j){case"selected":t.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:Nt(t,e,j,V,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in n)V=n[lt],n.hasOwnProperty(lt)&&V!=null&&!a.hasOwnProperty(lt)&&Nt(t,e,lt,null,a,V);for(M in a)if(V=a[M],R=n[M],a.hasOwnProperty(M)&&V!==R&&(V!=null||R!=null))switch(M){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,e));break;default:Nt(t,e,M,V,a,R)}return;default:if(Lo(e)){for(var zt in n)V=n[zt],n.hasOwnProperty(zt)&&V!==void 0&&!a.hasOwnProperty(zt)&&wu(t,e,zt,void 0,a,V);for(k in a)V=a[k],R=n[k],!a.hasOwnProperty(k)||V===R||V===void 0&&R===void 0||wu(t,e,k,V,a,R);return}}for(var E in n)V=n[E],n.hasOwnProperty(E)&&V!=null&&!a.hasOwnProperty(E)&&Nt(t,e,E,null,a,V);for(Y in a)V=a[Y],R=n[Y],!a.hasOwnProperty(Y)||V===R||V==null&&R==null||Nt(t,e,Y,V,a,R)}function _m(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function k0(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var r=n[a],u=r.transferSize,d=r.initiatorType,y=r.duration;if(u&&y&&_m(d)){for(d=0,y=r.responseEnd,a+=1;a<n.length;a++){var j=n[a],M=j.startTime;if(M>y)break;var k=j.transferSize,Y=j.initiatorType;k&&_m(Y)&&(j=j.responseEnd,d+=k*(j<y?1:(y-M)/(j-M)))}if(--a,e+=8*(u+d)/(r.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Eu=null,Cu=null;function Us(t){return t.nodeType===9?t:t.ownerDocument}function Um(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lm(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Mu=null;function _0(){var t=window.event;return t&&t.type==="popstate"?t===Mu?!1:(Mu=t,!0):(Mu=null,!1)}var qm=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,L0=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(t){return Hm.resolve(null).then(t).catch(q0)}:qm;function q0(t){setTimeout(function(){throw t})}function Gn(t){return t==="head"}function Ym(t,e){var n=e,a=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(a===0){t.removeChild(r),da(e);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")hl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,hl(n);for(var u=n.firstChild;u;){var d=u.nextSibling,y=u.nodeName;u[Ma]||y==="SCRIPT"||y==="STYLE"||y==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=d}}else n==="body"&&hl(t.ownerDocument.body);n=r}while(n);da(e)}function Gm(t,e){var n=t;t=0;do{var a=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=a}while(n)}function Nu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Nu(n),Oo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function H0(t,e,n,a){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ma])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=qe(t.nextSibling),t===null)break}return null}function Y0(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=qe(t.nextSibling),t===null))return null;return t}function Xm(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=qe(t.nextSibling),t===null))return null;return t}function zu(t){return t.data==="$?"||t.data==="$~"}function Vu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function G0(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function qe(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Ru=null;function Qm(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return qe(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function Zm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function Km(t,e,n){switch(e=Us(n),t){case"html":if(t=e.documentElement,!t)throw Error(s(452));return t;case"head":if(t=e.head,!t)throw Error(s(453));return t;case"body":if(t=e.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function hl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Oo(t)}var He=new Map,Fm=new Set;function Ls(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var jn=X.d;X.d={f:X0,r:Q0,D:Z0,C:K0,L:F0,m:J0,X:$0,S:W0,M:P0};function X0(){var t=jn.f(),e=Ns();return t||e}function Q0(t){var e=Vi(t);e!==null&&e.tag===5&&e.type==="form"?hd(e):jn.r(t)}var ca=typeof document>"u"?null:document;function Jm(t,e,n){var a=ca;if(a&&typeof e=="string"&&e){var r=Re(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),Fm.has(r)||(Fm.add(r),t={rel:t,crossOrigin:n,href:e},a.querySelector(r)===null&&(e=a.createElement("link"),le(e,"link",t),Pt(e),a.head.appendChild(e)))}}function Z0(t){jn.D(t),Jm("dns-prefetch",t,null)}function K0(t,e){jn.C(t,e),Jm("preconnect",t,e)}function F0(t,e,n){jn.L(t,e,n);var a=ca;if(a&&t&&e){var r='link[rel="preload"][as="'+Re(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Re(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Re(n.imageSizes)+'"]')):r+='[href="'+Re(t)+'"]';var u=r;switch(e){case"style":u=ha(t);break;case"script":u=fa(t)}He.has(u)||(t=x({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),He.set(u,t),a.querySelector(r)!==null||e==="style"&&a.querySelector(fl(u))||e==="script"&&a.querySelector(dl(u))||(e=a.createElement("link"),le(e,"link",t),Pt(e),a.head.appendChild(e)))}}function J0(t,e){jn.m(t,e);var n=ca;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Re(a)+'"][href="'+Re(t)+'"]',u=r;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=fa(t)}if(!He.has(u)&&(t=x({rel:"modulepreload",href:t},e),He.set(u,t),n.querySelector(r)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(dl(u)))return}a=n.createElement("link"),le(a,"link",t),Pt(a),n.head.appendChild(a)}}}function W0(t,e,n){jn.S(t,e,n);var a=ca;if(a&&t){var r=Ri(a).hoistableStyles,u=ha(t);e=e||"default";var d=r.get(u);if(!d){var y={loading:0,preload:null};if(d=a.querySelector(fl(u)))y.loading=5;else{t=x({rel:"stylesheet",href:t,"data-precedence":e},n),(n=He.get(u))&&Bu(t,n);var j=d=a.createElement("link");Pt(j),le(j,"link",t),j._p=new Promise(function(M,k){j.onload=M,j.onerror=k}),j.addEventListener("load",function(){y.loading|=1}),j.addEventListener("error",function(){y.loading|=2}),y.loading|=4,qs(d,e,a)}d={type:"stylesheet",instance:d,count:1,state:y},r.set(u,d)}}}function $0(t,e){jn.X(t,e);var n=ca;if(n&&t){var a=Ri(n).hoistableScripts,r=fa(t),u=a.get(r);u||(u=n.querySelector(dl(r)),u||(t=x({src:t,async:!0},e),(e=He.get(r))&&Ou(t,e),u=n.createElement("script"),Pt(u),le(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function P0(t,e){jn.M(t,e);var n=ca;if(n&&t){var a=Ri(n).hoistableScripts,r=fa(t),u=a.get(r);u||(u=n.querySelector(dl(r)),u||(t=x({src:t,async:!0,type:"module"},e),(e=He.get(r))&&Ou(t,e),u=n.createElement("script"),Pt(u),le(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(r,u))}}function Wm(t,e,n,a){var r=(r=ct.current)?Ls(r):null;if(!r)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=ha(n.href),n=Ri(r).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=ha(n.href);var u=Ri(r).hoistableStyles,d=u.get(t);if(d||(r=r.ownerDocument||r,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,d),(u=r.querySelector(fl(t)))&&!u._p&&(d.instance=u,d.state.loading=5),He.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},He.set(t,n),u||I0(r,t,n,d.state))),e&&a===null)throw Error(s(528,""));return d}if(e&&a!==null)throw Error(s(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=fa(n),n=Ri(r).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ha(t){return'href="'+Re(t)+'"'}function fl(t){return'link[rel="stylesheet"]['+t+"]"}function $m(t){return x({},t,{"data-precedence":t.precedence,precedence:null})}function I0(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),le(e,"link",n),Pt(e),t.head.appendChild(e))}function fa(t){return'[src="'+Re(t)+'"]'}function dl(t){return"script[async]"+t}function Pm(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+Re(n.href)+'"]');if(a)return e.instance=a,Pt(a),a;var r=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Pt(a),le(a,"style",r),qs(a,n.precedence,t),e.instance=a;case"stylesheet":r=ha(n.href);var u=t.querySelector(fl(r));if(u)return e.state.loading|=4,e.instance=u,Pt(u),u;a=$m(n),(r=He.get(r))&&Bu(a,r),u=(t.ownerDocument||t).createElement("link"),Pt(u);var d=u;return d._p=new Promise(function(y,j){d.onload=y,d.onerror=j}),le(u,"link",a),e.state.loading|=4,qs(u,n.precedence,t),e.instance=u;case"script":return u=fa(n.src),(r=t.querySelector(dl(u)))?(e.instance=r,Pt(r),r):(a=n,(r=He.get(u))&&(a=x({},n),Ou(a,r)),t=t.ownerDocument||t,r=t.createElement("script"),Pt(r),le(r,"link",a),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,qs(a,n.precedence,t));return e.instance}function qs(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=a.length?a[a.length-1]:null,u=r,d=0;d<a.length;d++){var y=a[d];if(y.dataset.precedence===e)u=y;else if(u!==r)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Bu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Ou(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Hs=null;function Im(t,e,n){if(Hs===null){var a=new Map,r=Hs=new Map;r.set(n,a)}else r=Hs,a=r.get(n),a||(a=new Map,r.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var u=n[r];if(!(u[Ma]||u[ee]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var d=u.getAttribute(e)||"";d=t+d;var y=a.get(d);y?y.push(u):a.set(d,[u])}}return a}function tv(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function tx(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function ev(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function ex(t,e,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=ha(a.href),u=e.querySelector(fl(r));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Ys.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,Pt(u);return}u=e.ownerDocument||e,a=$m(a),(r=He.get(r))&&Bu(a,r),u=u.createElement("link"),Pt(u);var d=u;d._p=new Promise(function(y,j){d.onload=y,d.onerror=j}),le(u,"link",a),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Ys.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var ku=0;function nx(t,e){return t.stylesheets&&t.count===0&&Xs(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var a=setTimeout(function(){if(t.stylesheets&&Xs(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&ku===0&&(ku=62500*k0());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xs(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>ku?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(r)}}:null}function Ys(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xs(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Gs=null;function Xs(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Gs=new Map,e.forEach(ix,t),Gs=null,Ys.call(t))}function ix(t,e){if(!(e.state.loading&4)){var n=Gs.get(t);if(n)var a=n.get(null);else{n=new Map,Gs.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<r.length;u++){var d=r[u];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),a=d)}a&&n.set(null,a)}r=e.instance,d=r.getAttribute("data-precedence"),u=n.get(d)||a,u===a&&n.set(null,r),n.set(d,r),this.count++,a=Ys.bind(this),r.addEventListener("load",a),r.addEventListener("error",a),u?u.parentNode.insertBefore(r,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var ml={$$typeof:_,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function ax(t,e,n,a,r,u,d,y,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=zo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.hiddenUpdates=zo(null),this.identifierPrefix=a,this.onUncaughtError=r,this.onCaughtError=u,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function nv(t,e,n,a,r,u,d,y,j,M,k,Y){return t=new ax(t,e,n,d,j,M,k,Y,y),e=1,u===!0&&(e|=24),u=Te(3,null,null,e),t.current=u,u.stateNode=t,e=vr(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:n,cache:e},br(u),t}function iv(t){return t?(t=Gi,t):Gi}function av(t,e,n,a,r,u){r=iv(r),a.context===null?a.context=r:a.pendingContext=r,a=Vn(e),a.payload={element:n},u=u===void 0?null:u,u!==null&&(a.callback=u),n=Rn(t,a,e),n!==null&&(be(n,t,e),Za(n,t,e))}function lv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _u(t,e){lv(t,e),(t=t.alternate)&&lv(t,e)}function sv(t){if(t.tag===13||t.tag===31){var e=ci(t,67108864);e!==null&&be(e,t,67108864),_u(t,67108864)}}function ov(t){if(t.tag===13||t.tag===31){var e=Me();e=Vo(e);var n=ci(t,e);n!==null&&be(n,t,e),_u(t,e)}}var Qs=!0;function lx(t,e,n,a){var r=N.T;N.T=null;var u=X.p;try{X.p=2,Uu(t,e,n,a)}finally{X.p=u,N.T=r}}function sx(t,e,n,a){var r=N.T;N.T=null;var u=X.p;try{X.p=8,Uu(t,e,n,a)}finally{X.p=u,N.T=r}}function Uu(t,e,n,a){if(Qs){var r=Lu(a);if(r===null)Tu(t,e,a,Zs,n),uv(t,a);else if(rx(r,t,e,n,a))a.stopPropagation();else if(uv(t,a),e&4&&-1<ox.indexOf(t)){for(;r!==null;){var u=Vi(r);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var d=li(u.pendingLanes);if(d!==0){var y=u;for(y.pendingLanes|=2,y.entangledLanes|=2;d;){var j=1<<31-je(d);y.entanglements[1]|=j,d&=~j}Ie(u),(Et&6)===0&&(Ds=xe()+500,rl(0))}}break;case 31:case 13:y=ci(u,2),y!==null&&be(y,u,2),Ns(),_u(u,2)}if(u=Lu(a),u===null&&Tu(t,e,a,Zs,n),u===r)break;r=u}r!==null&&a.stopPropagation()}else Tu(t,e,a,null,n)}}function Lu(t){return t=Ho(t),qu(t)}var Zs=null;function qu(t){if(Zs=null,t=zi(t),t!==null){var e=f(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=h(e),t!==null)return t;t=null}else if(n===31){if(t=m(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Zs=t,null}function rv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zy()){case vh:return 2;case ph:return 8;case Ol:case Ky:return 32;case gh:return 268435456;default:return 32}default:return 32}}var Hu=!1,Xn=null,Qn=null,Zn=null,vl=new Map,pl=new Map,Kn=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uv(t,e){switch(t){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Qn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":vl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pl.delete(e.pointerId)}}function gl(t,e,n,a,r,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:u,targetContainers:[r]},e!==null&&(e=Vi(e),e!==null&&sv(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function rx(t,e,n,a,r){switch(e){case"focusin":return Xn=gl(Xn,t,e,n,a,r),!0;case"dragenter":return Qn=gl(Qn,t,e,n,a,r),!0;case"mouseover":return Zn=gl(Zn,t,e,n,a,r),!0;case"pointerover":var u=r.pointerId;return vl.set(u,gl(vl.get(u)||null,t,e,n,a,r)),!0;case"gotpointercapture":return u=r.pointerId,pl.set(u,gl(pl.get(u)||null,t,e,n,a,r)),!0}return!1}function cv(t){var e=zi(t.target);if(e!==null){var n=f(e);if(n!==null){if(e=n.tag,e===13){if(e=h(n),e!==null){t.blockedOn=e,Ah(t.priority,function(){ov(n)});return}}else if(e===31){if(e=m(n),e!==null){t.blockedOn=e,Ah(t.priority,function(){ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ks(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lu(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);qo=a,n.target.dispatchEvent(a),qo=null}else return e=Vi(n),e!==null&&sv(e),t.blockedOn=n,!1;e.shift()}return!0}function hv(t,e,n){Ks(t)&&n.delete(e)}function ux(){Hu=!1,Xn!==null&&Ks(Xn)&&(Xn=null),Qn!==null&&Ks(Qn)&&(Qn=null),Zn!==null&&Ks(Zn)&&(Zn=null),vl.forEach(hv),pl.forEach(hv)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,Hu||(Hu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,ux)))}var Js=null;function fv(t){Js!==t&&(Js=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Js===t&&(Js=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],r=t[e+2];if(typeof a!="function"){if(qu(a||n)===null)continue;break}var u=Vi(n);u!==null&&(t.splice(e,3),e-=3,Lr(u,{pending:!0,data:r,method:n.method,action:a},a,r))}}))}function da(t){function e(j){return Fs(j,t)}Xn!==null&&Fs(Xn,t),Qn!==null&&Fs(Qn,t),Zn!==null&&Fs(Zn,t),vl.forEach(e),pl.forEach(e);for(var n=0;n<Kn.length;n++){var a=Kn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)cv(n),n.blockedOn===null&&Kn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var r=n[a],u=n[a+1],d=r[de]||null;if(typeof u=="function")d||fv(n);else if(d){var y=null;if(u&&u.hasAttribute("formAction")){if(r=u,d=u[de]||null)y=d.formAction;else if(qu(r)!==null)continue}else y=d.action;typeof y=="function"?n[a+1]=y:(n.splice(a,3),a-=3),fv(n)}}}function dv(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(d){return r=d})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function Yu(t){this._internalRoot=t}Ws.prototype.render=Yu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(s(409));var n=e.current,a=Me();av(n,a,t,e,null,null)},Ws.prototype.unmount=Yu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;av(t.current,2,null,t,null,null),Ns(),e[Ni]=null}};function Ws(t){this._internalRoot=t}Ws.prototype.unstable_scheduleHydration=function(t){if(t){var e=jh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&cv(t)}};var mv=l.version;if(mv!=="19.2.6")throw Error(s(527,mv,"19.2.6"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=v(e),t=t!==null?b(t):null,t=t===null?null:t.stateNode,t};var cx={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{Ea=$s.inject(cx),Se=$s}catch{}}return bl.createRoot=function(t,e){if(!c(t))throw Error(s(299));var n=!1,a="",r=Sd,u=jd,d=Ad;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(d=e.onRecoverableError)),e=nv(t,1,!1,null,null,n,a,null,r,u,d,dv),t[Ni]=e.current,Au(t),new Yu(e)},bl.hydrateRoot=function(t,e,n){if(!c(t))throw Error(s(299));var a=!1,r="",u=Sd,d=jd,y=Ad,j=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),e=nv(t,1,!0,e,n??null,a,r,j,u,d,y,dv),e.context=iv(null),n=e.current,a=Me(),a=Vo(a),r=Vn(a),r.callback=null,Rn(n,r,a),n=a,e.current.lanes=n,Da(e,n),Ie(e),t[Ni]=e.current,Au(t),new Ws(e)},bl.version="19.2.6",bl}var Tv;function xx(){if(Tv)return Qu.exports;Tv=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(l){console.error(l)}}return i(),Qu.exports=bx(),Qu.exports}var Sx=xx();const qc=G.createContext({});function Hc(i){const l=G.useRef(null);return l.current===null&&(l.current=i()),l.current}const jx=typeof window<"u",Pp=jx?G.useLayoutEffect:G.useEffect,jo=G.createContext(null);function Yc(i,l){i.indexOf(l)===-1&&i.push(l)}function ho(i,l){const o=i.indexOf(l);o>-1&&i.splice(o,1)}const an=(i,l,o)=>o>l?l:o<i?i:o;let Gc=()=>{};const ti={},Ip=i=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i),tg=i=>typeof i=="object"&&i!==null,eg=i=>/^0[^.\s]+$/u.test(i);function ng(i){let l;return()=>(l===void 0&&(l=i()),l)}const Ge=i=>i,zl=(...i)=>i.reduce((l,o)=>s=>o(l(s))),Cl=(i,l,o)=>{const s=l-i;return s?(o-i)/s:1};class Xc{constructor(){this.subscriptions=[]}add(l){return Yc(this.subscriptions,l),()=>ho(this.subscriptions,l)}notify(l,o,s){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](l,o,s);else for(let f=0;f<c;f++){const h=this.subscriptions[f];h&&h(l,o,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ne=i=>i*1e3,Ye=i=>i/1e3,ig=(i,l)=>l?i*(1e3/l):0,ag=(i,l,o)=>(((1-3*o+3*l)*i+(3*o-6*l))*i+3*l)*i,Ax=1e-7,Tx=12;function wx(i,l,o,s,c){let f,h,m=0;do h=l+(o-l)/2,f=ag(h,s,c)-i,f>0?o=h:l=h;while(Math.abs(f)>Ax&&++m<Tx);return h}function Vl(i,l,o,s){if(i===l&&o===s)return Ge;const c=f=>wx(f,0,1,i,o);return f=>f===0||f===1?f:ag(c(f),l,s)}const lg=i=>l=>l<=.5?i(2*l)/2:(2-i(2*(1-l)))/2,sg=i=>l=>1-i(1-l),og=Vl(.33,1.53,.69,.99),Qc=sg(og),rg=lg(Qc),ug=i=>i>=1?1:(i*=2)<1?.5*Qc(i):.5*(2-Math.pow(2,-10*(i-1))),Zc=i=>1-Math.sin(Math.acos(i)),cg=sg(Zc),hg=lg(Zc),Ex=Vl(.42,0,1,1),Cx=Vl(0,0,.58,1),fg=Vl(.42,0,.58,1),Dx=i=>Array.isArray(i)&&typeof i[0]!="number",dg=i=>Array.isArray(i)&&typeof i[0]=="number",Mx={linear:Ge,easeIn:Ex,easeInOut:fg,easeOut:Cx,circIn:Zc,circInOut:hg,circOut:cg,backIn:Qc,backInOut:rg,backOut:og,anticipate:ug},Nx=i=>typeof i=="string",wv=i=>{if(dg(i)){Gc(i.length===4);const[l,o,s,c]=i;return Vl(l,o,s,c)}else if(Nx(i))return Mx[i];return i},Ps=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function zx(i,l){let o=new Set,s=new Set,c=!1,f=!1;const h=new WeakSet;let m={delta:0,timestamp:0,isProcessing:!1};function p(b){h.has(b)&&(v.schedule(b),i()),b(m)}const v={schedule:(b,x=!1,S=!1)=>{const C=S&&c?o:s;return x&&h.add(b),C.add(b),b},cancel:b=>{s.delete(b),h.delete(b)},process:b=>{if(m=b,c){f=!0;return}c=!0;const x=o;o=s,s=x,o.forEach(p),o.clear(),c=!1,f&&(f=!1,v.process(b))}};return v}const Vx=40;function mg(i,l){let o=!1,s=!0;const c={delta:0,timestamp:0,isProcessing:!1},f=()=>o=!0,h=Ps.reduce((_,U)=>(_[U]=zx(f),_),{}),{setup:m,read:p,resolveKeyframes:v,preUpdate:b,update:x,preRender:S,render:A,postRender:C}=h,B=()=>{const _=ti.useManualTiming,U=_?c.timestamp:performance.now();o=!1,_||(c.delta=s?1e3/60:Math.max(Math.min(U-c.timestamp,Vx),1)),c.timestamp=U,c.isProcessing=!0,m.process(c),p.process(c),v.process(c),b.process(c),x.process(c),S.process(c),A.process(c),C.process(c),c.isProcessing=!1,o&&l&&(s=!1,i(B))},O=()=>{o=!0,s=!0,c.isProcessing||i(B)};return{schedule:Ps.reduce((_,U)=>{const Q=h[U];return _[U]=(at,K=!1,J=!1)=>(o||O(),Q.schedule(at,K,J)),_},{}),cancel:_=>{for(let U=0;U<Ps.length;U++)h[Ps[U]].cancel(_)},state:c,steps:h}}const{schedule:Bt,cancel:ei,state:se,steps:Ju}=mg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ge,!0);let io;function Rx(){io=void 0}const ce={now:()=>(io===void 0&&ce.set(se.isProcessing||ti.useManualTiming?se.timestamp:performance.now()),io),set:i=>{io=i,queueMicrotask(Rx)}},vg=i=>l=>typeof l=="string"&&l.startsWith(i),pg=vg("--"),Bx=vg("var(--"),Kc=i=>Bx(i)?Ox.test(i.split("/*")[0].trim()):!1,Ox=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Ev(i){return typeof i!="string"?!1:i.split("/*")[0].includes("var(--")}const Sa={test:i=>typeof i=="number",parse:parseFloat,transform:i=>i},Dl={...Sa,transform:i=>an(0,1,i)},Is={...Sa,default:1},Al=i=>Math.round(i*1e5)/1e5,Fc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function kx(i){return i==null}const _x=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Jc=(i,l)=>o=>!!(typeof o=="string"&&_x.test(o)&&o.startsWith(i)||l&&!kx(o)&&Object.prototype.hasOwnProperty.call(o,l)),gg=(i,l,o)=>s=>{if(typeof s!="string")return s;const[c,f,h,m]=s.match(Fc);return{[i]:parseFloat(c),[l]:parseFloat(f),[o]:parseFloat(h),alpha:m!==void 0?parseFloat(m):1}},Ux=i=>an(0,255,i),Wu={...Sa,transform:i=>Math.round(Ux(i))},wi={test:Jc("rgb","red"),parse:gg("red","green","blue"),transform:({red:i,green:l,blue:o,alpha:s=1})=>"rgba("+Wu.transform(i)+", "+Wu.transform(l)+", "+Wu.transform(o)+", "+Al(Dl.transform(s))+")"};function Lx(i){let l="",o="",s="",c="";return i.length>5?(l=i.substring(1,3),o=i.substring(3,5),s=i.substring(5,7),c=i.substring(7,9)):(l=i.substring(1,2),o=i.substring(2,3),s=i.substring(3,4),c=i.substring(4,5),l+=l,o+=o,s+=s,c+=c),{red:parseInt(l,16),green:parseInt(o,16),blue:parseInt(s,16),alpha:c?parseInt(c,16)/255:1}}const fc={test:Jc("#"),parse:Lx,transform:wi.transform},Rl=i=>({test:l=>typeof l=="string"&&l.endsWith(i)&&l.split(" ").length===1,parse:parseFloat,transform:l=>`${l}${i}`}),An=Rl("deg"),nn=Rl("%"),I=Rl("px"),qx=Rl("vh"),Hx=Rl("vw"),Cv={...nn,parse:i=>nn.parse(i)/100,transform:i=>nn.transform(i*100)},va={test:Jc("hsl","hue"),parse:gg("hue","saturation","lightness"),transform:({hue:i,saturation:l,lightness:o,alpha:s=1})=>"hsla("+Math.round(i)+", "+nn.transform(Al(l))+", "+nn.transform(Al(o))+", "+Al(Dl.transform(s))+")"},Jt={test:i=>wi.test(i)||fc.test(i)||va.test(i),parse:i=>wi.test(i)?wi.parse(i):va.test(i)?va.parse(i):fc.parse(i),transform:i=>typeof i=="string"?i:i.hasOwnProperty("red")?wi.transform(i):va.transform(i),getAnimatableNone:i=>{const l=Jt.parse(i);return l.alpha=0,Jt.transform(l)}},Yx=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Gx(i){var l,o;return isNaN(i)&&typeof i=="string"&&(((l=i.match(Fc))==null?void 0:l.length)||0)+(((o=i.match(Yx))==null?void 0:o.length)||0)>0}const yg="number",bg="color",Xx="var",Qx="var(",Dv="${}",Zx=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ya(i){const l=i.toString(),o=[],s={color:[],number:[],var:[]},c=[];let f=0;const m=l.replace(Zx,p=>(Jt.test(p)?(s.color.push(f),c.push(bg),o.push(Jt.parse(p))):p.startsWith(Qx)?(s.var.push(f),c.push(Xx),o.push(p)):(s.number.push(f),c.push(yg),o.push(parseFloat(p))),++f,Dv)).split(Dv);return{values:o,split:m,indexes:s,types:c}}function Kx(i){return ya(i).values}function xg({split:i,types:l}){const o=i.length;return s=>{let c="";for(let f=0;f<o;f++)if(c+=i[f],s[f]!==void 0){const h=l[f];h===yg?c+=Al(s[f]):h===bg?c+=Jt.transform(s[f]):c+=s[f]}return c}}function Fx(i){return xg(ya(i))}const Jx=i=>typeof i=="number"?0:Jt.test(i)?Jt.getAnimatableNone(i):i,Wx=(i,l)=>typeof i=="number"?l!=null&&l.trim().endsWith("/")?i:0:Jx(i);function $x(i){const l=ya(i);return xg(l)(l.values.map((s,c)=>Wx(s,l.split[c])))}const Je={test:Gx,parse:Kx,createTransformer:Fx,getAnimatableNone:$x};function $u(i,l,o){return o<0&&(o+=1),o>1&&(o-=1),o<1/6?i+(l-i)*6*o:o<1/2?l:o<2/3?i+(l-i)*(2/3-o)*6:i}function Px({hue:i,saturation:l,lightness:o,alpha:s}){i/=360,l/=100,o/=100;let c=0,f=0,h=0;if(!l)c=f=h=o;else{const m=o<.5?o*(1+l):o+l-o*l,p=2*o-m;c=$u(p,m,i+1/3),f=$u(p,m,i),h=$u(p,m,i-1/3)}return{red:Math.round(c*255),green:Math.round(f*255),blue:Math.round(h*255),alpha:s}}function fo(i,l){return o=>o>0?l:i}const Rt=(i,l,o)=>i+(l-i)*o,Pu=(i,l,o)=>{const s=i*i,c=o*(l*l-s)+s;return c<0?0:Math.sqrt(c)},Ix=[fc,wi,va],t1=i=>Ix.find(l=>l.test(i));function Mv(i){const l=t1(i);if(!l)return!1;let o=l.parse(i);return l===va&&(o=Px(o)),o}const Nv=(i,l)=>{const o=Mv(i),s=Mv(l);if(!o||!s)return fo(i,l);const c={...o};return f=>(c.red=Pu(o.red,s.red,f),c.green=Pu(o.green,s.green,f),c.blue=Pu(o.blue,s.blue,f),c.alpha=Rt(o.alpha,s.alpha,f),wi.transform(c))},dc=new Set(["none","hidden"]);function e1(i,l){return dc.has(i)?o=>o<=0?i:l:o=>o>=1?l:i}function n1(i,l){return o=>Rt(i,l,o)}function Wc(i){return typeof i=="number"?n1:typeof i=="string"?Kc(i)?fo:Jt.test(i)?Nv:l1:Array.isArray(i)?Sg:typeof i=="object"?Jt.test(i)?Nv:i1:fo}function Sg(i,l){const o=[...i],s=o.length,c=i.map((f,h)=>Wc(f)(f,l[h]));return f=>{for(let h=0;h<s;h++)o[h]=c[h](f);return o}}function i1(i,l){const o={...i,...l},s={};for(const c in o)i[c]!==void 0&&l[c]!==void 0&&(s[c]=Wc(i[c])(i[c],l[c]));return c=>{for(const f in s)o[f]=s[f](c);return o}}function a1(i,l){const o=[],s={color:0,var:0,number:0};for(let c=0;c<l.values.length;c++){const f=l.types[c],h=i.indexes[f][s[f]],m=i.values[h]??0;o[c]=m,s[f]++}return o}const l1=(i,l)=>{const o=Je.createTransformer(l),s=ya(i),c=ya(l);return s.indexes.var.length===c.indexes.var.length&&s.indexes.color.length===c.indexes.color.length&&s.indexes.number.length>=c.indexes.number.length?dc.has(i)&&!c.values.length||dc.has(l)&&!s.values.length?e1(i,l):zl(Sg(a1(s,c),c.values),o):fo(i,l)};function jg(i,l,o){return typeof i=="number"&&typeof l=="number"&&typeof o=="number"?Rt(i,l,o):Wc(i)(i,l)}const s1=i=>{const l=({timestamp:o})=>i(o);return{start:(o=!0)=>Bt.update(l,o),stop:()=>ei(l),now:()=>se.isProcessing?se.timestamp:ce.now()}},Ag=(i,l,o=10)=>{let s="";const c=Math.max(Math.round(l/o),2);for(let f=0;f<c;f++)s+=Math.round(i(f/(c-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},mo=2e4;function $c(i){let l=0;const o=50;let s=i.next(l);for(;!s.done&&l<mo;)l+=o,s=i.next(l);return l>=mo?1/0:l}function o1(i,l=100,o){const s=o({...i,keyframes:[0,l]}),c=Math.min($c(s),mo);return{type:"keyframes",ease:f=>s.next(c*f).value/l,duration:Ye(c)}}const Ht={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function mc(i,l){return i*Math.sqrt(1-l*l)}const r1=12;function u1(i,l,o){let s=o;for(let c=1;c<r1;c++)s=s-i(s)/l(s);return s}const Iu=.001;function c1({duration:i=Ht.duration,bounce:l=Ht.bounce,velocity:o=Ht.velocity,mass:s=Ht.mass}){let c,f,h=1-l;h=an(Ht.minDamping,Ht.maxDamping,h),i=an(Ht.minDuration,Ht.maxDuration,Ye(i)),h<1?(c=v=>{const b=v*h,x=b*i,S=b-o,A=mc(v,h),C=Math.exp(-x);return Iu-S/A*C},f=v=>{const x=v*h*i,S=x*o+o,A=Math.pow(h,2)*Math.pow(v,2)*i,C=Math.exp(-x),B=mc(Math.pow(v,2),h);return(-c(v)+Iu>0?-1:1)*((S-A)*C)/B}):(c=v=>{const b=Math.exp(-v*i),x=(v-o)*i+1;return-Iu+b*x},f=v=>{const b=Math.exp(-v*i),x=(o-v)*(i*i);return b*x});const m=5/i,p=u1(c,f,m);if(i=Ne(i),isNaN(p))return{stiffness:Ht.stiffness,damping:Ht.damping,duration:i};{const v=Math.pow(p,2)*s;return{stiffness:v,damping:h*2*Math.sqrt(s*v),duration:i}}}const h1=["duration","bounce"],f1=["stiffness","damping","mass"];function zv(i,l){return l.some(o=>i[o]!==void 0)}function d1(i){let l={velocity:Ht.velocity,stiffness:Ht.stiffness,damping:Ht.damping,mass:Ht.mass,isResolvedFromDuration:!1,...i};if(!zv(i,f1)&&zv(i,h1))if(l.velocity=0,i.visualDuration){const o=i.visualDuration,s=2*Math.PI/(o*1.2),c=s*s,f=2*an(.05,1,1-(i.bounce||0))*Math.sqrt(c);l={...l,mass:Ht.mass,stiffness:c,damping:f}}else{const o=c1({...i,velocity:0});l={...l,...o,mass:Ht.mass},l.isResolvedFromDuration=!0}return l}function vo(i=Ht.visualDuration,l=Ht.bounce){const o=typeof i!="object"?{visualDuration:i,keyframes:[0,1],bounce:l}:i;let{restSpeed:s,restDelta:c}=o;const f=o.keyframes[0],h=o.keyframes[o.keyframes.length-1],m={done:!1,value:f},{stiffness:p,damping:v,mass:b,duration:x,velocity:S,isResolvedFromDuration:A}=d1({...o,velocity:-Ye(o.velocity||0)}),C=S||0,B=v/(2*Math.sqrt(p*b)),O=h-f,z=Ye(Math.sqrt(p/b)),q=Math.abs(O)<5;s||(s=q?Ht.restSpeed.granular:Ht.restSpeed.default),c||(c=q?Ht.restDelta.granular:Ht.restDelta.default);let _,U,Q,at,K,J;if(B<1)Q=mc(z,B),at=(C+B*z*O)/Q,_=et=>{const dt=Math.exp(-B*z*et);return h-dt*(at*Math.sin(Q*et)+O*Math.cos(Q*et))},K=B*z*at+O*Q,J=B*z*O-at*Q,U=et=>Math.exp(-B*z*et)*(K*Math.sin(Q*et)+J*Math.cos(Q*et));else if(B===1){_=dt=>h-Math.exp(-z*dt)*(O+(C+z*O)*dt);const et=C+z*O;U=dt=>Math.exp(-z*dt)*(z*et*dt-C)}else{const et=z*Math.sqrt(B*B-1);_=yt=>{const vt=Math.exp(-B*z*yt),N=Math.min(et*yt,300);return h-vt*((C+B*z*O)*Math.sinh(N)+et*O*Math.cosh(N))/et};const dt=(C+B*z*O)/et,$=B*z*dt-O*et,St=B*z*O-dt*et;U=yt=>{const vt=Math.exp(-B*z*yt),N=Math.min(et*yt,300);return vt*($*Math.sinh(N)+St*Math.cosh(N))}}const nt={calculatedDuration:A&&x||null,velocity:et=>Ne(U(et)),next:et=>{if(!A&&B<1){const $=Math.exp(-B*z*et),St=Math.sin(Q*et),yt=Math.cos(Q*et),vt=h-$*(at*St+O*yt),N=Ne($*(K*St+J*yt));return m.done=Math.abs(N)<=s&&Math.abs(h-vt)<=c,m.value=m.done?h:vt,m}const dt=_(et);if(A)m.done=et>=x;else{const $=Ne(U(et));m.done=Math.abs($)<=s&&Math.abs(h-dt)<=c}return m.value=m.done?h:dt,m},toString:()=>{const et=Math.min($c(nt),mo),dt=Ag($=>nt.next(et*$).value,et,30);return et+"ms "+dt},toTransition:()=>{}};return nt}vo.applyToOptions=i=>{const l=o1(i,100,vo);return i.ease=l.ease,i.duration=Ne(l.duration),i.type="keyframes",i};const m1=5;function Tg(i,l,o){const s=Math.max(l-m1,0);return ig(o-i(s),l-s)}function vc({keyframes:i,velocity:l=0,power:o=.8,timeConstant:s=325,bounceDamping:c=10,bounceStiffness:f=500,modifyTarget:h,min:m,max:p,restDelta:v=.5,restSpeed:b}){const x=i[0],S={done:!1,value:x},A=J=>m!==void 0&&J<m||p!==void 0&&J>p,C=J=>m===void 0?p:p===void 0||Math.abs(m-J)<Math.abs(p-J)?m:p;let B=o*l;const O=x+B,z=h===void 0?O:h(O);z!==O&&(B=z-x);const q=J=>-B*Math.exp(-J/s),_=J=>z+q(J),U=J=>{const nt=q(J),et=_(J);S.done=Math.abs(nt)<=v,S.value=S.done?z:et};let Q,at;const K=J=>{A(S.value)&&(Q=J,at=vo({keyframes:[S.value,C(S.value)],velocity:Tg(_,J,S.value),damping:c,stiffness:f,restDelta:v,restSpeed:b}))};return K(0),{calculatedDuration:null,next:J=>{let nt=!1;return!at&&Q===void 0&&(nt=!0,U(J),K(J)),Q!==void 0&&J>=Q?at.next(J-Q):(!nt&&U(J),S)}}}function v1(i,l,o){const s=[],c=o||ti.mix||jg,f=i.length-1;for(let h=0;h<f;h++){let m=c(i[h],i[h+1]);if(l){const p=Array.isArray(l)?l[h]||Ge:l;m=zl(p,m)}s.push(m)}return s}function p1(i,l,{clamp:o=!0,ease:s,mixer:c}={}){const f=i.length;if(Gc(f===l.length),f===1)return()=>l[0];if(f===2&&l[0]===l[1])return()=>l[1];const h=i[0]===i[1];i[0]>i[f-1]&&(i=[...i].reverse(),l=[...l].reverse());const m=v1(l,s,c),p=m.length,v=b=>{if(h&&b<i[0])return l[0];let x=0;if(p>1)for(;x<i.length-2&&!(b<i[x+1]);x++);const S=Cl(i[x],i[x+1],b);return m[x](S)};return o?b=>v(an(i[0],i[f-1],b)):v}function g1(i,l){const o=i[i.length-1];for(let s=1;s<=l;s++){const c=Cl(0,l,s);i.push(Rt(o,1,c))}}function y1(i){const l=[0];return g1(l,i.length-1),l}function b1(i,l){return i.map(o=>o*l)}function x1(i,l){return i.map(()=>l||fg).splice(0,i.length-1)}function Tl({duration:i=300,keyframes:l,times:o,ease:s="easeInOut"}){const c=Dx(s)?s.map(wv):wv(s),f={done:!1,value:l[0]},h=b1(o&&o.length===l.length?o:y1(l),i),m=p1(h,l,{ease:Array.isArray(c)?c:x1(l,c)});return{calculatedDuration:i,next:p=>(f.value=m(p),f.done=p>=i,f)}}const S1=i=>i!==null;function Ao(i,{repeat:l,repeatType:o="loop"},s,c=1){const f=i.filter(S1),m=c<0||l&&o!=="loop"&&l%2===1?0:f.length-1;return!m||s===void 0?f[m]:s}const j1={decay:vc,inertia:vc,tween:Tl,keyframes:Tl,spring:vo};function wg(i){typeof i.type=="string"&&(i.type=j1[i.type])}class Pc{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(l=>{this.resolve=l})}notifyFinished(){this.resolve()}then(l,o){return this.finished.then(l,o)}}const A1=i=>i/100;class po extends Pc{constructor(l){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,c;const{motionValue:o}=this.options;o&&o.updatedAt!==ce.now()&&this.tick(ce.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(s=this.options).onStop)==null||c.call(s))},this.options=l,this.initAnimation(),this.play(),l.autoplay===!1&&this.pause()}initAnimation(){const{options:l}=this;wg(l);const{type:o=Tl,repeat:s=0,repeatDelay:c=0,repeatType:f,velocity:h=0}=l;let{keyframes:m}=l;const p=o||Tl;p!==Tl&&typeof m[0]!="number"&&(this.mixKeyframes=zl(A1,jg(m[0],m[1])),m=[0,100]);const v=p({...l,keyframes:m});f==="mirror"&&(this.mirroredGenerator=p({...l,keyframes:[...m].reverse(),velocity:-h})),v.calculatedDuration===null&&(v.calculatedDuration=$c(v));const{calculatedDuration:b}=v;this.calculatedDuration=b,this.resolvedDuration=b+c,this.totalDuration=this.resolvedDuration*(s+1)-c,this.generator=v}updateTime(l){const o=Math.round(l-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=o}tick(l,o=!1){const{generator:s,totalDuration:c,mixKeyframes:f,mirroredGenerator:h,resolvedDuration:m,calculatedDuration:p}=this;if(this.startTime===null)return s.next(0);const{delay:v=0,keyframes:b,repeat:x,repeatType:S,repeatDelay:A,type:C,onUpdate:B,finalKeyframe:O}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,l):this.speed<0&&(this.startTime=Math.min(l-c/this.speed,this.startTime)),o?this.currentTime=l:this.updateTime(l);const z=this.currentTime-v*(this.playbackSpeed>=0?1:-1),q=this.playbackSpeed>=0?z<0:z>c;this.currentTime=Math.max(z,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let _=this.currentTime,U=s;if(x){const J=Math.min(this.currentTime,c)/m;let nt=Math.floor(J),et=J%1;!et&&J>=1&&(et=1),et===1&&nt--,nt=Math.min(nt,x+1),!!(nt%2)&&(S==="reverse"?(et=1-et,A&&(et-=A/m)):S==="mirror"&&(U=h)),_=an(0,1,et)*m}let Q;q?(this.delayState.value=b[0],Q=this.delayState):Q=U.next(_),f&&!q&&(Q.value=f(Q.value));let{done:at}=Q;!q&&p!==null&&(at=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const K=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&at);return K&&C!==vc&&(Q.value=Ao(b,this.options,O,this.speed)),B&&B(Q.value),K&&this.finish(),Q}then(l,o){return this.finished.then(l,o)}get duration(){return Ye(this.calculatedDuration)}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+Ye(l)}get time(){return Ye(this.currentTime)}set time(l){l=Ne(l),this.currentTime=l,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=l:this.driver&&(this.startTime=this.driver.now()-l/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=l,this.tick(l))}getGeneratorVelocity(){const l=this.currentTime;if(l<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(l);const o=this.generator.next(l).value;return Tg(s=>this.generator.next(s).value,l,o)}get speed(){return this.playbackSpeed}set speed(l){const o=this.playbackSpeed!==l;o&&this.driver&&this.updateTime(ce.now()),this.playbackSpeed=l,o&&this.driver&&(this.time=Ye(this.currentTime))}play(){var c,f;if(this.isStopped)return;const{driver:l=s1,startTime:o}=this.options;this.driver||(this.driver=l(h=>this.tick(h))),(f=(c=this.options).onPlay)==null||f.call(c);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=o??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ce.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var l,o;this.notifyFinished(),this.teardown(),this.state="finished",(o=(l=this.options).onComplete)==null||o.call(l)}cancel(){var l,o;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(o=(l=this.options).onCancel)==null||o.call(l)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(l){return this.startTime=0,this.tick(l,!0)}attachTimeline(l){var o;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(o=this.driver)==null||o.stop(),l.observe(this)}}function T1(i){for(let l=1;l<i.length;l++)i[l]??(i[l]=i[l-1])}const Ei=i=>i*180/Math.PI,pc=i=>{const l=Ei(Math.atan2(i[1],i[0]));return gc(l)},w1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:i=>(Math.abs(i[0])+Math.abs(i[3]))/2,rotate:pc,rotateZ:pc,skewX:i=>Ei(Math.atan(i[1])),skewY:i=>Ei(Math.atan(i[2])),skew:i=>(Math.abs(i[1])+Math.abs(i[2]))/2},gc=i=>(i=i%360,i<0&&(i+=360),i),Vv=pc,Rv=i=>Math.sqrt(i[0]*i[0]+i[1]*i[1]),Bv=i=>Math.sqrt(i[4]*i[4]+i[5]*i[5]),E1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Rv,scaleY:Bv,scale:i=>(Rv(i)+Bv(i))/2,rotateX:i=>gc(Ei(Math.atan2(i[6],i[5]))),rotateY:i=>gc(Ei(Math.atan2(-i[2],i[0]))),rotateZ:Vv,rotate:Vv,skewX:i=>Ei(Math.atan(i[4])),skewY:i=>Ei(Math.atan(i[1])),skew:i=>(Math.abs(i[1])+Math.abs(i[4]))/2};function yc(i){return i.includes("scale")?1:0}function bc(i,l){if(!i||i==="none")return yc(l);const o=i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,c;if(o)s=E1,c=o;else{const m=i.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=w1,c=m}if(!c)return yc(l);const f=s[l],h=c[1].split(",").map(D1);return typeof f=="function"?f(h):h[f]}const C1=(i,l)=>{const{transform:o="none"}=getComputedStyle(i);return bc(o,l)};function D1(i){return parseFloat(i.trim())}const ja=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Aa=new Set([...ja,"pathRotation"]),Ov=i=>i===Sa||i===I,M1=new Set(["x","y","z"]),N1=ja.filter(i=>!M1.has(i));function z1(i){const l=[];return N1.forEach(o=>{const s=i.getValue(o);s!==void 0&&(l.push([o,s.get()]),s.set(o.startsWith("scale")?1:0))}),l}const In={width:({x:i},{paddingLeft:l="0",paddingRight:o="0",boxSizing:s})=>{const c=i.max-i.min;return s==="border-box"?c:c-parseFloat(l)-parseFloat(o)},height:({y:i},{paddingTop:l="0",paddingBottom:o="0",boxSizing:s})=>{const c=i.max-i.min;return s==="border-box"?c:c-parseFloat(l)-parseFloat(o)},top:(i,{top:l})=>parseFloat(l),left:(i,{left:l})=>parseFloat(l),bottom:({y:i},{top:l})=>parseFloat(l)+(i.max-i.min),right:({x:i},{left:l})=>parseFloat(l)+(i.max-i.min),x:(i,{transform:l})=>bc(l,"x"),y:(i,{transform:l})=>bc(l,"y")};In.translateX=In.x;In.translateY=In.y;const Ci=new Set;let xc=!1,Sc=!1,jc=!1;function Eg(){if(Sc){const i=Array.from(Ci).filter(s=>s.needsMeasurement),l=new Set(i.map(s=>s.element)),o=new Map;l.forEach(s=>{const c=z1(s);c.length&&(o.set(s,c),s.render())}),i.forEach(s=>s.measureInitialState()),l.forEach(s=>{s.render();const c=o.get(s);c&&c.forEach(([f,h])=>{var m;(m=s.getValue(f))==null||m.set(h)})}),i.forEach(s=>s.measureEndState()),i.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}Sc=!1,xc=!1,Ci.forEach(i=>i.complete(jc)),Ci.clear()}function Cg(){Ci.forEach(i=>{i.readKeyframes(),i.needsMeasurement&&(Sc=!0)})}function V1(){jc=!0,Cg(),Eg(),jc=!1}class Ic{constructor(l,o,s,c,f,h=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...l],this.onComplete=o,this.name=s,this.motionValue=c,this.element=f,this.isAsync=h}scheduleResolve(){this.state="scheduled",this.isAsync?(Ci.add(this),xc||(xc=!0,Bt.read(Cg),Bt.resolveKeyframes(Eg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:l,name:o,element:s,motionValue:c}=this;if(l[0]===null){const f=c==null?void 0:c.get(),h=l[l.length-1];if(f!==void 0)l[0]=f;else if(s&&o){const m=s.readValue(o,h);m!=null&&(l[0]=m)}l[0]===void 0&&(l[0]=h),c&&f===void 0&&c.set(l[0])}T1(l)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(l=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,l),Ci.delete(this)}cancel(){this.state==="scheduled"&&(Ci.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const R1=i=>i.startsWith("--");function Dg(i,l,o){R1(l)?i.style.setProperty(l,o):i.style[l]=o}const B1={};function Mg(i,l){const o=ng(i);return()=>B1[l]??o()}const O1=Mg(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ng=Mg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Sl=([i,l,o,s])=>`cubic-bezier(${i}, ${l}, ${o}, ${s})`,kv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Sl([0,.65,.55,1]),circOut:Sl([.55,0,1,.45]),backIn:Sl([.31,.01,.66,-.59]),backOut:Sl([.33,1.53,.69,.99])};function zg(i,l){if(i)return typeof i=="function"?Ng()?Ag(i,l):"ease-out":dg(i)?Sl(i):Array.isArray(i)?i.map(o=>zg(o,l)||kv.easeOut):kv[i]}function k1(i,l,o,{delay:s=0,duration:c=300,repeat:f=0,repeatType:h="loop",ease:m="easeOut",times:p}={},v=void 0){const b={[l]:o};p&&(b.offset=p);const x=zg(m,c);Array.isArray(x)&&(b.easing=x);const S={delay:s,duration:c,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:f+1,direction:h==="reverse"?"alternate":"normal"};return v&&(S.pseudoElement=v),i.animate(b,S)}function Vg(i){return typeof i=="function"&&"applyToOptions"in i}function _1({type:i,...l}){return Vg(i)&&Ng()?i.applyToOptions(l):(l.duration??(l.duration=300),l.ease??(l.ease="easeOut"),l)}class Rg extends Pc{constructor(l){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!l)return;const{element:o,name:s,keyframes:c,pseudoElement:f,allowFlatten:h=!1,finalKeyframe:m,onComplete:p}=l;this.isPseudoElement=!!f,this.allowFlatten=h,this.options=l,Gc(typeof l.type!="string");const v=_1(l);this.animation=k1(o,s,c,v,f),v.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!f){const b=Ao(c,this.options,m,this.speed);this.updateMotionValue&&this.updateMotionValue(b),Dg(o,s,b),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var l,o;(o=(l=this.animation).finish)==null||o.call(l)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:l}=this;l==="idle"||l==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var o,s,c;const l=(o=this.options)==null?void 0:o.element;!this.isPseudoElement&&(l!=null&&l.isConnected)&&((c=(s=this.animation).commitStyles)==null||c.call(s))}get duration(){var o,s;const l=((s=(o=this.animation.effect)==null?void 0:o.getComputedTiming)==null?void 0:s.call(o).duration)||0;return Ye(Number(l))}get iterationDuration(){const{delay:l=0}=this.options||{};return this.duration+Ye(l)}get time(){return Ye(Number(this.animation.currentTime)||0)}set time(l){const o=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ne(l),o&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(l){l<0&&(this.finishedTime=null),this.animation.playbackRate=l}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(l){this.manualStartTime=this.animation.startTime=l}attachTimeline({timeline:l,rangeStart:o,rangeEnd:s,observe:c}){var f;return this.allowFlatten&&((f=this.animation.effect)==null||f.updateTiming({easing:"linear"})),this.animation.onfinish=null,l&&O1()?(this.animation.timeline=l,o&&(this.animation.rangeStart=o),s&&(this.animation.rangeEnd=s),Ge):c(this)}}const Bg={anticipate:ug,backInOut:rg,circInOut:hg};function U1(i){return i in Bg}function L1(i){typeof i.ease=="string"&&U1(i.ease)&&(i.ease=Bg[i.ease])}const tc=10;class q1 extends Rg{constructor(l){L1(l),wg(l),super(l),l.startTime!==void 0&&l.autoplay!==!1&&(this.startTime=l.startTime),this.options=l}updateMotionValue(l){const{motionValue:o,onUpdate:s,onComplete:c,element:f,...h}=this.options;if(!o)return;if(l!==void 0){o.set(l);return}const m=new po({...h,autoplay:!1}),p=Math.max(tc,ce.now()-this.startTime),v=an(0,tc,p-tc),b=m.sample(p).value,{name:x}=this.options;f&&x&&Dg(f,x,b),o.setWithVelocity(m.sample(Math.max(0,p-v)).value,b,v),m.stop()}}const _v=(i,l)=>l==="zIndex"?!1:!!(typeof i=="number"||Array.isArray(i)||typeof i=="string"&&(Je.test(i)||i==="0")&&!i.startsWith("url("));function H1(i){const l=i[0];if(i.length===1)return!0;for(let o=0;o<i.length;o++)if(i[o]!==l)return!0}function Y1(i,l,o,s){const c=i[0];if(c===null)return!1;if(l==="display"||l==="visibility")return!0;const f=i[i.length-1],h=_v(c,l),m=_v(f,l);return!h||!m?!1:H1(i)||(o==="spring"||Vg(o))&&s}function Ac(i){i.duration=0,i.type="keyframes"}const Og=new Set(["opacity","clipPath","filter","transform"]),G1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function X1(i){for(let l=0;l<i.length;l++)if(typeof i[l]=="string"&&G1.test(i[l]))return!0;return!1}const Q1=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),Z1=ng(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function K1(i){var x;const{motionValue:l,name:o,repeatDelay:s,repeatType:c,damping:f,type:h,keyframes:m}=i;if(!(((x=l==null?void 0:l.owner)==null?void 0:x.current)instanceof HTMLElement))return!1;const{onUpdate:v,transformTemplate:b}=l.owner.getProps();return Z1()&&o&&(Og.has(o)||Q1.has(o)&&X1(m))&&(o!=="transform"||!b)&&!v&&!s&&c!=="mirror"&&f!==0&&h!=="inertia"}const F1=40;class J1 extends Pc{constructor({autoplay:l=!0,delay:o=0,type:s="keyframes",repeat:c=0,repeatDelay:f=0,repeatType:h="loop",keyframes:m,name:p,motionValue:v,element:b,...x}){var C;super(),this.stop=()=>{var B,O;this._animation&&(this._animation.stop(),(B=this.stopTimeline)==null||B.call(this)),(O=this.keyframeResolver)==null||O.cancel()},this.createdAt=ce.now();const S={autoplay:l,delay:o,type:s,repeat:c,repeatDelay:f,repeatType:h,name:p,motionValue:v,element:b,...x},A=(b==null?void 0:b.KeyframeResolver)||Ic;this.keyframeResolver=new A(m,(B,O,z)=>this.onKeyframesResolved(B,O,S,!z),p,v,b),(C=this.keyframeResolver)==null||C.scheduleResolve()}onKeyframesResolved(l,o,s,c){var z,q;this.keyframeResolver=void 0;const{name:f,type:h,velocity:m,delay:p,isHandoff:v,onUpdate:b}=s;this.resolvedAt=ce.now();let x=!0;Y1(l,f,h,m)||(x=!1,(ti.instantAnimations||!p)&&(b==null||b(Ao(l,s,o))),l[0]=l[l.length-1],Ac(s),s.repeat=0);const A={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>F1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:o,...s,keyframes:l},C=x&&!v&&K1(A),B=(q=(z=A.motionValue)==null?void 0:z.owner)==null?void 0:q.current;let O;if(C)try{O=new q1({...A,element:B})}catch{O=new po(A)}else O=new po(A);O.finished.then(()=>{this.notifyFinished()}).catch(Ge),this.pendingTimeline&&(this.stopTimeline=O.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=O}get finished(){return this._animation?this.animation.finished:this._finished}then(l,o){return this.finished.finally(l).then(()=>{})}get animation(){var l;return this._animation||((l=this.keyframeResolver)==null||l.resume(),V1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(l){this.animation.time=l}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(l){this.animation.speed=l}get startTime(){return this.animation.startTime}attachTimeline(l){return this._animation?this.stopTimeline=this.animation.attachTimeline(l):this.pendingTimeline=l,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var l;this._animation&&this.animation.cancel(),(l=this.keyframeResolver)==null||l.cancel()}}function kg(i,l,o,s=0,c=1){const f=Array.from(i).sort((v,b)=>v.sortNodePosition(b)).indexOf(l),h=i.size,m=(h-1)*s;return typeof o=="function"?o(f,h):c===1?f*s:m-f*s}const Uv=30,W1=i=>!isNaN(parseFloat(i));class $1{constructor(l,o={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var f;const c=ce.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((f=this.events.change)==null||f.notify(this.current),this.dependents))for(const h of this.dependents)h.dirty()},this.hasAnimated=!1,this.setCurrent(l),this.owner=o.owner}setCurrent(l){this.current=l,this.updatedAt=ce.now(),this.canTrackVelocity===null&&l!==void 0&&(this.canTrackVelocity=W1(this.current))}setPrevFrameValue(l=this.current){this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt}onChange(l){return this.on("change",l)}on(l,o){this.events[l]||(this.events[l]=new Xc);const s=this.events[l].add(o);return l==="change"?()=>{s(),Bt.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const l in this.events)this.events[l].clear()}attach(l,o){this.passiveEffect=l,this.stopPassiveEffect=o}set(l){this.passiveEffect?this.passiveEffect(l,this.updateAndNotify):this.updateAndNotify(l)}setWithVelocity(l,o,s){this.set(o),this.prev=void 0,this.prevFrameValue=l,this.prevUpdatedAt=this.updatedAt-s}jump(l,o=!0){this.updateAndNotify(l),this.prev=l,this.prevUpdatedAt=this.prevFrameValue=void 0,o&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var l;(l=this.events.change)==null||l.notify(this.current)}addDependent(l){this.dependents||(this.dependents=new Set),this.dependents.add(l)}removeDependent(l){this.dependents&&this.dependents.delete(l)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const l=ce.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||l-this.updatedAt>Uv)return 0;const o=Math.min(this.updatedAt-this.prevUpdatedAt,Uv);return ig(parseFloat(this.current)-parseFloat(this.prevFrameValue),o)}start(l){return this.stop(),new Promise(o=>{this.hasAnimated=!0,this.animation=l(o),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var l,o;(l=this.dependents)==null||l.clear(),(o=this.events.destroy)==null||o.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ba(i,l){return new $1(i,l)}function _g(i,l){if(i!=null&&i.inherit&&l){const{inherit:o,...s}=i;return{...l,...s}}return i}function th(i,l){const o=(i==null?void 0:i[l])??(i==null?void 0:i.default)??i;return o!==i?_g(o,i):o}const P1={type:"spring",stiffness:500,damping:25,restSpeed:10},I1=i=>({type:"spring",stiffness:550,damping:i===0?2*Math.sqrt(550):30,restSpeed:10}),tS={type:"keyframes",duration:.8},eS={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},nS=(i,{keyframes:l})=>l.length>2?tS:Aa.has(i)?i.startsWith("scale")?I1(l[1]):P1:eS,iS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function aS(i){for(const l in i)if(!iS.has(l))return!0;return!1}const eh=(i,l,o,s={},c,f)=>h=>{const m=th(s,i)||{},p=m.delay||s.delay||0;let{elapsed:v=0}=s;v=v-Ne(p);const b={keyframes:Array.isArray(o)?o:[null,o],ease:"easeOut",velocity:l.getVelocity(),...m,delay:-v,onUpdate:S=>{l.set(S),m.onUpdate&&m.onUpdate(S)},onComplete:()=>{h(),m.onComplete&&m.onComplete()},name:i,motionValue:l,element:f?void 0:c};aS(m)||Object.assign(b,nS(i,b)),b.duration&&(b.duration=Ne(b.duration)),b.repeatDelay&&(b.repeatDelay=Ne(b.repeatDelay)),b.from!==void 0&&(b.keyframes[0]=b.from);let x=!1;if((b.type===!1||b.duration===0&&!b.repeatDelay)&&(Ac(b),b.delay===0&&(x=!0)),(ti.instantAnimations||ti.skipAnimations||c!=null&&c.shouldSkipAnimations||m.skipAnimations)&&(x=!0,Ac(b),b.delay=0),b.allowFlatten=!m.type&&!m.ease,x&&!f&&l.get()!==void 0){const S=Ao(b.keyframes,m);if(S!==void 0){Bt.update(()=>{b.onUpdate(S),b.onComplete()});return}}return m.isSync?new po(b):new J1(b)},lS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function sS(i){const l=lS.exec(i);if(!l)return[,];const[,o,s,c]=l;return[`--${o??s}`,c]}function Ug(i,l,o=1){const[s,c]=sS(i);if(!s)return;const f=window.getComputedStyle(l).getPropertyValue(s);if(f){const h=f.trim();return Ip(h)?parseFloat(h):h}return Kc(c)?Ug(c,l,o+1):c}function Lv(i){const l=[{},{}];return i==null||i.values.forEach((o,s)=>{l[0][s]=o.get(),l[1][s]=o.getVelocity()}),l}function nh(i,l,o,s){if(typeof l=="function"){const[c,f]=Lv(s);l=l(o!==void 0?o:i.custom,c,f)}if(typeof l=="string"&&(l=i.variants&&i.variants[l]),typeof l=="function"){const[c,f]=Lv(s);l=l(o!==void 0?o:i.custom,c,f)}return l}function Di(i,l,o){const s=i.getProps();return nh(s,l,o!==void 0?o:s.custom,i)}const Lg=new Set(["width","height","top","left","right","bottom",...ja]),Tc=i=>Array.isArray(i);function oS(i,l,o){i.hasValue(l)?i.getValue(l).set(o):i.addValue(l,ba(o))}function rS(i){return Tc(i)?i[i.length-1]||0:i}function uS(i,l){const o=Di(i,l);let{transitionEnd:s={},transition:c={},...f}=o||{};f={...f,...s};for(const h in f){const m=rS(f[h]);oS(i,h,m)}}const oe=i=>!!(i&&i.getVelocity);function cS(i){return!!(oe(i)&&i.add)}function wc(i,l){const o=i.getValue("willChange");if(cS(o))return o.add(l);if(!o&&ti.WillChange){const s=new ti.WillChange("auto");i.addValue("willChange",s),s.add(l)}}function ih(i){return i.replace(/([A-Z])/g,l=>`-${l.toLowerCase()}`)}const hS="framerAppearId",qg="data-"+ih(hS);function Hg(i){return i.props[qg]}function fS({protectedKeys:i,needsAnimating:l},o){const s=i.hasOwnProperty(o)&&l[o]!==!0;return l[o]=!1,s}function Yg(i,l,{delay:o=0,transitionOverride:s,type:c}={}){let{transition:f,transitionEnd:h,...m}=l;const p=i.getDefaultTransition();f=f?_g(f,p):p;const v=f==null?void 0:f.reduceMotion,b=f==null?void 0:f.skipAnimations;s&&(f=s);const x=[],S=c&&i.animationState&&i.animationState.getState()[c],A=f==null?void 0:f.path;A&&A.animateVisualElement(i,m,f,o,x);for(const C in m){const B=i.getValue(C,i.latestValues[C]??null),O=m[C];if(O===void 0||S&&fS(S,C))continue;const z={delay:o,...th(f||{},C)};b&&(z.skipAnimations=!0);const q=B.get();if(q!==void 0&&!B.isAnimating()&&!Array.isArray(O)&&O===q&&!z.velocity){Bt.update(()=>B.set(O));continue}let _=!1;if(window.MotionHandoffAnimation){const at=Hg(i);if(at){const K=window.MotionHandoffAnimation(at,C,Bt);K!==null&&(z.startTime=K,_=!0)}}wc(i,C);const U=v??i.shouldReduceMotion;B.start(eh(C,B,O,U&&Lg.has(C)?{type:!1}:z,i,_));const Q=B.animation;Q&&x.push(Q)}if(h){const C=()=>Bt.update(()=>{h&&uS(i,h)});x.length?Promise.all(x).then(C):C()}return x}function Ec(i,l,o={}){var p;const s=Di(i,l,o.type==="exit"?(p=i.presenceContext)==null?void 0:p.custom:void 0);let{transition:c=i.getDefaultTransition()||{}}=s||{};o.transitionOverride&&(c=o.transitionOverride);const f=s?()=>Promise.all(Yg(i,s,o)):()=>Promise.resolve(),h=i.variantChildren&&i.variantChildren.size?(v=0)=>{const{delayChildren:b=0,staggerChildren:x,staggerDirection:S}=c;return dS(i,l,v,b,x,S,o)}:()=>Promise.resolve(),{when:m}=c;if(m){const[v,b]=m==="beforeChildren"?[f,h]:[h,f];return v().then(()=>b())}else return Promise.all([f(),h(o.delay)])}function dS(i,l,o=0,s=0,c=0,f=1,h){const m=[];for(const p of i.variantChildren)p.notify("AnimationStart",l),m.push(Ec(p,l,{...h,delay:o+(typeof s=="function"?0:s)+kg(i.variantChildren,p,s,c,f)}).then(()=>p.notify("AnimationComplete",l)));return Promise.all(m)}function mS(i,l,o={}){i.notify("AnimationStart",l);let s;if(Array.isArray(l)){const c=l.map(f=>Ec(i,f,o));s=Promise.all(c)}else if(typeof l=="string")s=Ec(i,l,o);else{const c=typeof l=="function"?Di(i,l,o.custom):l;s=Promise.all(Yg(i,c,o))}return s.then(()=>{i.notify("AnimationComplete",l)})}const vS={test:i=>i==="auto",parse:i=>i},Gg=i=>l=>l.test(i),Xg=[Sa,I,nn,An,Hx,qx,vS],qv=i=>Xg.find(Gg(i));function pS(i){return typeof i=="number"?i===0:i!==null?i==="none"||i==="0"||eg(i):!0}const gS=new Set(["brightness","contrast","saturate","opacity"]);function yS(i){const[l,o]=i.slice(0,-1).split("(");if(l==="drop-shadow")return i;const[s]=o.match(Fc)||[];if(!s)return i;const c=o.replace(s,"");let f=gS.has(l)?1:0;return s!==o&&(f*=100),l+"("+f+c+")"}const bS=/\b([a-z-]*)\(.*?\)/gu,Cc={...Je,getAnimatableNone:i=>{const l=i.match(bS);return l?l.map(yS).join(" "):i}},Dc={...Je,getAnimatableNone:i=>{const l=Je.parse(i);return Je.createTransformer(i)(l.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},Hv={...Sa,transform:Math.round},xS={rotate:An,pathRotation:An,rotateX:An,rotateY:An,rotateZ:An,scale:Is,scaleX:Is,scaleY:Is,scaleZ:Is,skew:An,skewX:An,skewY:An,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:Dl,originX:Cv,originY:Cv,originZ:I},go={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,top:I,right:I,bottom:I,left:I,inset:I,insetBlock:I,insetBlockStart:I,insetBlockEnd:I,insetInline:I,insetInlineStart:I,insetInlineEnd:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,paddingBlock:I,paddingBlockStart:I,paddingBlockEnd:I,paddingInline:I,paddingInlineStart:I,paddingInlineEnd:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,marginBlock:I,marginBlockStart:I,marginBlockEnd:I,marginInline:I,marginInlineStart:I,marginInlineEnd:I,fontSize:I,backgroundPositionX:I,backgroundPositionY:I,...xS,zIndex:Hv,fillOpacity:Dl,strokeOpacity:Dl,numOctaves:Hv},SS={...go,color:Jt,backgroundColor:Jt,outlineColor:Jt,fill:Jt,stroke:Jt,borderColor:Jt,borderTopColor:Jt,borderRightColor:Jt,borderBottomColor:Jt,borderLeftColor:Jt,filter:Cc,WebkitFilter:Cc,mask:Dc,WebkitMask:Dc},Qg=i=>SS[i],jS=new Set([Cc,Dc]);function Zg(i,l){let o=Qg(i);return jS.has(o)||(o=Je),o.getAnimatableNone?o.getAnimatableNone(l):void 0}const AS=new Set(["auto","none","0"]);function TS(i,l,o){let s=0,c;for(;s<i.length&&!c;){const f=i[s];typeof f=="string"&&!AS.has(f)&&ya(f).values.length&&(c=i[s]),s++}if(c&&o)for(const f of l)i[f]=Zg(o,c)}class wS extends Ic{constructor(l,o,s,c,f){super(l,o,s,c,f,!0)}readKeyframes(){const{unresolvedKeyframes:l,element:o,name:s}=this;if(!o||!o.current)return;super.readKeyframes();for(let b=0;b<l.length;b++){let x=l[b];if(typeof x=="string"&&(x=x.trim(),Kc(x))){const S=Ug(x,o.current);S!==void 0&&(l[b]=S),b===l.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!Lg.has(s)||l.length!==2)return;const[c,f]=l,h=qv(c),m=qv(f),p=Ev(c),v=Ev(f);if(p!==v&&In[s]){this.needsMeasurement=!0;return}if(h!==m)if(Ov(h)&&Ov(m))for(let b=0;b<l.length;b++){const x=l[b];typeof x=="string"&&(l[b]=parseFloat(x))}else In[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:l,name:o}=this,s=[];for(let c=0;c<l.length;c++)(l[c]===null||pS(l[c]))&&s.push(c);s.length&&TS(l,s,o)}measureInitialState(){const{element:l,unresolvedKeyframes:o,name:s}=this;if(!l||!l.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=In[s](l.measureViewportBox(),window.getComputedStyle(l.current)),o[0]=this.measuredOrigin;const c=o[o.length-1];c!==void 0&&l.getValue(s,c).jump(c,!1)}measureEndState(){var m;const{element:l,name:o,unresolvedKeyframes:s}=this;if(!l||!l.current)return;const c=l.getValue(o);c&&c.jump(this.measuredOrigin,!1);const f=s.length-1,h=s[f];s[f]=In[o](l.measureViewportBox(),window.getComputedStyle(l.current)),h!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=h),(m=this.removedTransforms)!=null&&m.length&&this.removedTransforms.forEach(([p,v])=>{l.getValue(p).set(v)}),this.resolveNoneKeyframes()}}function Kg(i,l,o){if(i==null)return[];if(i instanceof EventTarget)return[i];if(typeof i=="string"){let s=document;const c=(o==null?void 0:o[i])??s.querySelectorAll(i);return c?Array.from(c):[]}return Array.from(i).filter(s=>s!=null)}const Mc=(i,l)=>l&&typeof i=="number"?l.transform(i):i;function ao(i){return tg(i)&&"offsetHeight"in i&&!("ownerSVGElement"in i)}const{schedule:ah}=mg(queueMicrotask,!1),Fe={x:!1,y:!1};function Fg(){return Fe.x||Fe.y}function ES(i){return i==="x"||i==="y"?Fe[i]?null:(Fe[i]=!0,()=>{Fe[i]=!1}):Fe.x||Fe.y?null:(Fe.x=Fe.y=!0,()=>{Fe.x=Fe.y=!1})}function Jg(i,l){const o=Kg(i),s=new AbortController,c={passive:!0,...l,signal:s.signal};return[o,c,()=>s.abort()]}function CS(i){return!(i.pointerType==="touch"||Fg())}function DS(i,l,o={}){const[s,c,f]=Jg(i,o);return s.forEach(h=>{let m=!1,p=!1,v;const b=()=>{h.removeEventListener("pointerleave",C)},x=O=>{v&&(v(O),v=void 0),b()},S=O=>{m=!1,window.removeEventListener("pointerup",S),window.removeEventListener("pointercancel",S),p&&(p=!1,x(O))},A=()=>{m=!0,window.addEventListener("pointerup",S,c),window.addEventListener("pointercancel",S,c)},C=O=>{if(O.pointerType!=="touch"){if(m){p=!0;return}x(O)}},B=O=>{if(!CS(O))return;p=!1;const z=l(h,O);typeof z=="function"&&(v=z,h.addEventListener("pointerleave",C,c))};h.addEventListener("pointerenter",B,c),h.addEventListener("pointerdown",A,c)}),f}const Wg=(i,l)=>l?i===l?!0:Wg(i,l.parentElement):!1,lh=i=>i.pointerType==="mouse"?typeof i.button!="number"||i.button<=0:i.isPrimary!==!1,MS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function NS(i){return MS.has(i.tagName)||i.isContentEditable===!0}const zS=new Set(["INPUT","SELECT","TEXTAREA"]);function VS(i){return zS.has(i.tagName)||i.isContentEditable===!0}const lo=new WeakSet;function Yv(i){return l=>{l.key==="Enter"&&i(l)}}function ec(i,l){i.dispatchEvent(new PointerEvent("pointer"+l,{isPrimary:!0,bubbles:!0}))}const RS=(i,l)=>{const o=i.currentTarget;if(!o)return;const s=Yv(()=>{if(lo.has(o))return;ec(o,"down");const c=Yv(()=>{ec(o,"up")}),f=()=>ec(o,"cancel");o.addEventListener("keyup",c,l),o.addEventListener("blur",f,l)});o.addEventListener("keydown",s,l),o.addEventListener("blur",()=>o.removeEventListener("keydown",s),l)};function Gv(i){return lh(i)&&!Fg()}const Xv=new WeakSet;function BS(i,l,o={}){const[s,c,f]=Jg(i,o),h=m=>{const p=m.currentTarget;if(!Gv(m)||Xv.has(m))return;lo.add(p),o.stopPropagation&&Xv.add(m);const v=l(p,m),b=(A,C)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",S),lo.has(p)&&lo.delete(p),Gv(A)&&typeof v=="function"&&v(A,{success:C})},x=A=>{b(A,p===window||p===document||o.useGlobalTarget||Wg(p,A.target))},S=A=>{b(A,!1)};window.addEventListener("pointerup",x,c),window.addEventListener("pointercancel",S,c)};return s.forEach(m=>{(o.useGlobalTarget?window:m).addEventListener("pointerdown",h,c),ao(m)&&(m.addEventListener("focus",v=>RS(v,c)),!NS(m)&&!m.hasAttribute("tabindex")&&(m.tabIndex=0))}),f}function sh(i){return tg(i)&&"ownerSVGElement"in i}const so=new WeakMap;let $n;const $g=(i,l,o)=>(s,c)=>c&&c[0]?c[0][i+"Size"]:sh(s)&&"getBBox"in s?s.getBBox()[l]:s[o],OS=$g("inline","width","offsetWidth"),kS=$g("block","height","offsetHeight");function _S({target:i,borderBoxSize:l}){var o;(o=so.get(i))==null||o.forEach(s=>{s(i,{get width(){return OS(i,l)},get height(){return kS(i,l)}})})}function US(i){i.forEach(_S)}function LS(){typeof ResizeObserver>"u"||($n=new ResizeObserver(US))}function qS(i,l){$n||LS();const o=Kg(i);return o.forEach(s=>{let c=so.get(s);c||(c=new Set,so.set(s,c)),c.add(l),$n==null||$n.observe(s)}),()=>{o.forEach(s=>{const c=so.get(s);c==null||c.delete(l),c!=null&&c.size||$n==null||$n.unobserve(s)})}}const oo=new Set;let pa;function HS(){pa=()=>{const i={get width(){return window.innerWidth},get height(){return window.innerHeight}};oo.forEach(l=>l(i))},window.addEventListener("resize",pa)}function YS(i){return oo.add(i),pa||HS(),()=>{oo.delete(i),!oo.size&&typeof pa=="function"&&(window.removeEventListener("resize",pa),pa=void 0)}}function Qv(i,l){return typeof i=="function"?YS(i):qS(i,l)}function GS(i){return sh(i)&&i.tagName==="svg"}const XS=[...Xg,Jt,Je],QS=i=>XS.find(Gg(i)),Zv=()=>({translate:0,scale:1,origin:0,originPoint:0}),ga=()=>({x:Zv(),y:Zv()}),Kv=()=>({min:0,max:0}),$t=()=>({x:Kv(),y:Kv()}),ZS=new WeakMap;function To(i){return i!==null&&typeof i=="object"&&typeof i.start=="function"}function Ml(i){return typeof i=="string"||Array.isArray(i)}const oh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],rh=["initial",...oh];function wo(i){return To(i.animate)||rh.some(l=>Ml(i[l]))}function Pg(i){return!!(wo(i)||i.variants)}function KS(i,l,o){for(const s in l){const c=l[s],f=o[s];if(oe(c))i.addValue(s,c);else if(oe(f))i.addValue(s,ba(c,{owner:i}));else if(f!==c)if(i.hasValue(s)){const h=i.getValue(s);h.liveStyle===!0?h.jump(c):h.hasAnimated||h.set(c)}else{const h=i.getStaticValue(s);i.addValue(s,ba(h!==void 0?h:c,{owner:i}))}}for(const s in o)l[s]===void 0&&i.removeValue(s);return l}const Nc={current:null},Ig={current:!1},FS=typeof window<"u";function JS(){if(Ig.current=!0,!!FS)if(window.matchMedia){const i=window.matchMedia("(prefers-reduced-motion)"),l=()=>Nc.current=i.matches;i.addEventListener("change",l),l()}else Nc.current=!1}const Fv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let yo={};function ty(i){yo=i}function WS(){return yo}class $S{scrapeMotionValuesFromProps(l,o,s){return{}}constructor({parent:l,props:o,presenceContext:s,reducedMotionConfig:c,skipAnimations:f,blockInitialAnimation:h,visualState:m},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Ic,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const A=ce.now();this.renderScheduledAt<A&&(this.renderScheduledAt=A,Bt.render(this.render,!1,!0))};const{latestValues:v,renderState:b}=m;this.latestValues=v,this.baseTarget={...v},this.initialValues=o.initial?{...v}:{},this.renderState=b,this.parent=l,this.props=o,this.presenceContext=s,this.depth=l?l.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=f,this.options=p,this.blockInitialAnimation=!!h,this.isControllingVariants=wo(o),this.isVariantNode=Pg(o),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(l&&l.current);const{willChange:x,...S}=this.scrapeMotionValuesFromProps(o,{},this);for(const A in S){const C=S[A];v[A]!==void 0&&oe(C)&&C.set(v[A])}}mount(l){var o,s;if(this.hasBeenMounted)for(const c in this.initialValues)(o=this.values.get(c))==null||o.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=l,ZS.set(l,this),this.projection&&!this.projection.instance&&this.projection.mount(l),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,f)=>this.bindToMotionValue(f,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Ig.current||JS(),this.shouldReduceMotion=Nc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var l;this.projection&&this.projection.unmount(),ei(this.notifyUpdate),ei(this.render),this.valueSubscriptions.forEach(o=>o()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(l=this.parent)==null||l.removeChild(this);for(const o in this.events)this.events[o].clear();for(const o in this.features){const s=this.features[o];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(l){this.children.add(l),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(l)}removeChild(l){this.children.delete(l),this.enteringChildren&&this.enteringChildren.delete(l)}bindToMotionValue(l,o){if(this.valueSubscriptions.has(l)&&this.valueSubscriptions.get(l)(),o.accelerate&&Og.has(l)&&this.current instanceof HTMLElement){const{factory:h,keyframes:m,times:p,ease:v,duration:b}=o.accelerate,x=new Rg({element:this.current,name:l,keyframes:m,times:p,ease:v,duration:Ne(b)}),S=h(x);this.valueSubscriptions.set(l,()=>{S(),x.cancel()});return}const s=Aa.has(l);s&&this.onBindTransform&&this.onBindTransform();const c=o.on("change",h=>{this.latestValues[l]=h,this.props.onUpdate&&Bt.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let f;typeof window<"u"&&window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,l,o)),this.valueSubscriptions.set(l,()=>{c(),f&&f()})}sortNodePosition(l){return!this.current||!this.sortInstanceNodePosition||this.type!==l.type?0:this.sortInstanceNodePosition(this.current,l.current)}updateFeatures(){let l="animation";for(l in yo){const o=yo[l];if(!o)continue;const{isEnabled:s,Feature:c}=o;if(!this.features[l]&&c&&s(this.props)&&(this.features[l]=new c(this)),this.features[l]){const f=this.features[l];f.isMounted?f.update():(f.mount(),f.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):$t()}getStaticValue(l){return this.latestValues[l]}setStaticValue(l,o){this.latestValues[l]=o}update(l,o){(l.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=l,this.prevPresenceContext=this.presenceContext,this.presenceContext=o;for(let s=0;s<Fv.length;s++){const c=Fv[s];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const f="on"+c,h=l[f];h&&(this.propEventSubscriptions[c]=this.on(c,h))}this.prevMotionValues=KS(this,this.scrapeMotionValuesFromProps(l,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(l){return this.props.variants?this.props.variants[l]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(l){const o=this.getClosestVariantNode();if(o)return o.variantChildren&&o.variantChildren.add(l),()=>o.variantChildren.delete(l)}addValue(l,o){const s=this.values.get(l);o!==s&&(s&&this.removeValue(l),this.bindToMotionValue(l,o),this.values.set(l,o),this.latestValues[l]=o.get())}removeValue(l){this.values.delete(l);const o=this.valueSubscriptions.get(l);o&&(o(),this.valueSubscriptions.delete(l)),delete this.latestValues[l],this.removeValueFromRenderState(l,this.renderState)}hasValue(l){return this.values.has(l)}getValue(l,o){if(this.props.values&&this.props.values[l])return this.props.values[l];let s=this.values.get(l);return s===void 0&&o!==void 0&&(s=ba(o===null?void 0:o,{owner:this}),this.addValue(l,s)),s}readValue(l,o){let s=this.latestValues[l]!==void 0||!this.current?this.latestValues[l]:this.getBaseTargetFromProps(this.props,l)??this.readValueFromInstance(this.current,l,this.options);return s!=null&&(typeof s=="string"&&(Ip(s)||eg(s))?s=parseFloat(s):!QS(s)&&Je.test(o)&&(s=Zg(l,o)),this.setBaseTarget(l,oe(s)?s.get():s)),oe(s)?s.get():s}setBaseTarget(l,o){this.baseTarget[l]=o}getBaseTarget(l){var f;const{initial:o}=this.props;let s;if(typeof o=="string"||typeof o=="object"){const h=nh(this.props,o,(f=this.presenceContext)==null?void 0:f.custom);h&&(s=h[l])}if(o&&s!==void 0)return s;const c=this.getBaseTargetFromProps(this.props,l);return c!==void 0&&!oe(c)?c:this.initialValues[l]!==void 0&&s===void 0?void 0:this.baseTarget[l]}on(l,o){return this.events[l]||(this.events[l]=new Xc),this.events[l].add(o)}notify(l,...o){this.events[l]&&this.events[l].notify(...o)}scheduleRenderMicrotask(){ah.render(this.render)}}class ey extends $S{constructor(){super(...arguments),this.KeyframeResolver=wS}sortInstanceNodePosition(l,o){return l.compareDocumentPosition(o)&2?1:-1}getBaseTargetFromProps(l,o){const s=l.style;return s?s[o]:void 0}removeValueFromRenderState(l,{vars:o,style:s}){delete o[l],delete s[l]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:l}=this.props;oe(l)&&(this.childSubscription=l.on("change",o=>{this.current&&(this.current.textContent=`${o}`)}))}}class ni{constructor(l){this.isMounted=!1,this.node=l}update(){}}function ny({top:i,left:l,right:o,bottom:s}){return{x:{min:l,max:o},y:{min:i,max:s}}}function PS({x:i,y:l}){return{top:l.min,right:i.max,bottom:l.max,left:i.min}}function IS(i,l){if(!l)return i;const o=l({x:i.left,y:i.top}),s=l({x:i.right,y:i.bottom});return{top:o.y,left:o.x,bottom:s.y,right:s.x}}function nc(i){return i===void 0||i===1}function zc({scale:i,scaleX:l,scaleY:o}){return!nc(i)||!nc(l)||!nc(o)}function Ti(i){return zc(i)||iy(i)||i.z||i.rotate||i.rotateX||i.rotateY||i.skewX||i.skewY}function iy(i){return Jv(i.x)||Jv(i.y)}function Jv(i){return i&&i!=="0%"}function bo(i,l,o){const s=i-o,c=l*s;return o+c}function Wv(i,l,o,s,c){return c!==void 0&&(i=bo(i,c,s)),bo(i,o,s)+l}function Vc(i,l=0,o=1,s,c){i.min=Wv(i.min,l,o,s,c),i.max=Wv(i.max,l,o,s,c)}function ay(i,{x:l,y:o}){Vc(i.x,l.translate,l.scale,l.originPoint),Vc(i.y,o.translate,o.scale,o.originPoint)}const $v=.999999999999,Pv=1.0000000000001;function tj(i,l,o,s=!1){var m;const c=o.length;if(!c)return;l.x=l.y=1;let f,h;for(let p=0;p<c;p++){f=o[p],h=f.projectionDelta;const{visualElement:v}=f.options;v&&v.props.style&&v.props.style.display==="contents"||(s&&f.options.layoutScroll&&f.scroll&&f!==f.root&&(en(i.x,-f.scroll.offset.x),en(i.y,-f.scroll.offset.y)),h&&(l.x*=h.x.scale,l.y*=h.y.scale,ay(i,h)),s&&Ti(f.latestValues)&&ro(i,f.latestValues,(m=f.layout)==null?void 0:m.layoutBox))}l.x<Pv&&l.x>$v&&(l.x=1),l.y<Pv&&l.y>$v&&(l.y=1)}function en(i,l){i.min+=l,i.max+=l}function Iv(i,l,o,s,c=.5){const f=Rt(i.min,i.max,c);Vc(i,l,o,f,s)}function tp(i,l){return typeof i=="string"?parseFloat(i)/100*(l.max-l.min):i}function ro(i,l,o){const s=o??i;Iv(i.x,tp(l.x,s.x),l.scaleX,l.scale,l.originX),Iv(i.y,tp(l.y,s.y),l.scaleY,l.scale,l.originY)}function ly(i,l){return ny(IS(i.getBoundingClientRect(),l))}function ej(i,l,o){const s=ly(i,o),{scroll:c}=l;return c&&(en(s.x,c.offset.x),en(s.y,c.offset.y)),s}const nj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ij=ja.length;function aj(i,l,o){let s="",c=!0;for(let h=0;h<ij;h++){const m=ja[h],p=i[m];if(p===void 0)continue;let v=!0;if(typeof p=="number")v=p===(m.startsWith("scale")?1:0);else{const b=parseFloat(p);v=m.startsWith("scale")?b===1:b===0}if(!v||o){const b=Mc(p,go[m]);if(!v){c=!1;const x=nj[m]||m;s+=`${x}(${b}) `}o&&(l[m]=b)}}const f=i.pathRotation;return f&&(c=!1,s+=`rotate(${Mc(f,go.pathRotation)}) `),s=s.trim(),o?s=o(l,c?"":s):c&&(s="none"),s}function uh(i,l,o){const{style:s,vars:c,transformOrigin:f}=i;let h=!1,m=!1;for(const p in l){const v=l[p];if(Aa.has(p)){h=!0;continue}else if(pg(p)){c[p]=v;continue}else{const b=Mc(v,go[p]);p.startsWith("origin")?(m=!0,f[p]=b):s[p]=b}}if(l.transform||(h||o?s.transform=aj(l,i.transform,o):s.transform&&(s.transform="none")),m){const{originX:p="50%",originY:v="50%",originZ:b=0}=f;s.transformOrigin=`${p} ${v} ${b}`}}function sy(i,{style:l,vars:o},s,c){const f=i.style;let h;for(h in l)f[h]=l[h];c==null||c.applyProjectionStyles(f,s);for(h in o)f.setProperty(h,o[h])}function ep(i,l){return l.max===l.min?0:i/(l.max-l.min)*100}const xl={correct:(i,l)=>{if(!l.target)return i;if(typeof i=="string")if(I.test(i))i=parseFloat(i);else return i;const o=ep(i,l.target.x),s=ep(i,l.target.y);return`${o}% ${s}%`}},lj={correct:(i,{treeScale:l,projectionDelta:o})=>{const s=i,c=Je.parse(i);if(c.length>5)return s;const f=Je.createTransformer(i),h=typeof c[0]!="number"?1:0,m=o.x.scale*l.x,p=o.y.scale*l.y;c[0+h]/=m,c[1+h]/=p;const v=Rt(m,p,.5);return typeof c[2+h]=="number"&&(c[2+h]/=v),typeof c[3+h]=="number"&&(c[3+h]/=v),f(c)}},Rc={borderRadius:{...xl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:xl,borderTopRightRadius:xl,borderBottomLeftRadius:xl,borderBottomRightRadius:xl,boxShadow:lj};function oy(i,{layout:l,layoutId:o}){return Aa.has(i)||i.startsWith("origin")||(l||o!==void 0)&&(!!Rc[i]||i==="opacity")}function ch(i,l,o){var h;const s=i.style,c=l==null?void 0:l.style,f={};if(!s)return f;for(const m in s)(oe(s[m])||c&&oe(c[m])||oy(m,i)||((h=o==null?void 0:o.getValue(m))==null?void 0:h.liveStyle)!==void 0)&&(f[m]=s[m]);return f}function sj(i){return window.getComputedStyle(i)}class oj extends ey{constructor(){super(...arguments),this.type="html",this.renderInstance=sy}readValueFromInstance(l,o){var s;if(Aa.has(o))return(s=this.projection)!=null&&s.isProjecting?yc(o):C1(l,o);{const c=sj(l),f=(pg(o)?c.getPropertyValue(o):c[o])||0;return typeof f=="string"?f.trim():f}}measureInstanceViewportBox(l,{transformPagePoint:o}){return ly(l,o)}build(l,o,s){uh(l,o,s.transformTemplate)}scrapeMotionValuesFromProps(l,o,s){return ch(l,o,s)}}const rj={offset:"stroke-dashoffset",array:"stroke-dasharray"},uj={offset:"strokeDashoffset",array:"strokeDasharray"};function cj(i,l,o=1,s=0,c=!0){i.pathLength=1;const f=c?rj:uj;i[f.offset]=`${-s}`,i[f.array]=`${l} ${o}`}const hj=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ry(i,{attrX:l,attrY:o,attrScale:s,pathLength:c,pathSpacing:f=1,pathOffset:h=0,...m},p,v,b){if(uh(i,m,v),p){i.style.viewBox&&(i.attrs.viewBox=i.style.viewBox);return}i.attrs=i.style,i.style={};const{attrs:x,style:S}=i;x.transform&&(S.transform=x.transform,delete x.transform),(S.transform||x.transformOrigin)&&(S.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),S.transform&&(S.transformBox=(b==null?void 0:b.transformBox)??"fill-box",delete x.transformBox);for(const A of hj)x[A]!==void 0&&(S[A]=x[A],delete x[A]);l!==void 0&&(x.x=l),o!==void 0&&(x.y=o),s!==void 0&&(x.scale=s),c!==void 0&&cj(x,c,f,h,!1)}const uy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),cy=i=>typeof i=="string"&&i.toLowerCase()==="svg";function fj(i,l,o,s){sy(i,l,void 0,s);for(const c in l.attrs)i.setAttribute(uy.has(c)?c:ih(c),l.attrs[c])}function hy(i,l,o){const s=ch(i,l,o);for(const c in i)if(oe(i[c])||oe(l[c])){const f=ja.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;s[f]=i[c]}return s}class dj extends ey{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=$t}getBaseTargetFromProps(l,o){return l[o]}readValueFromInstance(l,o){if(Aa.has(o)){const s=Qg(o);return s&&s.default||0}return o=uy.has(o)?o:ih(o),l.getAttribute(o)}scrapeMotionValuesFromProps(l,o,s){return hy(l,o,s)}build(l,o,s){ry(l,o,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(l,o,s,c){fj(l,o,s,c)}mount(l){this.isSVGTag=cy(l.tagName),super.mount(l)}}const mj=rh.length;function fy(i){if(!i)return;if(!i.isControllingVariants){const o=i.parent?fy(i.parent)||{}:{};return i.props.initial!==void 0&&(o.initial=i.props.initial),o}const l={};for(let o=0;o<mj;o++){const s=rh[o],c=i.props[s];(Ml(c)||c===!1)&&(l[s]=c)}return l}function dy(i,l){if(!Array.isArray(l))return!1;const o=l.length;if(o!==i.length)return!1;for(let s=0;s<o;s++)if(l[s]!==i[s])return!1;return!0}const vj=[...oh].reverse(),pj=oh.length;function gj(i){return l=>Promise.all(l.map(({animation:o,options:s})=>mS(i,o,s)))}function yj(i){let l=gj(i),o=np(),s=!0,c=!1;const f=v=>(b,x)=>{var A;const S=Di(i,x,v==="exit"?(A=i.presenceContext)==null?void 0:A.custom:void 0);if(S){const{transition:C,transitionEnd:B,...O}=S;b={...b,...O,...B}}return b};function h(v){l=v(i)}function m(v){const{props:b}=i,x=fy(i.parent)||{},S=[],A=new Set;let C={},B=1/0;for(let z=0;z<pj;z++){const q=vj[z],_=o[q],U=b[q]!==void 0?b[q]:x[q],Q=Ml(U),at=q===v?_.isActive:null;at===!1&&(B=z);let K=U===x[q]&&U!==b[q]&&Q;if(K&&(s||c)&&i.manuallyAnimateOnMount&&(K=!1),_.protectedKeys={...C},!_.isActive&&at===null||!U&&!_.prevProp||To(U)||typeof U=="boolean")continue;if(q==="exit"&&_.isActive&&at!==!0){_.prevResolvedValues&&(C={...C,..._.prevResolvedValues});continue}const J=bj(_.prevProp,U);let nt=J||q===v&&_.isActive&&!K&&Q||z>B&&Q,et=!1;const dt=Array.isArray(U)?U:[U];let $=dt.reduce(f(q),{});at===!1&&($={});const{prevResolvedValues:St={}}=_,yt={...St,...$},vt=F=>{nt=!0,A.has(F)&&(et=!0,A.delete(F)),_.needsAnimating[F]=!0;const rt=i.getValue(F);rt&&(rt.liveStyle=!1)};for(const F in yt){const rt=$[F],mt=St[F];if(C.hasOwnProperty(F))continue;let T=!1;Tc(rt)&&Tc(mt)?T=!dy(rt,mt)||J:T=rt!==mt,T?rt!=null?vt(F):A.add(F):rt!==void 0&&A.has(F)?vt(F):_.protectedKeys[F]=!0}_.prevProp=U,_.prevResolvedValues=$,_.isActive&&(C={...C,...$}),(s||c)&&i.blockInitialAnimation&&(nt=!1);const N=K&&J;nt&&(!N||et)&&S.push(...dt.map(F=>{const rt={type:q};if(typeof F=="string"&&(s||c)&&!N&&i.manuallyAnimateOnMount&&i.parent){const{parent:mt}=i,T=Di(mt,F);if(mt.enteringChildren&&T){const{delayChildren:H}=T.transition||{};rt.delay=kg(mt.enteringChildren,i,H)}}return{animation:F,options:rt}}))}if(A.size){const z={};if(typeof b.initial!="boolean"){const q=Di(i,Array.isArray(b.initial)?b.initial[0]:b.initial);q&&q.transition&&(z.transition=q.transition)}A.forEach(q=>{const _=i.getBaseTarget(q),U=i.getValue(q);U&&(U.liveStyle=!0),z[q]=_??null}),S.push({animation:z})}let O=!!S.length;return s&&(b.initial===!1||b.initial===b.animate)&&!i.manuallyAnimateOnMount&&(O=!1),s=!1,c=!1,O?l(S):Promise.resolve()}function p(v,b){var S;if(o[v].isActive===b)return Promise.resolve();(S=i.variantChildren)==null||S.forEach(A=>{var C;return(C=A.animationState)==null?void 0:C.setActive(v,b)}),o[v].isActive=b;const x=m(v);for(const A in o)o[A].protectedKeys={};return x}return{animateChanges:m,setActive:p,setAnimateFunction:h,getState:()=>o,reset:()=>{o=np(),c=!0}}}function bj(i,l){return typeof l=="string"?l!==i:Array.isArray(l)?!dy(l,i):!1}function Ai(i=!1){return{isActive:i,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function np(){return{animate:Ai(!0),whileInView:Ai(),whileHover:Ai(),whileTap:Ai(),whileDrag:Ai(),whileFocus:Ai(),exit:Ai()}}function Bc(i,l){i.min=l.min,i.max=l.max}function Ke(i,l){Bc(i.x,l.x),Bc(i.y,l.y)}function ip(i,l){i.translate=l.translate,i.scale=l.scale,i.originPoint=l.originPoint,i.origin=l.origin}const my=1e-4,xj=1-my,Sj=1+my,vy=.01,jj=0-vy,Aj=0+vy;function he(i){return i.max-i.min}function Tj(i,l,o){return Math.abs(i-l)<=o}function ap(i,l,o,s=.5){i.origin=s,i.originPoint=Rt(l.min,l.max,i.origin),i.scale=he(o)/he(l),i.translate=Rt(o.min,o.max,i.origin)-i.originPoint,(i.scale>=xj&&i.scale<=Sj||isNaN(i.scale))&&(i.scale=1),(i.translate>=jj&&i.translate<=Aj||isNaN(i.translate))&&(i.translate=0)}function wl(i,l,o,s){ap(i.x,l.x,o.x,s?s.originX:void 0),ap(i.y,l.y,o.y,s?s.originY:void 0)}function lp(i,l,o,s=0){const c=s?Rt(o.min,o.max,s):o.min;i.min=c+l.min,i.max=i.min+he(l)}function wj(i,l,o,s){lp(i.x,l.x,o.x,s==null?void 0:s.x),lp(i.y,l.y,o.y,s==null?void 0:s.y)}function sp(i,l,o,s=0){const c=s?Rt(o.min,o.max,s):o.min;i.min=l.min-c,i.max=i.min+he(l)}function xo(i,l,o,s){sp(i.x,l.x,o.x,s==null?void 0:s.x),sp(i.y,l.y,o.y,s==null?void 0:s.y)}function op(i,l,o,s,c){return i-=l,i=bo(i,1/o,s),c!==void 0&&(i=bo(i,1/c,s)),i}function Ej(i,l=0,o=1,s=.5,c,f=i,h=i){if(nn.test(l)&&(l=parseFloat(l),l=Rt(h.min,h.max,l/100)-h.min),typeof l!="number")return;let m=Rt(f.min,f.max,s);i===f&&(m-=l),i.min=op(i.min,l,o,m,c),i.max=op(i.max,l,o,m,c)}function rp(i,l,[o,s,c],f,h){Ej(i,l[o],l[s],l[c],l.scale,f,h)}const Cj=["x","scaleX","originX"],Dj=["y","scaleY","originY"];function up(i,l,o,s){rp(i.x,l,Cj,o?o.x:void 0,s?s.x:void 0),rp(i.y,l,Dj,o?o.y:void 0,s?s.y:void 0)}function cp(i){return i.translate===0&&i.scale===1}function py(i){return cp(i.x)&&cp(i.y)}function hp(i,l){return i.min===l.min&&i.max===l.max}function Mj(i,l){return hp(i.x,l.x)&&hp(i.y,l.y)}function fp(i,l){return Math.round(i.min)===Math.round(l.min)&&Math.round(i.max)===Math.round(l.max)}function gy(i,l){return fp(i.x,l.x)&&fp(i.y,l.y)}function dp(i){return he(i.x)/he(i.y)}function mp(i,l){return i.translate===l.translate&&i.scale===l.scale&&i.originPoint===l.originPoint}function tn(i){return[i("x"),i("y")]}function Nj(i,l,o){let s="";const c=i.x.translate/l.x,f=i.y.translate/l.y,h=(o==null?void 0:o.z)||0;if((c||f||h)&&(s=`translate3d(${c}px, ${f}px, ${h}px) `),(l.x!==1||l.y!==1)&&(s+=`scale(${1/l.x}, ${1/l.y}) `),o){const{transformPerspective:v,rotate:b,pathRotation:x,rotateX:S,rotateY:A,skewX:C,skewY:B}=o;v&&(s=`perspective(${v}px) ${s}`),b&&(s+=`rotate(${b}deg) `),x&&(s+=`rotate(${x}deg) `),S&&(s+=`rotateX(${S}deg) `),A&&(s+=`rotateY(${A}deg) `),C&&(s+=`skewX(${C}deg) `),B&&(s+=`skewY(${B}deg) `)}const m=i.x.scale*l.x,p=i.y.scale*l.y;return(m!==1||p!==1)&&(s+=`scale(${m}, ${p})`),s||"none"}const yy=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],zj=yy.length,vp=i=>typeof i=="string"?parseFloat(i):i,pp=i=>typeof i=="number"||I.test(i);function Vj(i,l,o,s,c,f){c?(i.opacity=Rt(0,o.opacity??1,Rj(s)),i.opacityExit=Rt(l.opacity??1,0,Bj(s))):f&&(i.opacity=Rt(l.opacity??1,o.opacity??1,s));for(let h=0;h<zj;h++){const m=yy[h];let p=gp(l,m),v=gp(o,m);if(p===void 0&&v===void 0)continue;p||(p=0),v||(v=0),p===0||v===0||pp(p)===pp(v)?(i[m]=Math.max(Rt(vp(p),vp(v),s),0),(nn.test(v)||nn.test(p))&&(i[m]+="%")):i[m]=v}(l.rotate||o.rotate)&&(i.rotate=Rt(l.rotate||0,o.rotate||0,s))}function gp(i,l){return i[l]!==void 0?i[l]:i.borderRadius}const Rj=by(0,.5,cg),Bj=by(.5,.95,Ge);function by(i,l,o){return s=>s<i?0:s>l?1:o(Cl(i,l,s))}function Oj(i,l,o){const s=oe(i)?i:ba(i);return s.start(eh("",s,l,o)),s.animation}function Nl(i,l,o,s={passive:!0}){return i.addEventListener(l,o,s),()=>i.removeEventListener(l,o)}const kj=(i,l)=>i.depth-l.depth;class _j{constructor(){this.children=[],this.isDirty=!1}add(l){Yc(this.children,l),this.isDirty=!0}remove(l){ho(this.children,l),this.isDirty=!0}forEach(l){this.isDirty&&this.children.sort(kj),this.isDirty=!1,this.children.forEach(l)}}function Uj(i,l){const o=ce.now(),s=({timestamp:c})=>{const f=c-o;f>=l&&(ei(s),i(f-l))};return Bt.setup(s,!0),()=>ei(s)}function uo(i){return oe(i)?i.get():i}class Lj{constructor(){this.members=[]}add(l){Yc(this.members,l);for(let o=this.members.length-1;o>=0;o--){const s=this.members[o];if(s===l||s===this.lead||s===this.prevLead)continue;const c=s.instance;(!c||c.isConnected===!1)&&!s.snapshot&&(ho(this.members,s),s.unmount())}l.scheduleRender()}remove(l){if(ho(this.members,l),l===this.prevLead&&(this.prevLead=void 0),l===this.lead){const o=this.members[this.members.length-1];o&&this.promote(o)}}relegate(l){var o;for(let s=this.members.indexOf(l)-1;s>=0;s--){const c=this.members[s];if(c.isPresent!==!1&&((o=c.instance)==null?void 0:o.isConnected)!==!1)return this.promote(c),!0}return!1}promote(l,o){var c;const s=this.lead;if(l!==s&&(this.prevLead=s,this.lead=l,l.show(),s)){s.updateSnapshot(),l.scheduleRender();const{layoutDependency:f}=s.options,{layoutDependency:h}=l.options;(f===void 0||f!==h)&&(l.resumeFrom=s,o&&(s.preserveOpacity=!0),s.snapshot&&(l.snapshot=s.snapshot,l.snapshot.latestValues=s.animationValues||s.latestValues),(c=l.root)!=null&&c.isUpdating&&(l.isLayoutDirty=!0)),l.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(l=>{var o,s,c,f,h;(s=(o=l.options).onExitComplete)==null||s.call(o),(h=(c=l.resumingFrom)==null?void 0:(f=c.options).onExitComplete)==null||h.call(f)})}scheduleRender(){this.members.forEach(l=>l.instance&&l.scheduleRender(!1))}removeLeadSnapshot(){var l;(l=this.lead)!=null&&l.snapshot&&(this.lead.snapshot=void 0)}}const co={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ic=["","X","Y","Z"],qj=1e3;let Hj=0;function ac(i,l,o,s){const{latestValues:c}=l;c[i]&&(o[i]=c[i],l.setStaticValue(i,0),s&&(s[i]=0))}function xy(i){if(i.hasCheckedOptimisedAppear=!0,i.root===i)return;const{visualElement:l}=i.options;if(!l)return;const o=Hg(l);if(window.MotionHasOptimisedAnimation(o,"transform")){const{layout:c,layoutId:f}=i.options;window.MotionCancelOptimisedAnimation(o,"transform",Bt,!(c||f))}const{parent:s}=i;s&&!s.hasCheckedOptimisedAppear&&xy(s)}function Sy({attachResizeListener:i,defaultParent:l,measureScroll:o,checkIsScrollRoot:s,resetTransform:c}){return class{constructor(h={},m=l==null?void 0:l()){this.id=Hj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Xj),this.nodes.forEach(Wj),this.nodes.forEach($j),this.nodes.forEach(Qj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=h,this.root=m?m.root||m:this,this.path=m?[...m.path,m]:[],this.parent=m,this.depth=m?m.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new _j)}addEventListener(h,m){return this.eventHandlers.has(h)||this.eventHandlers.set(h,new Xc),this.eventHandlers.get(h).add(m)}notifyListeners(h,...m){const p=this.eventHandlers.get(h);p&&p.notify(...m)}hasListeners(h){return this.eventHandlers.has(h)}mount(h){if(this.instance)return;this.isSVG=sh(h)&&!GS(h),this.instance=h;const{layoutId:m,layout:p,visualElement:v}=this.options;if(v&&!v.current&&v.mount(h),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||m)&&(this.isLayoutDirty=!0),i){let b,x=0;const S=()=>this.root.updateBlockedByResize=!1;Bt.read(()=>{x=window.innerWidth}),i(h,()=>{const A=window.innerWidth;A!==x&&(x=A,this.root.updateBlockedByResize=!0,b&&b(),b=Uj(S,250),co.hasAnimatedSinceResize&&(co.hasAnimatedSinceResize=!1,this.nodes.forEach(xp)))})}m&&this.root.registerSharedNode(m,this),this.options.animate!==!1&&v&&(m||p)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeLayoutChanged:S,layout:A})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const C=this.options.transition||v.getDefaultTransition()||nA,{onLayoutAnimationStart:B,onLayoutAnimationComplete:O}=v.getProps(),z=!this.targetLayout||!gy(this.targetLayout,A),q=!x&&S;if(this.options.layoutRoot||this.resumeFrom||q||x&&(z||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...th(C,"layout"),onPlay:B,onComplete:O};(v.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(b,q,_.path)}else x||xp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=A})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const h=this.getStack();h&&h.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ei(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Pj),this.animationId++)}getTransformTemplate(){const{visualElement:h}=this.options;return h&&h.getProps().transformTemplate}willUpdate(h=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&xy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let b=0;b<this.path.length;b++){const x=this.path[b];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:m,layout:p}=this.options;if(m===void 0&&!p)return;const v=this.getTransformTemplate();this.prevTransformTemplateValue=v?v(this.latestValues,""):void 0,this.updateSnapshot(),h&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(Kj),this.nodes.forEach(yp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(bp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Fj),this.nodes.forEach(Jj),this.nodes.forEach(Yj),this.nodes.forEach(Gj)):this.nodes.forEach(bp),this.clearAllSnapshots();const m=ce.now();se.delta=an(0,1e3/60,m-se.timestamp),se.timestamp=m,se.isProcessing=!0,Ju.update.process(se),Ju.preRender.process(se),Ju.render.process(se),se.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ah.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Zj),this.sharedNodes.forEach(Ij)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Bt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Bt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!he(this.snapshot.measuredBox.x)&&!he(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const h=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=$t()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:m}=this.options;m&&m.notify("LayoutMeasure",this.layout.layoutBox,h?h.layoutBox:void 0)}updateScroll(h="measure"){let m=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===h&&(m=!1),m&&this.instance){const p=s(this.instance);this.scroll={animationId:this.root.animationId,phase:h,isRoot:p,offset:o(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!c)return;const h=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,m=this.projectionDelta&&!py(this.projectionDelta),p=this.getTransformTemplate(),v=p?p(this.latestValues,""):void 0,b=v!==this.prevTransformTemplateValue;h&&this.instance&&(m||Ti(this.latestValues)||b)&&(c(this.instance,v),this.shouldResetTransform=!1,this.scheduleRender())}measure(h=!0){const m=this.measurePageBox();let p=this.removeElementScroll(m);return h&&(p=this.removeTransform(p)),iA(p),{animationId:this.root.animationId,measuredBox:m,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var v;const{visualElement:h}=this.options;if(!h)return $t();const m=h.measureViewportBox();if(!(((v=this.scroll)==null?void 0:v.wasRoot)||this.path.some(aA))){const{scroll:b}=this.root;b&&(en(m.x,b.offset.x),en(m.y,b.offset.y))}return m}removeElementScroll(h){var p;const m=$t();if(Ke(m,h),(p=this.scroll)!=null&&p.wasRoot)return m;for(let v=0;v<this.path.length;v++){const b=this.path[v],{scroll:x,options:S}=b;b!==this.root&&x&&S.layoutScroll&&(x.wasRoot&&Ke(m,h),en(m.x,x.offset.x),en(m.y,x.offset.y))}return m}applyTransform(h,m=!1,p){var b,x;const v=p||$t();Ke(v,h);for(let S=0;S<this.path.length;S++){const A=this.path[S];!m&&A.options.layoutScroll&&A.scroll&&A!==A.root&&(en(v.x,-A.scroll.offset.x),en(v.y,-A.scroll.offset.y)),Ti(A.latestValues)&&ro(v,A.latestValues,(b=A.layout)==null?void 0:b.layoutBox)}return Ti(this.latestValues)&&ro(v,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),v}removeTransform(h){var p;const m=$t();Ke(m,h);for(let v=0;v<this.path.length;v++){const b=this.path[v];if(!Ti(b.latestValues))continue;let x;b.instance&&(zc(b.latestValues)&&b.updateSnapshot(),x=$t(),Ke(x,b.measurePageBox())),up(m,b.latestValues,(p=b.snapshot)==null?void 0:p.layoutBox,x)}return Ti(this.latestValues)&&up(m,this.latestValues),m}setTargetDelta(h){this.targetDelta=h,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(h){this.options={...this.options,...h,crossfade:h.crossfade!==void 0?h.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==se.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(h=!1){var A;const m=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=m.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=m.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=m.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==m;if(!(h||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(A=this.parent)!=null&&A.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!this.layout||!(b||x))return;this.resolvedRelativeTargetAt=se.timestamp;const S=this.getClosestProjectingParent();S&&this.linkedParentVersion!==S.layoutVersion&&!S.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&S&&S.layout?this.createRelativeTarget(S,this.layout.layoutBox,S.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=$t(),this.targetWithTransforms=$t()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),wj(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ke(this.target,this.layout.layoutBox),ay(this.target,this.targetDelta)):Ke(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&S&&!!S.resumingFrom==!!this.resumingFrom&&!S.options.layoutScroll&&S.target&&this.animationProgress!==1?this.createRelativeTarget(S,this.target,S.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||zc(this.parent.latestValues)||iy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(h,m,p){this.relativeParent=h,this.linkedParentVersion=h.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=$t(),this.relativeTargetOrigin=$t(),xo(this.relativeTargetOrigin,m,p,this.options.layoutAnchor||void 0),Ke(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var C;const h=this.getLead(),m=!!this.resumingFrom||this!==h;let p=!0;if((this.isProjectionDirty||(C=this.parent)!=null&&C.isProjectionDirty)&&(p=!1),m&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===se.timestamp&&(p=!1),p)return;const{layout:v,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||b))return;Ke(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,S=this.treeScale.y;tj(this.layoutCorrected,this.treeScale,this.path,m),h.layout&&!h.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(h.target=h.layout.layoutBox,h.targetWithTransforms=$t());const{target:A}=h;if(!A){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ip(this.prevProjectionDelta.x,this.projectionDelta.x),ip(this.prevProjectionDelta.y,this.projectionDelta.y)),wl(this.projectionDelta,this.layoutCorrected,A,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==S||!mp(this.projectionDelta.x,this.prevProjectionDelta.x)||!mp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",A))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(h=!0){var m;if((m=this.options.visualElement)==null||m.scheduleRender(),h){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ga(),this.projectionDelta=ga(),this.projectionDeltaWithTransform=ga()}setAnimationOrigin(h,m=!1,p){const v=this.snapshot,b=v?v.latestValues:{},x={...this.latestValues},S=ga();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!m;const A=$t(),C=v?v.source:void 0,B=this.layout?this.layout.source:void 0,O=C!==B,z=this.getStack(),q=!z||z.members.length<=1,_=!!(O&&!q&&this.options.crossfade===!0&&!this.path.some(eA));this.animationProgress=0;let U;const Q=p==null?void 0:p.interpolateProjection(h);this.mixTargetDelta=at=>{const K=at/1e3,J=Q==null?void 0:Q(K);J?(S.x.translate=J.x,S.x.scale=Rt(h.x.scale,1,K),S.x.origin=h.x.origin,S.x.originPoint=h.x.originPoint,S.y.translate=J.y,S.y.scale=Rt(h.y.scale,1,K),S.y.origin=h.y.origin,S.y.originPoint=h.y.originPoint):(Sp(S.x,h.x,K),Sp(S.y,h.y,K)),this.setTargetDelta(S),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xo(A,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),tA(this.relativeTarget,this.relativeTargetOrigin,A,K),U&&Mj(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=$t()),Ke(U,this.relativeTarget)),O&&(this.animationValues=x,Vj(x,b,this.latestValues,K,_,q)),J&&J.rotate!==void 0&&(this.animationValues||(this.animationValues=x),this.animationValues.pathRotation=J.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=K},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(h){var m,p,v;this.notifyListeners("animationStart"),(m=this.currentAnimation)==null||m.stop(),(v=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||v.stop(),this.pendingAnimation&&(ei(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Bt.update(()=>{co.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ba(0)),this.motionValue.jump(0,!1),this.currentAnimation=Oj(this.motionValue,[0,1e3],{...h,velocity:0,isSync:!0,onUpdate:b=>{this.mixTargetDelta(b),h.onUpdate&&h.onUpdate(b)},onStop:()=>{},onComplete:()=>{h.onComplete&&h.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const h=this.getStack();h&&h.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(qj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const h=this.getLead();let{targetWithTransforms:m,target:p,layout:v,latestValues:b}=h;if(!(!m||!p||!v)){if(this!==h&&this.layout&&v&&jy(this.options.animationType,this.layout.layoutBox,v.layoutBox)){p=this.target||$t();const x=he(this.layout.layoutBox.x);p.x.min=h.target.x.min,p.x.max=p.x.min+x;const S=he(this.layout.layoutBox.y);p.y.min=h.target.y.min,p.y.max=p.y.min+S}Ke(m,p),ro(m,b),wl(this.projectionDeltaWithTransform,this.layoutCorrected,m,b)}}registerSharedNode(h,m){this.sharedNodes.has(h)||this.sharedNodes.set(h,new Lj),this.sharedNodes.get(h).add(m);const v=m.options.initialPromotionConfig;m.promote({transition:v?v.transition:void 0,preserveFollowOpacity:v&&v.shouldPreserveFollowOpacity?v.shouldPreserveFollowOpacity(m):void 0})}isLead(){const h=this.getStack();return h?h.lead===this:!0}getLead(){var m;const{layoutId:h}=this.options;return h?((m=this.getStack())==null?void 0:m.lead)||this:this}getPrevLead(){var m;const{layoutId:h}=this.options;return h?(m=this.getStack())==null?void 0:m.prevLead:void 0}getStack(){const{layoutId:h}=this.options;if(h)return this.root.sharedNodes.get(h)}promote({needsReset:h,transition:m,preserveFollowOpacity:p}={}){const v=this.getStack();v&&v.promote(this,p),h&&(this.projectionDelta=void 0,this.needsReset=!0),m&&this.setOptions({transition:m})}relegate(){const h=this.getStack();return h?h.relegate(this):!1}resetSkewAndRotation(){const{visualElement:h}=this.options;if(!h)return;let m=!1;const{latestValues:p}=h;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(m=!0),!m)return;const v={};p.z&&ac("z",h,v,this.animationValues);for(let b=0;b<ic.length;b++)ac(`rotate${ic[b]}`,h,v,this.animationValues),ac(`skew${ic[b]}`,h,v,this.animationValues);h.render();for(const b in v)h.setStaticValue(b,v[b]),this.animationValues&&(this.animationValues[b]=v[b]);h.scheduleRender()}applyProjectionStyles(h,m){if(!this.instance||this.isSVG)return;if(!this.isVisible){h.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,h.visibility="",h.opacity="",h.pointerEvents=uo(m==null?void 0:m.pointerEvents)||"",h.transform=p?p(this.latestValues,""):"none";return}const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){this.options.layoutId&&(h.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,h.pointerEvents=uo(m==null?void 0:m.pointerEvents)||""),this.hasProjected&&!Ti(this.latestValues)&&(h.transform=p?p({},""):"none",this.hasProjected=!1);return}h.visibility="";const b=v.animationValues||v.latestValues;this.applyTransformsToTarget();let x=Nj(this.projectionDeltaWithTransform,this.treeScale,b);p&&(x=p(b,x)),h.transform=x;const{x:S,y:A}=this.projectionDelta;h.transformOrigin=`${S.origin*100}% ${A.origin*100}% 0`,v.animationValues?h.opacity=v===this?b.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:b.opacityExit:h.opacity=v===this?b.opacity!==void 0?b.opacity:"":b.opacityExit!==void 0?b.opacityExit:0;for(const C in Rc){if(b[C]===void 0)continue;const{correct:B,applyTo:O,isCSSVariable:z}=Rc[C],q=x==="none"?b[C]:B(b[C],v);if(O){const _=O.length;for(let U=0;U<_;U++)h[O[U]]=q}else z?this.options.visualElement.renderState.vars[C]=q:h[C]=q}this.options.layoutId&&(h.pointerEvents=v===this?uo(m==null?void 0:m.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(h=>{var m;return(m=h.currentAnimation)==null?void 0:m.stop()}),this.root.nodes.forEach(yp),this.root.sharedNodes.clear()}}}function Yj(i){i.updateLayout()}function Gj(i){var o;const l=((o=i.resumeFrom)==null?void 0:o.snapshot)||i.snapshot;if(i.isLead()&&i.layout&&l&&i.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:c}=i.layout,{animationType:f}=i.options,h=l.source!==i.layout.source;if(f==="size")tn(x=>{const S=h?l.measuredBox[x]:l.layoutBox[x],A=he(S);S.min=s[x].min,S.max=S.min+A});else if(f==="x"||f==="y"){const x=f==="x"?"y":"x";Bc(h?l.measuredBox[x]:l.layoutBox[x],s[x])}else jy(f,l.layoutBox,s)&&tn(x=>{const S=h?l.measuredBox[x]:l.layoutBox[x],A=he(s[x]);S.max=S.min+A,i.relativeTarget&&!i.currentAnimation&&(i.isProjectionDirty=!0,i.relativeTarget[x].max=i.relativeTarget[x].min+A)});const m=ga();wl(m,s,l.layoutBox);const p=ga();h?wl(p,i.applyTransform(c,!0),l.measuredBox):wl(p,s,l.layoutBox);const v=!py(m);let b=!1;if(!i.resumeFrom){const x=i.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:S,layout:A}=x;if(S&&A){const C=i.options.layoutAnchor||void 0,B=$t();xo(B,l.layoutBox,S.layoutBox,C);const O=$t();xo(O,s,A.layoutBox,C),gy(B,O)||(b=!0),x.options.layoutRoot&&(i.relativeTarget=O,i.relativeTargetOrigin=B,i.relativeParent=x)}}}i.notifyListeners("didUpdate",{layout:s,snapshot:l,delta:p,layoutDelta:m,hasLayoutChanged:v,hasRelativeLayoutChanged:b})}else if(i.isLead()){const{onExitComplete:s}=i.options;s&&s()}i.options.transition=void 0}function Xj(i){i.parent&&(i.isProjecting()||(i.isProjectionDirty=i.parent.isProjectionDirty),i.isSharedProjectionDirty||(i.isSharedProjectionDirty=!!(i.isProjectionDirty||i.parent.isProjectionDirty||i.parent.isSharedProjectionDirty)),i.isTransformDirty||(i.isTransformDirty=i.parent.isTransformDirty))}function Qj(i){i.isProjectionDirty=i.isSharedProjectionDirty=i.isTransformDirty=!1}function Zj(i){i.clearSnapshot()}function yp(i){i.clearMeasurements()}function Kj(i){i.isLayoutDirty=!0,i.updateLayout()}function bp(i){i.isLayoutDirty=!1}function Fj(i){i.isAnimationBlocked&&i.layout&&!i.isLayoutDirty&&(i.snapshot=i.layout,i.isLayoutDirty=!0)}function Jj(i){const{visualElement:l}=i.options;l&&l.getProps().onBeforeLayoutMeasure&&l.notify("BeforeLayoutMeasure"),i.resetTransform()}function xp(i){i.finishAnimation(),i.targetDelta=i.relativeTarget=i.target=void 0,i.isProjectionDirty=!0}function Wj(i){i.resolveTargetDelta()}function $j(i){i.calcProjection()}function Pj(i){i.resetSkewAndRotation()}function Ij(i){i.removeLeadSnapshot()}function Sp(i,l,o){i.translate=Rt(l.translate,0,o),i.scale=Rt(l.scale,1,o),i.origin=l.origin,i.originPoint=l.originPoint}function jp(i,l,o,s){i.min=Rt(l.min,o.min,s),i.max=Rt(l.max,o.max,s)}function tA(i,l,o,s){jp(i.x,l.x,o.x,s),jp(i.y,l.y,o.y,s)}function eA(i){return i.animationValues&&i.animationValues.opacityExit!==void 0}const nA={duration:.45,ease:[.4,0,.1,1]},Ap=i=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(i),Tp=Ap("applewebkit/")&&!Ap("chrome/")?Math.round:Ge;function wp(i){i.min=Tp(i.min),i.max=Tp(i.max)}function iA(i){wp(i.x),wp(i.y)}function jy(i,l,o){return i==="position"||i==="preserve-aspect"&&!Tj(dp(l),dp(o),.2)}function aA(i){var l;return i!==i.root&&((l=i.scroll)==null?void 0:l.wasRoot)}const lA=Sy({attachResizeListener:(i,l)=>Nl(i,"resize",l),measureScroll:()=>{var i,l;return{x:document.documentElement.scrollLeft||((i=document.body)==null?void 0:i.scrollLeft)||0,y:document.documentElement.scrollTop||((l=document.body)==null?void 0:l.scrollTop)||0}},checkIsScrollRoot:()=>!0}),lc={current:void 0},Ay=Sy({measureScroll:i=>({x:i.scrollLeft,y:i.scrollTop}),defaultParent:()=>{if(!lc.current){const i=new lA({});i.mount(window),i.setOptions({layoutScroll:!0}),lc.current=i}return lc.current},resetTransform:(i,l)=>{i.style.transform=l!==void 0?l:"none"},checkIsScrollRoot:i=>window.getComputedStyle(i).position==="fixed"}),hh=G.createContext({transformPagePoint:i=>i,isStatic:!1,reducedMotion:"never"});function Ep(i,l){if(typeof i=="function")return i(l);i!=null&&(i.current=l)}function sA(...i){return l=>{let o=!1;const s=i.map(c=>{const f=Ep(c,l);return!o&&typeof f=="function"&&(o=!0),f});if(o)return()=>{for(let c=0;c<s.length;c++){const f=s[c];typeof f=="function"?f():Ep(i[c],null)}}}}function oA(...i){return G.useCallback(sA(...i),i)}class rA extends G.Component{getSnapshotBeforeUpdate(l){const o=this.props.childRef.current;if(ao(o)&&l.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=o.offsetParent,c=ao(s)&&s.offsetWidth||0,f=ao(s)&&s.offsetHeight||0,h=getComputedStyle(o),m=this.props.sizeRef.current;m.height=parseFloat(h.height),m.width=parseFloat(h.width),m.top=o.offsetTop,m.left=o.offsetLeft,m.right=c-m.width-m.left,m.bottom=f-m.height-m.top,m.direction=h.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function uA({children:i,isPresent:l,anchorX:o,anchorY:s,root:c,pop:f}){var S;const h=G.useId(),m=G.useRef(null),p=G.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:v}=G.useContext(hh),b=((S=i.props)==null?void 0:S.ref)??(i==null?void 0:i.ref),x=oA(m,b);return G.useInsertionEffect(()=>{const{width:A,height:C,top:B,left:O,right:z,bottom:q,direction:_}=p.current;if(l||f===!1||!m.current||!A||!C)return;const U=_==="rtl",Q=o==="left"?U?`right: ${z}`:`left: ${O}`:U?`left: ${O}`:`right: ${z}`,at=s==="bottom"?`bottom: ${q}`:`top: ${B}`;m.current.dataset.motionPopId=h;const K=document.createElement("style");v&&(K.nonce=v);const J=c??document.head;return J.appendChild(K),K.sheet&&K.sheet.insertRule(`
          [data-motion-pop-id="${h}"] {
            position: absolute !important;
            width: ${A}px !important;
            height: ${C}px !important;
            ${Q}px !important;
            ${at}px !important;
          }
        `),()=>{var nt;(nt=m.current)==null||nt.removeAttribute("data-motion-pop-id"),J.contains(K)&&J.removeChild(K)}},[l]),g.jsx(rA,{isPresent:l,childRef:m,sizeRef:p,pop:f,children:f===!1?i:G.cloneElement(i,{ref:x})})}const cA=({children:i,initial:l,isPresent:o,onExitComplete:s,custom:c,presenceAffectsLayout:f,mode:h,anchorX:m,anchorY:p,root:v})=>{const b=Hc(hA),x=G.useId();let S=!0,A=G.useMemo(()=>(S=!1,{id:x,initial:l,isPresent:o,custom:c,onExitComplete:C=>{b.set(C,!0);for(const B of b.values())if(!B)return;s&&s()},register:C=>(b.set(C,!1),()=>b.delete(C))}),[o,b,s]);return f&&S&&(A={...A}),G.useMemo(()=>{b.forEach((C,B)=>b.set(B,!1))},[o]),G.useEffect(()=>{!o&&!b.size&&s&&s()},[o]),i=g.jsx(uA,{pop:h==="popLayout",isPresent:o,anchorX:m,anchorY:p,root:v,children:i}),g.jsx(jo.Provider,{value:A,children:i})};function hA(){return new Map}function Ty(i=!0){const l=G.useContext(jo);if(l===null)return[!0,null];const{isPresent:o,onExitComplete:s,register:c}=l,f=G.useId();G.useEffect(()=>{if(i)return c(f)},[i]);const h=G.useCallback(()=>i&&s&&s(f),[f,s,i]);return!o&&s?[!1,h]:[!0]}const to=i=>i.key||"";function Cp(i){const l=[];return G.Children.forEach(i,o=>{G.isValidElement(o)&&l.push(o)}),l}const Oc=({children:i,custom:l,initial:o=!0,onExitComplete:s,presenceAffectsLayout:c=!0,mode:f="sync",propagate:h=!1,anchorX:m="left",anchorY:p="top",root:v})=>{const[b,x]=Ty(h),S=G.useMemo(()=>Cp(i),[i]),A=h&&!b?[]:S.map(to),C=G.useRef(!0),B=G.useRef(S),O=Hc(()=>new Map),z=G.useRef(new Set),[q,_]=G.useState(S),[U,Q]=G.useState(S);Pp(()=>{C.current=!1,B.current=S;for(let J=0;J<U.length;J++){const nt=to(U[J]);A.includes(nt)?(O.delete(nt),z.current.delete(nt)):O.get(nt)!==!0&&O.set(nt,!1)}},[U,A.length,A.join("-")]);const at=[];if(S!==q){let J=[...S];for(let nt=0;nt<U.length;nt++){const et=U[nt],dt=to(et);A.includes(dt)||(J.splice(nt,0,et),at.push(et))}return f==="wait"&&at.length&&(J=at),Q(Cp(J)),_(S),null}const{forceRender:K}=G.useContext(qc);return g.jsx(g.Fragment,{children:U.map(J=>{const nt=to(J),et=h&&!b?!1:S===U||A.includes(nt),dt=()=>{if(z.current.has(nt))return;if(O.has(nt))z.current.add(nt),O.set(nt,!0);else return;let $=!0;O.forEach(St=>{St||($=!1)}),$&&(K==null||K(),Q(B.current),h&&(x==null||x()),s&&s())};return g.jsx(cA,{isPresent:et,initial:!C.current||o?void 0:!1,custom:l,presenceAffectsLayout:c,mode:f,root:v,onExitComplete:et?void 0:dt,anchorX:m,anchorY:p,children:J},nt)})})},wy=G.createContext({strict:!1}),Dp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Mp=!1;function fA(){if(Mp)return;const i={};for(const l in Dp)i[l]={isEnabled:o=>Dp[l].some(s=>!!o[s])};ty(i),Mp=!0}function Ey(){return fA(),WS()}function dA(i){const l=Ey();for(const o in i)l[o]={...l[o],...i[o]};ty(l)}const mA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function So(i){return i.startsWith("while")||i.startsWith("drag")&&i!=="draggable"||i.startsWith("layout")||i.startsWith("onTap")||i.startsWith("onPan")||i.startsWith("onLayout")||mA.has(i)}let Cy=i=>!So(i);function vA(i){typeof i=="function"&&(Cy=l=>l.startsWith("on")?!So(l):i(l))}try{vA(require("@emotion/is-prop-valid").default)}catch{}function pA(i,l,o){const s={};for(const c in i)c==="values"&&typeof i.values=="object"||oe(i[c])||(Cy(c)||o===!0&&So(c)||!l&&!So(c)||i.draggable&&c.startsWith("onDrag"))&&(s[c]=i[c]);return s}const Eo=G.createContext({});function gA(i,l){if(wo(i)){const{initial:o,animate:s}=i;return{initial:o===!1||Ml(o)?o:void 0,animate:Ml(s)?s:void 0}}return i.inherit!==!1?l:{}}function yA(i){const{initial:l,animate:o}=gA(i,G.useContext(Eo));return G.useMemo(()=>({initial:l,animate:o}),[Np(l),Np(o)])}function Np(i){return Array.isArray(i)?i.join(" "):i}const fh=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Dy(i,l,o){for(const s in l)!oe(l[s])&&!oy(s,o)&&(i[s]=l[s])}function bA({transformTemplate:i},l){return G.useMemo(()=>{const o=fh();return uh(o,l,i),Object.assign({},o.vars,o.style)},[l])}function xA(i,l){const o=i.style||{},s={};return Dy(s,o,i),Object.assign(s,bA(i,l)),s}function SA(i,l){const o={},s=xA(i,l);return i.drag&&i.dragListener!==!1&&(o.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=i.drag===!0?"none":`pan-${i.drag==="x"?"y":"x"}`),i.tabIndex===void 0&&(i.onTap||i.onTapStart||i.whileTap)&&(o.tabIndex=0),o.style=s,o}const My=()=>({...fh(),attrs:{}});function jA(i,l,o,s){const c=G.useMemo(()=>{const f=My();return ry(f,l,cy(s),i.transformTemplate,i.style),{...f.attrs,style:{...f.style}}},[l]);if(i.style){const f={};Dy(f,i.style,i),c.style={...f,...c.style}}return c}const AA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function dh(i){return typeof i!="string"||i.includes("-")?!1:!!(AA.indexOf(i)>-1||/[A-Z]/u.test(i))}function TA(i,l,o,{latestValues:s},c,f=!1,h){const p=(h??dh(i)?jA:SA)(l,s,c,i),v=pA(l,typeof i=="string",f),b=i!==G.Fragment?{...v,...p,ref:o}:{},{children:x}=l,S=G.useMemo(()=>oe(x)?x.get():x,[x]);return G.createElement(i,{...b,children:S})}function wA({scrapeMotionValuesFromProps:i,createRenderState:l},o,s,c){return{latestValues:EA(o,s,c,i),renderState:l()}}function EA(i,l,o,s){const c={},f=s(i,{});for(const S in f)c[S]=uo(f[S]);let{initial:h,animate:m}=i;const p=wo(i),v=Pg(i);l&&v&&!p&&i.inherit!==!1&&(h===void 0&&(h=l.initial),m===void 0&&(m=l.animate));let b=o?o.initial===!1:!1;b=b||h===!1;const x=b?m:h;if(x&&typeof x!="boolean"&&!To(x)){const S=Array.isArray(x)?x:[x];for(let A=0;A<S.length;A++){const C=nh(i,S[A]);if(C){const{transitionEnd:B,transition:O,...z}=C;for(const q in z){let _=z[q];if(Array.isArray(_)){const U=b?_.length-1:0;_=_[U]}_!==null&&(c[q]=_)}for(const q in B)c[q]=B[q]}}}return c}const Ny=i=>(l,o)=>{const s=G.useContext(Eo),c=G.useContext(jo),f=()=>wA(i,l,s,c);return o?f():Hc(f)},CA=Ny({scrapeMotionValuesFromProps:ch,createRenderState:fh}),DA=Ny({scrapeMotionValuesFromProps:hy,createRenderState:My}),MA=Symbol.for("motionComponentSymbol");function NA(i,l,o){const s=G.useRef(o);G.useInsertionEffect(()=>{s.current=o});const c=G.useRef(null);return G.useCallback(f=>{var m;f&&((m=i.onMount)==null||m.call(i,f)),l&&(f?l.mount(f):l.unmount());const h=s.current;if(typeof h=="function")if(f){const p=h(f);typeof p=="function"&&(c.current=p)}else c.current?(c.current(),c.current=null):h(f);else h&&(h.current=f)},[l])}const zy=G.createContext({});function ma(i){return i&&typeof i=="object"&&Object.prototype.hasOwnProperty.call(i,"current")}function zA(i,l,o,s,c,f){var _,U;const{visualElement:h}=G.useContext(Eo),m=G.useContext(wy),p=G.useContext(jo),v=G.useContext(hh),b=v.reducedMotion,x=v.skipAnimations,S=G.useRef(null),A=G.useRef(!1);s=s||m.renderer,!S.current&&s&&(S.current=s(i,{visualState:l,parent:h,props:o,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:b,skipAnimations:x,isSVG:f}),A.current&&S.current&&(S.current.manuallyAnimateOnMount=!0));const C=S.current,B=G.useContext(zy);C&&!C.projection&&c&&(C.type==="html"||C.type==="svg")&&VA(S.current,o,c,B);const O=G.useRef(!1);G.useInsertionEffect(()=>{C&&O.current&&C.update(o,p)});const z=o[qg],q=G.useRef(!!z&&typeof window<"u"&&!((_=window.MotionHandoffIsComplete)!=null&&_.call(window,z))&&((U=window.MotionHasOptimisedAnimation)==null?void 0:U.call(window,z)));return Pp(()=>{A.current=!0,C&&(O.current=!0,window.MotionIsMounted=!0,C.updateFeatures(),C.scheduleRenderMicrotask(),q.current&&C.animationState&&C.animationState.animateChanges())}),G.useEffect(()=>{C&&(!q.current&&C.animationState&&C.animationState.animateChanges(),q.current&&(queueMicrotask(()=>{var Q;(Q=window.MotionHandoffMarkAsComplete)==null||Q.call(window,z)}),q.current=!1),C.enteringChildren=void 0)}),C}function VA(i,l,o,s){const{layoutId:c,layout:f,drag:h,dragConstraints:m,layoutScroll:p,layoutRoot:v,layoutAnchor:b,layoutCrossfade:x}=l;i.projection=new o(i.latestValues,l["data-framer-portal-id"]?void 0:Vy(i.parent)),i.projection.setOptions({layoutId:c,layout:f,alwaysMeasureLayout:!!h||m&&ma(m),visualElement:i,animationType:typeof f=="string"?f:"both",initialPromotionConfig:s,crossfade:x,layoutScroll:p,layoutRoot:v,layoutAnchor:b})}function Vy(i){if(i)return i.options.allowProjection!==!1?i.projection:Vy(i.parent)}function sc(i,{forwardMotionProps:l=!1,type:o}={},s,c){s&&dA(s);const f=o?o==="svg":dh(i),h=f?DA:CA;function m(v,b){let x;const S={...G.useContext(hh),...v,layoutId:RA(v)},{isStatic:A}=S,C=yA(v),B=h(v,A);if(!A&&typeof window<"u"){BA();const O=OA(S);x=O.MeasureLayout,C.visualElement=zA(i,B,S,c,O.ProjectionNode,f)}return g.jsxs(Eo.Provider,{value:C,children:[x&&C.visualElement?g.jsx(x,{visualElement:C.visualElement,...S}):null,TA(i,v,NA(B,C.visualElement,b),B,A,l,f)]})}m.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const p=G.forwardRef(m);return p[MA]=i,p}function RA({layoutId:i}){const l=G.useContext(qc).id;return l&&i!==void 0?l+"-"+i:i}function BA(i,l){G.useContext(wy).strict}function OA(i){const l=Ey(),{drag:o,layout:s}=l;if(!o&&!s)return{};const c={...o,...s};return{MeasureLayout:o!=null&&o.isEnabled(i)||s!=null&&s.isEnabled(i)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function kA(i,l){if(typeof Proxy>"u")return sc;const o=new Map,s=(f,h)=>sc(f,h,i,l),c=(f,h)=>s(f,h);return new Proxy(c,{get:(f,h)=>h==="create"?s:(o.has(h)||o.set(h,sc(h,void 0,i,l)),o.get(h))})}const _A=(i,l)=>l.isSVG??dh(i)?new dj(l):new oj(l,{allowProjection:i!==G.Fragment});class UA extends ni{constructor(l){super(l),l.animationState||(l.animationState=yj(l))}updateAnimationControlsSubscription(){const{animate:l}=this.node.getProps();To(l)&&(this.unmountControls=l.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:l}=this.node.getProps(),{animate:o}=this.node.prevProps||{};l!==o&&this.updateAnimationControlsSubscription()}unmount(){var l;this.node.animationState.reset(),(l=this.unmountControls)==null||l.call(this)}}let LA=0;class qA extends ni{constructor(){super(...arguments),this.id=LA++,this.isExitComplete=!1}update(){var f;if(!this.node.presenceContext)return;const{isPresent:l,onExitComplete:o}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||l===s)return;if(l&&s===!1){if(this.isExitComplete){const{initial:h,custom:m}=this.node.getProps();if(typeof h=="string"||typeof h=="object"&&h!==null&&!Array.isArray(h)){const p=Di(this.node,h,m);if(p){const{transition:v,transitionEnd:b,...x}=p;for(const S in x)(f=this.node.getValue(S))==null||f.jump(x[S])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!l);o&&!l&&c.then(()=>{this.isExitComplete=!0,o(this.id)})}mount(){const{register:l,onExitComplete:o}=this.node.presenceContext||{};o&&o(this.id),l&&(this.unmount=l(this.id))}unmount(){}}const HA={animation:{Feature:UA},exit:{Feature:qA}};function Bl(i){return{point:{x:i.pageX,y:i.pageY}}}const YA=i=>l=>lh(l)&&i(l,Bl(l));function El(i,l,o,s){return Nl(i,l,YA(o),s)}const Ry=({current:i})=>i?i.ownerDocument.defaultView:null,zp=(i,l)=>Math.abs(i-l);function GA(i,l){const o=zp(i.x,l.x),s=zp(i.y,l.y);return Math.sqrt(o**2+s**2)}const Vp=new Set(["auto","scroll"]);class By{constructor(l,o,{transformPagePoint:s,contextWindow:c=window,dragSnapToOrigin:f=!1,distanceThreshold:h=3,element:m}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=A=>{this.handleScroll(A.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=eo(this.lastRawMoveEventInfo,this.transformPagePoint));const A=oc(this.lastMoveEventInfo,this.history),C=this.startEvent!==null,B=GA(A.offset,{x:0,y:0})>=this.distanceThreshold;if(!C&&!B)return;const{point:O}=A,{timestamp:z}=se;this.history.push({...O,timestamp:z});const{onStart:q,onMove:_}=this.handlers;C||(q&&q(this.lastMoveEvent,A),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,A)},this.handlePointerMove=(A,C)=>{this.lastMoveEvent=A,this.lastRawMoveEventInfo=C,this.lastMoveEventInfo=eo(C,this.transformPagePoint),Bt.update(this.updatePoint,!0)},this.handlePointerUp=(A,C)=>{this.end();const{onEnd:B,onSessionEnd:O,resumeAnimation:z}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&z&&z(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const q=oc(A.type==="pointercancel"?this.lastMoveEventInfo:eo(C,this.transformPagePoint),this.history);this.startEvent&&B&&B(A,q),O&&O(A,q)},!lh(l))return;this.dragSnapToOrigin=f,this.handlers=o,this.transformPagePoint=s,this.distanceThreshold=h,this.contextWindow=c||window;const p=Bl(l),v=eo(p,this.transformPagePoint),{point:b}=v,{timestamp:x}=se;this.history=[{...b,timestamp:x}];const{onSessionStart:S}=o;S&&S(l,oc(v,this.history)),this.removeListeners=zl(El(this.contextWindow,"pointermove",this.handlePointerMove),El(this.contextWindow,"pointerup",this.handlePointerUp),El(this.contextWindow,"pointercancel",this.handlePointerUp)),m&&this.startScrollTracking(m)}startScrollTracking(l){let o=l.parentElement;for(;o;){const s=getComputedStyle(o);(Vp.has(s.overflowX)||Vp.has(s.overflowY))&&this.scrollPositions.set(o,{x:o.scrollLeft,y:o.scrollTop}),o=o.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(l){const o=this.scrollPositions.get(l);if(!o)return;const s=l===window,c=s?{x:window.scrollX,y:window.scrollY}:{x:l.scrollLeft,y:l.scrollTop},f={x:c.x-o.x,y:c.y-o.y};f.x===0&&f.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=f.x,this.lastMoveEventInfo.point.y+=f.y):this.history.length>0&&(this.history[0].x-=f.x,this.history[0].y-=f.y),this.scrollPositions.set(l,c),Bt.update(this.updatePoint,!0))}updateHandlers(l){this.handlers=l}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ei(this.updatePoint)}}function eo(i,l){return l?{point:l(i.point)}:i}function Rp(i,l){return{x:i.x-l.x,y:i.y-l.y}}function oc({point:i},l){return{point:i,delta:Rp(i,Oy(l)),offset:Rp(i,XA(l)),velocity:QA(l,.1)}}function XA(i){return i[0]}function Oy(i){return i[i.length-1]}function QA(i,l){if(i.length<2)return{x:0,y:0};let o=i.length-1,s=null;const c=Oy(i);for(;o>=0&&(s=i[o],!(c.timestamp-s.timestamp>Ne(l)));)o--;if(!s)return{x:0,y:0};s===i[0]&&i.length>2&&c.timestamp-s.timestamp>Ne(l)*2&&(s=i[1]);const f=Ye(c.timestamp-s.timestamp);if(f===0)return{x:0,y:0};const h={x:(c.x-s.x)/f,y:(c.y-s.y)/f};return h.x===1/0&&(h.x=0),h.y===1/0&&(h.y=0),h}function ZA(i,{min:l,max:o},s){return l!==void 0&&i<l?i=s?Rt(l,i,s.min):Math.max(i,l):o!==void 0&&i>o&&(i=s?Rt(o,i,s.max):Math.min(i,o)),i}function Bp(i,l,o){return{min:l!==void 0?i.min+l:void 0,max:o!==void 0?i.max+o-(i.max-i.min):void 0}}function KA(i,{top:l,left:o,bottom:s,right:c}){return{x:Bp(i.x,o,c),y:Bp(i.y,l,s)}}function Op(i,l){let o=l.min-i.min,s=l.max-i.max;return l.max-l.min<i.max-i.min&&([o,s]=[s,o]),{min:o,max:s}}function FA(i,l){return{x:Op(i.x,l.x),y:Op(i.y,l.y)}}function JA(i,l){let o=.5;const s=he(i),c=he(l);return c>s?o=Cl(l.min,l.max-s,i.min):s>c&&(o=Cl(i.min,i.max-c,l.min)),an(0,1,o)}function WA(i,l){const o={};return l.min!==void 0&&(o.min=l.min-i.min),l.max!==void 0&&(o.max=l.max-i.min),o}const kc=.35;function $A(i=kc){return i===!1?i=0:i===!0&&(i=kc),{x:kp(i,"left","right"),y:kp(i,"top","bottom")}}function kp(i,l,o){return{min:_p(i,l),max:_p(i,o)}}function _p(i,l){return typeof i=="number"?i:i[l]||0}const PA=new WeakMap;class IA{constructor(l){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=$t(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=l}start(l,{snapToCursor:o=!1,distanceThreshold:s}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const f=x=>{o&&this.snapToCursor(Bl(x).point),this.stopAnimation()},h=(x,S)=>{const{drag:A,dragPropagation:C,onDragStart:B}=this.getProps();if(A&&!C&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ES(A),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=S,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tn(z=>{let q=this.getAxisMotionValue(z).get()||0;if(nn.test(q)){const{projection:_}=this.visualElement;if(_&&_.layout){const U=_.layout.layoutBox[z];U&&(q=he(U)*(parseFloat(q)/100))}}this.originPoint[z]=q}),B&&Bt.update(()=>B(x,S),!1,!0),wc(this.visualElement,"transform");const{animationState:O}=this.visualElement;O&&O.setActive("whileDrag",!0)},m=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S;const{dragPropagation:A,dragDirectionLock:C,onDirectionLock:B,onDrag:O}=this.getProps();if(!A&&!this.openDragLock)return;const{offset:z}=S;if(C&&this.currentDirection===null){this.currentDirection=e5(z),this.currentDirection!==null&&B&&B(this.currentDirection);return}this.updateAxis("x",S.point,z),this.updateAxis("y",S.point,z),this.visualElement.render(),O&&Bt.update(()=>O(x,S),!1,!0)},p=(x,S)=>{this.latestPointerEvent=x,this.latestPanInfo=S,this.stop(x,S),this.latestPointerEvent=null,this.latestPanInfo=null},v=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:b}=this.getProps();this.panSession=new By(l,{onSessionStart:f,onStart:h,onMove:m,onSessionEnd:p,resumeAnimation:v},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:b,distanceThreshold:s,contextWindow:Ry(this.visualElement),element:this.visualElement.current})}stop(l,o){const s=l||this.latestPointerEvent,c=o||this.latestPanInfo,f=this.isDragging;if(this.cancel(),!f||!c||!s)return;const{velocity:h}=c;this.startAnimation(h);const{onDragEnd:m}=this.getProps();m&&Bt.postRender(()=>m(s,c))}cancel(){this.isDragging=!1;const{projection:l,animationState:o}=this.visualElement;l&&(l.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),o&&o.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(l,o,s){const{drag:c}=this.getProps();if(!s||!no(l,c,this.currentDirection))return;const f=this.getAxisMotionValue(l);let h=this.originPoint[l]+s[l];this.constraints&&this.constraints[l]&&(h=ZA(h,this.constraints[l],this.elastic[l])),f.set(h)}resolveConstraints(){var f;const{dragConstraints:l,dragElastic:o}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(f=this.visualElement.projection)==null?void 0:f.layout,c=this.constraints;l&&ma(l)?this.constraints||(this.constraints=this.resolveRefConstraints()):l&&s?this.constraints=KA(s.layoutBox,l):this.constraints=!1,this.elastic=$A(o),c!==this.constraints&&!ma(l)&&s&&this.constraints&&!this.hasMutatedConstraints&&tn(h=>{this.constraints!==!1&&this.getAxisMotionValue(h)&&(this.constraints[h]=WA(s.layoutBox[h],this.constraints[h]))})}resolveRefConstraints(){const{dragConstraints:l,onMeasureDragConstraints:o}=this.getProps();if(!l||!ma(l))return!1;const s=l.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;c.root&&(c.root.scroll=void 0,c.root.updateScroll());const f=ej(s,c.root,this.visualElement.getTransformPagePoint());let h=FA(c.layout.layoutBox,f);if(o){const m=o(PS(h));this.hasMutatedConstraints=!!m,m&&(h=ny(m))}return h}startAnimation(l){const{drag:o,dragMomentum:s,dragElastic:c,dragTransition:f,dragSnapToOrigin:h,onDragTransitionEnd:m}=this.getProps(),p=this.constraints||{},v=tn(b=>{if(!no(b,o,this.currentDirection))return;let x=p&&p[b]||{};(h===!0||h===b)&&(x={min:0,max:0});const S=c?200:1e6,A=c?40:1e7,C={type:"inertia",velocity:s?l[b]:0,bounceStiffness:S,bounceDamping:A,timeConstant:750,restDelta:1,restSpeed:10,...f,...x};return this.startAxisValueAnimation(b,C)});return Promise.all(v).then(m)}startAxisValueAnimation(l,o){const s=this.getAxisMotionValue(l);return wc(this.visualElement,l),s.start(eh(l,s,0,o,this.visualElement,!1))}stopAnimation(){tn(l=>this.getAxisMotionValue(l).stop())}getAxisMotionValue(l){const o=`_drag${l.toUpperCase()}`,c=this.visualElement.getProps()[o];return c||this.visualElement.getValue(l,this.visualElement.latestValues[l]??0)}snapToCursor(l){tn(o=>{const{drag:s}=this.getProps();if(!no(o,s,this.currentDirection))return;const{projection:c}=this.visualElement,f=this.getAxisMotionValue(o);if(c&&c.layout){const{min:h,max:m}=c.layout.layoutBox[o],p=f.get()||0;f.set(l[o]-Rt(h,m,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:l,dragConstraints:o}=this.getProps(),{projection:s}=this.visualElement;if(!ma(o)||!s||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};tn(h=>{const m=this.getAxisMotionValue(h);if(m&&this.constraints!==!1){const p=m.get();c[h]=JA({min:p,max:p},this.constraints[h])}});const{transformTemplate:f}=this.visualElement.getProps();this.visualElement.current.style.transform=f?f({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),tn(h=>{if(!no(h,l,null))return;const m=this.getAxisMotionValue(h),{min:p,max:v}=this.constraints[h];m.set(Rt(p,v,c[h]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;PA.set(this.visualElement,this);const l=this.visualElement.current,o=El(l,"pointerdown",v=>{const{drag:b,dragListener:x=!0}=this.getProps(),S=v.target,A=S!==l&&VS(S);b&&x&&!A&&this.start(v)});let s;const c=()=>{const{dragConstraints:v}=this.getProps();ma(v)&&v.current&&(this.constraints=this.resolveRefConstraints(),s||(s=t5(l,v.current,()=>this.scalePositionWithinConstraints())))},{projection:f}=this.visualElement,h=f.addEventListener("measure",c);f&&!f.layout&&(f.root&&f.root.updateScroll(),f.updateLayout()),Bt.read(c);const m=Nl(window,"resize",()=>this.scalePositionWithinConstraints()),p=f.addEventListener("didUpdate",(({delta:v,hasLayoutChanged:b})=>{this.isDragging&&b&&(tn(x=>{const S=this.getAxisMotionValue(x);S&&(this.originPoint[x]+=v[x].translate,S.set(S.get()+v[x].translate))}),this.visualElement.render())}));return()=>{m(),o(),h(),p&&p(),s&&s()}}getProps(){const l=this.visualElement.getProps(),{drag:o=!1,dragDirectionLock:s=!1,dragPropagation:c=!1,dragConstraints:f=!1,dragElastic:h=kc,dragMomentum:m=!0}=l;return{...l,drag:o,dragDirectionLock:s,dragPropagation:c,dragConstraints:f,dragElastic:h,dragMomentum:m}}}function Up(i){let l=!0;return()=>{if(l){l=!1;return}i()}}function t5(i,l,o){const s=Qv(i,Up(o)),c=Qv(l,Up(o));return()=>{s(),c()}}function no(i,l,o){return(l===!0||l===i)&&(o===null||o===i)}function e5(i,l=10){let o=null;return Math.abs(i.y)>l?o="y":Math.abs(i.x)>l&&(o="x"),o}class n5 extends ni{constructor(l){super(l),this.removeGroupControls=Ge,this.removeListeners=Ge,this.controls=new IA(l)}mount(){const{dragControls:l}=this.node.getProps();l&&(this.removeGroupControls=l.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ge}update(){const{dragControls:l}=this.node.getProps(),{dragControls:o}=this.node.prevProps||{};l!==o&&(this.removeGroupControls(),l&&(this.removeGroupControls=l.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const rc=i=>(l,o)=>{i&&Bt.update(()=>i(l,o),!1,!0)};class i5 extends ni{constructor(){super(...arguments),this.removePointerDownListener=Ge}onPointerDown(l){this.session=new By(l,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Ry(this.node)})}createPanHandlers(){const{onPanSessionStart:l,onPanStart:o,onPan:s,onPanEnd:c}=this.node.getProps();return{onSessionStart:rc(l),onStart:rc(o),onMove:rc(s),onEnd:(f,h)=>{delete this.session,c&&Bt.postRender(()=>c(f,h))}}}mount(){this.removePointerDownListener=El(this.node.current,"pointerdown",l=>this.onPointerDown(l))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let uc=!1;class a5 extends G.Component{componentDidMount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:s,layoutId:c}=this.props,{projection:f}=l;f&&(o.group&&o.group.add(f),s&&s.register&&c&&s.register(f),uc&&f.root.didUpdate(),f.addEventListener("animationComplete",()=>{this.safeToRemove()}),f.setOptions({...f.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),co.hasEverUpdated=!0}getSnapshotBeforeUpdate(l){const{layoutDependency:o,visualElement:s,drag:c,isPresent:f}=this.props,{projection:h}=s;return h&&(h.isPresent=f,l.layoutDependency!==o&&h.setOptions({...h.options,layoutDependency:o}),uc=!0,c||l.layoutDependency!==o||o===void 0||l.isPresent!==f?h.willUpdate():this.safeToRemove(),l.isPresent!==f&&(f?h.promote():h.relegate()||Bt.postRender(()=>{const m=h.getStack();(!m||!m.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:l,layoutAnchor:o}=this.props,{projection:s}=l;s&&(s.options.layoutAnchor=o,s.root.didUpdate(),ah.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:l,layoutGroup:o,switchLayoutGroup:s}=this.props,{projection:c}=l;uc=!0,c&&(c.scheduleCheckAfterUnmount(),o&&o.group&&o.group.remove(c),s&&s.deregister&&s.deregister(c))}safeToRemove(){const{safeToRemove:l}=this.props;l&&l()}render(){return null}}function ky(i){const[l,o]=Ty(),s=G.useContext(qc);return g.jsx(a5,{...i,layoutGroup:s,switchLayoutGroup:G.useContext(zy),isPresent:l,safeToRemove:o})}const l5={pan:{Feature:i5},drag:{Feature:n5,ProjectionNode:Ay,MeasureLayout:ky}};function Lp(i,l,o){const{props:s}=i;i.animationState&&s.whileHover&&i.animationState.setActive("whileHover",o==="Start");const c="onHover"+o,f=s[c];f&&Bt.postRender(()=>f(l,Bl(l)))}class s5 extends ni{mount(){const{current:l}=this.node;l&&(this.unmount=DS(l,(o,s)=>(Lp(this.node,s,"Start"),c=>Lp(this.node,c,"End"))))}unmount(){}}class o5 extends ni{constructor(){super(...arguments),this.isActive=!1}onFocus(){let l=!1;try{l=this.node.current.matches(":focus-visible")}catch{l=!0}!l||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=zl(Nl(this.node.current,"focus",()=>this.onFocus()),Nl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function qp(i,l,o){const{props:s}=i;if(i.current instanceof HTMLButtonElement&&i.current.disabled)return;i.animationState&&s.whileTap&&i.animationState.setActive("whileTap",o==="Start");const c="onTap"+(o==="End"?"":o),f=s[c];f&&Bt.postRender(()=>f(l,Bl(l)))}class r5 extends ni{mount(){const{current:l}=this.node;if(!l)return;const{globalTapTarget:o,propagate:s}=this.node.props;this.unmount=BS(l,(c,f)=>(qp(this.node,f,"Start"),(h,{success:m})=>qp(this.node,h,m?"End":"Cancel")),{useGlobalTarget:o,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const _c=new WeakMap,cc=new WeakMap,u5=i=>{const l=_c.get(i.target);l&&l(i)},c5=i=>{i.forEach(u5)};function h5({root:i,...l}){const o=i||document;cc.has(o)||cc.set(o,{});const s=cc.get(o),c=JSON.stringify(l);return s[c]||(s[c]=new IntersectionObserver(c5,{root:i,...l})),s[c]}function f5(i,l,o){const s=h5(l);return _c.set(i,o),s.observe(i),()=>{_c.delete(i),s.unobserve(i)}}const d5={some:0,all:1};class m5 extends ni{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:l={}}=this.node.getProps(),{root:o,margin:s,amount:c="some",once:f}=l,h={root:o?o.current:void 0,rootMargin:s,threshold:typeof c=="number"?c:d5[c]},m=v=>{const{isIntersecting:b}=v;if(this.isInView===b||(this.isInView=b,f&&!b&&this.hasEnteredView))return;b&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",b);const{onViewportEnter:x,onViewportLeave:S}=this.node.getProps(),A=b?x:S;A&&A(v)};this.stopObserver=f5(this.node.current,h,m)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:l,prevProps:o}=this.node;["amount","margin","root"].some(v5(l,o))&&this.startObserver()}unmount(){var l;(l=this.stopObserver)==null||l.call(this),this.hasEnteredView=!1,this.isInView=!1}}function v5({viewport:i={}},{viewport:l={}}={}){return o=>i[o]!==l[o]}const p5={inView:{Feature:m5},tap:{Feature:r5},focus:{Feature:o5},hover:{Feature:s5}},g5={layout:{ProjectionNode:Ay,MeasureLayout:ky}},y5={...HA,...p5,...l5,...g5},jl=kA(y5,_A),hc=["a","ă","â","e","ê","i","o","ô","ơ","u","ư","y"],b5=`word,type,vietnamese
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
relatively,adverb,tương đối`;function _y(){const i=b5.trim().split(`
`),l=[];for(let o=1;o<i.length;o++){const s=i[o].trim();if(!s)continue;const c=s.indexOf(",");if(c===-1)continue;const f=s.indexOf(",",c+1);if(f===-1)continue;const h=s.substring(0,c).trim(),m=s.substring(c+1,f).trim(),p=s.substring(f+1).trim();if(h&&p){if(h.toLowerCase()===p.toLowerCase())continue;l.push({word:h,type:m,vietnamese:p})}}return l}const xa={a:"a",à:"a",á:"a",ả:"a",ã:"a",ạ:"a",ă:"ă",ằ:"ă",ắ:"ă",ẳ:"ă",ẵ:"ă",ặ:"ă",â:"â",ầ:"â",ấ:"â",ẩ:"â",ẫ:"â",ậ:"â",e:"e",è:"e",é:"e",ẻ:"e",ẽ:"e",ẹ:"e",ê:"ê",ề:"ê",ế:"ê",ể:"ê",ễ:"ê",ệ:"ê",i:"i",ì:"i",í:"i",ỉ:"i",ĩ:"i",ị:"i",o:"o",ò:"o",ó:"o",ỏ:"o",õ:"o",ọ:"o",ô:"ô",ồ:"ô",ố:"ô",ổ:"ô",ỗ:"ô",ộ:"ô",ơ:"ơ",ờ:"ơ",ớ:"ơ",ở:"ơ",ỡ:"ơ",ợ:"ơ",u:"u",ù:"u",ú:"u",ủ:"u",ũ:"u",ụ:"u",ư:"ư",ừ:"ư",ứ:"ư",ử:"ư",ữ:"ư",ự:"ư",y:"y",ỳ:"y",ý:"y",ỷ:"y",ỹ:"y",ỵ:"y"};function x5(i){const l=i.normalize("NFC").toLowerCase(),o=new Set;for(const s of l)xa[s]&&o.add(xa[s]);return Array.from(o)}function S5(i){const l=i.normalize("NFC");let o="";for(const s of l)xa[s.toLowerCase()]?o+="_":o+=s;return o}function Hp(i,l=new Set,o=0){if(i.length<2)throw new Error("Not enough vocabulary items.");const s=i.map(x=>{let S=x.vietnamese.length;return x.vietnamese.includes(" ")&&(S+=6),{item:x,score:S,vowels:x5(x.vietnamese)}}).filter(x=>x.vowels.length>0);s.sort((x,S)=>x.score-S.score);const c=s.length,f=Math.max(80,Math.floor(c*.15)),h=Math.min(Math.floor(o/2)*15,c-f),m=Math.max(0,h),p=Math.min(m+f+Math.min(o*5,400),c),v=s.slice(m,p);for(let x=0;x<150;x++){const S=Math.floor(Math.random()*v.length),A=v[S];if(l.has(A.item.word))continue;const C=[...v].sort(()=>Math.random()-.5);for(const B of C){if(A.item.word===B.item.word)continue;const O=A.vowels.filter(z=>B.vowels.includes(z));if(O.length===1){const z=O[0],_=hc.filter(Q=>Q!==z&&!A.vowels.includes(Q)&&!B.vowels.includes(Q)).sort(()=>Math.random()-.5).slice(0,3),U=[z,..._].sort(()=>Math.random()-.5);return{word1:A.item,word2:B.item,word1Vowels:A.vowels,word2Vowels:B.vowels,commonVowels:O,correctAnswer:z,options:U}}}}const b=s.slice(0,p);for(let x=0;x<100;x++){const S=Math.floor(Math.random()*b.length),A=b[S];if(l.has(A.item.word))continue;const C=[...b].sort(()=>Math.random()-.5);for(const B of C){if(A.item.word===B.item.word)continue;const O=A.vowels.filter(z=>B.vowels.includes(z));if(O.length===1){const z=O[0],_=hc.filter(Q=>Q!==z&&!A.vowels.includes(Q)&&!B.vowels.includes(Q)).sort(()=>Math.random()-.5).slice(0,3),U=[z,..._].sort(()=>Math.random()-.5);return{word1:A.item,word2:B.item,word1Vowels:A.vowels,word2Vowels:B.vowels,commonVowels:O,correctAnswer:z,options:U}}}}for(let x=0;x<100;x++){const S=s[Math.floor(Math.random()*c)],A=s[Math.floor(Math.random()*c)];if(S.item.word===A.item.word)continue;const C=S.vowels.filter(B=>A.vowels.includes(B));if(C.length>0){const B=C[0],z=hc.filter(_=>_!==B&&!S.vowels.includes(_)&&!A.vowels.includes(_)).sort(()=>Math.random()-.5).slice(0,3),q=[B,...z].sort(()=>Math.random()-.5);return{word1:S.item,word2:A.item,word1Vowels:S.vowels,word2Vowels:A.vowels,commonVowels:C,correctAnswer:B,options:q}}}throw new Error("Unable to generate a progressive question.")}function Yp(i,l,o){if(!i||!l||!o)return[];const s=i.normalize("NFC").toLowerCase(),c=[];for(const f of o){if(!f||!f.vietnamese)continue;const h=f.vietnamese.normalize("NFC").toLowerCase();if(h===s||h.length!==s.length)continue;let m=!0,p=!1,v="";for(let b=0;b<s.length;b++){const x=s[b],S=h[b];if(xa[x]===l){const C=xa[S];if(C&&C!==l)if(v||(v=C),C===v)p=!0;else{m=!1;break}else{m=!1;break}}else if(x!==S){m=!1;break}}m&&p&&(c.some(b=>b.vietnamese.normalize("NFC").toLowerCase()===h)||c.push(f))}return c}const Gp=[{vowel:"a",name:"A",ipa:"aː",description:'A long oral front vowel, similar to the "a" in English "father" or "car". Pronounced clearly and with open mouth.',examples:[{vietnamese:"bàn tay",english:"hand"},{vietnamese:"cha",english:"father"}]},{vowel:"ă",name:"Ă",ipa:"a",description:'A short equivalent of "a". Sounds similar to the "u" in "cut" or "a" in "hat", but short and clipped. Typically followed by a consonant.',examples:[{vietnamese:"năm",english:"year"},{vietnamese:"mắt",english:"eye"}]},{vowel:"â",name:"Â",ipa:"ə",description:'A short central unrounded vowel, similar to the central "a" in "ago" or the short "u" in "but". Fast and centralized.',examples:[{vietnamese:"đầu",english:"head"},{vietnamese:"sự thật",english:"fact"}]},{vowel:"e",name:"E",ipa:"ɛ",description:'An open-mid front unrounded vowel, sounding like the "e" in "best", "get", or "bed".',examples:[{vietnamese:"mẹ",english:"mother"},{vietnamese:"he",english:"system (hệ thống)"}]},{vowel:"ê",name:"Ê",ipa:"e",description:'A close-mid front unrounded vowel. Sounds like the "e" in "cafe" or French "e", or the "ay" in "say", but without the glide.',examples:[{vietnamese:"bạn bè",english:"friend (bè has e, bạn has a)"},{vietnamese:"thế giới",english:"world"}]},{vowel:"i",name:"I",ipa:"i",description:'Close front unrounded vowel, sounding exactly like the "ee" in "feet", "see" or "meet". High pitch.',examples:[{vietnamese:"tiền",english:"money"},{vietnamese:"chỉ",english:"only"}]},{vowel:"o",name:"O",ipa:"ɔ",description:'An open-mid back rounded vowel. Sounds like the "aw" in "saw" or "o" in "bought" in some accents.',examples:[{vietnamese:"bông hoa",english:"flower (hoa has o, a)"},{vietnamese:"văn phòng",english:"office (phòng has o)"}]},{vowel:"ô",name:"Ô",ipa:"o",description:'Close-mid back rounded vowel. Similar to the "o" in "sole" or "go", but clean and without the "w" glide at the end.',examples:[{vietnamese:"bông hoa",english:"flower (bông has ô)"},{vietnamese:"công ty",english:"company (công has ô)"}]},{vowel:"ơ",name:"Ơ",ipa:"əː",description:'Long central unrounded vowel. Similar to the "er" in British "her" or the "u" in "burn", pronounced with relaxed unrounded lips.',examples:[{vietnamese:"nước",english:"water (nước has ư, ơ)"},{vietnamese:"thời gian",english:"time (thời has ơ)"}]},{vowel:"u",name:"U",ipa:"u",description:'Close back rounded vowel. Sounds identical to the "oo" in "boot" or "tool". Deeply rounded lips.',examples:[{vietnamese:"tuần",english:"week"},{vietnamese:"đất nước",english:"country"}]},{vowel:"ư",name:"Ư",ipa:"ɯ",description:'Close back unrounded vowel. Try pronouncing the "oo" in "boot" but with smile-shaped unrounded lips. Very iconic Vietnamese sound.',examples:[{vietnamese:"người",english:"people"},{vietnamese:"nước",english:"water"}]},{vowel:"y",name:"Y",ipa:"i",description:'Pronounced similarly to "i" (often called "heavy/long i" in Vietnamese). Sounds like the "ee" in "feet" or "y" in "happily".',examples:[{vietnamese:"công ty",english:"company (ty has y)"},{vietnamese:"ngày",english:"day"}]}],Xp={a:"ngang",ă:"ngang",â:"ngang",e:"ngang",ê:"ngang",i:"ngang",o:"ngang",ô:"ngang",ơ:"ngang",u:"ngang",ư:"ngang",y:"ngang",á:"sắc",ắ:"sắc",ấ:"sắc",é:"sắc",ế:"sắc",í:"sắc",ó:"sắc",ố:"sắc",ớ:"sắc",ú:"sắc",ứ:"sắc",ý:"sắc",à:"huyền",ằ:"huyền",ầ:"huyền",è:"huyền",ề:"huyền",ì:"huyền",ò:"huyền",ồ:"huyền",ờ:"huyền",ù:"huyền",ừ:"huyền",ỳ:"huyền",ả:"hỏi",ẳ:"hỏi",ẩ:"hỏi",ẻ:"hỏi",ể:"hỏi",ỉ:"hỏi",ỏ:"hỏi",ổ:"hỏi",ở:"hỏi",ủ:"hỏi",ử:"hỏi",ỷ:"hỏi",ã:"ngã",ẵ:"ngã",ẫ:"ngã",ẽ:"ngã",ễ:"ngã",ĩ:"ngã",õ:"ngã",ỗ:"ngã",ỡ:"ngã",ũ:"ngã",ữ:"ngã",ỹ:"ngã",ạ:"nặng",ặ:"nặng",ậ:"nặng",ẹ:"nặng",ệ:"nặng",ị:"nặng",ọ:"nặng",ộ:"nặng",ợ:"nặng",ụ:"nặng",ự:"nặng",ỵ:"nặng"};function Uc(i){const l=i.normalize("NFC").toLowerCase();for(const o of l)if(Xp[o])return Xp[o];return"ngang"}function Qp(i,l=new Set){const o=h=>!!xa[h.toLowerCase()],s=i.filter(h=>{if(h.vietnamese.includes(" "))return!1;const m=h.vietnamese.normalize("NFC").toLowerCase();let p=0;for(const v of m)o(v)&&p++;return p===1});if(s.length<2)throw new Error("Not enough single-vowel vocabulary items.");const f=[...s.map(h=>{const m=h.vietnamese.normalize("NFC").toLowerCase();let p="",v="",b=!1,x="";for(const A of m)o(A)?(b=!0,x=A):/[a-zđ]/i.test(A)&&(b?v+=A:p+=A);const S=Uc(h.vietnamese);return{item:h,initialCons:p,endingCons:v,tone:S,vowelChar:x}})].sort(()=>Math.random()-.5);for(let h=0;h<f.length;h++){const m=f[h];if(!l.has(m.item.word))for(let p=0;p<f.length;p++){if(h===p)continue;const v=f[p];if(m.tone===v.tone&&m.item.word!==v.item.word){const b=m.initialCons&&m.initialCons===v.initialCons,x=m.endingCons&&m.endingCons===v.endingCons;if(b||x){const S=m.tone,A=["ngang","sắc","huyền","hỏi","ngã","nặng"];return{word1:m.item,word2:v.item,word1Vowels:[m.vowelChar],word2Vowels:[v.vowelChar],commonVowels:[m.vowelChar],correctAnswer:S,options:A,isAccentMode:!0,accentMark:S}}}}}for(let h=0;h<f.length;h++){const m=f[h];if(!l.has(m.item.word))for(let p=0;p<f.length;p++){if(h===p)continue;const v=f[p];if(m.tone===v.tone&&m.item.word!==v.item.word&&(m.initialCons&&v.initialCons&&(m.initialCons.startsWith(v.initialCons[0])||v.initialCons.startsWith(m.initialCons[0]))||m.endingCons===v.endingCons)){const b=m.tone,x=["ngang","sắc","huyền","hỏi","ngã","nặng"];return{word1:m.item,word2:v.item,word1Vowels:[m.vowelChar],word2Vowels:[v.vowelChar],commonVowels:[m.vowelChar],correctAnswer:b,options:x,isAccentMode:!0,accentMark:b}}}}for(let h=0;h<f.length;h++){const m=f[h];if(!l.has(m.item.word))for(let p=0;p<f.length;p++){if(h===p)continue;const v=f[p];if(m.tone===v.tone&&m.item.word!==v.item.word){const b=m.tone,x=["ngang","sắc","huyền","hỏi","ngã","nặng"];return{word1:m.item,word2:v.item,word1Vowels:[m.vowelChar],word2Vowels:[v.vowelChar],commonVowels:[m.vowelChar],correctAnswer:b,options:x,isAccentMode:!0,accentMark:b}}}}throw new Error("Unable to generate similar consonant and tone pair.")}const j5={á:"a",à:"a",ả:"a",ã:"a",ạ:"a",ắ:"ă",ằ:"ă",ẳ:"ă",ẵ:"ă",ặ:"ă",ấ:"â",ầ:"â",ẩ:"â",ẫ:"â",ậ:"â",é:"e",è:"e",ẻ:"e",ẽ:"e",ẹ:"e",ế:"ê",ề:"ê",ể:"ê",ễ:"ê",ệ:"ê",í:"i",ì:"i",ỉ:"i",ĩ:"i",ị:"i",ó:"o",ò:"o",ỏ:"o",õ:"o",ọ:"o",ố:"ô",ồ:"ô",ổ:"ô",ỗ:"ô",ộ:"ô",ớ:"ơ",ờ:"ơ",ở:"ơ",ỡ:"ơ",ợ:"ơ",ú:"u",ù:"u",ủ:"u",ũ:"u",ụ:"u",ứ:"ư",ừ:"ư",ử:"ư",ữ:"ư",ự:"ư",ý:"y",ỳ:"y",ỷ:"y",ỹ:"y",ỵ:"y",Á:"A",À:"A",Ả:"A",Ã:"A",Ạ:"A",Ắ:"Ă",Ằ:"Ă",Ẳ:"Ă",Ẵ:"Ă",Ặ:"Ă",Ấ:"Â",Ầ:"Â",Ẩ:"Â",Ẫ:"Â",Ậ:"Â",É:"E",È:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ế:"Ê",Ề:"Ê",Ể:"Ê",Ễ:"Ê",Ệ:"Ê",Í:"I",Ì:"I",Ỉ:"I",Ĩ:"I",Ị:"I",Ó:"O",Ò:"O",Ỏ:"O",Õ:"O",Ọ:"O",Ố:"Ô",Ồ:"Ô",Ổ:"Ô",Ỗ:"Ô",Ộ:"Ô",Ớ:"Ơ",Ờ:"Ơ",Ở:"Ơ",Ỡ:"Ơ",Ợ:"Ơ",Ú:"U",Ù:"U",Ủ:"U",Ũ:"U",Ụ:"U",Ứ:"Ư",Ừ:"Ư",Ử:"Ư",Ữ:"Ư",Ự:"Ư",Ý:"Y",Ỳ:"Y",Ỷ:"Y",Ỹ:"Y",Ỵ:"Y"};function A5(i){const l=i.normalize("NFC");let o="";for(const s of l)o+=j5[s]||s;return o}let ot=null;function Co(){ot||(ot=new(window.AudioContext||window.webkitAudioContext))}function T5(){try{if(Co(),!ot)return;const i=ot.createOscillator(),l=ot.createOscillator(),o=ot.createGain();i.connect(o),l.connect(o),o.connect(ot.destination),i.frequency.setValueAtTime(523.25,ot.currentTime),l.frequency.setValueAtTime(659.25,ot.currentTime),i.type="triangle",l.type="sine",o.gain.setValueAtTime(0,ot.currentTime),o.gain.linearRampToValueAtTime(.15,ot.currentTime+.05),o.gain.exponentialRampToValueAtTime(.001,ot.currentTime+.35),i.start(ot.currentTime),l.start(ot.currentTime),i.stop(ot.currentTime+.4),l.stop(ot.currentTime+.4)}catch(i){console.warn("Audio Context blocked or not supported",i)}}function Zp(){try{if(Co(),!ot)return;const i=ot.createOscillator(),l=ot.createGain();i.connect(l),l.connect(ot.destination),i.frequency.setValueAtTime(220,ot.currentTime),i.frequency.linearRampToValueAtTime(140,ot.currentTime+.25),i.type="sawtooth",l.gain.setValueAtTime(0,ot.currentTime),l.gain.linearRampToValueAtTime(.1,ot.currentTime+.05),l.gain.exponentialRampToValueAtTime(.001,ot.currentTime+.35),i.start(ot.currentTime),i.stop(ot.currentTime+.4)}catch(i){console.warn("Audio Context blocked or not supported",i)}}function Pn(){try{if(Co(),!ot)return;const i=ot.createOscillator(),l=ot.createGain();i.connect(l),l.connect(ot.destination),i.frequency.setValueAtTime(800,ot.currentTime),i.frequency.exponentialRampToValueAtTime(200,ot.currentTime+.08),i.type="sine",l.gain.setValueAtTime(0,ot.currentTime),l.gain.linearRampToValueAtTime(.05,ot.currentTime+.01),l.gain.exponentialRampToValueAtTime(.001,ot.currentTime+.1),i.start(ot.currentTime),i.stop(ot.currentTime+.12)}catch(i){console.warn("Audio Context blocked or not supported",i)}}function w5(){try{if(Co(),!ot)return;const i=ot.createOscillator(),l=ot.createGain();i.connect(l),l.connect(ot.destination),i.frequency.setValueAtTime(330,ot.currentTime),i.frequency.exponentialRampToValueAtTime(1200,ot.currentTime+.4),i.type="sine",l.gain.setValueAtTime(0,ot.currentTime),l.gain.linearRampToValueAtTime(.12,ot.currentTime+.1),l.gain.exponentialRampToValueAtTime(.001,ot.currentTime+.45),i.start(ot.currentTime),i.stop(ot.currentTime+.5)}catch(i){console.warn("Audio context blocked",i)}}function Jn(i){if(typeof window>"u")return;const l=window.speechSynthesis;if(!l){console.warn("Speech synthesis is not supported on this device/browser.");return}if(typeof SpeechSynthesisUtterance>"u"){console.warn("SpeechSynthesisUtterance is not defined in this browser session.");return}try{if(typeof l.cancel=="function")try{l.cancel()}catch(s){console.warn("SpeechSynthesis cancel failed:",s)}const o=new SpeechSynthesisUtterance(i);if(o.lang="vi-VN",o.onerror=s=>{console.warn("SpeechSynthesisUtterance encountered asynchronous event error:",s)},typeof l.getVoices=="function")try{const s=l.getVoices()||[];let c=s.find(f=>f.lang==="vi-VN"||f.lang==="vi_VN");c||(c=s.find(f=>f.lang.toLowerCase().startsWith("vi"))),c&&(o.voice=c)}catch(s){console.warn("Could not retrieve system speech synthesis voices:",s)}if(o.rate=.82,o.pitch=1.02,typeof l.speak=="function")try{l.speak(o)}catch(s){console.error("SpeechSynthesis speak invocation failed:",s)}else console.warn("SpeechSynthesis speak is not a valid callable function.")}catch(o){console.error("Failed to perform Vietnamese Text to Speech safely",o)}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C5=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(l,o,s)=>s?s.toUpperCase():o.toLowerCase()),Kp=i=>{const l=C5(i);return l.charAt(0).toUpperCase()+l.slice(1)},Uy=(...i)=>i.filter((l,o,s)=>!!l&&l.trim()!==""&&s.indexOf(l)===o).join(" ").trim(),D5=i=>{for(const l in i)if(l.startsWith("aria-")||l==="role"||l==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=G.forwardRef(({color:i="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:s,className:c="",children:f,iconNode:h,...m},p)=>G.createElement("svg",{ref:p,...M5,width:l,height:l,stroke:i,strokeWidth:s?Number(o)*24/Number(l):o,className:Uy("lucide",c),...!f&&!D5(m)&&{"aria-hidden":"true"},...m},[...h.map(([v,b])=>G.createElement(v,b)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=(i,l)=>{const o=G.forwardRef(({className:s,...c},f)=>G.createElement(N5,{ref:f,iconNode:l,className:Uy(`lucide-${E5(Kp(i))}`,`lucide-${i}`,s),...c}));return o.displayName=Kp(i),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ly=Xt("activity",z5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],R5=Xt("arrow-right",V5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],qy=Xt("book-open",B5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],k5=Xt("calendar",O5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],U5=Xt("check",_5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],q5=Xt("chevron-left",L5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Y5=Xt("chevron-right",H5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],X5=Xt("circle-check",G5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Z5=Xt("circle-question-mark",Q5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],F5=Xt("circle-x",K5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Fp=Xt("eye-off",J5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Jp=Xt("eye",W5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],P5=Xt("flame",$5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],t2=Xt("info",I5);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],n2=Xt("log-out",e2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],Wp=Xt("play",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],l2=Xt("search",a2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],o2=Xt("sparkles",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Wn=Xt("volume-2",r2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hy=Xt("x",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Yy=Xt("zap",c2),$p=_y(),h2={ngang:{label:"Ngang",symbol:"◌"},sắc:{label:"Sắc",symbol:"◌́"},huyền:{label:"Huyền",symbol:"◌̀"},hỏi:{label:"Hỏi",symbol:"◌̉"},ngã:{label:"Ngã",symbol:"◌̃"},nặng:{label:"Nặng",symbol:"◌̣"}};function f2({question:i,difficulty:l,onAnswer:o,selectedAnswer:s,showCorrect:c,scoreMultiplier:f,onNext:h,streak:m,bestStreak:p,onExit:v}){const[b,x]=G.useState(!1),[S,A]=G.useState(!1),[C,B]=G.useState(!1);G.useEffect(()=>{x(!1),A(!1),B(!1)},[i]);const{word1:O,word2:z,word1Vowels:q,word2Vowels:_,correctAnswer:U,options:Q}=i,at=s!==null?Yp(O.vietnamese,U,$p):[],K=s!==null?Yp(z.vietnamese,U,$p):[],J=($,St)=>s!==null||l==="beginner"?nt($.vietnamese,U):l==="intermediate"||(St?S:b)?i.isAccentMode?dt($.vietnamese):S5($.vietnamese):"???",nt=($,St)=>{if(i.isAccentMode)return et($);const yt=$.normalize("NFC"),vt=[],N={a:"a",á:"a",à:"a",ả:"a",ã:"a",ạ:"a",ă:"ă",ắ:"ă",ằ:"ă",ẳ:"ă",ẵ:"ă",ặ:"ă",â:"â",ấ:"â",ầ:"â",ẩ:"â",ẫ:"â",ậ:"â",e:"e",é:"e",è:"e",ẻ:"e",ẽ:"e",ẹ:"e",ê:"ê",ế:"ê",ề:"ê",ể:"ê",ễ:"ê",ệ:"ê",i:"i",í:"i",ì:"i",ỉ:"i",ĩ:"i",ị:"i",o:"o",ò:"o",ó:"o",ỏ:"o",õ:"o",ọ:"o",ô:"ô",ố:"ô",ồ:"ô",ổ:"ô",ỗ:"ô",ộ:"ô",ơ:"ơ",ớ:"ơ",ờ:"ơ",ở:"ơ",ỡ:"ơ",ợ:"ơ",u:"u",ú:"u",ù:"u",ủ:"u",ũ:"u",ụ:"u",ư:"ư",ứ:"ư",ừ:"ư",ử:"ư",ữ:"ư",ự:"ư",y:"y",ý:"y",ỳ:"y",ỷ:"y",ỹ:"y",ỵ:"y"};for(let X=0;X<yt.length;X++){const F=yt[X],rt=F.toLowerCase();N[rt]===St?vt.push(g.jsx("span",{className:"text-[#9E6B40] bg-[#FAF0E6] border border-[#E9DCC9] rounded-md px-1 mx-[1px] inline-block font-sans font-bold scale-105 transform align-baseline shadow-3xs transition-all duration-150 hover:scale-110",children:F},X)):vt.push(g.jsx("span",{className:"font-serif font-medium text-[#3D3D33]",children:F},X))}return vt},et=$=>{const St=$.normalize("NFC"),yt=[],vt=N=>!!{a:"a",á:"a",à:"a",ả:"a",ã:"a",ạ:"a",ă:"ă",ắ:"ă",ằ:"ă",ẳ:"ă",ẵ:"ă",ặ:"ă",â:"â",ấ:"â",ầ:"â",ẩ:"â",ẫ:"â",ậ:"â",e:"e",é:"e",è:"e",ẻ:"e",ẽ:"e",ẹ:"e",ê:"ê",ế:"ê",ề:"ê",ể:"ê",ễ:"ê",ệ:"ê",i:"i",í:"i",ì:"i",ỉ:"i",ĩ:"i",ị:"i",o:"o",ò:"o",ó:"o",ỏ:"o",õ:"o",ọ:"o",ô:"ô",ố:"ô",ồ:"ô",ổ:"ô",ỗ:"ô",ộ:"ô",ơ:"ơ",ớ:"ơ",ờ:"ơ",ở:"ơ",ỡ:"ơ",ợ:"ơ",u:"u",ú:"u",ù:"u",ủ:"u",ũ:"u",ụ:"u",ư:"ư",ứ:"ư",ừ:"ư",ử:"ư",ữ:"ư",ự:"ư",y:"y",ý:"y",ỳ:"y",ỷ:"y",ỹ:"y",ỵ:"y"}[N.toLowerCase()];for(let N=0;N<St.length;N++){const X=St[N];vt(X)?yt.push(g.jsx("span",{className:"text-[#9E6B40] bg-[#FAF0E6] border border-[#E9DCC9] rounded-md px-1 mx-[1px] inline-block font-sans font-bold scale-105 transform align-baseline shadow-3xs transition-all duration-150 hover:scale-110",children:X},N)):yt.push(g.jsx("span",{className:"font-serif font-medium text-[#3D3D33]",children:X},N))}return yt},dt=$=>{const yt=A5($).normalize("NFC"),vt=[],N=X=>!!{a:"a",ă:"ă",â:"â",e:"e",ê:"ê",i:"i",o:"o",ô:"ô",ơ:"ơ",u:"u",ư:"ư",y:"y"}[X.toLowerCase()];for(let X=0;X<yt.length;X++){const F=yt[X];N(F)?vt.push(g.jsx("span",{className:"text-[#9E6B40] bg-[#FAF0E6] border border-[#E9DCC9] rounded-md px-1 mx-[1px] inline-block font-sans font-bold scale-105 transform align-baseline shadow-3xs transition-all duration-150 hover:scale-110",children:F},X)):vt.push(g.jsx("span",{className:"font-serif font-medium text-[#3D3D33]",children:F},X))}return vt};return g.jsxs("div",{id:"quiz-card-container",className:"w-full max-w-xl bg-white border border-[#EBE7E0] rounded-[24px] shadow-sm relative overflow-hidden",children:[g.jsx("div",{className:"absolute top-0 left-0 w-full h-[4.5px] bg-gradient-to-r from-[#6B705C] via-[#D4A373] to-[#E6C280] shadow-3xs z-10 animate-fade-in"}),g.jsxs("div",{id:"word-pair-header",className:"p-4 md:p-5 bg-[#F5F2ED]/60 border-b border-b-[#EBE7E0] flex flex-col items-center justify-center text-center",children:[g.jsxs("div",{id:"quiz-streak-header",className:"flex items-center justify-between w-full border-b border-[#EBE7E0]/60 pb-2 mb-2 select-none",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsxs("div",{className:"flex items-center gap-1.5 text-[#6B705C]",children:[g.jsx(P5,{className:`w-4 h-4 text-orange-500 fill-orange-500/10 ${m>0?"animate-bounce":""}`}),g.jsxs("span",{className:"text-xs font-serif font-bold italic",children:["Streak: ",m,"x"]})]}),g.jsxs("div",{className:"hidden sm:block text-[10px] font-mono text-[#A5A58D] uppercase tracking-wider border-l border-[#EBE7E0] pl-3",children:["Best: ",p,"x"]})]}),v&&g.jsxs("button",{type:"button",id:"quit-current-game-button",onClick:v,className:"text-[10px] uppercase font-mono tracking-wider font-bold flex items-center gap-1 bg-white hover:bg-[#FAF8F5] text-[#5A5A40] hover:text-[#3D3D33] px-2.5 py-1 rounded-lg border border-[#EBE7E0] hover:border-[#D4A373]/50 shadow-3xs transition duration-150 cursor-pointer",children:[g.jsx(n2,{className:"w-3 h-3 text-[#D4A373]"}),g.jsx("span",{children:"Exit Mode"})]})]}),g.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full mt-1.5",children:[g.jsxs("div",{className:"flex-1 flex flex-col items-center p-3 bg-white/70 rounded-xl border border-[#EBE7E0] shadow-2xs w-full",children:[g.jsx("span",{className:"text-[9px] font-mono tracking-wider font-semibold rounded-md px-1.5 py-0.5 bg-[#E9E4DB]/80 text-[#6B705C] mb-1 capitalize border border-[#DCD7CC]/40",children:O.type}),g.jsx("span",{className:"text-lg md:text-xl font-serif italic text-[#3D3D33] tracking-tight",children:O.word}),g.jsxs("div",{className:"mt-1.5 flex items-center justify-center gap-1.5 w-full h-7",children:[g.jsx("div",{className:"text-center font-serif text-base tracking-[0.14em] text-[#5A5A40] leading-7 select-text",children:J(O,!1)}),(s!==null||l==="beginner"||l==="intermediate"&&b)&&g.jsx("button",{type:"button",title:"Listen to pronunciation",onClick:()=>Jn(O.vietnamese),className:"p-1 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#E9E4DB]/60 rounded-full transition cursor-pointer flex items-center justify-center",children:g.jsx(Wn,{className:"w-3.5 h-3.5"})})]}),l!=="beginner"&&!s&&g.jsx("button",{type:"button",id:"hint-toggle-word-1",onClick:()=>x(!b),className:"mt-1.5 text-[10px] flex items-center gap-1 py-0.5 px-2 text-[#6B705C] hover:text-[#5A5A40] font-semibold hover:bg-[#E9E4DB] rounded-md transition duration-155 border border-dashed border-[#A5A58D] cursor-pointer",children:b?g.jsxs(g.Fragment,{children:[g.jsx(Fp,{className:"w-2.5 h-2.5"}),"Hide Hint"]}):g.jsxs(g.Fragment,{children:[g.jsx(Jp,{className:"w-2.5 h-2.5"}),"Hint Word 1"]})})]}),g.jsx("div",{className:"text-[#A5A58D] font-serif italic text-xs",children:"and"}),g.jsxs("div",{className:"flex-1 flex flex-col items-center p-3 bg-white/70 rounded-xl border border-[#EBE7E0] shadow-2xs w-full",children:[g.jsx("span",{className:"text-[9px] font-mono tracking-wider font-semibold rounded-md px-1.5 py-0.5 bg-[#E9E4DB]/80 text-[#6B705C] mb-1 capitalize border border-[#DCD7CC]/40",children:z.type}),g.jsx("span",{className:"text-lg md:text-xl font-serif italic text-[#3D3D33] tracking-tight",children:z.word}),g.jsxs("div",{className:"mt-1.5 flex items-center justify-center gap-1.5 w-full h-7",children:[g.jsx("div",{className:"text-center font-serif text-base tracking-[0.14em] text-[#5A5A40] leading-7 select-text",children:J(z,!0)}),(s!==null||l==="beginner"||l==="intermediate"&&S)&&g.jsx("button",{type:"button",title:"Listen to pronunciation",onClick:()=>Jn(z.vietnamese),className:"p-1 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#E9E4DB]/60 rounded-full transition cursor-pointer flex items-center justify-center",children:g.jsx(Wn,{className:"w-3.5 h-3.5"})})]}),l!=="beginner"&&!s&&g.jsx("button",{type:"button",id:"hint-toggle-word-2",onClick:()=>A(!S),className:"mt-1.5 text-[10px] flex items-center gap-1 py-0.5 px-2 text-[#6B705C] hover:text-[#5A5A40] font-semibold hover:bg-[#E9E4DB] rounded-md transition duration-155 border border-dashed border-[#A5A58D] cursor-pointer",children:S?g.jsxs(g.Fragment,{children:[g.jsx(Fp,{className:"w-2.5 h-2.5"}),"Hide Hint"]}):g.jsxs(g.Fragment,{children:[g.jsx(Jp,{className:"w-2.5 h-2.5"}),"Hint Word 2"]})})]})]})]}),g.jsxs("div",{id:"options-panel",className:"p-4 md:p-5 flex flex-col items-center bg-[#FDFDFD]",children:[g.jsx("div",{className:"text-[10px] uppercase tracking-[0.2em] text-[#6B705C] mb-2.5 font-semibold",children:i.isAccentMode?"Select the shared accent mark (tone)":"Select the sharing vowel"}),g.jsx("div",{className:`grid ${i.isAccentMode?"grid-cols-2 md:grid-cols-3 gap-3 max-w-md md:max-w-xl":"grid-cols-2 gap-2.5 max-w-xs"} w-full`,children:Q.map($=>{const St=s===$,yt=$===U,vt=s!==null;let N="flex flex-col items-center justify-center p-2 py-2.5 rounded-xl border-2 text-center transition-all duration-155 select-none ";if(vt?yt?N+="bg-[#6B705C] border-[#6B705C] text-white shadow-md ring-2 ring-[#6B705C]/10":St?N+="bg-[#D4A373]/15 border-[#D4A373] text-[#A76F40] shadow-3xs":N+="bg-[#E9E4DB]/20 border-[#E9E4DB] text-[#A5A58D] opacity-50":N+="bg-white/50 border-[#DCD7CC] text-[#5A5A40] hover:bg-[#5A5A40] hover:text-white hover:border-[#5A5A40] cursor-pointer",i.isAccentMode){const X=h2[$]||{label:$,symbol:""};return g.jsxs("button",{id:`tone-option-${$}`,disabled:vt,onClick:()=>o($),className:`${N} p-2 h-18 select-none cursor-pointer flex flex-col items-center justify-center`,children:[g.jsx("span",{className:"text-sm font-serif font-bold tracking-wide capitalize select-none leading-tight",children:X.label}),g.jsx("span",{className:"text-xl font-sans font-bold text-[#6B705C] group-hover:text-white mt-1 select-none font-mono",children:X.symbol})]},$)}return g.jsx("button",{id:`vowel-option-${$}`,disabled:vt,onClick:()=>o($),className:`${N} h-14 py-0 flex items-center justify-center`,children:g.jsx("span",{className:"text-2xl font-serif tracking-wide uppercase select-none font-mono",children:$})},$)})}),g.jsx(Oc,{mode:"wait",children:s&&g.jsxs(jl.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},className:"mt-3.5 w-full max-w-xs flex flex-col items-center text-center font-sans",children:[s===U?g.jsxs("div",{className:"flex items-center gap-1.5 text-white font-serif italic text-xs mb-2 bg-[#6B705C] px-4 py-1.5 rounded-full shadow-sm border border-[#5A5A40]/30 animate-pulse",children:[g.jsx(X5,{className:"w-3.5 h-3.5 text-white"}),"Correct Match!"]}):g.jsxs("div",{className:"flex items-center gap-1.5 text-[#3D3D33] font-serif italic text-xs mb-2 bg-[#E9E4DB] px-4 py-1.5 rounded-full shadow-xs border border-[#DCD7CC]",children:[g.jsx(F5,{className:"w-3.5 h-3.5 text-[#6B705C]"}),"Incorrect choice. Shared: ",i.isAccentMode?U:U.toUpperCase()]}),h&&g.jsxs("button",{type:"button",id:"next-question-trigger-button",onClick:h,className:"w-full mt-1 flex items-center justify-center gap-1.5 py-3/4 outline-none bg-[#6B705C] hover:bg-[#5A5A40] text-white rounded-full font-serif font-bold transition duration-150 shadow-xs hover:shadow-md cursor-pointer tracking-wider text-xs px-6 py-2.5 h-10 mb-2.5",children:[g.jsx("span",{children:"Load Next Challenge"}),g.jsx(R5,{className:"w-3.5 h-3.5"})]}),g.jsxs("div",{className:"p-3 bg-[#F5F2ED] border border-[#EBE7E0] rounded-[16px] text-left w-full text-[11px] text-[#3D3D33] leading-relaxed font-sans",children:[g.jsx("span",{className:"font-bold text-[#6B705C] block text-[9px] uppercase tracking-wider mb-0.5 font-mono",children:"Analysis Details:"}),i.isAccentMode?g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("strong",{children:O.word})," → ",g.jsx("strong",{className:"font-serif text-[#3D3D33]",children:O.vietnamese})," (Tone: ",g.jsx("code",{className:"text-[#6B705C] font-semibold capitalize font-sans",children:Uc(O.vietnamese)}),")",g.jsx("button",{type:"button",title:"Listen",onClick:()=>Jn(O.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:g.jsx(Wn,{className:"w-3 h-3"})})]}),g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("strong",{children:z.word})," → ",g.jsx("strong",{className:"font-serif text-[#3D3D33]",children:z.vietnamese})," (Tone: ",g.jsx("code",{className:"text-[#6B705C] font-semibold capitalize font-sans",children:Uc(z.vietnamese)}),")",g.jsx("button",{type:"button",title:"Listen",onClick:()=>Jn(z.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:g.jsx(Wn,{className:"w-3 h-3"})})]}),g.jsxs("div",{className:"text-[10px] text-[#6B705C] pt-1 leading-normal",children:["Both words carry the accent mark of the ",g.jsx("span",{className:"font-serif font-bold text-[#A76F40] bg-[#FAF0E6] border border-[#E9DCC9] uppercase px-2 py-0.5 rounded-md shadow-3xs capitalize",children:U})," tone."]})]}):g.jsxs("div",{className:"space-y-1 font-sans",children:[g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("strong",{children:O.word})," → ",g.jsx("strong",{className:"font-serif text-[#3D3D33]",children:O.vietnamese})," ",g.jsxs("code",{children:["[",q.join(", ").toUpperCase(),"]"]}),g.jsx("button",{type:"button",title:"Listen",onClick:()=>Jn(O.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:g.jsx(Wn,{className:"w-3 h-3"})})]}),g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("strong",{children:z.word})," → ",g.jsx("strong",{className:"font-serif text-[#3D3D33]",children:z.vietnamese})," ",g.jsxs("code",{children:["[",_.join(", ").toUpperCase(),"]"]}),g.jsx("button",{type:"button",title:"Listen",onClick:()=>Jn(z.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:g.jsx(Wn,{className:"w-3 h-3"})})]}),g.jsxs("div",{className:"text-[10px] text-[#6B705C] pt-0.5",children:["Shared vowel is ",g.jsx("span",{className:"font-serif font-bold text-[#A76F40] bg-[#FAF0E6] border border-[#E9DCC9] uppercase px-2 py-0.5 rounded-md shadow-3xs",children:U}),"."]})]}),!i.isAccentMode&&(at.length>0||K.length>0?g.jsxs("div",{className:"mt-2.5 border-t border-[#EBE7E0] pt-2 text-[10.5px]",children:[g.jsx("span",{className:"font-bold text-[#6B705C] block text-[8px] uppercase tracking-wider mb-1.5 font-mono",children:"Spelling matches with other vowels:"}),g.jsxs("div",{className:"space-y-2",children:[at.length>0&&g.jsxs("div",{children:[g.jsxs("span",{className:"text-[#8C867A] block font-medium mb-0.5",children:["For “",O.vietnamese,"”:"]}),g.jsx("div",{className:"space-y-1 pl-1.5 border-l-2 border-[#DCD7CC]",children:at.map(($,St)=>g.jsxs("div",{className:"flex items-center gap-1.5",children:["• ",g.jsx("strong",{className:"font-serif text-[#3D3D33]",children:$.vietnamese})," (",$.word,")",g.jsx("button",{type:"button",title:"Listen",onClick:()=>Jn($.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:g.jsx(Wn,{className:"w-2.5 h-2.5"})})]},St))})]}),K.length>0&&g.jsxs("div",{children:[g.jsxs("span",{className:"text-[#8C867A] block font-medium mb-0.5",children:["For “",z.vietnamese,"”:"]}),g.jsx("div",{className:"space-y-1 pl-1.5 border-l-2 border-[#DCD7CC]",children:K.map(($,St)=>g.jsxs("div",{className:"flex items-center gap-1.5",children:["• ",g.jsx("strong",{className:"font-serif text-[#3D3D33]",children:$.vietnamese})," (",$.word,")",g.jsx("button",{type:"button",title:"Listen",onClick:()=>Jn($.vietnamese),className:"p-0.5 text-[#A5A58D] hover:text-[#5A5A40] hover:bg-[#DCD7CC]/40 rounded-full transition cursor-pointer inline-flex items-center justify-center",children:g.jsx(Wn,{className:"w-2.5 h-2.5"})})]},St))})]})]})]}):g.jsx("div",{className:"mt-2.5 border-t border-[#EBE7E0] pt-2 text-[10.5px] text-[#8C867A] italic font-sans animate-fade-in",children:"No other spelling matches with different central vowels found in our dictionary."}))]})]},"feedback-container")})]})]})}function d2({onSelectVowel:i}){const[l,o]=G.useState(""),[s,c]=G.useState(Gp[0]),f=Gp.filter(m=>m.vowel.toLowerCase().includes(l.toLowerCase())||m.name.toLowerCase().includes(l.toLowerCase())||m.description.toLowerCase().includes(l.toLowerCase())),h=m=>{c(m),Pn(),i&&i(m.vowel)};return g.jsxs("div",{id:"vowel-reference-guide",className:"w-full bg-white border border-[#EBE7E0] rounded-[24px] shadow-sm overflow-hidden flex flex-col h-full min-h-[500px]",children:[g.jsxs("div",{id:"reference-header",className:"p-4 bg-[#F5F2ED] border-b border-[#EBE7E0] flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(qy,{className:"w-4 h-4 text-[#6B705C]"}),g.jsx("span",{className:"font-serif italic text-[#3D3D33] text-sm font-bold",children:"Vietnamese Vowel Dictionary"})]}),g.jsxs("div",{className:"relative w-40",children:[g.jsx("input",{type:"text",placeholder:"Search...",value:l,onChange:m=>o(m.target.value),className:"w-full pl-7 pr-3 py-1 text-xs border border-[#DCD7CC] rounded-lg focus:outline-hidden focus:border-[#6B705C] font-sans"}),g.jsx(l2,{className:"w-3 h-3 text-[#A5A58D] absolute left-2.5 top-2.5"})]})]}),g.jsxs("div",{id:"reference-split-view",className:"flex-1 flex overflow-hidden min-h-0",children:[g.jsxs("div",{id:"vowel-grid-sidebar",className:"w-1/3 border-r border-[#EBE7E0] overflow-y-auto p-3 space-y-2 bg-[#F5F2ED]/40",children:[g.jsx("div",{className:"grid grid-cols-1 gap-2",children:f.map(m=>{const p=(s==null?void 0:s.vowel)===m.vowel;return g.jsxs("button",{id:`ref-vowel-btn-${m.vowel}`,onClick:()=>h(m),className:`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition duration-150 cursor-pointer ${p?"bg-white border-[#6B705C] text-[#5A5A40] shadow-xs ring-1 ring-[#6B705C]/35":"bg-white/50 border-[#DCD7CC]/60 text-[#3D3D33] hover:bg-[#E9E4DB]/50 hover:border-[#A5A58D]"}`,children:[g.jsx("span",{className:"text-2xl font-serif font-bold uppercase leading-none",children:m.vowel}),g.jsxs("span",{className:"text-[10px] font-mono tracking-wide text-[#A5A58D] mt-1 uppercase",children:["/",m.ipa,"/"]})]},m.vowel)})}),f.length===0&&g.jsx("div",{className:"text-center py-8 text-xs text-[#A5A58D] font-sans",children:"No vowels match."})]}),g.jsxs("div",{id:"vowel-details-sidebar",className:"w-2/3 p-5 md:p-6 overflow-y-auto bg-white flex flex-col justify-between",children:[s?g.jsxs("div",{className:"space-y-5",children:[g.jsxs("div",{className:"flex items-start gap-4",children:[g.jsx("div",{className:"h-16 w-16 md:h-18 md:w-18 bg-gradient-to-br from-[#E6C280]/20 via-[#FAF6EE] to-[#D4A373]/20 border border-[#D4A373]/45 rounded-2xl flex flex-col items-center justify-center text-[#C58B58] shadow-3xs",children:g.jsx("span",{className:"text-4xl md:text-5xl font-serif font-black uppercase leading-none select-none",children:s.vowel})}),g.jsxs("div",{children:[g.jsxs("h4",{className:"text-base md:text-lg font-serif font-bold text-[#3D3D33] tracking-tight",children:["Letter ",s.name]}),g.jsxs("div",{className:"inline-flex items-center gap-1.5 px-2.5 py-0.5 mt-1 bg-[#D4A373]/10 rounded-md border border-[#D4A373]/20 text-xs font-mono text-[#A76F40]",children:["Phoneme: ",g.jsxs("strong",{className:"text-[#3D3D33]",children:["/",s.ipa,"/"]})]})]})]}),g.jsxs("div",{className:"space-y-1.5 font-sans",children:[g.jsx("span",{className:"text-[10px] font-mono text-[#6B705C] uppercase tracking-widest block font-bold",children:"Pronunciation Guide"}),g.jsx("p",{className:"text-xs md:text-sm text-[#3D3D33] leading-relaxed bg-[#F5F2ED] p-3 rounded-xl border border-[#EBE7E0]",children:s.description})]}),g.jsxs("div",{className:"space-y-2 font-sans",children:[g.jsx("span",{className:"text-[10px] font-mono text-[#6B705C] uppercase tracking-widest block font-bold",children:"Example Words"}),g.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.examples.map((m,p)=>g.jsxs("div",{className:"flex items-center justify-between p-3 rounded-lg bg-white border border-[#EBE7E0] hover:border-[#6B705C] transition duration-150 shadow-xs",children:[g.jsxs("div",{className:"flex flex-col",children:[g.jsx("strong",{className:"text-sm font-semibold text-[#5A5A40] tracking-wide font-serif",children:m.vietnamese}),g.jsx("span",{className:"text-xs text-[#A5A58D] capitalize",children:m.english})]}),g.jsxs("span",{className:"text-[10px] font-mono text-[#A5A58D] font-semibold px-2 py-0.5 border border-[#EBE7E0] rounded bg-[#F5F2ED]",children:["Matches ",s.vowel.toUpperCase()]})]},p))})]})]}):g.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-[#A5A58D] space-y-2 text-center",children:[g.jsx(t2,{className:"w-8 h-8"}),g.jsx("p",{className:"text-xs font-sans",children:"Select a vowel from the left grid to view information."})]}),g.jsxs("div",{className:"pt-4 border-t border-[#EBE7E0]/60 mt-6 bg-gradient-to-r from-white to-[#D4A373]/5 -mx-6 -mb-6 p-5 flex items-start gap-2.5",children:[g.jsx(Z5,{className:"w-4 h-4 text-[#C58B58] shrink-0 mt-0.5"}),g.jsxs("p",{className:"text-[11px] text-[#5A5A40] leading-relaxed font-sans italic",children:[g.jsx("strong",{children:"Tip:"})," Pay attention to the base letter shape rather than the tiny tone ticks (e.g. ắ, ằ, ẳ are all variants of ",g.jsx("strong",{className:"font-serif text-[#3D3D33]",children:"Ă"}),")."]})]})]})]})]})}function m2({history:i}){const[l,o]=G.useState(()=>new Date),[s,c]=G.useState(()=>{const z=new Date,q=z.getFullYear(),_=String(z.getMonth()+1).padStart(2,"0"),U=String(z.getDate()).padStart(2,"0");return`${q}-${_}-${U}`}),f=l.getFullYear(),h=l.getMonth(),m=["January","February","March","April","May","June","July","August","September","October","November","December"],p=G.useMemo(()=>new Date(f,h+1,0).getDate(),[f,h]),v=G.useMemo(()=>new Date(f,h,1).getDay(),[f,h]),b=G.useMemo(()=>{const z={};return i.forEach(q=>{const _=q.date||(q.timestamp?q.timestamp.split("T")[0]:"");if(!_)return;z[_]||(z[_]={dateStr:_,total:0,correct:0,accuracy:0,vowelQuiz:{total:0,correct:0},toneQuiz:{total:0,correct:0}});const U=z[_];U.total+=1,q.isCorrect&&(U.correct+=1),q.mode==="toneHarmony"?(U.toneQuiz.total+=1,q.isCorrect&&(U.toneQuiz.correct+=1)):(U.vowelQuiz.total+=1,q.isCorrect&&(U.vowelQuiz.correct+=1))}),Object.keys(z).forEach(q=>{const _=z[q];_.accuracy=_.total>0?Math.round(_.correct/_.total*100):0}),z},[i]),x=()=>{o(new Date(f,h-1,1))},S=()=>{o(new Date(f,h+1,1))},A=G.useMemo(()=>{const z=[];for(let q=0;q<v;q++)z.push(null);for(let q=1;q<=p;q++){const _=String(h+1).padStart(2,"0"),U=String(q).padStart(2,"0"),Q=`${f}-${_}-${U}`,at=b[Q]||{dateStr:Q,total:0,correct:0,accuracy:0,vowelQuiz:{total:0,correct:0},toneQuiz:{total:0,correct:0}};z.push({dayNum:q,dateStr:Q,stats:at})}return z},[f,h,p,v,b]),C=s?b[s]:null,B=(z,q,_)=>{let U="h-9 w-9 md:h-10 md:w-10 rounded-lg flex flex-col items-center justify-center text-xs font-semibold relative transition cursor-pointer select-none ";return _?U+=" ring-2 ring-[#5A5A40] ring-offset-1 ":U+=" hover:ring-1 hover:ring-[#A5A58D]/60 ",z===0?U+" bg-[#FAF8F5] text-[#8C867A]/55 border border-[#EBE7E0]/60 ":q>=80?U+" bg-[#6B705C] text-white border border-[#5A5A40] shadow-2xs hover:scale-105 ":q>=50?U+" bg-[#D4A373] text-white border border-[#C58B58] shadow-2xs hover:scale-105 ":U+" bg-[#E6C280]/30 text-[#8C6B30] border border-[#E6C280]/50 hover:scale-105 "},O=z=>{try{const[q,_,U]=z.split("-").map(Number);return new Date(q,_-1,U).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric",year:"numeric"})}catch{return z}};return g.jsxs("div",{id:"activity-calendar-subpanel",className:"w-full bg-[#FAF8F5]/85 border border-[#EBE7E0] rounded-2xl p-4 md:p-5 font-sans space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx(k5,{className:"w-4 h-4 text-[#6B705C]"}),g.jsx("h4",{className:"font-serif italic font-bold text-[#3D3D33] text-sm md:text-base",children:"Daily Practice Activity"})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("button",{type:"button",onClick:x,title:"Previous Month",className:"p-1 hover:bg-[#E9E4DB] text-[#5A5A40] rounded transition cursor-pointer",children:g.jsx(q5,{className:"w-4 h-4"})}),g.jsxs("span",{className:"text-xs font-bold text-[#3D3D33] font-mono min-w-[100px] text-center",children:[m[h]," ",f]}),g.jsx("button",{type:"button",onClick:S,title:"Next Month",className:"p-1 hover:bg-[#E9E4DB] text-[#5A5A40] rounded transition cursor-pointer",children:g.jsx(Y5,{className:"w-4 h-4"})})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-12 gap-5 items-start",children:[g.jsxs("div",{className:"md:col-span-7 flex flex-col items-center bg-white border border-[#EBE7E0] p-4 rounded-xl shadow-3xs w-full",children:[g.jsxs("div",{className:"grid grid-cols-7 gap-1 w-full text-center text-[10px] font-bold text-[#A5A58D] font-mono uppercase pb-2 border-b border-[#EBE7E0]/70 mb-2",children:[g.jsx("div",{children:"Su"}),g.jsx("div",{children:"Mo"}),g.jsx("div",{children:"Tu"}),g.jsx("div",{children:"We"}),g.jsx("div",{children:"Th"}),g.jsx("div",{children:"Fr"}),g.jsx("div",{children:"Sa"})]}),g.jsx("div",{className:"grid grid-cols-7 gap-1.5 w-full justify-items-center",children:A.map((z,q)=>{if(z===null)return g.jsx("div",{className:"h-9 w-9 md:h-10 md:w-10"},`empty-${q}`);const{dayNum:_,dateStr:U,stats:Q}=z,at=s===U;return g.jsxs("button",{type:"button",onClick:()=>c(U),className:B(Q.total,Q.accuracy,at),children:[g.jsx("span",{className:"text-[10px] md:text-xs",children:_}),Q.total>0&&g.jsx("span",{className:`absolute bottom-0.5 h-1 w-1 rounded-full ${Q.accuracy>=80||Q.accuracy>=50?"bg-white":"bg-[#8C6B30]"}`})]},U)})}),g.jsxs("div",{className:"flex items-center gap-3 text-[9px] font-mono font-semibold text-[#8C867A] mt-4 pt-3 border-t border-[#EBE7E0]/50 w-full justify-center",children:[g.jsx("span",{children:"No session"}),g.jsxs("div",{className:"flex gap-1.5 items-center",children:[g.jsx("span",{className:"h-3 w-3 rounded bg-[#FAF8F5] border border-[#EBE7E0]/60"}),g.jsx("span",{className:"h-3 w-3 rounded bg-[#E6C280]/40 border border-[#E6C280]/60"}),g.jsx("span",{className:"h-3 w-3 rounded bg-[#D4A373]"}),g.jsx("span",{className:"h-3 w-3 rounded bg-[#6B705C]"})]}),g.jsx("span",{children:"80%+ Accuracy"})]})]}),g.jsx("div",{className:"md:col-span-5 w-full h-full flex flex-col",children:s&&g.jsxs("div",{className:"bg-white border border-[#EBE7E0] rounded-xl p-4 shadow-3xs flex-1 flex flex-col justify-between",children:[g.jsxs("div",{className:"space-y-3.5",children:[g.jsxs("div",{className:"border-b border-[#EBE7E0] pb-2.5",children:[g.jsx("span",{className:"text-[9px] font-mono text-[#A5A58D] uppercase tracking-wider block font-bold",children:"Activity Report"}),g.jsx("h5",{className:"font-serif italic font-bold text-sm text-[#3D3D33] mt-0.5",children:O(s)})]}),C&&C.total>0?g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"grid grid-cols-3 gap-1 px-1.5 py-2.5 bg-[#FAF8F5] border border-[#EBE7E0] rounded-lg text-center",children:[g.jsxs("div",{children:[g.jsx("span",{className:"text-[8px] font-mono text-[#A5A58D] uppercase block",children:"Total"}),g.jsx("span",{className:"text-sm font-bold text-[#3D3D33] font-serif",children:C.total})]}),g.jsxs("div",{className:"border-x border-[#EBE7E0]",children:[g.jsx("span",{className:"text-[8px] font-mono text-[#A5A58D] uppercase block",children:"Correct"}),g.jsx("span",{className:"text-sm font-bold text-[#6B705C] font-serif",children:C.correct})]}),g.jsxs("div",{children:[g.jsx("span",{className:"text-[8px] font-mono text-[#A5A58D] uppercase block",children:"Accuracy"}),g.jsxs("span",{className:"text-sm font-bold text-[#5A5A40] font-serif",children:[C.accuracy,"%"]})]})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("span",{className:"text-[8px] font-mono text-[#A5A58D] uppercase tracking-wider block font-bold",children:"Game Modes Breakdown"}),g.jsxs("div",{className:"p-2 border border-[#EBE7E0]/80 rounded-lg flex items-center justify-between bg-white text-xs hover:bg-[#FAF8F5]/50 transition",children:[g.jsxs("div",{className:"space-y-0.5",children:[g.jsx("span",{className:"font-medium text-[#3D3D33] font-serif block",children:"M.1 Vowel Recognition"}),g.jsxs("span",{className:"text-[9px] text-[#A5A58D] font-mono",children:[C.vowelQuiz.total," Questions Answered"]})]}),g.jsx("div",{className:"text-right",children:g.jsx("span",{className:"font-bold text-[#5A5A40] font-mono",children:C.vowelQuiz.total>0?`${Math.round(C.vowelQuiz.correct/C.vowelQuiz.total*100)}%`:"—"})})]}),g.jsxs("div",{className:"p-2 border border-[#EBE7E0]/80 rounded-lg flex items-center justify-between bg-white text-xs hover:bg-[#FAF8F5]/50 transition",children:[g.jsxs("div",{className:"space-y-0.5",children:[g.jsx("span",{className:"font-medium text-[#3D3D33] font-serif block",children:"M.2 Accent Harmony"}),g.jsxs("span",{className:"text-[9px] text-[#A5A58D] font-mono",children:[C.toneQuiz.total," Tones Classifications"]})]}),g.jsx("div",{className:"text-right",children:g.jsx("span",{className:"font-bold text-[#5A5A40] font-mono",children:C.toneQuiz.total>0?`${Math.round(C.toneQuiz.correct/C.toneQuiz.total*100)}%`:"—"})})]})]})]}):g.jsxs("div",{className:"py-8 text-center text-xs text-[#A5A58D] italic font-sans flex flex-col items-center justify-center gap-1 opacity-80",children:[g.jsx(Ly,{className:"w-5 h-5 text-[#E9E4DB]"}),g.jsx("span",{children:"No quiz sessions completed on this day."}),g.jsx("span",{className:"text-[9px] font-mono not-italic mt-1 text-[#A5A58D]/70 bg-[#FAF8F5] border border-[#EBE7E0] px-2 py-0.5 rounded-full",children:"Play arcade, practice or tone modes!"})]})]}),C&&C.total>0&&g.jsx("div",{className:"text-[9px] text-[#A5A58D] text-left leading-normal font-mono uppercase tracking-wider pt-3 border-t border-[#EBE7E0]/50",children:"⚡ Cumulative Progress Record"})]})})]})]})}function v2({history:i,onClearHistory:l}){const o=()=>{const h=i.length,m=i.filter(v=>v.isCorrect).length,p=h>0?Math.round(m/h*100):0;return{total:h,correct:m,accuracy:p}},{total:s,correct:c,accuracy:f}=o();return g.jsxs("div",{id:"history-stats-panel",className:"w-full bg-white border border-[#EBE7E0] rounded-[24px] shadow-sm p-4 md:p-6 overflow-hidden space-y-6",children:[g.jsx("div",{id:"activity-calendar-wrapper",children:g.jsx(m2,{history:i})}),g.jsxs("div",{id:"session-logs-details",className:"border-t border-[#EBE7E0]/80 pt-5 space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Ly,{className:"w-4 h-4 text-[#6B705C]"}),g.jsx("h3",{className:"font-serif italic font-bold text-[#3D3D33] text-sm md:text-base",children:"Chronological Quiz Logs"})]}),i.length>0&&g.jsx("button",{type:"button",id:"clear-history-button",onClick:l,className:"text-[10px] uppercase font-mono tracking-wider font-semibold text-[#6B705C] hover:text-[#5A5A40] hover:bg-[#E9E4DB]/50 px-2.5 py-1 rounded transition duration-150 cursor-pointer border border-[#EBE7E0]",children:"Clear Logs"})]}),i.length===0?g.jsxs("div",{className:"text-center py-10 flex flex-col items-center justify-center text-[#A5A58D] font-sans space-y-2 bg-[#FAF8F5]/55 border border-dashed border-[#EBE7E0] rounded-xl",children:[g.jsx(Yy,{className:"w-8 h-8 text-[#E9E4DB] animate-pulse"}),g.jsx("p",{className:"text-xs font-semibold",children:"No questions answered yet in your workspace."}),g.jsx("span",{className:"text-[10px] text-[#A5A58D]/80",children:"Complete some challenges to register progress!"})]}):g.jsxs("div",{className:"space-y-4 font-sans",children:[g.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-center",children:[g.jsxs("div",{className:"bg-[#FAF8F5] p-3 rounded-xl border border-[#6B705C]/15 flex flex-col items-center justify-center shadow-3xs hover:scale-[1.02] transition duration-150",children:[g.jsx("span",{className:"text-[9px] font-mono uppercase text-[#6B705C] font-bold block",children:"Answered"}),g.jsx("strong",{className:"text-xl font-serif text-[#3D3D33] mt-0.5 block",children:s})]}),g.jsxs("div",{className:"bg-[#D4A373]/10 p-3 rounded-xl border border-[#D4A373]/20 flex flex-col items-center justify-center shadow-3xs hover:scale-[1.02] transition duration-150",children:[g.jsx("span",{className:"text-[9px] font-mono uppercase text-[#C58B58] font-bold block",children:"Avg. Accuracy"}),g.jsxs("strong",{className:"text-xl font-serif text-[#C58B58] mt-0.5 block",children:[f,"%"]})]}),g.jsxs("div",{className:"bg-[#FAF0E6] p-3 rounded-xl border border-[#E9DCC9] flex flex-col items-center justify-center shadow-3xs hover:scale-[1.02] transition duration-150",children:[g.jsx("span",{className:"text-[9px] font-mono uppercase text-[#A76F40] font-bold block",children:"Correct"}),g.jsx("strong",{className:"text-xl font-serif text-[#9E6B40] mt-0.5 block",children:c})]})]}),g.jsx("div",{className:"space-y-2 max-h-[300px] overflow-y-auto pr-1",children:i.map((h,m)=>g.jsxs("div",{className:`p-3 rounded-xl border flex items-center justify-between text-xs transition duration-150 shadow-3xs ${h.isCorrect?"bg-[#6B705C]/5 border-[#EBE7E0] hover:bg-[#6B705C]/8":"bg-[#A5A58D]/5 border-[#EBE7E0] hover:bg-[#A5A58D]/8"}`,children:[g.jsxs("div",{className:"flex flex-col space-y-1",children:[g.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[g.jsx("span",{className:"font-semibold text-[#3D3D33] font-serif",children:h.word1.vietnamese}),g.jsx("span",{className:"text-[#A5A58D] italic",children:"&"}),g.jsx("span",{className:"font-semibold text-[#3D3D33] font-serif",children:h.word2.vietnamese})]}),g.jsxs("div",{className:"flex items-center gap-2 text-[10px] text-[#6B705C] font-mono flex-wrap",children:[g.jsx("span",{className:"bg-[#FAF8F5] border border-[#EBE7E0] px-1.5 py-0.5 rounded text-[9px] font-sans font-semibold text-[#6B705C] capitalize",children:h.mode==="toneHarmony"?"Accent mark Match":"Vowel challenge"}),g.jsx("span",{children:"•"}),g.jsxs("span",{children:["Shared: ",g.jsx("strong",{className:"uppercase text-[#5A5A40] font-serif",children:h.correctAnswer})]}),g.jsx("span",{children:"•"}),g.jsxs("span",{children:["Your choice: ",g.jsx("strong",{className:`uppercase font-serif ${h.isCorrect?"text-[#6B705C]":"text-red-500 font-bold"}`,children:h.userAnswer})]})]})]}),g.jsx("div",{className:"flex items-center justify-center",children:h.isCorrect?g.jsx("div",{className:"h-6 w-6 rounded-full bg-[#6B705C]/15 text-[#6B705C] flex items-center justify-center shadow-3xs border border-[#6B705C]/10",children:g.jsx(U5,{className:"w-3.5 h-3.5"})}):g.jsx("div",{className:"h-6 w-6 rounded-full bg-[#A5A58D]/15 text-[#3D3D33] flex items-center justify-center shadow-3xs border border-[#A5A58D]/10",children:g.jsx(Hy,{className:"w-3.5 h-3.5"})})})]},m))})]})]})]})}function p2(){const[i,l]=G.useState([]),[o,s]=G.useState(null),[c,f]=G.useState(null),[h,m]=G.useState("expert"),[p,v]=G.useState(!1),[b,x]=G.useState(0),[S,A]=G.useState(0),[C,B]=G.useState(0),[O,z]=G.useState(3),[q,_]=G.useState(60),[U,Q]=G.useState(0),[at,K]=G.useState(0),[J,nt]=G.useState(null),[et,dt]=G.useState(!1),[$,St]=G.useState(!1),[yt,vt]=G.useState(()=>{const Z=localStorage.getItem("vietnamese_vowel_highscores");return Z?JSON.parse(Z):{arcade:0,timeAttack:0,practice:0}}),[N,X]=G.useState(()=>{const Z=localStorage.getItem("vietnamese_vowel_history");return Z?JSON.parse(Z):[]});G.useEffect(()=>{localStorage.setItem("vietnamese_vowel_history",JSON.stringify(N))},[N]);const F=G.useRef(null);G.useEffect(()=>{const Z=_y();l(Z)},[]),G.useEffect(()=>(p&&c==="timeAttack"&&(F.current=setInterval(()=>{_(Z=>Z<=1?(rt(),0):Z-1)},1e3)),()=>{F.current&&clearInterval(F.current)}),[p,c]);const rt=Z=>{v(!1),Zp(),F.current&&clearInterval(F.current);const st=c||"arcade";if(b>(yt[st]||0)){const ct={...yt,[st]:b};vt(ct),localStorage.setItem("vietnamese_vowel_highscores",JSON.stringify(ct)),w5()}},mt=(Z="practice")=>{if(Pn(),window.scrollTo(0,0),f(Z),m("expert"),x(0),A(0),z(3),_(60),Q(0),K(0),nt(null),dt(!1),v(!0),i.length>0){const st=Z==="toneHarmony"?Qp(i,new Set):Hp(i,new Set,0);s(st)}},T=()=>{Pn(),v(!1),f(null),s(null),nt(null)},H=Z=>{if(!o||J)return;nt(Z);const st=Z===o.correctAnswer;Q(fe=>fe+1);const ct=h==="beginner"?10:h==="intermediate"?20:35;if(st){T5(),K(ai=>ai+1);const fe=S+1;A(fe),fe>C&&B(fe);const ze=fe>=3?Math.floor(fe/3)+1:1,wa=ct*ze;x(ai=>ai+wa)}else Zp(),A(0),c==="arcade"&&z(fe=>{const ze=fe-1;return ze<=0&&setTimeout(()=>{rt()},600),ze});const jt=new Date,te=jt.getFullYear(),Ut=String(jt.getMonth()+1).padStart(2,"0"),ii=String(jt.getDate()).padStart(2,"0"),Mi=`${te}-${Ut}-${ii}`,Ta={word1:o.word1,word2:o.word2,correctAnswer:o.correctAnswer,userAnswer:Z,isCorrect:st,timestamp:jt.toLocaleTimeString(),date:Mi,mode:c||"practice"};X(fe=>[Ta,...fe])},W=()=>{if(Pn(),nt(null),dt(!1),i.length>0){const Z=c==="toneHarmony"?Qp(i,new Set):Hp(i,new Set,U);s(Z)}};return g.jsxs("div",{id:"main-app-shell",className:"min-h-screen bg-[#FAF8F5] text-[#3D3D33] font-sans flex flex-col justify-between selection:bg-[#E9E4DB] selection:text-[#5A5A40]",children:[g.jsx("div",{className:"h-[3px] w-full bg-gradient-to-r from-[#6B705C] via-[#D4A373] to-[#E6C280] flex-none z-50 shadow-3xs"}),g.jsx("header",{id:"primary-navbar",className:"bg-white/95 border-b border-[#EBE7E0] sticky top-0 z-45 shadow-3xs backdrop-blur-md",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2.5",children:[g.jsx("div",{className:"h-9 w-9 rounded-xl bg-gradient-to-tr from-[#6B705C] to-[#5A5A40] border border-[#D4A373]/30 flex items-center justify-center text-white shadow-xs",children:g.jsx("span",{className:"font-serif font-black text-lg select-none",children:"V"})}),g.jsxs("div",{className:"flex flex-col",children:[g.jsx("h1",{className:"font-serif italic font-bold text-[#3D3D33] tracking-tight leading-tight text-sm sm:text-base",children:"Vietnamese Vowel Recognition Quiz"}),g.jsx("span",{className:"text-[10px] text-[#A5A58D] font-mono tracking-wider",children:"Nguyên Âm Tiếng Việt Study Center"})]})]}),g.jsx("div",{className:"flex items-center gap-2.5",children:g.jsxs("button",{type:"button",id:"toggle-dictionary-button",onClick:()=>{Pn(),St(!$)},className:`text-xs flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-semibold transition duration-150 cursor-pointer border ${$?"bg-[#6B705C] text-white border-[#6B705C] hover:bg-[#5A5A40]":"bg-[#F2EFE9] hover:bg-[#E9E4DB] text-[#5A5A40] border-[#DCD7CC]"}`,children:[g.jsx(qy,{className:"w-3.5 h-3.5"}),g.jsx("span",{children:"Dictionary"})]})})]})}),g.jsxs("main",{id:"main-application-panel",className:`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full flex flex-col items-center transition-all ${p?"py-3.5":"py-8"} space-y-12`,children:[g.jsx("div",{className:"w-full flex flex-col items-center",children:g.jsx(Oc,{mode:"wait",children:p?g.jsx(jl.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},className:"w-full flex flex-col items-center space-y-4",children:o&&g.jsx(f2,{question:o,difficulty:h,onAnswer:H,selectedAnswer:J,showCorrect:J!==null,scoreMultiplier:h==="beginner"?10:h==="intermediate"?20:35,onNext:W,streak:S,bestStreak:C,onExit:T})},"playing-panel"):g.jsxs(jl.div,{initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.98},id:"gamemode-lobby",className:"w-full bg-white border border-[#EBE7E0] rounded-[32px] shadow-sm p-6 md:p-10 space-y-8",children:[g.jsxs("div",{className:"text-center max-w-xl mx-auto space-y-2",children:[g.jsx("h2",{className:"text-2xl md:text-3xl font-serif italic text-[#3D3D33] tracking-tight font-bold",children:"Mental Translation Vowel Challenge"}),g.jsx("p",{className:"text-xs md:text-sm text-[#6B705C] leading-relaxed font-sans",children:"Test your inner recall of Vietnamese spelling. This cognitive practice module challenges you to translate English words in your head to identify shared orthographic vowel sounds."})]}),g.jsxs("div",{className:"space-y-4 font-sans bg-[#FAF8F5]/80 p-6 rounded-2xl border border-[#EBE7E0]",children:[g.jsx("span",{className:"text-[11px] font-mono font-bold text-[#A5A58D] uppercase tracking-widest block",children:"Instructions & Rules"}),g.jsxs("ul",{className:"space-y-3.5 text-xs md:text-sm text-[#5A5A40] leading-relaxed",children:[g.jsxs("li",{className:"flex items-start gap-3",children:[g.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"1"}),g.jsxs("div",{children:[g.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Mental Translation Setup"}),"You will be shown dual English words side-by-side. Their Vietnamese equivalents are completely hidden on screen."]})]}),g.jsxs("li",{className:"flex items-start gap-3",children:[g.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"2"}),g.jsxs("div",{children:[g.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Spot Vowels or Accent Marks"}),"Identify the shared base vowel symbol in Mode A, or find the identical tone accent mark (Ngang, Sắc, Huyền, Hỏi, Ngã, Nặng) shared across the terms in Mode B."]})]}),g.jsxs("li",{className:"flex items-start gap-3",children:[g.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"3"}),g.jsxs("div",{children:[g.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Climbing Word Complexity"}),"You will start with simple, short single-syllable Vietnamese words (e.g. ",g.jsx("span",{className:"italic font-serif",children:"năm, mẹ, cá"}),"). As your correct answer streak goes up and you progress through the session, the word length and complexity will grow."]})]}),g.jsxs("li",{className:"flex items-start gap-3",children:[g.jsx("span",{className:"flex-none flex items-center justify-center h-5 w-5 rounded-full bg-[#6B705C] text-white text-[10px] font-mono font-bold mt-0.5",children:"4"}),g.jsxs("div",{children:[g.jsx("strong",{className:"text-[#3D3D33] font-serif block",children:"Relaxed Practice Mode"}),"There are no timers and no life limitations. Toggle the Interactive Dictionary anytime using the button in the top right to reveal pronunciation guides and phonetic assistance!"]})]})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 w-full pt-4 font-sans",children:[g.jsxs("div",{className:"bg-[#FAF8F5]/80 border-t-4 border-t-[#6B705C] border-x border-b border-[#EBE7E0] p-6 rounded-[24px] space-y-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition duration-150",children:[g.jsxs("div",{className:"space-y-2",children:[g.jsx("div",{className:"h-10 w-10 bg-gradient-to-br from-[#6B705C]/20 to-[#6B705C]/5 rounded-xl flex items-center justify-center text-[#6B705C] border border-[#6B705C]/20 shadow-3xs",children:g.jsx(o2,{className:"w-5 h-5 text-[#6B705C]"})}),g.jsx("h3",{className:"font-serif italic font-bold text-lg text-[#3D3D33] tracking-tight",children:"Mode A: Vowel Recognition"}),g.jsx("p",{className:"text-xs text-[#6B705C] leading-relaxed",children:"Translate hidden English terms mentally to identify isomorphs and spot their shared central Vietnamese vowel symbol."})]}),g.jsx("div",{children:g.jsxs("button",{type:"button",id:"start-vowel-quiz-button",onClick:()=>mt("practice"),className:"w-full py-3 bg-[#6B705C] hover:bg-[#5A5A40] text-white font-serif italic text-sm rounded-full flex items-center justify-center gap-1.5 transition duration-155 cursor-pointer font-bold shadow-2xs hover:shadow-xs mt-2",children:[g.jsx(Wp,{className:"w-3.5 h-3.5 fill-white"}),g.jsx("span",{children:"Start Vowel Quest"})]})})]}),g.jsxs("div",{className:"bg-[#FAF8F5]/80 border-t-4 border-t-[#D4A373] border-x border-b border-[#EBE7E0] p-6 rounded-[24px] space-y-4 flex flex-col justify-between shadow-2xs hover:shadow-xs transition duration-150",children:[g.jsxs("div",{className:"space-y-2",children:[g.jsx("div",{className:"h-10 w-10 bg-gradient-to-br from-[#D4A373]/20 to-[#D4A373]/5 rounded-xl flex items-center justify-center text-[#C58B58] border border-[#D4A373]/30 shadow-3xs",children:g.jsx(Yy,{className:"w-5 h-5 text-[#C58B58]"})}),g.jsx("h3",{className:"font-serif italic font-bold text-lg text-[#3D3D33] tracking-tight",children:"Mode B: Accent Mark Harmony"}),g.jsx("p",{className:"text-xs text-[#6B705C] leading-relaxed",children:"Identify identical accent marks across matching consonant structures and classify standard Vietnamese tone diacritic keys."})]}),g.jsx("div",{children:g.jsxs("button",{type:"button",id:"start-tone-harmony-button",onClick:()=>mt("toneHarmony"),className:"w-full py-3 bg-[#D4A373] hover:bg-[#C58B58] border border-[#C58B58]/25 text-white font-serif italic text-sm rounded-full flex items-center justify-center gap-1.5 transition duration-155 cursor-pointer font-bold shadow-2xs hover:shadow-xs mt-2",children:[g.jsx(Wp,{className:"w-3.5 h-3.5 fill-white"}),g.jsx("span",{children:"Start Tone Match"})]})})]})]})]},"lobby-panel")})}),g.jsx("div",{id:"session-history-container",className:"w-full pt-6 border-t border-[#EBE7E0]",children:g.jsx(v2,{history:N,onClearHistory:()=>{Pn(),X([])}})})]}),g.jsx("footer",{id:"primary-footer",className:"bg-white border-t border-[#EBE7E0] mt-16 py-8",children:g.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A5A58D] font-sans",children:[g.jsx("p",{children:"© 2026 Vietnamese Vowel Recognition Study Center. Built using standard orthographic guidelines."}),g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("span",{children:"Learn Vietnamese Phonetics"}),g.jsx("span",{children:"•"}),g.jsx("span",{children:"Accent Vowel Recognition Code"})]})]})}),g.jsx(Oc,{children:$&&g.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",id:"vowel-dictionary-drawer-shell",children:[g.jsx(jl.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>{Pn(),St(!1)},className:"absolute inset-0 bg-black/35 backdrop-blur-xs transition-opacity cursor-pointer animate-fade-in"}),g.jsx("div",{className:"absolute inset-y-0 right-0 max-w-full flex pl-10",children:g.jsxs(jl.div,{initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{type:"spring",damping:26,stiffness:220},className:"w-screen max-w-md md:max-w-2xl bg-white shadow-2xl flex flex-col h-full relative",children:[g.jsx("div",{className:"absolute top-4 right-4 z-50",children:g.jsx("button",{type:"button",onClick:()=>{Pn(),St(!1)},className:"p-2 rounded-full hover:bg-[#FAF8F5] text-[#A5A58D] hover:text-[#3D3D33] transition cursor-pointer flex items-center justify-center bg-white/85 shadow-2xs border border-[#EBE7E0]",title:"Close Dictionary",children:g.jsx(Hy,{className:"h-4 w-4"})})}),g.jsx("div",{className:"h-full pt-12 pb-4 px-2 flex flex-col overflow-hidden",children:g.jsx(d2,{})})]})})]})})]})}Sx.createRoot(document.getElementById("root")).render(g.jsx(G.StrictMode,{children:g.jsx(p2,{})}));
