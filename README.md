<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Object Inverse

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invert an object, such that keys become values and values become keys, according to a transform function.



<section class="usage">

## Usage

```javascript
import invertBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-object-inverse-by@v0.2.0-esm/index.mjs';
```

#### invertBy( obj, \[options,] transform )

Inverts an `object`, such that keys become values and values become keys, according to a `transform` function.

```javascript
function transform( key, value ) {
    return value;
}
var obj = {
    'a': 'beep',
    'b': 'boop'
};
var out = invertBy( obj, transform );
// returns { 'beep': 'a', 'boop': 'b' }
```

The function accepts the following `options`:

-   **duplicates**: `boolean` indicating whether to store keys mapped to duplicate values in `arrays`. Default: `true`.

By default, keys mapped to duplicate values are stored in `arrays`.

```javascript
function transform( key, value ) {
    return value;
}
var obj = {
    'a': 'beep',
    'b': 'beep'
};
var out = invertBy( obj, transform );
// returns { 'beep': [ 'a', 'b' ] }
```

To **not** allow duplicates, set the `duplicates` option to `false`. The output `key-value` pair will be the `key` most recently inserted into the input `object`.

```javascript
function transform( key, value ) {
    return value;
}
var obj = {};
obj.a = 'beep';
obj.b = 'boop';
obj.c = 'beep'; // inserted after `a`

var opts = {
    'duplicates': false
};
var out = invertBy( obj, opts, transform );
// returns { 'beep': 'c', 'boop': 'b' }
```

The `transform` function is provided three arguments:

-   `key`: object key
-   `value`: object value corresponding to `key`
-   `obj`: input object

```javascript
function transform( key, value, o ) {
    if ( key === 'name' ) {
        return value;
    }
    return o.name + ':' + value;
}
var obj = {
    'name': 'foo',
    'a': 'beep',
    'b': 'boop'
};
var out = invertBy( obj, transform );
// returns { 'foo': 'name', 'foo:beep': 'a', 'foo:boop': 'b' }
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Beware when providing `objects` having values which are themselves `objects`. This function relies on native `object` serialization (`#toString`) when converting `transform` function return values to keys.

    ```javascript
    function transform( key, value ) {
        return value;
    }
    var obj = {
        'a': [ 1, 2, 3 ],
        'b': {
            'c': 'd'
        }
    };

    var out = invertBy( obj, transform );
    // returns { '1,2,3': 'a', '[object Object]': 'b' }
    ```

-   Insertion order is not guaranteed, as `object` key enumeration is not specified according to the [ECMAScript specification][ecma-262-for-in]. In practice, however, most engines use insertion order to sort an `object`'s keys, thus allowing for deterministic inversion.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import invertBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-object-inverse-by@v0.2.0-esm/index.mjs';

var keys;
var arr;
var out;
var i;

function transform( key, value ) {
    return value;
}

// Create an array of random integers...
arr = new Array( 1000 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = round( randu()*100.0 );
}
// Invert the array to determine value frequency...
out = invertBy( arr, transform );
keys = Object.keys( out );
for ( i = 0; i < keys.length; i++ ) {
    if ( out[ i ] ) {
        out[ i ] = out[ i ].length;
    } else {
        out[ i ] = 0;
    }
}
console.dir( out );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-object-inverse`][@stdlib/utils/object-inverse]</span><span class="delimiter">: </span><span class="description">invert an object, such that keys become values and values become keys.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-object-inverse-by.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-object-inverse-by

[test-image]: https://github.com/stdlib-js/utils-object-inverse-by/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/utils-object-inverse-by/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-object-inverse-by/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-object-inverse-by?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-object-inverse-by.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-object-inverse-by/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-object-inverse-by/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-object-inverse-by/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-object-inverse-by/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-object-inverse-by/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-object-inverse-by/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-object-inverse-by/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-object-inverse-by/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-object-inverse-by/main/LICENSE

[ecma-262-for-in]: https://262.ecma-international.org/5.1/#sec-12.6.4

<!-- <related-links> -->

[@stdlib/utils/object-inverse]: https://github.com/stdlib-js/utils-object-inverse/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
