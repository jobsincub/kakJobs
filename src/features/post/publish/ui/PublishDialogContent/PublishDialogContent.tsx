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
import { SubmitHandler, useForm, useWatch } from 'react-hook-form'

export type PublishDialogFormValues = {
  description: string
}

const PUBLISH_FORM_ID = 'publishForm'
const DESCRIPTION_MAX_LENGTH = 500

export const PublishDialogContent = () => {
  console.log('PublishDialogContent')
  const userName = useSelector(selectUserName)

  const { register, handleSubmit, control } = useForm<PublishDialogFormValues>()
  const onSubmit: SubmitHandler<PublishDialogFormValues> = data => console.log(data)
  const descriptionValue = useWatch({
    control,
    name: 'description',
    defaultValue: '',
  })

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
        <div className={s.imagesSlider}>IMAGES SLIDER</div> {/* TODO: добавить слайдер фоток */}
        <form id={PUBLISH_FORM_ID} className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.formTopWrapper}>
            <div className={s.profile}>
              {/* <div></div> TODO: добавить аватар */}
              <Typography variant={'regular16'} weight={'medium'}>
                {userName}
              </Typography>
            </div>
            {/*<Textarea*/}
            {/*  {...register('description')}*/}
            {/*  labelText={'Add publication descriptions'}*/}
            {/*  placeholder={'Text-area'}*/}
            {/*/>*/}
            <textarea {...register('description')} maxLength={DESCRIPTION_MAX_LENGTH} />
            <Typography asChild variant={'small'} color={'light-900'} align={'end'}>
              <div>
                {descriptionValue.length}/{DESCRIPTION_MAX_LENGTH}
              </div>
            </Typography>
          </div>
        </form>
      </DialogBody>
    </DialogContent>
  )
}
