import styled from 'styled-components'
import { ProjectTitle, Layout, LinkButton } from 'ui/atoms'
import { LaptopSlider, PhoneSlider } from 'ui/molecules'
import { media, color } from 'ui/theme'

export const StyledWrapper = styled.div`
    min-height: 960px;
    padding-top: 100px;

    ${ProjectTitle.styledComponent} {
        margin-bottom: 120px;
    }

    ${media.tablet} {
        padding-top: 60px;

        ${ProjectTitle.styledComponent} {
            margin-bottom: 40px;
        }
    }
`

interface StyledProgressProps {
    progress: number
}
export const StyledProgress = styled.div<StyledProgressProps>`
    height: 3px;
    max-width: 372px;
    width: calc(100% - 124px);
    margin: 20px auto 0;

    background-color: ${color.text};
    background-image: linear-gradient(to right, ${color.primary}, ${color.primary});
    background-repeat: no-repeat;
    background-size: ${({ progress }) => progress}% 100%;

    transition: background-size .4s ease-in-out;
`

export const StyledSlider = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    overflow: hidden;

    > ${StyledProgress}:not(:last-of-type) {
        margin-bottom: 36px;
    }
    ${LaptopSlider.styledComponent} {
        width: 64vw;

        transform: translateX(2vw);

        transition:
            opacity .4s ease-in-out,
            transform .4s ease-in-out;

        .slick-slider {
            height: 100%;
        }
    }
    ${PhoneSlider.styledComponent} {
        width: 14vw;

        transform: translateX(-100%);

        transition:
            opacity .4s ease-in-out,
            transform .4s ease-in-out;
    }

    ${media.aboveTablet} {
        &[data-slider='laptop'] {
            ${LaptopSlider.styledComponent} {
                transform: translateX(18vw);
            }
            ${PhoneSlider.styledComponent} {
                transform: translateX(20vw);
                opacity: 0;
            }
        }
        &[data-slider='mobile'] {
            ${LaptopSlider.styledComponent} {
                transform: translateX(-40vw);
                opacity: 0;
            }
            ${PhoneSlider.styledComponent} {
                transform: translateX(-43vw);
            }
        }
    }

    ${media.laptop} {
        ${LaptopSlider.styledComponent} {
            width: 74vw;
            height: 40vw;

            transform: translateX(0);
        }
        ${PhoneSlider.styledComponent} {
            width: 16vw;

            transform: translateX(-60%);
        }
    }
    ${media.tablet} {        
        flex-flow: column;

        ${LaptopSlider.styledComponent} {
            width: 100%;
            height: 380px;
            max-width: 700px;
        }
        ${PhoneSlider.styledComponent} {
            width: 100%;
            max-width: 277px;

            transform: translateX(0);
        }
    }
    ${media.mobile} {
        ${LaptopSlider.styledComponent} {
            height: 230px;
            max-width: 422px;
        }
    }
`

export const StyledButtonGroup = styled(Layout).attrs({
    flow: 'row',
    justify: 'center',
})`
    ${LinkButton.styledComponent} {
        margin: 0 20px;
    }

    ${media.tablet} {
        display: none;
    }
`
