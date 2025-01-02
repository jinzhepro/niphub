import getObjectTypeString from "./utils/getObjectTypeString";

/**
 * 检查给定值的类型是否与指定类型不匹配
 *
 * @param {*} target - 待检查的值
 * @param {string} type - 指定的类型字符串，如 'string'、'number'
 * @returns {boolean | Error} - 如果给定值的类型与指定类型不匹配返回true，否则返回false；
 * 如果type参数未定义，返回Error对象
 */
export const isNotType = (target, type) => {
  // 检查type参数是否已定义
  if (type !== undefined){
    // 这里使用了Object.prototype.toString.call来获取准确的类型字符串，并进行格式化处理
    return getObjectTypeString(target) !== type
  }
  throw new Error('参数错误');
}






