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
  isDirty: false,
};

export default {
  setTargetCountry(state, targetCountry) {
    state.targetCountries = targetCountry;

    this.commit('checkDefaultState');
  },
  setLegislation(state, { key, value }) {
    state[key] = value;

    this.commit('checkDefaultState');
  },
  setConsent(state, { key, value }) {
    state[key] = value;

    this.commit('checkDefaultState');
  },
  setBannerConfig(state, { key, value }) {
    Vue.set(state.banner, key, value);

    this.commit('checkDefaultState');
  },
  checkDefaultState(state) {
    const clonedState = { ...state };
    const clonedDefaultState = { ...DEFAULT_STATE };

    delete clonedState.isDirty;
    delete clonedDefaultState.isDirty;

    if (JSON.stringify(clonedState) === JSON.stringify(clonedDefaultState)) {
      state.isDirty = false;

      return;
    }

    state.isDirty = true;
  },
  reset(state) {
    Object.assign(state, DEFAULT_STATE);
  },
};
