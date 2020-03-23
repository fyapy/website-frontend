import React, { FC, createRef, useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'i18n'
import {
    ProjectHead,
    ProjectBusiness,
    ProjectWorkProcess,
    ProjectDesign,
    ProjectTechnology,
} from 'ui/molecules'
import { SectionRefs } from 'ui/templates/projects'
import { Section } from 'ui/theme'

const sections: Section[] = [
    'business',
    'design',
    'work-process',
    'technology',
]

const EcommerceTemplate: FC = () => {
    const { t, i18n } = useTranslation('projects')
    const [activeSection, setActiveSection] = useState<Section | null>(null)

    const refs = useMemo(() => sections.reduce((
        acc: SectionRefs,
        section
    ) => {
        acc[section] = createRef()
        return acc
    }, {}), [sections])

    const handleClick = useCallback((name: Section) => window.scrollTo({
        top: (refs[name]?.current?.offsetTop || 0) - 85,
        behavior: 'smooth',
    }), [refs])

    return (
        <div>
            <ProjectHead
                subtitle="GiflyTime"
                title="E-commerce"
                description={t('ECOMMERCE_HEAD_DESCRIPTION')}
                sections={sections}
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                handleClick={handleClick}
            />
            <ProjectBusiness
                refs={refs}
                setActiveSection={setActiveSection}
                benefits={[
                    {
                        title: t('ECOMMERCE_BENEFITS_1_TITLE'),
                        description: t('ECOMMERCE_BENEFITS_1_DESCRIPTION'),
                    },
                    {
                        title: t('ECOMMERCE_BENEFITS_2_TITLE'),
                        description: t('ECOMMERCE_BENEFITS_2_DESCRIPTION'),
                    },
                    {
                        title: t('ECOMMERCE_BENEFITS_3_TITLE'),
                        description: t('ECOMMERCE_BENEFITS_3_DESCRIPTION'),
                    },
                    {
                        title: t('ECOMMERCE_BENEFITS_4_TITLE'),
                        description: t('ECOMMERCE_BENEFITS_4_DESCRIPTION'),
                    },
                    {
                        title: t('ECOMMERCE_BENEFITS_5_TITLE'),
                        description: t('ECOMMERCE_BENEFITS_5_DESCRIPTION'),
                    },
                    {
                        title: t('ECOMMERCE_BENEFITS_6_TITLE'),
                        description: t('ECOMMERCE_BENEFITS_6_DESCRIPTION'),
                    },
                ]}
            />
            <ProjectDesign
                refs={refs}
                setActiveSection={setActiveSection}
                laptopImages={i18n.language === 'ru'
                    ? [
                        '/images/giflytime/screen-ru-1.png',
                        '/images/giflytime/screen-ru-2.png',
                        '/images/giflytime/screen-ru-3.png',
                        '/images/giflytime/screen-ru-4.png',
                        '/images/giflytime/screen-ru-5.png',
                        '/images/giflytime/screen-ru-6.png',
                    ] : [
                        '/images/giflytime/screen-en-1.png',
                        '/images/giflytime/screen-en-2.png',
                        '/images/giflytime/screen-en-3.png',
                        '/images/giflytime/screen-en-4.png',
                        '/images/giflytime/screen-en-5.png',
                        '/images/giflytime/screen-en-6.png',
                    ]}
                phoneImages={i18n.language === 'ru'
                    ? [
                        '/images/giflytime/mobile-screen-ru-1.png',
                        '/images/giflytime/mobile-screen-ru-2.png',
                        '/images/giflytime/mobile-screen-ru-3.png',
                        '/images/giflytime/mobile-screen-ru-4.png',
                        '/images/giflytime/mobile-screen-ru-5.png',
                        '/images/giflytime/mobile-screen-ru-6.png',
                    ] : [
                        '/images/giflytime/mobile-screen-en-1.png',
                        '/images/giflytime/mobile-screen-en-2.png',
                        '/images/giflytime/mobile-screen-en-3.png',
                        '/images/giflytime/mobile-screen-en-4.png',
                        '/images/giflytime/mobile-screen-en-5.png',
                        '/images/giflytime/mobile-screen-en-6.png',
                    ]}
            />
            <ProjectWorkProcess
                refs={refs}
                setActiveSection={setActiveSection}
                description={t('ECOMMERCE_WORK_PROCESS')}
            />
            <ProjectTechnology
                refs={refs}
                setActiveSection={setActiveSection}
                technologies={[
                    'TypeScript',
                    'React + Next',
                    'Redux',
                    'Node JS',
                    'Nest JS',
                    'TypeORM',
                    'PostgreSQL',
                    'Nginx',
                    'Docker',
                ]}
                projectLink="https://giflytime.codereader.ru"
                projectLinkText="GiflyTime.Com"
                projectLogo="/images/giflytime/logo.svg"
            />
        </div>
    )
}

export default EcommerceTemplate
