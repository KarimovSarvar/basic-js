const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string') {
    if (!isNaN(sampleActivity)) {
      let result;
      let up =  Math.log(15/sampleActivity);
      let k = 0.693/5730;
      result = Math.ceil(up/k);
      if(result < 1 || result == Infinity) {
        return false
      } else return result
  }
  else if(sampleActivity < 1) {
    return false
  } else return false
} 
  else if (arguments.length == 0) {
    return false
} else return false
}

module.exports = {
  dateSample
};
