import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import CookieHelper from '@/libs/server/utils/CookieHelper'
import apiHandler from '@/libs/server/middlewares/apiHandler'

export default apiHandler().post(async (req, res) => {
    CookieHelper.RemoveTokenCookie(res)
    res.status(200).json(JsonResult.create(true, '', ''))
})