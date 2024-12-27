import { selectLocal } from '@/entities/app'
import { useSelector } from 'react-redux'

export const useCurrentLocal = () => {
  const currentLocal = useSelector(selectLocal)
  return { currentLocal }
}
