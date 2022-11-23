<template>
  <div class="flex gap-2 p-4 rounded-md shadow-md text-white bg-error items-center">
    <img
      class="w-4 h-4"
      src="../../assets/images/exclamation-icon.svg"
      alt="warning icon"
    >{{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: '',
    },
  },
};
</script>
