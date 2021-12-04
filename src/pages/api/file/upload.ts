import { JsonResult } from '@/libs/common/interfaces/IJsonResult'
import apiHandler from '@/libs/server/middlewares/apiHandler'
import formidable from "formidable"
import fs from "fs"
import path from 'path'
import appRoot from 'app-root-path'
import StringHelper from '@/libs/common/utils/StringHelper';

// 必须禁用bodyParser才能上传成功
// https://nextjs.org/docs/api-routes/api-middlewares#custom-config
export const config = {
    api: {
        bodyParser: false,
    }
}

export default apiHandler().post(async (req, res) => {
    const form = new formidable.IncomingForm()
    form.parse(req, ((err, fields, files) => {
        if (err) {
            return res.json(JsonResult.create(false, err.message, {}))
        }
        let file = files['file'] as formidable.File
        const oldPath = file.path
        const extension = path.extname(file.name as string)
        const newFileName = (StringHelper.generateUUID() + extension).toLowerCase()
        const catalogPath = path.join(appRoot.path, '/public/uploads')
        if (!fs.existsSync(catalogPath)) {
            fs.mkdirSync(catalogPath);
        }
        const newFilePath = catalogPath + '/' + newFileName
        const rawData = fs.readFileSync(oldPath)
        fs.writeFile(newFilePath, rawData, function (err) {
            if (err) {
                return res.json(JsonResult.create(false, err.message, {}))
            }
            return res.json(JsonResult.create(true, '', `/uploads/${newFileName}`))
        })
    }))
})