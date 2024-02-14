// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).invertBy=e()}(this,(function(){"use strict";function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f,l=n()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[c]=t:delete r[c],n}:function(r){return o.call(r)};function s(r){return"[object Arguments]"===l(r)}f=function(){return s(arguments)}();var p=f,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var b=Object.defineProperty;function y(r){return"number"==typeof r}function h(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function d(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+h(o):h(o)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,m=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=d(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=d(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===m.call(r.specifier)?m.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function j(r){return"string"==typeof r}var O=Math.abs,S=String.prototype.toLowerCase,E=String.prototype.toUpperCase,_=String.prototype.replace,I=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,x=/^(\d+)e/,P=/\.0$/,V=/\.0*e/,N=/(\..*[^0])0*e/;function A(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":O(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=_.call(t,N,"$1e"),t=_.call(t,V,"e"),t=_.call(t,P,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=_.call(t,I,"e+0$1"),t=_.call(t,T,"e-0$1"),r.alternate&&(t=_.call(t,k,"$1."),t=_.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):S.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function $(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var B=String.fromCharCode,C=isNaN,L=Array.isArray;function G(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,t,n,o,i,a,u,c,f;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(j(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=G(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):B(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=$(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function M(r){var e,t,n,o;for(t=[],o=0,n=W.exec(r);n;)(e=r.slice(o,W.lastIndex-n[0].length)).length&&t.push(e),t.push(Y(n)),o=W.lastIndex,n=W.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function X(r){return"string"==typeof r}function Z(r){var e,t;if(!X(r))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[M(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return R.apply(null,e)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?b:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(J.call(r,e)||K.call(r,e)?(n=r.__proto__,r.__proto__=H,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(r,e,t.get),a&&q&&q.call(r,e,t.set),r};var Q=U;function rr(r,e,t){Q(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function er(r){return"string"==typeof r}var tr=String.prototype.valueOf;var nr=n();function or(r){return"object"==typeof r&&(r instanceof String||(nr?function(r){try{return tr.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function ir(r){return er(r)||or(r)}function ar(r){return"number"==typeof r}rr(ir,"isPrimitive",er),rr(ir,"isObject",or);var ur=Number,cr=ur.prototype.toString;var fr=n();function lr(r){return"object"==typeof r&&(r instanceof ur||(fr?function(r){try{return cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function sr(r){return ar(r)||lr(r)}function pr(r){return r!=r}function gr(r){return ar(r)&&pr(r)}function br(r){return lr(r)&&pr(r.valueOf())}function yr(r){return gr(r)||br(r)}rr(sr,"isPrimitive",ar),rr(sr,"isObject",lr),rr(yr,"isPrimitive",gr),rr(yr,"isObject",br);var hr=Number.POSITIVE_INFINITY,dr=ur.NEGATIVE_INFINITY,vr=Math.floor;function mr(r){return vr(r)===r}function wr(r){return r<hr&&r>dr&&mr(r)}function jr(r){return ar(r)&&wr(r)}function Or(r){return lr(r)&&wr(r.valueOf())}function Sr(r){return jr(r)||Or(r)}rr(Sr,"isPrimitive",jr),rr(Sr,"isObject",Or);var Er=Object.prototype.propertyIsEnumerable;var _r=!Er.call("beep","0");var Ir,Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};Ir=p?s:function(r){return null!==r&&"object"==typeof r&&!Tr(r)&&"number"==typeof r.length&&mr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!function(r,e){var t;return null!=r&&(!(t=Er.call(r,e))&&_r&&ir(r)?!gr(e=+e)&&jr(e)&&e>=0&&e<r.length:t)}(r,"callee")};var kr=Ir,xr=Array.prototype.slice;function Pr(r){return null!==r&&"object"==typeof r}function Vr(r){return"string"==typeof r}rr(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(Z("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr));var Nr=String.prototype.valueOf;var Ar=n();function Fr(r){return"object"==typeof r&&(r instanceof String||(Ar?function(r){try{return Nr.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function $r(r){return Vr(r)||Fr(r)}function Br(r){return"number"==typeof r}rr($r,"isPrimitive",Vr),rr($r,"isObject",Fr);var Cr=Number,Lr=Cr.prototype.toString;var Gr=n();function Rr(r){return"object"==typeof r&&(r instanceof Cr||(Gr?function(r){try{return Lr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function Wr(r){return Br(r)||Rr(r)}function Yr(r){return r!=r}function Mr(r){return Br(r)&&Yr(r)}function Xr(r){return Rr(r)&&Yr(r.valueOf())}function Zr(r){return Mr(r)||Xr(r)}rr(Wr,"isPrimitive",Br),rr(Wr,"isObject",Rr),rr(Zr,"isPrimitive",Mr),rr(Zr,"isObject",Xr);var Ur=Number.POSITIVE_INFINITY,Hr=Cr.NEGATIVE_INFINITY,zr=Math.floor;function Dr(r){return zr(r)===r}function qr(r){return r<Ur&&r>Hr&&Dr(r)}function Jr(r){return Br(r)&&qr(r)}function Kr(r){return Rr(r)&&qr(r.valueOf())}function Qr(r){return Jr(r)||Kr(r)}rr(Qr,"isPrimitive",Jr),rr(Qr,"isObject",Kr);var re=Object.prototype.propertyIsEnumerable;var ee=!re.call("beep","0");function te(r,e){var t;return null!=r&&(!(t=re.call(r,e))&&ee&&$r(r)?!Mr(e=+e)&&Jr(e)&&e>=0&&e<r.length:t)}var ne=te((function(){}),"prototype"),oe=!te({toString:null},"toString");function ie(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Dr(r.length)&&r.length>=0&&r.length<=9007199254740991}function ae(r,e,t){var n,o;if(!ie(r)&&!Vr(r))throw new TypeError(Z("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Jr(t))throw new TypeError(Z("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(Zr(e)){for(;o<n;o++)if(Zr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var ue=/./;function ce(r){return"boolean"==typeof r}var fe=Boolean,le=Boolean.prototype.toString;var se=n();function pe(r){return"object"==typeof r&&(r instanceof fe||(se?function(r){try{return le.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===l(r)))}function ge(r){return ce(r)||pe(r)}function be(){return new Function("return this;")()}rr(ge,"isPrimitive",ce),rr(ge,"isObject",pe);var ye="object"==typeof self?self:null,he="object"==typeof window?window:null,de="object"==typeof global?global:null,ve="object"==typeof globalThis?globalThis:null;var me=function(r){if(arguments.length){if(!ce(r))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return be()}if(ve)return ve;if(ye)return ye;if(he)return he;if(de)return de;throw new Error("unexpected error. Unable to resolve global object.")}(),we=me.document&&me.document.childNodes,je=Int8Array;function Oe(){return/^\s*function\s*([^(]*)/i}var Se=/^\s*function\s*([^(]*)/i;function Ee(r){var e,t,n,o;if(("Object"===(t=l(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Se.exec(n.toString()))return e[1]}return Pr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}rr(Oe,"REGEXP",Se);var _e="function"==typeof ue||"object"==typeof je||"function"==typeof we?function(r){return Ee(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Ee(r).toLowerCase():e};function Ie(r){return r.constructor&&r.constructor.prototype===r}var Te=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ke="undefined"==typeof window?void 0:window;var xe=function(){var r;if("undefined"===_e(ke))return!1;for(r in ke)try{-1===ae(Te,r)&&a(ke,r)&&null!==ke[r]&&"object"===_e(ke[r])&&Ie(ke[r])}catch(r){return!0}return!1}(),Pe="undefined"!=typeof window;var Ve,Ne=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ve=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return kr(e)?r(xr.call(e)):r(e)}:r:function(r){var e,t,n,o,i,u,c;if(o=[],kr(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Pr(r))return o;t=ne&&n}for(i in r)t&&"prototype"===i||!a(r,i)||o.push(String(i));if(oe)for(e=function(r){if(!1===Pe&&!xe)return Ie(r);try{return Ie(r)}catch(r){return!1}}(r),c=0;c<Ne.length;c++)u=Ne[c],e&&"constructor"===u||!a(r,u)||o.push(String(u));return o};var Ae=Ve;function Fe(r){return"function"===_e(r)}var $e,Be=Object,Ce=Object.getPrototypeOf;$e=Fe(Object.getPrototypeOf)?Ce:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===l(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Le=$e;var Ge=Object.prototype;function Re(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Tr(r)}(r)&&(e=function(r){return null==r?null:(r=Be(r),Le(r))}(r),!e||!a(r,"constructor")&&a(e,"constructor")&&Fe(e.constructor)&&"[object Function]"===l(e.constructor)&&a(e,"isPrototypeOf")&&Fe(e.isPrototypeOf)&&(e===Ge||function(r){var e;for(e in r)if(!a(r,e))return!1;return!0}(r)))}return function(r,e,t){var n,o,i,u,c,f,l,s,p;if(!Pr(r))throw new TypeError(Z("invalid argument. First argument must be an object (except null). Value: `%s`.",r));if(n=!0,2===arguments.length)l=e;else{if(!Re(e))throw new TypeError(Z("invalid argument. Options argument must be an object. Value: `%s`.",e));if(a(e,"duplicates")&&!ce(n=e.duplicates))throw new TypeError(Z("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",n));l=t}if(!Fe(l))throw new TypeError(Z("invalid argument. Last argument must be a function. Value: `%s`.",l));if(i=(o=Ae(r)).length,f={},n)for(p=0;p<i;p++)a(f,c=l(u=o[p],r[u],r))?(s=f[c],Tr(s)?f[c].push(u):f[c]=[s,u]):f[c]=u;else for(p=0;p<i;p++)f[c=l(u=o[p],r[u],r)]=u;return f}}));
//# sourceMappingURL=index.js.map
