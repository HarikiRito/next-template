import { useParams } from 'next/navigation'
import { useTranslation as useI18nTranslation } from 'react-i18next'
import { I18nNamespaces } from 'src/i18n/i18next'

export function useTranslation(namespace?: (keyof I18nNamespaces)[] | keyof I18nNamespaces) {
  const { locale } = useParams<{ locale: string }>()
  const { i18n, t } = useI18nTranslation(namespace, {
    lng: locale,
  })

  function changeLanguage(language: string) {
    void i18n.changeLanguage(language)
  }

  return {
    changeLanguage,
    i18n,
    locale,
    t,
  }
}
