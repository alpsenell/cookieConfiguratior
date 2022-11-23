<template>
  <label
    class="toggle | flex items-center"
    :class="{ 'cursor-pointer': !disabled }"
  >
    <slot />
    <div class="relative">
      <input
        type="checkbox"
        class="toggle__input | sr-only"
        :checked="checked"
        disabled
      >
      <div class="toggle__rail | w-10 h-4 rounded-full shadow-inner" />
      <div class="toggle__dot | absolute w-6 h-6 rounded-full shadow -left-1 -top-1 transition" />
    </div>
    <slot name="after" />
  </label>
</template>

<script>
export default {
  props: {
    disabled: { type: Boolean, default: false },
    checked: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.toggle {
  &__dot {
    background: var(--light);
  }
  &__rail {
    background: var(--grey);
  }
  &__input:checked {
    ~ .toggle__dot {
      background: var(--dark);
      transform: translateX(100%);
    }
    ~ .toggle__rail {
      background: var(--grey);
      opacity: .5;
    }
  }
}
</style>
