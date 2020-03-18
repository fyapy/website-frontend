import React, { FC, useMemo } from 'react'
import { Settings } from 'react-slick'
import {
    StyledSliderWrapper,
    StyledSlider,
    StyledWrapper,
    StyledBackground,
} from './style'

interface LaptopSliderProps {
    images: string[]
    settings?: Settings
}

export const LaptopSlider: FC<LaptopSliderProps> = ({ images, settings: settingsRewrite }) => {
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
            <StyledBackground src="/images/macbook.png" />
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

LaptopSlider.styledComponent = StyledWrapper
