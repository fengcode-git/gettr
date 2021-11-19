import { Box, Button, Container, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import NextLink from 'next/link'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Paths from '@/libs/client/utils/Paths';
import { useStore } from '@/store/StoreContext';

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
    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch({type: 'setVisit', visit: true})
    }
    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{ height: "100vh", display: "flex", }}>
                <Box display="flex" flexDirection="column" alignItems="center" height="100vh" width="100%" justifyContent="center">
                    <Image src="/logo.png"></Image>
                    <Typography sx={{ marginTop: "20px" }}>分享意见、见解、经验和观点的工具和平台</Typography>
                    <NextLink href={Paths.ACCOUNT_REGISTER}>
                        <LinkButton sx={{ backgroundColor: '#CC0000', color: 'white' }} href="#">创建账号</LinkButton>
                    </NextLink>
                    <NextLink href={Paths.ACCOUNT_LOGIN}>
                        <LinkButton sx={{ backgroundColor: 'white', color: '#3d3c7c', border: "1px solid #3d3c7c" }} href="#">登录</LinkButton>
                    </NextLink>
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