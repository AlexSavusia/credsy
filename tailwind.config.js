const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    //enable remove unused CSS only in production
    enabled: process.env.NODE_ENV === 'production',
    //any file that may contain the reference of CSS styles by class name.
    content: [
      './components/**/*.{js,vue,ts}',
      './composables/**/*.{js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
      './app.vue',
    ],
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './composables/**/*.{js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  safelist: ['prose'],
  theme: {
    screens: {
      xs: '0px',
      sm: '640px',
      md: '768px',
      air: '912px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#0F2C37',
      white: '#fff',
      gray: {
        100: '#AED6E1',
        200: '#B0C2C7',
        250: '#778A97',
        300: '#6C95A6',
        500: '#667085',
        600: '#2E4F5E',
        700: '#223B46',
        900: '#0F2C37',
      },
      blue: {
        50: '#F6FDFF',
        100: '#E9F5F9',
        200: '#E0F2FA',
        300: '#D2E8EE',
        400: '#A9DDFA',
        600: '#1292DA',
        900: '#016299',
      },
      yellow: {
        50: '#FFFCF0',
        600: '#F9D278',
        700: '#FDC84D',
      },
      sand: {
        100: '#F7F5F2',
        200: '#F3F0EC',
        400: '#E3E1DE',
        500: '#F1E6D5',
      },
      green: {
        600: '#34A853',
      },
      red: {
        600: '#dc2626',
      },
    },
    extend: {
      borderWidth: {
        3: '3px',
      },
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        12.5: '3.125rem',
        15: '3.75rem',
        18: '4.5rem',
        18.5: '4.625rem',
        20.5: '5.125rem',
        21: '5.25rem',
        23: '5.75rem',
        23.5: '5.875rem',
        25: '6.25rem',
        26: '6.5rem',
        27: '6.75rem',
        30: '7.5rem',
        31: '7.75rem',
        42: '10.5rem',
        50: '12.5rem',
        70: '17.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        alt: ['"P22 Mackinac"', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.125rem' }],
        sm: ['0.875rem', { lineHeight: '1.5rem' }],
      },
      letterSpacing: {
        wider: '0.0625rem',
      },
      lineHeight: {
        3.5: '.875rem',
        4.5: '1.1875rem',
        5.5: '1.375rem',
      },
      container: {
        center: true,
      },
      boxShadow: {
        1: '0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)',
        3: '10px 4px 20px rgba(15, 44, 55, 0.08)',
        xs: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      },
      zIndex: {
        1: '1',
      },
      minWidth: {
        10: '2.5rem',
        12: '3rem',
      },
      maxWidth: {
        '6.5xl': '76rem',
        '8xl': '90rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.gray.700'),
              a: {
                fontWeight: '500',
              },
              strong: {
                fontWeight: '700',
              },
              '[class~="lead"]': {
                color: theme('colors.gray.600'),
              },
              blockquote: {
                fontFamily: 'P22 Mackinac',
                fontWeight: 500,
                fontStyle: 'italic',
                borderLeftWidth: '2px',
                borderLeftColor: theme('colors.blue.600'),
                color: theme('colors.black'),
              },
              h1: {
                fontFamily: 'P22 Mackinac',
                fontWeight: 700,
                color: theme('colors.black'),
              },
              h2: {
                fontFamily: 'P22 Mackinac',
                fontWeight: 700,
                color: theme('colors.black'),
              },
              h3: {
                fontFamily: 'P22 Mackinac',
                fontWeight: 700,
                color: theme('colors.black'),
              },
              h4: {
                fontFamily: 'P22 Mackinac',
                fontWeight: 700,
                color: theme('colors.black'),
              },
              'ol > li::marker': {
                color: theme('colors.gray.700'),
              },
              'ul > li::marker': {
                color: theme('colors.gray.700'),
              },
              hr: {
                borderColor: '#E4E7EC',
              },
            },
          ],
        },
        xs: {
          css: [
            {
              fontSize: '16px',
              lineHeight: '24px',
              p: {
                marginTop: '1.25rem',
                marginBottom: '1.25rem',
              },
              '[class~="lead"]': {
                fontSize: '16px',
                lineHeight: '24px',
                marginTop: '2rem',
                marginBottom: '2rem',
              },
              blockquote: {
                fontSize: '24px',
                lineHeight: '32px',
                marginTop: '3rem',
                marginBottom: '3rem',
                paddingLeft: '1.25rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
              },
              h1: {
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
                letterSpacing: 'normal',
                marginTop: '3rem',
                marginBottom: '1rem',
              },
              h2: {
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
                letterSpacing: 'normal',
                marginTop: '3rem',
                marginBottom: '1rem',
              },
              h3: {
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
                letterSpacing: 'normal',
                marginTop: '3rem',
                marginBottom: '1rem',
              },
              h4: {
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
                letterSpacing: 'normal',
                marginTop: '3rem',
                marginBottom: '1rem',
              },
              img: {
                marginTop: '3rem',
                marginBottom: '3rem',
              },
              video: {
                marginTop: '3rem',
                marginBottom: '3rem',
              },
              figure: {
                marginTop: '3rem',
                marginBottom: '3rem',
              },
              ol: {
                marginTop: '1.25rem',
                marginBottom: '1.25rem',
                paddingLeft: '1.5rem',
              },
              ul: {
                marginTop: '1.25rem',
                marginBottom: '1.25rem',
                paddingLeft: '1.5rem',
              },
              li: {
                marginTop: 0,
                marginBottom: 0,
              },
              'ol > li': {
                paddingLeft: '.25rem',
              },
              'ul > li': {
                paddingLeft: '.25rem',
              },
              hr: {
                marginTop: '2rem',
                marginBottom: '2rem',
              },
              'hr + h1': {
                marginTop: '2rem',
              },
              'hr + h2': {
                marginTop: '2rem',
              },
            },
          ],
        },
        lg: {
          css: [
            {
              fontSize: '18px',
              lineHeight: '28px',
              p: {
                marginTop: '1.25rem',
                marginBottom: '1.25rem',
              },
              '[class~="lead"]': {
                fontSize: '18px',
                lineHeight: '28px',
                marginTop: '2rem',
                marginBottom: '2rem',
              },
              blockquote: {
                fontSize: '28px',
                lineHeight: '40px',
                marginTop: '3rem',
                marginBottom: '3rem',
                paddingLeft: '1.25rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
              },
              h1: {
                fontSize: '36px',
                lineHeight: '44px',
                letterSpacing: '-0.4px',
                marginTop: '3rem',
                marginBottom: '1.5rem',
              },
              h2: {
                fontSize: '36px',
                lineHeight: '44px',
                fontWeight: 700,
                letterSpacing: '-0.4px',
                marginTop: '3rem',
                marginBottom: '1.5rem',
              },
              h3: {
                fontSize: '28px',
                lineHeight: '40px',
                fontWeight: 700,
                letterSpacing: '-0.4px',
                marginTop: '3rem',
                marginBottom: '1rem',
              },
              h4: {
                fontSize: '24px',
                lineHeight: '32px',
                fontWeight: 700,
                letterSpacing: 'normal',
                marginTop: '3rem',
                marginBottom: '1rem',
              },
              img: {
                marginTop: '3rem',
                marginBottom: '3rem',
              },
              video: {
                marginTop: '3rem',
                marginBottom: '3rem',
              },
              figure: {
                marginTop: '3rem',
                marginBottom: '3rem',
              },
              ol: {
                marginTop: '1.25rem',
                marginBottom: '1.25rem',
                paddingLeft: '1.5rem',
              },
              ul: {
                marginTop: '1.25rem',
                marginBottom: '1.25rem',
                paddingLeft: '1.5rem',
              },
              li: {
                marginTop: 0,
                marginBottom: 0,
              },
              'ol > li': {
                paddingLeft: '.25rem',
              },
              'ul > li': {
                paddingLeft: '.25rem',
              },
              hr: {
                marginTop: '2rem',
                marginBottom: '2rem',
              },
              'hr + h1': {
                marginTop: '3rem',
              },
              'hr + h2': {
                marginTop: '3rem',
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.pstroke-1-5': {
          '> path': {
            strokeWidth: '1.5',
          },
        },
        '.pstroke-2': {
          '> path': {
            strokeWidth: '2',
          },
        },
        '.h1': {
          fontSize: '54px',
          lineHeight: '68px',
          fontWeight: '500',
          letterSpacing: '0',
        },
        '.h2': {
          fontSize: '40px',
          lineHeight: '52px',
          fontWeight: '700',
          letterSpacing: '-0.4px',
        },
        '.h3': {
          fontSize: '36px',
          lineHeight: '44px',
          fontWeight: '700',
          letterSpacing: '-0.4px',
        },
        '.h3_5': {
          fontSize: '28px',
          lineHeight: '40px',
          fontWeight: '700',
          letterSpacing: '-0.4px',
        },
        '.h3_75': {
          fontSize: '24px',
          lineHeight: '32px',
          fontWeight: '700',
          letterSpacing: '0',
        },
        '.h4': {
          fontSize: '22px',
          lineHeight: '32px',
          fontWeight: '700',
          letterSpacing: '0',
        },
        '.subtitle': {
          fontSize: '18px',
          lineHeight: '28px',
          fontWeight: '400',
          letterSpacing: '0',
        },
        '.d-ss-meta': {
          fontSize: '12px',
          lineHeight: '14px',
          fontWeight: '500',
          letterSpacing: '0.2px',
          textTransform: 'uppercase',
        },
        '.full-width': {
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        },
      })
    }),
  ],
}
