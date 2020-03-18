import React, { FC } from 'react'
import { useTranslation } from 'i18n'
import { useIntersection, useMobile } from 'hooks'
import { Container, ProjectTitle, Layout } from 'ui/atoms'
import { SectionRefs, SetActiveSection } from 'ui/templates/projects'
import {
    StyledWrapper,
    StyledSubtitle,
    StyledDescription,
    StyledImage,
} from './style'

interface ProjectWorkProcessProps {
    refs: SectionRefs
    setActiveSection: SetActiveSection
    description: string
}

export const ProjectWorkProcess: FC<ProjectWorkProcessProps> = ({
    refs,
    setActiveSection,
    description,
}) => {
    const { isMobile } = useMobile()
    const { t, i18n } = useTranslation('projects')
    useIntersection('work-process', refs, setActiveSection)

    return (
        <StyledWrapper ref={refs['work-process']}>
            <Container>
                <Layout flow="column">
                    <ProjectTitle color="text">
                        {t('PROJECTS_WORK_PROCESS_TITLE')}
                    </ProjectTitle>
                    <StyledSubtitle>Front-end workflow</StyledSubtitle>
                    <StyledDescription>
                        {description}
                    </StyledDescription>
                    <StyledImage
                        src={i18n.language === 'ru'
                            ? (isMobile
                                ? '/images/mobile-work-process.svg'
                                : '/images/work-process.svg')
                            : (isMobile
                                ? '/images/mobile-work-process-en.svg'
                                : '/images/work-process-en.svg')}
                        alt="Front-end workflow"
                    />
                </Layout>
            </Container>
        </StyledWrapper>
    )
}
