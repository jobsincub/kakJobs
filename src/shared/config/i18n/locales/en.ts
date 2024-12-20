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
    validations: {
      usernameSchema: {
        minValue: 'Minimum number of characters 6',
        maxValue: 'Maximum number of characters 30',
      },
      emailSchema: {
        email: 'You entered an invalid email.',
      },
      emailValidateSchema: {
        emailValidation: 'The email must match the format\n example@example.com',
      },
      passwordSchema: {
        minLength: 'Password must be at least 3 characters',
      },
      passwordValidateSchema: {
        minValue: 'Password must be at least 6 characters',
        regexText:
          'Password must contain a-z, A-Z, ! " # $ % & \' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _` { | } ~',
      },
      confirmPassSchema: {
        confirmPass: 'The passwords must match',
      },
      agreeTermsSchema: {
        agreeMsg: 'Agree Terms',
      },
      comparePassError: {
        passError: 'The passwords must match',
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
