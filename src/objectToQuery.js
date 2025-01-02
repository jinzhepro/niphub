import {isNotType} from "./isNotType";

/**
 * 将对象转换为查询字符串
 *
 * 此函数接受一个目标对象和一个可选的连接字符限制，默认为'&'它将对象的键值对转换为查询字符串格式
 * 如果传入的目标不是对象，则返回一个错误提示信息
 *
 * @param {object} target - 需要转换为查询字符串的对象
 * @param {string} limit - 查询字符串中的连接字符，默认为'&'
 * @returns {string|Error} 返回转换后的查询字符串或错误信息
 */
export const objectToQuery = (target, limit = '&') => {
  // 检查目标是否为对象，如果不是，则返回错误信息
  if (isNotType(target, 'object')) {
    throw new Error('参数错误');
  }

  let str = '';

  // 遍历目标对象的键值对，构造查询字符串
  Object.entries(target).forEach((n, i) => str += `${i > 0 ? limit : ''}${n[0]}=${n[1]}`);

  // 返回构造的查询字符串
  return str;
};

