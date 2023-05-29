import './App.css';
import Home from './components/Home'
import { ThemeProvider, createTheme } from '@mui/material'


const theme = createTheme({
    palette: {
        primary: {
            main: '#47D7AC',
            contrastText: '#FFFFFF'
        },

    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    background: '#47D7AC',
                    borderRadius: '16px 0px 16px 0px',
                    "&:hover": {
                        background: '#606060',
                        color: '#47D7AC',
                        outline: '2px solid #47D7AC',
                    }
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    label: {
                        color: '#ffffff'
                    },
                    fieldset: {
                        borderColor: '#ffffff',
                    },
                    input: {
                        textTransform: 'capitalize',
                        color: '#ffffff'
                    },
                    "&:hover ": {
                        label: {
                            color: '#47D7AC'
                        },
                        fieldset: {
                            borderColor: '#47D7AC !important'
                        },
                        input: {
                            color: '#47D7AC'
                        }
                    },
                    "& .Mui-focused": {
                        input: {
                            color: '#47D7AC !important'
                        }
                    }
                },
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: '#606060',
                    color: '#47D7AC'
                }
            }
        },
        
    },
});


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Home></Home>
            </ThemeProvider>
        </div>
    );
}

export default App;
