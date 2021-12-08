import React from 'react'
import { Box } from '@mui/material'
import PostView from '@/libs/common/entity/PostView'
import PostPreview from '@/components/preview/PostPreview'
import useToast from '@/components/toast/useToast'
import ScrollLoad from '@/components/common/ScrollLoad'
import { getPosts } from '@/libs/client/api/post.api'

const PostList = () => {
    const [items, setItems] = React.useState<Array<PostView>>([])
    const { showError } = useToast()
    const [page, setPage] = React.useState(0)
    const [pageCount, setPageCount] = React.useState(1)

    const loadData = () => {
        let currentPage = page + 1
        getPosts(currentPage).then(result => {
            if (!result.success) {
                showError(result.message)
            } else {
                let content = result.content
                setPage(currentPage)
                setPageCount(content.pageCount)
                let newItems = items.concat(content.data)
                setItems(newItems)
            }
        }).catch(err => {
            showError(err.message)
        })
    }
    return (
        <React.Fragment>
            <Box display="flex" flexDirection="column" alignItems="stretch" sx={{ width: "100%" }}>
                {items.map(item => {
                    return <PostPreview post={item} key={item.id}></PostPreview>
                })}
            </Box>
            <ScrollLoad loadData={loadData} stopLoad={page > pageCount}></ScrollLoad>
        </React.Fragment>

    )
}

export default PostList
