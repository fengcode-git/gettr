import DbHelper from "@/libs/server/db/DbHelper"
import PersonRepository from "@/libs/server/services/PersonRepository"
import PostRepository from "@/libs/server/services/PostRepository"
import PostViewRepository from "@/libs/server/services/PostViewRepository"

export default class UnitOfWork {
    readonly db: DbHelper
    readonly person: PersonRepository
    readonly post: PostRepository
    readonly postView: PostViewRepository
    private constructor(db: DbHelper) {
        this.db = db
        this.person = new PersonRepository(db)
        this.post = new PostRepository(db)
        this.postView = new PostViewRepository(db)
    }
    static async create(): Promise<UnitOfWork> {
        let db = await DbHelper.create()
        return new UnitOfWork(db)
    }
}