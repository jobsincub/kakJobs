'use client'

import { AuthFormWrapper } from '@/shared/ui/authFormWrapper'
import Page from '@/widgets/page'

import { Button, Typography } from '@wandrehappen/ui-kit'
import React, { useEffect, useRef, useState } from 'react'
import s from './myProfilePage.module.scss'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { selectUserId } from '@/entities/user/model/authSlice'
import { useGetUsersPostsQuery } from '@/entities/post'

const MyProfilePage = () => {
  //const { postsArray } = useMyProfilePage()
  const userId = useSelector(selectUserId)
  const [page, setPage] = useState(1)
  const { data: posts, error, isLoading, isFetching } = useGetUsersPostsQuery({ userId, page })

  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!observerRef.current) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isFetching) {
          setPage(prev => prev + 1)
        }
      },
      { threshold: 1.0 }
    )
    observer.observe(observerRef.current)
    return () => observer.disconnect()
  }, [isFetching])
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
                {0} <br /> {'Following'}
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link href={''} color={'light-100'} className={s.profileCounter}>
                {0} <br /> {'Followers'}
              </Link>
            </Button>
            <Button asChild variant={'link'}>
              <Link href={''} color={'light-100'} className={s.profileCounter}>
                {0} <br /> {'Publications'}
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
        {posts &&
          posts.data.length > 0 &&
          posts.data.map(post => (
            <div key={post.id}>
              {/*<Image src={post.postImages[0]} alt={`Image ${post.postImages[0].id}`} width={234} height={228} />*/}
              <img
                key={post.postImages[0].id}
                src={post.postImages[0].imageUrl}
                alt="Post Image"
                width={234}
                height={228}
              />
            </div>
          ))}
      </div>
    </Page>
  )
}

export default MyProfilePage
