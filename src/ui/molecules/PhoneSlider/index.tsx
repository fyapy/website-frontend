import React, { FC, useMemo } from 'react'
import { Settings } from 'react-slick'
import {
    StyledWrapper,
    StyledBackground,
    StyledSliderWrapper,
    StyledSlider,
} from './style'

interface PhoneSliderProps {
    images: string[]
    settings?: Settings
}

export const PhoneSlider: FC<PhoneSliderProps> = ({ images, settings: settingsRewrite }) => {
    const settings: Settings = useMemo(() => ({
        arrows: false,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 5000,
        lazyLoad: 'progressive',
        ...settingsRewrite,
    }), [])

    return (
        <StyledWrapper>
            <StyledBackground src="/images/samsung.png" />
            <StyledSliderWrapper>
                <StyledSlider {...settings}>
                    {images.map(image => (
                        <img key={image} src={image} />
                    ))}
                </StyledSlider>
            </StyledSliderWrapper>
        </StyledWrapper>
    )
}

PhoneSlider.styledComponent = StyledWrapper
