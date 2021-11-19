import type { NextPage } from 'next'
import Welcome from '@/components/views/Welcome'
import React from 'react'
import HomeView from '@/components/views/HomeView'
import { useStore } from '@/store/StoreContext'

const Home: NextPage = () => {
  const { state } = useStore()
  return (
    <>
      <main>
       <p>服务器首页</p>
      </main>
    </>
  )
}

export default Home
