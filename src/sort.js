import {checkType} from "./checkType";


/**
 * 自定义排序函数
 *
 * @param {Array} target - 需要排序的数组
 * @param {string} filter - 排序的依据或关键字
 * @param {string} key - 如果排序依据是对象内部的属性，则指定属性名
 * @returns {Array} - 返回排序后的数组
 */
export const sort = (target, filter, key) => {
  // 如果指定了key且filter为'order'，则根据对象的key属性值进行升序排序
  if (key && filter === 'order') {
    return target.sort((a, b) => a[key] - b[key]);
  }
  // 如果filter指定且数组元素均为对象，则根据对象的filter属性值进行降序排序
  if (filter && target.every((n) => checkType(n, 'object'))) {
    return target.sort((a, b) => b[filter] - a[filter]);
  }
  // 如果filter为'order'，则对数组元素进行升序排序
  if (filter === 'order') {
    return target.sort((a, b) => a - b);
  }
  // 默认情况下，对数组元素进行降序排序
  return target.sort((a, b) => b - a);
}
