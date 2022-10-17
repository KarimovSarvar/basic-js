const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  function littleRepeater(stringAd, sepAd, amount) {
    stringAd = stringAd + '';
    const add = [];
    for (let i = 1; i <= amount; i++) {
      add.push(stringAd)
    }
    return add.join(sepAd);
  }

  addition = littleRepeater(addition,
    additionSeparator,
    additionRepeatTimes);

  str = str + addition;

  return littleRepeater(str, separator, repeatTimes);
}

module.exports = {
  repeater
};
