<template>
  <HeroSection :title="hero.title" :description="hero.description" :button-text="hero.buttonText" :button-hint="hero.buttonHint" :type="'product'" />

  <FeatureSection data-aos="fade-up" data-aos-once="true" :title="feature.title" :description="feature.description" :items="feature.items" :type="'secondary'" />

  <BookConsultationShortSection data-aos="fade-up" data-aos-once="true" :title="bookShort.title" :description="bookShort.description" :button-text="'Book a Consultation'" />

  <AppFeaturedSection data-aos="fade-up" data-aos-once="true" :title="appFeatured.title" :description="appFeatured.description" :items="appFeatured.items" />

  <ReviewSection data-aos="fade-up" data-aos-once="true" :title="review.title" :description="review.description" />

  <BookConsultationSection data-aos="fade-up" data-aos-once="true" :title="book.title" :description="book.description" :items="book.items" />

  <!--BlogSection /-->
</template>

<script lang="ts" setup>
import { nanoid } from 'nanoid'
import { AdvantageItemsType } from '@/types/advantage-types'
import { AppFeaturedItemsType } from '@/types/app-featured-types'
import { BookItemsType } from '@/types/book-types'
import { FeatureItemsType } from '@/types/feature-types'

// import HeroSection from '@/components/hero/HeroSection'
// import FeatureSection from '@/components/feature/FeatureSection'
// import BookConsultationShortSection from '@/components/book/BookConsultationShortSection'
// import AppFeaturedSection from '@/components/app-featured/AppFeaturedSection'
// import ReviewSection from '@/components/review/ReviewSection'
// import BookConsultationSection from '@/components/book/BookConsultationSection'

// import BlogSection from '@/components/blog/BlogSection'

const hero: {
  title: string,
  description: string,
  buttonText: string,
  buttonHint: string,
} = {
  title: `Avoid costly mistakes that could take down`,
  description: 'With Credsy, you can consolidate all your provider data into one simple platform. So your business can keep running smoothly. Penalty-free.',
  buttonText: 'Schedule a Demo',
  buttonHint: `Free 15&nbsp;minutes product demo and pick our brain for free. Zero commitments.`,
}

const   feature: {
  title: string,
  description: string,
  items: FeatureItemsType,
} = {
  title: `A bird’s-eye view of your provider data`,
  description: `Track all of your provider data. On one secure platform.`,
  items: [
    {
      title: `Stop the data scavenger hunt already`,
      description: `
        <p>It’s pretty difficult to scale when 95% of the time, you’re toggling between spreadsheets, searching for the data you need.</p>
        <p>With Credsy, all your provider data stays under one roof. So you can spend less time rummaging around for data – and more time growing your provider network.</p>
      `,
      colorClasses: 'bg-sand-100',
      imageName: 'feature-img-1.svg',
      bgName: 'feature-bg-1.svg',
    },
    {
      title: `Bulletproof your data`,
      description: `
        <p>From NPI healthcare provider numbers… to licensure information and payor data… to CAQH logins…</p>
        <p>You’ve got a lot of confidential data on your hands.</p>
        <p>But don’t worry. Because with our enterprise-grade security, all your provider information will be kept secure. Inaccessible to everyone, except you.</p>
      `,
      colorClasses: 'bg-blue-50',
      imageName: 'feature-img-2.png',
      bgName: 'feature-bg-2.svg',
    },
  ],
}

const bookShort: {
  title: string,
  description: string,
} = {
  title: `Never let a provider license fall through the cracks`,
  description: 'Book a free demo today to see how Credsy can help you take control of your provider network data – and stay compliant.',
}

const advantage: {
  title: string,
  description: string,
  advantages: AdvantageItemsType,
} = {
  title: `Businesses: License, monitor and credential your provider&nbsp;network in any state. At scale.`,
  description: 'We’ve saved 100,000+ administrative hours for healthcare businesses across the US. Here are the organizations that we serve:',
  advantages: [
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
  title: 'An all-in-one platform to manage your licensing needs',
  description: 'Navigating the licensing process on your own is a total headache. You have to complete dozens of applications… track down the requirements for each state… and then chase medical boards for updates. When you switch to Credsy, you’ll get a single online provider profile where you can manage everything. From start to finish.',
  items: [
    { id: nanoid(), title: 'Application Tracking', text: 'Stay on top of your providers’ application progress. With real-time application tracking.', active: true },
    { id: nanoid(), title: '24/7 Monitoring', text: 'Our platform will monitor all your providers’ information 24/7 - and notify you before a license is about to expire.', active: false },
    { id: nanoid(), title: 'Secure Document Storage', text: 'All of your providers’ documents and information will be securely stored and encrypted on the cloud. Accessible only to you.', active: false },
    { id: nanoid(), title: 'Logins Storage', text: 'Securely hold all your login information and passwords on the Credsy platform.', active: false },
  ]
}

const review: {
  title: string,
  description: string,
} = {
  title: `This was an A-list experience`,
  description: 'Quick turnaround time. Speedy responses. Red-carpet service. Those are just a few reasons why our clients love us.',
}

const book: {
  title: string,
  description: string,
  items: BookItemsType,
} = {
  title: `Protect your organization from expensive mistakes`,
  description: 'Don’t let inaccurate provider data bring down your organization - or your personnel.  Book a free demo and see for yourself how Credsy can help you:',
  items: [
    'Easily access the provider data you need',
    'Keep your business running smoothly (and error-free)',
    'Stay compliant (and avoid getting fined)',
  ]
}
</script>
