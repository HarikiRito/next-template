import { useTranslation as useI18nTranslation } from 'react-i18next';
import { I18nNamespaces } from 'src/shared/i18n/i18next';

export function useTranslation(namespace?: keyof I18nNamespaces | Array<keyof I18nNamespaces>) {
  const { t, i18n } = useI18nTranslation(namespace);

  function changeLanguage(language: string) {
    void i18n.changeLanguage(language);
  }

  return {
    t,
    i18n,
    changeLanguage,
  };
}
