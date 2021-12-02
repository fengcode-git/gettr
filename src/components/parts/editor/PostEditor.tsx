import TextEditor from '@/components/parts/editor/TextEditor'
import React from 'react'
import { Box } from '@mui/material'
import EditorProvider from '@/components/parts/editor/EditorProvider'
import PostButtons from '@/components/parts/editor/PostButtons'
import ImageList from '@/components/parts/editor/ImageList'

interface Props {
}

const PostEditor = (props: Props) => {
    return (
        <EditorProvider>
            <Box width="100%" sx={{ backgroundColor: 'white', padding: '18px' }}>
                <TextEditor></TextEditor>
                <ImageList></ImageList>
                <PostButtons></PostButtons>
            </Box>
        </EditorProvider>
    )
}

export default PostEditor