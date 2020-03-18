import React, { FC, useMemo } from 'react'
import { useTranslation } from 'i18n'
import { useIntersection } from 'hooks'
import { Container, ProjectTitle, Text } from 'ui/atoms'
import { LetsSpeak } from 'ui/molecules'
import { SectionRefs, SetActiveSection } from 'ui/templates/projects'
import { arrayChunk } from 'utils/array'
import {
    StyledWrapper,
    StyledList,
    StyledTechnologies,
    StyledTechnology,
    StyledProject,
} from './style'

interface ProjectTechnologyProps {
    refs: SectionRefs
    setActiveSection: SetActiveSection
    technologies: string[]
    projectLink: string
    projectLinkText: string
    projectLogo: string
}

export const ProjectTechnology: FC<ProjectTechnologyProps> = ({
    refs,
    setActiveSection,
    technologies,
    projectLink,
    projectLinkText,
    projectLogo,
}) => {
    const { t } = useTranslation('projects')
    useIntersection('technology', refs, setActiveSection)

    const techList = useMemo(() => arrayChunk(technologies, technologies.length / 3), [technologies])

    return (
        <StyledWrapper ref={refs['technology']}>
            <Container>
                <ProjectTitle color="text">
                    {t('PROJECTS_TECHNOLOGY_TITLE')}
                </ProjectTitle>
                <StyledList>
                    {techList.map((techChildList, index) => (
                        <StyledTechnologies key={index}>
                            {techChildList.map(technology => (
                                <StyledTechnology key={technology}>
                                    {technology}
                                </StyledTechnology>
                            ))}
                        </StyledTechnologies>
                    ))}
                </StyledList>
                <ProjectTitle
                    color="text"
                >
                    {t('PROJECTS_PROJECTS_TITLE')}
                </ProjectTitle>
                <StyledProject
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={projectLogo} alt={projectLinkText} />
                    <Text color="white" weight="medium" size="24px">
                        {projectLinkText}
                    </Text>
                </StyledProject>
                <LetsSpeak />
            </Container>
        </StyledWrapper>
    )
}
