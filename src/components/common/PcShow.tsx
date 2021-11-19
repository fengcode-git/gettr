import { Hidden } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const PcShow = (props: Props) => {
    return (
        <Hidden smDown>
            {props.children}
        </Hidden>
    )
}

export default PcShow
