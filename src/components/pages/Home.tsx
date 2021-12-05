import Welcome from '@/components/views/Welcome'
import React from 'react'
import HomeView from '@/components/views/HomeView'
import { useStore } from '@/store/StoreContext'

const Home = () => {
  const { state } = useStore()
  return (
    <>
       {state.visit ? <HomeView></HomeView> : <Welcome></Welcome>}
    </>
  )
}

export default Home