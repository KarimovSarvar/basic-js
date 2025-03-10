const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k <matrix[i].length; k++) {
      if (matrix[i][k] == '^^') {
        arr.push(matrix[i][k])
      }
    }
  }
return arr.length
}

module.exports = {
  countCats
};
