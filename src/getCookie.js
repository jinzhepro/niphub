import { queryToObject } from './queryToObject';

/**
 * 获取cookie的值
 * 如果不提供键名，则返回所有的cookie信息
 * 如果提供了键名，则返回该键名对应的cookie值
 *
 * @param {string} key - 可选参数，要获取的cookie的键名
 * @returns {string} - 如果不提供键名，返回所有cookie信息；如果提供键名，返回该键名对应的cookie值
 */
export const getCookie = (key) => {
  // 如果未提供键名，直接返回所有cookie信息
  if (!key) return document.cookie;

  // 将cookie字符串转换为对象，以便通过键名访问值
  const cookieObj = queryToObject(document.cookie, ';');

  // 返回指定键名的cookie值
  return cookieObj[key];
};

