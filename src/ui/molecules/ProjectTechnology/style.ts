import styled from 'styled-components'
import { ProjectTitle, Layout, Text } from 'ui/atoms'
import { LetsSpeak } from 'ui/molecules'
import { color, media } from 'ui/theme'

export const StyledWrapper = styled.div`
    min-height: 828px;
    padding-top: 100px;

    
    ${ProjectTitle.styledComponent} {
        margin-bottom: 72px;

        &:not(:first-of-type) {
            margin-top: 100px;
        }
    }
    ${LetsSpeak.styledComponent} {
        margin: 265px 0 290px;
    }

    ${media.tablet} {
        padding-top: 60px;

        ${ProjectTitle.styledComponent} {
            margin-bottom: 32px;

            &:not(:first-of-type) {
                margin: 60px 0 32px;
            }
        }
    }
`

export const StyledList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 100px;

    ${media.tablet} {
        grid-template-columns: 1fr;
        grid-gap: initial;
    }
`

export const StyledTechnologies = styled(Layout).attrs({
    flow: 'column',
})`
    position: relative;

    &:before {
        content: '';
        position: absolute;
        right: 0;
        left: 0;

        height: 1px;

        background-color: ${color.primary};
    }

    ${media.tablet} {
        &:not(:first-child):before {
            display: none;
        }
    }
`

export const StyledTechnology = styled(Text).attrs({
    size: '44px',
})`
    margin-top: 44px;

    ${media.tablet} {
        margin-top: 32px;

        font-size: 28px;
    }
`

export const StyledProject = styled.a`
    padding: 36px 0 32px;

    display: flex;
    flex-flow: column;
    align-items: center;

    background-color: ${color.text};

    > img {
        height: 48px;
    }
    > ${Text} {
        margin-top: 10px;
    }

    ${media.mobile} {
        > img {
            max-width: calc(100% - 20px);
        }
    }
`
