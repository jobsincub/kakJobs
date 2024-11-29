import { emailSchema } from '@/shared/lib/validations/emailSchema'
import { PasswordSchema } from '@/shared/lib/validations/passwordSchema'
import { ControlledCheckbox, ControlledTextField } from '@/shared/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signInSchema = z
  .object({
    rememberMe: z.boolean().default(false),
  })
  .merge(emailSchema)
  .merge(PasswordSchema)

export type LoginFormSchema = z.infer<typeof signInSchema>

export const SignInForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: '', password: '', rememberMe: false },
    mode: 'onBlur',
  })

  const onSubmit = (data: LoginFormSchema) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '358px',
          height: '528px',
          border: '1px solid green',
        }}
      >
        <span>email</span>
        <ControlledTextField control={control} name={'email'} />
        {errors.email?.message}
        <span>password</span>
        <ControlledTextField control={control} name={'password'} />
        {errors.password?.message}
        <ControlledCheckbox name={'rememberMe'} control={control} />
        <button type={'submit'}>Submit</button>
      </div>
    </form>
  )
}
