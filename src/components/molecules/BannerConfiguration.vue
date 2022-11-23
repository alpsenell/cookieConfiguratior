<template>
  <div class="bg-grey-light rounded-md p-4">
    <BaseToggleSwitch
      v-for="option in config"
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
        class="mt-2 bg-transparent border-b border-black outline-0"
        :value="title"
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
  data() {
    return {
      config: [
        { text: 'Accept Button Display', value: 'acceptButtonDisplay', checked: false },
        { text: 'Reject Button Display', value: 'rejectButtonDisplay', checked: false },
        { text: 'Close Button Display', value: 'closeButtonDisplay', checked: true },
        { text: 'Close Button Rejects', value: 'closeButtonReject', checked: false },
      ],
      title: 'Notice',
    };
  },
  methods: {
    toggleOption(option) {
      option.checked = !option.checked;

      this.$emit('bannerConfig', { key: option.value, value: option.checked });
    },
    updateTitle(event) {
      this.title = event.target.value;

      this.$emit('updateTitle', { key: 'title', value: event.target.value });
    },
  },
};
</script>
