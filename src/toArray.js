
/**
 * 将类数组对象转换为数组
 * @param {Object} target - 类数组对象，例如 DOM 元素节点列表或 arguments 对象
 * @returns {Array} - 转换后的数组
 *
 * 为什么需要这个函数：
 * 在处理类数组对象时，我们无法直接使用数组的方法，因为它们不是真正的数组
 * 通过将类数组对象转换为数组，我们可以使用数组的内置方法，如 map、filter 等
 *
 * 为什么使用 Array.prototype.slice.call 而不是 Array.from 或扩展运算符：
 * 这种方法在 ES5 环境中是可用的，并且性能良好
 * 尽管在 ES6 中有新的方法（如 Array.from 或扩展运算符），但这种方法在旧环境中仍保持兼容性
 */
export const toArray = (target) => Array.prototype.slice.call(target);

