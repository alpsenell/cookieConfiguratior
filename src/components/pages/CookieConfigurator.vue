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
    @setTargetCountry="setTargetCountry"
    @setLegislationOption="setLegislation"
    @setButtonOption="setBannerConfig"
    @setTitle="setBannerConfig"
    @setConsentOption="setConsent"
    @reset="reset"
  />
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CookieConfigurator from '@/components/templates/CookieConfigurator';

export default {
  components: {
    CookieConfigurator,
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
  },
};
</script>
