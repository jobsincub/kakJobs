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
        notificationText(email: string) {
          return `Мы отправили ссылку для подтверждения вашей электронной почты на адрес ${email}`
        },
      },
      logOut: {
        buttonText: 'Выйти',
        titleText: 'Выход',
        confirmationText:
          'Вы действительно хотите выйти из своей учетной записи <1>Epam@epam.com</1>?',
      },
    },
  },
  shared: {
    validations: {},
    dialogs: {
      ok: 'ОК',
      yes: 'Да',
      no: 'Нет',
    },
  },
}
