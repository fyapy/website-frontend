export const color = {
    primary: '#FFA500',

    text: '#232323',

    white: '#FFF',
    red: '#f23958',
    green: '#019846',

    gray: '#29292B',
    black: '#0D0D0E',

    backgroundGray: '#1B1B1C',
    backgroundWhiteOpacity: 'rgba(255, 255, 255, .8)',
}

export type Color = keyof typeof color
export type WhiteSpace = 'pre-wrap' | 'initial' | 'pre' | 'nowrap' | 'pre-line' | 'normal'
export type Weight = 'bolder' | 'bold' | 'semibold' | 'medium' | 'normal' | 'light'

export const selectWeight = (type: Weight) => {
    switch (type) {
        case 'bolder': {
            return {
                weight: 800,
            }
        }
        case 'bold': {
            return {
                weight: 700,
            }
        }
        case 'semibold': {
            return {
                weight: 600,
            }
        }
        case 'medium': {
            return {
                weight: 500,
            }
        }
        case 'normal': {
            return {
                weight: 400,
            }
        }
        case 'light': {
            return {
                weight: 300,
            }
        }
    }
}


export const screenSizes = {
    mobile: 768,
    tablet: 1024,
    laptop: 1200,
    computer: 1440,
    desktop: 1920,
}

export const makeMedia = (from: null | number, to: null | number = null) =>
    `@media screen${from ? ` and (min-width: ${from}px)` : ''}
    ${to ? ` and (max-width: ${to - 1}px)` : ''}`

export const media = {
    mobile: makeMedia(null, screenSizes.mobile),
    tablet: makeMedia(null, screenSizes.tablet),
    laptop: makeMedia(null, screenSizes.laptop),
    computer: makeMedia(null, screenSizes.computer),
    desktop: makeMedia(null, screenSizes.desktop),
    largescreen: makeMedia(screenSizes.desktop),
    tabletOnly: makeMedia(screenSizes.mobile, screenSizes.tablet),
    computerOnly: makeMedia(screenSizes.tablet, screenSizes.computer),
    desktopOnly: makeMedia(screenSizes.computer, screenSizes.desktop),
    aboveMobile: makeMedia(screenSizes.mobile),
    aboveTablet: makeMedia(screenSizes.tablet),
    aboveComputer: makeMedia(screenSizes.computer),
}

export type Section = 'business' | 'work-process' | 'architecture' | 'design' | 'technology'

export const getNavbarSection = (section: Section) => {
    switch (section) {
        case 'business':
            return 'PROJECTS_HEAD_BENEFITS'
        case 'work-process':
            return 'PROJECTS_HEAD_WORK_PROCESS'
        case 'architecture':
            return 'PROJECTS_HEAD_ARCHITECTURE'
        case 'design':
            return 'PROJECTS_HEAD_DESIGN'
        case 'technology':
            return 'PROJECTS_HEAD_TECHNOLOGIES'
        default:
            return 'PROJECTS_HEAD_BENEFITS'
    }
}
