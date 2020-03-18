import { useContext } from 'react'
import { NavbarContext } from 'providers'

export const useNavbar = () => useContext(NavbarContext)
