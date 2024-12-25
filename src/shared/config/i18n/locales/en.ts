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
      createNewPasswordPage: {
        title: 'Create New Password',
        passwordErrorMessages: 'The passwords must match',
        errorMessages: {
          400: 'The provided data is invalid.',
        },
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
      logOut: {
        buttonText: 'Log Out',
        titleText: 'Log Out',
        confirmationText: 'Are you really want to log out of your account <1>Epam@epam.com</1>?',
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
