/**
 * 检验给定值是否为有效的电话号码
 *
 * 本函数通过使用正则表达式来验证给定值是否符合中国大陆电话号码的常见格式
 * 电话号码必须以数字1开头，后面跟着10位数字，总长度为11位
 * 这个验证规则适用于大多数中国大陆移动电话号码
 *
 * @param {string} val - 需要验证的值
 * @returns {boolean} - 如果给定值是有效的电话号码，则返回true；否则返回false
 */
export const isPhoneNum = (val) => {
  const rule = /^1\d{10}$/;
  return rule.test(val);
};

