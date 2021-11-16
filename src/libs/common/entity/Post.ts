import PostType from "@/libs/common/enums/PostType"
import StatusType from "@/libs/common/enums/StatusType"


class Post{
    id: string = ''
    ref_id: string = ''
    person_id: string = ''
    status: StatusType = StatusType.visible
    like_num: number = 0
    forward_num: number = 0
    content: string = ''
    type: PostType = PostType.post
    create_time: Date = new Date()
    images: string = ''
}

export default Post