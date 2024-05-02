/**
 * Datepicker預設選取西元日期,轉民國日期
 * @param { String } AdDate 西元年月日
 * @returns {  String } RocDate 民國年月日
 */

function ADtoRocDate(AdDate) {
  let RocDate = AdDate
  if (AdDate) {
    const dateObject = this.getIsoDateObject(AdDate)
    if (dateObject) {
      const { year, month, day } = dateObject
      let formatYear = this.padZeroStart(year - 1911, 3)
      let formatMonth = this.padZeroStart(month, 2)
      let formatDay = this.padZeroStart(day, 2)
      const formatShownDate = `${formatYear}/${formatMonth}/${formatDay}`
      RocDate = formatShownDate
      return RocDate
    }
  }
}

/**
 * 字串日期判斷格式後轉obj,方便後續拼裝
 * @param {  String } stringDate 日期(字串)
 * @returns {  Object } dateObject
 */

function getIsoDateObject(stringDate) {
  if (!stringDate) return false
  let dateObject = {
    year: '',
    month: '',
    day: ''
  }

  /**
   * 民國格式
   */

  const rocRegex = /^\d{3}\/\d{2}\/\d{2}$/
  if (rocRegex.test(stringDate)) {
    const dateParts = stringDate.split('/')
    let year = Number(dateParts[0])
    const month = dateParts[1]
    const day = dateParts[2]
    if (year < 1911) {
      year += 1911
    }
    dateObject = {
      year,
      month,
      day
    }
  }

  /**
   * 西元格式
   */

  const isoRegex = /^\d{4}-\d{2}-\d{2}$/
  if (isoRegex.test(stringDate)) {
    const dateParts = stringDate.split('-')
    let year = Number(dateParts[0])
    const month = dateParts[1]
    const day = dateParts[2]
    dateObject = {
      year,
      month,
      day
    }
  }

  /**
   *   連續數字格式
   */
  const numberRegex = /^[0-9]{6,8}$/
  if (numberRegex.test(stringDate)) {
    dateObject = this.formatNumberToISO(stringDate)
    return dateObject
  }
}

/**
 * 連續數字格式判斷位數後轉obj,方便後續拼裝
 * @param {  String } stringDate 日期(字串)
 * @returns {  Object } dateObject
 */

function formatNumberToISO(dateString) {
  let year = ''
  let month = ''
  let day = ''
  if (dateString.length === 8) {
    // 假設是西元日期
    year = Number(dateString.slice(0, 4))
    month = dateString.slice(4, 6)
    day = dateString.slice(6, 8)
  }
  if (dateString.length === 7) {
    // 假設是3碼民國年
    year = Number(dateString.slice(0, 3))
    year += 1911
    month = dateString.slice(3, 5)
    day = dateString.slice(5, 7)
  }
  if (dateString.length === 6) {
    // 假設是2碼民國年
    year = Number(dateString.slice(0, 2))
    year += 1911
    month = dateString.slice(2, 4)
    day = dateString.slice(4, 6)
  }

  month = String(month)
  while (month.length < 2) {
    month = `0${month}`
  }

  day = String(day)
  while (day.length < 2) {
    day = `0${day}`
  }
  return {
    year,
    month,
    day
  }
}

/**
 * 日期位數補零
 * @param { string | number } value 需補位的値
 * @param { number } digits 位款
 * @returns {string } value 補位後的值
 */

function padZeroStart(value, digits) {
  value = String(value)
  while (value.length < digits) {
    value = '0${value}'
  }
  return value
}

/**
 * 民國轉ISO
 * @param {string} str 民國年 YYY/MM/dd
 * @return {string} ISO format YYYY-MM-dd HH:MM:ss
 */

function rocToIS0(str) {
  if (!str) return str
  const rocRegex = /^(\d{3})\/(\d{2})\/(\d{2})/

  if (rocRegex.test(str)) {
    const [, year, mm, dd] = rocRegex.exec(str)
    const dt = new Date(+year + 1911, +mm - 1, +dd, 0, 0, 0, 0)
    return new Date(dt.getTime() - dt.getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 19)
      .replace('T', ' ')
  }
  return str
}

const formatDate = {
  ADtoRocDate,
  getIsoDateObject,
  formatNumberToISO,
  padZeroStart,
  rocToIS0
}

export default formatDate
