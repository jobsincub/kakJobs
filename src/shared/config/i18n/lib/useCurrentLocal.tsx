import { selectLocale } from '@/entities/app'
import { useSelector } from 'react-redux'

export const useCurrentLocal = () => {
  const currentLocale = useSelector(selectLocale)
  return { currentLocale }
}
