import { useGetUsersPostsQuery } from '@/entities/post'
import { selectUserId } from '@/entities/user/model/authSlice'
import { skipToken } from '@reduxjs/toolkit/query'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useSelector } from 'react-redux'

export const useMyProfilePage = () => {
  const userId = useSelector(selectUserId)
  const router = useRouter()

  // if (!userId) {
  //   router.push('/')
  // }
  const [page, setPage] = useState(1)

  const params = userId ? { userId, page } : skipToken

  const { data, isFetching } = useGetUsersPostsQuery(params)

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
    userId,
  }
}
