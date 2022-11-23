<template>
  <div class="cookie-configurator grid m-10">
    <div class="cookie-configurator__header">
      <BaseHeader
        class="text-2xl"
        title="Configure your Cookie Solution"
      />
    </div>
    <div class="cookie-configurator__content grid">
      <div class="flex flex-col gap-8">
        <TargetCountries />
        <Legislation />
        <Consent />
      </div>
      <div>alp</div>
    </div>
    <div class="cookie-configurator__footer">
      Footer
    </div>
  </div>
</template>

<script>
import BaseHeader from "@/components/atoms/BaseHeader";
import Consent from "@/components/molecules/Consent";
import Legislation from "@/components/molecules/Legislation";
import TargetCountries from "@/components/molecules/TargetCountries";

export default {
  components: {
    BaseHeader,
    Consent,
    Legislation,
    TargetCountries
  }
}
</script>

<style scoped lang="scss">
.cookie-configurator {
  grid-template-rows: 70px minmax(400px, 700px) 70px;

  &__content {
    grid-template-columns: 1fr 2fr;
  }
}
</style>
