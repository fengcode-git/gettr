import React from 'react'
import { Grid, Container } from '@mui/material'
interface Props {
    children: React.ReactNode
}

export const BodyContent = (props: Props) => {
    return (
        <Container maxWidth="lg">
            <Grid container>
                {props.children}
            </Grid>
        </Container>
    )
}
