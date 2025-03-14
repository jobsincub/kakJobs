import s from '@/features/post/cropPhoto/ui/aspectPanel/aspectPanel.module.scss'
import { Expand } from '@wandrehappen/ui-kit'
import React, { useState } from 'react'

export enum AspectRatio {
  Original = 0,
  Square = 1,
  Portrait = 4 / 5,
  Widescreen = 16 / 9,
}

type AspectPanelProps = {
  activeIcon: string | null
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
  onAspectChange: (ratio: number) => void
}

export const AspectPanel = ({ activeIcon, toggleIcon, onAspectChange }: AspectPanelProps) => {
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>(AspectRatio.Square)

  const handleAspectChange = (ratio: AspectRatio) => {
    setSelectedRatio(ratio)
    onAspectChange(ratio)
  }

  return (
    <div className={s.iconWrapper} onClick={() => toggleIcon('crop')}>
      {activeIcon === 'crop' && (
        <div className={s.cropContainer}>
          <ul className={s.list}>
            <li
              onClick={() => handleAspectChange(AspectRatio.Original)}
              className={selectedRatio === AspectRatio.Original ? s.active : ''}
            >
              <span>Original</span>
            </li>
            <li
              onClick={() => handleAspectChange(AspectRatio.Square)}
              className={selectedRatio === AspectRatio.Square ? s.active : ''}
            >
              <span>1:1</span>
            </li>
            <li
              onClick={() => handleAspectChange(AspectRatio.Portrait)}
              className={selectedRatio === AspectRatio.Portrait ? s.active : ''}
            >
              <span>4:5</span>
            </li>
            <li
              onClick={() => handleAspectChange(AspectRatio.Widescreen)}
              className={selectedRatio === AspectRatio.Widescreen ? s.active : ''}
            >
              <span>16:9</span>
            </li>
          </ul>
        </div>
      )}
      {activeIcon === 'crop' ? <Expand /> : <Expand fill={'#fffff'} />}
    </div>
  )
}
