const getObjectTypeString = (target) => {
  // 使用Object.prototype.toString.call来获取准确的类型字符串，并进行格式化处理
  return Object.prototype.toString.call(target).replace(/^\[(\w+)\s(\w+)]$/, (str, $1, $2) => $2).toLowerCase()
}

export default getObjectTypeString
