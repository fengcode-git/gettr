import { PreviewContext } from '@/components/preview/PreviewContext'
import React from 'react'
import { Box, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import StringHelper from '@/libs/common/utils/StringHelper'

const StyledNickname = styled('a')`
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin-right: 5px;
`

const StyledAccountName = styled('span')`
    color: "#5c7192";    
    margin-right: 5px;
`

const StyledDelimiter = styled('span')`
    color: #5c7192;
    font-size: 15px;
    margin-right: 5px;
`

const AccountBar = () => {
    const { post } = React.useContext(PreviewContext)
    return (
        <Box display="flex" alignItems="center">
            <StyledNickname href="#">{post.nickname}</StyledNickname>
            <StyledAccountName>@{post.account_name}</StyledAccountName>
            <StyledDelimiter>·</StyledDelimiter>
            <Typography>{StringHelper.getRelativeTimeMessage(StringHelper.parseDateWithString(post.create_time))}</Typography>
        </Box>
    )
}

export default AccountBar