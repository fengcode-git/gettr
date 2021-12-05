interface IStoreState {
    /** 是否允许匿名用户访问首页 */
    visit: boolean,
    /** 用户是否登录 */
    login: boolean,
    /** 已登录用户名称 */
    nickname: string,
    /** 用户ID */
    id: string,
    /** 授权token */
    token: string
}
export default IStoreState