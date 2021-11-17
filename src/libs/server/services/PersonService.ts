import Person from "@/libs/common/entity/Person"
import UnitOfWork from "@/libs/server/services/UnitOfWork"
import JwtHelper from "@/libs/server/utils/JwtHelper"
import StringHelper from "@/libs/server/utils/StringHelper"


export const PWD_REG = /^\w+$/
export const ACCOUNT_REG = /^[a-zA-Z0-9]+$/

export default class PersonService {
    static async getByName(name: string) {
        if (StringHelper.isEmpty(name)) {
            throw new Error('账号名称不能为空')
        }
        let work = await UnitOfWork.create()
        try {
            let p = await work.person.getByName(name)
            return p
        } catch (error) {
            throw error
        } finally {
            await work.db.close()
        }
    }

    /** 登录成功后，返回签名后的token */
    static async login(name: string, password: string): Promise<string> {
        name = name.trim()
        password = password.trim()
        if (!ACCOUNT_REG.test(name)) {
            throw new Error('账号名称必须由字母或数字组成')
        }
        if (!PWD_REG.test(password)) {
            throw new Error('密码必须由字母、数字、下划线组成')
        }
        let work = await UnitOfWork.create()
        try {
            let p = await work.person.getByName(name)
            if (p == null) {
                throw new Error('账号或密码错误')
            } else if (p.password != StringHelper.md5(password)) {
                throw new Error('账号或密码错误')
            } else {
                return JwtHelper.sign(p.id, p.account_name)
            }
        } catch (error) {
            throw error
        } finally {
            await work.db.close()
        }
    }
    static async register(name: string, password: string): Promise<Person> {
        name = name.trim()
        password = password.trim()
        if (!ACCOUNT_REG.test(name)) {
            throw new Error('账号名称必须由字母或数字组成')
        }
        if (!PWD_REG.test(password)) {
            throw new Error('密码必须由字母、数字、下划线组成')
        }
        let work = await UnitOfWork.create()
        try {
            let result = await work.person.isExistName(name)
            if (result) {
                throw new Error('该账户已存在')
            }
            let newPerson = await work.person.insert(name, password)
            return newPerson!
        } catch (error) {
            throw error
        } finally {
            await work.db.close()
        }
    }
    static async follow(personId: string, followId: string): Promise<void> {
        if (StringHelper.isEmpty(personId)) {
            throw new Error('用户ID不能为空')
        }
        if (StringHelper.isEmpty(followId)) {
            throw new Error('关注者ID不能为空')
        }
        let work = await UnitOfWork.create()
        let isFollow = await work.person.isFollow(personId, followId)
        if (!isFollow) {
            await work.person.follow(personId, followId)
        }
        work.db.close()
    }
    static async removeFollow(personId: string, followId: string): Promise<void> {
        if (StringHelper.isEmpty(personId)) {
            throw new Error('用户ID不能为空')
        }
        if (StringHelper.isEmpty(followId)) {
            throw new Error('关注者ID不能为空')
        }
        let work = await UnitOfWork.create()
        await work.person.removeFollow(personId, followId)
    }
}