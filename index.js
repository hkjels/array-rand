
/**
 * Module dependencies.
 */

var rand = require('random');

/**
 * array_rand
 *
 * Return a random value from an array.
 * @param Array arr
 * @return Mixed
 */

var array_rand = function (arr) {
  return arr[rand(arr.length)];
};

// Expose `array_rand`

module.exports = array_rand;

