import PostView from "@/libs/common/entity/PostView";
import BaseRepository from "@/libs/server/services/BaseRepository";

class PostViewRepository extends BaseRepository {
    async getAll(): Promise<PostView[]> {
        let sql = 'select * from post_view'
        return await this.conn.query<PostView>(sql)
    }
}
export default PostViewRepository