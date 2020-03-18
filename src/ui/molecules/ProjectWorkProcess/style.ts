import styled from 'styled-components'
import { Text } from 'ui/atoms'
import { media } from 'ui/theme'

export const StyledWrapper = styled.div`
    padding-top: 100px;

    [data-name='project-title'] ${Text} {
        font-size: 36px;
    }

    ${media.tablet} {
        padding-top: 60px;
    }
`

export const StyledSubtitle = styled(Text).attrs({
    size: '36px',
})`
    margin: 64px 0 40px;

    ${media.tablet} {
        margin: 30px 0 12px;

        font-size: 30px;
    }
`

export const StyledDescription = styled(Text).attrs({
    size: '24px',
    whiteSpace: 'pre-wrap',
})`
    margin-bottom: 72px;

    ${media.tablet} {
        margin-bottom: 40px;

        font-size: 18px;
    }
`

export const StyledImage = styled.img.attrs({
    draggable: false,
})`
    max-width: 1024px;
    margin: 0 auto;

    ${media.mobile} {
        max-width: 400px;
    }
`
