import styled from 'styled-components'
import { Layout, Text } from 'ui/atoms'
import { media } from 'ui/theme'

export const StyledWrapper = styled(Layout).attrs({
    flow: 'column',
    align: 'flex-end',
})`
    grid-area: PreviewInfo;

    [data-content='development'] {
        margin: 12px 0 25px;
    }

    ${media.laptop} {
        align-items: center;

        > ${Text}:first-of-type {
            font-size: 48px;
        }
        [data-content='development'] {
            margin: 8px 0 14px;
        }
    }
`
