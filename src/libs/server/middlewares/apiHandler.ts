import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'

const apiHandler = () => {
    return nc<NextApiRequest, NextApiResponse>({
        onNoMatch(req, res) {
            res.status(405).json(JsonResult.create(false, `Method ${req.method} not allowed`, {}))
        },
        onError(err, req, res) {
            let result = JsonResult.create(false, err.message, '')
            res.status(500).json(result)
        }
    })
}

export default apiHandler