import path from 'path';
import NextI18Next from 'next-i18next';
import { nextI18NextRewrites } from 'next-i18next/rewrites';

export const localeSubpaths = {};

export const rewrites = async () => nextI18NextRewrites(localeSubpaths);

export const {
  Link,
  Router,
  appWithTranslation,
  useTranslation,
} = new NextI18Next({
  ns: ['app'],
  defaultNS: 'app',
  fallbackLng: 'en-US',
  defaultLanguage: 'en-US',
  otherLanguages: [],
  localePath: path.resolve('./public/locales'),
  localeSubpaths,
});
