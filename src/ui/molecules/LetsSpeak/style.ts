import styled from 'styled-components'
import { Icon, Text } from 'ui/atoms'
import { media, makeMedia } from 'ui/theme'

export const StyledWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    > ${Text} {
        margin-bottom: 20px;
    }
    ${Icon.styledComponent} {
        margin-right: 38px;
    }

    ${media.tablet} {
        > ${Text} {
            margin-bottom: 12px;

            font-size: 28px;
        }
        [data-content='speak'] {
            font-size: 30px;
        }
        ${Icon.styledComponent} {
            margin-right: 20px;
        }
    }
    ${makeMedia(null, 360)} {
        > ${Text} {
            font-size: 8vw;
        }
    }
`

export const StyledLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform .4s ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`
