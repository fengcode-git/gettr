import DbHelper from "@/libs/server/db/DbHelper"

export default class BaseRepository{
    protected conn:DbHelper
    constructor(conn:DbHelper){
        this.conn=conn
    }
}