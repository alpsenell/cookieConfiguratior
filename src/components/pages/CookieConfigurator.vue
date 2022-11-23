<template>
  <CookieConfigurator
    :target-countries="targetCountries"
    :cookie-title="banner.title"
    :accept-button-status="banner.acceptButtonDisplay"
    :reject-button-status="banner.rejectButtonDisplay"
    :close-button-status="banner.closeButtonDisplay"
    :warning-message="warningMessage"
    @targetCountry="setTargetCountry"
    @legislation="setLegislation"
    @bannerConfig="setBannerConfig"
    @updateTitle="setBannerConfig"
    @consent="setConsent"
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
  data() {
    return {
      isDirty: false,
    };
  },
  computed: {
    ...mapState([
      'targetCountries',
      'banner',
      'consentByScroll',
      'perPurposeConsent',
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
