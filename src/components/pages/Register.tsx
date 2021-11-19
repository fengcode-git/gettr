import RegisterForm from '@/components/forms/RegisterForm'
import { useStore } from '@/store/StoreContext'
import { Alert, Box, Container, Typography } from '@mui/material'
import React from 'react'

const Message = () => {
    return (
        <Container maxWidth="sm">
            <Box display="flex" marginTop={5}>
                <Alert variant="filled" severity="warning" sx={{ paddingLeft: 5, paddingRight: 5 }}>您已登录，请勿重复注册</Alert>
            </Box>
        </Container>
    )
}

const Form = () => {
    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column" paddingTop={6}>
                <Typography variant="h5" sx={{ fontWeight: "600" }}>社区注册</Typography>
                <Typography marginTop={2} marginBottom={2}>创建用户账号</Typography>
                <RegisterForm />
            </Box>
        </Container>
    )
}

const Register = () => {
    const { state } = useStore()
    return state.login ? <Message></Message> : <Form></Form>
}
export default Register