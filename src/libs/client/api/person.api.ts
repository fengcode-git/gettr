import AjaxHelper from "@/libs/client/utils/AjaxHelper";
import IPersionInfo from "@/libs/common/interfaces/IPersionInfo";

export const getAllPerson = async (): Promise<IPersionInfo[]> => {
    let result = await AjaxHelper.get('/api/person/getall')
    return result.content as IPersionInfo[]
}