import ExtLink from '@/controls/ExtLink'
import Paths from '@/libs/client/utils/Paths'
import IStoreState from '@/store/IStoreState'
import { useStore } from '@/store/StoreContext'
import { AppBar, Avatar, Chip, Toolbar, Link, Menu, MenuItem, ListItemIcon } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import Settings from '@mui/icons-material/Settings'
import Logout from '@mui/icons-material/Logout'

const UnknownAccount = () => {
    const nav = useNavigate()
    const handleClick = (ev: React.MouseEvent<HTMLElement>) => {
        nav(Paths.ACCOUNT_REGISTER)
    }
    return (
        <React.Fragment>
            <Box display="flex" alignItems="center">
                <ExtLink href={Paths.ACCOUNT_LOGIN} sx={{ fontWeight: 'bold', color: 'black' }}>登录</ExtLink>
                <Button variant="contained" onClick={handleClick} sx={{ backgroundColor: "#232255", marginLeft: "25px", padding: "8px 15px", borderRadius: "52px", "&:hover": { backgroundColor: "#3d3c7c" } }}>创建账号</Button>
            </Box>
        </React.Fragment>
    )
}

const UserAccount = ({ store }: { store: IStoreState }) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
    const open = Boolean(anchorEl);
    const { dispatch } = useStore()
    const nav = useNavigate()
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const handleLogout = () => {
        nav('/',{ replace: true })
        dispatch({type: "logout"})
        handleClose()
    }
    const avatar = <Avatar src={Paths.DEFAULT_AVATAR}></Avatar>
    return (
        <React.Fragment>
            <Chip avatar={avatar} label={store.nickname} onClick={handleClick}></Chip>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                    style: {
                        width: '150px'
                    },
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '& .MuiMenuItem-root': {
                            height: '50px'
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Settings></Settings>
                    </ListItemIcon>
                    设置
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                        <Logout></Logout>
                    </ListItemIcon>
                    登出
                </MenuItem>
            </Menu>
        </React.Fragment>
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