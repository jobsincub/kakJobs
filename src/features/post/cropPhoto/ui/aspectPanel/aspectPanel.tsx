import s from '@/features/post/cropPhoto/ui/aspectPanel/aspectPanel.module.scss'
import { Expand, ImageOutline } from '@wandrehappen/ui-kit'
import React, { useState } from 'react'

type AspectRatio = '1:1' | '4:5' | '16:9' | 'original'

type AspectPanelProps = {
  activeIcon: string | null
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
  onAspectChange: (ratio: AspectRatio) => void
}

export const AspectPanel = ({ activeIcon, toggleIcon, onAspectChange }: AspectPanelProps) => {
  const [selectedRatio, setSelectedRatio] = useState<AspectRatio>('1:1')

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
              onClick={() => handleAspectChange('original')}
              className={selectedRatio === 'original' ? s.active : ''}
            >
              <span>Original</span> <ImageOutline />
            </li>
            <li
              onClick={() => handleAspectChange('1:1')}
              className={selectedRatio === '1:1' ? s.active : ''}
            >
              <span>1:1</span>
            </li>
            <li
              onClick={() => handleAspectChange('4:5')}
              className={selectedRatio === '4:5' ? s.active : ''}
            >
              <span>4:5</span>
            </li>
            <li
              onClick={() => handleAspectChange('16:9')}
              className={selectedRatio === '16:9' ? s.active : ''}
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
