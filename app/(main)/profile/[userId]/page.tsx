'use server'
import { Post } from '@/entities/post/ui/post'
import MyProfilePage from '@/pages/profile'
import React from 'react'
import { BACKEND_BASE_URL } from '@/shared/config'
import { PostData } from '@/entities/post/api/postApi'

type Props = {
  params: { userId: string }
  searchParams: { postId?: string }
}

export default async function Profile({ params, searchParams: { postId } }: Props) {
  const postResponse = await fetch(`${BACKEND_BASE_URL}posts/post/${postId}`)
  const postData = (await postResponse.json()) as ApiResponse<PostData | null>
  const post = postData.data

  return (
    <>
      <MyProfilePage userId={params.userId} />
      <Post userId={params.userId} post={post} />
    </>
  )
}
