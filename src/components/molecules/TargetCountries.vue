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
    >
      <input
        :name="option.value"
        type="radio"
      />
      <label
        :id="option.value"
        :for="option.value">
        {{ option.text }}
      </label>
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/atoms/BaseHeader";
export default {
  components: {
    BaseHeader
  },
  data () {
    return {
      countryOptions: [
        { text: 'Worldwide', value: 'world' },
        { text: 'US users only', value: 'US' },
        { text: 'EU users only', value: 'EU' },
      ]
    }
  }
}
</script>
