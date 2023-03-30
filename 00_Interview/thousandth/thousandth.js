// JS 自带的 toLocaleString
function thousandth1(num) {
  return Number(num).toLocaleString();
}
function thousandth2(num) {
  return num.toString().replace(/\d+/, function (n) {
    return n.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  });
}

function thousandth3(num, char = ",", len = 3) {
  let res = "";
  let nums = num.toString().split(".");
  let i = nums[0];
  let decimal = nums[1] ? "." + nums[1] : "";
  while (i.length > len) {
    res = char + i.slice(-len) + res;
    i = i.slice(0, i.length - len);
  }
  if (i) {
    res = i + res;
  }
  return res + decimal;
}
module.exports = {
  thousandth1,
  thousandth2,
  thousandth3,
};
