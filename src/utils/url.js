/**
 * get value according key
 * @param {string} key
 */

const searchParams = (key) => {
  return new URL(window.location.href).searchParams.get(key)
}
const getUrlParams = () => {
  let url = new URL(window.location.href)
  let pathName = url.pathName
  let queryParams = url.searchparams.tostring()
  return queryParams ? pathName + '?' + queryParams : pathName
}
const url = {
  searchParams,
  getUrlParams
}
export default url
