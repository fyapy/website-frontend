import React from 'react'
import NextApp, { AppContext } from 'next/app'
// import * as Sentry from '@sentry/browser'
import { appWithTranslation } from 'i18n'
import {
    AdaptiveProvider,
    SliderProvider,
    NavbarProvider,
} from 'providers'
import { PreloadingScreen } from 'ui/molecules'
import { AppTemplate } from 'ui/templates'

import 'utils/nprogress'
import 'styles/index.scss'

// Sentry.init({ dsn: process.env.REACT_APP_SENTRY_DSN })

class App extends NextApp {
    static async getInitialProps({ Component, ctx }: AppContext) {

        return {
            pageProps: (Component.getInitialProps
                ? Component.getInitialProps(ctx)
                : {}),
        }
    }

    // componentDidCatch(error: any, errorInfo: any) {
    //     Sentry.withScope((scope) => {
    //         Object.keys(errorInfo).forEach((key) => {
    //             scope.setExtra(key, errorInfo[key])
    //         })

    //         Sentry.captureException(error)
    //     })

    //     super.componentDidCatch(error, errorInfo)
    // }

    render() {
        const { Component, pageProps } = this.props

        return (
            <>
                <PreloadingScreen />
                <AdaptiveProvider>
                    <SliderProvider>
                        <NavbarProvider>
                            <AppTemplate>
                                <Component {...pageProps} />
                            </AppTemplate>
                        </NavbarProvider>
                    </SliderProvider>
                </AdaptiveProvider>
            </>
        )
    }
}

export default appWithTranslation(App)
