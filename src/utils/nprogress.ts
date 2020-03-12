import { Router } from 'i18n'
import NProgress from 'nprogress'
import { isBrowser } from 'utils/selectors'

if (isBrowser) {
    NProgress.configure({ showSpinner: false })

    Router.events.on('routeChangeStart', () => NProgress.start())
    Router.events.on('routeChangeComplete', () => {
        NProgress.done()
        window.scrollTo(0, 0)
    })
    Router.events.on('routeChangeError', () => NProgress.done())
}
