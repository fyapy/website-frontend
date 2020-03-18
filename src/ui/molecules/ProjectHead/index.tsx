import React, { FC, useRef, useCallback, useState } from 'react'
import { useTranslation } from 'i18n'
import {
    Container,
    Text,
    ProjectTitle,
    Layout,
} from 'ui/atoms'
import { SetActiveSection } from 'ui/templates/projects'
import {
    Section,
    getNavbarSection,
} from 'ui/theme'
import { useListener, useMobile, useNavbar } from 'hooks'
import { isBrowser } from 'utils/selectors'
import {
    StyledWrapper,
    StyledStickyItem,
    StyledSticky,
} from './style'

interface ProjectHeadProps {
    subtitle: string
    title: string
    description: string
    sections: Section[]
    activeSection: null | Section
    handleClick: (name: Section) => void
    setActiveSection: SetActiveSection
}

export const ProjectHead: FC<ProjectHeadProps> = ({
    subtitle,
    title,
    description,
    sections,
    activeSection,
    handleClick,
    setActiveSection,
}) => {
    const { t } = useTranslation('projects')
    const { isAboveTablet } = useMobile()
    const { setHide } = useNavbar()
    const stickyRef = useRef<HTMLDivElement | null>(null)
    const [isSticky, setSticky] = useState(false)
    const [topOffset, setTopOffset] = useState(0)

    const handleSroll = useCallback(() => {
        if (!topOffset && stickyRef.current) {
            setTopOffset(stickyRef.current.offsetTop - 30)
        }
        if (topOffset) {
            setSticky(window.pageYOffset > topOffset)
            setHide(window.pageYOffset > topOffset)

            if (isSticky && window.pageYOffset < topOffset) {
                setActiveSection(null)
            }
        }
    }, [stickyRef.current?.offsetTop, isSticky, topOffset])

    useListener({
        target: isBrowser ? { current: window } : null,
        event: 'scroll',
        listener: handleSroll,
    })

    return (
        <StyledWrapper data-sticky={isSticky}>
            <Container>
                <Layout flow="column">
                    <Text size="14px">
                        {t('PROJECTS_HEAD_SUBTITLE')
                            .replace('#name#', subtitle)}
                    </Text>
                    <ProjectTitle
                        color="text"
                        size="68px"
                        weight="bold"
                    >
                        {title}
                    </ProjectTitle>
                    <Text
                        size="24px"
                        whiteSpace="pre-wrap"
                        data-content="description"
                    >
                        {description}
                    </Text>
                </Layout>
            </Container>
            {isAboveTablet && (
                <StyledSticky ref={stickyRef} data-sticky={isSticky}>
                    <Container>
                        {sections.map(section => (
                            <StyledStickyItem
                                key={section}
                                data-active={activeSection === section}
                                onClick={() => handleClick(section)}
                            >
                                {t(getNavbarSection(section))}
                            </StyledStickyItem>
                        ))}
                    </Container>
                </StyledSticky>
            )}
        </StyledWrapper>
    )
}
