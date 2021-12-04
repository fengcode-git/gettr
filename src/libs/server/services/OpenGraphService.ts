import IOpenGraph from '@/libs/common/interfaces/IOpenGraph'
import { PROXY_IP, PROXY_PORT } from '@/libs/server/utils/config'
import ogs from 'open-graph-scraper'
import tunnel from 'tunnel'

class OpenGraphService {
    static getInfo(url: string): Promise<IOpenGraph> {
        return new Promise((resolve, reject) => {
            let data: IOpenGraph = { title: '', url, image: '', description: '' }
            let option: ogs.IOptin = {
                url: url,
                timeout: 10 * 1000,
                headers: {
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
                }
            }
            if (PROXY_IP) {
                option.agent = {
                    https: tunnel.httpsOverHttp({
                        proxy: {
                            host: PROXY_IP,
                            port: PROXY_PORT
                        }
                    })
                }
            }
            ogs(option, function (error, result) {        
                if (!result.success) {
                    reject(new Error(result.error))
                } else {
                    if (result.ogImage) {
                        if (Array.isArray(result.ogImage) && result.ogImage.length > 0) {
                            data.image = result.ogImage[0].url
                        } else {
                            let image = result.ogImage as any
                            if (image.url) {
                                data.image = image.url
                            }
                        }
                    }
                    data.title = result.ogTitle ? result.ogTitle : ''
                    data.description = result.ogDescription ? result.ogDescription : ''
                    resolve(data)
                }
            })
        })
    }
}
export default OpenGraphService