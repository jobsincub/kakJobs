'use client'

import { Post } from '@/entities/post/ui/post'
import { useMyProfilePage } from '@/pages/profile/lib/useMyProfilePage'
import Page from '@/widgets/page'

import { Button, Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import s from './myProfilePage.module.scss'

type Props = {
  userId: string
}

const MyProfilePage = ({ userId }: Props) => {
  const router = useRouter()

  if (!userId) {
    router.push('/')
  }

  const { posts, observerRef } = useMyProfilePage()
  const imageUrl = 'https://placeholder.apptor.studio/200/200/product1.png'

  const searchParams = useSearchParams()
  const postId = searchParams?.get('postId')

  return (
    <Page mt={36}>
      <div className={s.headerContainer}>
        <div className={s.icon} style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className={s.profileHeader}>
          <div className={s.profileCNameContainer}>
            <Typography asChild color={'light-100'} variant={'h1'}>
              <h1>Name</h1>
            </Typography>
            <Button asChild variant={'link'}>
              <Link href={''} color={'light-100'} className={s.profileCounter}>
                {'Profile Settings'}
              </Link>
            </Button>
          </div>
          <div className={s.profileCountersContainer}>
            <Button asChild variant={'link'}>
              <Link href={''} color={'light-100'} className={s.profileCounter}>
                <span>{0}</span>
                <span>{'Following'}</span>
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link href={''} color={'light-100'} className={s.profileCounter}>
                <span>{0}</span>
                <span>{'Followers'}</span>
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link href={''} color={'light-100'} className={s.profileCounter}>
                <span>{0}</span>
                <span>{'Publications'}</span>
              </Link>
            </Button>
          </div>
          <Typography asChild color={'light-100'} variant={'h1'}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </Typography>
        </div>
      </div>
      <div className={s.gridContainer}>
        {posts.length > 0 &&
          posts.map(
            post =>
              post.postImages.length > 0 && (
                <Link
                  key={post.id}
                  href={`/profile/${userId}?postId=${post.id}`}
                  scroll={false}
                  className={s.imageContainer}
                >
                  <Image
                    src={post.postImages[0].imageUrl}
                    alt={post.description}
                    width={234}
                    height={234}
                    objectFit="contain"
                    objectPosition="center"
                  />
                </Link>
              )
          )}
        <div ref={observerRef} />
      </div>
      <Post postId={postId} userId={userId} />
    </Page>
  )
}

export default MyProfilePage
