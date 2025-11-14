'use client'

import Link from 'next/link'
import { LanguageSwitcher } from 'src/components/i18n/LanguageSwitcher'
import { LocaleLink } from 'src/components/i18n/LocaleLink'
import { buttonVariants } from 'src/components/ui/button/AppButton'
import { useTranslation } from 'src/hooks/useTranslation'
import { cn } from 'src/utils/className'
export default function HomePage() {
  const { locale, t } = useTranslation()

  const { t: tLanding } = useTranslation('landing')

  return (
    <div className="container mx-auto p-8">
      <LocaleLink className={cn(buttonVariants({ variant: 'default' }), 'mb-4')} href="/counter">
        Example Counter with Valtio as a state management
      </LocaleLink>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">{t('welcome')}</h1>
        <LanguageSwitcher />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">{t('auth.login')}</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">{t('auth.email')}</label>
              <input
                className="border-input bg-background mt-1 w-full rounded-md border px-3 py-2"
                placeholder={t('auth.email') as string}
                type="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">{t('auth.password')}</label>
              <input
                className="border-input bg-background mt-1 w-full rounded-md border px-3 py-2"
                placeholder={t('auth.password') as string}
                type="password"
              />
            </div>
            <div>
              <button className="bg-primary text-primary-foreground w-full rounded-md px-4 py-2">
                {t('auth.login')}
              </button>
              <a className="mt-2 block text-center text-sm text-blue-500" href="#">
                {t('auth.forgotPassword')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link className="text-blue-500 hover:underline" href={`/${locale}/about`}>
          Go to About Page {tLanding('landing:description')}
        </Link>
      </div>
    </div>
  )
}
