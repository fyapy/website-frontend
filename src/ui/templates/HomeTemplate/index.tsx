import React, {
    useEffect,
    useCallback,
    useRef,
    RefObject,
} from 'react'
import Slider from 'react-slick'
import {
    StyledSlider,
    StyledSlide,
} from './style'

const HomeTemplate = () => {
    const slider: RefObject<Slider> | null = useRef(null)

    const handleWheel = useCallback((event: MouseWheelEvent) => {
        if (event.deltaY > 0) {
            slider.current?.slickNext()
        } else {
            slider.current?.slickPrev()
        }
    }, [slider])

    useEffect(() => {
        window.addEventListener('wheel', handleWheel)

        return () => window.addEventListener('wheel', handleWheel)
    }, [handleWheel])

    return (
        <StyledSlider ref={slider}>
            <StyledSlide>1</StyledSlide>
            <StyledSlide>2</StyledSlide>
            <StyledSlide>3</StyledSlide>
            <StyledSlide>Telegram</StyledSlide>
        </StyledSlider>
    )
}

export default HomeTemplate
