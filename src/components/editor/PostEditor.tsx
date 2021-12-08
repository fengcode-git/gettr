import TextEditor from '@/components/editor/TextEditor'
import React from 'react'
import { Box } from '@mui/material'
import EditorProvider from '@/components/editor/EditorProvider'
import PostButtons from '@/components/editor/PostButtons'
import ImageList from '@/components/editor/ImageList'
import OpenGraph from '@/components/editor/OpenGraph'
import { useStore } from '@/store/StoreContext'

interface Props {
}

const PostEditor = (props: Props) => {
    const { state } = useStore()
    if (!state.login) {
        return null
    } else {
        return (
            <EditorProvider>
                <Box width="100%" sx={{ backgroundColor: 'white', padding: '18px' }}>
                    <TextEditor></TextEditor>
                    <ImageList></ImageList>
                    <OpenGraph></OpenGraph>
                    <PostButtons></PostButtons>
                </Box>
            </EditorProvider>
        )
    }
}

export default PostEditor