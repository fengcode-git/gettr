import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import PersonService from '../../../libs/services/PersonService'
import { createJsonResult } from '../../../libs/utils/jsonResult'

export default nc<NextApiRequest, NextApiResponse>({
  onError(err, req, res) {
    let result = createJsonResult(false, err.message, '')
    res.status(500).json(result)
  }
}).post(async (req, res) => {
  let { username, password } = req.body
  await PersonService.register(username, password)
  let result = createJsonResult(true, '注册成功', '')
  res.status(200).json(result)
})