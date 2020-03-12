import React from 'react'
import { NextPage } from 'next'

const ErrorPage: NextPage = () => (
    <div>Error</div>
)

ErrorPage.getInitialProps = () => ({
    namespacesRequired: [],
})

export default ErrorPage
