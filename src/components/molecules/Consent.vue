<template>
  <div class="bg-grey-light rounded-md p-4">
    <BaseHeader
      class="text-xl mt-2"
      tag="h3"
      title="Consent"
    />
    <BaseToggleSwitch
      v-for="option in consentOptions"
      :key="option.text"
      class="mt-1"
      :checked="option.checked"
      @click.native="toggleConsent(option)"
    >
      <p class="mr-4">
        {{ option.text }}
      </p>
    </BaseToggleSwitch>
  </div>
</template>

<script>
import BaseHeader from '@/components/atoms/BaseHeader';
import BaseToggleSwitch from '@/components/atoms/BaseToggleSwitch';

export default {
  components: {
    BaseHeader,
    BaseToggleSwitch,
  },
  props: {
    consentOptions: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleConsent(option) {
      this.$emit('setConsentOption', { key: option.value, value: !option.checked });
    },
  },
};
</script>
