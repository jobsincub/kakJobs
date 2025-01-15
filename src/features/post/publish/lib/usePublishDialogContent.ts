import { SubmitHandler } from 'react-hook-form'
import { PublishPostFormValues } from '@/features/post/publish'
import { useAppDispatch } from '@/shared/lib'

export const usePublishDialogContent = () => {
  const dispatch = useAppDispatch()
  const onSubmit: SubmitHandler<PublishPostFormValues> = data => console.log(data)

  return { dispatch, onSubmit }
}
