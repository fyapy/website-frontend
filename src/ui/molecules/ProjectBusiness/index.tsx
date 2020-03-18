import React, { FC } from 'react'
import { useIntersection } from 'hooks'
import { Container, ProjectTitle, Text } from 'ui/atoms'
import { SectionRefs, SetActiveSection } from 'ui/templates/projects'
import {
    StyledWrapper,
    StyledList,
    StyledItem,
} from './style'
import { useTranslation } from 'i18n'

interface ProjectBusinessProps {
    refs: SectionRefs
    setActiveSection: SetActiveSection
    benefits: Array<{
        title: string
        description: string
    }>
}

export const ProjectBusiness: FC<ProjectBusinessProps> = ({ refs, setActiveSection, benefits }) => {
    const { t } = useTranslation('projects')
    useIntersection('business', refs, setActiveSection)

    return (
        <StyledWrapper ref={refs['business']}>
            <Container>
                <ProjectTitle>
                    {t('PROJECTS_BUSINESS_TITLE')}
                </ProjectTitle>
                <StyledList>
                    {benefits.map(benefit => (
                        <StyledItem key={benefit.title}>
                            <Text color="primary" size="36px">
                                {benefit.title}
                            </Text>
                            <Text color="white" size="24px">
                                {benefit.description}
                            </Text>
                        </StyledItem>
                    ))}
                </StyledList>
            </Container>
        </StyledWrapper>
    )
}
