declare module 'open-graph-scraper' {
    export interface IOptin {
        url: string,
        timeout: number,
        headers?: any,
        agent?: any
    }
    interface OpenGraphImage {
        height: string;
        type: string;
        url: string;
        width: string;
    }
    interface IResult {
        success: boolean,
        error: string,
        ogImage?: OpenGraphImage | OpenGraphImage[] | undefined
        ogTitle?: string,
        ogDescription?: string
    }
    declare function run(
        options: IOptin,
        callback: (error: boolean, result: IResult) => void,
    ): void;
    export = run
}