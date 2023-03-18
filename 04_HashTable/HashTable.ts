/**
 * hashTable通常基于数组实现
 * 优势：
 * 1.非常快速的插入、删除、查找，无论多少数据，插入和删除都接近于O(n)的时间复杂度
 * 2.相对于树来说编码容易得多
 *
 * 缺点：
 * 1.无序
 * 2.不能保存相同的key
 *
 * 哈希函数：将单词转成大数字，大数字在进行哈希化的代码实现放在一个函数中，该函数称为哈希函数
 * 将字符串转成数字的方案：
 * 1.数字相加（缺点：重复率过高）
 * 2.幂的连乘（能保证唯一性，缺点是：产生的数组下标值太大）
 *
 * 优秀的哈希函数：快速的计算、均匀的分布
 *
 * 地址的冲突：
 * 一、链地址法（拉链法）：
 * 每个数组单元中存储的不再是单个数据，而是一个链条。
 *
 * 二、开放地址法：
 * 1.线性探测（缺点：连续的数据导致“聚集”）
 * 2.二次探测（）
 * 3.再哈希法（stepSize=constant-(key%constant)）
 *
 *
 * 装填因子=总数据项、哈希表长度
 * 开放地址法的装填因子最大是1，它必须寻找到空白的单元才能将元素放入
 * 链地址发的装填因子可以大于1
 *
 */

export default class HashTable<T = any> {
  // 用于存储连地址法的链（数组）
  private storage: [string, T][][] = [];
  // 定义数组的长度
  private length: number = 7;
  // 记录已存放元素的个数
  private count: number = 0;

  /**
   * 私有哈希函数
   * @param key
   * @param max
   * @returns
   */
  private hashFn(key: string, max: number): number {
    let hashCode = 0;
    const length = key.length;
    for (let index = 0; index < length; index++) {
      //霍纳法则计算hashCode
      hashCode = 31 * hashCode + key.charCodeAt(index);
    }
    const index = hashCode % max;

    return index;
  }
  /**
   * 插入和修改操作
   * @param key
   * @param value
   */
  put(key: string, value: T) {
    const index = this.hashFn(key, this.length);

    // 取出索引值对应位置的数组（桶）
    let bucket = this.storage[index];
    if (!bucket) {
      bucket = [];
      this.storage[index] = bucket;
    }

    let isUpdate = false;
    for (let index = 0; index < bucket.length; index++) {
      const tuple = bucket[index];

      const tupleKey = tuple[0];
      if (tupleKey === key) {
        // 覆盖
        tuple[1] = value;
        isUpdate = true;
      }
    }
    if (!isUpdate) {
      bucket.push([key, value]);
      this.count++;
    }
  }

  /**
   *取值
   * @param key
   * @returns
   */
  get(key: string): T | undefined {
    const index = this.hashFn(key, this.length);

    const bucket = this.storage[index];

    if (!bucket) return undefined;
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tupleKey = tuple[0];
      const tupleValue = tuple[1];
      if (tupleKey === key) {
        return tupleValue;
      }
    }
  }

  delete(key: string): T | undefined {
    const index = this.hashFn(key, this.length);
    const bucket = this.storage[index];
    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i];
      const tk = tuple[0];
      const tv = tuple[1];
      if (tk === key) {
        bucket.splice(i, 1);
        this.count--;
        return tv;
      }
    }
    return;
  }
}

const table = new HashTable();
table.put("aaa", 100);
table.put("aaa", 200);
table.put("bbb", 300);
table.put("ccc", 301);
table.put("xyz", 302);
table.put("lmn", 303);

console.log("delete=>", table.delete("aaa"));

console.log("get=>", table.get("lmn"));
