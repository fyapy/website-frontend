import styled, { css } from 'styled-components'
import {
    color as colors,
    selectWeight,
    Weight,
    Color,
    WhiteSpace,
} from 'ui/theme'

const defaultProps = {
    align: 'initial',
    size: '14px',
    color: 'text' as Color,
    weight: 'normal' as Weight,
    lineHeight: 'normal',
    whiteSpace: 'initial' as WhiteSpace,
    letterSpacing: 'initial',
    decoration: 'initial',
    'data-name': 'text',
}

type DefaultProps = Readonly<typeof defaultProps>

type TextProps = {
    align?: string
    size?: string
    color?: Color
    weight?: Weight
    lineHeight?: string
    whiteSpace?: WhiteSpace
    letterSpacing?: string
    transform?: string
    'data-name'?: string
    decoration?: string
} & Partial<DefaultProps>

export const Text = styled.span<TextProps>`
    line-height: ${p => p.lineHeight};
    font-size: ${({ size }) => size};
    color: ${({ color = 'text' }) => colors[color] ? colors[color] : color};
    letter-spacing: ${({ letterSpacing }) => letterSpacing};
    text-align: ${({ align }) => align};
    text-decoration: ${({ decoration }) => decoration};
    font-weight: ${({ weight = 'normal' }) => selectWeight(weight).weight};
    white-space: ${p => p.whiteSpace};

    ${({ transform }) => transform && css`
        text-transform: ${transform};
    `}
`

Text.defaultProps = defaultProps
