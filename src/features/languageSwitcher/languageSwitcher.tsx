'use client'
import { changeLocal, type Local } from '@/entities/app/model'
import { useCurrentLocal } from '@/shared/config/i18n'
import { Select } from '@wandrehappen/ui-kit'
import { useDispatch } from 'react-redux'
import s from './languageSwitcher.module.scss'

export const LanguageSwitcher = () => {
  const dispatch = useDispatch()
  const { currentLocal } = useCurrentLocal()
  const options = [
    { name: 'English', value: 'en' },
    { name: 'Русский', value: 'ru' },
  ]

  const onValueChange = (local: Local) => {
    dispatch(changeLocal({ local }))
  }

  return (
    <Select
      className={s.select}
      defaultValue={currentLocal}
      onValueChange={onValueChange}
      options={options}
    ></Select>
  )
}
