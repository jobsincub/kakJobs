import { useEffect, useRef, useState } from 'react'

import { useSelector } from 'react-redux'
import { selectUserId } from '@/entities/user/model/authSlice'
import { useGetUsersPostsQuery } from '@/entities/post'
import { useRouter } from 'next/navigation'

export const useMyProfilePage = () => {
  const userId = useSelector(selectUserId)
  const router = useRouter()
  if (!userId) {
    router.push('/')
  }
  const [page, setPage] = useState(1)
  const { data, error, isLoading, isFetching } = useGetUsersPostsQuery(
    { userId, page },
    { skip: !userId }
  )
  console.log(data)

  const posts = data?.items || []
  const totalPages = data?.meta.totalPages || 1

  const redirectToPost = (postId: string) => {
    router.push(`/profile/${userId}/${postId}`)
  }

  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!observerRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && page < totalPages && !isFetching) {
          setPage(prev => prev + 1)
        }
      },
      { threshold: 1.0 }
    )

    observer.observe(observerRef.current)
    return () => observer.disconnect()
  }, [page, totalPages, isFetching])

  return {
    posts,
    observerRef,
    redirectToPost,
  }
}
