/**
 * AVL树是一种自平衡二叉树，通过旋转保证树的平衡
 * 每个节点都有一个权值代表该节点为根节点的子树的高度差，AVL树中的权只能为1，-1或0
 *
 */
import { TreeNode } from "./BinarySearchTree";

export class AVLTreeNode<T> extends TreeNode<T> {
  left: AVLTreeNode<T> | null = null;
  right: AVLTreeNode<T> | null = null;
  parent: AVLTreeNode<T> | null = null;
  private getHeight(): number {
    const left = this.left ? this.left.getHeight() : 0;
    const right = this.right ? this.right.getHeight() : 0;
    return Math.max(left, right) + 1;
  }

  private getBalanceFactor(): number {
    const left = this.left ? this.left.getHeight() : 0;
    const right = this.right ? this.right.getHeight() : 0;
    return left - right;
  }
  get isBalanced(): boolean {
    const factor = this.getBalanceFactor();
    return factor >= -1 && factor <= 1;
  }
  public get HigherChildren(): AVLTreeNode<T> | null {
    const left = this.left ? this.left.getHeight() : 0;
    const right = this.right ? this.right.getHeight() : 0;
    if (left > right) return this.left;
    if (left < right) return this.right;
    return this.isLeft() ? this.left : this.right;
  }
}
