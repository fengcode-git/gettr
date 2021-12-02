import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

interface Props {

}

const CircularLoading = (props: Props) => {
    return (
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress></CircularProgress>
        </Box>
    )
}

export default CircularLoading