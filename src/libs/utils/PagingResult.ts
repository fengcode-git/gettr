/** 分页结果 */
class PagingResult {
    currentPage: number = 1
    pageSize: number = 10
    rowCount: number = 0
    data: Array<any> = []
    pageCount: number = 0

    constructor(currentPage: number, pageSize: number, rowCount: number, data: Array<any>) {
        this.currentPage = currentPage
        this.pageSize = pageSize
        this.rowCount = rowCount
        this.data = data
        this.pageCount = Math.ceil(rowCount / pageSize)
    }
}
export default PagingResult