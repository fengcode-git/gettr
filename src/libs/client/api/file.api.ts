import AjaxHelper from "@/libs/client/utils/AjaxHelper"

/** 上传文件，并返回文件URL */
const updateFile = async (file: File) => {
    let data = new FormData()
    data.append('file', file)
    let result = await AjaxHelper.postFormData<string>('/api/file/upload', data)
    return result.content
}
export default updateFile