/** 分页帮助类 */
class PagingHelper {
    /** 获取skip数值 */
    static getSkipNum(currentPage:number, pageSize: number):number{
        return (currentPage - 1) * pageSize
    }
    /** 获取分页总数 */
    static getPageCount(rowCount: number, pageSize: number): number{
        return Math.ceil(rowCount / pageSize)
    }
}
export default PagingHelper