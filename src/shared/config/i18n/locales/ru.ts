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
      forgotPasswordPage: {
        title: 'Забыл пароль',
        signInLinkText: 'Войти',
        errorMessages: {
          400: 'Пользователь с такой почтой не зарегистрирован',
          403: 'Не прошла проверка reCAPTCHA. Попробуйте позже',
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
      forgotPasswordForm: {
        enterYourEmailText: 'Введите Вашу электронную почту и мы отправим Вм дальнейшие инструкции',
        sentLinkText: 'Ссылка отправлена на почту.',
        sendLinkAgainText: `Если не получили на почту отправьте ссылку повторно`,
        sendLinkAgainButtonText: 'Отправить ссылку повторно',
        sendLinkButtonText: 'Отправить ссылку',
      },
    },
    posts: {
      deletePostDialog: {
        buttonText: 'Удалить пост',
        titleText: 'Удаление поста',
        confirmationText: 'Вы уверены, что хотите удалить этот пост?',
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
