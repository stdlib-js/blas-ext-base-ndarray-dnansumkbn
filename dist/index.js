/** @license Apache-2.0 */

'use strict';

/**
* Compute the sum of a one-dimensional double-precision floating-point ndarray, ignoring `NaN` values and using an improved Kahan–Babuška algorithm.
*
* @module @stdlib/blas-ext-base-ndarray-dnansumkbn
*
* @example
* var Float64Vector = require( '@stdlib/ndarray-vector-float64' );
* var dnansumkbn = require( '@stdlib/blas-ext-base-ndarray-dnansumkbn' );
*
* var x = new Float64Vector( [ 1.0, -2.0, NaN, 2.0 ] );
*
* var v = dnansumkbn( [ x ] );
* // returns 1.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
