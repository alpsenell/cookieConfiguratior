<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div class="cookie-configurator grid m-10">
      <div class="cookie-configurator__header">
        <BaseHeader
          class="text-2xl"
          title="Configure your Cookie Solution"
        />
      </div>
      <div class="cookie-configurator__content grid">
        <div class="flex flex-col gap-8 border-r-2 pr-8">
          <TargetCountries
            :country-options="countryOptions"
            @setTargetCountry="value => $emit('setTargetCountry', value)"
          />
          <Legislation
            :legislation-options="legislationOptions"
            @setLegislationOption="value => $emit('setLegislationOption', value)"
          />
          <Consent
            :consent-options="consentOptions"
            @setConsentOption="value => $emit('setConsentOption', value)"
          />
          <BannerConfiguration
            :buttons-options="buttonsOptions"
            :cookie-title="cookieTitle"
            @setButtonOption="value => $emit('setButtonOption', value)"
            @setTitle="value => $emit('setTitle', value)"
          />
        </div>
        <div class="pl-8">
          <CookieOutput
            :accept-button-status="acceptButtonStatus"
            :reject-button-status="rejectButtonStatus"
            :close-button-status="closeButtonStatus"
            :title="cookieTitle"
          />
          <Message
            v-if="warningMessage"
            class="mt-4"
            :message="warningMessage"
          />
        </div>
      </div>
      <div class="flex justify-between items-center">
        <a>Read the documentation</a>
        <div>
          <BaseButton
            class="mr-3"
            dark
            text="Reset"
            @click.native="$emit('reset')"
          />
          <BaseButton
            dark
            :disabled="!isDirty"
            text="Save"
            @click.native="$emit('save')"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/atoms/Loader';
import BaseHeader from '@/components/atoms/BaseHeader';
import BaseButton from '@/components/atoms/BaseButton';
import Consent from '@/components/molecules/Consent';
import Legislation from '@/components/molecules/Legislation';
import TargetCountries from '@/components/molecules/TargetCountries';
import CookieOutput from '@/components/molecules/CookieOutput';
import BannerConfiguration from '@/components/molecules/BannerConfiguration';
import Message from '@/components/atoms/Message';

export default {
  components: {
    Loader,
    BaseButton,
    Message,
    BannerConfiguration,
    CookieOutput,
    BaseHeader,
    Consent,
    Legislation,
    TargetCountries,
  },
  props: {
    countryOptions: {
      type: Array,
      required: true,
    },
    buttonsOptions: {
      type: Array,
      required: true,
    },
    legislationOptions: {
      type: Array,
      required: true,
    },
    consentOptions: {
      type: Array,
      required: true,
    },
    targetCountries: {
      type: String,
      required: true,
    },
    cookieTitle: {
      type: String,
      required: true,
    },
    acceptButtonStatus: {
      type: Boolean,
      required: true,
    },
    rejectButtonStatus: {
      type: Boolean,
      required: true,
    },
    closeButtonStatus: {
      type: Boolean,
      required: true,
    },
    warningMessage: {
      type: String,
      required: true,
    },
    isDirty: {
      type: Boolean,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.cookie-configurator {
  grid-template-rows: 70px 900px 70px;

  &__content {
    grid-template-columns: 1fr 2fr;
  }
}
</style>
