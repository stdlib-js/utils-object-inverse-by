// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return Object.keys(Object(r))}var e=void 0!==Object.keys;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(r,e){return null!=r&&i.call(r,e)}var u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"";var f=n()?function(r){var e,t,n;if(null==r)return o.call(r);t=r[c],e=a(r,c);try{r[c]=void 0}catch(e){return o.call(r)}return n=o.call(r),e?r[c]=t:delete r[c],n}:function(r){return o.call(r)};function l(r){return"[object Arguments]"===f(r)}var s=function(){return l(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function y(r){return"number"==typeof r}function d(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function b(r,e,t){var n=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+d(o):d(o)+r,n&&(r="-"+r)),r}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!y(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=b(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=b(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===v.call(r.specifier)?v.call(t):h.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(r){return"string"==typeof r}var j=Math.abs,O=String.prototype.toLowerCase,E=String.prototype.toUpperCase,S=String.prototype.replace,_=/e\+(\d)$/,T=/e-(\d)$/,k=/^(\d+)$/,x=/^(\d+)e/,I=/\.0$/,V=/\.0*e/,P=/(\..*[^0])0*e/;function A(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":j(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=S.call(t,P,"$1e"),t=S.call(t,V,"e"),t=S.call(t,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=S.call(t,_,"e+0$1"),t=S.call(t,T,"e-0$1"),r.alternate&&(t=S.call(t,k,"$1."),t=S.call(t,x,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===E.call(r.specifier)?E.call(t):O.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function N(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var $=String.fromCharCode,C=isNaN,L=Array.isArray;function B(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R(r){var e,t,n,o,i,a,u,c,f;if(!L(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(m(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(o=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=w(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):$(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=N(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function X(r){var e,t,n,o;for(t=[],o=0,n=G.exec(r);n;)(e=r.slice(o,G.lastIndex-n[0].length)).length&&t.push(e),t.push(W(n)),o=G.lastIndex,n=G.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function Z(r){return"string"==typeof r}function M(r){var e,t,n;if(!Z(r))throw new TypeError(M("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=X(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return R.apply(null,t)}var Y,U=Object.prototype,H=U.toString,z=U.__defineGetter__,D=U.__defineSetter__,q=U.__lookupGetter__,J=U.__lookupSetter__;Y=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(M("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===H.call(t))throw new TypeError(M("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(q.call(r,e)||J.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(r,e,t.get),a&&D&&D.call(r,e,t.set),r};var K=Y;function Q(r,e,t){K(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function rr(r){return"string"==typeof r}var er=String.prototype.valueOf;var tr=n();function nr(r){return"object"==typeof r&&(r instanceof String||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object String]"===f(r)))}function or(r){return rr(r)||nr(r)}function ir(r){return"number"==typeof r}Q(or,"isPrimitive",rr),Q(or,"isObject",nr);var ar=Number,ur=ar.prototype.toString;var cr=n();function fr(r){return"object"==typeof r&&(r instanceof ar||(cr?function(r){try{return ur.call(r),!0}catch(r){return!1}}(r):"[object Number]"===f(r)))}function lr(r){return ir(r)||fr(r)}function sr(r){return r!=r}function pr(r){return ir(r)&&sr(r)}function gr(r){return fr(r)&&sr(r.valueOf())}function yr(r){return pr(r)||gr(r)}Q(lr,"isPrimitive",ir),Q(lr,"isObject",fr),Q(yr,"isPrimitive",pr),Q(yr,"isObject",gr);var dr=Number.POSITIVE_INFINITY,br=ar.NEGATIVE_INFINITY,hr=Math.floor;function vr(r){return hr(r)===r}function wr(r){return r<dr&&r>br&&vr(r)}function mr(r){return ir(r)&&wr(r)}function jr(r){return fr(r)&&wr(r.valueOf())}function Or(r){return mr(r)||jr(r)}Q(Or,"isPrimitive",mr),Q(Or,"isObject",jr);var Er=Object.prototype.propertyIsEnumerable;var Sr=!Er.call("beep","0");function _r(r,e){var t;return null!=r&&(!(t=Er.call(r,e))&&Sr&&or(r)?!pr(e=+e)&&mr(e)&&e>=0&&e<r.length:t)}var Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===f(r)};var kr=s?l:function(r){return null!==r&&"object"==typeof r&&!Tr(r)&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=4294967295&&a(r,"callee")&&!_r(r,"callee")},xr=Array.prototype.slice;function Ir(r){return null!==r&&"object"==typeof r}Q(Ir,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(M("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ir));var Vr=_r((function(){}),"prototype"),Pr=!_r({toString:null},"toString");function Ar(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&vr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Fr(r,e,t){var n,o;if(!Ar(r)&&!rr(r))throw new TypeError(M("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!mr(t))throw new TypeError(M("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;o=t}else(o=n+t)<0&&(o=0)}else o=0;if(yr(e)){for(;o<n;o++)if(yr(r[o]))return o}else for(;o<n;o++)if(r[o]===e)return o;return-1}var Nr=/./;function $r(r){return"boolean"==typeof r}var Cr=Boolean,Lr=Boolean.prototype.toString;var Br=n();function Rr(r){return"object"==typeof r&&(r instanceof Cr||(Br?function(r){try{return Lr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===f(r)))}function Gr(r){return $r(r)||Rr(r)}function Wr(){return new Function("return this;")()}Q(Gr,"isPrimitive",$r),Q(Gr,"isObject",Rr);var Xr="object"==typeof self?self:null,Zr="object"==typeof window?window:null,Mr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yr="object"==typeof Mr?Mr:null,Ur="object"==typeof globalThis?globalThis:null;var Hr=function(r){if(arguments.length){if(!$r(r))throw new TypeError(M("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Wr()}if(Ur)return Ur;if(Xr)return Xr;if(Zr)return Zr;if(Yr)return Yr;throw new Error("unexpected error. Unable to resolve global object.")}(),zr=Hr.document&&Hr.document.childNodes,Dr=Int8Array;function qr(){return/^\s*function\s*([^(]*)/i}var Jr=/^\s*function\s*([^(]*)/i;function Kr(r){var e,t,n,o;if(("Object"===(t=f(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Jr.exec(n.toString()))return e[1]}return Ir(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}Q(qr,"REGEXP",Jr);var Qr="function"==typeof Nr||"object"==typeof Dr||"function"==typeof zr?function(r){return Kr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?Kr(r).toLowerCase():e};function re(r){return r.constructor&&r.constructor.prototype===r}var ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],te="undefined"==typeof window?void 0:window;var ne=function(){var r;if("undefined"===Qr(te))return!1;for(r in te)try{-1===Fr(ee,r)&&a(te,r)&&null!==te[r]&&"object"===Qr(te[r])&&re(te[r])}catch(r){return!0}return!1}(),oe="undefined"!=typeof window;var ie=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var ae=e?function(){return 2!==(r(arguments)||"").length}(1,2)?function(e){return kr(e)?r(xr.call(e)):r(e)}:r:function(r){var e,t,n,o,i,u,c;if(o=[],kr(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!a(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!Ir(r))return o;t=Vr&&n}for(i in r)t&&"prototype"===i||!a(r,i)||o.push(String(i));if(Pr)for(e=function(r){if(!1===oe&&!ne)return re(r);try{return re(r)}catch(r){return!1}}(r),c=0;c<ie.length;c++)u=ie[c],e&&"constructor"===u||!a(r,u)||o.push(String(u));return o};function ue(r){return"function"===Qr(r)}var ce,fe=Object,le=Object.getPrototypeOf;ce=ue(Object.getPrototypeOf)?le:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===f(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var se=ce;var pe=Object.prototype;function ge(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Tr(r)}(r)&&(e=function(r){return null==r?null:(r=fe(r),se(r))}(r),!e||!a(r,"constructor")&&a(e,"constructor")&&ue(e.constructor)&&"[object Function]"===f(e.constructor)&&a(e,"isPrototypeOf")&&ue(e.isPrototypeOf)&&(e===pe||function(r){var e;for(e in r)if(!a(r,e))return!1;return!0}(r)))}function ye(r,e,t){var n,o,i,u,c,f,l,s,p;if(!Ir(r))throw new TypeError(M("invalid argument. First argument must be an object (except null). Value: `%s`.",r));if(n=!0,2===arguments.length)l=e;else{if(!ge(e))throw new TypeError(M("invalid argument. Options argument must be an object. Value: `%s`.",e));if(a(e,"duplicates")&&!$r(n=e.duplicates))throw new TypeError(M("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",n));l=t}if(!ue(l))throw new TypeError(M("invalid argument. Last argument must be a function. Value: `%s`.",l));if(i=(o=ae(r)).length,f={},n)for(p=0;p<i;p++)a(f,c=l(u=o[p],r[u],r))?(s=f[c],Tr(s)?f[c].push(u):f[c]=[s,u]):f[c]=u;else for(p=0;p<i;p++)f[c=l(u=o[p],r[u],r)]=u;return f}export{ye as default};
//# sourceMappingURL=mod.js.map
