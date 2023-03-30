import { measureSort, testSort } from "hy-algokit";
/**
 * 选择排序算法(O(n^2))
 * 找到最大（小）元素放到起始位置，一次类推至排序完毕
 */
export default function selection(arr: number[]): number[] {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
// testSort(selection);
measureSort(selection);
