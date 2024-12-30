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
      forgotPasswordForm: {
        enterYourEmailText: 'Enter your email address and we will send you further instructions',
        sentLinkText: 'The link has been sent by email.',
        sendLinkAgainText: 'If you don’t receive an email send link again',
        sendLinkAgainButtonText: 'Send Link Again',
        sendLinkButtonText: 'Send Link',
      },
    },
    posts: {
      deletePostDialog: {
        buttonText: 'Delete Post',
        titleText: 'Delete Post',
        confirmationText: 'Are you sure you want to delete this post?',
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
