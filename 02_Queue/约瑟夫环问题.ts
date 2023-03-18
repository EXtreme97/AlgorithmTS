import { ArrayQueue } from "./ArrayQueue";

function lastRemaining(n: number, m: number) {
  const queue = new ArrayQueue<number>();
  for (let index = 0; index < n; index++) {
    queue.enqueue(index);
  }

  while (queue.size > 1) {
    for (let index = 1; index < m; index++) {
      queue.enqueue(queue.dequeue()!);
    }
    queue.dequeue();
  }
  return queue.dequeue()!;
}

console.log(lastRemaining(5, 3), lastRemaining(10, 17)); //3 2
