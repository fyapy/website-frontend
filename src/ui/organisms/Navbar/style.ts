import styled from 'styled-components'
import { Layout, Text, Icon } from 'ui/atoms'
import { color, media } from 'ui/theme'

export const StyledWrapper = styled(Layout).attrs({
    flow: 'row',
    justify: 'space-between',
    padding: '0 100px 0',
})`
    position: fixed;
    top: 0;
    z-index: 100;

    width: 100%;

    background-color: ${color.backgroundWhiteOpacity};

    transition: transform .4s ease-in-out;
    transform: translateY(0);
    
    &[data-hide='true'] {
        transform: translateY(-100%);
    }

    ${media.tablet} {
        padding: 0;
    }
`

export const StyledLogoWrapper = styled(Layout).attrs({
    flow: 'row',
    justify:  'space-between',
    align: 'center',
    width: '159px',
    padding: '3.3vh 0 0 0',
})`
    position: relative;

    [data-name='logo'] {
        position: absolute;
        
        transform: translateY(-50%);
    }
    ${Text} {
        cursor: pointer;
        user-select: none;
    }

    ${media.tablet} {
        width: 100%;
        padding-top: 8px;

        [data-name='logo'] {
            position: static;
            
            transform: none;
        }
        ${Text} {
            margin-right: auto;
            margin-left: 40px;

            font-size: 15px;
            transition: color .4s ease-in-out;

            &[data-active='true'] {
                color: ${color.primary};
            }
            &:first-child {
                margin: 0 40px 0 auto;
            }
            &:last-child {
                margin: 0 auto 0 40px;
            }
        }
    }
`


export const StyledText = styled(Text).attrs({
    size: '20px',
})`
    position: relative;

    padding-right: 40px;

    transition: color .4s ease-in-out;

    &[data-slide='true']:after {
        background-color: ${color.primary};
    }
    &[data-active='true'] {
        color: ${color.primary};
    }
    &:after {
        content: '';
        position: absolute;
        right: -22px;
        top: 12px;

        height: 2px;
        width: 47px;

        background-color: ${color.text};
        transform: rotate(-60deg);

        transition: background-color .4s ease-in-out;
    }
`

export const StyledMenu = styled.div`
    padding: 5.5vh 0 1vh;

    display: flex;
    justify-content: center;
    align-items: center;

    > a:not(:last-child) {
        margin-right: 39px;
    }
    ${Icon.styledComponent} {
        padding: 5px;

        cursor: pointer;
    }

    ${media.tablet} {
        position: fixed;
        bottom: 0;
        z-index: 100;

        width: 100%;
        height: 66px;
        padding: 0;

        align-items: initial;

        background-color: ${color.white};
        box-shadow: 0 -1px 4px ${color.shadowBlackLight};

        use {
            transition: fill .4s ease-in-out;
        }
        ${Text} {
            transition: color .4s ease-in-out;
        }
        ${Icon.styledComponent} {
            padding: 0;
        }
        > a {
            padding: 9px 0 11px;

            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-flow: column;

            &:not(:last-child) {
                margin-right: 0;
            }
        }
    }
`

export const StyledTelegram = styled.a`
    use {
        transition: fill .4s ease-in-out;
    }
`
