'use client'

import { AuthFormWrapper } from '@/shared/ui/authFormWrapper'
import Page from '@/widgets/page'

import { Button, Typography } from '@wandrehappen/ui-kit'
import React from 'react'
import s from '@/widgets/header/ui/Header.module.scss'
import Link from 'next/link'

const MyProfilePage = () => {
  return (
    <Page mt={36}>
      <div className={s.headerContainer}>
        <div className={s.profileName}>
          <Typography asChild color={'light-100'} variant={'h1'}>
            <h1>Name</h1>
          </Typography>
          <Button asChild variant={'link'}>
            Profile Settings
          </Button>
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
    </Page>
  )
}

export default MyProfilePage
