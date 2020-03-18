import React, {
    useCallback,
    useRef,
    RefObject,
    useMemo,
} from 'react'
import Slider, { Settings } from 'react-slick'
import { useTranslation } from 'i18n'
import { useSlider, useListener, useMobile } from 'hooks'
import { LetsSpeak } from 'ui/molecules'
import { ProjectPreview } from 'ui/organisms'
import { isBrowser } from 'utils/selectors'
import {
    StyledSlider,
    StyledSlide,
    StyledTriangle,
    StyledPagination,
} from './style'

const HomeTemplate = () => {
    const { i18n } = useTranslation()
    const { isAboveTablet } = useMobile()
    const { activeSlide, setActiveSlide } = useSlider()
    const slider: RefObject<Slider> | null = useRef(null)

    const settings: Settings = useMemo(() => ({
        arrows: false,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        touchThreshold: 10,
        beforeChange: (_current, next) => setActiveSlide(next),
        afterChange: (current) => setActiveSlide(current),
        responsive: [
            {
                breakpoint: 1024,
                settings: 'unslick',
            },
        ],
    }), [])

    const handleWheel = useCallback((event: MouseWheelEvent) => {
        if (!isAboveTablet) return
        if (event.deltaY > 0) {
            slider.current?.slickNext()
        } else {
            slider.current?.slickPrev()
        }
    }, [slider, isAboveTablet])

    useListener({
        event: 'wheel',
        target: isBrowser ? { current: window } : null,
        listener: handleWheel,
    })

    return (
        <>
            <StyledSlider ref={slider} {...settings}>
                <StyledSlide>
                    <ProjectPreview
                        title="E-commerce"
                        previewLink={{
                            pathname: '/projects/[project]',
                            query: { project: 'e-commerce' },
                        }}
                        laptopImages={i18n.language === 'ru'
                            ? [
                                '/images/giflytime/screen-ru-1.png',
                                '/images/giflytime/screen-ru-2.png',
                                '/images/giflytime/screen-ru-3.png',
                                '/images/giflytime/screen-ru-4.png',
                                '/images/giflytime/screen-ru-5.png',
                                '/images/giflytime/screen-ru-6.png',
                            ] : [
                                '/images/giflytime/screen-en-1.png',
                                '/images/giflytime/screen-en-2.png',
                                '/images/giflytime/screen-en-3.png',
                                '/images/giflytime/screen-en-4.png',
                                '/images/giflytime/screen-en-5.png',
                                '/images/giflytime/screen-en-6.png',
                            ]}
                        phoneImages={i18n.language === 'ru'
                            ? [
                                '/images/giflytime/mobile-screen-ru-1.png',
                                '/images/giflytime/mobile-screen-ru-2.png',
                                '/images/giflytime/mobile-screen-ru-3.png',
                                '/images/giflytime/mobile-screen-ru-4.png',
                                '/images/giflytime/mobile-screen-ru-5.png',
                                '/images/giflytime/mobile-screen-ru-6.png',
                            ] : [
                                '/images/giflytime/mobile-screen-en-1.png',
                                '/images/giflytime/mobile-screen-en-2.png',
                                '/images/giflytime/mobile-screen-en-3.png',
                                '/images/giflytime/mobile-screen-en-4.png',
                                '/images/giflytime/mobile-screen-en-5.png',
                                '/images/giflytime/mobile-screen-en-6.png',
                            ]}
                        link="https://giflytime.codereader.ru"
                        linkText="GiflyTime.Com"
                    />
                </StyledSlide>
                <StyledSlide>
                    <ProjectPreview
                        title="Freelance"
                        previewLink={{
                            pathname: '/projects/[project]',
                            query: { project: 'freelance' },
                        }}
                        laptopImages={[
                            '/images/ghostwriting/screen-ru-1.png',
                            '/images/ghostwriting/screen-ru-2.png',
                            '/images/ghostwriting/screen-ru-3.png',
                            '/images/ghostwriting/screen-ru-4.png',
                            '/images/ghostwriting/screen-ru-5.png',
                            '/images/ghostwriting/screen-ru-6.png',
                            '/images/ghostwriting/screen-ru-7.png',
                        ]}
                        phoneImages={[
                            '/images/ghostwriting/mobile-screen-ru-1.png',
                            '/images/ghostwriting/mobile-screen-ru-2.png',
                            '/images/ghostwriting/mobile-screen-ru-3.png',
                            '/images/ghostwriting/mobile-screen-ru-4.png',
                            '/images/ghostwriting/mobile-screen-ru-5.png',
                            '/images/ghostwriting/mobile-screen-ru-6.png',
                            '/images/ghostwriting/mobile-screen-ru-7.png',
                        ]}
                        link="https://ghostwriting.online"
                        linkText="GhostWriting.Online"
                    />
                </StyledSlide>
                <StyledSlide>
                    <ProjectPreview
                        title="Mining"
                        previewLink={{
                            pathname: '/projects/[project]',
                            query: { project: 'mining' },
                        }}
                        laptopImages={[
                            '/images/mining/screen-ru-1.png',
                            '/images/mining/screen-ru-2.png',
                            '/images/mining/screen-ru-3.png',
                            '/images/mining/screen-ru-4.png',
                            '/images/mining/screen-ru-5.png',
                            '/images/mining/screen-ru-6.png',
                            '/images/mining/screen-ru-7.png',
                            '/images/mining/screen-ru-8.png',
                        ]}
                        phoneImages={[
                            '/images/mining/mobile-screen-ru-1.png',
                            '/images/mining/mobile-screen-ru-2.png',
                            '/images/mining/mobile-screen-ru-3.png',
                            '/images/mining/mobile-screen-ru-4.png',
                            '/images/mining/mobile-screen-ru-5.png',
                            '/images/mining/mobile-screen-ru-6.png',
                            '/images/mining/mobile-screen-ru-7.png',
                            '/images/mining/mobile-screen-ru-8.png',
                        ]}
                        link="https://coolpool.top"
                        linkText="CoolPool.Top"
                    />
                </StyledSlide>
                <StyledSlide>
                    <LetsSpeak />
                </StyledSlide>
            </StyledSlider>
            {isAboveTablet ? (
                <StyledPagination>
                    <StyledTriangle
                        isActive={activeSlide === 0}
                        onClick={() => slider.current?.slickGoTo(0)}
                    />
                    <StyledTriangle
                        isActive={activeSlide === 1}
                        onClick={() => slider.current?.slickGoTo(1)}
                    />
                    <StyledTriangle
                        isActive={activeSlide === 2}
                        onClick={() => slider.current?.slickGoTo(2)}
                    />
                    <StyledTriangle
                        isActive={activeSlide === 3}
                        onClick={() => slider.current?.slickGoTo(3)}
                    />
                </StyledPagination>
            ) : (
                <StyledPagination>
                    <StyledSlide>
                        <ProjectPreview
                            title="E-commerce"
                            previewLink={{
                                pathname: '/projects/[project]',
                                query: { project: 'e-commerce' },
                            }}
                            laptopImages={i18n.language === 'ru'
                                ? [
                                    '/images/giflytime/screen-ru-1.png',
                                    '/images/giflytime/screen-ru-2.png',
                                    '/images/giflytime/screen-ru-3.png',
                                    '/images/giflytime/screen-ru-4.png',
                                    '/images/giflytime/screen-ru-5.png',
                                    '/images/giflytime/screen-ru-6.png',
                                ] : [
                                    '/images/giflytime/screen-en-1.png',
                                    '/images/giflytime/screen-en-2.png',
                                    '/images/giflytime/screen-en-3.png',
                                    '/images/giflytime/screen-en-4.png',
                                    '/images/giflytime/screen-en-5.png',
                                    '/images/giflytime/screen-en-6.png',
                                ]}
                            phoneImages={i18n.language === 'ru'
                                ? [
                                    '/images/giflytime/mobile-screen-ru-1.png',
                                    '/images/giflytime/mobile-screen-ru-2.png',
                                    '/images/giflytime/mobile-screen-ru-3.png',
                                    '/images/giflytime/mobile-screen-ru-4.png',
                                    '/images/giflytime/mobile-screen-ru-5.png',
                                    '/images/giflytime/mobile-screen-ru-6.png',
                                ] : [
                                    '/images/giflytime/mobile-screen-en-1.png',
                                    '/images/giflytime/mobile-screen-en-2.png',
                                    '/images/giflytime/mobile-screen-en-3.png',
                                    '/images/giflytime/mobile-screen-en-4.png',
                                    '/images/giflytime/mobile-screen-en-5.png',
                                    '/images/giflytime/mobile-screen-en-6.png',
                                ]}
                            link="https://giflytime.codereader.ru"
                            linkText="GiflyTime.Com"
                        />
                    </StyledSlide>
                    <StyledSlide>
                        <ProjectPreview
                            title="Freelance"
                            previewLink={{
                                pathname: '/projects/[project]',
                                query: { project: 'freelance' },
                            }}
                            laptopImages={[
                                '/images/ghostwriting/screen-ru-1.png',
                                '/images/ghostwriting/screen-ru-2.png',
                                '/images/ghostwriting/screen-ru-3.png',
                                '/images/ghostwriting/screen-ru-4.png',
                                '/images/ghostwriting/screen-ru-5.png',
                                '/images/ghostwriting/screen-ru-6.png',
                                '/images/ghostwriting/screen-ru-7.png',
                            ]}
                            phoneImages={[
                                '/images/ghostwriting/mobile-screen-ru-1.png',
                                '/images/ghostwriting/mobile-screen-ru-2.png',
                                '/images/ghostwriting/mobile-screen-ru-3.png',
                                '/images/ghostwriting/mobile-screen-ru-4.png',
                                '/images/ghostwriting/mobile-screen-ru-5.png',
                                '/images/ghostwriting/mobile-screen-ru-6.png',
                                '/images/ghostwriting/mobile-screen-ru-7.png',
                            ]}
                            link="https://ghostwriting.online"
                            linkText="GhostWriting.Online"
                        />
                    </StyledSlide>
                    <StyledSlide>
                        <ProjectPreview
                            title="Mining"
                            previewLink={{
                                pathname: '/projects/[project]',
                                query: { project: 'mining' },
                            }}
                            laptopImages={[
                                '/images/mining/screen-ru-1.png',
                                '/images/mining/screen-ru-2.png',
                                '/images/mining/screen-ru-3.png',
                                '/images/mining/screen-ru-4.png',
                                '/images/mining/screen-ru-5.png',
                                '/images/mining/screen-ru-6.png',
                                '/images/mining/screen-ru-7.png',
                                '/images/mining/screen-ru-8.png',
                            ]}
                            phoneImages={[
                                '/images/mining/mobile-screen-ru-1.png',
                                '/images/mining/mobile-screen-ru-2.png',
                                '/images/mining/mobile-screen-ru-3.png',
                                '/images/mining/mobile-screen-ru-4.png',
                                '/images/mining/mobile-screen-ru-5.png',
                                '/images/mining/mobile-screen-ru-6.png',
                                '/images/mining/mobile-screen-ru-7.png',
                                '/images/mining/mobile-screen-ru-8.png',
                            ]}
                            link="https://coolpool.top"
                            linkText="CoolPool.Top"
                        />
                    </StyledSlide>
                    <StyledSlide>
                        <LetsSpeak />
                    </StyledSlide>
                </StyledPagination>
            )}
        </>
    )
}

export default HomeTemplate
