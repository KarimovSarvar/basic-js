const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instanceof the Array!");
  } else {
  let newArr
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--double-next') {
      if(typeof arr[i-1] === 'number') {
          arr[i] = arr[i+1]
      }
        else if(typeof arr[i-1] !== 'number') {
            arr.splice(i,1)
        }
  }
    else if(arr[i] === '--double-prev') {
      if(typeof arr[i-1] === 'number') {
          arr[i] = arr[i-1]
      }
        else if(typeof arr[i-1] !== 'number') {
            arr.splice(i,1)
        }
  }
    else if(arr[i] === '--discard-next') {
      if(typeof arr[i-1] === 'number') {
          arr.splice(i,2)
      }
        else if(typeof arr[i-1] !== 'number') {
            arr.splice(i,1)
        }
  }
    else if(arr[i] === '--discard-prev') {
      if(typeof arr[i-1] === 'number') {
          arr.splice(i-1,2)
      }
        else if(typeof arr[i-1] !== 'number') {
            arr.splice(i,1)
        }
  }
}
  newArr = arr.filter(function (el) {
      if(typeof el === 'number') {
          return true
      } else return false
  })
return newArr
}
}

module.exports = {
  transform
};
