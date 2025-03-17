// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).invertBy=e()}(this,(function(){"use strict";function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var c="function"==typeof Symbol?Symbol:void 0,u="function"==typeof c?c.toStringTag:"";var f,l=n()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[u],e=a(r,u);try{r[u]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[u]=t:delete r[u],n}:function(r){return o.call(r)};function s(r){return"[object Arguments]"===l(r)}f=function(){return s(arguments)}();var p=f,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var y=Object.defineProperty;function d(r){return"number"==typeof r}function h(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function b(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+h(o):h(o)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,w=String.prototype.toUpperCase;function m(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!d(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=b(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=b(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===w.call(r.specifier)?w.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var j=Math.abs,O=String.prototype.toLowerCase,S=String.prototype.toUpperCase,E=String.prototype.replace,_=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,x=/^(\d+)e/,I=/\.0$/,P=/\.0*e/,V=/(\..*[^0])0*e/;function A(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!d(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":j(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=E.call(t,V,"$1e"),t=E.call(t,P,"e"),t=E.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=E.call(t,_,"e+0$1"),t=E.call(t,T,"e-0$1"),r.alternate&&(t=E.call(t,k,"$1."),t=E.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===S.call(r.specifier)?S.call(t):O.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var C=String.fromCharCode,W=Array.isArray;function $(r){return r!=r}function B(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function N(r){var e,t,n,o,i,a,c,u,f,l,s,p,g;if(!W(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if(n=r[u],"string"==typeof n)a+=n;else{if(e=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=m(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!$(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(i)?String(n.arg):C(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+F(g):F(g)+l)),a+=n.arg||"",c+=1}return a}var L=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function G(r){var e,t,n,o;for(t=[],o=0,n=L.exec(r);n;)(e=r.slice(o,L.lastIndex-n[0].length)).length&&t.push(e),t.push(R(n)),o=L.lastIndex,n=L.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function X(r){var e,t;if("string"!=typeof r)throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[G(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return N.apply(null,e)}var Z,J=Object.prototype,M=J.toString,U=J.__defineGetter__,Y=J.__defineSetter__,H=J.__lookupGetter__,q=J.__lookupSetter__;Z=function(){try{return g({},"x",{}),!0}catch(r){return!1}}()?y:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(H.call(r,e)||q.call(r,e)?(n=r.__proto__,r.__proto__=J,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&U&&U.call(r,e,t.get),a&&Y&&Y.call(r,e,t.set),r};var z=Z;function D(r,e,t){z(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function K(r){return"string"==typeof r}var Q=String.prototype.valueOf;var rr=n();function er(r){return"object"==typeof r&&(r instanceof String||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object String]"===l(r)))}function tr(r){return K(r)||er(r)}function nr(r){return"number"==typeof r}D(tr,"isPrimitive",K),D(tr,"isObject",er);var or=Number,ir=or.prototype.toString;var ar=n();function cr(r){return"object"==typeof r&&(r instanceof or||(ar?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object Number]"===l(r)))}function ur(r){return nr(r)||cr(r)}function fr(r){return r!=r}function lr(r){return nr(r)&&fr(r)}function sr(r){return cr(r)&&fr(r.valueOf())}function pr(r){return lr(r)||sr(r)}D(ur,"isPrimitive",nr),D(ur,"isObject",cr),D(pr,"isPrimitive",lr),D(pr,"isObject",sr);var gr=Number.POSITIVE_INFINITY,yr=or.NEGATIVE_INFINITY,dr=Math.floor;function hr(r){return dr(r)===r}function br(r){return r<gr&&r>yr&&hr(r)}function vr(r){return nr(r)&&br(r)}function wr(r){return cr(r)&&br(r.valueOf())}function mr(r){return vr(r)||wr(r)}D(mr,"isPrimitive",vr),D(mr,"isObject",wr);var jr=Object.prototype.propertyIsEnumerable;var Or=!jr.call("beep","0");function Sr(r,e){var t;return null!=r&&(!(t=jr.call(r,e))&&Or&&tr(r)?!lr(e=+e)&&vr(e)&&e>=0&&e<r.length:t)}var Er=Array.isArray?Array.isArray:function(r){return"[object Array]"===l(r)};var _r=p?s:function(r){return null!==r&&"object"==typeof r&&!Er(r)&&"number"==typeof r.length&&hr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!Sr(r,"callee")},Tr=Array.prototype.slice;function kr(r){return null!==r&&"object"==typeof r}D(kr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Er(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(kr));var xr=Sr((function(){}),"prototype"),Ir=!Sr({toString:null},"toString"),Pr=9007199254740991;function Vr(r,e,t){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&hr(i.length)&&i.length>=0&&i.length<=Pr||K(r)))throw new TypeError(X("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!vr(t))throw new TypeError(X("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(pr(e)){for(;o<n;o++)if(pr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Ar=/./;function Fr(r){return"boolean"==typeof r}var Cr=Boolean,Wr=Boolean.prototype.toString;var $r=n();function Br(r){return"object"==typeof r&&(r instanceof Cr||($r?function(r){try{return Wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===l(r)))}function Nr(r){return Fr(r)||Br(r)}D(Nr,"isPrimitive",Fr),D(Nr,"isObject",Br);var Lr="object"==typeof self?self:null,Rr="object"==typeof window?window:null,Gr="object"==typeof global?global:null,Xr="object"==typeof globalThis?globalThis:null;var Zr=function(r){if(arguments.length){if(!Fr(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Xr)return Xr;if(Lr)return Lr;if(Rr)return Rr;if(Gr)return Gr;throw new Error("unexpected error. Unable to resolve global object.")}(),Jr=Zr.document&&Zr.document.childNodes,Mr=Int8Array;function Ur(){return/^\s*function\s*([^(]*)/i}var Yr=/^\s*function\s*([^(]*)/i;function Hr(r){var e,t,n,o;if(("Object"===(t=l(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Yr.exec(n.toString()))return e[1]}return kr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}D(Ur,"REGEXP",Yr);var qr="function"==typeof Ar||"object"==typeof Mr||"function"==typeof Jr?function(r){return Hr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Hr(r).toLowerCase():e};function zr(r){return r.constructor&&r.constructor.prototype===r}var Dr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Kr="undefined"==typeof window?void 0:window;var Qr=function(){var r;if("undefined"===qr(Kr))return!1;for(r in Kr)try{-1===Vr(Dr,r)&&a(Kr,r)&&null!==Kr[r]&&"object"===qr(Kr[r])&&zr(Kr[r])}catch(r){return!0}return!1}(),re="undefined"!=typeof window;var ee,te=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ee=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return _r(e)?r(Tr.call(e)):r(e)}:r:function(r){var e,t,n,o,i,c,u;if(o=[],_r(r)){for(u=0;u<r.length;u++)o.push(u.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(u=0;u<r.length;u++)o.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!kr(r))return o;t=xr&&n}for(i in r)t&&"prototype"===i||!a(r,i)||o.push(String(i));if(Ir)for(e=function(r){if(!1===re&&!Qr)return zr(r);try{return zr(r)}catch(r){return!1}}(r),u=0;u<te.length;u++)c=te[u],e&&"constructor"===c||!a(r,c)||o.push(String(c));return o};var ne=ee;function oe(r){return"function"===qr(r)}var ie,ae=Object,ce=Object.getPrototypeOf;ie=oe(Object.getPrototypeOf)?ce:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===l(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ue=ie;var fe=Object.prototype;function le(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Er(r)}(r)&&(e=function(r){return null==r?null:(r=ae(r),ue(r))}(r),!e||!a(r,"constructor")&&a(e,"constructor")&&oe(e.constructor)&&"[object Function]"===l(e.constructor)&&a(e,"isPrototypeOf")&&oe(e.isPrototypeOf)&&(e===fe||function(r){var e;for(e in r)if(!a(r,e))return!1;return!0}(r)))}function se(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return function(r,e,t){var n,o,i,c,u,f,l,s,p;if(!kr(r))throw new TypeError(se("1WJES",r));if(n=!0,2===arguments.length)l=e;else{if(!le(e))throw new TypeError(se("1WJ2V",e));if(a(e,"duplicates")&&!Fr(n=e.duplicates))throw new TypeError(se("1WJ2o","duplicates",n));l=t}if(!oe(l))throw new TypeError(se("1WJ3q",l));if(i=(o=ne(r)).length,f={},n)for(p=0;p<i;p++)a(f,u=l(c=o[p],r[c],r))?(s=f[u],Er(s)?f[u].push(c):f[u]=[s,c]):f[u]=c;else for(p=0;p<i;p++)f[u=l(c=o[p],r[c],r)]=c;return f}}));
//# sourceMappingURL=index.js.map
