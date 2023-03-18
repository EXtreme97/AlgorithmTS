/**
 *
 * @param key
 * @param max
 * @returns
 */
export default function hashFn(key: string, max: number): number {
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
