'use client';

import React from 'react';
import { useTranslation } from 'src/shared/i18n/useTranslation';
import { LanguageSwitcher } from 'src/shared/components/LanguageSwitcher';

export default function I18nExamplePage() {
  const { t } = useTranslation();

  return (
    <div className='container mx-auto p-8'>
      <div className='mb-8 flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>{t('welcome')}</h1>
        <LanguageSwitcher />
      </div>

      <div className='grid gap-8 md:grid-cols-2'>
        <div className='rounded-lg border p-6 shadow-sm'>
          <h2 className='mb-4 text-xl font-semibold'>
            {t('common.edit')} {t('hello')}
          </h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-sm font-medium'>{t('auth.email')}</label>
              <input
                type='email'
                className='border-input bg-background mt-1 w-full rounded-md border px-3 py-2'
                placeholder={t('auth.email')}
              />
              <p className='mt-1 text-sm text-red-500'>{t('errors.required')}</p>
            </div>
            <div>
              <label className='block text-sm font-medium'>{t('auth.password')}</label>
              <input
                type='password'
                className='border-input bg-background mt-1 w-full rounded-md border px-3 py-2'
                placeholder={t('auth.password')}
              />
            </div>
            <div className='flex space-x-2'>
              <button className='bg-primary text-primary-foreground rounded-md px-4 py-2'>{t('common.save')}</button>
              <button className='rounded-md border px-4 py-2'>{t('common.cancel')}</button>
            </div>
          </div>
        </div>

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
    </div>
  );
}
