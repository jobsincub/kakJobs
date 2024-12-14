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
      emailSent: {
        titleText: 'Отправление письма',
        notificationText: 'Мы отправили ссылку для подтверждения вашей электронной почты на адрес',
      },
    },
  },
  shared: {
    validations: {},
    dialogs: {
      ok: 'ОК',
    },
  },
}
