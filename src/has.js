
/**
 * 检查目标中是否包含指定的键和对应的值
 * @param {Array|Object} target - 要检查的目标数组或对象
 * @param {any} key - 要检查的键或键值对
 * @returns {boolean} - 如果目标中包含指定的键和对应的值，则返回true；否则返回false
 */
export const has = (target, key) => {
  // 当目标是数组时
  if (Array.isArray(target)) {
    // 如果键是对象且不为空，则检查数组中是否有对象与之完全匹配
    if (typeof key === 'object' && key !== null) {
      return target.some(item => {
        try {
          // 检查数组项是否包含所有指定的键且键的值完全匹配
          return Object.keys(key).every(k => item?.[k] === key[k]);
        } catch (error) {
          // 如果发生错误，则返回false
          return false;
        }
      });
    } else {
      // 如果键不是对象，则直接检查数组中是否包含该键
      return target.includes(key);
    }
  }
  // 当目标是对象且不为空时
  if(typeof target === 'object' && target !== null){
    // 检查目标对象中是否包含所有指定的键且键的值完全匹配
    return Object.keys(key).every(k => target?.[k] === key[k]);
  }
  // 如果以上条件都不满足，则返回false
  return false;
}

