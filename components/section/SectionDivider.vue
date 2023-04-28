<template>
  <div class="xs:px-4 sm:px-6 lg:px-8" aria-hidden="true" v-if="isPhoneOrTablet">
    <div class="section-divider mx-auto" />
  </div>
</template>

<script setup lang="ts">
const isPhoneOrTablet = inject('isPhoneOrTablet')
</script>

<style lang="scss">
.section-divider {
  @apply w-full h-[10px];
  background: url('./images/divider.svg') left center repeat-x;
}
</style>
