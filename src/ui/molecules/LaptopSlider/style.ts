import styled from 'styled-components'
import Slider from 'react-slick'
import { media } from 'ui/theme'

export const StyledWrapper = styled.div`
    position: relative;

    max-width: 1215px;
    width: 100%;
    height: 34vw;

    grid-area: LaptopSlider;
    display: flex;

    ${media.tablet} {
        height: 100%;
    }
`

export const StyledBackground = styled.img`
    position: absolute;
    right: 0;
    left: 0;

    width: 100%;
`

export const StyledSliderWrapper = styled.div`
    max-width: 70.5%;
    margin: 0.5% auto;

    display: inline-block;
`
export const StyledSlider = styled(Slider)`
    height: 88%;

    background-color: transparent;
    border-top-right-radius: 1.5vw;
    border-top-left-radius: 1.5vw;
    overflow: hidden;

    img {
        width: 100%;
    }
    .slick {
        &-list, &-track {
            height: 100%;
        }
        &-slide {
            height: 100%;

            min-width: 50px;
        }
    }
    
    ${media.tablet} {
        height: 100%;
    }
`
