import { objectToQuery } from './objectToQuery';


/**
 * 设置浏览器的Cookie
 *
 * @param {string} key - 要设置的Cookie的键名
 * @param {string} value - 要设置的Cookie的值
 * @param {Object} [options={}] - 可选的Cookie选项，如expires、path等
 */
export const setCookie = (key, value, options = {}) => {
  // 将options配置转换为URL查询字符串格式，并用分号隔开，以便设置Cookie的其他参数
  const optionStr = objectToQuery(options, ';');
  // 拼接Cookie字符串格式，并对值进行URL编码，然后设置为document的cookie属性
  document.cookie = `${key}=${encodeURIComponent(value)};${optionStr}`;
};

