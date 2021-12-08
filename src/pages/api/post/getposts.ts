import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import apiHandler from '@/libs/server/middlewares/apiHandler'
import PostService from '@/libs/server/services/PostService'

export default apiHandler().post(async (req, res) => {
    let page = parseInt(req.body.page)
    let result = await PostService.getPosts(page)
    res.status(200).json(JsonResult.create(true, '', result))
})