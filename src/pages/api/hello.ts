// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import ConnectFactory from '../../libs/db/ConnectFactory'

type Data = {
  name: string
}

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>) {
   ConnectFactory.create().then(db=>{
     console.log(db)
   }).catch(err=>{
     console.error(err)
   })
  res.status(200).json({ name: 'John Doe' })
}
