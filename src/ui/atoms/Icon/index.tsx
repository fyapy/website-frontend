import React, { FC } from 'react'
import { color, Color } from 'ui/theme'
import styled from 'styled-components'
import { Noop } from 'utils/functions'

interface IconProps {
    name: string
    fill?: Color
    stroke?: Color
    strokeWidth?: number | string
    transform?: string
    width?: string
    height?: string
    onClick?: Noop
}

const StyledWrapper = styled.svg``

export const Icon: FC<IconProps> = ({ name, fill, stroke, strokeWidth, transform, ...props }) => (
    <StyledWrapper data-name="icon" {...props}>
        <use
            {...(fill ? { fill: color[fill] || fill } : {})}
            {...(stroke ? { stroke: color[stroke] || stroke } : {})}
            {...(strokeWidth ? { strokeWidth } : {})}
            {...(transform ? { transform } : {})}
            xlinkHref={`#${name}`}
        />
    </StyledWrapper>
)

Icon.styledComponent = StyledWrapper

Icon.defaultProps = {
    fill: undefined,
    stroke: undefined,
    strokeWidth: undefined,
    transform: undefined,
}
