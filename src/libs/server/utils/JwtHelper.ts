import ITokenUser from '@/libs/common/interfaces/ITokenUser'
import { APP_KEY } from '@/libs/server/utils/config'
import jwt from 'jsonwebtoken'


class JwtHelper {
    /** 获取签名后的token */
    static sign(id: string, accountName: string) {
        let token = jwt.sign({
            id: id,
            name: accountName
        }, APP_KEY)
        return token
    }

    /** 验证token，并返回user */
    static verify(token: string): Promise<ITokenUser> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, APP_KEY, (err, user) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(user as ITokenUser)
                }
            })
        })
    }
}
export default JwtHelper