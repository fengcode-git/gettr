import NextLink from 'next/link'
import { Grid, Link as MuiLink, Box } from '@mui/material'
import React from 'react'

const ExtLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    return (
        <NextLink href={href} passHref>
            <MuiLink>
                {children}
            </MuiLink>
        </NextLink>
    )
}
export default ExtLink