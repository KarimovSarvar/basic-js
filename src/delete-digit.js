const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  const num_digits = [];
  while (n) {
      num_digits.push(n % 10);
      n = Math.floor(n / 10);
  }
  for (let index_n = 0; index_n < num_digits.length; index_n++) {
      let k = 0;
      for (let i = num_digits.length - 1; i >= 0; i--) {
          if (i !== index_n) {
              k = k * 10 + num_digits[i];
          }
      }
      result = Math.max(k, result);
  }
  return result;
}

module.exports = {
  deleteDigit
};
