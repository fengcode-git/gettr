import DbHelper from "../db/DbHelper"

export default class BaseRepository{
    protected conn:DbHelper
    constructor(conn:DbHelper){
        this.conn=conn
    }
}