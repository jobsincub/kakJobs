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
        errorMessages: {
          400: 'The user already exists or the provided data is invalid',
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
      signUpForm: {
        checkBoxText: 'I agree to the <1>Terms of Service</1> and <2>Privacy Policy</2>',
        terms: 'Terms of Service',
        privacy: 'Privacy Policy',
        signUpLinkText: 'Sign Up',
        usernameSchema: {
          minValue: 'Minimum number of characters 6',
          maxValue: 'Maximum number of characters 30',
        },
        agreeTermsSchema: {
          agreeMsg: 'Agree Terms',
        },
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
