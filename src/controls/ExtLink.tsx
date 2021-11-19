import { Link as MuiLink } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
import { SxProps } from '@mui/system';

const ExtLink = ({ href, children,sx }: { href: string, children: React.ReactNode,sx?:SxProps}) => {
    const nav = useNavigate()
    const handleClick = (ev:React.MouseEvent<HTMLElement>)=>{
        ev.preventDefault()
        nav(href)
    }
    return (
        <MuiLink onClick={handleClick} href="#" underline="hover" sx={sx}>
            {children}
        </MuiLink>
    )
}
export default ExtLink