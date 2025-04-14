'use client'
import { selectUserId } from '@/entities/user/model/authSlice'
import { LogoutDialog } from '@/features/auth/logout'
import { useTranslation } from '@/shared/config'
import { useAppSelector } from '@/shared/lib/store/redux'
import { ROUTES } from '@/shared/router/routes'
import {
  BookmarkOutline,
  HomeOutline,
  MessageCircleOutline,
  PersonOutline,
  PlusSquareOutline,
  Search,
  Trending,
} from '@wandrehappen/ui-kit'
import { Item } from './item/item'
import s from './sidebar.module.scss'

export const Sidebar = () => {
  const {
    t: {
      widgets: { sidebar },
    },
  } = useTranslation()

  const myId = useAppSelector(selectUserId)

  return (
    <nav className={s.sidebar}>
      <div className={s.wrapper}>
        <ul className={s.group}>
          <Item icon={<HomeOutline />} text={sidebar.home} href={ROUTES.HOME} />
          <Item icon={<PlusSquareOutline />} text={sidebar.create} href={ROUTES.CREATE_POST} />
          <Item icon={<PersonOutline />} text={sidebar.myProfile} href={`/profile/${myId}`} />
          <Item icon={<MessageCircleOutline />} text={sidebar.messenger} href="./" />
          <Item icon={<Search />} text={sidebar.search} href="./" />
        </ul>
        <ul className={s.group}>
          <Item icon={<Trending />} text={sidebar.statistics} href="./" />
          <Item icon={<BookmarkOutline />} text={sidebar.favorites} href="./" />
        </ul>
        <li>
          <LogoutDialog />
        </li>
      </div>
    </nav>
  )
}
