import { ArrayStack } from "./ArrayStack";

function decimalToBinrary(decimal: number): string {
  const stack = new ArrayStack<number>();
  while (decimal > 0) {
    const res = decimal % 2;
    stack.push(res);
    decimal = Math.floor(decimal / 2);
  }
  let bin = "";
  while (!stack.isEmpty()) {
    bin += stack.pop();
    // console.log(stack.pop());
  }
  return bin;
}

console.log(decimalToBinrary(350));

// decimalToBinrary(350);
