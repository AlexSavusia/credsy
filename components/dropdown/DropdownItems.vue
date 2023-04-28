<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <MenuItems class="absolute right-0 top-full z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div class="py-1">
        <MenuItem
          v-for="{ id, name, href } in items"
          :key="id"
          as="template"
          v-slot="{ close }"
        >
          <RouterLink
            :class="[isSelected(id) ? 'bg-blue-50 text-gray-700' : 'text-gray-700', 'block px-4 py-2 text-sm']"
            :to="href"
            v-text="name"
            @click.stop="() => {
              selectMenuItem({ id, name, href });
              close();
            }"
          />
        </MenuItem>
      </div>
    </MenuItems>
  </transition>
</template>

<script setup lang="ts">
const { MenuItem, MenuItems } = await import('@headlessui/vue')
import { DropItemType, DropItemsType } from '@/types/drop-types'

const props = defineProps({
  modelValue: {
    type: Object as PropType<DropItemType>,
    default: () => {},
  },
  items: {
    type: Array as PropType<DropItemsType>,
    required: true,
  },
})

const emit = defineEmits(['select-menu-item'])

const { modelValue } = toRefs(props)

const isSelected = (itemId: string): boolean => modelValue.value?.id === itemId

const selectMenuItem = ({ id, name }: DropItemType): void => {
  emit('select-menu-item', { id, name })
}
</script>
