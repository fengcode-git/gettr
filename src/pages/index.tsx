import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import AjaxHelper from '@/libs/client/utils/AjaxHelper'

const Home: NextPage = () => {
  let login = (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault()
    AjaxHelper.postJson('/api/account/login', { username: 'admin', password: '123456' }).then(result => {
      console.dir(result)
    })
  }
  let logout = (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault()
    AjaxHelper.postJson('/api/account/logout', {})
  }
  let project = (ev: React.MouseEvent<HTMLElement>) => {
    ev.preventDefault()
    AjaxHelper.get('/api/protect').then(result => {
      console.log(result)
    }).catch(error => {
      console.log(error.message)
    })
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.nav}>
          <a href="#" onClick={login}>登录</a>
          <a href="#" onClick={logout}>退出</a>
          <a href="#" onClick={project}>访问保护方法</a>
          <Link href="/info">
            <a>保护页面</a>
          </Link>
        </div>
        <h1>首页</h1>
      </main>
    </>
  )
}

export default Home
