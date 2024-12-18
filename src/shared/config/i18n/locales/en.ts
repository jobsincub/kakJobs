export const en = {
  pages: {
    auth: {
      signInPage: {
        title: 'Sign In',
        noAccountText: 'Don’t have an account?',
        signUpLinkText: 'Sign Up',
      },
      signUpPage: {
        title: 'Sign Up',
        isHaveAccount: 'Do you have an account?',
        signInLinkText: 'Sign In',
      },
    },
  },
  features: {
    auth: {
      signInForm: {
        forgotPasswordLink: 'Forgot Password',
        signInButtonText: 'Sign In',
      },
      signUpForm: {
        agreeStart: 'I agree to the',
        agreeMid: 'and',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        signUpLinkText: 'Sign Up',
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
    },
  },
  shared: {
    validations: {},
    dialogs: {
      ok: 'OK',
      yes: 'Yes',
      no: 'No',
    },
  },
}
export type LocaleType = typeof en
