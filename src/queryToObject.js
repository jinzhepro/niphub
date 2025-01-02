
/**
 * 将查询字符串转换为对象
 *
 * 该函数接受一个查询字符串和一个可选的分隔符，然后将这个字符串转换成一个键值对对象
 * 如果查询字符串中包含分隔符，则以分隔符为依据分割字符串，否则将整个字符串作为一项
 * 每个键值对由分隔符'='分割，并且键会被修剪空格
 *
 * @param {string} target - 查询字符串，例如 'name=John&age=30'
 * @param {string} limit - 用于分割查询字符串的分隔符，默认为 '&'
 * @returns {Object} - 转换后的键值对对象，例如 { name: 'John', age: '30' }
 */
export const queryToObject = (target, limit = '&') => (
  // 检查目标字符串中是否包含分隔符，根据情况分割字符串
  target.includes(limit) ? target.split(limit) : [target]
).map((n) => n.split('=')).reduce((a, b) => ({
  // 使用对象展开运算符将新的键值对添加到结果对象中
  ...a,
  // 键名使用 trim 方法去除前后空格，值直接赋上
  [b[0].trim()]: b[1],
}), {});

