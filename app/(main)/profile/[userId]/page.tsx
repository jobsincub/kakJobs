import MyProfilePage from '@/pages/profile'

export default function Profile({ params }: { params: { userId: string } }) {
  return <MyProfilePage userId={params.userId} />
}
