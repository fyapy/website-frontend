import React, { createContext, useState, FC } from 'react'
import { Noop, noop } from 'utils/functions'

interface NavbarContextProps {
    isHide: boolean
    setHide: Noop | ((value: boolean) => void)
}

export const NavbarContext = createContext<NavbarContextProps>({
    isHide: false,
    setHide: noop,
})
export const NavbarConsumer = NavbarContext.Consumer

const NavbarProvider: FC = ({ children }) => {
    const [isHide, setHide] = useState(false)

    return (
        <NavbarContext.Provider
            value={{
                isHide,
                setHide,
            }}
        >
            {children}
        </NavbarContext.Provider>
    )
}

export default NavbarProvider
