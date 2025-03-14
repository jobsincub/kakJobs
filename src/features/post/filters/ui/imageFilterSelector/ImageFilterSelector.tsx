import { type Filter, selectFilterById } from '@/entities/post/model/postSlice'
import { useAppSelector } from '@/shared/lib/store/redux'
import { Button } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import React, { useMemo } from 'react'
import s from './ImageFilterSelector.module.scss'

type Props = {
  image: string
  selectFilterHandler: (filter: Filter) => void
  customFilters?: Filter[]
  currentId: string
}

const defaultFilters: Filter[] = [
  { name: 'Default', filterStyle: 'none' },
  { name: 'Clarendon', filterStyle: 'contrast(125%) brightness(110%)' },
  { name: 'Gingham', filterStyle: 'grayscale(50%) brightness(105%)' },
  { name: 'Moon', filterStyle: 'grayscale(100%) contrast(120%)' },
  { name: 'Lark', filterStyle: 'brightness(130%) saturate(110%)' },
  { name: 'Reyes', filterStyle: 'sepia(20%) brightness(120%) contrast(90%)' },
  { name: 'Juno', filterStyle: 'contrast(120%) saturate(150%)' },
  { name: 'Aden', filterStyle: 'sepia(30%) brightness(120%) saturate(85%)' },
  { name: 'Perpetua', filterStyle: 'brightness(120%) saturate(120%)' },
]

export const ImageFilterSelector = ({
  image,
  selectFilterHandler,
  customFilters,
  currentId,
}: Props) => {
  const filters = useMemo(() => customFilters || defaultFilters, [customFilters])
  const selectedFilter = useAppSelector(state => selectFilterById(state, currentId))

  const handleFilterClick = (filter: Filter) => {
    if (filter?.filterStyle === selectedFilter?.filterStyle) return
    selectFilterHandler(filter)
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
          <div
            className={`${s.imageWrapper} ${selectedFilter?.name === filter?.name ? s.activeFilter : ''}`}
          >
            <Image
              src={image}
              className={s.image}
              alt={filter.name}
              width={108}
              height={108}
              style={{ filter: filter.filterStyle }}
            />
          </div>
          <span className={s.filterName}>{filter.name}</span>
        </Button>
      ))}
    </div>
  )
}
