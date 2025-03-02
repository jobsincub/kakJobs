// @flow
import * as React from 'react'
import { useState } from 'react'
import s from '@/features/post/cropPhoto/ui/zoomPanel/zoomPanel.module.scss'
import { MaximizeFill, MaximizeOutline } from '@wandrehappen/ui-kit'

type ZoomPanelProps = {
  activeIcon: string | null
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
  onZoomChange: (scale: number) => void
  currentScale: number
}

export const ZoomPanel = ({ activeIcon, toggleIcon, onZoomChange, currentScale }: ZoomPanelProps) => {
  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = Number(e.target.value)
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
            value={currentScale}
            onChange={handleZoomChange}
          />
          <span className={s.zoomValue}>{Math.round(currentScale * 100)}%</span>
        </div>
      )}
      {activeIcon === 'zoom' ? <MaximizeFill /> : <MaximizeOutline />}
    </div>
  )
}
