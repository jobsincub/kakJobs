'use client'
import { changeLocaleThunk, type Locale } from '@/entities/app'
import { useCurrentLocal } from '@/shared/config'
import { useAppDispatch } from '@/shared/lib'

import { RuFlag, Select, UkFlag } from '@wandrehappen/ui-kit'
import s from './languageSwitcher.module.scss'

const options = [
  { name: 'English', value: 'en', icon: <UkFlag /> },
  { name: 'Русский', value: 'ru', icon: <RuFlag /> },
]

export const LanguageSwitcher = () => {
  const dispatch = useAppDispatch()

  const { currentLocale } = useCurrentLocal()

  const onValueChange = (locale: Locale) => {
    dispatch(changeLocaleThunk({ locale }))
  }

  return (
    <Select
      value={currentLocale}
      defaultValue={currentLocale}
      className={s.select}
      onValueChange={onValueChange}
      options={options}
    />
  )
}
