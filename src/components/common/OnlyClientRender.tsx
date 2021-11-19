import React from 'react'

const OnlyClientRender = ({children}:{children:React.ReactNode})=>{
    const [isMounted, setMounted] = React.useState(false)
    React.useEffect(()=>{
        setMounted(true)
    },[])
    if(isMounted){
        return children
    }else{
        return null
    }
}
export default OnlyClientRender