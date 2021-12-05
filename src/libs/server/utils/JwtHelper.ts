import ITokenUser from '@/libs/common/interfaces/ITokenUser'
import { APP_KEY } from '@/libs/server/utils/config'
import jwt from 'jsonwebtoken'


class JwtHelper {
    /** 获取签名后的token */
    static sign(id: string, accountName: string) {
        let token = jwt.sign({
            id: id,
            name: accountName
        }, APP_KEY, { expiresIn: 60 * 60 * 24 * 7 })
        return token
    }

    /** 验证token，并返回user */
    static verify(token: string): Promise<ITokenUser | null> {
        return new Promise((resolve, reject) => {
            if (token) {
                jwt.verify(token, APP_KEY, (err, user) => {
                    if (err) {
                        resolve(null)
                    } else {
                        resolve(user as ITokenUser)
                    }
                })
            } else {
                resolve(null)
            }
        })
    }
}
export default JwtHelper