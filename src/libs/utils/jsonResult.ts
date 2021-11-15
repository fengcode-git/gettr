export interface IJsonResult {
    content: any,
    success: boolean,
    message: string
}

export const createJsonResult = (success: boolean, message: string, content: any): IJsonResult => {
    return {
        success: success,
        message: message,
        content: content
    }
}