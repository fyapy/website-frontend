import { useContext } from 'react'
import { AdaptiveContext } from 'providers'

export const useMobile = () => useContext(AdaptiveContext)
