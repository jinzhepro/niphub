
/**
 * 将给定的目标转换为日期字符串
 *
 * @param {string|number|Date} target - 要转换的目标，可以是字符串、数字或Date对象
 * @param {string} format - 日期格式字符串，用于自定义输出日期的格式
 * @returns {string} 格式化后的日期字符串
 */
export const toDate = (target, format) => {
  // 创建一个新的Date对象，如果未提供目标，则使用当前日期和时间
  const date = new Date(target || new Date());

  // 计算年、月、日、小时、分钟和秒，并考虑两位数的表示
  const time = {
    yyyy: date.getFullYear(),
    M: date.getMonth() + 1,
    MM: (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
    D: date.getDate(),
    DD: date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
    h: date.getHours() % 12,
    hh: (date.getHours() % 12) < 10 ? `0${date.getHours() % 12}` : date.getHours() % 12,
    H: date.getHours(),
    HH: date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
    m: date.getMinutes(),
    mm: date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
    s: date.getSeconds(),
    ss: date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
    t: date.getHours() > 12 ? '下午 ' : '上午 ',
  };

  // 定义一个正则表达式，用于匹配日期格式字符串中的各个部分
  const reg = /(y{0,4})(\W*)(M{0,2})(\W*)(D{0,2})(\W*)(H{0,2}h{0,2})(\W*)(m{0,2})(\W*)(s{0,2})/g;

  // 如果提供了日期格式，则使用该格式进行日期字符串的替换和格式化
  if (format) {
    return format.replace(reg, (string, y, s1, M, s2, D, s3, h, s4, m, s5, s) => `${time[y] || ''}${s1}${time[M] || ''}${s2}${time[D] || ''}${s3}${h.includes('h') ? time.t : ''}${time[h] || ''}${s4}${time[m] || ''}${s5}${time[s] || ''}`);
  }

  // 如果没有提供日期格式，则使用默认格式输出日期字符串
  return `${time.yyyy}-${time.MM}-${time.DD} ${time.HH}:${time.mm}:${time.ss}`;
};

