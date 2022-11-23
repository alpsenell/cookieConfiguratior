<template>
  <div class="bg-grey-light rounded-md p-4">
    <BaseHeader
      class="text-xl"
      tag="h3"
      title="Target countries"
    />
    <div
      v-for="option in countryOptions"
      :key="option.value"
      class="mt-2"
    >
      <BaseRadioButton
        :label="option.text"
        :checked="option.checked"
      />
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/atoms/BaseHeader";
import BaseRadioButton from "@/components/atoms/BaseRadioButton";
export default {
  components: {
    BaseRadioButton,
    BaseHeader
  },
  data () {
    return {
      countryOptions: [
        { text: 'Worldwide', checked: false, value: 'world' },
        { text: 'US users only', checked: false, value: 'US' },
        { text: 'EU users only', checked: false, value: 'EU' },
      ]
    }
  }
}
</script>
