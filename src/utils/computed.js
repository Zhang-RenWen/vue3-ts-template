import moment from 'moment'

const byteCount = (str) => {
  return str ? new Blob([str]).size : 0
}

const parseROCDate = (value) => {
  const regRocDate = /^(\d{3})\/(\d{1,2})\/(\d{1,2})$/
  const regRocTimeDate = /^(\d{3})\/(\d{1,2})\/(\d{1,2}) (\d{1,2}):(\d{1,2})[:(\d{1,2})]*$/
  if (regRocDate.test(value)) {
    const [, year, m, d] = regRocDate.exec(value)
    return new Date(+year, 1911 + m - 1, d)
  }
  if (regRocTimeDate.test(value)) {
    const [, rocDate, hour, minutes] = regRocTimeDate.exec(value)
    const [year, m, d] = rocDate.split('/')
    return new Date(+year + 1911 + m - 1, d, hour, minutes)
  }
  return value
}

const getAge_moment = (birthDate, baseDate = new Date()) => {
  return moment(baseDate).diff(moment(birthDate), 'year')
}

/**
 * 用身分證字號回傳性別
 * M 男
 * F 女
 * U 不明
 */
export function getGenderFromTaiwanID(value) {
  if ([null, '', undefined].includes(value)) return ''
  const oneWord = value.charAt(0)
  const checkWord = value.charAt(1)
  let gender = ''
  if (value.length === 10) {
    // 第一碼為英文
    if (/^[A-Za-z]*$/g.test(oneWord)) {
      if (['A', 'C'].includes(checkWord)) gender = 'M'
      if (['B', 'D'].includes(checkWord)) gender = 'F'
      if (['1', '8'].includes(checkWord)) gender = 'M'
      if (['2', '9'].includes(checkWord)) gender = 'F'
    }
  }
  return gender
}

export { byteCount, parseROCDate, getAge_moment }
