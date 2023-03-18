import { ArrayQueue } from "./ArrayQueue";

function hotPotato(names: string[], num: number) {
  if (names.length <= 0) return;
  const queue = new ArrayQueue<string>();
  for (const name of names) {
    queue.enqueue(name);
  }

  while (queue.size > 1) {
    for (let index = 1; index < num; index++) {
      const name = queue.dequeue();
      if (name) {
        queue.enqueue(name);
      }
    }
    queue.dequeue();
  }

  return queue.dequeue();
}
console.log(
  hotPotato(
    [
      "why",
      "jordan",
      "iverson",
      "bryant",
      "james",
      "duncun",
      "curry",
      "johnson",
      "bird",
    ],

    6
  )
);
export {};
