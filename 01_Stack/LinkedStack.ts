import IStack from "./IStack";

class LinkedStack<T> implements IStack<T> {
  public push(elemet: T): void {}
  /**
   * pop
   */
  public pop(): T | undefined {}
  /**
   * peak
   */
  public peek(): T | undefined {}
  /**
   * isEpty
   */
  public isEmpty(): boolean {
    return false;
  }

  /**
   * size
   */
  public size(): number {
    return 0;
  }
}
export { LinkedStack };
