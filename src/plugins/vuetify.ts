/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/assets/styles/main.scss'
import { VNumberInput } from 'vuetify/labs/VNumberInput'
// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  display: {
    mobileBreakpoint: 'md',
    thresholds: {
      xs: 0,
      sm: 340,
      md: 768,
      lg: 768,
      xl: 768,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#00367c',
          secondary: '#006064',
          accent: '#006064',
          third: '#ddad60',
          dangerous: '#f06966',
          success: '#1e94a0',
          cancel: '#ca5c53',
          error: '#dc3548',
          info: '#145488',
          white: '#ffffff',
        },
      },
    },
  },
  components: {
    VNumberInput,
  },
})
