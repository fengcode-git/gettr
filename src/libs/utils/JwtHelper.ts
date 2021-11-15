import jwt from 'jsonwebtoken'
import config from './config'
import ITokenUser from './ITokenUser'

class JwtHelper {
    /** 获取签名后的token */
    static sign(id: string, accountName: string) {
        let token = jwt.sign({
            id: id,
            name: accountName
        }, config.app.key)
        return token
    }

    /** 验证token，并返回user */
    static verify(token: string): Promise<ITokenUser> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.app.key, (err, user) => {
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