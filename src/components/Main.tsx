import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, CssBaseline } from '@mui/material';
import StoreProvider from '@/store/StoreProvider';
import { BrowserRouter } from 'react-router-dom'
import ToastProvider from '@/components/toast/ToastProvider';
import PageContent from '@/components/layout/PageContent';

const themeLight = createTheme()

const Main = () => {
    return (
        <React.Fragment>
            <CssBaseline></CssBaseline>
            <BrowserRouter>
                <ThemeProvider theme={themeLight}>
                    <StoreProvider>
                        <ToastProvider>
                            <PageContent></PageContent>
                        </ToastProvider>
                    </StoreProvider>
                </ThemeProvider>
            </BrowserRouter>
        </React.Fragment>
    )
}
export default Main