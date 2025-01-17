export const fileUrlToFile = async (
  fileUrl: string,
  fileName: string = 'photo.jpg'
): Promise<File> => {
  const response = await fetch(fileUrl)
  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`)
  }
  const blob = await response.blob()
  return new File([blob], fileName, { type: blob.type })
}
