const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (Array.isArray(names) && names.length > 0) {
    const occurrences = {};

    return names.map((name) => {
      let newName = name;
      occurrences[name] = occurrences[name] ? occurrences[name] + 1 : 1;

      while (occurrences[newName] > 1) {
        newName = `${name}(${occurrences[newName] - 1})`;
      }

      return newName;
    });
  } else {
    return [];
  }
}

module.exports = {
  renameFiles
};
