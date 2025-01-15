'use client'

import {
  ArrowIos,
  Button,
  DialogBody,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Textarea,
  Typography,
} from '@wandrehappen/ui-kit'
import s from './PublishDialogContent.module.scss'
import { useSelector } from 'react-redux'
import { selectUserName } from '@/entities/user/model/authSlice'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DescriptionCount } from './DescriptionCount'

export type PublishDialogFormValues = {
  description: string
}

const PUBLISH_FORM_ID = 'publishForm'
const DESCRIPTION_MAX_LENGTH = 500

export const PublishDialogContent = () => {
  const userName = useSelector(selectUserName)
  const { register, handleSubmit, control } = useForm<PublishDialogFormValues>()
  const onSubmit: SubmitHandler<PublishDialogFormValues> = data => console.log(data)

  return (
    <DialogContent className={s.dialogContent}>
      <DialogHeader isCloseIconVisible={false}>
        <Button className={s.backIconBtn} variant={'link'}>
          <ArrowIos />
        </Button>
        <DialogTitle>Publication</DialogTitle>
        <Button type={'submit'} form={PUBLISH_FORM_ID} className={s.publishBtn} variant={'link'}>
          Publish
        </Button>
      </DialogHeader>
      <DialogBody className={s.dialogBody}>
        <div className={s.imagesSlider}>IMAGES SLIDER</div>
        {/* TODO: добавить слайдер фоток */}
        <form id={PUBLISH_FORM_ID} className={s.form} onSubmit={handleSubmit(onSubmit)}>
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
            />
            <DescriptionCount control={control} maxLength={DESCRIPTION_MAX_LENGTH} />
          </div>
        </form>
      </DialogBody>
    </DialogContent>
  )
}
