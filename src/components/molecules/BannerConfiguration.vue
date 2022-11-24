<template>
  <div class="bg-grey-light rounded-md p-4">
    <BaseToggleSwitch
      v-for="option in buttonsOptions"
      :key="option.text"
      class="mt-2"
      :checked="option.checked"
      @click.native="toggleOption(option)"
    >
      <p class="mr-4">
        {{ option.text }}
      </p>
    </BaseToggleSwitch>
    <div>
      <span class="mr-2">Title</span>
      <input
        class="a mt-2 bg-transparent border-b border-black outline-0"
        :value="cookieTitle"
        type="text"
        @input="updateTitle"
      >
    </div>
  </div>
</template>

<script>
import BaseToggleSwitch from '@/components/atoms/BaseToggleSwitch';

export default {
  components: {
    BaseToggleSwitch,
  },
  props: {
    buttonsOptions: {
      type: Array,
      required: true,
    },
    cookieTitle: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleOption(option) {
      this.$emit('setButtonOption', { key: option.value, value: !option.checked });
    },
    updateTitle(event) {
      this.$emit('setTitle', { key: 'title', value: event.target.value });
    },
  },
};
</script>
