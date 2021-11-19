import { Link as MuiLink } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const ExtLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const nav = useNavigate()
    const handleClick = (ev:React.MouseEvent<HTMLElement>)=>{
        ev.preventDefault()
        nav(href)
    }
    return (
        <MuiLink onClick={handleClick} href="#">
            {children}
        </MuiLink>
    )
}
export default ExtLink