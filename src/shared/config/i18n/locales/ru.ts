import type { LocaleType } from './en'

export const ru: LocaleType = {
  pages: {
    auth: {
      resendVerificationPage: {
        title: 'Ссылка для подтверждения электронной почты устарела',
        text: 'Похоже, что ссылка для подтверждения истекла. Не переживайте, мы можем отправить ссылку снова.',
        errorMessages: {
          400: 'Электронная почта неверна. Пожалуйста, попробуйте снова.',
        },
        alreadyActivated: 'Ваш аккаунт уже подтвержден',
        singInLinkText: 'Войти',
      },
      verifyEmail: {
        title: 'Поздравляем!',
        confirmText: 'Ваш электронный адрес успешно подтвержден',
        alreadyActivated: 'Ваш аккаунт уже подтвержден',
        singInLinkText: 'Войти',
      },
      signInPage: {
        title: 'Войти',
        noAccountText: 'У вас нет аккаунта?',
        signUpLinkText: 'Регистрация',
        errorMessages: {
          401: 'Email или пароль неверны. Пожалуйста, попробуйте снова.',
          400: 'Предоставленные данные недействительны.',
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
      forgotPasswordPage: {
        title: 'Забыл пароль',
        signInLinkText: 'Войти',
        errorMessages: {
          400: 'Пользователь с такой почтой не зарегистрирован',
          403: 'Не прошла проверка reCAPTCHA. Попробуйте позже',
        },
      },
      createNewPasswordPage: {
        title: 'Создание нового пароля',
        passwordErrorMessages: 'Пароли должны совпадать',
        errorMessages: {
          400: 'Предоставленные данные недействительны.',
        },
      },
    },
    legal: {
      layout: {
        btnText: 'Регистрация',
      },
      privacyPolicy: {
        headText: 'Политика конфиденциальности',
      },
      termsService: {
        headText: 'Правила пользования сервисом',
      },
    },
  },
  widgets: {
    sidebar: {
      home: 'Главная',
      create: 'Создать',
      myProfile: 'Мой профиль',
      messenger: 'Мессенджер',
      search: 'Поиск',
      statistics: 'Статистика',
      favorites: 'Избранное',
    },
    header: {
      logIn: 'Войти',
      signUp: 'Регистрация',
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
      logOutDialog: {
        buttonText: 'Выйти',
        titleText: 'Выход',
        confirmationText:
          'Вы действительно хотите выйти из своей учетной записи <1>Epam@epam.com</1>?',
      },
      createNewPasswordForm: {
        passwordLengthText: 'Пароль должен содержать от 6 до 20 символов',
        createNewPasswordButtonText: 'Создать новый пароль',
      },
      resendVerificationForm: {
        resendVerificationButtonText: 'Отправить ссылку для подтверждения',
      },
      forgotPasswordForm: {
        enterYourEmailText: 'Введите Вашу электронную почту и мы отправим Вм дальнейшие инструкции',
        sentLinkText: 'Ссылка отправлена на почту.',
        sendLinkAgainText: `Если не получили на почту отправьте ссылку повторно`,
        sendLinkAgainButtonText: 'Отправить ссылку повторно',
        sendLinkButtonText: 'Отправить ссылку',
      },
    },
    post: {
      publishPostDialog: {
        buttonText: 'Опубликовать',
        titleText: 'Публикация',
      },
      postForm: {
        labelText: 'Добавить описание публикации',
        placeholderText: 'Описание публикации...',
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
