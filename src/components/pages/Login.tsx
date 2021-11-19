import React from 'react'
import { Box, Container, Typography } from "@mui/material"
import LoginForm from '@/components/forms/LoginForm'
import { useStore } from '@/store/StoreContext'
import MuiAlert from '@mui/material/Alert'

const Message = () => {
    return (
        <Container maxWidth="sm">
            <Box display="flex" marginTop={5}>
                <MuiAlert variant="filled" severity="warning" sx={{ paddingLeft: 5, paddingRight: 5 }}>您已登录，请勿重复登录</MuiAlert>
            </Box>
        </Container>
    )
}
const Form = () => {
    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" paddingTop={6}>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>欢迎回到社区</Typography>
                <Typography marginTop={2} marginBottom={2}>登录到您的社区账户</Typography>
                <LoginForm />
            </Box>
        </Container>
    )
}

const Login = () => {
    const { state } = useStore()
    return state.login ? <Message></Message> : <Form></Form>
}

export default Login