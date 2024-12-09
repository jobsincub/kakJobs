import type { LocaleType } from '@/shared/config/i18n'

export const ru: LocaleType = {
  pages: {
    auth: {
      signInPage: {
        title: 'Войти',
        noAccountText: 'У вас нет аккаунта?',
        signUpLinkText: 'Регистрация',
      },
      verifyEmail: {
        title: 'Поздравляем!',
        confirmText: 'Ваш электронный адрес успешно подтвержден',
        singInLinkText: 'Войти',
      },
    },
  },
  features: {
    auth: {
      signInForm: {
        forgotPasswordLink: 'Забыл пароль',
        signInButtonText: 'Войти',
      },
    },
  },
  shared: {
    validations: {},
  },
}
