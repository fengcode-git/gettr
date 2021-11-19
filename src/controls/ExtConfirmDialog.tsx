import { Box, Button, Dialog, DialogActions, DialogContent, Typography } from '@mui/material'
import React from 'react'

interface Props {
    title?: string,
    subTitle?: string,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    onClickOk: () => void
}

const ExtConfirmDialog = (props: Props) => {
    const handleClickCancel = () => {
        props.setOpen(false)
    }
    return (
        <Dialog open={props.open} >
             <DialogContent>
                <Box padding={2}>
                    <Typography variant="h6">{props.title}</Typography>
                    <Typography variant="subtitle2"> {props.subTitle} </Typography>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant="contained" onClick={props.onClickOk}>确 认</Button>
                <Button variant="contained" onClick={handleClickCancel}>取 消</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ExtConfirmDialog
