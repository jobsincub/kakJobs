// @flow
import * as React from 'react'
import { useState } from 'react'
import s from '@/features/post/cropPhoto/ui/zoomPanel/zoomPanel.module.scss'
import { MaximizeFill, MaximizeOutline } from '@wandrehappen/ui-kit'

type ZoomPanelProps = {
  activeIcon: string | null
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
}

export const ZoomPanel = ({ activeIcon, toggleIcon }: ZoomPanelProps) => {
  const [scale, setScale] = useState(1)

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = Number(e.target.value)
    setScale(newScale)
    
    // Находим изображение и применяем масштаб
    const image = document.querySelector('img') as HTMLImageElement
    if (image) {
      image.style.transform = `scale(${newScale})`
      image.style.transition = 'transform 0.2s ease-in-out'
    }
  }

  return (
    <div className={s.iconWrapper} onClick={() => toggleIcon('zoom')}>
      {activeIcon === 'zoom' && (
        <div className={s.zoomContainer}>
          <input 
            type={'range'} 
            min={1} 
            max={3} 
            step={0.1}
            value={scale}
            onChange={handleZoomChange}
          />
          <span className={s.zoomValue}>{Math.round(scale * 100)}%</span>
        </div>
      )}
      {activeIcon === 'zoom' ? <MaximizeFill /> : <MaximizeOutline />}
    </div>
  )
}
