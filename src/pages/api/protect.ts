import { JsonResult } from "@/libs/common/interfaces/IJsonResult";
import apiHandler from "@/libs/server/middlewares/apiHandler";
import authMiddleware from "@/libs/server/middlewares/authMiddleware";

const protect = apiHandler.use(authMiddleware).get((req, res) => {
    res.status(200).json(JsonResult.create(true, '请求成功', {}))
})
export default protect