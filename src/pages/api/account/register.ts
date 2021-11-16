import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import PersonService from '@/libs/server/services/PersonService'
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'


export default nc<NextApiRequest, NextApiResponse>({
  onError(err, req, res) {
    let result = JsonResult.create(false, err.message, '')
    res.status(500).json(result)
  }
}).post(async (req, res) => {
  let { username, password } = req.body
  await PersonService.register(username, password)
  let result = JsonResult.create(true, '注册成功', '')
  res.status(200).json(result)
})