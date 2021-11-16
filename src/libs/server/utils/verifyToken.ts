// 参考文档：https://hoangvvo.com/blog/nextjs-middleware

import IExtendedApiRequest from "../interfaces/IExtendedApiRequest";
import ITokenUser from "../../common/interfaces/ITokenUser";
import JwtHelper from "./JwtHelper";

type Result = {
    status: number,
    headers: object,
    user?: ITokenUser
}

const verifyToken = async (req: IExtendedApiRequest): Promise<Result> => {
    const bearerHeader = req.headers.authorization
    const headers = {
        'Content-Type': 'application/json'
    }
    if (bearerHeader == null) {
        return { status: 403, headers }
    }
    const bearer = bearerHeader.split(' ')
    const token = bearer[1]
    if (token == null) {
        return { status: 401, headers }
    }
    try {
        let user = await JwtHelper.verify(token);
        return { status: 200, headers, user }
    } catch (error) {
        return { status: 403, headers }
    }
}
export default verifyToken;