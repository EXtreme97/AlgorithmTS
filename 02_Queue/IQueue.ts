export default interface IQueue<T> {
  enqueue(element: T): void;
  dequeue(): T | undefined;
  front(): T | undefined;
  isEmpty(): boolean;
  get size(): number;
}
