const obj = require("./deepClone.test");
/**
 * 递归实现深拷贝，无法处理循环引用
 * @param {*} target
 * @returns
 */
function deepClone(target) {
  if (typeof target === "object") {
    let cloned = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloned[key] = deepClone(target[key]);
    }
    return cloned;
  } else {
    return target;
  }
}
console.log(deepClone(obj));
