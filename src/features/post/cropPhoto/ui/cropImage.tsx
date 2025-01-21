// import { updatePhoto } from '@/entities/post'
// import { useDispatch } from 'react-redux'
// import { useAppDispatch } from '@/shared/lib'
//
// export const cropImage = (
//   imageSrc: string, // ваш photos[0].imageUrl
//   crop: any,
//   zoom?: number,
//   aspect?: number,
//   id?: string
// ): string => {
//   const canvas = document.createElement('canvas')
//   const ctx = canvas.getContext('2d')
//   // const dispatch = useAppDispatch()
//
//   // Создаем объект изображения
//   const image = new Image()
//   image.src = imageSrc
//   image.onload = () => {
//     const scaleX = image.width / image.naturalWidth
//     const scaleY = image.height / image.naturalHeight
//
//     // Рассчитываем размеры canvas
//     if (aspect) {
//       canvas.width = crop.width * aspect
//       canvas.height = crop.height * aspect
//     }
//
//     // Обрезаем изображение
//     ctx?.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       canvas.width,
//       canvas.height
//     )
//     console.log('IMAGE:', canvas.toDataURL('image/jpeg'))
//     // if (id) {
//     //   dispatch(updatePhoto({ id: id, imageUrl: canvas.toDataURL('image/jpeg') }))
//     // }
//   }
//   return ''
//   // Возвращаем результат как Base64
// }
