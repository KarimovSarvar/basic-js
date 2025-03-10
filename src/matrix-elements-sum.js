const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!matrix || !matrix.length || !matrix[0].length) {
    return 0;
  }

  const rows = matrix.length;
  const columns = matrix[0].length;
  let sum = 0;

  for (let col = 0; col < columns; col++) {
    for (let row = 0; row < rows; row++) {
      if (row === 0 || matrix[row - 1][col] !== 0) {
        sum += matrix[row][col];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
