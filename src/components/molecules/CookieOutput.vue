<template>
  <div class="bg-black p-6 relative">
    <BaseHeader
      class="text-md text-white font-bold mb-2"
      tag="h4"
      :title="title"
    />
    <div class="text-white">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
    <div class="flex justify-end mt-3">
      <BaseButton
        v-if="rejectButtonStatus"
        text="Reject All"
      />
      <BaseButton
        v-if="acceptButtonStatus"
        class="ml-4"
        text="Accept All"
      />
    </div>
    <span
      v-if="closeButtonStatus"
      class="absolute top-3 right-6 text-white"
    >X</span>
  </div>
</template>

<script>
import BaseHeader from '@/components/atoms/BaseHeader';
import BaseButton from '@/components/atoms/BaseButton';
export default {
  components: {
    BaseHeader,
    BaseButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    acceptButtonStatus: {
      type: Boolean,
      required: true,
    },
    rejectButtonStatus: {
      type: Boolean,
      required: true,
    },
    closeButtonStatus: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
