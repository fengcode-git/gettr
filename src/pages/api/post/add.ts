import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import apiHandler from '@/libs/server/middlewares/apiHandler'
import authMiddleware from '@/libs/server/middlewares/authMiddleware'
import IPostInfo from '@/libs/common/interfaces/IPostInfo'
import PostService from '@/libs/server/services/PostService'

export default apiHandler().use(authMiddleware).post(async (req, res) => {
  let info = req.body as IPostInfo
  let postView = await PostService.add(req.user!.id, info)
  res.status(200).json(JsonResult.create(true, '', postView))
})