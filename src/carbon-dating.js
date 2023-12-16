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
    sampleActivity = parseFloat(sampleActivity);

    if (!isNaN(sampleActivity) && sampleActivity > 0) {
      const k = 0.693 / 5730;
      const age = Math.log(15 / sampleActivity) / k;
      if (age > 0 && isFinite(age)) {
        return Math.ceil(age);
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
