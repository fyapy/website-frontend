import React, { useEffect, useState, useCallback } from 'react'
import { noop } from 'utils/functions'
import { isBrowser } from 'utils/selectors'

export const computeIsMobile = () => isBrowser && window.matchMedia('(max-width: 768px)').matches
export const computeIsTablet = () => isBrowser && window.innerWidth > 768 && window.innerWidth < 1025
export const computeIsLaptop = () => isBrowser && window.innerWidth > 1024 && window.innerWidth < 1440

interface AdaptiveContextType {
    readonly isMobile: boolean
    readonly isTablet: boolean
    readonly isAboveTablet: boolean
    readonly isLaptop: boolean
    readonly addResizeListener: Function
    readonly removeResizeListener: Function
}

export const AdaptiveContext = React.createContext<AdaptiveContextType>({
    isMobile: false,
    isTablet: false,
    isAboveTablet: false,
    isLaptop: false,
    addResizeListener: noop,
    removeResizeListener: noop,
})
export const AdaptiveConsumer = AdaptiveContext.Consumer

const listeners: Function[] = []

interface AdaptiveProviderProps {
  children: React.ReactNode
}

const AdaptiveProvider: React.FC<AdaptiveProviderProps> = ({ children }) => {
    const [isMobile, setIsMobile] = useState(computeIsMobile())
    const [isTablet, setIsTablet] = useState(computeIsTablet())
    const [isLaptop, setIsLaptop] = useState(computeIsLaptop())

    const setValues = useCallback(
        event => {
            setIsTablet(computeIsTablet())
            setIsMobile(computeIsMobile())
            setIsLaptop(computeIsLaptop())
            listeners.forEach(
                listener => typeof listener === 'function' && listener(event),
            )
        },
        [setIsMobile, setIsTablet, setIsLaptop],
    )
    const addResizeListener = useCallback(listener => {
        listeners.push(listener)
    }, [])
    const removeResizeListener = useCallback(listener => {
        const index = listeners.indexOf(listener)
        index !== -1 && listeners.splice(index, 1)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', setValues)
        return () => {
            window.removeEventListener('resize', setValues)
        }
    }, [setValues])

    return (
        <AdaptiveContext.Provider
            value={{
                isMobile,
                isTablet,
                isAboveTablet: !isMobile && !isTablet,
                isLaptop,
                addResizeListener,
                removeResizeListener,
            }}
        >
            {children}
        </AdaptiveContext.Provider>
    )
}

AdaptiveProvider.defaultProps = {
    children: null,
}

export default AdaptiveProvider
