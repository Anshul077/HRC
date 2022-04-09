import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { createContext } from 'react'
import { CssBaseline } from '@material-ui/core'
import React from 'react'


const TemplateContext=createContext(null)
const TemplateProvider = ({children}) => {

    const themeCustom = createTheme({
        overrides: {
            MuiDialog: {
                paperWidthSm: {
                    maxWidth: 'unset'
                }
            },
            MuiDialogContent: {
                root: {
                    padding: 0,
                    '&:first-child': {
                        paddingTop: 10
                    }
                }
            },
            MuiTableCell: {
                root: {
                    borderBottom: 0
                }
            },
        }
    });

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={themeCustom}>
                <CssBaseline/>
                {children}
            </ThemeProvider>
            
        </TemplateContext.Provider>
    )
}

export default TemplateProvider
