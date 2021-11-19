import AjaxHelper from "@/libs/client/utils/AjaxHelper"
import IUser from "@/libs/common/interfaces/IUser"

/** 登录 */
export const login = async (username: string, password: string) => {
    let result = await AjaxHelper.postJson<IUser>('/api/account/login', { username, password })
    return result.content
}

/** 注册 */
export const register = async (username: string, password: string) => {
    await AjaxHelper.postJson('/api/account/register', { username, password })
}

/** 退出 */
export const logout = async () => {
    await AjaxHelper.postJson('/api/account/logout', {})
}