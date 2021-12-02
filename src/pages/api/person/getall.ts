import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import apiHandler from '@/libs/server/middlewares/apiHandler'
import PersonService from '@/libs/server/services/PersonService'

export default apiHandler().get(async (req, res) => {
    let result = await PersonService.getAll()
    res.status(200).json(JsonResult.create(true, '', result))
})