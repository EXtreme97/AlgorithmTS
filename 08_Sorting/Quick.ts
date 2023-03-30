/**
 * 快速排序算法也称划分交换排序
 *O(nlogn),最坏的情况O(n^2)
 */

import { measureSort, swap, testSort } from "hy-algokit";

export default function quick(arr: number[]): number[] {
  partition(0, arr.length - 1);
  function partition(left: number, right: number) {
    if (left >= right) return;
    const pivot = arr[right];
    let i = left,
      j = right - 1;
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(arr, i, j);
        i++;
        j--;
      }
    }
    swap(arr, i, right);
    partition(left, j);
    partition(i + 1, right);
  }
  return arr;
}
testSort(quick);
measureSort(quick);
