import { Button, Textarea, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import {
  DESCRIPTION_MAX_LENGTH,
  EditPostFormValues,
  useEditPostForm,
} from '../../lib/useEditPostForm'
import s from './EditPostForm.module.scss'
import { DescriptionCount } from '@/features/post/ui/PostForm/DescriptionCount'

type Props = {
  onSubmit: (data: EditPostFormValues) => void
}
export const EditPostForm = ({ onSubmit }: Props) => {
  const { handleSubmit, register, control, userName, updatePostContent } = useEditPostForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <div className={s.formWrapper}>
        <div>
          <div className={s.user}>
            Photo User
            <Typography variant={'regular16'} weight={'medium'}>
              {userName}
            </Typography>
          </div>
        </div>
        <Textarea
          {...register('description')}
          labelText={updatePostContent.labelText}
          maxLength={DESCRIPTION_MAX_LENGTH}
          className={s.description}
        />
        <DescriptionCount control={control} maxLength={DESCRIPTION_MAX_LENGTH} />
      </div>
      <div className={s.buttonWrapper}>
        <Button className={s.button}>{updatePostContent.formButtonText}</Button>
      </div>
    </form>
  )
}
