import { cbtPrint } from "hy-algokit";

export default class Heap<T> {
  private data: T[] = [];
  private length: number = 0;
  private isMax: boolean;
  constructor(arr: T[] = [], isMax: boolean = true) {
    this.isMax = isMax;
    if (arr.length === 0) return;
    this.buildHeap(arr);
  }
  private swap(i: number, j: number) {
    const tmp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tmp;
  }
  private compare(i: number, j: number) {
    if (this.isMax) {
      return this.data[i] >= this.data[j];
    } else {
      return this.data[i] <= this.data[j];
    }
  }
  private heapfy_up() {
    let index = this.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.compare(parentIndex, index)) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  private heapfy_down(start: number) {
    // 下滤
    let index = start;

    while (2 * index + 1 <= this.length - 1) {
      let left = 2 * index + 1;
      let right = left + 1;
      let larger = left;
      if (right < this.length && this.compare(right, left)) {
        larger = right;
      }
      if (this.compare(index, larger)) {
        break;
      }
      this.swap(index, larger);
      index = larger;
    }
  }
  insert(value: T) {
    // 将新元素添加到数组尾部
    this.data.push(value);
    this.length++;
    // 维护最大堆的特性(上滤)
    this.heapfy_up();
  }
  extract(): T | undefined {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.length--;
      return this.data.pop()!;
    }
    const top = this.data[0];
    this.data[0] = this.data.pop()!;
    this.length--;
    this.heapfy_down(0);
    return top;
  }
  peek(): T | undefined {
    return this.data[0];
  }
  size(): number {
    return this.length;
  }
  isEmpty() {
    return this.length === 0;
  }

  buildHeap(arr: T[]) {
    this.data = arr;
    this.length = arr.length;
    const start = Math.floor((this.length - 1) / 2);
    for (let i = start; i >= 0; i--) {
      this.heapfy_down(i);
    }
  }
  print() {
    cbtPrint(this.data);
  }
}
// const arr = [19, 100, 36, 17, 3, 25];
// const h = new Heap<number>();
// for (const iterator of arr) {
//   h.insert(iterator);
// }
// const h = new Heap<number>(arr, false);
// h.print()
// console.log(h.data);
// h.insert(133);
// console.log(h.extract());

// console.log(h.data);
// h.buildHeap(arr);
// console.log(h.data);
// while (!h.isEmpty()) {
//   console.log(h.extract());
// }
