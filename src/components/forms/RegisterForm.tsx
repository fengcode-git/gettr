import { Grid, Box, Link, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography, Alert } from '@mui/material';
import React from 'react'
import ExtInput from '../../controls/ExtInput';
import { useFormik } from "formik";
import * as yup from "yup";
import ExtButton from '../../controls/ExtButton';
import { register } from '@/libs/client/api/account.api';
import ExtLink from '@/controls/ExtLink';
import Paths from '@/libs/client/utils/Paths';
import Router from 'next/router'

const validationSchema = yup.object({
    username: yup.string().matches(/^[a-zA-Z]+/, '账号必须以字母开头').matches(/^[a-zA-Z]\w{3,10}$/, "账号为3~10位的字符（数字、字母、下划线）").required('请输入账号'),
    password: yup.string().matches(/^[a-zA-Z0-9]{3,15}$/, "密码为3~15位的字符（数字、字母）").required('请输入密码'),
    repeatPassword: yup.string().oneOf([yup.ref('password'), ""], '两次输入的密码不匹配')
})

const RegisterForm = () => {
    const [loading, setLoading] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState('')
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            repeatPassword: ''
        },
        onSubmit: async (values) => {
            setLoading(true)
            try {
                await register(values.username, values.password)
                formik.resetForm()
                setOpen(true)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        },
        validationSchema: validationSchema
    })
    const handleClose = () => {
        setOpen(false)
        Router.replace(Paths.ACCOUNT_LOGIN)
    }

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Grid item xs={12}>
                        <ExtInput label="账号名称" formik={formik} name="username" autoFocus={true} />
                        <ExtInput label="登录密码" formik={formik} name="password" type="password" />
                        <ExtInput label="重新输入密码" formik={formik} name="repeatPassword" type="password" />
                    </Grid>
                    <Grid item xs={12}>
                        <Box marginTop={10}>
                            <ExtButton isLoading={loading} type="submit" sx={{ backgroundColor: "#232255", height: "50px", borderRadius: "25px" }} startIcon={null} fullWidth size="large" variant="contained">注 册</ExtButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        {error && <Alert variant="outlined" severity="warning" sx={{ marginTop: 2 }}>{error}</Alert>}
                    </Grid>
                    <Grid item xs={12}>
                        <Box marginTop={2} display="flex" justifyContent="center">
                            <Typography sx={{ display: 'inline', marginRight: 2 }}>已经拥有账号？</Typography>
                            <ExtLink href={Paths.ACCOUNT_LOGIN}>登录已有账号</ExtLink>
                        </Box>
                    </Grid>
                </form>
            </Grid>
            <Dialog open={open}>
                <DialogTitle>提示</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        注册成功，欢迎来到社区，现在即可登录
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={handleClose}>确 定</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default RegisterForm
