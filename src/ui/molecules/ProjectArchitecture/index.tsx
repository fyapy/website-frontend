import React, { FC } from 'react'
import { useTranslation } from 'i18n'
import { useIntersection, useMobile } from 'hooks'
import { ProjectTitle, Container } from 'ui/atoms'
import { SectionRefs, SetActiveSection } from 'ui/templates/projects'
import {
    StyledWrapper,
    StyledImage,
} from './style'

interface ProjectArchitectureProps {
    refs: SectionRefs
    setActiveSection: SetActiveSection
    laptopScreen: string
    mobileScreen: string
}

export const ProjectArchitecture: FC<ProjectArchitectureProps> = ({
    refs,
    setActiveSection,
    laptopScreen,
    mobileScreen,
}) => {
    const { isMobile } = useMobile()
    const { t } = useTranslation('projects')
    useIntersection('architecture', refs, setActiveSection)

    return (
        <StyledWrapper ref={refs['architecture']}>
            <Container>
                <ProjectTitle color="text">
                    {t('PROJECTS_HEAD_ARCHITECTURE')}
                </ProjectTitle>
                <StyledImage
                    src={isMobile
                        ? mobileScreen
                        : laptopScreen}
                />
            </Container>
        </StyledWrapper>
    )
}
