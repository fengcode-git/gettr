import React from 'react'
import { Box } from '@mui/material'
import PostView from '@/libs/common/entity/PostView'
import PostPreview from '@/components/preview/PostPreview'
import { getAllPostViews } from '@/libs/client/api/post.api'
import useToast from '@/components/toast/useToast'

const PostList = () => {
    const [items, setItems] = React.useState<Array<PostView>>([])
    const { showError } = useToast()
    React.useEffect(() => {
        getAllPostViews().then(result => {
            if (result.success) {
                setItems(result.content)
            } else {
                showError(result.message)
            }
        }).catch(err => {
            showError(err.message)
        })
    }, [])
    return (
        <Box display="flex" flexDirection="column" alignItems="stretch" sx={{ width: "100%" }}>
            {items.map(item => {
                return <PostPreview post={item} key={item.id}></PostPreview>
            })}
        </Box>
    )
}

export default PostList
