import styled from 'styled-components'
import { Text, Container, ProjectTitle } from 'ui/atoms'
import { color, media } from 'ui/theme'

export const StyledWrapper = styled.div`
    padding: 210px 0 100px;

    border-bottom: 1px solid #000;

    ${ProjectTitle.styledComponent} {
        margin: 16px 0 40px;
    }
    [data-content='description'] {
        margin-bottom: 64px;
    }
    &[data-sticky='true'] {
        padding-bottom: 137px;
    }

    ${media.tablet} {
        padding: 136px 0 100px;

        [data-content='description'] {
            margin-bottom: 0;
        }
        ${ProjectTitle.styledComponent} {
            margin-bottom: 20px;
        }
    }
`

export const StyledStickyItem = styled(Text).attrs({
    size: '30px',
})`
    cursor: pointer;
    transition: color .4s ease-in-out;

    &[data-active='true'] {
        color: ${color.primary};
    }

    ${media.laptop} {
        font-size: 18px;
    }
`

export const StyledSticky = styled.div`
    &[data-sticky='true'] {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;

        padding: 24px 0;

        background-color: ${color.white};
    }
    > ${Container} {
        display: flex;
        justify-content: space-around;
    }
`
