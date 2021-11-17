import cookie from 'cookie'
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface HttpRequest {
    cookies: {
        [key: string]: string;
    }
}

class CookieHelper {
    static SetTokenCookie(res: NextApiResponse, token: string) {
        res.setHeader("Set-Cookie", cookie.serialize("token", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            sameSite: 'strict',
            path: '/'
        }))
    }
    static RemoveTokenCookie(res: NextApiResponse) {
        res.setHeader("Set-Cookie", cookie.serialize("token", '', {
            httpOnly: true,
            expires: new Date(0),
            sameSite: 'strict',
            path: '/'
        }))
    }
    static getTokenCookieFromPage(content: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>): string {
        return this.getTokenCookieFromRequest(content.req)
    }
    static getTokenCookieFromRequest(req: HttpRequest): string {
        let cookies = req.cookies
        if (cookies && cookies.token) {
            return cookies.token
        } else {
            return ''
        }
    }
}
export default CookieHelper