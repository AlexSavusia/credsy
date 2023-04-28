export enum CarouselBreakpointsEnum {
  mobile = '640',
  tablet = '912',
  desktop = '1280',
}

export type CarouselBreakpointWidthType =
  | CarouselBreakpointsEnum.mobile
  | CarouselBreakpointsEnum.tablet
  | CarouselBreakpointsEnum.desktop

export type CarouselSlidesPerViewType = {
  mobile: string
  tablet: string
  desktop: string
}

export type CarouselSwiperOptionsType = CarouselCommonSwiperOptionsType & CarouselResponsiveSwiperOptionsType

export type CarouselCommonSwiperOptionsType = {
  loop?: boolean
  autoHeight?: boolean
  loopedSlides?: number
  navigation?: {
    nextEl: string
    prevEl: string
  }
  pagination?: {
    el?: string
    clickable?: boolean
  }
}

export type CarouselResponsiveSwiperOptionsType = {
  slidesPerView?: string | number
  spaceBetween?: number
  breakpoints: {
    [CarouselBreakpointsEnum.desktop]: {
      slidesPerView?: string | number
      spaceBetween?: number
    }
    [CarouselBreakpointsEnum.tablet]: {
      slidesPerView?: string | number
      spaceBetween?: number
    }
    [CarouselBreakpointsEnum.mobile]: {
      slidesPerView?: string | number
      spaceBetween?: number
    }
  }
}
