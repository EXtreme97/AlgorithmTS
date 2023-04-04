/**
 * leetcode 121
 */
export function maxProfit(prices: number[]): number {
  let dp: number[] = [];
  const n = prices.length;
  if (n <= 1) return 0;
  dp[0] = 0;
  let minPrice = prices[0];
  for (let i = 0; i < n; i++) {
    dp[i] = prices[i] - minPrice;
    minPrice = Math.min(prices[i], minPrice);
  }
  return Math.max(...dp);
}
maxProfit([7, 1, 5, 3, 6, 4]);
