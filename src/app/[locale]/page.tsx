'use client';

import React from 'react';
import { useTranslation } from 'src/shared/hooks/useTranslation';
import { LanguageSwitcher } from 'src/shared/components/LanguageSwitcher';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function HomePage() {
  const { t } = useTranslation();
  const { locale } = useParams<{ locale: string }>();
  const { t: tLanding } = useTranslation('landing');

  return (
    <div className='container mx-auto p-8'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>{t('welcome')}</h1>
        <LanguageSwitcher />
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='rounded-lg border p-6 shadow-sm'>
          <h2 className='mb-4 text-xl font-semibold'>{t('auth.login')}</h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium'>{t('auth.email')}</label>
              <input
                type='email'
                className='border-input bg-background mt-1 w-full rounded-md border px-3 py-2'
                placeholder={t('auth.email')}
              />
            </div>
            <div>
              <label className='block text-sm font-medium'>{t('auth.password')}</label>
              <input
                type='password'
                className='border-input bg-background mt-1 w-full rounded-md border px-3 py-2'
                placeholder={t('auth.password')}
              />
            </div>
            <div>
              <button className='bg-primary text-primary-foreground w-full rounded-md px-4 py-2'>
                {t('auth.login')}
              </button>
              <a href='#' className='mt-2 block text-center text-sm text-blue-500'>
                {t('auth.forgotPassword')}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8'>
        <Link href={`/${locale}/about`} className='text-blue-500 hover:underline'>
          Go to About Page {tLanding('landing:description')}
        </Link>
      </div>
    </div>
  );
}
