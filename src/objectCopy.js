import {checkType} from "./checkType";


/**
 * 拷贝对象方法
 * 该方法可以实现对象的浅拷贝和深拷贝
 * @param {Object} target - 需要拷贝的目标对象
 * @param {Boolean} deep - 是否进行深拷贝，true表示深拷贝，false表示浅拷贝
 * @returns {Object} 返回拷贝后的对象
 */
export const objectCopy = (target, deep) => {
  // 如果deep参数为true，则进行深拷贝
  if (!!deep) {
    // 根据target的类型创建新的对象或数组
    const newObj = checkType(target, 'object') ? {} : [];
    // 遍历target的所有属性
    Object.keys(target).forEach((key) => {
      // 如果当前属性的值是对象或数组，并且不为null，则进行深拷贝
      if (target[key] && (checkType(target[key], 'object') || checkType(target[key], 'array'))) {
        // 初始化当前属性的值为对象或数组
        newObj[key] = checkType(target[key], 'object') ? {} : [];
        // 递归调用objectCopy进行深拷贝
        newObj[key] = objectCopy(target[key], 'deep');
      } else {
        // 如果当前属性的值不是对象或数组，则直接赋值
        newObj[key] = target[key];
      }
    });
    // 返回深拷贝后的新对象或数组
    return newObj;
  }
  // 如果deep参数为false，则进行浅拷贝
  return Object.assign(target);
};

