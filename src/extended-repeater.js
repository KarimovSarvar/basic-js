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
  let result = '';
  let add = '';
  add = str;
  if (options.repeatTimes !== 0) {
    for (let j=0;j < options.additionRepeatTimes; j++) {
      add += options.addition;
    }
    add += options.separator;
  }
  if (options.repeatTimes !== 0) {
    for (let i = 0;i < options.repeatTimes; i++) {
      result = result + add;
    }
  }
  return result
}

module.exports = {
  repeater
};
