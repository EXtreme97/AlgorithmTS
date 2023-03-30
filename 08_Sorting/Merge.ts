/**
 * 归并排序算法(o(nlogn))
 */

import { measureSort, testSort } from "hy-algokit";

export default function merge(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  // 分解
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  const newLeft = merge(left);
  const newRight = merge(right);
  // 合并
  const newArr: number[] = [];
  let i = 0;
  let j = 0;
  while (i < newLeft.length && j < newRight.length) {
    if (newLeft[i] <= newRight[j]) {
      newArr.push(newLeft[i]);
      i++;
    } else {
      newArr.push(newRight[j]);
      j++;
    }
  }
  if (i < newLeft.length) {
    newArr.push(...newLeft.slice(i));
  }
  if (j < newRight.length) {
    newArr.push(...newRight.slice(i));
  }
  return newArr;
}

testSort(merge);
measureSort(merge)
