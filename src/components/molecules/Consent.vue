<template>
  <div class="bg-grey-light rounded-md p-4">
    <BaseHeader
      class="text-xl mt-2"
      tag="h3"
      title="Consent"
    />
    <BaseToggleSwitch
      v-for="option in legislationOptions"
      :key="option.text"
      :checked="option.checked"
    >
      <p class="mr-4">{{ option.text }}</p>
    </BaseToggleSwitch>
  </div>
</template>

<script>
import BaseHeader from "@/components/atoms/BaseHeader";
import BaseToggleSwitch from "@/components/atoms/BaseToggleSwitch";

export default {
  components: {
    BaseHeader,
    BaseToggleSwitch
  },
  data () {
    return {
      legislationOptions: [
        { text: 'Consent by scroll ', checked: false },
        { text: 'Per purpose consent', checked: false },
      ]
    }
  }
}
</script>
