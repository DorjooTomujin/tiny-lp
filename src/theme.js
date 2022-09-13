import {extendTheme} from '@chakra-ui/react'
const fonts = { mono: `'Menlo', monospace`}

const breakpoints = {
    sm: '480px',
    md: '767px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1375px',
}

const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            body: {
                color: '#313131',
            }
        }
    }, 
    colors: {
        pink: {
            main: '#EF518B'
        },
        purple: {
            main: '#7851A2',
            primary: '#51126C'
        },
        green: {
            main: '#55C595'
        },
        black: {
            main: '#1c1d28'
        },
        gray: {
            main: '#525560'
        }
    }
})

export default theme