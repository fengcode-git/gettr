import Post from "@/libs/common/entity/Post"
import PostView from "@/libs/common/entity/PostView"
import PostType from "@/libs/common/enums/PostType"
import StatusType from "@/libs/common/enums/StatusType"
import BaseRepository from "@/libs/server/services/BaseRepository"
import { DEFAULT_PAGE_SIZE } from "@/libs/server/utils/global"
import PagingHelper from "@/libs/server/utils/PagingHelper"
import PagingResult from "@/libs/common/utils/PagingResult"
import StringHelper from "@/libs/common/utils/StringHelper"

export default class PostRepository extends BaseRepository {
    async getById(id: string) {
        let sql = 'select * from post where id=? limit 1;'
        return await this.conn.single<Post>(sql, [id])
    }
    async getViewById(id: string) {
        let sql = 'select * from post_view where id = ? limit 1'
        return await this.conn.single<PostView>(sql, [id])
    }
    async insert(post: Post): Promise<Post> {
        let sql = `insert into post(id, ref_id, person_id, status, like_num, forward_num, content, type, create_time, open_graph, video, images) 
                   VALUES (?,?,?,?,?,?,?,?,?,?,?,?);`
        let id = StringHelper.generateUUID()
        let args = [post.id, post.ref_id, post.person_id, StatusType.visible, 0, 0, post.content, post.type, post.create_time, post.open_graph, post.video, post.images]
        await this.conn.execute(sql, args)
        return (await this.getById(id))!
    }
    async delete(id: string) {
        let sql = 'update post set status=? where id=? limit 1;'
        await this.conn.execute(sql, [StatusType.hide, id])
    }
    async getPosts(currentPage: number): Promise<PagingResult<PostView>> {
        let pageSize = DEFAULT_PAGE_SIZE
        let skipNum = PagingHelper.getSkipNum(currentPage, pageSize)
        let sql = 'select count(*) from post_view where status=? and type=?'
        let count = await this.conn.scalar(sql, [StatusType.visible, PostType.post])
        sql = 'select * from post_view where status=? and type=? order by create_time desc limit ? offset ?;';
        let args = [StatusType.visible, PostType.post, pageSize, skipNum]
        let data = await this.conn.query<PostView>(sql,args)        
        return new PagingResult(currentPage, pageSize, count, data)
    }
    async getPostWithFollower(currentPage: number, personId: string) {
        let pageSize = DEFAULT_PAGE_SIZE
        let skipNum = PagingHelper.getSkipNum(currentPage, pageSize)
        let sql = `select count(*) from post_view
                   where person_id in (
                       select follower_id from follow
                       where person_id = ?
                    ) and type = ?  and status = ?`
        let count = await this.conn.scalar(sql, [personId, PostType.post, StatusType.visible])
        sql = `select * from post_view
               where person_id in (
                  select follower_id from follow
                  where person_id = ?
                ) and type = ?  and status = ?
                order by create_time desc
                limit ? offset ?`
        let data = await this.conn.query<PostView>(sql, [personId, PostType.post, StatusType.visible, pageSize, skipNum])
        return new PagingResult<PostView>(currentPage, pageSize, count, data)
    }
    async getPostsWithPerson(currentPage: number, personId: string) {
        let pageSize = DEFAULT_PAGE_SIZE
        let skipNum = PagingHelper.getSkipNum(currentPage, pageSize)
        let sql = 'select count(*) from post_view where status=? and type=? and person_id=?;'
        let count = await this.conn.scalar(sql, [StatusType.visible, PostType.post, personId])
        sql = 'select * from post_view where status=? and type=? and person_id=? order by create_time desc limit ? offset ?;'
        let data = await this.conn.query<PostView>(sql, [StatusType.visible, PostType.post, personId, pageSize, skipNum])
        return new PagingResult(currentPage, pageSize, count, data)
    }
    async getComment(currentPage: number, postId: string) {
        let pageSize = DEFAULT_PAGE_SIZE
        let skipNum = PagingHelper.getSkipNum(currentPage, pageSize)
        let sql = 'select count(*) from post_view where status=? and type=? and ref_id=?;'
        let count = await this.conn.scalar(sql, [StatusType.visible, PostType.comment, postId])
        sql = 'select * from post_view where status=? and type=? and ref_id=? order by create_time desc limit ? offset ?'
        let data = await this.conn.query<PostView>(sql, [StatusType.visible, PostType.comment, postId, pageSize, skipNum])
        return new PagingResult(currentPage, pageSize, count, data)
    }
    async getNews(): Promise<string[]> {
        let sql = "select open_graph from post where open_graph is not null and post.open_graph!='' order by create_time desc limit 5 offset 0;"
        return await this.conn.query<string>(sql)
    }
}