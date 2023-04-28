<template>
  <TransitionRoot appear :show="store.state.openHubspotPopup" as="template">
    <Dialog as="div" @close="store.dispatch('closeHubspotPopup')" class="relative z-20">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-[#344054] bg-opacity-60 backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-lg bg-white xs:px-6 lg:px-8 py-12 text-left align-middle transition-all relative"
            >
              <span class="absolute right-4 top-4">
                <Button icon-name="close" icon="only-icon" @click="store.dispatch('closeHubspotPopup')" type="transparent" radius="pill" size="small" tabindex="-1" />
              </span>
              <DialogTitle
                as="h3"
                class="h4 font-semibold text-gray-black"
                v-text="'Book a Free Consultation:'"
              />
              <div class="mt-3" v-if="!store.getters.loadedHubspotScript" v-text="'Loading...'" />
              <div class="mt-3" v-else id="popupForm" v-once />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
// import Button from '@/components/button/Button'

useHubspotForm({ id: 'popupForm', type: 'popup' })

const store = useStore()
</script>
