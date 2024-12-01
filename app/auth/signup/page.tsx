import s from './sign-up.module.scss'

export default function SignUp() {
  return (
    <div className={s.container}>
      <h1>SignUp</h1>
      <label htmlFor={''}></label>
      <input type={'text'} placeholder={'user-name'}></input>
      <input type={'email'} placeholder={'email'}></input>
      <input type={'password'} placeholder={'password'}></input>
      <input type={'password'} placeholder={'confirm password'}></input>
      <input type={'checkbox'}></input>
      <button type={'submit'}>SignUp</button>
    </div>
  )
}
