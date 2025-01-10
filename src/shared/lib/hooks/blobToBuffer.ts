export const blobToBuffer = async (blobUrl: string): Promise<ArrayBuffer> => {
  // Получение Blob данных по URL
  const response = await fetch(blobUrl)
  const blob = await response.blob()

  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(blob)
    reader.onload = () => {
      if (reader.result instanceof ArrayBuffer) {
        resolve(reader.result)
      } else {
        reject(new Error('Ошибка при преобразовании Blob в ArrayBuffer'))
      }
    }
    reader.onerror = error => reject(error)
  })
}
