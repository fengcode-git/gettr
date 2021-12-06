import PostType from "../enums/PostType"
import StatusType from "../enums/StatusType"

export default class PostView {
    id: string = ''
    person_id: string = ''
    status: StatusType = StatusType.visible
    like_num: number = 0
    type: PostType = PostType.post
    forward_num: number = 0
    content: string = ''
    create_time: Date = new Date()
    images: string = ''
    account_name: string = ''
    nickname: string = ''
    avatar: string = ''
    open_graph: string = ''
    video: string = ''
    ref_id: string = ''
    ref_person_id: string = ''
    ref_images: string = ''
    ref_create_time: Date = new Date()
    ref_content: string = ''
    ref_forward_num: number = 0
    ref_like_num: number = 0
    ref_type: PostType = PostType.post
    ref_status: StatusType = StatusType.visible
    ref_account_name: string = ''
    ref_avatar: string = ''
    ref_nickname: string = ''
    ref_open_graph: string = ''
    ref_video: string = ''
}