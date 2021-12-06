import PostType from "@/libs/common/enums/PostType";

interface IPostInfo {
    content: string
    images: string
    open_graph: string
    video: string
    ref_id: string
    type: PostType
}
export default IPostInfo