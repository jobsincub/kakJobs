'use client'
import { changeLocal, initializeLocal, type Local } from '@/entities/app/model'
import { useCurrentLocal } from '@/shared/config'
import { useAppDispatch } from '@/shared/lib'
import { RuFlag, Select, UkFlag } from '@wandrehappen/ui-kit'
import { useEffect } from 'react'
import s from './languageSwitcher.module.scss'

const options = [
  { name: 'English', value: 'en', icon: <UkFlag /> },
  { name: 'Русский', value: 'ru', icon: <RuFlag /> },
]

export const LanguageSwitcher = () => {
  const { currentLocal } = useCurrentLocal()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(initializeLocal())
  }, [dispatch])

  const onValueChange = (local: Local) => {
    dispatch(changeLocal({ local }))
  }

  return (
    <Select
      value={currentLocal}
      className={s.select}
      onValueChange={onValueChange}
      options={options}
    ></Select>
  )
}
