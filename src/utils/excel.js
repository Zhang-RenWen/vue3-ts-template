import Vue from 'vue'
/**
 * base64字串轉Excel並下載
 * 把API回傳資料丟過來即可
 * 後端格式统一 response data 須包含
 * file base64字串
 * fileName 檔案名稱
 * 回傳 boolean 輔换下载成功回true,否則 false
 */

export function formatDownload(resData) {
  const { data, status } = resData ?? {}
  const { file, fileName, msg } = data ?? {}

  if (status === 200 && file) {
    // 格式轉換
    let baseData = window.atob(data.file)
    let n = baseData.length
    let u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = baseData.charCodeAt(n)
    }

    let blob = new Blob([u8arr], { type: 'application/json' })
    // 下載
    let url = window.URL.createObjectURL(blob)
    let downLoadLink = document.createElement('a')
    document.body.appendChild(downLoadLink)
    downLoadLink.style = 'display: none'
    downLoadLink.href = url
    downLoadLink.download = fileName || '匯出資料.x1sx'
    downLoadLink.click()
    downLoadLink.remove()

    // 清除
    window.URL.revokeObjectURL(url)
    Vue.prototype.$notifier.showMessage({
      message: msg || '匯出成功:檔案下載中',
      color: 'success'
    })
    return true
  }

  // 錯誤
  if (status === 504) {
    Vue.prototype.$notifier.showMessage({
      message: '逾時'
    })
  } else {
    Vue.prototype.$notifier.showMessage({
      message: '匯出失敗'
    })
  }

  return false
}
