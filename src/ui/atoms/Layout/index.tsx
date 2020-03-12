import styled, { css } from 'styled-components'

const defaultProps = {
    wrap: 'nowrap' as 'wrap' | 'nowrap',
    padding: '0',
    margin: '0',
    width: '',
    height: '',
    'data-name': 'layout',
    grow: '',
}

type DefaultProps = Readonly<typeof defaultProps>

type LayoutProps = {
    flow: 'column' | 'row' | 'column-reverse'
    wrap?: 'wrap' | 'nowrap'
    padding?: string
    margin?: string
    justify?:
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'stretch'
    align?:
        | 'center'
        | 'flex-start'
        | 'flex-end'
        | 'space-between'
        | 'space-around'
        | 'stretch'
    width?: string
    height?: string
    shrink?: string
    'data-name'?: string
    grow?: string
} & Partial<DefaultProps>

export const Layout = styled.div<LayoutProps>`
    padding: ${p => `${p.padding}`};
    margin: ${p => `${p.margin}`};

    display: flex;
    flex-direction: ${p => p.flow};
    flex-wrap: ${p => p.wrap};

    ${p => p.width && css`
        width: ${p.width};
    `};
    ${p => p.height && css`
        height: ${p.height};
    `};
    ${p => p.justify && css`
        justify-content: ${p.justify};
    `};
    ${p => p.align && css`
        align-items: ${p.align};
    `};
    ${p => p.shrink && css`
        & > * + * {
            flex-shrink: ${p.shrink};
        }
    `};
    ${p => p.grow && css`
        flex-grow: ${p.grow};
    `};
`

Layout.defaultProps = defaultProps
