import { en } from '../locales/en'
import { ru } from '../locales/ru'
import { useCurrentLocal } from './useCurrentLocal'

/**
 * Custom hook to get the translation object based on the current locale.
 * It uses the `useCurrentLocal` hook to determine the current language and
 * returns the corresponding translation object (`en` or `ru`).
 *
 * For more details about i18n visit:
 * https://safronman.gitbook.io/next-i18n-rree78-ewe
 */

export const useTranslation = () => {
  const { currentLocal } = useCurrentLocal()
  const t = currentLocal === 'en' ? en : ru

  return { t }
}
