// @flow
import * as React from 'react'
import s from '@/features/post/cropPhoto/ui/cropPhoto.module.scss'
import { MaximizeFill, MaximizeOutline } from '@wandrehappen/ui-kit'

type ZoomPanelProps = {
  activeIcon: string | null
  toggleIcon: (icon: 'zoom' | 'crop' | 'gallery') => void
  zoom: number
  setZoom: (value: number) => void
}
export const ZoomPanel = ({ activeIcon, toggleIcon, zoom, setZoom }: ZoomPanelProps) => {
  return (
    <div className={s.iconWrapper} onClick={() => toggleIcon('zoom')}>
      {activeIcon === 'zoom' && (
        <div className={s.zoomContainer}>
          <input
            type={'range'}
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={e => setZoom(Number(e.target.value))}
          />
        </div>
      )}
      {activeIcon === 'zoom' ? <MaximizeFill /> : <MaximizeOutline />}
    </div>
  )
}
