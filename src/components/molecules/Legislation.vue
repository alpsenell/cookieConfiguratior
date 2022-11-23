<template>
  <div class="bg-grey-light rounded-md p-4">
    <BaseHeader
      class="text-xl mt-2"
      tag="h3"
      title="Legislation"
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
        { text: 'GDRP', checked: false },
        { text: 'CCPA', checked: false },
      ]
    }
  }
}
</script>
