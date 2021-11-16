interface IPagingResult<T>{
    currentPage: number
    pageSize: number
    rowCount: number
    data: Array<T>
    pageCount: number
}
export default IPagingResult