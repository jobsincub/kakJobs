import type { LocaleType } from './en'

export const ru: LocaleType = {
  pages: {
    auth: {
      signInPage: {
        title: 'Войти',
        noAccountText: 'У вас нет аккаунта?',
        signUpLinkText: 'Регистрация',
        errorMessages: {
          400: 'Email или пароль неверны. Пожалуйста, попробуйте снова.',
          401: 'Предоставленные данные недействительны.',
        },
      },
      resendVerificationPage: {
        title: 'Ссылка для подтверждения электронной почты устарела',
        text: 'Похоже, что ссылка для подтверждения истекла. Не переживайте, мы можем отправить ссылку снова.',
        errorMessages: {
          400: 'Электронная почта неверна. Пожалуйста, попробуйте снова.',
        },
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
      resendVerificationForm: {
        resendVerificationButtonText: 'Отправить ссылку для подтверждения',
      },
    },
  },
  shared: {
    validations: {
      emailSchema: {
        email: 'Вы ввели не почту',
      },
      passwordSchema: {
        minLength: 'Пароль должен содержать не менее 3 символов.',
      },
    },
    dialogs: {
      ok: 'ОК',
      yes: 'Да',
      no: 'Нет',
    },
  },
}
