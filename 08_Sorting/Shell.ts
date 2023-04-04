import { measureSort, testSort } from "hy-algokit";

export default function shell(arr: number[]): number[] {
  const n = arr.length;
  let gap = Math.floor(n / 2);
  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let j = i;
      const num = arr[i];
      while (j > gap-1 && num < arr[j - gap]) {
        arr[j] = arr[j - gap];
        j = j - gap;
      }
      arr[j] = num;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
testSort(shell);
measureSort(shell)
