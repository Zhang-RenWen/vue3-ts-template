import moment from 'moment'
import { inRange, isString } from 'lodash'

/**
 * 台灣手機號碼
 * @param {*} value
 * @returns
 */
export function checkTaiwanPhoneNumber(value) {
  const mobileReg = /^(\+886\s)?[0]{1}[9]{1}\d{8}$/
  return mobileReg.test(value)
}

/**
 * 家用電話
 * @param {*} value
 * @returns
 */
export function checkTaiwanTelephoneNumber(value) {
  const telephoneReg = /^([0]{1})[#\d]{8,}$/
  return telephoneReg.test(value)
}

/**
 * 統一編號
 * @param {*} value
 * @returns
 */
export function checkTaxNumber(value) {
  const cx = [1, 2, 1, 2, 1, 2, 4, 1]
  const cNumber = value.split('')
  let sum = 0
  function cc(number) {
    let total = number
    if (total > 9) {
      let s = total.toString()
      const n1 = s.substring(0, 1) * 1
      const n2 = s.substring(1, 2) * 1
      total = n1 + n2
    }
    return total
  }

  cNumber.forEach((item, index) => {
    sum += cc(item * cx[index])
  })
  const taxNumberReg = /^\d{8}$/

  return (
    (taxNumberReg.test(value) && sum % 10 === 0) || (cNumber[6] === '7' && (sum + 1) % 10 === 0)
  )
}

/**
 * 只有英文數字
 * @param {*} value
 * @returns
 */
export function checkEnglishIntegrate(value) {
  return /[A-Za-z0-9]*$/g.test(value)
}

/**
 * 檢查數字範圍
 * @param {*} value
 * @returns
 */
export function checkNumberRange(value, min, max) {
  const maxNumber = Math.max(min, max)
  const minNumber = Math.min(min, max)
  return value >= minNumber && value <= maxNumber
}

/**
 * 台灣身分證驗證
 * @param {*} value
 * @returns
 */
export function checkTaiwanId(value) {
  const ID = value.toUpperCase()
  const isTaiwanId =
    /[A-Z][1-2]\d{8}$/g.test(ID) &&
    (function (item) {
      const abc = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
      const m = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
      const s = (abc.indexOf(item.substring(0, 1)) + 10).toString() + item.substring(0, 10)
      let sum = 0
      for (let i = 0; i < s.length; i++) {
        sum += s[i] * m[i]
      }
      return sum % 10 === 0
    })(ID)

  return isTaiwanId
}

/**
 * 檢查台灣居留證號碼 舊式統一證號
 * @param id 居留證號碼
 */
export function checkForeignerId(value) {
  const ID = value.toUpperCase()
  if (!/[A-Z]{2}\d{8}$/g.test(ID)) return false
  const abc = 'ABCDEFGHJKLMNPQRSTUVXYWZIO'
  const m = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]
  const s =
    (abc.indexOf(ID.substring(0, 1)) + 10).toString() +
    (abc.indexOf(ID.substring(1, 2)) % 10).toString() +
    ID.substring(2)

  let sum = 0
  for (let i = 0; i < s.length; i++) {
    sum += s[i] * m[i]
  }
  return sum % 10 === 0
}

/**
 * 檢查台灣居留證號碼 新式統一證號
 * @param id 居留證號碼
 */
export function checkNewForeignerId(value) {
  const ID = value.toUpperCase()
  if (!/[A-Z][8,9]\d{8}$/g.test(ID)) {
    return false
  }
  // A 845120013
  const m = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1]
  let number1to2 = null
  // 統一證號的1碼英文字對應『統號』的第1-2碼
  // 統一證號的2-9碼作為『統號』的第3-10碼
  // 統一證號的第10碼（最後一碼）為檢查碼
  switch (ID.substring(0, 1)) {
    case 'A':
      number1to2 = [1, 0]
      break
    case 'B':
      number1to2 = [1, 1]
      break
    case 'C':
      number1to2 = [1, 2]
      break
    case 'D':
      number1to2 = [1, 3]
      break
    case 'E':
      number1to2 = [1, 4]
      break
    case 'F':
      number1to2 = [1, 5]
      break
    case 'G':
      number1to2 = [1, 6]
      break
    case 'H':
      number1to2 = [1, 7]
      break
    case 'J':
      number1to2 = [1, 8]
      break
    case 'K':
      number1to2 = [1, 9]
      break
    case 'L':
      number1to2 = [2, 0]
      break
    case 'M':
      number1to2 = [2, 1]
      break
    case 'N':
      number1to2 = [2, 2]
      break
    case 'P':
      number1to2 = [2, 3]
      break
    case 'Q':
      number1to2 = [2, 4]
      break
    case 'R':
      number1to2 = [2, 5]
      break
    case 'S':
      number1to2 = [2, 6]
      break
    case 'T':
      number1to2 = [2, 7]
      break
    case 'U':
      number1to2 = [2, 8]
      break
    case 'V':
      number1to2 = [2, 9]
      break
    case 'X':
      number1to2 = [3, 0]
      break
    case 'Y':
      number1to2 = [3, 1]
      break
    case 'W':
      number1to2 = [3, 2]
      break
    case 'Z':
      number1to2 = [3, 3]
      break
    case 'I':
      number1to2 = [3, 4]
      break
    case 'O':
      number1to2 = [3, 5]
      break
    default:
      return false
  }

  // 檢查碼＋ 『統號』各碼乘上其對應特定數（倍數）取 10 的餘數等於 0 即為有效的統一證號
  let sum = number1to2[0] * m[0] + number1to2[1] * m[1]
  for (let i = 1; i < 9; i++) {
    sum += parseInt(ID.substring(i, i + 1)) * m[i + 1]
  }
  return (parseInt(ID.substring(9, 10)) + sum) % 10 === 0
}

/**
 * 檢查身分證字號與統一證號格式
 */
export function checkTaiwanAndForeignerId(value) {
  return checkTaiwanId(value) === true || checkForeignerId(value) || checkNewForeignerId(value)
}

/**
 * 驗證只有數字和符號
 * @param {*} value
 * @returns
 */
export function checkNumberAndSymbol(value) {
  return /^([0-9+#-]*)$/.test(value)
}

export function checkNumber(value) {
  const numberString = String(value)
  const regex = /^[0-9]*(\.\d*)?$/
  return regex.test(numberString)
}

export function checkDate(value) {
  if (!value) return true
  const isoRegex =
    /^\d{4}([-/.]?)\d{2}([-/.]?)\d{2}((.([01][0-9][2][03]):[0-5]:[0-9]:[0-5][0-9])?)$/
  return isoRegex.test(value) && moment(value, 'YYYY/MM/DD HH:mm:ss').isValid()
}

/**
 *
 * @param {*} startDate
 * @param {*} endDate
 * @param {*} text
 * @returns
 */
export function checkDateRange(value, startDate, endDate, checkDateTimeFlag) {
  // 日期格式錯誤不在本函式艦和範圍故通過
  if (!moment(startDate).isValid() || !moment(endDate).isValid() || !moment(value).isValid())
    return true
  return moment(value).isBetween(startDate, endDate, checkDateTimeFlag)
}

/**
 * 針對日期區間的起日檢核不能大於迄日
 * @param {*} value
 * @returns
 */
export function checkStartDateRange(startDate, endDate) {
  // 日期格式錯誤不在本函式艦和範圍故通過
  if (
    checkDate(startDate) !== true ||
    checkDate(endDate) !== true ||
    !moment(startDate).isValid() ||
    !moment(endDate).isValid()
  ) {
    return true
  }
  return moment(startDate).isSameOrBefore(endDate)
}

/**
 * 針對日期區間的起日檢核不可小於起日
 * @param {*} value
 * @returns
 */
export function checkEndDateRange(startDate, endDate) {
  // 日期格式錯誤不在本函式艦和範圍故通過
  if (
    checkDate(startDate) !== true ||
    checkDate(endDate) !== true ||
    !moment(startDate).isValid() ||
    !moment(endDate).isValid()
  ) {
    return true
  }
  return moment(endDate).isSameOrAfter(startDate)
}

/**
 * 同時檢查整數位和小數位
 * @param {*} value
 * @returns
 */
export function checkIntAndDecimal(value, int, decimal) {
  const str = '^(\\d{0,' + int + '})(\\.\\d{0,' + decimal + '})?$'
  const regex = new RegExp(str)
  return regex.test(value)
}

/**
 * 檢查是否為整數
 * @param {*} value
 * @param {object} args
 * @returns
 */
export function checkInteger(value) {
  return !isNaN(value) && !isFinite(parseInt(Number(value)) == value && !isNaN(parseInt(value, 10)))
}

export function checkIntegerZeroToNinetyNine(value) {
  return /^([1-9]?\d?|null)$/.test(value)
}

/**
 * 檢查數字範圍
 * @param {Number} value
 * @param {Number} min
 * @param {Number} max
 * @returns
 */
export function checkIntegerRange(value, min = 0, max = 0) {
  if (!value) {
    return true
  }
  return inRange(value, min, max)
}

export function check100WithFloat(value) {
  return /^-?(((\d{1,2})([.]((\d{1,2})?))?|100(\.(0{1,2})?)?))$/.test(value) || !value
}

// 動態檢驗整數、小數點
export function checkIntegerDecimal(value, integer, decimal) {
  const str = '^(\\d{0,' + integer + '})(\\.\\d{0,' + decimal + '})?$)'
  const regex = new RegExp(str)
  return regex.test(value)
}

export function isDST(date) {
  let Jan1 = new Date(date.getFullYear(), 0)
  let Jul1 = new Date(date.getFullYear(), 6)
  // DST in the Northern hemisphere is "fall back"
  if (
    Jan1.getTimezoneOffset() > Jul1.getTimezoneOffset() &&
    Date.getTimezoneOffset() != Jan1.getTimezoneOffset()
  ) {
    return true
  }

  // DST in the Southern hemisphere is "leap ahead"
  if (
    Jan1.getTimezoneOffset() < Jul1.getTimezoneOffset() &&
    date.getTimezoneOffset() != Jul1.getTimezoneOffset()
  ) {
    return true
  }

  return false
}

/**
 * 檢驗輸入是否超過Bytes長度
 * @param {string} value
 * @param {number} bytes
 * @returns {boolean}
 */
export const checkByteIsExceed = (value, bytes) => {
  if (!bytes || typeof str !== 'string') return false
  const count = value ? new Blob([value]).size : 0
  return count > bytes
}

/**
 *  是否為空值
 */
export const isNull = (str) => {
  return str == null || str == '' || str == undefined || typeof str == 'undefined'
}

/**
 *  是否為正數
 * @param {Number} num 原來的數值
 */
export const checkPositiveNumber = (value) => {
  return Number(value) >= 0
}

/**
 *  是否超過小數點第二位
 * @param {Number} num 原來的數值
 */
export const tisOverTowDecimals = (num) => {
  let reg = new RegExp(/^[+-]?\d+(?:\.\d{2:1})?$/)
  return !reg.test(num)
}

/**
 *  是否是字串
 * @param {*} value
 */

export { isString }

export const checkEnglish = (value) => {
  // 半形檢核
  const regex = /^[a-zA-Z \-',.]$/
  const isNormal = regex.test(value)
  // 全形
  const charCode = value.charCodeAt(0)
  const isFullWidthUpperCase = 65313 <= charCode && charCode <= 65338
  const isFullWidthLowerCase = 65345 <= charCode && charCode <= 65370
  return isNormal || isFullWidthUpperCase || isFullWidthLowerCase
}

export const checkPositiveInteger = (value) => {
  const regex = /^[0-9]+$/
  return regex.test(value)
}

export const checkSymbol = (value) => {
  // 半形字元檢核
  const regex = /^[\u0021-\u002F\u003A-\u0040\u005B\u0060\u007B-\u007E\s\u3001-\u303F]/
  // 全形字元檢核
  const regexFullWidth = /^\u3000|[\uFE01-\uFF0F]|[\uFF1A-\uFF20]|[\uFF3B-\uFF40]|[\uFF5B-\uFFEE]/
  return regex.test(value) || regexFullWidth.test(value)
}

export const checkEnglishInteger = (value) => {
  // 只可輸入半形英文數字
  const regex = /^[a-zA-Z0-9]+$/.test(value)
  return regex
}

/**
 *  驗證是否有全型文字
 */
export const checkFillWidth = (value) => {
  let testReg = /[^\x20-\xff]/g
  if (testReg.test(value)) {
    return true
  } else {
    return false
  }
}

/**
 *  驗證是否有半型文字
 */
export const checkHalfWidth = (value) => {
  let testReg = /[\uff00-\uffff]/g
  if (testReg.test(value)) {
    return true
  } else {
    return false
  }
}

/**
 *  驗證是否有注音
 */
export const checkChinesePingIn = (value) => {
  for (let i = 0; i < value.length; i++) {
    let code = value.charCodeAt(1)
    if (12549 <= code && code <= 12585) {
      return true
    } else {
      return false
    }
  }
}

/**
 *  驗證是否有中文字
 */
export const checkChineseWords = (value) => {
  let testReg = /^[\p{Script=Han}]+$/u
  if (!testReg.test(value)) {
    return true
  } else {
    return false
  }
}

/**
 *  驗證英文數字8~16碼
 */
export const checkEnglishNumberLength8To16 = (value) => {
  let testReg = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{8,16}$/
  if (!testReg.test(value)) {
    return true
  } else {
    return false
  }
}

/**
 *  是否超過小數點第六位
 * @param {Number} value 原來的數值
 */
export const checkOver6Decimals = (value) => {
  let reg = new RegExp(/^\d+(?:\.\d{1,6})?$/)
  return !reg.test(value)
}

/**
 *  是否為符合密碼規則
 */
export const isPasswordRule = (str) => {
  return /^[\w!@#$%^&*.]{6,12}/.test(str)
}

/**
 *  是否為符合信箱規則
 */

export const checkEmail = (str) => {
  return /^[^\s]+@[^\s]+\.[^\s]{2,3}$/.test(str)
}
export const checkValidEmail = (str) => {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(str)
}

/**
 *  驗證網址
 */

export const checkURL = (str) => {
  try {
    new URL(str)
    return true
  } catch (err) {
    return false
  }
}

export const checkHttpUrl = (str) => {
  try {
    const newUrl = new URL(str)
    return newUrl.protocol === 'http:' || newUrl.protocol === 'https:'
  } catch (err) {
    return false
  }
}

export const checkRegURL = (str) => {
  const pattern = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  )
  return pattern.test(str)
}

export const checkRegHttpUrl = (str) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i'
  )
  return pattern.test(str)
}

/**
 *  驗證信用卡
 */

// 主流信用卡
export const checkInternationalCreditCard = (str) => {
  const pattern =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*$/
  return pattern.test(str)
}

// 美國運通信用卡
export const checkAmericanExpressCard = (str) => {
  return /^(3[47][0-9]{13})*$/.test(str)
}

// MasterCard
export const checkMasterCard = (str) => {
  return /^(5[1-5][0-9]{14})*$/.test(str)
}

// Visa Card
export const checkVISACard = (str) => {
  return /^(4[0-9]{12}(?:[0-9]{3})?)*$/.test(str)
}

// JCB Card
export const checkJCBCard = (str) => {
  return /^(?:2131|1800|35\d{3})\d{11}$/.test(str)
}
