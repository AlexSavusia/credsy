//export const getImageUrl = (name: string): string => new URL(`/images/${name}`, import.meta.url).href
export const getImageUrl = (name: string): string => `/images/${name}`
