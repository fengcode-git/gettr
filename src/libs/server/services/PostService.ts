import PostView from "@/libs/common/entity/PostView";
import PostType from "@/libs/common/enums/PostType";
import UnitOfWork from "@/libs/server/services/UnitOfWork";


export default class PostService {
    static async add(content: string, personId: string, pType: PostType = PostType.post, refId: string = '', images: string = ''): Promise<PostView> {
        let work = await UnitOfWork.create();
        let post = await work.post.insert(content, personId, pType, refId, images)
        let postView = await work.post.getViewById(post.id)
        work.db.close()
        return postView!
    }

    static async getPosts(currentPage: number, personId: string='') {
        let work = await UnitOfWork.create()
        let result = null;
        if (personId) {
            result = await work.post.getPostWithFollower(currentPage, personId)
        } else {
            result = await work.post.getPosts(currentPage)
        }
        work.db.close()
        return result
    }

    static async delete(id: string) {
        let work = await UnitOfWork.create()
        await work.post.delete(id)
        work.db.close()
    }
}