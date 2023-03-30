const currying = require("./currying");

function fn(a, b, c, d) {
  return a + b + c + d;
}
let fn1 = currying(fn);
console.log(fn1(1)(2)(3)(4));
