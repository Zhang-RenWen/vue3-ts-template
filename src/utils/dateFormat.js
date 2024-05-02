import formatDate from '@/util/formatDate'

export function getDateNowFormat() {
  const d = new Date()
  const offset = d.getTimezoneOffset() * 60 * 1000
  const dateNow = new Date(d.getTime() - offset)
  return dateNow.toISOString.substring(0, 10)
}

export function getDateFormat(date) {
  return !date ? '' : date.substring(0, 10).replace(/-/gi, '/')
}

export function getROCDateFormat(date) {
  return !date ? '' : formatDate.ADtoRocDate(date.substring(0, 10)).replace(/-/gi, '/')
}

export function getDateTimeFormat(date, second = true) {
  const end = second ? 19 : 16
  const timeStr = date ? date.slice(10, end) : ''
  return getDateFormat(date) + timeStr
}

export function getROCDateTimeFormat(date, second = true) {
  const end = second ? 19 : 16
  const timeStr = date ? date.slice(10, end) : ''
  return getROCDateFormat(date) + timeStr
}
