import { SubmitHandler } from 'react-hook-form'
import { PublishPostFormValues } from '@/features/post/publish'

export const usePublishDialogContent = () => {
  const onSubmit: SubmitHandler<PublishPostFormValues> = data => console.log(data)

  return { onSubmit }
}
