/* eslint-disable no-restricted-imports */

import 'i18next' // before v13.0.0 -> import 'react-i18next';

import type landing from '../../../public/locales/en/landing.json'
import type translation from '../../../public/locales/en/translation.json'

interface I18nNamespaces {
  landing: typeof landing
  translation: typeof translation
}
// before v13.0.0 -> declare module 'react-i18next'
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: I18nNamespaces
  }
}
