import ITokenUser from "@/libs/common/interfaces/ITokenUser";
import { IncomingMessage } from "http"

declare module 'next' {
    export interface NextApiRequest extends IncomingMessage {
        /** 当前登录用户 */
        user: ITokenUser | null
    }
}