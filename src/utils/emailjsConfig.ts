export const EMAILJS_CONFIG = {
  // Company details
  COMPANY_NAME: import.meta.env.VITE_EMAILJS_COMPANY_NAME,
  COMPANY_PHONE_NUMBER: import.meta.env.VITE_EMAILJS_COMPANY_PHONE_NUMBER,
  COMPANY_EMAIL_ID: import.meta.env.VITE_EMAILJS_COMPANY_EMAIL_ID,
  TO_COMPANY_EMAIL_ID: import.meta.env.VITE_EMAILJS_TO_COMPANY_EMAIL_ID,
  REPLY_TO_COMPANY_EMAIL_ID: import.meta.env
    .VITE_EMAILJS_REPLY_TO_COMPANY_EMAIL_ID,
  COMPANY_WEBSITE: import.meta.env.VITE_EMAILJS_COMPANY_WEBSITE,

  // Email js credentials
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

  // Email templates - one is for cvs and another for user
  CVS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_CVS_TEMPLATE_ID,
  USER_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_USER_TEMPLATE_ID,
};
