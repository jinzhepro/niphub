/**
 * 检查给定字符串是否包含中文字符
 *
 * @param {string} val - 待检查的字符串
 * @returns {boolean} - 如果字符串包含中文字符，则返回true；否则返回false
 */
export const isChinese = (val) => {
  // 定义一个正则表达式，用于匹配统一汉字
  const rule = /\p{Unified_Ideograph}/u;
  // 使用正则表达式测试给定的字符串，并返回测试结果
  return rule.test(val);
};

