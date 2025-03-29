import { type PostItems } from '@/entities/post/api/postApi'
import { Button, Textarea, Typography } from '@wandrehappen/ui-kit'
import { useForm } from 'react-hook-form'
import { usePostForm } from '../../lib/usePostForm'
import { DESCRIPTION_MAX_LENGTH, POST_FORM_ID } from '../../model'
import { DescriptionCount } from './DescriptionCount'
import s from './PostForm.module.scss'
import { useEffect } from 'react'

export type PostFormValues = {
  description: string
}

type Props = {
  defaultValues?: Partial<PostItems>
  onSubmit: (data: PostFormValues) => void
  formDirtyChange?: (isDirty: boolean) => void
}
export const PostForm = ({ defaultValues, onSubmit, formDirtyChange }: Props) => {
  const { userName, postForm } = usePostForm()
  const {
    handleSubmit,
    register,
    control,
    formState: { isDirty },
  } = useForm<PostFormValues>({
    defaultValues: defaultValues || {
      description: '',
    },
  })

  useEffect(() => {
    formDirtyChange?.(isDirty)
  }, [isDirty, formDirtyChange])

  return (
    <form id={POST_FORM_ID} className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formTopWrapper}>
        <div className={s.profile}>
          {/* <div></div> TODO: добавить аватар */}
          <Typography variant={'regular16'} weight={'medium'}>
            {userName}
          </Typography>
        </div>
        <Textarea
          {...register('description')}
          labelText={postForm.labelText}
          placeholder={postForm.placeholderText}
          maxLength={DESCRIPTION_MAX_LENGTH}
          className={s.description}
        />
        <DescriptionCount control={control} maxLength={DESCRIPTION_MAX_LENGTH} />
      </div>
      {defaultValues && (
        <div className={s.formBottomWrapper}>
          <Button>Save Changes</Button>
        </div>
      )}
    </form>
  )
}
