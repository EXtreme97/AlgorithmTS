import Heap from "../07_Heap/Heap";

export default class PriorityQueue<T> {
  private heap: Heap<T> = new Heap();
  enqueue(value: T) {
    this.heap.insert(value);
  }
  dequeue(): T | undefined {
    return this.heap.extract();
  }
  peek(): T | undefined {
    return this.heap.peek();
  }

  isEmpty(): boolean {
    return this.heap.isEmpty();
  }

  size(): number {
    return this.heap.size();
  }
}
class Student {
  name: string;
  score: number;
  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
  }
  valueOf() {
    return this.score;
  }
}
const p = new PriorityQueue<Student>();
p.enqueue(new Student("a", 18));
p.enqueue(new Student("b", 23));
p.enqueue(new Student("c", 9));
p.enqueue(new Student("d", 3));
p.enqueue(new Student("e", 30));
while (!p.isEmpty()) {
  console.log(p.dequeue());
}
