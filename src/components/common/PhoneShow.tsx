import { Hidden } from '@mui/material'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const PhoneShow = (props: Props) => {
    return (
        <Hidden mdUp>
            {props.children}
        </Hidden>
    )
}

export default PhoneShow
