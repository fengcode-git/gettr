import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import PersonService from '@/libs/server/services/PersonService'
import CookieHelper from '@/libs/server/utils/CookieHelper'
import apiHandler from '@/libs/server/middlewares/apiHandler'

export default apiHandler.post(async (req, res) => {
  let { username, password } = req.body
  let result = await PersonService.login(username, password)
  CookieHelper.SetTokenCookie(res, result.token)
  res.status(200).json(JsonResult.create(true, '', { id: result.id, nickname: result.nickname }))
})