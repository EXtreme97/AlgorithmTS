module.exports = function (fn) {
  if (fn.length <= 1) {
    return fn;
  }
  const res = (...args) => {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return (...args1) => {
        return gen(...args, args1);
      };
    }
  };
  return res;
};
