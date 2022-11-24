<template>
  <CookieConfigurator
    :target-countries="targetCountries"
    :cookie-title="banner.title"
    :accept-button-status="banner.acceptButtonDisplay"
    :reject-button-status="banner.rejectButtonDisplay"
    :close-button-status="banner.closeButtonDisplay"
    :warning-message="warningMessage"
    :country-options="countryOptions"
    :legislation-options="legislationOptions"
    :consent-options="consentOptions"
    :buttons-options="buttonsOptions"
    :is-dirty="isDirty"
    :loading="loading"
    @setTargetCountry="setTargetCountry"
    @setLegislationOption="setLegislation"
    @setButtonOption="setBannerConfig"
    @setTitle="setBannerConfig"
    @setConsentOption="setConsent"
    @reset="reset"
    @save="saveFormData"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CookieConfigurator from '@/components/templates/CookieConfigurator';

export default {
  components: {
    CookieConfigurator,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapState([
      'targetCountries',
      'banner',
      'consentByScroll',
      'perPurposeConsent',
      'gdpr',
      'ccpa',
      'isDirty',
    ]),
    isEuWorld() {
      return this.targetCountries === 'world' || this.targetCountries === 'EU';
    },
    warningMessage() {
      if (
        (this.isEuWorld)
        && (
          (this.banner.closeButtonDisplay && this.banner.closeButtonRejects)
            || (!this.banner.rejectButtonDisplay && !this.banner.closeButtonDisplay)
          || (this.banner.rejectButtonDisplay && this.banner.closeButtonDisplay && !this.banner.closeButtonRejects)
        )
      ) {
        return 'Your selected settings are not compliant with laws in Italy';
      }

      if (this.isEuWorld && this.consentByScroll) {
        return 'Your selected settings are not compliant with laws in France and Italy';
      }

      if (this.isEuWorld && this.perPurposeConsent) {
        return 'Your selected settings are not compliant with laws in France';
      }

      return '';
    },
    countryOptions() {
      return [
        { text: 'Worldwide', checked: this.targetCountries === 'world', value: 'world' },
        { text: 'US users only', checked: this.targetCountries === 'US', value: 'US' },
        { text: 'EU users only', checked: this.targetCountries === 'EU', value: 'EU' },
      ];
    },
    legislationOptions() {
      return [
        { text: 'GDPR', checked: this.gdpr, value: 'gdpr' },
        { text: 'CCPA', checked: this.ccpa, value: 'ccpa' },
      ];
    },
    consentOptions() {
      return [
        { text: 'Consent by scroll', value: 'consentByScroll', checked: this.consentByScroll },
        { text: 'Per purpose consent', value: 'perPurposeConsent', checked: this.perPurposeConsent },
      ];
    },
    buttonsOptions() {
      return [
        { text: 'Accept Button Display', value: 'acceptButtonDisplay', checked: this.banner.acceptButtonDisplay },
        { text: 'Reject Button Display', value: 'rejectButtonDisplay', checked: this.banner.rejectButtonDisplay },
        { text: 'Close Button Display', value: 'closeButtonDisplay', checked: this.banner.closeButtonDisplay },
        { text: 'Close Button Rejects', value: 'closeButtonRejects', checked: this.banner.closeButtonRejects },
      ];
    },
  },
  methods: {
    ...mapMutations([
      'setTargetCountry',
      'setLegislation',
      'setBannerConfig',
      'setConsent',
      'reset',
    ]),
    saveFormData() {
      this.loading = true;

      const data = {
        targetCountries: this.targetCountries,
        gdpr: this.gdpr,
        ccpa: this.ccpa,
        perPurposeConsent: this.perPurposeConsent,
        consentByScroll: this.consentByScroll,
        banner: this.banner,
      };
      const xhr = new XMLHttpRequest();

      setTimeout(() => {
        xhr.open('POST', 'https://httpbin.org/post', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));

        this.loading = false;
        this.$toast.success('Data saved successfully');
      }, 1000);
    },
  },
};
</script>
