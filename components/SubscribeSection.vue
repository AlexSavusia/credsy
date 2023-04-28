<template>
  <div class="mt-8 -mb-[6.85rem] z-20 relative subscribe-container xs:px-4 sm:px-6">
    <div class="mx-auto max-w-6.5xl w-full">
      <section class="rounded-lg bg-white xs:py-10 sm:py-15 xs:px-6 sm:px-12 lg:px-27 lg:flex lg:items-center lg:h-[14.5rem] subscribe-section">
        <div class="lg:w-0 lg:flex-1">
          <h2 class="font-alt xs:h3_5 lg:h3 -tracking-wide text-black" v-text="'Subscribe to our newsletter!'" />
          <p class="text-base -tracking-[0.1px] text-gray-600 sm:max-w-lg lg:line-clamp-2 mt-4" v-text="'One update per month. All the latest news and sneak peeks directly in your inbox.'" />
        </div>
        <div class="mt-12 sm:w-full sm:max-w-sm lg:mt-0 lg:ml-25 lg:flex-1">
          <InputGroupSubscribe />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.subscribe-section {
  box-shadow: 0 -6px 30px rgba(0, 0, 0, 0.03), 0 12px 10px rgba(0, 0, 0, 0.02), 0 23px 17px rgba(0, 0, 0, 0.03), 0 40px 33px rgba(0, 0, 0, 0.03), 0 100px 100px rgba(0, 0, 0, 0.04);
}
</style>

<script lang="ts" setup>
import InputGroupSubscribe from '@/components/input/InputGroupSubscribe'
</script>
