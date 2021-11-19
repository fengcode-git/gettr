import ExtLink from '@/controls/ExtLink'
import Paths from '@/libs/client/utils/Paths'
import IStoreState from '@/store/IStoreState'
import { useStore } from '@/store/StoreContext'
import { AppBar, Avatar, Chip, Toolbar, Link } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'

const UnknownAccount = () => {
    const nav = useNavigate()
    const handleClick = (ev:React.MouseEvent<HTMLElement>) => {
        nav(Paths.ACCOUNT_REGISTER)
    }
    return (
        <React.Fragment>
            <Box display="flex" alignItems="center">
                <ExtLink href={Paths.ACCOUNT_LOGIN} sx={{ fontWeight: 'bold', color: 'black' }}>登录</ExtLink>
                <Button variant="contained" onClick={handleClick} sx={{ backgroundColor: "#232255", marginLeft: "25px",padding:"8px 15px",borderRadius:"52px","&:hover":{backgroundColor:"#3d3c7c"} }}>创建账号</Button>
            </Box>
        </React.Fragment>
    )
}

const UserAccount = ({ store }: { store: IStoreState }) => {
    const avatar = <Avatar src={Paths.DEFAULT_AVATAR}></Avatar>
    const handleClick = () => {

    }
    return (
        <Chip avatar={avatar} label={store.nickname} onClick={handleClick}></Chip>
    )
}

const UserBar = () => {
    const { state } = useStore()
    if (state.login) {
        return <UserAccount store={state}></UserAccount>
    } else {
        return <UnknownAccount></UnknownAccount>
    }
}
export default UserBar