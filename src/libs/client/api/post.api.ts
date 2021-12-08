import AjaxHelper from "@/libs/client/utils/AjaxHelper";
import PostView from "@/libs/common/entity/PostView";
import { IJsonResult } from "@/libs/common/interfaces/IJsonResult";
import IPostInfo from "@/libs/common/interfaces/IPostInfo";
import PagingResult from "@/libs/common/utils/PagingResult";

export const insertPost = async (info: IPostInfo) => {
    let url = '/api/post/add'
    let result = await AjaxHelper.postJson<PostView>(url, info)
    return result
}
export const getAllPostViews = async () => {
    let url = '/api/post/getall'
    return await AjaxHelper.get<Array<PostView>>(url)
}

export const getPosts = async (page: number): Promise<IJsonResult<PagingResult<PostView>>> => {
    let url = "/api/post/getposts"
    let data = { page: page }
    return await AjaxHelper.postJson<PagingResult<PostView>>(url, data)
}