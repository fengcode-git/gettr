import { Alert, AlertColor, Slide, Snackbar, SnackbarCloseReason } from '@mui/material';
import React from 'react'

export interface IExtMessageProps {
    message: string,
    color: AlertColor,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function SlideTransition(props: any) {
    return <Slide {...props} direction="down" />;
}

const ExtMessage = (props: IExtMessageProps) => {
    const handleClose = (event: React.SyntheticEvent<any>, reason: SnackbarCloseReason) => {
        if (reason === 'clickaway') {
            return;
        }
        props.setOpen(false)
    }

    return (
        <Snackbar
            open={props.open}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={handleClose}
            TransitionComponent={SlideTransition}
        >
            <Alert severity={props.color} variant="filled">{props.message}</Alert>
        </Snackbar>
    )
}

export default ExtMessage