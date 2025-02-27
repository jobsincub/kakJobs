export const en = {
  pages: {
    auth: {
      resendVerificationPage: {
        title: 'Email verification link expired',
        text: 'Looks like the verification link has expired. Not to worry, we can send the link again',
        errorMessages: {
          400: 'The email is incorrect. Try again please',
        },
        alreadyActivated: 'Account is already activated',
        singInLinkText: 'Sign In',
      },
      verifyEmail: {
        title: 'Congratulations!',
        confirmText: 'Your email has been confirmed',
        alreadyActivated: 'Account is already activated',
        singInLinkText: 'Sign In',
      },
      signInPage: {
        title: 'Sign In',
        noAccountText: 'Don’t have an account?',
        signUpLinkText: 'Sign Up',
        errorMessages: {
          401: 'The email or password are incorrect. Try again please',
          400: 'The provided data is invalid.',
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
        headText: 'Privacy Policy',
      },
      termsService: {
        headText: 'Terms of Service',
      },
    },
  },
  widgets: {
    sidebar: {
      home: 'Home',
      create: 'Create',
      myProfile: 'My Profile',
      messenger: 'Messenger',
      search: 'Search',
      statistics: 'Statistics',
      favorites: 'Favorites',
    },
    header: {
      logIn: 'Log In',
      signUp: 'Sign Up',
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
      logOutDialog: {
        buttonText: 'Log Out',
        titleText: 'Log Out',
        confirmationText: 'Are you really want to log out of your account <1>Epam@epam.com</1>?',
      },
      resendVerificationForm: {
        resendVerificationButtonText: 'Resend verification link',
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
      emailValidateSchema: {
        emailValidation: 'The email must match the format\n example@example.com',
      },
      passwordSchema: {
        minLength: 'Password must be at least 6 characters',
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
