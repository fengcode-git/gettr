import React from 'react'
import { Button, Box, Grid, Divider, Chip, styled, SvgIcon } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'

const PenIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.16059 2.93818C5.16059 2.42004 5.58063 2 6.09877 2C6.61691 2 7.03695 2.42004 7.03695 2.93818V5.16623H9.26515C9.78329 5.16623 10.2033 5.58627 10.2033 6.10441C10.2033 6.62255 9.78329 7.04259 9.26515 7.04259H7.03695V9.27089C7.03695 9.78903 6.61691 10.2091 6.09877 10.2091C5.58063 10.2091 5.16059 9.78903 5.16059 9.27089V7.04259H2.93244C2.4143 7.04259 1.99426 6.62255 1.99426 6.10441C1.99426 5.58627 2.4143 5.16623 2.93244 5.16623H5.16059V2.93818ZM17.1294 5.19054L14.317 8.00288C15.323 9.68139 16.7396 11.0874 18.4397 12.0811L21.2298 9.291C21.9232 8.59766 22.2698 8.251 22.2698 7.82022C22.2698 7.38943 21.9232 7.04277 21.2298 6.34943L20.0709 5.19054C19.3776 4.49721 19.0309 4.15054 18.6002 4.15054C18.1694 4.15054 17.8227 4.49721 17.1294 5.19054ZM5.71899 16.6009L13.5608 8.75907C14.5987 10.413 16.0078 11.8122 17.6816 12.8393L9.81945 20.7014C9.59841 20.9224 9.4879 21.0329 9.35213 21.1056C9.21636 21.1783 9.0631 21.2089 8.75659 21.2702L4.63098 22.0953C4.45802 22.1299 4.37155 22.1472 4.32235 22.098C4.27315 22.0488 4.29045 21.9624 4.32504 21.7894L5.15016 17.6638L5.15016 17.6638C5.21146 17.3573 5.24212 17.204 5.31478 17.0682C5.38744 16.9325 5.49796 16.822 5.71899 16.6009Z" fill="white"></path></svg>
    )
}

const VisitIcon = () => {
    return (
        <path d="M12 2.918c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10a10 10 0 0 0-10-10zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm4.12-12.36a.49.49 0 0 0-.54-.11l-4.93 2a2 2 0 0 0-1.09 1.09l-2 4.93a.49.49 0 0 0 .11.54l.24.24a.49.49 0 0 0 .54.11l4.93-2a2 2 0 0 0 1.09-1.09l2-4.93a.49.49 0 0 0-.11-.54l-.24-.24z"></path>
    )
}

const StyleButton = styled('a')({
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    height: "58px",
    borderRadius: "29px",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    paddingLeft: "20px",
    marginTop: "10px",
    color: "#6e7187",
    width: "auto",
    "&:hover": {
        backgroundColor: "#E4E4E4"
    }
})

const PublicButton = () => {
    return (
        <Button sx={{
            backgroundColor: '#CC0000', width: '100%', fontWeight: "bold", fontSize: "1rem", color: 'white', borderRadius: '100px', height: "45px", ':hover': {
                backgroundColor: '#bd0a06 !important'
            }
        }}>
            <SvgIcon sx={{ fill: "red" }}>
                <PenIcon></PenIcon>
            </SvgIcon>
            <Box component="span" marginLeft={2}>创建帖子</Box>
        </Button>
    )
}

const VisitButton = () => {
    return (
        <StyleButton href="#" sx={{marginTop:"20px"}}>
            <SvgIcon>
                <VisitIcon></VisitIcon>
            </SvgIcon>
            <Box sx={{ fontWeight: "bold", fontSize: "1.2rem", marginLeft: '20px' }}>探索</Box>
        </StyleButton>
    )
}

const HelpButton = () => {
    return (
        <StyleButton href="#">
            <SvgIcon>
                <HelpIcon></HelpIcon>
            </SvgIcon>
            <Box sx={{ fontWeight: "bold", fontSize: "1.2rem", marginLeft: '20px' }}>帮助中心</Box>
        </StyleButton>
    )
}

const Sidebar = () => {
    return (
        <Grid container item flexDirection="column">
            <Grid item paddingY={4} paddingX={4} display="flex" flexDirection="column">
                <Box marginBottom={4}>
                    <PublicButton></PublicButton>
                </Box>
                <Divider></Divider>
                <VisitButton></VisitButton>
                <HelpButton></HelpButton>
            </Grid>
        </Grid>
    )
}
export default Sidebar