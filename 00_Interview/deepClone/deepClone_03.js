const obj = require("./deepClone.test");
function deepClone(target, map = new WeakMap()) {
  if (typeof target === "object") {
    let cloned = Array.isArray(target) ? [] : {};

    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloned);
    for (const key in target) {
      cloned[key] = deepClone(target[key], map);
    }
    return cloned;
  } else {
    return target;
  }
}
console.log(deepClone(obj));
