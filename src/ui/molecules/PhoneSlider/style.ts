import styled from 'styled-components'
import Slider from 'react-slick'

export const StyledWrapper = styled.div`
    position: relative;

    max-width: 251px;


    display: flex;
    grid-area: PhoneSlider;
`

export const StyledBackground = styled.img`
    position: absolute;
    right: 0;
    left: 0;

    width: 100%;
`

export const StyledSliderWrapper = styled.div`
    max-width: 97%;
    margin: 10% auto;

    display: inline-block;
`

export const StyledSlider = styled(Slider)`
    max-width: 400px;

    border-radius: 11px;
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
`
