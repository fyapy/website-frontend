import styled from 'styled-components'
import { PhoneSlider, LaptopSlider } from 'ui/molecules'
import { makeMedia, screenSizes, media } from 'ui/theme'

export const StyledWrapper = styled.div`
    margin: 14vh 5vw 0 0;

    display: grid;
    grid-template-areas:
        "LaptopSlider PreviewInfo"
        "ProjectLink PhoneSlider";

    ${LaptopSlider.styledComponent} {
        max-width: 63.3vw;
    }
    ${PhoneSlider.styledComponent} {
        max-width: 13.1vw;
        margin: -21.5vw 3.2vw 0 auto;

        ${makeMedia(screenSizes.laptop, 1624)} {
            margin-top: -17vw;
        }
        ${makeMedia(screenSizes.tablet, screenSizes.laptop)} {
            margin-top: -13vw;
        }
        ${media.tablet} {
            max-width: 20vw;
            margin: -32vw 10vw 0 auto;
        }
    }

    ${media.tablet} {
        margin: initial;

        grid-template-areas:
            "LaptopSlider" "PhoneSlider"
            "PreviewInfo" "ProjectLink";

        ${LaptopSlider.styledComponent} {
            max-width: 100vw;
        }
    }
`
