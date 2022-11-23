<template>
  <component :is="tag">
    {{ title }}
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
