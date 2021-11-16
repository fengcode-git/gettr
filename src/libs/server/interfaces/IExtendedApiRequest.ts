import ITokenUser from "@/libs/common/interfaces/ITokenUser";
import { NextApiRequest } from "next";

interface IExtendedApiRequest extends NextApiRequest {
    user: ITokenUser
}
export default IExtendedApiRequest