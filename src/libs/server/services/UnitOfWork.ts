import DbHelper from "@/libs/server/db/DbHelper"
import PersonRepository from "@/libs/server/services/PersonRepository"
import PostRepository from "@/libs/server/services/PostRepository"

export default class UnitOfWork {
    readonly db: DbHelper
    readonly person: PersonRepository
    readonly post: PostRepository
    private constructor(db: DbHelper) {
        this.db = db
        this.person = new PersonRepository(db)
        this.post = new PostRepository(db)
    }
    static async create(): Promise<UnitOfWork> {
        let db = await DbHelper.create()
        return new UnitOfWork(db)
    }
}