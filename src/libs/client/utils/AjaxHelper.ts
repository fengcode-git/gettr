import StorageHelper from "@/libs/client/utils/StorageHelper";
import { IJsonResult, JsonResult } from "@/libs/common/interfaces/IJsonResult"
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'

const TIMEOUT = 1000 * 10;

const createHeader = (header: AxiosRequestHeaders): AxiosRequestHeaders => {
    let state = StorageHelper.get()
    if (state && state.token) {
        header["Authorization"] = `Bearer ${state.token}`
    }
    return header
}

export default class AjaxHelper {
    static async get<T>(url: string, params: Record<string, string> | null = null): Promise<IJsonResult<T>> {
        try {
            let response = await axios.get(url, {
                params: params,
                timeout: TIMEOUT,
                headers: createHeader({})
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
                timeout: TIMEOUT,
                headers: createHeader({})
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
                headers: createHeader({ 'Content-Type': 'multipart/form-data' })
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
