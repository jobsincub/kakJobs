// export const cropImage = (
//   imageSrc: string, // ваш photos[0].imageUrl
//   crop: any,
//   zoom: number,
//   aspect: number
// ): string => {
//   const canvas = document.createElement('canvas')
//   const ctx = canvas.getContext('2d')
//
//   // Создаем объект изображения
//   const image = new Image()
//   image.src = imageSrc
//
//   const scaleX = image.width / image.naturalWidth
//   const scaleY = image.height / image.naturalHeight
//
//   // Рассчитываем размеры canvas
//   canvas.width = crop.width * aspect
//   canvas.height = crop.height * aspect
//
//   // Обрезаем изображение
//   ctx?.drawImage(
//     image,
//     crop.x * scaleX,
//     crop.y * scaleY,
//     crop.width * scaleX,
//     crop.height * scaleY,
//     0,
//     0,
//     canvas.width,
//     canvas.height
//   )
//
//   // Возвращаем результат как Base64
//   return canvas.toDataURL('image/jpeg')
// }
