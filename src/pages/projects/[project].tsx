import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import {
    EcommerceTemplate,
    FreelanceTemplate,
    MiningTemplate,
} from 'ui/templates'

const ProjectPage: NextPage = () => {
    const { query } = useRouter()

    switch (query.project) {
        case 'e-commerce':
            return <EcommerceTemplate />
        case 'freelance':
            return <FreelanceTemplate />
        case 'mining':
            return <MiningTemplate />
        default:
            return <EcommerceTemplate />
    }
}

ProjectPage.getInitialProps = () => ({
    namespacesRequired: [
        'common',
        'projects',
    ],
})

export default ProjectPage
