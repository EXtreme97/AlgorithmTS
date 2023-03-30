function flatten1(arr) {
  if (!arr.length) return;
  return arr.reduce(
    (pre, cur) =>
      Array.isArray(cur) ? [...pre, ...flatten1(cur)] : [...pre, cur],
    []
  );
}
function flatten2(arr) {
  const res = [];
  for (let i = 0, l = arr.length; i < l; i++) {
    if (Array.isArray(arr[i])) {
      // res.concat(flatten2(arr[i]));
      res.push(...flatten2(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
module.exports = { flatten1, flatten2 };
