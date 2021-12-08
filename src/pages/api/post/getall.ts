import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import apiHandler from '@/libs/server/middlewares/apiHandler'
import PostService from '@/libs/server/services/PostService'

export default apiHandler().get(async (req, res) => {
    let result = await PostService.getAllPostViews()
    res.status(200).json(JsonResult.create(true, '', result))
})