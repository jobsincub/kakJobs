'use client'

import { useMyProfilePage } from '@/pages/profile/lib/useMyProfilePage'
import Page from '@/widgets/page'

import { Button, Typography } from '@wandrehappen/ui-kit'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import s from './myProfilePage.module.scss'

const MyProfilePage = () => {
  const { posts, observerRef, redirectToPost } = useMyProfilePage()

  const imageUrl = 'https://placeholder.apptor.studio/200/200/product1.png'

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
                <Button
                  key={post.id}
                  // asChild
                  variant={'link'}
                  onClick={() => redirectToPost(post.postImages[0].id)}
                  className={s.imageContainer}
                >
                  <Image
                    className={s.postImage}
                    key={post.postImages[0].id}
                    src={post.postImages[0].imageUrl}
                    alt={post.postImages[0].id}
                    objectFit="contain"
                    objectPosition="center"
                    width="234"
                    height="234"
                  />
                </Button>
              )
          )}
        <div ref={observerRef} />
      </div>
    </Page>
  )
}

export default MyProfilePage
