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

const FreelanceTemplate: FC = () => {
    const { t } = useTranslation('projects')
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
                subtitle="GhostWriting"
                title="Freelance"
                description={t('FREELANCE_HEAD_DESCRIPTION')}
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
                        title: t('FREELANCE_BENEFITS_1_TITLE'),
                        description: t('FREELANCE_BENEFITS_1_DESCRIPTION'),
                    },
                    {
                        title: t('FREELANCE_BENEFITS_2_TITLE'),
                        description: t('FREELANCE_BENEFITS_2_DESCRIPTION'),
                    },
                    {
                        title: t('FREELANCE_BENEFITS_3_TITLE'),
                        description: t('FREELANCE_BENEFITS_3_DESCRIPTION'),
                    },
                    {
                        title: t('FREELANCE_BENEFITS_4_TITLE'),
                        description: t('FREELANCE_BENEFITS_4_DESCRIPTION'),
                    },
                    {
                        title: t('FREELANCE_BENEFITS_5_TITLE'),
                        description: t('FREELANCE_BENEFITS_5_DESCRIPTION'),
                    },
                ]}
            />
            <ProjectDesign
                refs={refs}
                setActiveSection={setActiveSection}
                laptopImages={[
                    '/images/ghostwriting/screen-ru-1.png',
                    '/images/ghostwriting/screen-ru-2.png',
                    '/images/ghostwriting/screen-ru-3.png',
                    '/images/ghostwriting/screen-ru-4.png',
                    '/images/ghostwriting/screen-ru-5.png',
                    '/images/ghostwriting/screen-ru-6.png',
                    '/images/ghostwriting/screen-ru-7.png',
                ]}
                phoneImages={[
                    '/images/ghostwriting/mobile-screen-ru-1.png',
                    '/images/ghostwriting/mobile-screen-ru-2.png',
                    '/images/ghostwriting/mobile-screen-ru-3.png',
                    '/images/ghostwriting/mobile-screen-ru-4.png',
                    '/images/ghostwriting/mobile-screen-ru-5.png',
                    '/images/ghostwriting/mobile-screen-ru-6.png',
                    '/images/ghostwriting/mobile-screen-ru-7.png',
                ]}
            />
            <ProjectWorkProcess
                refs={refs}
                setActiveSection={setActiveSection}
                description={t('FREELANCE_WORK_PROCESS')}
            />
            <ProjectTechnology
                refs={refs}
                setActiveSection={setActiveSection}
                technologies={[
                    'TypeScript',
                    'React',
                    'Redux',
                    'CSS in JS',
                    'Node JS',
                    'Express',
                    'Socket IO',
                    'TypeORM',
                    'PostgreSQL',
                    'Gitlab CI/CD',
                    'Nginx',
                    'Docker',
                ]}
                projectLink="https://ghostwriting.online"
                projectLinkText="GhostWriting.Online"
                projectLogo="/images/ghostwriting/logo.svg"
            />
        </div>
    )
}

export default FreelanceTemplate
