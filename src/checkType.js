import {has} from "./has";
import {typeList} from "./utils/typeList";
import getObjectTypeString from "./utils/getObjectTypeString";

/**
 * 检查给定值的类型是否与指定类型相符
 *
 * @param {any} target - 需要进行类型检查的值
 * @param {string} type - 可选参数，指定要检查的类型，如 'string'、'number'
 * @returns {boolean|string} - 如果指定了类型，则返回布尔值，表示给定值是否匹配指定类型；
 *                             如果未指定类型，则返回给定值的类型字符串
 */
export const checkType = (target, type) => {
  // 检查type参数是否已定义
  if (type !== undefined){
    if(!has(typeList, type)) throw new Error('请传入正确的类型');
    // 使用正则表达式匹配并转换值的类型字符串，并与指定类型进行比较
    return getObjectTypeString(target) === type
  }
  // 如果type参数未定义，直接返回值的类型字符串
  return getObjectTypeString(target)
}




