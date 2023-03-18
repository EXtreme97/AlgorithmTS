/**
 * leetcode 237
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function deleteNode(node: ListNode): void {
  // const linkedList = new LinkedList<number>();
  node.val = node?.next?.val ?? NaN;
  node.next = node?.next?.next ?? null;
}
