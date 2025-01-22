import React from 'react'
import { ArrowLeft, ArrowRight } from '@wandrehappen/ui-kit'
import s from './cropPhoto.module.scss'

interface NavigationButtonsProps {
  isBeginning: boolean
  isEnd: boolean
}

export const NavigationButtons = ({ isBeginning, isEnd }: NavigationButtonsProps) => (
  <>
    <div
      className={`${s.iconWrapper} ${s.customPrev}`}
      style={isBeginning ? { display: 'none' } : { display: 'flex' }}
    >
      <ArrowLeft />
    </div>
    <div
      className={`${s.iconWrapper} ${s.customNext}`}
      style={isEnd ? { display: 'none' } : { display: 'flex' }}
    >
      <ArrowRight />
    </div>
  </>
)
