'use client'
import { selectUserName } from '@/entities/user/model/authSlice'
import { skipToken } from '@reduxjs/toolkit/query'
import { Dialog, DialogBody, DialogContent, DialogDescription, Menu } from '@wandrehappen/ui-kit'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { useGetPostByIdQuery } from '../api/postApi'
import { ImageCarousel } from './ImageCarousel/ImageCarousel'
import s from './post.module.scss'

type Props = {
  postId: string | null | undefined
  userId: string
}

export const Post = ({ postId, userId }: Props) => {
  const { data } = useGetPostByIdQuery(postId ?? skipToken)
  const userName = useSelector(selectUserName)
  const router = useRouter()

  const onOpenChange = () => {
    router.push(`/profile/${userId}`, { scroll: false })
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
          <div className={s.wrapper}>
            <div className={s.header}>
              <span>{userName}</span>
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
