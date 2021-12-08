import Post from "@/libs/common/entity/Post";
import PostView from "@/libs/common/entity/PostView";
import PostType from "@/libs/common/enums/PostType";
import IPostInfo from "@/libs/common/interfaces/IPostInfo";
import UnitOfWork from "@/libs/server/services/UnitOfWork";


export default class PostService {
    static async add(personId: string, info: IPostInfo): Promise<PostView> {
        let work = await UnitOfWork.create();
        let post = Post.create(info, personId)
        await work.post.insert(post)
        let postView = await work.post.getViewById(post.id)
        work.db.close()
        return postView!
    }

    static async getPosts(currentPage: number, personId: string = '') {
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

    static async getAllPostViews(): Promise<PostView[]> {
        let work = await UnitOfWork.create()
        let result = await work.postView.getAll()
        work.db.close()
        return result
    }

    static async delete(id: string) {
        let work = await UnitOfWork.create()
        await work.post.delete(id)
        work.db.close()
    }
}