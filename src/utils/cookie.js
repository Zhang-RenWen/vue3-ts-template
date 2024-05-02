/**
 * 設置 cookie day
 * @param {String} name 設置 cookie key 名稱
 * @param {String} value 設置 cookie value 名稱
 * @param {String} value 設置 cookie value 名稱
 * @param {Number} days set cookie存在天數
 *
 *  */

const setCookie = (name, value, days) => {
  let Days = days || 1
  let exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + '=' + encodeURI(value) + ';path=/;expires=' + exp.toGMTString()
}

/**
 * 設置cookie time
 */
const setCookieTime = (name, value, minutes) => {
  let min = minutes || 1
  let exp = new Date()
  exp.setTime(exp.getTime() + min * 60 * 1000)
  document.cookie = name + '=' + encodeURI(value) + ';path=/;expires=' + exp.toGMTString()
}

/**
 * 取得cookie
 */
const getCookie = (name) => {
  let arr,
    reg = new RegExp('(^|)' + name + '=([^;]*)(;|$)')
  if ((arr = document.cookie.match(reg))) return decodeURI(arr[2])
  else return null
}

/**
 * 刪除cookie
 */
const delCookie = (name) => {
  document.cookie = name + '=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

/**
 *  取得cookie
 */
const getToken = () => {
  let token = undefined
  let wp = getCookie('a-taken')
  if (wp != null && wp != undefined) {
    token = wp
  }
  return token
}

export { setCookie, setCookieTime, getCookie, delCookie, getToken }
