import s from '@/features/post/addPhoto/ui/addPhoto.module.scss'
import { skipToken } from '@reduxjs/toolkit/query'
import { Dialog, DialogBody, DialogContent, DialogDescription } from '@wandrehappen/ui-kit'
import { useRouter } from 'next/navigation'
import { useGetPostByIdQuery } from '../api/postApi'
import { ImageCarousel } from './ImageCarousel/ImageCarousel'

type Props = {
  postId: string | null | undefined
  userId: string
}

export const Post = ({ postId, userId }: Props) => {
  const { data } = useGetPostByIdQuery(postId ?? skipToken)
  const router = useRouter()

  const onOpenChange = () => {
    router.replace(`/profile/${userId}`, { scroll: false })
  }

  const posts = data?.postImages ?? []

  return (
    <Dialog open={!!postId} onOpenChange={onOpenChange}>
      <DialogContent className={s.content}>
        <DialogBody className={s.body}>
          <DialogDescription style={{ display: 'none' }}>
            This dialog allows you to add a photo by dragging and dropping a file or selecting one
            from your computer.
          </DialogDescription>
          <ImageCarousel images={posts} className={s.carousel} />
          <div>1</div>
        </DialogBody>
      </DialogContent>
    </Dialog>
  )
}
