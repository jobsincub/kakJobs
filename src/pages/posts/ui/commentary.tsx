import Image from 'next/image'
import s from './templatePost.module.scss'
import { Typography } from '@wandrehappen/ui-kit'

export const Commentary = () => {
  return (
    <div className={s.commentaryWrapper}>
      <Image src={''} alt={'profile'} />
      <div className={s.textCommentary}>
        <Typography variant={'bold14'}>
          <span>URLProfiele</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </div>
    </div>
  )
}
