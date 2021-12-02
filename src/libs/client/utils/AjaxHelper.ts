import { IJsonResult, JsonResult } from "@/libs/common/interfaces/IJsonResult"
import axios from 'axios'

const TIMEOUT = 1000 * 10;

export default class AjaxHelper {
    static async get<T>(url: string, params: Record<string, string> | null = null): Promise<IJsonResult<T>> {
        try {
            let response = await axios.get(url, {
                params: params,
                timeout: TIMEOUT
            })
            return response.data as IJsonResult<T>
        } catch (error: any) {
            if (error.response) {
                throw new Error(error.response.data.message)
            } else {
                throw new Error(error.message)
            }
        }
    }
    static async postJson<T>(url: string, params: object): Promise<IJsonResult<T>> {
        try {
            let response = await axios.post(url, params, {
                timeout: TIMEOUT
            })
            return response.data as JsonResult<T>
        } catch (error: any) {
            if (error.response) {
                throw new Error(error.response.data.message)
            } else {
                throw new Error(error.message)
            }
        }
    }
    static async postFormData<T>(url: string, params: FormData, timeout?: number): Promise<IJsonResult<T>> {
        try {
            let response = await axios.post(url, params, {
                timeout: timeout ? timeout : TIMEOUT,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return response.data as JsonResult<T>

        } catch (error: any) {
            if (error.response) {
                throw new Error(error.response.data.message)
            } else {
                throw new Error(error.message)
            }
        }
    }
}
