import { JsonResult } from "@/libs/common/interfaces/IJsonResult";
import CookieHelper from "@/libs/server/utils/CookieHelper";
import JwtHelper from "@/libs/server/utils/JwtHelper";
import { NextApiRequest, NextApiResponse } from "next";

const authMiddleware = async (req: NextApiRequest, res: NextApiResponse, next: (err?: any) => void) => {
    let token = CookieHelper.getTokenCookieFromRequest(req)
    if (token) {
        let user = await JwtHelper.verify(token)
        if (user) {
            req.user = user
            next()
        } else {
            res.status(401).json(JsonResult.create(false, '请求无效，请重新登录系统', {}))
        }
    } else {
        res.status(403).json(JsonResult.create(false, '禁止访问，请登录系统', {}))
    }
}
export default authMiddleware