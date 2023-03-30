import { measureSort } from "hy-algokit";
/**
 * 冒泡排序算法
 */
export default function bubble(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // const tmp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = tmp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
// const a = [3, 7, 8, 21, 9, 6, 15];
// console.log(bubble(a));
measureSort(bubble, 100000);
