import Person from "@/libs/common/entity/Person"
import RoleType from "@/libs/common/enums/RoleType"
import BaseRepository from "@/libs/server/services/BaseRepository"
import StringHelper from "@/libs/common/utils/StringHelper"

export default class PersonRepository extends BaseRepository {
    async insert(accountName: string, password: string): Promise<Person> {
        const hash = StringHelper.md5(password)
        const id = StringHelper.generateUUID()
        accountName = accountName.toLowerCase().trim()
        const now = StringHelper.getNowString()
        const sql = `insert into person(id, account_name, nickname, password, avatar, create_time, role) VALUES (?,?,?,?,?,?,?);`
        const args = [id, accountName, accountName, hash, '', now, RoleType.user]
        await this.conn.execute(sql, args)
        return (await this.getById(id))!
    }
    async modifyNickname(id: string, nickname: string): Promise<Person> {
        const sql = 'update person set nickname=? where id = ? limit 1;'
        await this.conn.execute(sql, [nickname, id])
        return (await this.getById(id))!
    }
    async getByName(accountName: string): Promise<Person | null> {
        accountName = accountName.toLowerCase().trim()
        const sql = 'select * from person where account_name=? limit 1;'
        return await this.conn.single<Person>(sql, [accountName])
    }
    async isExistName(accountName: string): Promise<boolean> {
        accountName = accountName.toLowerCase().trim()
        let count = await this.conn.scalar('select count(*) from person where account_name=?;', [accountName])
        return count > 0
    }
    async getById(id: string): Promise<Person | null> {
        const sql = 'select * from person where id=? limit 1;'
        return await this.conn.single<Person>(sql, [id])
    }
    async isFollow(personId: string, followerId: string): Promise<boolean> {
        const sql = 'select count(*) from follow where person_id=? and follower_id=?;'
        const count = await this.conn.scalar(sql, [personId, followerId])
        return count > 0
    }
    async hasFollow(personId: string): Promise<boolean> {
        const sql = 'select count(*) from follow where person_id=?;'
        const count = await this.conn.scalar(sql, [personId])
        return count > 0
    }
    async follow(personId: string, follower_id: string): Promise<void> {
        const sql = 'insert into follow(id, person_id, follower_id) VALUES (?,?,?);'
        const id = StringHelper.generateUUID()
        await this.conn.execute(sql, [id, personId, follower_id])
    }
    async removeFollow(personId: string, followerId: string): Promise<void> {
        const sql = 'delete from follow where person_id=? and follower_id=? limit 1;'
        await this.conn.execute(sql, [personId, followerId])
    }
}