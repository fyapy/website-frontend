import styled from 'styled-components'
import Slider from 'react-slick'

export const StyledSlider = styled(Slider).attrs({
    vertical: true,
    verticalSwiping: true,
    infinite: false,
})``

export const StyledSlide = styled.div`
    width: 100%;
    height: 100vh;

    text-align: center;
    border-bottom: 1px solid #333;
`
