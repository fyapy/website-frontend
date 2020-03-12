import NextI18Next from 'next-i18next'
import { isBrowser } from '../utils/selectors'

const NextI18n = new NextI18Next({
    defaultLanguage: 'ru',
    otherLanguages: ['en'],
    localePath: isBrowser ? 'locales' : 'public/locales',
    localeSubpaths: {
        ru: 'ru',
        en: 'en',
    },
})

export const {
    Link,
    Router,
    Trans,
    appWithTranslation,
    config,
    i18n,
    initPromise,
    useTranslation,
    withTranslation,
} = NextI18n

export default NextI18n
