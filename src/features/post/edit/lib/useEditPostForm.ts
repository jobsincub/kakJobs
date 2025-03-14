import { selectUserName } from '@/entities/user/model/authSlice'
import { useTranslation } from '@/shared/config'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

export type EditPostFormValues = {
  description: string
}
export const PUBLISH_POST_FORM_ID = 'publish-post-form'
export const DESCRIPTION_MAX_LENGTH = 500

export const useEditPostForm = () => {
  const userName = useSelector(selectUserName)
  const { register, handleSubmit, control } = useForm<EditPostFormValues>()

  const {
    t: {
      features: {
        post: { updatePostContent },
      },
    },
  } = useTranslation()

  return { handleSubmit, control, register, userName, updatePostContent }
}
