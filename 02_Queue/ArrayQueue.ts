import IQueue from "./IQueue";

class ArrayQueue<T> implements IQueue<T> {
  private data: T[] = [];

  enqueue(element: T): void {
    this.data.push(element);
  }
  dequeue(): T | undefined {
    return this.data.shift();
  }
  front(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  get size(): number {
    return this.data.length;
  }
}
// const queue = new ArrayQueue<string>();
// queue.enqueue("a");
// queue.enqueue("b");
// queue.enqueue("c");
// queue.dequeue();
// queue.enqueue("e");
// queue.enqueue("f");
// queue.enqueue("g");

// console.log(queue.size);
export { ArrayQueue };
