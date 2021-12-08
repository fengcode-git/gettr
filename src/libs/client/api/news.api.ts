import AjaxHelper from "@/libs/client/utils/AjaxHelper"
import { IJsonResult } from "@/libs/common/interfaces/IJsonResult"

export interface INewsItem {
    open_graph: string
}

export const getNews = async (): Promise<IJsonResult<INewsItem[]>> => {
    let url = '/api/post/getnews'
    return await AjaxHelper.get<Array<INewsItem>>(url)
}