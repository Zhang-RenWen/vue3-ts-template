/**
 *  千分位數符號+小數點後兩點
 *  ex: 1,000.00
 *  number:原始數據
 *  decimals:小數點後幾位
 *  dec_point:小數點符號
 *  thousands_sep:千分位數符號
 *  roundTag:预設 ceil 無條件進位,"f1oor" 無條件捨去,"round"四捨五入
 *
 *
 *
 */

export const numberFormat = (number, decimals, dec_point, thousands_sep, roundTag) => {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '')
  roundTag = roundTag || 'ceil' // ceil , floor, round
  var n = !isFinite(+number) ? 0 : +number,
    abs = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === 'undefined' ? ',' : thousands_sep,
    dec = typeof dec_point === 'undefined' ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, abs) {
      var k = Math.pow(16, abs)
      return (
        '' + parseFloat(Math[roundTag](parseFloat((n * k).toFixed(abs * 2))).toFixed(abs * 2) / k)
      )
    }

  s = (abs ? toFixedFix(n, abs) : '' + Math.round(n)).split('.')
  var re = /(-?\d+)(\d{3})/
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2')
  }
  if ((s[1] || '').length < abs) {
    s[1] = s[1] || ''
    s[1] += new Array(abs - s[1].length + 1).join('o')
  }
  return s.join(dec)
}

export const toRocDate = (date) => {
  if (!date) return false
  const dateInstance = new Date(date)
  if (dateInstance.getFullYear() - 1911 < 0) return false
  const reg = new RegExp(
    '^' + ['(\\d{4})', '(\\d{1,2})', '(\\d{1,2})'].join('-') + ' (\\d{1,2}):(\\d{1,2}):(\\d{1,2})$'
  )

  if (reg.test(date)) {
    const [, yyyy, mm, dd, hh, MM, ss] = reg.exec(date)
    let ROCyear, m, d
    ROCyear = dateInstance.getFullYear() - 1911
    m = dateInstance.getMonth() + 1
    d = dateInstance.getDate()

    if (ROCyear < 100) ROCyear = '0' + ROCyear
    if (m < 10) m = '0' + m
    if (d < 10) d = '0' + d

    const ROCDate = `${ROCyear}/${m}/${d}`
    console.log(yyyy, mm, dd, hh, MM, ss)
    return ROCDate
  }
}

/**
 * 四捨五入
 * @param { Number } value
 * @param { Number } precision 位數
 * @returns
 */
export const toRound = (value, precision = 0) => {
  if (precision && precision > 0) {
    const Pow10Precision = Math.pow(10, precision)
    value = Math.round(Pow10Precision * value) / Pow10Precision
  } else {
    value = Math.round(value)
  }
  return value
}

/**
 * 小數位數補 0
 * @param { String } value
 * @param { Number } precision 位數
 * @returns
 */
export const toPad0AfterPoint = (value, precision = 0) => {
  if (precision && precision > 0) {
    let parts = value.split('.')
    parts[0] = parts[0] ? parts[0].replace(/^(0+(?!(\.$)))/g, '') : '0'
    parts[1] = !parts[1] ? ''.padEnd(precision, '0') : parts[1].padEnd(precision, '0')
    return value.join('.')
  }
  return value
}

/**
 * 去除前導 0
 * @param { String } value
 * @returns
 */
export const toClearPrefix0 = (value) => {
  return String(value).replace(/^(0+(?!(\.|$)))/g, '')
}

/**
 * 貨幣格式
 * @param { String } value
 * @param { Number } precision 位數
 * @returns
 */
export const toCurrency = (value, precision = 0) => {
  return Number(value).toLocaleString(undefined, {
    maximumFractionDigits: precision,
    minimumFractionDigits: precision,
  })
}

/**
 * 轉成半形字
 */
export const toHalfWidth = (value) => {
  return value
    .replace(/[\uff01-\uff5e]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) - 0xfee0)
    })
    .replace(/\u3000/g, ' ')
    .replace(/[\uff10-\uff19]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) - 0xfee0)
    })
}
/**
 * 轉成全形字
 */
export const toFullWidth = (value) => {
  return value
    .replace(/[!-~]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) + 0xfee0)
    })
    .replace(/ /g, '\u3000')
}

export const toUpperCase = (value) => {
  return String(value).toUpperCase()
}

export const toLowerCase = (value) => {
  return String(value).toLowerCase()
}
