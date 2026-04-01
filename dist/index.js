/** @license Apache-2.0 */

'use strict';

/**
* Compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas-ext-base-ndarray-dnansumkbn
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var dnansumkbn = require( '@stdlib/blas-ext-base-ndarray-dnansumkbn' );
*
* var xbuf = new Float64Array( [ 1.0, -2.0, NaN, 2.0 ] );
* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
*
* var v = dnansumkbn( [ x ] );
* // returns 1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
