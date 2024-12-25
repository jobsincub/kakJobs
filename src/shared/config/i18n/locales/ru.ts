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
      signUpPage: {
        title: 'Регистрация',
        isHaveAccount: 'Уже есть аккаунт?',
        signInLinkText: 'Войти',
        errorMessages: {
          400: 'Пользователь уже существует или данные недействительны',
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
      signUpForm: {
        checkBoxText: 'Я согласен с <1>правилами сервиса</1> и <2>политикой конфиденциальности</2>',
        terms: 'правилами сервиса',
        privacy: 'политикой конфиденциальности',
        signUpLinkText: 'Регистрация',
        usernameSchema: {
          minValue: 'Логин пользователя должен быть не менее 6 символов',
          maxValue: 'Логин пользователя должен быть не более 30 символов',
        },
        agreeTermsSchema: {
          agreeMsg: 'Принять соглашение',
        },
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
      emailValidateSchema: {
        emailValidation: 'Электронный адрес должен соответствовать\n example@example.com',
      },
      comparePassError: {
        passError: 'Пароли должны совпадать',
      },
      emailSchema: {
        email: 'Вы ввели не почту',
      },
      passwordSchema: {
        minLength: 'Пароль должен содержать не менее 3 символов.',
        regexText:
          'Пароль должен содержать a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~',
      },
    },
    dialogs: {
      ok: 'ОК',
      yes: 'Да',
      no: 'Нет',
    },
  },
}
