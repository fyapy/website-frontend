import React, { FC } from 'react'
import { useTranslation } from 'i18n'
import { Url } from 'declarations/router'
import { Text, LinkButton } from 'ui/atoms'
import {
    StyledWrapper,
} from './style'

interface PreviewInfoProps {
    title: string
    link: Url
}

export const PreviewInfo: FC<PreviewInfoProps> = ({ title, link }) => {
    const { t } = useTranslation()

    return (
        <StyledWrapper>
            <Text size="68px" weight="bold" whiteSpace="nowrap">
                {title}
            </Text>
            <Text size="16px" data-content="development">
                {t('HOME_DEVELOPMENT')}
            </Text>
            <LinkButton
                href={link}
                as={`/projects/${(link as any).query.project}`}
            >
                {t('HOME_DISCOVER')}
            </LinkButton>
        </StyledWrapper>
    )
}

PreviewInfo.styledComponent = StyledWrapper
