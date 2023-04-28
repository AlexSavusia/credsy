import parsePhoneNumber from 'libphonenumber-js'
import { E164Number } from 'libphonenumber-js/types'

export const useContact = (): {
  phone: { number: string; parsedNumber: E164Number | undefined }
  email: string
} => {
  const phone = {
    number: '(800) 849-2168',
    parsedNumber: parsePhoneNumber('(800) 849-2168', 'US')?.number,
  }

  const email = 'info@medicallicensing.com'

  return {
    phone,
    email,
  }
}
