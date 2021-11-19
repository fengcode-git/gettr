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
        {state.visit ? <HomeView></HomeView> : <Welcome></Welcome>}
      </main>
    </>
  )
}

export default Home
