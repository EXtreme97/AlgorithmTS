export class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

export interface ILinkedList<T> {
  append(element: T): void;
  traverse(): void;
  insert(position: number, element: T): boolean;
  removeAt(position: number): T | null;
  get(position: number): T | null;
  update(element: T, position: number): boolean;
  indexOf(element: T): number;
  remove(element: T): T | null;
  isEmpty(): boolean;
  get length(): number;
}

export default class LinkedList<T> implements ILinkedList<T> {
  get length(): number {
    return this.size;
  }
  protected head: Node<T> | null = null;
  protected size: number = 0;
  protected tail: Node<T> | null = null;

  protected getNode(position: number): Node<T> | null {
    if (position < 0 || position >= this.size) return null;

    let index = 0;
    let current: Node<T> | null = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current ?? null;
  }
  isLastNode(node: Node<T>) {
    return node === this.tail;
  }
  /**
   * 添加
   */
  append(element: T): void {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // let current = this.head;
      // while (current.next) {
      //   current = current.next;
      // }
      // current.next = node;
      this.tail!.next = node;
    }
    this.tail = node;
    this.size++;
  }
  /**
   * 插入
   */
  insert(position: number, element: T): boolean {
    if (position < 0 || position > this.size) return false;

    const node = new Node(element);
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // let current = this.head;
      // let pre: Node<T> | null;
      // let index = 0;
      // while (index++ < position && current) {
      //   pre = current;
      //   current = current.next;
      // }
      // pre!.next = node;
      // node.next = current;

      const pre = this.getNode(position - 1);
      node.next = pre!.next;
      pre!.next = node;
      if (this.size === position) {
        this.tail = node;
      }
    }
    this.size++;
    return true;
  }

  /**
   *遍历
   */
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }

    console.log("traverse=>", values.join("->"));
  }
  /**
   *get
   */
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null;

    return this.getNode(position)?.value ?? null;
  }

  /**
   *removeAt
   */
  removeAt(position: number): T | null {
    if (position < 0 || position > this.size) return null;

    let current = this.head;

    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      // let pre: Node<T> | null = null;
      // let index = 0;
      // while (index++ < position && current) {
      //   pre = current;
      //   current = current.next;
      // }

      let pre = this.getNode(position - 1);
      // current = this.getNode(position);
      current = pre!.next;
      pre!.next = pre?.next?.next ?? null;
      if (position === this.length - 1) {
        this.tail = pre;
      }
    }
    this.size--;
    return current?.value ?? null;
  }
  /**
   * remove
   * @param element
   * @returns T
   */
  remove(element: T): T | null {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }
  /**
   * update
   */
  update(element: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false;

    const node = this.getNode(position);
    node!.value = element;
    return true;
  }

  /**
   * indexOf
   */
  indexOf(element: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === element) {
        return index;
      }
      index++;
      if (this.isLastNode(current)) {
        current = null;
      } else {
        current = current.next;
      }
    }

    return -1;
  }

  /**
   * isEmpty
   */
  isEmpty(): boolean {
    return this.size === 0;
  }
}

// const linkedList = new LinkedList<string>();
// console.log("isEmpty->", linkedList.isEmpty());

// linkedList.append("a");
// linkedList.append("b");
// linkedList.append("c");
// linkedList.append("d");
// linkedList.append("e");
// linkedList.append("f");
// linkedList.insert(0, "x");
// linkedList.insert(2, "y");
// linkedList.insert(6, "z");
// // linkedList.insert(9, "z");
// linkedList.traverse();
// console.log("get->", linkedList.get(5));

// console.log(
//   "removeAt->",
//   linkedList.removeAt(0),
//   linkedList.removeAt(5),
//   linkedList.removeAt(5)
// );

// linkedList.traverse();
// linkedList.update("l", 3);
// linkedList.traverse();
// console.log("indexOf->", linkedList.indexOf("l"));
// console.log("remove->", linkedList.remove("l"));
// console.log("isEmpty->", linkedList.isEmpty());
// linkedList.traverse();
// console.log("size->", linkedList.length);
