import { Button } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import s from './ImageFilterSelector.module.scss'

type Filter = {
  name: string
  style: string
}

type Props = {
  image: string
  selectFilterHandler: (filter: string) => void
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

export const ImageFilterSelector = ({ image, selectFilterHandler, customFilters }: Props) => {
  const filters = useMemo(() => customFilters || defaultFilters, [customFilters])

  const [selectedFilter, setSelectedFilter] = useState<string>('none')

  const handleFilterClick = (filter: Filter) => {
    if (filter.style === selectedFilter) return

    setSelectedFilter(filter.style)
    selectFilterHandler(filter.style)
  }

  return (
    <div className={s.selector}>
      {filters.map(filter => (
        <Button
          variant="link"
          key={filter.name}
          className={s.imageWrapper}
          onClick={() => handleFilterClick(filter)}
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
        </Button>
      ))}
    </div>
  )
}
