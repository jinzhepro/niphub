
import { isEmpty } from './isEmpty';

/**
 * 根据指定的键和类型从浏览器存储中获取数据
 *
 * 此函数旨在从localStorage或sessionStorage中检索与给定键关联的数据
 * 如果数据存在且未过期，则解析并返回数据；如果数据不存在或已过期，则返回undefined
 *
 * @param {string} key - 要从存储中检索的数据的键名
 * @param {string} type - 指定使用'session'（会话存储）还是'local'（本地存储）
 * @returns {any|undefined} - 返回解析后的数据，如果数据不存在或已过期则返回undefined
 */
export const getStorage = (key, type) => {
  try {
    // 根据type参数选择sessionStorage或localStorage，并获取指定键的项
    const storage = (type === 'session' ? sessionStorage : localStorage);
    const item = storage.getItem(key);

    // 处理边界条件：如果项不存在或不是字符串，直接返回undefined
    if (!item) {
      return undefined;
    }

    // 解析获取的项为原始对象
    const origin = JSON.parse(item);

    if (origin.expires && (origin.expires <= new Date().getTime())) {
      storage.removeItem(key);
      return undefined;
    }
    // 如果项未过期，解析并返回存储的数据
    return JSON.parse(origin.data);
  } catch (error) {
    // 捕获JSON解析异常，返回undefined
    console.error('解析失败：', error);
    return undefined;
  }
};

