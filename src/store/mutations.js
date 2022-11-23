import Vue from 'vue';

const DEFAULT_STATE = {
  targetCountries: 'EU',
  gdpr: true,
  ccpa: false,
  consentByScroll: false,
  perPurposeConsent: false,
  banner: {
    acceptButtonDisplay: false,
    rejectButtonDisplay: false,
    closeButtonDisplay: true,
    closeButtonRejects: false,
    title: 'Notice',
  },
};

export default {
  setTargetCountry(state, targetCountry) {
    state.targetCountries = targetCountry;
  },
  setLegislation(state, { key, value }) {
    state[key] = value;
  },
  setConsent(state, { key, value }) {
    state[key] = value;
  },
  setBannerConfig(state, { key, value }) {
    Vue.set(state.banner, key, value);
  },
  reset(state) {
    Object.assign(state, DEFAULT_STATE);
  },
};
