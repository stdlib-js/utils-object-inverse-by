// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).invertBy=r()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var u=Object.prototype.hasOwnProperty;function i(t,r){return null!=t&&u.call(t,r)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c,l=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[f],r=i(t,f);try{t[f]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[f]=e:delete t[f],n}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===l(t)}c=function(){return a(arguments)}();var p=c,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var y,b=Object.defineProperty,v=Object.prototype,g=v.toString,d=v.__defineGetter__,h=v.__defineSetter__,j=v.__lookupGetter__,m=v.__lookupSetter__;y=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?b:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===g.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===g.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(j.call(t,r)||m.call(t,r)?(n=t.__proto__,t.__proto__=v,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&d&&d.call(t,r,e.get),i&&h&&h.call(t,r,e.set),t};var w=y;function O(t,r,e){w(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var S=String.prototype.valueOf;var E=n();function T(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===l(t)))}function P(t){return _(t)||T(t)}function I(t){return"number"==typeof t}O(P,"isPrimitive",_),O(P,"isObject",T);var A=Number,x=A.prototype.toString;var B=n();function N(t){return"object"==typeof t&&(t instanceof A||(B?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object Number]"===l(t)))}function V(t){return I(t)||N(t)}function k(t){return t!=t}function F(t){return I(t)&&k(t)}function L(t){return N(t)&&k(t.valueOf())}function C(t){return F(t)||L(t)}O(V,"isPrimitive",I),O(V,"isObject",N),O(C,"isPrimitive",F),O(C,"isObject",L);var G=Number.POSITIVE_INFINITY,Y=A.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<G&&t>Y&&X(t)}function R(t){return I(t)&&H(t)}function U(t){return N(t)&&H(t.valueOf())}function W(t){return R(t)||U(t)}O(W,"isPrimitive",R),O(W,"isObject",U);var D=Object.prototype.propertyIsEnumerable;var q=!D.call("beep","0");function z(t,r){var e;return null!=t&&(!(e=D.call(t,r))&&q&&P(t)?!F(r=+r)&&R(r)&&r>=0&&r<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===l(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&i(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}O(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!J(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,r,e){var n,o;if(!rt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!R(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(C(r)){for(;o<n;o++)if(C(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var nt=/./;function ot(t){return"boolean"==typeof t}var ut=Boolean.prototype.toString;var it=n();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(it?function(t){try{return ut.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===l(t)))}function ct(t){return ot(t)||ft(t)}function lt(){return new Function("return this;")()}O(ct,"isPrimitive",ot),O(ct,"isObject",ft);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},yt="object"==typeof st?st:null;var bt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return lt()}if(at)return at;if(pt)return pt;if(yt)return yt;throw new Error("unexpected error. Unable to resolve global object.")}(),vt=bt.document&&bt.document.childNodes,gt=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function jt(t){var r,e,n,o;if(("Object"===(e=l(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ht.exec(n.toString()))return r[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}O(dt,"REGEXP",ht);var mt="function"==typeof nt||"object"==typeof gt||"function"==typeof vt?function(t){return jt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?jt(t).toLowerCase():r};function wt(t){return t.constructor&&t.constructor.prototype===t}var Ot=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t="undefined"==typeof window?void 0:window;var St=function(){var t;if("undefined"===mt(_t))return!1;for(t in _t)try{-1===et(Ot,t)&&i(_t,t)&&null!==_t[t]&&"object"===mt(_t[t])&&wt(_t[t])}catch(t){return!0}return!1}(),Et="undefined"!=typeof window;var Tt,Pt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Tt=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return K(r)?t(Q.call(r)):t(r)}:t:function(t){var r,e,n,o,u,f,c;if(o=[],K(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!i(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!Z(t))return o;e=$&&n}for(u in t)e&&"prototype"===u||!i(t,u)||o.push(String(u));if(tt)for(r=function(t){if(!1===Et&&!St)return wt(t);try{return wt(t)}catch(t){return!1}}(t),c=0;c<Pt.length;c++)f=Pt[c],r&&"constructor"===f||!i(t,f)||o.push(String(f));return o};var It=Tt;function At(t){return"function"===mt(t)}var xt,Bt=Object.getPrototypeOf;xt=At(Object.getPrototypeOf)?Bt:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Nt=xt;var Vt=Object.prototype;function kt(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Nt(t))}(t),!r||!i(t,"constructor")&&i(r,"constructor")&&At(r.constructor)&&"[object Function]"===l(r.constructor)&&i(r,"isPrototypeOf")&&At(r.isPrototypeOf)&&(r===Vt||function(t){var r;for(r in t)if(!i(t,r))return!1;return!0}(t)))}function Ft(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return function(t,r,e){var n,o,u,f,c,l,a,p,s;if(!Z(t))throw new TypeError(Ft("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(n=!0,2===arguments.length)a=r;else{if(!kt(r))throw new TypeError(Ft("0l02h",r));if(i(r,"duplicates")&&!ot(n=r.duplicates))throw new TypeError(Ft("0l030","duplicates",n));a=e}if(!At(a))throw new TypeError(Ft("0l043",a));if(u=(o=It(t)).length,l={},n)for(s=0;s<u;s++)i(l,c=a(f=o[s],t[f],t))?(p=l[c],J(p)?l[c].push(f):l[c]=[p,f]):l[c]=f;else for(s=0;s<u;s++)l[c=a(f=o[s],t[f],t)]=f;return l}}));
//# sourceMappingURL=browser.js.map
