import React, { FC, useState, useCallback, SyntheticEvent } from 'react'
import { useTranslation } from 'i18n'
import { useIntersection, useMobile } from 'hooks'
import { Container, ProjectTitle, LinkButton } from 'ui/atoms'
import {
    LaptopSlider,
    PhoneSlider,
} from 'ui/molecules'
import { SectionRefs, SetActiveSection } from 'ui/templates/projects'
import {
    StyledWrapper,
    StyledSlider,
    StyledButtonGroup,
    StyledProgress,
} from './style'

interface ProjectDesignProps {
    refs: SectionRefs
    setActiveSection: SetActiveSection
    laptopImages: string[]
    phoneImages: string[]
}

export const ProjectDesign: FC<ProjectDesignProps> = ({
    refs,
    setActiveSection,
    laptopImages,
    phoneImages,
}) => {
    const { isAboveTablet } = useMobile()
    const { t } = useTranslation('projects')
    const [slider, setSlider] = useState<null | 'laptop' | 'mobile'>(null)
    const [laptopProgress, setLaptopProgress] = useState(0)
    const [mobileProgress, setMobileProgress] = useState(0)

    useIntersection('design', refs, setActiveSection)

    const handleLaptop = useCallback((event: SyntheticEvent) => {
        event.preventDefault()
        setSlider(slider !== 'laptop' ? 'laptop' : null)
    }, [slider])
    const handleMobile = useCallback((event: SyntheticEvent) => {
        event.preventDefault()
        setSlider(slider !== 'mobile' ? 'mobile' : null)
    }, [slider])

    return (
        <StyledWrapper ref={refs['design']}>
            <Container>
                <ProjectTitle color="text">
                    {t('PROJECTS_DESIGN_TITLE')}
                </ProjectTitle>
            </Container>
            <StyledSlider
                data-slider={slider}
            >
                <LaptopSlider
                    images={laptopImages}
                    settings={{
                        beforeChange: (_, nextSlide) => setLaptopProgress(
                            ((nextSlide) / (laptopImages.length - 1) ) * 100
                        ),
                    }}
                />
                {!isAboveTablet && (
                    <StyledProgress progress={laptopProgress} />
                )}
                <PhoneSlider
                    images={phoneImages}
                    settings={{
                        beforeChange: (_, nextSlide) => setMobileProgress(
                            ((nextSlide) / (phoneImages.length - 1) ) * 100
                        ),
                    }}
                />
                {!isAboveTablet && (
                    <StyledProgress progress={mobileProgress} />
                )}
            </StyledSlider>
            <StyledButtonGroup>
                <LinkButton
                    href={{ pathname: '/' }}
                    isRight
                    iconProps={{
                        name: 'laptop',
                        width: '23px',
                        height: '18px',
                    }}
                    onClick={handleLaptop}
                >
                    {t('PROJECTS_DESKTOP_BUTTON')}
                </LinkButton>
                <LinkButton
                    href={{ pathname: '/' }}
                    iconProps={{
                        name: 'mobile',
                        width: '12px',
                        height: '18px',
                    }}
                    onClick={handleMobile}
                >
                    {t('PROJECTS_MOBILE_BUTTON')}
                </LinkButton>
            </StyledButtonGroup>
        </StyledWrapper>
    )
}
