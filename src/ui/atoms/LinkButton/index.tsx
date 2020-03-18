import React, { FC, ComponentProps, HTMLProps } from 'react'
import { Link } from 'i18n'
import { Url } from 'declarations/router'
import { Icon, Text } from 'ui/atoms'
import {
    StyledWrapper,
} from './style'

const defaultProps = {
    isRight: false,
}

type DefaultProps = Readonly<typeof defaultProps>

type LinkButtonProps = Omit<HTMLProps<HTMLAnchorElement>, 'ref' | 'as' | 'href'>
& {
    href: Url
    as?: string
    isRight?: boolean
    textProps?: ComponentProps<typeof Text>
    iconProps?: ComponentProps<typeof Icon>
} & Partial<DefaultProps>

export const LinkButton: FC<LinkButtonProps> = ({
    href,
    as,
    isRight,
    textProps,
    iconProps,
    children,
    ...rest
}) => (
    <Link href={href} as={as} passHref>
        <StyledWrapper isRight={isRight} {...rest}>
            <Text
                size="18px"
                weight="light"
                {...textProps}
            >
                {children}
            </Text>
            <Icon
                name="long-arrow"
                width="18px"
                height="8px"
                {...iconProps}
            />
        </StyledWrapper>
    </Link>
)

LinkButton.styledComponent = StyledWrapper

LinkButton.defaultProps = defaultProps
