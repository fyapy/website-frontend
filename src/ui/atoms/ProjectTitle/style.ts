import styled from 'styled-components'
import { Layout, Text } from 'ui/atoms'
import { color, media } from 'ui/theme'

export const StyledWrapper = styled(Layout).attrs({
    flow: 'row',
})`
    ${media.tablet} {
        ${Text} {
            font-size: 36px;
        }
    }
`

export const StyledLine = styled.div`
    width: 1px;
    margin-right: 29px;

    background-color: ${color.primary};

    ${media.tablet} {
        margin-right: 19px;
    }
`
