import {checkType} from "./checkType";

/**
 * 检查给定的值是否为空
 *
 * 此函数通过检查值是否为null、undefined或空字符串来确定值是否为空
 * 它使用了checkType函数（假设已在其他地方定义）来执行类型检查
 *
 * @param {any} value - 待检查的值，可以是任何类型
 * @returns {boolean} - 如果值为空，则返回true；否则返回false
 */
export const isEmpty = (value) => {
  return checkType(value, 'null') || checkType(value, 'undefined') || value === '';
};
