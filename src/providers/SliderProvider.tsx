import React, { createContext, FC, useState } from 'react'
import { Noop, noop } from 'utils/functions'

interface SliderContextType {
    activeSlide: number
    setActiveSlide: Noop | ((slide: number) => void)
}

export const SliderContext = createContext<SliderContextType>({
    activeSlide: 0,
    setActiveSlide: noop,
})
export const SliderConsumer = SliderContext.Consumer

const SliderProvider: FC = ({ children }) => {
    const [activeSlide, setActiveSlide] = useState(0)

    return (
        <SliderContext.Provider
            value={{
                activeSlide,
                setActiveSlide,
            }}
        >
            {children}
        </SliderContext.Provider>
    )
}

export default SliderProvider
