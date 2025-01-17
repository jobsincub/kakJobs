type ConvertUrlToFileArgs = {
  fileUrl: string
  fileName?: string
}

export const convertUrlToFile = async ({
  fileUrl,
  fileName = 'photo.jpg',
}: ConvertUrlToFileArgs): Promise<File> => {
  const response = await fetch(fileUrl)
  if (!response.ok) {
    throw new Error(`Failed to fetch file: ${response.statusText}`)
  }
  const blob = await response.blob()
  return new File([blob], fileName, { type: blob.type })
}
