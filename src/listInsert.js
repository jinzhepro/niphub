
import { checkType } from './checkType';

/**
 * 创建一个新数组，通过在指定位置插入数据
 *
 * @param {Array} target - 原始数组，用作生成新数组的基础
 * @param {any|Array} data - 要插入的数据，可以是单个元素或一个数组
 * @param {number} index - 插入数据的索引位置
 * @param {boolean} type - 插入类型，true 表示在指定索引前插入，false 表示在指定索引后插入
 * @returns {Array} - 返回包含插入数据的新数组
 */
const createArray = (target, data, index, type) => [
  // 截取原始数组的前半部分，根据插入类型决定截取位置
  ...target.slice(0, type ? index : (index + 1)),

  // 如果数据是数组，则直接展开，否则将其变为单元素数组
  ...(checkType(data) === 'Array' ? data : [data]),

  // 截取原始数组的后半部分，根据插入类型决定截取位置
  ...target.slice(type ? index : (index + 1))
];


/**
 * 在目标数组中插入数据，可以根据不同的条件进行插入操作
 * @param {Array} target - 目标数组
 * @param {*} data - 要插入的数据
 * @param {(Object|number|undefined)} filter - 用于查找的过滤器，可以是对象、数字或未定义
 * @param {boolean} [ahead] - 可选参数，如果为true，则在找到的元素前面插入数据
 * @returns {Array|null} - 返回插入数据后的新数组，如果未找到符合条件的元素则返回null
 */
export const listInsert = (target, data, filter, ahead) => {
  // 当过滤器为对象时，根据对象的属性在目标数组中查找匹配的元素
  if (checkType(filter, 'object')) {
    // 使用findIndex和every方法找到匹配的元素索引
    const index = target.findIndex((n) => Object.keys(filter).every((m) => filter[m] === n[m]));
    // 如果未找到匹配的元素，抛出错误
    if(index < 0) throw new Error('未找到对应元素');
    // 根据ahead参数决定是在匹配元素前面还是后面插入数据
    if (ahead) {
      return createArray(target, data, index, 1);
    }
    return createArray(target, data, index, 0);
  }
  // 当过滤器为数字时，直接在指定索引位置插入数据
  if (checkType(filter, 'number')) {
    return createArray(target, data, filter, 1);
  }
  // 当过滤器为未定义时，直接将数据添加到目标数组的末尾
  if (checkType(filter, 'undefined')) {
    return target.concat(data);
  }
  // 如果过滤器类型不符合预期，返回null
  return null;
};

