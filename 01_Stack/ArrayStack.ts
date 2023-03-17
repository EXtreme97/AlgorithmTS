import IStack from "./IStack";

class ArrayStack<T> implements IStack<T> {
  // 用于存储元素
  private data: T[] = [];
  // 栈方法
  // 入栈
  public push(elemet: T): void {
    this.data.push(elemet);
  }
  // 出栈
  public pop(): T | undefined {
    return this.data.pop();
  }
  public peek(): T | undefined {
    return this.data[this.data.length - 1];
  }
  public isEmpty(): boolean {
    return this.data.length === 0;
  }
  public size(): number {
    return this.data.length;
  }
}

// const stack = new ArrayStack<string>();
// stack.push("a");
// stack.push("b");
// stack.push("c");
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack);
export { ArrayStack };
