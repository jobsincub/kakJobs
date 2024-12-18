import type { LocaleType } from '@/shared/config/i18n'

export const ru: LocaleType = {
  pages: {
    auth: {
      signInPage: {
        title: 'Войти',
        noAccountText: 'У вас нет аккаунта?',
        signUpLinkText: 'Регистрация',
      },
      signUpPage: {
        title: 'Регистрация',
        isHaveAccount: 'Уже есть аккаунт?',
        signInLinkText: 'Войти',
      },
    },
  },
  features: {
    auth: {
      signInForm: {
        forgotPasswordLink: 'Забыл пароль',
        signInButtonText: 'Войти',
      },
      signUpForm: {
        agreeStart: 'Я согласен с ',
        agreeMid: 'и',
        terms: 'правилами сервиса',
        privacy: 'политикой конфиденциальности',
        signUpLinkText: 'Регистрация',
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
    validations: {
      usernameSchema: {
        minValue: 'Логин пользователя должен быть не менее 6 символов',
        maxValue: 'Логин пользователя должен быть не более 30 символов',
      },
      emailSchema: {
        emailValidation: 'Электронный адрес должен соответствовать\n example@example.com',
      },
      passwordSchema: {
        minValue: 'Пароль должен быть не менее 6 символов',
        regexText:
          'Пароль должен содержать a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~',
      },
      confirmPassSchema: {
        confirmPass: 'Пароли должны совпадать',
      },
    },
    dialogs: {
      ok: 'ОК',
      yes: 'Да',
      no: 'Нет',
    },
  },
}
