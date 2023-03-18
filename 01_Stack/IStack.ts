export default interface IStack<T> {
  push(elemet: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
 get size(): number;
}
