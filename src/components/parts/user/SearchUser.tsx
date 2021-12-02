import UserInfo from '@/components/parts/user/UserInfo'
import IPersionInfo from '@/libs/common/interfaces/IPersionInfo'
import { Box, List, ListItem, ListItemButton, TextField } from '@mui/material'
import React from 'react'

interface Props {
    items: Array<IPersionInfo>,
    selectUser: (user: IPersionInfo) => void
}

const SearchUser = (props: Props) => {
    const [users, setUsers] = React.useState<Array<IPersionInfo>>([])
    const [value, setValue] = React.useState('')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = event.target.value
        let newUsers = props.items.filter(item => {
            return item.account_name.includes(newValue) || item.nickname.includes(newValue)
        })
        setUsers(newUsers)
        setValue(newValue)
    }
    return (
        <Box>
            <TextField variant="standard" value={value} onChange={handleChange}></TextField>
            <List>
                {users.map(user => {
                    return (
                        <ListItem key={user.id} onClick={() => { props.selectUser(user) }} divider={true}>
                            <ListItemButton>
                                <UserInfo item={user}></UserInfo>
                            </ListItemButton>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    )
}

export default SearchUser