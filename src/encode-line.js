const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (typeof str === 'string' && str.length > 0) {
    let result = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        result += (count > 1 ? count : '') + str[i];
        count = 1;
      }
    }

    return result;
  } else {
    return '';
  }
}

module.exports = {
  encodeLine
};
