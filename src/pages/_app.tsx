import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/Main'),
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>交流社区</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <DynamicComponentWithNoSSR></DynamicComponentWithNoSSR>
    </React.Fragment>
  )
}
export default MyApp