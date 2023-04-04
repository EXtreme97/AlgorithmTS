/**
 * 递归实现斐波那契数列
 * @param n
 * @returns
 */
export function fib1(n: number): number {
  if (n < 2) {
    return n;
  } else {
    return fib1(n - 1) + fib1(n - 2);
  }
}
/**
 * 记忆化搜索优化递归
 * @param n
 * @param arr
 * @returns
 */
export function fib2(n: number, arr: number[] = []): number {
  if (n < 2) return n;
  if (arr[n]) {
    return arr[n];
  }
  const res = fib2(n - 1, arr) + fib2(n - 2, arr);
  arr[n] = res;
  return res;
}

export function fib3(n: number): number {
  const memo: number[] = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 1) {
      memo[i] = i;
      continue;
    }
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}
/**
 * 动态规划实现斐波那契数列
 * @param n
 * @returns
 */
export function fib4(n: number): number {
  // 1.定义状态dp数组，dp[x]=x位置的值
  const dp: number[] = [];
  // 3.初始化状态
  dp[0] = 0;
  dp[1] = 1;

  // 2.状态转移方程
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // 4.获取计算结果
  return dp[n];
}
/**
 * 动态规划实现斐波那契数列-状态压缩优化
 * @param n
 * @returns
 */
export function fib5(n: number): number {
  let pre = 0;
  let cur = 1;

  for (let i = 2; i <= n; i++) {
    let tmp = pre + cur;
    pre = cur;
    cur = tmp;
  }

  return cur;
}
console.log(fib3(10));
