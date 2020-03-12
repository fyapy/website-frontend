import React from 'react'
import { NextPage } from 'next'
import { HomeTemplate } from 'ui/templates'

const Index: NextPage = () => (
    <HomeTemplate />
)

Index.getInitialProps = () => ({
    namespacesRequired: ['common'],
})

export default Index
