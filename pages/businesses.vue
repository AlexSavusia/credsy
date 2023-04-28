<template>
  <HeroSection :title="hero.title" :description="hero.description" :items="hero.items" :type="'business'" />

  <AdvantageSection data-aos="fade-up" data-aos-once="true" :title="advantage1.title" :description="advantage1.description" :items="advantage1.items" :space-y="2" />

  <SectionDivider data-aos="fade-up" data-aos-once="true" />

  <ServiceSectionTale data-aos="fade-up" data-aos-once="true" :title="service.title" :description="service.description" :services="service.services" />

  <BookConsultationShortSection data-aos="fade-up" data-aos-once="true" :title="bookShort.title" :description="bookShort.description" :type="'book'" :button-text="'Request Demo'" />

  <AdvantageSection data-aos="fade-up" data-aos-once="true" :title="advantage2.title" :description="advantage2.description" :items="advantage2.items" :space-y="1" />

  <AppFeaturedSection data-aos="fade-up" data-aos-once="true" :title="appFeatured.title" :description="appFeatured.description" :items="appFeatured.items" />

  <BookConsultationSection data-aos="fade-up" data-aos-once="true" :title="book.title" :description="book.description" :items="book.items" />

  <!--BlogSection /-->
</template>

<script lang="ts" setup>
import { nanoid }  from 'nanoid'
import { HeroItemsType } from '@/types/hero-types'
import { ServicesType } from '@/types/service-types'
import { AdvantageItemsType } from '@/types/advantage-types'
import { AppFeaturedItemsType } from '@/types/app-featured-types'
import { BookItemsType } from '@/types/book-types'

// import HeroSection from '@/components/hero/HeroSection'
// import AdvantageSection from '@/components/advantage/AdvantageSection'
// import SectionDivider from '@/components/section/SectionDivider'
// import ServiceSectionTale from '@/components/service/ServiceSectionTale'
// import BookConsultationShortSection from '@/components/book/BookConsultationShortSection'
// import BookConsultationSection from '@/components/book/BookConsultationSection'
// import AppFeaturedSection from '@/components/app-featured/AppFeaturedSection'

// import BlogSection from '@/components/blog/BlogSection'

useHead({
  title: 'Scale your healthcare provider network with at turbo speed',
  meta: [
    {
      name: 'description',
      content: 'Turbocharge your healthcare provider network growth with our efficient solutions. Scale your network to new heights and provide better patient care at a faster pace',
    }
  ],
})

const hero: {
  title: string,
  description: string,
  items: HeroItemsType,
} = {
  title: `Scale your provider&nbsp;<span class="line">network</span>. At&nbsp;turbo speed.`,
  description: 'Stop letting tedious admin tasks bog you down. We’ll license and credential your providers in any state. While consolidating all your provider data onto one simple platform.',
  items: [
    { id: nanoid(), text: 'Trusted by 200+ healthcare companies' },
    { id: nanoid(), text: 'BBB Acredited Business A+ rating' }
  ],
}

const service: {
  title: string,
  description: string,
  services: ServicesType,
} = {
  title: 'All your credentialing and provider needs. Under one roof.',
  description: 'The only thing you have to do is fill out an application on our website. We’ll handle the rest.',
  services: [
    {
      title: 'Licensing',
      description: 'We’ll license your providers in any US state. And notify you before their licenses expire.',
      items: [
        'Initial state licensing',
        'Automated renewal and monitoring ',
        'IMLC Licensing',
        'FCVS set-up and management',
        'DEA and CSR Registration',
        'Free provider profile',
        'CME tracking ',
        'Secure document storage',
      ],
      href: '/',
      color: 'licensing',
    },
    {
      title: 'Provider Network Management',
      description: 'We’ll complete the process for your providers – and ensure they meet all requirements.',
      items: [
        'CAQH registration',
        'NPI registration',
        'Commercial insurance provider enrollment and re-credentialing ',
        'Medicare and Medicaid provider enrollment and revalidation',
        'Contract negotiations',
        'PECOS',
      ],
      href: '/',
      color: 'licensing',
    },
    {
      title: 'Payor Enrollment',
      description: 'Track, control and store data for your organization. So you stay compliant – and never get fined by state regulators. Want to join a certain hospital or healthcare system? We’ll file the application for you - and get you privileged. ',
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
  title: 'See how Credsy can streamline your workflow',
  description: 'Book a free demo – and see how Credsy can help you.',
}

const advantage1: {
  title: string,
  description: string,
  items: AdvantageItemsType,
} = {
  title: 'Licensing can be a total pain. Unless you work with us.',
  description: 'From start to finish, we make the licensing process easy and headache-free.',
  items: [
    { iconName: 'fast', name: 'Lightning fast turnaround time', description: 'No delays around here. We’ll license your providers as quickly as possible.' },
    { iconName: 'experience', name: '8+ years of experience', description: 'We know the process in each state. And we’ve done it thousands of times.' },
    { iconName: 'profile', name: 'Free provider profile', description: 'Securely store all your documents. Monitor requirements. Get notified before licenses expire.' },
    { iconName: 'transparent-process', name: 'Transparent process', description: 'You’ll always know the status of your applications. Every step of the way.' },
    { iconName: 'team', name: 'Large team', description: 'Our team of experts will submit all your applications on-time. And error-free.' },
    { iconName: 'support', name: '24/7 support', description: 'Got a question for us? We’ll get an answer back to you within one business day. Max.' },
  ]
}

const advantage2: {
  title: string,
  description: string,
  items: AdvantageItemsType,
} = {
  title: 'We work with *all* types of healthcare organizations',
  description: `Credsy saved 100,000+ administrative hours for healthcare businesses across the US.<br/>Take a look at the organizations we serve.`,
  items: [
    {
      iconName: 'virtual-care',
      name: 'Virtual Care',
      description: 'Reduce onboarding time by 80% and credential providers up to 65% faster. So they can serve more patients and generate more revenue.',
    },
    {
      iconName: 'primary-care',
      name: 'Primary Care',
      description: 'Credential, license and monitor while staying compliant. Using Credsy’s end-to-end software solutions.',
    },
    {
      iconName: 'health-systems',
      name: 'Health Systems',
      description: 'Drive revenue and stay audit-ready with secure and reliable licensing and credentialing. Customized to meet your needs.',
    },
    {
      iconName: 'group-practices',
      name: 'Group practices',
      description: 'Securely store and monitor high volumes of data. Ensure compliance. Get licensed and credentialed at record speed.',
    },
    {
      iconName: 'healthcare-startups',
      name: 'Healthcare Start-ups',
      description: 'Fast-growing companies with limited resources will be able to scale faster… and change the healthcare landscape faster.',
    },
    {
      iconName: 'urgent-care',
      name: 'Urgent Care',
      description: 'Don’t let excel spreadsheets slow you down. Now you can increase your organization’s efficiency. And reduce turnover rate.',
    },
  ]
}

const appFeatured: {
  title: string,
  description: string,
  items: AppFeaturedItemsType,
} = {
  title: 'Stop chasing state boards for license updates',
  description: 'On top of our done-for-you licensing services, you get full access to the Credsy platform. Where you can track applications, store documents and get notified before licenses expire.',
  items: [
    { id: nanoid(), title: 'Application Tracking', text: 'Stay on top of your providers’ application progress. With real-time application tracking.', active: true },
    { id: nanoid(), title: '24/7 Monitoring', text: 'Our platform will monitor all your providers’ information 24/7 - and notify you before a license is about to expire.', active: false },
    { id: nanoid(), title: 'Document Storage', text: 'All of your providers’ documents and information will be securely stored and encrypted on the cloud. Accessible only to you.', active: false },
  ]
}

const book: {
  title: string,
  description: string,
  items: BookItemsType,
} = {
  title: `<span>See how we can save you</span><span>200+ hours per month</span>`,
  description: 'Try Credsy out with a free, no-strings-attached demo. And see how we can help you:',
  items: [
    'Get new licenses (and renew old ones) with just the click of a button',
    'Scale faster – and grow your revenue',
    'Stay compliant (and steer clear of fines)',
    'Automate your admin tasks (and ditch the paperwork)',
  ]
}
</script>
