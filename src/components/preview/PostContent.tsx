import { PreviewContext } from '@/components/preview/PreviewContext'
import React from 'react'
import { Box } from '@mui/material'
import {styled} from '@mui/material/styles'

const StyledBox = styled('div')`
    & p{
        margin: 0;
    }
`

const PostContent = () => {
    const { post } = React.useContext(PreviewContext)
    return (
        <Box>
            <StyledBox dangerouslySetInnerHTML={{ __html: post.content }}></StyledBox>
        </Box>
    )
}

export default PostContent
