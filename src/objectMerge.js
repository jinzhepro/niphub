import {isNotType} from "./isNotType";

/**
 * 合并对象数组中的对象
 *
 * 此函数的目的是将对象数组中的所有对象合并成一个新的对象在合并过程中，可以指定是否让后面的对象覆盖前面的对象属性
 * 这对于需要合并多个对象属性的场景非常有用
 *
 * @param {Array} target 目标对象数组，包含需要被合并的对象
 * @param {Boolean} ahead 是否让后面的对象覆盖前面的对象属性如果为true，则后面的对象属性会覆盖前面的；如果为false，则前面的对象属性会覆盖后面的
 * @returns {Object} 返回合并后的对象
 *
 * @throws {Error} 如果目标参数不是一个数组，则抛出错误
 */
export const objectMerge = (target, ahead) => {
  // 检查目标参数是否为数组，如果不是则抛出错误
  if (isNotType(target, 'array')) throw new Error('参数错误');

  // 使用reduce方法遍历目标数组，根据ahead参数决定对象合并的顺序
  // 如果ahead为true，那么先合并的对象会排在后面，从而实现后面的对象覆盖前面的对象属性
  // 否则，先合并的对象会排在前面，前面的对象覆盖后面的属性
  return target.reduce((a, b) => (ahead ? { ...b, ...a } : { ...a, ...b }));
};

