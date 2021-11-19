import { Button, ButtonProps, CircularProgress } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Props {
    isLoading?: boolean
}

const ExtButton = ({ disabled, startIcon, children, isLoading = false, ...rest }: Props & ButtonProps) => {
    disabled = isLoading ? true : false
    startIcon = startIcon == null ? <CheckCircleOutlineIcon /> : startIcon
    startIcon = isLoading ? null : startIcon
    const progress = isLoading ? <CircularProgress sx={{ marginRight: 1 }} size={20} /> : null
    return (
        <Button disabled={disabled} startIcon={startIcon} {...rest}>
            {progress}
            {children}
        </Button>
    )
}

export default ExtButton