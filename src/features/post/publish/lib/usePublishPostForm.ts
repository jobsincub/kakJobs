import { useSelector } from 'react-redux'
import { selectUserName } from '@/entities/user/model/authSlice'
import { useForm } from 'react-hook-form'

export type PublishPostFormValues = {
  description: string
}
export const PUBLISH_POST_FORM_ID = 'publish-post-form'
export const DESCRIPTION_MAX_LENGTH = 500

export const usePublishPostForm = () => {
  const userName = useSelector(selectUserName)
  const { register, handleSubmit, control } = useForm<PublishPostFormValues>()

  return { userName, handleSubmit, control, register }
}
