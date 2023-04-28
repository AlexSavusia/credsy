export enum ServiceColorEnum {
  payors = 'payors',
  licensing = 'licensing',
  credentialing = 'credentialing',
  light = 'light',
  dark = 'dark',
}

export type ServiceColorType = keyof typeof ServiceColorEnum

export type ServiceType = {
  title: string
  description: string
  items: string[]
  href: string
  color: ServiceColorType
}

export type ServicesType = ServiceType[]
