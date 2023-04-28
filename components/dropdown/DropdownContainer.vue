<template>
  <Menu as="div" class="relative inline-flex text-left">
    <slot name="button" />
    <slot />
  </Menu>
</template>

<script setup lang="ts">
const { Menu } = await import('@headlessui/vue')
</script>
