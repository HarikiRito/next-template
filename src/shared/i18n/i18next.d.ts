/* eslint-disable no-restricted-imports */

import 'i18next'; // before v13.0.0 -> import 'react-i18next';

import type translation from '../../../public/locales/en/translation.json';
import type landing from '../../../public/locales/en/landing.json';

interface I18nNamespaces {
  translation: typeof translation;
  landing: typeof landing;
}
// before v13.0.0 -> declare module 'react-i18next'
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: I18nNamespaces;
  }
}
