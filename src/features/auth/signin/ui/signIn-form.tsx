import { useForm } from 'react-hook-form'

type FormValues = {
  email: string
  password: string
}

export const SignInForm = () => {
  const { register, handleSubmit } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span>email</span>
        <input {...register('email')} />
        <span>password</span>
        <input {...register('password')} />
        <button type={'submit'}>Submit</button>
      </div>
    </form>
  )
}
