<template>
<Popover as="header" class="relative">
  <div :class="headerWrapperClasses">
    <nav data-aos="fade-in" data-aos-once="true" class="relative mx-auto flex max-w-8xl items-center justify-between xs:px-4 lg:px-8 xs:h-16 lg:h-30 xs:min-h-16 lg:min-h-30">
      <div class="flex flex-1 items-center">
        <div class="flex xs:w-full lg:w-auto items-center justify-between">
          <RouterLink to="/">
            <span class="sr-only" v-text="'Credsy'" />
<!--            TODO -->
            <LogoMarkType class="h-[2.375rem] w-auto" v-if="isDesktop" />
            <!--            TODO -->
            <LogoMarkTypeMobile class="h-[2.5rem] w-auto" v-if="isPhoneOrTablet" />
          </RouterLink>
          <div class="flex items-center" v-if="isPhoneOrTablet">
            <PopoverButton class="focus-ring-inset inline-flex items-center justify-center rounded-lg bg-white p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only" v-text="'Open main menu'" />
              <Icon name="menu" class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div class="xs:hidden lg:flex lg:items-center lg:space-x-8 lg:ml-21">
          <template v-for="{ id, name, href, items } in navigation">
            <DropdownContainer v-if="items?.length">
              <DropdownButton>
                <span
                  class="inline-flex items-end text-base leading-snug font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
                >
                  <span v-text="name" />
                  <Icon name="chevron-down" class="-mr-1 -translate-y-1 ml-2 h-3 w-3 text-gray-600" aria-hidden="true" />
                </span>
              </DropdownButton>
              <DropdownItems :items="items" class="-mr-5" />
            </DropdownContainer>
            <RouterLink
              v-else
              :key="id"
              :to="href"
              class="text-base leading-snug font-medium text-gray-900 hover:text-gray-700"
              v-text="name"
            />
          </template>
        </div>
      </div>
      <div class="xs:hidden lg:flex lg:items-center lg:space-x-6 lg:ml-4"><!-- lg:space-x-3 -->
        <a class="inline-flex items-end text-base leading-snug font-medium text-gray-900 hover:text-gray-700" :href="`tel:${phone.parsedNumber}`" v-text="phone.number" />
        <Button text="Sign in" type="outline" size="small" tag="a" to="https://app.credsy.com/" href="https://app.credsy.com/" target="_blank" />
        <Button text="Get Started" type="primary" size="small" @click="store.dispatch('openHubspotPopup')" />
      </div>
    </nav>
  </div>
  <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0" v-if="isPhoneOrTablet">
    <PopoverPanel focus class="absolute inset-x-0 top-0 z-50 origin-top transform transition" v-slot="{ close }">
      <div class="overflow-hidden bg-blue-50 h-screen flex flex-col">
        <div class="flex items-center justify-between px-4 h-16 min-h-16 bg-white">
          <div>
            <RouterLink to="/" @click.stop="close">
              <!--            TODO -->
              <LogoMarkTypeMobile class="h-[2.5rem] w-auto" />
            </RouterLink>
          </div>
          <div>
            <PopoverButton class="focus-ring-inset inline-flex items-center justify-center rounded-lg bg-white p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white">
              <span class="sr-only" v-text="'Close menu'" />
              <Icon name="close" class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <div class="flex-1 flex flex-col max-h-[calc(100vh-4rem)] overflow-auto border-t border-t-[#DAEBF0] relative">
          <div class="space-y-1 py-6 flex-1">
            <template v-for="item in navigation">
              <template v-if="item.items?.length">
                <RouterLink
                  class="flex items-center truncate px-6 py-3 text-base leading-5.5 font-medium text-gray-900 hover:text-gray-700"
                  :key="item.id"
                  :to="item.href"
                  @click.stop="item.isOpen = !item.isOpen"
                >
                  <span class="flex-1" v-text="item.name" />
                  <span class="w-5 h-5 flex items-center justify-center ml-2">
                    <Icon name="chevron-down" :class="['h-3 w-3 text-gray-500 transition duration-300', item.isOpen ? 'rotate-180' : 'rotate-0']" aria-hidden="true" />
                  </span>
                </RouterLink>
                <CollapseTransition :duration="300">
                  <div class="space-y-1" v-if="item.isOpen">
                    <RouterLink
                      v-for="{ id, name, href } in item.items"
                      class="block px-6 py-3 text-base leading-5.5 font-medium text-gray-900 hover:text-gray-700"
                      :key="id"
                      @click.stop="close"
                      :to="href"
                      v-text="name"
                    />
                  </div>
                </CollapseTransition>
              </template>
              <template v-else>
                <RouterLink
                  class="block px-6 py-3 text-base leading-snug font-medium text-gray-900 hover:text-gray-700"
                  :key="item.id"
                  :to="item.href"
                  v-text="item.name"
                  @click.stop="close"
                />
              </template>
            </template>
          </div>
          <div class="px-4 py-7.5 space-y-5 border-t border-t-[#DAEBF0] flex flex-col">
            <DecoratedLink external :to="`tel:${phone.parsedNumber}`" :href="`tel:${phone.parsedNumber}`" :text="phone.number" :type="'dark'">
              <template v-slot:icon>
                <Icon name="dot" class="text-green-600 w-2.5 h-2.5" aria-hidden="true" />
              </template>
            </DecoratedLink>
            <DecoratedLink external :to="`mailto:${email}`" :href="`mailto:${email}`" :text="email" :type="'dark'">
              <template v-slot:icon>
                <Icon name="dot" class="text-green-600 w-2.5 h-2.5" aria-hidden="true" />
              </template>
            </DecoratedLink>
          </div>
          <div class="py-6 px-4 space-y-3 bg-white flex flex-col border-t border-t-[#E9E7E4]">
            <Button text="Sign in" type="outline" size="medium" tag="a" to="https://app.credsy.com/" href="https://app.credsy.com/" target="_blank"  />
            <Button
              text="Get Started"
              type="primary"
              size="medium"
              @click="() => {
                store.dispatch('openHubspotPopup');
                close();
              }"
            />
          </div>
        </div>
      </div>
    </PopoverPanel>
  </transition>
</Popover>
</template>

<script setup lang="ts">
import { Ref } from 'vue'
import { useStore } from 'vuex'
import { nanoid } from 'nanoid'
import classNames from 'classnames'
import { NavigationItemsType } from '@/types/navigation-types'

const { Popover, PopoverButton, PopoverPanel } = await import('@headlessui/vue')

const route = useRoute()

const headerWrapperClasses = computed<string>(() => {
  const routeNameClassesMap = {
    'businesses': 'bg-sand-100',
    'blog': 'bg-blue-50',
    'blog-post-slug': 'bg-white',
    'default': 'bg-blue-50',
  }

  // @ts-ignore
  const classes = routeNameClassesMap[route.name] ?? routeNameClassesMap.default

  return classNames({
    [classes]: classes,
  })
})

const store = useStore()

const isPhoneOrTablet = inject('isPhoneOrTablet')
const isDesktop = inject('isDesktop')

const { phone, email } = useContact()

// @ts-ignore
const navigation: Ref<NavigationItemsType> = reactive([
  {
    id: nanoid(),
    name: 'For Providers',
    href: 'providers',
    isOpen: false,
  //   items: [
  //     { id: nanoid(), name: 'Licensing', href: '#' },
  //     { id: nanoid(), name: 'Physician Licensing', href: '#' },
  //     { id: nanoid(), name: 'Physician Assistant Licensing', href: '#' },
  //     { id: nanoid(), name: 'Nurse Licensing', href: '#' },
  //     { id: nanoid(), name: 'Therapist Licensing', href: '#' },
  //     { id: nanoid(), name: 'Dentist Licensing', href: '#', badge: 'New' },
  //     { id: nanoid(), name: 'Social Workers', href: '#', badge: 'New' },
  //     { id: nanoid(), name: 'Mental Health Counselors', href: '#' },
  //     { id: nanoid(), name: 'Renewals and Maintenance', href: '#' },
  //     { id: nanoid(), name: 'Payors', href: '#' },
  //     { id: nanoid(), name: 'Hospital Privileges', href: '#' },
  //   ],
  },
  {
    id: nanoid(),
    name: 'For Businesses',
    href: '/businesses',
    // isOpen: false,
    // items: [
    //   { id: nanoid(), name: 'Virtual Care', href: '#' },
    //   { id: nanoid(), name: 'Primary Care', href: '#' },
    //   { id: nanoid(), name: 'Health Systems', href: '#' },
    //   { id: nanoid(), name: 'Group practices', href: '#', badge: 'New' },
    //   { id: nanoid(), name: 'Healthcare Start-ups', href: '#' },
    //   { id: nanoid(), name: 'Urgent Care', href: '#' },
    // ],
  },
  {
    id: nanoid(),
    name: 'Product',
    href: '/product',
  //   items: [
  //     { id: nanoid(), name: 'Product Tour', href: '#' },
  //     { id: nanoid(), name: 'Benefits', href: '#' },
  //     { id: nanoid(), name: 'Features', href: '#' },
  //   ],
  },
  {
    id: nanoid(),
    name: 'Blog',
    href: '/blog',
  }
  // { id: nanoid(), name: 'Customer Stories', href: '#',
  //   items: [
  //     { id: nanoid(), name: 'Individual Providers', href: '#', badge: 'New' },
  //     { id: nanoid(), name: 'Providers Organizations', href: '#' },
  //   ],
  // },
  // { id: nanoid(), name: 'Company', href: '#',
  //   items: [
  //     { id: nanoid(), name: 'About', href: '#' },
  //     { id: nanoid(), name: 'Careers', href: '#' },
  //     { id: nanoid(), name: 'Partners', href: '#' },
  //     { id: nanoid(), name: 'Blog', href: '/blog' },
  //     { id: nanoid(), name: 'Contact Us', href: '#' },
  //   ],
  // },
  // { id: nanoid(), name: 'Contact Us', href: '#',
  //   items: [
  //     { id: nanoid(), iconName: 'phone', name: phone.number, href: `tel:${phone.parsedNumber}` },
  //     { id: nanoid(), iconName: 'mail',  name: email, href: `mailto:${email}` },
  //     { id: nanoid(), iconName: 'marker-pin',  name: '200 South Park Rd., STE. 450 Hollywood, FL 33021', href: '#' },
  //   ],
  // },
])
</script>
