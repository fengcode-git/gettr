export interface IJsonResult<T> {
    content: T,
    success: boolean,
    message: string
}

export class JsonResult<T> implements IJsonResult<T>{
    content: T;
    success: boolean;
    message: string;
    constructor(success: boolean, message: string, content: T) {
        this.success = success
        this.message = message
        this.content = content
    }
    static create<T>(success: boolean, message: string, content: T) {
        return new JsonResult(success, message, content)
    }
}