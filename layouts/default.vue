<template>
  <div class="flex flex-col min-h-screen overflow-x-hidden">
    <div class="flex-1">
      <Header />
      <main>
        <slot />
      </main>
    </div>
    <div class="mt-8" />
    <!--SubscribeSection data-aos="fade-in" data-aos-once="true" /-->
    <Footer data-aos="fade-in" data-aos-once="true" />
  </div>
  <Dialog v-if="store.state.openHubspotPopup" />
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
</script>
