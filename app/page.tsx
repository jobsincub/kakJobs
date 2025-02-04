'use client'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { Button } from '@wandrehappen/ui-kit'
import { selectUserId } from '@/entities/user/model/authSlice'
import { CreatePost } from '@/widgets/createPost'

export default function Home() {
  const userId = useSelector(selectUserId)
  const router = useRouter()
  const handler = () => {
    router.push(`/profile/${userId}`)
  }

  return (
    <>
      <Button onClick={handler}>My profile</Button>
      <CreatePost />
    </>
  )
}
