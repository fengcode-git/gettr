import PostStatus from "../enums/StatusType"
import PostType from "../enums/PostType"

class Post{
    id: string = ''
    ref_id: string = ''
    person_id: string = ''
    status: PostStatus = PostStatus.visible
    like_num: number = 0
    forward_num: number = 0
    content: string = ''
    type: PostType = PostType.post
    create_time: Date = new Date()
    images: string = ''
}

export default Post