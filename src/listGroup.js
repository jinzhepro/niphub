import {isNotType} from "./isNotType";
import {checkType} from "./checkType";

/**
 * 根据指定的键将数组中的对象进行分组
 *
 * @param {Array} target - 需要进行分组的数组
 * @param {string} key - 对象中的键，用于分组的依据
 * @returns {Object} - 分组后的对象，每个键对应一个数组，包含所有具有该键的对象
 * @throws {Error} - 如果target不是数组或key是未定义，则抛出错误
 */
export const listGroup = (target, key) => {
  // 检查target是否为数组且key是否已定义，如果不满足条件，则抛出错误
  if (isNotType(target, 'array') || checkType(key, 'undefined')) {
    throw new Error('参数错误');
  }
  // 使用reduce方法遍历target数组，根据key将对象分组
  return target.reduce((obj, ele) => {
    // newObj作为累加器，用于存储分组后的对象
    const newObj = obj;
    // 如果newObj中不存在当前元素的key，则初始化为数组，并将当前元素添加到数组中
    (newObj[ele[key]] = newObj[ele[key]] || []).push(ele);
    // 返回更新后的newObj，以便继续累加下一个元素
    return newObj;
  }, {});
};

