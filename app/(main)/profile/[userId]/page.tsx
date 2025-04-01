'use server'
import { Post } from '@/entities/post/ui/post'
import MyProfilePage from '@/pages/profile'
import React from 'react'

type Props = {
  params: { userId: string }
  searchParams: { postId?: string }
}

export default async function Profile({ params, searchParams }: Props) {
  return (
    <>
      <MyProfilePage userId={params.userId} />
      <Post userId={params.userId} postId={searchParams.postId} />
    </>
  )
}
