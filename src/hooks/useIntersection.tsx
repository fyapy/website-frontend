import { useEffect } from 'react'
import { SectionRefs, SetActiveSection } from 'ui/templates/projects'
import { Section } from 'ui/theme'
import { isBrowser } from 'utils/selectors'

export const useIntersection = (section: Section, refs: SectionRefs, setActiveSection: SetActiveSection) => {
    useEffect(() => {
        const intersectionConfig = {
            rootMargin: `-${isBrowser && (
                window.innerHeight / 2 > 500
                    ? 500
                    : window.innerHeight / 2
            )}px`,
        }
        const handleIntersection: IntersectionObserverCallback = entries => entries[0].isIntersecting
            && setActiveSection(section)

        const observer = new IntersectionObserver(
            handleIntersection,
            intersectionConfig,
        )

        refs[section]?.current && observer.observe(refs[section].current as HTMLDivElement)

        return () => observer.disconnect()
    }, [])
}
