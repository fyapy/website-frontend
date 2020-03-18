import styled, { css } from 'styled-components'
import { color } from 'ui/theme'
import { Icon } from '../Icon'

interface StyledWrapperProps {
    isRight?: boolean
}
export const StyledWrapper = styled.a<StyledWrapperProps>`
    min-width: 200px;
    height: 60px;
    padding: 0 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid ${color.text};

    transition: border-color .4s ease-in-out;

    ${Icon.styledComponent} {
        transition: transform .4s ease-in-out;
    }
    &:hover {
        border-color: ${color.primary};

        ${Icon.styledComponent} {
            transform: scale(1.2);
        }
    }
    ${({ isRight }) => isRight && css`
        flex-flow: row-reverse;
    `}
`
