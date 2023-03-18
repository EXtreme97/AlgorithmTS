export class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

export default class LinkedList<T> {
  head: Node<T> | null = null;
  size: number = 0;

  private getNode(position: number): Node<T> | null {
    if (position < 0 || position > this.size) return null;

    let index = 0;
    let current: Node<T> | null = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current ?? null;
  }
  /**
   * 添加
   */
  append(element: T): void {
    const node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
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
      let current = this.head;
      let pre: Node<T> | null;
      let index = 0;
      while (index++ < position && current) {
        pre = current;
        current = current.next;
      }
      pre!.next = node;
      node.next = current;
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

    console.log(values.join("->"));
  }
  /**
   *get
   */
  get(position: number): T | undefined {
    if (position < 0 || position > this.size) return;

    let index = 0;
    let current: Node<T> | null = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current?.value ?? undefined;
  }

  /**
   *removeAt
   */
  removeAt(position: number): T | null {
    if (position < 0 || position > this.size) return null;

    let current = this.head;

    if (position === 0) {
      this.head = this.head?.next ?? null;
    } else {
      let pre: Node<T> | null = null;
      let index = 0;
      while (index++ < position && current) {
        pre = current;
        current = current.next;
      }
      pre!.next = current?.next ?? null;
    }
    this.size--;
    return current?.value ?? null;
  }

  /**
   *
   */
}

const linkedList = new LinkedList<string>();
linkedList.append("a");
linkedList.append("b");
linkedList.append("c");
linkedList.append("d");
linkedList.append("e");
linkedList.insert(0, "x");
linkedList.insert(2, "y");
linkedList.insert(7, "z");
// linkedList.insert(9, "z");
linkedList.traverse();
console.log(linkedList.get(5));

console.log(
  linkedList.removeAt(0),
  linkedList.removeAt(5),
  linkedList.removeAt(5)
);

linkedList.traverse();
// console.log(linkedList.size);
