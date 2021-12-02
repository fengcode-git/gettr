import React from 'react'
import { Box, CircularProgress, List, ListItem, ListItemButton, ListItemAvatar, Avatar, ListItemText, TextField, IconButton, ListItemIcon } from '@mui/material'
import IPersionInfo from '@/libs/common/interfaces/IPersionInfo'
import Paths from '@/libs/client/utils/Paths'
import UserInfo from '@/components/parts/user/UserInfo'

interface Props {
    onSelected?: (item: IPersionInfo) => void
    items: Array<IPersionInfo>
    renderIcon?: (item: IPersionInfo) => React.ReactNode
}

const UserList = (props: Props) => {
    return (
        <List>
            {props.items.map(item => {
                return (
                    <ListItem key={item.id} divider={true}>
                        <UserInfo item={item}></UserInfo>
                        {props.renderIcon && <ListItemIcon>{props.renderIcon(item)}</ListItemIcon>}
                    </ListItem>
                )
            })}
        </List>
    )
}

export default UserList