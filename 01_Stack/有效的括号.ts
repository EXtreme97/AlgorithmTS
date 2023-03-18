import { ArrayStack } from "./ArrayStack";

function isValidBrackets(s: string): boolean {
  const stack = new ArrayStack();

  for (let index = 0; index < s.length; index++) {
    const c = s[index];
    switch (c) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        if (c !== stack.pop()) return false;
        break;
    }
  }

  return stack.isEmpty();
}

console.log(isValidBrackets("{}"));
console.log(isValidBrackets("({[]})[]{}"));
console.log(isValidBrackets("(]"));
