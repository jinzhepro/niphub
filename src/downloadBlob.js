
/**
 * 将二进制数据下载为文件
 *
 * 该函数创建一个临时的URL对象，代表一个包含给定二进制数据的Blob对象，然后模拟用户点击一个包含该URL的<a>标签，
 * 以触发文件下载这个过程允许在浏览器环境中下载任何类型的文件，而不需要将文件提前托管在服务器上
 *
 * @param {ArrayBuffer|Blob|String} data - 要下载的二进制数据
 * @param {String} fileName - 下载时文件名
 * @param {String} type - Blob对象的MIME类型
 */
export const downloadBlob = (data, fileName, type) => {
  // 创建一个<a>标签元素
  const link = document.createElement('a');
  // 创建一个Blob对象，包含要下载的数据
  const blob = new Blob([data], { type });
  // 设置<a>标签的download属性，指定下载文件的名称
  link.download = fileName;
  // 创建Blob对象的URL
  link.href = URL.createObjectURL(blob);
  // 模拟用户点击<a>标签，触发文件下载
  link.click();
};

