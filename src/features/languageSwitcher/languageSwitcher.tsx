'use client'
import { changeLocal, type Local } from '@/entities/app/model'
import { useCurrentLocal } from '@/shared/config/i18n'
import { RuFlag, Select, UkFlag } from '@wandrehappen/ui-kit'
import { useDispatch } from 'react-redux'
import s from './languageSwitcher.module.scss'

const options = [
  { name: 'English', value: 'en', icon: <UkFlag /> },
  { name: 'Русский', value: 'ru', icon: <RuFlag /> },
]

export const LanguageSwitcher = () => {
  const dispatch = useDispatch()
  const { currentLocal } = useCurrentLocal()

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
