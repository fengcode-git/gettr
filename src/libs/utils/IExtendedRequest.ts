import { NextApiRequest } from "next";
import ITokenUser from "./ITokenUser";

interface IExtendedRequest extends NextApiRequest{
    user: ITokenUser
}
export default IExtendedRequest