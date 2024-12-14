import type { LocaleType } from '@/shared/config/i18n'

export const ru: LocaleType = {
  pages: {
    auth: {
      signInPage: {
        title: 'Войти',
        noAccountText: 'У вас нет аккаунта?',
        signUpLinkText: 'Регистрация',
      },
    },
  },
  features: {
    auth: {
      signInForm: {
        forgotPasswordLink: 'Забыл пароль',
        signInButtonText: 'Войти',
      },
      logOut: {
        buttonText: 'Выйти',
        titleText: 'Выход',
        confirmationText: 'Вы действительно хотите выйти из своей учетной записи',
      },
    },
  },
  shared: {
    validations: {},
    dialogs: {
      yes: 'Да',
      no: 'Нет',
    },
  },
}
