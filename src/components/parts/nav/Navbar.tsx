import Logo from "@/components/parts/nav/Logo"
import SearchBar from "@/components/parts/nav/SearchBar"
import UserBar from "@/components/parts/nav/UserBar"
import { AppBar, Container, Toolbar, Box } from "@mui/material"
import React from 'react'

const Navbar = () => {
    return (
        <React.Fragment>
            <Box borderBottom="1px solid rgb(232, 233, 239)" sx={{backgroundColor:"white"}}>
                <Container maxWidth="lg">
                    <AppBar position="sticky" elevation={0} sx={{backgroundColor:"white"}}>
                        <Toolbar>
                            <Logo></Logo>
                            <Box display="flex" justifyContent="space-between" alignItems="center" flexGrow={1}>
                                <SearchBar></SearchBar>
                                <UserBar></UserBar>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Container>
            </Box>
        </React.Fragment>
    )
}
export default Navbar