
import { listRemove } from './listRemove';
import {checkType} from "./checkType";

/**
 * 数组去重函数
 *
 * 该函数主要用于数组的去重处理如果提供了key参数，则会根据对象数组中指定键的值进行去重
 * 如果未提供key参数，则直接去重数组中的元素如果指定了behind参数为true，则保留最后一个出现的元素；
 * 否则保留第一个出现的元素
 *
 * @param {Array} target - 需要去重的数组
 * @param {string|undefined} key - 确定数组中元素唯一性的键如果未提供，则直接去重数组元素
 * @param {boolean} behind - 是否保留最后一个出现的重复项true为保留最后一个，false为保留第一个
 * @returns {Array} 返回去重后的数组
 */
export const listDeduplicate = (target, key, behind) => {
  // 检查key是否未定义如果未定义，则直接使用Set进行去重
  if (checkType(key, 'undefined')) {
    return Array.from(new Set(target));
  }

  // 遍历数组，进行自定义去重处理
  for (let i = 0; i < target.length; i++) {
    for (let j = i + 1; j < target.length; j++) {
      // 比较指定键的值是否相等如果相等，则根据behind参数决定移除哪个元素
      if (target[i][key] === target[j][key]) {
        target = listRemove(target, behind ? i : j, 1);
        j--; // 调整索引，以补偿因移除元素导致的索引变化
      }
    }
  }

  // 返回去重后的数组
  return target;
};

