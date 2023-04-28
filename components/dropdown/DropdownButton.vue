<template>
  <MenuButton as="template">
    <slot />
  </MenuButton>
</template>

<script setup lang="ts">
const { MenuButton } = await import('@headlessui/vue')
</script>
