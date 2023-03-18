/**
 * leetcode-206
 */

// Stack解决-数组模拟栈
import { ListNode } from "./删除链表的结点";

function reverseLit1(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  if (head.next === null) return head;

  const stack: ListNode[] = [];
  let current: ListNode | null = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  const newHead: ListNode | undefined = stack.pop();
  let nh: ListNode | undefined = newHead;
  while (stack.length) {
    const node = stack.pop() ?? null;
    nh!.next = node;
    nh = nh?.next ?? undefined;
  }
  nh!.next = null;
  return newHead ?? null;
}

// 循环非递归解决
function reverseLit2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let newHead: ListNode | null = null;
  while (head !== null) {
    let current: ListNode | null = head.next;
    head.next = newHead;
    newHead = head;
    head = current;
  }
  return newHead;
}

// 递归

function reverseLit3(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let newHead = reverseLit3(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}
