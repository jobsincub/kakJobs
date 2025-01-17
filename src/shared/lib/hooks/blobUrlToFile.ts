export const blobUrlToFile = async (
  blobUrl: string,
  fileName: string = 'photo.jpg'
): Promise<File> => {
  const response = await fetch(blobUrl)
  if (!response.ok) {
    throw new Error(`Failed to fetch blob: ${response.statusText}`)
  }
  const blob = await response.blob()
  return new File([blob], fileName, { type: blob.type })
}
