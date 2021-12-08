import React from 'react'
import { Box, Avatar } from "@mui/material"
import PreviewContentProvider from '@/components/preview/PreviewContentProvider'
import PostView from '@/libs/common/entity/PostView'
import AccountBar from '@/components/preview/AccountBar'
import PostContent from '@/components/preview/PostContent'
import OpenGraphBox from '@/components/common/OpenGraphBox'
import StringHelper from '@/libs/common/utils/StringHelper'
import IOpenGraph from '@/libs/common/interfaces/IOpenGraph'
import ImagesBox from '@/components/common/ImagesBox'
import Paths from '@/libs/client/utils/Paths'

interface Props {
    post: PostView
}

const PostPreview = (props: Props) => {
    let og = StringHelper.toObject<IOpenGraph>(props.post.open_graph)
    let images = StringHelper.toObject<Array<string>>(props.post.images)
    let avatar = props.post.avatar ? props.post.avatar : Paths.DEFAULT_AVATAR
    return (
        <PreviewContentProvider post={props.post}>
            <Box sx={{ display: "flex", alignItems: "flex-start", flex: "1", backgroundColor: "white", padding: "12px", marginTop: "10px", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.02) 0px 0px 7px 6px" }}>
                <Avatar alt="avatar" src={avatar} sx={{ marginRight: "10px" }}></Avatar>
                <Box display="flex" flexDirection="column" flex="1">
                    <AccountBar></AccountBar>
                    <PostContent></PostContent>
                    <OpenGraphBox data={og}></OpenGraphBox>
                    {images && <ImagesBox images={images} />}
                </Box>
            </Box>
        </PreviewContentProvider>
    )
}

export default PostPreview