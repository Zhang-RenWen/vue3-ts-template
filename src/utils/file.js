export const getFileSize = (size) => {
  if (!size) return 0 + 'Byte'
  const base = 1024
  if (size < base) return size + 'Byte'
  if (size < Math.pow(base, 2)) return (size / base).toFixed(2) + 'KB'
  if (size < Math.pow(base, 3)) return (size / Math.pow(base, 2)).toFixed(2) + 'MB'
}

export const checkFileExtension = (file, allowedType = []) => {
  const { name } = file
  const mine = name.toLowerCase().substring(name.lastIndexOf('.'))

  return allowedType.includes(mine)
}
