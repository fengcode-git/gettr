import AjaxHelper from "@/libs/client/utils/AjaxHelper";
import PostView from "@/libs/common/entity/PostView";
import IPostInfo from "@/libs/common/interfaces/IPostInfo";

export const insertPost = async (info: IPostInfo) => {
    let url = '/api/post/add'
    let result = await AjaxHelper.postJson<PostView>(url, info)
    return result
}