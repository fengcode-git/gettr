import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup'
import Paths from '@/libs/client/utils/Paths'
import { login } from '@/libs/client/api/account.api'
import ExtLink from '@/controls/ExtLink'
import ExtInput from '@/controls/ExtInput'
import ExtButton from '@/controls/ExtButton'
import { useStore } from '@/store/StoreContext'
import Router from 'next/router'
import { Alert, Typography } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'

const validationSchema = yup.object({
    username: yup.string().matches(/^[a-zA-Z]+/, '账号必须以字母开头').matches(/^[a-zA-Z]\w{2,9}$/, "账号为3~10位的字符（数字、字母、下划线）").required('请输入账号'),
    password: yup.string().matches(/^[a-zA-Z0-9]{3,15}$/, "密码为3~15位的字符（数字、字母）").required('请输入密码')
})

const LoginForm = () => {
    const [loading, setLoading] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState('')
    const { dispatch } = useStore()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true)
                let result = await login(values.username, values.password)
                dispatch({ type: 'login', id: result.id, nickname: result.nickname })
                Router.replace("/")
            } catch (error: any) {
                setError(error.message)
                setOpen(true)
            } finally {
                setLoading(false)
            }
        }
    })

    return (
        <Grid item xs={12}>
            <form onSubmit={formik.handleSubmit} autoComplete="off">
                <Grid item xs={12}>
                    <ExtInput name="username" label="账号名称" formik={formik} autoFocus={true} />
                    <ExtInput name="password" label="登录密码" formik={formik} type="password" />
                    <Collapse in={open}>
                        <Alert variant="outlined" severity="warning" sx={{ marginTop: 2 }}
                            action={<IconButton size="small" onClick={() => { setOpen(false) }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>} >{error}</Alert>
                    </Collapse>
                </Grid>
                <Grid item xs={12}>
                    <Box marginTop={10}>
                        <ExtButton isLoading={loading} type="submit" color="primary" sx={{ backgroundColor: "#232255", height: "50px", borderRadius: "25px" }} startIcon={null} fullWidth size="large" variant="contained">登 录</ExtButton>
                    </Box>
                </Grid>
                <Grid item xs={12} paddingTop={3} container justifyContent="center" alignItems="center" >
                    <Typography sx={{ marginRight: 3, display: 'inline' }}>还没有账户?</Typography>
                    <ExtLink href={Paths.ACCOUNT_REGISTER}>创建账号</ExtLink>
                </Grid>
            </form>
        </Grid>
    )
}

export default LoginForm