import CookieHelper from '@/libs/server/utils/CookieHelper'
import JwtHelper from '@/libs/server/utils/JwtHelper'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async (context) => {
    let token = CookieHelper.getTokenCookieFromPage(context)
    try {
        let user = await JwtHelper.verify(token)
        return {
            props: {}
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
}

let Info = () => {
    return (
        <div>
            <p>保护页面</p>
            <Link href='/'>
                <a>返回首页</a>
            </Link>
        </div>
    )
}

export default Info