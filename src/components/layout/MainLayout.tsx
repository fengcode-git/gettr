import React from 'react'
import Grid from '@mui/material/Grid';
import PageWrapper from '@/components/layout/PageWrapper';
import Navbar from '@/components/parts/nav/Navbar';
import { Container } from '@mui/material';
import Sidebar from '@/components/parts/sidebar/Sidebar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <PageWrapper>
            <Grid item sx={{ backgroundColor: 'white' }}>
                <Navbar></Navbar>
            </Grid>
            <Container maxWidth="lg" sx={{marginTop:"15px"}}>
                <Grid container spacing={2} alignItems="flex-start">
                    <Grid container item md={3}>
                        <Sidebar></Sidebar>
                    </Grid>
                    <Grid container item md={6}>
                        {children}
                    </Grid>
                    <Grid item md={3}>
                        <p>新闻</p>
                    </Grid>
                </Grid>
            </Container>
        </PageWrapper>
    )
}
export default MainLayout