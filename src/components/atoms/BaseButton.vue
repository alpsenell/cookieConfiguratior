<template>
  <button
    class="px-4 py-2 outline-0 rounded-md border-0"
    :class="[dark ? 'text-white bg-black': 'bg-white text-black', disabledClass]"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    disabledClass() {
      return this.disabled ? 'opacity-50 cursor-not-allowed' : '';
    },
  },
};
</script>

