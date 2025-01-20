import Image from 'next/image'
import React, { useMemo, useRef } from 'react'
import s from './ImageFilterSelector.module.scss'

type Filter = {
  name: string
  style: string
}

type Props = {
  image: string
  onImageSelect: (filteredImage: string) => void
  customFilters?: Filter[]
}

const defaultFilters: Filter[] = [
  { name: 'Normal', style: 'none' },
  { name: 'Clarendon', style: 'contrast(125%) brightness(110%)' },
  { name: 'Gingham', style: 'grayscale(50%) brightness(105%)' },
  { name: 'Moon', style: 'grayscale(100%) contrast(120%)' },
  { name: 'Lark', style: 'brightness(130%) saturate(110%)' },
  { name: 'Reyes', style: 'sepia(20%) brightness(120%) contrast(90%)' },
  { name: 'Juno', style: 'contrast(120%) saturate(150%)' },
  { name: 'Aden', style: 'sepia(30%) brightness(120%) saturate(85%)' },
  { name: 'Perpetua', style: 'brightness(120%) saturate(120%)' },
]

export const ImageFilterSelector: React.FC<Props> = ({ image, onImageSelect, customFilters }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const filters = useMemo(() => customFilters || defaultFilters, [customFilters])

  const applyFilterHandler = (filterStyle: string) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const img = document.createElement('img')
    img.src = image

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height

      context.filter = filterStyle
      context.drawImage(img, 0, 0)

      const dataURL = canvas.toDataURL()
      onImageSelect(dataURL)
    }
  }

  return (
    <div className={s.selector}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />

      {filters.map(filter => (
        <div
          key={filter.name}
          className={s.imageWrapper}
          onClick={() => applyFilterHandler(filter.style)}
        >
          <Image
            src={image}
            className={s.image}
            alt={filter.name}
            width={108}
            height={108}
            style={{ filter: filter.style }}
          />
          <span className={s.filterName}>{filter.name}</span>
        </div>
      ))}
    </div>
  )
}
