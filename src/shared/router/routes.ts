export const ROUTES = {
  HOME: '/',
  CREATE_POST: '/createPost',
  LEGAL: {
    TERMS_OF_SERVICE: '/terms-of-service',
    PRIVACY_POLICY: '/privacy-policy',
  },
  AUTH: {
    SIGN_UP: '/auth/sign-up',
    SIGN_IN: '/auth/sign-in',
    CREATE_NEW_PASSWORD: '/auth/create-new-password',
    EMAIL_CONFIRM: '/auth/email-confirm',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESEND_VERIFICATION: '/auth/resend-verification',
  },
  PROFILE: (id: number) => `/profile/${id}` as const,
}
