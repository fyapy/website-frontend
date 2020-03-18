import styled, { css } from 'styled-components'
import Slider from 'react-slick'
import { Icon } from 'ui/atoms'
import { media } from 'ui/theme'

export const StyledSlider = styled(Slider)`
    .slick-slide {
        border: none;
    }
`

export const StyledSlide = styled.div`
    width: 100%;
    height: 100vh;

    display: flex !important;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
    }

    ${media.tablet} {
        height: initial;
        min-height: 100vh;
        padding: 100px 0;
    }
`

type StyledTriangleProps = {
    isActive: boolean
}
export const StyledTriangle = styled(Icon).attrs(({ isActive }: StyledTriangleProps) => ({
    name: 'triangle',
    fill: isActive ? 'white' : 'text',
    stroke: isActive ? 'primary' : 'text',
    width: '34px',
    height: '38px',
}))<StyledTriangleProps>`
    padding: 5px;

    cursor: pointer;
    transition: transform .4s ease-in-out;

    &:not(:last-child) {
        margin-bottom: 5.2vh;
    }
    > use {
        transition:
            fill .4s ease-in-out,
            stroke .4s ease-in-out;
    }
    ${({ isActive }) => isActive && css`
        transform: scale(1.4);
    `}
`
export const StyledPagination = styled.div`
    ${media.aboveTablet} {
        position: fixed;
        top: 50%;
        left: 44px;

        display: flex;
        flex-flow: column;

        transform: translateY(-50%);
    }
`
