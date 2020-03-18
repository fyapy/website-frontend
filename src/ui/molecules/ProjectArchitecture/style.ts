import styled from 'styled-components'
import { media } from 'ui/theme'
import { ProjectTitle } from 'ui/atoms'

export const StyledWrapper = styled.div`
    padding-top: 100px;

    ${ProjectTitle.styledComponent} {
        margin-bottom: 72px;
    }

    ${media.tablet} {
        padding-top: 60px;

        ${ProjectTitle.styledComponent} {
            margin-bottom: 60px;
        }
    }
`

export const StyledImage = styled.img.attrs({
    draggable: false,
})`
    max-width: 939px;
    margin: 0 auto;

    display: block;

    ${media.mobile} {
        max-width: 400px;
    }
`
