import Heap from "../07_Heap/Heap";
export class PriorityNode<T> {
  priority: number;
  value: T;
  constructor(value: T, priority: number) {
    this.value = value;
    this.priority = priority;
  }
  valueOf() {
    return this.priority;
  }
}

export default class PriorityQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap();
  enqueue(value: T, priority: number) {
    const node = new PriorityNode<T>(value, priority);
    this.heap.insert(node);
  }
  dequeue(): T | undefined {
    return this.heap.extract()?.value;
  }
  peek(): T | undefined {
    return this.heap.peek()?.value;
  }

  isEmpty(): boolean {
    return this.heap.isEmpty();
  }

  size(): number {
    return this.heap.size();
  }
}

const p = new PriorityQueue<string>();
p.enqueue("a", 2);
p.enqueue("b", 1);
p.enqueue("d", 7);
p.enqueue("e", 9);
p.enqueue("c", 8);
while (!p.isEmpty()) {
  console.log(p.dequeue());
  
}
