<template>
  <div>
    <label class="mb-3 flex cursor-pointer overflow-hidden relative font-medium">
      <input
        class="sr-only"
        type="radio"
        name="radio"
        :checked="checked"
      >
      <span class="py-1.5 pl-1.5 pr-3 flex items-center rounded-full duration-200 ease-in">{{ label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
input {
  &:checked {
    + span {
      background-color: #d6d6e5;

      &:before {
        box-shadow: inset 0 0 0 0.4375em var(--dark);
      }
    }
  }
}

label {
  span {
    &:hover {
      background-color: #d6d6e5;
    }

    &:before {
      display: flex;
      flex-shrink: 0;
      content: "";
      background-color: var(--white);
      width: 1.5em;
      height: 1.5em;
      border-radius: 50%;
      margin-right: 0.375em;
      transition: 0.25s ease;
      box-shadow: inset 0 0 0 0.125em var(--dark);
    }
  }
}
</style>
