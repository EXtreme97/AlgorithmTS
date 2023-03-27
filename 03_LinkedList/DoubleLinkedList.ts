import LinkedList, { Node } from "./LinkedList";
export class DoubleNode<T> extends Node<T> {
  prev: DoubleNode<T> | null = null;
  next: DoubleNode<T> | null = null;
}
export default class DoubleLinkedList<T> extends LinkedList<T> {
  protected head: DoubleNode<T> | null = null;
  protected tail: DoubleNode<T> | null = null;
  append(element: T): void {
    const newNode = new DoubleNode<T>(element);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }
  prepend(element: T): void {
    const n = new DoubleNode(element);
    if (!this.head) {
      this.head = n;
      this.tail = n;
    } else {
      n.next = this.head;
      this.head.prev = n;
      this.head = n;
    }
    this.size++;
  }

  postTraverse() {
    const elements: T[] = [];
    let current = this.tail;
    while (current) {
      elements.push(current.value);
      current = current.prev;
    }
    console.log("postTraverse=>", elements.join("->"));
  }

  insert(position: number, element: T): boolean {
    if (position < 0 && position > this.length) return false;
    if (position === 0) {
      this.prepend(element);
    } else if (position === this.length) {
      this.append(element);
    } else {
      const n = new DoubleNode<T>(element);
      const current = this.getNode(position) as DoubleNode<T>;

      current.prev!.next = n;
      n.next = current;
      n.prev = current.prev;
      current.prev = n;
      this.size++;
    }
    return true;
  }

  removeAt(position: number): T | null {
    if (position < 0 && position > this.length) return null;
    let current = this.head;
    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head!.next;
        this.head!.prev = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail = this.tail!.prev;
      this.tail!.next = null;
    } else {
      current = this.getNode(position) as DoubleNode<T>;
      current.next!.prev = current.prev;
      current.prev!.next = current.next;
    }

    this.size--;
    return current?.value ?? null;
  }
}
const dl = new DoubleLinkedList();
dl.append("aa");
dl.append("bb");
dl.append("cc");
dl.append("dd");
dl.append("ee");
dl.prepend("xx");
dl.insert(6, "mm");
dl.removeAt(6)
dl.traverse();
// dl.postTraverse();
