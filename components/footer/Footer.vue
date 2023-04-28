<template>
  <footer class="footer bg-gradient-dark relative" aria-labelledby="footer-heading">
    <div class="footer-round-image" />
    <h2 id="footer-heading" class="sr-only" v-text="'Footer'" />
    <div class="mx-auto max-w-7xl xs:py-15 xs:!pt-[12rem] lg:py-12 lg:!pt-[12rem] xs:px-4 sm:px-6 lg:px-8 relative">
      <div class="xs:space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
        <div class="space-y-8">
          <section class="space-y-4">
            <h3 :class="footerTitleClasses" v-text="'Status'" />
            <div class="flex items-center space-x-1.5">
              <Icon name="dot" class="text-green-600 w-2.5 h-2.5"  aria-hidden="true" />
              <span :class="footerTextMediumClasses" v-text="'All systems normal'" />
            </div>
          </section>
          <section class="space-y-4" v-if="navigation.company">
            <h3 :class="footerTitleClasses" v-text="'Company'" />
            <ul role="list" class="space-y-2">
              <li v-for="{ name, href } in navigation.company" :key="name">
                <RouterLink :to="{ path: href }" :class="footerLinkMediumClasses" :href="href">{{name}}</RouterLink>
              </li>
            </ul>
          </section>
          <component :is="AccreditedImage" />
        </div>
        <div class="space-y-8">
          <section class="space-y-4" v-if="navigation.forProviders">
            <h3 :class="footerTitleClasses">
              <RouterLink :to="{ path: 'providers' }" :class="footerLinkMediumClasses">For Providers</RouterLink>
            </h3>
            <p :class="[footerTextMediumClasses, '!text-gray-300']" v-html="'Get licensed and credentialed <br/>in any US state.'" />
            <ul role="list" class="space-y-2">
              <li v-for="{ name, href, badge } in navigation.forProviders" :key="name">
                <RouterLink :to="{ path: href }" :class="footerLinkMediumClasses" :href="href">{{name}}&nbsp;<badge v-if="badge" class="ml-1.5" :text="badge" size="small" type="white" /></RouterLink>
              </li>
            </ul>
          </section>
        </div>
        <div class="space-y-8">
          <section class="space-y-4" v-if="navigation.forBusinesses">
            <h3 :class="footerTitleClasses">
              <RouterLink :to="{ path: 'businesses' }" :class="footerLinkMediumClasses">For Businesses</RouterLink>
            </h3>
            <p :class="[footerTextMediumClasses, '!text-gray-300']" v-html="'Scale your provider network.<br/>At turbo speed.'" />
            <ul role="list" class="space-y-2">
              <li v-for="{ name, href, badge } in navigation.forBusinesses" :key="name">
                <RouterLink :to="{ path: href }" :class="footerLinkMediumClasses" :href="href">{{name}}&nbsp;<badge v-if="badge" class="ml-1.5" :text="badge" size="small" type="white" /></RouterLink>
              </li>
            </ul>
          </section>
          <section class="space-y-4" v-if="navigation.customerStories">
            <h3 :class="footerTitleClasses" v-text="'Customer Stories'" />
            <ul role="list" class="space-y-2">
              <li v-for="{ name, href, badge } in navigation.customerStories" :key="name">
                <RouterLink :to="{ path: href }" :class="footerLinkMediumClasses" :href="href">{{name}}&nbsp;<badge v-if="badge" class="ml-1.5" :text="badge" size="small" type="white" /></RouterLink>
              </li>
            </ul>
          </section>
        </div>
        <div class="space-y-8">
          <section class="space-y-4" v-if="navigation.product">
            <h3 :class="footerTitleClasses">
              <RouterLink :to="{ path: 'product' }" :class="footerLinkMediumClasses">Product</RouterLink>
            </h3>
            <ul role="list" class="space-y-2">
              <li v-for="{ name, href } in navigation.product" :key="name">
                <RouterLink :to="{ path: href }" :class="footerLinkMediumClasses" :href="href">{{name}}</RouterLink>
              </li>
            </ul>
          </section>
          <section class="space-y-4 relative" v-if="navigation.contacts">
            <div class="footer-hand-drawn-image" />
            <h3 :class="footerTitleClasses" v-text="'Contacts'" />
            <ul role="list" class="space-y-2.5">
              <li v-for="{ iconName, name, href } in navigation.contacts" :key="name">
                <RouterLink :to="{ path: href }" :class="[footerLinkMediumClasses, 'flex space-x-1.5']" :href="href">
                  <Icon class="w-6 h-[1.5rem] text-yellow-600" :name="iconName" aria-hidden="true" />
                  <span v-text="name" />
                </RouterLink>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-600 pt-9 md:flex md:items-center md:justify-between">
        <div class="flex xs:space-x-8 lg:space-x-12 md:order-2" v-if="navigation.policy">
          <RouterLink v-for="{ name, href } in navigation.policy" :to="{ path: href }" :class="footerLinkSmallClasses">{{name}}</RouterLink>
        </div>
        <p :class="['md:order-1 mt-8 md:mt-0', footerTextSmallClasses]" v-text="'&copy; 2022 Credsy.com. All rights reserved.'" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { FooterNavigationType } from '@/types/footer-types'
// import Icon from '@/components/icon/Icon'

import AccreditedImage from './svg/accredited-business.svg'

const {
  footerTitleClasses,
  footerTextMediumClasses,
  footerLinkMediumClasses,
  footerTextSmallClasses,
  footerLinkSmallClasses
} = useFooterClasses()

const { phone, email } = useContact()

const navigation: FooterNavigationType = {
  // company: [
  //   { name: 'About', href: '#' },
  //   { name: 'Careers', href: '#' },
  //   { name: 'Partners', href: '#' },
  //   { name: 'Blog', href: '#' },
  //   { name: 'Contact Us', href: '#' },
  // ],
  forProviders: [
    // { name: 'Licensing', href: '#' },
    // { name: 'Physician Licensing', href: '#' },
    // { name: 'Physician Assistant Licensing', href: '#' },
    // { name: 'Nurse Licensing', href: '#' },
    // { name: 'Therapist Licensing', href: '#' },
    // { name: 'Dentist Licensing', href: '#', badge: 'New' },
    // { name: 'Social Workers', href: '#', badge: 'New' },
    // { name: 'Mental Health Counselors', href: '#' },
    // { name: 'Renewals and Maintenance', href: '#' },
    // { name: 'Payors', href: '#' },
    // { name: 'Hospital Privileges', href: '#' },
  ],
  forBusinesses: [
    // { name: 'Virtual Care', href: '#' },
    // { name: 'Primary Care', href: '#' },
    // { name: 'Health Systems', href: '#' },
    // { name: 'Group practices', href: '#', badge: 'New' },
    // { name: 'Healthcare Start-ups', href: '#' },
    // { name: 'Urgent Care', href: '#' },
  ],
  // customerStories: [
  //   { name: 'Individual Providers', href: '#', badge: 'New' },
  //   { name: 'Providers Organizations', href: '#' },
  // ],
  product: [
    // { name: 'Product Tour', href: '#' },
    // { name: 'Benefits', href: '#' },
    // { name: 'Features', href: '#' },
  ],
  contacts: [
    { iconName: 'phone', name: phone.number, href: `tel:${phone.parsedNumber}` },
    { iconName: 'mail',  name: email, href: `mailto:${email}` },
    { iconName: 'marker-pin',  name: '200 South Park Rd., STE. 450 Hollywood, FL 33021', href: '#' },
  ],
  // policy: [
  //   {
  //     name: 'Privacy Policy',
  //     href: '/privacy',
  //   },
  //   {
  //     name: 'Cookie policy',
  //     href: '#',
  //   },
  //   {
  //     name: 'Terms of Use',
  //     href: '/terms',
  //   },
  //   {
  //     name: 'Security policy',
  //     href: '#',
  //   },
  // ],
}
</script>

<style lang="scss">
.footer {
  .footer-round-image {
    background: url('./svg/footer-round.svg') no-repeat;
    @apply absolute left-0 top-0 w-[318px] h-[357px];
  }

  .footer-hand-drawn-image {
    background: url('./svg/footer-hand-drawn.svg') no-repeat;
    @apply absolute left-[8.3rem] top-0 w-[110px] h-[66px];
  }
}
</style>
