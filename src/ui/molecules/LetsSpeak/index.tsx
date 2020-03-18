import React, { FC } from 'react'
import { useTranslation } from 'i18n'
import { Text, Icon } from 'ui/atoms'
import {
    StyledWrapper,
    StyledLink,
} from './style'

export const LetsSpeak: FC = () => {
    const { t } = useTranslation()

    return (
        <StyledWrapper>
            <Text
                size="68px"
                whiteSpace="pre-wrap"
                align="center"
            >
                {t('TELEGRAM_TITLE')}
            </Text>
            <StyledLink
                href={process.env.REACT_APP_TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Icon
                    name="telegram"
                    fill="primary"
                    width="62px"
                    height="81px"
                />
                <Text
                    color="primary"
                    size="40px"
                    weight="medium"
                    data-content="speak"
                >
                    Let&apos;s speak!
                </Text>
            </StyledLink>
        </StyledWrapper>
    )
}

LetsSpeak.styledComponent = StyledWrapper
