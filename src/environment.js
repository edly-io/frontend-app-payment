export const configuration = {
  BASE_URL: process.env.BASE_URL,
  LMS_BASE_URL: process.env.LMS_BASE_URL,
  ECOMMERCE_BASE_URL: process.env.ECOMMERCE_BASE_URL,
  CREDENTIALS_BASE_URL: process.env.CREDENTIALS_BASE_URL,
  LOGIN_URL: process.env.LOGIN_URL,
  LOGOUT_URL: process.env.LOGOUT_URL,
  CSRF_TOKEN_API_PATH: process.env.CSRF_TOKEN_API_PATH,
  REFRESH_ACCESS_TOKEN_ENDPOINT: process.env.REFRESH_ACCESS_TOKEN_ENDPOINT,
  SEGMENT_KEY: process.env.SEGMENT_KEY,
  ACCESS_TOKEN_COOKIE_NAME: process.env.ACCESS_TOKEN_COOKIE_NAME,
  USER_INFO_COOKIE_NAME: process.env.USER_INFO_COOKIE_NAME,
  CSRF_COOKIE_NAME: process.env.CSRF_COOKIE_NAME,
  LANGUAGE_PREFERENCE_COOKIE_NAME: process.env.LANGUAGE_PREFERENCE_COOKIE_NAME,
  CURRENCY_COOKIE_NAME: process.env.CURRENCY_COOKIE_NAME,
  SITE_NAME: process.env.SITE_NAME,
  MARKETING_SITE_BASE_URL: process.env.MARKETING_SITE_BASE_URL,
  ENTERPRISE_MARKETING_URL: process.env.ENTERPRISE_MARKETING_URL,
  ENTERPRISE_MARKETING_UTM_CAMPAIGN: process.env.ENTERPRISE_MARKETING_UTM_CAMPAIGN,
  ENTERPRISE_MARKETING_UTM_SOURCE: process.env.ENTERPRISE_MARKETING_UTM_SOURCE,
  ENTERPRISE_MARKETING_FOOTER_UTM_MEDIUM: process.env.ENTERPRISE_MARKETING_FOOTER_UTM_MEDIUM,
  SUPPORT_URL: process.env.SUPPORT_URL,
  CONTACT_URL: process.env.CONTACT_URL,
  OPEN_SOURCE_URL: process.env.OPEN_SOURCE_URL,
  TERMS_OF_SERVICE_URL: process.env.TERMS_OF_SERVICE_URL,
  PRIVACY_POLICY_URL: process.env.PRIVACY_POLICY_URL,
  FACEBOOK_URL: process.env.FACEBOOK_URL,
  TWITTER_URL: process.env.TWITTER_URL,
  YOU_TUBE_URL: process.env.YOU_TUBE_URL,
  LINKED_IN_URL: process.env.LINKED_IN_URL,
  REDDIT_URL: process.env.REDDIT_URL,
  APPLE_APP_STORE_URL: process.env.APPLE_APP_STORE_URL,
  GOOGLE_PLAY_URL: process.env.GOOGLE_PLAY_URL,
  ACCOUNT_SETTINGS_URL: `${process.env.LMS_BASE_URL}/account/settings`,
  DATA_API_BASE_URL: process.env.DATA_API_BASE_URL,
  SECURE_COOKIES: process.env.NODE_ENV !== 'development',
  ENVIRONMENT: process.env.NODE_ENV,
  ACCOUNTS_API_BASE_URL: `${process.env.LMS_BASE_URL}/api/user/v1/accounts`,
  PREFERENCES_API_BASE_URL: `${process.env.LMS_BASE_URL}/api/user/v1/preferences`,
  CERTIFICATES_API_BASE_URL: `${process.env.LMS_BASE_URL}/api/certificates/v0/certificates`,
  VIEW_MY_RECORDS_URL: `${process.env.CREDENTIALS_BASE_URL}/records`,
  ECOMMERCE_API_BASE_URL: `${process.env.ECOMMERCE_BASE_URL}/api/v2`,
  ECOMMERCE_RECEIPT_BASE_URL: `${process.env.ECOMMERCE_BASE_URL}/checkout/receipt/`,
  CYBERSOURCE_URL: `${process.env.CYBERSOURCE_URL}`,
  APPLE_PAY_MERCHANT_IDENTIFIER: process.env.APPLE_PAY_MERCHANT_IDENTIFIER,
  APPLE_PAY_MERCHANT_NAME: process.env.APPLE_PAY_MERCHANT_NAME,
  APPLE_PAY_COUNTRY_CODE: process.env.APPLE_PAY_COUNTRY_CODE,
  APPLE_PAY_CURRENCY_CODE: process.env.APPLE_PAY_CURRENCY_CODE,
  APPLE_PAY_START_SESSION_URL: process.env.APPLE_PAY_START_SESSION_URL,
  APPLE_PAY_AUTHORIZE_URL: process.env.APPLE_PAY_AUTHORIZE_URL,
  APPLE_PAY_SUPPORTED_NETWORKS: process.env.APPLE_PAY_SUPPORTED_NETWORKS && process.env.APPLE_PAY_SUPPORTED_NETWORKS.split(','),
  APPLE_PAY_MERCHANT_CAPABILITIES: process.env.APPLE_PAY_MERCHANT_CAPABILITIES && process.env.APPLE_PAY_MERCHANT_CAPABILITIES.split(','),
};

export const features = {};
