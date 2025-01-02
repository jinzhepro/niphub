import {checkType} from "./checkType";

/**
 * 从数组中移除符合特定条件的元素
 *
 * @param {Array|any} target - 目标数组或待检查的值
 * @param {Object|number|Array} filter - 过滤条件，可以是对象、数字或数组
 * @param {number} [count] - 可选参数，指定要移除的元素数量
 * @returns {Array} 返回移除指定元素后的数组
 * @throws {Error} 如果参数类型不匹配，则抛出错误
 */
export const listRemove = (target, filter, count) => {
  // 当目标是数组且过滤条件是对象时，移除数组中所有属性值与对象属性值不全等的元素
  if (checkType(target, 'array') &&  checkType(filter, 'object')) {
    return target.filter((n) => Object.keys(filter).every((keys) => n[keys] !== filter[keys]));
  }
  // 当目标是数组，过滤条件和可选参数都是数字时，移除数组中指定索引处的元素或元素范围
  if (checkType(target, 'array') && checkType(filter, 'number') && checkType(count, 'number')) {
    return target.slice(0, filter).concat(count ? target.slice(filter + count) : []);
  }
  // 当目标是数组且过滤条件是数组时，移除目标数组中所有在过滤条件数组中不存在的元素
  if (checkType(target, 'array') && checkType(filter, 'array')) {
    return target.filter((n) => !filter.includes(n));
  }
  // 如果以上条件都不满足，抛出参数类型错误
  throw new Error('参数错误');
};

