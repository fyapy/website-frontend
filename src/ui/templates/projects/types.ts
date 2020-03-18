import { RefObject, Dispatch, SetStateAction } from 'react'
import { Section } from 'ui/theme'

export type SectionRefs = Record<string, RefObject<HTMLDivElement>>
export type SetActiveSection = Dispatch<SetStateAction<Section | null>>
