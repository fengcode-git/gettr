import PostType from "@/libs/common/enums/PostType"
import StatusType from "@/libs/common/enums/StatusType"
import IPostInfo from "@/libs/common/interfaces/IPostInfo"
import StringHelper from "@/libs/common/utils/StringHelper"


class Post {
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
    open_graph: string = ''
    video: string = ''
    static create(info: IPostInfo, personId: string): Post {
        let p = new Post()
        p.id = StringHelper.generateUUID()
        p.ref_id = info.ref_id
        p.person_id = personId
        p.content = info.content
        p.type = info.type
        p.images = info.images
        p.open_graph = info.open_graph
        p.video = info.video
        return p
    }
}

export default Post