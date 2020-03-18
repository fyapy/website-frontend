import React, { FC, ComponentProps } from 'react'
import { Text } from 'ui/atoms'
import {
    StyledWrapper,
    StyledLine,
} from './style'

type ProjectTitleProps = ComponentProps<typeof Text>

export const ProjectTitle: FC<ProjectTitleProps> = ({ children, ...textProps }) => (
    <StyledWrapper data-name="project-title">
        <StyledLine />
        <Text color="white" size="44px" {...textProps}>
            {children}
        </Text>
    </StyledWrapper>
)

ProjectTitle.styledComponent = StyledWrapper
