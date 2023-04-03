import { testSort } from "hy-algokit";
import Heap from "../07_Heap/Heap";
/**
 * 堆排序
 */
export default function heapSort(arr: number[]): number[] {
  const h = new Heap<number>(arr, false);
  const res: number[] = [];
  while (!h.isEmpty()) {
    res.push(h.extract() as number);
  }
  return res;
}
testSort(heapSort);
