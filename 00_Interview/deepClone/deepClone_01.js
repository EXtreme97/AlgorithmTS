const obj = require("./deepClone.test");

/**
 *  JSON.parse(JSON.stringify())
 * @param {*} target
 * @returns
 */
function deepClone(target) {
  return JSON.parse(JSON.stringify(target));
}

const obj2 = deepClone(obj);
console.log(obj2);
