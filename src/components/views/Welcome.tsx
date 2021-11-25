import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Paths from '@/libs/client/utils/Paths';
import { useStore } from '@/store/StoreContext';
import { useNavigate } from 'react-router-dom';

const Image = styled("img")({
    maxWidth: '100px'
})

const LinkButton = styled('a')({
    width: "250px",
    height: "50px",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    fontsize: "16px",
    marginTop: "20px"
})

const Welcome = () => {
    const { dispatch } = useStore()
    const nav = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch({ type: 'setVisit', visit: true })
    }
    const handleLogin = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault()
        nav(Paths.ACCOUNT_LOGIN)
    }
    const handleRegister = (ev: React.MouseEvent<HTMLElement>) => {
        ev.preventDefault()
        nav(Paths.ACCOUNT_REGISTER)
    }
    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{ height: "100vh", display: "flex", }}>
                <Box display="flex" flexDirection="column" alignItems="center" height="100vh" width="100%" justifyContent="center">
                    <Image src="/logo.png"></Image>
                    <Typography sx={{ marginTop: "20px" }}>分享意见、见解、经验和观点的工具和平台</Typography>
                    <LinkButton sx={{ backgroundColor: '#CC0000', color: 'white' }} href="#" onClick={handleRegister}>创建账号</LinkButton>
                    <LinkButton sx={{ backgroundColor: 'white', color: '#3d3c7c', border: "1px solid #3d3c7c" }} href="#" onClick={handleLogin}>登录</LinkButton>
                    <LinkButton href="#" onClick={handleClick}>
                        <span>立即探索</span>
                        <ArrowRightAltIcon sx={{ marginLeft: "10px" }}></ArrowRightAltIcon>
                    </LinkButton>
                </Box>
            </Container>
        </React.Fragment>
    )
}
export default Welcome