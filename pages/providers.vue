<template>
  <HeroSection :title="hero.title" :description="hero.description" :type="'provider'" />

  <TrustedBySection data-aos="fade-up" data-aos-once="true" :description="trustedBy.description" :link="{ text: trustedBy.linkText, href: trustedBy.linkHref }" />

  <SectionDivider />

  <ServiceSectionTale data-aos="fade-up" data-aos-once="true" :title="service.title" :description="service.description" :services="service.services" />

  <AdvantageSection data-aos="fade-up" data-aos-once="true" :title="advantage.title" :description="advantage.description" :items="advantage.items" :space-y="1" :icon-size="'large'" />

  <BookConsultationShortSection data-aos="fade-up" data-aos-once="true" :title="bookShort.title" :description="bookShort.description" :button-text="'Get a Consultation'" />

  <ReviewSection data-aos="fade-up" data-aos-once="true" :title="review.title" :description="review.description" />

  <BookConsultationSection data-aos="fade-up" data-aos-once="true" :title="book.title" :description="book.description" :items="book.items" />

  <!--BlogSection /-->
</template>

<script lang="ts" setup>
import { ServicesType } from '@/types/service-types'
import { AdvantageItemsType } from '@/types/advantage-types'
import { BookItemsType } from '@/types/book-types'

// import HeroSection from '@/components/hero/HeroSection'
// import TrustedBySection from '@/components/trusted-by/TrustedBySection'
// import SectionDivider from '@/components/section/SectionDivider'
// import ServiceSectionTale from '@/components/service/ServiceSectionTale'
// import AdvantageSection from '@/components/advantage/AdvantageSection'
// import BookConsultationShortSection from '@/components/book/BookConsultationShortSection'
// import ReviewSection from '@/components/review/ReviewSection'
// import BookConsultationSection from '@/components/book/BookConsultationSection'

// import BlogSection from '@/components/blog/BlogSection'

useHead({
  title: 'Get Medical license and credentialed in any US state',
  meta: [
    {
      name: 'description',
      content: 'Easily obtain a medical license and credential in any US state with our help and support. Learn how to navigate the licensing process and start practicing medicine today',
    }
  ],
})

const hero: {
  title: string,
  description: string,
} = {
  title: `Get licensed and&nbsp;<span class="line">credentialed</span> in&nbsp;any&nbsp;state.`,
  description: 'We’ll handle everything for you. So you can stop trying to figure out the requirements and process for each state… and start spending more time with your patients.',
}

const trustedBy: {
  description: string,
  linkText: string,
  linkHref: string,
} = {
  description: 'We reduce licensing and credentialing turnaround time by 70%.',
  linkText: 'See why else physicians love us',
  linkHref: '/',
}

const service: {
  title: string,
  description: string,
  services: ServicesType,
} = {
  title: 'All your licensing and credentialing needs. Under one roof.',
  description: 'The only thing you have to do is fill out an application on our website. We’ll handle the rest.',
  services: [
    {
      title: 'Payor Enrollment',
      description: 'We’ll complete the payor enrollment process for you – and ensure you meet all of the requirements.',
      items: [
        'Commercial insurance provider enrollment and re-credentialing',
        'CAQH registration',
        'NPI registration',
        'Contract negotiations',
        'PECOS',
        'Medicare and Medicaid provider enrollment and revalidation',
      ],
      href: '/',
      color: 'licensing',
    },
    {
      title: 'Licensing',
      description: 'Get licensed in any of the 50 US states. With application status tracking, license monitoring and renewal alerts.',
      items: [
        'Initial state licensing',
        'Automated renewal and monitoring',
        'DEA and Controlled Substance Registration',
        'Free provider profile (to house all of your information)',
        'IMLC Licensing',
        'FCVS set-up and management',
        'Secure document storage',
      ],
      href: '/',
      color: 'licensing',
    },
    {
      title: 'Privileging',
      description: `<span>Track, control and store data for your organization. So you stay compliant – and never get fined by state regulators.</span> <span>Want to join a certain hospital or healthcare system? We’ll file the application for you - and get you privileged.</span>`,
      items: [
        'Initial state licensing',
        'Automated renewal and monitoring',
        'FCVS set-up and management',
      ],
      href: '/',
      color: 'licensing',
    },
  ],
}

const bookShort: {
  title: string,
  description: string,
} = {
  title: `<span>Don’t see</span> <span>your specialty listed?</span>`,
  description: 'No worries. Get in touch and we’ll see if we can help! ',
}

const advantage: {
  title: string,
  description: string,
  items: AdvantageItemsType,
} = {
  title: `Whatever your specialty is, we’ve got you covered`,
  description: `We’ve helped all types of healthcare professionals eliminate the headache of&nbsp;licensing&nbsp;and&nbsp;credentialing. Including:`,
  items: [
    {
      iconName: 'physician',
      name: 'Physicians (MD/DO)',
      description: 'Let us handle the paperwork. While you focus on your patients.',
    },
    {
      iconName: 'physician-assistant',
      name: 'Physician Assistant',
      description: 'Expand your job opportunities – and become a sought-after PA.',
    },
    {
      iconName: 'nurse',
      name: 'Nurses',
      description: 'Become nationally recognized for your qualifications and experience.',
    },
    {
      iconName: 'dentist',
      name: 'Dentists',
      description: 'Accept more insurance plans – and serve more patients.',
    },
    {
      iconName: 'social-worker',
      name: 'Social Workers',
      description: 'Prove your expertise – and help more people in need.',
    },
    {
      iconName: 'mental-health-counselor',
      name: 'Mental Health Counselors',
      description: 'Work with more individuals and groups around the country.',
    },
  ]
}

const review: {
  title: string,
  description: string,
} = {
  title: `Why healthcare providers trust us with their licensing`,
  description: 'Take a look at what our previous customers have to say…',
}

const book: {
  title: string,
  description: string,
  items: BookItemsType,
} = {
  title: `<span>See how we can save you</span> <span>200+&nbsp;hours per month</span>`,
  description: 'Try Credsy out with a free, no-strings-attached demo. And see how we can help you:',
  items: [
    'Get new licenses (and renew old ones) with just the click of a button',
    'Scale faster – and grow your revenue',
    'Stay compliant (and steer clear of fines)',
    'Automate your admin tasks (and ditch the paperwork)',
  ]
}
</script>
