import Paths from '@/libs/client/utils/Paths'
import IPersionInfo from '@/libs/common/interfaces/IPersionInfo'
import { ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import React from 'react'

interface Props {
    item: IPersionInfo
}

const UserInfo = (props: Props) => {
    const { item } = props
    return (
        <React.Fragment>
            <ListItemAvatar>
                <Avatar src={item.avatar ? item.avatar : Paths.DEFAULT_AVATAR}></Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.account_name} secondary={item.nickname}></ListItemText>
        </React.Fragment>
    )
}

export default UserInfo
