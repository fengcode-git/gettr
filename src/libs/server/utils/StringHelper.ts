import dayjs from "dayjs"
import md5 from "md5"
import { v4 } from 'uuid'

export default class StringHelper {
    static md5(str: string) {
        return md5(str)
    }
    static isEmpty(str: string){
        return str == null || str == '' || str.trim() == ''
    }
    static generateUUID() {
        return v4()
    }
    static getNowString(){
        return dayjs().format('YYYY-MM-DD HH:mm:ss')
    }
}