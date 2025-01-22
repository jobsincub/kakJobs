import s from '@/features/post/cropPhoto/ui/cropPhoto.module.scss'
import { Expand, ImageOutline } from '@wandrehappen/ui-kit'
import React from 'react'

type AspectPanelProps = {
  activeIcon: string | null
  setAspect: (aspect: number) => void
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
}

export const AspectPanel = ({ activeIcon, setAspect, toggleIcon }: AspectPanelProps) => {
  return (
    <div className={s.iconWrapper} onClick={() => toggleIcon('crop')}>
      {activeIcon === 'crop' && (
        <div className={s.cropContainer}>
          <ul className={s.list}>
            <li onClick={() => setAspect(0)}>
              <span>Original</span> <ImageOutline />
            </li>
            <li onClick={() => setAspect(1)}>
              <span>1:1</span>
            </li>
            <li onClick={() => setAspect(4 / 5)}>
              <span>4:5</span>
            </li>
            <li onClick={() => setAspect(16 / 9)}>
              <span>16:9</span>
            </li>
          </ul>
        </div>
      )}
      {activeIcon === 'crop' ? <Expand /> : <Expand fill={'#fffff'} />}
    </div>
  )
}
