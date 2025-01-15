import s from './PublishPostForm.module.scss'
import { Textarea, Typography } from '@wandrehappen/ui-kit'
import { DescriptionCount } from './DescriptionCount'
import {
  DESCRIPTION_MAX_LENGTH,
  PUBLISH_POST_FORM_ID,
  PublishPostFormValues,
  usePublishPostForm,
} from '../../../lib/usePublishPostForm'

type Props = {
  onSubmit: (data: PublishPostFormValues) => void
}

export const PublishPostForm = ({ onSubmit }: Props) => {
  const { handleSubmit, register, userName, control } = usePublishPostForm()

  return (
    <form id={PUBLISH_POST_FORM_ID} className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.formTopWrapper}>
        <div className={s.profile}>
          {/* <div></div> TODO: добавить аватар */}
          <Typography variant={'regular16'} weight={'medium'}>
            {userName}
          </Typography>
        </div>
        <Textarea
          {...register('description')}
          labelText={'Add publication descriptions'}
          placeholder={'Text-area'}
          maxLength={DESCRIPTION_MAX_LENGTH}
          className={s.description}
        />
        <DescriptionCount control={control} maxLength={DESCRIPTION_MAX_LENGTH} />
      </div>
    </form>
  )
}
