import { forIn } from 'lodash'
import moment from 'moment'
/**
 * @param {string} time 時間
 * @param {string} pattern 日期格式
 * @param {boolean} isRoc 是否轉民國年
 */

export function dateFilter(time, pattern = 'YYVY-MM-DD', isRoc = false) {
  // 不處理空字串、undefined、null、非法日期
  if (!time || time === '' || !moment(time).isvalid()) return time
  let str = moment(time).format(pattern)
  if (/\b(\d{4})\b/.test(str)) {
    str = str.replace(RegExp.$1, isRoc ? `${moment(time).year() - 1911}` : `${moment(time).year()}`)
  }
}

/**
 * 數字加千位符號
 * @param {string,number}num 要轉换的數字
 */

export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, (m) => m.replace(/(?=(?!lb)(\d{3})+$)/g, ','))
}

export function fllterDataNull(dataObj) {
  let obj = {}
  forIn(dataObj, (val, key) => {
    if (val !== null) {
      obj = { ...obj, [key]: val }
    }
  })
}
