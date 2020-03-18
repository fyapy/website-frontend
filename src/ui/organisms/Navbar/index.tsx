import React, { FC, useCallback } from 'react'
import { useTranslation, Link } from 'i18n'
import { useSlider, useMobile, useNavbar } from 'hooks'
import { Logo, Icon, Text } from 'ui/atoms'
import {
    StyledWrapper,
    StyledLogoWrapper,
    StyledMenu,
    StyledText,
    StyledTelegram,
} from './style'
import { useRouter } from 'next/router'

export const Navbar: FC = () => {
    const { pathname, query } = useRouter()
    const { i18n } = useTranslation()
    const { activeSlide } = useSlider()
    const { isAboveTablet } = useMobile()
    const { isHide } = useNavbar()

    const handleLanguageChange = useCallback(() => i18n.changeLanguage(i18n.language === 'ru'
        ? 'en'
        : 'ru'), [i18n.language])

    return (
        <>
            <StyledWrapper data-hide={isHide}>
                <StyledLogoWrapper>
                    {!isAboveTablet && (
                        <Text
                            size="18px"
                            onClick={handleLanguageChange}
                            data-active={i18n.language === 'en'}
                        >
                            ENG
                        </Text>
                    )}
                    <Link href="/" passHref>
                        <a>
                            <Logo
                                width={isAboveTablet ? '64px' : '56px'}
                                height={isAboveTablet ? '80px' : '70px'}
                            />
                        </a>
                    </Link>
                    <Text
                        size="18px"
                        onClick={handleLanguageChange}
                        data-active={i18n.language === 'ru'}
                    >
                        {isAboveTablet
                            ? (i18n.language === 'ru' ? 'РУС' : 'ENG')
                            : 'РУС'}
                    </Text>
                </StyledLogoWrapper>
                {isAboveTablet && (
                    <StyledMenu>
                        <Link
                            href={{
                                pathname: '/projects/[project]',
                                query: { project: 'e-commerce' },
                            }}
                            as="/projects/e-commerce"
                            passHref
                        >
                            <a>
                                <StyledText
                                    data-slide={activeSlide === 0 && pathname === '/'}
                                    data-active={query.project === 'e-commerce'}
                                >
                                    E-commerce
                                </StyledText>
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname: '/projects/[project]',
                                query: { project: 'freelance' },
                            }}
                            as="/projects/freelance"
                            passHref
                        >
                            <a>
                                <StyledText
                                    data-slide={activeSlide === 1 && pathname === '/'}
                                    data-active={query.project === 'freelance'}
                                >
                                    Freelance
                                </StyledText>
                            </a>
                        </Link>
                        <Link
                            href={{
                                pathname: '/projects/[project]',
                                query: { project: 'mining' },
                            }}
                            as="/projects/mining"
                            passHref
                        >
                            <a>
                                <StyledText
                                    data-slide={activeSlide === 2 && pathname === '/'}
                                    data-active={query.project === 'mining'}
                                >
                                    Mining
                                </StyledText>
                            </a>
                        </Link>
                        <StyledTelegram
                            href={process.env.REACT_APP_TELEGRAM_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon
                                name="telegram"
                                fill={activeSlide === 3
                                    ? 'primary'
                                    : 'text'}
                                width="40px"
                                height="49px"
                            />
                        </StyledTelegram>
                    </StyledMenu>
                )}
            </StyledWrapper>

            {!isAboveTablet && (
                <StyledMenu>
                    <Link
                        href={{
                            pathname: '/projects/[project]',
                            query: { project: 'e-commerce' },
                        }}
                        as="/projects/e-commerce"
                        passHref
                    >
                        <a>
                            <Icon
                                name="shopping-cart"
                                width="27px"
                                height="24px"
                                fill={query.project === 'e-commerce'
                                    ? 'primary'
                                    : 'text'}
                            />
                            <Text
                                color={query.project === 'e-commerce'
                                    ? 'primary'
                                    : 'text'}
                                size="10px"
                            >
                                E-commerce
                            </Text>
                        </a>
                    </Link>
                    <Link
                        href={{
                            pathname: '/projects/[project]',
                            query: { project: 'freelance' },
                        }}
                        as="/projects/freelance"
                        passHref
                    >
                        <a>
                            <Icon
                                name="handshake"
                                width="30px"
                                height="24px"
                                fill={query.project === 'freelance'
                                    ? 'primary'
                                    : 'text'}
                            />
                            <Text
                                color={query.project === 'freelance'
                                    ? 'primary'
                                    : 'text'}
                                size="10px"
                            >
                                Freelance
                            </Text>
                        </a>
                    </Link>
                    <Link
                        href={{
                            pathname: '/projects/[project]',
                            query: { project: 'mining' },
                        }}
                        as="/projects/mining"
                        passHref
                    >
                        <a>
                            <Icon
                                name="ethereum"
                                width="15px"
                                height="28px"
                                fill={query.project === 'mining'
                                    ? 'primary'
                                    : 'text'}
                            />
                            <Text
                                color={query.project === 'mining'
                                    ? 'primary'
                                    : 'text'}
                                size="10px"
                            >
                                Mining
                            </Text>
                        </a>
                    </Link>
                    <StyledTelegram
                        href={process.env.REACT_APP_TELEGRAM_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon
                            name="telegram"
                            fill="text"
                            width="21px"
                            height="28px"
                        />
                        <Text
                            color="text"
                            size="10px"
                        >
                            Telegram
                        </Text>
                    </StyledTelegram>
                </StyledMenu>
            )}
        </>
    )
}
