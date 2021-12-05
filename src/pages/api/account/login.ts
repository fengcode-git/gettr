import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import PersonService from '@/libs/server/services/PersonService'
import apiHandler from '@/libs/server/middlewares/apiHandler'

export default apiHandler().post(async (req, res) => {
  let { username, password } = req.body
  let result = await PersonService.login(username, password)
  res.status(200).json(JsonResult.create(true, '', { id: result.id, nickname: result.nickname, token: result.token }))
})