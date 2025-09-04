import { defineConfig } from '@lingui/cli';

export default defineConfig({
  sourceLocale: 'mn',
  locales: ['en', 'mn'],
  catalogs: [
    {
      path: '<rootDir>/src/locales/messages/{locale}',
      include: ['src'],
    },
  ],
  format: 'po',
});