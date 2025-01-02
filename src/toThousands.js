
/**
 * 将数字转换为千位格式的字符串
 * 该函数接受一个数字或数字字符串作为输入，将其转换为千位格式的字符串
 * 如果输入是浮点数，则保留小数部分，并在整数部分添加千位分隔符
 * 如果输入是整数，则直接在整数部分添加千位分隔符
 *
 * @param {number|string} target - 需要转换的数字或数字字符串
 * @returns {string} 转换后的千位格式字符串
 */
export const toThousands = (target) => {
  // 将目标转换为字符串形式，以便进行处理
  const ghost = String(target);
  // 判断字符串中是否包含小数点，以决定是否需要处理小数部分
  const float = ghost.includes('.');
  // 根据是否包含小数点，执行不同的处理逻辑
  return float ? `${ghost.split('.')[0].replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`)}.${ghost.split('.')[1]}` : ghost.replace(/(\d)(?=(\d{3})+$)/g, ($1) => `${$1},`);
};

