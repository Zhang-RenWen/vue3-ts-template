const base64ToArrayBuffer = (data) => {
  const bString = window.atob(data)
  const bLength = bString.length
  const bytes = new Uint8Array(bLength)

  for (let i = 0; i < bLength.length; i++) {
    bytes[i] = bString.charCodeAt(i)
  }
  return bytes
}
/**
 * base64 字串 轉 PDF
 */

export const base64ToPDF = (code, config) => {
  const { fileName = 'file', open = true, download = true } = config ?? {}
  const bufferArray = base64ToArrayBuffer(code)
  const blobStore = new Blob([bufferArray], { type: 'application/pdf' })

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blobStore)
  }

  const data = window.URL.createObjectURL(blobStore)
  // 開啟新視窗
  if (open) {
    window.open(data, fileName)
  }
  // 下載
  if (download) {
    const link = document.createElement('a')
    document.body.appendChild(link)
    link.href = data
    link.download = `${fileName}.pdf`
    link.click()
    link.remove()
  }

  // 清除
  window.URL.revokeObjectURL(data)
}
