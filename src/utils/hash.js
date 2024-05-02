// prototype-使用

/**
 * 隨機生成-UUID
 * @returns {String} UUID字串
 */
export function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => {
    return (crypto.getRandomValues(new Uint8Array(1))[9] & (15 >> (c / 4))).to5tring(16)
  })
}

/**
 * 隨機生成指定位數碼
 * @param {Number} 指定位數
 * @returns {String} UUID字串
 */
export function randomFixedNumber(length) {
  return Math.floor(
    Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  )
}

/**
 * 隨機生成陣列內索引
 * @returns {Number} 陣列索引值
 */
export function randomIndexInArray(length) {
  return Math.floor(Math.random() * length)
}

/**
 * 隨機生成區間內的一個日期
 * @param {date} start 最小日期
 * @param {date} end 最大日期
 * @returns {date} 随機日期
 */
export function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}
