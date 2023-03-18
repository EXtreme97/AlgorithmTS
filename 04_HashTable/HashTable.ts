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

/**
 *
 * @param key
 * @param max
 * @returns
 */
export function hashFn(key: string, max: number): number {
  let hashCode = 0;
  const length = key.length;
  for (let index = 0; index < length; index++) {
    //霍纳法则计算hashCode
    hashCode = 31 * hashCode + key.charCodeAt(index);
  }
  const index = hashCode % max;
  return index;
}

// console.log(hashFn("abcdef", 29));
