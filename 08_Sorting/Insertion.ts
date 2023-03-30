/**
 * 插入排序算法
 * 最好的情况：O（n）
 * 最坏的情况：O（n^2）
 */

import { measureSort, testSort } from "hy-algokit";

export default function insertion(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const newNum = arr[i];
    let j = i - 1;
    while (arr[j] > newNum && j >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = newNum;
  }
  return arr;
}
testSort(insertion);
measureSort(insertion);
