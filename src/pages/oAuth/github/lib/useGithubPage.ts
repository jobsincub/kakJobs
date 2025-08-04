import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { tokenReceived, useGithubUpdateTokensMutation } from '@/entities/user'
import { useEffect } from 'react'
import { ROUTES } from '@/shared/router/routes'

export const useGithubPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const accessToken = searchParams!.get('accessToken')
  const email = searchParams!.get('email')
  const [githubUpdateTokens, { isSuccess }] = useGithubUpdateTokensMutation()

  useEffect(() => {
    if (accessToken && email) {
      dispatch(tokenReceived({ accessToken }))
      githubUpdateTokens()
    }
  }, [accessToken, dispatch, email, githubUpdateTokens])

  useEffect(() => {
    if (isSuccess) {
      router.replace(ROUTES.HOME)
    }
  }, [isSuccess, router])

  return { accessToken, email }
}
