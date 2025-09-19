import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#D2691E', // CVS Orange
            dark: '#B8571A',
            light: '#E6944A',
        },
        secondary: {
            main: '#4A90E2', // CVS Blue
            dark: '#357ABD',
            light: '#6BA3E8',
        },
        background: {
            default: '#ffffff',
            paper: '#f8f9fa',
        },
        text: {
            primary: '#333333',
            secondary: '#666666',
        },
    },
    typography: {
        fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
        h1: {
            fontFamily: '"Earth Orbiter Bold", "Montserrat", sans-serif',
        },
        h2: {
            fontFamily: '"Earth Orbiter Bold", "Montserrat", sans-serif',
        },
        h3: {
            fontFamily: '"Earth Orbiter Bold", "Montserrat", sans-serif',
        },
        h4: {
            fontFamily: '"Earth Orbiter Bold", "Montserrat", sans-serif',
        },
        button: {
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '25px',
                    fontWeight: 600,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#1a1a1a',
                    boxShadow: 'none',
                },
            },
        },
    },
});

export default theme;
