import { selectLocal } from '@/entities/app/model'
import { useSelector } from 'react-redux'

export const useCurrentLocal = () => {
  const currentLocal = useSelector(selectLocal)
  return { currentLocal }
}
