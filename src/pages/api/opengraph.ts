import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import apiHandler from '@/libs/server/middlewares/apiHandler'
import OpenGraphService from '@/libs/server/services/OpenGraphService'

export default apiHandler().post(async (req, res) => {
  let { url } = req.body
  let result = await OpenGraphService.getInfo(url)
  res.status(200).json(JsonResult.create(true, '', result))
})