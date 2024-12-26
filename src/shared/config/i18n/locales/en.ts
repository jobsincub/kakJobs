export const en = {
  pages: {
    auth: {
      signInPage: {
        title: 'Sign In',
        noAccountText: 'Don’t have an account?',
        signUpLinkText: 'Sign Up',
        errorMessages: {
          400: 'The email or password are incorrect. Try again please',
          401: 'The provided data is invalid.',
        },
      },
      forgotPasswordPage: {
        title: 'Forgot Password',
        signInLinkText: 'Back to Sign In',
        errorMessages: {
          400: "User with this email doesn't exist",
          403: 'Failed to validate reCAPTCHA. Please try again later',
        },
      },
      createNewPasswordPage: {
        title: 'Create New Password',
        passwordErrorMessages: 'The passwords must match',
        errorMessages: {
          400: 'The provided data is invalid.',
        },
      },
    },
    legal: {
      layout: {
        btnText: 'Back to Sign Up',
      },
      privacyPolicy: {
        headText: 'Политика конфиденциальности',
      },
      termsService: {
        headText: 'Правила пользования сервисом',
      },
    },
  },
  features: {
    auth: {
      signInForm: {
        forgotPasswordLink: 'Forgot Password',
        signInButtonText: 'Sign In',
      },
      emailSent: {
        titleText: 'Email sent',
        notificationText(email: string) {
          return `We have sent a link to confirm your email to ${email}`
        },
      },
      logOutDialog: {
        buttonText: 'Log Out',
        titleText: 'Log Out',
        confirmationText: 'Are you really want to log out of your account <1>Epam@epam.com</1>?',
      },
      forgotPasswordForm: {
        enterYourEmailText: 'Enter your email address and we will send you further instructions',
        sentLinkText: 'The link has been sent by email.',
        sendLinkAgainText: 'If you don’t receive an email send link again',
        sendLinkAgainButtonText: 'Send Link Again',
        sendLinkButtonText: 'Send Link',
      },
      createNewPasswordForm: {
        passwordLengthText: 'Your password must be between 6 and 20 characters',
        createNewPasswordButtonText: 'Create new password',
      },
    },
  },
  shared: {
    validations: {
      emailSchema: {
        email: 'You entered an invalid email.',
      },
      passwordSchema: {
        minLength: 'Password must be at least 3 characters',
      },
    },
    dialogs: {
      ok: 'OK',
      yes: 'Yes',
      no: 'No',
    },
  },
}
export type LocaleType = typeof en
