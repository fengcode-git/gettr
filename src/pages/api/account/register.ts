import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import apiHandler from '@/libs/server/middlewares/apiHandler'
import PersonService from '@/libs/server/services/PersonService'

export default apiHandler().post(async (req, res) => {
  let { username, password } = req.body
  await PersonService.register(username, password)
  res.status(200).json(JsonResult.create(true, '', {}))
})