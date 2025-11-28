(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $g(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var fd={exports:{}},No={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bx;function HS(){if(Bx)return No;Bx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return No.Fragment=t,No.jsx=i,No.jsxs=i,No}var Fx;function GS(){return Fx||(Fx=1,fd.exports=HS()),fd.exports}var Bt=GS(),dd={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix;function VS(){if(Ix)return de;Ix=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function y(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,M={};function v(z,at,Et){this.props=z,this.context=at,this.refs=M,this.updater=Et||E}v.prototype.isReactComponent={},v.prototype.setState=function(z,at){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,at,"setState")},v.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function O(){}O.prototype=v.prototype;function D(z,at,Et){this.props=z,this.context=at,this.refs=M,this.updater=Et||E}var F=D.prototype=new O;F.constructor=D,T(F,v.prototype),F.isPureReactComponent=!0;var V=Array.isArray;function U(){}var P={H:null,A:null,T:null,S:null},k=Object.prototype.hasOwnProperty;function w(z,at,Et){var Ct=Et.ref;return{$$typeof:o,type:z,key:at,ref:Ct!==void 0?Ct:null,props:Et}}function C(z,at){return w(z.type,at,z.props)}function G(z){return typeof z=="object"&&z!==null&&z.$$typeof===o}function K(z){var at={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Et){return at[Et]})}var lt=/\/+/g;function ht(z,at){return typeof z=="object"&&z!==null&&z.key!=null?K(""+z.key):at.toString(36)}function dt(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(U,U):(z.status="pending",z.then(function(at){z.status==="pending"&&(z.status="fulfilled",z.value=at)},function(at){z.status==="pending"&&(z.status="rejected",z.reason=at)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function B(z,at,Et,Ct,zt){var rt=typeof z;(rt==="undefined"||rt==="boolean")&&(z=null);var ut=!1;if(z===null)ut=!0;else switch(rt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(z.$$typeof){case o:case t:ut=!0;break;case x:return ut=z._init,B(ut(z._payload),at,Et,Ct,zt)}}if(ut)return zt=zt(z),ut=Ct===""?"."+ht(z,0):Ct,V(zt)?(Et="",ut!=null&&(Et=ut.replace(lt,"$&/")+"/"),B(zt,at,Et,"",function(Ft){return Ft})):zt!=null&&(G(zt)&&(zt=C(zt,Et+(zt.key==null||z&&z.key===zt.key?"":(""+zt.key).replace(lt,"$&/")+"/")+ut)),at.push(zt)),1;ut=0;var Ut=Ct===""?".":Ct+":";if(V(z))for(var Dt=0;Dt<z.length;Dt++)Ct=z[Dt],rt=Ut+ht(Ct,Dt),ut+=B(Ct,at,Et,rt,zt);else if(Dt=y(z),typeof Dt=="function")for(z=Dt.call(z),Dt=0;!(Ct=z.next()).done;)Ct=Ct.value,rt=Ut+ht(Ct,Dt++),ut+=B(Ct,at,Et,rt,zt);else if(rt==="object"){if(typeof z.then=="function")return B(dt(z),at,Et,Ct,zt);throw at=String(z),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ut}function j(z,at,Et){if(z==null)return z;var Ct=[],zt=0;return B(z,Ct,"","",function(rt){return at.call(Et,rt,zt++)}),Ct}function W(z){if(z._status===-1){var at=z._result;at=at(),at.then(function(Et){(z._status===0||z._status===-1)&&(z._status=1,z._result=Et)},function(Et){(z._status===0||z._status===-1)&&(z._status=2,z._result=Et)}),z._status===-1&&(z._status=0,z._result=at)}if(z._status===1)return z._result.default;throw z._result}var gt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},yt={map:j,forEach:function(z,at,Et){j(z,function(){at.apply(this,arguments)},Et)},count:function(z){var at=0;return j(z,function(){at++}),at},toArray:function(z){return j(z,function(at){return at})||[]},only:function(z){if(!G(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return de.Activity=g,de.Children=yt,de.Component=v,de.Fragment=i,de.Profiler=l,de.PureComponent=D,de.StrictMode=r,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,de.__COMPILER_RUNTIME={__proto__:null,c:function(z){return P.H.useMemoCache(z)}},de.cache=function(z){return function(){return z.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(z,at,Et){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var Ct=T({},z.props),zt=z.key;if(at!=null)for(rt in at.key!==void 0&&(zt=""+at.key),at)!k.call(at,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&at.ref===void 0||(Ct[rt]=at[rt]);var rt=arguments.length-2;if(rt===1)Ct.children=Et;else if(1<rt){for(var ut=Array(rt),Ut=0;Ut<rt;Ut++)ut[Ut]=arguments[Ut+2];Ct.children=ut}return w(z.type,zt,Ct)},de.createContext=function(z){return z={$$typeof:d,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:c,_context:z},z},de.createElement=function(z,at,Et){var Ct,zt={},rt=null;if(at!=null)for(Ct in at.key!==void 0&&(rt=""+at.key),at)k.call(at,Ct)&&Ct!=="key"&&Ct!=="__self"&&Ct!=="__source"&&(zt[Ct]=at[Ct]);var ut=arguments.length-2;if(ut===1)zt.children=Et;else if(1<ut){for(var Ut=Array(ut),Dt=0;Dt<ut;Dt++)Ut[Dt]=arguments[Dt+2];zt.children=Ut}if(z&&z.defaultProps)for(Ct in ut=z.defaultProps,ut)zt[Ct]===void 0&&(zt[Ct]=ut[Ct]);return w(z,rt,zt)},de.createRef=function(){return{current:null}},de.forwardRef=function(z){return{$$typeof:h,render:z}},de.isValidElement=G,de.lazy=function(z){return{$$typeof:x,_payload:{_status:-1,_result:z},_init:W}},de.memo=function(z,at){return{$$typeof:p,type:z,compare:at===void 0?null:at}},de.startTransition=function(z){var at=P.T,Et={};P.T=Et;try{var Ct=z(),zt=P.S;zt!==null&&zt(Et,Ct),typeof Ct=="object"&&Ct!==null&&typeof Ct.then=="function"&&Ct.then(U,gt)}catch(rt){gt(rt)}finally{at!==null&&Et.types!==null&&(at.types=Et.types),P.T=at}},de.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},de.use=function(z){return P.H.use(z)},de.useActionState=function(z,at,Et){return P.H.useActionState(z,at,Et)},de.useCallback=function(z,at){return P.H.useCallback(z,at)},de.useContext=function(z){return P.H.useContext(z)},de.useDebugValue=function(){},de.useDeferredValue=function(z,at){return P.H.useDeferredValue(z,at)},de.useEffect=function(z,at){return P.H.useEffect(z,at)},de.useEffectEvent=function(z){return P.H.useEffectEvent(z)},de.useId=function(){return P.H.useId()},de.useImperativeHandle=function(z,at,Et){return P.H.useImperativeHandle(z,at,Et)},de.useInsertionEffect=function(z,at){return P.H.useInsertionEffect(z,at)},de.useLayoutEffect=function(z,at){return P.H.useLayoutEffect(z,at)},de.useMemo=function(z,at){return P.H.useMemo(z,at)},de.useOptimistic=function(z,at){return P.H.useOptimistic(z,at)},de.useReducer=function(z,at,Et){return P.H.useReducer(z,at,Et)},de.useRef=function(z){return P.H.useRef(z)},de.useState=function(z){return P.H.useState(z)},de.useSyncExternalStore=function(z,at,Et){return P.H.useSyncExternalStore(z,at,Et)},de.useTransition=function(){return P.H.useTransition()},de.version="19.2.0",de}var Hx;function Vh(){return Hx||(Hx=1,dd.exports=VS()),dd.exports}var kt=Vh();const XS=$g(kt);var hd={exports:{}},Oo={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gx;function kS(){return Gx||(Gx=1,(function(o){function t(B,j){var W=B.length;B.push(j);t:for(;0<W;){var gt=W-1>>>1,yt=B[gt];if(0<l(yt,j))B[gt]=j,B[W]=yt,W=gt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var j=B[0],W=B.pop();if(W!==j){B[0]=W;t:for(var gt=0,yt=B.length,z=yt>>>1;gt<z;){var at=2*(gt+1)-1,Et=B[at],Ct=at+1,zt=B[Ct];if(0>l(Et,W))Ct<yt&&0>l(zt,Et)?(B[gt]=zt,B[Ct]=W,gt=Ct):(B[gt]=Et,B[at]=W,gt=at);else if(Ct<yt&&0>l(zt,W))B[gt]=zt,B[Ct]=W,gt=Ct;else break t}}return j}function l(B,j){var W=B.sortIndex-j.sortIndex;return W!==0?W:B.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,_=3,y=!1,E=!1,T=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function F(B){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=B)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function V(B){if(T=!1,F(B),!E)if(i(m)!==null)E=!0,U||(U=!0,K());else{var j=i(p);j!==null&&dt(V,j.startTime-B)}}var U=!1,P=-1,k=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<k)}function G(){if(M=!1,U){var B=o.unstable_now();w=B;var j=!0;try{t:{E=!1,T&&(T=!1,O(P),P=-1),y=!0;var W=_;try{e:{for(F(B),g=i(m);g!==null&&!(g.expirationTime>B&&C());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,_=g.priorityLevel;var yt=gt(g.expirationTime<=B);if(B=o.unstable_now(),typeof yt=="function"){g.callback=yt,F(B),j=!0;break e}g===i(m)&&r(m),F(B)}else r(m);g=i(m)}if(g!==null)j=!0;else{var z=i(p);z!==null&&dt(V,z.startTime-B),j=!1}}break t}finally{g=null,_=W,y=!1}j=void 0}}finally{j?K():U=!1}}}var K;if(typeof D=="function")K=function(){D(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ht=lt.port2;lt.port1.onmessage=G,K=function(){ht.postMessage(null)}}else K=function(){v(G,0)};function dt(B,j){P=v(function(){B(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(B){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var W=_;_=j;try{return B()}finally{_=W}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(B,j){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var W=_;_=B;try{return j()}finally{_=W}},o.unstable_scheduleCallback=function(B,j,W){var gt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?gt+W:gt):W=gt,B){case 1:var yt=-1;break;case 2:yt=250;break;case 5:yt=1073741823;break;case 4:yt=1e4;break;default:yt=5e3}return yt=W+yt,B={id:x++,callback:j,priorityLevel:B,startTime:W,expirationTime:yt,sortIndex:-1},W>gt?(B.sortIndex=W,t(p,B),i(m)===null&&B===i(p)&&(T?(O(P),P=-1):T=!0,dt(V,W-gt))):(B.sortIndex=yt,t(m,B),E||y||(E=!0,U||(U=!0,K()))),B},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(B){var j=_;return function(){var W=_;_=j;try{return B.apply(this,arguments)}finally{_=W}}}})(md)),md}var Vx;function WS(){return Vx||(Vx=1,pd.exports=kS()),pd.exports}var xd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx;function qS(){if(Xx)return Ln;Xx=1;var o=Vh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Ln.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Ln.useFormStatus=function(){return d.H.useHostTransitionStatus()},Ln.version="19.2.0",Ln}var kx;function YS(){if(kx)return xd.exports;kx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),xd.exports=qS(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx;function jS(){if(Wx)return Oo;Wx=1;var o=WS(),t=Vh(),i=YS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,s=f;break}if(A===s){S=!0,s=u,a=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===a){S=!0,a=f,s=u;break}if(A===s){S=!0,s=f,a=u;break}A=A.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ht(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case U:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case D:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ht(e.type)||"Memo";case k:n=e._payload,e=e._init;try{return ht(e(n))}catch{}}return null}var dt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},gt=[],yt=-1;function z(e){return{current:e}}function at(e){0>yt||(e.current=gt[yt],gt[yt]=null,yt--)}function Et(e,n){yt++,gt[yt]=e.current,e.current=n}var Ct=z(null),zt=z(null),rt=z(null),ut=z(null);function Ut(e,n){switch(Et(rt,n),Et(zt,e),Et(Ct,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?sx(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=sx(n),e=ox(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(Ct),Et(Ct,e)}function Dt(){at(Ct),at(zt),at(rt)}function Ft(e){e.memoizedState!==null&&Et(ut,e);var n=Ct.current,a=ox(n,e.type);n!==a&&(Et(zt,e),Et(Ct,a))}function ee(e){zt.current===e&&(at(Ct),at(zt)),ut.current===e&&(at(ut),wo._currentValue=W)}var Ue,Yt;function fe(e){if(Ue===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ue=n&&n[1]||"",Yt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ue+e+Yt}var I=!1;function ce(e,n){if(!e||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var it=ct}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ct){it=ct}e.call(vt.prototype)}}else{try{throw Error()}catch(ct){it=ct}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&it&&typeof ct.stack=="string")return[ct.stack,it.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var H=S.split(`
`),$=A.split(`
`);for(u=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===H.length||u===$.length)for(s=H.length-1,u=$.length-1;1<=s&&0<=u&&H[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(H[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||H[s]!==$[u]){var pt=`
`+H[s].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=s&&0<=u);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?fe(a):""}function ae(e,n){switch(e.tag){case 26:case 27:case 5:return fe(e.type);case 16:return fe("Lazy");case 13:return e.child!==n&&n!==null?fe("Suspense Fallback"):fe("Suspense");case 19:return fe("SuspenseList");case 0:case 15:return ce(e.type,!1);case 11:return ce(e.type.render,!1);case 1:return ce(e.type,!0);case 31:return fe("Activity");default:return""}}function be(e){try{var n="",a=null;do n+=ae(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ht=Object.prototype.hasOwnProperty,Le=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,oe=o.unstable_shouldYield,N=o.unstable_requestPaint,b=o.unstable_now,Q=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,Mt=o.unstable_UserBlockingPriority,ft=o.unstable_NormalPriority,Kt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Jt=o.log,Wt=o.unstable_setDisableYieldValue,bt=null,At=null;function Qt(e){if(typeof Jt=="function"&&Wt(e),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(bt,e)}catch{}}var Gt=Math.clz32?Math.clz32:L,Pt=Math.log,re=Math.LN2;function L(e){return e>>>=0,e===0?32:31-(Pt(e)/re|0)|0}var mt=256,St=262144,Tt=4194304;function nt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ot(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var u=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?u=nt(s):(S&=A,S!==0?u=nt(S):a||(a=A&~e,a!==0&&(u=nt(a))))):(A=s&~f,A!==0?u=nt(A):S!==0?u=nt(S):a||(a=s&~e,a!==0&&(u=nt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Rt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function qt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ge(){var e=Tt;return Tt<<=1,(Tt&62914560)===0&&(Tt=4194304),e}function Se(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function sn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Sn(e,n,a,s,u,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,H=e.expirationTimes,$=e.hiddenUpdates;for(a=S&~a;0<a;){var pt=31-Gt(a),vt=1<<pt;A[pt]=0,H[pt]=-1;var it=$[pt];if(it!==null)for($[pt]=null,pt=0;pt<it.length;pt++){var ct=it[pt];ct!==null&&(ct.lane&=-536870913)}a&=~vt}s!==0&&Or(e,s,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Or(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Gt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function ya(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Gt(a),u=1<<s;u&n|e[s]&n&&(e[s]|=n),a&=~u}}function nr(e,n){var a=n&-n;return a=(a&42)!==0?1:In(a),(a&(e.suspendedLanes|n))!==0?0:a}function In(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ci(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vs(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Dx(e.type))}function Xs(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Zn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Zn,mn="__reactProps$"+Zn,Fi="__reactContainer$"+Zn,zr="__reactEvents$"+Zn,au="__reactListeners$"+Zn,ru="__reactHandles$"+Zn,il="__reactResources$"+Zn,ir="__reactMarker$"+Zn;function ks(e){delete e[cn],delete e[mn],delete e[zr],delete e[au],delete e[ru]}function Ma(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Fi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=px(e);e!==null;){if(a=e[cn])return a;e=px(e)}return n}e=a,a=e.parentNode}return null}function R(e){if(e=e[cn]||e[Fi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function st(e){var n=e[il];return n||(n=e[il]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function et(e){e[ir]=!0}var Z=new Set,wt={};function Nt(e,n){It(e,n),It(e+"Capture",n)}function It(e,n){for(wt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ie={},le={};function $t(e){return Ht.call(le,e)?!0:Ht.call(ie,e)?!1:Vt.test(e)?le[e]=!0:(ie[e]=!0,!1)}function pe(e,n,a){if($t(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Oe(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function Re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ie(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ne(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=Ie(e)?"checked":"value";e._valueTracker=ne(e,n,""+e[n])}}function Ce(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Ie(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function yn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ba=/[\n"\\]/g;function Ze(e){return e.replace(ba,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ii(e,n,a,s,u,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Re(n)):e.value!==""+Re(n)&&(e.value=""+Re(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Mn(e,S,Re(n)):a!=null?Mn(e,S,Re(a)):s!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Re(A):e.removeAttribute("name")}function Ke(e,n,a,s,u,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+Re(a):"",n=n!=null?""+Re(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=A?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Ye(e)}function Mn(e,n,a){n==="number"&&yn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function xn(e,n,a,s){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Re(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,s&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function bn(e,n,a){if(n!=null&&(n=""+Re(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Re(a):""}function Rn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(dt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Re(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Ye(e)}function wi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Hi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ip(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Hi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function ap(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&ip(e,u,s)}else for(var f in n)n.hasOwnProperty(f)&&ip(e,f,n[f])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(e){return B_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gi(){}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pr=null,Br=null;function rp(e){var n=R(e);if(n&&(e=n.stateNode)){var a=e[mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ii(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ze(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var u=s[mn]||null;if(!u)throw Error(r(90));Ii(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Ce(s)}break t;case"textarea":bn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&xn(e,!!a.multiple,n,!1)}}}var cu=!1;function sp(e,n,a){if(cu)return e(n,a);cu=!0;try{var s=e(n);return s}finally{if(cu=!1,(Pr!==null||Br!==null)&&(Wl(),Pr&&(n=Pr,e=Br,Br=Pr=null,rp(n),e)))for(n=0;n<e.length;n++)rp(e[n])}}function Ws(e,n){var a=e.stateNode;if(a===null)return null;var s=a[mn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Vi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){uu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{uu=!1}var Ea=null,fu=null,rl=null;function op(){if(rl)return rl;var e,n=fu,a=n.length,s,u="value"in Ea?Ea.value:Ea.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===u[f-s];s++);return rl=u.slice(e,1<s?1-s:void 0)}function sl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ol(){return!0}function lp(){return!1}function Hn(e){function n(a,s,u,f,S){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ol:lp,this.isPropagationStopped=lp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ol)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ol)},persist:function(){},isPersistent:ol}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=Hn(ar),Ys=g({},ar,{view:0,detail:0}),F_=Hn(Ys),du,hu,js,cl=g({},Ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==js&&(js&&e.type==="mousemove"?(du=e.screenX-js.screenX,hu=e.screenY-js.screenY):hu=du=0,js=e),du)},movementY:function(e){return"movementY"in e?e.movementY:hu}}),cp=Hn(cl),I_=g({},cl,{dataTransfer:0}),H_=Hn(I_),G_=g({},Ys,{relatedTarget:0}),pu=Hn(G_),V_=g({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),X_=Hn(V_),k_=g({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),W_=Hn(k_),q_=g({},ar,{data:0}),up=Hn(q_),Y_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Z_[e])?!!n[e]:!1}function mu(){return K_}var Q_=g({},Ys,{key:function(e){if(e.key){var n=Y_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?j_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?sl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),J_=Hn(Q_),$_=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fp=Hn($_),tv=g({},Ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),ev=Hn(tv),nv=g({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),iv=Hn(nv),av=g({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rv=Hn(av),sv=g({},ar,{newState:0,oldState:0}),ov=Hn(sv),lv=[9,13,27,32],xu=Vi&&"CompositionEvent"in window,Zs=null;Vi&&"documentMode"in document&&(Zs=document.documentMode);var cv=Vi&&"TextEvent"in window&&!Zs,dp=Vi&&(!xu||Zs&&8<Zs&&11>=Zs),hp=" ",pp=!1;function mp(e,n){switch(e){case"keyup":return lv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function uv(e,n){switch(e){case"compositionend":return xp(n);case"keypress":return n.which!==32?null:(pp=!0,hp);case"textInput":return e=n.data,e===hp&&pp?null:e;default:return null}}function fv(e,n){if(Fr)return e==="compositionend"||!xu&&mp(e,n)?(e=op(),rl=fu=Ea=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dv[e.type]:n==="textarea"}function _p(e,n,a,s){Pr?Br?Br.push(s):Br=[s]:Pr=s,n=Jl(n,"onChange"),0<n.length&&(a=new ll("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ks=null,Qs=null;function hv(e){tx(e,0)}function ul(e){var n=q(e);if(Ce(n))return e}function vp(e,n){if(e==="change")return n}var Sp=!1;if(Vi){var gu;if(Vi){var _u="oninput"in document;if(!_u){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),_u=typeof yp.oninput=="function"}gu=_u}else gu=!1;Sp=gu&&(!document.documentMode||9<document.documentMode)}function Mp(){Ks&&(Ks.detachEvent("onpropertychange",bp),Qs=Ks=null)}function bp(e){if(e.propertyName==="value"&&ul(Qs)){var n=[];_p(n,Qs,e,lu(e)),sp(hv,n)}}function pv(e,n,a){e==="focusin"?(Mp(),Ks=n,Qs=a,Ks.attachEvent("onpropertychange",bp)):e==="focusout"&&Mp()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(Qs)}function xv(e,n){if(e==="click")return ul(n)}function gv(e,n){if(e==="input"||e==="change")return ul(n)}function _v(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:_v;function Js(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Ht.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Tp(e,n){var a=Ep(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Ep(a)}}function Ap(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ap(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=yn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=yn(e.document)}return n}function vu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var vv=Vi&&"documentMode"in document&&11>=document.documentMode,Ir=null,Su=null,$s=null,yu=!1;function Cp(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||Ir==null||Ir!==yn(s)||(s=Ir,"selectionStart"in s&&vu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),$s&&Js($s,s)||($s=s,s=Jl(Su,"onSelect"),0<s.length&&(n=new ll("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ir)))}function rr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},Mu={},wp={};Vi&&(wp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function sr(e){if(Mu[e])return Mu[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in wp)return Mu[e]=n[a];return e}var Dp=sr("animationend"),Up=sr("animationiteration"),Lp=sr("animationstart"),Sv=sr("transitionrun"),yv=sr("transitionstart"),Mv=sr("transitioncancel"),Np=sr("transitionend"),Op=new Map,bu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bu.push("scrollEnd");function Si(e,n){Op.set(e,n),Nt(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},li=[],Gr=0,Eu=0;function dl(){for(var e=Gr,n=Eu=Gr=0;n<e;){var a=li[n];li[n++]=null;var s=li[n];li[n++]=null;var u=li[n];li[n++]=null;var f=li[n];if(li[n++]=null,s!==null&&u!==null){var S=s.pending;S===null?u.next=u:(u.next=S.next,S.next=u),s.pending=u}f!==0&&zp(a,u,f)}}function hl(e,n,a,s){li[Gr++]=e,li[Gr++]=n,li[Gr++]=a,li[Gr++]=s,Eu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Tu(e,n,a,s){return hl(e,n,a,s),pl(e)}function or(e,n){return hl(e,null,null,n),pl(e)}function zp(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Gt(a),e=f.hiddenUpdates,s=e[u],s===null?e[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function pl(e){if(50<Mo)throw Mo=0,zf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function bv(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,s){return new bv(e,n,a,s)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xi(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Pp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ml(e,n,a,s,u,f){var S=0;if(s=e,typeof e=="function")Au(e)&&(S=1);else if(typeof e=="string")S=CS(e,a,Ct.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Qn(31,a,n,u),e.elementType=w,e.lanes=f,e;case T:return lr(a.children,u,f,n);case M:S=8,u|=24;break;case v:return e=Qn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case V:return e=Qn(13,a,n,u),e.elementType=V,e.lanes=f,e;case U:return e=Qn(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:S=10;break t;case O:S=9;break t;case F:S=11;break t;case P:S=14;break t;case k:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Qn(S,a,n,u),n.elementType=e,n.type=s,n.lanes=f,n}function lr(e,n,a,s){return e=Qn(7,e,s,n),e.lanes=a,e}function Ru(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Bp(e){var n=Qn(18,null,null,0);return n.stateNode=e,n}function Cu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fp=new WeakMap;function ci(e,n){if(typeof e=="object"&&e!==null){var a=Fp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:be(n)},Fp.set(e,n),n)}return{value:e,source:n,stack:be(n)}}var Xr=[],kr=0,xl=null,to=0,ui=[],fi=0,Ta=null,Di=1,Ui="";function ki(e,n){Xr[kr++]=to,Xr[kr++]=xl,xl=e,to=n}function Ip(e,n,a){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=Ta,Ta=e;var s=Di;e=Ui;var u=32-Gt(s)-1;s&=~(1<<u),a+=1;var f=32-Gt(n)+u;if(30<f){var S=u-u%5;f=(s&(1<<S)-1).toString(32),s>>=S,u-=S,Di=1<<32-Gt(n)+u|a<<u|s,Ui=f+e}else Di=1<<f|a<<u|s,Ui=e}function wu(e){e.return!==null&&(ki(e,1),Ip(e,1,0))}function Du(e){for(;e===xl;)xl=Xr[--kr],Xr[kr]=null,to=Xr[--kr],Xr[kr]=null;for(;e===Ta;)Ta=ui[--fi],ui[fi]=null,Ui=ui[--fi],ui[fi]=null,Di=ui[--fi],ui[fi]=null}function Hp(e,n){ui[fi++]=Di,ui[fi++]=Ui,ui[fi++]=Ta,Di=n.id,Ui=n.overflow,Ta=e}var Cn=null,Qe=null,we=!1,Aa=null,di=!1,Uu=Error(r(519));function Ra(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(ci(n,e)),Uu}function Gp(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[cn]=e,n[mn]=s,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<Eo.length;a++)Me(Eo[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Ke(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Rn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ax(n.textContent,a)?(s.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),s.onScroll!=null&&Me("scroll",n),s.onScrollEnd!=null&&Me("scrollend",n),s.onClick!=null&&(n.onclick=Gi),n=!0):n=!1,n||Ra(e,!0)}function Vp(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:Cn=Cn.return}}function Wr(e){if(e!==Cn)return!1;if(!we)return Vp(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Kf(e.type,e.memoizedProps)),a=!a),a&&Qe&&Ra(e),Vp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=hx(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Qe=hx(e)}else n===27?(n=Qe,Ga(e.type)?(e=ed,ed=null,Qe=e):Qe=n):Qe=Cn?pi(e.stateNode.nextSibling):null;return!0}function cr(){Qe=Cn=null,we=!1}function Lu(){var e=Aa;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),Aa=null),e}function eo(e){Aa===null?Aa=[e]:Aa.push(e)}var Nu=z(null),ur=null,Wi=null;function Ca(e,n,a){Et(Nu,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=Nu.current,at(Nu)}function Ou(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function zu(e,n,a,s){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var S=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var H=0;H<n.length;H++)if(A.context===n[H]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),Ou(f.return,a,e),s||(S=null);break t}f=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),Ou(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function qr(e,n,a,s){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var A=u.type;Kn(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===ut.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}u=u.return}e!==null&&zu(n,e,a,s),n.flags|=262144}function gl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fr(e){ur=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return Xp(ur,e)}function _l(e,n){return ur===null&&fr(e),Xp(e,n)}function Xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(r(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var Ev=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Tv=o.unstable_scheduleCallback,Av=o.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new Ev,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&Tv(Av,function(){e.controller.abort()})}var io=null,Bu=0,Yr=0,jr=null;function Rv(e,n){if(io===null){var a=io=[];Bu=0,Yr=Gf(),jr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Bu++,n.then(kp,kp),n}function kp(){if(--Bu===0&&io!==null){jr!==null&&(jr.status="fulfilled");var e=io;io=null,Yr=0,jr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Cv(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Wp=B.S;B.S=function(e,n){Cm=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rv(e,n),Wp!==null&&Wp(e,n)};var dr=z(null);function Fu(){var e=dr.current;return e!==null?e:je.pooledCache}function vl(e,n){n===null?Et(dr,dr.current):Et(dr,n.pool)}function qp(){var e=Fu();return e===null?null:{parent:un._currentValue,pool:e}}var Zr=Error(r(460)),Iu=Error(r(474)),Sl=Error(r(542)),yl={then:function(){}};function Yp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function jp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Gi,Gi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kp(e),e;default:if(typeof n.status=="string")n.then(Gi,Gi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Kp(e),e}throw pr=n,Zr}}function hr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(pr=a,Zr):a}}var pr=null;function Zp(){if(pr===null)throw Error(r(459));var e=pr;return pr=null,e}function Kp(e){if(e===Zr||e===Sl)throw Error(r(483))}var Kr=null,ao=0;function Ml(e){var n=ao;return ao+=1,Kr===null&&(Kr=[]),jp(Kr,e,n)}function ro(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bl(e,n){throw n.$$typeof===_?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Qp(e){function n(Y,X){if(e){var J=Y.deletions;J===null?(Y.deletions=[X],Y.flags|=16):J.push(X)}}function a(Y,X){if(!e)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function s(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=Xi(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,J){return Y.index=J,e?(J=Y.alternate,J!==null?(J=J.index,J<X?(Y.flags|=67108866,X):J):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,X,J,xt){return X===null||X.tag!==6?(X=Ru(J,Y.mode,xt),X.return=Y,X):(X=u(X,J),X.return=Y,X)}function H(Y,X,J,xt){var te=J.type;return te===T?pt(Y,X,J.props.children,xt,J.key):X!==null&&(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===k&&hr(te)===X.type)?(X=u(X,J.props),ro(X,J),X.return=Y,X):(X=ml(J.type,J.key,J.props,null,Y.mode,xt),ro(X,J),X.return=Y,X)}function $(Y,X,J,xt){return X===null||X.tag!==4||X.stateNode.containerInfo!==J.containerInfo||X.stateNode.implementation!==J.implementation?(X=Cu(J,Y.mode,xt),X.return=Y,X):(X=u(X,J.children||[]),X.return=Y,X)}function pt(Y,X,J,xt,te){return X===null||X.tag!==7?(X=lr(J,Y.mode,xt,te),X.return=Y,X):(X=u(X,J),X.return=Y,X)}function vt(Y,X,J){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Ru(""+X,Y.mode,J),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case y:return J=ml(X.type,X.key,X.props,null,Y.mode,J),ro(J,X),J.return=Y,J;case E:return X=Cu(X,Y.mode,J),X.return=Y,X;case k:return X=hr(X),vt(Y,X,J)}if(dt(X)||K(X))return X=lr(X,Y.mode,J,null),X.return=Y,X;if(typeof X.then=="function")return vt(Y,Ml(X),J);if(X.$$typeof===D)return vt(Y,_l(Y,X),J);bl(Y,X)}return null}function it(Y,X,J,xt){var te=X!==null?X.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return te!==null?null:A(Y,X,""+J,xt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case y:return J.key===te?H(Y,X,J,xt):null;case E:return J.key===te?$(Y,X,J,xt):null;case k:return J=hr(J),it(Y,X,J,xt)}if(dt(J)||K(J))return te!==null?null:pt(Y,X,J,xt,null);if(typeof J.then=="function")return it(Y,X,Ml(J),xt);if(J.$$typeof===D)return it(Y,X,_l(Y,J),xt);bl(Y,J)}return null}function ct(Y,X,J,xt,te){if(typeof xt=="string"&&xt!==""||typeof xt=="number"||typeof xt=="bigint")return Y=Y.get(J)||null,A(X,Y,""+xt,te);if(typeof xt=="object"&&xt!==null){switch(xt.$$typeof){case y:return Y=Y.get(xt.key===null?J:xt.key)||null,H(X,Y,xt,te);case E:return Y=Y.get(xt.key===null?J:xt.key)||null,$(X,Y,xt,te);case k:return xt=hr(xt),ct(Y,X,J,xt,te)}if(dt(xt)||K(xt))return Y=Y.get(J)||null,pt(X,Y,xt,te,null);if(typeof xt.then=="function")return ct(Y,X,J,Ml(xt),te);if(xt.$$typeof===D)return ct(Y,X,J,_l(X,xt),te);bl(X,xt)}return null}function Xt(Y,X,J,xt){for(var te=null,ze=null,Zt=X,me=X=0,Te=null;Zt!==null&&me<J.length;me++){Zt.index>me?(Te=Zt,Zt=null):Te=Zt.sibling;var Pe=it(Y,Zt,J[me],xt);if(Pe===null){Zt===null&&(Zt=Te);break}e&&Zt&&Pe.alternate===null&&n(Y,Zt),X=f(Pe,X,me),ze===null?te=Pe:ze.sibling=Pe,ze=Pe,Zt=Te}if(me===J.length)return a(Y,Zt),we&&ki(Y,me),te;if(Zt===null){for(;me<J.length;me++)Zt=vt(Y,J[me],xt),Zt!==null&&(X=f(Zt,X,me),ze===null?te=Zt:ze.sibling=Zt,ze=Zt);return we&&ki(Y,me),te}for(Zt=s(Zt);me<J.length;me++)Te=ct(Zt,Y,me,J[me],xt),Te!==null&&(e&&Te.alternate!==null&&Zt.delete(Te.key===null?me:Te.key),X=f(Te,X,me),ze===null?te=Te:ze.sibling=Te,ze=Te);return e&&Zt.forEach(function(qa){return n(Y,qa)}),we&&ki(Y,me),te}function se(Y,X,J,xt){if(J==null)throw Error(r(151));for(var te=null,ze=null,Zt=X,me=X=0,Te=null,Pe=J.next();Zt!==null&&!Pe.done;me++,Pe=J.next()){Zt.index>me?(Te=Zt,Zt=null):Te=Zt.sibling;var qa=it(Y,Zt,Pe.value,xt);if(qa===null){Zt===null&&(Zt=Te);break}e&&Zt&&qa.alternate===null&&n(Y,Zt),X=f(qa,X,me),ze===null?te=qa:ze.sibling=qa,ze=qa,Zt=Te}if(Pe.done)return a(Y,Zt),we&&ki(Y,me),te;if(Zt===null){for(;!Pe.done;me++,Pe=J.next())Pe=vt(Y,Pe.value,xt),Pe!==null&&(X=f(Pe,X,me),ze===null?te=Pe:ze.sibling=Pe,ze=Pe);return we&&ki(Y,me),te}for(Zt=s(Zt);!Pe.done;me++,Pe=J.next())Pe=ct(Zt,Y,me,Pe.value,xt),Pe!==null&&(e&&Pe.alternate!==null&&Zt.delete(Pe.key===null?me:Pe.key),X=f(Pe,X,me),ze===null?te=Pe:ze.sibling=Pe,ze=Pe);return e&&Zt.forEach(function(IS){return n(Y,IS)}),we&&ki(Y,me),te}function We(Y,X,J,xt){if(typeof J=="object"&&J!==null&&J.type===T&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case y:t:{for(var te=J.key;X!==null;){if(X.key===te){if(te=J.type,te===T){if(X.tag===7){a(Y,X.sibling),xt=u(X,J.props.children),xt.return=Y,Y=xt;break t}}else if(X.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===k&&hr(te)===X.type){a(Y,X.sibling),xt=u(X,J.props),ro(xt,J),xt.return=Y,Y=xt;break t}a(Y,X);break}else n(Y,X);X=X.sibling}J.type===T?(xt=lr(J.props.children,Y.mode,xt,J.key),xt.return=Y,Y=xt):(xt=ml(J.type,J.key,J.props,null,Y.mode,xt),ro(xt,J),xt.return=Y,Y=xt)}return S(Y);case E:t:{for(te=J.key;X!==null;){if(X.key===te)if(X.tag===4&&X.stateNode.containerInfo===J.containerInfo&&X.stateNode.implementation===J.implementation){a(Y,X.sibling),xt=u(X,J.children||[]),xt.return=Y,Y=xt;break t}else{a(Y,X);break}else n(Y,X);X=X.sibling}xt=Cu(J,Y.mode,xt),xt.return=Y,Y=xt}return S(Y);case k:return J=hr(J),We(Y,X,J,xt)}if(dt(J))return Xt(Y,X,J,xt);if(K(J)){if(te=K(J),typeof te!="function")throw Error(r(150));return J=te.call(J),se(Y,X,J,xt)}if(typeof J.then=="function")return We(Y,X,Ml(J),xt);if(J.$$typeof===D)return We(Y,X,_l(Y,J),xt);bl(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,X!==null&&X.tag===6?(a(Y,X.sibling),xt=u(X,J),xt.return=Y,Y=xt):(a(Y,X),xt=Ru(J,Y.mode,xt),xt.return=Y,Y=xt),S(Y)):a(Y,X)}return function(Y,X,J,xt){try{ao=0;var te=We(Y,X,J,xt);return Kr=null,te}catch(Zt){if(Zt===Zr||Zt===Sl)throw Zt;var ze=Qn(29,Zt,null,Y.mode);return ze.lanes=xt,ze.return=Y,ze}finally{}}}var mr=Qp(!0),Jp=Qp(!1),wa=!1;function Hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Fe&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=pl(e),zp(e,null,a),n}return hl(e,s,n,a),pl(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ya(e,a)}}function Vu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Xu=!1;function oo(){if(Xu){var e=jr;if(e!==null)throw e}}function lo(e,n,a,s){Xu=!1;var u=e.updateQueue;wa=!1;var f=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var H=A,$=H.next;H.next=null,S===null?f=$:S.next=$,S=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==S&&(A===null?pt.firstBaseUpdate=$:A.next=$,pt.lastBaseUpdate=H))}if(f!==null){var vt=u.baseState;S=0,pt=$=H=null,A=f;do{var it=A.lane&-536870913,ct=it!==A.lane;if(ct?(Ee&it)===it:(s&it)===it){it!==0&&it===Yr&&(Xu=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Xt=e,se=A;it=n;var We=a;switch(se.tag){case 1:if(Xt=se.payload,typeof Xt=="function"){vt=Xt.call(We,vt,it);break t}vt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=se.payload,it=typeof Xt=="function"?Xt.call(We,vt,it):Xt,it==null)break t;vt=g({},vt,it);break t;case 2:wa=!0}}it=A.callback,it!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[it]:ct.push(it))}else ct={lane:it,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?($=pt=ct,H=vt):pt=pt.next=ct,S|=it;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ct=A,A=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);pt===null&&(H=vt),u.baseState=H,u.firstBaseUpdate=$,u.lastBaseUpdate=pt,f===null&&(u.shared.lanes=0),Pa|=S,e.lanes=S,e.memoizedState=vt}}function $p(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function t0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$p(a[e],n)}var Qr=z(null),El=z(0);function e0(e,n){e=ea,Et(El,e),Et(Qr,n),ea=e|n.baseLanes}function ku(){Et(El,ea),Et(Qr,Qr.current)}function Wu(){ea=El.current,at(Qr),at(El)}var Jn=z(null),hi=null;function La(e){var n=e.alternate;Et(on,on.current&1),Et(Jn,e),hi===null&&(n===null||Qr.current!==null||n.memoizedState!==null)&&(hi=e)}function qu(e){Et(on,on.current),Et(Jn,e),hi===null&&(hi=e)}function n0(e){e.tag===22?(Et(on,on.current),Et(Jn,e),hi===null&&(hi=e)):Na()}function Na(){Et(on,on.current),Et(Jn,Jn.current)}function $n(e){at(Jn),hi===e&&(hi=null),at(on)}var on=z(0);function Tl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$f(a)||td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Yi=0,he=null,Xe=null,fn=null,Al=!1,Jr=!1,xr=!1,Rl=0,co=0,$r=null,wv=0;function nn(){throw Error(r(321))}function Yu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function ju(e,n,a,s,u,f){return Yi=f,he=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?I0:uf,xr=!1,f=a(s,u),xr=!1,Jr&&(f=a0(n,a,s,u)),i0(e),f}function i0(e){B.H=ho;var n=Xe!==null&&Xe.next!==null;if(Yi=0,fn=Xe=he=null,Al=!1,co=0,$r=null,n)throw Error(r(300));e===null||dn||(e=e.dependencies,e!==null&&gl(e)&&(dn=!0))}function a0(e,n,a,s){he=e;var u=0;do{if(Jr&&($r=null),co=0,Jr=!1,25<=u)throw Error(r(301));if(u+=1,fn=Xe=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=H0,f=n(a,s)}while(Jr);return f}function Dv(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(he.flags|=1024),n}function Zu(){var e=Rl!==0;return Rl=0,e}function Ku(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Qu(e){if(Al){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Al=!1}Yi=0,fn=Xe=he=null,Jr=!1,co=Rl=0,$r=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?he.memoizedState=fn=e:fn=fn.next=e,fn}function ln(){if(Xe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=fn===null?he.memoizedState:fn.next;if(n!==null)fn=n,Xe=e;else{if(e===null)throw he.alternate===null?Error(r(467)):Error(r(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},fn===null?he.memoizedState=fn=e:fn=fn.next=e}return fn}function Cl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=co;return co+=1,$r===null&&($r=[]),e=jp($r,e,n),n=he,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?I0:uf),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===D)return wn(e)}throw Error(r(438,String(e)))}function Ju(e){var n=null,a=he.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=he.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cl(),he.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=ln();return $u(n,Xe,e)}function $u(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=e.baseQueue,f=s.pending;if(f!==null){if(u!==null){var S=u.next;u.next=f.next,f.next=S}n.baseQueue=u=f,s.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=S=null,H=null,$=n,pt=!1;do{var vt=$.lane&-536870913;if(vt!==$.lane?(Ee&vt)===vt:(Yi&vt)===vt){var it=$.revertLane;if(it===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),vt===Yr&&(pt=!0);else if((Yi&it)===it){$=$.next,it===Yr&&(pt=!0);continue}else vt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(A=H=vt,S=f):H=H.next=vt,he.lanes|=it,Pa|=it;vt=$.action,xr&&a(f,vt),f=$.hasEagerState?$.eagerState:a(f,vt)}else it={lane:vt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},H===null?(A=H=it,S=f):H=H.next=it,he.lanes|=vt,Pa|=vt;$=$.next}while($!==null&&$!==n);if(H===null?S=f:H.next=A,!Kn(f,e.memoizedState)&&(dn=!0,pt&&(a=jr,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=H,s.lastRenderedState=f}return u===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function tf(e){var n=ln(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do f=e(f,S.action),S=S.next;while(S!==u);Kn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function r0(e,n,a){var s=he,u=ln(),f=we;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Kn((Xe||u).memoizedState,a);if(S&&(u.memoizedState=a,dn=!0),u=u.queue,af(l0.bind(null,s,u,e),[e]),u.getSnapshot!==n||S||fn!==null&&fn.memoizedState.tag&1){if(s.flags|=2048,ts(9,{destroy:void 0},o0.bind(null,s,u,a,n),null),je===null)throw Error(r(349));f||(Yi&127)!==0||s0(s,n,a)}return a}function s0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=he.updateQueue,n===null?(n=Cl(),he.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function o0(e,n,a,s){n.value=a,n.getSnapshot=s,c0(n)&&u0(e)}function l0(e,n,a){return a(function(){c0(n)&&u0(e)})}function c0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function u0(e){var n=or(e,2);n!==null&&Wn(n,e,2)}function ef(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),xr){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function f0(e,n,a,s){return e.baseState=a,$u(e,Xe,typeof s=="function"?s:ji)}function Uv(e,n,a,s,u){if(Nl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,d0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function d0(e,n){var a=n.action,s=n.payload,u=e.state;if(n.isTransition){var f=B.T,S={};B.T=S;try{var A=a(u,s),H=B.S;H!==null&&H(S,A),h0(e,n,A)}catch($){nf(e,n,$)}finally{f!==null&&S.types!==null&&(f.types=S.types),B.T=f}}else try{f=a(u,s),h0(e,n,f)}catch($){nf(e,n,$)}}function h0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){p0(e,n,s)},function(s){return nf(e,n,s)}):p0(e,n,a)}function p0(e,n,a){n.status="fulfilled",n.value=a,m0(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,d0(e,a)))}function nf(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,m0(n),n=n.next;while(n!==s)}e.action=null}function m0(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function x0(e,n){return n}function g0(e,n){if(we){var a=je.formState;if(a!==null){t:{var s=he;if(we){if(Qe){e:{for(var u=Qe,f=di;u.nodeType!==8;){if(!f){u=null;break e}if(u=pi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Qe=pi(u.nextSibling),s=u.data==="F!";break t}}Ra(s)}s=!1}s&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:x0,lastRenderedState:n},a.queue=s,a=P0.bind(null,he,s),s.dispatch=a,s=ef(!1),f=cf.bind(null,he,!1,s.queue),s=Pn(),u={state:n,dispatch:null,action:e,pending:null},s.queue=u,a=Uv.bind(null,he,u,f,a),u.dispatch=a,s.memoizedState=e,[n,a,!1]}function _0(e){var n=ln();return v0(n,Xe,e)}function v0(e,n,a){if(n=$u(e,n,x0)[0],e=Dl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=uo(n)}catch(S){throw S===Zr?Sl:S}else s=n;n=ln();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(he.flags|=2048,ts(9,{destroy:void 0},Lv.bind(null,u,a),null)),[s,f,e]}function Lv(e,n){e.action=n}function S0(e){var n=ln(),a=Xe;if(a!==null)return v0(n,a,e);ln(),n=n.memoizedState,a=ln();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function ts(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=he.updateQueue,n===null&&(n=Cl(),he.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function y0(){return ln().memoizedState}function Ul(e,n,a,s){var u=Pn();he.flags|=e,u.memoizedState=ts(1|n,{destroy:void 0},a,s===void 0?null:s)}function Ll(e,n,a,s){var u=ln();s=s===void 0?null:s;var f=u.memoizedState.inst;Xe!==null&&s!==null&&Yu(s,Xe.memoizedState.deps)?u.memoizedState=ts(n,f,a,s):(he.flags|=e,u.memoizedState=ts(1|n,f,a,s))}function M0(e,n){Ul(8390656,8,e,n)}function af(e,n){Ll(2048,8,e,n)}function Nv(e){he.flags|=4;var n=he.updateQueue;if(n===null)n=Cl(),he.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function b0(e){var n=ln().memoizedState;return Nv({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function E0(e,n){return Ll(4,2,e,n)}function T0(e,n){return Ll(4,4,e,n)}function A0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function R0(e,n,a){a=a!=null?a.concat([e]):null,Ll(4,4,A0.bind(null,n,e),a)}function rf(){}function C0(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Yu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function w0(e,n){var a=ln();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Yu(n,s[1]))return s[0];if(s=e(),xr){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[s,n],s}function sf(e,n,a){return a===void 0||(Yi&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Dm(),he.lanes|=e,Pa|=e,a)}function D0(e,n,a,s){return Kn(a,n)?a:Qr.current!==null?(e=sf(e,a,s),Kn(e,n)||(dn=!0),e):(Yi&42)===0||(Yi&1073741824)!==0&&(Ee&261930)===0?(dn=!0,e.memoizedState=a):(e=Dm(),he.lanes|=e,Pa|=e,n)}function U0(e,n,a,s,u){var f=j.p;j.p=f!==0&&8>f?f:8;var S=B.T,A={};B.T=A,cf(e,!1,n,a);try{var H=u(),$=B.S;if($!==null&&$(A,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=Cv(H,s);fo(e,n,pt,ni(e))}else fo(e,n,s,ni(e))}catch(vt){fo(e,n,{then:function(){},status:"rejected",reason:vt},ni())}finally{j.p=f,S!==null&&A.types!==null&&(S.types=A.types),B.T=S}}function Ov(){}function of(e,n,a,s){if(e.tag!==5)throw Error(r(476));var u=L0(e).queue;U0(e,u,n,W,a===null?Ov:function(){return N0(e),a(s)})}function L0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function N0(e){var n=L0(e);n.next===null&&(n=e.alternate.memoizedState),fo(e,n.next.queue,{},ni())}function lf(){return wn(wo)}function O0(){return ln().memoizedState}function z0(){return ln().memoizedState}function zv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();e=Da(a);var s=Ua(n,e,a);s!==null&&(Wn(s,n,a),so(s,n,a)),n={cache:Pu()},e.payload=n;return}n=n.return}}function Pv(e,n,a){var s=ni();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?B0(n,a):(a=Tu(e,n,a,s),a!==null&&(Wn(a,e,s),F0(a,n,s)))}function P0(e,n,a){var s=ni();fo(e,n,a,s)}function fo(e,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))B0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,S))return hl(e,n,u,0),je===null&&dl(),!1}catch{}finally{}if(a=Tu(e,n,u,s),a!==null)return Wn(a,e,s),F0(a,n,s),!0}return!1}function cf(e,n,a,s){if(s={lane:2,revertLane:Gf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(r(479))}else n=Tu(e,a,s,2),n!==null&&Wn(n,e,2)}function Nl(e){var n=e.alternate;return e===he||n!==null&&n===he}function B0(e,n){Jr=Al=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function F0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,ya(e,a)}}var ho={readContext:wn,use:wl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};ho.useEffectEvent=nn;var I0={readContext:wn,use:wl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:M0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ul(4194308,4,A0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ul(4194308,4,e,n)},useInsertionEffect:function(e,n){Ul(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var s=e();if(xr){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Pn();if(a!==void 0){var u=a(n);if(xr){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},s.queue=e,e=e.dispatch=Pv.bind(null,he,e),[s.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=ef(e);var n=e.queue,a=P0.bind(null,he,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(e,n){var a=Pn();return sf(a,e,n)},useTransition:function(){var e=ef(!1);return e=U0.bind(null,he,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=he,u=Pn();if(we){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(Ee&127)!==0||s0(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,M0(l0.bind(null,s,f,e),[e]),s.flags|=2048,ts(9,{destroy:void 0},o0.bind(null,s,f,a,n),null),a},useId:function(){var e=Pn(),n=je.identifierPrefix;if(we){var a=Ui,s=Di;a=(s&~(1<<32-Gt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=wv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:lf,useFormState:g0,useActionState:g0,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=cf.bind(null,he,!0,a),a.dispatch=n,[e,n]},useMemoCache:Ju,useCacheRefresh:function(){return Pn().memoizedState=zv.bind(null,he)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},uf={readContext:wn,use:wl,useCallback:C0,useContext:wn,useEffect:af,useImperativeHandle:R0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:w0,useReducer:Dl,useRef:y0,useState:function(){return Dl(ji)},useDebugValue:rf,useDeferredValue:function(e,n){var a=ln();return D0(a,Xe.memoizedState,e,n)},useTransition:function(){var e=Dl(ji)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:r0,useId:O0,useHostTransitionStatus:lf,useFormState:_0,useActionState:_0,useOptimistic:function(e,n){var a=ln();return f0(a,Xe,e,n)},useMemoCache:Ju,useCacheRefresh:z0};uf.useEffectEvent=b0;var H0={readContext:wn,use:wl,useCallback:C0,useContext:wn,useEffect:af,useImperativeHandle:R0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:w0,useReducer:tf,useRef:y0,useState:function(){return tf(ji)},useDebugValue:rf,useDeferredValue:function(e,n){var a=ln();return Xe===null?sf(a,e,n):D0(a,Xe.memoizedState,e,n)},useTransition:function(){var e=tf(ji)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:r0,useId:O0,useHostTransitionStatus:lf,useFormState:S0,useActionState:S0,useOptimistic:function(e,n){var a=ln();return Xe!==null?f0(a,Xe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:z0};H0.useEffectEvent=b0;function ff(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=ni(),u=Da(s);u.payload=n,a!=null&&(u.callback=a),n=Ua(e,u,s),n!==null&&(Wn(n,e,s),so(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=ni(),u=Da(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ua(e,u,s),n!==null&&(Wn(n,e,s),so(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ni(),s=Da(a);s.tag=2,n!=null&&(s.callback=n),n=Ua(e,s,a),n!==null&&(Wn(n,e,a),so(n,e,a))}};function G0(e,n,a,s,u,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Js(a,s)||!Js(u,f):!0}function V0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&df.enqueueReplaceState(n,n.state,null)}function gr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function X0(e){fl(e)}function k0(e){console.error(e)}function W0(e){fl(e)}function Ol(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function q0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(e,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Ol(e,n)},a}function Y0(e){return e=Da(e),e.tag=3,e}function j0(e,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;e.payload=function(){return u(f)},e.callback=function(){q0(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){q0(n,a,s),typeof u!="function"&&(Ba===null?Ba=new Set([this]):Ba.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function Bv(e,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&qr(n,a,u,!0),a=Jn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?ql():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Ff(e,s,u)),!1;case 22:return a.flags|=65536,s===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Ff(e,s,u)),!1}throw Error(r(435,a.tag))}return Ff(e,s,u),ql(),!1}if(we)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Uu&&(e=Error(r(422),{cause:s}),eo(ci(e,a)))):(s!==Uu&&(n=Error(r(423),{cause:s}),eo(ci(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,s=ci(s,a),u=hf(e.stateNode,s,u),Vu(e,u),an!==4&&(an=2)),!1;var f=Error(r(520),{cause:s});if(f=ci(f,a),yo===null?yo=[f]:yo.push(f),an!==4&&(an=2),n===null)return!0;s=ci(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=hf(a.stateNode,s,e),Vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ba===null||!Ba.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Y0(u),j0(u,e,a,s),Vu(a,u),!1}a=a.return}while(a!==null);return!1}var pf=Error(r(461)),dn=!1;function Dn(e,n,a,s){n.child=e===null?Jp(n,null,a,s):mr(n,e.child,a,s)}function Z0(e,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var A in s)A!=="ref"&&(S[A]=s[A])}else S=s;return fr(n),s=ju(e,n,a,S,f,u),A=Zu(),e!==null&&!dn?(Ku(e,n,u),Zi(e,n,u)):(we&&A&&wu(n),n.flags|=1,Dn(e,n,s,u),n.child)}function K0(e,n,a,s,u){if(e===null){var f=a.type;return typeof f=="function"&&!Au(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Q0(e,n,f,s,u)):(e=ml(a.type,null,s,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Mf(e,u)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Js,a(S,s)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=Xi(f,s),e.ref=n.ref,e.return=n,n.child=e}function Q0(e,n,a,s,u){if(e!==null){var f=e.memoizedProps;if(Js(f,s)&&e.ref===n.ref)if(dn=!1,n.pendingProps=s=f,Mf(e,u))(e.flags&131072)!==0&&(dn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return mf(e,n,a,s,u)}function J0(e,n,a,s){var u=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return $0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(n,f!==null?f.cachePool:null),f!==null?e0(n,f):ku(),n0(n);else return s=n.lanes=536870912,$0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(vl(n,f.cachePool),e0(n,f),Na(),n.memoizedState=null):(e!==null&&vl(n,null),ku(),Na());return Dn(e,n,u,a),n.child}function po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function $0(e,n,a,s,u){var f=Fu();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&vl(n,null),ku(),n0(n),e!==null&&qr(e,n,s,!0),n.childLanes=u,null}function zl(e,n){return n=Bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function tm(e,n,a){return mr(n,e.child,null,a),e=zl(n,n.pendingProps),e.flags|=2,$n(n),n.memoizedState=null,e}function Fv(e,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(s.mode==="hidden")return e=zl(n,s),n.lanes=536870912,po(null,e);if(qu(n),(e=Qe)?(e=dx(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Bp(e),a.return=n,n.child=a,Cn=n,Qe=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return zl(n,s)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=tm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||qr(e,n,a,!1),u=(a&e.childLanes)!==0,dn||u){if(s=je,s!==null&&(S=nr(s,a),S!==0&&S!==f.retryLane))throw f.retryLane=S,or(e,S),Wn(s,e,S),pf;ql(),n=tm(e,n,a)}else e=f.treeContext,Qe=pi(S.nextSibling),Cn=n,we=!0,Aa=null,di=!1,e!==null&&Hp(n,e),n=zl(n,s),n.flags|=4096;return n}return e=Xi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Pl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function mf(e,n,a,s,u){return fr(n),a=ju(e,n,a,s,void 0,u),s=Zu(),e!==null&&!dn?(Ku(e,n,u),Zi(e,n,u)):(we&&s&&wu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function em(e,n,a,s,u,f){return fr(n),n.updateQueue=null,a=a0(n,s,a,u),i0(e),s=Zu(),e!==null&&!dn?(Ku(e,n,f),Zi(e,n,f)):(we&&s&&wu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function nm(e,n,a,s,u){if(fr(n),n.stateNode===null){var f=Vr,S=a.contextType;typeof S=="object"&&S!==null&&(f=wn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=df,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Hu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?wn(S):Vr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(ff(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&df.enqueueReplaceState(f,f.state,null),lo(n,s,f,u),oo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,H=gr(a,A);f.props=H;var $=f.context,pt=a.contextType;S=Vr,typeof pt=="object"&&pt!==null&&(S=wn(pt));var vt=a.getDerivedStateFromProps;pt=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||$!==S)&&V0(n,f,s,S),wa=!1;var it=n.memoizedState;f.state=it,lo(n,s,f,u),oo(),$=n.memoizedState,A||it!==$||wa?(typeof vt=="function"&&(ff(n,a,vt,s),$=n.memoizedState),(H=wa||G0(n,a,H,s,it,$,S))?(pt||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=S,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Gu(e,n),S=n.memoizedProps,pt=gr(a,S),f.props=pt,vt=n.pendingProps,it=f.context,$=a.contextType,H=Vr,typeof $=="object"&&$!==null&&(H=wn($)),A=a.getDerivedStateFromProps,($=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==vt||it!==H)&&V0(n,f,s,H),wa=!1,it=n.memoizedState,f.state=it,lo(n,s,f,u),oo();var ct=n.memoizedState;S!==vt||it!==ct||wa||e!==null&&e.dependencies!==null&&gl(e.dependencies)?(typeof A=="function"&&(ff(n,a,A,s),ct=n.memoizedState),(pt=wa||G0(n,a,pt,s,it,ct,H)||e!==null&&e.dependencies!==null&&gl(e.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=H,s=pt):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Pl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=mr(n,e.child,null,u),n.child=mr(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Zi(e,n,u),e}function im(e,n,a,s){return cr(),n.flags|=256,Dn(e,n,a,s),n.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(e){return{baseLanes:e,cachePool:qp()}}function _f(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ei),e}function am(e,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(on.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?La(n):Na(),(e=Qe)?(e=dx(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=Bp(e),a.return=n,n.child=a,Cn=n,Qe=null)):e=null,e===null)throw Ra(n);return td(e)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,u?(Na(),u=n.mode,A=Bl({mode:"hidden",children:A},u),s=lr(s,u,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=gf(a),s.childLanes=_f(e,S,a),n.memoizedState=xf,po(null,s)):(La(n),vf(n,A))}var H=e.memoizedState;if(H!==null&&(A=H.dehydrated,A!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=Sf(e,n,a)):n.memoizedState!==null?(Na(),n.child=e.child,n.flags|=128,n=null):(Na(),A=s.fallback,u=n.mode,s=Bl({mode:"visible",children:s.children},u),A=lr(A,u,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,mr(n,e.child,null,a),s=n.child,s.memoizedState=gf(a),s.childLanes=_f(e,S,a),n.memoizedState=xf,n=po(null,s));else if(La(n),td(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var $=S.dgst;S=$,s=Error(r(419)),s.stack="",s.digest=S,eo({value:s,source:null,stack:null}),n=Sf(e,n,a)}else if(dn||qr(e,n,a,!1),S=(a&e.childLanes)!==0,dn||S){if(S=je,S!==null&&(s=nr(S,a),s!==0&&s!==H.retryLane))throw H.retryLane=s,or(e,s),Wn(S,e,s),pf;$f(A)||ql(),n=Sf(e,n,a)}else $f(A)?(n.flags|=192,n.child=e.child,n=null):(e=H.treeContext,Qe=pi(A.nextSibling),Cn=n,we=!0,Aa=null,di=!1,e!==null&&Hp(n,e),n=vf(n,s.children),n.flags|=4096);return n}return u?(Na(),A=s.fallback,u=n.mode,H=e.child,$=H.sibling,s=Xi(H,{mode:"hidden",children:s.children}),s.subtreeFlags=H.subtreeFlags&65011712,$!==null?A=Xi($,A):(A=lr(A,u,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,po(null,s),s=n.child,A=e.child.memoizedState,A===null?A=gf(a):(u=A.cachePool,u!==null?(H=un._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=qp(),A={baseLanes:A.baseLanes|a,cachePool:u}),s.memoizedState=A,s.childLanes=_f(e,S,a),n.memoizedState=xf,po(e.child,s)):(La(n),a=e.child,e=a.sibling,a=Xi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function vf(e,n){return n=Bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Bl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e}function Sf(e,n,a){return mr(n,e.child,null,a),e=vf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function rm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),Ou(e.return,n,a)}function yf(e,n,a,s,u,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=s,S.tail=a,S.tailMode=u,S.treeForkCount=f)}function sm(e,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var S=on.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,Et(on,S),Dn(e,n,s,a),s=we?to:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rm(e,a,n);else if(e.tag===19)rm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Tl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),yf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Tl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}yf(n,!0,a,null,f,s);break;case"together":yf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Pa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(qr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Xi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Xi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&gl(e)))}function Iv(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),Ca(n,un,e.memoizedState.cache),cr();break;case 27:case 5:Ft(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?am(e,n,a):(La(n),e=Zi(e,n,a),e!==null?e.sibling:null);La(n);break;case 19:var u=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(qr(e,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return sm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Et(on,on.current),s)break;return null;case 22:return n.lanes=0,J0(e,n,a,n.pendingProps);case 24:Ca(n,un,e.memoizedState.cache)}return Zi(e,n,a)}function om(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)dn=!0;else{if(!Mf(e,a)&&(n.flags&128)===0)return dn=!1,Iv(e,n,a);dn=(e.flags&131072)!==0}else dn=!1,we&&(n.flags&1048576)!==0&&Ip(n,to,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(e=hr(n.elementType),n.type=e,typeof e=="function")Au(e)?(s=gr(e,s),n.tag=1,n=nm(null,n,e,s,a)):(n.tag=0,n=mf(null,n,e,s,a));else{if(e!=null){var u=e.$$typeof;if(u===F){n.tag=11,n=Z0(null,n,e,s,a);break t}else if(u===P){n.tag=14,n=K0(null,n,e,s,a);break t}}throw n=ht(e)||e,Error(r(306,n,""))}}return n;case 0:return mf(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=gr(s,n.pendingProps),nm(e,n,s,u,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Gu(e,n),lo(n,s,null,a);var S=n.memoizedState;if(s=S.cache,Ca(n,un,s),s!==f.cache&&zu(n,[un],a,!0),oo(),s=S.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=im(e,n,s,a);break t}else if(s!==u){u=ci(Error(r(424)),n),eo(u),n=im(e,n,s,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Qe=pi(e.firstChild),Cn=n,we=!0,Aa=null,di=!0,a=Jp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(cr(),s===u){n=Zi(e,n,a);break t}Dn(e,n,s,a)}n=n.child}return n;case 26:return Pl(e,n),e===null?(a=_x(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,s=$l(rt.current).createElement(a),s[cn]=n,s[mn]=e,Un(s,a,e),et(s),n.stateNode=s):n.memoizedState=_x(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ft(n),e===null&&we&&(s=n.stateNode=mx(n.type,n.pendingProps,rt.current),Cn=n,di=!0,u=Qe,Ga(n.type)?(ed=u,Qe=pi(s.firstChild)):Qe=u),Dn(e,n,n.pendingProps.children,a),Pl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=s=Qe)&&(s=mS(s,n.type,n.pendingProps,di),s!==null?(n.stateNode=s,Cn=n,Qe=pi(s.firstChild),di=!1,u=!0):u=!1),u||Ra(n)),Ft(n),u=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,Kf(u,f)?s=null:S!==null&&Kf(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=ju(e,n,Dv,null,null,a),wo._currentValue=u),Pl(e,n),Dn(e,n,s,a),n.child;case 6:return e===null&&we&&((e=a=Qe)&&(a=xS(a,n.pendingProps,di),a!==null?(n.stateNode=a,Cn=n,Qe=null,e=!0):e=!1),e||Ra(n)),null;case 13:return am(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=mr(n,null,s,a):Dn(e,n,s,a),n.child;case 11:return Z0(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ca(n,n.type,s.value),Dn(e,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,fr(n),u=wn(u),s=s(u),n.flags|=1,Dn(e,n,s,a),n.child;case 14:return K0(e,n,n.type,n.pendingProps,a);case 15:return Q0(e,n,n.type,n.pendingProps,a);case 19:return sm(e,n,a);case 31:return Fv(e,n,a);case 22:return J0(e,n,a,n.pendingProps);case 24:return fr(n),s=wn(un),e===null?(u=Fu(),u===null&&(u=je,f=Pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Hu(n),Ca(n,un,u)):((e.lanes&a)!==0&&(Gu(e,n),lo(n,null,null,a),oo()),u=e.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,un,s)):(s=f.cache,Ca(n,un,s),s!==u.cache&&zu(n,[un],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ki(e){e.flags|=4}function bf(e,n,a,s,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Om())e.flags|=8192;else throw pr=yl,Iu}else e.flags&=-16777217}function lm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bx(n))if(Om())e.flags|=8192;else throw pr=yl,Iu}function Fl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ge():536870912,e.lanes|=n,as|=n)}function mo(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Hv(e,n,a){var s=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),qi(un),Dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Wr(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Ki(n),f!==null?(Je(n),lm(n,f)):(Je(n),bf(n,u,null,s,a))):f?f!==e.memoizedState?(Ki(n),Je(n),lm(n,f)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ki(n),Je(n),bf(n,u,e,s,a)),null;case 27:if(ee(n),a=rt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}e=Ct.current,Wr(n)?Gp(n):(e=mx(u,s,a),n.stateNode=e,Ki(n))}return Je(n),null;case 5:if(ee(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),null}if(f=Ct.current,Wr(n))Gp(n);else{var S=$l(rt.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?S.createElement("select",{is:s.is}):S.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?S.createElement(u,{is:s.is}):S.createElement(u)}}f[cn]=n,f[mn]=s;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;t:switch(Un(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ki(n)}}return Je(n),bf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=rt.current,Wr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ax(e.nodeValue,a)),e||Ra(n,!0)}else e=$l(e).createTextNode(s),e[cn]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Wr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[cn]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Wr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else cr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Lu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),Je(n),null);case 4:return Dt(),e===null&&Wf(n.stateNode.containerInfo),Je(n),null;case 10:return qi(n.type),Je(n),null;case 19:if(at(on),s=n.memoizedState,s===null)return Je(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)mo(s,!1);else{if(an!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Tl(e),f!==null){for(n.flags|=128,mo(s,!1),e=f.updateQueue,n.updateQueue=e,Fl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Pp(a,e),a=a.sibling;return Et(on,on.current&1|2),we&&ki(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&b()>Xl&&(n.flags|=128,u=!0,mo(s,!1),n.lanes=4194304)}else{if(!u)if(e=Tl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Fl(n,e),mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!we)return Je(n),null}else 2*b()-s.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,mo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=b(),e.sibling=null,a=on.current,Et(on,u?a&1|2:a&1),we&&ki(n,s.treeForkCount),e):(Je(n),null);case 22:case 23:return $n(n),Wu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&at(dr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(un),Je(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Gv(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(un),Dt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if($n(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));cr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(on),null;case 4:return Dt(),null;case 10:return qi(n.type),null;case 22:case 23:return $n(n),Wu(),e!==null&&at(dr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(un),null;case 25:return null;default:return null}}function cm(e,n){switch(Du(n),n.tag){case 3:qi(un),Dt();break;case 26:case 27:case 5:ee(n);break;case 4:Dt();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:at(on);break;case 10:qi(n.type);break;case 22:case 23:$n(n),Wu(),e!==null&&at(dr);break;case 24:qi(un)}}function xo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==u)}}catch(A){Ge(n,n.return,A)}}function Oa(e,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&e)===e){var S=s.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var H=a,$=A;try{$()}catch(pt){Ge(u,H,pt)}}}s=s.next}while(s!==f)}}catch(pt){Ge(n,n.return,pt)}}function um(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{t0(n,a)}catch(s){Ge(e,e.return,s)}}}function fm(e,n,a){a.props=gr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Ge(e,n,s)}}function go(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(u){Ge(e,n,u)}}function Li(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function dm(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Ef(e,n,a){try{var s=e.stateNode;cS(s,e.type,a,n),s[mn]=n}catch(u){Ge(e,e.return,u)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function Tf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Af(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Gi));else if(s!==4&&(s===27&&Ga(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Af(e,n,a),e=e.sibling;e!==null;)Af(e,n,a),e=e.sibling}function Il(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Il(e,n,a),e=e.sibling;e!==null;)Il(e,n,a),e=e.sibling}function pm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,s,a),n[cn]=e,n[mn]=a}catch(f){Ge(e,e.return,f)}}var Qi=!1,hn=!1,Rf=!1,mm=typeof WeakSet=="function"?WeakSet:Set,En=null;function Vv(e,n){if(e=e.containerInfo,jf=sc,e=Rp(e),vu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,A=-1,H=-1,$=0,pt=0,vt=e,it=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(A=S+u),vt!==f||s!==0&&vt.nodeType!==3||(H=S+s),vt.nodeType===3&&(S+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)it=vt,vt=ct;for(;;){if(vt===e)break e;if(it===a&&++$===u&&(A=S),it===f&&++pt===s&&(H=S),(ct=vt.nextSibling)!==null)break;vt=it,it=vt.parentNode}vt=ct}a=A===-1||H===-1?null:{start:A,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:e,selectionRange:a},sc=!1,En=n;En!==null;)if(n=En,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,En=e;else for(;En!==null;){switch(n=En,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Xt=gr(a.type,u);e=s.getSnapshotBeforeUpdate(Xt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ge(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Jf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,En=e;break}En=n.return}}function xm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),s&4&&xo(5,a);break;case 1:if($i(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Ge(a,a.return,S)}else{var u=gr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Ge(a,a.return,S)}}s&64&&um(a),s&512&&go(a,a.return);break;case 3:if($i(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{t0(e,n)}catch(S){Ge(a,a.return,S)}}break;case 27:n===null&&s&4&&pm(a);case 26:case 5:$i(e,a),n===null&&s&4&&dm(a),s&512&&go(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),s&4&&vm(e,a);break;case 13:$i(e,a),s&4&&Sm(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qv.bind(null,a),gS(e,a))));break;case 22:if(s=a.memoizedState!==null||Qi,!s){n=n!==null&&n.memoizedState!==null||hn,u=Qi;var f=hn;Qi=s,(hn=n)&&!f?ta(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Qi=u,hn=f}break;case 30:break;default:$i(e,a)}}function gm(e){var n=e.alternate;n!==null&&(e.alternate=null,gm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ks(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,Gn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)_m(e,n,a),a=a.sibling}function _m(e,n,a){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(bt,a)}catch{}switch(a.tag){case 26:hn||Li(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Li(a,n);var s=$e,u=Gn;Ga(a.type)&&($e=a.stateNode,Gn=!1),Ji(e,n,a),Ao(a.stateNode),$e=s,Gn=u;break;case 5:hn||Li(a,n);case 6:if(s=$e,u=Gn,$e=null,Ji(e,n,a),$e=s,Gn=u,$e!==null)if(Gn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){Ge(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){Ge(a,n,f)}break;case 18:$e!==null&&(Gn?(e=$e,ux(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ds(e)):ux($e,a.stateNode));break;case 4:s=$e,u=Gn,$e=a.stateNode.containerInfo,Gn=!0,Ji(e,n,a),$e=s,Gn=u;break;case 0:case 11:case 14:case 15:Oa(2,a,n),hn||Oa(4,a,n),Ji(e,n,a);break;case 1:hn||(Li(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&fm(a,n,s)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:hn=(s=hn)||a.memoizedState!==null,Ji(e,n,a),hn=s;break;default:Ji(e,n,a)}}function vm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ds(e)}catch(a){Ge(n,n.return,a)}}}function Sm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ds(e)}catch(a){Ge(n,n.return,a)}}function Xv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mm),n;default:throw Error(r(435,e.tag))}}function Hl(e,n){var a=Xv(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=Jv.bind(null,e,s);s.then(u,u)}})}function Vn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ga(A.type)){$e=A.stateNode,Gn=!1;break t}break;case 5:$e=A.stateNode,Gn=!1;break t;case 3:case 4:$e=A.stateNode.containerInfo,Gn=!0;break t}A=A.return}if($e===null)throw Error(r(160));_m(f,S,u),$e=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ym(n,e),n=n.sibling}var yi=null;function ym(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(n,e),Xn(e),s&4&&(Oa(3,e,e.return),xo(3,e),Oa(5,e,e.return));break;case 1:Vn(n,e),Xn(e),s&512&&(hn||a===null||Li(a,a.return)),s&64&&Qi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=yi;if(Vn(n,e),Xn(e),s&512&&(hn||a===null||Li(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,s,a),f[cn]=e,et(f),s=f;break t;case"link":var S=yx("link","href",u).get(s+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}f=u.createElement(s),Un(f,s,a),u.head.appendChild(f);break;case"meta":if(S=yx("meta","content",u).get(s+(a.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}f=u.createElement(s),Un(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[cn]=e,et(f),s=f}e.stateNode=s}else Mx(u,e.type,e.stateNode);else e.stateNode=Sx(u,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Mx(u,e.type,e.stateNode):Sx(u,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,e),Xn(e),s&512&&(hn||a===null||Li(a,a.return)),a!==null&&s&4&&Ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,e),Xn(e),s&512&&(hn||a===null||Li(a,a.return)),e.flags&32){u=e.stateNode;try{wi(u,"")}catch(Xt){Ge(e,e.return,Xt)}}s&4&&e.stateNode!=null&&(u=e.memoizedProps,Ef(e,u,a!==null?a.memoizedProps:u)),s&1024&&(Rf=!0);break;case 6:if(Vn(n,e),Xn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Xt){Ge(e,e.return,Xt)}}break;case 3:if(nc=null,u=yi,yi=tc(n.containerInfo),Vn(n,e),yi=u,Xn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ds(n.containerInfo)}catch(Xt){Ge(e,e.return,Xt)}Rf&&(Rf=!1,Mm(e));break;case 4:s=yi,yi=tc(e.stateNode.containerInfo),Vn(n,e),Xn(e),yi=s;break;case 12:Vn(n,e),Xn(e);break;case 31:Vn(n,e),Xn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 13:Vn(n,e),Xn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Vl=b()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 22:u=e.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,$=Qi,pt=hn;if(Qi=$||u,hn=pt||H,Vn(n,e),hn=pt,Qi=$,Xn(e),s&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||Qi||hn||_r(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=H.stateNode;var vt=H.memoizedProps.style,it=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;A.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(Xt){Ge(H,H.return,Xt)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(Xt){Ge(H,H.return,Xt)}}}else if(n.tag===18){if(a===null){H=n;try{var ct=H.stateNode;u?fx(ct,!0):fx(H.stateNode,!1)}catch(Xt){Ge(H,H.return,Xt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Hl(e,a))));break;case 19:Vn(n,e),Xn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Hl(e,s)));break;case 30:break;case 21:break;default:Vn(n,e),Xn(e)}}function Xn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(hm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Tf(e);Il(e,f,u);break;case 5:var S=a.stateNode;a.flags&32&&(wi(S,""),a.flags&=-33);var A=Tf(e);Il(e,A,S);break;case 3:case 4:var H=a.stateNode.containerInfo,$=Tf(e);Af(e,$,H);break;default:throw Error(r(161))}}catch(pt){Ge(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Mm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function $i(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)xm(e,n.alternate,n),n=n.sibling}function _r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),_r(n);break;case 1:Li(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&fm(n,n.return,a),_r(n);break;case 27:Ao(n.stateNode);case 26:case 5:Li(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}e=e.sibling}}function ta(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:ta(u,f,a),xo(4,f);break;case 1:if(ta(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){Ge(s,s.return,$)}if(s=f,u=s.updateQueue,u!==null){var A=s.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)$p(H[u],A)}catch($){Ge(s,s.return,$)}}a&&S&64&&um(f),go(f,f.return);break;case 27:pm(f);case 26:case 5:ta(u,f,a),a&&s===null&&S&4&&dm(f),go(f,f.return);break;case 12:ta(u,f,a);break;case 31:ta(u,f,a),a&&S&4&&vm(u,f);break;case 13:ta(u,f,a),a&&S&4&&Sm(u,f);break;case 22:f.memoizedState===null&&ta(u,f,a),go(f,f.return);break;case 30:break;default:ta(u,f,a)}n=n.sibling}}function Cf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&no(a))}function wf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function Mi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bm(e,n,a,s),n=n.sibling}function bm(e,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,s),u&2048&&xo(9,n);break;case 1:Mi(e,n,a,s);break;case 3:Mi(e,n,a,s),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(u&2048){Mi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Ge(n,n.return,H)}}else Mi(e,n,a,s);break;case 31:Mi(e,n,a,s);break;case 13:Mi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Mi(e,n,a,s):_o(e,n):f._visibility&2?Mi(e,n,a,s):(f._visibility|=2,es(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Cf(S,n);break;case 24:Mi(e,n,a,s),u&2048&&wf(n.alternate,n);break;default:Mi(e,n,a,s)}}function es(e,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,A=a,H=s,$=S.flags;switch(S.tag){case 0:case 11:case 15:es(f,S,A,H,u),xo(8,S);break;case 23:break;case 22:var pt=S.stateNode;S.memoizedState!==null?pt._visibility&2?es(f,S,A,H,u):_o(f,S):(pt._visibility|=2,es(f,S,A,H,u)),u&&$&2048&&Cf(S.alternate,S);break;case 24:es(f,S,A,H,u),u&&$&2048&&wf(S.alternate,S);break;default:es(f,S,A,H,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,u=s.flags;switch(s.tag){case 22:_o(a,s),u&2048&&Cf(s.alternate,s);break;case 24:_o(a,s),u&2048&&wf(s.alternate,s);break;default:_o(a,s)}n=n.sibling}}var vo=8192;function ns(e,n,a){if(e.subtreeFlags&vo)for(e=e.child;e!==null;)Em(e,n,a),e=e.sibling}function Em(e,n,a){switch(e.tag){case 26:ns(e,n,a),e.flags&vo&&e.memoizedState!==null&&wS(a,yi,e.memoizedState,e.memoizedProps);break;case 5:ns(e,n,a);break;case 3:case 4:var s=yi;yi=tc(e.stateNode.containerInfo),ns(e,n,a),yi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=vo,vo=16777216,ns(e,n,a),vo=s):ns(e,n,a));break;default:ns(e,n,a)}}function Tm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];En=s,Rm(s,e)}Tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Gl(e)):So(e);break;default:So(e)}}function Gl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];En=s,Rm(s,e)}Tm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Gl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Gl(n));break;default:Gl(n)}e=e.sibling}}function Rm(e,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:no(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,En=s;else t:for(a=e;En!==null;){s=En;var u=s.sibling,f=s.return;if(gm(s),s===a){En=null;break t}if(u!==null){u.return=f,En=u;break t}En=f}}}var kv={getCacheForType:function(e){var n=wn(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(un).controller.signal}},Wv=typeof WeakMap=="function"?WeakMap:Map,Fe=0,je=null,ye=null,Ee=0,He=0,ti=null,za=!1,is=!1,Df=!1,ea=0,an=0,Pa=0,vr=0,Uf=0,ei=0,as=0,yo=null,kn=null,Lf=!1,Vl=0,Cm=0,Xl=1/0,kl=null,Ba=null,gn=0,Fa=null,rs=null,na=0,Nf=0,Of=null,wm=null,Mo=0,zf=null;function ni(){return(Fe&2)!==0&&Ee!==0?Ee&-Ee:B.T!==null?Gf():Vs()}function Dm(){if(ei===0)if((Ee&536870912)===0||we){var e=St;St<<=1,(St&3932160)===0&&(St=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function Wn(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(ss(e,0),Ia(e,Ee,ei,!1)),sn(e,a),((Fe&2)===0||e!==je)&&(e===je&&((Fe&2)===0&&(vr|=a),an===4&&Ia(e,Ee,ei,!1)),Ni(e))}function Um(e,n,a){if((Fe&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Rt(e,n),u=s?jv(e,n):Bf(e,n,!0),f=s;do{if(u===0){is&&!s&&Ia(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!qv(a)){u=Bf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=yo;var H=A.current.memoizedState.isDehydrated;if(H&&(ss(A,S).flags|=256),S=Bf(A,S,!1),S!==2){if(Df&&!H){A.errorRecoveryDisabledLanes|=f,vr|=f,u=4;break t}f=kn,kn=u,f!==null&&(kn===null?kn=f:kn.push.apply(kn,f))}u=S}if(f=!1,u!==2)continue}}if(u===1){ss(e,0),Ia(e,n,0,!0);break}t:{switch(s=e,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ia(s,n,ei,!za);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Vl+300-b(),10<u)){if(Ia(s,n,ei,!za),ot(s,0,!0)!==0)break t;na=n,s.timeoutHandle=lx(Lm.bind(null,s,a,kn,kl,Lf,n,ei,vr,as,za,f,"Throttled",-0,0),u);break t}Lm(s,a,kn,kl,Lf,n,ei,vr,as,za,f,null,-0,0)}}break}while(!0);Ni(e)}function Lm(e,n,a,s,u,f,S,A,H,$,pt,vt,it,ct){if(e.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gi},Em(n,f,vt);var Xt=(f&62914560)===f?Vl-b():(f&4194048)===f?Cm-b():0;if(Xt=DS(vt,Xt),Xt!==null){na=f,e.cancelPendingCommit=Xt(Hm.bind(null,e,n,f,a,s,u,S,A,H,pt,vt,null,it,ct)),Ia(e,f,S,!$);return}}Hm(e,n,f,a,s,u,S,A,H)}function qv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ia(e,n,a,s){n&=~Uf,n&=~vr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var u=n;0<u;){var f=31-Gt(u),S=1<<f;s[f]=-1,u&=~S}a!==0&&Or(e,a,n)}function Wl(){return(Fe&6)===0?(bo(0),!1):!0}function Pf(){if(ye!==null){if(He===0)var e=ye.return;else e=ye,Wi=ur=null,Qu(e),Kr=null,ao=0,e=ye;for(;e!==null;)cm(e.alternate,e),e=e.return;ye=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,dS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Pf(),je=e,ye=a=Xi(e.current,null),Ee=n,He=0,ti=null,za=!1,is=Rt(e,n),Df=!1,as=ei=Uf=vr=Pa=an=0,kn=yo=null,Lf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var u=31-Gt(s),f=1<<u;n|=e[u],s&=~f}return ea=n,dl(),a}function Nm(e,n){he=null,B.H=ho,n===Zr||n===Sl?(n=Zp(),He=3):n===Iu?(n=Zp(),He=4):He=n===pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,ye===null&&(an=1,Ol(e,ci(n,e.current)))}function Om(){var e=Jn.current;return e===null?!0:(Ee&4194048)===Ee?hi===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===hi:!1}function zm(){var e=B.H;return B.H=ho,e===null?ho:e}function Pm(){var e=B.A;return B.A=kv,e}function ql(){an=4,za||(Ee&4194048)!==Ee&&Jn.current!==null||(is=!0),(Pa&134217727)===0&&(vr&134217727)===0||je===null||Ia(je,Ee,ei,!1)}function Bf(e,n,a){var s=Fe;Fe|=2;var u=zm(),f=Pm();(je!==e||Ee!==n)&&(kl=null,ss(e,n)),n=!1;var S=an;t:do try{if(He!==0&&ye!==null){var A=ye,H=ti;switch(He){case 8:Pf(),S=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var $=He;if(He=0,ti=null,os(e,A,H,$),a&&is){S=0;break t}break;default:$=He,He=0,ti=null,os(e,A,H,$)}}Yv(),S=an;break}catch(pt){Nm(e,pt)}while(!0);return n&&e.shellSuspendCounter++,Wi=ur=null,Fe=s,B.H=u,B.A=f,ye===null&&(je=null,Ee=0,dl()),S}function Yv(){for(;ye!==null;)Bm(ye)}function jv(e,n){var a=Fe;Fe|=2;var s=zm(),u=Pm();je!==e||Ee!==n?(kl=null,Xl=b()+500,ss(e,n)):is=Rt(e,n);t:do try{if(He!==0&&ye!==null){n=ye;var f=ti;e:switch(He){case 1:He=0,ti=null,os(e,n,f,1);break;case 2:case 9:if(Yp(f)){He=0,ti=null,Fm(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Ni(e)},f.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:Yp(f)?(He=0,ti=null,Fm(n)):(He=0,ti=null,os(e,n,f,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var A=ye;if(S?bx(S):A.stateNode.complete){He=0,ti=null;var H=A.sibling;if(H!==null)ye=H;else{var $=A.return;$!==null?(ye=$,Yl($)):ye=null}break e}}He=0,ti=null,os(e,n,f,5);break;case 6:He=0,ti=null,os(e,n,f,6);break;case 8:Pf(),an=6;break t;default:throw Error(r(462))}}Zv();break}catch(pt){Nm(e,pt)}while(!0);return Wi=ur=null,B.H=s,B.A=u,Fe=a,ye!==null?0:(je=null,Ee=0,dl(),an)}function Zv(){for(;ye!==null&&!oe();)Bm(ye)}function Bm(e){var n=om(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?Yl(e):ye=n}function Fm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=em(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=em(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Qu(n);default:cm(a,n),n=ye=Pp(n,ea),n=om(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?Yl(e):ye=n}function os(e,n,a,s){Wi=ur=null,Qu(n),Kr=null,ao=0;var u=n.return;try{if(Bv(e,u,n,a,Ee)){an=1,Ol(e,ci(a,e.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;an=1,Ol(e,ci(a,e.current)),ye=null;return}n.flags&32768?(we||s===1?e=!0:is||(Ee&536870912)!==0?e=!1:(za=e=!0,(s===2||s===9||s===3||s===6)&&(s=Jn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Im(n,e)):Yl(n)}function Yl(e){var n=e;do{if((n.flags&32768)!==0){Im(n,za);return}e=n.return;var a=Hv(n.alternate,n,ea);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);an===0&&(an=5)}function Im(e,n){do{var a=Gv(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);an=6,ye=null}function Hm(e,n,a,s,u,f,S,A,H){e.cancelPendingCommit=null;do jl();while(gn!==0);if((Fe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Eu,Sn(e,a,f,S,A,H),e===je&&(ye=je=null,Ee=0),rs=n,Fa=e,na=a,Nf=f,Of=u,wm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$v(ft,function(){return Wm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,u=j.p,j.p=2,S=Fe,Fe|=4;try{Vv(e,n,a)}finally{Fe=S,j.p=u,B.T=s}}gn=1,Gm(),Vm(),Xm()}}function Gm(){if(gn===1){gn=0;var e=Fa,n=rs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=j.p;j.p=2;var u=Fe;Fe|=4;try{ym(n,e);var f=Zf,S=Rp(e.containerInfo),A=f.focusedElem,H=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Ap(A.ownerDocument.documentElement,A)){if(H!==null&&vu(A)){var $=H.start,pt=H.end;if(pt===void 0&&(pt=$),"selectionStart"in A)A.selectionStart=$,A.selectionEnd=Math.min(pt,A.value.length);else{var vt=A.ownerDocument||document,it=vt&&vt.defaultView||window;if(it.getSelection){var ct=it.getSelection(),Xt=A.textContent.length,se=Math.min(H.start,Xt),We=H.end===void 0?se:Math.min(H.end,Xt);!ct.extend&&se>We&&(S=We,We=se,se=S);var Y=Tp(A,se),X=Tp(A,We);if(Y&&X&&(ct.rangeCount!==1||ct.anchorNode!==Y.node||ct.anchorOffset!==Y.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var J=vt.createRange();J.setStart(Y.node,Y.offset),ct.removeAllRanges(),se>We?(ct.addRange(J),ct.extend(X.node,X.offset)):(J.setEnd(X.node,X.offset),ct.addRange(J))}}}}for(vt=[],ct=A;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<vt.length;A++){var xt=vt[A];xt.element.scrollLeft=xt.left,xt.element.scrollTop=xt.top}}sc=!!jf,Zf=jf=null}finally{Fe=u,j.p=s,B.T=a}}e.current=n,gn=2}}function Vm(){if(gn===2){gn=0;var e=Fa,n=rs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=j.p;j.p=2;var u=Fe;Fe|=4;try{xm(e,n.alternate,n)}finally{Fe=u,j.p=s,B.T=a}}gn=3}}function Xm(){if(gn===4||gn===3){gn=0,N();var e=Fa,n=rs,a=na,s=wm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,rs=Fa=null,km(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ba=null),Ci(a),n=n.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(bt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,u=j.p,j.p=2,B.T=null;try{for(var f=e.onRecoverableError,S=0;S<s.length;S++){var A=s[S];f(A.value,{componentStack:A.stack})}}finally{B.T=n,j.p=u}}(na&3)!==0&&jl(),Ni(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===zf?Mo++:(Mo=0,zf=e):Mo=0,bo(0)}}function km(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function jl(){return Gm(),Vm(),Xm(),Wm()}function Wm(){if(gn!==5)return!1;var e=Fa,n=Nf;Nf=0;var a=Ci(na),s=B.T,u=j.p;try{j.p=32>a?32:a,B.T=null,a=Of,Of=null;var f=Fa,S=na;if(gn=0,rs=Fa=null,na=0,(Fe&6)!==0)throw Error(r(331));var A=Fe;if(Fe|=4,Am(f.current),bm(f,f.current,S,a),Fe=A,bo(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(bt,f)}catch{}return!0}finally{j.p=u,B.T=s,km(e,n)}}function qm(e,n,a){n=ci(a,n),n=hf(e.stateNode,n,2),e=Ua(e,n,2),e!==null&&(sn(e,2),Ni(e))}function Ge(e,n,a){if(e.tag===3)qm(e,e,a);else for(;n!==null;){if(n.tag===3){qm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ba===null||!Ba.has(s))){e=ci(a,e),a=Y0(2),s=Ua(n,a,2),s!==null&&(j0(a,s,n,e),sn(s,2),Ni(s));break}}n=n.return}}function Ff(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new Wv;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Df=!0,u.add(a),e=Kv.bind(null,e,n,a),n.then(e,e))}function Kv(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Ee&a)===a&&(an===4||an===3&&(Ee&62914560)===Ee&&300>b()-Vl?(Fe&2)===0&&ss(e,0):Uf|=a,as===Ee&&(as=0)),Ni(e)}function Ym(e,n){n===0&&(n=ge()),e=or(e,n),e!==null&&(sn(e,n),Ni(e))}function Qv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ym(e,a)}function Jv(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Ym(e,a)}function $v(e,n){return Le(e,n)}var Zl=null,ls=null,If=!1,Kl=!1,Hf=!1,Ha=0;function Ni(e){e!==ls&&e.next===null&&(ls===null?Zl=ls=e:ls=ls.next=e),Kl=!0,If||(If=!0,eS())}function bo(e,n){if(!Hf&&Kl){Hf=!0;do for(var a=!1,s=Zl;s!==null;){if(e!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var S=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-Gt(42|e)+1)-1,f&=u&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Qm(s,f))}else f=Ee,f=ot(s,s===je?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Rt(s,f)||(a=!0,Qm(s,f));s=s.next}while(a);Hf=!1}}function tS(){jm()}function jm(){Kl=If=!1;var e=0;Ha!==0&&fS()&&(e=Ha);for(var n=b(),a=null,s=Zl;s!==null;){var u=s.next,f=Zm(s,n);f===0?(s.next=null,a===null?Zl=u:a.next=u,u===null&&(ls=a)):(a=s,(e!==0||(f&3)!==0)&&(Kl=!0)),s=u}gn!==0&&gn!==5||bo(e),Ha!==0&&(Ha=0)}function Zm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-Gt(f),A=1<<S,H=u[S];H===-1?((A&a)===0||(A&s)!==0)&&(u[S]=qt(A,n)):H<=n&&(e.expiredLanes|=A),f&=~A}if(n=je,a=Ee,a=ot(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&jt(s),Ci(a)){case 2:case 8:a=Mt;break;case 32:a=ft;break;case 268435456:a=Lt;break;default:a=ft}return s=Km.bind(null,e),a=Le(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&jt(s),e.callbackPriority=2,e.callbackNode=null,2}function Km(e,n){if(gn!==0&&gn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(jl()&&e.callbackNode!==a)return null;var s=Ee;return s=ot(e,e===je?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Um(e,s,n),Zm(e,b()),e.callbackNode!=null&&e.callbackNode===a?Km.bind(null,e):null)}function Qm(e,n){if(jl())return null;Um(e,n,!0)}function eS(){hS(function(){(Fe&6)!==0?Le(_t,tS):jm()})}function Gf(){if(Ha===0){var e=Yr;e===0&&(e=mt,mt<<=1,(mt&261888)===0&&(mt=256)),Ha=e}return Ha}function Jm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:al(""+e)}function $m(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function nS(e,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Jm((u[mn]||null).action),S=s.submitter;S&&(n=(n=S[mn]||null)?Jm(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new ll("action","action",null,s,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ha!==0){var H=S?$m(u,S):new FormData(u);of(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(A.preventDefault(),H=S?$m(u,S):new FormData(u),of(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Vf=0;Vf<bu.length;Vf++){var Xf=bu[Vf],iS=Xf.toLowerCase(),aS=Xf[0].toUpperCase()+Xf.slice(1);Si(iS,"on"+aS)}Si(Dp,"onAnimationEnd"),Si(Up,"onAnimationIteration"),Si(Lp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Sv,"onTransitionRun"),Si(yv,"onTransitionStart"),Si(Mv,"onTransitionCancel"),Si(Np,"onTransitionEnd"),It("onMouseEnter",["mouseout","mouseover"]),It("onMouseLeave",["mouseout","mouseover"]),It("onPointerEnter",["pointerout","pointerover"]),It("onPointerLeave",["pointerout","pointerover"]),Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo));function tx(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var A=s[S],H=A.instance,$=A.currentTarget;if(A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(pt){fl(pt)}u.currentTarget=null,f=H}else for(S=0;S<s.length;S++){if(A=s[S],H=A.instance,$=A.currentTarget,A=A.listener,H!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=$;try{f(u)}catch(pt){fl(pt)}u.currentTarget=null,f=H}}}}function Me(e,n){var a=n[zr];a===void 0&&(a=n[zr]=new Set);var s=e+"__bubble";a.has(s)||(ex(n,e,2,!1),a.add(s))}function kf(e,n,a){var s=0;n&&(s|=4),ex(a,e,s,n)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Wf(e){if(!e[Ql]){e[Ql]=!0,Z.forEach(function(a){a!=="selectionchange"&&(rS.has(a)||kf(a,!1,e),kf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ql]||(n[Ql]=!0,kf("selectionchange",!1,n))}}function ex(e,n,a,s){switch(Dx(n)){case 2:var u=NS;break;case 8:u=OS;break;default:u=sd}a=u.bind(null,n,a,e),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function qf(e,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var A=s.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=s.return;S!==null;){var H=S.tag;if((H===3||H===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Ma(A),S===null)return;if(H=S.tag,H===5||H===6||H===26||H===27){s=f=S;continue t}A=A.parentNode}}s=s.return}sp(function(){var $=f,pt=lu(a),vt=[];t:{var it=Op.get(e);if(it!==void 0){var ct=ll,Xt=e;switch(e){case"keypress":if(sl(a)===0)break t;case"keydown":case"keyup":ct=J_;break;case"focusin":Xt="focus",ct=pu;break;case"focusout":Xt="blur",ct=pu;break;case"beforeblur":case"afterblur":ct=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=H_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ev;break;case Dp:case Up:case Lp:ct=X_;break;case Np:ct=iv;break;case"scroll":case"scrollend":ct=F_;break;case"wheel":ct=rv;break;case"copy":case"cut":case"paste":ct=W_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=fp;break;case"toggle":case"beforetoggle":ct=ov}var se=(n&4)!==0,We=!se&&(e==="scroll"||e==="scrollend"),Y=se?it!==null?it+"Capture":null:it;se=[];for(var X=$,J;X!==null;){var xt=X;if(J=xt.stateNode,xt=xt.tag,xt!==5&&xt!==26&&xt!==27||J===null||Y===null||(xt=Ws(X,Y),xt!=null&&se.push(To(X,xt,J))),We)break;X=X.return}0<se.length&&(it=new ct(it,Xt,null,a,pt),vt.push({event:it,listeners:se}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",it&&a!==ou&&(Xt=a.relatedTarget||a.fromElement)&&(Ma(Xt)||Xt[Fi]))break t;if((ct||it)&&(it=pt.window===pt?pt:(it=pt.ownerDocument)?it.defaultView||it.parentWindow:window,ct?(Xt=a.relatedTarget||a.toElement,ct=$,Xt=Xt?Ma(Xt):null,Xt!==null&&(We=c(Xt),se=Xt.tag,Xt!==We||se!==5&&se!==27&&se!==6)&&(Xt=null)):(ct=null,Xt=$),ct!==Xt)){if(se=cp,xt="onMouseLeave",Y="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(se=fp,xt="onPointerLeave",Y="onPointerEnter",X="pointer"),We=ct==null?it:q(ct),J=Xt==null?it:q(Xt),it=new se(xt,X+"leave",ct,a,pt),it.target=We,it.relatedTarget=J,xt=null,Ma(pt)===$&&(se=new se(Y,X+"enter",Xt,a,pt),se.target=J,se.relatedTarget=We,xt=se),We=xt,ct&&Xt)e:{for(se=sS,Y=ct,X=Xt,J=0,xt=Y;xt;xt=se(xt))J++;xt=0;for(var te=X;te;te=se(te))xt++;for(;0<J-xt;)Y=se(Y),J--;for(;0<xt-J;)X=se(X),xt--;for(;J--;){if(Y===X||X!==null&&Y===X.alternate){se=Y;break e}Y=se(Y),X=se(X)}se=null}else se=null;ct!==null&&nx(vt,it,ct,se,!1),Xt!==null&&We!==null&&nx(vt,We,Xt,se,!0)}}t:{if(it=$?q($):window,ct=it.nodeName&&it.nodeName.toLowerCase(),ct==="select"||ct==="input"&&it.type==="file")var ze=vp;else if(gp(it))if(Sp)ze=gv;else{ze=mv;var Zt=pv}else ct=it.nodeName,!ct||ct.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?$&&su($.elementType)&&(ze=vp):ze=xv;if(ze&&(ze=ze(e,$))){_p(vt,ze,a,pt);break t}Zt&&Zt(e,it,$),e==="focusout"&&$&&it.type==="number"&&$.memoizedProps.value!=null&&Mn(it,"number",it.value)}switch(Zt=$?q($):window,e){case"focusin":(gp(Zt)||Zt.contentEditable==="true")&&(Ir=Zt,Su=$,$s=null);break;case"focusout":$s=Su=Ir=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Cp(vt,a,pt);break;case"selectionchange":if(vv)break;case"keydown":case"keyup":Cp(vt,a,pt)}var me;if(xu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Fr?mp(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(dp&&a.locale!=="ko"&&(Fr||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Fr&&(me=op()):(Ea=pt,fu="value"in Ea?Ea.value:Ea.textContent,Fr=!0)),Zt=Jl($,Te),0<Zt.length&&(Te=new up(Te,e,null,a,pt),vt.push({event:Te,listeners:Zt}),me?Te.data=me:(me=xp(a),me!==null&&(Te.data=me)))),(me=cv?uv(e,a):fv(e,a))&&(Te=Jl($,"onBeforeInput"),0<Te.length&&(Zt=new up("onBeforeInput","beforeinput",null,a,pt),vt.push({event:Zt,listeners:Te}),Zt.data=me)),nS(vt,e,$,a,pt)}tx(vt,n)})}function To(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Jl(e,n){for(var a=n+"Capture",s=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ws(e,a),u!=null&&s.unshift(To(e,u,f)),u=Ws(e,n),u!=null&&s.push(To(e,u,f))),e.tag===3)return s;e=e.return}return[]}function sS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function nx(e,n,a,s,u){for(var f=n._reactName,S=[];a!==null&&a!==s;){var A=a,H=A.alternate,$=A.stateNode;if(A=A.tag,H!==null&&H===s)break;A!==5&&A!==26&&A!==27||$===null||(H=$,u?($=Ws(a,f),$!=null&&S.unshift(To(a,$,H))):u||($=Ws(a,f),$!=null&&S.push(To(a,$,H)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var oS=/\r\n?/g,lS=/\u0000|\uFFFD/g;function ix(e){return(typeof e=="string"?e:""+e).replace(oS,`
`).replace(lS,"")}function ax(e,n){return n=ix(n),ix(e)===n}function ke(e,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||wi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&wi(e,""+s);break;case"className":Ne(e,"class",s);break;case"tabIndex":Ne(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,a,s);break;case"style":ap(e,s,f);break;case"data":if(n!=="object"){Ne(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ke(e,n,"name",u.name,u,null),ke(e,n,"formEncType",u.formEncType,u,null),ke(e,n,"formMethod",u.formMethod,u,null),ke(e,n,"formTarget",u.formTarget,u,null)):(ke(e,n,"encType",u.encType,u,null),ke(e,n,"method",u.method,u,null),ke(e,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=al(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Gi);break;case"onScroll":s!=null&&Me("scroll",e);break;case"onScrollEnd":s!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=al(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":Me("beforetoggle",e),Me("toggle",e),pe(e,"popover",s);break;case"xlinkActuate":Oe(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Oe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Oe(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Oe(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Oe(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Oe(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Oe(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":pe(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=P_.get(a)||a,pe(e,a,s))}}function Yf(e,n,a,s,u,f){switch(a){case"style":ap(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?wi(e,s):(typeof s=="number"||typeof s=="bigint")&&wi(e,""+s);break;case"onScroll":s!=null&&Me("scroll",e);break;case"onScrollEnd":s!=null&&Me("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Gi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,u);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):pe(e,a,s)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(e,n,f,S,a,null)}}u&&ke(e,n,"srcSet",a.srcSet,a,null),s&&ke(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=f=S=u=null,H=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var pt=a[s];if(pt!=null)switch(s){case"name":u=pt;break;case"type":S=pt;break;case"checked":H=pt;break;case"defaultChecked":$=pt;break;case"value":f=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:ke(e,n,s,pt,a,null)}}Ke(e,f,A,H,$,S,u,!1);return;case"select":Me("invalid",e),s=S=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":s=A;default:ke(e,n,u,A,a,null)}n=f,a=S,e.multiple=!!s,n!=null?xn(e,!!s,n,!1):a!=null&&xn(e,!!s,a,!0);return;case"textarea":Me("invalid",e),f=u=s=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:ke(e,n,S,A,a,null)}Rn(e,s,u,f);return;case"option":for(H in a)if(a.hasOwnProperty(H)&&(s=a[H],s!=null))switch(H){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ke(e,n,H,s,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(s=0;s<Eo.length;s++)Me(Eo[s],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(e,n,$,s,a,null)}return;default:if(su(n)){for(pt in a)a.hasOwnProperty(pt)&&(s=a[pt],s!==void 0&&Yf(e,n,pt,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&ke(e,n,A,s,a,null))}function cS(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,S=null,A=null,H=null,$=null,pt=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":H=vt;default:s.hasOwnProperty(ct)||ke(e,n,ct,null,s,vt)}}for(var it in s){var ct=s[it];if(vt=a[it],s.hasOwnProperty(it)&&(ct!=null||vt!=null))switch(it){case"type":f=ct;break;case"name":u=ct;break;case"checked":$=ct;break;case"defaultChecked":pt=ct;break;case"value":S=ct;break;case"defaultValue":A=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==vt&&ke(e,n,it,ct,s,vt)}}Ii(e,S,A,H,$,pt,f,u);return;case"select":ct=S=A=it=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ct=H;default:s.hasOwnProperty(f)||ke(e,n,f,null,s,H)}for(u in s)if(f=s[u],H=a[u],s.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":it=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==H&&ke(e,n,u,f,s,H)}n=A,a=S,s=ct,it!=null?xn(e,!!a,it,!1):!!s!=!!a&&(n!=null?xn(e,!!a,n,!0):xn(e,!!a,a?[]:"",!1));return;case"textarea":ct=it=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ke(e,n,A,null,s,u)}for(S in s)if(u=s[S],f=a[S],s.hasOwnProperty(S)&&(u!=null||f!=null))switch(S){case"value":it=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&ke(e,n,S,u,s,f)}bn(e,it,ct);return;case"option":for(var Xt in a)if(it=a[Xt],a.hasOwnProperty(Xt)&&it!=null&&!s.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:ke(e,n,Xt,null,s,it)}for(H in s)if(it=s[H],ct=a[H],s.hasOwnProperty(H)&&it!==ct&&(it!=null||ct!=null))switch(H){case"selected":e.selected=it&&typeof it!="function"&&typeof it!="symbol";break;default:ke(e,n,H,it,s,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)it=a[se],a.hasOwnProperty(se)&&it!=null&&!s.hasOwnProperty(se)&&ke(e,n,se,null,s,it);for($ in s)if(it=s[$],ct=a[$],s.hasOwnProperty($)&&it!==ct&&(it!=null||ct!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(r(137,n));break;default:ke(e,n,$,it,s,ct)}return;default:if(su(n)){for(var We in a)it=a[We],a.hasOwnProperty(We)&&it!==void 0&&!s.hasOwnProperty(We)&&Yf(e,n,We,void 0,s,it);for(pt in s)it=s[pt],ct=a[pt],!s.hasOwnProperty(pt)||it===ct||it===void 0&&ct===void 0||Yf(e,n,pt,it,s,ct);return}}for(var Y in a)it=a[Y],a.hasOwnProperty(Y)&&it!=null&&!s.hasOwnProperty(Y)&&ke(e,n,Y,null,s,it);for(vt in s)it=s[vt],ct=a[vt],!s.hasOwnProperty(vt)||it===ct||it==null&&ct==null||ke(e,n,vt,it,s,ct)}function rx(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,S=u.initiatorType,A=u.duration;if(f&&A&&rx(S)){for(S=0,A=u.responseEnd,s+=1;s<a.length;s++){var H=a[s],$=H.startTime;if($>A)break;var pt=H.transferSize,vt=H.initiatorType;pt&&rx(vt)&&(H=H.responseEnd,S+=pt*(H<A?1:(A-$)/(H-$)))}if(--s,n+=8*(f+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var jf=null,Zf=null;function $l(e){return e.nodeType===9?e:e.ownerDocument}function sx(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ox(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function fS(){var e=window.event;return e&&e.type==="popstate"?e===Qf?!1:(Qf=e,!0):(Qf=null,!1)}var lx=typeof setTimeout=="function"?setTimeout:void 0,dS=typeof clearTimeout=="function"?clearTimeout:void 0,cx=typeof Promise=="function"?Promise:void 0,hS=typeof queueMicrotask=="function"?queueMicrotask:typeof cx<"u"?function(e){return cx.resolve(null).then(e).catch(pS)}:lx;function pS(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function ux(e,n){var a=n,s=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(u),ds(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Ao(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ao(a);for(var f=a.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[ir]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=S}}else a==="body"&&Ao(e.ownerDocument.body);a=u}while(a);ds(n)}function fx(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Jf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),ks(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function mS(e,n,a,s){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[ir])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=pi(e.nextSibling),e===null)break}return null}function xS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=pi(e.nextSibling),e===null))return null;return e}function dx(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=pi(e.nextSibling),e===null))return null;return e}function $f(e){return e.data==="$?"||e.data==="$~"}function td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function gS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function pi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ed=null;function hx(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return pi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function px(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function mx(e,n,a){switch(n=$l(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ao(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ks(e)}var mi=new Map,xx=new Set;function tc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ia=j.d;j.d={f:_S,r:vS,D:SS,C:yS,L:MS,m:bS,X:TS,S:ES,M:AS};function _S(){var e=ia.f(),n=Wl();return e||n}function vS(e){var n=R(e);n!==null&&n.tag===5&&n.type==="form"?N0(n):ia.r(e)}var cs=typeof document>"u"?null:document;function gx(e,n,a){var s=cs;if(s&&typeof n=="string"&&n){var u=Ze(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),xx.has(u)||(xx.add(u),e={rel:e,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Un(n,"link",e),et(n),s.head.appendChild(n)))}}function SS(e){ia.D(e),gx("dns-prefetch",e,null)}function yS(e,n){ia.C(e,n),gx("preconnect",e,n)}function MS(e,n,a){ia.L(e,n,a);var s=cs;if(s&&e&&n){var u='link[rel="preload"][as="'+Ze(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ze(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ze(a.imageSizes)+'"]')):u+='[href="'+Ze(e)+'"]';var f=u;switch(n){case"style":f=us(e);break;case"script":f=fs(e)}mi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),mi.set(f,e),s.querySelector(u)!==null||n==="style"&&s.querySelector(Ro(f))||n==="script"&&s.querySelector(Co(f))||(n=s.createElement("link"),Un(n,"link",e),et(n),s.head.appendChild(n)))}}function bS(e,n){ia.m(e,n);var a=cs;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ze(s)+'"][href="'+Ze(e)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=fs(e)}if(!mi.has(f)&&(e=g({rel:"modulepreload",href:e},n),mi.set(f,e),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(f)))return}s=a.createElement("link"),Un(s,"link",e),et(s),a.head.appendChild(s)}}}function ES(e,n,a){ia.S(e,n,a);var s=cs;if(s&&e){var u=st(s).hoistableStyles,f=us(e);n=n||"default";var S=u.get(f);if(!S){var A={loading:0,preload:null};if(S=s.querySelector(Ro(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=mi.get(f))&&nd(e,a);var H=S=s.createElement("link");et(H),Un(H,"link",e),H._p=new Promise(function($,pt){H.onload=$,H.onerror=pt}),H.addEventListener("load",function(){A.loading|=1}),H.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ec(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(f,S)}}}function TS(e,n){ia.X(e,n);var a=cs;if(a&&e){var s=st(a).hoistableScripts,u=fs(e),f=s.get(u);f||(f=a.querySelector(Co(u)),f||(e=g({src:e,async:!0},n),(n=mi.get(u))&&id(e,n),f=a.createElement("script"),et(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function AS(e,n){ia.M(e,n);var a=cs;if(a&&e){var s=st(a).hoistableScripts,u=fs(e),f=s.get(u);f||(f=a.querySelector(Co(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=mi.get(u))&&id(e,n),f=a.createElement("script"),et(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function _x(e,n,a,s){var u=(u=rt.current)?tc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=st(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var f=st(u).hoistableStyles,S=f.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=u.querySelector(Ro(e)))&&!f._p&&(S.instance=f,S.state.loading=5),mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mi.set(e,a),f||RS(u,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=st(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+Ze(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function vx(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function RS(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Un(n,"link",a),et(n),e.head.appendChild(n))}function fs(e){return'[src="'+Ze(e)+'"]'}function Co(e){return"script[async]"+e}function Sx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Ze(a.href)+'"]');if(s)return n.instance=s,et(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),et(s),Un(s,"style",u),ec(s,a.precedence,e),n.instance=s;case"stylesheet":u=us(a.href);var f=e.querySelector(Ro(u));if(f)return n.state.loading|=4,n.instance=f,et(f),f;s=vx(a),(u=mi.get(u))&&nd(s,u),f=(e.ownerDocument||e).createElement("link"),et(f);var S=f;return S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Un(f,"link",s),n.state.loading|=4,ec(f,a.precedence,e),n.instance=f;case"script":return f=fs(a.src),(u=e.querySelector(Co(f)))?(n.instance=u,et(u),u):(s=a,(u=mi.get(f))&&(s=g({},a),id(s,u)),e=e.ownerDocument||e,u=e.createElement("script"),et(u),Un(u,"link",s),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,ec(s,a.precedence,e));return n.instance}function ec(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,S=0;S<s.length;S++){var A=s[S];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var nc=null;function yx(e,n,a){if(nc===null){var s=new Map,u=nc=new Map;u.set(a,s)}else u=nc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[cn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=s.get(S);A?A.push(f):s.set(S,[f])}}return s}function Mx(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function CS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function wS(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=us(s.href),f=n.querySelector(Ro(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ic.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,et(f);return}f=n.ownerDocument||n,s=vx(s),(u=mi.get(u))&&nd(s,u),f=f.createElement("link"),et(f);var S=f;S._p=new Promise(function(A,H){S.onload=A,S.onerror=H}),Un(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ic.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ad=0;function DS(e,n){return e.stylesheets&&e.count===0&&rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&ad===0&&(ad=62500*uS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&rc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>ad?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function ic(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ac=null;function rc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ac=new Map,n.forEach(US,e),ac=null,ic.call(e))}function US(e,n){if(!(n.state.loading&4)){var a=ac.get(e);if(a)var s=a.get(null);else{a=new Map,ac.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var S=u[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}u=n.instance,S=u.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,u),a.set(S,u),this.count++,s=ic.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:D,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function LS(e,n,a,s,u,f,S,A,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Se(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Se(0),this.hiddenUpdates=Se(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Ex(e,n,a,s,u,f,S,A,H,$,pt,vt){return e=new LS(e,n,a,S,H,$,pt,vt,A),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),e.current=f,f.stateNode=e,n=Pu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Hu(f),e}function Tx(e){return e?(e=Vr,e):Vr}function Ax(e,n,a,s,u,f){u=Tx(u),s.context===null?s.context=u:s.pendingContext=u,s=Da(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ua(e,s,n),a!==null&&(Wn(a,e,n),so(a,e,n))}function Rx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function rd(e,n){Rx(e,n),(e=e.alternate)&&Rx(e,n)}function Cx(e){if(e.tag===13||e.tag===31){var n=or(e,67108864);n!==null&&Wn(n,e,67108864),rd(e,67108864)}}function wx(e){if(e.tag===13||e.tag===31){var n=ni();n=In(n);var a=or(e,n);a!==null&&Wn(a,e,n),rd(e,n)}}var sc=!0;function NS(e,n,a,s){var u=B.T;B.T=null;var f=j.p;try{j.p=2,sd(e,n,a,s)}finally{j.p=f,B.T=u}}function OS(e,n,a,s){var u=B.T;B.T=null;var f=j.p;try{j.p=8,sd(e,n,a,s)}finally{j.p=f,B.T=u}}function sd(e,n,a,s){if(sc){var u=od(s);if(u===null)qf(e,n,s,oc,a),Ux(e,s);else if(PS(u,e,n,a,s))s.stopPropagation();else if(Ux(e,s),n&4&&-1<zS.indexOf(e)){for(;u!==null;){var f=R(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=nt(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var H=1<<31-Gt(S);A.entanglements[1]|=H,S&=~H}Ni(f),(Fe&6)===0&&(Xl=b()+500,bo(0))}}break;case 31:case 13:A=or(f,2),A!==null&&Wn(A,f,2),Wl(),rd(f,2)}if(f=od(s),f===null&&qf(e,n,s,oc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else qf(e,n,s,null,a)}}function od(e){return e=lu(e),ld(e)}var oc=null;function ld(e){if(oc=null,e=Ma(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return oc=e,null}function Dx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case _t:return 2;case Mt:return 8;case ft:case Kt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var cd=!1,Va=null,Xa=null,ka=null,Do=new Map,Uo=new Map,Wa=[],zS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ux(e,n){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function Lo(e,n,a,s,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=R(n),n!==null&&Cx(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function PS(e,n,a,s,u){switch(n){case"focusin":return Va=Lo(Va,e,n,a,s,u),!0;case"dragenter":return Xa=Lo(Xa,e,n,a,s,u),!0;case"mouseover":return ka=Lo(ka,e,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return Do.set(f,Lo(Do.get(f)||null,e,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Uo.set(f,Lo(Uo.get(f)||null,e,n,a,s,u)),!0}return!1}function Lx(e){var n=Ma(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){wx(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Xs(e.priority,function(){wx(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function lc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=od(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);ou=s,a.target.dispatchEvent(s),ou=null}else return n=R(a),n!==null&&Cx(n),e.blockedOn=a,!1;n.shift()}return!0}function Nx(e,n,a){lc(e)&&a.delete(n)}function BS(){cd=!1,Va!==null&&lc(Va)&&(Va=null),Xa!==null&&lc(Xa)&&(Xa=null),ka!==null&&lc(ka)&&(ka=null),Do.forEach(Nx),Uo.forEach(Nx)}function cc(e,n){e.blockedOn===n&&(e.blockedOn=null,cd||(cd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,BS)))}var uc=null;function Ox(e){uc!==e&&(uc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){uc===e&&(uc=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],u=e[n+2];if(typeof s!="function"){if(ld(s||a)===null)continue;break}var f=R(a);f!==null&&(e.splice(n,3),n-=3,of(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ds(e){function n(H){return cc(H,e)}Va!==null&&cc(Va,e),Xa!==null&&cc(Xa,e),ka!==null&&cc(ka,e),Do.forEach(n),Uo.forEach(n);for(var a=0;a<Wa.length;a++){var s=Wa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Lx(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],S=u[mn]||null;if(typeof f=="function")S||Ox(a);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,S=f[mn]||null)A=S.formAction;else if(ld(u)!==null)continue}else A=S.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),Ox(a)}}}function zx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ud(e){this._internalRoot=e}fc.prototype.render=ud.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ni();Ax(a,s,e,n,null,null)},fc.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Ax(e.current,2,null,e,null,null),Wl(),n[Fi]=null}};function fc(e){this._internalRoot=e}fc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&Lx(e)}};var Px=t.version;if(Px!=="19.2.0")throw Error(r(527,Px,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var FS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{bt=dc.inject(FS),At=dc}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",u=X0,f=k0,S=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Ex(e,1,!1,null,null,a,s,null,u,f,S,zx),e[Fi]=n.current,Wf(e),new ud(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,u="",f=X0,S=k0,A=W0,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Ex(e,1,!0,n,a??null,s,u,H,f,S,A,zx),n.context=Tx(null),a=n.current,s=ni(),s=In(s),u=Da(s),u.callback=null,Ua(a,u,s),a=s,n.current.lanes=a,sn(n,a),Ni(n),e[Fi]=n.current,Wf(e),new fc(n)},Oo.version="19.2.0",Oo}var qx;function ZS(){if(qx)return hd.exports;qx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),hd.exports=jS(),hd.exports}var KS=ZS();const QS=$g(KS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xh="181",JS=0,Yx=1,$S=2,t_=1,ty=2,fa=3,er=0,Yn=1,da=2,ma=0,Us=1,Kd=2,jx=3,Zx=4,ey=5,Rr=100,ny=101,iy=102,ay=103,ry=104,sy=200,oy=201,ly=202,cy=203,Qd=204,Jd=205,uy=206,fy=207,dy=208,hy=209,py=210,my=211,xy=212,gy=213,_y=214,$d=0,th=1,eh=2,Os=3,nh=4,ih=5,ah=6,rh=7,e_=0,vy=1,Sy=2,xa=0,yy=1,My=2,by=3,Ey=4,Ty=5,Ay=6,Ry=7,n_=300,zs=301,Ps=302,sh=303,oh=304,tu=306,lh=1e3,ha=1001,ch=1002,si=1003,Cy=1004,hc=1005,_i=1006,gd=1007,wr=1008,Pi=1009,i_=1010,a_=1011,Yo=1012,kh=1013,Dr=1014,pa=1015,Is=1016,Wh=1017,qh=1018,jo=1020,r_=35902,s_=35899,o_=1021,l_=1022,Ri=1023,Zo=1026,Ko=1027,c_=1028,Yh=1029,jh=1030,Zh=1031,Kh=1033,Vc=33776,Xc=33777,kc=33778,Wc=33779,uh=35840,fh=35841,dh=35842,hh=35843,ph=36196,mh=37492,xh=37496,gh=37808,_h=37809,vh=37810,Sh=37811,yh=37812,Mh=37813,bh=37814,Eh=37815,Th=37816,Ah=37817,Rh=37818,Ch=37819,wh=37820,Dh=37821,Uh=36492,Lh=36494,Nh=36495,Oh=36283,zh=36284,Ph=36285,Bh=36286,wy=3200,Dy=3201,u_=0,Uy=1,$a="",qn="srgb",Bs="srgb-linear",Yc="linear",qe="srgb",hs=7680,Kx=519,Ly=512,Ny=513,Oy=514,f_=515,zy=516,Py=517,By=518,Fy=519,Fh=35044,Qx="300 es",zi=2e3,jc=2001;function d_(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Zc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Iy(){const o=Zc("canvas");return o.style.display="block",o}const Jx={};function Kc(...o){const t="THREE."+o.shift();console.log(t,...o)}function ue(...o){const t="THREE."+o.shift();console.warn(t,...o)}function en(...o){const t="THREE."+o.shift();console.error(t,...o)}function Qo(...o){const t=o.join(" ");t in Jx||(Jx[t]=!0,ue(...o))}function Hy(o,t,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Hs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $x=1234567;const Ls=Math.PI/180,Jo=180/Math.PI;function ga(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function Qh(o,t){return(o%t+t)%t}function Gy(o,t,i,r,l){return r+(o-t)*(l-r)/(i-t)}function Vy(o,t,i){return o!==t?(i-o)/(t-o):0}function qo(o,t,i){return(1-i)*o+i*t}function Xy(o,t,i,r){return qo(o,t,1-Math.exp(-i*r))}function ky(o,t=1){return t-Math.abs(Qh(o,t*2)-t)}function Wy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function qy(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function Yy(o,t){return o+Math.floor(Math.random()*(t-o+1))}function jy(o,t){return o+Math.random()*(t-o)}function Zy(o){return o*(.5-Math.random())}function Ky(o){o!==void 0&&($x=o);let t=$x+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Qy(o){return o*Ls}function Jy(o){return o*Jo}function $y(o){return(o&o-1)===0&&o!==0}function tM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function eM(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function nM(o,t,i,r,l){const c=Math.cos,d=Math.sin,h=c(i/2),m=d(i/2),p=c((t+r)/2),x=d((t+r)/2),g=c((t-r)/2),_=d((t-r)/2),y=c((r-t)/2),E=d((r-t)/2);switch(l){case"XYX":o.set(h*x,m*g,m*_,h*p);break;case"YZY":o.set(m*_,h*x,m*g,h*p);break;case"ZXZ":o.set(m*g,m*_,h*x,h*p);break;case"XZX":o.set(h*x,m*E,m*y,h*p);break;case"YXY":o.set(m*y,h*x,m*E,h*p);break;case"ZYZ":o.set(m*E,m*y,h*x,h*p);break;default:ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ai(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ve(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const zo={DEG2RAD:Ls,RAD2DEG:Jo,generateUUID:ga,clamp:Ae,euclideanModulo:Qh,mapLinear:Gy,inverseLerp:Vy,lerp:qo,damp:Xy,pingpong:ky,smoothstep:Wy,smootherstep:qy,randInt:Yy,randFloat:jy,randFloatSpread:Zy,seededRandom:Ky,degToRad:Qy,radToDeg:Jy,isPowerOfTwo:$y,ceilPowerOfTwo:tM,floorPowerOfTwo:eM,setQuaternionFromProperEuler:nM,normalize:Ve,denormalize:Ai};class ve{constructor(t=0,i=0){ve.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*r-d*l+t.x,this.y=c*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $o{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],g=r[l+3],_=c[d+0],y=c[d+1],E=c[d+2],T=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g;return}if(h>=1){t[i+0]=_,t[i+1]=y,t[i+2]=E,t[i+3]=T;return}if(g!==T||m!==_||p!==y||x!==E){let M=m*_+p*y+x*E+g*T;M<0&&(_=-_,y=-y,E=-E,T=-T,M=-M);let v=1-h;if(M<.9995){const O=Math.acos(M),D=Math.sin(O);v=Math.sin(v*O)/D,h=Math.sin(h*O)/D,m=m*v+_*h,p=p*v+y*h,x=x*v+E*h,g=g*v+T*h}else{m=m*v+_*h,p=p*v+y*h,x=x*v+E*h,g=g*v+T*h;const O=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=O,p*=O,x*=O,g*=O}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],g=c[d],_=c[d+1],y=c[d+2],E=c[d+3];return t[i]=h*E+x*g+m*y-p*_,t[i+1]=m*E+x*_+p*g-h*y,t[i+2]=p*E+x*y+h*_-m*g,t[i+3]=x*E-h*g-m*_-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),g=h(c/2),_=m(r/2),y=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=_*x*g+p*y*E,this._y=p*y*g-_*x*E,this._z=p*x*E+_*y*g,this._w=p*x*g-_*y*E;break;case"YXZ":this._x=_*x*g+p*y*E,this._y=p*y*g-_*x*E,this._z=p*x*E-_*y*g,this._w=p*x*g+_*y*E;break;case"ZXY":this._x=_*x*g-p*y*E,this._y=p*y*g+_*x*E,this._z=p*x*E+_*y*g,this._w=p*x*g-_*y*E;break;case"ZYX":this._x=_*x*g-p*y*E,this._y=p*y*g+_*x*E,this._z=p*x*E-_*y*g,this._w=p*x*g+_*y*E;break;case"YZX":this._x=_*x*g+p*y*E,this._y=p*y*g+_*x*E,this._z=p*x*E-_*y*g,this._w=p*x*g-_*y*E;break;case"XZY":this._x=_*x*g-p*y*E,this._y=p*y*g-_*x*E,this._z=p*x*E+_*y*g,this._w=p*x*g+_*y*E;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],_=r+h+g;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(x-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(x-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-r*p,this._z=c*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(tg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(tg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-c*l),g=2*(c*r-d*i);return this.x=i+m*p+d*g-h*x,this.y=r+m*x+h*p-c*g,this.z=l+m*g+c*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return _d.copy(this).projectOnVector(t),this.sub(_d)}reflect(t){return this.sub(_d.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _d=new tt,tg=new $o;class xe{constructor(t,i,r,l,c,d,h,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p)}set(t,i,r,l,c,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],g=r[7],_=r[2],y=r[5],E=r[8],T=l[0],M=l[3],v=l[6],O=l[1],D=l[4],F=l[7],V=l[2],U=l[5],P=l[8];return c[0]=d*T+h*O+m*V,c[3]=d*M+h*D+m*U,c[6]=d*v+h*F+m*P,c[1]=p*T+x*O+g*V,c[4]=p*M+x*D+g*U,c[7]=p*v+x*F+g*P,c[2]=_*T+y*O+E*V,c[5]=_*M+y*D+E*U,c[8]=_*v+y*F+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*c*x+r*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=x*d-h*p,_=h*m-x*c,y=p*c-d*m,E=i*g+r*_+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(l*p-x*r)*T,t[2]=(h*r-l*d)*T,t[3]=_*T,t[4]=(x*i-l*m)*T,t[5]=(l*c-h*i)*T,t[6]=y*T,t[7]=(r*m-p*i)*T,t[8]=(d*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(vd.makeScale(t,i)),this}rotate(t){return this.premultiply(vd.makeRotation(-t)),this}translate(t,i){return this.premultiply(vd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vd=new xe,eg=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ng=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iM(){const o={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===qe&&(l.r=_a(l.r),l.g=_a(l.g),l.b=_a(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===qe&&(l.r=Ns(l.r),l.g=Ns(l.g),l.b=Ns(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Yc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Bs]:{primaries:t,whitePoint:r,transfer:Yc,toXYZ:eg,fromXYZ:ng,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:qn},outputColorSpaceConfig:{drawingBufferColorSpace:qn}},[qn]:{primaries:t,whitePoint:r,transfer:qe,toXYZ:eg,fromXYZ:ng,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:qn}}}),o}const Be=iM();function _a(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ns(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ps;class aM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ps===void 0&&(ps=Zc("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Zc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=_a(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(_a(i[r]/255)*255):i[r]=_a(i[r]);return{data:i,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let rM=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=ga(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Sd(l[d].image)):c.push(Sd(l[d]))}else c=Sd(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function Sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?aM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let sM=0;const yd=new tt;class zn extends Hs{constructor(t=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=ha,l=ha,c=_i,d=wr,h=Ri,m=Pi,p=zn.DEFAULT_ANISOTROPY,x=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ga(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ue(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==n_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lh:t.x=t.x-Math.floor(t.x);break;case ha:t.x=t.x<0?0:1;break;case ch:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lh:t.y=t.y-Math.floor(t.y);break;case ha:t.y=t.y<0?0:1;break;case ch:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=n_;zn.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const m=t.elements,p=m[0],x=m[4],g=m[8],_=m[1],y=m[5],E=m[9],T=m[2],M=m[6],v=m[10];if(Math.abs(x-_)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(x+_)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,F=(y+1)/2,V=(v+1)/2,U=(x+_)/4,P=(g+T)/4,k=(E+M)/4;return D>F&&D>V?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=U/r,c=P/r):F>V?F<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(F),r=U/l,c=k/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=P/c,l=k/c),this.set(r,l,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(_-x)*(_-x));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(g-T)/O,this.z=(_-x)/O,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ae(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oM extends Hs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},c=new zn(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Jh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ur extends oM{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class h_ extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class lM extends zn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=si,this.minFilter=si,this.wrapR=ha,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,bi):bi.fromBufferAttribute(c,d),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),pc.copy(r.boundingBox)),pc.applyMatrix4(t.matrixWorld),this.union(pc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),mc.subVectors(this.max,Po),ms.subVectors(t.a,Po),xs.subVectors(t.b,Po),gs.subVectors(t.c,Po),Ya.subVectors(xs,ms),ja.subVectors(gs,xs),Sr.subVectors(ms,gs);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-Sr.z,Sr.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,Sr.z,0,-Sr.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-Sr.y,Sr.x,0];return!Md(i,ms,xs,gs,mc)||(i=[1,0,0,0,1,0,0,0,1],!Md(i,ms,xs,gs,mc))?!1:(xc.crossVectors(Ya,ja),i=[xc.x,xc.y,xc.z],Md(i,ms,xs,gs,mc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(aa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),aa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),aa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),aa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),aa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),aa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),aa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),aa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(aa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const aa=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],bi=new tt,pc=new tl,ms=new tt,xs=new tt,gs=new tt,Ya=new tt,ja=new tt,Sr=new tt,Po=new tt,mc=new tt,xc=new tt,yr=new tt;function Md(o,t,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){yr.fromArray(o,c);const h=l.x*Math.abs(yr.x)+l.y*Math.abs(yr.y)+l.z*Math.abs(yr.z),m=t.dot(yr),p=i.dot(yr),x=r.dot(yr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const cM=new tl,Bo=new tt,bd=new tt;class el{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):cM.setFromPoints(t).getCenter(r);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(bd)),this.expandByPoint(Bo.copy(t.center).sub(bd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ra=new tt,Ed=new tt,gc=new tt,Za=new tt,Td=new tt,_c=new tt,Ad=new tt;class $h{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ra.copy(this.origin).addScaledVector(this.direction,i),ra.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Ed.copy(t).add(i).multiplyScalar(.5),gc.copy(i).sub(t).normalize(),Za.copy(this.origin).sub(Ed);const c=t.distanceTo(i)*.5,d=-this.direction.dot(gc),h=Za.dot(this.direction),m=-Za.dot(gc),p=Za.lengthSq(),x=Math.abs(1-d*d);let g,_,y,E;if(x>0)if(g=d*m-h,_=d*h-m,E=c*x,g>=0)if(_>=-E)if(_<=E){const T=1/x;g*=T,_*=T,y=g*(g+d*_+2*h)+_*(d*g+_+2*m)+p}else _=c,g=Math.max(0,-(d*_+h)),y=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(d*_+h)),y=-g*g+_*(_+2*m)+p;else _<=-E?(g=Math.max(0,-(-d*c+h)),_=g>0?-c:Math.min(Math.max(-c,-m),c),y=-g*g+_*(_+2*m)+p):_<=E?(g=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(g=Math.max(0,-(d*c+h)),_=g>0?c:Math.min(Math.max(-c,-m),c),y=-g*g+_*(_+2*m)+p);else _=d>0?-c:c,g=Math.max(0,-(d*_+h)),y=-g*g+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Ed).addScaledVector(gc,_),y}intersectSphere(t,i){ra.subVectors(t.center,this.origin);const r=ra.dot(this.direction),l=ra.dot(ra)-r*r,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(t.min.x-_.x)*p,l=(t.max.x-_.x)*p):(r=(t.max.x-_.x)*p,l=(t.min.x-_.x)*p),x>=0?(c=(t.min.y-_.y)*x,d=(t.max.y-_.y)*x):(c=(t.max.y-_.y)*x,d=(t.min.y-_.y)*x),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-_.z)*g,m=(t.max.z-_.z)*g):(h=(t.max.z-_.z)*g,m=(t.min.z-_.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ra)!==null}intersectTriangle(t,i,r,l,c){Td.subVectors(i,t),_c.subVectors(r,t),Ad.crossVectors(Td,_c);let d=this.direction.dot(Ad),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Za.subVectors(this.origin,t);const m=h*this.direction.dot(_c.crossVectors(Za,_c));if(m<0)return null;const p=h*this.direction.dot(Td.cross(Za));if(p<0||m+p>d)return null;const x=-h*Za.dot(Ad);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,r,l,c,d,h,m,p,x,g,_,y,E,T,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,d,h,m,p,x,g,_,y,E,T,M)}set(t,i,r,l,c,d,h,m,p,x,g,_,y,E,T,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=g,v[14]=_,v[3]=y,v[7]=E,v[11]=T,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),c=1/_s.setFromMatrixColumn(t,1).length(),d=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const _=d*x,y=d*g,E=h*x,T=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=y+E*p,i[5]=_-T*p,i[9]=-h*m,i[2]=T-_*p,i[6]=E+y*p,i[10]=d*m}else if(t.order==="YXZ"){const _=m*x,y=m*g,E=p*x,T=p*g;i[0]=_+T*h,i[4]=E*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=y*h-E,i[6]=T+_*h,i[10]=d*m}else if(t.order==="ZXY"){const _=m*x,y=m*g,E=p*x,T=p*g;i[0]=_-T*h,i[4]=-d*g,i[8]=E+y*h,i[1]=y+E*h,i[5]=d*x,i[9]=T-_*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const _=d*x,y=d*g,E=h*x,T=h*g;i[0]=m*x,i[4]=E*p-y,i[8]=_*p+T,i[1]=m*g,i[5]=T*p+_,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const _=d*m,y=d*p,E=h*m,T=h*p;i[0]=m*x,i[4]=T-_*g,i[8]=E*g+y,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*g+E,i[10]=_-T*g}else if(t.order==="XZY"){const _=d*m,y=d*p,E=h*m,T=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=_*g+T,i[5]=d*x,i[9]=y*g-E,i[2]=E*g-y,i[6]=h*x,i[10]=T*g+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uM,t,fM)}lookAt(t,i,r){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ka.crossVectors(r,ii),Ka.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ka.crossVectors(r,ii)),Ka.normalize(),vc.crossVectors(ii,Ka),l[0]=Ka.x,l[4]=vc.x,l[8]=ii.x,l[1]=Ka.y,l[5]=vc.y,l[9]=ii.y,l[2]=Ka.z,l[6]=vc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],g=r[5],_=r[9],y=r[13],E=r[2],T=r[6],M=r[10],v=r[14],O=r[3],D=r[7],F=r[11],V=r[15],U=l[0],P=l[4],k=l[8],w=l[12],C=l[1],G=l[5],K=l[9],lt=l[13],ht=l[2],dt=l[6],B=l[10],j=l[14],W=l[3],gt=l[7],yt=l[11],z=l[15];return c[0]=d*U+h*C+m*ht+p*W,c[4]=d*P+h*G+m*dt+p*gt,c[8]=d*k+h*K+m*B+p*yt,c[12]=d*w+h*lt+m*j+p*z,c[1]=x*U+g*C+_*ht+y*W,c[5]=x*P+g*G+_*dt+y*gt,c[9]=x*k+g*K+_*B+y*yt,c[13]=x*w+g*lt+_*j+y*z,c[2]=E*U+T*C+M*ht+v*W,c[6]=E*P+T*G+M*dt+v*gt,c[10]=E*k+T*K+M*B+v*yt,c[14]=E*w+T*lt+M*j+v*z,c[3]=O*U+D*C+F*ht+V*W,c[7]=O*P+D*G+F*dt+V*gt,c[11]=O*k+D*K+F*B+V*yt,c[15]=O*w+D*lt+F*j+V*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],g=t[6],_=t[10],y=t[14],E=t[3],T=t[7],M=t[11],v=t[15];return E*(+c*m*g-l*p*g-c*h*_+r*p*_+l*h*y-r*m*y)+T*(+i*m*y-i*p*_+c*d*_-l*d*y+l*p*x-c*m*x)+M*(+i*p*g-i*h*y-c*d*g+r*d*y+c*h*x-r*p*x)+v*(-l*h*x-i*m*g+i*h*_+l*d*g-r*d*_+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=t[9],_=t[10],y=t[11],E=t[12],T=t[13],M=t[14],v=t[15],O=g*M*p-T*_*p+T*m*y-h*M*y-g*m*v+h*_*v,D=E*_*p-x*M*p-E*m*y+d*M*y+x*m*v-d*_*v,F=x*T*p-E*g*p+E*h*y-d*T*y-x*h*v+d*g*v,V=E*g*m-x*T*m-E*h*_+d*T*_+x*h*M-d*g*M,U=i*O+r*D+l*F+c*V;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/U;return t[0]=O*P,t[1]=(T*_*c-g*M*c-T*l*y+r*M*y+g*l*v-r*_*v)*P,t[2]=(h*M*c-T*m*c+T*l*p-r*M*p-h*l*v+r*m*v)*P,t[3]=(g*m*c-h*_*c-g*l*p+r*_*p+h*l*y-r*m*y)*P,t[4]=D*P,t[5]=(x*M*c-E*_*c+E*l*y-i*M*y-x*l*v+i*_*v)*P,t[6]=(E*m*c-d*M*c-E*l*p+i*M*p+d*l*v-i*m*v)*P,t[7]=(d*_*c-x*m*c+x*l*p-i*_*p-d*l*y+i*m*y)*P,t[8]=F*P,t[9]=(E*g*c-x*T*c-E*r*y+i*T*y+x*r*v-i*g*v)*P,t[10]=(d*T*c-E*h*c+E*r*p-i*T*p-d*r*v+i*h*v)*P,t[11]=(x*h*c-d*g*c-x*r*p+i*g*p+d*r*y-i*h*y)*P,t[12]=V*P,t[13]=(x*T*l-E*g*l+E*r*_-i*T*_-x*r*M+i*g*M)*P,t[14]=(E*h*l-d*T*l-E*r*m+i*T*m+d*r*M-i*h*M)*P,t[15]=(d*g*l-x*h*l+x*r*m-i*g*m-d*r*_+i*h*_)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=t.x,h=t.y,m=t.z,p=c*d,x=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,d){return this.set(1,r,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,g=h+h,_=c*p,y=c*x,E=c*g,T=d*x,M=d*g,v=h*g,O=m*p,D=m*x,F=m*g,V=r.x,U=r.y,P=r.z;return l[0]=(1-(T+v))*V,l[1]=(y+F)*V,l[2]=(E-D)*V,l[3]=0,l[4]=(y-F)*U,l[5]=(1-(_+v))*U,l[6]=(M+O)*U,l[7]=0,l[8]=(E+D)*P,l[9]=(M-O)*P,l[10]=(1-(_+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const d=_s.set(l[4],l[5],l[6]).length(),h=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ei.copy(this);const p=1/c,x=1/d,g=1/h;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=x,Ei.elements[5]*=x,Ei.elements[6]*=x,Ei.elements[8]*=g,Ei.elements[9]*=g,Ei.elements[10]*=g,i.setFromRotationMatrix(Ei),r.x=c,r.y=d,r.z=h,this}makePerspective(t,i,r,l,c,d,h=zi,m=!1){const p=this.elements,x=2*c/(i-t),g=2*c/(r-l),_=(i+t)/(i-t),y=(r+l)/(r-l);let E,T;if(m)E=c/(d-c),T=d*c/(d-c);else if(h===zi)E=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===jc)E=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,d,h=zi,m=!1){const p=this.elements,x=2/(i-t),g=2/(r-l),_=-(i+t)/(i-t),y=-(r+l)/(r-l);let E,T;if(m)E=1/(d-c),T=d/(d-c);else if(h===zi)E=-2/(d-c),T=-(d+c)/(d-c);else if(h===jc)E=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new tt,Ei=new tn,uM=new tt(0,0,0),fM=new tt(1,1,1),Ka=new tt,vc=new tt,ii=new tt,ig=new tn,ag=new $o;class Bi{constructor(t=0,i=0,r=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],_=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,y),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return ig.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ig,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ag.setFromEuler(this),this.setFromQuaternion(ag,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class tp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dM=0;const rg=new tt,vs=new $o,sa=new tn,Sc=new tt,Fo=new tt,hM=new tt,pM=new $o,sg=new tt(1,0,0),og=new tt(0,1,0),lg=new tt(0,0,1),cg={type:"added"},mM={type:"removed"},Ss={type:"childadded",child:null},Rd={type:"childremoved",child:null};class An extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dM++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const t=new tt,i=new Bi,r=new $o,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new xe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(sg,t)}rotateY(t){return this.rotateOnAxis(og,t)}rotateZ(t){return this.rotateOnAxis(lg,t)}translateOnAxis(t,i){return rg.copy(t).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(sg,t)}translateY(t){return this.translateOnAxis(og,t)}translateZ(t){return this.translateOnAxis(lg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Sc.copy(t):Sc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Fo,Sc,this.up):sa.lookAt(Sc,Fo,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(sa),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(en("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cg),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null):en("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(mM),Rd.child=t,this.dispatchEvent(Rd),Rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cg),Ss.child=t,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,hM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,pM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),g=d(t.shapes),_=d(t.skeletons),y=d(t.animations),E=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}An.DEFAULT_UP=new tt(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new tt,oa=new tt,Cd=new tt,la=new tt,ys=new tt,Ms=new tt,ug=new tt,wd=new tt,Dd=new tt,Ud=new tt,Ld=new rn,Nd=new rn,Od=new rn;class ri{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ti.subVectors(t,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ti.subVectors(l,i),oa.subVectors(r,i),Cd.subVectors(t,i);const d=Ti.dot(Ti),h=Ti.dot(oa),m=Ti.dot(Cd),p=oa.dot(oa),x=oa.dot(Cd),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,y=(p*m-h*x)*_,E=(d*x-h*m)*_;return c.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,la)===null?!1:la.x>=0&&la.y>=0&&la.x+la.y<=1}static getInterpolation(t,i,r,l,c,d,h,m){return this.getBarycoord(t,i,r,l,la)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,la.x),m.addScaledVector(d,la.y),m.addScaledVector(h,la.z),m)}static getInterpolatedAttribute(t,i,r,l,c,d){return Ld.setScalar(0),Nd.setScalar(0),Od.setScalar(0),Ld.fromBufferAttribute(t,i),Nd.fromBufferAttribute(t,r),Od.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(Ld,c.x),d.addScaledVector(Nd,c.y),d.addScaledVector(Od,c.z),d}static isFrontFacing(t,i,r,l){return Ti.subVectors(r,i),oa.subVectors(t,i),Ti.cross(oa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),oa.subVectors(this.a,this.b),Ti.cross(oa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ri.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return ri.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let d,h;ys.subVectors(l,r),Ms.subVectors(c,r),wd.subVectors(t,r);const m=ys.dot(wd),p=Ms.dot(wd);if(m<=0&&p<=0)return i.copy(r);Dd.subVectors(t,l);const x=ys.dot(Dd),g=Ms.dot(Dd);if(x>=0&&g<=x)return i.copy(l);const _=m*g-x*p;if(_<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(ys,d);Ud.subVectors(t,c);const y=ys.dot(Ud),E=Ms.dot(Ud);if(E>=0&&y<=E)return i.copy(c);const T=y*p-m*E;if(T<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(r).addScaledVector(Ms,h);const M=x*E-y*g;if(M<=0&&g-x>=0&&y-E>=0)return ug.subVectors(c,l),h=(g-x)/(g-x+(y-E)),i.copy(l).addScaledVector(ug,h);const v=1/(M+T+_);return d=T*v,h=_*v,i.copy(r).addScaledVector(ys,d).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},yc={h:0,s:0,l:0};function zd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class De{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=qn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Be.workingColorSpace){return this.r=t,this.g=i,this.b=r,Be.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Be.workingColorSpace){if(t=Qh(t,1),i=Ae(i,0,1),r=Ae(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=zd(d,c,t+1/3),this.g=zd(d,c,t),this.b=zd(d,c,t-1/3)}return Be.colorSpaceToWorking(this,l),this}setStyle(t,i=qn){function r(c){c!==void 0&&parseFloat(c)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ue("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=qn){const r=p_[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_a(t.r),this.g=_a(t.g),this.b=_a(t.b),this}copyLinearToSRGB(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qn){return Be.workingToColorSpace(On.copy(this),t),Math.round(Ae(On.r*255,0,255))*65536+Math.round(Ae(On.g*255,0,255))*256+Math.round(Ae(On.b*255,0,255))}getHexString(t=qn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Be.workingColorSpace){Be.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Be.workingColorSpace){return Be.workingToColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=qn){Be.workingToColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==qn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Qa),this.setHSL(Qa.h+t,Qa.s+i,Qa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Qa),t.getHSL(yc);const r=qo(Qa.h,yc.h,i),l=qo(Qa.s,yc.s,i),c=qo(Qa.l,yc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new De;De.NAMES=p_;let xM=0;class Lr extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=Us,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ue(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ue(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qd&&(r.blendSrc=this.blendSrc),this.blendDst!==Jd&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class m_ extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=e_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pn=new tt,Mc=new ve;let gM=0;class jn{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Fh,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(t),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(t),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ai(i,this.array)),i}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ai(i,this.array)),i}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ai(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ai(i,this.array)),i}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fh&&(t.usage=this.usage),t}}class x_ extends jn{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class g_ extends jn{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class vi extends jn{constructor(t,i,r){super(new Float32Array(t),i,r)}}let _M=0;const xi=new tn,Pd=new An,bs=new tt,ai=new tl,Io=new tl,Tn=new tt;class oi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(d_(t)?g_:x_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new xe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,i,r){return xi.makeTranslation(t,i,r),this.applyMatrix4(xi),this}scale(t,i,r){return xi.makeScale(t,i,r),this.applyMatrix4(xi),this}lookAt(t){return Pd.lookAt(t),Pd.updateMatrix(),this.applyMatrix4(Pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&en('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){en("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Io.setFromBufferAttribute(h),this.morphTargetsRelative?(Tn.addVectors(ai.min,Io.min),ai.expandByPoint(Tn),Tn.addVectors(ai.max,Io.max),ai.expandByPoint(Tn)):(ai.expandByPoint(Io.min),ai.expandByPoint(Io.max))}ai.getCenter(r);let l=0;for(let c=0,d=t.count;c<d;c++)Tn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Tn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Tn.fromBufferAttribute(h,p),m&&(bs.fromBufferAttribute(t,p),Tn.add(bs)),l=Math.max(l,r.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&en('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){en("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let k=0;k<r.count;k++)h[k]=new tt,m[k]=new tt;const p=new tt,x=new tt,g=new tt,_=new ve,y=new ve,E=new ve,T=new tt,M=new tt;function v(k,w,C){p.fromBufferAttribute(r,k),x.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),_.fromBufferAttribute(c,k),y.fromBufferAttribute(c,w),E.fromBufferAttribute(c,C),x.sub(p),g.sub(p),y.sub(_),E.sub(_);const G=1/(y.x*E.y-E.x*y.y);isFinite(G)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(g,-y.y).multiplyScalar(G),M.copy(g).multiplyScalar(y.x).addScaledVector(x,-E.x).multiplyScalar(G),h[k].add(T),h[w].add(T),h[C].add(T),m[k].add(M),m[w].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let k=0,w=O.length;k<w;++k){const C=O[k],G=C.start,K=C.count;for(let lt=G,ht=G+K;lt<ht;lt+=3)v(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const D=new tt,F=new tt,V=new tt,U=new tt;function P(k){V.fromBufferAttribute(l,k),U.copy(V);const w=h[k];D.copy(w),D.sub(V.multiplyScalar(V.dot(w))).normalize(),F.crossVectors(U,w);const G=F.dot(m[k])<0?-1:1;d.setXYZW(k,D.x,D.y,D.z,G)}for(let k=0,w=O.length;k<w;++k){const C=O[k],G=C.start,K=C.count;for(let lt=G,ht=G+K;lt<ht;lt+=3)P(t.getX(lt+0)),P(t.getX(lt+1)),P(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new jn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const l=new tt,c=new tt,d=new tt,h=new tt,m=new tt,p=new tt,x=new tt,g=new tt;if(t)for(let _=0,y=t.count;_<y;_+=3){const E=t.getX(_+0),T=t.getX(_+1),M=t.getX(_+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,M),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),h.add(x),m.add(x),p.add(x),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,y=i.count;_<y;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),d.fromBufferAttribute(i,_+2),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),r.setXYZ(_+0,x.x,x.y,x.z),r.setXYZ(_+1,x.x,x.y,x.z),r.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Tn.fromBufferAttribute(t,i),Tn.normalize(),t.setXYZ(i,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,g=h.normalized,_=new p.constructor(m.length*x);let y=0,E=0;for(let T=0,M=m.length;T<M;T++){h.isInterleavedBufferAttribute?y=m[T]*h.data.stride+h.offset:y=m[T]*x;for(let v=0;v<x;v++)_[E++]=p[y++]}return new jn(_,x,g)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new oi,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const _=p[x],y=t(_,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,_=p.length;g<_;g++){const y=p[g];x.push(y.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],g=c[p];for(let _=0,y=g.length;_<y;_++)x.push(g[_].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fg=new tn,Mr=new $h,bc=new el,dg=new tt,Ec=new tt,Tc=new tt,Ac=new tt,Bd=new tt,Rc=new tt,hg=new tt,Cc=new tt;class va extends An{constructor(t=new oi,i=new m_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Rc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Bd.fromBufferAttribute(g,t),d?Rc.addScaledVector(Bd,x):Rc.addScaledVector(Bd.sub(i),x))}i.add(Rc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(c),Mr.copy(t.ray).recast(t.near),!(bc.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(bc,dg)===null||Mr.origin.distanceToSquared(dg)>(t.far-t.near)**2))&&(fg.copy(c).invert(),Mr.copy(t.ray).applyMatrix4(fg),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,_=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,T=_.length;E<T;E++){const M=_[E],v=d[M.materialIndex],O=Math.max(M.start,y.start),D=Math.min(h.count,Math.min(M.start+M.count,y.start+y.count));for(let F=O,V=D;F<V;F+=3){const U=h.getX(F),P=h.getX(F+1),k=h.getX(F+2);l=wc(this,v,t,r,p,x,g,U,P,k),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(h.count,y.start+y.count);for(let M=E,v=T;M<v;M+=3){const O=h.getX(M),D=h.getX(M+1),F=h.getX(M+2);l=wc(this,d,t,r,p,x,g,O,D,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,T=_.length;E<T;E++){const M=_[E],v=d[M.materialIndex],O=Math.max(M.start,y.start),D=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let F=O,V=D;F<V;F+=3){const U=F,P=F+1,k=F+2;l=wc(this,v,t,r,p,x,g,U,P,k),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let M=E,v=T;M<v;M+=3){const O=M,D=M+1,F=M+2;l=wc(this,d,t,r,p,x,g,O,D,F),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function vM(o,t,i,r,l,c,d,h){let m;if(t.side===Yn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,t.side===er,h),m===null)return null;Cc.copy(h),Cc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Cc);return p<i.near||p>i.far?null:{distance:p,point:Cc.clone(),object:o}}function wc(o,t,i,r,l,c,d,h,m,p){o.getVertexPosition(h,Ec),o.getVertexPosition(m,Tc),o.getVertexPosition(p,Ac);const x=vM(o,t,i,r,Ec,Tc,Ac,hg);if(x){const g=new tt;ri.getBarycoord(hg,Ec,Tc,Ac,g),l&&(x.uv=ri.getInterpolatedAttribute(l,h,m,p,g,new ve)),c&&(x.uv1=ri.getInterpolatedAttribute(c,h,m,p,g,new ve)),d&&(x.normal=ri.getInterpolatedAttribute(d,h,m,p,g,new tt),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new tt,materialIndex:0};ri.getNormal(Ec,Tc,Ac,_.normal),x.face=_,x.barycoord=g}return x}class nl extends oi{constructor(t=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],g=[];let _=0,y=0;E("z","y","x",-1,-1,r,i,t,d,c,0),E("z","y","x",1,-1,r,i,-t,d,c,1),E("x","z","y",1,1,t,r,i,l,d,2),E("x","z","y",1,-1,t,r,-i,l,d,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(x,3)),this.setAttribute("uv",new vi(g,2));function E(T,M,v,O,D,F,V,U,P,k,w){const C=F/P,G=V/k,K=F/2,lt=V/2,ht=U/2,dt=P+1,B=k+1;let j=0,W=0;const gt=new tt;for(let yt=0;yt<B;yt++){const z=yt*G-lt;for(let at=0;at<dt;at++){const Et=at*C-K;gt[T]=Et*O,gt[M]=z*D,gt[v]=ht,p.push(gt.x,gt.y,gt.z),gt[T]=0,gt[M]=0,gt[v]=U>0?1:-1,x.push(gt.x,gt.y,gt.z),g.push(at/P),g.push(1-yt/k),j+=1}}for(let yt=0;yt<k;yt++)for(let z=0;z<P;z++){const at=_+z+dt*yt,Et=_+z+dt*(yt+1),Ct=_+(z+1)+dt*(yt+1),zt=_+(z+1)+dt*yt;m.push(at,Et,zt),m.push(Et,Ct,zt),W+=6}h.addGroup(y,W,w),y+=W,_+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Fn(o){const t={};for(let i=0;i<o.length;i++){const r=Fs(o[i]);for(const l in r)t[l]=r[l]}return t}function SM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function __(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Be.workingColorSpace}const yM={clone:Fs,merge:Fn};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fs(t.uniforms),this.uniformsGroups=SM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class v_ extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new tt,pg=new ve,mg=new ve;class gi extends v_{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Jo*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jo*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z)}getViewSize(t,i){return this.getViewBounds(t,pg,mg),i.subVectors(mg,pg)}setViewOffset(t,i,r,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ls*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,Ts=1;class EM extends An{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi(Es,Ts,t,i);l.layers=this.layers,this.add(l);const c=new gi(Es,Ts,t,i);c.layers=this.layers,this.add(c);const d=new gi(Es,Ts,t,i);d.layers=this.layers,this.add(d);const h=new gi(Es,Ts,t,i);h.layers=this.layers,this.add(h);const m=new gi(Es,Ts,t,i);m.layers=this.layers,this.add(m);const p=new gi(Es,Ts,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===zi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(g,_,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class S_ extends zn{constructor(t=[],i=zs,r,l,c,d,h,m,p,x){super(t,i,r,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class TM extends Ur{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new S_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new nl(5,5,5),c=new Sa({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:ma});c.uniforms.tEquirect.value=i;const d=new va(l,c),h=i.minFilter;return i.minFilter===wr&&(i.minFilter=_i),new EM(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(c)}}class Dc extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AM={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,r),v=this._getHandJoint(p,T);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=x.position.distanceTo(g.position),y=.02,E=.005;p.inputState.pinching&&_>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(AM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Dc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class RM extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class CM{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Fh,this.updateRanges=[],this.version=0,this.uuid=ga()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,r){t*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[t+l]=i.array[r+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ga()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new tt;class Qc{constructor(t,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=Ai(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Ve(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Ve(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Ai(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Ai(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Ai(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Ai(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t=t*this.data.stride+this.offset,this.normalized&&(i=Ve(i,this.array),r=Ve(r,this.array),l=Ve(l,this.array),c=Ve(c,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=l,this.data.array[t+3]=c,this}clone(t){if(t===void 0){Kc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new jn(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Qc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Kc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class y_ extends Lr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let As;const Ho=new tt,Rs=new tt,Cs=new tt,ws=new ve,Go=new ve,M_=new tn,Uc=new tt,Vo=new tt,Lc=new tt,xg=new ve,Id=new ve,gg=new ve;class wM extends An{constructor(t=new y_){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new oi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new CM(i,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Qc(r,3,0,!1)),As.setAttribute("uv",new Qc(r,2,3,!1))}this.geometry=As,this.material=t,this.center=new ve(.5,.5),this.count=1}raycast(t,i){t.camera===null&&en('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),M_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const d=this.center;Nc(Uc.set(-.5,-.5,0),Cs,d,Rs,l,c),Nc(Vo.set(.5,-.5,0),Cs,d,Rs,l,c),Nc(Lc.set(.5,.5,0),Cs,d,Rs,l,c),xg.set(0,0),Id.set(1,0),gg.set(1,1);let h=t.ray.intersectTriangle(Uc,Vo,Lc,!1,Ho);if(h===null&&(Nc(Vo.set(-.5,.5,0),Cs,d,Rs,l,c),Id.set(0,1),h=t.ray.intersectTriangle(Uc,Lc,Vo,!1,Ho),h===null))return;const m=t.ray.origin.distanceTo(Ho);m<t.near||m>t.far||i.push({distance:m,point:Ho.clone(),uv:ri.getInterpolation(Ho,Uc,Vo,Lc,xg,Id,gg,new ve),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nc(o,t,i,r,l,c){ws.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Go.x=c*ws.x-l*ws.y,Go.y=l*ws.x+c*ws.y):Go.copy(ws),o.copy(t),o.x+=Go.x,o.y+=Go.y,o.applyMatrix4(M_)}class DM extends zn{constructor(t=null,i=1,r=1,l,c,d,h,m,p=si,x=si,g,_){super(null,d,h,m,p,x,l,c,g,_),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hd=new tt,UM=new tt,LM=new xe;class Ar{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Hd.subVectors(r,i).cross(UM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Hd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||LM.getNormalMatrix(t),l=this.coplanarPoint(Hd).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new el,NM=new ve(.5,.5),Oc=new tt;class ep{constructor(t=new Ar,i=new Ar,r=new Ar,l=new Ar,c=new Ar,d=new Ar){this.planes=[t,i,r,l,c,d]}set(t,i,r,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=zi,r=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],_=c[6],y=c[7],E=c[8],T=c[9],M=c[10],v=c[11],O=c[12],D=c[13],F=c[14],V=c[15];if(l[0].setComponents(p-d,y-x,v-E,V-O).normalize(),l[1].setComponents(p+d,y+x,v+E,V+O).normalize(),l[2].setComponents(p+h,y+g,v+T,V+D).normalize(),l[3].setComponents(p-h,y-g,v-T,V-D).normalize(),r)l[4].setComponents(m,_,M,F).normalize(),l[5].setComponents(p-m,y-_,v-M,V-F).normalize();else if(l[4].setComponents(p-m,y-_,v-M,V-F).normalize(),i===zi)l[5].setComponents(p+m,y+_,v+M,V+F).normalize();else if(i===jc)l[5].setComponents(m,_,M,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(t){br.center.set(0,0,0);const i=NM.distanceTo(t.center);return br.radius=.7071067811865476+i,br.applyMatrix4(t.matrixWorld),this.intersectsSphere(br)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class b_ extends Lr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Jc=new tt,$c=new tt,_g=new tn,Xo=new $h,zc=new el,Gd=new tt,vg=new tt;class OM extends An{constructor(t=new oi,i=new b_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),$c.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Jc.distanceTo($c);t.setAttribute("lineDistance",new vi(r,1))}else ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zc.copy(r.boundingSphere),zc.applyMatrix4(l),zc.radius+=c,t.ray.intersectsSphere(zc)===!1)return;_g.copy(l).invert(),Xo.copy(t.ray).applyMatrix4(_g);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=r.index,_=r.attributes.position;if(x!==null){const y=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let T=y,M=E-1;T<M;T+=p){const v=x.getX(T),O=x.getX(T+1),D=Pc(this,t,Xo,m,v,O,T);D&&i.push(D)}if(this.isLineLoop){const T=x.getX(E-1),M=x.getX(y),v=Pc(this,t,Xo,m,T,M,E-1);v&&i.push(v)}}else{const y=Math.max(0,d.start),E=Math.min(_.count,d.start+d.count);for(let T=y,M=E-1;T<M;T+=p){const v=Pc(this,t,Xo,m,T,T+1,T);v&&i.push(v)}if(this.isLineLoop){const T=Pc(this,t,Xo,m,E-1,y,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Pc(o,t,i,r,l,c,d){const h=o.geometry.attributes.position;if(Jc.fromBufferAttribute(h,l),$c.fromBufferAttribute(h,c),i.distanceSqToSegment(Jc,$c,Gd,vg)>r)return;Gd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Gd);if(!(p<t.near||p>t.far))return{distance:p,point:vg.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const Sg=new tt,yg=new tt;class zM extends OM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)Sg.fromBufferAttribute(i,l),yg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Sg.distanceTo(yg);t.setAttribute("lineDistance",new vi(r,1))}else ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class PM extends zn{constructor(t,i,r,l,c,d,h,m,p){super(t,i,r,l,c,d,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class E_ extends zn{constructor(t,i,r=Dr,l,c,d,h=si,m=si,p,x=Zo,g=1){if(x!==Zo&&x!==Ko)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:g};super(_,l,c,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Jh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class T_ extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}const Bc=new tt,Fc=new tt,Vd=new tt,Ic=new ri;class BM extends oi{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),c=Math.cos(Ls*i),d=t.getIndex(),h=t.getAttribute("position"),m=d?d.count:h.count,p=[0,0,0],x=["a","b","c"],g=new Array(3),_={},y=[];for(let E=0;E<m;E+=3){d?(p[0]=d.getX(E),p[1]=d.getX(E+1),p[2]=d.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:T,b:M,c:v}=Ic;if(T.fromBufferAttribute(h,p[0]),M.fromBufferAttribute(h,p[1]),v.fromBufferAttribute(h,p[2]),Ic.getNormal(Vd),g[0]=`${Math.round(T.x*l)},${Math.round(T.y*l)},${Math.round(T.z*l)}`,g[1]=`${Math.round(M.x*l)},${Math.round(M.y*l)},${Math.round(M.z*l)}`,g[2]=`${Math.round(v.x*l)},${Math.round(v.y*l)},${Math.round(v.z*l)}`,!(g[0]===g[1]||g[1]===g[2]||g[2]===g[0]))for(let O=0;O<3;O++){const D=(O+1)%3,F=g[O],V=g[D],U=Ic[x[O]],P=Ic[x[D]],k=`${F}_${V}`,w=`${V}_${F}`;w in _&&_[w]?(Vd.dot(_[w].normal)<=c&&(y.push(U.x,U.y,U.z),y.push(P.x,P.y,P.z)),_[w]=null):k in _||(_[k]={index0:p[O],index1:p[D],normal:Vd.clone()})}}for(const E in _)if(_[E]){const{index0:T,index1:M}=_[E];Bc.fromBufferAttribute(h,T),Fc.fromBufferAttribute(h,M),y.push(Bc.x,Bc.y,Bc.z),y.push(Fc.x,Fc.y,Fc.z)}this.setAttribute("position",new vi(y,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class eu extends oi{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,g=t/h,_=i/m,y=[],E=[],T=[],M=[];for(let v=0;v<x;v++){const O=v*_-d;for(let D=0;D<p;D++){const F=D*g-c;E.push(F,-O,0),T.push(0,0,1),M.push(D/h),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const D=O+p*v,F=O+p*(v+1),V=O+1+p*(v+1),U=O+1+p*v;y.push(D,F,U),y.push(F,V,U)}this.setIndex(y),this.setAttribute("position",new vi(E,3)),this.setAttribute("normal",new vi(T,3)),this.setAttribute("uv",new vi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.width,t.height,t.widthSegments,t.heightSegments)}}class FM extends Lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=u_,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class IM extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class HM extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Mg={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class GM{constructor(t,i,r){const l=this;let c=!1,d=0,h=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(x){h++,c===!1&&l.onStart!==void 0&&l.onStart(x,d,h),c=!0},this.itemEnd=function(x){d++,l.onProgress!==void 0&&l.onProgress(x,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(x){l.onError!==void 0&&l.onError(x)},this.resolveURL=function(x){return m?m(x):x},this.setURLModifier=function(x){return m=x,this},this.addHandler=function(x,g){return p.push(x,g),this},this.removeHandler=function(x){const g=p.indexOf(x);return g!==-1&&p.splice(g,2),this},this.getHandler=function(x){for(let g=0,_=p.length;g<_;g+=2){const y=p[g],E=p[g+1];if(y.global&&(y.lastIndex=0),y.test(x))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const VM=new GM;class np{constructor(t){this.manager=t!==void 0?t:VM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,c){r.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}np.DEFAULT_MATERIAL_NAME="__DEFAULT";const ca={};class XM extends Error{constructor(t,i){super(t),this.response=i}}class kM extends np{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=Mg.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(ca[t]!==void 0){ca[t].push({onLoad:i,onProgress:r,onError:l});return}ca[t]=[],ca[t].push({onLoad:i,onProgress:r,onError:l});const d=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,m=this.responseType;fetch(d).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const x=ca[t],g=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),y=_?parseInt(_):0,E=y!==0;let T=0;const M=new ReadableStream({start(v){O();function O(){g.read().then(({done:D,value:F})=>{if(D)v.close();else{T+=F.byteLength;const V=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:y});for(let U=0,P=x.length;U<P;U++){const k=x[U];k.onProgress&&k.onProgress(V)}v.enqueue(F),O()}},D=>{v.error(D)})}}});return new Response(M)}else throw new XM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(x=>new DOMParser().parseFromString(x,h));case"json":return p.json();default:if(h==="")return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(h),_=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(_);return p.arrayBuffer().then(E=>y.decode(E))}}}).then(p=>{Mg.add(`file:${t}`,p);const x=ca[t];delete ca[t];for(let g=0,_=x.length;g<_;g++){const y=x[g];y.onLoad&&y.onLoad(p)}}).catch(p=>{const x=ca[t];if(x===void 0)throw this.manager.itemError(t),p;delete ca[t];for(let g=0,_=x.length;g<_;g++){const y=x[g];y.onError&&y.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class A_ extends An{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Xd=new tn,bg=new tt,Eg=new tt;class WM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ep,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;bg.setFromMatrixPosition(t.matrixWorld),i.position.copy(bg),Eg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Eg),i.updateMatrixWorld(),Xd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Xd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class R_ extends v_{constructor(t=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qM extends WM{constructor(){super(new R_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class YM extends A_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new qM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jM extends A_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ZM extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Tg=new tn;class KM{constructor(t,i,r=0,l=1/0){this.ray=new $h(t,i),this.near=r,this.far=l,this.camera=null,this.layers=new tp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):en("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Tg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tg),this}intersectObject(t,i=!0,r=[]){return Ih(t,this,r,i),r.sort(Ag),r}intersectObjects(t,i=!0,r=[]){for(let l=0,c=t.length;l<c;l++)Ih(t[l],this,r,i);return r.sort(Ag),r}}function Ag(o,t){return o.distance-t.distance}function Ih(o,t,i,r){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let d=0,h=c.length;d<h;d++)Ih(c[d],t,i,!0)}}function Rg(o,t,i,r){const l=QM(r);switch(i){case o_:return o*t;case c_:return o*t/l.components*l.byteLength;case Yh:return o*t/l.components*l.byteLength;case jh:return o*t*2/l.components*l.byteLength;case Zh:return o*t*2/l.components*l.byteLength;case l_:return o*t*3/l.components*l.byteLength;case Ri:return o*t*4/l.components*l.byteLength;case Kh:return o*t*4/l.components*l.byteLength;case Vc:case Xc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case kc:case Wc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fh:case hh:return Math.max(o,16)*Math.max(t,8)/4;case uh:case dh:return Math.max(o,8)*Math.max(t,8)/2;case ph:case mh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case _h:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case vh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case yh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case bh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Th:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case wh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Uh:case Lh:case Nh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Oh:case zh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Ph:case Bh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function QM(o){switch(o){case Pi:case i_:return{byteLength:1,components:1};case Yo:case a_:case Is:return{byteLength:2,components:1};case Wh:case qh:return{byteLength:2,components:4};case Dr:case kh:case pa:return{byteLength:4,components:1};case r_:case s_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xh}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function C_(){let o=null,t=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function JM(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,x);else{g.sort((y,E)=>y.start-E.start);let _=0;for(let y=1;y<g.length;y++){const E=g[_],T=g[y];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++_,g[_]=T)}g.length=_+1;for(let y=0,E=g.length;y<E;y++){const T=g[y];o.bufferSubData(p,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var $M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tb=`#ifdef USE_ALPHAHASH
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
#endif`,eb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ab=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rb=`#ifdef USE_AOMAP
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
#endif`,sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ob=`#ifdef USE_BATCHING
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
#endif`,lb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,db=`#ifdef USE_IRIDESCENCE
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
#endif`,hb=`#ifdef USE_BUMPMAP
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
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Mb=`#define PI 3.141592653589793
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
} // validated`,bb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Eb=`vec3 transformedNormal = objectNormal;
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
#endif`,Tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ab=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
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
#endif`,Pb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hb=`#ifdef USE_GRADIENTMAP
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
}`,Gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kb=`uniform bool receiveShadow;
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
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,qb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kb=`PhysicalMaterial material;
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
#endif`,Qb=`uniform sampler2D dfgLUT;
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
}`,Jb=`
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
#endif`,$b=`#if defined( RE_IndirectDiffuse )
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
#endif`,t3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l3=`#if defined( USE_POINTS_UV )
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
#endif`,c3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p3=`#ifdef USE_MORPHTARGETS
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
#endif`,m3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y3=`#ifdef USE_NORMALMAP
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
#endif`,M3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,w3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z3=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B3=`float getShadowMask() {
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
}`,F3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I3=`#ifdef USE_SKINNING
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
#endif`,H3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G3=`#ifdef USE_SKINNING
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
#endif`,V3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q3=`#ifdef USE_TRANSMISSION
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
#endif`,Y3=`#ifdef USE_TRANSMISSION
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
#endif`,j3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$3=`uniform sampler2D t2D;
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
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a1=`#include <common>
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
}`,r1=`#if DEPTH_PACKING == 3200
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
}`,s1=`#define DISTANCE
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
}`,o1=`#define DISTANCE
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
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`uniform float scale;
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
}`,f1=`uniform vec3 diffuse;
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
}`,d1=`#include <common>
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
}`,h1=`uniform vec3 diffuse;
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
}`,p1=`#define LAMBERT
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
}`,m1=`#define LAMBERT
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
}`,x1=`#define MATCAP
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
}`,g1=`#define MATCAP
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
}`,_1=`#define NORMAL
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
}`,v1=`#define NORMAL
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
}`,S1=`#define PHONG
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
}`,y1=`#define PHONG
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
}`,M1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,E1=`#define TOON
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
}`,T1=`#define TOON
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
}`,A1=`uniform float size;
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
}`,R1=`uniform vec3 diffuse;
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
}`,C1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,D1=`uniform float rotation;
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
}`,U1=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:$M,alphahash_pars_fragment:tb,alphamap_fragment:eb,alphamap_pars_fragment:nb,alphatest_fragment:ib,alphatest_pars_fragment:ab,aomap_fragment:rb,aomap_pars_fragment:sb,batching_pars_vertex:ob,batching_vertex:lb,begin_vertex:cb,beginnormal_vertex:ub,bsdfs:fb,iridescence_fragment:db,bumpmap_pars_fragment:hb,clipping_planes_fragment:pb,clipping_planes_pars_fragment:mb,clipping_planes_pars_vertex:xb,clipping_planes_vertex:gb,color_fragment:_b,color_pars_fragment:vb,color_pars_vertex:Sb,color_vertex:yb,common:Mb,cube_uv_reflection_fragment:bb,defaultnormal_vertex:Eb,displacementmap_pars_vertex:Tb,displacementmap_vertex:Ab,emissivemap_fragment:Rb,emissivemap_pars_fragment:Cb,colorspace_fragment:wb,colorspace_pars_fragment:Db,envmap_fragment:Ub,envmap_common_pars_fragment:Lb,envmap_pars_fragment:Nb,envmap_pars_vertex:Ob,envmap_physical_pars_fragment:Wb,envmap_vertex:zb,fog_vertex:Pb,fog_pars_vertex:Bb,fog_fragment:Fb,fog_pars_fragment:Ib,gradientmap_pars_fragment:Hb,lightmap_pars_fragment:Gb,lights_lambert_fragment:Vb,lights_lambert_pars_fragment:Xb,lights_pars_begin:kb,lights_toon_fragment:qb,lights_toon_pars_fragment:Yb,lights_phong_fragment:jb,lights_phong_pars_fragment:Zb,lights_physical_fragment:Kb,lights_physical_pars_fragment:Qb,lights_fragment_begin:Jb,lights_fragment_maps:$b,lights_fragment_end:t3,logdepthbuf_fragment:e3,logdepthbuf_pars_fragment:n3,logdepthbuf_pars_vertex:i3,logdepthbuf_vertex:a3,map_fragment:r3,map_pars_fragment:s3,map_particle_fragment:o3,map_particle_pars_fragment:l3,metalnessmap_fragment:c3,metalnessmap_pars_fragment:u3,morphinstance_vertex:f3,morphcolor_vertex:d3,morphnormal_vertex:h3,morphtarget_pars_vertex:p3,morphtarget_vertex:m3,normal_fragment_begin:x3,normal_fragment_maps:g3,normal_pars_fragment:_3,normal_pars_vertex:v3,normal_vertex:S3,normalmap_pars_fragment:y3,clearcoat_normal_fragment_begin:M3,clearcoat_normal_fragment_maps:b3,clearcoat_pars_fragment:E3,iridescence_pars_fragment:T3,opaque_fragment:A3,packing:R3,premultiplied_alpha_fragment:C3,project_vertex:w3,dithering_fragment:D3,dithering_pars_fragment:U3,roughnessmap_fragment:L3,roughnessmap_pars_fragment:N3,shadowmap_pars_fragment:O3,shadowmap_pars_vertex:z3,shadowmap_vertex:P3,shadowmask_pars_fragment:B3,skinbase_vertex:F3,skinning_pars_vertex:I3,skinning_vertex:H3,skinnormal_vertex:G3,specularmap_fragment:V3,specularmap_pars_fragment:X3,tonemapping_fragment:k3,tonemapping_pars_fragment:W3,transmission_fragment:q3,transmission_pars_fragment:Y3,uv_pars_fragment:j3,uv_pars_vertex:Z3,uv_vertex:K3,worldpos_vertex:Q3,background_vert:J3,background_frag:$3,backgroundCube_vert:t1,backgroundCube_frag:e1,cube_vert:n1,cube_frag:i1,depth_vert:a1,depth_frag:r1,distanceRGBA_vert:s1,distanceRGBA_frag:o1,equirect_vert:l1,equirect_frag:c1,linedashed_vert:u1,linedashed_frag:f1,meshbasic_vert:d1,meshbasic_frag:h1,meshlambert_vert:p1,meshlambert_frag:m1,meshmatcap_vert:x1,meshmatcap_frag:g1,meshnormal_vert:_1,meshnormal_frag:v1,meshphong_vert:S1,meshphong_frag:y1,meshphysical_vert:M1,meshphysical_frag:b1,meshtoon_vert:E1,meshtoon_frag:T1,points_vert:A1,points_frag:R1,shadow_vert:C1,shadow_frag:w1,sprite_vert:D1,sprite_frag:U1},Ot={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Oi={basic:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Fn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Fn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Fn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new De(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Fn([Ot.points,Ot.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Fn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Fn([Ot.common,Ot.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Fn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Fn([Ot.sprite,Ot.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:Fn([Ot.common,Ot.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:Fn([Ot.lights,Ot.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};Oi.physical={uniforms:Fn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Hc={r:0,b:0,g:0},Er=new Bi,L1=new tn;function N1(o,t,i,r,l,c,d){const h=new De(0);let m=c===!0?0:1,p,x,g=null,_=0,y=null;function E(D){let F=D.isScene===!0?D.background:null;return F&&F.isTexture&&(F=(D.backgroundBlurriness>0?i:t).get(F)),F}function T(D){let F=!1;const V=E(D);V===null?v(h,m):V&&V.isColor&&(v(V,1),F=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,d):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(D,F){const V=E(F);V&&(V.isCubeTexture||V.mapping===tu)?(x===void 0&&(x=new va(new nl(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:Fs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(U,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),Er.copy(F.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),x.material.uniforms.envMap.value=V,x.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(L1.makeRotationFromEuler(Er)),x.material.toneMapped=Be.getTransfer(V.colorSpace)!==qe,(g!==V||_!==V.version||y!==o.toneMapping)&&(x.material.needsUpdate=!0,g=V,_=V.version,y=o.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new va(new eu(2,2),new Sa({name:"BackgroundMaterial",uniforms:Fs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Be.getTransfer(V.colorSpace)!==qe,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||_!==V.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=V,_=V.version,y=o.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,F){D.getRGB(Hc,__(o)),r.buffers.color.setClear(Hc.r,Hc.g,Hc.b,F,d)}function O(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(D,F=1){h.set(D),m=F,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(h,m)},render:T,addToRenderList:M,dispose:O}}function O1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,d=!1;function h(C,G,K,lt,ht){let dt=!1;const B=g(lt,K,G);c!==B&&(c=B,p(c.object)),dt=y(C,lt,K,ht),dt&&E(C,lt,K,ht),ht!==null&&t.update(ht,o.ELEMENT_ARRAY_BUFFER),(dt||d)&&(d=!1,F(C,G,K,lt),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ht).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function x(C){return o.deleteVertexArray(C)}function g(C,G,K){const lt=K.wireframe===!0;let ht=r[C.id];ht===void 0&&(ht={},r[C.id]=ht);let dt=ht[G.id];dt===void 0&&(dt={},ht[G.id]=dt);let B=dt[lt];return B===void 0&&(B=_(m()),dt[lt]=B),B}function _(C){const G=[],K=[],lt=[];for(let ht=0;ht<i;ht++)G[ht]=0,K[ht]=0,lt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:lt,object:C,attributes:{},index:null}}function y(C,G,K,lt){const ht=c.attributes,dt=G.attributes;let B=0;const j=K.getAttributes();for(const W in j)if(j[W].location>=0){const yt=ht[W];let z=dt[W];if(z===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(z=C.instanceColor)),yt===void 0||yt.attribute!==z||z&&yt.data!==z.data)return!0;B++}return c.attributesNum!==B||c.index!==lt}function E(C,G,K,lt){const ht={},dt=G.attributes;let B=0;const j=K.getAttributes();for(const W in j)if(j[W].location>=0){let yt=dt[W];yt===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(yt=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(yt=C.instanceColor));const z={};z.attribute=yt,yt&&yt.data&&(z.data=yt.data),ht[W]=z,B++}c.attributes=ht,c.attributesNum=B,c.index=lt}function T(){const C=c.newAttributes;for(let G=0,K=C.length;G<K;G++)C[G]=0}function M(C){v(C,0)}function v(C,G){const K=c.newAttributes,lt=c.enabledAttributes,ht=c.attributeDivisors;K[C]=1,lt[C]===0&&(o.enableVertexAttribArray(C),lt[C]=1),ht[C]!==G&&(o.vertexAttribDivisor(C,G),ht[C]=G)}function O(){const C=c.newAttributes,G=c.enabledAttributes;for(let K=0,lt=G.length;K<lt;K++)G[K]!==C[K]&&(o.disableVertexAttribArray(K),G[K]=0)}function D(C,G,K,lt,ht,dt,B){B===!0?o.vertexAttribIPointer(C,G,K,ht,dt):o.vertexAttribPointer(C,G,K,lt,ht,dt)}function F(C,G,K,lt){T();const ht=lt.attributes,dt=K.getAttributes(),B=G.defaultAttributeValues;for(const j in dt){const W=dt[j];if(W.location>=0){let gt=ht[j];if(gt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),gt!==void 0){const yt=gt.normalized,z=gt.itemSize,at=t.get(gt);if(at===void 0)continue;const Et=at.buffer,Ct=at.type,zt=at.bytesPerElement,rt=Ct===o.INT||Ct===o.UNSIGNED_INT||gt.gpuType===kh;if(gt.isInterleavedBufferAttribute){const ut=gt.data,Ut=ut.stride,Dt=gt.offset;if(ut.isInstancedInterleavedBuffer){for(let Ft=0;Ft<W.locationSize;Ft++)v(W.location+Ft,ut.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ft=0;Ft<W.locationSize;Ft++)M(W.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let Ft=0;Ft<W.locationSize;Ft++)D(W.location+Ft,z/W.locationSize,Ct,yt,Ut*zt,(Dt+z/W.locationSize*Ft)*zt,rt)}else{if(gt.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)v(W.location+ut,gt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ut=0;ut<W.locationSize;ut++)M(W.location+ut);o.bindBuffer(o.ARRAY_BUFFER,Et);for(let ut=0;ut<W.locationSize;ut++)D(W.location+ut,z/W.locationSize,Ct,yt,z*zt,z/W.locationSize*ut*zt,rt)}}else if(B!==void 0){const yt=B[j];if(yt!==void 0)switch(yt.length){case 2:o.vertexAttrib2fv(W.location,yt);break;case 3:o.vertexAttrib3fv(W.location,yt);break;case 4:o.vertexAttrib4fv(W.location,yt);break;default:o.vertexAttrib1fv(W.location,yt)}}}}O()}function V(){k();for(const C in r){const G=r[C];for(const K in G){const lt=G[K];for(const ht in lt)x(lt[ht].object),delete lt[ht];delete G[K]}delete r[C]}}function U(C){if(r[C.id]===void 0)return;const G=r[C.id];for(const K in G){const lt=G[K];for(const ht in lt)x(lt[ht].object),delete lt[ht];delete G[K]}delete r[C.id]}function P(C){for(const G in r){const K=r[G];if(K[C.id]===void 0)continue;const lt=K[C.id];for(const ht in lt)x(lt[ht].object),delete lt[ht];delete K[C.id]}}function k(){w(),d=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:k,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:U,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function z1(o,t,i){let r;function l(p){r=p}function c(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,g){g!==0&&(o.drawArraysInstanced(r,p,x,g),i.update(x,r,g))}function h(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,g);let y=0;for(let E=0;E<g;E++)y+=x[E];i.update(y,r,1)}function m(p,x,g,_){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)d(p[E],x[E],_[E]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,x,0,_,0,g);let E=0;for(let T=0;T<g;T++)E+=x[T]*_[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function P1(o,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==Ri&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const k=P===Is&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Pi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==pa&&!k)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ue("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:y,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:F,vertexTextures:V,maxSamples:U}}function B1(o){const t=this;let i=null,r=0,l=!1,c=!1;const d=new Ar,h=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const y=g.length!==0||_||r!==0||l;return l=_,r=g.length,y},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){i=x(g,_,0)},this.setState=function(g,_,y){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,v=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?x(null):p();else{const O=c?0:r,D=O*4;let F=v.clippingState||null;m.value=F,F=x(E,_,D,y);for(let V=0;V!==D;++V)F[V]=i[V];v.clippingState=F,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(g,_,y,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=m.value,E!==!0||M===null){const v=y+T*4,O=_.matrixWorldInverse;h.getNormalMatrix(O),(M===null||M.length<v)&&(M=new Float32Array(v));for(let D=0,F=y;D!==T;++D,F+=4)d.copy(g[D]).applyMatrix4(O,h),d.normal.toArray(M,F),M[F+3]=d.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function F1(o){let t=new WeakMap;function i(d,h){return h===sh?d.mapping=zs:h===oh&&(d.mapping=Ps),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===sh||h===oh)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new TM(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const tr=4,Cg=[.125,.215,.35,.446,.526,.582],Cr=20,I1=256,ko=new R_,wg=new De;let kd=null,Wd=0,qd=0,Yd=!1;const H1=new tt;class Dg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,c={}){const{size:d=256,position:h=H1}=c;kd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kd,Wd,qd),this._renderer.xr.enabled=Yd,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===zs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Is,format:Ri,colorSpace:Bs,depthBuffer:!1},l=Ug(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(t,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G1(c)),this._blurMaterial=X1(c,t,i),this._ggxMaterial=V1(c,t,i)}return l}_compileMaterial(t){const i=new va(new oi,t);this._renderer.compile(i,ko)}_sceneToCubeUV(t,i,r,l,c){const m=new gi(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(wg),g.toneMapping=xa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new va(new nl,new m_({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let v=!1;const O=t.background;O?O.isColor&&(M.color.copy(O),t.background=null,v=!0):(M.color.copy(wg),v=!0);for(let D=0;D<6;D++){const F=D%3;F===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[D],c.y,c.z)):F===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[D]));const V=this._cubeSize;Ds(l,F*V,D>2?V:0,V,V),g.setRenderTarget(l),v&&g.render(T,m),g.render(t,m)}g.toneMapping=y,g.autoClear=_,t.background=O}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===zs||t.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Ds(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,ko)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),_=.05+p*.95,y=g*_,{_lodMax:E}=this,T=this._sizeLods[r],M=3*T*(r>E-tr?r-E+tr:0),v=4*(this._cubeSize-T);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,Ds(c,M,v,3*T,2*T),l.setRenderTarget(c),l.render(h,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ds(t,M,v,3*T,2*T),l.setRenderTarget(t),l.render(h,ko)}_blur(t,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",c),this._halfBlur(d,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&en("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const _=p.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Cr-1),T=c/E,M=isFinite(c)?1+Math.floor(x*T):Cr;M>Cr&&ue(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const v=[];let O=0;for(let P=0;P<Cr;++P){const k=P/T,w=Math.exp(-k*k/2);v.push(w),P===0?O+=w:P<M&&(O+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/O;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=v,_.latitudinal.value=d==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:D}=this;_.dTheta.value=E,_.mipInt.value=D-r;const F=this._sizeLods[l],V=3*F*(l>D-tr?l-D+tr:0),U=4*(this._cubeSize-F);Ds(i,V,U,3*F,2*F),m.setRenderTarget(i),m.render(g,ko)}}function G1(o){const t=[],i=[],r=[];let l=o;const c=o-tr+1+Cg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-tr?m=Cg[d-o+tr-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,_=[x,x,g,x,g,g,x,x,g,g,x,g],y=6,E=6,T=3,M=2,v=1,O=new Float32Array(T*E*y),D=new Float32Array(M*E*y),F=new Float32Array(v*E*y);for(let U=0;U<y;U++){const P=U%3*2/3-1,k=U>2?0:-1,w=[P,k,0,P+2/3,k,0,P+2/3,k+1,0,P,k,0,P+2/3,k+1,0,P,k+1,0];O.set(w,T*E*U),D.set(_,M*E*U);const C=[U,U,U,U,U,U];F.set(C,v*E*U)}const V=new oi;V.setAttribute("position",new jn(O,T)),V.setAttribute("uv",new jn(D,M)),V.setAttribute("faceIndex",new jn(F,v)),r.push(new va(V,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Ug(o,t,i){const r=new Ur(o,t,i);return r.texture.mapping=tu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ds(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function V1(o,t,i){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function X1(o,t,i){const r=new Float32Array(Cr),l=new tt(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nu(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Lg(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

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
		`,blending:ma,depthTest:!1,depthWrite:!1})}function Ng(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ma,depthTest:!1,depthWrite:!1})}function nu(){return`

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
	`}function k1(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===sh||m===oh,x=m===zs||m===Ps;if(p||x){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new Dg(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Dg(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function W1(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Qo("WebGLRenderer: "+r+" extension not supported."),l}}}function q1(o,t,i,r){const l={},c=new WeakMap;function d(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",d),delete l[_.id];const y=c.get(_);y&&(t.remove(y),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function h(g,_){return l[_.id]===!0||(_.addEventListener("dispose",d),l[_.id]=!0,i.memory.geometries++),_}function m(g){const _=g.attributes;for(const y in _)t.update(_[y],o.ARRAY_BUFFER)}function p(g){const _=[],y=g.index,E=g.attributes.position;let T=0;if(y!==null){const O=y.array;T=y.version;for(let D=0,F=O.length;D<F;D+=3){const V=O[D+0],U=O[D+1],P=O[D+2];_.push(V,U,U,P,P,V)}}else if(E!==void 0){const O=E.array;T=E.version;for(let D=0,F=O.length/3-1;D<F;D+=3){const V=D+0,U=D+1,P=D+2;_.push(V,U,U,P,P,V)}}else return;const M=new(d_(_)?g_:x_)(_,1);M.version=T;const v=c.get(g);v&&t.remove(v),c.set(g,M)}function x(g){const _=c.get(g);if(_){const y=g.index;y!==null&&_.version<y.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function Y1(o,t,i){let r;function l(_){r=_}let c,d;function h(_){c=_.type,d=_.bytesPerElement}function m(_,y){o.drawElements(r,y,c,_*d),i.update(y,r,1)}function p(_,y,E){E!==0&&(o.drawElementsInstanced(r,y,c,_*d,E),i.update(y,r,E))}function x(_,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,_,0,E);let M=0;for(let v=0;v<E;v++)M+=y[v];i.update(M,r,1)}function g(_,y,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<_.length;v++)p(_[v]/d,y[v],T[v]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,_,0,T,0,E);let v=0;for(let O=0;O<E;O++)v+=y[O]*T[O];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function j1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:en("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function Z1(o,t,i){const r=new WeakMap,l=new rn;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let C=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var y=C;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let F=0;E===!0&&(F=1),T===!0&&(F=2),M===!0&&(F=3);let V=h.attributes.position.count*F,U=1;V>t.maxTextureSize&&(U=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const P=new Float32Array(V*U*4*g),k=new h_(P,V,U,g);k.type=pa,k.needsUpdate=!0;const w=F*4;for(let G=0;G<g;G++){const K=v[G],lt=O[G],ht=D[G],dt=V*U*4*G;for(let B=0;B<K.count;B++){const j=B*w;E===!0&&(l.fromBufferAttribute(K,B),P[dt+j+0]=l.x,P[dt+j+1]=l.y,P[dt+j+2]=l.z,P[dt+j+3]=0),T===!0&&(l.fromBufferAttribute(lt,B),P[dt+j+4]=l.x,P[dt+j+5]=l.y,P[dt+j+6]=l.z,P[dt+j+7]=0),M===!0&&(l.fromBufferAttribute(ht,B),P[dt+j+8]=l.x,P[dt+j+9]=l.y,P[dt+j+10]=l.z,P[dt+j+11]=ht.itemSize===4?l.w:1)}}_={count:g,texture:k,size:new ve(V,U)},r.set(h,_),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const T=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",T),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:c}}function K1(o,t,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;l.get(_)!==p&&(_.update(),l.set(_,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const w_=new zn,Og=new E_(1,1),D_=new h_,U_=new lM,L_=new S_,zg=[],Pg=[],Bg=new Float32Array(16),Fg=new Float32Array(9),Ig=new Float32Array(4);function Gs(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let c=zg[l];if(c===void 0&&(c=new Float32Array(l),zg[l]=c),t!==0){r.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function _n(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function vn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function iu(o,t){let i=Pg[t];i===void 0&&(i=new Int32Array(t),Pg[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function Q1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function J1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2fv(this.addr,t),vn(i,t)}}function $1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;o.uniform3fv(this.addr,t),vn(i,t)}}function tE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4fv(this.addr,t),vn(i,t)}}function eE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Ig.set(r),o.uniformMatrix2fv(this.addr,!1,Ig),vn(i,r)}}function nE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Fg.set(r),o.uniformMatrix3fv(this.addr,!1,Fg),vn(i,r)}}function iE(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(_n(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,r))return;Bg.set(r),o.uniformMatrix4fv(this.addr,!1,Bg),vn(i,r)}}function aE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function rE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2iv(this.addr,t),vn(i,t)}}function sE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3iv(this.addr,t),vn(i,t)}}function oE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4iv(this.addr,t),vn(i,t)}}function lE(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function cE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;o.uniform2uiv(this.addr,t),vn(i,t)}}function uE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;o.uniform3uiv(this.addr,t),vn(i,t)}}function fE(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;o.uniform4uiv(this.addr,t),vn(i,t)}}function dE(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Og.compareFunction=f_,c=Og):c=w_,i.setTexture2D(t||c,l)}function hE(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||U_,l)}function pE(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||L_,l)}function mE(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||D_,l)}function xE(o){switch(o){case 5126:return Q1;case 35664:return J1;case 35665:return $1;case 35666:return tE;case 35674:return eE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return aE;case 35667:case 35671:return rE;case 35668:case 35672:return sE;case 35669:case 35673:return oE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return dE;case 35679:case 36299:case 36307:return hE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}function gE(o,t){o.uniform1fv(this.addr,t)}function _E(o,t){const i=Gs(t,this.size,2);o.uniform2fv(this.addr,i)}function vE(o,t){const i=Gs(t,this.size,3);o.uniform3fv(this.addr,i)}function SE(o,t){const i=Gs(t,this.size,4);o.uniform4fv(this.addr,i)}function yE(o,t){const i=Gs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ME(o,t){const i=Gs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function bE(o,t){const i=Gs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function EE(o,t){o.uniform1iv(this.addr,t)}function TE(o,t){o.uniform2iv(this.addr,t)}function AE(o,t){o.uniform3iv(this.addr,t)}function RE(o,t){o.uniform4iv(this.addr,t)}function CE(o,t){o.uniform1uiv(this.addr,t)}function wE(o,t){o.uniform2uiv(this.addr,t)}function DE(o,t){o.uniform3uiv(this.addr,t)}function UE(o,t){o.uniform4uiv(this.addr,t)}function LE(o,t,i){const r=this.cache,l=t.length,c=iu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||w_,c[d])}function NE(o,t,i){const r=this.cache,l=t.length,c=iu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||U_,c[d])}function OE(o,t,i){const r=this.cache,l=t.length,c=iu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||L_,c[d])}function zE(o,t,i){const r=this.cache,l=t.length,c=iu(i,l);_n(r,c)||(o.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||D_,c[d])}function PE(o){switch(o){case 5126:return gE;case 35664:return _E;case 35665:return vE;case 35666:return SE;case 35674:return yE;case 35675:return ME;case 35676:return bE;case 5124:case 35670:return EE;case 35667:case 35671:return TE;case 35668:case 35672:return AE;case 35669:case 35673:return RE;case 5125:return CE;case 36294:return wE;case 36295:return DE;case 36296:return UE;case 35678:case 36198:case 36298:case 36306:case 35682:return LE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return zE}}class BE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=xE(i.type)}}class FE{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=PE(i.type)}}class IE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function Hg(o,t){o.seq.push(t),o.map[t.id]=t}function HE(o,t,i){const r=o.name,l=r.length;for(jd.lastIndex=0;;){const c=jd.exec(r),d=jd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Hg(i,p===void 0?new BE(h,o,t):new FE(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new IE(h),Hg(i,g)),i=g}}}class qc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);HE(c,d,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Gg(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const GE=37297;let VE=0;function XE(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Vg=new xe;function kE(o){Be._getMatrix(Vg,Be.workingColorSpace,o);const t=`mat3( ${Vg.elements.map(i=>i.toFixed(4))} )`;switch(Be.getTransfer(o)){case Yc:return[t,"LinearTransferOETF"];case qe:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Xg(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+XE(o.getShaderSource(t),h)}else return c}function WE(o,t){const i=kE(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function qE(o,t){let i;switch(t){case yy:i="Linear";break;case My:i="Reinhard";break;case by:i="Cineon";break;case Ey:i="ACESFilmic";break;case Ay:i="AgX";break;case Ry:i="Neutral";break;case Ty:i="Custom";break;default:ue("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Gc=new tt;function YE(){Be.getLuminanceCoefficients(Gc);const o=Gc.x.toFixed(4),t=Gc.y.toFixed(4),i=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function ZE(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function KE(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Wo(o){return o!==""}function kg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const QE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(o){return o.replace(QE,$E)}const JE=new Map;function $E(o,t){let i=_e[t];if(i===void 0){const r=JE.get(t);if(r!==void 0)i=_e[r],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Hh(i)}const tT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(o){return o.replace(tT,eT)}function eT(o,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Yg(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function nT(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===t_?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ty?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===fa&&(t="SHADOWMAP_TYPE_VSM"),t}function iT(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case zs:case Ps:t="ENVMAP_TYPE_CUBE";break;case tu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function aT(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function rT(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case e_:t="ENVMAP_BLENDING_MULTIPLY";break;case vy:t="ENVMAP_BLENDING_MIX";break;case Sy:t="ENVMAP_BLENDING_ADD";break}return t}function sT(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function oT(o,t,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=nT(i),p=iT(i),x=aT(i),g=rT(i),_=sT(i),y=jE(i),E=ZE(c),T=l.createProgram();let M,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Wo).join(`
`),v.length>0&&(v+=`
`)):(M=[Yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),v=[Yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==xa?"#define TONE_MAPPING":"",i.toneMapping!==xa?_e.tonemapping_pars_fragment:"",i.toneMapping!==xa?qE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,WE("linearToOutputTexel",i.outputColorSpace),YE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),d=Hh(d),d=kg(d,i),d=Wg(d,i),h=Hh(h),h=kg(h,i),h=Wg(h,i),d=qg(d),h=qg(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===Qx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Qx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=O+M+d,F=O+v+h,V=Gg(l,l.VERTEX_SHADER,D),U=Gg(l,l.FRAGMENT_SHADER,F);l.attachShader(T,V),l.attachShader(T,U),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(G){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(T)||"",lt=l.getShaderInfoLog(V)||"",ht=l.getShaderInfoLog(U)||"",dt=K.trim(),B=lt.trim(),j=ht.trim();let W=!0,gt=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,V,U);else{const yt=Xg(l,V,"vertex"),z=Xg(l,U,"fragment");en("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+dt+`
`+yt+`
`+z)}else dt!==""?ue("WebGLProgram: Program Info Log:",dt):(B===""||j==="")&&(gt=!1);gt&&(G.diagnostics={runnable:W,programLog:dt,vertexShader:{log:B,prefix:M},fragmentShader:{log:j,prefix:v}})}l.deleteShader(V),l.deleteShader(U),k=new qc(l,T),w=KE(l,T)}let k;this.getUniforms=function(){return k===void 0&&P(this),k};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(T,GE)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=VE++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=U,this}let lT=0;class cT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new uT(t),i.set(t,r)),r}}class uT{constructor(t){this.id=lT++,this.code=t,this.usedTimes=0}}function fT(o,t,i,r,l,c,d){const h=new tp,m=new cT,p=new Set,x=[],g=l.logarithmicDepthBuffer,_=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,G,K,lt){const ht=K.fog,dt=lt.geometry,B=w.isMeshStandardMaterial?K.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||B),W=j&&j.mapping===tu?j.image.height:null,gt=E[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&ue("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const yt=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,z=yt!==void 0?yt.length:0;let at=0;dt.morphAttributes.position!==void 0&&(at=1),dt.morphAttributes.normal!==void 0&&(at=2),dt.morphAttributes.color!==void 0&&(at=3);let Et,Ct,zt,rt;if(gt){const Se=Oi[gt];Et=Se.vertexShader,Ct=Se.fragmentShader}else Et=w.vertexShader,Ct=w.fragmentShader,m.update(w),zt=m.getVertexShaderID(w),rt=m.getFragmentShaderID(w);const ut=o.getRenderTarget(),Ut=o.state.buffers.depth.getReversed(),Dt=lt.isInstancedMesh===!0,Ft=lt.isBatchedMesh===!0,ee=!!w.map,Ue=!!w.matcap,Yt=!!j,fe=!!w.aoMap,I=!!w.lightMap,ce=!!w.bumpMap,ae=!!w.normalMap,be=!!w.displacementMap,Ht=!!w.emissiveMap,Le=!!w.metalnessMap,jt=!!w.roughnessMap,oe=w.anisotropy>0,N=w.clearcoat>0,b=w.dispersion>0,Q=w.iridescence>0,_t=w.sheen>0,Mt=w.transmission>0,ft=oe&&!!w.anisotropyMap,Kt=N&&!!w.clearcoatMap,Lt=N&&!!w.clearcoatNormalMap,Jt=N&&!!w.clearcoatRoughnessMap,Wt=Q&&!!w.iridescenceMap,bt=Q&&!!w.iridescenceThicknessMap,At=_t&&!!w.sheenColorMap,Qt=_t&&!!w.sheenRoughnessMap,Gt=!!w.specularMap,Pt=!!w.specularColorMap,re=!!w.specularIntensityMap,L=Mt&&!!w.transmissionMap,mt=Mt&&!!w.thicknessMap,St=!!w.gradientMap,Tt=!!w.alphaMap,nt=w.alphaTest>0,ot=!!w.alphaHash,Rt=!!w.extensions;let qt=xa;w.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(qt=o.toneMapping);const ge={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:Et,fragmentShader:Ct,defines:w.defines,customVertexShaderID:zt,customFragmentShaderID:rt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Ft,batchingColor:Ft&&lt._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&lt.instanceColor!==null,instancingMorph:Dt&&lt.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Bs,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:Ue,envMap:Yt,envMapMode:Yt&&j.mapping,envMapCubeUVHeight:W,aoMap:fe,lightMap:I,bumpMap:ce,normalMap:ae,displacementMap:_&&be,emissiveMap:Ht,normalMapObjectSpace:ae&&w.normalMapType===Uy,normalMapTangentSpace:ae&&w.normalMapType===u_,metalnessMap:Le,roughnessMap:jt,anisotropy:oe,anisotropyMap:ft,clearcoat:N,clearcoatMap:Kt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Jt,dispersion:b,iridescence:Q,iridescenceMap:Wt,iridescenceThicknessMap:bt,sheen:_t,sheenColorMap:At,sheenRoughnessMap:Qt,specularMap:Gt,specularColorMap:Pt,specularIntensityMap:re,transmission:Mt,transmissionMap:L,thicknessMap:mt,gradientMap:St,opaque:w.transparent===!1&&w.blending===Us&&w.alphaToCoverage===!1,alphaMap:Tt,alphaTest:nt,alphaHash:ot,combine:w.combine,mapUv:ee&&T(w.map.channel),aoMapUv:fe&&T(w.aoMap.channel),lightMapUv:I&&T(w.lightMap.channel),bumpMapUv:ce&&T(w.bumpMap.channel),normalMapUv:ae&&T(w.normalMap.channel),displacementMapUv:be&&T(w.displacementMap.channel),emissiveMapUv:Ht&&T(w.emissiveMap.channel),metalnessMapUv:Le&&T(w.metalnessMap.channel),roughnessMapUv:jt&&T(w.roughnessMap.channel),anisotropyMapUv:ft&&T(w.anisotropyMap.channel),clearcoatMapUv:Kt&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&T(w.sheenRoughnessMap.channel),specularMapUv:Gt&&T(w.specularMap.channel),specularColorMapUv:Pt&&T(w.specularColorMap.channel),specularIntensityMapUv:re&&T(w.specularIntensityMap.channel),transmissionMapUv:L&&T(w.transmissionMap.channel),thicknessMapUv:mt&&T(w.thicknessMap.channel),alphaMapUv:Tt&&T(w.alphaMap.channel),vertexTangents:!!dt.attributes.tangent&&(ae||oe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!dt.attributes.uv&&(ee||Tt),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ut,skinning:lt.isSkinnedMesh===!0,morphTargets:dt.morphAttributes.position!==void 0,morphNormals:dt.morphAttributes.normal!==void 0,morphColors:dt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:qt,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&Be.getTransfer(w.map.colorSpace)===qe,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Be.getTransfer(w.emissiveMap.colorSpace)===qe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===da,flipSided:w.side===Yn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Rt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&w.extensions.multiDraw===!0||Ft)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ge.vertexUv1s=p.has(1),ge.vertexUv2s=p.has(2),ge.vertexUv3s=p.has(3),p.clear(),ge}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(O(C,w),D(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function O(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function D(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function F(w){const C=E[w.type];let G;if(C){const K=Oi[C];G=yM.clone(K.uniforms)}else G=w.uniforms;return G}function V(w,C){let G;for(let K=0,lt=x.length;K<lt;K++){const ht=x[K];if(ht.cacheKey===C){G=ht,++G.usedTimes;break}}return G===void 0&&(G=new oT(o,C,w,c),x.push(G)),G}function U(w){if(--w.usedTimes===0){const C=x.indexOf(w);x[C]=x[x.length-1],x.pop(),w.destroy()}}function P(w){m.remove(w)}function k(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:F,acquireProgram:V,releaseProgram:U,releaseShaderCache:P,programs:x,dispose:k}}function dT(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function hT(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function jg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Zg(){const o=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function d(g,_,y,E,T,M){let v=o[t];return v===void 0?(v={id:g.id,object:g,geometry:_,material:y,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},o[t]=v):(v.id=g.id,v.object=g,v.geometry=_,v.material=y,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=T,v.group=M),t++,v}function h(g,_,y,E,T,M){const v=d(g,_,y,E,T,M);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,_,y,E,T,M){const v=d(g,_,y,E,T,M);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,_){i.length>1&&i.sort(g||hT),r.length>1&&r.sort(_||jg),l.length>1&&l.sort(_||jg)}function x(){for(let g=t,_=o.length;g<_;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function pT(){let o=new WeakMap;function t(r,l){const c=o.get(r);let d;return c===void 0?(d=new Zg,o.set(r,[d])):l>=c.length?(d=new Zg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function mT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new De};break;case"SpotLight":i={position:new tt,direction:new tt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return o[t.id]=i,i}}}function xT(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let gT=0;function _T(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function vT(o){const t=new mT,i=xT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new tt);const l=new tt,c=new tn,d=new tn;function h(p){let x=0,g=0,_=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,E=0,T=0,M=0,v=0,O=0,D=0,F=0,V=0,U=0,P=0;p.sort(_T);for(let w=0,C=p.length;w<C;w++){const G=p[w],K=G.color,lt=G.intensity,ht=G.distance,dt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)x+=K.r*lt,g+=K.g*lt,_+=K.b*lt;else if(G.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(G.sh.coefficients[B],lt);P++}else if(G.isDirectionalLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const j=G.shadow,W=i.get(G);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.directionalShadow[y]=W,r.directionalShadowMap[y]=dt,r.directionalShadowMatrix[y]=G.shadow.matrix,O++}r.directional[y]=B,y++}else if(G.isSpotLight){const B=t.get(G);B.position.setFromMatrixPosition(G.matrixWorld),B.color.copy(K).multiplyScalar(lt),B.distance=ht,B.coneCos=Math.cos(G.angle),B.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),B.decay=G.decay,r.spot[T]=B;const j=G.shadow;if(G.map&&(r.spotLightMap[V]=G.map,V++,j.updateMatrices(G),G.castShadow&&U++),r.spotLightMatrix[T]=j.matrix,G.castShadow){const W=i.get(G);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,r.spotShadow[T]=W,r.spotShadowMap[T]=dt,F++}T++}else if(G.isRectAreaLight){const B=t.get(G);B.color.copy(K).multiplyScalar(lt),B.halfWidth.set(G.width*.5,0,0),B.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=B,M++}else if(G.isPointLight){const B=t.get(G);if(B.color.copy(G.color).multiplyScalar(G.intensity),B.distance=G.distance,B.decay=G.decay,G.castShadow){const j=G.shadow,W=i.get(G);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,r.pointShadow[E]=W,r.pointShadowMap[E]=dt,r.pointShadowMatrix[E]=G.shadow.matrix,D++}r.point[E]=B,E++}else if(G.isHemisphereLight){const B=t.get(G);B.skyColor.copy(G.color).multiplyScalar(lt),B.groundColor.copy(G.groundColor).multiplyScalar(lt),r.hemi[v]=B,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=g,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==y||k.pointLength!==E||k.spotLength!==T||k.rectAreaLength!==M||k.hemiLength!==v||k.numDirectionalShadows!==O||k.numPointShadows!==D||k.numSpotShadows!==F||k.numSpotMaps!==V||k.numLightProbes!==P)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=M,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=F+V-U,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=P,k.directionalLength=y,k.pointLength=E,k.spotLength=T,k.rectAreaLength=M,k.hemiLength=v,k.numDirectionalShadows=O,k.numPointShadows=D,k.numSpotShadows=F,k.numSpotMaps=V,k.numLightProbes=P,r.version=gT++)}function m(p,x){let g=0,_=0,y=0,E=0,T=0;const M=x.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const D=p[v];if(D.isDirectionalLight){const F=r.directional[g];F.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),g++}else if(D.isSpotLight){const F=r.spot[y];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(M),F.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(M),y++}else if(D.isRectAreaLight){const F=r.rectArea[E];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(M),d.identity(),c.copy(D.matrixWorld),c.premultiply(M),d.extractRotation(c),F.halfWidth.set(D.width*.5,0,0),F.halfHeight.set(0,D.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),E++}else if(D.isPointLight){const F=r.point[_];F.position.setFromMatrixPosition(D.matrixWorld),F.position.applyMatrix4(M),_++}else if(D.isHemisphereLight){const F=r.hemi[T];F.direction.setFromMatrixPosition(D.matrixWorld),F.direction.transformDirection(M),T++}}}return{setup:h,setupView:m,state:r}}function Kg(o){const t=new vT(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function c(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function ST(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Kg(o),t.set(l,[h])):c>=d.length?(h=new Kg(o),d.push(h)):h=d[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const yT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MT=`uniform sampler2D shadow_pass;
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
}`;function bT(o,t,i){let r=new ep;const l=new ve,c=new ve,d=new rn,h=new IM({depthPacking:Dy}),m=new HM,p={},x=i.maxTextureSize,g={[er]:Yn,[Yn]:er,[da]:da},_=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:yT,fragmentShader:MT}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const E=new oi;E.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new va(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t_;let v=this.type;this.render=function(U,P,k){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),K=o.state;K.setBlending(ma),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const lt=v!==fa&&this.type===fa,ht=v===fa&&this.type!==fa;for(let dt=0,B=U.length;dt<B;dt++){const j=U[dt],W=j.shadow;if(W===void 0){ue("WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const gt=W.getFrameExtents();if(l.multiply(gt),c.copy(W.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/gt.x),l.x=c.x*gt.x,W.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/gt.y),l.y=c.y*gt.y,W.mapSize.y=c.y)),W.map===null||lt===!0||ht===!0){const z=this.type!==fa?{minFilter:si,magFilter:si}:{};W.map!==null&&W.map.dispose(),W.map=new Ur(l.x,l.y,z),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const yt=W.getViewportCount();for(let z=0;z<yt;z++){const at=W.getViewport(z);d.set(c.x*at.x,c.y*at.y,c.x*at.z,c.y*at.w),K.viewport(d),W.updateMatrices(j,z),r=W.getFrustum(),F(P,k,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===fa&&O(W,k),W.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,G)};function O(U,P){const k=t.update(T);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Ur(l.x,l.y)),_.uniforms.shadow_pass.value=U.map.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(P,null,k,_,T,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(P,null,k,y,T,null)}function D(U,P,k,w){let C=null;const G=k.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(G!==void 0)C=G;else if(C=k.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const K=C.uuid,lt=P.uuid;let ht=p[K];ht===void 0&&(ht={},p[K]=ht);let dt=ht[lt];dt===void 0&&(dt=C.clone(),ht[lt]=dt,P.addEventListener("dispose",V)),C=dt}if(C.visible=P.visible,C.wireframe=P.wireframe,w===fa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:g[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,k.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const K=o.properties.get(C);K.light=k}return C}function F(U,P,k,w,C){if(U.visible===!1)return;if(U.layers.test(P.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===fa)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,U.matrixWorld);const lt=t.update(U),ht=U.material;if(Array.isArray(ht)){const dt=lt.groups;for(let B=0,j=dt.length;B<j;B++){const W=dt[B],gt=ht[W.materialIndex];if(gt&&gt.visible){const yt=D(U,gt,w,C);U.onBeforeShadow(o,U,P,k,lt,yt,W),o.renderBufferDirect(k,null,lt,yt,U,W),U.onAfterShadow(o,U,P,k,lt,yt,W)}}}else if(ht.visible){const dt=D(U,ht,w,C);U.onBeforeShadow(o,U,P,k,lt,dt,null),o.renderBufferDirect(k,null,lt,dt,U,null),U.onAfterShadow(o,U,P,k,lt,dt,null)}}const K=U.children;for(let lt=0,ht=K.length;lt<ht;lt++)F(K[lt],P,k,w,C)}function V(U){U.target.removeEventListener("dispose",V);for(const k in p){const w=p[k],C=U.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const ET={[$d]:th,[eh]:ah,[nh]:rh,[Os]:ih,[th]:$d,[ah]:eh,[rh]:nh,[ih]:Os};function TT(o,t){function i(){let L=!1;const mt=new rn;let St=null;const Tt=new rn(0,0,0,0);return{setMask:function(nt){St!==nt&&!L&&(o.colorMask(nt,nt,nt,nt),St=nt)},setLocked:function(nt){L=nt},setClear:function(nt,ot,Rt,qt,ge){ge===!0&&(nt*=qt,ot*=qt,Rt*=qt),mt.set(nt,ot,Rt,qt),Tt.equals(mt)===!1&&(o.clearColor(nt,ot,Rt,qt),Tt.copy(mt))},reset:function(){L=!1,St=null,Tt.set(-1,0,0,0)}}}function r(){let L=!1,mt=!1,St=null,Tt=null,nt=null;return{setReversed:function(ot){if(mt!==ot){const Rt=t.get("EXT_clip_control");ot?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),mt=ot;const qt=nt;nt=null,this.setClear(qt)}},getReversed:function(){return mt},setTest:function(ot){ot?ut(o.DEPTH_TEST):Ut(o.DEPTH_TEST)},setMask:function(ot){St!==ot&&!L&&(o.depthMask(ot),St=ot)},setFunc:function(ot){if(mt&&(ot=ET[ot]),Tt!==ot){switch(ot){case $d:o.depthFunc(o.NEVER);break;case th:o.depthFunc(o.ALWAYS);break;case eh:o.depthFunc(o.LESS);break;case Os:o.depthFunc(o.LEQUAL);break;case nh:o.depthFunc(o.EQUAL);break;case ih:o.depthFunc(o.GEQUAL);break;case ah:o.depthFunc(o.GREATER);break;case rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Tt=ot}},setLocked:function(ot){L=ot},setClear:function(ot){nt!==ot&&(mt&&(ot=1-ot),o.clearDepth(ot),nt=ot)},reset:function(){L=!1,St=null,Tt=null,nt=null,mt=!1}}}function l(){let L=!1,mt=null,St=null,Tt=null,nt=null,ot=null,Rt=null,qt=null,ge=null;return{setTest:function(Se){L||(Se?ut(o.STENCIL_TEST):Ut(o.STENCIL_TEST))},setMask:function(Se){mt!==Se&&!L&&(o.stencilMask(Se),mt=Se)},setFunc:function(Se,sn,Sn){(St!==Se||Tt!==sn||nt!==Sn)&&(o.stencilFunc(Se,sn,Sn),St=Se,Tt=sn,nt=Sn)},setOp:function(Se,sn,Sn){(ot!==Se||Rt!==sn||qt!==Sn)&&(o.stencilOp(Se,sn,Sn),ot=Se,Rt=sn,qt=Sn)},setLocked:function(Se){L=Se},setClear:function(Se){ge!==Se&&(o.clearStencil(Se),ge=Se)},reset:function(){L=!1,mt=null,St=null,Tt=null,nt=null,ot=null,Rt=null,qt=null,ge=null}}}const c=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},_=new WeakMap,y=[],E=null,T=!1,M=null,v=null,O=null,D=null,F=null,V=null,U=null,P=new De(0,0,0),k=0,w=!1,C=null,G=null,K=null,lt=null,ht=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=j>=2);let gt=null,yt={};const z=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),Et=new rn().fromArray(z),Ct=new rn().fromArray(at);function zt(L,mt,St,Tt){const nt=new Uint8Array(4),ot=o.createTexture();o.bindTexture(L,ot),o.texParameteri(L,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(L,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Rt=0;Rt<St;Rt++)L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY?o.texImage3D(mt,0,o.RGBA,1,1,Tt,0,o.RGBA,o.UNSIGNED_BYTE,nt):o.texImage2D(mt+Rt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,nt);return ot}const rt={};rt[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),rt[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),rt[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ut(o.DEPTH_TEST),d.setFunc(Os),ce(!1),ae(Yx),ut(o.CULL_FACE),fe(ma);function ut(L){x[L]!==!0&&(o.enable(L),x[L]=!0)}function Ut(L){x[L]!==!1&&(o.disable(L),x[L]=!1)}function Dt(L,mt){return g[L]!==mt?(o.bindFramebuffer(L,mt),g[L]=mt,L===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=mt),L===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=mt),!0):!1}function Ft(L,mt){let St=y,Tt=!1;if(L){St=_.get(mt),St===void 0&&(St=[],_.set(mt,St));const nt=L.textures;if(St.length!==nt.length||St[0]!==o.COLOR_ATTACHMENT0){for(let ot=0,Rt=nt.length;ot<Rt;ot++)St[ot]=o.COLOR_ATTACHMENT0+ot;St.length=nt.length,Tt=!0}}else St[0]!==o.BACK&&(St[0]=o.BACK,Tt=!0);Tt&&o.drawBuffers(St)}function ee(L){return E!==L?(o.useProgram(L),E=L,!0):!1}const Ue={[Rr]:o.FUNC_ADD,[ny]:o.FUNC_SUBTRACT,[iy]:o.FUNC_REVERSE_SUBTRACT};Ue[ay]=o.MIN,Ue[ry]=o.MAX;const Yt={[sy]:o.ZERO,[oy]:o.ONE,[ly]:o.SRC_COLOR,[Qd]:o.SRC_ALPHA,[py]:o.SRC_ALPHA_SATURATE,[dy]:o.DST_COLOR,[uy]:o.DST_ALPHA,[cy]:o.ONE_MINUS_SRC_COLOR,[Jd]:o.ONE_MINUS_SRC_ALPHA,[hy]:o.ONE_MINUS_DST_COLOR,[fy]:o.ONE_MINUS_DST_ALPHA,[my]:o.CONSTANT_COLOR,[xy]:o.ONE_MINUS_CONSTANT_COLOR,[gy]:o.CONSTANT_ALPHA,[_y]:o.ONE_MINUS_CONSTANT_ALPHA};function fe(L,mt,St,Tt,nt,ot,Rt,qt,ge,Se){if(L===ma){T===!0&&(Ut(o.BLEND),T=!1);return}if(T===!1&&(ut(o.BLEND),T=!0),L!==ey){if(L!==M||Se!==w){if((v!==Rr||F!==Rr)&&(o.blendEquation(o.FUNC_ADD),v=Rr,F=Rr),Se)switch(L){case Us:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kd:o.blendFunc(o.ONE,o.ONE);break;case jx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Zx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:en("WebGLState: Invalid blending: ",L);break}else switch(L){case Us:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Kd:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case jx:en("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zx:en("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:en("WebGLState: Invalid blending: ",L);break}O=null,D=null,V=null,U=null,P.set(0,0,0),k=0,M=L,w=Se}return}nt=nt||mt,ot=ot||St,Rt=Rt||Tt,(mt!==v||nt!==F)&&(o.blendEquationSeparate(Ue[mt],Ue[nt]),v=mt,F=nt),(St!==O||Tt!==D||ot!==V||Rt!==U)&&(o.blendFuncSeparate(Yt[St],Yt[Tt],Yt[ot],Yt[Rt]),O=St,D=Tt,V=ot,U=Rt),(qt.equals(P)===!1||ge!==k)&&(o.blendColor(qt.r,qt.g,qt.b,ge),P.copy(qt),k=ge),M=L,w=!1}function I(L,mt){L.side===da?Ut(o.CULL_FACE):ut(o.CULL_FACE);let St=L.side===Yn;mt&&(St=!St),ce(St),L.blending===Us&&L.transparent===!1?fe(ma):fe(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),d.setFunc(L.depthFunc),d.setTest(L.depthTest),d.setMask(L.depthWrite),c.setMask(L.colorWrite);const Tt=L.stencilWrite;h.setTest(Tt),Tt&&(h.setMask(L.stencilWriteMask),h.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),h.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ht(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Ut(o.SAMPLE_ALPHA_TO_COVERAGE)}function ce(L){C!==L&&(L?o.frontFace(o.CW):o.frontFace(o.CCW),C=L)}function ae(L){L!==JS?(ut(o.CULL_FACE),L!==G&&(L===Yx?o.cullFace(o.BACK):L===$S?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ut(o.CULL_FACE),G=L}function be(L){L!==K&&(B&&o.lineWidth(L),K=L)}function Ht(L,mt,St){L?(ut(o.POLYGON_OFFSET_FILL),(lt!==mt||ht!==St)&&(o.polygonOffset(mt,St),lt=mt,ht=St)):Ut(o.POLYGON_OFFSET_FILL)}function Le(L){L?ut(o.SCISSOR_TEST):Ut(o.SCISSOR_TEST)}function jt(L){L===void 0&&(L=o.TEXTURE0+dt-1),gt!==L&&(o.activeTexture(L),gt=L)}function oe(L,mt,St){St===void 0&&(gt===null?St=o.TEXTURE0+dt-1:St=gt);let Tt=yt[St];Tt===void 0&&(Tt={type:void 0,texture:void 0},yt[St]=Tt),(Tt.type!==L||Tt.texture!==mt)&&(gt!==St&&(o.activeTexture(St),gt=St),o.bindTexture(L,mt||rt[L]),Tt.type=L,Tt.texture=mt)}function N(){const L=yt[gt];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Q(){try{o.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function _t(){try{o.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Kt(){try{o.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Lt(){try{o.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Jt(){try{o.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Wt(){try{o.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function bt(){try{o.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function At(L){Et.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),Et.copy(L))}function Qt(L){Ct.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),Ct.copy(L))}function Gt(L,mt){let St=p.get(mt);St===void 0&&(St=new WeakMap,p.set(mt,St));let Tt=St.get(L);Tt===void 0&&(Tt=o.getUniformBlockIndex(mt,L.name),St.set(L,Tt))}function Pt(L,mt){const Tt=p.get(mt).get(L);m.get(mt)!==Tt&&(o.uniformBlockBinding(mt,Tt,L.__bindingPointIndex),m.set(mt,Tt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},gt=null,yt={},g={},_=new WeakMap,y=[],E=null,T=!1,M=null,v=null,O=null,D=null,F=null,V=null,U=null,P=new De(0,0,0),k=0,w=!1,C=null,G=null,K=null,lt=null,ht=null,Et.set(0,0,o.canvas.width,o.canvas.height),Ct.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ut,disable:Ut,bindFramebuffer:Dt,drawBuffers:Ft,useProgram:ee,setBlending:fe,setMaterial:I,setFlipSided:ce,setCullFace:ae,setLineWidth:be,setPolygonOffset:Ht,setScissorTest:Le,activeTexture:jt,bindTexture:oe,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:Q,texImage2D:Wt,texImage3D:bt,updateUBOMapping:Gt,uniformBlockBinding:Pt,texStorage2D:Lt,texStorage3D:Jt,texSubImage2D:_t,texSubImage3D:Mt,compressedTexSubImage2D:ft,compressedTexSubImage3D:Kt,scissor:At,viewport:Qt,reset:re}}function AT(o,t,i,r,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ve,x=new WeakMap;let g;const _=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return y?new OffscreenCanvas(N,b):Zc("canvas")}function T(N,b,Q){let _t=1;const Mt=oe(N);if((Mt.width>Q||Mt.height>Q)&&(_t=Q/Math.max(Mt.width,Mt.height)),_t<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(_t*Mt.width),Kt=Math.floor(_t*Mt.height);g===void 0&&(g=E(ft,Kt));const Lt=b?E(ft,Kt):g;return Lt.width=ft,Lt.height=Kt,Lt.getContext("2d").drawImage(N,0,0,ft,Kt),ue("WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ft+"x"+Kt+")."),Lt}else return"data"in N&&ue("WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),N;return N}function M(N){return N.generateMipmaps}function v(N){o.generateMipmap(N)}function O(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(N,b,Q,_t,Mt=!1){if(N!==null){if(o[N]!==void 0)return o[N];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=b;if(b===o.RED&&(Q===o.FLOAT&&(ft=o.R32F),Q===o.HALF_FLOAT&&(ft=o.R16F),Q===o.UNSIGNED_BYTE&&(ft=o.R8)),b===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.R8UI),Q===o.UNSIGNED_SHORT&&(ft=o.R16UI),Q===o.UNSIGNED_INT&&(ft=o.R32UI),Q===o.BYTE&&(ft=o.R8I),Q===o.SHORT&&(ft=o.R16I),Q===o.INT&&(ft=o.R32I)),b===o.RG&&(Q===o.FLOAT&&(ft=o.RG32F),Q===o.HALF_FLOAT&&(ft=o.RG16F),Q===o.UNSIGNED_BYTE&&(ft=o.RG8)),b===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RG16UI),Q===o.UNSIGNED_INT&&(ft=o.RG32UI),Q===o.BYTE&&(ft=o.RG8I),Q===o.SHORT&&(ft=o.RG16I),Q===o.INT&&(ft=o.RG32I)),b===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),Q===o.UNSIGNED_INT&&(ft=o.RGB32UI),Q===o.BYTE&&(ft=o.RGB8I),Q===o.SHORT&&(ft=o.RGB16I),Q===o.INT&&(ft=o.RGB32I)),b===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ft=o.RGBA32UI),Q===o.BYTE&&(ft=o.RGBA8I),Q===o.SHORT&&(ft=o.RGBA16I),Q===o.INT&&(ft=o.RGBA32I)),b===o.RGB&&(Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),b===o.RGBA){const Kt=Mt?Yc:Be.getTransfer(_t);Q===o.FLOAT&&(ft=o.RGBA32F),Q===o.HALF_FLOAT&&(ft=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ft=Kt===qe?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function F(N,b){let Q;return N?b===null||b===Dr||b===jo?Q=o.DEPTH24_STENCIL8:b===pa?Q=o.DEPTH32F_STENCIL8:b===Yo&&(Q=o.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Dr||b===jo?Q=o.DEPTH_COMPONENT24:b===pa?Q=o.DEPTH_COMPONENT32F:b===Yo&&(Q=o.DEPTH_COMPONENT16),Q}function V(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==si&&N.minFilter!==_i?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function U(N){const b=N.target;b.removeEventListener("dispose",U),k(b),b.isVideoTexture&&x.delete(b)}function P(N){const b=N.target;b.removeEventListener("dispose",P),C(b)}function k(N){const b=r.get(N);if(b.__webglInit===void 0)return;const Q=N.source,_t=_.get(Q);if(_t){const Mt=_t[b.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&w(N),Object.keys(_t).length===0&&_.delete(Q)}r.remove(N)}function w(N){const b=r.get(N);o.deleteTexture(b.__webglTexture);const Q=N.source,_t=_.get(Q);delete _t[b.__cacheKey],d.memory.textures--}function C(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(b.__webglFramebuffer[_t]))for(let Mt=0;Mt<b.__webglFramebuffer[_t].length;Mt++)o.deleteFramebuffer(b.__webglFramebuffer[_t][Mt]);else o.deleteFramebuffer(b.__webglFramebuffer[_t]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[_t])}else{if(Array.isArray(b.__webglFramebuffer))for(let _t=0;_t<b.__webglFramebuffer.length;_t++)o.deleteFramebuffer(b.__webglFramebuffer[_t]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let _t=0;_t<b.__webglColorRenderbuffer.length;_t++)b.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[_t]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Q=N.textures;for(let _t=0,Mt=Q.length;_t<Mt;_t++){const ft=r.get(Q[_t]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),d.memory.textures--),r.remove(Q[_t])}r.remove(N)}let G=0;function K(){G=0}function lt(){const N=G;return N>=l.maxTextures&&ue("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),G+=1,N}function ht(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function dt(N,b){const Q=r.get(N);if(N.isVideoTexture&&Le(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){const _t=N.image;if(_t===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Q,N,b);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+b)}function B(N,b){const Q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){rt(Q,N,b);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+b)}function j(N,b){const Q=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){rt(Q,N,b);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+b)}function W(N,b){const Q=r.get(N);if(N.version>0&&Q.__version!==N.version){ut(Q,N,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+b)}const gt={[lh]:o.REPEAT,[ha]:o.CLAMP_TO_EDGE,[ch]:o.MIRRORED_REPEAT},yt={[si]:o.NEAREST,[Cy]:o.NEAREST_MIPMAP_NEAREST,[hc]:o.NEAREST_MIPMAP_LINEAR,[_i]:o.LINEAR,[gd]:o.LINEAR_MIPMAP_NEAREST,[wr]:o.LINEAR_MIPMAP_LINEAR},z={[Ly]:o.NEVER,[Fy]:o.ALWAYS,[Ny]:o.LESS,[f_]:o.LEQUAL,[Oy]:o.EQUAL,[By]:o.GEQUAL,[zy]:o.GREATER,[Py]:o.NOTEQUAL};function at(N,b){if(b.type===pa&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===_i||b.magFilter===gd||b.magFilter===hc||b.magFilter===wr||b.minFilter===_i||b.minFilter===gd||b.minFilter===hc||b.minFilter===wr)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,gt[b.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,gt[b.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,gt[b.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,yt[b.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===si||b.minFilter!==hc&&b.minFilter!==wr||b.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const Q=t.get("EXT_texture_filter_anisotropic");o.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function Et(N,b){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",U));const _t=b.source;let Mt=_.get(_t);Mt===void 0&&(Mt={},_.set(_t,Mt));const ft=ht(b);if(ft!==N.__cacheKey){Mt[ft]===void 0&&(Mt[ft]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Mt[ft].usedTimes++;const Kt=Mt[N.__cacheKey];Kt!==void 0&&(Mt[N.__cacheKey].usedTimes--,Kt.usedTimes===0&&w(b)),N.__cacheKey=ft,N.__webglTexture=Mt[ft].texture}return Q}function Ct(N,b,Q){return Math.floor(Math.floor(N/Q)/b)}function zt(N,b,Q,_t){const ft=N.updateRanges;if(ft.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,Q,_t,b.data);else{ft.sort((bt,At)=>bt.start-At.start);let Kt=0;for(let bt=1;bt<ft.length;bt++){const At=ft[Kt],Qt=ft[bt],Gt=At.start+At.count,Pt=Ct(Qt.start,b.width,4),re=Ct(At.start,b.width,4);Qt.start<=Gt+1&&Pt===re&&Ct(Qt.start+Qt.count-1,b.width,4)===Pt?At.count=Math.max(At.count,Qt.start+Qt.count-At.start):(++Kt,ft[Kt]=Qt)}ft.length=Kt+1;const Lt=o.getParameter(o.UNPACK_ROW_LENGTH),Jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let bt=0,At=ft.length;bt<At;bt++){const Qt=ft[bt],Gt=Math.floor(Qt.start/4),Pt=Math.ceil(Qt.count/4),re=Gt%b.width,L=Math.floor(Gt/b.width),mt=Pt,St=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,L),i.texSubImage2D(o.TEXTURE_2D,0,re,L,mt,St,Q,_t,b.data)}N.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function rt(N,b,Q){let _t=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=o.TEXTURE_3D);const Mt=Et(N,b),ft=b.source;i.bindTexture(_t,N.__webglTexture,o.TEXTURE0+Q);const Kt=r.get(ft);if(ft.version!==Kt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+Q);const Lt=Be.getPrimaries(Be.workingColorSpace),Jt=b.colorSpace===$a?null:Be.getPrimaries(b.colorSpace),Wt=b.colorSpace===$a||Lt===Jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let bt=T(b.image,!1,l.maxTextureSize);bt=jt(b,bt);const At=c.convert(b.format,b.colorSpace),Qt=c.convert(b.type);let Gt=D(b.internalFormat,At,Qt,b.colorSpace,b.isVideoTexture);at(_t,b);let Pt;const re=b.mipmaps,L=b.isVideoTexture!==!0,mt=Kt.__version===void 0||Mt===!0,St=ft.dataReady,Tt=V(b,bt);if(b.isDepthTexture)Gt=F(b.format===Ko,b.type),mt&&(L?i.texStorage2D(o.TEXTURE_2D,1,Gt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,bt.width,bt.height,0,At,Qt,null));else if(b.isDataTexture)if(re.length>0){L&&mt&&i.texStorage2D(o.TEXTURE_2D,Tt,Gt,re[0].width,re[0].height);for(let nt=0,ot=re.length;nt<ot;nt++)Pt=re[nt],L?St&&i.texSubImage2D(o.TEXTURE_2D,nt,0,0,Pt.width,Pt.height,At,Qt,Pt.data):i.texImage2D(o.TEXTURE_2D,nt,Gt,Pt.width,Pt.height,0,At,Qt,Pt.data);b.generateMipmaps=!1}else L?(mt&&i.texStorage2D(o.TEXTURE_2D,Tt,Gt,bt.width,bt.height),St&&zt(b,bt,At,Qt)):i.texImage2D(o.TEXTURE_2D,0,Gt,bt.width,bt.height,0,At,Qt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){L&&mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Gt,re[0].width,re[0].height,bt.depth);for(let nt=0,ot=re.length;nt<ot;nt++)if(Pt=re[nt],b.format!==Ri)if(At!==null)if(L){if(St)if(b.layerUpdates.size>0){const Rt=Rg(Pt.width,Pt.height,b.format,b.type);for(const qt of b.layerUpdates){const ge=Pt.data.subarray(qt*Rt/Pt.data.BYTES_PER_ELEMENT,(qt+1)*Rt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,nt,0,0,qt,Pt.width,Pt.height,1,At,ge)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,nt,0,0,0,Pt.width,Pt.height,bt.depth,At,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,nt,Gt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?St&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,nt,0,0,0,Pt.width,Pt.height,bt.depth,At,Qt,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,nt,Gt,Pt.width,Pt.height,bt.depth,0,At,Qt,Pt.data)}else{L&&mt&&i.texStorage2D(o.TEXTURE_2D,Tt,Gt,re[0].width,re[0].height);for(let nt=0,ot=re.length;nt<ot;nt++)Pt=re[nt],b.format!==Ri?At!==null?L?St&&i.compressedTexSubImage2D(o.TEXTURE_2D,nt,0,0,Pt.width,Pt.height,At,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,nt,Gt,Pt.width,Pt.height,0,Pt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?St&&i.texSubImage2D(o.TEXTURE_2D,nt,0,0,Pt.width,Pt.height,At,Qt,Pt.data):i.texImage2D(o.TEXTURE_2D,nt,Gt,Pt.width,Pt.height,0,At,Qt,Pt.data)}else if(b.isDataArrayTexture)if(L){if(mt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Gt,bt.width,bt.height,bt.depth),St)if(b.layerUpdates.size>0){const nt=Rg(bt.width,bt.height,b.format,b.type);for(const ot of b.layerUpdates){const Rt=bt.data.subarray(ot*nt/bt.data.BYTES_PER_ELEMENT,(ot+1)*nt/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ot,bt.width,bt.height,1,At,Qt,Rt)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,At,Qt,bt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,bt.width,bt.height,bt.depth,0,At,Qt,bt.data);else if(b.isData3DTexture)L?(mt&&i.texStorage3D(o.TEXTURE_3D,Tt,Gt,bt.width,bt.height,bt.depth),St&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,At,Qt,bt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,bt.width,bt.height,bt.depth,0,At,Qt,bt.data);else if(b.isFramebufferTexture){if(mt)if(L)i.texStorage2D(o.TEXTURE_2D,Tt,Gt,bt.width,bt.height);else{let nt=bt.width,ot=bt.height;for(let Rt=0;Rt<Tt;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,Gt,nt,ot,0,At,Qt,null),nt>>=1,ot>>=1}}else if(re.length>0){if(L&&mt){const nt=oe(re[0]);i.texStorage2D(o.TEXTURE_2D,Tt,Gt,nt.width,nt.height)}for(let nt=0,ot=re.length;nt<ot;nt++)Pt=re[nt],L?St&&i.texSubImage2D(o.TEXTURE_2D,nt,0,0,At,Qt,Pt):i.texImage2D(o.TEXTURE_2D,nt,Gt,At,Qt,Pt);b.generateMipmaps=!1}else if(L){if(mt){const nt=oe(bt);i.texStorage2D(o.TEXTURE_2D,Tt,Gt,nt.width,nt.height)}St&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,At,Qt,bt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,At,Qt,bt);M(b)&&v(_t),Kt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ut(N,b,Q){if(b.image.length!==6)return;const _t=Et(N,b),Mt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+Q);const ft=r.get(Mt);if(Mt.version!==ft.__version||_t===!0){i.activeTexture(o.TEXTURE0+Q);const Kt=Be.getPrimaries(Be.workingColorSpace),Lt=b.colorSpace===$a?null:Be.getPrimaries(b.colorSpace),Jt=b.colorSpace===$a||Kt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const Wt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,At=[];for(let ot=0;ot<6;ot++)!Wt&&!bt?At[ot]=T(b.image[ot],!0,l.maxCubemapSize):At[ot]=bt?b.image[ot].image:b.image[ot],At[ot]=jt(b,At[ot]);const Qt=At[0],Gt=c.convert(b.format,b.colorSpace),Pt=c.convert(b.type),re=D(b.internalFormat,Gt,Pt,b.colorSpace),L=b.isVideoTexture!==!0,mt=ft.__version===void 0||_t===!0,St=Mt.dataReady;let Tt=V(b,Qt);at(o.TEXTURE_CUBE_MAP,b);let nt;if(Wt){L&&mt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Tt,re,Qt.width,Qt.height);for(let ot=0;ot<6;ot++){nt=At[ot].mipmaps;for(let Rt=0;Rt<nt.length;Rt++){const qt=nt[Rt];b.format!==Ri?Gt!==null?L?St&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,0,0,qt.width,qt.height,Gt,qt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,re,qt.width,qt.height,0,qt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,0,0,qt.width,qt.height,Gt,Pt,qt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt,re,qt.width,qt.height,0,Gt,Pt,qt.data)}}}else{if(nt=b.mipmaps,L&&mt){nt.length>0&&Tt++;const ot=oe(At[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Tt,re,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(bt){L?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,At[ot].width,At[ot].height,Gt,Pt,At[ot].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,re,At[ot].width,At[ot].height,0,Gt,Pt,At[ot].data);for(let Rt=0;Rt<nt.length;Rt++){const ge=nt[Rt].image[ot].image;L?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,0,0,ge.width,ge.height,Gt,Pt,ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,re,ge.width,ge.height,0,Gt,Pt,ge.data)}}else{L?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Gt,Pt,At[ot]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,re,Gt,Pt,At[ot]);for(let Rt=0;Rt<nt.length;Rt++){const qt=nt[Rt];L?St&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,0,0,Gt,Pt,qt.image[ot]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Rt+1,re,Gt,Pt,qt.image[ot])}}}M(b)&&v(o.TEXTURE_CUBE_MAP),ft.__version=Mt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Ut(N,b,Q,_t,Mt,ft){const Kt=c.convert(Q.format,Q.colorSpace),Lt=c.convert(Q.type),Jt=D(Q.internalFormat,Kt,Lt,Q.colorSpace),Wt=r.get(b),bt=r.get(Q);if(bt.__renderTarget=b,!Wt.__hasExternalTextures){const At=Math.max(1,b.width>>ft),Qt=Math.max(1,b.height>>ft);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ft,Jt,At,Qt,b.depth,0,Kt,Lt,null):i.texImage2D(Mt,ft,Jt,At,Qt,0,Kt,Lt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Ht(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Mt,bt.__webglTexture,0,be(b)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Mt,bt.__webglTexture,ft),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(N,b,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,N),b.depthBuffer){const _t=b.depthTexture,Mt=_t&&_t.isDepthTexture?_t.type:null,ft=F(b.stencilBuffer,Mt),Kt=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=be(b);Ht(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,ft,b.width,b.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,ft,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ft,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Kt,o.RENDERBUFFER,N)}else{const _t=b.textures;for(let Mt=0;Mt<_t.length;Mt++){const ft=_t[Mt],Kt=c.convert(ft.format,ft.colorSpace),Lt=c.convert(ft.type),Jt=D(ft.internalFormat,Kt,Lt,ft.colorSpace),Wt=be(b);Q&&Ht(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Jt,b.width,b.height):Ht(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Jt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Jt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ft(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=r.get(b.depthTexture);_t.__renderTarget=b,(!_t.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),dt(b.depthTexture,0);const Mt=_t.__webglTexture,ft=be(b);if(b.depthTexture.format===Zo)Ht(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(b.depthTexture.format===Ko)Ht(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function ee(N){const b=r.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const _t=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),_t){const Mt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,_t.removeEventListener("dispose",Mt)};_t.addEventListener("dispose",Mt),b.__depthDisposeCallback=Mt}b.__boundDepthTexture=_t}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const _t=N.texture.mipmaps;_t&&_t.length>0?Ft(b.__webglFramebuffer[0],N):Ft(b.__webglFramebuffer,N)}else if(Q){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]===void 0)b.__webglDepthbuffer[_t]=o.createRenderbuffer(),Dt(b.__webglDepthbuffer[_t],N,!1);else{const Mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ft)}}else{const _t=N.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),Dt(b.__webglDepthbuffer,N,!1);else{const Mt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ft)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(N,b,Q){const _t=r.get(N);b!==void 0&&Ut(_t.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&ee(N)}function Yt(N){const b=N.texture,Q=r.get(N),_t=r.get(b);N.addEventListener("dispose",P);const Mt=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Kt=Mt.length>1;if(Kt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=b.version,d.memory.textures++),ft){Q.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer[Lt]=[];for(let Jt=0;Jt<b.mipmaps.length;Jt++)Q.__webglFramebuffer[Lt][Jt]=o.createFramebuffer()}else Q.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)Q.__webglFramebuffer[Lt]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Kt)for(let Lt=0,Jt=Mt.length;Lt<Jt;Lt++){const Wt=r.get(Mt[Lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(N.samples>0&&Ht(N)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Lt=0;Lt<Mt.length;Lt++){const Jt=Mt[Lt];Q.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[Lt]);const Wt=c.convert(Jt.format,Jt.colorSpace),bt=c.convert(Jt.type),At=D(Jt.internalFormat,Wt,bt,Jt.colorSpace,N.isXRRenderTarget===!0),Qt=be(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,At,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,Q.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(Q.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),at(o.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Jt=0;Jt<b.mipmaps.length;Jt++)Ut(Q.__webglFramebuffer[Lt][Jt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Jt);else Ut(Q.__webglFramebuffer[Lt],N,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Lt=0,Jt=Mt.length;Lt<Jt;Lt++){const Wt=Mt[Lt],bt=r.get(Wt);let At=o.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(At=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,bt.__webglTexture),at(At,Wt),Ut(Q.__webglFramebuffer,N,Wt,o.COLOR_ATTACHMENT0+Lt,At,0),M(Wt)&&v(At)}i.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,_t.__webglTexture),at(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Jt=0;Jt<b.mipmaps.length;Jt++)Ut(Q.__webglFramebuffer[Jt],N,b,o.COLOR_ATTACHMENT0,Lt,Jt);else Ut(Q.__webglFramebuffer,N,b,o.COLOR_ATTACHMENT0,Lt,0);M(b)&&v(Lt),i.unbindTexture()}N.depthBuffer&&ee(N)}function fe(N){const b=N.textures;for(let Q=0,_t=b.length;Q<_t;Q++){const Mt=b[Q];if(M(Mt)){const ft=O(N),Kt=r.get(Mt).__webglTexture;i.bindTexture(ft,Kt),v(ft),i.unbindTexture()}}}const I=[],ce=[];function ae(N){if(N.samples>0){if(Ht(N)===!1){const b=N.textures,Q=N.width,_t=N.height;let Mt=o.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Kt=r.get(N),Lt=b.length>1;if(Lt)for(let Wt=0;Wt<b.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const Jt=N.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Wt=0;Wt<b.length;Wt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Wt]);const bt=r.get(b[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,Q,_t,0,0,Q,_t,Mt,o.NEAREST),m===!0&&(I.length=0,ce.length=0,I.push(o.COLOR_ATTACHMENT0+Wt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(I.push(ft),ce.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ce)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let Wt=0;Wt<b.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Wt]);const bt=r.get(b[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,bt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function be(N){return Math.min(l.maxSamples,N.samples)}function Ht(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Le(N){const b=d.render.frame;x.get(N)!==b&&(x.set(N,b),N.update())}function jt(N,b){const Q=N.colorSpace,_t=N.format,Mt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==Bs&&Q!==$a&&(Be.getTransfer(Q)===qe?(_t!==Ri||Mt!==Pi)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):en("WebGLTextures: Unsupported texture color space:",Q)),b}function oe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=K,this.setTexture2D=dt,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Ue,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Ut,this.useMultisampledRTT=Ht}function RT(o,t){function i(r,l=$a){let c;const d=Be.getTransfer(l);if(r===Pi)return o.UNSIGNED_BYTE;if(r===Wh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===qh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===r_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===s_)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===i_)return o.BYTE;if(r===a_)return o.SHORT;if(r===Yo)return o.UNSIGNED_SHORT;if(r===kh)return o.INT;if(r===Dr)return o.UNSIGNED_INT;if(r===pa)return o.FLOAT;if(r===Is)return o.HALF_FLOAT;if(r===o_)return o.ALPHA;if(r===l_)return o.RGB;if(r===Ri)return o.RGBA;if(r===Zo)return o.DEPTH_COMPONENT;if(r===Ko)return o.DEPTH_STENCIL;if(r===c_)return o.RED;if(r===Yh)return o.RED_INTEGER;if(r===jh)return o.RG;if(r===Zh)return o.RG_INTEGER;if(r===Kh)return o.RGBA_INTEGER;if(r===Vc||r===Xc||r===kc||r===Wc)if(d===qe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===uh||r===fh||r===dh||r===hh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===uh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ph||r===mh||r===xh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ph||r===mh)return d===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===xh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gh||r===_h||r===vh||r===Sh||r===yh||r===Mh||r===bh||r===Eh||r===Th||r===Ah||r===Rh||r===Ch||r===wh||r===Dh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_h)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===bh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Eh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Th)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Rh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ch)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Dh)return d===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uh||r===Lh||r===Nh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Uh)return d===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Lh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oh||r===zh||r===Ph||r===Bh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Oh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===zh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ph)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Bh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const CT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wT=`
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

}`;class DT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new T_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Sa({vertexShader:CT,fragmentShader:wT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new va(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UT extends Hs{constructor(t,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,_=null,y=null,E=null;const T=typeof XRWebGLBinding<"u",M=new DT,v={},O=i.getContextAttributes();let D=null,F=null;const V=[],U=[],P=new ve;let k=null;const w=new gi;w.viewport=new rn;const C=new gi;C.viewport=new rn;const G=[w,C],K=new ZM;let lt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let ut=V[rt];return ut===void 0&&(ut=new Fd,V[rt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(rt){let ut=V[rt];return ut===void 0&&(ut=new Fd,V[rt]=ut),ut.getGripSpace()},this.getHand=function(rt){let ut=V[rt];return ut===void 0&&(ut=new Fd,V[rt]=ut),ut.getHandSpace()};function dt(rt){const ut=U.indexOf(rt.inputSource);if(ut===-1)return;const Ut=V[ut];Ut!==void 0&&(Ut.update(rt.inputSource,rt.frame,p||d),Ut.dispatchEvent({type:rt.type,data:rt.inputSource}))}function B(){l.removeEventListener("select",dt),l.removeEventListener("selectstart",dt),l.removeEventListener("selectend",dt),l.removeEventListener("squeeze",dt),l.removeEventListener("squeezestart",dt),l.removeEventListener("squeezeend",dt),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",j);for(let rt=0;rt<V.length;rt++){const ut=U[rt];ut!==null&&(U[rt]=null,V[rt].disconnect(ut))}lt=null,ht=null,M.reset();for(const rt in v)delete v[rt];t.setRenderTarget(D),y=null,_=null,g=null,l=null,F=null,zt.stop(),r.isPresenting=!1,t.setPixelRatio(k),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,r.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){h=rt,r.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(rt){p=rt},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",dt),l.addEventListener("selectstart",dt),l.addEventListener("selectend",dt),l.addEventListener("squeeze",dt),l.addEventListener("squeezestart",dt),l.addEventListener("squeezeend",dt),l.addEventListener("end",B),l.addEventListener("inputsourceschange",j),O.xrCompatible!==!0&&await i.makeXRCompatible(),k=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ut=null,Dt=null,Ft=null;O.depth&&(Ft=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ut=O.stencil?Ko:Zo,Dt=O.stencil?jo:Dr);const ee={colorFormat:i.RGBA8,depthFormat:Ft,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(ee),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),F=new Ur(_.textureWidth,_.textureHeight,{format:Ri,type:Pi,depthTexture:new E_(_.textureWidth,_.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,Ut),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ut={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ut),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new Ur(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),zt.setContext(l),zt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function j(rt){for(let ut=0;ut<rt.removed.length;ut++){const Ut=rt.removed[ut],Dt=U.indexOf(Ut);Dt>=0&&(U[Dt]=null,V[Dt].disconnect(Ut))}for(let ut=0;ut<rt.added.length;ut++){const Ut=rt.added[ut];let Dt=U.indexOf(Ut);if(Dt===-1){for(let ee=0;ee<V.length;ee++)if(ee>=U.length){U.push(Ut),Dt=ee;break}else if(U[ee]===null){U[ee]=Ut,Dt=ee;break}if(Dt===-1)break}const Ft=V[Dt];Ft&&Ft.connect(Ut)}}const W=new tt,gt=new tt;function yt(rt,ut,Ut){W.setFromMatrixPosition(ut.matrixWorld),gt.setFromMatrixPosition(Ut.matrixWorld);const Dt=W.distanceTo(gt),Ft=ut.projectionMatrix.elements,ee=Ut.projectionMatrix.elements,Ue=Ft[14]/(Ft[10]-1),Yt=Ft[14]/(Ft[10]+1),fe=(Ft[9]+1)/Ft[5],I=(Ft[9]-1)/Ft[5],ce=(Ft[8]-1)/Ft[0],ae=(ee[8]+1)/ee[0],be=Ue*ce,Ht=Ue*ae,Le=Dt/(-ce+ae),jt=Le*-ce;if(ut.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(jt),rt.translateZ(Le),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Ft[10]===-1)rt.projectionMatrix.copy(ut.projectionMatrix),rt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const oe=Ue+Le,N=Yt+Le,b=be-jt,Q=Ht+(Dt-jt),_t=fe*Yt/N*oe,Mt=I*Yt/N*oe;rt.projectionMatrix.makePerspective(b,Q,_t,Mt,oe,N),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function z(rt,ut){ut===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(ut.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let ut=rt.near,Ut=rt.far;M.texture!==null&&(M.depthNear>0&&(ut=M.depthNear),M.depthFar>0&&(Ut=M.depthFar)),K.near=C.near=w.near=ut,K.far=C.far=w.far=Ut,(lt!==K.near||ht!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),lt=K.near,ht=K.far),K.layers.mask=rt.layers.mask|6,w.layers.mask=K.layers.mask&3,C.layers.mask=K.layers.mask&5;const Dt=rt.parent,Ft=K.cameras;z(K,Dt);for(let ee=0;ee<Ft.length;ee++)z(Ft[ee],Dt);Ft.length===2?yt(K,w,C):K.projectionMatrix.copy(w.projectionMatrix),at(rt,K,Dt)};function at(rt,ut,Ut){Ut===null?rt.matrix.copy(ut.matrixWorld):(rt.matrix.copy(Ut.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(ut.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(ut.projectionMatrix),rt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Jo*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(rt){m=rt,_!==null&&(_.fixedFoveation=rt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=rt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(rt){return v[rt]};let Et=null;function Ct(rt,ut){if(x=ut.getViewerPose(p||d),E=ut,x!==null){const Ut=x.views;y!==null&&(t.setRenderTargetFramebuffer(F,y.framebuffer),t.setRenderTarget(F));let Dt=!1;Ut.length!==K.cameras.length&&(K.cameras.length=0,Dt=!0);for(let Yt=0;Yt<Ut.length;Yt++){const fe=Ut[Yt];let I=null;if(y!==null)I=y.getViewport(fe);else{const ae=g.getViewSubImage(_,fe);I=ae.viewport,Yt===0&&(t.setRenderTargetTextures(F,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(F))}let ce=G[Yt];ce===void 0&&(ce=new gi,ce.layers.enable(Yt),ce.viewport=new rn,G[Yt]=ce),ce.matrix.fromArray(fe.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(fe.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(I.x,I.y,I.width,I.height),Yt===0&&(K.matrix.copy(ce.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Dt===!0&&K.cameras.push(ce)}const Ft=l.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const Yt=g.getDepthInformation(Ut[0]);Yt&&Yt.isValid&&Yt.texture&&M.init(Yt,l.renderState)}if(Ft&&Ft.includes("camera-access")&&T){t.state.unbindTexture(),g=r.getBinding();for(let Yt=0;Yt<Ut.length;Yt++){const fe=Ut[Yt].camera;if(fe){let I=v[fe];I||(I=new T_,v[fe]=I);const ce=g.getCameraImage(fe);I.sourceTexture=ce}}}}for(let Ut=0;Ut<V.length;Ut++){const Dt=U[Ut],Ft=V[Ut];Dt!==null&&Ft!==void 0&&Ft.update(Dt,ut,p||d)}Et&&Et(rt,ut),ut.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ut}),E=null}const zt=new C_;zt.setAnimationLoop(Ct),this.setAnimationLoop=function(rt){Et=rt},this.dispose=function(){}}}const Tr=new Bi,LT=new tn;function NT(o,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,__(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,O,D,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),x(M,v)):v.isMeshStandardMaterial?(c(M,v),_(M,v),v.isMeshPhysicalMaterial&&y(M,v,F)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),T(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(d(M,v),v.isLineDashedMaterial&&h(M,v)):v.isPointsMaterial?m(M,v,O,D):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Yn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Yn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const O=t.get(v),D=O.envMap,F=O.envMapRotation;D&&(M.envMap.value=D,Tr.copy(F),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),M.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(Tr)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function d(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function h(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,O,D){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*O,M.scale.value=D*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function x(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function _(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function y(M,v,O){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Yn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function T(M,v){const O=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function OT(o,t,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,D){const F=D.program;r.uniformBlockBinding(O,F)}function p(O,D){let F=l[O.id];F===void 0&&(E(O),F=x(O),l[O.id]=F,O.addEventListener("dispose",M));const V=D.program;r.updateUBOMapping(O,V);const U=t.render.frame;c[O.id]!==U&&(_(O),c[O.id]=U)}function x(O){const D=g();O.__bindingPointIndex=D;const F=o.createBuffer(),V=O.__size,U=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,V,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,F),F}function g(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return en("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(O){const D=l[O.id],F=O.uniforms,V=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let U=0,P=F.length;U<P;U++){const k=Array.isArray(F[U])?F[U]:[F[U]];for(let w=0,C=k.length;w<C;w++){const G=k[w];if(y(G,U,w,V)===!0){const K=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let ht=0;for(let dt=0;dt<lt.length;dt++){const B=lt[dt],j=T(B);typeof B=="number"||typeof B=="boolean"?(G.__data[0]=B,o.bufferSubData(o.UNIFORM_BUFFER,K+ht,G.__data)):B.isMatrix3?(G.__data[0]=B.elements[0],G.__data[1]=B.elements[1],G.__data[2]=B.elements[2],G.__data[3]=0,G.__data[4]=B.elements[3],G.__data[5]=B.elements[4],G.__data[6]=B.elements[5],G.__data[7]=0,G.__data[8]=B.elements[6],G.__data[9]=B.elements[7],G.__data[10]=B.elements[8],G.__data[11]=0):(B.toArray(G.__data,ht),ht+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,D,F,V){const U=O.value,P=D+"_"+F;if(V[P]===void 0)return typeof U=="number"||typeof U=="boolean"?V[P]=U:V[P]=U.clone(),!0;{const k=V[P];if(typeof U=="number"||typeof U=="boolean"){if(k!==U)return V[P]=U,!0}else if(k.equals(U)===!1)return k.copy(U),!0}return!1}function E(O){const D=O.uniforms;let F=0;const V=16;for(let P=0,k=D.length;P<k;P++){const w=Array.isArray(D[P])?D[P]:[D[P]];for(let C=0,G=w.length;C<G;C++){const K=w[C],lt=Array.isArray(K.value)?K.value:[K.value];for(let ht=0,dt=lt.length;ht<dt;ht++){const B=lt[ht],j=T(B),W=F%V,gt=W%j.boundary,yt=W+gt;F+=gt,yt!==0&&V-yt<j.storage&&(F+=V-yt),K.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=F,F+=j.storage}}}const U=F%V;return U>0&&(F+=V-U),O.__size=F,O.__cache={},this}function T(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ue("WebGLRenderer: Unsupported uniform value type.",O),D}function M(O){const D=O.target;D.removeEventListener("dispose",M);const F=d.indexOf(D.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}const zT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ua=null;function PT(){return ua===null&&(ua=new DM(zT,32,32,jh,Is),ua.minFilter=_i,ua.magFilter=_i,ua.wrapS=ha,ua.wrapT=ha,ua.generateMipmaps=!1,ua.needsUpdate=!0),ua}class BT{constructor(t={}){const{canvas:i=Iy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const E=new Set([Kh,Zh,Yh]),T=new Set([Pi,Dr,Yo,jo,Wh,qh]),M=new Uint32Array(4),v=new Int32Array(4);let O=null,D=null;const F=[],V=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let P=!1;this._outputColorSpace=qn;let k=0,w=0,C=null,G=-1,K=null;const lt=new rn,ht=new rn;let dt=null;const B=new De(0);let j=0,W=i.width,gt=i.height,yt=1,z=null,at=null;const Et=new rn(0,0,W,gt),Ct=new rn(0,0,W,gt);let zt=!1;const rt=new ep;let ut=!1,Ut=!1;const Dt=new tn,Ft=new tt,ee=new rn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Yt=!1;function fe(){return C===null?yt:1}let I=r;function ce(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xh}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",ot,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),I===null){const q="webgl2";if(I=ce(q,R),I===null)throw ce(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let ae,be,Ht,Le,jt,oe,N,b,Q,_t,Mt,ft,Kt,Lt,Jt,Wt,bt,At,Qt,Gt,Pt,re,L,mt;function St(){ae=new W1(I),ae.init(),re=new RT(I,ae),be=new P1(I,ae,t,re),Ht=new TT(I,ae),be.reversedDepthBuffer&&_&&Ht.buffers.depth.setReversed(!0),Le=new j1(I),jt=new dT,oe=new AT(I,ae,Ht,jt,be,re,Le),N=new F1(U),b=new k1(U),Q=new JM(I),L=new O1(I,Q),_t=new q1(I,Q,Le,L),Mt=new K1(I,_t,Q,Le),Qt=new Z1(I,be,oe),Wt=new B1(jt),ft=new fT(U,N,b,ae,be,L,Wt),Kt=new NT(U,jt),Lt=new pT,Jt=new ST(ae),At=new N1(U,N,b,Ht,Mt,y,m),bt=new bT(U,Mt,be),mt=new OT(I,Le,be,Ht),Gt=new z1(I,ae,Le),Pt=new Y1(I,ae,Le),Le.programs=ft.programs,U.capabilities=be,U.extensions=ae,U.properties=jt,U.renderLists=Lt,U.shadowMap=bt,U.state=Ht,U.info=Le}St();const Tt=new UT(U,I);this.xr=Tt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const R=ae.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ae.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(R){R!==void 0&&(yt=R,this.setSize(W,gt,!1))},this.getSize=function(R){return R.set(W,gt)},this.setSize=function(R,q,st=!0){if(Tt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,gt=q,i.width=Math.floor(R*yt),i.height=Math.floor(q*yt),st===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(W*yt,gt*yt).floor()},this.setDrawingBufferSize=function(R,q,st){W=R,gt=q,yt=st,i.width=Math.floor(R*st),i.height=Math.floor(q*st),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(lt)},this.getViewport=function(R){return R.copy(Et)},this.setViewport=function(R,q,st,et){R.isVector4?Et.set(R.x,R.y,R.z,R.w):Et.set(R,q,st,et),Ht.viewport(lt.copy(Et).multiplyScalar(yt).round())},this.getScissor=function(R){return R.copy(Ct)},this.setScissor=function(R,q,st,et){R.isVector4?Ct.set(R.x,R.y,R.z,R.w):Ct.set(R,q,st,et),Ht.scissor(ht.copy(Ct).multiplyScalar(yt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(R){Ht.setScissorTest(zt=R)},this.setOpaqueSort=function(R){z=R},this.setTransparentSort=function(R){at=R},this.getClearColor=function(R){return R.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,st=!0){let et=0;if(R){let Z=!1;if(C!==null){const wt=C.texture.format;Z=E.has(wt)}if(Z){const wt=C.texture.type,Nt=T.has(wt),It=At.getClearColor(),Vt=At.getClearAlpha(),ie=It.r,le=It.g,$t=It.b;Nt?(M[0]=ie,M[1]=le,M[2]=$t,M[3]=Vt,I.clearBufferuiv(I.COLOR,0,M)):(v[0]=ie,v[1]=le,v[2]=$t,v[3]=Vt,I.clearBufferiv(I.COLOR,0,v))}else et|=I.COLOR_BUFFER_BIT}q&&(et|=I.DEPTH_BUFFER_BIT),st&&(et|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",ot,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),At.dispose(),Lt.dispose(),Jt.dispose(),jt.dispose(),N.dispose(),b.dispose(),Mt.dispose(),L.dispose(),mt.dispose(),ft.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ya),Tt.removeEventListener("sessionend",nr),In.stop()};function nt(R){R.preventDefault(),Kc("WebGLRenderer: Context Lost."),P=!0}function ot(){Kc("WebGLRenderer: Context Restored."),P=!1;const R=Le.autoReset,q=bt.enabled,st=bt.autoUpdate,et=bt.needsUpdate,Z=bt.type;St(),Le.autoReset=R,bt.enabled=q,bt.autoUpdate=st,bt.needsUpdate=et,bt.type=Z}function Rt(R){en("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qt(R){const q=R.target;q.removeEventListener("dispose",qt),ge(q)}function ge(R){Se(R),jt.remove(R)}function Se(R){const q=jt.get(R).programs;q!==void 0&&(q.forEach(function(st){ft.releaseProgram(st)}),R.isShaderMaterial&&ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,st,et,Z,wt){q===null&&(q=Ue);const Nt=Z.isMesh&&Z.matrixWorld.determinant()<0,It=au(R,q,st,et,Z);Ht.setMaterial(et,Nt);let Vt=st.index,ie=1;if(et.wireframe===!0){if(Vt=_t.getWireframeAttribute(st),Vt===void 0)return;ie=2}const le=st.drawRange,$t=st.attributes.position;let pe=le.start*ie,Ne=(le.start+le.count)*ie;wt!==null&&(pe=Math.max(pe,wt.start*ie),Ne=Math.min(Ne,(wt.start+wt.count)*ie)),Vt!==null?(pe=Math.max(pe,0),Ne=Math.min(Ne,Vt.count)):$t!=null&&(pe=Math.max(pe,0),Ne=Math.min(Ne,$t.count));const Oe=Ne-pe;if(Oe<0||Oe===1/0)return;L.setup(Z,et,It,st,Vt);let Re,Ie=Gt;if(Vt!==null&&(Re=Q.get(Vt),Ie=Pt,Ie.setIndex(Re)),Z.isMesh)et.wireframe===!0?(Ht.setLineWidth(et.wireframeLinewidth*fe()),Ie.setMode(I.LINES)):Ie.setMode(I.TRIANGLES);else if(Z.isLine){let ne=et.linewidth;ne===void 0&&(ne=1),Ht.setLineWidth(ne*fe()),Z.isLineSegments?Ie.setMode(I.LINES):Z.isLineLoop?Ie.setMode(I.LINE_LOOP):Ie.setMode(I.LINE_STRIP)}else Z.isPoints?Ie.setMode(I.POINTS):Z.isSprite&&Ie.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Ie.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const ne=Z._multiDrawStarts,Ye=Z._multiDrawCounts,Ce=Z._multiDrawCount,yn=Vt?Q.get(Vt).bytesPerElement:1,ba=jt.get(et).currentProgram.getUniforms();for(let Ze=0;Ze<Ce;Ze++)ba.setValue(I,"_gl_DrawID",Ze),Ie.render(ne[Ze]/yn,Ye[Ze])}else if(Z.isInstancedMesh)Ie.renderInstances(pe,Oe,Z.count);else if(st.isInstancedBufferGeometry){const ne=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Ye=Math.min(st.instanceCount,ne);Ie.renderInstances(pe,Oe,Ye)}else Ie.render(pe,Oe)};function sn(R,q,st){R.transparent===!0&&R.side===da&&R.forceSinglePass===!1?(R.side=Yn,R.needsUpdate=!0,mn(R,q,st),R.side=er,R.needsUpdate=!0,mn(R,q,st),R.side=da):mn(R,q,st)}this.compile=function(R,q,st=null){st===null&&(st=R),D=Jt.get(st),D.init(q),V.push(D),st.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),R!==st&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(D.pushLight(Z),Z.castShadow&&D.pushShadow(Z))}),D.setupLights();const et=new Set;return R.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const wt=Z.material;if(wt)if(Array.isArray(wt))for(let Nt=0;Nt<wt.length;Nt++){const It=wt[Nt];sn(It,st,Z),et.add(It)}else sn(wt,st,Z),et.add(wt)}),D=V.pop(),et},this.compileAsync=function(R,q,st=null){const et=this.compile(R,q,st);return new Promise(Z=>{function wt(){if(et.forEach(function(Nt){jt.get(Nt).currentProgram.isReady()&&et.delete(Nt)}),et.size===0){Z(R);return}setTimeout(wt,10)}ae.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Sn=null;function Or(R){Sn&&Sn(R)}function ya(){In.stop()}function nr(){In.start()}const In=new C_;In.setAnimationLoop(Or),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(R){Sn=R,Tt.setAnimationLoop(R),R===null?In.stop():In.start()},Tt.addEventListener("sessionstart",ya),Tt.addEventListener("sessionend",nr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){en("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(q),q=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,q,C),D=Jt.get(R,V.length),D.init(q),V.push(D),Dt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),rt.setFromProjectionMatrix(Dt,zi,q.reversedDepth),Ut=this.localClippingEnabled,ut=Wt.init(this.clippingPlanes,Ut),O=Lt.get(R,F.length),O.init(),F.push(O),Tt.enabled===!0&&Tt.isPresenting===!0){const wt=U.xr.getDepthSensingMesh();wt!==null&&Ci(wt,q,-1/0,U.sortObjects)}Ci(R,q,0,U.sortObjects),O.finish(),U.sortObjects===!0&&O.sort(z,at),Yt=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Yt&&At.addToRenderList(O,R),this.info.render.frame++,ut===!0&&Wt.beginShadows();const st=D.state.shadowsArray;bt.render(st,R,q),ut===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=O.opaque,Z=O.transmissive;if(D.setupLights(),q.isArrayCamera){const wt=q.cameras;if(Z.length>0)for(let Nt=0,It=wt.length;Nt<It;Nt++){const Vt=wt[Nt];Xs(et,Z,R,Vt)}Yt&&At.render(R);for(let Nt=0,It=wt.length;Nt<It;Nt++){const Vt=wt[Nt];Vs(O,R,Vt,Vt.viewport)}}else Z.length>0&&Xs(et,Z,R,q),Yt&&At.render(R),Vs(O,R,q);C!==null&&w===0&&(oe.updateMultisampleRenderTarget(C),oe.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(U,R,q),L.resetDefaultState(),G=-1,K=null,V.pop(),V.length>0?(D=V[V.length-1],ut===!0&&Wt.setGlobalState(U.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?O=F[F.length-1]:O=null};function Ci(R,q,st,et){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)st=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||rt.intersectsSprite(R)){et&&ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Dt);const Nt=Mt.update(R),It=R.material;It.visible&&O.push(R,Nt,It,st,ee.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||rt.intersectsObject(R))){const Nt=Mt.update(R),It=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ee.copy(R.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),ee.copy(Nt.boundingSphere.center)),ee.applyMatrix4(R.matrixWorld).applyMatrix4(Dt)),Array.isArray(It)){const Vt=Nt.groups;for(let ie=0,le=Vt.length;ie<le;ie++){const $t=Vt[ie],pe=It[$t.materialIndex];pe&&pe.visible&&O.push(R,Nt,pe,st,ee.z,$t)}}else It.visible&&O.push(R,Nt,It,st,ee.z,null)}}const wt=R.children;for(let Nt=0,It=wt.length;Nt<It;Nt++)Ci(wt[Nt],q,st,et)}function Vs(R,q,st,et){const{opaque:Z,transmissive:wt,transparent:Nt}=R;D.setupLightsView(st),ut===!0&&Wt.setGlobalState(U.clippingPlanes,st),et&&Ht.viewport(lt.copy(et)),Z.length>0&&Zn(Z,q,st),wt.length>0&&Zn(wt,q,st),Nt.length>0&&Zn(Nt,q,st),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Xs(R,q,st,et){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[et.id]===void 0&&(D.state.transmissionRenderTarget[et.id]=new Ur(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?Is:Pi,minFilter:wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Be.workingColorSpace}));const wt=D.state.transmissionRenderTarget[et.id],Nt=et.viewport||lt;wt.setSize(Nt.z*U.transmissionResolutionScale,Nt.w*U.transmissionResolutionScale);const It=U.getRenderTarget(),Vt=U.getActiveCubeFace(),ie=U.getActiveMipmapLevel();U.setRenderTarget(wt),U.getClearColor(B),j=U.getClearAlpha(),j<1&&U.setClearColor(16777215,.5),U.clear(),Yt&&At.render(st);const le=U.toneMapping;U.toneMapping=xa;const $t=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),D.setupLightsView(et),ut===!0&&Wt.setGlobalState(U.clippingPlanes,et),Zn(R,st,et),oe.updateMultisampleRenderTarget(wt),oe.updateRenderTargetMipmap(wt),ae.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ne=0,Oe=q.length;Ne<Oe;Ne++){const Re=q[Ne],{object:Ie,geometry:ne,material:Ye,group:Ce}=Re;if(Ye.side===da&&Ie.layers.test(et.layers)){const yn=Ye.side;Ye.side=Yn,Ye.needsUpdate=!0,cn(Ie,st,et,ne,Ye,Ce),Ye.side=yn,Ye.needsUpdate=!0,pe=!0}}pe===!0&&(oe.updateMultisampleRenderTarget(wt),oe.updateRenderTargetMipmap(wt))}U.setRenderTarget(It,Vt,ie),U.setClearColor(B,j),$t!==void 0&&(et.viewport=$t),U.toneMapping=le}function Zn(R,q,st){const et=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,wt=R.length;Z<wt;Z++){const Nt=R[Z],{object:It,geometry:Vt,group:ie}=Nt;let le=Nt.material;le.allowOverride===!0&&et!==null&&(le=et),It.layers.test(st.layers)&&cn(It,q,st,Vt,le,ie)}}function cn(R,q,st,et,Z,wt){R.onBeforeRender(U,q,st,et,Z,wt),R.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(U,q,st,et,R,wt),Z.transparent===!0&&Z.side===da&&Z.forceSinglePass===!1?(Z.side=Yn,Z.needsUpdate=!0,U.renderBufferDirect(st,q,et,Z,R,wt),Z.side=er,Z.needsUpdate=!0,U.renderBufferDirect(st,q,et,Z,R,wt),Z.side=da):U.renderBufferDirect(st,q,et,Z,R,wt),R.onAfterRender(U,q,st,et,Z,wt)}function mn(R,q,st){q.isScene!==!0&&(q=Ue);const et=jt.get(R),Z=D.state.lights,wt=D.state.shadowsArray,Nt=Z.state.version,It=ft.getParameters(R,Z.state,wt,q,st),Vt=ft.getProgramCacheKey(It);let ie=et.programs;et.environment=R.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(R.isMeshStandardMaterial?b:N).get(R.envMap||et.environment),et.envMapRotation=et.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",qt),ie=new Map,et.programs=ie);let le=ie.get(Vt);if(le!==void 0){if(et.currentProgram===le&&et.lightsStateVersion===Nt)return zr(R,It),le}else It.uniforms=ft.getUniforms(R),R.onBeforeCompile(It,U),le=ft.acquireProgram(It,Vt),ie.set(Vt,le),et.uniforms=It.uniforms;const $t=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Wt.uniform),zr(R,It),et.needsLights=il(R),et.lightsStateVersion=Nt,et.needsLights&&($t.ambientLightColor.value=Z.state.ambient,$t.lightProbe.value=Z.state.probe,$t.directionalLights.value=Z.state.directional,$t.directionalLightShadows.value=Z.state.directionalShadow,$t.spotLights.value=Z.state.spot,$t.spotLightShadows.value=Z.state.spotShadow,$t.rectAreaLights.value=Z.state.rectArea,$t.ltc_1.value=Z.state.rectAreaLTC1,$t.ltc_2.value=Z.state.rectAreaLTC2,$t.pointLights.value=Z.state.point,$t.pointLightShadows.value=Z.state.pointShadow,$t.hemisphereLights.value=Z.state.hemi,$t.directionalShadowMap.value=Z.state.directionalShadowMap,$t.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,$t.spotShadowMap.value=Z.state.spotShadowMap,$t.spotLightMatrix.value=Z.state.spotLightMatrix,$t.spotLightMap.value=Z.state.spotLightMap,$t.pointShadowMap.value=Z.state.pointShadowMap,$t.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=le,et.uniformsList=null,le}function Fi(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function zr(R,q){const st=jt.get(R);st.outputColorSpace=q.outputColorSpace,st.batching=q.batching,st.batchingColor=q.batchingColor,st.instancing=q.instancing,st.instancingColor=q.instancingColor,st.instancingMorph=q.instancingMorph,st.skinning=q.skinning,st.morphTargets=q.morphTargets,st.morphNormals=q.morphNormals,st.morphColors=q.morphColors,st.morphTargetsCount=q.morphTargetsCount,st.numClippingPlanes=q.numClippingPlanes,st.numIntersection=q.numClipIntersection,st.vertexAlphas=q.vertexAlphas,st.vertexTangents=q.vertexTangents,st.toneMapping=q.toneMapping}function au(R,q,st,et,Z){q.isScene!==!0&&(q=Ue),oe.resetTextureUnits();const wt=q.fog,Nt=et.isMeshStandardMaterial?q.environment:null,It=C===null?U.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Bs,Vt=(et.isMeshStandardMaterial?b:N).get(et.envMap||Nt),ie=et.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,le=!!st.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),$t=!!st.morphAttributes.position,pe=!!st.morphAttributes.normal,Ne=!!st.morphAttributes.color;let Oe=xa;et.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Oe=U.toneMapping);const Re=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ie=Re!==void 0?Re.length:0,ne=jt.get(et),Ye=D.state.lights;if(ut===!0&&(Ut===!0||R!==K)){const bn=R===K&&et.id===G;Wt.setState(et,R,bn)}let Ce=!1;et.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ye.state.version||ne.outputColorSpace!==It||Z.isBatchedMesh&&ne.batching===!1||!Z.isBatchedMesh&&ne.batching===!0||Z.isBatchedMesh&&ne.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&ne.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&ne.instancing===!1||!Z.isInstancedMesh&&ne.instancing===!0||Z.isSkinnedMesh&&ne.skinning===!1||!Z.isSkinnedMesh&&ne.skinning===!0||Z.isInstancedMesh&&ne.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&ne.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&ne.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&ne.instancingMorph===!1&&Z.morphTexture!==null||ne.envMap!==Vt||et.fog===!0&&ne.fog!==wt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Wt.numPlanes||ne.numIntersection!==Wt.numIntersection)||ne.vertexAlphas!==ie||ne.vertexTangents!==le||ne.morphTargets!==$t||ne.morphNormals!==pe||ne.morphColors!==Ne||ne.toneMapping!==Oe||ne.morphTargetsCount!==Ie)&&(Ce=!0):(Ce=!0,ne.__version=et.version);let yn=ne.currentProgram;Ce===!0&&(yn=mn(et,q,Z));let ba=!1,Ze=!1,Ii=!1;const Ke=yn.getUniforms(),Mn=ne.uniforms;if(Ht.useProgram(yn.program)&&(ba=!0,Ze=!0,Ii=!0),et.id!==G&&(G=et.id,Ze=!0),ba||K!==R){Ht.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ke.setValue(I,"projectionMatrix",R.projectionMatrix),Ke.setValue(I,"viewMatrix",R.matrixWorldInverse);const Rn=Ke.map.cameraPosition;Rn!==void 0&&Rn.setValue(I,Ft.setFromMatrixPosition(R.matrixWorld)),be.logarithmicDepthBuffer&&Ke.setValue(I,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Ke.setValue(I,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,Ze=!0,Ii=!0)}if(Z.isSkinnedMesh){Ke.setOptional(I,Z,"bindMatrix"),Ke.setOptional(I,Z,"bindMatrixInverse");const bn=Z.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Ke.setValue(I,"boneTexture",bn.boneTexture,oe))}Z.isBatchedMesh&&(Ke.setOptional(I,Z,"batchingTexture"),Ke.setValue(I,"batchingTexture",Z._matricesTexture,oe),Ke.setOptional(I,Z,"batchingIdTexture"),Ke.setValue(I,"batchingIdTexture",Z._indirectTexture,oe),Ke.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ke.setValue(I,"batchingColorTexture",Z._colorsTexture,oe));const xn=st.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Qt.update(Z,st,yn),(Ze||ne.receiveShadow!==Z.receiveShadow)&&(ne.receiveShadow=Z.receiveShadow,Ke.setValue(I,"receiveShadow",Z.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Mn.envMap.value=Vt,Mn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=PT()),Ze&&(Ke.setValue(I,"toneMappingExposure",U.toneMappingExposure),ne.needsLights&&ru(Mn,Ii),wt&&et.fog===!0&&Kt.refreshFogUniforms(Mn,wt),Kt.refreshMaterialUniforms(Mn,et,yt,gt,D.state.transmissionRenderTarget[R.id]),qc.upload(I,Fi(ne),Mn,oe)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(qc.upload(I,Fi(ne),Mn,oe),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Ke.setValue(I,"center",Z.center),Ke.setValue(I,"modelViewMatrix",Z.modelViewMatrix),Ke.setValue(I,"normalMatrix",Z.normalMatrix),Ke.setValue(I,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const bn=et.uniformsGroups;for(let Rn=0,wi=bn.length;Rn<wi;Rn++){const Hi=bn[Rn];mt.update(Hi,yn),mt.bind(Hi,yn)}}return yn}function ru(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function il(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,q,st){const et=jt.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),jt.get(R.texture).__webglTexture=q,jt.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:st,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const st=jt.get(R);st.__webglFramebuffer=q,st.__useDefaultFramebuffer=q===void 0};const ir=I.createFramebuffer();this.setRenderTarget=function(R,q=0,st=0){C=R,k=q,w=st;let et=!0,Z=null,wt=!1,Nt=!1;if(R){const Vt=jt.get(R);if(Vt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(I.FRAMEBUFFER,null),et=!1;else if(Vt.__webglFramebuffer===void 0)oe.setupRenderTarget(R);else if(Vt.__hasExternalTextures)oe.rebindTextures(R,jt.get(R.texture).__webglTexture,jt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(Vt.__boundDepthTexture!==$t){if($t!==null&&jt.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(R)}}const ie=R.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Nt=!0);const le=jt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(le[q])?Z=le[q][st]:Z=le[q],wt=!0):R.samples>0&&oe.useMultisampledRTT(R)===!1?Z=jt.get(R).__webglMultisampledFramebuffer:Array.isArray(le)?Z=le[st]:Z=le,lt.copy(R.viewport),ht.copy(R.scissor),dt=R.scissorTest}else lt.copy(Et).multiplyScalar(yt).floor(),ht.copy(Ct).multiplyScalar(yt).floor(),dt=zt;if(st!==0&&(Z=ir),Ht.bindFramebuffer(I.FRAMEBUFFER,Z)&&et&&Ht.drawBuffers(R,Z),Ht.viewport(lt),Ht.scissor(ht),Ht.setScissorTest(dt),wt){const Vt=jt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Vt.__webglTexture,st)}else if(Nt){const Vt=q;for(let ie=0;ie<R.textures.length;ie++){const le=jt.get(R.textures[ie]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ie,le.__webglTexture,st,Vt)}}else if(R!==null&&st!==0){const Vt=jt.get(R.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Vt.__webglTexture,st)}G=-1},this.readRenderTargetPixels=function(R,q,st,et,Z,wt,Nt,It=0){if(!(R&&R.isWebGLRenderTarget)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Vt=Vt[Nt]),Vt){Ht.bindFramebuffer(I.FRAMEBUFFER,Vt);try{const ie=R.textures[It],le=ie.format,$t=ie.type;if(!be.textureFormatReadable(le)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!be.textureTypeReadable($t)){en("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-et&&st>=0&&st<=R.height-Z&&(R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+It),I.readPixels(q,st,et,Z,re.convert(le),re.convert($t),wt))}finally{const ie=C!==null?jt.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(R,q,st,et,Z,wt,Nt,It=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=jt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Nt!==void 0&&(Vt=Vt[Nt]),Vt)if(q>=0&&q<=R.width-et&&st>=0&&st<=R.height-Z){Ht.bindFramebuffer(I.FRAMEBUFFER,Vt);const ie=R.textures[It],le=ie.format,$t=ie.type;if(!be.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!be.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.bufferData(I.PIXEL_PACK_BUFFER,wt.byteLength,I.STREAM_READ),R.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+It),I.readPixels(q,st,et,Z,re.convert(le),re.convert($t),0);const Ne=C!==null?jt.get(C).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,Ne);const Oe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Hy(I,Oe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,wt),I.deleteBuffer(pe),I.deleteSync(Oe),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,st=0){const et=Math.pow(2,-st),Z=Math.floor(R.image.width*et),wt=Math.floor(R.image.height*et),Nt=q!==null?q.x:0,It=q!==null?q.y:0;oe.setTexture2D(R,0),I.copyTexSubImage2D(I.TEXTURE_2D,st,0,0,Nt,It,Z,wt),Ht.unbindTexture()};const ks=I.createFramebuffer(),Ma=I.createFramebuffer();this.copyTextureToTexture=function(R,q,st=null,et=null,Z=0,wt=null){wt===null&&(Z!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=Z,Z=0):wt=0);let Nt,It,Vt,ie,le,$t,pe,Ne,Oe;const Re=R.isCompressedTexture?R.mipmaps[wt]:R.image;if(st!==null)Nt=st.max.x-st.min.x,It=st.max.y-st.min.y,Vt=st.isBox3?st.max.z-st.min.z:1,ie=st.min.x,le=st.min.y,$t=st.isBox3?st.min.z:0;else{const xn=Math.pow(2,-Z);Nt=Math.floor(Re.width*xn),It=Math.floor(Re.height*xn),R.isDataArrayTexture?Vt=Re.depth:R.isData3DTexture?Vt=Math.floor(Re.depth*xn):Vt=1,ie=0,le=0,$t=0}et!==null?(pe=et.x,Ne=et.y,Oe=et.z):(pe=0,Ne=0,Oe=0);const Ie=re.convert(q.format),ne=re.convert(q.type);let Ye;q.isData3DTexture?(oe.setTexture3D(q,0),Ye=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(oe.setTexture2DArray(q,0),Ye=I.TEXTURE_2D_ARRAY):(oe.setTexture2D(q,0),Ye=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),yn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ba=I.getParameter(I.UNPACK_SKIP_PIXELS),Ze=I.getParameter(I.UNPACK_SKIP_ROWS),Ii=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Re.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Re.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,le),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$t);const Ke=R.isDataArrayTexture||R.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const xn=jt.get(R),bn=jt.get(q),Rn=jt.get(xn.__renderTarget),wi=jt.get(bn.__renderTarget);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Hi=0;Hi<Vt;Hi++)Ke&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(R).__webglTexture,Z,$t+Hi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(q).__webglTexture,wt,Oe+Hi)),I.blitFramebuffer(ie,le,Nt,It,pe,Ne,Nt,It,I.DEPTH_BUFFER_BIT,I.NEAREST);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||R.isRenderTargetTexture||jt.has(R)){const xn=jt.get(R),bn=jt.get(q);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,ks),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ma);for(let Rn=0;Rn<Vt;Rn++)Ke?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,Z,$t+Rn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,Z),Mn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bn.__webglTexture,wt,Oe+Rn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bn.__webglTexture,wt),Z!==0?I.blitFramebuffer(ie,le,Nt,It,pe,Ne,Nt,It,I.COLOR_BUFFER_BIT,I.NEAREST):Mn?I.copyTexSubImage3D(Ye,wt,pe,Ne,Oe+Rn,ie,le,Nt,It):I.copyTexSubImage2D(Ye,wt,pe,Ne,ie,le,Nt,It);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?I.texSubImage3D(Ye,wt,pe,Ne,Oe,Nt,It,Vt,Ie,ne,Re.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(Ye,wt,pe,Ne,Oe,Nt,It,Vt,Ie,Re.data):I.texSubImage3D(Ye,wt,pe,Ne,Oe,Nt,It,Vt,Ie,ne,Re):R.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,wt,pe,Ne,Nt,It,Ie,ne,Re.data):R.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,wt,pe,Ne,Re.width,Re.height,Ie,Re.data):I.texSubImage2D(I.TEXTURE_2D,wt,pe,Ne,Nt,It,Ie,ne,Re);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ba),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ii),wt===0&&q.generateMipmaps&&I.generateMipmap(Ye),Ht.unbindTexture()},this.initRenderTarget=function(R){jt.get(R).__webglFramebuffer===void 0&&oe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?oe.setTextureCube(R,0):R.isData3DTexture?oe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?oe.setTexture2DArray(R,0):oe.setTexture2D(R,0),Ht.unbindTexture()},this.resetState=function(){k=0,w=0,C=null,Ht.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Be._getDrawingBufferColorSpace(t),i.unpackColorSpace=Be._getUnpackColorSpace()}}class FT extends np{constructor(t){super(t)}load(t,i,r,l){const c=this,d=new kM(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(t,function(h){try{i(c.parse(h))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},r,l)}parse(t){function i(p){const x=new DataView(p),g=32/8*3+32/8*3*3+16/8,_=x.getUint32(80,!0);if(80+32/8+_*g===x.byteLength)return!0;const E=[115,111,108,105,100];for(let T=0;T<5;T++)if(r(E,x,T))return!1;return!0}function r(p,x,g){for(let _=0,y=p.length;_<y;_++)if(p[_]!==x.getUint8(g+_))return!1;return!0}function l(p){const x=new DataView(p),g=x.getUint32(80,!0);let _,y,E,T=!1,M,v,O,D,F;for(let G=0;G<70;G++)x.getUint32(G,!1)==1129270351&&x.getUint8(G+4)==82&&x.getUint8(G+5)==61&&(T=!0,M=new Float32Array(g*3*3),v=x.getUint8(G+6)/255,O=x.getUint8(G+7)/255,D=x.getUint8(G+8)/255,F=x.getUint8(G+9)/255);const V=84,U=50,P=new oi,k=new Float32Array(g*3*3),w=new Float32Array(g*3*3),C=new De;for(let G=0;G<g;G++){const K=V+G*U,lt=x.getFloat32(K,!0),ht=x.getFloat32(K+4,!0),dt=x.getFloat32(K+8,!0);if(T){const B=x.getUint16(K+48,!0);(B&32768)===0?(_=(B&31)/31,y=(B>>5&31)/31,E=(B>>10&31)/31):(_=v,y=O,E=D)}for(let B=1;B<=3;B++){const j=K+B*12,W=G*3*3+(B-1)*3;k[W]=x.getFloat32(j,!0),k[W+1]=x.getFloat32(j+4,!0),k[W+2]=x.getFloat32(j+8,!0),w[W]=lt,w[W+1]=ht,w[W+2]=dt,T&&(C.setRGB(_,y,E,qn),M[W]=C.r,M[W+1]=C.g,M[W+2]=C.b)}}return P.setAttribute("position",new jn(k,3)),P.setAttribute("normal",new jn(w,3)),T&&(P.setAttribute("color",new jn(M,3)),P.hasColors=!0,P.alpha=F),P}function c(p){const x=new oi,g=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,y=/solid\s(.+)/;let E=0;const T=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,M=new RegExp("vertex"+T+T+T,"g"),v=new RegExp("normal"+T+T+T,"g"),O=[],D=[],F=[],V=new tt;let U,P=0,k=0,w=0;for(;(U=g.exec(p))!==null;){k=w;const C=U[0],G=(U=y.exec(C))!==null?U[1]:"";for(F.push(G);(U=_.exec(C))!==null;){let ht=0,dt=0;const B=U[0];for(;(U=v.exec(B))!==null;)V.x=parseFloat(U[1]),V.y=parseFloat(U[2]),V.z=parseFloat(U[3]),dt++;for(;(U=M.exec(B))!==null;)O.push(parseFloat(U[1]),parseFloat(U[2]),parseFloat(U[3])),D.push(V.x,V.y,V.z),ht++,w++;dt!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),ht!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const K=k,lt=w-k;x.userData.groupNames=F,x.addGroup(K,lt,P),P++}return x.setAttribute("position",new vi(O,3)),x.setAttribute("normal",new vi(D,3)),x}function d(p){return typeof p!="string"?new TextDecoder().decode(p):p}function h(p){if(typeof p=="string"){const x=new Uint8Array(p.length);for(let g=0;g<p.length;g++)x[g]=p.charCodeAt(g)&255;return x.buffer||x}else return p}const m=h(t);return i(m)?l(m):c(d(t))}}const IT="#ffe4e9",HT=()=>{const o=document.createElement("canvas");o.width=512,o.height=512;const t=o.getContext("2d"),i=t.createRadialGradient(256,256,0,256,256,256);return i.addColorStop(0,"rgba(255, 255, 255, 1)"),i.addColorStop(.2,"rgba(255, 255, 255, 0.4)"),i.addColorStop(1,"rgba(255, 255, 255, 0)"),t.fillStyle=i,t.fillRect(0,0,512,512),new PM(o)},GT=o=>{if(!o)return null;const i=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").split("").join(".*");return new RegExp(i,"i")},VT=({files:o,onModelSelect:t,onProgress:i,onHover:r,panelSize:l,selectedModel:c,searchTerm:d})=>{const h=kt.useRef(null),m=kt.useRef(null),p=kt.useRef(null),x=kt.useRef(null),g=kt.useRef(new KM(new tt,new tt)),_=kt.useRef(new ve),y=kt.useRef([]),E=kt.useRef([]),T=kt.useRef(!1),M=kt.useRef(null),v=kt.useRef(null),O=kt.useRef(new tt),D=kt.useRef(0),F=kt.useRef(null),V=kt.useRef(0),U=kt.useRef(0),P=kt.useRef({theta:0,phi:Math.PI/2}),k=kt.useRef(1200),w=kt.useRef({x:0,y:0}),C=kt.useRef(!1),G=kt.useRef({x:0,y:0}),K=kt.useRef(!1),lt=kt.useRef({x:0,y:0}),ht=kt.useRef(0),dt=kt.useRef(0),B=kt.useRef(0),j=kt.useRef(!1),W=kt.useRef(()=>{}),gt=350,yt=650,z=kt.useRef(1200),at=kt.useRef(200),Et=kt.useRef(4),Ct=kt.useRef(l);kt.useEffect(()=>{Ct.current=l},[l]);const zt=kt.useRef(d),rt=Dt=>Dt>1200?6:Dt>768?4:2,ut=(Dt,Ft)=>{const ee=Ct.current,Ue=k.current,Yt=zo.degToRad(60),fe=2*Math.tan(Yt/2)*Ue;let I=0,ce=0;if(Dt>768){const be=fe*(Dt/Ft)/Dt;I=ee/2*be}else{const ae=fe/Ft;ce=-(ee*.5)*ae}w.current={x:I,y:ce}},Ut=()=>{const Dt=Et.current,Ft=at.current;y.current.sort((Yt,fe)=>Yt.userData.index-fe.userData.index);const ee=GT(zt.current);let Ue=0;y.current.forEach(Yt=>{const fe=Yt.userData.fileName,I=!zt.current||(ee?ee.test(fe):!0);if(Yt.userData.matchesSearch=I,I){const ce=Math.floor(Ue/Dt),ae=Ue%Dt,Le=-((Dt-1)*yt)/2+ae*yt,jt=Ft-ce*yt,oe=0;Yt.userData.originalPosition={x:Le,y:jt,z:oe},Yt.position.set(Le,jt,oe);const N=E.current.find(b=>b.model===Yt);N&&N.sphere.center.copy(Yt.position),Yt.visible=!0,Ue++}else Yt.visible=!1}),dt.current=Math.ceil(Ue/Dt)};return kt.useEffect(()=>{if(zt.current=d,!h.current)return;const Dt=d.length>0;Dt&&!j.current?(B.current=ht.current,ht.current=0):Dt&&j.current?ht.current=0:!Dt&&j.current&&(ht.current=B.current),j.current=Dt,Ut()},[d]),kt.useEffect(()=>{if(!h.current||!o.length)return;const Dt=h.current.clientWidth,Ft=h.current.clientHeight,ee=new RM;m.current=ee;const Ue=new gi(60,Dt/Ft,1,1e4);p.current=Ue;const Yt=new BT({alpha:!0,antialias:!0,powerPreference:"high-performance"});Yt.setSize(Dt,Ft),Yt.setPixelRatio(Math.min(window.devicePixelRatio,2)),Yt.shadowMap.enabled=!1,Yt.outputColorSpace=qn,Yt.toneMapping=xa,h.current.appendChild(Yt.domElement),x.current=Yt;const fe=Ue.position.clone(),I=Ue.position.clone(),ce=new tt(0,0,0),ae=new tt(0,0,0),be=(L,mt)=>{const St=L/mt,Tt=rt(L);Et.current=Tt;const nt=(Tt-1)*yt+gt+600,ot=Math.tan(zo.degToRad(30)),Rt=nt/(2*ot*St);z.current=Math.max(Rt,1200);const qt=z.current*ot,ge=L<=768?800:700;at.current=qt-ge,T.current||(Ue.position.z=z.current,I.z=z.current)};be(Dt,Ft),fe.z=z.current;const Ht=new jM(16777215,.9);ee.add(Ht);const Le=new YM(16777215,.3);Le.position.set(500,1e3,750),ee.add(Le);const jt=HT(),oe=new y_({map:jt,color:16770281,transparent:!0,opacity:0,blending:Kd,depthWrite:!1}),N=new wM(oe);N.renderOrder=-1,ee.add(N),F.current=N;const b=new FT;let Q=0;const _t=(L,mt)=>{b.load(L.url,St=>{const Tt=new FM({color:IT,roughness:.5,metalness:0}),nt=new va(St,Tt);nt.userData.fileName=L.name,nt.userData.scadContent=L.scadContent,nt.userData.scadUrl=L.scadUrl,nt.userData.index=mt,nt.castShadow=!1,nt.receiveShadow=!1,nt.userData.matchesSearch=!0,St.center(),St.computeBoundingBox();const ot=St.boundingBox,Rt=new tt;ot.getSize(Rt);const qt=Math.max(Rt.x,Rt.y,Rt.z),ge=gt/qt;nt.scale.setScalar(ge),nt.rotation.set(-Math.PI/2,0,Math.PI/4);const Se=new BM(St),sn=new zM(Se,new b_({color:13938872,transparent:!0,opacity:.3}));nt.add(sn);const Sn=new el(nt.position.clone(),gt*.8);E.current.push({sphere:Sn,model:nt}),ee.add(nt),y.current.push(nt),Ut(),Q++,i(Q,o.length)},void 0,St=>{console.warn(`Failed to load ${L.name}`,St),Q++,i(Q,o.length)})};o.forEach((L,mt)=>{setTimeout(()=>_t(L,mt),mt*100)});const Mt=L=>{K.current=!0,C.current=!1,G.current={x:L.clientX,y:L.clientY}},ft=L=>{const mt=h.current.getBoundingClientRect();if(_.current.x=(L.clientX-mt.left)/mt.width*2-1,_.current.y=-((L.clientY-mt.top)/mt.height)*2+1,K.current&&T.current&&M.current){const St=L.clientX-G.current.x,Tt=L.clientY-G.current.y;!C.current&&(Math.abs(St)>5||Math.abs(Tt)>5)&&(C.current=!0,G.current={x:L.clientX,y:L.clientY}),C.current&&(P.current.theta-=(L.clientX-G.current.x)*.005,P.current.phi-=(L.clientY-G.current.y)*.005,P.current.phi=Math.max(.1,Math.min(Math.PI-.1,P.current.phi)),G.current={x:L.clientX,y:L.clientY})}},Kt=L=>{const mt=K.current;if(K.current=!1,h.current){const St=h.current.getBoundingClientRect();_.current.x=(L.clientX-St.left)/St.width*2-1,_.current.y=-((L.clientY-St.top)/St.height)*2+1}!C.current&&mt&&At(),C.current=!1},Lt=L=>{if(L.touches.length===1&&(K.current=!0,C.current=!1,lt.current={x:L.touches[0].clientX,y:L.touches[0].clientY},h.current)){const mt=h.current.getBoundingClientRect();_.current.x=(L.touches[0].clientX-mt.left)/mt.width*2-1,_.current.y=-((L.touches[0].clientY-mt.top)/mt.height)*2+1}},Jt=L=>{if(L.touches.length!==1)return;L.cancelable&&L.preventDefault();const mt=L.touches[0].clientX,St=L.touches[0].clientY,Tt=mt-lt.current.x,nt=St-lt.current.y;if(!C.current&&(Math.abs(Tt)>5||Math.abs(nt)>5)&&(C.current=!0),T.current&&M.current)P.current.theta-=Tt*.005,P.current.phi-=nt*.005,P.current.phi=Math.max(.1,Math.min(Math.PI-.1,P.current.phi));else{const Rt=-nt*8,qt=dt.current*yt,ge=Math.max(0,qt-at.current);ht.current+=Rt,ht.current=Math.max(0,Math.min(ht.current,ge))}lt.current={x:mt,y:St}},Wt=L=>{K.current=!1,C.current||At(),C.current=!1},bt=L=>{if(L.preventDefault(),T.current){k.current+=L.deltaY*1,k.current=Math.max(500,Math.min(k.current,2500)),h.current&&ut(h.current.clientWidth,h.current.clientHeight);return}const mt=L.deltaY*.8,St=dt.current*yt,Tt=Math.max(0,St-at.current);ht.current+=mt,ht.current=Math.max(0,Math.min(ht.current,Tt))},At=()=>{g.current.setFromCamera(_.current,p.current);const L=E.current.find(mt=>mt.model.userData.matchesSearch&&g.current.ray.intersectsSphere(mt.sphere));T.current?Gt():L&&Qt(L.model)};h.current.addEventListener("mousedown",Mt),h.current.addEventListener("mousemove",ft),window.addEventListener("mouseup",Kt),h.current.addEventListener("wheel",bt,{passive:!1}),h.current.addEventListener("touchstart",Lt,{passive:!1}),h.current.addEventListener("touchmove",Jt,{passive:!1}),h.current.addEventListener("touchend",Wt);const Qt=L=>{var Tt,nt;T.current=!0,M.current=L,v.current=null,r(null),V.current=0,U.current=0,F.current&&(F.current.visible=!1),p.current&&O.current.copy(p.current.position),P.current={theta:Math.PI/4,phi:Math.PI/3},k.current=1200,y.current.forEach(ot=>{if(ot!==L){ot.visible=!1;const Rt=ot.material;Rt.opacity=0,Rt.transparent=!0}else{ot.visible=!0;const Rt=ot.material;Rt.opacity=1,Rt.transparent=!1}}),t(L);const mt=((Tt=h.current)==null?void 0:Tt.clientWidth)||window.innerWidth,St=((nt=h.current)==null?void 0:nt.clientHeight)||window.innerHeight;ut(mt,St)},Gt=()=>{T.current=!1,M.current=null,t(null),I.set(0,0,z.current),ae.set(0,-ht.current,0),Ut()};W.current=Gt;const Pt=()=>{if(D.current=requestAnimationFrame(Pt),!m.current||!p.current||!x.current)return;if(!T.current&&!C.current){g.current.setFromCamera(_.current,p.current);const nt=E.current.find(ot=>ot.model.userData.matchesSearch&&g.current.ray.intersectsSphere(ot.sphere));if(nt?v.current=nt.model:v.current=null,nt&&h.current){const ot=nt.model.position.clone();ot.y-=gt*.55,ot.project(p.current);const Rt=h.current.clientWidth,qt=h.current.clientHeight,ge=(ot.x*.5+.5)*Rt,Se=(-(ot.y*.5)+.5)*qt;r({name:nt.model.userData.fileName,x:ge,y:Se})}else r(null)}else v.current=null,r(null);let L=0,mt=gt*1.5,St=.005,Tt=.005;if(v.current&&!T.current&&!C.current){L=.5,mt=gt*3;const nt=p.current.position,ot=v.current.position,qt=ot.clone().sub(nt).normalize().multiplyScalar(gt);F.current.position.copy(ot).add(qt),St=.02,Tt=.02}else mt=gt*1.5;if(V.current=zo.lerp(V.current,L,St),U.current=zo.lerp(U.current,mt,Tt),F.current&&(F.current.material.opacity=V.current,F.current.scale.setScalar(U.current),F.current.visible=V.current>.01),T.current){if(M.current){const nt=k.current,{theta:ot,phi:Rt}=P.current,qt=nt*Math.sin(Rt)*Math.sin(ot),ge=nt*Math.cos(Rt),Se=nt*Math.sin(Rt)*Math.cos(ot),sn=new tt(qt,ge,Se),Sn=sn.clone().normalize().negate(),Or=new tt(0,1,0),ya=new tt().crossVectors(Sn,Or).normalize(),nr=new tt().crossVectors(ya,Sn).normalize(),In=ya.multiplyScalar(w.current.x).add(nr.multiplyScalar(w.current.y)),Ci=M.current.position.clone();ae.copy(Ci).add(In),I.copy(Ci).add(sn).add(In),fe.lerp(I,.1),ce.lerp(ae,.1)}}else{const nt=-ht.current;I.y=nt,ae.y=nt,I.x=0,I.z=z.current,ae.x=0,ae.z=0,fe.lerp(I,.05),ce.lerp(ae,.05)}p.current.position.copy(fe),p.current.lookAt(ce),y.current.forEach(nt=>{if(nt===M.current)nt.material.transparent=!1,nt.material.opacity=1,nt.visible=!0;else{if(!nt.userData.matchesSearch){nt.visible=!1;return}nt.rotation.z-=.001;const ot=T.current?0:1,Rt=nt.material.opacity,qt=zo.lerp(Rt,ot,.05),ge=qt<.99;nt.material.transparent=ge,nt.material.opacity=qt,nt.visible=qt>.01}}),x.current.render(m.current,p.current)};Pt();const re=()=>{if(!h.current||!p.current||!x.current)return;const L=h.current.clientWidth,mt=h.current.clientHeight;p.current.aspect=L/mt,p.current.updateProjectionMatrix(),x.current.setSize(L,mt),be(L,mt),Ut(),T.current&&M.current&&ut(L,mt)};return window.addEventListener("resize",re),()=>{var L,mt,St,Tt,nt,ot,Rt;window.removeEventListener("resize",re),(L=h.current)==null||L.removeEventListener("mousedown",Mt),(mt=h.current)==null||mt.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",Kt),(St=h.current)==null||St.removeEventListener("wheel",bt),(Tt=h.current)==null||Tt.removeEventListener("touchstart",Lt),(nt=h.current)==null||nt.removeEventListener("touchmove",Jt),(ot=h.current)==null||ot.removeEventListener("touchend",Wt),cancelAnimationFrame(D.current),(Rt=x.current)==null||Rt.dispose(),h.current&&x.current&&h.current.removeChild(x.current.domElement)}},[o]),kt.useEffect(()=>{T.current&&h.current&&ut(h.current.clientWidth,h.current.clientHeight)},[l]),kt.useEffect(()=>{!c&&T.current&&W.current()},[c]),kt.useEffect(()=>{t||(T.current=!1,M.current=null)},[t]),Bt.jsx("div",{ref:h,className:"w-full h-full relative",style:{touchAction:"none"}})};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kT=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,i,r)=>r?r.toUpperCase():i.toLowerCase()),Qg=o=>{const t=kT(o);return t.charAt(0).toUpperCase()+t.slice(1)},N_=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim(),WT=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=kt.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},m)=>kt.createElement("svg",{ref:m,...qT,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:N_("lucide",l),...!c&&!WT(h)&&{"aria-hidden":"true"},...h},[...d.map(([p,x])=>kt.createElement(p,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=(o,t)=>{const i=kt.forwardRef(({className:r,...l},c)=>kt.createElement(YT,{ref:c,iconNode:t,className:N_(`lucide-${XT(Qg(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Qg(o),i};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ZT=Nr("box",jT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],QT=Nr("code",KT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],$T=Nr("github",JT);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],O_=Nr("key",t2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],n2=Nr("loader-circle",e2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],a2=Nr("search",i2);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],s2=Nr("x",r2),o2=({model:o,visible:t,onClose:i,width:r,onResize:l})=>{const c=kt.useRef(!1),[d,h]=kt.useState(!1);kt.useEffect(()=>{const y=()=>h(window.innerWidth<=768);return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]),kt.useEffect(()=>{const y=v=>{if(c.current)if(v.preventDefault(),window.innerWidth>768){const O=window.innerWidth-v.clientX,D=Math.max(300,Math.min(O,window.innerWidth*.6));l(D)}else{const O=window.innerHeight-v.clientY,D=Math.max(200,Math.min(O,window.innerHeight*.9));l(D)}},E=()=>{c.current=!1,document.body.style.cursor="",document.body.style.userSelect=""},T=v=>{if(c.current)if(v.cancelable&&v.preventDefault(),window.innerWidth>768){const O=window.innerWidth-v.touches[0].clientX,D=Math.max(300,Math.min(O,window.innerWidth*.6));l(D)}else{const O=window.innerHeight-v.touches[0].clientY,D=Math.max(200,Math.min(O,window.innerHeight*.9));l(D)}},M=()=>{c.current=!1,document.body.style.userSelect=""};return document.addEventListener("mousemove",y),document.addEventListener("mouseup",E),document.addEventListener("touchmove",T,{passive:!1}),document.addEventListener("touchend",M),()=>{document.removeEventListener("mousemove",y),document.removeEventListener("mouseup",E),document.removeEventListener("touchmove",T),document.removeEventListener("touchend",M)}},[l]);const m=y=>{c.current=!0,document.body.style.userSelect="none",document.body.style.cursor=window.innerWidth>768?"ew-resize":"ns-resize"},p=y=>{c.current=!0,document.body.style.userSelect="none"};if(!o)return null;const x=o.userData.fileName,g=o.userData.scadContent,_=!!g;return Bt.jsxs("div",{style:{width:d?"100%":`${r}px`,height:d?`${r}px`:"100%"},className:`fixed bg-gray-900 text-white shadow-2xl transform transition-transform duration-500 ease-in-out z-50 flex flex-col
        /* Base positioning */
        bottom-0 right-0 
        /* Mobile overrides */
        ${d?"left-0 rounded-t-2xl border-t border-white/10":"top-0 left-auto rounded-none border-l border-white/10"}
        ${t?"translate-y-0 translate-x-0":d?"translate-y-full":"translate-x-full"}
      `,children:[Bt.jsx("div",{onMouseDown:m,onTouchStart:p,className:`absolute z-50 flex items-center justify-center
          ${d?"top-0 left-0 w-full h-8 cursor-ns-resize -mt-4":"top-0 left-0 w-4 h-full cursor-ew-resize -ml-2"}
        `,children:d&&Bt.jsx("div",{className:"w-12 h-1 bg-white/20 rounded-full mt-4 pointer-events-none"})}),Bt.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-blue-900/20 to-transparent shrink-0",children:[Bt.jsx("h2",{className:"text-xl font-bold font-mono text-cyan-400 truncate pr-4",children:x}),Bt.jsx("button",{onClick:i,className:"p-2 rounded-full hover:bg-white/10 transition-colors",children:Bt.jsx(s2,{size:20})})]}),Bt.jsxs("div",{className:"flex-1 overflow-y-auto p-6 space-y-6",children:[Bt.jsxs("div",{className:"bg-white/5 rounded-xl p-4 border border-white/5",children:[Bt.jsxs("div",{className:"flex items-center gap-3 mb-3 text-sm text-gray-400",children:[Bt.jsx(ZT,{size:16,className:"text-pink-500"}),Bt.jsx("span",{children:"Model Details"})]}),Bt.jsx("p",{className:"text-gray-300 text-sm leading-relaxed",children:"This 3D model was procedurally loaded from the repository. Rendered with standard physical materials in a Three.js environment."})]}),_?Bt.jsxs("div",{className:"space-y-2",children:[Bt.jsxs("div",{className:"flex items-center gap-2 text-sm text-green-400 font-mono",children:[Bt.jsx(QT,{size:16}),Bt.jsx("span",{children:"Source Code (.scad)"})]}),Bt.jsx("div",{className:"bg-black/50 rounded-lg p-4 border border-white/5 overflow-x-auto",children:Bt.jsx("pre",{className:"text-xs font-mono text-gray-300 whitespace-pre-wrap break-all",children:g})})]}):Bt.jsx("div",{className:"p-8 text-center text-gray-500 border border-dashed border-white/10 rounded-xl",children:Bt.jsx("span",{className:"block text-sm",children:"No source code available for this binary STL."})})]})]})},l2=({isOpen:o,onSubmit:t,message:i})=>{const[r,l]=kt.useState("");return o?Bt.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4",children:Bt.jsxs("div",{className:"w-full max-w-md bg-gray-900 border border-white/10 rounded-2xl shadow-2xl p-8",children:[Bt.jsxs("div",{className:"flex flex-col items-center gap-4 mb-6",children:[Bt.jsx("div",{className:"p-4 bg-purple-500/10 rounded-full text-purple-400",children:Bt.jsx(O_,{size:32})}),Bt.jsx("h2",{className:"text-2xl font-bold text-white text-center",children:"GitHub Access Required"}),Bt.jsx("p",{className:"text-center text-gray-400 text-sm",children:i||"The GitHub API rate limit has been reached. Please provide a Personal Access Token (PAT) to continue exploring the repository."})]}),Bt.jsxs("form",{onSubmit:c=>{c.preventDefault(),r.trim()&&t(r)},className:"space-y-4",children:[Bt.jsx("input",{type:"password",value:r,onChange:c=>l(c.target.value),placeholder:"ghp_xxxxxxxxxxxx",className:"w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors font-mono text-sm",autoFocus:!0}),Bt.jsx("button",{type:"submit",className:"w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg transition-colors",children:"Authenticate"})]}),Bt.jsx("p",{className:"mt-4 text-xs text-center text-gray-600",children:"Token is stored locally and sent only to GitHub API."})]})}):null},Jg="https://api.github.com";class c2{constructor(t,i){this.defaultBranch="main",this.owner=t,this.repo=i,this.token=localStorage.getItem("github_pat")}setToken(t){this.token=t,localStorage.setItem("github_pat",t)}async fetchDefaultBranch(){const t=this.token?{Authorization:`token ${this.token}`}:{},i=await fetch(`${Jg}/repos/${this.owner}/${this.repo}`,{headers:t});if(i.status===403)throw new Error("RATE_LIMITED");if(!i.ok)throw new Error(`GitHub API Error: ${i.statusText}`);return(await i.json()).default_branch||"main"}async fetchAllFiles(t=""){const i=`andrewphung-${this.owner}-${this.repo}-tree`,r=localStorage.getItem(i);if(r){const{timestamp:l,data:c}=JSON.parse(r);if(Date.now()-l<36e5)return c}try{this.defaultBranch=await this.fetchDefaultBranch();const l=this.token?{Authorization:`token ${this.token}`}:{},c=`${Jg}/repos/${this.owner}/${this.repo}/git/trees/${this.defaultBranch}?recursive=1`,d=await fetch(c,{headers:l});if(d.status===403)throw new Error("RATE_LIMITED");if(!d.ok)throw new Error(`GitHub API Error: ${d.statusText}`);const m=(await d.json()).tree,p=[],x=new Map;for(const g of m)if(g.path.toLowerCase().endsWith(".scad")){const _=`https://raw.githubusercontent.com/${this.owner}/${this.repo}/${this.defaultBranch}/${g.path}`;x.set(g.path,_)}for(const g of m)if(g.path.toLowerCase().endsWith(".stl")){const _=`https://raw.githubusercontent.com/${this.owner}/${this.repo}/${this.defaultBranch}/${g.path}`,E=`${g.path.substring(0,g.path.lastIndexOf("."))}.scad`,T=x.get(E);p.push({name:g.path.split("/").pop()||g.path,url:_,path:g.path,scadUrl:T})}try{localStorage.setItem(i,JSON.stringify({timestamp:Date.now(),data:p}))}catch{console.warn("LocalStorage full, skipping cache")}return p}catch(l){throw l}}async fetchFileContent(t){const i=this.token?{Authorization:`token ${this.token}`}:{},r=await fetch(t,{headers:i});return r.ok?await r.text():""}}const Gh="abphung",u2="OpenSCADProjects",f2=[{name:"3DBenchy_-_Dualprint_-_Hull_Box_Bridge_walls_Rod-holder_Chimney_-_3DBenchy.com.stl",url:"./examples/3DBenchy_-_Dualprint_-_Hull_Box_Bridge_walls_Rod-holder_Chimney_-_3DBenchy.com.stl",path:"examples/3DBenchy_-_Dualprint_-_Hull_Box_Bridge_walls_Rod-holder_Chimney_-_3DBenchy.com.stl",scadContent:"// No SCAD source for this binary STL example"}],Zd=new c2(Gh,u2);function d2(){const[o,t]=kt.useState([]),[i,r]=kt.useState(!0),[l,c]=kt.useState(null),[d,h]=kt.useState(!1),[m,p]=kt.useState(),[x,g]=kt.useState({current:0,total:0}),[_,y]=kt.useState(null),[E,T]=kt.useState(450),[M,v]=kt.useState(""),O=kt.useRef(null),D=kt.useCallback(async()=>{r(!0),c(null);try{const k=await Zd.fetchAllFiles();t([...f2,...k])}catch(k){const w=k.message||"";w==="RATE_LIMITED"?(p("The GitHub API rate limit has been reached. Please provide a Personal Access Token (PAT) to continue."),h(!0)):w.startsWith("GitHub API Error")?(p(`GitHub API Error: ${w.replace("GitHub API Error: ","")}. Please update your Access Token.`),h(!0)):c(w||"Failed to fetch repository contents.")}finally{r(!1)}},[]);kt.useEffect(()=>{D()},[D]),kt.useEffect(()=>{_&&_.userData.scadUrl&&!_.userData.scadContent&&(async()=>{try{const w=await Zd.fetchFileContent(_.userData.scadUrl);_.userData.scadContent=w,y({..._})}catch(w){console.warn("Failed to load lazy SCAD content",w)}})()},[_]);const F=k=>{Zd.setToken(k),h(!1),D()},V=(k,w)=>{g({current:k,total:w})},U=()=>{p("Please enter your GitHub Personal Access Token."),h(!0)},P=kt.useCallback(k=>{O.current&&(k&&!_?(O.current.style.display="block",O.current.textContent=k.name,O.current.style.left=`${k.x}px`,O.current.style.top=`${k.y}px`):O.current.style.display="none")},[_]);return Bt.jsxs("div",{className:"w-full h-screen bg-gray-50 relative overflow-hidden font-sans select-none",children:[Bt.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-sky-400 via-indigo-400 to-orange-500 pointer-events-none"}),!i&&!l&&o.length>0&&Bt.jsx("div",{className:"absolute inset-0 z-0",children:Bt.jsx(VT,{files:o,onModelSelect:y,onProgress:V,onHover:P,panelSize:E,selectedModel:_,searchTerm:M})}),Bt.jsx("div",{ref:O,className:"absolute pointer-events-none z-[1] px-4 py-2 text-gray-900 text-sm rounded-lg shadow-xl font-mono tracking-wide whitespace-nowrap hidden mt-4 border",style:{transform:"translateX(-50%)",backgroundColor:"#ffe4e9",borderColor:"#ffe4e9"}}),Bt.jsx("div",{className:"absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900 from-10% via-gray-900/40 to-transparent pointer-events-none z-20"}),Bt.jsx("div",{className:"absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-900 from-10% via-gray-900/40 to-transparent pointer-events-none z-20"}),Bt.jsxs("div",{className:`absolute top-0 left-0 p-8 z-30 transition-opacity duration-500 ${_?"opacity-0 pointer-events-none":"opacity-100"}`,children:[Bt.jsxs("h1",{className:"text-4xl font-black text-white tracking-tighter mb-2 drop-shadow-md",children:["ANDREW",Bt.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-orange-100",children:"PHUNG"})]}),Bt.jsxs("a",{href:`https://github.com/${Gh}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-white/80 text-sm font-mono drop-shadow hover:text-white transition-colors w-fit pointer-events-auto",children:[Bt.jsx($T,{size:16}),Bt.jsx("span",{children:Gh})]})]}),Bt.jsx("div",{className:`absolute z-30 transition-all duration-500
        w-full px-4 bottom-8 left-0
        sm:w-auto sm:px-0 sm:bottom-auto sm:left-auto sm:top-8 sm:right-8
        ${_?"opacity-0 scale-95 pointer-events-none":"opacity-100 scale-100"}`,children:Bt.jsxs("div",{className:"relative group w-full sm:w-auto",children:[Bt.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:Bt.jsx(a2,{size:16,className:"text-white/60 group-focus-within:text-white transition-colors"})}),Bt.jsx("input",{type:"text",value:M,onChange:k=>v(k.target.value),placeholder:"Search",className:"bg-gray-900/30 backdrop-blur-md border border-white/10 text-white text-sm rounded-full pl-10 pr-4 py-2 w-full sm:w-48 sm:focus:w-64 transition-all duration-300 focus:outline-none focus:bg-gray-900/50 focus:border-white/30 placeholder-white/40 font-mono shadow-lg"})]})}),(i||o.length>0&&x.current<o.length)&&Bt.jsxs("div",{className:"absolute bottom-8 left-8 z-40 bg-white px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700",children:[Bt.jsx(n2,{className:"animate-spin text-purple-600",size:24}),Bt.jsxs("div",{children:[Bt.jsx("div",{className:"text-gray-900 text-sm font-semibold",children:i?"Fetching Repository...":"Rendering Models"}),Bt.jsx("div",{className:"text-xs text-gray-600 font-mono mt-1",children:x.total>0?`${x.current} / ${x.total} loaded`:"Connecting to GitHub API..."})]})]}),l&&!d&&Bt.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-50",children:Bt.jsxs("div",{className:"text-center max-w-lg p-8 bg-gray-900/90 backdrop-blur rounded-2xl border border-white/20 shadow-2xl",children:[Bt.jsx("h2",{className:"text-red-500 text-xl font-bold mb-2",children:"Connection Error"}),Bt.jsx("p",{className:"text-white mb-6",children:l}),Bt.jsxs("div",{className:"flex gap-4 justify-center",children:[Bt.jsx("button",{onClick:D,className:"px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors font-semibold",children:"Retry"}),Bt.jsxs("button",{onClick:U,className:"px-6 py-2 bg-purple-500/50 hover:bg-purple-500/60 text-white border border-white/20 rounded-lg transition-colors flex items-center gap-2",children:[Bt.jsx(O_,{size:16}),"Update API Key"]})]})]})}),Bt.jsx(o2,{model:_,visible:!!_,onClose:()=>y(null),width:E,onResize:T}),Bt.jsx(l2,{isOpen:d,onSubmit:F,message:m}),!_&&!i&&Bt.jsxs("div",{className:"absolute bottom-8 right-8 text-right text-white/90 text-xs font-mono pointer-events-none drop-shadow-sm z-30 hidden sm:block",children:[Bt.jsx("p",{children:"SCROLL to navigate"}),Bt.jsx("p",{children:"CLICK to inspect / DRAG to rotate"})]})]})}const z_=document.getElementById("root");if(!z_)throw new Error("Could not find root element to mount to");const h2=QS.createRoot(z_);h2.render(Bt.jsx(XS.StrictMode,{children:Bt.jsx(d2,{})}));
