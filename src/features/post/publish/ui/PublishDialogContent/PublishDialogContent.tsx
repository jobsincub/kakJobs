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

export const PublishDialogContent = () => {
  const userName = useSelector(selectUserName)

  return (
    <DialogContent className={s.dialogContent}>
      <DialogHeader isCloseIconVisible={false}>
        <Button className={s.backIconBtn} variant={'link'}>
          <ArrowIos />
        </Button>
        <DialogTitle>Publication</DialogTitle>
        <Button className={s.publishBtn} variant={'link'}>
          Publish
        </Button>
      </DialogHeader>
      <DialogBody className={s.dialogBody}>
        <div className={s.imagesSlider}>IMAGES SLIDER</div> {/* TODO: добавить слайдер фоток */}
        <form className={s.form}>
          <div className={s.formTopWrapper}>
            <div>
              {/* <div></div> TODO: добавить аватар */}
              <Typography variant={'regular16'} className={s.userName}>
                {/* TODO: заменить класс на проп weight после обновления UI-Kit */}
                {userName}
              </Typography>
            </div>
            <Textarea labelText={'Add publication descriptions'} placeholder={'Text-area'} />
          </div>
        </form>
      </DialogBody>
    </DialogContent>
  )
}
