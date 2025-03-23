'use client'

import { Popover, PopoverContent, PopoverTrigger, Typography } from '@wandrehappen/ui-kit'
import s from './templatePost.module.scss'
import { PopoverPortal } from '@radix-ui/react-popover'
import Image from 'next/image'

const commentaryData = [
  {
    profilePhoto: '',
    profileNickname: 'ayan',
    profileCommentary: 'Hello world',
  },
  {
    profilePhoto: '',
    profileNickname: 'maxim',
    profileCommentary: 'Hello world',
  },
  {
    profilePhoto: '',
    profileNickname: 'sasha',
    profileCommentary: 'Hello world',
  },
]
export const TemplatePost = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <button>Open</button>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent className={s.mainContent}>
            <div style={{ backgroundColor: 'red', flex: 1, height: '100%' }}>Gallery</div>
            <div style={{ border: '1px solid red', flex: 1, height: '100%' }}>
              <div className={s.header}>
                <div className={s.profileHeaderWrapper}>
                  <Image src={''} alt={'photo'} />
                  <Typography variant={'h3'}>URLProfiele</Typography>
                </div>
                <div>...</div>
              </div>
              <div className={s.main}>{commentaryData.map()}</div>
            </div>
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </div>
  )
}
