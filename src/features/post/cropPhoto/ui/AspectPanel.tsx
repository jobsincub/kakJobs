import s from '@/features/post/cropPhoto/ui/cropPhoto.module.scss'
import { Expand, ImageOutline } from '@wandrehappen/ui-kit'
import React from 'react'

type AspectPanelProps = {
  activeIcon: string | null
  setAspect: (aspect: null | number) => void
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
}
const aspectRatios = [
  { value: null, text: 'Original' },
  { value: 4 / 3, text: '4/3' },
  { value: 16 / 9, text: '16/9' },
  { value: 1 / 2, text: '1/2' },
]

export const AspectPanel = ({ activeIcon, setAspect, toggleIcon }: AspectPanelProps) => {
  return (
    <div className={s.iconWrapper} onClick={() => toggleIcon('crop')}>
      {activeIcon === 'crop' && (
        <div className={s.cropContainer}>
          <ul className={s.list}>
            {aspectRatios.map((aspect, index) => {
              return (
                <li onClick={() => setAspect(aspect.value)} key={index}>
                  <span>{aspect.text}</span> <ImageOutline />
                </li>
              )
            })}
            {/*<li onClick={() => setAspect(0)}>*/}
            {/*  <span>Original</span> <ImageOutline />*/}
            {/*</li>*/}
            {/*<li onClick={() => setAspect(1)}>*/}
            {/*  <span>1:1</span>*/}
            {/*</li>*/}
            {/*<li onClick={() => setAspect(4 / 5)}>*/}
            {/*  <span>4:5</span>*/}
            {/*</li>*/}
            {/*<li onClick={() => setAspect(16 / 9)}>*/}
            {/*  <span>16:9</span>*/}
            {/*</li>*/}
          </ul>
        </div>
      )}
      {activeIcon === 'crop' ? <Expand /> : <Expand fill={'#fffff'} />}
    </div>
  )
}
