import styled from 'styled-components'
import { color, media } from 'ui/theme'
import { Layout, Text } from 'ui/atoms'

export const StyledWrapper = styled.div`
    padding: 100px 0;

    background-color: ${color.backgroundGray};

    ${media.tablet} {
        padding: 60px 0;
    }
`

export const StyledList = styled.div`
    display: grid;
    grid-template: auto / repeat(3, 1fr);

    ${media.tablet} {
        grid-template: auto / repeat(2, 1fr);
    }
    ${media.mobile} {
        grid-template: auto / 1fr;
    }
`

export const StyledItem = styled(Layout).attrs({
    flow: 'column',
    margin: '75px 0 0 0',
    padding: '33px 0 0 0',
})`
    position: relative;
    max-width: 296px;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;

        width: 100%;
        height: 1px;

        background-color: ${color.primary};
    }
    > ${Text}:first-of-type {
        margin-bottom: 32px;
    }

    ${media.tablet} {
        padding-top: 31px;
        margin-top: 60px;

        > ${Text} {
            &:first-of-type {
                margin-bottom: 30px;

                font-size: 30px;
            }
            &:last-of-type {
                font-size: 18px;
            }
        }
    }
`
