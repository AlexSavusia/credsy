<template>
  <HeroSection :title="hero.title" :description="hero.description" :type="'main'" />

  <TrustedBySection data-aos="fade-up" data-aos-once="true" :description="trustedBy.description" :link="{ text: trustedBy.linkText, href: trustedBy.linkHref }" />

  <SectionDivider />

  <ServiceSectionCarousel data-aos="fade-up" data-aos-once="true" :title="service.title" :description="service.description" :services="service.services" />

  <AdvantageSection data-aos="fade-up" data-aos-once="true" :title="advantage.title" :description="advantage.description" :items="advantage.items" :space-y="3" />

  <BookConsultationShortSection data-aos="fade-up" data-aos-once="true" :title="bookShort.title" :description="bookShort.description" :button-text="'Book a Consultation'" />

  <FeatureSection data-aos="fade-up" data-aos-once="true" :items="feature.items" :type="'primary'" />

  <AppFeaturedSection data-aos="fade-up" data-aos-once="true" :title="appFeatured.title" :description="appFeatured.description" :items="appFeatured.items" />

  <ReviewSection data-aos="fade-up" data-aos-once="true" :title="review.title" :description="review.description" />

  <BookConsultationSection data-aos="fade-up" data-aos-once="true" :title="book.title" :description="book.description" :items="book.items" />

  <!--BlogSection /-->
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid'
import { ServicesType } from '@/types/service-types'
import { AdvantageItemsType } from '@/types/advantage-types'
import { AppFeaturedItemsType } from '@/types/app-featured-types'
import { BookItemsType } from '@/types/book-types'
import { FeatureItemsType } from '@/types/feature-types'

const hero: {
  title: string,
  description: string,
} = {
  title: `An easy way to&nbsp;get&nbsp;<span class="line">licensed</span> and&nbsp;credentialed.`,
  description: 'Quick turnaround times. Zero paperwork. No hassle. Get licensed and credentialed FAST using our done-for-you services and proprietary software.',
}

const feature: {
  items: FeatureItemsType,
} = {
  items: [
    {
      title: `<span>Manage your</span><span>providers network</span>`,
      badge: 'Businesses',
      description: `<p>Track, control and store data for your organization. So you can stay compliant with all laws and regulations – and avoid being fined by state regulators.</p>`,
      items: [
        { id: nanoid(), text: 'Automated renewal and monitoring' },
        { id: nanoid(), text: 'Secure document storage' },
        { id: nanoid(), text: 'Smart filters and search' },
        { id: nanoid(), text: 'Assign provider profile system' },
      ],
      imageName: 'feature-img-1.svg',
      bgName: 'feature-bg-1-2.svg',
      colorClasses: 'bg-sand-100',
    }
  ]
}

const trustedBy: {
  description: string,
  linkText: string,
  linkHref: string,
} = {
  description: '93%. This is how much time providers save on average by using our licensing and credentialing services.',
  linkText: 'Our Customers Stories',
  linkHref: '/',
}

const service: {
  title: string,
  description: string,
  intro: string,
  services: ServicesType,
} = {
  title: 'Providers: Reduce your turn-around time by 80%',
  description: 'Finally. A fast and cost-effective way for providers like you to get licensed and credentialed.',
  intro: 'Get licensed in any of the 50 states with easy onboarding and application status tracking. Once approved, we’ll monitor your licenses and credentials and send renewal alerts. So you avoid any late fees and disciplinary action from the medical board.',
  services: [
    {
      title: 'Physician Licensing',
      description: 'Whether you’re a US or foreign graduate, we can get you licensed in any of the 50 US states with: ',
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
      title: 'Nurse Licensing',
      description: 'No matter what type of nurse you are, we’ll help you get licensed in all 50 states with. ',
      items: [
        'Initial state licensing',
        'Automated renewal and monitoring ',
        'DEA and Controlled Substance Registration',
        'Free provider profile (to house all of your information)',
        'CME tracking ',
        'Secure document storage',
      ],
      href: '/',
      color: 'licensing',
    },
    {
      title: 'Physician Assistant Licensing',
      description: 'For Physician Assistants looking to get licensed, we can help with:',
      items: [
        'Initial state licensing',
        'Automated renewal and monitoring',
        'FCVS set-up and management',
        'DEA and Controlled Substance Registration',
        'Free provider profile (to house all of your information)',
        'CME tracking',
        'Secure document storage',
      ],
      href: '/',
      color: 'licensing',
    },
    {
      title: 'Dentists',
      description: 'For Dentists looking to get licensed, we can help with:',
      items: [
        'Initial state licensing',
        'Automated renewal and monitoring',
        'Free provider profile (to house all of your information)',
        'Secure document storage',
      ],
      href: '/',
      color: 'licensing',
    },
    {
      title: 'Social Workers',
      description: 'For Social Workers looking to get licensed, we can help with:',
      items: [
        'Initial state licensing',
        'Automated renewal and monitoring',
        'Free provider profile (to house all of your information)',
        'Secure document storage',
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
  title: `Book Your Consultation&nbsp;Today`,
  description: 'And pick our brain for free. Zero commitments.',
}

const advantage: {
  title: string,
  description: string,
  items: AdvantageItemsType,
} = {
  title: `Businesses: License, monitor and credential your provider&nbsp;network in any state. At scale.`,
  description: 'We’ve saved 100,000+ administrative hours for healthcare businesses across the US. Here are the organizations that we serve:',
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
  title: 'Expedite and manage the licensing and credentialing process with our proprietary software',
  description: 'An all-in-one solution to handle all of your licensing and credentialing needs… from&nbsp;onboarding to renewals.',
  items: [
    { id: nanoid(), title: 'Automate your onboarding process', text: 'Goodbye time-consuming paperwork. We’ll file all individual applications - and verifications - for you.', active: true },
    { id: nanoid(), title: 'Free provider dashboard', text: 'Easily manage your credentials, track and auto-renew licenses and store your documents all in one place.', active: false },
    { id: nanoid(), title: 'Licensing, credentialing and monitoring', text: 'Easily manage your credentials, track and auto-renew licenses and store your documents all in one place.', active: false },
    { id: nanoid(), title: 'CME storage and tracking', text: 'Monitor your CME and renewal requirements in real-time. Get notified when your renewals are due.', active: false },
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
  title: `<span>Got questions?</span><span>You can schedule a free consultation</span>`,
  description: 'We’ll answer any questions you have about eligibility, pricing or software. So that you can:',
  items: [
    'Gain visibility into provider status and application process',
    'Reduce costs and admin work',
    'License your providers faster',
  ]
}
</script>
