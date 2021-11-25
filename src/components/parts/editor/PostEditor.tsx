import TextEditor from '@/components/parts/editor/TextEditor'
import React from 'react'
import { Box, Grid } from '@mui/material'
import EditorProvider from '@/components/parts/editor/EditorProvider'


interface Props {

}

const PostEditor = (props: Props) => {
    return (
        <EditorProvider>
            <Box width="100%" sx={{ backgroundColor: 'white', padding: '18px' }}>
                <TextEditor></TextEditor>
            </Box>
        </EditorProvider>
    )
}

export default PostEditor
