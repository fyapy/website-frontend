import React, { FC } from 'react'
import { useTranslation } from 'i18n'
import { Text } from 'ui/atoms'
import {
    StyledWrapper,
    StyledLink,
} from './style'

interface ProjectLinkProps {
    link: string
    linkText: string
}

export const ProjectLink: FC<ProjectLinkProps> = ({ link, linkText }) => {
    const { t } = useTranslation()

    return (
        <div>
            <StyledWrapper>
                <Text size="20px">{t('HOME_LINK')}</Text>
                <StyledLink
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Text
                        size="24px"
                        weight="bold"
                    >
                        {linkText}
                    </Text>
                </StyledLink>
            </StyledWrapper>
        </div>
    )
}
