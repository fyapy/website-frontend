import { StyledComponent } from 'styled-components'

declare module 'react' {
    interface FunctionComponent {
        styledComponent?: StyledComponent<{}, {}>;
    }
}
