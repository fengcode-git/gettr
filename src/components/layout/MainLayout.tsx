import React from 'react'
import Grid from '@mui/material/Grid';
import Navbar from '@/components/parts/nav/navbar';

const MainLayout = ({children}:{children:React.ReactNode})=>{
    return (
        <Grid container direction="column">
            <Grid item>
                <Navbar></Navbar>
            </Grid>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    )
}
export default MainLayout