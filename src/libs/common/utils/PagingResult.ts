import IPagingResult from "@/libs/common/interfaces/IPagingResult"

/** 分页结果 */
class PagingResult<T> implements IPagingResult<T> {
    currentPage: number = 1
    pageSize: number = 10
    rowCount: number = 0
    data: Array<T> = []
    pageCount: number = 0

    constructor(currentPage: number, pageSize: number, rowCount: number, data: Array<T>) {
        this.currentPage = currentPage
        this.pageSize = pageSize
        this.rowCount = rowCount
        this.data = data
        this.pageCount = Math.ceil(rowCount / pageSize)
    }
}
export default PagingResult