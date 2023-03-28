import { btPrint } from "hy-algokit";

export class Node<T> {
  value: T;
  constructor(value: T) {
    this.value = value;
  }
}
export class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null;
  right: TreeNode<T> | null = null;
  parent: TreeNode<T> | null = null;
  isLeft(): boolean {
    return !!this.parent && this.parent.left === this;
  }
  isRight(): boolean {
    return !!this.parent && this.parent.right === this;
  }
}
export default class BSTree<T> {
  private root: TreeNode<T> | null = null;
  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  print() {
    btPrint(this.root);
  }
  /**
   * 插入
   * @param value
   */
  insert(value: T) {
    const newNode = new TreeNode(value);
    // 根节点为空
    if (!this.root) {
      this.root = newNode;
    } else {
      // 根节点不为空
      this.insertNode(this.root, newNode);
    }
  }
  search(value: T): boolean {
    return !!this.searchNode(value);
  }
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root;
    let parent: TreeNode<T> | null = null;

    while (current) {
      if (current.value === value) return current;

      parent = current;
      if (current.value < value) {
        current = current.right;
      } else {
        current = current.left;
      }
      if (current) current.parent = parent;
    }
    return null;
  }
  min(): T | null {
    let current = this.root;
    while (current && current.left) {
      current = current.left;
    }
    return current?.value ?? null;
  }
  max() {
    let current = this.root;
    while (current && current.right) {
      current = current.right;
    }
    return current?.value ?? null;
  }
  remove(value: T): boolean {
    let current = this.searchNode(value);
    if (!current) return false;

    let replaceNode: TreeNode<T> | null = null;
    // 叶子
    if (current.left === null && current.right === null) {
      replaceNode = null;

      // if (current === this.root) {
      //   this.root = null;
      // } else if (current.isLeft()) {
      //   current.parent!.left = null;
      // } else {
      //   current.parent!.right = null;
      // }
    }

    // 删除的节点有一个子节点
    else if (current.right === null) {
      replaceNode = current.left;

      // if (current === this.root) {
      //   this.root = current.left;
      // } else if (current.isLeft()) {
      //   current.parent!.left = current.left;
      // } else {
      //   current.parent!.right = current.left;
      // }
    } else if (current.left === null) {
      // if (current === this.root) {
      //   this.root = current.right;
      // } else if (current.isLeft()) {
      //   current.parent!.left = current.right;
      // } else {
      //   current.parent!.right = current.right;
      // }
      replaceNode = current.right;
    }
    // 两个子节点都存在
    else {
      const successor = this.getSuccessor(current);
      // if (current === this.root) {
      //   this.root = successor;
      // } else if (current.isLeft()) {
      //   current.parent!.left = successor;
      // } else {
      // }
      replaceNode = successor;
    }
    if (current === this.root) {
      this.root = replaceNode;
    } else if (current.isLeft()) {
      current.parent!.left = replaceNode;
    } else {
      current.parent!.right = replaceNode;
    }

    return true;
  }

  private getSuccessor(node: TreeNode<T>): TreeNode<T> | null {
    let current = node.right;
    let successor: TreeNode<T> | null = null;
    while (current) {
      successor = current;
      current = current.left;
      if (current) {
        current.parent = successor;
      }
    }

    if (successor !== node.right) {
      successor!.parent!.left = successor!.right;
      successor!.right = node.right;
    }
    successor!.left = node.left;
    return successor;
  }
  /**
   * 先序
   */
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  private preOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      console.log(node.value);
      this.preOrderTraverseNode(node.left);
      this.preOrderTraverseNode(node.right);
    }
  }
  /**
   * 中序
   */
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  private inOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.inOrderTraverseNode(node.left);
      console.log(node.value);
      this.inOrderTraverseNode(node.right);
    }
  }
  /**
   * 后序
   */
  postOrderTraverse() {
    this.postOrderTraverseNode(this.root);
  }
  private postOrderTraverseNode(node: TreeNode<T> | null) {
    if (node) {
      this.postOrderTraverseNode(node.left);

      this.postOrderTraverseNode(node.right);
      console.log(node.value);
    }
  }
  /**
   * 层序
   */
  levelOrderTraverse() {
    if (!this.root) return;
    const queue: TreeNode<T>[] = [];
    queue.push(this.root);
    while (queue.length) {
      const current = queue.shift()!;
      console.log(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
}
// const bst = new BSTree<number>();
// bst.insert(11);
// bst.insert(7);
// bst.insert(15);
// bst.insert(5);
// bst.insert(3);
// bst.insert(9);
// bst.insert(8);
// bst.insert(10);
// bst.insert(13);
// bst.insert(12);
// bst.insert(14);
// bst.insert(20);
// bst.insert(18);
// bst.insert(25);
// bst.insert(6);
// bst.remove(15);
// bst.print();

// bst.remove(9);
// // bst.remove(8);
// // bst.remove(12);
// bst.print();
// // bst.remove(6);
// // bst.remove(10);
// // bst.remove(25);
// // bst.print();

// // bst.remove(20);
// // bst.remove(13);
// // bst.print();

// // bst.preOrderTraverse();
// // bst.inOrderTraverse();
// // bst.postOrderTraverse();
// // bst.levelOrderTraverse();
// console.log("max=>", bst.max());
// console.log("min=>", bst.min());
// console.log("search=>", bst.search(18));
// console.log("search=>", bst.search(13));
// console.log("search=>", bst.search(30));
