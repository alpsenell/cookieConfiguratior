export default {
  targetCountries: 'EU', // Possible values: 'EU', 'US', 'world'
  gdpr: true,
  ccpa: false,
  consentByScroll: false,
  perPurposeConsent: false,
  banner: {
    acceptButtonDisplay: false, // visibility of the Accept button
    rejectButtonDisplay: false, // visibility of the Reject button
    closeButtonDisplay: true, // visibility of the Close button
    closeButtonRejects: false, // clicking the Close button should accept (`false`) or reject (`true`) the consent
    title: 'Notice', // Text field that will change the displayed title of the banner
  },
  isDirty: false,
};
