import { JsonResult } from "@/libs/common/interfaces/IJsonResult";
import JwtHelper from "@/libs/server/utils/JwtHelper";
import { NextApiRequest, NextApiResponse } from "next";

const msg403 = "禁止访问，请登录系统"
const msg401 = "请求无效，请重新登录系统"
const authMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: (err?: any) => void) => {
    /*
   * TOKEN格式
   * Authorization: Bearer <token> 
   */
    const bearerHeader = req.headers['authorization']
    if (!bearerHeader) {
        res.status(403).json(JsonResult.create(false, msg403, {}))
    } else {
        const bearer = bearerHeader.split(' ')
        const token = bearer[1]
        if (!token) {
            res.status(401).json(JsonResult.create(false, msg401, {}))
        } else {
            let user = await JwtHelper.verify(token)
            if (user) {
                req.user = user
                next()
            } else {
                res.status(401).json(JsonResult.create(false, msg401, {}))
            }
        }
    }
}
export default authMiddleware