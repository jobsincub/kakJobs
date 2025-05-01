'use client'
import { Dialog, DialogBody, DialogContent, DialogDescription, Menu } from '@wandrehappen/ui-kit'
import { useRouter } from 'next/navigation'
import { PostData } from '../api/postApi'
import { ImageCarousel } from './ImageCarousel/ImageCarousel'
import s from './post.module.scss'

type Props = {
  post: PostData | null
  userId: string
}

export const Post = ({ post, userId }: Props) => {
  const router = useRouter()

  const onOpenChange = () => {
    router.push(`/profile/${userId}`, { scroll: false })
  }

  const postImages = post?.postImages ?? []

  return (
    <Dialog open={!!post} onOpenChange={onOpenChange}>
      <DialogContent className={s.content}>
        <DialogBody className={s.body}>
          <DialogDescription style={{ display: 'none' }}>
            This dialog allows you to add a photo by dragging and dropping a file or selecting one
            from your computer.
          </DialogDescription>
          <ImageCarousel images={postImages} className={s.carousel} />
          <div className={s.wrapper}>
            <div className={s.header}>
              <span>userName</span>
              <Menu />
            </div>
            <div className={s.comments}>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}
