import AjaxHelper from "@/libs/client/utils/AjaxHelper"
import IOpenGraph from "@/libs/common/interfaces/IOpenGraph"

const getOpenGraphInfo =async (url:string)=>{
    let result = await AjaxHelper.postJson<IOpenGraph>('/api/opengraph', {url})
    return result.content
}
export default getOpenGraphInfo