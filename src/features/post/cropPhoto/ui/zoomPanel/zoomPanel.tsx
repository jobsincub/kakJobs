import { MaximizeFill, MaximizeOutline } from '@wandrehappen/ui-kit'
import * as React from 'react'
import { useState } from 'react'
import s from './zoomPanel.module.scss'

type ZoomPanelProps = {
  activeIcon: string | null
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
  onZoomChange: (scale: number) => void
}

export const ZoomPanel = ({ activeIcon, toggleIcon, onZoomChange }: ZoomPanelProps) => {
  const [scale, setScale] = useState(1)
  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = Number(e.target.value)
    setScale(newScale)
    onZoomChange(newScale)
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
