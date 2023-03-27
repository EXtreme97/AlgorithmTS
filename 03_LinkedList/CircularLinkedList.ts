import LinkedList from "./LinkedList";

/**
 * 循环链表的实现
 */
class CircularLinkedList<T> extends LinkedList<T> {
  append(element: T): void {
    super.append(element);
    this.tail!.next = this.head;
  }

  traverse(): void {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      if (this.isLastNode(current)) {
        current = null;
      } else {
        current = current.next;
      }
    }
    if (this.head && this.tail!.next === this.head) {
      values.push(this.head.value);
    }
    console.log("traverse=>", values.join("->"));
  }

  insert(position: number, element: T): boolean {
    const isSuccess = super.insert(position, element);
    if (isSuccess && (position === this.length - 1 || position === 0)) {
      this.tail!.next = this.head;
    }
    return isSuccess;
  }
  removeAt(position: number): T | null {
    const value = super.removeAt(position);

    if (
      value &&
      this.tail &&
      (position === 0 || position === this.length + 1)
    ) {
      this.tail.next = this.head;
    }
    return value;
  }
  // indexOf(element: T): number {
      
  // }
}

const cl = new CircularLinkedList();
cl.append("aa");
cl.append("bb");
cl.append("cc");
cl.append("dd");
cl.append("ee");
cl.traverse();
cl.insert(5, "zxc");
cl.insert(0, "lmn");

cl.traverse();
cl.removeAt(2);
cl.traverse();
cl.update("a",1)

console.log(cl.indexOf('aa'));

