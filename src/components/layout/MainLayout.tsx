import React from 'react'
import Grid from '@mui/material/Grid';
import PageWrapper from '@/components/layout/PageWrapper';
import Navbar from '@/components/parts/nav/Navbar';
import { Container } from '@mui/material';
import Sidebar from '@/components/parts/sidebar/Sidebar';
import NewsList from '@/components/news/NewsList';
import StickyBox from '@/components/common/StickyBox';


const MainLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <React.Fragment>
            <StickyBox style={{ top: 0 }}>
                <Navbar></Navbar>
            </StickyBox>
            <PageWrapper>
                <Grid item sx={{ backgroundColor: 'white' }}>
                </Grid>
                <Container maxWidth="lg" sx={{ marginTop: "15px" }}>
                    <Grid container spacing={2}>
                        <Grid container item md={3} alignItems="flex-start">
                            <StickyBox style={{ top: "80px" }}>
                                <Sidebar></Sidebar>
                            </StickyBox>
                        </Grid>
                        <Grid container item md={6}>
                            {children}
                        </Grid>
                        <Grid item md={3} alignItems="flex-start">
                            <StickyBox style={{ top: "80px" }}>
                                <NewsList></NewsList>
                            </StickyBox>
                        </Grid>
                    </Grid>
                </Container>
            </PageWrapper>
        </React.Fragment>

    )
}
export default MainLayout