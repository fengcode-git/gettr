import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import type { NextApiRequest, NextApiResponse } from 'next'
import nc from 'next-connect'
import CookieHelper from '@/libs/server/utils/CookieHelper'

export default nc<NextApiRequest, NextApiResponse>({
    onNoMatch(req,res){
        res.status(405).json(JsonResult.create(false,`Method ${req.method} not allowed`,{}))
    },
    onError(err, req, res) {
        let result = JsonResult.create(false, err.message, '')
        res.status(500).json(result)
    }
}).post(async (req, res) => {
    CookieHelper.RemoveTokenCookie(res)
    res.status(200).json(JsonResult.create(true, '', ''))
})