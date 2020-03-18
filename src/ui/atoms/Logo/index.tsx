import React, { FC } from 'react'
import { Icon } from 'ui/atoms'

interface LogoProps {
    width: string
    height: string
}

export const Logo: FC<LogoProps> = ({ width, height }) => (
    <Icon
        name="logo"
        fill="text"
        width={width}
        height={height}
        data-name="logo"
    />
)
