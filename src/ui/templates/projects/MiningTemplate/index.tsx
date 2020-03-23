import React, { FC, createRef, useState, useMemo, useCallback } from 'react'
import { useTranslation } from 'i18n'
import {
    ProjectHead,
    ProjectBusiness,
    ProjectWorkProcess,
    ProjectDesign,
    ProjectTechnology,
    ProjectArchitecture,
} from 'ui/molecules'
import { SectionRefs } from 'ui/templates/projects'
import { Section } from 'ui/theme'

const sections: Section[] = [
    'business',
    'design',
    'architecture',
    'work-process',
    'technology',
]

const MiningTemplate: FC = () => {
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
                subtitle="CoolPool"
                title="Mining"
                description={t('MINING_HEAD_DESCRIPTION')}
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
                        title: t('MINING_BENEFITS_1_TITLE'),
                        description: t('MINING_BENEFITS_1_DESCRIPTION'),
                    },
                    {
                        title: t('MINING_BENEFITS_2_TITLE'),
                        description: t('MINING_BENEFITS_2_DESCRIPTION'),
                    },
                    {
                        title: t('MINING_BENEFITS_3_TITLE'),
                        description: t('MINING_BENEFITS_3_DESCRIPTION'),
                    },
                    {
                        title: t('MINING_BENEFITS_4_TITLE'),
                        description: t('MINING_BENEFITS_4_DESCRIPTION'),
                    },
                    {
                        title: t('MINING_BENEFITS_5_TITLE'),
                        description: t('MINING_BENEFITS_5_DESCRIPTION'),
                    },
                    {
                        title: t('MINING_BENEFITS_6_TITLE'),
                        description: t('MINING_BENEFITS_6_DESCRIPTION'),
                    },
                ]}
            />
            <ProjectDesign
                refs={refs}
                setActiveSection={setActiveSection}
                laptopImages={[
                    '/images/mining/screen-ru-1.png',
                    '/images/mining/screen-ru-2.png',
                    '/images/mining/screen-ru-3.png',
                    '/images/mining/screen-ru-4.png',
                    '/images/mining/screen-ru-5.png',
                    '/images/mining/screen-ru-6.png',
                    '/images/mining/screen-ru-7.png',
                    '/images/mining/screen-ru-8.png',
                ]}
                phoneImages={[
                    '/images/mining/mobile-screen-ru-1.png',
                    '/images/mining/mobile-screen-ru-2.png',
                    '/images/mining/mobile-screen-ru-3.png',
                    '/images/mining/mobile-screen-ru-4.png',
                    '/images/mining/mobile-screen-ru-5.png',
                    '/images/mining/mobile-screen-ru-6.png',
                    '/images/mining/mobile-screen-ru-7.png',
                    '/images/mining/mobile-screen-ru-8.png',
                ]}
            />
            <ProjectArchitecture
                refs={refs}
                setActiveSection={setActiveSection}
                laptopScreen="/images/mining/architecture.svg"
                mobileScreen="/images/mining/mobile-architecture.svg"
            />
            <ProjectWorkProcess
                refs={refs}
                setActiveSection={setActiveSection}
                description={t('MINING_WORK_PROCESS')}
            />
            <ProjectTechnology
                refs={refs}
                setActiveSection={setActiveSection}
                technologies={[
                    'TypeScript',
                    'React',
                    'Redux',
                    'Golang',
                    'Node JS',
                    'Express',
                    'Redis',
                    'Nginx',
                    'Docker',
                ]}
                projectLink="https://coolpool.top"
                projectLinkText="CoolPool.Top"
                projectLogo="/images/mining/logo.svg"
            />
        </div>
    )
}

export default MiningTemplate
