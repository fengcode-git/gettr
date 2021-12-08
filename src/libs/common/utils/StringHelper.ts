import dayjs from "dayjs"
import relativeTime from 'dayjs/plugin/relativeTime'
import md5 from "md5"
import { v4 } from 'uuid'

const LONG_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export default class StringHelper {
    static md5(str: string) {
        return md5(str)
    }
    static isEmpty(str: string) {
        return str == null || str == '' || str.trim() == ''
    }
    static generateUUID() {
        return v4()
    }
    static getNowString() {
        return dayjs().format(LONG_TIME_FORMAT)
    }
    static getLongTimeString(dt: Date) {
        return dayjs(dt).format(LONG_TIME_FORMAT)
    }
    static parseDateWithString(date: string): Date {
        return dayjs(date, LONG_TIME_FORMAT).toDate()
    }
    static getShortDate(dt: Date) {
        console.log(dt)
        return `${dt.getMonth()}月-${dt.getDate()}日`
    }
    static getRelativeTimeMessage(dt: Date) {
        dayjs.extend(relativeTime)
        return dayjs(dt).fromNow()
    }
    static isUrl(text: string) {
        try {
            let url = new URL(text)
            return url.protocol === "http:" || url.protocol === "https:"
        } catch (error) {
            return false
        }
    }
    static toObject<T>(json: string): T | null {
        if (json) {
            try {
                return JSON.parse(json) as T
            } catch (error) {
                return null
            }
        } else {
            return null
        }
    }
}