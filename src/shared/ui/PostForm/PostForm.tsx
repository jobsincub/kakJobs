import { useForm } from 'react-hook-form'
import { Button, Textarea, Typography } from '@wandrehappen/ui-kit'
import { DescriptionCount } from './DescriptionCount'
import { Post } from '@/entities/post/api/postApi'
import { DESCRIPTION_MAX_LENGTH, POST_FORM_ID } from '../../model'
import { useSelector } from 'react-redux'
import { selectUserName } from '@/entities/user/model/authSlice'
import s from './PostForm.module.scss'

export type PostFormValues = {
  description: string
}

type Props = {
  defaultValues?: Partial<Post>
  onSubmit: (data: PostFormValues) => void
}

export const PostForm = ({ defaultValues, onSubmit }: Props) => {
  const userName = useSelector(selectUserName)
  const { handleSubmit, register, control } = useForm<PostFormValues>({
    defaultValues: defaultValues || {
      description: '',
    },
  })

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
          labelText={'Add publication description'}
          placeholder="Post description..."
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
