import { PreviewContext } from '@/components/preview/PreviewContext'
import React from 'react'
import { IconButton, Avatar } from "@mui/material"

const PersonAvatar = () => {
    const content = React.useContext(PreviewContext)
    return (
        <IconButton sx={{marginRight: "5px"}}>
            <Avatar src={content.post.avatar}></Avatar>
        </IconButton>
    )
}

export default PersonAvatar