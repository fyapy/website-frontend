import React, { FC } from 'react'
import { Url } from 'declarations/router'
import {
    LaptopSlider,
    PreviewInfo,
    PhoneSlider,
    ProjectLink,
} from 'ui/molecules'
import {
    StyledWrapper,
} from './style'

interface ProjectPreviewProps {
    title: string
    previewLink: Url
    laptopImages: string[]
    phoneImages: string[]
    link: string
    linkText: string
}

export const ProjectPreview: FC<ProjectPreviewProps> = ({
    title,
    previewLink,
    laptopImages,
    phoneImages,
    link,
    linkText,
}) => (
    <StyledWrapper>
        <LaptopSlider
            images={laptopImages}
        />
        <PreviewInfo
            title={title}
            link={previewLink}
        />
        <ProjectLink
            link={link}
            linkText={linkText}
        />
        <PhoneSlider
            images={phoneImages}
        />
    </StyledWrapper>
)
