import styled from 'styled-components'
import { Layout, Text } from 'ui/atoms'
import { color, media } from 'ui/theme'

export const StyledWrapper = styled(Layout).attrs({
    flow: 'row',
    align: 'center',
    padding: '3.7vh 0 0 8.5vw',
})`
    grid-area: ProjectLink;

    ${media.tablet} {
        padding: initial;
        margin-top: 34px;

        justify-content: center;
    }
`

export const StyledLink = styled.a`
    position: relative;

    margin-left: 20px;

    ${Text} {
        padding-bottom: 8px;

        &:after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;

            height: 1px;
            width: 75%;

            background-color: ${color.text};
            transform: translateX(-50%);

            transition: 
                background-color .4s ease-in-out,
                width .4s ease-in-out;
        }
    }
    &:hover ${Text}:after {
        background-color: ${color.primary};
        width: 95%;
    }
`
