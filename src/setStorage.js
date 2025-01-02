import { checkType } from './checkType';


/**
 * 将数据存储到浏览器的本地存储或会话存储中
 *
 * 此函数用于将给定的数据以指定的键名存储到浏览器的本地存储或会话存储中它允许设置数据的过期时间，
 * 并选择存储模式（本地存储或会话存储）默认情况下，如果没有指定存储模式，则使用本地存储
 *
 * @param {string} key - 要存储的数据的键名
 * @param {*} value - 要存储的数据值，可以是任意可以被JSON化的数据
 * @param {Object} [options={}] - 可选配置对象
 * @param {number} [options.expires] - 数据的过期时间，以秒为单位从当前时间开始计算
 * @param {string} [options.mode='local'] - 存储模式，'local' 表示本地存储， 'session' 表示会话存储
 */
export const setStorage = (key, value, options = {}) => {
  // 处理不合法的存储模式
  if (options.mode && options.mode !== 'session' && options.mode !== 'local') {
    throw new Error('无效的存储模式，请选择 "session" 或 "local"');
  }
  try {
    // 创建一个存储项对象，包含数据、过期时间和存储模式
    const item = {
      data: JSON.stringify(value),
      // 检查过期时间是否为正数，并计算绝对过期时间戳
      expires: checkType(options.expires, 'number') && options.expires > 0 ? Date.now() + options.expires * 1000 : null,
      // 设置存储模式，如果没有指定，则默认为本地存储
      mode: options.mode || 'local',
    };

    // 根据存储模式选择 sessionStorage 或 localStorage，并将数据项存储
    const storage = options.mode === 'session' ? sessionStorage : localStorage;
    storage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.error('存储失败:', error);
    throw error; // 重新抛出错误以便调用者处理
  }

};

