import { ArrayQueue } from "./ArrayQueue";

export default class ArrayDeque<T> extends ArrayQueue<T> {
  addFront(element: T) {
    this.data.unshift(element);
  }
  removeBack(): T | undefined {
    return this.data.pop();
  }
}
const d = new ArrayDeque<string>();
d.enqueue("a");
d.enqueue("b");
d.enqueue("c");
d.addFront("x");
d.addFront('y')
// d.removeBack();
while (!d.isEmpty()) {
  console.log(d.removeBack());
  
}
