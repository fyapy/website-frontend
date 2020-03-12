import React from 'react'
import NextDocument, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'
// import * as Sentry from '@sentry/browser'
import { ServerStyleSheet } from 'styled-components'


// process.on('unhandledRejection', (err) => Sentry.captureException(err))
// process.on('uncaughtException', (err) => Sentry.captureException(err))

export default class Document extends NextDocument {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await NextDocument.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}
