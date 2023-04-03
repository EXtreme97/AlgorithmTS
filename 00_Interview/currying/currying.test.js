const currying = require("./currying");

function fn(a, b, c, d, e) {
  return a + b + c + d + e;
}
let fn1 = currying(fn);
console.log(fn1(1)(2)(3)(4)(5));
